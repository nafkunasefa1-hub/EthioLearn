import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Layers,
  ChevronDown,
  ChevronUp,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Target,
  BrainCircuit,
  ExternalLink
} from 'lucide-react';
import { ExamAttempt, ExamQuestion, StudentAnswer, Exam } from '../types';
import { QuestionDiagramViewer } from '../components/QuestionDiagramViewer';
import { FormattedQuestionText, renderRichInline } from '../components/FormattedQuestionText';
import { getOfflineExamAttempt } from '../utils/offlineStorage';

interface ExamResultsViewProps {
  attemptId: string;
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

interface TopicAnalysis {
  topic_name: string;
  topic_id?: string;
  book_id?: string;
  page_number?: number;
  total: number;
  correct: number;
  accuracy: number;
  status: 'strength' | 'competent' | 'weakness';
}

export const ExamResultsView: React.FC<ExamResultsViewProps> = ({ attemptId, onNavigate }) => {
  const { user } = useAuth();
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null);
  const [exam, setExam] = useState<Exam | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, StudentAnswer>>({});
  const [loading, setLoading] = useState(true);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [topicAnalyses, setTopicAnalyses] = useState<TopicAnalysis[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(`/api/exam-attempts/${attemptId}`, {
          headers: { 'x-user-id': user?.id || 'usr-student-premium' }
        });
        if (res.ok) {
          const data = await res.json();
          setAttempt(data.attempt);
          setExam(data.exam);
          setQuestions(data.questions);

          const aMap: Record<string, StudentAnswer> = {};
          if (data.answers) {
            data.answers.forEach((ans: StudentAnswer) => {
              aMap[ans.question_id] = ans;
            });
          }
          setAnswers(aMap);

          // Compute Topic Breakdown
          computeTopicBreakdown(data.questions, aMap);
          return;
        }
      } catch (err) {
        console.warn('Online result fetch failed, checking offline attempts:', err);
      }

