export interface ConnectedUnitNode {
  grade_id: string;
  grade_name: string;
  subject_id: string;
  subject_name: string;
  book_id: string;
  book_title: string;
  unit_number: number;
  unit_title: string;
  start_page: number;
  key_topics: string[];
  learning_focus: string;
}

export interface ConnectedTopicPathway {
  id: string;
  subject_id: string;
  subject_name: string;
  pathway_title: string;
  description: string;
  curriculum_bridge_rationale: string;
  exam_importance: 'High-Yield' | 'Critical Foundation' | 'EUEE Frequent Trap';
  euee_question_weight: string;
  nodes: ConnectedUnitNode[];
}

export const CONNECTED_TOPIC_PATHWAYS: ConnectedTopicPathway[] = [
  // 1. PHYSICS - Vectors, Kinematics & Mechanics
  {
    id: 'phys-vectors-mechanics',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    pathway_title: 'Vectors, 2D Motion & Mechanics Progression',
    description: 'Traces the complete progression of vector mathematics from 1D scalar/vector definitions to 2D resolution, projectile trajectories, and dynamic momentum conservation.',
    curriculum_bridge_rationale: 'Students who struggle with Grade 11 Projectile Motion usually missed the graphical resolution and component vector addition taught in Grade 10 Unit 1. Study Grade 10 Unit 1 before tackling Grade 11 kinematics.',
    exam_importance: 'High-Yield',
    euee_question_weight: '12-16 Questions annually on EUEE Natural Science',
    nodes: [
      {
        grade_id: 'grade-9',
        grade_name: 'Grade 9',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-9-phys',
        book_title: 'Grade 9 Physics Student Textbook',
        unit_number: 2,
        unit_title: 'Kinematics in One Dimension',
        start_page: 25,
        key_topics: ['Scalars vs Vectors', 'Distance and Displacement', 'Speed and Velocity', 'Acceleration'],
        learning_focus: 'Establish intuitive differences between scalar and vector physical quantities.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-10-phys',
        book_title: 'Grade 10 Physics Student Textbook',
        unit_number: 1,
        unit_title: 'Vector Quantities',
        start_page: 1,
        key_topics: ['Vector Representations', 'Vector Addition & Subtraction', 'Graphical Method', 'Vector Resolution (Ax, Ay)', 'Unit Vectors'],
        learning_focus: 'Master breaking arbitrary 2D vectors into orthogonal components (Ax = A cos θ, Ay = A sin θ).'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-10-phys',
        book_title: 'Grade 10 Physics Student Textbook',
        unit_number: 2,
        unit_title: 'Uniformly Accelerated Motion',
        start_page: 21,
        key_topics: ['Equations of Constant Acceleration', 'Free Fall Motion', 'Graphical Analysis (v-t graphs)'],
        learning_focus: 'Apply 1D kinematic equations (v = u + at, s = ut + 1/2at²) under uniform gravity.'
      },
      {
        grade_id: 'grade-11',
        grade_name: 'Grade 11',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-11-phys',
        book_title: 'Grade 11 Physics Student Textbook',
        unit_number: 2,
        unit_title: 'Vectors & 2D Motion',
        start_page: 28,
        key_topics: ['Dot (Scalar) Product', 'Cross (Vector) Product', 'Projectile Motion Trajectory', 'Range & Maximum Height', 'Uniform Circular Motion'],
        learning_focus: 'Synthesize 2D vector resolution with horizontal and vertical kinematics for projectile motion.'
      },
      {
        grade_id: 'grade-12',
        grade_name: 'Grade 12',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-12-phys',
        book_title: 'Grade 12 Physics Student Textbook',
        unit_number: 1,
        unit_title: 'Thermodynamics & Advanced Mechanics',
        start_page: 1,
        key_topics: ['Rotational Dynamics', 'Torque and Angular Momentum', 'Conservation of Mechanical Energy'],
        learning_focus: 'Extend linear vector mechanics to rotational systems and conservation laws.'
      }
    ]
  },

  // 2. PHYSICS - Electrostatics, Gauss's Law, Fields & Induction
  {
    id: 'phys-electrostatics-gauss-induction',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    pathway_title: 'Electrostatics, Gauss\'s Law & Electromagnetic Induction',
    description: 'Systematic pathway connecting static charges and Coulomb\'s law in Grade 10 to Electric Flux, Gauss\'s Law in Grade 11, and Faraday/Lenz Electromagnetic Induction in Grade 12.',
    curriculum_bridge_rationale: 'Gauss\'s law is the governing electrostatic theorem connecting closed electric flux to enclosed charge (∮ E·dA = Q/ε0). Students should review Coulomb\'s law from Grade 10 Unit 4 before studying Gauss\'s Law in Grade 11 Unit 6.',
    exam_importance: 'Critical Foundation',
    euee_question_weight: '10-14 Questions annually on EUEE Physics',
    nodes: [
      {
        grade_id: 'grade-9',
        grade_name: 'Grade 9',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-9-phys',
        book_title: 'Grade 9 Physics Student Textbook',
        unit_number: 5,
        unit_title: 'Electricity & Magnetism Basics',
        start_page: 98,
        key_topics: ['Electric Charge', 'Conductors and Insulators', 'Simple Series and Parallel Circuits'],
        learning_focus: 'Foundational qualitative understanding of positive and negative charges.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-10-phys',
        book_title: 'Grade 10 Physics Student Textbook',
        unit_number: 4,
        unit_title: 'Static and Current Electricity',
        start_page: 91,
        key_topics: ['Charging Methods (Friction, Conduction, Induction)', 'Coulomb\'s Law of Electrostatics (F = k q1 q2 / r²)', 'Electric Field Intensity (E = F/q)', 'Electric Potential Difference'],
        learning_focus: 'Master Coulomb\'s quantitative electrostatic force law and point-charge electric field calculations.'
      },
      {
        grade_id: 'grade-11',
        grade_name: 'Grade 11',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-11-phys',
        book_title: 'Grade 11 Physics Student Textbook',
        unit_number: 6,
        unit_title: 'Electrostatics and Electric Circuits',
        start_page: 142,
        key_topics: ['Electric Flux (Φ = E A cos θ)', 'Gauss\'s Law (∮ E·dA = Q_enclosed / ε0)', 'Gaussian Surface Symmetry (Spherical, Cylindrical, Planar)', 'Capacitance & Dielectrics'],
        learning_focus: 'Use Gauss\'s Law to derive electric field equations for line charges, charged sheets, and conducting spheres.'
      },
      {
        grade_id: 'grade-12',
        grade_name: 'Grade 12',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-12-phys',
        book_title: 'Grade 12 Physics Student Textbook',
        unit_number: 2,
        unit_title: 'Electric Fields and Potential',
        start_page: 64,
        key_topics: ['Electric Potential Energy', 'Equipotential Surfaces', 'Conductors in Electrostatic Equilibrium (E = 0 inside)', 'Gauss\'s Law for Magnetism (∮ B·dA = 0)'],
        learning_focus: 'Integrate electric potential with Gaussian charge distributions.'
      },
      {
        grade_id: 'grade-12',
        grade_name: 'Grade 12',
        subject_id: 'subj-phys',
        subject_name: 'Physics',
        book_id: 'book-12-phys',
        book_title: 'Grade 12 Physics Student Textbook',
        unit_number: 4,
        unit_title: 'Magnetism & Electromagnetic Induction',
        start_page: 148,
        key_topics: ['Magnetic Flux', 'Faraday\'s Law of Electromagnetic Induction (ε = -N dΦ/dt)', 'Lenz\'s Law', 'AC Generators & Transformers'],
        learning_focus: 'Transition from static electric flux (Gauss\'s Law) to dynamic changing magnetic flux (Faraday\'s Law).'
      }
    ]
  },

  // 3. CHEMISTRY - Stoichiometry, Solutions & Electrochemistry
  {
    id: 'chem-stoichiometry-electrochem',
    subject_id: 'subj-chem',
    subject_name: 'Chemistry',
    pathway_title: 'Stoichiometry, Solutions & Electrochemistry Bridge',
    description: 'Seamless pathway linking mole calculations and chemical reactions in Grade 9 to Solution molarity and Galvanic cells in Grade 10, chemical kinetics in Grade 11, and Faraday\'s quantitative electrolysis laws in Grade 12.',
    curriculum_bridge_rationale: 'EUEE Electrochemistry problems (like Faraday\'s Second Law) require stoichiometric mole-to-electron conversions. Master Grade 10 Unit 1 (Stoichiometry) before studying Grade 12 Unit 3 (Quantitative Electrolysis).',
    exam_importance: 'High-Yield',
    euee_question_weight: '14-18 Questions annually on EUEE Chemistry',
    nodes: [
      {
        grade_id: 'grade-9',
        grade_name: 'Grade 9',
        subject_id: 'subj-chem',
        subject_name: 'Chemistry',
        book_id: 'book-9-chem',
        book_title: 'Grade 9 Chemistry Student Textbook',
        unit_number: 4,
        unit_title: 'Chemical Reactions & Stoichiometry Basics',
        start_page: 92,
        key_topics: ['Balancing Chemical Equations', 'Mole Concept (Avogadro\'s Number 6.022 × 10²³)', 'Molar Mass', 'Percentage Composition'],
        learning_focus: 'Learn the relationship between mass, molar mass, and moles (n = m/M).'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-chem',
        subject_name: 'Chemistry',
        book_id: 'book-10-chem',
        book_title: 'Grade 10 Chemistry Student Textbook',
        unit_number: 1,
        unit_title: 'Chemical Reactions and Stoichiometry',
        start_page: 1,
        key_topics: ['Limiting Reactant Identification', 'Theoretical vs Percentage Yield', 'Mass-Mass & Mole-Mole Relationships', 'Oxidation Numbers & Redox Basics'],
        learning_focus: 'Calculate limiting reagents and reaction stoichiometry for single and multi-step reactions.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-chem',
        subject_name: 'Chemistry',
        book_id: 'book-10-chem',
        book_title: 'Grade 10 Chemistry Student Textbook',
        unit_number: 4,
        unit_title: 'Energy Changes & Electrochemistry',
        start_page: 166,
        key_topics: ['Exothermic vs Endothermic Reactions', 'Galvanic (Voltaic) Cells (Daniell Cell)', 'Electrolytic Cells', 'Anode/Cathode Half-Reactions', 'Standard Electrode Potentials'],
        learning_focus: 'Understand electron transfer, spontaneous redox in battery cells, and non-spontaneous electrolysis.'
      },
      {
        grade_id: 'grade-11',
        grade_name: 'Grade 11',
        subject_id: 'subj-chem',
        subject_name: 'Chemistry',
        book_id: 'book-11-chem',
        book_title: 'Grade 11 Chemistry Student Textbook',
        unit_number: 4,
        unit_title: 'Chemical Kinetics & Equilibrium',
        start_page: 135,
        key_topics: ['Reaction Rates', 'Rate Law & Order of Reaction', 'Chemical Equilibrium Constant (Kc, Kp)', 'Le Chatelier\'s Principle'],
        learning_focus: 'Analyze how temperature, concentration, and pressure shift reaction equilibrium and affect yields.'
      },
      {
        grade_id: 'grade-12',
        grade_name: 'Grade 12',
        subject_id: 'subj-chem',
        subject_name: 'Chemistry',
        book_id: 'book-12-chem',
        book_title: 'Grade 12 Chemistry Student Textbook',
        unit_number: 3,
        unit_title: 'Electrochemistry & Industrial Electrolysis',
        start_page: 110,
        key_topics: ['Faraday\'s First Law of Electrolysis (m = z I t)', 'Faraday\'s Second Law (Equivalent Masses)', 'Nernst Equation (Non-Standard Cell Potential)', 'Electrolytic Refining of Copper & Aluminum (Hall-Héroult Process)'],
        learning_focus: 'Execute precise quantitative calculations for mass of substance deposited during electrolysis.'
      }
    ]
  },

  // 4. MATHEMATICS - Relations, Functions, Coordinate Geometry & Calculus
  {
    id: 'math-functions-calculus',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    pathway_title: 'Relations, Functions, Trigonometry & Calculus Pipeline',
    description: 'Comprehensive pathway showing how Grade 10 Relations and Polynomial Functions lead to Grade 11 Trigonometric Identities and Grade 12 Limits, Derivatives, and Integrals.',
    curriculum_bridge_rationale: 'Calculus in Grade 12 is entirely built on functions. If a student cannot find the domain, range, inverse, or composition of a function from Grade 10 Unit 1 & 2, they cannot evaluate derivatives or chain rules in Grade 12.',
    exam_importance: 'High-Yield',
    euee_question_weight: '20-25 Questions on EUEE Mathematics',
    nodes: [
      {
        grade_id: 'grade-9',
        grade_name: 'Grade 9',
        subject_id: 'subj-math',
        subject_name: 'Mathematics',
        book_id: 'book-9-math',
        book_title: 'Grade 9 Mathematics Student Textbook',
        unit_number: 2,
        unit_title: 'Equations and Inequalities',
        start_page: 45,
        key_topics: ['Linear Equations', 'Quadratic Equations (Factoring, Quadratic Formula)', 'Quadratic Discriminant (Δ = b² - 4ac)', 'Linear Inequalities'],
        learning_focus: 'Solve quadratic equations and determine the nature of real/complex roots.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-math',
        subject_name: 'Mathematics',
        book_id: 'book-10-math',
        book_title: 'Grade 10 Mathematics Student Textbook',
        unit_number: 1,
        unit_title: 'Relations and Functions',
        start_page: 1,
        key_topics: ['Relations, Domain & Range', 'Functions Definition (Vertical Line Test)', 'Inverse Functions (f⁻¹(x))', 'Composite Functions (f ∘ g)(x)', 'Graphs of Functions'],
        learning_focus: 'Determine domain, range, and invertibility of arbitrary algebraic functions.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-math',
        subject_name: 'Mathematics',
        book_id: 'book-10-math',
        book_title: 'Grade 10 Mathematics Student Textbook',
        unit_number: 2,
        unit_title: 'Polynomial Functions',
        start_page: 67,
        key_topics: ['Polynomial Division (Long Division & Synthetic Division)', 'Remainder Theorem', 'Factor Theorem', 'Rational Root Theorem', 'Graphs of Polynomials'],
        learning_focus: 'Factor higher-degree polynomials and identify real roots using Factor and Remainder theorems.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-math',
        subject_name: 'Mathematics',
        book_id: 'book-10-math',
        book_title: 'Grade 10 Mathematics Student Textbook',
        unit_number: 4,
        unit_title: 'Trigonometric Functions',
        start_page: 199,
        key_topics: ['Radian Measure and Unit Circle', 'Trigonometric Ratios (sin, cos, tan, sec, csc, cot)', 'Graphs of Sine and Cosine', 'Fundamental Trigonometric Identity (sin²θ + cos²θ = 1)'],
        learning_focus: 'Evaluate trigonometric values across all four quadrants of the unit circle.'
      },
      {
        grade_id: 'grade-11',
        grade_name: 'Grade 11',
        subject_id: 'subj-math',
        subject_name: 'Mathematics',
        book_id: 'book-11-math',
        book_title: 'Grade 11 Mathematics Student Textbook',
        unit_number: 4,
        unit_title: 'Trigonometric Identities & Equations',
        start_page: 165,
        key_topics: ['Addition & Subtraction Formulas', 'Double Angle Formulas (sin 2θ, cos 2θ)', 'Half Angle Formulas', 'Solving Trigonometric Equations'],
        learning_focus: 'Simplify complex trigonometric expressions using double-angle and sum identities.'
      },
      {
        grade_id: 'grade-12',
        grade_name: 'Grade 12',
        subject_id: 'subj-math',
        subject_name: 'Mathematics',
        book_id: 'book-12-math',
        book_title: 'Grade 12 Mathematics Student Textbook',
        unit_number: 2,
        unit_title: 'Limits and Continuity',
        start_page: 55,
        key_topics: ['Intuitive & Algebraic Limits', 'Limits at Infinity & Asymptotes', 'Continuity Criteria', 'Indeterminate Forms (0/0)'],
        learning_focus: 'Compute limits of algebraic and trigonometric functions as the foundation of calculus.'
      },
      {
        grade_id: 'grade-12',
        grade_name: 'Grade 12',
        subject_id: 'subj-math',
        subject_name: 'Mathematics',
        book_id: 'book-12-math',
        book_title: 'Grade 12 Mathematics Student Textbook',
        unit_number: 3,
        unit_title: 'Differential & Integral Calculus',
        start_page: 110,
        key_topics: ['Definition of Derivative', 'Power Rule, Product Rule, Quotient Rule', 'Chain Rule', 'Applications: Tangents, Normals, Extrema (Maxima/Minima)', 'Definite & Indefinite Integrals', 'Area Under Curves'],
        learning_focus: 'Differentiate and integrate polynomials, trigonometric, exponential, and logarithmic functions.'
      }
    ]
  },

  // 5. BIOLOGY - Cell Biology, Genetics & Molecular Biotechnology
  {
    id: 'bio-cells-genetics-molecular',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    pathway_title: 'Cell Division, Mendelian Genetics & Molecular DNA Biology',
    description: 'Traces the development of life sciences from cell structures in Grade 9 to Mitosis/Meiosis in Grade 10, Biochemical Enzymes in Grade 11, and DNA replication/Biotechnology in Grade 12.',
    curriculum_bridge_rationale: 'Grade 12 Molecular Genetics questions depend heavily on understanding chromosome segregation from Grade 10 Unit 4 (Meiosis). Review Grade 10 Meiosis stages before studying Grade 12 transcription and translation.',
    exam_importance: 'High-Yield',
    euee_question_weight: '15-20 Questions on EUEE Biology',
    nodes: [
      {
        grade_id: 'grade-9',
        grade_name: 'Grade 9',
        subject_id: 'subj-bio',
        subject_name: 'Biology',
        book_id: 'book-9-bio',
        book_title: 'Grade 9 Biology Student Textbook',
        unit_number: 2,
        unit_title: 'Cells and Microscopic Life',
        start_page: 30,
        key_topics: ['Prokaryotic vs Eukaryotic Cells', 'Cell Organelles (Nucleus, Mitochondria, Ribosomes, Chloroplasts)', 'Cell Membrane Structure & Transport'],
        learning_focus: 'Identify cellular organelles and their metabolic roles.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-bio',
        subject_name: 'Biology',
        book_id: 'book-10-bio',
        book_title: 'Grade 10 Biology Student Textbook',
        unit_number: 4,
        unit_title: 'Cell Reproduction and Genetics',
        start_page: 87,
        key_topics: ['Cell Cycle (Interphase, G1, S, G2)', 'Mitosis (Prophase, Metaphase, Anaphase, Telophase)', 'Meiosis I & Meiosis II (Crossing Over, Gamete Formation)', 'Mendelian Genetics (Monohybrid Crosses, Punnett Squares, Law of Segregation)'],
        learning_focus: 'Differentiate somatic mitosis from reductional meiosis and calculate phenotypic ratios (3:1, 9:3:3:1).'
      },
      {
        grade_id: 'grade-11',
        grade_name: 'Grade 11',
        subject_id: 'subj-bio',
        subject_name: 'Biology',
        book_id: 'book-11-bio',
        book_title: 'Grade 11 Biology Student Textbook',
        unit_number: 2,
        unit_title: 'Biochemical Molecules & Energetics',
        start_page: 56,
        key_topics: ['Carbohydrates, Lipids & Proteins', 'Enzyme Structure & Kinetics (Active Site, Lock and Key, Induced Fit)', 'Cellular Respiration (Glycolysis, Krebs Cycle, Oxidative Phosphorylation)'],
        learning_focus: 'Understand enzyme catalytic activity and ATP generation pathways.'
      },
      {
        grade_id: 'grade-12',
        grade_name: 'Grade 12',
        subject_id: 'subj-bio',
        subject_name: 'Biology',
        book_id: 'book-12-bio',
        book_title: 'Grade 12 Biology Student Textbook',
        unit_number: 3,
        unit_title: 'Molecular Genetics & Biotechnology',
        start_page: 120,
        key_topics: ['DNA Double Helix Structure (Watson-Crick Model)', 'DNA Semi-Conservative Replication', 'Central Dogma: Transcription (mRNA) and Translation (Protein Synthesis)', 'Genetic Code & Mutations', 'Recombinant DNA & Genetic Engineering'],
        learning_focus: 'Master mRNA codon reading, tRNA anti-codons, and molecular genetic engineering.'
      }
    ]
  },

  // 6. HISTORY - Modern Ethiopian State, Sovereignty & Adwa Victory
  {
    id: 'hist-ethiopian-sovereignty-adwa',
    subject_id: 'subj-hist',
    subject_name: 'History',
    pathway_title: 'Ethiopian State Formation, Sovereignty Defense & The Battle of Adwa',
    description: 'Connected historical timeline exploring the consolidation of modern Ethiopia, the 19th-century scramble for Africa, and the landmark 1896 victory at the Battle of Adwa.',
    curriculum_bridge_rationale: 'The Battle of Adwa (Grade 10 Unit 4) cannot be understood without the European Industrial Revolution and Imperialism taught in Grade 10 Unit 1 & 2. Study the Treaty of Wuchale (Article XVII) and colonial scramble together.',
    exam_importance: 'High-Yield',
    euee_question_weight: '10-12 Questions on EUEE Social Science',
    nodes: [
      {
        grade_id: 'grade-9',
        grade_name: 'Grade 9',
        subject_id: 'subj-hist',
        subject_name: 'History',
        book_id: 'book-9-hist',
        book_title: 'Grade 9 History Student Textbook',
        unit_number: 4,
        unit_title: 'Medieval Ethiopian Christian Kingdom & Muslim Sultanates',
        start_page: 85,
        key_topics: ['Zemene Mesafint (Era of the Princes)', 'Regional Lordship & Decentralization', 'Trade Routes and External Relations'],
        learning_focus: 'Understand the political fragmentation of Ethiopia prior to 19th-century unification.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-hist',
        subject_name: 'History',
        book_id: 'book-10-hist',
        book_title: 'Grade 10 History Student Textbook',
        unit_number: 2,
        unit_title: 'Colonial Scramble and Resistance in Africa',
        start_page: 37,
        key_topics: ['Berlin Conference (1884–1885)', 'Motives of European Imperialism', 'Forms of African Resistance (Samori Ture, Urabi Pasha)'],
        learning_focus: 'Analyze the partition of Africa and anti-colonial liberation movements.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-hist',
        subject_name: 'History',
        book_id: 'book-10-hist',
        book_title: 'Grade 10 History Student Textbook',
        unit_number: 3,
        unit_title: 'State Building & Consolidation (1855–1913)',
        start_page: 81,
        key_topics: ['Emperor Tewodros II Unification Vision', 'Emperor Yohannes IV Defense of Sovereignty', 'Emperor Menelik II Territorial Expansion and Modernization'],
        learning_focus: 'Evaluate state centralization and the transition from fragmented regional warlordism to sovereign unity.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-hist',
        subject_name: 'History',
        book_id: 'book-10-hist',
        book_title: 'Grade 10 History Student Textbook',
        unit_number: 4,
        unit_title: 'The Battle of Adwa (1896) & Its Significance',
        start_page: 131,
        key_topics: ['Treaty of Wuchale (Article XVII Discrepancy)', 'Battle of Adwa Strategies (March 1, 1896)', 'Empress Taytu Betul Leadership', 'Global and Pan-African Impact of Adwa Victory'],
        learning_focus: 'Master the diplomatic deception of Article XVII, military coordination at Adwa, and international recognition of Ethiopian sovereignty.'
      },
      {
        grade_id: 'grade-11',
        grade_name: 'Grade 11',
        subject_id: 'subj-hist',
        subject_name: 'History',
        book_id: 'book-11-soc-hist',
        book_title: 'Grade 11 History Student Textbook',
        unit_number: 3,
        unit_title: 'Ethiopia and the League of Nations',
        start_page: 95,
        key_topics: ['Entry into League of Nations (1923)', 'Fascist Italian Aggression (1935–1941)', 'Patriotic Guerilla Resistance (Arbegnoch)'],
        learning_focus: 'Explore Ethiopia\'s international diplomacy and national resistance against 1935 Italian occupation.'
      }
    ]
  },

  // 7. CIVICS - Democracy, Constitutional Governance & Human Rights
  {
    id: 'civics-democracy-constitution-rights',
    subject_id: 'subj-civ',
    subject_name: 'Citizenship & Civics',
    pathway_title: 'Democratic Systems, Constitutionalism & Human Rights',
    description: 'Integrated citizenship education pipeline linking Rule of Law in Grade 9 to Democratic Governance in Grade 10 and Federalism & Human Rights in Grade 11 and 12.',
    curriculum_bridge_rationale: 'EUEE Civics questions regularly contrast constitutional supremacy with ordinary legislation. Review Grade 9 Rule of Law before studying Grade 10 Democratic Systems and Grade 11 Federal Constitutional Organs.',
    exam_importance: 'High-Yield',
    euee_question_weight: '12-14 Questions on EUEE Civics',
    nodes: [
      {
        grade_id: 'grade-9',
        grade_name: 'Grade 9',
        subject_id: 'subj-civ',
        subject_name: 'Citizenship & Civics',
        book_id: 'book-9-civ',
        book_title: 'Grade 9 Civics Student Textbook',
        unit_number: 2,
        unit_title: 'The Rule of Law',
        start_page: 38,
        key_topics: ['Supremacy of the Constitution', 'Equality before the Law', 'Limiting Government Powers', 'Corruption Prevention'],
        learning_focus: 'Understand why no person or official is above the constitutional law.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-civ',
        subject_name: 'Citizenship & Civics',
        book_id: 'book-10-civ',
        book_title: 'Grade 10 Civics Student Textbook',
        unit_number: 1,
        unit_title: 'Democracy and Democratization',
        start_page: 1,
        key_topics: ['Direct vs Representative Democracy', 'Principles of Democratic Governance', 'Citizen Participation', 'Free and Fair Elections'],
        learning_focus: 'Analyze core principles of democratic statehood and universal adult suffrage.'
      },
      {
        grade_id: 'grade-10',
        grade_name: 'Grade 10',
        subject_id: 'subj-civ',
        subject_name: 'Citizenship & Civics',
        book_id: 'book-10-civ',
        book_title: 'Grade 10 Civics Student Textbook',
        unit_number: 6,
        unit_title: 'Human Rights',
        start_page: 125,
        key_topics: ['Universal Declaration of Human Rights (UDHR)', 'Fundamental Human Rights vs Democratic Rights', 'Rights of Vulnerable Groups'],
        learning_focus: 'Distinguish civil and political liberties from socio-economic and cultural human rights.'
      },
      {
        grade_id: 'grade-11',
        grade_name: 'Grade 11',
        subject_id: 'subj-civ',
        subject_name: 'Citizenship & Civics',
        book_id: 'book-11-civ',
        book_title: 'Grade 11 Civics Student Textbook',
        unit_number: 1,
        unit_title: 'Federalism and Constitutionalism in Ethiopia',
        start_page: 1,
        key_topics: ['Division of Powers (Federal vs Regional States)', 'Legislative, Executive, and Judicial Branches', 'System of Checks and Balances'],
        learning_focus: 'Examine constitutional division of powers and inter-branch oversight.'
      }
    ]
  }
];
