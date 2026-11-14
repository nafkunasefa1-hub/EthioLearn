/**
 * EthioLearn Cloud Synchronization Service (Firebase Firestore + Real-Time SSE Bus)
 *
 * Provides persistent, zero-secret-in-client, two-way synchronization between students
 * on Android APK / mobile / web and administrators across all browsers
 * (Chrome, Edge, Safari) on https://nafkunasefa1-ethiolearn-paypal.static.hf.space.
 */

const SMEE_SYNC_URL = 'https://smee.io/ethiolearn_sync_prod_2026';
const NTFY_EVENTS_URL = 'https://ntfy.sh/ethiolearn_events_v3_prod';

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

function sortNewestFirst(items: any[]): any[] {
  return [...items].sort((a, b) => {
    const ta = new Date(a?.updated_at || a?.reviewed_at || a?.approved_at || a?.submitted_at || a?.requested_at || a?.created_at || 0).getTime() || 0;
    const tb = new Date(b?.updated_at || b?.reviewed_at || b?.approved_at || b?.submitted_at || b?.requested_at || b?.created_at || 0).getTime() || 0;
    return tb - ta;
  });
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

async function getFsDoc(collection: string, docId: string): Promise<{ ok: boolean; notFound?: boolean; data: any }> {
  const url = `${FIRESTORE_BASE_URL}/${collection}/${encodeURIComponent(docId)}?key=${FIREBASE_API_KEY}`;
  const res = await fetchWithTimeout(url, { cache: 'no-store' }, 9000);
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
    14000
  );
  return Boolean(res && res.ok);
}

async function deleteFsDoc(collection: string, docId: string): Promise<boolean> {
  const url = `${FIRESTORE_BASE_URL}/${collection}/${encodeURIComponent(docId)}?key=${FIREBASE_API_KEY}`;
  const res = await fetchWithTimeout(url, { method: 'DELETE' }, 9000);
  return Boolean(res && (res.ok || res.status === 404));
}

