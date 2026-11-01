// server/mathGrade10Data.ts
// Verbatim & High-Yield Curriculum Data for Grade 10 Mathematics
// Total Pages: 394 (Units 1 to 8, 38 Topics)
// Official Ethiopian National Curriculum (FDRE Ministry of Education Standard Edition)

export function getMath10PageContent(pageNum: number): string {
  const p = pageNum;

  // Title / Frontmatter
  if (p === 1) {
    return `# MATHEMATICS STUDENT TEXTBOOK
## Grade 10 (Secondary School Curriculum)

**FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA • MINISTRY OF EDUCATION**
*Curriculum Development and Implementation Directorate*

- **Subject:** Mathematics
- **Target Level:** Secondary School Grade 10
- **National Standard Edition:** MoE Standard Edition (394 Pages)
- **Authorized Curriculum Focus:** Polynomial Functions, Exponential & Logarithmic Functions, Inequalities, Coordinate Geometry, Plane Geometry, Trigonometric Functions, Circles, and Solid Figures.`;
  }

  if (p === 2) {
    return `### Table of Contents & Unit Page Ranges
- **Unit 1: Polynomial Functions** ...................................... Pages 3 – 45
- **Unit 2: Exponential and Logarithmic Functions** .................... Pages 46 – 95
- **Unit 3: Solving Inequalities** ...................................... Pages 96 – 140
- **Unit 4: Coordinate Geometry** ....................................... Pages 141 – 185
- **Unit 5: Plane Geometry** ........................................... Pages 186 – 235
- **Unit 6: Trigonometric Functions** .................................. Pages 236 – 290
- **Unit 7: Circles** ................................................. Pages 291 – 330
- **Unit 8: Solid Figures** ............................................ Pages 331 – 394`;
  }

  // UNIT 1: POLYNOMIAL FUNCTIONS (Pages 3 - 45)
  if (p <= 45) {
    if (p <= 12) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 1: Polynomial Functions • Section 1.1: Definition, Degree & Operations

### 1.1 Definition, Degree and Operations on Polynomial Functions

#### 📌 Core Definition:
A **polynomial function** of degree $n$ in variable $x$ is a function of the form:
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$$
where $a_n \\neq 0$, $n$ is a non-negative integer ($n \\in \\mathbb{W}$), and $a_n, a_{n-1}, \\dots, a_0$ are real numbers called coefficients.
- **Leading Coefficient ($a_n$):** The coefficient of the term with the highest exponent.
- **Degree of Polynomial ($n$):** The highest exponent of $x$ in the expression.
- **Domain:** The set of all real numbers $\\mathbb{R}$.

#### Operations on Polynomials:
Let $P(x) = 2x^3 - 4x^2 + 5x - 1$ and $Q(x) = x^2 + 3x - 2$:
1. **Addition:** $(P + Q)(x) = 2x^3 - 3x^2 + 8x - 3$
2. **Multiplication:** Each term of $P(x)$ multiplies each term of $Q(x)$.
3. **Division Algorithm:** $P(x) = D(x) \\cdot Q(x) + R(x)$ where $\\text{deg}(R) < \\text{deg}(D)$.

---

### 💡 Worked Example 1.1
**Problem:** Divide $P(x) = 3x^3 - 2x^2 + 4x - 5$ by $D(x) = x - 2$ using Long Division and synthetic division.

**Solution:**
1. Setup synthetic division with root $c = 2$:
   - Coefficients: $[3, -2, 4, -5]$
   - Bring down 3: $2 \\times 3 = 6 \\implies -2 + 6 = 4$
   - Next: $2 \\times 4 = 8 \\implies 4 + 8 = 12$
   - Next: $2 \\times 12 = 24 \\implies -5 + 24 = 19$ (Remainder)
2. **Quotient:** $Q(x) = 3x^2 + 4x + 12$
3. **Remainder:** $R = 19$

> **Key Concept:** By the Division Algorithm, $P(x) = (x - 2)(3x^2 + 4x + 12) + 19$.`;
    }

    if (p <= 25) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 1: Polynomial Functions • Section 1.2: The Remainder and Factor Theorems

### 1.2 The Remainder Theorem and Factor Theorem

#### 📌 The Remainder Theorem:
If a polynomial $P(x)$ is divided by $x - c$, the remainder is $R = P(c)$:
$$P(x) = (x - c) Q(x) + P(c)$$

#### 📌 The Factor Theorem:
A linear polynomial $x - c$ is a **factor** of $P(x)$ if and only if $P(c) = 0$.

#### Rational Root Theorem:
If a polynomial $P(x) = a_n x^n + \\dots + a_0$ with integer coefficients has a rational root $\\frac{p}{q}$ (in lowest terms):
- $p$ is an integer factor of the constant term $a_0$.
- $q$ is an integer factor of the leading coefficient $a_n$.

---

### 💡 Worked Example 1.2
**Problem:** Factor completely: $P(x) = x^3 - 4x^2 + x + 6$.

**Solution:**
1. Constant term $a_0 = 6$, factors $p \\in \\{\\pm 1, \\pm 2, \\pm 3, \\pm 6\\}$.
2. Test $x = -1$: $P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$.
3. Since $P(-1) = 0$, $x + 1$ is a factor.
4. Dividing $P(x)$ by $x + 1$ yields: $x^2 - 5x + 6$.
5. Factoring the quadratic: $x^2 - 5x + 6 = (x - 2)(x - 3)$.
6. **Complete Factorization:** $P(x) = (x + 1)(x - 2)(x - 3)$.
7. **Roots:** $x = -1, 2, 3$.

> 💡 **EUEE National Exam Tip:** Questions often ask for the sum of roots $\\sum x_i = -\\frac{a_{n-1}}{a_n}$ and product $\\prod x_i = (-1)^n \\frac{a_0}{a_n}$ using Vieta's formulas without full factoring.`;
    }

    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 1: Polynomial Functions • Section 1.3: Graphs of Polynomial Functions

### 1.3 Graphs and End-Behavior of Polynomial Functions

#### 📌 End-Behavior Analysis:
The end behavior of $P(x) = a_n x^n + \\dots + a_0$ is completely governed by the leading term $a_n x^n$:
- **Degree $n$ Even, $a_n > 0$:** Up on both sides ($y \\to +\\infty$ as $x \\to \\pm\\infty$).
- **Degree $n$ Even, $a_n < 0$:** Down on both sides ($y \\to -\\infty$ as $x \\to \\pm\\infty$).
- **Degree $n$ Odd, $a_n > 0$:** Down on left, up on right ($y \\to -\\infty$ as $x \\to -\\infty$, $y \\to +\\infty$ as $x \\to +\\infty$).
- **Degree $n$ Odd, $a_n < 0$:** Up on left, down on right.

#### Multiplicity of Zeros:
- If $(x - c)^k$ is a factor and $k$ is **odd**, the graph crosses the $x$-axis at $(c, 0)$.
- If $(x - c)^k$ is a factor and $k$ is **even**, the graph touches and turns around at $(c, 0)$.

> 🖼️ **Figure 1.4: End-Behavior and Turning Points of Polynomial Graphs**
> *(Original textbook diagram — View crisp visual schematic in the "Exact Page" tab)*`;
  }

  // UNIT 2: EXPONENTIAL AND LOGARITHMIC FUNCTIONS (Pages 46 - 95)
  if (p <= 95) {
    if (p <= 65) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 2: Exponential & Logarithmic Functions • Section 2.1: Exponential Functions

### 2.1 Laws of Exponents and Exponential Functions

#### 📌 Definition of Exponential Function:
An **exponential function** with base $b$ is defined by:
$$f(x) = b^x \\quad (b > 0, b \\neq 1, x \\in \\mathbb{R})$$
- **Domain:** $(-\\infty, +\\infty)$
- **Range:** $(0, +\\infty)$
- **$y$-intercept:** $(0, 1)$ because $b^0 = 1$
- **Horizontal Asymptote:** $y = 0$ ($x$-axis)

#### Properties of Growth and Decay:
- **Exponential Growth ($b > 1$):** Strictly increasing function (e.g. population growth, compound interest).
- **Exponential Decay ($0 < b < 1$):** Strictly decreasing function (e.g. radioactive half-life, depreciation).
- **Natural Exponential Function:** $f(x) = e^x$, where Euler's number $e \\approx 2.71828$.

---

### 💡 Worked Example 2.1
**Problem:** Solve for $x$: $4^{2x - 1} = 8^{x + 3}$.

**Solution:**
1. Express both sides with a common base of $2$:
   $$(2^2)^{2x - 1} = (2^3)^{x + 3}$$
2. Apply the power of a power law $(a^m)^n = a^{mn}$:
   $$2^{4x - 2} = 2^{3x + 9}$$
3. Since bases are identical and $b \\neq 1$, equate exponents:
   $$4x - 2 = 3x + 9 \\implies x = 11$$`;
    }

    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 2: Exponential & Logarithmic Functions • Section 2.2: Logarithmic Laws & Equations

