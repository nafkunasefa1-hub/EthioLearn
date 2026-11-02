import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Clock,
  AlertCircle,
  CheckCircle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Send,
  HelpCircle,
  X,
  Lock,
  BookOpen,
  WifiOff,
  MessageSquarePlus
} from 'lucide-react';
import { Exam, ExamAttempt, ExamQuestion, StudentAnswer } from '../types';
import { QuestionDiagramViewer } from '../components/QuestionDiagramViewer';
import { FormattedQuestionText, renderRichInline } from '../components/FormattedQuestionText';
import { QuestionFeedbackModal } from '../components/QuestionFeedbackModal';
import {
  getOfflineExam,
  getOfflineExamQuestions,
  saveOfflineExamAttempt
} from '../utils/offlineStorage';
import { recordMissedQuestion } from '../utils/errorNotebookStore';

interface TimedExamViewProps {
  examId: string;
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const TimedExamView: React.FC<TimedExamViewProps> = ({ examId, onNavigate }) => {
  const { user } = useAuth();
  const [exam, setExam] = useState<Exam | null>(null);
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, { selected: string; review: boolean }>>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(120 * 60);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isOfflineHall, setIsOfflineHall] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const timerRef = useRef<any>(null);

  // 1. Start or resume attempt on server or offline
  useEffect(() => {
    const initExam = async () => {
      try {
        const startRes = await fetch('/api/exam-attempts/start', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-user-id': user?.id || 'usr-student-premium'
          },
          body: JSON.stringify({ exam_id: examId })
        });

        if (!startRes.ok) {
          if (startRes.status === 403) {
            onNavigate('payment');
            return;
          }
          throw new Error('Failed to start online attempt');
        }

        const newAttempt: ExamAttempt = await startRes.json();
        setAttempt(newAttempt);

        // Fetch exam details & questions
        const detailsRes = await fetch(`/api/exam-attempts/${newAttempt.id}`, {
          headers: { 'x-user-id': user?.id || 'usr-student-premium' }
        });
        if (detailsRes.ok) {
          const data = await detailsRes.json();
          setExam(data.exam);
          setQuestions(data.questions);

          // Restore existing student answers if resumed
          const ansMap: Record<string, { selected: string; review: boolean }> = {};
          if (data.answers) {
            data.answers.forEach((ans: StudentAnswer) => {
              ansMap[ans.question_id] = {
                selected: ans.selected_answer || '',
                review: !!ans.marked_for_review
              };
            });
          }
          setAnswers(ansMap);

          // Calculate remaining time from server started_at
          const startTime = new Date(newAttempt.started_at).getTime();
          const durationMs = (data.exam?.duration_minutes || 120) * 60 * 1000;
          const elapsedMs = Date.now() - startTime;
          const remainingSec = Math.max(0, Math.floor((durationMs - elapsedMs) / 1000));
          setRemainingSeconds(remainingSec);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn('Online exam attempt initialization failed, falling back to offline hall:', err);
      }

      // Offline Hall fallback
      try {
        const offlineExam = await getOfflineExam(examId);
        const offlineQuestions = await getOfflineExamQuestions(examId);
        if (offlineQuestions && offlineQuestions.length > 0) {
          const fallbackExam: Exam = offlineExam || {
            id: examId,
            title: 'Ethiopian Examination Paper',
            description: 'Offline Timed Examination',
            instructions: 'Authentic National Examination Paper',
            exam_type: 'University Entrance Examination',
            grade_id: 'grade-12-natural',
            subject_id: 'subj-exam',
            subject_name: 'Examination',
            year: 2016,
            duration_minutes: 120,
            total_questions: offlineQuestions.length,
            status: 'PUBLISHED',
            category: 'ENTRANCE',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          const offlineAttemptId = `offline-att-${examId}-${Date.now()}`;
          const localAttempt: ExamAttempt = {
            id: offlineAttemptId,
            exam_id: examId,
            user_id: user?.id || 'usr-student',
            started_at: new Date().toISOString(),
            score: 0,
            percentage: 0,
            correct_count: 0,
            incorrect_count: 0,
            unanswered_count: offlineQuestions.length,
            total_questions: offlineQuestions.length,
            time_taken_seconds: 0,
            completed: false,
            created_at: new Date().toISOString()
          };
          setExam(fallbackExam);
          setQuestions(offlineQuestions);
          setAttempt(localAttempt);
          setRemainingSeconds((fallbackExam.duration_minutes || 120) * 60);
          setIsOfflineHall(true);
          await saveOfflineExamAttempt(localAttempt, fallbackExam, offlineQuestions, {});
        } else {
          alert('This exam is not yet downloaded to your device for offline use. Please connect to internet to download it.');
          onNavigate('exams');
        }
      } catch (offlineErr) {
        console.error('Offline init failed:', offlineErr);
      } finally {
        setLoading(false);
      }
    };

    initExam();
  }, [examId]);

