import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { FormattedQuestionText } from './FormattedQuestionText';
import {
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Flame,
  ShieldAlert,
  Brain,
  Timer,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface RetentionLockModalProps {
  isOpen: boolean;
  onUnlocked: () => void;
  onBypassEmergency?: () => void;
}

interface Question {
  id: string;
  subject: string;
  grade: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  ethiopianCurriculumRef: string;
}

const SAMPLE_RETENTION_QUESTIONS: Question[] = [
  {
    id: 'ret-1',
    subject: 'Chemistry',
    grade: 'Grade 11 & 12',
    topic: 'Electrochemistry & Redox Reactions',
    question: 'In a standard galvanic cell with Zn and Cu electrodes, what is the role of the salt bridge?',
    options: [
      'To provide electrons directly to the external wire circuit',
      'To maintain electrical neutrality by allowing ion migration between half-cells',
      'To increase the standard cell potential (E°) indefinitely',
      'To act as a physical catalyst for oxidation at the cathode'
    ],
    correctIndex: 1,
    explanation: 'The salt bridge contains inert electrolyte ions (such as KNO₃ or KCl) that migrate into the respective half-cells to neutralize accumulating excess charge, maintaining electrical neutrality without letting the solutions mix.',
    ethiopianCurriculumRef: 'Grade 12 Chemistry Unit 3 (Electrochemistry, Section 3.2)'
  },
  {
    id: 'ret-2',
    subject: 'Physics',
    grade: 'Grade 10 & 11',
    topic: 'Newtonian Mechanics & Momentum',
    question: 'A 2 kg cart moving at 4 m/s collides and sticks to a stationary 2 kg cart on a frictionless track. What is their combined velocity after the collision?',
    options: [
      '4 m/s',
      '2 m/s',
      '1 m/s',
      '8 m/s'
    ],
    correctIndex: 1,
    explanation: 'By Conservation of Linear Momentum: m₁v₁ + m₂v₂ = (m₁ + m₂)v_f. So (2)(4) + 0 = (2 + 2)v_f → 8 = 4v_f → v_f = 2 m/s.',
    ethiopianCurriculumRef: 'Grade 11 Physics Unit 4 (Work, Energy & Momentum)'
  },
  {
    id: 'ret-3',
    subject: 'Mathematics',
    grade: 'Grade 12',
    topic: 'Differential Calculus & Critical Points',
    question: 'Find the critical values of f(x) = 2x³ − 3x² − 12x + 7.',
    options: [
      'x = 2 and x = −1',
      'x = −2 and x = 1',
      'x = 3 and x = −4',
      'x = 0 and x = 2'
    ],
    correctIndex: 0,
    explanation: 'Take the derivative f\'(x) = 6x² − 6x − 12 = 6(x² − x − 2) = 6(x − 2)(x + 1) = 0. The roots are x = 2 and x = −1.',
    ethiopianCurriculumRef: 'Grade 12 Mathematics Unit 3 (Calculus & Graphing)'
  },
  {
    id: 'ret-4',
    subject: 'Biology',
    grade: 'Grade 11',
    topic: 'Cellular Respiration & Krebs Cycle',
    question: 'Where does the Krebs (Citric Acid) Cycle specifically occur in eukaryotic cells?',
    options: [
      'Cytosol',
      'Mitochondrial matrix',
      'Outer mitochondrial membrane',
      'Thylakoid lumen'
    ],
    correctIndex: 1,
    explanation: 'Glycolysis occurs in the cytosol, but the Citric Acid Cycle takes place inside the fluid mitochondrial matrix, where acetyl-CoA is oxidized to CO₂.',
    ethiopianCurriculumRef: 'Grade 11 Biology Unit 2 (Biochemical Pathways)'
  }
];

export const RetentionLockModal: React.FC<RetentionLockModalProps> = ({
  isOpen,
  onUnlocked,
  onBypassEmergency
}) => {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [answeredMap, setAnsweredMap] = useState<Record<number, { selected: number; isCorrect: boolean }>>({});
  const [unlockedCelebration, setUnlockedCelebration] = useState(false);

  // Take 3 questions
  const questions = SAMPLE_RETENTION_QUESTIONS.slice(0, 3);
  const currentQ = questions[currentIndex];

  useEffect(() => {
    setSelectedOption(null);
    setShowExplanation(false);
  }, [currentIndex]);

  if (!isOpen) return null;

  const handleSelectOption = (idx: number) => {
    if (showExplanation) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQ.correctIndex;
    setAnsweredMap(prev => ({
      ...prev,
      [currentIndex]: { selected: selectedOption, isCorrect }
    }));
    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed all 3 questions
      setUnlockedCelebration(true);
      setTimeout(() => {
        onUnlocked();
      }, 1500);
    }
  };

  const handleGraceBypass = () => {
    if (confirm('Activate 1-Hour Emergency Pass? We encourage finishing the 3 daily spaced questions to maximize retention for your EUEE.')) {
      onBypassEmergency?.();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 p-6 text-white relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-inner">
                {unlockedCelebration ? (
                  <Unlock className="w-6 h-6 text-emerald-300 animate-bounce" />
                ) : (
                  <Lock className="w-6 h-6 text-amber-300" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                    Daily Spaced Recall Gate
                  </span>
                  <span className="text-xs font-semibold text-amber-200 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" /> Retention Protocol
                  </span>
                </div>
                <h2 className="text-xl font-extrabold tracking-tight mt-1 text-white">
                  Unlock Today's Study Resources
                </h2>
              </div>
            </div>

            <div className="text-right hidden sm:block">
              <div className="text-xs text-white/80 font-medium">Daily Goal</div>
              <div className="text-lg font-black text-white">
                {currentIndex + 1} / {questions.length}
              </div>
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-white/90 leading-relaxed">
            Science shows memory decays 80% without immediate recall. Answer these 3 quick curriculum retrieval questions from past units to fire your neural recall pathways and unlock all textbooks, exams & AI Tutor.
          </p>
        </div>

        {/* Unlocked Celebration Banner */}
        {unlockedCelebration ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Daily Neural Gate Unlocked!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Outstanding work. Your synaptic connections for these units are refreshed. All textbooks, national exams, and the AI Tutor are now fully active for the next 24 hours.
            </p>
            <div className="text-xs font-bold text-emerald-400 flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" /> Redirecting to your workspace...
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Progress indicators */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-1">
                {questions.map((q, idx) => {
                  const state = answeredMap[idx];
                  let color = 'bg-slate-800 border-slate-700 text-slate-400';
                  if (state) {
                    color = state.isCorrect
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-400'
                      : 'bg-rose-950 border-rose-500 text-rose-400';
                  } else if (idx === currentIndex) {
                    color = 'bg-indigo-950 border-indigo-500 text-indigo-300 font-bold';
                  }
                  return (
                    <div
                      key={q.id}
                      className={`flex-1 py-1.5 px-3 rounded-lg border text-xs text-center transition flex items-center justify-center gap-1.5 ${color}`}
                    >
                      <span className="font-mono">Q{idx + 1}</span>
                      {state?.isCorrect === true && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      {state?.isCorrect === false && <XCircle className="w-3.5 h-3.5 text-rose-400" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md font-semibold bg-indigo-900/40 text-indigo-300 border border-indigo-700/50">
                  {currentQ.subject} • {currentQ.grade}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {currentQ.topic}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                <FormattedQuestionText text={currentQ.question} />
              </h4>

              <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{currentQ.ethiopianCurriculumRef}</span>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = idx === currentQ.correctIndex;
                let optionStyle = 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-200';

                if (showExplanation) {
                  if (isCorrectOption) {
                    optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-100 ring-1 ring-emerald-500';
                  } else if (isSelected && !isCorrectOption) {
                    optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-100';
                  } else {
                    optionStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-indigo-900/60 border-indigo-500 text-white ring-1 ring-indigo-500 shadow-md';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    disabled={showExplanation}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition flex items-start gap-3.5 ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center text-xs font-bold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm font-medium leading-relaxed flex-1">
                      <FormattedQuestionText text={option} />
                    </span>
                    {showExplanation && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {showExplanation && isSelected && !isCorrectOption && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after submit */}
            {showExplanation && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm space-y-2 animate-in fade-in">
                <div className="font-bold flex items-center gap-1.5 text-amber-400">
                  <Brain className="w-4 h-4" />
                  <span>Curriculum Rationale & Memory Anchor</span>
                </div>
                <p className="leading-relaxed text-slate-300">
                  <FormattedQuestionText text={currentQ.explanation} />
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleGraceBypass}
                className="text-xs text-slate-500 hover:text-slate-400 font-semibold underline underline-offset-4 order-2 sm:order-1"
              >
                Need urgent access? 1-Hour Grace Pass
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
                {!showExplanation ? (
                  <button
                    type="button"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <span>Check Answer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <span>
                      {currentIndex < questions.length - 1 ? 'Next Question' : 'Complete & Unlock App'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