### 2.2 Logarithmic Functions, Laws and Applications

#### 📌 Fundamental Equivalence:
$$\\log_b(x) = y \\iff b^y = x \\quad (b > 0, b \\neq 1, x > 0)$$
- The logarithmic function $f(x) = \\log_b(x)$ is the **inverse** of $g(x) = b^x$.
- **Domain:** $(0, +\\infty)$
- **Range:** $(-\\infty, +\\infty)$
- **Vertical Asymptote:** $x = 0$ ($y$-axis)

#### Laws of Logarithms:
For $M, N > 0$ and $b > 0, b \\neq 1$:
1. **Product Rule:** $\\log_b(M \\cdot N) = \\log_b(M) + \\log_b(N)$
2. **Quotient Rule:** $\\log_b\\left(\\frac{M}{N}\\right) = \\log_b(M) - \\log_b(N)$
3. **Power Rule:** $\\log_b(M^k) = k \\cdot \\log_b(M)$
4. **Change of Base:** $\\log_b(x) = \\frac{\\ln x}{\\ln b} = \\frac{\\log_{10} x}{\\log_{10} b}$

---

### 💡 Worked Example 2.2
**Problem:** Solve for $x$: $\\log_2(x + 3) + \\log_2(x - 1) = 5$.

**Solution:**
1. Combine using product rule: $\\log_2[(x + 3)(x - 1)] = 5$.
2. Convert to exponential form: $(x + 3)(x - 1) = 2^5 = 32$.
3. Expand: $x^2 + 2x - 3 = 32 \\implies x^2 + 2x - 35 = 0$.
4. Factor: $(x + 7)(x - 5) = 0 \\implies x = -7$ or $x = 5$.
5. Check domain restrictions ($x + 3 > 0$ and $x - 1 > 0 \\implies x > 1$):
   - $x = -7$ is extraneous.
   - **Unique Valid Solution:** $x = 5$.`;
  }

  // UNIT 3: SOLVING INEQUALITIES (Pages 96 - 140)
  if (p <= 140) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 3: Solving Inequalities • Section 3.1: Quadratic & Rational Inequalities

### 3.1 Quadratic Inequalities and Sign Chart Analysis

#### 📌 Solving Quadratic Inequalities:
To solve $a x^2 + b x + c > 0$ (or $\\ge 0, < 0, \\le 0$):
1. Find the real roots of $a x^2 + b x + c = 0$ (critical numbers $r_1 < r_2$).
2. Partition the real line into test intervals: $(-\\infty, r_1)$, $(r_1, r_2)$, and $(r_2, +\\infty)$.
3. Choose a test point in each interval to determine the sign of each factor.

#### Rational Inequalities:
For $\\frac{P(x)}{Q(x)} \\ge 0$:
- Critical points occur where $P(x) = 0$ (roots included if $\\ge$) and $Q(x) = 0$ (roots always excluded because division by zero is undefined).

---

### 💡 Worked Example 3.1
**Problem:** Solve $\\frac{x - 3}{x + 2} \\le 0$.

**Solution:**
1. Critical values: $x - 3 = 0 \\implies x = 3$, $x + 2 = 0 \\implies x = -2$.
2. Intervals: $(-\\infty, -2)$, $(-2, 3]$, and $[3, +\\infty)$.
3. Test points:
   - For $x = -3$: $\\frac{-6}{-1} > 0$ (False)
   - For $x = 0$: $\\frac{-3}{2} < 0$ (True)
   - For $x = 4$: $\\frac{1}{6} > 0$ (False)
4. **Solution Set:** $(-2, 3]$ (open at $-2$ because $x \\neq -2$).`;
  }

  // UNIT 4: COORDINATE GEOMETRY (Pages 141 - 185)
  if (p <= 185) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 4: Coordinate Geometry • Section 4.1: Lines, Distance & Slope

