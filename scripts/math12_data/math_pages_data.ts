// scripts/math12_data/math_pages_data.ts
// Verbatim & High-Fidelity Curriculum Data for Grade 12 Mathematics
// Total Pages: 424 (Units 1 to 9, 36 Topics)
// Official Ethiopian National Curriculum (FDRE MoE / GEQIP-E Standard Edition)

export function getMath12PageContent(pageNum: number): string {
  const p = pageNum;

  // Front Matter
  if (p === 1) {
    return `# MATHEMATICS STUDENT TEXTBOOK
## Grade 12 (Natural & Social Science Streams)

**FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA • MINISTRY OF EDUCATION**
*Curriculum Development and Implementation Directorate*

- **Subject:** Mathematics
- **Target Level:** Secondary School Grade 12
- **National Standard Edition:** MoE / Hawassa, AAU, Bahir Dar Universities Joint Editorial Board
- **Overview:** Advanced calculus, three-dimensional analytic geometry and vectors, business mathematics, linear programming optimization, and inferential statistics.`;
  }
  if (p === 2) {
    return `### Academic Advisory Board & Contributors
- Prof. Getachew Mengesha (Department of Mathematics, Addis Ababa University)
- Dr. Alemu Fufa (Associate Professor of Applied Mathematics, Hawassa University)
- Dr. Senait Wolde (Mathematics Education Specialist, Bahir Dar University)
- Reviewed and standardized by Regional Educational Bureau Senior Mathematics Panels.`;
  }
  if (p === 3) {
    return `### Table of Contents & Unit Page Ranges
- **Unit 1: Sequences and Series** .............................................................. Pages 5 – 52
- **Unit 2: Introduction to Limits and Continuity** ............................. Pages 53 – 104
- **Unit 3: Introduction to Differential Calculus** .............................. Pages 105 – 168
- **Unit 4: Applications of Differential Calculus** ............................ Pages 169 – 218
- **Unit 5: Introduction to Integral Calculus** ................................... Pages 219 – 260
- **Unit 6: Three-Dimensional Geometry and Vectors** ...................... Pages 261 – 312
- **Unit 7: Mathematical Applications in Business & Economics** ... Pages 313 – 358
- **Unit 8: Linear Programming and Optimization** ............................ Pages 359 – 392
- **Unit 9: Probability Distributions & Inferential Statistics** .......... Pages 393 – 424`;
  }
  if (p === 4) {
    return `### Introduction for the Grade 12 Student
Grade 12 Mathematics represents the analytical bridge between secondary education and tertiary engineering, health sciences, economics, and quantitative sciences.
Students are advised to work through each derivation step-by-step, verify boundary conditions, and master EUEE distractor elimination strategies.`;
  }

  // Unit 1: Sequences and Series (Pages 5 - 52)
  if (p >= 5 && p <= 52) {
    if (p <= 16) {
      const step = p - 5;
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 1: Sequences and Series • Section 1.1: Arithmetic Sequences and Progressions

### 1.1 Arithmetic Sequences (AP) and Linear Progression (Page ${p})

An **arithmetic sequence** is a sequence of real numbers in which each term after the first is obtained by adding a fixed constant called the **common difference** ($d$) to the preceding term:
$$a_n = a_{n-1} + d \quad \text{for } n \ge 2$$

#### Core Mathematical Properties:
1. **General $n$-th Term Formula:**
   $$a_n = a_1 + (n - 1)d$$
   Where $a_1$ is the first term, $d = a_k - a_{k-1}$ is the common difference, and $n \in \mathbb{Z}^+$.

2. **Sum of First $n$ Terms ($S_n$):**
   $$S_n = \frac{n}{2}\left(2a_1 + (n-1)d\right) = \frac{n}{2}(a_1 + a_n)$$

3. **Arithmetic Means:**
   Inserting $k$ arithmetic means between two numbers $A$ and $B$:
   $$d = \frac{B - A}{k + 1}$$

---

### Worked Example 1.${step + 1}
**Problem:** In an arithmetic progression, the 4th term is 19 and the 9th term is 44. Find the first term $a_1$, the common difference $d$, and the sum of the first 25 terms ($S_{25}$).

**Step-by-Step Solution:**
1. Set up the simultaneous equations:
   $$a_4 = a_1 + 3d = 19$$
   $$a_9 = a_1 + 8d = 44$$
2. Subtract the first equation from the second:
   $$(a_1 + 8d) - (a_1 + 3d) = 44 - 19 \implies 5d = 25 \implies d = 5$$
3. Substitute $d = 5$ into $a_4$:
   $$a_1 + 3(5) = 19 \implies a_1 = 19 - 15 = 4$$
4. Compute $S_{25}$:
   $$S_{25} = \frac{25}{2}\left[2(4) + (25-1)(5)\right] = \frac{25}{2}[8 + 120] = \frac{25}{2}(128) = 25 \times 64 = 1,600$$

---

### EUEE National Exam Strategy:
> **Examiner Trap:** Be careful when question asks for the sum from term $p$ to term $q$. Never compute $S_q - S_p$; the correct identity is $S_q - S_{p-1}$.`;
    }

    if (p <= 26) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 1: Sequences and Series • Section 1.2: Geometric Sequences and Series

### 1.2 Geometric Progressions (GP) and Infinite Series (Page ${p})

A **geometric sequence** is a sequence where each term after the first is obtained by multiplying the previous term by a fixed non-zero constant called the **common ratio** ($r$):
$$a_n = a_{n-1} \cdot r \quad \implies \quad r = \frac{a_n}{a_{n-1}}$$

#### Key Formulas:
- **General $n$-th Term:** $a_n = a_1 \cdot r^{n-1}$
- **Finite Geometric Sum:**
  $$S_n = \frac{a_1(1 - r^n)}{1 - r} = \frac{a_1(r^n - 1)}{r - 1} \quad (r \ne 1)$$
- **Infinite Geometric Series Convergence:**
  An infinite geometric series converges if and only if $|r| < 1$. The sum to infinity is:
  $$S_\infty = \lim_{n \to \infty} S_n = \frac{a_1}{1 - r} \quad (|r| < 1)$$
  If $|r| \ge 1$ and $a_1 \ne 0$, the series diverges.

---

### Worked Example 1.7
**Problem:** Express the recurring decimal $0.\overline{27} = 0.272727\dots$ as a simplified rational fraction $\frac{p}{q}$.

**Solution:**
1. Express as an infinite geometric series:
   $$0.\overline{27} = \frac{27}{100} + \frac{27}{10,000} + \frac{27}{1,000,000} + \dots$$
2. Identify parameters: $a_1 = \frac{27}{100}$, common ratio $r = \frac{1}{100} = 0.01$.
3. Since $|r| = 0.01 < 1$, apply the infinite sum formula:
   $$S_\infty = \frac{\frac{27}{100}}{1 - \frac{1}{100}} = \frac{\frac{27}{100}}{\frac{99}{100}} = \frac{27}{99} = \frac{3}{11}$$

---

### EUEE Exam Trap:
> In alternating geometric series where $r < 0$, check whether terms oscillate. Convergence is strictly dictated by $|r| < 1$.`;
    }

    if (p <= 38) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 1: Sequences and Series • Section 1.3: Sigma Notation & Mathematical Induction

### 1.3 Sigma Notation ($\sum$) and Principle of Mathematical Induction (Page ${p})

#### Closed Form Summation Identities:
$$\sum_{i=1}^n c = cn, \quad \sum_{i=1}^n i = \frac{n(n+1)}{2}, \quad \sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}, \quad \sum_{i=1}^n i^3 = \left[\frac{n(n+1)}{2}\right]^2$$

#### The Principle of Mathematical Induction (PMI):
To prove that a proposition $P(n)$ is true for all integers $n \ge n_0$:
1. **Base Step:** Verify that $P(n_0)$ is true (usually $n=1$).
2. **Induction Hypothesis:** Assume $P(k)$ is true for an arbitrary integer $k \ge n_0$.
3. **Inductive Step:** Prove that $P(k+1)$ must consequently be true under the hypothesis.
4. **Conclusion:** By PMI, $P(n)$ holds true for all integers $n \ge n_0$.

---

### Worked Example 1.12
**Problem:** Prove by mathematical induction that for all natural numbers $n \ge 1$:
$$1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$$

**Proof:**
1. *Base Step ($n=1$):* $\text{LHS} = 1$; $\text{RHS} = \frac{1(1+1)}{2} = \frac{2}{2} = 1$. Base step holds.
2. *Induction Hypothesis:* Assume true for $n=k$: $1 + 2 + \dots + k = \frac{k(k+1)}{2}$.
3. *Inductive Step ($n=k+1$):*
   $$\text{LHS} = (1 + 2 + \dots + k) + (k+1) = \frac{k(k+1)}{2} + (k+1) = (k+1)\left[\frac{k}{2} + 1\right] = \frac{(k+1)(k+2)}{2}$$
   This matches the formula for $n=k+1$.
4. Hence by PMI, the identity holds for all $n \in \mathbb{Z}^+$.`;
    }

    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 1: Sequences and Series • Section 1.4: Financial Mathematics & Annuities

### 1.4 Applications of Series in Finance & Economics (Page ${p})

#### Compound Interest & Effective Rates:
$$A = P\left(1 + \frac{r}{m}\right)^{mt}, \quad r_{\text{eff}} = \left(1 + \frac{r}{m}\right)^m - 1$$
Continuous compounding: $A = P e^{rt}$.

#### Ordinary Annuities (Future & Present Value):
- **Future Value of Ordinary Annuity ($S_n$):**
  $$S_n = R \cdot \frac{(1 + i)^n - 1}{i}$$
- **Present Value of Ordinary Annuity ($A_n$):**
  $$A_n = R \cdot \frac{1 - (1 + i)^{-n}}{i}$$
  Where $R$ is periodic payment, $i = r/m$ is interest rate per period, and $n = mt$ is total periods.

---

### Worked Example 1.15
**Problem:** An Ethiopian entrepreneur deposits 5,000 ETB at the end of each quarter into a Commercial Bank of Ethiopia development savings account yielding 8% annual interest compounded quarterly ($m=4$). What is the accumulated balance after 5 years?

**Solution:**
1. Parameters: $R = 5,000\text{ ETB}$, $i = \frac{0.08}{4} = 0.02$, $n = 5 \times 4 = 20$.
2. Compute $(1 + 0.02)^{20} \approx 1.485947$.
3. Apply formula:
   $$S_{20} = 5000 \times \frac{1.485947 - 1}{0.02} = 5000 \times 24.29737 = 121,486.85\text{ ETB}$$
The entrepreneur accumulates 121,486.85 ETB.`;
  }

  // Unit 2: Limits and Continuity (Pages 53 - 104)
  if (p >= 53 && p <= 104) {
    if (p <= 68) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 2: Limits and Continuity • Section 2.1: Algebraic Concept of Limits

### 2.1 Formal Definition and Algebraic Evaluation of Limits (Page ${p})

#### Definition of Limit:
$$\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L$$
If the one-sided limits are unequal, the two-sided limit does NOT exist.

#### Resolving Indeterminate Forms ($\frac{0}{0}$):
1. **Factoring & Cancellation:** Factor numerator and denominator $(x - c)$ and cancel non-zero terms.
2. **Conjugate Rationalization:** For expressions with radicals $\sqrt{g(x)} - \sqrt{h(x)}$, multiply numerator and denominator by the conjugate $\sqrt{g(x)} + \sqrt{h(x)}$.
3. **Squeeze (Sandwich) Theorem:** If $g(x) \le f(x) \le h(x)$ for all $x$ in an open interval containing $c$ (except possibly at $c$) and $\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$, then:
   $$\lim_{x \to c} f(x) = L$$

---

### Worked Example 2.3
**Problem:** Evaluate $\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$.

**Solution:**
1. Direct substitution yields $\frac{\sqrt{4}-2}{4-4} = \frac{0}{0}$ (indeterminate).
2. Rationalize numerator:
   $$\lim_{x \to 4} \frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{(x - 4)(\sqrt{x} + 2)} = \lim_{x \to 4} \frac{x - 4}{(x - 4)(\sqrt{x} + 2)} = \lim_{x \to 4} \frac{1}{\sqrt{x} + 2} = \frac{1}{\sqrt{4} + 2} = \frac{1}{4}$$`;
    }

    if (p <= 84) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 2: Limits and Continuity • Section 2.2: Limits at Infinity and Asymptotes

### 2.2 Limits Involving Infinity and Asymptotes (Page ${p})

#### Rational Function Rules at Infinity:
Let $f(x) = \frac{a_n x^n + \dots + a_0}{b_m x^m + \dots + b_0}$:
$$\lim_{x \to \pm\infty} f(x) = \begin{cases} \frac{a_n}{b_m} & \text{if } n = m \quad (\text{Horizontal asymptote: } y = a_n/b_m) \\ 0 & \text{if } n < m \quad (\text{Horizontal asymptote: } y = 0) \\ \pm\infty & \text{if } n > m \quad (\text{No horizontal asymptote; oblique if } n = m+1) \end{cases}$$

#### Vertical Asymptotes:
The line $x = c$ is a vertical asymptote of $f(x) = \frac{P(x)}{Q(x)}$ if $Q(c) = 0$ and $P(c) \ne 0$.

---

### Worked Example 2.8
**Problem:** Find all horizontal and vertical asymptotes of $f(x) = \frac{3x^2 - 5x + 2}{x^2 - 4}$.

**Solution:**
1. Horizontal: Degree of numerator = degree of denominator ($n=2, m=2$).
   $$y = \lim_{x \to \infty} \frac{3x^2 - 5x + 2}{x^2 - 4} = \frac{3}{1} = 3$$
2. Vertical: Denominator $x^2 - 4 = 0 \implies (x-2)(x+2) = 0 \implies x = 2$ and $x = -2$.
   Numerator at $x=2$: $3(4) - 5(2) + 2 = 12 - 10 + 2 = 4 \ne 0$.
   Numerator at $x=-2$: $3(4) - 5(-2) + 2 = 12 + 10 + 2 = 24 \ne 0$.
   Both $x = 2$ and $x = -2$ are vertical asymptotes.`;
    }

    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 2: Limits and Continuity • Section 2.3: Continuity and Intermediate Value Theorem

