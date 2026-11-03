/**
 * EthioLearn Resilience API Layer
 * Features:
 * - Automatic retry with exponential backoff on transient connection hiccups
 * - Graceful fallback support for offline / standalone mobile APK container states
 * - Standardized headers including student context
 * - Offline-first fallback interceptors for all 73 exams, 11,002 questions, and textbooks
 */

import { STATIC_EXAMS_CATALOG } from '../data/staticExamsCatalog';
import { STATIC_SUBJECTS_CATALOG } from '../data/staticSubjectsCatalog';
import { STATIC_BOOKS_CATALOG } from '../data/staticBooksCatalog';
import { STATIC_GRADES_CATALOG } from '../data/staticGradesCatalog';
import { getOfflineExamQuestions, loadOfflineQuestionsBundle } from './offlineStorage';

export async function apiFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
  retries = 1,
  delayMs = 150
): Promise<Response> {
  let lastError: any;
  const userId = typeof localStorage !== 'undefined' ? localStorage.getItem('ethiolearn_user_id') : null;
  const deviceId = typeof localStorage !== 'undefined' ? localStorage.getItem('ethiolearn_device_id') : null;

  const customHeaders: Record<string, string> = {};
  if (userId) customHeaders['x-user-id'] = userId;
  if (deviceId) customHeaders['x-device-id'] = deviceId;

  const mergedInit: RequestInit = {
    credentials: 'include',
    ...init,
    headers: {
      ...customHeaders,
      ...(init?.headers || {})
    }
  };

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(input, mergedInit);
      return res;
    } catch (err: any) {
      lastError = err;
      const isFetchError =
        err?.name === 'TypeError' ||
        err?.message?.includes('Failed to fetch') ||
        err?.message?.includes('NetworkError');

      if (isFetchError && attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, delayMs * (attempt + 1)));
        continue;
      }
      break;
    }
  }
  throw lastError;
}

export async function apiFetchJson<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit,
  fallback?: T
): Promise<T> {
  const urlStr = String(input);
  try {
    const res = await apiFetch(input, init);
    if (!res.ok) {
      if (fallback !== undefined) return fallback;
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.error || `HTTP error ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    // -------------------------------------------------------------
    // Intelligent Offline Interceptor for Standalone Mobile APK
    // -------------------------------------------------------------
    // 1. Exam Questions: /api/exams/:id/questions
    const examQuestionsMatch = urlStr.match(/\/api\/exams\/([^/?]+)\/questions/);
    if (examQuestionsMatch) {
      const examId = examQuestionsMatch[1];
      console.log(`[Offline API Interceptor] Serving offline questions for ${examId}`);
      const qs = await getOfflineExamQuestions(examId);
      return qs as unknown as T;
    }

    // 2. Exams Catalog: /api/exams
    if (urlStr.startsWith('/api/exams')) {
      console.log('[Offline API Interceptor] Serving full offline exams catalog (73 exams)');
      return STATIC_EXAMS_CATALOG as unknown as T;
    }

    // 3. Subjects Catalog: /api/subjects
    if (urlStr.startsWith('/api/subjects')) {
      console.log('[Offline API Interceptor] Serving full offline subjects catalog');
      return STATIC_SUBJECTS_CATALOG as unknown as T;
    }

    // 3b. Grades Catalog: /api/grades
    if (urlStr.startsWith('/api/grades')) {
      console.log('[Offline API Interceptor] Serving full offline grades catalog');
      return STATIC_GRADES_CATALOG as unknown as T;
    }

    // 4. Books Catalog: /api/books
    if (urlStr.startsWith('/api/books') && !urlStr.includes('/page/')) {
      console.log('[Offline API Interceptor] Serving full offline books catalog');
      return STATIC_BOOKS_CATALOG as unknown as T;
    }

    if (fallback !== undefined) {
      console.warn(`[EthioLearn] Resilient fallback used for ${urlStr}:`, err);
      return fallback;
    }
    throw err;
  }
}
