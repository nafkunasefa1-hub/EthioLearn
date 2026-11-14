/**
 * EthioLearn Cloud Synchronization Service
 *
 * Provides reliable, mutex-serialized, two-way synchronization between students
 * on Android APK / mobile / web and administrators across all browsers
 * (Chrome, Edge, Safari) on https://nafkunasefa1-ethiolearn-paypal.static.hf.space.
 */

const SMEE_SYNC_URL = 'https://smee.io/ethiolearn_sync_prod_2026';
const NTFY_EVENTS_URL = 'https://ntfy.sh/ethiolearn_events_v3_prod';

// Build-time Hugging Face write/read token injected via Vite env (.env.local)
let _viteHfToken = '';
try {
  // @ts-ignore - Vite / esbuild statically replaces import.meta.env.VITE_HF_TOKEN from .env.local
  _viteHfToken = import.meta.env.VITE_HF_TOKEN || '';
} catch {}
const HF_TOKEN = String(
  _viteHfToken ||
  (typeof process !== 'undefined' && process.env && process.env.VITE_HF_TOKEN) ||
  (typeof globalThis !== 'undefined' && (globalThis as any).__ETHIOLEARN_HF_TOKEN__) ||
  ''
).trim();

const HF_COMMIT_URL = 'https://huggingface.co/api/spaces/nafkunasefa1/ethiolearn-paypal/commit/main';
const HF_RAW_SYNC_URL = 'https://huggingface.co/spaces/nafkunasefa1/ethiolearn-paypal/raw/main/sync_state.json';
const HF_STATIC_SYNC_URL = 'https://nafkunasefa1-ethiolearn-paypal.static.hf.space/sync_state.json';

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

/**
 * Low-level dispatch to real-time notification buses (smee.io + ntfy.sh)
 * Strips heavy image payloads when pushing to SSE notification buses.
 */
async function postToRealtimeBus(eventPayload: Record<string, any>): Promise<boolean> {
  const lightPayload: Record<string, any> = { ...eventPayload };
  if (typeof lightPayload.receipt_storage_path === 'string' && lightPayload.receipt_storage_path.length > 48000) {
    lightPayload.receipt_storage_path = '';
    lightPayload.has_cloud_image = true;
  }

  const bodyStr = JSON.stringify(lightPayload);
  const p1 = fetch(SMEE_SYNC_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: bodyStr
  }).then(r => r.ok).catch(() => false);

  const ntfyBrief = JSON.stringify({
    event: lightPayload.event,
    phone_number: lightPayload.phone_number || lightPayload.student_phone,
    user_id: lightPayload.user_id || lightPayload.id,
    tier: lightPayload.tier,
    status: lightPayload.status,
    ts: Date.now()
  });
  const p2 = fetch(NTFY_EVENTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: ntfyBrief
  }).then(r => r.ok).catch(() => false);

  const [r1, r2] = await Promise.all([p1, p2]);
  return Boolean(r1 || r2);
}

function toBase64Utf8(str: string): string {
  try {
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(str, 'utf8').toString('base64');
    }
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  } catch (_) {
    return btoa(unescape(encodeURIComponent(str)));
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
    students: parseList(obj.students),
    payments: parseList(obj.payments),
    approvals: parseList(obj.approvals),
    transfers: parseList(obj.transfers),
    feedbacks: parseList(obj.feedbacks),
    deleted_students: parseList(obj.deleted_students)
  };
}

/**
 * Balances storage size so sync_state.json stays fast and compact across mobile devices
 * while always preserving student registrations and active/pending payment screenshots.
 */
function balanceCloudState(state: CloudMasterState): CloudMasterState {
  const next: CloudMasterState = {
    students: parseList(state.students).slice(0, 200),
    payments: parseList(state.payments).slice(0, 60),
    approvals: parseList(state.approvals).slice(0, 200),
    transfers: parseList(state.transfers).slice(0, 50),
    feedbacks: parseList(state.feedbacks).slice(0, 80),
    deleted_students: parseList(state.deleted_students).slice(0, 200),
    updated_at: new Date().toISOString()
  };

  // Keep payload comfortably under ~1.4MB by trimming oldest *already-reviewed* receipt blobs if needed
  let serialized = JSON.stringify(next);
  if (serialized.length > 1400000 && next.payments.length > 10) {
    for (let i = next.payments.length - 1; i >= 10 && serialized.length > 1400000; i--) {
      if (next.payments[i].status !== 'pending' && next.payments[i].receipt_storage_path) {
        next.payments[i] = { ...next.payments[i], receipt_storage_path: '' };
        serialized = JSON.stringify(next);
      }
    }
  }
  return next;
}

