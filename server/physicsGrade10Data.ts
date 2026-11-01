// server/physicsGrade10Data.ts
// Structured Digital Textbook Content — Grade 10 Physics
// Ethiopian National Curriculum • Federal Democratic Republic of Ethiopia
// 258 Pages | 6 Units | 36+ Topics | EUEE-Aligned

export function getPhysics10PageContent(pageNum: number): string {
  const p = pageNum;

  // ─── FRONT MATTER ─────────────────────────────────────────────────────────
  if (p === 1) {
    return `# Grade 10 Physics Student Textbook
## Federal Democratic Republic of Ethiopia • Ministry of Education

> 🏛️ **Official Curriculum — FDRE Ministry of Education**
> Authorized under the General Education Quality Improvement Program for Equity (GEQIP-E).

| Field | Details |
|-------|---------|
| **Subject** | Physics |
| **Level** | Secondary School — Grade 10 |
| **Total Pages** | 258 |
| **Units** | 6 Major Units |
| **Exam Alignment** | Ethiopian University Entrance Examination (EUEE) |

### 📚 Unit Overview
| Unit | Title | Pages |
|------|-------|-------|
| **1** | Vector Quantities | 1–32 |
| **2** | Motion in Two Dimensions | 33–74 |
| **3** | Dynamics and Gravitation | 75–120 |
| **4** | Current Electricity | 121–166 |
| **5** | Magnetism | 167–203 |
| **6** | Electromagnetic Waves and Geometrical Optics | 204–258 |

> 💡 **EUEE Strategy:** Grade 10 Physics contributes approximately 15–20 questions to the national entrance exam. Focus on Unit 2 (Projectile Motion), Unit 3 (Newton's Laws), Unit 4 (Ohm's Law), and Unit 6 (Optics) — the four highest-frequency units.`;
  }

  if (p === 2) {
    return `## Table of Contents — Grade 10 Physics

### Unit 1: Vector Quantities (Pages 1–32)
- 1.1 Scalars and Vectors
- 1.2 Vector Addition: Graphical Methods
- 1.3 Vector Addition: Analytical (Component) Method
- 1.4 Vector Subtraction
- 1.5 Multiplication of Vectors (Dot & Cross Products)

### Unit 2: Motion in Two Dimensions (Pages 33–74)
- 2.1 Displacement, Velocity & Acceleration as Vectors
- 2.2 Projectile Motion
- 2.3 Uniform Circular Motion
- 2.4 Relative Motion

### Unit 3: Dynamics and Gravitation (Pages 75–120)
- 3.1 Review of Newton's Laws of Motion
- 3.2 Types of Forces
- 3.3 Friction Force
- 3.4 Newton's Law of Universal Gravitation
- 3.5 Gravitational Field & Weight
- 3.6 Satellite Motion & Orbital Mechanics

### Unit 4: Current Electricity (Pages 121–166)
- 4.1 Electric Current & Charge
- 4.2 Ohm's Law & Resistance
- 4.3 EMF & Terminal Voltage
- 4.4 Kirchhoff's Laws
- 4.5 Electric Power & Energy
- 4.6 Series & Parallel Circuits

### Unit 5: Magnetism (Pages 167–203)
- 5.1 Magnets and Magnetic Fields
- 5.2 Magnetic Field of Current-Carrying Conductors
- 5.3 Earth's Magnetic Field
- 5.4 Force on Charges & Conductors in Magnetic Fields
- 5.5 Applications of Magnetism

### Unit 6: Electromagnetic Waves and Geometrical Optics (Pages 204–258)
- 6.1 Electromagnetic Waves & the EM Spectrum
- 6.2 Light as a Wave (Reflection & Refraction)
- 6.3 Mirrors and Lenses (Ray Diagrams)
- 6.4 The Human Eye & Optical Instruments
- 6.5 Color and Light`;
  }

  // ─── UNIT 1: VECTOR QUANTITIES (Pages 1–32) ───────────────────────────────
  if (p <= 32) {
    if (p <= 8) {
      return `# Unit 1: Vector Quantities
## 1.1 Scalars and Vectors
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

> 🎯 **Unit Objectives — By the end of this unit, you should be able to:**
> • Distinguish between scalar and vector quantities with real-world examples
> • Perform vector addition using graphical (triangle and parallelogram) methods
> • Resolve vectors into components and use the analytical method to find resultants
> • Calculate the magnitude and direction of resultant vectors
> • Apply vector operations to physics problems in Ethiopian contexts

---

### 📌 1.1.1 Scalar Quantities

A **scalar quantity** is a physical quantity that is completely described by its **magnitude (size) alone** — no direction is needed.

| Scalar Quantity | Example |
|----------------|---------|
| Mass | 75 kg |
| Temperature | 37°C (normal body temperature) |
| Time | 3600 s (1 hour) |
| Speed | 120 km/h |
| Energy | 500 J |
| Distance | 5.4 km |

> 💡 **Memory Tip:** Scalars are just **numbers with units** — "I drove 200 km" is scalar. You don't ask "200 km in which direction?" for fuel consumption.

---

### 📌 1.1.2 Vector Quantities

A **vector quantity** requires both **magnitude AND direction** for a complete description.

$$\\vec{A} \\text{ (vector notation: bold or arrow above symbol)}$$

| Vector Quantity | Example |
|----------------|---------|
| Displacement | 5 km North |
| Velocity | 30 m/s East |
| Acceleration | 9.8 m/s² downward |
| Force | 200 N at 30° above horizontal |
| Momentum | 45 kg·m/s Northward |

> 🇪🇹 **Ethiopian Real-World Connection:**
> When a car travels from Addis Ababa to Hawassa (approx. 275 km South), the **distance** is a scalar (275 km), but the **displacement** is a vector (275 km due South).

---

### ✍️ Self-Check Questions
1. Is "the wind blows at 80 km/h" a scalar or vector statement? What is missing?
2. A student runs 400 m around a circular track and returns to start. What is the distance? What is the displacement?
3. List three more scalar and three more vector quantities from everyday Ethiopian life.`;
    }

    if (p <= 16) {
      return `# Unit 1: Vector Quantities
## 1.2 Vector Addition — Graphical Methods
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📐 Representing Vectors Graphically

A vector is represented by an **arrow**:
- **Length** ∝ Magnitude (drawn to scale)
- **Arrowhead direction** = Direction of the vector

$$\\text{Scale: } 1 \\text{ cm} = 10 \\text{ N (for force diagrams)}$$

---

### 📐 Method 1: The Triangle (Tip-to-Tail) Rule

To add vectors $\\vec{A}$ and $\\vec{B}$:
1. Draw $\\vec{A}$ to scale in the correct direction.
2. Draw $\\vec{B}$ starting from the **tip (head) of $\\vec{A}$**.
3. The **resultant** $\\vec{R} = \\vec{A} + \\vec{B}$ is the vector drawn from the **tail of $\\vec{A}$** to the **tip of $\\vec{B}$**.

$$\\vec{R} = \\vec{A} + \\vec{B}$$

> 🖼️ **Figure 1.2** — Tip-to-Tail Vector Addition
> *(See original textbook illustration in the "Exact Page" tab for the diagram)*

---

### 📐 Method 2: The Parallelogram Rule

To add vectors $\\vec{A}$ and $\\vec{B}$:
1. Draw both vectors from the **same starting point (tail-to-tail)**.
2. Complete the parallelogram using both vectors as adjacent sides.
3. The **diagonal** of the parallelogram from the common tail is the resultant $\\vec{R}$.

**For two vectors at angle $\\theta$ between them:**

$$|\\vec{R}| = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$$

$$\\phi = \\arctan\\left(\\frac{B\\sin\\theta}{A + B\\cos\\theta}\\right)$$

where $\\phi$ is the angle the resultant makes with $\\vec{A}$.

---

### 💡 Worked Example 1.1
Two forces act on a box: $\\vec{F_1} = 40$ N East and $\\vec{F_2} = 30$ N North. Find the resultant.

**Solution (since $\\theta = 90°$):**

$$|\\vec{R}| = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50 \\text{ N}$$

$$\\phi = \\arctan\\left(\\frac{30}{40}\\right) = \\arctan(0.75) \\approx 36.9° \\text{ North of East}$$

**Result:** $\\vec{R} = 50$ N at $36.9°$ North of East

---

### ✍️ Practice Questions
1. Two displacement vectors of 60 m East and 80 m North — find the resultant using the parallelogram rule.
2. If two vectors of equal magnitude 20 N act at 120° to each other, find the magnitude of the resultant.`;
    }

    if (p <= 24) {
      return `# Unit 1: Vector Quantities
## 1.3 Vector Resolution — The Component (Analytical) Method
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 Resolving a Vector into Components

Any vector $\\vec{A}$ can be split into two perpendicular components:
- **Horizontal component:** $A_x = A\\cos\\theta$
- **Vertical component:** $A_y = A\\sin\\theta$

where $\\theta$ is the angle measured from the **positive x-axis (East direction)**.

$$\\vec{A} = A_x\\hat{i} + A_y\\hat{j}$$

> 🖼️ **Figure 1.5** — Vector Resolution into x and y components
> *(See exact page for the right-triangle component diagram)*

---

### 📐 Analytical Method for Adding Multiple Vectors

**Step-by-Step Procedure:**

| Step | Action |
|------|--------|
| **1** | Resolve each vector into $x$ and $y$ components |
| **2** | Sum all $x$-components: $R_x = \\sum A_x = \\sum A\\cos\\theta$ |
| **3** | Sum all $y$-components: $R_y = \\sum A_y = \\sum A\\sin\\theta$ |
| **4** | Find magnitude: $|\\vec{R}| = \\sqrt{R_x^2 + R_y^2}$ |
| **5** | Find direction: $\\theta_R = \\arctan(R_y / R_x)$ |

---

### 💡 Worked Example 1.3
Three forces act on a structural column:
- $\\vec{F_1} = 50$ N at $0°$ (East)
- $\\vec{F_2} = 70$ N at $120°$ (North of East)
- $\\vec{F_3} = 60$ N at $240°$ (South of West)

**Component calculations:**

| Vector | $F_x$ | $F_y$ |
|--------|-------|-------|
| $\\vec{F_1}$ | $50\\cos0° = +50.0$ N | $50\\sin0° = 0$ N |
| $\\vec{F_2}$ | $70\\cos120° = -35.0$ N | $70\\sin120° = +60.6$ N |
| $\\vec{F_3}$ | $60\\cos240° = -30.0$ N | $60\\sin240° = -51.96$ N |
| **Sum** | $R_x = -15.0$ N | $R_y = +8.64$ N |

$$|\\vec{R}| = \\sqrt{(-15)^2 + (8.64)^2} = \\sqrt{225 + 74.6} = \\sqrt{299.6} \\approx 17.3 \\text{ N}$$

$$\\theta_R = \\arctan\\left(\\frac{8.64}{-15}\\right) \\approx 150° \\text{ (2nd quadrant, since } R_x < 0, R_y > 0)$$

---

### ⚡ EUEE Exam Tip
> The analytical method is the **most reliable method** for the national exam when vectors are not perpendicular. Always resolve, sum components, then reconstruct. The graphical method is only approximate.

---

### ✍️ Review Exercise 1.3
1. Resolve a vector of magnitude 100 N at 53° above the horizontal into its components.
2. Find the resultant of: 20 N at 30°, 30 N at 90°, and 25 N at 150°.`;
    }

    // Pages 25-32: Vector subtraction and products
    return `# Unit 1: Vector Quantities
## 1.4 Vector Subtraction & 1.5 Vector Products
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 1.4 Vector Subtraction

Vector subtraction is defined as **adding the negative** of a vector:

$$\\vec{A} - \\vec{B} = \\vec{A} + (-\\vec{B})$$

where $-\\vec{B}$ has the same magnitude as $\\vec{B}$ but **opposite direction**.

> 🖼️ **Figure 1.8** — Vector Subtraction (tail-to-tail method for $\\vec{A} - \\vec{B}$)
> *(See exact page for the graphical illustration)*

---

### 📌 1.5.1 Scalar (Dot) Product

The **dot product** of two vectors gives a **scalar** result:

$$\\vec{A} \\cdot \\vec{B} = |A||B|\\cos\\theta$$

where $\\theta$ is the angle between the two vectors.

**Properties:**
- $\\vec{A} \\cdot \\vec{B} = \\vec{B} \\cdot \\vec{A}$ (commutative)
- $\\hat{i} \\cdot \\hat{i} = \\hat{j} \\cdot \\hat{j} = \\hat{k} \\cdot \\hat{k} = 1$
- $\\hat{i} \\cdot \\hat{j} = \\hat{j} \\cdot \\hat{k} = \\hat{k} \\cdot \\hat{i} = 0$

**Physical application:** Work done = $W = \\vec{F} \\cdot \\vec{d} = Fd\\cos\\theta$

---

### 📌 1.5.2 Vector (Cross) Product

The **cross product** of two vectors gives a **vector** result:

$$|\\vec{A} \\times \\vec{B}| = |A||B|\\sin\\theta$$

Direction: determined by the **Right-Hand Rule** (perpendicular to both $\\vec{A}$ and $\\vec{B}$).

**Physical application:** Torque = $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$

---

### ✍️ Unit 1 Review Questions (EUEE Style)
1. What is the angle between two vectors $\\vec{A}$ and $\\vec{B}$ if $\\vec{A} \\cdot \\vec{B} = 0$?
2. Three displacement vectors: 3 m East, 4 m North, 5 m at 45° NE. Find the resultant using the analytical method.
3. A force of 50 N acts at 37° to displacement of 20 m. Calculate the work done.
4. (**EUEE 2015**) If $|\\vec{A}| = 5$ and $|\\vec{B}| = 12$ and they are perpendicular, find $|\\vec{A} + \\vec{B}|$.`;
  }

  // ─── UNIT 2: MOTION IN TWO DIMENSIONS (Pages 33–74) ──────────────────────
  if (p <= 74) {
    if (p <= 42) {
      return `# Unit 2: Motion in Two Dimensions
## 2.1 Displacement, Velocity & Acceleration as Vectors
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

> 🎯 **Unit 2 Objectives:**
> • Apply vector concepts to describe 2D motion
> • Analyze projectile motion trajectories
> • Solve problems involving uniform circular motion
> • Understand relative velocity and frames of reference

---

### 📌 2.1 Position and Displacement Vectors

The **position vector** $\\vec{r}$ locates a point relative to the origin:
$$\\vec{r} = x\\hat{i} + y\\hat{j}$$

**Displacement** is the change in position:
$$\\vec{\\Delta r} = \\vec{r_2} - \\vec{r_1} = \\Delta x\\hat{i} + \\Delta y\\hat{j}$$

---

### 📌 2.1.1 Average Velocity (Vector)

$$\\vec{v}_{avg} = \\frac{\\vec{\\Delta r}}{\\Delta t} = \\frac{\\Delta x}{\\Delta t}\\hat{i} + \\frac{\\Delta y}{\\Delta t}\\hat{j}$$

### 📌 2.1.2 Instantaneous Velocity

$$\\vec{v} = \\frac{d\\vec{r}}{dt} = v_x\\hat{i} + v_y\\hat{j}$$

$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$

### 📌 2.1.3 Acceleration Vector

$$\\vec{a} = \\frac{\\Delta\\vec{v}}{\\Delta t} = \\frac{v_x^f - v_x^i}{\\Delta t}\\hat{i} + \\frac{v_y^f - v_y^i}{\\Delta t}\\hat{j}$$

---

### 💡 Key Insight for 2D Motion
In two-dimensional motion with **constant acceleration** (like gravity), the **x and y motions are INDEPENDENT**:

| x-direction | y-direction |
|-------------|-------------|
| $v_x = v_{x0} + a_x t$ | $v_y = v_{y0} + a_y t$ |
| $x = v_{x0}t + \\frac{1}{2}a_x t^2$ | $y = v_{y0}t + \\frac{1}{2}a_y t^2$ |

> 🇪🇹 **Local Context:** A ball thrown sideways from the top of Entoto Hill follows the same projectile path as one thrown anywhere in the world — gravity acts the same everywhere on Earth's surface.

---

### ✍️ Self-Check 2.1
1. A car moves from position $(0, 0)$ to $(80, 60)$ in 10 s. Find its average velocity vector and speed.
2. A particle has velocity $(3\\hat{i} + 4\\hat{j})$ m/s and acceleration $(2\\hat{i} - 1\\hat{j})$ m/s². Find its velocity after 3 s.`;
    }

    if (p <= 58) {
      return `# Unit 2: Motion in Two Dimensions
## 2.2 Projectile Motion
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 What is Projectile Motion?

**Projectile motion** occurs when an object is launched into the air and moves under the **sole influence of gravity** (air resistance ignored).

> 🔑 **Core Assumptions:**
> • Acceleration due to gravity: $g = 9.8 \\approx 10$ m/s² (downward)
> • Horizontal acceleration: $a_x = 0$ (no air resistance)
> • Vertical acceleration: $a_y = -g = -9.8$ m/s² (downward)

---

### 📐 Projectile Motion Equations

**Initial velocity components** (launch angle $\\theta$ above horizontal, initial speed $v_0$):

$$v_{x0} = v_0 \\cos\\theta \\qquad v_{y0} = v_0 \\sin\\theta$$

**During flight (at time $t$):**

| Quantity | Horizontal (x) | Vertical (y) |
|----------|---------------|--------------|
| **Position** | $x = v_{x0} \\cdot t$ | $y = v_{y0}t - \\frac{1}{2}gt^2$ |
| **Velocity** | $v_x = v_{x0}$ (constant) | $v_y = v_{y0} - gt$ |

**Key formulas (launch & land at same height):**

$$\\text{Time of flight: } T = \\frac{2v_0\\sin\\theta}{g}$$

$$\\text{Maximum height: } H = \\frac{v_0^2\\sin^2\\theta}{2g}$$

$$\\text{Horizontal range: } R = \\frac{v_0^2\\sin2\\theta}{g}$$

> ⚡ **Maximum range at $\\theta = 45°$** (since $\\sin 2\\theta$ is maximum at $2\\theta = 90°$)

---

### 💡 Worked Example 2.3 (EUEE Classic)
A ball is kicked from the ground at 20 m/s at 30° to the horizontal. Find:
(a) Maximum height   (b) Time of flight   (c) Horizontal range

**Solution:**
$$v_{x0} = 20\\cos30° = 20 \\times 0.866 = 17.3 \\text{ m/s}$$
$$v_{y0} = 20\\sin30° = 20 \\times 0.5 = 10 \\text{ m/s}$$

**(a)** $H = \\frac{v_{y0}^2}{2g} = \\frac{(10)^2}{2 \\times 10} = \\frac{100}{20} = 5$ m

**(b)** $T = \\frac{2v_{y0}}{g} = \\frac{2 \\times 10}{10} = 2$ s

**(c)** $R = v_{x0} \\times T = 17.3 \\times 2 = 34.6$ m

---

### ⚡ EUEE Exam Traps
1. **Horizontal velocity is CONSTANT** throughout flight — students often reduce it.
2. At the **top** of trajectory: $v_y = 0$ but $v_x = v_{x0}$ (speed ≠ 0 at maximum height).
3. **Range formula** $R = \\frac{v_0^2\\sin2\\theta}{g}$ only works when launch and landing heights are equal.

---

### ✍️ Review Exercise 2.2
1. A ball is thrown horizontally at 15 m/s from a cliff 20 m high. How far does it land from the base?
2. At what two angles gives the same range? (Answer: $\\theta$ and $90° - \\theta$)
3. (**EUEE 2016**) A projectile has range 80 m. What launch speed gives this range at 45°?`;
    }

    if (p <= 66) {
      return `# Unit 2: Motion in Two Dimensions
## 2.3 Uniform Circular Motion
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 What is Uniform Circular Motion?

An object in **uniform circular motion** moves at **constant speed** in a **circular path**.

> ⚠️ Even though speed is constant, **velocity is NOT constant** (direction changes constantly) → there IS acceleration!

---

### 📐 Key Quantities

**Period (T):** Time for one complete revolution
$$T = \\frac{2\\pi r}{v} \\quad [\\text{seconds}]$$

**Frequency (f):** Number of revolutions per second
$$f = \\frac{1}{T} \\quad [\\text{Hz = rev/s}]$$

**Angular velocity ($\\omega$):** Rate of change of angle
$$\\omega = \\frac{2\\pi}{T} = 2\\pi f \\quad [\\text{rad/s}]$$

**Speed in circular motion:**
$$v = r\\omega = \\frac{2\\pi r}{T}$$

---

### 📌 Centripetal Acceleration

The acceleration always points **toward the center** of the circle (centripetal = "center-seeking"):

$$a_c = \\frac{v^2}{r} = r\\omega^2 \\quad [\\text{m/s}^2]$$

> 🖼️ **Figure 2.5** — Centripetal acceleration direction in circular motion
> *(See exact page for the circle diagram with vectors)*

### 📌 Centripetal Force

By Newton's Second Law, the net force causing circular motion:

$$F_c = ma_c = \\frac{mv^2}{r} = mr\\omega^2$$

This force always points **toward the center** — it is NOT a new type of force; it is provided by gravity, tension, friction, normal force, etc.

---

### 🇪🇹 Real-World Examples in Ethiopia
| Situation | Centripetal Force Source |
|-----------|------------------------|
| Car turning on Bole Road | Friction between tires and road |
| Satellite orbiting Earth | Gravitational force |
| Ball on a string (laboratory) | Tension in string |
| Ethiopian Airlines plane banking | Lift force component |

---

### ✍️ Self-Check 2.3
1. A car travels in a circle of radius 50 m at 10 m/s. Find centripetal acceleration and force (mass = 1000 kg).
2. A satellite orbits at 400 km above Earth (Earth's radius = 6400 km, $g$ at surface = 9.8 m/s²). Find its orbital speed. *(Hint: gravity provides centripetal force)*
3. (**EUEE 2018**) If a centripetal force doubles while radius halves, what happens to the speed?`;
    }

    // Pages 67-74: Relative Motion
    return `# Unit 2: Motion in Two Dimensions
## 2.4 Relative Motion
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 Frames of Reference

Motion is always described **relative to a reference frame** (observer).

**Galilean Velocity Transformation:**

If object A moves with velocity $\\vec{v}_{AB}$ (A relative to B), and B moves with velocity $\\vec{v}_{BE}$ relative to Earth E, then A's velocity relative to Earth is:

$$\\vec{v}_{AE} = \\vec{v}_{AB} + \\vec{v}_{BE}$$

---

### 💡 Worked Example — River Crossing

A boat can travel at 4 m/s across still water. The river flows East at 3 m/s. The boat aims directly North.

**Actual velocity of boat:**
$$|\\vec{v}_{actual}| = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5 \\text{ m/s}$$

$$\\theta = \\arctan\\left(\\frac{3}{4}\\right) \\approx 36.9° \\text{ East of North}$$

**To reach directly North** (angle required):
$$\\cos\\alpha = \\frac{3}{4} \\Rightarrow \\alpha \\approx 41.4° \\text{ West of North (aiming angle)}$$
$$v_{actual} = \\sqrt{4^2 - 3^2} = \\sqrt{7} \\approx 2.65 \\text{ m/s North}$$

---

### ✍️ Unit 2 Review (EUEE Focus)
1. A plane flies at 300 km/h North. Wind blows at 80 km/h East. Find actual velocity.
2. A ball is thrown at 60° at 25 m/s. Find: (a) max height (b) range (c) velocity at max height.
3. A stone is dropped from a moving train at 20 m/s. Describe the path seen by: (a) the train passenger (b) a stationary observer.
4. (**EUEE 2017**) A satellite has orbital period 90 min at height 300 km. Find its orbital speed.`;
  }

  // ─── UNIT 3: DYNAMICS AND GRAVITATION (Pages 75–120) ─────────────────────
  if (p <= 120) {
    if (p <= 88) {
      return `# Unit 3: Dynamics and Gravitation
## 3.1 – 3.3 Newton's Laws & Friction
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

> 🎯 **Unit 3 Objectives:**
> • Apply Newton's three laws to complex 2D problems
> • Analyze friction forces (static and kinetic)
> • Apply Newton's Law of Universal Gravitation
> • Understand satellite motion and escape velocity

---

### 📌 3.1 Newton's Three Laws — Review & Extension

**Newton's First Law (Inertia):**
> "An object remains at rest or in uniform motion unless acted upon by a net external force."
$$\\sum \\vec{F} = 0 \\Rightarrow \\vec{v} = \\text{constant}$$

**Newton's Second Law:**
$$\\sum \\vec{F} = m\\vec{a}$$

In component form:
$$\\sum F_x = ma_x \\qquad \\sum F_y = ma_y$$

**Newton's Third Law (Action-Reaction):**
$$\\vec{F}_{AB} = -\\vec{F}_{BA}$$

> ⚠️ **Key Misconception:** Action-reaction pairs act on **different objects** — they NEVER cancel each other in a free body diagram for one object.

---

### 📌 3.2 Friction Forces

**Static friction** ($f_s$): Prevents relative motion (up to a maximum):
$$f_s \\leq \\mu_s N$$

**Kinetic friction** ($f_k$): Acts when surfaces slide:
$$f_k = \\mu_k N$$

where $N$ is the normal force and $\\mu$ is the coefficient of friction.

> 📊 Always: $\\mu_s > \\mu_k$ (harder to start sliding than to keep sliding)

---

### 💡 Worked Example 3.2 — Block on Incline with Friction

A 10 kg block sits on a 30° incline. $\\mu_s = 0.4$, $\\mu_k = 0.3$.

**Forces along incline:**
- Weight component down the slope: $mg\\sin30° = 10 \\times 10 \\times 0.5 = 50$ N
- Normal force: $N = mg\\cos30° = 10 \\times 10 \\times 0.866 = 86.6$ N
- Max static friction: $f_s = \\mu_s N = 0.4 \\times 86.6 = 34.6$ N

Since $mg\\sin30° = 50$ N $> f_{s,max} = 34.6$ N → **Block slides!**

**Acceleration:**
$$ma = mg\\sin30° - \\mu_k mg\\cos30°$$
$$a = g(\\sin30° - \\mu_k\\cos30°) = 10(0.5 - 0.3 \\times 0.866) = 10(0.5 - 0.26) = 2.4 \\text{ m/s}^2$$

---

### ✍️ Self-Check 3.2
1. A car decelerates from 20 m/s to rest in 50 m. If $m = 800$ kg, find the braking friction force.
2. Two blocks (5 kg and 3 kg) are connected by a string over a frictionless pulley (Atwood machine). Find acceleration and tension.`;
    }

    if (p <= 104) {
      return `# Unit 3: Dynamics and Gravitation
## 3.4 Newton's Law of Universal Gravitation
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 Newton's Law of Universal Gravitation

Every mass in the universe attracts every other mass with a force:

$$F_g = G\\frac{m_1 m_2}{r^2}$$

where:
- $G = 6.674 \\times 10^{-11}$ N·m²/kg² (Universal Gravitational Constant)
- $m_1, m_2$ = masses of the two objects (kg)
- $r$ = distance between their centers (m)

> 🔑 **Key Features:**
> - Always **attractive** (never repulsive)
> - **Inverse-square law** (doubling distance → force decreases by factor of 4)
> - Acts along the line joining the centers of the masses

---

### 📌 3.5 Gravitational Field Strength

The **gravitational field strength** $g$ at distance $r$ from a mass $M$:

$$g = \\frac{GM}{r^2}$$

**At Earth's surface** ($M_E = 5.97 \\times 10^{24}$ kg, $R_E = 6.4 \\times 10^6$ m):

$$g_0 = \\frac{GM_E}{R_E^2} = \\frac{(6.674 \\times 10^{-11})(5.97 \\times 10^{24})}{(6.4 \\times 10^6)^2} \\approx 9.8 \\text{ m/s}^2$$

**Variation with altitude $h$:**
$$g_h = \\frac{GM_E}{(R_E + h)^2} = g_0\\left(\\frac{R_E}{R_E + h}\\right)^2$$

---

### 📌 3.6 Satellite Motion

A satellite orbits at radius $r$ when gravity provides exactly the centripetal force:

$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

$$v_{orbit} = \\sqrt{\\frac{GM}{r}}$$

**Orbital period** (Kepler's Third Law):

$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

$$T^2 = \\frac{4\\pi^2}{GM}r^3 \\quad \\Rightarrow \\quad T^2 \\propto r^3$$

**Escape velocity** (to leave Earth's gravitational field):

$$v_{esc} = \\sqrt{\\frac{2GM_E}{R_E}} = \\sqrt{2gR_E} \\approx 11.2 \\text{ km/s}$$

---

### 🇪🇹 Ethiopian Context
> Ethiopia's **ETRSS-1** satellite (launched 2019) orbits at ~500 km altitude. Calculate its orbital speed and period!
> $r = 6400 + 500 = 6900$ km $= 6.9 \\times 10^6$ m
> $v = \\sqrt{gR_E^2/r} = \\sqrt{9.8 \\times (6.4 \\times 10^6)^2 / (6.9 \\times 10^6)} \\approx 7.6$ km/s

---

### ✍️ Review Exercise 3.4 (EUEE Style)
1. Two 1 kg balls are 1 m apart. Find the gravitational force between them.
2. If a planet has twice Earth's mass and twice Earth's radius, what is $g$ on its surface?
3. (**EUEE 2017**) A satellite orbits at 4$R_E$ from Earth's center. Find its orbital speed in terms of $g$ and $R_E$.`;
    }

    // Pages 105-120
    return `# Unit 3: Dynamics and Gravitation
## Unit 3 Review — Dynamics, Gravitation & Applications
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📝 Unit 3 Summary — Key Formulas

| Concept | Formula |
|---------|---------|
| Newton's 2nd Law | $\\vec{F}_{net} = m\\vec{a}$ |
| Friction (static) | $f_s \\leq \\mu_s N$ |
| Friction (kinetic) | $f_k = \\mu_k N$ |
| Universal Gravitation | $F_g = G\\frac{m_1 m_2}{r^2}$ |
| Surface gravity | $g = GM/R^2$ |
| Orbital speed | $v = \\sqrt{GM/r}$ |
| Escape speed | $v_{esc} = \\sqrt{2GM/R}$ |
| Kepler's 3rd Law | $T^2 \\propto r^3$ |

---

### 💡 EUEE Practice — Unit 3 Mixed Problems

**Q1.** A 2 kg block on a horizontal surface is pulled by 20 N at 37° above horizontal ($\\mu_k = 0.2$). Find acceleration.

$$F_x = 20\\cos37° = 16 \\text{ N (forward)}$$
$$N = mg - F\\sin37° = 20 - 12 = 8 \\text{ N (upward pull reduces normal force!)}$$
$$f_k = 0.2 \\times 8 = 1.6 \\text{ N}$$
$$a = (16 - 1.6)/2 = 7.2 \\text{ m/s}^2$$

**Q2.** At what height above Earth's surface is $g = g_0/4$?
$$g_h = g_0\\left(\\frac{R_E}{R_E+h}\\right)^2 = \\frac{g_0}{4}$$
$$\\frac{R_E}{R_E+h} = \\frac{1}{2} \\Rightarrow h = R_E = 6400 \\text{ km}$$

**Q3.** Three equal masses $m$ are at corners of an equilateral triangle of side $L$. Find the net gravitational force on one mass.

By symmetry: two forces of magnitude $F = Gm^2/L^2$ at 60° to each other.
$$|F_{net}| = F\\sqrt{3} = \\frac{\\sqrt{3}Gm^2}{L^2}$$

---

### ✍️ Unit 3 Comprehensive Review
1. Explain why astronauts in orbit feel "weightless" even though gravity acts on them.
2. Why does a heavier and lighter ball dropped from the same height reach the ground at the same time (ignoring air resistance)?
3. A rocket at Earth's surface has weight W. What is its weight at height $3R_E$ above Earth's surface?`;
  }

  // ─── UNIT 4: CURRENT ELECTRICITY (Pages 121–166) ─────────────────────────
  if (p <= 166) {
    if (p <= 135) {
      return `# Unit 4: Current Electricity
## 4.1 Electric Current, Charge & Ohm's Law
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

> 🎯 **Unit 4 Objectives:**
> • Define electric current, charge, and potential difference
> • Apply Ohm's Law to simple and complex circuits
> • Analyze series and parallel circuits using Kirchhoff's Laws
> • Calculate electric power and energy consumption
> • Understand EMF, terminal voltage, and internal resistance

---

### 📌 4.1 Electric Charge and Current

**Electric Charge (Q):** Measured in **Coulombs (C)**

Elementary charge: $e = 1.6 \\times 10^{-19}$ C (charge of 1 electron)

**Electric Current (I):** Rate of flow of charge:

$$I = \\frac{Q}{t} \\quad [\\text{Amperes, A}]$$

- **Conventional current**: flows from + to − (opposite to electron flow)
- **1 Ampere** = 1 Coulomb per second

---

### 📌 4.2 Ohm's Law

**Ohm's Law:** At constant temperature, current through a conductor is proportional to potential difference:

$$V = IR$$

where:
- $V$ = Potential difference (Volts, V)
- $I$ = Current (Amperes, A)
- $R$ = Resistance (Ohms, Ω)

**Resistance** depends on material properties:
$$R = \\rho \\frac{L}{A}$$

where $\\rho$ = resistivity (Ω·m), $L$ = length (m), $A$ = cross-sectional area (m²)

| Material | Resistivity $\\rho$ (Ω·m) |
|----------|--------------------------|
| Silver | $1.59 \\times 10^{-8}$ |
| Copper | $1.72 \\times 10^{-8}$ |
| Aluminum | $2.82 \\times 10^{-8}$ |
| Iron | $1.0 \\times 10^{-7}$ |
| Silicon | $640$ |
| Glass | $10^{10}–10^{14}$ |

---

### 📌 4.3 EMF and Terminal Voltage

A battery has **EMF ($\\mathcal{E}$)** (maximum voltage) and **internal resistance ($r$)**:

$$V_{terminal} = \\mathcal{E} - Ir$$

When the battery is charging: $V_{terminal} = \\mathcal{E} + Ir$

---

### ✍️ Self-Check 4.1–4.3
1. A 12 V battery with internal resistance 0.5 Ω drives a 2.5 Ω external resistor. Find: current, terminal voltage, and power dissipated.
2. A copper wire of length 5 m and diameter 1 mm carries 2 A. Find the voltage drop. ($\\rho_{Cu} = 1.72 \\times 10^{-8}$ Ω·m)`;
    }

    if (p <= 150) {
      return `# Unit 4: Current Electricity
## 4.4 Kirchhoff's Laws & Circuit Analysis
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 Series and Parallel Circuits

**Series Circuit:** Components connected end-to-end (one path for current)

$$R_{total} = R_1 + R_2 + R_3 + \\ldots$$
$$I_{same} = I_1 = I_2 = I_3$$
$$V_{total} = V_1 + V_2 + V_3$$

**Parallel Circuit:** Components share the same two nodes (multiple paths)

$$\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$$
$$V_{same} = V_1 = V_2 = V_3$$
$$I_{total} = I_1 + I_2 + I_3$$

> 🖼️ **Figure 4.5** — Series vs Parallel Circuit Diagrams
> *(See exact page for circuit diagrams with meters)*

---

### 📌 Kirchhoff's Laws

**Kirchhoff's Current Law (KCL) — Junction Rule:**
> "The sum of currents entering a junction equals the sum of currents leaving it."
$$\\sum I_{in} = \\sum I_{out}$$

**Kirchhoff's Voltage Law (KVL) — Loop Rule:**
> "The algebraic sum of all voltage changes around any closed loop is zero."
$$\\sum \\Delta V = 0 \\quad \\text{(around any closed loop)}$$

---

### 💡 Worked Example 4.4 — Kirchhoff's Laws

Two batteries: $\\mathcal{E_1} = 12$ V ($r_1 = 1$ Ω), $\\mathcal{E_2} = 6$ V ($r_2 = 2$ Ω), with a 5 Ω resistor.

Setting up KVL equations:

**Loop 1:** $12 - I_1(1) - I_3(5) = 0$
**Loop 2:** $6 - I_2(2) - I_3(5) = 0$
**Junction:** $I_1 + I_2 = I_3$

Solving simultaneously: $I_1 = 1.2$ A, $I_2 = 0.5$ A, $I_3 = 1.7$ A

---

### 📌 Electric Power and Energy

$$P = IV = I^2R = \\frac{V^2}{R} \\quad [\\text{Watts, W}]$$

**Electrical energy:**
$$E = Pt = VIt \\quad [\\text{Joules, J}]$$

**Ethiopia's standard electricity:** 220 V AC, 50 Hz

> 🇪🇹 **Practical Calculation:** A 1000 W injera electric stove (Mittad) running for 2 hours uses:
> $E = 1000 \\times 2 \\times 3600 = 7,200,000$ J = 7.2 MJ = **2 kWh** (unit used for billing)

---

### ✍️ Review Exercise 4.4 (EUEE Style)
1. Three resistors (2 Ω, 3 Ω, 6 Ω) are in parallel. Find equivalent resistance.
2. A 60 W bulb and 100 W bulb are connected in series to 220 V. Which is brighter? (Explain using resistance)
3. (**EUEE 2016**) Find the current through each resistor in a bridge circuit.`;
    }

    // Pages 151-166: More electricity
    return `# Unit 4: Current Electricity
## 4.5 – 4.6 Voltmeters, Ammeters & Electrical Safety
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 4.5 Measuring Instruments

**Ammeter:** Measures current
- Connected in **series** with circuit
- Must have very **low resistance** (ideally zero)
- $R_{ammeter} \\approx 0$

**Voltmeter:** Measures potential difference
- Connected in **parallel** across component
- Must have very **high resistance** (ideally infinite)
- $R_{voltmeter} \\approx \\infty$

> 🖼️ **Figure 4.10** — Correct placement of ammeter (series) and voltmeter (parallel)
> *(See exact page for circuit diagram)*

---

### 📌 4.6 Electrical Safety in Ethiopia

| Safety Feature | How It Works |
|---------------|-------------|
| **Fuse** | Thin wire melts when current exceeds rated value, breaking circuit |
| **Circuit Breaker** | Electromagnetic/thermal switch that trips on overcurrent |
| **Earthing/Grounding** | Connects metal parts of appliances to earth (0 V) |
| **Double Insulation** | Two layers of insulation — no earth wire needed |
| **RCD (Residual Current Device)** | Detects imbalanced current (leakage) and disconnects in milliseconds |

**Causes of electrical accidents in Ethiopia:**
- Overloaded circuits (too many appliances on one socket)
- Damaged insulation on wires
- Wet hands touching switches
- Using wrong-rated fuses

---

### 📝 Unit 4 Summary Table

| Quantity | Symbol | Unit | Formula |
|----------|--------|------|---------|
| Charge | Q | Coulomb (C) | $Q = It$ |
| Current | I | Ampere (A) | $I = Q/t$ |
| Potential difference | V | Volt (V) | $V = IR$ |
| Resistance | R | Ohm (Ω) | $R = V/I = \\rho L/A$ |
| Power | P | Watt (W) | $P = IV = I^2R = V^2/R$ |
| Energy | E | Joule (J) | $E = Pt = VIt$ |
| EMF | $\\mathcal{E}$ | Volt (V) | $\\mathcal{E} = V_{terminal} + Ir$ |

---

### ✍️ Unit 4 Comprehensive Review
1. An electric heater of resistance 20 Ω is connected to 220 V. Find: current, power, and energy used in 30 min.
2. Why do household circuits use **parallel** connections rather than series?
3. A fuse is rated 5 A for a circuit at 240 V. What is the maximum power it can handle safely?`;
  }

  // ─── UNIT 5: MAGNETISM (Pages 167–203) ───────────────────────────────────
  if (p <= 203) {
    if (p <= 182) {
      return `# Unit 5: Magnetism
## 5.1 – 5.4 Magnetic Fields, Forces & Earth's Magnetism
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

> 🎯 **Unit 5 Objectives:**
> • Describe magnetic fields using field lines
> • Calculate magnetic force on moving charges and current-carrying wires
> • Apply the right-hand rule for field directions
> • Understand Earth's magnetic field and its applications

---

### 📌 5.1 Magnets and Magnetic Fields

**Magnetic Field ($\\vec{B}$):** A region where magnetic forces are experienced. Unit: **Tesla (T)**

**Magnetic field lines:**
- Always form **closed loops** (no magnetic monopoles)
- Direction: from **North pole** to **South pole** outside magnet
- Density of lines ∝ field strength
- Never cross

---

### 📌 5.2 Magnetic Field of Current-Carrying Conductors

**Straight wire** carrying current $I$ at distance $r$:
$$B = \\frac{\\mu_0 I}{2\\pi r}$$

**Direction:** Right-hand rule — thumb points in current direction, fingers curl in field direction.

**Circular loop** of $N$ turns at center:
$$B = \\frac{\\mu_0 N I}{2R}$$

**Solenoid** ($n$ turns/meter, length $L$):
$$B = \\mu_0 n I = \\frac{\\mu_0 N I}{L}$$

where $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A (permeability of free space)

---

### 📌 5.3 Force on Charges in Magnetic Field

**Magnetic Lorentz force** on a moving charge:

$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$
$$|F| = qvB\\sin\\theta$$

where $\\theta$ is the angle between $\\vec{v}$ and $\\vec{B}$.

> 🔑 **Key Insight:** If $\\vec{v} \\perp \\vec{B}$ (i.e., $\\theta = 90°$), then $F = qvB$ (maximum force) — the particle moves in a **circle**!

**Radius of circular path:**
$$r = \\frac{mv}{qB}$$

---

### 📌 5.4 Force on Current-Carrying Conductors

A wire of length $L$ carrying current $I$ in field $\\vec{B}$:

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$
$$|F| = BIL\\sin\\theta$$

**Direction:** Right-hand rule (or left-hand rule for conventional current in motors)

> 🖼️ **Figure 5.7** — Force on current-carrying wire in magnetic field
> *(See exact page for diagram)*

---

### 🇪🇹 Earth's Magnetic Field
- Earth's magnetic North is near geographic South pole
- Field strength at Ethiopia's surface: ~$3.5 \\times 10^{-5}$ T
- **Compass** aligns with Earth's field — the North-seeking end of compass points to Earth's magnetic North

---

### ✍️ Self-Check 5.1–5.4
1. An electron moves at $2 \\times 10^6$ m/s perpendicular to a 0.3 T field. Find the force and radius of its circular path. ($m_e = 9.1 \\times 10^{-31}$ kg, $q_e = 1.6 \\times 10^{-19}$ C)
2. Two parallel wires 10 cm apart carry 3 A and 5 A in the same direction. Find the force per meter between them.`;
    }

    // Pages 183-203: More magnetism
    return `# Unit 5: Magnetism
## 5.5 Applications of Magnetism
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 5.5.1 The Electric Motor

An electric motor converts **electrical energy → mechanical energy** using the force on a current-carrying coil in a magnetic field.

**Components:**
- Armature coil (rotating)
- Permanent magnets (fixed field)
- Commutator (reverses current direction each half-turn)
- Carbon brushes (maintain contact)

**Torque on a coil:**
$$\\tau = NBIA\\sin\\theta$$
where $N$ = turns, $B$ = field, $I$ = current, $A$ = area

---

### 📌 5.5.2 Electromagnetic Induction (Preview)

When magnetic flux through a coil **changes**, an EMF is induced (Faraday's Law):

$$\\mathcal{E} = -N\\frac{\\Delta\\Phi}{\\Delta t}$$

where magnetic flux: $\\Phi = BA\\cos\\theta$

**Lenz's Law:** The induced current opposes the change that causes it.

---

### 📌 5.5.3 Generators

An electric generator converts **mechanical energy → electrical energy**.
- Works on same principle as motor (in reverse)
- AC generator: coil rotates in field → sinusoidal EMF
- DC generator: uses commutator to rectify AC to DC

$$\\mathcal{E} = NBA\\omega\\sin(\\omega t) = \\mathcal{E}_0\\sin(\\omega t)$$

---

### 📝 Unit 5 Summary

| Quantity | Formula | Unit |
|----------|---------|------|
| Magnetic field (wire) | $B = \\mu_0 I / 2\\pi r$ | Tesla (T) |
| Force on charge | $F = qvB\\sin\\theta$ | Newton (N) |
| Force on wire | $F = BIL\\sin\\theta$ | Newton (N) |
| Magnetic flux | $\\Phi = BA\\cos\\theta$ | Weber (Wb) |
| Induced EMF | $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$ | Volt (V) |

---

### ✍️ Unit 5 Review (EUEE Focus)
1. A rectangular coil of 100 turns, area 0.02 m², rotates in a 0.5 T field at 50 rev/s. Find peak EMF.
2. Explain why a compass needle is deflected when placed near a current-carrying wire.
3. (**EUEE 2018**) A proton moves in a circle of radius 0.5 m in a 1 T field. Find its speed and kinetic energy.`;
  }

  // ─── UNIT 6: ELECTROMAGNETIC WAVES & GEOMETRICAL OPTICS (Pages 204–258) ──
  if (p <= 258) {
    if (p <= 218) {
      return `# Unit 6: Electromagnetic Waves and Geometrical Optics
## 6.1 Electromagnetic (EM) Waves & 6.2 The EM Spectrum
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

> 🎯 **Unit 6 Objectives:**
> • Describe the properties of electromagnetic waves
> • Identify different regions of the electromagnetic spectrum
> • Apply laws of reflection and refraction
> • Analyze images formed by mirrors and lenses
> • Understand defects of vision and corrective optics

---

### 📌 6.1 Properties of Electromagnetic Waves

EM waves are **transverse waves** that:
- Travel at the speed of light in vacuum: $c = 3 \\times 10^8$ m/s
- Require **no medium** (travel through vacuum)
- Are produced by **oscillating electric charges**
- Carry both energy and momentum

**Wave equation:**
$$c = f\\lambda$$

where $f$ = frequency (Hz) and $\\lambda$ = wavelength (m)

**Energy of a photon:**
$$E = hf = \\frac{hc}{\\lambda}$$

where $h = 6.626 \\times 10^{-34}$ J·s (Planck's constant)

---

### 📌 6.2 The Electromagnetic Spectrum

| Type | Wavelength Range | Frequency Range | Ethiopian Applications |
|------|-----------------|-----------------|----------------------|
| **Radio waves** | > 10 cm | < 3 GHz | Radio Ethiopia, ETV broadcasts |
| **Microwaves** | 1 mm – 10 cm | 3–300 GHz | Satellite communications, cooking |
| **Infrared (IR)** | 700 nm – 1 mm | 300 GHz – 430 THz | Remote controls, thermal imaging |
| **Visible light** | 400–700 nm | 430–750 THz | Human vision |
| **Ultraviolet (UV)** | 10–400 nm | 750 THz – 30 PHz | Sterilization, skin tanning |
| **X-rays** | 0.01–10 nm | 30 PHz – 30 EHz | Medical imaging (Black Lion Hospital) |
| **Gamma rays** | < 0.01 nm | > 30 EHz | Cancer treatment, nuclear reactions |

> 🔑 **Memory Device (increasing frequency):** "Raging Martians Invaded Vietnam Using X-ray Guns"
> → Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma

---

### ✍️ Self-Check 6.1–6.2
1. An FM radio station broadcasts at 96 MHz. What is the wavelength of this wave?
2. Which EM wave has higher energy: a UV photon (350 nm) or a visible light photon (600 nm)?
3. Why can X-rays pass through soft tissue but not bone?`;
    }

    if (p <= 234) {
      return `# Unit 6: Electromagnetic Waves and Geometrical Optics
## 6.3 Reflection and Refraction of Light
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 6.3.1 Reflection of Light

**Laws of Reflection:**
1. The angle of incidence = angle of reflection ($\\theta_i = \\theta_r$)
2. The incident ray, reflected ray, and normal all lie in the same plane.

**Types of Reflection:**
- **Regular (specular):** Smooth surface → clear image (mirror)
- **Diffuse:** Rough surface → scattered light (walls, paper)

---

### 📌 6.3.2 Refraction of Light

Light **bends** when crossing the boundary between two media with different optical densities.

**Snell's Law:**
$$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$$

where $n$ = refractive index of medium:
$$n = \\frac{c}{v}$$

**Refractive indices:**

| Medium | $n$ |
|--------|-----|
| Vacuum | 1.000 |
| Air | 1.0003 ≈ 1 |
| Water | 1.33 |
| Glass | 1.5 |
| Diamond | 2.42 |

**Total Internal Reflection:** When light goes from denser to less dense medium at angle greater than critical angle $\\theta_c$:

$$\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_1 > n_2)$$

> 🇪🇹 **Application:** Optical fiber cables (used in Ethiopia's expanding telecom network) work by total internal reflection — light bounces along the fiber!

---

### 💡 Worked Example 6.3
A ray of light passes from glass ($n = 1.5$) to water ($n = 1.33$) at $30°$ to the normal. Find the angle of refraction.

$$1.5\\sin30° = 1.33\\sin\\theta_2$$
$$\\sin\\theta_2 = \\frac{1.5 \\times 0.5}{1.33} = \\frac{0.75}{1.33} = 0.5639$$
$$\\theta_2 = \\arcsin(0.5639) \\approx 34.4°$$

Find the critical angle for this glass-water interface:
$$\\sin\\theta_c = \\frac{1.33}{1.5} = 0.887 \\Rightarrow \\theta_c \\approx 62.5°$$

---

### ✍️ Review Exercise 6.3
1. Find the critical angle for glass ($n = 1.5$) in air.
2. A diamond ring sparkles brilliantly. Explain using total internal reflection ($n_{diamond} = 2.42$).
3. (**EUEE 2015**) A ray hits a glass surface at 45°. If $n_{glass} = \\sqrt{2}$, find the refraction angle.`;
    }

    if (p <= 248) {
      return `# Unit 6: Electromagnetic Waves and Geometrical Optics
## 6.4 Mirrors and Lenses — Image Formation
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 Spherical Mirrors

**Concave mirror** (converging) | **Convex mirror** (diverging)

**Mirror equation:**
$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$

**Focal length:** $f = R/2$ (where $R$ = radius of curvature)

**Magnification:**
$$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$$

**Sign convention (real-is-positive):**
- Distances measured from mirror: positive in front, negative behind
- $m > 0$: upright image; $m < 0$: inverted image
- $|m| > 1$: magnified; $|m| < 1$: diminished

---

### 📌 Thin Lenses

**Converging (convex) lens:** $f > 0$ | **Diverging (concave) lens:** $f < 0$

**Thin lens equation** (same form as mirror equation):
$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$

**Lensmaker's equation:**
$$\\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$

---

### 📊 Image Properties for Concave Mirror

| Object distance ($d_o$) | Image type | Size | Position |
|------------------------|-----------|------|----------|
| $d_o > 2f$ | Real, inverted | Diminished | $f < d_i < 2f$ |
| $d_o = 2f$ | Real, inverted | Same size | $d_i = 2f$ |
| $f < d_o < 2f$ | Real, inverted | Magnified | $d_i > 2f$ |
| $d_o = f$ | No image | — | $d_i = \\infty$ |
| $d_o < f$ | Virtual, upright | Magnified | Behind mirror |

---

### 💡 Worked Example 6.6
An object 3 cm tall is placed 20 cm from a convex lens of focal length 15 cm. Find image.

$$\\frac{1}{d_i} = \\frac{1}{15} - \\frac{1}{20} = \\frac{4-3}{60} = \\frac{1}{60}$$
$$d_i = 60 \\text{ cm (positive → real, on other side of lens)}$$
$$m = -\\frac{60}{20} = -3 \\text{ (inverted, 3× magnified)}$$
$$h_i = m \\times h_o = -3 \\times 3 = -9 \\text{ cm}$$

---

### ✍️ Review Exercise 6.4 (EUEE Style)
1. An object at 30 cm from a concave mirror of radius 40 cm. Find image position and nature.
2. A person sees their upright image magnified 3× in a concave mirror. Find object distance if $f = 15$ cm.`;
    }

    // Pages 249-258: Human eye, optical instruments
    return `# Unit 6: Electromagnetic Waves and Geometrical Optics
## 6.5 – 6.6 The Human Eye, Vision Defects & Optical Instruments
*Page ${p} of 258 — Grade 10 Physics — Ethiopian National Curriculum*

---

### 📌 6.5 The Human Eye

The human eye functions like a **converging lens system**:

| Eye Component | Optical Function |
|--------------|-----------------|
| **Cornea** | Primary refraction (~70% of total) |
| **Lens (crystalline)** | Fine-focusing (accommodation) |
| **Retina** | Screen — detects image |
| **Fovea** | Highest image resolution |
| **Optic nerve** | Transmits signals to brain |

**Normal near point:** ~25 cm (closest clear vision)
**Normal far point:** Infinity (clear vision at any distance)

---

### 📌 Vision Defects and Correction

**1. Myopia (Near-sightedness):**
- Image forms in front of retina
- Corrected with **diverging (concave) lens** (negative focal length)

**2. Hyperopia (Far-sightedness):**
- Image forms behind retina
- Corrected with **converging (convex) lens** (positive focal length)

**3. Astigmatism:**
- Non-spherical cornea → different focal lengths in different planes
- Corrected with **cylindrical lens**

**Lens power (Diopters):**
$$P = \\frac{1}{f \\text{ (in meters)}} \\quad [\\text{diopters, D}]$$

---

### 📌 6.6 Optical Instruments

**Simple Magnifier (Hand lens):**
$$M = \\frac{25}{f} \\quad \\text{(object at focal point)}$$

**Compound Microscope:**
$$M_{total} = M_{objective} \\times M_{eyepiece} \\approx \\frac{L}{f_o} \\times \\frac{25}{f_e}$$

**Astronomical Telescope (normal adjustment):**
$$M = -\\frac{f_o}{f_e} \\quad \\text{(negative = inverted image)}$$

---

### 📝 Unit 6 & Grade 10 Physics Complete Summary

> ⚡ **EUEE Most-Tested Topics from Grade 10 Physics:**
> 1. Projectile Motion (Range, height, time of flight) — ~3 questions
> 2. Newton's Laws + Friction on inclines — ~2 questions
> 3. Kirchhoff's Laws / Ohm's Law — ~3 questions
> 4. Snell's Law + Total Internal Reflection — ~2 questions
> 5. Mirror/Lens equation — ~2 questions
> 6. Gravitational force and orbital motion — ~1 question

---

### ✍️ Final Unit 6 & Comprehensive Review
1. A person has a near point of 50 cm. What lens power corrects it to 25 cm?
2. A telescope has objective focal length 1.2 m and eyepiece 5 cm. Find angular magnification.
3. (**EUEE 2019**) Light passes from medium of $n = 1.4$ to air. Find the critical angle.
4. Differentiate between real and virtual images. Give two examples of each.`;
  }

  // Fallback for any page outside ranges
  return `# Grade 10 Physics — Student Textbook
## Page ${p}
*Ethiopian National Curriculum — Federal Democratic Republic of Ethiopia*

---

> 🎯 **Curriculum Content**
> This page is part of the Grade 10 Physics curriculum covering Vector Quantities, Two-Dimensional Motion, Dynamics & Gravitation, Current Electricity, Magnetism, and Geometrical Optics.

---

> 💡 **Study Tip:** Review the adjacent pages and topic headers to locate the specific section for page ${p}. Use the **Exact Page** tab to view the original scanned textbook illustration.

---

### 📚 Grade 10 Physics Unit Guides
| Unit | Topic | Pages |
|------|-------|-------|
| **Unit 1** | Vector Quantities | 1–32 |
| **Unit 2** | Motion in Two Dimensions | 33–74 |
| **Unit 3** | Dynamics & Gravitation | 75–120 |
| **Unit 4** | Current Electricity | 121–166 |
| **Unit 5** | Magnetism | 167–203 |
| **Unit 6** | EM Waves & Geometrical Optics | 204–258 |`;
}
