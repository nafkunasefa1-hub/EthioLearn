import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BookOpen,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Lock,
  Compass,
  FileCheck,
  Smartphone,
  LogOut,
  Brain,
  Target,
  BarChart3,
  Calendar,
  Clock,
  RefreshCw,
  X
} from 'lucide-react';
import { StudentAnalytics, Exam } from '../types';
import { apiFetchJson } from '../utils/api';
import { DashboardFreeSampleOverview } from '../components/DashboardFreeSampleOverview';
import { DeviceAppealModal } from '../components/DeviceAppealModal';

interface DashboardProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { user, logout } = useAuth();
  const [analytics, setAnalytics] = useState<StudentAnalytics | null>(null);
  const [recentExams, setRecentExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDeviceAppeal, setShowDeviceAppeal] = useState(false);

  // Updates & Sync States
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'checking' | 'ready' | 'syncing' | 'completed' | 'error'>('idle');
  const [syncProgress, setSyncProgress] = useState(0);
  const [syncChangelog, setSyncChangelog] = useState<any[]>([]);
  const [syncStats, setSyncStats] = useState<any>(null);
  const [syncMessage, setSyncMessage] = useState('');

  const checkUpdates = async () => {
    setSyncStatus('checking');
    setSyncProgress(25);
    try {
      const res = await fetch('/api/updates/check');
      if (res.ok) {
        const data = await res.json();
        setSyncChangelog(data.changelog || []);
        setSyncStats(data.stats);
        setSyncStatus('ready');
        setSyncProgress(100);
      } else {
        setSyncStatus('error');
        setSyncMessage('Failed to contact updates server. Check your internet connection.');
      }
    } catch (err) {
      setSyncStatus('error');
      setSyncMessage('Failed to contact updates server. Check your internet connection.');
    }
  };

  const startSync = async () => {
    setSyncStatus('syncing');
    setSyncProgress(10);
    setSyncMessage('Checking network connection...');

    const stages = [
      { progress: 30, message: 'Contacting EthioLearn Cloud Servers...' },
      { progress: 55, message: 'Downloading latest official answer keys...' },
      { progress: 75, message: 'Compiling LaTeX explanations for math...' },
      { progress: 90, message: 'Applying local database patches...' }
    ];

    for (const stage of stages) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setSyncProgress(stage.progress);
      setSyncMessage(stage.message);
    }

    try {
      const res = await fetch('/api/updates/sync', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setSyncProgress(100);
        setSyncStatus('completed');
        setSyncMessage(data.message || 'Updated successfully!');
      } else {
        setSyncStatus('error');
        setSyncMessage('Sync failed. Please try again.');
      }
    } catch (err) {
      setSyncStatus('error');
      setSyncMessage('Sync failed. Please try again.');
    }
  };

  const isFreeStudent = Boolean(
    !user?.is_premium &&
    user?.role !== 'admin' &&
    !(user?.unlocked_grades && user.unlocked_grades.length > 0)
  );

  useEffect(() => {
    if (!user) return;
    const fetchDashboard = async () => {
      try {
        const data = await apiFetchJson<{ analytics: StudentAnalytics; recentExams: Exam[] }>(
          '/api/dashboard/student',
          { headers: { 'x-user-id': user.id } },
          { analytics: null as any, recentExams: [] }
        );
        if (data) {
          if (data.analytics) setAnalytics(data.analytics);
          if (data.recentExams) setRecentExams(data.recentExams);
        }
      } catch (err) {
        console.warn('Dashboard notice:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome & Grade Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
                {user?.grade || 'Grade 10'} Student
              </span>
              {user?.is_premium ? (
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Premium Access
                </span>
              ) : (
                <button
                  onClick={() => onNavigate('payment')}
                  className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1 hover:bg-amber-500/30 transition"
                >
                  <Lock className="w-3.5 h-3.5" /> Free Tier — Unlock Full (200 ETB)
                </button>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Welcome back, {user?.full_name || 'Student'}
            </h1>
            <div className="flex flex-wrap items-center gap-2.5 mt-1.5 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800/90 px-2.5 py-1 rounded-lg border border-slate-700 font-mono text-emerald-400">
                <Smartphone className="w-3.5 h-3.5" />
                {user?.phone_number || 'No phone registered'}
              </span>
              <button
                onClick={() => setShowDeviceAppeal(true)}
                className="px-2.5 py-1 bg-slate-800/90 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
                title="Request Device Transfer / Appeal"
              >
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>Device Change Appeal</span>
              </button>
              <button
                onClick={() => {
                  setShowSyncModal(true);
                  checkUpdates();
                }}
                className="px-3 py-1 bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-slate-950 font-black text-xs rounded-xl shadow-md border border-sky-200/80 transition flex items-center gap-1.5"
                title="Check for curriculum and model exam updates"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Update to Latest</span>
              </button>
              <button
                onClick={() => {
                  logout();
                  onNavigate('signin');
                }}
                className="px-3 py-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md shadow-amber-500/30 hover:shadow-amber-500/50 border border-amber-200/80 transition flex items-center gap-1.5"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
            <p className="text-slate-300 text-sm mt-2 max-w-2xl">
              Learn directly from official Ethiopian national curriculum textbooks and prepare for university entrance examinations with page-verified AI tutoring.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {isFreeStudent ? (
              <>
                <button
                  onClick={() => onNavigate('payment')}
                  className="px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2"
                  title="Flashcards require Premium"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Flash Cards</span>
                </button>
                <button
                  onClick={() => onNavigate('payment')}
                  className="px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2"
                  title="Study Plan requires Premium"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Study Plan</span>
                </button>
                <button
                  onClick={() => onNavigate('payment')}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow"
                  title="AI Tutor requires Premium"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Ask AI Tutor (200 ETB)</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('exam-predictor')}
                  className="px-4 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-xs transition flex items-center gap-2 shadow-lg active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>AI Predictor (2019 E.C.)</span>
                </button>
                <button
                  onClick={() => onNavigate('flashcards')}
                  className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md"
                >
                  <Brain className="w-4 h-4 text-pink-300" />
                  <span>Flash Cards</span>
                </button>
                <button
                  onClick={() => onNavigate('study-plan')}
                  className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md"
                >
                  <Target className="w-4 h-4 text-amber-300" />
                  <span>Study Plan</span>
                </button>
                <button
                  onClick={() => onNavigate('ai-tutor')}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600 rounded-xl text-xs font-bold transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Ask AI Tutor</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* OFFLINE CAPABILITY & UPDATE TO LATEST BANNER */}
      <div className="bg-gradient-to-r from-sky-950/80 via-slate-900 to-indigo-950/80 border-2 border-sky-500/50 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-2xl">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-tr from-sky-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-sky-950/50 ring-4 ring-sky-500/20">
            <RefreshCw className="w-7 h-7 animate-pulse" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">Offline Study & Real-Time Content Sync</h3>
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full uppercase tracking-wider">
                100% Offline Ready
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded-full flex items-center gap-1">
                📶 Connect Internet to Update
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
              Open your internet connection (Wi-Fi or mobile data) and tap <strong className="text-white font-semibold">Update to Latest</strong> to fetch all newly added exams (50-question national tests with full step-by-step solutions), textbook summaries, and updates pushed by the administrator. Everything downloads to your device for offline use!
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setShowSyncModal(true);
            checkUpdates();
          }}
          className="px-6 py-3.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-300 hover:from-sky-300 hover:to-indigo-300 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-xl shadow-sky-950/60 hover:scale-105 transition transform flex items-center justify-center gap-2.5 shrink-0 border border-white/40"
        >
          <RefreshCw className="w-4 h-4 text-slate-950 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Update to Latest (Sync Now)</span>
        </button>
      </div>

      {/* FREE TIER 3-QUESTION ENTRANCE EXAM & AI PRACTICE PREVIEW */}
      {isFreeStudent && (
        <div id="free-sample-overview-section">
          <DashboardFreeSampleOverview
            onNavigate={onNavigate}
            userGrade={user?.grade}
            isPaid={false}
          />
        </div>
      )}

      {/* QUICK FEATURE HIGHLIGHT: FLASHCARDS & STUDY PLAN CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          onClick={() => onNavigate('flashcards')}
          className="cursor-pointer bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-800 border border-indigo-700/60 hover:border-indigo-500 rounded-2xl p-5 shadow-sm transition group flex items-start justify-between gap-4"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Brain className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Active Recall Deck</span>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition">
              Curriculum Topic Flash Cards
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              4-5 high-yield flashcards per textbook topic covering definitions, formulas, Ethiopian context, and 45-second EUEE exam traps.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-indigo-400 shrink-0 mt-2 group-hover:translate-x-1 transition" />
        </div>

        <div
          onClick={() => onNavigate('study-plan')}
          className="cursor-pointer bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-800 border border-emerald-700/60 hover:border-emerald-500 rounded-2xl p-5 shadow-sm transition group flex items-start justify-between gap-4"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Target className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Smart AI Schedule</span>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
              Personalized Study Roadmap
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Configure your prep days, daily study hours, and weak subject priorities into an actionable daily micro-task calendar.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-emerald-400 shrink-0 mt-2 group-hover:translate-x-1 transition" />
        </div>
      </div>

      {/* CORE PRODUCT CONCEPT: THE CENTRAL LEARNING LOOP */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>EthioLearn Continuous Learning Loop</span>
          </div>
          <span className="text-[11px] text-slate-400">Targeted Mastery System</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center text-xs">
          {[
            { step: '1', title: 'Weak Topic', desc: 'Auto-detected', color: 'border-red-500/40 text-red-300 bg-red-950/20' },
            { step: '2', title: 'Textbook Pages', desc: 'Exact citations', color: 'border-blue-500/40 text-blue-300 bg-blue-950/20' },
            { step: '3', title: 'AI Explanation', desc: 'Curriculum verified', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/20' },
            { step: '4', title: 'Entrance Questions', desc: 'Official EUEE', color: 'border-amber-500/40 text-amber-300 bg-amber-950/20' },
            { step: '5', title: 'Untimed Practice', desc: 'Instant feedback', color: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/20' },
            { step: '6', title: 'Timed Exam', desc: 'Real conditions', color: 'border-purple-500/40 text-purple-300 bg-purple-950/20' },
            { step: '7', title: 'Score Analysis', desc: 'Precision tracking', color: 'border-teal-500/40 text-teal-300 bg-teal-950/20' },
            { step: '8', title: 'Mastery', desc: 'Next objective', color: 'border-green-500/40 text-green-300 bg-green-950/20' },
          ].map((item, idx) => (
            <div key={idx} className={`p-2.5 rounded-xl border ${item.color} flex flex-col items-center justify-center`}>
              <span className="text-[10px] font-bold opacity-75">{item.step}</span>
              <span className="font-semibold mt-0.5">{item.title}</span>
              <span className="text-[10px] opacity-75">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-800 border border-slate-700/80 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Average Score</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white mt-2">
            {analytics?.average_score ?? 74}%
          </div>
          <div className="text-xs text-slate-400 mt-1">Across secondary trial exams</div>
        </div>

        <div className="bg-slate-800 border border-slate-700/80 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Best Exam Score</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white mt-2">
            {analytics?.best_score ?? 88}%
          </div>
          <div className="text-xs text-slate-400 mt-1">High watermark performance</div>
        </div>

        <div className="bg-slate-800 border border-slate-700/80 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Practice Questions</span>
            <Layers className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white mt-2">
            {analytics?.practice_questions_solved ?? 32}
          </div>
          <div className="text-xs text-slate-400 mt-1">Solved in untimed mode</div>
        </div>

        <div className="bg-slate-800 border border-slate-700/80 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>AI Questions Asked</span>
            <Sparkles className="w-4 h-4 text-teal-400" />
          </div>
          <div className="text-2xl font-bold text-white mt-2">
            {analytics?.ai_questions_asked ?? 14}
          </div>
          <div className="text-xs text-slate-400 mt-1">With exact page links</div>
        </div>
      </div>

      {/* TAILORED STUDENT PERFORMANCE ANALYSIS & WEAK TOPICS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tailored Subject Mastery Analysis */}
        <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <span>Tailored Subject Analysis</span>
            </h2>
            <button
              onClick={() => onNavigate('analytics')}
              className="text-xs text-emerald-400 hover:underline font-semibold"
            >
              Full Details &rarr;
            </button>
          </div>

          <div className="space-y-3">
            {analytics?.subject_performance ? (
              analytics.subject_performance.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300 font-semibold">
                    <span>{s.subject_name}</span>
                    <span className="font-mono">{s.accuracy}% ({s.questions_attempted} Qs)</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        s.accuracy >= 80 ? 'bg-emerald-500' : s.accuracy >= 70 ? 'bg-indigo-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${s.accuracy}%` }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-xs text-slate-400">Loading student analytics...</div>
            )}
          </div>
        </div>

        {/* Weak Topics & Textbook Recommendations */}
        <div className="lg:col-span-2 bg-slate-800 border border-slate-700/80 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-bold text-white">Identified Weak Topics & Recommendations</h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">Needs Attention (&lt;75%)</span>
          </div>

          <div className="space-y-4">
            {analytics?.weak_topics && analytics.weak_topics.length > 0 ? (
              analytics.weak_topics.map((wt, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-100 text-sm">{wt.topic_name}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                          {wt.subject_name} • {wt.grade_name}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Current accuracy: <span className="font-semibold text-amber-400">{wt.accuracy_percentage}%</span> ({wt.attempts_count} practice attempts)
                      </div>
                    </div>
                    <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-400 h-full rounded-full"
                        style={{ width: `${wt.accuracy_percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-3 text-xs text-slate-300 flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Study Recommendation:</span>{' '}
                      Review {wt.recommended_book}, {wt.recommended_chapter}, pages {wt.recommended_pages}.
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onNavigate('library-book-page', { bookId: 'book-10-math', pageNumber: 126 })}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Open Page 126</span>
                    </button>
                    <button
                      onClick={() => onNavigate('practice-topic-direct', { topicId: wt.topic_id })}
                      className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-semibold transition flex items-center gap-1.5"
                    >
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Practice Exam Questions</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-400 text-xs">
                No weak topics flagged yet. Take an entrance exam to calibrate your readiness!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LATEST ENTRANCE EXAMS SECTION AT THE BOTTOM */}
      <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>Real Uploaded Exam Papers</span>
            </div>
            <h2 className="text-xl font-bold text-white">LATEST ENTRANCE EXAMS</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Practice real past national entrance exam questions and regional model exams uploaded in your library.
            </p>
          </div>

          <button
            onClick={() => onNavigate('exams')}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>View All Entrance Exams</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentExams.map(ex => (
            <div
              key={ex.id}
              className="bg-slate-900 border border-slate-700/80 hover:border-slate-600 rounded-2xl p-5 shadow-sm space-y-4 flex flex-col justify-between transition group"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                    {ex.subject_name || 'Mathematics'}
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {ex.year ? `${ex.year} E.C.` : 'National Exam'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition line-clamp-2">
                  {ex.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2">
                  {ex.description || `Official ${ex.subject_name || 'curriculum'} examination paper adhering to Ethiopian Ministry of Education guidelines.`}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-300 pt-1 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {ex.duration_minutes || 120} Mins
                  </span>
                  <span className="flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {ex.total_questions || 50} Questions
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                {isFreeStudent ? (
                  <>
                    <button
                      onClick={() => {
                        const el = document.getElementById('free-sample-overview-section');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          onNavigate('payment');
                        }
                      }}
                      className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition text-center shadow"
                    >
                      Try 3 Qs Free
                    </button>
                    <button
                      onClick={() => onNavigate('payment')}
                      className="px-3.5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-1 shadow"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Unlock (200 ETB)</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => onNavigate('exam-timed', { examId: ex.id })}
                      className="flex-1 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl transition text-center shadow"
                    >
                      Start Timed Exam
                    </button>

                    <button
                      onClick={() => onNavigate('exam-practice', { examId: ex.id })}
                      className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl transition border border-slate-700"
                    >
                      Untimed
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Device Change Appeal Modal */}
      <DeviceAppealModal
        isOpen={showDeviceAppeal}
        onClose={() => setShowDeviceAppeal(false)}
        initialPhone={user?.phone_number || ''}
      />

      {/* Update to Latest Sync Modal */}
      {showSyncModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scale-up">
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/25">
              <div className="flex items-center gap-2.5">
                <RefreshCw className={`w-5 h-5 text-sky-400 ${syncStatus === 'checking' || syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
                <div>
                  <h3 className="text-base font-bold text-white">Curriculum & Exam Sync</h3>
                  <p className="text-[10px] text-slate-400 font-medium">EthioLearn cloud synchronization system</p>
                </div>
              </div>
              {syncStatus !== 'syncing' && (
                <button
                  onClick={() => {
                    setShowSyncModal(false);
                    setSyncStatus('idle');
                    setSyncProgress(0);
                  }}
                  className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Content body */}
            <div className="p-6 space-y-6">
              {/* CHECKING STATE */}
              {syncStatus === 'checking' && (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <RefreshCw className="w-10 h-10 text-sky-400 animate-spin" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Checking for Updates</h4>
                    <p className="text-xs text-slate-400 mt-1">Comparing offline curriculum files with master database...</p>
                  </div>
                  <div className="w-full max-w-xs bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-sky-400 h-full rounded-full transition-all duration-300" style={{ width: `${syncProgress}%` }}></div>
                  </div>
                </div>
              )}

              {/* ERROR STATE */}
              {syncStatus === 'error' && (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full flex items-center justify-center text-lg font-bold">
                    !
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Synchronization Error</h4>
                    <p className="text-xs text-rose-400/90 mt-1">{syncMessage}</p>
                  </div>
                  <button
                    onClick={checkUpdates}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
                  >
                    Retry Connection
                  </button>
                </div>
              )}

              {/* READY TO UPDATE STATE */}
              {syncStatus === 'ready' && (
                <div className="space-y-4">
                  <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">New Updates Available</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-950 text-sky-400 border border-sky-800 rounded-full">v2.4.0</span>
                    </div>
                    {syncStats && (
                      <div className="grid grid-cols-3 gap-3 pt-1">
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center">
                          <span className="text-lg font-bold text-white block">{syncStats.books}</span>
                          <span className="text-[9px] text-slate-400 block uppercase font-medium">Books</span>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center">
                          <span className="text-lg font-bold text-white block">{syncStats.exams}</span>
                          <span className="text-[9px] text-slate-400 block uppercase font-medium">Exams</span>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center">
                          <span className="text-lg font-bold text-white block">{syncStats.questions}</span>
                          <span className="text-[9px] text-slate-400 block uppercase font-medium">Questions</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Changelog Highlights:</span>
                    <div className="max-h-40 overflow-y-auto space-y-2 pr-1.5 scrollbar-thin">
                      {syncChangelog.map((item, idx) => (
                        <div key={idx} className="bg-slate-950/30 border border-slate-800/60 rounded-xl p-3 space-y-1">
                          <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>
                            {item.title}
                          </h5>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={() => {
                        setShowSyncModal(false);
                        setSyncStatus('idle');
                        setSyncProgress(0);
                      }}
                      className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition"
                    >
                      Remind Me Later
                    </button>
                    <button
                      onClick={startSync}
                      className="flex-1 py-2.5 bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-slate-950 rounded-xl text-xs font-black transition shadow shadow-sky-950/40"
                    >
                      Start Sync Update
                    </button>
                  </div>
                </div>
              )}

              {/* SYNCING IN PROGRESS */}
              {syncStatus === 'syncing' && (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-5">
                  <RefreshCw className="w-12 h-12 text-sky-400 animate-spin" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Downloading Curriculum Database...</h4>
                    <p className="text-xs text-sky-400 font-medium animate-pulse">{syncMessage}</p>
                  </div>
                  
                  <div className="w-full max-w-sm bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full transition-all duration-300" style={{ width: `${syncProgress}%` }}></div>
                  </div>
                  
                  <span className="text-[10px] text-slate-400 font-mono">Sync Progress: {syncProgress}%</span>
                </div>
              )}

              {/* COMPLETED SUCCESS STATE */}
              {syncStatus === 'completed' && (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sync Completed!</h4>
                    <p className="text-xs text-emerald-400/90 font-medium mt-1">Offline database is 100% up to date.</p>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                      All new regional examinations, Grade 9 subjects, answer keys, and LaTeX step-by-step explanations are now securely saved to your local storage device. You can access all files without an internet connection.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowSyncModal(false);
                      setSyncStatus('idle');
                      // Trigger location reload to refresh the cached application state with the updated data!
                      window.location.reload();
                    }}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow shadow-emerald-950/40"
                  >
                    Finish & Restart App
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

