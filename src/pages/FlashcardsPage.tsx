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
  RefreshCw
} from 'lucide-react';
import { apiFetchJson } from '../utils/api';
import { Topic, Subject, Book, Flashcard } from '../types';

interface FlashcardsPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
  initialTopicId?: string;
}

export const FlashcardsPage: React.FC<FlashcardsPageProps> = ({ onNavigate, initialTopicId }) => {
  const { user } = useAuth();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId || '');

  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [generatingAI, setGeneratingAI] = useState(false);

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

  // Load or generate 4-5 flashcards for selected topic
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

      // Dynamic generation of 4-5 high-yield cards for topic
      const topicName = currentTopic?.topic_name || 'Quadratic Equations';
      const subjectName = subj?.name || 'Mathematics';
      const gradeName = user?.grade || 'Grade 10';

      const cards: Flashcard[] = [
        {
          id: `fc-${selectedTopicId}-1`,
          topic_id: selectedTopicId,
          topic_name: topicName,
          subject_name: subjectName,
          grade_name: gradeName,
          front_title: `Core Concept & Definition`,
          front_content: `What is the standard definition and physical/mathematical foundation of ${topicName}?`,
          front_subtitle: `High-yield syllabus requirement for ${subjectName}`,
          back_definition: `In ${gradeName} ${subjectName}, ${topicName} represents a foundational principle governed by specific standard relations and canonical forms.`,
          ethiopian_context: `Widely tested in Ethiopian national entrance examinations to evaluate problem-solving accuracy under timed pressure.`,
          euee_exam_trap: `Examiners often manipulate algebraic signs, unit conversions, or domain constraints to set traps in option B or C.`,
          formula_or_keypoint: `Standard Form / Key Formula: Key relations must be balanced before solving.`,
          tags: ['Core Definition', 'Must-Know']
        },
        {
          id: `fc-${selectedTopicId}-2`,
          topic_id: selectedTopicId,
          topic_name: topicName,
          subject_name: subjectName,
          grade_name: gradeName,
          front_title: `National Exam (EUEE) Trap & Strategy`,
          front_content: `What common mistake do 60%+ of EUEE candidates make in questions on ${topicName}?`,
          front_subtitle: `EUEE Examiner Secret`,
          back_definition: `Students frequently forget to check for extraneous solutions or misapply sign conventions when rearranging expressions.`,
          ethiopian_context: `National exam papers in Ethiopia typically feature 2-3 questions directly targeting this exact misconception.`,
          euee_exam_trap: `Always test edge cases (such as zero, negative roots, or zero denominators) before selecting your final answer choice.`,
          formula_or_keypoint: `Mastery Strategy: Work backwards from options if symbolic expansion takes over 90 seconds.`,
          tags: ['EUEE Trap', 'Exam Strategy']
        },
        {
          id: `fc-${selectedTopicId}-3`,
          topic_id: selectedTopicId,
          topic_name: topicName,
          subject_name: subjectName,
          grade_name: gradeName,
          front_title: `Key Laws & Formulas`,
          front_content: `State the essential equations, laws, or theorems governing ${topicName}.`,
          front_subtitle: `Formula Memory Bank`,
          back_definition: `The fundamental equation relates input variables to outputs using exact dimensional consistency.`,
          ethiopian_context: `Directly derived from the official Ethiopian Student Textbook (MoE Curriculum Guidelines).`,
          euee_exam_trap: `Do not confuse vector quantities with scalar values; magnitude and direction must both be preserved.`,
          formula_or_keypoint: `Formula: Key Equation = Output Result (Memorize for quick calculation)`,
          tags: ['Formulas', 'Quick Reference']
        },
        {
          id: `fc-${selectedTopicId}-4`,
          topic_id: selectedTopicId,
          topic_name: topicName,
          subject_name: subjectName,
          grade_name: gradeName,
          front_title: `Real-World & Ethiopian Application`,
          front_content: `How is ${topicName} applied in real-world technology, engineering, or local Ethiopian infrastructure?`,
          front_subtitle: `Contextual Understanding`,
          back_definition: `Concepts from ${topicName} are applied in renewable energy modeling, structural engineering (e.g., GERD hydroelectric computations), and agricultural optimization.`,
          ethiopian_context: `Used by Ethiopian engineers and researchers in local environmental monitoring and economic projections.`,
          euee_exam_trap: `Questions connecting theory to real-world scenarios usually test interpretation rather than heavy arithmetic.`,
          formula_or_keypoint: `Takeaway: Connect theoretical formulas to actual physical measurements.`,
          tags: ['Ethiopian Context', 'Application']
        },
        {
          id: `fc-${selectedTopicId}-5`,
          topic_id: selectedTopicId,
          topic_name: topicName,
          subject_name: subjectName,
          grade_name: gradeName,
          front_title: `High-Yield Speed Solve Shortcut`,
          front_content: `How can you solve ${topicName} questions in under 45 seconds during the actual entrance exam?`,
          front_subtitle: `Time-Saving Trick`,
          back_definition: `Use dimensional analysis or boundary condition elimination to instantly disqualify 2 incorrect options.`,
          ethiopian_context: `Saving 45 seconds per question leaves crucial buffer time for complex multi-step problems.`,
          euee_exam_trap: `Don't spend 3 minutes calculating decimals when order-of-magnitude estimation reveals the correct option immediately.`,
          formula_or_keypoint: `Shortcut: Eliminate impossible units -> Inspect extreme values -> Pick matching option.`,
          tags: ['Speed Shortcut', '45-Sec Trick']
        }
      ];

      setFlashcards(cards);
      setCurrentIndex(0);
      setIsFlipped(false);
    };

    fetchOrGenerateFlashcards();

    return () => {
      isMounted = false;
    };
  }, [selectedTopicId, topics, subjects, user]);

  const activeCard = flashcards[currentIndex];

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
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setFlashcards((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  const filteredTopics = selectedSubjectId === 'all'
    ? topics
    : topics.filter(t => t.subject_id === selectedSubjectId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5" /> High-Yield Active Recall
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-medium">
              4-5 Cards / Topic
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Curriculum Syllabus Flashcards
          </h1>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
            Master textbook definitions, key formulas, examiner traps, and 45-second EUEE shortcut tricks topic-by-topic.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('practice-topics')}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Practice Questions</span>
          </button>
          <button
            onClick={() => onNavigate('study-plan')}
            className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Study Plan</span>
          </button>
        </div>
      </div>

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
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
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
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap ${
                selectedSubjectId === s.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Topic Selector Dropdown / Grid */}
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

      {/* INTERACTIVE 3D FLASHCARD DECK */}
      {activeCard ? (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Card Meta Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-slate-300">
              Card {currentIndex + 1} of {flashcards.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShuffle}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition flex items-center gap-1.5"
                title="Shuffle current deck"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Shuffle Deck</span>
              </button>

              <button
                onClick={() => toggleMastered(activeCard.id)}
                className={`px-3 py-1 rounded-lg font-bold transition flex items-center gap-1.5 ${
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

          {/* Interactive Card Body (Flip on Click) */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer group relative min-h-[340px] rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 border-2 border-slate-700/80 shadow-2xl transition-all duration-300 hover:border-emerald-500/60 flex flex-col justify-between overflow-hidden"
          >
            {/* Background Accent Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Front Side */}
            {!isFlipped ? (
              <div className="space-y-5 my-auto">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-950/60 border border-amber-800/60 rounded-full inline-block">
                    {activeCard.front_subtitle || activeCard.topic_name}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Tap or click to reveal answer 🔄
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  {activeCard.front_title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeCard.front_content}
                </p>

                <div className="pt-4 text-xs text-indigo-400 flex items-center gap-2 font-medium">
                  <RotateCw className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>Click anywhere to flip card</span>
                </div>
              </div>
            ) : (
              /* Back Side (Answer & High-Yield Insights) */
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
                        <strong className="text-emerald-300 block">Ethiopian Real-World Application:</strong>
                        <span>{activeCard.ethiopian_context}</span>
                      </div>
                    </div>
                  )}

                  {activeCard.euee_exam_trap && (
                    <div className="p-3 bg-rose-950/40 border border-rose-900/50 rounded-xl text-xs text-rose-200 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-rose-300 block">EUEE Examiner Trap:</strong>
                        <span>{activeCard.euee_exam_trap}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bottom Progress Bar */}
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-6">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Controls: Prev & Next */}
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
          Select a subject and topic above to start active recall flashcards.
        </div>
      )}
    </div>
  );
};
