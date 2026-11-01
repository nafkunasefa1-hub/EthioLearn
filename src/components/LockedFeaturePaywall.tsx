import React from 'react';
import { Lock, Sparkles, ArrowRight, ShieldCheck, Home } from 'lucide-react';

interface LockedFeaturePaywallProps {
  title?: string;
  description?: string;
  userGrade?: string;
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const LockedFeaturePaywall: React.FC<LockedFeaturePaywallProps> = ({
  title = 'This Feature Requires a Membership',
  description = 'Free tier accounts can preview the first 3 questions from official entrance exams and AI questions under the Dashboard. Unlock full access to activate this feature.',
  userGrade = 'Grade 12',
  onNavigate
}) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
        <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/30">
          <Lock className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            Premium Locked
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-2 text-left">
          <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-4 space-y-2 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider">Option 1</div>
              <div className="text-sm font-bold text-white">Your Section Only</div>
              <p className="text-xs text-slate-300 mt-1">
                Access all books, exam questions, and tools for <strong className="text-emerald-300">{userGrade}</strong>.
              </p>
            </div>
            <div className="pt-3 flex items-center justify-between">
              <span className="text-xl font-black text-emerald-400">200 ETB</span>
              <button
                onClick={() => onNavigate('payment')}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow transition"
              >
                Unlock 200 ETB
              </button>
            </div>
          </div>

          <div className="bg-slate-950 border border-indigo-500/40 rounded-2xl p-4 space-y-2 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase text-indigo-400 tracking-wider">Option 2 (All-Access)</div>
              <div className="text-sm font-bold text-white">All Grades 9–12</div>
              <p className="text-xs text-slate-300 mt-1">
                Access every grade (9, 10, 11, 12 Natural & Social streams).
              </p>
            </div>
            <div className="pt-3 flex items-center justify-between">
              <span className="text-xl font-black text-indigo-400">300 ETB</span>
              <button
                onClick={() => onNavigate('payment', { plan: 'all' })}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition"
              >
                Unlock 300 ETB
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl transition flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Go to Dashboard (Try 3 Questions Free)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
