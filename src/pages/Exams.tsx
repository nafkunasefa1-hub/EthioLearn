import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Award,
  Clock,
  CheckCircle,
  Play,
  Layers,
  Search,
  Filter,
  AlertCircle,
  Lock,
  ChevronRight,
  FileCheck,
  Upload,
  Sparkles,
  FileText,
  Image as ImageIcon,
  X,
  Eye,
  Check,
  BookOpen,
  MapPin,
  HelpCircle,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  MessageSquarePlus,
  GraduationCap,
  Download,
  CheckCircle2,
  Cloud,
  WifiOff,
  ArrowRight
} from 'lucide-react';
import { Exam, Subject, ExamQuestion } from '../types';
import { apiFetchJson } from '../utils/api';
import { STATIC_EXAMS_CATALOG } from '../data/staticExamsCatalog';
import { QuestionDiagramViewer } from '../components/QuestionDiagramViewer';
import { FormattedQuestionText, renderRichInline } from '../components/FormattedQuestionText';
import { QuestionFeedbackModal } from '../components/QuestionFeedbackModal';
import { getTopicGradeInfo, TopicGradeInfo } from '../utils/curriculumGradeMap';
import {
  saveExamOffline,
  getAllOfflineExamIds,
  deleteOfflineExam,
  getOfflineExamQuestions,
  getAllOfflineExams,
  cacheCatalogData,
  getCachedCatalogData
} from '../utils/offlineStorage';

const cleanExamTitle = (title: string): string => {
  return (title || '').replace(/\s*\(\s*\d+\s*questions?\s*\)/gi, '').trim();
};

