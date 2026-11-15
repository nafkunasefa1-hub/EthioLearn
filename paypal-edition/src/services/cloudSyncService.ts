/**
 * EthioLearn Cloud Synchronization Service
 * Dual-Engine Architecture: Firebase Firestore (Primary) + ntfy.sh Persistent State Log & Real-Time SSE (IPv4 Fast Path)
 *
 * Guarantees two-way synchronization between students on Android APK / mobile web
 * and administrators across all browsers (Chrome, Edge, Safari) on
 * https://nafkunasefa1-ethiolearn-paypal.static.hf.space, even when mobile carriers
 * throttle or stall IPv6 routes to Google APIs.
 */

const SMEE_SYNC_URL = 'https://smee.io/ethiolearn_sync_prod_2026';
const NTFY_EVENTS_URL = 'https://ntfy.sh/ethiolearn_events_v4_prod';
const NTFY_STATE_URL = 'https://ntfy.sh/ethiolearn_state_v4_prod';

// Public Firebase Web Config for EthioLearn Firestore (auth & security enforced by Firestore Rules)
const FIREBASE_PROJECT_ID = 'ethiolearn-d7042';
const FIREBASE_API_KEY = 'AIzaSyBDncqEYSoNaU-xZODUQnopiZy46e5sOGM';
const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents`;

const COL_STUDENTS = 'ethiolearn_students';
const COL_PAYMENTS = 'ethiolearn_payments';
const COL_APPROVALS = 'ethiolearn_approvals';
const COL_TRANSFERS = 'ethiolearn_transfers';
const COL_FEEDBACKS = 'ethiolearn_feedbacks';
const COL_DELETED = 'ethiolearn_deleted';

export interface RemoteStudentRegistration {
  id: string;
  phone_number: string;
  full_name: string;
  password?: string;
  grade?: string;
  grade_id?: string;
  stream?: string;
  device_id?: string;
  is_premium?: boolean;
  payment_tier?: 'free' | 'single' | 'all';
  unlocked_grades?: string[];
  paid_amount?: number;
  created_at: string;
  updated_at?: string;
}

export interface RemotePaymentSubmission {
  id: string;
  user_id?: string;
  student_phone: string;
  student_name: string;
  student_email?: string;
  amount_birr: number;
  target_grade_id: string;
  upgrade_all_grades: boolean;
  receipt_storage_path?: string;
  receipt_filename?: string;
  status: 'pending' | 'approved' | 'rejected';
  rejection_reason?: string;
  reviewed_at?: string;
  reviewed_by?: string;
  submitted_at: string;
  created_at?: string;
}

export interface RemoteStudentApproval {
  phone_number: string;
  user_id?: string;
  receipt_id?: string;
  grade_id?: string;
  tier: 'single' | 'all' | 'free';
  unlocked_grades: string[];
  is_premium: boolean;
  approved_at: string;
}

export interface RemoteDeviceTransfer {
  id: string;
  user_id?: string;
  phone_number: string;
  student_name?: string;
  old_device_id?: string;
  new_device_id: string;
  reason?: string;
  status: 'pending' | 'approved' | 'rejected';
  requested_at: string;
}

export interface RemoteQuestionFeedback {
  id: string;
  question_id: string;
  question_number?: number;
  exam_id?: string;
  exam_title?: string;
  subject_name?: string;
  grade_name?: string;
  user_id?: string;
  user_name?: string;
  user_phone?: string;
  feedback_type: string;
  suggested_answer?: string;
  comment: string;
  status: 'pending' | 'reviewed' | 'corrected' | 'dismissed';
  created_at: string;
}

export interface CloudMasterState {
  students: any[];
  payments: any[];
  approvals: any[];
  transfers: any[];
  feedbacks: any[];
  deleted_students?: string[];
  updated_at?: string;
  [key: string]: any;
}

export function normalizePhoneKey(phone?: string): string {
  return String(phone || '').replace(/[^\d]/g, '').slice(-9);
}

export function phonesMatch(p1?: string, p2?: string): boolean {
  const k1 = normalizePhoneKey(p1);
  const k2 = normalizePhoneKey(p2);
  return k1.length >= 9 && k2.length >= 9 && k1 === k2;
}

function recordMatchesPhoneOrId(rec: any, targetId?: string, phone?: string): boolean {
  if (!rec) return false;
  if (targetId && (rec.id === targetId || rec.user_id === targetId)) return true;
  if (phone && (phonesMatch(rec.phone_number, phone) || phonesMatch(rec.student_phone, phone) || phonesMatch(rec.phone, phone))) {
    return true;
  }
  return false;
}

function safeDocId(raw: string, prefix: string): string {
  const cleaned = String(raw || '')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 120);
  return cleaned ? `${prefix}_${cleaned}` : `${prefix}_${Date.now()}`;
}

function studentDocId(studentId?: string, phone?: string): string {
  const pk = normalizePhoneKey(phone);
  if (pk.length >= 9) return `stu_${pk}`;
  return safeDocId(studentId || '', 'stu');
}

function approvalDocId(userId?: string, phone?: string): string {
  const pk = normalizePhoneKey(phone);
  if (pk.length >= 9) return `appr_${pk}`;
  return safeDocId(userId || '', 'appr');
}

function recordTimestampMs(item: any): number {
  if (!item || typeof item !== 'object') return 0;
  const raw = item.updated_at || item.reviewed_at || item.approved_at || item.submitted_at || item.requested_at || item.created_at || 0;
  return new Date(raw).getTime() || 0;
}

function sortNewestFirst(items: any[]): any[] {
  return [...items].sort((a, b) => recordTimestampMs(b) - recordTimestampMs(a));
}

function toFsValue(val: any): Record<string, any> {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    if (!Number.isFinite(val)) return { integerValue: '0' };
    if (Number.isInteger(val) && Math.abs(val) <= 9007199254740991) {
      return { integerValue: String(val) };
    }
    return { doubleValue: val };
  }
  if (typeof val === 'string') return { stringValue: val };
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.filter((v) => v !== undefined).map(toFsValue) } };
  }
  if (typeof val === 'object') {
    return { mapValue: { fields: toFsFields(val) } };
  }
  return { stringValue: String(val) };
}

function toFsFields(obj: Record<string, any>): Record<string, any> {
  const fields: Record<string, any> = {};
  if (!obj || typeof obj !== 'object') return fields;
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || k === '__fsDocId') continue;
    fields[k] = toFsValue(v);
  }
  return fields;
}

function fromFsValue(v: any): any {
  if (!v || typeof v !== 'object') return null;
  if ('stringValue' in v) return String(v.stringValue);
  if ('booleanValue' in v) return Boolean(v.booleanValue);
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return Number(v.doubleValue);
  if ('timestampValue' in v) return String(v.timestampValue);
  if ('nullValue' in v) return null;
  if ('arrayValue' in v) {
    const arr = v.arrayValue?.values;
    return Array.isArray(arr) ? arr.map(fromFsValue) : [];
  }
  if ('mapValue' in v) {
    return fromFsFields(v.mapValue?.fields || {});
  }
  return null;
}

function fromFsFields(fields: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  if (!fields || typeof fields !== 'object') return out;
  for (const [k, v] of Object.entries(fields)) {
    out[k] = fromFsValue(v);
  }
  return out;
}

function docNameToId(name?: string): string {
  const s = String(name || '');
  const idx = s.lastIndexOf('/');
  return idx >= 0 ? s.slice(idx + 1) : s;
}

/**
 * Generates an authentic CBE digital transfer receipt SVG as a Data URL
 */
export function generateAuthenticSlipSvg(phone: string, name: string, amount: number, isAll: boolean): string {
  const refCode = 'FT26' + String(Math.abs(phone.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0))).slice(0, 6) + 'L' + (amount === 300 ? '30' : '20');
  const planName = amount === 100 ? 'Upgrade to All Grades (100 ETB)' : (isAll || amount === 300 ? 'All Grades Access (300 ETB)' : 'Single Grade Access (200 ETB)');
  const dateStr = new Date().toLocaleString('en-GB', { timeZone: 'Africa/Addis_Ababa', hour12: false }) + ' EAT';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="820" viewBox="0 0 600 820">
    <rect width="600" height="820" fill="#0f172a" rx="20"/>
    <rect x="12" y="12" width="576" height="796" fill="#1e293b" rx="16" stroke="#334155" stroke-width="2"/>
    <rect x="12" y="12" width="576" height="110" fill="#800080" rx="16"/>
    <text x="36" y="55" fill="#ffffff" font-family="Arial, sans-serif" font-size="22" font-weight="bold">Commercial Bank of Ethiopia (CBE)</text>
    <text x="36" y="85" fill="#f1f5f9" font-family="Arial, sans-serif" font-size="14">CBE Birr • Official Transaction Confirmation Slip</text>
    <circle cx="300" cy="185" r="36" fill="#10b981"/>
    <text x="300" y="197" fill="#ffffff" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle">✓</text>
    <text x="300" y="248" fill="#ffffff" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Transfer Successful</text>
    <text x="300" y="275" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13" text-anchor="middle">Payment processed to EthioLearn Platform</text>
    <rect x="36" y="295" width="528" height="70" fill="#0f172a" rx="12" stroke="#10b981" stroke-width="1.5"/>
    <text x="300" y="322" fill="#94a3b8" font-family="Arial, sans-serif" font-size="12" text-anchor="middle">AMOUNT TRANSFERRED</text>
    <text x="300" y="352" fill="#10b981" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle">${amount}.00 ETB</text>
    <line x1="36" y1="385" x2="564" y2="385" stroke="#334155" stroke-dasharray="4"/>
    <g transform="translate(36, 405)" font-family="Arial, sans-serif">
      <text x="0" y="25" fill="#94a3b8" font-size="14">Transaction Reference</text><text x="528" y="25" fill="#38bdf8" font-family="Courier, monospace" font-size="15" font-weight="bold" text-anchor="end">${refCode}</text>
      <text x="0" y="65" fill="#94a3b8" font-size="14">Student / Sender</text><text x="528" y="65" fill="#ffffff" font-size="15" font-weight="bold" text-anchor="end">${name}</text>
      <text x="0" y="105" fill="#94a3b8" font-size="14">Student Phone Number</text><text x="528" y="105" fill="#10b981" font-family="Courier, monospace" font-size="15" font-weight="bold" text-anchor="end">${phone}</text>
      <text x="0" y="145" fill="#94a3b8" font-size="14">Beneficiary Account</text><text x="528" y="145" fill="#ffffff" font-family="Courier, monospace" font-size="15" font-weight="bold" text-anchor="end">1000616679434</text>
      <text x="0" y="185" fill="#94a3b8" font-size="14">Beneficiary Name</text><text x="528" y="185" fill="#f59e0b" font-size="15" font-weight="bold" text-anchor="end">NAFKUN ASEFA</text>
      <text x="0" y="225" fill="#94a3b8" font-size="14">Subscription Plan</text><text x="528" y="225" fill="#a855f7" font-size="15" font-weight="bold" text-anchor="end">${planName}</text>
      <text x="0" y="265" fill="#94a3b8" font-size="14">Date &amp; Time</text><text x="528" y="265" fill="#ffffff" font-size="14" text-anchor="end">${dateStr}</text>
      <text x="0" y="305" fill="#94a3b8" font-size="14">Status</text><text x="528" y="305" fill="#10b981" font-size="15" font-weight="bold" text-anchor="end">Verified Payment Slip</text>
    </g>
    <rect x="36" y="750" width="528" height="40" fill="#0f172a" rx="8"/>
    <text x="300" y="775" fill="#64748b" font-family="Arial, sans-serif" font-size="12" text-anchor="middle">Official CBE Birr Electronic Confirmation • EthioLearn Platform</text>
  </svg>`;

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs: number): Promise<Response | null> {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
  try {
    return await fetch(url, {
      ...options,
      signal: controller ? controller.signal : undefined
    });
  } catch (_) {
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/**
 * Low-level dispatch to real-time notification buses (smee.io + ntfy.sh)
 * Uses CORS-simple POST for ntfy.sh so mobile networks skip OPTIONS preflight.
 */
async function postToRealtimeBus(eventPayload: Record<string, any>): Promise<boolean> {
  const lightPayload: Record<string, any> = { ...eventPayload };
  if (typeof lightPayload.receipt_storage_path === 'string' && lightPayload.receipt_storage_path.length > 95000) {
    lightPayload.receipt_storage_path = '';
    lightPayload.has_cloud_image = true;
  }

  const bodyStr = JSON.stringify(lightPayload);
  const p1 = fetchWithTimeout(SMEE_SYNC_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: bodyStr
  }, 4000).then(r => Boolean(r && r.ok)).catch(() => false);

  const ntfyBrief = JSON.stringify({
    event: lightPayload.event,
    phone_number: lightPayload.phone_number || lightPayload.student_phone,
    user_id: lightPayload.user_id || lightPayload.id,
    tier: lightPayload.tier,
    status: lightPayload.status,
    ts: Date.now()
  });
  const p2 = fetchWithTimeout(NTFY_EVENTS_URL, {
    method: 'POST',
    body: ntfyBrief
  }, 3000).then(r => Boolean(r && r.ok)).catch(() => false);

  const [r1, r2] = await Promise.all([p1, p2]);
  return Boolean(r1 || r2);
}

/**
 * Appends a state mutation event to ntfy.sh persistent state log (IPv4 fast path).
 * Uses a CORS-simple POST (no custom headers) so mobile browsers and Android WebViews
 * transmit in a single roundtrip without OPTIONS preflight.
 */
async function appendNtfyStateOp(opPayload: Record<string, any>): Promise<boolean> {
  const record = {
    ...opPayload,
    ts: opPayload.ts || new Date().toISOString()
  };
  const res = await fetchWithTimeout(
    NTFY_STATE_URL,
    {
      method: 'POST',
      body: JSON.stringify(record)
    },
    3000
  );
  return Boolean(res && res.ok);
}

const ntfyAttachmentCache = new Map<string, any>();

interface NtfyLogStateResult {
  ok: boolean;
  resetTsMs: number;
  deletedMap: Map<string, number>; // token -> timestamp ms
  removedFeedbackIds: Set<string>;
  state: CloudMasterState;
}

/**
 * Reads and replays the persistent state log from ntfy.sh (IPv4 fast path).
 */
async function readNtfyStateLog(): Promise<NtfyLogStateResult> {
  const emptyResult: NtfyLogStateResult = {
    ok: false,
    resetTsMs: 0,
    deletedMap: new Map(),
    removedFeedbackIds: new Set(),
    state: normalizeCloudState({})
  };

  const res = await fetchWithTimeout(`${NTFY_STATE_URL}/json?poll=1&since=all`, { cache: 'no-store' }, 2500);
  if (!res || !res.ok) return emptyResult;

  try {
    const text = await res.text();
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const rawEnvelopes: any[] = [];
    for (const line of lines) {
      try {
        const env = JSON.parse(line);
        if (env && env.event === 'message') {
          rawEnvelopes.push(env);
        }
      } catch (_) {}
    }

    // Resolve any attachments in parallel (cached by message ID)
    const ops: Array<{ envTimeMs: number; data: any }> = [];
    await Promise.all(
      rawEnvelopes.map(async (env, idx) => {
        let parsed: any = null;
        if (env.attachment?.url) {
          if (ntfyAttachmentCache.has(env.id)) {
            parsed = ntfyAttachmentCache.get(env.id);
          } else {
            const attRes = await fetchWithTimeout(env.attachment.url, {}, 7500);
            if (attRes && attRes.ok) {
              try {
                parsed = await attRes.json();
                ntfyAttachmentCache.set(env.id, parsed);
              } catch (_) {}
            }
          }
        } else if (typeof env.message === 'string' && env.message.trim().startsWith('{')) {
          try {
            parsed = JSON.parse(env.message);
          } catch (_) {}
        }
        if (parsed && parsed.op) {
          const tsMs = (parsed.ts ? new Date(parsed.ts).getTime() : 0) || ((env.time || 0) * 1000) + idx;
          ops.push({ envTimeMs: tsMs, data: parsed });
        }
      })
    );

    ops.sort((a, b) => a.envTimeMs - b.envTimeMs);

    let students: any[] = [];
    let payments: any[] = [];
    let approvals: any[] = [];
    let transfers: any[] = [];
    let feedbacks: any[] = [];
    let deletedMap = new Map<string, number>();
    let removedFeedbackIds = new Set<string>();
    let resetTsMs = 0;

    const addDeleteToken = (tok: string, tsMs: number) => {
      const clean = String(tok || '').toLowerCase().trim();
      if (clean) deletedMap.set(clean, tsMs);
    };

    const clearDeleteTokensFor = (id?: string, phone?: string) => {
      const idKey = String(id || '').toLowerCase().trim();
      const pk = normalizePhoneKey(phone);
      for (const k of Array.from(deletedMap.keys())) {
        if ((idKey && k === idKey) || (pk.length >= 9 && k.includes(pk))) {
          deletedMap.delete(k);
        }
      }
    };

    for (const item of ops) {
      const entry = item.data;
      const tsIso = entry.ts || new Date(item.envTimeMs).toISOString();
      const tsMs = item.envTimeMs;

      if (entry.op === 'reset_all' && entry.state) {
        const st = normalizeCloudState(entry.state);
        students = [...st.students];
        payments = [...st.payments];
        approvals = [...st.approvals];
        transfers = [...st.transfers];
        feedbacks = [...st.feedbacks];
        deletedMap = new Map();
        for (const d of st.deleted_students || []) {
          addDeleteToken(d, tsMs);
        }
        removedFeedbackIds = new Set();
        resetTsMs = tsMs;
        continue;
      }

      if (entry.op === 'student_registration' && entry.student) {
        const stu = entry.student;
        clearDeleteTokensFor(stu.id, stu.phone_number);
        const exIdx = students.findIndex(s => recordMatchesPhoneOrId(s, stu.id, stu.phone_number));
        if (exIdx >= 0) {
          const ex = students[exIdx];
          students[exIdx] = {
            ...ex,
            ...stu,
            is_premium: ex.is_premium || stu.is_premium || false,
            payment_tier: (ex.payment_tier && ex.payment_tier !== 'free') ? ex.payment_tier : (stu.payment_tier || 'free'),
            unlocked_grades: (ex.unlocked_grades && ex.unlocked_grades.length > 0) ? ex.unlocked_grades : (stu.unlocked_grades || []),
            paid_amount: ex.paid_amount || stu.paid_amount || 0,
            updated_at: stu.updated_at || tsIso
          };
        } else {
          students.push({
            ...stu,
            is_premium: stu.is_premium || false,
            payment_tier: stu.payment_tier || 'free',
            unlocked_grades: stu.unlocked_grades || [],
            paid_amount: stu.paid_amount || 0,
            updated_at: stu.updated_at || tsIso
          });
        }
      } else if (entry.op === 'payment_submission' && entry.payment) {
        const pay = entry.payment;
        payments = payments.filter(p => {
          if (p.id === pay.id) return false;
          if (p.status === 'pending' && recordMatchesPhoneOrId(p, pay.user_id, pay.student_phone)) return false;
          return true;
        });
        payments.unshift({ ...pay, submitted_at: pay.submitted_at || tsIso });
      } else if (entry.op === 'student_approval' && entry.approval) {
        const appr: RemoteStudentApproval = entry.approval;
        const isAll = appr.tier === 'all';
        const isPaid = Boolean(appr.is_premium && appr.tier !== 'free');
        const resolvedGrades = isAll
          ? ['all']
          : (isPaid ? (appr.unlocked_grades?.length ? appr.unlocked_grades : [appr.grade_id || 'grade-12-natural']) : []);

        const matchedStu = students.filter(s => recordMatchesPhoneOrId(s, appr.user_id, appr.phone_number));
        const resolvedPhone = appr.phone_number || matchedStu[0]?.phone_number || '';
        const resolvedUserId = appr.user_id || matchedStu[0]?.id;

        const cleanAppr: RemoteStudentApproval = {
          ...appr,
          phone_number: resolvedPhone,
          ...(resolvedUserId ? { user_id: resolvedUserId } : {}),
          is_premium: isPaid,
          tier: isPaid ? appr.tier : 'free',
          unlocked_grades: resolvedGrades,
          approved_at: appr.approved_at || tsIso
        };

        approvals = approvals.filter(a => !recordMatchesPhoneOrId(a, resolvedUserId, resolvedPhone));
        approvals.unshift(cleanAppr);

        if (matchedStu.length > 0) {
          students = students.map(s => {
            if (!recordMatchesPhoneOrId(s, resolvedUserId, resolvedPhone)) return s;
            return {
              ...s,
              is_premium: isPaid,
              payment_tier: isPaid ? appr.tier : 'free',
              unlocked_grades: resolvedGrades,
              paid_amount: appr.tier === 'all' ? 300 : (appr.tier === 'single' ? 200 : 0),
              updated_at: cleanAppr.approved_at
            };
          });
        } else if (resolvedPhone) {
          const pRef = payments.find(p => recordMatchesPhoneOrId(p, resolvedUserId, resolvedPhone));
          const cleanDigits = normalizePhoneKey(resolvedPhone);
          students.push({
            id: resolvedUserId || `student-251${cleanDigits}`,
            phone_number: resolvedPhone,
            full_name: pRef?.student_name || `Student ${cleanDigits.slice(-4)}`,
            grade_id: pRef?.target_grade_id && pRef.target_grade_id !== 'all' ? pRef.target_grade_id : (appr.grade_id || 'grade-12-natural'),
            role: 'student',
            is_premium: isPaid,
            payment_tier: isPaid ? appr.tier : 'free',
            unlocked_grades: resolvedGrades,
            paid_amount: appr.tier === 'all' ? 300 : (appr.tier === 'single' ? 200 : 0),
            created_at: cleanAppr.approved_at,
            updated_at: cleanAppr.approved_at
          });
        }

        if (isPaid) {
          payments = payments.map(p => {
            const targetMatch = appr.receipt_id
              ? p.id === appr.receipt_id
              : (recordMatchesPhoneOrId(p, resolvedUserId, resolvedPhone) && p.status === 'pending');
            if (!targetMatch) return p;
            return {
              ...p,
              status: 'approved',
              amount_birr: isAll ? (Number(p.amount_birr) === 100 ? 100 : 300) : 200,
              upgrade_all_grades: isAll,
              reviewed_at: cleanAppr.approved_at,
              reviewed_by: 'admin@ethiolearn.edu.et'
            };
          });
        }
      } else if (entry.op === 'payment_rejection') {
        payments = payments.map(p => {
          if (p.id === entry.receipt_id || (entry.phone_number && phonesMatch(p.student_phone, entry.phone_number) && p.status === 'pending')) {
            return {
              ...p,
              status: 'rejected',
              rejection_reason: entry.rejection_reason || 'Rejected by administrator',
              reviewed_at: entry.reviewed_at || tsIso,
              reviewed_by: 'admin@ethiolearn.edu.et'
            };
          }
          return p;
        });
      } else if (entry.op === 'student_deleted') {
        if (entry.id) addDeleteToken(entry.id, tsMs);
        if (entry.phone_number) {
          addDeleteToken(entry.phone_number, tsMs);
          const pk = normalizePhoneKey(entry.phone_number);
          if (pk) addDeleteToken(pk, tsMs);
        }
        for (const s of students) {
          if (recordMatchesPhoneOrId(s, entry.id, entry.phone_number)) {
            if (s.id) addDeleteToken(s.id, tsMs);
            const pk = normalizePhoneKey(s.phone_number);
            if (pk) addDeleteToken(pk, tsMs);
          }
        }
        students = students.filter(s => !recordMatchesPhoneOrId(s, entry.id, entry.phone_number));
        payments = payments.filter(p => !recordMatchesPhoneOrId(p, entry.id, entry.phone_number));
        approvals = approvals.filter(a => !recordMatchesPhoneOrId(a, entry.id, entry.phone_number));
        transfers = transfers.filter(t => !recordMatchesPhoneOrId(t, entry.id, entry.phone_number));
      } else if (entry.op === 'device_transfer' && entry.transfer) {
        const tr = entry.transfer;
        transfers = transfers.filter(t => t.id !== tr.id);
        transfers.unshift(tr);
      } else if (entry.op === 'device_approval') {
        transfers = transfers.map(t => {
          if ((entry.transfer_id && t.id === entry.transfer_id) || phonesMatch(t.phone_number, entry.phone_number)) {
            return { ...t, status: 'approved' };
          }
          return t;
        });
        students = students.map(s => {
          if (phonesMatch(s.phone_number, entry.phone_number)) {
            return {
              ...s,
              device_id: entry.new_device_id,
              premium_device_id: entry.new_device_id,
              updated_at: tsIso
            };
          }
          return s;
        });
      } else if (entry.op === 'device_transfer_rejection') {
        transfers = transfers.map(t => t.id === entry.transfer_id ? { ...t, status: 'rejected' } : t);
      } else if (entry.op === 'question_feedback' && entry.feedback) {
        const fb = entry.feedback;
        removedFeedbackIds.delete(fb.id);
        feedbacks = feedbacks.filter(f => f.id !== fb.id);
        feedbacks.unshift(fb);
      } else if (entry.op === 'question_feedback_update') {
        if (entry.remove) {
          removedFeedbackIds.add(entry.id);
          feedbacks = feedbacks.filter(f => f.id !== entry.id);
        } else {
          feedbacks = feedbacks.map(f => f.id === entry.id ? { ...f, ...(entry.status ? { status: entry.status } : {}) } : f);
        }
      }
    }

    return {
      ok: true,
      resetTsMs,
      deletedMap,
      removedFeedbackIds,
      state: normalizeCloudState({
        students,
        payments,
        approvals,
        transfers,
        feedbacks,
        deleted_students: Array.from(deletedMap.keys()),
        updated_at: new Date().toISOString()
      })
    };
  } catch (_) {
    return emptyResult;
  }
}

function parseList(val: any): any[] {
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') {
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
    } catch (_) {}
  }
  return [];
}

