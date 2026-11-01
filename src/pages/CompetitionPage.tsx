import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Trophy,
  Award,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Flame,
  Search,
  Filter,
  Sparkles,
  ChevronRight,
  RotateCcw,
  Zap,
  Medal,
  Crown,
  HelpCircle
} from 'lucide-react';
import { ExamQuestion } from '../types';
import { FormattedQuestionText } from '../components/FormattedQuestionText';

interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  phone_masked: string;
  region: string;
  school: string;
  grade: string;
  score: number;
  total_questions: number;
  time_seconds: number;
  badge: string;
  avatar_bg: string;
}

const SAMPLE_WEEKLY_QUESTIONS: ExamQuestion[] = [
  {
    id: 'comp-q1',
    exam_id: 'weekly-cup-43',
    question_number: 1,
    question_text: 'According to Faraday\'s second law of electrolysis, when the same quantity of electricity is passed through different electrolytes in series, the masses of substances deposited at electrodes are proportional to their:',
    option_a: 'Atomic numbers',
    option_b: 'Equivalent masses (chemical equivalents)',
    option_c: 'Electronegativity values',
    option_d: 'Standard reduction potentials',
    correct_answer: 'B',
    explanation: 'Faraday\'s second law states that mass deposited is directly proportional to equivalent mass (E = Molar Mass / Valency).',
    difficulty: 'Medium'
  },
  {
    id: 'comp-q2',
    exam_id: 'weekly-cup-43',
    question_number: 2,
    question_text: 'An object starts from rest and moves with uniform acceleration of 4 m/s² along a straight line. What is the distance covered by the object in the 5th second of its motion?',
    option_a: '50 m',
    option_b: '18 m',
    option_c: '25 m',
    option_d: '32 m',
    correct_answer: 'B',
    explanation: 'Distance in n-th second: sₙ = u + ½a(2n − 1) = 0 + ½(4)(2(5) − 1) = 2(9) = 18 m.',
    difficulty: 'Medium'
  },
  {
    id: 'comp-q3',
    exam_id: 'weekly-cup-43',
    question_number: 3,
    question_text: 'Which historical treaty signed on May 2, 1889 between Emperor Menelik II and Count Pietro Antonelli contained the controversial Article XVII that led to the Battle of Adwa?',
    option_a: 'Treaty of Wuchale',
    option_b: 'Treaty of Hewett (Adwa)',
    option_c: 'Treaty of Addis Ababa',
    option_d: 'Treaty of Berlin',
    correct_answer: 'A',
    explanation: 'The Treaty of Wuchale (May 2, 1889) contained Article XVII, which in the Italian text falsely made Ethiopia an Italian protectorate, while the Amharic text made diplomatic mediation optional.',
    difficulty: 'Easy'
  },
  {
    id: 'comp-q4',
    exam_id: 'weekly-cup-43',
    question_number: 4,
    question_text: 'If f(x) = ln(x² + 1), what is the derivative f\'(1)?',
    option_a: '1',
    option_b: '1/2',
    option_c: '2',
    option_d: 'ln(2)',
    correct_answer: 'A',
    explanation: 'Using the chain rule: f\'(x) = 2x / (x² + 1). At x = 1, f\'(1) = 2(1) / (1² + 1) = 2 / 2 = 1.',
    difficulty: 'Medium'
  },
  {
    id: 'comp-q5',
    exam_id: 'weekly-cup-43',
    question_number: 5,
    question_text: 'Which network topology requires N(N − 1) / 2 dedicated transmission cables to interconnect N computers, offering complete redundancy and fault tolerance?',
    option_a: 'Bus Topology',
    option_b: 'Star Topology',
    option_c: 'Ring Topology',
    option_d: 'Full Mesh Topology',
    correct_answer: 'D',
    explanation: 'Full Mesh topology connects every node directly to every other node, requiring N(N − 1) / 2 physical links.',
    difficulty: 'Easy'
  },
  {
    id: 'comp-q6',
    exam_id: 'weekly-cup-43',
    question_number: 6,
    question_text: 'During cellular respiration, in which cell organelle does the Krebs citric acid cycle and oxidative phosphorylation take place?',
    option_a: 'Ribosome',
    option_b: 'Mitochondria',
    option_c: 'Endoplasmic Reticulum',
    option_d: 'Golgi Apparatus',
    correct_answer: 'B',
    explanation: 'The citric acid cycle takes place in the mitochondrial matrix, and the electron transport chain occurs on the inner mitochondrial cristae.',
    difficulty: 'Easy'
  },
  {
    id: 'comp-q7',
    exam_id: 'weekly-cup-43',
    question_number: 7,
    question_text: 'Which traditional agro-ecological climatic zone in Ethiopia spans altitudes between 1,500m and 2,300m, supporting the densest rural population and teff production?',
    option_a: 'Bereha',
    option_b: 'Kolla',
    option_c: 'Woina Dega',
    option_d: 'Wurch',
    correct_answer: 'C',
    explanation: 'Woina Dega (1,500m - 2,300m) is temperate, has optimal rainfall, and supports the majority of Ethiopia\'s population and teff farming.',
    difficulty: 'Easy'
  },
  {
    id: 'comp-q8',
    exam_id: 'weekly-cup-43',
    question_number: 8,
    question_text: 'What is the oxidation state of Chromium in potassium dichromate (K₂Cr₂O₇)?',
    option_a: '+3',
    option_b: '+5',
    option_c: '+6',
    option_d: '+7',
    correct_answer: 'C',
    explanation: '2(+1) + 2(x) + 7(−2) = 0 → 2 + 2x − 14 = 0 → 2x = 12 → x = +6.',
    difficulty: 'Medium'
  },
  {
    id: 'comp-q9',
    exam_id: 'weekly-cup-43',
    question_number: 9,
    question_text: 'Which fundamental principle of the CIA Triad in computer security is compromised when an attacker performs a Distributed Denial-of-Service (DDoS) attack?',
    option_a: 'Confidentiality',
    option_b: 'Integrity',
    option_c: 'Availability',
    option_d: 'Authentication',
    correct_answer: 'C',
    explanation: 'DDoS attacks flood servers to deny legitimate users access, compromising system Availability.',
    difficulty: 'Easy'
  },
  {
    id: 'comp-q10',
    exam_id: 'weekly-cup-43',
    question_number: 10,
    question_text: 'If vectors A = 3i + 4j and B = 4i − 3j, what is the scalar (dot) product A · B?',
    option_a: '25',
    option_b: '0',
    option_c: '12',
    option_d: '-7',
    correct_answer: 'B',
    explanation: 'A · B = (3)(4) + (4)(−3) = 12 − 12 = 0. The two vectors are orthogonal (perpendicular).',
    difficulty: 'Medium'
  }
];

