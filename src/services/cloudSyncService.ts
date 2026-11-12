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
const TOPIC_TRANSFERS = 'ethiolearn_transfers_prod_2026';
const TOPIC_FEEDBACKS = 'ethiolearn_feedbacks_prod_2026';

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
/**
 * Broadcasts a payment receipt submission with optional screenshot file attachment
 */
export async function broadcastPaymentReceipt(
  receipt: RemotePaymentSubmission, 
  fileBlob?: Blob | File | null
): Promise<string | null> {
  try {
    // CRITICAL: NEVER place massive base64 data URLs in query parameters!
    // Query parameters must be lightweight JSON metadata.
    const cleanMeta: Record<string, any> = {
      id: receipt.id,
      user_id: receipt.user_id,
      student_phone: receipt.student_phone,
      student_name: receipt.student_name,
      student_email: receipt.student_email,
      amount_birr: receipt.amount_birr,
      target_grade_id: receipt.target_grade_id,
      upgrade_all_grades: receipt.upgrade_all_grades,
      receipt_filename: receipt.receipt_filename || (fileBlob instanceof File ? fileBlob.name : 'cbe_slip.png'),
      status: receipt.status || 'pending',
      submitted_at: receipt.submitted_at || new Date().toISOString()
    };

    const encodedMeta = encodeURIComponent(JSON.stringify(cleanMeta));
    const filename = cleanMeta.receipt_filename;

    let bodyData: any = null;
    let contentType = 'image/png';

    if (fileBlob) {
      bodyData = fileBlob;
      contentType = fileBlob.type || 'image/png';
    } else if (receipt.receipt_storage_path && receipt.receipt_storage_path.startsWith('data:image/')) {
      // Convert Data URL to binary Blob so it can be uploaded as an attachment
      try {
        const parts = receipt.receipt_storage_path.split(',');
        const mimeMatch = parts[0].match(/:(.*?);/);
        const mime = mimeMatch ? mimeMatch[1] : 'image/png';
        const bstr = atob(parts[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        bodyData = new Blob([u8arr], { type: mime });
        contentType = mime;
      } catch (_) {
        bodyData = null;
      }
    }

    // Short, clean target URL with ONLY small JSON metadata
    const targetUrl = bodyData 
      ? `https://ntfy.sh/${TOPIC_PAYMENTS}?message=${encodedMeta}&filename=${encodeURIComponent(filename)}`
      : `https://ntfy.sh/${TOPIC_PAYMENTS}`;

    const headers: Record<string, string> = {
      'Title': `Payment: ${receipt.student_phone} (${receipt.amount_birr} ETB)`,
      'Filename': filename,
      'X-Filename': filename
    };

    if (bodyData) {
      headers['Content-Type'] = contentType;
    } else {
      headers['Content-Type'] = 'application/json';
      bodyData = JSON.stringify(cleanMeta);
    }

    const res = await fetch(targetUrl, {
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
          let parsed: any = null;
          try {
            parsed = JSON.parse(decodeURIComponent(item.message));
          } catch {
            try { parsed = JSON.parse(item.message); } catch {}
          }
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
 * Broadcasts an approved device transfer from admin to cloud
 */
export async function broadcastDeviceApproval(phoneNumber: string, newDeviceId: string): Promise<boolean> {
  try {
    const res = await fetch(`https://ntfy.sh/${TOPIC_APPROVALS}`, {
      method: 'POST',
      headers: {
        'Title': `Device Approved: ${phoneNumber}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        new_device_id: newDeviceId,
        device_approved: true,
        type: 'device_approval',
        approved_at: new Date().toISOString()
      })
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
          let app: any = null;
          try {
            app = JSON.parse(decodeURIComponent(item.message));
          } catch {
            try { app = JSON.parse(item.message); } catch {}
          }
          if (app && app.phone_number) {
            const appDigits = String(app.phone_number).replace(/[^\d]/g, '');
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

/**
 * Broadcasts an account device transfer request from student
 */
export async function broadcastDeviceTransfer(req: RemoteDeviceTransfer): Promise<boolean> {
  try {
    const res = await fetch(`https://ntfy.sh/${TOPIC_TRANSFERS}`, {
      method: 'POST',
      headers: {
        'Title': `Device Transfer: ${req.phone_number}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}

/**
 * Polls remote device transfer requests
 */
export async function fetchRemoteDeviceTransfers(): Promise<RemoteDeviceTransfer[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`https://ntfy.sh/${TOPIC_TRANSFERS}/json?poll=1&since=all`, {
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!res.ok) return [];
    const text = await res.text();
    const lines = text.trim().split('\n').filter(Boolean);
    const transfers: RemoteDeviceTransfer[] = [];

    for (const line of lines) {
      try {
        const item = JSON.parse(line);
        if (item && item.message) {
          let tr: any = null;
          try {
            tr = JSON.parse(decodeURIComponent(item.message));
          } catch {
            try { tr = JSON.parse(item.message); } catch {}
          }
          if (tr && tr.phone_number) {
            transfers.push({
              id: tr.id || `dt-${item.id || Date.now()}`,
              user_id: tr.user_id,
              phone_number: tr.phone_number,
              student_name: tr.student_name || 'Student',
              old_device_id: tr.old_device_id,
              new_device_id: tr.new_device_id || 'unknown',
              reason: tr.reason || 'Device transfer appeal',
              status: tr.status || 'pending',
              requested_at: tr.requested_at || new Date().toISOString()
            });
          }
        }
      } catch (_) {}
    }

    return transfers;
  } catch (e) {
    return [];
  }
}

/**
 * Broadcasts a student question error / correction appeal
 */
export async function broadcastQuestionFeedback(fb: RemoteQuestionFeedback): Promise<boolean> {
  try {
    const res = await fetch(`https://ntfy.sh/${TOPIC_FEEDBACKS}`, {
      method: 'POST',
      headers: {
        'Title': `Question Feedback: ${fb.user_phone || fb.exam_title || 'Report'}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fb)
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}

/**
 * Polls remote question feedback / appeals
 */
export async function fetchRemoteQuestionFeedbacks(): Promise<RemoteQuestionFeedback[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`https://ntfy.sh/${TOPIC_FEEDBACKS}/json?poll=1&since=all`, {
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!res.ok) return [];
    const text = await res.text();
    const lines = text.trim().split('\n').filter(Boolean);
    const feedbacks: RemoteQuestionFeedback[] = [];

    for (const line of lines) {
      try {
        const item = JSON.parse(line);
        if (item && item.message) {
          let fb: any = null;
          try {
            fb = JSON.parse(decodeURIComponent(item.message));
          } catch {
            try { fb = JSON.parse(item.message); } catch {}
          }
          if (fb && (fb.question_id || fb.comment)) {
            feedbacks.push({
              id: fb.id || `qfb-${item.id || Date.now()}`,
              question_id: fb.question_id,
              question_number: fb.question_number || 1,
              exam_id: fb.exam_id || 'unknown',
              exam_title: fb.exam_title || 'Examination Question',
              subject_name: fb.subject_name,
              grade_name: fb.grade_name,
              user_id: fb.user_id,
              user_name: fb.user_name || 'Student',
              user_phone: fb.user_phone || '',
              feedback_type: fb.feedback_type || 'other',
              suggested_answer: fb.suggested_answer,
              comment: fb.comment,
              status: fb.status || 'pending',
              created_at: fb.created_at || new Date().toISOString()
            });
          }
        }
      } catch (_) {}
    }

    return feedbacks;
  } catch (e) {
    return [];
  }
}

