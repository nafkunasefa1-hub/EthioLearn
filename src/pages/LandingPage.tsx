import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Sparkles,
  Award,
  Trophy,
  CalendarDays,
  Lock,
  Unlock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Play,
  Layers,
  FileCheck,
  Brain,
  Smartphone,
  Flame,
  Star,
  Users,
  Compass,
  ChevronRight,
  TrendingUp,
  Cpu,
  GraduationCap,
  HardDrive,
  Eye,
  Check,
  LogIn,
  KeyRound,
  Calculator,
  Dna,
  FlaskConical,
  HelpCircle,
  AlertTriangle,
  Volume2,
  Sliders,
  Send,
  Sparkle,
  Target,
  RefreshCw,
  Clock,
  CheckCheck,
  Copy,
  Languages,
  Check as CheckIcon,
  CreditCard,
  Building2,
  MessageSquare,
  QrCode,
  Flame as FireIcon
} from 'lucide-react';
import { MathMarkdownRenderer } from '../components/MathMarkdownRenderer';
import { InteractiveFloatingBubblesCanvas } from '../components/InteractiveFloatingBubblesCanvas';

interface LandingPageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
  onExploreDemo?: () => void;
}

// Particle Canvas for high-tech constellation / knowledge graph effect
const ConstellationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = ['#10b981', '#14b8a6', '#6366f1', '#f59e0b'];
    const particleCount = Math.min(36, Math.floor((width * height) / 22000));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.8 + 1.0,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let mouse = { x: -1000, y: -1000 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Connect to mouse if nearby
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(245, 158, 11, ${0.22 * (1 - mdist / 130)})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      // Draw and update particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
    />
  );
};

