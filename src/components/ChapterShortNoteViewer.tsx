import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  FileCode2,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  Copy,
  Check,
  FileText,
  ChevronDown,
  ChevronUp,
  Award,
  Zap,
  BookCheck,
  XCircle,
  Layers,
  Compass,
  HardDrive,
  DownloadCloud,
  WifiOff
} from 'lucide-react';
import { Book, BookChapter, ChapterShortNote, ChapterTopic } from '../types';
import { MathMarkdownRenderer } from './MathMarkdownRenderer';
import { CurriculumFormattedText } from './CurriculumFormattedText';
import { ScientificDiagramRenderer } from './ScientificDiagramRenderer';
import {
  saveShortNoteOffline,
  getOfflineShortNote,
  saveAllBookShortNotesOffline,
  isShortNotesSavedOffline
} from '../utils/offlineStorage';
import { getExamTerminology } from '../utils/subjectClassification';

interface ChapterShortNoteViewerProps {
  book: Book;
  currentChapter?: BookChapter;
  chapters?: BookChapter[];
  selectedTopicTitle?: string;
  onSelectTopic?: (topicTitle: string) => void;
  onNavigateToPdf: () => void;
  onAskAITutor: (prompt: string) => void;
  onSelectChapter: (chapterNumber: number) => void;
  onViewGrammarVocab?: () => void;
  theme?: "light" | "sepia" | "dark";
  isDetailed?: boolean;
}

