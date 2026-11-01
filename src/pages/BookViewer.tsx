import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ZoomIn,
  ZoomOut,
  ArrowLeft,
  Bookmark,
  Sparkles,
  Download,
  FileText,
  Eye,
  CheckCircle2,
  HardDrive,
  Copy,
  Check,
  Type,
  Sun,
  Moon,
  Coffee,
  ListOrdered,
  Share2,
  Upload,
  ExternalLink,
  AlertCircle,
  BookA
} from 'lucide-react';
import { Book, BookChapter, BookPage } from '../types';
import { isBookOffline, savePdfOffline, getOfflinePdfUrl, saveAllBookShortNotesOffline, getOfflineBookFull, downloadAndSaveBookOffline, deleteOfflineBook, getOfflineBookPage, saveOfflineBookPage } from '../utils/offlineStorage';
import { PdfCanvasViewer } from '../components/PdfCanvasViewer';
import { ChapterShortNoteViewer } from '../components/ChapterShortNoteViewer';
import { DetailedShortNoteViewer } from '../components/DetailedShortNoteViewer';
import { DigitalTextbookViewer } from '../components/DigitalTextbookViewer';
import { EnglishGrammarVocabularyViewer } from '../components/EnglishGrammarVocabularyViewer';
import { uploadLargeBookPdf } from '../utils/uploader';
import { getAuthoritativeTotalPages } from '../data/officialTextbooksRegistry';
import { getEmbeddedBookPage } from '../data/embeddedPagesFallback';
import { getStaticBookById } from '../data/staticBooksCatalog';

interface BookViewerProps {
  bookId: string;
  initialPage?: number;
  initialMode?: 'digital_textbook' | 'short_notes' | 'detailed_short_notes' | 'grammar_vocab' | 'pdf';
  highlightQuery?: string;
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const BookViewer: React.FC<BookViewerProps> = ({
  bookId,
  initialPage,
  initialMode,
  highlightQuery,
  onNavigate
}) => {
  const { user } = useAuth();

  // Persistent reading page and mode resolution from localStorage
  const savedPageStr = typeof window !== 'undefined' ? localStorage.getItem(`ethio_saved_page_${bookId}`) : null;
  const resolvedInitialPage = (initialPage && initialPage > 1) 
    ? initialPage 
    : (savedPageStr ? parseInt(savedPageStr, 10) || 1 : 1);

  const savedModeStr = typeof window !== 'undefined' ? localStorage.getItem(`ethio_saved_mode_${bookId}`) as any : null;
  const resolvedInitialMode = initialMode || savedModeStr || 'digital_textbook';

  const [book, setBook] = useState<Book | null>(null);
  const [chapters, setChapters] = useState<BookChapter[]>([]);
  const [currentPageData, setCurrentPageData] = useState<BookPage | null>(null);
  const [pageNumberInput, setPageNumberInput] = useState<string>(resolvedInitialPage.toString());
  const [printedPage, setPrintedPage] = useState<number>(resolvedInitialPage);
  const [pdfPageIndex, setPdfPageIndex] = useState<number>(resolvedInitialPage);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'digital_textbook' | 'short_notes' | 'detailed_short_notes' | 'grammar_vocab' | 'pdf'>(resolvedInitialMode);

  const handleSetViewMode = (mode: 'digital_textbook' | 'short_notes' | 'detailed_short_notes' | 'grammar_vocab' | 'pdf') => {
    setViewMode(mode);
    try {
      localStorage.setItem(`ethio_saved_mode_${bookId}`, mode);
    } catch {}
  };
  
  // PDF Upload modal state
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadPercent, setUploadPercent] = useState<number>(0);
  const [uploadProgressText, setUploadProgressText] = useState<string | null>(null);
  const [uploadMsg, setUploadMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Reader customization: Font, Size, Theme
  const [readerTheme, setReaderTheme] = useState<'light' | 'sepia' | 'dark'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [copied, setCopied] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [selectedTopicTitle, setSelectedTopicTitle] = useState<string>('');
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);

  // Offline status
  const [isOfflineSaved, setIsOfflineSaved] = useState(false);
  const [isSavingOffline, setIsSavingOffline] = useState(false);
  const [offlinePdfSrc, setOfflinePdfSrc] = useState<string | null>(null);

  const authoritativeTotalPages = getAuthoritativeTotalPages(bookId, book?.total_pages);

