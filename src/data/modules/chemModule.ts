import { SubjectModule } from '../modulesData';

export const CHEMISTRY_MODULE: SubjectModule = {
  id: 'module-chem',
  subjectCode: 'CHEM',
  subjectName: 'Chemistry',
  iconName: 'FlaskConical',
  colorGradient: 'from-teal-600 via-emerald-600 to-cyan-800',
  authorNote: 'Oromia Education Bureau • ASTU Special School (Writer: Susie Zigale MSc; Reviewers: Chaluma Sori MSc, Eneyew Tilahun MSc)',
  description: 'Comprehensive High School Chemistry Insight Module (Grade 9-12) covering Atomic Theory, Chemical Bonding, Chemical Reactions & Stoichiometry, Rate of Reaction, Chemical Equilibrium, Organic Compounds, Acid-Base Equilibria, Electrochemistry, Industrial Chemistry, Environmental Chemistry, and Polymers.',
  units: [
    {
      unitNumber: 1,
      title: 'UNIT ONE: ATOMIC THEORY',
      description: 'Historical evolution from Democritus and Dalton to Thomson, Rutherford, Bohr planetary model, quantum mechanics, de Broglie wavelength, photoelectric effect, quantum numbers, and electron configuration principles.',
      topics: [
        {
          id: 'chem-1-1',
          topicNumber: '1.1',
          title: 'Historical Atomic Models & Evolution of Atomic Theory',
          summary: 'Dalton billiard ball model, Thomson plum pudding model, Rutherford nuclear model with gold-foil experiment.',
          content: `### 1.1 Atomic Models & Historical Evolution

1. Dalton's Atomic Model (Billiard Ball Model - John Dalton):
• Matter is composed of small, indivisible and indestructible particles called atoms.
• Atoms of the same element are identical in mass, size, and properties; atoms of different elements differ in size and mass.
• Atoms combine in simple whole-number ratios to form compounds.
• Limitations: Did not account for subatomic particles (electrons, protons, neutrons), isotopes (atoms of the same element with different masses), isobars, or allotropes.

2. Thomson's Atomic Model (Plum Pudding Model - J.J. Thomson):
• Discovered the electron using cathode ray tube experiments.
• Atom resembles a sphere of positive charge with negatively charged electrons embedded like raisins in pudding.
• Total positive and negative charges are equal, rendering the atom electrically neutral.
• Limitations: Failed to explain the existence of a central nucleus and discrete atomic line spectra.

3. Rutherford's Nuclear Model (Ernest Rutherford):
• Alpha particle scattering experiment (bombardment of thin gold foil with α-particles):
  - Most α-particles passed straight through the foil ⟹ Atom is mostly empty space.
  - A small fraction deflected at large angles or rebounded ⟹ Positive charge and almost all mass are concentrated in a tiny central core called the nucleus.
• Limitations: Could not explain why accelerating electrons do not radiate energy and spiral into the nucleus (Maxwell's electrodynamics); could not account for discrete atomic spectra.`,
          workedExamples: [
            {
              problem: 'Explain how Rutherford\'s gold foil experiment disproved Thomson\'s plum pudding model.',
              solution: 'If Thomson\'s model were correct, positive charge would be uniformly diffuse, and α-particles would pass through with only minor deflections. Instead, some rebounded at angles > 90°, proving all positive charge is concentrated in a dense central nucleus.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following statements is accepted in BOTH Dalton\'s theory and modern atomic theory?',
              options: [
                'Atoms cannot be subdivided, created or destroyed',
                'Atoms of the same element may have different masses',
                'Atoms of a given element are identical in mass and all other properties',
                'Atoms of different elements combine in fixed simple whole number ratios to form compounds'
              ],
              correctIndex: 3,
              explanation: 'The Law of Definite Proportions and combination in fixed whole-number ratios remains a cornerstone of both Dalton\'s and modern atomic chemistry.'
            },
            {
              question: 'Which conclusion is based on Rutherford\'s gold foil experiment?',
              options: [
                'An atom is mainly empty space and the nucleus has a positive charge',
                'An atom is mainly empty space and the nucleus has a negative charge',
                'An atom has hardly any empty space, and the nucleus has a positive charge',
                'An atom has hardly any empty space, and the nucleus has a negative charge'
              ],
              correctIndex: 0,
              explanation: 'Since most alpha particles passed undeflected while a few rebounded, atoms are primarily empty space with a dense, positively charged nucleus.'
            },
            {
              question: 'Which of the following was a major limitation of Thomson\'s Plum Pudding atomic model?',
              options: [
                'It failed to explain the existence of a dense atomic nucleus',
                'It predicted that electrons orbit the nucleus in elliptical paths',
                'It assumed that protons were located in outer shells',
                'It could not explain the law of conservation of mass'
              ],
              correctIndex: 0,
              explanation: 'Thomson\'s model regarded positive charge as a diffuse sphere rather than a concentrated central nucleus.'
            },
            {
              question: 'An arbitrary element X has two naturally occurring isotopes: X-40 (40 amu, 80% abundance) and X-44 (44 amu, 20% abundance). What is the average atomic mass of element X?',
              options: ['41.5 amu', '40.8 amu', '42.0 amu', '40.0 amu'],
              correctIndex: 1,
              explanation: 'Average atomic mass = (40 × 0.80) + (44 × 0.20) = 32.0 + 8.8 = 40.8 amu.'
            },
            {
              question: 'Isotopes of the same chemical element differ in which of the following properties?',
              options: ['Number of protons', 'Atomic number', 'Chemical properties', 'Atomic mass and physical properties'],
              correctIndex: 3,
              explanation: 'Isotopes have the same number of protons and identical valence electrons (identical chemistry), but differ in neutron count, mass number, and physical properties (density, boiling point).'
            }
          ]
        },
        {
          id: 'chem-1-2',
          topicNumber: '1.2',
          title: 'Bohr Planetary Model & Quantized Energy States',
          summary: 'Stationary orbits, quantization of angular momentum mvr = nh/2pi, energy transitions ΔE = hv, and hydrogen spectral series.',
          content: `### 1.2 Bohr's Model & Hydrogen Line Spectra

Postulates of Niels Bohr (1913):
1. Stationary Orbits: Electrons revolve around the nucleus only in discrete circular orbits without radiating energy.
2. Quantization of Angular Momentum:
   L = m v r = (n h) / (2 π)   (where n = 1, 2, 3, ...)
3. Energy Quantization in Hydrogen:
   E_n = -2.18 × 10⁻¹⁸ J / n²
4. Energy Absorption & Emission:
   Electrons absorb a photon to jump to a higher energy orbit (excited state) and emit a photon when dropping to a lower orbit:
   ΔE = E_f - E_i = h ν = (h c) / λ

Spectral Series of Hydrogen:
• Lyman Series (n_f = 1): Ultraviolet region (UV)
• Balmer Series (n_f = 2): Visible light region
• Paschen Series (n_f = 3): Infrared region (IR)
• Brackett Series (n_f = 4): Infrared region (IR)
• Pfund Series (n_f = 5): Far infrared region`,
          workedExamples: [
            {
              problem: 'Calculate the energy of an electron in the n = 3 energy level of a hydrogen atom.',
              solution: 'E_3 = -2.18 × 10⁻¹⁸ J / (3)² = -2.18 × 10⁻¹⁸ / 9 = -2.42 × 10⁻¹⁹ J.'
            },
            {
              problem: 'Which electronic transition in a hydrogen atom emits light in the ultraviolet region?',
              solution: 'Transitions dropping down to the ground state n = 1 form the Lyman series, which exclusively emit in the ultraviolet region.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which series of the hydrogen atomic spectrum corresponds to the ultraviolet (UV) region?',
              options: ['Balmer series', 'Brackett series', 'Paschen series', 'Lyman series'],
              correctIndex: 3,
              explanation: 'The Lyman series involves transitions ending at n = 1 and falls in the ultraviolet region. The Balmer series (n = 2) corresponds to visible light.'
            },
            {
              question: 'According to Bohr\'s model, what occurs when an electron transitions from a higher energy level to a lower one?',
              options: [
                'Another electron moves from low to high level',
                'The atom moves faster',
                'Energy is emitted in the form of a photon of light',
                'The nucleus expands'
              ],
              correctIndex: 2,
              explanation: 'The energy difference ΔE = E_initial - E_final is emitted as a quantum of light (photon) with frequency ν = ΔE/h.'
            },
            {
              question: 'Which of the following equations is NOT an assumption or formula of Bohr\'s model?',
              options: [
                'mvr = nh / (2π)',
                'r = n² (0.529 Å)',
                'E = mc²',
                'E_n = -2.18 × 10⁻¹⁸ J / n²'
              ],
              correctIndex: 2,
              explanation: 'E = mc² is Einstein\'s mass-energy equivalence equation, not a postulate of Bohr\'s atomic model.'
            },
            {
              question: 'Which of the following electron transitions in a hydrogen atom requires the SMALLEST amount of energy to be absorbed?',
              options: ['From n = 1 to n = 2', 'From n = 3 to n = 4', 'From n = 6 to n = 7', 'From n = 7 to n = 8'],
              correctIndex: 3,
              explanation: 'The energy gap ΔE = 2.18 × 10⁻¹⁸ (1/n₁² - 1/n₂²) decreases rapidly as principal quantum number n increases; the gap between n = 7 and n = 8 is the smallest.'
            },
            {
              question: 'What is the key limitation of the Bohr atomic model?',
              options: [
                'It cannot explain the stability of the atom',
                'It cannot explain spectra of multi-electron atoms or the wave nature of electrons',
                'It assumes atoms are indivisible',
                'It predicts continuous emission spectra'
              ],
              correctIndex: 1,
              explanation: 'Bohr\'s model successfully explained one-electron hydrogen-like systems (H, He⁺, Li²⁺), but failed for multi-electron atoms, fine spectral splitting, and electron wave behavior.'
            }
          ]
        },
        {
          id: 'chem-1-3',
          topicNumber: '1.3',
          title: 'Quantum Mechanical Model, Quantum Numbers & Electron Configuration',
          summary: 'de Broglie duality, Heisenberg uncertainty, 4 quantum numbers (n, l, ml, ms), Aufbau, Hund\'s rule, and Pauli exclusion.',
          content: `### 1.3 Quantum Mechanical Model of the Atom

Postulates & Principles:
• Wave-Particle Duality (de Broglie): λ = h / (m v) = h / p
• Heisenberg Uncertainty Principle: Δx · Δp ≥ h / (4 π). It is impossible to simultaneously measure both the exact position and momentum of an electron.
• Schrödinger Wave Equation: Electrons are described by wave functions (ψ); |ψ|² represents electron probability density (atomic orbitals).

The Four Quantum Numbers:
1. Principal Quantum Number (n = 1, 2, 3, ...): Determines main energy level and orbital size.
2. Azimuthal (Angular Momentum) Quantum Number (l = 0, 1, ..., n - 1): Determines orbital shape.
   - l = 0 (s, spherical), l = 1 (p, dumbbell), l = 2 (d, cloverleaf), l = 3 (f, complex).
3. Magnetic Quantum Number (m_l = -l, ..., 0, ..., +l): Determines orbital spatial orientation (number of orbitals = 2l + 1).
4. Spin Quantum Number (m_s = +1/2 or -1/2): Direction of electron intrinsic spin.

Electron Configuration Rules:
• Aufbau Principle: Electrons fill lower-energy orbitals first according to the (n + l) rule. (1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p ...).
• Hund's Rule of Maximum Multiplicity: In degenerate orbitals (e.g. 2px, 2py, 2pz), electrons occupy singly with parallel spins before pairing.
• Pauli Exclusion Principle: No two electrons in an atom can have identical sets of all four quantum numbers. Each orbital holds a maximum of 2 electrons with opposite spins.
• Exceptional Stability: Cr ([Ar] 4s¹ 3d⁵) and Cu ([Ar] 4s¹ 3d¹⁰) have half-filled and fully-filled d-subshells.`,
          workedExamples: [
            {
              problem: 'Which set of quantum numbers (n, l, m_l, m_s) is permissible for an electron in a 3d orbital?',
              solution: 'For 3d: n = 3, l = 2. The allowed values for m_l are -2, -1, 0, +1, +2, and m_s = ±1/2. Example: (3, 2, -1, +1/2).'
            },
            {
              problem: 'Calculate the de Broglie wavelength of an electron traveling at 1.0 × 10⁷ m/s (m_e = 9.11 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J·s).',
              solution: 'λ = h / (m v) = (6.63 × 10⁻³⁴) / (9.11 × 10⁻³¹ × 1.0 × 10⁷) = 6.63 × 10⁻³⁴ / 9.11 × 10⁻²⁴ = 7.28 × 10⁻¹¹ m (0.0728 nm).'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following sets of quantum numbers (n, l, m_l, m_s) is PERMITTED by the rules of quantum mechanics?',
              options: [
                'n = 4, l = 3, m_l = -2, m_s = +1/2',
                'n = 3, l = 3, m_l = -3, m_s = +1/2',
                'n = 3, l = 2, m_l = -4, m_s = -1/2',
                'n = 1, l = 3, m_l = -1, m_s = +1/2'
              ],
              correctIndex: 0,
              explanation: 'For n = 4, l can range from 0 to 3. If l = 3, m_l can range from -3 to +3 (so -2 is permitted), and m_s = +1/2 is valid.'
            },
            {
              question: 'Which set of orbitals is arranged in order of INCREASING energy according to the (n + l) rule?',
              options: [
                '3d < 4s < 4p < 5s < 4d',
                '4s < 3d < 4p < 5s < 4d',
                '3d < 4s < 4p < 4d < 5s',
                '4s < 3d < 4p < 4d < 5s'
              ],
              correctIndex: 1,
              explanation: '4s (n+l = 4+0 = 4) < 3d (n+l = 3+2 = 5, lower n) < 4p (4+1 = 5) < 5s (5+0 = 5) < 4d (4+2 = 6).'
            },
            {
              question: 'What is the maximum number of electrons in an atom that can share the quantum numbers n = 6, l = 3, and m_l = -2?',
              options: ['14', '7', '2', '1'],
              correctIndex: 2,
              explanation: 'A specific orbital is defined by the three quantum numbers (n, l, m_l). Any single atomic orbital can hold at most 2 electrons (m_s = +1/2 and -1/2) by the Pauli Exclusion Principle.'
            },
            {
              question: 'An element with the valence electron configuration ns² np⁶ belongs to which group of the periodic table?',
              options: ['Group IIA', 'Group VIA', 'Group VIIA', 'Group VIIIA (Noble gases)'],
              correctIndex: 3,
              explanation: 'ns² np⁶ has 8 valence electrons, forming a completed stable octet characteristic of Group VIIIA (Group 18, noble gases).'
            },
            {
              question: 'Which of the following elements has the SMALLEST atomic radius?',
              options: ['O²⁻', 'F⁻', 'Ne', 'Na⁺', 'Mg²⁺'],
              correctIndex: 4,
              explanation: 'These species are isoelectronic (10 electrons each). Mg²⁺ has the highest nuclear charge (12 protons), which exerts the strongest inward pull on the electron cloud, giving it the smallest ionic radius.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'UNIT TWO: CHEMICAL BONDING',
      description: 'Ionic vs covalent bonding, lattice energy, Born-Haber cycle, Lewis structures, resonance, VSEPR molecular geometry, hybridization (sp to sp3d2), intermolecular forces, and Molecular Orbital Theory (MOT).',
      topics: [
        {
          id: 'chem-2-1',
          topicNumber: '2.1',
          title: 'Ionic & Covalent Bonding, Lattice Energy & Lewis Structures',
          summary: 'Electrovalent vs covalent bonding, factors affecting lattice energy, Born-Haber cycle, and drawing octet Lewis structures.',
          content: `### 2.1 Types of Chemical Bonds & Lattice Energy

1. Ionic Bonding:
• Electrostatic attraction between cations and anions formed by complete transfer of electrons from electropositive metal to electronegative non-metal.
• Characteristics: High melting/boiling points, hard and brittle, conduct electricity in molten and aqueous states but NOT in solid state.
• Lattice Energy: Energy released when gaseous ions combine to form one mole of an ionic crystalline solid.
  - Proportional to ionic charges (q₁ · q₂) and inversely proportional to internuclear distance (r₀).
  - High charge, small radius ⟹ Higher lattice energy (e.g. MgO > NaCl; LiF > CsI).

2. Covalent Bonding:
• Sharing of valence electron pairs between non-metal atoms.
• Non-polar Covalent: Equal electron sharing (electronegativity difference ΔEN = 0, e.g. H₂, Cl₂, O₂).
• Polar Covalent: Unequal electron sharing (0 < ΔEN < 2.0, e.g. HCl, H₂O).
• Coordinate Covalent (Dative) Bond: A bond in which both shared electrons originate from a single atom (e.g. NH₄⁺, H₃O⁺).

3. Lewis Structures & Formal Charge:
• Formal Charge = (Valence e⁻) - (Non-bonding e⁻) - 1/2(Bonding e⁻).
• Stable resonance structures have formal charges minimized and negative formal charge placed on the most electronegative atom.`,
          workedExamples: [
            {
              problem: 'Which ionic compound has the smallest lattice energy: LiF, CsI, NaF, or LiI?',
              solution: 'Lattice energy is inversely proportional to ion size. Both Cs⁺ and I⁻ are the largest cations and anions among the choices, giving CsI the largest internuclear distance and hence the smallest lattice energy.'
            },
            {
              problem: 'Draw the Lewis structure of FCN and state the bonds between carbon and nitrogen.',
              solution: 'Total valence electrons = 7(F) + 4(C) + 5(N) = 16. Skeleton: F-C≡N. C has 0 lone pairs, N has 1 lone pair, and F has 3 lone pairs. The C-N bond is a triple bond (one σ and two π bonds).'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following compounds contains BOTH ionic and covalent bonds?',
              options: ['CO₂', 'Na₂CO₃', 'Cl₂O', 'BaCl₂'],
              correctIndex: 1,
              explanation: 'Na₂CO₃ has ionic bonds between Na⁺ cations and the polyatomic CO₃²⁻ anion, while the atoms within CO₃²⁻ are bonded covalently.'
            },
            {
              question: 'Which of the following ionic compounds has the HIGHEST lattice energy?',
              options: ['NaCl', 'MgO', 'KBr', 'CaF₂'],
              correctIndex: 1,
              explanation: 'Lattice energy is proportional to the product of ionic charges (q₁ · q₂). For MgO, (q₁ · q₂ = +2 × -2 = 4), which is far higher than +1/-1 in NaCl and KBr.'
            },
            {
              question: 'When H⁺ reacts with H₂O to form the hydronium ion H₃O⁺, the resulting bond is classified as a coordinate covalent bond because:',
              options: [
                'Both shared bonding electrons are contributed solely by the oxygen atom',
                'It forms an exceptionally strong ionic bond',
                'Electrons are transferred completely to hydrogen',
                'Oxygen violates the octet rule'
              ],
              correctIndex: 0,
              explanation: 'In a coordinate covalent bond, one atom (oxygen with a lone pair) donates both electrons to share with an electron-deficient species (H⁺).'
            },
            {
              question: 'Among carbon-carbon bonds (single C-C, double C=C, triple C≡C), which has the SHORTEST bond length and HIGHEST bond strength?',
              options: ['Single bond (C-C)', 'Double bond (C=C)', 'Triple bond (C≡C)', 'All have equal bond length'],
              correctIndex: 2,
              explanation: 'Triple bonds share 6 electrons (one σ and two π bonds), creating the greatest electron density between nuclei, resulting in the shortest bond length and greatest bond dissociation energy.'
            },
            {
              question: 'All of the following are physical characteristics of typical ionic solids EXCEPT:',
              options: [
                'High melting and boiling points',
                'High electrical conductivity in the solid state',
                'Solubility in polar solvents like water',
                'Hard and brittle crystalline lattice structure'
              ],
              correctIndex: 1,
              explanation: 'In the solid state, ions are locked in rigid crystal lattice positions and cannot move; ionic solids only conduct electricity when melted (liquid) or dissolved in water (aqueous).'
            }
          ]
        },
        {
          id: 'chem-2-2',
          topicNumber: '2.2',
          title: 'VSEPR Theory, Molecular Geometry & Hybridization',
          summary: 'Electron domain geometry vs molecular shape, lone pair repulsions, sp to sp3d2 hybridization, and molecular polarity.',
          content: `### 2.2 VSEPR Theory, Hybridization & Molecular Geometries

VSEPR Repulsion Order:
Lone Pair - Lone Pair (LP-LP) > Lone Pair - Bonding Pair (LP-BP) > Bonding Pair - Bonding Pair (BP-BP).

Summary of Hybridization & Shapes:
• sp (2 domains, 0 LP): Linear (180°), e.g. BeCl₂, CO₂, C₂H₂.
• sp² (3 domains):
  - 0 LP (AX₃): Trigonal Planar (120°), e.g. BF₃, SO₃.
  - 1 LP (AX₂E): Bent (< 120°), e.g. SO₂, NO₂⁻.
• sp³ (4 domains):
  - 0 LP (AX₄): Tetrahedral (109.5°), e.g. CH₄, CCl₄.
  - 1 LP (AX₃E): Trigonal Pyramidal (~107°), e.g. NH₃, PCl₃.
  - 2 LP (AX₂E₂): Bent (~104.5°), e.g. H₂O, H₂S, OF₂.
• sp³d (5 domains):
  - 0 LP (AX₅): Trigonal Bipyramidal (90°, 120°), e.g. PCl₅.
  - 1 LP (AX₄E): Seesaw (< 90°, < 120°), e.g. SF₄.
  - 2 LP (AX₃E₂): T-shaped (< 90°), e.g. ClF₃, BrF₃.
  - 3 LP (AX₂E₃): Linear (180°), e.g. XeF₂.
• sp³d² (6 domains):
  - 0 LP (AX₆): Octahedral (90°), e.g. SF₆.
  - 1 LP (AX₅E): Square Pyramidal (< 90°), e.g. IF₅, BrF₅.
  - 2 LP (AX₄E₂): Square Planar (90°), e.g. XeF₄.`,
          workedExamples: [
            {
              problem: 'Predict the electron domain geometry, molecular geometry, and hybridization of the central atom in XeF₄.',
              solution: 'Xe has 8 valence e⁻ + 4(1 from F) = 12 e⁻ (6 electron pairs: 4 bonding pairs + 2 lone pairs ⟹ AX₄E₂). Electron domain geometry is Octahedral, molecular geometry is Square Planar, and hybridization is sp³d².'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following molecules has a SQUARE PLANAR molecular geometry?',
              options: ['BF₃', 'XeF₄', 'PCl₅', 'CH₄'],
              correctIndex: 1,
              explanation: 'XeF₄ has 4 bonding pairs and 2 lone pairs (AX₄E₂ designation, sp³d² hybridization), resulting in a square planar molecular shape.'
            },
            {
              question: 'What is the molecular geometry of chlorine trifluoride (ClF₃)?',
              options: ['Trigonal planar', 'Trigonal pyramidal', 'T-shaped', 'Square pyramidal'],
              correctIndex: 2,
              explanation: 'ClF₃ has 3 bonding pairs and 2 lone pairs on the central chlorine atom (AX₃E₂), giving it a T-shaped molecular geometry.'
            },
            {
              question: 'What is the hybridization of the central sulfur atom in the SF₆ molecule?',
              options: ['sp³', 'sp³d', 'sp³d²', 'sp²'],
              correctIndex: 2,
              explanation: 'SF₆ has 6 bonding pairs around sulfur and 0 lone pairs (AX₆), which corresponds to sp³d² hybridization with an octahedral shape.'
            },
            {
              question: 'Which of the following molecules has a net dipole moment of ZERO (non-polar)?',
              options: ['H₂O', 'NH₃', 'CH₄', 'CH₃Cl'],
              correctIndex: 2,
              explanation: 'CH₄ has a symmetrical tetrahedral geometry with four identical C-H dipoles pointing in opposing directions, canceling each other out to yield a net dipole moment μ = 0.'
            },
            {
              question: 'How many sigma (σ) and pi (π) bonds are present in the molecule CH₃-CH=CH-COOH?',
              options: ['9 σ and 2 π', '9 σ and 4 π', '11 σ and 2 π', '13 σ and 4 π'],
              correctIndex: 2,
              explanation: 'Counting all single bonds and one component of double bonds: 3 (C-H in methyl) + 1 (C-C) + 1 (C-H) + 1 (C=C σ) + 1 (C-H) + 1 (C-C) + 1 (C=O σ) + 1 (C-O) + 1 (O-H) = 11 σ bonds. The C=C and C=O double bonds each provide 1 π bond = 2 π bonds.'
            }
          ]
        },
        {
          id: 'chem-2-3',
          topicNumber: '2.3',
          title: 'Intermolecular Forces & Molecular Orbital Theory (MOT)',
          summary: 'Hydrogen bonding, dipole-dipole, London dispersion, bonding/antibonding MOs, bond order BO = (Nb - Na)/2, and paramagnetism.',
          content: `### 2.3 Intermolecular Forces & Molecular Orbital Theory

1. Intermolecular Forces (IMF):
• London Dispersion Forces: Weakest attractive forces present in ALL molecules; dominant in non-polar molecules (CH₄, CCl₄, O₂, noble gases). Increases with molecular mass/size.
• Dipole-Dipole Forces: Attractive forces between permanent dipoles in polar molecules (HCl, H₂S, SO₂).
• Hydrogen Bonding: Exceptionally strong dipole interaction occurring when H is directly bonded to small, highly electronegative atoms (F, O, N). Explains abnormally high boiling points of H₂O, HF, and NH₃.

2. Molecular Orbital Theory (MOT):
• Formed by Linear Combination of Atomic Orbitals (LCAO):
  - Bonding Molecular Orbitals: Lower energy, constructive wave overlap, stable.
  - Antibonding Molecular Orbitals (*): Higher energy, destructive overlap, destabilizing.
• Bond Order (BO) Formula:
  BO = (N_b - N_a) / 2
  - BO > 0: Molecule is stable.
  - BO = 0: Molecule does not exist (e.g. Be₂).
• Magnetic Properties:
  - Paramagnetic: Contains one or more UNPAIRED electrons (attracted to magnetic field), e.g. O₂ (two unpaired e⁻ in π*2p).
  - Diamagnetic: ALL electrons are PAIRED (repelled by magnetic field), e.g. N₂, NO⁺, C₂.`,
          workedExamples: [
            {
              problem: 'Use Molecular Orbital Theory to calculate the bond order and explain the magnetic behavior of O₂.',
              solution: 'Total valence e⁻ in O₂ = 12. Valence MO: σ2s² σ*2s² σ2p_z² π2p_x² π2p_y² π*2p_x¹ π*2p_y¹. Bonding e⁻ = 8, Antibonding e⁻ = 4. Bond Order = (8 - 4) / 2 = 2.0 (double bond). Because of 2 unpaired electrons in π* orbitals, O₂ is paramagnetic.'
            }
          ],
          practiceQuestions: [
            {
              question: 'According to Molecular Orbital Theory, which of the following species is PARAMAGNETIC due to unpaired electrons?',
              options: ['N₂', 'O₂', 'C₂', 'NO⁺'],
              correctIndex: 1,
              explanation: 'O₂ has 2 unpaired electrons in degenerate π*2p antibonding orbitals, making it paramagnetic.'
            },
            {
              question: 'What is the bond order of the superoxide ion (O₂⁻)?',
              options: ['2.5', '1.5', '2.0', '1.0'],
              correctIndex: 1,
              explanation: 'Neutral O₂ has 10 valence electrons in bonding and 4 in antibonding (BO = 2). O₂⁻ gains 1 electron into an antibonding π* orbital (N_a = 5), so BO = (8 - 5) / 2 = 1.5.'
            },
            {
              question: 'Which of the following diatomic species does NOT exist because its bond order is zero?',
              options: ['Be₂', 'B₂', 'C₂', 'N₂'],
              correctIndex: 0,
              explanation: 'Be₂ has 8 electrons: σ1s² σ*1s² σ2s² σ*2s². Bonding e⁻ = 4, Antibonding e⁻ = 4. Bond Order = (4 - 4) / 2 = 0, so Be₂ does not exist.'
            },
            {
              question: 'The unusually high boiling point of water (H₂O) compared to hydrogen sulfide (H₂S) is primarily due to:',
              options: ['London dispersion forces', 'Ionic bonding', 'Intermolecular hydrogen bonding', 'Covalent network bonding'],
              correctIndex: 2,
              explanation: 'Water molecules form extensive three-dimensional networks of strong intermolecular hydrogen bonds due to the high electronegativity of oxygen.'
            },
            {
              question: 'Why does graphite conduct electricity whereas diamond does not?',
              options: [
                'Graphite contains delocalized mobile π electrons from sp² carbon atoms',
                'Diamond is made of carbon while graphite is made of silicon',
                'Graphite has ionic bonds between its layers',
                'Diamond contains only single bonds with no atoms'
              ],
              correctIndex: 0,
              explanation: 'In graphite, each carbon is sp² hybridized and bonded to 3 other carbons in planar sheets, leaving one unhybridized p electron delocalized to conduct electricity.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'UNIT THREE: CHEMICAL REACTIONS AND STOICHIOMETRY',
      description: 'Types of chemical reactions, balancing equations, redox reactions and oxidation states, limiting and excess reactants, theoretical and actual percent yield, and empirical vs molecular formulas.',
      topics: [
        {
          id: 'chem-3-1',
          topicNumber: '3.1',
          title: 'Reaction Types, Balancing & Empirical Formulas',
          summary: 'Combination, decomposition, displacement, double replacement, combustion, and calculating empirical/molecular formulas.',
          content: `### 3.1 Chemical Reactions & Formulas

Major Types of Chemical Reactions:
1. Combination (Synthesis): A + B → AB  (e.g. 2Mg + O₂ → 2MgO)
2. Decomposition: AB → A + B  (e.g. 2KClO₃ → 2KCl + 3O₂)
3. Single Displacement: A + BC → AC + B  (A more active metal replaces a less active metal)
4. Double Displacement (Metathesis): AB + CD → AD + CB (precipitation, neutralization)
5. Combustion: C_x H_y + O₂ → CO₂ + H₂O + Heat

Empirical vs Molecular Formula:
• Empirical Formula: Simplest whole-number molar ratio of atoms.
• Molecular Formula: (Empirical Formula)_n, where n = (Molar Mass) / (Empirical Formula Mass).`,
          workedExamples: [
            {
              problem: 'A compound contains 40.0% C, 6.7% H, and 53.3% O by mass. If its molar mass is 60.0 g/mol, find its empirical and molecular formulas.',
              solution: '1. Moles in 100 g: C = 40.0/12.01 = 3.33; H = 6.7/1.008 = 6.65; O = 53.3/16.00 = 3.33.\n2. Divide by lowest (3.33): C = 1, H = 2, O = 1 ⟹ Empirical formula = CH₂O (mass = 30.0 g/mol).\n3. Ratio n = 60.0 / 30.0 = 2. Molecular formula = C₂H₄O₂ (acetic acid).'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which group of compounds shares the SAME empirical formula (CH₂O) but different molecular formulas?',
              options: [
                'Glucose (C₆H₁₂O₆), Ribose (C₅H₁₀O₅), and Acetic acid (C₂H₄O₂)',
                'Benzene (C₆H₆) and Formaldehyde (CH₂O)',
                'Maltose (C₁₂H₂₂O₁₁) and Glucose (C₆H₁₂O₆)',
                'Methane (CH₄) and Ethane (C₂H₆)'
              ],
              correctIndex: 0,
              explanation: 'Glucose, ribose, and acetic acid all simplify to the 1:2:1 atomic ratio of CH₂O.'
            },
            {
              question: 'What type of reaction is represented by: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)?',
              options: ['Combination', 'Decomposition', 'Single displacement', 'Double displacement (precipitation)'],
              correctIndex: 3,
              explanation: 'The two compounds exchange their partner ions in aqueous solution, forming a precipitate of AgCl.'
            },
            {
              question: 'Which of the following is an INTENSIVE physical property of matter?',
              options: ['Mass', 'Volume', 'Density', 'Enthalpy'],
              correctIndex: 2,
              explanation: 'Density is an intensive property because it does not depend on the amount of substance present.'
            },
            {
              question: 'What is the empirical formula of a compound containing 40% sulfur and 60% oxygen by mass? (Atomic weights: S = 32, O = 16)',
              options: ['SO', 'SO₂', 'SO₃', 'S₂O₄'],
              correctIndex: 2,
              explanation: 'Moles of S = 40 / 32 = 1.25 mol. Moles of O = 60 / 16 = 3.75 mol. Ratio O/S = 3.75 / 1.25 = 3. Formula is SO₃.'
            },
            {
              question: 'What volume of hydrogen gas (H₂) at STP is produced when 2 moles of water decompose completely: 2H₂O → 2H₂ + O₂?',
              options: ['11.2 L', '22.4 L', '44.8 L', '67.2 L'],
              correctIndex: 2,
              explanation: '2 moles of H₂O yield 2 moles of H₂ gas. At STP, 1 mole of any ideal gas occupies 22.4 L. 2 × 22.4 L = 44.8 L.'
            }
          ]
        },
        {
          id: 'chem-3-2',
          topicNumber: '3.2',
          title: 'Redox Reactions, Oxidation Numbers & Stoichiometry',
          summary: 'Assigning oxidation states, oxidizing vs reducing agents, limiting reagent identification, and percent yield.',
          content: `### 3.2 Redox Chemistry & Limiting Reactants

1. Oxidation States Rules:
• Elemental state = 0. Group IA = +1, Group IIA = +2, Fluorine = -1.
• Oxygen = -2 (except in peroxides where -1). Hydrogen = +1 (except in hydrides where -1).
• The sum of oxidation numbers equals the net charge of the molecule or polyatomic ion.

2. Redox Definitions:
• Oxidation: Increase in oxidation number (Loss of electrons - OIL).
• Reduction: Decrease in oxidation number (Gain of electrons - RIG).
• Oxidizing Agent: The species that gets reduced (causes oxidation).
• Reducing Agent: The species that gets oxidized (causes reduction).

3. Limiting Reactants & Yield:
• Limiting Reactant: The reactant completely consumed first; limits theoretical yield.
• Percent Yield: (Actual Yield / Theoretical Yield) × 100%.`,
          workedExamples: [
            {
              problem: 'Find the oxidation state of chromium in (NH₄)₂Cr₂O₇.',
              solution: 'NH₄⁺ has charge +1. So dichromate ion is Cr₂O₇²⁻. 2(Cr) + 7(-2) = -2  ⟹  2Cr - 14 = -2  ⟹  2Cr = +12  ⟹  Cr = +6.'
            },
            {
              problem: 'If 3 moles of carbon react with 8 moles of oxygen: C + O₂ → CO₂, identify the limiting reactant and mass of CO₂ produced.',
              solution: 'Stoichiometry is 1:1. 3 moles of C require 3 moles of O₂. Since 8 moles of O₂ are available, Carbon is the limiting reactant. CO₂ produced = 3 mol × 44.01 g/mol = 132 g.'
            }
          ],
          practiceQuestions: [
            {
              question: 'In the redox reaction: 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O, which substance is reduced and which acts as the oxidizing agent?',
              options: [
                'Cu is reduced and HNO₃ is oxidizing agent',
                'Nitrogen is reduced and HNO₃ is the oxidizing agent',
                'Copper is oxidized and NO is oxidizing agent',
                'Hydrogen is reduced and Cu is oxidizing agent'
              ],
              correctIndex: 1,
              explanation: 'Nitrogen goes from +5 in HNO₃ to +2 in NO (gain of electrons = reduction). Because HNO₃ causes oxidation of Cu, HNO₃ is the oxidizing agent.'
            },
            {
              question: 'Which of the following chemical reactions is NOT a redox reaction?',
              options: [
                '2H₂ + O₂ → 2H₂O',
                'Mg + Cl₂ → MgCl₂',
                'NaCl + KBr → KCl + NaBr',
                'Mg + CuCl₂ → MgCl₂ + Cu'
              ],
              correctIndex: 2,
              explanation: 'NaCl + KBr → KCl + NaBr is a double replacement precipitation reaction where all oxidation numbers remain constant (Na⁺, K⁺, Cl⁻, Br⁻).'
            },
            {
              question: 'What is the oxidation state of sulfur in sulfuric acid (H₂SO₄)?',
              options: ['+2', '+4', '+6', '-2'],
              correctIndex: 2,
              explanation: '2(+1 for H) + S + 4(-2 for O) = 0 ⟹ +2 + S - 8 = 0 ⟹ S = +6.'
            },
            {
              question: 'If 5 moles of reactant A and 7 moles of reactant B are mixed according to: 2A + 3B → C, which reactant is limiting?',
              options: ['Reactant A', 'Reactant B', 'Both are in exact stoichiometric ratio', 'Cannot be determined'],
              correctIndex: 1,
              explanation: 'Molar ratios: 5 moles A requires (3/2) × 5 = 7.5 moles B. Only 7.0 moles of B are supplied, so B runs out first and is the limiting reactant.'
            },
            {
              question: 'Which of the following statements about theoretical and actual yield is CORRECT?',
              options: [
                'Theoretical yield is obtained from laboratory measurements',
                'Actual yield is calculated directly from the balanced chemical equation',
                'Theoretical yield is the calculated maximum amount of product possible',
                'Actual yield is always greater than theoretical yield'
              ],
              correctIndex: 2,
              explanation: 'Theoretical yield is calculated mathematically from stoichiometry. Actual yield is obtained experimentally in the lab and is typically less due to incomplete reactions and losses.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'UNIT FOUR: CHEMICAL EQUILIBRIUM & REACTION KINETICS',
      description: 'Reaction rates, collision theory, factors affecting rates, dynamic equilibrium, equilibrium constants (Kc, Kp), Le Chatelier\'s principle, Haber and Contact industrial processes.',
      topics: [
        {
          id: 'chem-4-1',
          topicNumber: '4.1',
          title: 'Reaction Kinetics & Factors Affecting Reaction Rates',
          summary: 'Rate expressions r = -Δ[A]/Δt, collision theory, activation energy, temperature, concentration, and catalysts.',
          content: `### 4.1 Chemical Kinetics & Reaction Rates

1. Definition of Reaction Rate:
Rate is the change in concentration of a reactant or product per unit time:
r = - (1/a) (Δ[A] / Δt) = + (1/c) (Δ[C] / Δt)  (Units: mol·L⁻¹·s⁻¹ or M·s⁻¹)

2. Collision Theory Requirements:
For a reaction to occur:
• Reacting molecules must collide.
• Collisions must have sufficient energy (E ≥ Activation Energy, E_a).
• Molecules must collide with the proper orientation.

3. Factors Influencing Reaction Rates:
• Temperature: Higher temperature increases kinetic energy and the fraction of molecules with E ≥ E_a.
• Concentration / Pressure: Higher concentration creates more collisions per unit volume.
• Surface Area: Finer subdivisions increase accessible contact sites.
• Catalyst: Increases rate by providing an alternative pathway with a lower activation energy (E_a) without being consumed.`,
          workedExamples: [
            {
              problem: 'For reaction X(g) + 2Y(g) → XY₂(g), if Δ[Y]/Δt = -5.0 × 10⁻² mol·L⁻¹·s⁻¹, find the rate of formation of XY₂.',
              solution: 'Rate of formation of XY₂ = -(1/2) (Δ[Y]/Δt) = -(1/2)(-5.0 × 10⁻²) = +2.5 × 10⁻² mol·L⁻¹·s⁻¹.'
            }
          ],
          practiceQuestions: [
            {
              question: 'How does a positive catalyst increase the rate of a chemical reaction?',
              options: [
                'By making the overall enthalpy change (ΔH) more negative',
                'By providing an alternative reaction pathway with a lower activation energy',
                'By increasing the total kinetic energy of the reacting molecules',
                'By shifting the position of chemical equilibrium toward products'
              ],
              correctIndex: 1,
              explanation: 'A catalyst lowers the activation energy barrier for both the forward and reverse reactions equally without changing ΔH or the equilibrium constant.'
            },
            {
              question: 'Why do finely powdered reactants react much faster than large crystals of the same substance?',
              options: [
                'Powdering increases the activation energy',
                'Powdering increases the exposed surface area, leading to more frequent collisions',
                'Powdering decreases the temperature of the reaction',
                'Powdering changes the chemical composition of the reactant'
              ],
              correctIndex: 1,
              explanation: 'Greater exposed surface area provides more contact sites between reacting molecules, increasing the collision frequency.'
            },
            {
              question: 'For the chemical reaction H₂ + Br₂ → 2HBr, how does the rate of consumption of Br₂ compare to the rate of formation of HBr?',
              options: [
                'HBr is produced at half the rate Br₂ is consumed',
                'HBr is produced at the same rate Br₂ is consumed',
                'HBr is produced at twice the rate that Br₂ is consumed',
                'Br₂ is consumed twice as fast as HBr is produced'
              ],
              correctIndex: 2,
              explanation: 'From stoichiometry: -d[Br₂]/dt = +(1/2) d[HBr]/dt ⟹ d[HBr]/dt = 2 × (consumption rate of Br₂).'
            }
          ]
        },
        {
          id: 'chem-4-2',
          topicNumber: '4.2',
          title: 'Chemical Equilibrium, Constants & Le Chatelier\'s Principle',
          summary: 'Dynamic equilibrium, Kc vs Kp relation Kp = Kc(RT)^Δn, reaction quotient Q, and Le Chatelier shifts.',
          content: `### 4.2 Dynamic Equilibrium & Le Chatelier's Principle

1. Law of Mass Action:
For aA + bB ⇌ cC + dD:
K_c = [C]^c [D]^d / ([A]^a [B]^b)
K_p = (P_C)^c (P_D)^d / ((P_A)^a (P_B)^b) = K_c (R T)^(Δn)   (where Δn = gaseous products - gaseous reactants)

2. Reaction Quotient (Q):
• Q < K: Reaction shifts RIGHT (forward) to produce more products.
• Q = K: System is at dynamic equilibrium.
• Q > K: Reaction shifts LEFT (reverse) to produce more reactants.

3. Le Chatelier's Principle:
When a stress is applied to a system at equilibrium, the system shifts in the direction that relieves the stress:
• Concentration: Adding a reactant shifts equilibrium RIGHT.
• Pressure / Volume (gases): Increasing pressure (decreasing volume) shifts equilibrium toward the side with FEWER gas moles.
• Temperature:
  - For Endothermic (ΔH > 0): Heating shifts RIGHT and INCREASES K.
  - For Exothermic (ΔH < 0): Heating shifts LEFT and DECREASES K.
• Catalyst: Reaches equilibrium faster, but does NOT shift equilibrium position or change K.`,
          workedExamples: [
            {
              problem: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = -92 kJ/mol), what conditions maximize ammonia yield?',
              solution: 'Because the forward reaction is exothermic and reduces gas moles (4 moles gas → 2 moles gas), maximum yield of NH₃ is favored by HIGH pressure and LOW temperature (with Fe catalyst to speed up rate).'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following factors can change the numerical value of the equilibrium constant K?',
              options: ['Change in reactant concentration', 'Change in pressure', 'Addition of a catalyst', 'Change in temperature'],
              correctIndex: 3,
              explanation: 'Only a change in temperature changes the equilibrium constant K. Concentration and pressure shift equilibrium position but keep K constant.'
            },
            {
              question: 'For the reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + Heat, which change will shift the equilibrium to the LEFT?',
              options: ['Increasing the pressure', 'Decreasing the temperature', 'Adding more N₂ gas', 'Increasing the volume of the reaction container'],
              correctIndex: 3,
              explanation: 'Increasing the volume decreases pressure, which shifts equilibrium toward the side with more moles of gas (left, 4 moles vs 2 moles).'
            },
            {
              question: 'If the reaction quotient Q is GREATER than the equilibrium constant K (Q > K), what will happen?',
              options: [
                'The reaction proceeds in the forward direction',
                'The reaction shifts in the reverse direction to form more reactants',
                'The reaction is at dynamic equilibrium',
                'The catalyst will be deactivated'
              ],
              correctIndex: 1,
              explanation: 'When Q > K, there is an excess of products relative to equilibrium, so the system shifts left toward reactants.'
            },
            {
              question: 'In the Contact Process for manufacturing sulfuric acid, what catalyst is used in the oxidation of SO₂ to SO₃?',
              options: ['Iron powder (Fe)', 'Vanadium pentoxide (V₂O₅)', 'Platinum-rhodium gauze', 'Nickel'],
              correctIndex: 1,
              explanation: 'Vanadium pentoxide (V₂O₅) is the heterogeneous catalyst used in the Contact Process at 450°C to oxidize SO₂ to SO₃.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 5,
      title: 'UNIT FIVE: ORGANIC CHEMISTRY',
      description: 'Alkanes, alkenes, alkynes, benzene and aromaticity (Hückel\'s rule), alcohols, carboxylic acids, esters, fats & oils, and saponification.',
      topics: [
        {
          id: 'chem-5-1',
          topicNumber: '5.1',
          title: 'Hydrocarbons: Alkanes, Alkenes, Alkynes & Benzene',
          summary: 'Nomenclature, combustion, addition reactions, Markovnikov\'s rule, Baeyer\'s test, and benzene substitution.',
          content: `### 5.1 Hydrocarbons and Aromatic Compounds

1. Homologous Series:
• Alkanes (C_n H_2n+2): Saturated, sp³ hybridized, undergo free-radical substitution and combustion.
• Alkenes (C_n H_2n): Unsaturated C=C, sp² hybridized, exhibit geometric cis-trans isomerism.
  - Tests for Unsaturation:
    * Baeyer's Test: Decolorizes purple alkaline KMnO₄ to form brown MnO₂ sludge.
    * Bromine Test: Decolorizes orange-red Br₂ in CCl₄ to colorless 1,2-dibromoalkane.
• Alkynes (C_n H_2n-2): Contain C≡C triple bond (one σ and two π bonds), sp hybridized.

2. Benzene & Aromaticity:
• Formula C₆H₆, planar cyclic ring with 6 delocalized π electrons.
• Hückel's Rule: Must contain (4n + 2) π electrons (n = 1 for benzene).
• Highly stable resonance structure; resists addition reactions and readily undergoes Electrophilic Aromatic Substitution:
  - Nitration: C₆H₆ + HNO₃ (conc. H₂SO₄) → Nitrobenzene + H₂O
  - Halogenation: C₆H₆ + Br₂ (FeBr₃ catalyst) → Bromobenzene + HBr`,
          workedExamples: [
            {
              problem: 'How can you experimentally distinguish between cyclohexane (alkane) and cyclohexene (alkene)?',
              solution: 'Add bromine water. Cyclohexene rapidly decolorizes the orange-red bromine solution without light, while saturated cyclohexane shows no reaction in the dark.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following hydrocarbons is an AROMATIC compound that follows Hückel\'s (4n + 2) π rule?',
              options: ['Cyclohexane', 'Benzene (C₆H₆)', 'Ethene', '1,3-Butadiene'],
              correctIndex: 1,
              explanation: 'Benzene is planar, cyclic, completely conjugated with 6 π electrons (4(1) + 2 = 6), meeting Hückel\'s criteria for aromaticity.'
            },
            {
              question: 'What is the reagent used in Baeyer\'s test for detecting unsaturation in organic hydrocarbons?',
              options: [
                'Cold, dilute alkaline potassium permanganate (KMnO₄)',
                'Concentrated sulfuric acid (H₂SO₄)',
                'Tollens\' reagent (ammoniacal AgNO₃)',
                'Anhydrous aluminium chloride (AlCl₃)'
              ],
              correctIndex: 0,
              explanation: 'Baeyer\'s test uses cold alkaline KMnO₄ solution, which oxidizes alkenes into diols while the purple color disappears.'
            },
            {
              question: 'Which of the following lists hydrocarbons in order of INCREASING boiling point?',
              options: [
                'CH₄ < C₂H₆ < C₃H₈ < C₄H₁₀ < C₅H₁₂',
                'C₅H₁₂ < C₄H₁₀ < C₃H₈ < C₂H₆ < CH₄',
                'C₃H₈ < CH₄ < C₂H₆ < C₅H₁₂ < C₄H₁₀',
                'CH₄ < C₅H₁₂ < C₂H₆ < C₃H₈ < C₄H₁₀'
              ],
              correctIndex: 0,
              explanation: 'For non-polar hydrocarbons, London dispersion forces increase with increasing molecular weight, leading to higher boiling points.'
            }
          ]
        },
        {
          id: 'chem-5-2',
          topicNumber: '5.2',
          title: 'Oxygen Derivatives: Alcohols, Carboxylic Acids & Esters',
          summary: 'Classification of alcohols, oxidation products, Fischer esterification, triglycerides, soaps, and detergents.',
          content: `### 5.2 Functional Derivatives, Esters & Saponification

1. Alcohols:
• Primary (1°): Oxidizes to Aldehyde ⟶ Carboxylic Acid.
• Secondary (2°): Oxidizes to Ketone.
• Tertiary (3°): Resistant to oxidation by K₂Cr₂O₇/KMnO₄.

2. Carboxylic Acids (-COOH) & Esters (-COOR):
• Carboxylic acids form strong hydrogen-bonded dimers; boiling point is higher than alcohols of comparable weight.
• Fischer Esterification: Carboxylic acid + Alcohol (acid catalyst H₂SO₄) ⇌ Ester + H₂O.
  - e.g. Ethanoic acid + Ethanol ⇌ Ethyl ethanoate + H₂O (pleasant fruity aroma).

3. Fats, Oils & Saponification:
• Fats (solids) and oils (liquids) are triglycerides (triesters of glycerol and 3 fatty acids).
• Saponification: Alkaline hydrolysis of triglycerides with NaOH or KOH:
  Triglyceride + 3 NaOH → Glycerol + 3 Sodium Carboxylate (Soap).
• Micelles: Soap molecules possess a non-polar hydrophobic hydrocarbon tail that dissolves grease and a polar hydrophilic carboxylate head that dissolves in water.`,
          workedExamples: [
            {
              problem: 'What reactants are required to synthesize ethyl butanoate?',
              solution: 'Ethyl butanoate is an ester formed from ethanol (CH₃CH₂OH) and butanoic acid (CH₃CH₂CH₂COOH) via acid-catalyzed esterification.'
            }
          ],
          practiceQuestions: [
            {
              question: 'A secondary alcohol upon oxidation by potassium dichromate (K₂Cr₂O₇) yields:',
              options: ['An aldehyde', 'A carboxylic acid', 'A ketone', 'An alkene'],
              correctIndex: 2,
              explanation: 'Secondary alcohols have two alkyl groups attached to the carbinol carbon; oxidation removes two hydrogens to form a ketone.'
            },
            {
              question: 'Which of the following compounds reacts to form ethyl ethanoate during Fischer esterification?',
              options: [
                'Ethanol and Ethanoic acid',
                'Methanol and Ethanoic acid',
                'Ethanol and Butanoic acid',
                'Methanol and Propanoic acid'
              ],
              correctIndex: 0,
              explanation: 'Ethyl ethanoate is formed from the condensation of ethanol and ethanoic acid in the presence of an acid catalyst.'
            },
            {
              question: 'Why are synthetic detergents preferred over traditional soap in hard water?',
              options: [
                'Detergents are cheaper to produce',
                'The sulfonate group of detergents does not form insoluble precipitates with Ca²⁺ and Mg²⁺ ions',
                'Detergents are made from natural animal fats',
                'Soap does not lather in pure distilled water'
              ],
              correctIndex: 1,
              explanation: 'Soap forms insoluble scum with calcium and magnesium ions in hard water, whereas synthetic detergents remain soluble and effective.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 6,
      title: 'UNIT SIX: ACID-BASE EQUILIBRIA',
      description: 'Arrhenius, Brønsted-Lowry, and Lewis acid-base theories, auto-ionization of water, pH/pOH calculations, common ion effect, buffer solutions, Henderson-Hasselbalch equation, and acid-base titrations with indicators.',
      topics: [
        {
          id: 'chem-6-1',
          topicNumber: '6.1',
          title: 'Acid-Base Concepts, Auto-Ionization & pH Calculations',
          summary: 'Arrhenius, Brønsted proton donors/acceptors, conjugate acid-base pairs, Lewis electron pairs, Kw = 1.0x10^-14, and pH scales.',
          content: `### 6.1 Theories of Acids and Bases

1. Three Modern Definitions:
• Arrhenius: Acid yields H⁺ (H₃O⁺) in water; Base yields OH⁻ in water. (Limited to aqueous solutions).
• Brønsted-Lowry: Acid is a proton (H⁺) donor; Base is a proton acceptor.
  - Conjugate Acid-Base Pairs: Differ by exactly one H⁺ ion. (e.g. NH₃/NH₄⁺, H₂O/OH⁻, CH₃COOH/CH₃COO⁻).
• Lewis Theory: Acid is an electron-pair ACCEPTOR (vacant orbital, e.g. BF₃, AlCl₃, Fe³⁺, H⁺); Base is an electron-pair DONOR (has lone pair, e.g. NH₃, H₂O, F⁻).

2. Auto-Ionization of Water:
2 H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)
K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴  at 25°C
• pH = -log[H₃O⁺],  pOH = -log[OH⁻],  pH + pOH = 14.00.
• Neutral Solution: pH = 7.0 ([H₃O⁺] = [OH⁻]).
• Acidic Solution: pH < 7.0 ([H₃O⁺] > 10⁻⁷ M).
• Basic Solution: pH > 7.0 ([OH⁻] > 10⁻⁷ M).`,
          workedExamples: [
            {
              problem: 'Calculate the pH of a 0.050 M solution of Ca(OH)₂.',
              solution: 'Ca(OH)₂ completely dissociates: [OH⁻] = 2 × 0.050 M = 0.10 M. pOH = -log(0.10) = 1.00. pH = 14.00 - 1.00 = 13.00.'
            }
          ],
          practiceQuestions: [
            {
              question: 'According to the Brønsted-Lowry definition, an acid is defined as a:',
              options: ['Proton (H⁺) donor', 'Proton (H⁺) acceptor', 'Electron-pair donor', 'Hydroxide ion generator only'],
              correctIndex: 0,
              explanation: 'Brønsted-Lowry defines acids as proton donors and bases as proton acceptors.'
            },
            {
              question: 'In the reaction: HF + H₂O ⇌ H₃O⁺ + F⁻, which pair represents a conjugate acid-base pair?',
              options: ['HF and H₂O', 'H₂O and F⁻', 'HF (acid) and F⁻ (conjugate base)', 'H₃O⁺ and HF'],
              correctIndex: 2,
              explanation: 'HF loses a proton to become F⁻; thus HF is the acid and F⁻ is its conjugate base.'
            },
            {
              question: 'Which of the following chemical species acts as a LEWIS ACID?',
              options: ['NH₃', 'H₂O', 'BF₃', 'Cl⁻'],
              correctIndex: 2,
              explanation: 'Boron in BF₃ has an incomplete octet (6 valence electrons) and a vacant p orbital that accepts an electron pair, classifying it as a Lewis acid.'
            }
          ]
        },
        {
          id: 'chem-6-2',
          topicNumber: '6.2',
          title: 'Buffer Solutions, Common Ion Effect & Titrations',
          summary: 'Common ion suppression, buffer capacity, Henderson-Hasselbalch pH = pKa + log([A-]/[HA]), and titration curves.',
          content: `### 6.2 Buffers, Salt Hydrolysis & Titrations

1. Common Ion Effect & Buffers:
• Common Ion Effect: Shifting of ionic equilibrium caused by addition of a salt containing an ion already present.
• Buffer Solution: Resists changes in pH upon addition of small amounts of strong acid or base.
  - Acidic Buffer: Weak acid + its conjugate salt (e.g. CH₃COOH / CH₃COONa).
  - Basic Buffer: Weak base + its conjugate salt (e.g. NH₃ / NH₄Cl).
• Henderson-Hasselbalch Equation:
  pH = pK_a + log([Conjugate Base] / [Weak Acid])
• Maximum buffer capacity occurs when [Base] = [Acid], where pH = pK_a.

2. Acid-Base Titrations & Equivalence Points:
• Strong Acid + Strong Base: Equivalence pH = 7.00 (Neutral, indicator: Bromothymol Blue or Phenolphthalein).
• Weak Acid + Strong Base: Equivalence pH > 7.00 (Basic, indicator: Phenolphthalein).
• Strong Acid + Weak Base: Equivalence pH < 7.00 (Acidic, indicator: Methyl Orange).`,
          workedExamples: [
            {
              problem: 'Calculate the pH of a buffer solution containing 0.10 M CH₃COOH and 0.20 M CH₃COONa (K_a = 1.8 × 10⁻⁵, pK_a = 4.74).',
              solution: 'pH = pK_a + log([A⁻]/[HA]) = 4.74 + log(0.20 / 0.10) = 4.74 + log(2) = 4.74 + 0.30 = 5.04.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following combinations CANNOT produce a functional buffer solution?',
              options: [
                'HNO₂ and NaNO₂',
                'HCN and NaCN',
                'HClO₄ and NaClO₄',
                'NH₃ and NH₄Cl'
              ],
              correctIndex: 2,
              explanation: 'HClO₄ is a strong acid and NaClO₄ is its salt. Buffers require a WEAK acid and its conjugate salt; strong acids cannot form buffers.'
            },
            {
              question: 'At the equivalence point of a titration between a strong acid (HCl) and a weak base (NH₃), the resulting solution has a pH:',
              options: ['Equal to 7', 'Greater than 7', 'Less than 7 (acidic)', 'Zero'],
              correctIndex: 2,
              explanation: 'Neutralization produces NH₄Cl. The ammonium cation (NH₄⁺) undergoes cationic hydrolysis to release H₃O⁺, making the solution acidic (pH < 7).'
            },
            {
              question: 'What is the suitable indicator for titrating a weak acid (e.g. CH₃COOH) with a strong base (e.g. NaOH)?',
              options: ['Methyl orange', 'Phenolphthalein', 'Methyl red', 'Litmus paper'],
              correctIndex: 1,
              explanation: 'The equivalence point for a weak acid-strong base titration occurs at a basic pH (pH 8-10), perfectly matching the transition range of phenolphthalein (8.2 - 10.0).'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 7,
      title: 'UNIT SEVEN: ELECTROCHEMISTRY',
      description: 'Galvanic vs electrolytic cells, standard electrode potentials, Nernst equation, Faraday\'s laws of electrolysis, commercial batteries, fuel cells, and corrosion prevention.',
      topics: [
        {
          id: 'chem-7-1',
          topicNumber: '7.1',
          title: 'Galvanic Cells, Cell Potentials & Faraday\'s Laws',
          summary: 'Anode oxidation vs cathode reduction, E°cell = E°cathode - E°anode, Nernst equation, and Faraday m = Z·I·t.',
          content: `### 7.1 Electrochemical Cells & Electrolysis

1. Galvanic vs Electrolytic Cells:
• Galvanic (Voltaic) Cell: Spontaneous chemical redox reaction produces electrical energy (E°_cell > 0, ΔG° < 0).
  - Anode (-): Site of oxidation.
  - Cathode (+): Site of reduction.
  - Electrons flow from Anode to Cathode through external wire.
• Electrolytic Cell: Uses electrical energy to drive non-spontaneous reactions (anode is +, cathode is -).

2. Standard Cell Potential:
E°_cell = E°_cathode - E°_anode
• If E°_cell > 0, the reaction is spontaneous under standard conditions.

3. Faraday's Laws of Electrolysis:
• First Law: Mass of substance deposited m ∝ Q = I · t:
  m = (M · I · t) / (n · F)
  - F = 96,500 C/mol e⁻ (Faraday's constant).
• Second Law: For equal charge passed through different electrolytes, deposited masses are proportional to chemical equivalents.`,
          workedExamples: [
            {
              problem: 'How many grams of copper (At. mass = 63.5 g/mol) are deposited when a current of 0.50 A passes through a CuSO₄ solution for 30 minutes?',
              solution: 'Cu²⁺ + 2e⁻ → Cu (n = 2). t = 30 × 60 = 1800 s. Q = I · t = 0.50 × 1800 = 900 C. Mass m = (63.5 × 900) / (2 × 96500) = 57150 / 193000 ≈ 0.296 g.'
            }
          ],
          practiceQuestions: [
            {
              question: 'In any electrochemical cell, the ANODE is always defined as the electrode where:',
              options: ['Reduction occurs', 'Oxidation occurs', 'Cations are deposited', 'Electrons enter the solution'],
              correctIndex: 1,
              explanation: 'By international electrochemical definition, oxidation always occurs at the anode (An Ox) and reduction always occurs at the cathode (Red Cat).'
            },
            {
              question: 'What is the function of the salt bridge in a galvanic cell?',
              options: [
                'To supply electrons directly to the external circuit',
                'To maintain electrical neutrality in both half-cell compartments by ion migration',
                'To increase the concentration of metal electrodes',
                'To stop the chemical reaction from proceeding'
              ],
              correctIndex: 1,
              explanation: 'A salt bridge allows anions and cations to migrate between half-cells, preventing charge accumulation and maintaining electrical neutrality.'
            },
            {
              question: 'Which of the following metals is commonly used as a SACRIFICIAL ANODE to protect underground iron pipelines from corrosion?',
              options: ['Copper', 'Magnesium or Zinc', 'Silver', 'Gold'],
              correctIndex: 1,
              explanation: 'Magnesium and zinc have more negative reduction potentials (more easily oxidized) than iron, preferentially corroding to protect the iron cathode.'
            },
            {
              question: 'In a lead-acid storage battery, what substance is formed at BOTH the anode and the cathode during discharging?',
              options: ['Lead dioxide (PbO₂)', 'Lead sulfate (PbSO₄)', 'Spongy lead (Pb)', 'Sulfuric acid (H₂SO₄)'],
              correctIndex: 1,
              explanation: 'During discharge, lead at the anode is oxidized to PbSO₄, and PbO₂ at the cathode is reduced to PbSO₄.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 8,
      title: 'UNIT EIGHT: INDUSTRIAL & ENVIRONMENTAL CHEMISTRY AND POLYMERS',
      description: 'Manufacture of ammonia (Haber), nitric acid (Ostwald), sulfuric acid (Contact), glass and cement, greenhouse gases and global warming, addition vs condensation polymers, and plastics.',
      topics: [
        {
          id: 'chem-8-1',
          topicNumber: '8.1',
          title: 'Industrial Chemical Processes & Environmental Sustainability',
          summary: 'Haber process for NH3, Ostwald process for HNO3, Contact process for H2SO4, greenhouse gases, and green chemistry principles.',
          content: `### 8.1 Industrial Chemical Manufacturing & Environmental Chemistry

1. Major Industrial Chemical Processes:
• Ammonia (Haber-Bosch Process):
  N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)   (Iron catalyst + K₂O/Al₂O₃ promoter, 450°C, 200 atm).
• Nitric Acid (Ostwald Process):
  1. Catalytic oxidation: 4 NH₃ + 5 O₂ (Pt-Rh gauze, 900°C) → 4 NO + 6 H₂O
  2. Oxidation: 2 NO + O₂ → 2 NO₂
  3. Absorption: 3 NO₂ + H₂O → 2 HNO₃ + NO
• Sulfuric Acid (Contact Process):
  1. S + O₂ → SO₂
  2. Catalytic oxidation: 2 SO₂ + O₂ (V₂O₅ catalyst, 450°C) ⇌ 2 SO₃
  3. Absorption: SO₃ + H₂SO₄ → H₂S₂O₇ (Oleum);  Oleum + H₂O → 2 H₂SO₄ (98%).

2. Environmental Chemistry & Greenhouse Effect:
• Greenhouse Gases (GHGs): Water vapor (most abundant natural GHG), CO₂ (primary anthropogenic driver ~60%), CH₄ (~20%), N₂O (~6%), and CFCs.
• Green Chemistry & Atom Economy:
  Atom Economy = (Molecular Mass of Desired Product / Total Molecular Mass of all Reactants) × 100%.`,
          workedExamples: [
            {
              problem: 'What is the catalyst used in the first oxidation step of the Ostwald process for nitric acid production?',
              solution: 'A platinum-rhodium (Pt-Rh) gauze sheet catalyst operating at ~850-900°C is used to oxidize ammonia into nitric oxide (NO).'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following is the correct sequence of steps in the manufacture of sulfuric acid by the Contact Process?',
              options: [
                'S → SO₂ → H₂S₂O₇ → H₂SO₄',
                'S → SO₂ → SO₃ → H₂S₂O₇ (Oleum) → H₂SO₄',
                'S → SO₃ → H₂SO₄',
                'SO₂ → SO₃ → H₂SO₄ directly with water'
              ],
              correctIndex: 1,
              explanation: 'Sulfur is burned to SO₂, catalytically oxidized to SO₃ over V₂O₅, absorbed in conc. H₂SO₄ to make oleum (H₂S₂O₇), and safely diluted to 98% H₂SO₄.'
            },
            {
              question: 'Which of the following greenhouse gases has the LARGEST relative contribution to human-induced global warming?',
              options: ['Nitrous oxide (N₂O)', 'Methane (CH₄)', 'Carbon dioxide (CO₂)', 'Chlorofluorocarbons (CFCs)'],
              correctIndex: 2,
              explanation: 'Carbon dioxide (CO₂) accounts for approximately 60% of the enhanced greenhouse warming effect caused by human activities.'
            },
            {
              question: 'Which of the following is a natural polymer?',
              options: ['PVC', 'Polyethene', 'Cellulose', 'Teflon'],
              correctIndex: 2,
              explanation: 'Cellulose is a naturally occurring biopolymer made of repeating β-glucose monomers found in plant cell walls.'
            },
            {
              question: 'What is the monomer unit of natural rubber?',
              options: ['Isoprene (2-methyl-1,3-butadiene)', 'Ethene', 'Propene', 'Chloroprene'],
              correctIndex: 0,
              explanation: 'Natural rubber is a polymer of isoprene (cis-1,4-polyisoprene).'
            },
            {
              question: 'Nylon-6,6 is classified as which type of polymer based on its synthesis mechanism?',
              options: [
                'Addition polymer',
                'Condensation polymer (polyamide) formed with elimination of water',
                'Natural biopolymer',
                'Inorganic network polymer'
              ],
              correctIndex: 1,
              explanation: 'Nylon-6,6 is a condensation polyamide produced from hexamethylenediamine and adipic acid with the elimination of water molecules.'
            }
          ]
        }
      ]
    }
  ]
};
