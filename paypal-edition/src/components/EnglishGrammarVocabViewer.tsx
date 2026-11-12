import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Search,
  Copy,
  Check,
  Award,
  HelpCircle,
  FileText,
  Bookmark,
  Layers,
  Zap,
  ArrowRight,
  ShieldCheck,
  Eye,
  Volume2
} from 'lucide-react';
import { Book, BookChapter } from '../types';
import { ENGLISH_GRADE_9_MASTERY_DATA, UnitEnglishMastery, GrammarRule, VocabularyWord } from '../data/englishGrammarVocabData';

interface EnglishGrammarVocabViewerProps {
  book: Book;
  currentChapter?: BookChapter;
  onSelectChapter?: (chapterNumber: number) => void;
  theme?: 'light' | 'sepia' | 'dark';
}

export const EnglishGrammarVocabViewer: React.FC<EnglishGrammarVocabViewerProps> = ({
  book,
  currentChapter,
  onSelectChapter,
  theme = 'dark'
}) => {
  const [selectedUnit, setSelectedUnit] = useState<number>(currentChapter?.chapter_number || 0);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'grammar' | 'vocab' | 'reading' | 'quiz' | 'euee'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quizSelections, setQuizSelections] = useState<Record<string, number>>({});
  const [showQuizExplanations, setShowQuizExplanations] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filtered units based on selected unit
  const displayedUnits = useMemo(() => {
    if (selectedUnit === 0) return ENGLISH_GRADE_9_MASTERY_DATA;
    return ENGLISH_GRADE_9_MASTERY_DATA.filter(u => u.unit_num === selectedUnit);
  }, [selectedUnit]);

  // Filter items matching search query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return displayedUnits;
    const q = searchQuery.toLowerCase().trim();

    return displayedUnits.map(unit => {
      const matchGrammar = unit.grammar_rules.filter(g =>
        g.grammar_topic.toLowerCase().includes(q) ||
        g.rule_summary.toLowerCase().includes(q) ||
        g.formula_syntax.toLowerCase().includes(q) ||
        g.key_points.some(k => k.toLowerCase().includes(q))
      );

      const matchVocab = unit.vocabulary_list.filter(v =>
        v.word.toLowerCase().includes(q) ||
        v.definition.toLowerCase().includes(q) ||
        v.synonyms.some(s => s.toLowerCase().includes(q)) ||
        v.collocations.some(c => c.toLowerCase().includes(q))
      );

      return {
        ...unit,
        grammar_rules: matchGrammar,
        vocabulary_list: matchVocab
      };
    }).filter(u => u.grammar_rules.length > 0 || u.vocabulary_list.length > 0 || u.reading_title.toLowerCase().includes(q));
  }, [displayedUnits, searchQuery]);

  const handleSelectQuizOption = (qKey: string, optIdx: number) => {
    setQuizSelections(prev => ({ ...prev, [qKey]: optIdx }));
    setShowQuizExplanations(prev => ({ ...prev, [qKey]: true }));
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className={`flex-1 overflow-y-auto bg-[var(--bg-canvas)] p-4 sm:p-8 flex justify-center text-[var(--text-main)] theme-${theme}`}>
      <div className="max-w-5xl w-full space-y-6">
        
        {/* Top Header Banner */}
        <div className="border rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950/40 to-blue-950/50 border-indigo-800/40">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-blue-500/10" />

          <div className="space-y-3 relative z-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30">
                Grade 9 • English Language Masterclass
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Grammar, Vocabulary & EUEE Vault</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              English Grammar & Vocabulary Complete Curriculum Vault
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Exhaustive, illustrated language masterclass covering all 10 textbook units. Master tenses, stative verbs, modals, passive voice, conditionals, relative clauses, academic vocabulary, collocations, reading comprehension, and EUEE national entrance exam distractor traps.
            </p>
          </div>
        </div>

        {/* Controls Bar: Unit Selector, Category Tabs & Search Bar */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl p-4 shadow-sm space-y-4">
          
          {/* Unit Switcher */}
          <div>
            <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Select Unit (1 to 10):</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              <button
                onClick={() => {
                  setSelectedUnit(0);
                  if (onSelectChapter) onSelectChapter(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 shrink-0 ${
                  selectedUnit === 0
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-[var(--bg-canvas)] text-[var(--text-muted)] hover:text-white border border-[var(--border-light)]'
                }`}
              >
                <span>All 10 Units</span>
              </button>
              {ENGLISH_GRADE_9_MASTERY_DATA.map(u => (
                <button
                  key={u.unit_num}
                  onClick={() => {
                    setSelectedUnit(u.unit_num);
                    if (onSelectChapter) onSelectChapter(u.unit_num);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 shrink-0 ${
                    selectedUnit === u.unit_num
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-[var(--bg-canvas)] text-[var(--text-muted)] hover:text-white border border-[var(--border-light)]'
                  }`}
                >
                  <span>Unit {u.unit_num}:</span>
                  <span className="opacity-90 max-w-[130px] truncate">{u.unit_title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-[var(--border-light)]">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  categoryFilter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'text-[var(--text-muted)] hover:text-white bg-[var(--bg-canvas)] border border-[var(--border-light)]'
                }`}
              >
                All Modules
              </button>
              <button
                onClick={() => setCategoryFilter('grammar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  categoryFilter === 'grammar'
                    ? 'bg-indigo-600 text-white'
                    : 'text-[var(--text-muted)] hover:text-white bg-[var(--bg-canvas)] border border-[var(--border-light)]'
                }`}
              >
                Grammar Rules ({displayedUnits.reduce((acc, u) => acc + u.grammar_rules.length, 0)})
              </button>
              <button
                onClick={() => setCategoryFilter('vocab')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  categoryFilter === 'vocab'
                    ? 'bg-indigo-600 text-white'
                    : 'text-[var(--text-muted)] hover:text-white bg-[var(--bg-canvas)] border border-[var(--border-light)]'
                }`}
              >
                Vocabulary Banks ({displayedUnits.reduce((acc, u) => acc + u.vocabulary_list.length, 0)})
              </button>
              <button
                onClick={() => setCategoryFilter('euee')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  categoryFilter === 'euee'
                    ? 'bg-indigo-600 text-white'
                    : 'text-[var(--text-muted)] hover:text-white bg-[var(--bg-canvas)] border border-[var(--border-light)]'
                }`}
              >
                EUEE Exam Traps
              </button>
              <button
                onClick={() => setCategoryFilter('quiz')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  categoryFilter === 'quiz'
                    ? 'bg-indigo-600 text-white'
                    : 'text-[var(--text-muted)] hover:text-white bg-[var(--bg-canvas)] border border-[var(--border-light)]'
                }`}
              >
                Practice Quizzes
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search rule, word, tense..."
                className="w-full bg-[var(--bg-canvas)] text-xs text-[var(--text-main)] pl-8 pr-3 py-1.5 rounded-xl border border-[var(--border-light)] focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8">
          {filteredData.map(unit => (
            <div key={unit.unit_num} className="space-y-6">
              
              {/* Unit Header Bar */}
              <div className="flex items-center justify-between border-b border-[var(--border-medium)] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/30">
                    {unit.unit_num}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      Unit {unit.unit_num}: {unit.unit_title}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)]">
                      Focus: {unit.grammar_focus}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyText(`Grade 9 English Unit ${unit.unit_num}: ${unit.unit_title}\nGrammar: ${unit.grammar_focus}\nReading: ${unit.reading_title}`, `unit-${unit.unit_num}`)}
                  className="px-2.5 py-1 bg-[var(--bg-card)] hover:bg-slate-700 text-[var(--text-muted)] hover:text-white rounded-lg text-xs font-semibold border border-[var(--border-light)] flex items-center gap-1.5 transition"
                >
                  {copiedId === `unit-${unit.unit_num}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === `unit-${unit.unit_num}` ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* SECTION 1: THEMATIC READING ANALYSIS */}
              {(categoryFilter === 'all' || categoryFilter === 'reading') && (
                <div className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl p-5 space-y-3 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span>Thematic Reading Passage & Synopsis:</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {unit.reading_title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {unit.reading_synopsis}
                  </p>
                </div>
              )}

              {/* SECTION 2: GRAMMAR RULES & STRUCTURAL SYNTAX */}
              {(categoryFilter === 'all' || categoryFilter === 'grammar') && unit.grammar_rules.length > 0 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-indigo-400" />
                    <span>Grammar Rules & Structural Syntax:</span>
                  </div>

                  {unit.grammar_rules.map(rule => (
                    <div key={rule.id} className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-light)] pb-3">
                        <div>
                          <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                            {rule.topic_title}
                          </span>
                          <h4 className="text-base font-extrabold text-white">
                            {rule.grammar_topic}
                          </h4>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[11px] font-mono">
                          Syntax Formula
                        </span>
                      </div>

                      {/* Formula Box */}
                      <div className="p-3.5 bg-slate-950/80 border border-indigo-900/60 rounded-xl font-mono text-xs text-indigo-300 leading-relaxed shadow-inner">
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Standard Syntactic Formula:</div>
                        {rule.formula_syntax}
                      </div>

                      {/* Explanation */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {rule.rule_summary}
                      </p>

                      {/* Examples Table */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                        <div className="p-3 bg-emerald-950/30 border border-emerald-900/40 rounded-xl space-y-1">
                          <div className="font-bold text-emerald-300 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Affirmative (+)</span>
                          </div>
                          <p className="text-slate-300">{rule.positive_example}</p>
                        </div>
                        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-xl space-y-1">
                          <div className="font-bold text-rose-300 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                            <span>Negative (-)</span>
                          </div>
                          <p className="text-slate-300">{rule.negative_example}</p>
                        </div>
                        <div className="p-3 bg-blue-950/30 border border-blue-900/40 rounded-xl space-y-1">
                          <div className="font-bold text-blue-300 flex items-center gap-1">
                            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                            <span>Interrogative (?)</span>
                          </div>
                          <p className="text-slate-300">{rule.question_example}</p>
                        </div>
                      </div>

                      {/* Stative Exceptions / Key Points */}
                      {rule.stative_exceptions && rule.stative_exceptions.length > 0 && (
                        <div className="p-3.5 bg-amber-950/30 border border-amber-900/40 rounded-xl space-y-1 text-xs">
                          <div className="font-bold text-amber-300 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                            <span>Crucial Stative Verb Exceptions:</span>
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-amber-200/90 text-[11px]">
                            {rule.stative_exceptions.map((ex, i) => (
                              <li key={i}>{ex}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Common Errors & Corrections */}
                      {rule.common_errors && rule.common_errors.length > 0 && (
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Common Student Errors vs. Standard English:
                          </div>
                          <div className="space-y-2">
                            {rule.common_errors.map((err, i) => (
                              <div key={i} className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs space-y-1">
                                <div className="text-rose-400 line-through font-mono">✗ {err.incorrect}</div>
                                <div className="text-emerald-300 font-mono font-semibold">✓ {err.correct}</div>
                                <div className="text-slate-400 text-[11px] pt-1">{err.explanation}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* SECTION 3: CURRICULUM VOCABULARY BANKS */}
              {(categoryFilter === 'all' || categoryFilter === 'vocab') && unit.vocabulary_list.length > 0 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-emerald-400" />
                    <span>Curriculum Vocabulary & Expressions:</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {unit.vocabulary_list.map(v => (
                      <div key={v.id} className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl p-4 space-y-2.5 shadow-sm">
                        <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-emerald-300">{v.word}</h4>
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                              {v.part_of_speech}
                            </span>
                          </div>
                          {v.pronunciation_guide && (
                            <span className="text-xs font-mono text-slate-400">{v.pronunciation_guide}</span>
                          )}
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          <strong>Definition:</strong> {v.definition}
                        </p>

                        <div className="text-[11px] space-y-1 text-slate-400">
                          <div>
                            <strong className="text-slate-300">Synonyms:</strong> {v.synonyms.join(', ')}
                          </div>
                          {v.antonyms.length > 0 && (
                            <div>
                              <strong className="text-slate-300">Antonyms:</strong> {v.antonyms.join(', ')}
                            </div>
                          )}
                          {v.collocations.length > 0 && (
                            <div>
                              <strong className="text-slate-300">Collocations:</strong> {v.collocations.join(', ')}
                            </div>
                          )}
                        </div>

                        <div className="p-2.5 bg-slate-950/70 border border-slate-800/80 rounded-xl text-xs text-slate-300 italic">
                          "{v.ethiopian_example_sentence}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 4: EUEE EXAM TRAPS */}
              {(categoryFilter === 'all' || categoryFilter === 'euee') && (
                <div className="bg-gradient-to-br from-amber-950/30 via-slate-900 to-amber-950/20 border border-amber-800/40 rounded-2xl p-5 space-y-3 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>EUEE National Exam Strategy & Distractor Traps:</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {unit.euee_national_tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-900/80 border border-amber-900/30 p-2.5 rounded-xl">
                        <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SECTION 5: INTERACTIVE PRACTICE QUIZZES */}
              {(categoryFilter === 'all' || categoryFilter === 'quiz') && unit.grammar_rules.flatMap(g => g.practice_questions).length > 0 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-purple-400" />
                    <span>Interactive Practice Quizzes:</span>
                  </div>

                  <div className="space-y-3.5">
                    {unit.grammar_rules.flatMap((g, gIdx) =>
                      g.practice_questions.map((q, qIdx) => {
                        const qKey = `q-${unit.unit_num}-${gIdx}-${qIdx}`;
                        const selected = quizSelections[qKey];
                        const showExpl = showQuizExplanations[qKey];
                        const isCorrect = selected === q.correct_option;

                        return (
                          <div key={qKey} className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl p-5 space-y-3 shadow-sm">
                            <div className="font-bold text-sm text-white flex items-start gap-2">
                              <span className="w-5 h-5 rounded-md bg-purple-600/20 text-purple-300 text-xs flex items-center justify-center shrink-0 mt-0.5 border border-purple-500/30">
                                {qIdx + 1}
                              </span>
                              <span>{q.question}</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {q.options.map((opt, optIdx) => {
                                const isChosen = selected === optIdx;
                                const isRightChoice = optIdx === q.correct_option;

                                let btnStyle = 'bg-[var(--bg-canvas)] border-[var(--border-light)] text-slate-300 hover:border-purple-500';
                                if (showExpl) {
                                  if (isRightChoice) {
                                    btnStyle = 'bg-emerald-950/80 border-emerald-600 text-emerald-200 font-bold';
                                  } else if (isChosen) {
                                    btnStyle = 'bg-rose-950/80 border-rose-600 text-rose-200 font-bold';
                                  } else {
                                    btnStyle = 'opacity-40 bg-[var(--bg-canvas)] border-[var(--border-light)] text-slate-400';
                                  }
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => handleSelectQuizOption(qKey, optIdx)}
                                    className={`px-3.5 py-2.5 rounded-xl border text-xs text-left transition flex items-center justify-between ${btnStyle}`}
                                  >
                                    <span>{opt}</span>
                                    {showExpl && isRightChoice && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2" />}
                                    {showExpl && isChosen && !isRightChoice && <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 ml-2" />}
                                  </button>
                                );
                              })}
                            </div>

                            {showExpl && (
                              <div className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2 animate-fadeIn ${
                                isCorrect
                                  ? 'bg-emerald-950/40 border-emerald-800/50 text-emerald-200'
                                  : 'bg-rose-950/40 border-rose-800/50 text-rose-200'
                              }`}>
                                {isCorrect ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                ) : (
                                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                )}
                                <div>
                                  <div className="font-bold">{isCorrect ? 'Correct!' : 'Incorrect.'}</div>
                                  <div className="text-[11px] text-slate-300 mt-0.5">{q.explanation}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