  // 2. Strict Timer Countdown
  useEffect(() => {
    if (loading || !attempt || attempt.completed) return;

    timerRef.current = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          // Auto-submit when time expires!
          handleFinalSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [loading, attempt]);

  const handleSelectOption = async (questionId: string, option: 'A' | 'B' | 'C' | 'D') => {
    if (!attempt || attempt.completed) return;

    const currentReview = answers[questionId]?.review || false;
    const newAnswers = {
      ...answers,
      [questionId]: { selected: option, review: currentReview }
    };
    setAnswers(newAnswers);

    // Save locally in IndexedDB
    if (exam && questions.length > 0) {
      saveOfflineExamAttempt(attempt, exam, questions, newAnswers);
    }

    if (!isOfflineHall && navigator.onLine) {
      fetch(`/api/exam-attempts/${attempt.id}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || 'usr-student-premium'
        },
        body: JSON.stringify({
          question_id: questionId,
          selected_answer: option,
          marked_for_review: currentReview
        })
      }).catch(console.error);
    }
  };

  const handleToggleReview = async (questionId: string) => {
    if (!attempt || attempt.completed) return;

    const currentSelected = answers[questionId]?.selected || '';
    const newReview = !(answers[questionId]?.review);
    const newAnswers = {
      ...answers,
      [questionId]: { selected: currentSelected, review: newReview }
    };
    setAnswers(newAnswers);

    if (exam && questions.length > 0) {
      saveOfflineExamAttempt(attempt, exam, questions, newAnswers);
    }

    if (!isOfflineHall && navigator.onLine) {
      fetch(`/api/exam-attempts/${attempt.id}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || 'usr-student-premium'
        },
        body: JSON.stringify({
          question_id: questionId,
          selected_answer: currentSelected,
          marked_for_review: newReview
        })
      }).catch(console.error);
    }
  };

  const handleFinalSubmit = async (auto = false) => {
    if (!attempt || submitting) return;
    setSubmitting(true);
    setConfirmModalOpen(false);
    clearInterval(timerRef.current);

    let correctCount = 0;
    questions.forEach(q => {
      const userSelected = answers[q.id]?.selected;
      const isCorrect = userSelected && userSelected.toUpperCase() === (q.correct_answer || '').toUpperCase();
      if (isCorrect) {
        correctCount++;
      } else if (userSelected) {
        // Auto-save incorrect answer to local Error Notebook for spaced repetition
        recordMissedQuestion(q, userSelected, exam?.id, exam?.title);
      }
    });

    const answeredCount = Object.keys(answers).filter(k => answers[k]?.selected).length;
    const unansweredCount = Math.max(0, questions.length - answeredCount);
    const incorrectCount = Math.max(0, answeredCount - correctCount);
    const totalQ = questions.length || 1;
    const percentage = Math.round((correctCount / totalQ) * 100);
    const totalDurationSec = (exam?.duration_minutes || 120) * 60;
    const timeTakenSec = Math.max(0, totalDurationSec - remainingSeconds);

    const completedAttempt: ExamAttempt = {
      ...attempt,
      completed: true,
      submitted_at: new Date().toISOString(),
      score: correctCount,
      percentage,
      correct_count: correctCount,
      incorrect_count: incorrectCount,
      unanswered_count: unansweredCount,
      total_questions: questions.length,
      time_taken_seconds: timeTakenSec
    };
    setAttempt(completedAttempt);

    if (exam) {
      await saveOfflineExamAttempt(completedAttempt, exam, questions, answers);
    }

    if (!isOfflineHall && navigator.onLine) {
      try {
        const res = await fetch(`/api/exam-attempts/${attempt.id}/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-user-id': user?.id || 'usr-student-premium'
          }
        });
        if (res.ok) {
          onNavigate('exam-results', { attemptId: attempt.id });
          return;
        }
      } catch (err) {
        console.warn('Online submit failed, using offline result view:', err);
      }
    }

    // Offline result navigation
    onNavigate('exam-results', { attemptId: attempt.id });
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center text-slate-300">
        <Clock className="w-8 h-8 text-amber-400 animate-spin mx-auto mb-2" />
        <p className="text-sm font-semibold">Initializing timed examination hall...</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const currentAnswer = currentQ ? answers[currentQ.id]?.selected : '';
  const isMarkedReview = currentQ ? answers[currentQ.id]?.review : false;

  const answeredCount = (Object.values(answers) as { selected: string; review: boolean }[]).filter(a => !!a.selected).length;
  const unansweredCount = questions.length - answeredCount;
  const reviewCount = (Object.values(answers) as { selected: string; review: boolean }[]).filter(a => a.review).length;

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-slate-950 text-slate-100">
      {/* Fixed Exam Hall Header */}
      <div className="sticky top-16 z-30 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-3 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            {isOfflineHall && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                <WifiOff className="w-2.5 h-2.5" />
                <span>Offline Hall</span>
              </span>
            )}
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
              {exam?.year} Official University Entrance Examination
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-bold text-white line-clamp-1">
            {exam?.title}
          </h2>
        </div>

        {/* Strict Countdown Timer */}
        <div className="flex items-center gap-4">
          <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 font-mono text-sm font-bold shadow-sm ${
            remainingSeconds < 300
              ? 'bg-red-950/80 border-red-500/80 text-red-400 animate-pulse'
              : 'bg-slate-800 border-slate-700 text-amber-300'
          }`}>
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{formatTimer(remainingSeconds)}</span>
          </div>

          <button
            onClick={() => setConfirmModalOpen(true)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Finish & Submit</span>
          </button>
        </div>
      </div>

      {/* Main Examination Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Side: Question Navigator Matrix (1..N) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 h-fit">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-300">
              Question Navigator
            </h3>
            <span className="text-xs text-slate-400">
              {answeredCount}/{questions.length} Answered
            </span>
          </div>

          {/* Status Legend */}
          <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-600"></span>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700"></span>
              <span>Unanswered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-500"></span>
              <span>Review</span>
            </div>
          </div>

          {/* Number Grid */}
          <div className="grid grid-cols-5 gap-2 pt-2">
            {questions.map((q, idx) => {
              const ansState = answers[q.id];
              const isCurrent = idx === currentIndex;
              const hasAnswer = !!ansState?.selected;
              const isReview = !!ansState?.review;

              let btnClass = 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700';

              if (isReview) {
                btnClass = 'bg-amber-500 text-slate-950 font-bold border-amber-400';
              } else if (hasAnswer) {
                btnClass = 'bg-emerald-600 text-white font-bold border-emerald-500';
              }

              if (isCurrent) {
                btnClass += ' ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-9 rounded-lg border text-xs font-semibold flex items-center justify-center transition ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Center / Right: Question Pane */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          {currentQ ? (
            <div className="space-y-6">
              {/* Question Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Topic: {currentQ.topic_name || 'Core Curriculum'}
                  </span>
                </div>

                {/* Mark for Review Button */}
                <button
                  onClick={() => handleToggleReview(currentQ.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 border ${
                    isMarkedReview
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 font-bold'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{isMarkedReview ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>
              </div>

              {/* Section Instruction */}
              {currentQ.section_instruction && (
                <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl text-xs text-amber-200/90 leading-relaxed">
                  <span className="font-bold text-amber-400 uppercase tracking-wide mr-1.5">Direction:</span>
                  {currentQ.section_instruction}
                </div>
              )}

              {/* Reading Passage */}
              {currentQ.reading_passage && (
                <div className="p-4 bg-slate-950/90 border border-slate-700/80 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                    <BookOpen className="w-4 h-4" />
                    <span>{currentQ.passage_title || 'Reading Comprehension Passage'}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed max-h-64 overflow-y-auto pr-2 border-t border-slate-800 pt-2">
                    <FormattedQuestionText text={currentQ.reading_passage} />
                  </div>
                </div>
              )}

              {/* Question Text */}
              <div className="text-base text-slate-100 font-medium leading-relaxed">
                <FormattedQuestionText text={currentQ.question_text} />
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

              {/* Options A, B, C, D */}
              <div className="space-y-3 pt-2">
                {[
                  { opt: 'A' as const, text: currentQ.option_a },
                  { opt: 'B' as const, text: currentQ.option_b },
                  { opt: 'C' as const, text: currentQ.option_c },
                  { opt: 'D' as const, text: currentQ.option_d },
                ].map(choice => {
                  const isSelected = currentAnswer === choice.opt;
                  return (
                    <button
                      key={choice.opt}
                      onClick={() => handleSelectOption(currentQ.id, choice.opt)}
                      className={`w-full p-4 rounded-xl border text-sm text-left transition flex items-start gap-3 ${
                        isSelected
                          ? 'bg-indigo-950/80 border-indigo-500 text-white font-semibold'
                          : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-900 border border-slate-700 text-slate-400'
                      }`}>
                        {choice.opt}
                      </span>
                      <span className="mt-0.5 min-w-0 flex-1 break-words [overflow-wrap:anywhere] leading-snug">{renderRichInline(choice.text || '')}</span>
                    </button>
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

              {/* Strict Notice: Exam Conditions */}
              <div className="text-[11px] text-slate-400 italic">
                * Real Exam Conditions Active: Answers and textbook explanations are confidential until you submit.
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 text-sm">No question loaded</div>
          )}

          {/* Bottom Nav: Prev / Next */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex <= 0}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentIndex >= questions.length - 1}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 disabled:opacity-40"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Pre-Submission Confirmation Modal */}
      {confirmModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span>Confirm Final Submission</span>
              </h3>
              <button
                onClick={() => setConfirmModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-3 bg-slate-800/80 rounded-xl space-y-1">
                <div className="flex justify-between">
                  <span>Answered Questions:</span>
                  <strong className="text-emerald-400">{answeredCount}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Unanswered Questions:</span>
                  <strong className={unansweredCount > 0 ? 'text-red-400 font-bold' : 'text-slate-400'}>
                    {unansweredCount}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span>Marked for Review:</span>
                  <strong className="text-amber-400">{reviewCount}</strong>
                </div>
              </div>

              {unansweredCount > 0 && (
                <p className="text-red-300 font-medium">
                  Warning: You have {unansweredCount} unanswered questions remaining. Unanswered questions will receive 0 marks.
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setConfirmModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
              >
                Return to Exam
              </button>
              <button
                onClick={() => handleFinalSubmit(false)}
                disabled={submitting}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submitting ? 'Submitting...' : 'Yes, Submit Exam'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question Feedback Modal */}
      <QuestionFeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        question={currentQ}
        examId={exam?.id}
        examTitle={exam?.title}
        user={user}
      />
    </div>
  );
};