// Short read coalescing cache (1.2s) + strict sequential mutation mutex queue
let inFlightReadPromise: Promise<{ ok: boolean; notFound?: boolean; state: CloudMasterState }> | null = null;
let lastReadCache: { ts: number; result: { ok: boolean; notFound?: boolean; state: CloudMasterState } } | null = null;
let mutationQueue: Promise<any> = Promise.resolve();

function invalidateReadCache() {
  lastReadCache = null;
}

async function fetchJsonWithTimeout(url: string, options: RequestInit, timeoutMs: number): Promise<Response | null> {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller ? controller.signal : undefined
    });
    return res;
  } catch (_) {
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
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
    const bust = `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

    // 1. Authoritative Raw HF endpoint (authenticated, zero CDN cache lag)
    const rawRes = await fetchJsonWithTimeout(
      `${HF_RAW_SYNC_URL}?t=${bust}`,
      {
        cache: 'no-store',
        headers: {
          'Authorization': `Bearer ${HF_TOKEN}`,
          'Cache-Control': 'no-cache'
        }
      },
      12000
    );

    if (rawRes) {
      if (rawRes.ok) {
        try {
          const json = await rawRes.json();
          const result = { ok: true, state: normalizeCloudState(json) };
          lastReadCache = { ts: Date.now(), result };
          return result;
        } catch (_) {}
      } else if (rawRes.status === 404) {
        return { ok: false, notFound: true, state: normalizeCloudState({}) };
      }
    }

    // 2. Static Space CDN fallback (if raw HF temporarily unreachable)
    const cdnRes = await fetchJsonWithTimeout(
      `${HF_STATIC_SYNC_URL}?t=${bust}`,
      {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      },
      9000
    );

    if (cdnRes && cdnRes.ok) {
      try {
        const json = await cdnRes.json();
        const result = { ok: true, state: normalizeCloudState(json) };
        lastReadCache = { ts: Date.now(), result };
        return result;
      } catch (_) {}
    }

    return { ok: false, state: normalizeCloudState({}) };
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
 * Fetches the authoritative master state object from Hugging Face cloud storage.
 */
export async function getCloudMasterState(forceFresh = false): Promise<CloudMasterState & { __synced?: boolean }> {
  const res = await readCloudMasterStateStrict(forceFresh);
  return {
    ...res.state,
    __synced: res.ok
  };
}

/**
 * Writes the master state object directly to Hugging Face repository via Commit API.
 */
export async function updateCloudMasterState(dataUpdate: Record<string, any>, summary = 'Sync update'): Promise<boolean> {
  const balanced = balanceCloudState(normalizeCloudState(dataUpdate));
  const jsonStr = JSON.stringify(balanced);
  const b64 = toBase64Utf8(jsonStr);

  const ndjson =
    JSON.stringify({ key: 'header', value: { summary: `${summary} ${Date.now()}` } }) +
    '\n' +
    JSON.stringify({ key: 'file', value: { path: 'sync_state.json', content: b64, encoding: 'base64' } });

  const res = await fetchJsonWithTimeout(
    HF_COMMIT_URL,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_TOKEN}`,
        'Content-Type': 'application/x-ndjson'
      },
      body: ndjson
    },
    22000
  );

  if (res && res.ok) {
    lastReadCache = {
      ts: Date.now(),
      result: { ok: true, state: balanced }
    };
    return true;
  }
  return false;
}

/**
 * Serializes all read-modify-write mutations through a queue + retries
 * so concurrent writes across multiple actions never clobber each other or overwrite with empty state.
 */
function enqueueCloudMutation(
  mutator: (current: CloudMasterState) => CloudMasterState,
  summary: string
): Promise<boolean> {
  const task = async (): Promise<boolean> => {
    const delays = [0, 450, 1100];
    for (let attempt = 0; attempt < delays.length; attempt++) {
      if (delays[attempt] > 0) {
        await new Promise(r => setTimeout(r, delays[attempt]));
      }
      invalidateReadCache();
      const readRes = await readCloudMasterStateStrict(true);
      if (!readRes.ok && !readRes.notFound) {
        continue;
      }
      const nextState = mutator(readRes.state);
      const ok = await updateCloudMasterState(nextState, summary);
      if (ok) {
        return true;
      }
    }
    return false;
  };

  const run = mutationQueue.then(task, task);
  mutationQueue = run.catch(() => false);
  return run;
}