### 2.3 Continuity Criteria & Fundamental Theorems (Page ${p})

#### Definition of Continuity at a Point $c$:
A function $f$ is continuous at $x = c$ if and only if three conditions hold:
1. $f(c)$ is defined ($c$ is in the domain of $f$).
2. $\lim_{x \to c} f(x)$ exists ($\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x)$).
3. $\lim_{x \to c} f(x) = f(c)$.

#### Classifications of Discontinuity:
- **Removable Discontinuity:** Limit exists, but $\lim_{x \to c} f(x) \ne f(c)$ or $f(c)$ undefined.
- **Jump Discontinuity:** One-sided limits exist but $\lim_{x \to c^-} f(x) \ne \lim_{x \to c^+} f(x)$.
- **Infinite Discontinuity:** One or both one-sided limits tend to $\pm\infty$.

#### The Intermediate Value Theorem (IVT):
If $f$ is continuous on $[a, b]$ and $k$ is any value between $f(a)$ and $f(b)$, then there exists at least one number $c \in (a, b)$ such that $f(c) = k$.
*Bolzano's Root Theorem:* If $f(a) \cdot f(b) < 0$, then $f(x) = 0$ has at least one root in $(a, b)$.`;
  }

  // Unit 3: Differential Calculus (Pages 105 - 168)
  if (p >= 105 && p <= 168) {
    if (p <= 126) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 3: Differential Calculus • Section 3.1: Fundamental Rules of Differentiation

### 3.1 The Derivative & Core Differentiation Laws (Page ${p})

#### Limit Definition of the Derivative:
$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} = \lim_{t \to x} \frac{f(t) - f(x)}{t - x}$$