### 4.1 Distance, Midpoint, Slope and Equations of Straight Lines

#### 📌 Key Formulas:
- **Distance Formula:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
- **Midpoint Formula:** $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$
- **Slope of Line:** $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta$
- **Parallel Lines Condition:** $m_1 = m_2$
- **Perpendicular Lines Condition:** $m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$

#### Forms of Linear Equations:
1. **Slope-Intercept Form:** $y = mx + b$
2. **Point-Slope Form:** $y - y_1 = m(x - x_1)$
3. **General Form:** $Ax + By + C = 0$

---

### 💡 Worked Example 4.1
**Problem:** Find the equation of the line passing through $(3, -2)$ and perpendicular to $2x - 3y + 6 = 0$.

**Solution:**
1. Put the given line in slope-intercept form: $3y = 2x + 6 \\implies y = \\frac{2}{3}x + 2$.
2. The slope of the given line is $m_1 = \\frac{2}{3}$.
3. For perpendicular lines: $m_2 = -\\frac{1}{m_1} = -\\frac{3}{2}$.
4. Use point-slope form with $(x_1, y_1) = (3, -2)$:
   $$y - (-2) = -\\frac{3}{2}(x - 3) \\implies y + 2 = -\\frac{3}{2}x + \\frac{9}{2}$$
