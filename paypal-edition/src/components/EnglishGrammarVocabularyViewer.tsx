import React, { useState, useEffect, useMemo } from 'react';
import {
  BookA,
  BookOpen,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Lightbulb,
  Search,
  Filter,
  Layers,
  ChevronDown,
  ChevronUp,
  HardDrive,
  Copy,
  Check,
  Languages,
  PenTool,
  Volume2,
  ArrowRight,
  Bookmark,
  Award,
  BookCheck,
  RefreshCw,
  FileText
} from 'lucide-react';
import { Book, BookChapter } from '../types';
import { GRADE_9_ENGLISH_MASTERY, EnglishUnitMastery, EnglishGrammarTopic, EnglishVocabWord } from '../data/englishMasteryData';
import { saveEnglishMasteryOffline, getOfflineEnglishMastery } from '../utils/offlineStorage';

interface EnglishGrammarVocabularyViewerProps {
  book: Book;
  currentChapter?: BookChapter;
  chapters?: BookChapter[];
  selectedTopicTitle?: string;
  onSelectTopic?: (topicTitle: string) => void;
  onNavigateToPdf?: () => void;
  onAskAITutor: (prompt: string) => void;
  onSelectChapter?: (chapterNumber: number) => void;
  theme?: 'light' | 'sepia' | 'dark';
}

