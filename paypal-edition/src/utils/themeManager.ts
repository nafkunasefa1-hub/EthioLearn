export type AppTheme = 'dark' | 'amoled';

const THEME_KEY = 'ethiolearn_app_theme';
const BATTERY_SAVER_KEY = 'ethiolearn_battery_saver';

export function getAppTheme(): AppTheme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'amoled' ? 'amoled' : 'dark';
  } catch {
    return 'dark';
  }
}

export function setAppTheme(theme: AppTheme): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme, isBatterySaverEnabled());
  } catch (e) {
    console.warn(e);
  }
}

export function isBatterySaverEnabled(): boolean {
  try {
    const val = localStorage.getItem(BATTERY_SAVER_KEY);
    return val === 'true';
  } catch {
    return false;
  }
}

export function setBatterySaverEnabled(enabled: boolean): void {
  try {
    localStorage.setItem(BATTERY_SAVER_KEY, enabled ? 'true' : 'false');
    applyTheme(getAppTheme(), enabled);
  } catch (e) {
    console.warn(e);
  }
}

export function applyTheme(theme: AppTheme, batterySaver: boolean): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.setAttribute('data-battery-saver', batterySaver ? 'true' : 'false');

  if (theme === 'amoled') {
    root.classList.add('theme-amoled');
  } else {
    root.classList.remove('theme-amoled');
  }
}

// Auto-initialize theme on load
if (typeof window !== 'undefined') {
  applyTheme(getAppTheme(), isBatterySaverEnabled());
}