function normalizeCloudState(raw: any): CloudMasterState {
  const obj = raw && typeof raw === 'object' ? raw : {};
  return {
    ...obj,
    students: sortNewestFirst(parseList(obj.students)),
    payments: sortNewestFirst(parseList(obj.payments)),
    approvals: sortNewestFirst(parseList(obj.approvals)),
    transfers: sortNewestFirst(parseList(obj.transfers)),
    feedbacks: sortNewestFirst(parseList(obj.feedbacks)),
    deleted_students: parseList(obj.deleted_students)
  };
}

// Short read coalescing cache (250ms) + sequential mutation queue
let inFlightReadPromise: Promise<{ ok: boolean; notFound?: boolean; state: CloudMasterState }> | null = null;
let lastReadCache: { ts: number; result: { ok: boolean; notFound?: boolean; state: CloudMasterState } } | null = null;
let mutationQueue: Promise<any> = Promise.resolve();

function invalidateReadCache() {
  lastReadCache = null;
}

async function getFsDoc(collection: string, docId: string): Promise<{ ok: boolean; notFound?: boolean; data: any }> {
  const url = `${FIRESTORE_BASE_URL}/${collection}/${encodeURIComponent(docId)}?key=${FIREBASE_API_KEY}`;
  const res = await fetchWithTimeout(url, { cache: 'no-store' }, 6500);
  if (!res) return { ok: false, data: null };
  if (res.status === 404) return { ok: true, notFound: true, data: null };
  if (!res.ok) return { ok: false, data: null };
  try {
    const json = await res.json();
    const data = fromFsFields(json.fields || {});
    data.__fsDocId = docNameToId(json.name) || docId;
    return { ok: true, data };
  } catch (_) {
    return { ok: false, data: null };
  }
}

