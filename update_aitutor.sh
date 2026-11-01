#!/bin/bash
cat << 'INNEREOF' > src/pages/AITutor.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { MathMarkdownRenderer } from '../components/MathMarkdownRenderer';
import {
  Sparkles, BookOpen, Send, Award, Layers, ArrowRight, CheckCircle2, AlertCircle,
  RefreshCw, ExternalLink, ShieldCheck, Lock, ChevronRight, Info, Cpu, Zap, Activity,
  Key, Clock, History, Table, Trash2, Bot, User, BookMarked
} from 'lucide-react';
import { AIExplanationResult, ExamQuestion } from '../types';
import { QuestionDiagramViewer } from '../components/QuestionDiagramViewer';
import { FormattedQuestionText, renderRichInline } from '../components/FormattedQuestionText';

interface AITutorProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const AITutor: React.FC<AITutorProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [questionInput, setQuestionInput] = useState('');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  
  // Chat session state
  const [chatSession, setChatSession] = useState<AIExplanationResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dailyRemaining, setDailyRemaining] = useState<number>(() => {
    const used = user?.daily_ai_requests_count || 0;
    return Math.max(0, 100 - used);
  });
  
  const [aiPracticeLoading, setAiPracticeLoading] = useState(false);
  const [generatedPracticeQuestion, setGeneratedPracticeQuestion] = useState<ExamQuestion | null>(null);
  const [practiceAnswerFeedback, setPracticeAnswerFeedback] = useState<{ selected: string; isCorrect: boolean } | null>(null);
  const [healthStats, setHealthStats] = useState<any>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to latest
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatSession, loading]);

  const isStudentPaid = Boolean(
    user?.is_premium ||
    user?.role === 'admin' ||
    (user?.unlocked_grades && user.unlocked_grades.length > 0)
  );

  useEffect(() => {
    fetch('/api/ai/health')
      .then(res => res.json())
      .then(data => setHealthStats(data))
      .catch(() => {});
  }, []);

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

    setQuestionInput('');
    setLoading(true);
    setErrorMessage(null);
    setGeneratedPracticeQuestion(null);
    setPracticeAnswerFeedback(null);
    
    // Optimistic user message (placeholder)
    const optimisticId = 'temp-' + Date.now();
    setChatSession(prev => [...prev, {
      id: optimisticId,
      question: q,
      answer: '...',
      explanation: '...',
      source_level: 'general_ai',
      has_textbook_reference: false,
      sources: [],
      related_exam_questions: [],
      created_at: new Date().toISOString()
    }]);

    try {
      const res = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || 'usr-student-premium'
        },
        body: JSON.stringify({
          question: q,
          subject_id: effectiveSubject !== 'all' ? effectiveSubject : undefined
        })
      });

      if (res.ok) {
        const data: AIExplanationResult = await res.json();
        setChatSession(prev => prev.map(msg => msg.id === optimisticId ? data : msg));
        
        if (typeof (data as any).daily_requests_remaining === 'number') {
          setDailyRemaining((data as any).daily_requests_remaining);
        }
      } else if (res.status === 403) {
        onNavigate('payment');
      } else if (res.status === 429) {
        const errJson = await res.json().catch(() => ({}));
        setDailyRemaining(0);
        setErrorMessage(errJson.message || 'Daily limit reached.');
        setChatSession(prev => prev.filter(msg => msg.id !== optimisticId));
      } else {
        const errorData = await res.json().catch(() => ({}));
        setErrorMessage(errorData.message || 'Unable to reach the AI tutor right now.');
        setChatSession(prev => prev.filter(msg => msg.id !== optimisticId));
      }
    } catch (err) {
      console.error('Failed to ask AI Tutor:', err);
      setErrorMessage('Network connection interrupted. Please try again.');
      setChatSession(prev => prev.filter(msg => msg.id !== optimisticId));
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

  const handleSelectPracticeOption = (opt: string) => {
    if (!generatedPracticeQuestion) return;
    const isCorrect = opt === generatedPracticeQuestion.correct_answer;
    setPracticeAnswerFeedback({ selected: opt, isCorrect });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4 pb-20 flex flex-col h-[calc(100vh-80px)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Bot className="w-48 h-48 text-indigo-400 transform rotate-12" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                EthioLearn AI Tutor
              </span>
              {healthStats && (
                <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Activity className="w-3.5 h-3.5" />
                  {healthStats.status}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Your Personal Academic Guide
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ask any concept. I'll provide clear explanations with proper math formatting, insightful diagrams, and direct citations to your verified textbooks.
            </p>
          </div>
          
          <div className="flex flex-col gap-2 min-w-[220px]">
            {!isStudentPaid ? (
              <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl text-xs text-amber-200 flex flex-col">
                <div className="flex items-center gap-1.5 mb-1 text-amber-400 font-bold">
                  <Lock className="w-4 h-4" /> Premium Access
                </div>
                <span className="text-amber-200/80 mb-2">Unlock the AI Tutor with step-by-step guidance.</span>
                <button
                  onClick={() => onNavigate('payment')}
                  className="w-full py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold transition shadow"
                >
                  Unlock
                </button>
              </div>
            ) : (
              <div className="bg-slate-950/60 border border-slate-700/60 p-3 rounded-xl flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Daily Quota</span>
                  <span className="text-sm font-bold text-white">{user?.role === 'admin' ? 'Unlimited' : `${dailyRemaining} left`}</span>
                </div>
                <Zap className="w-6 h-6 text-amber-400 opacity-80" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto bg-slate-900/50 border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-6 shadow-inner scroll-smooth">
        {chatSession.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
              <Bot className="w-8 h-8 text-indigo-400" />
            </div>
            <div className="max-w-md space-y-2">
              <h3 className="text-lg font-bold text-white">How can I help you today?</h3>
              <p className="text-sm text-slate-400">Ask a mathematical problem, a physics concept, or request a comparison table.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuestionInput(q.text);
                    handleAsk(q.text, q.subject);
                  }}
                  className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500/50 rounded-xl text-xs text-left text-slate-300 hover:text-white transition group"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-indigo-400 font-medium group-hover:text-indigo-300 transition">Try asking:</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition transform group-hover:translate-x-1" />
                  </div>
                  {q.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8 pb-4">
            {chatSession.map((msg, idx) => (
              <div key={idx} className="space-y-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] sm:max-w-[75%] bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-md">
                    <div className="flex items-center gap-2 mb-1.5 opacity-80">
                      <User className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">You</span>
                    </div>
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.question}</div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-[95%] sm:max-w-[85%] bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-sm p-5 sm:p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-4 border-b border-slate-700/50 pb-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <Bot className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">AI Tutor</span>
                      
                      {msg.id.startsWith('temp-') ? (
                        <div className="ml-auto flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-700">
                          <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin" />
                          <span className="text-[10px] text-emerald-400 font-medium tracking-wide">Thinking...</span>
                        </div>
                      ) : (
                        <div className="ml-auto flex items-center gap-2">
                          {msg.has_textbook_reference ? (
                            <span className="px-2 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 rounded-full text-[10px] font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Grounded in Textbook
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-700 rounded-full text-[10px] font-bold flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-indigo-400" /> AI Knowledge
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {msg.id.startsWith('temp-') ? (
                      <div className="space-y-3 animate-pulse">
                        <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
                        <div className="h-4 bg-slate-700/50 rounded w-full"></div>
                        <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Summary Answer */}
                        {msg.answer && msg.answer !== msg.explanation && (
                          <div className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                            <MathMarkdownRenderer content={msg.answer} />
                          </div>
                        )}

                        {/* Detailed Explanation */}
                        {msg.explanation && (
                          <div className="prose prose-invert max-w-none prose-sm sm:prose-base prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700">
                            <MathMarkdownRenderer content={msg.explanation} />
                          </div>
                        )}

                        {/* Verified Sources */}
                        {msg.has_textbook_reference && msg.sources && msg.sources.length > 0 && (
                          <div className="pt-5 mt-5 border-t border-slate-700/50">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-3">
                              <BookMarked className="w-3.5 h-3.5" />
                              <span>Verified Textbook Citations</span>
                            </div>
                            <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                              {msg.sources.slice(0, 2).map((s, sidx) => (
                                <div key={sidx} className="p-3.5 bg-slate-900/60 border border-emerald-500/20 rounded-xl space-y-3">
                                  <div>
                                    <div className="text-xs font-bold text-white mb-0.5">{s.book_title}</div>
                                    <div className="text-[10px] text-slate-400">{s.chapter_title} • {s.subject_name}</div>
                                    <div className="text-[10px] text-emerald-400 font-medium mt-1">Page {s.printed_page_number}</div>
                                  </div>
                                  <button
                                    onClick={() => onNavigate('library-book-page', {
                                      bookId: s.book_id,
                                      pageNumber: s.printed_page_number,
                                      highlight: msg.question
                                    })}
                                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                                  >
                                    <BookOpen className="w-3.5 h-3.5" />
                                    <span>Open Textbook Page</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Related Exam Questions */}
                        {msg.related_exam_questions && msg.related_exam_questions.length > 0 && (
                          <div className="pt-5 mt-5 border-t border-slate-700/50">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-3">
                              <Award className="w-3.5 h-3.5" />
                              <span>Related Official Exam Questions</span>
                            </div>
                            <div className="space-y-3">
                              {msg.related_exam_questions.map((q, qidx) => (
                                <div key={qidx} className="p-4 bg-slate-900 border border-slate-700 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                  <div className="space-y-1.5">
                                    <div className="flex items-center gap-2">
                                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                        {(q as any).year || '2024'} EUEE • Q{q.question_number}
                                      </span>
                                      <span className="text-xs font-semibold text-slate-300">{q.topic_name}</span>
                                    </div>
                                    <div className="text-xs text-white font-medium line-clamp-2">
                                      <FormattedQuestionText text={q.question_text} />
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => onNavigate('exam-practice', {
                                      examId: q.exam_id,
                                      questionId: q.id
                                    })}
                                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0"
                                  >
                                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                                    <span>Practice This Question</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Generate AI Practice */}
                        {idx === chatSession.length - 1 && (
                          <div className="pt-5 mt-5 border-t border-slate-700/50 flex flex-wrap items-center justify-between gap-3">
                            <div className="text-xs text-slate-400">Want more targeted practice on this concept?</div>
                            <button
                              onClick={handleGenerateAiPractice}
                              disabled={aiPracticeLoading}
                              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>{aiPracticeLoading ? 'Generating...' : 'Generate AI Practice Problem'}</span>
                            </button>
                          </div>
                        )}
                        
                        {/* AI Generated Practice Question */}
                        {idx === chatSession.length - 1 && generatedPracticeQuestion && (
                          <div className="mt-4 p-5 bg-indigo-950/40 border-2 border-indigo-500/50 rounded-2xl space-y-4 shadow-md">
                            <div className="flex items-center justify-between">
                              <span className="px-2.5 py-0.5 bg-indigo-600 text-white rounded font-bold text-[10px] tracking-wider uppercase flex items-center gap-1.5">
                                <Bot className="w-3 h-3" /> AI-GENERATED PRACTICE
                              </span>
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {[
                                { opt: 'A' as const, text: generatedPracticeQuestion.option_a },
                                { opt: 'B' as const, text: generatedPracticeQuestion.option_b },
                                { opt: 'C' as const, text: generatedPracticeQuestion.option_c },
                                { opt: 'D' as const, text: generatedPracticeQuestion.option_d },
                              ].map(item => {
                                const isSelected = practiceAnswerFeedback?.selected === item.opt;
                                const isCorrectAnswer = generatedPracticeQuestion.correct_answer === item.opt;
                                let btnStyle = 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-500';
                                
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
                              <div className={`p-4 rounded-xl text-xs space-y-2 mt-4 ${
                                practiceAnswerFeedback.isCorrect
                                  ? 'bg-emerald-950/80 border border-emerald-500/60'
                                  : 'bg-red-950/80 border border-red-500/60'
                              }`}>
                                <div className={`font-bold flex items-center gap-1.5 text-sm ${practiceAnswerFeedback.isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                  {practiceAnswerFeedback.isCorrect ? (
                                    <><CheckCircle2 className="w-4 h-4" /><span>Correct! Well done.</span></>
                                  ) : (
                                    <><AlertCircle className="w-4 h-4" /><span>Incorrect. The correct answer is ({generatedPracticeQuestion.correct_answer}).</span></>
                                  )}
                                </div>
                                <div className="text-slate-300 leading-relaxed pt-2 border-t border-slate-700/50 mt-2">
                                  <MathMarkdownRenderer content={generatedPracticeQuestion.explanation} />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} className="h-4" />
          </div>
        )}
      </div>

      {/* Error Message */}
      {errorMessage && !loading && (
        <div className="bg-red-950/40 border border-red-800/60 rounded-2xl p-4 text-center space-y-2 mx-auto max-w-lg shadow-md shrink-0">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-white">
            <AlertCircle className="w-5 h-5 text-red-400" />
            {errorMessage}
          </div>
          <button
            onClick={() => handleAsk()}
            className="px-4 py-1.5 bg-red-800 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition"
          >
            Retry Question
          </button>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-2 shadow-xl flex-shrink-0">
        <div className="flex items-center gap-2 p-2">
          <select
            value={subjectFilter}
            onChange={e => setSubjectFilter(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-[11px] font-semibold text-slate-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-indigo-500 shrink-0 uppercase tracking-wider"
          >
            <option value="all">All Subjects</option>
            <option value="subj-math">Mathematics</option>
            <option value="subj-phys">Physics</option>
            <option value="subj-chem">Chemistry</option>
            <option value="subj-bio">Biology</option>
            <option value="subj-eng">English</option>
          </select>
        </div>
        <div className="relative">
          <textarea
            ref={inputRef}
            rows={1}
            placeholder={`Ask a detailed question... (e.g., "Explain how to solve quadratic equations")`}
            value={questionInput}
            onChange={e => {
              setQuestionInput(e.target.value);
              if (inputRef.current) {
                inputRef.current.style.height = 'auto';
                inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + 'px';
              }
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleAsk();
              }
            }}
            className="w-full bg-transparent border-0 px-4 py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:ring-0 resize-none max-h-[120px] overflow-y-auto"
            style={{ height: '48px' }}
          />
          <button
            onClick={() => handleAsk()}
            disabled={loading || !questionInput.trim()}
            className="absolute right-2 bottom-2 p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition disabled:opacity-40 disabled:hover:bg-indigo-600 shadow-md flex items-center justify-center"
            title="Send Message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
INNEREOF
