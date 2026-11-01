/**
 * EthioLearn Resilience API Layer
 * Features:
 * - Automatic retry with exponential backoff on transient connection hiccups
 * - Graceful fallback support for offline/iframe container states
 * - Standardized headers including student context
 */

export async function apiFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
  retries = 2,
  delayMs = 200
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
  try {
    const res = await apiFetch(input, init);
    if (!res.ok) {
      if (fallback !== undefined) return fallback;
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.error || `HTTP error ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    if (fallback !== undefined) {
      console.warn(`[EthioLearn] Resilient fallback used for ${String(input)}:`, err);
      return fallback;
    }
    throw err;
  }
}
