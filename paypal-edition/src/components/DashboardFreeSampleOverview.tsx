import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  Lock,
  ArrowRight,
  ChevronRight,
  HelpCircle,
  BookOpen,
  Zap,
  Info
} from 'lucide-react';
import { MathMarkdownRenderer } from './MathMarkdownRenderer';
import { Exam, ExamQuestion } from '../types';

interface SampleGroup {
  exam: Exam;
  questions: ExamQuestion[];
  total_count: number;
}

interface FreeSampleOverviewProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
  userGrade?: string;
  isPaid?: boolean;
}

export const DashboardFreeSampleOverview: React.FC<FreeSampleOverviewProps> = ({
  onNavigate,
  userGrade = 'Grade 12',
  isPaid = false
}) => {
  const [samples, setSamples] = useState<SampleGroup[]>([]);
  const [aiSamples, setAiSamples] = useState<ExamQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  // Active tab: index 0, 1, 2 for exam types, 3 for AI-generated practice
  const [activeTab, setActiveTab] = useState<number>(0);
  // Active question index within current sample: 0, 1, 2 (Q1, Q2, Q3) or 3 (locked)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  // Selected answer per question (key: `tab-qIndex` => 'A'|'B'|'C'|'D')
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  // Show explanations per question
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const res = await fetch('/api/dashboard/free-samples');
        if (res.ok) {
          const data = await res.json();
          if (data.samples) setSamples(data.samples);
          if (data.aiSamples) setAiSamples(data.aiSamples);
        }
      } catch (err) {
        console.warn('Could not load free preview samples:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSamples();
  }, []);

  const currentQuestions: ExamQuestion[] =
    activeTab === 3
      ? aiSamples
      : (samples[activeTab]?.questions || []);

  const currentExam = activeTab === 3 ? null : samples[activeTab]?.exam;
  const totalExamQuestions = activeTab === 3 ? 3 : (samples[activeTab]?.total_count || 60);

  const activeQuestion = currentQuestions[activeQuestionIndex];
  const questionKey = `${activeTab}-${activeQuestionIndex}`;
  const selectedOpt = selectedAnswers[questionKey];
  const isExplanationShown = revealedExplanations[questionKey] || Boolean(selectedOpt);

  const handleSelectOption = (opt: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionKey]: opt }));
    setRevealedExplanations(prev => ({ ...prev, [questionKey]: true }));
  };

  const tabs = [
    {
      id: 0,
      title: samples[0]?.exam?.subject_name ? `${samples[0].exam.subject_name} EUEE` : 'Mathematics EUEE',
      badge: '2018 E.C. Real Exam',
      icon: '📐'
    },
    {
      id: 1,
      title: samples[1]?.exam?.subject_name ? `${samples[1].exam.subject_name} EUEE` : 'English EUEE',
      badge: '2018 E.C. Online',
      icon: '📖'
    },
    {
      id: 2,
      title: samples[2]?.exam?.subject_name ? `${samples[2].exam.subject_name} EUEE` : 'Physics / Science EUEE',
      badge: '2018 E.C. Real Exam',
      icon: '⚡'
    },
    {
      id: 3,
      title: '3 AI-Generated Questions',
      badge: 'Curriculum AI Tutor',
      icon: '✨'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900 border-2 border-emerald-500/50 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              Free Student Preview • 3 Questions Only
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-xs">
              Overview Under Dashboard
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Try 3 Questions Free From Official Entrance Exams
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Free tier students can test the first 3 questions from real 2018 E.C. national entrance exams and AI practice with instant feedback. All other 50+ questions and full app features are unlocked via subscription.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('payment')}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Unlock Section (200 ETB)</span>
          </button>
          <button
            onClick={() => onNavigate('payment', { plan: 'all' })}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-700/60 font-bold text-xs rounded-xl transition"
          >
            All-Access (300 ETB)
          </button>
        </div>
      </div>

      {/* 3 Exam Types + AI Tab Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {tabs.map(t => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id);
                setActiveQuestionIndex(0);
              }}
              className={`p-3.5 rounded-2xl border text-left transition flex flex-col justify-between ${
                isActive
                  ? 'bg-emerald-950/60 border-emerald-400 ring-2 ring-emerald-500/40 shadow-md'
                  : 'bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-base">{t.icon}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-emerald-500/30 text-emerald-300' : 'bg-slate-900 text-slate-400'}`}>
                  {t.badge}
                </span>
              </div>
              <div className={`font-bold text-xs sm:text-sm line-clamp-1 ${isActive ? 'text-white' : 'text-slate-200'}`}>
                {t.title}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Questions 1, 2, 3 available
              </div>
            </button>
          );
        })}
      </div>

      {/* Questions Navigator: Q1, Q2, Q3, and Locked Q4+ */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/70 border border-slate-800 p-3 rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
            Questions:
          </span>
          {[0, 1, 2].map(idx => {
            const isQActive = activeQuestionIndex === idx;
            const qKey = `${activeTab}-${idx}`;
            const isAnswered = Boolean(selectedAnswers[qKey]);
            return (
              <button
                key={idx}
                onClick={() => setActiveQuestionIndex(idx)}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                  isQActive
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                    : isAnswered
                    ? 'bg-emerald-950 border border-emerald-500 text-emerald-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                }`}
              >
                <span>{idx + 1}</span>
                {isAnswered && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />}
              </button>
            );
          })}

          {/* Locked Badge Pill for Questions 4-60 */}
          <button
            onClick={() => setActiveQuestionIndex(3)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
              activeQuestionIndex === 3
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                : 'bg-slate-900/90 text-amber-300 hover:bg-amber-950/40 border-amber-500/40'
            }`}
            title="Questions 4 through end are reserved for paid students"
          >
            <Lock className="w-3 h-3" />
            <span>Q4 – {totalExamQuestions} (Locked)</span>
          </button>
        </div>

        <div className="text-xs text-slate-400 font-medium">
          {activeTab === 3 ? 'AI Generated Curriculum Sample' : (currentExam?.title || 'Ethiopian National Exam')}
        </div>
      </div>

      {/* Question Content or Locked Screen */}
      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">
          Loading official Ethiopian national examination items...
        </div>
      ) : activeQuestionIndex === 3 ? (
        /* LOCKED OVERVIEW CARD FOR Q4+ */
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 border-2 border-amber-500/50 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-lg">
          <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/30">
            <Lock className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Questions 4 through {totalExamQuestions} are Locked for Free Accounts
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
              You have tried the free 3-question preview. To access all {totalExamQuestions} questions, timed exam mode, detailed curriculum chapter links, and downloadable official PDFs:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2 text-left">
            <div className="bg-slate-900 border border-emerald-500/40 rounded-xl p-4 space-y-2">
              <div className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider">Option 1</div>
              <div className="text-base font-bold text-white">Your Section Only</div>
              <p className="text-xs text-slate-300">
                Full question bank and all official textbooks for your current section ({userGrade}).
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-lg font-black text-emerald-400">200 ETB</span>
                <button
                  onClick={() => onNavigate('payment')}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs"
                >
                  Unlock 200 ETB
                </button>
              </div>
            </div>

            <div className="bg-slate-900 border border-indigo-500/40 rounded-xl p-4 space-y-2">
              <div className="text-[11px] font-bold uppercase text-indigo-400 tracking-wider">Option 2 (All-Access)</div>
              <div className="text-base font-bold text-white">All Grades & Streams</div>
              <p className="text-xs text-slate-300">
                Grade 9, 10, 11, and 12 Natural & Social science question banks and textbooks.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-lg font-black text-indigo-400">300 ETB</span>
                <button
                  onClick={() => onNavigate('payment', { plan: 'all' })}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs"
                >
                  Unlock 300 ETB
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : activeQuestion ? (
        /* ACTIVE QUESTION 1, 2, OR 3 */
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5">
          {/* Question Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                Question {activeQuestionIndex + 1} of 3 (Free Preview)
              </span>
              {activeQuestion.topic_name && (
                <span className="px-2 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                  {activeQuestion.topic_name}
                </span>
              )}
            </div>

            {activeQuestion.difficulty && (
              <span className="text-slate-400">
                Difficulty: <strong className="text-amber-400">{activeQuestion.difficulty}</strong>
              </span>
            )}
          </div>

          {/* Question Statement */}
          <div className="text-slate-100 font-medium text-sm sm:text-base leading-relaxed py-1">
            <MathMarkdownRenderer content={activeQuestion.question_text} />
          </div>

          {/* Multiple Choice Options */}
          <div className="grid grid-cols-1 gap-2.5 pt-1">
            {(['A', 'B', 'C', 'D'] as const).map(letter => {
              const optText =
                letter === 'A'
                  ? activeQuestion.option_a
                  : letter === 'B'
                  ? activeQuestion.option_b
                  : letter === 'C'
                  ? activeQuestion.option_c
                  : activeQuestion.option_d;

              if (!optText) return null;

              const isChosen = selectedOpt === letter;
              const isCorrectOpt = activeQuestion.correct_answer === letter;
              const showCorrectness = Boolean(selectedOpt);

              let buttonStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-850';
              if (showCorrectness) {
                if (isCorrectOpt) {
                  buttonStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-semibold ring-1 ring-emerald-500';
                } else if (isChosen && !isCorrectOpt) {
                  buttonStyle = 'bg-rose-950/70 border-rose-500 text-rose-200 ring-1 ring-rose-500';
                } else {
                  buttonStyle = 'bg-slate-900/60 border-slate-800 text-slate-400 opacity-60';
                }
              } else if (isChosen) {
                buttonStyle = 'bg-indigo-950/70 border-indigo-500 text-indigo-200 ring-1 ring-indigo-500';
              }

              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => handleSelectOption(letter)}
                  className={`w-full text-left p-3.5 rounded-xl border transition flex items-start gap-3 text-xs sm:text-sm ${buttonStyle}`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                    showCorrectness && isCorrectOpt
                      ? 'bg-emerald-500 text-slate-950'
                      : showCorrectness && isChosen && !isCorrectOpt
                      ? 'bg-rose-500 text-white'
                      : isChosen
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {letter}
                  </span>

                  <div className="flex-1 overflow-x-auto">
                    <MathMarkdownRenderer content={optText} />
                  </div>

                  {showCorrectness && isCorrectOpt && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 self-center" />
                  )}
                  {showCorrectness && isChosen && !isCorrectOpt && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 self-center" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant AI Explanation Box */}
          {isExplanationShown && (
            <div className="bg-slate-900 border border-emerald-500/40 rounded-xl p-4 space-y-2 mt-4 animate-in fade-in">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Curriculum Verified Solution</span>
                </div>
                <span className="font-mono text-slate-300">
                  Correct Answer: <strong className="text-emerald-400">{activeQuestion.correct_answer}</strong>
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
                <MathMarkdownRenderer content={activeQuestion.explanation || 'Solution steps verified according to the official Ethiopian Ministry of Education curriculum guidelines.'} />
              </div>
            </div>
          )}

          {/* Next Button */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
            <div className="text-xs text-slate-400">
              {activeQuestionIndex < 2 ? (
                <span>Question {activeQuestionIndex + 1} of 3 free</span>
              ) : (
                <span className="text-amber-400 font-semibold">Final free question for this exam</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {activeQuestionIndex < 2 ? (
                <button
                  onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow"
                >
                  <span>Next Question ({activeQuestionIndex + 2}/3)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setActiveQuestionIndex(3)}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl transition flex items-center gap-1.5 shadow-md"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Unlock Remaining {totalExamQuestions - 3} Questions</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