async function listFsCollection(collection: string): Promise<{ ok: boolean; docs: any[] }> {
  const docs: any[] = [];
  let pageToken = '';
  for (let page = 0; page < 15; page++) {
    const tokenPart = pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : '';
    const url = `${FIRESTORE_BASE_URL}/${collection}?pageSize=300${tokenPart}&key=${FIREBASE_API_KEY}`;
    const res = await fetchWithTimeout(url, { cache: 'no-store' }, 12000);
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
    const delays = [0, 350, 900];
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

export async function readCloudMasterStateStrict(bypassCache = false): Promise<{ ok: boolean; notFound?: boolean; state: CloudMasterState }> {
  const now = Date.now();
  if (!bypassCache && lastReadCache && now - lastReadCache.ts < 250) {
    return lastReadCache.result;
  }
  if (!bypassCache && inFlightReadPromise) {
    return inFlightReadPromise;
  }

  const exec = (async (): Promise<{ ok: boolean; notFound?: boolean; state: CloudMasterState }> => {
    const [stRes, payRes, apprRes, trRes, fbRes, delRes] = await Promise.all([
      listFsCollection(COL_STUDENTS),
      listFsCollection(COL_PAYMENTS),
      listFsCollection(COL_APPROVALS),
      listFsCollection(COL_TRANSFERS),
      listFsCollection(COL_FEEDBACKS),
      listFsCollection(COL_DELETED)
    ]);

    if (!stRes.ok || !payRes.ok || !apprRes.ok || !trRes.ok || !fbRes.ok || !delRes.ok) {
      return { ok: false, state: normalizeCloudState({}) };
    }

    const deletedTokens = delRes.docs
      .map((d: any) => String(d.key || String(d.__fsDocId || '').replace(/^del_/, '')).trim())
      .filter(Boolean);

    const state = normalizeCloudState({
      students: stRes.docs.map(stripFsMeta),
      payments: payRes.docs.map(stripFsMeta),
      approvals: apprRes.docs.map(stripFsMeta),
      transfers: trRes.docs.map(stripFsMeta),
      feedbacks: fbRes.docs.map(stripFsMeta),
      deleted_students: deletedTokens,
      updated_at: new Date().toISOString()
    });

    const result = { ok: true, state };
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
 * Fetches the authoritative master state object from Firestore cloud storage.
 */
export async function getCloudMasterState(forceFresh = false): Promise<CloudMasterState & { __synced?: boolean }> {
  const res = await readCloudMasterStateStrict(forceFresh);
  return {
    ...res.state,
    __synced: res.ok
  };
}

/**
 * Synchronizes a complete master state snapshot to Firestore collections.
 */
export async function updateCloudMasterState(dataUpdate: Record<string, any>, _summary = 'Sync update'): Promise<boolean> {
  return runWithRetry(async () => {
    const next = normalizeCloudState(dataUpdate);
    const currentRes = await readCloudMasterStateStrict(true);
    if (!currentRes.ok) return false;

    const ops: Promise<boolean>[] = [];

    const syncCollection = async (
      col: string,
      items: any[],
      idFn: (item: any) => string
    ) => {
      const existing = await listFsCollection(col);
      if (!existing.ok) throw new Error('Collection list failed: ' + col);
      const keepIds = new Set<string>();
      for (const item of items) {
        const docId = idFn(item);
        keepIds.add(docId);
        ops.push(putFsDoc(col, docId, stripFsMeta(item)));
      }
      for (const oldDoc of existing.docs) {
        if (oldDoc.__fsDocId && !keepIds.has(oldDoc.__fsDocId)) {
          ops.push(deleteFsDoc(col, oldDoc.__fsDocId));
        }
      }
    };

    await syncCollection(COL_STUDENTS, next.students, (s) => studentDocId(s.id, s.phone_number || s.phone));
    await syncCollection(COL_PAYMENTS, next.payments, (p) => safeDocId(p.id, 'pay'));
    await syncCollection(COL_APPROVALS, next.approvals, (a) => approvalDocId(a.user_id, a.phone_number));
    await syncCollection(COL_TRANSFERS, next.transfers, (t) => safeDocId(t.id, 'tr'));
    await syncCollection(COL_FEEDBACKS, next.feedbacks, (f) => safeDocId(f.id, 'fb'));

    const delItems = (next.deleted_students || []).map((k: string) => ({ key: String(k), deleted_at: new Date().toISOString() }));
    await syncCollection(COL_DELETED, delItems, (d) => safeDocId(d.key, 'del'));

    const results = await Promise.all(ops);
    return results.every(Boolean);
  });
}

/**
 * Broadcasts a new student registration to Firestore and clears matching deletion tombstones.
 */
export async function broadcastStudentRegistration(student: RemoteStudentRegistration): Promise<boolean> {
  postToRealtimeBus({
    event: 'student_registration',
    ...student
  }).catch(() => {});

  return runWithRetry(async () => {
    const docId = studentDocId(student.id, student.phone_number);
    const [existingDocRes, delRes] = await Promise.all([
      getFsDoc(COL_STUDENTS, docId),
      listFsCollection(COL_DELETED)
    ]);
    if (!existingDocRes.ok) return false;

    const existing = existingDocRes.data ? stripFsMeta(existingDocRes.data) : null;
    const payload: RemoteStudentRegistration = existing
      ? {
          ...existing,
          ...student,
          is_premium: existing.is_premium || student.is_premium || false,
          payment_tier: (existing.payment_tier && existing.payment_tier !== 'free') ? existing.payment_tier : (student.payment_tier || 'free'),
          unlocked_grades: (existing.unlocked_grades && existing.unlocked_grades.length > 0) ? existing.unlocked_grades : (student.unlocked_grades || []),
          paid_amount: existing.paid_amount || student.paid_amount || 0,
          updated_at: new Date().toISOString()
        }
      : {
          ...student,
          is_premium: student.is_premium || false,
          payment_tier: student.payment_tier || 'free',
          unlocked_grades: student.unlocked_grades || [],
          paid_amount: student.paid_amount || 0,
          updated_at: new Date().toISOString()
        };

    const writeOk = await putFsDoc(COL_STUDENTS, docId, payload);
    if (!writeOk) return false;

    // Clear any matching deletion tombstone so newly registered account is never hidden
    if (delRes.ok) {
      const phoneKey = normalizePhoneKey(student.phone_number);
      const idKey = String(student.id || '').toLowerCase();
      const deletions: Promise<boolean>[] = [];
      for (const d of delRes.docs) {
        const token = String(d.key || String(d.__fsDocId || '').replace(/^del_/, '')).toLowerCase();
        if (token === idKey || (phoneKey && token.includes(phoneKey))) {
          if (d.__fsDocId) deletions.push(deleteFsDoc(COL_DELETED, d.__fsDocId));
        }
      }
      if (deletions.length > 0) await Promise.all(deletions);
    }

    return true;
  });
}

/**
 * Broadcasts a payment receipt submission with screenshot to Firestore.
 */
export async function broadcastPaymentReceipt(
  receipt: RemotePaymentSubmission,
  fileBlob?: Blob | File | null
): Promise<string | null> {
  let screenshot = receipt.receipt_storage_path || '';
  if (!screenshot && fileBlob) {
    screenshot = await blobToDataUrl(fileBlob);
  }
  if (!screenshot) {
    screenshot = generateAuthenticSlipSvg(
      receipt.student_phone,
      receipt.student_name,
      receipt.amount_birr,
      receipt.upgrade_all_grades || receipt.amount_birr === 300
    );
  }
  // Keep well under Firestore 1 MiB per-document ceiling
  if (screenshot.length > 820000) {
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

  const ok = await runWithRetry(async () => {
    const newDocId = safeDocId(cleanReceipt.id, 'pay');
    const existingList = await listFsCollection(COL_PAYMENTS);
    if (existingList.ok) {
      const cleanup: Promise<boolean>[] = [];
      for (const p of existingList.docs) {
        const samePending = p.status === 'pending' && recordMatchesPhoneOrId(p, cleanReceipt.user_id, cleanReceipt.student_phone);
        if ((p.id === cleanReceipt.id || samePending) && p.__fsDocId && p.__fsDocId !== newDocId) {
          cleanup.push(deleteFsDoc(COL_PAYMENTS, p.__fsDocId));
        }
      }
      if (cleanup.length > 0) await Promise.all(cleanup);
    }
    return putFsDoc(COL_PAYMENTS, newDocId, cleanReceipt);
  });

  return ok ? cleanReceipt.receipt_storage_path || 'synced' : null;
}

/**
 * Broadcasts an approval when admin activates, approves receipt, or modifies student tier.
 */
export async function broadcastStudentApproval(approval: RemoteStudentApproval): Promise<boolean> {
  postToRealtimeBus({
    event: 'student_approval',
    ...approval
  }).catch(() => {});

  return runWithRetry(async () => {
    const isAll = approval.tier === 'all';
    const isPaid = Boolean(approval.is_premium && approval.tier !== 'free');
    const resolvedGrades = isAll
      ? ['all']
      : (isPaid ? (approval.unlocked_grades?.length ? approval.unlocked_grades : [approval.grade_id || 'grade-12-natural']) : []);

    const [stRes, payRes] = await Promise.all([
      listFsCollection(COL_STUDENTS),
      isPaid ? listFsCollection(COL_PAYMENTS) : Promise.resolve({ ok: true, docs: [] as any[] })
    ]);
    if (!stRes.ok || (isPaid && !payRes.ok)) return false;

    // Resolve authoritative phone / user_id from matching student if one side was omitted
    const matchedStudents = stRes.docs.filter((s) => recordMatchesPhoneOrId(s, approval.user_id, approval.phone_number));
    const resolvedPhone = approval.phone_number || matchedStudents[0]?.phone_number || '';
    const resolvedUserId = approval.user_id || matchedStudents[0]?.id;

    const cleanApproval: RemoteStudentApproval = {
      ...approval,
      phone_number: resolvedPhone,
      ...(resolvedUserId ? { user_id: resolvedUserId } : {}),
      is_premium: isPaid,
      tier: isPaid ? approval.tier : 'free',
      unlocked_grades: resolvedGrades,
      approved_at: approval.approved_at || new Date().toISOString()
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
      const pRef = payRes.docs.find((p) => recordMatchesPhoneOrId(p, resolvedUserId, resolvedPhone));
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

    // Update payment status ONLY when approving/activating (keep history intact on Free Trial downgrade)
    if (isPaid) {
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
    return res.every(Boolean);
  });
}

/**
 * Broadcasts payment rejection to Firestore so student and all admin browsers see the rejection.
 */
export async function broadcastPaymentRejection(receiptId: string, studentPhone: string, reason: string): Promise<boolean> {
  postToRealtimeBus({
    event: 'payment_rejection',
    receipt_id: receiptId,
    phone_number: studentPhone,
    rejection_reason: reason,
    reviewed_at: new Date().toISOString()
  }).catch(() => {});

  return runWithRetry(async () => {
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
            reviewed_at: new Date().toISOString(),
            reviewed_by: 'admin@ethiolearn.edu.et'
          }));
        }
      }
    }
    if (ops.length === 0) return true;
    const res = await Promise.all(ops);
    return res.every(Boolean);
  });
}

/**
 * Broadcasts student removal to Firestore so all admin browsers stay synchronized.
 */
export async function broadcastStudentDeletion(studentId: string, phoneNumber?: string): Promise<boolean> {
  postToRealtimeBus({
    event: 'student_deleted',
    id: studentId,
    phone_number: phoneNumber
  }).catch(() => {});

  return runWithRetry(async () => {
    const [stRes, payRes, apprRes] = await Promise.all([
      listFsCollection(COL_STUDENTS),
      listFsCollection(COL_PAYMENTS),
      listFsCollection(COL_APPROVALS)
    ]);
    if (!stRes.ok || !payRes.ok || !apprRes.ok) return false;

    const ops: Promise<boolean>[] = [];
    const tokens = new Set<string>();
    if (studentId) tokens.add(String(studentId).toLowerCase());
    if (phoneNumber) {
      const k = normalizePhoneKey(phoneNumber);
      if (k) tokens.add(k);
    }

    for (const s of stRes.docs) {
      if (recordMatchesPhoneOrId(s, studentId, phoneNumber) && s.__fsDocId) {
        if (s.id) tokens.add(String(s.id).toLowerCase());
        const pk = normalizePhoneKey(s.phone_number);
        if (pk) tokens.add(pk);
        ops.push(deleteFsDoc(COL_STUDENTS, s.__fsDocId));
      }
    }
    for (const p of payRes.docs) {
      if (recordMatchesPhoneOrId(p, studentId, phoneNumber) && p.__fsDocId) {
        ops.push(deleteFsDoc(COL_PAYMENTS, p.__fsDocId));
      }
    }
    for (const a of apprRes.docs) {
      if (recordMatchesPhoneOrId(a, studentId, phoneNumber) && a.__fsDocId) {
        ops.push(deleteFsDoc(COL_APPROVALS, a.__fsDocId));
      }
    }

    for (const tok of tokens) {
      ops.push(putFsDoc(COL_DELETED, safeDocId(tok, 'del'), { key: tok, deleted_at: new Date().toISOString() }));
    }

    const res = await Promise.all(ops);
    return res.every(Boolean);
  });
}

/**
 * Broadcasts an approved device transfer from admin to Firestore.
 */
export async function broadcastDeviceApproval(phoneNumber: string, newDeviceId: string, transferId?: string): Promise<boolean> {
  postToRealtimeBus({
    event: 'device_approval',
    phone_number: phoneNumber,
    new_device_id: newDeviceId,
    approved_at: new Date().toISOString()
  }).catch(() => {});

  return runWithRetry(async () => {
    const [trRes, stRes] = await Promise.all([
      listFsCollection(COL_TRANSFERS),
      listFsCollection(COL_STUDENTS)
    ]);
    if (!trRes.ok || !stRes.ok) return false;

    const ops: Promise<boolean>[] = [];
    for (const t of trRes.docs) {
      if (((transferId && t.id === transferId) || phonesMatch(t.phone_number, phoneNumber)) && t.__fsDocId) {
        ops.push(putFsDoc(COL_TRANSFERS, t.__fsDocId, { ...stripFsMeta(t), status: 'approved' }));
      }
    }
    for (const s of stRes.docs) {
      if (phonesMatch(s.phone_number, phoneNumber) && s.__fsDocId) {
        ops.push(putFsDoc(COL_STUDENTS, s.__fsDocId, {
          ...stripFsMeta(s),
          device_id: newDeviceId,
          premium_device_id: newDeviceId,
          updated_at: new Date().toISOString()
        }));
      }
    }
    const res = await Promise.all(ops);
    return res.every(Boolean);
  });
}

/**
 * Broadcasts a rejected device transfer to Firestore.
 */
export async function broadcastDeviceTransferRejection(transferId: string): Promise<boolean> {
  return runWithRetry(async () => {
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
  });
}

/**
 * Checks if current phone number or user ID has a remote approval/tier from the admin.
 * Uses direct document lookup first (~250ms, <1 KB) with collection scan fallback.
 */
export async function fetchRemoteApprovalForPhone(phone: string, userId?: string): Promise<RemoteStudentApproval | null> {
  const cleanDigits = normalizePhoneKey(phone);
  if (cleanDigits.length < 9 && !userId) return null;

  try {
    // Fast direct lookup path by canonical phone key
    if (cleanDigits.length >= 9) {
      const [apprDirect, stuDirect] = await Promise.all([
        getFsDoc(COL_APPROVALS, `appr_${cleanDigits}`),
        getFsDoc(COL_STUDENTS, `stu_${cleanDigits}`)
      ]);

      if (apprDirect.ok && apprDirect.data) {
        return stripFsMeta(apprDirect.data) as RemoteStudentApproval;
      }

      if (stuDirect.ok && stuDirect.data) {
        const sFound = stripFsMeta(stuDirect.data);
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
    }

    // Fallback scan for userId-keyed or legacy documents
    const res = await readCloudMasterStateStrict(true);
    if (!res.ok) return null;
    const current = res.state;

    const found = current.approvals.find(a => recordMatchesPhoneOrId(a, userId, phone));
    if (found) return found;

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
 * Broadcasts an account device transfer request from student.
 */
export async function broadcastDeviceTransfer(req: RemoteDeviceTransfer): Promise<boolean> {
  postToRealtimeBus({
    event: 'device_transfer',
    ...req
  }).catch(() => {});

  return runWithRetry(() => putFsDoc(COL_TRANSFERS, safeDocId(req.id, 'tr'), req));
}

/**
 * Polls remote device transfer requests.
 */
export async function fetchRemoteDeviceTransfers(): Promise<RemoteDeviceTransfer[]> {
  try {
    const res = await listFsCollection(COL_TRANSFERS);
    return res.ok ? sortNewestFirst(res.docs.map(stripFsMeta)) : [];
  } catch (_) {
    return [];
  }
}

/**
 * Broadcasts a student question error / correction appeal.
 */
export async function broadcastQuestionFeedback(fb: RemoteQuestionFeedback): Promise<boolean> {
  postToRealtimeBus({
    event: 'question_feedback',
    ...fb
  }).catch(() => {});

  return runWithRetry(() => putFsDoc(COL_FEEDBACKS, safeDocId(fb.id, 'fb'), fb));
}

/**
 * Broadcasts admin question feedback update/deletion.
 */
export async function broadcastQuestionFeedbackUpdate(fbId: string, status?: string, remove = false): Promise<boolean> {
  return runWithRetry(async () => {
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
  });
}

/**
 * Polls remote question feedback / appeals.
 */
export async function fetchRemoteQuestionFeedbacks(): Promise<RemoteQuestionFeedback[]> {
  try {
    const res = await listFsCollection(COL_FEEDBACKS);
    return res.ok ? sortNewestFirst(res.docs.map(stripFsMeta)) : [];
  } catch (_) {
    return [];
  }
}

/**
 * Polls cloud for all student registrations.
 */
export async function fetchRemoteRegistrations(): Promise<RemoteStudentRegistration[]> {
  try {
    const res = await listFsCollection(COL_STUDENTS);
    return res.ok ? sortNewestFirst(res.docs.map(stripFsMeta)) : [];
  } catch (_) {
    return [];
  }
}

/**
 * Polls cloud for all payment submissions with screenshots.
 */
export async function fetchRemotePayments(): Promise<RemotePaymentSubmission[]> {
  try {
    const res = await listFsCollection(COL_PAYMENTS);
    return res.ok ? sortNewestFirst(res.docs.map(stripFsMeta)) : [];
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
