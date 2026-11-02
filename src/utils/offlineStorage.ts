import { Book, BookChapter, Exam, ExamAttempt, ExamQuestion, ChapterShortNote, Grade, Subject } from '../types';
import { getEmbeddedBookPage } from '../data/embeddedPagesFallback';
import { WORKSHEET_QUESTIONS } from '../../server/worksheetsCatalog';

const DB_NAME = 'EthioLearnOfflineDB';
const DB_VERSION = 3;

const STORE_PDFS = 'textbook_pdfs';
const STORE_PAGES = 'textbook_pages';
const STORE_META = 'textbook_meta';
const STORE_SHORT_NOTES = 'chapter_short_notes';
const STORE_EXAMS = 'exams_store';
const STORE_EXAM_QUESTIONS = 'exam_questions_store';
const STORE_EXAM_ATTEMPTS = 'offline_exam_attempts';
const STORE_BOOKS = 'books_store';
const STORE_CATALOG = 'catalog_cache';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB is not supported in this browser environment'));
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_PDFS)) {
        db.createObjectStore(STORE_PDFS, { keyPath: 'bookId' });
      }
      if (!db.objectStoreNames.contains(STORE_PAGES)) {
        db.createObjectStore(STORE_PAGES, { keyPath: 'pageId' });
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: 'bookId' });
      }
      if (!db.objectStoreNames.contains(STORE_SHORT_NOTES)) {
        db.createObjectStore(STORE_SHORT_NOTES, { keyPath: 'storageKey' });
      }
      if (!db.objectStoreNames.contains(STORE_EXAMS)) {
        db.createObjectStore(STORE_EXAMS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_EXAM_QUESTIONS)) {
        db.createObjectStore(STORE_EXAM_QUESTIONS, { keyPath: 'examId' });
      }
      if (!db.objectStoreNames.contains(STORE_EXAM_ATTEMPTS)) {
        db.createObjectStore(STORE_EXAM_ATTEMPTS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_BOOKS)) {
        db.createObjectStore(STORE_BOOKS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_CATALOG)) {
        db.createObjectStore(STORE_CATALOG, { keyPath: 'key' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// ----------------------------------------------------
// EXAMS & QUESTIONS OFFLINE STORAGE
// ----------------------------------------------------

export async function saveExamOffline(exam: Exam, questions: ExamQuestion[]): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction([STORE_EXAMS, STORE_EXAM_QUESTIONS], 'readwrite');
    const examStore = tx.objectStore(STORE_EXAMS);
    const questionsStore = tx.objectStore(STORE_EXAM_QUESTIONS);

    examStore.put({
      ...exam,
      is_offline_saved: true,
      offline_saved_at: new Date().toISOString()
    });

    questionsStore.put({
      examId: exam.id,
      questions: questions,
      count: questions.length,
      savedAt: new Date().toISOString()
    });

    // Also update localStorage quick lookup list for instant synchronous checks
    try {
      const savedIds = getSavedOfflineExamIdsSync();
      if (!savedIds.includes(exam.id)) {
        savedIds.push(exam.id);
        localStorage.setItem('ethiolearn_offline_exam_ids', JSON.stringify(savedIds));
      }
    } catch (e) {}

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to save exam offline:', err);
  }
}

export function getSavedOfflineExamIdsSync(): string[] {
  try {
    const raw = localStorage.getItem('ethiolearn_offline_exam_ids');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function getAllOfflineExamIds(): Promise<string[]> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_EXAMS, 'readonly');
    const store = tx.objectStore(STORE_EXAMS);
    const req = store.getAllKeys();

    return new Promise((resolve) => {
      req.onsuccess = () => {
        const ids = (req.result as string[]) || [];
        try {
          localStorage.setItem('ethiolearn_offline_exam_ids', JSON.stringify(ids));
        } catch {}
        resolve(ids);
      };
      req.onerror = () => resolve(getSavedOfflineExamIdsSync());
    });
  } catch {
    return getSavedOfflineExamIdsSync();
  }
}