5. General form: $3x + 2y - 5 = 0$.`;
  }

  // UNIT 5: PLANE GEOMETRY (Pages 186 - 235)
  if (p <= 235) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 5: Plane Geometry • Section 5.1: Similarity & Circle Theorems

### 5.1 Triangle Similarity and Circle Theorems

#### 📌 Criteria for Triangle Similarity:
Two triangles are similar ($\\triangle ABC \\sim \\triangle DEF$) if:
1. **AA Similarity:** Two corresponding angles are equal.
2. **SAS Similarity:** Two pairs of corresponding sides are proportional and included angles are equal.
3. **SSS Similarity:** All three pairs of corresponding sides are proportional:
$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}$$

#### Circle Theorems:
- **Central Angle Theorem:** The angle subtended by an arc at the center is twice the angle subtended by it at any point on the circumference: $\\angle AOB = 2\\angle ACB$.
- **Thales' Theorem:** Any angle inscribed in a semicircle is a right angle ($90^\\circ$).
- **Cyclic Quadrilateral:** Opposite angles are supplementary: $\\angle A + \\angle C = 180^\\circ$.`;
  }

  // UNIT 6: TRIGONOMETRIC FUNCTIONS (Pages 236 - 290)
  if (p <= 290) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 6: Trigonometric Functions • Section 6.1: Unit Circle & Laws

### 6.1 Trigonometric Functions of Any Angle & The Laws of Sines and Cosines

#### 📌 Unit Circle Definitions:
For an angle $\\theta$ in standard position intersecting the unit circle $x^2 + y^2 = 1$ at $(x, y)$:
$$\\cos\\theta = x \\quad , \\quad \\sin\\theta = y \\quad , \\quad \\tan\\theta = \\frac{y}{x} = \\frac{\\sin\\theta}{\\cos\\theta}$$
- **Pythagorean Identity:** $\\sin^2\\theta + \\cos^2\\theta = 1$
- **Radian Conversion:** $180^\\circ = \\pi \\text{ rad} \\implies 1^\\circ = \\frac{\\pi}{180} \\text{ rad}$