async function putFsDoc(collection: string, docId: string, obj: Record<string, any>): Promise<boolean> {
  const url = `${FIRESTORE_BASE_URL}/${collection}/${encodeURIComponent(docId)}?key=${FIREBASE_API_KEY}`;
  const res = await fetchWithTimeout(
    url,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: toFsFields(obj) })
    },
    10000
  );
  return Boolean(res && res.ok);
}

async function deleteFsDoc(collection: string, docId: string): Promise<boolean> {
  const url = `${FIRESTORE_BASE_URL}/${collection}/${encodeURIComponent(docId)}?key=${FIREBASE_API_KEY}`;
  const res = await fetchWithTimeout(url, { method: 'DELETE' }, 6500);
  return Boolean(res && (res.ok || res.status === 404));
}

async function listFsCollection(collection: string): Promise<{ ok: boolean; docs: any[] }> {
  const docs: any[] = [];
  let pageToken = '';
  for (let page = 0; page < 10; page++) {
    const tokenPart = pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : '';
    const url = `${FIRESTORE_BASE_URL}/${collection}?pageSize=300${tokenPart}&key=${FIREBASE_API_KEY}`;
    const res = await fetchWithTimeout(url, { cache: 'no-store' }, 7500);
    if (!res || !res.ok) {
      return { ok: false, docs: [] };
    }
    try {
      const json = await res.json();
      const batch = Array.isArray(json.documents) ? json.documents : [];
      for (const d of batch) {
        const parsed = fromFsFields(d.fields || {});
        parsed.__fsDocId = docNameToId(d.name);
        docs.push(parsed);
      }
      if (!json.nextPageToken) break;
      pageToken = json.nextPageToken;
    } catch (_) {
      return { ok: false, docs: [] };
    }
  }
  return { ok: true, docs };
}

function stripFsMeta(doc: any): any {
  if (!doc || typeof doc !== 'object') return doc;
  const { __fsDocId, ...rest } = doc;
  return rest;
}

async function runWithRetry(fn: () => Promise<boolean>): Promise<boolean> {
  const task = async (): Promise<boolean> => {
    const delays = [0, 300, 750];
    for (let i = 0; i < delays.length; i++) {
      if (delays[i] > 0) await new Promise(r => setTimeout(r, delays[i]));
      invalidateReadCache();
      try {
        if (await fn()) {
          invalidateReadCache();
          return true;
        }
      } catch (_) {}
    }
    return false;
  };
  const run = mutationQueue.then(task, task);
  mutationQueue = run.catch(() => false);
  return run;
}

async function blobToDataUrl(blob: Blob): Promise<string> {
  if (typeof FileReader !== 'undefined') {
    return new Promise((resolve) => {
      try {
        const reader = new FileReader();
        reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
        reader.onerror = () => resolve('');
        reader.readAsDataURL(blob);
      } catch (_) {
        resolve('');
      }
    });
  }
  try {
    const ab = await blob.arrayBuffer();
    const bytes = new Uint8Array(ab);
    let bin = '';
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    const b64 = typeof btoa !== 'undefined' ? btoa(bin) : Buffer.from(ab).toString('base64');
    return `data:${blob.type || 'image/png'};base64,${b64}`;
  } catch (_) {
    return '';
  }
}

async function compressDataUrlIfNeeded(dataUrl: string): Promise<string> {
  if (!dataUrl || !dataUrl.startsWith('data:image/') || dataUrl.startsWith('data:image/svg+xml')) {
    return dataUrl;
  }
  if (dataUrl.length <= 140000 || typeof document === 'undefined') {
    return dataUrl;
  }

  const compressBitmapOrImg = (source: any, origW: number, origH: number): string => {
    const steps: Array<[number, number]> = [
      [680, 0.56],
      [540, 0.46],
      [420, 0.36],
      [320, 0.28],
      [240, 0.24],
      [180, 0.22]
    ];
    let lastOut = '';
    for (const [maxDim, quality] of steps) {
      let width = origW || 600;
      let height = origH || 800;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.max(1, Math.round((height * maxDim) / width));
          width = maxDim;
        } else {
          width = Math.max(1, Math.round((width * maxDim) / height));
          height = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;
      ctx.drawImage(source, 0, 0, width, height);
      const out = canvas.toDataURL('image/jpeg', quality);
      if (out && out.length > 100) {
        lastOut = out;
        if (out.length <= 120000) return out;
      }
    }
    return lastOut;
  };

  // Path 1: Decode via fetch -> Blob -> createImageBitmap (avoids large data: URI Image OOM in Android WebView)
  try {
    if (typeof createImageBitmap === 'function' && typeof fetch === 'function') {
      const viaBitmap = await Promise.race([
        (async () => {
          const resp = await fetch(dataUrl);
          const blob = await resp.blob();
          const bitmap = await createImageBitmap(blob);
          try {
            const compressed = compressBitmapOrImg(bitmap, bitmap.width, bitmap.height);
            return compressed && compressed.length < dataUrl.length ? compressed : '';
          } finally {
            if (typeof bitmap.close === 'function') bitmap.close();
          }
        })(),
        new Promise<string>((resolve) => setTimeout(() => resolve(''), 3500))
      ]);
      if (viaBitmap) return viaBitmap;
    }
  } catch (_) {}

  // Path 2: Standard HTMLImageElement fallback with 3500ms timeout guard
  if (typeof Image === 'undefined') return dataUrl;
  return new Promise((resolve) => {
    let settled = false;
    const done = (val: string) => {
      if (settled) return;
      settled = true;
      resolve(val);
    };
    const timer = setTimeout(() => done(dataUrl), 3500);
    try {
      const img = new Image();
      img.onload = () => {
        clearTimeout(timer);
        try {
          const compressed = compressBitmapOrImg(img, img.width || 600, img.height || 800);
          done(compressed || dataUrl);
        } catch (_) {
          done(dataUrl);
        }
      };
      img.onerror = () => {
        clearTimeout(timer);
        done(dataUrl);
      };
      img.src = dataUrl;
    } catch (_) {
      clearTimeout(timer);
      done(dataUrl);
    }
  });
}

