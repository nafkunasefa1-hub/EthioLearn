import React, { useState, useEffect } from 'react';
import { useAuth, getDeviceId } from '../context/AuthContext';
import {
  CreditCard,
  CheckCircle2,
  Clock,
  AlertCircle,
  Upload,
  FileText,
  ShieldCheck,
  Building2,
  Smartphone,
  Lock,
  ArrowRight,
  Send,
  ExternalLink,
  Sparkles,
  Layers,
  RefreshCw
} from 'lucide-react';
import { PaymentSettings, ReceiptVerification } from '../types';
import { broadcastPaymentReceipt, fetchRemoteApprovalForPhone } from '../services/cloudSyncService';

// Fast client-side image compressor: downsizes heavy mobile camera photos (4MB-8MB) into compact readable JPEGs (~18-32KB)
const compressImageForSlip = async (file: File): Promise<{ blob: Blob; dataUrl: string }> => {
  const renderScaled = (img: HTMLImageElement, maxDim: number, quality: number): Promise<{ blob: Blob; dataUrl: string }> => {
    return new Promise((res) => {
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        canvas.toBlob((blob) => {
          res({ blob: blob || file, dataUrl });
        }, 'image/jpeg', quality);
      } else {
        res({ blob: file, dataUrl: '' });
      }
    });
  };

  return new Promise((resolve) => {
    const isLikelyImage =
      (file.type && file.type.startsWith('image/')) ||
      !file.type ||
      /\.(png|jpe?g|webp|gif|bmp|heic|heif)$/i.test(file.name || '');

    if (!isLikelyImage) {
      const reader = new FileReader();
      reader.onload = () => resolve({ blob: file, dataUrl: String(reader.result || '') });
      reader.onerror = () => resolve({ blob: file, dataUrl: '' });
      reader.readAsDataURL(file);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = async () => {
        let out = await renderScaled(img, 600, 0.52);
        if (out.dataUrl.length > 44000) {
          out = await renderScaled(img, 460, 0.42);
        }
        if (out.dataUrl.length > 90000) {
          out = await renderScaled(img, 380, 0.36);
        }
        resolve(out.dataUrl ? out : { blob: file, dataUrl: String(e.target?.result || '') });
      };
      img.onerror = () => resolve({ blob: file, dataUrl: String(e.target?.result || '') });
      img.src = String(e.target?.result || '');
    };
    reader.onerror = () => resolve({ blob: file, dataUrl: '' });
    reader.readAsDataURL(file);
  });
};

