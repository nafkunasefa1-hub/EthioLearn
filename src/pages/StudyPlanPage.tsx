import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Calendar,
  Clock,
  Target,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Brain,
  Award,
  Zap,
  RotateCw,
  Plus,
  Trash2,
  Check,
  ChevronRight,
  TrendingUp,
  Layers,
  Shield,
  Lock,
  Timer,
  AlertTriangle
} from 'lucide-react';
import { Subject } from '../types';
import { apiFetchJson } from '../utils/api';

interface DailyTask {
  id: string;
  day: number;
  subject_name: string;
  topic_title: string;
  action_type: 'READING' | 'FLASHCARD' | 'PRACTICE' | 'EXAM_TRIAL';
  details: string;
  completed: boolean;
}

interface SavedStudyPlan {
  id: string;
  exam_target: string;
  total_days: number;
  daily_hours: number;
  priority_subjects: string[];
  strategy_mix: string;
  created_at: string;
  tasks: DailyTask[];
}

interface StudyPlanPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const StudyPlanPage: React.FC<StudyPlanPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Wizard state
  const [examTarget, setExamTarget] = useState<string>('2024 / 2018 E.C. EUEE Entrance Examination');
  const [totalDays, setTotalDays] = useState<number>(30);
  const [dailyHours, setDailyHours] = useState<number>(4);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Mathematics', 'Physics', 'Chemistry', 'English']);
  const [selectedStyles, setSelectedStyles] = useState<string[]>(['Balanced', 'Pomodoro Deep Sprints']);
  const [hasSchool, setHasSchool] = useState<boolean>(true);
  const [schoolReturnTime, setSchoolReturnTime] = useState<string>('15:30');
  const [availabilityWindow, setAvailabilityWindow] = useState<string>('Evening & Night');
  const [weekendAvailable, setWeekendAvailable] = useState<string>('Full Weekend Immersion');
  const [mealTimes, setMealTimes] = useState<string>('Standard (Breakfast 7:30, Lunch 13:00, Dinner 20:00)');

  // Granular Lockdown & Common Topics state
  interface GranularSession {
    id: string;
    subject: string;
    durationHours: number;
    chapter: string;
    topic: string;
    studyCommonTopics: boolean;
  }

  const [granularSessions, setGranularSessions] = useState<GranularSession[]>([
    {
      id: '1',
      subject: 'Mathematics',
      durationHours: 2,
      chapter: 'Chapter 1: Relations & Functions',
      topic: '1.3 Inverse & Composite Functions',
      studyCommonTopics: true
    }
  ]);
  const [useGranularMode, setUseGranularMode] = useState<boolean>(true);
  const [useGranularLongTermMode, setUseGranularLongTermMode] = useState<boolean>(false);
  const [granularLongTermSessions, setGranularLongTermSessions] = useState<GranularSession[]>([
    {
      id: 'lt-1',
      subject: 'Mathematics',
      durationHours: 2,
      chapter: 'Chapter 1: Relations & Functions',
      topic: '1.3 Inverse & Composite Functions',
      studyCommonTopics: true
    }
  ]);

  const CURRICULUM_CHAPS: Record<string, Array<{ chapter: string; topics: string[] }>> = {
    Mathematics: [
      { chapter: 'Chapter 1: Relations & Functions', topics: ['1.1 Types of Relations', '1.2 Functions & Domain/Range', '1.3 Inverse & Composite Functions'] },
      { chapter: 'Chapter 2: Sequence & Series', topics: ['2.1 Arithmetic Sequences & Series', '2.2 Geometric Sequences & Series', '2.3 Infinite Series Applications'] },
      { chapter: 'Chapter 3: Introduction to Calculus', topics: ['3.1 Limits & Continuity', '3.2 Derivatives & Rules', '3.3 Application of Derivatives in Optimization'] }
    ],
    Physics: [
      { chapter: 'Chapter 1: Vector Analysis & Mechanics', topics: ['1.1 Vector Addition & Dot/Cross Products', '1.2 Kinematics in 2D', '1.3 Newton\'s Laws & Friction'] },
      { chapter: 'Chapter 2: Work, Energy & Power', topics: ['2.1 Work-Energy Theorem', '2.2 Conservation of Mechanical Energy', '2.3 Power & Efficiency'] },
      { chapter: 'Chapter 3: Electromagnetism', topics: ['3.1 Magnetic Fields & Lorentz Force', '3.2 Electromagnetic Induction & Faraday\'s Law', '3.3 AC Circuits'] }
    ],
    Chemistry: [
      { chapter: 'Chapter 1: Atomic Structure & Periodicity', topics: ['1.1 Quantum Numbers & Electronic Configuration', '1.2 Periodic Trends', '1.3 Chemical Bonding Types'] },
      { chapter: 'Chapter 2: Chemical Equilibrium', topics: ['2.1 Reversible Reactions & Equilibrium Constants', '2.2 Le Chatelier\'s Principle', '2.3 Acid-Base Equilibria & pH'] },
      { chapter: 'Chapter 3: Electrochemistry', topics: ['3.1 Oxidation-Reduction Reactions', '3.2 Galvanic & Electrolytic Cells', '3.3 Standard Electrode Potentials'] }
    ],
    Biology: [
      { chapter: 'Chapter 1: Cell Biology & Biochemistry', topics: ['1.1 Macromolecules & Enzymes', '1.2 Cell Organelles & Membrane Transport', '1.3 Cellular Respiration & Photosynthesis'] },
      { chapter: 'Chapter 2: Genetics & Heredity', topics: ['2.1 Mendelian Genetics & Punnett Squares', '2.2 DNA Structure, Replication & Protein Synthesis', '2.3 Mutations & Gene Expression'] },
      { chapter: 'Chapter 3: Ecology & Conservation', topics: ['3.1 Ecosystem Dynamics & Energy Flow', '3.2 Biogeochemical Cycles', '3.3 Biodiversity & Conservation'] }
    ],
    English: [
      { chapter: 'Chapter 1: Reading Comprehension & Critical Analysis', topics: ['1.1 Main Idea & Supporting Details', '1.2 Inferential Reading & Author Tone', '1.3 Vocabulary in Context'] },
      { chapter: 'Chapter 2: Advanced Grammar & Sentence Structure', topics: ['2.1 Conditionals & Subjunctives', '2.2 Passive Voice & Causative Verbs', '2.3 Relative Clauses & Modifiers'] },
      { chapter: 'Chapter 3: Writing & Composition', topics: ['3.1 Essay Structuring & Thesis Statements', '3.2 Cohesion & Transition Markers', '3.3 Summary Writing'] }
    ],
    Civics: [
      { chapter: 'Chapter 1: Building a Democratic System', topics: ['1.1 Constitutionalism & Rule of Law', '1.2 Civic Participation & Voting', '1.3 Human Rights & Justice'] },
      { chapter: 'Chapter 2: The Ethiopian Constitutional Order', topics: ['2.1 Federalism & Structure of State', '2.2 Judicial Independence', '2.3 Civil Rights & Liberties'] },
      { chapter: 'Chapter 3: Regional Cooperation & Foreign Relations', topics: ['3.1 Foreign Policy Principles', '3.2 African Regional Integration', '3.3 Global Citizenship'] }
    ],
    Economics: [
      { chapter: 'Chapter 1: Microeconomic Principles', topics: ['1.1 Demand & Supply Elasticity', '1.2 Consumer Preference & Utility', '1.3 Market Structures & Pricing'] },
      { chapter: 'Chapter 2: Macroeconomic Aggregates & Policy', topics: ['2.1 GDP Calculation & National Income', '2.2 Inflation, Unemployment & Phillips Curve', '2.3 Fiscal & Monetary Interventions'] },
      { chapter: 'Chapter 3: The Ethiopian Economy & Development', topics: ['3.1 Agricultural & Rural Development', '3.2 Industrialization & Trade Policy', '3.3 Growth Strategies & Foreign Exchange'] }
    ],
    'SAT Reasoning': [
      { chapter: 'Chapter 1: Quantitative Reasoning & Problem Solving', topics: ['1.1 Number Theory & Algebraic Fluency', '1.2 Data Analysis & Probability Models', '1.3 Geometry & Coordinate Problem Solving'] },
      { chapter: 'Chapter 2: Critical Thinking & Logic', topics: ['2.1 Deductive & Inductive Reasoning', '2.2 Logical Fallacies & Syllogisms', '2.3 Pattern Recognition & Sequences'] },
      { chapter: 'Chapter 3: Verbal Reasoning & Analogies', topics: ['3.1 Sentence Equivalence & Context Clues', '3.2 Verbal Analogies & Precision', '3.3 Critical Reading Inferences'] }
    ]
  };

  // Immediate Focus Lockdown state
  const [lockdownHours, setLockdownHours] = useState<number>(3);
  const [lockdownSubjectsInput, setLockdownSubjectsInput] = useState<string>('Mathematics, Physics, Biology');
  const [subjectBreakdown, setSubjectBreakdown] = useState<Array<{ subject: string; hours: number }>>([
    { subject: 'Mathematics', hours: 1 },
    { subject: 'Physics', hours: 1 },
    { subject: 'Biology', hours: 1 }
  ]);
  const [aiGeneratedSchedule, setAiGeneratedSchedule] = useState<Array<{ time: string; activity: string; type: 'study' | 'break' }>>([]);
  const [isLockdownActive, setIsLockdownActive] = useState<boolean>(false);
  const [lockdownSecondsRemaining, setLockdownSecondsRemaining] = useState<number>(0);
  const [exitHoldProgress, setExitHoldProgress] = useState<number>(0);
  const exitIntervalRef = useRef<any>(null);

  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime); // E5 note
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {
      // Audio context policy fallback
    }
  };

  useEffect(() => {
    let timer: any;
    if (isLockdownActive && lockdownSecondsRemaining > 0) {
      timer = setInterval(() => {
        setLockdownSecondsRemaining(prev => {
          // Play beep reminder every 50 minutes (3000 seconds) for scientific rest breaks
          if (prev > 0 && prev % 3000 === 0) {
            playBeep();
          }
          if (prev <= 1) {
            playBeep();
            setIsLockdownActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLockdownActive, lockdownSecondsRemaining]);

  const handleStartLockdown = (e: React.FormEvent) => {
    e.preventDefault();
    playBeep();
    const totalSecs = lockdownHours * 3600;
    setLockdownSecondsRemaining(totalSecs);
    setIsLockdownActive(true);
  };

  const handleToggleStyle = (styleId: string) => {
    setSelectedStyles(prev =>
      prev.includes(styleId) ? prev.filter(s => s !== styleId) : [...prev, styleId]
    );
  };

  const handleMakePlanForMe = () => {
    playBeep();
    const subs = lockdownSubjectsInput.split(',').map(s => s.trim()).filter(Boolean);
    const targetSubs = subs.length > 0 ? subs : ['Mathematics', 'Physics', 'Biology', 'Chemistry'];
    const totalH = lockdownHours;
    
    const hoursPerSub = Math.max(1, Math.floor(totalH / targetSubs.length));
    const breakdown = targetSubs.map((sub, idx) => ({
      subject: sub,
      hours: idx === targetSubs.length - 1 ? totalH - (hoursPerSub * (targetSubs.length - 1)) : hoursPerSub
    })).filter(item => item.hours > 0);

    setSubjectBreakdown(breakdown);

    let sched: Array<{ time: string; activity: string; type: 'study' | 'break' }> = [];
    const now = new Date();
    let currentH = now.getHours();
    let currentM = now.getMinutes();

    const formatClock = (h: number, m: number) => {
      const h12 = h % 12 === 0 ? 12 : h % 12;
      const ampm = h >= 12 ? 'PM' : 'AM';
      const mm = m < 10 ? `0${m}` : `${m}`;
      return `${h12}:${mm} ${ampm}`;
    };

    breakdown.forEach(item => {
      let remH = item.hours;
      while (remH > 0) {
        const blockH = Math.min(1.5, remH);
        const studyMins = Math.round(blockH * 50);
        const breakMins = Math.round(blockH * 10);

        const startTimeStr = formatClock(currentH, currentM);
        
        currentM += studyMins;
        currentH += Math.floor(currentM / 60);
        currentM %= 60;
        currentH %= 24;

        const endTimeStr = formatClock(currentH, currentM);

        sched.push({
          time: `${startTimeStr} - ${endTimeStr}`,
          activity: `Deep Study: ${item.subject} (Scientific Ultradian Rhythm Block)`,
          type: 'study'
        });

        const breakStartStr = formatClock(currentH, currentM);
        currentM += breakMins;
        currentH += Math.floor(currentM / 60);
        currentM %= 60;
        currentH %= 24;
        const breakEndStr = formatClock(currentH, currentM);

        sched.push({
          time: `${breakStartStr} - ${breakEndStr} (Rest Break)`,
          activity: `Scientific Rest: Hydration, stretching & eye relaxation (Beep Alert)`,
          type: 'break'
        });

        remH -= blockH;
      }
    });

    setAiGeneratedSchedule(sched);
  };

  const handleStartHoldingExit = () => {
    setExitHoldProgress(0);
    exitIntervalRef.current = setInterval(() => {
      setExitHoldProgress(prev => {
        if (prev >= 100) {
          clearInterval(exitIntervalRef.current);
          setIsLockdownActive(false);
          return 0;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleCancelHoldingExit = () => {
    if (exitIntervalRef.current) clearInterval(exitIntervalRef.current);
    setExitHoldProgress(0);
  };

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Custom Study Plan Ultradian Rhythm Preview state
  const [customPlanSchedulePreview, setCustomPlanSchedulePreview] = useState<Array<{ time: string; activity: string; type: 'study' | 'break' }>>([]);

  const handleMakeCustomPlanForMe = () => {
    playBeep();
    const formatClock = (h: number, m: number) => {
      const h12 = h % 12 === 0 ? 12 : h % 12;
      const ampm = h >= 12 ? 'PM' : 'AM';
      const mm = m < 10 ? `0${m}` : `${m}`;
      return `${h12}:${mm} ${ampm}`;
    };

    let sched: Array<{ time: string; activity: string; type: 'study' | 'break' }> = [];
    const now = new Date();
    let currentH = now.getHours();
    let currentM = now.getMinutes();

    if (useGranularLongTermMode && granularLongTermSessions.length > 0) {
      granularLongTermSessions.forEach(gs => {
        let remH = gs.durationHours;
        while (remH > 0) {
          const blockH = Math.min(1.5, remH);
          const studyMins = Math.round(blockH * 50);
          const breakMins = Math.round(blockH * 10);

          const startStr = formatClock(currentH, currentM);
          currentM += studyMins;
          currentH += Math.floor(currentM / 60);
          currentM %= 60;
          currentH %= 24;
          const endStr = formatClock(currentH, currentM);

          sched.push({
            time: `${startStr} - ${endStr}`,
            activity: `Target Roadmap Study: ${gs.subject} [${gs.chapter} -> ${gs.topic}] ${gs.studyCommonTopics ? '(EUEE Grade 9-12 Common Topics Linked)' : ''}`,
            type: 'study'
          });

          const bStartStr = formatClock(currentH, currentM);
          currentM += breakMins;
          currentH += Math.floor(currentM / 60);
          currentM %= 60;
          currentH %= 24;
          const bEndStr = formatClock(currentH, currentM);

          sched.push({
            time: `${bStartStr} - ${bEndStr} (Rest Break)`,
            activity: `Ultradian Rest: Hydration & eye relaxation (Beep Alert)`,
            type: 'break'
          });

          remH -= blockH;
        }
      });
    } else {
      const targetSubs = selectedSubjects.length > 0 ? selectedSubjects : ['Mathematics', 'Physics', 'Chemistry', 'English'];
      const totalH = dailyHours;
      const hoursPerSub = Math.max(1, Math.floor(totalH / targetSubs.length));
      const breakdown = targetSubs.map((sub, idx) => ({
        subject: sub,
        hours: idx === targetSubs.length - 1 ? totalH - (hoursPerSub * (targetSubs.length - 1)) : hoursPerSub
      })).filter(item => item.hours > 0);

      breakdown.forEach(item => {
        let remH = item.hours;
        while (remH > 0) {
          const blockH = Math.min(1.5, remH);
          const studyMins = Math.round(blockH * 50);
          const breakMins = Math.round(blockH * 10);

          const startTimeStr = formatClock(currentH, currentM);
          currentM += studyMins;
          currentH += Math.floor(currentM / 60);
          currentM %= 60;
          currentH %= 24;
          const endTimeStr = formatClock(currentH, currentM);

          sched.push({
            time: `${startTimeStr} - ${endTimeStr}`,
            activity: `Roadmap Deep Study: ${item.subject} (Curriculum & EUEE Exam Drills)`,
            type: 'study'
          });

          const breakStartStr = formatClock(currentH, currentM);
          currentM += breakMins;
          currentH += Math.floor(currentM / 60);
          currentM %= 60;
          currentH %= 24;
          const breakEndStr = formatClock(currentH, currentM);

          sched.push({
            time: `${breakStartStr} - ${breakEndStr} (Rest Break)`,
            activity: `Ultradian Rest: Hydration, stretching & eye relaxation (Beep Alert)`,
            type: 'break'
          });

          remH -= blockH;
        }
      });
    }

    setCustomPlanSchedulePreview(sched);
  };

  const handleAutoPopulateHighYieldChapters = () => {
    playBeep();
    const highYieldList: GranularSession[] = [
      {
        id: 'lt-math-' + Date.now(),
        subject: 'Mathematics',
        durationHours: 2,
        chapter: 'Chapter 1: Relations & Functions',
        topic: '1.3 Inverse & Composite Functions',
        studyCommonTopics: true
      },
      {
        id: 'lt-phys-' + (Date.now() + 1),
        subject: 'Physics',
        durationHours: 2,
        chapter: 'Chapter 1: Vector Analysis & Mechanics',
        topic: '1.2 Kinematics in 2D',
        studyCommonTopics: true
      },
      {
        id: 'lt-chem-' + (Date.now() + 2),
        subject: 'Chemistry',
        durationHours: 2,
        chapter: 'Chapter 2: Chemical Equilibrium',
        topic: '2.3 Acid-Base Equilibria & pH',
        studyCommonTopics: true
      },
      {
        id: 'lt-bio-' + (Date.now() + 3),
        subject: 'Biology',
        durationHours: 2,
        chapter: 'Chapter 2: Genetics & Heredity',
        topic: '2.1 Mendelian Genetics & Punnett Squares',
        studyCommonTopics: true
      },
      {
        id: 'lt-eng-' + (Date.now() + 4),
        subject: 'English',
        durationHours: 1,
        chapter: 'Chapter 2: Advanced Grammar & Sentence Structure',
        topic: '2.1 Conditionals & Subjunctives',
        studyCommonTopics: true
      }
    ];
    setGranularLongTermSessions(highYieldList);
    setUseGranularLongTermMode(true);
  };

  const handleSelectStream = (stream: 'natural' | 'social' | 'all') => {
    playBeep();
    if (stream === 'natural') {
      setSelectedSubjects(['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English']);
    } else if (stream === 'social') {
      setSelectedSubjects(['Mathematics', 'English', 'Civics', 'Economics', 'SAT Reasoning']);
    } else {
      setSelectedSubjects(['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Civics', 'SAT Reasoning', 'Economics']);
    }
  };

  const handleLaunchTaskLockdown = (task: DailyTask) => {
    playBeep();
    setLockdownSubjectsInput(task.subject_name);
    setLockdownHours(2);
    setSubjectBreakdown([{ subject: task.subject_name, hours: 2 }]);
    setIsLockdownActive(true);
    setLockdownSecondsRemaining(2 * 3600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [currentPlan, setCurrentPlan] = useState<SavedStudyPlan | null>(null);
  const [activeDayFilter, setActiveDayFilter] = useState<number>(1);

  // Load available subjects
  useEffect(() => {
    const fetchSubjects = async () => {
      const data = await apiFetchJson<Subject[]>('/api/subjects', {}, []);
      setSubjects(data || []);
    };
    fetchSubjects();
  }, []);

  // Load existing plan from local storage
  useEffect(() => {
    const key = user?.id ? `ethio_study_plan_${user.id}` : 'ethio_study_plan_guest';
    const stored = localStorage.getItem(key) || localStorage.getItem('ethio_study_plan_guest');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.tasks) {
          setCurrentPlan(parsed);
        }
      } catch (err) {
        console.warn('Failed to parse saved plan:', err);
      }
    }
  }, [user]);

  // Save current plan state
  const savePlanState = (plan: SavedStudyPlan) => {
    setCurrentPlan(plan);
    const key = user?.id ? `ethio_study_plan_${user.id}` : 'ethio_study_plan_guest';
    localStorage.setItem(key, JSON.stringify(plan));
  };

  const handleToggleSubject = (subjName: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subjName) ? prev.filter(s => s !== subjName) : [...prev, subjName]
    );
  };

  const generatePlan = () => {
    const activeSubjs = useGranularLongTermMode
      ? granularLongTermSessions.map(s => s.subject)
      : (selectedSubjects.length > 0 ? selectedSubjects : ['Mathematics', 'Physics', 'Chemistry', 'English']);

    const generatedTasks: DailyTask[] = [];

    // Curriculum topics sample mapping for dynamic study schedule
    const topicBank: Record<string, string[]> = {
      Mathematics: ['Quadratic Equations', 'Vectors & Geometry', 'Matrices & Determinants', 'Calculus & Derivatives', 'Probability & Statistics'],
      Physics: ['Kinematics & Motion', 'Newton\'s Laws', 'Work, Energy & Power', 'Electric Fields & Ohm\'s Law', 'Optics & Wave Motion'],
      Chemistry: ['Atomic Structure', 'Chemical Bonding', 'Acid-Base Equilibria', 'Electrochemistry', 'Organic Chemistry Basics'],
      Biology: ['Cell Biology', 'Genetics & Inheritance', 'Human Anatomy', 'Ecology & Biodiversity', 'Plant Physiology'],
      English: ['Grammar & Tenses', 'Reading Comprehension', 'Vocabulary & Synonyms', 'Dialogue Completion', 'Communicative Skills'],
      Civics: ['Constitutionalism & Rule of Law', 'Human Rights & Justice', 'Federalism & State Systems', 'Foreign Policy & Global Citizenship', 'Ethical Citizenship'],
      Economics: ['Demand & Supply Elasticity', 'Macroeconomic Aggregates & GDP', 'Fiscal & Monetary Policies', 'Ethiopian Economy & Agriculture', 'International Trade & Growth'],
      'SAT Reasoning': ['Quantitative Algebra & Logic', 'Critical Reading & Deductions', 'Data Sufficiency & Interpretation', 'Verbal Analogies & Context', 'Logical Reasoning Puzzles']
    };

    let taskCounter = 1;
    for (let day = 1; day <= totalDays; day++) {
      const subj = activeSubjs[(day - 1) % activeSubjs.length];
      const matchingGranular = useGranularLongTermMode ? granularLongTermSessions.find(s => s.subject === subj) : null;
      const topics = topicBank[subj] || ['General Syllabus Unit', 'Core Concepts'];
      const topic = matchingGranular ? matchingGranular.topic : topics[(Math.floor((day - 1) / activeSubjs.length)) % topics.length];
      const isCommonLinked = matchingGranular ? matchingGranular.studyCommonTopics : true;

      // Task 1: Reading
      generatedTasks.push({
        id: `task-${taskCounter++}`,
        day,
        subject_name: subj,
        topic_title: topic,
        action_type: 'READING',
        details: `Read ${user?.grade || 'Grade 12'} ${subj} Student Textbook (${matchingGranular ? matchingGranular.chapter : 'Unit Chapter'}) covering ${topic}.${isCommonLinked ? ' [EUEE Grade 9-12 Common Topics Synchronized]' : ''}`,
        completed: false
      });

      // Task 2: Flashcards
      generatedTasks.push({
        id: `task-${taskCounter++}`,
        day,
        subject_name: subj,
        topic_title: topic,
        action_type: 'FLASHCARD',
        details: `Master high-yield active recall flashcards and mindmaps on ${topic}.`,
        completed: false
      });

      // Task 3: Untimed Practice
      generatedTasks.push({
        id: `task-${taskCounter++}`,
        day,
        subject_name: subj,
        topic_title: topic,
        action_type: 'PRACTICE',
        details: `Solve Ethiopian EUEE entrance exam past questions for ${topic}.`,
        completed: false
      });

      // Milestone Exam Trial every 7 days
      if (day % 7 === 0 || day === totalDays) {
        generatedTasks.push({
          id: `task-${taskCounter++}`,
          day,
          subject_name: subj,
          topic_title: `${subj} Timed Exam Simulation`,
          action_type: 'EXAM_TRIAL',
          details: `Complete a full ${subj} timed trial examination under real exam conditions.`,
          completed: false
        });
      }
    }

    const calculatedHrs = useGranularLongTermMode
      ? granularLongTermSessions.reduce((acc, s) => acc + s.durationHours, 0)
      : dailyHours;

    const newPlan: SavedStudyPlan = {
      id: `plan-${Date.now()}`,
      exam_target: examTarget,
      total_days: totalDays,
      daily_hours: calculatedHrs,
      priority_subjects: activeSubjs,
      strategy_mix: selectedStyles.join(', '),
      created_at: new Date().toISOString(),
      tasks: generatedTasks
    };

    savePlanState(newPlan);
    setActiveDayFilter(1);
  };

  const toggleTaskCompletion = (taskId: string) => {
    if (!currentPlan) return;
    const updatedTasks = currentPlan.tasks.map(t =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    const updatedPlan = { ...currentPlan, tasks: updatedTasks };
    savePlanState(updatedPlan);
  };

  const handleResetPlan = () => {
    setCurrentPlan(null);
    if (user?.id) {
      localStorage.removeItem(`ethio_study_plan_${user.id}`);
    }
    localStorage.removeItem('ethio_study_plan_guest');
    localStorage.removeItem('ethio_study_plan_undefined');
  };

  // Calculations for current plan
  const totalTaskCount = currentPlan?.tasks.length || 0;
  const completedTaskCount = currentPlan?.tasks.filter(t => t.completed).length || 0;
  const completionPercentage = totalTaskCount > 0 ? Math.round((completedTaskCount / totalTaskCount) * 100) : 0;

  const activeDayTasks = currentPlan?.tasks.filter(t => t.day === activeDayFilter) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Smart Study Engine
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-medium">
              Tailored Schedule
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Personalized Entrance Study Plan & Focus Lockdown
          </h1>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
            Customize your exam timeline, daily study hours, and weak subjects into an actionable roadmap, or lock in immediate continuous study sessions.
          </p>
        </div>

        {currentPlan && (
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleResetPlan}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Reset & Rebuild Plan</span>
            </button>
          </div>
        )}
      </div>

      {/* IMMEDIATE FOCUS LOCKDOWN / DEEP STUDY SESSION PANEL */}
      <div className="bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-800/60 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-900/60 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-purple-400" /> Deep Focus Shield
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-medium">
                Zero Distractions
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Immediate Study Plan & Focus Lockdown
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              Block out social media, incoming distractions, and notifications. Set your continuous study duration (e.g. 2hrs, 5hrs) and target subjects to enter an immersive, unbroken study zone.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Mode Switcher */}
          <div className="flex items-center justify-between bg-slate-900/90 border border-purple-900/60 p-3 rounded-2xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-white">Focus Session Planning Mode:</span>
            </div>
            <div className="flex gap-2 text-xs">
              <button
                type="button"
                onClick={() => setUseGranularMode(false)}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  !useGranularMode ? 'bg-purple-600 text-white shadow' : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                Quick AI Auto-Plan
              </button>
              <button
                type="button"
                onClick={() => setUseGranularMode(true)}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                  useGranularMode ? 'bg-indigo-600 text-white shadow' : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Granular Chapters & Common Topics</span>
              </button>
            </div>
          </div>

          {!useGranularMode ? (
            <form onSubmit={handleStartLockdown} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300">
                  Continuous Study Duration (Up to 10 Hours)
                </label>
                <select
                  value={lockdownHours}
                  onChange={e => setLockdownHours(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-purple-900 text-white rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-purple-500"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} Hour{i > 0 ? 's' : ''} Continuous Focus Marathon
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300">
                  Focus Subjects / Topics (Comma separated)
                </label>
                <input
                  type="text"
                  value={lockdownSubjectsInput}
                  onChange={e => setLockdownSubjectsInput(e.target.value)}
                  placeholder="e.g. Mathematics, Physics, Biology, Chemistry"
                  className="w-full bg-slate-900 border border-purple-900 text-white rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleMakePlanForMe}
                  className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-md flex items-center justify-center gap-1.5"
                  title="Automatically distribute hours and scientific rest breaks across subjects"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Make Plan for Me</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl text-xs font-extrabold transition shadow-lg flex items-center justify-center gap-1.5"
                >
                  <Lock className="w-4 h-4 text-amber-300" />
                  <span>Apply & Lock In</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 bg-slate-900/90 border border-purple-900/60 p-5 rounded-2xl">
              <div className="flex items-center justify-between border-b border-purple-900/50 pb-3">
                <h3 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Subject, Duration, Chapter & EUEE Common Topics Configuration</span>
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setGranularSessions([
                      ...granularSessions,
                      {
                        id: Date.now().toString(),
                        subject: 'Physics',
                        durationHours: 2,
                        chapter: 'Chapter 1: Vector Analysis & Mechanics',
                        topic: '1.2 Kinematics in 2D',
                        studyCommonTopics: true
                      }
                    ]);
                  }}
                  className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Subject</span>
                </button>
              </div>

              <div className="space-y-4">
                {granularSessions.map((session, index) => {
                  const availableChapters = CURRICULUM_CHAPS[session.subject] || CURRICULUM_CHAPS['Mathematics'];
                  const currentChapObj = availableChapters.find(c => c.chapter === session.chapter) || availableChapters[0];
                  return (
                    <div key={session.id} className="bg-slate-950 border border-purple-900/50 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-indigo-300">Subject Session #{index + 1}</span>
                        {granularSessions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setGranularSessions(granularSessions.filter(s => s.id !== session.id))}
                            className="text-rose-400 hover:text-rose-300 text-xs font-bold flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Remove
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-slate-300">Subject</label>
                          <select
                            value={session.subject}
                            onChange={e => {
                              const sub = e.target.value;
                              const chaps = CURRICULUM_CHAPS[sub] || CURRICULUM_CHAPS['Mathematics'];
                              setGranularSessions(granularSessions.map(s => s.id === session.id ? {
                                ...s,
                                subject: sub,
                                chapter: chaps[0].chapter,
                                topic: chaps[0].topics[0]
                              } : s));
                            }}
                            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-purple-500"
                          >
                            {Object.keys(CURRICULUM_CHAPS).map(sub => (
                              <option key={sub} value={sub}>{sub}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-slate-300">Duration (Hours)</label>
                          <select
                            value={session.durationHours}
                            onChange={e => {
                              const hrs = Number(e.target.value);
                              setGranularSessions(granularSessions.map(s => s.id === session.id ? { ...s, durationHours: hrs } : s));
                            }}
                            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-purple-500"
                          >
                            {[1, 2, 3, 4, 5, 6].map(h => (
                              <option key={h} value={h}>{h} Hour{h > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-slate-300">Chapter</label>
                          <select
                            value={session.chapter}
                            onChange={e => {
                              const chap = e.target.value;
                              const chapObj = availableChapters.find(c => c.chapter === chap);
                              setGranularSessions(granularSessions.map(s => s.id === session.id ? {
                                ...s,
                                chapter: chap,
                                topic: chapObj ? chapObj.topics[0] : ''
                              } : s));
                            }}
                            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-purple-500"
                          >
                            {availableChapters.map(c => (
                              <option key={c.chapter} value={c.chapter}>{c.chapter}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-slate-300">Specific Topic</label>
                          <select
                            value={session.topic}
                            onChange={e => {
                              const top = e.target.value;
                              setGranularSessions(granularSessions.map(s => s.id === session.id ? { ...s, topic: top } : s));
                            }}
                            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-purple-500"
                          >
                            {currentChapObj?.topics.map(t => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        <div className="flex items-center justify-between bg-slate-900 border border-purple-900/60 p-3 rounded-xl">
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5" /> Study Based on Common Topics
                            </span>
                            <p className="text-[10px] text-slate-400">Syncs overlapping Grade 9-12 EUEE foundational topics automatically</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={session.studyCommonTopics}
                            onChange={e => {
                              const checked = e.target.checked;
                              setGranularSessions(granularSessions.map(s => s.id === session.id ? { ...s, studyCommonTopics: checked } : s));
                            }}
                            className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-slate-950 border-slate-700"
                          />
                        </div>
                      </div>

                      {session.studyCommonTopics && (
                        <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-xl p-3 space-y-1 text-xs text-emerald-300">
                          <span className="font-bold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Cross-Grade EUEE Common Topics Linked:
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-0.5 pl-1">
                            <li>Grade 12 Core Focus: <span className="font-semibold text-white">{session.topic}</span> ({(session.durationHours * 0.5).toFixed(1)} hrs)</li>
                            <li>Grade 11 Foundational Bridge: <span className="font-semibold text-white">Prerequisite Concepts in {session.subject}</span> ({(session.durationHours * 0.3).toFixed(1)} hrs)</li>
                            <li>Grade 9-10 Fundamental Drill: <span className="font-semibold text-white">Core Axioms & Formulas</span> ({(session.durationHours * 0.2).toFixed(1)} hrs)</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    playBeep();
                    const totalH = granularSessions.reduce((acc, s) => acc + s.durationHours, 0);
                    setLockdownHours(totalH);
                    const breakdown = granularSessions.map(s => ({ subject: s.subject, hours: s.durationHours }));
                    setSubjectBreakdown(breakdown);

                    let sched: Array<{ time: string; activity: string; type: 'study' | 'break' }> = [];
                    const now = new Date();
                    let currentH = now.getHours();
                    let currentM = now.getMinutes();

                    const formatClock = (h: number, m: number) => {
                      const h12 = h % 12 === 0 ? 12 : h % 12;
                      const ampm = h >= 12 ? 'PM' : 'AM';
                      const mm = m < 10 ? `0${m}` : `${m}`;
                      return `${h12}:${mm} ${ampm}`;
                    };

                    granularSessions.forEach(gs => {
                      let remH = gs.durationHours;
                      while (remH > 0) {
                        const blockH = Math.min(1.5, remH);
                        const studyMins = Math.round(blockH * 50);
                        const breakMins = Math.round(blockH * 10);

                        const startStr = formatClock(currentH, currentM);
                        currentM += studyMins;
                        currentH += Math.floor(currentM / 60);
                        currentM %= 60;
                        currentH %= 24;
                        const endStr = formatClock(currentH, currentM);

                        sched.push({
                          time: `${startStr} - ${endStr}`,
                          activity: `Deep Study: ${gs.subject} [${gs.chapter} -> ${gs.topic}] ${gs.studyCommonTopics ? '(Grade 9-12 Common Topics Linked)' : ''}`,
                          type: 'study'
                        });

                        const bStartStr = formatClock(currentH, currentM);
                        currentM += breakMins;
                        currentH += Math.floor(currentM / 60);
                        currentM %= 60;
                        currentH %= 24;
                        const bEndStr = formatClock(currentH, currentM);

                        sched.push({
                          time: `${bStartStr} - ${bEndStr} (Rest Break)`,
                          activity: `Scientific Rest: Hydration & eye relaxation (Beep Alert)`,
                          type: 'break'
                        });

                        remH -= blockH;
                      }
                    });

                    setAiGeneratedSchedule(sched);
                    setLockdownSecondsRemaining(totalH * 3600);
                    setIsLockdownActive(true);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl text-xs font-extrabold transition shadow-lg flex items-center gap-1.5"
                >
                  <Lock className="w-4 h-4 text-amber-300" />
                  <span>Lock In Granular Focus Marathon ({granularSessions.reduce((acc, s) => acc + s.durationHours, 0)} hrs)</span>
                </button>
              </div>
            </div>
          )}

          {/* Scientific Schedule & Subject Breakdown Preview */}
          {aiGeneratedSchedule.length > 0 && (
            <div className="bg-slate-900/90 border border-purple-900/60 rounded-2xl p-5 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-purple-900/50 pb-3">
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white">Scientifically Generated Study & Rest Schedule</h3>
                </div>
                <span className="text-xs text-purple-300 bg-purple-950 px-2.5 py-1 rounded-lg border border-purple-800">
                  Ultradian Rhythms & Pomodoro 50/10 Applied
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {subjectBreakdown.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/70 border border-purple-900/40 rounded-xl p-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{item.subject}</span>
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-purple-900/50 text-purple-200">
                      {item.hours} hr{item.hours > 1 ? 's' : ''}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {aiGeneratedSchedule.map((block, idx) => (
                  <div key={idx} className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                    block.type === 'study' ? 'bg-purple-950/40 border-purple-900/50 text-purple-200' : 'bg-emerald-950/30 border-emerald-900/40 text-emerald-300'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold">{block.time}</span>
                      <span>{block.activity}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-900">
                      {block.type === 'study' ? 'Focus' : 'Beep Rest'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-slate-900/80 border border-purple-900/50 rounded-xl p-3.5 text-xs text-purple-200/80 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Security & Sandbox Notice:</strong> EthioLearn Focus Lockdown operates securely inside your browser session to eliminate digital distractions. Per strict iOS & Android sandbox security guidelines, web applications cannot physically intercept system phone calls or terminate other native phone apps (such as TikTok); instead, this lockdown provides a powerful psychological and academic distraction-free zone for maximum exam success.
          </p>
        </div>
      </div>

      {/* FULLSCREEN FOCUS LOCKDOWN ACTIVE SHIELD */}
      {isLockdownActive && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white animate-fadeIn">
          <div className="max-w-2xl w-full bg-slate-900 border border-purple-800 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-8 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-bold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> Focus Lockdown Active
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Deep Study Marathon
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Subjects: <span className="text-white font-bold">{lockdownSubjectsInput}</span>
              </p>
            </div>

            <div className="relative z-10 py-6 bg-slate-950/60 border border-purple-900/60 rounded-2xl">
              <div className="text-5xl sm:text-7xl font-black font-mono text-emerald-400 tracking-wider">
                {formatTime(lockdownSecondsRemaining)}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-2">
                Time Remaining in Lockdown Session
              </div>
            </div>

            <div className="space-y-3 relative z-10 text-xs text-slate-300">
              <p className="leading-relaxed">
                Stay focused! Put your phone face-down and immerse yourself in your textbooks and practice questions.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 relative z-10 space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setIsLockdownActive(false)}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition shadow-md flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Minimize & Study Anywhere in App</span>
                </button>
              </div>

              <div className="text-xs text-slate-400 pt-2">
                To exit lockdown prematurely, press and hold the button below for 3 seconds:
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <button
                  onMouseDown={handleStartHoldingExit}
                  onMouseUp={handleCancelHoldingExit}
                  onMouseLeave={handleCancelHoldingExit}
                  onTouchStart={handleStartHoldingExit}
                  onTouchEnd={handleCancelHoldingExit}
                  className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition relative z-10 select-none"
                >
                  {exitHoldProgress > 0 ? `Exiting... ${exitHoldProgress}%` : 'Hold for 3s to End Lockdown'}
                </button>
                <div
                  className="absolute inset-y-0 left-0 bg-rose-600/40 transition-all duration-100"
                  style={{ width: `${exitHoldProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PLAN WIZARD OR ACTIVE DASHBOARD */}
      {!currentPlan ? (
        /* WIZARD FORM */
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl mx-auto">
          <div className="border-b border-slate-700 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              <span>Configure Your Custom Study Plan</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Tell us your target exam timeline, daily commitment, and priority subjects to build your day-by-day roadmap.
            </p>
          </div>

          <div className="space-y-5 text-sm">
            {/* 1. Target Examination */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                1. Target Examination Goal
              </label>
              <select
                value={examTarget}
                onChange={e => setExamTarget(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-500"
              >
                <option value="2024 / 2018 E.C. EUEE Entrance Examination">2024 / 2018 E.C. Ethiopian University Entrance Exam (EUEE)</option>
                <option value="2023 / 2017 E.C. EUEE Retake / Prep">2023 / 2017 E.C. EUEE Preparation</option>
                <option value="Grade 10 National Assessment">Grade 10 National Curriculum Assessment</option>
                <option value="Grade 11 Preparatory Foundation">Grade 11 Preparatory Mastery</option>
              </select>
            </div>

            {/* 2. Days & Daily Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Preparation Days Goal
                </label>
                <div className="flex gap-2">
                  {[15, 30, 60, 90].map(days => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setTotalDays(days)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition border ${
                        totalDays === days
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow'
                          : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Available Daily Time (Up to 10 Hr/Day)
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[1, 2, 4, 6, 8, 10].map(hrs => (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => setDailyHours(hrs)}
                      className={`py-2 rounded-xl text-xs font-bold transition border ${
                        dailyHours === hrs
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow'
                          : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                    >
                      {hrs} Hr/Day
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Long-Term Mode Switcher */}
            <div className="flex items-center justify-between bg-slate-900/90 border border-emerald-900/60 p-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Roadmap Planning Mode:</span>
              </div>
              <div className="flex gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setUseGranularLongTermMode(false)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    !useGranularLongTermMode ? 'bg-emerald-600 text-white shadow' : 'bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  Quick AI Auto-Plan
                </button>
                <button
                  type="button"
                  onClick={() => setUseGranularLongTermMode(true)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                    useGranularLongTermMode ? 'bg-indigo-600 text-white shadow' : 'bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Granular Chapters & Common Topics</span>
                </button>
              </div>
            </div>

            {useGranularLongTermMode && (
              <div className="space-y-4 bg-slate-900/90 border border-emerald-900/60 p-5 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-900/50 pb-3">
                  <h3 className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    <span>Long-Term Granular Curriculum & EUEE Common Topics</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleAutoPopulateHighYieldChapters}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow"
                      title="Auto-load high-yield chapters & common topics for key EUEE entrance exam subjects"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Auto-Populate High-Yield Exam Chapters</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setGranularLongTermSessions([
                          ...granularLongTermSessions,
                          {
                            id: 'lt-' + Date.now(),
                            subject: 'Physics',
                            durationHours: 2,
                            chapter: 'Chapter 1: Vector Analysis & Mechanics',
                            topic: '1.2 Kinematics in 2D',
                            studyCommonTopics: true
                          }
                        ]);
                      }}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Subject</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {granularLongTermSessions.map((session, index) => {
                    const availableChapters = CURRICULUM_CHAPS[session.subject] || CURRICULUM_CHAPS['Mathematics'];
                    const currentChapObj = availableChapters.find(c => c.chapter === session.chapter) || availableChapters[0];
                    return (
                      <div key={session.id} className="bg-slate-950 border border-emerald-900/50 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-indigo-300">Roadmap Subject #{index + 1}</span>
                          {granularLongTermSessions.length > 1 && (
                            <button
                              type="button"
                              onClick={() => setGranularLongTermSessions(granularLongTermSessions.filter(s => s.id !== session.id))}
                              className="text-rose-400 hover:text-rose-300 text-xs font-bold flex items-center gap-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Remove
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="space-y-1">
                            <label className="block text-[11px] font-bold text-slate-300">Subject</label>
                            <select
                              value={session.subject}
                              onChange={e => {
                                const sub = e.target.value;
                                const chaps = CURRICULUM_CHAPS[sub] || CURRICULUM_CHAPS['Mathematics'];
                                setGranularLongTermSessions(granularLongTermSessions.map(s => s.id === session.id ? {
                                  ...s,
                                  subject: sub,
                                  chapter: chaps[0].chapter,
                                  topic: chaps[0].topics[0]
                                } : s));
                              }}
                              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                            >
                              {Object.keys(CURRICULUM_CHAPS).map(sub => (
                                <option key={sub} value={sub}>{sub}</option>
                              ))}
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[11px] font-bold text-slate-300">Daily Commitment (Hrs)</label>
                            <select
                              value={session.durationHours}
                              onChange={e => {
                                const hrs = Number(e.target.value);
                                setGranularLongTermSessions(granularLongTermSessions.map(s => s.id === session.id ? { ...s, durationHours: hrs } : s));
                              }}
                              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                            >
                              {[1, 2, 3, 4, 5, 6].map(h => (
                                <option key={h} value={h}>{h} Hour{h > 1 ? 's' : ''} / Day</option>
                              ))}
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[11px] font-bold text-slate-300">Chapter</label>
                            <select
                              value={session.chapter}
                              onChange={e => {
                                const chap = e.target.value;
                                const chapObj = availableChapters.find(c => c.chapter === chap);
                                setGranularLongTermSessions(granularLongTermSessions.map(s => s.id === session.id ? {
                                  ...s,
                                  chapter: chap,
                                  topic: chapObj ? chapObj.topics[0] : ''
                                } : s));
                              }}
                              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                            >
                              {availableChapters.map(c => (
                                <option key={c.chapter} value={c.chapter}>{c.chapter}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                          <div className="space-y-1">
                            <label className="block text-[11px] font-bold text-slate-300">Starting Topic</label>
                            <select
                              value={session.topic}
                              onChange={e => {
                                const top = e.target.value;
                                setGranularLongTermSessions(granularLongTermSessions.map(s => s.id === session.id ? { ...s, topic: top } : s));
                              }}
                              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                            >
                              {currentChapObj?.topics.map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </div>

                          <div className="flex items-center justify-between bg-slate-900 border border-emerald-900/60 p-3 rounded-xl">
                            <div className="space-y-0.5">
                              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                                <Sparkles className="w-3.5 h-3.5" /> Study Based on Common Topics
                              </span>
                              <p className="text-[10px] text-slate-400">Syncs overlapping Grade 9-12 EUEE foundational topics automatically</p>
                            </div>
                            <input
                              type="checkbox"
                              checked={session.studyCommonTopics}
                              onChange={e => {
                                const checked = e.target.checked;
                                setGranularLongTermSessions(granularLongTermSessions.map(s => s.id === session.id ? { ...s, studyCommonTopics: checked } : s));
                              }}
                              className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-950 border-slate-700"
                            />
                          </div>
                        </div>

                        {session.studyCommonTopics && (
                          <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-xl p-3 space-y-1 text-xs text-emerald-300">
                            <span className="font-bold flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> Cross-Grade EUEE Common Topics Linked:
                            </span>
                            <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-0.5 pl-1">
                              <li>Grade 12 Core Mastery: <span className="font-semibold text-white">{session.topic}</span> ({(session.durationHours * 0.5).toFixed(1)} hrs/day)</li>
                              <li>Grade 11 Foundational Prerequisite Review: <span className="font-semibold text-white">Prerequisite Concepts in {session.subject}</span> ({(session.durationHours * 0.3).toFixed(1)} hrs/day)</li>
                              <li>Grade 9-10 Core Axiom & Formula Drills: <span className="font-semibold text-white">Core Axioms & Equations</span> ({(session.durationHours * 0.2).toFixed(1)} hrs/day)</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Priority Subjects Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                4. Priority Study Subjects ({selectedSubjects.length} selected)
              </label>

              {/* Quick Stream Preset Buttons */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] text-slate-400 font-semibold">Quick Stream Presets:</span>
                <button
                  type="button"
                  onClick={() => handleSelectStream('natural')}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition"
                >
                  🔬 Natural Science Stream
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectStream('social')}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition"
                >
                  ⚖️ Social Science Stream
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectStream('all')}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition"
                >
                  📚 All 8 Core Subjects
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Civics', 'SAT Reasoning', 'Economics'].map(subj => {
                  const isSelected = selectedSubjects.includes(subj);
                  return (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => handleToggleSubject(subj)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80 shadow-sm'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{subj}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Preferred Study Styles (Multi-Select) */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                5. Preferred Study Styles (Choose one or more)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
                {[
                  { id: 'Balanced', label: 'Balanced (Notes + Practice + Exam)' },
                  { id: 'Practice-Heavy', label: 'Practice Question Heavy' },
                  { id: 'Short-Notes', label: 'Textbook Short Notes & Flashcards' },
                  { id: 'Visual Flashcards & Mindmaps', label: 'Visual Flashcards & Concept Maps' },
                  { id: 'Interactive Past Exam Drills', label: 'Interactive Past Exam Drills' },
                  { id: 'Feynman Technique Deep Dives', label: 'Feynman Technique Deep Dives' },
                  { id: 'Pomodoro Deep Sprints', label: 'Pomodoro Deep Sprints (50/10)' }
                ].map(mode => {
                  const isChecked = selectedStyles.includes(mode.id);
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => handleToggleStyle(mode.id)}
                      className={`p-3 rounded-xl border text-left font-bold transition flex items-center justify-between ${
                        isChecked
                          ? 'bg-indigo-950/90 text-indigo-200 border-indigo-600 shadow'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{mode.label}</span>
                      {isChecked && <Check className="w-4 h-4 text-indigo-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Deep Student Personalization Parameters */}
            <div className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-4 space-y-4">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hyper-Personalized Schedule Calibration (No Meal / School Overlaps)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="block font-semibold text-slate-300">School Attendance Status</label>
                  <select
                    value={hasSchool ? 'yes' : 'no'}
                    onChange={e => setHasSchool(e.target.value === 'yes')}
                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 font-semibold focus:outline-none focus:border-emerald-500"
                  >
                    <option value="yes">Attending High School / Prep (Block school hours)</option>
                    <option value="no">Full-Time Independent Study / Homeschooled</option>
                  </select>
                </div>

                {hasSchool && (
                  <div className="space-y-1">
                    <label className="block font-semibold text-slate-300">School Return Home Time</label>
                    <input
                      type="text"
                      value={schoolReturnTime}
                      onChange={e => setSchoolReturnTime(e.target.value)}
                      placeholder="e.g. 15:30 (3:30 PM)"
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className="block font-semibold text-slate-300">Peak Daily Availability Window</label>
                  <select
                    value={availabilityWindow}
                    onChange={e => setAvailabilityWindow(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 font-semibold focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Evening & Night">Evening & Night (6:00 PM - 11:00 PM)</option>
                    <option value="Morning & Afternoon">Morning & Afternoon (8:00 AM - 4:00 PM)</option>
                    <option value="Early Morning Focus">Early Morning Focus (5:00 AM - 9:00 AM)</option>
                    <option value="Flexible All Day">Flexible All Day</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-semibold text-slate-300">Weekend Availability</label>
                  <select
                    value={weekendAvailable}
                    onChange={e => setWeekendAvailable(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 font-semibold focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Full Weekend Immersion">Full Weekend Immersion (Sat & Sun)</option>
                    <option value="Saturday Only">Saturday Only (Sunday Rest)</option>
                    <option value="Sunday Only">Sunday Only (Saturday Rest)</option>
                    <option value="Light Weekend Review">Light Weekend Review Only</option>
                  </select>
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="block font-semibold text-slate-300">Meal Times (Protected Rest Windows)</label>
                  <input
                    type="text"
                    value={mealTimes}
                    onChange={e => setMealTimes(e.target.value)}
                    placeholder="e.g. Breakfast 7:30, Lunch 13:00, Dinner 20:00 (No study overlap)"
                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 font-semibold focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Plan Generation & Schedule Preview Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleMakeCustomPlanForMe}
                className="w-full sm:w-1/2 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-xs sm:text-sm font-bold transition shadow-md flex items-center justify-center gap-2"
                title="Automatically calculate daily schedule breakdown with 50m study and 10m rest breaks"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Make Plan for Me (Auto-Balance Schedule)</span>
              </button>
              <button
                type="button"
                onClick={generatePlan}
                className="w-full sm:w-1/2 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white rounded-2xl text-xs sm:text-sm font-extrabold transition shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Generate Smart AI Study Roadmap</span>
              </button>
            </div>

            {/* Custom Plan Schedule & Ultradian Rhythm Preview */}
            {customPlanSchedulePreview.length > 0 && (
              <div className="bg-slate-900/95 border border-emerald-900/60 rounded-2xl p-5 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-emerald-900/50 pb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
                      Custom Plan Ultradian Rhythm Preview (50m Study / 10m Rest Intervals)
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50">
                    {customPlanSchedulePreview.filter(s => s.type === 'study').length} Study Blocks • Audio Beep Alerts
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs max-h-80 overflow-y-auto pr-1">
                  {customPlanSchedulePreview.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                        item.type === 'study'
                          ? 'bg-slate-950 border-emerald-900/60 text-slate-200'
                          : 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="font-mono text-[11px] font-bold text-slate-400 block">{item.time}</span>
                        <p className="font-semibold text-xs leading-snug">{item.activity}</p>
                      </div>
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                          item.type === 'study' ? 'bg-indigo-900/60 text-indigo-300 border border-indigo-700' : 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ACTIVE PLAN DASHBOARD */
        <div className="space-y-6">
          {/* Progress Overview Card */}
          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Active Study Plan
                </span>
                <h2 className="text-xl font-extrabold text-white mt-0.5">
                  {currentPlan.exam_target}
                </h2>
                <div className="text-xs text-slate-300 mt-1 flex flex-wrap items-center gap-3">
                  <span>📅 {currentPlan.total_days} Days Horizon</span>
                  <span>⏱️ {currentPlan.daily_hours} Hours / Day</span>
                  <span>📚 {currentPlan.priority_subjects.join(', ')}</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-emerald-400 font-mono">
                  {completionPercentage}%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {completedTaskCount} of {totalTaskCount} tasks completed
                </div>
              </div>
            </div>

            {/* Big Progress Bar */}
            <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Day Navigation Tabs */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-slate-300 uppercase tracking-wider">Select Study Day:</span>
              <span>Showing tasks for Day {activeDayFilter}</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {Array.from({ length: currentPlan.total_days }).map((_, idx) => {
                const dayNum = idx + 1;
                const dayTasks = currentPlan.tasks.filter(t => t.day === dayNum);
                const isCompleted = dayTasks.length > 0 && dayTasks.every(t => t.completed);
                const isSelected = activeDayFilter === dayNum;

                return (
                  <button
                    key={dayNum}
                    onClick={() => setActiveDayFilter(dayNum)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 border ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                        : isCompleted
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <span>Day {dayNum}</span>
                    {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Day Daily Micro-Tasks */}
          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Day {activeDayFilter} Scheduled Tasks</span>
              </h3>
              <span className="text-xs text-slate-400 font-medium">
                {activeDayTasks.filter(t => t.completed).length} / {activeDayTasks.length} Done
              </span>
            </div>

            <div className="space-y-3">
              {activeDayTasks.map(task => (
                <div
                  key={task.id}
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`p-4 rounded-xl border transition cursor-pointer flex items-start gap-3.5 ${
                    task.completed
                      ? 'bg-slate-900/60 border-emerald-800/50 text-slate-400 opacity-80'
                      : 'bg-slate-900 border-slate-700 hover:border-slate-600 text-white'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center mt-0.5 transition ${
                      task.completed
                        ? 'bg-emerald-600 text-white'
                        : 'border-2 border-slate-600 text-transparent hover:border-emerald-400'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        task.action_type === 'READING' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800' :
                        task.action_type === 'FLASHCARD' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                        task.action_type === 'PRACTICE' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                        'bg-purple-950 text-purple-300 border border-purple-800'
                      }`}>
                        {task.action_type.replace('_', ' ')}
                      </span>
                      <span className="text-xs font-bold text-slate-300">
                        {task.subject_name} • {task.topic_title}
                      </span>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${task.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                      {task.details}
                    </p>
                  </div>

                  {/* Quick Action Button depending on task type */}
                  {task.action_type === 'FLASHCARD' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('flashcards');
                      }}
                      className="px-2.5 py-1 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 rounded-lg text-xs font-semibold transition shrink-0"
                    >
                      Open Flashcards
                    </button>
                  )}
                  {task.action_type === 'PRACTICE' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('practice-topics');
                      }}
                      className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 rounded-lg text-xs font-semibold transition shrink-0"
                    >
                      Practice Questions
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunchTaskLockdown(task);
                    }}
                    className="px-2.5 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 rounded-lg text-xs font-bold transition shrink-0 flex items-center gap-1"
                    title="Lock in this subject and topic with audio timer and focus shield"
                  >
                    <Lock className="w-3 h-3 text-amber-300" />
                    <span>Focus Lockdown</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
