import React, { useState } from 'react';
import { 
  MessageSquarePlus, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Sparkles, 
  Edit3, 
  Trash2, 
  Search, 
  Check, 
  X, 
  ChevronDown, 
  ExternalLink,
  BookOpen,
  Filter
} from 'lucide-react';
import { QuestionFeedback, ExamQuestion } from '../../types';

interface AdminQuestionFeedbackTabProps {
  feedbacks: QuestionFeedback[];
  onRefresh: () => void;
  adminUser?: any;
  user?: any;
}

export const AdminQuestionFeedbackTab: React.FC<AdminQuestionFeedbackTabProps> = ({
  feedbacks,
  onRefresh,
  adminUser: propAdminUser,
  user: propUser
}) => {
  const adminUser = propAdminUser || propUser;
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'reviewed' | 'corrected' | 'dismissed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingFeedback, setEditingFeedback] = useState<QuestionFeedback | null>(null);
  const [editForm, setEditForm] = useState<{
    question_text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
    explanation: string;
  } | null>(null);
  const [loadingQuestionData, setLoadingQuestionData] = useState(false);
  const [isSavingQuestion, setIsSavingQuestion] = useState(false);
  const [aiGeneratingId, setAiGeneratingId] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showToast = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const filteredFeedbacks = feedbacks.filter(fb => {
    if (statusFilter !== 'all' && fb.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchExam = fb.exam_title?.toLowerCase().includes(q);
      const matchStudent = fb.user_name?.toLowerCase().includes(q) || fb.user_phone?.includes(q);
      const matchComment = fb.comment?.toLowerCase().includes(q);
      const matchQNum = String(fb.question_number).includes(q);
      return matchExam || matchStudent || matchComment || matchQNum;
    }
    return true;
  });

  const handleUpdateStatus = async (id: string, newStatus: 'pending' | 'reviewed' | 'corrected' | 'dismissed') => {
    try {
      const res = await fetch(`/api/admin/questions/feedback/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': adminUser?.id || 'usr-admin-1'
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        showToast('success', `Feedback marked as ${newStatus}`);
        onRefresh();
      } else {
        showToast('error', 'Failed to update feedback status');
      }
    } catch {
      showToast('error', 'Network error');
    }
  };

  const handleDeleteFeedback = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this feedback report?')) return;
    try {
      const res = await fetch(`/api/admin/questions/feedback/${id}`, {
        method: 'DELETE',
        headers: { 'x-user-id': adminUser?.id || 'usr-admin-1' }
      });
      if (res.ok) {
        showToast('success', 'Feedback removed');
        onRefresh();
      }
    } catch {
      showToast('error', 'Network error');
    }
  };

  const handleOpenEditQuestion = async (feedback: QuestionFeedback) => {
    setEditingFeedback(feedback);
    setLoadingQuestionData(true);
    try {
      const res = await fetch(`/api/exams/${feedback.exam_id}/questions`, {
        headers: { 'x-user-id': adminUser?.id || 'usr-admin-1' }
      });
      if (res.ok) {
        const questions: ExamQuestion[] = await res.json();
        const found = questions.find(q => q.id === feedback.question_id || q.question_number === feedback.question_number);
        if (found) {
          const optA = found.option_a || '';
          const optB = found.option_b || '';
          const optC = found.option_c || '';
          const optD = found.option_d || '';
          setEditForm({
            question_text: found.question_text || '',
            option_a: optA,
            option_b: optB,
            option_c: optC,
            option_d: optD,
            correct_answer: (found.correct_answer || 'A').toUpperCase(),
            explanation: found.explanation || ''
          });
        } else {
          // Fallback to snapshot
          setEditForm({
            question_text: feedback.question_text_snapshot || '',
            option_a: '',
            option_b: '',
            option_c: '',
            option_d: '',
            correct_answer: feedback.suggested_answer || 'A',
            explanation: ''
          });
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingQuestionData(false);
    }
  };

  const handleSaveQuestionCorrection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFeedback || !editForm) return;

    setIsSavingQuestion(true);
    try {
      const res = await fetch(`/api/admin/questions/${editingFeedback.question_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': adminUser?.id || 'usr-admin-1'
        },
        body: JSON.stringify(editForm)
      });

      if (res.ok) {
        // Also automatically mark the feedback as corrected
        await handleUpdateStatus(editingFeedback.id, 'corrected');
        showToast('success', `Question Q${editingFeedback.question_number} updated and feedback resolved!`);
        setEditingFeedback(null);
        setEditForm(null);
        onRefresh();
      } else {
        showToast('error', 'Failed to update question in database');
      }
    } catch {
      showToast('error', 'Network error');
    } finally {
      setIsSavingQuestion(false);
    }
  };

  const handleAiReExplain = async (feedback: QuestionFeedback) => {
    setAiGeneratingId(feedback.id);
    try {
      const res = await fetch(`/api/admin/questions/${feedback.question_id}/ai-re-explain`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': adminUser?.id || 'usr-admin-1'
        },
        body: JSON.stringify({ student_note: feedback.comment })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        await handleUpdateStatus(feedback.id, 'corrected');
        showToast('success', `AI verified answer key (${data.question?.correct_answer}) and regenerated complete explanation!`);
        onRefresh();
      } else {
        showToast('error', data.error || 'AI re-explanation failed');
      }
    } catch {
      showToast('error', 'Network error during AI execution');
    } finally {
      setAiGeneratingId(null);
    }
  };

  const pendingCount = feedbacks.filter(f => f.status === 'pending').length;
  const resolvedCount = feedbacks.filter(f => f.status === 'corrected' || f.status === 'reviewed').length;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Toast Notification */}
      {notification && (
        <div className={`p-4 rounded-2xl text-xs font-semibold flex items-center justify-between shadow-xl ${
          notification.type === 'success' 
            ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/50' 
            : 'bg-red-950/90 text-red-300 border border-red-500/50'
        }`}>
          <div className="flex items-center gap-2">
            {notification.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-red-400" />}
            <span>{notification.message}</span>
          </div>
          <button onClick={() => setNotification(null)} className="text-slate-400 hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Header & Stats Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <MessageSquarePlus className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Student Question Corrections & Feedback</h2>
                <p className="text-xs text-slate-400">
                  Review student reports on exam questions, update answers or formulas, and run AI auto-corrections.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-xl text-xs font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{pendingCount} Pending Reviews</span>
            </div>
            <div className="px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{resolvedCount} Resolved</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {(['all', 'pending', 'reviewed', 'corrected', 'dismissed'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition capitalize ${
                  statusFilter === tab
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab} {tab === 'pending' && pendingCount > 0 ? `(${pendingCount})` : ''}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by exam, student, question #..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Feedback Items List */}
      {filteredFeedbacks.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No feedback reports found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            {statusFilter === 'pending' 
              ? 'All student question reports have been reviewed and resolved!' 
              : 'When students report issues or corrections on questions, they will appear here.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFeedbacks.map(fb => (
            <div
              key={fb.id}
              className={`bg-slate-900 border rounded-2xl p-5 transition space-y-4 ${
                fb.status === 'pending'
                  ? 'border-amber-500/40 shadow-sm'
                  : 'border-slate-800 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-mono font-bold text-xs rounded-lg border border-amber-500/30">
                    Q{fb.question_number}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{fb.exam_title}</h4>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>Reported by: <strong className="text-slate-200">{fb.user_name}</strong> ({fb.user_phone || 'N/A'})</span>
                      <span>•</span>
                      <span>{new Date(fb.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                    fb.feedback_type === 'wrong_answer'
                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                      : fb.feedback_type === 'typo_error'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                  }`}>
                    {fb.feedback_type.replace('_', ' ')}
                  </span>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    fb.status === 'pending'
                      ? 'bg-amber-950 text-amber-400 border border-amber-700'
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-700'
                  }`}>
                    {fb.status}
                  </span>
                </div>
              </div>

              {/* Body: Student Comment & Question Snapshot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 space-y-2">
                  <div className="font-semibold text-slate-300 flex items-center justify-between">
                    <span>Student Feedback Note:</span>
                    {fb.suggested_answer && (
                      <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        Suggested Answer: <strong>Choice {fb.suggested_answer}</strong>
                      </span>
                    )}
                  </div>
                  <p className="text-slate-200 leading-relaxed italic">
                    "{fb.comment}"
                  </p>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 space-y-1.5 font-mono text-[11px]">
                  <div className="font-semibold text-slate-400 font-sans text-xs">
                    Question Text:
                  </div>
                  <p className="text-slate-300 line-clamp-3">
                    {fb.question_text_snapshot || 'Full question in exam database'}
                  </p>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEditQuestion(fb)}
                    className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition flex items-center gap-1.5"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Review & Edit Question</span>
                  </button>

                  <button
                    onClick={() => handleAiReExplain(fb)}
                    disabled={aiGeneratingId === fb.id}
                    className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{aiGeneratingId === fb.id ? 'Solving with AI...' : 'AI Auto-Solve & Re-Explain'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {fb.status === 'pending' ? (
                    <button
                      onClick={() => handleUpdateStatus(fb.id, 'reviewed')}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-emerald-950 text-slate-300 hover:text-emerald-300 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Mark Reviewed</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpdateStatus(fb.id, 'pending')}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                    >
                      Reopen
                    </button>
                  )}

                  <button
                    onClick={() => handleDeleteFeedback(fb.id)}
                    className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-slate-800 transition"
                    title="Delete feedback"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Question Edit & Correction Modal */}
      {editingFeedback && editForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl space-y-5 p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-amber-400" />
                  <span>Edit Question #{editingFeedback.question_number}</span>
                </h3>
                <p className="text-xs text-slate-400">{editingFeedback.exam_title}</p>
              </div>
              <button
                onClick={() => { setEditingFeedback(null); setEditForm(null); }}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveQuestionCorrection} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Question Text (LaTeX & Markdown supported):</label>
                <textarea
                  rows={3}
                  value={editForm.question_text}
                  onChange={e => setEditForm({ ...editForm, question_text: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white font-mono text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['option_a', 'option_b', 'option_c', 'option_d'] as const).map(opt => {
                  const letter = opt.slice(-1).toUpperCase();
                  return (
                    <div key={opt}>
                      <label className="block font-semibold text-slate-300 mb-1">Option {letter}:</label>
                      <input
                        type="text"
                        value={editForm[opt]}
                        onChange={e => setEditForm({ ...editForm, [opt]: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  );
                })}
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Correct Answer Choice:</label>
                <div className="flex gap-2">
                  {['A', 'B', 'C', 'D'].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setEditForm({ ...editForm, correct_answer: opt })}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                        editForm.correct_answer === opt
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Choice {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  Official Explanation & Mathematical Derivation:
                </label>
                <textarea
                  rows={4}
                  value={editForm.explanation}
                  onChange={e => setEditForm({ ...editForm, explanation: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-xs leading-relaxed focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => { setEditingFeedback(null); setEditForm(null); }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingQuestion}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-md disabled:opacity-50"
                >
                  {isSavingQuestion ? 'Saving Correction...' : 'Save & Publish Correction'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