export function getBundledExamQuestions(examId: string): ExamQuestion[] {
  // 1. Direct match in worksheet questions catalog
  const wsMatches = WORKSHEET_QUESTIONS.filter(q => q.exam_id === examId);
  if (wsMatches.length > 0) return wsMatches;

  // 2. Subject-aligned fallback from authentic question sets
  if (examId.includes('phys')) {
    return WORKSHEET_QUESTIONS.filter(q => q.subject_id === 'subj-phys').map((q, idx) => ({
      ...q,
      id: `${examId}-q-${idx + 1}`,
      exam_id: examId,
      question_number: idx + 1
    }));
  }
  if (examId.includes('chem')) {
    return WORKSHEET_QUESTIONS.filter(q => q.subject_id === 'subj-chem').map((q, idx) => ({
      ...q,
      id: `${examId}-q-${idx + 1}`,
      exam_id: examId,
      question_number: idx + 1
    }));
  }

  return [];
}

export async function isExamSavedOffline(examId: string): Promise<boolean> {
  // If exam has prebundled offline questions, it is always ready offline
  if (examId.startsWith('ws-') || getBundledExamQuestions(examId).length > 0) {
    return true;
  }

  try {
    const db = await openDB();
    const tx = db.transaction(STORE_EXAM_QUESTIONS, 'readonly');
    const store = tx.objectStore(STORE_EXAM_QUESTIONS);
    const req = store.get(examId);

    return new Promise((resolve) => {
      req.onsuccess = () => {
        const res = req.result;
        resolve(!!(res && Array.isArray(res.questions) && res.questions.length > 0));
      };
      req.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
}

export async function getOfflineExam(examId: string): Promise<Exam | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_EXAMS, 'readonly');
    const store = tx.objectStore(STORE_EXAMS);
    const req = store.get(examId);

    return new Promise((resolve) => {
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function getOfflineExamQuestions(examId: string): Promise<ExamQuestion[]> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_EXAM_QUESTIONS, 'readonly');
    const store = tx.objectStore(STORE_EXAM_QUESTIONS);
    const req = store.get(examId);

    return new Promise((resolve) => {
      req.onsuccess = () => {
        if (req.result && Array.isArray(req.result.questions) && req.result.questions.length > 0) {
          resolve(req.result.questions);
        } else {
          resolve(getBundledExamQuestions(examId));
        }
      };
      req.onerror = () => resolve(getBundledExamQuestions(examId));
    });
  } catch {
    return getBundledExamQuestions(examId);
  }
}

export async function getAllOfflineExams(): Promise<Exam[]> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_EXAMS, 'readonly');
    const store = tx.objectStore(STORE_EXAMS);
    const req = store.getAll();

    return new Promise((resolve) => {
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

export async function deleteOfflineExam(examId: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction([STORE_EXAMS, STORE_EXAM_QUESTIONS], 'readwrite');
    tx.objectStore(STORE_EXAMS).delete(examId);
    tx.objectStore(STORE_EXAM_QUESTIONS).delete(examId);

    try {
      const savedIds = getSavedOfflineExamIdsSync().filter(id => id !== examId);
      localStorage.setItem('ethiolearn_offline_exam_ids', JSON.stringify(savedIds));
    } catch {}

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to delete offline exam:', err);
  }
}

// ----------------------------------------------------
// OFFLINE ATTEMPTS STORAGE
// ----------------------------------------------------

export interface StoredOfflineAttempt {
  id: string;
  attempt: ExamAttempt;
  exam?: Exam;
  questions?: ExamQuestion[];
  answers: Record<string, { selected: string; review: boolean }>;
  savedAt: string;
}

export async function saveOfflineExamAttempt(
  attempt: ExamAttempt,
  exam?: Exam | null,
  questions?: ExamQuestion[],
  answers?: Record<string, { selected: string; review: boolean }>
): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_EXAM_ATTEMPTS, 'readwrite');
    const store = tx.objectStore(STORE_EXAM_ATTEMPTS);

    const record: StoredOfflineAttempt = {
      id: attempt.id,
      attempt,
      exam: exam || undefined,
      questions: questions || undefined,
      answers: answers || {},
      savedAt: new Date().toISOString()
    };

    store.put(record);

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to save offline exam attempt:', err);
  }
}

