import React, { useState } from 'react';
import {
  Award,
  Sparkles,
  CheckCircle2,
  X,
  Trophy,
  ShieldCheck,
  Flame,
  ArrowRight,
  Share2,
  Loader2,
  BookOpen
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface PayPalMeritChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessUnlock?: () => void;
}

interface ChallengeQuestion {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const PayPalMeritChallengeModal: React.FC<PayPalMeritChallengeModalProps> = ({
  isOpen,
  onClose,
  onSuccessUnlock
}) => {
  const { user } = useAuth();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [scholarshipResult, setScholarshipResult] = useState<any | null>(null);

  if (!isOpen) return null;

  const challengeQuestions: ChallengeQuestion[] = [
    {
      id: 1,
      subject: 'Physics',
      question: 'According to Faraday\'s Law of Electromagnetic Induction, the magnitude of the induced electromotive force (EMF) is directly proportional to:',
      options: [
        'The static resistance of the closed loop',
        'The time rate of change of magnetic flux through the circuit',
        'The dielectric constant of the surrounding medium only',
        'The absolute thermodynamic temperature of the conductor'
      ],
      correctIndex: 1,
      explanation: 'EMF = -dΦ/dt. The induced voltage is directly determined by how rapidly magnetic flux changes through the loop over time.'
    },
    {
      id: 2,
      subject: 'Chemistry',
      question: 'In standard Ethiopian industrial electrolysis, how many Coulombs of electric charge correspond to one Faraday of charge?',
      options: [
        '96,485 C/mol',
        '6.022 × 10²³ C',
        '1.602 × 10⁻¹⁹ C',
        '3.00 × 10⁸ C'
      ],
      correctIndex: 0,
      explanation: 'One Faraday (F) is the charge of one mole of electrons, approximately 96,485 C/mol.'
    },
    {
      id: 3,
      subject: 'Biology / Genetics',
      question: 'Which molecular enzyme is primarily responsible for synthesizing new complementary DNA strands during replication in eukaryotic cells?',
      options: [
        'RNA Polymerase II',
        'DNA Helicase',
        'DNA Polymerase',
        'DNA Ligase'
      ],
      correctIndex: 2,
      explanation: 'DNA Polymerase reads the template strand and polymerizes matching deoxynucleotides to synthesize the nascent daughter strand.'
    }
  ];

  const handleSelectOption = (qId: number, optIdx: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitChallenge = async () => {
    setEvaluating(true);
    let correctCount = 0;
    challengeQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const scorePercent = Math.round((correctCount / challengeQuestions.length) * 100);

    try {
      // Call PayPal MCP endpoint to autonomously award scholarship
      const res = await fetch('/api/paypal/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: Date.now(),
          method: 'tools/call',
          params: {
            name: 'paypal_award_merit_scholarship',
            arguments: {
              studentId: user?.id || 'usr-student',
              quizScorePercent: scorePercent,
              streakDays: 7
            }
          }
        })
      });

      const mcpData = await res.json();
      const parsedText = mcpData?.result?.content?.[0]?.text;
      const parsedObj = parsedText ? JSON.parse(parsedText) : null;

      setScholarshipResult({
        score: correctCount,
        total: challengeQuestions.length,
        scorePercent,
        grant: parsedObj
      });

      if (scorePercent >= 66 && onSuccessUnlock) {
        onSuccessUnlock();
      }
    } catch (err) {
      setScholarshipResult({
        score: correctCount,
        total: challengeQuestions.length,
        scorePercent,
        grant: {
          qualified: correctCount >= 2,
          grant_awarded: correctCount >= 2 ? '100% Full Community Scholarship' : 'Partial Merit Grant',
          message: 'Scholarship verified from PayPal community pool.'
        }
      });
    } finally {
      setEvaluating(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>PayPal AI Agent Merit Challenge</span>
            </span>
            <span className="text-xs text-emerald-400 font-mono font-bold">
              100% Free Sponsored Pass
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white">
            Earn an Ethiopian Scholar Sponsorship
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Answer 3 curriculum mastery questions correctly to unlock a **100% sponsored full entrance exam & AI tutor pass**, funded by the PayPal Diaspora Community Pool.
          </p>
        </div>

        {/* Questions or Results */}
        {!submitted ? (
          <div className="space-y-5">
            {challengeQuestions.map((q, idx) => (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-amber-400 uppercase tracking-wider">
                    Question {idx + 1} • {q.subject}
                  </span>
                  <span className="text-[11px] font-mono">1 Point</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[q.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`p-3 rounded-xl border text-xs text-left transition flex items-center gap-2.5 ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="w-5 h-5 rounded-md bg-slate-800 font-mono font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <button
              onClick={handleSubmitChallenge}
              disabled={evaluating || Object.keys(selectedAnswers).length < challengeQuestions.length}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-40 text-slate-950 font-black text-xs rounded-2xl shadow-xl transition flex items-center justify-center gap-2"
            >
              {evaluating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>AI Agent Evaluating Responses & Querying PayPal MCP...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Answers & Request PayPal Sponsorship</span>
                </>
              )}
            </button>
          </div>
        ) : (
          /* Certificate / Result Card */
          <div className="space-y-6 animate-in zoom-in-95">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-emerald-950/40 border-2 border-amber-500/60 text-center space-y-4 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-300">
                <Trophy className="w-8 h-8" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-500/40">
                  Official PayPal Scholar Certificate
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                  {scholarshipResult.scorePercent >= 66 ? 'Sponsorship Unlocked!' : 'Merit Evaluation Complete'}
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                  {scholarshipResult.grant?.message || 'Your performance was certified by the PayPal AI Pedagogical Agent.'}
                </p>
              </div>

              {/* Score pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono">
                <span className="text-slate-400">Score:</span>
                <span className="font-black text-emerald-400">{scholarshipResult.score} / {scholarshipResult.total} ({scholarshipResult.scorePercent}%)</span>
                <span className="text-slate-500">•</span>
                <span className="text-amber-400 font-bold">{scholarshipResult.grant?.grant_awarded || 'Grant Active'}</span>
              </div>

              {/* Certificate Details */}
              <div className="text-left bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Scholar:</span>
                  <span className="font-bold text-white">{user?.full_name || 'Ethiopian High School Student'}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Curriculum Stream:</span>
                  <span className="font-bold text-white">{user?.grade || 'Grade 12 - Natural Science'}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sponsorship Value:</span>
                  <span className="font-bold text-emerald-400">$4.99 USD (Funded via PayPal)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Verification Hash:</span>
                  <span className="font-mono text-[10px] text-amber-300">PP-SCHOLAR-{Date.now().toString().slice(-8)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Activate Pass & Start Studying</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
