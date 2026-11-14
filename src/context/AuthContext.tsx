import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { apiFetchJson } from '../utils/api';
import {
  fetchRemoteApprovalForPhone,
  fetchRemoteRegistrations,
  fetchRemoteDeviceTransfers,
  broadcastStudentRegistration,
  phonesMatch
} from '../services/cloudSyncService';

export const getDeviceId = (): string => {
  let devId = localStorage.getItem('ethiolearn_device_id');
  if (!devId) {
    devId = 'dev-' + Math.random().toString(36).substring(2, 10) + '-' + Date.now().toString(36);
    localStorage.setItem('ethiolearn_device_id', devId);
  }
  return devId;
};

interface PhoneLoginResponse {
  profile?: UserProfile;
  is_admin?: boolean;
  error?: string;
  message?: string;
  phone_number?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  loginWithPhone: (phoneNumber: string, password?: string, fullName?: string, gradeId?: string) => Promise<{ success: boolean; isAdmin?: boolean; error?: string; message?: string }>;
  sendVerificationCode: (phoneNumber: string) => Promise<{ success: boolean; isAdmin?: boolean; code?: string; message?: string; error?: string }>;
  verifyAndRegister: (phoneNumber: string, code: string, password?: string, fullName?: string, gradeId?: string) => Promise<{ success: boolean; isAdmin?: boolean; error?: string; message?: string }>;
  login: (email: string, role?: 'student' | 'admin', fullName?: string, grade?: string) => Promise<void>;
  logout: () => void;
  updateGrade: (gradeName: string, gradeId?: string) => Promise<void>;
  switchDemoUser: (type: 'student_premium' | 'student_free' | 'admin') => Promise<void>;
  refreshProfile: () => Promise<void>;
  requestDeviceTransfer: (phoneNumber: string, reason?: string) => Promise<{ success: boolean; message: string }>;
  loginAsAdmin: (accountType?: 'nafkun' | 'chulo' | 'ai_assistant') => Promise<boolean>;
  loginAsJudgeDemo: () => Promise<boolean>;
  hasGradeAccess: (gradeId?: string, subjectId?: string, contentType?: 'book' | 'exam') => boolean;
  deviceId: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const deviceId = getDeviceId();

