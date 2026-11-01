/**
 * Grade 11 Physics Final Exam for Special and Boarding Schools, Academic Year 2016/2024
 * 50 Questions extracted directly from the official examination paper with detailed physics derivations and fundamental principles.
 */

const questions = [
  {
    question_number: 1,
    question_text: "Which of the following is correct for a body moving along a straight line with uniform (constant) acceleration?",
    option_a: "Its velocity remains constant over time",
    option_b: "Its velocity changes linearly with time (v = v₀ + at)",
    option_c: "Its displacement is directly proportional to time (s ∝ t)",
    option_d: "Its acceleration increases linearly with time",
    options: [
      "Its velocity remains constant over time",
      "Its velocity changes linearly with time (v = v₀ + at)",
      "Its displacement is directly proportional to time (s ∝ t)",
      "Its acceleration increases linearly with time"
    ],
    correct_answer: "B",
    explanation: "For uniformly accelerated linear motion, the velocity equation is v(t) = v₀ + at, which shows that velocity is a linear function of time with a constant slope equal to acceleration.",
    topic_name: "Kinematics in One Dimension",
    instruction_category: "Mechanics"
  },
  {
    question_number: 2,
    question_text: "Which one of the following physical quantities is NOT a vector quantity?",
    option_a: "Linear momentum",
    option_b: "Electric field intensity",
    option_c: "Kinetic energy",
    option_d: "Gravitational force",
    options: [
      "Linear momentum",
      "Electric field intensity",
      "Kinetic energy",
      "Gravitational force"
    ],
    correct_answer: "C",
    explanation: "Kinetic energy (KE = 1/2 mv²) is a scalar quantity possessing magnitude only, with no spatial direction. Momentum, electric field, and gravitational force are vector quantities.",
    topic_name: "Vectors and Scalars",
    instruction_category: "Vector Mechanics"
  },
  {
    question_number: 3,
    question_text: "A force vector of magnitude 10 N makes an angle of 60° with the positive x-axis. What are its rectangular x and y components?",
    option_a: "Fx = 8.66 N, Fy = 5.00 N",
    option_b: "Fx = 5.00 N, Fy = 8.66 N",
    option_c: "Fx = 10.0 N, Fy = 10.0 N",
    option_d: "Fx = 7.07 N, Fy = 7.07 N",
    options: [
      "Fx = 8.66 N, Fy = 5.00 N",
      "Fx = 5.00 N, Fy = 8.66 N",
      "Fx = 10.0 N, Fy = 10.0 N",
      "Fx = 7.07 N, Fy = 7.07 N"
    ],
    correct_answer: "B",
    explanation: "Fx = F * cos(60°) = 10 * 0.5 = 5.0 N.\nFy = F * sin(60°) = 10 * (√3 / 2) = 10 * 0.866 = 8.66 N.",
    topic_name: "Vector Resolution",
    instruction_category: "Vector Mechanics"
  },
  {
    question_number: 4,
    question_text: "Find a unit vector perpendicular to both vectors A = 2i + j - k and B = i - j + 2k.",
    option_a: "(i - 5j - 3k) / √35",
    option_b: "(i + 5j + 3k) / √35",
    option_c: "(3i - j + k) / √11",
    option_d: "(2i - 3j + 4k) / √29",
    options: [
      "(i - 5j - 3k) / √35",
      "(i + 5j + 3k) / √35",
      "(3i - j + k) / √11",
      "(2i - 3j + 4k) / √29"
    ],
    correct_answer: "A",
    explanation: "The cross product A × B is perpendicular to both A and B:\nA × B = |i  j  k; 2  1 -1; 1 -1  2| = i(2 - 1) - j(4 - (-1)) + k(-2 - 1) = i - 5j - 3k.\nMagnitude = √(1² + (-5)² + (-3)²) = √(1 + 25 + 9) = √35.\nUnit vector = (i - 5j - 3k) / √35.",
    topic_name: "Vector Cross Products & Unit Vectors",
    instruction_category: "Vector Mechanics"
  },
  {
    question_number: 5,
    question_text: "The velocity vector of a particle is given by v = (3i + 4j) m/s. What is the angle made by the velocity vector with the positive x-axis?",
    option_a: "53.1°",
    option_b: "36.9°",
    option_c: "45.0°",
    option_d: "60.0°",
    options: ["53.1°", "36.9°", "45.0°", "60.0°"],
    correct_answer: "A",
    explanation: "tan(θ) = vy / vx = 4 / 3 ≈ 1.3333.\nθ = arctan(4/3) ≈ 53.13°.",
    topic_name: "Kinematic Vectors",
    instruction_category: "Kinematics"
  },
  {
    question_number: 6,
    question_text: "A car travels the first 60 km of its journey at an average speed of 30 km/h, and the next 60 km at an average speed of 60 km/h. What is the average speed of the car for the entire 120 km trip?",
    option_a: "45 km/h",
    option_b: "50 km/h",
    option_c: "40 km/h",
    option_d: "35 km/h",
    options: ["45 km/h", "50 km/h", "40 km/h", "35 km/h"],
    correct_answer: "C",
    explanation: "Total distance = 60 + 60 = 120 km.\nTime for first segment = 60 km / (30 km/h) = 2 hours.\nTime for second segment = 60 km / (60 km/h) = 1 hour.\nTotal time = 2 + 1 = 3 hours.\nAverage speed = Total distance / Total time = 120 km / 3 h = 40 km/h.",
    topic_name: "Average Speed & Kinematics",
    instruction_category: "Kinematics"
  },
  {
    question_number: 7,
    question_text: "A stone is thrown vertically upward with an initial velocity of 20 m/s from ground level. Taking g = 10 m/s², what is the maximum height attained by the stone?",
    option_a: "40 m",
    option_b: "20 m",
    option_c: "10 m",
    option_d: "80 m",
    options: ["40 m", "20 m", "10 m", "80 m"],
    correct_answer: "B",
    explanation: "At maximum height, vertical velocity v = 0.\nUsing v² = u² - 2gh: 0 = (20)² - 2(10)h ⇒ 20h = 400 ⇒ h = 20 m.",
    topic_name: "Free Fall & Vertical Projectiles",
    instruction_category: "Kinematics"
  },
  {
    question_number: 8,
    question_text: "A displacement-time graph for a moving particle is a parabola opening downwards (concave downward). This indicates that the particle is moving with:",
    option_a: "Zero velocity",
    option_b: "Constant positive velocity",
    option_c: "Positive uniform acceleration",
    option_d: "Negative acceleration (deceleration/retardation)",
    options: [
      "Zero velocity",
      "Constant positive velocity",
      "Positive uniform acceleration",
      "Negative acceleration (deceleration/retardation)"
    ],
    correct_answer: "D",
    explanation: "The second derivative of displacement with respect to time represents acceleration (a = d²s/dt²). A concave downward curve has a negative second derivative, indicating negative acceleration.",
    topic_name: "Graphical Analysis of Motion",
    instruction_category: "Kinematics"
  },
  {
    question_number: 9,
    question_text: "A projectile is launched from ground level with an initial velocity of 40 m/s at an angle of 30° above the horizontal. Taking g = 10 m/s², what is its horizontal range?",
    option_a: "138.6 m",
    option_b: "80.0 m",
    option_c: "160.0 m",
    option_d: "69.3 m",
    options: ["138.6 m", "80.0 m", "160.0 m", "69.3 m"],
    correct_answer: "A",
    explanation: "Horizontal Range R = (u² * sin(2θ)) / g = (40² * sin(2 * 30°)) / 10 = (1600 * sin(60°)) / 10 = 160 * (√3 / 2) = 80√3 ≈ 138.56 m.",
    topic_name: "Projectile Motion - Horizontal Range",
    instruction_category: "Two-Dimensional Kinematics"
  },
  {
    question_number: 10,
    question_text: "At the peak (highest point) of a projectile's parabolic trajectory (neglecting air resistance):",
    option_a: "Both velocity and acceleration are zero",
    option_b: "The velocity is purely horizontal (non-zero) and the acceleration is directed downward (g)",
    option_c: "The velocity is zero and the acceleration is g downward",
    option_d: "The acceleration is zero and velocity is maximum",
    options: [
      "Both velocity and acceleration are zero",
      "The velocity is purely horizontal (non-zero) and the acceleration is directed downward (g)",
      "The velocity is zero and the acceleration is g downward",
      "The acceleration is zero and velocity is maximum"
    ],
    correct_answer: "B",
    explanation: "At the peak of projectile flight, the vertical velocity component vy = 0, but the horizontal velocity component vx = u * cos(θ) remains unchanged and non-zero. The gravitational acceleration g remains constant and directed vertically downward.",
    topic_name: "Projectile Motion Mechanics",
    instruction_category: "Two-Dimensional Kinematics"
  },
  {
    question_number: 11,
    question_text: "A particle executes uniform circular motion of radius r with constant speed v. The acceleration of the particle is:",
    option_a: "Zero because the speed is constant",
    option_b: "v² / r, directed radially toward the center of the circular path",
    option_c: "v² / r, directed tangentially along the velocity vector",
    option_d: "v / r², directed away from the center",
    options: [
      "Zero because the speed is constant",
      "v² / r, directed radially toward the center of the circular path",
      "v² / r, directed tangentially along the velocity vector",
      "v / r², directed away from the center"
    ],
    correct_answer: "B",
    explanation: "Even though speed is constant, the continuous change in velocity direction produces a centripetal acceleration a_c = v²/r directed towards the center of curvature.",
    topic_name: "Uniform Circular Motion",
    instruction_category: "Circular Motion"
  },
  {
    question_number: 12,
    question_text: "A racing car travels around a circular track of radius 100 m at a constant speed of 20 m/s. What is the angular velocity of the car?",
    option_a: "0.2 rad/s",
    option_b: "5.0 rad/s",
    option_c: "2.0 rad/s",
    option_d: "2000 rad/s",
    options: ["0.2 rad/s", "5.0 rad/s", "2.0 rad/s", "2000 rad/s"],
    correct_answer: "A",
    explanation: "Linear speed v = r * ω ⇒ ω = v / r = (20 m/s) / (100 m) = 0.2 rad/s.",
    topic_name: "Angular Velocity",
    instruction_category: "Circular Motion"
  },
  {
    question_number: 13,
    question_text: "Newton’s First Law of Motion provides the fundamental physical definition of:",
    option_a: "Inertia",
    option_b: "Mechanical work",
    option_c: "Kinetic energy",
    option_d: "Power",
    options: ["Inertia", "Mechanical work", "Kinetic energy", "Power"],
    correct_answer: "A",
    explanation: "Newton's First Law (Law of Inertia) states that an object persists in its state of rest or uniform motion unless acted upon by an external net force, establishing inertia as an inherent property of mass.",
    topic_name: "Newton's Laws of Motion",
    instruction_category: "Dynamics"
  },
  {
    question_number: 14,
    question_text: "A 5 kg block is pulled along a rough horizontal surface by a constant horizontal force of 20 N. If the coefficient of kinetic friction μ_k = 0.2 and g = 10 m/s², what is the acceleration of the block?",
    option_a: "2.0 m/s²",
    option_b: "4.0 m/s²",
    option_c: "1.0 m/s²",
    option_d: "3.0 m/s²",
    options: ["2.0 m/s²", "4.0 m/s²", "1.0 m/s²", "3.0 m/s²"],
    correct_answer: "A",
    explanation: "Normal force N = mg = 5 * 10 = 50 N.\nFriction force f_k = μ_k * N = 0.2 * 50 = 10 N.\nNet horizontal force F_net = F_pull - f_k = 20 - 10 = 10 N.\nAcceleration a = F_net / m = 10 N / 5 kg = 2.0 m/s².",
    topic_name: "Friction & Newton's Second Law",
    instruction_category: "Dynamics"
  },
  {
    question_number: 15,
    question_text: "A person of mass 60 kg stands on a weighing scale inside an elevator that is accelerating upward at a rate of 2.0 m/s². Taking g = 9.8 m/s², what is the reading on the scale (apparent weight)?",
    option_a: "588 N",
    option_b: "468 N",
    option_c: "708 N",
    option_d: "600 N",
    options: ["588 N", "468 N", "708 N", "600 N"],
    correct_answer: "C",
    explanation: "When accelerating upward: N - mg = ma ⇒ N = m(g + a) = 60(9.8 + 2.0) = 60(11.8) = 708 N.",
    topic_name: "Apparent Weight in Non-Inertial Frames",
    instruction_category: "Dynamics"
  },
  {
    question_number: 16,
    question_text: "According to Newton’s Third Law of Motion, action and reaction forces:",
    option_a: "Act on the same body and cancel each other to maintain equilibrium",
    option_b: "Act on two different bodies and therefore never cancel each other out",
    option_c: "Act in the same direction with equal magnitudes",
    option_d: "Occur consecutively at different instances of time",
    options: [
      "Act on the same body and cancel each other to maintain equilibrium",
      "Act on two different bodies and therefore never cancel each other out",
      "Act in the same direction with equal magnitudes",
      "Occur consecutively at different instances of time"
    ],
    correct_answer: "B",
    explanation: "Action-reaction pairs act simultaneously on distinct interacting bodies (Body A on Body B, and Body B on Body A), so they never cancel each other on a single isolated free-body diagram.",
    topic_name: "Newton's Third Law",
    instruction_category: "Dynamics"
  },
  {
    question_number: 17,
    question_text: "A 2 kg object moves with a velocity of v = (4i - 3j) m/s. What is the magnitude of its linear momentum?",
    option_a: "5 kg·m/s",
    option_b: "10 kg·m/s",
    option_c: "14 kg·m/s",
    option_d: "7 kg·m/s",
    options: ["5 kg·m/s", "10 kg·m/s", "14 kg·m/s", "7 kg·m/s"],
    correct_answer: "B",
    explanation: "Speed |v| = √(4² + (-3)²) = √(16 + 9) = √25 = 5 m/s.\nMagnitude of momentum p = m * |v| = 2 kg * 5 m/s = 10 kg·m/s.",
    topic_name: "Linear Momentum",
    instruction_category: "Impulse and Momentum"
  },
  {
    question_number: 18,
    question_text: "The impulse delivered to an object by a net force is mathematically equal to:",
    option_a: "The rate of change of momentum",
    option_b: "The kinetic energy acquired",
    option_c: "The change in linear momentum of the object (Δp)",
    option_d: "The total mechanical power",
    options: [
      "The rate of change of momentum",
      "The kinetic energy acquired",
      "The change in linear momentum of the object (Δp)",
      "The total mechanical power"
    ],
    correct_answer: "C",
    explanation: "By the Impulse-Momentum Theorem, Impulse J = ∫ F dt = Δp = p_final - p_initial.",
    topic_name: "Impulse-Momentum Theorem",
    instruction_category: "Impulse and Momentum"
  },
  {
    question_number: 19,
    question_text: "A gun of mass 4 kg fires a bullet of mass 0.02 kg with a muzzle velocity of 400 m/s. What is the recoil velocity of the gun?",
    option_a: "-2.0 m/s",
    option_b: "-4.0 m/s",
    option_c: "-0.5 m/s",
    option_d: "-8.0 m/s",
    options: ["-2.0 m/s", "-4.0 m/s", "-0.5 m/s", "-8.0 m/s"],
    correct_answer: "A",
    explanation: "By conservation of momentum: p_initial = 0 = M_gun * V_recoil + m_bullet * v_bullet.\n4 * V_recoil + (0.02 * 400) = 0 ⇒ 4 * V_recoil + 8 = 0 ⇒ V_recoil = -8 / 4 = -2.0 m/s.",
    topic_name: "Conservation of Linear Momentum (Recoil)",
    instruction_category: "Impulse and Momentum"
  },
  {
    question_number: 20,
    question_text: "In an ideal elastic collision between two particles in an isolated system:",
    option_a: "Both total kinetic energy and total linear momentum are conserved",
    option_b: "Total kinetic energy is conserved but momentum is not conserved",
    option_c: "Total linear momentum is conserved but kinetic energy is lost as heat",
    option_d: "Neither momentum nor kinetic energy is conserved",
    options: [
      "Both total kinetic energy and total linear momentum are conserved",
      "Total kinetic energy is conserved but momentum is not conserved",
      "Total linear momentum is conserved but kinetic energy is lost as heat",
      "Neither momentum nor kinetic energy is conserved"
    ],
    correct_answer: "A",
    explanation: "By definition, an elastic collision preserves both total linear momentum and total kinetic energy (with zero mechanical energy dissipation into heat or permanent deformation).",
    topic_name: "Elastic Collisions",
    instruction_category: "Impulse and Momentum"
  },
  {
    question_number: 21,
    question_text: "What is the work done by the gravitational force on an artificial satellite of mass m orbiting the Earth in a stable circular orbit of radius R?",
    option_a: "2πR * mg",
    option_b: "G * M * m / R",
    option_c: "1/2 mv²",
    option_d: "Zero",
    options: ["2πR * mg", "G * M * m / R", "1/2 mv²", "Zero"],
    correct_answer: "D",
    explanation: "In a circular orbit, the gravitational force acts perpendicular to the instantaneous displacement vector (θ = 90°). Thus, Work W = F · ds = F ds cos(90°) = 0 J.",
    topic_name: "Work Done by Central Forces",
    instruction_category: "Work, Energy, and Power"
  },
  {
    question_number: 22,
    question_text: "A constant force F = (3i + 4j - 2k) N acts on a body displacing it from position r₁ = (i + 2j) m to r₂ = (4i + 6j + 3k) m. The work done by the force is:",
    option_a: "25 J",
    option_b: "19 J",
    option_c: "31 J",
    option_d: "15 J",
    options: ["25 J", "19 J", "31 J", "15 J"],
    correct_answer: "B",
    explanation: "Displacement Δr = r₂ - r₁ = (4-1)i + (6-2)j + (3-0)k = 3i + 4j + 3k.\nWork W = F · Δr = (3)(3) + (4)(4) + (-2)(3) = 9 + 16 - 6 = 19 J.",
    topic_name: "Work Calculation via Dot Product",
    instruction_category: "Work, Energy, and Power"
  },
  {
    question_number: 23,
    question_text: "The Work-Energy Theorem states that:",
    option_a: "Work done is equal to the rate of change of potential energy",
    option_b: "Total mechanical energy is always zero",
    option_c: "The net work done by all forces on an object equals the change in its kinetic energy (W_net = ΔKE)",
    option_d: "Work done is equal to power multiplied by acceleration",
    options: [
      "Work done is equal to the rate of change of potential energy",
      "Total mechanical energy is always zero",
      "The net work done by all forces on an object equals the change in its kinetic energy (W_net = ΔKE)",
      "Work done is equal to power multiplied by acceleration"
    ],
    correct_answer: "C",
    explanation: "The Work-Energy Theorem rigorously establishes that the net work performed by all conservative and non-conservative forces acting on a particle equals its change in kinetic energy: W_net = 1/2 mv_f² - 1/2 mv_i².",
    topic_name: "Work-Energy Theorem",
    instruction_category: "Work, Energy, and Power"
  },
  {
    question_number: 24,
    question_text: "An ideal spring with spring constant k = 200 N/m is compressed by 0.1 m from its equilibrium position. What is the elastic potential energy stored in the spring?",
    option_a: "1.0 J",
    option_b: "2.0 J",
    option_c: "10.0 J",
    option_d: "20.0 J",
    options: ["1.0 J", "2.0 J", "10.0 J", "20.0 J"],
    correct_answer: "A",
    explanation: "PE_elastic = 1/2 k x² = 0.5 * (200 N/m) * (0.1 m)² = 100 * 0.01 = 1.0 J.",
    topic_name: "Elastic Potential Energy",
    instruction_category: "Work, Energy, and Power"
  },
  {
    question_number: 25,
    question_text: "An electric motor applies a constant pulling force of 50 N to move a conveyor belt at a constant speed of 4.0 m/s. What is the power output of the motor?",
    option_a: "12.5 W",
    option_b: "100 W",
    option_c: "200 W",
    option_d: "400 W",
    options: ["12.5 W", "100 W", "200 W", "400 W"],
    correct_answer: "C",
    explanation: "Power P = F · v = 50 N * 4.0 m/s = 200 W.",
    topic_name: "Mechanical Power",
    instruction_category: "Work, Energy, and Power"
  },
  {
    question_number: 26,
    question_text: "For a uniform, symmetrical rigid body with uniform mass density (such as a solid sphere or uniform rod), its center of mass:",
    option_a: "Always lies outside the physical body",
    option_b: "Coincides with its geometric center (centroid)",
    option_c: "Shifts continuously with velocity",
    option_d: "Depends on external gravity",
    options: [
      "Always lies outside the physical body",
      "Coincides with its geometric center (centroid)",
      "Shifts continuously with velocity",
      "Depends on external gravity"
    ],
    correct_answer: "B",
    explanation: "For any homogeneous rigid body possessing geometric symmetry, the center of mass coincides exactly with its centroid/geometric center.",
    topic_name: "Center of Mass",
    instruction_category: "Rotational Dynamics"
  },
  {
    question_number: 27,
    question_text: "What is the moment of inertia of a uniform solid cylinder of mass M and radius R about its central longitudinal cylinder axis?",
    option_a: "1/2 M R²",
    option_b: "M R²",
    option_c: "2/5 M R²",
    option_d: "1/12 M R²",
    options: ["1/2 M R²", "M R²", "2/5 M R²", "1/12 M R²"],
    correct_answer: "A",
    explanation: "Integrating concentric cylindrical shells yields I = 1/2 M R² for a solid cylinder (identical to a solid uniform disk).",
    topic_name: "Moment of Inertia",
    instruction_category: "Rotational Dynamics"
  },
  {
    question_number: 28,
    question_text: "Torque (τ) exerted by a force F acting at a position r relative to a pivot point is defined as:",
    option_a: "τ = r · F (scalar product)",
    option_b: "τ = r × F (vector cross product)",
    option_c: "τ = F / r",
    option_d: "τ = 1/2 r F²",
    options: [
      "τ = r · F (scalar product)",
      "τ = r × F (vector cross product)",
      "τ = F / r",
      "τ = 1/2 r F²"
    ],
    correct_answer: "B",
    explanation: "Torque is a pseudo-vector defined by the cross product τ = r × F, with magnitude τ = r F sin(θ).",
    topic_name: "Torque & Rotational Mechanics",
    instruction_category: "Rotational Dynamics"
  },
  {
    question_number: 29,
    question_text: "A wheel of radius 0.5 m accelerates uniformly from rest to an angular speed of 120 rpm in 10 seconds. What is the tangential acceleration of a point on the rim?",
    option_a: "0.628 m/s²",
    option_b: "1.256 m/s²",
    option_c: "3.14 m/s²",
    option_d: "0.314 m/s²",
    options: ["0.628 m/s²", "1.256 m/s²", "3.14 m/s²", "0.314 m/s²"],
    correct_answer: "A",
    explanation: "Final angular velocity ω = 120 rev/min * (2π rad / 1 rev) * (1 min / 60 s) = 4π rad/s ≈ 12.566 rad/s.\nAngular acceleration α = (ω - ω₀) / t = (4π - 0) / 10 = 0.4π rad/s².\nTangential acceleration a_t = r * α = 0.5 m * 0.4π rad/s² = 0.2π ≈ 0.628 m/s².",
    topic_name: "Rotational Kinematics",
    instruction_category: "Rotational Dynamics"
  },
  {
    question_number: 30,
    question_text: "According to the Law of Conservation of Angular Momentum:",
    option_a: "If the net external torque acting on a system is zero, its total angular momentum remains constant (L = Iω = const)",
    option_b: "Angular momentum is conserved only when moment of inertia is constant",
    option_c: "Angular momentum is conserved only in the presence of gravitational torque",
    option_d: "Linear momentum and angular momentum are always equal",
    options: [
      "If the net external torque acting on a system is zero, its total angular momentum remains constant (L = Iω = const)",
      "Angular momentum is conserved only when moment of inertia is constant",
      "Angular momentum is conserved only in the presence of gravitational torque",
      "Linear momentum and angular momentum are always equal"
    ],
    correct_answer: "A",
    explanation: "Because τ_net = dL/dt, when the net external torque τ_ext = 0, the total angular momentum vector L remains strictly invariant in time.",
    topic_name: "Conservation of Angular Momentum",
    instruction_category: "Rotational Dynamics"
  },
  {
    question_number: 31,
    question_text: "The two necessary and sufficient conditions for complete static equilibrium of a rigid body are:",
    option_a: "Σ F = 0 only",
    option_b: "Σ τ = 0 only",
    option_c: "Constant linear acceleration and zero angular speed",
    option_d: "Σ F = 0 (translational equilibrium) and Σ τ = 0 (rotational equilibrium)",
    options: [
      "Σ F = 0 only",
      "Σ τ = 0 only",
      "Constant linear acceleration and zero angular speed",
      "Σ F = 0 (translational equilibrium) and Σ τ = 0 (rotational equilibrium)"
    ],
    correct_answer: "D",
    explanation: "Static equilibrium requires both zero resultant force (no linear acceleration) and zero resultant torque about any pivot point (no angular acceleration).",
    topic_name: "Static Equilibrium of Rigid Bodies",
    instruction_category: "Statics"
  },
  {
    question_number: 32,
    question_text: "A uniform horizontal beam of length 4.0 m and weight 200 N is supported at both ends. A concentrated load of 100 N is placed 1.0 m from the left support. What is the upward reaction force at the left support?",
    option_a: "125 N",
    option_b: "150 N",
    option_c: "175 N",
    option_d: "225 N",
    options: ["125 N", "150 N", "175 N", "225 N"],
    correct_answer: "C",
    explanation: "Beam weight (200 N) acts at center of gravity (2.0 m from left).\nTaking torque about the right support:\n(R_left * 4.0) - (100 N * 3.0 m) - (200 N * 2.0 m) = 0\n4.0 R_left = 300 + 400 = 700 ⇒ R_left = 700 / 4 = 175 N.",
    topic_name: "Equilibrium & Torques in Beams",
    instruction_category: "Statics"
  },
  {
    question_number: 33,
    question_text: "In elasticity, mechanical stress is defined as:",
    option_a: "Change in length per unit original length",
    option_b: "Internal restoring force per unit cross-sectional area (F / A)",
    option_c: "Total force multiplied by elongation",
    option_d: "The ratio of shear strain to volume strain",
    options: [
      "Change in length per unit original length",
      "Internal restoring force per unit cross-sectional area (F / A)",
      "Total force multiplied by elongation",
      "The ratio of shear strain to volume strain"
    ],
    correct_answer: "B",
    explanation: "Stress σ = F / A, measured in Pascals (N/m²), representing the internal restoring force distributed over unit area.",
    topic_name: "Stress and Strain",
    instruction_category: "Elasticity"
  },
  {
    question_number: 34,
    question_text: "Hooke’s Law for an elastic material states that:",
    option_a: "Within the proportional/elastic limit, stress is directly proportional to strain (σ ∝ ε)",
    option_b: "Stress is inversely proportional to strain",
    option_c: "Strain is proportional to the square of stress",
    option_d: "Deformation is permanent for any applied load",
    options: [
      "Within the proportional/elastic limit, stress is directly proportional to strain (σ ∝ ε)",
      "Stress is inversely proportional to strain",
      "Strain is proportional to the square of stress",
      "Deformation is permanent for any applied load"
    ],
    correct_answer: "A",
    explanation: "Robert Hooke discovered that for small deformations below the elastic limit, stress is linearly proportional to strain: σ = E * ε.",
    topic_name: "Hooke's Law",
    instruction_category: "Elasticity"
  },
  {
    question_number: 35,
    question_text: "Young’s Modulus of elasticity (Y) for a tensile wire is given by:",
    option_a: "(F · L₀) / (A · ΔL)",
    option_b: "(F · ΔL) / (A · L₀)",
    option_c: "(A · ΔL) / (F · L₀)",
    option_d: "(F · A) / (L₀ · ΔL)",
    options: [
      "(F · L₀) / (A · ΔL)",
      "(F · ΔL) / (A · L₀)",
      "(A · ΔL) / (F · L₀)",
      "(F · A) / (L₀ · ΔL)"
    ],
    correct_answer: "A",
    explanation: "Young's Modulus Y = Tensile Stress / Tensile Strain = (F / A) / (ΔL / L₀) = (F * L₀) / (A * ΔL).",
    topic_name: "Young's Modulus",
    instruction_category: "Elasticity"
  },
  {
    question_number: 36,
    question_text: "What is the absolute hydrostatic pressure at a depth of 10 m in pure water (ρ = 1000 kg/m³, g = 10 m/s², atmospheric pressure P_atm = 1.0 × 10⁵ Pa)?",
    option_a: "1.0 × 10⁵ Pa",
    option_b: "2.0 × 10⁵ Pa",
    option_c: "3.0 × 10⁵ Pa",
    option_d: "1.5 × 10⁵ Pa",
    options: [
      "1.0 × 10⁵ Pa",
      "2.0 × 10⁵ Pa",
      "3.0 × 10⁵ Pa",
      "1.5 × 10⁵ Pa"
    ],
    correct_answer: "B",
    explanation: "Gauge pressure P_gauge = ρgh = 1000 * 10 * 10 = 1.0 × 10⁵ Pa.\nAbsolute pressure P = P_atm + P_gauge = 1.0 × 10⁵ + 1.0 × 10⁵ = 2.0 × 10⁵ Pa.",
    topic_name: "Fluid Pressure & Hydrostatics",
    instruction_category: "Fluid Mechanics"
  },
  {
    question_number: 37,
    question_text: "According to Archimedes’ Principle, the buoyant force exerted on a submerged body is equal to:",
    option_a: "The weight of the fluid displaced by the body",
    option_b: "The total weight of the submerged body",
    option_c: "The surface area of the submerged body",
    option_d: "The atmospheric pressure at the surface",
    options: [
      "The weight of the fluid displaced by the body",
      "The total weight of the submerged body",
      "The surface area of the submerged body",
      "The atmospheric pressure at the surface"
    ],
    correct_answer: "A",
    explanation: "Archimedes' principle states: F_buoyant = ρ_fluid * V_submerged * g = Weight of displaced fluid.",
    topic_name: "Archimedes' Principle & Buoyancy",
    instruction_category: "Fluid Mechanics"
  },
  {
    question_number: 38,
    question_text: "For an incompressible, non-viscous fluid undergoing steady streamline flow, the equation of continuity states that:",
    option_a: "A₁ v₁ = A₂ v₂ (constant volume flow rate)",
    option_b: "A₁ / v₁ = A₂ / v₂",
    option_c: "A₁ v₁² = A₂ v₂²",
    option_d: "P₁ A₁ = P₂ A₂",
    options: [
      "A₁ v₁ = A₂ v₂ (constant volume flow rate)",
      "A₁ / v₁ = A₂ / v₂",
      "A₁ v₁² = A₂ v₂²",
      "P₁ A₁ = P₂ A₂"
    ],
    correct_answer: "A",
    explanation: "Conservation of mass for an incompressible fluid requires constant volume flow rate Q = A * v = constant along the streamline tube.",
    topic_name: "Equation of Continuity",
    instruction_category: "Fluid Dynamics"
  },
  {
    question_number: 39,
    question_text: "Bernoulli’s Principle in fluid dynamics is a direct consequence of the law of conservation of:",
    option_a: "Mass",
    option_b: "Linear momentum",
    option_c: "Energy",
    option_d: "Angular momentum",
    options: ["Mass", "Linear momentum", "Energy", "Angular momentum"],
    correct_answer: "C",
    explanation: "Bernoulli's equation (P + 1/2 ρv² + ρgh = constant) is derived from the work-energy theorem applied to fluid flow, representing conservation of mechanical energy per unit volume.",
    topic_name: "Bernoulli's Principle",
    instruction_category: "Fluid Dynamics"
  },
  {
    question_number: 40,
    question_text: "The property of a fluid that determines its internal resistance to flow and shear between adjacent layers is:",
    option_a: "Surface tension",
    option_b: "Viscosity",
    option_c: "Capillarity",
    option_d: "Compressibility",
    options: ["Surface tension", "Viscosity", "Capillarity", "Compressibility"],
    correct_answer: "B",
    explanation: "Viscosity is the measure of internal fluid friction arising from cohesive intermolecular forces between fluid layers moving at different velocities.",
    topic_name: "Fluid Viscosity",
    instruction_category: "Fluid Mechanics"
  },
  {
    question_number: 41,
    question_text: "On which temperature scale does zero degrees (0) correspond strictly to Absolute Zero (-273.15 °C)?",
    option_a: "Celsius scale",
    option_b: "Fahrenheit scale",
    option_c: "Kelvin scale",
    option_d: "Rankine scale",
    options: ["Celsius scale", "Fahrenheit scale", "Kelvin scale", "Rankine scale"],
    correct_answer: "C",
    explanation: "The Kelvin (K) thermodynamic scale sets 0 K at absolute zero, where molecular thermal motion reaches minimum theoretical energy.",
    topic_name: "Temperature Scales",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 42,
    question_text: "How much heat energy is required to raise the temperature of 2.0 kg of copper from 20 °C to 70 °C? (Specific heat capacity of copper c = 385 J/(kg·K))",
    option_a: "38.5 kJ",
    option_b: "77.0 kJ",
    option_c: "19.25 kJ",
    option_d: "15.4 kJ",
    options: ["38.5 kJ", "77.0 kJ", "19.25 kJ", "15.4 kJ"],
    correct_answer: "A",
    explanation: "Q = m * c * ΔT = 2.0 kg * 385 J/(kg·K) * (70 - 20) K = 2.0 * 385 * 50 = 38,500 J = 38.5 kJ.",
    topic_name: "Specific Heat Capacity Calculations",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 43,
    question_text: "According to the First Law of Thermodynamics, the change in internal energy (ΔU) of a system is given by:",
    option_a: "ΔU = Q + W_by",
    option_b: "ΔU = Q - W_by (where Q is heat added and W_by is work done by the system)",
    option_c: "ΔU = Q * W",
    option_d: "ΔU = Q / W",
    options: [
      "ΔU = Q + W_by",
      "ΔU = Q - W_by (where Q is heat added and W_by is work done by the system)",
      "ΔU = Q * W",
      "ΔU = Q / W"
    ],
    correct_answer: "B",
    explanation: "The First Law expresses conservation of energy: ΔU = Q - W, where Q is heat absorbed by the system and W is work done by the system on its surroundings.",
    topic_name: "First Law of Thermodynamics",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 44,
    question_text: "An isothermal thermodynamic process is characterized by:",
    option_a: "Constant temperature (ΔT = 0, ΔU = 0 for ideal gas)",
    option_b: "Constant pressure (ΔP = 0)",
    option_c: "Zero heat transfer (Q = 0)",
    option_d: "Constant volume (W = 0)",
    options: [
      "Constant temperature (ΔT = 0, ΔU = 0 for ideal gas)",
      "Constant pressure (ΔP = 0)",
      "Zero heat transfer (Q = 0)",
      "Constant volume (W = 0)"
    ],
    correct_answer: "A",
    explanation: "An isothermal process occurs at constant temperature (T = constant), which for an ideal gas means ΔU = n C_v ΔT = 0, so Q = W.",
    topic_name: "Thermodynamic Processes - Isothermal",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 45,
    question_text: "An adiabatic process is defined as one in which:",
    option_a: "The temperature remains constant",
    option_b: "The pressure remains constant",
    option_c: "No heat enters or leaves the system (Q = 0)",
    option_d: "The volume remains constant",
    options: [
      "The temperature remains constant",
      "The pressure remains constant",
      "No heat enters or leaves the system (Q = 0)",
      "The volume remains constant"
    ],
    correct_answer: "C",
    explanation: "In an adiabatic process, the system is thermally insulated from its surroundings (or the process occurs so rapidly that Q = 0), yielding ΔU = -W.",
    topic_name: "Thermodynamic Processes - Adiabatic",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 46,
    question_text: "What is the maximum theoretical efficiency of a Carnot heat engine operating between a hot reservoir at 500 K and a cold reservoir at 300 K?",
    option_a: "60%",
    option_b: "40%",
    option_c: "50%",
    option_d: "25%",
    options: ["60%", "40%", "50%", "25"],
    correct_answer: "B",
    explanation: "Carnot efficiency η = 1 - (T_C / T_H) = 1 - (300 K / 500 K) = 1 - 0.60 = 0.40 = 40%.",
    topic_name: "Carnot Heat Engine Efficiency",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 47,
    question_text: "The Clausius statement of the Second Law of Thermodynamics states that:",
    option_a: "It is impossible for heat to flow spontaneously from a cooler body to a warmer body without external work",
    option_b: "Energy cannot be created or destroyed",
    option_c: "All natural processes decrease total entropy",
    option_d: "Absolute zero can be attained in a finite number of steps",
    options: [
      "It is impossible for heat to flow spontaneously from a cooler body to a warmer body without external work",
      "Energy cannot be created or destroyed",
      "All natural processes decrease total entropy",
      "Absolute zero can be attained in a finite number of steps"
    ],
    correct_answer: "A",
    explanation: "Clausius formulated the Second Law stating that heat cannot spontaneously pass from a body at a lower temperature to a body at a higher temperature without external work input.",
    topic_name: "Second Law of Thermodynamics",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 48,
    question_text: "The heat capacity (C) of a given body depends directly on:",
    option_a: "Only its initial temperature",
    option_b: "Only the external atmospheric pressure",
    option_c: "The mass of the body and its specific heat capacity (C = m · c)",
    option_d: "Its gravitational potential energy",
    options: [
      "Only its initial temperature",
      "Only the external atmospheric pressure",
      "The mass of the body and its specific heat capacity (C = m · c)",
      "Its gravitational potential energy"
    ],
    correct_answer: "C",
    explanation: "Heat capacity C is an extensive property equal to the product of the mass m of the object and the intensive specific heat capacity c (C = mc, in J/K).",
    topic_name: "Heat Capacity vs Specific Heat",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 49,
    question_text: "Latent heat of vaporization (L_v) is defined as:",
    option_a: "Heat required to raise the temperature of 1 kg of liquid by 1 °C",
    option_b: "Heat required to convert 1 kg of liquid into vapor at its boiling point without any change in temperature",
    option_c: "Heat released when a solid melts into a liquid",
    option_d: "The energy required to expand a gas adiabatically",
    options: [
      "Heat required to raise the temperature of 1 kg of liquid by 1 °C",
      "Heat required to convert 1 kg of liquid into vapor at its boiling point without any change in temperature",
      "Heat released when a solid melts into a liquid",
      "The energy required to expand a gas adiabatically"
    ],
    correct_answer: "B",
    explanation: "Specific latent heat of vaporization is the energy per unit mass needed to transition a substance from liquid to gaseous phase at constant boiling temperature.",
    topic_name: "Latent Heat of Phase Transitions",
    instruction_category: "Thermodynamics"
  },
  {
    question_number: 50,
    question_text: "A metal rod of initial length L₀ undergoes a temperature increase of ΔT. If its coefficient of linear expansion is α, what is the change in length ΔL?",
    option_a: "ΔL = α · L₀ · ΔT",
    option_b: "ΔL = α / (L₀ · ΔT)",
    option_c: "ΔL = α · L₀ / ΔT",
    option_d: "ΔL = L₀ / (α · ΔT)",
    options: [
      "ΔL = α · L₀ · ΔT",
      "ΔL = α / (L₀ · ΔT)",
      "ΔL = α · L₀ / ΔT",
      "ΔL = L₀ / (α · ΔT)"
    ],
    correct_answer: "A",
    explanation: "Thermal linear expansion is directly proportional to initial length and temperature change: ΔL = α * L₀ * ΔT.",
    topic_name: "Thermal Expansion",
    instruction_category: "Thermodynamics"
  }
];

module.exports = questions;