  useEffect(() => {
    isBookOffline(bookId).then(saved => {
      setIsOfflineSaved(saved);
      if (saved) {
        getOfflinePdfUrl(bookId).then(url => setOfflinePdfSrc(url));
      }
    });
  }, [bookId]);

  const handleToggleOffline = async () => {
    if (!book) return;
    if (isOfflineSaved) {
      if (confirm(`Remove "${book.title}" from offline storage on this device?`)) {
        await deleteOfflineBook(bookId);
        setIsOfflineSaved(false);
        setOfflinePdfSrc(null);
      }
      return;
    }
    setIsSavingOffline(true);
    try {
      const success = await downloadAndSaveBookOffline(book, user?.id);
      if (success) {
        setIsOfflineSaved(true);
        const url = await getOfflinePdfUrl(bookId);
        if (url) setOfflinePdfSrc(url);
      }
    } catch (e) {
      console.warn('Could not save book for offline reading:', e);
    } finally {
      setIsSavingOffline(false);
    }
  };

  const handleUploadReplacementPdf = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return;

    setUploading(true);
    setUploadMsg(null);
    setUploadPercent(0);
    setUploadProgressText(`Preparing ${uploadFile.name}...`);

    try {
      await deleteOfflineBook(bookId).catch(() => {});
      setIsOfflineSaved(false);
      setOfflinePdfSrc(null);
      const data = await uploadLargeBookPdf({
        file: uploadFile,
        chunkUrl: `/api/books/${bookId}/upload-pdf-chunk`,
        directUrl: `/api/books/${bookId}/upload-pdf`,
        userId: user?.id || '',
        onProgress: (percent, statusText) => {
          setUploadPercent(percent);
          setUploadProgressText(statusText);
        }
      });
      await deleteOfflineBook(bookId).catch(() => {});

      setUploadMsg({ type: 'success', text: data.message || 'PDF uploaded! Recreating units and synthesizing in-depth short notes...' });
      setTimeout(() => {
        setIsUploadModalOpen(false);
        setUploadFile(null);
        setUploadMsg(null);
        setUploadProgressText(null);
        setUploadPercent(0);
        fetchPage(1);

        // Poll to refresh recreated units and chapters
        let pollCount = 0;
        const interval = setInterval(() => {
          pollCount++;
          fetch(`/api/books/${bookId}`, {
            headers: { 'x-user-id': user?.id || '' }
          })
            .then(r => (r.ok ? r.json() : null))
            .then(d => {
              if (d?.book) {
                setBook(d.book);
                if (d.book.status === 'READY') {
                  clearInterval(interval);
                  fetchPage(1);
                }
              }
              if (d?.chapters && d.chapters.length > 0) {
                setChapters(d.chapters);
              }
            })
            .catch(() => {});
          if (pollCount >= 150) clearInterval(interval);
        }, 2000);
      }, 1200);
    } catch (err: any) {
      setUploadMsg({ type: 'error', text: err.message || 'Error uploading PDF file' });
    } finally {
      setUploading(false);
    }
  };

  const fetchPage = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      // 1. If navigator is offline, directly load from IndexedDB
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        const cachedPage = await getOfflineBookPage(bookId, page);
        if (cachedPage) {
          setCurrentPageData(cachedPage);
          setPrintedPage(cachedPage.printed_page_number || page);
          setPdfPageIndex(cachedPage.pdf_page_index || page);
          setPageNumberInput((cachedPage.printed_page_number || page).toString());
          setLoading(false);
          return;
        }
      }

      const res = await fetch(`/api/books/${bookId}/page/${page}`, {
        headers: { 'x-user-id': user?.id || '' }
      });
      if (!res.ok) {
        // Fallback to offline cached page or embedded static page
        let pageItem = await getOfflineBookPage(bookId, page);
        if (!pageItem) {
          pageItem = getEmbeddedBookPage(bookId, page);
        }
        if (pageItem) {
          if (!book) setBook(getStaticBookById(bookId) || null);
          setCurrentPageData(pageItem);
          setPrintedPage(pageItem.printed_page_number || page);
          setPdfPageIndex(pageItem.pdf_page_index || page);
          setPageNumberInput((pageItem.printed_page_number || page).toString());
          setLoading(false);
          return;
        }
        if (res.status === 403) {
          setError('PREMIUM_REQUIRED');
        } else {
          setError('Failed to load textbook page');
        }
        return;
      }
      const data = await res.json();
      setBook(data.book);
      setCurrentPageData(data.page);
      setPrintedPage(data.printed_page_number);
      setPdfPageIndex(data.pdf_page_index || data.printed_page_number);
      setPageNumberInput(data.printed_page_number.toString());
      if (data.page) {
        saveOfflineBookPage(bookId, data.printed_page_number, data.page).catch(() => {});
      }
      try {
        localStorage.setItem(`ethio_saved_page_${bookId}`, data.printed_page_number.toString());
        localStorage.setItem('ethio_last_viewed_book', bookId);
        localStorage.setItem('ethio_last_viewed_page', data.printed_page_number.toString());
      } catch {}
    } catch (err) {
      console.warn('Network error loading page, checking offline cache & embedded fallback:', err);
      let pageItem = await getOfflineBookPage(bookId, page);
      if (!pageItem) {
        pageItem = getEmbeddedBookPage(bookId, page);
      }
      if (pageItem) {
        if (!book) setBook(getStaticBookById(bookId) || null);
        setCurrentPageData(pageItem);
        setPrintedPage(pageItem.printed_page_number || page);
        setPdfPageIndex(pageItem.pdf_page_index || page);
        setPageNumberInput((pageItem.printed_page_number || page).toString());
        setError(null);
      } else {
        setError('Connection error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch(`/api/books/${bookId}`, {
      headers: { 'x-user-id': user?.id || '' }
    })
      .then(res => (res.ok ? res.json() : null))
      .then(async (data) => {
        if (data?.book) {
          setBook(data.book);
          if (typeof data.book.total_pages === 'number' && data.book.total_pages > 0) {
            try {
              localStorage.setItem('ethio_book_pages_' + bookId, String(data.book.total_pages));
            } catch {}
          }
        }
        if (data?.chapters && data.chapters.length > 0) {
          setChapters(data.chapters);
        } else {
          const offlineData = await getOfflineBookFull(bookId);
          if (offlineData?.chapters && offlineData.chapters.length > 0) {
            setChapters(offlineData.chapters);
          }
        }
      })
      .catch(async (err) => {
        console.warn('Failed to load book chapters online, trying offline storage:', err);
        const offlineData = await getOfflineBookFull(bookId);
        if (offlineData) {
          if (offlineData.book) setBook(offlineData.book);
          if (offlineData.chapters) setChapters(offlineData.chapters);
        } else {
          const sb = getStaticBookById(bookId);
          if (sb) setBook(sb);
        }
      });

    fetchPage(resolvedInitialPage);
  }, [bookId, initialPage, user?.id]);

  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault();
    const target = parseInt(pageNumberInput, 10);
    if (!isNaN(target) && target >= 1 && target <= authoritativeTotalPages) {
      fetchPage(target);
    }
  };

  const handleCopyPage = () => {
    const text = currentPageData?.final_text || currentPageData?.extracted_text || '';
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentChapter = chapters.find(
    c => printedPage >= c.start_page && printedPage <= c.end_page
  ) || chapters.find(
    c => c.id === currentPageData?.chapter_id
  ) || (selectedChapterId ? chapters.find(c => c.id === selectedChapterId) : null) || chapters[0];

  const handleSelectTopic = (topicTitle: string) => {
    setSelectedTopicTitle(topicTitle);
    if (!topicTitle) return;
    const normTarget = topicTitle.trim().toLowerCase();
    for (const chap of [currentChapter, ...chapters].filter(Boolean)) {
      const match = (chap?.topics || []).find(
        (t: any) =>
          t.title?.trim().toLowerCase() === normTarget ||
          `${t.topic_number} ${t.title}`.trim().toLowerCase() === normTarget ||
          normTarget.includes(t.title?.trim().toLowerCase())
      );
      if (match && match.start_page) {
        setSelectedChapterId(chap!.id);
        setPrintedPage(match.start_page);
        fetchPage(match.start_page);
        break;
      }
    }
  };

  // Theme styling for the paper
  const themeStyles = {
    light: {
      canvas: 'bg-slate-900/60',
      paper: 'bg-white text-slate-900 border-slate-200/80 shadow-2xl',
      headerBorder: 'border-slate-800 text-slate-600',
      heading: 'text-slate-950',
      bodyText: 'text-slate-800',
      callout: 'bg-slate-50 border-slate-200 text-slate-700',
      ocrCard: 'bg-indigo-50/70 border-indigo-200 text-indigo-950',
      footerBorder: 'border-slate-200 text-slate-500'
    },
    sepia: {
      canvas: 'bg-[#1e1b18]',
      paper: 'bg-[#fcf7ed] text-[#433422] border-[#e6dcce] shadow-2xl',
      headerBorder: 'border-[#433422] text-[#786650]',
      heading: 'text-[#2b1f12]',
      bodyText: 'text-[#3d2f20]',
      callout: 'bg-[#f4ebd9] border-[#dcd0bc] text-[#4d3d2c]',
      ocrCard: 'bg-[#efe3cb] border-[#cfbea4] text-[#362719]',
      footerBorder: 'border-[#e6dcce] text-[#786650]'
    },
    dark: {
      canvas: 'bg-slate-950',
      paper: 'bg-slate-900 text-slate-100 border-slate-800 shadow-2xl',
      headerBorder: 'border-slate-700 text-slate-400',
      heading: 'text-white',
      bodyText: 'text-slate-200',
      callout: 'bg-slate-800/80 border-slate-700 text-slate-300',
      ocrCard: 'bg-indigo-950/50 border-indigo-800/60 text-indigo-200',
      footerBorder: 'border-slate-800 text-slate-500'
    }
  }[readerTheme];

  const fontClass = fontFamily === 'serif' ? 'font-serif' : 'font-sans';
  const sizeClass = {
    sm: 'text-xs leading-relaxed',
    base: 'text-sm leading-relaxed',
    lg: 'text-base leading-loose'
  }[fontSize];

  if (error === 'PREMIUM_REQUIRED') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/30">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-white">Full Textbook Reader is a Premium Feature</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Upgrade your EthioLearn account to unlock full offline textbook access with structured chapter notes and OCR image indexing.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => onNavigate('library')}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold"
          >
            Back to Library
          </button>
          {user?.is_premium || (user?.unlocked_grades && user.unlocked_grades.length > 0) ? (
            <button
              onClick={() => onNavigate('payment', { upgrade: true })}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold shadow-md"
            >
              Unlock All Grades (100 ETB)
            </button>
          ) : (
            <button
              onClick={() => onNavigate('payment', { targetGrade: book?.grade_id })}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold shadow-md"
            >
              Unlock This Grade (200 ETB)
            </button>
          )}
        </div>
      </div>
    );
  }

  // Format the extracted text into paragraphs
  const rawContent = currentPageData?.final_text || currentPageData?.extracted_text || '';
  const contentParagraphs = rawContent
    ? rawContent.split(/\n\n+/).filter(p => p.trim().length > 0)
    : [
        'Curriculum unit introduction and theoretical foundations. Students will explore key principles, worked examples, and review exercises aligned with the Ethiopian National Curriculum standards.'
      ];

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-950 text-slate-100 overflow-hidden">
      {/* Top Toolbar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('library')}
            className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
            title="Back to Library"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white tracking-tight line-clamp-1">
                {book?.title || 'Ethiopian Secondary Textbook'}
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800/40 rounded font-semibold">
                {book?.grade_name} • {book?.subject_name}
              </span>
              {isOfflineSaved && (
                <span className="text-[10px] px-2 py-0.5 bg-sky-950 text-sky-400 border border-sky-800/40 rounded font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Offline Ready
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
              <span>
                Textbook Page <strong className="text-emerald-400">{printedPage}</strong> of {Math.max(1, authoritativeTotalPages - (book?.page_offset || 0))}
                {(book?.page_offset || 0) > 0 && (
                  <span className="text-slate-500 ml-1">
                    (PDF p. {Math.min(authoritativeTotalPages, printedPage + (book?.page_offset || 0))}/{authoritativeTotalPages})
                  </span>
                )}
              </span>
              <span className="text-slate-600">|</span>
              <span className="hidden sm:inline">Unit: <span className="text-slate-300">{currentChapter?.chapter_title || 'General Curriculum'}</span></span>
            </div>
          </div>
        </div>

        {/* Action Controls & Navigation */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Table of Contents Toggle */}
          <button
            onClick={() => setShowToc(!showToc)}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition ${
              showToc
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
            title="Table of Contents & Units Drawer"
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Units & Topics</span>
          </button>

          {/* Direct Unit Dropdown Selector */}
          {chapters.length > 0 && (
            <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs">
              <span className="text-slate-400 text-[11px] font-semibold hidden lg:inline">Unit:</span>
              <select
                value={currentChapter?.id || ''}
                onChange={e => {
                  const target = chapters.find(c => c.id === e.target.value);
                  if (target) {
                    setSelectedChapterId(target.id);
                    setSelectedTopicTitle('');
                    setPrintedPage(target.start_page);
                    fetchPage(target.start_page);
                  }
                }}
                className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer max-w-[150px] truncate"
                title="Select Curriculum Unit"
              >
                {chapters.map(c => (
                  <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                    Unit {c.chapter_number}: {c.chapter_title.replace(/^Unit\s*\d+:\s*/i, '')}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Direct Topic Dropdown Selector */}
          {currentChapter?.topics && currentChapter.topics.length > 0 && (
            <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs">
              <span className="text-amber-400 text-[11px] font-semibold hidden lg:inline">Topic:</span>
              <select
                value={selectedTopicTitle || ''}
                onChange={e => {
                  const val = e.target.value;
                  setSelectedTopicTitle(val);
                  if (val) {
                    const match = currentChapter.topics?.find(t => t.title === val);
                    if (match && match.start_page) {
                      setPrintedPage(match.start_page);
                      fetchPage(match.start_page);
                    }
                  } else {
                    setPrintedPage(currentChapter.start_page);
                    fetchPage(currentChapter.start_page);
                  }
                }}
                className="bg-transparent text-amber-300 text-xs font-semibold focus:outline-none cursor-pointer max-w-[170px] truncate"
                title="Select Specific Topic"
              >
                <option value="" className="bg-slate-900 text-slate-300">
                  All Topics (Complete Unit)
                </option>
                {currentChapter.topics.map(t => (
                  <option key={t.id} value={t.title} className="bg-slate-900 text-amber-200">
                    {t.topic_number} {t.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Reader Appearance Controls */}
          {viewMode === 'short_notes' && (
            <div className="hidden md:flex items-center bg-slate-800 border border-slate-700 rounded-lg p-0.5 gap-1">
              {/* Theme Buttons */}
              <button
                onClick={() => setReaderTheme('light')}
                className={`p-1 rounded ${readerTheme === 'light' ? 'bg-white text-slate-900 shadow' : 'text-slate-400 hover:text-white'}`}
                title="Light Paper"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReaderTheme('sepia')}
                className={`p-1 rounded ${readerTheme === 'sepia' ? 'bg-[#fcf7ed] text-[#433422] shadow' : 'text-slate-400 hover:text-white'}`}
                title="Warm Paper"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReaderTheme('dark')}
                className={`p-1 rounded ${readerTheme === 'dark' ? 'bg-slate-900 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                title="Dark Mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>

              <div className="w-[1px] h-3 bg-slate-700 mx-0.5" />

              {/* Font Family */}
              <button
                onClick={() => setFontFamily(prev => (prev === 'serif' ? 'sans' : 'serif'))}
                className="px-1.5 py-0.5 text-xs text-slate-300 hover:text-white rounded"
                title="Toggle Serif / Sans font"
              >
                {fontFamily === 'serif' ? 'Serif' : 'Sans'}
              </button>

              <div className="w-[1px] h-3 bg-slate-700 mx-0.5" />

              {/* Font Size */}
              <button
                onClick={() => setFontSize(prev => (prev === 'sm' ? 'base' : prev === 'base' ? 'lg' : 'sm'))}
                className="px-1.5 py-0.5 text-xs text-slate-300 hover:text-white rounded font-mono"
                title="Change font size"
              >
                {fontSize === 'sm' ? 'A' : fontSize === 'base' ? 'A+' : 'A++'}
              </button>
            </div>
          )}

          {/* Page Navigator */}
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg p-0.5">
            <button
              onClick={() => fetchPage(Math.max(1, printedPage - 1))}
              disabled={printedPage <= 1}
              className="p-1 hover:bg-slate-700 rounded text-slate-300 disabled:opacity-40"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <form onSubmit={handlePageJump} className="flex items-center px-1">
              <input
                type="text"
                value={pageNumberInput}
                onChange={e => setPageNumberInput(e.target.value)}
                className="w-10 bg-slate-900 text-center text-xs text-white rounded py-0.5 border border-slate-700 focus:outline-none focus:border-emerald-500"
              />
              <span className="text-xs text-slate-400 mx-1">/ {authoritativeTotalPages}</span>
            </form>

            <button
              onClick={() => fetchPage(Math.min(authoritativeTotalPages, printedPage + 1))}
              disabled={printedPage >= authoritativeTotalPages}
              className="p-1 hover:bg-slate-700 rounded text-slate-300 disabled:opacity-40"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* View Mode Toggle: Digital Textbook Content vs AI Short Notes vs Detailed Notes vs Grammar & Vocab */}
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl p-0.5 shadow-sm">
            <button
              onClick={() => handleSetViewMode('digital_textbook')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                viewMode === 'digital_textbook'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Full Digital Textbook with KaTeX equations, tables, schematics, and in-depth AI explanations"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-300" />
              <span>Digital Textbook</span>
            </button>
            <button
              onClick={() => handleSetViewMode('short_notes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                viewMode === 'short_notes'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Concise AI-Assisted Short Notes with core concepts, formulas, and EUEE exam traps"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Short Notes</span>
            </button>
            <button
              onClick={() => handleSetViewMode('detailed_short_notes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                viewMode === 'detailed_short_notes'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="In-depth comprehensive knowledge and advanced explanations for each topic in great detail"
            >
              <FileText className="w-3.5 h-3.5 text-purple-300" />
              <span>Detailed Notes</span>
            </button>
            {(book?.subject_id === 'subj-eng' || book?.subject_name?.toLowerCase().includes('english') || bookId.includes('eng')) && (
              <button
                onClick={() => handleSetViewMode('grammar_vocab')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  viewMode === 'grammar_vocab'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Grouped Grammar Rules, Vocabulary Bank, Reading Blueprints & EUEE Exam Traps"
              >
                <BookA className="w-3.5 h-3.5 text-blue-300" />
                <span>Grammar & Vocab</span>
              </button>
            )}
          </div>

          {/* Offline Save Toggle */}
          <button
            onClick={handleToggleOffline}
            disabled={isSavingOffline}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition ${
              isOfflineSaved
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-700/60 hover:bg-rose-950/80 hover:text-rose-300 hover:border-rose-700/60'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-emerald-600 hover:text-white'
            }`}
            title={isOfflineSaved ? 'Textbook is cached 100% offline. Click to remove.' : 'Save textbook, chapters, notes, and PDF locally for offline use'}
          >
            {isSavingOffline ? (
              <>
                <HardDrive className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                <span>Saving...</span>
              </>
            ) : isOfflineSaved ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Offline Ready</span>
              </>
            ) : (
              <>
                <HardDrive className="w-3.5 h-3.5 text-slate-400" />
                <span>Save Offline</span>
              </>
            )}
          </button>

          {/* Upload / Replace with My PDF */}
          {user?.role === 'admin' && (
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition bg-emerald-950/80 text-emerald-300 border-emerald-800/60 hover:bg-emerald-900"
              title="Upload your PDF file for this textbook"
            >
              <Upload className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Upload PDF</span>
            </button>
          )}

          {/* Download Original PDF */}
          <a
            href={offlinePdfSrc || `/api/books/${bookId}/pdf?download=true`}
            download={`${book?.title || 'textbook'}.pdf`}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 transition"
            title="Download PDF"
          >
            <Download className="w-4 h-4 text-emerald-400" />
          </a>
        </div>
      </div>

      {/* RAG Context Banner if student navigated directly from AI tutor citation */}
      {highlightQuery && (
        <div className="bg-emerald-950/90 border-b border-emerald-800/60 px-4 py-2 flex items-center justify-between text-xs text-emerald-200 shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>
              Navigated from AI Citation: <strong>"{highlightQuery}"</strong>
            </span>
          </div>
          <button
            onClick={() => onNavigate('ai-tutor')}
            className="px-2.5 py-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded font-bold text-[11px] transition"
          >
            Back to AI Tutor
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Table of Contents Drawer */}
        {showToc && (
          <div className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 z-10">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <ListOrdered className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Units & Topics</span>
                </span>
                <p className="text-[10px] text-slate-400 mt-0.5">Ethiopian Curriculum Textbook Structure</p>
              </div>
              <button onClick={() => setShowToc(false)} className="text-slate-400 hover:text-white text-xs px-2 py-1 hover:bg-slate-800 rounded">
                Close
              </button>
            </div>
            <div className="overflow-y-auto p-3 space-y-2">
              {chapters.length === 0 ? (
                <div className="text-xs text-slate-500 p-2 italic">Curriculum units extracted during ingestion.</div>
              ) : (
                chapters.map(c => {
                  const isActive = printedPage >= c.start_page && printedPage <= c.end_page;
                  const isExpanded = expandedChapterId === c.id || (expandedChapterId === null && isActive);
                  const hasTopics = c.topics && c.topics.length > 0;

                  return (
                    <div
                      key={c.id}
                      className={`rounded-xl border transition overflow-hidden ${
                        isActive
                          ? 'border-emerald-700/60 bg-slate-950/60'
                          : 'border-slate-800/80 bg-slate-950/30'
                      }`}
                    >
                      {/* Chapter / Unit Header */}
                      <div className="p-2.5 flex items-start justify-between gap-2">
                        <button
                          onClick={() => {
                            setSelectedChapterId(c.id);
                            setSelectedTopicTitle('');
                            setPrintedPage(c.start_page);
                            fetchPage(c.start_page);
                            setExpandedChapterId(isExpanded ? '' : c.id);
                          }}
                          className="flex-1 text-left"
                        >
                          <div className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-400 transition">
                            <span className="text-emerald-400 text-[11px]">Unit {c.chapter_number}:</span>
                            <span className="line-clamp-1">{c.chapter_title.replace(/^Unit \d+:\s*/, '')}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            Pages {c.start_page} – {c.end_page} • {c.topics?.length || 0} Topics
                          </div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedChapterId(isExpanded ? '' : c.id);
                          }}
                          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
                          title="Toggle unit topics"
                        >
                          {isExpanded ? <ChevronDown className="w-4 h-4 text-emerald-400" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Sub-Topics under each Chapter */}
                      {isExpanded && hasTopics && (
                        <div className="px-2.5 pb-2.5 pt-1 space-y-1 border-t border-slate-800/60 bg-slate-900/40">
                          {c.topics?.map(topic => {
                            const isTopicActive = selectedTopicTitle === topic.title;
                            return (
                              <button
                                key={topic.id}
                                onClick={() => {
                                  setSelectedChapterId(c.id);
                                  setSelectedTopicTitle(topic.title);
                                  setPrintedPage(topic.start_page);
                                  fetchPage(topic.start_page);
                                  setShowToc(false);
                                }}
                                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition flex items-center justify-between gap-2 ${
                                  isTopicActive
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                                }`}
                                title={topic.description}
                              >
                                <span className="line-clamp-1 flex items-center gap-1.5">
                                  <span className="text-[10px] text-slate-400 font-mono">{topic.topic_number}</span>
                                  <span>{topic.title}</span>
                                </span>
                                <span className="text-[10px] text-slate-500 shrink-0 font-mono">p.{topic.start_page}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Renderers: Digital Textbook vs Short Notes vs Detailed Notes */}
        {viewMode === 'digital_textbook' ? (
          book ? (
            <DigitalTextbookViewer
              book={book}
              currentPageData={currentPageData}
              printedPage={printedPage}
              pdfPageIndex={pdfPageIndex}
              totalPageCount={authoritativeTotalPages}
              currentChapter={currentChapter}
              chapters={chapters}
              readerTheme={readerTheme}
              fontSize={fontSize}
              fontFamily={fontFamily}
              selectedTopicTitle={selectedTopicTitle}
              onPageChange={(p) => fetchPage(p)}
              onAskAITutor={(prompt) => onNavigate('ai-tutor', { question: prompt })}
              onSelectTopic={handleSelectTopic}
              onSelectChapter={(num) => {
                const target = chapters.find(c => c.chapter_number === num);
                if (target) {
                  setSelectedChapterId(target.id);
                  setSelectedTopicTitle('');
                  setPrintedPage(target.start_page);
                  fetchPage(target.start_page);
                }
              }}
              onViewGrammarVocab={() => setViewMode('grammar_vocab')}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )
        ) : viewMode === 'detailed_short_notes' ? (
          book ? (
            <DetailedShortNoteViewer
              theme={readerTheme}
              book={book}
              currentChapter={currentChapter}
              chapters={chapters}
              selectedTopicTitle={selectedTopicTitle}
              onSelectTopic={handleSelectTopic}
              onNavigateToPdf={() => setViewMode('digital_textbook')}
              onAskAITutor={(prompt) => onNavigate('ai-tutor', { question: prompt })}
              onViewGrammarVocab={() => setViewMode('grammar_vocab')}
              onSelectChapter={(num) => {
                const target = chapters.find(c => c.chapter_number === num);
                if (target) {
                  setSelectedChapterId(target.id);
                  setSelectedTopicTitle('');
                  setPrintedPage(target.start_page);
                  fetchPage(target.start_page);
                }
              }}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )
        ) : viewMode === 'grammar_vocab' ? (
          book ? (
            <EnglishGrammarVocabularyViewer
              theme={readerTheme}
              book={book}
              currentChapter={currentChapter}
              chapters={chapters}
              selectedTopicTitle={selectedTopicTitle}
              onSelectTopic={handleSelectTopic}
              onNavigateToPdf={() => setViewMode('digital_textbook')}
              onAskAITutor={(prompt) => onNavigate('ai-tutor', { question: prompt })}
              onSelectChapter={(num) => {
                const target = chapters.find(c => c.chapter_number === num);
                if (target) {
                  setSelectedChapterId(target.id);
                  setSelectedTopicTitle('');
                  setPrintedPage(target.start_page);
                  fetchPage(target.start_page);
                }
              }}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )
        ) : (
          /* Short Notes Mode: AI-Assisted High-Yield Revision Notes */
          book ? (
            <ChapterShortNoteViewer
              theme={readerTheme}
              book={book}
              currentChapter={currentChapter}
              chapters={chapters}
              selectedTopicTitle={selectedTopicTitle}
              onSelectTopic={handleSelectTopic}
              onNavigateToPdf={() => setViewMode('digital_textbook')}
              onAskAITutor={(prompt) => onNavigate('ai-tutor', { question: prompt })}
              onViewGrammarVocab={() => setViewMode('grammar_vocab')}
              onSelectChapter={(num) => {
                const target = chapters.find(c => c.chapter_number === num);
                if (target) {
                  setSelectedChapterId(target.id);
                  setSelectedTopicTitle('');
                  setPrintedPage(target.start_page);
                  fetchPage(target.start_page);
                }
              }}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )
        )}
      </div>

      {/* Upload PDF Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Upload className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Upload & Recreate Textbook</h3>
                  <p className="text-xs text-slate-400">Link your PDF directly to {book?.title}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsUploadModalOpen(false);
                  setUploadMsg(null);
                }}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded-lg hover:bg-slate-800"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleUploadReplacementPdf} className="space-y-4">
              <div className="border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-xl p-6 text-center transition bg-slate-950/40">
                <input
                  type="file"
                  id="book-pdf-replace-input"
                  accept="application/pdf"
                  onChange={e => {
                    if (e.target.files && e.target.files[0]) {
                      setUploadFile(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
                <label htmlFor="book-pdf-replace-input" className="cursor-pointer flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-200">
                    {uploadFile ? uploadFile.name : 'Click or Drag & Drop to Select PDF'}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {uploadFile ? `${(uploadFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to upload` : 'Supports official Ethiopian Curriculum PDF files'}
                  </span>
                </label>
              </div>

              {uploading && (
                <div className="space-y-2 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200 truncate max-w-[250px]">
                      {uploadProgressText || 'Uploading chunks...'}
                    </span>
                    <span className="font-mono text-emerald-400 font-bold ml-2 shrink-0">
                      {uploadPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 h-2 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${uploadPercent}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 italic">
                    Chunked streaming prevents network proxy entity drops for large Ethiopian curriculum textbooks.
                  </p>
                </div>
              )}

              {uploadMsg && (
                <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  uploadMsg.type === 'success'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                    : 'bg-rose-950/80 text-rose-300 border border-rose-800/60'
                }`}>
                  {uploadMsg.type === 'success' ? <Check className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                  <span>{uploadMsg.text}</span>
                </div>
              )}

              <div className="bg-slate-800/60 rounded-xl p-3 text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-300">What happens after upload:</p>
                <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                  <li>The PDF is securely linked to this textbook ({book?.title}).</li>
                  <li>Every single page is extracted with OCR into the database for the Reader.</li>
                  <li>AI Tutor can cite and reference the exact pages of your uploaded book.</li>
                </ul>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsUploadModalOpen(false);
                    setUploadMsg(null);
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!uploadFile || uploading}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow"
                >
                  {uploading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Ingesting & Extracting...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload & Process PDF</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
