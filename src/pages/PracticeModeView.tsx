import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Layers,
  CheckCircle2,
  XCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  HelpCircle,
  AlertCircle,
  Filter,
  MessageSquarePlus,
  LayoutGrid
} from 'lucide-react';
import { Exam, ExamQuestion, PracticeAnswerFeedback } from '../types';
import { QuestionDiagramViewer } from '../components/QuestionDiagramViewer';
import { FormattedQuestionText, renderRichInline } from '../components/FormattedQuestionText';
import { QuestionFeedbackModal } from '../components/QuestionFeedbackModal';
import { getOfflineExamQuestions } from '../utils/offlineStorage';
import { recordMissedQuestion } from '../utils/errorNotebookStore';

interface PracticeModeViewProps {
  examId?: string;
  topicId?: string;
  categoryName?: string;
  topicTitle?: string;
  selectedYear?: string;
  questionIds?: string[];
  initialQuestionId?: string;
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const PracticeModeView: React.FC<PracticeModeViewProps> = ({
  examId,
  topicId,
  categoryName,
  topicTitle,
  selectedYear: initialSelectedYear,
  questionIds,
  initialQuestionId,
  onNavigate
}) => {
  const { user } = useAuth();
  const [allExamQuestions, setAllExamQuestions] = useState<ExamQuestion[]>([]);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | undefined>(categoryName || topicTitle);
  const [selectedYear, setSelectedYear] = useState<string>(initialSelectedYear || 'all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbackMap, setFeedbackMap] = useState<Record<string, PracticeAnswerFeedback>>({});
  const [loading, setLoading] = useState(true);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showQuestionGrid, setShowQuestionGrid] = useState(false);

  const availableYears = ['all', '2018', '2017', '2016', 'regional'];

  useEffect(() => {
    const fetchQuestions = async () => {
      let qList: ExamQuestion[] = [];

      try {
        let url = '/api/exams/exam-entrance-1789625998133/questions';
        if (examId) {
          url = `/api/exams/${examId}/questions`;
        } else if (topicId) {
          url = `/api/questions/topic/${topicId}${selectedYear !== 'all' ? `?year=${selectedYear}` : ''}`;
        }

        const res = await fetch(url, {
          headers: { 'x-user-id': user?.id || 'usr-student-premium' }
        });
        if (res.ok) {
          const data = await res.json();
          qList = Array.isArray(data) ? data : data.questions || [];
        } else if (res.status === 403) {
          onNavigate('payment');
          return;
        }
      } catch (err) {
        console.warn('Online practice mode fetch failed, trying offline storage:', err);
      }

      // If online fetch returned empty or failed, attempt offline retrieval
      if (qList.length === 0 && examId) {
        try {
          const offlineQs = await getOfflineExamQuestions(examId);
          if (offlineQs && offlineQs.length > 0) {
            qList = offlineQs;
          }
        } catch (offlineErr) {
          console.error('Failed to load offline practice questions:', offlineErr);
        }
      }

      if (qList.length > 0) {
        setAllExamQuestions(qList);

        // Category & Topic cross-referencing filter
        let filtered = qList;
        if (questionIds && questionIds.length > 0) {
          const idSet = new Set(questionIds);
          filtered = qList.filter(q => idSet.has(q.id));
        } else if (categoryName || topicTitle) {
          const targetName = (categoryName || topicTitle || '').toLowerCase().trim();
          filtered = qList.filter(q => {
            const qCat = (q.instruction_category || '').toLowerCase().trim();
            const qTopic = (q.topic_name || '').toLowerCase().trim();
            const qRef = typeof q.textbook_reference === 'string'
              ? q.textbook_reference.toLowerCase()
              : (q.textbook_reference?.book_title || '').toLowerCase();

            return (
              qCat === targetName ||
              qTopic === targetName ||
              qCat.includes(targetName) ||
              targetName.includes(qCat) ||
              qTopic.includes(targetName) ||
              targetName.includes(qTopic) ||
              qRef.includes(targetName)
            );
          });
        }

        // Year cross-referencing check
        if (selectedYear && selectedYear !== 'all') {
          filtered = filtered.filter(q => {
            const qYear = String(q.exam_year || q.year || q.ethiopian_year || '');
            return qYear.includes(selectedYear);
          });
        }

        setQuestions(filtered);

        if (initialQuestionId) {
          const idx = filtered.findIndex((q: ExamQuestion) => q.id === initialQuestionId);
          if (idx !== -1) {
            setCurrentIndex(idx);
          } else {
            setCurrentIndex(0);
          }
        } else {
          setCurrentIndex(0);
        }
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [examId, topicId, categoryName, topicTitle, selectedYear, questionIds, initialQuestionId]);

  // Total questions for this topic across ALL years for cross-referencing comparison
  const topicQuestionsAllYearsCount = useMemo(() => {
    if (!categoryName && !topicTitle) return allExamQuestions.length;
    const targetName = (categoryName || topicTitle || '').toLowerCase().trim();
    return allExamQuestions.filter(q => {
      const qCat = (q.instruction_category || '').toLowerCase().trim();
      const qTopic = (q.topic_name || '').toLowerCase().trim();
      return (
        qCat === targetName ||
        qTopic === targetName ||
        qCat.includes(targetName) ||
        targetName.includes(qCat) ||
        qTopic.includes(targetName) ||
        targetName.includes(qTopic)
      );
    }).length;
  }, [allExamQuestions, categoryName, topicTitle]);

  const handleSelectOption = async (q: ExamQuestion, option: 'A' | 'B' | 'C' | 'D') => {
    // If already answered, ignore
    if (feedbackMap[q.id]) return;

    try {
      const res = await fetch('/api/practice/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || 'usr-student-premium'
        },
        body: JSON.stringify({
          question_id: q.id,
          selected_answer: option
        })
      });

      if (res.ok) {
        const feedback: PracticeAnswerFeedback = await res.json();
        setFeedbackMap(prev => ({ ...prev, [q.id]: feedback }));
        setShowExplanation(true);
        if (!feedback.is_correct) {
          recordMissedQuestion(q, option, examId, topicTitle || categoryName);
        }
      } else {
        throw new Error('Fallback to local calculation');
      }
    } catch (err) {
      // Offline fallback: calculate feedback locally from prebundled question
      const isCorrect = option === (q.correct_answer || '').toUpperCase();
      if (!isCorrect) {
        recordMissedQuestion(q, option, examId, topicTitle || categoryName);
      }
      const localFeedback: PracticeAnswerFeedback = {
        question_id: q.id,
        is_correct: isCorrect,
        selected_answer: option,
        correct_answer: q.correct_answer || 'A',
        explanation: q.explanation || 'Step-by-step verification provided in student textbook.',
        confidence: 100
      };
      setFeedbackMap(prev => ({ ...prev, [q.id]: localFeedback }));
      setShowExplanation(true);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center text-slate-300">
        <Layers className="w-8 h-8 text-indigo-400 animate-spin mx-auto mb-2" />
        <p className="text-sm font-semibold">Loading practice workspace...</p>
      </div>
    );
  }

  // LOGIC CHECK: If 0 questions available for this topic for the selected year
  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-6 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 inline-block mb-1">
            Exam Engine Logic Check
          </span>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            No questions available for this topic this year
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            {selectedYear !== 'all' ? (
              <>
                The extracted textbook topic <strong className="text-indigo-300">"{activeCategoryFilter || topicTitle || 'Selected Topic'}"</strong> does not have any recorded national entrance exam questions for the <strong className="text-amber-300">{selectedYear} E.C.</strong> examination paper.
                {topicQuestionsAllYearsCount > 0 && (
                  <span className="block mt-2 text-emerald-400 font-medium">
                    (However, {topicQuestionsAllYearsCount} past questions are available for this topic in other exam years!)
                  </span>
                )}
              </>
            ) : (
              `No examination questions currently match the selected topic "${activeCategoryFilter || topicTitle || 'Selected Topic'}".`
            )}
          </p>
        </div>

        {/* Year Selector Pills */}
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
          <span className="text-xs font-semibold text-slate-400 block">Switch Exam Year Filter:</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {availableYears.map(yr => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedYear === yr
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {yr === 'all' ? 'All Years' : yr === 'regional' ? 'Regional Model' : `${yr} E.C.`}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {selectedYear !== 'all' && topicQuestionsAllYearsCount > 0 && (
            <button
              onClick={() => setSelectedYear('all')}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Practice All Years ({topicQuestionsAllYearsCount} Questions)</span>
            </button>
          )}

          <button
            onClick={() => onNavigate('practice-topics')}
            className="px-4 py-2.5 bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-2"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Browse Other Topics</span>
          </button>

          {allExamQuestions.length > 0 && (
            <button
              onClick={() => {
                setQuestions(allExamQuestions);
                setActiveCategoryFilter(undefined);
                setSelectedYear('all');
                setCurrentIndex(0);
              }}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition"
            >
              Practice All Exam Questions ({allExamQuestions.length})
            </button>
          )}

          <button
            onClick={() => onNavigate('exams')}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-medium transition"
          >
            Back to Exams
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const currentFeedback = currentQ ? feedbackMap[currentQ.id] : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('exams', { activeTab: 'categories' })}
            className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
            title="Back to Exam Categories"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                Category Practice Mode
              </span>
              {activeCategoryFilter && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-950/80 border border-indigo-800/80 text-indigo-300 font-semibold">
                  Section: {activeCategoryFilter}
                </span>
              )}
            </div>
            <h1 className="text-base sm:text-lg font-bold text-white">
              {activeCategoryFilter || currentQ.instruction_category || currentQ.topic_name || 'Past University Entrance Examination Questions'}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
            <span className="text-[11px] font-semibold text-slate-400 px-2">Year:</span>
            {availableYears.map(yr => (
              <button
                key={yr}
                onClick={() => {
                  setSelectedYear(yr);
                  setCurrentIndex(0);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  selectedYear === yr
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {yr === 'all' ? 'All' : yr === 'regional' ? 'Regional' : `${yr}`}
              </button>
            ))}
          </div>

          {activeCategoryFilter && allExamQuestions.length > questions.length && (
            <button
              onClick={() => {
                setQuestions(allExamQuestions);
                setActiveCategoryFilter(undefined);
                setSelectedYear('all');
                setCurrentIndex(0);
              }}
              className="text-xs text-slate-400 hover:text-indigo-300 underline underline-offset-4 transition hidden lg:inline"
            >
              Show all exam questions ({allExamQuestions.length})
            </button>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowQuestionGrid(!showQuestionGrid)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                showQuestionGrid
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/55'
              }`}
              title="Jump to any question"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Jump to...</span>
            </button>
            <span className="text-xs text-slate-400 font-mono">
              {currentIndex + 1} / {questions.length} Qs
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setCurrentIndex(prev => Math.max(0, prev - 1));
                  setShowExplanation(false);
                }}
                disabled={currentIndex <= 0}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1));
                  setShowExplanation(false);
                }}
                disabled={currentIndex >= questions.length - 1}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Question Navigation Grid */}
      {showQuestionGrid && (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">Question Navigator</h3>
            </div>
            <span className="text-[11px] text-slate-400">
              Click any question number to jump directly to it
            </span>
          </div>
          
          <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2 max-h-48 overflow-y-auto p-1">
            {questions.map((q, idx) => {
              const feedback = feedbackMap[q.id];
              const isCurrent = idx === currentIndex;
              
              let btnStyle = 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700';
              if (isCurrent) {
                btnStyle = 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-400 border-transparent';
              } else if (feedback) {
                if (feedback.is_correct) {
                  btnStyle = 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border-emerald-500/50 font-semibold';
                } else {
                  btnStyle = 'bg-red-950/80 hover:bg-red-900 text-red-400 border-red-500/50 font-semibold';
                }
              }
              
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowExplanation(false);
                  }}
                  className={`h-10 w-10 rounded-xl border text-xs flex items-center justify-center transition-all ${btnStyle}`}
                  title={`Question ${idx + 1}${feedback ? (feedback.is_correct ? ' (Correct)' : ' (Incorrect)') : ' (Unanswered)'}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          
          {/* Grid Legend */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 border-t border-slate-900 pt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded bg-slate-800 border border-slate-700" />
              <span>Unanswered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded bg-indigo-600 ring-1 ring-indigo-400" />
              <span>Current Question</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded bg-emerald-950 border border-emerald-500/50" />
              <span>Correct Choice</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded bg-red-950 border border-red-500/50" />
              <span>Incorrect Choice</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Practice Question Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        {/* Topic Tag & EUEE Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-semibold">
              {currentQ.instruction_category || currentQ.topic_name || 'Language Focus'}
            </span>
            {currentQ.instruction_category && currentQ.topic_name && currentQ.topic_name !== currentQ.instruction_category && (
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[11px]">
                {currentQ.topic_name}
              </span>
            )}
          </div>
          <span className="text-xs font-bold text-amber-400">
            {currentQ.exam_year || 2018} E.C. Entrance Exam • Question {currentQ.question_number} of {questions.length}
          </span>
        </div>

        {/* Section Instruction / Directions */}
        {currentQ.section_instruction && (
          <div className="p-3.5 bg-amber-950/30 border border-amber-800/40 rounded-2xl text-xs text-amber-200/90 leading-relaxed font-medium">
            <span className="font-bold text-amber-400 uppercase tracking-wide block mb-1">Section Instruction:</span>
            {currentQ.section_instruction}
          </div>
        )}

        {/* Reading Passage (if applicable for Reading Comprehension) */}
        {currentQ.reading_passage && (
          <div className="p-5 bg-slate-950/80 border border-slate-700/80 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
              <BookOpen className="w-4 h-4" />
              <span>{currentQ.passage_title || 'Reading Comprehension Passage'}</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed max-h-72 overflow-y-auto pr-2 border-t border-slate-800 pt-3">
              <FormattedQuestionText text={currentQ.reading_passage} />
            </div>
          </div>
        )}

        {/* Question Text */}
        <div className="text-base sm:text-lg text-white font-medium leading-relaxed">
          <FormattedQuestionText text={currentQ.question_text || currentQ.text || ''} />
        </div>

        {/* Official Question Diagram or Vector Graphic if present */}
        {(currentQ.diagram_svg || currentQ.question_image_path) && (
          <QuestionDiagramViewer
            diagramSvg={currentQ.diagram_svg}
            imagePath={currentQ.question_image_path}
            caption={currentQ.diagram_caption}
            questionNumber={currentQ.question_number}
          />
        )}

        {/* Options with IMMEDIATE Green/Red Evaluation */}
        <div className="space-y-3 pt-2">
          {[
            { opt: 'A' as const, text: currentQ.option_a || (Array.isArray(currentQ.options) ? currentQ.options[0] : '') || '' },
            { opt: 'B' as const, text: currentQ.option_b || (Array.isArray(currentQ.options) ? currentQ.options[1] : '') || '' },
            { opt: 'C' as const, text: currentQ.option_c || (Array.isArray(currentQ.options) ? currentQ.options[2] : '') || '' },
            { opt: 'D' as const, text: currentQ.option_d || (Array.isArray(currentQ.options) ? currentQ.options[3] : '') || '' },
          ].map(choice => {
            const hasAnswered = !!currentFeedback;
            const isStudentChoice = currentFeedback?.selected_answer === choice.opt;
            const isCorrectTarget = currentFeedback?.correct_answer === choice.opt;

            let cardStyle = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 cursor-pointer';

            if (hasAnswered) {
              if (isCorrectTarget) {
                cardStyle = 'bg-emerald-950 border-emerald-500 text-emerald-300 font-bold shadow-sm';
              } else if (isStudentChoice && !currentFeedback.is_correct) {
                cardStyle = 'bg-red-950 border-red-500 text-red-300 font-bold';
              } else {
                cardStyle = 'bg-slate-900/60 border-slate-800 text-slate-500 opacity-60';
              }
            }

            return (
              <div
                key={choice.opt}
                onClick={() => handleSelectOption(currentQ, choice.opt)}
                className={`p-4 rounded-2xl border text-sm transition flex items-start justify-between gap-3 ${cardStyle}`}
              >
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                    hasAnswered && isCorrectTarget
                      ? 'bg-emerald-600 text-white'
                      : hasAnswered && isStudentChoice && !currentFeedback.is_correct
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {choice.opt}
                  </span>
                  <span className="mt-0.5 min-w-0 flex-1 break-words [overflow-wrap:anywhere] leading-snug">{renderRichInline(choice.text || '')}</span>
                </div>

                {/* Instant Feedback Badges */}
                {hasAnswered && isCorrectTarget && (
                  <span className="px-2 py-0.5 bg-emerald-600 text-white text-xs font-bold rounded-lg flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                  </span>
                )}
                {hasAnswered && isStudentChoice && !currentFeedback.is_correct && (
                  <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded-lg flex items-center gap-1 shrink-0">
                    <XCircle className="w-3.5 h-3.5" /> Incorrect
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Feedback Button under choices */}
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={() => setShowFeedbackModal(true)}
            className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 transition font-bold py-1.5 px-3 bg-red-950/40 border border-red-500/20 rounded-xl hover:bg-red-950/60 shadow-sm hover:border-red-500/40"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-red-400" />
            <span>Problem with this question? Report correction / Leave feedback</span>
          </button>
        </div>

        {/* Immediate Feedback Box */}
        {currentFeedback && (
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className={`p-4 rounded-2xl border ${
              currentFeedback.is_correct
                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200'
                : 'bg-red-950/60 border-red-500/40 text-red-200'
            }`}>
              <div className="font-bold flex items-center gap-2 text-sm">
                {currentFeedback.is_correct ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Correct Answer!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span>Incorrect Choice. The correct answer is ({currentFeedback.correct_answer}).</span>
                  </>
                )}
              </div>
            </div>

            {/* Explanation & Textbook Reference */}
            <div className="p-5 bg-slate-800/80 border border-slate-700/80 rounded-2xl space-y-4 max-w-full overflow-hidden">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Step-by-Step Educational Explanation
                </div>
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed break-words [overflow-wrap:anywhere] whitespace-pre-line max-w-full overflow-hidden">
                  {renderRichInline(currentFeedback.explanation || '')}
                </div>
              </div>

              {currentFeedback.textbook_reference && (
                <div className="pt-3 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-300 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span>
                      {currentFeedback.textbook_reference.book_title} • Printed Page <strong className="text-emerald-400">{currentFeedback.textbook_reference.printed_page_number}</strong>
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigate('library-book-page', {
                      bookId: currentFeedback.textbook_reference?.book_id,
                      pageNumber: currentFeedback.textbook_reference?.printed_page_number
                    })}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Open Page {currentFeedback.textbook_reference.printed_page_number}</span>
                  </button>
                </div>
              )}

              {/* Feedback Callout Button */}
              <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowFeedbackModal(true)}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition font-medium hover:underline py-1"
                >
                  <MessageSquarePlus className="w-3.5 h-3.5" />
                  <span>Have a correction or feedback about this question? Leave feedback</span>
                </button>
              </div>
            </div>

            {/* Next Question / Retry Action */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={() => {
                  setFeedbackMap(prev => {
                    const next = { ...prev };
                    delete next[currentQ.id];
                    return next;
                  });
                }}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Question Again</span>
              </button>

              <button
                onClick={() => {
                  setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1));
                  setShowExplanation(false);
                }}
                disabled={currentIndex >= questions.length - 1}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 disabled:opacity-40"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Question Feedback Modal */}
      {showFeedbackModal && questions[currentIndex] && (
        <QuestionFeedbackModal
          isOpen={showFeedbackModal}
          onClose={() => setShowFeedbackModal(false)}
          question={{
            id: questions[currentIndex].id,
            question_number: questions[currentIndex].question_number || currentIndex + 1,
            question_text: questions[currentIndex].question_text,
            correct_answer: questions[currentIndex].correct_answer
          }}
          examInfo={examId ? { id: examId, title: questions[currentIndex].topic_name || 'Entrance Exam' } : undefined}
          user={user}
        />
      )}
    </div>
  );
};
