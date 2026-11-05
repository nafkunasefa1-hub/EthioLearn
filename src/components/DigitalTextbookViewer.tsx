import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Lightbulb,
  HelpCircle,
  FileCode2,
  Table as TableIcon,
  Image as ImageIcon,
  Award,
  Zap,
  ArrowRight,
  RefreshCw,
  Sun,
  Moon,
  Coffee,
  Bookmark,
  MessageSquare,
  CheckCircle2,
  ListOrdered,
  Layers,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Columns,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Edit3,
  X,
  Save,
  CheckCircle,
  AlertTriangle,
  Eye,
  BookMarked
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { Book, BookChapter, BookPage } from '../types';
import { PdfCanvasViewer } from './PdfCanvasViewer';
import { sanitizeLatexToUnicode } from './FormattedQuestionText';

interface DigitalTextbookViewerProps {
  book: Book;
  currentPageData: BookPage | null;
  printedPage: number;
  pdfPageIndex?: number;
  totalPageCount: number;
  currentChapter?: BookChapter;
  chapters?: BookChapter[];
  readerTheme: 'light' | 'sepia' | 'dark';
  fontSize: 'sm' | 'base' | 'lg';
  fontFamily: 'serif' | 'sans';
  selectedTopicTitle?: string;
  onPageChange: (newPage: number) => void;
  onAskAITutor: (prompt: string) => void;
  onSelectTopic?: (topicTitle: string) => void;
  onSelectChapter?: (chapterNumber: number) => void;
  onViewGrammarVocab?: () => void;
}

