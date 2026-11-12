import { SubjectModule } from '../modulesData';

export const PHYSICS_MODULE: SubjectModule = {
  id: 'module-phys',
  subjectCode: 'PHYS',
  subjectName: 'Physics',
  iconName: 'Zap',
  colorGradient: 'from-amber-500 via-orange-600 to-red-700',
  authorNote: 'Oromia Education Bureau • ASTU Special School (Writer: Dereje Assefa MSc; Reviewers: Fikadu Tolessa PhD, Kumneger Tadele PhD)',
  description: 'Comprehensive High School Physics Module (Grade 9-12) covering Kinematics, Dynamics, Fluid Mechanics, Electrostatics, Electric Current, Electromagnetism, and Heat & Temperature.',
  units: [
    {
      unitNumber: 1,
      title: 'UNIT ONE: KINEMATICS',
      description: '1D & 2D Motion, reference frames, distance vs displacement, average vs instantaneous velocity/acceleration, uniformly accelerated motion equations, relative velocity, freely falling objects, motion graphs, projectile motion, and circular motion.',
      topics: [
        {
          id: 'phys-1-1',
          topicNumber: '1.1',
          title: '1D Motion, Velocity & Uniform Acceleration',
          summary: 'Frame of reference, scalar distance vs vector displacement, v = dx/dt, a = dv/dt, and the 4 UAM kinematics equations.',
          content: `### 1.1 Motion in a Straight Line & Kinematics Equations

Rest and Motion:
An object is said to be in motion if its position changes with time with respect to a reference frame. Rest and motion are relative terms.

Mechanics Branches:
• Kinematics: Describes the motion of objects without considering the forces causing the motion.
• Dynamics: Relates the motion of objects to the forces causing them.

Distance vs Displacement:
• Distance (Total Path Length): Total length of actual path traversed. Scalar quantity, always positive.
• Displacement: Shortest vector path drawn from initial to final position. Vector quantity, can be positive, zero, or negative.

Speed vs Velocity:
• Speed: Rate at which distance is covered (scalar, ms⁻¹).
• Velocity: Rate at which displacement occurs (vector, ms⁻¹).
  Velocity = (Final Position - Initial Position) / Time = (x_f - x_i) / t

Instantaneous Calculus Definitions:
• Instantaneous Velocity: v = lim(Δt → 0) [Δx / Δt] = dx / dt
• Instantaneous Acceleration: a = lim(Δt → 0) [Δv / Δt] = dv / dt

Equations of Motion for Uniformly Accelerated Motion (UAM):
1. v = u + a · t
2. x = x_0 + u · t + (1/2) a · t²
3. v² = u² + 2 a · (x - x_0)
4. x = x_0 + ((u + v) / 2) · t`,
          workedExamples: [
            {
              problem: 'The position of a particle is given by x(t) = t² - t + 4 in meters. Find its instantaneous velocity at t = 4 s.',
              solution: 'v(t) = dx/dt = d/dt (t² - t + 4) = 2t - 1.\nAt t = 4 s: v(4) = 2(4) - 1 = 7 m/s.'
            },
            {
              problem: 'A train traveling at 40 m/s applies brakes and decelerates uniformly at 2 m/s². Will it stop before a 400 m long platform?',
              solution: 'Using v² = u² + 2as:\n0² = (40)² + 2(-2)s  ⟹  0 = 1600 - 4s  ⟹  4s = 1600  ⟹  s = 400 m.\nYes, the train stops in exactly 400 m.'
            },
            {
              problem: 'A body sets off from rest with a constant acceleration of 8.0 m/s² for 5.0 s. Find its final velocity and displacement.',
              solution: '1. u = 0, a = 8.0 m/s², t = 5.0 s.\n2. Final velocity: v = u + at = 0 + (8.0)(5.0) = 40 m/s.\n3. Displacement: s = ut + (1/2)at² = 0 + 0.5(8.0)(5.0)² = 4 × 25 = 100 m.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following is correct for a body moving along a straight line with uniform (constant) acceleration?',
              options: [
                'Its velocity remains constant over time',
                'Its velocity changes linearly with time (v = v₀ + at)',
                'Its displacement is directly proportional to time (s ∝ t)',
                'Its acceleration increases linearly with time'
              ],
              correctIndex: 1,
              explanation: 'For uniformly accelerated linear motion, the velocity equation is v(t) = v₀ + at, showing that velocity is a linear function of time with a constant slope equal to acceleration.'
            },
            {
              question: 'What physical quantity is represented by the slope of a displacement-time (s-t) graph?',
              options: ['Acceleration', 'Instantaneous velocity', 'Force', 'Total distance covered'],
              correctIndex: 1,
              explanation: 'The derivative ds/dt or gradient of a displacement-time curve represents instantaneous velocity.'
            },
            {
              question: 'An airplane taxies onto the runway going at 10 m/s. If the plane accelerates uniformly at 3.0 m/s² for 15 seconds, how fast is it moving when it takes off?',
              options: ['45 m/s', '55 m/s', '60 m/s', '35 m/s'],
              correctIndex: 1,
              explanation: 'Using v = u + at: v = 10 + (3.0 × 15) = 10 + 45 = 55 m/s.'
            },
            {
              question: 'A car traveling at 20 m/s brakes with a constant deceleration of 4 m/s². What distance does the car cover before coming to a complete stop?',
              options: ['25 m', '50 m', '80 m', '100 m'],
              correctIndex: 1,
              explanation: 'Using v² = u² + 2as: 0 = 20² - 2(4)s ⟹ 8s = 400 ⟹ s = 50 m.'
            }
          ]
        },
        {
          id: 'phys-1-2',
          topicNumber: '1.2',
          title: 'Free Fall & Vertical Motion Under Gravity',
          summary: 'Gravity acceleration g = 9.8 m/s², vertical toss up/down rules, and free-fall kinematic equations.',
          content: `### 1.2 Motion of Freely Falling Objects

Free-fall motion occurs when an object moves freely under the influence of gravity alone, ignoring air resistance.
Acceleration due to gravity near Earth's surface is constant: a = -g = -9.8 m/s² (directed downwards).

Kinematic Equations for Free-Fall (taking upward as +y direction):
1. v = v_0 - g · t
2. y = y_0 + v_0 · t - (1/2) g · t²
3. v² = v_0² - 2 g · (y - y_0)

Notable Rules:
• Tossed Upward: Initial velocity v_0 > 0. At maximum height y_max, velocity v = 0 m/s. Acceleration remains -g throughout.
• Dropped from Rest: Initial velocity v_0 = 0. Velocity on impact is negative: v = -gt.
• Symmetrical Flight: Time of ascent to top = Time of descent back to launch height. Total time of flight = 2 · t_up.`,
          workedExamples: [
            {
              problem: 'A box is dropped from a tower and takes 4 seconds to reach the ground. Calculate the height of the tower (g = 9.8 m/s²).',
              solution: 'Height h = (1/2) g t² = (1/2) × 9.8 × (4)² = 0.5 × 9.8 × 16 = 78.4 m.'
            },
            {
              problem: 'A ball is projected vertically upward with an initial velocity of 20 m/s (take g = 10 m/s²). Find (a) the maximum height reached, and (b) the total time of flight.',
              solution: '1. At maximum height, v = 0. Using v² = u² - 2gh: 0 = 20² - 2(10)h  ⟹  20h = 400  ⟹  h_max = 20 m.\n2. Time to peak: t_up = u / g = 20 / 10 = 2.0 s.\n3. Total time of flight = 2 × t_up = 2 × 2.0 = 4.0 s.'
            }
          ],
          practiceQuestions: [
            {
              question: 'A ball is thrown vertically upward into the air. At the peak of its trajectory, what are its velocity and acceleration?',
              options: [
                'Velocity is zero, acceleration is zero',
                'Velocity is zero, acceleration is 9.8 m/s² downward',
                'Velocity is 9.8 m/s, acceleration is zero',
                'Both velocity and acceleration are maximum'
              ],
              correctIndex: 1,
              explanation: 'At the highest point, instantaneous vertical velocity momentarily becomes zero, but gravitational acceleration continues acting downwards at 9.8 m/s².'
            },
            {
              question: 'A stone is dropped from a cliff 80 m high above the ground. How long does it take to strike the ground? (Use g = 10 m/s²)',
              options: ['2.0 s', '4.0 s', '8.0 s', '16.0 s'],
              correctIndex: 1,
              explanation: 'From h = (1/2)gt²: 80 = 0.5(10)t² ⟹ 5t² = 80 ⟹ t² = 16 ⟹ t = 4.0 seconds.'
            },
            {
              question: 'An arrow shot vertically upward returns to the shooter\'s hand after 6 seconds. What was its initial launch speed? (Use g = 10 m/s²)',
              options: ['60 m/s', '30 m/s', '15 m/s', '45 m/s'],
              correctIndex: 1,
              explanation: 'Time to reach maximum height t = 6 / 2 = 3 s. Initial velocity u = gt = 10 × 3 = 30 m/s.'
            }
          ]
        },
        {
          id: 'phys-1-3',
          topicNumber: '1.3',
          title: 'Motion in a Plane: Projectile & Circular Motion',
          summary: '2D motion decomposition, projectile time of flight T, range R, max height H, and centripetal acceleration a_c = v² / r.',
          content: `### 1.3 Projectile Motion and Circular Motion

1. Projectile Motion:
An object launched into the air with an initial velocity u at angle θ with the horizontal.
Horizontal and vertical components are independent:
• Horizontal Motion (a_x = 0, constant velocity):
  - u_x = u cos θ
  - x = (u cos θ) · t
• Vertical Motion (a_y = -g, uniformly accelerated):
  - u_y = u sin θ
  - v_y = u sin θ - g · t
  - y = (u sin θ) · t - (1/2) g · t²

Key Projectile Formulas:
• Time of Flight (T): T = (2 u sin θ) / g
• Maximum Height (H): H = (u² sin² θ) / (2 g)
• Horizontal Range (R): R = (u² sin 2θ) / g
  - Maximum range occurs at launch angle θ = 45°.

Equation of Trajectory:
y = x tan θ - (g x²) / (2 u² cos² θ)  (Parabolic path)

2. Circular Motion:
When an object moves in a circle of radius r at constant speed v, its direction changes continuously.
• Centripetal Acceleration (a_c): Directed towards center of circle.
  a_c = v² / r = ω² r
• Centripetal Force (F_c): F_c = m a_c = (m v²) / r
• Vertical Circular Motion Tension:
  - Top of circle (θ = 180°): T_top = (m v² / r) - m g
  - Bottom of circle (θ = 0°): T_bottom = (m v² / r) + m g`,
          workedExamples: [
            {
              problem: 'A ball is thrown at 12 m/s at an angle of 45° with the horizontal. Calculate its horizontal range (g = 10 m/s²).',
              solution: 'R = (u² sin 2θ) / g = (12² × sin 90°) / 10 = (144 × 1) / 10 = 14.4 m.'
            },
            {
              problem: 'A 1.7 kg object is swung from the end of a 0.60 m string in a vertical circle with a constant speed of 4.0 m/s. Find the tension in the string at (a) the bottom of the circle, and (b) the top of the circle (g = 9.8 m/s²).',
              solution: '1. Centripetal force F_c = (m v²) / r = (1.7 × 4.0²) / 0.60 = (1.7 × 16) / 0.60 = 45.33 N.\n2. Weight W = m g = 1.7 × 9.8 = 16.66 N.\n3. Bottom: T_bottom = F_c + mg = 45.33 + 16.66 = 62.0 N.\n4. Top: T_top = F_c - mg = 45.33 - 16.66 = 28.7 N.'
            }
          ],
          practiceQuestions: [
            {
              question: 'In uniform circular motion, which of the following quantities remains constant throughout the motion?',
              options: ['Velocity vector', 'Speed', 'Acceleration vector', 'Displacement vector'],
              correctIndex: 1,
              explanation: 'Speed is scalar and remains constant. Velocity and acceleration vectors continuously change directions towards the center.'
            },
            {
              question: 'At what point in a projectile\'s trajectory is its speed at a minimum?',
              options: ['At the launch point', 'At the highest point (apex)', 'Just before striking the ground', 'Speed is constant everywhere'],
              correctIndex: 1,
              explanation: 'At the apex, the vertical velocity component v_y = 0, leaving only the horizontal component v_x = u cos θ, which represents minimum speed.'
            },
            {
              question: 'A projectile launched with speed u achieves maximum horizontal range on flat ground when the angle of projection is:',
              options: ['30°', '45°', '60°', '90°'],
              correctIndex: 1,
              explanation: 'Range R = (u² sin 2θ) / g. The maximum of sin(2θ) is 1, which occurs when 2θ = 90° ⟹ θ = 45°.'
            },
            {
              question: 'A 2 kg body moves in a circle of radius 0.5 m with a constant speed of 4 m/s. What is the centripetal force acting on the body?',
              options: ['16 N', '32 N', '64 N', '8 N'],
              correctIndex: 2,
              explanation: 'F_c = (m v²) / r = (2 × 4²) / 0.5 = (2 × 16) / 0.5 = 64 N.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'UNIT TWO: DYNAMICS',
      description: 'Newton\'s 3 Laws, fundamental field forces, normal force, static & kinetic friction, inclined plane analysis, linear momentum P = mv, impulse J = ΔP, elastic/inelastic collisions, rocket propulsion, center of mass, and banked curves.',
      topics: [
        {
          id: 'phys-2-1',
          topicNumber: '2.1',
          title: 'Newton\'s Laws of Motion & Fundamental Forces',
          summary: 'Strong, electromagnetic, weak, and gravitational forces; Newton\'s 1st, 2nd (F = ma), and 3rd (Action-Reaction) laws.',
          content: `### 2.1 Concept of Force & Newton's Laws

Four Fundamental Field Forces in Nature (Order of Decreasing Strength):
1. Strong Nuclear Force: Binds protons and neutrons inside nucleus (range ≈ 10⁻¹⁵ m).
2. Electromagnetic Force: Acts between electric charges.
3. Weak Nuclear Force: Operates in radioactive beta decay.
4. Gravitational Force: Mutual attraction between masses (weakest, infinite range).

Newton's Three Laws of Motion:
• First Law (Law of Inertia): An object remains at rest or in uniform motion along a straight line unless acted upon by a net external force. (ΣF = 0 ⟺ a = 0).
• Second Law: The rate of change of momentum of a body is directly proportional to the applied force.
  F_net = dP/dt = d(mv)/dt = m a
• Third Law (Action-Reaction): Whenever body A exerts a force F_A on body B, body B simultaneously exerts an equal and opposite force F_B on body A: F_A = -F_B.
  - Action and reaction forces act on TWO DIFFERENT bodies!

Weight and Normal Force:
• Weight W = m g.
• Normal Force (N): Contact support force perpendicular to surface.
  - On level ground: N = m g
  - On an incline of angle θ: N = m g cos θ`,
          workedExamples: [
            {
              problem: 'A student stands on a scale inside an elevator accelerating UPWARD at 2 m/s². If his mass is 60 kg, what does the scale read (g = 10 m/s²)?',
              solution: 'Apparent Weight W_app = m(g + a) = 60 × (10 + 2) = 60 × 12 = 720 N.'
            },
            {
              problem: 'A net force of 15 N acts on an object of mass 3 kg. What is the acceleration produced?',
              solution: 'From F = ma: a = F / m = 15 N / 3 kg = 5 m/s² in the direction of the force.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Action and reaction forces described in Newton\'s Third Law:',
              options: [
                'Act on the same body and cancel each other out',
                'Act on two different bodies and cannot cancel each other',
                'Act in the same direction',
                'Are unequal when acceleration is present'
              ],
              correctIndex: 1,
              explanation: 'Newton\'s third law pairs act simultaneously on two different interacting bodies, so they never cancel each other out on a single free body diagram.'
            },
            {
              question: 'Which fundamental force in nature is the weakest over subatomic and macroscopic distances?',
              options: ['Strong nuclear force', 'Electromagnetic force', 'Weak nuclear force', 'Gravitational force'],
              correctIndex: 3,
              explanation: 'Gravitational force is the weakest of all four fundamental forces, although its infinite range makes it dominant on astronomical scales.'
            },
            {
              question: 'An object of mass 5 kg moves with a constant velocity of 12 m/s on a frictionless horizontal plane. What net force is required to keep it moving at this constant velocity?',
              options: ['60 N', '0 N', '12 N', '5 N'],
              correctIndex: 1,
              explanation: 'According to Newton\'s First Law of Motion, an object moving at constant velocity has zero acceleration (a = 0), so net force F = ma = 0 N.'
            }
          ]
        },
        {
          id: 'phys-2-2',
          topicNumber: '2.2',
          title: 'Frictional Forces: Static & Kinetic Friction',
          summary: 'Static friction f_s ≤ μ_s N, limiting static friction f_s max = μ_s N, kinetic friction f_k = μ_k N, and inclined plane motion.',
          content: `### 2.2 Frictional Force & Motion on Inclined Planes

Types of Friction:
1. Static Friction (f_s): Opposes impending motion between surfaces at rest relative to each other.
   f_s ≤ f_s max = μ_s N
   - μ_s is coefficient of static friction.
2. Kinetic Friction (f_k): Opposes motion between surfaces sliding relative to each other.
   f_k = μ_k N
   - μ_k is coefficient of kinetic friction. (Generally μ_k < μ_s).

Motion on an Inclined Plane:
• Component of weight parallel to incline (downhill): F_parallel = m g sin θ
• Component of weight perpendicular to incline: F_normal = m g cos θ
• Normal Force N = m g cos θ
• Friction Force f_k = μ_k m g cos θ
• Acceleration sliding down incline: a = g (sin θ - μ_k cos θ)`,
          workedExamples: [
            {
              problem: 'An 8 kg block rests on a level surface with μ_s = 0.4. What horizontal force is required to start moving the block (g = 10 m/s²)?',
              solution: 'Normal Force N = m g = 8 × 10 = 80 N.\nLimiting static friction F_s = μ_s N = 0.4 × 80 = 32 N.'
            },
            {
              problem: 'A 10 kg box slides down an incline of 30° where μ_k = 0.2. What is its acceleration down the plane (g = 10 m/s²)?',
              solution: 'a = g(sin 30° - μ_k cos 30°) = 10(0.5 - 0.2 × 0.866) = 10(0.5 - 0.173) = 10(0.327) = 3.27 m/s².'
            }
          ],
          practiceQuestions: [
            {
              question: 'When a block of mass m is placed on an inclined plane inclined at angle θ with the horizontal, the normal force exerted by the plane on the block is:',
              options: ['mg', 'mg sin θ', 'mg cos θ', 'mg tan θ'],
              correctIndex: 2,
              explanation: 'Perpendicular to the surface of the incline, equilibrium requires N = mg cos θ.'
            },
            {
              question: 'If the angle of an inclined plane is gradually increased until a block just starts to slide down without being pushed, the tangent of this critical angle equals:',
              options: ['The coefficient of static friction (μ_s)', 'The coefficient of kinetic friction (μ_k)', 'The acceleration of gravity', 'Zero'],
              correctIndex: 0,
              explanation: 'At impending slip, mg sin θ = μ_s mg cos θ ⟹ tan θ = μ_s (the angle of repose).'
            },
            {
              question: 'A 4.0 kg wooden block is pulled along a flat table at constant speed by a horizontal force of 12 N. What is the coefficient of kinetic friction? (Use g = 10 m/s²)',
              options: ['0.25', '0.30', '0.40', '0.12'],
              correctIndex: 1,
              explanation: 'At constant speed, pulling force = kinetic friction = 12 N. Normal force N = mg = 4.0 × 10 = 40 N. μ_k = f_k / N = 12 / 40 = 0.30.'
            }
          ]
        },
        {
          id: 'phys-2-3',
          topicNumber: '2.3',
          title: 'Linear Momentum, Impulse, Collisions & Rocket Thrust',
          summary: 'Momentum P = mv, Impulse J = F Δt = ΔP, elastic vs inelastic collisions, center of mass, and rocket propulsion.',
          content: `### 2.3 Linear Momentum, Collisions & Rocket Propulsion

1. Momentum & Impulse:
• Linear Momentum: P⃗ = m v⃗ (SI unit: kg ms⁻¹)
• Impulse: J⃗ = F⃗ · Δt = ΔP⃗ = m(v_f - v_i) (SI unit: N s)

2. Collisions:
• Inelastic Collision: Linear momentum is conserved (P_i = P_f), but kinetic energy is NOT conserved (KE_i > KE_f).
  - Perfectly Inelastic: Objects stick together and move with common velocity V:
    m_1 u_1 + m_2 u_2 = (m_1 + m_2) V
• Elastic Collision: BOTH linear momentum AND kinetic energy are conserved.
  - Relative velocity of approach = -(Relative velocity of separation):
    u_1 - u_2 = -(v_1 - v_2)

3. Variable Mass System (Rocket Propulsion):
• Rocket Thrust Force: T = v_exh · (dm / dt)
  - v_exh is exhaust gas speed relative to rocket, dm/dt is rate of fuel combustion.
• Acceleration of Rocket: a = (v_exh / m) · (dm / dt) - g`,
          workedExamples: [
            {
              problem: 'A rocket burns fuel at rate dm/dt = 0.05 kg/s and ejects gas at relative speed v_exh = 1600 m/s. Calculate the thrust force.',
              solution: 'Thrust T = (dm/dt) × v_exh = 0.05 kg/s × 1600 m/s = 80 N.'
            },
            {
              problem: 'A rifle of mass 4 kg fires a bullet of mass 0.02 kg at a muzzle velocity of 400 m/s. Find the recoil velocity of the rifle.',
              solution: 'By conservation of momentum: m_rifle · v_recoil + m_bullet · v_bullet = 0\n4(v_recoil) + (0.02)(400) = 0  ⟹  4(v_recoil) + 8 = 0  ⟹  v_recoil = -2 m/s (backward recoil).'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which condition must be strictly satisfied for the total linear momentum of a system of particles to be conserved?',
              options: ['Net external force is zero', 'No friction present', 'Kinetic energy is conserved', 'Gravitational force is zero'],
              correctIndex: 0,
              explanation: 'By the Law of Conservation of Linear Momentum, dP/dt = ΣF_ext = 0 implies total momentum P remains constant.'
            },
            {
              question: 'In a completely inelastic collision between two moving bodies, which of the following statements is true?',
              options: [
                'Both linear momentum and kinetic energy are conserved',
                'Linear momentum is conserved, but kinetic energy is not conserved',
                'Kinetic energy is conserved, but linear momentum is not conserved',
                'Neither momentum nor kinetic energy is conserved'
              ],
              correctIndex: 1,
              explanation: 'In all collisions without external forces, linear momentum is conserved. In inelastic collisions, some kinetic energy is transformed into thermal and internal deformation energy.'
            },
            {
              question: 'A 2 kg trolley moving at 3 m/s collides with and couples to a stationary 1 kg trolley. What is their combined velocity after the collision?',
              options: ['1.5 m/s', '2.0 m/s', '2.5 m/s', '3.0 m/s'],
              correctIndex: 1,
              explanation: 'm₁u₁ + m₂u₂ = (m₁ + m₂)V ⟹ (2)(3) + (1)(0) = (2 + 1)V ⟹ 6 = 3V ⟹ V = 2.0 m/s.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'UNIT THREE: FLUID MECHANICS',
      description: 'Fluid density, hydrostatic pressure P = P_0 + rho g h, Pascal\'s principle, Archimedes\' buoyancy principle, equation of continuity A1 v1 = A2 v2, Bernoulli\'s equation, viscosity, and Stoke\'s law drag.',
      topics: [
        {
          id: 'phys-3-1',
          topicNumber: '3.1',
          title: 'Fluid Density, Pressure & Pascal\'s Principle',
          summary: 'Density rho = m/V, pressure P = F/A, hydrostatic pressure P = P_0 + rho g h, gauge pressure, and hydraulic lift.',
          content: `### 3.1 Fluid Pressure, Hydrostatics & Pascal's Law

Density & Specific Gravity:
• Density (rho): Mass per unit volume: ρ = m / V (SI unit: kg m⁻³).
• Specific Gravity: Ratio of density of substance to density of water at 4°C (1000 kg/m³).

Hydrostatic Pressure:
Pressure is perpendicular force per unit area: P = F / A (SI unit: Pascal, 1 Pa = 1 N/m²).
• Atmospheric Pressure at Sea Level: P_atm = 1.013 × 10⁵ Pa = 760 mmHg = 1 atm.
• Hydrostatic Pressure at Depth h in Fluid:
  P = P_0 + ρ g h
  - Gauge Pressure: P_gauge = P - P_0 = ρ g h.

Pascal's Principle:
Pressure applied to an enclosed, confined fluid is transmitted undiminished to every point of the fluid and to the container walls.
• Hydraulic Lift Formula:
  P_1 = P_2  ⟹  F_1 / A_1 = F_2 / A_2  ⟹  F_2 = F_1 × (A_2 / A_1)`,
          workedExamples: [
            {
              problem: 'In a hydraulic press, input piston radius is 5 cm and output piston radius is 25 cm. What output force F2 is generated by an input force F1 = 100 N?',
              solution: 'Area ratio A2/A1 = (r2/r1)² = (25/5)² = 25.\nOutput Force F2 = F1 × (A2/A1) = 100 N × 25 = 2500 N.'
            },
            {
              problem: 'Calculate the gauge pressure and absolute pressure at a depth of 20 m below the surface of water (ρ = 1000 kg/m³, g = 9.8 m/s², P_atm = 1.013 × 10⁵ Pa).',
              solution: '1. P_gauge = ρ g h = (1000)(9.8)(20) = 196,000 Pa = 1.96 × 10⁵ Pa.\n2. P_abs = P_atm + P_gauge = 101,300 + 196,000 = 297,300 Pa = 2.97 × 10⁵ Pa.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Pascal\'s principle states that pressure applied to an enclosed fluid is transmitted:',
              options: [
                'Only vertically downward',
                'Only to the lowest surface',
                'Undiminished to all points within the fluid and vessel walls',
                'Proportionally to depth only'
              ],
              correctIndex: 2,
              explanation: 'Pascal\'s principle states that external pressure applied to a confined fluid is transmitted equally in all directions throughout the fluid.'
            },
            {
              question: 'What is the SI unit of hydrostatic pressure?',
              options: ['Newton (N)', 'Pascal (Pa = N/m²)', 'Joule (J)', 'Watt (W)'],
              correctIndex: 1,
              explanation: 'Pressure is defined as force per unit area (N/m²), termed the Pascal (Pa).'
            },
            {
              question: 'A water storage tank of base area 2.0 m² is filled with water to a depth of 3.0 m. What is the total force exerted by the water on the base of the tank? (Take ρ = 1000 kg/m³, g = 10 m/s²)',
              options: ['60,000 N', '30,000 N', '15,000 N', '6,000 N'],
              correctIndex: 0,
              explanation: 'Pressure P = ρgh = 1000 × 10 × 3.0 = 30,000 Pa. Total force F = P × A = 30,000 × 2.0 = 60,000 N.'
            }
          ]
        },
        {
          id: 'phys-3-2',
          topicNumber: '3.2',
          title: 'Buoyancy & Archimedes\' Principle',
          summary: 'Buoyant force F_b = W_fluid = rho_fluid V_displaced g, floating condition, and apparent weight.',
          content: `### 3.2 Buoyancy & Archimedes' Principle

Archimedes' Principle:
Any object completely or partially submerged in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the object.

Buoyant Force Equation:
F_buoyant = W_fluid = ρ_fluid · V_displaced · g

Apparent Weight in Fluid:
W_apparent = W_air - F_buoyant = m g - ρ_fluid V_submerged g

Floating Condition (Equilibrium):
For a floating object (W_object = F_buoyant):
ρ_object · V_total · g = ρ_fluid · V_submerged · g
Fraction Submerged = V_submerged / V_total = ρ_object / ρ_fluid`,
          workedExamples: [
            {
              problem: 'An object of mass 150 kg and volume 0.75 m³ floats in oil of density 800 kg/m³. What percentage of its volume is submerged?',
              solution: 'Object density ρ_obj = m / V = 150 / 0.75 = 200 kg/m³.\nSubmerged fraction = ρ_obj / ρ_fluid = 200 / 800 = 0.25 = 25%.'
            },
            {
              problem: 'A metal crown weighs 50 N in air and 45 N when completely immersed in water. What is the buoyant force and the volume of the crown (g = 10 m/s², ρ_water = 1000 kg/m³)?',
              solution: '1. F_buoyant = W_air - W_water = 50 N - 45 N = 5 N.\n2. F_b = ρ_water · V · g  ⟹  5 = (1000)(V)(10)  ⟹  V = 5 / 10000 = 0.0005 m³ = 500 cm³.'
            }
          ],
          practiceQuestions: [
            {
              question: 'According to Archimedes\' Principle, the buoyant force acting on a submerged body is equal to:',
              options: [
                'The weight of the submerged body itself',
                'The weight of the fluid displaced by the body',
                'The total volume of the container',
                'The surface area of the body'
              ],
              correctIndex: 1,
              explanation: 'Archimedes\' Principle explicitly defines buoyant force as equal to the weight of the volume of fluid displaced.'
            },
            {
              question: 'A block of wood of density 600 kg/m³ floats in pure water (density 1000 kg/m³). What fraction of the volume of the block is submerged under water?',
              options: ['40%', '60%', '80%', '100%'],
              correctIndex: 1,
              explanation: 'V_submerged / V_total = ρ_body / ρ_liquid = 600 / 1000 = 0.60 = 60%.'
            },
            {
              question: 'An iron anchor has a volume of 0.04 m³. When completely submerged in seawater of density 1025 kg/m³, what upward buoyant force acts on it? (Use g = 10 m/s²)',
              options: ['410 N', '820 N', '4100 N', '1025 N'],
              correctIndex: 0,
              explanation: 'F_b = ρ V g = 1025 kg/m³ × 0.04 m³ × 10 m/s² = 410 N.'
            }
          ]
        },
        {
          id: 'phys-3-3',
          topicNumber: '3.3',
          title: 'Fluid Dynamics: Continuity & Bernoulli\'s Equation',
          summary: 'Equation of continuity A1 v1 = A2 v2, flow rate Q = A v, Bernoulli\'s equation, and Stoke\'s law drag force F_D = 6 pi eta r v.',
          content: `### 3.3 Fluid Dynamics & Bernoulli's Principle

1. Equation of Continuity (Mass Conservation):
For steady, incompressible fluid flow through an enclosed pipe:
A_1 · v_1 = A_2 · v_2
• Volume Flow Rate (Flux Q): Q = ΔV / Δt = A · v (m³/s).

2. Bernoulli's Equation (Energy Conservation):
P_1 + (1/2) ρ v_1² + ρ g y_1 = P_2 + (1/2) ρ v_2² + ρ g y_2 = Constant
• Static Pressure + Dynamic Pressure + Hydrostatic Head = Constant.
• Applications: Aerodynamic lift on airplane wings, Venturi tubes, carburetors, Torricelli's efflux law v = √(2gh).

3. Viscosity & Stoke's Law:
• Viscous Drag Force on Spherical Object in Laminar Flow (Reynolds Number < 1):
  F_D = 6 π η r v  (Stoke's Law)
  - η is coefficient of viscosity, r is sphere radius, v is velocity.
• Terminal Velocity v_T:
  v_T = (2 r² (ρ_object - ρ_fluid) g) / (9 η)`,
          workedExamples: [
            {
              problem: 'Water flows through a horizontal pipe of area 50 cm² at speed 12 m/s into a narrow pipe of area 10 cm². Find the velocity in the narrow pipe.',
              solution: 'A1 v1 = A2 v2  ⟹  50 × 12 = 10 × v2  ⟹  v2 = 600 / 10 = 60 m/s.'
            },
            {
              problem: 'Water drains through a small hole at the bottom of a large open tank filled to a depth of 5 m. Find the efflux velocity (Torricelli\'s Law, g = 10 m/s²).',
              solution: 'v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s.'
            }
          ],
          practiceQuestions: [
            {
              question: 'According to the Equation of Continuity (A₁v₁ = A₂v₂), when an incompressible fluid enters a constriction in a pipe, its speed:',
              options: ['Decreases', 'Increases', 'Remains unchanged', 'Becomes zero'],
              correctIndex: 1,
              explanation: 'Since flow rate Q = Av is constant, reducing area A causes fluid velocity v to increase proportionally.'
            },
            {
              question: 'Bernoulli\'s principle in fluid dynamics represents the conservation of which fundamental quantity?',
              options: ['Linear momentum', 'Mass', 'Mechanical energy', 'Angular momentum'],
              correctIndex: 2,
              explanation: 'Bernoulli\'s equation equates static pressure energy, kinetic energy, and gravitational potential energy along a streamline.'
            },
            {
              question: 'How is aerodynamic lift produced on an airplane wing according to Bernoulli\'s principle?',
              options: [
                'Air moves faster over the upper curved surface, reducing pressure above the wing',
                'Air moves faster under the wing, increasing pressure above the wing',
                'Air density increases above the wing',
                'Air pressure is equal on both sides'
              ],
              correctIndex: 0,
              explanation: 'The wing camber causes air to travel faster over the top surface. By Bernoulli\'s equation, higher velocity yields lower pressure above, creating an upward net lift force.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'UNIT FOUR: ELECTROSTATICS',
      description: 'Electric charge quantization, Coulomb\'s law, electric field E, potential V, equipotential surfaces, capacitors C = Q/V, parallel plate capacitors, dielectrics, and energy stored E = (1/2) C V².',
      topics: [
        {
          id: 'phys-4-1',
          topicNumber: '4.1',
          title: 'Electric Charge & Coulomb\'s Law',
          summary: 'Elementary charge e = 1.6x10^-19 C, Q = ±ne, Coulomb\'s inverse-square law F = k |q1 q2| / r².',
          content: `### 4.1 Electric Charge and Coulomb's Law

Properties of Electric Charge:
• Quantization of Charge: Charge on any body is an integral multiple of elementary charge e = 1.6 × 10⁻¹⁹ C:
  Q = ± n e
• Conservation of Charge: Total electric charge in an isolated system remains constant.
• Charging Methods: Rubbing (friction), Conduction (direct contact), Induction (electrostatic influence without contact).

Coulomb's Law of Electrostatics:
The force between two point charges q_1 and q_2 separated by distance r in vacuum:
F = k · (|q_1 q_2| / r²)
• Proportionality Constant: k = 1 / (4 π ε_0) ≈ 9 × 10⁹ N m² C⁻²
• Direction: Repulsive for like charges, attractive for opposite charges. Superposition principle applies for multiple charges.`,
          workedExamples: [
            {
              problem: 'Calculate electrostatic force between q1 = +3 μC and q2 = +8 μC separated by r = 0.3 m.',
              solution: 'F = (9 × 10⁹ × 3 × 10⁻⁶ × 8 × 10⁻⁶) / (0.3)² = 0.216 / 0.09 = 2.4 N (repulsive).'
            },
            {
              problem: 'A neutral metal sphere is given a positive charge of 3.2 nC. How many electrons were removed from the sphere?',
              solution: 'Q = n e  ⟹  n = Q / e = (3.2 × 10⁻⁹ C) / (1.6 × 10⁻¹⁹ C) = 2.0 × 10¹⁰ electrons.'
            }
          ],
          practiceQuestions: [
            {
              question: 'If the distance between two fixed point charges is halved, the electrostatic force between them is:',
              options: ['Halved', 'Doubled', 'Multiplied by 4', 'Divided by 4'],
              correctIndex: 2,
              explanation: 'Coulomb\'s force follows inverse-square law F ∝ 1/r². Halving r (r/2) multiplies F by 1/(1/2)² = 4.'
            },
            {
              question: 'A body has a net charge of -4.8 × 10⁻¹⁸ C. How many excess electrons does it possess?',
              options: ['3', '30', '300', '3000'],
              correctIndex: 1,
              explanation: 'n = Q / e = (4.8 × 10⁻¹⁸ C) / (1.6 × 10⁻¹⁹ C) = 30 electrons.'
            },
            {
              question: 'Coulomb\'s inverse-square law has the closest mathematical resemblance to which other law of physics?',
              options: [
                'Newton\'s Law of Universal Gravitation',
                'Ohm\'s Law',
                'Faraday\'s Law of Induction',
                'Hooke\'s Law of Elasticity'
              ],
              correctIndex: 0,
              explanation: 'Both Coulomb\'s Law (F = k q₁q₂/r²) and Newton\'s Gravitational Law (F = G m₁m₂/r²) are fundamental inverse-square central field laws.'
            }
          ]
        },
        {
          id: 'phys-4-2',
          topicNumber: '4.2',
          title: 'Electric Field & Electric Potential',
          summary: 'Field vector E = F / q = k Q / r², field line properties, potential V = k Q / r, and work W = q ΔV.',
          content: `### 4.2 Electric Field Strength and Electric Potential

Electric Field Strength (E⃗):
Force per unit positive test charge q_0:
E⃗ = F⃗ / q_0 = (k Q / r²) r̂  (SI unit: N/C or V/m)
• Field Lines: Originate on + charges, terminate on - charges, never intersect, density indicates field strength.

Electric Potential (V) & Potential Difference (ΔV):
• Absolute Potential due to Point Charge Q:
  V = k Q / r = Q / (4 π ε_0 r)
• Work done moving charge q through potential difference ΔV:
  W = q · ΔV = q (V_P - V_Q)
• Relation between Uniform Electric Field E and Potential V across distance d:
  E = ΔV / d`,
          workedExamples: [
            {
              problem: 'Find the electric field strength at distance r = 5 mm from point charge Q = 2.0 nC.',
              solution: 'E = k Q / r² = (9 × 10⁹ × 2.0 × 10⁻⁹) / (5.0 × 10⁻³)² = 18 / (25 × 10⁻⁶) = 7.2 × 10⁵ N/C.'
            },
            {
              problem: 'How much work is required to move a charge q = +2 μC from point A (V = 50 V) to point B (V = 170 V)?',
              solution: 'W = q · ΔV = (2 × 10⁻⁶ C) × (170 V - 50 V) = 2 × 10⁻⁶ × 120 = 2.4 × 10⁻⁴ J.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Electric field lines in electrostatics always:',
              options: [
                'Start on negative charges and end on positive charges',
                'Start on positive charges and end on negative charges',
                'Form closed loops',
                'Intersect at right angles'
              ],
              correctIndex: 1,
              explanation: 'Electrostatic field lines originate on positive charges and terminate on negative charges, never intersecting each other.'
            },
            {
              question: 'An electric charge of +5 μC experiences an electrostatic force of 0.02 N in an electric field. What is the electric field strength at that point?',
              options: ['4,000 N/C', '10,000 N/C', '100 N/C', '0.0001 N/C'],
              correctIndex: 0,
              explanation: 'E = F / q = 0.02 N / (5 × 10⁻⁶ C) = 4,000 N/C.'
            },
            {
              question: 'What is the work done in moving a test charge across any distance along an equipotential surface?',
              options: ['Maximum', 'Zero', 'Depends on the path', 'Proportional to capacitance'],
              correctIndex: 1,
              explanation: 'On an equipotential surface, potential difference ΔV = 0, so work W = q ΔV = 0.'
            }
          ]
        },
        {
          id: 'phys-4-3',
          topicNumber: '4.3',
          title: 'Capacitors, Capacitance & Dielectrics',
          summary: 'Capacitance C = Q / V, parallel plate capacitor C = ε A / d, dielectric constant k, series & parallel combinations, and energy stored E = (1/2) C V².',
          content: `### 4.3 Capacitance and Stored Energy

Definition of Capacitance:
Capacitance C is the ratio of stored charge Q to potential difference V:
C = Q / V  (SI unit: Farad, 1 F = 1 C/V. Microfarads 1 μF = 10⁻⁶ F, picofarads 1 pF = 10⁻¹² F).

Parallel Plate Capacitor:
C_0 = (ε_0 A) / d
• A is plate area, d is plate separation, ε_0 = 8.85 × 10⁻¹² C² N⁻¹ m⁻².
• With Dielectric Slab of constant k inserted: C = k C_0 = (k ε_0 A) / d.

Capacitor Combinations:
• Parallel Connection: Voltages equal, charges add.
  C_total = C_1 + C_2 + C_3
• Series Connection: Charges equal, voltages add.
  1 / C_total = 1 / C_1 + 1 / C_2 + 1 / C_3

Stored Energy in Capacitor:
E_stored = (1/2) Q V = (1/2) C V² = Q² / (2 C)`,
          workedExamples: [
            {
              problem: 'A 6 μF parallel plate capacitor is connected across a 18 V battery. Calculate stored charge and energy.',
              solution: '1. Charge Q = C V = 6 × 10⁻⁶ F × 18 V = 1.08 × 10⁻⁴ C = 108 μC.\n2. Energy E = (1/2) C V² = 0.5 × 6 × 10⁻⁶ × (18)² = 3 × 10⁻⁶ × 324 = 9.72 × 10⁻⁴ J.'
            },
            {
              problem: 'Two capacitors of 3 μF and 6 μF are connected in series across a 9 V source. Find the equivalent capacitance and total charge.',
              solution: '1. 1/C_eq = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2  ⟹  C_eq = 2 μF.\n2. Total charge Q = C_eq · V = 2 μF × 9 V = 18 μC.'
            }
          ],
          practiceQuestions: [
            {
              question: 'When a dielectric material of dielectric constant κ = 4 is inserted between the plates of a capacitor, its capacitance becomes:',
              options: ['One-fourth as large', '4 times larger', '16 times larger', 'Unchanged'],
              correctIndex: 1,
              explanation: 'Capacitance with dielectric is C = κ C₀. With κ = 4, the capacitance increases 4-fold.'
            },
            {
              question: 'Two capacitors of capacitances 4 μF and 6 μF are connected in parallel. What is their equivalent capacitance?',
              options: ['2.4 μF', '10.0 μF', '24.0 μF', '5.0 μF'],
              correctIndex: 1,
              explanation: 'In parallel connection, capacitances simply add: C_eq = C₁ + C₂ = 4 + 6 = 10 μF.'
            },
            {
              question: 'How much electrical energy is stored in a 10 μF capacitor charged to a potential difference of 200 V?',
              options: ['0.2 J', '0.4 J', '2.0 J', '40.0 J'],
              correctIndex: 0,
              explanation: 'E = (1/2) C V² = 0.5 × (10 × 10⁻⁶ F) × (200 V)² = 5 × 10⁻⁶ × 40,000 = 0.2 J.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 5,
      title: 'UNIT FIVE: ELECTRIC CURRENT & CIRCUITS',
      description: 'Electric current I = Q/t, drift velocity v_d, Ohm\'s law V = IR, resistivity R = rho l / A, temperature dependence ΔR = alpha R_0 ΔT, series/parallel resistor combinations, internal resistance V = E - Ir, and electric power P = VI = I²R.',
      topics: [
        {
          id: 'phys-5-1',
          topicNumber: '5.1',
          title: 'Electric Current, Drift Velocity & Ohm\'s Law',
          summary: 'Current I = Q / t, drift speed v_d, current density J = I/A = n e v_d, and Ohm\'s law V = I R.',
          content: `### 5.1 Current, Drift Velocity and Ohm's Law

Electric Current (I):
Rate of flow of electric charge: I = Q / t (SI unit: Ampere, 1 A = 1 C/s).
• Conventional Current: Directed from + to - terminal (flow of positive charge).
• Electron Current: Actual physical flow of electrons from - to + terminal.

Microscopic Model of Conduction & Drift Speed (v_d):
I = n · A · e · v_d
• n is free electron density per m³, A is wire cross-sectional area, e = 1.6 × 10⁻¹⁹ C, v_d is drift velocity.

Ohm's Law:
At constant temperature, current I through a conductor is directly proportional to potential difference V across its ends:
V = I · R  (R is electrical resistance, SI unit: Ohm Ω).
• Ohmic Materials: Linear V-I relationship (copper, aluminum).
• Non-Ohmic Materials: Non-linear V-I relationship (diodes, filaments).`,
          workedExamples: [
            {
              problem: 'How long will a current I = 5 A take to pass Q = 100 C of charge?',
              solution: 't = Q / I = 100 C / 5 A = 20 seconds.'
            },
            {
              problem: 'If 120 C of electric charge flows through a lamp filament in 1 minute, what is the electric current?',
              solution: 't = 1 minute = 60 s.\nI = Q / t = 120 C / 60 s = 2.0 A.'
            }
          ],
          practiceQuestions: [
            {
              question: 'By universal convention, the direction of conventional electric current is defined as:',
              options: [
                'The direction of flow of negative electrons',
                'From the negative terminal to the positive terminal',
                'The direction that positive charges would flow (from positive to negative)',
                'Random within the crystalline lattice'
              ],
              correctIndex: 2,
              explanation: 'Conventional electric current is defined historically as flowing from higher electric potential (+ terminal) to lower electric potential (- terminal).'
            },
            {
              question: 'Ohm\'s Law states that at constant temperature, the current through an ohmic conductor is:',
              options: [
                'Inversely proportional to voltage',
                'Directly proportional to the potential difference across its terminals',
                'Proportional to the square of voltage',
                'Independent of resistance'
              ],
              correctIndex: 1,
              explanation: 'Ohm\'s Law establishes that V = IR, meaning I is directly proportional to applied voltage V for an ohmic resistor.'
            },
            {
              question: 'A device with electrical resistance 24 Ω is connected to a 120 V power source. What current does it draw?',
              options: ['5.0 A', '0.2 A', '2880 A', '2.5 A'],
              correctIndex: 0,
              explanation: 'I = V / R = 120 V / 24 Ω = 5.0 A.'
            }
          ]
        },
        {
          id: 'phys-5-2',
          topicNumber: '5.2',
          title: 'Resistivity, Temperature Coefficient & Circuits',
          summary: 'Resistance R = rho l / A, temperature coefficient ΔR = alpha R_0 ΔT, series R_T = Σ R_i, and parallel 1/R_T = Σ (1/R_i).',
          content: `### 5.2 Resistivity, Circuits & Combinations of Resistors

Resistivity (rho):
R = ρ · (l / A)
• ρ is material resistivity (SI unit: Ω m). Conductors (ρ ≈ 10⁻⁸ Ωm), Insulators (ρ ≈ 10¹⁵ Ωm).

Temperature Dependence of Resistance:
R = R_0 (1 + α · ΔT)
• α is temperature coefficient of resistance (K⁻¹ or °C⁻¹), R_0 is initial resistance at T_0.

Resistor Combinations:
1. Series Combination:
   • Same current through each: I_T = I_1 = I_2 = I_3
   • Total voltage adds: V_T = V_1 + V_2 + V_3
   • Effective Resistance: R_T = R_1 + R_2 + R_3
2. Parallel Combination:
   • Same voltage across each: V_T = V_1 = V_2 = V_3
   • Total current adds: I_T = I_1 + I_2 + I_3
   • Effective Resistance: 1 / R_T = 1 / R_1 + 1 / R_2 + 1 / R_3`,
          workedExamples: [
            {
              problem: 'Calculate resistance of 2 km copper cable with cross-sectional area 1 cm² and ρ = 2 × 10⁻⁸ Ω m.',
              solution: 'l = 2000 m, A = 1 × 10⁻⁴ m².\nR = ρ (l / A) = (2 × 10⁻⁸ × 2000) / (1 × 10⁻⁴) = 4 × 10⁻⁵ / 1 × 10⁻⁴ = 0.4 Ω.'
            },
            {
              problem: 'Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. Find their equivalent resistance.',
              solution: '1/R_eq = 1/2 + 1/3 + 1/6 = (3 + 2 + 1) / 6 = 6/6 = 1  ⟹  R_eq = 1.0 Ω.'
            }
          ],
          practiceQuestions: [
            {
              question: 'If the length of a cylindrical wire is doubled and its cross-sectional area is halved, its electrical resistance will:',
              options: ['Double', 'Halve', 'Increase by a factor of 4', 'Remain unchanged'],
              correctIndex: 2,
              explanation: 'R = ρ l / A. With l\' = 2l and A\' = A/2: R\' = ρ (2l) / (A/2) = 4 (ρ l / A) = 4R.'
            },
            {
              question: 'Why does the electrical resistance of pure metals increase as their temperature rises?',
              options: [
                'Free electron density decreases drastically',
                'Thermal vibrations of lattice ions increase, causing more frequent collisions with electrons',
                'The wire length shrinks',
                'Electrons lose their electrical charge'
              ],
              correctIndex: 1,
              explanation: 'Rising temperature enhances thermal amplitude of metal lattice ions, increasing collision frequency with drifting electrons and raising resistance.'
            },
            {
              question: 'Two resistors of 6 Ω and 12 Ω are connected in parallel across a 12 V battery. What total current is supplied by the battery?',
              options: ['1.0 A', '2.0 A', '3.0 A', '4.0 A'],
              correctIndex: 2,
              explanation: 'R_eq = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω. Total current I = V / R_eq = 12 V / 4 Ω = 3.0 A.'
            }
          ]
        },
        {
          id: 'phys-5-3',
          topicNumber: '5.3',
          title: 'Electromotive Force, Internal Resistance & Power',
          summary: 'Terminal voltage V = E - I r, max power transfer theorem, electric power P = VI = I²R = V² / R, and cost in kWh.',
          content: `### 5.3 EMF, Internal Resistance and Electric Power

EMF (E) and Internal Resistance (r):
Real batteries have internal resistance r.
• Open Circuit Voltage = EMF (E)
• Terminal Voltage under load I:
  V = E - I · r = I · R
  E = I (R + r)

Maximum Power Transfer Theorem:
Power delivered to external load R is maximum when external resistance equals internal resistance (R = r):
P_max = E² / (4 r)

Electric Energy and Power:
• Power P = V · I = I² R = V² / R (Watts, W)
• Electrical Energy W = P · t = V I t (Joules, J)
• Kilowatt-Hour (kWh): Commercial unit of electrical energy.
  1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J = 3.6 MJ.`,
          workedExamples: [
            {
              problem: 'A 18 V cell with internal resistance r = 1.5 Ω is connected to load R = 4.5 Ω. Find current I and terminal voltage V.',
              solution: '1. Current I = E / (R + r) = 18 / (4.5 + 1.5) = 18 / 6 = 3 A.\n2. Terminal Voltage V = I R = 3 × 4.5 = 13.5 V.'
            },
            {
              problem: 'An electric heater is rated at 2000 W. If it operates for 5 hours daily for 30 days, find the energy consumed in kWh and cost at 0.50 ETB per kWh.',
              solution: '1. Energy = Power (kW) × Time (hours) = 2 kW × (5 × 30 h) = 2 × 150 = 300 kWh.\n2. Cost = 300 kWh × 0.50 ETB/kWh = 150 ETB.'
            }
          ],
          practiceQuestions: [
            {
              question: 'According to the Maximum Power Transfer Theorem, an electrical source delivers maximum power to an external load when:',
              options: [
                'Load resistance is zero',
                'Load resistance is infinite',
                'Load resistance equals the internal resistance of the source',
                'Internal resistance is zero'
              ],
              correctIndex: 2,
              explanation: 'Power transfer to the load R reaches its absolute mathematical maximum when R = r (internal resistance).'
            },
            {
              question: 'An electric iron rated at 1100 W is connected to a 220 V household power line. What is the current drawn by the iron?',
              options: ['0.2 A', '5.0 A', '242 A', '2.5 A'],
              correctIndex: 1,
              explanation: 'P = V · I  ⟹  I = P / V = 1100 W / 220 V = 5.0 A.'
            },
            {
              question: 'A battery of EMF 12 V and internal resistance 0.5 Ω delivers 4 A of current to an external circuit. What is the terminal voltage of the battery?',
              options: ['12 V', '10 V', '14 V', '8 V'],
              correctIndex: 1,
              explanation: 'Terminal voltage V = E - I r = 12 - (4 × 0.5) = 12 - 2 = 10 V.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 6,
      title: 'UNIT SIX: ELECTROMAGNETISM',
      description: 'Magnetic poles, Earth\'s field, magnetic force F = B q v sinθ, force on wire F = B I L sinθ, Ampere\'s law, solenoids, toroids, Faraday\'s & Lenz\'s laws, self/mutual inductance, generators, and transformers.',
      topics: [
        {
          id: 'phys-6-1',
          topicNumber: '6.1',
          title: 'Magnetic Fields, Domains & Force on Charges',
          summary: 'Magnetic force F = B q v sinθ, right-hand rule, and circular motion radius r = m v / (q B).',
          content: `### 6.1 Magnetic Fields and Force on Moving Charges

Magnetic Domains & Magnetization:
• Ferromagnetic materials (iron, cobalt, nickel) contain microscopic magnetized regions called domains.
• Magnetization occurs when domains align in the same direction.

Magnetic Force on a Moving Charge (F⃗):
F⃗ = q (v⃗ × B⃗)  ⟹  F = B q v sin θ
• Direction: Right-hand rule (thumb = velocity v, index = field B, palm/middle = force F on positive charge).
• Zero force when velocity is parallel to magnetic field (θ = 0° or 180°).
• Charged particle moving perpendicular to uniform B-field moves in a circle:
  F_c = F_mag  ⟹  (m v²) / r = B q v  ⟹  Radius r = (m v) / (q B)`,
          workedExamples: [
            {
              problem: 'A proton moves at v = 10⁶ m/s perpendicular to a B = 0.1 T magnetic field. Calculate the radius of its circular orbit (m_p = 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C).',
              solution: 'r = (m v) / (q B) = (1.67 × 10⁻²⁷ × 10⁶) / (1.6 × 10⁻¹⁹ × 0.1) = (1.67 × 10⁻²¹) / (1.6 × 10⁻²⁰) = 0.104 m.'
            },
            {
              problem: 'An electron enters a uniform magnetic field of 0.2 T at an angle of 30° to the field with speed 2 × 10⁶ m/s. Find the magnetic force acting on it.',
              solution: 'F = q v B sin θ = (1.6 × 10⁻¹⁹ C)(2 × 10⁶ m/s)(0.2 T) sin 30° = 6.4 × 10⁻¹⁴ × 0.5 = 3.2 × 10⁻¹⁴ N.'
            }
          ],
          practiceQuestions: [
            {
              question: 'When a positively charged particle moves parallel to the direction of a magnetic field, the magnetic force acting on it is:',
              options: ['Maximum', 'Zero', 'Directed along the field', 'Directed perpendicular to velocity'],
              correctIndex: 1,
              explanation: 'Magnetic force F = q v B sin θ. When velocity is parallel to the field, θ = 0°, so sin 0° = 0 and force is zero.'
            },
            {
              question: 'An electron enters a uniform magnetic field perpendicularly to its velocity. The path of the electron in the magnetic field will be:',
              options: ['A straight line', 'A parabola', 'A circle', 'A hyperbola'],
              correctIndex: 2,
              explanation: 'Since the magnetic force is always perpendicular to instantaneous velocity, it acts as a pure centripetal force producing circular motion.'
            },
            {
              question: 'What is the SI unit of magnetic flux density (magnetic field strength)?',
              options: ['Weber (Wb)', 'Tesla (T = N / (A·m))', 'Henry (H)', 'Gauss'],
              correctIndex: 1,
              explanation: 'The SI unit of magnetic field B is the Tesla (T), equivalent to 1 N/(A·m).'
            }
          ]
        },
        {
          id: 'phys-6-2',
          topicNumber: '6.2',
          title: 'Ampere\'s Law, Solenoids & Force Between Wires',
          summary: 'F = B I L sinθ, force between parallel wires F = mu_0 I1 I2 L / (2 pi r), Ampere\'s law, and solenoid field B = mu_0 n I.',
          content: `### 6.2 Magnetic Forces on Wires & Ampere's Law

Magnetic Force on Current-Carrying Wire:
F⃗ = I (L⃗ × B⃗)  ⟹  F = B I L sin θ

Force Between Two Parallel Current-Carrying Wires:
• Wires carrying currents in SAME direction ATTRACT each other.
• Wires carrying currents in OPPOSITE directions REPEL each other.
• Force per unit length: F / L = (μ_0 I_1 I_2) / (2 π r)
  - μ_0 = 4 π × 10⁻⁷ T m A⁻¹ (permeability of free space).

Ampere's Law & Magnetic Field Calculations:
Σ B⃗ · Δl⃗ = μ_0 I_enclosed
1. Long Straight Wire: B = (μ_0 I) / (2 π r)
2. Solenoid (n turns/meter): B = μ_0 n I = μ_0 (N / l) I
3. Toroid Core (N turns, radius r): B = (μ_0 N I) / (2 π r)`,
          workedExamples: [
            {
              problem: 'Find the magnetic field near the center of a 10 cm long solenoid with N = 400 turns carrying current I = 2.0 A.',
              solution: 'n = N / l = 400 / 0.1 m = 4000 turns/m.\nB = μ_0 n I = (4 π × 10⁻⁷) × 4000 × 2.0 = 3.2 π × 10⁻³ T ≈ 0.01 T.'
            },
            {
              problem: 'A wire of length 0.5 m carrying a current of 4.0 A is placed in a uniform magnetic field of 0.3 T at an angle of 90°. What is the magnetic force on the wire?',
              solution: 'F = B I L sin 90° = 0.3 × 4.0 × 0.5 × 1 = 0.6 N.'
            }
          ],
          practiceQuestions: [
            {
              question: 'Two long, straight parallel wires carry currents in the same direction. The interaction between the wires causes them to:',
              options: ['Repel each other', 'Attract each other', 'Rotate 90 degrees', 'Exert zero net force'],
              correctIndex: 1,
              explanation: 'By the Biot-Savart Law and right-hand rule, parallel currents in the same direction create magnetic fields that produce mutual attraction.'
            },
            {
              question: 'What is the magnetic field inside an ideal solenoid of length L with N closely spaced turns carrying current I?',
              options: ['B = μ₀ N I / L', 'B = μ₀ I / (2π r)', 'B = zero', 'B = μ₀ N I L'],
              correctIndex: 0,
              explanation: 'Inside a solenoid, the uniform field is B = μ₀ n I = μ₀ (N/L) I.'
            },
            {
              question: 'A wire of length 0.4 m carries a current of 5 A perpendicular to a uniform magnetic field of 0.6 T. What magnetic force acts on the wire?',
              options: ['0.12 N', '1.2 N', '2.4 N', '0.06 N'],
              correctIndex: 1,
              explanation: 'F = B I L sin 90° = 0.6 T × 5 A × 0.4 m × 1 = 1.2 N.'
            }
          ]
        },
        {
          id: 'phys-6-3',
          topicNumber: '6.3',
          title: 'Electromagnetic Induction, Generators & Transformers',
          summary: 'Faraday\'s law epsilon = -N ΔPhi/Δt, Lenz\'s law direction, self-inductance, AC generators, and transformer equations V_s / V_p = N_s / N_p.',
          content: `### 6.3 Electromagnetic Induction & Transformers

Faraday's Law of Induction:
The magnitude of induced electromotive force (EMF) in a closed circuit is directly proportional to the rate of change of magnetic flux (Φ = B A cos θ) through the circuit:
ε = -N · (ΔΦ / Δt)

Lenz's Law:
The direction of induced current is always such that its magnetic field OPPOSES the change in magnetic flux that produces it (represented by the negative sign in Faraday's law).

Transformers:
A transformer converts AC voltage levels using mutual induction between primary and secondary coils wound on a laminated iron core.
• Transformer Equation:
  V_s / V_p = N_s / N_p = I_p / I_s
• Step-Up Transformer: N_s > N_p  ⟹  V_s > V_p (Voltage stepped up, current stepped down).
• Step-Down Transformer: N_s < N_p  ⟹  V_s < V_p (Voltage stepped down, current stepped up).`,
          workedExamples: [
            {
              problem: 'A transformer has primary turns N_p = 240 and secondary turns N_s = 12. If input primary voltage V_p = 240 V, find output secondary voltage V_s.',
              solution: 'V_s = V_p × (N_s / N_p) = 240 V × (12 / 240) = 12 V (Step-down transformer).'
            },
            {
              problem: 'A coil of 50 turns experiences a change in magnetic flux from 0.2 Wb to 0.7 Wb in 0.1 s. Calculate the induced electromotive force.',
              solution: 'ΔΦ = 0.7 - 0.2 = 0.5 Wb.\nε = -N (ΔΦ / Δt) = -50 × (0.5 Wb / 0.1 s) = -50 × 5 = -250 V (magnitude 250 V).'
            }
          ],
          practiceQuestions: [
            {
              question: 'Lenz\'s law, which states that an induced current always opposes the change in flux causing it, is a direct manifestation of:',
              options: ['Conservation of Electric Charge', 'Conservation of Energy', 'Coulomb\'s Law', 'Ampere\'s Law'],
              correctIndex: 1,
              explanation: 'Lenz\'s Law enforces the Law of Conservation of Energy; mechanical work must be done against opposing induced forces to generate electrical power.'
            },
            {
              question: 'A transformer has 500 primary turns and 100 secondary turns. If the input AC voltage is 220 V, what is the output secondary voltage?',
              options: ['1100 V', '44 V', '50 V', '22 V'],
              correctIndex: 1,
              explanation: 'V_s = V_p (N_s / N_p) = 220 × (100 / 500) = 220 / 5 = 44 V.'
            },
            {
              question: 'In an ideal step-up transformer with 100% efficiency, when secondary voltage is higher than primary voltage, what happens to the secondary current?',
              options: [
                'Secondary current increases proportionally',
                'Secondary current decreases proportionally (I_s < I_p)',
                'Secondary current remains equal to primary current',
                'Secondary current becomes zero'
              ],
              correctIndex: 1,
              explanation: 'Since power P = V·I is conserved in an ideal transformer (V_p I_p = V_s I_s), stepping up voltage must reduce current proportionally.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 7,
      title: 'UNIT SEVEN: HEAT AND TEMPERATURE',
      description: 'Temperature scales conversions (Celsius, Kelvin, Fahrenheit), First Law of Thermodynamics ΔU = ΔQ + ΔW, thermal expansion of solids/liquids/gases, specific heat Q = mcΔT, latent heat Q = mL, and modes of heat transfer.',
      topics: [
        {
          id: 'phys-7-1',
          topicNumber: '7.1',
          title: 'Temperature Scales & First Law of Thermodynamics',
          summary: 'Conversions between °C, K, °F, thermal equilibrium, internal energy, and First Law ΔU = ΔQ + ΔW.',
          content: `### 7.1 Temperature, Heat & First Law of Thermodynamics

Temperature vs Heat:
• Temperature: Measure of average kinetic energy of particles (scalar, Kelvin K or °C).
• Heat (Q): Thermal energy transferred between objects due to a temperature difference (Joules J or calories cal; 1 cal = 4.184 J).

Temperature Conversions:
1. T_K = T_C + 273.15  or  T_C = T_K - 273.15
2. T_F = (9/5) T_C + 32  or  T_C = (5/9)(T_F - 32)
3. Temperature Difference: ΔT_C = ΔT_K. (A change of 1°C equals a change of 1 K).

First Law of Thermodynamics:
Energy conservation for thermodynamic systems:
ΔU = ΔQ + ΔW
• ΔU is increase in system internal energy.
• ΔQ is heat added to system (+ when added, - when lost).
• ΔW is work done ON the system (+ when work done on system, - when work done BY system).`,
          workedExamples: [
            {
              problem: 'Convert temperature -31°F into Celsius and Kelvin scales.',
              solution: '1. T_C = (5/9)(-31 - 32) = (5/9)(-63) = -35°C.\n2. T_K = T_C + 273.15 = -35 + 273.15 = 238.15 K.'
            },
            {
              problem: 'A gas system absorbs 500 J of heat while performing 200 J of expansion work on its surroundings. What is the change in internal energy ΔU?',
              solution: 'ΔQ = +500 J. Work done BY system means work done ON system ΔW = -200 J.\nΔU = ΔQ + ΔW = 500 - 200 = +300 J.'
            }
          ],
          practiceQuestions: [
            {
              question: 'At what temperature do the Celsius and Fahrenheit temperature scales have the exact same numerical value?',
              options: ['0°', '-40°', '32°', '100°'],
              correctIndex: 1,
              explanation: 'Setting T_C = T_F: T = (9/5)T + 32 ⟹ -(4/5)T = 32 ⟹ T = -40°.'
            },
            {
              question: 'The First Law of Thermodynamics (ΔU = ΔQ + ΔW) is a statement of which universal conservation principle?',
              options: ['Conservation of momentum', 'Conservation of mass', 'Conservation of energy', 'Conservation of charge'],
              correctIndex: 2,
              explanation: 'The First Law of Thermodynamics is the application of the Law of Conservation of Energy to thermodynamic processes.'
            },
            {
              question: 'A system absorbs 800 J of heat from a reservoir and 300 J of work is done ON the system by compression. What is the net increase in its internal energy ΔU?',
              options: ['500 J', '1100 J', '-500 J', '2400 J'],
              correctIndex: 1,
              explanation: 'ΔU = ΔQ + ΔW = 800 J + 300 J = 1100 J.'
            }
          ]
        },
        {
          id: 'phys-7-2',
          topicNumber: '7.2',
          title: 'Thermal Expansion & Heat Capacity',
          summary: 'Linear ΔL = L_0 α ΔT, Area ΔA = A_0 β ΔT, Volume ΔV = V_0 γ ΔT, specific heat Q = m c ΔT, and latent heat Q = m L.',
          content: `### 7.2 Thermal Expansion and Specific/Latent Heat

Thermal Expansion Formulas:
1. Linear Expansion (solids): ΔL = L_0 · α · ΔT  ⟹  L = L_0 (1 + α ΔT)
   - α is coefficient of linear expansion (K⁻¹).
2. Area / Superficial Expansion: ΔA = A_0 · β · ΔT,  where β = 2 α
3. Volume / Cubic Expansion: ΔV = V_0 · γ · ΔT,  where γ = 3 α

Specific Heat Capacity & Heat Capacity:
• Heat required to change temperature:
  Q = m · c · ΔT
  - c is specific heat capacity (J kg⁻¹ K⁻¹).
• Heat Capacity C = m · c (J/K).

Phase Changes & Latent Heat:
Heat required for phase change at constant temperature:
Q = m · L
• Latent Heat of Fusion (L_f): Solid ⟷ Liquid phase transition (e.g. melting ice).
• Latent Heat of Vaporization (L_v): Liquid ⟷ Gas phase transition (e.g. boiling water).

Modes of Heat Transfer:
1. Conduction: Direct molecular collisions in solids without bulk movement.
2. Convection: Mass movement of fluid currents (liquids and gases).
3. Radiation: Electromagnetic waves (infrared), does not require a medium.`,
          workedExamples: [
            {
              problem: 'A 4 m copper wire is heated from 10°C to 110°C (α = 1.7 × 10⁻⁵ K⁻¹). Calculate the change in length ΔL.',
              solution: 'ΔL = L_0 α ΔT = 4 m × (1.7 × 10⁻⁵ K⁻¹) × (110 - 10) K = 4 × 1.7 × 10⁻⁵ × 100 = 0.0068 m = 6.8 mm.'
            },
            {
              problem: 'Calculate heat required to convert 200 g of water at 100°C completely to steam at 100°C (L_v = 2.258 × 10⁶ J/kg).',
              solution: 'Q = m L_v = 0.2 kg × (2.258 × 10⁶ J/kg) = 4.516 × 10⁵ J = 451.6 kJ.'
            },
            {
              problem: 'How much heat is required to warm 500 g of water from 20°C to 80°C (specific heat c = 4184 J kg⁻¹ K⁻¹)?',
              solution: 'Q = m c ΔT = 0.5 kg × 4184 J/(kg·K) × (80 - 20) K = 0.5 × 4184 × 60 = 125,520 J ≈ 125.5 kJ.'
            }
          ],
          practiceQuestions: [
            {
              question: 'At what temperature does pure water exhibit its maximum density?',
              options: ['0°C', '10°C', '100°C', '4°C'],
              correctIndex: 3,
              explanation: 'Due to anomalous expansion, water contracts upon heating from 0°C to 4°C, reaching its maximum density at 4°C.'
            },
            {
              question: 'For an isotropic solid substance, the relationship between the coefficient of volume expansion (γ) and the coefficient of linear expansion (α) is:',
              options: ['γ = α', 'γ = 2α', 'γ = 3α', 'γ = α³'],
              correctIndex: 2,
              explanation: 'Volume expansion occurs in 3 orthogonal dimensions, yielding γ = 3α for isotropic solids.'
            },
            {
              question: 'Which mode of thermal energy transfer does NOT require any physical material medium to propagate?',
              options: ['Thermal Conduction', 'Thermal Convection', 'Thermal Radiation', 'Advection'],
              correctIndex: 2,
              explanation: 'Thermal radiation travels by electromagnetic waves (photons) through vacuum, such as solar heat reaching Earth.'
            },
            {
              question: 'How much heat is needed to melt 2.0 kg of ice at 0°C to water at 0°C? (Latent heat of fusion L_f = 3.34 × 10⁵ J/kg)',
              options: ['334 kJ', '668 kJ', '167 kJ', '1336 kJ'],
              correctIndex: 1,
              explanation: 'Q = m L_f = 2.0 kg × (3.34 × 10⁵ J/kg) = 6.68 × 10⁵ J = 668 kJ.'
            }
          ]
        }
      ]
    }
  ]
};