      // Offline attempt fallback
      try {
        const offlineRecord = await getOfflineExamAttempt(attemptId);
        if (offlineRecord && offlineRecord.attempt) {
          setAttempt(offlineRecord.attempt);
          setExam(offlineRecord.exam || null);
          const qs = offlineRecord.questions || [];
          setQuestions(qs);

          const aMap: Record<string, StudentAnswer> = {};
          if (offlineRecord.answers) {
            Object.entries(offlineRecord.answers).forEach(([qId, val]) => {
              const qObj = qs.find(q => q.id === qId);
              const isCorr = qObj ? (qObj.correct_answer || '').toUpperCase() === (val.selected || '').toUpperCase() : false;
              aMap[qId] = {
                id: `ans-${qId}`,
                attempt_id: attemptId,
                question_id: qId,
                selected_answer: val.selected,
                is_correct: isCorr,
                marked_for_review: val.review,
                answered_at: new Date().toISOString()
              };
            });
          }
          setAnswers(aMap);
          computeTopicBreakdown(qs, aMap);
        }
      } catch (offlineErr) {
        console.error('Failed to load offline attempt report:', offlineErr);
      } finally {
        setLoading(false);
      }
    };

    const computeTopicBreakdown = (qs: ExamQuestion[], aMap: Record<string, StudentAnswer>) => {
      const topicMap: Record<string, { total: number; correct: number; topic_id?: string; book_id?: string; page_number?: number }> = {};
      qs.forEach((q: ExamQuestion) => {
        const tName = q.topic_name || 'General Curriculum';
        if (!topicMap[tName]) {
          topicMap[tName] = {
            total: 0,
            correct: 0,
            topic_id: q.topic_id,
            book_id: q.book_id,
            page_number: q.printed_page_number
          };
        }
        topicMap[tName].total += 1;
        const stuAns = aMap[q.id];
        if (stuAns && stuAns.selected_answer === q.correct_answer) {
          topicMap[tName].correct += 1;
        }
      });

      const analyses: TopicAnalysis[] = Object.entries(topicMap).map(([tName, stats]) => {
        const accuracy = Math.round((stats.correct / stats.total) * 100);
        let status: 'strength' | 'competent' | 'weakness' = 'competent';
        if (accuracy >= 80) status = 'strength';
        else if (accuracy < 50) status = 'weakness';
        return {
          topic_name: tName,
          topic_id: stats.topic_id,
          book_id: stats.book_id,
          page_number: stats.page_number,
          total: stats.total,
          correct: stats.correct,
          accuracy,
          status
        };
      });

      // Sort so weaknesses appear first to guide study
      analyses.sort((a, b) => a.accuracy - b.accuracy);
      setTopicAnalyses(analyses);

      // Expand first 3 questions by default
      const exp: Record<string, boolean> = {};
      qs.slice(0, 3).forEach((q: ExamQuestion) => {
        exp[q.id] = true;
      });
      setExpandedQuestions(exp);
      setLoading(false);
    };

    fetchResults();
  }, [attemptId]);

  const toggleExpand = (qId: string) => {
    setExpandedQuestions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  if (loading || !attempt) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center text-slate-300">
        <Award className="w-8 h-8 text-amber-400 animate-bounce mx-auto mb-2" />
        <p className="text-sm font-semibold">Generating your exam diagnostic report & topic feedback...</p>
      </div>
    );
  }

  const percentage = attempt.percentage ?? Math.round(((attempt.score ?? 0) / (attempt.total_questions || 1)) * 100);
  const isPass = percentage >= 50;
  const weaknesses = topicAnalyses.filter(t => t.status === 'weakness');
  const strengths = topicAnalyses.filter(t => t.status === 'strength');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Score Header Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 border border-slate-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>National Examination Diagnostic Report</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {exam?.title}
            </h1>
            <p className="text-xs text-slate-300">
              Submitted on {new Date(attempt.submitted_at || Date.now()).toLocaleDateString()} • {attempt.total_questions} Questions Examined
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/80 p-4 rounded-2xl border border-slate-700/80">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-black text-white">
                {percentage}%
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {attempt.score} of {attempt.total_questions} Marks
              </div>
            </div>

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg ${
              isPass
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-red-500/20 text-red-400 border border-red-500/40'
            }`}>
              {isPass ? 'PASS' : 'REVIEW'}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('exam-timed', { examId: attempt.exam_id })}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Exam</span>
            </button>
            <button
              onClick={() => onNavigate('practice-topics')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Practice by Topic</span>
            </button>
          </div>

          <button
            onClick={() => onNavigate('dashboard')}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
          >
            <span>Back to Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* TOPIC ANALYSIS & DIAGNOSTIC FEEDBACK SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Topic Mastery Breakdown */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                <span>Performance Analysis by Topic</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Strengths, weaknesses, and targeted textbook review topics identified from your submission.
              </p>
            </div>
            <span className="text-[11px] font-bold text-slate-400 px-2 py-0.5 bg-slate-800 rounded-lg">
              {topicAnalyses.length} Topics
            </span>
          </div>

          <div className="space-y-3">
            {topicAnalyses.map(t => (
              <div
                key={t.topic_name}
                className={`p-4 rounded-2xl border transition ${
                  t.status === 'weakness'
                    ? 'bg-rose-950/30 border-rose-800/60'
                    : t.status === 'strength'
                    ? 'bg-emerald-950/30 border-emerald-800/60'
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{t.topic_name}</span>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        t.status === 'weakness'
                          ? 'bg-rose-900/60 text-rose-300 border-rose-700'
                          : t.status === 'strength'
                          ? 'bg-emerald-900/60 text-emerald-300 border-emerald-700'
                          : 'bg-amber-900/60 text-amber-300 border-amber-700'
                      }`}>
                        {t.status === 'weakness' ? 'Focus Area' : t.status === 'strength' ? 'Strong Area' : 'Adequate'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Accuracy: {t.correct} of {t.total} questions correct ({t.accuracy}%)
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className={`text-lg font-black ${
                      t.status === 'weakness' ? 'text-rose-400' : t.status === 'strength' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {t.accuracy}%
                    </span>
                  </div>
                </div>

                {/* Accuracy progress bar */}
                <div className="w-full bg-slate-900/80 rounded-full h-2 mt-3 overflow-hidden border border-slate-700/40">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      t.status === 'weakness' ? 'bg-rose-500' : t.status === 'strength' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${t.accuracy}%` }}
                  />
                </div>

                {/* Direct Action Link for Weak Topics */}
                {t.status === 'weakness' && (
                  <div className="mt-3 pt-3 border-t border-rose-900/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-rose-300/90 text-[11px] flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>Recommended: Review core textbook theorems before next mock exam.</span>
                    </span>
                    {t.book_id && t.page_number && (
                      <button
                        onClick={() => onNavigate('book-viewer', { bookId: t.book_id, initialPage: t.page_number })}
                        className="px-2.5 py-1 bg-rose-900/80 hover:bg-rose-800 text-rose-100 rounded-lg font-bold text-[11px] transition flex items-center gap-1"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Open Page {t.page_number}</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: AI Exam Diagnostic Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-md flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 border-b border-slate-800 pb-3">
              <BrainCircuit className="w-5 h-5" />
              <h3 className="font-bold text-white text-sm">AI Exam Tutor Feedback</h3>
            </div>

            <div className="p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
              <p className="font-semibold text-white">
                {isPass
                  ? 'Great progress on this national examination simulation!'
                  : 'Important diagnostic insights for your revision plan:'}
              </p>
              {weaknesses.length > 0 ? (
                <p>
                  You should dedicate your next study sessions to{' '}
                  <strong className="text-rose-400">
                    {weaknesses.map(w => w.topic_name).slice(0, 3).join(', ')}
                  </strong>. Multiple questions tested definitions and edge-cases that are explicitly explained in the Ministry textbooks.
                </p>
              ) : (
                <p>
                  Outstanding consistency across all topics. You demonstrated strong recall of curriculum definitions and formula applications.
                </p>
              )}
              {strengths.length > 0 && (
                <p className="text-emerald-300">
                  Confirmed Strengths: {strengths.map(s => s.topic_name).slice(0, 2).join(', ')}.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Recommended Next Steps
              </h4>
              <button
                onClick={() => onNavigate('ai-tutor', { question: `Can you explain the main formulas and concepts tested in ${weaknesses[0]?.topic_name || exam?.title}?` })}
                className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-semibold text-emerald-300 border border-slate-700 transition flex items-center justify-between"
              >
                <span>Ask AI Tutor about {weaknesses[0]?.topic_name || 'this exam'}</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              </button>
              <button
                onClick={() => onNavigate('practice-topics')}
                className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-semibold text-slate-200 border border-slate-700 transition flex items-center justify-between"
              >
                <span>Solve 10 Targeted Topical Questions</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-800/40 text-[11px] text-emerald-300/90 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Scores are automatically logged to your student analytics dashboard.</span>
          </div>
        </div>
      </div>

      {/* Question-by-Question Detailed Review with Solutions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white">Detailed Question Solutions & Textbook Citations</h2>
          <span className="text-xs text-slate-400">
            {questions.length} Questions
          </span>
        </div>

        {questions.map((q, idx) => {
          const studentAns = answers[q.id];
          const selected = studentAns?.selected_answer;
          const isCorrect = selected === q.correct_answer;
          const isExpanded = !!expandedQuestions[q.id];

          return (
            <div
              key={q.id}
              className="bg-slate-800 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-sm"
            >
              {/* Question summary banner */}
              <div
                onClick={() => toggleExpand(q.id)}
                className="flex items-start justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                    isCorrect
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : 'bg-red-950 text-red-400 border border-red-800'
                  }`}>
                    {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-300">
                        Question {idx + 1}
                      </span>
                      <span className="text-[10px] px-2 py-0.2 rounded bg-slate-900 text-slate-400 font-medium">
                        {q.topic_name}
                      </span>
                      {q.grade_level && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-900 text-slate-500">
                          Grade {q.grade_level}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white font-medium mt-1 line-clamp-1">
                      {q.question_text}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className={isCorrect ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {isCorrect ? 'Correct' : `Answered (${selected || 'None'})`}
                  </span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {/* Collapsible details */}
              {isExpanded && (
                <div className="pt-4 border-t border-slate-700 space-y-4 text-xs">
                  {/* Full question text */}
                  <div className="text-slate-100 text-sm font-medium leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                    <FormattedQuestionText text={q.question_text} />
                    {(q.diagram_url || q.diagram_svg || q.question_image_path) && (
                      <div className="mt-3">
                        <QuestionDiagramViewer
                          imagePath={q.diagram_url || q.question_image_path}
                          diagramSvg={q.diagram_svg}
                          caption={q.diagram_caption || 'Examination Figure'}
                        />
                      </div>
                    )}
                  </div>

                  {/* Multiple Choice Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(() => {
                      const optionsMap: Record<string, string> = Array.isArray(q.options)
                        ? q.options.reduce((acc: Record<string, string>, opt: string, i: number) => {
                            acc[String.fromCharCode(65 + i)] = opt;
                            return acc;
                          }, {})
                        : (q.options as Record<string, string>) || {
                            A: q.option_a,
                            B: q.option_b,
                            C: q.option_c,
                            D: q.option_d,
                            ...(q.option_e ? { E: q.option_e } : {})
                          };

                      return Object.entries(optionsMap).map(([optKey, optText]) => {
                        const isOptionCorrect = optKey === q.correct_answer;
                        const isStudentChoice = optKey === selected;

                        let borderClass = 'border-slate-700 bg-slate-900/60 text-slate-300';
                        if (isOptionCorrect) {
                          borderClass = 'border-emerald-500 bg-emerald-950/60 text-emerald-200 font-semibold';
                        } else if (isStudentChoice && !isOptionCorrect) {
                          borderClass = 'border-red-500 bg-red-950/60 text-red-200';
                        }

                        return (
                          <div
                            key={optKey}
                            className={`p-3 rounded-xl border flex items-start gap-2.5 ${borderClass}`}
                          >
                            <span
                              className={`w-5 h-5 rounded flex items-center justify-center font-bold text-xs shrink-0 ${
                                isOptionCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : isStudentChoice
                                  ? 'bg-red-600 text-white'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {optKey}
                            </span>
                            <span className="flex-1 min-w-0 break-words [overflow-wrap:anywhere] leading-snug">{renderRichInline(String(optText || ''))}</span>
                          </div>
                        );
                      });
                    })()}
                  </div>

                  {/* Official Step-by-Step Solution */}
                  <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 space-y-2 max-w-full overflow-hidden">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Official Curriculum Solution & Working:</span>
                    </div>
                    <div className="text-slate-300 text-xs leading-relaxed whitespace-pre-line break-words [overflow-wrap:anywhere] max-w-full overflow-hidden">
                      <FormattedQuestionText text={q.explanation} />
                    </div>
                  </div>

                  {/* Direct Textbook Grounding Citation */}
                  {q.textbook_reference && (
                    <div className="flex items-center justify-between p-3 bg-indigo-950/40 border border-indigo-800/50 rounded-xl text-xs">
                      <div className="flex items-center gap-2 text-indigo-300">
                        <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>
                          Direct Citation:{' '}
                          <strong>
                            {typeof q.textbook_reference === 'string'
                              ? q.textbook_reference
                              : q.textbook_reference.book_title || q.book_id}
                          </strong>{' '}
                          {typeof q.textbook_reference !== 'string' && q.textbook_reference.printed_page_number
                            ? `(Page ${q.textbook_reference.printed_page_number})`
                            : ''}
                        </span>
                      </div>
                      {typeof q.textbook_reference !== 'string' && q.textbook_reference.book_id && (
                        <button
                          onClick={() =>
                            onNavigate('book-viewer', {
                              bookId: q.textbook_reference.book_id,
                              initialPage: q.textbook_reference.printed_page_number || 1
                            })
                          }
                          className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1"
                        >
                          <span>Open Page</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
