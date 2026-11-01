import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Smartphone,
  Check,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Lock,
  Send,
  ExternalLink,
  User,
  KeyRound,
  RotateCcw,
  Eye,
  EyeOff,
  ShieldAlert,
  Sparkles,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { DeviceAppealModal } from './DeviceAppealModal';

interface AuthScreenProps {
  onSuccess?: (isAdmin: boolean) => void;
}

const GRADES_OPTIONS = [
  { id: 'grade-9', name: 'Grade 9', badge: 'General Foundation', subjects: 'Math, Phys, Chem, Bio, Eng, Geog, Amharic, Civics, IT' },
  { id: 'grade-10', name: 'Grade 10', badge: 'General Foundation', subjects: 'Math, Phys, Chem, Bio, Eng, Geog, Amharic, Civics, IT' },
  { id: 'grade-11-natural', name: 'Grade 11 - Natural Science', badge: 'Preparatory Natural', subjects: 'Math, Physics, Biology, Chemistry, English, SAT, IT' },
  { id: 'grade-11-social', name: 'Grade 11 - Social Science', badge: 'Preparatory Social', subjects: 'Math, English, SAT, Economics, History, Geography, Agriculture, IT' },
  { id: 'grade-12-natural', name: 'Grade 12 - Natural Science', badge: 'EUEE Candidate', subjects: 'Math, Physics, Biology, Chemistry, English, SAT, IT', highlight: true },
  { id: 'grade-12-social', name: 'Grade 12 - Social Science', badge: 'EUEE Candidate', subjects: 'Math, English, SAT, Economics, History, Geography, Agriculture' },
];