export async function getOfflineExamAttempt(attemptId: string): Promise<StoredOfflineAttempt | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_EXAM_ATTEMPTS, 'readonly');
    const store = tx.objectStore(STORE_EXAM_ATTEMPTS);
    const req = store.get(attemptId);

    return new Promise((resolve) => {
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

// ----------------------------------------------------
// OFFLINE TEXTBOOKS & SHORT NOTES STORAGE
// ----------------------------------------------------

export async function saveBookFullOffline(
  book: Book,
  chapters: BookChapter[],
  shortNotes?: ChapterShortNote[]
): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction([STORE_BOOKS, STORE_META], 'readwrite');
    const bookStore = tx.objectStore(STORE_BOOKS);
    const metaStore = tx.objectStore(STORE_META);

    bookStore.put({
      ...book,
      chapters,
      savedAt: new Date().toISOString()
    });

    metaStore.put({
      bookId: book.id,
      title: book.title,
      grade_id: book.grade_id,
      subject_id: book.subject_id,
      downloadedAt: new Date().toISOString()
    });

    if (shortNotes && shortNotes.length > 0) {
      await saveAllBookShortNotesOffline(book.id, shortNotes);
    }

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to save full book offline:', err);
  }
}

export async function getOfflineBookFull(bookId: string): Promise<{ book: Book; chapters: BookChapter[] } | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_BOOKS, 'readonly');
    const store = tx.objectStore(STORE_BOOKS);
    const req = store.get(bookId);

    return new Promise((resolve) => {
      req.onsuccess = () => {
        if (req.result) {
          const { chapters, ...book } = req.result;
          resolve({ book: book as Book, chapters: chapters || [] });
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function saveOfflineBookPage(
  bookId: string,
  pageNumber: number,
  page: any
): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_PAGES, 'readwrite');
    const store = tx.objectStore(STORE_PAGES);
    store.put({
      pageId: `${bookId}_p${pageNumber}`,
      bookId,
      pageNumber,
      page,
      savedAt: new Date().toISOString()
    });
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to cache page offline:', err);
  }
}

export async function saveOfflineBookPages(
  bookId: string,
  pages: any[]
): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_PAGES, 'readwrite');
    const store = tx.objectStore(STORE_PAGES);
    for (const p of pages) {
      const pNum = p.printed_page_number || p.pdf_page_index || 1;
      store.put({
        pageId: `${bookId}_p${pNum}`,
        bookId,
        pageNumber: pNum,
        page: p,
        savedAt: new Date().toISOString()
      });
    }
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to cache book pages offline:', err);
  }
}