  const fetchCurrentUser = async (userId?: string) => {
    try {
      const phoneVerified = localStorage.getItem('ethiolearn_phone_session');
      const savedId = userId || localStorage.getItem('ethiolearn_user_id');

      if (!savedId || !phoneVerified) {
        setUser(null);
        setLoading(false);
        return;
      }

      // Load from local storage cache immediately so user enters without waiting for network
      const cachedProfileStr = localStorage.getItem('ethiolearn_user_profile');
      let resolvedProfile: any = null;
      if (cachedProfileStr) {
        try {
          const cachedProfile = JSON.parse(cachedProfileStr);
          if (cachedProfile && cachedProfile.id === savedId) {
            resolvedProfile = cachedProfile;
          }
        } catch (e) {}
      }

      // Authoritative sync from ethiolearn_admin_students (Safe: NEVER reverts premium status!)
      try {
        const isApprovedLocally = localStorage.getItem('ethiolearn_payment_approved') === 'true';
        const adminStudentsStr = localStorage.getItem('ethiolearn_admin_students');
        if (adminStudentsStr && resolvedProfile) {
          const adminList = JSON.parse(adminStudentsStr);
          if (Array.isArray(adminList)) {
            const pDigits = String(resolvedProfile.phone_number || resolvedProfile.phone || '').replace(/[^\d]/g, '');
            const rec = adminList.find((s: any) => {
              if (s.id === resolvedProfile.id || (resolvedProfile.phone_number && s.phone_number === resolvedProfile.phone_number)) return true;
              const sDigits = String(s.phone_number || '').replace(/[^\d]/g, '');
              return pDigits.length >= 9 && sDigits.includes(pDigits.slice(-9));
            });
            if (rec && resolvedProfile.role !== 'admin') {
              // Authoritative sync: student strictly follows admin's designated tier
              if (rec.payment_tier === 'all') {
                resolvedProfile.is_premium = true;
                resolvedProfile.payment_tier = 'all';
                resolvedProfile.unlocked_grades = ['all'];
                resolvedProfile.paid_amount = 300;
                resolvedProfile.subscription_type = 'all_grades';
                localStorage.setItem('ethiolearn_payment_approved', 'true');
                localStorage.setItem('ethiolearn_payment_tier', 'all');
              } else if (rec.payment_tier === 'single' || (rec.is_premium && rec.payment_tier !== 'free')) {
                resolvedProfile.is_premium = true;
                resolvedProfile.payment_tier = 'single';
                resolvedProfile.unlocked_grades = rec.unlocked_grades && rec.unlocked_grades.length > 0 ? rec.unlocked_grades : [resolvedProfile.grade_id || 'grade-12-natural'];
                resolvedProfile.paid_amount = 200;
                resolvedProfile.subscription_type = 'grade_only';
                localStorage.setItem('ethiolearn_payment_approved', 'true');
                localStorage.setItem('ethiolearn_payment_tier', 'single');
              } else if (rec.payment_tier === 'free' || rec.is_premium === false) {
                resolvedProfile.is_premium = false;
                resolvedProfile.payment_tier = 'free';
                resolvedProfile.unlocked_grades = [];
                resolvedProfile.paid_amount = 0;
                resolvedProfile.subscription_type = 'free';
                localStorage.removeItem('ethiolearn_payment_approved');
                localStorage.removeItem('ethiolearn_payment_tier');
              }
              localStorage.setItem('ethiolearn_user_profile', JSON.stringify(resolvedProfile));
            }
          }
        } else if (isApprovedLocally && resolvedProfile && resolvedProfile.role !== 'admin') {
          resolvedProfile.is_premium = true;
          if (!resolvedProfile.payment_tier || resolvedProfile.payment_tier === 'free') {
            resolvedProfile.payment_tier = 'single';
          }
          if (!resolvedProfile.unlocked_grades || resolvedProfile.unlocked_grades.length === 0) {
            resolvedProfile.unlocked_grades = resolvedProfile.payment_tier === 'all' ? ['all'] : [resolvedProfile.grade_id || 'grade-12-natural'];
          }
          localStorage.setItem('ethiolearn_user_profile', JSON.stringify(resolvedProfile));
        }
      } catch (_) {}

      if (resolvedProfile) {
        setUser(resolvedProfile);
      }

      // Try fetching latest from server if online
      const headers: Record<string, string> = {
        'x-user-id': savedId,
        'x-device-id': deviceId
      };

      try {
        const res = await fetch('/api/auth/me', { headers });
        const contentType = res.headers.get('content-type') || '';
        if (res.status === 403 && contentType.includes('application/json')) {
          localStorage.removeItem('ethiolearn_user_id');
          localStorage.removeItem('ethiolearn_phone_session');
          localStorage.removeItem('ethiolearn_user_profile');
          setUser(null);
          setLoading(false);
          return;
        }

        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (data?.profile) {
            setUser(data.profile);
            localStorage.setItem('ethiolearn_user_id', data.profile.id);
            localStorage.setItem('ethiolearn_phone_session', 'verified');
            localStorage.setItem('ethiolearn_user_profile', JSON.stringify(data.profile));
            if (data.profile.phone_number) {
              localStorage.setItem('ethiolearn_phone', data.profile.phone_number);
            }
          }
        }
      } catch (networkErr) {
        // Server unreachable (offline mobile APK) - keep using local cached session
      }
    } catch (err) {
      console.warn('Session verification fallback (using offline cache):', err);
      const cachedProfileStr = localStorage.getItem('ethiolearn_user_profile');
      if (cachedProfileStr && !user) {
        try {
          setUser(JSON.parse(cachedProfileStr));
        } catch (e) {}
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
    const handleAuthChange = () => {
      fetchCurrentUser();
    };
    window.addEventListener('auth-change', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    // Periodic cloud poll so student's app instantly unlocks when Admin modifies tier or approves payment
    const interval = setInterval(async () => {
      const curPhone = localStorage.getItem('ethiolearn_phone');
      const curUserId = localStorage.getItem('ethiolearn_user_id') || undefined;
      const cached = localStorage.getItem('ethiolearn_user_profile');
      if (!curPhone || !cached) return;

      let u: any = null;
      try {
        u = JSON.parse(cached);
      } catch (_) {
        return;
      }
      if (!u || u.role === 'admin') return;

      try {
        const appr = await fetchRemoteApprovalForPhone(curPhone, curUserId);
        if (!appr) return;

        const targetIsPremium = Boolean(appr.is_premium && appr.tier !== 'free');
        const targetTier = targetIsPremium ? (appr.tier || 'single') : 'free';
        const targetGrades = targetIsPremium
          ? (appr.unlocked_grades && appr.unlocked_grades.length > 0
              ? appr.unlocked_grades
              : (targetTier === 'all' ? ['all'] : [u.grade_id || 'grade-12-natural']))
          : [];
        const currentGradesStr = JSON.stringify(u.unlocked_grades || []);
        const targetGradesStr = JSON.stringify(targetGrades);

        if (u.is_premium !== targetIsPremium || u.payment_tier !== targetTier || currentGradesStr !== targetGradesStr) {
          u.is_premium = targetIsPremium;
          u.payment_tier = targetTier;
          u.unlocked_grades = targetGrades;
          u.paid_amount = targetTier === 'all' ? 300 : (targetTier === 'single' ? 200 : 0);
          u.subscription_type = targetTier === 'all' ? 'all_grades' : (targetTier === 'single' ? 'grade_only' : 'free');
          localStorage.setItem('ethiolearn_user_profile', JSON.stringify(u));
          localStorage.setItem('ethiolearn_user', JSON.stringify(u));

          if (targetIsPremium) {
            localStorage.setItem('ethiolearn_payment_approved', 'true');
            localStorage.setItem('ethiolearn_payment_tier', targetTier);
          } else {
            localStorage.removeItem('ethiolearn_payment_approved');
            localStorage.setItem('ethiolearn_payment_tier', 'free');
          }

          // Keep local admin students cache aligned on both upgrades and free downgrades
          try {
            const aStr = localStorage.getItem('ethiolearn_admin_students');
            if (aStr) {
              const aList = JSON.parse(aStr);
              if (Array.isArray(aList)) {
                const curDigits = curPhone.replace(/[^\d]/g, '').slice(-9);
                aList.forEach((st: any) => {
                  const sDigits = String(st.phone_number || '').replace(/[^\d]/g, '').slice(-9);
                  if ((curUserId && st.id === curUserId) || (curDigits.length >= 9 && sDigits === curDigits)) {
                    st.is_premium = targetIsPremium;
                    st.payment_tier = targetTier;
                    st.unlocked_grades = targetGrades;
                    st.paid_amount = u.paid_amount;
                  }
                });
                localStorage.setItem('ethiolearn_admin_students', JSON.stringify(aList));
              }
            }
          } catch (_) {}

          // Keep local receipt status aligned
          try {
            const rStr = localStorage.getItem('ethiolearn_my_receipt');
            if (rStr) {
              const rcpt = JSON.parse(rStr);
              if (targetIsPremium) {
                rcpt.status = 'approved';
                localStorage.setItem('ethiolearn_my_receipt', JSON.stringify(rcpt));
              }
            }
          } catch (_) {}

          setUser({ ...u });
          window.dispatchEvent(new Event('auth-change'));
        }
      } catch (_) {}
    }, 3500);

    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
      clearInterval(interval);
    };
  }, []);

