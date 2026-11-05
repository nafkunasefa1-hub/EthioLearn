import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  RotateCcw,
  FileText,
  Upload,
  RefreshCw,
  Layers,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { apiFetch } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { getOfflinePdfBlob, deleteOfflineBook } from '../utils/offlineStorage';

interface PdfCanvasViewerProps {
  bookId: string;
  bookTitle: string;
  initialPage?: number;
  pageOffset?: number;
  bookVersion?: string | number;
  onOpenUploadModal?: () => void;
  onPageChange?: (page: number) => void;
  onSwitchToDigitalReader?: () => void;
}

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

export const PdfCanvasViewer: React.FC<PdfCanvasViewerProps> = ({
  bookId,
  bookTitle,
  initialPage = 1,
  pageOffset = 0,
  bookVersion,
  onOpenUploadModal,
  onPageChange,
  onSwitchToDigitalReader
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const pageCanvasRefs = useRef<Record<number, HTMLCanvasElement | null>>({});
  const renderedPagesRef = useRef<Set<number>>(new Set());
  const activeContinuousTasksRef = useRef<Map<number, any>>(new Map());
  const mountVersionRef = useRef<number>(Date.now());

  const [viewerType, setViewerType] = useState<'scroll' | 'native'>('scroll');
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageInput, setPageInput] = useState<string>(String(initialPage));
  const { user } = useAuth();
  const currentUserId = user?.id || localStorage.getItem('auth_token') || 'usr-student-premium';

  const versionTag = bookVersion ? `${bookVersion}_${mountVersionRef.current}` : String(mountVersionRef.current);
  const pdfUrl = `/api/books/${bookId}/pdf?userId=${encodeURIComponent(currentUserId)}&v=${encodeURIComponent(versionTag)}`;
  const STANDARD_FONT_DATA_URL = typeof window !== 'undefined'
    ? `${window.location.origin}/vendor/pdfjs/standard_fonts/`
    : '/vendor/pdfjs/standard_fonts/';
  const CMAP_URL = typeof window !== 'undefined'
    ? `${window.location.origin}/vendor/pdfjs/cmaps/`
    : '/vendor/pdfjs/cmaps/';

  // Dynamically ensure PDF.js is loaded and worker & fonts are set up
  const ensurePdfJs = async (): Promise<any> => {
    const setupLib = (lib: any) => {
      if (!lib) return null;
      if (!lib.GlobalWorkerOptions) lib.GlobalWorkerOptions = {};
      lib.GlobalWorkerOptions.workerSrc = typeof window !== 'undefined'
        ? `${window.location.origin}/vendor/pdfjs/pdf.worker.min.js`
        : '/vendor/pdfjs/pdf.worker.min.js';
      lib.GlobalWorkerOptions.standardFontDataUrl = STANDARD_FONT_DATA_URL;
      lib.GlobalWorkerOptions.cMapUrl = CMAP_URL;
      lib.GlobalWorkerOptions.cMapPacked = true;
      return lib;
    };

    if (window.pdfjsLib) {
      return setupLib(window.pdfjsLib);
    }

    return new Promise((resolve) => {
      let count = 0;
      const interval = setInterval(() => {
        if (window.pdfjsLib) {
          clearInterval(interval);
          resolve(setupLib(window.pdfjsLib));
        } else if (count > 60) {
          clearInterval(interval);
          resolve(setupLib(window.pdfjsLib) || null);
        }
        count++;
      }, 50);
    });
  };

  // Synchronize when initialPage prop changes externally (e.g. from table of contents or search)
  useEffect(() => {
    if (initialPage && initialPage >= 1) {
      const target = pdfDoc ? Math.min(Math.max(1, initialPage), totalPages) : initialPage;
      setCurrentPage(target);
      setPageInput(String(target));
      if (pdfDoc && viewerType === 'scroll') {
        setTimeout(() => jumpToPageInScroll(target), 80);
      }
    }
  }, [initialPage, pdfDoc, totalPages, viewerType]);

  // Load PDF ArrayBuffer securely via authorized apiFetch
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    renderedPagesRef.current.clear();

    const loadPdf = async () => {
      try {
        const pdfjs = await ensurePdfJs();
        if (!pdfjs) {
          if (isMounted) {
            setError('Unable to load PDF rendering engine.');
            setLoading(false);
          }
          return;
        }

        let doc: any = null;
        let lastError: any = null;
        const isOnline = typeof navigator === 'undefined' || navigator.onLine !== false;

        // When online, ALWAYS load the authoritative PDF from the server first so newly uploaded textbooks appear immediately
        if (isOnline) {
          for (let attempt = 1; attempt <= 3; attempt++) {
            try {
              // Attempt 1: Direct Range streaming (efficient for 20MB–150MB textbooks)
              try {
                const streamingTask = pdfjs.getDocument({
                  url: pdfUrl,
                  withCredentials: false,
                  httpHeaders: {
                    'x-user-id': currentUserId,
                    'Cache-Control': 'no-cache'
                  },
                  rangeChunkSize: 524288, // 512KB chunks for smooth high-speed seeking
                  disableAutoFetch: true,
                  disableStream: false,
                  standardFontDataUrl: STANDARD_FONT_DATA_URL,
                  cMapUrl: CMAP_URL,
                  cMapPacked: true
                });
                doc = await streamingTask.promise;
                if (doc) break;
              } catch (streamErr) {
                console.warn(`[Attempt ${attempt}/3] Range streaming notice:`, streamErr);
              }

              // Attempt 2: Direct URL fetch with arrayBuffer fallback (cache: 'no-store')
              const res = await apiFetch(pdfUrl, {
                cache: 'no-store',
                headers: {
                  'x-user-id': currentUserId,
                  'Cache-Control': 'no-cache'
                }
              });
              if (!res.ok) {
                const errJson = await res.json().catch(() => null);
                const errMsg = errJson?.error || `Server returned status ${res.status}`;
                throw new Error(errMsg);
              }
              const pdfBuffer = await res.arrayBuffer();
              // Purge stale synthetic IndexedDB blob if server returned a larger authentic PDF
              try {
                const oldBlob = await getOfflinePdfBlob(bookId);
                if (oldBlob && oldBlob.size !== pdfBuffer.byteLength) {
                  await deleteOfflineBook(bookId);
                }
              } catch {}
              const bufferTask = pdfjs.getDocument({
                data: new Uint8Array(pdfBuffer.slice(0)),
                standardFontDataUrl: STANDARD_FONT_DATA_URL,
                cMapUrl: CMAP_URL,
                cMapPacked: true
              });
              doc = await bufferTask.promise;
              if (doc) break;
            } catch (retryErr) {
              lastError = retryErr;
              console.warn(`[Attempt ${attempt}/3] PDF load attempt notice:`, retryErr);
              if (attempt < 3) {
                await new Promise(r => setTimeout(r, 400 * attempt));
              }
            }
          }
        }

        // Fallback to offline IndexedDB blob when offline or if server was unreachable
        if (!doc) {
          try {
            const offlineBlob = await getOfflinePdfBlob(bookId);
            if (offlineBlob) {
              const pdfBuffer = await offlineBlob.arrayBuffer();
              const offlineTask = pdfjs.getDocument({
                data: new Uint8Array(pdfBuffer),
                standardFontDataUrl: STANDARD_FONT_DATA_URL,
                cMapUrl: CMAP_URL,
                cMapPacked: true
              });
              doc = await offlineTask.promise;
            }
          } catch (e) {
            console.warn('Offline blob retrieval notice:', e);
          }
        }

        if (!doc) {
          throw lastError || new Error('Failed to load textbook PDF after multiple attempts.');
        }

        if (!isMounted) return;

        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        const validStart = Math.min(Math.max(1, initialPage), doc.numPages);
        setCurrentPage(validStart);
        setPageInput(String(validStart));
        setLoading(false);

        if (validStart > 1) {
          setTimeout(() => jumpToPageInScroll(validStart), 150);
        }
      } catch (err: any) {
        console.error('PDF Canvas Viewer document load error:', err);
        if (isMounted) {
          setError(err.message || 'Failed to load textbook PDF.');
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      isMounted = false;
      activeContinuousTasksRef.current.forEach(t => {
        try {
          t.cancel();
        } catch {}
      });
      activeContinuousTasksRef.current.clear();
    };
  }, [bookId, pdfUrl]);

  // Render a specific page onto its continuous scroll canvas element with cancellation protection
  const renderContinuousPage = useCallback(
    async (pageNum: number) => {
      if (!pdfDoc || pageNum < 1 || pageNum > totalPages) return;
      if (renderedPagesRef.current.has(pageNum)) return;

      const canvas = pageCanvasRefs.current[pageNum];
      if (!canvas) return;

      const existingTask = activeContinuousTasksRef.current.get(pageNum);
      if (existingTask) {
        try {
          existingTask.cancel();
        } catch {}
        activeContinuousTasksRef.current.delete(pageNum);
      }

      try {
        renderedPagesRef.current.add(pageNum);
        const page = await pdfDoc.getPage(pageNum);
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const viewport = page.getViewport({ scale });
        const outputScale = window.devicePixelRatio || 1;

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = 'auto';

        const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
        const renderTask = page.render({ canvasContext: ctx, transform, viewport });
        activeContinuousTasksRef.current.set(pageNum, renderTask);

        await renderTask.promise;
      } catch (err: any) {
        renderedPagesRef.current.delete(pageNum);
        if (err?.name !== 'RenderingCancelledException') {
          console.warn(`Continuous page ${pageNum} render error:`, err);
        }
      } finally {
        activeContinuousTasksRef.current.delete(pageNum);
      }
    },
    [pdfDoc, scale, totalPages]
  );

  // Eagerly render initial window of pages for continuous mode
  useEffect(() => {
    if (viewerType === 'scroll' && pdfDoc && !loading) {
      renderedPagesRef.current.clear();
      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages, currentPage + 4);
      for (let p = start; p <= end; p++) {
        renderContinuousPage(p);
      }
    }
  }, [viewerType, pdfDoc, loading, totalPages, currentPage, scale, renderContinuousPage]);

  // IntersectionObserver for continuous scroll lazy rendering
  useEffect(() => {
    if (viewerType !== 'scroll' || !pdfDoc || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageNumStr = entry.target.getAttribute('data-page-number');
            if (pageNumStr) {
              const p = parseInt(pageNumStr, 10);
              renderContinuousPage(p);
            }
          }
        });
      },
      { root: scrollContainerRef.current, rootMargin: '400px 0px' }
    );

    const container = scrollContainerRef.current;
    if (container) {
      const pageElements = container.querySelectorAll('[data-page-number]');
      pageElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [viewerType, pdfDoc, loading, totalPages, renderContinuousPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const next = currentPage - 1;
      setCurrentPage(next);
      setPageInput(String(next));
      onPageChange?.(next);
      if (viewerType === 'scroll') jumpToPageInScroll(next);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const next = currentPage + 1;
      setCurrentPage(next);
      setPageInput(String(next));
      onPageChange?.(next);
      if (viewerType === 'scroll') jumpToPageInScroll(next);
    }
  };

  const jumpToPageInScroll = (p: number) => {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current.querySelector(`[data-page-number="${p}"]`) as HTMLElement | null;
      if (el) {
        scrollContainerRef.current.scrollTop = Math.max(0, el.offsetTop - 16);
      }
      renderContinuousPage(p);
      if (p > 1) renderContinuousPage(p - 1);
      if (p < totalPages) renderContinuousPage(p + 1);
    }
  };

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(pageInput, 10);
    if (!isNaN(p) && p >= 1 && p <= totalPages) {
      setCurrentPage(p);
      onPageChange?.(p);
      if (viewerType === 'scroll') jumpToPageInScroll(p);
    } else {
      setPageInput(String(currentPage));
    }
  };

  const handleZoomIn = () => setScale((s) => Math.min(2.5, +(s + 0.2).toFixed(1)));
  const handleZoomOut = () => setScale((s) => Math.max(0.6, +(s - 0.2).toFixed(1)));
  const handleResetZoom = () => setScale(1.2);

  return (
    <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden text-slate-100">
      {/* Top Toolbar */}
      <div className="bg-slate-900 border-b border-slate-800 p-2 sm:px-4 sm:py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0 shadow-md">
        {/* Left: Title & Reader badge */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <div className="font-semibold text-slate-200 line-clamp-1 max-w-xs md:max-w-md">{bookTitle}</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Textbook Reader (Continuous Canvas Mode)</span>
            </div>
          </div>
        </div>

        {/* Viewer Mode Switcher */}
        <div className="flex items-center bg-slate-950/80 p-0.5 rounded-xl border border-slate-800 text-[11px]">
          <button
            onClick={() => setViewerType('scroll')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
              viewerType === 'scroll' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
            title="Continuous vertical scroll view with all pages rendered on demand"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Continuous Scroll</span>
          </button>
          <button
            onClick={() => setViewerType('native')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
              viewerType === 'native' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
            title="Native browser PDF viewer"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-300" />
            <span>Browser PDF</span>
          </button>
        </div>

        {/* Page Jump & Navigation */}
        <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-1 rounded-xl border border-slate-800">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1 || loading}
            className="p-1 rounded-lg hover:bg-slate-800 disabled:opacity-30 transition"
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <form onSubmit={handlePageInputSubmit} className="flex items-center gap-1 text-xs">
            <span className="text-slate-400 text-[11px]">PDF p.</span>
            <input
              type="text"
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              className="w-12 text-center bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
            />
            <span className="text-slate-400 text-[11px]">
              /{totalPages}
              {pageOffset > 0 && currentPage > pageOffset && (
                <span className="text-emerald-400 font-bold ml-1.5">
                  (Unit 1 p.{currentPage - pageOffset})
                </span>
              )}
            </span>
          </form>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages || loading}
            className="p-1 rounded-lg hover:bg-slate-800 disabled:opacity-30 transition"
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          <div className="hidden md:flex items-center gap-1 bg-slate-950/80 px-1.5 py-1 rounded-xl border border-slate-800 text-[11px]">
            <button onClick={handleZoomOut} className="p-1 hover:bg-slate-800 rounded" title="Zoom Out">
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-slate-300 w-10 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={handleZoomIn} className="p-1 hover:bg-slate-800 rounded" title="Zoom In">
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button onClick={handleResetZoom} className="p-1 hover:bg-slate-800 rounded" title="Reset Zoom">
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Download PDF */}
          <a
            href={`${pdfUrl}&download=true`}
            download={`${bookTitle}.pdf`}
            className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-semibold flex items-center gap-1.5 transition"
            title="Download PDF to your computer"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">Download PDF</span>
          </a>

          {/* Replace PDF */}
          {onOpenUploadModal && (
            <button
              onClick={onOpenUploadModal}
              className="px-2.5 py-1.5 bg-emerald-950 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900 rounded-lg font-semibold flex items-center gap-1.5 transition"
              title="Replace this book with your own PDF"
            >
              <Upload className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden lg:inline">Replace PDF</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-slate-950 relative overflow-hidden flex flex-col">
        {loading && (
          <div className="flex flex-col items-center justify-center my-auto p-8 space-y-3">
            <div className="w-10 h-10 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-slate-300 font-medium">Loading textbook pages...</p>
            <p className="text-xs text-slate-500">Preparing high-definition canvas renderer</p>
          </div>
        )}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center my-auto p-8 max-w-md mx-auto text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-amber-400" />
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white">Scanned PDF Streaming Notice</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Streaming the original scanned physical PDF requires an active internet connection.
                All 59 textbooks, verified equations, and curriculum notes are 100% saved offline on your device in Digital Reader mode.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
              {onSwitchToDigitalReader && (
                <button
                  type="button"
                  onClick={onSwitchToDigitalReader}
                  className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg transition flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Open Offline Digital Reader</span>
                </button>
              )}
              {onOpenUploadModal && (
                <button
                  type="button"
                  onClick={onOpenUploadModal}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload PDF Document</span>
                </button>
              )}
            </div>
          </div>
        )}

        {!loading && !error && viewerType === 'scroll' && (
          /* Continuous Scroll Canvas List */
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-auto p-4 sm:p-6 space-y-6 flex flex-col items-center justify-start bg-slate-950 relative"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                data-page-number={pageNum}
                className="relative shadow-2xl rounded-lg overflow-hidden border border-slate-800 bg-white min-h-[500px] max-w-full flex flex-col items-center"
              >
                <div className="w-full bg-slate-900 border-b border-slate-800 px-3 py-1 text-[11px] text-slate-400 flex items-center justify-between font-mono shrink-0">
                  <span className="text-emerald-400 font-semibold">Page {pageNum} of {totalPages}</span>
                  <span className="truncate max-w-xs">{bookTitle}</span>
                </div>
                <div className="p-2 sm:p-4 bg-white flex items-center justify-center w-full">
                  <canvas
                    ref={(el) => {
                      pageCanvasRefs.current[pageNum] = el;
                    }}
                    className="block mx-auto max-w-full shadow-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {viewerType === 'native' && (
          /* Native Browser PDF View */
          <div className="flex-1 flex flex-col bg-slate-900 overflow-hidden">
            <iframe
              key={`${bookId}-native-${currentPage}`}
              src={`${pdfUrl}#page=${currentPage}`}
              className="w-full flex-1 min-h-[72vh] border-0 bg-white"
              title={`${bookTitle} - PDF Page ${currentPage}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
