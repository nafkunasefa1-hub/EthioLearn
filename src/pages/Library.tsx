import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BookOpen,
  Filter,
  Search,
  Lock,
  CheckCircle,
  Edit3,
  Save,
  X,
  FileText,
  Clock,
  Sparkles,
  Download,
  UploadCloud,
  Trash2,
  Plus,
  HardDrive,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  BookMarked,
  WifiOff,
  Check
} from 'lucide-react';
import { Book, Grade, Subject } from '../types';
import { getAllOfflineBookIds, deleteOfflineBook, downloadAndSaveBookOffline, getAllOfflineBooks } from '../utils/offlineStorage';
import { uploadLargeBookPdf } from '../utils/uploader';
import { apiFetchJson } from '../utils/api';
import { getAuthoritativeTotalPages } from '../data/officialTextbooksRegistry';
import { STATIC_BOOKS_CATALOG } from '../data/staticBooksCatalog';
import { STATIC_GRADES_CATALOG } from '../data/staticGradesCatalog';
import { STATIC_SUBJECTS_CATALOG } from '../data/staticSubjectsCatalog';

interface LibraryProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const Library: React.FC<LibraryProps> = ({ onNavigate }) => {
  const { user, hasGradeAccess } = useAuth();
  const [books, setBooks] = useState<Book[]>(STATIC_BOOKS_CATALOG);
  const [grades, setGrades] = useState<Grade[]>(STATIC_GRADES_CATALOG);
  const [subjects, setSubjects] = useState<Subject[]>(STATIC_SUBJECTS_CATALOG);
  const [selectedGrade, setSelectedGrade] = useState<string>(user?.grade_id || 'all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [offlineIds, setOfflineIds] = useState<string[]>([]);

  // Offline detection & saving state
  const [isOfflineMode, setIsOfflineMode] = useState(!navigator.onLine);
  const [savingBookId, setSavingBookId] = useState<string | null>(null);
  const [savingStatus, setSavingStatus] = useState<string | null>(null);
  const [savingAll, setSavingAll] = useState(false);
  const [saveAllProgress, setSaveAllProgress] = useState<string | null>(null);

  useEffect(() => {
    const handleOnline = () => setIsOfflineMode(false);
    const handleOffline = () => setIsOfflineMode(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Admin short note editing modal
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [editShortNoteText, setEditShortNoteText] = useState('');
  const [savingNote, setSavingNote] = useState(false);

  // Upload PDF modal state
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadGrade, setUploadGrade] = useState('grade-10');
  const [uploadSubject, setUploadSubject] = useState('subj-math');
  const [uploadAuthor, setUploadAuthor] = useState('Ministry of Education');
  const [uploadShortNote, setUploadShortNote] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Replace & Re-Index Textbook modal state
  const [replacingBook, setReplacingBook] = useState<Book | null>(null);
  const [replaceFile, setReplaceFile] = useState<File | null>(null);
  const [replaceUploading, setReplaceUploading] = useState(false);
  const [replaceProgress, setReplaceProgress] = useState<string | null>(null);
  const [replaceError, setReplaceError] = useState<string | null>(null);

  const handleReplaceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replacingBook || !replaceFile) {
      setReplaceError('Please select a replacement PDF file');
      return;
    }

    setReplaceUploading(true);
    setReplaceProgress('Uploading replacement PDF in streaming chunks...');
    setReplaceError(null);

    try {
      await deleteOfflineBook(replacingBook.id).catch(() => {});
      await uploadLargeBookPdf({
        file: replaceFile,
        chunkUrl: `/api/books/${replacingBook.id}/upload-pdf-chunk`,
        directUrl: `/api/books/${replacingBook.id}/upload-pdf`,
        userId: user?.id || 'usr-admin-1',
        onProgress: (percent, text) => {
          setReplaceProgress(`${text} (${percent}%)`);
        }
      });
      await deleteOfflineBook(replacingBook.id).catch(() => {});

      setReplaceProgress('Performing deep page extraction, KaTeX formatting & topic AI re-indexing...');

      let attempts = 0;
      const interval = setInterval(async () => {
        attempts++;
        try {
          const check = await fetch(`/api/books/${replacingBook.id}`, { credentials: 'include' });
          if (check.ok) {
            const d = await check.json();
            if (d.book?.status === 'READY') {
              clearInterval(interval);
              const readyBook = d.book;
              if (readyBook.total_pages) {
                try {
                  localStorage.setItem('ethio_book_pages_' + readyBook.id, String(readyBook.total_pages));
                } catch {}
              }
              // Auto-cache complete book and pages to IndexedDB for 100% offline access
              downloadAndSaveBookOffline(readyBook, user?.id).then(() => {
                setOfflineIds(prev => Array.from(new Set([...prev, readyBook.id])));
              }).catch(() => {});
              setReplacingBook(null);
              setReplaceUploading(false);
              setReplaceFile(null);
              setReplaceProgress(null);
              await fetchAllData();
            } else {
              const currentPages = d.pages_count || d.book?.processed_pages || 0;
              const totalP = d.book?.total_pages || 180;
              if (currentPages > 0) {
                setReplaceProgress(`Extracting authentic pages & OCR (${currentPages}/${totalP} pages) • Synthesizing AI Short & Detailed Notes with figures & tables...`);
              } else {
                setReplaceProgress(`Extracting units, topics, and layout from PDF (${attempts * 2}s)...`);
              }
            }
            if (attempts >= 150) {
              clearInterval(interval);
              setReplacingBook(null);
              setReplaceUploading(false);
              setReplaceFile(null);
              setReplaceProgress(null);
              await fetchAllData();
            }
          }
        } catch {}
      }, 2000);
    } catch (err: any) {
      setReplaceError(err.message || 'Failed to replace and re-index textbook');
      setReplaceUploading(false);
    }
  };

  const handleDirectReprocess = async () => {
    if (!replacingBook) return;
    setReplaceUploading(true);
    setReplaceProgress(`Initiating AI Ingestion for ${replacingBook.title}...`);
    setReplaceError(null);

    try {
      const res = await fetch(`/api/books/${replacingBook.id}/reprocess`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || 'Failed to start AI Ingestion');
      }

      setReplaceProgress('Scanning PDF structure, extracting all pages verbatim, KaTeX equations, tables & figures...');

      let attempts = 0;
      const interval = setInterval(async () => {
        attempts++;
        try {
          const check = await fetch(`/api/books/${replacingBook.id}`, { credentials: 'include' });
          if (check.ok) {
            const d = await check.json();
            if (d.book?.status === 'READY') {
              clearInterval(interval);
              const readyBook = d.book;
              if (readyBook.total_pages) {
                try {
                  localStorage.setItem('ethio_book_pages_' + readyBook.id, String(readyBook.total_pages));
                } catch {}
              }
              downloadAndSaveBookOffline(readyBook, user?.id).then(() => {
                setOfflineIds(prev => Array.from(new Set([...prev, readyBook.id])));
              }).catch(() => {});
              setReplacingBook(null);
              setReplaceUploading(false);
              setReplaceFile(null);
              setReplaceProgress(null);
              await fetchAllData();
            } else {
              const currentPages = d.pages_count || d.book?.processed_pages || 0;
              const totalP = d.book?.total_pages || 180;
              if (currentPages > 0) {
                setReplaceProgress(`Extracting authentic pages & OCR (${currentPages}/${totalP} pages) • Synthesizing AI Short & Detailed Notes with figures & tables...`);
              } else {
                setReplaceProgress(`Ingesting textbook units, topics, and layout (${attempts * 2}s)...`);
              }
            }
            if (attempts >= 150) {
              clearInterval(interval);
              setReplacingBook(null);
              setReplaceUploading(false);
              setReplaceFile(null);
              setReplaceProgress(null);
              await fetchAllData();
            }
          }
        } catch {}
      }, 2000);
    } catch (err: any) {
      setReplaceError(err.message || 'Failed to reprocess textbook');
      setReplaceUploading(false);
    }
  };