export const EnglishGrammarVocabularyViewer: React.FC<EnglishGrammarVocabularyViewerProps> = ({
  book,
  currentChapter,
  chapters = [],
  selectedTopicTitle,
  onSelectTopic,
  onNavigateToPdf,
  onAskAITutor,
  onSelectChapter,
  theme = 'dark'
}) => {
  const [selectedUnit, setSelectedUnit] = useState<number>(currentChapter?.chapter_number || 0); // 0 means all units
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'grammar' | 'vocabulary' | 'reading_writing' | 'euee_traps'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [masteryData, setMasteryData] = useState<EnglishUnitMastery[]>(GRADE_9_ENGLISH_MASTERY);
  const [isSavedOffline, setIsSavedOffline] = useState<boolean>(false);
  const [isSavingOffline, setIsSavingOffline] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Expanded card tracking
  const [expandedGrammar, setExpandedGrammar] = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [expandedVocab, setExpandedVocab] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (currentChapter && currentChapter.chapter_number) {
      setSelectedUnit(currentChapter.chapter_number);
    }
  }, [currentChapter]);

  // Load offline data or check cache
  useEffect(() => {
    async function loadData() {
      const offline = await getOfflineEnglishMastery(book.id);
      if (offline && Array.isArray(offline) && offline.length > 0) {
        setMasteryData(offline);
        setIsSavedOffline(true);
      } else {
        // Fetch from API if online
        try {
          const res = await fetch(`/api/books/${book.id}/english-mastery`);
          if (res.ok) {
            const data = await res.json();
            if (data.mastery && Array.isArray(data.mastery)) {
              setMasteryData(data.mastery);
            }
          }
        } catch (e) {}
      }
    }
    loadData();
  }, [book.id]);

  const handleSaveOffline = async () => {
    setIsSavingOffline(true);
    try {
      await saveEnglishMasteryOffline(book.id, masteryData);
      setIsSavedOffline(true);
    } catch (e) {
      console.warn('Failed to save English mastery offline:', e);
    } finally {
      setIsSavingOffline(false);
    }
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleGrammar = (id: string) => {
    setExpandedGrammar(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filtered dataset
  const filteredUnits = useMemo(() => {
    let units = masteryData;
    if (selectedUnit > 0) {
      units = units.filter(u => u.unit_number === selectedUnit);
    }
    return units;
  }, [masteryData, selectedUnit]);

  // Flattened & searched lists
  const filteredGrammar = useMemo(() => {
    const list: EnglishGrammarTopic[] = [];
    filteredUnits.forEach(u => {
      u.grammar_masterclass.forEach(g => {
        if (!searchQuery.trim()) {
          list.push(g);
        } else {
          const q = searchQuery.toLowerCase();
          const matches =
            g.rule_title.toLowerCase().includes(q) ||
            g.formula_structure.toLowerCase().includes(q) ||
            g.core_summary.toLowerCase().includes(q) ||
            g.detailed_explanation.toLowerCase().includes(q) ||
            g.deep_ai_analysis.toLowerCase().includes(q);
          if (matches) list.push(g);
        }
      });
    });
    return list;
  }, [filteredUnits, searchQuery]);

  const filteredVocabulary = useMemo(() => {
    const list: Array<{ vocab: EnglishVocabWord; unitNum: number; unitTitle: string }> = [];
    filteredUnits.forEach(u => {
      u.vocabulary_bank.forEach(v => {
        if (!searchQuery.trim()) {
          list.push({ vocab: v, unitNum: u.unit_number, unitTitle: u.unit_title });
        } else {
          const q = searchQuery.toLowerCase();
          const matches =
            v.word.toLowerCase().includes(q) ||
            v.definition.toLowerCase().includes(q) ||
            v.context_sentence.toLowerCase().includes(q) ||
            v.ethiopian_context.toLowerCase().includes(q) ||
            v.synonyms.some(s => s.toLowerCase().includes(q)) ||
            v.collocations.some(c => c.toLowerCase().includes(q));
          if (matches) list.push({ vocab: v, unitNum: u.unit_number, unitTitle: u.unit_title });
        }
      });
    });
    return list;
  }, [filteredUnits, searchQuery]);

  const totalGrammarCount = useMemo(() => masteryData.reduce((acc, u) => acc + u.grammar_masterclass.length, 0), [masteryData]);
  const totalVocabCount = useMemo(() => masteryData.reduce((acc, u) => acc + u.vocabulary_bank.length, 0), [masteryData]);

  // Theme styling
  const bgClass =
    theme === 'light' ? 'bg-slate-50 text-slate-900' : theme === 'sepia' ? 'bg-[#f4ecd8] text-[#433422]' : 'bg-slate-950 text-slate-100';
  const cardBg =
    theme === 'light' ? 'bg-white border-slate-200' : theme === 'sepia' ? 'bg-[#efe6ce] border-[#dfd4b7]' : 'bg-slate-900 border-slate-800';
  const secondaryCardBg =
    theme === 'light' ? 'bg-slate-100/80 border-slate-200' : theme === 'sepia' ? 'bg-[#e5dcbe] border-[#d8cdb0]' : 'bg-slate-950/70 border-slate-800/80';
  const textMuted =
    theme === 'light' ? 'text-slate-600' : theme === 'sepia' ? 'text-[#6b5840]' : 'text-slate-400';

  return (
    <div className={`flex-1 flex flex-col h-full overflow-hidden ${bgClass}`}>
      {/* Top Header & Navigation Banner */}
      <div className={`p-4 border-b shrink-0 flex flex-col gap-3 ${theme === 'dark' ? 'border-slate-800 bg-slate-900/60' : theme === 'sepia' ? 'border-[#dfd4b7] bg-[#efe6ce]' : 'border-slate-200 bg-white'}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <BookA className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold tracking-tight">English Language Mastery & Grammar Bank</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  Authorized National Curriculum
                </span>
              </div>
              <p className={`text-xs ${textMuted}`}>
                Comprehensive Grammar Rules, Vocabulary Banks, Reading Blueprints & EUEE Exam Traps
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveOffline}
              disabled={isSavingOffline}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition ${
                isSavedOffline
                  ? 'bg-emerald-950/90 text-emerald-300 border-emerald-700/60'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
              title="Save Grammar & Vocabulary Bank 100% offline to device"
            >
              {isSavingOffline ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  <span>Caching...</span>
                </>
              ) : isSavedOffline ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Cached Offline</span>
                </>
              ) : (
                <>
                  <HardDrive className="w-3.5 h-3.5 text-blue-400" />
                  <span>Save Offline</span>
                </>
              )}
            </button>

            <button
              onClick={() => onAskAITutor('Explain all Grade 9 English grammar tenses and give 5 Ethiopian entrance exam examples with step-by-step solutions.')}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
          {/* Unit Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <button
              onClick={() => setSelectedUnit(0)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition shrink-0 ${
                selectedUnit === 0
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border border-slate-700/60'
              }`}
            >
              All Units (1–10)
            </button>
            {masteryData.map(u => (
              <button
                key={u.unit_number}
                onClick={() => setSelectedUnit(u.unit_number)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition shrink-0 ${
                  selectedUnit === u.unit_number
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border border-slate-700/60'
                }`}
              >
                Unit {u.unit_number}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px] flex-1 max-w-sm">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search grammar rules, words, idioms..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className={`w-full pl-8 pr-3 py-1.5 rounded-lg text-xs border focus:outline-none focus:ring-1 focus:ring-blue-500 transition ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-750 text-slate-200 placeholder-slate-500'
                  : theme === 'sepia'
                  ? 'bg-[#e7dfc8] border-[#cfc4a6] text-[#433422] placeholder-[#8a765c]'
                  : 'bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 text-xs">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1 rounded-md font-medium transition ${
              categoryFilter === 'all'
                ? 'bg-indigo-600/90 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            All Content
          </button>
          <button
            onClick={() => setCategoryFilter('grammar')}
            className={`px-3 py-1 rounded-md font-medium flex items-center gap-1.5 transition ${
              categoryFilter === 'grammar'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BookA className="w-3 h-3 text-blue-300" />
            <span>Grammar Rules & Formulas ({filteredGrammar.length})</span>
          </button>
          <button
            onClick={() => setCategoryFilter('vocabulary')}
            className={`px-3 py-1 rounded-md font-medium flex items-center gap-1.5 transition ${
              categoryFilter === 'vocabulary'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Languages className="w-3 h-3 text-emerald-300" />
            <span>Vocabulary Bank & Roots ({filteredVocabulary.length})</span>
          </button>
          <button
            onClick={() => setCategoryFilter('reading_writing')}
            className={`px-3 py-1 rounded-md font-medium flex items-center gap-1.5 transition ${
              categoryFilter === 'reading_writing'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <PenTool className="w-3 h-3 text-amber-300" />
            <span>Reading & Writing Blueprints</span>
          </button>
          <button
            onClick={() => setCategoryFilter('euee_traps')}
            className={`px-3 py-1 rounded-md font-medium flex items-center gap-1.5 transition ${
              categoryFilter === 'euee_traps'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <AlertCircle className="w-3 h-3 text-rose-300" />
            <span>Exam Traps & Common Errors</span>
          </button>
        </div>
      </div>

      {/* Main Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8">
        {/* Unit-by-Unit Grouped Presentation */}
        {filteredUnits.map(unit => {
          const unitGrammar = unit.grammar_masterclass.filter(g =>
            filteredGrammar.some(fg => fg.id === g.id)
          );
          const unitVocab = unit.vocabulary_bank.filter(v =>
            filteredVocabulary.some(fv => fv.vocab.word === v.word && fv.unitNum === unit.unit_number)
          );

          if (categoryFilter === 'grammar' && unitGrammar.length === 0) {
            return null;
          }
          if (categoryFilter === 'vocabulary' && unitVocab.length === 0) {
            return null;
          }

          return (
            <div
              key={unit.unit_number}
              className={`rounded-2xl border p-5 transition shadow-sm ${cardBg}`}
            >
              {/* Unit Header Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-black text-blue-400 text-base font-mono">
                    U{unit.unit_number}
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
                      <span>{unit.unit_title}</span>
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span>Textbook Pages {unit.start_page}–{unit.end_page}</span>
                      <span>•</span>
                      <span>{unit.grammar_masterclass.length} Grammar Focus</span>
                      <span>•</span>
                      <span>{unit.vocabulary_bank.length} Core Vocabulary Terms</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (onSelectChapter) onSelectChapter(unit.unit_number);
                      if (onNavigateToPdf) onNavigateToPdf();
                    }}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-750 flex items-center gap-1.5 transition"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View in Textbook</span>
                  </button>
                  <button
                    onClick={() => onAskAITutor(`Give me an intensive practice quiz on ${unit.unit_title} covering grammar and vocabulary.`)}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-800/60 flex items-center gap-1.5 transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Unit Quiz AI</span>
                  </button>
                </div>
              </div>

              {/* 1. GRAMMAR MASTERCLASS SECTION */}
              {(categoryFilter === 'all' || categoryFilter === 'grammar') && unitGrammar.length > 0 && (
                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                    <BookA className="w-4 h-4 text-blue-400" />
                    <span>Grammar Rules & Structural Formulation</span>
                  </div>

                  <div className="space-y-4">
                    {unitGrammar.map(grammar => {
                      const isExpanded = expandedGrammar[grammar.id] !== false; // default expanded

                      return (
                        <div
                          key={grammar.id}
                          className={`rounded-xl border p-4.5 transition ${secondaryCardBg}`}
                        >
                          {/* Rule Title & Header */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                <span className="text-blue-400">§</span>
                                <span>{grammar.rule_title}</span>
                              </h4>
                              <p className={`text-xs ${textMuted}`}>{grammar.core_summary}</p>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                onClick={() => handleCopyText(`${grammar.rule_title}\n${grammar.formula_structure}\n${grammar.detailed_explanation}`, grammar.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                                title="Copy grammar notes"
                              >
                                {copiedId === grammar.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                              </button>
                              <button
                                onClick={() => toggleGrammar(grammar.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                                title="Expand or collapse grammar details"
                              >
                                {isExpanded ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>

                          {/* Formula Box */}
                          <div className="mt-3 p-3 rounded-lg bg-blue-950/40 border border-blue-800/60 font-mono text-xs text-blue-200 flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-blue-900/80 text-blue-300 text-[10px] font-bold uppercase tracking-wider shrink-0 font-sans">
                              Formula / Pattern
                            </span>
                            <span className="font-semibold">{grammar.formula_structure}</span>
                          </div>

                          {isExpanded && (
                            <div className="mt-4 space-y-4 text-xs">
                              {/* Deep AI Explanation */}
                              <div className="space-y-2">
                                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                                  <span>In-Depth Academic Explanation</span>
                                </span>
                                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 whitespace-pre-line text-slate-300 leading-relaxed">
                                  {grammar.detailed_explanation}
                                </div>
                              </div>

                              {/* AI Pedagogical Insight */}
                              <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-800/50 flex items-start gap-2.5">
                                <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold text-purple-300 text-[11px] block">AI Pedagogical Analysis & Exam Insight:</span>
                                  <p className="text-purple-200/90 mt-0.5 leading-relaxed">{grammar.deep_ai_analysis}</p>
                                </div>
                              </div>

                              {/* Key Rules List */}
                              {grammar.usage_rules && grammar.usage_rules.length > 0 && (
                                <div className="space-y-1.5">
                                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Grammatical Usage Rules</span>
                                  </span>
                                  <ul className="space-y-1 pl-1">
                                    {grammar.usage_rules.map((rule, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-slate-300">
                                        <span className="text-emerald-400 font-bold">•</span>
                                        <span>{rule}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Key Examples in Ethiopian Context */}
                              {grammar.key_examples && grammar.key_examples.length > 0 && (
                                <div className="space-y-2">
                                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                                    <span>Illustrative Examples (with Context)</span>
                                  </span>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {grammar.key_examples.map((ex, idx) => (
                                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                                        <div className="flex items-center justify-between gap-1 mb-1">
                                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                                            {ex.context || `Example ${idx + 1}`}
                                          </span>
                                        </div>
                                        <p className="font-semibold text-white">"{ex.sentence}"</p>
                                        <p className="text-[11px] text-slate-400 mt-1">{ex.explanation}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Common Errors & EUEE Exam Traps */}
                              {grammar.common_errors_traps && grammar.common_errors_traps.length > 0 && (
                                <div className="space-y-2">
                                  <span className="font-bold text-rose-400 flex items-center gap-1.5">
                                    <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                                    <span>Common Errors & Entrance Exam Traps</span>
                                  </span>
                                  <div className="space-y-1.5">
                                    {grammar.common_errors_traps.map((trap, idx) => (
                                      <div key={idx} className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40 flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                          <span className="px-1 py-0.5 rounded bg-rose-900/60 text-rose-300 text-[10px] font-bold">WRONG</span>
                                          <span className="line-through text-rose-300/80">{trap.incorrect}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <span className="px-1 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[10px] font-bold">CORRECT</span>
                                          <span className="text-emerald-300 font-semibold">{trap.correct}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-400 pl-1 mt-0.5">
                                          <strong className="text-slate-300">Why:</strong> {trap.reason}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Interactive Sentence Transformation Exercises */}
                              {grammar.transformation_exercises && grammar.transformation_exercises.length > 0 && (
                                <div className="space-y-2 pt-1">
                                  <span className="font-bold text-blue-300 flex items-center gap-1.5">
                                    <Award className="w-3.5 h-3.5 text-blue-400" />
                                    <span>Sentence Transformation Practice</span>
                                  </span>
                                  <div className="space-y-2">
                                    {grammar.transformation_exercises.map((trans, idx) => {
                                      const transKey = `${grammar.id}_trans_${idx}`;
                                      const isRevealed = revealedSolutions[transKey];

                                      return (
                                        <div key={idx} className="p-3 rounded-lg bg-blue-950/20 border border-blue-900/40">
                                          <p className="font-medium text-slate-200">{trans.prompt}</p>
                                          <div className="mt-1.5 p-2 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-amber-200">
                                            {trans.starting_sentence}
                                          </div>
                                          <div className="mt-2 flex items-center justify-between gap-2">
                                            <button
                                              onClick={() => toggleSolution(transKey)}
                                              className="px-2.5 py-1 rounded bg-blue-700 hover:bg-blue-600 text-white font-semibold text-[11px] transition"
                                            >
                                              {isRevealed ? 'Hide Solution' : 'Reveal Solution & Explanation'}
                                            </button>
                                            <button
                                              onClick={() => onAskAITutor(`Explain this sentence transformation: "${trans.starting_sentence}" -> "${trans.solution}"`)}
                                              className="text-[11px] text-blue-400 hover:underline flex items-center gap-1"
                                            >
                                              <span>Tutor Walkthrough</span>
                                              <ArrowRight className="w-3 h-3" />
                                            </button>
                                          </div>

                                          {isRevealed && (
                                            <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 space-y-1">
                                              <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                                <span>{trans.solution}</span>
                                              </div>
                                              <p className="text-[11px] text-slate-300">{trans.explanation}</p>
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
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

              {/* 2. VOCABULARY BANK SECTION */}
              {(categoryFilter === 'all' || categoryFilter === 'vocabulary') && unitVocab.length > 0 && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <Languages className="w-4 h-4 text-emerald-400" />
                    <span>Vocabulary Bank, Phonetics & Word Power</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {unitVocab.map((item, idx) => {
                      const vocabKey = `${unit.unit_number}_${item.word}`;
                      const isVocabExpanded = expandedVocab[vocabKey];

                      return (
                        <div
                          key={idx}
                          className={`rounded-xl border p-3.5 transition flex flex-col justify-between ${secondaryCardBg}`}
                        >
                          <div>
                            {/* Word, Part of Speech & Phonetic */}
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="text-sm font-bold text-white tracking-wide">{item.word}</h4>
                                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                    {item.part_of_speech}
                                  </span>
                                </div>
                                <span className="text-[11px] font-mono text-slate-400">{item.phonetic}</span>
                              </div>

                              <button
                                onClick={() => handleCopyText(`${item.word} (${item.part_of_speech}): ${item.definition}\nContext: ${item.context_sentence}`, vocabKey)}
                                className="p-1 text-slate-400 hover:text-white transition"
                                title="Copy word card"
                              >
                                {copiedId === vocabKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>

                            {/* Definition */}
                            <p className="text-xs text-slate-200 mt-2 font-medium leading-relaxed">
                              {item.definition}
                            </p>

                            {/* Context Sentence */}
                            <div className="mt-2.5 p-2 rounded bg-slate-950/60 border border-slate-800/80 text-xs">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                                Textbook Example
                              </span>
                              <p className="italic text-slate-300">"{item.context_sentence}"</p>
                            </div>

                            {/* Ethiopian Context */}
                            {item.ethiopian_context && (
                              <p className="text-[11px] text-amber-300/90 mt-2 flex items-center gap-1.5">
                                <Bookmark className="w-3 h-3 text-amber-400 shrink-0" />
                                <span>{item.ethiopian_context}</span>
                              </p>
                            )}

                            {/* Synonyms & Collocations */}
                            <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px]">
                              {item.synonyms && item.synonyms.length > 0 && (
                                <div className="flex items-center gap-1 text-slate-400">
                                  <span className="font-semibold text-slate-300">Synonyms:</span>
                                  <span>{item.synonyms.join(', ')}</span>
                                </div>
                              )}
                            </div>

                            {item.collocations && item.collocations.length > 0 && (
                              <div className="mt-1 flex flex-wrap gap-1 text-[11px]">
                                <span className="font-semibold text-slate-400">Collocations:</span>
                                {item.collocations.map((col, cIdx) => (
                                  <span key={cIdx} className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                                    {col}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Word Family */}
                            {item.word_family && (
                              <div className="mt-2 p-1.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-mono flex flex-wrap gap-2">
                                {item.word_family.noun && <span>Noun: {item.word_family.noun}</span>}
                                {item.word_family.verb && <span>Verb: {item.word_family.verb}</span>}
                                {item.word_family.adjective && <span>Adj: {item.word_family.adjective}</span>}
                                {item.word_family.adverb && <span>Adv: {item.word_family.adverb}</span>}
                              </div>
                            )}
                          </div>

                          <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
                            <button
                              onClick={() => onAskAITutor(`How is the word "${item.word}" used in Ethiopian Grade 9 exams? Give 3 example questions.`)}
                              className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
                            >
                              <Sparkles className="w-3 h-3 text-emerald-400" />
                              <span>Practice Word with AI</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 3. READING & WRITING BLUEPRINTS SECTION */}
              {(categoryFilter === 'all' || categoryFilter === 'reading_writing') && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <PenTool className="w-4 h-4 text-amber-400" />
                    <span>Reading Strategies & Writing Masterclasses</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    {/* Reading Focus Card */}
                    <div className={`p-4 rounded-xl border ${secondaryCardBg} space-y-2.5`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-400 text-xs flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Reading Passage & Comprehension Focus</span>
                        </span>
                      </div>
                      <h5 className="font-bold text-white text-sm">"{unit.reading_focus.passage_title}"</h5>
                      <p className="text-slate-300 leading-relaxed">{unit.reading_focus.core_theme}</p>

                      <div className="space-y-1.5 pt-1">
                        <span className="font-bold text-slate-300 block">Comprehension Strategies:</span>
                        <ul className="space-y-1 pl-1">
                          {unit.reading_focus.comprehension_strategies.map((strat, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2 text-slate-300">
                              <span className="text-amber-400">•</span>
                              <span>{strat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <span className="font-bold text-slate-300 block">Key Thematic Takeaways:</span>
                        <ul className="space-y-1 pl-1">
                          {unit.reading_focus.key_takeaways.map((take, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-slate-300">
                              <span className="text-emerald-400">✓</span>
                              <span>{take}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Writing Masterclass Card */}
                    <div className={`p-4 rounded-xl border ${secondaryCardBg} space-y-2.5`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-indigo-400 text-xs flex items-center gap-1.5">
                          <PenTool className="w-3.5 h-3.5" />
                          <span>Writing Genre Blueprint</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px]">
                          {unit.writing_masterclass.genre}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="font-bold text-slate-300 block">Structural Blueprint:</span>
                        <ul className="space-y-1 pl-1">
                          {unit.writing_masterclass.structure_blueprint.map((blue, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-slate-300">
                              <span className="text-indigo-400 font-bold">{bIdx + 1}.</span>
                              <span>{blue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-2 p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 space-y-1">
                        <span className="font-bold text-amber-400 text-[11px] block">Model Composition:</span>
                        <p className="italic text-[11px] leading-relaxed whitespace-pre-line">
                          {unit.writing_masterclass.sample_model}
                        </p>
                      </div>

                      <div className="pt-1">
                        <span className="font-bold text-slate-300 text-[11px] block mb-1">Self-Correction Checklist:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {unit.writing_masterclass.writing_checklist.map((chk, cIdx) => (
                            <span key={cIdx} className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px]">
                              ☑ {chk}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. EXAM TRAPS & EUEE STRATEGIES */}
              {(categoryFilter === 'all' || categoryFilter === 'euee_traps') && unit.euee_exam_tips && (
                <div className="mt-6 p-4 rounded-xl bg-amber-950/20 border border-amber-800/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>National Entrance Exam (EUEE) Core Focus for {unit.unit_title}</span>
                  </div>
                  <ul className="space-y-1.5 pl-1 text-xs text-amber-200/90">
                    {unit.euee_exam_tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">★</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
