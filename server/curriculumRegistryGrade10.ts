import { OfficialUnit } from './curriculumRegistry';

export const GRADE_10_CURRICULUM: Record<string, OfficialUnit[]> = {
  'book-10-bio': [
    {
      unit_num: 1,
      title: 'Sub-fields of Biology',
      start_page: 1,
      end_page: 22,
      topics: [
        { num: '1.1', title: 'Meaning and Major Sub-fields of Biology', start: 2, desc: 'Botany, zoology, microbiology, cytology, genetics, ecology, anatomy, physiology, taxonomy, and molecular biology.' },
        { num: '1.2', title: 'Pure and Applied Fields of Biology', start: 7, desc: 'Distinctions between pure biological research and applied fields: agriculture, medicine, forestry, biotechnology, and environmental management.' },
        { num: '1.3', title: 'Contributions of Renowned Biologists', start: 12, desc: 'Historical milestones: Aristotle, Galen, Antonie van Leeuwenhoek, Carl Linnaeus, Charles Darwin, Gregor Mendel, Robert Koch, Louis Pasteur, Watson & Crick, and Ian Wilmut.' },
        { num: '1.4', title: 'Contributions of Ethiopian Biologists', start: 18, desc: 'Groundbreaking discoveries: Dr. Aklilu Lemma & Dr. Legesse Wolde-Yohannes (Endod for bilharzia control), Prof. Yalemtsehay Mekonnen, Prof. Gebissa Ejeta (Striga-resistant sorghum), and Prof. Tilahun Yilma.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Plants',
      start_page: 23,
      end_page: 55,
      topics: [
        { num: '2.1', title: 'Major Groups of Plants', start: 24, desc: 'Classification: Bryophytes (mosses), Pteridophytes (ferns), Gymnosperms (conifers), and Angiosperms (flowering plants - monocots vs dicots).' },
        { num: '2.2', title: 'Structure and Function of Plant Organs', start: 28, desc: 'Anatomy and morphology of roots, stems, and leaves; internal cellular structure and vascular bundles (xylem and phloem).' },
        { num: '2.3', title: 'Reproduction in Gymnosperms and Angiosperms', start: 34, desc: 'Life cycle of pine trees, floral reproductive anatomy, pollination mechanisms, double fertilization, fruit formation, and seed structure.' },
        { num: '2.4', title: 'Photosynthesis, Transpiration, and Transport in Plants', start: 40, desc: 'Light-dependent and light-independent photosynthetic pathways, action spectrum, stomatal mechanism, transpiration pull, and phloem translocation.' },
        { num: '2.5', title: 'Plant Tropisms and Hormones', start: 46, desc: 'Phytohormones (auxins, gibberellins, cytokinins, ethylene, ABA), phototropism, geotropism, Darwin experiments, and growth regulation.' },
        { num: '2.6', title: 'Economically and Medicinally Important Ethiopian Plants', start: 51, desc: 'Indigenous crops and phytomedicines: Coffee arabica, Teff (Eragrostis tef), Enset (Ensete ventricosum), Gesho, Hagenia abyssinica (Kosso), and traditional therapeutic uses.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Biochemical Molecules',
      start_page: 56,
      end_page: 86,
      topics: [
        { num: '3.1', title: 'Inorganic Molecules: Water and Minerals', start: 57, desc: 'Chemical structure of water, polar covalent bonding, cohesion, adhesion, high specific heat, surface tension, and biological significance of macro- and micro-minerals.' },
        { num: '3.2', title: 'Carbohydrates: Monosaccharides, Disaccharides, and Polysaccharides', start: 64, desc: 'Structural formulas of glucose, fructose, galactose; glycosidic bonds in maltose, sucrose, lactose; storage polysaccharides (starch, glycogen) and structural cellulose; Benedict and iodine tests.' },
        { num: '3.3', title: 'Lipids: Fats, Oils, and Phospholipids', start: 71, desc: 'Triglyceride formation, ester linkages, saturated vs unsaturated fatty acids, phospholipid amphipathic bilayer in cell membranes, and lipid biological functions.' },
        { num: '3.4', title: 'Proteins: Amino Acids and Polypeptides', start: 76, desc: 'General structure of amino acids, peptide bond formation, essential vs non-essential amino acids, structural organization, enzyme catalysis, Biuret and Xanthoproteic tests.' },
        { num: '3.5', title: 'Nucleic Acids: DNA and RNA', start: 81, desc: 'Nucleotide monomer components (pentose sugar, phosphate, nitrogenous bases A, T, C, G, U), phosphodiester backbone, Watson-Crick double helix, mRNA/tRNA/rRNA, and genetic information storage.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Cell Reproduction',
      start_page: 87,
      end_page: 99,
      topics: [
        { num: '4.1', title: 'The Cell Cycle and Stages', start: 88, desc: 'Interphase phases (G1, S, G2), DNA replication, cellular growth checkpoints, and transition into mitotic division.' },
        { num: '4.2', title: 'Mitosis: Stages and Significance', start: 91, desc: 'Sequential phases: Prophase, Metaphase, Anaphase, Telophase; mitotic spindle assembly, cytokinesis; role in growth, tissue repair, and asexual reproduction.' },
        { num: '4.3', title: 'Meiosis: Reduction Division and Genetic Variation', start: 94, desc: 'Meiosis I and Meiosis II, homologous chromosome synapsis, crossing over at chiasmata, independent assortment, haploid gamete formation, and genetic diversity.' },
        { num: '4.4', title: 'Comparison Between Mitosis and Meiosis', start: 97, desc: 'Equational vs reductional division, diploid (2n) vs haploid (n) daughter cells, somatic vs germline occurrence, and evolutionary significance.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Human Biology',
      start_page: 100,
      end_page: 158,
      topics: [
        { num: '5.1', title: 'The Human Digestive System', start: 101, desc: 'Alimentary canal anatomy (mouth, pharynx, esophagus, stomach, small and large intestines), accessory glands (salivary, liver, pancreas), mechanical and chemical digestion, digestive enzymes, villi nutrient absorption.' },
        { num: '5.2', title: 'The Human Circulatory and Lymphatic System', start: 115, desc: 'Heart structure, cardiac cycle, double circulation, arterial/venous/capillary anatomy, blood cellular components (RBCs, WBCs, platelets, plasma), ABO blood typing and Rh factor, lymphatic drainage, cardiovascular health.' },
        { num: '5.3', title: 'The Human Respiratory System', start: 134, desc: 'Respiratory tract anatomy (nasal cavity, larynx, trachea, bronchi, alveoli), breathing mechanics (diaphragm and intercostal muscle action during inspiration/expiration), pulmonary gas diffusion, comparison of atmospheric vs exhaled air.' },
        { num: '5.4', title: 'The Human Excretory and Urinary System', start: 145, desc: 'Kidney macro- and micro-anatomy, nephron filtration (Bowman capsule ultrafiltration, selective reabsorption, tubular secretion), urine composition, osmoregulation, and homeostatic fluid balance.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Ecological Interactions',
      start_page: 159,
      end_page: 180,
      topics: [
        { num: '6.1', title: 'Ecosystem Concepts and Trophic Relationships', start: 160, desc: 'Biotic and abiotic ecosystem components, autotrophs, heterotrophs, saprotrophs, food chains, complex food webs, trophic levels, and the 10% ecological energy transfer efficiency.' },
        { num: '6.2', title: 'Ecological Pyramids', start: 164, desc: 'Construction and interpretation of pyramids of numbers, biomass, and energy; inverted vs upright ecological pyramids in terrestrial and aquatic systems.' },
        { num: '6.3', title: 'Biogeochemical Nutrient Cycles', start: 168, desc: 'Hydrological cycle, carbon-oxygen cycle, and nitrogen cycle pathways (nitrogen fixation, nitrification, plant assimilation, ammonification, denitrification) in biosphere maintenance.' },
        { num: '6.4', title: 'Interspecific Interactions and Symbiosis', start: 172, desc: 'Symbiotic and non-symbiotic relationships: mutualism, commensalism, parasitism, predation, interspecific competition, and ecological niche partitioning.' },
        { num: '6.5', title: 'Environmental Challenges and Conservation in Ethiopia', start: 176, desc: 'Deforestation, soil erosion, climate change, wildlife protected areas (Simien, Bale Mountains, Awash), conservation of endemic Ethiopian fauna, and national afforestation initiatives.' }
      ]
    }
  ],

  'book-10-chem': [
    {
      unit_num: 1,
      title: 'Chemical Reactions and Stoichiometry',
      start_page: 1,
      end_page: 50,
      topics: [
        { num: '1.1', title: 'Introduction', start: 2, desc: 'Physical vs chemical changes, reactants and products, and conditions for chemical reactions.' },
        { num: '1.2', title: 'Chemical Equations', start: 3, desc: 'Writing and balancing chemical equations using the Law of Conservation of Mass, inspection method, and LCM method.' },
        { num: '1.3', title: 'Types of Chemical Reactions', start: 11, desc: 'Direct combination (synthesis), decomposition, single displacement, and double displacement (metathesis) reactions.' },
        { num: '1.4', title: 'Oxidation and Reduction Reactions', start: 20, desc: 'Oxidation number rules, oxidizing and reducing agents, redox vs non-redox reactions, and balancing redox equations by oxidation-number change.' },
        { num: '1.5', title: 'Molecular and Formula Masses, the Mole Concept and Chemical Formulas', start: 28, desc: 'Molecular mass, formula mass, mole, Avogadro\'s number (6.022 × 10²³), molar mass, percentage composition, empirical and molecular formulas.' },
        { num: '1.6', title: 'Stoichiometry', start: 34, desc: 'Mass-mass, mole-mole, volume-volume (STP 22.4 L/mol), mass-volume calculations, limiting and excess reactants, and percentage yield.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Solutions',
      start_page: 51,
      end_page: 108,
      topics: [
        { num: '2.1', title: 'Heterogeneous and Homogeneous Mixtures', start: 53, desc: 'Definitions and properties of suspensions, colloids (Tyndall effect, Brownian motion), and true solutions (solute and solvent).' },
        { num: '2.2', title: 'The Solution Process', start: 59, desc: 'Liquid solutions, inter-particle forces ("like dissolves like"), hydration/solvation energy, lattice energy, and heat of solution (ΔH_soln).' },
        { num: '2.3', title: 'Solubility as an Equilibrium Process', start: 73, desc: 'Unsaturated, saturated, and supersaturated solutions; effect of temperature on solid/gas solubility and Henry\'s Law (C = kP).' },
        { num: '2.4', title: 'Ways of Expressing Concentration of Solution', start: 81, desc: 'Mass percentage, ppm, mole fraction (X), molarity (M), normality (N = M × z), and molality (m).' },
        { num: '2.5', title: 'Preparation of Solutions', start: 94, desc: 'Preparing solutions of known molarity from solid solutes and by diluting stock solutions (M₁V₁ = M₂V₂).' },
        { num: '2.6', title: 'Solution Stoichiometry', start: 98, desc: 'Calculating volumes, moles, and masses of reactants and products in aqueous chemical reactions and titrations.' },
        { num: '2.7', title: 'Describing Reactions in Solution', start: 101, desc: 'Molecular equations, complete ionic equations, spectator ions, and net ionic equations.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Important Inorganic Compounds',
      start_page: 109,
      end_page: 165,
      topics: [
        { num: '3.1', title: 'Introduction', start: 110, desc: 'Classification of inorganic compounds into oxides, acids, bases, and salts.' },
        { num: '3.2', title: 'Oxides', start: 111, desc: 'Acidic oxides, basic oxides, amphoteric oxides (ZnO, Al₂O₃, PbO, SnO), neutral oxides (CO, NO, N₂O), and peroxides (H₂O₂, Na₂O₂).' },
        { num: '3.3', title: 'Acids', start: 122, desc: 'Arrhenius, Brønsted-Lowry (conjugate acid-base pairs), and Lewis definitions; classification, preparation, properties, pH and pOH scales (pH + pOH = 14).' },
        { num: '3.4', title: 'Bases', start: 140, desc: 'Arrhenius, Brønsted-Lowry, and Lewis bases; strong vs weak bases, alkalis, preparation, chemical properties, and neutralization.' },
        { num: '3.5', title: 'Salts', start: 148, desc: 'Classification (normal, acidic, basic, double, complex salts), preparation methods, solubility rules, deliquescent/hygroscopic/efflorescent salts, and plant macronutrients (N, P, K).' }
      ]
    },
    {
      unit_num: 4,
      title: 'Energy Changes and Electrochemistry',
      start_page: 166,
      end_page: 197,
      topics: [
        { num: '4.1', title: 'Introduction', start: 167, desc: 'System and surroundings, open/closed/isolated systems, exothermic (ΔH < 0) and endothermic (ΔH > 0) reactions, enthalpy and thermochemical equations.' },
        { num: '4.2', title: 'Energy Changes in Electrochemistry', start: 174, desc: 'Electrical conductivity: metallic (electronic) vs electrolytic (ionic) conduction; strong and weak electrolytes.' },
        { num: '4.3', title: 'Electrochemical Cells', start: 182, desc: 'Galvanic (voltaic) cells: Daniell cell, anode (oxidation), cathode (reduction), salt bridge, primary and secondary batteries (Dry cell, Lead-acid storage, Nickel-cadmium).' },
        { num: '4.4', title: 'Electrolysis', start: 187, desc: 'Electrolytic cells, preferential discharge of ions, electrolysis of molten PbBr₂, concentrated NaCl, dilute H₂SO₄, and electroplating/electrorefining.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Metals and Nonmetals',
      start_page: 198,
      end_page: 233,
      topics: [
        { num: '5.1', title: 'Introduction', start: 199, desc: 'Natural abundance of elements in the Earth\'s crust, minerals, ores, and gangue.' },
        { num: '5.2', title: 'General Properties of Metals and Production of Some Metals', start: 200, desc: 'Physical/chemical properties of metals, metallurgy steps (concentration, roasting/calcination, reduction, refining), alloys, and extraction/uses of Al, Fe (blast furnace), and Cu.' },
        { num: '5.3', title: 'Production of Some Important Nonmetals', start: 218, desc: 'General properties of nonmetals; industrial extraction, allotropes, properties, and compounds of Nitrogen (Haber process), Phosphorus, Oxygen, Sulfur (Frasch & Contact process), and Chlorine.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Hydrocarbons and Their Natural Sources',
      start_page: 234,
      end_page: 300,
      topics: [
        { num: '6.1', title: 'Introduction', start: 235, desc: 'History of organic chemistry (Wöhler synthesis of urea), catenation and tetravalency of carbon, functional groups, and homologous series.' },
        { num: '6.2', title: 'Saturated Hydrocarbons: Alkanes (CnH2n+2)', start: 240, desc: 'Alkanes and cycloalkanes, IUPAC nomenclature, structural isomerism, laboratory preparation (decarboxylation, Wurtz reaction), and halogenation/combustion reactions.' },
        { num: '6.3', title: 'Unsaturated Hydrocarbons: Alkenes and Alkynes', start: 262, desc: 'Alkenes (CnH2n) and Alkynes (CnH2n-2), cis-trans geometrical isomerism, preparation (dehydration, dehydrohalogenation, CaC₂ hydrolysis), Markovnikov\'s rule addition reactions, and tests for unsaturation (Br₂ water, Baeyer\'s reagent).' },
        { num: '6.4', title: 'Aromatic Hydrocarbons: Benzene', start: 285, desc: 'Structure of benzene (C₆H₆), resonance stability, physical properties, and substitution (nitration, halogenation, sulfonation) vs addition reactions.' },
        { num: '6.5', title: 'Natural Sources of Hydrocarbons', start: 290, desc: 'Natural gas, crude oil (fractional distillation of petroleum, cracking, octane number), and destructive distillation of coal.' }
      ]
    }
  ],

  'book-10-phys': [
    {
      unit_num: 1,
      title: 'Vector Quantities',
      start_page: 1,
      end_page: 20,
      topics: [
        { num: '1.1', title: 'Scalars and Vectors', start: 2, desc: 'Distinction between scalar quantities (magnitude only) and vector quantities (magnitude and direction).' },
        { num: '1.2', title: 'Vector Representations', start: 3, desc: 'Graphical arrow representation and analytical algebraic notation of vectors, collinear, coplanar, equal, and negative vectors.' },
        { num: '1.3', title: 'Vector Addition and Subtraction', start: 6, desc: 'Adding and subtracting parallel, anti-parallel, and perpendicular vectors using Pythagoras\' theorem and trigonometry.' },
        { num: '1.4', title: 'Graphical Method of Vector Addition', start: 8, desc: 'Triangle law, parallelogram law, and polygon law of vector addition using scale drawings.' },
        { num: '1.5', title: 'Vector Resolution', start: 14, desc: 'Resolving a vector into perpendicular horizontal (R_x = R cos θ) and vertical (R_y = R sin θ) components, and finding resultant from components.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Uniformly Accelerated Motion',
      start_page: 21,
      end_page: 58,
      topics: [
        { num: '2.1', title: 'Position and Displacement', start: 22, desc: 'Position vector and displacement Δx = x_f - x_i along a straight coordinate axis.' },
        { num: '2.2', title: 'Average Velocity and Instantaneous Velocity', start: 25, desc: 'Average velocity v_avg = Δx/Δt vs instantaneous velocity at a specific instant in time.' },
        { num: '2.3', title: 'Acceleration', start: 30, desc: 'Average and instantaneous acceleration a = (v - u)/t, uniform acceleration, and direction of acceleration relative to velocity.' },
        { num: '2.4', title: 'Equations of Motion with Constant Acceleration', start: 36, desc: 'The five kinematic equations of uniformly accelerated motion and vertical free fall under gravity (g = 9.8 m/s²).' },
        { num: '2.5', title: 'Graphical Representation of Uniformly Accelerated Motion', start: 42, desc: 'Interpreting position-time (s-t), velocity-time (v-t), and acceleration-time (a-t) graphs; slopes and areas under curves.' },
        { num: '2.6', title: 'Relative Velocity in One Dimension', start: 50, desc: 'Relative velocity v_AB = v_A - v_B for bodies moving in the same or opposite directions.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Elasticity and Static Equilibrium of Rigid Body',
      start_page: 59,
      end_page: 90,
      topics: [
        { num: '3.1', title: 'Elasticity and Plasticity', start: 60, desc: 'Deforming forces, elastic vs plastic deformation, Hooke\'s Law (F = kx), and elastic limit.' },
        { num: '3.2', title: 'Density and Specific Gravity', start: 63, desc: 'Density ρ = m/V (kg/m³) and relative density / specific gravity (ρ_substance / ρ_water).' },
        { num: '3.3', title: 'Stress and Strain', start: 67, desc: 'Tensile/compressive stress (σ = F/A in Pascals), tensile strain (ε = ΔL/L₀), and stress-strain curve (yield point, ultimate strength, fracture).' },
        { num: '3.4', title: 'The Young Modulus', start: 72, desc: 'Young\'s modulus of elasticity Y = Stress/Strain = (F·L₀)/(A·ΔL) and elastic strain energy.' },
        { num: '3.5', title: 'Static Equilibrium', start: 77, desc: 'Torque (moment of force τ = rF sin θ), center of gravity, First Condition (ΣF = 0) and Second Condition (Στ = 0) of static equilibrium.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Static and Current Electricity',
      start_page: 91,
      end_page: 150,
      topics: [
        { num: '4.1', title: 'Charges in Nature', start: 92, desc: 'Positive and negative electric charges, quantization of charge (Q = ne), conservation of charge, conductors and insulators.' },
        { num: '4.2', title: 'Methods of Charging a Body', start: 94, desc: 'Charging by rubbing (triboelectric friction), charging by conduction (contact), and charging by electrostatic induction.' },
        { num: '4.3', title: 'The Electroscope', start: 97, desc: 'Gold-leaf electroscope structure, charging an electroscope, detecting charge presence, sign of charge, and testing conductors/insulators.' },
        { num: '4.4', title: 'Electrical Discharge', start: 99, desc: 'Point discharge, lightning formation, lightning conductors (arresters), and electrostatic hazards.' },
        { num: '4.5', title: 'Coulomb\'s Law of Electrostatics', start: 102, desc: 'Electrostatic force F = k|q₁q₂|/r² between point charges (k = 8.99 × 10⁹ N·m²/C²).' },
        { num: '4.6', title: 'The Electric Field', start: 104, desc: 'Electric field strength E = F/q = kQ/r² (N/C), electric field lines properties, and field patterns around point charges and parallel plates.' },
        { num: '4.7', title: 'Electric Circuits', start: 107, desc: 'Components of a complete electric circuit, circuit symbols, open vs closed circuits, conventional current vs electron flow.' },
        { num: '4.8', title: 'Current, Voltage, and Ohm\'s Law', start: 110, desc: 'Electric current I = Q/t (Amperes), potential difference V = W/Q (Volts), EMF, internal resistance, Ohm\'s Law (V = IR), and resistivity R = ρL/A.' },
        { num: '4.9', title: 'Combination of Resistors in a Circuit', start: 120, desc: 'Series (R_eq = R₁ + R₂ + ...), parallel (1/R_eq = 1/R₁ + 1/R₂ + ...), and series-parallel resistor networks.' },
        { num: '4.10', title: 'Voltmeter and Ammeter Connection in a Circuit', start: 128, desc: 'Connecting ammeters in series (low resistance) and voltmeters in parallel (high resistance); electrical energy and power P = IV = I²R = V²/R.' },
        { num: '4.11', title: 'Electrical Safety in General and Local Context', start: 132, desc: 'Fuses, circuit breakers, three-pin plugs, earthing (grounding), dampness hazards, and first aid for electric shock.' },
        { num: '4.12', title: 'Electric Projects', start: 136, desc: 'Practical domestic wiring projects, model house lighting circuits, and troubleshooting simple circuits.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Magnetism',
      start_page: 151,
      end_page: 176,
      topics: [
        { num: '5.1', title: 'Magnet', start: 152, desc: 'Ferromagnetic, paramagnetic, and diamagnetic materials; magnetic poles, law of magnetism, magnetization and demagnetization.' },
        { num: '5.2', title: 'Magnetic Field', start: 155, desc: 'Magnetic field lines, magnetic flux density B (Tesla), neutral points, and magnetic shielding.' },
        { num: '5.3', title: 'The Earth\'s Magnetic Field and the Compass', start: 159, desc: 'Geomagnetic poles vs geographic poles, angle of declination, angle of dip (inclination), and compass navigation.' },
        { num: '5.4', title: 'Magnetic Field of a Current-Carrying Conductor', start: 162, desc: 'Oersted\'s experiment, right-hand grip rule for a straight wire (B = μ₀I / 2πr) and a current-carrying solenoid (B = μ₀nI).' },
        { num: '5.5', title: 'Magnetic Force on a Moving Charge', start: 165, desc: 'Magnetic Lorentz force F = qvB sin θ on a charged particle moving in a magnetic field and circular path radius r = mv/(qB).' },
        { num: '5.6', title: 'Magnetic Force on a Current-Carrying Wire', start: 167, desc: 'Motor force F = BIL sin θ on a conductor in a magnetic field and Fleming\'s Left-Hand Rule / Right-Hand Palm Rule.' },
        { num: '5.7', title: 'Magnetic Force Between Two Parallel Current-Carrying Wires', start: 170, desc: 'Force per unit length F/L = (μ₀I₁I₂)/(2πd); parallel currents attract, anti-parallel currents repel.' },
        { num: '5.8', title: 'Applications of Magnetism', start: 171, desc: 'Electromagnets, electric bells, relays, moving-coil loudspeakers, and simple DC electric motors.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Electromagnetic Waves and Geometrical Optics',
      start_page: 177,
      end_page: 252,
      topics: [
        { num: '6.1', title: 'Electromagnetic (EM) Waves', start: 178, desc: 'Transverse oscillating electric and magnetic fields perpendicular to propagation, speed in vacuum c = 3.0 × 10⁸ m/s, c = fλ.' },
        { num: '6.2', title: 'EM Spectrum', start: 180, desc: 'Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays: wavelengths, frequencies, sources, and applications.' },
        { num: '6.3', title: 'Light as a Wave', start: 186, desc: 'Rectilinear propagation of light, rays and beams, luminous vs illuminated bodies, transparent/translucent/opaque media, and pinhole camera.' },
        { num: '6.4', title: 'Laws of Reflection & Refraction', start: 190, desc: 'Laws of reflection, plane mirror image properties, number of images in inclined mirrors, refractive index n = c/v, Snell\'s Law (n₁ sin θ₁ = n₂ sin θ₂), real/apparent depth, critical angle (sin θ_c = 1/n), and total internal reflection (optical fibers).' },
        { num: '6.5', title: 'Mirrors and Lenses', start: 203, desc: 'Concave and convex spherical mirrors, principal focus, ray diagrams, mirror equation (1/f = 1/u + 1/v), magnification m = -v/u, converging and diverging thin lenses, lens equation, and power of a lens P = 1/f (Diopters).' },
        { num: '6.6', title: 'Human Eye and Optical Instruments', start: 228, desc: 'Anatomy of the human eye, accommodation, near point (25 cm) and far point, myopia (short-sightedness, concave lens) and hypermetropia (long-sightedness, convex lens), simple magnifier, compound microscope, and astronomical telescope.' },
        { num: '6.7', title: 'Primary Colors of Light and Human Vision', start: 238, desc: 'Dispersion of white light by a prism (VIBGYOR), monochromatic vs polychromatic light, rods and cones in the retina, and RGB primary colors.' },
        { num: '6.8', title: 'Color Addition of Light', start: 240, desc: 'Additive mixing of Red, Green, and Blue light to produce secondary colors (Yellow, Cyan, Magenta) and white light; complementary colors.' },
        { num: '6.9', title: 'Color Subtraction of Light Using Filters', start: 241, desc: 'Subtractive color mixing with pigments and optical color filters; appearance of colored objects under different illuminations.' }
      ]
    }
  ],

  'book-10-math': [
    {
      unit_num: 1,
      title: 'Relations and Functions',
      start_page: 1,
      end_page: 66,
      topics: [
        { num: '1.1', title: 'Relations', start: 2, desc: 'Definition of relation, domain, codomain, range, inverse of a relation, and graphing relations including linear inequalities.' },
        { num: '1.2', title: 'Functions', start: 17, desc: 'Definition of function, combinations of functions, one-to-one (injective), onto (surjective), and one-to-one correspondence (bijective), composition of functions f(g(x)), inverse functions f⁻¹(x), and graph transformations.' },
        { num: '1.3', title: 'Applications of Relations and Functions', start: 50, desc: 'Real-world mathematical modeling using linear, quadratic, and piecewise relations and functions.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Polynomial Functions',
      start_page: 67,
      end_page: 120,
      topics: [
        { num: '2.1', title: 'Definition of Polynomial Function', start: 68, desc: 'Polynomial function P(x) = aₙxⁿ + ... + a₁x + a₀, degree, leading coefficient, constant term, and domain.' },
        { num: '2.2', title: 'Operations on Polynomial Functions', start: 74, desc: 'Addition, subtraction, multiplication, and polynomial division algorithm P(x) = D(x)·Q(x) + R(x).' },
        { num: '2.3', title: 'Theorems on Polynomial Functions', start: 84, desc: 'Polynomial Division Theorem, Remainder Theorem R = P(c), Factor Theorem (x - c is a factor iff P(c) = 0), and synthetic division.' },
        { num: '2.4', title: 'Zeros of Polynomial Functions', start: 93, desc: 'Rational Root Test (p/q), Location Theorem (intermediate value sign change), multiplicity of zeros, and Fundamental Theorem of Algebra.' },
        { num: '2.5', title: 'Graphs of Polynomial Functions', start: 101, desc: 'End behavior (leading term test), x- and y-intercepts, behavior at roots of even/odd multiplicity, turning points (at most n - 1), and curve sketching.' },
        { num: '2.6', title: 'Applications', start: 112, desc: 'Applied optimization and geometric volume/area problems modeled by polynomial equations.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Exponential and Logarithmic Functions',
      start_page: 121,
      end_page: 198,
      topics: [
        { num: '3.1', title: 'Exponents and Logarithms', start: 122, desc: 'Irrational exponents, laws of exponents, definition of logarithm log_b(y) = x ⇔ bˣ = y, laws of logarithms, change of base formula, common logs (mantissa & characteristic), and natural logarithms (ln).' },
        { num: '3.2', title: 'The Exponential Functions and Their Graphs', start: 153, desc: 'f(x) = bˣ (b > 1 growth vs 0 < b < 1 decay), domain ℝ, range (0, ∞), y-intercept (0, 1), horizontal asymptote, and transformations.' },
        { num: '3.3', title: 'The Logarithmic Functions and Their Graphs', start: 163, desc: 'f(x) = log_b(x), domain (0, ∞), range ℝ, x-intercept (1, 0), vertical asymptote x = 0, and reflection symmetry across y = x.' },
        { num: '3.4', title: 'Solving Exponential and Logarithmic Equations', start: 172, desc: 'Properties of equality for exponential and logarithmic equations, extraneous root checking, and change-of-base techniques.' },
        { num: '3.5', title: 'Relation Between Exponential and Logarithmic Functions', start: 178, desc: 'Inverse relationship f(f⁻¹(x)) = b^(log_b x) = x and log_b(bˣ) = x, and converting between forms.' },
        { num: '3.6', title: 'Applications', start: 182, desc: 'Population growth, radioactive half-life decay, compound interest A = P(1 + r/n)^(nt), continuous compounding Pe^(rt), pH scale, and decibel intensity.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Trigonometric Functions',
      start_page: 199,
      end_page: 250,
      topics: [
        { num: '4.1', title: 'Radian Measure of Angle', start: 200, desc: 'Angles in standard position, coterminal angles, radian measure (180° = π rad), arc length s = rθ, and sector area A = ½r²θ.' },
        { num: '4.2', title: 'Basic Trigonometric Functions', start: 207, desc: 'Unit circle definitions of sin θ, cos θ, tan θ, csc θ, sec θ, cot θ; signs in four quadrants (ASTC); reference angles; co-function and periodicity properties; graphs of sin, cos, and tan.' },
        { num: '4.3', title: 'Trigonometric Identities & Equations', start: 234, desc: 'Reciprocal, quotient, and Pythagorean identities (sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ), simplifying expressions, and solving trigonometric equations.' },
        { num: '4.4', title: 'Applications', start: 242, desc: 'Angles of elevation and depression, marine/aerial navigation bearings, and surveying heights and distances.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Circles',
      start_page: 251,
      end_page: 286,
      topics: [
        { num: '5.1', title: 'Symmetrical Properties of Circles', start: 252, desc: 'Chord properties, perpendicular bisector of a chord passes through the center, and equal chords are equidistant from the center.' },
        { num: '5.2', title: 'Angle Properties of Circles', start: 258, desc: 'Central angles, inscribed angles, Thales\' theorem (angle in a semicircle is 90°), angles subtended by the same arc, and cyclic quadrilaterals.' },
        { num: '5.3', title: 'Arc Length, Perimeters and Areas of Segments and Sectors', start: 268, desc: 'Calculating arc length, perimeter and area of circular sectors, and area of circular segments (A_sector - ½r² sin θ).' },
        { num: '5.4', title: 'Theorems on Angles and Arcs Determined by Lines Intersecting Inside, On and Outside a Circle', start: 275, desc: 'Intersecting chords angle/segment theorems, tangent-chord angle theorem, and secant-secant / secant-tangent exterior angle and power theorems.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Solid Figures',
      start_page: 287,
      end_page: 344,
      topics: [
        { num: '6.1', title: 'Revision of Cylinders and Prisms', start: 288, desc: 'Cross-sections, lateral surface area, total surface area, and volume of right prisms and circular cylinders.' },
        { num: '6.2', title: 'Pyramids, Cones and Spheres', start: 294, desc: 'Regular pyramids, right circular cones, and spheres: slant height, vertex angle, lateral/total surface area, and volume formulas.' },
        { num: '6.3', title: 'Frustum of Pyramids and Cones', start: 321, desc: 'Horizontal cross-sections, similarity ratios of areas (k²) and volumes (k³), lateral/total surface area, and volume of frustums V = (h/3)(A₁ + A₂ + √(A₁A₂)) and V = (πh/3)(R² + r² + Rr).' },
        { num: '6.4', title: 'Surface Areas and Volumes of Composed Solids', start: 331, desc: 'Calculating exposed surface area and total volume of composite 3D solids (cone-cylinder, hemisphere-cylinder, hollowed solids).' },
        { num: '6.5', title: 'Applications', start: 336, desc: 'Engineering and container capacity problems involving frustums (buckets, lampshades, hoppers) and composite solids.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Coordinate Geometry',
      start_page: 345,
      end_page: 385,
      topics: [
        { num: '7.1', title: 'Distance Between Two Points', start: 347, desc: 'Distance formula d = √[(x₂ - x₁)² + (y₂ - y₁)²] and geometric proofs in the coordinate plane.' },
        { num: '7.2', title: 'Division of a Line Segment', start: 351, desc: 'Point P(x, y) dividing segment AB internally in ratio m:n: x = (mx₂ + nx₁)/(m+n), y = (my₂ + ny₁)/(m+n), and midpoint formula.' },
        { num: '7.3', title: 'Equation of a Line', start: 356, desc: 'Angle of inclination θ, slope m = tan θ, point-slope, slope-intercept, two-point, intercept (x/a + y/b = 1), and general form Ax + By + C = 0.' },
        { num: '7.4', title: 'Slopes of Parallel and Perpendicular Lines', start: 365, desc: 'Parallel lines (m₁ = m₂) and perpendicular lines (m₁·m₂ = -1); finding perpendicular bisectors and altitudes of triangles.' },
        { num: '7.5', title: 'Equation of a Circle', start: 370, desc: 'Standard form (x - h)² + (y - k)² = r², general form x² + y² + Dx + Ey + F = 0, completing the square, and position of a point/line relative to a circle.' },
        { num: '7.6', title: 'Applications', start: 375, desc: 'Applied coordinate geometry problems in navigation, urban grid mapping, and geometric locus proofs.' }
      ]
    }
  ],

  'book-10-eng': [
    {
      unit_num: 1,
      title: 'Population Growth',
      start_page: 1,
      end_page: 36,
      topics: [
        { num: '1.1', title: 'Listening: Population Explosion', start: 2, desc: 'Listening for demographic statistics, population growth rates, and socio-economic impacts.' },
        { num: '1.2', title: 'Speaking: Discussing Population Trends', start: 3, desc: 'Expressing opinions, agreeing and disagreeing politely on demographic challenges.' },
        { num: '1.3', title: 'Reading: Population Growth', start: 7, desc: 'Skimming, scanning, and intensive reading on global and Ethiopian population dynamics.' },
        { num: '1.4', title: 'Grammar: Degrees of Comparison, Tenses & Relative Clauses', start: 18, desc: 'Comparative structures, present tenses for trends, and relative clauses in demographic writing.' },
        { num: '1.5', title: 'Writing: Interpreting Graphs and Descriptive Paragraphs', start: 33, desc: 'Describing population charts and writing well-structured analytical paragraphs.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Travel Behaviors',
      start_page: 37,
      end_page: 64,
      topics: [
        { num: '2.1', title: 'Listening: Travelling and Places', start: 38, desc: 'Comprehending travel narratives, itineraries, and commuter habits.' },
        { num: '2.2', title: 'Speaking: Asking for and Giving Directions & Advice', start: 39, desc: 'Polite inquiries, giving clear spatial directions, and travel recommendations.' },
        { num: '2.3', title: 'Reading: Travel Behaviors', start: 44, desc: 'Analyzing texts on modern travel patterns, road safety, and eco-friendly transit.' },
        { num: '2.4', title: 'Grammar: Past Tenses, Modals of Obligation & Adverbs of Frequency', start: 50, desc: 'Simple past vs past continuous/perfect, must/have to/should, and frequency adverbs.' },
        { num: '2.5', title: 'Writing: Narrative and Expository Travel Paragraphs', start: 52, desc: 'Writing personal travel narratives and formal paragraphs on transportation.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Punctuality',
      start_page: 65,
      end_page: 91,
      topics: [
        { num: '3.1', title: 'Listening: Punctual Students', start: 66, desc: 'Identifying habits of effective time management and consequences of tardiness.' },
        { num: '3.2', title: 'Speaking: Apologizing and Explaining Reasons', start: 69, desc: 'Making sincere apologies, giving valid reasons, and discussing time consciousness.' },
        { num: '3.3', title: 'Reading: Punctuality', start: 74, desc: 'Reading comprehension on the value of punctuality in academic and professional life.' },
        { num: '3.4', title: 'Vocabulary: Time Management, Idioms & Collocations', start: 78, desc: 'Time-related idioms (on the dot, around the clock, procrastinate, deadline) and word formation.' },
        { num: '3.5', title: 'Grammar: Conditionals, Prepositions of Time & Clauses of Result', start: 82, desc: 'Zero, first, and second conditionals; prepositions (at, on, in, by, until); so...that / such...that.' },
        { num: '3.6', title: 'Writing: Expository Essays on Time Management', start: 89, desc: 'Planning, drafting, and revising multi-paragraph essays on punctuality.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Tourist Attractions',
      start_page: 92,
      end_page: 118,
      topics: [
        { num: '4.1', title: 'Listening: Giving Information for Tourists', start: 93, desc: 'Listening to tour briefings on Ethiopia\'s UNESCO World Heritage landmarks.' },
        { num: '4.2', title: 'Speaking: Describing Historical and Natural Attractions', start: 95, desc: 'Role-playing tour guides and tourists, using vivid descriptive adjectives.' },
        { num: '4.3', title: 'Reading: Tourism', start: 98, desc: 'Comprehending passages on eco-tourism, cultural heritage, and economic benefits of tourism.' },
        { num: '4.4', title: 'Vocabulary: Hospitality, Heritage & Geographical Terms', start: 104, desc: 'Itinerary, monument, sanctuary, endemic, hospitality, and synonyms/antonyms.' },
        { num: '4.5', title: 'Grammar: Passive Voice, Present Perfect & Adjective Order', start: 107, desc: 'Passive voice in historical descriptions (was carved, has been preserved) and royal order of adjectives.' },
        { num: '4.6', title: 'Writing: Descriptive Essays and Tourist Brochures', start: 115, desc: 'Designing persuasive travel brochures and descriptive essays on Ethiopian landmarks.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Honey Processing',
      start_page: 119,
      end_page: 143,
      topics: [
        { num: '5.1', title: 'Listening: Honey Processing', start: 120, desc: 'Following sequential stages of apiculture, hive management, and honey extraction.' },
        { num: '5.2', title: 'Speaking: Describing Processes and Procedures', start: 122, desc: 'Using sequence markers (firstly, next, subsequently, finally) to explain agricultural processes.' },
        { num: '5.3', title: 'Reading: The Importance of Honey', start: 124, desc: 'Nutritional, medicinal, and export value of Ethiopian honey and beeswax.' },
        { num: '5.4', title: 'Vocabulary: Apiculture, Processing & Commercial Terms', start: 128, desc: 'Apiary, nectar, pollination, centrifugal extractor, filtration, organic export.' },
        { num: '5.5', title: 'Grammar: Process Passive, Imperatives & Quantifiers', start: 131, desc: 'Present simple passive for manufacturing processes (is harvested, is filtered, is bottled) and quantifiers.' },
        { num: '5.6', title: 'Writing: Process Description Paragraphs', start: 139, desc: 'Writing clear step-by-step procedural reports from flowcharts.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Migration',
      start_page: 144,
      end_page: 174,
      topics: [
        { num: '6.1', title: 'Listening: Causes and Consequences of Migration', start: 145, desc: 'Listening to testimonies and reports on internal and international migration.' },
        { num: '6.2', title: 'Speaking: Debating Migration Issues', start: 148, desc: 'Discussing push and pull factors, brain drain, and risks of irregular migration.' },
        { num: '6.3', title: 'Reading: Migration in Ethiopia', start: 150, desc: 'Critical reading on rural-to-urban migration, youth employment, and safe migration.' },
        { num: '6.4', title: 'Vocabulary: Demography, Mobility & Socio-Economic Terms', start: 155, desc: 'Emigration, immigration, remittance, diaspora, asylum, human trafficking, reintegration.' },
        { num: '6.5', title: 'Grammar: Tense Review, Clauses of Cause/Effect & Concession', start: 159, desc: 'Past perfect, present perfect continuous, because of/due to/consequently, although/despite.' },
        { num: '6.6', title: 'Writing: Cause-and-Effect and Argumentative Essays', start: 166, desc: 'Structuring cause-and-effect essays with thesis statements and supporting evidence.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Branding Ethiopia and National Identity',
      start_page: 175,
      end_page: 216,
      topics: [
        { num: '7.1', title: 'Listening: National Image and Cultural Diplomacy', start: 176, desc: 'Comprehending talks on nation branding, coffee origin, athletics, and heritage.' },
        { num: '7.2', title: 'Speaking: Promoting National Values and Unity', start: 179, desc: 'Delivering persuasive speeches on Ethiopia\'s contributions to world civilization.' },
        { num: '7.3', title: 'Reading: Branding Ethiopia and National Identity', start: 191, desc: 'Analyzing texts on national symbols, cultural diversity, and global perception.' },
        { num: '7.4', title: 'Vocabulary: Identity, Diplomacy, Heritage & Branding', start: 196, desc: 'Sovereignty, cradle of humanity, prestige, ambassador, indigenous, resilience.' },
        { num: '7.5', title: 'Grammar: Reported Speech, Relative Clauses & Modals', start: 202, desc: 'Reporting statements, questions, and commands; defining and non-defining relative clauses.' },
        { num: '7.6', title: 'Writing: Persuasive Essays and Formal Speeches', start: 211, desc: 'Writing patriotic and analytical essays promoting Ethiopia\'s natural and cultural wealth.' }
      ]
    },
    {
      unit_num: 8,
      title: 'The Healing Power of Plants',
      start_page: 217,
      end_page: 242,
      topics: [
        { num: '8.1', title: 'Listening: Herbal Medicine and Ethnobotany', start: 218, desc: 'Listening to scientific discussions on medicinal plants and pharmacology.' },
        { num: '8.2', title: 'Speaking: Discussing Traditional vs Modern Medicine', start: 220, desc: 'Comparing herbal remedies and modern pharmaceuticals using contrast markers.' },
        { num: '8.3', title: 'Reading: A Traditional Medicine, Moringa Oleifera', start: 227, desc: 'Reading scientific profiles of Moringa oleifera (Shiferaw), Endod, Damakese, and Kosso.' },
        { num: '8.4', title: 'Vocabulary: Botany, Pharmacology & Healthcare', start: 231, desc: 'Phytochemicals, antioxidant, dosage, infusion, biodiversity, clinical efficacy.' },
        { num: '8.5', title: 'Grammar: Zero/First/Second Conditionals & Passive Voice', start: 235, desc: 'Scientific conditionals, modal passive (can be extracted, should be boiled), and participial phrases.' },
        { num: '8.6', title: 'Writing: Expository Research Reports on Medicinal Plants', start: 241, desc: 'Writing structured informational reports on indigenous Ethiopian medicinal plants.' }
      ]
    },
    {
      unit_num: 9,
      title: 'Multilingualism',
      start_page: 243,
      end_page: 272,
      topics: [
        { num: '9.1', title: 'Listening: Multilingualism', start: 244, desc: 'Understanding lectures on linguistic diversity and mother-tongue education.' },
        { num: '9.2', title: 'Speaking: Sharing Language Learning Experiences', start: 246, desc: 'Discussing strategies for mastering multiple languages and intercultural communication.' },
        { num: '9.3', title: 'Reading: Cognitive Benefits of Being Multilingual', start: 247, desc: 'Analyzing research on how bilingualism/multilingualism enhances executive brain function and empathy.' },
        { num: '9.4', title: 'Writing: Formal and Informal Letter Writing', start: 253, desc: 'Conventions, layout, salutations, body, and sign-offs of formal business letters and informal letters.' },
        { num: '9.5', title: 'Grammar: Wishes, Third Conditional & Conjunctions', start: 256, desc: 'Expressing regrets and wishes (I wish I spoke..., If I had learned...), correlative conjunctions (both...and, not only...but also).' },
        { num: '9.6', title: 'Vocabulary: Linguistics, Cognition & Communication', start: 270, desc: 'Polyglot, bilingual, lingua franca, mother tongue, dialect, cognitive flexibility.' }
      ]
    },
    {
      unit_num: 10,
      title: 'Digital Vs Satellite Television',
      start_page: 273,
      end_page: 316,
      topics: [
        { num: '10.1', title: 'Listening: Broadcasting Technologies', start: 274, desc: 'Listening to technical comparisons of terrestrial digital broadcasting and satellite television.' },
        { num: '10.2', title: 'Speaking: Comparing Media Platforms', start: 276, desc: 'Debating the educational and entertainment impacts of digital media vs satellite TV.' },
        { num: '10.3', title: 'Reading: Digital Vs Satellite Television', start: 279, desc: 'Comprehending texts on signal transmission, bandwidth, HD resolution, and media literacy.' },
        { num: '10.4', title: 'Vocabulary: Telecommunications, Broadcasting & Media', start: 282, desc: 'Transponder, dish antenna, set-top box, fiber optics, streaming, encryption, bandwidth.' },
        { num: '10.5', title: 'Grammar: Comparative/Contrastive Structures & Future Tenses', start: 285, desc: 'Whereas, while, in contrast to, on the other hand; future continuous and future perfect tenses.' },
        { num: '10.6', title: 'Writing: Compare-and-Contrast Essays', start: 295, desc: 'Block method and point-by-point organization for compare-and-contrast essays.' }
      ]
    }
  ],

  'book-10-it': [
    {
      unit_num: 1,
      title: 'Organization of Files',
      start_page: 1,
      end_page: 35,
      topics: [
        { num: '1.1', title: 'Unit Overview & File Management', start: 1, desc: 'File system hierarchy, directories, root folders, subfolders, and operating system file management.' },
        { num: '1.2', title: 'Storage Drives', start: 4, desc: 'Logical drive letters, partitioning, Hard Disk Drives (HDD), Solid State Drives (SSD), optical drives, USB flash drives, and cloud storage.' },
        { num: '1.3', title: 'File Name Extension', start: 6, desc: 'Identifying file types and default applications via extensions (.docx, .pdf, .xlsx, .pptx, .mp3, .mp4, .jpg, .png, .exe, .zip, .html).' },
        { num: '1.4', title: 'File Directory Structure', start: 9, desc: 'Absolute paths vs relative file paths, directory trees, path separators (\\ vs /), and navigating folders via GUI and Command Prompt.' },
        { num: '1.5', title: 'File Conversion, Importing and Exporting', start: 14, desc: 'Converting document, image, and media formats (e.g., DOCX to PDF, XLSX to CSV) and importing/exporting data across applications.' },
        { num: '1.6', title: 'Saving, Opening, Backup and Recovery', start: 18, desc: 'Save vs Save As, local and cloud backup strategies (3-2-1 rule), system restore points, and file recovery.' },
        { num: '1.7', title: 'File Compression, Deleting and Restoring Files', start: 23, desc: 'Lossless vs lossy compression, archiving (.zip, .rar), disk space optimization, Recycle Bin restoration, and permanent deletion (Shift+Delete).' }
      ]
    },
    {
      unit_num: 2,
      title: 'Computer Network',
      start_page: 36,
      end_page: 80,
      topics: [
        { num: '2.1', title: 'Network Media (Transmission Media)', start: 37, desc: 'Guided (wired) media: UTP/STP twisted-pair (RJ-45), coaxial cable, and fiber-optic cable (single-mode/multi-mode); Unguided (wireless) media: radio waves, microwaves, and infrared.' },
        { num: '2.2', title: 'Telecommunications Network', start: 53, desc: 'Components of telecommunications systems, analog vs digital signals, modulation/demodulation, multiplexing, and bandwidth/throughput.' },
        { num: '2.3', title: 'Mobile Communications', start: 58, desc: 'Principles of wireless mobile communication, Bluetooth, Wi-Fi (IEEE 802.11), hotspots, and mobile computing devices.' },
        { num: '2.4', title: 'Cellular Networks', start: 62, desc: 'Cellular architecture (cells, base transceiver stations, mobile switching centers, handoff) and evolution from 1G, 2G (GSM), 3G, 4G (LTE) to 5G.' },
        { num: '2.5', title: 'Satellite Networks', start: 66, desc: 'Uplink and downlink transponders, Geostationary (GEO), Medium Earth (MEO/GPS), and Low Earth Orbit (LEO) satellite systems.' },
        { num: '2.6', title: 'Internet Protocol (IP) & Data Communications', start: 72, desc: 'TCP/IP protocol suite, IPv4 (32-bit dotted decimal, classes, public vs private) vs IPv6 (128-bit hexadecimal), subnet mask, DNS, and DHCP.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Application Software',
      start_page: 81,
      end_page: 138,
      topics: [
        { num: '3.1', title: 'Unit Overview', start: 81, desc: 'Advanced document publishing, data analysis, and visual presentation in office suites.' },
        { num: '3.2', title: 'Word Processing', start: 82, desc: 'Creating and formatting complex tables, inserting pictures/shapes/SmartArt, section breaks, multi-column layouts, automatic Table of Contents (TOC), citations, and Mail Merge.' },
        { num: '3.3', title: 'Spreadsheet', start: 102, desc: 'Relative ($A1), absolute ($A$1), and mixed cell references; advanced functions (IF, COUNTIF, SUMIF, VLOOKUP, RANK, AND, OR); data sorting, filtering, conditional formatting, and charts.' },
        { num: '3.4', title: 'PowerPoint Presentation', start: 125, desc: 'Slide Master customization, action buttons, hyperlinks, embedding audio/video, animation pane timing, rehearsal, and speaker notes.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Image Processing and Multimedia',
      start_page: 139,
      end_page: 181,
      topics: [
        { num: '4.1', title: 'Basics of Multimedia', start: 139, desc: 'Linear vs non-linear (interactive) multimedia, hypertext vs hypermedia, and hardware/software requirements for multimedia systems.' },
        { num: '4.2', title: 'Multimedia File Formats', start: 148, desc: 'Image (JPEG, PNG, GIF, SVG, PSD, TIFF), Audio (MP3, WAV, AAC, OGG), and Video (MP4, AVI, MKV, MOV, WMV) codecs and containers.' },
        { num: '4.3', title: 'Multimedia Production & Authoring Tools', start: 151, desc: 'Stages of multimedia production (planning, design, production, testing, distribution) and card/page, icon, and time-based authoring tools.' },
        { num: '4.4', title: 'Multimedia Editing', start: 157, desc: 'Image editing (layers, masks, curves, healing brush, clone stamp), audio editing (trimming, noise reduction, mixing), and non-linear video editing (timeline, transitions, chroma key).' }
      ]
    },
    {
      unit_num: 5,
      title: 'Information and Computer Security',
      start_page: 182,
      end_page: 203,
      topics: [
        { num: '5.1', title: 'Information and Computer Security & Impact on Society', start: 183, desc: 'National critical infrastructure protection, digital trust, e-banking/e-government security, and societal implications of cyber incidents.' },
        { num: '5.2', title: 'Privacy and Security', start: 185, desc: 'Data privacy vs data security, personally identifiable information (PII), digital footprints, cookies, and data protection rights.' },
        { num: '5.3', title: 'Computer Security Threats', start: 187, desc: 'Advanced malware (ransomware, rootkits, keyloggers, botnets), social engineering (phishing, spear-phishing, pretexting), SQL injection, and Man-in-the-Middle (MitM) attacks.' },
        { num: '5.4', title: 'Threat Prevention Strategies', start: 188, desc: 'Technical controls: encryption (symmetric & public-key), firewalls, Intrusion Detection Systems (IDS), VPNs, patch management, and biometric access control.' },
        { num: '5.5', title: 'Cyber Security', start: 197, desc: 'Cyber defense frameworks, ethical hacking vs black-hat cracking, incident response, and Ethiopian Computer Crime Proclamation.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Fundamentals of Programming',
      start_page: 204,
      end_page: 227,
      topics: [
        { num: '6.1', title: 'Basics and Definition of Algorithm', start: 204, desc: 'Role of algorithms in computer science, translating real-world logic into unambiguous computational instructions.' },
        { num: '6.2', title: 'Characteristics of Algorithm', start: 207, desc: 'Finiteness, definiteness (unambiguity), input, output, effectiveness, and generality of a valid algorithm.' },
        { num: '6.3', title: 'Algorithm Representation', start: 210, desc: 'Representing algorithms using structured Pseudocode and standard Flowcharts for sequence, selection (IF-ELSE), and iteration (WHILE, FOR) problems; trace tables.' },
        { num: '6.4', title: 'Integrated Development Environment (IDE)', start: 218, desc: 'Components of an IDE (source code editor, compiler vs interpreter, debugger, build automation, console) and writing/executing basic programs.' }
      ]
    }
  ],

  'book-10-geog': [
    {
      unit_num: 1,
      title: 'Landforms of Africa',
      start_page: 1,
      end_page: 24,
      topics: [
        { num: '1.1', title: 'Overview of the World\'s Major Landforms', start: 2, desc: 'Endogenic (tectonic folding, faulting, volcanism) and exogenic (weathering, erosion, deposition) processes; mountains, plateaus, and plains.' },
        { num: '1.2', title: 'Location and Related Features of Africa', start: 7, desc: 'Astronomical (37°21\'N to 34°52\'S, 17°33\'W to 51°28\'E) and relative location of Africa, compactness, coastline, and area (30.37 million km²).' },
        { num: '1.3', title: 'Major Landforms of Africa', start: 8, desc: 'Atlas Mountains, Sahara Desert, Sahel, Sudanian Savanna, African Massif, East African Rift System & Highlands, and Southern Africa Platform (Drakensberg, Kalahari, Namib).' }
      ]
    },
    {
      unit_num: 2,
      title: 'Climate of Africa',
      start_page: 25,
      end_page: 50,
      topics: [
        { num: '2.1', title: 'Overview of World Climatic Regions and Types', start: 26, desc: 'Global climate classification schemes (ancient Greek torrid/temperate/frigid and Köppen empirical classification system).' },
        { num: '2.2', title: 'Climate Types and Zones of Africa', start: 32, desc: 'Controls of African climate (latitude/ITCZ, ocean currents, altitude, continentality) and the 7 climate zones: Equatorial, Tropical Wet-and-Dry (Savanna), Semi-arid (Sahel), Hot Desert, Mediterranean, Humid Subtropical, and Highland.' },
        { num: '2.3', title: 'Benefits of Climate for Life of People of Africa', start: 41, desc: 'Solar/wind/hydro energy potential, diverse agro-climatic zones, bimodal rainfall, and wildlife tourism.' },
        { num: '2.4', title: 'Climate Change and Its Challenges to Africa\'s Development Vision', start: 44, desc: 'Vulnerability of African rain-fed agriculture, recurrent droughts in the Horn and Sahel, desertification, and adaptation/mitigation strategies.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Natural Resource Base of Africa',
      start_page: 51,
      end_page: 86,
      topics: [
        { num: '3.1', title: 'Overview of Major Natural Resources of the World', start: 52, desc: 'Renewable vs non-renewable resources and sustainable resource management.' },
        { num: '3.2', title: 'Major Drainage and Water Resources in Africa', start: 58, desc: 'Major rivers (Nile, Congo, Niger, Zambezi, Orange, Limpopo), Rift Valley & Victoria lakes, swamps (Sudd, Okavango, Chad), and hydro-power dams (GERD, Aswan, Kariba, Inga, Akosombo).' },
        { num: '3.3', title: 'Main Types of Soils and Mineral Resources in Africa', start: 66, desc: 'African soil groups (Ferralsols, Arenosols, Lixisols, Nitisols, Vertisols, Calcisols) and strategic mineral wealth (gold, diamonds, cobalt, platinum, copper, bauxite, petroleum).' },
        { num: '3.4', title: 'Major Vegetation and Wildlife of Africa', start: 73, desc: 'Tropical rainforest, savanna (parkland, acacia, scrub), desert xerophytes, Mediterranean maquis, Afro-montane vegetation, rich megafauna, and conservation challenges (poaching, deforestation).' }
      ]
    },
    {
      unit_num: 4,
      title: 'Population of Africa',
      start_page: 87,
      end_page: 118,
      topics: [
        { num: '4.1', title: 'Overview of World Population Growth and Size', start: 88, desc: 'Global demographic growth trends, doubling time, and regional population shares.' },
        { num: '4.2', title: 'Africa\'s Major Demographic Trends', start: 96, desc: 'High fertility and birth rates, declining mortality, rapid natural increase, infant mortality rate, and life expectancy in Africa.' },
        { num: '4.3', title: 'Population Structure', start: 107, desc: 'Broad-based youthful age-sex pyramid of Africa, high youth dependency ratio, sex ratio, and demographic dividend potential.' },
        { num: '4.4', title: 'Distribution and Density of Africa\'s Population', start: 112, desc: 'Densely populated regions (Nile Valley, West African coast, East African Highlands) vs sparsely populated deserts and rainforest basins.' },
        { num: '4.5', title: 'Urban and Rural Settlement Patterns in Africa', start: 113, desc: 'Rural agrarian Dominance vs rapid urbanization rate, primate cities, informal settlements, and urban infrastructure.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Major Economic and Cultural Activities of Africa',
      start_page: 119,
      end_page: 144,
      topics: [
        { num: '5.1', title: 'Overview of Employment Structure in the World', start: 121, desc: 'Primary, secondary, tertiary, and quaternary economic sectors across developed and developing nations.' },
        { num: '5.2', title: 'Major Economic Activities in Africa', start: 124, desc: 'Subsistence vs plantation agriculture (cocoa, coffee, tea, cotton, palm oil), pastoralism, forestry, fishing, mining, and nascent manufacturing.' },
        { num: '5.3', title: 'Possible Solutions to the Problem of Unemployment', start: 129, desc: 'Youth unemployment in Africa, TVET skill development, entrepreneurship, agro-processing industrialization, and digital jobs.' },
        { num: '5.4', title: 'Africa\'s Agenda 2063 and Its Implications', start: 132, desc: 'The African Union\'s 50-year strategic framework ("The Africa We Want"), flagship projects, and AfCFTA continental free trade.' },
        { num: '5.5', title: 'Africa\'s Agenda 2063 Vis-À-Vis Sustainable Development Goals (SDGs)', start: 135, desc: 'Alignment between AU Agenda 2063 aspirations and the UN 2030 Sustainable Development Goals.' },
        { num: '5.6', title: 'Linguistic and Religious Diversity in Africa', start: 139, desc: 'Afro-Asiatic, Niger-Congo, Nilo-Saharan, and Khoisan language families; indigenous beliefs, Islam, and Christianity in Africa.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Human – Natural Environment Interactions',
      start_page: 145,
      end_page: 158,
      topics: [
        { num: '6.1', title: 'Overview of Global Population Change', start: 146, desc: 'Population growth pressures on global land, water, energy, and ecological carrying capacity.' },
        { num: '6.2', title: 'Human-Environment Relationship', start: 149, desc: 'Environmental determinism, possibilism, and human modification of landscapes (overgrazing, deforestation, pollution, irrigation).' },
        { num: '6.3', title: 'Indigenous Knowledge in Conservation of Natural Resources in Africa', start: 154, desc: 'Traditional African agroforestry, Konso terracing, sacred groves, rotational pastoralism, and water harvesting.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Geographic Issues and Public Concerns in Africa',
      start_page: 159,
      end_page: 174,
      topics: [
        { num: '7.1', title: 'Unplanned Urbanization', start: 161, desc: 'Causes and consequences of rapid unplanned urban sprawl: slums, sanitation deficits, traffic congestion, unemployment, and urban planning remedies.' },
        { num: '7.2', title: 'Migration – Factors and Impacts on Africa', start: 167, desc: 'Internal displacement, rural-urban migration, trans-Mediterranean and Red Sea irregular migration routes, brain drain, and remittances.' },
        { num: '7.3', title: 'Coastal Pollution in Africa', start: 168, desc: 'Oil spills (Niger Delta), plastic waste, untreated sewage, industrial effluent, mangrove destruction, and marine ecosystem protection.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Geospatial Information and Data Processing',
      start_page: 175,
      end_page: 208,
      topics: [
        { num: '8.1', title: 'Basic Concepts of Geospatial Information', start: 176, desc: 'Spatial vs attribute data, georeferencing, coordinates, and importance of geospatial intelligence.' },
        { num: '8.2', title: 'Sources and Tools of Geographic Data', start: 180, desc: 'Field surveys, census, aerial photography, satellite remote sensing, Global Positioning System (GPS), and GIS software.' },
        { num: '8.3', title: 'Geographic Data Representations', start: 184, desc: 'Vector data model (points, lines, polygons) vs Raster data model (grid cells/pixels), qualitative and quantitative thematic maps.' },
        { num: '8.4', title: 'Advances in Mapmaking and the Birth of GIS', start: 188, desc: 'Evolution from manual cartography to digital Geographic Information Systems (hardware, software, data, people, methods) and layer overlay analysis.' },
        { num: '8.5', title: 'Making and Interpretation of Graphs, Charts and Diagrams', start: 197, desc: 'Constructing and analyzing climographs (temperature-rainfall), line graphs, bar graphs, pie charts, and population pyramids.' }
      ]
    }
  ],

  'book-10-amh': [
    {
      unit_num: 1,
      title: 'ቋንቋና ማህበረሰብ (Language and Society)',
      start_page: 1,
      end_page: 13,
      topics: [
        { num: '1.1', title: 'የቋንቋና የማህበረሰብ ቁርኝት (ዳመና፣ ቀለምና የቋንቋ አገልግሎት)', start: 1, desc: 'ቋንቋ ማህበራዊ ማንነትን፣ ባህልንና እሴትን በመግለጽ ረገድ ያለው ሚና።' },
        { num: '1.2', title: 'የቃላት አውዳዊ ፍቺ እና የቃላት ምስረታ (ቅጥያዎች)', start: 5, desc: 'ነጻና ጥገኛ ምዕላዶች፣ እርባታዊና መስራች ቅጥያዎች በአማርኛ ቃላት አወቃቀር።' },
        { num: '1.3', title: 'የአንቀጽ አወቃቀርና የሀሳብ አደረጃጀት', start: 10, desc: 'ኃይለ-ቃል (መሪ አረፍተ-ነገር)፣ መዘርዝር አረፍተ-ነገሮች እና የአንቀጽ ውህደት።' }
      ]
    },
    {
      unit_num: 2,
      title: 'ባህላዊ ጋብቻ (Traditional Marriage)',
      start_page: 14,
      end_page: 30,
      topics: [
        { num: '2.1', title: 'የባህላዊ ጋብቻ ስርዓቶችና ማህበራዊ ፋይዳቸው', start: 14, desc: 'በኢትዮጵያ የተለያዩ ማህበረሰቦች የሚከናወኑ ባህላዊ የጋብቻ ስርዓቶች፣ ሽምግልና እና ቃል-ኪዳን።' },
        { num: '2.2', title: 'ፈሊጣዊ አነጋገሮችና ምሳሌያዊ አባባሎች', start: 20, desc: 'ከጋብቻና ማህበራዊ ህይወት ጋር የተያያዙ ፈሊጦች፣ ምሳሌያዊ አነጋገሮች እና ቃላዊ ግጥሞች።' },
        { num: '2.3', title: 'የስምና የቅጽል ሐረጎች አወቃቀር', start: 25, desc: 'ስማዊ ሐረግ፣ ቅጽላዊ ሐረግ፣ መሪና ተከታይ (መስተፃምራዊ) አካላት ትንተና።' }
      ]
    },
    {
      unit_num: 3,
      title: 'ሴቶች እና እድገት (Women and Development)',
      start_page: 31,
      end_page: 47,
      topics: [
        { num: '3.1', title: 'የሴቶች ሁለንተናዊ ተሳትፎ በሀገር እድገት', start: 31, desc: 'ሴቶች በኢኮኖሚ፣ በፖለቲካ፣ በሳይንስና በማህበራዊ ልማት ያላቸው ጉልህ አስተዋጽኦ።' },
        { num: '3.2', title: 'የክርክርና የውይይት መርሆዎች', start: 37, desc: 'በመረጃ የተደገፈ ክርክር ማቅረብ፣ የሌሎችን ሀሳብ ማዳመጥና በምክንያት ማስተባበል።' },
        { num: '3.3', title: 'ግሳዊ ሐረግና የአረፍተ-ነገር ስምምነት', start: 42, desc: 'የግሳዊ ሐረግ አركን፣ ባለቤትና ማሰሪያ አንቀጽ በፆታ፣ በቁጥርና በመደብ መስማማት።' }
      ]
    },
    {
      unit_num: 4,
      title: 'በልዩነት ውስጥ ያለ አንድነት (Unity in Diversity)',
      start_page: 48,
      end_page: 65,
      topics: [
        { num: '4.1', title: 'የብዝኃነት ውበትና ሀገራዊ አንድነት በኢትዮጵያ', start: 48, desc: 'የባህል፣ የቋንቋና የታሪክ ትስስር ለጠንካራ ሀገራዊ አንድነት ያለው ፋይዳ።' },
        { num: '4.2', title: 'አመዛዛኝና አስረጂ ድርሰት አፃፃፍ', start: 54, desc: 'የድርሰት ቢጋር (አስተዋጽኦ) ማዘጋጀት፣ መግቢያ፣ ሐተታና መደምደሚያ።' },
        { num: '4.3', title: 'ነጠላና ውስብስብ (ድብልቅ) አረፍተ-ነገሮች', start: 60, desc: 'ነጻና ጥገኛ አንቀጾችን በአያያዥ ቃላትና ምዕላዶች በማቀናጀት ውስብስብ አረፍተ-ነገር መመስረት።' }
      ]
    },
    {
      unit_num: 5,
      title: 'የቋንቋ ለዛ (Beauty and Expressiveness of Language)',
      start_page: 66,
      end_page: 84,
      topics: [
        { num: '5.1', title: 'የቋንቋ ለዛ፣ ቅኔና የዘይቤ አጠቃቀም', start: 66, desc: 'ሰምና ወርቅ፣ ተነጻጻሪ፣ ተለዋጭ፣ ሰውኛ፣ ግነት እና ምጸት ዘይቤዎች።' },
        { num: '5.2', title: 'የግጥም ሙዚቃዊነት፣ ምጣኔና የቤት አመታት', start: 73, desc: 'ስንኝ፣ ሐረግ፣ አርኬ፣ ቀለም፣ የቤት መድፊያ ድምፆችና የግጥም ትንተና።' },
        { num: '5.3', title: 'ተراد (ተመሳሳይ) እና ተቃራኒ ቃላት በዐውድ', start: 79, desc: 'የቃላት እማሬያዊና ፍካሬያዊ ፍቺዎች፣ አውዳዊ ተመሳሳይነትና ተቃራኒነት።' }
      ]
    },
    {
      unit_num: 6,
      title: 'የታላላቆች ሚና (The Role of Great Figures and Elders)',
      start_page: 85,
      end_page: 100,
      topics: [
        { num: '6.1', title: 'የሀገር ባለውለታዎችና የታላላቆች ምክር', start: 85, desc: 'የታሪክ፣ የጥበብና የሳይንስ ታላላቅ ሰዎች የህይወት ተሞክሮና ለትውልድ ያስተላለፉት ቅርስ።' },
        { num: '6.2', title: 'የህይወት ታሪክ (ግለ-ታሪክ እና ታሪከ-ህይወት) አፃፃፍ', start: 91, desc: 'የራስን የህይወት ታሪክና የሌሎች ታዋቂ ሰዎችን የህይወት ታሪክ በቅደም-ተከተል መጻፍ።' },
        { num: '6.3', title: 'አድራጊና ተገብሮ ግሶች እንዲሁም ቀጥተኛና ኢ-ቀጥተኛ ንግግር', start: 96, desc: 'የድርጊትና የተገብሮ አረፍተ-ነገሮች ቅየራ እና የተናጋሪ ንግግርን ሪፖርት ማድረግ።' }
      ]
    },
    {
      unit_num: 7,
      title: 'ረጅም ልቦለድ (The Novel / Extended Fiction)',
      start_page: 101,
      end_page: 117,
      topics: [
        { num: '7.1', title: 'የረጅም ልቦለድ ምንነትና አላባውያን (Elements of a Novel)', start: 101, desc: 'መቼት፣ ገፀ-ባህሪያት፣ ሴራ (ትልም)፣ ግጭት፣ አንጻር (Point of view) እና ጭብጥ።' },
        { num: '7.2', title: 'የልቦለድ ቅንጭብ ንባብና ሂሳዊ ትንተና', start: 107, desc: 'ከታዋቂ የአማርኛ ረጅም ልቦለዶች የተወሰዱ ቅንጭቦችን በማንበብ የገፀ-ባህሪያትን ስነ-ልቦና መተንተን።' },
        { num: '7.3', title: 'የልቦለድ ስነ-ፅሁፋዊ ዘዴዎች (ምልሰት፣ ትንቢት፣ ምናባዊ ስዕል)', start: 113, desc: 'ደራሲያን ታሪክን ለማዋቀር የሚጠቀሙባቸው የምልሰት፣ የትንቢትና የገለጻ ስልቶች።' }
      ]
    },
    {
      unit_num: 8,
      title: 'ማህበራዊ መገናኛ ብዙኀን (Social Media)',
      start_page: 118,
      end_page: 136,
      topics: [
        { num: '8.1', title: 'የማህበራዊ መገናኛ ብዙኀን ጠቀሜታና ስነ-ምግባራዊ ፈተናዎች', start: 118, desc: 'ፈጣን መረጃ ልውውጥ፣ የሐሰት መረጃ (Fake News) ስርጭትን መከላከል እና ዲጂታል ጨዋነት።' },
        { num: '8.2', title: 'መደበኛ ደብዳቤ፣ ማመልከቻና ቃለ-ጉባኤ አፃፃፍ', start: 125, desc: 'የመስሪያ ቤት ደብዳቤ ቅርጽ፣ የስራ ማመልከቻ እና የስብሰባ ቃለ-ጉባኤ አዘገጃጀት።' },
        { num: '8.3', title: 'የስርዓተ-ነጥብ አጠቃቀምና የውሰት ቃላት አፃፃፍ', start: 131, desc: 'የአማርኛ ስርዓተ-ነጥቦች ህግጋት እና የቴክኖሎጂ ቃላትን በአማርኛ የመተርጎም ስልቶች።' }
      ]
    },
    {
      unit_num: 9,
      title: 'ሥራ ፈጠራ (Entrepreneurship)',
      start_page: 137,
      end_page: 159,
      topics: [
        { num: '9.1', title: 'የሥራ ፈጠራ ክህሎት፣ ታታሪነትና የቁጠባ ባህል', start: 137, desc: 'አዳዲስ የሥራ እድሎችን መፍጠር፣ ጊዜንና ገንዘብን በአግባቡ መምራት እና የሥራ ክቡርነት።' },
        { num: '9.2', title: 'የጥናት ሪፖርት አዘገጃጀትና የቃል አቀራረብ', start: 145, desc: 'መረጃ መሰብሰብ፣ ማደራጀት፣ የጥናት ሪፖርት መጻፍ እና በጉባኤ ፊት በንግግር ማቅረብ።' },
        { num: '9.3', title: 'አጠቃላይ የሰዋሰው፣ የቃላትና የድርሰት ክለሳ', start: 152, desc: 'የ10ኛ ክፍል የአማርኛ ቋንቋ ትምህርት አብይ ርዕሶች ማጠቃለያና የፈተና ዝግጅት።' }
      ]
    }
  ],

  'book-10-civ': [
    {
      unit_num: 1,
      title: 'Democracy and Democratization',
      start_page: 1,
      end_page: 23,
      topics: [
        { num: '1.1', title: 'The Concept of Democracy and Democratization', start: 2, desc: 'Etymology (demos + kratos), direct vs indirect (representative) democracy, and democratization as a transition to democratic rule.' },
        { num: '1.2', title: 'Definitions and Actors of Democratization Process', start: 4, desc: 'Roles of political parties, civil society organizations (CSOs), independent media, interest groups, and citizens.' },
        { num: '1.3', title: 'Institutionalizing Democracy', start: 8, desc: 'Democratic institutions: independent electoral board, parliament, independent judiciary, ombudsman, and human rights commission.' },
        { num: '1.4', title: 'The Role of Democracy for Social Transformation', start: 13, desc: 'Promoting social justice, peaceful conflict resolution, inclusive economic development, and equality.' },
        { num: '1.5', title: 'Democratic Values', start: 17, desc: 'Liberty, equality, justice, tolerance, pluralism, popular sovereignty, and rule of law.' },
        { num: '1.6', title: 'Aspects of Democracy', start: 19, desc: 'Social, economic, and political aspects of substantive vs procedural democracy.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Citizens in the Digital Technology Age',
      start_page: 24,
      end_page: 56,
      topics: [
        { num: '2.1', title: 'Implications of Digital Technology on Citizens', start: 25, desc: 'How digital media reshapes emotional wellbeing, social relationships, ethical norms, and economic opportunities.' },
        { num: '2.2', title: 'The Ethics of Using Digital Technology', start: 45, desc: 'Netiquette, digital responsibility, respecting intellectual property, data privacy, and truthfulness online.' },
        { num: '2.3', title: 'Opportunities of Digital Technology for Young Citizens', start: 48, desc: 'E-learning, global collaboration, digital entrepreneurship, innovation, and civic participation.' },
        { num: '2.4', title: 'Impacts of Unethical Use of Digital Technology on Young Citizens', start: 51, desc: 'Cyberbullying, online hate speech, misinformation/disinformation, identity theft, and screen addiction.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Understanding Good Governance',
      start_page: 57,
      end_page: 79,
      topics: [
        { num: '3.1', title: 'The Concept of Good Governance', start: 58, desc: 'Definition of governance vs good governance in public administration and service delivery.' },
        { num: '3.2', title: 'Elements of Good Governance', start: 60, desc: 'Accountability, transparency, rule of law, responsiveness, equity and inclusiveness, effectiveness/efficiency, participation, and consensus orientation.' },
        { num: '3.3', title: 'The Role of Good Governance', start: 64, desc: 'Economic prosperity, political stability, public trust, and social cohesion.' },
        { num: '3.4', title: 'Challenges for Good Governance', start: 68, desc: 'Corruption, rent-seeking, nepotism, weak institutional capacity, and lack of public awareness.' },
        { num: '3.5', title: 'Impacts of Lack of Good Governance', start: 70, desc: 'Poverty, inequality, human rights violations, brain drain, and civil unrest.' },
        { num: '3.6', title: 'Understanding and Fighting Corruption', start: 72, desc: 'Forms of corruption (bribery, embezzlement, nepotism, abuse of power) and preventive/legal mechanisms.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Peace and Indigenous Conflict Resolution Mechanisms',
      start_page: 80,
      end_page: 100,
      topics: [
        { num: '4.1', title: 'The Concepts of Peace', start: 81, desc: 'Internal vs external peace; Johan Galtung\'s Negative Peace (absence of direct violence) vs Positive Peace (presence of social justice and harmony).' },
        { num: '4.2', title: 'Impacts of Absence of Peace', start: 86, desc: 'Humanitarian displacement, destruction of infrastructure, economic collapse, and psychological trauma.' },
        { num: '4.3', title: 'The Notion of Peace Building', start: 89, desc: 'Conflict prevention, peacekeeping, peacemaking, reconciliation, and post-conflict reconstruction.' },
        { num: '4.4', title: 'Indigenous Conflict Resolution Mechanisms', start: 91, desc: 'Ethiopian customary reconciliation institutions: Shimgellina, Jaarsummaa, Abo-Gereb, Mada\'a, Yajoka, and Kanchi.' },
        { num: '4.5', title: 'The Roles of Indigenous Social Institutions in Ensuring Sustainable Peace', start: 95, desc: 'Restorative justice, repairing community relationships, elder mediation, and consensus building.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Federalism in Ethiopia',
      start_page: 101,
      end_page: 124,
      topics: [
        { num: '5.1', title: 'The Meaning of Federalism', start: 102, desc: 'Constitutional division of sovereignty between a central federal government and regional constituent states.' },
        { num: '5.2', title: 'Types of Federalism', start: 104, desc: 'Coming-together vs Holding-together federalism; Dual vs Cooperative federalism; Symmetric vs Asymmetric federalism.' },
        { num: '5.3', title: 'Key Features of Federalism', start: 108, desc: 'Written supreme constitution, division of powers (exclusive, concurrent, residual), bicameralism, and constitutionalumpire (House of Federation).' },
        { num: '5.4', title: 'Advantage and Disadvantage of Federalism', start: 111, desc: 'Accommodating diversity, local self-rule, and administrative proximity vs duplication of costs and jurisdictional disputes.' },
        { num: '5.5', title: 'The Roles of Federalism in Accommodating Diversity in Ethiopia', start: 116, desc: 'Self-rule and shared-rule under the 1995 FDRE Constitution, linguistic/cultural rights, and maintaining national unity.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Human Rights',
      start_page: 125,
      end_page: 139,
      topics: [
        { num: '6.1', title: 'The Concept of Human Right', start: 126, desc: 'Universal, inalienable, indivisible, and interdependent nature of human rights; generations of rights (civil/political, socio-economic, solidarity).' },
        { num: '6.2', title: 'Citizens and State Obligations in Realizing Human Rights', start: 132, desc: 'State obligations to Respect, Protect, and Fulfill human rights, and citizens\' duty to respect the rights of others.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Patriotism',
      start_page: 140,
      end_page: 164,
      topics: [
        { num: '7.1', title: 'The Meaning of Patriotism', start: 141, desc: 'Devotion to the welfare, constitutional values, and sustainable progress of one\'s country.' },
        { num: '7.2', title: 'Types of Patriotism', start: 143, desc: 'Traditional (military defense of territorial integrity) vs Modern/Constitutional patriotism (upholding democracy, human rights, tolerance, and development).' },
        { num: '7.3', title: 'The Bases of Patriotism', start: 147, desc: 'Equality of citizens, justice, constitutionalism, shared historical pride, and concern for the common good.' },
        { num: '7.4', title: 'The Importance of Patriotism', start: 151, desc: 'National sovereignty, fighting poverty and corruption, volunteerism, and national cohesion.' },
        { num: '7.5', title: 'Duties Expected of Patriots', start: 156, desc: 'Paying taxes honestly, protecting public property and the environment, defending the constitution, and ethical whistleblowing.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Globalization and Global Issues',
      start_page: 165,
      end_page: 194,
      topics: [
        { num: '8.1', title: 'The Meaning of Globalization', start: 166, desc: 'Economic, political, technological, and cultural interconnectedness and interdependence across the globe.' },
        { num: '8.2', title: 'Advantages and Disadvantages of Globalization', start: 168, desc: 'Technology transfer, trade expansion, and information access vs cultural erosion, brain drain, and unequal trade terms for developing nations.' },
        { num: '8.3', title: 'Fighting the Negative Impact of Globalization', start: 175, desc: 'Preserving indigenous cultural values, strengthening domestic production, regional integration (AU, AfCFTA), and selective technological adoption.' },
        { num: '8.4', title: 'Major Global Issues', start: 181, desc: 'Climate change, global terrorism, nuclear proliferation, pandemics, refugee crises, and global poverty.' }
      ]
    }
  ],

  'book-10-hist': [
    {
      unit_num: 1,
      title: 'Development of Capitalism and Nationalism 1815–1914',
      start_page: 1,
      end_page: 23,
      topics: [
        { num: '1.1', title: 'Features of Capitalism', start: 2, desc: 'Private ownership of means of production, free market competition, profit motive, wage labor, and Second Industrial Revolution (steel, electricity, chemicals, petroleum).' },
        { num: '1.2', title: 'Features of Nationalism and Formation of Nation States', start: 5, desc: 'Factors promoting 19th-century nationalism: shared language, history, culture, territory, and reaction against Napoleonic/dynastic rule.' },
        { num: '1.3', title: 'Unification of Italy', start: 6, desc: 'Risorgimento leaders: Giuseppe Mazzini (Young Italy), Count Camillo di Cavour (Piedmont-Sardinia diplomacy), Giuseppe Garibaldi (Red Shirts), and King Victor Emmanuel II (1861–1870).' },
        { num: '1.4', title: 'Unification of Germany', start: 12, desc: 'Zollverein customs union, Otto von Bismarck\'s "Blood and Iron" Realpolitik, Danish War (1864), Austro-Prussian War (1866), and Franco-Prussian War (1870–71).' },
        { num: '1.5', title: 'The American Civil War (1861–1865)', start: 16, desc: 'Conflict between industrial North (Union) and plantation slave-owning South (Confederacy); Abraham Lincoln, Homestead Act, Emancipation Proclamation (1863), and 13th/14th/15th Amendments.' },
        { num: '1.6', title: 'Nationalism and the "Eastern Question"', start: 19, desc: 'Decline of the Ottoman Empire ("Sick Man of Europe"), Balkan nationalist uprisings (Greece, Serbia, Bulgaria, Romania), Crimean War, and Balkan Wars (1912–1913).' }
      ]
    },
    {
      unit_num: 2,
      title: 'Africa & the Colonial Experience (1880s–1960s)',
      start_page: 24,
      end_page: 43,
      topics: [
        { num: '2.1', title: 'General Background to Colonialism', start: 24, desc: 'Transition from "legitimate trade" and coastal outposts to full-scale imperial partition of Africa.' },
        { num: '2.2', title: 'The Motives of European Colonialism', start: 28, desc: 'Economic demand for raw materials, captive markets, investment outlets, strategic waterways (Suez Canal), and "Civilizing Mission" ideology.' },
        { num: '2.3', title: 'Scramble for Africa and the Berlin Conference (1884–1885)', start: 30, desc: 'King Leopold II in Congo, Anglo-French rivalry, Otto von Bismarck, and the Berlin Conference "Principle of Effective Occupation".' },
        { num: '2.4', title: 'Colonial Policies and Administration', start: 33, desc: 'Company Rule, British Indirect Rule (Lord Lugard), French Direct Rule (Assimilation and Association), Settler Rule, and Divide-and-Rule.' },
        { num: '2.5', title: 'Early African Resistance Movements Against Colonialism', start: 36, desc: 'Samori Toure (Mandinka Empire), Ashanti resistance (Yaa Asantewaa), Maji-Maji Rebellion (Tanganyika), Urabi Pasha (Egypt), Mahdist Sudan, and Herero-Nama uprising.' },
        { num: '2.6', title: 'Impacts of Colonial Rule on Africa', start: 39, desc: 'Arbitrary borders, loss of sovereignty, monocrop cash-crop dependency, land alienation, and infrastructure built solely for resource extraction.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Social, Economic & Political Developments in Ethiopia Mid-19th C. to 1941',
      start_page: 44,
      end_page: 80,
      topics: [
        { num: '3.1', title: 'Long Distance Trade & Cottage Industry in Ethiopia in the 19th Century', start: 45, desc: 'Jabarti and Afqala merchants, trade routes linking Bonga/Jimma to Massawa, Zeila, Berbera, and Metemma; Maria Theresa Thaler and amole salt bars; cottage crafts (smithing, weaving, pottery, tanning).' },
        { num: '3.2', title: 'The Making of the Modern Ethiopian State 1855–1913', start: 49, desc: 'Emperor Tewodros II (ending Zemene-Mesafint, Gafat Sebastopol, Maqdala 1868), Tekle Giyorgis II, Yohannes IV (Liche Agreement 1878, Boru Meda Council), and Menelik II (territorial incorporation, founding of Addis Ababa 1886, modernization, 1907 Ministerial Cabinet).' },
        { num: '3.3', title: 'External Aggressions and the Struggle for the Defense of National Sovereignty, 1871–1896', start: 58, desc: 'Egyptian invasions defeated at Gundet (1875) and Gura (1876); Hewett (Adwa) Treaty (1884); Mahdist battles (Kufit, Metemma 1889); Italian encroachment, Dogali (1887), Treaty of Wuchale (Article XVII), and the historic Victory of Adwa (March 1, 1896).' },
        { num: '3.4', title: 'Inception of Power Struggle Among the Ruling Elites, 1906–1935', start: 65, desc: 'Empress Taytu Bitul, Lij Iyasu\'s reforms, 1916 coup and Battle of Segele, Dual Rule (Diarchy) of Empress Zewditu and Regent Ras Tafari Makonnen, and coronation of Emperor Haile Selassie I (1930) & 1931 Constitution.' },
        { num: '3.5', title: 'Fascist Italian Aggression and Patriotic Resistance (1935–1941)', start: 69, desc: 'Walwal Incident (1934), Northern and Southern Fronts (Amba Aradom, Tembien, Maychew, Qorahe, Genale Dorya), Italian East Africa (AOI), Graziani Massacre (Yekatit 12, 1937), Black Lions, Abune Petros, Patriots (Arbegnoch) & Women Patriots, and 1941 Liberation Campaign (Gideon Force).' }
      ]
    },
    {
      unit_num: 4,
      title: 'Society and Politics in the Age of World Wars 1914–1945',
      start_page: 81,
      end_page: 110,
      topics: [
        { num: '4.1', title: 'The First World War: Causes, Course and the Consequence (1914–1918)', start: 82, desc: 'MAIN causes (Militarism, Alliances: Triple Entente vs Triple Alliance, Imperialism, Nationalism), Sarajevo assassination, Western/Eastern fronts, US entry, and Treaty of Versailles (1919).' },
        { num: '4.2', title: 'The October 1917 Russian Revolution: Cause, Course and Results', start: 91, desc: 'Tsarist autocracy, 1905 Revolution, February 1917 Revolution, Vladimir Lenin and the Bolsheviks ("Peace, Land, and Bread"), October Revolution, Civil War (Reds vs Whites), NEP, and Stalin\'s Five-Year Plans.' },
        { num: '4.3', title: 'The League of Nations & the Worldwide Economic Crisis', start: 96, desc: 'Structure and weaknesses of the League of Nations; the 1929 Wall Street Crash and the Great Depression.' },
        { num: '4.4', title: 'The Rise of Fascism in Italy, Nazism in Germany and Militarism in Japan', start: 99, desc: 'Benito Mussolini\'s March on Rome (1922), Adolf Hitler\'s Nazi regime (1933), and Japanese militarist expansion into Manchuria (1931) and China (1937).' },
        { num: '4.5', title: 'The Second World War: 1939–45', start: 104, desc: 'Appeasement (Munich Agreement), invasion of Poland (Sept 1, 1939), Axis vs Allies, Battle of Britain, Operation Barbarossa, Pearl Harbor, Stalingrad, El Alamein, D-Day, the Holocaust, and Hiroshima/Nagasaki.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Global and Regional Developments Since 1945',
      start_page: 111,
      end_page: 143,
      topics: [
        { num: '5.1', title: 'The United Nations Organization: Formation, Mission, Principles and Achievements', start: 112, desc: 'San Francisco Conference (1945), General Assembly, Security Council (5 permanent veto members), Secretariat, ICJ, and specialized agencies (WHO, UNESCO, UNICEF).' },
        { num: '5.2', title: 'The Rise of the Superpowers and the Beginning of the Cold War', start: 117, desc: 'US-Soviet ideological rivalry, Iron Curtain, Truman Doctrine, Marshall Plan, Berlin Blockade, NATO (1949) vs Warsaw Pact (1955), arms race, space race, and Cuban Missile Crisis (1962).' },
        { num: '5.3', title: 'Situations in Asia During the Cold War: Japan, Korea, China, Vietnam', start: 128, desc: 'Post-WWII reconstruction of Japan, 1949 Chinese Revolution (Mao Zedong), Korean War (1950–53), and Vietnam War (Ho Chi Minh, Dien Bien Phu, US withdrawal 1973–75).' },
        { num: '5.4', title: 'The Non-Aligned Movement (NAM) & the Arab-Israeli Conflict', start: 134, desc: 'Bandung Conference (1955) and Belgrade (1961); Zionism, 1947 UN Partition of Palestine, 1948 War, 1956 Suez Crisis, 1967 Six-Day War, 1973 Yom Kippur War, and Camp David Accords.' },
        { num: '5.5', title: 'The Collapse of the Soviet Union', start: 139, desc: 'Mikhail Gorbachev\'s Glasnost (openness) and Perestroika (restructuring), 1989 fall of the Berlin Wall, and 1991 dissolution of the USSR.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Ethiopia: Internal Developments and External Influences from 1941 to 1991',
      start_page: 144,
      end_page: 169,
      topics: [
        { num: '6.1', title: 'Major Post-Liberation Administrative Reforms & Socio-Economic Conditions', start: 145, desc: 'Anglo-Ethiopian Agreements (1942, 1944), Point Four & Ethio-US alliance (Kagnew Station), 1952 Federation and 1962 union of Eritrea, 1955 Revised Constitution, education expansion (UCAA/HSIU), and feudal land tenure (Gebbar/Chisegna).' },
        { num: '6.2', title: 'Early Opposition Movements Against the Imperial Rule', start: 154, desc: '1943 Woyane Rebellion, 1960 Abortive Coup (Mengistu and Germame Neway), Bale Peasant Rebellion (Waqqo Gutu), Gojjam Peasant Rebellion (1968), Macha-Tulama Association (Tadesse Birru), Eritrean armed struggle, and the Ethiopian Student Movement ("Land to the Tiller").' },
        { num: '6.3', title: 'The Ethiopian Revolution and the Fall of the Monarchy', start: 158, desc: '1973 Wollo famine, February 1974 popular uprisings, formation of the Derg, deposition of Haile Selassie (Sept 12, 1974), Zemacha, 1975 Rural and Urban Land Nationalization Proclamations, and the Red Terror (1977–78).' },
        { num: '6.4', title: 'The Ethio-Somalia War, Question of Eritrea, and the Fall of the Derg', start: 163, desc: '1977–78 Ogaden War (Karamara victory), 1984–85 famine and resettlement/villagization, 1987 PDRE Constitution, Battle of Afabet and Shire, and May 1991 collapse of the Derg regime.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Africa Since 1960',
      start_page: 170,
      end_page: 193,
      topics: [
        { num: '7.1', title: 'Rise of Independent States in Africa', start: 171, desc: 'National liberation across North, West (Kwame Nkrumah in Ghana 1957, Guinea 1958, "Year of Africa" 1960), East (Mau Mau in Kenya, Julius Nyerere in Tanzania), and Lusophone/Southern Africa (Algerian FLN, Angola MPLA, Mozambique FRELIMO, Zimbabwe 1980).' },
        { num: '7.2', title: 'Struggle Against Apartheid, Pan-Africanism and the OAU', start: 179, desc: 'Casablanca vs Monrovia blocs, founding of the Organization of African Unity (OAU) in Addis Ababa (May 25, 1963), transformation into the African Union (AU, 2002), and anti-Apartheid victory in South Africa (ANC, Nelson Mandela, 1994).' },
        { num: '7.3', title: 'Struggle for Economic Independence', start: 186, desc: 'Neo-colonialism, structural adjustment programs, Lagos Plan of Action, NEPAD, and Regional Economic Communities (ECOWAS, COMESA, SADC, EAC, IGAD).' },
        { num: '7.4', title: 'Major Issues in Contemporary Africa', start: 188, desc: 'Military coups, ethnic conflicts (1994 Rwandan genocide), external debt, poverty, HIV/AIDS, climate change, and democratization.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Post-1991 Developments in Ethiopia',
      start_page: 194,
      end_page: 209,
      topics: [
        { num: '8.1', title: 'The Transitional Government of Ethiopia (TGE) and the 1995 Constitution', start: 194, desc: 'July 1991 Peace and Democracy Conference, Transitional Charter, 1993 Eritrean Referendum, and the 1995 FDRE Constitution establishing multinational federalism.' },
        { num: '8.2', title: 'Hydro-Political History of the Nile (Abay) Basin and Development Issues', start: 199, desc: 'Colonial-era 1929 and 1959 Nile treaties excluding Ethiopia, Nile Basin Initiative (NBI), Cooperative Framework Agreement (CFA), and the Grand Ethiopian Renaissance Dam (GERD, launched 2011).' },
        { num: '8.3', title: 'Development Achievements & Challenges of Democratization', start: 204, desc: 'Infrastructure expansion (roads, universities, telecom, railways, industrial parks), poverty reduction, 1998–2000 Ethio-Eritrean War (Algiers Agreement) & 2018 Peace Accord, and ongoing democratization reforms.' }
      ]
    },
    {
      unit_num: 9,
      title: 'Indigenous Knowledge and Heritages of Ethiopia',
      start_page: 210,
      end_page: 238,
      topics: [
        { num: '9.1', title: 'Indigenous Knowledge and Its Role in Sustainable Development', start: 211, desc: 'Characteristics of Ethiopian indigenous knowledge: traditional medicine, weather forecasting, soil/water conservation (Konso terracing), social welfare (Iddir, Iqub, Debo/Jigie), and conflict resolution.' },
        { num: '9.2', title: 'Heritages of Ethiopia', start: 220, desc: 'Tangible and intangible UNESCO World Heritage sites of Ethiopia: Rock-Hewn Churches of Lalibela, Simien Mountains, Fasil Ghebbi, Aksum, Lower Valley of the Awash & Omo, Tiya, Harar Jugol, Konso Cultural Landscape, Bale Mountains, Gedeo Cultural Landscape, Meskel, Fichee-Chambalaalla, Gadaa System, Timket, and Shuwalid.' }
      ]
    }
  ]
};