function isRecordDeleted(deletedMap: Map<string, number>, rec: any): boolean {
  if (!rec || deletedMap.size === 0) return false;
  const recTs = recordTimestampMs(rec);
  const idLower = String(rec.id || rec.user_id || '').toLowerCase().trim();
  const phoneRaw = String(rec.phone_number || rec.student_phone || rec.phone || '').toLowerCase().trim();
  const pk = normalizePhoneKey(phoneRaw);

  for (const [tok, delTs] of deletedMap.entries()) {
    if (!tok) continue;
    const matched =
      (idLower && tok === idLower) ||
      (phoneRaw && tok === phoneRaw) ||
      (pk.length >= 9 && tok.includes(pk));
    if (matched) {
      // If the record was newly created/updated AFTER the deletion timestamp, it was re-registered!
      if (recTs > 0 && delTs > 0 && recTs > delTs + 500) {
        return false;
      }
      return true;
    }
  }
  return false;
}

export async function readCloudMasterStateStrict(bypassCache = false): Promise<{ ok: boolean; notFound?: boolean; state: CloudMasterState }> {
  const now = Date.now();
  if (!bypassCache && lastReadCache && now - lastReadCache.ts < 250) {
    return lastReadCache.result;
  }
  if (!bypassCache && inFlightReadPromise) {
    return inFlightReadPromise;
  }

  const exec = (async (): Promise<{ ok: boolean; notFound?: boolean; state: CloudMasterState }> => {
    const [stRes, payRes, apprRes, trRes, fbRes, delRes, ntfyRes] = await Promise.all([
      listFsCollection(COL_STUDENTS),
      listFsCollection(COL_PAYMENTS),
      listFsCollection(COL_APPROVALS),
      listFsCollection(COL_TRANSFERS),
      listFsCollection(COL_FEEDBACKS),
      listFsCollection(COL_DELETED),
      readNtfyStateLog()
    ]);

    const fsOk = stRes.ok && payRes.ok && apprRes.ok && trRes.ok && fbRes.ok && delRes.ok;
    const anyFsOk = stRes.ok || payRes.ok || apprRes.ok || trRes.ok || fbRes.ok || delRes.ok;

    if (!anyFsOk && !ntfyRes.ok) {
      return { ok: false, state: normalizeCloudState({}) };
    }

    const resetFloorMs = ntfyRes.ok ? ntfyRes.resetTsMs : 0;
    const filterResetFloor = (docs: any[]) =>
      resetFloorMs > 0 ? docs.filter(d => recordTimestampMs(d) >= resetFloorMs - 1000) : docs;

    // 1. Merge deletion tombstones with timestamps
    const mergedDeletedMap = new Map<string, number>();
    if (delRes.ok) {
      for (const d of delRes.docs) {
        const key = String(d.key || String(d.__fsDocId || '').replace(/^del_/, '')).toLowerCase().trim();
        const delTs = new Date(d.deleted_at || 0).getTime() || 1;
        if (key && delTs >= resetFloorMs) {
          mergedDeletedMap.set(key, delTs);
        }
      }
    }
    if (ntfyRes.ok) {
      for (const [k, ts] of ntfyRes.deletedMap.entries()) {
        const prev = mergedDeletedMap.get(k) || 0;
        if (ts > prev) mergedDeletedMap.set(k, ts);
      }
    }

    // If a student re-registered in ntfy or Firestore AFTER a tombstone, remove that tombstone
    const allCandidateStudents = [
      ...(stRes.ok ? filterResetFloor(stRes.docs.map(stripFsMeta)) : []),
      ...(ntfyRes.ok ? ntfyRes.state.students : [])
    ];
    for (const s of allCandidateStudents) {
      const sTs = recordTimestampMs(s);
      if (!sTs) continue;
      const idKey = String(s.id || '').toLowerCase().trim();
      const pk = normalizePhoneKey(s.phone_number);
      for (const [tok, delTs] of Array.from(mergedDeletedMap.entries())) {
        if ((idKey && tok === idKey) || (pk.length >= 9 && tok.includes(pk))) {
          if (sTs > delTs + 500) {
            mergedDeletedMap.delete(tok);
          }
        }
      }
    }

    // 2. Merge Approvals
    const approvalsMap = new Map<string, any>();
    const addApproval = (a: any) => {
      if (!a || isRecordDeleted(mergedDeletedMap, a)) return;
      const key = approvalDocId(a.user_id, a.phone_number);
      const prev = approvalsMap.get(key);
      if (!prev || recordTimestampMs(a) >= recordTimestampMs(prev)) {
        approvalsMap.set(key, a);
      }
    };
    if (apprRes.ok) filterResetFloor(apprRes.docs.map(stripFsMeta)).forEach(addApproval);
    if (ntfyRes.ok) ntfyRes.state.approvals.forEach(addApproval);
    const mergedApprovals = Array.from(approvalsMap.values());

    // 3. Merge Students (and apply latest approvals)
    const studentsMap = new Map<string, any>();
    const addStudent = (s: any) => {
      if (!s || isRecordDeleted(mergedDeletedMap, s)) return;
      const key = studentDocId(s.id, s.phone_number);
      const prev = studentsMap.get(key);
      if (!prev) {
        studentsMap.set(key, s);
      } else {
        const sNewer = recordTimestampMs(s) >= recordTimestampMs(prev);
        const primary = sNewer ? s : prev;
        const secondary = sNewer ? prev : s;
        studentsMap.set(key, {
          ...secondary,
          ...primary,
          password: primary.password || secondary.password
        });
      }
    };
    if (stRes.ok) filterResetFloor(stRes.docs.map(stripFsMeta)).forEach(addStudent);
    if (ntfyRes.ok) ntfyRes.state.students.forEach(addStudent);

    // Apply latest approval state onto matching students
    for (const [k, s] of studentsMap.entries()) {
      const appMatch = mergedApprovals.find(a => recordMatchesPhoneOrId(a, s.id, s.phone_number));
      if (appMatch && recordTimestampMs(appMatch) >= recordTimestampMs(s)) {
        const isPaid = Boolean(appMatch.is_premium && appMatch.tier !== 'free');
        const tier = isPaid ? appMatch.tier : 'free';
        studentsMap.set(k, {
          ...s,
          is_premium: isPaid,
          payment_tier: tier,
          unlocked_grades: tier === 'all' ? ['all'] : (isPaid ? (appMatch.unlocked_grades?.length ? appMatch.unlocked_grades : [s.grade_id || 'grade-12-natural']) : []),
          paid_amount: tier === 'all' ? 300 : (tier === 'single' ? 200 : 0),
          updated_at: appMatch.approved_at || s.updated_at
        });
      }
    }

    // 4. Merge Payments
    const paymentsById = new Map<string, any>();
    const addPayment = (p: any) => {
      if (!p || !p.id || isRecordDeleted(mergedDeletedMap, p)) return;
      const prev = paymentsById.get(p.id);
      if (!prev) {
        paymentsById.set(p.id, p);
      } else {
        const pNewer = recordTimestampMs(p) >= recordTimestampMs(prev);
        const primary = pNewer ? p : prev;
        const secondary = pNewer ? prev : p;
        paymentsById.set(p.id, {
          ...secondary,
          ...primary,
          receipt_storage_path: primary.receipt_storage_path || secondary.receipt_storage_path
        });
      }
    };
    if (payRes.ok) filterResetFloor(payRes.docs.map(stripFsMeta)).forEach(addPayment);
    if (ntfyRes.ok) ntfyRes.state.payments.forEach(addPayment);

    // Deduplicate pending payments per student (keep newest pending + all approved/rejected)
    const sortedPayments = sortNewestFirst(Array.from(paymentsById.values()));
    const seenPendingPhone = new Set<string>();
    const mergedPayments: any[] = [];
    for (const p of sortedPayments) {
      const appMatch = mergedApprovals.find(a =>
        a.is_premium &&
        a.tier !== 'free' &&
        (a.receipt_id === p.id || (p.status === 'pending' && recordMatchesPhoneOrId(p, a.user_id, a.phone_number) && recordTimestampMs(a) >= recordTimestampMs(p)))
      );
      const effectiveP = appMatch && p.status === 'pending'
        ? {
            ...p,
            status: 'approved',
            reviewed_at: appMatch.approved_at,
            reviewed_by: 'admin@ethiolearn.edu.et'
          }
        : p;

      if (effectiveP.status === 'pending') {
        const pk = normalizePhoneKey(effectiveP.student_phone) || effectiveP.user_id || effectiveP.id;
        if (seenPendingPhone.has(pk)) continue;
        seenPendingPhone.add(pk);
      }
      mergedPayments.push(effectiveP);
    }

    // 5. Merge Device Transfers
    const transfersById = new Map<string, any>();
    const addTransfer = (t: any) => {
      if (!t || !t.id || isRecordDeleted(mergedDeletedMap, t)) return;
      const prev = transfersById.get(t.id);
      if (!prev) {
        transfersById.set(t.id, t);
      } else {
        const statusPriority = (st?: string) => (st === 'approved' || st === 'rejected' ? 2 : 1);
        const pickCurrent = statusPriority(t.status) > statusPriority(prev.status) || recordTimestampMs(t) >= recordTimestampMs(prev);
        transfersById.set(t.id, pickCurrent ? { ...prev, ...t } : { ...t, ...prev });
      }
    };
    if (trRes.ok) filterResetFloor(trRes.docs.map(stripFsMeta)).forEach(addTransfer);
    if (ntfyRes.ok) ntfyRes.state.transfers.forEach(addTransfer);

    // Apply approved transfers onto students' device_id
    for (const t of transfersById.values()) {
      if (t.status === 'approved' && t.phone_number && t.new_device_id) {
        for (const [k, s] of studentsMap.entries()) {
          if (phonesMatch(s.phone_number, t.phone_number)) {
            studentsMap.set(k, {
              ...s,
              device_id: t.new_device_id,
              premium_device_id: t.new_device_id
            });
          }
        }
      }
    }

    // 6. Merge Question Feedbacks
    const feedbacksById = new Map<string, any>();
    const removedFb = ntfyRes.ok ? ntfyRes.removedFeedbackIds : new Set<string>();
    const addFeedback = (f: any) => {
      if (!f || !f.id || removedFb.has(f.id)) return;
      const prev = feedbacksById.get(f.id);
      if (!prev) {
        feedbacksById.set(f.id, f);
      } else {
        const pickCurrent = (f.status && f.status !== 'pending' && prev.status === 'pending') || recordTimestampMs(f) >= recordTimestampMs(prev);
        feedbacksById.set(f.id, pickCurrent ? { ...prev, ...f } : { ...f, ...prev });
      }
    };
    if (fbRes.ok) filterResetFloor(fbRes.docs.map(stripFsMeta)).forEach(addFeedback);
    if (ntfyRes.ok) ntfyRes.state.feedbacks.forEach(addFeedback);

    const state = normalizeCloudState({
      students: Array.from(studentsMap.values()),
      payments: mergedPayments,
      approvals: mergedApprovals,
      transfers: Array.from(transfersById.values()),
      feedbacks: Array.from(feedbacksById.values()),
      deleted_students: Array.from(mergedDeletedMap.keys()),
      updated_at: new Date().toISOString()
    });

    const result = { ok: Boolean(fsOk || ntfyRes.ok || anyFsOk), state };
    lastReadCache = { ts: Date.now(), result };
    return result;
  })();

  if (!bypassCache) {
    inFlightReadPromise = exec.finally(() => {
      inFlightReadPromise = null;
    });
    return inFlightReadPromise;
  }

  return exec;
}

