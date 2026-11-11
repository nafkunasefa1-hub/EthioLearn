import React, { useState, useEffect } from 'react';
import {
  Heart,
  Globe,
  Sparkles,
  GraduationCap,
  Award,
  Users,
  ShieldCheck,
  CheckCircle2,
  Search,
  MessageSquare,
  Gift,
  ArrowRight,
  TrendingUp,
  Share2
} from 'lucide-react';
import { PayPalCheckoutButton } from '../components/PayPalCheckoutButton';
import { PayPalCertificateModal, CertificateData } from '../components/PayPalCertificateModal';

interface SponsorPortalProps {
  onNavigate?: (route: string, params?: Record<string, any>) => void;
  initialStudentId?: string;
}

interface ScholarCandidate {
  id: string;
  name: string;
  grade: string;
  stream: string;
  school: string;
  city: string;
  streak: number;
  story: string;
  targetMajor: string;
  neededPlan: string;
  price: string;
}

export const SponsorPortal: React.FC<SponsorPortalProps> = ({ onNavigate, initialStudentId }) => {
  // Candidate pool of students needing diaspora sponsorship
  const candidateScholars: ScholarCandidate[] = [
    {
      id: 'usr-student-bethlehem',
      name: 'Bethlehem Tsegaye',
      grade: 'Grade 12',
      stream: 'Natural Science',
      school: 'Menelik II Secondary School',
      city: 'Addis Ababa',
      streak: 14,
      story: 'Aspiring Biomedical Engineer. Scored 92% on practice chemistry and physics entrance mock exams.',
      targetMajor: 'Biomedical Engineering',
      neededPlan: 'Full 12th Grade Entrance Exam & AI Tutor Pass',
      price: '4.99'
    },
    {
      id: 'usr-student-dawit',
      name: 'Dawit Alemayehu',
      grade: 'Grade 12',
      stream: 'Natural Science',
      school: 'Bahir Dar Comprehensive High',
      city: 'Bahir Dar',
      streak: 19,
      story: 'Ranked top of his class in Mathematics. Needs offline AI tutoring and national exam solutions.',
      targetMajor: 'Software & Electrical Engineering',
      neededPlan: 'Full 12th Grade Entrance Exam & AI Tutor Pass',
      price: '4.99'
    },
    {
      id: 'usr-student-hiwot',
      name: 'Hiwot Mekonnen',
      grade: 'Grade 11',
      stream: 'Social Science',
      school: 'Tabor Comprehensive Secondary',
      city: 'Hawassa',
      streak: 8,
      story: 'Passionate about Economics & History. Aims to join Addis Ababa University School of Law.',
      targetMajor: 'International Law & Economics',
      neededPlan: 'Grade 11-12 Social Stream All-Access',
      price: '4.99'
    },
    {
      id: 'usr-student-group-adama',
      name: 'Adama STEM Study Circle (3 Students)',
      grade: 'Grade 12',
      stream: 'Natural Science',
      school: 'Adama No. 1 Secondary School',
      city: 'Adama (Nazret)',
      streak: 22,
      story: 'Three collaborative peers sharing one phone to solve EUEE Physics derivations and Biology modules.',
      targetMajor: 'Medicine & Agricultural Engineering',
      neededPlan: '3-Student STEM Scholarship Pack',
      price: '14.99'
    }
  ];

  const [selectedScholar, setSelectedScholar] = useState<ScholarCandidate>(
    candidateScholars.find(c => c.id === initialStudentId) || candidateScholars[0]
  );

  const [customStudentId, setCustomStudentId] = useState('');
  const [customStudentName, setCustomStudentName] = useState('');
  const [useCustomStudent, setUseCustomStudent] = useState(false);

  const [sponsorName, setSponsorName] = useState('');
  const [sponsorEmail, setSponsorEmail] = useState('');
  const [sponsorMessage, setSponsorMessage] = useState('Proud of your dedication! Keep striving for academic excellence.');
  const [selectedTier, setSelectedTier] = useState<'individual' | 'group' | 'classroom'>('individual');

  const [sponsorshipStats, setSponsorshipStats] = useState<{
    total_sponsored_students: number;
    total_usd_funded: number;
    recent_sponsors: any[];
  }>({
    total_sponsored_students: 45,
    total_usd_funded: 268.49,
    recent_sponsors: []
  });

  const [activeCertificate, setActiveCertificate] = useState<CertificateData | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  // Fetch recent sponsorships
  useEffect(() => {
    fetch('/api/paypal/sponsorships')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.total_sponsored_students === 'number') {
          setSponsorshipStats(data);
        }
      })
      .catch(() => {});
  }, []);

  const activeAmount = useCustomStudent
    ? (selectedTier === 'individual' ? '4.99' : selectedTier === 'group' ? '14.99' : '24.99')
    : selectedScholar.price;

  const activePlanName = useCustomStudent
    ? (selectedTier === 'individual' ? 'Student All-Access Pass' : selectedTier === 'group' ? '3-Student Study Group Bundle' : 'Classroom 10-Scholar Pack')
    : selectedScholar.neededPlan;

  const targetStudentId = useCustomStudent
    ? (customStudentId.trim() || 'usr-custom-sponsored')
    : selectedScholar.id;

  const targetStudentName = useCustomStudent
    ? (customStudentName.trim() || 'Sponsored Student')
    : selectedScholar.name;

  return (
    <div className="flex-1 bg-slate-950 text-slate-100 min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-8">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-amber-950/40 border border-indigo-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Diaspora Giving</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                <span>PayPal AI Hackathon Edition</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Sponsor an Ethiopian Scholar with PayPal
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with high school students in Ethiopia. Your micro-sponsorship unlocks AI-guided national exam tutoring, 59 curriculum textbooks, and interactive derivations — helping underprivileged students pass their Ethiopian University Entrance Examinations (EUEE).
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-indigo-500/20">
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Scholars Sponsored</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400">
                {sponsorshipStats.total_sponsored_students}+
              </span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Funded (USD)</span>
              <span className="text-xl sm:text-2xl font-black text-indigo-400">
                ${sponsorshipStats.total_usd_funded}
              </span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Scholarship Cost</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400">
                $4.99 <span className="text-xs text-slate-400 font-normal">/ lifetime</span>
              </span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Global Payment</span>
              <span className="text-xl sm:text-2xl font-black text-sky-400">
                PayPal <span className="text-xs text-slate-400 font-normal">Instant</span>
              </span>
            </div>
          </div>
        </div>

        {/* Selection Tabs: Pick a Candidate or Enter a Relative's ID */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-2">
          <div className="flex gap-2">
            <button
              onClick={() => setUseCustomStudent(false)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                !useCustomStudent
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Verified High School Scholars</span>
            </button>
            <button
              onClick={() => setUseCustomStudent(true)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                useCustomStudent
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Sponsor a Relative / Custom ID</span>
            </button>
          </div>

          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Goes Directly to Student Digital Access</span>
          </span>
        </div>

        {/* PURCHASING POWER PARITY & GLOBAL IMPACT CALCULATOR */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Purchasing Power Parity (PPP) Impact Multiplier</span>
              </span>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>How Far Does $4.99 USD Go in Ethiopia?</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
              100x Educational Value
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-left">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">In the US, Europe & Canada:</span>
              <div className="text-lg font-bold text-slate-200">☕ 1 Iced Latte or Coffee</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                A simple routine small purchase that is consumed in 20 minutes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-1.5">
              <span className="text-[11px] font-bold text-emerald-400 block uppercase tracking-wider">In Ethiopia via PayPal:</span>
              <div className="text-lg font-bold text-emerald-300">🎓 1 Full Year of Learning & Exam Prep</div>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Funds 59 official textbooks, 73 national entrance exams, and 1,200 AI Tutor questions.
              </p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Scholar Selection or Form */}
          <div className="lg:col-span-7 space-y-4">
            {!useCustomStudent ? (
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Select a High-Yield Student to Support:
                </span>

                <div className="space-y-3">
                  {candidateScholars.map(scholar => {
                    const isSelected = selectedScholar.id === scholar.id;
                    return (
                      <div
                        key={scholar.id}
                        onClick={() => setSelectedScholar(scholar)}
                        className={`p-5 rounded-3xl border transition cursor-pointer relative ${
                          isSelected
                            ? 'bg-indigo-950/40 border-indigo-500 shadow-xl shadow-indigo-950/50'
                            : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-black text-white text-base">{scholar.name}</h3>
                              <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                                {scholar.grade} • {scholar.stream}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400">
                              {scholar.school} • {scholar.city}, Ethiopia
                            </p>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-lg font-black text-amber-400 block">${scholar.price}</span>
                            <span className="text-[10px] text-slate-400 font-mono">PayPal USD</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 mt-3 leading-relaxed bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80">
                          "{scholar.story}"
                        </p>

                        <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                          <span className="text-[11px] text-indigo-300 font-semibold">
                            Goal: <strong className="text-white">{scholar.targetMajor}</strong>
                          </span>
                          <span className="text-[11px] text-emerald-400 font-mono">
                            🔥 {scholar.streak}-Day Study Streak
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Custom Relative or Student ID Form */
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Gift className="w-4 h-4 text-indigo-400" />
                    <span>Sponsor a Sibling, Relative, or Local Student</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Enter the student's registered phone number or ID in Ethiopia. Once paid via PayPal, their account unlocks automatically.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Student Phone Number or ID in Ethiopia:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +251911234567 or usr-1234"
                      value={customStudentId}
                      onChange={(e) => setCustomStudentId(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Student Full Name:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Abebe Bikila"
                      value={customStudentName}
                      onChange={(e) => setCustomStudentName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Select Sponsorship Tier:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'individual', label: '1 Scholar', price: '$4.99', desc: 'Full Lifetime Pass' },
                        { id: 'group', label: 'Study Group', price: '$14.99', desc: '3 Students' },
                        { id: 'classroom', label: 'Class Pack', price: '$24.99', desc: '10 Students' }
                      ].map(tier => (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setSelectedTier(tier.id as any)}
                          className={`p-3 rounded-2xl border text-center transition ${
                            selectedTier === tier.id
                              ? 'bg-indigo-600/20 border-indigo-500 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="font-bold text-xs block">{tier.label}</span>
                          <span className="text-sm font-black text-amber-300 block my-0.5">{tier.price}</span>
                          <span className="text-[10px] text-slate-400 block">{tier.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Checkout & Sponsor Message Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl sticky top-6">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">
                    Sponsorship Checkout
                  </span>
                  <h3 className="text-base font-black text-white">
                    {targetStudentName}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-400">${activeAmount}</span>
                  <span className="text-[10px] text-slate-400 block">USD Total</span>
                </div>
              </div>

              {/* Donor Note */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Your Name or Organization (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Aunt Helen (Washington D.C.)"
                    value={sponsorName}
                    onChange={(e) => setSponsorName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Your Email (for PayPal Tax Receipt):
                  </label>
                  <input
                    type="email"
                    placeholder="donor@example.com"
                    value={sponsorEmail}
                    onChange={(e) => setSponsorEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Encouragement Message to Student:
                  </label>
                  <textarea
                    rows={2}
                    value={sponsorMessage}
                    onChange={(e) => setSponsorMessage(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* PayPal Smart Buttons */}
              <div className="pt-2 border-t border-slate-800">
                <PayPalCheckoutButton
                  amount={activeAmount}
                  currency="USD"
                  planId="diaspora_sponsorship"
                  planName={activePlanName}
                  studentId={targetStudentId}
                  studentName={targetStudentName}
                  isSponsorship={true}
                  sponsorName={sponsorName || 'Diaspora Supporter'}
                  sponsorEmail={sponsorEmail}
                  sponsorMessage={sponsorMessage}
                  onSuccess={(capture) => {
                    // Refresh metrics
                    setSponsorshipStats(prev => ({
                      ...prev,
                      total_sponsored_students: prev.total_sponsored_students + 1,
                      total_usd_funded: Math.round((prev.total_usd_funded + parseFloat(activeAmount)) * 100) / 100
                    }));

                    // Generate official certificate
                    const cert: CertificateData = {
                      certificateId: `ETH-PP-2026-${Math.floor(10000 + Math.random() * 90000)}`,
                      sponsorName: sponsorName || 'Global Diaspora Supporter',
                      sponsorEmail: sponsorEmail || '',
                      studentName: targetStudentName,
                      studentGrade: selectedScholar?.grade || 'Grade 12 Natural Science',
                      studentSchool: selectedScholar?.school || 'Ethiopian National Secondary School',
                      amountUsd: activeAmount,
                      planName: activePlanName,
                      orderId: capture?.id || `ORD-${Date.now()}`,
                      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                      sponsorMessage: sponsorMessage || 'Wishing you the highest score on the EUEE national exams!'
                    };
                    setActiveCertificate(cert);
                    setShowCertificate(true);
                  }}
                />
              </div>
            </div>

            {/* Recent Sponsors Wall */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Recent Global Sponsors</span>
              </h4>

              <div className="space-y-2">
                {sponsorshipStats.recent_sponsors.slice(0, 3).map((sp: any) => (
                  <div
                    key={sp.id}
                    onClick={() => {
                      setActiveCertificate({
                        certificateId: `ETH-PP-2026-${sp.id ? sp.id.slice(-5) : '77291'}`,
                        sponsorName: sp.payer_name || 'Diaspora Donor',
                        sponsorEmail: sp.payer_email,
                        studentName: sp.student_name || 'Ethiopian Scholar',
                        studentGrade: sp.grade || 'Grade 12',
                        studentSchool: 'Ethiopian National Secondary School',
                        amountUsd: sp.amount || '4.99',
                        planName: 'National Exam & AI Tutor Pass',
                        orderId: sp.paypal_order_id || 'SANDBOX-VERIFIED',
                        date: sp.timestamp ? new Date(sp.timestamp).toLocaleDateString() : 'November 2026',
                        sponsorMessage: sp.sponsor_message
                      });
                      setShowCertificate(true);
                    }}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-amber-500/50 cursor-pointer text-xs space-y-1 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-indigo-300 group-hover:text-amber-300 transition">{sp.payer_name}</span>
                      <span className="font-mono font-bold text-emerald-400">${sp.amount} USD</span>
                    </div>
                    <p className="text-[11px] text-slate-400 italic">"{sp.sponsor_message || 'Best wishes for your education!'}"</p>
                    <div className="text-[10px] text-slate-500 flex items-center justify-between">
                      <span>Sponsored: {sp.student_name}</span>
                      <span className="text-[9px] text-amber-400/80 group-hover:underline">View Certificate &rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Official Certificate Modal */}
      <PayPalCertificateModal
        isOpen={showCertificate}
        onClose={() => setShowCertificate(false)}
        certificate={activeCertificate}
      />
    </div>
  );
};
