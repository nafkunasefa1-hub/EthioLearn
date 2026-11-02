import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { AuthScreen } from './components/AuthScreen';
import { SecurityShield } from './components/SecurityShield';
import { GradeSelectionPage } from './pages/GradeSelectionPage';
import { Dashboard } from './pages/Dashboard';
import { ModulesPage } from './pages/ModulesPage';
import { Library } from './pages/Library';
import { BookViewer } from './pages/BookViewer';
import { AITutor } from './pages/AITutor';
import { Exams } from './pages/Exams';
import { TimedExamView } from './pages/TimedExamView';
import { ExamResultsView } from './pages/ExamResultsView';
import { PracticeModeView } from './pages/PracticeModeView';
import { PracticeByTopic } from './pages/PracticeByTopic';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { StudyPlanPage } from './pages/StudyPlanPage';
import { PaymentPage } from './pages/PaymentPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { AdminConsole } from './pages/admin/AdminConsole';
import { ExamPredictorPage } from './pages/ExamPredictorPage';
import { LandingPage } from './pages/LandingPage';
import { CompetitionPage } from './pages/CompetitionPage';
import { DailyTopicPage } from './pages/DailyTopicPage';
import { ConnectedTopicsPage } from './pages/ConnectedTopicsPage';
import { RetentionLockModal } from './components/RetentionLockModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { LockedFeaturePaywall } from './components/LockedFeaturePaywall';
import { getStoredTheme, getThemeClasses, ThemeMode } from './utils/theme';
import { initCapacitorApp } from './utils/capacitorApp';
import { ShieldCheck, BookOpen, Award, Loader2, Brain, ArrowLeft } from 'lucide-react';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentRoute, setCurrentRoute] = useState<string>('dashboard');
  const [routeParams, setRouteParams] = useState<Record<string, any>>({});
  const [hasInitializedRoute, setHasInitializedRoute] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getStoredTheme());
  const [showAuthScreen, setShowAuthScreen] = useState(false);

  // Daily Spaced Recall Gate State
  const todayDateStr = new Date().toISOString().split('T')[0];
  const retentionKey = `ethio_retention_unlocked_${todayDateStr}`;
  const [retentionUnlocked, setRetentionUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(retentionKey) === 'true';
    } catch {
      return false;
    }
  });

  const isPaidUser = Boolean(
    user?.is_premium ||
    user?.role === 'admin' ||
    (user?.unlocked_grades && user.unlocked_grades.length > 0)
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(getStoredTheme());
    };
    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  useEffect(() => {
    initCapacitorApp(() => {
      if (currentRoute !== 'dashboard' && currentRoute !== 'landing') {
        handleNavigate('dashboard');
      }
    });
  }, [currentRoute]);

  useEffect(() => {
    if (user && !hasInitializedRoute) {
      setHasInitializedRoute(true);
      if (user.role === 'admin') {
        setCurrentRoute('admin-dashboard');
      } else if (!user.grade_id && !user.grade) {
        setCurrentRoute('choose-grade');
      }
    }
  }, [user, hasInitializedRoute]);

  const handleNavigate = (route: string, params?: Record<string, any>) => {
    if (route.startsWith('admin') && user?.role !== 'admin') {
      setCurrentRoute('dashboard');
      return;
    }
    setCurrentRoute(route);
    setRouteParams(params || {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading Session State
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-300">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4 animate-bounce">
          EL
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
          <span>Verifying student credentials...</span>
        </div>
      </div>
    );
  }

  // Not signed in: show Landing Page first (or AuthScreen if user clicked Sign-in / Get Started)
  if (!user) {
    if (!showAuthScreen) {
      return (
        <LandingPage
          onGetStarted={() => setShowAuthScreen(true)}
          onSignIn={() => setShowAuthScreen(true)}
          onExploreDemo={() => setShowAuthScreen(true)}
        />
      );
    }

    return (
      <div className="relative min-h-screen bg-slate-950">
        <div className="absolute top-4 left-4 z-50">
          <button
            onClick={() => setShowAuthScreen(false)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-semibold backdrop-blur shadow-md transition"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <span>← Back to Platform Overview</span>
          </button>
        </div>
        <AuthScreen
          onSuccess={(isAdmin) => {
            if (isAdmin) {
              setCurrentRoute('admin-dashboard');
            } else {
              setCurrentRoute('dashboard');
            }
          }}
        />
      </div>
    );
  }

  const renderRoute = () => {
    switch (currentRoute) {
      case 'choose-grade':
        return <GradeSelectionPage onNavigate={handleNavigate} />;

      case 'signin':
      case 'phone-auth':
        return (
          <AuthScreen
            onSuccess={(isAdmin) => {
              if (isAdmin) {
                setCurrentRoute('admin-dashboard');
              } else {
                setCurrentRoute('dashboard');
              }
            }}
          />
        );

      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;

      case 'competition':
      case 'competitions':
        return <CompetitionPage onNavigate={handleNavigate} />;

      case 'daily-topic':
      case 'daily-topics':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Daily Topic Hub — Premium Feature"
              description="The Daily Topic Hub with structured curriculum masterclasses, daily practice sets, and memory anchors is available exclusively to subscribed students."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return <DailyTopicPage onNavigate={handleNavigate} />;

      case 'module':
      case 'modules':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Curriculum Modules — Premium Feature"
              description="Structured Ethiopian Ministry of Education study modules, unit summaries, and interactive lessons are available exclusively to subscribed students."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return <ModulesPage onNavigate={handleNavigate} />;

      case 'library':
        return <Library onNavigate={handleNavigate} />;

      case 'connected-topics':
      case 'curriculum-bridge':
      case 'topic-bridge':
      case 'connected-units':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Connected Topics Bridge — Premium Feature"
              description="Cross-grade topic mapping (Grades 9–12 progression bridges) is available exclusively to subscribed students."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return <ConnectedTopicsPage onNavigate={handleNavigate} />;

      case 'book-viewer':
        return (
          <BookViewer
            bookId={routeParams.bookId || 'book-10-math'}
            initialPage={routeParams.initialPage ? Number(routeParams.initialPage) : undefined}
            initialMode={routeParams.initialMode}
            highlightQuery={routeParams.highlightQuery}
            onNavigate={handleNavigate}
          />
        );

      case 'library-book-page':
        return (
          <BookViewer
            bookId={routeParams.bookId || 'book-10-math'}
            initialPage={routeParams.pageNumber ? Number(routeParams.pageNumber) : 1}
            highlightQuery={routeParams.highlight}
            onNavigate={handleNavigate}
          />
        );

      case 'ai-tutor':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="AI Tutor — Premium Feature"
              description="The EthioLearn AI Tutor is available exclusively to subscribed students. Subscribe to unlock daily AI questions, step-by-step derivations, and personalized EUEE exam coaching."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return <AITutor onNavigate={handleNavigate} />;

      case 'exams':
        return <Exams initialCategory={routeParams.category || (routeParams.activeTab === 'categories' ? 'BY_CATEGORY' : 'ALL')} onNavigate={handleNavigate} />;

      case 'model-exams':
        return <Exams initialCategory="MODEL" onNavigate={handleNavigate} />;

      case 'exam-timed':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Timed Examination Mode is Locked"
              description="Free tier accounts can test the first 3 questions of each exam on the Dashboard. Unlock your section for 200 ETB or All Access for 300 ETB to take full timed exams with instant scoring."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return (
          <TimedExamView
            examId={routeParams.examId || 'exam-entrance-1789625998133'}
            onNavigate={handleNavigate}
          />
        );

      case 'exam-results':
        return (
          <ExamResultsView
            attemptId={routeParams.attemptId}
            onNavigate={handleNavigate}
          />
        );

      case 'exam-practice':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Full Exam Practice Mode is Locked"
              description="Free tier accounts can test the first 3 questions of each exam on the Dashboard overview. Unlock your section for 200 ETB or All Access for 300 ETB to practice all 60+ questions."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return (
          <PracticeModeView
            examId={routeParams.examId}
            topicId={routeParams.topicId}
            categoryName={routeParams.categoryName}
            topicTitle={routeParams.topicTitle}
            questionIds={routeParams.questionIds}
            initialQuestionId={routeParams.initialQuestionId || routeParams.questionId}
            onNavigate={handleNavigate}
          />
        );

      case 'practice-topics':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Practice by Topic is Locked"
              description="Comprehensive topic-by-topic question drills require an active membership. Unlock your section for 200 ETB or All Access for 300 ETB."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return <PracticeByTopic onNavigate={handleNavigate} />;

      case 'practice-topic-direct':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Practice Mode is Locked"
              description="Free accounts can preview 3 questions under the Dashboard. Unlock your section for 200 ETB or All Access for 300 ETB."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return (
          <PracticeModeView
            topicId={routeParams.topicId}
            onNavigate={handleNavigate}
          />
        );

      case 'flashcards':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Curriculum Flashcards are Locked"
              description="Thousands of active recall flashcards covering all curriculum units require an active membership. Unlock for 200 ETB (1 grade) or 300 ETB (all grades)."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return (
          <FlashcardsPage
            initialTopicId={routeParams.topicId}
            onNavigate={handleNavigate}
          />
        );

      case 'study-plan':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="Personalized Study Plan is Locked"
              description="AI-driven daily study schedules, target setting, and exam readiness predictions require an active membership. Unlock for 200 ETB (1 grade) or 300 ETB (all grades)."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return <StudyPlanPage onNavigate={handleNavigate} />;

      case 'payment':
        return <PaymentPage onNavigate={handleNavigate} routeParams={routeParams} />;

      case 'analytics':
        return <AnalyticsPage onNavigate={handleNavigate} />;

      case 'notifications':
        return <NotificationsPage onNavigate={handleNavigate} />;

      case 'my-account':
        return <MyAccountPage onNavigate={handleNavigate} />;

      case 'exam-predictor':
      case 'predictor':
        if (!isPaidUser) {
          return (
            <LockedFeaturePaywall
              title="AI Exam Predictor — Premium Feature"
              description="The 2019 E.C. EUEE AI Exam Predictor, 3X Study Mode (180 Qs), and Instant Practice Mode are available exclusively to subscribed students."
              userGrade={user?.grade}
              onNavigate={handleNavigate}
            />
          );
        }
        return <ExamPredictorPage onNavigate={handleNavigate} />;

      case 'admin':
      case 'admin-chat':
      case 'admin-copilot':
      case 'admin-dashboard':
        return <AdminConsole initialTab="copilot" onNavigate={handleNavigate} />;

      case 'admin-payments':
        return <AdminConsole initialTab="payments" onNavigate={handleNavigate} />;

      case 'admin-transfers':
        return <AdminConsole initialTab="transfers" onNavigate={handleNavigate} />;

      case 'admin-feedback':
        return <AdminConsole initialTab="feedback" onNavigate={handleNavigate} />;

      case 'admin-books':
        return <AdminConsole initialTab="books" onNavigate={handleNavigate} />;

      case 'admin-ocr':
        return <AdminConsole initialTab="ocr" onNavigate={handleNavigate} />;

      case 'admin-exams':
        return <AdminConsole initialTab="exams" onNavigate={handleNavigate} />;

      case 'admin-ai':
        return <AdminConsole initialTab="ai" onNavigate={handleNavigate} />;

      case 'admin-settings':
        return <AdminConsole initialTab="settings" onNavigate={handleNavigate} />;

      case 'admin-audit':
        return <AdminConsole initialTab="audit" onNavigate={handleNavigate} />;

      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  const isFullHeightView = currentRoute === 'book-viewer' || currentRoute === 'library-book-page';

  const isGatedRoute = [
    'library',
    'book-viewer',
    'library-book-page',
    'exams',
    'model-exams',
    'exam-timed',
    'exam-practice',
    'practice-topics',
    'practice-topic-direct',
    'ai-tutor',
    'module',
    'modules',
    'flashcards',
    'exam-predictor',
    'predictor'
  ].includes(currentRoute);

  const showRetentionGate = !retentionUnlocked && user?.role !== 'admin' && isGatedRoute;

  return (
    <SecurityShield enabled={user?.role !== 'admin'}>
      <div className={`min-h-screen ${getThemeClasses(theme)} flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200 transition-colors duration-300`}>
        <OfflineIndicator />
        <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

        {/* Daily Spaced Retention Gate Modal */}
        <RetentionLockModal
          isOpen={showRetentionGate}
          onUnlocked={() => {
            try {
              localStorage.setItem(retentionKey, 'true');
            } catch (e) {
              console.warn(e);
            }
            setRetentionUnlocked(true);
          }}
          onBypassEmergency={() => {
            try {
              localStorage.setItem(retentionKey, 'true');
            } catch (e) {
              console.warn(e);
            }
            setRetentionUnlocked(true);
          }}
        />

        <main className="flex-1">
          {renderRoute()}
        </main>

        {/* Omnipresent Floating AI Admin Copilot Launcher (when Admin is exploring student views or converted into app) */}
        {user?.role === 'admin' && !currentRoute.startsWith('admin') && (
          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={() => handleNavigate('admin-copilot')}
              className="px-4 py-3 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white rounded-full text-xs font-black shadow-2xl shadow-indigo-950/80 border border-indigo-300/40 flex items-center gap-2.5 transition transform hover:scale-105"
              title="Open AI Admin Copilot (Live Chat to Make Changes & Correct App)"
            >
              <Brain className="w-5 h-5 text-sky-200 animate-pulse" />
              <span className="font-bold">AI Admin Copilot</span>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
            </button>
          </div>
        )}

        {/* Global Footer (Hidden in immersive textbook reader) */}
        {!isFullHeightView && (
          <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 mt-12 text-slate-400 text-xs">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                  EL
                </div>
                <span className="font-semibold text-slate-200">EthioLearn AI Platform</span>
                <span className="text-slate-500">|</span>
                <span>FDRE Ministry of Education Curriculum Grounding</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
                <span>Grades 9, 10, 11, 12</span>
                <span>•</span>
                <span>Authorized Textbooks</span>
                <span>•</span>
                <span>EUEE National Examination Prep</span>
                {user?.role === 'admin' && (
                  <>
                    <span>•</span>
                    <button
                      onClick={() => handleNavigate('admin-dashboard')}
                      className="text-indigo-400 hover:underline font-semibold"
                    >
                      Admin Console
                    </button>
                  </>
                )}
              </div>
            </div>
          </footer>
        )}
      </div>
    </SecurityShield>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