interface ExamsProps {
  initialCategory?: 'ALL' | 'ENTRANCE' | 'MODEL' | 'COLLECTION' | 'BY_CATEGORY' | 'GRADE_9' | 'GRADE_10' | 'GRADE_11_NATURAL' | 'AI_GENERATED' | 'WORKSHEET';
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const Exams: React.FC<ExamsProps> = ({ initialCategory = 'ALL', onNavigate }) => {
  const { user, hasGradeAccess } = useAuth();
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ENTRANCE' | 'MODEL' | 'COLLECTION' | 'BY_CATEGORY' | 'GRADE_9' | 'GRADE_10' | 'GRADE_11_NATURAL' | 'AI_GENERATED' | 'WORKSHEET'>('ALL');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [examsRaw, setExamsRaw] = useState<Exam[]>(STATIC_EXAMS_CATALOG);
  const exams = useMemo(() => (Array.isArray(examsRaw) && examsRaw.length > 0 ? examsRaw : STATIC_EXAMS_CATALOG), [examsRaw]);
  const setExams = (val: any) => {
    if (typeof val === 'function') {
      setExamsRaw(prev => {
        const safePrev = Array.isArray(prev) && prev.length > 0 ? prev : STATIC_EXAMS_CATALOG;
        const next = val(safePrev);
        return Array.isArray(next) && next.length > 0 ? next : STATIC_EXAMS_CATALOG;
      });
    } else {
      setExamsRaw(Array.isArray(val) && val.length > 0 ? val : STATIC_EXAMS_CATALOG);
    }
  };
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Upload & Digitize Modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadMode, setUploadMode] = useState<'dual' | 'file' | 'text'>('dual');
  const [uploadText, setUploadText] = useState<string>('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadLatexFile, setUploadLatexFile] = useState<File | null>(null);
  const [uploadCategory, setUploadCategory] = useState<'ENTRANCE' | 'MODEL' | 'WORKSHEET'>('ENTRANCE');
  const [uploadSeriesChoice, setUploadSeriesChoice] = useState<string>('2018 E.C. EUEE Exams');
  const [customSeriesName, setCustomSeriesName] = useState<string>('');
  const [uploadSubjectId, setUploadSubjectId] = useState<string>('subj-math');
  const [uploadGradeId, setUploadGradeId] = useState<string>('grade-12');
  const [uploadTitle, setUploadTitle] = useState<string>('');
  const [uploadYear, setUploadYear] = useState<string>('2018');
  const [uploadRegion, setUploadRegion] = useState<string>('Addis Ababa');
  const [uploadDuration, setUploadDuration] = useState<string>('120');
  const [uploading, setUploading] = useState(false);
  const [uploadProgressStep, setUploadProgressStep] = useState<string>('');
  const [uploadResult, setUploadResult] = useState<{ count: number; examTitle: string; examId: string; series: string } | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Question & Explanations Review Modal state
  const [inspectExam, setInspectExam] = useState<Exam | null>(null);
  const [inspectQuestions, setInspectQuestions] = useState<ExamQuestion[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [inspectError, setInspectError] = useState<string | null>(null);

  // Replace & Regenerate Modal state
  const [replaceModalExam, setReplaceModalExam] = useState<Exam | null>(null);
  const [replaceFile, setReplaceFile] = useState<File | null>(null);
  const [replaceLatexFile, setReplaceLatexFile] = useState<File | null>(null);
  const [replaceRawText, setReplaceRawText] = useState<string>('');
  const [replaceTab, setReplaceTab] = useState<'dual' | 'pdf' | 'upload' | 'text'>('dual');
  const [replaceLoading, setReplaceLoading] = useState(false);
  const [replaceSuccessMsg, setReplaceSuccessMsg] = useState<string | null>(null);
  const [replaceErrorMsg, setReplaceErrorMsg] = useState<string | null>(null);

  // By Category Tab state
  const [categorySelectedExamId, setCategorySelectedExamId] = useState<string>('');
  const [categoryYearFilter, setCategoryYearFilter] = useState<string>('all');
  const [categoryQuestions, setCategoryQuestions] = useState<ExamQuestion[]>([]);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedPassage, setExpandedPassage] = useState<string | null>(null);

  // Question Feedback Modal state
  const [feedbackQuestion, setFeedbackQuestion] = useState<{
    id: string;
    question_number?: number;
    question_text: string;
    correct_answer: string;
  } | null>(null);
  const [feedbackExamInfo, setFeedbackExamInfo] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  // Offline availability state
  const [offlineExamIds, setOfflineExamIds] = useState<string[]>([]);
  const [savingExamId, setSavingExamId] = useState<string | null>(null);
  const [batchSaving, setBatchSaving] = useState(false);
  const [batchProgress, setBatchProgress] = useState<{ current: number; total: number; title: string } | null>(null);
  const [isOfflineMode, setIsOfflineMode] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOfflineMode(false);
    const handleOffline = () => setIsOfflineMode(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const refreshOfflineIds = async () => {
    try {
      const ids = await getAllOfflineExamIds();
      setOfflineExamIds(ids);
    } catch {
      // ignore
    }
  };

  const fetchExams = async () => {
    try {
      setLoading(true);
      await refreshOfflineIds();

      const [examsData, subjectsData] = await Promise.all([
        apiFetchJson<Exam[]>(
          '/api/exams',
          { headers: { 'x-user-id': user?.id || 'usr-student-premium' } },
          []
        ),
        apiFetchJson<Subject[]>('/api/subjects', undefined, [])
      ]);

      let list = Array.isArray(examsData) ? [...examsData] : [];
      if (list.length === 0) {
        const cached = await getCachedCatalogData();
        const offlineSaved = await getAllOfflineExams();
        list = offlineSaved.length > 0 ? offlineSaved : (cached.exams?.length > 0 ? cached.exams : STATIC_EXAMS_CATALOG);
      }

      // Merge with STATIC_EXAMS_CATALOG to guarantee all 59 exams (24 entrance, model, grade 9-11, collections, AI generated) are present
      const existingExamIds = new Set(list.map(e => e.id));
      STATIC_EXAMS_CATALOG.forEach(se => {
        if (!existingExamIds.has(se.id)) {
          list.push({ ...se });
          existingExamIds.add(se.id);
        }
      });

      setExams(list);
      if (Array.isArray(subjectsData) && subjectsData.length > 0) {
        setSubjects(subjectsData);
      }

      // Cache catalog data for offline access
      cacheCatalogData({ exams: list, subjects: subjectsData || [] });
    } catch (err) {
      console.warn('Exams fetch offline fallback active:', err);
      const cached = await getCachedCatalogData();
      const offlineSaved = await getAllOfflineExams();
      const combined = offlineSaved.length > 0 ? offlineSaved : (cached.exams?.length > 0 ? cached.exams : STATIC_EXAMS_CATALOG);
      setExams(combined);
      if (cached.subjects?.length > 0) setSubjects(cached.subjects);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveExamOffline = async (exam: Exam, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavingExamId(exam.id);
    try {
      const res = await fetch(`/api/exams/${exam.id}/questions`, {
        headers: { 'x-user-id': user?.id || 'usr-student-premium' }
      });
      if (!res.ok) throw new Error('Failed to fetch exam questions');
      const questions: ExamQuestion[] = await res.json();
      await saveExamOffline(exam, questions);
      await refreshOfflineIds();
    } catch (err) {
      console.error('Failed to save exam offline:', err);
    } finally {
      setSavingExamId(null);
    }
  };

  const handleRemoveOfflineExam = async (examId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      await deleteOfflineExam(examId);
      await refreshOfflineIds();
    } catch (err) {
      console.error('Failed to remove offline exam:', err);
    }
  };

  const handleSaveAllGradeExamsOffline = async () => {
    const targetExams = exams.filter(e => {
      if (selectedGrade !== 'all') {
        const isGrade11 = ['grade-11', 'grade-11-natural', 'grade-11-social'].includes(selectedGrade);
        const isGrade12 = ['grade-12', 'grade-12-natural', 'grade-12-social'].includes(selectedGrade);
        if (isGrade11 && !['grade-11', 'grade-11-natural', 'grade-11-social'].includes(e.grade_id)) return false;
        if (isGrade12 && !['grade-12', 'grade-12-natural', 'grade-12-social'].includes(e.grade_id)) return false;
        if (!isGrade11 && !isGrade12 && e.grade_id !== selectedGrade && !e.grade_id?.startsWith(selectedGrade)) return false;
      }
      return true;
    });
    if (!targetExams.length) return;

    setBatchSaving(true);
    for (let i = 0; i < targetExams.length; i++) {
      const ex = targetExams[i];
      setBatchProgress({ current: i + 1, total: targetExams.length, title: ex.title });
      try {
        const res = await fetch(`/api/exams/${ex.id}/questions`, {
          headers: { 'x-user-id': user?.id || 'usr-student-premium' }
        });
        if (res.ok) {
          const questions: ExamQuestion[] = await res.json();
          await saveExamOffline(ex, questions);
        }
      } catch (err) {
        console.warn(`Failed to save ${ex.title} offline:`, err);
      }
    }
    await refreshOfflineIds();
    setBatchSaving(false);
    setBatchProgress(null);
  };

  useEffect(() => {
    fetchExams();
  }, [user]);

  const handleOpenUploadModal = (category: 'ENTRANCE' | 'MODEL' | 'WORKSHEET' = 'ENTRANCE') => {
    setUploadCategory(category);
    setUploadMode('dual');
    setUploadFile(null);
    setUploadLatexFile(null);
    setUploadText('');
    setUploadError(null);
    setUploadResult(null);
    setUploadProgressStep('');
    setUploadSeriesChoice(
      category === 'MODEL'
        ? 'Regional Model Examinations'
        : category === 'WORKSHEET'
        ? 'Worksheets & Special Boarding Papers'
        : '2018 E.C. EUEE Exams'
    );
    setCustomSeriesName('');
    setUploadTitle(
      category === 'MODEL'
        ? '2018 E.C. Regional Model Examination'
        : category === 'WORKSHEET'
        ? '2016 E.C. Special Boarding Worksheet'
        : '2018 E.C. National EUEE Paper'
    );
    setUploadYear('2018');
    setIsUploadOpen(true);
  };

  const handleUploadAndDigitize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadMode === 'file' && !uploadFile) {
      setUploadError('Please select an exam PDF or image file.');
      return;
    }
    if (uploadMode === 'text' && (!uploadText || uploadText.trim().length < 10) && !uploadLatexFile) {
      setUploadError('Please paste or upload LaTeX / exam text content with questions.');
      return;
    }
    if (uploadMode === 'dual' && !uploadFile && !uploadLatexFile && (!uploadText || uploadText.trim().length < 10)) {
      setUploadError('Please select at least a PDF file or LaTeX file/text for dual digitization.');
      return;
    }

    setUploading(true);
    setUploadError(null);
    setUploadProgressStep(
      uploadMode === 'dual'
        ? 'Scanning PDF for diagrams & parsing LaTeX formulas / tables...'
        : uploadMode === 'text'
        ? 'Parsing LaTeX/exam questions, choices & AI explanations...'
        : 'Uploading exam file to server...'
    );

    const finalSeries = uploadSeriesChoice === 'CUSTOM'
      ? (customSeriesName.trim() || 'Custom Exam Series')
      : uploadSeriesChoice;

    const formData = new FormData();
    if (uploadFile) {
      formData.append('pdf_file', uploadFile);
      formData.append('exam_file', uploadFile);
    }
    if (uploadLatexFile) {
      formData.append('latex_file', uploadLatexFile);
    }
    if (uploadText && uploadText.trim().length > 0) {
      formData.append('raw_text', uploadText.trim());
    }
    formData.append('title', uploadTitle || 'Uploaded Exam Paper');
    formData.append('category', uploadCategory);
    formData.append('exam_series', finalSeries);
    formData.append('ethiopian_year', `${uploadYear} E.C.`);
    formData.append('subject_id', uploadSubjectId);
    formData.append('grade_id', uploadGradeId);
    formData.append('year', uploadYear);
    formData.append('duration_minutes', uploadDuration);
    if (uploadCategory === 'MODEL') {
      formData.append('model_region', uploadRegion);
    }

    try {
      setUploadProgressStep('Vision AI extracting & cropping high-resolution PDF diagrams and constructing LaTeX tables...');

      const res = await fetch('/api/exams/upload-ai', {
        method: 'POST',
        headers: {
          'x-user-id': user?.id || 'usr-student-premium'
        },
        body: formData
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {
        data = { error: `Server responded with status ${res.status}` };
      }

      if (!res.ok) {
        throw new Error(data.error || 'Failed to digitize exam paper');
      }

      setUploadProgressStep('Generating step-by-step pedagogical explanations for all questions...');
      const createdExamId = data.exam?.id;
      const createdCategory = data.exam?.category || uploadCategory;
      const createdSeries = data.exam?.exam_series || finalSeries;

      setUploadResult({
        count: data.questions_count,
        examTitle: data.exam?.title || uploadTitle,
        examId: createdExamId,
        series: createdSeries
      });

      // Switch to the appropriate category and clear restrictive filters so the saved exam is immediately visible
      setActiveCategory(createdCategory);
      if (createdSeries) {
        setSelectedSeries(createdSeries);
      } else {
        setSelectedSeries('all');
      }
      setSelectedSubject('all');
      setSelectedYear('all');
      setSelectedRegion('all');
      if (createdExamId) {
        setCategorySelectedExamId(createdExamId);
      }

      // Refresh list from server to ensure fresh state
      await fetchExams();
    } catch (err: any) {
      console.error(err);
      const isNetworkErr = err?.message === 'Failed to fetch' || err?.name === 'TypeError';
      setUploadError(
        isNetworkErr
          ? 'Network interrupted or server processing timed out. If your PDF is large, please allow a moment and check your exams list, or try a smaller section.'
          : (err.message || 'Error converting exam with AI')
      );
    } finally {
      setUploading(false);
    }
  };

  const handleOpenInspectQuestions = async (exam: Exam) => {
    setInspectExam(exam);
    setInspectQuestions([]);
    setInspectError(null);
    setLoadingQuestions(true);

    try {
      const res = await fetch(`/api/exams/${exam.id}/questions`, {
        headers: { 'x-user-id': user?.id || 'usr-student-premium' }
      });
      if (res.ok) {
        const data = await res.json();
        setInspectQuestions(data);
        return;
      }
    } catch {
      // Try offline storage fallback
    }

    try {
      const offlineData = await getOfflineExamQuestions(exam.id);
      if (offlineData && offlineData.length > 0) {
        setInspectQuestions(offlineData);
      } else {
        setInspectError('This exam is not yet saved to your device. Please connect to the internet to download it for offline use.');
      }
    } catch (err: any) {
      console.error(err);
      setInspectError('Could not load exam questions offline.');
    } finally {
      setLoadingQuestions(false);
    }
  };

  const fetchCategoryQuestions = async (examId: string) => {
    if (!examId) return;
    setCategoryLoading(true);
    try {
      const data = await apiFetchJson<ExamQuestion[]>(
        `/api/exams/${examId}/questions`,
        { headers: { 'x-user-id': user?.id || 'usr-student-premium' } },
        []
      );
      if (Array.isArray(data) && data.length > 0) {
        setCategoryQuestions(data);
        if (!expandedCategory) {
          const firstCat = data[0].instruction_category || data[0].topic_name || 'Dialogue & Communicative Activities';
          setExpandedCategory(firstCat);
        }
        return;
      }
    } catch {
      // Offline fallback
    }

    try {
      const offlineData = await getOfflineExamQuestions(examId);
      if (offlineData && offlineData.length > 0) {
        setCategoryQuestions(offlineData);
        if (!expandedCategory) {
          const firstCat = offlineData[0].instruction_category || offlineData[0].topic_name || 'Dialogue & Communicative Activities';
          setExpandedCategory(firstCat);
        }
      }
    } catch (err) {
      console.error('Error loading category questions offline:', err);
    } finally {
      setCategoryLoading(false);
    }
  };

  useEffect(() => {
    if (activeCategory === 'BY_CATEGORY') {
      const targetId =
        categorySelectedExamId ||
        exams.find(e => e.title.toLowerCase().includes('english') || e.title.includes('2018'))?.id ||
        exams[0]?.id;
      if (targetId && targetId !== categorySelectedExamId) {
        setCategorySelectedExamId(targetId);
        fetchCategoryQuestions(targetId);
      } else if (targetId && categoryQuestions.length === 0) {
        fetchCategoryQuestions(targetId);
      }
    }
  }, [activeCategory, exams]);

  const handleOpenReplaceModal = (exam: Exam) => {
    setReplaceModalExam(exam);
    setReplaceFile(null);
    setReplaceLatexFile(null);
    setReplaceRawText('');
    setReplaceTab('dual');
    setReplaceErrorMsg(null);
    setReplaceSuccessMsg(null);
  };

  const handleRegenerateExam = async (
    exam: Exam,
    pdfFile?: File | null,
    latexFile?: File | null,
    rawText?: string
  ) => {
    setReplaceLoading(true);
    setReplaceErrorMsg(null);
    setReplaceSuccessMsg(null);

    try {
      let resData: any;
      const formData = new FormData();
      if (pdfFile) {
        formData.append('pdf_file', pdfFile);
        formData.append('exam_file', pdfFile);
      }
      if (latexFile) {
        formData.append('latex_file', latexFile);
      }
      if (rawText && rawText.trim()) {
        formData.append('raw_text', rawText.trim());
      }

      const res = await fetch(`/api/exams/${exam.id}/replace`, {
        method: 'POST',
        headers: {
          'x-user-id': user?.id || 'usr-student-premium'
        },
        body: formData
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to replace / re-extract exam');
      }
      resData = await res.json();

      setReplaceSuccessMsg(
        resData.message || `Successfully regenerated all ${resData.questions_count || 100} questions with instructions, passages, diagrams, and AI explanations!`
      );

      // Refresh exams and question lists
      await fetchExams();
      if (inspectExam && inspectExam.id === exam.id) {
        handleOpenInspectQuestions(exam);
      }
      if (categorySelectedExamId === exam.id) {
        fetchCategoryQuestions(exam.id);
      }
    } catch (err: any) {
      console.error('Error regenerating exam:', err);
      setReplaceErrorMsg(err.message || 'Failed to re-extract questions');
    } finally {
      setReplaceLoading(false);
    }
  };

  // Calculate expected question count based on Ethiopian examination standards
  // (Physics: 60, Math: 60, SAT: 60, Chemistry: 80, Biology: 100, English: 100)
  const getExamExpectedCount = (exam?: Exam | null) => {
    if (!exam) return 100;
    const sLower = (exam.subject_id || exam.subject_name || exam.title || '').toLowerCase();
    if (sLower.includes('phys') || sLower.includes('math') || sLower.includes('sat') || sLower.includes('aptitude')) return 60;
    if (sLower.includes('chem')) return 80;
    if (sLower.includes('bio') || sLower.includes('eng')) return 100;
    return exam.total_questions || 100;
  };

  // Selected exam for By Category tab
  const categorySelectedExam =
    exams.find(e => e.id === categorySelectedExamId) ||
    exams.find(e => e.title.toLowerCase().includes('english') || e.title.includes('2018')) ||
    exams[0];

  // Group category questions by instruction category in original exam order
  const groupedCategories = React.useMemo(() => {
    const groups: Array<{
      categoryName: string;
      gradeInfo: TopicGradeInfo;
      instruction?: string;
      readingPassages: Array<{ title?: string; text: string }>;
      questions: ExamQuestion[];
    }> = [];

    const categoryMap = new Map<string, (typeof groups)[0]>();

    for (const q of categoryQuestions) {
      const catName = q.instruction_category || q.topic_name || 'Core Curriculum Questions';
      
      // Do not include "Answer with Explanations" or answer keys as a separate category
      if (/answers?\s*(?:with|and|&)?\s*explanations?|answer\s*key|solutions?|explanations?\s*only/i.test(catName)) {
        continue;
      }

      let group = categoryMap.get(catName);
      if (!group) {
        const gradeInfo = getTopicGradeInfo(catName, categorySelectedExam?.subject_id || q.subject_id, q.grade_id);
        group = {
          categoryName: catName,
          gradeInfo,
          instruction: q.section_instruction,
          readingPassages: [],
          questions: []
        };
        categoryMap.set(catName, group);
        groups.push(group);
      }
      group.questions.push(q);
      if (q.reading_passage && !group.readingPassages.some(p => p.text === q.reading_passage)) {
        group.readingPassages.push({
          title: q.passage_title || 'Reading Comprehension Passage',
          text: q.reading_passage
        });
      }
    }

    return groups;
  }, [categoryQuestions, categorySelectedExam]);

  // Derive unique categories/series from exams
  const availableSeries = Array.from(
    new Set(exams.map(e => e.exam_series || (e.category === 'MODEL' ? 'Regional Model Examinations' : 'National EUEE Exams')).filter(Boolean))
  );

  // Filter exams by category series, category type, subject, year, region
  // Do not restrict default selectedGrade so all 55 exams across all categories are displayed
  useEffect(() => {
    // Default to 'all' for full catalog view
  }, []);

  const GRADE_SUBJECT_MAP: Record<string, string[]> = {
    'grade-9': ['subj-math', 'subj-phys', 'subj-chem', 'subj-bio', 'subj-eng', 'subj-geog', 'subj-amh', 'subj-civ', 'subj-it'],
    'grade-10': ['subj-math', 'subj-phys', 'subj-chem', 'subj-bio', 'subj-eng', 'subj-geog', 'subj-amh', 'subj-civ', 'subj-it'],
    'grade-11-natural': ['subj-math', 'subj-phys', 'subj-bio', 'subj-chem', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-it'],
    'grade-11-social': ['subj-math', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-econ', 'subj-hist', 'subj-geog', 'subj-agri', 'subj-civ', 'subj-it'],
    'grade-12-natural': ['subj-math', 'subj-phys', 'subj-bio', 'subj-chem', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-it'],
    'grade-12-social': ['subj-math', 'subj-eng', 'subj-sat', 'subj-apt', 'subj-econ', 'subj-hist', 'subj-geog', 'subj-agri', 'subj-civ', 'subj-it']
  };

  const safeSubjects = Array.isArray(subjects) ? subjects : [];
  const safeExams = Array.isArray(exams) ? exams : [];

  const filteredSubjects = safeSubjects.filter(s => {
    if (GRADE_SUBJECT_MAP[selectedGrade]) {
      return GRADE_SUBJECT_MAP[selectedGrade].includes(s.id);
    }
    return true;
  });

  const filteredExams = safeExams.filter(e => {
    if (activeCategory !== 'ALL' && activeCategory !== 'BY_CATEGORY') {
      if (activeCategory === 'GRADE_9') {
        if (e.category === 'COLLECTION' || e.exam_series === 'Exam Collection') return false;
        if (e.category !== 'GRADE_9' && e.exam_series !== 'Grade 9 Exams' && e.grade_id !== 'grade-9') return false;
      } else if (activeCategory === 'GRADE_10') {
        if (e.category === 'COLLECTION' || e.exam_series === 'Exam Collection') return false;
        if (e.category !== 'GRADE_10' && e.exam_series !== 'Grade 10 Exams' && e.grade_id !== 'grade-10') return false;
      } else if (activeCategory === 'GRADE_11_NATURAL') {
        if (e.category !== 'GRADE_11_NATURAL' && e.exam_series !== 'Grade 11 Natural Science Exams' && e.grade_id !== 'grade-11-natural') return false;
      } else if (activeCategory === 'COLLECTION') {
        if (e.category !== 'COLLECTION' && e.exam_series !== 'Exam Collection') return false;
      } else if (activeCategory === 'WORKSHEET') {
        if (e.category !== 'WORKSHEET' && !e.exam_series?.toLowerCase().includes('worksheet')) return false;
      } else if (activeCategory === 'AI_GENERATED') {
        if (e.category !== 'AI_GENERATED' && e.exam_series !== 'AI Generated Questions' && !e.title.includes('AI Generated')) return false;
      } else if (activeCategory === 'ENTRANCE') {
        if (e.category === 'AI_GENERATED' || e.exam_series === 'AI Generated Questions' || e.title.includes('AI Generated')) return false;
        const examCategory = e.category || 'ENTRANCE';
        if (examCategory !== 'ENTRANCE') return false;
      } else {
        const examCategory = e.category || 'ENTRANCE';
        if (examCategory !== activeCategory) return false;
      }
    }
    if (selectedSeries !== 'all') {
      if (selectedSeries === '2018 E.C. EUEE Natural Science Exams' || selectedSeries === '2018 E.C. EUEE Natural Science Category') {
        if (e.category !== 'ENTRANCE' || e.title.includes('Model') || e.exam_series?.includes('Model')) return false;
        const is2018 = e.year === 2018 || e.ethiopian_year === '2018 E.C.' || e.title.includes('2018');
        const isNatural = e.grade_id !== 'grade-12-social' && !e.title.includes('Social Science') && !e.title.includes('Geography') && !e.title.includes('History') && !e.title.includes('Civics') && !e.title.includes('Economics');
        if (!is2018 || !isNatural) return false;
      } else if (selectedSeries === '2018 E.C. EUEE Social Science Exams' || selectedSeries === '2018 E.C. EUEE Social Science Category') {
        if (e.category === 'COLLECTION' || e.exam_series === 'Exam Collection') return false;
        if (e.category !== 'ENTRANCE' || e.title.includes('Model')) return false;
        const is2018 = e.year === 2018 || e.ethiopian_year === '2018 E.C.' || e.title.includes('2018');
        const isSocial = e.exam_series === '2018 E.C. EUEE Social Science Exams' || e.grade_id === 'grade-12-social' || e.title.includes('Social Science') || e.title.includes('Geography') || e.title.includes('History') || e.title.includes('Civics') || e.title.includes('Economics');
        if (!is2018 || !isSocial) return false;
      } else if (selectedSeries === 'Grade 9 Exams') {
        if (e.category === 'COLLECTION' || e.exam_series === 'Exam Collection') return false;
        if (e.category !== 'GRADE_9' && e.exam_series !== 'Grade 9 Exams' && e.grade_id !== 'grade-9') return false;
      } else if (selectedSeries === 'Grade 10 Exams') {
        if (e.category === 'COLLECTION' || e.exam_series === 'Exam Collection') return false;
        if (e.category !== 'GRADE_10' && e.exam_series !== 'Grade 10 Exams' && e.grade_id !== 'grade-10') return false;
      } else if (selectedSeries === '2017 E.C. EUEE Exams') {
        if (e.category === 'AI_GENERATED' || e.title.includes('AI Generated')) return false;
        const is2017 = e.exam_series === '2017 E.C. EUEE Exams' || (e.title.includes('2017') && (e.category === 'ENTRANCE' || !e.category));
        if (!is2017) return false;
      } else if (selectedSeries === '2016 E.C. EUEE Exams') {
        if (e.category === 'AI_GENERATED' || e.title.includes('AI Generated')) return false;
        const is2016 = e.exam_series === '2016 E.C. EUEE Exams' || (e.title.includes('2016') && (e.category === 'ENTRANCE' || !e.category));
        if (!is2016) return false;
      } else if (selectedSeries === 'AI Generated Questions') {
        if (e.category !== 'AI_GENERATED' && e.exam_series !== 'AI Generated Questions' && !e.title.includes('AI Generated')) return false;
      } else if (selectedSeries === 'Regional Model Examinations') {
        if (e.category !== 'MODEL' && !e.exam_series?.includes('Model') && !e.title.includes('Model')) return false;
        if (e.category === 'GRADE_9' || e.category === 'GRADE_10' || e.category === 'GRADE_11_NATURAL') return false;
      } else if (selectedSeries === 'Exam Collection') {
        if (e.category !== 'COLLECTION' && e.exam_series !== 'Exam Collection') return false;
      } else if (selectedSeries === 'Worksheets & Special Boarding Papers') {
        if (e.category !== 'WORKSHEET' && !e.exam_series?.toLowerCase().includes('worksheet')) return false;
      } else {
        const series = e.exam_series || (e.category === 'MODEL' ? 'Regional Model Examinations' : 'National EUEE Exams');
        if (series.toLowerCase() !== selectedSeries.toLowerCase()) return false;
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const words = q.split(/\s+/).filter(Boolean);
      const corpus = `${e.title || ''} ${e.subject_name || ''} ${e.exam_series || ''} ${e.ethiopian_year || e.year || ''} ${e.description || ''}`.toLowerCase();
      const matchAllWords = words.every(w => corpus.includes(w));
      if (!matchAllWords) {
        return false;
      }
    }

    if (selectedGrade !== 'all') {
      const isEntrancePaper = (e.category || 'ENTRANCE') === 'ENTRANCE';
      const isNaturalStream = selectedGrade.includes('natural');
      const isSocialStream = selectedGrade.includes('social');

      // National Entrance exams are open for all grades to practice, but can filter by natural/social stream
      if (isEntrancePaper) {
        if (isSocialStream && e.grade_id === 'grade-12-natural') return false;
        if (isNaturalStream && e.grade_id === 'grade-12-social') return false;
      } else if (e.grade_id !== 'grade-all' && e.grade_id !== 'all' && e.category !== 'COLLECTION' && e.exam_series !== 'Exam Collection') {
        const isGrade11 = ['grade-11', 'grade-11-natural', 'grade-11-social'].includes(selectedGrade);
        const isGrade12 = ['grade-12', 'grade-12-natural', 'grade-12-social'].includes(selectedGrade);

        if (isGrade11) {
          if (!['grade-11', 'grade-11-natural', 'grade-11-social'].includes(e.grade_id)) return false;
        } else if (isGrade12) {
          if (!['grade-12', 'grade-12-natural', 'grade-12-social'].includes(e.grade_id)) return false;
        } else {
          if (e.grade_id !== selectedGrade && !e.grade_id?.startsWith(selectedGrade)) return false;
        }

        if (GRADE_SUBJECT_MAP[selectedGrade] && !GRADE_SUBJECT_MAP[selectedGrade].includes(e.subject_id)) {
          return false;
        }
      }
    }

    if (selectedSubject !== 'all') {
      const isAptitudeMatch = (selectedSubject === 'subj-sat' || selectedSubject === 'subj-apt') && (e.subject_id === 'subj-sat' || e.subject_id === 'subj-apt');
      if (!isAptitudeMatch && e.subject_id !== selectedSubject) return false;
    }
    if (selectedYear !== 'all') {
      const yrStr = selectedYear.toString();
      const matchYear = e.year?.toString() === yrStr || 
                        (e.ethiopian_year && e.ethiopian_year.includes(yrStr)) ||
                        (e.title && e.title.includes(yrStr));
      if (!matchYear) return false;
    }
    return true;
  });

  const availableRegions = Array.from(
    new Set(exams.filter(e => e.model_region).map(e => e.model_region as string))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 2019 E.C. Exam Predictor Banner */}
      <div className="p-4 bg-gradient-to-r from-indigo-950/90 via-purple-950/80 to-slate-900 border border-indigo-700/60 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0">
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">New Intelligence Feature</span>
              <span className="text-[10px] px-2 py-0.5 bg-indigo-500/20 text-indigo-200 border border-indigo-500/30 rounded-full font-bold">2019 E.C. (2027 G.C.)</span>
            </div>
            <h3 className="font-extrabold text-white text-sm sm:text-base">AI Exam Predictor: 3X Predicted Questions Grounded on Past Entrance Exams</h3>
            <p className="text-xs text-slate-300">Empirical trend analysis predicting 180 questions per subject across 3 mastery tiers.</p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('exam-predictor')}
          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-xl text-xs transition shadow-lg flex items-center gap-2 shrink-0 active:scale-95"
        >
          <span>Launch AI Exam Predictor</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            {activeCategory === 'BY_CATEGORY' ? (
              <>
                <Layers className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400">Instruction-Based Categorization • Section Breakdown</span>
              </>
            ) : activeCategory === 'AI_GENERATED' ? (
              <>
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-pink-400">AI Generated Question Bank • Adaptive Mastery</span>
              </>
            ) : activeCategory === 'ENTRANCE' ? (
              <>
                <Award className="w-4 h-4" />
                <span>National Examination Directorate</span>
              </>
            ) : (
              <>
                <FileCheck className="w-4 h-4" />
                <span>Regional & Bureau Model Examinations</span>
              </>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {activeCategory === 'BY_CATEGORY'
              ? 'Exams Arranged By Category & Instruction'
              : activeCategory === 'AI_GENERATED'
              ? 'AI Generated Practice Examinations'
              : activeCategory === 'ENTRANCE'
              ? 'Ethiopian University Entrance Examinations'
              : 'Official Model Examinations'}
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            {activeCategory === 'BY_CATEGORY'
              ? 'Exams organized systematically by their official directions (Dialogue, Jumbled Words, Reading Comprehension with Passages, Grammar, etc.) with verified answer keys and step-by-step AI explanations.'
              : activeCategory === 'AI_GENERATED'
              ? 'Practice authentic curriculum questions synthesized and calibrated by AI. Includes extra practice papers and biology question sets.'
              : activeCategory === 'ENTRANCE'
              ? 'Authentic 2018 E.C., 2017 E.C., and 2016 E.C. national entrance exam papers. Take under strict exam hall conditions with timer, or practice in untimed learning mode with instant feedback.'
              : 'Regional educational bureau model exams (Addis Ababa, Oromia, Amhara, Hawassa, Dire Dawa). Practice real model papers with AI step-by-step explanations.'}
          </p>
        </div>

        {/* Action Buttons: Save Offline, AI Upload & Topic Practice */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Offline Save All Button */}
          {(() => {
            const validOfflineCount = offlineExamIds.filter(id => exams.some(e => e.id === id)).length;
            const totalCount = exams.length;
            return (
              <button
                onClick={handleSaveAllGradeExamsOffline}
                disabled={batchSaving || totalCount === 0}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-emerald-950/40"
                title="Download questions and explanations to your device for 100% offline study"
              >
                {batchSaving ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Downloading ({batchProgress?.current}/{batchProgress?.total})...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-emerald-200" />
                    <span>Save All for Offline ({validOfflineCount}/{totalCount} Ready)</span>
                  </>
                )}
              </button>
            );
          })()}

          {user?.role === 'admin' && (
            <button
              onClick={() => handleOpenUploadModal(activeCategory === 'MODEL' ? 'MODEL' : 'ENTRANCE')}
              className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-amber-950/40"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Upload & Convert Exam with AI</span>
            </button>
          )}

          <button
            onClick={() => onNavigate('practice-topics')}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Practice by Topic</span>
          </button>
        </div>
      </div>

      {/* Offline Status Active Banner */}
      {isOfflineMode && (
        <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3 shadow-md">
          <WifiOff className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="text-sm font-bold text-amber-200 flex items-center gap-2">
              <span>Offline Mode Active</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">No Internet Connection</span>
            </h4>
            <p className="text-xs text-amber-300/80 mt-1">
              You are studying offline. All {offlineExamIds.filter(id => exams.some(e => e.id === id)).length} exam papers saved on your device are 100% accessible: you can take full timed exams, practice questions, and read complete AI pedagogical solutions without internet.
            </p>
          </div>
        </div>
      )}

      {/* Category Series Quick-Filter Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Browse By Exam Category & Series:</span>
          </div>
          {selectedSeries !== 'all' && (
            <button
              onClick={() => setSelectedSeries('all')}
              className="text-xs text-amber-400 hover:underline"
            >
              Reset to All Categories
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => {
              setSelectedSeries('all');
              setActiveCategory('ALL');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              selectedSeries === 'all' && activeCategory === 'ALL'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <span>All Categories</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">{exams.length}</span>
          </button>

          {/* Exam Collection Category (All Grades - Natural & Social Science) */}
          <button
            onClick={() => {
              setSelectedSeries('Exam Collection');
              setActiveCategory('COLLECTION');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === 'Exam Collection' || activeCategory === 'COLLECTION'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-violet-400 shadow-md font-bold'
                : 'bg-violet-950/40 text-violet-300 border-violet-600/40 hover:bg-violet-900/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>Exam Collection</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-violet-900/60 text-violet-200">
              {exams.filter(e => e.category === 'COLLECTION' || e.exam_series === 'Exam Collection').length}
            </span>
          </button>

          {/* Worksheets & Special Boarding Papers Series Button */}
          <button
            onClick={() => {
              setSelectedSeries('Worksheets & Special Boarding Papers');
              setActiveCategory('WORKSHEET');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === 'Worksheets & Special Boarding Papers' || activeCategory === 'WORKSHEET'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 border-amber-400 shadow-md font-bold'
                : 'bg-amber-950/40 text-amber-300 border-amber-600/40 hover:bg-amber-900/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Worksheets & Special Boarding Papers</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-900/60 text-amber-200">
              {exams.filter(e => e.category === 'WORKSHEET' || e.exam_series?.toLowerCase().includes('worksheet')).length}
            </span>
          </button>

          {/* 2018 E.C. Natural Science Highlighted Series */}
          <button
            onClick={() => {
              setSelectedSeries('2018 E.C. EUEE Natural Science Exams');
              setActiveCategory('ENTRANCE');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === '2018 E.C. EUEE Natural Science Exams' || selectedSeries === '2018 E.C. EUEE Natural Science Category'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 border-amber-400 shadow-md font-bold'
                : 'bg-amber-950/40 text-amber-300 border-amber-600/40 hover:bg-amber-900/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>2018 E.C. EUEE Natural Science Category</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-900/60 text-amber-200">
              {exams.filter(e => (e.exam_series === '2018 E.C. EUEE Natural Science Exams' || e.exam_series === '2018 E.C. EUEE Exams' || (e.title.includes('2018') && e.category === 'ENTRANCE')) && e.grade_id !== 'grade-12-social' && !e.title.includes('Social Science') && !e.title.includes('Geography') && !e.title.includes('History') && !e.title.includes('Civics') && !e.title.includes('Economics')).length}
            </span>
          </button>

          {/* 2018 E.C. Social Science Highlighted Series */}
          <button
            onClick={() => {
              setSelectedSeries('2018 E.C. EUEE Social Science Exams');
              setActiveCategory('ENTRANCE');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === '2018 E.C. EUEE Social Science Exams' || selectedSeries === '2018 E.C. EUEE Social Science Category'
                ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white border-rose-400 shadow-md font-bold'
                : 'bg-rose-950/40 text-rose-300 border-rose-600/40 hover:bg-rose-900/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-rose-400" />
            <span>2018 E.C. EUEE Social Science Category</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-rose-900/60 text-rose-200">
              {exams.filter(e => (e.exam_series === '2018 E.C. EUEE Social Science Exams' || (e.title.includes('2018') && (e.title.includes('Social Science') || e.title.includes('Geography') || e.title.includes('History') || e.title.includes('Civics') || e.title.includes('Economics')))) && e.category !== 'COLLECTION' && e.exam_series !== 'Exam Collection').length}
            </span>
          </button>

          {/* 2017 E.C. Highlighted Series */}
          <button
            onClick={() => {
              setSelectedSeries('2017 E.C. EUEE Exams');
              setActiveCategory('ENTRANCE');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === '2017 E.C. EUEE Exams'
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-400 shadow-md'
                : 'bg-blue-950/40 text-blue-300 border-blue-600/40 hover:bg-blue-900/50'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>2017 E.C. EUEE Category</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-blue-900/60 text-blue-200">
              {exams.filter(e => e.exam_series === '2017 E.C. EUEE Exams' || e.title.includes('2017')).length}
            </span>
          </button>

          {/* 2016 E.C. Highlighted Series */}
          <button
            onClick={() => {
              setSelectedSeries('2016 E.C. EUEE Exams');
              setActiveCategory('ENTRANCE');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === '2016 E.C. EUEE Exams'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold border-emerald-400 shadow-md'
                : 'bg-emerald-950/40 text-emerald-300 border-emerald-600/40 hover:bg-emerald-900/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>2016 E.C. EUEE Category</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-emerald-900/60 text-emerald-200">
              {exams.filter(e => (e.category === 'ENTRANCE' || !e.category) && e.grade_id !== 'grade-9' && (e.exam_series === '2016 E.C. EUEE Exams' || e.title.includes('2016')) && !e.title.includes('AI Generated')).length}
            </span>
          </button>

          {/* AI Generated Questions Category */}
          <button
            onClick={() => {
              setSelectedSeries('AI Generated Questions');
              setActiveCategory('AI_GENERATED');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === 'AI Generated Questions' || activeCategory === 'AI_GENERATED'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-pink-400 shadow-md font-bold'
                : 'bg-purple-950/40 text-purple-300 border-purple-600/40 hover:bg-purple-900/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>AI Generated Questions</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-purple-900/60 text-purple-200">
              {exams.filter(e => e.category === 'AI_GENERATED' || e.exam_series === 'AI Generated Questions' || e.title.includes('AI Generated')).length}
            </span>
          </button>

          {/* By Category & Topic Breakdown */}
          <button
            onClick={() => {
              setActiveCategory('BY_CATEGORY');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              activeCategory === 'BY_CATEGORY'
                ? 'bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white border-purple-400 shadow-md'
                : 'bg-purple-950/40 text-purple-300 border-purple-600/40 hover:bg-purple-900/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>By Category (Each by topic)</span>
          </button>

          {/* Regional Model Exams Category */}
          <button
            onClick={() => {
              setSelectedSeries('Regional Model Examinations');
              setActiveCategory('MODEL');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === 'Regional Model Examinations' || activeCategory === 'MODEL'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Regional Model Exams Category</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">
              {exams.filter(e => (e.category === 'MODEL' || e.exam_series === 'Regional Model Examinations') && e.grade_id !== 'grade-9' && e.exam_series !== 'Grade 9 Exams' && e.grade_id !== 'grade-10' && e.exam_series !== 'Grade 10 Exams').length}
            </span>
          </button>

          {/* Grade 9 Exams Category */}
          <button
            onClick={() => {
              setSelectedSeries('Grade 9 Exams');
              setActiveCategory('GRADE_9');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === 'Grade 9 Exams' || activeCategory === 'GRADE_9'
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Grade 9 Exams Category</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">
              {exams.filter(e => (e.category === 'GRADE_9' || e.exam_series === 'Grade 9 Exams' || e.grade_id === 'grade-9') && e.category !== 'COLLECTION' && e.exam_series !== 'Exam Collection').length}
            </span>
          </button>

          {/* Grade 10 Exams Category */}
          <button
            onClick={() => {
              setSelectedSeries('Grade 10 Exams');
              setActiveCategory('GRADE_10');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === 'Grade 10 Exams' || activeCategory === 'GRADE_10'
                ? 'bg-teal-600 text-white border-teal-500 shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
            <span>Grade 10 Exams Category</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">
              {exams.filter(e => (e.category === 'GRADE_10' || e.exam_series === 'Grade 10 Exams' || e.grade_id === 'grade-10') && e.category !== 'COLLECTION' && e.exam_series !== 'Exam Collection').length}
            </span>
          </button>

          {/* Grade 11 Natural Science Exams Category */}
          <button
            onClick={() => {
              setSelectedSeries('Grade 11 Natural Science Exams');
              setActiveCategory('GRADE_11_NATURAL');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedSeries === 'Grade 11 Natural Science Exams' || activeCategory === 'GRADE_11_NATURAL'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Grade 11 Natural Exams Category</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">
              {exams.filter(e => e.category === 'GRADE_11_NATURAL' || e.exam_series === 'Grade 11 Natural Science Exams' || e.grade_id === 'grade-11-natural').length}
            </span>
          </button>

          {/* Other Dynamic Series created by uploads */}
          {availableSeries.filter(s =>
            s !== '2018 E.C. EUEE Exams' &&
            s !== '2018 E.C. EUEE Natural Science Exams' &&
            s !== '2018 E.C. EUEE Social Science Exams' &&
            s !== '2017 E.C. EUEE Exams' &&
            s !== '2016 E.C. EUEE Exams' &&
            s !== 'AI Generated Questions' &&
            s !== 'Regional Model Examinations' &&
            s !== 'Grade 9 Exams' &&
            s !== 'Grade 10 Exams' &&
            s !== 'Grade 11 Natural Science Exams' &&
            s !== 'National EUEE Exams' &&
            s !== 'Exam Collection'
          ).map(series => (
            <button
              key={series}
              onClick={() => setSelectedSeries(series)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                selectedSeries === series
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>{series}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">
                {exams.filter(e => e.exam_series === series).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Category Tabs: Entrance Exams vs Model Exams */}
      <div className="flex items-center border-b border-slate-800 gap-2 sm:gap-6 text-sm overflow-x-auto scrollbar-none whitespace-nowrap pb-1">
        <button
          onClick={() => {
            setActiveCategory('ALL');
            setSelectedSeries('all');
            setSelectedGrade('all');
            setSelectedSubject('all');
            setSelectedYear('all');
            setSelectedRegion('all');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'ALL'
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>All Exam Papers & Collections</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold">
            {exams.length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('ENTRANCE');
            setSelectedSeries('all');
            setSelectedGrade('all');
            setSelectedSubject('all');
            setSelectedYear('all');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'ENTRANCE'
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Exams/Entrance Exam (EUEE)</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold">
            {exams.filter(e => (e.category || 'ENTRANCE') === 'ENTRANCE').length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('WORKSHEET');
            setSelectedSeries('all');
            setSelectedGrade('all');
            setSelectedSubject('all');
            setSelectedYear('all');
            setSelectedRegion('all');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'WORKSHEET'
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>Worksheets</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 font-mono font-bold border border-amber-800/60">
            {exams.filter(e => e.category === 'WORKSHEET' || e.exam_series?.toLowerCase().includes('worksheet')).length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('MODEL');
            setSelectedSeries('all');
            setSelectedGrade('all');
            setSelectedSubject('all');
            setSelectedYear('all');
            setSelectedRegion('all');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'MODEL'
              ? 'text-emerald-400 border-b-2 border-emerald-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileCheck className="w-4 h-4" />
          <span>Model Exams</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
            {exams.filter(e => (e.category === 'MODEL' || e.exam_series === 'Regional Model Examinations') && e.grade_id !== 'grade-9' && e.exam_series !== 'Grade 9 Exams' && e.grade_id !== 'grade-10' && e.exam_series !== 'Grade 10 Exams' && e.grade_id !== 'grade-11-natural' && e.exam_series !== 'Grade 11 Natural Science Exams').length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('GRADE_9');
            setSelectedSeries('Grade 9 Exams');
            setSelectedGrade('all');
            setSelectedSubject('all');
            setSelectedYear('all');
            setSelectedRegion('all');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'GRADE_9'
              ? 'text-cyan-400 border-b-2 border-cyan-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Grade 9 Exams</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
            {exams.filter(e => e.category === 'GRADE_9' || e.exam_series === 'Grade 9 Exams' || e.grade_id === 'grade-9').length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('GRADE_10');
            setSelectedSeries('Grade 10 Exams');
            setSelectedGrade('all');
            setSelectedSubject('all');
            setSelectedYear('all');
            setSelectedRegion('all');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'GRADE_10'
              ? 'text-teal-400 border-b-2 border-teal-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Grade 10 Exams</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
            {exams.filter(e => e.category === 'GRADE_10' || e.exam_series === 'Grade 10 Exams' || e.grade_id === 'grade-10').length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('GRADE_11_NATURAL');
            setSelectedSeries('Grade 11 Natural Science Exams');
            setSelectedGrade('all');
            setSelectedSubject('all');
            setSelectedYear('all');
            setSelectedRegion('all');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'GRADE_11_NATURAL'
              ? 'text-blue-400 border-b-2 border-blue-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Grade 11 Natural Exams</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
            {exams.filter(e => e.category === 'GRADE_11_NATURAL' || e.exam_series === 'Grade 11 Natural Science Exams' || e.grade_id === 'grade-11-natural').length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('COLLECTION');
            setSelectedSeries('Exam Collection');
            setSelectedGrade('all');
            setSelectedSubject('all');
            setSelectedYear('all');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'COLLECTION'
              ? 'text-violet-400 border-b-2 border-violet-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Exam Collection</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
            {exams.filter(e => e.category === 'COLLECTION' || e.exam_series === 'Exam Collection').length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('BY_CATEGORY');
          }}
          className={`pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap ${
            activeCategory === 'BY_CATEGORY'
              ? 'text-purple-400 border-b-2 border-purple-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>By Category</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 font-mono border border-purple-800/60">
            Instruction Sections
          </span>
        </button>

        {user?.role === 'admin' && (
          <button
            onClick={() => handleOpenUploadModal(activeCategory === 'MODEL' ? 'MODEL' : 'ENTRANCE')}
            className="pb-3 font-bold flex items-center gap-2 transition relative shrink-0 whitespace-nowrap text-amber-400 hover:text-amber-300 ml-auto border-b-2 border-transparent hover:border-amber-400"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Upload and Convert Exam with AI</span>
          </button>
        )}
      </div>

      {/* Entrance Exam AI Digitization Banner */}
      {user?.role === 'admin' && activeCategory === 'ENTRANCE' && (
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-white">
                Upload & Convert Any Entrance Exam with AI
              </h3>
            </div>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Upload official 2017/2018 E.C. national exam PDFs or paper photos. Our high-fidelity digitization pipeline extracts all questions, answer keys, reading passages, LaTeX science/math formulas, and generates step-by-step explanations.
            </p>
          </div>
          <button
            onClick={() => handleOpenUploadModal('ENTRANCE')}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 shadow-md shadow-amber-950/40"
          >
            <Upload className="w-4 h-4" />
            <span>Upload & Convert Exam with AI</span>
          </button>
        </div>
      )}

      {/* Content Area: By Category View OR Standard Filtered Exam Cards */}
      {activeCategory === 'BY_CATEGORY' ? (
        <div className="space-y-6">
          {/* Exam Selector and Overview Header */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Instruction-Based Structure</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Exam Sections Arranged by Instruction
                </h2>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                  Questions are categorized strictly according to official exam instructions (Dialogue, Reading Comprehension, Grammar & Structure, etc.), preserving original exam order with reading texts and AI explanations.
                </p>
              </div>

              {/* Selector for Exam & Replace Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
                  <span className="text-xs font-semibold text-slate-400 shrink-0">Exam Paper:</span>
                  <div className="relative w-full sm:w-auto">
                    <select
                      value={categorySelectedExam?.id || ''}
                      onChange={e => {
                        const id = e.target.value;
                        setCategorySelectedExamId(id);
                        fetchCategoryQuestions(id);
                      }}
                      className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 sm:py-2 text-xs text-slate-100 font-semibold focus:outline-none focus:border-purple-500 w-full sm:w-[320px] max-w-full truncate pr-7"
                    >
                      {exams.some(e => e.category === 'COLLECTION' || e.exam_series === 'Exam Collection') && (
                        <optgroup label="Exam Collection (All Grades - Natural & Social)">
                          {exams.filter(e => e.category === 'COLLECTION' || e.exam_series === 'Exam Collection').map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {exams.some(e => (e.exam_series === '2018 E.C. EUEE Natural Science Exams' || e.exam_series === '2018 E.C. EUEE Exams' || (e.title.includes('2018') && e.category === 'ENTRANCE')) && e.grade_id !== 'grade-12-social' && !e.title.includes('Social Science') && !e.title.includes('Geography') && !e.title.includes('History') && !e.title.includes('Civics') && !e.title.includes('Economics')) && (
                        <optgroup label="2018 E.C. EUEE Natural Science Exams">
                          {exams.filter(e => (e.exam_series === '2018 E.C. EUEE Natural Science Exams' || e.exam_series === '2018 E.C. EUEE Exams' || (e.title.includes('2018') && e.category === 'ENTRANCE')) && e.grade_id !== 'grade-12-social' && !e.title.includes('Social Science') && !e.title.includes('Geography') && !e.title.includes('History') && !e.title.includes('Civics') && !e.title.includes('Economics')).map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {exams.some(e => e.exam_series === '2018 E.C. EUEE Social Science Exams' || e.grade_id === 'grade-12-social' || (e.title.includes('2018') && (e.title.includes('Social Science') || e.title.includes('Geography') || e.title.includes('History') || e.title.includes('Civics') || e.title.includes('Economics')))) && (
                        <optgroup label="2018 E.C. EUEE Social Science Exams">
                          {exams.filter(e => e.exam_series === '2018 E.C. EUEE Social Science Exams' || e.grade_id === 'grade-12-social' || (e.title.includes('2018') && (e.title.includes('Social Science') || e.title.includes('Geography') || e.title.includes('History') || e.title.includes('Civics') || e.title.includes('Economics')))).map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {exams.some(e => e.exam_series === '2017 E.C. EUEE Exams' || e.title.includes('2017')) && (
                        <optgroup label="2017 E.C. National EUEE Exams">
                          {exams.filter(e => e.exam_series === '2017 E.C. EUEE Exams' || e.title.includes('2017')).map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {exams.some(e => (e.category === 'ENTRANCE' || !e.category) && e.grade_id !== 'grade-9' && (e.exam_series === '2016 E.C. EUEE Exams' || e.title.includes('2016') || e.year === 2016)) && (
                        <optgroup label="2016 E.C. EUEE Exams">
                          {exams.filter(e => (e.category === 'ENTRANCE' || !e.category) && e.grade_id !== 'grade-9' && (e.exam_series === '2016 E.C. EUEE Exams' || e.title.includes('2016') || e.year === 2016)).map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {exams.some(e => e.category === 'GRADE_9' || e.exam_series === 'Grade 9 Exams' || e.grade_id === 'grade-9') && (
                        <optgroup label="Grade 9 Exams">
                          {exams.filter(e => e.category === 'GRADE_9' || e.exam_series === 'Grade 9 Exams' || e.grade_id === 'grade-9').map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {exams.some(e => e.category === 'GRADE_10' || e.exam_series === 'Grade 10 Exams' || e.grade_id === 'grade-10') && (
                        <optgroup label="Grade 10 Exams">
                          {exams.filter(e => e.category === 'GRADE_10' || e.exam_series === 'Grade 10 Exams' || e.grade_id === 'grade-10').map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {exams.some(e => e.category === 'GRADE_11_NATURAL' || e.exam_series === 'Grade 11 Natural Science Exams' || e.grade_id === 'grade-11-natural') && (
                        <optgroup label="Grade 11 Natural Science Exams">
                          {exams.filter(e => e.category === 'GRADE_11_NATURAL' || e.exam_series === 'Grade 11 Natural Science Exams' || e.grade_id === 'grade-11-natural').map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {exams.some(e => !e.title.includes('2018') && !e.title.includes('2017') && !e.title.includes('2016') && e.year !== 2016 && e.exam_series !== '2018 E.C. EUEE Exams' && e.exam_series !== '2018 E.C. EUEE Natural Science Exams' && e.exam_series !== '2018 E.C. EUEE Social Science Exams' && e.exam_series !== '2017 E.C. EUEE Exams' && e.exam_series !== '2016 E.C. EUEE Exams' && e.category !== 'GRADE_9' && e.exam_series !== 'Grade 9 Exams' && e.grade_id !== 'grade-9' && e.category !== 'GRADE_10' && e.exam_series !== 'Grade 10 Exams' && e.grade_id !== 'grade-10' && e.category !== 'GRADE_11_NATURAL' && e.exam_series !== 'Grade 11 Natural Science Exams' && e.grade_id !== 'grade-11-natural') && (
                        <optgroup label="Regional Model & Other Exams">
                          {exams.filter(e => !e.title.includes('2018') && !e.title.includes('2017') && !e.title.includes('2016') && e.year !== 2016 && e.exam_series !== '2018 E.C. EUEE Exams' && e.exam_series !== '2018 E.C. EUEE Natural Science Exams' && e.exam_series !== '2018 E.C. EUEE Social Science Exams' && e.exam_series !== '2017 E.C. EUEE Exams' && e.exam_series !== '2016 E.C. EUEE Exams' && e.category !== 'GRADE_9' && e.exam_series !== 'Grade 9 Exams' && e.grade_id !== 'grade-9' && e.category !== 'GRADE_10' && e.exam_series !== 'Grade 10 Exams' && e.grade_id !== 'grade-10' && e.category !== 'GRADE_11_NATURAL' && e.exam_series !== 'Grade 11 Natural Science Exams' && e.grade_id !== 'grade-11-natural').map(ex => (
                            <option key={ex.id} value={ex.id}>
                              {cleanExamTitle(ex.title)}
                            </option>
                          ))}
                        </optgroup>
                      )}
                    </select>
                  </div>
                </div>

                {categorySelectedExam && (
                  <button
                    onClick={() => handleOpenReplaceModal(categorySelectedExam)}
                    className="w-full sm:w-auto px-3.5 py-2.5 sm:py-2 bg-purple-950/90 hover:bg-purple-900 border border-purple-700/70 text-purple-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Replace / Re-extract ({getExamExpectedCount(categorySelectedExam)} Qs)</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick Series & Subject Switcher for 2018, 2017 & 2016 */}
            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <span className="text-xs font-semibold text-slate-400 whitespace-nowrap mr-1">Select Series:</span>
                <button
                  onClick={() => {
                    setCategoryYearFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                    categoryYearFilter === 'all'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  All Series ({exams.length})
                </button>
                <button
                  onClick={() => {
                    setCategoryYearFilter('2018-natural');
                    const first2018Nat = exams.find(e => (e.exam_series === '2018 E.C. EUEE Natural Science Exams' || e.exam_series === '2018 E.C. EUEE Exams' || (e.title.includes('2018') && e.category === 'ENTRANCE')) && e.grade_id !== 'grade-12-social' && !e.title.includes('Social Science') && !e.title.includes('Geography') && !e.title.includes('History') && !e.title.includes('Civics') && !e.title.includes('Economics'));
                    if (first2018Nat) {
                      setCategorySelectedExamId(first2018Nat.id);
                      fetchCategoryQuestions(first2018Nat.id);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                    categoryYearFilter === '2018-natural' || categoryYearFilter === '2018'
                      ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>2018 Natural ({exams.filter(e => (e.exam_series === '2018 E.C. EUEE Natural Science Exams' || e.exam_series === '2018 E.C. EUEE Exams' || (e.title.includes('2018') && e.category === 'ENTRANCE')) && e.grade_id !== 'grade-12-social' && !e.title.includes('Social Science') && !e.title.includes('Geography') && !e.title.includes('History') && !e.title.includes('Civics') && !e.title.includes('Economics')).length})</span>
                </button>
                <button
                  onClick={() => {
                    setCategoryYearFilter('2018-social');
                    const first2018Soc = exams.find(e => e.exam_series === '2018 E.C. EUEE Social Science Exams' || e.grade_id === 'grade-12-social' || (e.title.includes('2018') && (e.title.includes('Social Science') || e.title.includes('Geography') || e.title.includes('History') || e.title.includes('Civics') || e.title.includes('Economics'))));
                    if (first2018Soc) {
                      setCategorySelectedExamId(first2018Soc.id);
                      fetchCategoryQuestions(first2018Soc.id);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                    categoryYearFilter === '2018-social'
                      ? 'bg-rose-500 text-white shadow-sm font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                  <span>2018 Social ({exams.filter(e => e.exam_series === '2018 E.C. EUEE Social Science Exams' || e.grade_id === 'grade-12-social' || (e.title.includes('2018') && (e.title.includes('Social Science') || e.title.includes('Geography') || e.title.includes('History') || e.title.includes('Civics') || e.title.includes('Economics')))).length})</span>
                </button>
                <button
                  onClick={() => {
                    setCategoryYearFilter('2017');
                    const first2017 = exams.find(e => e.exam_series === '2017 E.C. EUEE Exams' || e.title.includes('2017'));
                    if (first2017) {
                      setCategorySelectedExamId(first2017.id);
                      fetchCategoryQuestions(first2017.id);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                    categoryYearFilter === '2017'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  <span>2017 E.C. Exams ({exams.filter(e => e.exam_series === '2017 E.C. EUEE Exams' || e.title.includes('2017')).length} Papers)</span>
                </button>
                <button
                  onClick={() => {
                    setCategoryYearFilter('2016');
                    const first2016 = exams.find(e => (e.category === 'ENTRANCE' || !e.category) && e.grade_id !== 'grade-9' && (e.exam_series === '2016 E.C. EUEE Exams' || e.title.includes('2016') || e.year === 2016));
                    if (first2016) {
                      setCategorySelectedExamId(first2016.id);
                      fetchCategoryQuestions(first2016.id);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                    categoryYearFilter === '2016'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>2016 E.C. Exams ({exams.filter(e => (e.category === 'ENTRANCE' || !e.category) && e.grade_id !== 'grade-9' && (e.exam_series === '2016 E.C. EUEE Exams' || e.title.includes('2016') || e.year === 2016)).length} Paper{exams.filter(e => (e.category === 'ENTRANCE' || !e.category) && e.grade_id !== 'grade-9' && (e.exam_series === '2016 E.C. EUEE Exams' || e.title.includes('2016') || e.year === 2016)).length === 1 ? '' : 's'})</span>
                </button>
              </div>

              {/* Quick Paper Chips within filtered series */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <span className="text-xs font-semibold text-slate-400 whitespace-nowrap mr-1">Papers:</span>
                {exams
                  .filter(e => {
                    if (categoryYearFilter === '2018-natural') return (e.exam_series === '2018 E.C. EUEE Natural Science Exams' || e.exam_series === '2018 E.C. EUEE Exams' || (e.title.includes('2018') && e.category === 'ENTRANCE')) && e.grade_id !== 'grade-12-social' && !e.title.includes('Social Science') && !e.title.includes('Geography') && !e.title.includes('History') && !e.title.includes('Civics') && !e.title.includes('Economics');
                    if (categoryYearFilter === '2018-social') return e.exam_series === '2018 E.C. EUEE Social Science Exams' || e.grade_id === 'grade-12-social' || (e.title.includes('2018') && (e.title.includes('Social Science') || e.title.includes('Geography') || e.title.includes('History') || e.title.includes('Civics') || e.title.includes('Economics')));
                    if (categoryYearFilter === '2018') return e.year === 2018 || e.ethiopian_year === '2018 E.C.' || e.title.includes('2018');
                    if (categoryYearFilter === '2017') return e.exam_series === '2017 E.C. EUEE Exams' || e.title.includes('2017');
                    if (categoryYearFilter === '2016') return (e.category === 'ENTRANCE' || !e.category) && e.grade_id !== 'grade-9' && (e.exam_series === '2016 E.C. EUEE Exams' || e.title.includes('2016') || e.year === 2016);
                    return true;
                  })
                  .map(ex => {
                    const isSelected = (categorySelectedExam?.id === ex.id);
                    return (
                      <button
                        key={ex.id}
                        onClick={() => {
                          setCategorySelectedExamId(ex.id);
                          fetchCategoryQuestions(ex.id);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap flex items-center gap-1.5 border ${
                          isSelected
                            ? 'bg-purple-900/80 text-white border-purple-500 shadow-sm font-bold'
                            : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-700'
                        }`}
                      >
                        <span>{ex.subject_name || cleanExamTitle(ex.title)}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isSelected ? 'bg-purple-800 text-purple-200' : 'bg-slate-900 text-slate-400'}`}>
                          {ex.total_questions} Qs
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Quick summary strip */}
            {categorySelectedExam && (
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 text-purple-300 border border-purple-800/60 font-bold">
                    {categorySelectedExam.exam_series || 'National EUEE Exams'}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span>Total Questions: <strong className="text-white font-mono">{categoryQuestions.length}</strong></span>
                  <span className="text-slate-500">•</span>
                  <span>Curriculum Topics: <strong className="text-purple-300 font-mono">{groupedCategories.length}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('exam-timed', { examId: categorySelectedExam.id })}
                    className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition flex items-center gap-1.5 text-xs shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Take Full Timed Exam</span>
                  </button>
                  <button
                    onClick={() => onNavigate('exam-practice', { examId: categorySelectedExam.id })}
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl transition flex items-center gap-1.5 text-xs"
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Practice All (Untimed)</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Category Loading */}
          {categoryLoading && (
            <div className="text-center py-16 text-slate-400">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs font-semibold">Loading questions grouped by syllabus topic & grade level...</p>
            </div>
          )}

          {/* Empty questions notification */}
          {!categoryLoading && groupedCategories.length === 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-purple-400 mx-auto" />
              <h3 className="text-sm font-bold text-white">No instruction categories loaded yet</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Use the Replace / Re-extract button to ingest all questions from the PDF paper with instructions and reading texts.
              </p>
              {categorySelectedExam && (
                <button
                  onClick={() => handleOpenReplaceModal(categorySelectedExam)}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Re-extract Questions Now</span>
                </button>
              )}
            </div>
          )}

          {/* Grouped Instruction Categories */}
          {!categoryLoading && (
            <div className="space-y-6">
              {groupedCategories.map((group, groupIndex) => {
                const isExpanded = expandedCategory === group.categoryName;
                const hasPassages = group.readingPassages.length > 0;

                return (
                  <div
                    key={group.categoryName}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6 transition hover:border-slate-700/80 space-y-4"
                  >
                    {/* Category Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-purple-950/80 border border-purple-800/60 text-purple-300 font-bold text-xs flex items-center justify-center shrink-0">
                          {groupIndex + 1}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-white">
                              {group.categoryName}
                            </h3>
                            {group.gradeInfo && (
                              <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 border shadow-xs ${group.gradeInfo.badgeBg} ${group.gradeInfo.badgeColor} ${group.gradeInfo.badgeBorder}`}>
                                <GraduationCap className="w-3.5 h-3.5" />
                                <span>{group.gradeInfo.gradeLabel}</span>
                              </span>
                            )}
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                              {group.questions.length} Question{group.questions.length === 1 ? '' : 's'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                            <span>
                              {group.questions.length === 1
                                ? `Question ${group.questions[0]?.question_number}`
                                : group.questions[group.questions.length - 1]?.question_number - group.questions[0]?.question_number === group.questions.length - 1
                                ? `Questions ${group.questions[0]?.question_number} – ${group.questions[group.questions.length - 1]?.question_number}`
                                : `Questions: ${group.questions.map(q => q.question_number).join(', ')}`}
                            </span>
                            {group.gradeInfo?.unitLabel && (
                              <>
                                <span className="text-slate-600">•</span>
                                <span className="text-indigo-300/80 font-medium">{group.gradeInfo.unitLabel}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Practice this specific section */}
                        <button
                          onClick={() => {
                            if (categorySelectedExam) {
                              onNavigate('exam-practice', {
                                examId: categorySelectedExam.id,
                                categoryName: group.categoryName,
                                questionIds: group.questions.map(q => q.id),
                                initialQuestionId: group.questions[0]?.id
                              });
                            }
                          }}
                          className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
                        >
                          <Play className="w-3 h-3 fill-indigo-300" />
                          <span>Practice Topic</span>
                        </button>

                        {/* Expand / Collapse */}
                        <button
                          onClick={() => setExpandedCategory(isExpanded ? null : group.categoryName)}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
                        >
                          <span>{isExpanded ? 'Hide Questions' : 'View Questions'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* Official Direction / Section Instruction */}
                    {group.instruction && (
                      <div className="p-3.5 bg-amber-950/25 border border-amber-800/40 rounded-2xl text-xs text-amber-200/90 leading-relaxed font-medium">
                        <span className="font-bold text-amber-400 uppercase tracking-wide mr-1.5">
                          Official Direction:
                        </span>
                        {group.instruction}
                      </div>
                    )}

                    {/* Reading Passages if applicable */}
                    {hasPassages && (
                      <div className="space-y-3 pt-1">
                        {group.readingPassages.map((p, pIdx) => {
                          const pKey = `${group.categoryName}-p-${pIdx}`;
                          const isPassageOpen = expandedPassage === pKey || group.readingPassages.length === 1;

                          return (
                            <div
                              key={pIdx}
                              className="p-4 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                                  <BookOpen className="w-4 h-4" />
                                  <span>{p.title || `Reading Passage ${pIdx + 1}`}</span>
                                </div>
                                <button
                                  onClick={() => setExpandedPassage(isPassageOpen ? null : pKey)}
                                  className="text-[11px] text-slate-400 hover:text-slate-200 transition"
                                >
                                  {isPassageOpen ? 'Collapse Passage' : 'Expand Passage'}
                                </button>
                              </div>
                              {isPassageOpen && (
                                <div className="text-xs text-slate-300 leading-relaxed max-h-80 overflow-y-auto whitespace-pre-line pr-2 border-t border-slate-800/80 pt-2 font-serif">
                                  {p.text}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Expanded Questions List */}
                    {isExpanded && (
                      <div className="space-y-4 pt-3 border-t border-slate-800/80">
                        {group.questions.map(q => (
                          <div
                            key={q.id}
                            className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-3"
                          >
                            <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-amber-400 uppercase tracking-wider">
                                  Question {q.question_number}
                                </span>
                                {group.gradeInfo && (
                                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${group.gradeInfo.badgeBg} ${group.gradeInfo.badgeColor} ${group.gradeInfo.badgeBorder}`}>
                                    {group.gradeInfo.gradeLabel}
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                                Answer Key: {q.correct_answer}
                              </span>
                            </div>

                            <div className="text-sm font-medium text-slate-200 leading-relaxed">
                              <FormattedQuestionText text={q.question_text} />
                            </div>

                            {/* Official Question Diagram or Vector Graphic if present */}
                            {(q.diagram_svg || q.question_image_path) && (
                              <QuestionDiagramViewer
                                diagramSvg={q.diagram_svg}
                                imagePath={q.question_image_path}
                                caption={q.diagram_caption}
                                questionNumber={q.question_number}
                              />
                            )}

                            {/* Options */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {[
                                { opt: 'A', text: q.option_a },
                                { opt: 'B', text: q.option_b },
                                { opt: 'C', text: q.option_c },
                                { opt: 'D', text: q.option_d },
                                ...(q.option_e ? [{ opt: 'E', text: q.option_e }] : [])
                              ].filter(item => Boolean(item.text)).map(item => {
                                const isCorrect = item.opt === q.correct_answer;
                                return (
                                  <div
                                    key={item.opt}
                                    className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 ${
                                      isCorrect
                                        ? 'bg-emerald-950/60 border-emerald-700/80 text-emerald-200 font-semibold'
                                        : 'bg-slate-900/60 border-slate-800 text-slate-300'
                                    }`}
                                  >
                                    <span
                                      className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                        isCorrect
                                          ? 'bg-emerald-600 text-white'
                                          : 'bg-slate-800 text-slate-400'
                                      }`}
                                    >
                                      {item.opt}
                                    </span>
                                    <span className="leading-snug min-w-0 flex-1 break-words [overflow-wrap:anywhere]">{renderRichInline(item.text || '')}</span>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Pedagogical AI Explanation from Answer Key */}
                            <div className="pt-2 border-t border-slate-800/80">
                              <div className="p-3 bg-indigo-950/30 rounded-xl border border-indigo-900/40 space-y-1 max-w-full overflow-hidden">
                                <div className="text-[11px] font-bold text-indigo-300 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                                  <span>Official Explanation & Derivation:</span>
                                </div>
                                <div className="text-xs text-slate-300 leading-relaxed break-words [overflow-wrap:anywhere] whitespace-pre-line max-w-full overflow-hidden">
                                  {renderRichInline(q.explanation || '')}
                                </div>
                              </div>
                            </div>

                            {/* Feedback button */}
                            <div className="pt-2 flex items-center justify-between">
                              <button
                                type="button"
                                onClick={() => {
                                  setFeedbackQuestion({
                                    id: q.id,
                                    question_number: q.question_number,
                                    question_text: q.question_text,
                                    correct_answer: q.correct_answer
                                  });
                                  setFeedbackExamInfo(
                                    categorySelectedExam
                                      ? { id: categorySelectedExam.id, title: categorySelectedExam.title }
                                      : null
                                  );
                                  setShowFeedbackModal(true);
                                }}
                                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition font-medium hover:underline py-1"
                              >
                                <MessageSquarePlus className="w-3.5 h-3.5" />
                                <span>Have a correction or feedback about this question? Leave feedback</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Search & Filter Bar */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-3 shadow-sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Instant Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search exams by title, subject, series, or year (e.g. 2018 Chemistry, Physics, SAT)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-9 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Clear All Filters Button */}
          {(searchQuery || selectedSubject !== 'all' || selectedGrade !== 'all' || selectedYear !== 'all' || selectedRegion !== 'all' || selectedSeries !== 'all' || activeCategory !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubject('all');
                setSelectedGrade('all');
                setSelectedYear('all');
                setSelectedRegion('all');
                setSelectedSeries('all');
                setActiveCategory('ALL');
              }}
              className="px-3 py-2 bg-slate-700/80 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition shrink-0"
              title="Reset all search and category filters"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-700/60">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-xs font-semibold text-slate-400 mr-1 whitespace-nowrap">Subject:</span>
            <button
              onClick={() => setSelectedSubject('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                selectedSubject === 'all'
                  ? activeCategory === 'MODEL' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              All Subjects
            </button>
            {filteredSubjects.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSubject(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                  selectedSubject === s.id
                    ? activeCategory === 'MODEL' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Grade Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">Grade:</span>
              <select
                value={selectedGrade}
                onChange={e => setSelectedGrade(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <option value="all">All Grades</option>
                <option value="grade-12-natural">Grade 12 Natural Science</option>
                <option value="grade-12-social">Grade 12 Social Science</option>
                <option value="grade-11-natural">Grade 11 Natural Science</option>
                <option value="grade-11-social">Grade 11 Social Science</option>
                <option value="grade-10">Grade 10</option>
                <option value="grade-9">Grade 9</option>
              </select>
            </div>

            {/* Region filter for Model Exams */}
            {activeCategory === 'MODEL' && availableRegions.length > 0 && (
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">Region:</span>
                <select
                  value={selectedRegion}
                  onChange={e => setSelectedRegion(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                >
                  <option value="all">All Regions</option>
                  {availableRegions.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Year Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400">Year:</span>
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Years</option>
                <option value="2018">2018 E.C.</option>
                <option value="2017">2017 E.C.</option>
                <option value="2016">2016 E.C.</option>
                <option value="2014">2014 E.C.</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-16 text-slate-400">
          <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs">Loading {activeCategory === 'MODEL' ? 'Model' : 'Entrance'} Examinations...</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && filteredExams.length === 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
          <FileCheck className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-white">
            {activeCategory === 'MODEL' ? 'No Model Exams Published Yet' : 'No exams found for current filters'}
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            {activeCategory === 'MODEL'
              ? 'Official and regional model examination papers will appear here once uploaded and processed by the administrator.'
              : 'Try changing your subject or series filters above to browse other examination papers.'}
          </p>
          {user?.role === 'admin' && (
            <button
              onClick={() => handleOpenUploadModal(activeCategory === 'MODEL' ? 'MODEL' : 'ENTRANCE')}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Upload & Digitize Exam Paper Now</span>
            </button>
          )}
        </div>
      )}

      {/* Grade 9-11 Curriculum Note Banner */}
      {!loading && filteredExams.length > 0 && user?.grade && !user.grade.includes('12') && (
        <div className="p-3.5 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl flex items-center gap-2 text-xs text-indigo-300">
          <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>
            <strong>Curriculum Note for {user.grade}:</strong> EUEE national entrance exams test cumulative high school knowledge from Grade 9 to Grade 12. You can solve all questions covering your grade topics.
          </span>
        </div>
      )}

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map(exam => {
          const isStudentPaid = Boolean(
            user?.is_premium ||
            user?.role === 'admin' ||
            (user?.unlocked_grades && user.unlocked_grades.length > 0)
          );
          const isFree = Boolean(exam.is_free_preview || exam.grade_id === 'grade-all' || exam.grade_id === 'all');
          const canAccess = isFree || user?.role === 'admin' || user?.is_premium || (exam.grade_id ? hasGradeAccess(exam.grade_id, exam.subject_id, 'exam') : true);
          const isModel = exam.category === 'MODEL';

          return (
            <div
              key={exam.id}
              className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-slate-600 transition group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        exam.source_type === 'USER_UPLOADED'
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 font-bold'
                          : exam.exam_series?.includes('2018') || exam.title.includes('2018')
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-extrabold'
                          : isModel
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                      }`}
                    >
                      {exam.exam_series || (isModel ? (exam.model_region ? `${exam.model_region} Model` : 'Regional Model Exam') : `${exam.ethiopian_year || exam.year} National EUEE`)}
                    </span>
                    {exam.ethiopian_year && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-amber-400">
                        {exam.ethiopian_year}
                      </span>
                    )}
                    {/* Authentic Offline Availability Badge */}
                    {offlineExamIds.includes(exam.id) ? (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Offline Ready</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-700/60 flex items-center gap-1">
                        <Cloud className="w-2.5 h-2.5 text-slate-500" />
                        <span>Online</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {exam.duration_minutes} Mins
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  {exam.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2">
                  {exam.description}
                </p>

                <div className="mt-4 py-2 px-3 bg-slate-900/90 border border-slate-700/60 rounded-xl flex items-center justify-between text-xs text-slate-400">
                  <span>Total Questions: <strong className="text-white">{exam.total_questions}</strong></span>
                  <span>Passing Mark: <strong className="text-emerald-400">50%</strong></span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-col gap-2">
                {canAccess ? (
                  <>
                    <button
                      onClick={() => onNavigate('exam-timed', { examId: exam.id })}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm ${
                        isModel
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                          : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-slate-950" />
                      <span>Take Full Exam (Timed Mode)</span>
                    </button>

                    <button
                      onClick={() => onNavigate('exam-practice', { examId: exam.id })}
                      className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2"
                    >
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Practice (Untimed • Instant Feedback)</span>
                    </button>

                    <button
                      onClick={() => handleOpenInspectQuestions(exam)}
                      className="w-full py-1.5 text-xs text-slate-400 hover:text-slate-200 transition flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Questions & AI Explanations</span>
                    </button>

                    {/* Offline Toggle Button */}
                    <div className="pt-1">
                      {offlineExamIds.includes(exam.id) ? (
                        <button
                          onClick={(e) => handleRemoveOfflineExam(exam.id, e)}
                          title="Saved offline on device. Click to remove."
                          className="w-full py-1.5 px-3 bg-emerald-950/40 hover:bg-red-950/40 border border-emerald-700/50 hover:border-red-700/50 rounded-xl text-[11px] font-semibold text-emerald-300 hover:text-red-300 transition flex items-center justify-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Saved Offline (Tap to Remove)</span>
                        </button>
                      ) : (
                        <button
                          onClick={(e) => handleSaveExamOffline(exam, e)}
                          disabled={savingExamId === exam.id}
                          title="Save exam questions and AI explanations to device for offline study"
                          className="w-full py-1.5 px-3 bg-slate-900 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500/50 rounded-xl text-[11px] font-semibold text-slate-200 hover:text-white transition flex items-center justify-center gap-1.5"
                        >
                          {savingExamId === exam.id ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                              <span>Saving to Device...</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5 text-indigo-400" />
                              <span>Save for Offline Study</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Replace / Re-extract Button directly under every exam */}
                    <button
                      onClick={() => handleOpenReplaceModal(exam)}
                      className="w-full py-1.5 text-xs text-purple-300 hover:text-purple-100 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 rounded-xl transition flex items-center justify-center gap-1.5 font-medium shadow-sm"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                      <span>Replace / Re-extract ({getExamExpectedCount(exam)} Questions)</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        const isStudentPaid = Boolean(
                          user?.is_premium ||
                          (user?.unlocked_grades && user.unlocked_grades.length > 0)
                        );
                        if (isStudentPaid) {
                          onNavigate('payment', { upgrade: true });
                        } else {
                          onNavigate('payment', { targetGrade: exam.grade_id });
                        }
                      }}
                      className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow"
                    >
                      <Lock className="w-4 h-4" />
                      <span>
                        {user?.is_premium || (user?.unlocked_grades && user.unlocked_grades.length > 0)
                          ? 'Unlock (100 ETB)'
                          : 'Unlock (200 ETB)'}
                      </span>
                    </button>

                    {/* Replace / Re-extract Button directly under every exam */}
                    <button
                      onClick={() => handleOpenReplaceModal(exam)}
                      className="w-full py-1.5 text-xs text-purple-300 hover:text-purple-100 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 rounded-xl transition flex items-center justify-center gap-1.5 font-medium shadow-sm"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                      <span>Replace / Re-extract ({getExamExpectedCount(exam)} Questions)</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  )}

  {/* MODAL: UPLOAD & DIGITIZE EXAM WITH AI */}
      {isUploadOpen && user?.role === 'admin' && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col p-5 sm:p-7 shadow-2xl relative overflow-hidden">
            {/* Header (Always Visible at Top) */}
            <div className="flex items-start justify-between pb-3 border-b border-slate-800 shrink-0">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Exam Paper Digitizer & Ingestion</span>
                </div>
                <h2 className="text-xl font-extrabold text-white">Upload & Extract Exam with AI</h2>
                <p className="text-xs text-slate-400">
                  Categorize your exam, upload PDF diagrams, and paste LaTeX text & tables.
                </p>
              </div>
              <button
                onClick={() => {
                  if (!uploading) setIsUploadOpen(false);
                }}
                disabled={uploading}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {uploadResult ? (
              /* Success State */
              <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-2xl p-6 text-center space-y-4 my-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Exam Digitized Successfully!</h3>
                  <p className="text-xs text-emerald-300 mt-1">
                    Extracted <strong>{uploadResult.count} interactive questions</strong> with step-by-step AI explanations for <em>{uploadResult.examTitle}</em>.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                  <button
                    onClick={() => {
                      setIsUploadOpen(false);
                    }}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>View in Saved Exams List</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsUploadOpen(false);
                      onNavigate('exam-practice', { examId: uploadResult.examId });
                    }}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold transition"
                  >
                    Start Practice Mode
                  </button>
                  <button
                    onClick={() => {
                      setIsUploadOpen(false);
                      onNavigate('exam-timed', { examId: uploadResult.examId });
                    }}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
                  >
                    Take Timed Exam
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleUploadAndDigitize} className="flex flex-col flex-1 overflow-hidden">
                {/* Scrollable Form Body */}
                <div className="overflow-y-auto pr-1.5 sm:pr-2 space-y-4 pt-3 flex-1">
                  {/* 1. Category & Series Selection (Top and High Visibility) */}
                  <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" />
                        <span>1. Exam Category & Series Choice</span>
                      </label>
                      <span className="text-[10px] text-slate-400">Step 1 of 3</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setUploadCategory('ENTRANCE');
                          setUploadSeriesChoice('2018 E.C. EUEE Exams');
                          setUploadTitle('2018 E.C. Ethiopian University Entrance Examination');
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${
                          uploadCategory === 'ENTRANCE'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500 shadow-sm'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <Award className="w-4 h-4 text-amber-400" />
                        <span>Entrance Exam</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setUploadCategory('MODEL');
                          setUploadSeriesChoice('Regional Model Examinations');
                          setUploadTitle('2018 E.C. Regional Model Examination');
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${
                          uploadCategory === 'MODEL'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 shadow-sm'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <FileCheck className="w-4 h-4 text-emerald-400" />
                        <span>Model Exam</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setUploadCategory('WORKSHEET');
                          setUploadSeriesChoice('Worksheets & Special Boarding Papers');
                          setUploadTitle('2016 E.C. Special Boarding Worksheet');
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${
                          uploadCategory === 'WORKSHEET'
                            ? 'bg-orange-500/20 text-orange-300 border-orange-500 shadow-sm'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <BookOpen className="w-4 h-4 text-orange-400" />
                        <span>Worksheets</span>
                      </button>
                    </div>

                    {/* Category Series Grouping */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Category Series <span className="text-amber-400 font-normal">(Exams will be grouped together under this category)</span>
                      </label>
                      <select
                        value={uploadSeriesChoice}
                        onChange={e => setUploadSeriesChoice(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-amber-500"
                      >
                        <option value="2018 E.C. EUEE Exams">2018 E.C. EUEE Exams (All 2018 national papers grouped together)</option>
                        <option value="2017 E.C. EUEE Exams">2017 E.C. EUEE Exams (2025 G.C.)</option>
                        <option value="2016 E.C. EUEE Exams">2016 E.C. EUEE Exams (2024 G.C.)</option>
                        <option value="2015 E.C. EUEE Exams">2015 E.C. EUEE Exams (2023 G.C.)</option>
                        <option value="Regional Model Examinations">Regional Model Examinations</option>
                        <option value="CUSTOM">+ Create Custom Category Series...</option>
                      </select>

                      {uploadSeriesChoice === 'CUSTOM' && (
                        <input
                          type="text"
                          required
                          value={customSeriesName}
                          onChange={e => setCustomSeriesName(e.target.value)}
                          placeholder="Enter custom category (e.g. 2018 E.C. Addis Ababa Model Exams)"
                          className="mt-2 w-full bg-slate-900 border border-amber-600/60 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none"
                        />
                      )}
                    </div>
                  </div>

                  {/* 2. Exam Metadata */}
                  <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-indigo-400" />
                      <span>2. Exam Information</span>
                    </label>

                    {/* Exam Title */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Exam Title</label>
                      <input
                        type="text"
                        required
                        value={uploadTitle}
                        onChange={e => setUploadTitle(e.target.value)}
                        placeholder="e.g. 2018 E.C. Ethiopian University Entrance Examination - Mathematics"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Subject & Grade */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                        <select
                          value={uploadSubjectId}
                          onChange={e => setUploadSubjectId(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                        >
                          {subjects.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Grade Level</label>
                        <select
                          value={uploadGradeId}
                          onChange={e => setUploadGradeId(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                        >
                          <option value="grade-12-natural">Grade 12 - Natural Science (EUEE)</option>
                          <option value="grade-12-social">Grade 12 - Social Science (EUEE)</option>
                          <option value="grade-11-natural">Grade 11 - Natural Science</option>
                          <option value="grade-11-social">Grade 11 - Social Science</option>
                          <option value="grade-10">Grade 10</option>
                          <option value="grade-9">Grade 9</option>
                        </select>
                      </div>
                    </div>

                    {/* Ethiopian Year & Region (if Model) */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Ethiopian Year</label>
                        <select
                          value={uploadYear}
                          onChange={e => setUploadYear(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                        >
                          <option value="2018">2018 E.C.</option>
                          <option value="2017">2017 E.C.</option>
                          <option value="2016">2016 E.C.</option>
                          <option value="2015">2015 E.C.</option>
                          <option value="2014">2014 E.C.</option>
                        </select>
                      </div>

                      {uploadCategory === 'MODEL' ? (
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Bureau / Region</label>
                          <input
                            type="text"
                            value={uploadRegion}
                            onChange={e => setUploadRegion(e.target.value)}
                            placeholder="e.g. Addis Ababa, Oromia, Amhara"
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      ) : (
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Duration (Minutes)</label>
                          <input
                            type="number"
                            value={uploadDuration}
                            onChange={e => setUploadDuration(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. Input Mode Selector & Content Box */}
                  <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>3. Content Ingestion (LaTeX & PDF)</span>
                      </label>
                      <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-700 gap-1 flex-wrap">
                        <button
                          type="button"
                          onClick={() => setUploadMode('dual')}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                            uploadMode === 'dual'
                              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>LaTeX + PDF (Dual)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setUploadMode('text')}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                            uploadMode === 'text'
                              ? 'bg-amber-500 text-slate-950 font-bold shadow'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>LaTeX / Text Only</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setUploadMode('file')}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                            uploadMode === 'file'
                              ? 'bg-amber-500 text-slate-950 font-bold shadow'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>PDF Only</span>
                        </button>
                      </div>
                    </div>

                    {/* DUAL MODE: Paste LaTeX directly in the box + Attach PDF for diagrams */}
                    {uploadMode === 'dual' && (
                      <div className="space-y-3">
                        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 leading-relaxed flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-amber-300">Dual Precision Pipeline:</strong> Paste your <strong>LaTeX text</strong> into the box below (constructs mathematical formulas & tables) and upload the <strong>PDF file</strong> (cuts out diagrams & charts directly from the original paper).
                          </div>
                        </div>

                        {/* PDF File Picker (For Diagrams) */}
                        <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/80 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                              <Upload className="w-3.5 h-3.5 text-amber-400" />
                              <span>1. Exam PDF File (For Diagrams & Cutouts)</span>
                            </span>
                            <span className="text-[10px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono">
                              Diagrams
                            </span>
                          </div>
                          <label
                            htmlFor="dual-pdf-input"
                            className="border-2 border-dashed border-slate-700 hover:border-amber-500/80 rounded-xl p-3 flex items-center justify-between cursor-pointer transition bg-slate-950/60"
                          >
                            <input
                              id="dual-pdf-input"
                              type="file"
                              accept=".pdf,image/png,image/jpeg,image/jpg,image/webp"
                              onChange={e => {
                                if (e.target.files && e.target.files[0]) {
                                  setUploadFile(e.target.files[0]);
                                  if (!uploadTitle) {
                                    setUploadTitle(e.target.files[0].name.replace(/\.[^/.]+$/, ''));
                                  }
                                }
                              }}
                              className="hidden"
                            />
                            {uploadFile ? (
                              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                                <FileText className="w-4 h-4 text-emerald-400" />
                                <span className="line-clamp-1">{uploadFile.name} ({(uploadFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 text-xs text-slate-400">
                                <Upload className="w-4 h-4 text-slate-400" />
                                <span>Click to select PDF document for diagram cutouts</span>
                              </div>
                            )}
                            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded font-mono">
                              {uploadFile ? 'Change File' : 'Browse PDF'}
                            </span>
                          </label>
                        </div>

                        {/* LaTeX Direct Paste Box */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-indigo-400" />
                              <span>2. LaTeX Text Box (Directly Paste LaTeX / Questions / Tables Here):</span>
                            </label>
                            {uploadText.length > 0 && (
                              <span className="text-[10px] text-emerald-400 font-mono">
                                {uploadText.length} characters
                              </span>
                            )}
                          </div>
                          <textarea
                            rows={7}
                            value={uploadText}
                            onChange={e => setUploadText(e.target.value)}
                            placeholder="Directly paste your LaTeX code or text form here (e.g. \begin{tabular} tables, mathematical equations $...$, choices A-D, answer keys, and step-by-step explanations)..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-y leading-relaxed"
                          />
                          <div className="flex items-center justify-between pt-0.5">
                            <span className="text-[10px] text-slate-400">
                              Tables (\begin&#123;tabular&#125;) and math formulas ($...$) are automatically rendered.
                            </span>
                            <label className="text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer underline flex items-center gap-1 font-medium">
                              <input
                                type="file"
                                accept=".tex,.txt,.latex"
                                onChange={e => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    setUploadLatexFile(file);
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                      if (typeof reader.result === 'string') {
                                        setUploadText(reader.result);
                                      }
                                    };
                                    reader.readAsText(file);
                                  }
                                }}
                                className="hidden"
                              />
                              <FileText className="w-3 h-3" />
                              <span>Load from .tex/.txt file</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TEXT / LATEX ONLY MODE */}
                    {uploadMode === 'text' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-indigo-400" />
                            <span>LaTeX Text Box (Paste Text Form Directly):</span>
                          </label>
                          {uploadText.length > 0 && (
                            <span className="text-[10px] text-emerald-400 font-mono">
                              {uploadText.length} characters
                            </span>
                          )}
                        </div>
                        <textarea
                          rows={8}
                          value={uploadText}
                          onChange={e => setUploadText(e.target.value)}
                          placeholder="Paste or insert your full exam text / LaTeX code here (Questions, Choices A-D, \begin{tabular} tables, equations, Answer Key, and Step-by-Step Explanations)...&#10;&#10;Example format:&#10;1. Question text with $E=mc^2$ here...&#10;A. Option A&#10;B. Option B&#10;C. Option C&#10;D. Option D&#10;Answer: C&#10;Explanation: Step-by-step explanation here..."
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-y leading-relaxed"
                        />
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="text-[10px] text-slate-400">
                            Paste raw text or LaTeX tabular code. Tables and formulas will be automatically constructed.
                          </span>
                          <label className="text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer underline flex items-center gap-1 font-medium">
                            <input
                              type="file"
                              accept=".tex,.txt,.latex"
                              onChange={e => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  setUploadLatexFile(file);
                                  const reader = new FileReader();
                                  reader.onload = () => {
                                    if (typeof reader.result === 'string') {
                                      setUploadText(reader.result);
                                    }
                                  };
                                  reader.readAsText(file);
                                }
                              }}
                              className="hidden"
                            />
                            <FileText className="w-3 h-3" />
                            <span>Load from .tex/.txt file</span>
                          </label>
                        </div>
                      </div>
                    )}

                    {/* PDF ONLY MODE */}
                    {uploadMode === 'file' && (
                      <label
                        htmlFor="exam-file-input"
                        className="border-2 border-dashed border-slate-700 hover:border-amber-500/80 rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer transition bg-slate-900/60 group"
                      >
                        <input
                          id="exam-file-input"
                          type="file"
                          accept=".pdf,image/png,image/jpeg,image/jpg,image/webp"
                          onChange={e => {
                            if (e.target.files && e.target.files[0]) {
                              setUploadFile(e.target.files[0]);
                              if (!uploadTitle) {
                                setUploadTitle(e.target.files[0].name.replace(/\.[^/.]+$/, ''));
                              }
                            }
                          }}
                          className="hidden"
                        />
                        {uploadFile ? (
                          <div className="flex items-center gap-2.5 text-xs text-emerald-400 font-semibold">
                            {uploadFile.type.startsWith('image') ? (
                              <ImageIcon className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <FileText className="w-5 h-5 text-emerald-400" />
                            )}
                            <span className="line-clamp-1">{uploadFile.name} ({(uploadFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                        ) : (
                          <div className="text-center space-y-1">
                            <Upload className="w-6 h-6 text-slate-500 group-hover:text-amber-400 mx-auto transition" />
                            <p className="text-xs text-slate-300 font-medium">
                              Click to select or drag & drop exam PDF / photo
                            </p>
                            <p className="text-[11px] text-slate-500">PDF, PNG, JPG, or WEBP up to 30MB</p>
                          </div>
                        )}
                      </label>
                    )}
                  </div>

                  {/* Live Progress or Error */}
                  {uploading && (
                    <div className="p-3 bg-amber-950/40 border border-amber-800/40 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                        <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
                        <span>{uploadProgressStep}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-amber-500 h-full w-2/3 animate-pulse rounded-full" />
                      </div>
                    </div>
                  )}

                  {uploadError && (
                    <div className="p-3 bg-rose-950/40 border border-rose-900/60 rounded-xl flex items-center gap-2 text-xs text-rose-300">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{uploadError}</span>
                    </div>
                  )}
                </div>

                {/* Submit / Cancel Footer (Fixed at Bottom) */}
                <div className="flex justify-end gap-2 pt-3 border-t border-slate-800 mt-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsUploadOpen(false)}
                    disabled={uploading}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={
                      uploading ||
                      (uploadMode === 'file'
                        ? !uploadFile
                        : uploadMode === 'text'
                        ? !uploadText.trim() && !uploadLatexFile
                        : !uploadFile && !uploadLatexFile && !uploadText.trim())
                    }
                    className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{uploading ? 'Extracting & Digitizing Exam...' : 'Digitize & Extract Exam with AI'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL: VIEW QUESTIONS & AI EXPLANATIONS */}
      {inspectExam && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col p-6 shadow-2xl relative">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {inspectExam.category === 'MODEL' ? 'Model Exam' : 'National EUEE'}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60 font-bold">
                    {inspectQuestions.length} Questions Loaded
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mt-1">{inspectExam.title}</h2>
                <p className="text-xs text-slate-400">
                  Interactive question bank with official instructions, reading texts, and AI step-by-step explanations.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenReplaceModal(inspectExam)}
                  className="px-3 py-1.5 bg-purple-950/90 hover:bg-purple-900 border border-purple-700/70 text-purple-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                  <span className="hidden sm:inline">Replace & Re-extract ({getExamExpectedCount(inspectExam)} Qs)</span>
                  <span className="sm:hidden">Replace</span>
                </button>

                <button
                  onClick={() => setInspectExam(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
              {loadingQuestions && (
                <div className="text-center py-12 text-slate-400">
                  <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-xs">Loading questions and AI explanations...</p>
                </div>
              )}

              {inspectError && (
                <div className="p-4 bg-rose-950/40 border border-rose-900/60 rounded-2xl text-xs text-rose-300 text-center">
                  {inspectError}
                </div>
              )}

              {!loadingQuestions && inspectQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-3"
                >
                  {/* Category and Question Number */}
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Question {q.question_number || idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {q.instruction_category && (
                        <span className="text-[10px] px-2 py-0.5 bg-purple-950/80 text-purple-300 border border-purple-800/60 rounded font-semibold">
                          {q.instruction_category}
                        </span>
                      )}
                      {q.topic_name && !q.instruction_category && (
                        <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded">
                          {q.topic_name}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Section Instruction / Direction if present */}
                  {q.section_instruction && (
                    <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl text-xs text-amber-200/90 leading-relaxed font-medium">
                      <strong className="text-amber-400 mr-1 uppercase">Direction:</strong>
                      {q.section_instruction}
                    </div>
                  )}

                  {/* Reading Passage if attached */}
                  {q.reading_passage && (
                    <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 space-y-1.5 font-serif leading-relaxed">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 font-sans">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{q.passage_title || 'Reading Comprehension Passage'}</span>
                      </div>
                      <div className="max-h-48 overflow-y-auto pr-1 text-slate-300">
                        <FormattedQuestionText text={q.reading_passage} />
                      </div>
                    </div>
                  )}

                  <div className="text-sm font-medium text-slate-200 leading-relaxed">
                    <FormattedQuestionText text={q.question_text} />
                  </div>

                  {/* Official Question Diagram or Vector Graphic if present */}
                  {(q.diagram_svg || q.question_image_path) && (
                    <QuestionDiagramViewer
                      diagramSvg={q.diagram_svg}
                      imagePath={q.question_image_path}
                      caption={q.diagram_caption}
                      questionNumber={q.question_number}
                    />
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { label: 'A', text: q.option_a },
                      { label: 'B', text: q.option_b },
                      { label: 'C', text: q.option_c },
                      { label: 'D', text: q.option_d },
                      ...(q.option_e ? [{ label: 'E', text: q.option_e }] : [])
                    ].filter(opt => Boolean(opt.text)).map(opt => {
                      const isCorrect = opt.label === q.correct_answer;
                      return (
                        <div
                          key={opt.label}
                          className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 ${
                            isCorrect
                              ? 'bg-emerald-950/60 border-emerald-700/80 text-emerald-200 font-semibold'
                              : 'bg-slate-900/60 border-slate-800 text-slate-300'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 ${
                              isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {opt.label}
                          </span>
                          <span className="leading-snug min-w-0 flex-1 break-words [overflow-wrap:anywhere]">{renderRichInline(opt.text || '')}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Step-by-Step AI Explanation */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="p-3 bg-indigo-950/30 rounded-xl border border-indigo-900/40 space-y-1 max-w-full overflow-hidden">
                      <div className="text-[11px] font-bold text-indigo-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>AI Step-by-Step Explanation & Official Derivation:</span>
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed break-words [overflow-wrap:anywhere] whitespace-pre-line max-w-full overflow-hidden">
                        {renderRichInline(q.explanation || '')}
                      </div>
                    </div>
                  </div>

                  {/* Feedback button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setFeedbackQuestion({
                          id: q.id,
                          question_number: q.question_number || idx + 1,
                          question_text: q.question_text,
                          correct_answer: q.correct_answer
                        });
                        setFeedbackExamInfo({
                          id: inspectExam.id,
                          title: inspectExam.title
                        });
                        setShowFeedbackModal(true);
                      }}
                      className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition font-medium hover:underline py-1"
                    >
                      <MessageSquarePlus className="w-3.5 h-3.5" />
                      <span>Have a correction or feedback about this question? Leave feedback</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => {
                  const examId = inspectExam.id;
                  setInspectExam(null);
                  onNavigate('exam-practice', { examId });
                }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
              >
                Practice (Instant Feedback)
              </button>
              <button
                onClick={() => {
                  const examId = inspectExam.id;
                  setInspectExam(null);
                  onNavigate('exam-timed', { examId });
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition"
              >
                Take Timed Exam
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: REPLACE / RE-EXTRACT EXAM WITH ALL QUESTIONS & PASSAGES */}
      {replaceModalExam && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col p-5 sm:p-7 shadow-2xl relative overflow-hidden">
            {/* Header (Always Visible at Top) */}
            <div className="flex items-start justify-between pb-3 border-b border-slate-800 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                  <RefreshCw className="w-4 h-4" />
                  <span>Autonomous Exam Replacer & Re-extractor</span>
                </div>
                <h2 className="text-xl font-extrabold text-white">
                  Replace & Re-extract Questions
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-300">
                    Target Exam: <strong className="text-amber-400">{replaceModalExam.title}</strong>
                  </span>
                  <span className="bg-purple-950 text-purple-300 px-2 py-0.5 rounded-full border border-purple-800 text-[10px] font-semibold">
                    Standard: {getExamExpectedCount(replaceModalExam)} Questions
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  if (!replaceLoading) {
                    setReplaceModalExam(null);
                    setReplaceErrorMsg(null);
                    setReplaceSuccessMsg(null);
                  }
                }}
                disabled={replaceLoading}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto pr-1.5 sm:pr-2 space-y-4 pt-3 flex-1">
              <p className="text-xs text-slate-400 leading-relaxed">
                Extracts and structures all questions with original section instructions, reading passages, LaTeX math formulas, tabular tables, cleaned choices, and verified answers with step-by-step explanations.
              </p>

              {/* Mode Tabs */}
              <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs flex-wrap sm:flex-nowrap gap-1">
                <button
                  type="button"
                  onClick={() => setReplaceTab('dual')}
                  className={`flex-1 py-2 px-2.5 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                    replaceTab === 'dual'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                  <span>LaTeX + PDF (Dual)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReplaceTab('text')}
                  className={`flex-1 py-2 px-2.5 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                    replaceTab === 'text'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>LaTeX / Text Direct</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReplaceTab('pdf')}
                  className={`flex-1 py-2 px-2.5 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                    replaceTab === 'pdf'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Auto Re-extract</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReplaceTab('upload')}
                  className={`flex-1 py-2 px-2.5 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                    replaceTab === 'upload'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>PDF Only</span>
                </button>
              </div>

              {replaceSuccessMsg && (
                <div className="p-4 bg-emerald-950/50 border border-emerald-600/60 rounded-2xl text-xs text-emerald-200 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Extraction Complete!</p>
                    <p className="mt-1 leading-relaxed">{replaceSuccessMsg}</p>
                  </div>
                </div>
              )}

              {replaceErrorMsg && (
                <div className="p-4 bg-rose-950/50 border border-rose-600/60 rounded-2xl text-xs text-rose-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Action Failed</p>
                    <p className="mt-1 leading-relaxed">{replaceErrorMsg}</p>
                  </div>
                </div>
              )}

              {/* TAB 0: Dual Mode (LaTeX + PDF Together) */}
              {replaceTab === 'dual' && (
                <div className="p-4 sm:p-5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>Dual LaTeX + PDF Precision Re-Extraction</span>
                    </span>
                    <span className="text-[10px] bg-purple-950 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-800 font-semibold">
                      Best Precision
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Provide both the <strong>LaTeX text/source</strong> (for mathematical equations and table construction) and the <strong>PDF document</strong> (for authentic diagram & chart cutting). Diagrams are cut out and inserted directly into questions.
                  </p>

                  <div className="space-y-3">
                    {/* PDF Document Upload */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                          <Upload className="w-3.5 h-3.5 text-purple-400" />
                          <span>1. PDF Document File (For Cutting Diagrams)</span>
                        </span>
                        <span className="text-[10px] bg-slate-800 text-purple-300 px-2 py-0.5 rounded font-mono">
                          Diagrams
                        </span>
                      </div>
                      <label
                        htmlFor="replace-dual-pdf-input"
                        className="border-2 border-dashed border-slate-700 hover:border-purple-500/80 rounded-xl p-3 flex items-center justify-between cursor-pointer transition bg-slate-950/60"
                      >
                        <input
                          id="replace-dual-pdf-input"
                          type="file"
                          accept=".pdf"
                          onChange={e => setReplaceFile(e.target.files?.[0] || null)}
                          className="hidden"
                        />
                        {replaceFile ? (
                          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                            <FileText className="w-4 h-4 text-emerald-400" />
                            <span className="line-clamp-1">{replaceFile.name} ({(replaceFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Upload className="w-4 h-4 text-slate-400" />
                            <span>Click to select PDF document for diagram cutouts</span>
                          </div>
                        )}
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded font-mono">
                          {replaceFile ? 'Change File' : 'Browse PDF'}
                        </span>
                      </label>
                    </div>

                    {/* Direct LaTeX Pasting Box */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-indigo-400" />
                          <span>2. LaTeX Text Box (Directly Paste LaTeX / Questions / Tables Here):</span>
                        </label>
                        {replaceRawText.length > 0 && (
                          <span className="text-[10px] text-emerald-400 font-mono">
                            {replaceRawText.length} characters
                          </span>
                        )}
                      </div>
                      <textarea
                        rows={7}
                        value={replaceRawText}
                        onChange={e => setReplaceRawText(e.target.value)}
                        placeholder="Directly paste your LaTeX code or text form here (e.g. \begin{tabular} tables, mathematical equations $...$, choices A-D, answer keys, and step-by-step explanations)..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-y leading-relaxed"
                      />
                      <div className="flex items-center justify-between pt-0.5">
                        <span className="text-[10px] text-slate-400">
                          Tables and equations will be constructed automatically.
                        </span>
                        <label className="text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer underline flex items-center gap-1 font-medium">
                          <input
                            type="file"
                            accept=".tex,.txt,.latex"
                            onChange={e => {
                              const file = e.target.files?.[0];
                              if (file) {
                                setReplaceLatexFile(file);
                                const reader = new FileReader();
                                reader.onload = () => {
                                  if (typeof reader.result === 'string') {
                                    setReplaceRawText(reader.result);
                                  }
                                };
                                reader.readAsText(file);
                              }
                            }}
                            className="hidden"
                          />
                          <FileText className="w-3 h-3" />
                          <span>Load from .tex/.txt file</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRegenerateExam(replaceModalExam, replaceFile, replaceLatexFile, replaceRawText)}
                    disabled={replaceLoading || (!replaceFile && !replaceLatexFile && !replaceRawText.trim())}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md mt-2"
                  >
                    <Sparkles className={`w-4 h-4 ${replaceLoading ? 'animate-spin' : ''}`} />
                    <span>
                      {replaceLoading
                        ? 'Re-extracting Questions with Diagrams & Tables...'
                        : 'Re-extract Exam with LaTeX Tables & PDF Diagrams'}
                    </span>
                  </button>
                </div>
              )}

              {/* TAB 1: Paste Exam Text / LaTeX Direct */}
              {replaceTab === 'text' && (
                <div className="p-4 sm:p-5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-purple-400" />
                      <span>Direct LaTeX / Exam Text Ingestion</span>
                    </span>
                    {(() => {
                      const detected = (replaceRawText.match(/(?:^|\n|\r)\s*(?:Q(?:uestion)?\s*)?(\d{1,3})[\.\:\)]\s+[^\n]{3,}/gi) || []).length;
                      return (
                        <span className="text-[10px] bg-slate-900 text-purple-300 px-2 py-0.5 rounded border border-purple-800 font-mono">
                          {detected > 0 ? `${detected} Questions Detected` : 'Ready to Parse'}
                        </span>
                      );
                    })()}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Paste raw text or LaTeX transcript with directions, tables, and answer keys. The engine parses questions, handles LaTeX math, constructs tables, and structures step-by-step explanations.
                  </p>

                  <textarea
                    value={replaceRawText}
                    onChange={e => setReplaceRawText(e.target.value)}
                    rows={8}
                    placeholder={`DIRECTIONS: Questions 1-5 deal with synonyms. For each item, choose the word that has the closest meaning.\n\n1. The teacher praised his diligence in completing the assignment.\nA. laziness\nB. hard work\nC. confusion\nD. carelessness\n\nAnswers With Explanations:\n1. B. Hard work is the correct synonym for diligence.`}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white font-mono focus:outline-none focus:border-purple-500 transition resize-y placeholder:text-slate-600 leading-relaxed"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setReplaceRawText(`DIRECTIONS: Questions 1-2 deal with vocabulary in context. Choose the word closest in meaning.\n\n1. The word "unabated" in paragraph 2 means:\nA. relieved\nB. undiminished\nC. controlled\nD. unplanned\n\nPassage I:\nEthiopia has registered tremendous milestones in education and digital literacy across secondary schools.\n\n2. According to the text, what is the key milestone achieved?\nA. Digital literacy and educational expansion\nB. Closure of regional schools\nC. Elimination of online testing\nD. Complete abandonment of national standards\n\nAnswers With Explanations:\n1. B. Undiminished is the closest synonym for unabated.\n2. A. Paragraph 1 explicitly identifies digital literacy and educational expansion as key milestones.`);
                        }}
                        className="text-[11px] text-purple-400 hover:text-purple-300 underline font-medium"
                      >
                        Insert Sample Format
                      </button>

                      <label className="text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer underline flex items-center gap-1 font-medium">
                        <input
                          type="file"
                          accept=".tex,.txt,.latex"
                          onChange={e => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setReplaceLatexFile(file);
                              const reader = new FileReader();
                              reader.onload = () => {
                                if (typeof reader.result === 'string') {
                                  setReplaceRawText(reader.result);
                                }
                              };
                              reader.readAsText(file);
                            }
                          }}
                          className="hidden"
                        />
                        <FileText className="w-3 h-3" />
                        <span>Load from .tex/.txt file</span>
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRegenerateExam(replaceModalExam, null, null, replaceRawText)}
                      disabled={replaceLoading || !replaceRawText.trim()}
                      className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900/40 disabled:text-slate-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                    >
                      <FileText className={`w-3.5 h-3.5 ${replaceLoading ? 'animate-spin' : ''}`} />
                      <span>
                        {replaceLoading
                          ? 'Parsing & Ingesting Questions...'
                          : `Ingest & Replace Questions (${(replaceRawText.match(/(?:^|\n|\r)\s*(?:Q(?:uestion)?\s*)?(\d{1,3})[\.\:\)]\s+[^\n]{3,}/gi) || []).length || 0} detected)`}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: Autonomous Re-extract from PDF */}
              {replaceTab === 'pdf' && (
                <div className="p-4 sm:p-5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Autonomous Extraction from Current PDF
                    </span>
                    <span className="text-[10px] bg-purple-950 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-800 font-semibold">
                      Auto Mode
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Re-analyzes the exam paper using the high-fidelity parser. Detects instruction sections (Synonyms, Antonyms, Analogies, Reading Comprehension), associates passages, formats LaTeX math formulas, removes option prefixes from answers, and synchronizes to local and Firestore backups.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleRegenerateExam(replaceModalExam)}
                    disabled={replaceLoading}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900/60 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md"
                  >
                    <RefreshCw className={`w-4 h-4 ${replaceLoading ? 'animate-spin' : ''}`} />
                    <span>
                      {replaceLoading
                        ? `Re-extracting ${getExamExpectedCount(replaceModalExam)} Questions...`
                        : `Re-extract All ${getExamExpectedCount(replaceModalExam)} Questions Now`}
                    </span>
                  </button>
                </div>
              )}

              {/* TAB 3: Upload Replacement PDF */}
              {replaceTab === 'upload' && (
                <div className="p-4 sm:p-5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Upload Replacement PDF Document
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                      .PDF
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Upload a fresh PDF file. The autonomous ingestion engine will parse the questions, sections, and passages, replace the existing question bank, and update the exam document.
                  </p>

                  <div className="border-2 border-dashed border-slate-700 hover:border-purple-500 rounded-2xl p-5 text-center transition bg-slate-900/60">
                    <input
                      type="file"
                      id="replace-pdf-file-input"
                      accept=".pdf"
                      onChange={e => setReplaceFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <label htmlFor="replace-pdf-file-input" className="cursor-pointer flex flex-col items-center justify-center space-y-2">
                      <Upload className="w-7 h-7 text-purple-400" />
                      <span className="text-xs font-semibold text-purple-300">
                        {replaceFile ? replaceFile.name : 'Click to select or drop replacement PDF'}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {replaceFile ? `${(replaceFile.size / 1024 / 1024).toFixed(2)} MB` : 'Standard Ethiopian entrance exam paper'}
                      </span>
                    </label>
                  </div>

                  {replaceFile && (
                    <button
                      type="button"
                      onClick={() => handleRegenerateExam(replaceModalExam, replaceFile)}
                      disabled={replaceLoading}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-900/60 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md"
                    >
                      <Upload className={`w-4 h-4 ${replaceLoading ? 'animate-spin' : ''}`} />
                      <span>
                        {replaceLoading ? 'Uploading & Autonomously Ingesting...' : 'Upload & Autonomously Replace Questions'}
                      </span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer (Fixed at Bottom) */}
            <div className="pt-3 border-t border-slate-800 mt-2 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => {
                  setReplaceModalExam(null);
                  setReplaceErrorMsg(null);
                  setReplaceSuccessMsg(null);
                }}
                disabled={replaceLoading}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QUESTION FEEDBACK MODAL */}
      {showFeedbackModal && feedbackQuestion && (
        <QuestionFeedbackModal
          isOpen={showFeedbackModal}
          onClose={() => {
            setShowFeedbackModal(false);
            setFeedbackQuestion(null);
            setFeedbackExamInfo(null);
          }}
          question={feedbackQuestion}
          examInfo={feedbackExamInfo || undefined}
          user={user}
        />
      )}
    </div>
  );
};