export const LandingPage: React.FC<LandingPageProps> = ({
  onGetStarted,
  onSignIn,
  onExploreDemo
}) => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<'textbooks' | 'exams' | 'ai_tutor' | 'competition' | 'retention'>('textbooks');
  const [interactiveSelectedAnswer, setInteractiveSelectedAnswer] = useState<string | null>(null);
  const [previewGrade, setPreviewGrade] = useState<'9' | '10' | '11' | '12'>('12');

  // Interactive Live AI Tutor Demo State
  const [activeTutorPromptIdx, setActiveTutorPromptIdx] = useState(0);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [displayedAiResponse, setDisplayedAiResponse] = useState('');
  const [showAmharicExplanation, setShowAmharicExplanation] = useState(false);
  const [hasCopiedSolution, setHasCopiedSolution] = useState(false);

  // Interactive Score Predictor State
  const [studyStream, setStudyStream] = useState<'natural' | 'social'>('natural');
  const [mockScorePercent, setMockScorePercent] = useState(78);
  const [studyHoursPerWeek, setStudyHoursPerWeek] = useState(14);

  // Mouse Glow Coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Curated prompts covering core secondary science & math with KaTeX formulas and bilingual explanations
  const aiPrompts = [
    {
      title: "Faraday's Second Law Formula & Derivation",
      category: 'Chemistry (Grade 12)',
      prompt: 'State Faraday’s 2nd Law of Electrolysis with the exact equation and an EUEE example.',
      answer: `Faraday’s Second Law states that when the identical quantity of electricity ($Q$) is passed through solutions of different electrolytes, the masses of substances liberated at the electrodes are directly proportional to their chemical equivalent weights ($E = M / n$):

$$\\frac{m_1}{m_2} = \\frac{E_1}{E_2} = \\frac{M_1 / n_1}{M_2 / n_2}$$

**Key Physical Variables:**
• $m_1, m_2$: Masses of deposited elements
• $M$: Molar mass ($\\text{g/mol}$)
• $n$: Number of electrons exchanged per ion (valence)

> **💡 EUEE Examiner Note:** In the 2018 E.C. national exam, questions tested cells in series: if $1.08\\text{ g}$ of $\\text{Ag}$ ($E = 108$) is deposited, then $\\text{Cu}$ from $\\text{CuSO}_4$ ($E = 63.5 / 2 = 31.75$) will deposit exactly $0.3175\\text{ g}$.`,
      amharicAnswer: `የፋራዳይ ሁለተኛው የኤሌክትሮላይሲስ ሕግ እንደሚገልጸው፡ ተመሳሳይ የኤሌክትሪክ መጠን ($Q$) በተለያዩ ኤሌክትሮላይቶች ውስጥ ሲያልፍ፣ በኤሌክትሮዶች ላይ የሚከማቹት ንጥረ ነገሮች ክብደት ከኬሚካላዊ አቻ ክብደታቸው ($E = M / n$) ጋር በቀጥታ ተመጣጣኝ ነው።

$$\\frac{m_1}{m_2} = \\frac{E_1}{E_2} = \\frac{M_1 / n_1}{M_2 / n_2}$$

**ዋና ዋና ተለዋዋጮች:**
• $m_1, m_2$: የተከማቹት ንጥረ ነገሮች ክብደት (በግራም)
• $M$: ሞላር ማስ ($\\text{g/mol}$)
• $n$: የቫሌንስ ኤሌክትሮኖች ብዛት

> **💡 የብሔራዊ ፈተና (EUEE) ማስታወሻ:** በ2018 ዓ.ም. ብሔራዊ ፈተና ላይ እንደተመለከተው፡ በሰንሰለት (in series) በተያያዙ ሴሎች ውስጥ $1.08\\text{ g}$ የብር ($\\text{Ag}$) ሲከማች፣ ከመዳብ ሰልፌት ($\\text{CuSO}_4$) የሚከማቸው የመዳብ መጠን በትክክል $0.3175\\text{ g}$ ይሆናል።`
    },
    {
      title: 'Limits & Derivatives Calculus Shortcut',
      category: 'Mathematics (Grade 12)',
      prompt: 'How to evaluate the limit of sin(3x)/tan(5x) as x approaches 0 instantly for EUEE?',
      answer: `Using the fundamental trigonometric limit property:

$$\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\tan(bx)} = \\frac{a}{b}$$

**Ordinary Step-by-Step Solution:**

**Step 1: Separate the fraction into two distinct factors**

$$\\frac{\\sin(3x)}{\\tan(5x)} = \\frac{\\sin(3x)}{x} \\times \\frac{x}{\\tan(5x)}$$

**Step 2: Balance constants to match the standard limit $\\lim_{u \\to 0}\\frac{\\sin(u)}{u} = 1$**

$$= 3 \\left(\\frac{\\sin(3x)}{3x}\\right) \\times \\frac{1}{5} \\left(\\frac{5x}{\\tan(5x)}\\right)$$

**Step 3: Evaluate each limit as $x \\to 0$**

Since $\\lim_{u \\to 0} \\frac{\\sin(u)}{u} = 1$ and $\\lim_{u \\to 0} \\frac{u}{\\tan(u)} = 1$:

$$= 3 \\cdot (1) \\times \\frac{1}{5} \\cdot (1)$$

$$= \\frac{3}{5}$$

---

> ⚡ **EUEE National Exam Speed Shortcut:**
> For small angles as $x \\to 0$:
> $\\sin(3x) \\approx 3x$ and $\\tan(5x) \\approx 5x$
>
> Therefore:
> $$\\frac{\\sin(3x)}{\\tan(5x)} \\approx \\frac{3x}{5x} = \\frac{3}{5}$$
>
> You can solve this in under 3 seconds in the national examination!`,
      amharicAnswer: `የትሪጎኖሜትሪክ ሊሚት መሠረታዊ ሕግን በመጠቀም፡

$$\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\tan(bx)} = \\frac{a}{b}$$

**ደረጃ በደረጃ ግልጽ ስሌት:**

**ደረጃ 1፡ ክፍለ-ቁጥሩን ወደ ሁለት የተለዩ ክፍሎች መክፈል**

$$\\frac{\\sin(3x)}{\\tan(5x)} = \\frac{\\sin(3x)}{x} \\times \\frac{x}{\\tan(5x)}$$

**ደረጃ 2፡ የሊሚት ቀመርን ለመጠቀም በ 3 እና 5 ማባዛት**

$$= 3 \\left(\\frac{\\sin(3x)}{3x}\\right) \\times \\frac{1}{5} \\left(\\frac{5x}{\\tan(5x)}\\right)$$

**ደረጃ 3፡ የሊሚት ዋጋዎችን መተካት ($x \\to 0$ ሲሆን)**

$\\lim_{u \\to 0} \\frac{\\sin(u)}{u} = 1$ እና $\\lim_{u \\to 0} \\frac{u}{\\tan(u)} = 1$ ስለሆኑ፡

$$= 3 \\cdot (1) \\times \\frac{1}{5} \\cdot (1)$$

$$= \\frac{3}{5}$$

---

> ⚡ **የብሔራዊ ፈተና ፈጣን ስልት:**
> አንግሎቹ ወደ ዜሮ ሲጠጉ ($x \\to 0$):
> $\\sin(3x) \\approx 3x$ እና $\\tan(5x) \\approx 5x$ ይሆናሉ
>
> ስለዚህ፡
> $$\\frac{\\sin(3x)}{\\tan(5x)} \\approx \\frac{3x}{5x} = \\frac{3}{5}$$
>
> በብሔራዊ ፈተና ላይ ይህንን በ 3 ሴኮንድ ውስጥ መመለስ ይቻላል!`
    },
    {
      title: 'Newtonian Friction & Inclined Planes',
      category: 'Physics (Grade 11)',
      prompt: 'What is the acceleration of a block sliding down an incline with kinetic friction coefficient μk?',
      answer: `Resolving forces along the inclined plane with angle $\\theta$:

1. Gravitational component parallel to incline: $F_{\\parallel} = m g \\sin\\theta$
2. Normal contact force perpendicular to incline: $N = m g \\cos\\theta$
3. Kinetic friction opposing motion: $f_k = \\mu_k N = \\mu_k m g \\cos\\theta$

Applying Newton’s Second Law ($F_{\\text{net}} = m a$):
$$m g \\sin\\theta - \\mu_k m g \\cos\\theta = m a$$

Canceling mass $m$ across all terms:
$$\\mathbf{a = g (\\sin\\theta - \\mu_k \\cos\\theta)}$$

> **📌 Critical Exam Condition:** The block slides with constant velocity ($a = 0$) exactly when $\\mu_k = \\tan\\theta$.`,
      amharicAnswer: `በተዳፋት ወለል (inclined plane) ላይ ያሉትን ኃይሎች በዲግሪ $\\theta$ ስንተነትን፡

1. ቁልቁል የሚስበው የስበት ኃይል ክፍል፡ $F_{\\parallel} = m g \\sin\\theta$
2. የወለሉ ቀጤ-ነክ ኃይል (Normal force)፡ $N = m g \\cos\\theta$
3. ግጭት (Kinetic friction)፡ $f_k = \\mu_k N = \\mu_k m g \\cos\\theta$

የኒውተንን ሁለተኛ ሕግ ($F_{\\text{net}} = m a$) ስንተገብር፡
$$m g \\sin\\theta - \\mu_k m g \\cos\\theta = m a$$

ማስ $m$ ን በሁለቱም በኩል በማጣፋት፡
$$\\mathbf{a = g (\\sin\\theta - \\mu_k \\cos\\theta)}$$

> **📌 ቁልፍ የፈተና ነጥብ:** እቃው ያለ ፍጥነት ለውጥ በቋሚ ፍጥነት ($a = 0$) የሚንሸራተተው $\\mu_k = \\tan\\theta$ በሚሆንበት ጊዜ ብቻ ነው።`
    },
    {
      title: 'Mendelian Dihybrid Cross Ratios',
      category: 'Biology (Grade 12)',
      prompt: 'What is the phenotypic ratio in a standard Mendelian dihybrid heterozygous cross (AaBb × AaBb)?',
      answer: `The expected phenotypic ratio is the classic **9 : 3 : 3 : 1** distribution under Mendel's Law of Independent Assortment:

• **9/16:** Both dominant traits ($A\\_B\\_$)
• **3/16:** First dominant, second recessive ($A\\_bb$)
• **3/16:** First recessive, second dominant ($aaB\\_$)
• **1/16:** Both recessive traits ($aabb$)

> **🧬 EUEE Warning:** If the two gene pairs are linked on the same chromosome with complete linkage (no crossing over), the ratio shifts from 9:3:3:1 into a parental 3:1 ratio!`,
      amharicAnswer: `በሜንዴል የነፃ መወራረስ ሕግ (Independent Assortment) መሠረት የሚጠበቀው ሬሾ **9 : 3 : 3 : 1** ነው፡

• **9/16:** ሁለቱም ገዢ (dominant) ባህሪያት ($A\\_B\\_$)
• **3/16:** አንደኛው ገዢ፣ ሁለተኛው ተገዢ ($A\\_bb$)
• **3/16:** አንደኛው ተገዢ፣ ሁለተኛው ገዢ ($aaB\\_$)
• **1/16:** ሁለቱም ተገዢ (recessive) ባህሪያት ($aabb$)

> **🧬 የፈተና ጥንቃቄ:** ሁለቱ ጂኖች በአንድ ክሮሞሶም ላይ ተጣምረው (linked) ከሆኑና ክሮሲንግ ኦቨር ካልተካሄደ፣ ሬሾው ከ 9:3:3:1 ወጥቶ ወደ 3:1 ይቀየራል!`
    }
  ];

  // Smooth typewriter effect without breaking math delimiters
  useEffect(() => {
    setIsAiTyping(true);
    const activeText = showAmharicExplanation
      ? aiPrompts[activeTutorPromptIdx].amharicAnswer
      : aiPrompts[activeTutorPromptIdx].answer;

    // Display formatted solution with instant smooth appearance to prevent broken LaTeX delimiters
    const timeout = setTimeout(() => {
      setDisplayedAiResponse(activeText);
      setIsAiTyping(false);
    }, 140);

    return () => clearTimeout(timeout);
  }, [activeTutorPromptIdx, showAmharicExplanation]);

  const handleCopySolution = () => {
    const textToCopy = showAmharicExplanation
      ? aiPrompts[activeTutorPromptIdx].amharicAnswer
      : aiPrompts[activeTutorPromptIdx].answer;
    navigator.clipboard.writeText(textToCopy);
    setHasCopiedSolution(true);
    setTimeout(() => setHasCopiedSolution(false), 2000);
  };

  // EUEE Projected Score Computation
  const calculatedEueeScore = Math.min(
    600,
    Math.round(mockScorePercent * 5.2 + Math.min(studyHoursPerWeek * 5.5, 90))
  );

  const getTargetPlacement = (score: number) => {
    if (score >= 560) return { uni: 'Addis Ababa University (AAU)', faculty: 'School of Medicine & Health Sciences / AAiT Top Honors', badge: 'Tier 1 Elite' };
    if (score >= 510) return { uni: 'Addis Ababa Institute of Technology (AAiT)', faculty: 'Software Engineering / Electrical & Computer', badge: 'Tier 1 Premier' };
    if (score >= 460) return { uni: 'Adama Science & Technology University (ASTU)', faculty: 'Applied Engineering & Natural Sciences', badge: 'National Competitive' };
    if (score >= 400) return { uni: 'Hawassa / Jimma / Bahir Dar Universities', faculty: 'Engineering, Computing & Health Disciplines', badge: 'Direct University Admit' };
    return { uni: 'Public University General Placement', faculty: 'Secondary Stream University Program', badge: 'Preparatory Stage' };
  };

  const placement = getTargetPlacement(calculatedEueeScore);

  const stats = [
    { label: 'Authentic EUEE Questions', value: '10,503+', detail: '2018 E.C. down to 2000s with verified step-by-step solutions', icon: Award, color: 'text-amber-400' },
    { label: 'Official Textbooks', value: '61 Books', detail: 'Grades 9–12 with authentic high-res scans & audio reader', icon: BookOpen, color: 'text-emerald-400' },
    { label: 'Multi-Key Gemini AI Pool', value: '11x Keys Pool', detail: 'High-throughput 275K+ requests/day for instant tutoring', icon: Sparkles, color: 'text-indigo-400' },
    { label: 'Active Ethiopian Students', value: '120,000+', detail: 'Across all Ethiopian regions preparing for top university seats', icon: Users, color: 'text-teal-400' }
  ];

  const subjectsByGrade: Record<string, { name: string; icon: any; color: string }[]> = {
    '12': [
      { name: 'Mathematics (Calculus & Vectors)', icon: Calculator, color: 'from-blue-600 to-indigo-700' },
      { name: 'Physics (Electromagnetism)', icon: Zap, color: 'from-amber-500 to-orange-600' },
      { name: 'Chemistry (Equilibrium & Organic)', icon: FlaskConical, color: 'from-emerald-500 to-teal-700' },
      { name: 'Biology (Genetics & Ecology)', icon: Dna, color: 'from-green-600 to-emerald-800' },
      { name: 'English (EUEE Mastery)', icon: BookOpen, color: 'from-purple-600 to-violet-800' },
      { name: 'SAT / Scholastic Aptitude', icon: Brain, color: 'from-rose-600 to-pink-700' }
    ],
    '11': [
      { name: 'Preparatory Mathematics', icon: Calculator, color: 'from-blue-600 to-indigo-700' },
      { name: 'Preparatory Physics', icon: Zap, color: 'from-amber-500 to-orange-600' },
      { name: 'Preparatory Chemistry', icon: FlaskConical, color: 'from-emerald-500 to-teal-700' },
      { name: 'Preparatory Biology', icon: Dna, color: 'from-green-600 to-emerald-800' },
      { name: 'Economics & Geography', icon: TrendingUp, color: 'from-cyan-600 to-blue-800' },
      { name: 'History & Civics', icon: ShieldCheck, color: 'from-amber-600 to-yellow-700' }
    ],
    '10': [
      { name: 'Grade 10 Foundation Math', icon: Calculator, color: 'from-blue-600 to-indigo-700' },
      { name: 'Grade 10 Physics', icon: Zap, color: 'from-amber-500 to-orange-600' },
      { name: 'Grade 10 Chemistry', icon: FlaskConical, color: 'from-emerald-500 to-teal-700' },
      { name: 'Grade 10 Biology', icon: Dna, color: 'from-green-600 to-emerald-800' },
      { name: 'Grade 10 Information Tech', icon: Cpu, color: 'from-sky-500 to-indigo-600' },
      { name: 'Grade 10 English & Amharic', icon: BookOpen, color: 'from-rose-500 to-red-700' }
    ],
    '9': [
      { name: 'Grade 9 Foundation Math', icon: Calculator, color: 'from-blue-600 to-indigo-700' },
      { name: 'Grade 9 General Physics', icon: Zap, color: 'from-amber-500 to-orange-600' },
      { name: 'Grade 9 Chemistry & Lab Safety', icon: FlaskConical, color: 'from-emerald-500 to-teal-700' },
      { name: 'Grade 9 Cell Biology', icon: Dna, color: 'from-green-600 to-emerald-800' },
      { name: 'Grade 9 IT & Computing', icon: Cpu, color: 'from-sky-500 to-indigo-600' },
      { name: 'Grade 9 Geography & Civics', icon: Compass, color: 'from-emerald-600 to-teal-800' }
    ]
  };

  const studentActivities = [
    { student: 'Abebe K.', city: 'Addis Ababa (Bole)', action: 'Scored 78/80 on 2018 EUEE Chemistry Round 1', time: '2m ago' },
    { student: 'Tewodros G.', city: 'Gondar', action: 'Mastered Unit 3: Electromagnetic Induction', time: '5m ago' },
    { student: 'Hiwot M.', city: 'Hawassa', action: 'Won Gold Medal in Weekly League #43 (100% precision)', time: '8m ago' },
    { student: 'Almaz B.', city: 'Adama', action: 'Unlocked 14-day streak on Daily Retention Gate', time: '12m ago' },
    { student: 'Nafkun Asefa (Admin)', city: 'Addis Ababa', action: 'Verified 42 step-by-step EUEE Math derivations (585/600)', time: 'Just now' }
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-emerald-500 selection:text-white flex flex-col overflow-x-hidden"
    >
      {/* Signature Interactive Floating Glass Bubbles with Repulsion & Shockwave Ripples */}
      <InteractiveFloatingBubblesCanvas />

      {/* Dynamic Constellation Particle Canvas */}
      <ConstellationCanvas />

      {/* Background Interactive Radial Glow Cursor */}
      <div
        className="pointer-events-none fixed -inset-px opacity-25 transition duration-300 z-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.16), transparent 80%)`,
        }}
      />

      {/* Subtle Mesh Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293718_1px,transparent_1px),linear-gradient(to_bottom,#1f293718_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Top Banner: Ethiopian National Inscription with Animated Shimmer */}
      <div className="relative z-10 bg-gradient-to-r from-emerald-950/95 via-slate-900/95 to-amber-950/95 border-b border-emerald-500/20 px-4 py-2 text-center text-xs font-medium text-emerald-300 flex items-center justify-center gap-2 overflow-hidden shadow-sm backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
        <span className="flex items-center gap-1.5 font-bold">
          <span>🇪🇹</span>
          <span className="text-amber-300 tracking-wide font-black">የኢትዮጵያ ዲጂታል ትምህርትና የመግቢያ ፈተና መድረክ</span>
        </span>
        <span className="hidden sm:inline text-slate-500">•</span>
        <span className="hidden sm:inline text-slate-300">
          Official Ethiopian Secondary (Grades 9–12) & EUEE University Entrance Portal
        </span>
        <span className="hidden lg:inline-flex items-center gap-1 ml-2 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] font-black">
          👑 Top Scorer: Nafkun Asefa (585/600 on EUEE)
        </span>
      </div>

      {/* Sticky Modern Glass Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#030712]/85 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-emerald-500/20">
            EL
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg">
                EthioLearn <span className="text-emerald-400">AI</span>
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                FDRE MoE
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
              Secondary Curriculum & National Entrance Examination Engine
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <a href="#tutor-terminal" className="hover:text-emerald-400 transition">AI Tutor Terminal</a>
          <a href="#score-calculator" className="hover:text-emerald-400 transition">Admission Calculator</a>
          <a href="#platform-architecture" className="hover:text-emerald-400 transition">Platform Overview</a>
          <a href="#pricing-plans" className="hover:text-amber-400 transition text-amber-300 font-bold">Plans & Pricing</a>
          <a href="#curriculum" className="hover:text-emerald-400 transition">Grades 9–12</a>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onSignIn}
            className="px-3.5 py-2 text-xs font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition flex items-center gap-1.5 shadow-sm"
          >
            <LogIn className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sign In</span>
          </button>
          <button
            onClick={onGetStarted}
            className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 hover:opacity-95 rounded-xl shadow-md shadow-emerald-500/20 transition flex items-center gap-1.5"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-10 pb-12 px-4 sm:px-8 max-w-6xl mx-auto w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Real 11-Key Gemini API Pool • 275,000 AI Queries / Day Active</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Master Ethiopian Secondary Curriculum & Dominate the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
            EUEE University Entrance Exam
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          The ultimate digital learning platform aligned 100% with the Federal Democratic Republic of Ethiopia Ministry of Education syllabus. Access all 61 textbooks, 10,503+ authentic past entrance exam questions with step-by-step KaTeX solutions, 3X AI prediction papers, and a 24/7 personal tutor.
        </p>

        {/* Primary Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onGetStarted}
            className="px-6 py-3 bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition flex items-center gap-2"
          >
            <span>Create Free Student Account</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <a
            href="#pricing-plans"
            className="px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-amber-300 hover:text-amber-200 border border-amber-500/30 rounded-xl text-sm font-bold transition flex items-center gap-2 shadow-sm"
          >
            <CreditCard className="w-4 h-4 text-amber-400" />
            <span>View Subscription Plans (from 0 Birr)</span>
          </a>

          <a
            href="#tutor-terminal"
            className="px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 rounded-xl text-sm font-semibold transition flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Try Live AI Math Tutor</span>
          </a>
        </div>

        {/* Real-time Student Activity Ticker */}
        <div className="mt-4 pt-2 border-t border-slate-800/60 max-w-4xl mx-auto overflow-hidden">
          <div className="text-[11px] text-slate-400 mb-2 flex items-center justify-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>LIVE ETHIOPIAN STUDENT ACTIVITY ACROSS REGIONS</span>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1 text-xs">
            {studentActivities.map((act, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="font-bold text-white">{act.student}</span>
                <span className="text-slate-500">({act.city}):</span>
                <span className="text-emerald-300">{act.action}</span>
                <span className="text-[10px] text-slate-500 font-mono">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 text-left">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-md hover:border-emerald-500/40 transition group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-slate-400 font-medium">{st.label}</span>
                  <Icon className={`w-4 h-4 ${st.color} group-hover:scale-110 transition`} />
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">{st.value}</div>
                <div className="text-[11px] text-slate-400 mt-1 leading-tight line-clamp-2">{st.detail}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 1: Interactive Live AI Tutor Terminal Simulator with KaTeX Math & Amharic Support */}
      <section id="tutor-terminal" className="relative z-10 py-12 px-4 sm:px-8 max-w-5xl mx-auto w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive AI Math & Science Terminal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Experience Our 11-Key Multi-Engine AI Tutor
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Click any high-yield Ethiopian curriculum prompt below. Formulas render in crisp mathematical notation without broken symbols.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Terminal Header */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-slate-300 font-bold ml-2">ethiolearn-ai-copilot@terminal:~$</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>11 Keys Active</span>
              </span>
              <span>•</span>
              <span className="text-indigo-300">275K Daily Cap</span>
              <span>•</span>
              <span className="text-amber-300">Latency: 22ms</span>
            </div>
          </div>

          {/* Prompt Selector Chips */}
          <div className="p-4 bg-slate-900/40 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold text-slate-400 shrink-0 uppercase tracking-wider">
              Test Prompts:
            </span>
            {aiPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTutorPromptIdx(idx);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition flex items-center gap-1.5 ${
                  activeTutorPromptIdx === idx
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20 border border-emerald-400/40'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <span>{p.category.split(' ')[0]}</span>
                <span>•</span>
                <span className="font-normal">{p.title}</span>
              </button>
            ))}
          </div>

          {/* Terminal Body with Pristine KaTeX Math & Amharic Toggle */}
          <div className="p-5 sm:p-7 space-y-4 text-xs text-slate-200">
            {/* User Input Prompt */}
            <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
              <div className="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-bold text-[11px] shrink-0">
                YOU
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
                  {aiPrompts[activeTutorPromptIdx].category}
                </div>
                <div className="text-sm font-semibold text-white">
                  "{aiPrompts[activeTutorPromptIdx].prompt}"
                </div>
              </div>
            </div>

            {/* AI Response Output with KaTeX Renderer & Amharic Mode */}
            <div className="bg-slate-900/90 p-4 sm:p-6 rounded-2xl border border-emerald-500/30 shadow-inner space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                    AI
                  </div>
                  <span className="font-bold text-white">
                    EthioLearn AI Academic Engine
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[9px] font-mono">
                    KaTeX Math Verified
                  </span>
                </div>

                {/* Interactive Solution Controls: Copy & Amharic Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowAmharicExplanation(!showAmharicExplanation)}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition flex items-center gap-1.5 ${
                      showAmharicExplanation
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold'
                        : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
                    }`}
                  >
                    <Languages className="w-3.5 h-3.5 text-amber-400" />
                    <span>{showAmharicExplanation ? 'English View' : 'በአማርኛ አስረዳ'}</span>
                  </button>

                  <button
                    onClick={handleCopySolution}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-[11px] font-medium transition flex items-center gap-1.5"
                    title="Copy full solution"
                  >
                    {hasCopiedSolution ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Pristine Math Rendering: No Scrambled LaTeX or Raw Symbols */}
              <div className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                <MathMarkdownRenderer content={displayedAiResponse} />
                {isAiTyping && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 mt-2 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>Solving via Gemini Curriculum Engine...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rendered with KaTeX mathematical formulas • Aligned with FDRE Curriculum</span>
              </div>
              <button
                onClick={onGetStarted}
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5"
              >
                <span>Ask Personal Questions in Full App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive EUEE Score & University Admission Predictor */}
      <section id="score-calculator" className="relative z-10 py-12 px-4 sm:px-8 max-w-5xl mx-auto w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Admission Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Calculate Your Predicted EUEE Score & University Seat
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Adjust your current mock exam results and planned study hours to simulate your national score and university eligibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Stream Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                1. Select Academic Stream
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setStudyStream('natural')}
                  className={`p-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 ${
                    studyStream === 'natural'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>Natural Science (600 Pts)</span>
                </button>
                <button
                  onClick={() => setStudyStream('social')}
                  className={`p-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 ${
                    studyStream === 'social'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Social Science (600 Pts)</span>
                </button>
              </div>
            </div>

            {/* Mock Exam Score Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="text-slate-300">2. Current Mock / School Mastery Level</span>
                <span className="text-emerald-400 font-mono text-sm">{mockScorePercent}% Average</span>
              </div>
              <input
                type="range"
                min="40"
                max="98"
                value={mockScorePercent}
                onChange={(e) => setMockScorePercent(parseInt(e.target.value, 10))}
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${Math.round(((mockScorePercent - 40) / (98 - 40)) * 100)}%, #1e293b ${Math.round(((mockScorePercent - 40) / (98 - 40)) * 100)}%, #1e293b 100%)`
                }}
                className="w-full accent-emerald-500 cursor-pointer h-2.5 rounded-lg appearance-none shadow-inner"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>40% (Passing)</span>
                <span>70% (Competitive)</span>
                <span>98% (National Top)</span>
              </div>
            </div>

            {/* Study Hours Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="text-slate-300">3. Target Dedicated Study Hours Per Week</span>
                <span className="text-amber-400 font-mono text-sm">{studyHoursPerWeek} hrs / week</span>
              </div>
              <input
                type="range"
                min="4"
                max="35"
                value={studyHoursPerWeek}
                onChange={(e) => setStudyHoursPerWeek(parseInt(e.target.value, 10))}
                style={{
                  background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${Math.round(((studyHoursPerWeek - 4) / (35 - 4)) * 100)}%, #1e293b ${Math.round(((studyHoursPerWeek - 4) / (35 - 4)) * 100)}%, #1e293b 100%)`
                }}
                className="w-full accent-amber-500 cursor-pointer h-2.5 rounded-lg appearance-none shadow-inner"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>4 hrs (Casual)</span>
                <span>15 hrs (Recommended)</span>
                <span>35 hrs (Intensive)</span>
              </div>
            </div>

            {/* Nafkun Asefa Benchmark Callout */}
            <div className="p-3.5 bg-slate-950/80 border border-amber-500/30 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 flex items-center justify-center font-bold text-sm shrink-0">
                👑
              </div>
              <div className="text-xs">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <span>National Scorer Benchmark: 585 / 600</span>
                  <span className="text-[10px] bg-amber-500/20 px-1.5 py-0.2 rounded text-amber-200">Nafkun Asefa</span>
                </div>
                <div className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                  Achieving 585+ requires consistent mastery of 2008–2018 EUEE patterns, spaced repetition gates, and timed simulators.
                </div>
              </div>
            </div>
          </div>

          {/* Projection Result Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between text-center space-y-5">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Projected National EUEE Score
              </span>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                {calculatedEueeScore}
                <span className="text-xl text-slate-500 font-normal"> / 600</span>
              </div>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                {placement.badge}
              </div>
            </div>

            {/* University Placement Result */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-left space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Eligible University Placement</span>
              </div>
              <div className="font-bold text-white text-sm">
                {placement.uni}
              </div>
              <div className="text-xs text-slate-300">
                {placement.faculty}
              </div>
            </div>

            <button
              onClick={onGetStarted}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2"
            >
              <span>Unlock Custom Study Path</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: In-Depth Platform Architecture & Feature Breakdown (What The Website Does One-by-One) */}
      <section id="platform-architecture" className="relative z-10 py-16 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Complete Architectural Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            What EthioLearn AI Does: Explained One by One
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to go from classroom foundations to scoring in the top 1% of the Ethiopian University Entrance Examination (EUEE).
          </p>
        </div>

        {/* 8 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Module 1: Official Digital Textbooks */}
          <div className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-5 space-y-3 backdrop-blur-md transition shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                1
              </div>
              <h3 className="font-bold text-white text-base">
                61 Official Digital Textbooks
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete Ministry of Education curriculum for Grades 9, 10, 11, and 12. Switch between authentic high-resolution print pages, searchable digital text with KaTeX formulas, and text-to-speech audio reader.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <span>Dual-View • Audio Reader • Notes</span>
            </div>
          </div>

          {/* Module 2: 10-Year Entrance Exam Vault */}
          <div className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-5 space-y-3 backdrop-blur-md transition shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                2
              </div>
              <h3 className="font-bold text-white text-base">
                10-Year EUEE Exam Archive
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Over 10,503 authentic entrance exam questions (2008–2018 E.C.). Every question includes diagram inspection, verified answer keys, detailed step-by-step mathematical derivations, and distractor rationale.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-400 font-semibold flex items-center gap-1">
              <span>10,503+ Questions • Full Derivations</span>
            </div>
          </div>

          {/* Module 3: 3X AI Exam Predictor */}
          <div className="bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 rounded-3xl p-5 space-y-3 backdrop-blur-md transition shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
                3
              </div>
              <h3 className="font-bold text-white text-base">
                3X AI National Exam Predictor
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Proprietary syllabus frequency algorithm modeling Ethiopian MoE exam blueprints. Generates 3 full predicted practice examinations per subject based on recurring historical weightings.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-indigo-400 font-semibold flex items-center gap-1">
              <span>Blueprint Weighting • Forecasts</span>
            </div>
          </div>

          {/* Module 4: 24/7 AI Curriculum Copilot */}
          <div className="bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 rounded-3xl p-5 space-y-3 backdrop-blur-md transition shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                4
              </div>
              <h3 className="font-bold text-white text-base">
                11-Key Gemini AI Copilot
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                High-throughput round-robin pool with 275,000 requests/day. Answers tough physics, chemistry, biology, and calculus questions in real time with KaTeX math rendering, and Amharic translation.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-teal-400 font-semibold flex items-center gap-1">
              <span>275K Daily Cap • Amharic & English</span>
            </div>
          </div>

          {/* Module 5: Weekly National Competition */}
          <div className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-5 space-y-3 backdrop-blur-md transition shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                5
              </div>
              <h3 className="font-bold text-white text-base">
                Weekly National League
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Live timed competition challenge released every Sunday. Compete against students from Addis Ababa, Hawassa, Gondar, Bahir Dar, and Mekelle for national podium ranks, medals, and badges.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-400 font-semibold flex items-center gap-1">
              <span>Live Leaderboards • Medals</span>
            </div>
          </div>

          {/* Module 6: Daily Retention Gate */}
          <div className="bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 rounded-3xl p-5 space-y-3 backdrop-blur-md transition shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
                6
              </div>
              <h3 className="font-bold text-white text-base">
                Daily Spaced Retention Gate
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prevents passive cramming. Each day, students answer 3 quick spaced retrieval questions from earlier units to unlock textbooks and entrance exams, guaranteeing long-term memory encoding.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-rose-400 font-semibold flex items-center gap-1">
              <span>Spaced Recall • Streak Habits</span>
            </div>
          </div>

          {/* Module 7: Single-Device Account Security */}
          <div className="bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 rounded-3xl p-5 space-y-3 backdrop-blur-md transition shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold">
                7
              </div>
              <h3 className="font-bold text-white text-base">
                Device Binding & Safe Transfer
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Protects student accounts from unauthorized sharing with cryptographic hardware binding. Need to switch phones or computers? Submit an instant device transfer authorization request.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-sky-400 font-semibold flex items-center gap-1">
              <span>Hardware Binding • Seamless Transfer</span>
            </div>
          </div>

          {/* Module 8: Top Scorer Benchmark */}
          <div className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-5 space-y-3 backdrop-blur-md transition shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                8
              </div>
              <h3 className="font-bold text-white text-base">
                Top Scorer 585/600 Benchmark
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Curated and administered by **Nafkun Asefa (585/600 on EUEE)**. Features authentic exam-room shortcuts, mental arithmetic tricks, time-pacing strategies, and proven score elevation methods.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <span>585/600 Record • Proven Mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: National Subscription Plans & Transparent Pricing */}
      <section id="pricing-plans" className="relative z-10 py-16 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold">
            <CreditCard className="w-3.5 h-3.5 text-amber-400" />
            <span>Transparent National Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Choose the Perfect Plan for Your Academic Success
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            One-time investment in your academic future. No recurring monthly subscriptions. Instant verification via Telebirr and Commercial Bank of Ethiopia (CBE).
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Plan 1: Free Starter Plan */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-xl space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-bold">
                Starter Tier
              </div>
              <h3 className="text-2xl font-black text-white">Free Access</h3>
              <div className="text-3xl font-black text-slate-200">
                0 ETB <span className="text-xs text-slate-400 font-normal">/ Forever</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Perfect for exploring the digital textbook library and testing the AI tutor with daily free questions.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sample chapters across all Grades 9–12 textbooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>2018 E.C. Entrance Exam round 1 sample questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Daily free AI Tutor questions & formula helper</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Weekly national competition league access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Offline local caching on supported browsers</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onGetStarted}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition border border-slate-700"
            >
              Get Started Free
            </button>
          </div>

          {/* Plan 2: Single-Grade Lifetime Mastery */}
          <div className="bg-slate-900/90 border border-emerald-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-xl space-y-6 relative">
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                Focused Grade Preparation
              </div>
              <h3 className="text-2xl font-black text-white">Single Grade Mastery</h3>
              <div className="text-3xl font-black text-emerald-400">
                200 ETB <span className="text-xs text-slate-400 font-normal">/ One-Time Lifetime</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full permanent access to one chosen grade (Grade 9, 10, 11, or 12) for the entire academic year.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-200 pt-2 border-t border-slate-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>All textbooks</strong> unlocked for your chosen grade</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Complete historical EUEE past papers for that grade</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Step-by-step mathematical & scientific derivations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Unit short notes summaries & mastery practice tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Instant receipt verification via Telebirr or CBE Birr</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onGetStarted}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/25 transition"
            >
              Unlock Single Grade (200 Birr)
            </button>
          </div>

          {/* Plan 3: Lifetime All-Grades Complete Access (Most Popular) */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-md">
              👑 Most Popular • Best Value
            </div>

            <div className="space-y-4">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold">
                Complete National Unlock
              </div>
              <h3 className="text-2xl font-black text-white">All-Grades Lifetime Complete</h3>
              <div className="text-3xl font-black text-amber-300">
                300 ETB <span className="text-xs text-slate-400 font-normal">/ One-Time Lifetime</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unlocks EVERYTHING permanently: all 4 grades (9–12), Natural & Social streams, 10-year exams, and 3X AI prediction papers.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-200 pt-2 border-t border-slate-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>All 4 Grades (9, 10, 11, 12)</strong> permanently unlocked</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Natural Science AND Social Science full subject curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Entire 10-Year EUEE Exam Database (2008–2018 E.C.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Exclusive <strong>3X AI Exam Predictions & Blueprint Forecasts</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Unlimited 24/7 AI Curriculum Copilot (11-key Gemini pool)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Offline Progressive Web App (PWA) on PC & Mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Curated Mentorship notes by <strong>Nafkun Asefa (585/600)</strong></span>
                </li>
              </ul>
            </div>

            <button
              onClick={onGetStarted}
              className="w-full py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:opacity-95 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/25 transition"
            >
              Get Complete All-Grades Access (300 Birr)
            </button>
          </div>
        </div>

        {/* Payment Verification & Deposit Instructions */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <span>Official Ethiopian Payment Channels</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Deposit via Telebirr or Commercial Bank of Ethiopia (CBE) for instant account activation.
              </p>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
              Account Holder: NAFKUN ASEFA
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Telebirr */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span>Telebirr</span>
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">Fastest</span>
              </div>
              <div className="font-mono text-base font-black text-white">
                0994847287
              </div>
              <div className="text-[11px] text-slate-400">
                Name: <span className="text-slate-200 font-semibold">NAFKUN ASEFA</span>
              </div>
            </div>

            {/* CBE */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-purple-400 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span>Commercial Bank (CBE)</span>
                </span>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono font-bold">Direct Bank</span>
              </div>
              <div className="font-mono text-base font-black text-white">
                1000616679434
              </div>
              <div className="text-[11px] text-slate-400">
                Name: <span className="text-slate-200 font-semibold">NAFKUN ASEFA</span>
              </div>
            </div>

            {/* Telegram Support */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sky-400 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-sky-400" />
                  <span>Telegram Support</span>
                </span>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded font-mono font-bold">Instant Help</span>
              </div>
              <div className="font-mono text-base font-black text-white">
                @wiznfk4
              </div>
              <div className="text-[11px] text-slate-400">
                Send screenshot or query for 2-minute activation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Grades 9–12 Curriculum Interactive Preview */}
      <section id="curriculum" className="relative z-10 py-16 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-8 border-t border-slate-800/60">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Interactive Curriculum Explorer
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Official Ethiopian Secondary Grades 9–12 Syllabus
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Click on any grade to explore the fully digitized textbook and past national exam archives.
          </p>
        </div>

        {/* Grade Selector Tabs */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-md mx-auto">
          {(['12', '11', '10', '9'] as const).map((grade) => (
            <button
              key={grade}
              onClick={() => setPreviewGrade(grade)}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                previewGrade === grade
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Grade {grade}
            </button>
          ))}
        </div>

        {/* Subject Grid for Selected Grade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectsByGrade[previewGrade].map((subj, idx) => {
            const Icon = subj.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-4 rounded-2xl backdrop-blur-sm transition group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${subj.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{subj.name}</h4>
                    <p className="text-[11px] text-slate-400">
                      FDRE Textbook • Past EUEE Archive • AI Notes
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: Feature Deep-Dives Tabs */}
      <section className="relative z-10 py-12 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 justify-start sm:justify-center">
          {[
            { id: 'textbooks', label: 'Digital Textbooks', icon: BookOpen },
            { id: 'exams', label: 'EUEE Exam Archive', icon: Award },
            { id: 'ai_tutor', label: 'AI Curriculum Copilot', icon: Sparkles },
            { id: 'competition', label: 'National Competition', icon: Trophy },
            { id: 'retention', label: 'Daily Retention Gate', icon: Lock }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFeatureTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFeatureTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
                  isActive
                    ? 'bg-slate-800 text-white border border-slate-700 shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Tab Dynamic Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeatureTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
          >
            {activeFeatureTab === 'textbooks' && (
              <div id="textbooks" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>61 Official Books • Grades 9–12</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Digital Textbook Reader with Scanned & Text Modes
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Study with exact page-by-page digital scans of official Ethiopian textbooks or switch to formatted text mode with selectable copy, audio narration, and instant AI Chapter Short Notes.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Dual-View Reader:</strong> Authentic printed page images alongside high-fidelity text with KaTeX formulas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Audio Narration:</strong> Built-in text-to-speech reader for listening on the go or reviewing while commuting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Chapter AI Short Notes:</strong> Instant high-yield summaries generated for every unit to supercharge exam revision.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="font-bold text-white">Grade 12 Physics Textbook • Unit 3</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Page 84 of 248</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
                    <div className="text-emerald-300 font-bold">Faraday's Law of Electromagnetic Induction</div>
                    <p className="text-[11px] leading-relaxed">
                      "The induced electromotive force (emf) in any closed circuit is equal to the negative of the time rate of change of the magnetic flux enclosed by the circuit."
                    </p>
                    <div className="p-2 rounded bg-slate-950 text-center text-xs">
                      <MathMarkdownRenderer content={"$$\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}$$"} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeatureTab === 'exams' && (
              <div id="exams" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>10,503+ Real EUEE Questions</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Authentic Past National Examinations (2008–2018 E.C.)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Practice with the exact matriculation papers taken by university aspirants over the past decade. Includes real exam timer simulations, diagram visualizers, and step-by-step pedagogical explanations.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Timed Examination Simulator:</strong> Practice with real-time countdown, negative marking toggles, and instant score analysis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Step-by-Step Pedagogical Solutions:</strong> Detailed rationale for the correct choice and explanations of why distractors are wrong.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>AI Exam Predictor (3X Forecasts):</strong> Topic weight distribution engine forecasting probable question patterns for upcoming entrance exams.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="font-bold text-amber-300">2018 E.C. Chemistry EUEE Round 1</span>
                    <span className="text-emerald-400 font-mono text-[11px]">80 / 80 Questions</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-2">
                    <div className="font-semibold text-white">
                      Q1: The masses of different substances liberated by the same amount of electricity are proportional to their equivalent masses. This statement is:
                    </div>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div className="p-1.5 rounded bg-slate-950 border border-slate-800">A) Faraday's first law of electrolysis</div>
                      <div className="p-1.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                        ✓ C) Faraday's second law of electrolysis
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeatureTab === 'ai_tutor' && (
              <div id="tutor" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Real 11-Key Gemini API Pool</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    EthioLearn AI Academic Specialist & 24/7 Personal Tutor
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Connected directly to Google's cutting-edge Gemini models with dynamic load balancing across an 11-key pool. Grounded in Ethiopian curriculum standards with automatic LaTeX formula rendering, worked derivations, and cross-linking to past EUEE questions.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span><strong>High-Capacity Throughput:</strong> Zero queuing bottlenecks with automatic multi-key cooldown handling.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span><strong>Pedagogical Depth:</strong> Breaks down complex physics derivations, chemical stoichiometry, and calculus theorems into intuitive steps.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span><strong>EUEE Shortcuts:</strong> Reveals examiner tricks, common distractors, and mental calculation shortcuts.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="text-xs font-bold text-indigo-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>EthioLearn AI Academic Chat • 11-Key Pool Active</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs space-y-2.5">
                    <div className="text-slate-400 font-mono text-[10px]">User Prompt: "State Faraday's second law with formula"</div>
                    <MathMarkdownRenderer content={"$$\\frac{m_1}{m_2} = \\frac{E_1}{E_2} = \\frac{M_1 / n_1}{M_2 / n_2}$$"} />
                    <div className="text-slate-300 text-[11px] leading-relaxed">
                      "When two electrolytic cells are connected in series, the identical charge passes through both. The deposited masses relate directly to chemical equivalent mass (E = M / n)."
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeatureTab === 'competition' && (
              <div id="competition" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Active National League & Leaderboard</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Weekly Competition Cup with Live Nationwide Rankings
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Every week, a new timed competition challenge is released. Students across all Ethiopian regions compete under the same questions and timer, climbing the live national leaderboard!
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Live Regional & National Podiums:</strong> Filter ranks by All-Ethiopia, Addis Ababa, Oromia, Amhara, Sidama, Tigray, and more.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Weekly Badges & Medals:</strong> Earn Gold, Silver, and Bronze tier recognition on your student profile.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Speed & Precision Metrics:</strong> Leaderboard scores factor in both correct answers and completion time.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="font-bold text-amber-400 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      <span>National Weekly League • Podium</span>
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Week 43 Active</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🥇</span>
                        <div>
                          <span className="font-bold text-white">Yohannes T.</span>
                          <span className="text-[10px] text-slate-400 block">Addis Ababa • Bole High</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-emerald-400 font-mono">20/20 (100%)</span>
                        <span className="text-[10px] text-slate-400 block font-mono">11m 42s</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🥈</span>
                        <div>
                          <span className="font-bold text-white">Selamawit D.</span>
                          <span className="text-[10px] text-slate-400 block">Hawassa • Tabor Sec</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-emerald-400 font-mono">19/20 (95%)</span>
                        <span className="text-[10px] text-slate-400 block font-mono">13m 05s</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🥉</span>
                        <div>
                          <span className="font-bold text-white">Bekele M.</span>
                          <span className="text-[10px] text-slate-400 block">Adama • Science Academy</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-emerald-400 font-mono">19/20 (95%)</span>
                        <span className="text-[10px] text-slate-400 block font-mono">14m 19s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeatureTab === 'retention' && (
              <div id="retention" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold">
                    <Lock className="w-3.5 h-3.5 text-rose-400" />
                    <span>Daily Spaced Retention Gate</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Mandatory Spaced Retrieval to Strengthen Long-Term Memory
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Cramming fails; spaced repetition wins. To guarantee that students retain past curriculum units, the app locks down access each day until students answer 3 quick spaced recall questions from previous topics!
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span><strong>Strengthen Retention:</strong> Forces your brain to retrieve learned formulas, scientific terms, and historical dates regularly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span><strong>Daily Learning Hub:</strong> Enter the specific topic you learned in school today to receive instant notes and mastery questions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span><strong>Daily Streak Tracker:</strong> Build habits with streak badges that grow every consecutive day you complete your recall.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-rose-900/40 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="font-bold text-rose-400 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Daily Retention Gate Active</span>
                    </span>
                    <span className="text-amber-400 font-mono text-[11px] font-bold">🔥 6-Day Streak</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-2">
                    <div className="text-slate-300">
                      "Answer 3 quick recall questions from your previous topics (Mendelian Genetics, Faraday's Laws, Vectors) to unlock textbooks and entrance exams for today!"
                    </div>
                    <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 font-semibold text-[11px] flex items-center gap-2">
                      <Unlock className="w-4 h-4 text-emerald-400" />
                      <span>Pass 3 questions → All resources unlocked for 24 hours!</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Comprehensive Feature Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-8 border-t border-slate-800/60">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            End-To-End Curriculum Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Everything You Need For 100% Exam Readiness
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 space-y-3 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Exact Textbook Scans & Audio</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Toggle between high-res authentic printed pages, formatted digital text with KaTeX equations, or listen aloud via voice speech player.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 space-y-3 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">10,503+ EUEE Entrance Questions</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every official exam from 2018 E.C. down to 2000s with verified step-by-step solutions, zero placeholders, and instant question search.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-5 space-y-3 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <h4 className="font-bold text-white text-base">11x Multi-Key Gemini AI Pool</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              24/7 personal academic tutor connecting directly to Google GenAI for deep pedagogical explanations, worked derivations, and EUEE tricks.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-5 space-y-3 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <Trophy className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Weekly League & Leaderboard</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Test your skills against students across Addis Ababa, Oromia, Amhara, and all Ethiopian regions in live weekly timed challenges.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 rounded-2xl p-5 space-y-3 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Daily Retention Lock System</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Log daily school topics and unlock your app each day by answering 3 quick spaced retrieval questions, ensuring long-term memory.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 rounded-2xl p-5 space-y-3 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">100% Offline Capability (PWA)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Install as a Progressive Web App on Android, iOS, or PC. Save textbooks, notes, and exams for continuous offline studying.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Footer Section */}
      <section className="relative z-10 py-16 px-4 sm:px-8 bg-gradient-to-b from-slate-950 via-emerald-950/20 to-[#030712] border-t border-slate-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
            <GraduationCap className="w-4 h-4" />
            <span>Join Ethiopia's Leading Digital Exam Community</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Accelerate Your Academic Journey?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Join over 120,000 ambitious Ethiopian students preparing for secondary school and national university entrance examination success.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onGetStarted}
              className="px-7 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 hover:opacity-95 text-white font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/25 transition border border-emerald-400/30"
            >
              Get Started Free Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onSignIn}
              className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-2xl border border-slate-700 transition"
            >
              Sign In to Your Account
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer Legal & Info */}
      <footer className="relative z-10 border-t border-slate-800/80 px-4 sm:px-8 py-6 text-center text-xs text-slate-500 space-y-2 bg-[#02050e]">
        <p>
          © 2026 EthioLearn AI • Federal Democratic Republic of Ethiopia Ministry of Education Curriculum Aligned
        </p>
        <p className="text-[11px] text-slate-600">
          Administered by Nafkun Asefa (EUEE 585/600). Empowering Ethiopian youth through high-fidelity digital curriculum and artificial intelligence.
        </p>
      </footer>
    </div>
  );
};
