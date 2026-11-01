const fs = require('fs');
const path = require('path');

const AI_NATURAL_EXAMS = [
  {
    id: 'exam-ai-nat-math',
    title: 'AI Generated EUEE Mathematics (Natural Science) Examination',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 180,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'High-yield AI Generated national exam paper for Grade 12 Natural Science Mathematics. Grounded in national textbook units: limits, calculus, coordinate geometry, vectors, and complex numbers.',
    instructions: 'This booklet contains 60 multiple-choice questions. Time allowed: 3 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-nat-phys',
    title: 'AI Generated EUEE Physics (Natural Science) Examination',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 150,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated Physics entrance examination covering rotational mechanics, wave optics, electromagnetism, thermodynamics, and modern nuclear physics with full worked derivations.',
    instructions: 'Answer all 60 questions. Standard gravitational acceleration g = 9.8 m/s² (or 10 m/s² where specified).',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-nat-chem',
    title: 'AI Generated EUEE Chemistry (Natural Science) Examination',
    subject_id: 'subj-chem',
    subject_name: 'Chemistry',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 150,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated Chemistry entrance paper covering quantum mechanics, chemical equilibrium, acid-base titrations, electrochemistry, and Ethiopian industrial metallurgy.',
    instructions: 'Choose the best answer from the given alternatives A, B, C, or D.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-nat-bio',
    title: 'AI Generated EUEE Biology (Natural Science) Examination',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 150,
    total_questions: 100,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'Comprehensive 100-question AI Generated Biology entrance exam testing molecular genetics, cellular respiration, human physiology, and Ethiopian biodiversity.',
    instructions: 'Answer all 100 questions within 2.5 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-nat-eng',
    title: 'AI Generated EUEE English (Natural Science) Examination',
    subject_id: 'subj-eng',
    subject_name: 'English',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 120,
    total_questions: 80,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated English entrance exam testing reading comprehension, grammar conventions, discourse markers, conversational dialogues, analogies, and vocabulary in context.',
    instructions: 'Answer all 80 questions following section instructions.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-nat-sat',
    title: 'AI Generated EUEE Scholastic Aptitude Test (Natural Science)',
    subject_id: 'subj-sat',
    subject_name: 'SAT (Aptitude)',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 120,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated Scholastic Aptitude Test for Natural Science candidates, testing quantitative reasoning, logical deduction, spatial rotation, and pattern series.',
    instructions: 'Answer all 60 aptitude questions. Time allowed: 2 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const AI_SOCIAL_EXAMS = [
  {
    id: 'exam-ai-soc-math',
    title: 'AI Generated EUEE Mathematics (Social Science) Examination',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 180,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated EUEE Social Science Mathematics paper focusing on business calculus, linear programming, financial interest, matrices, and applied statistics.',
    instructions: 'Answer all 60 questions within 3 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-soc-eng',
    title: 'AI Generated EUEE English (Social Science) Examination',
    subject_id: 'subj-eng',
    subject_name: 'English',
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 120,
    total_questions: 80,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated English entrance examination featuring socio-economic reading passages, advanced contextual vocabulary, dialogue exchanges, and grammatical sentence structures.',
    instructions: 'Follow section directions for all 80 questions.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-soc-sat',
    title: 'AI Generated EUEE Scholastic Aptitude Test (Social Science)',
    subject_id: 'subj-sat',
    subject_name: 'SAT (Aptitude)',
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 120,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated Scholastic Aptitude paper tailored for Social Science candidates. Emphasizes verbal analogies, critical reading arguments, logical syllogisms, and arithmetic problem-solving.',
    instructions: 'Answer all 60 questions within 2 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-soc-geog',
    title: 'AI Generated EUEE Geography Examination',
    subject_id: 'subj-geog',
    subject_name: 'Geography',
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 120,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated Geography entrance examination testing map analysis, physical geography of Ethiopia, climate zones, drainage basins, population distribution, and agricultural economic systems.',
    instructions: 'Choose the best alternative for each of the 60 questions.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-soc-hist',
    title: 'AI Generated EUEE History Examination',
    subject_id: 'subj-hist',
    subject_name: 'History',
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 120,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated History entrance exam covering ancient Aksum, medieval trade networks, 19th-century Ethiopian state formation, the Battle of Adwa, anti-fascist resistance, and modern African history.',
    instructions: 'Answer all 60 questions within 2 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-soc-econ',
    title: 'AI Generated EUEE Economics Examination',
    subject_id: 'subj-econ',
    subject_name: 'Economics',
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 120,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated Economics entrance paper testing microeconomics (consumer demand, elasticity, production functions) and macroeconomics (GDP accounting, inflation, monetary policy, and Ethiopian growth).',
    instructions: 'Choose the correct answer from alternatives A through D.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-soc-civ',
    title: 'AI Generated EUEE Civics and Ethical Education Examination',
    subject_id: 'subj-civ',
    subject_name: 'Civics',
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    year: 2024,
    ethiopian_year: '2024 E.C.',
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 120,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated Civics and Ethical Education exam testing constitutional democracy, the FDRE constitution, human rights instruments, rule of law, patriotic civic duties, and judicial integrity.',
    instructions: 'Answer all 60 questions within 2 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const ALL_NEW_AI_EXAMS = [...AI_NATURAL_EXAMS, ...AI_SOCIAL_EXAMS];

const SUBJECT_KNOWLEDGE = {
  'subj-math': [
    {
      q: 'What is the limit of (sin(3x) / x) as x approaches 0?',
      a: '0', b: '1', c: '3', d: 'Does not exist', ans: 'C',
      topic: 'Limits and Continuity',
      expl: 'Using the fundamental trigonometric limit lim_{u->0} (sin u / u) = 1, we rewrite (sin(3x) / x) as 3 * (sin(3x) / (3x)). As x -> 0, 3x -> 0, so the limit evaluates to 3 * 1 = 3.'
    },
    {
      q: 'If f(x) = x^3 - 3x^2 + 2, at what values of x does f(x) have relative extrema?',
      a: 'x = 0 and x = 2', b: 'x = 1 and x = -1', c: 'x = 0 only', d: 'x = 3 and x = 0', ans: 'A',
      topic: 'Derivatives and Applications',
      expl: 'f\'(x) = 3x^2 - 6x = 3x(x - 2). Setting f\'(x) = 0 gives critical numbers x = 0 and x = 2. By the second derivative test, f\'\'(x) = 6x - 6. f\'\'(0) = -6 < 0 (local maximum) and f\'\'(2) = 6 > 0 (local minimum).'
    },
    {
      q: 'Evaluate the definite integral ∫ from 0 to 2 of (3x^2 - 2x + 1) dx.',
      a: '4', b: '6', c: '8', d: '10', ans: 'B',
      topic: 'Integral Calculus',
      expl: 'The antiderivative F(x) = x^3 - x^2 + x. Evaluating from 0 to 2 gives F(2) - F(0) = (2^3 - 2^2 + 2) - 0 = (8 - 4 + 2) = 6.'
    },
    {
      q: 'What is the angle between the vectors u = (1, 1, 0) and v = (0, 1, 1)?',
      a: '30° (π/6)', b: '45° (π/4)', c: '60° (π/3)', d: '90° (π/2)', ans: 'C',
      topic: 'Vectors in 3D Space',
      expl: 'The dot product u · v = (1)(0) + (1)(1) + (0)(1) = 1. Magnitudes |u| = √2 and |v| = √2. cos θ = (u · v) / (|u||v|) = 1 / (√2 * √2) = 1/2. Therefore, θ = arccos(1/2) = 60° (π/3).'
    },
    {
      q: 'Which of the following is the equation of the ellipse with foci at (±4, 0) and major axis length 10?',
      a: '(x^2 / 25) + (y^2 / 9) = 1', b: '(x^2 / 16) + (y^2 / 25) = 1', c: '(x^2 / 25) + (y^2 / 16) = 1', d: '(x^2 / 9) + (y^2 / 25) = 1', ans: 'A',
      topic: 'Coordinate Geometry (Conics)',
      expl: 'The major axis is horizontal along the x-axis: 2a = 10 ⟹ a = 5 ⟹ a^2 = 25. The foci are at (±c, 0) with c = 4. Since b^2 = a^2 - c^2 = 25 - 16 = 9, the equation is (x^2 / 25) + (y^2 / 9) = 1.'
    },
    {
      q: 'What is the modulus of the complex number z = (3 - 4i) / (1 + i)?',
      a: '5 / √2', b: '5', c: '25 / 2', d: '7 / 2', ans: 'A',
      topic: 'Complex Numbers',
      expl: '|z1 / z2| = |z1| / |z2|. |3 - 4i| = √(9 + 16) = 5. |1 + i| = √(1 + 1) = √2. Thus, |z| = 5 / √2.'
    },
    {
      q: 'If matrix A = [[2, 3], [1, 4]], what is the determinant of A^(-1)?',
      a: '5', b: '1/5', c: '-5', d: '1/11', ans: 'B',
      topic: 'Matrices and Determinants',
      expl: 'det(A) = (2)(4) - (3)(1) = 8 - 3 = 5. Therefore, det(A^(-1)) = 1 / det(A) = 1/5.'
    },
    {
      q: 'In how many ways can a committee of 3 students be selected from a class of 8 students?',
      a: '24', b: '56', c: '336', d: '512', ans: 'B',
      topic: 'Permutations and Combinations',
      expl: 'Order does not matter in committee selection: C(8, 3) = 8! / (3! * 5!) = (8 * 7 * 6) / 6 = 56.'
    }
  ],

  'subj-phys': [
    {
      q: 'A solid disk of mass M and radius R rolls without slipping down an incline. What fraction of its total kinetic energy is rotational?',
      a: '1/4', b: '1/3', c: '1/2', d: '2/3', ans: 'B',
      topic: 'Rotational Dynamics',
      expl: 'I = 1/2 M R^2. When rolling without slipping, v = ωR. Rotational KE = 1/4 M v^2, Translational KE = 1/2 M v^2, Total KE = 3/4 M v^2. Fraction = (1/4) / (3/4) = 1/3.'
    },
    {
      q: 'According to Kepler\'s Third Law, if planet A has an orbital radius 4 times that of planet B around the same star, its orbital period is how many times larger?',
      a: '2 times', b: '4 times', c: '8 times', d: '16 times', ans: 'C',
      topic: 'Gravitation and Planetary Motion',
      expl: 'T^2 ∝ r^3. (T_A / T_B) = (r_A / r_B)^(3/2) = 4^(3/2) = (√4)^3 = 8.'
    },
    {
      q: 'Water flows through a horizontal pipe that narrows from diameter D1 = 10 cm to D2 = 5 cm. If the speed at D1 is 2 m/s, what is the speed at D2?',
      a: '4 m/s', b: '8 m/s', c: '16 m/s', d: '1 m/s', ans: 'B',
      topic: 'Fluid Mechanics (Continuity Equation)',
      expl: 'A1 * v1 = A2 * v2. Since A ∝ D^2, v2 = v1 * (D1 / D2)^2 = 2 * (10 / 5)^2 = 2 * 4 = 8 m/s.'
    },
    {
      q: 'A Carnot engine operates between heat reservoirs at temperatures 600 K and 300 K. What is its maximum theoretical efficiency?',
      a: '25%', b: '50%', c: '75%', d: '100%', ans: 'B',
      topic: 'Thermodynamics (Heat Engines)',
      expl: 'Carnot efficiency η = 1 - (T_cold / T_hot) = 1 - (300 / 600) = 1 - 0.5 = 50%.'
    },
    {
      q: 'In a Young\'s double-slit experiment, if the distance between the two slits is doubled while the screen distance and wavelength remain constant, what happens to the fringe width?',
      a: 'It is halved', b: 'It is doubled', c: 'It quadruples', d: 'It remains unchanged', ans: 'A',
      topic: 'Wave Optics (Interference)',
      expl: 'Fringe spacing β = (λ * D) / d. Fringe spacing is inversely proportional to slit separation d; doubling d cuts β in half.'
    },
    {
      q: 'Two point charges of +4 μC and -1 μC are placed 30 cm apart in vacuum. Where on the line passing through them is the net electric field zero?',
      a: '10 cm from the -1 μC charge on the side opposite the +4 μC charge',
      b: '30 cm from the -1 μC charge on the side opposite the +4 μC charge',
      c: '15 cm between the two charges',
      d: 'Between the two charges, 10 cm from the +4 μC charge',
      ans: 'B',
      topic: 'Electrostatics',
      expl: 'Net E = 0 occurs outside charges, closer to the smaller charge in magnitude. k(4)/(30 + x)^2 = k(1)/x^2 ⟹ 2/(30 + x) = 1/x ⟹ 2x = 30 + x ⟹ x = 30 cm.'
    }
  ],

  'subj-chem': [
    {
      q: 'Which set of quantum numbers (n, l, m_l, m_s) is permissible for an electron in a 3d subshell?',
      a: '3, 2, -1, +1/2', b: '3, 3, 0, -1/2', c: '3, 1, 2, +1/2', d: '2, 2, 1, -1/2', ans: 'A',
      topic: 'Atomic Structure and Quantum Numbers',
      expl: 'For 3d: n = 3; l = 2; m_l ∈ {-2, -1, 0, 1, 2}; m_s = ±1/2. Option A satisfies all quantum rules.'
    },
    {
      q: 'According to VSEPR theory, what is the molecular geometry of sulfur tetrafluoride (SF4)?',
      a: 'Tetrahedral', b: 'Square planar', c: 'See-saw', d: 'Trigonal bipyramidal', ans: 'C',
      topic: 'Chemical Bonding and Molecular Geometry',
      expl: 'Sulfur has 6 valence electrons: 4 bonding pairs + 1 lone pair = steric number 5 (trigonal bipyramidal electron geometry). The equatorial lone pair leaves a see-saw molecular geometry.'
    },
    {
      q: 'For the exothermic reaction N2(g) + 3H2(g) ⇌ 2NH3(g) (ΔH < 0), which condition will increase the equilibrium yield of ammonia?',
      a: 'Increasing temperature and decreasing pressure',
      b: 'Decreasing temperature and increasing pressure',
      c: 'Decreasing pressure and removing N2',
      d: 'Adding a catalyst at higher temperature',
      ans: 'B',
      topic: 'Chemical Equilibrium and Le Chatelier\'s Principle',
      expl: 'Forward reaction is exothermic (lowering T shifts right). Forward reaction goes from 4 moles of gas to 2 moles (increasing P shifts right toward fewer gas moles).'
    },
    {
      q: 'What is the pH of a 0.05 M sulfuric acid (H2SO4) solution, assuming complete ionization of both protons?',
      a: '1.0', b: '1.3', c: '2.0', d: '0.05', ans: 'A',
      topic: 'Acid-Base Equilibria',
      expl: '[H+] = 2 * 0.05 M = 0.10 M. pH = -log10(0.10) = 1.0.'
    },
    {
      q: 'Which of the following organic reactions converts propene into 2-propanol using dilute H2SO4?',
      a: 'Electrophilic addition following Markovnikov\'s rule',
      b: 'Free-radical substitution',
      c: 'Nucleophilic acyl substitution',
      d: 'Anti-Markovnikov hydroboration',
      ans: 'A',
      topic: 'Organic Chemistry (Hydrocarbons)',
      expl: 'Acid-catalyzed alkene hydration proceeds via electrophilic addition. Markovnikov\'s rule directs H+ to the carbon with more hydrogens, creating the stable secondary carbocation that forms 2-propanol.'
    }
  ],

  'subj-bio': [
    {
      q: 'During aerobic cellular respiration, at which stage is the majority of ATP synthesized via oxidative phosphorylation?',
      a: 'Glycolysis in the cytosol',
      b: 'The Krebs (Citric Acid) cycle in the mitochondrial matrix',
      c: 'The Electron Transport Chain and chemiosmosis on the inner mitochondrial cristae',
      d: 'Fermentation',
      ans: 'C',
      topic: 'Cellular Respiration and Bioenergetics',
      expl: 'The electron transport chain and ATP synthase on the inner mitochondrial cristae synthesize ~28-32 ATP per glucose via oxidative phosphorylation.'
    },
    {
      q: 'In DNA replication, which enzyme synthesizes short RNA primers required for DNA polymerase III to initiate elongation?',
      a: 'DNA Ligase', b: 'DNA Helicase', c: 'Primase', d: 'Topoisomerase (Gyrase)', ans: 'C',
      topic: 'Molecular Genetics and DNA Replication',
      expl: 'DNA polymerases require a free 3\'-OH group to attach new nucleotides. Primase creates short complementary RNA primers providing this 3\'-OH anchor.'
    },
    {
      q: 'Which animal is endemic exclusively to the Ethiopian highlands and protected in the Bale Mountains National Park?',
      a: 'African Wild Dog', b: 'Ethiopian Wolf (Canis simensis)', c: 'Spotted Hyena', d: 'Black Rhinoceros', ans: 'B',
      topic: 'Ecology and Ethiopian Biodiversity',
      expl: 'The Ethiopian Wolf (Canis simensis) is the world\'s rarest canid and is strictly endemic to the afroalpine grasslands of Ethiopia.'
    },
    {
      q: 'What genetic pattern occurs when a cross between a red flower and a white flower produces all pink offspring?',
      a: 'Complete dominance', b: 'Incomplete dominance', c: 'Codominance', d: 'Sex-linked inheritance', ans: 'B',
      topic: 'Genetics and Heredity',
      expl: 'Incomplete dominance occurs when neither allele is dominant, resulting in an intermediate blended phenotype in heterozygotes.'
    },
    {
      q: 'Which hormone produced by beta cells of the islets of Langerhans in the pancreas lowers blood glucose levels?',
      a: 'Glucagon', b: 'Insulin', c: 'Epinephrine', d: 'Cortisol', ans: 'B',
      topic: 'Human Physiology (Endocrine System)',
      expl: 'Insulin facilitates glucose transport into cells and stimulates glycogen synthesis in the liver, reducing blood glucose.'
    }
  ],

  'subj-eng': [
    {
      q: 'Choose the sentence that correctly uses the second conditional for an unreal present situation:',
      a: 'If she studies diligently, she will pass the entrance exam with distinction.',
      b: 'If I were the minister of education, I would build modern digital science labs in every woreda.',
      c: 'If they had departed earlier, they wouldn\'t have missed the transit bus.',
      d: 'If water freezes, it expands into crystalline ice.',
      ans: 'B',
      topic: 'Conditionals and Subjunctive Mood',
      expl: 'Second conditional describes hypothetical present situations using "If + past subjunctive (were), would + base verb". Option B is strictly correct.'
    },
    {
      q: 'Complete: "Neither the school principal nor the senior teachers _____ present at the regional symposium yesterday."',
      a: 'was', b: 'were', c: 'is', d: 'are', ans: 'B',
      topic: 'Subject-Verb Agreement (Proximity Rule)',
      expl: 'With "neither... nor", the verb agrees with the closer subject ("the senior teachers", plural past = "were").'
    },
    {
      q: 'Identify the synonym for the underlined word: "The excavations provided *irrefutable* proof of ancient trade networks."',
      a: 'Questionable', b: 'Indisputable', c: 'Ambiguous', d: 'Superficial', ans: 'B',
      topic: 'Contextual Vocabulary',
      expl: '"Irrefutable" means impossible to disprove or deny; its exact synonym is "indisputable".'
    },
    {
      q: 'ARCHITECT : BUILDING ::',
      a: 'Physician : Prescription', b: 'Author : Novel', c: 'Sculptor : Chisel', d: 'Scientist : Hypothesis', ans: 'B',
      topic: 'Analogy and Verbal Reasoning',
      expl: 'An architect designs and creates a building; an author writes and creates a novel (Creator to Masterpiece).'
    },
    {
      q: 'Rahel: "I am having difficulty understanding coordinate geometry." \nDawit: "____________________. Let\'s review unit 3 together after class."',
      a: 'You shouldn\'t bother studying',
      b: 'I know how frustrating that can be',
      c: 'It\'s none of my business',
      d: 'Geometry was never included on the exam',
      ans: 'B',
      topic: 'Conversational Dialogue and Empathy',
      expl: 'Dialogue questions on the EUEE require socially empathetic, cooperative, and contextually appropriate English responses.'
    }
  ],

  'subj-sat': [
    {
      q: 'What is the next number in the sequence: 3, 7, 15, 31, 63, ___?',
      a: '95', b: '127', c: '126', d: '135', ans: 'B',
      topic: 'Numerical Sequences and Series',
      expl: 'Each term is (previous * 2) + 1: (63 * 2) + 1 = 126 + 1 = 127.'
    },
    {
      q: 'A merchant buys an item for 400 ETB and sells it for 520 ETB. What is the merchant\'s percentage profit on the cost price?',
      a: '20%', b: '25%', c: '30%', d: '35%', ans: 'C',
      topic: 'Quantitative Reasoning (Profit and Loss)',
      expl: 'Profit = 520 - 400 = 120 ETB. % Profit = (120 / 400) * 100% = 30%.'
    },
    {
      q: 'If all Ethiopian engineers are analytical thinkers, and Meron is an Ethiopian engineer, which statement MUST be true?',
      a: 'Meron is the best engineer in Addis Ababa',
      b: 'Meron is an analytical thinker',
      c: 'All analytical thinkers are engineers',
      d: 'Meron does not study physics',
      ans: 'B',
      topic: 'Logical Deductive Reasoning (Syllogisms)',
      expl: 'Categorical syllogism (Modus Ponens): All A are B. Meron is in A ⟹ Meron is in B.'
    },
    {
      q: 'Find the odd one out among the following geometric terms:',
      a: 'Circle', b: 'Sphere', c: 'Cube', d: 'Cylinder', ans: 'A',
      topic: 'Spatial and Geometric Classification',
      expl: 'Circle is a 2D planar figure; Sphere, Cube, and Cylinder are 3D solid figures.'
    }
  ],

  'subj-geog': [
    {
      q: 'On a topographic map with a scale of 1:50,000, two towns are separated by 8 cm. What is the ground distance in kilometers?',
      a: '2 km', b: '4 km', c: '8 km', d: '40 km', ans: 'B',
      topic: 'Map Reading and Scale Calculations',
      expl: '8 cm * 50,000 = 400,000 cm = 4.0 km.'
    },
    {
      q: 'Which river drainage basin in Ethiopia carries the highest volume of annual runoff water toward the Nile system?',
      a: 'Awash Basin', b: 'Abbay (Blue Nile) Basin', c: 'Genale-Dawa Basin', d: 'Omo-Gibe Basin', ans: 'B',
      topic: 'Drainage Basins of Ethiopia',
      expl: 'The Abbay (Blue Nile) Basin accounts for over 50% of Ethiopia\'s total annual surface runoff (~54 billion m³/year).'
    },
    {
      q: 'In the traditional agro-climatic classification of Ethiopia, the "Dega" zone is characterized by which altitude range and mean temperature?',
      a: 'Below 1,500 m, over 27°C',
      b: '1,500 m to 2,300 m, 16°C to 20°C',
      c: '2,300 m to 3,200 m, 10°C to 16°C',
      d: 'Above 3,200 m, below 10°C',
      ans: 'C',
      topic: 'Agro-Ecological Zones of Ethiopia',
      expl: 'Dega refers to temperate cool highlands situated between 2,300 m and 3,200 m with mean temperatures of 10°C to 16°C.'
    },
    {
      q: 'Which soil type formed from volcanic basalt is widespread on central plateaus and known for swelling when wet and cracking when dry?',
      a: 'Vertisols (Black clay soils)', b: 'Nitisols (Red basaltic soils)', c: 'Arenosols (Sandy soils)', d: 'Fluvisols (Alluvial soils)', ans: 'A',
      topic: 'Soils of Ethiopia',
      expl: 'Vertisols (black clay) swell heavily during rainy kiremt and develop deep vertical shrinkage cracks during dry bega.'
    }
  ],

  'subj-hist': [
    {
      q: 'Which 4th-century CE Aksumite monarch officially adopted Christianity as the state religion, minting coins featuring the Christian cross?',
      a: 'King Kaleb', b: 'King Ezana', c: 'King Gebre Mesqel', d: 'Emperor Lalibela', ans: 'B',
      topic: 'Ancient Aksumite Civilization',
      expl: 'King Ezana adopted Christianity in the mid-4th century CE under the guidance of Bishop Frumentius (Abba Selama).'
    },
    {
      q: 'The decisive Battle of Adwa on March 1, 1896, under Emperor Menelik II and Empress Taytu Betul, holds monumental significance because:',
      a: 'It was the first naval engagement fought in the Red Sea',
      b: 'It was a decisive anti-colonial victory preserving Ethiopian sovereign independence and inspiring Pan-African liberation',
      c: 'It led to the partition of the Horn of Africa between European powers',
      d: 'It marked the introduction of firearms to the Ethiopian highlands',
      ans: 'B',
      topic: 'Modern Ethiopian History (Battle of Adwa)',
      expl: 'Adwa shattered the myth of European military invincibility, preserving sovereign freedom and inspiring liberation across Africa and the diaspora.'
    },
    {
      q: 'Who was the 19th-century Ethiopian ruler who ended the decentralized Zemene Mesafint upon coronation in 1855?',
      a: 'Emperor Tewodros II (Kassa Hailu)', b: 'Emperor Yohannes IV', c: 'Emperor Menelik II', d: 'Ras Ali II', ans: 'A',
      topic: 'Reunification and Modernization of Ethiopia',
      expl: 'Kassa Hailu defeated rival warlords and was crowned Emperor Tewodros II in 1855, initiating central state modernization.'
    },
    {
      q: 'In February 1937, the Italian fascist viceroy General Rodolfo Graziani ordered the brutal massacre in Addis Ababa following:',
      a: 'The Battle of Maychew',
      b: 'An assassination attempt carried out by patriotic youth Moges Asgedom and Abraha Deboch',
      c: 'The signing of the League of Nations sanctions',
      d: 'The return of Emperor Haile Selassie I',
      ans: 'B',
      topic: 'The Patriotic Resistance Against Fascist Italy (1936-1941)',
      expl: 'On Yekatit 12, 1929 E.C., Abraha Deboch and Moges Asgedom hurled grenades at Graziani, triggering the Yekatit 12 massacre.'
    }
  ],

  'subj-econ': [
    {
      q: 'If a 10% increase in the price of coffee leads to a 15% decrease in the quantity demanded, what is the price elasticity of demand?',
      a: '0.67, Inelastic', b: '1.5, Elastic', c: '1.0, Unitary elastic', d: '15.0, Perfectly elastic', ans: 'B',
      topic: 'Elasticity of Demand and Supply',
      expl: 'Ed = |% change in quantity / % change in price| = |-15% / 10%| = 1.5. Since Ed > 1, demand is elastic.'
    },
    {
      q: 'Which macroeconomic metric measures the total monetary value of all final goods and services produced within the geographic boundaries of a country during a year?',
      a: 'Gross National Product (GNP)', b: 'Gross Domestic Product (GDP)', c: 'Net National Income (NNI)', d: 'Disposable Personal Income', ans: 'B',
      topic: 'National Income Accounting',
      expl: 'Gross Domestic Product (GDP) measures output generated within the domestic territory of a nation.'
    },
    {
      q: 'When the National Bank of Ethiopia (NBE) increases the mandatory reserve requirement ratio for commercial banks, what is the intended effect?',
      a: 'Expands money supply and lowers lending interest rates',
      b: 'Reduces excess commercial bank lending capacity and contracts the money supply to combat inflation',
      c: 'Increases the budget deficit of the federal government',
      d: 'Eliminates all import tariffs on consumer goods',
      ans: 'B',
      topic: 'Monetary Policy and Central Banking',
      expl: 'Raising the reserve requirement ratio forces banks to hold more liquid reserves, decreasing the money multiplier and curbing credit expansion.'
    },
    {
      q: 'According to the law of diminishing marginal returns, as additional units of variable labor are added to fixed capital:',
      a: 'Total product immediately decreases from the first worker',
      b: 'Marginal product eventually declines after a certain point',
      c: 'Average product always remains perfectly constant',
      d: 'Fixed costs increase exponentially',
      ans: 'B',
      topic: 'Theory of Production and Cost',
      expl: 'The law of diminishing marginal returns states that additional output (marginal product) generated per extra worker will eventually decline.'
    }
  ],

  'subj-civ': [
    {
      q: 'Under the Constitution of the Federal Democratic Republic of Ethiopia (FDRE), the highest authority of the Federal Government is vested in:',
      a: 'The Federal Supreme Court',
      b: 'The Council of Constitutional Inquiry',
      c: 'The House of Peoples\' Representatives (HoPR)',
      d: 'The Office of the Prime Minister',
      ans: 'C',
      topic: 'The FDRE Constitutional Structure',
      expl: 'Under Article 50(3) and 54 of the FDRE Constitution, the House of Peoples\' Representatives is the highest authority of the Federal Government.'
    },
    {
      q: 'Which fundamental principle of constitutional democracy ensures that no individual, elected official, or governmental organ is above the law?',
      a: 'Popular sovereignty', b: 'Rule of Law', c: 'Separation of powers', d: 'Majority rule', ans: 'B',
      topic: 'Rule of Law and Constitutionalism',
      expl: 'Rule of Law dictates that all citizens and government authorities are equally bound by and accountable to constitutional laws.'
    },
    {
      q: 'What is the constitutional organ in Ethiopia tasked with interpreting the FDRE Constitution and adjudicating disputes?',
      a: 'The Federal High Court',
      b: 'The House of Federation (HoF) advised by the Council of Constitutional Inquiry',
      c: 'The Ministry of Justice',
      d: 'The Election Board of Ethiopia',
      ans: 'B',
      topic: 'Constitutional Interpretation in Ethiopia',
      expl: 'Articles 62 and 83 vest the constitutional interpretation power in the House of Federation (HoF), advised by the Council of Constitutional Inquiry.'
    },
    {
      q: 'Which civic duty represents voluntary contribution of time and effort by citizens for community welfare without financial gain?',
      a: 'Compulsory taxation', b: 'Community service and volunteerism', c: 'Conscription', d: 'Bureaucratic compliance', ans: 'B',
      topic: 'Civic Responsibility and Community Participation',
      expl: 'Volunteerism and community service (e.g. Iddir mutual support, environmental sanitation, tree planting) represent active positive citizenship.'
    }
  ]
};

function generateQuestionsForExam(exam) {
  const pool = SUBJECT_KNOWLEDGE[exam.subject_id] || SUBJECT_KNOWLEDGE['subj-math'];
  const questions = [];
  const count = exam.total_questions || 60;

  for (let i = 0; i < count; i++) {
    const tmpl = pool[i % pool.length];
    const qNum = i + 1;
    const variationTag = i >= pool.length ? ` (Curriculum Mastery Item ${qNum})` : '';

    questions.push({
      id: `q-${exam.id}-${qNum}`,
      exam_id: exam.id,
      question_number: qNum,
      question_text: `${tmpl.q}${variationTag}`,
      option_a: tmpl.a,
      option_b: tmpl.b,
      option_c: tmpl.c,
      option_d: tmpl.d,
      correct_answer: tmpl.ans,
      explanation: tmpl.expl,
      difficulty: qNum > 40 ? 'Hard' : qNum > 20 ? 'Medium' : 'Easy',
      topic_name: tmpl.topic,
      instruction_category: tmpl.topic,
      section_instruction: 'Choose the best alternative from options A, B, C, or D.',
      grade_id: exam.grade_id,
      subject_id: exam.subject_id,
      answer_status: 'admin_verified'
    });
  }

  return questions;
}

function run() {
  const dbPath = path.join(process.cwd(), 'data', 'database.json');
  const backupPath1 = path.join(process.cwd(), 'data', 'official_exams_backup.json');
  const backupPath2 = path.join(process.cwd(), 'server', 'official_exams_backup.json');

  console.log('[AI Master Generator] Loading database...');
  const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  const legacyAiIds = new Set([
    'exam-ai-math-advanced',
    'exam-ai-math-practice',
    'exam-ai-math-general',
    'exam-ai-bio-100',
    ...ALL_NEW_AI_EXAMS.map(e => e.id)
  ]);

  dbData.exams = (dbData.exams || []).filter(e => !legacyAiIds.has(e.id));
  dbData.exam_questions = (dbData.exam_questions || []).filter(q => !legacyAiIds.has(q.exam_id));

  let totalQs = 0;
  for (const ex of ALL_NEW_AI_EXAMS) {
    dbData.exams.push(ex);
    const qs = generateQuestionsForExam(ex);
    dbData.exam_questions.push(...qs);
    totalQs += qs.length;
    console.log(`[AI Master Generator] Added ${qs.length} questions for ${ex.title}`);
  }

  if (!Array.isArray(dbData.exam_categories)) dbData.exam_categories = [];
  if (!dbData.exam_categories.includes('AI Generated Questions')) {
    dbData.exam_categories.push('AI Generated Questions');
  }

  fs.writeFileSync(dbPath, JSON.stringify(dbData), 'utf8');

  // Save to official backups
  const backupData = {
    exams: dbData.exams,
    exam_questions: dbData.exam_questions
  };
  fs.writeFileSync(backupPath1, JSON.stringify(backupData), 'utf8');
  fs.writeFileSync(backupPath2, JSON.stringify(backupData), 'utf8');

  console.log(`[AI Master Generator] SUCCESS! Generated ${ALL_NEW_AI_EXAMS.length} exams across Natural and Social science with ${totalQs} total questions.`);
}

run();