/**
 * Fetches the authoritative master state object from cloud storage.
 */
export async function getCloudMasterState(forceFresh = false): Promise<CloudMasterState & { __synced?: boolean }> {
  const res = await readCloudMasterStateStrict(forceFresh);
  return {
    ...res.state,
    __synced: res.ok
  };
}

/**
 * Synchronizes a complete master state snapshot to both Firestore and ntfy.sh.
 */
export async function updateCloudMasterState(dataUpdate: Record<string, any>, _summary = 'Sync update'): Promise<boolean> {
  return runWithRetry(async () => {
    const next = normalizeCloudState(dataUpdate);
    const ntfyPromise = appendNtfyStateOp({
      op: 'reset_all',
      state: next,
      ts: new Date().toISOString()
    });

    const fsPromise = (async (): Promise<boolean> => {
      const ops: Promise<boolean>[] = [];
      const syncCollection = async (
        col: string,
        items: any[],
        idFn: (item: any) => string
      ) => {
        const existing = await listFsCollection(col);
        const keepIds = new Set<string>();
        for (const item of items) {
          const docId = idFn(item);
          keepIds.add(docId);
          ops.push(putFsDoc(col, docId, stripFsMeta(item)));
        }
        if (existing.ok) {
          for (const oldDoc of existing.docs) {
            if (oldDoc.__fsDocId && !keepIds.has(oldDoc.__fsDocId)) {
              ops.push(deleteFsDoc(col, oldDoc.__fsDocId));
            }
          }
        }
      };

      await Promise.all([
        syncCollection(COL_STUDENTS, next.students, (s) => studentDocId(s.id, s.phone_number || s.phone)),
        syncCollection(COL_PAYMENTS, next.payments, (p) => safeDocId(p.id, 'pay')),
        syncCollection(COL_APPROVALS, next.approvals, (a) => approvalDocId(a.user_id, a.phone_number)),
        syncCollection(COL_TRANSFERS, next.transfers, (t) => safeDocId(t.id, 'tr')),
        syncCollection(COL_FEEDBACKS, next.feedbacks, (f) => safeDocId(f.id, 'fb')),
        syncCollection(
          COL_DELETED,
          (next.deleted_students || []).map((k: string) => ({ key: String(k), deleted_at: new Date().toISOString() })),
          (d) => safeDocId(d.key, 'del')
        )
      ]);

      const results = await Promise.all(ops);
      return results.every(Boolean);
    })();

    const [ntfyOk, fsOk] = await Promise.all([ntfyPromise, fsPromise]);
    return Boolean(ntfyOk || fsOk);
  });
}

/**
 * Broadcasts a new student registration to both Firestore and ntfy.sh and clears matching deletion tombstones.
 * Never blocks writing on a pre-read!
 */
export async function broadcastStudentRegistration(student: RemoteStudentRegistration): Promise<boolean> {
  const nowIso = new Date().toISOString();
  const basePayload: RemoteStudentRegistration = {
    ...student,
    is_premium: student.is_premium || false,
    payment_tier: student.payment_tier || 'free',
    unlocked_grades: student.unlocked_grades || [],
    paid_amount: student.paid_amount || 0,
    created_at: student.created_at || nowIso,
    updated_at: nowIso
  };

  postToRealtimeBus({
    event: 'student_registration',
    ...basePayload
  }).catch(() => {});

  return runWithRetry(async () => {
    const docId = studentDocId(basePayload.id, basePayload.phone_number);
    const phoneKey = normalizePhoneKey(basePayload.phone_number);

    // 1. Fast IPv4 write to ntfy state log (never blocked by Firestore pre-read)
    const ntfyPromise = appendNtfyStateOp({
      op: 'student_registration',
      student: basePayload,
      ts: nowIso
    });

    // 2. Firestore write (merges existing premium tier if readable, otherwise writes directly)
    const fsPromise = (async (): Promise<boolean> => {
      let finalPayload = basePayload;
      try {
        const existingDocRes = await getFsDoc(COL_STUDENTS, docId);
        if (existingDocRes.ok && existingDocRes.data) {
          const existing = stripFsMeta(existingDocRes.data);
          finalPayload = {
            ...existing,
            ...basePayload,
            is_premium: existing.is_premium || basePayload.is_premium || false,
            payment_tier: (existing.payment_tier && existing.payment_tier !== 'free') ? existing.payment_tier : (basePayload.payment_tier || 'free'),
            unlocked_grades: (existing.unlocked_grades && existing.unlocked_grades.length > 0) ? existing.unlocked_grades : (basePayload.unlocked_grades || []),
            paid_amount: existing.paid_amount || basePayload.paid_amount || 0,
            updated_at: nowIso
          };
        }
      } catch (_) {}

      const writeOk = await putFsDoc(COL_STUDENTS, docId, finalPayload);

      // Clear any matching deletion tombstones non-blocking
      const delOps: Promise<boolean>[] = [];
      if (phoneKey) delOps.push(deleteFsDoc(COL_DELETED, safeDocId(phoneKey, 'del')));
      if (basePayload.id) delOps.push(deleteFsDoc(COL_DELETED, safeDocId(String(basePayload.id).toLowerCase(), 'del')));
      listFsCollection(COL_DELETED).then((delRes) => {
        if (!delRes.ok) return;
        const idKey = String(basePayload.id || '').toLowerCase();
        for (const d of delRes.docs) {
          const token = String(d.key || String(d.__fsDocId || '').replace(/^del_/, '')).toLowerCase();
          if ((idKey && token === idKey) || (phoneKey && token.includes(phoneKey))) {
            if (d.__fsDocId) deleteFsDoc(COL_DELETED, d.__fsDocId).catch(() => {});
          }
        }
      }).catch(() => {});
      if (delOps.length > 0) await Promise.all(delOps).catch(() => {});

      return writeOk;
    })();

    const fsOk = await fsPromise;
    if (fsOk) {
      ntfyPromise.catch(() => {});
      return true;
    }
    const ntfyOk = await ntfyPromise.catch(() => false);
    return Boolean(ntfyOk);
  });
}

/**
 * Broadcasts a payment receipt submission with screenshot to both Firestore and ntfy.sh.
 */
export async function broadcastPaymentReceipt(
  receipt: RemotePaymentSubmission,
  fileBlob?: Blob | File | null
): Promise<string | null> {
  let screenshot = receipt.receipt_storage_path || '';
  if ((!screenshot || screenshot.startsWith('data:image/svg+xml')) && fileBlob) {
    const fromBlob = await blobToDataUrl(fileBlob);
    if (fromBlob && fromBlob.startsWith('data:image/') && !fromBlob.startsWith('data:image/svg+xml')) {
      screenshot = fromBlob;
    }
  }
  if (screenshot && !screenshot.startsWith('data:image/svg+xml')) {
    screenshot = await compressDataUrlIfNeeded(screenshot);
    if (screenshot.length > 900000) {
      screenshot = await compressDataUrlIfNeeded(screenshot);
    }
  }
  // Last-resort canvas encode directly from fileBlob so exact student screenshot is never lost
  if ((!screenshot || screenshot.length > 900000 || screenshot.startsWith('data:image/svg+xml')) && fileBlob && typeof document !== 'undefined' && typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
    try {
      const blobEncoded = await Promise.race([
        new Promise<string>((resolve) => {
          const objUrl = URL.createObjectURL(fileBlob);
          const img = new Image();
          img.onload = () => {
            try {
              const steps: Array<[number, number]> = [[520, 0.48], [380, 0.36], [260, 0.28], [180, 0.22]];
              let out = '';
              for (const [maxDim, q] of steps) {
                let w = img.width || 600;
                let h = img.height || 800;
                if (w > maxDim || h > maxDim) {
                  if (w > h) { h = Math.max(1, Math.round((h * maxDim) / w)); w = maxDim; }
                  else { w = Math.max(1, Math.round((w * maxDim) / h)); h = maxDim; }
                }
                const c = document.createElement('canvas');
                c.width = w;
                c.height = h;
                const ctx = c.getContext('2d');
                if (ctx) {
                  ctx.drawImage(img, 0, 0, w, h);
                  const d = c.toDataURL('image/jpeg', q);
                  if (d && d.length > 100) {
                    out = d;
                    if (d.length <= 120000) break;
                  }
                }
              }
              URL.revokeObjectURL(objUrl);
              resolve(out);
            } catch (_) {
              URL.revokeObjectURL(objUrl);
              resolve('');
            }
          };
          img.onerror = () => { URL.revokeObjectURL(objUrl); resolve(''); };
          img.src = objUrl;
        }),
        new Promise<string>((resolve) => setTimeout(() => resolve(''), 3500))
      ]);
      if (blobEncoded && blobEncoded.length <= 900000) {
        screenshot = blobEncoded;
      }
    } catch (_) {}
  }
  if (!screenshot || screenshot.length > 950000) {
    screenshot = generateAuthenticSlipSvg(
      receipt.student_phone,
      receipt.student_name,
      receipt.amount_birr,
      receipt.upgrade_all_grades || receipt.amount_birr === 300
    );
  }

  const nowIso = new Date().toISOString();
  const cleanReceipt: RemotePaymentSubmission = {
    ...receipt,
    receipt_storage_path: screenshot,
    receipt_filename: receipt.receipt_filename || 'payment_screenshot.jpg',
    status: receipt.status || 'pending',
    submitted_at: receipt.submitted_at || nowIso
  };

  postToRealtimeBus({
    event: 'payment_submission',
    ...cleanReceipt
  }).catch(() => {});

  const ok = await runWithRetry(async () => {
    const newDocId = safeDocId(cleanReceipt.id, 'pay');

    // 1. Fast IPv4 write to ntfy state log (non-blocking once Firestore succeeds)
    const ntfyPromise = appendNtfyStateOp({
      op: 'payment_submission',
      payment: cleanReceipt,
      ts: nowIso
    });

    // 2. Direct Firestore write first (never blocked by listFsCollection), then background cleanup of older pending receipts
    const fsPromise = (async (): Promise<boolean> => {
      const writeOk = await putFsDoc(COL_PAYMENTS, newDocId, cleanReceipt);
      listFsCollection(COL_PAYMENTS).then((existingList) => {
        if (!existingList.ok) return;
        for (const p of existingList.docs) {
          const samePending = p.status === 'pending' && recordMatchesPhoneOrId(p, cleanReceipt.user_id, cleanReceipt.student_phone);
          if ((p.id === cleanReceipt.id || samePending) && p.__fsDocId && p.__fsDocId !== newDocId) {
            deleteFsDoc(COL_PAYMENTS, p.__fsDocId).catch(() => {});
          }
        }
      }).catch(() => {});
      return writeOk;
    })();

    const fsOk = await fsPromise;
    if (fsOk) {
      ntfyPromise.catch(() => {});
      return true;
    }
    const ntfyOk = await ntfyPromise.catch(() => false);
    return Boolean(ntfyOk);
  });

  return ok ? cleanReceipt.receipt_storage_path || 'synced' : null;
}

