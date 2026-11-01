import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'database.json');
const dbData = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

// Exact authentic Ethiopian Grade 12 Curriculum Topics & Descriptions
export const grade12Curriculum: Record<string, Record<number, Array<{ topic_number: string; title: string; description: string; start_page: number }>>> = {
  'book-12-math': {
    1: [
      {
        topic_number: '1.1',
        title: 'Arithmetic Sequences and Series',
        description: 'Common difference d, recursive definition, general n-th term a_n = a_1 + (n-1)d, arithmetic means, partial sum S_n = n/2(2a_1 + (n-1)d) = n/2(a_1 + a_n).',
        start_page: 1
      },
      {
        topic_number: '1.2',
        title: 'Geometric Sequences and Series',
        description: 'Common ratio r, general term a_n = a_1·r^(n-1), geometric means, sum of finite geometric series S_n = a_1(1-r^n)/(1-r), convergence conditions and infinite sum S_inf = a_1/(1-r) for |r| < 1.',
        start_page: 12
      },
      {
        topic_number: '1.3',
        title: 'Sigma Notation and Mathematical Induction',
        description: 'Properties of summation operator Σ, index shifts, linearity of sums, the Principle of Mathematical Induction (Base step, Inductive hypothesis, Inductive proof step).',
        start_page: 24
      },
      {
        topic_number: '1.4',
        title: 'Real-World Applications of Sequences and Series',
        description: 'Compound interest formulas A = P(1 + r/n)^(nt), simple annuities, depreciation models, biological cell division sequences, and national economic growth projections.',
        start_page: 36
      }
    ],
    2: [
      {
        topic_number: '2.1',
        title: 'Intuitive and Algebraic Concept of Limits',
        description: 'Definition of limits, one-sided limits (left-hand and right-hand), limit laws (sum, product, quotient, power), and evaluating limits by factoring, expansion, and conjugate rationalization.',
        start_page: 48
      },
      {
        topic_number: '2.2',
        title: 'Limits Involving Infinity and Indeterminate Forms',
        description: 'Infinite limits, limits at infinity, resolving 0/0 and inf/inf forms, identifying horizontal and vertical asymptotes of rational functions, and Squeeze (Sandwich) Theorem.',
        start_page: 60
      },
      {
        topic_number: '2.3',
        title: 'Continuity of Functions',
        description: 'Three conditions for continuity at a point (f(c) defined, lim f(x) exists, lim f(x) = f(c)), continuity on intervals, removable vs essential discontinuities, and Intermediate Value Theorem (IVT).',
        start_page: 72
      },
      {
        topic_number: '2.4',
        title: 'Special Trigonometric Limits',
        description: 'Fundamental limit lim(x->0) [sin(x)/x] = 1, lim(x->0) [(1 - cos(x))/x] = 0, and evaluating trigonometric indeterminate limits in EUEE.',
        start_page: 84
      }
    ],
    3: [
      {
        topic_number: '3.1',
        title: 'The Derivative as an Instantaneous Rate of Change',
        description: 'Difference quotient, limit definition f\'(x) = lim(h->0) [f(x+h) - f(x)]/h, geometric slope of tangent line, instantaneous velocity and acceleration.',
        start_page: 96
      },
      {
        topic_number: '3.2',
        title: 'Fundamental Rules of Differentiation',
        description: 'Constant rule, Power rule d/dx(x^n) = n·x^(n-1), Constant multiple rule, Sum and difference rules, Product rule (uv)\' = u\'v + uv\', Quotient rule (u/v)\' = (u\'v - uv\')/v^2.',
        start_page: 108
      },
      {
        topic_number: '3.3',
        title: 'The Chain Rule and Implicit Differentiation',
        description: 'Derivatives of composite functions dy/dx = (dy/du)·(du/dx), extended power rule, implicit differentiation for curves F(x, y) = 0, higher order derivatives f\'\'(x) and f^(n)(x).',
        start_page: 120
      },
      {
        topic_number: '3.4',
        title: 'Derivatives of Trigonometric, Exponential and Logarithmic Functions',
        description: 'Derivatives of sin x, cos x, tan x, sec x, e^x, a^x, ln x, log_a x, and logarithmic differentiation for complex products.',
        start_page: 132
      }
    ],
    4: [
      {
        topic_number: '4.1',
        title: 'Critical Points, Monotonicity and Extreme Values',
        description: 'Critical numbers (where f\'(c) = 0 or undefined), Fermat\'s Theorem, Extreme Value Theorem on closed intervals [a, b], First Derivative Test for local maxima and minima.',
        start_page: 144
      },
      {
        topic_number: '4.2',
        title: 'Concavity, Points of Inflection and Curve Sketching',
        description: 'Second derivative test for local extrema, concavity test (f\'\'(x) > 0 concave up, f\'\'(x) < 0 concave down), points of inflection, combining asymptotes and intercepts for complete curve sketching.',
        start_page: 156
      },
      {
        topic_number: '4.3',
        title: 'Applied Optimization Problems',
        description: 'Translating word problems into objective functions, constraints, domain restrictions, maximizing profit/area/volume, minimizing cost/material in construction and commerce.',
        start_page: 168
      },
      {
        topic_number: '4.4',
        title: 'Related Rates of Change',
        description: 'Differentiating with respect to time t using chain rule, geometric modeling (expanding spherical balloons, draining conical tanks, sliding ladders, shadow movement).',
        start_page: 180
      }
    ],
    5: [
      {
        topic_number: '5.1',
        title: 'Antiderivatives and Indefinite Integrals',
        description: 'Definition of antiderivative, indefinite integral symbol ∫ f(x) dx = F(x) + C, power rule for integration ∫ x^n dx = (x^(n+1))/(n+1) + C (n ≠ -1), integrals of trigonometric and exponential functions.',
        start_page: 192
      },
      {
        topic_number: '5.2',
        title: 'Integration by Substitution (u-Substitution)',
        description: 'Reversing the chain rule: ∫ f(g(x))g\'(x) dx = ∫ f(u) du, choosing appropriate substitution variable u, transforming differentials and limits of integration.',
        start_page: 204
      },
      {
        topic_number: '5.3',
        title: 'The Fundamental Theorem of Calculus (FTC)',
        description: 'Riemann sums and area under curve, Part 1: d/dx ∫_a^x f(t) dt = f(x), Part 2: ∫_a^b f(x) dx = F(b) - F(a), properties of definite integrals (linearity, additivity of intervals).',
        start_page: 216
      },
      {
        topic_number: '5.4',
        title: 'Applications of Definite Integrals',
        description: 'Calculating exact planar area between curves f(x) and g(x), net displacement vs total distance traveled given velocity v(t), average value of a continuous function.',
        start_page: 228
      }
    ],
    6: [
      {
        topic_number: '6.1',
        title: 'Vectors and Coordinate System in Three-Dimensional Space',
        description: 'Right-handed 3D Cartesian coordinates (x, y, z), distance formula in 3D d = √((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2), midpoint formula, standard unit vectors i, j, k.',
        start_page: 240
      },
      {
        topic_number: '6.2',
        title: 'Scalar (Dot) Product and Vector Projections in 3D',
        description: 'Dot product u·v = u1v1 + u2v2 + u3v3 = |u||v|cos θ, orthogonality criterion (u·v = 0), direction cosines, scalar and vector projections proj_v u.',
        start_page: 252
      },
      {
        topic_number: '6.3',
        title: 'Cross Product of Vectors in 3D Space',
        description: 'Vector product u × v, determinant calculation, magnitude |u × v| = |u||v|sin θ (area of parallelogram), right-hand rule for direction, collinearity condition u × v = 0.',
        start_page: 264
      },
      {
        topic_number: '6.4',
        title: 'Equations of Lines and Planes in 3D Space',
        description: 'Vector and parametric equations of lines in space r(t) = r_0 + t·v, symmetric equations, standard equation of a plane A(x - x0) + B(y - y0) + C(z - z0) = 0 using normal vector n.',
        start_page: 276
      }
    ]
  },
  'book-12-phys': {
    1: [
      {
        topic_number: '1.1',
        title: 'Zeroth and First Laws of Thermodynamics',
        description: 'Thermal equilibrium and temperature concept (Zeroth law); Internal energy U, heat Q, and work done W; First law ΔU = Q - W; Thermodynamic processes: Isochoric (W = 0), Isobaric (W = PΔV), Isothermal (ΔU = 0, Q = W), Adiabatic (Q = 0, ΔU = -W).',
        start_page: 1
      },
      {
        topic_number: '1.2',
        title: 'Molar Heat Capacities and Ideal Gas Work',
        description: 'Molar heat capacity at constant volume Cv and constant pressure Cp; Mayer\'s relation Cp - Cv = R; adiabatic index γ = Cp/Cv; PV diagram work calculation W = area under PV curve.',
        start_page: 14
      },
      {
        topic_number: '1.3',
        title: 'Second Law of Thermodynamics and Entropy',
        description: 'Kelvin-Planck statement (no heat engine can convert 100% of absorbed heat into work); Clausius statement (heat cannot spontaneously flow from cold to hot reservoir); Entropy S as measure of disorder, ΔS ≥ 0 for isolated systems.',
        start_page: 28
      },
      {
        topic_number: '1.4',
        title: 'Heat Engines, Refrigerators and the Carnot Cycle',
        description: 'Cyclic heat engines, thermal efficiency η = W/Q_H = 1 - Q_C/Q_H; Carnot cycle (two isothermal, two adiabatic processes); maximum Carnot efficiency η_Carnot = 1 - T_C/T_H; Coefficient of Performance (COP) of refrigerators.',
        start_page: 42
      }
    ],
    2: [
      {
        topic_number: '2.1',
        title: 'Coulomb\'s Law and Electric Field Distribution',
        description: 'Quantization and conservation of electric charge; Coulomb\'s inverse-square law F = k|q1q2|/r^2 in vacuum and dielectric media; Electric field vector E = F/q0; Principle of superposition for discrete and continuous charge distributions.',
        start_page: 56
      },
      {
        topic_number: '2.2',
        title: 'Electric Potential Energy and Electric Potential',
        description: 'Electrostatic work and potential energy U = kq1q2/r; Electric potential V = U/q0 = kQ/r; Potential difference ΔV = -∫ E·dl; Equipotential surfaces and relationship E = -dV/dr.',
        start_page: 70
      },
      {
        topic_number: '2.3',
        title: 'Capacitance and Dielectrics',
        description: 'Definition of capacitance C = Q/V; Parallel plate capacitor formula C = ε0·A/d; Effect of dielectric constant κ (C = κC0); Series and parallel combinations of capacitors; Energy stored in electrostatic field U = 1/2 CV^2.',
        start_page: 84
      },
      {
        topic_number: '2.4',
        title: 'Motion of Charged Particles in Uniform Electric Fields',
        description: 'Trajectory of electron or proton in uniform electric field (parabolic motion analogous to projectile kinematics), acceleration a = qE/m, deflection in cathode ray tube (CRT) and mass spectrometers.',
        start_page: 98
      }
    ],
    3: [
      {
        topic_number: '3.1',
        title: 'Electric Current, Drift Velocity and Current Density',
        description: 'Microscopic conduction model: free electron density n, drift velocity v_d, electric current I = n·q·A·v_d; Current density J = I/A = σE; Electrical conductivity σ and resistivity ρ = 1/σ.',
        start_page: 112
      },
      {
        topic_number: '3.2',
        title: 'Ohm\'s Law, Resistance and Temperature Dependence',
        description: 'Ohmic vs non-ohmic materials; Resistance formula R = ρL/A; Temperature dependence of resistivity ρ(T) = ρ0[1 + α(T - T0)]; Superconductivity phenomenon at critical temperatures.',
        start_page: 126
      },
      {
        topic_number: '3.3',
        title: 'Electromotive Force, Internal Resistance and Terminal Voltage',
        description: 'Ideal vs real voltage sources; Electromotive force (EMF) ε, internal resistance r, terminal voltage V = ε - Ir; Maximum power transfer theorem (R_load = r for P_max).',
        start_page: 140
      },
      {
        topic_number: '3.4',
        title: 'Kirchhoff\'s Laws and Complex Circuit Networks',
        description: 'Kirchhoff\'s Current Law (KCL - charge conservation at junctions); Kirchhoff\'s Voltage Law (KVL - energy conservation in closed loops); Sign conventions for resistors and EMF sources; Solving multi-loop bridge networks.',
        start_page: 154
      }
    ],
    4: [
      {
        topic_number: '4.1',
        title: 'Magnetic Fields and Magnetic Forces on Charges and Currents',
        description: 'Lorentz force on moving charge F = q(v × B) = qvB sin θ; Circular and helical motion of charges in magnetic field (radius r = mv/qB, cyclotron frequency); Magnetic force on current-carrying conductor F = I(L × B) = ILB sin θ.',
        start_page: 168
      },
      {
        topic_number: '4.2',
        title: 'Sources of Magnetic Fields: Biot-Savart and Ampère\'s Laws',
        description: 'Biot-Savart law for magnetic field of current element; Magnetic field around long straight wire B = μ0·I/(2πr); Field at center of circular loop; Field inside an ideal solenoid B = μ0·n·I; Ampère\'s Circuital Law ∮ B·dl = μ0·I_enc.',
        start_page: 182
      },
      {
        topic_number: '4.3',
        title: 'Faraday\'s Law and Lenz\'s Law of Induction',
        description: 'Magnetic flux Φ_B = B·A·cos θ; Faraday\'s induction law ε = -N(dΦ_B/dt); Lenz\'s law as consequence of conservation of energy (induced current opposes flux change); Motional EMF ε = B·L·v for moving rod.',
        start_page: 196
      },
      {
        topic_number: '4.4',
        title: 'Inductance and Energy in Magnetic Fields',
        description: 'Self-inductance L = NΦ/I; Back EMF in inductors ε_L = -L(dI/dt); Mutual inductance M; Magnetic energy stored in inductor U_B = 1/2 L·I^2; Energy density of magnetic field u_B = B^2/(2μ0).',
        start_page: 210
      }
    ],
    5: [
      {
        topic_number: '5.1',
        title: 'Generation of Alternating Current and AC Quantities',
        description: 'AC generator principle (rotating coil in uniform B-field); Sinusoidal voltage v(t) = V0 sin(ωt) and current i(t) = I0 sin(ωt - φ); Peak value V0, RMS value V_rms = V0/√2 = 0.707 V0, root-mean-square current I_rms = I0/√2.',
        start_page: 224
      },
      {
        topic_number: '5.2',
        title: 'AC Circuits with Pure R, L, and C Elements',
        description: 'Pure resistor (current in phase with voltage); Pure inductor (voltage leads current by 90° or π/2, inductive reactance X_L = ωL = 2πfL); Pure capacitor (current leads voltage by 90°, capacitive reactance X_C = 1/(ωC) = 1/(2πfC)); Phasor diagrams.',
        start_page: 238
      },
      {
        topic_number: '5.3',
        title: 'Series RLC Circuits and Electrical Resonance',
        description: 'Impedance Z = √(R^2 + (X_L - X_C)^2); Phase angle tan φ = (X_L - X_C)/R; Resonance condition X_L = X_C giving resonant frequency f0 = 1/(2π√(LC)); Quality factor Q and power factor cos φ = R/Z; Average power P_avg = V_rms·I_rms·cos φ.',
        start_page: 252
      },
      {
        topic_number: '5.4',
        title: 'Electrical Transformers and High-Voltage Power Transmission',
        description: 'Principle of mutual induction in iron core; Transformer turns ratio V_s/V_p = N_s/N_p = I_p/I_s; Step-up and step-down transformers; Energy losses (Joule heating, eddy currents, hysteresis); Ethiopia\'s national power grid (GERD to regional sub-stations).',
        start_page: 266
      }
    ],
    6: [
      {
        topic_number: '6.1',
        title: 'Bohr\'s Model of the Atom and Atomic Spectra',
        description: 'Rutherford alpha scattering experiment; Bohr\'s quantum postulates (quantized angular momentum L = nh/2π); Energy levels of hydrogen E_n = -13.6/n^2 eV; Rydberg formula 1/λ = R_H (1/n1^2 - 1/n2^2); Spectral series: Lyman (UV), Balmer (visible), Paschen (IR).',
        start_page: 280
      },
      {
        topic_number: '6.2',
        title: 'Photoelectric Effect and Wave-Particle Duality',
        description: 'Photoelectric threshold frequency f0, work function Φ; Einstein\'s photon energy equation E = hf = Φ + KE_max = hf0 + e·V_stop; Failure of classical wave theory; de Broglie wavelength λ = h/p = h/(mv); Wave-particle duality of electrons.',
        start_page: 294
      },
      {
        topic_number: '6.3',
        title: 'Nuclear Structure, Mass Defect and Binding Energy',
        description: 'Nucleons (protons and neutrons), atomic number Z, mass number A, isotopes; Strong nuclear force; Mass defect Δm = [Z·m_p + (A-Z)m_n] - M_nucleus; Einstein mass-energy equivalence E = Δm·c^2; Binding energy per nucleon curve (maximum at Fe-56).',
        start_page: 308
      },
      {
        topic_number: '6.4',
        title: 'Radioactivity, Nuclear Reactions, Fission and Fusion',
        description: 'Natural radioactivity: Alpha decay (He-4 nucleus), Beta-minus (electron + antineutrino), Beta-plus (positron + neutrino), Gamma decay (high-energy photons); Radioactive decay law N(t) = N0 e^(-λt); Half-life T_1/2 = ln 2 / λ = 0.693/λ; Nuclear fission vs thermonuclear fusion.',
        start_page: 322
      }
    ]
  },
  'book-12-chem': {
    1: [
      {
        topic_number: '1.1',
        title: 'Types of Solutions and the Dissolution Process',
        description: 'Solute-solvent interactions, enthalpy of solution ΔH_sol = ΔH_solute + ΔH_solvent + ΔH_mix, lattice energy vs hydration energy, factors affecting solubility (nature of solute/solvent, temperature, pressure - Henry\'s law C = k·P).',
        start_page: 1
      },
      {
        topic_number: '1.2',
        title: 'Concentration Units and Solution Stoichiometry',
        description: 'Molarity M (mol/L), Molality m (mol/kg solvent), Mole fraction X_i, Mass percent (% w/w), Parts per million (ppm); Dilution equation M1V1 = M2V2; Acid-base and precipitation stoichiometric calculations.',
        start_page: 15
      },
      {
        topic_number: '1.3',
        title: 'Colligative Properties of Solutions',
        description: 'Properties depending strictly on particle number: Vapor pressure lowering (Raoult\'s law P_A = X_A·P°_A), Boiling point elevation ΔT_b = K_b·m·i, Freezing point depression ΔT_f = K_f·m·i, Osmotic pressure Π = iMRT; van \'t Hoff factor i for electrolytes.',
        start_page: 29
      },
      {
        topic_number: '1.4',
        title: 'Colloids and Suspensions',
        description: 'Distinguishing true solutions, colloids, and suspensions by particle size; Classification of colloids (sols, gels, aerosols, emulsions, foams); Optical properties (Tyndall effect), kinetic properties (Brownian motion), electrical charge on colloidal particles, coagulation.',
        start_page: 43
      }
    ],
    2: [
      {
        topic_number: '2.1',
        title: 'The Concept of Dynamic Chemical Equilibrium',
        description: 'Reversible vs irreversible reactions; Characteristics of dynamic equilibrium (rates of forward and reverse reactions are equal, macroscopic concentrations remain constant); Equilibrium law and mass action expression.',
        start_page: 57
      },
      {
        topic_number: '2.2',
        title: 'Equilibrium Constants Kc and Kp',
        description: 'Concentration equilibrium constant Kc; Partial pressure constant Kp; Relationship Kp = Kc·(RT)^(Δn); Homogeneous vs heterogeneous equilibria (excluding pure solids and liquids); Reaction quotient Q and predicting direction of shift (Q < K, Q = K, Q > K).',
        start_page: 71
      },
      {
        topic_number: '2.3',
        title: 'Le Chatelier\'s Principle and Equilibrium Shifts',
        description: 'Effect of concentration changes, temperature changes (endothermic vs exothermic reactions - only T changes the value of K), pressure and volume changes for gaseous equilibria; Effect of catalysts (increases rate without shifting position); Industrial optimization of Haber and Contact processes.',
        start_page: 85
      },
      {
        topic_number: '2.4',
        title: 'Phase Equilibrium and Phase Diagrams',
        description: 'Liquid-vapor dynamic equilibrium and vapor pressure; Phase diagrams for single-component systems (H2O and CO2); Triple point, critical temperature and critical pressure; Sublimation, melting, and boiling curves.',
        start_page: 99
      }
    ],
    3: [
      {
        topic_number: '3.1',
        title: 'Acid-Base Theories and Autoionization of Water',
        description: 'Arrhenius, Brønsted-Lowry, and Lewis theories of acids and bases; Conjugate acid-base pairs; Amphiprotic species; Self-ionization of water H2O + H2O ⇌ H3O+ + OH-; Ion-product constant of water Kw = [H3O+][OH-] = 1.0 × 10^(-14) at 25°C.',
        start_page: 113
      },
      {
        topic_number: '3.2',
        title: 'pH, pOH and Strengths of Acids and Bases',
        description: 'pH = -log[H3O+], pOH = -log[OH-], pH + pOH = 14; Strong acids and bases (100% dissociation); Weak acids and acid dissociation constant Ka; Weak bases and base dissociation constant Kb; Relationship Ka·Kb = Kw; Percent ionization.',
        start_page: 127
      },
      {
        topic_number: '3.3',
        title: 'Salt Hydrolysis and Acid-Base Character of Salts',
        description: 'Hydrolysis reactions of cations and anions in aqueous solution; Salts of strong acid + strong base (neutral pH = 7); Salts of strong acid + weak base (acidic pH < 7); Salts of weak acid + strong base (basic pH > 7); Calculating pH of hydrolyzed salt solutions.',
        start_page: 141
      },
      {
        topic_number: '3.4',
        title: 'Buffer Solutions and Acid-Base Titrations',
        description: 'Composition and mechanism of acidic and basic buffer solutions; Henderson-Hasselbalch equation pH = pKa + log([A-]/[HA]); Buffer capacity; Strong acid-strong base and weak acid-strong base titration curves; Equivalence point vs end point; Acid-base indicator selection.',
        start_page: 155
      }
    ],
    4: [
      {
        topic_number: '4.1',
        title: 'Oxidation-Reduction Reactions and Electrochemical Cells',
        description: 'Oxidation numbers, oxidation as loss of electrons, reduction as gain (OIL RIG); Balancing redox equations using the ion-electron method in acidic and basic media; Galvanic (voltaic) cells vs electrolytic cells; Anode (oxidation) and cathode (reduction); Salt bridge function.',
        start_page: 169
      },
      {
        topic_number: '4.2',
        title: 'Standard Electrode Potentials and Cell EMF',
        description: 'Standard Hydrogen Electrode (SHE, E° = 0.00 V); Standard reduction potentials table; Standard cell EMF E°cell = E°cathode - E°anode; Spontaneity criterion: E°cell > 0 corresponds to ΔG° < 0 (ΔG° = -nFE°cell); Electrochemical series.',
        start_page: 183
      },
      {
        topic_number: '4.3',
        title: 'The Nernst Equation and Commercial Batteries',
        description: 'Effect of non-standard concentrations: Nernst equation E = E° - (0.0592/n)·log Q at 298 K; Concentration cells; Primary batteries (dry Leclanché cell, alkaline cell); Secondary batteries (lead-acid accumulator, lithium-ion battery); Fuel cells (H2-O2 fuel cell).',
        start_page: 197
      },
      {
        topic_number: '4.4',
        title: 'Electrolysis and Quantitative Laws of Electrolysis',
        description: 'Electrolysis of molten NaCl (Downs cell) and aqueous NaCl (chlor-alkali process); Overpotential; Faraday\'s First Law (mass deposited proportional to electric charge m ∝ Q); Faraday\'s Second Law; Faraday\'s constant F = 96,485 C/mol e-; Industrial electroplating and aluminum refining (Hall-Héroult process).',
        start_page: 211
      }
    ],
    5: [
      {
        topic_number: '5.1',
        title: 'Isomerism and Structural Diversity in Organic Compounds',
        description: 'Structural isomerism (chain, positional, functional group isomerism); Stereoisomerism: Geometric cis-trans isomerism around C=C double bonds; Optical isomerism, chiral carbon centers, enantiomers, and plane-polarized light rotation.',
        start_page: 225
      },
      {
        topic_number: '5.2',
        title: 'Alcohols, Phenols and Ethers',
        description: 'IUPAC nomenclature; Primary, secondary, tertiary alcohols; Hydrogen bonding and solubility; Reactions: oxidation of 1° alcohols to aldehydes/acids, 2° alcohols to ketones, 3° resist oxidation; Lucas test; Acidity of phenols; Ethers synthesis and inert properties.',
        start_page: 239
      },
      {
        topic_number: '5.3',
        title: 'Aldehydes and Ketones',
        description: 'Carbonyl group structure and polarity; IUPAC nomenclature; Nucleophilic addition reactions with HCN, Grignard reagents, and alcohols; Oxidation tests: Tollens\' reagent (silver mirror test) and Fehling\'s solution distinguishing aldehydes from ketones; Addition of 2,4-DNP.',
        start_page: 253
      },
      {
        topic_number: '5.4',
        title: 'Carboxylic Acids, Esters, Fats and Oils',
        description: 'Carboxylic acid acidity and resonance stabilization of carboxylate ion; Esterification reaction (carboxylic acid + alcohol in presence of acid catalyst); Hydrolysis of esters; Saponification of fats and oils into soap (sodium carboxylates) and glycerol; Detergent action and cleansing mechanism.',
        start_page: 267
      },
      {
        topic_number: '5.5',
        title: 'Synthetic Polymers and Important Biomolecules',
        description: 'Addition polymerization (polyethylene, PVC, polystyrene); Condensation polymerization (nylon-6,6, Dacron polyester); Natural polymers: Carbohydrates (monosaccharides, starch, cellulose), Proteins (amino acids, peptide bonds, denaturation), and Lipids.',
        start_page: 281
      }
    ]
  },
  'book-12-bio': {
    1: [
      {
        topic_number: '1.1',
        title: 'DNA Molecular Structure and Semiconservative Replication',
        description: 'Watson-Crick double helix model, antiparallel strands (5\' to 3\' and 3\' to 5\'), nucleotide units (deoxyribose, phosphate, purine/pyrimidine bases), Chargaff\'s rules (%A=%T, %G=%C); Semiconservative replication: Helicase, DNA polymerase, RNA primase, Okazaki fragments, and DNA ligase.',
        start_page: 1
      },
      {
        topic_number: '1.2',
        title: 'Transcription and Post-Transcriptional RNA Processing',
        description: 'Central dogma of molecular biology; RNA structure vs DNA; Transcription by RNA Polymerase binding promoter region; Template strand reading 3\' to 5\', mRNA synthesis 5\' to 3\'; Eukaryotic RNA processing: 5\' capping, 3\' poly-A tailing, splicing out non-coding introns by spliceosomes.',
        start_page: 15
      },
      {
        topic_number: '1.3',
        title: 'The Genetic Code, Translation and Protein Synthesis',
        description: 'Features of the genetic code (triplet, universal, degenerate/redundant, non-overlapping, start codon AUG, stop codons UAA, UAG, UGA); tRNA structure and anticodon loop; Ribosome structure (A, P, E sites); Translation stages: Initiation, Elongation (peptide bond formation), Termination.',
        start_page: 29
      },
      {
        topic_number: '1.4',
        title: 'Recombinant DNA Technology, PCR and Biotechnology Applications',
        description: 'Restriction endonucleases ("molecular scissors" cutting palindromic recognition sequences), DNA ligase, plasmid vectors, bacterial transformation; Polymerase Chain Reaction (PCR: Denaturation, Annealing, Extension); Gel electrophoresis; Applications in Ethiopian agriculture (tissue culture of teff, coffee) and medicine (recombinant insulin).',
        start_page: 43
      }
    ],
    2: [
      {
        topic_number: '2.1',
        title: 'Mendelian Genetics: Monohybrid and Dihybrid Crosses',
        description: 'Mendel\'s experiments on Pisum sativum; Law of Segregation (alleles separate during meiosis, monohybrid 3:1 phenotypic and 1:2:1 genotypic ratios); Law of Independent Assortment (unlinked genes assort independently, dihybrid 9:3:3:1 ratio); Test cross with homozygous recessive.',
        start_page: 57
      },
      {
        topic_number: '2.2',
        title: 'Non-Mendelian Patterns of Inheritance',
        description: 'Incomplete dominance (intermediate heterozygote phenotype 1:2:1 ratio, e.g. Snapdragon flowers); Codominance (both alleles expressed simultaneously, e.g. sickle cell trait HbA/HbS, MN blood group); Multiple alleles (ABO blood group system with IA, IB, i); Polygenic quantitative traits (skin color, human height).',
        start_page: 71
      },
      {
        topic_number: '2.3',
        title: 'Sex Determination, Sex-Linkage and Pedigree Analysis',
        description: 'Chromosomal sex determination (XX/XY in humans, ZW/ZZ in birds); Sex-linked inheritance of X-linked recessive traits (Hemophilia A, Red-green color blindness); Hemizygous males (XY) expressing recessive alleles; Interpreting human pedigree charts (autosomal dominant/recessive vs X-linked).',
        start_page: 85
      },
      {
        topic_number: '2.4',
        title: 'Mutations and Chromosomal Abnormalities',
        description: 'Gene/point mutations (silent, missense, nonsense, frameshift insertions/deletions); Mutagenic agents (UV, ionizing radiation, chemicals); Chromosomal structural alterations (deletion, duplication, inversion, translocation); Numerical aneuploidy due to nondisjunction during meiosis (Down syndrome Trisomy 21, Turner syndrome XO, Klinefelter syndrome XXY).',
        start_page: 99
      }
    ],
    3: [
      {
        topic_number: '3.1',
        title: 'Empirical Evidence for Evolutionary Change',
        description: 'Paleontological fossil record and transitional fossils (e.g. Archaeopteryx, Lucy/Australopithecus afarensis discovered in the Afar Depression of Ethiopia); Comparative anatomy: Homologous structures (divergent evolution) vs Analogous structures (convergent evolution), vestigial structures; Biochemical and DNA sequence homology.',
        start_page: 113
      },
      {
        topic_number: '3.2',
        title: 'Theories of Evolution: Lamarckism vs. Darwinian Natural Selection',
        description: 'Lamarck\'s theory of inheritance of acquired characteristics and disuse; Charles Darwin and Alfred Russel Wallace: Overproduction, struggle for existence, variation within populations, differential survival and reproduction ("survival of the fittest"); Modern evolutionary synthesis combining Mendelian genetics with natural selection.',
        start_page: 127
      },
      {
        topic_number: '3.3',
        title: 'Population Genetics and the Hardy-Weinberg Principle',
        description: 'Gene pool, allele frequency (p + q = 1) and genotype frequency (p^2 + 2pq + q^2 = 1); Five conditions for Hardy-Weinberg genetic equilibrium (large population, random mating, no mutation, no gene flow/migration, no natural selection); Evolutionary forces disrupting equilibrium: Genetic drift (bottleneck and founder effects), gene flow, natural selection.',
        start_page: 141
      },
      {
        topic_number: '3.4',
        title: 'Speciation Mechanisms and Ethiopian Endemic Biodiversity',
        description: 'Biological species concept; Reproductive isolating mechanisms: Prezygotic (temporal, behavioral, ecological, mechanical, gametic isolation) and Postzygotic (hybrid inviability, hybrid sterility); Allopatric speciation via geographical barriers vs Sympatric speciation (polyploidy); Adaptive radiation of Ethiopian highlands endemic wildlife (Walia Ibex, Ethiopian Wolf, Gelada Baboon).',
        start_page: 155
      }
    ],
    4: [
      {
        topic_number: '4.1',
        title: 'Neural Coordination: Action Potentials and Synaptic Transmission',
        description: 'Structure of sensory, relay, and motor neurons; Resting membrane potential (-70 mV maintained by Na+/K+ ATPase pump: 3 Na+ out, 2 K+ in); Action potential phases: Depolarization (voltage-gated Na+ channels open, potential reaches +30 mV), Repolarization (K+ channels open), Hyperpolarization, Refractory periods; Saltatory conduction in myelinated axons; Synaptic transmission via neurotransmitter acetylcholine release.',
        start_page: 169
      },
      {
        topic_number: '4.2',
        title: 'Endocrine Coordination and Homeostatic Feedback Loops',
        description: 'Ductless endocrine glands and hormone signaling; Hypothalamus-pituitary axis; Blood glucose regulation by pancreatic islets: Beta cells secrete insulin (promotes glycogenesis and glucose uptake), Alpha cells secrete glucagon (stimulates glycogenolysis and gluconeogenesis); Thyroid hormones T3/T4 and metabolic rate; Adrenal stress hormones (adrenaline and cortisol); Negative feedback control.',
        start_page: 183
      },
      {
        topic_number: '4.3',
        title: 'The Human Immune System and Defence Mechanisms',
        description: 'Innate (non-specific) immunity: Physical/chemical barriers (skin, lysozyme, stomach acid), phagocytes (macrophages, neutrophils), inflammatory response, fever; Adaptive (specific) immunity: Humoral response mediated by B-lymphocytes and antibodies (IgG, IgM, IgA, IgE), Cell-mediated response mediated by cytotoxic T-cells (CD8+) and helper T-cells (CD4+); Active vs passive immunity, vaccination mechanisms.',
        start_page: 197
      },
      {
        topic_number: '4.4',
        title: 'Major Pathogenic Diseases and Public Health in Ethiopia',
        description: 'Malaria: Plasmodium falciparum lifecycle between female Anopheles mosquito vector and human host (liver and red blood cell phases), symptoms, Artemisinin-based combination therapy (ACT); Tuberculosis: Mycobacterium tuberculosis pathogenesis, BCG vaccination, DOTS treatment program; HIV/AIDS: Retrovirus replication cycle, reverse transcriptase, destruction of CD4+ T-helper cells, Antiretroviral therapy (ART); Schistosomiasis lifecycle with freshwater snail intermediate host.',
        start_page: 211
      }
    ],
    5: [
      {
        topic_number: '5.1',
        title: 'Ecosystem Dynamics, Trophic Levels and Energy Flow',
        description: 'Ecosystem components (biotic communities and abiotic factors); Trophic levels: Primary producers (autotrophs), primary consumers (herbivores), secondary/tertiary consumers (carnivores), decomposers; Unidirectional energy flow; Lindeman\'s 10% ecological efficiency rule (90% lost as metabolic heat and respiration); Ecological pyramids of numbers, biomass, and energy.',
        start_page: 225
      },
      {
        topic_number: '5.2',
        title: 'Biogeochemical Cycles and Nutrient Recycling',
        description: 'Carbon cycle: Photosynthesis, cellular respiration, combustion, and greenhouse effect global warming; Nitrogen cycle: Nitrogen fixation by Rhizobium in legume root nodules and free-living Azotobacter, nitrification by Nitrosomonas and Nitrobacter, assimilation, ammonification, and denitrification by Pseudomonas; Phosphorus cycle; Eutrophication of water bodies caused by synthetic fertilizer runoff.',
        start_page: 239
      },
      {
        topic_number: '5.3',
        title: 'Environmental Degradation and Climate Resilience in Ethiopia',
        description: 'Deforestation causes (firewood, agricultural expansion) and consequences in Ethiopian highlands; Soil erosion mechanisms, terracing, and contour ploughing; Land degradation and desertification; Impact of erratic rainfall and recurring droughts on pastoralist communities; Ethiopia\'s Green Legacy Initiative and national reforestation campaigns.',
        start_page: 253
      },
      {
        topic_number: '5.4',
        title: 'Biodiversity Conservation and Protected Area Management',
        description: 'In-situ conservation: National Parks of Ethiopia (Simien Mountains, Bale Mountains, Awash, Nechisar, Gambella), wildlife sanctuaries (Babille Elephant Sanctuary), biosphere reserves (Kafa coffee forest); Ex-situ conservation: Ethiopian Biodiversity Institute (EBI) genebanks, botanical gardens, and captive breeding programs; Economic and ecological value of preserving endemic genetic resources.',
        start_page: 267
      }
    ]
  },
  'book-12-eng': {
    1: [
      {
        topic_number: '1.1',
        title: 'Academic Reading: Text Analysis, Tone and Main Ideas',
        description: 'Skimming scholarly articles for main idea, scanning for supporting empirical data, evaluating author purpose and objective vs subjective tone, making logical inferences from academic prose, and distinguishing asserted facts from hypotheses.',
        start_page: 1
      },
      {
        topic_number: '1.2',
        title: 'Scholarly Vocabulary: Affixation and Academic Word List',
        description: 'Morphological word analysis: Latin and Greek prefixes (anti-, bio-, inter-, poly-, trans-) and suffixes (-tion, -ize, -ous, -able); Contextual collocations in university research papers; Connotative nuances of scholarly synonyms.',
        start_page: 15
      },
      {
        topic_number: '1.3',
        title: 'Advanced Relative Clauses and Sentence Synthesis',
        description: 'Defining vs non-defining relative clauses (comma rules, which vs that, who vs whom, whose); Reduced relative clauses (participle clauses using present -ing and past -ed participles); Combining simple sentences into cohesive compound-complex academic sentences.',
        start_page: 29
      },
      {
        topic_number: '1.4',
        title: 'Speaking and Discussion: Academic Seminars and Debates',
        description: 'Active listening during scholarly presentations, formulating constructive questions, discourse markers for polite disagreement ("While I acknowledge your point, evidence suggests..."), and summarizing group conclusions.',
        start_page: 43
      }
    ],
    2: [
      {
        topic_number: '2.1',
        title: 'Mastery of Conditional Sentences and Counterfactuals',
        description: 'Zero, First, Second, and Third Conditionals review; Mixed conditionals (unreal past action with present consequence: If + past perfect, would + base verb); Formal inversion without \'if\' ("Had I known the schedule...", "Were the committee to approve...", "Should you require assistance...").',
        start_page: 57
      },
      {
        topic_number: '2.2',
        title: 'Advanced Passive Voice Constructions',
        description: 'Passive with reporting verbs for academic objectivity ("It is widely believed that...", "The findings are said to indicate..."); Passive infinitive and gerund forms; Causative passive structures (have/get something done); Avoiding agent identification when agent is unknown or irrelevant.',
        start_page: 71
      },
      {
        topic_number: '2.3',
        title: 'Reported Speech and Indirect Discourse',
        description: 'Tense backshift rules in reported speech (simple present to simple past, present perfect to past perfect); Exceptions when reporting universal scientific truths; Reporting verbs with specific patterns (insist on, apologize for, deny + gerund, advise someone to do); Shifting time and place adverbs.',
        start_page: 85
      },
      {
        topic_number: '2.4',
        title: 'Modals of Deduction, Speculation and Past Regret',
        description: 'Present deduction (must be, can\'t be, might be); Past deduction and speculation (must have been, can\'t have done, might have seen); Expressing past obligation and regret (should have studied, ought to have submitted); Common multiple-choice distractors in national EUEE entrance exams.',
        start_page: 99
      }
    ],
    3: [
      {
        topic_number: '3.1',
        title: 'Expository Writing: Process Descriptions and Technical Reports',
        description: 'Structuring laboratory reports: Introduction, Materials & Methods (passive voice sequential instructions), Results, and Discussion; Sequential connectors (initially, subsequently, simultaneously, following this, ultimately); Precision and concise scientific prose.',
        start_page: 113
      },
      {
        topic_number: '3.2',
        title: 'Cause-and-Effect Discourse Analysis',
        description: 'Expressing causal relationships using diverse grammatical structures: Prepositions (due to, owing to, as a consequence of), Conjunctions (since, because, as), Transitional adverbs (consequently, therefore, thus, as a result); Structuring multi-paragraph cause-and-effect analytical essays.',
        start_page: 127
      },
      {
        topic_number: '3.3',
        title: 'Technical Vocabulary and Precise Scientific Phrasing',
        description: 'Domain-specific vocabulary in STEM and social sciences; Avoiding vague colloquial language (e.g. replacing "make it bigger" with "amplify/expand", "get rid of" with "eliminate"); Technical collocations and standardized SI measurement phrasing.',
        start_page: 141
      },
      {
        topic_number: '3.4',
        title: 'Interpreting Graphical Data and Technical Visuals',
        description: 'Describing trends in charts, graphs, and tables: Upward trends (surge, climb, escalate), downward trends (plummet, decline, dip), fluctuations and plateauing; Quantifying changes using adverbs (substantially, marginally, exponentially).',
        start_page: 155
      }
    ],
    4: [
      {
        topic_number: '4.1',
        title: 'Rhetorical Devices and Persuasive Discourse',
        description: 'Classical appeals: Ethos (credibility), Pathos (emotional resonance), Logos (logical reasoning and empirical evidence); Rhetorical strategies: Parallelism, rhetorical questions, antithesis, tricolon (rule of three), and identifying common logical fallacies (ad hominem, false dichotomy, slippery slope).',
        start_page: 169
      },
      {
        topic_number: '4.2',
        title: 'Composing Argumentative and Persuasive Essays',
        description: 'Developing an arguable, nuanced thesis statement; Structuring introductory hook, body paragraphs with evidence, acknowledging counter-arguments with robust rebuttals, and crafting a resonant concluding call to action.',
        start_page: 183
      },
      {
        topic_number: '4.3',
        title: 'Sentence Inversion for Emphasis and Cleft Sentences',
        description: 'Negative adverbial inversion ("Rarely have we witnessed...", "Not only did they succeed, but they also...", "Under no circumstances should you..."); It-clefts ("It was the lack of infrastructure that caused the delay") and Wh-clefts ("What the research demonstrates is...").',
        start_page: 197
      },
      {
        topic_number: '4.4',
        title: 'Public Speaking, Oratory and Pronunciation Intonation',
        description: 'Vocal projection, pacing, pauses for emphasis; Intonation patterns in statements vs questions; Sentence stress highlighting contrasting key words; Overcoming public speaking anxiety and engaging an audience.',
        start_page: 211
      }
    ],
    5: [
      {
        topic_number: '5.1',
        title: 'University Lectures: Listening Comprehension and Cornell Note-Taking',
        description: 'Listening for lecture signposting language (introducing topics, digressing, emphasizing key takeaways, signaling exam focus); Implementing the Cornell note-taking system: Cue column, main notes section, and summary block; Using standard academic abbreviations.',
        start_page: 225
      },
      {
        topic_number: '5.2',
        title: 'Academic Integrity: Paraphrasing, Summarizing and Citation',
        description: 'Understanding plagiarism and intellectual honesty; Techniques for effective paraphrasing: changing word forms, using synonyms, altering sentence structures while preserving original meaning; Summarizing multi-page articles into concise abstracts; Basic citation formatting.',
        start_page: 239
      },
      {
        topic_number: '5.3',
        title: 'Formal Correspondence and Application Writing',
        description: 'Writing formal university and scholarship application letters; Statement of Purpose (SOP) structure; Register differences between formal letters (Dear Professor..., Sincerely) and informal emails; Formatting a modern student Curriculum Vitae (CV).',
        start_page: 253
      },
      {
        topic_number: '5.4',
        title: 'Entrance Examination Test-Taking Strategies',
        description: 'Strategic time management on the 100-question English EUEE paper; Process of elimination for tricky grammar distractors; Contextual inference shortcuts for reading comprehension; Avoiding panic traps in vocabulary questions.',
        start_page: 267
      }
    ]
  }
};

let updatedCount = 0;
for (const [bookId, chapterMap] of Object.entries(grade12Curriculum)) {
  for (const [chapNumStr, topics] of Object.entries(chapterMap)) {
    const chapNum = parseInt(chapNumStr, 10);
    const chapter = dbData.book_chapters.find((c: any) => c.book_id === bookId && c.chapter_number === chapNum);
    if (chapter) {
      chapter.topics = topics.map((t, idx) => ({
        id: `top-chap-${bookId}-${chapNum}-${idx + 1}`,
        topic_number: t.topic_number,
        title: t.title,
        start_page: t.start_page,
        description: t.description
      }));
      updatedCount++;
    }
  }
}

// Clear stale short notes cache so fresh rich notes generate without repetition
dbData.chapter_short_notes = {};

fs.writeFileSync(DB_PATH, JSON.stringify(dbData, null, 2), 'utf-8');
console.log(`Successfully updated ${updatedCount} Grade 12 chapters with authentic curriculum topics and reset cached short notes.`);
