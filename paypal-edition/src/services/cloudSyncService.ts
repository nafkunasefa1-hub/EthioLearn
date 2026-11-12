/**
 * EthioLearn Cloud Synchronization Service
 * 
 * Provides cross-device synchronization between students on mobile/web 
 * and the administrator on https://nafkunasefa1-ethiolearn-paypal.static.hf.space.
 * Uses public CORS-enabled HTTPS pub/sub with file attachment persistence.
 */

const TOPIC_REGISTRATIONS = 'ethiolearn_registrations_prod_2026';
const TOPIC_PAYMENTS = 'ethiolearn_payments_prod_2026';
const TOPIC_APPROVALS = 'ethiolearn_approvals_prod_2026';

export interface RemoteStudentRegistration {
  id: string;
  phone_number: string;
  full_name: string;
  grade?: string;
  grade_id?: string;
  device_id?: string;
  created_at: string;
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
  submitted_at: string;
}

export interface RemoteStudentApproval {
  phone_number: string;
  tier: 'single' | 'all' | 'free';
  unlocked_grades: string[];
  is_premium: boolean;
  approved_at: string;
}

/**
 * Broadcasts a new student registration to the cloud channel
 */
export async function broadcastStudentRegistration(student: RemoteStudentRegistration): Promise<boolean> {
  try {
    const res = await fetch(`https://ntfy.sh/${TOPIC_REGISTRATIONS}`, {
      method: 'POST',
      headers: {
        'Title': `New Student: ${student.phone_number}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    });
    return res.ok;
  } catch (e) {
    console.warn('[CloudSync] Broadcast registration failed (offline):', e);
    return false;
  }
}

/**
 * Broadcasts a payment receipt submission with optional screenshot file attachment
 */
export async function broadcastPaymentReceipt(
  receipt: RemotePaymentSubmission, 
  fileBlob?: Blob | File | null
): Promise<string | null> {
  try {
    const encodedMeta = encodeURIComponent(JSON.stringify(receipt));
    const filename = receipt.receipt_filename || (fileBlob instanceof File ? fileBlob.name : 'payment_screenshot.png');

    const headers: Record<string, string> = {
      'Title': `Payment: ${receipt.student_phone} (${receipt.amount_birr} ETB)`,
      'X-Message': encodedMeta,
      'Filename': filename
    };

    let bodyData: any = null;
    if (fileBlob) {
      bodyData = fileBlob;
      headers['Content-Type'] = fileBlob.type || 'image/png';
    } else if (receipt.receipt_storage_path && receipt.receipt_storage_path.startsWith('data:image/')) {
      // Convert Data URL to blob
      const res = await fetch(receipt.receipt_storage_path);
      bodyData = await res.blob();
      headers['Content-Type'] = bodyData.type || 'image/png';
    } else {
      headers['Content-Type'] = 'text/plain';
      bodyData = `Payment submission for ${receipt.student_phone} (${receipt.amount_birr} ETB)`;
    }

    const res = await fetch(`https://ntfy.sh/${TOPIC_PAYMENTS}`, {
      method: 'POST',
      headers,
      body: bodyData
    });

    if (res.ok) {
      const data = await res.json().catch(() => null);
      if (data?.attachment?.url) {
        return data.attachment.url;
      }
    }
    return null;
  } catch (e) {
    console.warn('[CloudSync] Broadcast payment failed (offline):', e);
    return null;
  }
}

/**
 * Polls the cloud channel for all student registrations
 */
export async function fetchRemoteRegistrations(): Promise<RemoteStudentRegistration[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`https://ntfy.sh/${TOPIC_REGISTRATIONS}/json?poll=1&since=all`, {
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!res.ok) return [];
    const text = await res.text();
    const lines = text.trim().split('\n').filter(Boolean);
    const students: RemoteStudentRegistration[] = [];

    for (const line of lines) {
      try {
        const item = JSON.parse(line);
        if (item && item.message) {
          const parsed = JSON.parse(item.message);
          if (parsed && (parsed.phone_number || parsed.phone)) {
            students.push({
              id: parsed.id || `usr-student-${String(parsed.phone_number || parsed.phone).replace(/[^\d]/g, '').slice(-9)}`,
              phone_number: parsed.phone_number || parsed.phone,
              full_name: parsed.full_name || parsed.name || 'Registered Student',
              grade: parsed.grade || 'Grade 12 - Natural Science',
              grade_id: parsed.grade_id || 'grade-12-natural',
              device_id: parsed.device_id,
              created_at: parsed.created_at || new Date().toISOString()
            });
          }
        }
      } catch (_) {}
    }

    return students;
  } catch (e) {
    return [];
  }
}