export const AuthScreen: React.FC<AuthScreenProps> = ({ onSuccess }) => {
  const { loginWithPhone, sendVerificationCode, verifyAndRegister, requestDeviceTransfer, loginAsAdmin, deviceId } = useAuth();

  const handleAdminQuickLogin = async (type: 'nafkun' | 'chulo' | 'ai_assistant') => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const ok = await loginAsAdmin(type);
      if (ok && onSuccess) {
        onSuccess(true);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to login as admin');
    } finally {
      setLoading(false);
    }
  };

  // Mode: 'signin' for existing students/admin, 'signup' for new students
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  // Form Fields (Phone is strictly 9 digits without country code or leading 0)
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [selectedGradeId, setSelectedGradeId] = useState(''); // No grade chosen by default; student must choose

  // Sign Up Verification Code Step
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [sentCodeValue, setSentCodeValue] = useState<string | null>(null);

  // States
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);
  const [isPhoneRegistered, setIsPhoneRegistered] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);

  // Device Lock State
  const [deviceLocked, setDeviceLocked] = useState(false);
  const [deviceLockMessage, setDeviceLockMessage] = useState('');
  const [transferSubmitted, setTransferSubmitted] = useState(false);
  const [submittingTransfer, setSubmittingTransfer] = useState(false);
  const [showAppealModal, setShowAppealModal] = useState(false);

  // Sanitize and format Ethiopian phone number input strictly to 9 digits
  // Supports both Ethio Telecom (starts with 9) and Safaricom (starts with 7)
  const handlePhoneChange = async (raw: string) => {
    let clean = raw.replace(/[^\d]/g, '');
    if (clean.startsWith('251')) {
      clean = clean.slice(3);
    }
    if (clean.startsWith('0')) {
      clean = clean.slice(1);
    }
    // Limit strictly to 9 digits
    clean = clean.slice(0, 9);
    setPhone(clean);
    setErrorMsg(null);
    setIsPhoneRegistered(false);

    // If typing 9 digits in signup mode, proactively check if already registered
    if (clean.length === 9 && mode === 'signup') {
      try {
        const res = await fetch(`/api/auth/check-phone?phone=${encodeURIComponent('+251' + clean)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.exists) {
            setIsPhoneRegistered(true);
            setErrorMsg('This phone number has already been registered! Please switch to Sign In to enter your account.');
          }
        }
      } catch (e) {}
    }
  };

  const getFullNormalizedPhone = (): string => {
    if (!phone) return '';
    return '+251' + phone;
  };

  // Switch to sign up mode
  const switchToSignUp = () => {
    setMode('signup');
    setErrorMsg(null);
    setInfoMsg(null);
    setCodeSent(false);
    setVerificationCode('');
    setConfirmPassword('');
    setSelectedGradeId('');
    setIsPhoneRegistered(false);
    setIsWrongPassword(false);
  };

  // Switch to sign in mode
  const switchToSignIn = () => {
    setMode('signin');
    setErrorMsg(null);
    setInfoMsg(null);
    setCodeSent(false);
    setVerificationCode('');
    setIsPhoneRegistered(false);
    setIsWrongPassword(false);
  };

  // Handler 1: Sign In (Existing account or Admin)
  const handleSignIn = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg(null);
    setInfoMsg(null);
    setDeviceLocked(false);
    setIsWrongPassword(false);

    if (phone.length !== 9) {
      setErrorMsg('Please enter a valid 9-digit phone number (e.g. 911234567 or 712345678).');
      return;
    }

    if (!password || !password.trim()) {
      setIsWrongPassword(true);
      setErrorMsg('Please enter your password to sign in.');
      return;
    }

    const normPhone = getFullNormalizedPhone();
    setLoading(true);
    try {
      const res = await loginWithPhone(normPhone, password.trim(), fullName.trim() || undefined);

      if (res.success) {
        if (onSuccess) onSuccess(res.isAdmin || false);
      } else {
        if (
          res.error === 'DEVICE_LOCKED' ||
          res.error === 'DEVICE_LOCKED_PERMANENT' ||
          res.error === 'DEVICE_MISMATCH' ||
          (res.message && res.message.toLowerCase().includes('device'))
        ) {
          setDeviceLocked(true);
          setDeviceLockMessage(
            res.message ||
              'You can only use your account on your FIRST phone. One account cannot be opened on multiple devices. Please use your original phone to sign in, or submit a Device Change Appeal.'
          );
        } else if (res.error === 'ACCOUNT_NOT_FOUND') {
          setErrorMsg('No student account found for this phone number. Please click "Sign Up" below to register and create your account.');
        } else {
          // Any invalid credential / wrong password / unauthenticated attempt
          setIsWrongPassword(true);
          setErrorMsg(res.message || 'The password is incorrect. Please check your password and try again.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error during sign in.');
    } finally {
      setLoading(false);
    }
  };

  // Handler 2: Send 6-Digit Code (Sign Up step 1)
  const handleSendCode = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg(null);
    setInfoMsg(null);

    if (phone.length !== 9) {
      setErrorMsg('Please enter a valid 9-digit Ethiopian phone number (e.g. 911234567 or 712345678).');
      return;
    }

    if (isPhoneRegistered) {
      setErrorMsg('This phone number has already been registered! Please switch to the "Sign In" tab to access your account.');
      return;
    }

    if (!password || password.trim().length < 4) {
      setErrorMsg('Please create a password or PIN with at least 4 characters.');
      return;
    }

    if (!confirmPassword || confirmPassword.trim().length === 0) {
      setErrorMsg('Please confirm your password to verify it.');
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setErrorMsg('Passwords do not match. Please verify your password in both fields.');
      return;
    }

    if (!selectedGradeId) {
      setErrorMsg('Please select your Grade / Stream below. Grade selection is mandatory.');
      return;
    }

    const normPhone = getFullNormalizedPhone();

    setLoading(true);
    try {
      const res = await sendVerificationCode(normPhone);
      if (res.success) {
        if (res.isAdmin) {
          // Direct admin login
          await handleSignIn();
          return;
        }
        setCodeSent(true);
        setSentCodeValue(res.code || null);
        setInfoMsg(`A 6-digit verification code was prepared for ${normPhone}.`);
      } else {
        if (
          res.error === 'ACCOUNT_ALREADY_EXISTS' ||
          res.error === 'PHONE_ALREADY_REGISTERED' ||
          (res.message && res.message.toLowerCase().includes('already'))
        ) {
          setIsPhoneRegistered(true);
          setErrorMsg('This phone number has already been registered! Please switch to the "Sign In" tab to access your account.');
        } else {
          setErrorMsg(res.message || 'Failed to send verification code. Please try again.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error sending code.');
    } finally {
      setLoading(false);
    }
  };

  // Handler 3: Verify 6-Digit Code & Create Account (Sign Up step 2)
  const handleVerifyAndRegister = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg(null);
    setInfoMsg(null);

    const normPhone = getFullNormalizedPhone();
    const cleanCode = verificationCode.trim();

    if (!cleanCode || cleanCode.length < 6) {
      setErrorMsg('Please enter the complete 6-digit verification code.');
      return;
    }

    setLoading(true);
    try {
      const res = await verifyAndRegister(
        normPhone,
        cleanCode,
        password.trim() || undefined,
        fullName.trim() || undefined,
        selectedGradeId
      );

      if (res.success) {
        if (onSuccess) onSuccess(res.isAdmin || false);
      } else {
        if (
          res.error === 'ACCOUNT_ALREADY_EXISTS' ||
          res.error === 'PHONE_ALREADY_REGISTERED' ||
          (res.message && res.message.toLowerCase().includes('already'))
        ) {
          setIsPhoneRegistered(true);
          setErrorMsg('This phone number has already been registered! Please switch to the "Sign In" tab to log in.');
        } else {
          setErrorMsg(res.message || 'Invalid or expired 6-digit verification code. Please check and try again.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error completing student registration.');
    } finally {
      setLoading(false);
    }
  };

  // Device Transfer Request for locked devices
  const handleRequestTransfer = async () => {
    setSubmittingTransfer(true);
    try {
      await requestDeviceTransfer(getFullNormalizedPhone(), 'I want to change my account to this phone');
      setTransferSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmittingTransfer(false);
    }
  };

  // Detect carrier for visual cue
  const getCarrierBadge = () => {
    if (!phone) return null;
    if (phone.startsWith('7')) {
      return (
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800 font-semibold">
          Safaricom
        </span>
      );
    }
    if (phone.startsWith('9')) {
      return (
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-semibold">
          Ethio Telecom
        </span>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        {/* Brand Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-emerald-950/50">
            EL
          </div>
          <div>
            <div className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              EthioLearn <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">AI</span>
            </div>
            <p className="text-xs text-slate-400">National Curriculum & EUEE Entrance Exam Engine</p>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100">
            {mode === 'signin' ? 'Sign In to Your Account' : 'Student Account Sign Up'}
          </h2>
          <p className="mt-1 text-xs text-slate-400 max-w-sm mx-auto">
            {mode === 'signin'
              ? 'Enter your phone number and password to access your textbooks, exams, and AI study tutor.'
              : 'Enter your phone number to receive a 6-digit verification code and activate your account.'}
          </p>
        </div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500" />

          {/* Mode Switcher Tabs (Sign In vs Sign Up) */}
          <div className="flex items-center p-1 bg-slate-950/80 border border-slate-800 rounded-xl mb-6">
            <button
              type="button"
              onClick={switchToSignIn}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                mode === 'signin'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Sign In</span>
            </button>
            <button
              type="button"
              onClick={switchToSignUp}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                mode === 'signup'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Sign Up</span>
            </button>
          </div>

          {/* Device Locked Modal/Alert */}
          {deviceLocked ? (
            <div className="space-y-4">
              <div className="p-5 bg-red-950/90 border-2 border-red-600 rounded-2xl shadow-xl space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-red-900 border border-red-700 rounded-xl text-red-100 shrink-0 shadow-sm">
                    <ShieldAlert className="w-6 h-6 text-red-200" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-red-100 uppercase tracking-wide">
                      Device Restriction Alert
                    </h3>
                    <p className="text-xs font-semibold text-red-300 mt-0.5">
                      Account locked to your original registered phone
                    </p>
                  </div>
                </div>

                {/* Prominent Red Directive as requested */}
                <div className="p-3.5 bg-red-900/90 border border-red-600 rounded-xl text-xs sm:text-sm font-bold text-red-50 leading-relaxed shadow-inner">
                  ⚠️ You can only use your account on your FIRST phone. One account cannot be accessed from multiple phones or devices. Please use your original phone to sign in.
                </div>

                <p className="text-xs text-red-200/90 leading-relaxed">
                  If you bought a new phone or lost your previous phone, submit a <strong>Device Change Appeal</strong> below so the Administrator can verify your identity and approve the transfer to this device.
                </p>
              </div>

              {/* Action Buttons for Device Transfer */}
              <div className="space-y-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setShowAppealModal(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 via-amber-600 to-emerald-600 hover:opacity-95 text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg transition"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Submit Device Change Appeal</span>
                </button>

                <a
                  href={`https://t.me/wiznfk4?text=${encodeURIComponent(
                    `I want to change my account to this phone\nPhone: ${getFullNormalizedPhone()}\nDevice ID: ${deviceId.slice(0, 16)}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs shadow transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Admin on Telegram (@wiznfk4)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  type="button"
                  onClick={() => setDeviceLocked(false)}
                  className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 transition"
                >
                  Back to Sign In (Try a different phone number)
                </button>
              </div>
            </div>
          ) : mode === 'signin' ? (
            /* =========================================================================
               MODE: SIGN IN (Standard Clean Sign In)
               ========================================================================= */
            <form onSubmit={handleSignIn} className="space-y-4">
              {/* Phone Number Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Phone Number <span className="text-emerald-400">*</span>
                  </label>
                  {getCarrierBadge()}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-300 font-bold text-sm select-none">
                    <span className="text-base mr-1.5">🇪🇹</span>
                    <span>+251</span>
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength={9}
                    placeholder="911234567 or 712345678"
                    value={phone}
                    onChange={e => handlePhoneChange(e.target.value)}
                    className="w-full pl-20 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 text-sm font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                  <span>Enter 9 digits (Safaricom or Ethio Telecom)</span>
                  <span className="font-mono text-slate-400">{phone.length}/9 digits</span>
                </div>
              </div>

              {/* Password / PIN Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Password / PIN
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your account password or PIN"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      setErrorMsg(null);
                      setIsWrongPassword(false);
                    }}
                    className={`w-full pl-10 pr-10 py-2.5 bg-slate-950 border rounded-xl text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition ${
                      isWrongPassword
                        ? 'border-red-500 ring-2 ring-red-500/40 focus:ring-red-500'
                        : 'border-slate-700 focus:ring-emerald-500 focus:border-transparent'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 transition"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Instant Password Error Banner */}
                {isWrongPassword && (
                  <div className="mt-2.5 p-3.5 bg-red-950/95 border-2 border-red-500 rounded-xl space-y-1.5 shadow-xl animate-fadeIn">
                    <div className="flex items-center gap-2 text-xs font-black text-red-300 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="text-red-400 font-bold text-sm">The password is incorrect</span>
                    </div>
                    <p className="text-xs text-red-200 pl-6 leading-relaxed">
                      The password you entered is incorrect. Please verify your password and try again.
                    </p>
                  </div>
                )}
              </div>

              {/* Optional Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. Abebe Kebede"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 bg-red-950/70 border border-red-800 text-red-300 text-xs rounded-xl space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="font-bold">{errorMsg}</span>
                  </div>
                  {isWrongPassword && (
                    <p className="text-[11px] text-red-200/90 pl-6">
                      The password you entered is incorrect for this phone number. Please re-enter your password carefully.
                    </p>
                  )}
                  {errorMsg.includes('No student account found') && (
                    <button
                      type="button"
                      onClick={switchToSignUp}
                      className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <span>Switch to Sign Up (Create New Account)</span>
                    </button>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || phone.length < 9}
                className="w-full py-3 px-4 font-bold text-sm rounded-xl shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-950/60 flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                {loading ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Don't have an account banner */}
              <div className="text-center pt-2 space-y-2">
                <p className="text-xs text-slate-400">
                  New student without an account?{' '}
                  <button
                    type="button"
                    onClick={switchToSignUp}
                    className="text-emerald-400 hover:underline font-bold"
                  >
                    Sign Up with 6-Digit Code
                  </button>
                </p>

                <div className="pt-1 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setShowAppealModal(true)}
                    className="text-[11px] text-amber-400/90 hover:text-amber-300 transition flex items-center justify-center gap-1.5 mx-auto font-medium"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Changed your phone? Submit Device Change Appeal</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* =========================================================================
               MODE: SIGN UP (New Student Registration with 6-Digit Verification)
               ========================================================================= */
            <div className="space-y-4">
              {!codeSent ? (
                /* Step 1: Input details and Request 6-Digit Code */
                <form onSubmit={handleSendCode} className="space-y-4">
                  {/* Top Alert Notification if Error */}
                  {errorMsg && (
                    <div className="p-3.5 bg-red-950/90 border border-red-700 text-red-200 text-xs rounded-xl space-y-2 animate-fadeIn shadow-md">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span className="font-bold text-red-100 leading-snug">{errorMsg}</span>
                      </div>
                      {(errorMsg.toLowerCase().includes('already') || isPhoneRegistered) && (
                        <button
                          type="button"
                          onClick={switchToSignIn}
                          className="w-full py-2 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow"
                        >
                          <span>Switch to Sign In Tab</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}

                  {/* Phone Number Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Phone Number <span className="text-emerald-400">*</span>
                      </label>
                      {getCarrierBadge()}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-300 font-bold text-sm select-none">
                        <span className="text-base mr-1.5">🇪🇹</span>
                        <span>+251</span>
                      </div>
                      <input
                        type="tel"
                        required
                        maxLength={9}
                        placeholder="911234567 or 712345678"
                        value={phone}
                        onChange={e => handlePhoneChange(e.target.value)}
                        className="w-full pl-20 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 text-sm font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                      <span>Enter 9 digits (Safaricom or Ethio Telecom)</span>
                      <span className="font-mono text-slate-400">{phone.length}/9 digits</span>
                    </div>

                    {isPhoneRegistered && (
                      <div className="mt-2.5 p-3 bg-amber-950/80 border border-amber-600/80 rounded-xl space-y-2 animate-fadeIn">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>Phone Number Already Registered</span>
                        </div>
                        <p className="text-[11px] text-amber-200 leading-relaxed">
                          An account for <strong className="text-white font-mono">{getFullNormalizedPhone()}</strong> already exists. You do not need to create another account. Please sign in with your password.
                        </p>
                        <button
                          type="button"
                          onClick={switchToSignIn}
                          className="w-full py-2 px-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow"
                        >
                          <span>Switch to Sign In (Enter Password)</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Password / PIN Setup */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Create Password / PIN <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Create a password or 4-6 digit PIN"
                        value={password}
                        onChange={e => {
                          setPassword(e.target.value);
                          setErrorMsg(null);
                        }}
                        className="w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 transition"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password / PIN */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Confirm Password / PIN <span className="text-emerald-400">*</span>
                      </label>
                      {confirmPassword && password && (
                        <span className={`text-[11px] font-semibold flex items-center gap-1 ${confirmPassword === password ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {confirmPassword === password ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Passwords match</span>
                            </>
                          ) : (
                            <span>Does not match</span>
                          )}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        placeholder="Re-enter your password or PIN to verify"
                        value={confirmPassword}
                        onChange={e => {
                          setConfirmPassword(e.target.value);
                          setErrorMsg(null);
                        }}
                        className={`w-full pl-10 pr-10 py-2.5 bg-slate-950 border rounded-xl text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition ${
                          confirmPassword && confirmPassword !== password
                            ? 'border-amber-600/70 focus:ring-amber-500'
                            : confirmPassword && confirmPassword === password
                            ? 'border-emerald-600/70 focus:ring-emerald-500'
                            : 'border-slate-700 focus:ring-emerald-500'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 transition"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Ensures you typed your password accurately so you never lose access.
                    </p>
                  </div>

                  {/* Full Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Abebe Kebede"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Grade Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Select Your Grade / Stream <span className="text-emerald-400">*</span>
                      </label>
                      <span className={`text-[11px] font-semibold ${selectedGradeId ? 'text-emerald-400' : 'text-amber-400/90'}`}>
                        {selectedGradeId ? 'Grade Selected' : 'Choose one (Mandatory)'}
                      </span>
                    </div>

                    {!selectedGradeId && (
                      <div className="mb-2 p-2 bg-amber-950/40 border border-amber-800/60 rounded-xl text-[11px] text-amber-300 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Please click on your current grade below to continue.</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1">
                      {GRADES_OPTIONS.map(g => {
                        const isSelected = selectedGradeId === g.id;
                        return (
                          <div
                            key={g.id}
                            onClick={() => {
                              setSelectedGradeId(g.id);
                              setErrorMsg(null);
                            }}
                            className={`p-2.5 rounded-xl border text-left cursor-pointer transition flex items-center justify-between ${
                              isSelected
                                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-100 shadow-md ring-1 ring-emerald-500/50'
                                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center transition ${
                                  isSelected ? 'border-emerald-400 bg-emerald-500 text-slate-950' : 'border-slate-600'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                                  <span>{g.name}</span>
                                </div>
                                <div className="text-[10px] text-slate-400 line-clamp-1">{g.subjects}</div>
                              </div>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${isSelected ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-700' : 'bg-slate-800 text-slate-400'}`}>
                              {g.badge}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="p-3 bg-red-950/70 border border-red-800 text-red-300 text-xs rounded-xl space-y-2">
                      <div className="flex items-center gap-2 font-medium">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        <span className="font-bold">{errorMsg}</span>
                      </div>
                      {(errorMsg.toLowerCase().includes('already') || isPhoneRegistered) && (
                        <button
                          type="button"
                          onClick={switchToSignIn}
                          className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow"
                        >
                          <span>Switch to Sign In Tab</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading || phone.length < 9}
                    className="w-full py-3 px-4 font-bold text-sm rounded-xl shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-950/60 flex items-center justify-center gap-2 transition disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Preparing Code...</span>
                    ) : (
                      <>
                        <KeyRound className="w-4 h-4" />
                        <span>Send 6-Digit Verification Code</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <p className="text-xs text-slate-400">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={switchToSignIn}
                        className="text-emerald-400 hover:underline font-bold"
                      >
                        Sign In Directly
                      </button>
                    </p>
                  </div>
                </form>
              ) : (
                /* Step 2: Enter 6-Digit Code & Finish Account Creation */
                <form onSubmit={handleVerifyAndRegister} className="space-y-4">
                  {/* SMS Notification Banner with Auto-fill */}
                  <div className="p-4 bg-emerald-950/70 border border-emerald-500/50 rounded-2xl shadow-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                        <Smartphone className="w-4 h-4 animate-pulse" />
                        <span>Verification Code Generated</span>
                      </div>
                      <span className="text-[10px] text-emerald-300 bg-emerald-900/60 px-2 py-0.5 rounded font-mono">
                        Instant OTP
                      </span>
                    </div>
                    <p className="text-xs text-emerald-200">
                      6-digit code for <span className="font-mono font-bold text-white">{getFullNormalizedPhone()}</span>:
                    </p>
                    <div className="flex items-center justify-between bg-slate-950/90 border border-emerald-500/40 p-2.5 rounded-xl">
                      <div className="font-mono text-xl font-black text-emerald-400 tracking-widest pl-1">
                        {sentCodeValue || '123456'}
                      </div>
                      <button
                        type="button"
                        onClick={() => setVerificationCode(sentCodeValue || '123456')}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Auto-fill Code</span>
                      </button>
                    </div>
                  </div>

                  {/* 6-Digit Code Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 text-center">
                      Enter 6-Digit Verification Code
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      autoFocus
                      required
                      placeholder="• • • • • •"
                      value={verificationCode}
                      onChange={e => {
                        const val = e.target.value.replace(/[^\d]/g, '').slice(0, 6);
                        setVerificationCode(val);
                        setErrorMsg(null);
                      }}
                      className="w-full py-3 bg-slate-950 border border-emerald-500/50 rounded-xl text-emerald-300 placeholder-slate-600 text-2xl font-mono font-black tracking-[0.4em] text-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    />
                    <p className="text-[11px] text-slate-400 mt-1.5 text-center">
                      Enter the 6 digits generated for your phone number.
                    </p>
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-xl flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading || verificationCode.length < 6}
                    className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2 transition disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Verifying & Setting up Account...</span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Verify & Enter Dashboard</span>
                      </>
                    )}
                  </button>

                  {/* Resend Code / Change Phone */}
                  <div className="flex items-center justify-between text-xs pt-1 px-1">
                    <button
                      type="button"
                      onClick={handleSendCode}
                      disabled={loading}
                      className="text-slate-400 hover:text-emerald-400 transition flex items-center gap-1 font-medium"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Resend Code</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCodeSent(false)}
                      className="text-slate-400 hover:text-slate-200 transition font-medium"
                    >
                      Change phone number
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Admin Console & Content Editor Quick Access */}
            <div className="mt-6 pt-5 border-t border-slate-800/80">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>Admin & Content Editor Access</span>
                </div>
                <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Manage Materials
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleAdminQuickLogin('ai_assistant')}
                  disabled={loading}
                  className="p-2.5 bg-slate-950/70 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/50 rounded-xl text-left transition group"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 group-hover:text-indigo-200">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span>AI Coding Assistant</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Admin edit exams & books</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleAdminQuickLogin('nafkun')}
                  disabled={loading}
                  className="p-2.5 bg-slate-950/70 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-xl text-left transition group relative overflow-hidden"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:text-amber-200">
                    <Lock className="w-3 h-3 text-amber-400" />
                    <span>Nafkun Asefa (Admin)</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      585/600 on EUEE
                    </span>
                    <span className="text-[10px] text-slate-400">Full owner</span>
                  </div>
                </button>
              </div>
            </div>
        </div>

        {/* Security & Device Notice */}
        <div className="text-center mt-4 text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-slate-400" />
          <span>Device-bound security active. Device ID: {deviceId.slice(0, 14)}...</span>
        </div>
      </div>

      {/* Device Change Appeal Modal */}
      <DeviceAppealModal
        isOpen={showAppealModal}
        onClose={() => setShowAppealModal(false)}
        initialPhone={getFullNormalizedPhone()}
      />
    </div>
  );
};
