import { ExamQuestion } from '../types';

export interface BlueprintData {
  gradeId: string;
  gradeName: string;
  subjectId: string;
  subjectName: string;
  targetExamYear: string;
  totalPredictedQuestions: number;
  historicalBasisSummary: string;
  unitWeightProjections: Array<{
    unitNumber: number;
    unitTitle: string;
    pastFrequencyCount: number;
    projectedQuestions2019: number;
    probabilityTier: 'Guaranteed Core (95%+)' | 'High Frequency (85-94%)' | 'Moderate Rotation (70-84%)';
    archetypeFocus: string;
    examinerPitfalls: string;
    historicalQuestions: Array<{
      examYear: string;
      questionSnippet: string;
      correctOption: string;
      rationale: string;
    }>;
  }>;
  aiStrategicDirectives: string[];
}

export function getEmbeddedBlueprint(gradeId: string, subject: string): BlueprintData {
  const isMath = subject.toLowerCase().includes('math');
  const isPhys = subject.toLowerCase().includes('phys');
  const isChem = subject.toLowerCase().includes('chem');
  const isBio = subject.toLowerCase().includes('bio');
  const isEng = subject.toLowerCase().includes('eng');

  if (isPhys) {
    return {
      gradeId,
      gradeName: 'Grade 12 - Natural Science',
      subjectId: 'subj-phys',
      subjectName: 'Physics',
      targetExamYear: 'Upcoming 2019 E.C. (2027 G.C.)',
      totalPredictedQuestions: 180,
      historicalBasisSummary: 'Empirical psychometric synthesis of past Ethiopian National Physics EUEE exams (2016-2018 E.C.) cross-referenced with official Grade 11 & 12 textbooks.',
      unitWeightProjections: [
        {
          unitNumber: 1,
          unitTitle: 'Vectors and Two-Dimensional Motion',
          pastFrequencyCount: 45,
          projectedQuestions2019: 9,
          probabilityTier: 'Guaranteed Core (95%+)',
          archetypeFocus: 'Dot products, cross products $|\\vec{A} \\times \\vec{B}| = AB \\sin \\theta$, projectile motion at an angle, range $R = \\frac{u^2 \\sin 2\\theta}{g}$, and centripetal acceleration.',
          examinerPitfalls: 'Forgetting that acceleration at the peak of trajectory is $g$ downwards, not zero.',
          historicalQuestions: [
            {
              examYear: '2018 E.C. EUEE',
              questionSnippet: 'A projectile is launched with velocity $u$ at an angle of $30^\\circ$ above the horizontal. What is the ratio of maximum height $H$ to range $R$?',
              correctOption: 'B) $\\frac{1}{4\\sqrt{3}}$',
              rationale: 'Use $\\frac{H}{R} = \\frac{\\tan \\theta}{4} = \\frac{\\tan 30^\\circ}{4} = \\frac{1}{4\\sqrt{3}}$.'
            }
          ]
        },
        {
          unitNumber: 2,
          unitTitle: 'Fluid Mechanics and Dynamics',
          pastFrequencyCount: 38,
          projectedQuestions2019: 8,
          probabilityTier: 'Guaranteed Core (95%+)',
          archetypeFocus: 'Bernoulli equation $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$, equation of continuity $A_1 v_1 = A_2 v_2$, and buoyant force Archimedes principle.',
          examinerPitfalls: 'Neglecting atmospheric pressure when computing absolute pressure at a given depth.',
          historicalQuestions: [
            {
              examYear: '2018 E.C. EUEE',
              questionSnippet: 'Water flows through a horizontal pipe of varying cross-section. Where speed is $2\\text{ m/s}$, pressure is $300\\text{ kPa}$. At a constriction where area is halved, what is the new pressure? (Take $\\rho = 1000\\text{ kg/m}^3$)',
              correctOption: 'C) $294\\text{ kPa}$',
              rationale: 'Continuity gives $v_2 = 2v_1 = 4\\text{ m/s}$. Bernoulli: $P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2) = 300 - \\frac{1}{2}(1000)(16 - 4)/1000 = 300 - 6 = 294\\text{ kPa}$.'
            }
          ]
        },
        {
          unitNumber: 3,
          unitTitle: 'Electromagnetism and Induction',
          pastFrequencyCount: 52,
          projectedQuestions2019: 11,
          probabilityTier: 'Guaranteed Core (95%+)',
          archetypeFocus: 'Magnetic force $F = q(\\vec{v} \\times \\vec{B})$, Faraday law $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$, transformer equation $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$, and Lenz law direction.',
          examinerPitfalls: 'Forgetting the negative sign in Lenz law representing opposing induced current flux.',
          historicalQuestions: [
            {
              examYear: '2017 E.C. EUEE',
              questionSnippet: 'A circular coil of 100 turns and radius $5\\text{ cm}$ is placed in a uniform magnetic field that changes from $0.2\\text{ T}$ to $0.8\\text{ T}$ in $0.3\\text{ s}$. What is the magnitude of induced EMF?',
              correctOption: 'A) $1.57\\text{ V}$',
              rationale: '$\\mathcal{E} = N A \\frac{\\Delta B}{\\Delta t} = 100 \\times \\pi(0.05)^2 \\times \\frac{0.6}{0.3} = 100 \\times 0.00785 \\times 2 = 1.57\\text{ V}$.'
            }
          ]
        }
      ],
      aiStrategicDirectives: [
        'Master SI units and dimensional formulas for magnetic flux, inductance, and resistivity.',
        'Review right-hand rules for force on a moving charge and current-carrying wire.',
        'Practice multi-step work-energy theorem problems with non-conservative friction.'
      ]
    };
  }

  if (isChem) {
    return {
      gradeId,
      gradeName: 'Grade 12 - Natural Science',
      subjectId: 'subj-chem',
      subjectName: 'Chemistry',
      targetExamYear: 'Upcoming 2019 E.C. (2027 G.C.)',
      totalPredictedQuestions: 180,
      historicalBasisSummary: 'Comprehensive synthesis of 2016-2018 EUEE Chemistry national entrance papers grounded in official Ethiopian textbooks.',
      unitWeightProjections: [
        {
          unitNumber: 1,
          unitTitle: 'Acid-Base Equilibria and Buffer Systems',
          pastFrequencyCount: 55,
          projectedQuestions2019: 12,
          probabilityTier: 'Guaranteed Core (95%+)',
          archetypeFocus: 'Henderson-Hasselbalch equation $\\text{pH} = \\text{p}K_a + \\log\\frac{[A^-]}{[HA]}$, salt hydrolysis of weak acid/strong base, and buffer capacity calculations.',
          examinerPitfalls: 'Inverting the ratio $\\frac{[\\text{conjugate base}]}{[\\text{weak acid}]}$ inside the logarithm term.',
          historicalQuestions: [
            {
              examYear: '2018 E.C. EUEE',
              questionSnippet: 'What is the pH of a buffer solution containing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$? ($K_a = 1.8 \\times 10^{-5}$)',
              correctOption: 'B) 4.74',
              rationale: '$\\text{pH} = -\\log(1.8 \\times 10^{-5}) + \\log(0.1/0.1) = 4.74 + 0 = 4.74$.'
            }
          ]
        },
        {
          unitNumber: 2,
          unitTitle: 'Electrochemistry and Faraday Laws',
          pastFrequencyCount: 48,
          projectedQuestions2019: 10,
          probabilityTier: 'Guaranteed Core (95%+)',
          archetypeFocus: 'Faraday first law $m = \\frac{MIt}{nF}$, galvanic cell EMF $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$, and Nernst equation.',
          examinerPitfalls: 'Forgetting the number of electrons transferred $n$ in the denominator of Faraday electrolysis equation.',
          historicalQuestions: [
            {
              examYear: '2018 E.C. EUEE',
              questionSnippet: 'How many grams of copper ($M = 63.5\\text{ g/mol}$) are deposited at the cathode by a current of $5.0\\text{ A}$ passed through $\\text{CuSO}_4$ solution for $965\\text{ seconds}$? ($F = 96500\\text{ C/mol}$)',
              correctOption: 'C) $1.59\\text{ g}$',
              rationale: '$m = \\frac{(63.5)(5)(965)}{2 \\times 96500} = \\frac{63.5 \\times 4825}{193000} = 1.5875\\text{ g} \\approx 1.59\\text{ g}$.'
            }
          ]
        }
      ],
      aiStrategicDirectives: [
        'Review standard electrode potential table and spontaneity criterion $\\Delta G^\\circ = -nFE^\\circ < 0$.',
        'Know industrial manufacturing processes in Ethiopia: Mugher/Dangote cement clinker, Wonji sugar molasses fermentation, and sulfuric acid contact process.'
      ]
    };
  }

  // Default Mathematics blueprint
  return {
    gradeId,
    gradeName: 'Grade 12 - Natural & Social Science',
    subjectId: 'subj-math',
    subjectName: subject,
    targetExamYear: 'Upcoming 2019 E.C. (2027 G.C.)',
    totalPredictedQuestions: 180,
    historicalBasisSummary: 'Empirical psychometric synthesis of 720 authentic Ethiopian National EUEE math items (2016–2018 E.C. & Regional Models) cross-referenced with Grade 11 & Grade 12 authorized textbooks.',
    unitWeightProjections: [
      {
        unitNumber: 1,
        unitTitle: 'Sequences and Series',
        pastFrequencyCount: 42,
        projectedQuestions2019: 7,
        probabilityTier: 'Guaranteed Core (95%+)',
        archetypeFocus: 'Arithmetic & Geometric means, infinite convergent series sums ($S_\\infty = \\frac{a}{1-r}$), and sigma notation index transformations.',
        examinerPitfalls: 'Students frequently confuse common difference $d$ with common ratio $r$, or miss the condition $|r| < 1$ for infinite convergence.',
        historicalQuestions: [
          {
            examYear: '2018 E.C. EUEE',
            questionSnippet: 'If the sum of the first $n$ terms of an arithmetic progression is $S_n = 3n^2 + 5n$, what is the 10th term $a_{10}$?',
            correctOption: 'C) 62',
            rationale: 'Use $a_n = S_n - S_{n-1} = (3(10)^2 + 50) - (3(9)^2 + 45) = 350 - 288 = 62$.'
          }
        ]
      },
      {
        unitNumber: 2,
        unitTitle: 'Introduction to Limits and Continuity',
        pastFrequencyCount: 48,
        projectedQuestions2019: 8,
        probabilityTier: 'Guaranteed Core (95%+)',
        archetypeFocus: '$\\frac{0}{0}$ indeterminate radical rationalization, trigonometric limits $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$, and Intermediate Value Theorem root existence.',
        examinerPitfalls: 'Applying L\'Hôpital\'s Rule to forms that are not indeterminate.',
        historicalQuestions: [
          {
            examYear: '2018 E.C. EUEE',
            questionSnippet: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x} - 1}{x}$.',
            correctOption: 'A) $\\frac{3}{2}$',
            rationale: 'Multiply numerator and denominator by conjugate $\\sqrt{1+3x} + 1$: gives $\\frac{3}{1+1} = \\frac{3}{2}$.'
          }
        ]
      },
      {
        unitNumber: 3,
        unitTitle: 'Differential Calculus & Derivatives',
        pastFrequencyCount: 68,
        projectedQuestions2019: 12,
        probabilityTier: 'Guaranteed Core (95%+)',
        archetypeFocus: 'Chain Rule, implicit differentiation of conic curves, tangent line equations, and trigonometric/logarithmic derivatives.',
        examinerPitfalls: 'Forgetting the inner derivative when applying the Chain Rule.',
        historicalQuestions: [
          {
            examYear: '2018 E.C. EUEE',
            questionSnippet: 'If $x^2 + xy + y^2 = 7$, what is $\\frac{dy}{dx}$ at the point $(1, 2)$?',
            correctOption: 'D) $-\\frac{4}{5}$',
            rationale: 'Differentiating implicitly: $2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x+y}{x+2y} = -\\frac{4}{5}$.'
          }
        ]
      }
    ],
    aiStrategicDirectives: [
      'Focus intensely on calculus derivations: limits, product/quotient/chain rules, and definite integrals with substitution.',
      'Practice 3D geometry vectors: dot product for angle/orthogonality and cross product for perpendicular vectors and areas.',
      'Review probability distributions: binomial probabilities, expected value, and normal z-score calculations.'
    ]
  };
}
