import { getAllErrorNotebookEntries, saveAllErrorNotebookEntries } from './errorNotebookStore';
import { getSavedOfflineExamIdsSync } from './offlineStorage';

export interface EthioPackageMetadata {
  format: 'ETHIOLEARN_P2P_PACKAGE';
  version: string;
  exported_at: string;
  app_name: string;
  device_label?: string;
  stats: {
    offline_exams_count: number;
    error_notebook_count: number;
    short_notes_count: number;
    attempts_count: number;
  };
}

export interface EthioOfflinePackage {
  metadata: EthioPackageMetadata;
  payload: {
    offline_exam_ids: string[];
    error_notebook: any[];
    chapter_short_notes: Record<string, any>;
    exam_attempts: any[];
    bookmarks: any[];
    user_settings?: Record<string, any>;
  };
}

/**
 * Builds the complete exportable .ethio payload
 */
export async function buildOfflinePackage(): Promise<EthioOfflinePackage> {
  const offlineExamIds = getSavedOfflineExamIdsSync();
  const errorNotebook = getAllErrorNotebookEntries();

  // Collect short notes from localStorage
  const shortNotes: Record<string, any> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('ethio_short_note_')) {
      shortNotes[k] = localStorage.getItem(k);
    }
  }

  // Collect offline attempts
  let attempts: any[] = [];
  try {
    const rawAttempts = localStorage.getItem('ethiolearn_offline_attempts');
    if (rawAttempts) attempts = JSON.parse(rawAttempts);
  } catch {}

  // Bookmarks
  let bookmarks: any[] = [];
  try {
    const rawBm = localStorage.getItem('ethiolearn_bookmarks');
    if (rawBm) bookmarks = JSON.parse(rawBm);
  } catch {}

  const pkg: EthioOfflinePackage = {
    metadata: {
      format: 'ETHIOLEARN_P2P_PACKAGE',
      version: '2024.1',
      exported_at: new Date().toISOString(),
      app_name: 'EthioLearn AI (Ethiopian Secondary & EUEE)',
      device_label: navigator.userAgent.includes('Mobile') ? 'Mobile Student Device' : 'Desktop/Tablet Device',
      stats: {
        offline_exams_count: offlineExamIds.length,
        error_notebook_count: errorNotebook.length,
        short_notes_count: Object.keys(shortNotes).length,
        attempts_count: attempts.length
      }
    },
    payload: {
      offline_exam_ids: offlineExamIds,
      error_notebook: errorNotebook,
      chapter_short_notes: shortNotes,
      exam_attempts: attempts,
      bookmarks
    }
  };

  return pkg;
}

/**
 * Triggers native SHAREit / Xender / Nearby Share sheet or file download
 */
export async function exportOfflinePackage(): Promise<{ success: boolean; filename: string }> {
  const pkg = await buildOfflinePackage();
  const jsonStr = JSON.stringify(pkg, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/octet-stream' });
  const filename = `EthioLearn_Offline_Materials_${new Date().toISOString().slice(0, 10)}.ethio`;

  // Try Native Web Share API (SHAREit, Xender, Bluetooth, Nearby Share)
  if (typeof navigator !== 'undefined' && (navigator as any).canShare && (navigator as any).share) {
    try {
      const file = new File([blob], filename, { type: 'application/octet-stream' });
      if ((navigator as any).canShare({ files: [file] })) {
        await (navigator as any).share({
          title: 'EthioLearn Offline Educational Package',
          text: 'Offline Ethiopian Secondary Exam Questions, Worksheets & Error Notebook for SHAREit / Bluetooth transfer.',
          files: [file]
        });
        return { success: true, filename };
      }
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        console.warn('Web Share failed, falling back to download:', e);
      }
    }
  }

  // Fallback to standard file download
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 15000);

  return { success: true, filename };
}

export interface ImportResult {
  success: boolean;
  message: string;
  stats?: {
    examsAdded: number;
    errorItemsAdded: number;
    notesAdded: number;
    attemptsAdded: number;
  };
}

/**
 * Reads, verifies, and merges an incoming .ethio package into device storage
 */
export async function importOfflinePackage(file: File): Promise<ImportResult> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const text = reader.result as string;
        const parsed = JSON.parse(text) as EthioOfflinePackage;

        if (!parsed || parsed.metadata?.format !== 'ETHIOLEARN_P2P_PACKAGE') {
          return resolve({
            success: false,
            message: 'Invalid package format. Please select an authentic EthioLearn (.ethio) file.'
          });
        }

        const payload = parsed.payload;
        let examsAdded = 0;
        let errorItemsAdded = 0;
        let notesAdded = 0;
        let attemptsAdded = 0;

        // 1. Merge offline exam IDs
        if (Array.isArray(payload.offline_exam_ids)) {
          const current = getSavedOfflineExamIdsSync();
          const merged = Array.from(new Set([...current, ...payload.offline_exam_ids]));
          examsAdded = merged.length - current.length;
          localStorage.setItem('ethiolearn_offline_exam_ids', JSON.stringify(merged));
        }

        // 2. Merge Error Notebook
        if (Array.isArray(payload.error_notebook)) {
          const currentEntries = getAllErrorNotebookEntries();
          const existingIds = new Set(currentEntries.map(e => e.question_id));
          let count = 0;
          for (const item of payload.error_notebook) {
            if (item && item.question_id && !existingIds.has(item.question_id)) {
              currentEntries.push(item);
              existingIds.add(item.question_id);
              count++;
            }
          }
          errorItemsAdded = count;
          saveAllErrorNotebookEntries(currentEntries);
        }

        // 3. Merge short notes
        if (payload.chapter_short_notes && typeof payload.chapter_short_notes === 'object') {
          for (const [k, v] of Object.entries(payload.chapter_short_notes)) {
            if (!localStorage.getItem(k) && typeof v === 'string') {
              localStorage.setItem(k, v);
              notesAdded++;
            }
          }
        }

        // 4. Merge attempts
        if (Array.isArray(payload.exam_attempts)) {
          let currentAttempts: any[] = [];
          try {
            const raw = localStorage.getItem('ethiolearn_offline_attempts');
            if (raw) currentAttempts = JSON.parse(raw);
          } catch {}

          const attemptIds = new Set(currentAttempts.map(a => a.id));
          for (const at of payload.exam_attempts) {
            if (at && at.id && !attemptIds.has(at.id)) {
              currentAttempts.push(at);
              attemptIds.add(at.id);
              attemptsAdded++;
            }
          }
          localStorage.setItem('ethiolearn_offline_attempts', JSON.stringify(currentAttempts));
        }

        resolve({
          success: true,
          message: `Package imported successfully! Loaded ${examsAdded} exam sets, ${errorItemsAdded} error notebook questions, and ${notesAdded} study notes.`,
          stats: {
            examsAdded,
            errorItemsAdded,
            notesAdded,
            attemptsAdded
          }
        });
      } catch (err: any) {
        console.error('Import error:', err);
        resolve({
          success: false,
          message: err.message || 'Corrupted or unreadable .ethio file.'
        });
      }
    };
    reader.onerror = () => {
      resolve({ success: false, message: 'Failed to read file from local storage.' });
    };
    reader.readAsText(file);
  });
}
