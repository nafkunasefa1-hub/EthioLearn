import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  X,
  Languages,
  Copy,
  Check,
  Tag,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { BILINGUAL_GLOSSARY, GlossaryTerm, searchGlossary } from '../data/bilingualGlossary';
import { InlineMath } from 'react-katex';

interface BilingualGlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubjectId?: string;
  initialSearchQuery?: string;
}

export const BilingualGlossaryModal: React.FC<BilingualGlossaryModalProps> = ({
  isOpen,
  onClose,
  initialSubjectId = 'all',
  initialSearchQuery = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedSubject, setSelectedSubject] = useState(initialSubjectId);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeLang, setActiveLang] = useState<'all' | 'am' | 'or'>('all');

  const filteredTerms = useMemo(() => {
    return searchGlossary(searchQuery, selectedSubject);
  }, [searchQuery, selectedSubject]);

  if (!isOpen) return null;

  const handleCopy = (term: GlossaryTerm) => {
    const text = `${term.term_en} | ${term.term_am} | ${term.term_or}\nDefinition: ${term.definition_en}`;
    navigator.clipboard.writeText(text);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const SUBJECTS = [
    { id: 'all', label: 'All Subjects' },
    { id: 'subj-phys', label: 'Physics' },
    { id: 'subj-chem', label: 'Chemistry' },
    { id: 'subj-bio', label: 'Biology' },
    { id: 'subj-math', label: 'Mathematics' },
    { id: 'subj-sat', label: 'SAT (Aptitude)' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-emerald-950 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Languages className="w-4 h-4" />
              <span>National Academic Curriculum Dictionary</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              Bilingual Scientific Glossary
              <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-normal">
                English ↔ አማርኛ ↔ Afaan Oromoo
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Official Ethiopian secondary terminology to support students transitioning between languages.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
            title="Close Glossary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls Bar: Search & Filter */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search term in English, አማርኛ (Fidel), or Afaan Oromoo..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Language view toggle */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-700/80 p-1 rounded-xl shrink-0">
              <button
                onClick={() => setActiveLang('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  activeLang === 'all' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Trilingual
              </button>
              <button
                onClick={() => setActiveLang('am')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  activeLang === 'am' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                አማርኛ Focus
              </button>
              <button
                onClick={() => setActiveLang('or')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  activeLang === 'or' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Afaan Oromoo Focus
              </button>
            </div>
          </div>

          {/* Subject Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {SUBJECTS.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSubject(s.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  selectedSubject === s.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
              <div className="text-white font-semibold text-sm">No glossary terms match "{searchQuery}"</div>
              <p className="text-xs text-slate-400">Try searching for keywords like "acceleration", "አተነፋፈስ", or "saffisa".</p>
            </div>
          ) : (
            filteredTerms.map(term => (
              <div
                key={term.id}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 space-y-3 hover:border-emerald-600/60 transition shadow-sm"
              >
                {/* Term Headers */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {term.term_en}
                      </h3>
                      <span className="px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-400 rounded-md text-[10px] font-mono">
                        {term.category}
                      </span>
                      {term.grade_level && (
                        <span className="px-2 py-0.5 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-md text-[10px] font-semibold">
                          {term.grade_level}
                        </span>
                      )}
                    </div>

                    {/* Regional Translations */}
                    <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                      {(activeLang === 'all' || activeLang === 'am') && (
                        <div className="flex items-center gap-1.5 bg-amber-950/40 border border-amber-800/60 px-2.5 py-1 rounded-lg text-amber-200 font-medium">
                          <span className="text-[10px] uppercase font-bold text-amber-400">አማ:</span>
                          <span>{term.term_am}</span>
                        </div>
                      )}
                      {(activeLang === 'all' || activeLang === 'or') && (
                        <div className="flex items-center gap-1.5 bg-indigo-950/40 border border-indigo-800/60 px-2.5 py-1 rounded-lg text-indigo-200 font-medium">
                          <span className="text-[10px] uppercase font-bold text-indigo-400">A.O:</span>
                          <span>{term.term_or}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(term)}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-750 border border-slate-700 rounded-lg transition text-xs flex items-center gap-1"
                    title="Copy definition"
                  >
                    {copiedId === term.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mathematical Formula if present */}
                {term.formula_latex && (
                  <div className="bg-slate-950/80 border border-slate-700/60 px-3 py-2 rounded-xl text-center overflow-x-auto">
                    <InlineMath math={term.formula_latex} />
                  </div>
                )}

                {/* English Definition */}
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white">Definition:</strong> {term.definition_en}
                </div>

                {/* Amharic & Afaan Oromoo explanations */}
                {(activeLang === 'all' || activeLang === 'am') && (
                  <div className="text-xs text-amber-200/90 bg-amber-950/20 border-l-2 border-amber-500 pl-3 py-1">
                    <strong className="text-amber-300 font-medium">ማብራሪያ (አማርኛ):</strong> {term.definition_am}
                  </div>
                )}

                {(activeLang === 'all' || activeLang === 'or') && (
                  <div className="text-xs text-indigo-200/90 bg-indigo-950/20 border-l-2 border-indigo-500 pl-3 py-1">
                    <strong className="text-indigo-300 font-medium">Ibsa (Afaan Oromoo):</strong> {term.definition_or}
                  </div>
                )}

                {/* Practical Example */}
                {term.example_en && (
                  <div className="text-[11px] text-slate-400 italic">
                    💡 <strong>Real-world Example:</strong> {term.example_en}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Showing {filteredTerms.length} national standard terms</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
