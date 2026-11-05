import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { MathMarkdownRenderer } from '../components/MathMarkdownRenderer';
import {
  Sparkles,
  BookOpen,
  Send,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Lock,
  ChevronRight,
  Info,
  Cpu,
  Zap,
  Activity,
  Key,
  Clock,
  History,
  Table,
  Trash2
} from 'lucide-react';
import { AIExplanationResult, ExamQuestion, AIResponseSource } from '../types';
import { QuestionDiagramViewer } from '../components/QuestionDiagramViewer';
import { FormattedQuestionText, renderRichInline } from '../components/FormattedQuestionText';
import { AIQuestionsAndExamCard } from '../components/AIQuestionsAndExamCard';
import { LockedFeaturePaywall } from '../components/LockedFeaturePaywall';
import { generateOfflineAIExplanation } from '../services/offlineAITutorService';

interface AITutorProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const AITutor: React.FC<AITutorProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const isPaid = Boolean(
    user?.role === 'admin' ||
    user?.is_premium ||
    (user?.unlocked_grades && user.unlocked_grades.length > 0)
  );
  const isStudentPaid = isPaid;

  const [questionInput, setQuestionInput] = useState('');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [currentResult, setCurrentResult] = useState<AIExplanationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [aiPracticeLoading, setAiPracticeLoading] = useState(false);
  const [generatedPracticeQuestion, setGeneratedPracticeQuestion] = useState<ExamQuestion | null>(null);
  const [practiceAnswerFeedback, setPracticeAnswerFeedback] = useState<{ selected: string; isCorrect: boolean } | null>(null);
  const [healthStats, setHealthStats] = useState<any>(null);
  const [showKeyManager, setShowKeyManager] = useState(false);
  const [newApiKey, setNewApiKey] = useState('');
  const [keyAdding, setKeyAdding] = useState(false);
  const [keyAddMsg, setKeyAddMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [history, setHistory] = useState<AIExplanationResult[]>(() => {
    try {
      const saved = localStorage.getItem(`ethiolearn_ai_history_${user?.id || 'default'}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showHistoryDrawer, setShowHistoryDrawer] = useState(false);
  const [dailyRemaining, setDailyRemaining] = useState<number>(() => {
    if (!user) return 0;
    if (user.role === 'admin') return 999999;
    const isPaidUser = Boolean(user.is_premium || (user.unlocked_grades && user.unlocked_grades.length > 0));
    if (!isPaidUser) return 0;
    const used = user.daily_ai_requests_count || 0;
    return Math.max(0, 100 - used);
  });

  const [activeMode, setActiveMode] = useState<'tutor' | 'chat'>('tutor');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{
    role: 'user' | 'assistant';
    content: string;
    sources?: AIResponseSource[];
    ai_generated_questions?: ExamQuestion[];
    related_exam_questions?: ExamQuestion[];
  }[]>(() => {
    try {
      const saved = localStorage.getItem(`ethiolearn_ai_chat_${user?.id || 'default'}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(typeof navigator !== 'undefined' ? !navigator.onLine : false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentResult && !loading) {
      const scrollDown = () => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (typeof window !== 'undefined' && resultRef.current) {
          const topPos = resultRef.current.offsetTop - 70;
          if (topPos > 0) {
            window.scrollTo({ top: topPos, behavior: 'smooth' });
          }
        }
      };
      setTimeout(scrollDown, 80);
      setTimeout(scrollDown, 300);
    }
  }, [currentResult, loading]);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleChat = async () => {
    if (!chatInput.trim() || chatLoading) return;

    const newMessage = chatInput.trim();
    setChatInput('');
    const newHistory = [...chatMessages, { role: 'user' as const, content: newMessage }];
    setChatMessages(newHistory);
    setChatLoading(true);
    setChatError(null);

    // If offline, generate instant response locally
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      try {
        const offlineData = await generateOfflineAIExplanation(
          newMessage,
          subjectFilter !== 'all' ? subjectFilter : undefined,
          user?.grade_id
        );
        const updatedHistory = [
          ...newHistory,
          {
            role: 'assistant' as const,
            content: `${offlineData.answer}\n\n${offlineData.explanation}`,
            sources: offlineData.sources,
            ai_generated_questions: offlineData.ai_generated_questions,
            related_exam_questions: offlineData.related_exam_questions
          }
        ];
        setChatMessages(updatedHistory);
        localStorage.setItem(`ethiolearn_ai_chat_${user?.id || 'default'}`, JSON.stringify(updatedHistory));
      } catch (e) {
        setChatError('Offline engine encountered an error.');
      } finally {
        setChatLoading(false);
      }
      return;
    }

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || 'usr-student-premium',
          'x-device-id': localStorage.getItem('ethiolearn_device_id') || ''
        },
        body: JSON.stringify({
          message: newMessage,
          history: chatMessages,
          subject_id: subjectFilter !== 'all' ? subjectFilter : undefined
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (typeof data.remaining === 'number') {
          setDailyRemaining(data.remaining);
        }
        const updatedHistory = [
          ...newHistory,
          {
            role: 'assistant' as const,
            content: data.message,
            sources: data.sources,
            ai_generated_questions: data.ai_generated_questions,
            related_exam_questions: data.related_exam_questions
          }
        ];
        setChatMessages(updatedHistory);
        localStorage.setItem(`ethiolearn_ai_chat_${user?.id || 'default'}`, JSON.stringify(updatedHistory));
      } else if (res.status === 429) {
        const err = await res.json().catch(() => ({}));
        setDailyRemaining(0);
        setChatError(err.message || 'Daily limit reached. Your quota resets at midnight.');
      } else {
        // Fallback to offline engine on server error
        const offlineData = await generateOfflineAIExplanation(
          newMessage,
          subjectFilter !== 'all' ? subjectFilter : undefined,
          user?.grade_id
        );
        const updatedHistory = [
          ...newHistory,
          {
            role: 'assistant' as const,
            content: `${offlineData.answer}\n\n${offlineData.explanation}`,
            sources: offlineData.sources,
            ai_generated_questions: offlineData.ai_generated_questions,
            related_exam_questions: offlineData.related_exam_questions
          }
        ];
        setChatMessages(updatedHistory);
        localStorage.setItem(`ethiolearn_ai_chat_${user?.id || 'default'}`, JSON.stringify(updatedHistory));
      }
    } catch (err) {
      // Offline fallback
      try {
        const offlineData = await generateOfflineAIExplanation(
          newMessage,
          subjectFilter !== 'all' ? subjectFilter : undefined,
          user?.grade_id
        );
        const updatedHistory = [
          ...newHistory,
          {
            role: 'assistant' as const,
            content: `${offlineData.answer}\n\n${offlineData.explanation}`,
            sources: offlineData.sources,
            ai_generated_questions: offlineData.ai_generated_questions,
            related_exam_questions: offlineData.related_exam_questions
          }
        ];
        setChatMessages(updatedHistory);
        localStorage.setItem(`ethiolearn_ai_chat_${user?.id || 'default'}`, JSON.stringify(updatedHistory));
      } catch (e) {
        setChatError('Connection lost. Please try again.');
      }
    } finally {
      setChatLoading(false);
    }
  };

  const handleClearChat = () => {
    if (window.confirm('Clear all chat messages?')) {
      setChatMessages([]);
      localStorage.removeItem(`ethiolearn_ai_chat_${user?.id || 'default'}`);
    }
  };

  const handleDeleteHistoryItem = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setHistory(prev => {
      const updated = prev.filter(item => item.id !== id);
      try {
        localStorage.setItem(`ethiolearn_ai_history_${user?.id || 'default'}`, JSON.stringify(updated));
      } catch {}
      return updated;
    });
    if (currentResult?.id === id) {
      setCurrentResult(null);
    }
  };

  const handleClearAllHistory = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (window.confirm('Are you sure you want to delete all your saved AI chat history? This cannot be undone.')) {
      setHistory([]);
      try {
        localStorage.removeItem(`ethiolearn_ai_history_${user?.id || 'default'}`);
      } catch {}
      setCurrentResult(null);
    }
  };



  useEffect(() => {
    fetch('/api/ai/health')
      .then(res => res.json())
      .then(data => setHealthStats(data))
      .catch(() => {});
  }, [currentResult]);

  const sampleQuestions = [
    { text: 'What is the formula for the discriminant and what does it tell you about quadratic roots?', subject: 'subj-math' },
    { text: "State Newton's second law of motion and explain its mathematical equation F = ma.", subject: 'subj-phys' },
    { text: 'How do acids and bases differ according to the Arrhenius and Brønsted-Lowry theories?', subject: 'subj-chem' },
    { text: 'Explain the light-dependent and Calvin cycle stages of photosynthesis in chloroplasts.', subject: 'subj-bio' },
  ];

  const handleAsk = async (queryText?: string, subjectOverride?: string) => {
    const q = queryText || questionInput;
    if (!q.trim()) return;

    const effectiveSubject = subjectOverride !== undefined ? subjectOverride : subjectFilter;
    if (subjectOverride !== undefined) {
      setSubjectFilter(subjectOverride);
    }

    if (!isStudentPaid) {
      onNavigate('payment');
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setGeneratedPracticeQuestion(null);
    setPracticeAnswerFeedback(null);

    // 1. If device is offline, run instant local curriculum engine
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      try {
        const offlineData = await generateOfflineAIExplanation(
          q,
          effectiveSubject !== 'all' ? effectiveSubject : undefined,
          user?.grade_id
        );
        setCurrentResult(offlineData);
        setHistory(prev => {
          const updated = [offlineData, ...prev.filter(item => item.id !== offlineData.id)].slice(0, 50);
          try {
            localStorage.setItem(`ethiolearn_ai_history_${user?.id || 'default'}`, JSON.stringify(updated));
          } catch {}
          return updated;
        });
        setDailyRemaining(999);
      } catch (e) {
        setErrorMessage('Failed to generate offline curriculum lesson.');
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      const res = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || 'usr-student-premium',
          'x-device-id': localStorage.getItem('ethiolearn_device_id') || ''
        },
        body: JSON.stringify({
          question: q,
          subject_id: effectiveSubject !== 'all' ? effectiveSubject : undefined
        })
      });

      if (res.ok) {
        const data: any = await res.json();
        setCurrentResult(data);
        setHistory(prev => {
          const updated = [data, ...prev.filter(item => item.id !== data.id)].slice(0, 50);
          try {
            localStorage.setItem(`ethiolearn_ai_history_${user?.id || 'default'}`, JSON.stringify(updated));
          } catch {}
          return updated;
        });
        if (typeof data.daily_requests_remaining === 'number') {
          setDailyRemaining(data.daily_requests_remaining);
        }
      } else if (res.status === 403) {
        onNavigate('payment');
      } else if (res.status === 429) {
        const errJson = await res.json().catch(() => ({}));
        setDailyRemaining(0);
        setErrorMessage(errJson.message || 'Daily limit reached. Your quota resets at midnight.');
      } else {
        // Fallback to local curriculum engine on server error
        const offlineData = await generateOfflineAIExplanation(
          q,
          effectiveSubject !== 'all' ? effectiveSubject : undefined,
          user?.grade_id
        );
        setCurrentResult(offlineData);
        setHistory(prev => {
          const updated = [offlineData, ...prev.filter(item => item.id !== offlineData.id)].slice(0, 50);
          try {
            localStorage.setItem(`ethiolearn_ai_history_${user?.id || 'default'}`, JSON.stringify(updated));
          } catch {}
          return updated;
        });
        setDailyRemaining(999);
      }
    } catch (err) {
      console.warn('Network request failed, running Client-Side Offline Curriculum AI Engine:', err);
      try {
        const offlineData = await generateOfflineAIExplanation(
          q,
          effectiveSubject !== 'all' ? effectiveSubject : undefined,
          user?.grade_id
        );
        setCurrentResult(offlineData);
        setHistory(prev => {
          const updated = [offlineData, ...prev.filter(item => item.id !== offlineData.id)].slice(0, 50);
          try {
            localStorage.setItem(`ethiolearn_ai_history_${user?.id || 'default'}`, JSON.stringify(updated));
          } catch {}
          return updated;
        });
        setDailyRemaining(999);
      } catch (offlineErr) {
        console.error('Offline AI fallback error:', offlineErr);
        setErrorMessage('Failed to generate offline curriculum lesson. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateAiPractice = async () => {
    if (!user) return;
    setAiPracticeLoading(true);
    setPracticeAnswerFeedback(null);
    try {
      const res = await fetch('/api/ai/generate-practice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user.id
        },
        body: JSON.stringify({
          grade_id: user.grade_id,
          subject_id: subjectFilter !== 'all' ? subjectFilter : undefined
        })
      });
      if (res.ok) {
        const data = await res.json();
        setGeneratedPracticeQuestion(data.question);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAiPracticeLoading(false);
    }
  };

  const handleSelectPracticeOption = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!generatedPracticeQuestion) return;
    const isCorrect = option === generatedPracticeQuestion.correct_answer;
    setPracticeAnswerFeedback({ selected: option, isCorrect });
  };

  const handleAddApiKey = async () => {
    if (!newApiKey.trim()) return;
    setKeyAdding(true);
    setKeyAddMsg(null);
    try {
      const res = await fetch('/api/ai/add-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || ''
        },
        body: JSON.stringify({ key: newApiKey.trim() })
      });
      const data = await res.json();
      if (res.ok) {
        setKeyAddMsg({ type: 'success', text: 'API Key successfully registered in active load balancer pool!' });
        setNewApiKey('');
        // refresh health
        fetch('/api/ai/health').then(r => r.json()).then(d => setHealthStats(d)).catch(() => {});
      } else {
        setKeyAddMsg({ type: 'error', text: data.error || 'Failed to add key' });
      }
    } catch (err) {
      setKeyAddMsg({ type: 'error', text: 'Network request error' });
    } finally {
      setKeyAdding(false);
    }
  };

  // Paywall guard — unpaid non-admin students see the paywall
  if (!isPaid && user?.role !== 'admin') {
    return (
      <LockedFeaturePaywall
        title="AI Tutor — Premium Feature"
        description="The EthioLearn AI Tutor is available exclusively to subscribed students. Subscribe to unlock daily AI questions, step-by-step derivations, and personalized EUEE exam coaching."
        userGrade={user?.grade || 'Grade 12'}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Tutor Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 border border-emerald-800/40 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Textbook-Grounded AI Tutor
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1">
                <Zap className="w-3 h-3 text-indigo-400" />
                High-Availability Engine (100k+ req/day)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ask Any Secondary School Concept
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              EthioLearn's AI answers your questions using verified textbook pages as primary authority, providing exact printed page numbers and linking directly to past entrance exam questions.
            </p>

            {/* Live Telemetry Pill */}
            {healthStats && (
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1 rounded-xl border border-slate-700/70">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>Engine: <strong className="text-emerald-400">{healthStats.status}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1 rounded-xl border border-slate-700/70">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Capacity: <strong className="text-indigo-300">{healthStats.pool?.estimated_daily_capacity ? `${(healthStats.pool.estimated_daily_capacity / 1000).toFixed(0)}k+ req/day` : '100k+ req/day'}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1 rounded-xl border border-slate-700/70">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Zero-Lag Cache: <strong className="text-amber-300">{healthStats.cache?.hit_rate || 'Active'}</strong></span>
                </div>

                {user?.role === 'admin' && (
                  <button
                    onClick={() => setShowKeyManager(!showKeyManager)}
                    className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-xl border border-slate-600 transition text-[11px] font-semibold"
                  >
                    <Key className="w-3 h-3 text-yellow-400" />
                    <span>Manage Key Pool ({healthStats.pool?.total_keys || 1})</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {!isStudentPaid ? (
            <div className="bg-amber-500/20 border border-amber-500/40 p-4 rounded-2xl text-xs text-amber-200 flex flex-col items-center text-center">
              <Lock className="w-5 h-5 text-amber-400 mb-1" />
              <span className="font-bold text-sm text-white">Unlock Ethiopian Curriculum AI Tutor</span>
              <span className="text-slate-300 mt-1 max-w-sm">Paid students receive dedicated daily AI queries with MoE textbook citations and step-by-step guidance.</span>
              <button
                onClick={() => onNavigate('payment')}
                className="mt-2.5 px-4 py-2 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs hover:bg-amber-400 transition shadow"
              >
                Unlock for 200 ETB
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700/60 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-400">Daily Quota:</span>
              <span className="font-bold text-white">
                {user?.role === 'admin' ? 'Unlimited (Admin)' : `${dailyRemaining} queries remaining`}
              </span>
            </div>
          )}
        </div>

        {/* Admin Key Management Accordion */}
        {showKeyManager && user?.role === 'admin' && (
          <div className="mt-6 pt-4 border-t border-slate-700/80 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Key className="w-4 h-4 text-yellow-400" />
                <span>Multi-API Key Pool Management (Scale to 100k+ Free Daily Requests)</span>
              </div>
              <button
                onClick={() => setShowKeyManager(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Add free Gemini API keys from different Google accounts to dynamically expand throughput. The load balancer automatically rotates keys, isolates rate limits, and uses zero-lag caching.
            </p>

            <div className="flex gap-2">
              <input
                type="password"
                placeholder="Paste Gemini API key (AIzaSy...)"
                value={newApiKey}
                onChange={e => setNewApiKey(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleAddApiKey}
                disabled={keyAdding || !newApiKey.trim()}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
              >
                {keyAdding ? 'Registering...' : 'Add Key to Pool'}
              </button>
            </div>

            {keyAddMsg && (
              <div className={`text-xs p-2.5 rounded-lg ${keyAddMsg.type === 'success' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-red-950/80 text-red-300 border border-red-800'}`}>
                {keyAddMsg.text}
              </div>
            )}

            {healthStats?.pool?.keys && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                {healthStats.pool.keys.map((k: any, i: number) => (
                  <div key={i} className="p-2.5 bg-slate-950/70 border border-slate-800 rounded-xl text-[11px] flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Key #{k.index} ({k.masked})</div>
                      <div className="text-[10px] text-slate-400">{k.requests} reqs • {k.avg_latency_ms}ms avg</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full font-bold text-[9px] uppercase ${k.status === 'HEALTHY' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'}`}>
                      {k.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Offline Mode Active Banner */}
      {isOffline && (
        <div className="bg-amber-950/40 border border-amber-700/60 rounded-2xl px-4 py-3 flex items-center justify-between text-xs text-amber-200 shadow-sm">
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>100% Offline Mode Active:</strong> Running local secondary curriculum knowledge engine on your device. Instant explanations, KaTeX formulas, MoE textbook citations & review questions with zero mobile data.</span>
          </span>
          <span className="px-2.5 py-1 bg-amber-900/70 border border-amber-600/50 rounded-lg text-[10px] font-mono uppercase font-bold tracking-wider text-amber-300 shrink-0">
            ⚡ Zero Data
          </span>
        </div>
      )}

      {/* Mode Tabs */}
      <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-700/60 rounded-2xl w-fit">
        <button
          onClick={() => setActiveMode('tutor')}
          className={`px-6 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeMode === 'tutor'
              ? 'bg-emerald-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Textbook AI Tutor
        </button>
        <button
          onClick={() => setActiveMode('chat')}
          className={`px-6 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeMode === 'chat'
              ? 'bg-emerald-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Direct Gemini Chat
        </button>
      </div>

      {activeMode === 'tutor' ? (
        <>
          {/* Query Bar */}
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>AI Curriculum Tutor & Problem Solver</span>
            </div>
            <button
              onClick={() => setShowHistoryDrawer(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition shadow-sm"
            >
              <History className="w-3.5 h-3.5 text-emerald-400" />
              <span>Past Questions History ({history.length})</span>
            </button>
          </div>

          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <select
                value={subjectFilter}
                onChange={e => setSubjectFilter(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 shrink-0"
              >
                <option value="all">All Curriculum Subjects</option>
                <option value="subj-math">Mathematics</option>
                <option value="subj-phys">Physics</option>
                <option value="subj-chem">Chemistry</option>
                <option value="subj-bio">Biology</option>
                <option value="subj-eng">English</option>
              </select>

              <div className="relative flex-1">
                <textarea
                  rows={3}
                  placeholder={`Ask a detailed question for ${user?.grade || 'Grade 10'} (e.g., "Explain how to solve quadratic equations using the quadratic formula with steps")...`}
                  value={questionInput}
                  onChange={e => setQuestionInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                      handleAsk();
                    }
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 pr-14 resize-none"
                />
                <button
                  onClick={() => handleAsk()}
                  disabled={loading || !questionInput.trim()}
                  className="absolute right-3 bottom-3 p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition disabled:opacity-40 shadow-md flex items-center justify-center"
                  title="Submit Question"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Suggested Quick Questions (Shown when no answer is active to maximize screen space for the solution) */}
            {!currentResult && (
              <div className="pt-2 border-t border-slate-700/60">
                <div className="text-[11px] font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>Try asking about these key secondary exam topics:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sampleQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setQuestionInput(q.text);
                        handleAsk(q.text, q.subject);
                      }}
                      className="px-2.5 py-1 bg-slate-900 hover:bg-slate-700 border border-slate-700/60 text-slate-300 rounded-lg text-xs transition text-left"
                    >
                      {q.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Error Message */}
          {errorMessage && !loading && (
            <div className="bg-red-950/40 border border-red-800/60 rounded-2xl p-6 text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-red-400 mx-auto" />
              <div className="text-sm font-semibold text-white">{errorMessage}</div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Please check your question or try one of the official textbook questions above.
              </p>
              <button
                onClick={() => handleAsk()}
                className="px-4 py-1.5 bg-red-800 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-12 text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
              <div className="text-sm font-semibold text-white">Consulting Ethiopian Curriculum Knowledge Base...</div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Retrieving textbook pages, verifying formulas, and locating relevant entrance exam questions.
              </p>
            </div>
          )}

          {/* AI Structured Answer Result */}
          {currentResult && !loading && (
            <div ref={resultRef} className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md animate-fadeIn">
              {/* ... Answer Content ... */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  {currentResult.has_textbook_reference ? (
                    <span className="px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Textbook Curriculum Citation
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      Comprehensive AI Explanation
                    </span>
                  )}

                  {currentResult.cached && (
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                      Cached
                    </span>
                  )}

                  {(currentResult as any).is_offline && (
                    <span className="px-2.5 py-1 bg-amber-950/80 text-amber-300 border border-amber-700/80 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      100% Offline Local Engine
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">
                    {new Date(currentResult.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteHistoryItem(currentResult.id)}
                    className="px-2.5 py-1 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 hover:text-rose-200 border border-rose-500/40 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
                    title="Delete this chat from history"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>Delete Chat</span>
                  </button>
                </div>
              </div>

              <div className="text-sm font-bold text-slate-300">
                Q: "{currentResult.question}"
              </div>

              <div className="relative group overflow-hidden rounded-2xl p-[1.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 shadow-xl shadow-emerald-950/20">
                <div className="bg-slate-900/95 backdrop-blur-xl rounded-[15px] p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-emerald-800/40">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-300">
                        CORE ANSWER • Direct Concept Summary
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-100 font-medium leading-relaxed">
                    <MathMarkdownRenderer content={currentResult.answer} />
                  </div>
                </div>
              </div>

              {(currentResult.diagram_svg || currentResult.image_url || (currentResult.diagrams && currentResult.diagrams.length > 0)) && (
                <div className="overflow-hidden rounded-2xl border border-emerald-500/40 bg-slate-900/95 p-3.5 shadow-xl">
                  <QuestionDiagramViewer
                    diagramSvg={currentResult.diagram_svg || currentResult.diagrams?.[0]?.svg}
                    imagePath={currentResult.image_url || currentResult.diagrams?.[0]?.image_url}
                    caption={currentResult.diagram_caption || currentResult.diagrams?.[0]?.caption || 'Authentic Scientific Illustration & Visual Diagram'}
                    title="Authentic Scientific Illustration"
                  />
                </div>
              )}

              {currentResult.explanation && (
                <div className="relative group overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-indigo-950/40 shadow-lg shadow-indigo-950/10">
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2 pb-3 border-b border-indigo-800/40">
                      <div className="p-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-slate-200">
                        DETAILED EDUCATIONAL EXPLANATION • Step-by-Step Breakdown
                      </span>
                    </div>
                    <div className="text-xs text-slate-200 leading-relaxed">
                      <MathMarkdownRenderer content={currentResult.explanation} />
                    </div>
                  </div>
                </div>
              )}

              {currentResult.study_recommendation && (
                <div className="p-4 bg-gradient-to-r from-emerald-950/50 to-slate-900 border border-emerald-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                        Curriculum Study Plan
                      </span>
                      <span className="text-xs font-semibold text-slate-200">
                        {currentResult.study_recommendation.chapter_title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      {currentResult.study_recommendation.note}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const s0 = currentResult.sources?.[0];
                      if (s0) {
                        onNavigate('library-book-page', {
                          bookId: s0.book_id,
                          pageNumber: currentResult.study_recommendation?.page_start || s0.printed_page_number,
                          highlight: currentResult.question
                        });
                      }
                    }}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap self-start sm:self-auto shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Open Study Section (Page {currentResult.study_recommendation.page_start})</span>
                  </button>
                </div>
              )}

              {currentResult.has_textbook_reference && currentResult.sources && currentResult.sources.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>Verified Textbook Citations</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentResult.sources.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl flex flex-col justify-between space-y-3"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-white line-clamp-1">{s.book_title}</span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-emerald-950 text-emerald-400 rounded font-semibold whitespace-nowrap">
                              {Math.round(s.relevance_score * 100)}% Match
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            {s.chapter_title} • Printed Page: <strong className="text-emerald-400">{s.printed_page_number}</strong>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-2 line-clamp-2 italic">
                            "{s.passage_snippet}"
                          </p>
                        </div>

                        <button
                          onClick={() => onNavigate('library-book-page', {
                            bookId: s.book_id,
                            pageNumber: s.printed_page_number,
                            highlight: currentResult.question
                          })}
                          className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Open Page {s.printed_page_number}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive AI Generated Practice Questions & Related 2018 EUEE Entrance Exam Questions */}
              <AIQuestionsAndExamCard
                aiGeneratedQuestions={currentResult.ai_generated_questions}
                relatedExamQuestions={currentResult.related_exam_questions}
                onNavigate={onNavigate}
              />

              <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  Want more targeted practice on this topic?
                </div>
                <button
                  onClick={handleGenerateAiPractice}
                  disabled={aiPracticeLoading}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{aiPracticeLoading ? 'Synthesizing...' : 'Generate Extra Practice Problem'}</span>
                </button>
              </div>

              {generatedPracticeQuestion && (
                <div className="mt-4 p-5 bg-indigo-950/40 border-2 border-indigo-500/50 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-indigo-600 text-white rounded font-bold text-[10px] tracking-wider uppercase">
                      AI PRACTICE QUESTION
                    </span>
                    <span className="text-[11px] text-indigo-300">Untimed Practice Mode</span>
                  </div>

                  <div className="text-sm font-semibold text-white">
                    <FormattedQuestionText text={generatedPracticeQuestion.question_text} />
                  </div>

                  {(generatedPracticeQuestion.diagram_svg || generatedPracticeQuestion.question_image_path) && (
                    <QuestionDiagramViewer
                      diagramSvg={generatedPracticeQuestion.diagram_svg}
                      imagePath={generatedPracticeQuestion.question_image_path}
                      caption={generatedPracticeQuestion.diagram_caption}
                      questionNumber={generatedPracticeQuestion.question_number}
                    />
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { opt: 'A' as const, text: generatedPracticeQuestion.option_a },
                      { opt: 'B' as const, text: generatedPracticeQuestion.option_b },
                      { opt: 'C' as const, text: generatedPracticeQuestion.option_c },
                      { opt: 'D' as const, text: generatedPracticeQuestion.option_d },
                    ].map(item => {
                      const isSelected = practiceAnswerFeedback?.selected === item.opt;
                      const isCorrectAnswer = generatedPracticeQuestion.correct_answer === item.opt;
                      let btnStyle = 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800';

                      if (practiceAnswerFeedback) {
                        if (isSelected && practiceAnswerFeedback.isCorrect) {
                          btnStyle = 'bg-emerald-950 border-emerald-500 text-emerald-300 font-bold';
                        } else if (isSelected && !practiceAnswerFeedback.isCorrect) {
                          btnStyle = 'bg-red-950 border-red-500 text-red-300 font-bold';
                        } else if (isCorrectAnswer) {
                          btnStyle = 'bg-emerald-950/60 border-emerald-600 text-emerald-400';
                        }
                      }

                      return (
                        <button
                          key={item.opt}
                          onClick={() => handleSelectPracticeOption(item.opt)}
                          disabled={!!practiceAnswerFeedback}
                          className={`p-3 rounded-xl border text-xs text-left transition flex items-start gap-2.5 ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-[11px] shrink-0">
                            {item.opt}
                          </span>
                          <span>{renderRichInline(item.text || '')}</span>
                        </button>
                      );
                    })}
                  </div>

                  {practiceAnswerFeedback && (
                    <div className={`p-4 rounded-xl text-xs space-y-2 ${
                      practiceAnswerFeedback.isCorrect
                        ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-200'
                        : 'bg-red-950/80 border border-red-500/60 text-red-200'
                    }`}>
                      <div className="font-bold flex items-center gap-1.5 text-sm">
                        {practiceAnswerFeedback.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>Correct! Well done.</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-4 h-4 text-red-400" />
                            <span>Incorrect. The correct answer is ({generatedPracticeQuestion.correct_answer}).</span>
                          </>
                        )}
                      </div>
                      <div className="text-slate-300 leading-relaxed">
                        <MathMarkdownRenderer content={generatedPracticeQuestion.explanation} />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        /* Direct Gemini Chat UI */
        <div className="flex flex-col h-[600px] bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
          {/* Chat Header */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-sm text-white">EthioLearn Direct AI Chat</span>
            </div>
            <button
              onClick={handleClearChat}
              className="text-xs text-rose-400 hover:text-rose-300 px-2 py-1 bg-rose-500/10 rounded-lg transition"
            >
              Clear Conversation
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {chatMessages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8">
                <div className="p-4 bg-emerald-500/10 rounded-full">
                  <Sparkles className="w-12 h-12 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold">Hello! I am your AI Study Assistant.</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  You can ask me anything about your school subjects, complex formulas, or even career advice for Ethiopian students!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
                  {[
                    "How do I balance chemical equations?",
                    "Explain the concept of work in Physics.",
                    "Tips for the EUEE English exam.",
                    "Summarize Ethiopian History Grade 12."
                  ].map(q => (
                    <button
                      key={q}
                      onClick={() => {
                        setChatInput(q);
                      }}
                      className="p-3 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs text-slate-300 transition text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[94%] sm:max-w-[85%] rounded-2xl p-4 text-sm shadow-md ${
                      msg.role === 'user'
                        ? 'bg-emerald-600 text-white rounded-tr-none'
                        : 'bg-slate-900 border border-slate-700 text-slate-100 rounded-tl-none'
                    }`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="flex items-center gap-1.5 mb-2 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        <span>EthioLearn AI Tutor • Real Gemini API</span>
                      </div>
                    )}
                    <MathMarkdownRenderer content={msg.content} />
                    {msg.role === 'assistant' && msg.sources && msg.sources.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-slate-700/80 space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Verified Textbook Reference</span>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {msg.sources.slice(0, 2).map((s, sIdx) => (
                            <div key={sIdx} className="p-3 bg-slate-950/60 border border-slate-700/80 rounded-xl space-y-2 text-left">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-white line-clamp-1">{s.book_title}</span>
                                <span className="text-[10px] px-1.5 py-0.5 bg-emerald-950 text-emerald-400 rounded font-semibold whitespace-nowrap">
                                  {Math.round(s.relevance_score * 100)}% Match
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-400">
                                {s.chapter_title} • Printed Page: <strong className="text-emerald-400">{s.printed_page_number}</strong>
                              </div>
                              <p className="text-[11px] text-slate-300 italic line-clamp-2">
                                "{s.passage_snippet}"
                              </p>
                              <button
                                onClick={() => onNavigate('library-book-page', {
                                  bookId: s.book_id,
                                  pageNumber: s.printed_page_number
                                })}
                                className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm mt-1"
                              >
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>Open Page {s.printed_page_number}</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {msg.role === 'assistant' && (
                      <AIQuestionsAndExamCard
                        aiGeneratedQuestions={msg.ai_generated_questions}
                        relatedExamQuestions={msg.related_exam_questions}
                        onNavigate={onNavigate}
                        compact={true}
                      />
                    )}
                  </div>
                </div>
              ))
            )}
            {chatLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900 border border-slate-700 rounded-2xl rounded-tl-none p-4 text-sm flex items-center gap-3">
                  <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
                  <span className="text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            {chatError && (
              <div className="p-3 bg-red-950/50 border border-red-800/80 text-red-200 text-xs rounded-xl flex items-center justify-between gap-3 shadow-lg">
                <span className="flex-1 text-left">{chatError}</span>
                <button
                  onClick={() => {
                    const lastUserMsg = [...chatMessages].reverse().find(m => m.role === 'user');
                    if (lastUserMsg) {
                      setChatInput(lastUserMsg.content);
                    }
                    setChatError(null);
                  }}
                  className="px-2.5 py-1 bg-red-800 hover:bg-red-700 text-white rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer"
                >
                  Retry Prompt
                </button>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask your assistant anything..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleChat()}
                disabled={chatLoading}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 pr-12"
              />
              <button
                onClick={handleChat}
                disabled={chatLoading || !chatInput.trim()}
                className="absolute right-2 top-1.5 p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History Drawer Modal */}
      {showHistoryDrawer && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm text-white">Your Past AI Tutor Questions & Answers</span>
                <span className="text-xs text-slate-400">({history.length})</span>
              </div>
              <div className="flex items-center gap-2">
                {history.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAllHistory}
                    className="text-rose-400 hover:text-rose-300 text-xs px-2.5 py-1.5 bg-rose-950/40 hover:bg-rose-950/70 border border-rose-800/60 rounded-lg font-semibold flex items-center gap-1 transition"
                    title="Clear entire chat history"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                )}
                <button
                  onClick={() => setShowHistoryDrawer(false)}
                  className="text-slate-400 hover:text-white text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition"
                >
                  ✕ Close
                </button>
              </div>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {history.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  No past questions saved yet. Ask a question to build your revision history!
                </div>
              ) : (
                history.map(item => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setCurrentResult(item);
                      setShowHistoryDrawer(false);
                    }}
                    className="p-3.5 bg-slate-800/80 hover:bg-slate-800/95 border border-slate-700/70 hover:border-slate-600 rounded-xl cursor-pointer transition space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>{new Date(item.created_at).toLocaleString()}</span>
                      <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded">
                        {item.has_textbook_reference ? 'Textbook Cited' : 'AI Explanation'}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white line-clamp-2">
                      Q: "{item.question}"
                    </div>
                    <div className="text-xs text-slate-300 line-clamp-2">
                      A: {item.answer}
                    </div>

                    {/* Delete Chat Button under History Item */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-700/50 mt-1">
                      <span className="text-[11px] text-emerald-400 group-hover:text-emerald-300 font-medium flex items-center gap-1">
                        Open Conversation <ChevronRight className="w-3 h-3" />
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleDeleteHistoryItem(item.id, e)}
                        className="px-2.5 py-1 bg-rose-500/15 hover:bg-rose-500/30 text-rose-300 hover:text-rose-100 border border-rose-500/40 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
                        title="Delete this chat from history"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                        <span>Delete Chat</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