export const ChapterShortNoteViewer: React.FC<ChapterShortNoteViewerProps> = ({
  book,
  currentChapter,
  chapters = [],
  selectedTopicTitle,
  onSelectTopic,
  onNavigateToPdf,
  onAskAITutor,
  onSelectChapter,
  onViewGrammarVocab,
  theme = "dark",
  isDetailed = false
}) => {
  const chapterNumber = currentChapter?.chapter_number || 1;
  const [shortNote, setShortNote] = useState<ChapterShortNote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [generatingAI, setGeneratingAI] = useState<boolean>(false);
  const [focus, setFocus] = useState<'summary' | 'formulas' | 'euee'>('summary');
  const [activeTopic, setActiveTopic] = useState<string>(selectedTopicTitle || '');
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isOfflineLoaded, setIsOfflineLoaded] = useState<boolean>(false);
  const [allNotesOffline, setAllNotesOffline] = useState<boolean>(false);
  const [savingAllOffline, setSavingAllOffline] = useState<boolean>(false);
  
  // Interactive quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizExplanations, setShowQuizExplanations] = useState<Record<number, boolean>>({});

  // Expanded worked examples state
  const [expandedExamples, setExpandedExamples] = useState<Record<number, boolean>>({ 0: true });

  const topicSectionRef = useRef<HTMLDivElement>(null);
  const formulasSectionRef = useRef<HTMLDivElement>(null);
  const eueeSectionRef = useRef<HTMLDivElement>(null);
  const overviewSectionRef = useRef<HTMLDivElement>(null);

  const isEnglish = Boolean(
    book?.subject_id === 'subj-eng' ||
    book?.subject_name?.toLowerCase().includes('english') ||
    book?.id?.includes('eng') ||
    book?.title?.toLowerCase().includes('english')
  );

  const examTerms = useMemo(() => getExamTerminology(book?.subject_name || book?.subject_id), [book?.subject_name, book?.subject_id]);

  // Derive the active topic data if a topic is selected
  const activeTopicData: any = useMemo(() => {
    if (!shortNote || !activeTopic) return null;
    
    let match: any = null;
    if (shortNote.topics_covered && shortNote.topics_covered.length > 0) {
      match = shortNote.topics_covered.find((t: any) => {
        const tTitle = (t.topic_title || t.title || '').toLowerCase().trim();
        const aTitle = activeTopic.toLowerCase().trim();
        return tTitle === aTitle || tTitle.includes(aTitle) || aTitle.includes(tTitle);
      });
      if (!match && shortNote.topics_covered.length === 1) {
        match = shortNote.topics_covered[0];
      }
    }

    const shortNotesList = (match && Array.isArray(match.short_notes) && match.short_notes.length > 0)
      ? match.short_notes
      : (match && Array.isArray(match.key_points) && match.key_points.length > 0
          ? match.key_points.map((kp: string) => kp.startsWith('•') ? kp : `• ${kp}`)
          : (shortNote.key_concepts || []).map((k: any) => typeof k === 'string' ? k : `${k.concept || k.title || 'Core Principle'}: ${k.explanation || ''}`));

    const keyPointsList = (match && Array.isArray(match.key_points) && match.key_points.length > 0)
      ? match.key_points
      : (shortNote.key_concepts || []).map((k: any) => typeof k === 'string' ? k : k.concept || k.title || 'Key Principle');

    const detailedExpl = match?.detailed_explanation || match?.explanation || shortNote.detailed_overview || shortNote.unit_summary || '';
    const diagram = match?.diagram_illustration || match?.illustration_analogy || match?.analogy || '';
    const ethiopianContext = match?.ethiopian_context || '';
    const examFocus = match?.exam_focus || (typeof shortNote.euee_exam_tips?.[0] === 'string' ? shortNote.euee_exam_tips[0] : (shortNote.euee_exam_tips?.[0] as any)?.how_to_avoid || (shortNote.euee_exam_tips?.[0] as any)?.trap) || '';
    const takeaway = match?.key_takeaway || shortNote.unit_summary || '';

    return {
      topic_title: match?.topic_title || match?.title || activeTopic,
      title: match?.topic_title || match?.title || activeTopic,
      summary: shortNote.unit_summary || `Curriculum takeaways and core concepts for ${activeTopic}.`,
      short_notes: shortNotesList,
      key_points: keyPointsList,
      explanation: detailedExpl,
      detailed_explanation: detailedExpl,
      diagram_illustration: diagram,
      illustration_analogy: diagram,
      ethiopian_context: ethiopianContext,
      exam_focus: examFocus,
      key_takeaway: takeaway
    };
  }, [shortNote, activeTopic]);

  useEffect(() => {
    if (activeTopic) {
      const scrollTimer = setTimeout(() => {
        if (topicSectionRef.current) {
          topicSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(scrollTimer);
    }
  }, [activeTopic, shortNote]);

  // Check offline status on book change
  useEffect(() => {
    isShortNotesSavedOffline(book.id).then(saved => setAllNotesOffline(saved));
  }, [book.id]);

  useEffect(() => {
    if (selectedTopicTitle !== undefined) {
      setActiveTopic(selectedTopicTitle);
    }
  }, [selectedTopicTitle]);

  // Fetch or load rich short note for the current chapter and active topic
  const loadShortNote = async (forceRefresh = false, selectedFocus = focus, topic = activeTopic) => {
    try {
      if (forceRefresh) {
        setGeneratingAI(true);
      } else {
        setLoading(true);
      }
      setError(null);

      // If navigator is offline, check local IndexedDB first
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        const offlineCached = await getOfflineShortNote(book.id, chapterNumber, topic);
        if (offlineCached) {
          setShortNote(offlineCached);
          setIsOfflineLoaded(true);
          setLoading(false);
          return;
        }
      }

      let url = `/api/books/${book.id}/short-notes/${chapterNumber}?focus=${selectedFocus}`;
      if (isDetailed) url += '&mode=detailed';
      if (forceRefresh) url += '&refresh=true';
      if (topic) url += `&topicTitle=${encodeURIComponent(topic)}`;

      const res = await fetch(url, {
        headers: {
          'x-user-id': 'usr-student-premium'
        }
      });
      if (!res.ok) {
        // Attempt offline fallback if server error
        const offlineCached = await getOfflineShortNote(book.id, chapterNumber, topic);
        if (offlineCached) {
          setShortNote(offlineCached);
          setIsOfflineLoaded(true);
          return;
        }
        const errorJson = await res.json().catch(() => ({}));
        throw new Error(errorJson.error || 'Failed to load study note');
      }
      const data = await res.json();
      if (data.short_note) {
        setShortNote(data.short_note);
        setIsOfflineLoaded(false);
        // Automatically cache this note for offline reading
        saveShortNoteOffline(book.id, chapterNumber, data.short_note, topic).catch(() => {});
        // Reset quiz answers when new note loads
        setQuizAnswers({});
        setShowQuizExplanations({});
      }
    } catch (err: any) {
      // If network error occurred, attempt offline retrieval
      const offlineCached = await getOfflineShortNote(book.id, chapterNumber, topic);
      if (offlineCached) {
        setShortNote(offlineCached);
        setIsOfflineLoaded(true);
        setError(null);
      } else {
        console.warn('Notice loading study note:', err);
        const friendly = (err?.message === 'Failed to fetch')
          ? 'Offline mode: Note not yet cached locally. Connect to internet once to cache all unit notes.'
          : (err?.message || 'Failed to load AI Short Note');
        setError(friendly);
      }
    } finally {
      setLoading(false);
      setGeneratingAI(false);
    }
  };

  const handleSaveAllNotesOffline = async () => {
    try {
      setSavingAllOffline(true);
      const res = await fetch(`/api/books/${book.id}/short-notes`, {
        headers: { 'x-user-id': 'usr-student-premium' }
      });
      if (!res.ok) throw new Error('Failed to fetch unit notes');
      const data = await res.json();
      if (data.short_notes && Array.isArray(data.short_notes)) {
        await saveAllBookShortNotesOffline(book.id, data.short_notes);
        setAllNotesOffline(true);
      }
    } catch (e: any) {
      console.warn('Could not save all notes offline:', e);
    } finally {
      setSavingAllOffline(false);
    }
  };

  useEffect(() => {
    loadShortNote(false, focus, activeTopic);
  }, [book.id, chapterNumber, activeTopic, isDetailed]);

  const handleTopicClick = (topicTitle: string) => {
    const nextTopic = activeTopic === topicTitle ? '' : topicTitle;
    setActiveTopic(nextTopic);
    if (onSelectTopic) onSelectTopic(nextTopic);
  };

  const handleFocusChange = (newFocus: 'summary' | 'formulas' | 'euee') => {
    setFocus(newFocus);
    loadShortNote(false, newFocus, activeTopic);
    setTimeout(() => {
      if (newFocus === 'formulas' && formulasSectionRef.current) {
        formulasSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (newFocus === 'euee' && eueeSectionRef.current) {
        eueeSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (newFocus === 'summary' && overviewSectionRef.current) {
        overviewSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const handleRegenerateAI = () => {
    loadShortNote(true, focus, activeTopic);
  };

  const handleQuizSelect = (qIdx: number, optIdx: number) => {
    setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
    setShowQuizExplanations(prev => ({ ...prev, [qIdx]: true }));
  };

  const toggleExampleExpand = (idx: number) => {
    setExpandedExamples(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCopy = () => {
    if (!shortNote) return;

    const formatConcept = (c: any) => {
      if (typeof c === 'string') return `• ${c}`;
      if (c && typeof c === 'object') {
        let line = `• ${c.concept || c.title || ''}: ${c.explanation || ''}`;
        if (c.illustration_analogy) line += ` (Analogy: ${c.illustration_analogy})`;
        return line;
      }
      return '';
    };

    const formatFormula = (f: any) => {
      if (typeof f === 'string') return `• ${f}`;
      if (f && typeof f === 'object') {
        let line = `• ${f.formula_or_law || f.formula || ''}: ${f.explanation || ''}`;
        if (f.units_conditions) line += ` [Units/Bounds: ${f.units_conditions}]`;
        return line;
      }
      return '';
    };

    const formatTip = (t: any) => {
      if (typeof t === 'string') return `• ${t}`;
      if (t && typeof t === 'object') {
        const priority = t.frequency ? `[${t.frequency} Priority] ` : '';
        return `• ${priority}Trap: ${t.trap || t.tip || ''} — Solution: ${t.how_to_avoid || ''}`;
      }
      return '';
    };

    const textToCopy = `Short Note: ${shortNote.chapter_title} (${book.subject_name} - ${book.grade_name})
${activeTopic ? `Topic: ${activeTopic}\n` : ''}
Overview:
${shortNote.detailed_overview || shortNote.unit_summary}

Key Concepts:
${(shortNote.key_concepts || []).map(formatConcept).filter(Boolean).join('\n')}

Core Formulas & Rules:
${(shortNote.core_formulas_rules || []).map(formatFormula).filter(Boolean).join('\n')}

${examTerms.isEntrance ? 'EUEE Exam Traps & Tips:' : 'Frequently Asked Questions of Tests & Tips:'}
${(shortNote.euee_exam_tips || []).map(formatTip).filter(Boolean).join('\n')}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const chapterTopics: ChapterTopic[] = currentChapter?.topics || [];

  return (
    <div className={`flex-1 overflow-y-auto bg-[var(--bg-canvas)] p-4 sm:p-8 flex justify-center text-[var(--text-main)] theme-${theme}`}>
      <div className="max-w-4xl w-full space-y-6">
        {/* Unit Switcher Bar (if multiple chapters available) */}
        {chapters && chapters.length > 1 && (
          <div className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl p-3 shadow-sm">
            <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Curriculum Units & Chapters:</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {chapters.map((chap) => {
                const isSelected = (currentChapter?.chapter_number || chapterNumber) === chap.chapter_number;
                return (
                  <button
                    key={chap.id}
                    onClick={() => {
                      if (onSelectChapter) onSelectChapter(chap.chapter_number);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 shrink-0 ${
                      isSelected
                        ? isDetailed
                          ? 'bg-purple-600 text-white shadow-md'
                          : 'bg-emerald-600 text-white shadow-md'
                        : 'bg-[var(--bg-canvas)] text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--border-light)]'
                    }`}
                  >
                    <span>Unit {chap.chapter_number}</span>
                    <span className="opacity-80 max-w-[120px] truncate">{(chap.chapter_title || (chap as any).title || `Unit ${chap.chapter_number}`).replace(/^Unit\s*\d+:\s*/i, '')}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Top Unit Banner */}
        <div className={`border rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden ${
          isDetailed
            ? 'bg-gradient-to-br from-slate-900 via-purple-950/40 to-indigo-950/50 border-purple-800/40'
            : 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border-[var(--border-light)]'
        }`}>
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
            isDetailed ? 'bg-purple-500/10' : 'bg-indigo-500/5'
          }`} />

          <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <span className={`px-2.5 py-0.5 rounded-md border ${
                  isDetailed
                    ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                    : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                }`}>
                  {book.grade_name || 'Grade 10'} • {book.subject_name}
                </span>
                <span className={isDetailed ? 'text-purple-300' : 'text-indigo-400'}>
                  Unit {chapterNumber}
                </span>
                {isDetailed && (
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-200 border border-purple-400/40 flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-purple-300" />
                    <span>Detailed & In-Depth</span>
                  </span>
                )}
                {activeTopic && (
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Topic Focus
                  </span>
                )}
                {isOfflineLoaded && (
                  <span className="px-2.5 py-0.5 rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/30 flex items-center gap-1">
                    <HardDrive className="w-3 h-3 text-sky-400" />
                    <span>Offline Cache</span>
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-heading)] tracking-tight">
                {currentChapter ? currentChapter.chapter_title : (book.title || 'Unit Short Note')}
              </h1>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {isDetailed
                  ? `Comprehensive, in-depth curriculum mastery grounded in your official textbook. In-depth theoretical expositions, step-by-step derivations, worked solutions, and ${examTerms.isEntrance ? 'EUEE exam traps' : 'frequently asked questions of tests'}.`
                  : `AI-assisted in-depth revision notes grounded in your official textbook. Detailed explanations, illustrated formulas, worked examples, and ${examTerms.isEntrance ? 'interactive EUEE preparation' : 'frequently asked questions of tests'}.`
                }
              </p>
            </div>

            {/* AI Assistant Controls, Offline Save & Full PDF Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <button
                onClick={handleSaveAllNotesOffline}
                disabled={savingAllOffline}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border ${
                  allNotesOffline
                    ? 'bg-sky-950/80 text-sky-300 border-sky-800/60'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-heading)] border-[var(--border-medium)]'
                }`}
                title="Save all units and notes into local browser storage for offline studying without internet"
              >
                <DownloadCloud className={`w-3.5 h-3.5 ${savingAllOffline ? 'animate-spin text-sky-400' : 'text-sky-400'}`} />
                <span>{savingAllOffline ? 'Saving All Units...' : allNotesOffline ? '✓ Units Offline Ready' : 'Save Notes Offline'}</span>
              </button>

              <button
                onClick={handleRegenerateAI}
                disabled={generatingAI || loading}
                className={`px-4 py-2 disabled:opacity-50 text-[var(--text-heading)] rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg ${
                  isDetailed
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-900/30'
                    : 'bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 shadow-indigo-900/30'
                }`}
                title="Deepen or re-generate this note with AI"
              >
                <Sparkles className={`w-3.5 h-3.5 ${generatingAI ? 'animate-spin' : isDetailed ? 'text-purple-200' : 'text-amber-300'}`} />
                <span>{generatingAI ? 'AI Writing In-Depth Notes...' : isDetailed ? 'Deepen In-Depth Note with AI' : 'Deepen Note with AI'}</span>
              </button>

              <button
                onClick={onNavigateToPdf}
                className="px-4 py-2 bg-[var(--bg-card)] hover:bg-slate-700 text-[var(--text-main)] border border-[var(--border-medium)] rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2"
                title="View the original raw textbook PDF"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Full PDF Textbook</span>
              </button>
            </div>
          </div>

          {/* Sub-Topics Bar (According to textbook curriculum) */}
          {chapterTopics.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[var(--border-light)]/80">
              <div className="text-xs font-semibold text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Curriculum Topics in this Chapter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleTopicClick('')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
                    activeTopic === ''
                      ? 'bg-indigo-600 text-[var(--text-heading)] font-semibold shadow'
                      : 'bg-[var(--bg-canvas)]/70 text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--border-light)]'
                  }`}
                >
                  All Topics (Complete Unit)
                </button>
                {chapterTopics.map((topic) => {
                  const isSelected = activeTopic === topic.title;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => handleTopicClick(topic.title)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 font-bold shadow'
                          : 'bg-[var(--bg-canvas)]/70 text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--border-light)]'
                      }`}
                      title={topic.description}
                    >
                      <span className="opacity-70">{topic.topic_number}</span>
                      <span>{topic.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick Focus Tabs & Copy Control */}
          <div className="mt-5 pt-4 border-t border-[var(--border-light)]/60 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 bg-[var(--bg-canvas)]/70 p-1 rounded-xl border border-[var(--border-light)]/80">
              <button
                onClick={() => handleFocusChange('summary')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                  focus === 'summary'
                    ? 'bg-indigo-600 text-[var(--text-heading)] shadow'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                Comprehensive Study
              </button>
              <button
                onClick={() => handleFocusChange('formulas')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1.5 ${
                  focus === 'formulas'
                    ? 'bg-indigo-600 text-[var(--text-heading)] shadow'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isEnglish ? 'Grammar Rules & Formulas' : 'Formulas & Laws'}</span>
              </button>
              <button
                onClick={() => handleFocusChange('euee')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1.5 ${
                  focus === 'euee'
                    ? 'bg-amber-600 text-[var(--text-heading)] shadow'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
                <span>{examTerms.tabLabel}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl border border-[var(--border-light)] hover:bg-[var(--bg-card)] text-[var(--text-muted)] transition flex items-center gap-1.5 font-medium"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Note' : 'Copy Note'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Focus Spotlight Notification Banner */}
        {focus === 'formulas' && (
          <div className="p-4 rounded-2xl bg-indigo-950/70 border-2 border-indigo-500/50 flex flex-wrap items-center justify-between gap-3 text-xs text-indigo-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                <FileCode2 className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white text-sm block font-bold">
                  {isEnglish ? 'Grammar Rules & Formulations Active' : 'Essential Formulas & Laws Active'}
                </strong>
                <span className="text-[11px] text-indigo-300">
                  {isEnglish
                    ? 'Jumped directly to structural sentence patterns, tense rules, and worked transformations for Unit ' + chapterNumber + '.'
                    : 'Jumped directly to essential equations, governing laws, and step-by-step derivations for Unit ' + chapterNumber + '.'}
                </span>
              </div>
            </div>

            {isEnglish && onViewGrammarVocab && (
              <button
                onClick={onViewGrammarVocab}
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap shadow flex items-center gap-1.5 transition"
              >
                <span>Open Full Masterclass Tab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {focus === 'euee' && (
          <div className="p-4 rounded-2xl bg-amber-950/70 border-2 border-amber-500/50 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white text-sm block font-bold">
                  EUEE National Exam Traps & Examiner Secrets Active
                </strong>
                <span className="text-[11px] text-amber-200/90">
                  Jumped directly to high-yield distractor traps, examiner tricks, and interactive practice questions for Unit {chapterNumber}.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && !shortNote && (
          <div className="bg-[var(--bg-paper)] border border-[var(--border-light)] rounded-3xl p-12 text-center space-y-3">
            <div className="w-10 h-10 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-semibold text-[var(--text-main)]">Writing Comprehensive AI Short Note...</p>
            <p className="text-xs text-[var(--text-muted)]">Extracting and illustrating curriculum concepts from {book.title}</p>
          </div>
        )}

        {/* Error State */}
        {error && !shortNote && (
          <div className="bg-rose-950/40 border border-rose-900/60 rounded-3xl p-6 text-center text-rose-300 space-y-2">
            <AlertCircle className="w-6 h-6 mx-auto text-rose-400" />
            <p className="text-sm font-semibold">{error}</p>
            <button
              onClick={() => loadShortNote(false)}
              className="px-4 py-1.5 bg-rose-900 hover:bg-rose-800 text-[var(--text-heading)] rounded-xl text-xs font-semibold"
            >
              Retry
            </button>
          </div>
        )}

        {/* Detailed Short Note Content */}
        {shortNote && (
          <div className="space-y-6">
            {/* Active Topic Spotlight Card (shown at top when a topic is selected) */}
            {activeTopic && activeTopicData && (
              <div
                ref={topicSectionRef}
                className="rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/80 p-6 sm:p-7 shadow-2xl space-y-6 animate-in fade-in duration-200"
              >
                {/* Header Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-light)] pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        Unit {chapterNumber} • Topic Note
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Offline Ready
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-heading)] flex items-center gap-2.5 pt-1">
                      <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shrink-0" />
                      <span>{activeTopicData.topic_title || activeTopicData.title || activeTopic}</span>
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => handleTopicClick('')}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--bg-card)] hover:bg-slate-700 text-[var(--text-main)] hover:text-[var(--text-heading)] border border-[var(--border-medium)] transition flex items-center gap-1.5 shadow-sm"
                    >
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>View Full Unit Overview</span>
                    </button>
                    {onAskAITutor && (
                      <button
                        onClick={() => onAskAITutor(`Explain the topic '${activeTopicData.topic_title || activeTopicData.title || activeTopic}' from Grade ${book.grade_name} ${book.subject_name} Unit ${chapterNumber} in depth with key exam points.`)}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-[var(--text-heading)] transition flex items-center gap-1.5 shadow"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Ask AI Tutor</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* When isDetailed is true: Show In-Depth Detailed Explanation & Figures first */}
                {isDetailed ? (
                  <>
                    {/* 1. In-Depth Detailed Masterclass Explanation with Figures & Tables */}
                    {(activeTopicData.detailed_explanation || activeTopicData.explanation) && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border-2 border-purple-500/40 space-y-3 shadow-xl">
                        <div className="flex items-center justify-between border-b border-purple-900/50 pb-2.5">
                          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-purple-400" />
                            <span>In-Depth Detailed Notes & Mathematical / Physical Derivations</span>
                          </h3>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-purple-950 text-purple-200 border border-purple-700/60">
                            Detailed Masterclass
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
                          <MathMarkdownRenderer content={activeTopicData.detailed_explanation || activeTopicData.explanation || ''} />
                        </div>
                      </div>
                    )}

                    {/* 2. Diagram / Visual Schematic Figure from Textbook */}
                    {(activeTopicData.diagram_illustration || activeTopicData.illustration_analogy || activeTopicData.analogy) && (
                      <ScientificDiagramRenderer
                        diagramText={activeTopicData.diagram_illustration || activeTopicData.illustration_analogy || activeTopicData.analogy}
                        topicTitle={activeTopicData.topic_title || activeTopicData.title || ''}
                        subjectName={book.subject_name || ''}
                      />
                    )}

                    {/* 3. Core Concepts & Student Checklist */}
                    {(Array.isArray(activeTopicData.key_points) && activeTopicData.key_points.length > 0) && (
                      <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          <span>Core Concepts & Main Points (Student Checklist)</span>
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {activeTopicData.key_points.map((pt: string, pIdx: number) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-main)] bg-[var(--bg-canvas)]/70 p-3 rounded-xl border border-[var(--border-light)]/80 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="flex-1"><CurriculumFormattedText text={pt} /></span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 4. High-Yield Short Study Notes (Revision Summary) */}
                    {(Array.isArray(activeTopicData.short_notes) && activeTopicData.short_notes.length > 0) && (
                      <div className="p-5 rounded-xl bg-[var(--bg-canvas)]/90 border border-indigo-900/60 space-y-3 shadow-inner">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-indigo-300">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-indigo-400" />
                            <span>Key Takeaway Bullet Notes</span>
                          </div>
                          <span className="text-[11px] text-[var(--text-muted)] font-normal">Offline Accessible</span>
                        </div>
                        <div className="grid gap-2.5 pt-1">
                          {activeTopicData.short_notes.map((noteStr: string, nIdx: number) => {
                            const cleanNote = noteStr.replace(/^[•\-\*]\s*/, '');
                            return (
                              <div key={nIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-main)] leading-relaxed bg-[var(--bg-paper)]/80 p-3 rounded-xl border border-[var(--border-light)]">
                                <span className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                  {nIdx + 1}
                                </span>
                                <span className="flex-1"><CurriculumFormattedText text={cleanNote} /></span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {/* 1. High-Yield Short Study Notes */}
                    {(Array.isArray(activeTopicData.short_notes) && activeTopicData.short_notes.length > 0) && (
                      <div className="p-5 rounded-xl bg-[var(--bg-canvas)]/90 border border-indigo-900/60 space-y-3 shadow-inner">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-indigo-300">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-indigo-400" />
                            <span>High-Yield Short Study Notes</span>
                          </div>
                          <span className="text-[11px] text-[var(--text-muted)] font-normal">Offline Accessible</span>
                        </div>
                        <div className="grid gap-2.5 pt-1">
                          {activeTopicData.short_notes.map((noteStr: string, nIdx: number) => {
                            const cleanNote = noteStr.replace(/^[•\-\*]\s*/, '');
                            return (
                              <div key={nIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-main)] leading-relaxed bg-[var(--bg-paper)]/80 p-3 rounded-xl border border-[var(--border-light)]">
                                <span className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                  {nIdx + 1}
                                </span>
                                <span className="flex-1"><CurriculumFormattedText text={cleanNote} /></span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* 2. Core Concepts & Student Checklist */}
                    {(Array.isArray(activeTopicData.key_points) && activeTopicData.key_points.length > 0) && (
                      <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          <span>Core Concepts & Main Points (Student Checklist)</span>
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {activeTopicData.key_points.map((pt: string, pIdx: number) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-main)] bg-[var(--bg-canvas)]/70 p-3 rounded-xl border border-[var(--border-light)]/80 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="flex-1"><CurriculumFormattedText text={pt} /></span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3. Detailed Explanation */}
                    {(activeTopicData.detailed_explanation || activeTopicData.explanation) && (
                      <div className="p-5 rounded-xl bg-[var(--bg-canvas)]/70 border border-[var(--border-light)] space-y-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-emerald-400" />
                          <span>Topic Explanation</span>
                        </h3>
                        <div className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
                          <MathMarkdownRenderer content={activeTopicData.detailed_explanation || activeTopicData.explanation || ''} />
                        </div>
                      </div>
                    )}

                    {/* 4. Diagram / Mental Model */}
                    {(activeTopicData.diagram_illustration || activeTopicData.illustration_analogy || activeTopicData.analogy) && (
                      <ScientificDiagramRenderer
                        diagramText={activeTopicData.diagram_illustration || activeTopicData.illustration_analogy || activeTopicData.analogy}
                        topicTitle={activeTopicData.topic_title || activeTopicData.title || ''}
                        subjectName={book.subject_name || ''}
                      />
                    )}
                  </>
                )}

                {/* 5. Ethiopian Real-World Application & Exam Focus */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeTopicData.ethiopian_context && (
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-900/50 text-xs sm:text-sm text-emerald-200 flex items-start gap-3">
                      <Compass className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <strong className="text-emerald-300 block font-semibold text-xs uppercase tracking-wide">
                          Ethiopian Real-World Context
                        </strong>
                        <p className="text-[var(--text-muted)] leading-relaxed text-xs">
                          <CurriculumFormattedText text={activeTopicData.ethiopian_context} />
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTopicData.exam_focus && (
                    <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-900/50 text-xs sm:text-sm text-rose-200 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <strong className="text-rose-300 block font-semibold text-xs uppercase tracking-wide">
                          EUEE National Exam Trap & Strategy
                        </strong>
                        <p className="text-[var(--text-muted)] leading-relaxed text-xs">
                          <CurriculumFormattedText text={activeTopicData.exam_focus} />
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 6. Key Takeaway */}
                {activeTopicData.key_takeaway && (
                  <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)]/60 border border-emerald-900/40 text-xs sm:text-sm text-emerald-300 flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-400">Mastery Takeaway: </strong>
                      <span>{activeTopicData.key_takeaway}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 1. In-Depth Conceptual Overview */}
            <div
              ref={overviewSectionRef}
              id="overview-section"
              className="bg-[var(--bg-paper)]/90 border border-[var(--border-light)] rounded-2xl p-6 shadow-md space-y-4"
            >
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Comprehensive Conceptual Overview</span>
                </div>
                <span className="text-[11px] text-slate-500">Curriculum Grounded</span>
              </div>

              <div className="text-sm sm:text-base leading-relaxed">
                <MathMarkdownRenderer content={shortNote.detailed_overview || shortNote.unit_summary || ''} />
              </div>
            </div>

            {/* 2. Topic-by-Topic Breakdown */}
            {shortNote.topics_covered && shortNote.topics_covered.length > 0 && (
              <div className="bg-[var(--bg-paper)]/90 border border-[var(--border-light)] rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                  <Layers className="w-4 h-4" />
                  <span>Specific Curriculum Topics & Deep Dives</span>
                </div>

                <div className="grid gap-6">
                  {shortNote.topics_covered.map((top: any, idx: number) => {
                    const title = top.topic_title || top.title || `Topic ${idx + 1}`;
                    const shortNotes: string[] = Array.isArray(top.short_notes) && top.short_notes.length > 0
                      ? top.short_notes
                      : [];
                    const keyPoints: string[] = Array.isArray(top.key_points) && top.key_points.length > 0
                      ? top.key_points
                      : [];
                    const explanation = top.detailed_explanation || top.explanation || '';
                    const illustration = top.diagram_illustration || top.illustration_analogy || top.analogy || '';
                    const ethiopianContext = top.ethiopian_context || '';
                    const examFocus = top.exam_focus || '';
                    const takeaway = top.key_takeaway || '';

                    return (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-canvas)]/85 border border-[var(--border-light)] space-y-4 hover:border-[var(--border-medium)]/80 transition shadow-lg"
                      >
                        {/* Topic Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-light)]/80 pb-3">
                          <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)] flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                            {title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-800/60">
                              Topic {idx + 1}
                            </span>
                            <button
                              onClick={() => handleTopicClick(title)}
                              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-[var(--text-heading)] transition flex items-center gap-1 shadow-sm"
                            >
                              <span>Focus Topic</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* 1. Topic Short Study Notes */}
                        {shortNotes.length > 0 && (
                          <div className="p-4 rounded-xl bg-[var(--bg-paper)]/90 border border-indigo-900/40 space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
                              <FileText className="w-3.5 h-3.5 text-indigo-400" />
                              <span>Topic Short Study Notes</span>
                            </div>
                            <div className="space-y-2.5">
                              {shortNotes.map((noteStr: string, nIdx: number) => {
                                const cleanNote = noteStr.replace(/^[•\-\*]\s*/, '');
                                return (
                                  <div key={nIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-main)] leading-relaxed pl-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                                    <span><CurriculumFormattedText text={cleanNote} /></span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* 2. Important Main Points (Essential for Students) */}
                        {keyPoints.length > 0 && (
                          <div className="space-y-2.5 pt-1">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                              Core Concepts & Main Points (Student Checklist)
                            </h4>
                            <ul className="space-y-2 pl-1">
                              {keyPoints.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0 mt-2" />
                                  <span className="flex-1"><CurriculumFormattedText text={pt} /></span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 3. Detailed Explanation & Context */}
                        {explanation && (
                          <div className="pt-2 space-y-1.5 border-t border-slate-900">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                              Detailed Explanation & Underlying Mechanics
                            </h4>
                            <div className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pl-1">
                              <MathMarkdownRenderer content={explanation} />
                            </div>
                          </div>
                        )}

                        {/* 4. Conceptual Illustration / Diagram / Mental Model */}
                        {illustration && (
                          <ScientificDiagramRenderer
                            diagramText={illustration}
                            topicTitle={title}
                            subjectName={book.subject_name || ''}
                          />
                        )}

                        {/* 5. Ethiopian Context & Applications */}
                        {ethiopianContext && (
                          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/50 text-xs text-emerald-200 flex items-start gap-2.5">
                            <Compass className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div className="space-y-0.5">
                              <strong className="text-emerald-400 block text-xs font-semibold">Ethiopian Real-World Application:</strong>
                              <span className="leading-relaxed"><CurriculumFormattedText text={ethiopianContext} /></span>
                            </div>
                          </div>
                        )}

                        {/* 6. High-Yield Exam Focus / Examiner Trap */}
                        {examFocus && (
                          <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-900/50 text-xs text-rose-200 flex items-start gap-2.5">
                            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                            <div className="space-y-0.5">
                              <strong className="text-rose-400 block text-xs font-semibold">National Exam (EUEE) Trap & Strategy:</strong>
                              <span className="leading-relaxed"><CurriculumFormattedText text={examFocus} /></span>
                            </div>
                          </div>
                        )}

                        {/* 7. High-Yield Mastery Takeaway */}
                        {takeaway && (
                          <div className="pt-2 border-t border-slate-900 text-xs text-emerald-300/90 flex items-start gap-2">
                            <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-emerald-400">Mastery Takeaway: </strong>
                              <span>{takeaway}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Core Concepts & Principles */}
            <div className="bg-[var(--bg-paper)]/90 border border-[var(--border-light)] rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Core Concepts & Principles</span>
              </div>

              <div className="grid gap-3">
                {(shortNote.key_concepts || []).map((conceptItem: any, idx: number) => {
                  const isObj = typeof conceptItem === 'object' && conceptItem !== null;
                  const title = isObj ? (conceptItem.concept || conceptItem.title || `Concept ${idx + 1}`) : String(conceptItem);
                  const explanation = isObj ? conceptItem.explanation : null;
                  const analogy = isObj ? (conceptItem.illustration_analogy || conceptItem.analogy) : null;

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-canvas)]/60 border border-[var(--border-light)] flex items-start gap-3.5 hover:border-[var(--border-medium)]/80 transition"
                    >
                      <div className="w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="flex-1 space-y-1.5 min-w-0">
                        <div className="text-sm font-semibold text-[var(--text-heading)]">
                          {title}
                        </div>
                        {explanation && (
                          <div className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                            <MathMarkdownRenderer content={explanation} />
                          </div>
                        )}
                        {analogy && (
                          <div className="p-2.5 mt-2 rounded-lg bg-indigo-950/30 border border-indigo-900/40 text-xs text-indigo-300 flex items-start gap-2">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <div className="leading-relaxed">
                              <strong className="text-amber-300">Mental Model / Analogy: </strong>
                              <span>{analogy}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Core Formulas & Governing Laws */}
            {shortNote.core_formulas_rules && shortNote.core_formulas_rules.length > 0 && (
              <div
                ref={formulasSectionRef}
                id="formulas-section"
                className="bg-gradient-to-br from-slate-900 to-indigo-950/30 border-2 border-indigo-500/40 rounded-2xl p-6 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
                    <FileCode2 className="w-4 h-4 text-emerald-400" />
                    <span>{isEnglish ? 'Grammar Rules & Structural Formulation' : 'Essential Formulas & Scientific Laws'}</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-semibold">
                    {isEnglish ? 'Grammar Bank' : 'Formula Sheet'}
                  </span>
                </div>

                <div className="grid gap-3">
                  {shortNote.core_formulas_rules.map((ruleItem: any, idx: number) => {
                    const isObj = typeof ruleItem === 'object' && ruleItem !== null;
                    const formula = isObj ? (ruleItem.formula_or_law || ruleItem.formula || ruleItem.name || `Rule ${idx + 1}`) : String(ruleItem);
                    const explanation = isObj ? ruleItem.explanation : null;
                    const conditions = isObj ? (ruleItem.units_conditions || ruleItem.conditions) : null;

                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[var(--bg-canvas)]/80 border border-indigo-900/40 space-y-2 hover:border-indigo-800/60 transition"
                      >
                        <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-emerald-300 font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                          <span className="leading-relaxed">{formula}</span>
                        </div>
                        {explanation && (
                          <div className="text-xs sm:text-sm text-[var(--text-muted)] pl-4 leading-relaxed">
                            <MathMarkdownRenderer content={explanation} />
                          </div>
                        )}
                        {conditions && (
                          <div className="pl-4 text-[11px] text-indigo-300 flex items-center gap-1.5">
                            <span className="font-semibold text-indigo-400">Units & Bounds:</span>
                            <span className="font-mono text-[var(--text-muted)]">{conditions}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5. Illustrative Worked Examples */}
            {(shortNote.worked_examples && shortNote.worked_examples.length > 0) ? (
              <div className="bg-[var(--bg-paper)]/90 border border-[var(--border-light)] rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                    <BookOpen className="w-4 h-4" />
                    <span>Illustrative Worked Examples ({shortNote.worked_examples.length})</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">Step-by-step derivations</span>
                </div>

                <div className="space-y-4">
                  {shortNote.worked_examples.map((ex: any, idx: number) => {
                    const isExpanded = !!expandedExamples[idx];
                    const problem = ex.problem_statement || ex.problem || ex.title || `Worked Example ${idx + 1}`;
                    const approach = ex.approach_hint || ex.title || ex.examiner_note;
                    const solution = ex.step_by_step_solution || ex.step_solution || '';
                    const answer = ex.final_answer || ex.result || '';
                    const mistake = ex.common_mistakes_to_avoid || (ex.examiner_note !== approach ? ex.examiner_note : undefined);

                    return (
                      <div
                        key={idx}
                        className="bg-[var(--bg-canvas)]/90 rounded-2xl border border-[var(--border-light)] overflow-hidden transition"
                      >
                        <button
                          onClick={() => toggleExampleExpand(idx)}
                          className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-[var(--bg-paper)]/60 transition"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">
                              #{idx + 1}
                            </span>
                            <span className="font-semibold text-sm text-[var(--text-main)]">
                              {problem}
                            </span>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="p-4 pt-0 border-t border-[var(--border-light)]/80 space-y-3 text-xs sm:text-sm">
                            {approach && (
                              <div className="p-2.5 bg-indigo-950/40 rounded-xl border border-indigo-800/30 text-indigo-300">
                                <strong className="text-indigo-200">Approach & Strategy: </strong>
                                {approach}
                              </div>
                            )}

                            {solution && (
                              <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                                  Step-by-Step Derivation
                                </div>
                                <pre className="font-sans bg-[var(--bg-paper)] p-3.5 rounded-xl border border-[var(--border-light)] text-xs text-[var(--text-main)] whitespace-pre-wrap leading-relaxed">
                                  {solution}
                                </pre>
                              </div>
                            )}

                            {answer && (
                              <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl">
                                <span className="text-xs font-semibold text-emerald-400">Final Result:</span>
                                <span className="text-xs sm:text-sm font-bold text-[var(--text-heading)] font-mono">{answer}</span>
                              </div>
                            )}

                            {mistake && (
                              <div className="p-2.5 bg-amber-950/30 rounded-xl border border-amber-800/30 text-amber-200 text-xs">
                                <strong className="text-amber-400">⚠️ Examiner Advice / Trap: </strong>
                                {mistake}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : shortNote.quick_example ? (
              /* Fallback for single quick example */
              <div className="bg-[var(--bg-paper)]/90 border border-[var(--border-light)] rounded-2xl p-6 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                  <BookOpen className="w-4 h-4" />
                  <span>Model Problem & Quick Solution</span>
                </div>

                <div className="bg-[var(--bg-canvas)]/80 rounded-xl p-4 border border-[var(--border-light)] space-y-2.5">
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[var(--text-muted)] mb-1">Problem</div>
                    <p className="text-xs sm:text-sm text-[var(--text-main)]">{shortNote.quick_example.problem}</p>
                  </div>
                  <div className="pt-2 border-t border-[var(--border-light)]">
                    <div className="text-[11px] font-bold uppercase text-emerald-400 mb-1">Step-by-Step Resolution</div>
                    <pre className="font-sans text-xs text-[var(--text-muted)] whitespace-pre-wrap leading-relaxed">
                      {shortNote.quick_example.step_solution}
                    </pre>
                  </div>
                  <div className="pt-2 border-t border-[var(--border-light)] text-xs font-semibold text-emerald-400 flex items-center gap-2">
                    <span>Result:</span>
                    <span className="text-[var(--text-heading)] font-mono">{shortNote.quick_example.result}</span>
                  </div>
                </div>
              </div>
            ) : null}

            {/* 6. Real-World Applications (Ethiopian & Scientific Context) */}
            {shortNote.real_world_applications && shortNote.real_world_applications.length > 0 && (
              <div className="bg-[var(--bg-paper)]/90 border border-[var(--border-light)] rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <Compass className="w-4 h-4" />
                  <span>Real-World & Applied Illustrations</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {shortNote.real_world_applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-canvas)]/70 border border-[var(--border-light)] space-y-1.5"
                    >
                      <span className="text-xs font-bold text-emerald-300">{app.domain}</span>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. Interactive Practice Quiz */}
            {shortNote.practice_quiz && shortNote.practice_quiz.length > 0 && (
              <div className="bg-[var(--bg-paper)]/90 border border-indigo-900/40 rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                    <BookCheck className="w-4 h-4 text-indigo-400" />
                    <span>Self-Check Interactive Quiz</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">{shortNote.practice_quiz.length} Questions</span>
                </div>

                <div className="space-y-4">
                  {shortNote.practice_quiz.map((q: any, qIdx: number) => {
                    const selectedOpt = quizAnswers[qIdx];
                    const isAnswered = selectedOpt !== undefined;
                    const correctIndex = q.correct_index !== undefined ? q.correct_index : (q.correct_option !== undefined ? q.correct_option : 0);
                    const isCorrect = isAnswered && selectedOpt === correctIndex;

                    return (
                      <div
                        key={qIdx}
                        className="bg-[var(--bg-canvas)]/80 rounded-2xl p-4 border border-[var(--border-light)] space-y-3"
                      >
                        <div className="text-xs sm:text-sm font-semibold text-[var(--text-heading)]">
                          <span className="text-indigo-400 mr-2">Q{qIdx + 1}.</span>
                          {q.question}
                        </div>

                        <div className="grid gap-2">
                          {(q.options || []).map((opt: string, optIdx: number) => {
                            let optStyle = 'bg-[var(--bg-paper)] hover:bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-light)]';
                            if (isAnswered) {
                              if (optIdx === correctIndex) {
                                optStyle = 'bg-emerald-950/80 text-emerald-200 border-emerald-600 font-semibold';
                              } else if (selectedOpt === optIdx) {
                                optStyle = 'bg-rose-950/80 text-rose-200 border-rose-600';
                              } else {
                                optStyle = 'opacity-50 bg-[var(--bg-paper)] text-slate-500 border-[var(--border-light)]';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleQuizSelect(qIdx, optIdx)}
                                className={`text-left p-2.5 rounded-xl border text-xs transition flex items-center gap-2.5 ${optStyle}`}
                              >
                                <span className="w-5 h-5 rounded-md bg-[var(--bg-card)] flex items-center justify-center font-bold text-[10px] shrink-0">
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span className="leading-snug">{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {isAnswered && showQuizExplanations[qIdx] && (
                          <div
                            className={`p-3 rounded-xl text-xs space-y-1 ${
                              isCorrect
                                ? 'bg-emerald-950/40 border border-emerald-800/40 text-emerald-200'
                                : 'bg-amber-950/40 border border-amber-800/40 text-amber-200'
                            }`}
                          >
                            <div className="font-bold flex items-center gap-1.5">
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                  <span>Correct Answer!</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-3.5 h-3.5 text-rose-400" />
                                  <span>Incorrect (Correct is Option {String.fromCharCode(65 + correctIndex)})</span>
                                </>
                              )}
                            </div>
                            <div className="text-[var(--text-muted)] leading-relaxed">
                              <MathMarkdownRenderer content={q.explanation || ''} />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 8. High-Yield EUEE Exam Traps */}
            {shortNote.euee_exam_tips && shortNote.euee_exam_tips.length > 0 && (
              <div
                ref={eueeSectionRef}
                id="euee-section"
                className="bg-gradient-to-br from-slate-900 to-amber-950/20 border-2 border-amber-500/40 rounded-2xl p-6 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>EUEE Exam Traps & Examiner Secrets</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                    National Exam Watchlist
                  </span>
                </div>

                <div className="grid gap-2.5">
                  {shortNote.euee_exam_tips.map((tipItem: any, idx: number) => {
                    const isObj = typeof tipItem === 'object' && tipItem !== null;
                    const trap = isObj ? (tipItem.trap || tipItem.tip || tipItem.title || `Exam Trap ${idx + 1}`) : String(tipItem);
                    const howToAvoid = isObj ? tipItem.how_to_avoid : null;
                    const frequency = isObj ? tipItem.frequency : null;

                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[var(--bg-canvas)]/70 border border-amber-900/30 flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ⚠️
                        </div>
                        <div className="flex-1 space-y-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs sm:text-sm font-semibold text-amber-200">{trap}</span>
                            {frequency && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-medium">
                                {frequency} Priority
                              </span>
                            )}
                          </div>
                          {howToAvoid && (
                            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                              <strong className="text-amber-400">How to Avoid: </strong>
                              {howToAvoid}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Topic Navigation & Page-by-Page Controls */}
            <div className="bg-[var(--bg-paper)] border border-[var(--border-light)] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
              <button
                onClick={() => {
                  const currentIdx = chapterTopics.findIndex(t => t.title === activeTopic);
                  if (currentIdx > 0) {
                    handleTopicClick(chapterTopics[currentIdx - 1].title);
                  } else if (currentIdx === 0) {
                    handleTopicClick('');
                  }
                }}
                disabled={!activeTopic || chapterTopics.findIndex(t => t.title === activeTopic) === -1}
                className="px-3.5 py-2 bg-[var(--bg-canvas)] hover:bg-slate-800 disabled:opacity-40 text-[var(--text-main)] rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-[var(--border-light)] transition"
              >
                <span>← Previous Topic</span>
              </button>

              <div className="text-center">
                <span className="text-xs font-bold text-[var(--text-heading)] block">
                  {activeTopic ? activeTopic : `Unit ${chapterNumber}: All Topics`}
                </span>
                <span className="text-[11px] text-[var(--text-muted)]">
                  {activeTopic && chapterTopics.find(t => t.title === activeTopic)?.start_page
                    ? `Textbook Page ${chapterTopics.find(t => t.title === activeTopic)?.start_page} • ${chapterTopics.length} Topics Total`
                    : `Pages ${currentChapter?.start_page || 1} – ${currentChapter?.end_page || 40} • Complete Unit`}
                </span>
              </div>

              <button
                onClick={() => {
                  const currentIdx = chapterTopics.findIndex(t => t.title === activeTopic);
                  if (currentIdx === -1 && chapterTopics.length > 0) {
                    handleTopicClick(chapterTopics[0].title);
                  } else if (currentIdx >= 0 && currentIdx < chapterTopics.length - 1) {
                    handleTopicClick(chapterTopics[currentIdx + 1].title);
                  }
                }}
                disabled={chapterTopics.length === 0 || chapterTopics.findIndex(t => t.title === activeTopic) >= chapterTopics.length - 1}
                className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow transition"
              >
                <span>Next Topic →</span>
              </button>
            </div>

            {/* Bottom Actions Banner */}
            <div className="bg-[var(--bg-paper)] border border-[var(--border-light)] rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-[var(--text-heading)]">Need the original textbook pages?</h4>
                <p className="text-xs text-[var(--text-muted)]">
                  You can jump into the full textbook PDF anytime to see diagrams, chapter problems, and the unabridged curriculum text.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() =>
                    onAskAITutor(
                      `Explain Unit ${chapterNumber} (${currentChapter?.chapter_title}) from ${book.title}. Focus on key formulas and past entrance exam questions.`
                    )
                  }
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-[var(--text-heading)] rounded-xl text-xs font-bold transition flex items-center gap-2 shadow"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI Tutor</span>
                </button>
                <button
                  onClick={onNavigateToPdf}
                  className="px-4 py-2 bg-[var(--bg-card)] hover:bg-slate-700 text-[var(--text-main)] border border-[var(--border-medium)] rounded-xl text-xs font-bold transition flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Open Full PDF</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