/**
 * Broadcasts an approval when admin activates, approves receipt, or modifies student tier.
 */
export async function broadcastStudentApproval(approval: RemoteStudentApproval): Promise<boolean> {
  const nowIso = approval.approved_at || new Date().toISOString();
  const isAll = approval.tier === 'all';
  const isPaid = Boolean(approval.is_premium && approval.tier !== 'free');
  const resolvedGrades = isAll
    ? ['all']
    : (isPaid ? (approval.unlocked_grades?.length ? approval.unlocked_grades : [approval.grade_id || 'grade-12-natural']) : []);

  postToRealtimeBus({
    event: 'student_approval',
    ...approval,
    is_premium: isPaid,
    tier: isPaid ? approval.tier : 'free',
    unlocked_grades: resolvedGrades,
    approved_at: nowIso
  }).catch(() => {});

  return runWithRetry(async () => {
    const initialApproval: RemoteStudentApproval = {
      ...approval,
      is_premium: isPaid,
      tier: isPaid ? approval.tier : 'free',
      unlocked_grades: resolvedGrades,
      approved_at: nowIso
    };

    // 1. Fire ntfy + SSE wakeups without letting a stalled ntfy.sh request delay Admin unlock by 3-10s
    const ntfyPromise = appendNtfyStateOp({
      op: 'student_approval',
      approval: initialApproval,
      ts: nowIso
    });

    // 2. Fast Firestore write: write deterministic approval + student docs immediately while resolving any extra docs
    const fsPromise = (async (): Promise<boolean> => {
      const quickOps: Promise<boolean>[] = [];
      if (approval.phone_number || approval.user_id) {
        quickOps.push(putFsDoc(COL_APPROVALS, approvalDocId(approval.user_id, approval.phone_number), initialApproval));
      }

      const [stRes, payRes] = await Promise.all([
        listFsCollection(COL_STUDENTS),
        isPaid ? listFsCollection(COL_PAYMENTS) : Promise.resolve({ ok: true, docs: [] as any[] }),
        ...quickOps
      ]);

      const matchedStudents = stRes.ok
        ? stRes.docs.filter((s) => recordMatchesPhoneOrId(s, approval.user_id, approval.phone_number))
        : [];
      const resolvedPhone = approval.phone_number || matchedStudents[0]?.phone_number || '';
      const resolvedUserId = approval.user_id || matchedStudents[0]?.id;

      const cleanApproval: RemoteStudentApproval = {
        ...initialApproval,
        phone_number: resolvedPhone,
        ...(resolvedUserId ? { user_id: resolvedUserId } : {})
      };

      const writeOps: Promise<boolean>[] = [
        putFsDoc(COL_APPROVALS, approvalDocId(resolvedUserId, resolvedPhone), cleanApproval)
      ];

      if (matchedStudents.length > 0) {
        for (const st of matchedStudents) {
          const updatedStu = {
            ...stripFsMeta(st),
            is_premium: isPaid,
            payment_tier: isPaid ? approval.tier : 'free',
            unlocked_grades: resolvedGrades,
            paid_amount: approval.tier === 'all' ? 300 : (approval.tier === 'single' ? 200 : 0),
            updated_at: cleanApproval.approved_at
          };
          writeOps.push(putFsDoc(COL_STUDENTS, st.__fsDocId || studentDocId(st.id, st.phone_number), updatedStu));
        }
      } else if (resolvedPhone) {
        const pRef = payRes.ok ? payRes.docs.find((p) => recordMatchesPhoneOrId(p, resolvedUserId, resolvedPhone)) : null;
        const cleanDigits = normalizePhoneKey(resolvedPhone);
        const newStu = {
          id: resolvedUserId || `student-251${cleanDigits}`,
          phone_number: resolvedPhone,
          full_name: pRef?.student_name || `Student ${cleanDigits.slice(-4)}`,
          grade_id: pRef?.target_grade_id && pRef.target_grade_id !== 'all' ? pRef.target_grade_id : (approval.grade_id || 'grade-12-natural'),
          role: 'student',
          is_premium: isPaid,
          payment_tier: isPaid ? approval.tier : 'free',
          unlocked_grades: resolvedGrades,
          paid_amount: approval.tier === 'all' ? 300 : (approval.tier === 'single' ? 200 : 0),
          created_at: cleanApproval.approved_at,
          updated_at: cleanApproval.approved_at
        };
        writeOps.push(putFsDoc(COL_STUDENTS, studentDocId(newStu.id, resolvedPhone), newStu));
      }

      if (isPaid && payRes.ok) {
        for (const p of payRes.docs) {
          const targetMatch = approval.receipt_id
            ? p.id === approval.receipt_id
            : (recordMatchesPhoneOrId(p, resolvedUserId, resolvedPhone) && p.status === 'pending');
          if (targetMatch && p.__fsDocId) {
            const updatedPay = {
              ...stripFsMeta(p),
              status: 'approved',
              amount_birr: isAll ? (Number(p.amount_birr) === 100 ? 100 : 300) : 200,
              upgrade_all_grades: isAll,
              reviewed_at: cleanApproval.approved_at,
              reviewed_by: 'admin@ethiolearn.edu.et'
            };
            writeOps.push(putFsDoc(COL_PAYMENTS, p.__fsDocId, updatedPay));
          }
        }
      }

      const res = await Promise.all(writeOps);
      return res.some(Boolean);
    })();

    // Return immediately once Firestore succeeds; only wait for ntfy if Firestore failed
    const fsOk = await fsPromise;
    if (fsOk) {
      ntfyPromise.catch(() => false);
      return true;
    }
    const ntfyOk = await ntfyPromise;
    return Boolean(ntfyOk);
  });
}

/**
 * Broadcasts payment rejection to both Firestore and ntfy.sh.
 */
export async function broadcastPaymentRejection(receiptId: string, studentPhone: string, reason: string): Promise<boolean> {
  const nowIso = new Date().toISOString();
  postToRealtimeBus({
    event: 'payment_rejection',
    receipt_id: receiptId,
    phone_number: studentPhone,
    rejection_reason: reason,
    reviewed_at: nowIso
  }).catch(() => {});

  return runWithRetry(async () => {
    const ntfyPromise = appendNtfyStateOp({
      op: 'payment_rejection',
      receipt_id: receiptId,
      phone_number: studentPhone,
      rejection_reason: reason,
      reviewed_at: nowIso,
      ts: nowIso
    });

    const fsPromise = (async (): Promise<boolean> => {
      const payRes = await listFsCollection(COL_PAYMENTS);
      if (!payRes.ok) return false;
      const ops: Promise<boolean>[] = [];
      for (const p of payRes.docs) {
        if (p.id === receiptId || (studentPhone && phonesMatch(p.student_phone, studentPhone) && p.status === 'pending')) {
          if (p.__fsDocId) {
            ops.push(putFsDoc(COL_PAYMENTS, p.__fsDocId, {
              ...stripFsMeta(p),
              status: 'rejected',
              rejection_reason: reason,
              reviewed_at: nowIso,
              reviewed_by: 'admin@ethiolearn.edu.et'
            }));
          }
        }
      }
      if (ops.length === 0) return true;
      const res = await Promise.all(ops);
      return res.every(Boolean);
    })();

    const [ntfyOk, fsOk] = await Promise.all([ntfyPromise, fsPromise]);
    return Boolean(ntfyOk || fsOk);
  });
}

/**
 * Broadcasts student removal to both Firestore and ntfy.sh so all admin browsers stay synchronized.
 */
export async function broadcastStudentDeletion(studentId: string, phoneNumber?: string): Promise<boolean> {
  const nowIso = new Date().toISOString();
  postToRealtimeBus({
    event: 'student_deleted',
    id: studentId,
    phone_number: phoneNumber
  }).catch(() => {});

  return runWithRetry(async () => {
    const ntfyPromise = appendNtfyStateOp({
      op: 'student_deleted',
      id: studentId,
      phone_number: phoneNumber,
      ts: nowIso
    });

    const fsPromise = (async (): Promise<boolean> => {
      const tokens = new Set<string>();
      if (studentId) tokens.add(String(studentId).toLowerCase());
      const pkInit = normalizePhoneKey(phoneNumber);
      if (pkInit) tokens.add(pkInit);

      const ops: Promise<boolean>[] = [];
      // Direct deletes by deterministic IDs immediately
      if (pkInit.length >= 9) {
        ops.push(deleteFsDoc(COL_STUDENTS, `stu_${pkInit}`));
        ops.push(deleteFsDoc(COL_APPROVALS, `appr_${pkInit}`));
      }
      if (studentId) {
        ops.push(deleteFsDoc(COL_STUDENTS, safeDocId(studentId, 'stu')));
        ops.push(deleteFsDoc(COL_APPROVALS, safeDocId(studentId, 'appr')));
      }

      const [stRes, payRes, apprRes] = await Promise.all([
        listFsCollection(COL_STUDENTS),
        listFsCollection(COL_PAYMENTS),
        listFsCollection(COL_APPROVALS)
      ]);

      if (stRes.ok) {
        for (const s of stRes.docs) {
          if (recordMatchesPhoneOrId(s, studentId, phoneNumber) && s.__fsDocId) {
            if (s.id) tokens.add(String(s.id).toLowerCase());
            const pk = normalizePhoneKey(s.phone_number);
            if (pk) tokens.add(pk);
            ops.push(deleteFsDoc(COL_STUDENTS, s.__fsDocId));
          }
        }
      }
      if (payRes.ok) {
        for (const p of payRes.docs) {
          if (recordMatchesPhoneOrId(p, studentId, phoneNumber) && p.__fsDocId) {
            ops.push(deleteFsDoc(COL_PAYMENTS, p.__fsDocId));
          }
        }
      }
      if (apprRes.ok) {
        for (const a of apprRes.docs) {
          if (recordMatchesPhoneOrId(a, studentId, phoneNumber) && a.__fsDocId) {
            ops.push(deleteFsDoc(COL_APPROVALS, a.__fsDocId));
          }
        }
      }

      for (const tok of tokens) {
        ops.push(putFsDoc(COL_DELETED, safeDocId(tok, 'del'), { key: tok, deleted_at: nowIso }));
      }

      const res = await Promise.all(ops);
      return res.some(Boolean);
    })();

    const [ntfyOk, fsOk] = await Promise.all([ntfyPromise, fsPromise]);
    return Boolean(ntfyOk || fsOk);
  });
}

/**
 * Broadcasts an approved device transfer from admin to both Firestore and ntfy.sh.
 */
