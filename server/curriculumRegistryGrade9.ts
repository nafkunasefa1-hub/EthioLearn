import { OfficialUnit } from './curriculumRegistry';

export const GRADE_9_CURRICULUM: Record<string, OfficialUnit[]> = {
  'book-9-bio': [
    {
      unit_num: 1,
      title: 'Introduction to Biology',
      start_page: 1,
      end_page: 20,
      topics: [
        { num: '1.1', title: 'Meaning and Branches of Biology', start: 2, desc: 'Definition of biology, living vs non-living, and core branches (botany, zoology, microbiology, ecology, cytology).' },
        { num: '1.2', title: 'The Scientific Method in Biology', start: 7, desc: 'Observation, posing testable questions, formulating hypotheses, controlled experiments, data collection, and conclusions.' },
        { num: '1.3', title: 'Biological Tools and Laboratory Safety', start: 13, desc: 'Safety rules in laboratory, hazard symbols, dissection kit, test tubes, and chemical reagent handling.' },
        { num: '1.4', title: 'The Light Microscope: Parts, Care and Magnification', start: 17, desc: 'Optical components, mechanical parts, total magnification calculation (eyepiece × objective), and slide preparation.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Characteristics and Classification of Organisms',
      start_page: 21,
      end_page: 45,
      topics: [
        { num: '2.1', title: 'Characteristics of Living Things', start: 22, desc: 'Movement, respiration, sensitivity, growth, reproduction, excretion, and nutrition (MRS GREN).' },
        { num: '2.2', title: 'Taxonomy and Binomial Nomenclature', start: 28, desc: 'Linnaean hierarchy: Kingdom, Phylum, Class, Order, Family, Genus, Species; Latin naming conventions.' },
        { num: '2.3', title: 'The Five-Kingdom Classification System', start: 35, desc: 'Monera, Protista, Fungi, Plantae, and Animalia with distinctive cellular and nutritional features.' },
        { num: '2.4', title: 'Using and Constructing Dichotomous Keys', start: 41, desc: 'Couplets of contrasting observable physical traits used to identify unknown specimen organisms.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Cells',
      start_page: 46,
      end_page: 73,
      topics: [
        { num: '3.1', title: 'The Cell Theory and Discovery of Cells', start: 47, desc: 'Robert Hooke, Anton van Leeuwenhoek, Schleiden and Schwann cell theory postulates.' },
        { num: '3.2', title: 'Structure and Functions of Cell Organelles', start: 52, desc: 'Nucleus, mitochondria, chloroplasts, ribosomes, endoplasmic reticulum, Golgi apparatus, vacuoles, cell membrane, cell wall.' },
        { num: '3.3', title: 'Comparison of Plant and Animal Cells', start: 58, desc: 'Structural distinctions: chloroplasts, large central vacuole, rigid cellulose cell wall, and centrioles.' },
        { num: '3.4', title: 'Movement of Substances across Cell Membranes', start: 63, desc: 'Passive transport (diffusion, facilitated diffusion, osmosis), hypotonic/hypertonic solutions, active transport (ATP).' },
        { num: '3.5', title: 'Cell Specialization and Levels of Organization', start: 68, desc: 'Specialized cells (sperm, egg, red blood cells, guard cells, root hair), tissues, organs, organ systems.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Reproduction',
      start_page: 74,
      end_page: 111,
      topics: [
        { num: '4.1', title: 'Introduction to Reproduction & Asexual Methods', start: 75, desc: 'Binary fission in bacteria, budding in yeast, vegetative propagation in crops (tubers, cuttings), spore formation.' },
        { num: '4.2', title: 'Sexual Reproduction in Flowering Plants (Angiosperms)', start: 84, desc: 'Flower anatomy (stamen, carpel), pollination vectors (wind, insects), double fertilization, seed and fruit formation.' },
        { num: '4.3', title: 'Human Reproductive Anatomy', start: 93, desc: 'Structure and functions of male and female reproductive systems, gamete production (spermatogenesis, oogenesis).' },
        { num: '4.4', title: 'The Menstrual Cycle, Fertilization and Pregnancy', start: 100, desc: 'Hormonal regulation (estrogen, progesterone, LH, FSH), fertilization in oviduct, implantation, placenta function.' },
        { num: '4.5', title: 'Sexually Transmitted Infections (STIs) and Contraception', start: 106, desc: 'Transmission, symptoms, prevention of HIV/AIDS, syphilis, gonorrhea; barrier, hormonal, and traditional family planning methods.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Human Health, Nutrition, and Disease',
      start_page: 112,
      end_page: 140,
      topics: [
        { num: '5.1', title: 'Concepts of Health, Balanced Diet and Pathogens', start: 113, desc: 'WHO definition of health, nutrients, infectious vs non-infectious diseases, pathogenic agents (bacteria, viruses, protozoa, fungi).' },
        { num: '5.2', title: 'Common Infectious Diseases in Ethiopia', start: 120, desc: 'Etiology, transmission cycle, symptoms, treatment, and vector control of Malaria, Tuberculosis, Amoebiasis, and Cholera.' },
        { num: '5.3', title: 'Immunity and Immunization Programs', start: 128, desc: 'Innate vs adaptive immunity, antigens and antibodies, active vs passive immunity, childhood vaccines (EPI).' },
        { num: '5.4', title: 'Personal Hygiene, Sanitation and Clean Water', start: 135, desc: 'Safe waste disposal, pit latrines, water purification methods (boiling, chlorination, filtration) to prevent epidemic outbreaks.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Ecology',
      start_page: 141,
      end_page: 169,
      topics: [
        { num: '6.1', title: 'Ecosystem Components and Habitats', start: 142, desc: 'Biotic factors (plants, animals, microbes) and abiotic factors (sunlight, temperature, soil pH, moisture), habitats and niches.' },
        { num: '6.2', title: 'Food Chains, Food Webs and Trophic Levels', start: 149, desc: 'Primary producers, herbivores, carnivores, omnivores, apex predators, decomposers, and trophic energy loss (10% rule).' },
        { num: '6.3', title: 'Ecological Pyramids and Biogeochemical Cycles', start: 156, desc: 'Pyramids of numbers, biomass, and energy; carbon cycle, nitrogen cycle, and water cycle in maintaining biosphere equilibrium.' },
        { num: '6.4', title: 'Conservation of Natural Resources in Ethiopia', start: 163, desc: 'Reforestation, soil conservation, protected areas (national parks, wildlife reserves), and preserving endemic Ethiopian biodiversity.' }
      ]
    }
  ],

  'book-9-chem': [
    {
      unit_num: 1,
      title: 'Chemistry and Its Importance',
      start_page: 1,
      end_page: 30,
      topics: [
        { num: '1.1', title: 'Definition and Scope of Chemistry', start: 2, desc: 'Chemistry as study of composition, structure, properties, and changes of matter; central role in physical and life sciences.' },
        { num: '1.2', title: 'Chemistry in Industry, Medicine and Agriculture', start: 9, desc: 'Synthetic fertilizers, pharmaceuticals, plastics, soaps, metallurgy, and food preservation in Ethiopia.' },
        { num: '1.3', title: 'The Scientific Method in Chemistry', start: 16, desc: 'Systematic observation, hypothesis formulation, controlled experimentation, law vs theory formulation.' },
        { num: '1.4', title: 'Laboratory Safety, Hazard Symbols and Common Apparatus', start: 23, desc: 'Beakers, flasks, graduated cylinders, Bunsen burners, pipettes, and safe handling of corrosive and toxic chemicals.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Measurements and Scientific Calculations',
      start_page: 31,
      end_page: 64,
      topics: [
        { num: '2.1', title: 'Physical Quantities and the SI System of Units', start: 32, desc: 'Base SI units (meter, kilogram, second, kelvin, mole) and derived units (volume, density, concentration).' },
        { num: '2.2', title: 'Scientific Notation, Metric Prefixes and Precision', start: 40, desc: 'Expressing large/small numbers in exponential form (N × 10ⁿ), mega, kilo, centi, milli, micro, nano prefixes.' },
        { num: '2.3', title: 'Significant Figures and Uncertainty in Measurement', start: 48, desc: 'Rules for counting significant figures, rounding off rules in addition, subtraction, multiplication, and division.' },
        { num: '2.4', title: 'Dimensional Analysis (Factor-Label Method)', start: 56, desc: 'Conversion factors, unit cancellations, density problems (d = m/V), and multi-step metric unit conversions.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Structure of the Atom',
      start_page: 65,
      end_page: 104,
      topics: [
        { num: '3.1', title: 'Historical Development of the Atomic Model', start: 66, desc: 'Dalton atomic theory, Thomson cathode ray experiment and plum pudding model, Rutherford gold foil experiment and nuclear atom.' },
        { num: '3.2', title: 'Subatomic Particles: Protons, Neutrons and Electrons', start: 75, desc: 'Charges, relative masses, and locations of particles within the atomic nucleus and extranuclear cloud.' },
        { num: '3.3', title: 'Atomic Number, Mass Number, and Isotopes', start: 83, desc: 'Z and A notation, calculation of neutrons (A - Z), isotopes of hydrogen, carbon, and chlorine, and calculating relative atomic mass.' },
        { num: '3.4', title: 'Bohr Model and Electron Energy Levels', start: 91, desc: 'Quantized energy shells (K, L, M, N), electron configuration (2n² rule) and sublevels (s, p, d, f) for elements Z = 1 to 20.' },
        { num: '3.5', title: 'Valence Electrons and Electronic Stability', start: 98, desc: 'Outermost shell electrons, Lewis dot symbols, and relationship between electron configuration and chemical reactivity.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Periodic Classification of the Elements',
      start_page: 105,
      end_page: 142,
      topics: [
        { num: '4.1', title: 'Historical Development and the Modern Periodic Law', start: 106, desc: 'Dobereiner triads, Newlands octaves, Mendeleev periodic table vs Moseley modern periodic law based on atomic number.' },
        { num: '4.2', title: 'Periods, Groups, and Blocks of the Periodic Table', start: 114, desc: 'Periods (1-7), Groups (IA-VIIIA and transition elements), s-, p-, d-, and f-blocks; metals, nonmetals, and metalloids.' },
        { num: '4.3', title: 'Periodic Trends: Atomic Radius and Ionic Size', start: 123, desc: 'Effective nuclear charge (Z_eff), electron shielding, atomic radius decrease across a period and increase down a group.' },
        { num: '4.4', title: 'Ionization Energy, Electron Affinity, and Electronegativity', start: 132, desc: 'First ionization energy, electron affinity, Pauling electronegativity scale, and metallic vs nonmetallic character trends.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Chemical Bonding and Intermolecular Forces',
      start_page: 143,
      end_page: 181,
      topics: [
        { num: '5.1', title: 'The Octet Rule and Why Atoms Combine', start: 144, desc: 'Noble gas configuration (ns²np⁶), energy lowering during bond formation, and Lewis electron dot representations.' },
        { num: '5.2', title: 'Ionic (Electrovalent) Bonding and Properties', start: 151, desc: 'Electron transfer from metal to nonmetal, crystal lattice energy, high melting points, and electrical conductivity of molten/aqueous ions.' },
        { num: '5.3', title: 'Covalent Bonding and Molecular Geometry', start: 159, desc: 'Sharing electron pairs between nonmetals; single, double, triple, and coordinate (dative) covalent bonds.' },
        { num: '5.4', title: 'Polar Bonds, Metallic Bonding, and Intermolecular Forces', start: 168, desc: 'Bond polarity, dipole-dipole forces, London dispersion forces, hydrogen bonding in H₂O/NH₃/HF, and the electron-sea model of metals.' }
      ]
    }
  ],

  'book-9-phys': [
    {
      unit_num: 1,
      title: 'Physics and Human Society',
      start_page: 1,
      end_page: 10,
      topics: [
        { num: '1.1', title: 'Definition and Nature of Physics', start: 2, desc: 'Meaning of physics as the fundamental study of matter, energy, space, time, and their interactions.' },
        { num: '1.2', title: 'Branches of Physics', start: 2, desc: 'Mechanics, thermodynamics, electromagnetism, optics, acoustics, astrophysics, atomic and nuclear physics.' },
        { num: '1.3', title: 'Related Fields to Physics', start: 4, desc: 'Connections between physics and chemistry, biology, astronomy, geology, engineering, and medical diagnostics.' },
        { num: '1.4', title: 'Historical Issues and Contributors', start: 5, desc: 'Pioneering discoveries by Galileo, Newton, Faraday, Maxwell, Marie Curie, Einstein, and modern physicists.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Physical Quantities',
      start_page: 11,
      end_page: 34,
      topics: [
        { num: '2.1', title: 'Scales, Standards, Units (Prefixes)', start: 12, desc: 'Standard measurement scales, SI system of units, and metric prefixes (pico, nano, micro, milli, centi, kilo, mega, giga).' },
        { num: '2.2', title: 'Measurement and Safety', start: 17, desc: 'Scientific measurement instruments (meter rule, vernier caliper, micrometer, balance, stopwatch), uncertainty, and lab safety.' },
        { num: '2.3', title: 'Classification of Physical Quantities', start: 23, desc: 'Fundamental (base) vs derived physical quantities, and scalar vs vector quantities.' },
        { num: '2.4', title: 'Unit Conversion', start: 26, desc: 'Conversion factors between metric and non-metric units for length, area, volume, mass, time, and speed.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Motion in a Straight Line',
      start_page: 35,
      end_page: 58,
      topics: [
        { num: '3.1', title: 'Position, Distance and Displacement', start: 36, desc: 'Reference frame, position coordinate x, total path length (distance) vs directed change in position (displacement Δx).' },
        { num: '3.2', title: 'Average Speed and Instantaneous Speed', start: 41, desc: 'Calculating average speed (total distance / total time) vs instantaneous speedometer reading.' },
        { num: '3.3', title: 'Average Velocity and Instantaneous Velocity', start: 43, desc: 'Displacement per unit time v_avg = Δx/Δt, direction of motion, and instantaneous velocity.' },
        { num: '3.4', title: 'Acceleration', start: 46, desc: 'Rate of change of velocity a = (v - u)/t, uniform acceleration, and deceleration (retardation).' },
        { num: '3.5', title: 'Uniform Motion', start: 48, desc: 'Motion at constant velocity (zero acceleration, s = vt) and its kinematic properties.' },
        { num: '3.6', title: 'Graphical Representation of Motion', start: 49, desc: 'Position-time (s-t) and velocity-time (v-t) graphs, calculating velocity from slope and displacement from area under v-t curve.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Force, Work, Energy and Power',
      start_page: 59,
      end_page: 80,
      topics: [
        { num: '4.1', title: 'The Concept of Force', start: 60, desc: 'Vector nature of force, contact vs non-contact forces, gravitational weight W = mg, and net resultant force.' },
        { num: '4.2', title: 'Newton\'s Laws of Motion', start: 63, desc: 'Newton\'s First Law (inertia), Second Law (F_net = ma), and Third Law (action and reaction).' },
        { num: '4.3', title: 'Forces of Friction', start: 69, desc: 'Static and kinetic friction (f_s = μ_s N, f_k = μ_k N), factors affecting friction, advantages and lubrication methods.' },
        { num: '4.4', title: 'The Concept of Work', start: 70, desc: 'Mechanical work W = Fd cos θ, Joule (J) unit, positive, negative, and zero work conditions.' },
        { num: '4.5', title: 'Kinetic and Potential Energies', start: 72, desc: 'Kinetic energy KE = ½mv², gravitational potential energy PE = mgh, work-energy theorem, and conservation of mechanical energy.' },
        { num: '4.6', title: 'Power', start: 76, desc: 'Rate of doing work or energy transfer P = W/t = Fv, measured in Watts (W) and horsepower.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Simple Machines',
      start_page: 81,
      end_page: 112,
      topics: [
        { num: '5.1', title: 'Simple Machines and Their Purposes', start: 82, desc: 'Definition of simple machines, force multipliers, speed/distance multipliers, and direction changers.' },
        { num: '5.2', title: 'Simple Machines at Home', start: 85, desc: 'Everyday household machines: scissors, bottle openers, knives, tweezers, door knobs, and nail clippers.' },
        { num: '5.3', title: 'Simple Machines at Work Place', start: 87, desc: 'Construction, agricultural, and workshop machines: wheelbarrows, pulleys, jacks, ramps, axes, and wedges.' },
        { num: '5.4', title: 'Classification of Simple Machines', start: 89, desc: 'The six classical simple machines: lever, pulley, inclined plane, wheel and axle, wedge, and screw.' },
        { num: '5.5', title: 'Mechanical Advantage, Velocity Ratio and Efficiency', start: 92, desc: 'Actual MA (Load/Effort), Velocity Ratio VR (d_E/d_L), and Efficiency η = (MA/VR) × 100% calculations for all simple machines.' },
        { num: '5.6', title: 'Designing Simple Machine', start: 108, desc: 'Practical design and compounding of simple machines to solve real community mechanical tasks.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Mechanical Oscillation and Sound Wave',
      start_page: 113,
      end_page: 138,
      topics: [
        { num: '6.1', title: 'Common Characteristics of Waves', start: 114, desc: 'Amplitude, wavelength (λ), period (T), frequency (f = 1/T), wave speed (v = fλ), crests, troughs, compressions, and rarefactions.' },
        { num: '6.2', title: 'String, Pendulum and Spring', start: 116, desc: 'Periodic oscillatory motion, simple pendulum period T = 2π√(L/g), and mass-spring system T = 2π√(m/k).' },
        { num: '6.3', title: 'Propagation of Waves and Energy Transmission', start: 123, desc: 'Transverse vs longitudinal waves, mechanical vs electromagnetic waves, and energy transfer without net matter transport.' },
        { num: '6.4', title: 'Sound Waves', start: 125, desc: 'Production and longitudinal propagation of sound in solids, liquids, and gases; speed of sound vs temperature v = 331 + 0.6T.' },
        { num: '6.5', title: 'Superposition of Waves', start: 131, desc: 'Principle of superposition, constructive and destructive interference, standing waves, nodes, and antinodes.' },
        { num: '6.6', title: 'Characteristics of Sound Waves', start: 132, desc: 'Pitch (frequency), loudness and intensity (decibel dB scale), timbre (quality), reflection of sound (echoes), and ultrasound uses.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Temperature and Thermometry',
      start_page: 139,
      end_page: 173,
      topics: [
        { num: '7.1', title: 'Temperature and Our Life', start: 140, desc: 'Concept of temperature vs heat, human body temperature regulation, weather, and environmental thermal effects.' },
        { num: '7.2', title: 'Extreme Temperature Safety', start: 142, desc: 'Hypothermia, heatstroke, thermal burns, and safety precautions in extreme cold or hot environments.' },
        { num: '7.3', title: 'Temperature Change and Its Effects', start: 143, desc: 'Average molecular kinetic energy, state changes, and physical property variations with temperature.' },
        { num: '7.4', title: 'Measuring Temperature with Different Thermometric Scales', start: 146, desc: 'Celsius (°C), Fahrenheit (°F), and Kelvin (K) scales; ice point, steam point, and absolute zero (0 K = -273.15 °C).' },
        { num: '7.5', title: 'Types of Thermometers and Their Use', start: 153, desc: 'Liquid-in-glass (mercury and alcohol), clinical, thermocouple, resistance, and infrared radiation thermometers.' },
        { num: '7.6', title: 'Conversion between Temperature Scales', start: 156, desc: 'Exact conversion formulas: T_F = (9/5)T_C + 32, T_C = (5/9)(T_F - 32), and T_K = T_C + 273.15.' },
        { num: '7.7', title: 'Thermal Expansion of Materials', start: 161, desc: 'Linear (ΔL = αL₀ΔT), area (ΔA = 2αA₀ΔT), and volume (ΔV = βV₀ΔT) thermal expansion of solids, liquids, and anomalous expansion of water.' }
      ]
    }
  ],

  'book-9-math': [
    {
      unit_num: 1,
      title: 'The Number System & Sets',
      start_page: 1,
      end_page: 42,
      topics: [
        { num: '1.1', title: 'Notion of Sets & Set Representations', start: 2, desc: 'Roster method, set-builder notation, empty set, universal set, equal & equivalent sets, subsets and power sets.' },
        { num: '1.2', title: 'Set Operations & De Morgan\'s Laws', start: 12, desc: 'Union A ∪ B, intersection A ∩ B, relative complement A \\ B, symmetric difference A Δ B, and De Morgan\'s laws.' },
        { num: '1.3', title: 'Venn Diagrams and Practical Word Problems', start: 22, desc: 'Representing set relations visually, inclusion-exclusion formula n(A ∪ B) = n(A) + n(B) - n(A ∩ B).' },
        { num: '1.4', title: 'The Real Number System, Exponents & Radicals', start: 32, desc: 'Natural numbers, integers, rational and irrational numbers, laws of exponents, simplifying radicals, and rationalizing denominators.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Solving Equations and Inequalities',
      start_page: 43,
      end_page: 92,
      topics: [
        { num: '2.1', title: 'Linear Equations in One Variable & Absolute Value Equations', start: 44, desc: 'Solving ax + b = c, equations involving absolute values |ax + b| = c, and practical word problems.' },
        { num: '2.2', title: 'Systems of Linear Equations in Two Variables', start: 56, desc: 'Solving 2×2 linear systems by substitution, elimination, and graphical intersection; consistent vs inconsistent systems.' },
        { num: '2.3', title: 'Linear Inequalities in One Variable', start: 70, desc: 'Interval notation, properties of inequalities, and solving absolute value inequalities |ax + b| < c and |ax + b| > c.' },
        { num: '2.4', title: 'Quadratic Equations & the Quadratic Formula', start: 80, desc: 'Solving ax² + bx + c = 0 by factoring, completing the square, quadratic formula, discriminant Δ = b² - 4ac, and Vieta\'s relations.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Relations and Functions',
      start_page: 93,
      end_page: 138,
      topics: [
        { num: '3.1', title: 'Cartesian Coordinate Plane & Relations', start: 94, desc: 'Ordered pairs (x, y), Cartesian product A × B, domain and range of a relation, and graphs of relations.' },
        { num: '3.2', title: 'Concept of a Function & Vertical Line Test', start: 104, desc: 'Functions as unique mappings, vertical line test, function notation f(x), and algebra of functions (f ± g, f·g, f/g).' },
        { num: '3.3', title: 'Linear Functions and Their Graphs', start: 114, desc: 'Linear function f(x) = mx + b, slope m = Δy/Δx, x- and y-intercepts, and rate of change applications.' },
        { num: '3.4', title: 'Quadratic Functions and Parabolic Graphs', start: 126, desc: 'f(x) = ax² + bx + c, vertex form a(x - h)² + k, axis of symmetry x = -b/(2a), minimum/maximum values.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Geometry and Measurement',
      start_page: 139,
      end_page: 184,
      topics: [
        { num: '4.1', title: 'Angles, Parallel Lines & Transversals', start: 140, desc: 'Alternate interior, corresponding, and consecutive interior angles; interior and exterior angle theorems of polygons.' },
        { num: '4.2', title: 'Triangles: Congruence and Similarity', start: 150, desc: 'SSS, SAS, ASA, AAS, RHS congruence postulates; AA, SAS, SSS similarity theorems and ratio of areas (k²).' },
        { num: '4.3', title: 'Pythagorean Theorem, Euclid\'s Theorem & Right Triangle Trigonometry', start: 160, desc: 'a² + b² = c², altitude-on-hypotenuse theorems, and trigonometric ratios sin θ, cos θ, tan θ for 30°, 45°, 60°.' },
        { num: '4.4', title: 'Quadrilaterals and Regular Polygons', start: 172, desc: 'Parallelogram, rectangle, rhombus, square, and trapezium properties; central, interior, and exterior angles of regular n-gons.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Circles',
      start_page: 185,
      end_page: 224,
      topics: [
        { num: '5.1', title: 'Parts and Symmetrical Properties of Circles', start: 186, desc: 'Radius, diameter, chord, secant, tangent, arc, sector, segment; perpendicular from center bisects a chord.' },
        { num: '5.2', title: 'Central Angles, Inscribed Angles and Cyclic Quadrilaterals', start: 196, desc: 'Inscribed angle is half the central angle subtending the same arc; opposite angles of cyclic quadrilateral sum to 180°.' },
        { num: '5.3', title: 'Arc Length, Sector Area and Segment Area', start: 206, desc: 'Circumference C = 2πr, arc length l = (θ/360°)·2πr, sector area A = (θ/360°)·πr², and segment area.' },
        { num: '5.4', title: 'Tangents and Intersecting Chords', start: 216, desc: 'Tangent perpendicularity to radius, equal two-tangent theorem, and intersecting chords power theorem.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Solid Figures',
      start_page: 225,
      end_page: 264,
      topics: [
        { num: '6.1', title: 'Prisms and Cylinders: Surface Area & Volume', start: 226, desc: 'Lateral surface area, total surface area, and volume V = B·h of right prisms and circular cylinders (V = πr²h).' },
        { num: '6.2', title: 'Pyramids and Cones: Surface Area & Volume', start: 238, desc: 'Slant height l vs altitude h, lateral area, total surface area, and volume V = (1/3)B·h and V = (1/3)πr²h.' },
        { num: '6.3', title: 'Spheres and Hemispheres', start: 250, desc: 'Surface area of sphere A = 4πr², curved and total surface area of hemisphere (3πr²), and volume V = (4/3)πr³.' },
        { num: '6.4', title: 'Composite Solids and Real-World Engineering Problems', start: 258, desc: 'Surface area and volume of combined solids such as silos, capsules, and architectural domes.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Coordinate Geometry',
      start_page: 265,
      end_page: 298,
      topics: [
        { num: '7.1', title: 'Distance Between Two Points in the Cartesian Plane', start: 266, desc: 'Derivation and application of d = √[(x₂ - x₁)² + (y₂ - y₁)²] to classify triangles and quadrilaterals.' },
        { num: '7.2', title: 'Midpoint and Section Formula of a Line Segment', start: 274, desc: 'Midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2) and internal division of a segment in ratio m:n.' },
        { num: '7.3', title: 'Slope (Gradient) of a Straight Line', start: 282, desc: 'Slope m = (y₂ - y₁)/(x₂ - x₁), collinearity of points, and slopes of parallel and perpendicular lines.' },
        { num: '7.4', title: 'Equations of Straight Lines', start: 290, desc: 'Slope-intercept form y = mx + b, point-slope form y - y₁ = m(x - x₁), two-point form, and general form Ax + By + C = 0.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Statistics and Probability',
      start_page: 299,
      end_page: 334,
      topics: [
        { num: '8.1', title: 'Data Collection, Organization and Frequency Distributions', start: 300, desc: 'Population vs sample, qualitative vs quantitative data, ungrouped and grouped frequency distribution tables.' },
        { num: '8.2', title: 'Statistical Graphs: Histograms, Frequency Polygons & Pie Charts', start: 310, desc: 'Constructing and interpreting bar charts, histograms, frequency polygons, ogives, and pie charts.' },
        { num: '8.3', title: 'Measures of Central Tendency and Dispersion', start: 320, desc: 'Mean (x̄), median, mode, range, quartiles, variance, and standard deviation for ungrouped and grouped data.' },
        { num: '8.4', title: 'Experimental and Theoretical Probability', start: 328, desc: 'Random experiments, sample space S, events, P(E) = n(E)/n(S), mutually exclusive and independent events.' }
      ]
    },
    {
      unit_num: 9,
      title: 'Regular Polygons and Congruency',
      start_page: 335,
      end_page: 360,
      topics: [
        { num: '9.1', title: 'Properties and Angles of Regular Polygons', start: 336, desc: 'Interior angle ((n-2)·180°/n), exterior angle (360°/n), central angle, and lines of symmetry.' },
        { num: '9.2', title: 'Radius, Apothem, Perimeter and Area of Regular Polygons', start: 344, desc: 'Relationships a = r cos(180°/n), s = 2r sin(180°/n), P = ns, and Area A = ½·P·a.' },
        { num: '9.3', title: 'Inscribed and Circumscribed Regular Polygons', start: 352, desc: 'Exact formulas for equilateral triangles, squares, and regular hexagons inscribed in a circle of radius r.' }
      ]
    },
    {
      unit_num: 10,
      title: 'Vectors in Two Dimensions',
      start_page: 361,
      end_page: 382,
      topics: [
        { num: '10.1', title: 'Introduction to Scalars and Vectors', start: 362, desc: 'Directed line segments, magnitude, direction, equal vectors, opposite vectors, and zero vector.' },
        { num: '10.2', title: 'Graphical and Component Operations on Vectors', start: 370, desc: 'Triangle law, parallelogram law, position vectors, component form u = (x, y), and scalar multiplication.' },
        { num: '10.3', title: 'Magnitude, Direction Angle and Unit Vectors', start: 376, desc: 'Norm ||u|| = √(x² + y²), standard unit vectors i = (1,0) and j = (0,1), and navigation/force word problems.' }
      ]
    }
  ],

  'book-9-eng': [
    {
      unit_num: 1,
      title: 'Living in a Village',
      start_page: 1,
      end_page: 20,
      topics: [
        { num: '1.1', title: 'Reading: Daily Life and Community in an Ethiopian Village', start: 2, desc: 'Agrarian communal lifestyle, harvesting, Debo cooperative labor, and rural traditions.' },
        { num: '1.2', title: 'Vocabulary: Agriculture, Rural Landscapes & Community Terms', start: 6, desc: 'Homestead, cattle husbandry, ploughing, harvest, seasonal calendar, and hospitality.' },
        { num: '1.3', title: 'Grammar: Simple Present vs. Present Continuous Tenses', start: 10, desc: 'Habitual actions and general truths vs ongoing temporary actions; stative verbs.' },
        { num: '1.4', title: 'Speaking: Describing One\'s Hometown and Local Traditions', start: 15, desc: 'Oral descriptions of regional hometowns, asking polite questions about rural life.' },
        { num: '1.5', title: 'Writing: Descriptive Paragraphs about Village Communities', start: 18, desc: 'Topic sentences, sensory details, spatial organization, and concluding sentences.' }
      ]
    },
    {
      unit_num: 2,
      title: 'History of Writing',
      start_page: 21,
      end_page: 40,
      topics: [
        { num: '2.1', title: 'Reading: From Ancient Cuneiform and Hieroglyphs to the Ge\'ez Script', start: 22, desc: 'Evolution of written language, Mesopotamian tablets, Egyptian papyrus, and Ethiopian Ge\'ez abugida.' },
        { num: '2.2', title: 'Vocabulary: Literacy, Manuscripts & Ancient Inscriptions', start: 26, desc: 'Calligraphy, parchment, scribes, alphabet, vowels, consonants, epigraphy.' },
        { num: '2.3', title: 'Grammar: Simple Past and Past Continuous Tenses', start: 30, desc: 'Completed historical events vs interrupted past actions with when and while clauses.' },
        { num: '2.4', title: 'Speaking: Recounting the Origins and Significance of Writing', start: 35, desc: 'Summarizing historical timelines orally, giving short explanatory talks to class.' },
        { num: '2.5', title: 'Writing: Short Narrative Paragraphs on Historical Discoveries', start: 38, desc: 'Chronological transition words (initially, subsequently, thereafter, finally).' }
      ]
    },
    {
      unit_num: 3,
      title: 'People and Animals',
      start_page: 41,
      end_page: 60,
      topics: [
        { num: '3.1', title: 'Reading: Wildlife Conservation and Endangered Species in Ethiopia', start: 42, desc: 'Walia ibex, Ethiopian wolf, mountain nyala, human-wildlife conflict and sanctuary habitats.' },
        { num: '3.2', title: 'Vocabulary: Zoology, Animal Behaviors & Conservation Biology', start: 46, desc: 'Carnivore, herbivore, habitat loss, poaching, endangered, sanctuary, national park.' },
        { num: '3.3', title: 'Grammar: Modals of Ability, Permission and Advice', start: 50, desc: 'Can, could, may, should, ought to; giving environmental advice to community members.' },
        { num: '3.4', title: 'Speaking: Debating the Protection of Endangered Wildlife', start: 55, desc: 'Expressing agreement, respectful disagreement, and offering conservation solutions.' },
        { num: '3.5', title: 'Writing: Persuasive Short Essays on Protecting Domestic & Wild Animals', start: 58, desc: 'Stating a clear claim, providing supporting reasons, and concluding with a call to action.' }
      ]
    },
    {
      unit_num: 4,
      title: 'The Digital World',
      start_page: 61,
      end_page: 80,
      topics: [
        { num: '4.1', title: 'Reading: How the Internet and Smart Devices Transform Modern Society', start: 62, desc: 'Communication revolutions, access to online educational libraries, and social media connectivity.' },
        { num: '4.2', title: 'Vocabulary: Computing, Internet Navigation & Cyber Security', start: 66, desc: 'Browsers, hyperlinks, password security, viruses, downloads, online forums, cloud.' },
        { num: '4.3', title: 'Grammar: Expressing the Future: Will, Be Going To, Present Continuous', start: 70, desc: 'Predictions vs prior intentions/plans vs fixed calendar arrangements.' },
        { num: '4.4', title: 'Speaking: Safe Internet Habits and Cyber-Bullying Prevention', start: 75, desc: 'Discussing online privacy, ethical internet use, and digital footprint with peers.' },
        { num: '4.5', title: 'Writing: Opinion Paragraphs on the Benefits and Risks of Social Media', start: 78, desc: 'Balanced paragraph structure: topic claim, supporting evidence, acknowledging opposing views.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Tourism in Ethiopia',
      start_page: 81,
      end_page: 100,
      topics: [
        { num: '5.1', title: 'Reading: Historic and Natural Marvels of Ethiopia', start: 82, desc: 'Lalibela, Gondar castles, Axum stelae, Danakil depression, Erta Ale, Blue Nile Falls.' },
        { num: '5.2', title: 'Vocabulary: Travel, Tourism Destinations & Hospitality', start: 86, desc: 'Souvenirs, tour guide, lodging, expedition, historical monuments, scenic landscapes.' },
        { num: '5.3', title: 'Grammar: Comparative and Superlative Adjectives and Adverbs', start: 90, desc: 'Regular and irregular comparative forms (better, worse, farther); as... as comparisons.' },
        { num: '5.4', title: 'Speaking: Roleplaying Tour Guides Recommending Itineraries', start: 95, desc: 'Providing courteous recommendations, highlighting historical facts, and answering questions.' },
        { num: '5.5', title: 'Writing: Informational Travel Brochures on Ethiopian Attractions', start: 98, desc: 'Appealing headlines, descriptive adjectives, bulleted highlights, and practical visitor tips.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Community Services',
      start_page: 101,
      end_page: 120,
      topics: [
        { num: '6.1', title: 'Reading: Civic Engagement, Iddir, and Community Self-Help Organizations', start: 102, desc: 'Traditional Ethiopian social support networks, volunteerism, blood donation, elderly care.' },
        { num: '6.2', title: 'Vocabulary: Volunteerism, Civic Duties & Social Welfare', start: 106, desc: 'Contribution, solidarity, welfare, nonprofit, civic responsibility, mutual assistance.' },
        { num: '6.3', title: 'Grammar: The Passive Voice (Present and Past Simple)', start: 110, desc: 'Focusing on the action and recipient rather than the actor: Millions of trees are planted.' },
        { num: '6.4', title: 'Speaking: Delivering Short Speeches on Community Leadership', start: 115, desc: 'Structuring a short persuasive speech, eye contact, audible projection, and inspirational closing.' },
        { num: '6.5', title: 'Writing: Formal Thank-You Letters to Community Volunteers', start: 118, desc: 'Formal salutation, expressing genuine gratitude, specifying contributions, and formal sign-off.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Traditional Games',
      start_page: 121,
      end_page: 140,
      topics: [
        { num: '7.1', title: 'Reading: Indigenous Ethiopian Sports: Genna, Gugs, and Gebeta', start: 122, desc: 'Cultural origins, rules, seasonal festivities, sportsmanship, and physical coordination.' },
        { num: '7.2', title: 'Vocabulary: Sports Rules, Equipment & Traditional Pastimes', start: 126, desc: 'Puck, stick, equestrian, game board, pebbles, tournament, referee, victory.' },
        { num: '7.3', title: 'Grammar: Zero and First Conditionals', start: 130, desc: 'Universal game rules (If you drop the ball...) and realistic future outcomes (If they score...).' },
        { num: '7.4', title: 'Speaking: Explaining Game Rules Clearly to New Players', start: 135, desc: 'Using sequential instructions, checking for listener understanding, and demonstrating.' },
        { num: '7.5', title: 'Writing: Instructional Rulebooks for Traditional Games', start: 138, desc: 'Numbered rule steps, equipment lists, player count, penalty conditions, and winning criteria.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Healthy Living',
      start_page: 141,
      end_page: 160,
      topics: [
        { num: '8.1', title: 'Reading: Dietary Balance, Hydration and Daily Exercise', start: 142, desc: 'Balanced food plate, benefits of active movement, mental wellbeing, and sleep hygiene.' },
        { num: '8.2', title: 'Vocabulary: Health, Nutrition, Physical Exercise & Wellness', start: 146, desc: 'Vitamins, proteins, minerals, carbohydrates, hydration, calories, aerobic fitness.' },
        { num: '8.3', title: 'Grammar: Defining and Non-Defining Relative Clauses', start: 150, desc: 'Who, which, that, where; combining sentences to add essential or descriptive information.' },
        { num: '8.4', title: 'Speaking: Interviewing Peers on Daily Health Routines', start: 155, desc: 'Conducting health surveys, recording responses, and presenting group findings.' },
        { num: '8.5', title: 'Writing: Health Advisory Articles for School Newsletters', start: 158, desc: 'Catchy advisory title, subheadings, actionable wellness tips, and encouraging closing.' }
      ]
    },
    {
      unit_num: 9,
      title: 'Climate and Environment',
      start_page: 161,
      end_page: 178,
      topics: [
        { num: '9.1', title: 'Reading: Weather Cycles, Droughts, and Climate Resilience in the Horn of Africa', start: 162, desc: 'Rainfall patterns, impact of climate variability on agriculture, and building resilience.' },
        { num: '9.2', title: 'Vocabulary: Meteorology, Climatology & Ecological Adaptation', start: 165, desc: 'Precipitation, greenhouse effect, renewable energy, reforestation, afforestation, drought.' },
        { num: '9.3', title: 'Grammar: Cause and Effect Conjunctions', start: 169, desc: 'Because, since, as a result of, consequently, therefore, due to; sentence linking.' },
        { num: '9.4', title: 'Speaking: Presenting Proposals for School Tree Nurseries', start: 173, desc: 'Pitching school environmental initiatives, justifying resource requirements.' },
        { num: '9.5', title: 'Writing: Cause-and-Effect Essays on Deforestation and Soil Erosion', start: 176, desc: 'Structuring cause-and-effect body paragraphs with clear analytical linking.' }
      ]
    },
    {
      unit_num: 10,
      title: 'Woodwork and Metalwork',
      start_page: 179,
      end_page: 194,
      topics: [
        { num: '10.1', title: 'Reading: Traditional Crafts, Carpentry, and Blacksmithing in Ethiopia', start: 180, desc: 'Handcrafted agricultural tools, wooden furniture, cultural ironwork, and technical skills.' },
        { num: '10.2', title: 'Vocabulary: Workshop Tools, Metallurgy & Carpentry Materials', start: 183, desc: 'Anvil, chisel, plane, saw, hammer, welding, timber, joints, forge, measuring tape.' },
        { num: '10.3', title: 'Grammar: Imperatives and Process Passive for Technical Instructions', start: 186, desc: 'Direct steps: Measure twice, cut once; Passive: The timber is planed smooth.' },
        { num: '10.4', title: 'Speaking: Explaining Safety Precautions in Vocational Workshops', start: 189, desc: 'Safety goggles, protective boots, ventilation, hazard awareness in workshop.' },
        { num: '10.5', title: 'Writing: Illustrated Technical How-To Manuals for Simple Wooden Items', start: 192, desc: 'Materials list, tool requirements, sequential numbered steps, and safety warnings.' }
      ]
    }
  ],

  'book-9-it': [
    {
      unit_num: 1,
      title: 'Organization of Files',
      start_page: 1,
      end_page: 36,
      topics: [
        { num: '1.1', title: 'Basics of Files and Folders', start: 1, desc: 'Concepts of files and folders, filenames and extensions (.docx, .xlsx, .pptx, .txt, .pdf, .jpg), file icons, and importance of file organization.' },
        { num: '1.2', title: 'Managing Files and Folders', start: 5, desc: 'Using File Explorer, navigation pane, address bar, creating, copying, renaming, moving, deleting files/folders, Recycle Bin, and searching.' },
        { num: '1.3', title: 'Computer Drives', start: 25, desc: 'Local drives (C:, D:), external drives, USB flash drives, optical drives, drive letters, storage capacity units, and cloud storage.' },
        { num: '1.4', title: 'Unit Summary and Review Exercise', start: 29, desc: 'Comprehensive summary of file organization, shortcut key tables, and national examination review questions.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Computer Network',
      start_page: 37,
      end_page: 71,
      topics: [
        { num: '2.1', title: 'Definition of Network', start: 37, desc: 'Concept of computer network, interconnected computing nodes, data communication, and resource sharing.' },
        { num: '2.2', title: 'Fundamental Elements of Network', start: 38, desc: 'End devices, intermediary devices (switches, routers, hubs, modems, access points), protocols (TCP/IP), and guided/unguided transmission media.' },
        { num: '2.3', title: 'Types of Networks', start: 46, desc: 'PAN, LAN, MAN, WAN; Peer-to-Peer vs Client-Server architectures; Bus, Star, Ring, Mesh, and Hybrid network topologies.' },
        { num: '2.4', title: 'Advantages and Disadvantages of Network', start: 60, desc: 'Hardware/software resource sharing, centralized backup, fast communication vs security threats, malware propagation, and setup cost.' },
        { num: '2.5', title: 'Unit Summary and Review Exercise', start: 63, desc: 'Network architecture comparison matrices, topology diagrams, and unit assessment questions.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Application Software',
      start_page: 72,
      end_page: 144,
      topics: [
        { num: '3.1', title: 'Using Application Software', start: 72, desc: 'Overview of general-purpose office productivity suites vs special-purpose software applications.' },
        { num: '3.2', title: 'Word Processing', start: 72, desc: 'Microsoft Word / LibreOffice Writer interface, paragraph formatting, styles, tables, headers/footers, page breaks, and document printing.' },
        { num: '3.3', title: 'Manipulating Data in Spreadsheet', start: 109, desc: 'Workbooks, worksheets, cell references (relative, absolute $A$1), arithmetic formulas, built-in functions (SUM, AVERAGE, COUNT, MAX, MIN, IF), and charts.' },
        { num: '3.4', title: 'Creating Presentation', start: 121, desc: 'Slide design principles, slide layouts, master slides, inserting multimedia, slide transitions, custom animations, and slide show delivery.' },
        { num: '3.5', title: 'Unit Summary and Review Exercise', start: 136, desc: 'Office suite shortcut keys, spreadsheet formula exercises, and review questions.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Image Processing and Multimedia',
      start_page: 145,
      end_page: 191,
      topics: [
        { num: '4.1', title: 'Image', start: 145, desc: 'Digital image representation, pixels, spatial resolution (PPI/DPI), raster (bitmap) vs vector graphics, RGB and CMYK color modes, and image file formats.' },
        { num: '4.2', title: 'Multimedia Production Planning Strategies', start: 147, desc: 'Five components of multimedia (text, image, audio, video, animation), storyboarding, scriptwriting, and production workflow.' },
        { num: '4.3', title: 'Using Image Processing Software', start: 148, desc: 'Layers, selection tools (marquee, lasso, magic wand), cropping, transforming, color correction, cloning, filters, and exporting digital graphics.' },
        { num: '4.4', title: 'Unit Summary and Review Exercise', start: 186, desc: 'Image format comparisons, tool icons, and unit review exercises.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Information and Computer Security',
      start_page: 192,
      end_page: 216,
      topics: [
        { num: '5.1', title: 'Definition of Security', start: 192, desc: 'Information security vs computer security, protecting hardware, software, and data assets from unauthorized access.' },
        { num: '5.2', title: 'Principles of Computer Security', start: 194, desc: 'The CIA Triad: Confidentiality, Integrity, and Availability; authentication, authorization, and non-repudiation.' },
        { num: '5.3', title: 'Computer Security Threats', start: 197, desc: 'Natural vs human threats; Malware (viruses, worms, Trojans, ransomware, spyware, adware), phishing, and Denial-of-Service (DoS) attacks.' },
        { num: '5.4', title: 'Potential Losses Due to Security Attacks', start: 204, desc: 'Data loss, financial theft, identity theft, system downtime, and legal/reputational consequences.' },
        { num: '5.5', title: 'Securing Yourself and Your Computer Systems', start: 206, desc: 'Strong password policies, multi-factor authentication, antivirus software, firewalls, regular backups, and safe browsing.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Fundamentals of Programming',
      start_page: 217,
      end_page: 244,
      topics: [
        { num: '6.1', title: 'Defining a Problem and Computational Problem', start: 217, desc: 'Computational thinking, well-defined problems, identifying Inputs, Processes, and Outputs (IPO model).' },
        { num: '6.2', title: 'Steps in Problem Solving', start: 219, desc: 'Problem definition, problem analysis, algorithm design, coding, testing & debugging, and documentation.' },
        { num: '6.3', title: 'Working with Flowcharts and Block Programming', start: 223, desc: 'Pseudocode, standard flowchart symbols (oval, parallelogram, rectangle, diamond, arrow), sequence/selection/iteration structures, and Scratch block coding.' },
        { num: '6.4', title: 'Problem Solving Approaches', start: 236, desc: 'Top-down modular design, stepwise refinement, and bottom-up problem solving strategies.' }
      ]
    }
  ],

  'book-9-geog': [
    {
      unit_num: 1,
      title: 'Geological History and Topography of Ethiopia',
      start_page: 1,
      end_page: 38,
      topics: [
        { num: '1.1', title: 'Geological Eras and Structural Evolution of the Horn', start: 2, desc: 'Precambrian basement rocks, Paleozoic denudation, Mesozoic marine transgression/regression, and Cenozoic Trap Series volcanism & rifting.' },
        { num: '1.2', title: 'Physiographic Divisions of Ethiopia', start: 14, desc: 'Western Highlands and Lowlands, Southeastern Highlands and Lowlands, and the Ethiopian Rift Valley (Afar, Main Rift, Chew Bahir).' },
        { num: '1.3', title: 'Topographic Features and Socio-Economic Impacts', start: 26, desc: 'Impact of rugged relief on settlement, agriculture, hydro-power potential, transportation, and communication.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Climate of Ethiopia and the Horn',
      start_page: 39,
      end_page: 78,
      topics: [
        { num: '2.1', title: 'Elements and Controls of Weather and Climate', start: 40, desc: 'Latitude, altitude, mountain barriers, distance from sea, Inter-Tropical Convergence Zone (ITCZ), and seasonal wind systems.' },
        { num: '2.2', title: 'Traditional and Modern Agro-Ecological Zones of Ethiopia', start: 52, desc: 'Wurch (>3300m), Dega (2300-3300m), Woina Dega (1500-2300m), Kolla (500-1500m), and Bereha (<500m) temperature and crop patterns.' },
        { num: '2.3', title: 'Spatiotemporal Rainfall Distribution and Climate Change', start: 65, desc: 'Kiremt, Belg, and Bega seasons; rainfall regions of Ethiopia; drought vulnerability and climate adaptation.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Drainage Systems and Water Resources of Ethiopia',
      start_page: 79,
      end_page: 118,
      topics: [
        { num: '3.1', title: 'Major River Basins and Drainage Systems', start: 80, desc: 'Western Drainage System (Abay, Tekeze, Baro-Akobo, Omo-Gibe), Southeastern (Wabi-Shebelle, Genale-Dawa), and Rift Valley System (Awash).' },
        { num: '3.2', title: 'Lakes of Ethiopia and Economic Potential', start: 95, desc: 'Highland lakes (Lake Tana, crater lakes) vs Rift Valley lakes (Ziway, Langano, Abijatta, Shala, Hawassa, Abaya, Chamo) and artificial reservoirs (GERD, Koka, Gilgel Gibe).' },
        { num: '3.3', title: 'Water Resource Management and Hydro-Politics', start: 108, desc: 'Characteristics of Ethiopian rivers, irrigation potential, hydroelectric generation, and equitable transboundary utilization.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Natural Vegetation, Soils, and Wildlife of Ethiopia',
      start_page: 119,
      end_page: 156,
      topics: [
        { num: '4.1', title: 'Major Soil Types and Soil Conservation in Ethiopia', start: 120, desc: 'Nitisols, Vertisols, Regosols, Cambisols, Fluvisols; soil erosion causes and indigenous/modern conservation (terracing, afforestation).' },
        { num: '4.2', title: 'Altitudinal Zonation of Natural Vegetation', start: 132, desc: 'Afro-alpine/sub-afroalpine, dry evergreen montane forest, moist evergreen rainforest, acacia-commiphora woodland, and desert scrub.' },
        { num: '4.3', title: 'Endemic Wildlife and Protected Areas of Ethiopia', start: 144, desc: 'Walia Ibex, Ethiopian Wolf, Gelada Baboon, Mountain Nyala, Swayne\'s Hartebeest; National Parks (Simien, Bale, Awash, Nechisar, Omo).' }
      ]
    },
    {
      unit_num: 5,
      title: 'Population and Economic Activities of Ethiopia',
      start_page: 157,
      end_page: 198,
      topics: [
        { num: '5.1', title: 'Population Size, Growth, Structure, and Spatial Distribution', start: 158, desc: 'Sources of demographic data (census, vital registration, sample surveys), fertility/mortality measures, age-sex pyramid, and density factors.' },
        { num: '5.2', title: 'Rural and Urban Settlement Patterns and Migration', start: 172, desc: 'Nucleated vs dispersed rural settlements, urbanization trends, push and pull factors of migration.' },
        { num: '5.3', title: 'Major Economic Activities in Ethiopia', start: 184, desc: 'Primary (rain-fed crop farming, pastoralism, forestry, mining), secondary (manufacturing, cottage industries), and tertiary (trade, tourism, transport) sectors.' }
      ]
    }
  ],

  'book-9-amh': [
    {
      unit_num: 1,
      title: 'ቋንቋና ማህበረሰብ (Language and Society)',
      start_page: 1,
      end_page: 38,
      topics: [
        { num: '1.1', title: 'የቋንቋ ምንነትና የማህበራዊ ትስስር ሚና', start: 2, desc: 'የቋንቋ መገለጫዎች፣ የመግባቢያ መሳሪያነት እና የባህል ማስተላለፊያነት።' },
        { num: '1.2', title: 'የአማርኛ ቋንቋ የፊደላት ስርዓትና አነባበብ', start: 14, desc: 'ግዕዝ፣ ካዕብ፣ ሳልስ፣ ራብዕ፣ ሃምስ፣ ሳድስ፣ ሳብዕ ፊደላትና የድምፅ አወጣጥ።' },
        { num: '1.3', title: 'የቃላት አወቃቀርና የንግግር ክፍሎች', start: 26, desc: 'ስም፣ ቅጽል፣ ግስ፣ ተውሳከ-ግስ እና መስተዋድድ በአማርኛ ሰዋሰው።' }
      ]
    },
    {
      unit_num: 2,
      title: 'የንባብ ክህሎትና ማስተዋል (Reading Comprehension)',
      start_page: 39,
      end_page: 76,
      topics: [
        { num: '2.1', title: 'የተለያዩ ምንባቦችን በጥልቀት የማንበብ ዘዴዎች', start: 40, desc: 'ዋናውን ሀሳብ መረዳት፣ ፍሬ ሀሳቦችን መለየት እና አውዳዊ ትርጉም መስጠት።' },
        { num: '2.2', title: 'የአማርኛ ስነ-ቃልና አፈ-ታሪኮች', start: 52, desc: 'ተረቶች፣ እንቆቅልሾች፣ ምሳሌያዊ አነጋገሮች እና የህዝብ ግጥሞች።' },
        { num: '2.3', title: 'የቃላት አውዳዊ ፍቺ እና ፈሊጣዊ አነጋገሮች', start: 64, desc: 'ቀጥተኛና ስውር (እማሬያዊና ፍካሬያዊ) ፍቺ፣ ፈሊጦች እና ምሳሌያዊ አባባሎች ትንታኔ።' }
      ]
    },
    {
      unit_num: 3,
      title: 'የፅህፈት ስነ-ስርዓት (Writing and Composition)',
      start_page: 77,
      end_page: 114,
      topics: [
        { num: '3.1', title: 'የአንቀጽ አወቃቀርና የሀሳብ ቅደም-ተከተል', start: 78, desc: 'መሪ አረፍተ-ነገር፣ ደጋፊ ሀሳቦች እና ማጠቃለያ አረፍተ-ነገሮች ማዘጋጀት።' },
        { num: '3.2', title: 'የስርዓተ-ነጥብ አጠቃቀም በአማርኛ ፅሁፍ', start: 90, desc: 'አራት ነጥብ፣ ነጠላ ሰረዝ፣ ድርብ ሰረዝ፣ ሁለት ነጥብ፣ ትዕምርተ-ጥያቄ እና ትዕምርተ-አንክሮ አጠቃቀም።' },
        { num: '3.3', title: 'ገላጭና አስረጂ ድርሰት አፃፃፍ', start: 102, desc: 'የድርሰት መዋቅር፣ መግቢያ፣ አካል እና ማጠቃለያ ዝግጅት።' }
      ]
    },
    {
      unit_num: 4,
      title: 'የአማርኛ ሰዋሰውና አረፍተ-ነገር (Grammar and Syntax)',
      start_page: 115,
      end_page: 152,
      topics: [
        { num: '4.1', title: 'ባለቤት፣ ተሳቢ እና ማሰሪያ አንቀጽ', start: 116, desc: 'የአረፍተ-ነገር መዋቅር፣ የግስና ባለቤት ስምምነት (በፆታ፣ በቁጥርና በመደብ)።' },
        { num: '4.2', title: 'የግስ እርባታ እና ጊዜያት (Tenses in Amharic)', start: 128, desc: 'ሀላፊ ጊዜ፣ የአሁን ጊዜ፣ የትንቢት ጊዜ እና ቀጣይ ድርጊት እርባታ።' },
        { num: '4.3', title: 'ቀጥተኛና ቀጥተኛ ያልሆነ ንግግር', start: 140, desc: 'የተናጋሪውን ንግግር ማስተላለፍ እና የሰዋሰው ስርዓትን መጠበቅ።' }
      ]
    },
    {
      unit_num: 5,
      title: 'ስነ-ፅሁፍና ትውፊት (Literature and Cultural Heritage)',
      start_page: 153,
      end_page: 188,
      topics: [
        { num: '5.1', title: 'የኢትዮጵያ ስነ-ፅሁፍ እድገት አጭር ታሪክ', start: 154, desc: 'የጥንታዊ ፅሁፎች፣ የብራና መጻህፍት እና የዘመናዊ ስነ-ፅሁፍ አጀማመር።' },
        { num: '5.2', title: 'የግጥም ስልቶችና ቤት አመታት', start: 166, desc: 'የግጥም ቤት፣ ምጣኔ፣ ስንኝ፣ ሀረግ እና ዘይቤዎች ትንታኔ።' },
        { num: '5.3', title: 'አጭር ልቦለድ እና ተውኔት ትንተና', start: 178, desc: 'ገፀ-ባህሪያት፣ ግጭት፣ መቼት፣ ሴራ እና ጭብጥ ትንተና በአማርኛ ድርሰቶች።' }
      ]
    }
  ],

  'book-9-civ': [
    {
      unit_num: 1,
      title: 'Ethical Values',
      start_page: 1,
      end_page: 20,
      topics: [
        { num: '1.1', title: 'Understanding Ethics and Morality', start: 2, desc: 'Definition of ethics vs morality, integrity, honesty, empathy, respect, and civic accountability.' },
        { num: '1.2', title: 'Applied Ethics in Daily Life and Public Space', start: 7, desc: 'Academic honesty, environmental ethics, community service, and school integrity case studies.' },
        { num: '1.3', title: 'Professional Ethics and Civic Integrity', start: 12, desc: 'Core professional duties, impartiality, confidentiality, combating corruption, and public trust.' },
        { num: '1.4', title: 'Ethical Decision-Making Frameworks', start: 16, desc: 'Step-by-step ethical reasoning model and evaluating consequences against moral standards.' }
      ]
    },
    {
      unit_num: 2,
      title: 'The Culture of Using Digital Technology',
      start_page: 21,
      end_page: 42,
      topics: [
        { num: '2.1', title: 'Concepts and Tools of Digital Technology', start: 22, desc: 'Digital communication platforms, e-learning, Digital Ethiopia 2025, and ICT infrastructure.' },
        { num: '2.2', title: 'Benefits and Ethical Challenges of Digital Media', start: 27, desc: 'Opportunities of digital knowledge access vs hazards of digital addiction, hate speech, and cyberbullying.' },
        { num: '2.3', title: 'Cybersecurity, Digital Safety, and Privacy', start: 33, desc: 'Password security, two-factor authentication, phishing protection, and safeguarding personal data.' },
        { num: '2.4', title: 'Digital Citizenship and Combating Misinformation', start: 38, desc: 'Fact-checking, verifying sources, and responsible digital participation.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Constitution and Constitutionalism',
      start_page: 43,
      end_page: 64,
      topics: [
        { num: '3.1', title: 'Concepts and Features of Constitutions', start: 44, desc: 'Supreme law of the land, written vs unwritten, and rigid vs flexible constitutions.' },
        { num: '3.2', title: 'Constitutionalism and the Rule of Law', start: 49, desc: 'Limited government, separation of powers (legislative, executive, judiciary), checks and balances, and judicial independence.' },
        { num: '3.3', title: 'Historical Development of Ethiopian Constitutions', start: 54, desc: 'Traditional Fetha Negest and comparative analysis of the 1931, 1955, 1987, and 1995 constitutions.' },
        { num: '3.4', title: 'Fundamental Rights in the 1995 FDRE Constitution', start: 60, desc: 'Human rights and democratic rights under Chapter Three of the FDRE Constitution.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Understanding Indigenous Knowledge',
      start_page: 65,
      end_page: 86,
      topics: [
        { num: '4.1', title: 'Concepts and Nature of Indigenous Knowledge Systems', start: 66, desc: 'Characteristics of indigenous knowledge, intergenerational oral transmission, and community ownership.' },
        { num: '4.2', title: 'Traditional Conflict Resolution Mechanisms in Ethiopia', start: 71, desc: 'Gadaa system, Shimgellina, Jaarsummaa, Mada\'a, Yajoka, and Luwa restorative justice institutions.' },
        { num: '4.3', title: 'Indigenous Environmental Conservation & Traditional Medicine', start: 77, desc: 'Konso terracing (UNESCO heritage), Gedeo agroforestry, sacred forests, and herbal medicine.' },
        { num: '4.4', title: 'Integrating Indigenous Wisdom into Modern Development', start: 82, desc: 'Synergy between indigenous institutions (Iddir, Iqub, Debo) and formal socio-economic development.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Multiculturalism in Ethiopia',
      start_page: 87,
      end_page: 106,
      topics: [
        { num: '5.1', title: 'Meaning and Pillars of Multiculturalism', start: 88, desc: 'Cultural pluralism, accommodation of diversity, equality of cultures, and mutual respect.' },
        { num: '5.2', title: 'Cultural Diversity, Languages, and Heritage in Ethiopia', start: 93, desc: 'Linguistic, religious, and cultural mosaic of Ethiopian nations, nationalities, and peoples.' },
        { num: '5.3', title: 'Overcoming Prejudice, Stereotypes, and Ethnocentrism', start: 98, desc: 'Recognizing and eliminating stereotyping, prejudice, discrimination, and extremism.' },
        { num: '5.4', title: 'Promoting Intercultural Competence and Tolerance', start: 102, desc: 'Empathy, intercultural dialogue, and peaceful coexistence.' }
      ]
    },
    {
      unit_num: 6,
      title: 'National Unity Through Diversity',
      start_page: 107,
      end_page: 126,
      topics: [
        { num: '6.1', title: 'Concepts of Nation, State, and National Unity', start: 108, desc: 'Building shared national identity while respecting linguistic and cultural diversity.' },
        { num: '6.2', title: 'Historical Bonds and Economic Interdependence', start: 113, desc: 'Long-distance trade, shared historical struggles (Victory of Adwa), and ecological interdependence.' },
        { num: '6.3', title: 'Civic Patriotism vs. Chauvinism and Narrow Nationalism', start: 118, desc: 'Constitutional patriotism vs destructive chauvinism and narrow extremism.' },
        { num: '6.4', title: 'The Role of Youth in Strengthening National Cohesion', start: 122, desc: 'Youth leadership in peacebuilding, national service, and cross-regional solidarity.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Problem Solving Skills',
      start_page: 127,
      end_page: 144,
      topics: [
        { num: '7.1', title: 'Understanding Social and Community Problems', start: 128, desc: 'Identifying personal, school, and community challenges through critical thinking.' },
        { num: '7.2', title: 'Steps and Methods of Scientific Problem Solving', start: 134, desc: 'Defining the problem, root-cause analysis, generating alternatives, evaluating solutions, implementation, and review.' },
        { num: '7.3', title: 'Collaborative Decision-Making and Conflict Management', start: 140, desc: 'Negotiation, mediation, win-win problem solving, and team collaboration.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Ethiopia\'s Foreign Relations in East Africa',
      start_page: 145,
      end_page: 163,
      topics: [
        { num: '8.1', title: 'Principles and Objectives of Ethiopian Foreign Policy', start: 146, desc: 'National sovereignty, peaceful coexistence, non-interference, and mutual economic benefit.' },
        { num: '8.2', title: 'Regional Integration and the Role of IGAD', start: 151, desc: 'Horn of Africa economic integration, infrastructure corridors, and IGAD peace initiatives.' },
        { num: '8.3', title: 'Ethiopia\'s Peacekeeping Legacy and Pan-Africanism', start: 156, desc: 'Founding of OAU/AU, Addis Ababa as Africa\'s diplomatic capital, and UN/AU peacekeeping contributions.' },
        { num: '8.4', title: 'Transboundary Resource Cooperation in East Africa', start: 160, desc: 'Equitable utilization of transboundary rivers, GERD regional power interconnectivity, and shared prosperity.' }
      ]
    }
  ],

  'book-9-hist': [
    {
      unit_num: 1,
      title: 'The Discipline of History and Human Evolution',
      start_page: 1,
      end_page: 21,
      topics: [
        { num: '1.1', title: 'Meaning of Prehistory and History', start: 2, desc: 'Distinction between prehistory (before writing) and history (recorded human past).' },
        { num: '1.2', title: 'The Discipline of History', start: 3, desc: 'Importance of history, primary vs secondary sources, dating techniques (radiocarbon, potassium-argon), periodization, and Ethiopian historiography.' },
        { num: '1.3', title: 'The Evolution of Human Beings', start: 9, desc: 'Scientific theory of evolution, hominid fossil discoveries in the Ethiopian Rift Valley (Ardipithecus kadabba/ramidus, Australopithecus afarensis Lucy/Dinknesh, Homo habilis, Homo erectus, Homo sapiens Idaltu).' },
        { num: '1.4', title: 'The Stone Age', start: 14, desc: 'Paleolithic (Oldowan, Acheulean tools), Mesolithic, and Neolithic Revolution (domestication of plants like teff/enset and animals).' },
        { num: '1.5', title: 'The Emergence of States', start: 17, desc: 'Theories of state formation: agriculture surplus, irrigation management, trade, religion, and military leadership.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Ancient World Civilizations up to c. 500 AD',
      start_page: 22,
      end_page: 38,
      topics: [
        { num: '2.1', title: 'Ancient Civilizations of Africa', start: 23, desc: 'Ancient Egypt (Nile gift, pharaohs, pyramids, hieroglyphics, mummification) and Kingdom of Kush/Meroe (iron smelting, Meroitic script).' },
        { num: '2.2', title: 'Civilizations in Asia', start: 25, desc: 'Mesopotamia (Sumerians, cuneiform, Code of Hammurabi), Persia, Ancient India (Indus Valley, Hinduism, Buddhism), and Ancient China (Shang, Zhou, Qin, Han, Great Wall, silk, paper).' },
        { num: '2.3', title: 'Ancient Civilization of Latin America', start: 29, desc: 'Maya, Inca, and Aztec civilizations: astronomical calendars, terraced agriculture, and monumental architecture.' },
        { num: '2.4', title: 'Civilizations in Europe', start: 30, desc: 'Ancient Greece (Athens direct democracy, Sparta, philosophy, Olympics) and Ancient Rome (Roman Republic, Roman Empire, Roman law, engineering).' },
        { num: '2.5', title: 'Rise and Spread of Christianity', start: 34, desc: 'Origins in 1st-century Judea, teachings of Jesus Christ, Roman persecution, Emperor Constantine (Edict of Milan 313 AD), and Council of Nicaea.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Peoples and States in Ethiopia and the Horn to the End of 13th C.',
      start_page: 39,
      end_page: 63,
      topics: [
        { num: '3.1', title: 'Languages, Religions and Peoples of Ethiopia and the Horn', start: 40, desc: 'Afro-Asiatic (Cushitic, Semitic, Omotic) and Nilo-Saharan superfamilies; indigenous religions (Waaqeffanna), Judaism, Christianity (Ezana, Nine Saints), and Islam (First Hijra to Aksum in 615 AD).' },
        { num: '3.2', title: 'Pre-Aksumite States and Their Geographical Setting', start: 52, desc: 'Land of Punt (myrrh, gold, ivory trade with Egypt) and Damat (D\'mt, Yeha temple, Mukarib title, South Arabian contacts).' },
        { num: '3.3', title: 'The Aksumite Kingdom', start: 53, desc: 'Rise of Aksum, Red Sea international trade at Adulis, coinage (gold, silver, bronze), monolithic stelae, territorial expansion, and causes of decline.' },
        { num: '3.4', title: 'The Zagwe Dynasty', start: 55, desc: 'Mara Teklehaimanot, capital at Roha (Adafa), King Lalibela and the eleven rock-hewn monolithic churches, architectural legacy, and end of Zagwe rule (1270).' },
        { num: '3.5', title: 'The Sultanate of Shewa', start: 58, desc: 'Makhzumite dynasty (founded c. 896 AD), trade routes linking the interior highlands with Zeila, and absorption by the Sultanate of Ifat.' }
      ]
    },
    {
      unit_num: 4,
      title: 'The Middle Ages and Early Modern World, c. 500 to 1750s',
      start_page: 64,
      end_page: 82,
      topics: [
        { num: '4.1', title: 'The Middle Ages in Europe', start: 65, desc: 'Western European feudalism (lords, vassals, serfs, manorial system), the Catholic Church, the Byzantine Empire (Justinian Code, Constantinople), and the Crusades.' },
        { num: '4.2', title: 'The Middle Ages in Asia', start: 68, desc: 'Rise and expansion of Islam (Prophet Muhammad, Hijra 622 AD, Umayyad and Abbasid Caliphates, Islamic golden age science), Ottoman Empire, and Ming/Tang/Song China.' },
        { num: '4.3', title: 'Development of Early Capitalism', start: 71, desc: 'Growth of medieval towns, merchant and craft guilds, banking (Medici), joint-stock companies, and mercantilism.' },
        { num: '4.4', title: 'The Age of Explorations and Discoveries', start: 72, desc: 'Portuguese and Spanish maritime voyages: Henry the Navigator, Vasco da Gama, Christopher Columbus, Ferdinand Magellan, and global trade shifts.' },
        { num: '4.5', title: 'The Renaissance', start: 74, desc: 'Italian and Northern European Rebirth: humanism, Leonardo da Vinci, Michelangelo, Shakespeare, Gutenberg printing press, and scientific inquiry (Copernicus, Galileo).' },
        { num: '4.6', title: 'The Reformation', start: 76, desc: 'Martin Luther (95 Theses, 1517), John Calvin, Protestant churches, English Reformation, and the Catholic Counter-Reformation (Council of Trent, Jesuits).' },
        { num: '4.7', title: 'Industrial Revolution', start: 78, desc: 'Origins of the Industrial Revolution in 18th-century Britain: textile mechanization, James Watt\'s steam engine, coal and iron.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Peoples and States of Africa to 1500',
      start_page: 83,
      end_page: 102,
      topics: [
        { num: '5.1', title: 'Languages and Peoples of Africa', start: 84, desc: 'The four major African language superfamilies: Afro-Asiatic, Niger-Congo (including Bantu migrations), Nilo-Saharan, and Khoisan.' },
        { num: '5.2', title: 'States in North Africa', start: 87, desc: 'Fatimid Caliphate in Egypt, Almoravid and Almohad Amazigh (Berber) empires in the Maghreb, and Mamluk rule.' },
        { num: '5.3', title: 'Spread of Islam in West Africa', start: 88, desc: 'Peaceful diffusion of Islam across the Sahara via Amazigh merchants, growth of Islamic scholarship in Timbuktu, Gao, and Kano.' },
        { num: '5.4', title: 'States in Western Africa', start: 89, desc: 'Ancient Ghana (Wagadu), Empire of Mali (Sundiata Keita, Mansa Musa), Songhai Empire (Sunni Ali, Askia Muhammad), Kanem-Bornu, and Hausa city-states.' },
        { num: '5.5', title: 'Equatorial, Central and Eastern Africa', start: 92, desc: 'Kingdom of Kongo, Swahili coastal city-states (Kilwa, Mombasa, Zanzibar, Mogadishu), and Indian Ocean trade.' },
        { num: '5.6', title: 'Southern Africa', start: 94, desc: 'Great Zimbabwe (stone enclosures, gold trade with Sofala), Mutapa (Mwene Mutapa) Empire, and Khoisan/Bantu societies.' },
        { num: '5.7', title: 'Intra and Inter-Continental Relations', start: 96, desc: 'Trans-Saharan gold-salt caravan trade routes and Red Sea / Indian Ocean commercial networks.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Africa and the Outside World 1500–1880s',
      start_page: 103,
      end_page: 118,
      topics: [
        { num: '6.1', title: 'Contact with the Outside World', start: 104, desc: 'Portuguese coastal forts (Elmina, Mombasa), Ottoman presence in North Africa, and shifting trade patterns.' },
        { num: '6.2', title: 'Slavery and the Trans-Atlantic Slave Trade', start: 106, desc: 'Triangular Trade between Europe, West Africa, and the Americas; the Middle Passage; demographic, economic, and political devastation in Africa.' },
        { num: '6.3', title: 'The "Legitimate" Trade', start: 111, desc: 'Abolition of the slave trade in the 19th century and transition to exporting palm oil, groundnuts, ivory, gum arabic, and cloves.' },
        { num: '6.4', title: 'The White Settlement in South Africa', start: 112, desc: 'Dutch East India Company settlement at the Cape (1652), Boers/Afrikaners, Khoikhoi and Xhosa wars, British takeover, the Great Trek, and Zulu resistance under Shaka.' },
        { num: '6.5', title: 'European Explorers and Missionaries', start: 115, desc: '19th-century European exploration of African rivers (Mungo Park, David Livingstone, Henry Morton Stanley) and missionary activities as precursors to colonization.' }
      ]
    },
    {
      unit_num: 7,
      title: 'States, Principalities, Population Movements & Interactions in Ethiopia 13th to Mid-16th C.',
      start_page: 119,
      end_page: 152,
      topics: [
        { num: '7.1', title: 'The "Solomonic" Dynasty & the Christian Kingdom, 13th–16th C.', start: 120, desc: 'Yekuno Amlak (1270), Kibre Negest ideology, roving royal capitals, Amba Gishen royal prison, territorial expansion under Amde Tsiyon and Zara Yaqob.' },
        { num: '7.2', title: 'The Muslim Principalities', start: 123, desc: 'Zeila trade route and rise of Muslim sultanates: Ifat (Walasma dynasty), Hadiya, Fatagar, Dawaro, Bali, Mora, Adal.' },
        { num: '7.3', title: 'Relationship Between the Christian Kingdom and the Sultanate of Adal, 1520s–1559', start: 126, desc: 'Rivalry over control of the Zeila trade route, Imam Ahmad ibn Ibrahim al-Ghazi (Ahmad Gragn), Battle of Shimbra Kure (1529), Portuguese and Ottoman intervention, Battle of Woina Dega (1543).' },
        { num: '7.4', title: 'Political and Socio-Economic Conditions of Southern and Central States in Ethiopia', start: 130, desc: 'Kingdoms of Enarya, Bizamo, Damot, Wolaita (Kawo), Kafa (Tato), Yem, Gamo, Hadiya, Dawuro, and Kambata.' },
        { num: '7.5', title: 'Population Movements, Expansion and Integration in Ethiopia', start: 133, desc: 'Argobba, Afar, and Somali movements; the 16th-century Oromo population movement, causes, directions, and Barentu/Borana confederacies.' },
        { num: '7.6', title: 'Gadaa System of the Oromo', start: 138, desc: 'Age-grades, 8-year democratic power transfer, Chaffe assembly, Abba Bokku, Abba Dula, Qallu institution, Siqqee women\'s rights, and Moggasa/Guddifacha integration.' },
        { num: '7.7', title: 'Moggasa and Guddifacha & Egalitarian Systems of Governance', start: 143, desc: 'Social cohesion mechanisms and indigenous egalitarian governance systems (Sidama Luwa, Gedeo Baalle, Konso Xora, Burji, Nuer, Anuak).' }
      ]
    },
    {
      unit_num: 8,
      title: 'Political, Social and Economic Processes in Ethiopia Mid-16th to Mid-19th C.',
      start_page: 153,
      end_page: 187,
      topics: [
        { num: '8.1', title: 'Peoples and States of the Eastern, Central, Southern and Western Regions', start: 154, desc: 'Emirate of Harar (Amir Nur, Jugol wall), Afar Sultanates (Awssa), Somali, Gurage, Silt\'e, Hadiya, Kambata, Wolaita, Kafa, Gibe Oromo Monarchies (Jimma, Limmu-Enarya, Gumma, Gomma, Gera), Leqa-Naqamte, Leqa-Qellam, Sheikhdoms of Assosa/Bela Shangul/Khomosha, and Nilotic communities.' },
        { num: '8.2', title: 'Gondarine Period (1636–1769)', start: 178, desc: 'Susenyos and Catholic interlude, Emperor Fasilides\' Closed-Door Policy and founding of Gondar (1636), Fasil Ghebbi castles, Iyasu I, Empress Mentewab, urban commerce, and religious debates.' },
        { num: '8.3', title: 'The Zemene-Mesafint (1769–1855)', start: 181, desc: 'Era of the Princes triggered by Ras Mikael Sehul (1769); regional warlordism, decline of imperial authority, devastation of peasantry, and Battle of Debre Abbay (1831).' },
        { num: '8.4', title: 'The Yejju Dynasty', start: 183, desc: 'Ali Gwangul (Ali I), capital at Debre Tabor, Ras Gugsa Merso, and Yejju regency (Enderase) over the Gondarine puppet emperors.' },
        { num: '8.5', title: 'The Kingdom of Shewa', start: 185, desc: 'Founded by Negasi Kristos in Menz; autonomous consolidation under Sahle Selassie (1813–1847), stability, trade, and foreign diplomacy.' }
      ]
    },
    {
      unit_num: 9,
      title: 'The Age of Revolutions 1750s to 1815',
      start_page: 188,
      end_page: 210,
      topics: [
        { num: '9.1', title: 'Industrial Capitalism in Europe', start: 189, desc: 'Factory system, steam power, railway revolution, urbanization, rise of industrial bourgeoisie and proletariat working class.' },
        { num: '9.2', title: 'The French Revolution (1789–1799)', start: 191, desc: 'Old Regime Three Estates, Enlightenment ideas (Montesquieu, Voltaire, Rousseau), Storming of the Bastille (July 14, 1789), Declaration of the Rights of Man and Citizen, Jacobin Reign of Terror, and abolition of feudalism.' },
        { num: '9.3', title: 'The Napoleonic Era (1799–1815)', start: 196, desc: 'Rise of Napoleon Bonaparte, Napoleonic Code, Continental System, spread of revolutionary reforms across Europe, Russian campaign (1812), and Battle of Waterloo (1815).' },
        { num: '9.4', title: 'American War of Independence', start: 201, desc: 'Thirteen British colonies, "No taxation without representation," Stamp Act, Boston Tea Party, Declaration of Independence (July 4, 1776, Thomas Jefferson), George Washington, Treaty of Paris (1783), and US Constitution.' },
        { num: '9.5', title: 'The Congress of Vienna (1814–1815)', start: 203, desc: 'Metternich, Castlereagh, Talleyrand; principles of Legitimacy, Balance of Power, and Compensation; redrawing the map of Europe.' }
      ]
    }
  ]
};