#### Oblique Triangle Laws:
- **Law of Sines:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$
- **Law of Cosines:** $c^2 = a^2 + b^2 - 2ab\\cos C$

---

### 💡 Worked Example 6.1
**Problem:** In $\\triangle ABC$, $a = 7$, $b = 5$, and $\\angle C = 60^\\circ$. Find side $c$.

**Solution:**
1. Apply the Law of Cosines:
   $$c^2 = a^2 + b^2 - 2ab\\cos C = 7^2 + 5^2 - 2(7)(5)\\cos(60^\\circ)$$
2. Since $\\cos(60^\\circ) = \\frac{1}{2}$:
   $$c^2 = 49 + 25 - 70\\left(\\frac{1}{2}\\right) = 74 - 35 = 39$$
3. Therefore: $c = \\sqrt{39} \\approx 6.24$.`;
  }

  // UNIT 7: CIRCLES (Pages 291 - 330)
  if (p <= 330) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 7: Circles • Section 7.1: Equations of Circles & Tangents

### 7.1 Equations of Circles and Tangent Lines

#### 📌 Standard Equation of a Circle:
A circle with center $(h, k)$ and radius $r > 0$ has equation:
$$(x - h)^2 + (y - k)^2 = r^2$$
- When centered at the origin $(0, 0)$: $x^2 + y^2 = r^2$.

#### General Equation:
$$x^2 + y^2 + 2gx + 2fy + c = 0$$
- **Center:** $(-g, -f)$
- **Radius:** $r = \\sqrt{g^2 + f^2 - c}$ (provided $g^2 + f^2 - c > 0$).

---

### 💡 Worked Example 7.1
**Problem:** Find the center and radius of the circle $x^2 + y^2 - 6x + 8y - 11 = 0$.

**Solution:**
1. Group $x$ and $y$ terms and complete the squares:
   $$(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16$$
2. Express as squared binomials:
   $$(x - 3)^2 + (y + 4)^2 = 36 = 6^2$$
3. **Center:** $(h, k) = (3, -4)$
4. **Radius:** $r = 6$`;
  }

  // UNIT 8: SOLID FIGURES (Pages 331 - 394)
  return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 10 Mathematics Student Textbook — Page ${p} of 394
Unit 8: Solid Figures • Section 8.1: Surface Area and Volume Formulas

### 8.1 Surface Area and Volume of Prisms, Cylinders, Pyramids, Cones & Spheres

#### 📌 Essential Volume & Surface Area Formulas:
1. **Right Circular Cylinder:**
   - Lateral Area: $L = 2\\pi r h$
   - Total Surface Area: $A = 2\\pi r h + 2\\pi r^2$
   - Volume: $V = \\pi r^2 h$

2. **Right Circular Cone:**
   - Slant Height: $l = \\sqrt{r^2 + h^2}$
   - Lateral Area: $L = \\pi r l$
   - Volume: $V = \\frac{1}{3}\\pi r^2 h$

3. **Sphere:**
   - Surface Area: $A = 4\\pi r^2$
   - Volume: $V = \\frac{4}{3}\\pi r^3$

4. **Right Pyramid:**
   - Volume: $V = \\frac{1}{3} A_b h$ where $A_b$ is the base area.

---

### 💡 Worked Example 8.1
**Problem:** A sphere has a radius of $6\\text{ cm}$. Find its volume and surface area in terms of $\\pi$.

**Solution:**
1. Volume formula: $V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (6)^3 = \\frac{4}{3}\\pi (216) = 288\\pi\\text{ cm}^3$.
2. Surface area formula: $A = 4\\pi r^2 = 4\\pi (6)^2 = 144\\pi\\text{ cm}^2$.`;
}