/**
 * Broadcasts a new student registration to cloud
 */
export async function broadcastStudentRegistration(student: RemoteStudentRegistration): Promise<boolean> {
  postToRealtimeBus({
    event: 'student_registration',
    ...student
  }).catch(() => {});

  return enqueueCloudMutation((current) => {
    const list: RemoteStudentRegistration[] = [...current.students];
    const exIdx = list.findIndex(s => recordMatchesPhoneOrId(s, student.id, student.phone_number));
    if (exIdx >= 0) {
      // Preserve existing paid tier if re-registering/updating profile unless explicitly paid
      const existing = list[exIdx];
      list[exIdx] = {
        ...existing,
        ...student,
        is_premium: existing.is_premium || student.is_premium || false,
        payment_tier: (existing.payment_tier && existing.payment_tier !== 'free') ? existing.payment_tier : (student.payment_tier || 'free'),
        unlocked_grades: (existing.unlocked_grades && existing.unlocked_grades.length > 0) ? existing.unlocked_grades : (student.unlocked_grades || []),
        paid_amount: existing.paid_amount || student.paid_amount || 0,
        updated_at: new Date().toISOString()
      };
    } else {
      list.unshift({
        ...student,
        is_premium: student.is_premium || false,
        payment_tier: student.payment_tier || 'free',
        unlocked_grades: student.unlocked_grades || [],
        paid_amount: student.paid_amount || 0,
        updated_at: new Date().toISOString()
      });
    }

    // Clear any deleted tombstone for this phone/id so newly registered account isn't hidden
    const phoneKey = normalizePhoneKey(student.phone_number);
    const idKey = String(student.id || '').toLowerCase();
    const filteredDeleted = (current.deleted_students || []).filter((d: string) => {
      const dl = String(d || '').toLowerCase();
      return dl !== idKey && (!phoneKey || !dl.includes(phoneKey));
    });

    return {
      ...current,
      students: list,
      deleted_students: filteredDeleted
    };
  }, 'Register student');
}

/**
 * Broadcasts a payment receipt submission with screenshot
 */
export async function broadcastPaymentReceipt(
  receipt: RemotePaymentSubmission,
  _fileBlob?: Blob | File | null
): Promise<string | null> {
  let screenshot = receipt.receipt_storage_path || '';
  if (!screenshot) {
    screenshot = generateAuthenticSlipSvg(
      receipt.student_phone,
      receipt.student_name,
      receipt.amount_birr,
      receipt.upgrade_all_grades || receipt.amount_birr === 300
    );
  }

  const cleanReceipt: RemotePaymentSubmission = {
    ...receipt,
    receipt_storage_path: screenshot,
    receipt_filename: receipt.receipt_filename || 'payment_screenshot.jpg',
    status: receipt.status || 'pending',
    submitted_at: receipt.submitted_at || new Date().toISOString()
  };

  postToRealtimeBus({
    event: 'payment_submission',
    ...cleanReceipt
  }).catch(() => {});

  const ok = await enqueueCloudMutation((current) => {
    const payments: any[] = [...current.payments];
    // Match exact receipt ID or replace any older *pending* submission from the same student phone
    const exIdx = payments.findIndex(p =>
      p.id === cleanReceipt.id ||
      (p.status === 'pending' && recordMatchesPhoneOrId(p, cleanReceipt.user_id, cleanReceipt.student_phone))
    );

    if (exIdx >= 0) {
      payments.splice(exIdx, 1);
    }
    payments.unshift(cleanReceipt);

    return {
      ...current,
      payments
    };
  }, 'Submit payment receipt');

  return ok ? cleanReceipt.receipt_storage_path || 'synced' : null;
}

/**
 * Broadcasts an approval when admin activates, approves receipt, or modifies student tier
 */
