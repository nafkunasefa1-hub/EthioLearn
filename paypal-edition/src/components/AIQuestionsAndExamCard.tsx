import React, { useState } from 'react';
import { ExamQuestion } from '../types';
import { Sparkles, Award, CheckCircle2, XCircle, ChevronDown, ChevronUp, Layers, HelpCircle } from 'lucide-react';
import { FormattedQuestionText } from './FormattedQuestionText';
import { MathMarkdownRenderer } from './MathMarkdownRenderer';

interface AIQuestionsAndExamCardProps {
  aiGeneratedQuestions?: ExamQuestion[];
  relatedExamQuestions?: ExamQuestion[];
  onNavigate: (tab: string, params?: any) => void;
  compact?: boolean;
}

export const AIQuestionsAndExamCard: React.FC<AIQuestionsAndExamCardProps> = ({
  aiGeneratedQuestions = [],
  relatedExamQuestions = [],
  onNavigate,
  compact = false
}) => {
  // State for tracking user's selected answers for each question: { [questionId]: 'A' | 'B' | 'C' | 'D' }
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  // State for toggling explanations
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});

  const handleSelectOption = (questionId: string, optionKey: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionKey
    }));
    // Auto-reveal explanation when an option is clicked
    setRevealedExplanations(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const toggleExplanation = (questionId: string) => {
    setRevealedExplanations(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  if ((!aiGeneratedQuestions || aiGeneratedQuestions.length === 0) &&
      (!relatedExamQuestions || relatedExamQuestions.length === 0)) {
    return null;
  }

  return (
    <div className={`mt-6 pt-6 border-t border-slate-700/80 space-y-6 text-left ${compact ? 'text-xs' : 'text-sm'}`}>
      {/* 1. AI-GENERATED PRACTICE QUESTIONS SECTION */}
      {aiGeneratedQuestions && aiGeneratedQuestions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-400">
            <div className="p-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-lg">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white tracking-wide flex items-center gap-2">
                AI Generated Practice Questions
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                  Concept Check
                </span>
              </h4>
              <p className="text-xs text-slate-400">
                Interactive problems generated specifically to test what you just asked
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {aiGeneratedQuestions.map((q, idx) => {
              const qId = q.id || `ai-q-${idx}`;
              const chosen = selectedAnswers[qId];
              const isCorrect = chosen && chosen.toUpperCase() === q.correct_answer.toUpperCase();
              const hasAnswered = Boolean(chosen);
              const showExp = revealedExplanations[qId] || hasAnswered;

              const options = [
                { key: 'A', text: q.option_a },
                { key: 'B', text: q.option_b },
                { key: 'C', text: q.option_c },
                { key: 'D', text: q.option_d }
              ].filter(opt => Boolean(opt.text));

              return (
                <div
                  key={qId}
                  className="p-4 rounded-xl bg-slate-900/90 border border-indigo-500/30 shadow-md space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-indigo-300 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-[10px] text-indigo-200">
                        {idx + 1}
                      </span>
                      {q.topic_name || 'Concept Practice'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      AI Created
                    </span>
                  </div>

                  <div className="text-slate-100 font-medium leading-relaxed">
                    <FormattedQuestionText text={q.question_text} />
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {options.map(opt => {
                      const isOptionChosen = chosen === opt.key;
                      const isThisCorrectAnswer = opt.key.toUpperCase() === q.correct_answer.toUpperCase();

                      let btnStyle = "bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200";
                      if (hasAnswered) {
                        if (isThisCorrectAnswer) {
                          btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold";
                        } else if (isOptionChosen) {
                          btnStyle = "bg-rose-950/60 border-rose-500 text-rose-200";
                        } else {
                          btnStyle = "bg-slate-900/60 border-slate-800 text-slate-500 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleSelectOption(qId, opt.key)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition flex items-start gap-2.5 ${btnStyle}`}
                        >
                          <span className={`w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center font-bold text-[11px] ${
                            hasAnswered && isThisCorrectAnswer
                              ? 'bg-emerald-500 text-slate-950'
                              : hasAnswered && isOptionChosen
                              ? 'bg-rose-500 text-white'
                              : 'bg-slate-700 text-slate-300'
                          }`}>
                            {opt.key}
                          </span>
                          <span className="flex-1 leading-snug">{opt.text}</span>
                          {hasAnswered && isThisCorrectAnswer && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          )}
                          {hasAnswered && isOptionChosen && !isThisCorrectAnswer && (
                            <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback & Explanation */}
                  {hasAnswered && (
                    <div className="pt-2 border-t border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold flex items-center gap-1.5 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" /> Correct Answer! Great work!
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" /> Incorrect. Correct Answer is Option {q.correct_answer}.
                            </>
                          )}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleExplanation(qId)}
                          className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition"
                        >
                          {showExp ? 'Hide Reasoning' : 'View Reasoning'}
                          {showExp ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {showExp && q.explanation && (
                        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg text-xs text-slate-300 space-y-1">
                          <span className="font-semibold text-indigo-300 block text-[11px] uppercase tracking-wider">
                            Pedagogical Explanation:
                          </span>
                          <MathMarkdownRenderer content={q.explanation} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. RELATED 2018 EUEE ENTRANCE EXAM QUESTIONS SECTION */}
      {relatedExamQuestions && relatedExamQuestions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-amber-400">
            <div className="p-1.5 bg-amber-500/20 border border-amber-500/30 rounded-lg">
              <Award className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white tracking-wide flex items-center gap-2">
                Related 2018 E.C. Entrance Exam Questions
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                  Official EUEE 2018
                </span>
              </h4>
              <p className="text-xs text-slate-400">
                Official Ethiopian University Entrance Examination questions on this subject
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {relatedExamQuestions.map((q, idx) => {
              const qId = q.id || `euee-q-${idx}`;
              const chosen = selectedAnswers[qId];
              const isCorrect = chosen && chosen.toUpperCase() === q.correct_answer.toUpperCase();
              const hasAnswered = Boolean(chosen);
              const showExp = revealedExplanations[qId] || hasAnswered;

              const options = [
                { key: 'A', text: q.option_a },
                { key: 'B', text: q.option_b },
                { key: 'C', text: q.option_c },
                { key: 'D', text: q.option_d }
              ].filter(opt => Boolean(opt.text));

              return (
                <div
                  key={qId}
                  className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow-md space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        2018 EUEE • Q{q.question_number || idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-300">
                        {q.topic_name || 'National Curriculum Question'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigate('exam-practice', {
                        examId: q.exam_id,
                        questionId: q.id
                      })}
                      className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 rounded-lg text-xs font-semibold transition flex items-center gap-1.5"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Practice in Simulator</span>
                    </button>
                  </div>

                  <div className="text-slate-100 font-medium leading-relaxed">
                    <FormattedQuestionText text={q.question_text} />
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {options.map(opt => {
                      const isOptionChosen = chosen === opt.key;
                      const isThisCorrectAnswer = opt.key.toUpperCase() === q.correct_answer.toUpperCase();

                      let btnStyle = "bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200";
                      if (hasAnswered) {
                        if (isThisCorrectAnswer) {
                          btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold";
                        } else if (isOptionChosen) {
                          btnStyle = "bg-rose-950/60 border-rose-500 text-rose-200";
                        } else {
                          btnStyle = "bg-slate-900/60 border-slate-800 text-slate-500 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleSelectOption(qId, opt.key)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition flex items-start gap-2.5 ${btnStyle}`}
                        >
                          <span className={`w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center font-bold text-[11px] ${
                            hasAnswered && isThisCorrectAnswer
                              ? 'bg-emerald-500 text-slate-950'
                              : hasAnswered && isOptionChosen
                              ? 'bg-rose-500 text-white'
                              : 'bg-slate-700 text-slate-300'
                          }`}>
                            {opt.key}
                          </span>
                          <span className="flex-1 leading-snug">{opt.text}</span>
                          {hasAnswered && isThisCorrectAnswer && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          )}
                          {hasAnswered && isOptionChosen && !isThisCorrectAnswer && (
                            <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback & Explanation */}
                  {hasAnswered && (
                    <div className="pt-2 border-t border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold flex items-center gap-1.5 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" /> Correct Answer! Great work!
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" /> Incorrect. Correct Answer is Option {q.correct_answer}.
                            </>
                          )}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleExplanation(qId)}
                          className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition"
                        >
                          {showExp ? 'Hide Official Solution' : 'View Official Solution'}
                          {showExp ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {showExp && q.explanation && (
                        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg text-xs text-slate-300 space-y-1">
                          <span className="font-semibold text-amber-300 block text-[11px] uppercase tracking-wider">
                            Official Exam Solution & Explanation:
                          </span>
                          <MathMarkdownRenderer content={q.explanation} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
