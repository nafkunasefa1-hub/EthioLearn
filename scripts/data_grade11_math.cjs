/**
 * Grade 11 Mathematics Final Exam for Boarding and Non-Boarding (Special) Schools, February 2016/2024
 * 65 Questions extracted directly from the official examination paper with rigorous mathematical derivations and step-by-step solutions.
 */

const questions = [
  {
    question_number: 1,
    question_text: "If f = {(2, 3), (-1, 0), (5, 7), (8, 10)} and g = {(3, 7), (0, 12), (4, 4), (10, 20)}, then (g ∘ f) is equal to:",
    option_a: "{(2, 3), (-1, 12), (10, 20)}",
    option_b: "{(2, 3), (-1, 0), (5, 7), (8, 10)}",
    option_c: "{(2, 7), (-1, 12), (8, 20)}",
    option_d: "{(2, 7), (-1, 12), (10, 20)}",
    options: [
      "{(2, 3), (-1, 12), (10, 20)}",
      "{(2, 3), (-1, 0), (5, 7), (8, 10)}",
      "{(2, 7), (-1, 12), (8, 20)}",
      "{(2, 7), (-1, 12), (10, 20)}"
    ],
    correct_answer: "C",
    explanation: "Compute composite function (g ∘ f)(x) = g(f(x)):\n- f(2) = 3 ⇒ g(3) = 7 ⇒ (2, 7)\n- f(-1) = 0 ⇒ g(0) = 12 ⇒ (-1, 12)\n- f(5) = 7 ⇒ g(7) is undefined\n- f(8) = 10 ⇒ g(10) = 20 ⇒ (8, 20)\nThus, (g ∘ f) = {(2, 7), (-1, 12), (8, 20)}.",
    topic_name: "Composite Functions",
    instruction_category: "Relations and Functions"
  },
  {
    question_number: 2,
    question_text: "If relation R = {(x, y) | x, y ∈ ℝ and y = 3x + 6}, then which of the following is the inverse relation R⁻¹?",
    option_a: "R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (1/3)x + 2}",
    option_b: "R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (1/3)x - 2}",
    option_c: "R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (1/2)x - 3}",
    option_d: "R⁻¹ = {(x, y) | x, y ∈ ℝ and y = -(1/3)x + 2}",
    options: [
      "R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (1/3)x + 2}",
      "R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (1/3)x - 2}",
      "R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (1/2)x - 3}",
      "R⁻¹ = {(x, y) | x, y ∈ ℝ and y = -(1/3)x + 2}"
    ],
    correct_answer: "B",
    explanation: "To find the inverse relation, swap x and y:\nx = 3y + 6 ⇒ 3y = x - 6 ⇒ y = (1/3)x - 2.\nHence, R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (1/3)x - 2}.",
    topic_name: "Inverse Relations",
    instruction_category: "Relations and Functions"
  },
  {
    question_number: 3,
    question_text: "Which one of the following expressions is NOT a rational expression?",
    option_a: "(x² + 3) / (x³ + x - 9)",
    option_b: "(x² - x) / √(x⁴ + 4x² + 4)",
    option_c: "2x³ - 3x² - 9x + 10",
    option_d: "(x³ + 2x - 1) / (6x³ + 3x - 7)",
    options: [
      "(x² + 3) / (x³ + x - 9)",
      "(x² - x) / √(x⁴ + 4x² + 4)",
      "2x³ - 3x² - 9x + 10",
      "(x³ + 2x - 1) / (6x³ + 3x - 7)"
    ],
    correct_answer: "B",
    explanation: "A rational expression is defined as the quotient of two polynomials P(x)/Q(x) where Q(x) ≠ 0. Option B involves a radical expression (square root) in its algebraic form.",
    topic_name: "Rational Expressions",
    instruction_category: "Algebra"
  },
  {
    question_number: 4,
    question_text: "Which of the following is the range of the function f(x) = 8x³ + 2?",
    option_a: "ℝ",
    option_b: "ℝ \\ {2}",
    option_c: "{x : x ≥ 2}",
    option_d: "{x : x ≤ 2}",
    options: ["ℝ", "ℝ \\ {2}", "{x : x ≥ 2}", "{x : x ≤ 2}"],
    correct_answer: "A",
    explanation: "f(x) = 8x³ + 2 is an odd-degree polynomial function (cubic). As x → -∞, f(x) → -∞; as x → +∞, f(x) → +∞. Therefore, the range is the set of all real numbers ℝ.",
    topic_name: "Domain and Range of Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 5,
    question_text: "Which of the following is true for matrices?",
    option_a: "If A and B are invertible matrices, then the product AB is invertible and (AB)⁻¹ = B⁻¹A⁻¹.",
    option_b: "If A and B are square matrices, then A² - B² = (A - B)(A + B).",
    option_c: "If A is a 3×4 matrix and B is a 4×3 matrix, then the product AB is a 4×4 matrix.",
    option_d: "If A and B are square matrices, then (AB)² = A²B².",
    options: [
      "If A and B are invertible matrices, then the product AB is invertible and (AB)⁻¹ = B⁻¹A⁻¹.",
      "If A and B are square matrices, then A² - B² = (A - B)(A + B).",
      "If A is a 3×4 matrix and B is a 4×3 matrix, then the product AB is a 4×4 matrix.",
      "If A and B are square matrices, then (AB)² = A²B²."
    ],
    correct_answer: "A",
    explanation: "By the socks-shoes property of matrix multiplication, the inverse of a product of invertible matrices reverses order: (AB)⁻¹ = B⁻¹A⁻¹. Since matrix multiplication is generally non-commutative, B, C, and D are false.",
    topic_name: "Matrix Inverses & Properties",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 6,
    question_text: "Which of the following matrices is in reduced row echelon form (RREF)?",
    option_a: "[[1, 0, 0], [0, 2, 0], [0, 0, 1]]",
    option_b: "[[0, 0, 1], [0, 1, 0], [0, 0, 0]]",
    option_c: "[[0, 0, 0], [0, 0, 1], [0, 1, 0]]",
    option_d: "[[1, 0, 0], [0, 1, 0], [0, 0, 0]]",
    options: [
      "[[1, 0, 0], [0, 2, 0], [0, 0, 1]]",
      "[[0, 0, 1], [0, 1, 0], [0, 0, 0]]",
      "[[0, 0, 0], [0, 0, 1], [0, 1, 0]]",
      "[[1, 0, 0], [0, 1, 0], [0, 0, 0]]"
    ],
    correct_answer: "D",
    explanation: "In RREF: 1) Leading entries are 1; 2) Each leading 1 is strictly to the right of the leading 1 above it; 3) Each column containing a leading 1 has zeros elsewhere; 4) Rows of all zeros are at the bottom. Option D satisfies all criteria.",
    topic_name: "Reduced Row Echelon Form",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 7,
    question_text: "For what value of k does the system of equations {x + 2y - z = 12, 2x - y - 2z = 2, x - 3y + kz = 11} have no solution?",
    option_a: "ℝ",
    option_b: "k ≠ 1",
    option_c: "k ≠ -1",
    option_d: "k = -1",
    options: ["ℝ", "k ≠ 1", "k ≠ -1", "k = -1"],
    correct_answer: "D",
    explanation: "Calculate coefficient determinant det(A):\ndet(A) = 1(-k - 6) - 2(2k + 2) - 1(-6 + 1) = -k - 6 - 4k - 4 + 5 = -5k - 5.\ndet(A) = 0 ⇒ -5k - 5 = 0 ⇒ k = -1.\nWhen k = -1, Eq(1) - Eq(2) gives -x + 3y + z = 10, whereas Eq(3) is x - 3y - z = 11 ⇒ -x + 3y + z = -11. This creates 10 = -11 (inconsistent, no solution).",
    topic_name: "Systems of Linear Equations",
    instruction_category: "Matrices and Linear Systems"
  },
  {
    question_number: 8,
    question_text: "If A = (a_ij)₃ₓ₃ is a square matrix with A⁻¹ = [[-11, 2, 2], [-4, 0, 1], [6, -1, -1]], then what is the cofactor of a₃₂?",
    option_a: "4",
    option_b: "1",
    option_c: "-1",
    option_d: "-3",
    options: ["4", "1", "-1", "-3"],
    correct_answer: "B",
    explanation: "By definition, A⁻¹ = (1 / det(A)) * adj(A), so (A⁻¹)₂₃ = C₃₂ / det(A).\ndet(A⁻¹) = -11(0 - (-1)) - 2(4 - 6) + 2(4 - 0) = -11(1) - 2(-2) + 2(4) = -11 + 4 + 8 = 1.\nSince det(A) = 1 / det(A⁻¹) = 1/1 = 1, we have C₃₂ = det(A) * (A⁻¹)₂₃ = 1 * 1 = 1.",
    topic_name: "Cofactors and Matrix Inverses",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 9,
    question_text: "Which of the following is a one-to-one function?",
    option_a: "g = {(x, y) : y is the father of x}",
    option_b: "f = {(-2, 2), (-1, 3), (0, 1), (4, 1), (5, 6)}",
    option_c: "k = {(x, y) : x is a dog and y is its nose}",
    option_d: "f: ℝ → ℝ, given by f(x) = |x - 1|",
    options: [
      "g = {(x, y) : y is the father of x}",
      "f = {(-2, 2), (-1, 3), (0, 1), (4, 1), (5, 6)}",
      "k = {(x, y) : x is a dog and y is its nose}",
      "f: ℝ → ℝ, given by f(x) = |x - 1|"
    ],
    correct_answer: "C",
    explanation: "Every dog possesses a unique, individual nose (each domain element maps to a distinct range element with no duplicates), making it a bijective one-to-one mapping.",
    topic_name: "One-to-One (Injective) Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 10,
    question_text: "Let A = [[1, -1, 1], [2, 1, -3], [1, 1, 1]] and 10B = [[4, 2, 2], [-5, 0, x], [1, -2, 3]]. If B is the inverse of A, then x = ______.",
    option_a: "-1",
    option_b: "5",
    option_c: "-2",
    option_d: "2",
    options: ["-1", "5", "-2", "2"],
    correct_answer: "B",
    explanation: "Since A * (10B) = 10 * I:\nRow 2 of A dot Column 3 of 10B = 0:\n(2)(2) + (1)(x) + (-3)(3) = 0 ⇒ 4 + x - 9 = 0 ⇒ x - 5 = 0 ⇒ x = 5.",
    topic_name: "Matrix Multiplication & Inverses",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 11,
    question_text: "The solution of the equation x²/(x + 3) + 3x/(x² + 5x + 6) = 2x/(x + 3) is equal to:",
    option_a: "{-1, 1}",
    option_b: "{-1, 0, 1}",
    option_c: "{0, 1}",
    option_d: "{-1, 0}",
    options: ["{-1, 1}", "{-1, 0, 1}", "{0, 1}", "{-1, 0}"],
    correct_answer: "B",
    explanation: "Factor denominator: x² + 5x + 6 = (x + 2)(x + 3). Domain: x ∉ {-2, -3}.\nMultiply by (x + 2)(x + 3):\nx²(x + 2) + 3x = 2x(x + 2)\nx³ + 2x² + 3x = 2x² + 4x\nx³ - x = 0 ⇒ x(x - 1)(x + 1) = 0\nx = 0, x = 1, x = -1. All solutions are valid in the domain. Solution set = {-1, 0, 1}.",
    topic_name: "Rational Equations",
    instruction_category: "Algebra"
  },
  {
    question_number: 12,
    question_text: "What are the respective values of A, B, C and D so that (x³ - 4x² + 9x - 5)/(x² - 2x + 3)² = (Ax + B)/(x² - 2x + 3) + (Cx + D)/(x² - 2x + 3)²?",
    option_a: "1, -2, 2, 1",
    option_b: "-1, 2, -2, 1",
    option_c: "2, 1, 2, 1",
    option_d: "1, -2, 2, 0",
    options: [
      "1, -2, 2, 1",
      "-1, 2, -2, 1",
      "2, 1, 2, 1",
      "1, -2, 2, 0"
    ],
    correct_answer: "A",
    explanation: "(Ax + B)(x² - 2x + 3) + (Cx + D) = Ax³ + (-2A + B)x² + (3A - 2B + C)x + (3B + D) = x³ - 4x² + 9x - 5.\n- A = 1\n- -2(1) + B = -4 ⇒ B = -2\n- 3(1) - 2(-2) + C = 9 ⇒ 3 + 4 + C = 9 ⇒ C = 2\n- 3(-2) + D = -5 ⇒ -6 + D = -5 ⇒ D = 1.\nValues: A = 1, B = -2, C = 2, D = 1.",
    topic_name: "Partial Fraction Decomposition",
    instruction_category: "Algebra"
  },
  {
    question_number: 13,
    question_text: "If f(x) = x / (x - 1), then which one of the following is equal to f(b) / f(b + 1)?",
    option_a: "f(1/b)",
    option_b: "f(-b)",
    option_c: "f(b²)",
    option_d: "f(b / (1 - b))",
    options: ["f(1/b)", "f(-b)", "f(b²)", "f(b / (1 - b))"],
    correct_answer: "C",
    explanation: "f(b) = b / (b - 1)\nf(b + 1) = (b + 1) / ((b + 1) - 1) = (b + 1) / b\nRatio = [b / (b - 1)] / [(b + 1) / b] = b² / (b² - 1).\nEvaluating f(b²) = b² / (b² - 1). Therefore, the quotient equals f(b²).",
    topic_name: "Function Evaluation and Simplification",
    instruction_category: "Functions"
  },
  {
    question_number: 14,
    question_text: "Which one of the following relations is a function?",
    option_a: "R = {(x, y) : x, y ∈ ℝ and y = x + 3}",
    option_b: "R = {(x, y) : x, y ∈ ℝ and x² + y² = 1}",
    option_c: "R = {(6, 1), (7, 4), (0, 5), (6, 4), (1, 6)}",
    option_d: "R = {(x, y) : x, y ∈ ℝ and x² - y² = 0}",
    options: [
      "R = {(x, y) : x, y ∈ ℝ and y = x + 3}",
      "R = {(x, y) : x, y ∈ ℝ and x² + y² = 1}",
      "R = {(6, 1), (7, 4), (0, 5), (6, 4), (1, 6)}",
      "R = {(x, y) : x, y ∈ ℝ and x² - y² = 0}"
    ],
    correct_answer: "A",
    explanation: "A relation is a function if every input x corresponds to exactly one unique output y. y = x + 3 is a well-defined linear function. Circles (B), repeated domain elements (C: x=6 maps to 1 and 4), and y = ±x (D) fail the vertical line test.",
    topic_name: "Definition of a Function",
    instruction_category: "Relations and Functions"
  },
  {
    question_number: 15,
    question_text: "Which one of the following is the inverse of the function f(x) = eˣ - e⁻ˣ for x > 0?",
    option_a: "f⁻¹(x) = ln((x - √(x² - 4)) / 2)",
    option_b: "f⁻¹(x) = ln((x + √(x² - 4)) / 2)",
    option_c: "f⁻¹(x) = ln(x)",
    option_d: "f⁻¹(x) = ln((x + √(x² + 4)) / 2)",
    options: [
      "f⁻¹(x) = ln((x - √(x² - 4)) / 2)",
      "f⁻¹(x) = ln((x + √(x² - 4)) / 2)",
      "f⁻¹(x) = ln(x)",
      "f⁻¹(x) = ln((x + √(x² + 4)) / 2)"
    ],
    correct_answer: "D",
    explanation: "Let y = eˣ - e⁻ˣ. Let u = eˣ > 0.\nu - 1/u = y ⇒ u² - yu - 1 = 0.\nUsing quadratic formula: u = (y + √(y² + 4)) / 2 (positive root chosen since u > 0).\nTherefore, x = ln((y + √(y² + 4)) / 2) ⇒ f⁻¹(x) = ln((x + √(x² + 4)) / 2).",
    topic_name: "Inverse of Exponential & Hyperbolic Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 16,
    question_text: "If f(x) = ⌊x⌋, g(x) = |x| and h(x) = sgn(x), then which one of the following is necessarily true?",
    option_a: "f(x) - g(x) ≤ 0, ∀x ∈ ℝ",
    option_b: "f(x) ≥ h(x), ∀x ∈ ℝ⁺",
    option_c: "h(x) = g(x)/x, ∀x ∈ ℝ",
    option_d: "f(g(-5/2)) + g(f(-6/5)) = 0",
    options: [
      "f(x) - g(x) ≤ 0, ∀x ∈ ℝ",
      "f(x) ≥ h(x), ∀x ∈ ℝ⁺",
      "h(x) = g(x)/x, ∀x ∈ ℝ",
      "f(g(-5/2)) + g(f(-6/5)) = 0"
    ],
    correct_answer: "A",
    explanation: "For any real number x, ⌊x⌋ ≤ x ≤ |x|. Thus ⌊x⌋ ≤ |x| ⇒ f(x) - g(x) ≤ 0 for all x ∈ ℝ.",
    topic_name: "Special Functions (Floor, Absolute Value, Signum)",
    instruction_category: "Functions"
  },
  {
    question_number: 17,
    question_text: "If f(x) = 7x - 6 and g(x) = 5x² - 7x - 6, then which of the following is the value of (f ∘ g)(3)?",
    option_a: "1014",
    option_b: "270",
    option_c: "33",
    option_d: "120",
    options: ["1014", "270", "33", "120"],
    correct_answer: "D",
    explanation: "First evaluate g(3) = 5(3²) - 7(3) - 6 = 5(9) - 21 - 6 = 45 - 27 = 18.\nThen f(g(3)) = f(18) = 7(18) - 6 = 126 - 6 = 120.",
    topic_name: "Function Composition",
    instruction_category: "Functions"
  },
  {
    question_number: 18,
    question_text: "Let f(x) = ax⁵ + 5x⁴ + 3x² + d and g(x) = 2x⁵ + bx⁴ + cx³ + 3x² - 4. If f(x) = g(x) for all x ∈ ℝ, then which one of the following is true?",
    option_a: "a + b + d = 11",
    option_b: "a + d < b + c",
    option_c: "(bd + c) / a = 10",
    option_d: "(ad)² < b²",
    options: [
      "a + b + d = 11",
      "a + d < b + c",
      "(bd + c) / a = 10",
      "(ad)² < b²"
    ],
    correct_answer: "B",
    explanation: "Equating coefficients of identical polynomials:\n- x⁵: a = 2\n- x⁴: b = 5\n- x³: c = 0\n- constant: d = -4\nTesting Option B: a + d = 2 + (-4) = -2; b + c = 5 + 0 = 5. Since -2 < 5, statement B is true.",
    topic_name: "Polynomial Equality",
    instruction_category: "Polynomials"
  },
  {
    question_number: 19,
    question_text: "If f(x) = ln(x + 1) and g(x) = x³ + 7, then what is the domain of (f ∘ g)(x)?",
    option_a: "[-2, ∞)",
    option_b: "(-2, ∞)",
    option_c: "[0, ∞)",
    option_d: "∅",
    options: ["[-2, ∞)", "(-2, ∞)", "[0, ∞)", "∅"],
    correct_answer: "B",
    explanation: "(f ∘ g)(x) = ln((x³ + 7) + 1) = ln(x³ + 8).\nThe natural logarithm is defined strictly for positive arguments: x³ + 8 > 0 ⇒ x³ > -8 ⇒ x > -2. Thus Domain = (-2, ∞).",
    topic_name: "Domain of Composite Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 20,
    question_text: "Which one of the following statements is true about the function f(x) = (2x² - 7x + 3) / (x² - 2x - 3)?",
    option_a: "The vertical asymptote is x = 1.",
    option_b: "The horizontal asymptote is y = 1/2.",
    option_c: "The x-intercept is 1/2.",
    option_d: "The point of discontinuity is (3, 5/3).",
    options: [
      "The vertical asymptote is x = 1.",
      "The horizontal asymptote is y = 1/2.",
      "The x-intercept is 1/2.",
      "The point of discontinuity is (3, 5/3)."
    ],
    correct_answer: "C",
    explanation: "Factor numerator and denominator: f(x) = ((2x - 1)(x - 3)) / ((x + 1)(x - 3)).\nFor x ≠ 3, f(x) = (2x - 1) / (x + 1).\n- x-intercept: 2x - 1 = 0 ⇒ x = 1/2.\n- Vertical asymptote: x = -1.\n- Horizontal asymptote: y = 2/1 = 2.\n- Removable hole at x = 3: y = (2(3)-1)/(3+1) = 5/4.",
    topic_name: "Rational Functions (Asymptotes & Intercepts)",
    instruction_category: "Rational Functions"
  },
  {
    question_number: 21,
    question_text: "Which of the following functions best describes the graph with vertical asymptotes at x = -2 and x = -1, and horizontal asymptote y = 1?",
    option_a: "f(x) = x² / (x² + 3x + 2)",
    option_b: "g(x) = 3x² / (3x² + 3x + 2)",
    option_c: "f(x) = x² / (x² - 3x + 2)",
    option_d: "f(x) = x² / (2x² + 3x + 2)",
    options: [
      "f(x) = x² / (x² + 3x + 2)",
      "g(x) = 3x² / (3x² + 3x + 2)",
      "f(x) = x² / (x² - 3x + 2)",
      "f(x) = x² / (2x² + 3x + 2)"
    ],
    correct_answer: "A",
    explanation: "Denominator x² + 3x + 2 = (x + 1)(x + 2) = 0 gives vertical asymptotes at x = -1 and x = -2. The ratio of leading coefficients is 1/1 = 1 (horizontal asymptote y = 1).",
    topic_name: "Graphs of Rational Functions",
    instruction_category: "Rational Functions"
  },
  {
    question_number: 22,
    question_text: "Let f be the one-to-one function defined by the set of ordered pairs {(-3, 2), (4, 5), (7, 4), (10, 19)}. Which of the following is the value of f⁻¹(4)?",
    option_a: "7",
    option_b: "1/4",
    option_c: "5",
    option_d: "1/5",
    options: ["7", "1/4", "5", "1/5"],
    correct_answer: "A",
    explanation: "In f, the ordered pair with y = 4 is (7, 4), which means f(7) = 4. Therefore, f⁻¹(4) = 7.",
    topic_name: "Inverse of Discrete Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 23,
    question_text: "If F(1) = 2 and F(n) = F(n - 1) + 1/2 for all integers n ≥ 1, then find the value of F(101).",
    option_a: "49",
    option_b: "50",
    option_c: "52",
    option_d: "51",
    options: ["49", "50", "52", "51"],
    correct_answer: "C",
    explanation: "This is an arithmetic progression with first term a₁ = 2 and common difference d = 1/2.\nF(n) = a₁ + (n - 1)d ⇒ F(101) = 2 + (101 - 1)(1/2) = 2 + 100/2 = 2 + 50 = 52.",
    topic_name: "Arithmetic Progressions & Recursion",
    instruction_category: "Sequences and Series"
  },
  {
    question_number: 24,
    question_text: "Let f: ℝ → ℝ be defined by f(x) = 2x if x > 3; x² if 1 < x ≤ 3; 3x if x ≤ 1. Then f(-5) + f(2) + f(6) is equal to:",
    option_a: "1",
    option_b: "14",
    option_c: "12",
    option_d: "80",
    options: ["1", "14", "12", "80"],
    correct_answer: "A",
    explanation: "- For x = -5 ≤ 1: f(-5) = 3(-5) = -15.\n- For x = 2 (1 < 2 ≤ 3): f(2) = 2² = 4.\n- For x = 6 > 3: f(6) = 2(6) = 12.\nSum = -15 + 4 + 12 = 1.",
    topic_name: "Piecewise Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 25,
    question_text: "Which of the following matrices is non-singular (invertible)?",
    option_a: "[[1, 0, 2], [2, -1, 3], [4, 1, 8]]",
    option_b: "[[-4, 3, -4], [1, -1, 1], [-4, 3, -4]]",
    option_c: "[[3, 5, 6], [0, 0, 0], [-1, 2, 1]]",
    option_d: "[[2, 2, 2], [2, 2, 2], [2, 2, 2]]",
    options: [
      "[[1, 0, 2], [2, -1, 3], [4, 1, 8]]",
      "[[-4, 3, -4], [1, -1, 1], [-4, 3, -4]]",
      "[[3, 5, 6], [0, 0, 0], [-1, 2, 1]]",
      "[[2, 2, 2], [2, 2, 2], [2, 2, 2]]"
    ],
    correct_answer: "A",
    explanation: "A matrix is non-singular if its determinant is non-zero:\ndet(A) = 1((-1)(8) - (3)(1)) - 0 + 2((2)(1) - (-1)(4)) = 1(-11) + 2(6) = -11 + 12 = 1 ≠ 0. Matrices B (identical rows), C (zero row), and D (identical rows) all have determinant = 0.",
    topic_name: "Matrix Determinants & Non-Singularity",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 26,
    question_text: "Which of the following is the solution set of 2/5 ≤ (1 - x)/3 ≤ x - 1?",
    option_a: "∅",
    option_b: "[-1/5, 1]",
    option_c: "(-∞, -1/5] ∩ [-1, ∞)",
    option_d: "(-∞, -1/5] ∪ [1, ∞)",
    options: [
      "∅",
      "[-1/5, 1]",
      "(-∞, -1/5] ∩ [-1, ∞)",
      "(-∞, -1/5] ∪ [1, ∞)"
    ],
    correct_answer: "A",
    explanation: "Solve the compound inequality in two parts:\n1) 2/5 ≤ (1 - x)/3 ⇒ 6 ≤ 5 - 5x ⇒ 5x ≤ -1 ⇒ x ≤ -1/5.\n2) (1 - x)/3 ≤ x - 1 ⇒ 1 - x ≤ 3x - 3 ⇒ 4 ≤ 4x ⇒ x ≥ 1.\nThe intersection (-∞, -1/5] ∩ [1, ∞) is empty (∅).",
    topic_name: "Compound Linear Inequalities",
    instruction_category: "Algebra"
  },
  {
    question_number: 27,
    question_text: "Which one of the following is a bijective function?",
    option_a: "f(x) = {x + 1 if x < 0; x² if x ≥ 0}",
    option_b: "f: ℝ → [0, ∞), f(x) = 2ˣ",
    option_c: "f: (0, ∞) → ℝ, f(x) = log_(1/2)(x)",
    option_d: "f: ℝ \\ {0} → ℝ, f(x) = (x + 1)/x",
    options: [
      "f(x) = {x + 1 if x < 0; x² if x ≥ 0}",
      "f: ℝ → [0, ∞), f(x) = 2ˣ",
      "f: (0, ∞) → ℝ, f(x) = log_(1/2)(x)",
      "f: ℝ \\ {0} → ℝ, f(x) = (x + 1)/x"
    ],
    correct_answer: "C",
    explanation: "f(x) = log_(1/2)(x) with domain (0, ∞) and codomain ℝ is strictly monotonically decreasing (injective/one-to-one) and maps onto all of ℝ (surjective/onto), making it bijective.",
    topic_name: "Bijective Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 28,
    question_text: "If g(x) = -3x + 1 and (f ∘ g)(x) = 9x² - 6x - 1, then f(x) = ________.",
    option_a: "x² + 2",
    option_b: "x² - 2",
    option_c: "9x² - 1",
    option_d: "3x² - 2",
    options: ["x² + 2", "x² - 2", "9x² - 1", "3x² - 2"],
    correct_answer: "B",
    explanation: "Observe that (g(x))² = (-3x + 1)² = 9x² - 6x + 1.\nThen (f ∘ g)(x) = (9x² - 6x + 1) - 2 = (g(x))² - 2.\nSubstituting u = g(x) gives f(u) = u² - 2 ⇒ f(x) = x² - 2.",
    topic_name: "Finding Function from Composition",
    instruction_category: "Functions"
  },
  {
    question_number: 29,
    question_text: "If p(x) = (6x² + x³ - x⁴) / (x² - 4) and q(x) = (3x³ - 9x²) / (x² + 6x - 16), then which one of the following is the solution set of p(x)/q(x) = -3?",
    option_a: "{1}",
    option_b: "{-1, 1}",
    option_c: "{1, 5}",
    option_d: "ℝ \\ {-8, -2, 2}",
    options: ["{1}", "{-1, 1}", "{1, 5}", "ℝ \\ {-8, -2, 2}"],
    correct_answer: "A",
    explanation: "Factor both expressions:\np(x) = -x²(x² - x - 6) / ((x - 2)(x + 2)) = -x²(x - 3)(x + 2) / ((x - 2)(x + 2)) = -x²(x - 3) / (x - 2)\nq(x) = 3x²(x - 3) / ((x - 2)(x + 8))\np(x)/q(x) = [-x²(x - 3)/(x - 2)] * [((x - 2)(x + 8)) / (3x²(x - 3))] = -(x + 8) / 3.\nSet -(x + 8)/3 = -3 ⇒ x + 8 = 9 ⇒ x = 1.\nDomain restrictions x ∉ {-8, -2, 0, 2, 3} are satisfied by x = 1.",
    topic_name: "Algebraic Simplification & Rational Equations",
    instruction_category: "Algebra"
  },
  {
    question_number: 30,
    question_text: "The equation (24x² + 25x - 47) / (ax - 2) = -8x - 3 - 53/(ax - 2) is true for all values of x ≠ 2/a, where a is a constant. What is the value of a?",
    option_a: "-3",
    option_b: "-16",
    option_c: "3",
    option_d: "16",
    options: ["-3", "-16", "3", "16"],
    correct_answer: "A",
    explanation: "Multiply both sides by (ax - 2):\n24x² + 25x - 47 = (-8x - 3)(ax - 2) - 53\n24x² + 25x - 47 = -8ax² + 16x - 3ax + 6 - 53 = -8ax² + (16 - 3a)x - 47.\nEquating x² coefficients: 24 = -8a ⇒ a = -3.",
    topic_name: "Polynomial Division & Undetermined Coefficients",
    instruction_category: "Polynomials"
  },
  {
    question_number: 31,
    question_text: "Listed below are 4 functions, each denoted g(x) and involving a real number constant c > 1. If f(x) = 2ˣ, which of these 4 functions yields the greatest value for f(g(x)), for all x > 1?",
    option_a: "g(x) = c/x",
    option_b: "g(x) = x/c",
    option_c: "g(x) = cx",
    option_d: "g(x) = x - c",
    options: ["g(x) = c/x", "g(x) = x/c", "g(x) = cx", "g(x) = x - c"],
    correct_answer: "C",
    explanation: "Since f(u) = 2ᵘ is strictly monotonically increasing, maximizing f(g(x)) is equivalent to maximizing g(x). For c > 1 and x > 1: cx > x/c, cx > x - c, and cx > c/x. Thus g(x) = cx yields the greatest value.",
    topic_name: "Exponential Growth & Inequalities",
    instruction_category: "Functions"
  },
  {
    question_number: 32,
    question_text: "Let h(x) = (1/2)(sgn(x) + 1). Then which of the following is true?",
    option_a: "h(x) - h(-x) = 1",
    option_b: "h(-x) - h(x) = -1",
    option_c: "h(-x) + h(x) = 1",
    option_d: "h(-x) + h(x) = 0",
    options: [
      "h(x) - h(-x) = 1",
      "h(-x) - h(x) = -1",
      "h(-x) + h(x) = 1",
      "h(-x) + h(x) = 0"
    ],
    correct_answer: "C",
    explanation: "Since sgn(-x) = -sgn(x) for all x:\nh(-x) + h(x) = (1/2)(sgn(-x) + 1) + (1/2)(sgn(x) + 1) = (1/2)(-sgn(x) + 1 + sgn(x) + 1) = (1/2)(2) = 1.",
    topic_name: "Signum Function Properties",
    instruction_category: "Functions"
  },
  {
    question_number: 33,
    question_text: "Let matrix A = [[4, 4α, α], [0, α, 4α], [0, 0, 4]]. If det(A²) = 16, then find the value of |α|.",
    option_a: "1/16",
    option_b: "4",
    option_c: "2",
    option_d: "1/4",
    options: ["1/16", "4", "2", "1/4"],
    correct_answer: "D",
    explanation: "A is upper triangular, so det(A) is the product of its diagonal entries: det(A) = 4 * α * 4 = 16α.\ndet(A²) = (det(A))² = (16α)² = 256α² = 16.\nα² = 16/256 = 1/16 ⇒ |α| = √(1/16) = 1/4.",
    topic_name: "Determinants of Triangular Matrices",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 34,
    question_text: "If A = [[2, 0, -1], [1, 2, 0], [0, 0, -1]] and (2A + B)ᵀ = AᵀA, then which one of the following is equal to B?",
    option_a: "[[8, 0, -4], [4, 8, 0], [0, 0, -4]]",
    option_b: "[[1, 2, 0], [0, 0, 0], [-2, 0, 4]]",
    option_c: "[[0, 0, 0], [0, 0, 0], [0, 0, 0]]",
    option_d: "[[1, 0, -2], [2, 0, 0], [0, 0, 4]]",
    options: [
      "[[8, 0, -4], [4, 8, 0], [0, 0, -4]]",
      "[[1, 2, 0], [0, 0, 0], [-2, 0, 4]]",
      "[[0, 0, 0], [0, 0, 0], [0, 0, 0]]",
      "[[1, 0, -2], [2, 0, 0], [0, 0, 4]]"
    ],
    correct_answer: "B",
    explanation: "Transpose both sides: 2A + B = (AᵀA)ᵀ = AᵀA ⇒ B = AᵀA - 2A.\nCompute AᵀA:\n[[2, 1, 0], [0, 2, 0], [-1, 0, -1]] * [[2, 0, -1], [1, 2, 0], [0, 0, -1]] = [[5, 2, -2], [2, 4, 0], [-2, 0, 2]].\nSubtract 2A = [[4, 0, -2], [2, 4, 0], [0, 0, -2]]:\nB = [[5-4, 2-0, -2-(-2)], [2-2, 4-4, 0-0], [-2-0, 0-0, 2-(-2)]] = [[1, 2, 0], [0, 0, 0], [-2, 0, 4]].",
    topic_name: "Matrix Algebra & Transpose Equations",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 35,
    question_text: "Suppose AX = b, where A is a 3×3 matrix, b = (b₁, b₂, b₃)ᵀ and X = (x, y, z)ᵀ. Which one of the following is necessarily true about this system of linear equations?",
    option_a: "The system has a solution only when det(A) ≠ 0.",
    option_b: "Cramer’s rule is suitable to solve the system if two rows of A are identical.",
    option_c: "If b = 0, then X = (0, 0, 0)ᵀ is the only solution of the system.",
    option_d: "If det(A) ≠ 0 and the second column of A is a multiple of b, then x = 0.",
    options: [
      "The system has a solution only when det(A) ≠ 0.",
      "Cramer’s rule is suitable to solve the system if two rows of A are identical.",
      "If b = 0, then X = (0, 0, 0)ᵀ is the only solution of the system.",
      "If det(A) ≠ 0 and the second column of A is a multiple of b, then x = 0."
    ],
    correct_answer: "D",
    explanation: "By Cramer's rule, x = det(A_x) / det(A), where A_x replaces column 1 with vector b. If column 2 of A is a scalar multiple of b, then in A_x, column 1 and column 2 are linearly dependent, making det(A_x) = 0. Therefore x = 0 / det(A) = 0.",
    topic_name: "Cramer's Rule & System Properties",
    instruction_category: "Matrices and Linear Systems"
  },
  {
    question_number: 36,
    question_text: "Let A = [[0, α, β], [2, 2, 1], [3, 1, 2]], b = [6, 0, 0]ᵀ, and X = [x, y, z]ᵀ. If det(A) = 3, then what is the solution set of the system AX = b?",
    option_a: "{(0, 1/a, 5/b)ᵀ}",
    option_b: "{(6, -2, -8)ᵀ}",
    option_c: "{(-3, 1, 4)ᵀ}",
    option_d: "∅",
    options: [
      "{(0, 1/a, 5/b)ᵀ}",
      "{(6, -2, -8)ᵀ}",
      "{(-3, 1, 4)ᵀ}",
      "∅"
    ],
    correct_answer: "B",
    explanation: "Apply Cramer's Rule with det(A) = 3:\n- A_x = [[6, α, β], [0, 2, 1], [0, 1, 2]] ⇒ det(A_x) = 6(4 - 1) = 18 ⇒ x = 18/3 = 6.\n- A_y = [[0, 6, β], [2, 0, 1], [3, 0, 2]] ⇒ det(A_y) = -6(4 - 3) = -6 ⇒ y = -6/3 = -2.\n- A_z = [[0, α, 6], [2, 2, 0], [3, 1, 0]] ⇒ det(A_z) = 6(2 - 6) = -24 ⇒ z = -24/3 = -8.\nThus X = (6, -2, -8)ᵀ.",
    topic_name: "Solving Linear Systems via Cramer's Rule",
    instruction_category: "Matrices and Linear Systems"
  },
  {
    question_number: 37,
    question_text: "Consider the system of linear equations {x + 2y + 3z = 3, x - 2y + 4z = -1, 2x + y - z = 2}. Which one of the following is the correct augmented matrix of the given system?",
    option_a: "[[2, 1, -1, 3], [1, -2, 4, -1], [1, 2, 3, 2]]",
    option_b: "[[1, 3, 3], [1, -2, 4], [2, 1, 4], [3, -1, 2]]",
    option_c: "[[1, 2, 3, 2], [1, -2, 4, -1], [2, 1, -1, 3]]",
    option_d: "[[1, 2, 3, 3], [1, -2, 4, -1], [2, 1, -1, 2]]",
    options: [
      "[[2, 1, -1, 3], [1, -2, 4, -1], [1, 2, 3, 2]]",
      "[[1, 3, 3], [1, -2, 4], [2, 1, 4], [3, -1, 2]]",
      "[[1, 2, 3, 2], [1, -2, 4, -1], [2, 1, -1, 3]]",
      "[[1, 2, 3, 3], [1, -2, 4, -1], [2, 1, -1, 2]]"
    ],
    correct_answer: "D",
    explanation: "Row 1: [1, 2, 3 | 3]; Row 2: [1, -2, 4 | -1]; Row 3: [2, 1, -1 | 2]. This matches Option D exactly.",
    topic_name: "Augmented Matrices",
    instruction_category: "Matrices and Linear Systems"
  },
  {
    question_number: 38,
    question_text: "Which of the following graphs is the possible graph of the function f(x) = x⁻ⁿ, where n is an even positive integer?",
    option_a: "Hyperbola symmetric about origin (odd power)",
    option_b: "Single quadrant curve",
    option_c: "Curve located entirely above x-axis in Q1 and Q2 symmetric about y-axis",
    option_d: "Linear line through origin",
    options: [
      "Hyperbola symmetric about origin (odd power)",
      "Single quadrant curve",
      "Curve located entirely above x-axis in Q1 and Q2 symmetric about y-axis",
      "Linear line through origin"
    ],
    correct_answer: "C",
    explanation: "For even n (such as f(x) = 1/x²), f(-x) = (-x)⁻ⁿ = x⁻ⁿ = f(x) is an even function with f(x) > 0 for all x ≠ 0, having vertical asymptote x = 0 and horizontal asymptote y = 0 in quadrants I and II.",
    topic_name: "Power Functions & Graphs",
    instruction_category: "Functions"
  },
  {
    question_number: 39,
    question_text: "The perimeter of a triangle is 30 cm. The shortest side is 4 cm shorter than the longest side. The longest side is 6 cm less than the sum of the other two sides. Which one of the following is the length of the shortest side?",
    option_a: "6 cm",
    option_b: "10 cm",
    option_c: "8 cm",
    option_d: "12 cm",
    options: ["6 cm", "10 cm", "8 cm", "12 cm"],
    correct_answer: "C",
    explanation: "Let sides be a ≤ b ≤ c with perimeter a + b + c = 30.\n- Shortest side: a = c - 4 ⇒ c = a + 4\n- Longest side: c = (a + b) - 6 ⇒ a + b = c + 6.\nSubstitute into perimeter: (c + 6) + c = 30 ⇒ 2c = 24 ⇒ c = 12 cm.\nThen shortest side a = 12 - 4 = 8 cm (and middle side b = 30 - 12 - 8 = 10 cm).",
    topic_name: "Word Problems & Linear Systems",
    instruction_category: "Algebra"
  },
  {
    question_number: 40,
    question_text: "Which of the following is a power function?",
    option_a: "f(x) = √2 x^(1/2)",
    option_b: "f(x) = xˣ",
    option_c: "f(x) = 5x² + 1",
    option_d: "f(x) = 2ˣ",
    options: [
      "f(x) = √2 x^(1/2)",
      "f(x) = xˣ",
      "f(x) = 5x² + 1",
      "f(x) = 2ˣ"
    ],
    correct_answer: "A",
    explanation: "A power function has the form f(x) = k * xʳ, where k and r are real constants. Option A is in this exact form with k = √2 and r = 1/2.",
    topic_name: "Power Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 41,
    question_text: "If A = [[1, -1], [2, -1]], B = [[a, 1], [b, -1]] and (A + B)² = A² + B², then find the values of a and b.",
    option_a: "a = 2, b = -3",
    option_b: "a = 1, b = 4",
    option_c: "a = -2, b = 3",
    option_d: "a = 4, b = 1",
    options: ["a = 2, b = -3", "a = 1, b = 4", "a = -2, b = 3", "a = 4, b = 1"],
    correct_answer: "B",
    explanation: "(A + B)² = A² + AB + BA + B² = A² + B² ⇒ AB + BA = 0 ⇒ AB = -BA.\nAB = [[a - b, 2], [2a - b, 3]].\nBA = [[a + 2, -a - 1], [b - 2, -b + 1]] ⇒ -BA = [[-a - 2, a + 1], [-b + 2, b - 1]].\nEquating top-right entry: 2 = a + 1 ⇒ a = 1.\nEquating bottom-right entry: 3 = b - 1 ⇒ b = 4.",
    topic_name: "Matrix Multiplication & Commutativity",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 42,
    question_text: "If f: ℝ → ℝ, f(x) = x² + 1, then f⁻¹(-2) ∪ f⁻¹(17) is equal to:",
    option_a: "{4}",
    option_b: "{1, 4}",
    option_c: "{±1, ±4}",
    option_d: "{±4}",
    options: ["{4}", "{1, 4}", "{±1, ±4}", "{±4}"],
    correct_answer: "D",
    explanation: "- f⁻¹(-2): x² + 1 = -2 ⇒ x² = -3 has no real solutions (∅).\n- f⁻¹(17): x² + 1 = 17 ⇒ x² = 16 ⇒ x = ±4.\nUnion: ∅ ∪ {4, -4} = {±4}.",
    topic_name: "Pre-image of Sets under Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 43,
    question_text: "If A and B are square matrices of size n×n such that A² - B² = (A - B)(A + B), then which one of the following is always true?",
    option_a: "AB = BA",
    option_b: "either A or B is a zero matrix",
    option_c: "A = B",
    option_d: "either A or B is an identity matrix",
    options: [
      "AB = BA",
      "either A or B is a zero matrix",
      "A = B",
      "either A or B is an identity matrix"
    ],
    correct_answer: "A",
    explanation: "Expanding (A - B)(A + B) = A² + AB - BA - B².\nSetting A² - B² = A² + AB - BA - B² ⇒ AB - BA = 0 ⇒ AB = BA (matrices A and B commute).",
    topic_name: "Matrix Commutativity",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 44,
    question_text: "If det([[1, 4, 20], [1, -2, 5], [1, 2x, 5x²]]) = 0, then which one of the following is the set of values of x?",
    option_a: "{1, 2}",
    option_b: "{-1, -2}",
    option_c: "{-1, 2}",
    option_d: "{1, -2}",
    options: ["{1, 2}", "{-1, -2}", "{-1, 2}", "{1, -2}"],
    correct_answer: "C",
    explanation: "Perform row operations R2 - R1 and R3 - R1:\n| 1   4     20 |\n| 0  -6    -15 |\n| 0 2x-4 5x²-20 |\nDeterminant = -6(5x² - 20) - (-15)(2x - 4) = -30x² + 120 + 30x - 60 = -30x² + 30x + 60 = 0.\nDivide by -30: x² - x - 2 = 0 ⇒ (x - 2)(x + 1) = 0 ⇒ x ∈ {-1, 2}.",
    topic_name: "Determinant Equations",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 45,
    question_text: "If f(x) = {1 if x > 0; 0 if x = 0; -1 if x < 0}, then the function f is:",
    option_a: "an absolute value function.",
    option_b: "a signum function.",
    option_c: "the greatest integer function.",
    option_d: "a constant function.",
    options: [
      "an absolute value function.",
      "a signum function.",
      "the greatest integer function.",
      "a constant function."
    ],
    correct_answer: "B",
    explanation: "The piecewise function returning +1 for positive numbers, -1 for negative numbers, and 0 for zero is the standard definition of the Signum function sgn(x).",
    topic_name: "Signum Function Definition",
    instruction_category: "Functions"
  },
  {
    question_number: 46,
    question_text: "What is the solution of the system of equations {1/a + 4/b - 3/c = 4, -3/a + 2/b + 2/c = -3, 2/a - 3/b + 1/c = 1}?",
    option_a: "{(31/21, 2/3, 19/21)}",
    option_b: "{(21/31, 2/3, 21)}",
    option_c: "{(21/31, 3/2, 21/19)}",
    option_d: "{(21/51, 14/51, 19/51)}",
    options: [
      "{(31/21, 2/3, 19/21)}",
      "{(21/31, 2/3, 21)}",
      "{(21/31, 3/2, 21/19)}",
      "{(21/51, 14/51, 19/51)}"
    ],
    correct_answer: "C",
    explanation: "Let u = 1/a, v = 1/b, w = 1/c.\n1) u + 4v - 3w = 4\n2) -3u + 2v + 2w = -3\n3) 2u - 3v + w = 1\nSolving this linear system yields u = 31/21, v = 2/3, w = 19/21.\nTaking reciprocals gives a = 21/31, b = 3/2, c = 21/19.",
    topic_name: "Non-Linear Systems Transformable to Linear",
    instruction_category: "Algebra"
  },
  {
    question_number: 47,
    question_text: "If [[2x + y, 4x], [5x - 7, 4x]] = [[7, 7y - 13], [y, x + 6]], then which of the following is the value of x + y?",
    option_a: "2",
    option_b: "4",
    option_c: "3",
    option_d: "5",
    options: ["2", "4", "3", "5"],
    correct_answer: "D",
    explanation: "Equating corresponding matrix entries:\n- Bottom-right: 4x = x + 6 ⇒ 3x = 6 ⇒ x = 2.\n- Top-left: 2x + y = 7 ⇒ 2(2) + y = 7 ⇒ 4 + y = 7 ⇒ y = 3.\nCheck bottom-left: 5(2) - 7 = 3 = y (consistent).\nTherefore, x + y = 2 + 3 = 5.",
    topic_name: "Matrix Equality",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 48,
    question_text: "Let A be a square matrix. Then which of the following is correct about A?",
    option_a: "If A has a row consists entirely of ones, then its determinant is one.",
    option_b: "|A| = |Aᵀ|",
    option_c: "If A has identical rows, then its determinant is one.",
    option_d: "|A Aᵀ| = I",
    options: [
      "If A has a row consists entirely of ones, then its determinant is one.",
      "|A| = |Aᵀ|",
      "If A has identical rows, then its determinant is one.",
      "|A Aᵀ| = I"
    ],
    correct_answer: "B",
    explanation: "A fundamental property of matrix determinants is that transposition preserves the determinant: det(A) = det(Aᵀ).",
    topic_name: "Properties of Determinants",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 49,
    question_text: "Which of the following statements is NOT true?",
    option_a: "Not every square matrix is non-singular.",
    option_b: "If B is an inverse of an invertible matrix A, then (Bᵀ)⁻¹ = Aᵀ.",
    option_c: "If A is any square matrix, then its inverse A⁻¹ is given by A⁻¹ = (1/|A|) adj(A).",
    option_d: "If a matrix is non-singular, then its inverse is necessarily unique.",
    options: [
      "Not every square matrix is non-singular.",
      "If B is an inverse of an invertible matrix A, then (Bᵀ)⁻¹ = Aᵀ.",
      "If A is any square matrix, then its inverse A⁻¹ is given by A⁻¹ = (1/|A|) adj(A).",
      "If a matrix is non-singular, then its inverse is necessarily unique."
    ],
    correct_answer: "C",
    explanation: "Option C is false because a square matrix possesses an inverse ONLY IF it is invertible (|A| ≠ 0); singular matrices with |A| = 0 do not have an inverse.",
    topic_name: "Matrix Invertibility Theorems",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 50,
    question_text: "If ⌊x⌋² - 5⌊x⌋ + 6 = 0, where ⌊x⌋ represents the greatest integer function, then which of the following is the value set of x?",
    option_a: "x ∈ [3, 4]",
    option_b: "x ∈ (2, 3]",
    option_c: "x ∈ [2, 4)",
    option_d: "x ∈ [2, 3]",
    options: ["x ∈ [3, 4]", "x ∈ (2, 3]", "x ∈ [2, 4)", "x ∈ [2, 3]"],
    correct_answer: "C",
    explanation: "Factor quadratic in ⌊x⌋: (⌊x⌋ - 2)(⌊x⌋ - 3) = 0 ⇒ ⌊x⌋ = 2 or ⌊x⌋ = 3.\n- If ⌊x⌋ = 2 ⇒ x ∈ [2, 3)\n- If ⌊x⌋ = 3 ⇒ x ∈ [3, 4)\nUnion: [2, 3) ∪ [3, 4) = [2, 4).",
    topic_name: "Greatest Integer Equations",
    instruction_category: "Functions"
  },
  {
    question_number: 51,
    question_text: "If f(x) = √(x + 2) / (x + 2) and g(x) = 1/x - 2, then f(g(x)) is equal to:",
    option_a: "√x",
    option_b: "√x / x",
    option_c: "√(x + 2)",
    option_d: "√(x - 2)",
    options: ["√x", "√x / x", "√(x + 2)", "√(x - 2)"],
    correct_answer: "A",
    explanation: "f(u) = √u / u = 1 / √u for u > 0. Here u = g(x) + 2 = (1/x - 2) + 2 = 1/x.\nf(g(x)) = 1 / √(1/x) = √x.",
    topic_name: "Function Composition & Simplification",
    instruction_category: "Functions"
  },
  {
    question_number: 52,
    question_text: "Sofia drove her car 45 km and she ran out of gas and had to walk 2 km to a gas station. Her speed of driving is 15 times her speed of walking. If the total time for the drive and walk was 3/2 hours, then find Sofia’s driving speed.",
    option_a: "75 km/hr",
    option_b: "30 km/hr",
    option_c: "15 km/hr",
    option_d: "50 km/hr",
    options: ["75 km/hr", "30 km/hr", "15 km/hr", "50 km/hr"],
    correct_answer: "D",
    explanation: "Let walking speed = v km/h. Driving speed = 15v km/h.\nTotal time = t_drive + t_walk = 45/(15v) + 2/v = 3/v + 2/v = 5/v = 3/2.\n5/v = 3/2 ⇒ 3v = 10 ⇒ v = 10/3 km/hr.\nDriving speed = 15v = 15 * (10/3) = 50 km/hr.",
    topic_name: "Rate, Distance, and Time Applications",
    instruction_category: "Algebra Applications"
  },
  {
    question_number: 53,
    question_text: "Given two matrices A = (a_ij)ₘₓₙ and B = (b_ij)ₘₓₙ, which of the following is NOT true about matrix transposes?",
    option_a: "(A + B)ᵀ = Aᵀ + Bᵀ",
    option_b: "(AB)ᵀ = AᵀBᵀ, provided that AB is defined",
    option_c: "(rB)ᵀ = rBᵀ, if r is any scalar",
    option_d: "(Aᵀ)ᵀ = A",
    options: [
      "(A + B)ᵀ = Aᵀ + Bᵀ",
      "(AB)ᵀ = AᵀBᵀ, provided that AB is defined",
      "(rB)ᵀ = rBᵀ, if r is any scalar",
      "(Aᵀ)ᵀ = A"
    ],
    correct_answer: "B",
    explanation: "The transpose of a matrix product reverses order: (AB)ᵀ = BᵀAᵀ. Hence Option B is false.",
    topic_name: "Properties of Matrix Transposition",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 54,
    question_text: "Which one of the following is the solution set of (2x² + x - 1) / (x² - 4x + 4) ≥ 0?",
    option_a: "(-∞, -1] ∪ [1/2, 2) ∪ (2, ∞)",
    option_b: "[-1, 1/2]",
    option_c: "(-∞, -1] ∪ [1/2, 2] ∪ [2, ∞)",
    option_d: "(-∞, ∞)",
    options: [
      "(-∞, -1] ∪ [1/2, 2) ∪ (2, ∞)",
      "[-1, 1/2]",
      "(-∞, -1] ∪ [1/2, 2] ∪ [2, ∞)",
      "(-∞, ∞)"
    ],
    correct_answer: "A",
    explanation: "Factor: ((2x - 1)(x + 1)) / (x - 2)² ≥ 0.\nDenominator (x - 2)² > 0 for all x ≠ 2. The sign depends on (2x - 1)(x + 1) ≥ 0, which holds for x ≤ -1 or x ≥ 1/2.\nExcluding the vertical asymptote x = 2 gives: (-∞, -1] ∪ [1/2, 2) ∪ (2, ∞).",
    topic_name: "Rational Inequalities (Sign Charts)",
    instruction_category: "Rational Functions"
  },
  {
    question_number: 55,
    question_text: "If f = {(-4, 12), (-2, 4), (2, 0), (5, -6)} and g = {(2, 5), (0, 1), (4, -7), (5, -9)}, then what is the value of g(f(2))?",
    option_a: "-9",
    option_b: "-6",
    option_c: "5",
    option_d: "1",
    options: ["-9", "-6", "5", "1"],
    correct_answer: "D",
    explanation: "From f: (2, 0) means f(2) = 0.\nFrom g: (0, 1) means g(0) = 1.\nTherefore, g(f(2)) = g(0) = 1.",
    topic_name: "Discrete Composite Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 56,
    question_text: "Which of the following functions is an onto (surjective) function?",
    option_a: "k: ℝ → ℝ, k(x) = 5x - 7",
    option_b: "g: ℝ → ℝ, g(x) = |x - 1|",
    option_c: "h: ℝ → ℝ, h(x) = 3ˣ",
    option_d: "f: [0, ∞) → ℝ, f(x) = 3 - √x",
    options: [
      "k: ℝ → ℝ, k(x) = 5x - 7",
      "g: ℝ → ℝ, g(x) = |x - 1|",
      "h: ℝ → ℝ, h(x) = 3ˣ",
      "f: [0, ∞) → ℝ, f(x) = 3 - √x"
    ],
    correct_answer: "A",
    explanation: "A linear function k(x) = 5x - 7 with non-zero slope has range (-∞, ∞) = ℝ, matching its codomain ℝ, hence it is surjective (onto). Absolute value (range [0, ∞)), exponential (range (0, ∞)), and root functions (range (-∞, 3]) do not cover all of ℝ.",
    topic_name: "Surjective (Onto) Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 57,
    question_text: "Let f(x) = x² + 2x and g(x) = 3x - 5, then which of the following is equal to (f ∘ g)(3)?",
    option_a: "40",
    option_b: "20",
    option_c: "16",
    option_d: "24",
    options: ["40", "20", "16", "24"],
    correct_answer: "D",
    explanation: "g(3) = 3(3) - 5 = 9 - 5 = 4.\nf(g(3)) = f(4) = 4² + 2(4) = 16 + 8 = 24.",
    topic_name: "Composite Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 58,
    question_text: "What is the solution set of [1 / (1 + 1/x)] - [1 / (1 - 1/x)] = (x + 1/x) / (x - 1/x)?",
    option_a: "{1}",
    option_b: "{-1}",
    option_c: "∅",
    option_d: "{-1, 1}",
    options: ["{1}", "{-1}", "∅", "{-1, 1}"],
    correct_answer: "C",
    explanation: "Simplify denominators:\n1/((x+1)/x) - 1/((x-1)/x) = ((x²+1)/x) / ((x²-1)/x)\nx/(x+1) - x/(x-1) = (x²+1)/(x²-1)\n(x(x-1) - x(x+1)) / (x²-1) = -2x / (x²-1) = (x²+1)/(x²-1)\n-2x = x² + 1 ⇒ x² + 2x + 1 = 0 ⇒ (x + 1)² = 0 ⇒ x = -1.\nHowever, x = -1 makes the original denominator (1 + 1/x = 0) undefined (extraneous solution). Thus, solution set = ∅.",
    topic_name: "Complex Rational Equations",
    instruction_category: "Algebra"
  },
  {
    question_number: 59,
    question_text: "What is the domain of f(x) = 5x^(2/3)?",
    option_a: "ℝ \\ {0}",
    option_b: "{x : x ≥ 0}",
    option_c: "ℝ",
    option_d: "{x : x ≤ 0}",
    options: ["ℝ \\ {0}", "{x : x ≥ 0}", "ℝ", "{x : x ≤ 0}"],
    correct_answer: "C",
    explanation: "f(x) = 5 ∛(x²). The cube root (odd root) is well-defined for all real numbers (positive, negative, and zero), so the domain is ℝ.",
    topic_name: "Domain of Radical/Power Functions",
    instruction_category: "Functions"
  },
  {
    question_number: 60,
    question_text: "If x < 0, then the simplest form of f(x) = (x - |x|) / x is equal to:",
    option_a: "2x",
    option_b: "2",
    option_c: "-2",
    option_d: "0",
    options: ["2x", "2", "-2", "0"],
    correct_answer: "B",
    explanation: "For x < 0, by definition |x| = -x.\nf(x) = (x - (-x)) / x = (x + x) / x = 2x / x = 2.",
    topic_name: "Absolute Value Simplification",
    instruction_category: "Functions"
  },
  {
    question_number: 61,
    question_text: "If f: ℝ → ℝ is defined by f(x) = x⁴ + 2, then which of the following is the value of f⁻¹(83) and f⁻¹(-2) respectively?",
    option_a: "{9, -9}, ∅",
    option_b: "{3, -3}, ∅",
    option_c: "∅, {3, -3}",
    option_d: "{4, -4}, {2, -2}",
    options: [
      "{9, -9}, ∅",
      "{3, -3}, ∅",
      "∅, {3, -3}",
      "{4, -4}, {2, -2}"
    ],
    correct_answer: "B",
    explanation: "- For f⁻¹(83): x⁴ + 2 = 83 ⇒ x⁴ = 81 ⇒ x = ±3 ⇒ {3, -3}.\n- For f⁻¹(-2): x⁴ + 2 = -2 ⇒ x⁴ = -4, which has no real solutions (∅).",
    topic_name: "Pre-image Sets of Polynomials",
    instruction_category: "Functions"
  },
  {
    question_number: 62,
    question_text: "Let A = [[1, 2, 3], [-2, 0, 1], [4, 5, 6]] and B = [[3, 1, 4], [4, 0, -1], [5, 2, -2]]. Then find (2A + B)ᵀ.",
    option_a: "[[5, 5, 10], [0, 0, 1], [13, 12, 10]]",
    option_b: "[[3, 2, 9], [3, 0, 7], [7, 0, 4]]",
    option_c: "[[3, 3, 7], [2, 0, 0], [9, 7, 4]]",
    option_d: "[[5, 0, 13], [5, 0, 12], [10, 1, 10]]",
    options: [
      "[[5, 5, 10], [0, 0, 1], [13, 12, 10]]",
      "[[3, 2, 9], [3, 0, 7], [7, 0, 4]]",
      "[[3, 3, 7], [2, 0, 0], [9, 7, 4]]",
      "[[5, 0, 13], [5, 0, 12], [10, 1, 10]]"
    ],
    correct_answer: "D",
    explanation: "Compute 2A + B:\n[[2(1)+3, 2(2)+1, 2(3)+4], [2(-2)+4, 2(0)+0, 2(1)-1], [2(4)+5, 2(5)+2, 2(6)-2]]\n= [[5, 5, 10], [0, 0, 1], [13, 12, 10]].\nTransposing gives (2A + B)ᵀ = [[5, 0, 13], [5, 0, 12], [10, 1, 10]].",
    topic_name: "Matrix Linear Combinations and Transpose",
    instruction_category: "Matrices and Determinants"
  },
  {
    question_number: 63,
    question_text: "Let f: ℝ → ℝ and g: ℝ → ℝ be defined by f(x) = 2x² + 3x + 5 and g(x) = 4x - 5, then which one of the following is equal to (f ∘ g)(0)?",
    option_a: "50",
    option_b: "15",
    option_c: "40",
    option_d: "70",
    options: ["50", "15", "40", "70"],
    correct_answer: "C",
    explanation: "g(0) = 4(0) - 5 = -5.\nf(g(0)) = f(-5) = 2(-5)² + 3(-5) + 5 = 2(25) - 15 + 5 = 50 - 15 + 5 = 40.",
    topic_name: "Function Composition",
    instruction_category: "Functions"
  },
  {
    question_number: 64,
    question_text: "If f(x) = ⌊x⌋ and g(x) = |x|, then find (f ∘ g)(1/3) - (g ∘ f)(-1/3).",
    option_a: "-1",
    option_b: "0",
    option_c: "1",
    option_d: "3",
    options: ["-1", "0", "1", "3"],
    correct_answer: "A",
    explanation: "- (f ∘ g)(1/3) = f(|1/3|) = f(1/3) = ⌊1/3⌋ = 0.\n- (g ∘ f)(-1/3) = g(⌊-1/3⌋) = g(-1) = |-1| = 1.\nDifference = 0 - 1 = -1.",
    topic_name: "Floor and Absolute Value Compositions",
    instruction_category: "Functions"
  },
  {
    question_number: 65,
    question_text: "If A is a matrix of order 2×3 and B is a matrix of order 3×2, then what is the order of matrix AB?",
    option_a: "2×3",
    option_b: "3×3",
    option_c: "3×2",
    option_d: "2×2",
    options: ["2×3", "3×3", "3×2", "2×2"],
    correct_answer: "D",
    explanation: "Multiplying a (m × k) matrix by a (k × n) matrix yields an (m × n) matrix. For A (2×3) and B (3×2), the inner dimensions match (3) and the product AB has dimension 2×2.",
    topic_name: "Matrix Dimensions and Multiplication",
    instruction_category: "Matrices and Determinants"
  }
];

module.exports = questions;