/**
 * Polls the cloud channel for all payment submissions with screenshots
 */
export async function fetchRemotePayments(): Promise<RemotePaymentSubmission[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`https://ntfy.sh/${TOPIC_PAYMENTS}/json?poll=1&since=all`, {
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!res.ok) return [];
    const text = await res.text();
    const lines = text.trim().split('\n').filter(Boolean);
    const payments: RemotePaymentSubmission[] = [];

    for (const line of lines) {
      try {
        const item = JSON.parse(line);
        if (item && (item.event === 'message' || item.event === 'attachment')) {
          let meta: any = null;
          if (item.message) {
            try {
              meta = JSON.parse(decodeURIComponent(item.message));
            } catch {
              try { meta = JSON.parse(item.message); } catch {}
            }
          }
          if (meta && (meta.student_phone || meta.phone)) {
            const p: RemotePaymentSubmission = {
              id: meta.id || `rcpt-cloud-${item.id || Date.now()}`,
              user_id: meta.user_id,
              student_phone: meta.student_phone || meta.phone,
              student_name: meta.student_name || meta.name || 'Student',
              student_email: meta.student_email,
              amount_birr: Number(meta.amount_birr) || 200,
              target_grade_id: meta.target_grade_id || 'grade-12-natural',
              upgrade_all_grades: Boolean(meta.upgrade_all_grades),
              receipt_storage_path: item.attachment?.url || meta.receipt_storage_path || '',
              receipt_filename: item.attachment?.name || meta.receipt_filename || 'payment_screenshot.png',
              status: meta.status || 'pending',
              submitted_at: meta.submitted_at || new Date().toISOString()
            };
            payments.push(p);
          }
        }
      } catch (_) {}
    }

    return payments;
  } catch (e) {
    return [];
  }
}

/**
 * Broadcasts an approval when admin activates or modifies student tier
 */
export async function broadcastStudentApproval(approval: RemoteStudentApproval): Promise<boolean> {
  try {
    const res = await fetch(`https://ntfy.sh/${TOPIC_APPROVALS}`, {
      method: 'POST',
      headers: {
        'Title': `Approval: ${approval.phone_number}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(approval)
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}

/**
 * Checks if current phone number has a remote approval from the admin
 */
export async function fetchRemoteApprovalForPhone(phone: string): Promise<RemoteStudentApproval | null> {
  try {
    const cleanDigits = phone.replace(/[^\d]/g, '');
    if (cleanDigits.length < 9) return null;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`https://ntfy.sh/${TOPIC_APPROVALS}/json?poll=1&since=all`, {
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!res.ok) return null;
    const text = await res.text();
    const lines = text.trim().split('\n').filter(Boolean);

    let latestApproval: RemoteStudentApproval | null = null;
    for (const line of lines) {
      try {
        const item = JSON.parse(line);
        if (item && item.message) {
          const app = JSON.parse(item.message) as RemoteStudentApproval;
          if (app && app.phone_number) {
            const appDigits = app.phone_number.replace(/[^\d]/g, '');
            if (appDigits.includes(cleanDigits.slice(-9)) || cleanDigits.includes(appDigits.slice(-9))) {
              latestApproval = app;
            }
          }
        }
      } catch (_) {}
    }

    return latestApproval;
  } catch (e) {
    return null;
  }
}
