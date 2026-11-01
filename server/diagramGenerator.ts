/**
 * Ethiopian National Examination Diagram & Vector Asset Generator.
 * Provides scalable, crisp SVG illustrations for STEM and SAT exam questions ONLY when
 * a question in the official exam explicitly references a figure, diagram, circuit, or chart.
 * 
 * Strict rule: Never add random diagrams to questions that do not have diagrams in the exam paper.
 */

export function hasExplicitFigureReference(text: string): boolean {
  if (!text) return false;
  return /\b(refer\s+to\s+(?:figure|fig\.?|the\s+diagram|the\s+chart|the\s+graph|the\s+circuit)|as\s+shown\s+in\s+(?:the\s+)?(?:figure|fig\.?|diagram|circuit|chart|graph|illustration)|in\s+(?:the\s+)?(?:figure|fig\.?)\s*\d+|in\s+the\s+(?:circuit|diagram|graph|chart|figure|illustration)\s+(?:below|above|shown)|according\s+to\s+(?:the\s+)?(?:diagram|figure|graph|chart)\s+(?:below|above|shown)|from\s+the\s+(?:diagram|figure|graph|chart)\s+(?:below|above|shown)|examine\s+(?:figure|fig\.?|the\s+diagram|the\s+chart|the\s+graph))\b/i.test(text);
}