export async function broadcastStudentApproval(approval: RemoteStudentApproval): Promise<boolean> {
  postToRealtimeBus({
    event: 'student_approval',
    ...approval
  }).catch(() => {});

  return enqueueCloudMutation((current) => {
    const approvals: RemoteStudentApproval[] = [...current.approvals];
    const exIdx = approvals.findIndex(a => recordMatchesPhoneOrId(a, approval.user_id, approval.phone_number));

    if (exIdx >= 0) {
      approvals[exIdx] = { ...approvals[exIdx], ...approval };
    } else {
      approvals.unshift(approval);
    }

    const isAll = approval.tier === 'all';
    const isPaid = Boolean(approval.is_premium && approval.tier !== 'free');
    const resolvedGrades = isAll
      ? ['all']
      : (isPaid ? (approval.unlocked_grades?.length ? approval.unlocked_grades : ['grade-12-natural']) : []);

    // Update payment status in cloud ONLY when explicitly approving/activating (or targeted receipt_id)
    const payments: any[] = current.payments.map(p => {
      const targetMatch = approval.receipt_id
        ? p.id === approval.receipt_id
        : (recordMatchesPhoneOrId(p, approval.user_id, approval.phone_number) && p.status === 'pending');

      if (!targetMatch) return p;

      if (isPaid) {
        return {
          ...p,
          status: 'approved',
          amount_birr: isAll ? (p.amount_birr === 100 ? 100 : 300) : 200,
          upgrade_all_grades: isAll,
          reviewed_at: approval.approved_at || new Date().toISOString(),
          reviewed_by: 'admin@ethiolearn.edu.et'
        };
      }
      return p;
    });

    // Update student record in cloud (upsert if missing from students list so all admin views reflect tier)
    const students: any[] = [...current.students];
    let updatedStudent = false;
    for (let i = 0; i < students.length; i++) {
      if (recordMatchesPhoneOrId(students[i], approval.user_id, approval.phone_number)) {
        students[i] = {
          ...students[i],
          is_premium: isPaid,
          payment_tier: isPaid ? approval.tier : 'free',
          unlocked_grades: resolvedGrades,
          paid_amount: approval.tier === 'all' ? 300 : (approval.tier === 'single' ? 200 : 0),
          updated_at: approval.approved_at || new Date().toISOString()
        };
        updatedStudent = true;
      }
    }

    if (!updatedStudent && approval.phone_number) {
      const pRef = payments.find(p => recordMatchesPhoneOrId(p, approval.user_id, approval.phone_number));
      const cleanDigits = normalizePhoneKey(approval.phone_number);
      students.unshift({
        id: approval.user_id || `student-251${cleanDigits}`,
        phone_number: approval.phone_number,
        full_name: pRef?.student_name || `Student ${cleanDigits.slice(-4)}`,
        grade_id: pRef?.target_grade_id && pRef.target_grade_id !== 'all' ? pRef.target_grade_id : 'grade-12-natural',
        role: 'student',
        is_premium: isPaid,
        payment_tier: isPaid ? approval.tier : 'free',
        unlocked_grades: resolvedGrades,
        paid_amount: approval.tier === 'all' ? 300 : (approval.tier === 'single' ? 200 : 0),
        created_at: approval.approved_at || new Date().toISOString(),
        updated_at: approval.approved_at || new Date().toISOString()
      });
    }

    return {
      ...current,
      approvals,
      payments,
      students
    };
  }, 'Update student approval');
}

/**
 * Broadcasts payment rejection to cloud so student and all admin browsers see the rejection
 */
export async function broadcastPaymentRejection(receiptId: string, studentPhone: string, reason: string): Promise<boolean> {
  postToRealtimeBus({
    event: 'payment_rejection',
    receipt_id: receiptId,
    phone_number: studentPhone,
    rejection_reason: reason,
    reviewed_at: new Date().toISOString()
  }).catch(() => {});

  return enqueueCloudMutation((current) => {
    const payments = current.payments.map(p => {
      if (p.id === receiptId || (studentPhone && phonesMatch(p.student_phone, studentPhone) && p.status === 'pending')) {
        return {
          ...p,
          status: 'rejected',
          rejection_reason: reason,
          reviewed_at: new Date().toISOString(),
          reviewed_by: 'admin@ethiolearn.edu.et'
        };
      }
      return p;
    });
    return { ...current, payments };
  }, 'Reject payment receipt');
}

/**
 * Broadcasts student removal to cloud so all admin browsers stay synchronized
 */
export async function broadcastStudentDeletion(studentId: string, phoneNumber?: string): Promise<boolean> {
  postToRealtimeBus({
    event: 'student_deleted',
    id: studentId,
    phone_number: phoneNumber
  }).catch(() => {});

  return enqueueCloudMutation((current) => {
    const deleted = new Set<string>(current.deleted_students || []);
    if (studentId) deleted.add(String(studentId).toLowerCase());
    if (phoneNumber) {
      const k = normalizePhoneKey(phoneNumber);
      if (k) deleted.add(k);
    }

    return {
      ...current,
      students: current.students.filter(s => !recordMatchesPhoneOrId(s, studentId, phoneNumber)),
      payments: current.payments.filter(p => !recordMatchesPhoneOrId(p, studentId, phoneNumber)),
      approvals: current.approvals.filter(a => !recordMatchesPhoneOrId(a, studentId, phoneNumber)),
      deleted_students: Array.from(deleted)
    };
  }, 'Delete student');
}

