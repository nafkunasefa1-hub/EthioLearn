/**
 * Ethiopian National Curriculum Syllabus Registry for Client UI.
 * Provides topic lists for Chemistry, Physics, Mathematics, Biology, English, and SAT.
 */

export interface SyllabusTopic {
  id: string;
  subject_id: string;
  unit_number: number;
  grade_level: 11 | 12;
  name: string;
  official_title: string;
  description: string;
  keywords: string[];
}

export interface InstructionCategory {
  id: string;
  subject_id: string;
  name: string;
  instruction_text: string;
  section_label: string;
  keywords: string[];
}

export const STEM_SYLLABUS_TOPICS: Record<string, SyllabusTopic[]> = {
  'subj-chem': [
    {
      id: 'chem-atomic-struct',
      subject_id: 'subj-chem',
      unit_number: 1,
      grade_level: 11,
      name: 'Atomic Structure & Periodic Properties',
      official_title: 'Unit 1: Fundamental Concepts & Atomic Structure',
      description: 'Quantum numbers, atomic orbitals, electron configuration, Bohr model, periodic trends (atomic radius, ionization energy, electronegativity, electron affinity).',
      keywords: ['atomic structure', 'electron configuration', 'quantum number', 'orbital', 'subshell', 'bohr', 'ionization energy', 'electronegativity', 'electron affinity', 'periodic table', 'atomic radius']
    },
    {
      id: 'chem-bonding',
      subject_id: 'subj-chem',
      unit_number: 2,
      grade_level: 11,
      name: 'Chemical Bonding & Molecular Geometry',
      official_title: 'Unit 2: Chemical Bonding and Structure',
      description: 'Ionic lattice energy, covalent bonding, Lewis structures, octet exceptions, VSEPR molecular shapes, hybridization (sp, sp2, sp3), dipole moments, intermolecular forces.',
      keywords: ['chemical bonding', 'ionic bond', 'covalent bond', 'lewis structure', 'vsepr', 'molecular geometry', 'hybridization', 'tetrahedral', 'trigonal', 'dipole moment']
    },
    {
      id: 'chem-states-matter',
      subject_id: 'subj-chem',
      unit_number: 3,
      grade_level: 11,
      name: 'Physical States of Matter & Gas Laws',
      official_title: 'Unit 3: Physical States of Matter',
      description: 'Kinetic molecular theory, ideal gas law (PV=nRT), Boyle, Charles, Graham law of effusion, Dalton law of partial pressures, real gas Van der Waals, phase diagrams.',
      keywords: ['states of matter', 'gas laws', 'ideal gas', 'pv=nrt', 'boyle', 'charles', 'dalton', 'partial pressure', 'graham', 'effusion', 'kinetic molecular theory']
    },
    {
      id: 'chem-kinetics',
      subject_id: 'subj-chem',
      unit_number: 4,
      grade_level: 11,
      name: 'Chemical Kinetics & Reaction Rates',
      official_title: 'Unit 4: Chemical Kinetics',
      description: 'Reaction rate laws, reaction orders (zero, first, second), rate constants, collision theory, activation energy, Arrhenius equation, catalysis and reaction mechanisms.',
      keywords: ['chemical kinetics', 'reaction rate', 'rate law', 'rate constant', 'order of reaction', 'activation energy', 'arrhenius', 'catalyst', 'collision theory']
    },
    {
      id: 'chem-equilibrium',
      subject_id: 'subj-chem',
      unit_number: 5,
      grade_level: 11,
      name: 'Chemical Equilibrium & Le Chatelier',
      official_title: 'Unit 5: Chemical Equilibrium',
      description: 'Dynamic chemical equilibrium, equilibrium constants (Kc and Kp), reaction quotient Qc, Le Chatelier principle (pressure, temperature, concentration shifts), Haber process.',
      keywords: ['chemical equilibrium', 'equilibrium constant', 'kc', 'kp', 'le chatelier', 'reaction quotient', 'qc', 'dynamic equilibrium', 'haber process']
    },
    {
      id: 'chem-solutions',
      subject_id: 'subj-chem',
      unit_number: 1,
      grade_level: 12,
      name: 'Solutions & Colligative Properties',
      official_title: 'Unit 1: Solutions',
      description: 'Solution concentrations (molarity, molality, mole fraction), solubility rules, Henry law, colligative properties (boiling point elevation, freezing point depression, osmotic pressure).',
      keywords: ['solutions', 'molarity', 'molality', 'mole fraction', 'solubility', 'henry law', 'colligative properties', 'boiling point elevation', 'freezing point depression', 'osmotic pressure']
    },
    {
      id: 'chem-acid-base',
      subject_id: 'subj-chem',
      unit_number: 2,
      grade_level: 12,
      name: 'Acid-Base Equilibria & pH',
      official_title: 'Unit 2: Acid-Base Equilibria',
      description: 'Arrhenius, Bronsted-Lowry, Lewis acid-base theories, pH and pOH calculations, autoionization of water, Ka and Kb, buffer solutions, salt hydrolysis, titrations and indicators.',
      keywords: ['acid-base', 'acid', 'base', 'ph', 'poh', 'ka', 'kb', 'buffer', 'titration', 'bronsted-lowry', 'arrhenius', 'lewis acid', 'neutralization']
    },
    {
      id: 'chem-electrochem',
      subject_id: 'subj-chem',
      unit_number: 3,
      grade_level: 12,
      name: 'Electrochemistry & Redox Reactions',
      official_title: 'Unit 3: Electrochemistry',
      description: 'Balancing redox reactions, galvanic/voltaic cells, standard reduction potentials (E°), cell EMF, Nernst equation, electrolytic cells, Faraday laws of electrolysis, corrosion.',
      keywords: ['electrochemistry', 'redox', 'galvanic cell', 'voltaic cell', 'electrolytic cell', 'anode', 'cathode', 'standard reduction potential', 'cell potential', 'emf', 'faraday']
    },
    {
      id: 'chem-hydrocarbons',
      subject_id: 'subj-chem',
      unit_number: 4,
      grade_level: 12,
      name: 'Hydrocarbons & Organic Nomenclature',
      official_title: 'Unit 4: Introduction to Hydrocarbons',
      description: 'Alkanes, alkenes, alkynes, aromatic hydrocarbons (benzene), IUPAC nomenclature, structural isomerism, geometric isomerism, combustion, addition and substitution reactions.',
      keywords: ['hydrocarbons', 'alkane', 'alkene', 'alkyne', 'aromatic', 'benzene', 'iupac nomenclature', 'isomerism', 'addition reaction']
    },
    {
      id: 'chem-oxygen-organics',
      subject_id: 'subj-chem',
      unit_number: 6,
      grade_level: 11,
      name: 'Oxygen-Containing Organic Compounds',
      official_title: 'Unit 6: Oxygen-Containing Organic Compounds',
      description: 'Alcohols, ethers, aldehydes, ketones, carboxylic acids, esters, saponification, oxidation reactions, Tollens and Fehling reagents, preparation of esters.',
      keywords: ['alcohols', 'ethers', 'aldehydes', 'ketones', 'carboxylic acids', 'esters', 'saponification', 'carbonyl group', 'tollens', 'fehling']
    },
    {
      id: 'chem-polymers-industry',
      subject_id: 'subj-chem',
      unit_number: 5,
      grade_level: 12,
      name: 'Polymers & Industrial Chemistry in Ethiopia',
      official_title: 'Unit 5: Polymers and Selected Industrial Products',
      description: 'Natural and synthetic polymers, addition and condensation polymerization, plastics, rubber, manufacture of ammonia, nitric acid, sulfuric acid, cement and ceramics in Ethiopia.',
      keywords: ['polymers', 'polymerization', 'addition polymer', 'condensation polymer', 'monomer', 'polyethylene', 'nylon', 'rubber', 'industrial chemistry', 'sulfuric acid']
    }
  ],

  'subj-phys': [
    {
      id: 'phys-vectors',
      subject_id: 'subj-phys',
      unit_number: 2,
      grade_level: 11,
      name: 'Vectors in 2D & 3D',
      official_title: 'Unit 2: Vectors and Coordinate Systems',
      description: 'Cartesian and polar vectors, unit vectors (i, j, k), vector addition, scalar (dot) product, vector (cross) product, orthogonality, torque and work representations.',
      keywords: ['vectors', 'unit vector', 'dot product', 'cross product', 'scalar product', 'vector product', 'orthogonality', 'resultant vector']
    },
    {
      id: 'phys-kinematics',
      subject_id: 'subj-phys',
      unit_number: 3,
      grade_level: 11,
      name: 'Kinematics & 2D Motion',
      official_title: 'Unit 3: Motion in One and Two Dimensions',
      description: 'Linear kinematics, calculus relations (v = ds/dt, a = dv/dt), projectile motion (trajectory, range, maximum height, flight time), uniform circular motion, centripetal acceleration, relative velocity.',
      keywords: ['kinematics', 'projectile motion', 'velocity', 'acceleration', 'trajectory', 'time of flight', 'maximum height', 'horizontal range', 'circular motion']
    },
    {
      id: 'phys-dynamics',
      subject_id: 'subj-phys',
      unit_number: 4,
      grade_level: 11,
      name: 'Dynamics & Newton Laws of Motion',
      official_title: 'Unit 4: Dynamics and Forces',
      description: 'Newton first, second, third laws of motion, free-body diagrams, friction (static and kinetic), inclined planes, tension in strings, banking of highway curves.',
      keywords: ['dynamics', 'newton laws', 'free-body diagram', 'f=ma', 'friction', 'static friction', 'kinetic friction', 'normal force', 'inclined plane', 'tension']
    },
    {
      id: 'phys-work-energy',
      subject_id: 'subj-phys',
      unit_number: 4,
      grade_level: 11,
      name: 'Work, Energy & Power',
      official_title: 'Unit 4: Work, Energy and Conservation Laws',
      description: 'Work done by constant and variable forces, work-energy theorem, kinetic energy, gravitational and elastic potential energy, mechanical energy conservation, power.',
      keywords: ['work', 'energy', 'power', 'work-energy theorem', 'kinetic energy', 'potential energy', 'mechanical energy', 'conservation of energy']
    },
    {
      id: 'phys-momentum',
      subject_id: 'subj-phys',
      unit_number: 4,
      grade_level: 11,
      name: 'Linear Momentum & Collisions',
      official_title: 'Unit 4: Momentum, Impulse and Collisions',
      description: 'Linear momentum, impulse-momentum theorem, conservation of linear momentum, elastic and inelastic collisions in 1D and 2D, center of mass.',
      keywords: ['momentum', 'impulse', 'linear momentum', 'conservation of momentum', 'elastic collision', 'inelastic collision', 'center of mass']
    },
    {
      id: 'phys-rotational',
      subject_id: 'subj-phys',
      unit_number: 2,
      grade_level: 12,
      name: 'Rotational Dynamics & Equilibrium',
      official_title: 'Unit 2: Two-Dimensional Motion and Rotational Dynamics',
      description: 'Torque, moment of inertia, rotational kinematics, rotational kinetic energy, angular momentum conservation, conditions for static equilibrium.',
      keywords: ['rotational dynamics', 'torque', 'moment of inertia', 'angular velocity', 'angular acceleration', 'angular momentum', 'static equilibrium']
    },
    {
      id: 'phys-thermo',
      subject_id: 'subj-phys',
      unit_number: 5,
      grade_level: 11,
      name: 'Heat Conduction & Thermodynamics',
      official_title: 'Unit 5: Heat Conduction and Calorimetry',
      description: 'Thermal expansion, calorimetry, specific heat capacity, latent heat of phase changes, heat transfer mechanisms (conduction, convection, radiation), laws of thermodynamics.',
      keywords: ['heat', 'temperature', 'thermodynamics', 'calorimetry', 'specific heat', 'latent heat', 'thermal expansion', 'conduction', 'radiation']
    },
    {
      id: 'phys-electrostatics',
      subject_id: 'subj-phys',
      unit_number: 6,
      grade_level: 11,
      name: 'Electrostatics & Capacitance',
      official_title: 'Unit 6: Electrostatics and Electric Circuit',
      description: 'Coulomb law, electric field intensity, Gauss law, electric potential and potential energy, equipotential surfaces, parallel-plate capacitors, dielectrics, energy stored in capacitors.',
      keywords: ['electrostatics', 'coulomb law', 'electric field', 'electric potential', 'capacitance', 'capacitor', 'dielectric', 'equipotential']
    },
    {
      id: 'phys-circuits',
      subject_id: 'subj-phys',
      unit_number: 6,
      grade_level: 11,
      name: 'DC Circuits & Kirchhoff Rules',
      official_title: 'Unit 6: DC Circuits and Electrical Measurement',
      description: 'Ohm law, resistivity and resistance temperature dependence, EMF and internal resistance, series/parallel combinations, Kirchhoff junction and loop rules, electrical power and energy.',
      keywords: ['circuits', 'dc circuits', 'kirchhoff', 'ohm law', 'resistor', 'internal resistance', 'electromotive force', 'emf', 'series circuit', 'parallel circuit']
    },
    {
      id: 'phys-magnetism',
      subject_id: 'subj-phys',
      unit_number: 4,
      grade_level: 12,
      name: 'Electromagnetism & Induction',
      official_title: 'Unit 4: Electromagnetism and Induction',
      description: 'Magnetic fields, Lorentz force on charges and currents, Biot-Savart and Ampere laws, magnetic flux, Faraday law of induction, Lenz law, self and mutual inductance, AC transformers.',
      keywords: ['magnetism', 'electromagnetic induction', 'magnetic field', 'lorentz force', 'magnetic flux', 'faraday law', 'lenz law', 'transformer']
    },
    {
      id: 'phys-nuclear',
      subject_id: 'subj-phys',
      unit_number: 7,
      grade_level: 11,
      name: 'Atomic & Nuclear Physics',
      official_title: 'Unit 7: Nuclear Physics and Modern Physics',
      description: 'Photoelectric effect, photon energy (E=hf), Bohr atom, mass defect and nuclear binding energy, radioactive decay (alpha, beta, gamma), half-life, nuclear fission and fusion.',
      keywords: ['nuclear physics', 'photoelectric effect', 'bohr model', 'radioactive decay', 'half-life', 'alpha decay', 'beta decay', 'gamma ray', 'binding energy']
    }
  ],

  'subj-math': [
    {
      id: 'math-relations-funcs',
      subject_id: 'subj-math',
      unit_number: 1,
      grade_level: 11,
      name: 'Relations & Functions',
      official_title: 'Unit 1: Relations and Functions',
      description: 'Domain and range, inverse relations, one-to-one (injective), onto (surjective), bijective mappings, composite functions (f o g)(x), inverse functions f^-1(x).',
      keywords: ['relations', 'functions', 'domain', 'range', 'inverse function', 'composite function', 'injective', 'surjective', 'bijective', 'one-to-one', 'onto']
    },
    {
      id: 'math-rational-expr',
      subject_id: 'subj-math',
      unit_number: 2,
      grade_level: 11,
      name: 'Rational Expressions & Functions',
      official_title: 'Unit 2: Rational Expressions and Rational Functions',
      description: 'Simplifying rational algebraic expressions, partial fractions, solving rational equations and inequalities, vertical/horizontal/oblique asymptotes, holes in graphs.',
      keywords: ['rational expressions', 'rational functions', 'asymptote', 'vertical asymptote', 'horizontal asymptote', 'oblique asymptote', 'rational inequality']
    },
    {
      id: 'math-matrices',
      subject_id: 'subj-math',
      unit_number: 3,
      grade_level: 11,
      name: 'Matrices & Systems of Linear Equations',
      official_title: 'Unit 3: Matrices',
      description: 'Matrix operations (addition, scalar, matrix multiplication), special matrices (identity, symmetric, diagonal), Gaussian elimination, augmented matrix systems, matrix inverses.',
      keywords: ['matrices', 'matrix', 'linear equations', 'gaussian elimination', 'augmented matrix', 'identity matrix', 'matrix multiplication', 'inverse matrix']
    },
    {
      id: 'math-determinants',
      subject_id: 'subj-math',
      unit_number: 4,
      grade_level: 11,
      name: 'Determinants & Cramer Rule',
      official_title: 'Unit 4: Determinants and Their Properties',
      description: '2x2 and 3x3 determinants, minors, cofactors, Laplace expansion, properties of determinants, adjoint matrix, Cramer rule for solving linear equation systems.',
      keywords: ['determinants', 'determinant', 'cramer rule', 'cofactor', 'minor', 'adjoint matrix', 'laplace expansion', 'singular matrix']
    },
    {
      id: 'math-vectors',
      subject_id: 'subj-math',
      unit_number: 5,
      grade_level: 11,
      name: 'Vectors in 2D & 3D Space',
      official_title: 'Unit 5: Vectors',
      description: 'Component form (x, y, z), unit base vectors i, j, k, dot product, angle between vectors, orthogonal projections, cross product in R3, lines and planes in space.',
      keywords: ['vectors', 'vector', 'dot product', 'cross product', 'projection', 'collinear', 'orthogonal', 'magnitude', 'unit vector']
    },
    {
      id: 'math-transformations',
      subject_id: 'subj-math',
      unit_number: 6,
      grade_level: 11,
      name: 'Transformations of the Plane',
      official_title: 'Unit 6: Transformations of the Plane',
      description: 'Rigid motions (isometries), translations, reflections across lines, rotations about origins/points, dilations (homothety), transformation matrix representation.',
      keywords: ['transformations', 'transformation', 'reflection', 'rotation', 'translation', 'dilation', 'isometry', 'homothety']
    },
    {
      id: 'math-statistics',
      subject_id: 'subj-math',
      unit_number: 7,
      grade_level: 11,
      name: 'Statistics & Grouped Data',
      official_title: 'Unit 7: Statistics',
      description: 'Grouped frequency distributions, histograms, cumulative frequency ogives, mean (assumed mean), median, mode of grouped data, variance, standard deviation, coefficient of variation.',
      keywords: ['statistics', 'mean', 'median', 'mode', 'standard deviation', 'variance', 'grouped data', 'histogram', 'ogive']
    },
    {
      id: 'math-probability',
      subject_id: 'subj-math',
      unit_number: 8,
      grade_level: 11,
      name: 'Probability & Binomial Theorem',
      official_title: 'Unit 8: Probability',
      description: 'Counting principles, permutations (nPr), combinations (nCr), binomial theorem expansions, sample spaces, independent/mutually exclusive events, conditional probability.',
      keywords: ['probability', 'binomial theorem', 'permutation', 'combination', 'npr', 'ncr', 'sample space', 'conditional probability']
    },
    {
      id: 'math-sequences',
      subject_id: 'subj-math',
      unit_number: 1,
      grade_level: 12,
      name: 'Sequences & Series',
      official_title: 'Unit 1: Sequences and Series',
      description: 'Arithmetic sequences and series (common difference, nth term, Sn sum), geometric sequences and series (common ratio, sum to infinity), sigma notation, convergence tests.',
      keywords: ['sequences', 'series', 'arithmetic sequence', 'geometric sequence', 'arithmetic series', 'geometric series', 'common difference', 'common ratio', 'sum to infinity']
    },
    {
      id: 'math-limits',
      subject_id: 'subj-math',
      unit_number: 2,
      grade_level: 12,
      name: 'Limits & Continuity',
      official_title: 'Unit 2: Introduction to Limits and Continuity',
      description: 'Intuitive and algebraic limits, one-sided limits, limits at infinity, indeterminate forms (0/0, inf/inf), continuity of functions at points and open/closed intervals.',
      keywords: ['limits', 'continuity', 'limit', 'continuous', 'one-sided limit', 'indeterminate form', 'discontinuity']
    },
    {
      id: 'math-derivatives',
      subject_id: 'subj-math',
      unit_number: 3,
      grade_level: 12,
      name: 'Differential Calculus & Derivatives',
      official_title: 'Unit 3: Introduction to Differential Calculus',
      description: 'Definition of derivative, power rule, product rule, quotient rule, chain rule, trigonometric and exponential derivatives, implicit differentiation.',
      keywords: ['derivatives', 'differential calculus', 'derivative', 'differentiation', 'power rule', 'chain rule', 'product rule', 'quotient rule']
    },
    {
      id: 'math-app-derivatives',
      subject_id: 'subj-math',
      unit_number: 4,
      grade_level: 12,
      name: 'Applications of Derivatives',
      official_title: 'Unit 4: Applications of Differential Calculus',
      description: 'Tangent and normal lines, velocity and acceleration, critical numbers, increasing and decreasing functions, local extrema, concavity, inflection points, optimization.',
      keywords: ['applications of derivatives', 'tangent line', 'normal line', 'critical point', 'maximum', 'minimum', 'extrema', 'concavity', 'inflection point', 'optimization']
    },
    {
      id: 'math-integrals',
      subject_id: 'subj-math',
      unit_number: 5,
      grade_level: 12,
      name: 'Integral Calculus & Applications',
      official_title: 'Unit 5: Introduction to Integral Calculus',
      description: 'Indefinite integrals (antiderivatives), standard integration formulas, substitution method, definite integrals, Fundamental Theorem of Calculus, area bounded by curves.',
      keywords: ['integral calculus', 'integrals', 'integral', 'integration', 'antiderivative', 'substitution', 'definite integral', 'area under curve']
    }
  ],

  'subj-bio': [
    {
      id: 'bio-cytology',
      subject_id: 'subj-bio',
      unit_number: 1,
      grade_level: 11,
      name: 'Cytology & Scientific Methods in Biology',
      official_title: 'Unit 1: Biology and Technology',
      description: 'Microscopy, cell theory, prokaryotic vs eukaryotic cells, structure and functions of cell organelles, membrane transport (diffusion, osmosis, active transport).',
      keywords: ['cytology', 'cell biology', 'microscope', 'organelle', 'membrane transport', 'diffusion', 'osmosis', 'active transport']
    },
    {
      id: 'bio-enzymes',
      subject_id: 'subj-bio',
      unit_number: 3,
      grade_level: 11,
      name: 'Enzymes & Biochemical Catalysis',
      official_title: 'Unit 3: Enzymes',
      description: 'Enzyme chemical nature, mechanism of action (lock-and-key, induced fit), activation energy, factors affecting enzyme activity (temperature, pH, substrate concentration, inhibitors).',
      keywords: ['enzymes', 'enzyme', 'catalyst', 'active site', 'substrate', 'activation energy', 'lock and key', 'induced fit']
    },
    {
      id: 'bio-cellular-energy',
      subject_id: 'subj-bio',
      unit_number: 3,
      grade_level: 12,
      name: 'Cellular Energy: Photosynthesis & Respiration',
      official_title: 'Unit 3: Energy Transformation',
      description: 'Structure of ATP, photosynthesis (light-dependent reactions, Calvin cycle, factors), cellular respiration (glycolysis, Krebs cycle, electron transport chain, anaerobic fermentation).',
      keywords: ['cellular energy', 'photosynthesis', 'cellular respiration', 'atp', 'chloroplast', 'mitochondria', 'glycolysis', 'krebs cycle', 'calvin cycle']
    },
    {
      id: 'bio-genetics',
      subject_id: 'subj-bio',
      unit_number: 4,
      grade_level: 11,
      name: 'Genetics & Molecular Basis of Heredity',
      official_title: 'Unit 4: Genetics and Molecular Biology',
      description: 'Mendelian principles (monohybrid, dihybrid crosses, Punnett square), alleles, genotype, phenotype, sex-linked traits, DNA structure and replication, transcription, translation, mutations.',
      keywords: ['genetics', 'dna', 'rna', 'mendel', 'allele', 'genotype', 'phenotype', 'punnett square', 'monohybrid', 'transcription', 'translation']
    },
    {
      id: 'bio-animal-diversity',
      subject_id: 'subj-bio',
      unit_number: 2,
      grade_level: 11,
      name: 'Animal Diversity & Classification',
      official_title: 'Unit 2: Animals',
      description: 'Characteristics of major animal phyla (Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata, Chordata), vertebrate classes.',
      keywords: ['animal diversity', 'phylum', 'arthropoda', 'chordata', 'annelida', 'mollusca', 'invertebrate', 'vertebrate']
    },
    {
      id: 'bio-physiology',
      subject_id: 'subj-bio',
      unit_number: 5,
      grade_level: 11,
      name: 'Human Physiology & Organ Systems',
      official_title: 'Unit 5: Human Body Systems',
      description: 'Circulatory, respiratory, digestive, nervous, endocrine, and excretory systems; nephron mechanics and osmoregulation, reflex arc, hormonal homeostasis, human reproduction.',
      keywords: ['physiology', 'human body', 'circulatory system', 'heart', 'respiratory system', 'nervous system', 'neuron', 'reflex arc', 'endocrine', 'hormone', 'nephron']
    },
    {
      id: 'bio-microbio',
      subject_id: 'subj-bio',
      unit_number: 2,
      grade_level: 12,
      name: 'Microorganisms & Infectious Diseases',
      official_title: 'Unit 2: Microorganisms and Pathology',
      description: 'Bacteria, viruses, fungi, protozoa; pathogenic mechanisms, common communicable diseases in Ethiopia (malaria, tuberculosis, HIV/AIDS), immune response, antibiotics and resistance.',
      keywords: ['microorganisms', 'bacteria', 'virus', 'fungi', 'protozoa', 'pathogen', 'malaria', 'tuberculosis', 'hiv', 'immune system', 'vaccine']
    },
    {
      id: 'bio-ecology',
      subject_id: 'subj-bio',
      unit_number: 6,
      grade_level: 11,
      name: 'Ecology, Populations & Ethiopian Biodiversity',
      official_title: 'Unit 6: Population and Natural Resources',
      description: 'Ecosystems, trophic levels, energy flow, food chains and webs, biogeochemical cycles (carbon, nitrogen, water), population growth and carrying capacity, endemic wildlife of Ethiopia.',
      keywords: ['ecology', 'ecosystem', 'trophic level', 'food chain', 'food web', 'nitrogen cycle', 'carbon cycle', 'carrying capacity', 'population', 'biodiversity', 'conservation']
    },
    {
      id: 'bio-evolution',
      subject_id: 'subj-bio',
      unit_number: 4,
      grade_level: 12,
      name: 'Evolution & Origin of Life',
      official_title: 'Unit 4: Evolution',
      description: 'Theories of evolution (Lamarck vs Darwinian natural selection), evidence for evolution (fossils, homologous structures, comparative embryology, molecular DNA), hominid origins in East Africa.',
      keywords: ['evolution', 'natural selection', 'darwin', 'lamarck', 'fossil record', 'homologous structure', 'speciation', 'lucy', 'dinkinesh', 'origin of life']
    }
  ]
};