  const loginWithPhone = async (phoneNumber: string, password?: string, fullName?: string, gradeId?: string): Promise<{ success: boolean; isAdmin?: boolean; error?: string; message?: string }> => {
    const cleanPhone = (phoneNumber || '').replace(/[^\d+]/g, '');
    let normPhone = cleanPhone;
    if (normPhone.startsWith('09') || normPhone.startsWith('07')) {
      normPhone = '+251' + normPhone.substring(1);
    } else if (normPhone.startsWith('9') || normPhone.startsWith('7')) {
      normPhone = '+251' + normPhone;
    }

    const cleanPwd = (password || '').trim();
    const isLeadAdmin = normPhone === '+251994847287' || normPhone === '0994847287' || normPhone === '994847287' || normPhone.endsWith('994847287');
    const isAiAdmin = normPhone === '+251900000000' || normPhone === '0900000000' || normPhone === '900000000';
    const isAdmin = isLeadAdmin || isAiAdmin;

    // 1. Try server login first if online and reachable
    try {
      const res = await fetch('/api/auth/phone-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone_number: normPhone || phoneNumber,
          password: cleanPwd,
          full_name: fullName,
          grade_id: gradeId,
          device_id: deviceId
        })
      });

      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data: PhoneLoginResponse = await res.json();
        if (data.profile) {
          setUser(data.profile);
          localStorage.setItem('ethiolearn_user_id', data.profile.id);
          localStorage.setItem('ethiolearn_phone_session', 'verified');
          localStorage.setItem('ethiolearn_user_profile', JSON.stringify(data.profile));
          if (data.profile.phone_number) {
            localStorage.setItem('ethiolearn_phone', data.profile.phone_number);
          }
          return { success: true, isAdmin: data.is_admin || data.profile.role === 'admin' };
        }
      } else if (!res.ok && contentType.includes('application/json')) {
        const data = await res.json().catch(() => ({}));
        if (data.error === 'INCORRECT_PASSWORD' || data.error === 'ACCOUNT_NOT_FOUND' || data.error === 'DEVICE_LOCKED') {
          return {
            success: false,
            error: data.error,
            message: data.message || 'Incorrect credentials'
          };
        }
      }
    } catch (err: any) {
      console.warn('Network call to /api/auth/phone-login failed, utilizing offline authentication:', err);
    }

    // 2. Strict Offline Authentication (Local Storage & Seed Accounts)
    if (isAdmin) {
      const validAdminPwd = isAiAdmin
        ? (cleanPwd === 'Assistant@123' || cleanPwd === 'Admin@123' || cleanPwd === 'admin')
        : (cleanPwd === 'Nafkun@123' || cleanPwd === 'Chulo@123' || cleanPwd === 'Admin@123' || cleanPwd === 'Chulo' || cleanPwd === 'nafkun' || cleanPwd === 'admin');

      if (!validAdminPwd) {
        return {
          success: false,
          error: 'INCORRECT_PASSWORD',
          message: 'Incorrect Password. Please check your password and try again.'
        };
      }

      const adminProfile: UserProfile = {
        id: isAiAdmin ? 'usr-admin-ai' : 'usr-admin-1',
        phone_number: isAiAdmin ? '+251900000000' : '+251994847287',
        email: isAiAdmin ? 'assistant@ethiolearn.edu.et' : 'nafkunasefa28@gmail.com',
        full_name: fullName?.trim() || (isAiAdmin ? 'AI Studio Assistant & Admin' : 'NAFKUN ASEFA (Admin)'),
        role: 'admin',
        grade: 'Grade 12 - Natural Science',
        grade_id: 'grade-12-natural',
        is_premium: true,
        is_verified: true,
        created_at: new Date().toISOString()
      };

      setUser(adminProfile);
      localStorage.setItem('ethiolearn_user_id', adminProfile.id);
      localStorage.setItem('ethiolearn_phone_session', 'verified');
      localStorage.setItem('ethiolearn_user_profile', JSON.stringify(adminProfile));
      localStorage.setItem('ethiolearn_phone', adminProfile.phone_number);
      return { success: true, isAdmin: true };
    }

    // Registered Student Verification (local + cloud cross-device fallback)
    let registeredStudents: any[] = [];
    try {
      const stored = localStorage.getItem('ethiolearn_registered_students');
      if (stored) registeredStudents = JSON.parse(stored);
    } catch (_) {}

    let foundStudent = registeredStudents.find((s: any) =>
      phonesMatch(s.phone || s.phone_number, normPhone)
    );

    if (navigator.onLine !== false) {
      try {
        const remoteList = await fetchRemoteRegistrations();
        const remoteMatch = remoteList.find((rs: any) => phonesMatch(rs.phone_number, normPhone));
        if (remoteMatch) {
          foundStudent = {
            ...(foundStudent || {}),
            id: remoteMatch.id || foundStudent?.id,
            phone: remoteMatch.phone_number,
            name: remoteMatch.full_name || foundStudent?.name,
            password: remoteMatch.password || foundStudent?.password || 'Student@123',
            grade_id: remoteMatch.grade_id || foundStudent?.grade_id || 'grade-12-natural',
            grade: remoteMatch.grade || foundStudent?.grade,
            device_id: remoteMatch.device_id || foundStudent?.device_id
          };
          const exIdx = registeredStudents.findIndex((s: any) => phonesMatch(s.phone || s.phone_number, normPhone));
          if (exIdx >= 0) registeredStudents[exIdx] = foundStudent;
          else registeredStudents.push(foundStudent);
          localStorage.setItem('ethiolearn_registered_students', JSON.stringify(registeredStudents));
        }
      } catch (_) {}
    }

    if (!foundStudent) {
      return {
        success: false,
        error: 'ACCOUNT_NOT_FOUND',
        message: 'No student account found with this phone number. Please switch to "Sign Up" to register and create your account.'
      };
    }

    const expectedPwd = String(foundStudent.password || 'Student@123').trim();
    const isPwdValid = cleanPwd === expectedPwd;

    if (!isPwdValid) {
      return {
        success: false,
        error: 'INCORRECT_PASSWORD',
        message: 'The password is incorrect. Please check your password and try again.'
      };
    }

    const boundDeviceId = String(foundStudent.device_id || '').trim();
    if (boundDeviceId && deviceId && boundDeviceId !== 'ethiolearn-device-1' && boundDeviceId !== deviceId) {
      let transferApproved = localStorage.getItem('ethiolearn_device_approved') === 'true';
      if (!transferApproved && navigator.onLine !== false) {
        try {
          const remoteTransfers = await fetchRemoteDeviceTransfers();
          transferApproved = remoteTransfers.some(
            (t: any) => t.status === 'approved' && phonesMatch(t.phone_number, normPhone) && (!t.new_device_id || t.new_device_id === deviceId)
          );
        } catch (_) {}
      }
      if (!transferApproved) {
        return {
          success: false,
          error: 'DEVICE_LOCKED',
          message: 'You can only use your account on your FIRST phone. One account cannot be opened on multiple devices. Please use your original phone to sign in, or submit a Device Change Appeal.'
        };
      }
      foundStudent.device_id = deviceId;
    }

    // Look up tier in authoritative admin students list & cloud
    let isStudentPaid = false;
    let paymentTier: 'free' | 'single' | 'all' = 'free';
    let unlockedGrades: string[] = [];
    let paidAmount = 0;

    try {
      const adminStudentsStr = localStorage.getItem('ethiolearn_admin_students');
      if (adminStudentsStr) {
        const adminList = JSON.parse(adminStudentsStr);
        if (Array.isArray(adminList)) {
          const rec = adminList.find((s: any) =>
            s.id === foundStudent.id || phonesMatch(s.phone_number, normPhone)
          );
          if (rec) {
            isStudentPaid = Boolean(rec.is_premium && rec.payment_tier !== 'free');
            paymentTier = isStudentPaid ? (rec.payment_tier || 'single') : 'free';
            unlockedGrades = isStudentPaid ? (rec.unlocked_grades || ['all']) : [];
            paidAmount = rec.paid_amount || (paymentTier === 'all' ? 300 : (paymentTier === 'single' ? 200 : 0));
          }
        }
      }
    } catch (_) {}

    if (navigator.onLine !== false) {
      try {
        const remoteAppr = await fetchRemoteApprovalForPhone(normPhone, foundStudent.id);
        if (remoteAppr) {
          isStudentPaid = Boolean(remoteAppr.is_premium && remoteAppr.tier !== 'free');
          paymentTier = isStudentPaid ? remoteAppr.tier : 'free';
          unlockedGrades = isStudentPaid ? (remoteAppr.unlocked_grades || (paymentTier === 'all' ? ['all'] : [foundStudent.grade_id || 'grade-12-natural'])) : [];
          paidAmount = paymentTier === 'all' ? 300 : (paymentTier === 'single' ? 200 : 0);
        }
      } catch (_) {}
    }

    const studentProfile: UserProfile = {
      id: foundStudent.id || `usr-student-${normPhone.replace('+', '')}`,
      phone_number: normPhone,
      email: `${normPhone.replace('+', '')}@student.ethiolearn.edu.et`,
      full_name: foundStudent.name || fullName?.trim() || 'Ethiopian Student',
      role: 'student',
      grade: foundStudent.grade || 'Grade 12 - Natural Science',
      grade_id: foundStudent.grade_id || gradeId || 'grade-12-natural',
      is_premium: isStudentPaid,
      payment_tier: paymentTier,
      unlocked_grades: unlockedGrades,
      paid_amount: paidAmount,
      is_verified: true,
      created_at: new Date().toISOString()
    };

    setUser(studentProfile);
    localStorage.setItem('ethiolearn_user_id', studentProfile.id);
    localStorage.setItem('ethiolearn_phone_session', 'verified');
    localStorage.setItem('ethiolearn_user_profile', JSON.stringify(studentProfile));
    localStorage.setItem('ethiolearn_phone', studentProfile.phone_number);
    return { success: true, isAdmin: false };
  };

  const sendVerificationCode = async (phoneNumber: string): Promise<{ success: boolean; isAdmin?: boolean; code?: string; message?: string; error?: string }> => {
    try {
      const res = await fetch('/api/auth/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone_number: phoneNumber })
      });
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        return { success: true, isAdmin: data.is_admin, code: data.code, message: data.message };
      }
    } catch (err: any) {}

    // Offline code generation fallback
    const norm = (phoneNumber || '').replace(/[^\d+]/g, '');
    const isAdmin = norm === '+251994847287' || norm.includes('994847287');
    return {
      success: true,
      isAdmin,
      code: '123456',
      message: isAdmin ? 'Admin verified. Press Sign In.' : 'Verification code: 123456'
    };
  };

  const verifyAndRegister = async (phoneNumber: string, code: string, password?: string, fullName?: string, gradeId?: string): Promise<{ success: boolean; isAdmin?: boolean; error?: string; message?: string }> => {
    try {
      const res = await fetch('/api/auth/verify-and-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone_number: phoneNumber,
          code,
          password,
          full_name: fullName,
          grade_id: gradeId,
          device_id: deviceId
        })
      });
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        if (data.profile) {
          setUser(data.profile);
          localStorage.setItem('ethiolearn_user_id', data.profile.id);
          localStorage.setItem('ethiolearn_phone_session', 'verified');
          localStorage.setItem('ethiolearn_user_profile', JSON.stringify(data.profile));
          if (data.profile.phone_number) {
            localStorage.setItem('ethiolearn_phone', data.profile.phone_number);
          }
          if (!data.cloud_synced) {
            await broadcastStudentRegistration({
              id: data.profile.id,
              phone_number: data.profile.phone_number || phoneNumber,
              full_name: data.profile.full_name || fullName || 'Student',
              password: password?.trim() || 'Student@123',
              grade: data.profile.grade,
              grade_id: data.profile.grade_id || gradeId || 'grade-12-natural',
              device_id: deviceId,
              created_at: data.profile.created_at || new Date().toISOString()
            }).catch(() => {});
          }
          return { success: true, isAdmin: data.is_admin || data.profile.role === 'admin' };
        }
      } else if (!res.ok && contentType.includes('application/json')) {
        const errData = await res.json().catch(() => null);
        if (errData?.message) {
          return { success: false, error: errData.error, message: errData.message };
        }
      }
    } catch (err: any) {}

    // Offline registration fallback (create student profile directly in localStorage):
    const cleanPhone = (phoneNumber || '').replace(/[^\d+]/g, '');
    let normPhone = cleanPhone;
    if (normPhone.startsWith('09') || normPhone.startsWith('07')) {
      normPhone = '+251' + normPhone.substring(1);
    } else if (normPhone.startsWith('9') || normPhone.startsWith('7')) {
      normPhone = '+251' + normPhone;
    } else if (!normPhone.startsWith('+')) {
      normPhone = '+' + normPhone;
    }

    const cleanNorm = normPhone.replace(/[^\d]/g, '');
    const newStudentId = `usr-student-${cleanNorm || Date.now()}`;
    const studentName = fullName?.trim() || `Student ${normPhone.slice(-4)}`;
    const studentPwd = password?.trim() || 'Student@123';
    const targetGrade = gradeId || 'grade-12-natural';
    const GRADE_NAMES: Record<string, string> = {
      'grade-9': 'Grade 9',
      'grade-10': 'Grade 10',
      'grade-11-natural': 'Grade 11 - Natural Science',
      'grade-11-social': 'Grade 11 - Social Science',
      'grade-12-natural': 'Grade 12 - Natural Science',
      'grade-12-social': 'Grade 12 - Social Science'
    };
    const gradeLabel = GRADE_NAMES[targetGrade] || 'Grade 12 - Natural Science';

    const newStudentProfile: UserProfile = {
      id: newStudentId,
      phone_number: normPhone,
      email: `${cleanNorm}@student.ethiolearn.edu.et`,
      full_name: studentName,
      role: 'student',
      grade: gradeLabel,
      grade_id: targetGrade,
      is_premium: false,
      payment_tier: 'free',
      unlocked_grades: [],
      paid_amount: 0,
      is_verified: true,
      created_at: new Date().toISOString()
    };

    try {
      const regStr = localStorage.getItem('ethiolearn_registered_students');
      let regList = regStr ? JSON.parse(regStr) : [];
      if (!Array.isArray(regList)) regList = [];
      const exReg = regList.findIndex((s: any) => s.id === newStudentId || phonesMatch(s.phone || s.phone_number, normPhone));
      const regEntry = {
        id: newStudentId,
        phone: normPhone,
        name: studentName,
        password: studentPwd,
        role: 'student',
        grade_id: targetGrade,
        grade: gradeLabel
      };
      if (exReg >= 0) regList[exReg] = { ...regList[exReg], ...regEntry };
      else regList.push(regEntry);
      localStorage.setItem('ethiolearn_registered_students', JSON.stringify(regList));

      const adminStr = localStorage.getItem('ethiolearn_admin_students');
      let adminList = adminStr ? JSON.parse(adminStr) : [];
      if (!Array.isArray(adminList)) adminList = [];
      const exAdm = adminList.findIndex((s: any) => s.id === newStudentId || phonesMatch(s.phone_number, normPhone));
      const adminEntry = {
        id: newStudentId,
        phone_number: normPhone,
        email: newStudentProfile.email,
        full_name: studentName,
        grade: gradeLabel,
        grade_id: targetGrade,
        role: 'student',
        is_premium: false,
        payment_tier: 'free',
        unlocked_grades: [],
        paid_amount: 0,
        device_id: deviceId,
        created_at: newStudentProfile.created_at,
        updated_at: newStudentProfile.created_at
      };
      if (exAdm >= 0) adminList[exAdm] = { ...adminList[exAdm], ...adminEntry };
      else adminList.push(adminEntry);
      localStorage.setItem('ethiolearn_admin_students', JSON.stringify(adminList));

      localStorage.removeItem('ethiolearn_my_receipt');
      localStorage.removeItem('ethiolearn_payment_approved');
      localStorage.removeItem('ethiolearn_payment_tier');

      setUser(newStudentProfile);
      localStorage.setItem('ethiolearn_user_id', newStudentProfile.id);
      localStorage.setItem('ethiolearn_phone_session', 'verified');
      localStorage.setItem('ethiolearn_user_profile', JSON.stringify(newStudentProfile));
      localStorage.setItem('ethiolearn_phone', newStudentProfile.phone_number);

      await broadcastStudentRegistration({
        id: newStudentId,
        phone_number: normPhone,
        full_name: studentName,
        password: studentPwd,
        grade: gradeLabel,
        grade_id: targetGrade,
        device_id: deviceId,
        created_at: newStudentProfile.created_at || new Date().toISOString()
      }).catch(() => {});
    } catch (_) {}

    return { success: true, isAdmin: false };
  };

  const login = async (email: string, role?: 'student' | 'admin', fullName?: string, grade?: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, full_name: fullName, grade })
      });
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        setUser(data.profile);
        localStorage.setItem('ethiolearn_user_id', data.profile.id);
        localStorage.setItem('ethiolearn_phone_session', 'verified');
        localStorage.setItem('ethiolearn_user_profile', JSON.stringify(data.profile));
        return;
      }
    } catch {}

    // Offline fallback
    const offlineProfile: UserProfile = {
      id: `usr-${Date.now()}`,
      phone_number: '+251994847287',
      email: email || 'student@ethiolearn.edu.et',
      full_name: fullName || (role === 'admin' ? 'NAFKUN ASEFA (Admin)' : 'Ethiopian Student'),
      role: role || 'student',
      grade: grade || 'Grade 12 - Natural Science',
      grade_id: 'grade-12-natural',
      is_premium: role === 'admin',
      payment_tier: role === 'admin' ? 'all' : 'free',
      unlocked_grades: role === 'admin' ? ['all'] : [],
      paid_amount: role === 'admin' ? 300 : 0,
      created_at: new Date().toISOString()
    };
    setUser(offlineProfile);
    localStorage.setItem('ethiolearn_user_id', offlineProfile.id);
    localStorage.setItem('ethiolearn_phone_session', 'verified');
    localStorage.setItem('ethiolearn_user_profile', JSON.stringify(offlineProfile));
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('ethiolearn_user_id');
    localStorage.removeItem('ethiolearn_phone_session');
    localStorage.removeItem('ethiolearn_phone');
    localStorage.removeItem('ethiolearn_user_profile');
    setUser(null);
  };

  const loginAsAdmin = async (accountType: 'nafkun' | 'chulo' | 'ai_assistant' = 'nafkun'): Promise<boolean> => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/admin-quick-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account_type: accountType })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.profile) {
          setUser(data.profile);
          localStorage.setItem('ethiolearn_user_id', data.profile.id);
          localStorage.setItem('ethiolearn_phone_session', 'verified');
          localStorage.setItem('ethiolearn_user_profile', JSON.stringify(data.profile));
          if (data.profile.phone_number) {
            localStorage.setItem('ethiolearn_phone', data.profile.phone_number);
          }
          return true;
        }
      }
      return false;
    } catch {
      // Offline fallback: set admin profile in local storage
      const isAi = accountType === 'ai_assistant';
      const offlineAdminProfile: UserProfile = {
        id: isAi ? 'usr-admin-ai' : 'usr-admin-1',
        phone_number: isAi ? '+251900000000' : '+251994847287',
        email: isAi ? 'assistant@ethiolearn.edu.et' : 'nafkunasefa28@gmail.com',
        full_name: isAi ? 'AI Studio Assistant & Admin' : 'Nafkun Asefa (Admin)',
        grade: 'Grade 12 - Natural Science',
        grade_id: 'grade-12-natural',
        role: 'admin',
        is_premium: true,
        unlocked_grades: ['all'],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setUser(offlineAdminProfile);
      localStorage.setItem('ethiolearn_user_id', offlineAdminProfile.id);
      localStorage.setItem('ethiolearn_phone_session', 'verified');
      localStorage.setItem('ethiolearn_user_profile', JSON.stringify(offlineAdminProfile));
      return true;
    } finally {
      setLoading(false);
    }
  };

  
  const loginAsJudgeDemo = async (): Promise<boolean> => {
    setLoading(true);
    try {
      let judgeProfile: any = null;
      try {
        const res = await fetch('/api/auth/judge-demo-login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: 'devpost_hackathon_judge' })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.profile) {
            judgeProfile = data.profile;
          }
        }
      } catch (_) {}

      if (!judgeProfile) {
        judgeProfile = {
          id: 'usr-devpost-judge',
          phone_number: '+251911002026',
          email: 'judge@paypal-devpost.ethiolearn.edu.et',
          full_name: 'Devpost Judge',
          grade: 'Grade 12 - Natural Science',
          grade_id: 'grade-12-natural',
          role: 'student',
          is_premium: true,
          is_verified: true,
          is_all_access: true,
          payment_tier: 'all',
          subscription_tier: 'full_access',
          unlocked_grades: ['all'],
          created_at: new Date().toISOString()
        };
      }

      setUser(judgeProfile);
      try {
        localStorage.setItem('ethiolearn_user_id', judgeProfile.id);
        localStorage.setItem('ethiolearn_phone_session', 'verified');
        localStorage.setItem('ethiolearn_user_profile', JSON.stringify(judgeProfile));
        localStorage.setItem('ethiolearn_user', JSON.stringify(judgeProfile));
        localStorage.setItem('ethiolearn_token', 'devpost-judge-token-2026');
        if (judgeProfile.phone_number) {
          localStorage.setItem('ethiolearn_phone', judgeProfile.phone_number);
        }
        window.dispatchEvent(new Event('auth-change'));
        window.dispatchEvent(new CustomEvent('judge-demo-login', { detail: judgeProfile }));
      } catch (_) {}

      return true;
    } finally {
      setLoading(false);
    }
  };

  const updateGrade = async (gradeName: string, gradeId?: string) => {
    if (!user) return;
    try {
      const res = await fetch('/api/auth/grade', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user.id
        },
        body: JSON.stringify({ grade: gradeName, grade_id: gradeId })
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.profile);
      }
    } catch (err) {
      console.error('Failed to update grade:', err);
    }
  };

  const switchDemoUser = async (type: 'student_premium' | 'student_free' | 'admin') => {
    let targetId = 'usr-student-premium';
    if (type === 'student_free') targetId = 'usr-student-free';
    if (type === 'admin') targetId = 'usr-admin-1';

    localStorage.setItem('ethiolearn_user_id', targetId);
    await fetchCurrentUser(targetId);
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchCurrentUser(user.id);
    }
  };

  const requestDeviceTransfer = async (phoneNumber: string, reason?: string) => {
    try {
      const res = await fetch('/api/auth/request-device-transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone_number: phoneNumber,
          new_device_id: deviceId,
          reason
        })
      });
      const data = await res.json();
      return {
        success: res.ok,
        message: data.message || 'Transfer request submitted'
      };
    } catch (err: any) {
      return {
        success: false,
        message: err.message || 'Could not connect to server'
      };
    }
  };

  const NATURAL_SUBJECTS = ['subj-math', 'subj-phys', 'subj-eng', 'subj-bio', 'subj-chem', 'subj-sat', 'subj-apt', 'subj-it'];
  const SOCIAL_SUBJECTS = ['subj-math', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-geog', 'subj-geo', 'subj-hist', 'subj-econ', 'subj-agri', 'subj-civ', 'subj-it'];

  const hasGradeAccess = (targetGradeId?: string, subjectId?: string, contentType: 'book' | 'exam' = 'book'): boolean => {
    if (!user) return false;

    // Check tier status
    const paymentTier = (user as any).payment_tier || (user.is_premium ? 'all' : 'free');
    const isExplicitlyFree = paymentTier === 'free' || user.is_premium === false;

    // Only genuine Root Lead Admin bypasses lockdown (and not if set to free tier)
    const isRootAdmin = user.role === 'admin' && (user.id === 'usr-admin-1' || user.id === 'usr-admin-ai' || user.phone_number === '+251994847287' || user.phone_number === '+251900000000');
    if (isRootAdmin && !isExplicitlyFree) return true;

    // Free tier (unpaid / trial) students: STRICT LOCKDOWN!
    // Free trial students only access weekly competition and Unit 1 preview! Zero full books or exams!
    if (isExplicitlyFree) return false;

    // All-access (300 Birr upfront or upgraded) - 100% unrestricted access to all grades and content
    if (
      user.unlocked_grades?.includes('all') ||
      user.subscription_type === 'all_grades' ||
      user.subscription_type === 'all' ||
      user.subscription_type === 'lifetime' ||
      paymentTier === 'all_access' ||
      paymentTier === 'all' ||
      (user as any).paid_amount === 300 ||
      (user as any).is_all_access === true ||
      (user as any).subscription_tier === 'full_access'
    ) {
      return true;
    }

    // 200 Birr Single-Grade Access:
    const isPaid = Boolean(user.is_premium && paymentTier !== 'free');
    if (!isPaid) return false;

    const unlockedGrades = new Set<string>(user.unlocked_grades || []);
    if (user.grade_id && user.is_premium) {
      unlockedGrades.add(user.grade_id);
    }
    const userGradeStr = (user.grade || '').toLowerCase();
    if (user.is_premium && userGradeStr.includes('9')) unlockedGrades.add('grade-9');
    if (user.is_premium && userGradeStr.includes('10')) unlockedGrades.add('grade-10');
    if (user.is_premium && userGradeStr.includes('11') && userGradeStr.includes('nat')) unlockedGrades.add('grade-11-natural');
    if (user.is_premium && userGradeStr.includes('11') && userGradeStr.includes('soc')) unlockedGrades.add('grade-11-social');
    if (user.is_premium && userGradeStr.includes('12') && userGradeStr.includes('nat')) unlockedGrades.add('grade-12-natural');
    if (user.is_premium && userGradeStr.includes('12') && userGradeStr.includes('soc')) unlockedGrades.add('grade-12-social');

    const isGr12Nat = unlockedGrades.has('grade-12-natural');
    const isGr12Soc = unlockedGrades.has('grade-12-social');
    const isGr11Nat = unlockedGrades.has('grade-11-natural');
    const isGr11Soc = unlockedGrades.has('grade-11-social');
    const isGr10 = unlockedGrades.has('grade-10');
    const isGr9 = unlockedGrades.has('grade-9');

    // Exam access: Sieved entrance and model exams are provided for the enrolled grade / stream
    if (contentType === 'exam') {
      // Exam Collection: All paid students (200 Birr or 300 Birr, all grades natural & social) have access
      if (targetGradeId === 'grade-all' || targetGradeId === 'all' || targetGradeId === 'grade-collection' || !targetGradeId) {
        return isPaid;
      }
      if (targetGradeId === 'grade-9') {
        return isGr9 || isGr12Nat;
      }
      if (targetGradeId === 'grade-10') {
        return isGr10 || isGr12Nat;
      }
      if (targetGradeId === 'grade-11-natural' || targetGradeId === 'grade-11') {
        return (isGr11Nat || isGr12Nat) && (!subjectId || NATURAL_SUBJECTS.includes(subjectId));
      }
      if (targetGradeId === 'grade-11-social') {
        return (isGr11Soc || isGr12Soc) && (!subjectId || SOCIAL_SUBJECTS.includes(subjectId));
      }
      if (isGr12Nat) {
        return !subjectId || NATURAL_SUBJECTS.includes(subjectId);
      }
      if (isGr12Soc) {
        return !subjectId || SOCIAL_SUBJECTS.includes(subjectId);
      }
      if (isGr11Nat) {
        return (targetGradeId === 'grade-11-natural' || targetGradeId === 'grade-11') && (!subjectId || NATURAL_SUBJECTS.includes(subjectId));
      }
      if (isGr11Soc) {
        return (targetGradeId === 'grade-11-social') && (!subjectId || SOCIAL_SUBJECTS.includes(subjectId));
      }
      if (isGr9 || isGr10) {
        return false;
      }
      return false;
    }

    // Textbook access rules:
    // Grade 9: Only Gr9 textbooks
    if (isGr9) {
      return targetGradeId === 'grade-9';
    }

    // Grade 10: Only Gr10 textbooks
    if (isGr10) {
      return targetGradeId === 'grade-10';
    }

    // Gr11-Natural: Only Gr11-Nat textbooks
    if (isGr11Nat) {
      if (targetGradeId === 'grade-11-natural' || targetGradeId === 'grade-11') {
        return !subjectId || NATURAL_SUBJECTS.includes(subjectId);
      }
      return false;
    }

    // Gr11-Social: Only Gr11-Soc textbooks
    if (isGr11Soc) {
      if (targetGradeId === 'grade-11-social' || targetGradeId === 'grade-11') {
        return !subjectId || SOCIAL_SUBJECTS.includes(subjectId);
      }
      return false;
    }

    // Gr12-Natural: Only Gr12 Nat textbooks (Grades 9-11 require 300 Birr All-Access)
    if (isGr12Nat) {
      if (targetGradeId === 'grade-12-natural' || targetGradeId === 'grade-12') {
        return !subjectId || NATURAL_SUBJECTS.includes(subjectId);
      }
      return false;
    }

    // Gr12-Social: Only Gr12 Soc textbooks (Grades 9-11 require 300 Birr All-Access)
    if (isGr12Soc) {
      if (targetGradeId === 'grade-12-social' || targetGradeId === 'grade-12') {
        return !subjectId || SOCIAL_SUBJECTS.includes(subjectId);
      }
      return false;
    }

    if (!targetGradeId) return isPaid;
    return unlockedGrades.has(targetGradeId);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      loginWithPhone,
      sendVerificationCode,
      verifyAndRegister,
      login,
      logout,
      updateGrade,
      switchDemoUser,
      refreshProfile,
      requestDeviceTransfer,
      loginAsAdmin,
      loginAsJudgeDemo,
      hasGradeAccess,
      deviceId
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