interface PaymentPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
  routeParams?: Record<string, any>;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ onNavigate, routeParams }) => {
  const { user, refreshProfile, hasGradeAccess } = useAuth();
  const [settings, setSettings] = useState<PaymentSettings | null>(null);
  const [existingReceipt, setExistingReceipt] = useState<ReceiptVerification | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<'single' | 'all'>('single');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [checkingApproval, setCheckingApproval] = useState(false);
  const [approvalFeedback, setApprovalFeedback] = useState<{ type: 'success' | 'pending' | 'error'; message: string } | null>(null);

  const fetchPaymentData = async () => {
    try {
      const [setRes, rcptRes] = await Promise.all([
        fetch('/api/payments/settings'),
        fetch('/api/payments/my-receipt', {
          headers: { 'x-user-id': user?.id || '' }
        })
      ]);
      if (setRes.ok) setSettings(await setRes.json());
      if (rcptRes.ok) {
        const rcptJson = await rcptRes.json().catch(() => null);
        if (rcptJson && rcptJson.id) {
          setExistingReceipt(rcptJson);
        } else {
          setExistingReceipt(null);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckApprovalStatus = async () => {
    setCheckingApproval(true);
    setApprovalFeedback(null);
    try {
      const phone = user?.phone_number || (user as any)?.phone || localStorage.getItem('ethiolearn_phone') || '';
      const curUserId = user?.id || localStorage.getItem('ethiolearn_user_id') || undefined;
      let remoteAppr = null;
      if (phone || curUserId) {
        try {
          remoteAppr = await fetchRemoteApprovalForPhone(phone, curUserId);
        } catch (_) {}
      }

      if (remoteAppr && remoteAppr.is_premium && remoteAppr.tier !== 'free') {
        const resolvedTier = remoteAppr.tier;
        const resolvedGrades = resolvedTier === 'all'
          ? ['all']
          : (remoteAppr.unlocked_grades && remoteAppr.unlocked_grades.length > 0
              ? remoteAppr.unlocked_grades
              : [user?.grade_id || 'grade-12-natural']);

        const cached = localStorage.getItem('ethiolearn_user_profile');
        if (cached) {
          try {
            const u = JSON.parse(cached);
            u.is_premium = true;
            u.payment_tier = resolvedTier;
            u.unlocked_grades = resolvedGrades;
            u.paid_amount = resolvedTier === 'all' ? 300 : 200;
            u.subscription_type = resolvedTier === 'all' ? 'all_grades' : 'grade_only';
            localStorage.setItem('ethiolearn_user_profile', JSON.stringify(u));
            localStorage.setItem('ethiolearn_user', JSON.stringify(u));
          } catch (_) {}
        }
        localStorage.setItem('ethiolearn_payment_approved', 'true');
        localStorage.setItem('ethiolearn_payment_tier', resolvedTier);

        try {
          const rStr = localStorage.getItem('ethiolearn_my_receipt');
          if (rStr) {
            const parsed = JSON.parse(rStr);
            parsed.status = 'approved';
            localStorage.setItem('ethiolearn_my_receipt', JSON.stringify(parsed));
          }
        } catch (_) {}

        setExistingReceipt(prev => prev ? { ...prev, status: 'approved' } : null);
        setSubmitSuccess(false);
        await refreshProfile();
        window.dispatchEvent(new Event('auth-change'));

        const planName = resolvedTier === 'all' ? 'All Grades (300 ETB)' : 'Single Grade (200 ETB)';
        setApprovalFeedback({
          type: 'success',
          message: `🎉 Access Approved! Your account is unlocked for ${planName}. Opening your unlocked materials...`
        });
        setTimeout(() => {
          onNavigate('dashboard');
        }, 1200);
        return;
      }

      await fetchPaymentData();
      await refreshProfile();

      let latestReceipt: ReceiptVerification | null = null;
      try {
        const myRes = await fetch('/api/payments/my-receipt', {
          headers: { 'x-user-id': curUserId || '' }
        });
        if (myRes.ok) {
          const rJson = await myRes.json().catch(() => null);
          if (rJson && rJson.id) {
            latestReceipt = rJson;
            setExistingReceipt(rJson);
          }
        }
      } catch (_) {}

      const currentCached = localStorage.getItem('ethiolearn_user_profile');
      let currentIsPremium = false;
      let currentTier = 'free';
      if (currentCached) {
        try {
          const u = JSON.parse(currentCached);
          if (u.is_premium && u.payment_tier !== 'free') {
            currentIsPremium = true;
            currentTier = u.payment_tier || 'single';
          }
        } catch (_) {}
      }

      if (latestReceipt?.status === 'rejected') {
        setSubmitSuccess(false);
        setApprovalFeedback({
          type: 'error',
          message: `❌ Receipt rejected: ${latestReceipt.rejection_reason || 'Please submit a clearer screenshot.'}`
        });
      } else if (latestReceipt?.status === 'approved' || currentIsPremium) {
        setSubmitSuccess(false);
        const planLabel = currentTier === 'all' ? 'All Grades (300 ETB)' : 'Single Grade (200 ETB)';
        setApprovalFeedback({
          type: 'success',
          message: `🎉 Access Approved! Your ${planLabel} access is active.`
        });
        setTimeout(() => {
          onNavigate('dashboard');
        }, 1200);
      } else {
        setApprovalFeedback({
          type: 'pending',
          message: '⏳ Not yet approved. Your screenshot was sent and is waiting for Administrator verification.'
        });
      }
    } catch (err) {
      setApprovalFeedback({
        type: 'pending',
        message: '⏳ Not yet approved. The administrator is still verifying your payment screenshot.'
      });
    } finally {
      setCheckingApproval(false);
    }
  };

  const isExplicitFreeTier = Boolean(
    user && user.role !== 'admin' && ((user as any).payment_tier === 'free' || user.is_premium === false)
  );

  const hasAllAccess = Boolean(
    user?.role === 'admin' ||
    (!isExplicitFreeTier && (
      user?.unlocked_grades?.includes('all') ||
      user?.subscription_type === 'all_grades' ||
      user?.subscription_type === 'all' ||
      (user as any)?.payment_tier === 'all_access' ||
      (user as any)?.payment_tier === 'all'
    ))
  );

  const hasApproved200Receipt = Boolean(
    !isExplicitFreeTier &&
    existingReceipt?.status === 'approved' &&
    (Number(existingReceipt.amount_birr) === 200 || !existingReceipt.upgrade_all_grades)
  );

  // A student has legitimately paid 200 ETB for a single grade ONLY IF verified and not currently Free Tier
  const isPaidSingleGrade = Boolean(
    !isExplicitFreeTier &&
    !hasAllAccess &&
    (
      (user as any)?.payment_tier === 'single' ||
      (user as any)?.paid_amount === 200 ||
      (user?.is_premium && user?.subscription_type === 'grade_only') ||
      (user?.is_premium && !user?.unlocked_grades?.includes('all') && (user?.unlocked_grades?.length ?? 0) > 0) ||
      (hasGradeAccess && user?.grade_id && hasGradeAccess(user.grade_id)) ||
      hasApproved200Receipt ||
      Boolean(routeParams?.upgrade)
    )
  );

  useEffect(() => {
    fetchPaymentData();
  }, [user?.id, (user as any)?.payment_tier, user?.is_premium]);

  // When payment is pending, poll cloud approval every 3.5 seconds for instantaneous unlocking
  useEffect(() => {
    if (existingReceipt?.status === 'pending' || submitSuccess) {
      const interval = setInterval(async () => {
        const phone = user?.phone_number || (user as any)?.phone || localStorage.getItem('ethiolearn_phone');
        const curUserId = user?.id || localStorage.getItem('ethiolearn_user_id') || undefined;
        if (phone || curUserId) {
          try {
            const appr = await fetchRemoteApprovalForPhone(phone || '', curUserId);
            if (appr && appr.is_premium && appr.tier !== 'free') {
              const resolvedTier = appr.tier;
              const resolvedGrades = resolvedTier === 'all'
                ? ['all']
                : (appr.unlocked_grades && appr.unlocked_grades.length > 0
                    ? appr.unlocked_grades
                    : [user?.grade_id || 'grade-12-natural']);
              try {
                const cached = localStorage.getItem('ethiolearn_user_profile');
                if (cached) {
                  const u = JSON.parse(cached);
                  u.is_premium = true;
                  u.payment_tier = resolvedTier;
                  u.unlocked_grades = resolvedGrades;
                  u.paid_amount = resolvedTier === 'all' ? 300 : 200;
                  u.subscription_type = resolvedTier === 'all' ? 'all_grades' : 'grade_only';
                  localStorage.setItem('ethiolearn_user_profile', JSON.stringify(u));
                  localStorage.setItem('ethiolearn_user', JSON.stringify(u));
                }
                localStorage.setItem('ethiolearn_payment_approved', 'true');
                localStorage.setItem('ethiolearn_payment_tier', resolvedTier);
                const rStr = localStorage.getItem('ethiolearn_my_receipt');
                if (rStr) {
                  const parsed = JSON.parse(rStr);
                  parsed.status = 'approved';
                  localStorage.setItem('ethiolearn_my_receipt', JSON.stringify(parsed));
                }
              } catch (_) {}
              setExistingReceipt(prev => prev ? ({ ...prev, status: 'approved' }) : null);
              setSubmitSuccess(false);
              await refreshProfile();
              window.dispatchEvent(new Event('auth-change'));
              return;
            }
          } catch (_) {}
        }
        await fetchPaymentData();
        await refreshProfile();
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [existingReceipt?.status, submitSuccess, user?.id, user?.phone_number]);

  useEffect(() => {
    // If student already has Single Grade access, they are exclusively eligible to UPGRADE for 100 Birr!
    if (isPaidSingleGrade) {
      setIsUpgrading(true);
      setSelectedPlan('all');
    } else {
      setIsUpgrading(false);
      if (routeParams?.plan === 'all') {
        setSelectedPlan('all');
      } else {
        setSelectedPlan('single');
      }
    }
  }, [user, routeParams, isPaidSingleGrade]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setSubmitError(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setSubmitError('Please attach a screenshot of your payment transfer slip.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Compress screenshot on mobile for instant upload without network timeouts
    let receiptDataUrl = '';
    let uploadBlob: Blob | File = selectedFile;
    try {
      const compressed = await compressImageForSlip(selectedFile);
      receiptDataUrl = compressed.dataUrl;
      uploadBlob = compressed.blob;
    } catch (_) {
      try {
        receiptDataUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result || ''));
          reader.onerror = () => resolve('');
          reader.readAsDataURL(selectedFile);
        });
      } catch (_) {}
    }

    if (receiptDataUrl) {
      try {
        localStorage.setItem('ethiolearn_last_uploaded_receipt_image', receiptDataUrl);
      } catch (_) {}
    }

    const currentDeviceId = getDeviceId();
    const formData = new FormData();
    formData.append('receipt', uploadBlob, selectedFile.name || 'payment_screenshot.jpg');
    if (receiptDataUrl) {
      formData.append('receipt_data_url', receiptDataUrl);
    }
    formData.append('receipt_filename', selectedFile.name || 'payment_screenshot.jpg');
    formData.append('student_phone', user?.phone_number || (user as any)?.phone || '');
    formData.append('student_name', user?.full_name || 'Student');
    const chosenAmount = (isUpgrading || isPaidSingleGrade || routeParams?.upgrade) ? '100' : (selectedPlan === 'all' ? '300' : '200');
    formData.append('amount_birr', chosenAmount);
    formData.append('upgrade_all_grades', (selectedPlan === 'all' || isUpgrading) ? 'true' : 'false');
    formData.append('target_grade_id', user?.grade_id || 'grade-12-natural');
    formData.append('device_id', currentDeviceId);

    try {
      const res = await fetch('/api/payments/submit-receipt', {
        method: 'POST',
        headers: {
          'x-user-id': user?.id || '',
          'x-device-id': currentDeviceId
        },
        body: formData
      });

      if (res.ok) {
        const resData = await res.json().catch(() => ({}));
        const studentPhone = user?.phone_number || (user as any)?.phone || '';
        const studentName = user?.full_name || 'Student';
        const isUpgrade = Boolean(isUpgrading && isPaidSingleGrade);
        const planAmount = isUpgrade ? 100 : (selectedPlan === 'all' ? 300 : 200);
        const finalAmount = Number(chosenAmount) || planAmount;

        const submittedReceipt: ReceiptVerification = resData.receipt || {
          id: `rcpt-${Date.now()}`,
          user_id: user?.id,
          student_phone: studentPhone,
          student_name: studentName,
          student_email: user?.email,
          amount_birr: finalAmount,
          target_grade_id: (selectedPlan === 'all' || isUpgrade) ? 'all' : (user?.grade_id || 'grade-12-natural'),
          upgrade_all_grades: isUpgrade,
          receipt_storage_path: receiptDataUrl,
          receipt_filename: selectedFile?.name || 'payment_screenshot.jpg',
          status: 'pending',
          submitted_at: new Date().toISOString()
        };

        setExistingReceipt(submittedReceipt);
        setSubmitSuccess(true);
        setApprovalFeedback({
          type: 'pending',
          message: '✅ Screenshot sent! Your payment proof is waiting for Admin verification and approval.'
        });

        // Fallback broadcast only if the backend response did not already synchronize to cloud
        if (!resData?.cloud_synced) {
          await broadcastPaymentReceipt(
            { ...submittedReceipt, student_phone: submittedReceipt.student_phone || studentPhone },
            uploadBlob
          ).then(cloudUrl => {
            if (cloudUrl) {
              try {
                const myRcpt = localStorage.getItem('ethiolearn_my_receipt');
                if (myRcpt) {
                  const parsed = JSON.parse(myRcpt);
                  parsed.receipt_storage_path = cloudUrl;
                  localStorage.setItem('ethiolearn_my_receipt', JSON.stringify(parsed));
                }
              } catch (_) {}
            }
          }).catch(() => {});
        }

        await refreshProfile();
      } else {
        const data = await res.json();
        setSubmitError(data.error || 'Failed to submit payment receipt. Please try again or send to Telegram @wiznfk4.');
      }
    } catch (err) {
      setSubmitError('Network error while submitting verification. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCurrentGradeUnlocked = user?.grade_id ? hasGradeAccess(user.grade_id) : user?.is_premium;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
          Student Curriculum Activation
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Unlock Your Grade Curriculum & AI Tutor
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm">
          Activate full access to all textbooks, chapter short notes, timed entrance exams, and 100 daily AI Tutor questions.
        </p>
      </div>

      {/* If Student is Already Unlocked */}
      {hasAllAccess ? (
        <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 bg-emerald-600/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">All Sections & Grades Fully Unlocked!</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
            You have permanent, unrestricted access to Grade 9, Grade 10, Grade 11, Grade 12-Natural, and Grade 12-Social.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onNavigate('library')}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md"
            >
              Browse Textbooks
            </button>
            <button
              onClick={() => onNavigate('exams')}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
            >
              Practice Exams
            </button>
          </div>
        </div>
      ) : (isCurrentGradeUnlocked && !isUpgrading) ? (
        <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 bg-emerald-600/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {user?.grade || 'Your Grade'} is Fully Unlocked!
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
            You have active membership for {user?.grade}. If you want to unlock ALL other grades (Grade 9, 10, 11, 12-Natural & 12-Social), you only need to add 100 Birr!
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('library')}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md"
            >
              Open {user?.grade} Textbooks
            </button>
            <button
              onClick={() => {
                setSelectedPlan('all');
                setExistingReceipt(null);
                setIsUpgrading(true);
              }}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-md"
            >
              Upgrade to All Grades (+100 Birr)
            </button>
          </div>
        </div>
      ) : (existingReceipt && existingReceipt.status === 'pending') || submitSuccess ? (
        /* Pending Verification Banner */
        <div className="bg-amber-950/30 border border-amber-500/50 rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Screenshot Sent Successfully</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Your Payment Screenshot Has Been Sent & Is Waiting for Approval
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
            We have received your payment screenshot! The administrator has been notified to verify your payment. <span className="text-emerald-400 font-semibold">Your premium access will automatically unlock as soon as the administrator approves it.</span>
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-medium">
            <Clock className="w-3.5 h-3.5 animate-spin" />
            <span>Waiting for Admin approval (auto-checking every few seconds)...</span>
          </div>
          {/* Display Student's Actual Submitted Screenshot */}
          {(existingReceipt?.receipt_storage_path || previewUrl) && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 max-w-sm mx-auto text-center space-y-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Your Attached Screenshot</span>
              <div className="max-h-48 overflow-hidden rounded-xl border border-slate-700/80 bg-black/40 p-1 flex items-center justify-center">
                <img
                  src={existingReceipt?.receipt_storage_path || previewUrl}
                  alt="Submitted Screenshot"
                  className="max-h-44 w-auto rounded-lg object-contain shadow"
                />
              </div>
              <span className="text-[10px] text-emerald-400 font-mono block truncate px-2">
                {existingReceipt?.receipt_filename || selectedFile?.name || 'payment_screenshot.png'}
              </span>
            </div>
          )}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 max-w-md mx-auto text-xs text-slate-300 space-y-2 text-left">
            <div className="flex justify-between">
              <span className="text-slate-400">Phone Number:</span>
              <strong className="text-white">{user?.phone_number || existingReceipt?.student_phone || ''}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Target Grade:</span>
              <strong className="text-amber-400">
                {Number(existingReceipt?.amount_birr) === 100 || existingReceipt?.upgrade_all_grades || isUpgrading || isPaidSingleGrade
                  ? 'All Grades (9, 10, 11, 12) - Complete Access Upgrade'
                  : (user?.grade || 'Selected Grade Access')}
              </strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Amount:</span>
              <strong className="text-emerald-400">
                {Number(existingReceipt?.amount_birr) === 100 || ((isUpgrading || isPaidSingleGrade) && existingReceipt?.upgrade_all_grades)
                  ? '100 ETB'
                  : Number(existingReceipt?.amount_birr) === 300
                  ? '300 ETB'
                  : Number(existingReceipt?.amount_birr) === 200 && !isPaidSingleGrade
                  ? '200 ETB'
                  : (isUpgrading || isPaidSingleGrade ? '100 ETB' : `${existingReceipt?.amount_birr || (selectedPlan === 'all' ? 300 : 200)} ETB`)}
              </strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Submitted At:</span>
              <span>{existingReceipt?.submitted_at ? new Date(existingReceipt.submitted_at).toLocaleString() : 'Just now'}</span>
            </div>
          </div>
          <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
            The administrator will verify your payment slip and click approve. Once approved, your chosen grade content will unlock immediately.
          </p>

          {approvalFeedback && (
            <div className={`p-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 max-w-md mx-auto ${
              approvalFeedback.type === 'success' 
                ? 'bg-emerald-950/90 border border-emerald-500/80 text-emerald-300'
                : approvalFeedback.type === 'error'
                ? 'bg-red-950/90 border border-red-500/80 text-red-300'
                : 'bg-amber-950/90 border border-amber-500/80 text-amber-300 animate-pulse'
            }`}>
              <span>{approvalFeedback.message}</span>
            </div>
          )}

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleCheckApprovalStatus}
              disabled={checkingApproval}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-emerald-950/40"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${checkingApproval ? 'animate-spin' : ''}`} />
              <span>{checkingApproval ? 'Checking Approval...' : 'Check Approval Status'}</span>
            </button>
            <a
              href="https://t.me/wiznfk4"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Speed up on Telegram (@wiznfk4)</span>
            </a>
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      ) : (
        /* Payment Instructions & Submission Form */
        <div className="space-y-6">
          {existingReceipt?.status === 'rejected' && (
            <div className="bg-red-950/50 border border-red-500/60 rounded-2xl p-4 flex items-start gap-3 text-xs text-red-200">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-red-300">Previous Payment Screenshot Was Rejected</p>
                <p>{existingReceipt.rejection_reason || 'Screenshot was unclear or could not be verified. Please upload a clear payment receipt below.'}</p>
              </div>
            </div>
          )}
          {/* Free Tier Guidance on which plan to choose */}
          {!isUpgrading && (
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-4 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Which Plan Should You Choose?</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <span className="font-bold text-emerald-400 block">Choose 200 Birr (Single Grade) if:</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    You only need textbooks, short notes, and exams for your current grade ({user?.grade || 'e.g. Grade 12'}). You can always upgrade later to All-Access for just 100 Birr!
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/40 space-y-1">
                  <span className="font-bold text-indigo-300 block flex items-center gap-1.5">
                    <span>Choose 300 Birr (All-Access) if:</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-500/30 text-indigo-300 font-bold">Best Value</span>
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    You want comprehensive access to Grades 9, 10, 11, and 12 (both Natural and Social streams) permanently with complete AI Tutor explanations for just 100 Birr extra.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Upgrading Notice Banner */}
          {isUpgrading && isPaidSingleGrade && (
            <div className="bg-indigo-950/40 border-2 border-indigo-500/60 rounded-2xl p-4 flex items-center gap-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Upgrade to Full All-Access for 100 Birr</h4>
                <p className="text-xs text-indigo-200/90 leading-relaxed">
                  You already paid 200 Birr for single-grade access. Pay only the 100 Birr difference to unlock all remaining grades (Grade 9, 10, 11, 12 Natural & Social streams) permanently!
                </p>
              </div>
            </div>
          )}

          {/* Plan Selector */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {!isUpgrading && (
              <div
                onClick={() => {
                  setSelectedPlan('single');
                  setIsUpgrading(false);
                }}
                className={`cursor-pointer rounded-2xl p-5 border transition ${
                  selectedPlan === 'single'
                    ? 'bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/50'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Option 1 (Current Grade)</span>
                    <h3 className="text-lg font-bold text-white mt-0.5">Single Grade Access</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Unlocks all textbooks, short notes & exams for <strong className="text-emerald-400">{user?.grade || 'Your Selected Grade'}</strong>.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-emerald-400">200 <span className="text-xs">ETB</span></div>
                    <span className="text-[10px] text-slate-400">One-time fee</span>
                  </div>
                </div>
              </div>
            )}

            <div
              onClick={() => {
                setSelectedPlan('all');
                if (isPaidSingleGrade) {
                  setIsUpgrading(true);
                } else {
                  setIsUpgrading(false);
                }
              }}
              className={`cursor-pointer rounded-2xl p-5 border transition ${
                selectedPlan === 'all'
                  ? 'bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/50'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              } ${isUpgrading ? 'md:col-span-2' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                    {isUpgrading ? 'Upgrade Plan (Remaining Difference)' : 'Option 2 (Recommended)'}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {isUpgrading ? 'Complete All-Access Upgrade' : 'All Grades & Streams (Full Access)'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {isUpgrading
                      ? 'Upgrades your 200 ETB single grade to All-Access across Grade 9, 10, 11, and 12.'
                      : 'Unlocks Grade 9, 10, 11, 12-Natural & 12-Social forever.'}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-indigo-400">{isUpgrading ? '100' : '300'} <span className="text-xs">ETB</span></div>
                  <span className="text-[10px] text-slate-400">{isUpgrading ? 'Upgrade fee (you paid 200)' : 'One-time full access'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Official Instructions Callout Required by Admin */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border-2 border-emerald-500/60 shadow-lg space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Payment Instructions</span>
            </div>
            <p className="text-sm font-medium text-slate-100 leading-relaxed">
              To complete your payment, please transfer{' '}
              {isUpgrading ? (
                <strong className="text-emerald-400 font-bold">100 ETB for the All-Access Upgrade</strong>
              ) : selectedPlan === 'all' ? (
                <strong className="text-indigo-400 font-bold">300 ETB for All-Grades Full Access</strong>
              ) : (
                <strong className="text-emerald-400 font-bold">200 ETB for 1 Grade ({user?.grade || 'Current Grade'})</strong>
              )}{' '}
              via <strong className="text-white">CBE</strong> or <strong className="text-white">Telebirr</strong> to: CBE{' '}
              <span className="font-mono text-emerald-300 font-bold bg-slate-950 px-2 py-0.5 rounded border border-emerald-500/40">{settings?.cbe_account || '1000616679434'}</span>{' '}
              or Telebirr{' '}
              <span className="font-mono text-emerald-300 font-bold bg-slate-950 px-2 py-0.5 rounded border border-emerald-500/40">{settings?.telebirr_number || '0994847287'}</span>{' '}
              (<strong className="text-amber-300">{settings?.cbe_name || 'NAFKUN ASEFA'}</strong>), then fill out the form below. After you submit the form, send{' '}
              <span className="text-sky-300 font-semibold italic">
                "I have paid for {isUpgrading ? 'All Grades Upgrade' : selectedPlan === 'all' ? 'All Grades (Full Access)' : (user?.grade || 'my grade')}"
              </span>{' '}
              to Telegram <a href="https://t.me/wiznfk4" target="_blank" rel="noreferrer" className="text-sky-400 underline font-bold hover:text-sky-300">@wiznfk4</a> for instant activation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: 4 Step Payment Instructions & Accounts */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-md">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>How to Pay (Step-by-Step)</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Follow these 4 simple steps to activate your account:
                </p>
              </div>

              {/* Steps List */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600/30 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <strong className="text-white block">Open Mobile Banking or Telebirr App</strong>
                    <span>Open your Telebirr app, CBE Mobile Banking, or Bank app on your phone.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600/30 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <strong className="text-white block">
                      Deposit {isUpgrading ? '100 ETB' : selectedPlan === 'all' ? '300 ETB' : '200 ETB'}
                    </strong>
                    <span>Transfer {isUpgrading ? '100 ETB (Remaining Upgrade Difference)' : selectedPlan === 'all' ? '300 ETB (Complete All-Access across all grades)' : `200 ETB (Single Grade Access for ${user?.grade || 'Current Grade'})`} to {settings?.cbe_name || 'NAFKUN ASEFA'}.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600/30 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <strong className="text-white block">Take a Screenshot</strong>
                    <span>Capture a screenshot of your transfer confirmation message or receipt slip.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600/30 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    4
                  </span>
                  <div>
                    <strong className="text-white block">Submit Below & Message on Telegram</strong>
                    <span>Upload your screenshot below. For instant activation, message <strong className="text-sky-400">@wiznfk4</strong> on Telegram.</span>
                  </div>
                </div>
              </div>

              {/* Payment Accounts */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Official Deposit Accounts
                </h3>

                {/* CBE / CBEBirr */}
                <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-bold text-xs">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      <span>Commercial Bank of Ethiopia (CBE)</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 font-bold border border-indigo-800">
                      Primary
                    </span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Account: <strong className="text-emerald-400 font-mono text-sm tracking-wider">{settings?.cbe_account || '1000616679434'}</strong>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Account Name: <strong className="text-white">{settings?.cbe_name || 'NAFKUN ASEFA'}</strong>
                  </div>
                </div>

                {/* Telebirr */}
                <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-bold text-xs">
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span>Telebirr</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold border border-emerald-800">
                      Instant
                    </span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Phone / Number: <strong className="text-emerald-400 font-mono text-sm tracking-wider">{settings?.telebirr_number || '0994847287'}</strong>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Account Name: <strong className="text-white">{settings?.telebirr_name || settings?.cbe_name || 'NAFKUN ASEFA'}</strong>
                  </div>
                </div>

                {/* Awash Bank if configured */}
                {settings?.awash_account && (
                  <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white font-bold text-xs">
                        <Building2 className="w-4 h-4 text-sky-400" />
                        <span>Awash Bank</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-400 font-bold border border-sky-800">
                        Awash
                      </span>
                    </div>
                    <div className="text-xs text-slate-300">
                      Account: <strong className="text-emerald-400 font-mono text-sm tracking-wider">{settings.awash_account}</strong>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Account Name: <strong className="text-white">{settings.awash_name || settings?.cbe_name || 'NAFKUN ASEFA'}</strong>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Upload Screenshot Form & Telegram Alternative */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h2 className="text-base font-bold text-white">Send Screenshot Proof</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No complicated transaction IDs required. Simply upload your screenshot.
                  </p>
                </div>

                {submitError && (
                  <div className="p-3 bg-red-950/80 border border-red-500/60 rounded-xl text-xs text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {submitSuccess && (
                  <div className="p-4 bg-emerald-950/90 border border-emerald-500 rounded-2xl text-xs text-emerald-200 flex items-start gap-3 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-white">Screenshot Sent Successfully!</div>
                      <p className="text-slate-300">
                        Your payment screenshot has been sent to the Admin and is currently waiting for approval. Your account will automatically unlock as soon as the Admin approves it.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Phone Number
                    </label>
                    <input
                      type="text"
                      disabled
                      value={user?.phone_number || ''}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-emerald-400 font-mono cursor-not-allowed font-bold"
                    />
                  </div>

                  {/* Screenshot Drag & Drop */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Payment Screenshot <span className="text-emerald-400">*</span>
                    </label>
                    <div
                      onDragOver={e => e.preventDefault()}
                      onDrop={handleDrop}
                      className="border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-2xl p-6 text-center transition cursor-pointer bg-slate-950/40 relative"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />

                      {previewUrl ? (
                        <div className="space-y-2">
                          <img
                            src={previewUrl}
                            alt="Receipt preview"
                            className="max-h-36 mx-auto rounded-lg object-contain shadow-sm border border-slate-700"
                          />
                          <div className="text-[11px] text-emerald-400 font-semibold">
                            {selectedFile?.name} (Click to change)
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 text-slate-400">
                          <Upload className="w-8 h-8 text-slate-500 mx-auto" />
                          <div className="text-xs font-medium text-slate-300">
                            Drop screenshot here, or <span className="text-emerald-400 underline">browse</span>
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Supports PNG, JPG, or WebP screenshot
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-900/30 disabled:opacity-50"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? 'Uploading Screenshot...'
                        : isUpgrading
                        ? 'Submit Proof for All-Access Upgrade (100 ETB)'
                        : selectedPlan === 'all'
                        ? 'Submit Proof for All-Access (300 ETB)'
                        : `Submit Proof for ${user?.grade || 'Current Grade'} (200 ETB)`}
                    </span>
                  </button>
                </form>
              </div>

              {/* Alternative: Direct Telegram Link */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-300 text-center">
                  Or Send Directly via Telegram
                </div>
                <a
                  href={`https://t.me/wiznfk4?text=Hello%20EthioLearn%20Admin,%20here%20is%20my%20payment%20proof%20for%20phone%20number:%20${encodeURIComponent(user?.phone_number || '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-sky-600/90 hover:bg-sky-500 text-white rounded-xl font-bold text-xs shadow-md transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Screenshot to Telegram (@wiznfk4)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
                <p className="text-[11px] text-slate-400 text-center">
                  Admin reviews receipts immediately and unlocks your grade access.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