const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  { id: 'lb-1', rank: 1, name: 'Yohannes Tadesse', phone_masked: '+251 91 **** 42', region: 'Addis Ababa', school: 'Bole Secondary School', grade: 'Grade 12 - Natural', score: 10, total_questions: 10, time_seconds: 254, badge: 'National Champion', avatar_bg: 'from-amber-400 to-amber-600' },
  { id: 'lb-2', rank: 2, name: 'Selamawit Demisse', phone_masked: '+251 94 **** 88', region: 'Hawassa / Sidama', school: 'Tabor Comprehensive', grade: 'Grade 12 - Natural', score: 10, total_questions: 10, time_seconds: 289, badge: 'Gold Tier', avatar_bg: 'from-slate-300 to-slate-500' },
  { id: 'lb-3', rank: 3, name: 'Bekele Mengistu', phone_masked: '+251 92 **** 15', region: 'Adama / Oromia', school: 'Oromia Science Academy', grade: 'Grade 12 - Natural', score: 10, total_questions: 10, time_seconds: 312, badge: 'Bronze Tier', avatar_bg: 'from-amber-600 to-amber-800' },
  { id: 'lb-4', rank: 4, name: 'Abebech Kassa', phone_masked: '+251 93 **** 70', region: 'Bahir Dar / Amhara', school: 'Tana Haik Comprehensive', grade: 'Grade 12 - Natural', score: 9, total_questions: 10, time_seconds: 275, badge: 'Top 1% Ace', avatar_bg: 'from-emerald-500 to-teal-700' },
  { id: 'lb-5', rank: 5, name: 'Dawit Hailu', phone_masked: '+251 97 **** 33', region: 'Mekelle / Tigray', school: 'Atse Yohannes High', grade: 'Grade 11 - Natural', score: 9, total_questions: 10, time_seconds: 340, badge: 'Top 1% Ace', avatar_bg: 'from-indigo-500 to-purple-700' },
  { id: 'lb-6', rank: 6, name: 'Hanan Mohammed', phone_masked: '+251 98 **** 19', region: 'Dire Dawa', school: 'Sabian Secondary', grade: 'Grade 12 - Social', score: 9, total_questions: 10, time_seconds: 388, badge: 'Regional Star', avatar_bg: 'from-rose-500 to-pink-700' },
  { id: 'lb-7', rank: 7, name: 'Ephrem Tesfaye', phone_masked: '+251 90 **** 05', region: 'Addis Ababa', school: 'Menelik II Secondary', grade: 'Grade 12 - Natural', score: 8, total_questions: 10, time_seconds: 260, badge: 'Regional Star', avatar_bg: 'from-blue-500 to-cyan-700' },
  { id: 'lb-8', rank: 8, name: 'Marta Alemayehu', phone_masked: '+251 96 **** 44', region: 'Jimma / Oromia', school: 'Jimma Model High', grade: 'Grade 11 - Natural', score: 8, total_questions: 10, time_seconds: 315, badge: 'Regional Star', avatar_bg: 'from-teal-500 to-emerald-700' }
];

