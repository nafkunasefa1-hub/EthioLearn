import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BookOpen,
  BookMarked,
  Sparkles,
  Award,
  FileCheck,
  BarChart3,
  Bell,
  CheckCircle,
  Shield,
  Layers,
  ChevronDown,
  Lock,
  Compass,
  LogOut,
  GraduationCap,
  Smartphone,
  UserCheck,
  Brain,
  Target,
  Palette,
  ChevronLeft,
  ChevronRight,
  Grid,
  X,
  Trophy,
  CalendarDays,
  Flame,
  GitBranch
} from 'lucide-react';
import { NotificationItem } from '../types';
import { apiFetchJson } from '../utils/api';
import { PWAInstallButton } from './PWAInstallButton';
import { getStoredTheme, setStoredTheme, ThemeMode } from '../utils/theme';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

const ALL_GRADES = [
  { id: 'grade-9', name: 'Grade 9', stream: 'Foundation' },
  { id: 'grade-10', name: 'Grade 10', stream: 'Foundation' },
  { id: 'grade-11-natural', name: 'Grade 11 - Natural Science', stream: 'Preparatory Natural' },
  { id: 'grade-11-social', name: 'Grade 11 - Social Science', stream: 'Preparatory Social' },
  { id: 'grade-12-natural', name: 'Grade 12 - Natural Science', stream: 'EUEE Natural' },
  { id: 'grade-12-social', name: 'Grade 12 - Social Science', stream: 'EUEE Social' }
];

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const { user, updateGrade, logout, hasGradeAccess } = useAuth();
  const [gradeDropdownOpen, setGradeDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(getStoredTheme());
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showAllTabsModal, setShowAllTabsModal] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollTopLeft, setCanScrollTopLeft] = useState(false);
  const [canScrollTopRight, setCanScrollTopRight] = useState(false);
  const [gradeBtnPos, setGradeBtnPos] = useState<{ top: number; left: number }>({ top: 64, left: 16 });
  const [notifBtnPos, setNotifBtnPos] = useState<{ top: number; right: number }>({ top: 64, right: 16 });
  const [themeBtnPos, setThemeBtnPos] = useState<{ top: number; right: number }>({ top: 64, right: 16 });
  const mobileScrollRef = React.useRef<HTMLDivElement>(null);
  const topScrollRef = React.useRef<HTMLDivElement>(null);
  const activeTabRef = React.useRef<HTMLButtonElement>(null);

  const handleToggleNotifDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setNotifBtnPos({
      top: rect.bottom + 6,
      right: Math.max(12, window.innerWidth - rect.right)
    });
    setNotifDropdownOpen(!notifDropdownOpen);
  };

  const handleToggleThemeDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setThemeBtnPos({
      top: rect.bottom + 6,
      right: Math.max(12, window.innerWidth - rect.right)
    });
    setThemeDropdownOpen(!themeDropdownOpen);
  };

  const updateScrollIndicators = () => {
    const el = mobileScrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
    const topEl = topScrollRef.current;
    if (topEl) {
      setCanScrollTopLeft(topEl.scrollLeft > 10);
      setCanScrollTopRight(topEl.scrollLeft < topEl.scrollWidth - topEl.clientWidth - 10);
    }
  };

  const scrollTopBar = (direction: 'left' | 'right') => {
    if (topScrollRef.current) {
      const amount = direction === 'left' ? -220 : 220;
      topScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(updateScrollIndicators, 300);
    }
  };

  const handleToggleGradeDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradeBtnPos({
      top: rect.bottom + 6,
      left: Math.max(12, Math.min(rect.left, window.innerWidth - 332))
    });
    setGradeDropdownOpen(!gradeDropdownOpen);
  };

  useEffect(() => {
    updateScrollIndicators();
    window.addEventListener('resize', updateScrollIndicators);
    return () => window.removeEventListener('resize', updateScrollIndicators);
  }, []);

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
    const t = setTimeout(updateScrollIndicators, 350);
    return () => clearTimeout(t);
  }, [currentRoute]);

  const scrollMobileTabs = (direction: 'left' | 'right') => {
    if (mobileScrollRef.current) {
      const amount = direction === 'left' ? -180 : 180;
      mobileScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(updateScrollIndicators, 300);
    }
  };

  useEffect(() => {
    const handleThemeChange = () => setCurrentTheme(getStoredTheme());
    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  const fetchNotifications = async () => {
    if (!user) return;
    try {
      const data = await apiFetchJson<NotificationItem[]>(
        '/api/notifications',
        { headers: { 'x-user-id': user.id } },
        []
      );
      if (Array.isArray(data)) {
        setNotifications(data);
        setUnreadCount(data.filter((n: NotificationItem) => !n.read).length);
      }
    } catch (err) {
      console.warn('Notification notice:', err);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 20000);
    return () => clearInterval(interval);
  }, [user]);

  const markRead = async (id: string) => {
    if (!user) return;
    try {
      await fetch(`/api/notifications/${id}/read`, {
        method: 'PUT',
        headers: { 'x-user-id': user.id }
      });
      setNotifications(prev => prev.map(n => (n.id === id ? { ...n, read: true } : n)));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (err) {
      console.warn('Failed to mark notification read:', err);
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Compass },
    { id: 'competition', label: 'Weekly Competition', icon: Trophy, badge: 'Live Cup' },
    { id: 'daily-topic', label: 'Daily Topic Hub', icon: CalendarDays, badge: 'Daily' },
    { id: 'module', label: 'Module', icon: BookMarked, badge: 'New' },
    { id: 'library', label: 'Library', icon: BookOpen },
    { id: 'ai-tutor', label: 'AI Tutor', icon: Sparkles, badge: 'RAG' },
    { id: 'connected-topics', label: 'Connected Topics', icon: GitBranch, badge: 'Bridge' },
    { id: 'exams', label: 'Exams/Entrance Exam', icon: Award },
    { id: 'exam-predictor', label: 'AI Exam Predictor', icon: Sparkles, badge: '2019 E.C.' },
    { id: 'model-exams', label: 'Model Exams', icon: FileCheck },
    { id: 'practice-topics', label: 'Practice Topics', icon: Layers },
    { id: 'flashcards', label: 'Flash Cards', icon: Brain },
    { id: 'study-plan', label: 'Study Plan', icon: Target },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'my-account', label: 'My Account', icon: UserCheck }
  ];

  const currentGradeObj = ALL_GRADES.find(g => g.id === user?.grade_id || g.name === user?.grade) || ALL_GRADES[3];
  const isPaid = user?.role === 'admin' || (user?.grade_id ? hasGradeAccess(user.grade_id) : user?.is_premium);

  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      {/* Admin Specific System Bar */}
      {user?.role === 'admin' && (
        <div className="bg-indigo-950/90 px-4 py-1.5 border-b border-indigo-800/80 flex flex-wrap items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-indigo-200">
            <Shield className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-bold">Administrator Portal Active</span>
            <span className="text-indigo-400/80">({user.phone_number || '+251994847287'})</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('admin-copilot')}
              className="px-3 py-1 rounded-lg font-black transition text-xs bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white flex items-center gap-1.5 shadow-md shadow-indigo-950/60 border border-indigo-400/40 animate-pulse"
              title="Chat with AI Developer to make changes to the app and database"
            >
              <Brain className="w-3.5 h-3.5 text-sky-200" />
              <span>🤖 AI Developer Chat</span>
            </button>
            <button
              onClick={() => onNavigate('admin-dashboard')}
              className={`px-2.5 py-0.5 rounded font-bold transition text-xs ${
                currentRoute.startsWith('admin')
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-indigo-900/80 text-indigo-200 hover:bg-indigo-800'
              }`}
            >
              Admin Console
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`px-2.5 py-0.5 rounded font-medium transition text-xs ${
                !currentRoute.startsWith('admin')
                  ? 'bg-slate-800 text-white'
                  : 'text-indigo-300 hover:text-white'
              }`}
            >
              Student View
            </button>
            <button
              onClick={logout}
              className="text-indigo-300 hover:text-rose-400 text-xs font-semibold ml-2"
              title="Sign Out"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Top Bar Left Scroll Indicator */}
        {canScrollTopLeft && (
          <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pr-2 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent pointer-events-none">
            <button
              onClick={() => scrollTopBar('left')}
              className="pointer-events-auto p-1.5 ml-1 rounded-full bg-slate-800/95 border border-slate-700 text-slate-300 hover:text-white shadow-md active:scale-95 transition"
              title="Scroll top bar left"
              aria-label="Scroll top bar left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Top Bar Right Scroll Indicator */}
        {canScrollTopRight && (
          <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pl-2 bg-gradient-to-l from-slate-900 via-slate-900/95 to-transparent pointer-events-none">
            <button
              onClick={() => scrollTopBar('right')}
              className="pointer-events-auto p-1.5 mr-1 rounded-full bg-slate-800/95 border border-slate-700 text-slate-300 hover:text-white shadow-md active:scale-95 transition"
              title="Scroll top bar right"
              aria-label="Scroll top bar right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div
          ref={topScrollRef}
          onScroll={updateScrollIndicators}
          className="flex items-center justify-between gap-2 sm:gap-3 py-2 min-h-16 relative overflow-x-auto scrollbar-none scroll-smooth touch-pan-x"
        >
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              onClick={() => onNavigate(user?.role === 'admin' && currentRoute.startsWith('admin') ? 'admin-dashboard' : 'dashboard')}
              className="flex items-center gap-2.5 text-left group shrink-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white font-black text-base sm:text-lg shadow-sm group-hover:scale-105 transition-transform shrink-0">
                EL
              </div>
              <div className="hidden xs:block shrink-0">
                <div className="font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5 whitespace-nowrap">
                  EthioLearn <span className="text-emerald-400 font-semibold text-[10px] sm:text-xs px-1.5 py-0.5 bg-emerald-950/70 border border-emerald-800/50 rounded">AI</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-none whitespace-nowrap">
                  Textbook & EUEE Platform
                </div>
              </div>
            </button>

            {/* Student Grade Switcher Dropdown */}
            <div className="relative shrink-0 ml-1 sm:ml-2">
              <button
                type="button"
                id="navbar-grade-switcher-btn"
                onClick={handleToggleGradeDropdown}
                className="flex items-center gap-1.5 sm:gap-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 hover:border-emerald-500/60 text-slate-100 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-sm shrink-0 whitespace-nowrap"
                title="Click to view and switch between Grade 9, 10, 11, and 12 Natural & Social streams"
              >
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="tracking-wide text-xs font-bold text-emerald-300 max-w-[140px] sm:max-w-[190px] truncate">
                  {currentGradeObj.name}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${gradeDropdownOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {gradeDropdownOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-[1px]"
                    onClick={() => setGradeDropdownOpen(false)}
                  />
                  {/* Dropdown Menu - fixed positioned so overflow-x-auto NEVER clips it */}
                  <div
                    style={{ top: `${gradeBtnPos.top}px`, left: `${gradeBtnPos.left}px` }}
                    className="fixed w-[calc(100vw-24px)] max-w-xs sm:w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl py-2 z-50 text-slate-100 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3.5 py-2 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>Switch Grade / Stream</span>
                      <button
                        onClick={() => {
                          setGradeDropdownOpen(false);
                          onNavigate('choose-grade');
                        }}
                        className="text-emerald-400 hover:underline lowercase font-normal"
                      >
                        all cards
                      </button>
                    </div>

                    <div className="max-h-80 overflow-y-auto py-1">
                      {ALL_GRADES.map(g => {
                        const isSelected = user?.grade_id === g.id || user?.grade === g.name;
                        const canAccess = hasGradeAccess(g.id);
                        const isUserPaid = Boolean(user?.is_premium || (user?.unlocked_grades && user.unlocked_grades.length > 0));

                        return (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => {
                              updateGrade(g.name, g.id);
                              setGradeDropdownOpen(false);
                              if (!canAccess) {
                                if (isUserPaid) {
                                  onNavigate('payment', { upgrade: true });
                                } else {
                                  onNavigate('payment', { targetGrade: g.id });
                                }
                              }
                            }}
                            className={`w-full text-left px-3.5 py-2.5 text-xs font-medium transition flex items-center justify-between ${
                              isSelected
                                ? 'bg-emerald-950/70 text-emerald-300 font-bold border-l-4 border-emerald-400'
                                : 'text-slate-300 hover:bg-slate-800/90'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-100">{g.name}</span>
                                {canAccess ? (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                    Unlocked
                                  </span>
                                ) : (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                                    <Lock className="w-2.5 h-2.5" />
                                    {isUserPaid ? 'Unlock (100 ETB)' : 'Unlock (200 ETB)'}
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-400 font-normal">{g.stream}</div>
                            </div>
                            {isSelected && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Primary Nav Links on wide displays */}
          <nav className="hidden xl:flex items-center gap-1 overflow-x-auto max-w-xl py-1 scrollbar-none shrink-0">
            {navItems.map(item => {
              const Icon = item.icon;
              const active = currentRoute === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 whitespace-nowrap ${
                    active
                      ? 'bg-slate-800 text-emerald-400 border border-slate-700 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1 py-0.2 bg-slate-700/80 text-emerald-300 rounded font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side: Membership Status, Theme, Notifications, Admin, Phone, Sign Out - Always Accessible on Mobile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
            {/* Membership Pill - visible on mobile and desktop */}
            {isPaid ? (
              <div className="flex shrink-0 items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-950/90 to-teal-950/90 border border-emerald-600/50 text-emerald-300 rounded-full text-xs font-bold shadow-sm">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
                <span className="tracking-wide text-xs">Unlocked Access</span>
              </div>
            ) : (user?.is_premium || (user?.unlocked_grades && user.unlocked_grades.length > 0)) ? (
              <button
                onClick={() => onNavigate('payment', { upgrade: true })}
                className="flex shrink-0 items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-indigo-500/20"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span className="text-xs">Upgrade All (+100 ETB)</span>
              </button>
            ) : (
              <button
                onClick={() => onNavigate('payment')}
                className="flex shrink-0 items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 rounded-xl text-xs font-black transition shadow-md shadow-amber-500/20"
              >
                <Lock className="w-3.5 h-3.5" />
                <span className="text-xs">Unlock (200 ETB)</span>
              </button>
            )}

            <div className="hidden sm:block shrink-0">
              <PWAInstallButton />
            </div>

            {/* Notifications Bell */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={handleToggleNotifDropdown}
                className="relative p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              {notifDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[1px]"
                    onClick={() => setNotifDropdownOpen(false)}
                  />
                  <div
                    style={{ top: `${notifBtnPos.top}px`, right: `${notifBtnPos.right}px` }}
                    className="fixed w-80 max-w-[calc(100vw-24px)] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-3 z-50 text-slate-200 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                      <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Notifications</span>
                      <button
                        onClick={() => {
                          onNavigate('notifications');
                          setNotifDropdownOpen(false);
                        }}
                        className="text-xs text-emerald-400 hover:underline"
                      >
                        View all
                      </button>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="text-center py-4 text-xs text-slate-400">No notifications yet</div>
                      ) : (
                        notifications.slice(0, 6).map(n => (
                          <div
                            key={n.id}
                            onClick={() => {
                              markRead(n.id);
                              if (user?.role === 'admin') {
                                setNotifDropdownOpen(false);
                                if (n.type === 'device_transfer' || n.title.toLowerCase().includes('device transfer')) {
                                  onNavigate('admin-transfers');
                                } else if (n.type === 'payment' || n.title.toLowerCase().includes('payment')) {
                                  onNavigate('admin-payments');
                                } else if (n.title.toLowerCase().includes('question')) {
                                  onNavigate('admin-feedback');
                                } else {
                                  onNavigate('notifications');
                                }
                              }
                            }}
                            className={`p-2.5 rounded-lg text-xs transition cursor-pointer ${
                              n.read ? 'bg-slate-800/60 opacity-75' : 'bg-slate-800 border-l-2 border-emerald-400'
                            }`}
                          >
                            <div className="font-semibold text-slate-100">{n.title}</div>
                            <div className="text-[11px] text-slate-300 line-clamp-2 mt-0.5">{n.message}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Theme Switcher */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={handleToggleThemeDropdown}
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition flex items-center gap-1"
                title="Switch Theme / Mode"
              >
                <Palette className="w-4 h-4 text-emerald-400" />
              </button>
              {themeDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[1px]"
                    onClick={() => setThemeDropdownOpen(false)}
                  />
                  <div
                    style={{ top: `${themeBtnPos.top}px`, right: `${themeBtnPos.right}px` }}
                    className="fixed w-52 max-w-[calc(100vw-24px)] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-50 text-slate-200 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                      Display Theme Mode
                    </div>
                    {[
                      { id: 'dark', label: '🌙 Night Dark', desc: 'Deep Slate' },
                      { id: 'light', label: '☀️ Day Light', desc: 'Clean White' },
                      { id: 'sepia', label: '📜 Sepia Study', desc: 'Warm Amber' },
                      { id: 'emerald', label: '🌿 Emerald Focus', desc: 'Luxury Forest' }
                    ].map(t => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setStoredTheme(t.id as ThemeMode);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                          currentTheme === t.id
                            ? 'bg-emerald-950/80 text-emerald-300 font-bold border border-emerald-800'
                            : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-semibold">{t.label}</div>
                          <div className="text-[10px] text-slate-400">{t.desc}</div>
                        </div>
                        {currentTheme === t.id && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Admin Portal Shortcut if Admin - Always visible on mobile too */}
            {user?.role === 'admin' && (
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => onNavigate('admin-copilot')}
                  className="flex shrink-0 items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-black transition bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white shadow-md border border-indigo-400/40"
                  title="Chat with AI Developer to modify app and database"
                >
                  <Brain className="w-3.5 h-3.5 text-sky-200 animate-pulse" />
                  <span className="hidden sm:inline">AI Chat</span>
                </button>
                <button
                  onClick={() => onNavigate('admin-dashboard')}
                  className={`flex shrink-0 items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition ${
                    currentRoute.startsWith('admin')
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 hover:bg-indigo-900'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin</span>
                </button>
              </div>
            )}

            {/* Student Phone Account Badge */}
            <button
              onClick={() => onNavigate('signin')}
              className="flex shrink-0 items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-slate-200 rounded-xl text-xs font-semibold transition"
              title="Click to view Phone Account or switch"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-mono text-xs font-medium text-slate-300">
                {user?.phone_number || '+251994847287'}
              </span>
            </button>

            {/* Student Sign Out Button */}
            <button
              onClick={() => {
                logout();
                onNavigate('signin');
              }}
              className="flex shrink-0 items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 border border-amber-200/70 transition"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Bar - Fully Conformed & Accessible on All Phone Screen Sizes */}
      <div className="xl:hidden relative border-t border-slate-800/90 bg-slate-900/95 select-none">
        {/* Left Scroll Indicator & Button */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center pr-3 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent pointer-events-none">
            <button
              onClick={() => scrollMobileTabs('left')}
              className="pointer-events-auto p-1.5 ml-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white shadow-md active:scale-95 transition"
              title="Scroll left"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Scrollable Nav Items Row with Padding */}
        <div
          ref={mobileScrollRef}
          onScroll={updateScrollIndicators}
          className="flex items-center overflow-x-auto scrollbar-none gap-2 px-3 py-2.5 whitespace-nowrap scroll-smooth touch-pan-x pl-3 pr-16"
        >
          {navItems.map(item => {
            const Icon = item.icon;
            const active = currentRoute === item.id;
            return (
              <button
                key={item.id}
                ref={active ? activeTabRef : null}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition border shrink-0 ${
                  active
                    ? 'bg-slate-800 text-emerald-400 border-emerald-500/50 font-bold shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span className="text-[11px] font-semibold">{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] px-1 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Indicator & Quick "All Tabs" Sheet Button */}
        <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center pl-3 pr-2 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent">
          {canScrollRight && (
            <button
              onClick={() => scrollMobileTabs('right')}
              className="p-1.5 mr-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white shadow-md active:scale-95 transition"
              title="Scroll right"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={() => setShowAllTabsModal(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 hover:bg-emerald-900/80 text-xs font-bold shadow-md active:scale-95 transition"
            title="View All Tabs Grid"
          >
            <Grid className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-bold">Tabs</span>
          </button>
        </div>
      </div>

      {/* Mobile All Tabs Quick Navigator Modal Sheet */}
      {showAllTabsModal && (
        <div className="xl:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-5 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Grid className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">All Study Modules</h3>
              </div>
              <button
                onClick={() => setShowAllTabsModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {navItems.map(item => {
                const Icon = item.icon;
                const active = currentRoute === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setShowAllTabsModal(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition ${
                      active
                        ? 'bg-slate-800 border-emerald-500/60 text-emerald-300 shadow-md'
                        : 'bg-slate-800/40 border-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className={`p-2 rounded-xl shrink-0 ${active ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{item.label}</div>
                      {item.badge && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {user?.role === 'admin' && (
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <button
                  onClick={() => {
                    onNavigate('admin-copilot');
                    setShowAllTabsModal(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-black text-xs shadow-lg shadow-indigo-950/60 transition"
                >
                  <Brain className="w-4 h-4 text-sky-200" />
                  <span>🤖 Chat with AI Developer (Make App Changes)</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('admin-dashboard');
                    setShowAllTabsModal(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 hover:bg-indigo-900 font-bold text-xs transition"
                >
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span>Open Admin Console & Tables</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
