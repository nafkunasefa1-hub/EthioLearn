/**
 * Ethiopian National Secondary Curriculum Topic & Grade Mapping Engine.
 * Accurately determines the originating Grade (Grade 9, Grade 10, Grade 11, Grade 12)
 * for topics across all national entrance examination subjects:
 * - Mathematics (subj-math)
 * - Physics (subj-phys)
 * - Chemistry (subj-chem)
 * - Biology (subj-bio)
 * - English (subj-eng)
 * - Scholastic Aptitude Test / SAT (subj-sat / subj-apt)
 * - Social Sciences (Economics, Geography, History, Civics)
 */

export interface TopicGradeInfo {
  gradeNumber: 9 | 10 | 11 | 12 | '9-10' | '11-12';
  gradeLabel: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  unitLabel?: string;
  description?: string;
}

// Normalized topic lookup table
const CURRICULUM_GRADE_RULES: Array<{
  pattern: RegExp;
  subjectFilter?: RegExp;
  grade: 9 | 10 | 11 | 12 | '9-10' | '11-12';
  unit?: string;
}> = [
  // ===================== MATHEMATICS =====================
  // Grade 9 Math
  { pattern: /number\s*system|rational\s*numbers|real\s*numbers|algebraic\s*expression|sets?\b|linear\s*equation|linear\s*inequalit|basic\s*geometry\b|geometry\s*and\s*measurement|data\s*presentation|frequency\s*distribution/i, subjectFilter: /math/i, grade: 9, unit: 'Grade 9 Foundation' },

  // Grade 10 Math
  { pattern: /polynomial\s*function|remainder\s*theorem|factor\s*theorem|roots\s*of\s*polynomial/i, subjectFilter: /math/i, grade: 10, unit: 'Unit 1: Polynomial Functions' },
  { pattern: /exponential\s*and\s*logarithmic|logarithm|exponent/i, subjectFilter: /math/i, grade: 10, unit: 'Unit 2: Exponential & Logarithmic Functions' },
  { pattern: /trigonometric\s*function|unit\s*circle|sine\s*and\s*cosine|trigonometry\b/i, subjectFilter: /math/i, grade: 10, unit: 'Unit 3: Trigonometric Functions' },
  { pattern: /circle\s*geometry|geometry\s*of\s*(?:the\s*)?circle|inscribed\s*angle|tangent\s*to\s*circle|chord/i, subjectFilter: /math/i, grade: 10, unit: 'Unit 4: Circles & Geometry of the Circle' },
  { pattern: /solid\s*figures|mensuration|surface\s*area\s*and\s*volume|cylinder|cone|pyramid|sphere/i, subjectFilter: /math/i, grade: 10, unit: 'Unit 5: Solid Figures & Mensuration' },
  { pattern: /coordinate\s*geometry|equation\s*of\s*line|slope|distance\s*formula|midpoint/i, subjectFilter: /math/i, grade: 10, unit: 'Unit 6: Coordinate Geometry' },
  { pattern: /quadratic\s*equation|parabola\b/i, subjectFilter: /math/i, grade: 10, unit: 'Unit 1: Quadratic Models' },

  // Grade 11 Math
  { pattern: /further\s*on\s*relation|relations?\s*and\s*function|composite\s*function|inverse\s*function|injective|surjective/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 1: Relations & Functions' },
  { pattern: /rational\s*expression|rational\s*function|asymptote|partial\s*fraction/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 2: Rational Expressions & Functions' },
  { pattern: /matrices|matrix|gaussian\s*elimination|linear\s*system/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 3: Matrices & Linear Systems' },
  { pattern: /determinant|cramer/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 4: Determinants' },
  { pattern: /vectors?\s*in\s*2d|transformation\s*of\s*the\s*plane|reflection|rotation|dilation|isometry/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 5: Vectors & Transformations' },
  { pattern: /further\s*on\s*trigonometry|compound\s*angle|law\s*of\s*sines|law\s*of\s*cosines/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 6: Advanced Trigonometry' },
  { pattern: /linear\s*programming|simplex|feasible\s*region|objective\s*function/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 7: Linear Programming' },
  { pattern: /mathematical\s*logic|tautolog|proposition|truth\s*table|quantifier/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 8: Mathematical Logic' },
  { pattern: /statistics\s*and\s*probability|variance|standard\s*deviation|permutation|combination|binomial\s*theorem|measures\s*of\s*dispersion/i, subjectFilter: /math/i, grade: 11, unit: 'Unit 9: Statistics & Probability' },

  // Grade 12 Math
  { pattern: /sequences?\s*and\s*series|arithmetic\s*progression|geometric\s*progression|infinite\s*series|sigma\s*notation/i, subjectFilter: /math/i, grade: 12, unit: 'Unit 1: Sequences & Series' },
  { pattern: /limits?\s*and\s*continuity|indeterminate\s*form|l\s*hopital/i, subjectFilter: /math/i, grade: 12, unit: 'Unit 2: Limits & Continuity' },
  { pattern: /differential\s*calculus|derivatives?|differentiation|chain\s*rule|product\s*rule|quotient\s*rule/i, subjectFilter: /math/i, grade: 12, unit: 'Unit 3: Differential Calculus' },
  { pattern: /applications?\s*of\s*derivative|tangent\s*line|normal\s*line|critical\s*point|extrema|inflection\s*point|optimization/i, subjectFilter: /math/i, grade: 12, unit: 'Unit 4: Applications of Derivatives' },
  { pattern: /integral\s*calculus|integrals?|antiderivative|fundamental\s*theorem\s*of\s*calculus|area\s*under\s*curve/i, subjectFilter: /math/i, grade: 12, unit: 'Unit 5: Integral Calculus' },
  { pattern: /three\s*dimensional|3d\s*vectors?|vectors?\s*in\s*3d|plane\s*in\s*space|cross\s*product/i, subjectFilter: /math/i, grade: 12, unit: 'Unit 6: 3D Geometry & Vectors' },
  { pattern: /complex\s*numbers?|argand\s*plane|de\s*moivre/i, subjectFilter: /math/i, grade: 12, unit: 'Unit 7: Complex Numbers' },
  { pattern: /calculus\b/i, subjectFilter: /math/i, grade: 12, unit: 'Calculus (Grade 12)' },

  // ===================== PHYSICS =====================
  // Grade 9 & 10 Physics
  { pattern: /physics\s*and\s*human\s*society|physical\s*quantities|motion\s*in\s*one\s*dimension|simple\s*machines/i, subjectFilter: /phys/i, grade: 9, unit: 'Grade 9 Foundation' },
  { pattern: /motion\s*in\s*two\s*dimensions|rotational\s*motion|fluid\s*statics|wave\s*motion|geometrical\s*optics/i, subjectFilter: /phys/i, grade: 10, unit: 'Grade 10 Foundation' },

  // Grade 11 Physics
  { pattern: /measurement\s*and\s*practical|kinematics|projectile\s*motion|relative\s*velocity/i, subjectFilter: /phys/i, grade: 11, unit: 'Unit 2: Kinematics' },
  { pattern: /dynamics|newton\s*laws|friction|inclined\s*plane|banking\s*angle/i, subjectFilter: /phys/i, grade: 11, unit: 'Unit 3: Dynamics & Forces' },
  { pattern: /work,\s*energy|work-energy\s*theorem|mechanical\s*energy\s*conservation|power\b/i, subjectFilter: /phys/i, grade: 11, unit: 'Unit 4: Work, Energy & Power' },
  { pattern: /momentum|impulse|collisions|elastic\s*collision/i, subjectFilter: /phys/i, grade: 11, unit: 'Unit 5: Momentum & Collisions' },
  { pattern: /heat\s*conduction|thermodynamics|calorimetry|specific\s*heat|latent\s*heat|thermal\s*expansion/i, subjectFilter: /phys/i, grade: 11, unit: 'Unit 6: Heat & Thermodynamics' },
  { pattern: /electrostatics|coulomb\s*law|electric\s*field|capacitan|dielectric/i, subjectFilter: /phys/i, grade: 11, unit: 'Unit 7: Electrostatics & Capacitance' },
  { pattern: /dc\s*circuits?|kirchhoff|ohm\s*law|resistor|internal\s*resistance|wheatstone/i, subjectFilter: /phys/i, grade: 11, unit: 'Unit 8: DC Circuits & Kirchhoff Rules' },
  { pattern: /atomic\s*and\s*nuclear|nuclear\s*physics|photoelectric|radioactive|half-life|binding\s*energy/i, subjectFilter: /phys/i, grade: 11, unit: 'Unit 9: Nuclear Physics' },

  // Grade 12 Physics
  { pattern: /rotational\s*dynamics|torque|moment\s*of\s*inertia|angular\s*momentum|static\s*equilibrium/i, subjectFilter: /phys/i, grade: 12, unit: 'Unit 2: Rotational Dynamics' },
  { pattern: /fluid\s*mechanics|bernoulli|continuity\s*equation|viscosity/i, subjectFilter: /phys/i, grade: 12, unit: 'Unit 3: Fluid Mechanics' },
  { pattern: /electromagnetism|induction|lorentz\s*force|faraday|lenz|transformer|magnetic\s*flux/i, subjectFilter: /phys/i, grade: 12, unit: 'Unit 4: Electromagnetism & Induction' },
  { pattern: /electromagnetic\s*waves|physical\s*optics|wave\s*optics|interference|diffraction/i, subjectFilter: /phys/i, grade: 12, unit: 'Unit 5: Electromagnetic Waves & Optics' },
  { pattern: /modern\s*physics|quantum\s*physics|special\s*relativity/i, subjectFilter: /phys/i, grade: 12, unit: 'Unit 6: Modern Physics' },

  // ===================== CHEMISTRY =====================
  // Grade 9 & 10 Chemistry
  { pattern: /structure\s*of\s*the\s*atom|periodic\s*classification|chemical\s*bonding\s*and\s*structure/i, subjectFilter: /chem/i, grade: 9, unit: 'Grade 9 Foundation' },
  { pattern: /chemical\s*reactions?\s*and\s*stoichiometry|solutions?\s*and\s*colloids|acids,\s*bases\s*and\s*salts/i, subjectFilter: /chem/i, grade: 10, unit: 'Grade 10 Foundation' },

  // Grade 11 Chemistry
  { pattern: /atomic\s*structure|electron\s*configuration|quantum\s*numbers?|periodic\s*trends?/i, subjectFilter: /chem/i, grade: 11, unit: 'Unit 1: Fundamental Concepts & Atomic Structure' },
  { pattern: /chemical\s*bonding|vsepr|molecular\s*geometry|hybridization|intermolecular\s*force/i, subjectFilter: /chem/i, grade: 11, unit: 'Unit 2: Chemical Bonding & Structure' },
  { pattern: /physical\s*states|gas\s*laws|ideal\s*gas|boyle|charles|dalton|phase\s*diagram/i, subjectFilter: /chem/i, grade: 11, unit: 'Unit 3: Physical States of Matter' },
  { pattern: /chemical\s*kinetics|reaction\s*rate|rate\s*law|arrhenius|activation\s*energy/i, subjectFilter: /chem/i, grade: 11, unit: 'Unit 4: Chemical Kinetics' },
  { pattern: /chemical\s*equilibrium|le\s*chatelier|equilibrium\s*constant|kc|kp/i, subjectFilter: /chem/i, grade: 11, unit: 'Unit 5: Chemical Equilibrium' },

  // Grade 12 Chemistry
  { pattern: /solutions?\s*and\s*colligative|colligative\s*properties|molarity|molality|henry\s*law/i, subjectFilter: /chem/i, grade: 12, unit: 'Unit 1: Solutions & Colligative Properties' },
  { pattern: /acid-base\s*equilibria|acid-base|ph\s*and\s*poh|buffer|titration|ka|kb/i, subjectFilter: /chem/i, grade: 12, unit: 'Unit 2: Acid-Base Equilibria' },
  { pattern: /electrochemistry|redox|galvanic|nernst|electrolysis|standard\s*reduction\s*potential/i, subjectFilter: /chem/i, grade: 12, unit: 'Unit 3: Electrochemistry' },
  { pattern: /industrial\s*chemistry|haber\s*process|contact\s*process|extraction\s*of\s*metals/i, subjectFilter: /chem/i, grade: 12, unit: 'Unit 4: Industrial Chemistry' },
  { pattern: /polymers?\s*and\s*organic|organic\s*chemistry|hydrocarbons?|alcohols?|carbonyls?|carboxylic/i, subjectFilter: /chem/i, grade: 12, unit: 'Unit 5: Polymers & Organic Chemistry' },

  // ===================== BIOLOGY =====================
  // Grade 9 & 10 Biology
  { pattern: /biology\s*and\s*technology|human\s*health\s*and\s*disease/i, subjectFilter: /bio/i, grade: 9, unit: 'Grade 9 Foundation' },
  { pattern: /heredity|evolution\s*and\s*adaptation|plant\s*biology/i, subjectFilter: /bio/i, grade: 10, unit: 'Grade 10 Foundation' },

  // Grade 11 Biology
  { pattern: /cytology|cell\s*biology|organelles?|membrane\s*transport|microscopy/i, subjectFilter: /bio/i, grade: 11, unit: 'Unit 1: Cytology & Scientific Methods' },
  { pattern: /animal\s*diversity|classification|phylum|invertebrate|vertebrate/i, subjectFilter: /bio/i, grade: 11, unit: 'Unit 2: Animal Diversity' },
  { pattern: /enzymes?|biochemical\s*catalysis|active\s*site|lock-and-key/i, subjectFilter: /bio/i, grade: 11, unit: 'Unit 3: Enzymes' },
  { pattern: /genetics|molecular\s*biology|mendel|dna|rna|protein\s*synthesis|mutation/i, subjectFilter: /bio/i, grade: 11, unit: 'Unit 4: Genetics & Molecular Biology' },
  { pattern: /human\s*physiology|organ\s*systems|circulatory|respiratory|nervous|endocrine|excretory/i, subjectFilter: /bio/i, grade: 11, unit: 'Unit 5: Human Physiology' },
  { pattern: /ecology|population|biodiversity|nitrogen\s*cycle|food\s*web|endemic/i, subjectFilter: /bio/i, grade: 11, unit: 'Unit 6: Ecology & Populations' },

  // Grade 12 Biology
  { pattern: /microorganisms?|infectious\s*diseases|pathology|malaria|tuberculosis|hiv|immune/i, subjectFilter: /bio/i, grade: 12, unit: 'Unit 2: Microorganisms & Pathology' },
  { pattern: /cellular\s*energy|energy\s*transformation|photosynthesis|respiration|atp|glycolysis|krebs/i, subjectFilter: /bio/i, grade: 12, unit: 'Unit 3: Energy Transformation' },
  { pattern: /evolution|origin\s*of\s*life|natural\s*selection|darwin|lucy|dinkinesh/i, subjectFilter: /bio/i, grade: 12, unit: 'Unit 4: Evolution & Speciation' },

  // ===================== ENGLISH (Grade 11 & 12 Preparatory) =====================
  { pattern: /dialogue|communicative\s*activities|conversational/i, subjectFilter: /eng/i, grade: '11-12', unit: 'Preparatory English: Communication' },
  { pattern: /reading\s*comprehension|passage|textual\s*analysis/i, subjectFilter: /eng/i, grade: '11-12', unit: 'Preparatory English: Reading' },
  { pattern: /grammar|tenses?|conditionals?|reported\s*speech|passive\s*voice|preposition|verb\s*patterns?/i, subjectFilter: /eng/i, grade: '11-12', unit: 'Preparatory English: Grammar' },
  { pattern: /vocabulary|word\s*substitution|sentence\s*completion|synonyms?/i, subjectFilter: /eng/i, grade: '11-12', unit: 'Preparatory English: Vocabulary' },
  { pattern: /jumbled\s*sentences?|jumbled\s*words?|paragraph\s*organization|letter\s*writing|punctuation|spelling/i, subjectFilter: /eng/i, grade: '11-12', unit: 'Preparatory English: Writing' },

  // ===================== SAT / APTITUDE (Grade 11 & 12 Preparatory) =====================
  { pattern: /analogy|analogies|verbal\s*reasoning|sentence\s*completion/i, subjectFilter: /sat|apt/i, grade: '11-12', unit: 'Preparatory SAT: Verbal' },
  { pattern: /quantitative\s*reasoning|arithmetic|number\s*properties|algebraic\s*reasoning/i, subjectFilter: /sat|apt/i, grade: '11-12', unit: 'Preparatory SAT: Quantitative' },
  { pattern: /analytical\s*logic|logical\s*reasoning|deduction|data\s*interpretation/i, subjectFilter: /sat|apt/i, grade: '11-12', unit: 'Preparatory SAT: Analytical' }
];

/**
 * Returns comprehensive grade information for any topic name, subject, or question metadata.
 */
export function getTopicGradeInfo(topicName: string, subjectId?: string, explicitGradeId?: string): TopicGradeInfo {
  const cleanName = (topicName || '').trim();
  const sId = (subjectId || '').toLowerCase();

  // 1. Check curriculum rules
  for (const rule of CURRICULUM_GRADE_RULES) {
    if (rule.subjectFilter && !rule.subjectFilter.test(sId) && !rule.subjectFilter.test(cleanName)) {
      continue;
    }
    if (rule.pattern.test(cleanName)) {
      return formatGradeInfo(rule.grade, rule.unit);
    }
  }

  // 2. Check explicit grade_id on question / exam
  if (explicitGradeId) {
    const gLower = explicitGradeId.toLowerCase();
    if (gLower.includes('9')) return formatGradeInfo(9);
    if (gLower.includes('10')) return formatGradeInfo(10);
    if (gLower.includes('11')) return formatGradeInfo(11);
    if (gLower.includes('12')) return formatGradeInfo(12);
  }

  // 3. Subject-specific defaults for secondary entrance exams
  if (sId.includes('eng') || sId.includes('sat') || sId.includes('apt')) {
    return formatGradeInfo('11-12', 'Preparatory Curriculum');
  }

  // Default preparatory entrance level
  return formatGradeInfo(12, 'National Preparatory Syllabus');
}

function formatGradeInfo(grade: 9 | 10 | 11 | 12 | '9-10' | '11-12', unitLabel?: string): TopicGradeInfo {
  switch (grade) {
    case 9:
      return {
        gradeNumber: 9,
        gradeLabel: 'Grade 9',
        badgeColor: 'text-emerald-300',
        badgeBg: 'bg-emerald-950/80',
        badgeBorder: 'border-emerald-700/60',
        unitLabel,
        description: 'First cycle secondary foundation curriculum'
      };
    case 10:
      return {
        gradeNumber: 10,
        gradeLabel: 'Grade 10',
        badgeColor: 'text-cyan-300',
        badgeBg: 'bg-cyan-950/80',
        badgeBorder: 'border-cyan-700/60',
        unitLabel,
        description: 'Secondary national foundation curriculum'
      };
    case 11:
      return {
        gradeNumber: 11,
        gradeLabel: 'Grade 11',
        badgeColor: 'text-amber-300',
        badgeBg: 'bg-amber-950/80',
        badgeBorder: 'border-amber-700/60',
        unitLabel,
        description: 'Preparatory secondary entrance curriculum'
      };
    case 12:
      return {
        gradeNumber: 12,
        gradeLabel: 'Grade 12',
        badgeColor: 'text-purple-300',
        badgeBg: 'bg-purple-950/80',
        badgeBorder: 'border-purple-700/60',
        unitLabel,
        description: 'Advanced university entrance curriculum'
      };
    case '9-10':
      return {
        gradeNumber: '9-10',
        gradeLabel: 'Grade 9–10',
        badgeColor: 'text-teal-300',
        badgeBg: 'bg-teal-950/80',
        badgeBorder: 'border-teal-700/60',
        unitLabel,
        description: 'Secondary general foundation curriculum'
      };
    case '11-12':
    default:
      return {
        gradeNumber: '11-12',
        gradeLabel: 'Grade 11–12',
        badgeColor: 'text-indigo-300',
        badgeBg: 'bg-indigo-950/80',
        badgeBorder: 'border-indigo-700/60',
        unitLabel,
        description: 'Preparatory secondary curriculum'
      };
  }
}