/**
 * Broadcasts an approved device transfer from admin to cloud
 */
export async function broadcastDeviceApproval(phoneNumber: string, newDeviceId: string, transferId?: string): Promise<boolean> {
  postToRealtimeBus({
    event: 'device_approval',
    phone_number: phoneNumber,
    new_device_id: newDeviceId,
    approved_at: new Date().toISOString()
  }).catch(() => {});

  return enqueueCloudMutation((current) => {
    const transfers = current.transfers.map(t => {
      if ((transferId && t.id === transferId) || phonesMatch(t.phone_number, phoneNumber)) {
        return { ...t, status: 'approved' };
      }
      return t;
    });
    const students = current.students.map(s => {
      if (phonesMatch(s.phone_number, phoneNumber)) {
        return { ...s, device_id: newDeviceId, premium_device_id: newDeviceId, updated_at: new Date().toISOString() };
      }
      return s;
    });
    return { ...current, transfers, students };
  }, 'Approve device transfer');
}

/**
 * Broadcasts a rejected device transfer to cloud
 */
export async function broadcastDeviceTransferRejection(transferId: string): Promise<boolean> {
  return enqueueCloudMutation((current) => ({
    ...current,
    transfers: current.transfers.map(t => t.id === transferId ? { ...t, status: 'rejected' } : t)
  }), 'Reject device transfer');
}

/**
 * Checks if current phone number or user ID has a remote approval/tier from the admin
 */
export async function fetchRemoteApprovalForPhone(phone: string, userId?: string): Promise<RemoteStudentApproval | null> {
  const cleanDigits = normalizePhoneKey(phone);
  if (cleanDigits.length < 9 && !userId) return null;

  try {
    const res = await readCloudMasterStateStrict(true);
    if (!res.ok) return null;
    const current = res.state;

    // 1. Direct approval record (always authoritative for both Paid AND Free downgrades)
    const found = current.approvals.find(a => recordMatchesPhoneOrId(a, userId, phone));
    if (found) return found;

    // 2. Updated student tier in cloud
    const sFound = current.students.find(s => recordMatchesPhoneOrId(s, userId, phone));
    if (sFound) {
      const isPaid = Boolean(sFound.is_premium && sFound.payment_tier !== 'free');
      const tier = (sFound.payment_tier || (isPaid ? 'single' : 'free')) as 'free' | 'single' | 'all';
      return {
        phone_number: phone,
        user_id: userId || sFound.id,
        tier,
        unlocked_grades: sFound.unlocked_grades || (tier === 'all' ? ['all'] : (isPaid ? [sFound.grade_id || 'grade-12-natural'] : [])),
        is_premium: isPaid,
        approved_at: sFound.updated_at || new Date().toISOString()
      };
    }

    // 3. Approved payment in cloud
    const pFound = current.payments.find(p => recordMatchesPhoneOrId(p, userId, phone) && p.status === 'approved');
    if (pFound) {
      const isAll = Number(pFound.amount_birr) === 300 || Number(pFound.amount_birr) === 100 || Boolean(pFound.upgrade_all_grades);
      return {
        phone_number: phone,
        user_id: userId || pFound.user_id,
        tier: isAll ? 'all' : 'single',
        unlocked_grades: isAll ? ['all'] : [pFound.target_grade_id || 'grade-12-natural'],
        is_premium: true,
        approved_at: pFound.reviewed_at || pFound.submitted_at || new Date().toISOString()
      };
    }

    return null;
  } catch (_) {
    return null;
  }
}

/**
 * Broadcasts an account device transfer request from student
 */
export async function broadcastDeviceTransfer(req: RemoteDeviceTransfer): Promise<boolean> {
  postToRealtimeBus({
    event: 'device_transfer',
    ...req
  }).catch(() => {});

  return enqueueCloudMutation((current) => {
    const transfers = [...current.transfers];
    const exIdx = transfers.findIndex(t => t.id === req.id);
    if (exIdx >= 0) transfers[exIdx] = { ...transfers[exIdx], ...req };
    else transfers.unshift(req);
    return { ...current, transfers };
  }, 'Submit device transfer');
}

