import { GRADE_9_CURRICULUM } from './curriculumRegistryGrade9';
import { GRADE_10_CURRICULUM } from './curriculumRegistryGrade10';
import { GRADE_12_CURRICULUM } from './curriculumRegistryGrade12';
import { EXTENDED_CURRICULUM_DATA } from './curriculumRegistryExtended';

export interface OfficialTopic {
  num: string;
  title: string;
  start: number;
  desc?: string;
}

export interface OfficialUnit {
  unit_num: number;
  title: string;
  start_page: number;
  end_page: number;
  topics: OfficialTopic[];
}

const GRADE_11_CURRICULUM: Record<string, OfficialUnit[]> = {
  'book-11-bio': [
    {
      unit_num: 1,
      title: 'Biology and Technology',
      start_page: 1,
      end_page: 38,
      topics: [
        { num: '1.1', title: 'Nature of Science and Biology', start: 2, desc: 'Empirical investigation, scientific inquiry, hypothesis testing, and the frontiers of modern biological science.' },
        { num: '1.2', title: 'Methods and Tools of Biological Research', start: 10, desc: 'Microscopy (light and electron), centrifugation, staining, chromatography, and aseptic laboratory techniques.' },
        { num: '1.3', title: 'Interdependence of Biology and Technology', start: 20, desc: 'Biotechnology applications, bioengineering, medical innovations, and bio-industrial manufacturing in Ethiopia.' },
        { num: '1.4', title: 'Ethics and Impacts of Biological Advances', start: 30, desc: 'Bioethics in genetic modification, biosafety, environmental impacts, and ethical research standards.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Animals',
      start_page: 39,
      end_page: 108,
      topics: [
        { num: '2.1', title: 'Characteristics and Diversity of Animals', start: 40, desc: 'Multicellularity, heterotrophy, symmetry (radial, bilateral), germ layers, and coelom organization.' },
        { num: '2.2', title: 'Invertebrates: Structure and Classification', start: 50, desc: 'Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Mollusca, Arthropoda, and Echinodermata.' },
        { num: '2.3', title: 'Vertebrates: Structure and Classification', start: 68, desc: 'Pisces, Amphibia, Reptilia, Aves, and Mammalia with evolutionary adaptations for terrestrial survival.' },
        { num: '2.4', title: 'Reproduction and Development in Animals', start: 82, desc: 'Asexual vs. sexual reproduction, gametogenesis, fertilization, embryogenesis, and metamorphosis.' },
        { num: '2.5', title: 'Economic and Ecological Importance of Animals', start: 94, desc: 'Pollination, food security, apiculture, sericulture, vectors of disease, and ecosystem regulation in Ethiopia.' },
        { num: '2.6', title: 'Animal Behavior', start: 100, desc: 'Innate behavior (taxes, reflexes, instincts) and learned behavior (habituation, conditioning, imprinting, insight).' },
        { num: '2.7', title: 'Homeostasis in Animals', start: 105, desc: 'Thermoregulation, osmoregulation, blood glucose maintenance, and negative feedback loops.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Enzymes',
      start_page: 109,
      end_page: 154,
      topics: [
        { num: '3.1', title: 'Nature and Chemical Structure of Enzymes', start: 110, desc: 'Globular protein architecture, active sites, cofactors, coenzymes, and prosthetic groups.' },
        { num: '3.2', title: 'Enzyme Nomenclature and Classification', start: 118, desc: 'Oxidoreductases, transferases, hydrolases, lyases, isomerases, and ligases according to IUBMB.' },
        { num: '3.3', title: 'Mechanisms of Enzyme Action', start: 124, desc: 'Activation energy lowering, Lock-and-Key hypothesis, and Induced Fit model of transition-state stabilization.' },
        { num: '3.4', title: 'Factors Affecting Enzyme Activity', start: 132, desc: 'Substrate concentration, enzyme concentration, temperature, pH, and Michaelis-Menten kinetics.' },
        { num: '3.5', title: 'Enzyme Inhibition and Regulation', start: 142, desc: 'Competitive, non-competitive, allosteric inhibition, and feedback inhibition in metabolic pathways.' },
        { num: '3.6', title: 'Industrial and Medical Applications of Enzymes', start: 148, desc: 'Diagnostic assays, brewing, detergent production, textile processing, and therapeutic enzymes.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Genetics',
      start_page: 155,
      end_page: 228,
      topics: [
        { num: '4.1', title: 'Molecular Basis of Heredity: DNA & RNA', start: 156, desc: 'Nucleotide composition, double helix structure, Chargaff rules, and RNA variants (mRNA, tRNA, rRNA).' },
        { num: '4.2', title: 'DNA Replication, Transcription and Translation', start: 168, desc: 'Semi-conservative replication, RNA polymerase, genetic code codons, ribosome mechanics, and protein synthesis.' },
        { num: '4.3', title: 'Mendelian Genetics and Laws of Inheritance', start: 182, desc: 'Mendel principles of segregation and independent assortment, monohybrid and dihybrid cross ratios.' },
        { num: '4.4', title: 'Non-Mendelian Inheritance Patterns', start: 196, desc: 'Incomplete dominance, codominance, multiple alleles (ABO blood groups), and polygenic inheritance.' },
        { num: '4.5', title: 'Sex Determination and Sex-Linked Inheritance', start: 206, desc: 'Chromosomal sex determination (XY system), hemophilia, color blindness, and pedigree chart analysis.' },
        { num: '4.6', title: 'Mutations and Genetic Disorders', start: 216, desc: 'Gene mutations (point, frameshift), chromosomal aberrations (aneuploidy, polyploidy), and mutagenic agents.' },
        { num: '4.7', title: 'Recombinant DNA Technology & Gene Editing', start: 222, desc: 'Restriction enzymes, plasmids, PCR, DNA fingerprinting, transgenic crops, and CRISPR-Cas9 overview.' }
      ]
    },
    {
      unit_num: 5,
      title: 'The Human Body Systems',
      start_page: 229,
      end_page: 302,
      topics: [
        { num: '5.1', title: 'Nervous Coordination and Sense Organs', start: 230, desc: 'Neuron anatomy, action potential conduction, synaptic transmission, CNS, PNS, and eye/ear sensory reception.' },
        { num: '5.2', title: 'The Endocrine System and Hormonal Control', start: 252, desc: 'Major endocrine glands (pituitary, thyroid, adrenal, pancreas), hormone feedback loops, and disorders.' },
        { num: '5.3', title: 'Musculoskeletal System and Biomechanics', start: 268, desc: 'Skeletal framework, bone remodeling, joint classifications, and sliding filament theory of muscle contraction.' },
        { num: '5.4', title: 'Human Reproductive Anatomy and Endocrinology', start: 282, desc: 'Male and female reproductive organs, menstrual cycle hormones, gametogenesis, and contraception methods.' },
        { num: '5.5', title: 'Human Development and Teratogens', start: 294, desc: 'Embryonic cleavage, organogenesis, placental physiology, lactation, and teratogenic risks during pregnancy.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Population and Natural Resources',
      start_page: 303,
      end_page: 350,
      topics: [
        { num: '6.1', title: 'Population Dynamics and Growth Models', start: 304, desc: 'Natality, mortality, immigration, emigration, exponential growth vs. logistic sigmoid curves, and carrying capacity.' },
        { num: '6.2', title: 'Human Population Trends and Demography', start: 314, desc: 'Age-sex population pyramids, demographic transition model, and population pressure on Ethiopian resources.' },
        { num: '6.3', title: 'Renewable and Non-Renewable Resources in Ethiopia', start: 324, desc: 'Hydropower, solar, geothermal, mineral deposits, forests, soil, and wildlife biodiversity conservation.' },
        { num: '6.4', title: 'Environmental Degradation and Climate Resilience', start: 334, desc: 'Deforestation, soil erosion, desertification, Green Legacy Initiative, water management, and sustainable development.' }
      ]
    }
  ],

  'book-11-chem': [
    {
      unit_num: 1,
      title: 'Atomic Structure and Periodic Properties of the Elements',
      start_page: 1,
      end_page: 66,
      topics: [
        { num: '1.1', title: 'Historical Development and Modern Atomic Theory', start: 2, desc: 'Dalton postulates, discoveries of electron (Thomson, Millikan), nucleus (Rutherford), and neutron (Chadwick).' },
        { num: '1.2', title: 'Subatomic Particles, Atomic Mass, and Isotopes', start: 12, desc: 'Mass spectrometry, atomic mass unit definitions, isotopic abundance calculations, and nuclear notations.' },
        { num: '1.3', title: 'Electromagnetic Radiation, Quantum Theory & Bohr Model', start: 15, desc: 'Planck constant, photoelectric effect, hydrogen emission spectrum lines (Lyman, Balmer), and Bohr orbits.' },
        { num: '1.4', title: 'Quantum Mechanical Model of the Atom', start: 34, desc: 'De Broglie matter waves, Heisenberg Uncertainty Principle, quantum numbers (n, l, ml, ms), and orbital shapes.' },
        { num: '1.5', title: 'Electronic Configurations and Aufbau Principle', start: 41, desc: 'Pauli Exclusion Principle, Hund rule of maximum multiplicity, orbital diagrams, and anomalies (Cr, Cu).' },
        { num: '1.6', title: 'Modern Periodic Table and Periodic Trends', start: 47, desc: 'Atomic radii, ionic radii, ionization energy trends, electron affinity, and electronegativity scales.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Chemical Bonding and Molecular Geometry',
      start_page: 67,
      end_page: 144,
      topics: [
        { num: '2.1', title: 'Ionic Bonding and Lattice Energy', start: 69, desc: 'Lewis dot structures, octet rule, Born-Haber thermochemical cycle, and properties of crystalline ionic solids.' },
        { num: '2.2', title: 'Covalent Bonding and Lewis Structures', start: 83, desc: 'Single, double, triple bonds, coordinate covalent bonds, resonance hybrids, and formal charge calculations.' },
        { num: '2.3', title: 'VSEPR Theory and Molecular Geometry', start: 100, desc: 'Electron pair repulsion geometries: linear, trigonal planar, tetrahedral, trigonal bipyramidal, and octahedral.' },
        { num: '2.4', title: 'Intermolecular Forces in Covalent Compounds', start: 107, desc: 'Dipole-dipole interactions, hydrogen bonding, and London dispersion forces influencing melting and boiling points.' },
        { num: '2.5', title: 'Metallic Bonding and Crystal Types', start: 111, desc: 'Electron-sea model, metallic luster, malleability, electrical conductivity, and ionic/molecular/covalent network crystals.' },
        { num: '2.6', title: 'Valence Bond (VB) Theory and Hybridization', start: 114, desc: 'Sigma and pi orbital overlap, sp, sp2, sp3, sp3d, and sp3d2 hybridizations with bond angle derivations.' },
        { num: '2.7', title: 'Molecular Orbital (MO) Theory', start: 131, desc: 'Bonding and antibonding molecular orbitals, bond order calculations, and magnetic behavior of homonuclear diatomics.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Physical States of Matter',
      start_page: 145,
      end_page: 192,
      topics: [
        { num: '3.1', title: 'Kinetic Molecular Theory of Matter', start: 147, desc: 'Postulates of KMT, microscopic particle dynamics in solids, liquids, and gases, and kinetic temperature.' },
        { num: '3.2', title: 'The Gaseous State and Ideal Gas Laws', start: 150, desc: 'Boyle law, Charles law, Gay-Lussac law, Avogadro law, and the combined Ideal Gas Equation (PV = nRT).' },
        { num: '3.3', title: 'Gas Stoichiometry and Dalton Law of Partial Pressures', start: 160, desc: 'Mole fractions, partial pressures, collection of gases over water, and Graham law of effusion and diffusion.' },
        { num: '3.4', title: 'Real Gases and Deviations from Ideal Behavior', start: 168, desc: 'Intermolecular attractions and finite molecular volume, Van der Waals equation of state.' },
        { num: '3.5', title: 'The Liquid State: Viscosity, Surface Tension & Vapor Pressure', start: 173, desc: 'Dynamic equilibrium, boiling point variations with atmospheric pressure, Clausius-Clapeyron relation.' },
        { num: '3.6', title: 'The Solid State and Phase Diagrams', start: 180, desc: 'Unit cells, packing efficiency, phase changes, heating curves, triple point, and critical point in phase diagrams.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Chemical Kinetics',
      start_page: 193,
      end_page: 221,
      topics: [
        { num: '4.1', title: 'Rate of Chemical Reaction and Rate Expressions', start: 193, desc: 'Average vs. instantaneous rates, differential rate laws, reaction orders (zero, first, second), and rate constant k.' },
        { num: '4.2', title: 'Factors Affecting Reaction Rates', start: 207, desc: 'Effect of nature of reactants, concentration, surface area, temperature, and catalysts.' },
        { num: '4.3', title: 'Collision Theory and Transition State Theory', start: 212, desc: 'Effective collisions, activation energy (Ea), steric factors, and reaction coordinate energy profiles.' },
        { num: '4.4', title: 'The Arrhenius Equation and Reaction Mechanisms', start: 216, desc: 'Arrhenius plot (ln k vs 1/T), elementary steps, molecularity, and rate-determining step determination.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Chemical Equilibrium',
      start_page: 222,
      end_page: 263,
      topics: [
        { num: '5.1', title: 'Characteristics of Dynamic Chemical Equilibrium', start: 222, desc: 'Reversibility of reactions, forward and reverse rate equality, and constancy of macroscopic properties.' },
        { num: '5.2', title: 'Equilibrium Constant Expressions (Kc and Kp)', start: 228, desc: 'Law of mass action, relationship between Kc and Kp (Kp = Kc(RT)^dn), and heterogeneous equilibria expressions.' },
        { num: '5.3', title: 'Applications of Equilibrium Constants', start: 239, desc: 'Reaction quotient (Qc) comparisons, predicting reaction direction, and equilibrium concentration ICE tables.' },
        { num: '5.4', title: 'Le Chatelier Principle and Equilibrium Shifts', start: 245, desc: 'Effects of changing concentration, pressure, volume, temperature, and inert gas additions on equilibrium.' },
        { num: '5.5', title: 'Industrial Equilibrium Processes in Ethiopia', start: 253, desc: 'Haber-Bosch ammonia synthesis and Contact process for sulfuric acid: thermodynamic vs. kinetic optimization.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Some Important Oxygen-Containing Organic Compounds',
      start_page: 264,
      end_page: 332,
      topics: [
        { num: '6.1', title: 'Alcohols and Ethers: Classification and Properties', start: 265, desc: 'Primary, secondary, tertiary alcohols, IUPAC nomenclature, hydrogen bonding, dehydration, and ether synthesis.' },
        { num: '6.2', title: 'Aldehydes and Ketones: Carbonyl Group Chemistry', start: 287, desc: 'Structure, nomenclature, oxidation reactions, Tollens and Fehling tests, and nucleophilic addition reactions.' },
        { num: '6.3', title: 'Carboxylic Acids: Synthesis and Acidity', start: 292, desc: 'Carboxyl group resonance stabilization, inductive effects on pKa, esterification, and fatty acid classifications.' },
        { num: '6.4', title: 'Esters and Saponification', start: 313, desc: 'Fischer esterification mechanism, fragrance compounds, alkaline hydrolysis (saponification), and soap making.' },
        { num: '6.5', title: 'Fats and Oils: Structure, Hardening & Rancidity', start: 319, desc: 'Triglyceride structures, saturated vs unsaturated fatty acids, catalytic hydrogenation of oils, and lipid oxidation.' }
      ]
    }
  ],

  'book-11-phys': [
    {
      unit_num: 1,
      title: 'Physics and Human Society',
      start_page: 1,
      end_page: 16,
      topics: [
        { num: '1.1', title: 'Importance of Physics to Society', start: 1, desc: 'Role of physics in transportation, telecommunication, medicine, energy production, and industrial automation.' },
        { num: '1.2', title: 'Physics Communities and Their Roles', start: 8, desc: 'National and international professional physical societies, scientific publishing, peer review, and ethics in research.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Vectors',
      start_page: 17,
      end_page: 46,
      topics: [
        { num: '2.1', title: 'Vector Representation and Coordinate Systems', start: 17, desc: 'Cartesian vs. polar coordinates, unit vector notation (i, j, k), magnitude, and directional cosines.' },
        { num: '2.2', title: 'Vector Addition and Subtraction in 2D & 3D', start: 23, desc: 'Triangle law, parallelogram law, polygon method, and analytical algebraic component resolution.' },
        { num: '2.3', title: 'Scalar (Dot) Product and Applications', start: 32, desc: 'A · B = |A||B|cos(theta), work done calculations, orthogonality tests, and vector projections.' },
        { num: '2.4', title: 'Vector (Cross) Product and Applications', start: 38, desc: 'A x B = |A||B|sin(theta) n, right-hand rule, torque formulation, and area of parallelograms and triangles.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Motion in One and Two Dimensions',
      start_page: 47,
      end_page: 94,
      topics: [
        { num: '3.1', title: 'Kinematics in One Dimension and Calculus Approach', start: 48, desc: 'Instantaneous velocity and acceleration as derivatives, kinematic integration, and free fall under gravity.' },
        { num: '3.2', title: 'Graphical Analysis of Non-Uniform Motion', start: 58, desc: 'Slopes and areas under s-t, v-t, and a-t curves; jerk and physical interpretations of kinematic graphs.' },
        { num: '3.3', title: 'Projectile Motion in Two Dimensions', start: 68, desc: 'Independent horizontal and vertical motions, trajectory equation, time of flight, maximum height, and horizontal range.' },
        { num: '3.4', title: 'Uniform Circular Motion and Centripetal Acceleration', start: 80, desc: 'Angular displacement, angular velocity, tangential velocity, centripetal acceleration (ac = v^2/r), and period/frequency.' },
        { num: '3.5', title: 'Relative Velocity in Two Dimensions', start: 88, desc: 'Vector addition of relative frames (v_AB = v_A - v_B), river-boat crossing problems, and wind-aircraft navigation.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Dynamics',
      start_page: 95,
      end_page: 174,
      topics: [
        { num: '4.1', title: 'Newton Laws of Motion and Free-Body Diagrams', start: 96, desc: 'Inertia, F_net = ma in component form, action-reaction pairs, normal force, tension, and inclined planes.' },
        { num: '4.2', title: 'Frictional Forces and Applications', start: 112, desc: 'Static vs. kinetic friction coefficients, angle of repose, rolling resistance, and banking of road curves.' },
        { num: '4.3', title: 'Work, Kinetic Energy and Work-Energy Theorem', start: 126, desc: 'Work done by constant and variable forces, kinetic energy (0.5mv^2), and W_net = dKE.' },
        { num: '4.4', title: 'Conservative Forces and Potential Energy', start: 138, desc: 'Gravitational and elastic potential energy, mechanical energy conservation, and non-conservative dissipation.' },
        { num: '4.5', title: 'Linear Momentum, Impulse and Collisions', start: 150, desc: 'Impulse-momentum theorem, conservation of linear momentum, elastic vs. inelastic collisions in 1D and 2D.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Heat Conduction and Calorimetry',
      start_page: 175,
      end_page: 216,
      topics: [
        { num: '5.1', title: 'Thermal Equilibrium and Temperature Measurement', start: 176, desc: 'Zeroth law of thermodynamics, thermal expansion of solids and liquids, bimetallic strips, and anomalous expansion of water.' },
        { num: '5.2', title: 'Heat Capacity and Specific Heat Capacity', start: 184, desc: 'Quantity of heat (Q = mc dT), method of mixtures calorimetry, water equivalent, and conservation of thermal energy.' },
        { num: '5.3', title: 'Phase Changes and Latent Heat', start: 194, desc: 'Latent heat of fusion and vaporization (Q = mL), cooling curves, supercooling, and evaporation mechanisms.' },
        { num: '5.4', title: 'Thermal Conduction, Convection and Radiation', start: 204, desc: 'Fourier law of heat conduction (dQ/dt = -kA dT/dx), Stefan-Boltzmann law of blackbody radiation, and insulation.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Electrostatics and Electric Circuit',
      start_page: 217,
      end_page: 286,
      topics: [
        { num: '6.1', title: 'Coulomb Law and Electric Field Intensity', start: 218, desc: 'Quantization of charge, Coulomb inverse square law, superposition principle, electric field lines, and flux.' },
        { num: '6.2', title: 'Electric Potential and Potential Energy', start: 232, desc: 'Electric potential difference (V = W/q), equipotential surfaces, uniform field relations (E = -dV/dr), and work in fields.' },
        { num: '6.3', title: 'Capacitance and Dielectrics', start: 244, desc: 'Parallel-plate capacitors (C = eA/d), dielectric constant, energy stored in capacitors, and series/parallel combinations.' },
        { num: '6.4', title: 'Direct Current (DC) Circuits and Kirchhoff Rules', start: 258, desc: 'Electromotive force (EMF), internal resistance, Kirchhoff junction and loop rules, and bridge network analysis.' },
        { num: '6.5', title: 'Electrical Power, Energy and Domestic Safety', start: 274, desc: 'Joule heating (P = I^2R = VI), fuse ratings, earthing/grounding, three-pin plugs, and electric shock prevention.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Nuclear Physics',
      start_page: 287,
      end_page: 340,
      topics: [
        { num: '7.1', title: 'Nuclear Composition and Nuclear Forces', start: 288, desc: 'Protons, neutrons, isotopes, isobars, strong nuclear force properties, nuclear density, and nuclear radius.' },
        { num: '7.2', title: 'Mass Defect and Nuclear Binding Energy', start: 296, desc: 'Einstein mass-energy equivalence (E = mc^2), mass defect dm, binding energy per nucleon curve, and stability.' },
        { num: '7.3', title: 'Radioactive Decay and Half-Life Calculations', start: 306, desc: 'Alpha, beta, and gamma radiation, radioactive decay law (N = N0 e^-lt), half-life (t1/2), and activity (Becquerel).' },
        { num: '7.4', title: 'Nuclear Reactions: Fission and Fusion', start: 320, desc: 'Induced nuclear fission, chain reactions, critical mass, nuclear reactors, and thermonuclear fusion in stars.' },
        { num: '7.5', title: 'Radiation Hazards, Protection and Applications', start: 330, desc: 'Dosimetry (Sieverts), biological radiation damage, radiocarbon dating, medical imaging/radiotherapy, and tracer techniques.' }
      ]
    }
  ],

  'book-11-math': [
    {
      unit_num: 1,
      title: 'Relations and Functions',
      start_page: 1,
      end_page: 82,
      topics: [
        { num: '1.1', title: 'Relations, Domain and Range', start: 3, desc: 'Ordered pairs, Cartesian products, coordinate graphs, domain and range algebraic determination.' },
        { num: '1.2', title: 'Inverse Relations and Graphical Reflection', start: 12, desc: 'Reflection across line y = x, swapping coordinates, and domain/range interchange.' },
        { num: '1.3', title: 'Types of Functions: Injective, Surjective, Bijective', start: 22, desc: 'Horizontal line test, one-to-one (injective), onto (surjective), bijective mappings, and signum/step functions.' },
        { num: '1.4', title: 'Composition of Functions', start: 64, desc: 'Composite function (f o g)(x) = f(g(x)), domain restrictions of composite functions, and non-commutativity.' },
        { num: '1.5', title: 'Inverse Functions and Their Graphs', start: 68, desc: 'Condition for invertibility (bijectivity), finding algebraic formula for f^-1(x), and graphical symmetry.' },
        { num: '1.6', title: 'Applications of Relations and Functions', start: 76, desc: 'Mathematical modeling of economic supply/demand, population growth curves, and physical trajectories.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Rational Expressions and Rational Functions',
      start_page: 83,
      end_page: 130,
      topics: [
        { num: '2.1', title: 'Rational Expressions: Simplification and Operations', start: 84, desc: 'Simplification, domain exclusions, addition, subtraction, multiplication, and division of polynomial fractions.' },
        { num: '2.2', title: 'Rational Equations and Rational Inequalities', start: 102, desc: 'Clearing denominators, extraneous solutions, sign tables (critical value intervals) for solving inequalities.' },
        { num: '2.3', title: 'Rational Functions, Asymptotes and Graphs', start: 109, desc: 'Vertical asymptotes, horizontal asymptotes, oblique (slant) asymptotes, holes (removable discontinuities), and intercepts.' },
        { num: '2.4', title: 'Applications of Rational Functions', start: 124, desc: 'Rate-of-work problems, mixture concentration models, average cost functions, and distance-rate-time systems.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Matrices',
      start_page: 131,
      end_page: 206,
      topics: [
        { num: '3.1', title: 'Concepts of a Matrix and Matrix Notations', start: 133, desc: 'Dimensions (rows x columns), entries, row vectors, column vectors, square matrices, and equality of matrices.' },
        { num: '3.2', title: 'Matrix Operations: Addition, Scalar & Multiplication', start: 137, desc: 'Commutative/associative properties of addition, scalar distribution, row-column dot product multiplication criteria.' },
        { num: '3.3', title: 'Special Types of Matrices and Transpose', start: 157, desc: 'Identity matrix, zero matrix, diagonal matrix, symmetric matrix, skew-symmetric matrix, and transpose rules.' },
        { num: '3.4', title: 'Elementary Row Operations and Gaussian Elimination', start: 163, desc: 'Row swapping, scalar multiplication of rows, row replacement, and reducing to row-echelon form.' },
        { num: '3.5', title: 'Systems of Linear Equations with Two and Three Variables', start: 174, desc: 'Augmented matrices, consistent vs. inconsistent systems, unique solutions, infinitely many solutions, and geometric interpretation.' },
        { num: '3.6', title: 'Inverse of a Square Matrix and Matrix Equations', start: 192, desc: 'Invertibility condition, Gauss-Jordan elimination [A | I] -> [I | A^-1], and solving AX = B via X = A^-1 B.' },
        { num: '3.7', title: 'Applications of Matrices in Networks and Business', start: 199, desc: 'Input-output Leontief economic models, network communication graphs, inventory tracking, and cryptography.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Determinants and Their Properties',
      start_page: 207,
      end_page: 250,
      topics: [
        { num: '4.1', title: 'Determinants of 2x2 Matrices', start: 209, desc: 'Formula det(A) = ad - bc, geometric interpretation as signed area of parallelogram formed by row vectors.' },
        { num: '4.2', title: 'Minors, Cofactors and Expansion of 3x3 Determinants', start: 211, desc: 'Minor Mij, cofactor Cij = (-1)^(i+j) Mij, and Laplace cofactor expansion along any chosen row or column.' },
        { num: '4.3', title: 'Properties of Determinants', start: 220, desc: 'det(AB) = det(A)det(B), effect of row operations on determinants, det(A^T) = det(A), and zero determinant criteria.' },
        { num: '4.4', title: 'Adjoint Matrix and Inverse Calculation', start: 230, desc: 'Cofactor matrix, classical adjoint adj(A) = C^T, and inversion formula A^-1 = (1/det(A)) adj(A).' },
        { num: '4.5', title: 'Cramer Rule for Linear Systems', start: 235, desc: 'Determinant quotient formula xi = det(Ai)/det(A) for non-singular square systems and solvability checks.' },
        { num: '4.6', title: 'Applications of Determinants in Geometry', start: 242, desc: 'Area of triangles via coordinates, collinearity test of three points, and equation of lines through two points.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Vectors',
      start_page: 251,
      end_page: 312,
      topics: [
        { num: '5.1', title: 'Revision on Vectors and Scalars', start: 252, desc: 'Directed line segments, magnitude ||v||, direction angle, position vectors, and zero vector.' },
        { num: '5.2', title: 'Algebraic Representation and Operations in R2 and R3', start: 254, desc: 'Component form (x, y, z), unit base vectors i, j, k, scalar multiplication, and vector linear combinations.' },
        { num: '5.3', title: 'Dot (Scalar) Product and Projections', start: 274, desc: 'u · v = ||u||||v||cos(theta), angle between vectors, orthogonality conditions, scalar projection and vector projection.' },
        { num: '5.4', title: 'Cross (Vector) Product in R3', start: 292, desc: 'Determinant formulation for cross product, right-hand rule, perpendicularity to both operand vectors, and parallel tests.' },
        { num: '5.5', title: 'Applications of Dot and Cross Products', start: 296, desc: 'Work done, torque, area of parallelogram, area of triangle, and volume of parallelepiped via scalar triple product.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Transformations of the Plane',
      start_page: 313,
      end_page: 354,
      topics: [
        { num: '6.1', title: 'Introduction to Isometries and Rigid Motions', start: 314, desc: 'Preservation of distance, angle measures, and collinearity in plane geometric transformations.' },
        { num: '6.2', title: 'Translations: Vector Formulation and Coordinate Rules', start: 315, desc: 'T_v(x, y) = (x + a, y + b), composition of translations, and matrix representation.' },
        { num: '6.3', title: 'Reflections Across Lines', start: 322, desc: 'Reflection across x-axis, y-axis, lines y = x, y = -x, and general line ax + by + c = 0.' },
        { num: '6.4', title: 'Rotations About the Origin and General Centers', start: 337, desc: 'Rotation matrices for angles 90, 180, 270, and general theta; center of rotation and clockwise vs counterclockwise.' },
        { num: '6.5', title: 'Dilations (Homothety) and Composite Transformations', start: 349, desc: 'Scale factors, similarity vs. congruence, matrix multiplication for composite mappings, and computer graphics uses.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Statistics',
      start_page: 355,
      end_page: 412,
      topics: [
        { num: '7.1', title: 'Types of Data and Grouped Frequency Distributions', start: 357, desc: 'Qualitative vs. quantitative data, continuous vs. discrete variables, class intervals, boundaries, and midpoints.' },
        { num: '7.2', title: 'Graphical Representation of Grouped Data', start: 368, desc: 'Frequency histograms, frequency polygons, relative frequency curves, and cumulative frequency ogives.' },
        { num: '7.3', title: 'Measures of Central Tendency for Grouped Data', start: 371, desc: 'Mean via assumed mean method, median formula L + ((N/2 - CF)/f)w, and mode formula L + (d1/(d1 + d2))w.' },
        { num: '7.4', title: 'Measures of Dispersion: Variance and Standard Deviation', start: 388, desc: 'Range, mean absolute deviation, sample/population variance, standard deviation, and coefficient of variation.' },
        { num: '7.5', title: 'Real-Life Statistical Applications and Misrepresentations', start: 405, desc: 'Interpreting national economic data, health survey indices, skewness, and detecting misleading graphical axes.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Probability',
      start_page: 413,
      end_page: 480,
      topics: [
        { num: '8.1', title: 'Fundamental Principle of Counting', start: 414, desc: 'Multiplication principle, addition principle, tree diagrams, and systematic listing of sample spaces.' },
        { num: '8.2', title: 'Permutations and Combinations', start: 423, desc: 'Factorial notation, linear permutations nPr = n!/(n-r)!, circular permutations, identical item permutations, and combinations nCr.' },
        { num: '8.3', title: 'The Binomial Theorem', start: 437, desc: 'Pascal triangle, binomial expansion formula (a + b)^n = sum(nCr a^(n-r) b^r), and finding specific general terms.' },
        { num: '8.4', title: 'Random Experiments, Sample Spaces and Events', start: 440, desc: 'Sample spaces, mutually exclusive events, independent events, complementary events, and union/intersection Venn diagrams.' },
        { num: '8.5', title: 'Probability Axioms and Addition Rules', start: 453, desc: 'P(A U B) = P(A) + P(B) - P(A n B), complementary probability P(A\') = 1 - P(A), and odds for/against.' },
        { num: '8.6', title: 'Conditional Probability and Multiplication Rule', start: 462, desc: 'P(A|B) = P(A n B)/P(B), test for statistical independence P(A n B) = P(A)P(B), and two-stage tree diagrams.' },
        { num: '8.7', title: 'Real-Life Applications of Probability', start: 473, desc: 'Quality control defect sampling, genetic cross probabilities, medical diagnostic predictive values, and insurance risk.' }
      ]
    }
  ],

  'book-11-eng': [
    {
      unit_num: 1,
      title: 'Environmental Hazards',
      start_page: 1,
      end_page: 32,
      topics: [
        { num: '1.1', title: 'Listening: Natural and Anthropogenic Environmental Hazards', start: 2, desc: 'Identifying main ideas, acoustic discrimination, note-taking strategies, and hazard classifications.' },
        { num: '1.2', title: 'Speaking: Discussing Disaster Preparedness in Ethiopian Regions', start: 4, desc: 'Expressing viewpoints, modal certainty, group deliberation, and formal presentation conventions.' },
        { num: '1.3', title: 'Reading: Drought, Deforestation and Ecological Balance', start: 9, desc: 'Skimming, scanning, contextual lexical inference, cause-and-effect rhetorical patterns, and critical analysis.' },
        { num: '1.4', title: 'Vocabulary: Environmental Science & Climatology Terminology', start: 13, desc: 'Affixes, environmental collocation pairs, register distinctions, and idiomatic ecological phrases.' },
        { num: '1.5', title: 'Grammar: Present Perfect vs. Past Simple in Environmental Reports', start: 18, desc: 'Aspectual contrasts, time adverbials (since, for, already, recently), and active-passive environmental constructions.' },
        { num: '1.6', title: 'Writing: Cause-and-Effect Analytical Paragraphs', start: 27, desc: 'Causal linkers (consequently, due to, as a result of), topic sentences, evidentiary elaboration, and concluding remarks.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Civilization',
      start_page: 33,
      end_page: 63,
      topics: [
        { num: '2.1', title: 'Listening: Ancient Civilizations and Ethiopian Archaeological Heritage', start: 34, desc: 'Axumite kingdom, Lalibela rock-hewn architecture, historical chronology, and audio note extraction.' },
        { num: '2.2', title: 'Speaking: Debating Attributes of Ancient and Modern Societies', start: 38, desc: 'Persuasive rhetoric, formal refutations, turn-taking markers, and consensus negotiation.' },
        { num: '2.3', title: 'Reading: Evolutionary Trajectory of Agrarian and Urban Settlements', start: 43, desc: 'Textual cohesion, pronoun referencing, identifying author perspective, and synthesis across historical passages.' },
        { num: '2.4', title: 'Vocabulary: Historiography, Architecture & Civil Administration', start: 46, desc: 'Domain-specific vocabulary, archaic vs modern linguistic shifts, and structural word formation.' },
        { num: '2.5', title: 'Grammar: Past Perfect and Past Continuous Narrative Tenses', start: 50, desc: 'Time sequencers (prior to, by the time, while), narrative progression, and reported speech transformations.' },
        { num: '2.6', title: 'Writing: Chronological Historical Expositions', start: 60, desc: 'Timeline connectors, transitional coherence, paragraph organization, and thesis statement formulation.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Causes of Road Traffic Accidents',
      start_page: 64,
      end_page: 90,
      topics: [
        { num: '3.1', title: 'Listening: Traffic Safety and Road Statistics in Ethiopia', start: 64, desc: 'Statistical data interpretation from speech, identifying warning signs, and synthesizing auditory facts.' },
        { num: '3.2', title: 'Speaking: Proposing Community Interventions for Road Safety', start: 66, desc: 'Giving recommendations (should, ought to, must), asking clarifying questions, and cooperative problem-solving.' },
        { num: '3.3', title: 'Reading: Behavioral, Mechanical and Infrastructural Risk Factors', start: 71, desc: 'Categorization of risk variables, identifying logical fallacies, and comparative reading analysis.' },
        { num: '3.4', title: 'Vocabulary: Vehicular Dynamics, Highway Codes & Emergency Response', start: 74, desc: 'Traffic regulation terminology, phrasal verbs related to travel and transit, and emergency jargon.' },
        { num: '3.5', title: 'Grammar: Modal Verbs of Obligation, Prohibition & Advice', start: 79, desc: 'Must, mustn\'t, have to, need to, should, had better; degrees of prescriptive force and formal legal discourse.' },
        { num: '3.6', title: 'Writing: Problem-Solution Proposals for Municipal Transit', start: 82, desc: 'Executive proposal format, problem statement, feasible interventions, budget/resource justification, and call to action.' }
      ]
    },
    {
      unit_num: 4,
      title: 'People and Natural Resources',
      start_page: 91,
      end_page: 115,
      topics: [
        { num: '4.1', title: 'Listening: Sustainable Resource Management Practices', start: 92, desc: 'Comprehending lectures on resource depletion, note-taking in outline format, and speaker tone detection.' },
        { num: '4.2', title: 'Speaking: Role-Playing Stakeholder Summits on Land and Water', start: 93, desc: 'Diplomatic discourse registers, conditional concessions (provided that, as long as), and active listening.' },
        { num: '4.3', title: 'Reading: Indigenous Conservation Systems and Forest Stewardship', start: 99, desc: 'Sacred groves in Ethiopia, community pasture management, and analytical reading of socio-ecological texts.' },
        { num: '4.4', title: 'Vocabulary: Agronomy, Biodiversity & Ecological Sustainability', start: 102, desc: 'Compound nouns, antonyms and synonyms in resource science, and formal expository terms.' },
        { num: '4.5', title: 'Grammar: Conditionals (Zero, First, Second, and Third Conditionals)', start: 108, desc: 'Real vs hypothetical conditions, unreal past regrets (If + had + V3, would have + V3), and inverted conditionals.' },
        { num: '4.6', title: 'Writing: Evaluative Essays on Resource Exploitation vs Conservation', start: 112, desc: 'Balanced argument essay structure, integrating counterarguments, conceding opposing points, and synthesizing conclusions.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Irrigation',
      start_page: 116,
      end_page: 140,
      topics: [
        { num: '5.1', title: 'Listening: Engineering Agricultural Water Systems', start: 116, desc: 'Following sequential instructions, identifying technical hydraulic terminology, and diagram labeling.' },
        { num: '5.2', title: 'Speaking: Explaining Drip vs Flood Irrigation Methodologies', start: 118, desc: 'Comparative discourse markers (whereas, in contrast, similarly), clarifying technical concepts, and audience pacing.' },
        { num: '5.3', title: 'Reading: River Basin Development in Ethiopia (Awash, Omo, Nile)', start: 122, desc: 'Reading technical schematics, distinguishing between direct observations and inferences in hydro-development.' },
        { num: '5.4', title: 'Vocabulary: Hydrology, Agronomy & Soil Salinization', start: 126, desc: 'Technical agrarian terminology, water distribution vocabularies, and prefix/suffix analysis.' },
        { num: '5.5', title: 'Grammar: Passive Voice in Scientific and Technical Descriptions', start: 127, desc: 'Agent omission for objectivity, passive with modals (must be maintained), and process description flow.' },
        { num: '5.6', title: 'Writing: Technical Process Descriptions and Field Reports', start: 132, desc: 'Sequential connectors (initially, subsequently, simultaneously), objective passive register, and clear flow diagrams.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Global Warming',
      start_page: 141,
      end_page: 164,
      topics: [
        { num: '6.1', title: 'Listening: Climate Science and Greenhouse Gas Emissions', start: 142, desc: 'Atmospheric physics summaries, identifying speaker bias, and noting numerical statistical trends.' },
        { num: '6.2', title: 'Speaking: Delivering Persuasive Speeches on Carbon Reduction', start: 143, desc: 'Rhetorical questions, emotive vs objective registers, vocal projection, and audience engagement.' },
        { num: '6.3', title: 'Reading: Impacts of Global Warming on Sub-Saharan Ecosystems', start: 149, desc: 'Analyzing complex academic prose, synthesizing disparate paragraphs, and evaluating evidentiary strength.' },
        { num: '6.4', title: 'Vocabulary: Climatology, Renewable Energy & Carbon Sequestration', start: 152, desc: 'Carbon footprints, greenhouse gases, mitigation terminology, and academic collocations.' },
        { num: '6.5', title: 'Grammar: Adverbial Clauses of Contrast, Reason and Purpose', start: 153, desc: 'Although, even though, whereas, in spite of, so that, in order to; sentence combining and punctuation rules.' },
        { num: '6.6', title: 'Writing: Persuasive Argumentative Essays on Climate Action', start: 163, desc: 'Clear thesis statement, body paragraphs with topic sentences and evidence, refutation of counterarguments, and strong conclusion.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Patriotism',
      start_page: 165,
      end_page: 203,
      topics: [
        { num: '7.1', title: 'Listening: Civic Responsibility and National Unity in Ethiopia', start: 165, desc: 'Comprehending historical speeches, distinguishing patriotism from chauvinism, and thematic analysis.' },
        { num: '7.2', title: 'Speaking: Presenting on Heroes and Contributions of Ethiopian Citizens', start: 167, desc: 'Narrative presentation skills, expressive intonation, and moderating classroom panel discussions.' },
        { num: '7.3', title: 'Reading: Civic Virtues, Rule of Law, and Community Development', start: 172, desc: 'Textual interpretation of civic texts, ethical reasoning, and evaluating moral choices presented in stories.' },
        { num: '7.4', title: 'Vocabulary: Civic Institutions, Constitutional Rights & Patriotism', start: 176, desc: 'Constitutional terminology, civic duty phrases, abstract ethical nouns, and antonym pairs.' },
        { num: '7.5', title: 'Grammar: Relative Clauses (Defining and Non-Defining)', start: 179, desc: 'Who, whom, whose, which, that; essential vs non-essential information, comma conventions, and pronoun omission.' },
        { num: '7.6', title: 'Writing: Reflective Essays on Personal Contribution to Society', start: 200, desc: 'First-person reflective style, balancing personal anecdotes with broader civic analysis, and polished rhetoric.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Efficiency of Health Services',
      start_page: 204,
      end_page: 224,
      topics: [
        { num: '8.1', title: 'Listening: Healthcare Delivery and Primary Care Systems', start: 204, desc: 'Clinical audio dialogues, recognizing patient-physician interactions, and identifying diagnostic steps.' },
        { num: '8.2', title: 'Speaking: Formulating Inquiries and Interviewing Medical Personnel', start: 205, desc: 'Polite questioning techniques (Could you clarify...), indirect questions, and respectful professional registers.' },
        { num: '8.3', title: 'Reading: Health Extension Programs and Rural Clinics in Ethiopia', start: 207, desc: 'Understanding administrative public health literature, analyzing healthcare equity, and statistical infographics.' },
        { num: '8.4', title: 'Vocabulary: Medical Terminology, Epidemiology & Public Health', start: 209, desc: 'Symptom descriptions, therapeutic treatments, pharmacological terms, and healthcare policy vocabulary.' },
        { num: '8.5', title: 'Grammar: Reported Speech in Medical Diagnostics and Interviews', start: 210, desc: 'Backshifting tenses, changes in pronouns/time markers, reporting verbs (advised, warned, inquired, insisted).' },
        { num: '8.6', title: 'Writing: Formal Healthcare Appraisal and Evaluation Reports', start: 217, desc: 'Administrative report structure, executive summary, methodology, findings, and formal policy recommendations.' }
      ]
    },
    {
      unit_num: 9,
      title: 'Indigenous Conflict Resolution',
      start_page: 225,
      end_page: 252,
      topics: [
        { num: '9.1', title: 'Listening: Traditional Justice Mechanisms (Gadaa, Shimgellina)', start: 226, desc: 'Oral history traditions, identifying cultural mediation steps, and listening for consensus-building nuances.' },
        { num: '9.2', title: 'Speaking: Simulating Traditional Reconciliation Assemblies', start: 229, desc: 'Mediation discourse, consensus building, non-adversarial framing, and customary respectful addresses.' },
        { num: '9.3', title: 'Reading: Comparative Analysis of Customary and Formal Courts', start: 234, desc: 'Restorative vs retributive justice paradigms, identifying sociological arguments, and critical synthesis.' },
        { num: '9.4', title: 'Vocabulary: Customary Law, Restorative Justice & Mediation', start: 238, desc: 'Jurisprudential concepts, arbitration vocabularies, idiomatic peace-making metaphors, and legal registers.' },
        { num: '9.5', title: 'Grammar: Subjunctive Mood, Wish, and Hypothetical Inversions', start: 243, desc: 'It is essential that he be present; Had the elders not intervened...; expressing solemn formal recommendations.' },
        { num: '9.6', title: 'Writing: Comparative Synthesis Papers on Justice Paradigms', start: 249, desc: 'Point-by-point vs block comparison formats, comparative transitions, and objective academic conclusions.' }
      ]
    },
    {
      unit_num: 10,
      title: 'Artificial Intelligence',
      start_page: 253,
      end_page: 280,
      topics: [
        { num: '10.1', title: 'Listening: Machine Learning, Automation and Societal Futures', start: 253, desc: 'Tech podcasts, distinguishing algorithmic hype from reality, and noting predictions on employment.' },
        { num: '10.2', title: 'Speaking: Debating the Ethics and Boundaries of AI Systems', start: 256, desc: 'Parliamentary debate conventions, rebuttal techniques, cross-examination, and framing ethical dilemmas.' },
        { num: '10.3', title: 'Reading: Natural Language Processing and Computer Vision Applications', start: 258, desc: 'Comprehending computer science literature, identifying technical metaphors, and assessing AI in Ethiopia.' },
        { num: '10.4', title: 'Vocabulary: Computer Science, Algorithms & Data Ethics', start: 260, desc: 'Neural networks, training models, algorithmic bias, generative AI, and cybersecurity lexicon.' },
        { num: '10.5', title: 'Grammar: Advanced Cohesive Devices and Discourse Markers', start: 263, desc: 'Furthermore, notwithstanding, in light of, conversely; complex sentence punctuation and academic cohesion.' },
        { num: '10.6', title: 'Writing: Forward-Looking Analytical Essays on Technological Impact', start: 269, desc: 'Synthesizing technical evidence, balancing opportunity and peril, and formulating well-substantiated forecasts.' }
      ]
    }
  ]
};

export const ETHIOPIAN_CURRICULUM_DATA: Record<string, OfficialUnit[]> = {
  ...EXTENDED_CURRICULUM_DATA,
  ...GRADE_11_CURRICULUM,
  ...GRADE_12_CURRICULUM,
  ...GRADE_9_CURRICULUM,
  ...GRADE_10_CURRICULUM
};

export function getCurriculumForBook(
  bookId: string,
  gradeName?: string,
  subjectName?: string
): OfficialUnit[] | undefined {
  if (ETHIOPIAN_CURRICULUM_DATA[bookId]) {
    return ETHIOPIAN_CURRICULUM_DATA[bookId];
  }

  const normGrade = (gradeName || '').toLowerCase();
  const normSubject = (subjectName || '').toLowerCase();
  const normBookId = (bookId || '').toLowerCase();

  let targetGrade = '';
  if (normGrade.includes('9') || normBookId.includes('9') || normGrade.includes('nine')) targetGrade = '9';
  else if (normGrade.includes('10') || normBookId.includes('10') || normGrade.includes('ten')) targetGrade = '10';
  else if (normGrade.includes('11') || normBookId.includes('11') || normGrade.includes('eleven')) targetGrade = '11';
  else if (normGrade.includes('12') || normBookId.includes('12') || normGrade.includes('twelve')) targetGrade = '12';

  const isSocial = normGrade.includes('soc') || normBookId.includes('soc');
  const isNatural = normGrade.includes('nat') || normBookId.includes('nat');

  let targetSubj = '';
  if (normSubject.includes('bio') || normBookId.includes('bio')) targetSubj = 'bio';
  else if (normSubject.includes('chem') || normBookId.includes('chem')) targetSubj = 'chem';
  else if (normSubject.includes('phys') || normBookId.includes('phys')) targetSubj = 'phys';
  else if (normSubject.includes('math') || normBookId.includes('math')) targetSubj = 'math';
  else if (normSubject.includes('eng') || normBookId.includes('eng')) targetSubj = 'eng';
  else if (normSubject.includes('geog') || normSubject.includes('geo') || normBookId.includes('geog') || normBookId.includes('geo')) targetSubj = 'geog';
  else if (normSubject.includes('hist') || normBookId.includes('hist')) targetSubj = 'hist';
  else if (normSubject.includes('econ') || normBookId.includes('econ')) targetSubj = 'econ';
  else if (normSubject.includes('civ') || normSubject.includes('citizen') || normBookId.includes('civ')) targetSubj = 'civ';
  else if (normSubject.includes('amh') || normBookId.includes('amh')) targetSubj = 'amh';
  else if (normSubject.includes('it') || normSubject.includes('info') || normSubject.includes('tech') || normBookId.includes('it')) targetSubj = 'it';
  else if (normSubject.includes('agri') || normBookId.includes('agri')) targetSubj = 'agri';
  else if (normSubject.includes('sat') || normSubject.includes('apt') || normBookId.includes('sat') || normBookId.includes('apt')) targetSubj = 'sat';

  // Try stream-specific keys first if Grade 11 or 12
  if (targetGrade === '11' || targetGrade === '12') {
    const streamPrefix = isSocial ? 'soc' : (isNatural ? 'nat' : '');
    if (streamPrefix && targetSubj) {
      const key = `book-${targetGrade}-${streamPrefix}-${targetSubj}`;
      if (ETHIOPIAN_CURRICULUM_DATA[key]) return ETHIOPIAN_CURRICULUM_DATA[key];
    }
  }

  if (targetGrade && targetSubj) {
    const directKey = `book-${targetGrade}-${targetSubj}`;
    if (ETHIOPIAN_CURRICULUM_DATA[directKey]) return ETHIOPIAN_CURRICULUM_DATA[directKey];

    // Fallbacks
    const natKey = `book-${targetGrade}-nat-${targetSubj}`;
    if (ETHIOPIAN_CURRICULUM_DATA[natKey]) return ETHIOPIAN_CURRICULUM_DATA[natKey];
    const socKey = `book-${targetGrade}-soc-${targetSubj}`;
    if (ETHIOPIAN_CURRICULUM_DATA[socKey]) return ETHIOPIAN_CURRICULUM_DATA[socKey];
  }

  return undefined;
}
