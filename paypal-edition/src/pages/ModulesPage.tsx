import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  EUEE_SUBJECT_MODULES,
  MODULE_CATEGORY_TITLE,
  SubjectModule,
  ModuleUnit,
  ModuleTopic
} from '../data/modulesData';
import {
  BookOpen,
  Calculator,
  Zap,
  FlaskConical,
  Dna,
  Brain,
  Search,
  ChevronRight,
  ChevronDown,
  Sparkles,
  BookMarked,
  CheckCircle2,
  HelpCircle,
  Info,
  Layers,
  GraduationCap,
  Bookmark,
  FileSpreadsheet,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { LockedFeaturePaywall } from '../components/LockedFeaturePaywall';

interface ModulesPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

/**
 * Sanitizes and converts any legacy or stray LaTeX escape codes into clean, standard, human-readable text and symbols.
 */
const cleanText = (str: string): string => {
  if (!str) return '';
  return str
    .replace(/\$subseteq\$/gi, '⊆')
    .replace(/\$subset\$/gi, '⊂')
    .replace(/\$emptyset\$/gi, '∅')
    .replace(/\\emptyset/gi, '∅')
    .replace(/\\subseteq/gi, '⊆')
    .replace(/\\subset/gi, '⊂')
    .replace(/\$mid\$/gi, '|')
    .replace(/\\dots/gi, '...')
    .replace(/\$dots\$/gi, '...')
    .replace(/\\mathbb\{R\}/gi, 'R')
    .replace(/\\mathbb\{N\}/gi, 'N')
    .replace(/\\mathbb\{Z\}/gi, 'Z')
    .replace(/\$2\^n\$/gi, '2ⁿ')
    .replace(/\$2\^n - 1\$/gi, '2ⁿ - 1')
    .replace(/\$P\(A\)\$/gi, 'P(A)')
    .replace(/\$/g, '') // remove any stray dollar signs
    .trim();
};

/**
 * Renders topic content in a pristine, structured textbook handout style.
 */
const ModuleContentRenderer: React.FC<{ content: string }> = ({ content }) => {
  if (!content) return null;

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let tableLines: string[] = [];
  let inTable = false;

  const flushTable = (key: string) => {
    if (tableLines.length === 0) return;

    // Filter out separator lines like | :--- | :--- |
    const contentTableRows = tableLines.filter(l => !l.includes(':---') && !l.includes('---'));
    if (contentTableRows.length === 0) {
      tableLines = [];
      inTable = false;
      return;
    }

    const headerLine = contentTableRows[0];
    const bodyLines = contentTableRows.slice(1);

    const parseRow = (rowStr: string) =>
      rowStr
        .split('|')
        .map(cell => cleanText(cell.trim()))
        .filter((cell, idx, arr) => idx > 0 && idx < arr.length - 1 || (arr.length <= 2 && cell !== ''));

    const headers = parseRow(headerLine);

    elements.push(
      <div key={key} className="my-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80 shadow-md">
        <table className="w-full text-left text-xs sm:text-sm text-slate-200">
          <thead className="bg-slate-900 border-b border-slate-800 text-indigo-300 font-bold uppercase tracking-wider">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 border-r last:border-r-0 border-slate-800">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {bodyLines.map((bRow, rIdx) => {
              const cells = parseRow(bRow);
              return (
                <tr key={rIdx} className="hover:bg-slate-900/50 transition">
                  {cells.map((c, cIdx) => (
                    <td key={cIdx} className="px-4 py-2.5 border-r last:border-r-0 border-slate-800/60 font-medium">
                      {c}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );

    tableLines = [];
    inTable = false;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Handle Markdown Table lines
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      inTable = true;
      tableLines.push(trimmed);
      return;
    } else if (inTable) {
      flushTable(`table-${index}`);
    }

    if (!trimmed) {
      elements.push(<div key={`blank-${index}`} className="h-2" />);
      return;
    }

    // Clean text line
    const text = cleanText(trimmed);

    // Section Title (###)
    if (trimmed.startsWith('###')) {
      elements.push(
        <div key={`h3-${index}`} className="pt-3 pb-1 border-b border-indigo-500/30 flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-indigo-400 shrink-0" />
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {text.replace(/^###\s*/, '')}
          </h3>
        </div>
      );
      return;
    }

    // Subsection Title (#### or 1. 2.)
    if (trimmed.startsWith('####')) {
      elements.push(
        <div key={`h4-${index}`} className="pt-2 pb-1 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
          <h4 className="text-sm sm:text-base font-bold text-emerald-300">
            {text.replace(/^####\s*/, '')}
          </h4>
        </div>
      );
      return;
    }

    // Bullet points (• or * or -)
    if (trimmed.startsWith('•') || trimmed.startsWith('*') || trimmed.startsWith('-')) {
      const bulletText = text.replace(/^[•\*\-]\s*/, '');
      elements.push(
        <div key={`bullet-${index}`} className="flex items-start gap-2.5 pl-2 py-0.5 text-xs sm:text-sm text-slate-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span className="leading-relaxed">{bulletText}</span>
        </div>
      );
      return;
    }

    // Mathematical formula or equation box (contains =, ->, ∈, ⊆, ∪, ∩, √, lim, ∫, ∑)
    const isFormulaLine =
      (text.includes('=') || text.includes('→') || text.includes('∈') || text.includes('⊆') || text.includes('±') || text.includes('√')) &&
      !text.includes(':') && text.length < 80;

    if (isFormulaLine) {
      elements.push(
        <div key={`formula-${index}`} className="my-2 p-3 bg-slate-950 border border-indigo-900/50 rounded-xl font-mono text-xs sm:text-sm text-indigo-200 shadow-inner flex items-center justify-between">
          <span className="font-semibold tracking-wide">{text}</span>
          <span className="text-[10px] text-indigo-400/80 uppercase font-sans font-bold px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800/60">
            Formula
          </span>
        </div>
      );
      return;
    }

    // Standard text paragraph
    elements.push(
      <p key={`p-${index}`} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        {text}
      </p>
    );
  });

  if (inTable) {
    flushTable('table-final');
  }

  return <div className="space-y-2">{elements}</div>;
};

export const ModulesPage: React.FC<ModulesPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('module-math');
  const [selectedUnitNum, setSelectedUnitNum] = useState<number>(1);
  const [selectedTopicId, setSelectedTopicId] = useState<string>('math-1-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedUnitNums, setExpandedUnitNums] = useState<Set<number>>(new Set([1, 2, 3]));
  // Interactive quiz answers map: `${topicId}_${qIndex}` => selectedOptionIndex
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<string, number>>({});

  // Active Subject Module
  const currentSubject = useMemo(() => {
    return EUEE_SUBJECT_MODULES.find(s => s.id === selectedSubjectId) || EUEE_SUBJECT_MODULES[0];
  }, [selectedSubjectId]);

  // Active Unit
  const currentUnit = useMemo(() => {
    return currentSubject.units.find(u => u.unitNumber === selectedUnitNum) || currentSubject.units[0];
  }, [currentSubject, selectedUnitNum]);

  // Active Topic
  const currentTopic = useMemo(() => {
    if (!currentUnit) return null;
    return currentUnit.topics.find(t => t.id === selectedTopicId) || currentUnit.topics[0] || null;
  }, [currentUnit, selectedTopicId]);

  // Ordered flat list of all topics in the current subject for Next / Prev Topic navigation
  const subjectFlatTopics = useMemo(() => {
    const list: Array<{ unit: ModuleUnit; topic: ModuleTopic }> = [];
    currentSubject.units.forEach(unit => {
      unit.topics.forEach(topic => {
        list.push({ unit, topic });
      });
    });
    return list;
  }, [currentSubject]);

  const currentTopicIndex = useMemo(() => {
    if (!currentTopic) return -1;
    return subjectFlatTopics.findIndex(item => item.topic.id === currentTopic.id);
  }, [subjectFlatTopics, currentTopic]);

  const prevTopicItem = currentTopicIndex > 0 ? subjectFlatTopics[currentTopicIndex - 1] : null;
  const nextTopicItem = currentTopicIndex >= 0 && currentTopicIndex < subjectFlatTopics.length - 1 ? subjectFlatTopics[currentTopicIndex + 1] : null;

  const navigateToTopic = (unitNum: number, topicId: string) => {
    setSelectedUnitNum(unitNum);
    setSelectedTopicId(topicId);
    setExpandedUnitNums(prev => new Set([...prev, unitNum]));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Subject Change
  const handleSelectSubject = (subjId: string) => {
    setSelectedSubjectId(subjId);
    const subj = EUEE_SUBJECT_MODULES.find(s => s.id === subjId);
    if (subj && subj.units.length > 0) {
      setSelectedUnitNum(subj.units[0].unitNumber);
      if (subj.units[0].topics.length > 0) {
        setSelectedTopicId(subj.units[0].topics[0].id);
      }
      setExpandedUnitNums(new Set(subj.units.slice(0, 3).map(u => u.unitNumber)));
    }
  };

  // Toggle Unit Accordion
  const toggleUnitExpand = (unitNum: number) => {
    const next = new Set(expandedUnitNums);
    if (next.has(unitNum)) {
      next.delete(unitNum);
    } else {
      next.add(unitNum);
    }
    setExpandedUnitNums(next);
  };

  // Filtered Topics Search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const results: Array<{ subject: SubjectModule; unit: ModuleUnit; topic: ModuleTopic }> = [];

    EUEE_SUBJECT_MODULES.forEach(subj => {
      subj.units.forEach(unit => {
        unit.topics.forEach(topic => {
          if (
            topic.title.toLowerCase().includes(q) ||
            topic.summary.toLowerCase().includes(q) ||
            topic.content.toLowerCase().includes(q) ||
            unit.title.toLowerCase().includes(q)
          ) {
            results.push({ subject: subj, unit, topic });
          }
        });
      });
    });

    return results;
  }, [searchQuery]);

  // Subject Icon Map
  const renderSubjectIcon = (code: string) => {
    switch (code) {
      case 'MATH':
        return <Calculator className="w-5 h-5 text-indigo-400" />;
      case 'ENG':
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      case 'BIO':
        return <Dna className="w-5 h-5 text-emerald-400" />;
      case 'PHYS':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'CHEM':
        return <FlaskConical className="w-5 h-5 text-teal-400" />;
      case 'SAT':
        return <Brain className="w-5 h-5 text-rose-400" />;
      default:
        return <BookMarked className="w-5 h-5 text-indigo-400" />;
    }
  };

  // Paywall guard
  const isPaid = Boolean(
    user?.role === 'admin' ||
    user?.is_premium ||
    (user?.unlocked_grades && user.unlocked_grades.length > 0)
  );
  if (!isPaid) {
    return (
      <LockedFeaturePaywall
        title="Module Browser — Premium Feature"
        description="The EUEE Module Browser with full curriculum breakdown, topic-by-topic study, and interactive quizzes is available to subscribed students only."
        userGrade={user?.grade || 'Grade 12'}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase mb-1">
              <BookMarked className="w-4 h-4 text-emerald-400" />
              <span>Tab: Module</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-300 font-extrabold">{MODULE_CATEGORY_TITLE}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              National Secondary Curriculum Modules
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-semibold">
                Grade 9–12 EUEE
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
              Structured high school curriculum modules formatted as exact handout notes. Master formulas, definitions, set operations, geometry, calculus, and national exam topics without raw code clutter.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search equations, topics, terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Category Header Bar */}
        <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-950/80 border border-indigo-800/60 text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-white">
                  Category: <span className="text-indigo-400">{MODULE_CATEGORY_TITLE}</span>
                </h2>
                <p className="text-xs text-slate-400">
                  Main EUEE Secondary Preparatory Subjects
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800/80 flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                Formatted strictly as clean handout text with direct mathematical notation.
              </span>
            </div>
          </div>

          {/* 6 Main EUEE Subject Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {EUEE_SUBJECT_MODULES.map((subj) => {
              const isActive = subj.id === selectedSubjectId;
              return (
                <button
                  key={subj.id}
                  onClick={() => handleSelectSubject(subj.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all group ${
                    isActive
                      ? 'bg-gradient-to-b from-indigo-900/80 to-slate-900 border-indigo-500 shadow-md shadow-indigo-950/50 ring-1 ring-indigo-500/50'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-1.5 ${isActive ? 'bg-indigo-600/30' : 'bg-slate-900'}`}>
                    {renderSubjectIcon(subj.subjectCode)}
                  </div>
                  <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {subj.subjectName}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    {subj.units.length} {subj.units.length === 1 ? 'Unit' : 'Units'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results Dropdown Overlay if searching */}
        {searchQuery.trim() !== '' ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-8 shadow-xl">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Search className="w-4 h-4 text-indigo-400" />
              Found {searchResults.length} Module Topics matching "{searchQuery}":
            </h3>

            {searchResults.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">
                No module topics found matching "{searchQuery}". Try searching for terms like "Sets", "Derivative", "Polygon", "Matrix", "Logarithm", "Venn", or "Calculus".
              </p>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {searchResults.map(({ subject, unit, topic }) => (
                  <button
                    key={`${subject.id}-${unit.unitNumber}-${topic.id}`}
                    onClick={() => {
                      setSelectedSubjectId(subject.id);
                      setSelectedUnitNum(unit.unitNumber);
                      setSelectedTopicId(topic.id);
                      setSearchQuery('');
                      setExpandedUnitNums(prev => new Set([...prev, unit.unitNumber]));
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[11px] font-bold text-indigo-400">
                        <span>{subject.subjectName}</span>
                        <span>•</span>
                        <span>Unit {unit.unitNumber}: {unit.title}</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5 group-hover:text-emerald-400 transition">
                        {topic.topicNumber} {topic.title}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {topic.summary}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {/* 2-Column Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Chapters & Units Navigation Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-sm font-bold text-white">
                    {currentSubject.subjectName} Units
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400 font-semibold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {currentSubject.units.length} Units Total
                </span>
              </div>

              {currentSubject.authorNote && (
                <div className="text-[11px] text-indigo-300 bg-indigo-950/50 p-2.5 rounded-xl border border-indigo-800/40 mb-3 leading-relaxed flex items-start gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-indigo-200">Source Handout: </span>
                    {currentSubject.authorNote}
                  </div>
                </div>
              )}

              {/* Units Accordion Tree */}
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                {currentSubject.units.map((unit) => {
                  const isUnitSelected = unit.unitNumber === selectedUnitNum;
                  const isExpanded = expandedUnitNums.has(unit.unitNumber);

                  return (
                    <div
                      key={unit.unitNumber}
                      className={`rounded-xl border transition-all overflow-hidden ${
                        isUnitSelected
                          ? 'border-indigo-500/80 bg-slate-900'
                          : 'border-slate-800/80 bg-slate-950/50'
                      }`}
                    >
                      {/* Unit Header */}
                      <button
                        onClick={() => {
                          setSelectedUnitNum(unit.unitNumber);
                          toggleUnitExpand(unit.unitNumber);
                          if (unit.topics.length > 0) {
                            setSelectedTopicId(unit.topics[0].id);
                          }
                        }}
                        className="w-full text-left p-3 flex items-center justify-between gap-2 hover:bg-slate-900/80 transition"
                      >
                        <div className="flex items-start gap-2 min-w-0">
                          <span className={`text-xs font-black px-2 py-0.5 rounded-lg shrink-0 ${
                            isUnitSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
                          }`}>
                            U{unit.unitNumber}
                          </span>
                          <div className="min-w-0">
                            <h4 className={`text-xs font-bold truncate ${
                              isUnitSelected ? 'text-white' : 'text-slate-300'
                            }`}>
                              {unit.title.replace(/^UNIT\s+[A-Z0-9]+:\s*/i, '')}
                            </h4>
                            <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                              {unit.topics.length} Topics
                            </p>
                          </div>
                        </div>

                        {unit.topics.length > 0 && (
                          <div className="text-slate-500 shrink-0">
                            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                          </div>
                        )}
                      </button>

                      {/* Topics List under Unit */}
                      {isExpanded && unit.topics.length > 0 && (
                        <div className="bg-slate-950/80 border-t border-slate-800/80 p-1.5 space-y-1">
                          {unit.topics.map((t) => {
                            const isTopicActive = t.id === selectedTopicId && isUnitSelected;
                            return (
                              <button
                                key={t.id}
                                onClick={() => {
                                  setSelectedUnitNum(unit.unitNumber);
                                  setSelectedTopicId(t.id);
                                }}
                                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition ${
                                  isTopicActive
                                    ? 'bg-indigo-600/30 text-emerald-300 font-bold border border-indigo-500/40'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                                }`}
                              >
                                <span className="truncate pr-2">
                                  <span className="text-slate-500 mr-1.5">{t.topicNumber}</span>
                                  {t.title}
                                </span>
                                {isTopicActive && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Module Topic Content Viewer (8 cols) */}
          <div className="lg:col-span-8">
            {currentTopic ? (
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-6">
                
                {/* Topic Title & Navigation Breadcrumb */}
                <div className="border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-1.5">
                    <span>{currentSubject.subjectName}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Unit {currentUnit.unitNumber}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-emerald-400">{currentTopic.topicNumber}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {currentTopic.topicNumber} {cleanText(currentTopic.title)}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <span className="font-bold text-indigo-300">Summary: </span>
                    {cleanText(currentTopic.summary)}
                  </p>
                </div>

                {/* Render Handout Content in Clean Structured Format */}
                <div className="bg-slate-950/40 border border-slate-800/80 p-4 rounded-xl">
                  <ModuleContentRenderer content={currentTopic.content} />
                </div>

                {/* Render Worked Examples if present */}
                {currentTopic.workedExamples && currentTopic.workedExamples.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
                    <h3 className="text-sm font-black text-amber-300 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      Step-by-Step Worked Examples
                    </h3>

                    {currentTopic.workedExamples.map((ex, idx) => (
                      <div key={idx} className="bg-slate-950/80 border border-amber-900/30 rounded-xl p-4 space-y-2">
                        <div className="text-xs sm:text-sm font-bold text-amber-200">
                          Problem {idx + 1}: {cleanText(ex.problem)}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-200 bg-slate-900 p-3 rounded-lg border border-slate-800 whitespace-pre-line leading-relaxed font-sans">
                          {cleanText(ex.solution)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render Interactive Practice Questions if present */}
                {currentTopic.practiceQuestions && currentTopic.practiceQuestions.length > 0 && (() => {
                  const questions = currentTopic.practiceQuestions;
                  const answeredCount = questions.filter((_, idx) => userSelectedOptions[`${currentTopic.id}_${idx}`] !== undefined).length;
                  const correctCount = questions.filter((pq, idx) => userSelectedOptions[`${currentTopic.id}_${idx}`] === pq.correctIndex).length;

                  return (
                    <div className="mt-8 pt-6 border-t border-slate-800 space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                        <div>
                          <h3 className="text-sm sm:text-base font-black text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                            Self-Assessment Practice Questions ({questions.length})
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Click your choice to test your knowledge. Explanations unlock once answered!
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200">
                            {answeredCount}/{questions.length} Answered
                            {answeredCount > 0 && (
                              <span className="ml-1.5 text-emerald-400 font-extrabold">({correctCount} Correct)</span>
                            )}
                          </div>
                          {answeredCount > 0 && (
                            <button
                              onClick={() => {
                                setUserSelectedOptions(prev => {
                                  const next = { ...prev };
                                  questions.forEach((_, idx) => delete next[`${currentTopic.id}_${idx}`]);
                                  return next;
                                });
                              }}
                              className="px-2.5 py-1 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1 transition"
                            >
                              <RotateCcw className="w-3 h-3" />
                              Reset
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {questions.map((pq, idx) => {
                          const key = `${currentTopic.id}_${idx}`;
                          const selectedOption = userSelectedOptions[key];
                          const isAnswered = selectedOption !== undefined;
                          const isCorrect = selectedOption === pq.correctIndex;

                          return (
                            <div
                              key={idx}
                              className={`bg-slate-950/90 rounded-xl p-4 sm:p-5 border transition-all ${
                                isAnswered
                                  ? isCorrect
                                    ? 'border-emerald-800/60 shadow-sm shadow-emerald-950/40'
                                    : 'border-rose-900/60 shadow-sm shadow-rose-950/40'
                                  : 'border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              {/* Question Header */}
                              <div className="flex items-start justify-between gap-3 mb-3">
                                <div className="text-xs sm:text-sm font-bold text-white flex items-start gap-2">
                                  <span className="px-2 py-0.5 rounded-md bg-indigo-950/80 text-indigo-300 font-extrabold text-xs shrink-0 border border-indigo-800/40">
                                    Q{idx + 1}
                                  </span>
                                  <span className="leading-snug">{cleanText(pq.question)}</span>
                                </div>

                                {isAnswered && (
                                  <button
                                    onClick={() => {
                                      setUserSelectedOptions(prev => {
                                        const next = { ...prev };
                                        delete next[key];
                                        return next;
                                      });
                                    }}
                                    title="Try this question again"
                                    className="text-xs text-slate-400 hover:text-amber-300 p-1 rounded hover:bg-slate-900 shrink-0"
                                  >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>

                              {/* Interactive Options A, B, C, D */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                                {pq.options.map((opt, oIdx) => {
                                  const optionLetter = String.fromCharCode(65 + oIdx);
                                  const isThisSelected = selectedOption === oIdx;
                                  const isThisCorrect = oIdx === pq.correctIndex;

                                  let btnClass = 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-indigo-500/70 hover:bg-slate-800/90 cursor-pointer active:scale-[0.99]';

                                  if (isAnswered) {
                                    if (isThisCorrect) {
                                      btnClass = 'bg-emerald-950/80 border-emerald-500 text-emerald-100 font-semibold ring-1 ring-emerald-500/50 cursor-default';
                                    } else if (isThisSelected && !isThisCorrect) {
                                      btnClass = 'bg-rose-950/80 border-rose-500 text-rose-100 font-semibold ring-1 ring-rose-500/50 cursor-default';
                                    } else {
                                      btnClass = 'bg-slate-900/40 border-slate-800/60 text-slate-500 opacity-60 cursor-default';
                                    }
                                  }

                                  return (
                                    <button
                                      key={oIdx}
                                      disabled={isAnswered}
                                      onClick={() => {
                                        setUserSelectedOptions(prev => ({ ...prev, [key]: oIdx }));
                                      }}
                                      className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${btnClass}`}
                                    >
                                      <span
                                        className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                                          isAnswered && isThisCorrect
                                            ? 'bg-emerald-500 text-slate-950'
                                            : isAnswered && isThisSelected
                                            ? 'bg-rose-500 text-white'
                                            : 'bg-slate-800 text-slate-300'
                                        }`}
                                      >
                                        {isAnswered && isThisCorrect ? (
                                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        ) : isAnswered && isThisSelected ? (
                                          <X className="w-3.5 h-3.5 stroke-[3]" />
                                        ) : (
                                          optionLetter
                                        )}
                                      </span>
                                      <span className="mt-0.5 leading-snug">{cleanText(opt)}</span>
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Reveal Feedback & Explanation ONLY after student answers */}
                              {isAnswered && (
                                <div
                                  className={`mt-3.5 p-3 rounded-xl border text-xs leading-relaxed animate-in fade-in duration-200 ${
                                    isCorrect
                                      ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                                      : 'bg-slate-900/95 border-amber-900/40 text-slate-200'
                                  }`}
                                >
                                  <div className="flex items-center gap-1.5 font-bold mb-1">
                                    {isCorrect ? (
                                      <span className="text-emerald-400 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct Answer!
                                      </span>
                                    ) : (
                                      <span className="text-rose-400 flex items-center gap-1">
                                        <X className="w-3.5 h-3.5" /> Incorrect (Correct: Option {String.fromCharCode(65 + pq.correctIndex)})
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-slate-300">
                                    <span className="font-bold text-indigo-300">Explanation: </span>
                                    {cleanText(pq.explanation)}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* Bottom Navigation & Topic Flow Control */}
                <div className="pt-6 border-t border-slate-800 space-y-4">
                  {/* Prev / Next Topic Navigation Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {prevTopicItem ? (
                      <button
                        onClick={() => navigateToTopic(prevTopicItem.unit.unitNumber, prevTopicItem.topic.id)}
                        className="p-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 text-left transition group active:scale-[0.99]"
                      >
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-indigo-400 mb-1">
                          <ArrowLeft className="w-3.5 h-3.5 transition group-hover:-translate-x-1" />
                          <span>Previous Topic</span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white truncate">
                          {prevTopicItem.topic.topicNumber} {cleanText(prevTopicItem.topic.title)}
                        </div>
                      </button>
                    ) : (
                      <div className="hidden sm:block" />
                    )}

                    {nextTopicItem ? (
                      <button
                        onClick={() => navigateToTopic(nextTopicItem.unit.unitNumber, nextTopicItem.topic.id)}
                        className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/80 via-teal-950/60 to-slate-900 border border-emerald-600/50 hover:border-emerald-500 text-right transition group active:scale-[0.99] shadow-md shadow-emerald-950/40"
                      >
                        <div className="flex items-center justify-end gap-1.5 text-[11px] font-bold text-emerald-400 group-hover:text-emerald-300 mb-1">
                          <span>Next Topic</span>
                          <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-1" />
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-100 truncate">
                          {nextTopicItem.topic.topicNumber} {cleanText(nextTopicItem.topic.title)}
                        </div>
                      </button>
                    ) : (
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-right">
                        <div className="text-[11px] font-bold text-emerald-400 mb-1">End of Curriculum</div>
                        <div className="text-xs text-slate-400">You completed all topics in {currentSubject.subjectName}!</div>
                      </div>
                    )}
                  </div>

                  {/* Secondary AI Tutor & Subject Info Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <div className="text-xs text-slate-400">
                      Topic <span className="text-white font-bold">{currentTopicIndex + 1}</span> of{' '}
                      <span className="text-white font-bold">{subjectFlatTopics.length}</span> in{' '}
                      <span className="text-indigo-300 font-bold">{currentSubject.subjectName}</span>
                    </div>

                    <button
                      onClick={() => {
                        onNavigate('ai-tutor', {
                          initialPrompt: `Help me understand ${currentSubject.subjectName} ${currentTopic.topicNumber} ${currentTopic.title}`
                        });
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Ask AI Tutor About This Topic</span>
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 space-y-3">
                <BookMarked className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-base font-bold text-white">Select a Module Topic</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Choose any Unit or Topic from the left navigation tree to view the structured module notes.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