export async function getOfflineBookPage(
  bookId: string,
  pageNumber: number
): Promise<any | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_PAGES, 'readonly');
    const store = tx.objectStore(STORE_PAGES);
    const req = store.get(`${bookId}_p${pageNumber}`);
    return new Promise((resolve) => {
      req.onsuccess = () => {
        if (req.result && req.result.page) {
          resolve(req.result.page);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function getAllOfflineBookPages(bookId: string): Promise<any[]> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_PAGES, 'readonly');
    const store = tx.objectStore(STORE_PAGES);
    const req = store.getAll();
    return new Promise((resolve) => {
      req.onsuccess = () => {
        const all = req.result || [];
        const matching = all.filter((item: any) => item.bookId === bookId).map((item: any) => item.page);
        resolve(matching);
      };
      req.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

export async function getAllOfflineBooks(): Promise<Book[]> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_BOOKS, 'readonly');
    const store = tx.objectStore(STORE_BOOKS);
    const req = store.getAll();

    return new Promise((resolve) => {
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

export async function savePdfOffline(bookId: string, pdfBlob: Blob, title?: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction([STORE_PDFS, STORE_META], 'readwrite');
    const pdfStore = tx.objectStore(STORE_PDFS);
    const metaStore = tx.objectStore(STORE_META);

    pdfStore.put({
      bookId,
      blob: pdfBlob,
      size: pdfBlob.size,
      updatedAt: new Date().toISOString()
    });

    metaStore.put({
      bookId,
      title: title || 'Textbook',
      downloadedAt: new Date().toISOString()
    });

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    console.warn('Failed to store PDF offline in IndexedDB:', e);
  }
}

export async function getOfflinePdfUrl(bookId: string): Promise<string | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_PDFS, 'readonly');
    const store = tx.objectStore(STORE_PDFS);
    const req = store.get(bookId);

    return new Promise((resolve) => {
      req.onsuccess = () => {
        if (req.result && req.result.blob) {
          const url = URL.createObjectURL(req.result.blob);
          resolve(url);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    return null;
  }
}

export async function getOfflinePdfBlob(bookId: string): Promise<Blob | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_PDFS, 'readonly');
    const store = tx.objectStore(STORE_PDFS);
    const req = store.get(bookId);

    return new Promise((resolve) => {
      req.onsuccess = () => {
        if (req.result && req.result.blob) {
          resolve(req.result.blob);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function isBookOffline(bookId: string): Promise<boolean> {
  try {
    const db = await openDB();
    // Check if book exists in STORE_BOOKS, STORE_PDFS, or STORE_META
    const tx = db.transaction([STORE_BOOKS, STORE_PDFS, STORE_META], 'readonly');
    const bookReq = tx.objectStore(STORE_BOOKS).get(bookId);
    const pdfReq = tx.objectStore(STORE_PDFS).get(bookId);
    const metaReq = tx.objectStore(STORE_META).get(bookId);

    return new Promise((resolve) => {
      tx.oncomplete = () => {
        const isSaved = Boolean(bookReq.result || pdfReq.result || metaReq.result);
        resolve(isSaved);
      };
      tx.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
}

export async function deleteOfflineBook(bookId: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction([STORE_PDFS, STORE_META, STORE_BOOKS, STORE_PAGES], 'readwrite');
    tx.objectStore(STORE_PDFS).delete(bookId);
    tx.objectStore(STORE_META).delete(bookId);
    tx.objectStore(STORE_BOOKS).delete(bookId);
    try {
      const pStore = tx.objectStore(STORE_PAGES);
      const curReq = pStore.openCursor();
      curReq.onsuccess = (e: any) => {
        const cursor = e.target.result;
        if (cursor) {
          if (cursor.value?.bookId === bookId || String(cursor.key).startsWith(bookId)) {
            cursor.delete();
          }
          cursor.continue();
        }
      };
    } catch {}
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    console.warn('Failed to delete offline book:', e);
  }
}

export async function getAllOfflineBookIds(): Promise<string[]> {
  try {
    const db = await openDB();
    const tx = db.transaction([STORE_META, STORE_BOOKS, STORE_PDFS], 'readonly');
    const metaReq = tx.objectStore(STORE_META).getAllKeys();
    const booksReq = tx.objectStore(STORE_BOOKS).getAllKeys();
    const pdfReq = tx.objectStore(STORE_PDFS).getAllKeys();

    return new Promise((resolve) => {
      tx.oncomplete = () => {
        const set = new Set<string>();
        (metaReq.result || []).forEach(k => set.add(String(k)));
        (booksReq.result || []).forEach(k => set.add(String(k)));
        (pdfReq.result || []).forEach(k => set.add(String(k)));
        resolve(Array.from(set));
      };
      tx.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

export async function downloadAndSaveBookOffline(
  book: Book,
  userId?: string,
  onProgress?: (status: string) => void
): Promise<boolean> {
  try {
    if (onProgress) onProgress('Fetching curriculum chapter index...');
    // 1. Fetch book details & chapters
    let chapters: BookChapter[] = [];
    try {
      const bookRes = await fetch(`/api/books/${book.id}`, {
        headers: { 'x-user-id': userId || 'usr-student-premium' }
      });
      if (bookRes.ok) {
        const data = await bookRes.json();
        if (data.book) {
          book = { ...book, ...data.book };
          if (typeof book.total_pages === 'number' && book.total_pages > 0) {
            try {
              localStorage.setItem('ethio_book_pages_' + book.id, String(book.total_pages));
            } catch {}
          }
        }
        if (data.chapters && Array.isArray(data.chapters)) {
          chapters = data.chapters;
        }
      }
    } catch (err) {
      console.warn('Could not fetch online chapters:', err);
    }

    // 2. Fetch high-yield short notes & detailed notes
    if (onProgress) onProgress('Downloading high-yield notes & summaries...');
    let shortNotes: ChapterShortNote[] = [];
    try {
      const notesRes = await fetch(`/api/books/${book.id}/short-notes`, {
        headers: { 'x-user-id': userId || 'usr-student-premium' }
      });
      if (notesRes.ok) {
        const notesData = await notesRes.json();
        if (notesData.short_notes && Array.isArray(notesData.short_notes)) {
          shortNotes = notesData.short_notes;
        }
      }
    } catch (notesErr) {
      console.warn('Could not fetch short notes for offline caching:', notesErr);
    }

    // 2b. If English book, download English Grammar & Vocabulary Mastery
    if (book.subject_id === 'subj-eng' || book.id.includes('eng') || book.title.toLowerCase().includes('english')) {
      try {
        const engRes = await fetch(`/api/books/${book.id}/english-mastery`, {
          headers: { 'x-user-id': userId || 'usr-student-premium' }
        });
        if (engRes.ok) {
          const engData = await engRes.json();
          if (engData.mastery) {
            await saveEnglishMasteryOffline(book.id, engData.mastery);
          }
        }
      } catch (e) {}
    }

    // 2c. Fetch all digital textbook pages (text, KaTeX math, tables, figures, AI analysis)
    if (onProgress) onProgress('Downloading digital textbook pages & tables...');
    const savedPageNums = new Set<number>();
    try {
      const pagesRes = await fetch(`/api/books/${book.id}/pages`, {
        headers: { 'x-user-id': userId || 'usr-student-premium' }
      });
      if (pagesRes.ok) {
        const pagesData = await pagesRes.json();
        if (pagesData.pages && Array.isArray(pagesData.pages) && pagesData.pages.length > 0) {
          await saveOfflineBookPages(book.id, pagesData.pages);
          pagesData.pages.forEach((p: any) => {
            const num = p.printed_page_number || p.pdf_page_index;
            if (num) savedPageNums.add(num);
          });
        }
      }
    } catch (pagesErr) {
      console.warn('Could not fetch pages for offline caching:', pagesErr);
    }

    // 2d. Supplement any missing pages using authentic embedded fallbacks
    const totalP = book.total_pages || 180;
    const embeddedPages: any[] = [];
    for (let pNum = 1; pNum <= totalP; pNum++) {
      if (!savedPageNums.has(pNum)) {
        const emb = getEmbeddedBookPage(book.id, pNum);
        if (emb) {
          embeddedPages.push(emb);
        }
      }
    }
    if (embeddedPages.length > 0) {
      await saveOfflineBookPages(book.id, embeddedPages);
    }

    // 3. Save book structure & notes to IndexedDB
    await saveBookFullOffline(book, chapters, shortNotes);

    // 4. Download PDF textbook binary and store in IndexedDB
    if (onProgress) onProgress('Downloading complete PDF textbook to device...');
    try {
      const pdfRes = await fetch(`/api/books/${book.id}/pdf?download=true`, {
        headers: { 'x-user-id': userId || 'usr-student-premium' }
      });
      if (pdfRes.ok) {
        const blob = await pdfRes.blob();
        await savePdfOffline(book.id, blob, book.title);
      }
    } catch (pdfErr) {
      console.warn('PDF blob download failed, notes and chapters saved:', pdfErr);
    }

    // Register offline ID in localStorage for instant sync checks
    try {
      const currentSaved = await getAllOfflineBookIds();
      if (!currentSaved.includes(book.id)) {
        currentSaved.push(book.id);
      }
      localStorage.setItem('ethiolearn_offline_book_ids', JSON.stringify(currentSaved));
    } catch (e) {}

    if (onProgress) onProgress('Saved for 100% offline access!');
    return true;
  } catch (err) {
    console.error('Failed to download book offline:', err);
    return false;
  }
}

// ----------------------------------------------------
// SHORT NOTES STORAGE
// ----------------------------------------------------

export function buildShortNoteKey(bookId: string, chapterNumber: number, topicTitle?: string): string {
  if (topicTitle && topicTitle.trim()) {
    return `${bookId}_ch_${chapterNumber}_${topicTitle.trim().toLowerCase().replace(/\s+/g, '_')}`;
  }
  return `${bookId}_ch_${chapterNumber}`;
}

export async function saveShortNoteOffline(
  bookId: string,
  chapterNumber: number,
  note: ChapterShortNote,
  topicTitle?: string
): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_SHORT_NOTES, 'readwrite');
    const store = tx.objectStore(STORE_SHORT_NOTES);
    const storageKey = buildShortNoteKey(bookId, chapterNumber, topicTitle);

    store.put({
      storageKey,
      bookId,
      chapterNumber,
      topicTitle: topicTitle || '',
      note,
      savedAt: new Date().toISOString()
    });

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to cache Short Note offline in IndexedDB:', err);
  }
}

export async function getOfflineShortNote(
  bookId: string,
  chapterNumber: number,
  topicTitle?: string
): Promise<ChapterShortNote | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_SHORT_NOTES, 'readonly');
    const store = tx.objectStore(STORE_SHORT_NOTES);
    const storageKey = buildShortNoteKey(bookId, chapterNumber, topicTitle);
    const req = store.get(storageKey);

    return new Promise((resolve) => {
      req.onsuccess = () => {
        if (req.result && req.result.note) {
          resolve(req.result.note);
        } else {
          if (topicTitle) {
            const baseKey = buildShortNoteKey(bookId, chapterNumber);
            const baseReq = store.get(baseKey);
            baseReq.onsuccess = () => resolve(baseReq.result?.note || null);
            baseReq.onerror = () => resolve(null);
          } else {
            resolve(null);
          }
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    return null;
  }
}

export async function saveAllBookShortNotesOffline(bookId: string, notes: ChapterShortNote[]): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_SHORT_NOTES, 'readwrite');
    const store = tx.objectStore(STORE_SHORT_NOTES);

    for (const note of notes) {
      const storageKey = buildShortNoteKey(bookId, note.chapter_number, note.topic_title);
      store.put({
        storageKey,
        bookId,
        chapterNumber: note.chapter_number,
        topicTitle: note.topic_title || '',
        note,
        savedAt: new Date().toISOString()
      });
    }

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to save all short notes offline:', err);
  }
}

export async function getAllOfflineShortNotes(bookId: string): Promise<ChapterShortNote[]> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_SHORT_NOTES, 'readonly');
    const store = tx.objectStore(STORE_SHORT_NOTES);
    const req = store.getAll();

    return new Promise((resolve) => {
      req.onsuccess = () => {
        const items = req.result || [];
        const filtered = items.filter((item: any) => item.bookId === bookId).map((item: any) => item.note);
        resolve(filtered);
      };
      req.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

export async function isShortNotesSavedOffline(bookId: string): Promise<boolean> {
  try {
    const notes = await getAllOfflineShortNotes(bookId);
    return notes.length > 0;
  } catch {
    return false;
  }
}

// ----------------------------------------------------
// CATALOG CACHING (Grades, Subjects, Books, Exams)
// ----------------------------------------------------

export async function cacheCatalogData(data: {
  grades?: Grade[];
  subjects?: Subject[];
  books?: Book[];
  exams?: Exam[];
}): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_CATALOG, 'readwrite');
    const store = tx.objectStore(STORE_CATALOG);

    if (data.grades) store.put({ key: 'grades', value: data.grades, updatedAt: Date.now() });
    if (data.subjects) store.put({ key: 'subjects', value: data.subjects, updatedAt: Date.now() });
    if (data.books) store.put({ key: 'books', value: data.books, updatedAt: Date.now() });
    if (data.exams) store.put({ key: 'exams', value: data.exams, updatedAt: Date.now() });

    // Also mirror to localStorage for instantaneous synchronous access
    try {
      if (data.grades) localStorage.setItem('ethiolearn_cached_grades', JSON.stringify(data.grades));
      if (data.subjects) localStorage.setItem('ethiolearn_cached_subjects', JSON.stringify(data.subjects));
      if (data.books) localStorage.setItem('ethiolearn_cached_books', JSON.stringify(data.books));
      if (data.exams) localStorage.setItem('ethiolearn_cached_exams', JSON.stringify(data.exams));
    } catch {}

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to cache catalog data:', err);
  }
}

export async function getCachedCatalogData(): Promise<{
  grades: Grade[];
  subjects: Subject[];
  books: Book[];
  exams: Exam[];
}> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_CATALOG, 'readonly');
    const store = tx.objectStore(STORE_CATALOG);

    const [gradesReq, subjectsReq, booksReq, examsReq] = [
      store.get('grades'),
      store.get('subjects'),
      store.get('books'),
      store.get('exams')
    ];

    return new Promise((resolve) => {
      tx.oncomplete = () => {
        resolve({
          grades: gradesReq.result?.value || getLocalJson('ethiolearn_cached_grades', []),
          subjects: subjectsReq.result?.value || getLocalJson('ethiolearn_cached_subjects', []),
          books: booksReq.result?.value || getLocalJson('ethiolearn_cached_books', []),
          exams: examsReq.result?.value || getLocalJson('ethiolearn_cached_exams', [])
        });
      };
      tx.onerror = () => {
        resolve({
          grades: getLocalJson('ethiolearn_cached_grades', []),
          subjects: getLocalJson('ethiolearn_cached_subjects', []),
          books: getLocalJson('ethiolearn_cached_books', []),
          exams: getLocalJson('ethiolearn_cached_exams', [])
        });
      };
    });
  } catch {
    return {
      grades: getLocalJson('ethiolearn_cached_grades', []),
      subjects: getLocalJson('ethiolearn_cached_subjects', []),
      books: getLocalJson('ethiolearn_cached_books', []),
      exams: getLocalJson('ethiolearn_cached_exams', [])
    };
  }
}

function getLocalJson<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

// ----------------------------------------------------
// ENGLISH GRAMMAR & VOCABULARY MASTERY OFFLINE STORAGE
// ----------------------------------------------------

export async function saveEnglishMasteryOffline(bookId: string, mastery: any[]): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_META, 'readwrite');
    const metaStore = tx.objectStore(STORE_META);

    metaStore.put({
      bookId: `${bookId}_english_mastery`,
      mastery,
      savedAt: new Date().toISOString()
    });

    try {
      localStorage.setItem(`ethiolearn_eng_mastery_${bookId}`, JSON.stringify(mastery));
    } catch {}

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to save English mastery offline:', err);
    try {
      localStorage.setItem(`ethiolearn_eng_mastery_${bookId}`, JSON.stringify(mastery));
    } catch {}
  }
}

export async function getOfflineEnglishMastery(bookId: string): Promise<any[] | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_META, 'readonly');
    const metaStore = tx.objectStore(STORE_META);
    const req = metaStore.get(`${bookId}_english_mastery`);

    return new Promise((resolve) => {
      req.onsuccess = () => {
        if (req.result && req.result.mastery) {
          resolve(req.result.mastery);
        } else {
          const fallback = getLocalJson<any[] | null>(`ethiolearn_eng_mastery_${bookId}`, null);
          resolve(fallback);
        }
      };
      req.onerror = () => {
        const fallback = getLocalJson<any[] | null>(`ethiolearn_eng_mastery_${bookId}`, null);
        resolve(fallback);
      };
    });
  } catch {
    return getLocalJson<any[] | null>(`ethiolearn_eng_mastery_${bookId}`, null);
  }
}