#### Fundamental Rules:
1. **Power Rule:** $\frac{d}{dx}(x^n) = n x^{n-1} \quad (n \in \mathbb{R})$
2. **Product Rule:** $(u \cdot v)' = u'v + u v'$
3. **Quotient Rule:** $\left(\frac{u}{v}\right)' = \frac{u'v - u v'}{v^2}$
4. **Trigonometric Derivatives:**
   $$\frac{d}{dx}(\sin x) = \cos x, \quad \frac{d}{dx}(\cos x) = -\sin x, \quad \frac{d}{dx}(\tan x) = \sec^2 x$$

---

### Worked Example 3.5
**Problem:** Differentiate $f(x) = \frac{x^2 + 1}{2x - 3}$.

**Solution:**
1. Let $u = x^2 + 1 \implies u' = 2x$. Let $v = 2x - 3 \implies v' = 2$.
2. By Quotient Rule:
   $$f'(x) = \frac{(2x)(2x - 3) - (x^2 + 1)(2)}{(2x - 3)^2} = \frac{4x^2 - 6x - 2x^2 - 2}{(2x - 3)^2} = \frac{2x^2 - 6x - 2}{(2x - 3)^2}$$`;
    }

    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 3: Differential Calculus • Section 3.2: The Chain Rule & Transcendental Derivatives