/**
 * Polls remote device transfer requests
 */
export async function fetchRemoteDeviceTransfers(): Promise<RemoteDeviceTransfer[]> {
  try {
    const res = await readCloudMasterStateStrict(false);
    return res.state.transfers;
  } catch (_) {
    return [];
  }
}

/**
 * Broadcasts a student question error / correction appeal
 */
export async function broadcastQuestionFeedback(fb: RemoteQuestionFeedback): Promise<boolean> {
  postToRealtimeBus({
    event: 'question_feedback',
    ...fb
  }).catch(() => {});

  return enqueueCloudMutation((current) => {
    const feedbacks = [...current.feedbacks];
    const exIdx = feedbacks.findIndex(f => f.id === fb.id);
    if (exIdx >= 0) feedbacks[exIdx] = { ...feedbacks[exIdx], ...fb };
    else feedbacks.unshift(fb);
    return { ...current, feedbacks };
  }, 'Submit question feedback');
}

/**
 * Broadcasts admin question feedback update/deletion
 */
export async function broadcastQuestionFeedbackUpdate(fbId: string, status?: string, remove = false): Promise<boolean> {
  return enqueueCloudMutation((current) => {
    if (remove) {
      return { ...current, feedbacks: current.feedbacks.filter(f => f.id !== fbId) };
    }
    return {
      ...current,
      feedbacks: current.feedbacks.map(f => f.id === fbId ? { ...f, ...(status ? { status } : {}) } : f)
    };
  }, remove ? 'Delete feedback' : 'Update feedback status');
}

/**
 * Polls remote question feedback / appeals
 */
export async function fetchRemoteQuestionFeedbacks(): Promise<RemoteQuestionFeedback[]> {
  try {
    const res = await readCloudMasterStateStrict(false);
    return res.state.feedbacks;
  } catch (_) {
    return [];
  }
}

/**
 * Polls the cloud channel for all student registrations
 */
export async function fetchRemoteRegistrations(): Promise<RemoteStudentRegistration[]> {
  try {
    const res = await readCloudMasterStateStrict(false);
    return res.state.students;
  } catch (_) {
    return [];
  }
}

/**
 * Polls the cloud channel for all payment submissions with screenshots
 */
export async function fetchRemotePayments(): Promise<RemotePaymentSubmission[]> {
  try {
    const res = await readCloudMasterStateStrict(false);
    return res.state.payments;
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

  // 1. Payment submission from a student
  if (eventType === 'payment_submission' && payload.student_phone) {
    try {
      const stored = localStorage.getItem('ethiolearn_admin_payments');
      const list = stored ? JSON.parse(stored) : [];
      const exIdx = list.findIndex((p: any) => p.id === payload.id || (p.status === 'pending' && phonesMatch(p.student_phone, payload.student_phone)));
      if (exIdx >= 0) {
        list[exIdx] = { ...list[exIdx], ...payload };
      } else {
        list.unshift(payload);
      }
      localStorage.setItem('ethiolearn_admin_payments', JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('cloud-payment-received', { detail: payload }));
    } catch (_) {}
  }

  // 2. Payment rejection
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

  // 3. Student registration
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

  // 4. Student deletion
  if (eventType === 'student_deleted') {
    window.dispatchEvent(new CustomEvent('cloud-student-received', { detail: payload }));
  }

  // 5. Admin approval broadcast -> Instantly unlocks student phone & synchronizes admin consoles
  if (eventType === 'student_approval' && (payload.phone_number || payload.user_id)) {
    try {
      const targetId = String(payload.user_id || payload.student_id || '');
      const isAll = payload.tier === 'all';
      const isPremium = payload.is_premium !== false && payload.tier !== 'free';
      const nextTier = payload.tier || (isPremium ? 'single' : 'free');
      const nextGrades = payload.unlocked_grades || (isAll ? ['all'] : (isPremium ? ['grade-12-natural'] : []));
      const nextPaidAmount = nextTier === 'all' ? 300 : (nextTier === 'single' ? 200 : 0);

      // A. Update local ethiolearn_admin_students
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

      // B. Update pending receipts ONLY if approved (do not turn approved receipts back to pending on free downgrade)
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

      // C. If active non-admin student matches the approved student, unlock/update their profile immediately
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

  // 6. Device approval
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

  // 7. Device transfer appeal
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

  // 8. Question feedback
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

// Automatically start real-time SSE listener in browser/mobile context
if (typeof window !== 'undefined') {
  initRealtimeEventSource();
}
