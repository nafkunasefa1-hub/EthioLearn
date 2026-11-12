import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  GitBranch,
  BookOpen,
  Sparkles,
  ArrowRight,
  Search,
  BookMarked,
  Layers,
  GraduationCap,
  Award,
  Zap,
  CheckCircle2,
  Compass,
  Filter,
  ChevronRight,
  ExternalLink,
  Flame
} from 'lucide-react';
import { CONNECTED_TOPIC_PATHWAYS, ConnectedTopicPathway, ConnectedUnitNode } from '../data/connectedTopicsData';
import { LockedFeaturePaywall } from '../components/LockedFeaturePaywall';

interface ConnectedTopicsPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const ConnectedTopicsPage: React.FC<ConnectedTopicsPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPathwayId, setExpandedPathwayId] = useState<string | null>(CONNECTED_TOPIC_PATHWAYS[0]?.id || null);

  const subjectsList = [
    { id: 'all', label: 'All Subjects' },
    { id: 'subj-phys', label: 'Physics' },
    { id: 'subj-chem', label: 'Chemistry' },
    { id: 'subj-math', label: 'Mathematics' },
    { id: 'subj-bio', label: 'Biology' },
    { id: 'subj-hist', label: 'History' },
    { id: 'subj-civ', label: 'Citizenship / Civics' }
  ];

  const filteredPathways = useMemo(() => {
    return CONNECTED_TOPIC_PATHWAYS.filter(p => {
      const matchesSubject = selectedSubject === 'all' || p.subject_id === selectedSubject;
      if (!matchesSubject) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = p.pathway_title.toLowerCase().includes(q);
      const inDesc = p.description.toLowerCase().includes(q);
      const inRationale = p.curriculum_bridge_rationale.toLowerCase().includes(q);
      const inNodes = p.nodes.some(n =>
        n.unit_title.toLowerCase().includes(q) ||
        n.key_topics.some(t => t.toLowerCase().includes(q)) ||
        n.learning_focus.toLowerCase().includes(q)
      );

      return inTitle || inDesc || inRationale || inNodes;
    });
  }, [selectedSubject, searchQuery]);

  // Paywall guard
  const isPaid = Boolean(
    user?.role === 'admin' ||
    user?.is_premium ||
    (user?.unlocked_grades && user.unlocked_grades.length > 0)
  );
  if (!isPaid) {
    return (
      <LockedFeaturePaywall
        title="Connected Topics — Premium Feature"
        description="The Connected Topics Bridge shows how curriculum concepts link across subjects, helping you master cross-subject reasoning for the EUEE. Available to subscribed students only."
        userGrade={user?.grade || 'Grade 12'}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-indigo-950/80 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cross-Grade Curriculum Bridge</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Connected Topics & Learning Pathways
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The Ethiopian National Secondary Curriculum is progressive: concepts introduced in Grade 9 & 10 form the indispensable foundation for Grade 11 & 12 national entrance exam mastery. Discover linked units across textbooks and study connected topics together for exponential retention.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Based on Real Extracted Units & Topics
            </span>
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Flame className="w-4 h-4" /> High-Yield EUEE Exam Threads
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl shadow-xl">
        {/* Subject Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {subjectsList.map(s => {
            const active = selectedSubject === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSubject(s.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition active:scale-95 ${
                  active
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative min-w-[260px] md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search topics (e.g. Gauss, Vectors, Mitosis)..."
            className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition"
          />
        </div>
      </div>

      {/* Pathways List */}
      <div className="space-y-6">
        {filteredPathways.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-6">
            <Compass className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No Connected Topic Pathways Found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or select "All Subjects" to explore all cross-grade curriculum threads.
            </p>
          </div>
        ) : (
          filteredPathways.map(pathway => {
            const isExpanded = expandedPathwayId === pathway.id;
            return (
              <div
                key={pathway.id}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition hover:border-slate-700"
              >
                {/* Pathway Header Card */}
                <div
                  onClick={() => setExpandedPathwayId(isExpanded ? null : pathway.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 select-none hover:bg-slate-800/40 transition"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {pathway.subject_name}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {pathway.exam_importance}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>{pathway.euee_question_weight}</span>
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>{pathway.pathway_title}</span>
                    </h2>

                    <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                      {pathway.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                    <span className="text-xs font-semibold text-emerald-400 hidden sm:inline">
                      {isExpanded ? 'Hide Progression' : 'Explore Connected Units'}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 transition transform ${isExpanded ? 'rotate-90 bg-emerald-600 text-white' : ''}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Pathway Progression Timeline */}
                {isExpanded && (
                  <div className="border-t border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-6 animate-in slide-in-from-top-3 duration-200">
                    {/* Pedagogical Bridge Guidance Note */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-purple-950/40 to-slate-900 border border-indigo-500/40 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                          Why Read These Units Together (Teacher's Pedagogical Bridge):
                        </h4>
                        <p className="text-xs text-slate-200 leading-relaxed italic">
                          "{pathway.curriculum_bridge_rationale}"
                        </p>
                      </div>
                    </div>

                    {/* Timeline Progression Track */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
                        <span>Connected Curriculum Progression Pathway</span>
                        <span>{pathway.nodes.length} Linked Units Across Grades</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pathway.nodes.map((node, nodeIdx) => (
                          <div
                            key={nodeIdx}
                            className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-emerald-500/50 transition group"
                          >
                            <div className="space-y-3">
                              {/* Node Step Header */}
                              <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400">
                                  Step {nodeIdx + 1} • {node.grade_name}
                                </span>
                                <span className="text-[11px] font-mono text-slate-400">
                                  Starts Page <strong>{node.start_page}</strong>
                                </span>
                              </div>

                              <div>
                                <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition">
                                  Unit {node.unit_number}: {node.unit_title}
                                </h3>
                                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                  {node.book_title}
                                </div>
                              </div>

                              {/* Key Topics List */}
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                                  Extracted Curriculum Topics:
                                </span>
                                <ul className="space-y-1">
                                  {node.key_topics.map((t, tidx) => (
                                    <li key={tidx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                                      <span className="line-clamp-1">{t}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Learning Advice */}
                              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-300 leading-relaxed">
                                <span className="font-semibold text-emerald-400">Focus: </span>
                                {node.learning_focus}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                              <button
                                onClick={() => onNavigate('book-viewer', {
                                  bookId: node.book_id,
                                  initialPage: node.start_page,
                                  initialMode: 'digital_textbook'
                                })}
                                className="flex-1 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm active:scale-95"
                                title={`Read Page ${node.start_page} in Digital Textbook`}
                              >
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>Read p.{node.start_page}</span>
                              </button>

                              <button
                                onClick={() => onNavigate('book-viewer', {
                                  bookId: node.book_id,
                                  initialPage: node.start_page,
                                  initialMode: 'short_notes'
                                })}
                                className="py-1.5 px-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1 active:scale-95"
                                title="Study AI Short Notes"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                <span>Notes</span>
                              </button>

                              <button
                                onClick={() => onNavigate('practice-topics', {
                                  subjectId: node.subject_id,
                                  gradeId: node.grade_id
                                })}
                                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition"
                                title="Practice Exam Questions on this Topic"
                              >
                                <Layers className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