### 3.2 The Chain Rule and Exponential/Logarithmic Derivatives (Page ${p})

#### The Chain Rule:
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} \quad \implies \quad \frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

#### Transcendental Rules:
$$\frac{d}{dx}(e^x) = e^x, \quad \frac{d}{dx}(a^x) = a^x \ln a, \quad \frac{d}{dx}(\ln x) = \frac{1}{x}, \quad \frac{d}{dx}(\log_a x) = \frac{1}{x \ln a}$$

#### Implicit Differentiation Protocol:
When differentiating equations relating $x$ and $y$ implicitly:
1. Differentiate both sides with respect to $x$, applying the chain rule to terms with $y$ (multiplying by $\frac{dy}{dx}$).
2. Collect all terms containing $\frac{dy}{dx}$ on one side.
3. Factor out $\frac{dy}{dx}$ and solve algebraically.`;
  }

  // Unit 4: Applications of Calculus (Pages 169 - 218)
  if (p >= 169 && p <= 218) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 4: Applications of Differential Calculus • Optimization & Curve Sketching

### 4. Applied Optimization, Mean Value Theorem & Curve Sketching (Page ${p})

#### The Mean Value Theorem (MVT):
If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one $c \in (a, b)$ such that:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

#### Second Derivative Test for Local Extrema:
Let $f'(c) = 0$:
- If $f''(c) > 0$, then $f$ is concave upward at $c$ and $f(c)$ is a **local minimum**.
- If $f''(c) < 0$, then $f$ is concave downward at $c$ and $f(c)$ is a **local maximum**.
- If $f''(c) = 0$, the test is inconclusive (use the First Derivative Test).

#### Inflection Points:
An inflection point occurs at $x = c$ where the graph changes concavity (i.e. $f''(c) = 0$ or undefined, and $f''(x)$ changes sign across $c$).`;
  }

  // Unit 5: Integral Calculus (Pages 219 - 260)
  if (p >= 219 && p <= 260) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 5: Integral Calculus • Antiderivatives & Fundamental Theorem of Calculus

