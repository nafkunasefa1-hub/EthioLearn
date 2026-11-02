import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Brain,
  Sparkles,
  BookOpen,
  RotateCw,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Lightbulb,
  AlertCircle,
  GraduationCap,
  Award,
  Filter,
  Layers,
  Zap,
  Check,
  RefreshCw,
  Share2,
  Languages,
  Calendar,
  Trash2,
  Clock,
  Flame,
  CheckCheck,
  HelpCircle
} from 'lucide-react';
import { apiFetchJson } from '../utils/api';
import { Topic, Subject, Flashcard } from '../types';
import {
  getAllErrorNotebookEntries,
  reviewErrorNotebookItem,
  removeErrorNotebookItem,
  getErrorNotebookStats,
  ErrorNotebookEntry
} from '../utils/errorNotebookStore';
import { BilingualGlossaryModal } from '../components/BilingualGlossaryModal';
import { P2POfflineSharingModal } from '../components/P2POfflineSharingModal';
import { FormattedQuestionText, renderRichInline } from '../components/FormattedQuestionText';

interface FlashcardsPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
  initialTopicId?: string;
}

export const FlashcardsPage: React.FC<FlashcardsPageProps> = ({ onNavigate, initialTopicId }) => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'topics' | 'error_notebook'>('topics');

  // Modals state
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isP2PShareOpen, setIsP2PShareOpen] = useState(false);

  // Curriculum flashcard state
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId || '');

  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // Error Notebook (Leitner System) state
  const [errorEntries, setErrorEntries] = useState<ErrorNotebookEntry[]>([]);
  const [errorBoxFilter, setErrorBoxFilter] = useState<'all' | 'due' | 1 | 2 | 3 | 4>('due');
  const [errorCurrentIndex, setErrorCurrentIndex] = useState(0);
  const [errorIsFlipped, setErrorIsFlipped] = useState(false);
  const [errorStats, setErrorStats] = useState(getErrorNotebookStats());

  const refreshErrorNotebook = () => {
    const list = getAllErrorNotebookEntries();
    setErrorEntries(list);
    setErrorStats(getErrorNotebookStats());
    setErrorCurrentIndex(0);
    setErrorIsFlipped(false);
  };

  useEffect(() => {
    refreshErrorNotebook();
  }, []);

  // Filtered Error Notebook entries based on Leitner Box
  const filteredErrorEntries = errorEntries.filter(entry => {
    if (errorBoxFilter === 'all') return true;
    if (errorBoxFilter === 'due') {
      return entry.leitner_box < 4 && new Date(entry.next_review_due) <= new Date();
    }
    return entry.leitner_box === errorBoxFilter;
  });

  // Load subject and topic data
  useEffect(() => {
    const loadCurriculum = async () => {
      try {
        const [subData, topData] = await Promise.all([
          apiFetchJson<Subject[]>('/api/subjects', {}, []),
          apiFetchJson<Topic[]>('/api/topics', {}, [])
        ]);

        setSubjects(subData || []);
        setTopics(topData || []);

        if (!selectedTopicId && topData && topData.length > 0) {
          setSelectedTopicId(topData[0].id);
        }
      } catch (err) {
        console.error('Flashcard curriculum load error:', err);
      } finally {
        setLoading(false);
      }
    };
    loadCurriculum();
  }, []);

  // Load flashcards for selected topic
  useEffect(() => {
    if (!selectedTopicId) return;

    let isMounted = true;
    const fetchOrGenerateFlashcards = async () => {
      try {
        const savedCards = await apiFetchJson<Flashcard[]>(`/api/flashcards?topic_id=${selectedTopicId}`, {}, []);
        if (savedCards && savedCards.length > 0 && isMounted) {
          setFlashcards(savedCards);
          setCurrentIndex(0);
          setIsFlipped(false);
          return;
        }
      } catch (err) {
        console.warn('Error fetching saved flashcards:', err);
      }

      if (!isMounted) return;

      const currentTopic = topics.find(t => t.id === selectedTopicId) || topics[0];
      const subj = subjects.find(s => s.id === currentTopic?.subject_id);

      const topicName = currentTopic?.topic_name || 'Quadratic Equations';
      const subjectName = subj?.name || 'Mathematics';

      const cards: Flashcard[] = [
        {
          id: `fc-${selectedTopicId}-1`,
          topic_id: selectedTopicId,
          topic_name: topicName,
          front_title: `${topicName} — Core Definition`,
          front_subtitle: subjectName,
          front_content: `What is the fundamental governing definition, physical meaning, and standard mathematical representation of ${topicName}?`,
          back_definition: `${topicName} represents a central curriculum concept in ${subjectName} describing relationships between system variables and governing physical or analytical laws.`,
          formula_or_keypoint: 'Master the fundamental equations, SI unit constraints, and sign conventions.',
          ethiopian_context: 'Critical foundation for science and technology disciplines in Ethiopian higher education.',
          euee_exam_trap: 'Watch for subtle examiner traps like missing negative signs or mismatched units.'
        },
        {
          id: `fc-${selectedTopicId}-2`,
          topic_id: selectedTopicId,
          topic_name: topicName,
          front_title: `${topicName} — Key Formula & Units`,
          front_subtitle: subjectName,
          front_content: `What is the primary governing formula for ${topicName}, and what units must each variable have?`,
          back_definition: `Use standard SI units before substituting variables into the governing equations to prevent calculation errors.`,
          formula_or_keypoint: 'State given variables, identify target unknowns, and verify intermediate steps.',
          ethiopian_context: 'Applied in Ethiopian national infrastructure projects and medical laboratories.',
          euee_exam_trap: 'Examiners often provide initial values in non-SI units (e.g., cm or grams) to test conversion speed.'
        },
        {
          id: `fc-${selectedTopicId}-3`,
          topic_id: selectedTopicId,
          topic_name: topicName,
          front_title: `${topicName} — 45-Second EUEE Shortcut`,
          front_subtitle: subjectName,
          front_content: `How can you solve standard EUEE examination problems on ${topicName} in under 45 seconds?`,
          back_definition: `Identify boundary conditions, eliminate impossible options using dimensional analysis, and test extreme or zero values.`,
          formula_or_keypoint: 'Dimensional analysis eliminates 2 out of 4 options in over 40% of physical and mathematical exam items.',
          ethiopian_context: 'High-speed problem solving is essential for competitive university placement across Ethiopia.',
          euee_exam_trap: 'Do not spend over 1 minute on a single calculation; mark for review and proceed.'
        }
      ];

      setFlashcards(cards);
      setCurrentIndex(0);
      setIsFlipped(false);
    };

    fetchOrGenerateFlashcards();
    return () => { isMounted = false; };
  }, [selectedTopicId, topics, subjects]);

  const activeCard = flashcards[currentIndex];
  const activeErrorCard = filteredErrorEntries[errorCurrentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setFlashcards((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  // Error Notebook Leitner Review Actions
  const handleLeitnerReview = (isCorrect: boolean) => {
    if (!activeErrorCard) return;
    reviewErrorNotebookItem(activeErrorCard.question_id, isCorrect);
    refreshErrorNotebook();
  };

  const handleRemoveErrorItem = (qId: string) => {
    if (confirm('Remove this question from your Error Notebook?')) {
      removeErrorNotebookItem(qId);
      refreshErrorNotebook();
    }
  };

  const filteredTopics = selectedSubjectId === 'all'
    ? topics
    : topics.filter(t => t.subject_id === selectedSubjectId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5" /> High-Yield Active Recall
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Leitner Spaced Repetition
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Curriculum Flashcards & Error Notebook
          </h1>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
            Review textbook formulas and automatically convert missed exam questions into spaced-repetition flashcards for maximum EUEE retention.
          </p>
        </div>

        {/* Global Action Shortcut Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap shrink-0">
          <button
            onClick={() => setIsGlossaryOpen(true)}
            className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
            title="Open Trilingual Scientific Glossary"
          >
            <Languages className="w-4 h-4 text-emerald-400" />
            <span>Glossary</span>
          </button>

          <button
            onClick={() => setIsP2PShareOpen(true)}
            className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
            title="Share via SHAREit, Xender or Bluetooth"
          >
            <Share2 className="w-4 h-4 text-indigo-400" />
            <span>P2P Share</span>
          </button>

          <button
            onClick={() => onNavigate('practice-topics')}
            className="px-3.5 py-2.5 bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md"
          >
            <Layers className="w-4 h-4" />
            <span>Practice</span>
          </button>
        </div>
      </div>

      {/* Main Mode Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('topics')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
            activeTab === 'topics'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Curriculum Flashcards</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('error_notebook');
            refreshErrorNotebook();
          }}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
            activeTab === 'error_notebook'
              ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Flame className="w-4 h-4 text-amber-300" />
          <span>Error Notebook / Weak Spots</span>
          {errorStats.dueToday > 0 && (
            <span className="px-2 py-0.5 bg-rose-500 text-white text-[10px] font-mono rounded-full font-bold">
              {errorStats.dueToday} Due
            </span>
          )}
        </button>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: CURRICULUM SYLLABUS FLASHCARDS */}
      {/* ======================================================== */}
      {activeTab === 'topics' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Selector Toolbar */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <Filter className="w-4 h-4 text-emerald-400" />
                <span>Select Subject & Topic</span>
              </div>

              <div className="text-xs text-slate-400">
                {masteredIds.size} of {flashcards.length} cards mastered in current topic
              </div>
            </div>

            {/* Subject Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedSubjectId('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  selectedSubjectId === 'all'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                All Subjects
              </button>
              {subjects.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubjectId(s.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap ${
                    selectedSubjectId === s.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Topic Selector Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-1 bg-slate-900/60 rounded-xl border border-slate-800">
              {filteredTopics.map(t => {
                const isSelected = t.id === selectedTopicId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopicId(t.id)}
                    className={`text-left p-2.5 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 font-bold'
                        : 'text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="truncate">{t.topic_name}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Card Deck */}
          {activeCard ? (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-slate-300">
                  Card {currentIndex + 1} of {flashcards.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShuffle}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition flex items-center gap-1.5 text-xs"
                    title="Shuffle deck"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>Shuffle</span>
                  </button>

                  <button
                    onClick={() => toggleMastered(activeCard.id)}
                    className={`px-3 py-1 rounded-lg font-bold transition flex items-center gap-1.5 text-xs ${
                      masteredIds.has(activeCard.id)
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/80'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{masteredIds.has(activeCard.id) ? 'Mastered' : 'Mark Mastered'}</span>
                  </button>
                </div>
              </div>

              {/* 3D Flip Card */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer group relative min-h-[340px] rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 border-2 border-slate-700/80 shadow-2xl transition-all duration-300 hover:border-emerald-500/60 flex flex-col justify-between overflow-hidden"
              >
                {!isFlipped ? (
                  <div className="space-y-5 my-auto">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-950/60 border border-amber-800/60 rounded-full inline-block">
                        {activeCard.front_subtitle || activeCard.topic_name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Click anywhere to reveal answer 🔄
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                      {activeCard.front_title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {activeCard.front_content}
                    </p>

                    <div className="pt-4 text-xs text-indigo-400 flex items-center gap-2 font-medium">
                      <RotateCw className="w-4 h-4 text-emerald-400" />
                      <span>Tap to flip and check solution</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 my-auto">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Solution & Explanation
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">Back Side</span>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm text-slate-100 leading-relaxed font-medium">
                        {activeCard.back_definition}
                      </p>

                      {activeCard.formula_or_keypoint && (
                        <div className="p-3 bg-slate-950/80 border border-indigo-900/60 rounded-xl text-xs text-indigo-200 space-y-1">
                          <span className="font-bold text-indigo-300 block uppercase tracking-wider">Formula / Key Point:</span>
                          <div className="font-mono text-emerald-300 font-semibold">{activeCard.formula_or_keypoint}</div>
                        </div>
                      )}

                      {activeCard.ethiopian_context && (
                        <div className="p-3 bg-emerald-950/40 border border-emerald-900/50 rounded-xl text-xs text-emerald-200 flex items-start gap-2">
                          <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-emerald-300 block">Ethiopian Context:</strong>
                            <span>{activeCard.ethiopian_context}</span>
                          </div>
                        </div>
                      )}

                      {activeCard.euee_exam_trap && (
                        <div className="p-3 bg-rose-950/40 border border-rose-900/50 rounded-xl text-xs text-rose-200 flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-rose-300 block">EUEE Examiner Distractor:</strong>
                            <span>{activeCard.euee_exam_trap}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-6">
                  <div
                    className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Prev & Next Controls */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handlePrev}
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-2 border border-slate-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-4 py-3 bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2"
                >
                  <RotateCw className="w-4 h-4" />
                  <span>Flip Card</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md"
                >
                  <span>Next Card</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 text-slate-400 text-sm">
              Loading curriculum flashcard deck...
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: ERROR NOTEBOOK & LEITNER SPACED REPETITION */}
      {/* ======================================================== */}
      {activeTab === 'error_notebook' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Leitner Box Progression Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <button
              onClick={() => setErrorBoxFilter('due')}
              className={`p-4 rounded-2xl border text-left transition ${
                errorBoxFilter === 'due'
                  ? 'bg-rose-950/60 border-rose-500 text-white shadow-md'
                  : 'bg-slate-850/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase mb-1">
                <span>Due Today</span>
                <Clock className="w-3.5 h-3.5 text-rose-400" />
              </div>
              <div className="text-2xl font-extrabold text-rose-400">{errorStats.dueToday}</div>
              <div className="text-[10px] text-slate-400">Needs Active Review</div>
            </button>

            <button
              onClick={() => setErrorBoxFilter(1)}
              className={`p-4 rounded-2xl border text-left transition ${
                errorBoxFilter === 1
                  ? 'bg-amber-950/60 border-amber-500 text-white shadow-md'
                  : 'bg-slate-850/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase mb-1">
                <span>Box 1</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-amber-500/20 text-amber-300 rounded">1 Day</span>
              </div>
              <div className="text-2xl font-extrabold text-amber-400">{errorStats.box1}</div>
              <div className="text-[10px] text-slate-400">Review Daily</div>
            </button>

            <button
              onClick={() => setErrorBoxFilter(2)}
              className={`p-4 rounded-2xl border text-left transition ${
                errorBoxFilter === 2
                  ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md'
                  : 'bg-slate-850/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase mb-1">
                <span>Box 2</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-indigo-500/20 text-indigo-300 rounded">3 Days</span>
              </div>
              <div className="text-2xl font-extrabold text-indigo-400">{errorStats.box2}</div>
              <div className="text-[10px] text-slate-400">Every 3 Days</div>
            </button>

            <button
              onClick={() => setErrorBoxFilter(3)}
              className={`p-4 rounded-2xl border text-left transition ${
                errorBoxFilter === 3
                  ? 'bg-teal-950/60 border-teal-500 text-white shadow-md'
                  : 'bg-slate-850/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase mb-1">
                <span>Box 3</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-teal-500/20 text-teal-300 rounded">7 Days</span>
              </div>
              <div className="text-2xl font-extrabold text-teal-400">{errorStats.box3}</div>
              <div className="text-[10px] text-slate-400">Weekly Review</div>
            </button>

            <button
              onClick={() => setErrorBoxFilter(4)}
              className={`p-4 rounded-2xl border text-left transition col-span-2 sm:col-span-1 ${
                errorBoxFilter === 4
                  ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-md'
                  : 'bg-slate-850/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase mb-1">
                <span>Box 4 (Mastered)</span>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold text-emerald-400">{errorStats.mastered}</div>
              <div className="text-[10px] text-slate-400">Long-Term Memory</div>
            </button>
          </div>

          {/* Interactive Error Review Card */}
          {activeErrorCard ? (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-slate-300">
                  Question {errorCurrentIndex + 1} of {filteredErrorEntries.length} in this Box
                </span>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono text-[10px]">
                    Missed {activeErrorCard.missed_count}x
                  </span>
                  <button
                    onClick={() => handleRemoveErrorItem(activeErrorCard.question_id)}
                    className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition"
                    title="Remove from Error Notebook"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Error Flip Card */}
              <div
                onClick={() => setErrorIsFlipped(!errorIsFlipped)}
                className="cursor-pointer group relative min-h-[380px] rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border-2 border-rose-900/60 shadow-2xl transition-all duration-300 hover:border-rose-500/80 flex flex-col justify-between overflow-hidden"
              >
                {!errorIsFlipped ? (
                  <div className="space-y-5 my-auto">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 bg-rose-950/60 border border-rose-800/60 rounded-full inline-block">
                        {activeErrorCard.exam_title || 'Past Exam Mistake'}
                      </span>
                      <span className="text-xs text-slate-400">
                        Box {activeErrorCard.leitner_box} • Next Review: {new Date(activeErrorCard.next_review_due).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                      <FormattedQuestionText text={activeErrorCard.question.question_text} />
                    </div>

                    {/* Multiple Choice Options */}
                    <div className="space-y-2 pt-2">
                      {[
                        { opt: 'A', text: activeErrorCard.question.option_a },
                        { opt: 'B', text: activeErrorCard.question.option_b },
                        { opt: 'C', text: activeErrorCard.question.option_c },
                        { opt: 'D', text: activeErrorCard.question.option_d }
                      ].filter(c => !!c.text).map(choice => (
                        <div
                          key={choice.opt}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between ${
                            choice.opt === activeErrorCard.user_selected_answer
                              ? 'bg-rose-950/40 border-rose-500 text-rose-200'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-bold font-mono text-slate-400">{choice.opt})</span>
                            <span>{renderRichInline(choice.text)}</span>
                          </div>
                          {choice.opt === activeErrorCard.user_selected_answer && (
                            <span className="px-2 py-0.5 bg-rose-500/30 text-rose-300 rounded text-[10px] font-bold">
                              Your Previous Answer
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-xs text-amber-400 flex items-center gap-2">
                      <RotateCw className="w-4 h-4 text-amber-400" />
                      <span>Tap to reveal the correct answer & full MoE pedagogical derivation</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 my-auto">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> Correct Answer: Option {activeErrorCard.correct_answer}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">Pedagogical Solution</span>
                    </div>

                    <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-3">
                      <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                        Step-by-Step Curriculum Explanation:
                      </div>
                      <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <FormattedQuestionText text={activeErrorCard.question.explanation || 'Refer to the textbook unit for full derivations.'} />
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 italic">
                      Did you get it right this time? Rate your recall below to advance this card in your Leitner schedule:
                    </div>
                  </div>
                )}
              </div>

              {/* Leitner Spaced Repetition Grading Controls */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  onClick={() => handleLeitnerReview(false)}
                  className="flex-1 py-3 px-4 bg-rose-950/80 hover:bg-rose-900 border border-rose-700/80 text-rose-200 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-md active:scale-95"
                  title="Reset to Box 1 for review tomorrow"
                >
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span>Still Learning (Reset to Box 1)</span>
                </button>

                <button
                  onClick={() => handleLeitnerReview(true)}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-md active:scale-95"
                  title="Advance to next Leitner interval"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  <span>Got It Right! (Advance Box)</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-4 max-w-md mx-auto">
              <CheckCheck className="w-12 h-12 text-emerald-400 mx-auto" />
              <div className="text-white font-bold text-lg">No Due Mistakes in this Box!</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whenever you miss a question during Timed or Practice exam sessions, it automatically logs here into your personal Error Notebook.
              </p>
              <button
                onClick={() => setErrorBoxFilter('all')}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition"
              >
                View All {errorStats.total} Saved Error Cards
              </button>
            </div>
          )}
        </div>
      )}

      {/* Bilingual Academic Glossary Modal */}
      <BilingualGlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      {/* P2P Offline Sharing Modal */}
      <P2POfflineSharingModal
        isOpen={isP2PShareOpen}
        onClose={() => setIsP2PShareOpen(false)}
        onRefresh={refreshErrorNotebook}
      />
    </div>
  );
};
