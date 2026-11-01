import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BarChart3,
  TrendingUp,
  Award,
  BookOpen,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { StudentAnalytics, WeakTopic } from '../types';

interface AnalyticsPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<StudentAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchAnalytics = async () => {
      try {
        const res = await fetch('/api/dashboard/student', {
          headers: { 'x-user-id': user.id }
        });
        if (res.ok) {
          const data = await res.json();
          setAnalytics(data.analytics);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
          <BarChart3 className="w-4 h-4" />
          <span>Curriculum Mastery Analytics</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Performance & Readiness Insights
        </h1>
        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
          Track syllabus topic mastery, examination results, and targeted textbook review recommendations to maximize your EUEE score.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-slate-400 font-semibold">Overall Exam Average</div>
          <div className="text-3xl font-bold text-white mt-2">
            {analytics?.average_score ?? 74}%
          </div>
          <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +6% from last week
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-slate-400 font-semibold">High Score</div>
          <div className="text-3xl font-bold text-white mt-2">
            {analytics?.best_score ?? 88}%
          </div>
          <div className="text-xs text-amber-400 mt-1">2024 Mathematics EUEE</div>
        </div>

        <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-slate-400 font-semibold">Questions Practiced</div>
          <div className="text-3xl font-bold text-white mt-2">
            {analytics?.practice_questions_solved ?? 32}
          </div>
          <div className="text-xs text-slate-400 mt-1">Untimed learning mode</div>
        </div>

        <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-slate-400 font-semibold">AI Explanations</div>
          <div className="text-3xl font-bold text-white mt-2">
            {analytics?.ai_questions_asked ?? 14}
          </div>
          <div className="text-xs text-slate-400 mt-1">Grounded in textbooks</div>
        </div>
      </div>

      {/* Subject Performance Breakdown */}
      <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-base font-bold text-white">Subject Mastery Estimates</h2>
        <div className="space-y-3">
          {[
            { name: 'Mathematics', score: 78, color: 'bg-indigo-500' },
            { name: 'Physics', score: 68, color: 'bg-amber-500' },
            { name: 'Chemistry', score: 74, color: 'bg-emerald-500' },
            { name: 'Biology', score: 82, color: 'bg-teal-500' },
            { name: 'English', score: 85, color: 'bg-blue-500' },
          ].map(s => (
            <div key={s.name} className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300 font-semibold">
                <span>{s.name}</span>
                <span>{s.score}%</span>
              </div>
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
                <div className={`${s.color} h-full rounded-full transition-all`} style={{ width: `${s.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weak Topics Deep-Dive */}
      <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>Targeted Curriculum Interventions</span>
          </h2>
          <span className="text-xs text-slate-400">Mastery below 70%</span>
        </div>

        <div className="space-y-4">
          {analytics?.weak_topics && analytics.weak_topics.map((wt, i) => (
            <div key={i} className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{wt.topic_name}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {wt.subject_name}
                  </span>
                </div>
                <div className="text-xs text-slate-300">
                  <strong className="text-emerald-400">{wt.recommended_book}</strong>, {wt.recommended_chapter}, Pages {wt.recommended_pages}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('library-book-page', { bookId: 'book-10-math', pageNumber: 126 })}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open Textbook</span>
                </button>
                <button
                  onClick={() => onNavigate('practice-topic-direct', { topicId: wt.topic_id })}
                  className="px-3.5 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-semibold transition flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Practice Questions</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
