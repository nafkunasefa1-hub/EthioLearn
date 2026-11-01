/**
 * Authentic Scientific Illustration & Curriculum Diagram Engine.
 *
 * STRICT USER INTENT RULE:
 * - DO NOT add diagrams to all chat questions.
 * - Only provide an authentic, labeled visual diagram/image when:
 *   1. The student explicitly requests an image, picture, or diagram (e.g., "show image of cell", "draw a neuron", "diagram of heart"), OR
 *   2. The question is specifically centered on a core biological or physical anatomical structure
 *      (e.g., cell structure, plant cell, animal cell, mitochondria, chloroplast, heart, neuron, atom Bohr model, DNA, nephron, reflex arc)
 *      that inherently requires a visual anatomical representation.
 * - For all other questions (algebra, essays, definitions, historical facts, grammar, philosophy): returns NULL.
 */

export interface ScientificIllustration {
  svg: string;
  caption: string;
  topic: string;
}

export function getScientificIllustrationForQuestion(rawQuestion: string): ScientificIllustration | null {
  if (!rawQuestion) return null;
  const q = rawQuestion.toLowerCase().trim();

  // Check if user explicitly asked for an image/diagram/picture
  const asksForVisual = /\b(image|picture|diagram|draw|figure|sketch|photo|illustration|visual|structure)\b/i.test(q);

  // 1. BIOLOGICAL CELL (Animal Cell, Plant Cell, or General Eukaryotic Cell)
  if (
    q.includes('plant cell') ||
    (q.includes('cell') && (q.includes('plant') || q.includes('chloroplast') || q.includes('wall') || q.includes('vacuole')))
  ) {
    return {
      topic: 'Plant Cell Structure',
      caption: 'Authentic Scientific Figure: Ultrastructure of a Eukaryotic Plant Cell (Showing Cell Wall, Large Central Vacuole, and Chloroplasts)',
      svg: `<svg viewBox="0 0 540 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-emerald-400">
        <rect width="540" height="360" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <defs>
          <radialGradient id="plantCellBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#064e3b" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#022c22" stop-opacity="0.05"/>
          </radialGradient>
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#059669"/>
            <stop offset="100%" stop-color="#10b981"/>
          </linearGradient>
        </defs>

        <!-- Outer Rigid Cell Wall -->
        <rect x="70" y="40" width="320" height="260" rx="28" fill="url(#plantCellBg)" stroke="url(#wallGrad)" stroke-width="8"/>
        <!-- Inner Cell Membrane -->
        <rect x="80" y="50" width="300" height="240" rx="20" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="4,2"/>

        <!-- Large Central Vacuole -->
        <path d="M 120,110 C 130,80 250,80 260,120 C 270,160 250,220 200,230 C 140,240 110,210 110,160 Z" fill="#0284c7" opacity="0.35" stroke="#38bdf8" stroke-width="2"/>
        <text x="145" y="160" fill="#7dd3fc" font-family="sans-serif" font-size="12" font-weight="bold">Central Vacuole</text>
        <text x="155" y="176" fill="#bae6fd" font-family="sans-serif" font-size="10">(Turgor Pressure)</text>

        <!-- Nucleus with Nucleolus -->
        <circle cx="310" cy="120" r="38" fill="#1e1b4b" stroke="#818cf8" stroke-width="2.5"/>
        <circle cx="310" cy="120" r="14" fill="#4338ca" stroke="#a5b4fc" stroke-width="1.5"/>
        <text x="290" y="124" fill="#ffffff" font-family="sans-serif" font-size="9" font-weight="bold">Nucleolus</text>

        <!-- Chloroplasts with Grana Stacks -->
        <g transform="translate(100,60)">
          <ellipse cx="20" cy="14" rx="20" ry="12" fill="#047857" stroke="#6ee7b7" stroke-width="1.5"/>
          <line x1="8" y1="12" x2="30" y2="12" stroke="#a7f3d0" stroke-width="1.5"/>
          <line x1="12" y1="16" x2="26" y2="16" stroke="#a7f3d0" stroke-width="1.5"/>
        </g>
        <g transform="translate(300,230)">
          <ellipse cx="20" cy="14" rx="20" ry="12" fill="#047857" stroke="#6ee7b7" stroke-width="1.5"/>
          <line x1="8" y1="12" x2="30" y2="12" stroke="#a7f3d0" stroke-width="1.5"/>
          <line x1="12" y1="16" x2="26" y2="16" stroke="#a7f3d0" stroke-width="1.5"/>
        </g>
        <g transform="translate(90,220)">
          <ellipse cx="20" cy="14" rx="20" ry="12" fill="#047857" stroke="#6ee7b7" stroke-width="1.5"/>
          <line x1="8" y1="12" x2="30" y2="12" stroke="#a7f3d0" stroke-width="1.5"/>
        </g>

        <!-- Mitochondria -->
        <g transform="translate(240,240)">
          <ellipse cx="18" cy="10" rx="18" ry="9" fill="#991b1b" stroke="#f87171" stroke-width="1.5"/>
          <path d="M 8,10 Q 14,6 18,10 T 28,10" fill="none" stroke="#fca5a5" stroke-width="1.5"/>
        </g>

        <!-- Labels and Pointers -->
        <!-- Pointer to Cell Wall -->
        <line x1="70" y1="45" x2="30" y2="35" stroke="#10b981" stroke-width="1.5"/>
        <text x="15" y="30" fill="#34d399" font-family="sans-serif" font-size="11" font-weight="bold">Cell Wall (Cellulose)</text>

        <!-- Pointer to Cell Membrane -->
        <line x1="80" y1="90" x2="20" y2="90" stroke="#34d399" stroke-width="1.5"/>
        <text x="10" y="86" fill="#6ee7b7" font-family="sans-serif" font-size="10">Cell Membrane</text>

        <!-- Pointer to Chloroplast -->
        <line x1="120" y1="65" x2="410" y2="50" stroke="#10b981" stroke-width="1.2" stroke-dasharray="2,2"/>
        <text x="415" y="52" fill="#34d399" font-family="sans-serif" font-size="11" font-weight="bold">Chloroplast (Photosynthesis)</text>

        <!-- Pointer to Nucleus -->
        <line x1="335" y1="105" x2="410" y2="105" stroke="#818cf8" stroke-width="1.5"/>
        <text x="415" y="109" fill="#a5b4fc" font-family="sans-serif" font-size="11" font-weight="bold">Nucleus &amp; DNA</text>

        <!-- Pointer to Mitochondrion -->
        <line x1="265" y1="250" x2="410" y2="250" stroke="#f87171" stroke-width="1.5"/>
        <text x="415" y="254" fill="#fca5a5" font-family="sans-serif" font-size="11" font-weight="bold">Mitochondrion (ATP)</text>

        <!-- Pointer to Cytoplasm -->
        <line x1="280" y1="190" x2="410" y2="190" stroke="#fbbf24" stroke-width="1.2"/>
        <text x="415" y="194" fill="#fcd34d" font-family="sans-serif" font-size="11" font-weight="bold">Cytoplasm (Cytosol)</text>
      </svg>`
    };
  }

  // General or Animal Cell
  if (
    q.includes('animal cell') ||
    q.includes('cell structure') ||
    q.includes('eukaryotic cell') ||
    q.includes('organelle') ||
    q === 'what is a cell' ||
    q.includes('what is a cell') ||
    q.includes('parts of a cell') ||
    q.includes('diagram of a cell') ||
    q.includes('image of a cell') ||
    q.includes('image of cell') ||
    q.includes('picture of cell') ||
    (q.includes('cell') && asksForVisual) ||
    (q.startsWith('cell') && q.length < 25)
  ) {
    return {
      topic: 'Animal Cell Ultrastructure',
      caption: 'Authentic Scientific Figure: Internal Ultrastructure & Organelles of a Typical Animal Cell',
      svg: `<svg viewBox="0 0 540 370" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="540" height="370" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <defs>
          <radialGradient id="animalCellGrad" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.6"/>
            <stop offset="60%" stop-color="#0f172a" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#020617" stop-opacity="0.95"/>
          </radialGradient>
        </defs>

        <!-- Flexible Animal Cell Membrane (Phospholipid Bilayer) -->
        <path d="M 120,70 C 220,40 340,50 390,110 C 430,170 410,270 340,310 C 260,345 130,320 80,250 C 50,190 60,90 120,70 Z"
          fill="url(#animalCellGrad)" stroke="#38bdf8" stroke-width="3.5"/>

        <!-- Prominent Nucleus -->
        <g transform="translate(200,160)">
          <!-- Nuclear Envelope -->
          <circle cx="0" cy="0" r="48" fill="#311042" stroke="#c084fc" stroke-width="2.5"/>
          <!-- Chromatin threads -->
          <path d="M -25,-15 Q -10,-25 5,-15 T 25,-5 Q 10,20 -15,15" fill="none" stroke="#e879f9" stroke-width="1.5" opacity="0.6"/>
          <!-- Nucleolus -->
          <circle cx="-5" cy="-2" r="16" fill="#a21caf" stroke="#f0abfc" stroke-width="1.5"/>
          <text x="-22" y="2" fill="#ffffff" font-family="sans-serif" font-size="9" font-weight="bold">Nucleolus</text>
        </g>

        <!-- Rough Endoplasmic Reticulum with Ribosome Dots -->
        <path d="M 170,105 C 150,90 220,75 260,95 C 250,110 180,115 170,105 Z" fill="#4338ca" opacity="0.7" stroke="#818cf8" stroke-width="1.5"/>
        <circle cx="185" cy="98" r="1.5" fill="#ffffff"/>
        <circle cx="205" cy="92" r="1.5" fill="#ffffff"/>
        <circle cx="230" cy="96" r="1.5" fill="#ffffff"/>

        <!-- Smooth ER -->
        <path d="M 280,180 Q 320,170 320,200 T 290,225" fill="none" stroke="#a5b4fc" stroke-width="4" stroke-linecap="round"/>

        <!-- Golgi Apparatus -->
        <g transform="translate(130,230)">
          <path d="M 0,0 Q 25,-10 50,0" fill="none" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M 5,10 Q 28,0 52,10" fill="none" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M 12,20 Q 30,12 55,20" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
          <circle cx="58" cy="1" r="3" fill="#fbbf24"/>
          <circle cx="60" cy="12" r="3.5" fill="#fbbf24"/>
        </g>

        <!-- Mitochondria with Cristae Foldings -->
        <g transform="translate(320,100)">
          <ellipse cx="22" cy="12" rx="22" ry="12" fill="#881337" stroke="#fb7185" stroke-width="1.8"/>
          <path d="M 6,12 Q 14,6 22,12 T 36,12" fill="none" stroke="#fecdd3" stroke-width="1.8"/>
        </g>
        <g transform="translate(110,130)">
          <ellipse cx="20" cy="11" rx="20" ry="11" fill="#881337" stroke="#fb7185" stroke-width="1.8"/>
          <path d="M 6,11 Q 13,6 20,11 T 32,11" fill="none" stroke="#fecdd3" stroke-width="1.8"/>
        </g>

        <!-- Lysosomes -->
        <circle cx="280" cy="270" r="10" fill="#047857" stroke="#34d399" stroke-width="1.5"/>
        <circle cx="160" cy="80" r="8" fill="#047857" stroke="#34d399" stroke-width="1.5"/>

        <!-- Centrioles / Centrosome -->
        <g transform="translate(260,125)">
          <line x1="0" y1="0" x2="12" y2="0" stroke="#38bdf8" stroke-width="3"/>
          <line x1="6" y1="-6" x2="6" y2="6" stroke="#38bdf8" stroke-width="3"/>
        </g>

        <!-- Descriptive Pointer Labels -->
        <!-- Cell Membrane Pointer -->
        <line x1="85" y1="90" x2="20" y2="60" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="10" y="55" fill="#38bdf8" font-family="sans-serif" font-size="11" font-weight="bold">Cell Membrane (Lipid Bilayer)</text>

        <!-- Nucleus Pointer -->
        <line x1="200" y1="120" x2="380" y2="40" stroke="#c084fc" stroke-width="1.5"/>
        <text x="385" y="42" fill="#c084fc" font-family="sans-serif" font-size="11" font-weight="bold">Nucleus (Genetic Control)</text>

        <!-- Mitochondrion Pointer -->
        <line x1="345" y1="105" x2="410" y2="105" stroke="#fb7185" stroke-width="1.5"/>
        <text x="415" y="108" fill="#fb7185" font-family="sans-serif" font-size="11" font-weight="bold">Mitochondrion (ATP Powerhouse)</text>

        <!-- Endoplasmic Reticulum Pointer -->
        <line x1="220" y1="85" x2="390" y2="150" stroke="#818cf8" stroke-width="1.2"/>
        <text x="395" y="154" fill="#a5b4fc" font-family="sans-serif" font-size="11" font-weight="bold">Endoplasmic Reticulum (ER)</text>

        <!-- Golgi Apparatus Pointer -->
        <line x1="160" y1="245" x2="20" y2="280" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="10" y="295" fill="#fbbf24" font-family="sans-serif" font-size="11" font-weight="bold">Golgi Body (Packaging &amp; Secretion)</text>

        <!-- Lysosome Pointer -->
        <line x1="280" y1="280" x2="350" y2="330" stroke="#34d399" stroke-width="1.5"/>
        <text x="355" y="334" fill="#34d399" font-family="sans-serif" font-size="11" font-weight="bold">Lysosome (Digestive Enzymes)</text>

        <!-- Cytoplasm Pointer -->
        <line x1="220" y1="300" x2="80" y2="345" stroke="#94a3b8" stroke-width="1.2"/>
        <text x="70" y="360" fill="#cbd5e1" font-family="sans-serif" font-size="11">Cytosol / Cytoplasm</text>
      </svg>`
    };
  }

  // 2. MITOCHONDRIA
  if (q.includes('mitochondri') && (asksForVisual || q.includes('structure') || q.includes('cristae') || q.includes('atp'))) {
    return {
      topic: 'Mitochondrion Structure',
      caption: 'Authentic Scientific Figure: Double-Membrane Anatomy of a Mitochondrion with Cristae and Matrix',
      svg: `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="520" height="280" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Outer Membrane -->
        <ellipse cx="230" cy="140" rx="170" ry="95" fill="#450a0a" stroke="#ef4444" stroke-width="3"/>
        <!-- Inner Membrane Cristae -->
        <path d="M 80,140 C 90,75 370,75 380,140 C 370,205 90,205 80,140 Z" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
        <!-- Invaginations (Cristae) -->
        <path d="M 120,80 Q 150,130 180,85 M 200,85 Q 220,145 250,85 M 280,90 Q 300,135 330,95 M 130,195 Q 160,145 190,195 M 220,195 Q 240,140 270,195 M 290,190 Q 320,145 345,185"
          fill="none" stroke="#fca5a5" stroke-width="2.5" stroke-linecap="round"/>
        <!-- ATP Synthase complexes dots -->
        <circle cx="160" cy="135" r="3" fill="#facc15"/>
        <circle cx="230" cy="140" r="3" fill="#facc15"/>
        <circle cx="310" cy="138" r="3" fill="#facc15"/>
        <!-- Matrix text -->
        <text x="210" y="165" fill="#fecaca" font-family="sans-serif" font-size="11" font-weight="bold">Matrix</text>

        <!-- Labels -->
        <line x1="230" y1="45" x2="380" y2="35" stroke="#ef4444" stroke-width="1.5"/>
        <text x="385" y="38" fill="#f87171" font-family="sans-serif" font-size="11" font-weight="bold">Outer Membrane</text>

        <line x1="240" y1="88" x2="390" y2="75" stroke="#fca5a5" stroke-width="1.5"/>
        <text x="395" y="78" fill="#fca5a5" font-family="sans-serif" font-size="11" font-weight="bold">Cristae (Folds)</text>

        <line x1="230" y1="140" x2="390" y2="135" stroke="#facc15" stroke-width="1.5"/>
        <text x="395" y="138" fill="#fde047" font-family="sans-serif" font-size="11" font-weight="bold">ATP Synthase Particles</text>

        <line x1="100" y1="140" x2="20" y2="140" stroke="#f87171" stroke-width="1.5"/>
        <text x="15" y="130" fill="#fca5a5" font-family="sans-serif" font-size="10">Intermembrane Space</text>
      </svg>`
    };
  }

  // 3. HUMAN HEART / CIRCULATORY ANATOMY
  if ((q.includes('heart') && (q.includes('human') || q.includes('chamber') || q.includes('atrium') || q.includes('ventricle') || q.includes('valve') || q.includes('structure') || asksForVisual))) {
    return {
      topic: 'Human Heart Anatomy',
      caption: 'Authentic Scientific Figure: Internal Chamber Anatomy and Great Vessels of the Human Heart',
      svg: `<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="520" height="340" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Heart Outline -->
        <!-- Right side (Blue / Deox) -->
        <path d="M 230,80 C 170,80 140,130 140,200 C 140,250 200,290 240,310 L 240,80 Z" fill="#1e3a8a" opacity="0.6" stroke="#3b82f6" stroke-width="2.5"/>
        <!-- Left side (Red / Oxygenated) -->
        <path d="M 240,80 L 240,310 C 270,300 340,250 340,190 C 340,130 310,80 240,80 Z" fill="#881337" opacity="0.6" stroke="#ef4444" stroke-width="2.5"/>

        <!-- Septum divider -->
        <line x1="240" y1="80" x2="240" y2="310" stroke="#ffffff" stroke-width="3" stroke-dasharray="4,2"/>

        <!-- Aorta arch (Top) -->
        <path d="M 240,80 C 240,30 310,30 310,70 L 295,75" fill="none" stroke="#dc2626" stroke-width="14" stroke-linecap="round"/>
        <!-- Superior Vena Cava -->
        <path d="M 170,30 L 170,90" fill="none" stroke="#2563eb" stroke-width="12" stroke-linecap="round"/>

        <!-- Chamber Labels -->
        <text x="160" y="130" fill="#93c5fd" font-family="sans-serif" font-size="12" font-weight="bold">Right Atrium</text>
        <text x="160" y="145" fill="#bfdbfe" font-family="sans-serif" font-size="10">(Deoxygenated)</text>

        <text x="155" y="235" fill="#93c5fd" font-family="sans-serif" font-size="12" font-weight="bold">Right Ventricle</text>

        <text x="255" y="130" fill="#fca5a5" font-family="sans-serif" font-size="12" font-weight="bold">Left Atrium</text>
        <text x="255" y="145" fill="#fecaca" font-family="sans-serif" font-size="10">(Oxygenated)</text>

        <text x="255" y="235" fill="#fca5a5" font-family="sans-serif" font-size="12" font-weight="bold">Left Ventricle</text>
        <text x="255" y="250" fill="#fecaca" font-family="sans-serif" font-size="9">(Thick Myocardium)</text>

        <!-- Valves -->
        <line x1="165" y1="165" x2="215" y2="165" stroke="#fbbf24" stroke-width="3"/>
        <text x="110" y="175" fill="#fcd34d" font-family="sans-serif" font-size="10">Tricuspid Valve</text>

        <line x1="265" y1="165" x2="315" y2="165" stroke="#fbbf24" stroke-width="3"/>
        <text x="325" y="175" fill="#fcd34d" font-family="sans-serif" font-size="10">Bicuspid (Mitral) Valve</text>

        <!-- External Labels -->
        <text x="325" y="45" fill="#f87171" font-family="sans-serif" font-size="11" font-weight="bold">Aorta (To Systemic Body)</text>
        <text x="20" y="45" fill="#60a5fa" font-family="sans-serif" font-size="11" font-weight="bold">Superior Vena Cava</text>
      </svg>`
    };
  }

  // 4. NEURON / NERVE CELL
  if (q.includes('neuron') || (q.includes('nerve cell') && (asksForVisual || q.includes('axon') || q.includes('dendrite') || q.includes('synapse') || q.includes('structure')))) {
    return {
      topic: 'Multipolar Neuron Anatomy',
      caption: 'Authentic Scientific Figure: Structural Anatomy of a Motor Neuron (Dendrites, Soma, Myelinated Axon, and Terminal)',
      svg: `<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="540" height="240" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Soma (Cell Body) -->
        <polygon points="70,120 40,70 90,50 110,90 120,60 135,110 120,150 90,170 50,150" fill="#1e1b4b" stroke="#818cf8" stroke-width="2.5"/>
        <!-- Nucleus -->
        <circle cx="85" cy="115" r="16" fill="#4338ca" stroke="#c7d2fe" stroke-width="1.5"/>
        <text x="73" y="119" fill="#ffffff" font-family="sans-serif" font-size="9" font-weight="bold">Nucleus</text>

        <!-- Dendrites branching out -->
        <path d="M 40,70 L 15,40 M 40,70 L 10,80 M 90,50 L 95,15 M 120,60 L 150,30 M 50,150 L 20,180 M 90,170 L 100,210"
          stroke="#818cf8" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Long Axon -->
        <line x1="135" y1="120" x2="430" y2="120" stroke="#38bdf8" stroke-width="4"/>

        <!-- Myelin Sheaths (Schwann Cells) -->
        <g transform="translate(160,105)">
          <rect x="0" y="0" width="50" height="30" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="10" y="19" fill="#a7f3d0" font-family="sans-serif" font-size="9" font-weight="bold">Myelin</text>
        </g>
        <g transform="translate(230,105)">
          <rect x="0" y="0" width="50" height="30" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="10" y="19" fill="#a7f3d0" font-family="sans-serif" font-size="9" font-weight="bold">Myelin</text>
        </g>
        <g transform="translate(300,105)">
          <rect x="0" y="0" width="50" height="30" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="10" y="19" fill="#a7f3d0" font-family="sans-serif" font-size="9" font-weight="bold">Myelin</text>
        </g>
        <g transform="translate(370,105)">
          <rect x="0" y="0" width="50" height="30" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="10" y="19" fill="#a7f3d0" font-family="sans-serif" font-size="9" font-weight="bold">Myelin</text>
        </g>

        <!-- Node of Ranvier pointer -->
        <line x1="285" y1="120" x2="285" y2="165" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="240" y="180" fill="#fbbf24" font-family="sans-serif" font-size="10" font-weight="bold">Node of Ranvier</text>

        <!-- Axon Terminals / Synaptic Knobs -->
        <path d="M 430,120 L 470,80 M 470,80 L 490,70 M 470,80 L 490,95 M 430,120 L 480,120 M 480,120 L 500,120 M 430,120 L 470,160 M 470,160 L 495,150 M 470,160 L 490,175"
          stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="490" cy="70" r="4" fill="#38bdf8"/>
        <circle cx="500" cy="120" r="4" fill="#38bdf8"/>
        <circle cx="490" cy="175" r="4" fill="#38bdf8"/>

        <!-- Labels -->
        <text x="15" y="25" fill="#a5b4fc" font-family="sans-serif" font-size="11" font-weight="bold">Dendrites (Input)</text>
        <text x="70" y="195" fill="#c7d2fe" font-family="sans-serif" font-size="11" font-weight="bold">Cell Body (Soma)</text>
        <text x="420" y="200" fill="#7dd3fc" font-family="sans-serif" font-size="11" font-weight="bold">Axon Terminals (Synapse)</text>
      </svg>`
    };
  }

  // 5. BOHR ATOM / ATOMIC STRUCTURE
  if (q.includes('bohr') || (q.includes('atom') && (q.includes('structure') || q.includes('electron') || q.includes('shell') || q.includes('nucleus') || asksForVisual))) {
    return {
      topic: 'Bohr Planetary Model of the Atom',
      caption: 'Authentic Scientific Figure: Planetary Atomic Model (Central Nucleus with Discrete Quantized Energy Shells n=1, n=2)',
      svg: `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="460" height="280" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Central Nucleus -->
        <circle cx="210" cy="140" r="24" fill="#881337" stroke="#fb7185" stroke-width="2"/>
        <text x="195" y="138" fill="#fecaca" font-family="sans-serif" font-size="10" font-weight="bold">6p⁺</text>
        <text x="195" y="152" fill="#fed7aa" font-family="sans-serif" font-size="10" font-weight="bold">6n⁰</text>

        <!-- K-Shell (n=1) -->
        <circle cx="210" cy="140" r="55" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,3"/>
        <circle cx="210" cy="85" r="5" fill="#38bdf8"/>
        <circle cx="210" cy="195" r="5" fill="#38bdf8"/>
        <text x="218" y="90" fill="#bae6fd" font-family="sans-serif" font-size="9">e⁻</text>
        <text x="218" y="200" fill="#bae6fd" font-family="sans-serif" font-size="9">e⁻</text>

        <!-- L-Shell (n=2) -->
        <circle cx="210" cy="140" r="100" fill="none" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="6,4"/>
        <circle cx="110" cy="140" r="5" fill="#818cf8"/>
        <circle cx="310" cy="140" r="5" fill="#818cf8"/>
        <circle cx="210" cy="40" r="5" fill="#818cf8"/>
        <circle cx="210" cy="240" r="5" fill="#818cf8"/>

        <!-- Labels -->
        <line x1="210" y1="120" x2="330" y2="40" stroke="#f43f5e" stroke-width="1.2"/>
        <text x="335" y="42" fill="#fb7185" font-family="sans-serif" font-size="11" font-weight="bold">Nucleus (Protons + Neutrons)</text>

        <text x="270" y="95" fill="#7dd3fc" font-family="sans-serif" font-size="10">K-shell (n = 1, Max 2e⁻)</text>
        <text x="315" y="160" fill="#a5b4fc" font-family="sans-serif" font-size="10">L-shell (n = 2, Max 8e⁻)</text>
      </svg>`
    };
  }

  // 6. DNA DOUBLE HELIX
  if (q.includes('dna') && (asksForVisual || q.includes('double helix') || q.includes('structure') || q.includes('base pair') || q.includes('nucleotide'))) {
    return {
      topic: 'DNA Double Helix',
      caption: 'Authentic Scientific Figure: Antiparallel Double Helix with Complementary Base Pairing (A=T, G≡C)',
      svg: `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="460" height="260" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Double Helix Strands -->
        <path d="M 60,60 Q 130,200 200,60 T 340,60 T 420,60" fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
        <path d="M 60,180 Q 130,40 200,180 T 340,180 T 420,180" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"/>

        <!-- Base pairs rungs -->
        <line x1="100" y1="105" x2="100" y2="135" stroke="#f59e0b" stroke-width="3"/>
        <line x1="160" y1="135" x2="160" y2="105" stroke="#a855f7" stroke-width="3"/>
        <line x1="240" y1="105" x2="240" y2="135" stroke="#f59e0b" stroke-width="3"/>
        <line x1="300" y1="135" x2="300" y2="105" stroke="#a855f7" stroke-width="3"/>

        <!-- Labels -->
        <text x="50" y="40" fill="#38bdf8" font-family="sans-serif" font-size="11" font-weight="bold">5' Strand (Sugar-Phosphate)</text>
        <text x="50" y="215" fill="#34d399" font-family="sans-serif" font-size="11" font-weight="bold">3' Complementary Strand</text>
        <text x="210" y="240" fill="#fbbf24" font-family="sans-serif" font-size="10">Hydrogen Bonded Bases: Adenine = Thymine (2 H-bonds) | Guanine ≡ Cytosine (3 H-bonds)</text>
      </svg>`
    };
  }

  // 7. CHLOROPLAST & PHOTOSYNTHESIS
  if ((q.includes('chloroplast') || q.includes('photosynthesis') || q.includes('thylakoid') || q.includes('calvin cycle')) &&
      (asksForVisual || q.includes('structure') || q.includes('diagram') || q.includes('light') || q.includes('stroma'))) {
    return {
      topic: 'Chloroplast Ultrastructure & Photosynthesis',
      caption: 'Authentic Scientific Figure: Chloroplast Anatomy with Thylakoid Grana (Light Reactions) and Stroma (Calvin Cycle)',
      svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="480" height="260" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <ellipse cx="240" cy="130" rx="200" ry="105" fill="#064e3b" fill-opacity="0.35" stroke="#10b981" stroke-width="3"/>
        <ellipse cx="240" cy="130" rx="188" ry="95" fill="#022c22" fill-opacity="0.5" stroke="#059669" stroke-width="1.5" stroke-dasharray="4 3"/>

        <!-- Grana Stacks (Thylakoids) Left -->
        <rect x="110" y="90" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="110" y="105" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="110" y="120" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="110" y="135" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="110" y="150" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>

        <!-- Connecting Stroma Lamella -->
        <path d="M 155,125 Q 195,120 220,125" fill="none" stroke="#34d399" stroke-width="2"/>
        <path d="M 265,125 Q 295,120 320,125" fill="none" stroke="#34d399" stroke-width="2"/>

        <!-- Grana Stacks Center -->
        <rect x="220" y="80" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="220" y="95" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="220" y="110" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="220" y="125" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="220" y="140" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="220" y="155" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>

        <!-- Grana Stacks Right -->
        <rect x="320" y="95" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="320" y="110" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="320" y="125" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
        <rect x="320" y="140" width="45" height="10" rx="4" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>

        <!-- Annotation Badges -->
        <text x="80" y="55" fill="#34d399" font-family="sans-serif" font-size="11" font-weight="bold">Granum (Thylakoid Stacks): Light Reactions</text>
        <text x="270" y="210" fill="#facc15" font-family="sans-serif" font-size="11" font-weight="bold">Stroma Matrix: Dark Reactions (Calvin Cycle)</text>
        <text x="50" y="240" fill="#94a3b8" font-family="sans-serif" font-size="10">Double Membrane Envelope (Outer + Inner Membrane)</text>
      </svg>`
    };
  }

  // 8. PROJECTILE MOTION & VECTOR KINEMATICS
  if ((q.includes('projectile') || q.includes('trajectory') || q.includes('launch angle') || (q.includes('kinematics') && q.includes('vector'))) &&
      (asksForVisual || q.includes('motion') || q.includes('range') || q.includes('height') || q.includes('velocity'))) {
    return {
      topic: 'Projectile Motion Kinematics & Trajectory',
      caption: 'Authentic Scientific Figure: Parabolic Trajectory under Gravity with Orthogonal Velocity Decomposition (Vx, Vy)',
      svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="480" height="260" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Axes -->
        <line x1="50" y1="210" x2="430" y2="210" stroke="#475569" stroke-width="2"/>
        <line x1="50" y1="210" x2="50" y2="30" stroke="#475569" stroke-width="2"/>
        <text x="435" y="214" fill="#94a3b8" font-family="sans-serif" font-size="10">x (Range R)</text>
        <text x="40" y="25" fill="#94a3b8" font-family="sans-serif" font-size="10">y (Height H)</text>

        <!-- Parabolic Path -->
        <path d="M 50,210 Q 240,10 430,210" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 3"/>

        <!-- Initial Velocity Vector -->
        <line x1="50" y1="210" x2="120" y2="135" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)"/>
        <circle cx="50" cy="210" r="4" fill="#38bdf8"/>
        <text x="125" y="130" fill="#38bdf8" font-family="sans-serif" font-size="10" font-weight="bold">v₀ Vector (Angle θ)</text>

        <!-- Peak Point (H_max) -->
        <circle cx="240" cy="110" r="5" fill="#ef4444"/>
        <line x1="240" y1="110" x2="290" y2="110" stroke="#10b981" stroke-width="2"/>
        <text x="295" y="114" fill="#10b981" font-family="sans-serif" font-size="10" font-weight="bold">v_y = 0 (v_x = v₀·cosθ)</text>
        <line x1="240" y1="110" x2="240" y2="210" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="180" y="160" fill="#ef4444" font-family="sans-serif" font-size="10">H_max = (v₀²·sin²θ)/(2g)</text>

        <!-- Summary Legend -->
        <text x="60" y="240" fill="#cbd5e1" font-family="sans-serif" font-size="10">Constant Horizontal Speed: a_x = 0 | Constant Vertical Acceleration: a_y = -g = -9.8 m/s²</text>
      </svg>`
    };
  }

  // 9. CONVEX LENS & RAY OPTICS
  if ((q.includes('lens') || q.includes('convex') || q.includes('optics') || q.includes('refraction') || q.includes('focal length')) &&
      (asksForVisual || q.includes('ray') || q.includes('image') || q.includes('diagram') || q.includes('focus'))) {
    return {
      topic: 'Convex Lens Image Formation & Principal Rays',
      caption: 'Authentic Scientific Figure: Thin Convex Lens Ray Diagram with Focal Points (F, 2F) and Inverted Real Image',
      svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="480" height="260" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Principal Axis -->
        <line x1="30" y1="130" x2="450" y2="130" stroke="#475569" stroke-width="1.5"/>

        <!-- Convex Lens -->
        <path d="M 240,30 C 265,90 265,170 240,230 C 215,170 215,90 240,30 Z" fill="#0284c7" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
        <line x1="240" y1="20" x2="240" y2="240" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 3"/>

        <!-- Focal points -->
        <circle cx="150" cy="130" r="3" fill="#f59e0b"/>
        <text x="146" y="148" fill="#f59e0b" font-family="sans-serif" font-size="10">F₁</text>
        <circle cx="330" cy="130" r="3" fill="#f59e0b"/>
        <text x="326" y="148" fill="#f59e0b" font-family="sans-serif" font-size="10">F₂</text>

        <!-- Object Arrow (Left) -->
        <line x1="90" y1="130" x2="90" y2="60" stroke="#10b981" stroke-width="3"/>
        <polygon points="85,65 95,65 90,55" fill="#10b981"/>
        <text x="75" y="50" fill="#10b981" font-family="sans-serif" font-size="10" font-weight="bold">Object</text>

        <!-- Ray 1: Parallel then through F₂ -->
        <line x1="90" y1="60" x2="240" y2="60" stroke="#f43f5e" stroke-width="1.5"/>
        <line x1="240" y1="60" x2="390" y2="180" stroke="#f43f5e" stroke-width="1.5"/>

        <!-- Ray 2: Through optical center -->
        <line x1="90" y1="60" x2="390" y2="180" stroke="#fbbf24" stroke-width="1.5"/>

        <!-- Inverted Real Image Arrow (Right) -->
        <line x1="390" y1="130" x2="390" y2="180" stroke="#a855f7" stroke-width="3"/>
        <polygon points="385,175 395,175 390,185" fill="#a855f7"/>
        <text x="360" y="202" fill="#a855f7" font-family="sans-serif" font-size="10" font-weight="bold">Real Inverted Image</text>

        <!-- Lens Equation Caption -->
        <text x="140" y="240" fill="#cbd5e1" font-family="sans-serif" font-size="10">Thin Lens Equation: 1/f = 1/d_o + 1/d_i | Magnification m = -d_i / d_o</text>
      </svg>`
    };
  }

  // 10. QUADRATIC PARABOLA & DISCRIMINANT GRAPH
  if ((q.includes('quadratic') || q.includes('parabola') || q.includes('discriminant') || (q.includes('roots') && q.includes('polynomial'))) &&
      (asksForVisual || q.includes('graph') || q.includes('vertex') || q.includes('curve') || q.includes('zeroes'))) {
    return {
      topic: 'Quadratic Function Graph & Parabolic Geometry',
      caption: 'Authentic Scientific Figure: Parabola y = ax² + bx + c with Vertex, Axis of Symmetry, and Roots (Δ > 0)',
      svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect width="480" height="260" rx="14" fill="#060c14" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Axes -->
        <line x1="40" y1="170" x2="440" y2="170" stroke="#475569" stroke-width="1.5"/>
        <line x1="240" y1="20" x2="240" y2="240" stroke="#475569" stroke-width="1.5"/>
        <text x="445" y="174" fill="#94a3b8" font-family="sans-serif" font-size="10">x</text>
        <text x="245" y="25" fill="#94a3b8" font-family="sans-serif" font-size="10">y</text>

        <!-- Axis of Symmetry -->
        <line x1="200" y1="20" x2="200" y2="240" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="110" y="35" fill="#f59e0b" font-family="sans-serif" font-size="10">Axis: x = -b/(2a)</text>

        <!-- Parabola Curve (a > 0) -->
        <path d="M 90,30 Q 200,310 310,30" fill="none" stroke="#38bdf8" stroke-width="3"/>

        <!-- Vertex Point -->
        <circle cx="200" cy="210" r="4" fill="#ef4444"/>
        <text x="150" y="232" fill="#ef4444" font-family="sans-serif" font-size="10" font-weight="bold">Vertex V(-b/2a, -Δ/4a)</text>

        <!-- Roots (x-intercepts) -->
        <circle cx="130" cy="170" r="4" fill="#10b981"/>
        <text x="105" y="160" fill="#10b981" font-family="sans-serif" font-size="10" font-weight="bold">x₁ Root</text>
        <circle cx="270" cy="170" r="4" fill="#10b981"/>
        <text x="275" y="160" fill="#10b981" font-family="sans-serif" font-size="10" font-weight="bold">x₂ Root</text>

        <!-- Discriminant Condition Box -->
        <text x="320" y="80" fill="#fbbf24" font-family="sans-serif" font-size="10" font-weight="bold">Δ = b² - 4ac &gt; 0 (Two Real Roots)</text>
      </svg>`
    };
  }

  // If none matched, RETURN NULL — strict rule: NO default or random diagrams on normal questions!
  return null;
}

export function fetchDiagramForKeywords(
  keywords: string[] = [],
  rawQuestion: string = ''
): ScientificIllustration | null {
  const combinedQuery = [...keywords, rawQuestion].filter(Boolean).join(' ');
  if (!combinedQuery.trim()) return null;
  return getScientificIllustrationForQuestion(combinedQuery);
}