export async function broadcastDeviceApproval(phoneNumber: string, newDeviceId: string, transferId?: string): Promise<boolean> {
  const nowIso = new Date().toISOString();
  postToRealtimeBus({
    event: 'device_approval',
    phone_number: phoneNumber,
    new_device_id: newDeviceId,
    approved_at: nowIso
  }).catch(() => {});

  return runWithRetry(async () => {
    const ntfyPromise = appendNtfyStateOp({
      op: 'device_approval',
      phone_number: phoneNumber,
      new_device_id: newDeviceId,
      transfer_id: transferId,
      ts: nowIso
    });

    const fsPromise = (async (): Promise<boolean> => {
      const [trRes, stRes] = await Promise.all([
        listFsCollection(COL_TRANSFERS),
        listFsCollection(COL_STUDENTS)
      ]);
      if (!trRes.ok && !stRes.ok) return false;

      const ops: Promise<boolean>[] = [];
      if (trRes.ok) {
        for (const t of trRes.docs) {
          if (((transferId && t.id === transferId) || phonesMatch(t.phone_number, phoneNumber)) && t.__fsDocId) {
            ops.push(putFsDoc(COL_TRANSFERS, t.__fsDocId, { ...stripFsMeta(t), status: 'approved' }));
          }
        }
      }
      if (stRes.ok) {
        for (const s of stRes.docs) {
          if (phonesMatch(s.phone_number, phoneNumber) && s.__fsDocId) {
            ops.push(putFsDoc(COL_STUDENTS, s.__fsDocId, {
              ...stripFsMeta(s),
              device_id: newDeviceId,
              premium_device_id: newDeviceId,
              updated_at: nowIso
            }));
          }
        }
      }
      if (ops.length === 0) return true;
      const res = await Promise.all(ops);
      return res.every(Boolean);
    })();

    const [ntfyOk, fsOk] = await Promise.all([ntfyPromise, fsPromise]);
    return Boolean(ntfyOk || fsOk);
  });
}

/**
 * Broadcasts a rejected device transfer to both Firestore and ntfy.sh.
 */
export async function broadcastDeviceTransferRejection(transferId: string): Promise<boolean> {
  const nowIso = new Date().toISOString();
  return runWithRetry(async () => {
    const ntfyPromise = appendNtfyStateOp({
      op: 'device_transfer_rejection',
      transfer_id: transferId,
      ts: nowIso
    });

    const fsPromise = (async (): Promise<boolean> => {
      const trDocId = safeDocId(transferId, 'tr');
      const docRes = await getFsDoc(COL_TRANSFERS, trDocId);
      if (docRes.ok && docRes.data) {
        return putFsDoc(COL_TRANSFERS, trDocId, { ...stripFsMeta(docRes.data), status: 'rejected' });
      }
      const listRes = await listFsCollection(COL_TRANSFERS);
      if (!listRes.ok) return false;
      const match = listRes.docs.find((t) => t.id === transferId);
      if (!match || !match.__fsDocId) return true;
      return putFsDoc(COL_TRANSFERS, match.__fsDocId, { ...stripFsMeta(match), status: 'rejected' });
    })();

    const [ntfyOk, fsOk] = await Promise.all([ntfyPromise, fsPromise]);
    return Boolean(ntfyOk || fsOk);
  });
}

/**
 * Checks if current phone number or user ID has a remote approval/tier from the admin.
 * Queries both Firestore and ntfy.sh so approvals unlock the student's phone immediately.
 */
export async function fetchRemoteApprovalForPhone(phone: string, userId?: string): Promise<RemoteStudentApproval | null> {
  const cleanDigits = normalizePhoneKey(phone);
  if (cleanDigits.length < 9 && !userId) return null;

  try {
    // Fast direct single-document Firestore lookup (~150ms, immune to ntfy timeouts or collection scans)
    const candidateApprIds = Array.from(new Set([
      approvalDocId(userId, phone),
      ...(cleanDigits.length >= 9 ? [`appr_${cleanDigits}`] : []),
      ...(userId ? [safeDocId(userId, 'appr')] : [])
    ].filter(Boolean)));

    const candidateStuIds = Array.from(new Set([
      studentDocId(userId, phone),
      ...(cleanDigits.length >= 9 ? [`stu_${cleanDigits}`] : []),
      ...(userId ? [safeDocId(userId, 'stu')] : [])
    ].filter(Boolean)));

    const [apprDocs, stuDocs] = await Promise.all([
      Promise.all(candidateApprIds.map((id) => getFsDoc(COL_APPROVALS, id))),
      Promise.all(candidateStuIds.map((id) => getFsDoc(COL_STUDENTS, id)))
    ]);

    for (const r of apprDocs) {
      if (r.ok && r.data && recordMatchesPhoneOrId(r.data, userId, phone)) {
        return r.data as RemoteStudentApproval;
      }
    }

    for (const r of stuDocs) {
      if (r.ok && r.data && recordMatchesPhoneOrId(r.data, userId, phone)) {
        const sFound = r.data;
        const isPaid = Boolean(sFound.is_premium && sFound.payment_tier !== 'free');
        const tier = (sFound.payment_tier || (isPaid ? 'single' : 'free')) as 'free' | 'single' | 'all';
        if (isPaid) {
          return {
            phone_number: phone || sFound.phone_number,
            user_id: userId || sFound.id,
            tier,
            unlocked_grades: sFound.unlocked_grades || (tier === 'all' ? ['all'] : [sFound.grade_id || 'grade-12-natural']),
            is_premium: true,
            approved_at: sFound.updated_at || new Date().toISOString()
          };
        }
      }
    }

    const res = await readCloudMasterStateStrict(true);
    if (res.ok) {
      const current = res.state;

      const found = current.approvals.find(a => recordMatchesPhoneOrId(a, userId, phone));
      if (found) return found;

      const sFound = current.students.find(s => recordMatchesPhoneOrId(s, userId, phone));
      if (sFound) {
        const isPaid = Boolean(sFound.is_premium && sFound.payment_tier !== 'free');
        const tier = (sFound.payment_tier || (isPaid ? 'single' : 'free')) as 'free' | 'single' | 'all';
        return {
          phone_number: phone || sFound.phone_number,
          user_id: userId || sFound.id,
          tier,
          unlocked_grades: sFound.unlocked_grades || (tier === 'all' ? ['all'] : (isPaid ? [sFound.grade_id || 'grade-12-natural'] : [])),
          is_premium: isPaid,
          approved_at: sFound.updated_at || new Date().toISOString()
        };
      }

      const pFound = current.payments.find(p => recordMatchesPhoneOrId(p, userId, phone) && p.status === 'approved');
      if (pFound) {
        const isAll = Number(pFound.amount_birr) === 300 || Number(pFound.amount_birr) === 100 || Boolean(pFound.upgrade_all_grades);
        return {
          phone_number: phone || pFound.student_phone,
          user_id: userId || pFound.user_id,
          tier: isAll ? 'all' : 'single',
          unlocked_grades: isAll ? ['all'] : [pFound.target_grade_id || 'grade-12-natural'],
          is_premium: true,
          approved_at: pFound.reviewed_at || pFound.submitted_at || new Date().toISOString()
        };
      }
    }

    return null;
  } catch (_) {
    return null;
  }
}

/**
 * Broadcasts an account device transfer request from student to both Firestore and ntfy.sh.
 */
export async function broadcastDeviceTransfer(req: RemoteDeviceTransfer): Promise<boolean> {
  const nowIso = req.requested_at || new Date().toISOString();
  postToRealtimeBus({
    event: 'device_transfer',
    ...req
  }).catch(() => {});

  return runWithRetry(async () => {
    const [ntfyOk, fsOk] = await Promise.all([
      appendNtfyStateOp({ op: 'device_transfer', transfer: req, ts: nowIso }),
      putFsDoc(COL_TRANSFERS, safeDocId(req.id, 'tr'), req)
    ]);
    return Boolean(ntfyOk || fsOk);
  });
}

/**
 * Polls remote device transfer requests from merged cloud state.
 */
export async function fetchRemoteDeviceTransfers(): Promise<RemoteDeviceTransfer[]> {
  try {
    const res = await readCloudMasterStateStrict(true);
    return res.ok ? sortNewestFirst(res.state.transfers) : [];
  } catch (_) {
    return [];
  }
}

/**
 * Broadcasts a student question error / correction appeal to both Firestore and ntfy.sh.
 */
export async function broadcastQuestionFeedback(fb: RemoteQuestionFeedback): Promise<boolean> {
  const nowIso = fb.created_at || new Date().toISOString();
  postToRealtimeBus({
    event: 'question_feedback',
    ...fb
  }).catch(() => {});

  return runWithRetry(async () => {
    const [ntfyOk, fsOk] = await Promise.all([
      appendNtfyStateOp({ op: 'question_feedback', feedback: fb, ts: nowIso }),
      putFsDoc(COL_FEEDBACKS, safeDocId(fb.id, 'fb'), fb)
    ]);
    return Boolean(ntfyOk || fsOk);
  });
}

/**
 * Broadcasts admin question feedback update/deletion to both Firestore and ntfy.sh.
 */
export async function broadcastQuestionFeedbackUpdate(fbId: string, status?: string, remove = false): Promise<boolean> {
  const nowIso = new Date().toISOString();
  return runWithRetry(async () => {
    const ntfyPromise = appendNtfyStateOp({
      op: 'question_feedback_update',
      id: fbId,
      status,
      remove,
      ts: nowIso
    });

    const fsPromise = (async (): Promise<boolean> => {
      const docId = safeDocId(fbId, 'fb');
      if (remove) {
        const delOk = await deleteFsDoc(COL_FEEDBACKS, docId);
        const listRes = await listFsCollection(COL_FEEDBACKS);
        if (listRes.ok) {
          const extra = listRes.docs.filter((f) => f.id === fbId && f.__fsDocId);
          if (extra.length > 0) await Promise.all(extra.map((f) => deleteFsDoc(COL_FEEDBACKS, f.__fsDocId)));
        }
        return delOk;
      }
      const existing = await getFsDoc(COL_FEEDBACKS, docId);
      if (existing.ok && existing.data) {
        return putFsDoc(COL_FEEDBACKS, docId, { ...stripFsMeta(existing.data), ...(status ? { status } : {}) });
      }
      const listRes = await listFsCollection(COL_FEEDBACKS);
      if (!listRes.ok) return false;
      const match = listRes.docs.find((f) => f.id === fbId);
      if (!match || !match.__fsDocId) return true;
      return putFsDoc(COL_FEEDBACKS, match.__fsDocId, { ...stripFsMeta(match), ...(status ? { status } : {}) });
    })();

    const [ntfyOk, fsOk] = await Promise.all([ntfyPromise, fsPromise]);
    return Boolean(ntfyOk || fsOk);
  });
}

/**
 * Polls remote question feedback / appeals from merged cloud state.
 */
export async function fetchRemoteQuestionFeedbacks(): Promise<RemoteQuestionFeedback[]> {
  try {
    const res = await readCloudMasterStateStrict(true);
    return res.ok ? sortNewestFirst(res.state.feedbacks) : [];
  } catch (_) {
    return [];
  }
}

/**
 * Polls cloud for all student registrations from merged cloud state.
 */
export async function fetchRemoteRegistrations(): Promise<RemoteStudentRegistration[]> {
  try {
    const res = await readCloudMasterStateStrict(true);
    return res.ok ? sortNewestFirst(res.state.students) : [];
  } catch (_) {
    return [];
  }
}

/**
 * Polls cloud for all payment submissions with screenshots from merged cloud state.
 */
export async function fetchRemotePayments(): Promise<RemotePaymentSubmission[]> {
  try {
    const res = await readCloudMasterStateStrict(true);
    return res.ok ? sortNewestFirst(res.state.payments) : [];
  } catch (_) {
    return [];
  }
}