export const INSTRUCTION_CATEGORIES: Record<string, InstructionCategory[]> = {
  'subj-eng': [
    {
      id: 'eng-dialogue',
      subject_id: 'subj-eng',
      name: 'Dialogue & Communicative Activities',
      instruction_text: 'Communicative Activities: Choose the alternative that is most appropriate to complete the dialogue.',
      section_label: 'Section One: Communicative Activities',
      keywords: ['dialogue', 'speaker', 'conversation', 'communicative']
    },
    {
      id: 'eng-jumbled-sentences',
      subject_id: 'subj-eng',
      name: 'Jumbled Sentences',
      instruction_text: 'Section One: Jumbled Sentences: Arrange the sentences in the correct order to form a coherent paragraph.',
      section_label: 'Section Two: Jumbled Sentences',
      keywords: ['jumbled sentences', 'coherent paragraph', 'correct order']
    },
    {
      id: 'eng-jumbled-words',
      subject_id: 'subj-eng',
      name: 'Jumbled Words',
      instruction_text: 'Section Two: Jumbled Words: Put the words in the correct order to make a proper sentence.',
      section_label: 'Section Three: Jumbled Words',
      keywords: ['jumbled words', 'proper sentence']
    },
    {
      id: 'eng-letter-writing',
      subject_id: 'subj-eng',
      name: 'Letter Writing',
      instruction_text: 'Section Three: Letter Writing: Answer questions based on conventions of formal and informal correspondence.',
      section_label: 'Section Four: Letter Writing',
      keywords: ['letter writing', 'formal letter', 'informal letter']
    },
    {
      id: 'eng-punctuation',
      subject_id: 'subj-eng',
      name: 'Punctuation & Capitalization',
      instruction_text: 'Section Four: Punctuation and Capitalization: Choose the sentence that is correctly punctuated or capitalized.',
      section_label: 'Section Five: Punctuation & Capitalization',
      keywords: ['punctuated', 'capitalized', 'apostrophe', 'comma']
    },
    {
      id: 'eng-spelling',
      subject_id: 'subj-eng',
      name: 'Spelling & Paragraph Type',
      instruction_text: 'Section Five: Spelling & Paragraph Type: Choose the correct spelling and identify paragraph genres.',
      section_label: 'Section Six: Spelling & Paragraph Types',
      keywords: ['spelling', 'correctly spelt', 'paragraph type']
    },
    {
      id: 'eng-grammar',
      subject_id: 'subj-eng',
      name: 'Grammar & Language Focus',
      instruction_text: 'II. Language Focus: Grammar, Prepositions, Conditionals, Reported Speech, Wishes & Verb Patterns.',
      section_label: 'Part II: Language Focus & Grammar',
      keywords: ['grammar', 'tense', 'conditional', 'reported speech', 'preposition']
    },
    {
      id: 'eng-sentence-comp',
      subject_id: 'subj-eng',
      name: 'Sentence Comprehension',
      instruction_text: 'Section One: Sentence Comprehension: Choose the sentence with the closest meaning to the head sentence.',
      section_label: 'Section Seven: Sentence Comprehension',
      keywords: ['sentence comprehension', 'closest in meaning']
    },
    {
      id: 'eng-reading-comp',
      subject_id: 'subj-eng',
      name: 'Reading Comprehension',
      instruction_text: 'Section Two: Reading Comprehension: Read the attached passage and answer the comprehension questions.',
      section_label: 'Part III: Reading Comprehension Passages',
      keywords: ['passage', 'reading comprehension', 'author implies']
    },
    {
      id: 'eng-vocab-comp',
      subject_id: 'subj-eng',
      name: 'Vocabulary & Sentence Completion',
      instruction_text: 'IV. Vocabulary: Section One: Sentence Completion: Choose the word or phrase that best completes the sentence.',
      section_label: 'Part IV: Vocabulary & Sentence Completion',
      keywords: ['sentence completion', 'vocabulary']
    },
    {
      id: 'eng-word-sub',
      subject_id: 'subj-eng',
      name: 'Vocabulary & Word Substitution',
      instruction_text: 'Section Two: Word Substitution: Choose the word or phrase that keeps the meaning of the underlined word.',
      section_label: 'Part V: Word Substitution & Synonyms',
      keywords: ['word substitution', 'underlined word', 'synonym']
    }
  ],

  'subj-sat': [
    {
      id: 'sat-verbal-analogies',
      subject_id: 'subj-sat',
      name: 'Verbal Reasoning & Word Analogies',
      instruction_text: 'Direction: Choose the pair of words that best expresses a relationship similar to that expressed in the original pair.',
      section_label: 'Section 1: Verbal Reasoning & Analogies',
      keywords: ['analogy', 'analogies', 'relationship similar', 'pair of words']
    },
    {
      id: 'sat-sentence-completion',
      subject_id: 'subj-sat',
      name: 'Sentence Completion & Context Clues',
      instruction_text: 'Direction: Choose the word or set of words that, when inserted into the sentence, best fits the meaning of the sentence as a whole.',
      section_label: 'Section 2: Sentence Completion',
      keywords: ['sentence completion', 'inserted in the sentence', 'fits the meaning']
    },
    {
      id: 'sat-reading-critical',
      subject_id: 'subj-sat',
      name: 'Critical Reading & Passage Inference',
      instruction_text: 'Direction: Read the passage carefully and answer the questions based on what is stated or implied in the passage.',
      section_label: 'Section 3: Critical Reading & Passages',
      keywords: ['passage', 'stated or implied', 'critical reading']
    },
    {
      id: 'sat-antonyms-synonyms',
      subject_id: 'subj-sat',
      name: 'Antonyms & Synonyms in Context',
      instruction_text: 'Direction: Choose the word most nearly opposite (antonym) or closest in meaning (synonym) to the capitalized word.',
      section_label: 'Section 4: Antonyms & Synonyms',
      keywords: ['antonym', 'synonym', 'opposite in meaning', 'closest in meaning']
    },
    {
      id: 'sat-quantitative',
      subject_id: 'subj-sat',
      name: 'Quantitative Reasoning & Arithmetic Aptitude',
      instruction_text: 'Direction: Solve each mathematical problem and select the best answer from the given numerical alternatives.',
      section_label: 'Section 5: Quantitative Reasoning',
      keywords: ['quantitative', 'arithmetic', 'percentage', 'ratio', 'proportion']
    },
    {
      id: 'sat-algebra-geometry',
      subject_id: 'subj-sat',
      name: 'Algebraic & Geometric Reasoning',
      instruction_text: 'Direction: Use algebraic relationships and geometric properties of figures, angles, and coordinates to find the correct value.',
      section_label: 'Section 6: Algebraic & Geometric Aptitude',
      keywords: ['algebra', 'geometry', 'equation', 'triangle', 'circle', 'area']
    },
    {
      id: 'sat-analytical-logic',
      subject_id: 'subj-sat',
      name: 'Analytical Reasoning & Logic Puzzles',
      instruction_text: 'Direction: Read the conditions and constraints carefully. Deduce the logically valid conclusion or sequence.',
      section_label: 'Section 7: Analytical Reasoning & Logic Puzzles',
      keywords: ['analytical reasoning', 'logic puzzle', 'deduction', 'seating arrangement']
    },
    {
      id: 'sat-data-interpretation',
      subject_id: 'subj-sat',
      name: 'Data Interpretation & Graph Analysis',
      instruction_text: 'Direction: Questions are based on data presented in charts, tables, or graphs. Study the data and select the accurate answer.',
      section_label: 'Section 8: Data Interpretation & Graphs',
      keywords: ['data interpretation', 'table', 'chart', 'bar graph', 'pie chart']
    }
  ]
};

export function getClientSubjectTopics(subjectId: string): Array<{
  id: string;
  name: string;
  description: string;
  instruction_text?: string;
  is_stem: boolean;
}> {
  if (STEM_SYLLABUS_TOPICS[subjectId]) {
    return STEM_SYLLABUS_TOPICS[subjectId].map(t => ({
      id: t.id,
      name: t.name,
      description: `${t.official_title}: ${t.description}`,
      is_stem: true
    }));
  }

  if (INSTRUCTION_CATEGORIES[subjectId]) {
    return INSTRUCTION_CATEGORIES[subjectId].map(c => ({
      id: c.id,
      name: c.name,
      description: c.section_label,
      instruction_text: c.instruction_text,
      is_stem: false
    }));
  }

  return [];
}
