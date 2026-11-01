import React, { useState } from 'react';
import { MessageSquarePlus, X, CheckCircle2, AlertCircle, Send, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ExamQuestion } from '../types';

interface QuestionFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: {
    id: string;
    question_number?: number;
    question_text: string;
    correct_answer?: string;
  } | null;
  examId?: string;
  examTitle?: string;
  examInfo?: { id: string; title: string };
  user?: any;
}

export const QuestionFeedbackModal: React.FC<QuestionFeedbackModalProps> = ({
  isOpen,
  onClose,
  question,
  examId,
  examTitle,
  examInfo,
  user: propUser
}) => {
  const { user: authUser } = useAuth();
  const user = propUser || authUser;
  const resolvedExamId = examId || examInfo?.id;
  const resolvedExamTitle = examTitle || examInfo?.title;
  const [feedbackType, setFeedbackType] = useState<'wrong_answer' | 'typo_error' | 'poor_explanation' | 'diagram_issue' | 'other'>('wrong_answer');
  const [suggestedAnswer, setSuggestedAnswer] = useState<string>('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen || !question) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      setErrorMessage('Please describe the correction or issue in detail.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/questions/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || 'anonymous'
        },
        body: JSON.stringify({
          question_id: question.id,
          exam_id: resolvedExamId,
          feedback_type: feedbackType,
          suggested_answer: feedbackType === 'wrong_answer' ? suggestedAnswer : undefined,
          comment: comment.trim()
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          setComment('');
          setSuggestedAnswer('');
          onClose();
        }, 2000);
      } else {
        setErrorMessage(data.error || 'Failed to submit feedback. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage('Network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <MessageSquarePlus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Report Question Correction</h3>
              <p className="text-[11px] text-slate-400">
                {examTitle ? `${examTitle} • ` : ''}Question #{question.question_number}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content / Form */}
        {submitSuccess ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Correction Submitted!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Thank you for helping keep Ethiopian curriculum questions 100% accurate. Our academic administrators will review your feedback.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {/* Question Excerpt */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 max-h-24 overflow-y-auto font-mono">
              <span className="text-amber-400 font-bold mr-1.5">Q{question.question_number}:</span>
              {question.question_text?.substring(0, 160)}
              {question.question_text?.length > 160 ? '...' : ''}
              {question.correct_answer && (
                <div className="mt-1 text-[11px] text-slate-400">
                  Current marked key: <strong className="text-emerald-400">{question.correct_answer}</strong>
                </div>
              )}
            </div>

            {/* Feedback Type Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                What type of issue did you notice?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'wrong_answer', label: 'Wrong Answer Key' },
                  { id: 'typo_error', label: 'Typo / Formula Error' },
                  { id: 'poor_explanation', label: 'Unclear Explanation' },
                  { id: 'diagram_issue', label: 'Diagram / Graph Issue' },
                  { id: 'other', label: 'General Feedback' }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFeedbackType(item.id as any)}
                    className={`px-3 py-2 text-left rounded-xl text-xs font-medium border transition ${
                      feedbackType === item.id
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* If wrong answer, suggest correct choice */}
            {feedbackType === 'wrong_answer' && (
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  What should the correct answer be?
                </label>
                <div className="flex gap-2">
                  {['A', 'B', 'C', 'D'].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSuggestedAnswer(opt)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition ${
                        suggestedAnswer === opt
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      Choice {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Comment area */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Correction details & explanation
              </label>
              <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Explain why the current answer is incorrect or specify the typo / calculation step..."
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            {errorMessage && (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Correction</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
