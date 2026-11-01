import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  CalendarDays,
  Flame,
  Sparkles,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Clock,
  Layers,
  Award,
  Search,
  Check,
  Send,
  Loader2,
  BookmarkCheck,
  GraduationCap
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { ExamQuestion } from '../types';
import { LockedFeaturePaywall } from '../components/LockedFeaturePaywall';

interface LoggedTopic {
  id: string;
  topic_name: string;
  subject_name: string;
  date: string;
  score: number;
  total_questions: number;
}

interface DailyTopicPageProps {
  onNavigate?: (route: string, params?: Record<string, any>) => void;
}

export const DailyTopicPage: React.FC<DailyTopicPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [topicInput, setTopicInput] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Chemistry');
  const [loading, setLoading] = useState(false);
  const [streakCount, setStreakCount] = useState<number>(5);
  const [todayCompleted, setTodayCompleted] = useState<boolean>(false);

  // Active topic explanation and questions
  const [topicData, setTopicData] = useState<{
    topic: string;
    subject: string;
    explanation: string;
    keyPoints: string[];
    ethiopianContext: string;
    questions: ExamQuestion[];
  } | null>(null);

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [pastTopics, setPastTopics] = useState<LoggedTopic[]>([]);

  // Load history from localStorage
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(`ethio_daily_topics_${user?.id}`);
      if (savedHistory) {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed)) {
          setPastTopics(parsed);
        }
      } else {
        setPastTopics([
          { id: 'dt-1', topic_name: 'Faraday\'s Laws of Electrolysis', subject_name: 'Chemistry', date: 'Yesterday', score: 3, total_questions: 3 },
          { id: 'dt-2', topic_name: 'Mendelian Laws of Inheritance', subject_name: 'Biology', date: '2 days ago', score: 3, total_questions: 3 },
          { id: 'dt-3', topic_name: '1D Kinematics and Acceleration', subject_name: 'Physics', date: '3 days ago', score: 2, total_questions: 3 },
          { id: 'dt-4', topic_name: 'Battle of Adwa & Treaty of Wuchale', subject_name: 'History', date: '4 days ago', score: 3, total_questions: 3 }
        ]);
      }

      const todayKey = new Date().toISOString().slice(0, 10);
      const todayStatus = localStorage.getItem(`ethio_daily_completed_${user?.id}_${todayKey}`);
      if (todayStatus) {
        setTodayCompleted(true);
      }

      const savedStreak = localStorage.getItem(`ethio_streak_${user?.id}`);
      if (savedStreak) {
        setStreakCount(parseInt(savedStreak, 10) || 5);
      }
    } catch {}
  }, [user?.id]);

  // Converts the server payload ({ success, analysis: { summary, keyConcepts, ... practiceQuestions } })
  // into the shape this page renders. Returns null if the payload is unusable so the page never crashes.
  const normalizeTopicResponse = (data: any, topic: string, subject: string) => {
    const a = data?.analysis ?? data;
    if (!a || typeof a !== 'object') return null;

    // Already in page shape
    if (typeof a.explanation === 'string' && Array.isArray(a.questions) && a.questions.length > 0) {
      return {
        topic: a.topic || topic,
        subject: a.subject || subject,
        explanation: a.explanation,
        keyPoints: Array.isArray(a.keyPoints) ? a.keyPoints : [],
        ethiopianContext: a.ethiopianContext || '',
        questions: a.questions
      };
    }

    if (typeof a.summary !== 'string' || !Array.isArray(a.practiceQuestions) || a.practiceQuestions.length === 0) {
      return null;
    }

    const list = (arr: any) => (Array.isArray(arr) ? arr.filter((x: any) => typeof x === 'string' && x.trim()) : []);
    const concepts = list(a.keyConcepts);
    const formulas = list(a.formulasAndRules);
    const traps = list(a.commonExamTraps);

    let explanation = `### ${topic}\n${a.summary}`;
    if (concepts.length) explanation += `\n\n#### Key Concepts\n${concepts.map((c: string) => `- ${c}`).join('\n')}`;
    if (traps.length) explanation += `\n\n#### Common EUEE Exam Traps\n${traps.map((c: string) => `- ${c}`).join('\n')}`;
    if (typeof a.memoryMnemonic === 'string' && a.memoryMnemonic.trim()) {
      explanation += `\n\n#### Memory Anchor\n${a.memoryMnemonic}`;
    }

    const letters = ['A', 'B', 'C', 'D'];
    const stamp = Date.now();
    const questions: ExamQuestion[] = a.practiceQuestions.slice(0, 5).map((pq: any, i: number) => {
      const opts: string[] = Array.isArray(pq?.options) ? pq.options.map((o: any) => String(o)) : [];
      const idx = Number.isInteger(pq?.correctIndex) && pq.correctIndex >= 0 && pq.correctIndex < 4 ? pq.correctIndex : 0;
      return {
        id: `dt-q${i + 1}-${stamp}`,
        exam_id: 'daily-practice',
        question_number: i + 1,
        question_text: String(pq?.question || `Practice question ${i + 1}`),
        option_a: opts[0] || '',
        option_b: opts[1] || '',
        option_c: opts[2] || '',
        option_d: opts[3] || '',
        correct_answer: letters[idx],
        explanation: String(pq?.explanation || ''),
        difficulty: 'Medium'
      } as ExamQuestion;
    });

    return {
      topic,
      subject,
      explanation,
      keyPoints: formulas,
      ethiopianContext: '',
      questions
    };
  };

  const handleFetchTopicExplanation = async (topicQuery: string, subjectQuery: string) => {
    if (!topicQuery.trim()) return;
    setLoading(true);
    setQuizSubmitted(false);
    setSelectedAnswers({});

    try {
      // Call backend AI topic explainer
      const res = await fetch('/api/daily-topics/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': user?.id || 'usr-student' },
        body: JSON.stringify({
          topic: topicQuery.trim(),
          subject: subjectQuery,
          grade: user?.grade || 'Grade 12 - Natural Science',
          grade_id: user?.grade_id || 'grade-12-natural'
        })
      });

      if (res.ok) {
        const data = await res.json();
        const normalized = normalizeTopicResponse(data, topicQuery.trim(), subjectQuery);
        if (normalized) {
          setTopicData(normalized);
        } else {
          synthesizeFallbackTopic(topicQuery.trim(), subjectQuery);
        }
      } else {
        // High-yield fallback synthesis
        synthesizeFallbackTopic(topicQuery.trim(), subjectQuery);
      }
    } catch (err) {
      synthesizeFallbackTopic(topicQuery.trim(), subjectQuery);
    } finally {
      setLoading(false);
    }
  };

  const synthesizeFallbackTopic = (topic: string, subject: string) => {
    setTopicData({
      topic,
      subject,
      explanation: `### Core Curriculum Mastery: ${topic}
In the Ethiopian Secondary School Curriculum (${user?.grade || 'Grade 12'}), mastering **${topic}** is critical for school assessments and national entrance examinations (EUEE).

#### Fundamental Principles:
1. **Theoretical Definition:** ${topic} establishes foundational mathematical and physical relationships that govern system behavior and natural laws.
2. **Key Formulas & Quantitative Relationships:** Ensure all units are converted to standard SI base units (kg, m, s, mol, A) before solving quantitative derivations.
3. **Problem-Solving Framework:** Always identify the given variables, state the governing theorem explicitly, and verify dimensional consistency.`,
      keyPoints: [
        `Core formulation: Ensure rigorous application of standard definitions for ${topic}.`,
        'Examiner trap: Watch out for sign conventions, unit conversions, and boundary conditions.',
        'Study strategy: Review past entrance exam questions matching this specific syllabus section.'
      ],
      ethiopianContext: `Concepts of ${topic} are directly applied across modern Ethiopian industry, telecommunications (Ethio Telecom), renewable energy generation (GERD, geothermal power), and agricultural modernization.`,
      questions: [
        {
          id: `dt-q1-${Date.now()}`,
          exam_id: 'daily-practice',
          question_number: 1,
          question_text: `Under standard Ethiopian curriculum guidelines, which statement best characterizes the primary scientific principle of ${topic}?`,
          option_a: 'It violates the conservation of energy under closed conditions',
          option_b: 'It provides direct proportional relationships between measurable physical quantities',
          option_c: 'It is only applicable at absolute zero temperature',
          option_d: 'It applies solely to macroscopic classical systems without atomic interactions',
          correct_answer: 'B',
          explanation: `${topic} establishes consistent, experimentally verified mathematical relationships between observable physical variables.`,
          difficulty: 'Easy'
        },
        {
          id: `dt-q2-${Date.now()}`,
          exam_id: 'daily-practice',
          question_number: 2,
          question_text: `When applying ${topic} in quantitative problem solving, which step is essential to avoid common exam pitfalls?`,
          option_a: 'Ignoring friction and temperature variations completely',
          option_b: 'Converting all values into standard SI units before calculation',
          option_c: 'Relying exclusively on rough mental approximations',
          option_d: 'Assuming all reactions proceed with 100% theoretical yield',
          correct_answer: 'B',
          explanation: 'Standard unit consistency (SI units) prevents conversion errors frequently targeted by national examination distractor choices.',
          difficulty: 'Medium'
        },
        {
          id: `dt-q3-${Date.now()}`,
          exam_id: 'daily-practice',
          question_number: 3,
          question_text: `How is the principle of ${topic} applied in Ethiopian national development and modern technology?`,
          option_a: 'In non-functional historical museum archives only',
          option_b: 'In engineering infrastructure, industrial manufacturing, and agricultural advancements',
          option_c: 'It has been entirely replaced by outdated manual labor methods',
          option_d: 'In theoretical cosmology with no terrestrial application',
          correct_answer: 'B',
          explanation: 'Curriculum science topics directly inform contemporary infrastructure, medical diagnostic technology, and renewable power systems nationwide.',
          difficulty: 'Easy'
        }
      ]
    });
  };

  const handleSelectAnswer = (qId: string, opt: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: opt }));
  };

  const handleSubmitQuiz = () => {
    if (!topicData) return;
    let score = 0;
    topicData.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct_answer) {
        score += 1;
      }
    });

    setQuizScore(score);
    setQuizSubmitted(true);

    // Save to daily history
    const newEntry: LoggedTopic = {
      id: `dt-${Date.now()}`,
      topic_name: topicData.topic,
      subject_name: topicData.subject,
      date: 'Today',
      score,
      total_questions: topicData.questions.length
    };

    const updated = [newEntry, ...pastTopics.filter(t => t.date !== 'Today')];
    setPastTopics(updated);

    const todayKey = new Date().toISOString().slice(0, 10);
    const newStreak = streakCount + 1;
    setStreakCount(newStreak);
    setTodayCompleted(true);

    try {
      localStorage.setItem(`ethio_daily_topics_${user?.id}`, JSON.stringify(updated));
      localStorage.setItem(`ethio_daily_completed_${user?.id}_${todayKey}`, 'true');
      localStorage.setItem(`ethio_streak_${user?.id}`, newStreak.toString());
    } catch {}
  };

  const subjects = ['Chemistry', 'Physics', 'Mathematics', 'Biology', 'Information Technology', 'History', 'Geography', 'English', 'Citizenship / Civics'];

  const quickTopicSuggestions = [
    { title: 'Faraday\'s Laws of Electrolysis', sub: 'Chemistry' },
    { title: 'Work, Energy, and Power', sub: 'Physics' },
    { title: 'DNA Replication & Protein Synthesis', sub: 'Biology' },
    { title: 'Quadratic Equations & Functions', sub: 'Mathematics' },
    { title: 'Computer Network Topologies (LAN, WAN)', sub: 'Information Technology' },
    { title: 'The Victory of Adwa (1896)', sub: 'History' }
  ];

  // Paywall guard
  const isPaid = Boolean(
    user?.role === 'admin' ||
    user?.is_premium ||
    (user?.unlocked_grades && user.unlocked_grades.length > 0)
  );
  if (!isPaid) {
    return (
      <LockedFeaturePaywall
        title="Daily Topic Hub — Premium Feature"
        description="The Daily Topic Hub with AI-curated study topics, daily streaks, and topic practice sessions is available to subscribed students only. Subscribe to stay on track every day!"
        userGrade={user?.grade || 'Grade 12'}
        onNavigate={onNavigate!}
      />
    );
  }

  return (
    <div className="flex-1 bg-slate-950 text-slate-100 min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-6">
        {/* Top Banner: Daily Streak & Motivation */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-amber-950/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400 fill-current" />
                  <span>{streakCount}-Day Learning Streak!</span>
                </span>
                {todayCompleted && (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Today's Topic Mastered
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span>Daily Curriculum Learning Hub</span>
                <CalendarDays className="w-6 h-6 text-emerald-400" />
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                What did you learn in school today? Enter your daily topic to get a deep curriculum breakdown, key formulas, and instant practice questions to solidify your mastery!
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-center min-w-[150px]">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Today's Goal</span>
              <span className="text-xl font-black text-emerald-400 block mt-0.5">1 Daily Topic</span>
              <span className="text-[11px] text-slate-400 font-mono">
                {todayCompleted ? '✓ Completed' : 'Pending Review'}
              </span>
            </div>
          </div>
        </div>

        {/* Topic Input Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <label className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>Enter What You Learned in Class Today:</span>
            </label>
            <p className="text-xs text-slate-400">
              Type the chapter, concept, or theorem your teacher covered today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-xs text-white rounded-xl px-3.5 py-3 focus:outline-none focus:border-emerald-500 sm:w-48"
            >
              {subjects.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <div className="relative flex-1">
              <input
                type="text"
                placeholder="e.g. Faraday's Second Law, Mendelian Genetics, Quadratic Formula..."
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleFetchTopicExplanation(topicInput, selectedSubject);
                }}
                className="w-full bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              onClick={() => handleFetchTopicExplanation(topicInput, selectedSubject)}
              disabled={loading || !topicInput.trim()}
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/25 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Explain & Practice</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Suggestions Chips */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-400 mr-1">
              Suggested Topics:
            </span>
            {quickTopicSuggestions.map((st, i) => (
              <button
                key={i}
                onClick={() => {
                  setTopicInput(st.title);
                  setSelectedSubject(st.sub);
                  handleFetchTopicExplanation(st.title, st.sub);
                }}
                className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
              >
                {st.title} ({st.sub})
              </button>
            ))}
          </div>
        </div>

        {/* Display Explanation & Questions */}
        {topicData && (
          <div className="space-y-6">
            {/* Pedagogical Explanation Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="border-b border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {topicData.subject} • Daily Curriculum Deep-Dive
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {topicData.topic}
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Syllabus Aligned
                </span>
              </div>

              {/* Formatted Markdown */}
              <div className="markdown-body font-sans text-xs sm:text-sm text-slate-200 leading-relaxed space-y-3">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    h3: ({ node, ...props }) => <h3 className="text-base font-bold text-emerald-400 mt-4 mb-2" {...props} />,
                    h4: ({ node, ...props }) => <h4 className="text-sm font-semibold text-amber-300 mt-3 mb-1" {...props} />,
                    p: ({ node, ...props }) => <p className="leading-relaxed my-2" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-1.5 my-2" {...props} />
                  }}
                >
                  {topicData.explanation}
                </ReactMarkdown>
              </div>

              {/* Key Formula / Points Pill */}
              {topicData.keyPoints && topicData.keyPoints.length > 0 && (
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Key Takeaways & Formulas to Memorize:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {topicData.keyPoints.map((kp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ethiopian Context */}
              {topicData.ethiopianContext && (
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 text-xs text-emerald-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-emerald-300">
                    <span>🇪🇹 Real-World Application in Ethiopia:</span>
                  </span>
                  <p className="leading-relaxed">{topicData.ethiopianContext}</p>
                </div>
              )}
            </div>

            {/* Daily Mastery Practice Quiz */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Daily Mastery Check
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    Test What You Learned (3 Practice Questions)
                  </h3>
                </div>
                {quizSubmitted && (
                  <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
                    Score: {quizScore} / {topicData.questions.length} ({Math.round((quizScore / topicData.questions.length) * 100)}%)
                  </div>
                )}
              </div>

              {/* Question List */}
              <div className="space-y-5">
                {topicData.questions.map((q, idx) => {
                  const userAns = selectedAnswers[q.id];
                  const isCorrect = userAns === q.correct_answer;

                  return (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-bold text-white">Question {idx + 1}</span>
                        {quizSubmitted && (
                          <span className={`font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {isCorrect ? '✓ Correct' : `✗ Correct was (${q.correct_answer})`}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {q.question_text}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          { key: 'A', text: q.option_a },
                          { key: 'B', text: q.option_b },
                          { key: 'C', text: q.option_c },
                          { key: 'D', text: q.option_d }
                        ].map(opt => {
                          const isSelected = userAns === opt.key;
                          let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

                          if (isSelected) {
                            btnStyle = 'bg-emerald-500/20 border-emerald-500/60 text-emerald-200 font-bold';
                          }

                          if (quizSubmitted) {
                            if (opt.key === q.correct_answer) {
                              btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                            } else if (isSelected && !isCorrect) {
                              btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                            }
                          }

                          return (
                            <button
                              key={opt.key}
                              onClick={() => handleSelectAnswer(q.id, opt.key)}
                              disabled={quizSubmitted}
                              className={`p-3 rounded-xl border text-xs text-left transition flex items-center gap-2 ${btnStyle}`}
                            >
                              <span className="w-5 h-5 rounded-md bg-slate-800 font-mono font-bold flex items-center justify-center shrink-0">
                                {opt.key}
                              </span>
                              <span className="line-clamp-2">{opt.text}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(selectedAnswers).length < topicData.questions.length}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-extrabold text-xs rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <BookmarkCheck className="w-4 h-4" />
                  <span>Submit Practice & Log Today's Streak</span>
                </button>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                  <div className="text-base font-bold text-emerald-300 flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Today's Topic Mastered! +1 Day to Streak</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Your learning log has been recorded. Review this topic in your spaced recall practice to retain it forever.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Past Logged Topics History */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Your Daily Topic History</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {(Array.isArray(pastTopics) ? pastTopics : []).length} Topics Mastered
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Array.isArray(pastTopics) ? pastTopics : []).map((pt) => (
              <div
                key={pt.id}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3"
              >
                <div>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                    {pt.subject_name} • {pt.date}
                  </span>
                  <span className="font-bold text-white text-xs block line-clamp-1">
                    {pt.topic_name}
                  </span>
                </div>

                <div className="text-right shrink-0">
                  <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono font-bold text-xs">
                    {pt.score}/{pt.total_questions}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
