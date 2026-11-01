/**
 * Grade 10 Physics Final Exam for Boarding and Non-Boarding (Special) Schools, January 2016/2024
 * 45 Questions extracted directly from the official examination paper with comprehensive step-by-step physical derivations and explanations.
 */

const questions = [
  {
    question_number: 1,
    question_text: "The SI unit of electric potential difference (voltage) is the:",
    option_a: "Volt (V), which is equal to Joule per Coulomb (J/C)",
    option_b: "Ampere (A)",
    option_c: "Ohm (Ω)",
    option_d: "Watt (W)",
    options: [
      "Volt (V), which is equal to Joule per Coulomb (J/C)",
      "Ampere (A)",
      "Ohm (Ω)",
      "Watt (W)"
    ],
    correct_answer: "A",
    explanation: "Electric potential difference V is defined as work done per unit charge (V = W / q). Its SI unit is the Volt (V), where 1 Volt = 1 Joule per Coulomb (1 J/C).",
    topic_name: "Electric Potential & Voltage Units",
    instruction_category: "Electricity"
  },
  {
    question_number: 2,
    question_text: "By convention, the direction of electric current in an external circuit is defined as flowing from:",
    option_a: "Negative terminal to positive terminal",
    option_b: "Positive terminal to negative terminal",
    option_c: "Ground to positive terminal",
    option_d: "Neutral wire to live wire",
    options: [
      "Negative terminal to positive terminal",
      "Positive terminal to negative terminal",
      "Ground to positive terminal",
      "Neutral wire to live wire"
    ],
    correct_answer: "B",
    explanation: "Conventional current is defined historically as the direction in which positive charge carriers would move, which is from the positive (+) terminal through the external circuit to the negative (-) terminal (opposite to the flow of electrons).",
    topic_name: "Electric Current & Conventional Flow",
    instruction_category: "Electricity"
  },
  {
    question_number: 3,
    question_text: "The rate of flow of electric charge through any cross-section of a conductor is called:",
    option_a: "Electric potential",
    option_b: "Electric resistance",
    option_c: "Electric current",
    option_d: "Electromotive force",
    options: [
      "Electric potential",
      "Electric resistance",
      "Electric current",
      "Electromotive force"
    ],
    correct_answer: "C",
    explanation: "Electric current (I) is quantitatively defined as the rate at which electric charge (Q) flows past a given point: I = ΔQ / Δt. Its SI unit is the Ampere (A = C/s).",
    topic_name: "Definition of Electric Current",
    instruction_category: "Electricity"
  },
  {
    question_number: 4,
    question_text: "Ohm’s law states that at constant physical temperature, the current passing through an ideal conductor is:",
    option_a: "Directly proportional to the potential difference applied across its ends (V = IR)",
    option_b: "Inversely proportional to the potential difference",
    option_c: "Directly proportional to the square of resistance",
    option_d: "Independent of potential difference",
    options: [
      "Directly proportional to the potential difference applied across its ends (V = IR)",
      "Inversely proportional to the potential difference",
      "Directly proportional to the square of resistance",
      "Independent of potential difference"
    ],
    correct_answer: "A",
    explanation: "Ohm's Law asserts that for an ohmic conductor at constant temperature, the current (I) is directly proportional to the applied potential difference (V), yielding V = I·R, where R is the constant electrical resistance.",
    topic_name: "Ohm's Law & Resistance",
    instruction_category: "Electricity"
  },
  {
    question_number: 5,
    question_text: "The electrical resistance (R) of a cylindrical metallic wire of length L, cross-sectional area A, and resistivity ρ is given by:",
    option_a: "R = ρ · A / L",
    option_b: "R = L / (ρ · A)",
    option_c: "R = A / (ρ · L)",
    option_d: "R = ρ · L / A",
    options: [
      "R = ρ · A / L",
      "L / (ρ · A)",
      "A / (ρ · L)",
      "R = ρ · L / A"
    ],
    correct_answer: "D",
    explanation: "Resistance is directly proportional to wire length L and inversely proportional to cross-sectional area A: R = ρL / A, where ρ is the material resistivity.",
    topic_name: "Factors Affecting Electrical Resistance",
    instruction_category: "Electricity"
  },
  {
    question_number: 6,
    question_text: "What is the equivalent resistance when two resistors of 6 Ω and 3 Ω are connected in parallel?",
    option_a: "9 Ω",
    option_b: "2 Ω",
    option_c: "18 Ω",
    option_d: "0.5 Ω",
    options: ["9 Ω", "2 Ω", "18 Ω", "0.5 Ω"],
    correct_answer: "B",
    explanation: "For parallel resistors: 1/R_eq = 1/R1 + 1/R2 = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2.\nTherefore R_eq = 2 Ω.",
    topic_name: "Resistors in Parallel",
    instruction_category: "Electric Circuits"
  },
  {
    question_number: 7,
    question_text: "Three resistors each of resistance 4 Ω are connected in series. What is the total equivalent resistance of the combination?",
    option_a: "1.33 Ω",
    option_b: "4 Ω",
    option_c: "12 Ω",
    option_d: "64 Ω",
    options: ["1.33 Ω", "4 Ω", "12 Ω", "64 Ω"],
    correct_answer: "C",
    explanation: "For resistors in series, the total resistance is the algebraic sum: R_total = R1 + R2 + R3 = 4 Ω + 4 Ω + 4 Ω = 12 Ω.",
    topic_name: "Resistors in Series",
    instruction_category: "Electric Circuits"
  },
  {
    question_number: 8,
    question_text: "Which of the following mathematical equations correctly expresses electric power (P)?",
    option_a: "P = V · I",
    option_b: "P = I² · R",
    option_c: "P = V² / R",
    option_d: "All of the above",
    options: ["P = V · I", "P = I² · R", "P = V² / R", "All of the above"],
    correct_answer: "D",
    explanation: "Using Joule's law and Ohm's law (V = IR), electric power can be written as P = VI, P = I²R, and P = V²/R. All three expressions are mathematically identical and valid.",
    topic_name: "Electric Power Calculations",
    instruction_category: "Electricity"
  },
  {
    question_number: 9,
    question_text: "An electric iron rated at 1000 W is operated for 2 hours daily. How much electrical energy (in kilowatt-hours, kWh) does it consume each day?",
    option_a: "2 kWh",
    option_b: "500 kWh",
    option_c: "2000 kWh",
    option_d: "0.5 kWh",
    options: ["2 kWh", "500 kWh", "2000 kWh", "0.5 kWh"],
    correct_answer: "A",
    explanation: "Energy (kWh) = Power (kW) × Time (hours) = (1000 W / 1000) × 2 h = 1 kW × 2 h = 2 kWh.",
    topic_name: "Electrical Energy & Commercial Units (kWh)",
    instruction_category: "Electricity"
  },
  {
    question_number: 10,
    question_text: "A safety device with a low melting point that protects an electric circuit and appliances from damage due to excessive current overload is a:",
    option_a: "Voltmeter",
    option_b: "Fuse",
    option_c: "Galvanometer",
    option_d: "Rheostat",
    options: ["Voltmeter", "Fuse", "Galvanometer", "Rheostat"],
    correct_answer: "B",
    explanation: "An electric fuse consists of a thin alloy wire with a low melting point that heats up and melts (blows) when current exceeds safe operating thresholds, breaking the circuit.",
    topic_name: "Electrical Safety Devices (Fuses)",
    instruction_category: "Domestic Electricity"
  },
  {
    question_number: 11,
    question_text: "The magnetic field lines surrounding a straight, current-carrying wire form:",
    option_a: "Straight parallel lines pointing away from the wire",
    option_b: "Elliptical paths along the wire length",
    option_c: "Concentric circular loops centered on the wire axis",
    option_d: "Radial lines diverging outward",
    options: [
      "Straight parallel lines pointing away from the wire",
      "Elliptical paths along the wire length",
      "Concentric circular loops centered on the wire axis",
      "Radial lines diverging outward"
    ],
    correct_answer: "C",
    explanation: "According to Biot-Savart's law and Oersted's discovery, a straight current-carrying wire generates circular, concentric magnetic field lines centered on the conductor, oriented via the right-hand thumb rule.",
    topic_name: "Magnetic Field of Current-Carrying Conductors",
    instruction_category: "Magnetism & Electromagnetism"
  },
  {
    question_number: 12,
    question_text: "The magnetic force F acting on a charge q moving with velocity v through a magnetic field B at an angle θ is given by:",
    option_a: "F = q · v · B · sin(θ)",
    option_b: "F = q · B / (v · sin(θ))",
    option_c: "F = q · v / (B · cos(θ))",
    option_d: "F = m · a · B",
    options: [
      "F = q · v · B · sin(θ)",
      "F = q · B / (v · sin(θ))",
      "F = q · v / (B · cos(θ))",
      "F = m · a · B"
    ],
    correct_answer: "A",
    explanation: "The Lorentz magnetic force on a moving point charge is F = q(v × B), whose magnitude is F = q v B sin θ, acting perpendicular to both velocity and magnetic field vectors.",
    topic_name: "Lorentz Force on Moving Charges",
    instruction_category: "Electromagnetism"
  },
  {
    question_number: 13,
    question_text: "An electrical machine that converts electrical energy into mechanical energy using magnetic torque is an:",
    option_a: "Electric generator",
    option_b: "Electric motor",
    option_c: "Step-down transformer",
    option_d: "Induction coil",
    options: [
      "Electric generator",
      "Electric motor",
      "Step-down transformer",
      "Induction coil"
    ],
    correct_answer: "B",
    explanation: "An electric motor utilizes magnetic forces on a current-carrying armature coil in a magnetic field to generate continuous rotational torque, converting electrical input into mechanical work.",
    topic_name: "Electric Motors",
    instruction_category: "Electromagnetism"
  },
  {
    question_number: 14,
    question_text: "The phenomenon in which an electromotive force (EMF) is induced in a conductor by changing magnetic flux was discovered by:",
    option_a: "Isaac Newton",
    option_b: "James Prescott Joule",
    option_c: "Michael Faraday",
    option_d: "Blaise Pascal",
    options: [
      "Isaac Newton",
      "James Prescott Joule",
      "Michael Faraday",
      "Blaise Pascal"
    ],
    correct_answer: "C",
    explanation: "Michael Faraday discovered electromagnetic induction in 1831, formulating Faraday's Law: ε = -N (dΦ_B / dt).",
    topic_name: "Faraday's Law of Electromagnetic Induction",
    instruction_category: "Electromagnetism"
  },
  {
    question_number: 15,
    question_text: "A transformer operates on the principle of mutual electromagnetic induction to:",
    option_a: "Change the voltage of alternating current (AC)",
    option_b: "Convert AC into DC directly",
    option_c: "Store electrostatic charges",
    option_d: "Amplify direct current without voltage loss",
    options: [
      "Change the voltage of alternating current (AC)",
      "Convert AC into DC directly",
      "Store electrostatic charges",
      "Amplify direct current without voltage loss"
    ],
    correct_answer: "A",
    explanation: "A transformer transfers electrical energy between circuits via mutual inductive coupling, stepping AC voltage up or down according to the turns ratio: Vs / Vp = Ns / Np.",
    topic_name: "Transformers & Mutual Induction",
    instruction_category: "Electromagnetism"
  },
  {
    question_number: 16,
    question_text: "In a step-up transformer, which of the following relationships is correct regarding the primary (p) and secondary (s) coils?",
    option_a: "Ns < Np and Vs < Vp",
    option_b: "Ns > Np and Vs > Vp",
    option_c: "Ns = Np and Vs = Vp",
    option_d: "Is > Ip and Vs > Vp",
    options: [
      "Ns < Np and Vs < Vp",
      "Ns > Np and Vs > Vp",
      "Ns = Np and Vs = Vp",
      "Is > Ip and Vs > Vp"
    ],
    correct_answer: "B",
    explanation: "In a step-up transformer, the secondary winding has more turns than the primary winding (Ns > Np), producing a secondary voltage higher than primary voltage (Vs > Vp).",
    topic_name: "Step-Up vs Step-Down Transformers",
    instruction_category: "Electromagnetism"
  },
  {
    question_number: 17,
    question_text: "During wave propagation through a medium, what is actually transferred from one location to another?",
    option_a: "Energy and momentum without permanent displacement of matter",
    option_b: "Matter only",
    option_c: "Both matter and medium particles together",
    option_d: "Electrical charge only",
    options: [
      "Energy and momentum without permanent displacement of matter",
      "Matter only",
      "Both matter and medium particles together",
      "Electrical charge only"
    ],
    correct_answer: "A",
    explanation: "A wave is an oscillatory disturbance that propagates energy and momentum through space or a medium without transporting physical matter; medium particles oscillate about their equilibrium positions.",
    topic_name: "Nature & Characteristics of Waves",
    instruction_category: "Wave Motion & Optics"
  },
  {
    question_number: 18,
    question_text: "The distance between two consecutive in-phase points, such as two successive crests or troughs in a transverse wave, is called the:",
    option_a: "Amplitude",
    option_b: "Period",
    option_c: "Wavelength (λ)",
    option_d: "Frequency",
    options: ["Amplitude", "Period", "Wavelength (λ)", "Frequency"],
    correct_answer: "C",
    explanation: "Wavelength (λ) is defined as the spatial length of one complete wave cycle, measured between two successive identical points in phase (e.g. crest to crest).",
    topic_name: "Wave Parameters (Wavelength)",
    instruction_category: "Wave Motion"
  },
  {
    question_number: 19,
    question_text: "Which of the following fundamental equations relates wave speed (v), frequency (f), and wavelength (λ)?",
    option_a: "v = f / λ",
    option_b: "v = f · λ",
    option_c: "v = λ / f²",
    option_d: "v = f² · λ",
    options: ["v = f / λ", "v = f · λ", "v = λ / f²", "v = f² · λ"],
    correct_answer: "B",
    explanation: "Since speed = distance / time = λ / T and frequency f = 1/T, the universal wave equation is v = f·λ.",
    topic_name: "The Universal Wave Equation",
    instruction_category: "Wave Motion"
  },
  {
    question_number: 20,
    question_text: "Sound waves propagating through air are classified as:",
    option_a: "Longitudinal mechanical waves consisting of compressions and rarefactions",
    option_b: "Transverse electromagnetic waves",
    option_c: "Non-mechanical polarized waves",
    option_d: "Surface gravitational waves",
    options: [
      "Longitudinal mechanical waves consisting of compressions and rarefactions",
      "Transverse electromagnetic waves",
      "Non-mechanical polarized waves",
      "Surface gravitational waves"
    ],
    correct_answer: "A",
    explanation: "Sound waves in fluids and air propagate as longitudinal mechanical waves in which air molecules oscillate parallel to the direction of wave travel, creating alternating compressions and rarefactions.",
    topic_name: "Nature of Sound Waves",
    instruction_category: "Sound Waves"
  },
  {
    question_number: 21,
    question_text: "Through which of the following media does sound travel with the greatest speed?",
    option_a: "Air at 0 °C",
    option_b: "Water",
    option_c: "Vacuum",
    option_d: "Solids (such as steel)",
    options: [
      "Air at 0 °C",
      "Water",
      "Vacuum",
      "Solids (such as steel)"
    ],
    correct_answer: "D",
    explanation: "The speed of sound depends on medium elasticity and density (v = √(E/ρ)). In rigid solids like steel, high elastic modulus makes sound travel fastest (~5000 m/s), compared to ~1500 m/s in water and ~340 m/s in air. (Sound cannot travel in a vacuum).",
    topic_name: "Speed of Sound in Different Media",
    instruction_category: "Sound Waves"
  },
  {
    question_number: 22,
    question_text: "A distinct repetition of sound heard when a sound wave reflects from an obstacle at least 17 meters away with a time delay of at least 0.1 seconds is called an:",
    option_a: "Infrasound",
    option_b: "Interference",
    option_c: "Echo",
    option_d: "Refraction",
    options: ["Infrasound", "Interference", "Echo", "Refraction"],
    correct_answer: "C",
    explanation: "An echo is a reflected sound wave heard separately from original sound. The human ear has a persistence of hearing of 0.1 s; for v = 340 m/s, the obstacle must be at least d = (v·t)/2 = (340 × 0.1)/2 = 17 m away.",
    topic_name: "Echo & Reflection of Sound",
    instruction_category: "Sound Waves"
  },
  {
    question_number: 23,
    question_text: "The normal audible frequency range of hearing for a healthy young human ear is:",
    option_a: "1 Hz to 100 Hz",
    option_b: "20 Hz to 20,000 Hz (20 kHz)",
    option_c: "50 kHz to 100 kHz",
    option_d: "200 kHz to 1 MHz",
    options: [
      "1 Hz to 100 Hz",
      "20 Hz to 20,000 Hz (20 kHz)",
      "50 kHz to 100 kHz",
      "200 kHz to 1 MHz"
    ],
    correct_answer: "B",
    explanation: "The audible acoustic spectrum for humans spans roughly 20 Hz to 20,000 Hz (20 kHz).",
    topic_name: "Audible Range of Sound",
    instruction_category: "Sound Waves"
  },
  {
    question_number: 24,
    question_text: "Ultrasound refers to acoustic sound waves having frequencies:",
    option_a: "Greater than 20,000 Hz (20 kHz)",
    option_b: "Less than 20 Hz",
    option_c: "Between 20 Hz and 200 Hz",
    option_d: "Equal to electromagnetic light waves",
    options: [
      "Greater than 20,000 Hz (20 kHz)",
      "Less than 20 Hz",
      "Between 20 Hz and 200 Hz",
      "Equal to electromagnetic light waves"
    ],
    correct_answer: "A",
    explanation: "Ultrasound comprises high-frequency acoustic vibrations above 20 kHz, widely used in sonar, medical imaging (ultrasonography), and non-destructive testing.",
    topic_name: "Ultrasound & Applications",
    instruction_category: "Sound Waves"
  },
  {
    question_number: 25,
    question_text: "The apparent shift in observed frequency or pitch of a wave due to relative motion between the wave source and the observer is known as the:",
    option_a: "Compton effect",
    option_b: "Photoelectric effect",
    option_c: "Doppler effect",
    option_d: "Tyndall effect",
    options: [
      "Compton effect",
      "Photoelectric effect",
      "Doppler effect",
      "Tyndall effect"
    ],
    correct_answer: "C",
    explanation: "The Doppler effect describes the observed increase in frequency when a wave source approaches an observer and decrease in frequency when it recedes.",
    topic_name: "Doppler Effect",
    instruction_category: "Wave Motion & Sound"
  },
  {
    question_number: 26,
    question_text: "According to the fundamental laws of light reflection, the angle of incidence (θ_i) and angle of reflection (θ_r) measured from the normal are:",
    option_a: "Always equal (θ_i = θ_r)",
    option_b: "Complementary (θ_i + θ_r = 90°)",
    option_c: "Supplementary (θ_i + θ_r = 180°)",
    option_d: "Dependent on the color of light",
    options: [
      "Always equal (θ_i = θ_r)",
      "Complementary (θ_i + θ_r = 90°)",
      "Supplementary (θ_i + θ_r = 180°)",
      "Dependent on the color of light"
    ],
    correct_answer: "A",
    explanation: "The First Law of Reflection states that the angle of incidence equals the angle of reflection (θ_i = θ_r), and the incident ray, reflected ray, and normal all lie in the same geometric plane.",
    topic_name: "Laws of Reflection",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 27,
    question_text: "Which of the following sets of characteristics correctly describes the image formed of an object by a flat plane mirror?",
    option_a: "Real, inverted, magnified",
    option_b: "Real, upright, diminished",
    option_c: "Virtual, inverted, same size",
    option_d: "Virtual, upright, same size, and laterally inverted",
    options: [
      "Real, inverted, magnified",
      "Real, upright, diminished",
      "Virtual, inverted, same size",
      "Virtual, upright, same size, and laterally inverted"
    ],
    correct_answer: "D",
    explanation: "A plane mirror forms a virtual, erect (upright), equal-sized image located at the same distance behind the mirror as the object in front, showing lateral inversion (left-right reversal).",
    topic_name: "Image Formation in Plane Mirrors",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 28,
    question_text: "The focal length (f) of a spherical curved mirror of radius of curvature R is given by:",
    option_a: "f = 2 · R",
    option_b: "f = R / 2",
    option_c: "f = R² / 4",
    option_d: "f = √R",
    options: ["f = 2 · R", "f = R / 2", "f = R² / 4", "f = √R"],
    correct_answer: "B",
    explanation: "For paraxial rays reflecting from spherical mirrors, the principal focus is located midway between the vertex and center of curvature: f = R / 2.",
    topic_name: "Spherical Mirrors & Focal Length",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 29,
    question_text: "When an object is placed between the center of curvature (C) and principal focus (F) in front of a concave mirror, the resulting image is:",
    option_a: "Real, inverted, and magnified (larger than object)",
    option_b: "Real, upright, and diminished",
    option_c: "Virtual, inverted, and diminished",
    option_d: "Virtual, upright, and smaller",
    options: [
      "Real, inverted, and magnified (larger than object)",
      "Real, upright, and diminished",
      "Virtual, inverted, and diminished",
      "Virtual, upright, and smaller"
    ],
    correct_answer: "A",
    explanation: "For a concave mirror, when the object is between C and F, rays converge beyond C to produce a real, inverted, and magnified image (magnification |m| > 1).",
    topic_name: "Concave Mirror Ray Diagrams & Image Properties",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 30,
    question_text: "The change in direction (bending) of a light ray as it passes obliquely from one transparent medium into another of different optical density is caused by:",
    option_a: "Diffraction of light",
    option_b: "A change in the propagation speed of light in the two media (refraction)",
    option_c: "Polarization of light waves",
    option_d: "Total internal absorption",
    options: [
      "Diffraction of light",
      "A change in the propagation speed of light in the two media (refraction)",
      "Polarization of light waves",
      "Total internal absorption"
    ],
    correct_answer: "B",
    explanation: "Refraction is caused by the change in light velocity when crossing the boundary between media of differing refractive indices (n = c / v).",
    topic_name: "Refraction of Light & Wave Speed",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 31,
    question_text: "Snell’s law of refraction relating refractive indices n1, n2 and angles θ1, θ2 is written as:",
    option_a: "n1 · sin(θ1) = n2 · sin(θ2)",
    option_b: "n1 · cos(θ1) = n2 · cos(θ2)",
    option_c: "n1 / sin(θ1) = n2 / sin(θ2)",
    option_d: "sin(θ1) · sin(θ2) = n1 · n2",
    options: [
      "n1 · sin(θ1) = n2 · sin(θ2)",
      "n1 · cos(θ1) = n2 · cos(θ2)",
      "n1 / sin(θ1) = n2 / sin(θ2)",
      "sin(θ1) · sin(θ2) = n1 · n2"
    ],
    correct_answer: "A",
    explanation: "Snell's Law states that the product of the refractive index and the sine of the angle with the normal is conserved across optical boundaries: n1 sin θ1 = n2 sin θ2.",
    topic_name: "Snell's Law of Refraction",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 32,
    question_text: "Total internal reflection (TIR) occurs only when light:",
    option_a: "Travels from an optically less dense medium to a more dense medium at any angle",
    option_b: "Travels along the normal without bending",
    option_c: "Travels from an optically denser medium toward a rarer medium at an angle of incidence greater than the critical angle (θ_i > θ_c)",
    option_d: "Enters a vacuum at normal incidence",
    options: [
      "Travels from an optically less dense medium to a more dense medium at any angle",
      "Travels along the normal without bending",
      "Travels from an optically denser medium toward a rarer medium at an angle of incidence greater than the critical angle (θ_i > θ_c)",
      "Enters a vacuum at normal incidence"
    ],
    correct_answer: "C",
    explanation: "Two conditions are required for total internal reflection: 1) Light travels from denser medium (n1) to less dense medium (n2 < n1); 2) The angle of incidence exceeds the critical angle θ_c = arcsin(n2/n1).",
    topic_name: "Total Internal Reflection & Critical Angle",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 33,
    question_text: "A convex optical lens that is thicker in the middle than at its edges is commonly known as a:",
    option_a: "Converging lens",
    option_b: "Diverging lens",
    option_c: "Concave lens",
    option_d: "Plano-concave lens",
    options: [
      "Converging lens",
      "Diverging lens",
      "Concave lens",
      "Plano-concave lens"
    ],
    correct_answer: "A",
    explanation: "A convex lens refracts parallel incident rays toward a real focal point on the principal axis, acting as a converging lens.",
    topic_name: "Convex (Converging) Lenses",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 34,
    question_text: "What is the optical power (P) in diopters of a converging lens having a focal length f = +0.5 meters?",
    option_a: "+0.5 D",
    option_b: "+2.0 D",
    option_c: "+5.0 D",
    option_d: "-2.0 D",
    options: ["+0.5 D", "+2.0 D", "+5.0 D", "-2.0 D"],
    correct_answer: "B",
    explanation: "Optical power is the reciprocal of focal length measured in meters: P = 1 / f = 1 / 0.5 m = +2.0 Diopters (D).",
    topic_name: "Lens Power & Diopters",
    instruction_category: "Geometric Optics"
  },
  {
    question_number: 35,
    question_text: "The separation of composite white light into its constituent rainbow colors when passing through a triangular glass prism is known as:",
    option_a: "Diffraction",
    option_b: "Interference",
    option_c: "Dispersion",
    option_d: "Polarization",
    options: ["Diffraction", "Interference", "Dispersion", "Polarization"],
    correct_answer: "C",
    explanation: "Dispersion occurs because glass has a wavelength-dependent refractive index (n_violet > n_red), causing shorter violet wavelengths to refract more than longer red wavelengths.",
    topic_name: "Dispersion of Light",
    instruction_category: "Optics & Light"
  },
  {
    question_number: 36,
    question_text: "In the visible spectrum of sunlight, which color has the longest wavelength and suffers the least deviation upon passing through a prism?",
    option_a: "Red",
    option_b: "Violet",
    option_c: "Green",
    option_d: "Blue",
    options: ["Red", "Violet", "Green", "Blue"],
    correct_answer: "A",
    explanation: "Red light has the longest wavelength (~700 nm) in the visible spectrum, corresponding to the lowest frequency and smallest refractive index, undergoing the least angular deviation.",
    topic_name: "Visible Light Spectrum & Wavelengths",
    instruction_category: "Optics & Light"
  },
  {
    question_number: 37,
    question_text: "A person who can see nearby objects clearly but cannot focus on distant objects suffers from nearsightedness (myopia). This defect is corrected by wearing spectacles containing:",
    option_a: "Convex lenses",
    option_b: "Concave (diverging) lenses",
    option_c: "Cylindrical lenses only",
    option_d: "Bifocal lenses",
    options: [
      "Convex lenses",
      "Concave (diverging) lenses",
      "Cylindrical lenses only",
      "Bifocal lenses"
    ],
    correct_answer: "B",
    explanation: "In myopia, parallel rays from distant objects converge in front of the retina. A diverging (concave) lens diverges incident rays before they enter the eye, shifting the focal plane onto the retina.",
    topic_name: "Vision Defects & Corrective Lenses (Myopia)",
    instruction_category: "Optical Instruments & Vision"
  },
  {
    question_number: 38,
    question_text: "Thermal energy transfer through direct kinetic collisions between neighboring atoms and free electrons in a solid without macroscopic bulk movement of matter is:",
    option_a: "Conduction",
    option_b: "Convection",
    option_c: "Radiation",
    option_d: "Sublimation",
    options: ["Conduction", "Convection", "Radiation", "Sublimation"],
    correct_answer: "A",
    explanation: "Conduction is the mode of heat transfer in solids where thermal energy is conducted through lattice vibrations and free electron diffusion without bulk material translation.",
    topic_name: "Heat Transfer (Conduction)",
    instruction_category: "Thermal Physics"
  },
  {
    question_number: 39,
    question_text: "Heat transfer in fluids (liquids and gases) resulting from the actual upward and downward bulk motion of heated fluid of differing density is called:",
    option_a: "Conduction",
    option_b: "Convection",
    option_c: "Radiation",
    option_d: "Evaporation",
    options: ["Conduction", "Convection", "Radiation", "Evaporation"],
    correct_answer: "B",
    explanation: "Convection involves the bulk movement of fluid packets driven by buoyancy differences when warmer fluid expands, decreases in density, and rises, setting up convective currents.",
    topic_name: "Heat Transfer (Convection)",
    instruction_category: "Thermal Physics"
  },
  {
    question_number: 40,
    question_text: "Thermal energy transmitted through empty vacuum in the form of electromagnetic waves (infrared rays) is termed:",
    option_a: "Conduction",
    option_b: "Convection",
    option_c: "Radiation",
    option_d: "Condensation",
    options: ["Conduction", "Convection", "Radiation", "Condensation"],
    correct_answer: "C",
    explanation: "Thermal radiation does not require any material medium, transferring energy across vacuum via electromagnetic waves traveling at the speed of light.",
    topic_name: "Heat Transfer (Radiation)",
    instruction_category: "Thermal Physics"
  },
  {
    question_number: 41,
    question_text: "The quantity of heat Q required to raise the temperature of a mass m of a substance having specific heat capacity c by ΔT is calculated by:",
    option_a: "Q = m · c · ΔT",
    option_b: "Q = m · c / ΔT",
    option_c: "Q = c · ΔT / m",
    option_d: "Q = m² · c · ΔT",
    options: [
      "Q = m · c · ΔT",
      "Q = m · c / ΔT",
      "Q = c · ΔT / m",
      "Q = m² · c · ΔT"
    ],
    correct_answer: "A",
    explanation: "The calorimetric heat formula is Q = m c ΔT, where m is mass (kg), c is specific heat capacity (J/(kg·K)), and ΔT is the temperature change.",
    topic_name: "Specific Heat Capacity & Calorimetry",
    instruction_category: "Thermal Physics"
  },
  {
    question_number: 42,
    question_text: "The latent heat of fusion (L_f) of a substance is defined as the amount of heat energy required to:",
    option_a: "Raise the temperature of 1 kg of liquid by 1 °C",
    option_b: "Convert 1 kg of liquid into gas at boiling point",
    option_c: "Burn 1 kg of fuel completely",
    option_d: "Change 1 kg of solid into liquid at its melting point without change in temperature",
    options: [
      "Raise the temperature of 1 kg of liquid by 1 °C",
      "Convert 1 kg of liquid into gas at boiling point",
      "Burn 1 kg of fuel completely",
      "Change 1 kg of solid into liquid at its melting point without change in temperature"
    ],
    correct_answer: "D",
    explanation: "Latent heat of fusion is the thermal energy per unit mass required to transition a substance from solid to liquid phase at its constant melting temperature (Q = m L_f).",
    topic_name: "Latent Heat of Fusion",
    instruction_category: "Thermal Physics"
  },
  {
    question_number: 43,
    question_text: "The First Law of Thermodynamics (ΔU = Q - W) is a direct consequence of which universal law of physics?",
    option_a: "Law of conservation of momentum",
    option_b: "Law of conservation of energy",
    option_c: "Law of universal gravitation",
    option_d: "Coulomb's Law",
    options: [
      "Law of conservation of momentum",
      "Law of conservation of energy",
      "Law of universal gravitation",
      "Coulomb's Law"
    ],
    correct_answer: "B",
    explanation: "The First Law of Thermodynamics states that energy cannot be created or destroyed, only transformed between internal energy (ΔU), heat transferred to the system (Q), and work done by the system (W).",
    topic_name: "First Law of Thermodynamics",
    instruction_category: "Thermal Physics & Thermodynamics"
  },
  {
    question_number: 44,
    question_text: "The thermal efficiency (η) of a heat engine that absorbs heat Q_H from a hot reservoir and discharges waste heat Q_C to a cold sink while producing mechanical work W is:",
    option_a: "η = (W / Q_H) = 1 - (Q_C / Q_H)",
    option_b: "η = Q_C / Q_H",
    option_c: "η = Q_H / W",
    option_d: "η = 1 + (Q_C / Q_H)",
    options: [
      "η = (W / Q_H) = 1 - (Q_C / Q_H)",
      "η = Q_C / Q_H",
      "η = Q_H / W",
      "η = 1 + (Q_C / Q_H)"
    ],
    correct_answer: "A",
    explanation: "Thermal efficiency is the ratio of useful net work output W to total heat input Q_H: η = W / Q_H = (Q_H - Q_C) / Q_H = 1 - (Q_C / Q_H).",
    topic_name: "Heat Engine Efficiency",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 45,
    question_text: "Infrasound refers to acoustic sound waves having frequencies:",
    option_a: "Below 20 Hz, which are inaudible to human ears but detected by elephants and seismic sensors",
    option_b: "Above 20,000 Hz",
    option_c: "Between 1000 Hz and 5000 Hz",
    option_d: "Equal to ultrasonic waves",
    options: [
      "Below 20 Hz, which are inaudible to human ears but detected by elephants and seismic sensors",
      "Above 20,000 Hz",
      "Between 1000 Hz and 5000 Hz",
      "Equal to ultrasonic waves"
    ],
    correct_answer: "A",
    explanation: "Infrasound consists of low-frequency sound vibrations below 20 Hz, produced by seismic activity, volcanoes, ocean waves, and large animals (elephants, whales).",
    topic_name: "Infrasound Waves",
    instruction_category: "Sound Waves"
  }
];

module.exports = questions;
