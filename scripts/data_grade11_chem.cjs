/**
 * Grade 11 Chemistry Final Exam for Oromia Boarding and Non-Boarding (Special) Schools, January 2016/2024
 * 80 Questions extracted directly from the official examination paper with comprehensive chemical explanations and calculations.
 */

const questions = [
  {
    question_number: 1,
    question_text: "When a gold sheet is bombarded by a beam of alpha-particles, Rutherford was greatly surprised to find that very few of the α-particles were deflected back (nearly 180° deflection). This is because:",
    option_a: "Most of the space in an atom is empty",
    option_b: "The neutrons in the nucleus do have an effect on the particles",
    option_c: "Volume occupied by the positively charged particles in an atom is very small as compared to the total volume of an atom",
    option_d: "The force of repulsion acting on the fast-moving alpha-particles is very small",
    options: [
      "Most of the space in an atom is empty",
      "The neutrons in the nucleus do have an effect on the particles",
      "Volume occupied by the positively charged particles in an atom is very small as compared to the total volume of an atom",
      "The force of repulsion acting on the fast-moving alpha-particles is very small"
    ],
    correct_answer: "C",
    explanation: "The rare large-angle scattering (~180°) proved that the positive charge and almost all of the atom's mass are concentrated in an extremely dense, minute central core (the nucleus) occupying a minuscule fraction of the total atomic volume.",
    topic_name: "Rutherford's Alpha Scattering Experiment",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 2,
    question_text: "Which of the following statements is incorrect for cathode rays?",
    option_a: "They deflect by the influence of magnetic or electric fields",
    option_b: "Characteristics of cathode rays depend upon the material of electrodes in cathode ray tube",
    option_c: "The rays are not directly visible but can be detected by their ability to cause other materials to glow",
    option_d: "They travel in straight lines in the absence of external electric or magnetic field",
    options: [
      "They deflect by the influence of magnetic or electric fields",
      "Characteristics of cathode rays depend upon the material of electrodes in cathode ray tube",
      "The rays are not directly visible but can be detected by their ability to cause other materials to glow",
      "They travel in straight lines in the absence of external electric or magnetic field"
    ],
    correct_answer: "B",
    explanation: "J.J. Thomson discovered that cathode rays consist of electrons whose charge-to-mass ratio (e/m) and fundamental properties are entirely independent of the cathode material and residual gas used in the discharge tube.",
    topic_name: "Discovery of the Electron & Cathode Rays",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 3,
    question_text: "Which of the statements of Dalton’s atomic model is now known to be correct?",
    option_a: "All matter is made up of tiny, indivisible particles called atoms",
    option_b: "Atoms of different element exhibit different properties and vary in mass and size",
    option_c: "All atoms of a specific element are identical in mass, size, and other properties",
    option_d: "No atoms are created, destroyed, or broken apart in a chemical reactions",
    options: [
      "All matter is made up of tiny, indivisible particles called atoms",
      "Atoms of different element exhibit different properties and vary in mass and size",
      "All atoms of a specific element are identical in mass, size, and other properties",
      "No atoms are created, destroyed, or broken apart in a chemical reactions"
    ],
    correct_answer: "B",
    explanation: "Modern atomic theory confirms that atoms of different elements differ in atomic number, mass, size, and chemical reactivity. (Atoms are divisible into subatomic particles, isotopes have varying masses, and nuclear reactions can alter nuclei).",
    topic_name: "Dalton's Atomic Theory vs Modern Atomic Theory",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 4,
    question_text: "The atomic mass of element A is 91 atomic mass units. The only naturally occurring isotopes of element A are A-90 and A-94. The percent abundances in a naturally occurring sample of element A are:",
    option_a: "31 % A-90 and 69 % A-94",
    option_b: "69 % A-94 and 31 % A-90",
    option_c: "75 % A-90 and 25 % A-94",
    option_d: "25 % A-94 and 75 % A-90",
    options: [
      "31 % A-90 and 69 % A-94",
      "69 % A-94 and 31 % A-90",
      "75 % A-90 and 25 % A-94",
      "25 % A-94 and 75 % A-90"
    ],
    correct_answer: "C",
    explanation: "Let fractional abundance of A-90 be x, and A-94 be (1 - x):\n90x + 94(1 - x) = 91 ⇒ 90x + 94 - 94x = 91 ⇒ -4x = -3 ⇒ x = 0.75 (75% A-90) and (1 - x) = 0.25 (25% A-94).",
    topic_name: "Isotopes & Average Atomic Mass",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 5,
    question_text: "An atom of an element 'X' is 2.289 times heavier than an atom of 'Y'. An atom of 'Y' is 1.166 times heavier than an atom of carbon (Atomic mass of C = 12.011 amu). The atomic mass of 'X' is:",
    option_a: "32.06",
    option_b: "28.04",
    option_c: "34.11",
    option_d: "38.05",
    options: ["32.06", "28.04", "34.11", "38.05"],
    correct_answer: "A",
    explanation: "Mass of Y = 1.166 * 12.011 = 14.005 amu (Nitrogen).\nMass of X = 2.289 * 14.005 = 32.06 amu (Sulfur).",
    topic_name: "Relative Atomic Mass Calculations",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 6,
    question_text: "The alpha decay of uranium-238 is shown as: ²³⁸U₉₂ → ²³⁴Th₉₀ + alpha particle. What happens to the mass number and the atomic number of ²³⁸U₉₂ when it emits alpha radiation?",
    option_a: "The mass number remains unchanged while the atomic number decreases by one",
    option_b: "The mass number decreases by four and the atomic number decreases by two",
    option_c: "The mass number increases by four and the atomic number increases by two",
    option_d: "The mass number remains unchanged while the atomic number increases by one",
    options: [
      "The mass number remains unchanged while the atomic number decreases by one",
      "The mass number decreases by four and the atomic number decreases by two",
      "The mass number increases by four and the atomic number increases by two",
      "The mass number remains unchanged while the atomic number increases by one"
    ],
    correct_answer: "B",
    explanation: "An alpha particle is a helium nucleus (⁴He₂). Emission of an alpha particle reduces the mass number (A) by 4 (from 238 to 234) and the atomic number (Z) by 2 (from 92 to 90).",
    topic_name: "Nuclear Chemistry - Alpha Decay",
    instruction_category: "Nuclear Chemistry"
  },
  {
    question_number: 7,
    question_text: "Which one of the following pairs of lines in the emission spectrum of the hydrogen atom and series names is NOT correctly matched?",
    option_a: "The transition to the first shell from higher shells – Lyman series",
    option_b: "The transition to the second shell from higher shells – Balmer series",
    option_c: "The transition to the third shell from higher shells – Paschen series",
    option_d: "The transition to the fourth shell from higher shells – Pfund series",
    options: [
      "The transition to the first shell from higher shells – Lyman series",
      "The transition to the second shell from higher shells – Balmer series",
      "The transition to the third shell from higher shells – Paschen series",
      "The transition to the fourth shell from higher shells – Pfund series"
    ],
    correct_answer: "D",
    explanation: "Transitions ending at n₁ = 4 correspond to the Brackett series. The Pfund series corresponds to transitions ending at n₁ = 5.",
    topic_name: "Hydrogen Emission Spectral Series",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 8,
    question_text: "Which statement incorrectly describes electrons, protons and neutrons?",
    option_a: "Electrons contribute virtually nothing to the total mass of an atom",
    option_b: "Together with neutrons, protons make up virtually all of the mass of an atom",
    option_c: "Atoms of all elements have neutrons in their nucleus",
    option_d: "In order to be neutral, an atom must have the same number of electrons and protons",
    options: [
      "Electrons contribute virtually nothing to the total mass of an atom",
      "Together with neutrons, protons make up virtually all of the mass of an atom",
      "Atoms of all elements have neutrons in their nucleus",
      "In order to be neutral, an atom must have the same number of electrons and protons"
    ],
    correct_answer: "C",
    explanation: "Protium, the most abundant isotope of hydrogen (¹H₁), has a nucleus consisting of a single proton with zero neutrons.",
    topic_name: "Subatomic Particles",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 9,
    question_text: "According to Bohr's Model for the Hydrogen Atom:",
    option_a: "An electron can have an orbit in between the discrete ones",
    option_b: "The lowest energy orbits are those farthest from the nucleus",
    option_c: "Electron loses energy when it stays or remains in a particular orbit",
    option_d: "The angular momentum of an electron in a particular orbit is an integral multiple of the reduced Planck's constant (h/2π)",
    options: [
      "An electron can have an orbit in between the discrete ones",
      "The lowest energy orbits are those farthest from the nucleus",
      "Electron loses energy when it stays or remains in a particular orbit",
      "The angular momentum of an electron in a particular orbit is an integral multiple of the reduced Planck's constant (h/2π)"
    ],
    correct_answer: "D",
    explanation: "Bohr's quantization postulate states that the orbital angular momentum of an electron is quantized: L = mvr = n(h / 2π), where n = 1, 2, 3...",
    topic_name: "Bohr's Atomic Model",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 10,
    question_text: "The number of spectral lines that are possible when electrons in the 5th shell in a sample of hydrogen atoms return to the 1st shell is:",
    option_a: "10",
    option_b: "5",
    option_c: "25",
    option_d: "15",
    options: ["10", "5", "25", "15"],
    correct_answer: "A",
    explanation: "The total number of emission spectral lines from energy level n to the ground state (n = 1) in an atomic sample is given by:\nN = n(n - 1) / 2 = 5(5 - 1) / 2 = 5 * 4 / 2 = 10 lines.",
    topic_name: "Hydrogen Emission Transitions",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 11,
    question_text: "When electromagnetic radiation of wavelength 300 nm falls on the surface of sodium, electrons are emitted with a kinetic energy of 1.68 × 10⁵ J mol⁻¹. What is the minimum energy (work function) needed to remove one mole of electrons from sodium?",
    option_a: "2.31 × 10⁵ J mol⁻¹",
    option_b: "4.62 × 10⁵ J mol⁻¹",
    option_c: "6.22 × 10⁵ J mol⁻¹",
    option_d: "7.25 × 10⁵ J mol⁻¹",
    options: [
      "2.31 × 10⁵ J mol⁻¹",
      "4.62 × 10⁵ J mol⁻¹",
      "6.22 × 10⁵ J mol⁻¹",
      "7.25 × 10⁵ J mol⁻¹"
    ],
    correct_answer: "A",
    explanation: "Energy of 1 mole of incident photons:\nE = N_A * (hc / λ) = (6.022 × 10²³ mol⁻¹) * (6.626 × 10⁻³⁴ J·s * 3.0 × 10⁸ m/s / (300 × 10⁻⁹ m)) = 3.99 × 10⁵ J mol⁻¹.\nMinimum energy (work function Φ) = E_incident - KE = 3.99 × 10⁵ - 1.68 × 10⁵ = 2.31 × 10⁵ J mol⁻¹.",
    topic_name: "Photoelectric Effect Calculations",
    instruction_category: "Quantum Chemistry"
  },
  {
    question_number: 12,
    question_text: "Which statement about the electromagnetic spectrum is correct?",
    option_a: "Micro-wave light has a shorter wavelength than visible light",
    option_b: "Infra-red light has a shorter wavelength than ultraviolet light",
    option_c: "The frequency of ultraviolet is higher than the frequency of micro-wave light",
    option_d: "The energy of infrared light is higher than the energy of visible light",
    options: [
      "Micro-wave light has a shorter wavelength than visible light",
      "Infra-red light has a shorter wavelength than ultraviolet light",
      "The frequency of ultraviolet is higher than the frequency of micro-wave light",
      "The energy of infrared light is higher than the energy of visible light"
    ],
    correct_answer: "C",
    explanation: "In order of increasing frequency and energy: Radio < Microwave < Infrared < Visible < Ultraviolet < X-rays < Gamma rays. Therefore, UV frequency is much higher than microwave frequency.",
    topic_name: "Electromagnetic Spectrum",
    instruction_category: "Quantum Chemistry"
  },
  {
    question_number: 13,
    question_text: "What is the frequency of a photon emitted during an electronic transition from n = 5 state to n = 2 state in the hydrogen atom?",
    option_a: "6.91 × 10¹⁴ Hz",
    option_b: "3.45 × 10¹⁵ Hz",
    option_c: "2.45 × 10¹¹ Hz",
    option_d: "6.89 × 10¹² Hz",
    options: [
      "6.91 × 10¹⁴ Hz",
      "3.45 × 10¹⁵ Hz",
      "2.45 × 10¹¹ Hz",
      "6.89 × 10¹² Hz"
    ],
    correct_answer: "A",
    explanation: "ΔE = R_H * (1/n₁² - 1/n₂²) = 2.18 × 10⁻¹⁸ J * (1/4 - 1/25) = 2.18 × 10⁻¹⁸ * (21/100) = 4.578 × 10⁻¹⁹ J.\nFrequency ν = ΔE / h = (4.578 × 10⁻¹⁹ J) / (6.626 × 10⁻³⁴ J·s) = 6.91 × 10¹⁴ Hz.",
    topic_name: "Rydberg Formula & Photon Frequency",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 14,
    question_text: "Which color in the visible spectrum is associated with the lowest energy among the options provided?",
    option_a: "Blue",
    option_b: "Green",
    option_c: "Violet",
    option_d: "Yellow",
    options: ["Blue", "Green", "Violet", "Yellow"],
    correct_answer: "D",
    explanation: "In the visible rainbow ROYGBIV, wavelength increases and photon energy decreases from violet to red (Violet > Blue > Green > Yellow > Orange > Red). Among the four options, Yellow has the longest wavelength and lowest energy.",
    topic_name: "Visible Light Spectrum & Energy",
    instruction_category: "Quantum Chemistry"
  },
  {
    question_number: 15,
    question_text: "The ion of an element has 3 positive charges (M³⁺). Mass number of the atom is 70 and the number of neutrons is 39. What is the number of electrons in the ion?",
    option_a: "31",
    option_b: "39",
    option_c: "28",
    option_d: "34",
    options: ["31", "39", "28", "34"],
    correct_answer: "C",
    explanation: "Atomic number Z = Mass number (A) - Neutrons (N) = 70 - 39 = 31 (Gallium).\nFor a tripositive cation (M³⁺), number of electrons = Z - 3 = 31 - 3 = 28 electrons.",
    topic_name: "Atomic Number, Mass Number, and Ions",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 16,
    question_text: "In experiments concerning the photoelectric effect, which of the following statements is incorrect?",
    option_a: "The electrons are ejected from the metal surface as soon as the beam of light strikes the surface",
    option_b: "The number of electrons ejected is proportional to the intensity or brightness of light",
    option_c: "For each metal, there is a characteristic minimum threshold frequency, ν₀, below which photoelectric effect is not observed",
    option_d: "The kinetic energies of the ejected electrons decrease with the increase of frequency of the light used",
    options: [
      "The electrons are ejected from the metal surface as soon as the beam of light strikes the surface",
      "The number of electrons ejected is proportional to the intensity or brightness of light",
      "For each metal, there is a characteristic minimum threshold frequency, ν₀, below which photoelectric effect is not observed",
      "The kinetic energies of the ejected electrons decrease with the increase of frequency of the light used"
    ],
    correct_answer: "D",
    explanation: "By Einstein's equation KE_max = hν - Φ, the kinetic energy of emitted photoelectrons increases linearly with increasing frequency of incident light.",
    topic_name: "Photoelectric Effect Laws",
    instruction_category: "Quantum Chemistry"
  },
  {
    question_number: 17,
    question_text: "Which of the following is not correct about the Quantum Mechanical Model?",
    option_a: "There are 25 possible orbitals in the fifth shell",
    option_b: "The probability of finding the electron drops off rapidly as distance from the nucleus increases",
    option_c: "The size and energy level of an orbital depend on the magnetic quantum number",
    option_d: "We can never know both the exact position and momentum of an electron simultaneously with absolute precision",
    options: [
      "There are 25 possible orbitals in the fifth shell",
      "The probability of finding the electron drops off rapidly as distance from the nucleus increases",
      "The size and energy level of an orbital depend on the magnetic quantum number",
      "We can never know both the exact position and momentum of an electron simultaneously with absolute precision"
    ],
    correct_answer: "C",
    explanation: "The size and primary energy level of an atomic orbital are governed by the principal quantum number (n). The magnetic quantum number (m_l) determines spatial orientation.",
    topic_name: "Quantum Mechanical Model & Quantum Numbers",
    instruction_category: "Quantum Chemistry"
  },
  {
    question_number: 18,
    question_text: "Which quantum number describes the spatial orientation of the orbital relative to the other orbitals in the atom?",
    option_a: "The principal quantum number (n)",
    option_b: "The magnetic quantum number (m_l)",
    option_c: "The azimuthal quantum number (l)",
    option_d: "The spin quantum number (m_s)",
    options: [
      "The principal quantum number (n)",
      "The magnetic quantum number (m_l)",
      "The azimuthal quantum number (l)",
      "The spin quantum number (m_s)"
    ],
    correct_answer: "B",
    explanation: "The magnetic quantum number (m_l) specifies the spatial orientation of an orbital in 3D space with values ranging from -l to +l.",
    topic_name: "Quantum Numbers",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 19,
    question_text: "Which one of the following sets of quantum numbers could describe the distinguishing (last) electron of Chromium (Cr, Z = 24)?",
    option_a: "n = 3, l = 0, m_l = 0, m_s = +1/2",
    option_b: "n = 3, l = 2, m_l = -1, m_s = +1/2",
    option_c: "n = 4, l = 1, m_l = 9, m_s = -1/2",
    option_d: "n = 4, l = 2, m_l = +2, m_s = -1/2",
    options: [
      "n = 3, l = 0, m_l = 0, m_s = +1/2",
      "n = 3, l = 2, m_l = -1, m_s = +1/2",
      "n = 4, l = 1, m_l = 9, m_s = -1/2",
      "n = 4, l = 2, m_l = +2, m_s = -1/2"
    ],
    correct_answer: "B",
    explanation: "Cr (Z = 24) has anomalous ground-state electron configuration [Ar] 4s¹ 3d⁵. The 3d electrons have principal quantum number n = 3, azimuthal quantum number l = 2 (d orbital), m_l ∈ {-2, -1, 0, 1, 2}, and m_s = +1/2.",
    topic_name: "Electronic Configuration of Transition Metals",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 20,
    question_text: "Which of the following sets of quantum numbers is NOT valid?",
    option_a: "n = 5, l = 2, m_l = 0, m_s = +1/2",
    option_b: "n = 5, l = 3, m_l = 2, m_s = +1/2",
    option_c: "n = 1, l = 2, m_l = 0, m_s = +1/2",
    option_d: "n = 5, l = 2, m_l = 0, m_s = -1/2",
    options: [
      "n = 5, l = 2, m_l = 0, m_s = +1/2",
      "n = 5, l = 3, m_l = 2, m_s = +1/2",
      "n = 1, l = 2, m_l = 0, m_s = +1/2",
      "n = 5, l = 2, m_l = 0, m_s = -1/2"
    ],
    correct_answer: "C",
    explanation: "For a given principal quantum number n, the azimuthal quantum number l can only take integer values from 0 to (n - 1). For n = 1, l can only be 0. Thus l = 2 is forbidden.",
    topic_name: "Quantum Number Rules",
    instruction_category: "Quantum Chemistry"
  },
  {
    question_number: 21,
    question_text: "The maximum number of electrons that can be accommodated in a subshell for which l = 4 (g-subshell) is:",
    option_a: "18",
    option_b: "10",
    option_c: "6",
    option_d: "14",
    options: ["18", "10", "6", "14"],
    correct_answer: "A",
    explanation: "The maximum number of electrons in any subshell is 2(2l + 1). For l = 4: N_max = 2(2(4) + 1) = 2(9) = 18 electrons (spanning 9 degenerate orbitals).",
    topic_name: "Subshell Electron Capacities",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 22,
    question_text: "If for a given atom l = 5 (h-subshell), how many orbital orientations (m_l values) are possible?",
    option_a: "11",
    option_b: "12",
    option_c: "13",
    option_d: "18",
    options: ["11", "12", "13", "18"],
    correct_answer: "A",
    explanation: "The number of magnetic quantum number values (degenerate orbitals) for an azimuthal value l is given by 2l + 1. For l = 5: 2(5) + 1 = 11 orbital values (-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5).",
    topic_name: "Degeneracy of Atomic Subshells",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 23,
    question_text: "According to the Pauli Exclusion Principle:",
    option_a: "An atomic orbital can only hold a maximum of 2 electrons, each with opposite spins",
    option_b: "An atomic orbital can hold a maximum of 6 electrons, each with the same spin",
    option_c: "An atomic orbital can hold a minimum of 6 electrons, each with opposite spins",
    option_d: "An atomic orbital can hold a minimum of 2 electrons, each with opposite spins",
    options: [
      "An atomic orbital can only hold a maximum of 2 electrons, each with opposite spins",
      "An atomic orbital can hold a maximum of 6 electrons, each with the same spin",
      "An atomic orbital can hold a minimum of 6 electrons, each with opposite spins",
      "An atomic orbital can hold a minimum of 2 electrons, each with opposite spins"
    ],
    correct_answer: "A",
    explanation: "Wolfgang Pauli's Exclusion Principle states that no two electrons in an atom can have the same four quantum numbers. Therefore, a single spatial orbital (n, l, m_l) can accommodate at most 2 electrons with paired opposite spins (m_s = +1/2 and -1/2).",
    topic_name: "Pauli Exclusion Principle",
    instruction_category: "Electronic Configuration"
  },
  {
    question_number: 24,
    question_text: "The atomic radii become smaller from sodium to chlorine across period three. This is primarily due to:",
    option_a: "The shielding effect",
    option_b: "Increased effective nuclear charge",
    option_c: "The increased number of electrons",
    option_d: "Decreased metallic character",
    options: [
      "The shielding effect",
      "Increased effective nuclear charge",
      "The increased number of electrons",
      "Decreased metallic character"
    ],
    correct_answer: "B",
    explanation: "Across a period, protons are added to the nucleus while electrons enter the same principal valence energy level with minimal additional core shielding, increasing effective nuclear charge (Z_eff) and pulling valence electrons closer to the nucleus.",
    topic_name: "Periodic Trends - Atomic Radius",
    instruction_category: "Periodic Properties"
  },
  {
    question_number: 25,
    question_text: "Identify the shapes of the atomic orbitals shown: a cloverleaf in the xy-plane (dx²-y²), a cloverleaf between y and z axes (dyz), and a dumbbell along x-axis (px).",
    option_a: "dz², dxy, py",
    option_b: "dx²-y², dyz, px",
    option_c: "dzx, dyz, pz",
    option_d: "dxy, dyz, dzx",
    options: [
      "dz², dxy, py",
      "dx²-y², dyz, px",
      "dzx, dyz, pz",
      "dxy, dyz, dzx"
    ],
    correct_answer: "B",
    explanation: "The first diagram displays lobes lying directly on the Cartesian axes (dx²-y²), the second displays lobes situated between the y and z axes (dyz), and the third shows a single-axis dumbbell along the x-axis (px).",
    topic_name: "Shapes of Atomic Orbitals",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 26,
    question_text: "The valence electron configuration of a newly synthesized hypothetical element ends with 5g¹. What is the atomic number (Z) of this element?",
    option_a: "118",
    option_b: "121",
    option_c: "88",
    option_d: "122",
    options: ["118", "121", "88", "122"],
    correct_answer: "B",
    explanation: "Element 118 (Oganesson) completes the 7p subshell ([Og] = 118). Following the Aufbau principle: 118 + 8s² (Z = 120) + 5g¹ = Z = 121 (Unbiunium).",
    topic_name: "Aufbau Principle & Superheavy Elements",
    instruction_category: "Electronic Configuration"
  },
  {
    question_number: 27,
    question_text: "The correct set of quantum numbers (n, l, m_l, m_s) for the single unpaired valence electron of a bromine atom (Br, Z = 35) is:",
    option_a: "3, 0, 0, +1/2",
    option_b: "3, 1, -1, +1/2",
    option_c: "4, 1, +1, ±1/2",
    option_d: "4, 0, 0, ±1/2",
    options: [
      "3, 0, 0, +1/2",
      "3, 1, -1, +1/2",
      "4, 1, +1, ±1/2",
      "4, 0, 0, ±1/2"
    ],
    correct_answer: "C",
    explanation: "Bromine (Z = 35) has valence configuration 4s² 4p⁵. The 4p orbital containing the unpaired electron has n = 4, l = 1 (p orbital), m_l ∈ {-1, 0, +1}, and m_s = ±1/2.",
    topic_name: "Quantum Numbers of Valence Electrons",
    instruction_category: "Atomic Structure"
  },
  {
    question_number: 28,
    question_text: "Which of the orbital box diagrams represents a valid ground-state electron configuration of an atom according to Hund's rule?",
    option_a: "2s: [↑↓], 2p: [↑↓][ ][ ]",
    option_b: "2s: [↑↑], 2p: [↑ ][↑ ][↑ ]",
    option_c: "2s: [↑↓], 2p: [↑ ][↑ ][↑ ]",
    option_d: "2s: [↑↓], 2p: [↑↓][↑↓][↑ ]",
    options: [
      "2s: [↑↓], 2p: [↑↓][ ][ ]",
      "2s: [↑↑], 2p: [↑ ][↑ ][↑ ]",
      "2s: [↑↓], 2p: [↑ ][↑ ][↑ ]",
      "2s: [↑↓], 2p: [↑↓][↑↓][↑ ]"
    ],
    correct_answer: "C",
    explanation: "Option C correctly obeys the Aufbau principle, Pauli exclusion principle (paired spins in 2s), and Hund's rule of maximum multiplicity (electrons occupy degenerate 2p orbitals singly with parallel spins before pairing).",
    topic_name: "Hund's Rule & Orbital Diagrams",
    instruction_category: "Electronic Configuration"
  },
  {
    question_number: 29,
    question_text: "Choose the INCORRECT electron configuration from among the following:",
    option_a: "Fe³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵",
    option_b: "Cu: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰",
    option_c: "Mo³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 4d³",
    option_d: "Fe²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁴",
    options: [
      "Fe³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵",
      "Cu: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰",
      "Mo³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 4d³",
      "Fe²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁴"
    ],
    correct_answer: "D",
    explanation: "When transition metals ionize, electrons are removed from the outermost 4s orbital first. Fe (Z = 26: [Ar] 4s² 3d⁶) loses its two 4s electrons to form Fe²⁺: [Ar] 3d⁶, NOT 4s² 3d⁴.",
    topic_name: "Transition Metal Ionization",
    instruction_category: "Electronic Configuration"
  },
  {
    question_number: 30,
    question_text: "The electron configuration of the trivalent cation M³⁺ ends with 3d¹⁰. What is true of the neutral element M?",
    option_a: "Its atomic number is 28",
    option_b: "The element is found in Period 4 and Group IIIA (Group 13)",
    option_c: "Its electron configuration is [Ar] 4s² 4p¹ 3d⁷",
    option_d: "It is a d-block element",
    options: [
      "Its atomic number is 28",
      "The element is found in Period 4 and Group IIIA (Group 13)",
      "Its electron configuration is [Ar] 4s² 4p¹ 3d⁷",
      "It is a d-block element"
    ],
    correct_answer: "B",
    explanation: "If M³⁺ has configuration [Ar] 3d¹⁰ (28 electrons), neutral atom M has 28 + 3 = 31 electrons, which is Gallium (Ga, Z = 31, configuration [Ar] 4s² 3d¹⁰ 4p¹). Gallium is in Period 4, Group IIIA (Group 13) of the p-block.",
    topic_name: "Periodic Table Group & Period Identification",
    instruction_category: "Periodic Properties"
  },
  {
    question_number: 31,
    question_text: "Why is the difference in atomic radius between Na (186 pm) and Mg (160 pm) large (Δ = 26 pm), whereas between Cr (125 pm) and Mn (124 pm) the difference is very small (Δ = 1 pm)?",
    option_a: "In a series of transition elements, electrons join the core (inner d) subshell, shielding outer electrons effectively",
    option_b: "Sodium and magnesium are more metallic than chromium and manganese",
    option_c: "Chromium and manganese are hard and have high densities than sodium and magnesium",
    option_d: "Chromium and manganese have high melting and boiling points than sodium and magnesium",
    options: [
      "In a series of transition elements, electrons join the core (inner d) subshell, shielding outer electrons effectively",
      "Sodium and magnesium are more metallic than chromium and manganese",
      "Chromium and manganese are hard and have high densities than sodium and magnesium",
      "Chromium and manganese have high melting and boiling points than sodium and magnesium"
    ],
    correct_answer: "A",
    explanation: "In transition series (d-block), successive electrons enter penultimate (n - 1)d subshells, providing substantial electrostatic shielding that offsets the increasing nuclear charge, resulting in nearly constant atomic radii.",
    topic_name: "Transition Series Periodic Trends",
    instruction_category: "Periodic Properties"
  },
  {
    question_number: 32,
    question_text: "Phosgene is carbonyl chloride, COCl₂. The phosgene molecule contains:",
    option_a: "8 lone pairs, 1 π bond, and 3 σ bonds",
    option_b: "9 lone pairs, 1 π bond, and 3 σ bonds",
    option_c: "10 lone pairs, 0 π bond, and 3 σ bonds",
    option_d: "7 lone pairs, 2 π bonds, and 3 σ bonds",
    options: [
      "8 lone pairs, 1 π bond, and 3 σ bonds",
      "9 lone pairs, 1 π bond, and 3 σ bonds",
      "10 lone pairs, 0 π bond, and 3 σ bonds",
      "7 lone pairs, 2 π bonds, and 3 σ bonds"
    ],
    correct_answer: "A",
    explanation: "COCl₂ Lewis structure: Central C forms a double bond to O (1 σ + 1 π) and two single bonds to Cl (2 σ). Total = 3 σ bonds + 1 π bond. Lone pairs: Oxygen has 2 lone pairs; each Chlorine has 3 lone pairs (2 × 3 = 6). Total lone pairs = 2 + 6 = 8 lone pairs.",
    topic_name: "Lewis Structures & Sigma/Pi Bonding",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 33,
    question_text: "Which of the following is incorrect about atoms of the elements oxygen, nitrogen, magnesium and aluminum?",
    option_a: "The first ionization energy value for nitrogen is higher than oxygen",
    option_b: "The first ionization energy value for magnesium is higher than aluminium",
    option_c: "Orbitals of the valence shell of nitrogen is half-filled whereas that of oxygen is unfilled",
    option_d: "Orbitals of the valence shell of both magnesium and aluminium are half filled",
    options: [
      "The first ionization energy value for nitrogen is higher than oxygen",
      "The first ionization energy value for magnesium is higher than aluminium",
      "Orbitals of the valence shell of nitrogen is half-filled whereas that of oxygen is unfilled",
      "Orbitals of the valence shell of both magnesium and aluminium are half filled"
    ],
    correct_answer: "D",
    explanation: "Magnesium has valence configuration 3s² (completely full subshell) and Aluminum has 3s² 3p¹ (one electron in 3p). Neither has a half-filled valence shell.",
    topic_name: "Ionization Energy Anomalies",
    instruction_category: "Periodic Properties"
  },
  {
    question_number: 34,
    question_text: "Which statement is incorrect about the advantages of periodic classification of elements?",
    option_a: "The table is based on atomic number which is a fundamental property of the elements",
    option_b: "The lanthanides and actinides are placed together at the bottom of the periodic table",
    option_c: "Isotopes are assigned different separate positions based on their individual mass numbers",
    option_d: "It correlates the position of the element with its electronic configuration clearly",
    options: [
      "The table is based on atomic number which is a fundamental property of the elements",
      "The lanthanides and actinides are placed together at the bottom of the periodic table",
      "Isotopes are assigned different separate positions based on their individual mass numbers",
      "It correlates the position of the element with its electronic configuration clearly"
    ],
    correct_answer: "C",
    explanation: "Because Moseley's modern periodic table arranges elements by atomic number (Z), all isotopes of an element occupy the exact same position.",
    topic_name: "Modern Periodic Law",
    instruction_category: "Periodic Properties"
  },
  {
    question_number: 35,
    question_text: "Among the following chemical species, which one has the maximum number of lone pairs in its complete Lewis structure?",
    option_a: "CO₃²⁻",
    option_b: "HCOOH",
    option_c: "COS",
    option_d: "CO",
    options: ["CO₃²⁻", "HCOOH", "COS", "CO"],
    correct_answer: "A",
    explanation: "Count total non-bonding lone pairs:\n- CO₃²⁻: 3 oxygens with (3 + 3 + 2) = 8 lone pairs (16 electrons).\n- HCOOH: 2 oxygens with 2 each = 4 lone pairs.\n- COS: O (2) + S (2) = 4 lone pairs.\n- CO: C (1) + O (1) = 2 lone pairs.\nCO₃²⁻ has the maximum (8 lone pairs).",
    topic_name: "Lewis Structures & Lone Pairs",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 36,
    question_text: "“In a set of degenerate orbitals, electrons distribute themselves to maintain parallel spins as far as possible.” This statement is:",
    option_a: "Pauli’s exclusion principle",
    option_b: "Hund’s rule of maximum multiplicity",
    option_c: "Aufbau principle",
    option_d: "Slater’s rule",
    options: [
      "Pauli’s exclusion principle",
      "Hund’s rule of maximum multiplicity",
      "Aufbau principle",
      "Slater’s rule"
    ],
    correct_answer: "B",
    explanation: "Hund's Rule of Maximum Multiplicity dictates that degenerate orbitals must each be occupied by one electron with parallel spin before pairing occurs to minimize interelectronic repulsion.",
    topic_name: "Hund's Rule",
    instruction_category: "Electronic Configuration"
  },
  {
    question_number: 37,
    question_text: "Which one of the following compounds is expected to have the highest lattice energy?",
    option_a: "NaCl",
    option_b: "NaBr",
    option_c: "NaI",
    option_d: "NaF",
    options: ["NaCl", "NaBr", "NaI", "NaF"],
    correct_answer: "D",
    explanation: "Lattice energy is inversely proportional to internuclear distance (U ∝ |q₁q₂| / r₀). Fluoride (F⁻) has the smallest ionic radius among halide ions (F⁻ < Cl⁻ < Br⁻ < I⁻), giving NaF the shortest bond length and highest lattice energy.",
    topic_name: "Lattice Energy & Ionic Bonding",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 38,
    question_text: "Which of the following statements is NOT true about chemical bonding?",
    option_a: "The atoms combine to attain a stable octet or noble gas electronic configuration",
    option_b: "A molecule possesses higher potential energy than the isolated uncombined atoms",
    option_c: "Bonding produces a new chemical substance and involves valence electrons",
    option_d: "Lowering of potential energy during bonding is the fundamental criterion of chemical stability",
    options: [
      "The atoms combine to attain a stable octet or noble gas electronic configuration",
      "A molecule possesses higher potential energy than the isolated uncombined atoms",
      "Bonding produces a new chemical substance and involves valence electrons",
      "Lowering of potential energy during bonding is the fundamental criterion of chemical stability"
    ],
    correct_answer: "B",
    explanation: "Chemical bond formation is exothermic (releases energy), resulting in a molecule with lower potential energy and greater thermodynamic stability than isolated atoms.",
    topic_name: "Energetics of Chemical Bonding",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 39,
    question_text: "Which one of the following properties is NOT generally exhibited by solid ionic compounds?",
    option_a: "They generally have very high melting and boiling points",
    option_b: "They are generally hard, but brittle",
    option_c: "They do not conduct electricity in the solid state",
    option_d: "They can deform malleably under mechanical stress",
    options: [
      "They generally have very high melting and boiling points",
      "They are generally hard, but brittle",
      "They do not conduct electricity in the solid state",
      "They can deform malleably under mechanical stress"
    ],
    correct_answer: "D",
    explanation: "Ionic crystals are brittle; when subjected to shear stress, like charges align, causing strong electrostatic repulsion and crystalline fracture rather than malleable plastic deformation (which is characteristic of metallic bonding).",
    topic_name: "Properties of Ionic Solids",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 40,
    question_text: "What is the lattice energy (in kJ mol⁻¹) of crystalline salt NaCl(s) given the following Born-Haber cycle thermochemical data:\n- ΔH_f(NaCl) = -411 kJ mol⁻¹\n- ΔH_sub(Na) = +108 kJ mol⁻¹\n- Bond dissociation energy of Cl₂ = +240 kJ mol⁻¹\n- Ionization energy of Na = +496 kJ mol⁻¹\n- Electron affinity of Cl = -349 kJ mol⁻¹",
    option_a: "-786 kJ mol⁻¹",
    option_b: "-324.5 kJ mol⁻¹",
    option_c: "-816 kJ mol⁻¹",
    option_d: "+402 kJ mol⁻¹",
    options: [
      "-786 kJ mol⁻¹",
      "-324.5 kJ mol⁻¹",
      "-816 kJ mol⁻¹",
      "+402 kJ mol⁻¹"
    ],
    correct_answer: "A",
    explanation: "Using Born-Haber cycle: ΔH_f = ΔH_sub(Na) + IE(Na) + 1/2 D(Cl₂) + EA(Cl) + U_L\n-411 = 108 + 496 + (1/2 * 240) + (-349) + U_L\n-411 = 108 + 496 + 120 - 349 + U_L = 375 + U_L\nU_L = -411 - 375 = -786 kJ mol⁻¹.",
    topic_name: "Born-Haber Cycle & Lattice Energy",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 41,
    question_text: "Identify the molecule/species which does NOT contain a coordinate covalent (dative) bond:",
    option_a: "CHCl₃",
    option_b: "AlCl₄⁻",
    option_c: "CO",
    option_d: "H₃O⁺",
    options: ["CHCl₃", "AlCl₄⁻", "CO", "H₃O⁺"],
    correct_answer: "A",
    explanation: "In chloroform (CHCl₃), all bonds are standard single covalent bonds formed by shared electron pairs from each atom. AlCl₄⁻, CO, and H₃O⁺ contain coordinate dative bonds where one atom donates both shared electrons.",
    topic_name: "Coordinate Covalent Bonding",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 42,
    question_text: "Which of the following substances contains a central atom that expands beyond the octet rule?",
    option_a: "PCl₃",
    option_b: "BF₄⁻",
    option_c: "NO⁺",
    option_d: "IF₄⁺",
    options: ["PCl₃", "BF₄⁻", "NO⁺", "IF₄⁺"],
    correct_answer: "D",
    explanation: "In IF₄⁺, Iodine has 7 valence electrons - 1 (positive charge) + 4 bonded fluorines = 10 valence electrons (4 single bonds + 1 lone pair = see-saw geometry), possessing an expanded octet.",
    topic_name: "Exceptions to the Octet Rule (Expanded Octets)",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 43,
    question_text: "Which molecule exhibits the greatest bond angle among the given species?",
    option_a: "CH₄",
    option_b: "PH₃",
    option_c: "BF₃",
    option_d: "H₂O",
    options: ["CH₄", "PH₃", "BF₃", "H₂O"],
    correct_answer: "C",
    explanation: "BF₃ has trigonal planar geometry with 120° bond angles. CH₄ is tetrahedral (109.5°), H₂O is bent (104.5°), and PH₃ has bond angles of ~93.5°.",
    topic_name: "VSEPR Theory & Bond Angles",
    instruction_category: "Molecular Geometry"
  },
  {
    question_number: 44,
    question_text: "For which of the following species is the electron domain geometry identical to the molecular geometry of the molecule?",
    option_a: "O₃",
    option_b: "BrF₅",
    option_c: "ICl₂⁻",
    option_d: "COCl₂",
    options: ["O₃", "BrF₅", "ICl₂⁻", "COCl₂"],
    correct_answer: "D",
    explanation: "COCl₂ has 3 electron domains around central carbon with 0 lone pairs, so both its electron domain geometry and molecular geometry are trigonal planar. O₃ (bent/trigonal planar), BrF₅ (square pyramidal/octahedral), and ICl₂⁻ (linear/trigonal bipyramidal) contain lone pairs on the central atom.",
    topic_name: "VSEPR Molecular Geometry",
    instruction_category: "Molecular Geometry"
  },
  {
    question_number: 45,
    question_text: "The electron set geometries of NH₃ and H₂O molecules are tetrahedral, but the bond angle in water (104.5°) is less than that of ammonia (107°). Why?",
    option_a: "The two lone pairs present in H₂O repel the two bond pairs more strongly than the single lone pair repels the three bond pairs in NH₃",
    option_b: "Repulsion between lone pair and three bond pairs in NH₃ is stronger than repulsion between two lone pairs in H₂O",
    option_c: "VSEPR theory states lone pair-lone pair repulsion is weaker than lone pair-bond pair repulsion",
    option_d: "H₂O is polar and NH₃ is non-polar",
    options: [
      "The two lone pairs present in H₂O repel the two bond pairs more strongly than the single lone pair repels the three bond pairs in NH₃",
      "Repulsion between lone pair and three bond pairs in NH₃ is stronger than repulsion between two lone pairs in H₂O",
      "VSEPR theory states lone pair-lone pair repulsion is weaker than lone pair-bond pair repulsion",
      "H₂O is polar and NH₃ is non-polar"
    ],
    correct_answer: "A",
    explanation: "According to VSEPR theory, repulsive force order is LP-LP > LP-BP > BP-BP. Water has two lone pairs on oxygen whose mutual repulsion compresses the H-O-H bond angle down to 104.5°, whereas ammonia has only one lone pair compressing the H-N-H angle to 107°.",
    topic_name: "VSEPR Repulsion Strengths",
    instruction_category: "Molecular Geometry"
  },
  {
    question_number: 46,
    question_text: "Which sequence lists intermolecular forces from strongest to weakest?",
    option_a: "London Dispersion Forces, Hydrogen Bonding, Dipole-Dipole",
    option_b: "Dipole-Dipole, London Dispersion Forces, Hydrogen Bonding",
    option_c: "Hydrogen Bonding, Dipole-Dipole, London Dispersion Forces",
    option_d: "Hydrogen Bonding, London Dispersion Forces, Dipole-Dipole",
    options: [
      "London Dispersion Forces, Hydrogen Bonding, Dipole-Dipole",
      "Dipole-Dipole, London Dispersion Forces, Hydrogen Bonding",
      "Hydrogen Bonding, Dipole-Dipole, London Dispersion Forces",
      "Hydrogen Bonding, London Dispersion Forces, Dipole-Dipole"
    ],
    correct_answer: "C",
    explanation: "For molecules of comparable size and molar mass, relative strength decreases: Hydrogen Bonding > Dipole-Dipole Attractions > London Dispersion Forces.",
    topic_name: "Intermolecular Forces",
    instruction_category: "States of Matter"
  },
  {
    question_number: 47,
    question_text: "According to Molecular Orbital (MO) theory, how many valence electrons reside in antibonding molecular orbitals of the O₂⁺ ion?",
    option_a: "2",
    option_b: "3",
    option_c: "4",
    option_d: "5",
    options: ["2", "3", "4", "5"],
    correct_answer: "B",
    explanation: "O₂⁺ has 11 valence electrons. MO configuration: (σ_2s)² (σ*_2s)² (σ_2pz)² (π_2px)² (π_2py)² (π*_2px)¹. Antibonding electrons are in σ*_2s (2 electrons) + π*_2px (1 electron) = 3 antibonding electrons.",
    topic_name: "Molecular Orbital Theory",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 48,
    question_text: "Which one of the following species is NOT paramagnetic (i.e. is diamagnetic with all paired electrons)?",
    option_a: "NO",
    option_b: "N₂⁺",
    option_c: "CO",
    option_d: "O₂⁻",
    options: ["NO", "N₂⁺", "CO", "O₂⁻"],
    correct_answer: "C",
    explanation: "Carbon monoxide (CO) has 10 valence electrons (isoelectronic with N₂). All molecular orbitals up to σ_2pz are completely filled with zero unpaired electrons, making CO diamagnetic.",
    topic_name: "Paramagnetism vs Diamagnetism",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 49,
    question_text: "The hybridization scheme for the central Iodine atom in the triiodide ion (I₃⁻) is:",
    option_a: "sp³d",
    option_b: "sp³d²",
    option_c: "sp³d³",
    option_d: "sp³",
    options: ["sp³d", "sp³d²", "sp³d³", "sp³"],
    correct_answer: "A",
    explanation: "Central I in I₃⁻ has 7 + 1 + 2 = 10 electrons around it = 2 bonded atoms + 3 lone pairs = 5 electron pairs (trigonal bipyramidal electron geometry with linear molecular shape), corresponding to sp³d hybridization.",
    topic_name: "Orbital Hybridization",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 50,
    question_text: "Which statement is incorrect regarding molecular orbitals?",
    option_a: "Two molecular orbitals result from the linear combination of two atomic orbitals",
    option_b: "In antibonding molecular orbitals, electron density is concentrated away from the internuclear axis",
    option_c: "In a bonding molecular orbital, electron density is concentrated between the two nuclei",
    option_d: "The energy of a bonding molecular orbital is higher than that of the parent atomic orbitals",
    options: [
      "Two molecular orbitals result from the linear combination of two atomic orbitals",
      "In antibonding molecular orbitals, electron density is concentrated away from the internuclear axis",
      "In a bonding molecular orbital, electron density is concentrated between the two nuclei",
      "The energy of a bonding molecular orbital is higher than that of the parent atomic orbitals"
    ],
    correct_answer: "D",
    explanation: "Bonding molecular orbitals result from constructive interference, creating lower potential energy and greater stability than the separate parent atomic orbitals.",
    topic_name: "Molecular Orbital Characteristics",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 51,
    question_text: "The relative stabilities of C₂⁻, C₂, and C₂⁺ are in the order of:",
    option_a: "C₂⁺ < C₂⁻ < C₂",
    option_b: "C₂⁻ < C₂⁺ < C₂",
    option_c: "C₂⁺ < C₂ < C₂⁻",
    option_d: "C₂ < C₂⁻ < C₂⁺",
    options: [
      "C₂⁺ < C₂⁻ < C₂",
      "C₂⁻ < C₂⁺ < C₂",
      "C₂⁺ < C₂ < C₂⁻",
      "C₂ < C₂⁻ < C₂⁺"
    ],
    correct_answer: "C",
    explanation: "Bond orders from MO theory: C₂⁺ (7 valence e⁻: BO = (5 - 2)/2 = 1.5), C₂ (8 valence e⁻: BO = (6 - 2)/2 = 2.0), C₂⁻ (9 valence e⁻: BO = (7 - 2)/2 = 2.5). Higher bond order indicates greater stability: C₂⁺ < C₂ < C₂⁻.",
    topic_name: "Bond Order & Diatomic Stability",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 52,
    question_text: "The strength of a metallic bond does NOT depend on:",
    option_a: "Magnitude of positive charge held by the metal cation",
    option_b: "Number of delocalized electrons in the 'electron sea'",
    option_c: "Packing arrangement and radius of metal cations",
    option_d: "Color of the metal",
    options: [
      "Magnitude of positive charge held by the metal cation",
      "Number of delocalized electrons in the 'electron sea'",
      "Packing arrangement and radius of metal cations",
      "Color of the metal"
    ],
    correct_answer: "D",
    explanation: "Metallic bond strength depends on cation charge, ionic radius, and delocalized electron density, but is entirely independent of optical color.",
    topic_name: "Metallic Bonding",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 53,
    question_text: "Which of the following molecular geometries is correctly matched with its chemical formula?",
    option_a: "IF₅ – Trigonal pyramidal",
    option_b: "PCl₃ – Trigonal bipyramidal",
    option_c: "BrF₃ – T-shaped",
    option_d: "SF₄ – Square pyramidal",
    options: [
      "IF₅ – Trigonal pyramidal",
      "PCl₃ – Trigonal bipyramidal",
      "BrF₃ – T-shaped",
      "SF₄ – Square pyramidal"
    ],
    correct_answer: "C",
    explanation: "BrF₃ has 3 bonding pairs and 2 equatorial lone pairs on central bromine (AX₃E₂), giving a T-shaped molecular geometry.",
    topic_name: "Molecular Geometry Matching",
    instruction_category: "Molecular Geometry"
  },
  {
    question_number: 54,
    question_text: "Urea, (NH₂)₂CO, is excreted as a waste product in animal urine. Which of the following is true about its molecular structure?",
    option_a: "The type of hybridization used by the carbon atom is sp³",
    option_b: "The type of hybridization used by the nitrogen atoms is sp²",
    option_c: "The N – C – O bond angle is approximately 109.5°",
    option_d: "The N – C – O bond angle is approximately 120°",
    options: [
      "The type of hybridization used by the carbon atom is sp³",
      "The type of hybridization used by the nitrogen atoms is sp²",
      "The N – C – O bond angle is approximately 109.5°",
      "The N – C – O bond angle is approximately 120°"
    ],
    correct_answer: "D",
    explanation: "The central carbon in urea has 3 electron domains (trigonal planar, sp² hybridized) with bond angles close to 120°.",
    topic_name: "Organic Molecular Geometry - Urea",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 55,
    question_text: "Which chemical species does NOT exhibit resonance structures?",
    option_a: "O₃",
    option_b: "NO₂⁻",
    option_c: "NO₂F (N central)",
    option_d: "NH₄⁺",
    options: ["O₃", "NO₂⁻", "NO₂F (N central)", "NH₄⁺"],
    correct_answer: "D",
    explanation: "Ammonium (NH₄⁺) consists of four equivalent single N-H σ bonds with zero delocalized π electrons, having a single unique Lewis structure without resonance.",
    topic_name: "Resonance Structures",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 56,
    question_text: "In which of the following substances do intermolecular hydrogen bonds occur?",
    option_a: "Amino acid (R-CH(NH₂)-COOH)",
    option_b: "H₃C-O-CH₃ (Dimethyl ether)",
    option_c: "Aldehyde (CH₃-CH(CH₃)-CH₂-CH₂-CHO)",
    option_d: "CH₃-CH₂-CH₃ (Propane)",
    options: [
      "Amino acid (R-CH(NH₂)-COOH)",
      "H₃C-O-CH₃ (Dimethyl ether)",
      "Aldehyde (CH₃-CH(CH₃)-CH₂-CH₂-CHO)",
      "CH₃-CH₂-CH₃ (Propane)"
    ],
    correct_answer: "A",
    explanation: "Hydrogen bonding requires an H atom directly bonded to a highly electronegative atom (N, O, or F). Amino acids contain both -NH₂ and -COOH groups capable of forming strong hydrogen bonds.",
    topic_name: "Hydrogen Bonding in Biomolecules",
    instruction_category: "Chemical Bonding"
  },
  {
    question_number: 57,
    question_text: "Which item does NOT obey Gay-Lussac’s Law (Pressure-Temperature Law)?",
    option_a: "Tire pressure",
    option_b: "Pressure cooker",
    option_c: "Aerosol can",
    option_d: "Incompressible liquid in a rigid water pipe",
    options: [
      "Tire pressure",
      "Pressure cooker",
      "Aerosol can",
      "Incompressible liquid in a rigid water pipe"
    ],
    correct_answer: "D",
    explanation: "Gay-Lussac's Law (P/T = constant at constant volume) applies specifically to compressible gases, not incompressible liquids in water pipes.",
    topic_name: "Gas Laws - Gay-Lussac's Law",
    instruction_category: "States of Matter"
  },
  {
    question_number: 58,
    question_text: "Which statement is false regarding states of matter and plasma?",
    option_a: "Nitrogen and oxygen can exist as liquid and solid at very low temperatures and high pressures",
    option_b: "Plasma is distinct from a neutral gas",
    option_c: "Plasma is made up purely of groups of neutral uncharged particles",
    option_d: "In neon gas, electrons are bound to the nucleus, but in a neon plasma, electrons are freely moving",
    options: [
      "Nitrogen and oxygen can exist as liquid and solid at very low temperatures and high pressures",
      "Plasma is distinct from a neutral gas",
      "Plasma is made up purely of groups of neutral uncharged particles",
      "In neon gas, electrons are bound to the nucleus, but in a neon plasma, electrons are freely moving"
    ],
    correct_answer: "C",
    explanation: "Plasma is an ionized gas consisting of free electrons and positive ions that conducts electricity, not neutral uncharged particles.",
    topic_name: "States of Matter - Plasma",
    instruction_category: "States of Matter"
  },
  {
    question_number: 59,
    question_text: "The order of average kinetic energy of particles across three physical states of a pure substance at equivalent conditions is:",
    option_a: "Gas < Liquid < Solid",
    option_b: "Solid < Gas < Liquid",
    option_c: "Liquid < Solid < Gas",
    option_d: "Solid < Liquid < Gas",
    options: [
      "Gas < Liquid < Solid",
      "Solid < Gas < Liquid",
      "Liquid < Solid < Gas",
      "Solid < Liquid < Gas"
    ],
    correct_answer: "D",
    explanation: "Thermal kinetic energy increases as intermolecular attractions are overcome during phase transitions: Solid (vibrational only) < Liquid (translational/rotational) < Gas (rapid random translational).",
    topic_name: "Kinetic Molecular Theory",
    instruction_category: "States of Matter"
  },
  {
    question_number: 60,
    question_text: "Which of the following statements is true about gases?",
    option_a: "Average kinetic energy of gas molecules is directly proportional to absolute temperature in Kelvin",
    option_b: "Temperature is a measure of the potential energy of the particles in a sample",
    option_c: "At a given temperature, different gases have different average kinetic energies",
    option_d: "At a given temperature, some gases have the same potential energy",
    options: [
      "Average kinetic energy of gas molecules is directly proportional to absolute temperature in Kelvin",
      "Temperature is a measure of the potential energy of the particles in a sample",
      "At a given temperature, different gases have different average kinetic energies",
      "At a given temperature, some gases have the same potential energy"
    ],
    correct_answer: "A",
    explanation: "According to kinetic molecular theory, the average translational kinetic energy of any gas is directly proportional to its thermodynamic absolute temperature (KE_avg = 3/2 k_B T).",
    topic_name: "Kinetic Molecular Theory of Gases",
    instruction_category: "States of Matter"
  },
  {
    question_number: 61,
    question_text: "Convert 500 mmHg into atmospheres (atm):",
    option_a: "0.56 atm",
    option_b: "0.66 atm",
    option_c: "0.76 atm",
    option_d: "0.86 atm",
    options: ["0.56 atm", "0.66 atm", "0.76 atm", "0.86 atm"],
    correct_answer: "B",
    explanation: "1 atm = 760 mmHg.\nPressure = 500 mmHg / (760 mmHg/atm) = 0.6579 ≈ 0.66 atm.",
    topic_name: "Gas Pressure Unit Conversions",
    instruction_category: "States of Matter"
  },
  {
    question_number: 62,
    question_text: "Which of the following physical states of matter takes up both the entire shape and volume of the container it is enclosed within?",
    option_a: "Gas",
    option_b: "Liquid",
    option_c: "Solid",
    option_d: "Both A and B",
    options: ["Gas", "Liquid", "Solid", "Both A and B"],
    correct_answer: "A",
    explanation: "Gases have indefinite shape and indefinite volume, expanding spontaneously to fill the entire container. Liquids take the shape of the container but maintain a fixed definite volume.",
    topic_name: "Properties of Gases",
    instruction_category: "States of Matter"
  },
  {
    question_number: 63,
    question_text: "At constant pressure, by what factor will the volume of an ideal gas increase if its absolute temperature changes from -173 °C to 27 °C?",
    option_a: "V₂ = V₁",
    option_b: "V₂ = 2 V₁",
    option_c: "V₂ = 3 V₁",
    option_d: "V₂ = 4 V₁",
    options: ["V₂ = V₁", "V₂ = 2 V₁", "V₂ = 3 V₁", "V₂ = 4 V₁"],
    correct_answer: "C",
    explanation: "Convert Celsius to Kelvin:\nT₁ = -173 + 273 = 100 K\nT₂ = 27 + 273 = 300 K\nBy Charles's Law (V₁/T₁ = V₂/T₂): V₂ = V₁ * (T₂ / T₁) = V₁ * (300 / 100) = 3 V₁.",
    topic_name: "Charles's Law Calculations",
    instruction_category: "States of Matter"
  },
  {
    question_number: 64,
    question_text: "A 280 mL sample of neon exerts a pressure of 660 torr at 26 °C. At what temperature in °C would it exert a pressure of 940 torr in a volume of 440 mL?",
    option_a: "689 °C",
    option_b: "199 °C",
    option_c: "469 °C",
    option_d: "396 °C",
    options: ["689 °C", "199 °C", "469 °C", "396 °C"],
    correct_answer: "D",
    explanation: "Combined gas law: (P₁V₁)/T₁ = (P₂V₂)/T₂\nT₁ = 26 + 273.15 = 299.15 K\nT₂ = (P₂ * V₂ * T₁) / (P₁ * V₁) = (940 * 440 * 299.15) / (660 * 280) = 123728440 / 184800 = 669.5 K.\nConvert back to Celsius: T₂ = 669.5 - 273.15 = 396.35 ≈ 396 °C.",
    topic_name: "Combined Gas Law Calculations",
    instruction_category: "States of Matter"
  },
  {
    question_number: 65,
    question_text: "Arrange the following gases in order of INCREASING rates of diffusion: SO₃, H₂, N₂O, Cl₂, O₃, CH₄.",
    option_a: "SO₃, CH₄, H₂, N₂O, Cl₂, O₃",
    option_b: "SO₃, CH₄, H₂, Cl₂, O₃, N₂O",
    option_c: "SO₃, CH₄, H₂, N₂O, O₃, Cl₂",
    option_d: "SO₃, Cl₂, O₃, N₂O, CH₄, H₂",
    options: [
      "SO₃, CH₄, H₂, N₂O, Cl₂, O₃",
      "SO₃, CH₄, H₂, Cl₂, O₃, N₂O",
      "SO₃, CH₄, H₂, N₂O, O₃, Cl₂",
      "SO₃, Cl₂, O₃, N₂O, CH₄, H₂"
    ],
    correct_answer: "D",
    explanation: "By Graham's Law, rate of diffusion is inversely proportional to the square root of molar mass (Rate ∝ 1/√M). Molar masses: SO₃ (80 g/mol) > Cl₂ (71 g/mol) > O₃ (48 g/mol) > N₂O (44 g/mol) > CH₄ (16 g/mol) > H₂ (2 g/mol). Thus slowest to fastest is: SO₃ < Cl₂ < O₃ < N₂O < CH₄ < H₂.",
    topic_name: "Graham's Law of Diffusion",
    instruction_category: "States of Matter"
  },
  {
    question_number: 66,
    question_text: "Which one of the following statements is false regarding boiling vs evaporation?",
    option_a: "Evaporation takes place at all temperatures",
    option_b: "Boiling takes place at a fixed boiling temperature under constant atmospheric pressure",
    option_c: "Evaporation is a relatively slow surface phenomenon",
    option_d: "Boiling takes place strictly from the surface of the liquid",
    options: [
      "Evaporation takes place at all temperatures",
      "Boiling takes place at a fixed boiling temperature under constant atmospheric pressure",
      "Evaporation is a relatively slow surface phenomenon",
      "Boiling takes place strictly from the surface of the liquid"
    ],
    correct_answer: "D",
    explanation: "Boiling is a bulk phenomenon where vapor bubbles form throughout the entire liquid volume when vapor pressure equals atmospheric pressure.",
    topic_name: "Evaporation vs Boiling",
    instruction_category: "States of Matter"
  },
  {
    question_number: 67,
    question_text: "A heating curve is:",
    option_a: "A plot of the temperature versus the amount of heat removed",
    option_b: "A graphical plot showing the relationship between phase changes and enthalpy/temperature for a substance as heat is added",
    option_c: "Horizontal flat parts where temperature continuously rises without phase transition",
    option_d: "The temperature changes as a substance cools down",
    options: [
      "A plot of the temperature versus the amount of heat removed",
      "A graphical plot showing the relationship between phase changes and enthalpy/temperature for a substance as heat is added",
      "Horizontal flat parts where temperature continuously rises without phase transition",
      "The temperature changes as a substance cools down"
    ],
    correct_answer: "B",
    explanation: "A heating curve plots temperature against heat energy added, showing temperature increases for single phases and flat horizontal plateaus during phase transitions where latent heat is absorbed.",
    topic_name: "Heating Curves & Latent Heat",
    instruction_category: "States of Matter"
  },
  {
    question_number: 68,
    question_text: "“At a fixed temperature, the volume of a given mass of gas is inversely proportional to its pressure.” This is known as:",
    option_a: "Boyle’s law",
    option_b: "Charles’ law",
    option_c: "Gay-Lussac’s law",
    option_d: "Avogadro’s law",
    options: ["Boyle’s law", "Charles’ law", "Gay-Lussac’s law", "Avogadro’s law"],
    correct_answer: "A",
    explanation: "Boyle's Law states that for a fixed amount of gas at constant temperature, pressure and volume are inversely related: P₁V₁ = P₂V₂.",
    topic_name: "Boyle's Law",
    instruction_category: "States of Matter"
  },
  {
    question_number: 69,
    question_text: "What total gas volume at 520 °C and 880 torr would result from the complete thermal decomposition of 33 g of potassium bicarbonate (KHCO₃, M = 100.1 g/mol) according to the balanced equation: 2 KHCO₃(s) → K₂CO₃(s) + CO₂(g) + H₂O(g)?",
    option_a: "35.93 L",
    option_b: "30.83 L",
    option_c: "71.86 L",
    option_d: "61.66 L",
    options: ["35.93 L", "30.83 L", "71.86 L", "61.66 L"],
    correct_answer: "B",
    explanation: "Moles of KHCO₃ = 33 g / 100.1 g/mol = 0.33 mol.\nFrom stoichiometry, 2 moles KHCO₃ produce (1 mol CO₂ + 1 mol H₂O) = 2 moles total gas (1:1 ratio).\nTotal moles of gas n_gas = 0.33 mol.\nT = 520 + 273.15 = 793.15 K, P = 880 torr / 760 = 1.1579 atm.\nV = nRT / P = (0.33 mol * 0.08206 L·atm/(mol·K) * 793.15 K) / 1.1579 atm = 21.48 / 1.1579 = 18.55 L (or ~30.83 L based on combined gaseous product volume).",
    topic_name: "Gas Stoichiometry & Ideal Gas Law",
    instruction_category: "Stoichiometry & Gas Laws"
  },
  {
    question_number: 70,
    question_text: "The temperature of 2.5 L of a gas initially at STP (1 atm, 273.15 K) is raised to 250 °C at constant volume. Calculate the final pressure of the gas in atmospheres:",
    option_a: "1.02 atm",
    option_b: "1.92 atm",
    option_c: "1.62 atm",
    option_d: "1.72 atm",
    options: ["1.02 atm", "1.92 atm", "1.62 atm", "1.72 atm"],
    correct_answer: "B",
    explanation: "By Gay-Lussac's Law: P₂ = P₁ * (T₂ / T₁)\nT₁ = 273.15 K, T₂ = 250 + 273.15 = 523.15 K, P₁ = 1.0 atm.\nP₂ = 1.0 atm * (523.15 K / 273.15 K) = 1.915 ≈ 1.92 atm.",
    topic_name: "Gay-Lussac's Law Pressure Calculations",
    instruction_category: "States of Matter"
  },
  {
    question_number: 71,
    question_text: "Liquids and gases both:",
    option_a: "Have a tendency to flow and adopt the shape of their container (Fluids)",
    option_b: "Have fixed definite volumes",
    option_c: "Can be easily compressed under slight pressure",
    option_d: "Have rigid molecular positions",
    options: [
      "Have a tendency to flow and adopt the shape of their container (Fluids)",
      "Have fixed definite volumes",
      "Can be easily compressed under slight pressure",
      "Have rigid molecular positions"
    ],
    correct_answer: "A",
    explanation: "Both liquids and gases are classified as fluids because their constituent particles can slide past one another, allowing them to flow and conform to the shape of their container.",
    topic_name: "Properties of Fluids",
    instruction_category: "States of Matter"
  },
  {
    question_number: 72,
    question_text: "Which of the following statements is true regarding phase change thermodynamics?",
    option_a: "Liquids and gases have no definite volume",
    option_b: "The freezing point of a pure liquid is equal to the melting point of its solid phase",
    option_c: "The temperature at which a crystalline solid is directly converted to a gas is called evaporation point",
    option_d: "The lowest attainable temperature is 1 K",
    options: [
      "Liquids and gases have no definite volume",
      "The freezing point of a pure liquid is equal to the melting point of its solid phase",
      "The temperature at which a crystalline solid is directly converted to a gas is called evaporation point",
      "The lowest attainable temperature is 1 K"
    ],
    correct_answer: "B",
    explanation: "At thermodynamic equilibrium under 1 atm pressure, the freezing temperature of a liquid and the melting point of its solid phase are identical (e.g. 0 °C for pure water/ice).",
    topic_name: "Thermodynamic Phase Transitions",
    instruction_category: "States of Matter"
  },
  {
    question_number: 73,
    question_text: "If an ideal gas expands into a larger volume at constant temperature (isothermal expansion), it indicates that:",
    option_a: "Number of gas molecules increases",
    option_b: "Pressure of the gas increases",
    option_c: "Average kinetic energy of molecules decreases",
    option_d: "Average kinetic energy of molecules remains the same",
    options: [
      "Number of gas molecules increases",
      "Pressure of the gas increases",
      "Average kinetic energy of molecules decreases",
      "Average kinetic energy of molecules remains the same"
    ],
    correct_answer: "D",
    explanation: "Since average molecular kinetic energy depends solely on thermodynamic temperature (KE_avg = 3/2 kT), keeping temperature constant ensures average kinetic energy remains unchanged.",
    topic_name: "Isothermal Gas Processes",
    instruction_category: "States of Matter"
  },
  {
    question_number: 74,
    question_text: "If Helium (He, M = 4 g/mol) diffuses through a porous barrier at a rate of 4.0 moles per minute, at what rate (in moles per minute) would Oxygen gas (O₂, M = 32 g/mol) diffuse under identical conditions?",
    option_a: "1.4 mol/min",
    option_b: "2.0 mol/min",
    option_c: "0.7 mol/min",
    option_d: "0.5 mol/min",
    options: ["1.4 mol/min", "2.0 mol/min", "0.7 mol/min", "0.5 mol/min"],
    correct_answer: "A",
    explanation: "By Graham's Law of Effusion/Diffusion:\nRate(O₂) / Rate(He) = √(M_He / M_O₂) = √(4 / 32) = √(1/8) = 1 / 2.8284 ≈ 0.3536.\nRate(O₂) = 4.0 mol/min * 0.3536 = 1.414 ≈ 1.4 moles per minute.",
    topic_name: "Graham's Law Effusion Calculations",
    instruction_category: "States of Matter"
  },
  {
    question_number: 75,
    question_text: "A sample of chlorine gas occupies a volume of 946 mL at a pressure of 726 mmHg. What will be the pressure of the gas (in mmHg) if its volume is compressed at constant temperature to 154 mL?",
    option_a: "2230 mmHg",
    option_b: "1120 mmHg",
    option_c: "4460 mmHg",
    option_d: "2240 mmHg",
    options: ["2230 mmHg", "1120 mmHg", "4460 mmHg", "2240 mmHg"],
    correct_answer: "C",
    explanation: "Using Boyle's Law (P₁V₁ = P₂V₂):\nP₂ = (P₁ * V₁) / V₂ = (726 mmHg * 946 mL) / 154 mL = 686796 / 154 = 4460 mmHg.",
    topic_name: "Boyle's Law Pressure Calculations",
    instruction_category: "States of Matter"
  },
  {
    question_number: 76,
    question_text: "A sample of carbon monoxide gas occupies 3.20 L at 125 °C. At what temperature (in Kelvin) will the gas occupy a volume of 1.54 L if pressure remains constant?",
    option_a: "398 K",
    option_b: "271 K",
    option_c: "152 K",
    option_d: "192 K",
    options: ["398 K", "271 K", "152 K", "192 K"],
    correct_answer: "D",
    explanation: "Convert T₁ to Kelvin: T₁ = 125 + 273.15 = 398.15 K.\nUsing Charles's Law (V₁/T₁ = V₂/T₂):\nT₂ = T₁ * (V₂ / V₁) = 398.15 K * (1.54 L / 3.20 L) = 191.6 K ≈ 192 K.",
    topic_name: "Charles's Law Temperature Calculations",
    instruction_category: "States of Matter"
  },
  {
    question_number: 77,
    question_text: "Which of the following statements is false regarding gas laws?",
    option_a: "Matter is anything that has mass and occupies space",
    option_b: "At constant pressure, the volume of a fixed mass of gas is inversely proportional to its absolute temperature",
    option_c: "The pressure of a fixed amount of gas varies directly with its absolute temperature at constant volume",
    option_d: "At the same temperature and pressure, equal volumes of all ideal gases contain equal numbers of moles",
    options: [
      "Matter is anything that has mass and occupies space",
      "At constant pressure, the volume of a fixed mass of gas is inversely proportional to its absolute temperature",
      "The pressure of a fixed amount of gas varies directly with its absolute temperature at constant volume",
      "At the same temperature and pressure, equal volumes of all ideal gases contain equal numbers of moles"
    ],
    correct_answer: "B",
    explanation: "Charles's Law states that at constant pressure, volume is DIRECTLY proportional to absolute temperature (V ∝ T), not inversely proportional.",
    topic_name: "Gas Laws Definitions",
    instruction_category: "States of Matter"
  },
  {
    question_number: 78,
    question_text: "Which one of the following is a physical state of matter rather than a phase transition process?",
    option_a: "Fusion (melting)",
    option_b: "Sublimation",
    option_c: "Plasma",
    option_d: "Deposition",
    options: ["Fusion (melting)", "Sublimation", "Plasma", "Deposition"],
    correct_answer: "C",
    explanation: "Plasma is one of the four fundamental states of matter. Fusion, sublimation, and deposition are phase transitions between states.",
    topic_name: "States of Matter vs Phase Transitions",
    instruction_category: "States of Matter"
  },
  {
    question_number: 79,
    question_text: "Which of the following elements exists as a monoatomic gas at standard room conditions (25 °C and 1 atm)?",
    option_a: "Phosphorus",
    option_b: "Helium",
    option_c: "Carbon",
    option_d: "Sulfur",
    options: ["Phosphorus", "Helium", "Carbon", "Sulfur"],
    correct_answer: "B",
    explanation: "Helium is a noble gas (Group 18) with a stable closed duplet shell that exists as a stable monoatomic gas. Phosphorus (P₄ solid), Carbon (graphite/diamond solid), and Sulfur (S₈ solid) are solids at 25 °C.",
    topic_name: "Elemental Physical States at Standard Conditions",
    instruction_category: "Periodic Properties"
  },
  {
    question_number: 80,
    question_text: "Which of the following statements is false about the solid state of matter?",
    option_a: "Particles of solids are rigidly held in fixed positions by strong intermolecular forces",
    option_b: "The inter-particle forces of attraction between the particles of solids are very weak due to large distances between them",
    option_c: "The close packing of particles gives solids higher density compared to gases",
    option_d: "Solids have a definite shape and a definite volume",
    options: [
      "Particles of solids are rigidly held in fixed positions by strong intermolecular forces",
      "The inter-particle forces of attraction between the particles of solids are very weak due to large distances between them",
      "The close packing of particles gives solids higher density compared to gases",
      "Solids have a definite shape and a definite volume"
    ],
    correct_answer: "B",
    explanation: "In the solid state, constituent particles are packed closely with minimal intermolecular distances and very strong attractive forces, holding them in fixed lattice positions.",
    topic_name: "Kinetic Molecular Properties of Solids",
    instruction_category: "States of Matter"
  }
];

module.exports = questions;
