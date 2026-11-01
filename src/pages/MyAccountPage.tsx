import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  User,
  Phone,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Save,
  Trash2,
  AlertTriangle,
  Lock,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { DeviceAppealModal } from '../components/DeviceAppealModal';

interface MyAccountPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

const ALL_GRADES = [
  { id: 'grade-9', name: 'Grade 9' },
  { id: 'grade-10', name: 'Grade 10' },
  { id: 'grade-11-natural', name: 'Grade 11 - Natural Science' },
  { id: 'grade-11-social', name: 'Grade 11 - Social Science' },
  { id: 'grade-12-natural', name: 'Grade 12 - Natural Science' },
  { id: 'grade-12-social', name: 'Grade 12 - Social Science' }
];

export const MyAccountPage: React.FC<MyAccountPageProps> = ({ onNavigate }) => {
  const { user, refreshProfile, logout, hasGradeAccess } = useAuth();
  
  const [fullName, setFullName] = useState(user?.full_name || '');
  const [selectedGrade, setSelectedGrade] = useState(user?.grade || 'Grade 12 - Natural Science');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Custom Modal Confirmation State
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDeviceAppeal, setShowDeviceAppeal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-4 text-slate-300">
        <User className="w-12 h-12 text-slate-500 mx-auto" />
        <h2 className="text-lg font-bold text-white">Sign In Required</h2>
        <p className="text-xs text-slate-400">Please sign in to view and manage your account details.</p>
        <button
          onClick={() => onNavigate('signin')}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md"
        >
          Sign In Now
        </button>
      </div>
    );
  }

  const isPaid = user.role === 'admin' || (user.grade_id ? hasGradeAccess(user.grade_id) : user.is_premium);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      const res = await fetch('/api/students/me', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user.id
        },
        body: JSON.stringify({
          full_name: fullName,
          grade: selectedGrade
        })
      });

      if (res.ok) {
        await refreshProfile();
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        const data = await res.json().catch(() => ({}));
        setSaveError(data.error || 'Failed to update profile');
      }
    } catch (err) {
      console.error(err);
      setSaveError('Network error while saving profile');
    } finally {
      setIsSaving(false);
    }
  };

  const executeAccountDeletion = async () => {
    setIsDeleting(true);
    setDeleteError(null);

    try {
      const res = await fetch('/api/students/me', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user.id
        },
        body: JSON.stringify({ userId: user.id })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to delete account from server');
      }

      // Clear session storage (keep ethiolearn_device_id intact to preserve physical device identity)
      localStorage.removeItem('ethiolearn_user_id');
      localStorage.removeItem('ethiolearn_phone_session');
      localStorage.removeItem('ethiolearn_phone');

      // Trigger logout in AuthContext
      logout();

      setShowConfirmModal(false);
      // Navigate to sign-in / registration screen
      onNavigate('signin');
    } catch (err: any) {
      console.error('Delete error:', err);
      setDeleteError(err.message || 'Failed to delete account. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Page Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shrink-0">
            {user.full_name ? user.full_name.charAt(0).toUpperCase() : 'S'}
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
              <span>{user.full_name || 'Student Account'}</span>
              {isPaid && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800">
                  Premium
                </span>
              )}
            </h1>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-slate-300 font-semibold">{user.phone_number || 'No phone registered'}</span>
              <span className="text-slate-600">•</span>
              <span>Joined {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'EthioLearn'}</span>
            </p>
          </div>
        </div>

        {!isPaid ? (
          <button
            onClick={() => onNavigate('payment')}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 rounded-xl text-xs font-black transition shadow-md flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            <span>Unlock Full Access (200 ETB)</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-950/80 border border-emerald-600/60 text-emerald-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Active Student Membership</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Editable Profile Settings */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-400" />
                <span>Personal & Academic Details</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Update your registered student display name and grade stream.
              </p>
            </div>

            {saveSuccess && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/60 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Profile information saved successfully!</span>
              </div>
            )}

            {saveError && (
              <div className="p-3 bg-rose-950/80 border border-rose-500/60 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{saveError}</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Registered Phone Number (Account ID)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    disabled
                    value={user.phone_number || ''}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-emerald-400 font-mono font-bold cursor-not-allowed opacity-90"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Phone number is used for SMS verification and login authentication.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Active Grade Stream
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <select
                    value={selectedGrade}
                    onChange={e => setSelectedGrade(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 appearance-none"
                  >
                    {ALL_GRADES.map(g => (
                      <option key={g.id} value={g.name} className="bg-slate-900 text-white">
                        {g.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>{isSaving ? 'Saving...' : 'Save Profile Changes'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Account Status & Device Lock */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Membership Status</span>
            </h2>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Plan Tier:</span>
                <span className="font-bold text-emerald-400">{(user as any).payment_tier || (isPaid ? 'Grade Access' : 'Free Trial')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Access Status:</span>
                <span className={`font-bold ${isPaid ? 'text-emerald-300' : 'text-amber-400'}`}>
                  {isPaid ? 'Unlocked' : 'Limited'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Bound Device:</span>
                <span className="font-mono text-[11px] text-slate-300">{user.device_id ? user.device_id.substring(0, 14) + '...' : 'None'}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowDeviceAppeal(true)}
              className="w-full py-2 bg-slate-950 hover:bg-slate-800 text-amber-300 hover:text-amber-200 border border-slate-800 hover:border-amber-500/40 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>Request Device Change / Appeal</span>
            </button>

            {!isPaid && (
              <button
                onClick={() => onNavigate('payment')}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                <span>Upgrade Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Danger Zone: Delete Account */}
      <div className="bg-slate-900 border border-rose-900/50 rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-2xl bg-rose-950/80 border border-rose-800/80 text-rose-400 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Delete Account & Re-Register</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Want to start fresh or create a new account? Clicking <strong className="text-rose-400">Delete Account</strong> will permanently delete your profile, clear your exam history, and unbind your phone number so you can register a new account immediately.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete My Account</span>
          </button>
        </div>
      </div>

      {/* Custom Modal Confirmation */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-rose-800/80 rounded-3xl max-w-md w-full p-6 sm:p-7 space-y-5 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5 text-rose-400 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Confirm Account Deletion</span>
              </div>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Are you sure you want to delete your account for <strong className="text-white font-mono">{user.phone_number || user.full_name}</strong>?
            </p>

            <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80">
              <li>Your student profile and saved test answers will be deleted.</li>
              <li>Your phone number <strong className="text-emerald-400 font-mono">{user.phone_number}</strong> will be freed up.</li>
              <li>You will be redirected immediately to create a brand new account.</li>
            </ul>

            {deleteError && (
              <div className="p-3 bg-rose-950/80 border border-rose-500/60 rounded-xl text-xs text-rose-300">
                {deleteError}
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={executeAccountDeletion}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg disabled:opacity-50"
              >
                <Trash2 className="w-4 h-4" />
                <span>{isDeleting ? 'Deleting Account...' : 'Yes, Delete Account Now'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Device Change Appeal Modal */}
      <DeviceAppealModal
        isOpen={showDeviceAppeal}
        onClose={() => setShowDeviceAppeal(false)}
        initialPhone={user?.phone_number || ''}
      />
    </div>
  );
};