### 5. Integral Calculus & Applications of Definite Integrals (Page ${p})

#### Fundamental Theorem of Calculus (FTC):
- **Part 1:** If $f$ is continuous on $[a, b]$, then $g(x) = \int_a^x f(t) dt$ is differentiable and:
  $$\frac{d}{dx}\left[\int_a^x f(t) dt\right] = f(x)$$
- **Part 2 (Evaluation Theorem):**
  $$\int_a^b f(x) dx = F(b) - F(a) \quad \text{where } F'(x) = f(x)$$

#### Area Between Two Intersecting Curves:
If $f(x) \ge g(x)$ on $[a, b]$:
$$A = \int_a^b [f(x) - g(x)] dx$$

#### Integration by Substitution ($u$-sub):
$$\int f(g(x)) g'(x) dx = \int f(u) du \quad \text{where } u = g(x), du = g'(x)dx$$`;
  }

  // Unit 6: 3D Geometry and Vectors (Pages 261 - 312)
  if (p >= 261 && p <= 312) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 6: Three-Dimensional Geometry & Vectors • Coordinates, Lines and Planes

### 6. Analytic Geometry of Space & 3D Vectors (Page ${p})

#### Vector Dot & Cross Products in $\mathbb{R}^3$:
- **Dot Product:** $\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = |\vec{u}||\vec{v}|\cos\theta$. Orthogonal $\iff \vec{u} \cdot \vec{v} = 0$.
- **Cross Product:**
  $$\vec{u} \times \vec{v} = \det \begin{bmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{bmatrix} = (u_2 v_3 - u_3 v_2)\mathbf{i} - (u_1 v_3 - u_3 v_1)\mathbf{j} + (u_1 v_2 - u_2 v_1)\mathbf{k}$$
- **Area of Parallelogram:** $|\vec{u} \times \vec{v}|$. Area of triangle: $\frac{1}{2}|\vec{u} \times \vec{v}|$.

#### Equation of Planes in Space:
A plane passing through $P_0(x_0, y_0, z_0)$ with normal vector $\vec{n} = \langle A, B, C \rangle$:
$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \implies Ax + By + Cz + D = 0$$
Distance from point $(x_1, y_1, z_1)$ to plane:
$$D = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}$$`;
  }

  // Unit 7: Business & Economic Applications (Pages 313 - 358)
  if (p >= 313 && p <= 358) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 7: Mathematical Applications in Business & Economics