interface CompetitionPageProps {
  onNavigate?: (route: string, params?: Record<string, any>) => void;
}

export const CompetitionPage: React.FC<CompetitionPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [viewState, setViewState] = useState<'leaderboard' | 'contest' | 'results'>('leaderboard');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(INITIAL_LEADERBOARD);
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Active Contest State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(600); // 10 minutes in seconds
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [userScore, setUserScore] = useState<number>(0);
  const [timeTaken, setTimeTaken] = useState<number>(0);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [userRank, setUserRank] = useState<number | null>(null);

  // Load user previous submission from localStorage
  useEffect(() => {
    try {
      const savedResult = localStorage.getItem(`ethio_competition_wk43_${user?.id}`);
      if (savedResult) {
        const parsed = JSON.parse(savedResult);
        setUserScore(parsed.score);
        setTimeTaken(parsed.timeTaken);
        setUserRank(parsed.rank);
        setHasSubmitted(true);
      }
    } catch {}
  }, [user?.id]);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmitContest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining]);

  const handleStartContest = () => {
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setTimeRemaining(600);
    setTimerActive(true);
    setViewState('contest');
  };

  const handleSelectOption = (questionId: string, optionLetter: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionLetter }));
  };

  const handleSubmitContest = () => {
    setTimerActive(false);
    const elapsed = 600 - timeRemaining;
    setTimeTaken(elapsed);

    // Calculate score
    let score = 0;
    SAMPLE_WEEKLY_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correct_answer) {
        score += 1;
      }
    });
    setUserScore(score);

    // Compute rank placement on leaderboard
    const userEntry: LeaderboardEntry = {
      id: `user-${Date.now()}`,
      rank: 1, // temporary
      name: user?.full_name || 'My Student Profile',
      phone_masked: user?.phone_number ? user.phone_number.slice(0, 6) + ' **** ' + user.phone_number.slice(-2) : '+251 99 **** 87',
      region: (user as any)?.region || 'Addis Ababa',
      school: 'Ethiopian Secondary',
      grade: user?.grade || 'Grade 12 - Natural',
      score,
      total_questions: SAMPLE_WEEKLY_QUESTIONS.length,
      time_seconds: elapsed,
      badge: score === 10 ? 'National Champion' : score >= 8 ? 'Gold Tier' : 'Active Contender',
      avatar_bg: 'from-emerald-500 to-teal-600'
    };

    const updated = [...leaderboard, userEntry].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.time_seconds - b.time_seconds;
    });

    const finalRanked = updated.map((item, idx) => ({ ...item, rank: idx + 1 }));
    setLeaderboard(finalRanked);

    const myPosition = finalRanked.findIndex(item => item.id === userEntry.id) + 1;
    setUserRank(myPosition);
    setHasSubmitted(true);

    // Save to localStorage
    try {
      localStorage.setItem(
        `ethio_competition_wk43_${user?.id}`,
        JSON.stringify({ score, timeTaken: elapsed, rank: myPosition })
      );
    } catch {}

    setViewState('results');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const filteredLeaderboard = leaderboard.filter(item => {
    const matchesRegion = selectedRegion === 'All' || item.region.toLowerCase().includes(selectedRegion.toLowerCase());
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.school.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="flex-1 bg-slate-950 text-slate-100 min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-6">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-indigo-950/60 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Week 43 Active Challenge</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Ends in 3d 14h 22m
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span>National EUEE Competition League</span>
                <Trophy className="w-6 h-6 text-amber-400" />
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Compete on 10 high-yield Ethiopian curriculum challenge questions provided weekly. 
                Win recognition across Addis Ababa, Oromia, Amhara, Sidama, and all regional directorates!
              </p>
            </div>

            {/* Quick Status / CTA */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-center space-y-2 min-w-[200px]">
              {hasSubmitted ? (
                <>
                  <div className="text-xs text-slate-400">Your Current Standing</div>
                  <div className="text-2xl font-black text-emerald-400 flex items-center justify-center gap-1.5">
                    <span>Rank #{userRank || 'Top 10'}</span>
                    <Medal className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-xs font-mono text-slate-300">
                    Score: {userScore}/10 ({userScore * 10}%) in {formatTime(timeTaken)}
                  </div>
                  <button
                    onClick={handleStartContest}
                    className="w-full mt-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-xl transition border border-slate-700 flex items-center justify-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake For Practice</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="text-xs text-slate-400">10 Questions • 10 Minutes</div>
                  <div className="text-lg font-bold text-white">Ready to Compete?</div>
                  <button
                    onClick={handleStartContest}
                    className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/25 transition flex items-center justify-center gap-1.5"
                  >
                    <Zap className="w-4 h-4 text-slate-950 fill-current" />
                    <span>Enter Competition</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* View Switcher: Leaderboard vs Contest vs Results */}
        {viewState === 'leaderboard' ? (
          <div className="space-y-6">
            {/* Top 3 Podium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 2nd Place */}
              {leaderboard[1] && (
                <div className="order-2 md:order-1 bg-slate-900/80 border border-slate-800 rounded-3xl p-5 text-center space-y-3 relative overflow-hidden">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-slate-300 to-slate-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg">
                    🥈
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">2nd Place</span>
                    <h3 className="font-extrabold text-white text-base">{leaderboard[1].name}</h3>
                    <p className="text-xs text-slate-400">{leaderboard[1].region}</p>
                  </div>
                  <div className="bg-slate-950/80 rounded-xl p-2.5 border border-slate-800 text-xs font-mono">
                    <span className="text-emerald-400 font-bold">{leaderboard[1].score}/10</span>
                    <span className="text-slate-500 mx-1.5">•</span>
                    <span className="text-slate-400">{formatTime(leaderboard[1].time_seconds)}</span>
                  </div>
                </div>
              )}

              {/* 1st Place Champion */}
              {leaderboard[0] && (
                <div className="order-1 md:order-2 bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/60 rounded-3xl p-6 text-center space-y-3 relative shadow-xl shadow-amber-500/10">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider flex items-center gap-1 shadow">
                    <Crown className="w-3 h-3 fill-current" />
                    <span>Weekly Leader</span>
                  </div>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-3xl shadow-xl shadow-amber-500/20">
                    🥇
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">National Champion</span>
                    <h3 className="font-extrabold text-white text-lg">{leaderboard[0].name}</h3>
                    <p className="text-xs text-slate-300">{leaderboard[0].region} • {leaderboard[0].school}</p>
                  </div>
                  <div className="bg-slate-950/90 rounded-xl p-3 border border-amber-500/30 text-xs font-mono">
                    <span className="text-emerald-400 font-bold text-sm">{leaderboard[0].score}/10 (100%)</span>
                    <span className="text-slate-500 mx-2">•</span>
                    <span className="text-amber-300 font-bold">{formatTime(leaderboard[0].time_seconds)}</span>
                  </div>
                </div>
              )}

              {/* 3rd Place */}
              {leaderboard[2] && (
                <div className="order-3 bg-slate-900/80 border border-slate-800 rounded-3xl p-5 text-center space-y-3 relative overflow-hidden">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-800 flex items-center justify-center text-white font-black text-xl shadow-lg">
                    🥉
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">3rd Place</span>
                    <h3 className="font-extrabold text-white text-base">{leaderboard[2].name}</h3>
                    <p className="text-xs text-slate-400">{leaderboard[2].region}</p>
                  </div>
                  <div className="bg-slate-950/80 rounded-xl p-2.5 border border-slate-800 text-xs font-mono">
                    <span className="text-emerald-400 font-bold">{leaderboard[2].score}/10</span>
                    <span className="text-slate-500 mx-1.5">•</span>
                    <span className="text-slate-400">{formatTime(leaderboard[2].time_seconds)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-3.5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-slate-400 ml-1" />
                <input
                  type="text"
                  placeholder="Search student or school name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-xs text-white placeholder-slate-500 focus:outline-none w-full"
                />
              </div>

              {/* Regional Filter Chips */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-slate-400 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Region:
                </span>
                {['All', 'Addis Ababa', 'Oromia', 'Amhara', 'Sidama', 'Tigray'].map(reg => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                      selectedRegion === reg
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            {/* Full Leaderboard Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Rank</th>
                      <th className="py-3 px-4">Student</th>
                      <th className="py-3 px-4">Region & School</th>
                      <th className="py-3 px-4 text-center">Score</th>
                      <th className="py-3 px-4 text-center">Time</th>
                      <th className="py-3 px-4 text-right">Badge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredLeaderboard.map((student) => {
                      const isMe = user?.full_name && student.name.toLowerCase() === user.full_name.toLowerCase();
                      return (
                        <tr
                          key={student.id}
                          className={`transition hover:bg-slate-800/40 ${isMe ? 'bg-emerald-500/10 font-bold' : ''}`}
                        >
                          <td className="py-3.5 px-4 font-mono font-bold text-sm">
                            {student.rank === 1 ? '🥇 1' : student.rank === 2 ? '🥈 2' : student.rank === 3 ? '🥉 3' : `#${student.rank}`}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <div className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${student.avatar_bg} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                                {student.name.charAt(0)}
                              </div>
                              <div>
                                <span className="font-bold text-white block">{student.name}</span>
                                <span className="text-[10px] text-slate-500 font-mono">{student.phone_masked}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="text-slate-300 block">{student.region}</span>
                            <span className="text-[10px] text-slate-500 block">{student.school}</span>
                          </td>
                          <td className="py-3.5 px-4 text-center font-mono">
                            <span className="text-emerald-400 font-bold">{student.score}</span>
                            <span className="text-slate-500">/{student.total_questions}</span>
                          </td>
                          <td className="py-3.5 px-4 text-center font-mono text-slate-300">
                            {formatTime(student.time_seconds)}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                              {student.badge}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : viewState === 'contest' ? (
          /* CONTEST TEST-TAKER MODE */
          <div className="space-y-6">
            {/* Contest Active Bar */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-amber-400">
                  Question {currentQIndex + 1} of {SAMPLE_WEEKLY_QUESTIONS.length}
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-xs text-slate-300">
                  Answered: {Object.keys(selectedAnswers).length}/{SAMPLE_WEEKLY_QUESTIONS.length}
                </span>
              </div>

              {/* Timer Pill */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950 border border-amber-500/40 text-amber-300 font-mono font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>{formatTime(timeRemaining)}</span>
              </div>

              <button
                onClick={handleSubmitContest}
                className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
              >
                Submit & Finish
              </button>
            </div>

            {/* Current Question Card */}
            {SAMPLE_WEEKLY_QUESTIONS[currentQIndex] && (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider">
                      Weekly Challenge Question #{currentQIndex + 1}
                    </span>
                    <span>1 Point</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                    <FormattedQuestionText text={SAMPLE_WEEKLY_QUESTIONS[currentQIndex].question_text} />
                  </h3>
                </div>

                {/* Options (A, B, C, D) */}
                <div className="space-y-2.5">
                  {[
                    { key: 'A', text: SAMPLE_WEEKLY_QUESTIONS[currentQIndex].option_a },
                    { key: 'B', text: SAMPLE_WEEKLY_QUESTIONS[currentQIndex].option_b },
                    { key: 'C', text: SAMPLE_WEEKLY_QUESTIONS[currentQIndex].option_c },
                    { key: 'D', text: SAMPLE_WEEKLY_QUESTIONS[currentQIndex].option_d }
                  ].map(opt => {
                    const isSelected = selectedAnswers[SAMPLE_WEEKLY_QUESTIONS[currentQIndex].id] === opt.key;
                    return (
                      <button
                        key={opt.key}
                        onClick={() => handleSelectOption(SAMPLE_WEEKLY_QUESTIONS[currentQIndex].id, opt.key)}
                        className={`w-full text-left p-4 rounded-2xl text-xs sm:text-sm font-medium transition flex items-center gap-3 border ${
                          isSelected
                            ? 'bg-emerald-500/20 text-emerald-200 border-emerald-500/60 shadow-md shadow-emerald-950'
                            : 'bg-slate-950/70 text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300'
                        }`}>
                          {opt.key}
                        </span>
                        <span className="flex-1"><FormattedQuestionText text={opt.text} /></span>
                      </button>
                    );
                  })}
                </div>

                {/* Question Navigator Dots */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQIndex === 0}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-semibold text-slate-200 rounded-xl transition"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    {SAMPLE_WEEKLY_QUESTIONS.map((q, idx) => {
                      const isAnswered = Boolean(selectedAnswers[q.id]);
                      const isCurrent = idx === currentQIndex;
                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQIndex(idx)}
                          className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition ${
                            isCurrent
                              ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400'
                              : isAnswered
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentQIndex(prev => Math.min(SAMPLE_WEEKLY_QUESTIONS.length - 1, prev + 1))}
                    disabled={currentQIndex === SAMPLE_WEEKLY_QUESTIONS.length - 1}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-semibold text-slate-200 rounded-xl transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* RESULTS & SOLUTIONS VIEW */
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-xl shadow-emerald-500/20">
                <Trophy className="w-8 h-8 fill-current" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Competition Finished!</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Your Weekly Results</h2>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                <div className="bg-slate-950 rounded-2xl p-3.5 border border-slate-800">
                  <div className="text-xs text-slate-400">Score</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">{userScore}/10</div>
                </div>

                <div className="bg-slate-950 rounded-2xl p-3.5 border border-slate-800">
                  <div className="text-xs text-slate-400">Time</div>
                  <div className="text-2xl font-black text-white font-mono">{formatTime(timeTaken)}</div>
                </div>

                <div className="bg-slate-950 rounded-2xl p-3.5 border border-slate-800">
                  <div className="text-xs text-slate-400">Leaderboard</div>
                  <div className="text-2xl font-black text-amber-400 font-mono">#{userRank || 'Top 10'}</div>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => setViewState('leaderboard')}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
                >
                  View Live Leaderboard
                </button>
              </div>
            </div>

            {/* Step-by-Step Question Review */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-white">Question Review & Solutions</h3>
              {SAMPLE_WEEKLY_QUESTIONS.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correct_answer;
                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/30'
                        : 'bg-rose-950/20 border-rose-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-slate-300">Question {idx + 1}</span>
                      {isCorrect ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1)
                        </span>
                      ) : (
                        <span className="text-rose-400 font-bold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect (Your answer: {userAns || 'None'})
                        </span>
                      )}
                    </div>

                    <div className="font-semibold text-white text-xs sm:text-sm mb-3">
                      <FormattedQuestionText text={q.question_text} />
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                      <div className="font-bold text-emerald-400">
                        Correct Answer: {q.correct_answer}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        <strong>Explanation:</strong> <FormattedQuestionText text={q.explanation} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