function normalizeBookPageText(text: string): string {
  if (!text) return '';
  let s = sanitizeLatexToUnicode(text.replace(/\\\$/g, '$'));
  // Clean any spaced or unspaced TOC dots and inline ### markers
  s = s.replace(/(?:[.\u00B7]\s*){3,}\d*/g, ' ');
  s = s.replace(/([^\n])\s+(###\s+)/g, '$1\n\n$2');
  s = s.replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, '$$$$$1$$$$');

  // Only auto-wrap in segments outside existing math blocks
  const parts = s.split(/(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      parts[i] = parts[i]
        .replace(/\\frac\{[^{}]+\}\{[^{}]+\}/g, '$$$&$$')
        .replace(/\\sqrt\{[^{}]+\}/g, '$$$&$$')
        .replace(/\\(vec\{[a-zA-Z]\}|mathbf\{[a-zA-Z0-9]+\}|theta|alpha|beta|lambda|Delta)\b/g, '$$$&$$');
    }
  }
  return parts.join('');
}

export const DigitalTextbookViewer: React.FC<DigitalTextbookViewerProps> = ({
  book,
  currentPageData,
  printedPage,
  pdfPageIndex,
  totalPageCount,
  currentChapter,
  chapters = [],
  readerTheme,
  fontSize,
  fontFamily,
  selectedTopicTitle,
  onPageChange,
  onAskAITutor,
  onSelectTopic,
  onSelectChapter,
  onViewGrammarVocab
}) => {
  // Three-Way Reading Modes:
  // 'smart': Digital typography, KaTeX, markdown, interactive elements
  // 'exact': 100% authentic scanned page with original illustrations, figures & photos
  // 'split': Dual side-by-side view (Smart Reader + Exact Page)
  const [displayMode, setDisplayMode] = useState<'smart' | 'exact' | 'split'>('smart');
  
  const [copied, setCopied] = useState(false);
  const [showAIExplanation, setShowAIExplanation] = useState(false);
  const [aiExplanationData, setAiExplanationData] = useState<any | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);

  // Exact Page Zoom & Fullscreen
  const [imageZoom, setImageZoom] = useState<number>(100);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);

  // Audio Read-Aloud (Text-to-Speech)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);

  // Interactive Self-Check Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showQuizDrawer, setShowQuizDrawer] = useState(false);

  // Student Notes
  const [showNotesDrawer, setShowNotesDrawer] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  const rawText = normalizeBookPageText(currentPageData?.final_text || currentPageData?.extracted_text || '');
  const chapterTitle = currentChapter?.chapter_title || `Unit ${Math.ceil(printedPage / 25)}: Core Curriculum`;
  const subjectName = book.subject_name || 'Subject';
  const gradeName = book.grade_name || 'Grade';

  // Load student note from localStorage
  useEffect(() => {
    try {
      const savedNote = localStorage.getItem(`ethio_notes_${book.id}_p${printedPage}`);
      setUserNote(savedNote || '');
    } catch {}
    // Reset image states on page turn
    setIsImageLoading(true);
    setImageError(false);
    setSelectedAnswers({});
    // Stop audio if running
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  }, [book.id, printedPage]);

  // Save student note to localStorage
  const handleSaveNote = () => {
    try {
      localStorage.setItem(`ethio_notes_${book.id}_p${printedPage}`, userNote);
      setNoteSaved(true);
      setTimeout(() => setNoteSaved(false), 2000);
    } catch {}
  };

  // Text-to-Speech Handler
  const handleToggleAudio = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Text-to-Speech is not supported in this browser environment.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    // Clean markdown symbols for natural reading
    const cleanSpeechText = rawText
      .replace(/[#*`_~>[\]()|]/g, ' ')
      .replace(/\$\$?[^$]+\$\$?/g, 'mathematical expression')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanSpeechText) return;

    const utterance = new SpeechSynthesisUtterance(cleanSpeechText.slice(0, 3500));
    utterance.rate = speechRate;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  // Fetch or synthesize in-depth AI Masterclass explanation specifically for this page
  useEffect(() => {
    let isMounted = true;
    setLoadingAI(true);

    if (currentPageData?.ai_analysis && currentPageData.ai_analysis.overview) {
      setAiExplanationData(currentPageData.ai_analysis);
      setLoadingAI(false);
      return;
    }

    fetch(`/api/books/${book.id}/page/${printedPage}/ai-analysis`, {
      headers: { 'x-user-id': 'usr-student-premium' }
    })
      .then(r => (r.ok ? r.json() : null))
      .then(d => {
        if (!isMounted) return;
        if (d?.ai_analysis) {
          setAiExplanationData(d.ai_analysis);
        } else if (d?.overview) {
          setAiExplanationData(d);
        } else {
          const chapterNum = currentChapter?.chapter_number || Math.ceil(printedPage / 25);
          fetch(`/api/books/${book.id}/short-notes/${chapterNum}?mode=detailed`, {
            headers: { 'x-user-id': 'usr-student-premium' }
          })
            .then(r2 => (r2.ok ? r2.json() : null))
            .then(d2 => {
              if (!isMounted) return;
              if (d2?.short_note) {
                const note = d2.short_note;
                const matchedTopic = note.topics_covered?.find((t: any) =>
                  printedPage >= (t.start_page || 0)
                ) || note.topics_covered?.[0];
                setAiExplanationData({
                  overview: matchedTopic?.detailed_explanation || note.detailed_overview || note.unit_summary,
                  key_points: matchedTopic?.key_points || note.key_concepts?.slice(0, 4) || [],
                  ethiopian_context: matchedTopic?.ethiopian_context || `Applied across Ethiopian science, infrastructure, and national industry.`,
                  euee_insight: matchedTopic?.exam_focus || note.euee_exam_tips?.[0] || `High-frequency topic on the Ethiopian University Entrance Examination (EUEE).`,
                  worked_example: note.worked_examples?.[0] || note.quick_example
                });
              } else {
                setAiExplanationData(null);
              }
            })
            .catch(() => { if (isMounted) setAiExplanationData(null); });
        }
      })
      .catch(() => {
        if (isMounted) setAiExplanationData(null);
      })
      .finally(() => {
        if (isMounted) setLoadingAI(false);
      });

    return () => { isMounted = false; };
  }, [book.id, printedPage, currentPageData?.id, currentChapter?.chapter_number]);

  const handleCopyText = () => {
    if (!rawText) return;
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Theme styling for digital paper
  const themeStyles = {
    light: {
      bg: 'bg-slate-100/90 text-slate-900',
      paper: 'bg-white text-slate-900 border-slate-200 shadow-xl',
      headerBorder: 'border-slate-200 text-slate-500',
      heading: 'text-slate-950',
      bodyText: 'text-slate-800',
      aiCard: 'bg-indigo-50/80 border-indigo-200/80 text-indigo-950',
      codeCard: 'bg-slate-950 text-emerald-300 border-slate-800'
    },
    sepia: {
      bg: 'bg-[#1e1b18]',
      paper: 'bg-[#fcf7ed] text-[#433422] border-[#e6dcce] shadow-xl',
      headerBorder: 'border-[#e6dcce] text-[#786650]',
      heading: 'text-[#2b1f12]',
      bodyText: 'text-[#3d2f20]',
      aiCard: 'bg-[#f4ebd9] border-[#dcd0bc] text-[#4d3d2c]',
      codeCard: 'bg-[#2a2218] text-[#e8d5b7] border-[#433422]'
    },
    dark: {
      bg: 'bg-slate-950 text-slate-100',
      paper: 'bg-slate-900 text-slate-100 border-slate-800 shadow-xl',
      headerBorder: 'border-slate-800 text-slate-400',
      heading: 'text-white',
      bodyText: 'text-slate-200',
      aiCard: 'bg-indigo-950/40 border-indigo-800/60 text-indigo-200',
      codeCard: 'bg-slate-950 text-emerald-400 border-slate-800'
    }
  }[readerTheme];

  const fontClass = fontFamily === 'serif' ? 'font-serif' : 'font-sans';
  const sizeClass = {
    sm: 'text-xs leading-relaxed',
    base: 'text-sm leading-relaxed',
    lg: 'text-base leading-loose'
  }[fontSize];

  const pageImageUrl = `/api/books/${book.id}/page/${printedPage}/image`;

  // Render Exact Authentic Scanned Page Component
  const renderExactPageComponent = (isSplit: boolean = false) => {
    const offset = book.page_offset || 0;
    const targetPdfPage = Math.max(1, printedPage + offset);

    return (
      <div className={`flex flex-col h-full ${isSplit ? 'w-full' : 'max-w-5xl mx-auto w-full'}`}>
        {/* Authentic PDF Canvas Container */}
        <div className="relative w-full h-[78vh] min-h-[600px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex flex-col">
          <PdfCanvasViewer
            bookId={book.id}
            bookTitle={book.title}
            initialPage={targetPdfPage}
            pageOffset={offset}
            bookVersion={(book as any).updated_at || book.total_pages}
            onSwitchToDigitalReader={() => setDisplayMode('smart')}
            onPageChange={(physicalPage) => {
              const convertedPrinted = Math.max(1, physicalPage - offset);
              if (convertedPrinted !== printedPage) {
                onPageChange(convertedPrinted);
              }
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`flex-1 overflow-y-auto ${themeStyles.bg} p-3 sm:p-6 flex flex-col items-center transition-colors duration-200`}>
      <div className="max-w-6xl w-full space-y-5">
        {/* Top Control Bar: Display Mode Switcher & Digital Action Tools */}
        <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${themeStyles.headerBorder}`}>
          {/* Left: Book & Page Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
              p.{printedPage}
            </div>
            <div>
              <span className="font-bold text-xs uppercase tracking-wider text-emerald-400 block line-clamp-1">
                {book.title}
              </span>
              <span className="text-[11px] text-slate-400 line-clamp-1">
                {chapterTitle}
              </span>
            </div>
          </div>

          {/* Center: 3-Way Mode Switcher (Smart Digital | Exact Page | Split View) */}
          <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl gap-1">
            <button
              onClick={() => setDisplayMode('smart')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                displayMode === 'smart'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Enhanced Digital Reader with formatted tables, diagrams & KaTeX equations"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Smart Reader</span>
            </button>

            <button
              onClick={() => setDisplayMode('exact')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                displayMode === 'exact'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Exact 100% authentic scanned page with original print photos and illustrations"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Exact Page</span>
            </button>

            <button
              onClick={() => setDisplayMode('split')}
              className={`hidden md:flex px-3 py-1.5 rounded-lg text-xs font-bold items-center gap-1.5 transition ${
                displayMode === 'split'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Side-by-side: Read digital notes on the left while verifying the real printed textbook on the right"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Split View</span>
            </button>
          </div>

          {/* Right: Audio Listen, Notes, Copy, and AI Tutor */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Audio Read-Aloud Button */}
            <button
              onClick={handleToggleAudio}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition border ${
                isPlayingAudio
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title="Listen to textbook page read aloud"
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlayingAudio ? 'Pause Voice' : 'Listen'}</span>
            </button>

            {/* Student Note Button */}
            <button
              onClick={() => setShowNotesDrawer(!showNotesDrawer)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition border ${
                showNotesDrawer || userNote
                  ? 'bg-purple-900/40 text-purple-300 border-purple-700/60'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title="Open personal study notes for this page"
            >
              <Edit3 className="w-3.5 h-3.5 text-purple-400" />
              <span>{userNote ? 'My Note •' : 'Notes'}</span>
            </button>

            {/* Copy Text */}
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition border border-slate-700"
              title="Copy page text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            {/* Ask AI Tutor */}
            <button
              onClick={() => onAskAITutor(`Explain the concepts on page ${printedPage} of ${book.title}: "${rawText.slice(0, 200)}..."`)}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow transition"
              title="Ask AI Tutor to explain this page"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Student Notes Drawer */}
        {showNotesDrawer && (
          <div className="bg-purple-950/30 border border-purple-800/50 rounded-2xl p-4 space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-200">
                <BookMarked className="w-4 h-4 text-purple-400" />
                <span>My Personal Study Notes for Page {printedPage}</span>
              </div>
              <button
                onClick={() => setShowNotesDrawer(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <textarea
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              placeholder="Write your personal study insights, exam formulas, or key reminders for this page here..."
              rows={3}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleSaveNote}
                className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow transition"
              >
                {noteSaved ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Save className="w-3.5 h-3.5" />}
                <span>{noteSaved ? 'Saved to Device' : 'Save Note'}</span>
              </button>
            </div>
          </div>
        )}

        {/* MAIN BODY DISPLAY */}
        {displayMode === 'exact' ? (
          renderExactPageComponent(false)
        ) : displayMode === 'split' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            {/* Left Side: Smart Digital Reader */}
            <div className={`rounded-2xl border p-5 sm:p-7 space-y-5 ${themeStyles.paper} max-h-[85vh] overflow-y-auto`}>
              <div className="border-b pb-3 border-slate-700/40">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                  Interactive Digital Reader
                </span>
                <h2 className={`text-lg font-bold ${themeStyles.heading} ${fontClass}`}>
                  {chapterTitle}
                </h2>
              </div>
              <div className={`markdown-body ${fontClass} ${sizeClass} ${themeStyles.bodyText} space-y-3.5 max-w-full break-words [overflow-wrap:anywhere]`}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    h1: ({ node, ...props }) => <h1 className="text-base font-bold text-emerald-400 mt-4 mb-2 border-b border-emerald-500/30 pb-1" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-sm font-bold text-emerald-300 mt-3 mb-1" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xs font-bold text-white mt-3 mb-1 flex items-center gap-1.5" {...props} />,
                    h4: ({ node, ...props }) => <h4 className="text-xs font-semibold text-amber-300 mt-2 mb-1" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-bold text-amber-300" {...props} />,
                    em: ({ node, ...props }) => <em className="italic text-teal-200" {...props} />,
                    p: ({ node, ...props }) => <p className="leading-relaxed my-2 break-words whitespace-pre-line text-slate-200" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-1 my-2 pl-1 text-xs text-slate-200" {...props} />,
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="p-3.5 my-3 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/30 border-l-4 border-emerald-400 rounded-r-xl text-emerald-100 font-medium text-xs leading-relaxed shadow-md" {...props} />
                    ),
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-3 rounded-xl border border-slate-700/60 bg-slate-950/40 p-1.5 max-w-full shadow-lg">
                        <table className="w-full text-xs text-left text-slate-200 border-collapse" {...props} />
                      </div>
                    ),
                    th: ({ node, ...props }) => <th className="bg-slate-800/80 p-1.5 border-b border-slate-700 font-bold text-emerald-300" {...props} />,
                    td: ({ node, ...props }) => <td className="p-1.5 border-b border-slate-800/60 text-slate-300" {...props} />,
                    code: ({ node, ...props }) => <code className="bg-slate-850 text-emerald-300 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-700/60" {...props} />
                  }}
                >
                  {rawText}
                </ReactMarkdown>
              </div>
            </div>

            {/* Right Side: Exact Scanned Page */}
            <div className="h-[85vh]">
              {renderExactPageComponent(true)}
            </div>
          </div>
        ) : (
          /* STANDARD SMART DIGITAL READER CONTAINER */
          <div className={`rounded-2xl border p-6 sm:p-10 space-y-6 ${themeStyles.paper}`}>
            {/* Textbook Heading & Section Info */}
            <div className="space-y-2 border-b pb-4 border-slate-700/40">
              <div className="flex items-center justify-between text-xs text-emerald-500 font-semibold uppercase tracking-widest">
                <span>Ethiopian National Curriculum Standard</span>
                <span>{gradeName} • {subjectName}</span>
              </div>
              <h1 className={`text-xl sm:text-2xl font-bold ${themeStyles.heading} ${fontClass}`}>
                {chapterTitle}
              </h1>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <p className="text-xs text-slate-400">
                  Page {printedPage} of {totalPageCount} • Full Authorized Content
                </p>
                <button
                  onClick={() => setDisplayMode('exact')}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Original Scanned Page & Illustrations</span>
                </button>
              </div>

              {/* Quick Topic Navigation Bar for Current Unit */}
              {currentChapter?.topics && currentChapter.topics.length > 0 && (
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1 mr-1">
                    <ListOrdered className="w-3 h-3" /> Topics:
                  </span>
                  {currentChapter.topics.map(t => {
                    const isCurrentTopic = (selectedTopicTitle === t.title) || (printedPage >= t.start_page && (!currentChapter.topics?.find(nextT => nextT.start_page > t.start_page && printedPage >= nextT.start_page)));
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          if (onSelectTopic) onSelectTopic(t.title);
                          if (t.start_page) onPageChange(t.start_page);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs transition flex items-center gap-1 ${
                          isCurrentTopic
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                            : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                        }`}
                        title={t.description || t.title}
                      >
                        <span className="text-[10px] text-slate-400 font-mono">{t.topic_number}</span>
                        <span className="line-clamp-1">{t.title}</span>
                        <span className="text-[10px] text-slate-500 font-mono">p.{t.start_page}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Formatted Textbook Text with KaTeX Math, Responsive Tables & Callout Figures */}
            <div className={`markdown-body ${fontClass} ${sizeClass} ${themeStyles.bodyText} space-y-4 max-w-full break-words [overflow-wrap:anywhere]`}>
              {rawText ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    h1: ({ node, ...props }) => <h1 className="text-lg sm:text-xl font-bold text-emerald-400 mt-6 mb-3 border-b border-emerald-500/30 pb-2" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-base sm:text-lg font-bold text-emerald-300 mt-5 mb-2" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-sm sm:text-base font-bold text-white mt-4 mb-2 flex items-center gap-1.5" {...props} />,
                    h4: ({ node, ...props }) => <h4 className="text-xs sm:text-sm font-bold text-amber-300 mt-3.5 mb-1.5" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-bold text-amber-300" {...props} />,
                    em: ({ node, ...props }) => <em className="italic text-teal-200" {...props} />,
                    p: ({ node, ...props }) => <p className="leading-relaxed my-3 break-words whitespace-pre-line text-slate-200" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 my-3 pl-1 text-slate-200" {...props} />,
                    li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="p-4 my-4 bg-gradient-to-r from-emerald-950/30 via-slate-900 to-indigo-950/20 border-l-4 border-emerald-400 rounded-r-2xl text-emerald-100 font-medium text-xs leading-relaxed shadow-lg border-y border-r border-emerald-900/30" {...props} />
                    ),
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-5 rounded-2xl border border-slate-700/80 bg-slate-950/60 p-3 shadow-xl max-w-full">
                        <table className="w-full text-xs text-left text-slate-200 border-collapse" {...props} />
                      </div>
                    ),
                    th: ({ node, ...props }) => <th className="bg-slate-800/90 p-2.5 border-b border-slate-700 font-bold text-emerald-300 tracking-wider uppercase text-[11px]" {...props} />,
                    td: ({ node, ...props }) => <td className="p-2.5 border-b border-slate-800/70 text-slate-300" {...props} />,
                    code: ({ node, ...props }) => <code className="bg-slate-800/90 text-emerald-300 px-1.5 py-0.5 rounded text-xs font-mono break-all border border-slate-700/50 shadow-inner" {...props} />
                  }}
                >
                  {rawText}
                </ReactMarkdown>
              ) : (
                <div className="p-6 text-center text-slate-400 italic">
                  Page text loading or being indexed from curriculum database...
                </div>
              )}
            </div>

            {/* AI Masterclass In-Depth Explanation Section */}
            <div className={`rounded-2xl border p-4 sm:p-5 space-y-4 transition ${themeStyles.aiCard}`}>
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0">
                    <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-sm text-white truncate">AI Masterclass In-Depth Explanation</span>
                      <span className="text-[10px] px-2 py-0.5 bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 rounded font-semibold whitespace-nowrap shrink-0">
                        Page {printedPage} AI Analysis
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 truncate">
                      Step-by-step conceptual breakdown, real-world context, and EUEE exam traps
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowAIExplanation(!showAIExplanation)}
                  className="px-3 py-1.5 bg-indigo-900/70 hover:bg-indigo-800 text-indigo-200 border border-indigo-700/60 rounded-lg text-xs font-semibold transition shrink-0 ml-1 sm:ml-3"
                >
                  {showAIExplanation ? 'Collapse' : 'Expand'}
                </button>
              </div>

              {showAIExplanation && (
                <div className="pt-2 space-y-4 text-xs leading-relaxed border-t border-indigo-800/40">
                  {loadingAI ? (
                    <div className="flex items-center gap-2 text-slate-400 italic py-2">
                      <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                      <span>Synthesizing in-depth AI explanation for Page {printedPage}...</span>
                    </div>
                  ) : aiExplanationData ? (
                    <>
                      {/* Conceptual Overview */}
                      <div className="space-y-1">
                        <div className="font-bold text-indigo-200 flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                          <span>Core Conceptual Intuition:</span>
                        </div>
                        <p className="text-slate-200">{aiExplanationData.overview}</p>
                      </div>

                      {/* Figures & Structured Tables on this Page */}
                      {aiExplanationData.figures_and_tables && (
                        <div className="space-y-1 p-3 rounded-xl bg-slate-900/70 border border-slate-700/60">
                          <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Figures, Diagrams & Structured Tables on Page {printedPage}:</span>
                          </div>
                          <p className="text-slate-200">{aiExplanationData.figures_and_tables}</p>
                        </div>
                      )}

                      {/* Key points if available */}
                      {aiExplanationData.key_points && aiExplanationData.key_points.length > 0 && (
                        <div className="space-y-1 p-3 rounded-xl bg-slate-950/40 border border-indigo-800/30">
                          <div className="font-bold text-indigo-200 flex items-center gap-1.5 mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Key Formulations & Rules Defined on this Page:</span>
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-slate-300">
                            {aiExplanationData.key_points.map((kp: string, idx: number) => (
                              <li key={idx} className="leading-relaxed">{kp}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Ethiopian Practical Application */}
                      <div className="space-y-1 p-3 rounded-xl bg-slate-950/40 border border-indigo-800/40">
                        <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Ethiopian Real-World Application & Industry Context:</span>
                        </div>
                        <p className="text-slate-300">{aiExplanationData.ethiopian_context}</p>
                      </div>

                      {/* EUEE Exam Traps & Insight */}
                      <div className="space-y-1 p-3 rounded-xl bg-amber-950/30 border border-amber-800/40">
                        <div className="font-bold text-amber-300 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>EUEE National Exam Strategy & Common Distractors:</span>
                        </div>
                        <p className="text-amber-100">{typeof aiExplanationData.euee_insight === 'string' ? aiExplanationData.euee_insight : aiExplanationData.euee_insight?.trap || 'Watch out for boundary conditions and SI unit conversions.'}</p>
                      </div>
                    </>
                  ) : (
                    <p className="text-slate-400 italic">
                      AI Masterclass explanation generated dynamically according to Ethiopian Ministry of Education guidelines.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom Page Navigation Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => onPageChange(Math.max(1, printedPage - 1))}
            disabled={printedPage <= 1}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-2 border border-slate-700 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Page</span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            Page <strong className="text-emerald-400">{printedPage}</strong> / {totalPageCount}
          </span>

          <button
            onClick={() => onPageChange(Math.min(totalPageCount, printedPage + 1))}
            disabled={printedPage >= totalPageCount}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow transition"
          >
            <span>Next Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
