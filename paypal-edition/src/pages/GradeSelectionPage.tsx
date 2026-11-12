import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Layers
} from 'lucide-react';

interface GradeSelectionPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const GRADE_CATEGORIES = [
  {
    id: 'grade-9',
    name: 'Grade 9',
    stream: 'Secondary Foundation',
    badge: 'Grade 9',
    color: 'from-blue-600 to-indigo-700',
    borderColor: 'border-blue-500/30 hover:border-blue-400',
    bgLight: 'bg-blue-950/40',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Geography', 'Amharic', 'Civics', 'Information Technology (IT)'],
    description: 'First cycle secondary foundation curriculum aligned with authorized Ethiopian Ministry of Education syllabus.',
    stats: '9 Authorized Textbooks • Chapter Short Notes • Topical Practice'
  },
  {
    id: 'grade-10',
    name: 'Grade 10',
    stream: 'National Foundation',
    badge: 'Grade 10',
    color: 'from-teal-600 to-emerald-700',
    borderColor: 'border-teal-500/30 hover:border-teal-400',
    bgLight: 'bg-teal-950/40',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Geography', 'Amharic', 'Civics', 'Information Technology (IT)'],
    description: 'Core national foundation curriculum preparing students for secondary completion and national entrance fundamentals.',
    stats: '9 Core Ministry Textbooks • Step-by-Step Short Notes • Diagnostic Quizzes'
  },
  {
    id: 'grade-11-natural',
    name: 'Grade 11 - Natural Science',
    stream: 'Preparatory Natural Stream',
    badge: 'Grade 11 Natural',
    color: 'from-purple-600 to-violet-700',
    borderColor: 'border-purple-500/30 hover:border-purple-400',
    bgLight: 'bg-purple-950/40',
    subjects: ['Mathematics', 'Physics', 'Biology', 'Chemistry', 'English', 'SAT (Aptitude)', 'Information Technology (IT)'],
    description: 'Advanced secondary preparatory natural science stream with rigorous foundation for university entrance.',
    stats: '7 Core Natural Textbooks • Unit Formulas • EUEE Foundation Concepts'
  },
  {
    id: 'grade-11-social',
    name: 'Grade 11 - Social Science',
    stream: 'Preparatory Social Stream',
    badge: 'Grade 11 Social',
    color: 'from-indigo-600 to-blue-700',
    borderColor: 'border-indigo-500/30 hover:border-indigo-400',
    bgLight: 'bg-indigo-950/40',
    subjects: ['Mathematics', 'English', 'SAT (Aptitude)', 'Economics', 'History', 'Geography', 'Agriculture', 'Information Technology (IT)'],
    description: 'Advanced secondary preparatory social science stream specializing in humanities, economics, and applied technology.',
    stats: '8 Social Stream Textbooks • Case Studies • EUEE Foundation Concepts'
  },
  {
    id: 'grade-12-natural',
    name: 'Grade 12 - Natural Science',
    stream: 'EUEE University Matriculation',
    badge: 'EUEE Natural Stream',
    color: 'from-amber-600 to-orange-700',
    borderColor: 'border-amber-500/40 hover:border-amber-400 shadow-amber-950/40 shadow-lg',
    bgLight: 'bg-amber-950/30',
    subjects: ['Mathematics', 'Physics', 'Biology', 'Chemistry', 'English', 'SAT (Aptitude)', 'Information Technology (IT)'],
    description: 'Comprehensive preparation for the Ethiopian University Entrance Examination (EUEE) Natural Science candidates.',
    stats: '7 Full Textbooks • All Past EUEE Exams • Model Exams • Full AI Tutor RAG',
    recommended: true
  },
  {
    id: 'grade-12-social',
    name: 'Grade 12 - Social Science',
    stream: 'EUEE University Matriculation',
    badge: 'EUEE Social Stream',
    color: 'from-rose-600 to-pink-700',
    borderColor: 'border-rose-500/30 hover:border-rose-400',
    bgLight: 'bg-rose-950/40',
    subjects: ['Mathematics', 'English', 'SAT (Aptitude)', 'Economics', 'History', 'Geography', 'Agriculture'],
    description: 'Tailored curriculum and entrance examination resources for Ethiopian University Entrance Examination Social Science candidates.',
    stats: '7 Social Textbooks • Historical & Geographic Archives • EUEE Papers'
  }
];

export const GradeSelectionPage: React.FC<GradeSelectionPageProps> = ({ onNavigate }) => {
  const { user, updateGrade } = useAuth();
  const [submittingId, setSubmittingId] = React.useState<string | null>(null);

  const handleSelectGrade = async (grade: typeof GRADE_CATEGORIES[0]) => {
    setSubmittingId(grade.id);
    try {
      await updateGrade(grade.name, grade.id);
      onNavigate('dashboard');
    } catch (err) {
      console.error('Failed to select grade:', err);
    } finally {
      setSubmittingId(null);
    }
  };

  return (
    <div className="min-h-[85vh] py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Curriculum Stream Specialization</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          Choose Your Grade & Stream
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Select your current grade level. All your textbooks, chapter short notes, timed entrance exams, and AI Tutor sessions will be precisely tailored to this curriculum.
        </p>
        {user?.grade && (
          <p className="text-xs text-emerald-400 font-medium">
            Currently selected: <span className="font-bold underline">{user.grade}</span>. You can change your selection anytime.
          </p>
        )}
      </div>

      {/* Grade Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
        {GRADE_CATEGORIES.map(grade => {
          const isCurrent = user?.grade_id === grade.id || user?.grade === grade.name;
          const isSubmitting = submittingId === grade.id;

          return (
            <div
              key={grade.id}
              className={`relative flex flex-col justify-between rounded-2xl p-6 border transition-all duration-200 ${grade.bgLight} ${grade.borderColor} ${
                isCurrent ? 'ring-2 ring-emerald-500 bg-slate-900/90' : 'bg-slate-900/60 hover:bg-slate-800/80'
              }`}
            >
              {grade.recommended && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                  Most Popular EUEE
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {grade.stream}
                    </span>
                    <h2 className="text-xl font-bold text-white mt-0.5">
                      {grade.name}
                    </h2>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border text-white bg-gradient-to-r ${grade.color}`}>
                    {grade.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {grade.description}
                </p>

                {/* Subjects Pill List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  <div className="text-[11px] font-semibold text-slate-400">Included Subjects:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {grade.subjects.map(s => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                  <Layers className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{grade.stats}</span>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleSelectGrade(grade)}
                  disabled={isSubmitting}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                    isCurrent
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Setting up curriculum...</span>
                  ) : isCurrent ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Active Grade • Open Dashboard</span>
                    </>
                  ) : (
                    <>
                      <span>Select {grade.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pricing & Access Note */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-white block">Flexible Ethiopian Student Membership</span>
            <span className="text-slate-400">
              Only 200 ETB for full access to your selected grade, or 300 ETB (+100 ETB) for full access to all grades (9–12).
            </span>
          </div>
        </div>
        <button
          onClick={() => onNavigate('payment')}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold whitespace-nowrap transition"
        >
          View Payment Details
        </button>
      </div>
    </div>
  );
};