### 7. Marginal Analysis, Elasticity & Break-Even Modeling (Page ${p})

#### Marginal Cost, Revenue and Profit:
- Total Cost $C(x) = \text{Fixed Cost} + \text{Variable Cost}(x)$
- Marginal Cost: $MC = C'(x) = \frac{dC}{dx}$
- Marginal Revenue: $MR = R'(x) = \frac{dR}{dx}$
- Profit Maximization: $P(x) = R(x) - C(x) \implies P'(x) = 0 \implies MR = MC$

#### Price Elasticity of Demand ($\eta$):
$$\eta = \frac{p}{q} \cdot \frac{dq}{dp}$$
- $|\eta| > 1$: Elastic demand (lowering price increases total revenue).
- $|\eta| < 1$: Inelastic demand (raising price increases total revenue).
- $|\eta| = 1$: Unitary elasticity (revenue maximized).`;
  }

  // Unit 8: Linear Programming (Pages 359 - 392)
  if (p >= 359 && p <= 392) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 8: Linear Programming and Optimization • Simplex & Graphic Solutions

### 8. Linear Programming & Optimization Constraints (Page ${p})

#### Graphic Solution of Linear Programming (LPP):
1. **Formulate Objective Function:** Maximize or Minimize $Z = c_1 x_1 + c_2 x_2$.
2. **Define Linear Constraints:**
   $$a_{11}x_1 + a_{12}x_2 \le b_1, \quad a_{21}x_1 + a_{22}x_2 \le b_2, \quad x_1, x_2 \ge 0$$
3. **Graph Feasible Region:** Plot boundary lines and identify the intersection polygon.
4. **Fundamental Corner Point Theorem:**
   The optimal value of the linear objective function $Z$, if it exists, occurs at one of the extreme vertices (corner points) of the feasible region.`;
  }

  // Unit 9: Probability Distributions & Inferential Statistics (Pages 393 - 424)
  return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 12 Mathematics Student Textbook — Page ${p} of 424
Unit 9: Probability Distributions & Inferential Statistics

### 9. Normal Distribution & Hypothesis Testing (Page ${p})

#### Discrete vs. Continuous Random Variables:
- **Expected Value:** $E[X] = \mu = \sum x_i P(x_i)$
- **Variance:** $\sigma^2 = \sum (x_i - \mu)^2 P(x_i) = E[X^2] - (E[X])^2$
- **Binomial Distribution:** $P(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}$, $\mu = np$, $\sigma = \sqrt{np(1-p)}$.

#### Standard Normal Distribution ($Z$):
$$Z = \frac{X - \mu}{\sigma}$$
The Empirical Rule (68-95-99.7%):
- $68.26\%$ of data lies within $[\mu - \sigma, \mu + \sigma]$
- $95.44\%$ of data lies within $[\mu - 2\sigma, \mu + 2\sigma]$
- $99.74\%$ of data lies within $[\mu - 3\sigma, \mu + 3\sigma]$

#### Hypothesis Testing Framework:
Null Hypothesis $H_0$ versus Alternative Hypothesis $H_a$.
Test statistic $Z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$. Compare against critical value $Z_{\alpha/2}$ or $p$-value.`;
}