export function getDiagramForQuestion(
  subjectId: string,
  questionNumber: number,
  questionText: string
): { svg?: string; caption?: string } | null {
  const qLower = (questionText || '').toLowerCase();

  // STRICT REQUIREMENT: Only provide a diagram if the exam question explicitly refers to a figure or diagram in the exam.
  // Never add diagrams to standard text questions!
  if (!hasExplicitFigureReference(questionText)) {
    return null;
  }

  // 1. Physics Diagrams
  if (subjectId === 'subj-phys' || qLower.includes('circuit') || qLower.includes('resistor') || qLower.includes('inclined') || qLower.includes('projectile') || qLower.includes('trajectory')) {
    if (qLower.includes('circuit') || qLower.includes('resistor') || qLower.includes('wheatstone') || qLower.includes('bridge') || qLower.includes('ammeter') || qLower.includes('voltmeter')) {
      return {
        svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-emerald-400">
          <rect width="420" height="180" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
          <!-- Battery / DC Source -->
          <line x1="50" y1="90" x2="110" y2="90" stroke="#38bdf8" stroke-width="3"/>
          <line x1="110" y1="70" x2="110" y2="110" stroke="#f59e0b" stroke-width="3"/>
          <line x1="120" y1="78" x2="120" y2="102" stroke="#94a3b8" stroke-width="3"/>
          <text x="100" y="60" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">+ 12V -</text>
          <line x1="120" y1="90" x2="160" y2="90" stroke="#38bdf8" stroke-width="3"/>
          
          <!-- Upper resistor R1 -->
          <line x1="160" y1="90" x2="190" y2="50" stroke="#38bdf8" stroke-width="2.5"/>
          <rect x="190" y="40" width="70" height="20" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
          <text x="205" y="54" fill="#10b981" font-family="sans-serif" font-size="11" font-weight="bold">R₁ = 6 Ω</text>
          <line x1="260" y1="50" x2="290" y2="90" stroke="#38bdf8" stroke-width="2.5"/>

          <!-- Lower resistor R2 -->
          <line x1="160" y1="90" x2="190" y2="130" stroke="#38bdf8" stroke-width="2.5"/>
          <rect x="190" y="120" width="70" height="20" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
          <text x="205" y="134" fill="#c084fc" font-family="sans-serif" font-size="11" font-weight="bold">R₂ = 3 Ω</text>
          <line x1="260" y1="130" x2="290" y2="90" stroke="#38bdf8" stroke-width="2.5"/>

          <!-- Ammeter & return wire -->
          <line x1="290" y1="90" x2="330" y2="90" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="350" cy="90" r="16" fill="#0f172a" stroke="#f43f5e" stroke-width="2.5"/>
          <text x="345" y="95" fill="#f43f5e" font-family="sans-serif" font-size="13" font-weight="bold">A</text>
          <line x1="366" y1="90" x2="390" y2="90" stroke="#38bdf8" stroke-width="3"/>
          <line x1="390" y1="90" x2="390" y2="160" stroke="#38bdf8" stroke-width="3"/>
          <line x1="390" y1="160" x2="50" y2="160" stroke="#38bdf8" stroke-width="3"/>
          <line x1="50" y1="160" x2="50" y2="90" stroke="#38bdf8" stroke-width="3"/>

          <!-- Current arrow -->
          <polygon points="75,86 85,90 75,94" fill="#38bdf8"/>
          <text x="70" y="80" fill="#38bdf8" font-family="sans-serif" font-size="11" font-style="italic">I</text>
        </svg>`,
        caption: `Figure ${questionNumber}: DC Parallel Resistor Network with EMF Source and In-line Ammeter`
      };
    }

    if (qLower.includes('inclined') || qLower.includes('ramp') || (qLower.includes('plane') && qLower.includes('block'))) {
      return {
        svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="380" height="180" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
          <!-- Incline Triangle -->
          <polygon points="40,150 340,150 340,30" fill="#0f172a" stroke="#334155" stroke-width="2"/>
          <path d="M 80,150 A 40,40 0 0,0 75,134" fill="none" stroke="#f59e0b" stroke-width="2"/>
          <text x="90" y="145" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">θ = 30°</text>

          <!-- Mass Block m -->
          <g transform="translate(180,95) rotate(-22)">
            <rect x="-25" y="-20" width="50" height="40" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
            <text x="-12" y="5" fill="#10b981" font-family="sans-serif" font-size="12" font-weight="bold">m</text>
            <!-- Normal force N -->
            <line x1="0" y1="-20" x2="0" y2="-60" stroke="#38bdf8" stroke-width="2.5"/>
            <polygon points="-4,-54 0,-64 4,-54" fill="#38bdf8"/>
            <text x="6" y="-55" fill="#38bdf8" font-family="sans-serif" font-size="11" font-weight="bold">F_N</text>
            <!-- Friction f -->
            <line x1="25" y1="0" x2="65" y2="0" stroke="#f43f5e" stroke-width="2"/>
            <polygon points="57,-3 67,0 57,3" fill="#f43f5e"/>
            <text x="68" y="4" fill="#f43f5e" font-family="sans-serif" font-size="11" font-weight="bold">f_k</text>
          </g>
          <!-- Gravity mg -->
          <line x1="180" y1="95" x2="180" y2="155" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="176,147 180,157 184,147" fill="#f59e0b"/>
          <text x="188" y="140" fill="#f59e0b" font-family="sans-serif" font-size="11" font-weight="bold">W = mg</text>
        </svg>`,
        caption: `Figure ${questionNumber}: Free-Body Force Resolution on an Inclined Plane at Angle θ`
      };
    }

    if (qLower.includes('trajectory') || (qLower.includes('projectile') && qLower.includes('path'))) {
      return {
        svg: `<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="400" height="170" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
          <!-- Axes -->
          <line x1="40" y1="140" x2="370" y2="140" stroke="#64748b" stroke-width="2"/>
          <polygon points="365,137 375,140 365,143" fill="#64748b"/>
          <text x="365" y="156" fill="#94a3b8" font-family="sans-serif" font-size="11">x (Range R)</text>

          <line x1="40" y1="140" x2="40" y2="20" stroke="#64748b" stroke-width="2"/>
          <polygon points="37,25 40,15 43,25" fill="#64748b"/>
          <text x="18" y="25" fill="#94a3b8" font-family="sans-serif" font-size="11">y</text>

          <!-- Parabolic Path -->
          <path d="M 40,140 Q 190,10 340,140" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>
          
          <!-- Launch Vector -->
          <line x1="40" y1="140" x2="90" y2="70" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="84,72 94,66 89,77" fill="#f59e0b"/>
          <text x="95" y="70" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">v₀</text>

          <!-- Peak H_max -->
          <line x1="190" y1="75" x2="190" y2="140" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="195" y="95" fill="#10b981" font-family="sans-serif" font-size="11" font-weight="bold">H_max</text>
        </svg>`,
        caption: `Figure ${questionNumber}: 2D Projectile Trajectory with Launch Vector v₀ and Apex H_max`
      };
    }
  }

  // 2. Chemistry Diagrams
  if (subjectId === 'subj-chem' || qLower.includes('galvanic') || qLower.includes('electrochemical') || qLower.includes('energy profile')) {
    if (qLower.includes('galvanic') || (qLower.includes('cell') && (qLower.includes('electrode') || qLower.includes('beaker')))) {
      return {
        svg: `<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="420" height="190" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
          <!-- Beakers -->
          <rect x="50" y="70" width="110" height="90" rx="4" fill="#0f172a" stroke="#475569" stroke-width="2"/>
          <rect x="260" y="70" width="110" height="90" rx="4" fill="#0f172a" stroke="#475569" stroke-width="2"/>
          <rect x="52" y="100" width="106" height="58" fill="#0284c7" opacity="0.3"/>
          <rect x="262" y="100" width="106" height="58" fill="#0d9488" opacity="0.3"/>

          <!-- Anode (Zn) -->
          <rect x="90" y="50" width="18" height="85" fill="#64748b" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="68" y="42" fill="#94a3b8" font-family="sans-serif" font-size="11" font-weight="bold">Zn Anode (-)</text>

          <!-- Cathode (Cu) -->
          <rect x="312" y="50" width="18" height="85" fill="#b45309" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="290" y="42" fill="#f59e0b" font-family="sans-serif" font-size="11" font-weight="bold">Cu Cathode (+)</text>

          <!-- Salt Bridge -->
          <path d="M 130,90 C 130,50 290,50 290,90" fill="none" stroke="#a855f7" stroke-width="12" stroke-linecap="round"/>
          <text x="180" y="45" fill="#c084fc" font-family="sans-serif" font-size="10" font-weight="bold">Salt Bridge (KNO₃)</text>

          <!-- External Circuit with Voltmeter -->
          <line x1="99" y1="50" x2="99" y2="20" stroke="#f43f5e" stroke-width="2"/>
          <line x1="99" y1="20" x2="190" y2="20" stroke="#f43f5e" stroke-width="2"/>
          <circle cx="210" cy="20" r="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <text x="206" y="24" fill="#38bdf8" font-family="sans-serif" font-size="11" font-weight="bold">V</text>
          <line x1="224" y1="20" x2="321" y2="20" stroke="#f43f5e" stroke-width="2"/>
          <line x1="321" y1="20" x2="321" y2="50" stroke="#f43f5e" stroke-width="2"/>
          <text x="195" y="175" fill="#10b981" font-family="sans-serif" font-size="11" font-weight="bold">E°_cell = +1.10 V</text>
        </svg>`,
        caption: `Figure ${questionNumber}: Standard Zn-Cu Galvanic Electrochemical Cell Apparatus`
      };
    }

    if (qLower.includes('activation energy') || qLower.includes('potential energy') || (qLower.includes('reaction') && (qLower.includes('coordinate') || qLower.includes('progress') || qLower.includes('enthalpy')))) {
      return {
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
          <line x1="80" y1="200" x2="450" y2="200" stroke="#334155" stroke-width="2"/>
          <line x1="80" y1="200" x2="80" y2="30" stroke="#334155" stroke-width="2"/>
          <polygon points="450,200 440,195 440,205" fill="#334155"/>
          <polygon points="80,30 75,40 85,40" fill="#334155"/>
          <text x="220" y="225" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569">Reaction Progress</text>
          <text x="35" y="120" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569" transform="rotate(-90 35,120)">Enthalpy (H)</text>
          <line x1="100" y1="70" x2="220" y2="70" stroke="#16a34a" stroke-width="4"/>
          <text x="130" y="60" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">Reactants</text>
          <path d="M 220 70 C 260 70, 270 140, 310 140" fill="none" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4,4"/>
          <line x1="310" y1="140" x2="430" y2="140" stroke="#dc2626" stroke-width="4"/>
          <text x="340" y="160" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b91c1c">Products</text>
          <line x1="160" y1="70" x2="160" y2="140" stroke="#b91c1c" stroke-width="2.5"/>
          <line x1="100" y1="140" x2="310" y2="140" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3"/>
          <polygon points="160,140 155,130 165,130" fill="#b91c1c"/>
          <text x="175" y="110" font-family="sans-serif" font-size="15" font-weight="bold" fill="#b91c1c">ΔH &lt; 0 (Exothermic)</text>
        </svg>`,
        caption: `Figure ${questionNumber}: Enthalpy Reaction Progress Profile for Exothermic Reaction`
      };
    }

    if (qLower.includes('hybridization') && (qLower.includes('1,2,3,4') || qLower.includes('labelled as 1,2,3,4') || qLower.includes('molecule labelled'))) {
      return {
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
          <text x="60" y="145" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">H₃C</text>
          <line x1="95" y1="140" x2="140" y2="120" stroke="#1e293b" stroke-width="2.5"/>
          <text x="140" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">1</text>
          <line x1="145" y1="110" x2="145" y2="70" stroke="#1e293b" stroke-width="2.5"/>
          <text x="135" y="60" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">CH₃</text>
          <line x1="155" y1="120" x2="215" y2="155" stroke="#1e293b" stroke-width="2.5"/>
          <text x="215" y="175" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">2</text>
          <line x1="225" y1="150" x2="290" y2="120" stroke="#1e293b" stroke-width="3"/>
          <line x1="228" y1="160" x2="285" y2="132" stroke="#1e293b" stroke-width="2"/>
          <text x="295" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">3</text>
          <line x1="295" y1="110" x2="295" y2="70" stroke="#1e293b" stroke-width="2.5"/>
          <text x="282" y="60" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">NH₂</text>
          <line x1="305" y1="120" x2="370" y2="155" stroke="#1e293b" stroke-width="2.5"/>
          <text x="370" y="175" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">4</text>
          <line x1="375" y1="150" x2="420" y2="120" stroke="#dc2626" stroke-width="3"/>
          <line x1="380" y1="160" x2="425" y2="130" stroke="#dc2626" stroke-width="2"/>
          <text x="430" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#dc2626">O</text>
          <line x1="375" y1="175" x2="375" y2="205" stroke="#1e293b" stroke-width="2.5"/>
          <text x="360" y="225" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">CH₃</text>
        </svg>`,
        caption: `Figure ${questionNumber}: Numbered carbon atoms 1, 2, 3, and 4 in the organic molecule`
      };
    }

    if (qLower.includes('phase change') || (qLower.includes('solid') && qLower.includes('liquid') && qLower.includes('gas') && qLower.includes('x, y, z, m'))) {
      return {
        svg: `<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
          <rect x="30" y="70" width="100" height="50" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
          <text x="80" y="100" font-family="sans-serif" font-size="15" font-weight="bold" fill="#312e81" text-anchor="middle">SOLID</text>
          <rect x="220" y="70" width="100" height="50" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
          <text x="270" y="100" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">LIQUID</text>
          <rect x="410" y="70" width="100" height="50" rx="8" fill="#ccfbf1" stroke="#0f766e" stroke-width="2"/>
          <text x="460" y="100" font-family="sans-serif" font-size="15" font-weight="bold" fill="#134e4a" text-anchor="middle">GAS</text>
          <path d="M 90 60 C 140 20, 200 20, 250 60" fill="none" stroke="#16a34a" stroke-width="2.5"/>
          <text x="170" y="35" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803d">X (Melting)</text>
          <path d="M 280 60 C 330 20, 390 20, 440 60" fill="none" stroke="#16a34a" stroke-width="2.5"/>
          <text x="360" y="35" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803d">Y (Boiling)</text>
          <path d="M 430 130 C 350 185, 180 185, 100 130" fill="none" stroke="#2563eb" stroke-width="2.5"/>
          <text x="260" y="185" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1d4ed8">Z (Deposition)</text>
          <path d="M 420 130 C 380 160, 310 160, 270 130" fill="none" stroke="#dc2626" stroke-width="2.5"/>
          <text x="340" y="155" font-family="sans-serif" font-size="15" font-weight="bold" fill="#b91c1c">M (Freezing)</text>
        </svg>`,
        caption: `Figure ${questionNumber}: Physical processes X, Y, Z, and M during phase transitions`
      };
    }

    if (qLower.includes('iupac') && (qLower.includes('this molecule') || qLower.includes('structure below') || qLower.includes('given molecule'))) {
      return {
        svg: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
          <text x="20" y="115" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₃CH₂</text>
          <line x1="85" y1="110" x2="120" y2="110" stroke="#1e293b" stroke-width="2.5"/>
          <text x="125" y="115" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">C</text>
          <line x1="132" y1="95" x2="132" y2="55" stroke="#991b1b" stroke-width="2.5"/>
          <text x="125" y="45" font-family="sans-serif" font-size="15" font-weight="bold" fill="#991b1b">Br</text>
          <line x1="132" y1="125" x2="132" y2="165" stroke="#1e293b" stroke-width="2.5"/>
          <text x="122" y="185" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₃</text>
          <line x1="145" y1="110" x2="185" y2="110" stroke="#1e293b" stroke-width="2.5"/>
          <text x="190" y="115" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">CH</text>
          <line x1="202" y1="95" x2="202" y2="55" stroke="#991b1b" stroke-width="2.5"/>
          <text x="195" y="45" font-family="sans-serif" font-size="15" font-weight="bold" fill="#991b1b">Br</text>
          <line x1="220" y1="110" x2="255" y2="110" stroke="#1e293b" stroke-width="2.5"/>
          <text x="260" y="115" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">C</text>
          <line x1="267" y1="95" x2="267" y2="55" stroke="#1e293b" stroke-width="2.5"/>
          <text x="245" y="45" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₂CH₃</text>
          <line x1="267" y1="125" x2="267" y2="165" stroke="#1e293b" stroke-width="2.5"/>
          <text x="245" y="185" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₂CH₃</text>
          <line x1="277" y1="110" x2="315" y2="110" stroke="#1e293b" stroke-width="2.5"/>
          <text x="320" y="115" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₂CH₂CH₂CH₂CH₃</text>
        </svg>`,
        caption: `Figure ${questionNumber}: Substituted Decane Chain for IUPAC Nomenclature`
      };
    }
  }

  // 3. Mathematics Diagrams
  if (subjectId === 'subj-math' || qLower.includes('triangle') || qLower.includes('trigonometry')) {
    if (qLower.includes('triangle') || (qLower.includes('angle') && qLower.includes('hypotenuse'))) {
      return {
        svg: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="360" height="170" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
          <!-- Right Triangle -->
          <polygon points="60,140 280,140 280,40" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
          <rect x="265" y="125" width="15" height="15" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
          <!-- Labels -->
          <text x="50" y="152" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="bold">A</text>
          <text x="286" y="152" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="bold">C</text>
          <text x="286" y="36" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="bold">B</text>
          <!-- Sides -->
          <text x="160" y="155" fill="#10b981" font-family="sans-serif" font-size="11" font-weight="bold">Adjacent (b = 4)</text>
          <text x="290" y="95" fill="#f43f5e" font-family="sans-serif" font-size="11" font-weight="bold">Opposite (a = 3)</text>
          <text x="145" y="80" fill="#a855f7" font-family="sans-serif" font-size="11" font-weight="bold">Hypotenuse (c = 5)</text>
        </svg>`,
        caption: `Figure ${questionNumber}: Right-Angled Euclidean Triangle ABC with Pythagorean Proportions`
      };
    }
  }

  // 4. SAT Data Interpretation Chart
  if ((subjectId === 'subj-sat' || qLower.includes('chart') || qLower.includes('graph')) && (qLower.includes('distribution') || qLower.includes('section') || qLower.includes('bar'))) {
    return {
      svg: `<svg viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="380" height="170" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Chart axes -->
        <line x1="50" y1="130" x2="350" y2="130" stroke="#64748b" stroke-width="1.5"/>
        <line x1="50" y1="130" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/>
        <!-- Grid lines -->
        <line x1="50" y1="100" x2="350" y2="100" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="50" y1="70" x2="350" y2="70" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="50" y1="40" x2="350" y2="40" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
        
        <!-- Y-labels -->
        <text x="25" y="104" fill="#64748b" font-family="sans-serif" font-size="10">25%</text>
        <text x="25" y="74" fill="#64748b" font-family="sans-serif" font-size="10">50%</text>
        <text x="25" y="44" fill="#64748b" font-family="sans-serif" font-size="10">75%</text>

        <!-- Bar Series -->
        <rect x="80" y="70" width="36" height="60" rx="3" fill="#38bdf8"/>
        <text x="82" y="145" fill="#cbd5e1" font-family="sans-serif" font-size="10">Sec A</text>

        <rect x="150" y="45" width="36" height="85" rx="3" fill="#10b981"/>
        <text x="152" y="145" fill="#cbd5e1" font-family="sans-serif" font-size="10">Sec B</text>

        <rect x="220" y="85" width="36" height="45" rx="3" fill="#f59e0b"/>
        <text x="222" y="145" fill="#cbd5e1" font-family="sans-serif" font-size="10">Sec C</text>

        <rect x="290" y="55" width="36" height="75" rx="3" fill="#a855f7"/>
        <text x="292" y="145" fill="#cbd5e1" font-family="sans-serif" font-size="10">Sec D</text>

        <text x="120" y="22" fill="#e2e8f0" font-family="sans-serif" font-size="11" font-weight="bold">Relative Distribution of Exam Performance</text>
      </svg>`,
      caption: `Figure ${questionNumber}: Comparative Cohort Distribution Across Sections A through D`
    };
  }

  // 5. Special Regional Model Exams Diagrams
  // 5a. Human Heart Diagram (Biology Model Exam Q10)
  if (subjectId === 'subj-bio' && (qLower.includes('heart') || qLower.includes('auricle') || qLower.includes('ventricle') || qLower.includes('vena cava'))) {
    return {
      svg: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="380" height="280" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
        <text x="110" y="24" fill="#f43f5e" font-family="sans-serif" font-size="12" font-weight="bold">Human Heart Anatomical Schematic</text>
        
        <!-- Background Chambers outline -->
        <path d="M140,110 C110,60 180,40 190,90 C200,40 270,60 240,110 C210,160 190,230 190,230 C190,230 170,160 140,110 Z" fill="#311018" stroke="#f43f5e" stroke-width="2.5"/>
        
        <!-- Aorta (Label 2) -->
        <path d="M185,90 C185,50 220,30 220,60" fill="none" stroke="#ef4444" stroke-width="16" stroke-linecap="round"/>
        <text x="228" y="55" fill="#f87171" font-family="sans-serif" font-size="12" font-weight="bold">2 (Aorta)</text>
        
        <!-- Superior Vena Cava (Label 6) -->
        <rect x="125" y="50" width="16" height="70" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="90" y="80" fill="#60a5fa" font-family="sans-serif" font-size="12" font-weight="bold">6 (Vena Cava)</text>
        
        <!-- Right Atrium / Auricle (Label 1) -->
        <circle cx="140" cy="110" r="18" fill="#1d4ed8" stroke="#1e40af" stroke-width="1"/>
        <text x="135" y="114" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold">1</text>
        
        <!-- Left Atrium / Auricle (Label 3) -->
        <circle cx="230" cy="110" r="18" fill="#991b1b" stroke="#7f1d1d" stroke-width="1"/>
        <text x="226" y="114" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold">3</text>
        
        <!-- Right Ventricle (Label 5) -->
        <path d="M145,140 C145,170 175,190 175,190" fill="none" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>
        <text x="125" y="170" fill="#60a5fa" font-family="sans-serif" font-size="11" font-weight="bold">5 (RV)</text>
        
        <!-- Left Ventricle (Label 4) -->
        <path d="M225,140 C225,180 195,210 195,210" fill="none" stroke="#dc2626" stroke-width="12" stroke-linecap="round"/>
        <text x="215" y="180" fill="#f87171" font-family="sans-serif" font-size="11" font-weight="bold">4 (LV)</text>
        
        <!-- Legend/Labels -->
        <text x="20" y="250" fill="#94a3b8" font-family="sans-serif" font-size="11">Structure 6 receives deoxygenated blood from the body.</text>
      </svg>`,
      caption: `Figure ${questionNumber}: Stylized Internal Chambers of the Human Heart`
    };
  }

  // 5b. Connected Incline Blocks with Pulley (Physics Model Exam Q23)
  if (subjectId === 'subj-phys' && qLower.includes('incline') && qLower.includes('pulley') && qLower.includes('coefficient')) {
    return {
      svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="380" height="200" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
        <text x="110" y="24" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="bold">Incline Pulley System (Blocks A &amp; B)</text>
        
        <!-- Triangle incline (37 degrees) -->
        <polygon points="40,160 280,160 280,70" fill="#1e293b" stroke="#334155" stroke-width="2"/>
        <text x="65" y="155" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">37°</text>
        
        <!-- Block A on incline -->
        <g transform="translate(160,115) rotate(-20.5)">
          <rect x="-20" y="-15" width="40" height="30" rx="2" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
          <text x="-8" y="5" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold">A</text>
          <!-- Mass label -->
          <text x="-15" y="-22" fill="#10b981" font-family="sans-serif" font-size="10">10 kg</text>
        </g>
        
        <!-- Pulley at top vertex (280, 70) -->
        <circle cx="280" cy="70" r="12" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
        <circle cx="280" cy="70" r="4" fill="#0f172a"/>
        
        <!-- String from A to Pulley -->
        <!-- Block A center is approx (160, 115) but rotated. String leaves A at (160 - 20*sin20, 115 - 20*cos20) = approx (153, 96) and runs parallel to incline to pulley (280, 70) -->
        <line x1="150" y1="118" x2="275" y2="60" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="2,2"/>
        
        <!-- String from Pulley to B -->
        <line x1="292" y1="70" x2="292" y2="120" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- Block B hanging vertically -->
        <rect x="272" y="120" width="40" height="30" rx="2" fill="#a855f7" stroke="#7e22ce" stroke-width="1.5"/>
        <text x="288" y="138" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold">B</text>
        <text x="318" y="138" fill="#c084fc" font-family="sans-serif" font-size="10">10 kg</text>
        
        <!-- Floor line -->
        <line x1="20" y1="160" x2="360" y2="160" stroke="#475569" stroke-width="2"/>
      </svg>`,
      caption: `Figure ${questionNumber}: Friction-coupled Incline Plane with Hanging Counterweight Block B`
    };
  }

  // 5c. Five Capacitors Network (Physics Model Exam Q44)
  if (subjectId === 'subj-phys' && qLower.includes('capacitor') && qLower.includes('equivalent') && qLower.includes('between a and b')) {
    return {
      svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="380" height="180" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
        <text x="110" y="24" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="bold">Capacitive Bridge Bridge Network</text>
        
        <!-- Connection A -->
        <circle cx="40" cy="90" r="5" fill="#f59e0b"/>
        <text x="25" y="94" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">A</text>
        <line x1="45" y1="90" x2="100" y2="90" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- Splitting paths -->
        <line x1="100" y1="90" x2="100" y2="50" stroke="#e2e8f0" stroke-width="2"/>
        <line x1="100" y1="90" x2="100" y2="130" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- Top Capacitors (Left & Right) -->
        <line x1="100" y1="50" x2="140" y2="50" stroke="#e2e8f0" stroke-width="2"/>
        <!-- Capacitor 1 -->
        <line x1="140" y1="40" x2="140" y2="60" stroke="#10b981" stroke-width="3"/>
        <line x1="146" y1="40" x2="146" y2="60" stroke="#10b981" stroke-width="3"/>
        <text x="135" y="32" fill="#10b981" font-family="sans-serif" font-size="10">1 μF</text>
        <line x1="146" y1="50" x2="220" y2="50" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- Middle bridging capacitor (vertical) -->
        <line x1="180" y1="50" x2="180" y2="70" stroke="#e2e8f0" stroke-width="2"/>
        <!-- Capacitor 3 (middle vertical) -->
        <line x1="170" y1="70" x2="190" y2="70" stroke="#f43f5e" stroke-width="3"/>
        <line x1="170" y1="76" x2="190" y2="76" stroke="#f43f5e" stroke-width="3"/>
        <text x="198" y="77" fill="#f43f5e" font-family="sans-serif" font-size="10">1 μF</text>
        <line x1="180" y1="76" x2="180" y2="130" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- Capacitor 2 (right top) -->
        <line x1="220" y1="50" x2="230" y2="50" stroke="#e2e8f0" stroke-width="2"/>
        <line x1="230" y1="40" x2="230" y2="60" stroke="#10b981" stroke-width="3"/>
        <line x1="236" y1="40" x2="236" y2="60" stroke="#10b981" stroke-width="3"/>
        <text x="225" y="32" fill="#10b981" font-family="sans-serif" font-size="10">1 μF</text>
        <line x1="236" y1="50" x2="280" y2="50" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- Bottom Capacitors (Left & Right) -->
        <line x1="100" y1="130" x2="140" y2="130" stroke="#e2e8f0" stroke-width="2"/>
        <!-- Capacitor 4 -->
        <line x1="140" y1="120" x2="140" y2="140" stroke="#10b981" stroke-width="3"/>
        <line x1="146" y1="120" x2="146" y2="140" stroke="#10b981" stroke-width="3"/>
        <text x="135" y="152" fill="#10b981" font-family="sans-serif" font-size="10">1 μF</text>
        <line x1="146" y1="130" x2="230" y2="130" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- Capacitor 5 -->
        <line x1="230" y1="120" x2="230" y2="140" stroke="#10b981" stroke-width="3"/>
        <line x1="236" y1="120" x2="236" y2="140" stroke="#10b981" stroke-width="3"/>
        <text x="225" y="152" fill="#10b981" font-family="sans-serif" font-size="10">1 μF</text>
        <line x1="236" y1="130" x2="280" y2="130" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- Merging at B -->
        <line x1="280" y1="50" x2="280" y2="90" stroke="#e2e8f0" stroke-width="2"/>
        <line x1="280" y1="130" x2="280" y2="90" stroke="#e2e8f0" stroke-width="2"/>
        <line x1="280" y1="90" x2="330" y2="90" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="335" cy="90" r="5" fill="#f59e0b"/>
        <text x="345" y="94" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">B</text>
      </svg>`,
      caption: `Figure ${questionNumber}: Five symmetric parallel-bridge connected 1μF capacitors`
    };
  }

  // 5d. Circular Budget Pie Chart (Aptitude Model Exam Q57-60)
  if (subjectId === 'subj-sat' && qLower.includes('circle graph') && (qLower.includes('expenditure') || qLower.includes('family distributes') || qLower.includes('rent'))) {
    return {
      svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="380" height="200" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
        <text x="110" y="24" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">Family Monthly Expenditure Circle Graph</text>
        
        <!-- Standard Stylized Multi-slice budget pie chart -->
        <circle cx="130" cy="110" r="60" fill="#1e293b" stroke="#334155" stroke-width="2.5"/>
        
        <!-- Beautiful labeled slices -->
        <!-- Food (30%) - Green -->
        <path d="M130,110 L130,50 A60,60 0 0,1 187,130 Z" fill="#10b981" opacity="0.85"/>
        <!-- Rent (20%) - Blue -->
        <path d="M130,110 L187,130 A60,60 0 0,1 130,170 Z" fill="#3b82f6" opacity="0.85"/>
        <!-- Clothing (15%) - Purple -->
        <path d="M130,110 L130,170 A60,60 0 0,1 80,140 Z" fill="#a855f7" opacity="0.85"/>
        <!-- Tax (12%) - Red -->
        <path d="M130,110 L80,140 A60,60 0 0,1 70,110 Z" fill="#ef4444" opacity="0.85"/>
        <!-- Transport (8%) - Orange -->
        <path d="M130,110 L70,110 A60,60 0 0,1 80,80 Z" fill="#f97316" opacity="0.85"/>
        <!-- Miscell (10%) - Pink -->
        <path d="M130,110 L80,80 A60,60 0 0,1 110,54 Z" fill="#ec4899" opacity="0.85"/>
        <!-- Entertainment (5%) - Yellow -->
        <path d="M130,110 L110,54 A60,60 0 0,1 130,50 Z" fill="#eab308" opacity="0.85"/>
        
        <!-- Labels / Legend -->
        <g transform="translate(225, 45)">
          <rect x="0" y="0" width="10" height="10" fill="#10b981"/>
          <text x="16" y="9" fill="#cbd5e1" font-family="sans-serif" font-size="10">Food 30%</text>
          
          <rect x="0" y="18" width="10" height="10" fill="#3b82f6"/>
          <text x="16" y="27" fill="#cbd5e1" font-family="sans-serif" font-size="10">Rent 20%</text>
          
          <rect x="0" y="36" width="10" height="10" fill="#a855f7"/>
          <text x="16" y="45" fill="#cbd5e1" font-family="sans-serif" font-size="10">Clothing 15%</text>
          
          <rect x="0" y="54" width="10" height="10" fill="#ef4444"/>
          <text x="16" y="63" fill="#cbd5e1" font-family="sans-serif" font-size="10">Tax 12%</text>
          
          <rect x="0" y="72" width="10" height="10" fill="#f97316"/>
          <text x="16" y="81" fill="#cbd5e1" font-family="sans-serif" font-size="10">Transport 8%</text>

          <rect x="0" y="90" width="10" height="10" fill="#ec4899"/>
          <text x="16" y="99" fill="#cbd5e1" font-family="sans-serif" font-size="10">Miscell 10%</text>

          <rect x="0" y="108" width="10" height="10" fill="#eab308"/>
          <text x="16" y="117" fill="#cbd5e1" font-family="sans-serif" font-size="10">Entert. 5%</text>
        </g>
      </svg>`,
      caption: `Figure ${questionNumber}: Budget Pie-Chart showing distribution percentages across 7 expenditure centers`
    };
  }

  return null;
}