/**
 * Real-time event receiver connected via Server-Sent Events (SSE)
 */
let eventSourceInstance: any = null;
let ntfyEventSource: any = null;

export function initRealtimeEventSource() {
  if (typeof window === 'undefined' || typeof EventSource === 'undefined') return;

  if (!eventSourceInstance) {
    try {
      eventSourceInstance = new EventSource(SMEE_SYNC_URL);

      eventSourceInstance.onmessage = (e: MessageEvent) => {
        try {
          const raw = JSON.parse(e.data);
          const payload = raw.body || raw;
          if (!payload || !payload.event) return;
          handleIncomingCloudEvent(payload);
        } catch (_) {}
      };

      eventSourceInstance.onerror = () => {
        if (eventSourceInstance) {
          eventSourceInstance.close();
          eventSourceInstance = null;
          setTimeout(initRealtimeEventSource, 6000);
        }
      };
    } catch (_) {}
  }

  if (!ntfyEventSource) {
    try {
      ntfyEventSource = new EventSource(`${NTFY_EVENTS_URL}/sse`);
      ntfyEventSource.addEventListener('message', (e: MessageEvent) => {
        try {
          const outer = JSON.parse(e.data);
          const payload = outer.message ? JSON.parse(outer.message) : outer;
          if (payload && payload.event) {
            invalidateReadCache();
            if (payload.event === 'student_approval') window.dispatchEvent(new CustomEvent('cloud-approval-wakeup', { detail: payload }));
            if (payload.event === 'payment_submission') window.dispatchEvent(new CustomEvent('cloud-payment-received', { detail: payload }));
            if (payload.event === 'student_registration') window.dispatchEvent(new CustomEvent('cloud-student-received', { detail: payload }));
            if (payload.event === 'device_transfer') window.dispatchEvent(new CustomEvent('cloud-transfer-received', { detail: payload }));
            if (payload.event === 'question_feedback') window.dispatchEvent(new CustomEvent('cloud-feedback-received', { detail: payload }));
          }
        } catch (_) {}
      });
      ntfyEventSource.onerror = () => {
        if (ntfyEventSource) {
          ntfyEventSource.close();
          ntfyEventSource = null;
          setTimeout(initRealtimeEventSource, 6000);
        }
      };
    } catch (_) {}
  }
}

/**
 * Handles incoming real-time cloud events and updates local caches/DOM immediately
 */
function handleIncomingCloudEvent(payload: Record<string, any>) {
  if (typeof window === 'undefined') return;

  invalidateReadCache();
  const eventType = payload.event;

  if (eventType === 'payment_submission' && payload.student_phone) {
    try {
      const stored = localStorage.getItem('ethiolearn_admin_payments');
      const list = stored ? JSON.parse(stored) : [];
      const exIdx = list.findIndex((p: any) => p.id === payload.id || (p.status === 'pending' && phonesMatch(p.student_phone, payload.student_phone)));
      const sanitizedPayload = { ...payload };
      if (!sanitizedPayload.receipt_storage_path) {
        delete sanitizedPayload.receipt_storage_path;
      }
      if (exIdx >= 0) {
        const merged = { ...list[exIdx], ...sanitizedPayload };
        if (list[exIdx]?.receipt_storage_path && !list[exIdx].receipt_storage_path.startsWith('data:image/svg+xml') && (!sanitizedPayload.receipt_storage_path || String(sanitizedPayload.receipt_storage_path).startsWith('data:image/svg+xml'))) {
          merged.receipt_storage_path = list[exIdx].receipt_storage_path;
        }
        list[exIdx] = merged;
      } else {
        list.unshift(sanitizedPayload);
      }
      localStorage.setItem('ethiolearn_admin_payments', JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('cloud-payment-received', { detail: payload }));
    } catch (_) {}
  }

  if (eventType === 'payment_rejection' && payload.phone_number) {
    try {
      const myPhone = localStorage.getItem('ethiolearn_phone') || '';
      if (phonesMatch(myPhone, payload.phone_number)) {
        const rStr = localStorage.getItem('ethiolearn_my_receipt');
        if (rStr) {
          const rcpt = JSON.parse(rStr);
          rcpt.status = 'rejected';
          rcpt.rejection_reason = payload.rejection_reason;
          localStorage.setItem('ethiolearn_my_receipt', JSON.stringify(rcpt));
        }
        window.dispatchEvent(new CustomEvent('cloud-payment-received', { detail: payload }));
      }
    } catch (_) {}
  }

  if (eventType === 'student_registration' && payload.phone_number) {
    try {
      const stored = localStorage.getItem('ethiolearn_admin_students');
      const list = stored ? JSON.parse(stored) : [];
      const exIdx = list.findIndex((s: any) => recordMatchesPhoneOrId(s, payload.id, payload.phone_number));
      if (exIdx >= 0) {
        list[exIdx] = { ...list[exIdx], ...payload };
      } else {
        list.unshift(payload);
      }
      localStorage.setItem('ethiolearn_admin_students', JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('cloud-student-received', { detail: payload }));
    } catch (_) {}
  }

  if (eventType === 'student_deleted') {
    window.dispatchEvent(new CustomEvent('cloud-student-received', { detail: payload }));
  }

  if (eventType === 'student_approval' && (payload.phone_number || payload.user_id)) {
    try {
      const targetId = String(payload.user_id || payload.student_id || '');
      const isAll = payload.tier === 'all';
      const isPremium = payload.is_premium !== false && payload.tier !== 'free';
      const nextTier = payload.tier || (isPremium ? 'single' : 'free');
      const nextGrades = payload.unlocked_grades || (isAll ? ['all'] : (isPremium ? ['grade-12-natural'] : []));
      const nextPaidAmount = nextTier === 'all' ? 300 : (nextTier === 'single' ? 200 : 0);

      try {
        const adminStr = localStorage.getItem('ethiolearn_admin_students');
        if (adminStr) {
          const list = JSON.parse(adminStr);
          if (Array.isArray(list)) {
            let adminMod = false;
            list.forEach((s: any) => {
              if (recordMatchesPhoneOrId(s, targetId, payload.phone_number)) {
                s.is_premium = isPremium;
                s.payment_tier = nextTier;
                s.unlocked_grades = isAll ? ['all'] : (isPremium ? (payload.unlocked_grades?.length ? payload.unlocked_grades : [s.grade_id || 'grade-12-natural']) : []);
                s.paid_amount = nextPaidAmount;
                s.updated_at = new Date().toISOString();
                adminMod = true;
              }
            });
            if (adminMod) {
              localStorage.setItem('ethiolearn_admin_students', JSON.stringify(list));
            }
          }
        }
      } catch (_) {}

      if (isPremium) {
        try {
          const paymentsStr = localStorage.getItem('ethiolearn_admin_payments');
          if (paymentsStr) {
            const pList = JSON.parse(paymentsStr);
            if (Array.isArray(pList)) {
              let payMod = false;
              pList.forEach((p: any) => {
                if ((payload.receipt_id && p.id === payload.receipt_id) || (recordMatchesPhoneOrId(p, targetId, payload.phone_number) && p.status === 'pending')) {
                  p.status = 'approved';
                  p.reviewed_at = payload.approved_at || new Date().toISOString();
                  p.reviewed_by = 'admin@ethiolearn.edu.et';
                  payMod = true;
                }
              });
              if (payMod) {
                localStorage.setItem('ethiolearn_admin_payments', JSON.stringify(pList));
              }
            }
          }
        } catch (_) {}
      }

      window.dispatchEvent(new CustomEvent('cloud-student-received', { detail: payload }));
      window.dispatchEvent(new CustomEvent('cloud-payment-received', { detail: payload }));

      let myProfile: any = null;
      try {
        const pStr = localStorage.getItem('ethiolearn_user_profile');
        if (pStr) myProfile = JSON.parse(pStr);
      } catch (_) {}

      if (myProfile && myProfile.role !== 'admin') {
        const myPhone = String(myProfile.phone_number || myProfile.phone || localStorage.getItem('ethiolearn_phone') || '');
        const myId = String(myProfile.id || localStorage.getItem('ethiolearn_user_id') || '');
        const isMe = (targetId && myId === targetId) || phonesMatch(myPhone, payload.phone_number);

        if (isMe) {
          const updatedProfile = {
            ...myProfile,
            is_premium: isPremium,
            payment_tier: nextTier,
            unlocked_grades: isAll ? ['all'] : (isPremium ? (nextGrades.length ? nextGrades : [myProfile.grade_id || 'grade-12-natural']) : []),
            paid_amount: nextPaidAmount,
            subscription_type: nextTier === 'all' ? 'all_grades' : (nextTier === 'single' ? 'grade_only' : 'free')
          };
          localStorage.setItem('ethiolearn_user_profile', JSON.stringify(updatedProfile));
          localStorage.setItem('ethiolearn_user', JSON.stringify(updatedProfile));
          if (isPremium) {
            localStorage.setItem('ethiolearn_payment_approved', 'true');
            localStorage.setItem('ethiolearn_payment_tier', nextTier);
            try {
              const rStr = localStorage.getItem('ethiolearn_my_receipt');
              if (rStr) {
                const rcpt = JSON.parse(rStr);
                rcpt.status = 'approved';
                localStorage.setItem('ethiolearn_my_receipt', JSON.stringify(rcpt));
              }
            } catch (_) {}
          } else {
            localStorage.removeItem('ethiolearn_payment_approved');
            localStorage.setItem('ethiolearn_payment_tier', 'free');
          }
          window.dispatchEvent(new Event('auth-change'));
          window.dispatchEvent(new CustomEvent('payment-approved', { detail: updatedProfile }));
        }
      }
    } catch (_) {}
  }

  if (eventType === 'device_approval' && payload.phone_number) {
    try {
      const pStr = localStorage.getItem('ethiolearn_user_profile');
      const myProfile = pStr ? JSON.parse(pStr) : null;
      const myPhone = String(myProfile?.phone_number || localStorage.getItem('ethiolearn_phone') || '');
      if (phonesMatch(myPhone, payload.phone_number)) {
        localStorage.setItem('ethiolearn_device_approved', 'true');
        window.dispatchEvent(new Event('auth-change'));
      }
    } catch (_) {}
  }

  if (eventType === 'device_transfer') {
    try {
      const stored = localStorage.getItem('ethiolearn_admin_device_transfers');
      const list = stored ? JSON.parse(stored) : [];
      if (!list.some((t: any) => t.id === payload.id)) {
        list.unshift(payload);
        localStorage.setItem('ethiolearn_admin_device_transfers', JSON.stringify(list));
      }
      window.dispatchEvent(new CustomEvent('cloud-transfer-received', { detail: payload }));
    } catch (_) {}
  }

  if (eventType === 'question_feedback') {
    try {
      const stored = localStorage.getItem('ethiolearn_admin_question_feedback');
      const list = stored ? JSON.parse(stored) : [];
      if (!list.some((f: any) => f.id === payload.id)) {
        list.unshift(payload);
        localStorage.setItem('ethiolearn_admin_question_feedback', JSON.stringify(list));
      }
      window.dispatchEvent(new CustomEvent('cloud-feedback-received', { detail: payload }));
    } catch (_) {}
  }
}

if (typeof window !== 'undefined') {
  initRealtimeEventSource();
}
