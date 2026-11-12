export type ThemeMode = 'dark' | 'light' | 'sepia' | 'emerald' | 'amoled';

export function getStoredTheme(): ThemeMode {
  try {
    return (localStorage.getItem('ethiolearn_theme') as ThemeMode) || 'dark';
  } catch {
    return 'dark';
  }
}

export function setStoredTheme(theme: ThemeMode) {
  try {
    localStorage.setItem('ethiolearn_theme', theme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'amoled') {
        document.documentElement.classList.add('theme-amoled');
      } else {
        document.documentElement.classList.remove('theme-amoled');
      }
    }
    window.dispatchEvent(new Event('theme-change'));
  } catch {}
}

export function getThemeClasses(theme: ThemeMode) {
  switch (theme) {
    case 'light':
      return 'bg-slate-100 text-slate-900';
    case 'sepia':
      return 'bg-[#fbf0d9] text-[#5f4b32]';
    case 'emerald':
      return 'bg-[#062318] text-[#e2f8ec]';
    case 'amoled':
      return 'bg-black text-white';
    case 'dark':
    default:
      return 'bg-slate-950 text-slate-100';
  }
}
