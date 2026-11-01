// Authentic Grade 12 Ethiopian Curriculum Units & Topics
import { OfficialUnit } from './curriculumRegistry';

export const GRADE_12_CURRICULUM: Record<string, OfficialUnit[]> = {
  "book-12-math": [
    {
      "unit_num": 1,
      "title": "Sequences and Series",
      "start_page": 1,
      "end_page": 52,
      "topics": [
        {
          "num": "1.1",
          "title": "Arithmetic Sequences and Series",
          "start": 1,
          "desc": "Common difference d, recursive definition, general n-th term a_n = a_1 + (n-1)d, arithmetic means, partial sum S_n = n/2(2a_1 + (n-1)d) = n/2(a_1 + a_n)."
        },
        {
          "num": "1.2",
          "title": "Geometric Sequences and Series",
          "start": 12,
          "desc": "Common ratio r, general term a_n = a_1·r^(n-1), geometric means, sum of finite geometric series S_n = a_1(1-r^n)/(1-r), convergence conditions and infinite sum S_inf = a_1/(1-r) for |r| < 1."
        },
        {
          "num": "1.3",
          "title": "Sigma Notation and Mathematical Induction",
          "start": 24,
          "desc": "Properties of summation operator Σ, index shifts, linearity of sums, the Principle of Mathematical Induction (Base step, Inductive hypothesis, Inductive proof step)."
        },
        {
          "num": "1.4",
          "title": "Real-World Applications of Sequences and Series",
          "start": 36,
          "desc": "Compound interest formulas A = P(1 + r/n)^(nt), simple annuities, depreciation models, biological cell division sequences, and national economic growth projections."
        }
      ]
    },
    {
      "unit_num": 2,
      "title": "Introduction to Limits and Continuity",
      "start_page": 53,
      "end_page": 104,
      "topics": [
        {
          "num": "2.1",
          "title": "Intuitive and Algebraic Concept of Limits",
          "start": 48,
          "desc": "Definition of limits, one-sided limits (left-hand and right-hand), limit laws (sum, product, quotient, power), and evaluating limits by factoring, expansion, and conjugate rationalization."
        },
        {
          "num": "2.2",
          "title": "Limits Involving Infinity and Indeterminate Forms",
          "start": 60,
          "desc": "Infinite limits, limits at infinity, resolving 0/0 and inf/inf forms, identifying horizontal and vertical asymptotes of rational functions, and Squeeze (Sandwich) Theorem."
        },
        {
          "num": "2.3",
          "title": "Continuity of Functions",
          "start": 72,
          "desc": "Three conditions for continuity at a point (f(c) defined, lim f(x) exists, lim f(x) = f(c)), continuity on intervals, removable vs essential discontinuities, and Intermediate Value Theorem (IVT)."
        },
        {
          "num": "2.4",
          "title": "Special Trigonometric Limits",
          "start": 84,
          "desc": "Fundamental limit lim(x->0) [sin(x)/x] = 1, lim(x->0) [(1 - cos(x))/x] = 0, and evaluating trigonometric indeterminate limits in EUEE."
        }
      ]
    },
    {
      "unit_num": 3,
      "title": "Introduction to Differential Calculus",
      "start_page": 105,
      "end_page": 168,
      "topics": [
        {
          "num": "3.1",
          "title": "The Derivative as an Instantaneous Rate of Change",
          "start": 96,
          "desc": "Difference quotient, limit definition f'(x) = lim(h->0) [f(x+h) - f(x)]/h, geometric slope of tangent line, instantaneous velocity and acceleration."
        },
        {
          "num": "3.2",
          "title": "Fundamental Rules of Differentiation",
          "start": 108,
          "desc": "Constant rule, Power rule d/dx(x^n) = n·x^(n-1), Constant multiple rule, Sum and difference rules, Product rule (uv)' = u'v + uv', Quotient rule (u/v)' = (u'v - uv')/v^2."
        },
        {
          "num": "3.3",
          "title": "The Chain Rule and Implicit Differentiation",
          "start": 120,
          "desc": "Derivatives of composite functions dy/dx = (dy/du)·(du/dx), extended power rule, implicit differentiation for curves F(x, y) = 0, higher order derivatives f''(x) and f^(n)(x)."
        },
        {
          "num": "3.4",
          "title": "Derivatives of Trigonometric, Exponential and Logarithmic Functions",
          "start": 132,
          "desc": "Derivatives of sin x, cos x, tan x, sec x, e^x, a^x, ln x, log_a x, and logarithmic differentiation for complex products."
        }
      ]
    },
    {
      "unit_num": 4,
      "title": "Applications of Differential Calculus",
      "start_page": 169,
      "end_page": 218,
      "topics": [
        {
          "num": "4.1",
          "title": "Critical Points, Monotonicity and Extreme Values",
          "start": 144,
          "desc": "Critical numbers (where f'(c) = 0 or undefined), Fermat's Theorem, Extreme Value Theorem on closed intervals [a, b], First Derivative Test for local maxima and minima."
        },
        {
          "num": "4.2",
          "title": "Concavity, Points of Inflection and Curve Sketching",
          "start": 156,
          "desc": "Second derivative test for local extrema, concavity test (f''(x) > 0 concave up, f''(x) < 0 concave down), points of inflection, combining asymptotes and intercepts for complete curve sketching."
        },
        {
          "num": "4.3",
          "title": "Applied Optimization Problems",
          "start": 168,
          "desc": "Translating word problems into objective functions, constraints, domain restrictions, maximizing profit/area/volume, minimizing cost/material in construction and commerce."
        },
        {
          "num": "4.4",
          "title": "Related Rates of Change",
          "start": 180,
          "desc": "Differentiating with respect to time t using chain rule, geometric modeling (expanding spherical balloons, draining conical tanks, sliding ladders, shadow movement)."
        }
      ]
    },
    {
      "unit_num": 5,
      "title": "Introduction to Integral Calculus",
      "start_page": 219,
      "end_page": 260,
      "topics": [
        {
          "num": "5.1",
          "title": "Antiderivatives and Indefinite Integrals",
          "start": 192,
          "desc": "Definition of antiderivative, indefinite integral symbol ∫ f(x) dx = F(x) + C, power rule for integration ∫ x^n dx = (x^(n+1))/(n+1) + C (n ≠ -1), integrals of trigonometric and exponential functions."
        },
        {
          "num": "5.2",
          "title": "Integration by Substitution (u-Substitution)",
          "start": 204,
          "desc": "Reversing the chain rule: ∫ f(g(x))g'(x) dx = ∫ f(u) du, choosing appropriate substitution variable u, transforming differentials and limits of integration."
        },
        {
          "num": "5.3",
          "title": "The Fundamental Theorem of Calculus (FTC)",
          "start": 216,
          "desc": "Riemann sums and area under curve, Part 1: d/dx ∫_a^x f(t) dt = f(x), Part 2: ∫_a^b f(x) dx = F(b) - F(a), properties of definite integrals (linearity, additivity of intervals)."
        },
        {
          "num": "5.4",
          "title": "Applications of Definite Integrals",
          "start": 228,
          "desc": "Calculating exact planar area between curves f(x) and g(x), net displacement vs total distance traveled given velocity v(t), average value of a continuous function."
        }
      ]
    },
    {
      "unit_num": 6,
      "title": "Three Dimensional Geometry and Vectors",
      "start_page": 261,
      "end_page": 284,
      "topics": [
        {
          "num": "6.1",
          "title": "Vectors and Coordinate System in Three-Dimensional Space",
          "start": 240,
          "desc": "Right-handed 3D Cartesian coordinates (x, y, z), distance formula in 3D d = √((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2), midpoint formula, standard unit vectors i, j, k."
        },
        {
          "num": "6.2",
          "title": "Scalar (Dot) Product and Vector Projections in 3D",
          "start": 252,
          "desc": "Dot product u·v = u1v1 + u2v2 + u3v3 = |u||v|cos θ, orthogonality criterion (u·v = 0), direction cosines, scalar and vector projections proj_v u."
        },
        {
          "num": "6.3",
          "title": "Cross Product of Vectors in 3D Space",
          "start": 264,
          "desc": "Vector product u × v, determinant calculation, magnitude |u × v| = |u||v|sin θ (area of parallelogram), right-hand rule for direction, collinearity condition u × v = 0."
        },
        {
          "num": "6.4",
          "title": "Equations of Lines and Planes in 3D Space",
          "start": 276,
          "desc": "Vector and parametric equations of lines in space r(t) = r_0 + t·v, symmetric equations, standard equation of a plane A(x - x0) + B(y - y0) + C(z - z0) = 0 using normal vector n."
        }
      ]
    }
  ],
  "book-12-phys": [
    {
      "unit_num": 1,
      "title": "Thermodynamics and Heat Engines",
      "start_page": 1,
      "end_page": 48,
      "topics": [
        {
          "num": "1.1",
          "title": "Zeroth and First Laws of Thermodynamics",
          "start": 1,
          "desc": "Thermal equilibrium and temperature concept (Zeroth law); Internal energy U, heat Q, and work done W; First law ΔU = Q - W; Thermodynamic processes: Isochoric (W = 0), Isobaric (W = PΔV), Isothermal (ΔU = 0, Q = W), Adiabatic (Q = 0, ΔU = -W)."
        },
        {
          "num": "1.2",
          "title": "Molar Heat Capacities and Ideal Gas Work",
          "start": 14,
          "desc": "Molar heat capacity at constant volume Cv and constant pressure Cp; Mayer's relation Cp - Cv = R; adiabatic index γ = Cp/Cv; PV diagram work calculation W = area under PV curve."
        },
        {
          "num": "1.3",
          "title": "Second Law of Thermodynamics and Entropy",
          "start": 28,
          "desc": "Kelvin-Planck statement (no heat engine can convert 100% of absorbed heat into work); Clausius statement (heat cannot spontaneously flow from cold to hot reservoir); Entropy S as measure of disorder, ΔS ≥ 0 for isolated systems."
        },
        {
          "num": "1.4",
          "title": "Heat Engines, Refrigerators and the Carnot Cycle",
          "start": 42,
          "desc": "Cyclic heat engines, thermal efficiency η = W/Q_H = 1 - Q_C/Q_H; Carnot cycle (two isothermal, two adiabatic processes); maximum Carnot efficiency η_Carnot = 1 - T_C/T_H; Coefficient of Performance (COP) of refrigerators."
        }
      ]
    },
    {
      "unit_num": 2,
      "title": "Electric Fields and Potential",
      "start_page": 49,
      "end_page": 98,
      "topics": [
        {
          "num": "2.1",
          "title": "Coulomb's Law and Electric Field Distribution",
          "start": 56,
          "desc": "Quantization and conservation of electric charge; Coulomb's inverse-square law F = k|q1q2|/r^2 in vacuum and dielectric media; Electric field vector E = F/q0; Principle of superposition for discrete and continuous charge distributions."
        },
        {
          "num": "2.2",
          "title": "Electric Potential Energy and Electric Potential",
          "start": 70,
          "desc": "Electrostatic work and potential energy U = kq1q2/r; Electric potential V = U/q0 = kQ/r; Potential difference ΔV = -∫ E·dl; Equipotential surfaces and relationship E = -dV/dr."
        },
        {
          "num": "2.3",
          "title": "Capacitance and Dielectrics",
          "start": 84,
          "desc": "Definition of capacitance C = Q/V; Parallel plate capacitor formula C = ε0·A/d; Effect of dielectric constant κ (C = κC0); Series and parallel combinations of capacitors; Energy stored in electrostatic field U = 1/2 CV^2."
        },
        {
          "num": "2.4",
          "title": "Motion of Charged Particles in Uniform Electric Fields",
          "start": 98,
          "desc": "Trajectory of electron or proton in uniform electric field (parabolic motion analogous to projectile kinematics), acceleration a = qE/m, deflection in cathode ray tube (CRT) and mass spectrometers."
        }
      ]
    },
    {
      "unit_num": 3,
      "title": "Steady Electric Current and Direct Current Circuits",
      "start_page": 99,
      "end_page": 146,
      "topics": [
        {
          "num": "3.1",
          "title": "Electric Current, Drift Velocity and Current Density",
          "start": 112,
          "desc": "Microscopic conduction model: free electron density n, drift velocity v_d, electric current I = n·q·A·v_d; Current density J = I/A = σE; Electrical conductivity σ and resistivity ρ = 1/σ."
        },
        {
          "num": "3.2",
          "title": "Ohm's Law, Resistance and Temperature Dependence",
          "start": 126,
          "desc": "Ohmic vs non-ohmic materials; Resistance formula R = ρL/A; Temperature dependence of resistivity ρ(T) = ρ0[1 + α(T - T0)]; Superconductivity phenomenon at critical temperatures."
        },
        {
          "num": "3.3",
          "title": "Electromotive Force, Internal Resistance and Terminal Voltage",
          "start": 140,
          "desc": "Ideal vs real voltage sources; Electromotive force (EMF) ε, internal resistance r, terminal voltage V = ε - Ir; Maximum power transfer theorem (R_load = r for P_max)."
        },
        {
          "num": "3.4",
          "title": "Kirchhoff's Laws and Complex Circuit Networks",
          "start": 154,
          "desc": "Kirchhoff's Current Law (KCL - charge conservation at junctions); Kirchhoff's Voltage Law (KVL - energy conservation in closed loops); Sign conventions for resistors and EMF sources; Solving multi-loop bridge networks."
        }
      ]
    },
    {
      "unit_num": 4,
      "title": "Magnetism and Electromagnetic Induction",
      "start_page": 147,
      "end_page": 198,
      "topics": [
        {
          "num": "4.1",
          "title": "Magnetic Fields and Magnetic Forces on Charges and Currents",
          "start": 168,
          "desc": "Lorentz force on moving charge F = q(v × B) = qvB sin θ; Circular and helical motion of charges in magnetic field (radius r = mv/qB, cyclotron frequency); Magnetic force on current-carrying conductor F = I(L × B) = ILB sin θ."
        },
        {
          "num": "4.2",
          "title": "Sources of Magnetic Fields: Biot-Savart and Ampère's Laws",
          "start": 182,
          "desc": "Biot-Savart law for magnetic field of current element; Magnetic field around long straight wire B = μ0·I/(2πr); Field at center of circular loop; Field inside an ideal solenoid B = μ0·n·I; Ampère's Circuital Law ∮ B·dl = μ0·I_enc."
        },
        {
          "num": "4.3",
          "title": "Faraday's Law and Lenz's Law of Induction",
          "start": 196,
          "desc": "Magnetic flux Φ_B = B·A·cos θ; Faraday's induction law ε = -N(dΦ_B/dt); Lenz's law as consequence of conservation of energy (induced current opposes flux change); Motional EMF ε = B·L·v for moving rod."
        },
        {
          "num": "4.4",
          "title": "Inductance and Energy in Magnetic Fields",
          "start": 210,
          "desc": "Self-inductance L = NΦ/I; Back EMF in inductors ε_L = -L(dI/dt); Mutual inductance M; Magnetic energy stored in inductor U_B = 1/2 L·I^2; Energy density of magnetic field u_B = B^2/(2μ0)."
        }
      ]
    },
    {
      "unit_num": 5,
      "title": "Alternating Current Circuits",
      "start_page": 199,
      "end_page": 238,
      "topics": [
        {
          "num": "5.1",
          "title": "Generation of Alternating Current and AC Quantities",
          "start": 224,
          "desc": "AC generator principle (rotating coil in uniform B-field); Sinusoidal voltage v(t) = V0 sin(ωt) and current i(t) = I0 sin(ωt - φ); Peak value V0, RMS value V_rms = V0/√2 = 0.707 V0, root-mean-square current I_rms = I0/√2."
        },
        {
          "num": "5.2",
          "title": "AC Circuits with Pure R, L, and C Elements",
          "start": 238,
          "desc": "Pure resistor (current in phase with voltage); Pure inductor (voltage leads current by 90° or π/2, inductive reactance X_L = ωL = 2πfL); Pure capacitor (current leads voltage by 90°, capacitive reactance X_C = 1/(ωC) = 1/(2πfC)); Phasor diagrams."
        },
        {
          "num": "5.3",
          "title": "Series RLC Circuits and Electrical Resonance",
          "start": 252,
          "desc": "Impedance Z = √(R^2 + (X_L - X_C)^2); Phase angle tan φ = (X_L - X_C)/R; Resonance condition X_L = X_C giving resonant frequency f0 = 1/(2π√(LC)); Quality factor Q and power factor cos φ = R/Z; Average power P_avg = V_rms·I_rms·cos φ."
        },
        {
          "num": "5.4",
          "title": "Electrical Transformers and High-Voltage Power Transmission",
          "start": 266,
          "desc": "Principle of mutual induction in iron core; Transformer turns ratio V_s/V_p = N_s/N_p = I_p/I_s; Step-up and step-down transformers; Energy losses (Joule heating, eddy currents, hysteresis); Ethiopia's national power grid (GERD to regional sub-stations)."
        }
      ]
    },
    {
      "unit_num": 6,
      "title": "Atomic and Nuclear Physics",
      "start_page": 239,
      "end_page": 272,
      "topics": [
        {
          "num": "6.1",
          "title": "Bohr's Model of the Atom and Atomic Spectra",
          "start": 280,
          "desc": "Rutherford alpha scattering experiment; Bohr's quantum postulates (quantized angular momentum L = nh/2π); Energy levels of hydrogen E_n = -13.6/n^2 eV; Rydberg formula 1/λ = R_H (1/n1^2 - 1/n2^2); Spectral series: Lyman (UV), Balmer (visible), Paschen (IR)."
        },
        {
          "num": "6.2",
          "title": "Photoelectric Effect and Wave-Particle Duality",
          "start": 294,
          "desc": "Photoelectric threshold frequency f0, work function Φ; Einstein's photon energy equation E = hf = Φ + KE_max = hf0 + e·V_stop; Failure of classical wave theory; de Broglie wavelength λ = h/p = h/(mv); Wave-particle duality of electrons."
        },
        {
          "num": "6.3",
          "title": "Nuclear Structure, Mass Defect and Binding Energy",
          "start": 308,
          "desc": "Nucleons (protons and neutrons), atomic number Z, mass number A, isotopes; Strong nuclear force; Mass defect Δm = [Z·m_p + (A-Z)m_n] - M_nucleus; Einstein mass-energy equivalence E = Δm·c^2; Binding energy per nucleon curve (maximum at Fe-56)."
        },
        {
          "num": "6.4",
          "title": "Radioactivity, Nuclear Reactions, Fission and Fusion",
          "start": 322,
          "desc": "Natural radioactivity: Alpha decay (He-4 nucleus), Beta-minus (electron + antineutrino), Beta-plus (positron + neutrino), Gamma decay (high-energy photons); Radioactive decay law N(t) = N0 e^(-λt); Half-life T_1/2 = ln 2 / λ = 0.693/λ; Nuclear fission vs thermonuclear fusion."
        }
      ]
    }
  ],
  "book-12-chem": [
    {
      "unit_num": 1,
      "title": "Acid-Base Equilibria",
      "start_page": 1,
      "end_page": 55,
      "topics": [
        {
          "num": "1.1",
          "title": "Acid-Base Concepts",
          "start": 3,
          "desc": "Arrhenius, Brønsted-Lowry, and Lewis theories of acids and bases; conjugate acid-base pairs, amphiprotic species."
        },
        {
          "num": "1.2",
          "title": "Ionic Equilibria of Weak Acids and Bases",
          "start": 14,
          "desc": "Water autoionization, Kw, pH, pOH, Ka and Kb dissociation constants, percent ionization."
        },
        {
          "num": "1.3",
          "title": "Common Ion Effect and Buffer Solutions",
          "start": 31,
          "desc": "Common ion effect, buffer action, Henderson-Hasselbalch equation, buffer capacity."
        },
        {
          "num": "1.4",
          "title": "Hydrolysis of Salts",
          "start": 39,
          "desc": "Hydrolysis of salts of strong/weak acid-base combinations and pH predictions."
        },
        {
          "num": "1.5",
          "title": "Acid–Base Indicators and Titrations",
          "start": 42,
          "desc": "Acid-base indicators, equivalents & normality (N1V1 = N2V2), titration curves, and equivalence point."
        }
      ]
    },
    {
      "unit_num": 2,
      "title": "Electrochemistry",
      "start_page": 56,
      "end_page": 134,
      "topics": [
        {
          "num": "2.1",
          "title": "Oxidation-Reduction Reactions",
          "start": 57,
          "desc": "Oxidation and reduction definitions, oxidation numbers, balancing redox reactions using oxidation-number and half-reaction methods."
        },
        {
          "num": "2.2",
          "title": "Electrolysis of Aqueous Solutions",
          "start": 66,
          "desc": "Metallic vs electrolytic conduction, electrolytic cells, factors affecting preferential discharge, molten NaCl, brine, dilute H2SO4, CuSO4."
        },
        {
          "num": "2.3",
          "title": "Quantitative Aspects of Electrolysis",
          "start": 80,
          "desc": "Faraday's First and Second Laws of Electrolysis, electrochemical equivalent, charge and mass calculations."
        },
        {
          "num": "2.4",
          "title": "Industrial Application of Electrolysis",
          "start": 86,
          "desc": "Extraction of aluminum (Hall-Héroult), electrorefining of copper, electroplating, chlor-alkali production of Cl2 and NaOH."
        },
        {
          "num": "2.5",
          "title": "Voltaic Cells",
          "start": 92,
          "desc": "Daniell cell, salt bridge, standard hydrogen electrode (SHE), standard reduction potentials, Nernst equation, commercial batteries, fuel cells, and corrosion."
        }
      ]
    },
    {
      "unit_num": 3,
      "title": "Industrial Chemistry",
      "start_page": 135,
      "end_page": 212,
      "topics": [
        {
          "num": "3.1",
          "title": "Introduction to Industrial Chemistry",
          "start": 136,
          "desc": "Scope, characteristics of chemical industries, role in society and economic growth."
        },
        {
          "num": "3.2",
          "title": "Natural Resources and Industry",
          "start": 138,
          "desc": "Atmospheric, hydrospheric, lithospheric, biospheric raw materials; renewable and non-renewable resources in Ethiopia."
        },
        {
          "num": "3.3",
          "title": "Manufacturing of Valuable Products/Chemicals",
          "start": 142,
          "desc": "Haber ammonia, Ostwald nitric acid, Contact sulfuric acid, Solvay sodium carbonate, Castner-Kellner NaOH, Urea and DAP fertilizers, pesticides."
        },
        {
          "num": "3.4",
          "title": "Some Manufacturing Industries in Ethiopia",
          "start": 174,
          "desc": "Glass, ceramics, cement, sugar refining, pulp and paper, tannery, food preservation, ethanol, soaps and detergents."
        }
      ]
    },
    {
      "unit_num": 4,
      "title": "Polymers",
      "start_page": 213,
      "end_page": 239,
      "topics": [
        {
          "num": "4.1",
          "title": "Introduction to Polymers",
          "start": 214,
          "desc": "Monomers, polymers, degree of polymerization (DP), homopolymers and copolymers."
        },
        {
          "num": "4.2",
          "title": "Polymerization Reactions",
          "start": 215,
          "desc": "Addition (chain-growth) vs condensation (step-growth) polymerization; free-radical mechanisms; Nylon 6,6 and Dacron."
        },
        {
          "num": "4.3",
          "title": "Classification of Polymers",
          "start": 224,
          "desc": "Natural biopolymers (carbohydrates, proteins, nucleic acids, rubber) vs synthetic polymers (PE, PP, PVC, PMMA, Teflon); thermoplastics vs thermosets."
        }
      ]
    },
    {
      "unit_num": 5,
      "title": "Introduction to Environmental Chemistry",
      "start_page": 240,
      "end_page": 288,
      "topics": [
        {
          "num": "5.1",
          "title": "Introduction and Components of the Environment",
          "start": 241,
          "desc": "Atmosphere, hydrosphere, lithosphere, biosphere; hydrological, carbon, nitrogen, oxygen, phosphorus, sulfur cycles; BOD, DO, TLV."
        },
        {
          "num": "5.2",
          "title": "Environmental Pollution",
          "start": 255,
          "desc": "Air pollution, photochemical smog, acid rain, CFCs ozone depletion; water pollution and eutrophication; land pollution."
        },
        {
          "num": "5.3",
          "title": "Global Warming and Climate Change",
          "start": 265,
          "desc": "Greenhouse gases (CO2, CH4, N2O), infrared absorption mechanism, and global climate impacts."
        },
        {
          "num": "5.4",
          "title": "Green Chemistry and Cleaner Production",
          "start": 269,
          "desc": "12 principles of green chemistry, atom economy calculation, cleaner production goals in chemical industries."
        }
      ]
    }
  ],
  "book-12-nat-chem": [
    {
      "unit_num": 1,
      "title": "Acid-Base Equilibria",
      "start_page": 1,
      "end_page": 55,
      "topics": [
        {
          "num": "1.1",
          "title": "Acid-Base Concepts",
          "start": 3,
          "desc": "Arrhenius, Brønsted-Lowry, and Lewis theories of acids and bases; conjugate acid-base pairs, amphiprotic species."
        },
        {
          "num": "1.2",
          "title": "Ionic Equilibria of Weak Acids and Bases",
          "start": 14,
          "desc": "Water autoionization, Kw, pH, pOH, Ka and Kb dissociation constants, percent ionization."
        },
        {
          "num": "1.3",
          "title": "Common Ion Effect and Buffer Solutions",
          "start": 31,
          "desc": "Common ion effect, buffer action, Henderson-Hasselbalch equation, buffer capacity."
        },
        {
          "num": "1.4",
          "title": "Hydrolysis of Salts",
          "start": 39,
          "desc": "Hydrolysis of salts of strong/weak acid-base combinations and pH predictions."
        },
        {
          "num": "1.5",
          "title": "Acid–Base Indicators and Titrations",
          "start": 42,
          "desc": "Acid-base indicators, equivalents & normality (N1V1 = N2V2), titration curves, and equivalence point."
        }
      ]
    },
    {
      "unit_num": 2,
      "title": "Electrochemistry",
      "start_page": 56,
      "end_page": 134,
      "topics": [
        {
          "num": "2.1",
          "title": "Oxidation-Reduction Reactions",
          "start": 57,
          "desc": "Oxidation and reduction definitions, oxidation numbers, balancing redox reactions using oxidation-number and half-reaction methods."
        },
        {
          "num": "2.2",
          "title": "Electrolysis of Aqueous Solutions",
          "start": 66,
          "desc": "Metallic vs electrolytic conduction, electrolytic cells, factors affecting preferential discharge, molten NaCl, brine, dilute H2SO4, CuSO4."
        },
        {
          "num": "2.3",
          "title": "Quantitative Aspects of Electrolysis",
          "start": 80,
          "desc": "Faraday's First and Second Laws of Electrolysis, electrochemical equivalent, charge and mass calculations."
        },
        {
          "num": "2.4",
          "title": "Industrial Application of Electrolysis",
          "start": 86,
          "desc": "Extraction of aluminum (Hall-Héroult), electrorefining of copper, electroplating, chlor-alkali production of Cl2 and NaOH."
        },
        {
          "num": "2.5",
          "title": "Voltaic Cells",
          "start": 92,
          "desc": "Daniell cell, salt bridge, standard hydrogen electrode (SHE), standard reduction potentials, Nernst equation, commercial batteries, fuel cells, and corrosion."
        }
      ]
    },
    {
      "unit_num": 3,
      "title": "Industrial Chemistry",
      "start_page": 135,
      "end_page": 212,
      "topics": [
        {
          "num": "3.1",
          "title": "Introduction to Industrial Chemistry",
          "start": 136,
          "desc": "Scope, characteristics of chemical industries, role in society and economic growth."
        },
        {
          "num": "3.2",
          "title": "Natural Resources and Industry",
          "start": 138,
          "desc": "Atmospheric, hydrospheric, lithospheric, biospheric raw materials; renewable and non-renewable resources in Ethiopia."
        },
        {
          "num": "3.3",
          "title": "Manufacturing of Valuable Products/Chemicals",
          "start": 142,
          "desc": "Haber ammonia, Ostwald nitric acid, Contact sulfuric acid, Solvay sodium carbonate, Castner-Kellner NaOH, Urea and DAP fertilizers, pesticides."
        },
        {
          "num": "3.4",
          "title": "Some Manufacturing Industries in Ethiopia",
          "start": 174,
          "desc": "Glass, ceramics, cement, sugar refining, pulp and paper, tannery, food preservation, ethanol, soaps and detergents."
        }
      ]
    },
    {
      "unit_num": 4,
      "title": "Polymers",
      "start_page": 213,
      "end_page": 239,
      "topics": [
        {
          "num": "4.1",
          "title": "Introduction to Polymers",
          "start": 214,
          "desc": "Monomers, polymers, degree of polymerization (DP), homopolymers and copolymers."
        },
        {
          "num": "4.2",
          "title": "Polymerization Reactions",
          "start": 215,
          "desc": "Addition (chain-growth) vs condensation (step-growth) polymerization; free-radical mechanisms; Nylon 6,6 and Dacron."
        },
        {
          "num": "4.3",
          "title": "Classification of Polymers",
          "start": 224,
          "desc": "Natural biopolymers (carbohydrates, proteins, nucleic acids, rubber) vs synthetic polymers (PE, PP, PVC, PMMA, Teflon); thermoplastics vs thermosets."
        }
      ]
    },
    {
      "unit_num": 5,
      "title": "Introduction to Environmental Chemistry",
      "start_page": 240,
      "end_page": 288,
      "topics": [
        {
          "num": "5.1",
          "title": "Introduction and Components of the Environment",
          "start": 241,
          "desc": "Atmosphere, hydrosphere, lithosphere, biosphere; hydrological, carbon, nitrogen, oxygen, phosphorus, sulfur cycles; BOD, DO, TLV."
        },
        {
          "num": "5.2",
          "title": "Environmental Pollution",
          "start": 255,
          "desc": "Air pollution, photochemical smog, acid rain, CFCs ozone depletion; water pollution and eutrophication; land pollution."
        },
        {
          "num": "5.3",
          "title": "Global Warming and Climate Change",
          "start": 265,
          "desc": "Greenhouse gases (CO2, CH4, N2O), infrared absorption mechanism, and global climate impacts."
        },
        {
          "num": "5.4",
          "title": "Green Chemistry and Cleaner Production",
          "start": 269,
          "desc": "12 principles of green chemistry, atom economy calculation, cleaner production goals in chemical industries."
        }
      ]
    }
  ],
  "book-12-bio": [
    {
      "unit_num": 1,
      "title": "Molecular Genetics and DNA Technology",
      "start_page": 1,
      "end_page": 54,
      "topics": [
        {
          "num": "1.1",
          "title": "DNA Molecular Structure and Semiconservative Replication",
          "start": 1,
          "desc": "Watson-Crick double helix model, antiparallel strands (5' to 3' and 3' to 5'), nucleotide units (deoxyribose, phosphate, purine/pyrimidine bases), Chargaff's rules (%A=%T, %G=%C); Semiconservative replication: Helicase, DNA polymerase, RNA primase, Okazaki fragments, and DNA ligase."
        },
        {
          "num": "1.2",
          "title": "Transcription and Post-Transcriptional RNA Processing",
          "start": 15,
          "desc": "Central dogma of molecular biology; RNA structure vs DNA; Transcription by RNA Polymerase binding promoter region; Template strand reading 3' to 5', mRNA synthesis 5' to 3'; Eukaryotic RNA processing: 5' capping, 3' poly-A tailing, splicing out non-coding introns by spliceosomes."
        },
        {
          "num": "1.3",
          "title": "The Genetic Code, Translation and Protein Synthesis",
          "start": 29,
          "desc": "Features of the genetic code (triplet, universal, degenerate/redundant, non-overlapping, start codon AUG, stop codons UAA, UAG, UGA); tRNA structure and anticodon loop; Ribosome structure (A, P, E sites); Translation stages: Initiation, Elongation (peptide bond formation), Termination."
        },
        {
          "num": "1.4",
          "title": "Recombinant DNA Technology, PCR and Biotechnology Applications",
          "start": 43,
          "desc": "Restriction endonucleases (\"molecular scissors\" cutting palindromic recognition sequences), DNA ligase, plasmid vectors, bacterial transformation; Polymerase Chain Reaction (PCR: Denaturation, Annealing, Extension); Gel electrophoresis; Applications in Ethiopian agriculture (tissue culture of teff, coffee) and medicine (recombinant insulin)."
        }
      ]
    },
    {
      "unit_num": 2,
      "title": "Mendelian Genetics and Inheritance Patterns",
      "start_page": 55,
      "end_page": 106,
      "topics": [
        {
          "num": "2.1",
          "title": "Mendelian Genetics: Monohybrid and Dihybrid Crosses",
          "start": 57,
          "desc": "Mendel's experiments on Pisum sativum; Law of Segregation (alleles separate during meiosis, monohybrid 3:1 phenotypic and 1:2:1 genotypic ratios); Law of Independent Assortment (unlinked genes assort independently, dihybrid 9:3:3:1 ratio); Test cross with homozygous recessive."
        },
        {
          "num": "2.2",
          "title": "Non-Mendelian Patterns of Inheritance",
          "start": 71,
          "desc": "Incomplete dominance (intermediate heterozygote phenotype 1:2:1 ratio, e.g. Snapdragon flowers); Codominance (both alleles expressed simultaneously, e.g. sickle cell trait HbA/HbS, MN blood group); Multiple alleles (ABO blood group system with IA, IB, i); Polygenic quantitative traits (skin color, human height)."
        },
        {
          "num": "2.3",
          "title": "Sex Determination, Sex-Linkage and Pedigree Analysis",
          "start": 85,
          "desc": "Chromosomal sex determination (XX/XY in humans, ZW/ZZ in birds); Sex-linked inheritance of X-linked recessive traits (Hemophilia A, Red-green color blindness); Hemizygous males (XY) expressing recessive alleles; Interpreting human pedigree charts (autosomal dominant/recessive vs X-linked)."
        },
        {
          "num": "2.4",
          "title": "Mutations and Chromosomal Abnormalities",
          "start": 99,
          "desc": "Gene/point mutations (silent, missense, nonsense, frameshift insertions/deletions); Mutagenic agents (UV, ionizing radiation, chemicals); Chromosomal structural alterations (deletion, duplication, inversion, translocation); Numerical aneuploidy due to nondisjunction during meiosis (Down syndrome Trisomy 21, Turner syndrome XO, Klinefelter syndrome XXY)."
        }
      ]
    },
    {
      "unit_num": 3,
      "title": "Evolution and Speciation",
      "start_page": 107,
      "end_page": 154,
      "topics": [
        {
          "num": "3.1",
          "title": "Empirical Evidence for Evolutionary Change",
          "start": 113,
          "desc": "Paleontological fossil record and transitional fossils (e.g. Archaeopteryx, Lucy/Australopithecus afarensis discovered in the Afar Depression of Ethiopia); Comparative anatomy: Homologous structures (divergent evolution) vs Analogous structures (convergent evolution), vestigial structures; Biochemical and DNA sequence homology."
        },
        {
          "num": "3.2",
          "title": "Theories of Evolution: Lamarckism vs. Darwinian Natural Selection",
          "start": 127,
          "desc": "Lamarck's theory of inheritance of acquired characteristics and disuse; Charles Darwin and Alfred Russel Wallace: Overproduction, struggle for existence, variation within populations, differential survival and reproduction (\"survival of the fittest\"); Modern evolutionary synthesis combining Mendelian genetics with natural selection."
        },
        {
          "num": "3.3",
          "title": "Population Genetics and the Hardy-Weinberg Principle",
          "start": 141,
          "desc": "Gene pool, allele frequency (p + q = 1) and genotype frequency (p^2 + 2pq + q^2 = 1); Five conditions for Hardy-Weinberg genetic equilibrium (large population, random mating, no mutation, no gene flow/migration, no natural selection); Evolutionary forces disrupting equilibrium: Genetic drift (bottleneck and founder effects), gene flow, natural selection."
        },
        {
          "num": "3.4",
          "title": "Speciation Mechanisms and Ethiopian Endemic Biodiversity",
          "start": 155,
          "desc": "Biological species concept; Reproductive isolating mechanisms: Prezygotic (temporal, behavioral, ecological, mechanical, gametic isolation) and Postzygotic (hybrid inviability, hybrid sterility); Allopatric speciation via geographical barriers vs Sympatric speciation (polyploidy); Adaptive radiation of Ethiopian highlands endemic wildlife (Walia Ibex, Ethiopian Wolf, Gelada Baboon)."
        }
      ]
    },
    {
      "unit_num": 4,
      "title": "Human Physiology and Defence Mechanisms",
      "start_page": 155,
      "end_page": 204,
      "topics": [
        {
          "num": "4.1",
          "title": "Neural Coordination: Action Potentials and Synaptic Transmission",
          "start": 169,
          "desc": "Structure of sensory, relay, and motor neurons; Resting membrane potential (-70 mV maintained by Na+/K+ ATPase pump: 3 Na+ out, 2 K+ in); Action potential phases: Depolarization (voltage-gated Na+ channels open, potential reaches +30 mV), Repolarization (K+ channels open), Hyperpolarization, Refractory periods; Saltatory conduction in myelinated axons; Synaptic transmission via neurotransmitter acetylcholine release."
        },
        {
          "num": "4.2",
          "title": "Endocrine Coordination and Homeostatic Feedback Loops",
          "start": 183,
          "desc": "Ductless endocrine glands and hormone signaling; Hypothalamus-pituitary axis; Blood glucose regulation by pancreatic islets: Beta cells secrete insulin (promotes glycogenesis and glucose uptake), Alpha cells secrete glucagon (stimulates glycogenolysis and gluconeogenesis); Thyroid hormones T3/T4 and metabolic rate; Adrenal stress hormones (adrenaline and cortisol); Negative feedback control."
        },
        {
          "num": "4.3",
          "title": "The Human Immune System and Defence Mechanisms",
          "start": 197,
          "desc": "Innate (non-specific) immunity: Physical/chemical barriers (skin, lysozyme, stomach acid), phagocytes (macrophages, neutrophils), inflammatory response, fever; Adaptive (specific) immunity: Humoral response mediated by B-lymphocytes and antibodies (IgG, IgM, IgA, IgE), Cell-mediated response mediated by cytotoxic T-cells (CD8+) and helper T-cells (CD4+); Active vs passive immunity, vaccination mechanisms."
        },
        {
          "num": "4.4",
          "title": "Major Pathogenic Diseases and Public Health in Ethiopia",
          "start": 211,
          "desc": "Malaria: Plasmodium falciparum lifecycle between female Anopheles mosquito vector and human host (liver and red blood cell phases), symptoms, Artemisinin-based combination therapy (ACT); Tuberculosis: Mycobacterium tuberculosis pathogenesis, BCG vaccination, DOTS treatment program; HIV/AIDS: Retrovirus replication cycle, reverse transcriptase, destruction of CD4+ T-helper cells, Antiretroviral therapy (ART); Schistosomiasis lifecycle with freshwater snail intermediate host."
        }
      ]
    },
    {
      "unit_num": 5,
      "title": "Applied Ecology and Environmental Conservation",
      "start_page": 205,
      "end_page": 258,
      "topics": [
        {
          "num": "5.1",
          "title": "Ecosystem Dynamics, Trophic Levels and Energy Flow",
          "start": 225,
          "desc": "Ecosystem components (biotic communities and abiotic factors); Trophic levels: Primary producers (autotrophs), primary consumers (herbivores), secondary/tertiary consumers (carnivores), decomposers; Unidirectional energy flow; Lindeman's 10% ecological efficiency rule (90% lost as metabolic heat and respiration); Ecological pyramids of numbers, biomass, and energy."
        },
        {
          "num": "5.2",
          "title": "Biogeochemical Cycles and Nutrient Recycling",
          "start": 239,
          "desc": "Carbon cycle: Photosynthesis, cellular respiration, combustion, and greenhouse effect global warming; Nitrogen cycle: Nitrogen fixation by Rhizobium in legume root nodules and free-living Azotobacter, nitrification by Nitrosomonas and Nitrobacter, assimilation, ammonification, and denitrification by Pseudomonas; Phosphorus cycle; Eutrophication of water bodies caused by synthetic fertilizer runoff."
        },
        {
          "num": "5.3",
          "title": "Environmental Degradation and Climate Resilience in Ethiopia",
          "start": 253,
          "desc": "Deforestation causes (firewood, agricultural expansion) and consequences in Ethiopian highlands; Soil erosion mechanisms, terracing, and contour ploughing; Land degradation and desertification; Impact of erratic rainfall and recurring droughts on pastoralist communities; Ethiopia's Green Legacy Initiative and national reforestation campaigns."
        },
        {
          "num": "5.4",
          "title": "Biodiversity Conservation and Protected Area Management",
          "start": 267,
          "desc": "In-situ conservation: National Parks of Ethiopia (Simien Mountains, Bale Mountains, Awash, Nechisar, Gambella), wildlife sanctuaries (Babille Elephant Sanctuary), biosphere reserves (Kafa coffee forest); Ex-situ conservation: Ethiopian Biodiversity Institute (EBI) genebanks, botanical gardens, and captive breeding programs; Economic and ecological value of preserving endemic genetic resources."
        }
      ]
    }
  ],
  "book-12-eng": [
    {
      "unit_num": 1,
      "title": "Academic Reading and Synthesizing Complex Information",
      "start_page": 1,
      "end_page": 42,
      "topics": [
        {
          "num": "1.1",
          "title": "Academic Reading: Text Analysis, Tone and Main Ideas",
          "start": 1,
          "desc": "Skimming scholarly articles for main idea, scanning for supporting empirical data, evaluating author purpose and objective vs subjective tone, making logical inferences from academic prose, and distinguishing asserted facts from hypotheses."
        },
        {
          "num": "1.2",
          "title": "Scholarly Vocabulary: Affixation and Academic Word List",
          "start": 15,
          "desc": "Morphological word analysis: Latin and Greek prefixes (anti-, bio-, inter-, poly-, trans-) and suffixes (-tion, -ize, -ous, -able); Contextual collocations in university research papers; Connotative nuances of scholarly synonyms."
        },
        {
          "num": "1.3",
          "title": "Advanced Relative Clauses and Sentence Synthesis",
          "start": 29,
          "desc": "Defining vs non-defining relative clauses (comma rules, which vs that, who vs whom, whose); Reduced relative clauses (participle clauses using present -ing and past -ed participles); Combining simple sentences into cohesive compound-complex academic sentences."
        },
        {
          "num": "1.4",
          "title": "Speaking and Discussion: Academic Seminars and Debates",
          "start": 43,
          "desc": "Active listening during scholarly presentations, formulating constructive questions, discourse markers for polite disagreement (\"While I acknowledge your point, evidence suggests...\"), and summarizing group conclusions."
        }
      ]
    },
    {
      "unit_num": 2,
      "title": "Advanced Grammatical Structures for Entrance Examinations",
      "start_page": 43,
      "end_page": 88,
      "topics": [
        {
          "num": "2.1",
          "title": "Mastery of Conditional Sentences and Counterfactuals",
          "start": 57,
          "desc": "Zero, First, Second, and Third Conditionals review; Mixed conditionals (unreal past action with present consequence: If + past perfect, would + base verb); Formal inversion without 'if' (\"Had I known the schedule...\", \"Were the committee to approve...\", \"Should you require assistance...\")."
        },
        {
          "num": "2.2",
          "title": "Advanced Passive Voice Constructions",
          "start": 71,
          "desc": "Passive with reporting verbs for academic objectivity (\"It is widely believed that...\", \"The findings are said to indicate...\"); Passive infinitive and gerund forms; Causative passive structures (have/get something done); Avoiding agent identification when agent is unknown or irrelevant."
        },
        {
          "num": "2.3",
          "title": "Reported Speech and Indirect Discourse",
          "start": 85,
          "desc": "Tense backshift rules in reported speech (simple present to simple past, present perfect to past perfect); Exceptions when reporting universal scientific truths; Reporting verbs with specific patterns (insist on, apologize for, deny + gerund, advise someone to do); Shifting time and place adverbs."
        },
        {
          "num": "2.4",
          "title": "Modals of Deduction, Speculation and Past Regret",
          "start": 99,
          "desc": "Present deduction (must be, can't be, might be); Past deduction and speculation (must have been, can't have done, might have seen); Expressing past obligation and regret (should have studied, ought to have submitted); Common multiple-choice distractors in national EUEE entrance exams."
        }
      ]
    },
    {
      "unit_num": 3,
      "title": "Scientific and Technical Writing",
      "start_page": 89,
      "end_page": 134,
      "topics": [
        {
          "num": "3.1",
          "title": "Expository Writing: Process Descriptions and Technical Reports",
          "start": 113,
          "desc": "Structuring laboratory reports: Introduction, Materials & Methods (passive voice sequential instructions), Results, and Discussion; Sequential connectors (initially, subsequently, simultaneously, following this, ultimately); Precision and concise scientific prose."
        },
        {
          "num": "3.2",
          "title": "Cause-and-Effect Discourse Analysis",
          "start": 127,
          "desc": "Expressing causal relationships using diverse grammatical structures: Prepositions (due to, owing to, as a consequence of), Conjunctions (since, because, as), Transitional adverbs (consequently, therefore, thus, as a result); Structuring multi-paragraph cause-and-effect analytical essays."
        },
        {
          "num": "3.3",
          "title": "Technical Vocabulary and Precise Scientific Phrasing",
          "start": 141,
          "desc": "Domain-specific vocabulary in STEM and social sciences; Avoiding vague colloquial language (e.g. replacing \"make it bigger\" with \"amplify/expand\", \"get rid of\" with \"eliminate\"); Technical collocations and standardized SI measurement phrasing."
        },
        {
          "num": "3.4",
          "title": "Interpreting Graphical Data and Technical Visuals",
          "start": 155,
          "desc": "Describing trends in charts, graphs, and tables: Upward trends (surge, climb, escalate), downward trends (plummet, decline, dip), fluctuations and plateauing; Quantifying changes using adverbs (substantially, marginally, exponentially)."
        }
      ]
    },
    {
      "unit_num": 4,
      "title": "Persuasive Rhetoric and Public Speaking",
      "start_page": 135,
      "end_page": 180,
      "topics": [
        {
          "num": "4.1",
          "title": "Rhetorical Devices and Persuasive Discourse",
          "start": 169,
          "desc": "Classical appeals: Ethos (credibility), Pathos (emotional resonance), Logos (logical reasoning and empirical evidence); Rhetorical strategies: Parallelism, rhetorical questions, antithesis, tricolon (rule of three), and identifying common logical fallacies (ad hominem, false dichotomy, slippery slope)."
        },
        {
          "num": "4.2",
          "title": "Composing Argumentative and Persuasive Essays",
          "start": 183,
          "desc": "Developing an arguable, nuanced thesis statement; Structuring introductory hook, body paragraphs with evidence, acknowledging counter-arguments with robust rebuttals, and crafting a resonant concluding call to action."
        },
        {
          "num": "4.3",
          "title": "Sentence Inversion for Emphasis and Cleft Sentences",
          "start": 197,
          "desc": "Negative adverbial inversion (\"Rarely have we witnessed...\", \"Not only did they succeed, but they also...\", \"Under no circumstances should you...\"); It-clefts (\"It was the lack of infrastructure that caused the delay\") and Wh-clefts (\"What the research demonstrates is...\")."
        },
        {
          "num": "4.4",
          "title": "Public Speaking, Oratory and Pronunciation Intonation",
          "start": 211,
          "desc": "Vocal projection, pacing, pauses for emphasis; Intonation patterns in statements vs questions; Sentence stress highlighting contrasting key words; Overcoming public speaking anxiety and engaging an audience."
        }
      ]
    },
    {
      "unit_num": 5,
      "title": "University Life and Scholarly Communication",
      "start_page": 181,
      "end_page": 228,
      "topics": [
        {
          "num": "5.1",
          "title": "University Lectures: Listening Comprehension and Cornell Note-Taking",
          "start": 225,
          "desc": "Listening for lecture signposting language (introducing topics, digressing, emphasizing key takeaways, signaling exam focus); Implementing the Cornell note-taking system: Cue column, main notes section, and summary block; Using standard academic abbreviations."
        },
        {
          "num": "5.2",
          "title": "Academic Integrity: Paraphrasing, Summarizing and Citation",
          "start": 239,
          "desc": "Understanding plagiarism and intellectual honesty; Techniques for effective paraphrasing: changing word forms, using synonyms, altering sentence structures while preserving original meaning; Summarizing multi-page articles into concise abstracts; Basic citation formatting."
        },
        {
          "num": "5.3",
          "title": "Formal Correspondence and Application Writing",
          "start": 253,
          "desc": "Writing formal university and scholarship application letters; Statement of Purpose (SOP) structure; Register differences between formal letters (Dear Professor..., Sincerely) and informal emails; Formatting a modern student Curriculum Vitae (CV)."
        },
        {
          "num": "5.4",
          "title": "Entrance Examination Test-Taking Strategies",
          "start": 267,
          "desc": "Strategic time management on the 100-question English EUEE paper; Process of elimination for tricky grammar distractors; Contextual inference shortcuts for reading comprehension; Avoiding panic traps in vocabulary questions."
        }
      ]
    }
  ]
};