  // Book deletion state
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteConfirmBook, setDeleteConfirmBook] = useState<Book | null>(null);
  const [deleteNotification, setDeleteNotification] = useState<string | null>(null);

  const fetchAllData = async () => {
    try {
      const [booksData, gradesData, subjectsData] = await Promise.all([
        apiFetchJson<Book[]>('/api/books', undefined, []),
        apiFetchJson<Grade[]>('/api/grades', undefined, []),
        apiFetchJson<Subject[]>('/api/subjects', undefined, [])
      ]);
      let finalBooks = Array.isArray(booksData) ? booksData : [];
      if (finalBooks.length === 0) {
        let offlineBooks = await getAllOfflineBooks().catch(() => []);
        if (offlineBooks.length === 0) {
          try {
            const raw = localStorage.getItem('ethiolearn_cached_books_catalog');
            if (raw) offlineBooks = JSON.parse(raw);
          } catch (e) {}
        }
        if (offlineBooks.length > 0) finalBooks = offlineBooks;
        else finalBooks = STATIC_BOOKS_CATALOG;
      }

      // Merge with static catalog to guarantee no textbooks are missing across resets
      const existingIds = new Set(finalBooks.map(b => b.id));
      STATIC_BOOKS_CATALOG.forEach(sb => {
        if (!existingIds.has(sb.id)) {
          finalBooks.push({ ...sb });
          existingIds.add(sb.id);
        }
      });

      // Strictly exclude Agriculture from Grade 12 Natural Science and accidental empty uploads
      finalBooks = finalBooks
        .filter(b => b.id !== 'book-12-nat-agri' && !(b.grade_id === 'grade-12-natural' && b.subject_id === 'subj-agri'))
        .map(b => {
        let pages = (typeof b.total_pages === 'number' && b.total_pages > 0) ? b.total_pages : 0;
        if (!pages) {
          try {
            const stored = localStorage.getItem('ethio_book_pages_' + b.id);
            if (stored) pages = parseInt(stored, 10);
          } catch {}
        }
        if (!pages) {
          pages = getAuthoritativeTotalPages(b.id, b.total_pages);
        }
        try {
          localStorage.setItem('ethio_book_pages_' + b.id, String(pages));
        } catch {}
        return {
          ...b,
          total_pages: pages,
          processed_pages: pages
        };
      });

      try {
        localStorage.setItem('ethiolearn_cached_books_catalog', JSON.stringify(finalBooks));
      } catch (e) {}
      setBooks(finalBooks);
      setGrades(Array.isArray(gradesData) && gradesData.length > 0 ? gradesData : STATIC_GRADES_CATALOG);
      setSubjects(Array.isArray(subjectsData) && subjectsData.length > 0 ? subjectsData : STATIC_SUBJECTS_CATALOG);
      
      const savedOffline = await getAllOfflineBookIds().catch(() => []);
      setOfflineIds(savedOffline);
    } catch (err) {
      console.warn('Library data notice, loading offline fallback:', err);
      let offlineBooks = await getAllOfflineBooks().catch(() => []);
      if (offlineBooks.length === 0) {
        try {
          const raw = localStorage.getItem('ethiolearn_cached_books_catalog');
          if (raw) offlineBooks = JSON.parse(raw);
        } catch (e) {}
      }
      let fallbackList = offlineBooks.length > 0 ? offlineBooks : STATIC_BOOKS_CATALOG;
      fallbackList = fallbackList
        .filter(b => b.id !== 'book-12-nat-agri' && !(b.grade_id === 'grade-12-natural' && b.subject_id === 'subj-agri'))
        .map(b => ({
          ...b,
          total_pages: getAuthoritativeTotalPages(b.id, b.total_pages),
          processed_pages: getAuthoritativeTotalPages(b.id, b.processed_pages || b.total_pages)
        }));
      setBooks(fallbackList);
      setGrades(STATIC_GRADES_CATALOG);
      setSubjects(STATIC_SUBJECTS_CATALOG);
      const savedOffline = await getAllOfflineBookIds().catch(() => []);
      setOfflineIds(savedOffline);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleSaveBookOffline = async (book: Book) => {
    if (savingBookId) return;
    setSavingBookId(book.id);
    setSavingStatus('Starting download...');
    try {
      const success = await downloadAndSaveBookOffline(book, user?.id, (status) => {
        setSavingStatus(status);
      });
      if (success) {
        setOfflineIds(prev => Array.from(new Set([...prev, book.id])));
      }
    } catch (err) {
      console.error('Failed to save book offline:', err);
    } finally {
      setTimeout(() => {
        setSavingBookId(null);
        setSavingStatus(null);
      }, 1000);
    }
  };

  const handleRemoveBookOffline = async (bookId: string, bookTitle?: string) => {
    await deleteOfflineBook(bookId);
    setOfflineIds(prev => prev.filter(id => id !== bookId));
    setDeleteNotification(`"${bookTitle || 'Textbook'}" removed from device offline cache.`);
    setTimeout(() => setDeleteNotification(null), 4000);
  };

  const handleSaveAllOffline = async () => {
    const toSave = filteredBooks.filter(b => !offlineIds.includes(b.id));
    if (toSave.length === 0) {
      setDeleteNotification('All displayed textbooks are already saved for offline use!');
      setTimeout(() => setDeleteNotification(null), 4000);
      return;
    }
    setSavingAll(true);
    let count = 0;
    for (const b of toSave) {
      count++;
      setSaveAllProgress(`Downloading ${count}/${toSave.length}: ${b.title}...`);
      await downloadAndSaveBookOffline(b, user?.id);
      setOfflineIds(prev => Array.from(new Set([...prev, b.id])));
    }
    setSaveAllProgress(null);
    setSavingAll(false);
    setDeleteNotification(`Successfully saved all ${toSave.length} textbooks for 100% offline study!`);
    setTimeout(() => setDeleteNotification(null), 5000);
  };

  const handleSaveShortNote = async () => {
    if (!editingBook || !user) return;
    setSavingNote(true);
    try {
      const res = await fetch(`/api/books/${editingBook.id}/short-note`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user.id
        },
        body: JSON.stringify({ short_note: editShortNoteText })
      });
      if (res.ok) {
        setBooks(prev => prev.map(b => (b.id === editingBook.id ? { ...b, short_note: editShortNoteText } : b)));
        setEditingBook(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingNote(false);
    }
  };

  const handleFileSelect = (file: File) => {
    setUploadFile(file);
    setUploadError(null);
    if (!uploadTitle) {
      // Auto derive title from filename
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setUploadTitle(cleanName);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) {
      setUploadError('Please select a PDF file to upload');
      return;
    }

    setUploading(true);
    setUploadProgress('Uploading PDF file...');
    setUploadError(null);

    try {
      const extraFields = {
        title: uploadTitle || uploadFile.name.replace('.pdf', ''),
        grade_id: uploadGrade,
        subject_id: uploadSubject,
        author: uploadAuthor,
        publisher: 'FDRE Ministry of Education',
        edition: 'National Secondary Curriculum',
        short_note: uploadShortNote || `Official curriculum textbook for ${uploadTitle}.`
      };

      const data = await uploadLargeBookPdf({
        file: uploadFile,
        chunkUrl: '/api/books/upload-chunk',
        directUrl: '/api/books/upload',
        extraFields,
        userId: user?.id || 'usr-admin-1',
        onProgress: (percent, text) => {
          setUploadProgress(`${text} (${percent}%)`);
        }
      });

      setUploadProgress('Running OCR processing & extracting page texts to database...');

      // Poll book status until READY or complete
      const newBookId = data?.book?.id;
      if (newBookId) {
        let attempts = 0;
        const interval = setInterval(async () => {
          attempts++;
          try {
            const check = await fetch(`/api/books/${newBookId}`, { credentials: 'include' });
            if (check.ok) {
              const checkedBook = await check.json();
              if (checkedBook.book?.status === 'READY') {
                clearInterval(interval);
                const readyBook = checkedBook.book;
                if (readyBook?.total_pages) {
                  try {
                    localStorage.setItem('ethio_book_pages_' + newBookId, String(readyBook.total_pages));
                  } catch {}
                }
                // Auto-cache uploaded textbook offline
                downloadAndSaveBookOffline(readyBook, user?.id).then(() => {
                  setOfflineIds(prev => Array.from(new Set([...prev, readyBook.id])));
                }).catch(() => {});
                setShowUploadModal(false);
                setUploading(false);
                setUploadFile(null);
                setUploadTitle('');
                setUploadProgress(null);
                setSelectedGrade(uploadGrade);
                setSelectedSubject(uploadSubject);
                setDeleteNotification(`Textbook "${readyBook.title}" successfully uploaded, OCR extracted, and saved to database!`);
                setTimeout(() => setDeleteNotification(null), 6000);
                await fetchAllData();
              } else {
                const currentPages = checkedBook.pages_count || checkedBook.book?.processed_pages || 0;
                const totalP = checkedBook.book?.total_pages || 180;
                if (currentPages > 0) {
                  setUploadProgress(`Extracting authentic pages & OCR (${currentPages}/${totalP} pages) • Synthesizing AI Short Notes...`);
                } else {
                  setUploadProgress(`Extracting units, topics, and PDF layout (${attempts * 2}s)...`);
                }
              }
              if (attempts >= 150) {
                clearInterval(interval);
                setShowUploadModal(false);
                setUploading(false);
                setUploadFile(null);
                setUploadTitle('');
                setUploadProgress(null);
                setSelectedGrade(uploadGrade);
                setSelectedSubject(uploadSubject);
                setDeleteNotification(`Textbook successfully uploaded and saved to database.`);
                setTimeout(() => setDeleteNotification(null), 6000);
                await fetchAllData();
              }
            }
          } catch {
            // Ignore poll error
          }
        }, 2000);
      } else {
        setShowUploadModal(false);
        setUploading(false);
        setSelectedGrade(uploadGrade);
        setSelectedSubject(uploadSubject);
        setDeleteNotification(`Textbook successfully uploaded and saved to database.`);
        setTimeout(() => setDeleteNotification(null), 6000);
        fetchAllData();
      }
    } catch (err: any) {
      console.error('Upload error:', err);
      setUploadError(err.message || 'Failed to upload and process PDF');
      setUploading(false);
      setUploadProgress(null);
    }
  };

  const handleDeleteBook = (book: Book) => {
    setDeleteConfirmBook(book);
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirmBook) return;
    const bookId = deleteConfirmBook.id;
    const bookTitle = deleteConfirmBook.title;
    setDeletingId(bookId);
    try {
      const res = await fetch(`/api/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'x-user-id': user?.id || 'usr-admin-1'
        }
      });
      if (res.ok) {
        setBooks(prev => prev.filter(b => b.id !== bookId));
        await deleteOfflineBook(bookId);
        setOfflineIds(prev => prev.filter(id => id !== bookId));
        setDeleteNotification(`"${bookTitle}" successfully deleted from library and database.`);
        setTimeout(() => setDeleteNotification(null), 5000);
      }
    } catch (e) {
      console.error('Failed to delete book:', e);
    } finally {
      setDeletingId(null);
      setDeleteConfirmBook(null);
    }
  };

  const handleClearAllDrafts = async () => {
    try {
      const res = await fetch('/api/books/clear-all', {
        method: 'POST',
        headers: {
          'x-user-id': user?.id || 'usr-admin-1'
        }
      });
      if (res.ok) {
        setBooks([]);
        setOfflineIds([]);
      }
    } catch (e) {
      console.error('Error clearing drafts:', e);
    }
  };

    useEffect(() => {
    if (user?.grade_id) {
      setSelectedGrade(user.grade_id);
    }
  }, [user?.grade_id]);

  const GRADE_SUBJECT_MAP: Record<string, string[]> = {
    'grade-9': ['subj-math', 'subj-phys', 'subj-chem', 'subj-bio', 'subj-eng', 'subj-geog', 'subj-hist', 'subj-amh', 'subj-civ', 'subj-it'],
    'grade-10': ['subj-math', 'subj-phys', 'subj-chem', 'subj-bio', 'subj-eng', 'subj-geog', 'subj-hist', 'subj-amh', 'subj-civ', 'subj-it'],
    'grade-11': ['subj-math', 'subj-phys', 'subj-bio', 'subj-chem', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-it', 'subj-econ', 'subj-hist', 'subj-geog', 'subj-agri'],
    'grade-11-natural': ['subj-math', 'subj-phys', 'subj-bio', 'subj-chem', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-it'],
    'grade-11-social': ['subj-math', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-econ', 'subj-hist', 'subj-geog', 'subj-agri', 'subj-it'],
    'grade-12': ['subj-math', 'subj-phys', 'subj-bio', 'subj-chem', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-it', 'subj-econ', 'subj-hist', 'subj-geog', 'subj-agri'],
    'grade-12-natural': ['subj-math', 'subj-phys', 'subj-bio', 'subj-chem', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-it'],
    'grade-12-social': ['subj-math', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-econ', 'subj-hist', 'subj-geog', 'subj-agri', 'subj-it']
  };

  const safeSubjects = Array.isArray(subjects) ? subjects : STATIC_SUBJECTS_CATALOG;
  const safeGrades = Array.isArray(grades) ? grades : STATIC_GRADES_CATALOG;
  const safeBooks = Array.isArray(books) ? books : STATIC_BOOKS_CATALOG;

  const filteredSubjects = safeSubjects.filter(s => {
    if (GRADE_SUBJECT_MAP[selectedGrade]) {
      return GRADE_SUBJECT_MAP[selectedGrade].includes(s.id);
    }
    return true;
  });

  const filteredBooks = safeBooks.filter(b => {
    if (b.id === 'book-12-nat-agri' || (b.grade_id === 'grade-12-natural' && b.subject_id === 'subj-agri')) {
      return false;
    }
    if (selectedGrade !== 'all') {
      if (selectedGrade === 'grade-11') {
        if (!['grade-11', 'grade-11-natural', 'grade-11-social'].includes(b.grade_id)) return false;
      } else if (selectedGrade === 'grade-12') {
        if (!['grade-12', 'grade-12-natural', 'grade-12-social'].includes(b.grade_id)) return false;
      } else {
        if (b.grade_id !== selectedGrade) return false;
      }

      // Check subject mapping if available
      if (GRADE_SUBJECT_MAP[selectedGrade] && !GRADE_SUBJECT_MAP[selectedGrade].includes(b.subject_id)) {
        return false;
      }
    }

    if (selectedSubject !== 'all') {
      const isAptMatch = (selectedSubject === 'subj-sat' || selectedSubject === 'subj-apt') &&
                         (b.subject_id === 'subj-sat' || b.subject_id === 'subj-apt');
      if (!isAptMatch && b.subject_id !== selectedSubject) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        b.title.toLowerCase().includes(q) ||
        (b.short_note && b.short_note.toLowerCase().includes(q)) ||
        (b.description && b.description.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header & Upload CTA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Authorized National Curriculum</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Secondary Textbook Library
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Read online or offline with page-level OCR, view authentic original PDFs, and study with textbook-aligned AI guidance.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {filteredBooks.length > 0 && (
            <button
              onClick={handleSaveAllOffline}
              disabled={savingAll}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
              title="Save all currently displayed textbooks for offline study"
            >
              {savingAll ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{saveAllProgress || 'Saving Textbooks...'}</span>
                </>
              ) : (
                <>
                  <HardDrive className="w-3.5 h-3.5" />
                  <span>Save All for Offline ({filteredBooks.filter(b => !offlineIds.includes(b.id)).length} pending)</span>
                </>
              )}
            </button>
          )}

          {user?.role === 'admin' && (
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
            >
              <UploadCloud className="w-4 h-4 text-emerald-400" />
              <span>Upload PDF Textbook</span>
            </button>
          )}

          {books.length > 0 && user?.role === 'admin' && (
            <button
              onClick={handleClearAllDrafts}
              className="px-3 py-2 bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/50 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
              title="Delete all draft textbooks from database"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Drafts</span>
            </button>
          )}
        </div>
      </div>

      {/* Offline Mode Indicator Banner */}
      {isOfflineMode && (
        <div className="bg-sky-950/80 border border-sky-600/50 rounded-2xl p-4 flex items-center justify-between text-sky-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-900/80 flex items-center justify-center border border-sky-700/50 text-sky-400 shrink-0">
              <WifiOff className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm flex items-center gap-2">
                <span>Offline Library Mode Active</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-sky-800 text-sky-200 font-semibold">
                  {offlineIds.length} Saved on Device
                </span>
              </div>
              <p className="text-xs text-sky-300/80 mt-0.5">
                You are currently offline. All cached textbooks, curriculum chapters, high-yield notes, and PDFs remain fully functional without internet access.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grade & Subject Filter Tabs */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-4 shadow-sm">
        {/* Grade Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-xs font-semibold text-slate-400 mr-2 whitespace-nowrap">Grade:</span>
          <button
            onClick={() => setSelectedGrade('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              selectedGrade === 'all'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Grades ({books.length} Books)
          </button>
          {grades.map(g => (
            <button
              key={g.id}
              onClick={() => setSelectedGrade(g.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                selectedGrade === g.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>

        {/* Subject Pills & Search Input */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-700/60">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-slate-400 mr-2 whitespace-nowrap">Subject:</span>
            <button
              onClick={() => setSelectedSubject('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                selectedSubject === 'all'
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              All Subjects
            </button>
            {filteredSubjects.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSubject(s.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                  selectedSubject === s.id
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search topics, titles, concepts..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Empty State: Prompt user to upload their PDF */}
      {filteredBooks.length === 0 && !loading && (
        <div className="bg-slate-900/90 border-2 border-dashed border-slate-700/80 rounded-3xl p-10 text-center space-y-5 max-w-xl mx-auto my-6">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto">
            <UploadCloud className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Ready for Your PDF Textbooks
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mx-auto">
              {user?.role === 'admin'
                ? 'Upload your PDF textbook to perform real OCR extraction and index pages into the database. Students can then read them and save them for offline study.'
                : 'Textbooks for this grade and subject are being processed by the administrator. Please check back shortly or select another grade above.'}
            </p>
          </div>
          {user?.role === 'admin' && (
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-lg inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Upload Your PDF Textbook</span>
            </button>
          )}
        </div>
      )}

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map(book => {
          const isStudentPaid = Boolean(
            user?.is_premium ||
            user?.role === 'admin' ||
            (user?.unlocked_grades && user.unlocked_grades.length > 0)
          );
          const canRead = user?.role === 'admin' || book.access_level === 'free' || book.is_free_preview || (isStudentPaid && hasGradeAccess(book.grade_id, book.subject_id, 'book'));
          const isOffline = offlineIds.includes(book.id);

          return (
            <div
              key={book.id}
              className="bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group relative"
            >
              <div>
                {/* Badges: Grade + Subject + Offline status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                      {book.grade_name || 'Curriculum'}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-700 text-slate-200">
                      {book.subject_name || 'General'}
                    </span>
                  </div>

                  {savingBookId === book.id ? (
                    <span className="text-[10px] px-2 py-0.5 bg-amber-950/80 text-amber-300 border border-amber-800/40 rounded-full font-bold flex items-center gap-1 animate-pulse">
                      <RefreshCw className="w-3 h-3 animate-spin text-amber-400" /> Saving
                    </span>
                  ) : isOffline ? (
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800/40 rounded-full font-bold flex items-center gap-1" title="100% saved on this device for offline reading">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Offline Ready
                    </span>
                  ) : (
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-700/40 rounded-full font-medium flex items-center gap-1" title="Online only - click Save Offline to cache to device">
                      <HardDrive className="w-2.5 h-2.5 text-slate-500" /> Online
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {book.title}
                </h3>

                {/* Metadata */}
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
                  <span>{book.edition || 'Official Edition'}</span>
                  <span>•</span>
                  <span>{book.total_pages || getAuthoritativeTotalPages(book.id, book.total_pages)} Pages</span>
                </div>

                {/* Short Note */}
                <div className="mt-3 p-3 bg-slate-900/90 border border-slate-700/60 rounded-xl relative group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Curriculum Scope
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigate('book-viewer', { bookId: book.id, initialMode: 'short_notes' })}
                        className="text-emerald-400 hover:text-emerald-300 font-semibold text-[11px] flex items-center gap-1 transition"
                        title="Open Short Notes for all sections"
                      >
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Short Notes →</span>
                      </button>
                      <button
                        onClick={() => onNavigate('book-viewer', { bookId: book.id, initialMode: 'detailed_short_notes' })}
                        className="text-purple-400 hover:text-purple-300 font-semibold text-[11px] flex items-center gap-1 transition"
                        title="Open Detailed Short Notes for all sections"
                      >
                        <BookMarked className="w-3 h-3" />
                        <span>Detailed Notes →</span>
                      </button>
                      {user?.role === 'admin' && (
                        <button
                          onClick={() => {
                            setEditingBook(book);
                            setEditShortNoteText(book.short_note || '');
                          }}
                          className="text-slate-400 hover:text-emerald-400 transition text-[11px] flex items-center gap-1"
                          title="Edit Short Note"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{book.short_note || 'Official secondary curriculum textbook.'}"
                  </p>
                </div>
              </div>

              {/* Action Buttons: Read, Replace, Offline */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-2">
                <div className="text-[11px] text-slate-400">
                  {canRead ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Unlocked
                    </span>
                  ) : (
                    <span className="text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Premium
                    </span>
                  )}
                </div>

                {canRead ? (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {(() => {
                      const savedPage = typeof window !== 'undefined' ? localStorage.getItem(`ethio_saved_page_${book.id}`) : null;
                      return (
                        <button
                          onClick={() => onNavigate('book-viewer', { bookId: book.id, initialMode: 'digital_textbook', initialPage: savedPage ? Number(savedPage) : 1 })}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-sm active:scale-95"
                          title={savedPage && Number(savedPage) > 1 ? `Resume reading at Page ${savedPage}` : "Read Enriched Digital Textbook"}
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{savedPage && Number(savedPage) > 1 ? `Resume (p. ${savedPage})` : 'Read'}</span>
                        </button>
                      );
                    })()}

                    {/* Ingest with AI / Replace Textbook Button */}
                    <button
                      onClick={() => {
                        setReplacingBook(book);
                        setReplaceFile(null);
                        setReplaceError(null);
                        setReplaceProgress(null);
                      }}
                      className="px-2.5 py-1 bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 text-amber-300 hover:text-amber-200 rounded-lg text-xs font-semibold transition flex items-center gap-1 active:scale-95 shadow-sm"
                      title="Ingest current textbook with AI or upload replacement PDF"
                    >
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span className="text-[11px] font-bold">Ingest with AI</span>
                    </button>

                    {/* Offline Save / Remove Toggle */}
                    {savingBookId === book.id ? (
                      <button
                        disabled
                        className="px-2 py-1 bg-amber-950/60 border border-amber-600/40 text-amber-300 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-wait"
                        title={savingStatus || 'Saving textbook...'}
                      >
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span className="text-[11px]">Saving...</span>
                      </button>
                    ) : isOffline ? (
                      <button
                        onClick={() => handleRemoveBookOffline(book.id, book.title)}
                        className="px-2 py-1 bg-emerald-950/80 hover:bg-rose-950/80 border border-emerald-700/50 hover:border-rose-700/50 text-emerald-300 hover:text-rose-300 rounded-lg text-xs font-semibold transition flex items-center gap-1 group/btn active:scale-95"
                        title="Saved offline on device. Click to remove from local storage."
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:hidden" />
                        <Trash2 className="w-3.5 h-3.5 text-rose-400 hidden group-hover/btn:block" />
                        <span className="text-[11px] group-hover/btn:hidden">Saved</span>
                        <span className="text-[11px] hidden group-hover/btn:inline">Remove</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSaveBookOffline(book)}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-600 text-slate-300 hover:text-emerald-400 rounded-lg text-xs font-semibold transition flex items-center gap-1 active:scale-95"
                        title="Save complete textbook, chapters, and short notes for offline reading"
                      >
                        <HardDrive className="w-3 h-3" />
                        <span className="text-[11px]">Offline</span>
                      </button>
                    )}

                    <button
                      onClick={() => handleDeleteBook(book)}
                      disabled={deletingId === book.id}
                      className="p-1 hover:bg-rose-950/50 text-slate-500 hover:text-rose-400 rounded-lg transition active:scale-95"
                      title="Delete this book from library"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap shrink-0">
                    <button
                      onClick={() => onNavigate('book-viewer', { bookId: book.id, initialMode: 'short_notes' })}
                      className="px-2.5 py-1.5 bg-purple-950/80 hover:bg-purple-900 border border-purple-700/60 text-purple-300 rounded-xl text-xs font-semibold transition flex items-center gap-1 active:scale-95"
                      title="Preview Unit 1 Notes"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => {
                        if (isStudentPaid) {
                          onNavigate('payment', { upgrade: true });
                        } else {
                          onNavigate('payment', { targetGrade: book.grade_id });
                        }
                      }}
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow active:scale-95"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{isStudentPaid ? 'Unlock (100 ETB)' : 'Unlock (200 ETB)'}</span>
                    </button>
                    <button
                      onClick={() => handleDeleteBook(book)}
                      disabled={deletingId === book.id}
                      className="p-1.5 hover:bg-rose-950/50 text-slate-500 hover:text-rose-400 rounded-lg transition active:scale-95"
                      title="Delete this book from library"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Upload PDF Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-emerald-400" />
                <span>Upload PDF Textbook</span>
              </h3>
              <button
                onClick={() => !uploading && setShowUploadModal(false)}
                disabled={uploading}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {uploadError && (
              <div className="p-3 bg-rose-950/60 border border-rose-800/60 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{uploadError}</span>
              </div>
            )}

            <form onSubmit={handleUploadSubmit} className="space-y-4">
              {/* File Dropzone */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  PDF Document
                </label>
                <div className="border-2 border-dashed border-slate-700 hover:border-emerald-500 rounded-xl p-5 text-center transition bg-slate-800/50">
                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    id="pdf-file-input"
                    className="hidden"
                    onChange={e => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                  />
                  <label htmlFor="pdf-file-input" className="cursor-pointer block space-y-2">
                    <FileText className="w-8 h-8 text-emerald-400 mx-auto" />
                    {uploadFile ? (
                      <div>
                        <div className="text-xs font-bold text-emerald-300">{uploadFile.name}</div>
                        <div className="text-[11px] text-slate-400">{(uploadFile.size / 1024 / 1024).toFixed(2)} MB • Click to replace</div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-xs font-bold text-white">Click to browse or drop your PDF here</div>
                        <div className="text-[11px] text-slate-400">PDF documents up to 100MB supported</div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Textbook Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grade 10 Chemistry Student Textbook"
                  value={uploadTitle}
                  onChange={e => setUploadTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              {/* Grade & Subject Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Grade</label>
                  <select
                    value={uploadGrade}
                    onChange={e => setUploadGrade(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {safeGrades.filter(g => g.id !== 'grade-11' && g.id !== 'grade-12').map(g => (
                      <option key={g.id} value={g.id}>{g.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                  <select
                    value={uploadSubject}
                    onChange={e => setUploadSubject(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {safeSubjects.filter(s => s.id !== 'subj-apt').map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Author / Publisher */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Author / Curriculum Body</label>
                <input
                  type="text"
                  value={uploadAuthor}
                  onChange={e => setUploadAuthor(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Short Note */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Curriculum Note / Scope</label>
                <textarea
                  rows={2}
                  placeholder="1-2 sentences summarizing topics covered..."
                  value={uploadShortNote}
                  onChange={e => setUploadShortNote(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Ingestion status notice */}
              {uploadProgress && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-xl text-xs text-emerald-300 flex items-center gap-2.5 animate-pulse">
                  <RefreshCw className="w-4 h-4 animate-spin shrink-0" />
                  <span>{uploadProgress}</span>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  disabled={uploading}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow"
                >
                  {uploading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Ingesting PDF...</span>
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-3.5 h-3.5" />
                      <span>Upload & Extract OCR</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Replace & Deep Re-Index Textbook Modal */}
      {replacingBook && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Replace & Ingest with AI</span>
              </h3>
              <button
                onClick={() => setReplacingBook(null)}
                disabled={replaceUploading}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3.5 bg-amber-950/40 border border-amber-800/50 rounded-xl text-xs space-y-2 text-amber-200">
              <div className="font-bold flex items-center gap-1.5 text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Full Automated AI Textbook Pipeline</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Replacing <strong>{replacingBook.title}</strong> will clear previous data, extract authentic page numbers and TOC units/topics directly from the PDF, perform verbatim OCR with KaTeX equations, extract tables and diagrams, synthesize rich AI Short Notes & In-Depth Detailed Notes for every topic, generate flashcards, and update <strong>Practice by Topic</strong>. All data is saved permanently.
              </p>
            </div>

            <div className="space-y-4">
              {/* Error Message */}
              {replaceError && (
                <div className="p-3 bg-rose-950/80 border border-rose-800 rounded-xl text-xs text-rose-300">
                  {replaceError}
                </div>
              )}

              {/* Progress status */}
              {replaceProgress && (
                <div className="p-3 bg-indigo-950/60 border border-indigo-800/60 rounded-xl text-xs text-indigo-200 flex items-center gap-2.5 animate-pulse">
                  <RefreshCw className="w-4 h-4 animate-spin shrink-0 text-amber-400" />
                  <span>{replaceProgress}</span>
                </div>
              )}

              {/* Option 1: Direct 1-Click AI Ingestion for current textbook */}
              <div className="p-4 bg-slate-800/80 border border-slate-700/80 rounded-xl space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Option 1: Ingest Current Stored PDF</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                    Instant (No Upload Needed)
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Processes the verified PDF already stored on the server for <strong>{replacingBook.title}</strong>. Extracts all pages, KaTeX formulas, units, topics, AI short & detailed notes with figures and tables, and flashcards.
                </p>
                <button
                  type="button"
                  onClick={handleDirectReprocess}
                  disabled={replaceUploading}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 active:scale-98 disabled:opacity-50"
                >
                  {replaceUploading && !replaceFile ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Ingesting with AI Pipeline...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>Deep Ingest Current Textbook with AI</span>
                    </>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-px bg-slate-800 flex-1" />
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">OR Upload New PDF</span>
                <div className="h-px bg-slate-800 flex-1" />
              </div>

              {/* Option 2: Upload new replacement PDF */}
              <form onSubmit={handleReplaceSubmit} className="space-y-3">
                {/* File Dropzone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Option 2: Replace with New Textbook PDF
                  </label>
                  <div className="border-2 border-dashed border-slate-700 hover:border-amber-500 rounded-xl p-3.5 text-center bg-slate-800/40 transition">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={e => {
                        if (e.target.files && e.target.files[0]) {
                          setReplaceFile(e.target.files[0]);
                          setReplaceError(null);
                        }
                      }}
                      className="hidden"
                      id="replace-pdf-file-input"
                    />
                    <label htmlFor="replace-pdf-file-input" className="cursor-pointer block space-y-1.5">
                      <FileText className="w-7 h-7 text-amber-400 mx-auto" />
                      {replaceFile ? (
                        <div>
                          <div className="text-xs font-bold text-amber-300">{replaceFile.name}</div>
                          <div className="text-[11px] text-slate-400">{(replaceFile.size / 1024 / 1024).toFixed(2)} MB • Click to change file</div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-xs font-bold text-white">Click to browse or drop new PDF</div>
                          <div className="text-[11px] text-slate-400">PDF documents up to 100MB supported</div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setReplacingBook(null)}
                    disabled={replaceUploading}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={replaceUploading || !replaceFile}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow"
                  >
                    {replaceUploading && replaceFile ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Uploading & Ingesting with AI...</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-3.5 h-3.5 text-amber-200" />
                        <span>Upload & Ingest with AI</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Admin Edit Short Note Modal */}
      {editingBook && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-emerald-400" />
                <span>Edit Curriculum Scope Note</span>
              </h3>
              <button
                onClick={() => setEditingBook(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <p className="text-xs text-slate-400 mb-2">
                Short note for: <strong>{editingBook.title}</strong>
              </p>
              <textarea
                rows={4}
                value={editShortNoteText}
                onChange={e => setEditShortNoteText(e.target.value)}
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setEditingBook(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveShortNote}
                disabled={savingNote}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{savingNote ? 'Saving...' : 'Save Note'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* In-App Delete Confirmation Modal (Safe for Sandboxed Environments) */}
      {deleteConfirmBook && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-rose-500/40 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl text-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-white">Delete Textbook</h3>
              <p className="text-xs text-slate-300 font-semibold">{deleteConfirmBook.title}</p>
              <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700 mt-1">
                {deleteConfirmBook.grade_name || 'Curriculum'} • {deleteConfirmBook.subject_name || 'Subject'}
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center leading-relaxed">
              Are you sure you want to delete this specific textbook? This removes all extracted pages, AI short and detailed notes, and device offline storage for this textbook. Other textbooks in the curriculum remain completely untouched.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmBook(null)}
                disabled={deletingId === deleteConfirmBook.id}
                className="flex-1 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={deletingId === deleteConfirmBook.id}
                className="flex-1 px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50"
              >
                {deletingId === deleteConfirmBook.id ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Textbook</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Delete Notification Toast */}
      {deleteNotification && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-950 border border-emerald-500/50 rounded-2xl shadow-2xl text-emerald-200 text-xs font-semibold flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{deleteNotification}</span>
        </div>
      )}
    </div>
  );
};
