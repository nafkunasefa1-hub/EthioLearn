import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Layers,
  BookOpen,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle,
  Filter,
  GraduationCap
} from 'lucide-react';
import { Topic, Subject } from '../types';
import { apiFetchJson } from '../utils/api';
import { getTopicGradeInfo } from '../utils/curriculumGradeMap';

interface PracticeByTopicProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const PracticeByTopic: React.FC<PracticeByTopicProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const availableYears = ['all', '2018', '2017', '2016', 'regional'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjectsData, topicsData] = await Promise.all([
          apiFetchJson<Subject[]>('/api/subjects', undefined, []),
          apiFetchJson<Topic[]>('/api/topics', undefined, [])
        ]);
        if (Array.isArray(subjectsData)) setSubjects(subjectsData);
        if (Array.isArray(topicsData)) setTopics(topicsData);
      } catch (err) {
        console.warn('Practice topics notice:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredTopics = topics.filter(t => {
    if (selectedSubject !== 'all' && t.subject_id !== selectedSubject) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
          <Layers className="w-4 h-4" />
          <span>Targeted Curriculum Practice</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Practice Entrance Exams by Topic
        </h1>
        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
          Master specific syllabus topics by solving all related past questions from 2016, 2017, and 2018 E.C. EUEE national entrance exams, and Regional Model Examinations with instant feedback and textbook citations.
        </p>
      </div>

      {/* Subject & Year Filter Bar */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-slate-400 mr-2 whitespace-nowrap">Filter Subject:</span>
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
              selectedSubject === 'all'
                ? 'bg-indigo-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            All Topics ({topics.length})
          </button>
          {subjects.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedSubject(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                selectedSubject === s.id
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-slate-400 mr-2 whitespace-nowrap">Exam Year:</span>
          {availableYears.map(yr => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                selectedYear === yr
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              {yr === 'all' ? 'All Exam Years' : yr === 'regional' ? 'Regional Model Exams' : `${yr} E.C. Exam`}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map(topic => {
          const subject = subjects.find(s => s.id === topic.subject_id);
          const gradeInfo = getTopicGradeInfo(topic.topic_name, topic.subject_id, topic.grade_id);

          return (
            <div
              key={topic.id}
              className="bg-slate-800 border border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:border-slate-600 transition group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-700 text-slate-200">
                      {subject?.name || 'Secondary Subject'}
                    </span>
                    {gradeInfo && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border ${gradeInfo.badgeBg} ${gradeInfo.badgeColor} ${gradeInfo.badgeBorder}`}>
                        <GraduationCap className="w-3 h-3" />
                        <span>{gradeInfo.gradeLabel}</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-indigo-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Past EUEE Questions
                  </span>
                </div>

                <h3 className="font-bold text-base text-white group-hover:text-indigo-400 transition-colors">
                  {topic.topic_name}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {topic.description}
                </p>

                <div className="mt-4 p-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-xs text-slate-400 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="line-clamp-1">
                      {gradeInfo?.unitLabel || 'Grounded in Ethiopian secondary syllabus'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-400 font-medium">Untimed Mode</span>

                <button
                  onClick={() => onNavigate('exam-practice', { topicId: topic.id, selectedYear, topicTitle: topic.topic_name })}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>Practice Topic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
