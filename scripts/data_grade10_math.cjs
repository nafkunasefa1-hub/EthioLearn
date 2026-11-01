/**
 * Grade 10 Mathematics Final Exam for Boarding and Non-Boarding (Special) Schools, February 2016/2024
 * 60 Questions extracted directly from the official examination paper with rigorous step-by-step mathematical solutions and explanations.
 */

const questions = [
  {
    question_number: 1,
    question_text: "If p(x) = 6x³ + 5x² - 3x + 2, then find the value of p(-1).",
    option_a: "4",
    option_b: "-6",
    option_c: "-4",
    option_d: "10",
    options: ["4", "-6", "-4", "10"],
    correct_answer: "A",
    explanation: "Substitute x = -1 into the polynomial expression:\np(-1) = 6(-1)³ + 5(-1)² - 3(-1) + 2\n= 6(-1) + 5(1) + 3 + 2\n= -6 + 5 + 3 + 2 = 4.",
    topic_name: "Polynomial Evaluation",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 2,
    question_text: "If f(x) = x³ - 2bx² + 16 is divisible by x + 2, then which one of the following is the value of b?",
    option_a: "1",
    option_b: "-2",
    option_c: "-1",
    option_d: "2",
    options: ["1", "-2", "-1", "2"],
    correct_answer: "A",
    explanation: "By the Remainder/Factor Theorem, if f(x) is divisible by (x + 2), then f(-2) = 0:\nf(-2) = (-2)³ - 2b(-2)² + 16 = 0\n-8 - 2b(4) + 16 = 0\n-8 - 8b + 16 = 0\n8 - 8b = 0 => 8b = 8 => b = 1.",
    topic_name: "Factor Theorem & Polynomial Division",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 3,
    question_text: "Which one of the following is the degree of the polynomial function f(x) = (3x - 5)⁸(2x + 1)⁴?",
    option_a: "8",
    option_b: "32",
    option_c: "12",
    option_d: "4",
    options: ["8", "32", "12", "4"],
    correct_answer: "C",
    explanation: "The degree of a product of polynomials is the sum of the degrees of the individual factors. Degree of (3x - 5)⁸ is 8, and degree of (2x + 1)⁴ is 4. Total degree = 8 + 4 = 12.",
    topic_name: "Degree of Polynomial Functions",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 4,
    question_text: "Which one of the following is the remainder when f(x) = 3x⁴ - 2x³ - 5x² + 6 is divided by x² - 1?",
    option_a: "2",
    option_b: "6",
    option_c: "2x - 4",
    option_d: "-2x + 4",
    options: ["2", "6", "2x - 4", "-2x + 4"],
    correct_answer: "D",
    explanation: "Using polynomial division or substitution where x² = 1:\nf(x) = 3(x²)² - 2x(x²) - 5(x²) + 6\nSubstituting x² = 1: R(x) = 3(1)² - 2x(1) - 5(1) + 6 = 3 - 2x - 5 + 6 = -2x + 4.",
    topic_name: "Polynomial Division & Remainder",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 5,
    question_text: "Which one of the following is the simplified form of (81/16)^(-3/4) * [(25/4)^(-3/2) ÷ (5/2)^(-3)]?",
    option_a: "27/8",
    option_b: "8/27",
    option_c: "1/2",
    option_d: "8/9",
    options: ["27/8", "8/27", "1/2", "8/9"],
    correct_answer: "B",
    explanation: "Step 1: (81/16)^(-3/4) = ((3/2)⁴)^(-3/4) = (3/2)⁻³ = (2/3)³ = 8/27.\nStep 2: (25/4)^(-3/2) = ((5/2)²)^(-3/2) = (5/2)⁻³ = 8/125.\nStep 3: (5/2)⁻³ = 8/125.\nStep 4: (8/125) ÷ (8/125) = 1.\nStep 5: Total expression = (8/27) * 1 = 8/27.",
    topic_name: "Exponents & Radical Simplification",
    instruction_category: "Exponents & Radicals"
  },
  {
    question_number: 6,
    question_text: "If log₃ y = x and log₂ z = x, then 72ˣ is equal to:",
    option_a: "y z³",
    option_b: "y² z³",
    option_c: "y³ z²",
    option_d: "y³ z³",
    options: ["y z³", "y² z³", "y³ z²", "y³ z³"],
    correct_answer: "B",
    explanation: "From log₃ y = x, we have 3ˣ = y. From log₂ z = x, we have 2ˣ = z.\nPrime factorize 72 = 9 * 8 = 3² * 2³.\nTherefore, 72ˣ = (3² * 2³)ˣ = (3ˣ)² * (2ˣ)³ = y² z³.",
    topic_name: "Logarithmic & Exponential Properties",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 7,
    question_text: "What is the domain of the function f(x) = log(1 - x) + √(x² - 1)?",
    option_a: "(-∞, -1]",
    option_b: "[-1, 1]",
    option_c: "(1, ∞)",
    option_d: "(0, 1)",
    options: ["(-∞, -1]", "[-1, 1]", "(1, ∞)", "(0, 1)"],
    correct_answer: "A",
    explanation: "Condition 1 (logarithm argument): 1 - x > 0 => x < 1.\nCondition 2 (square root radicand): x² - 1 ≥ 0 => x ≤ -1 or x ≥ 1.\nTaking the intersection of (-∞, 1) and ((-∞, -1] ∪ [1, ∞)) gives x ∈ (-∞, -1].",
    topic_name: "Domain of Composite Functions",
    instruction_category: "Functions & Domains"
  },
  {
    question_number: 8,
    question_text: "If p(x) is a polynomial of degree m, then which one of the following is always true?",
    option_a: "p(x) is an even function.",
    option_b: "p(x) has m - 1 turning points.",
    option_c: "Its graph is down on the left and up on the right.",
    option_d: "p(x) has at most m zeros.",
    options: [
      "p(x) is an even function.",
      "p(x) has m - 1 turning points.",
      "Its graph is down on the left and up on the right.",
      "p(x) has at most m zeros."
    ],
    correct_answer: "D",
    explanation: "By the Fundamental Theorem of Algebra, a polynomial of degree m has at most m real zeros (roots). Turning points can be fewer than m - 1, parity depends on powers, and end behavior depends on the sign of the leading coefficient.",
    topic_name: "Properties of Polynomial Functions",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 9,
    question_text: "If the zeros of polynomial function p(x) are -2 and 0, then the zeros of p(x² - 5x + 4) is equal to____.",
    option_a: "1, 2 and 3",
    option_b: "2, 3 and 4",
    option_c: "-2, 0, 1 and 4",
    option_d: "1, 2, 3 and 4",
    options: ["1, 2 and 3", "2, 3 and 4", "-2, 0, 1 and 4", "1, 2, 3 and 4"],
    correct_answer: "D",
    explanation: "For p(u) = 0, we must have u = 0 or u = -2.\nCase 1: x² - 5x + 4 = 0 => (x - 1)(x - 4) = 0 => x = 1, x = 4.\nCase 2: x² - 5x + 4 = -2 => x² - 5x + 6 = 0 => (x - 2)(x - 3) = 0 => x = 2, x = 3.\nTherefore, the set of zeros is {1, 2, 3, 4}.",
    topic_name: "Zeros of Composite Polynomial Functions",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 10,
    question_text: "If (a/b)^(x - 1) = (b/a)^(x - 3), then which of the following is the value of x?",
    option_a: "1/2",
    option_b: "1",
    option_c: "2",
    option_d: "7/2",
    options: ["1/2", "1", "2", "7/2"],
    correct_answer: "C",
    explanation: "Rewrite (b/a)^(x - 3) as ((a/b)⁻¹)^(x - 3) = (a/b)^(-(x - 3)) = (a/b)^(3 - x).\nEquating the exponents:\nx - 1 = 3 - x\n2x = 4 => x = 2.",
    topic_name: "Exponential Equations",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 11,
    question_text: "If log₂ 7 = x, then x is:",
    option_a: "an irrational number such that 2 < x < 3.",
    option_b: "a rational number such that 0 < x < 2.",
    option_c: "a rational number such that 2 < x < 3.",
    option_d: "a prime number of the form 7x + 2",
    options: [
      "an irrational number such that 2 < x < 3.",
      "a rational number such that 0 < x < 2.",
      "a rational number such that 2 < x < 3.",
      "a prime number of the form 7x + 2"
    ],
    correct_answer: "A",
    explanation: "Since 2² = 4 < 7 < 8 = 2³, taking log base 2 gives 2 < log₂ 7 < 3. Because 7 is not a rational power of 2, log₂ 7 cannot be expressed as a ratio of integers and is therefore irrational.",
    topic_name: "Properties of Logarithmic Values",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 12,
    question_text: "Which of the following could be the graph of a polynomial function?",
    option_a: "A graph with sharp vertical asymptotes",
    option_b: "A graph with sharp corners and cusps",
    option_c: "A smooth, continuous wave-like curve with no breaks or sharp corners",
    option_d: "A discontinuous graph with jumps",
    options: [
      "A graph with sharp vertical asymptotes",
      "A graph with sharp corners and cusps",
      "A smooth, continuous wave-like curve with no breaks or sharp corners",
      "A discontinuous graph with jumps"
    ],
    correct_answer: "C",
    explanation: "The graph of every polynomial function is smooth and continuous everywhere on the real number line, possessing no breaks, holes, vertical asymptotes, or sharp corners.",
    topic_name: "Graphs of Polynomial Functions",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 13,
    question_text: "Which of the following is NOT a polynomial?",
    option_a: "P(x) = |x - 2| + 4",
    option_b: "P(x) = (x⁵⁰/3) + √17 x⁵ + π",
    option_c: "P(x) = x³ - 5x² + x - 5",
    option_d: "P(x) = (-3x)(1 - 2x/5)",
    options: [
      "P(x) = |x - 2| + 4",
      "P(x) = (x⁵⁰/3) + √17 x⁵ + π",
      "P(x) = x³ - 5x² + x - 5",
      "P(x) = (-3x)(1 - 2x/5)"
    ],
    correct_answer: "A",
    explanation: "A polynomial contains only non-negative integer powers of x and real coefficients. The absolute value function |x - 2| involves piecewise definitions and a sharp corner, making it non-polynomial.",
    topic_name: "Definition of Polynomial Functions",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 14,
    question_text: "If -1 and 1 are two real roots of the polynomial function f(x) = ax³ + bx² + cx + d and the point (0, 3) is the y-intercept of the graph of f, then which of the following can be the possible value of b?",
    option_a: "4",
    option_b: "-3",
    option_c: "-1",
    option_d: "2",
    options: ["4", "-3", "-1", "2"],
    correct_answer: "B",
    explanation: "From y-intercept (0, 3): f(0) = d = 3.\nSince 1 and -1 are roots:\nf(1) = a(1)³ + b(1)² + c(1) + 3 = 0 => a + b + c = -3\nf(-1) = a(-1)³ + b(-1)² + c(-1) + 3 = 0 => -a + b - c = -3\nAdding both equations: (a + b + c) + (-a + b - c) = -3 + (-3) => 2b = -6 => b = -3.",
    topic_name: "Roots & Coefficients of Polynomials",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 15,
    question_text: "Let a and b be non-zero real numbers, and m and n be positive integers. Which of the following is true?",
    option_a: "(aⁿ)ᵐ = aⁿ⁺ᵐ",
    option_b: "aᵐ · a⁻ⁿ = a⁻ᵐⁿ",
    option_c: "aⁿ / a⁻ᵐ = aⁿ⁺ᵐ",
    option_d: "(aⁿ + bⁿ) = aⁿ + bⁿ",
    options: [
      "(aⁿ)ᵐ = aⁿ⁺ᵐ",
      "aᵐ · a⁻ⁿ = a⁻ᵐⁿ",
      "aⁿ / a⁻ᵐ = aⁿ⁺ᵐ",
      "(aⁿ + bⁿ) = aⁿ + bⁿ"
    ],
    correct_answer: "C",
    explanation: "By law of exponents for quotients: aⁿ / a⁻ᵐ = aⁿ⁻⁽⁻ᵐ⁾ = aⁿ⁺ᵐ.",
    topic_name: "Laws of Exponents",
    instruction_category: "Exponents & Radicals"
  },
  {
    question_number: 16,
    question_text: "If f(x) and g(x) are n and m degree polynomial functions respectively and h(x) is the product of f(x) and g(x), then which one of the following is NOT true about h(x)?",
    option_a: "It has n + m degree.",
    option_b: "It has at most n + m roots.",
    option_c: "It has at most n + m - 1 turning points.",
    option_d: "It has at most n + m y-intercepts.",
    options: [
      "It has n + m degree.",
      "It has at most n + m roots.",
      "It has at most n + m - 1 turning points.",
      "It has at most n + m y-intercepts."
    ],
    correct_answer: "D",
    explanation: "Every single-variable function has at most ONE y-intercept (at x = 0), never n + m y-intercepts.",
    topic_name: "Properties of Polynomial Products",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 17,
    question_text: "Which one of the following is NOT true about the graph of the polynomial function f(x) = 2x⁵ - 7x³ + 2x - 1?",
    option_a: "As we move far from the origin, it rises upward to the left and falls down to the right.",
    option_b: "It is a smooth and continuous curve.",
    option_c: "It crosses y-axis at (0, -1).",
    option_d: "It has at most 4 turning points and intersects the x-axis at most 5 times.",
    options: [
      "As we move far from the origin, it rises upward to the left and falls down to the right.",
      "It is a smooth and continuous curve.",
      "It crosses y-axis at (0, -1).",
      "It has at most 4 turning points and intersects the x-axis at most 5 times."
    ],
    correct_answer: "A",
    explanation: "The leading term is 2x⁵ (odd degree 5, positive leading coefficient a_n = 2 > 0). The end behavior for odd degree with positive coefficient is: falls to the left (x -> -∞, f(x) -> -∞) and rises to the right (x -> ∞, f(x) -> ∞). Option A asserts the exact opposite, so it is FALSE.",
    topic_name: "End Behavior of Polynomial Graphs",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 18,
    question_text: "The solution set of the equation x⁶ + x⁵ - 9x⁴ - 9x³ = 0 is:",
    option_a: "{-3, 0, 3}",
    option_b: "{-3, 0, 1, 3}",
    option_c: "{-1, 0, 3}",
    option_d: "{-3, -1, 0, 3}",
    options: ["{-3, 0, 3}", "{-3, 0, 1, 3}", "{-1, 0, 3}", "{-3, -1, 0, 3}"],
    correct_answer: "D",
    explanation: "Factor out x³:\nx³(x³ + x² - 9x - 9) = 0\nFactor by grouping in the parentheses:\nx³[x²(x + 1) - 9(x + 1)] = 0\nx³(x + 1)(x² - 9) = 0\nx³(x + 1)(x - 3)(x + 3) = 0\nSetting each factor to zero gives x = 0, x = -1, x = 3, and x = -3. Solution set = {-3, -1, 0, 3}.",
    topic_name: "Solving Higher-Degree Polynomial Equations",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 19,
    question_text: "The expression 4 log a - (1/2) log b + log c is equivalent to:",
    option_a: "log (a⁴ √b / c)",
    option_b: "log (a⁴ c / √b)",
    option_c: "log (4ac / √b)",
    option_d: "log (8ac / b)",
    options: [
      "log (a⁴ √b / c)",
      "log (a⁴ c / √b)",
      "log (4ac / √b)",
      "log (8ac / b)"
    ],
    correct_answer: "B",
    explanation: "Apply power and quotient/product laws of logarithms:\n4 log a - (1/2) log b + log c = log(a⁴) - log(b^(1/2)) + log(c) = log(a⁴ · c / √b).",
    topic_name: "Laws of Logarithmic Expansion & Condensation",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 20,
    question_text: "Let f and g be polynomial functions such that f(x) = x³ - 2x² + 5x + 3 and g(x) = 5x³ + x² + 4, then which one of the following is polynomial function?",
    option_a: "√f³ - (4/5)g",
    option_b: "(f + 3g) / (2f - g)",
    option_c: "(3/4)f + (2/3)g",
    option_d: "(f / g)²",
    options: [
      "√f³ - (4/5)g",
      "(f + 3g) / (2f - g)",
      "(3/4)f + (2/3)g",
      "(f / g)²"
    ],
    correct_answer: "C",
    explanation: "Polynomials are closed under addition, subtraction, and multiplication by scalars. Therefore, any linear combination c₁ f(x) + c₂ g(x), such as (3/4)f + (2/3)g, is guaranteed to be a polynomial.",
    topic_name: "Operations & Closure on Polynomials",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 21,
    question_text: "Which one of the following is true about the zero(s) of a function f(x)?",
    option_a: "If f(c) = 0, then y = c is the y-intercept.",
    option_b: "If f(c) = 0, then (x - c)² is a factor of f(x).",
    option_c: "If f(c) = 0, then c is not necessarily in the domain of f(x).",
    option_d: "If f(c) = 0, then x - c is a factor of f(x).",
    options: [
      "If f(c) = 0, then y = c is the y-intercept.",
      "If f(c) = 0, then (x - c)² is a factor of f(x).",
      "If f(c) = 0, then c is not necessarily in the domain of f(x).",
      "If f(c) = 0, then x - c is a factor of f(x)."
    ],
    correct_answer: "D",
    explanation: "By the Factor Theorem, a number c is a root/zero of polynomial f(x) (i.e. f(c) = 0) if and only if (x - c) is a factor of f(x).",
    topic_name: "Factor Theorem & Zeros",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 22,
    question_text: "When the polynomial function f(x) = 3x⁶ + 5x⁴ + 8x³ - kx² + 10 is divided by x - 1 the remainder is 6. What is the value of k?",
    option_a: "20",
    option_b: "32",
    option_c: "4",
    option_d: "-20",
    options: ["20", "32", "4", "-20"],
    correct_answer: "A",
    explanation: "By the Remainder Theorem, the remainder upon division by (x - 1) equals f(1):\nf(1) = 3(1)⁶ + 5(1)⁴ + 8(1)³ - k(1)² + 10 = 6\n3 + 5 + 8 - k + 10 = 6\n26 - k = 6 => k = 26 - 6 = 20.",
    topic_name: "Remainder Theorem Applications",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 23,
    question_text: "If f: [2, ∞) → ℝ be the function defined by f(x) = x² - 4x + 5, then the range of f(x) is equal to:",
    option_a: "ℝ",
    option_b: "[2, ∞)",
    option_c: "[5, ∞)",
    option_d: "[1, ∞)",
    options: ["ℝ", "[2, ∞)", "[5, ∞)", "[1, ∞)"],
    correct_answer: "D",
    explanation: "Complete the square: f(x) = (x - 2)² + 1.\nFor x ∈ [2, ∞), (x - 2) ≥ 0, so (x - 2)² takes all values in [0, ∞).\nAdding 1, f(x) takes all values in [0 + 1, ∞) = [1, ∞).",
    topic_name: "Range of Quadratic Functions",
    instruction_category: "Functions & Domains"
  },
  {
    question_number: 24,
    question_text: "Let a relation R from {11, 12, 13} to {8, 10, 12} be defined by y = x - 3. Which one of the following is the inverse of R?",
    option_a: "{(8, 11), (12, 8), (13, 8)}",
    option_b: "{(11, 8), (13, 10)}",
    option_c: "{(8, 11), (10, 13)}",
    option_d: "{(8, 11), (10, 13), (12, 9)}",
    options: [
      "{(8, 11), (12, 8), (13, 8)}",
      "{(11, 8), (13, 10)}",
      "{(8, 11), (10, 13)}",
      "{(8, 11), (10, 13), (12, 9)}"
    ],
    correct_answer: "C",
    explanation: "Determine relation R: For x = 11, y = 11 - 3 = 8 ∈ {8, 10, 12} -> (11, 8).\nFor x = 12, y = 12 - 3 = 9 ∉ {8, 10, 12}.\nFor x = 13, y = 13 - 3 = 10 ∈ {8, 10, 12} -> (13, 10).\nThus R = {(11, 8), (13, 10)}. Its inverse R⁻¹ swaps (x, y) into (y, x): R⁻¹ = {(8, 11), (10, 13)}.",
    topic_name: "Inverse of Relations",
    instruction_category: "Relations & Functions"
  },
  {
    question_number: 25,
    question_text: "If f is a polynomial function given by f(x) = 2x³ + 4x² + 5x - 9, then this function has root between_______.",
    option_a: "-1 and 0",
    option_b: "0 and 1",
    option_c: "1 and 2",
    option_d: "-2 and -1",
    options: ["-1 and 0", "0 and 1", "1 and 2", "-2 and -1"],
    correct_answer: "B",
    explanation: "Evaluate f(x) at integer values:\nf(0) = 2(0)³ + 4(0)² + 5(0) - 9 = -9 < 0\nf(1) = 2(1)³ + 4(1)² + 5(1) - 9 = 2 + 4 + 5 - 9 = 2 > 0\nSince f(0) < 0 and f(1) > 0, by the Intermediate Value Theorem there exists a root in the interval (0, 1).",
    topic_name: "Location of Roots (Intermediate Value Theorem)",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 26,
    question_text: "Let f(x) and g(x) be exponential functions given by f(x) = aˣ, g(x) = bˣ for a > 1 and b > 1, then which one of the following statements is true?",
    option_a: "f(x) > g(x) for all x > 0 if a < b",
    option_b: "f(x) < g(x) for all x < 0 if a < b",
    option_c: "f(x) > g(x) for all x > 0 if a > b",
    option_d: "f(x) < g(x) for all x > 0 if a > b",
    options: [
      "f(x) > g(x) for all x > 0 if a < b",
      "f(x) < g(x) for all x < 0 if a < b",
      "f(x) > g(x) for all x > 0 if a > b",
      "f(x) < g(x) for all x > 0 if a > b"
    ],
    correct_answer: "C",
    explanation: "If base a > b > 1, then for any positive exponent x > 0, aˣ > bˣ, which means f(x) > g(x).",
    topic_name: "Properties of Exponential Functions",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 27,
    question_text: "Which one of the following is the value of log_{3√3} 81 + 3^(1 + log₃ 4)?",
    option_a: "44/3",
    option_b: "18",
    option_c: "20",
    option_d: "8/3",
    options: ["44/3", "18", "20", "8/3"],
    correct_answer: "A",
    explanation: "Part 1: Base is 3√3 = 3¹ · 3^(1/2) = 3^(3/2). 81 = 3⁴.\nlog_{3^(3/2)} (3⁴) = 4 / (3/2) = 8/3.\nPart 2: 3^(1 + log₃ 4) = 3¹ · 3^(log₃ 4) = 3 · 4 = 12.\nSum = 8/3 + 12 = 8/3 + 36/3 = 44/3.",
    topic_name: "Evaluation of Logarithmic Expressions",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 28,
    question_text: "For a positive real number b ≠ 1, suppose log_b (x - y) = 2, log_b (x + y) = 4 and log_b y = 2. Then which of the following is NOT true?",
    option_a: "x = 2b²",
    option_b: "log_b ((x/y) - 1) = 2",
    option_c: "log_b (x/y) = log_b 2",
    option_d: "log_b ((x⁴ - y⁴)/(x² + y²)) = 8",
    options: [
      "x = 2b²",
      "log_b ((x/y) - 1) = 2",
      "log_b (x/y) = log_b 2",
      "log_b ((x⁴ - y⁴)/(x² + y²)) = 8"
    ],
    correct_answer: "D",
    explanation: "From given equations:\n(x - y) = b²\n(x + y) = b⁴\ny = b² => x = y + b² = 2b².\nNow evaluate D: (x⁴ - y⁴)/(x² + y²) = x² - y² = (x - y)(x + y).\nlog_b ((x⁴ - y⁴)/(x² + y²)) = log_b ((x - y)(x + y)) = log_b (x - y) + log_b (x + y) = 2 + 4 = 6 ≠ 8. Thus D is false.",
    topic_name: "Logarithmic System & Algebraic Properties",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 29,
    question_text: "Which of the following graphs is possible representation of the exponential functions y = 3ˣ and y = 5ˣ?",
    option_a: "Graph showing both curves intersecting at (0,1), with y = 5ˣ above y = 3ˣ for x > 0 and below for x < 0",
    option_b: "Graph showing y = 3ˣ above y = 5ˣ for all x",
    option_c: "Graph showing decaying exponentials",
    option_d: "Graph with negative intercepts",
    options: [
      "Graph showing both curves intersecting at (0,1), with y = 5ˣ above y = 3ˣ for x > 0 and below for x < 0",
      "Graph showing y = 3ˣ above y = 5ˣ for all x",
      "Graph showing decaying exponentials",
      "Graph with negative intercepts"
    ],
    correct_answer: "A",
    explanation: "For exponential curves y = aˣ with base a > 1, both pass through (0, 1). For x > 0, the larger base 5ˣ grows faster and lies above 3ˣ. For x < 0, 5ˣ approaches 0 faster and lies below 3ˣ.",
    topic_name: "Comparative Graphs of Exponential Functions",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 30,
    question_text: "Given log 5 = b, then log₅ 4 is equal to:",
    option_a: "2(b / (1 - b))",
    option_b: "2(b / (b - 1))",
    option_c: "2((1/b) - 1)",
    option_d: "2(1 - 1/b)",
    options: [
      "2(b / (1 - b))",
      "2(b / (b - 1))",
      "2((1/b) - 1)",
      "2(1 - 1/b)"
    ],
    correct_answer: "C",
    explanation: "Using common base 10:\nlog 2 = log(10/5) = log 10 - log 5 = 1 - b.\nlog₅ 4 = log 4 / log 5 = (2 log 2) / log 5 = 2(1 - b) / b = 2(1/b - 1).",
    topic_name: "Change of Base Formula in Logarithms",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 31,
    question_text: "Let f(x) = (3/4)ˣ and g(x) = (4/3)ˣ. Which one of the following statements about f(x) and g(x) is true?",
    option_a: "If x < 0, then g(x) > 1 and if x > 0, then f(x) > 1",
    option_b: "If x > 0, then f(x) > g(x)",
    option_c: "If x < 0, then g(x) < 1 and if x > 0, then f(x) < 1",
    option_d: "If x < 0, then f(x) < g(x)",
    options: [
      "If x < 0, then g(x) > 1 and if x > 0, then f(x) > 1",
      "If x > 0, then f(x) > g(x)",
      "If x < 0, then g(x) < 1 and if x > 0, then f(x) < 1",
      "If x < 0, then f(x) < g(x)"
    ],
    correct_answer: "C",
    explanation: "Since 0 < 3/4 < 1, f(x) is strictly decreasing: for x > 0, f(x) < (3/4)⁰ = 1.\nSince 4/3 > 1, g(x) is strictly increasing: for x < 0, g(x) < (4/3)⁰ = 1.\nTherefore, option C correctly states both facts.",
    topic_name: "Behavior of Exponential Functions (Bases < 1 and > 1)",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 32,
    question_text: "Which one of the following is a polynomial function f(x) of degree 4 such that the zeros of f are -3, -1, 0, 2 and f(3) = 288?",
    option_a: "f(x) = x⁴ + 2x³ - 5x² - 6x",
    option_b: "f(x) = 4x⁴ + 8x³ - 20x² - 24x",
    option_c: "f(x) = 4x⁴ + 2x³ - 5x² - 6x",
    option_d: "f(x) = 4x⁴ - 4x³ + x² + 6x",
    options: [
      "f(x) = x⁴ + 2x³ - 5x² - 6x",
      "f(x) = 4x⁴ + 8x³ - 20x² - 24x",
      "f(x) = 4x⁴ + 2x³ - 5x² - 6x",
      "f(x) = 4x⁴ - 4x³ + x² + 6x"
    ],
    correct_answer: "B",
    explanation: "Set up the polynomial in factored form: f(x) = a x(x + 3)(x + 1)(x - 2).\nSubstitute x = 3:\nf(3) = a(3)(3 + 3)(3 + 1)(3 - 2) = a(3)(6)(4)(1) = 72a = 288 => a = 4.\nExpand:\nf(x) = 4x[(x + 3)(x + 1)(x - 2)] = 4x(x³ + 2x² - 5x - 6) = 4x⁴ + 8x³ - 20x² - 24x.",
    topic_name: "Constructing Polynomials from Zeros",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 33,
    question_text: "What is the values of p and q, if x - 1 is a common factor of f(x) = x⁴ - px³ + 7qx + 1, and g(x) = x⁶ - 4x³ + px² + qx - 3 respectively?",
    option_a: "9/2, 3/2",
    option_b: "11/2, 1/2",
    option_c: "9, -3",
    option_d: "11/4, 13/4",
    options: ["9/2, 3/2", "11/2, 1/2", "9, -3", "11/4, 13/4"],
    correct_answer: "B",
    explanation: "By Factor Theorem, f(1) = 0 and g(1) = 0:\nf(1) = 1⁴ - p(1)³ + 7q(1) + 1 = 2 - p + 7q = 0 => p - 7q = 2  --- (Eq. 1)\ng(1) = 1⁶ - 4(1)³ + p(1)² + q(1) - 3 = 1 - 4 + p + q - 3 = p + q - 6 = 0 => p + q = 6  --- (Eq. 2)\nSubtract Eq. 1 from Eq. 2: 8q = 4 => q = 1/2.\nSubstitute q into Eq. 2: p + 1/2 = 6 => p = 11/2.",
    topic_name: "System of Equations with Factor Theorem",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 34,
    question_text: "What is the domain of f(x) = [log₁₀((5x - x²)/4)]^(1/2)?",
    option_a: "1 ≤ x ≤ 4",
    option_b: "-1 ≤ x ≤ 3",
    option_c: "0 < x < 5",
    option_d: "0 ≤ x ≤ 5",
    options: ["1 ≤ x ≤ 4", "-1 ≤ x ≤ 3", "0 < x < 5", "0 ≤ x ≤ 5"],
    correct_answer: "A",
    explanation: "For the outer square root to be real: log₁₀((5x - x²)/4) ≥ 0.\nConvert to exponential form: (5x - x²)/4 ≥ 10⁰ = 1\n5x - x² ≥ 4\nx² - 5x + 4 ≤ 0\n(x - 1)(x - 4) ≤ 0\nThis inequality is satisfied for x ∈ [1, 4], in which (5x - x²)/4 ≥ 1 > 0 (satisfying log argument).",
    topic_name: "Domain of Radical-Logarithmic Functions",
    instruction_category: "Functions & Domains"
  },
  {
    question_number: 35,
    question_text: "Which of the following could be the graph of a polynomial function of degree three with positive leading coefficient?",
    option_a: "S-shaped cubic curve with end behavior down on left and up on right",
    option_b: "Curve starting up on left and down on right",
    option_c: "Rational function with asymptote",
    option_d: "Parabolic U-shape",
    options: [
      "S-shaped cubic curve with end behavior down on left and up on right",
      "Curve starting up on left and down on right",
      "Rational function with asymptote",
      "Parabolic U-shape"
    ],
    correct_answer: "A",
    explanation: "A cubic polynomial (degree 3) with positive leading coefficient has 2 turning points at most and end behavior: as x → -∞, y → -∞; as x → ∞, y → ∞ (falls left, rises right).",
    topic_name: "Cubic Polynomial Graph Characteristics",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 36,
    question_text: "Which one of the following is the system of inequalities whose solution is represented by the shaded region bounded below by dashed line y + x = 2 and above by solid line y = 5 in the first quadrant?",
    option_a: "{ y + x > 2, x ≥ 0, y ≥ 0 }",
    option_b: "{ y + x < 2, 0 ≤ y ≤ 5, x ≥ 0 }",
    option_c: "{ y + x > 2, 0 ≤ y ≤ 5, y > x }",
    option_d: "{ y + x > 2, 0 ≤ y ≤ 5, x ≥ 0 }",
    options: [
      "{ y + x > 2, x ≥ 0, y ≥ 0 }",
      "{ y + x < 2, 0 ≤ y ≤ 5, x ≥ 0 }",
      "{ y + x > 2, 0 ≤ y ≤ 5, y > x }",
      "{ y + x > 2, 0 ≤ y ≤ 5, x ≥ 0 }"
    ],
    correct_answer: "D",
    explanation: "The region lies above the strict dashed boundary y + x = 2 (so y + x > 2), between the horizontal bounds y = 0 and y = 5 (0 ≤ y ≤ 5), and to the right of the y-axis (x ≥ 0).",
    topic_name: "Systems of Linear Inequalities",
    instruction_category: "Linear Inequalities"
  },
  {
    question_number: 37,
    question_text: "If f(x) = 2x⁴ - 3x³ + 5x² - x + 1 and g(x) = 3x³ + x - 2, then which of the following is NOT true about f and g?",
    option_a: "The domain of f - g is real number.",
    option_b: "The graph of f + g has three turning points.",
    option_c: "The graph of g - f is up to the right and up to the left.",
    option_d: "The domain of f / g is ℝ \\ {x : g(x) = 0}.",
    options: [
      "The domain of f - g is real number.",
      "The graph of f + g has three turning points.",
      "The graph of g - f is up to the right and up to the left.",
      "The domain of f / g is ℝ \\ {x : g(x) = 0}."
    ],
    correct_answer: "C",
    explanation: "The leading term of g(x) - f(x) is -2x⁴ (even degree 4 with negative leading coefficient -2). Its end behavior must be DOWN to the left (y → -∞) and DOWN to the right (y → -∞). Therefore, statement C is FALSE.",
    topic_name: "Polynomial Operations & End Behavior",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 38,
    question_text: "If a function p is given by p(x) = (1 - 2x)² + 4, then what is the range of p?",
    option_a: "{y | y ≥ 1}",
    option_b: "{y | y ≥ 4}",
    option_c: "{y | y ≤ -4}",
    option_d: "{y | y ≥ 8}",
    options: ["{y | y ≥ 1}", "{y | y ≥ 4}", "{y | y ≤ -4}", "{y | y ≥ 8}"],
    correct_answer: "B",
    explanation: "Since the squared term (1 - 2x)² ≥ 0 for all real x with minimum value 0 (at x = 1/2), the minimum value of p(x) is 0 + 4 = 4. Hence Range = {y | y ≥ 4}.",
    topic_name: "Range of Transformed Quadratics",
    instruction_category: "Functions & Domains"
  },
  {
    question_number: 39,
    question_text: "If h = {(1, 2), (2, 3), (3, 5)} and g(x) = (3/2)x² + (1/2)x, then find (g/h)(3).",
    option_a: "3",
    option_b: "5",
    option_c: "15",
    option_d: "30",
    options: ["3", "5", "15", "30"],
    correct_answer: "A",
    explanation: "From relation h: h(3) = 5.\nEvaluate g(3): g(3) = (3/2)(3)² + (1/2)(3) = (3/2)(9) + 3/2 = 27/2 + 3/2 = 30/2 = 15.\nThen (g/h)(3) = g(3) / h(3) = 15 / 5 = 3.",
    topic_name: "Algebra of Functions (Quotient)",
    instruction_category: "Relations & Functions"
  },
  {
    question_number: 40,
    question_text: "If the figure is the graph of the function y = -x² + 5x - 4 with vertex at (5/2, 9/4) and x-intercepts at 1 and 4, then what is the solution set of y such that y ≤ 0?",
    option_a: "{x : x ≤ 1 ∪ x ≥ 4}",
    option_b: "{x : 1 ≤ x ≤ 4}",
    option_c: "{x : x ≥ 5/2}",
    option_d: "{x : x < 1 ∪ x > 4}",
    options: [
      "{x : x ≤ 1 ∪ x ≥ 4}",
      "{x : 1 ≤ x ≤ 4}",
      "{x : x ≥ 5/2}",
      "{x : x < 1 ∪ x > 4}"
    ],
    correct_answer: "A",
    explanation: "The parabola opens downwards with roots at x = 1 and x = 4. The graph lies on or below the x-axis (y ≤ 0) outside the roots: x ≤ 1 or x ≥ 4.",
    topic_name: "Quadratic Inequalities from Graph",
    instruction_category: "Quadratic Functions"
  },
  {
    question_number: 41,
    question_text: "Which one of the following is NOT true about the quadratic function y = 2(x - 3)² + 5?",
    option_a: "y ≥ 5 for every x in the domain.",
    option_b: "Its graph is symmetric with respect to the line x = 3.",
    option_c: "Its domain is the set of real numbers.",
    option_d: "Its graph has vertex (-3, 5).",
    options: [
      "y ≥ 5 for every x in the domain.",
      "Its graph is symmetric with respect to the line x = 3.",
      "Its domain is the set of real numbers.",
      "Its graph has vertex (-3, 5)."
    ],
    correct_answer: "D",
    explanation: "In vertex form y = a(x - h)² + k, the vertex is (h, k) = (3, 5), not (-3, 5). Therefore, statement D is NOT true.",
    topic_name: "Vertex Form of Quadratic Functions",
    instruction_category: "Quadratic Functions"
  },
  {
    question_number: 42,
    question_text: "Simplify log(75/16) - 2 log(5/9) + log(32/243).",
    option_a: "log(1/2)",
    option_b: "2",
    option_c: "log 2",
    option_d: "log 16",
    options: ["log(1/2)", "2", "log 2", "log 16"],
    correct_answer: "C",
    explanation: "= log(75/16) - log((5/9)²) + log(32/243)\n= log[ (75/16) · (81/25) · (32/243) ]\n= log[ (75/25) · (81/243) · (32/16) ]\n= log[ 3 · (1/3) · 2 ] = log 2.",
    topic_name: "Logarithmic Simplification",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 43,
    question_text: "If log x = m + n and log y = m - n, then which one of the following is equal to log(10x / y²) in terms of m and n?",
    option_a: "1 - m + 3n",
    option_b: "1 - m - n",
    option_c: "1 + m + 3n",
    option_d: "10(m + n) / (m - n)²",
    options: [
      "1 - m + 3n",
      "1 - m - n",
      "1 + m + 3n",
      "10(m + n) / (m - n)²"
    ],
    correct_answer: "A",
    explanation: "log(10x / y²) = log 10 + log x - 2 log y\n= 1 + (m + n) - 2(m - n)\n= 1 + m + n - 2m + 2n = 1 - m + 3n.",
    topic_name: "Logarithmic Substitutions",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 44,
    question_text: "Which one of the following is the simplified form of [3^(x+1) / 3^(x(x-1))] ÷ [9^(x+1) / (3^(x+1))^(x-1)]?",
    option_a: "1/9",
    option_b: "9",
    option_c: "1/3",
    option_d: "-1/3",
    options: ["1/9", "9", "1/3", "-1/3"],
    correct_answer: "A",
    explanation: "Numerator: 3^(x + 1 - (x² - x)) = 3^(-x² + 2x + 1).\nDenominator: 9^(x+1) / 3^((x+1)(x-1)) = 3^(2x + 2) / 3^(x² - 1) = 3^(2x + 2 - x² + 1) = 3^(-x² + 2x + 3).\nDividing: 3^(-x² + 2x + 1 - (-x² + 2x + 3)) = 3^(1 - 3) = 3⁻² = 1/9.",
    topic_name: "Exponential Fraction Simplification",
    instruction_category: "Exponents & Radicals"
  },
  {
    question_number: 45,
    question_text: "If the polynomial functions g(x) = x² + 4, q(x) = x - 3 and r(x) = 3x + 2, and a function f(x) is given by f(x)/g(x) = q(x) + r(x)/g(x), then which one of the following is NOT true about f(x)?",
    option_a: "It is a polynomial function of degree 3.",
    option_b: "The graph of f(x) crosses the y-axis at (0, -10).",
    option_c: "f has at most three roots.",
    option_d: "f(x) = x³ + 3x² - 7x + 10.",
    options: [
      "It is a polynomial function of degree 3.",
      "The graph of f(x) crosses the y-axis at (0, -10).",
      "f has at most three roots.",
      "f(x) = x³ + 3x² - 7x + 10."
    ],
    correct_answer: "D",
    explanation: "Multiply through by g(x):\nf(x) = g(x)·q(x) + r(x) = (x² + 4)(x - 3) + 3x + 2\n= x³ - 3x² + 4x - 12 + 3x + 2 = x³ - 3x² + 7x - 10.\nOption D asserts f(x) = x³ + 3x² - 7x + 10 (with inverted signs), which is FALSE.",
    topic_name: "Division Algorithm for Polynomials",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 46,
    question_text: "For positive real number x and natural numbers m and n, which of the following is NOT correct?",
    option_a: "x⁰ = 1",
    option_b: "ⁿ√x = x^(1/n)",
    option_c: "²ⁿ√x = ⁿ√(√x)",
    option_d: "ⁿ√(x⁻ᵐ) = x^(1/(mn))",
    options: [
      "x⁰ = 1",
      "ⁿ√x = x^(1/n)",
      "²ⁿ√x = ⁿ√(√x)",
      "ⁿ√(x⁻ᵐ) = x^(1/(mn))"
    ],
    correct_answer: "D",
    explanation: "ⁿ√(x⁻ᵐ) = (x⁻ᵐ)^(1/n) = x^(-m/n), NOT x^(1/(mn)).",
    topic_name: "Radicals & Fractional Exponents",
    instruction_category: "Exponents & Radicals"
  },
  {
    question_number: 47,
    question_text: "Which one of the following statements is necessarily true?",
    option_a: "Any function whose domain is the set of all real numbers is polynomial function.",
    option_b: "Polynomail function is a function whose range is the set of all real numbers.",
    option_c: "The graphs of polynomial functions cannot cross the y-axis more than once.",
    option_d: "The degree of any polynomial function is always positive integers.",
    options: [
      "Any function whose domain is the set of all real numbers is polynomial function.",
      "Polynomail function is a function whose range is the set of all real numbers.",
      "The graphs of polynomial functions cannot cross the y-axis more than once.",
      "The degree of any polynomial function is always positive integers."
    ],
    correct_answer: "C",
    explanation: "By definition of a mathematical function, for every input x in the domain there is exactly one output y. Thus at x = 0 there is at most one y-intercept.",
    topic_name: "Fundamental Properties of Polynomials",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 48,
    question_text: "Which one of the following is the polynomial function of degree 3 such that f(3) = 36, and x - 2, and x + 1 are factors of the polynomial?",
    option_a: "f(x) = x³ - x² - 2",
    option_b: "f(x) = 3x³ - 3x² - 2x",
    option_c: "f(x) = 3x³ - 3x² - 6x",
    option_d: "f(x) = 3x³ + 3x² - 6x",
    options: [
      "f(x) = x³ - x² - 2",
      "f(x) = 3x³ - 3x² - 2x",
      "f(x) = 3x³ - 3x² - 6x",
      "f(x) = 3x³ + 3x² - 6x"
    ],
    correct_answer: "C",
    explanation: "With factors x, (x - 2), and (x + 1): f(x) = a x(x - 2)(x + 1) = a(x³ - x² - 2x).\nUsing f(3) = 36: a(3)(3 - 2)(3 + 1) = a(3)(1)(4) = 12a = 36 => a = 3.\nThus f(x) = 3(x³ - x² - 2x) = 3x³ - 3x² - 6x.",
    topic_name: "Polynomial Synthesis from Factors",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 49,
    question_text: "If x + 1 is a common factor of the expressions x² + (a - b)x and 3x² - (a + 2)x - (a + 5b), then find the value of a + b.",
    option_a: "-1/7",
    option_b: "3",
    option_c: "2",
    option_d: "1",
    options: ["-1/7", "3", "2", "1"],
    correct_answer: "B",
    explanation: "Substitute x = -1 into both expressions:\nExpression 1: (-1)² + (a - b)(-1) = 0 => 1 - a + b = 0 => a - b = 1  --- (1)\nExpression 2: 3(-1)² - (a + 2)(-1) - (a + 5b) = 0 => 3 + a + 2 - a - 5b = 0 => 5 - 5b = 0 => b = 1.\nFrom (1): a = 1 + b = 1 + 1 = 2.\nThen a + b = 2 + 1 = 3.",
    topic_name: "Common Factors in Polynomials",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 50,
    question_text: "Which one of the following statements is true?",
    option_a: "The maximum number of real zeros of a polynomial function of degree n is at least n.",
    option_b: "The least number of x-intercepts of the graph of a polynomial function of degree even is 0.",
    option_c: "The least number of turning points of an odd degree polynomial function is 1.",
    option_d: "The maximum number of turning points of any polynomial function of degree n is n + 1.",
    options: [
      "The maximum number of real zeros of a polynomial function of degree n is at least n.",
      "The least number of x-intercepts of the graph of a polynomial function of degree even is 0.",
      "The least number of turning points of an odd degree polynomial function is 1.",
      "The maximum number of turning points of any polynomial function of degree n is n + 1."
    ],
    correct_answer: "B",
    explanation: "Even-degree polynomials (like x² + 1 or x⁴ + 5) may lie entirely above or below the x-axis, having a minimum of 0 real x-intercepts.",
    topic_name: "Extrema & Intercepts of Polynomials",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 51,
    question_text: "Let f(x) = aˣ for all a ∈ (0, 1). Then which one of the following is NOT true about f?",
    option_a: "It is decreasing function.",
    option_b: "If x < 0, then the value of f is greater than 1.",
    option_c: "The range of f is the set of all real numbers.",
    option_d: "If x > 0, then the value of f is between 0 and 1.",
    options: [
      "It is decreasing function.",
      "If x < 0, then the value of f is greater than 1.",
      "The range of f is the set of all real numbers.",
      "If x > 0, then the value of f is between 0 and 1."
    ],
    correct_answer: "C",
    explanation: "The range of an exponential function f(x) = aˣ is strictly the set of positive real numbers (0, ∞), not all real numbers ℝ.",
    topic_name: "Properties of Exponential Functions (0 < a < 1)",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 52,
    question_text: "Which one of the following is an onto function?",
    option_a: "f : ℝ → ℝ is defined by f(x) = x² + 5x + 6.",
    option_b: "f : ℝ → ℝ is defined by f(x) = |3x + 4| + 2.",
    option_c: "f : ℝ → (0, ∞) is defined by f(x) = x².",
    option_d: "f : ℝ → [5, ∞) is defined by f(x) = x² + 5.",
    options: [
      "f : ℝ → ℝ is defined by f(x) = x² + 5x + 6.",
      "f : ℝ → ℝ is defined by f(x) = |3x + 4| + 2.",
      "f : ℝ → (0, ∞) is defined by f(x) = x².",
      "f : ℝ → [5, ∞) is defined by f(x) = x² + 5."
    ],
    correct_answer: "D",
    explanation: "A function is onto (surjective) if its range equals its codomain. For f(x) = x² + 5 with domain ℝ, x² ∈ [0, ∞), so f(x) ∈ [5, ∞), which matches the codomain [5, ∞) exactly.",
    topic_name: "Onto (Surjective) Functions",
    instruction_category: "Relations & Functions"
  },
  {
    question_number: 53,
    question_text: "If f = {(1, -3), (4, 6), (3, 10), (9, 13), (0, 7)} and g = {(6, 7), (0, 11), (-4, 5), (4, 9), (9, 8)}, then what is the value of f - g?",
    option_a: "{(4, 3), (0, 4), (9, -5)}",
    option_b: "{(1, -3), (-4, 5), (6, 7), (3, 10)}",
    option_c: "{(4, -3), (0, -4), (9, 5)}",
    option_d: "{(4, 15), (0, 18), (9, 22)}",
    options: [
      "{(4, 3), (0, 4), (9, -5)}",
      "{(1, -3), (-4, 5), (6, 7), (3, 10)}",
      "{(4, -3), (0, -4), (9, 5)}",
      "{(4, 15), (0, 18), (9, 22)}"
    ],
    correct_answer: "C",
    explanation: "The domain of f - g is the intersection of the domains: Dom(f) ∩ Dom(g) = {0, 4, 9}.\nAt x = 4: f(4) - g(4) = 6 - 9 = -3 => (4, -3)\nAt x = 0: f(0) - g(0) = 7 - 11 = -4 => (0, -4)\nAt x = 9: f(9) - g(9) = 13 - 8 = 5 => (9, 5)\nThus f - g = {(4, -3), (0, -4), (9, 5)}.",
    topic_name: "Arithmetic of Discrete Functions",
    instruction_category: "Relations & Functions"
  },
  {
    question_number: 54,
    question_text: "Which of the following statements is true?",
    option_a: "The domain of f(x) = e^(√3x) is all positive real numbers.",
    option_b: "The range of g(x) = -5ˣ is (-∞, 0).",
    option_c: "The range of h(x) = e^√3 is all positive real numbers.",
    option_d: "f(x) = 2ˣ and g(x) = 2⁻ˣ are inverses of each other.",
    options: [
      "The domain of f(x) = e^(√3x) is all positive real numbers.",
      "The range of g(x) = -5ˣ is (-∞, 0).",
      "The range of h(x) = e^√3 is all positive real numbers.",
      "f(x) = 2ˣ and g(x) = 2⁻ˣ are inverses of each other."
    ],
    correct_answer: "B",
    explanation: "For any real number x, 5ˣ > 0. Negating gives -5ˣ < 0 for all x ∈ ℝ. Thus the range of g(x) = -5ˣ is (-∞, 0).",
    topic_name: "Range & Properties of Exponential Functions",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 55,
    question_text: "What is the value of x that makes 3^(2x + 1) = 5?",
    option_a: "x = (1/2)(log₃ 5 + 1)",
    option_b: "x = log₃(√5 / 2)",
    option_c: "x = 1/2 - log₃ 5",
    option_d: "x = (1/2)(log₃ 5 - 1)",
    options: [
      "x = (1/2)(log₃ 5 + 1)",
      "x = log₃(√5 / 2)",
      "x = 1/2 - log₃ 5",
      "x = (1/2)(log₃ 5 - 1)"
    ],
    correct_answer: "D",
    explanation: "Take logarithm base 3 of both sides:\n2x + 1 = log₃ 5\n2x = log₃ 5 - 1\nx = (1/2)(log₃ 5 - 1).",
    topic_name: "Solving Exponential Equations using Logarithms",
    instruction_category: "Logarithms & Exponents"
  },
  {
    question_number: 56,
    question_text: "From the given graphs, which one can represent the graph of f(x) = x³ + 3x² - x - 3?",
    option_a: "Cubic graph with zeros at -3, -1, 1 and negative y-intercept",
    option_b: "Inverted cubic graph",
    option_c: "Graph with vertical asymptotes",
    option_d: "Cubic graph passing through x = -3, -1, 1 with y-intercept (0, -3)",
    options: [
      "Cubic graph with zeros at -3, -1, 1 and negative y-intercept",
      "Inverted cubic graph",
      "Graph with vertical asymptotes",
      "Cubic graph passing through x = -3, -1, 1 with y-intercept (0, -3)"
    ],
    correct_answer: "D",
    explanation: "Factor the cubic polynomial:\nf(x) = x²(x + 3) - 1(x + 3) = (x² - 1)(x + 3) = (x - 1)(x + 1)(x + 3).\nThe x-intercepts are x = -3, -1, 1, and the y-intercept is f(0) = -3. End behavior: falls left, rises right. Graph D accurately reflects these features.",
    topic_name: "Graphing Cubic Polynomials",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 57,
    question_text: "The graphs of polynomial functions f₁, f₂, f₃ are given. Which of the following is NOT true about the functions?",
    option_a: "The leading coefficient of f₂ is positive.",
    option_b: "Degree of f₁ > 4",
    option_c: "Degree of f₃ is even.",
    option_d: "The range of f₂ is ℝ.",
    options: [
      "The leading coefficient of f₂ is positive.",
      "Degree of f₁ > 4",
      "Degree of f₃ is even.",
      "The range of f₂ is ℝ."
    ],
    correct_answer: "B",
    explanation: "Graph f₁ has 3 turning points, meaning its minimum polynomial degree is 3 + 1 = 4. It does not strictly require degree > 4. Therefore, statement B is NOT necessarily true.",
    topic_name: "Polynomial Graphs & Degree Analysis",
    instruction_category: "Polynomial Functions"
  },
  {
    question_number: 58,
    question_text: "If m = (√6 - 2√15) · (√3 / 3) + √20, then what is the value of m²?",
    option_a: "2",
    option_b: "1/2",
    option_c: "√2 / 2",
    option_d: "√2",
    options: ["2", "1/2", "√2 / 2", "√2"],
    correct_answer: "A",
    explanation: "Distribute (√3 / 3):\nm = (√18 / 3) - (2√45 / 3) + √20\n= (3√2 / 3) - (2 · 3√5 / 3) + 2√5\n= √2 - 2√5 + 2√5 = √2.\nThen m² = (√2)² = 2.",
    topic_name: "Radical Arithmetic & Simplification",
    instruction_category: "Exponents & Radicals"
  },
  {
    question_number: 59,
    question_text: "What is the range of the relation R given by R = {(x, y) : y ≥ x² - 1 and y < 3}?",
    option_a: "[-1, 3]",
    option_b: "(-2, 2)",
    option_c: "[-1, 3)",
    option_d: "[-2, 2]",
    options: ["[-1, 3]", "(-2, 2)", "[-1, 3)", "[-2, 2]"],
    correct_answer: "C",
    explanation: "Since x² ≥ 0 for all real x, the lowest possible value of y is 0 - 1 = -1 (at x = 0). The upper bound is strictly less than 3 (y < 3). Therefore, the range is the half-open interval [-1, 3).",
    topic_name: "Range of Bounded Relations",
    instruction_category: "Relations & Functions"
  },
  {
    question_number: 60,
    question_text: "Which of the following is a relation?",
    option_a: "The set R = {2, 4, 6, 8, ...}.",
    option_b: "The set M = {(x, y) : x is a rectangle and y is the area of x}.",
    option_c: "The set T = {x : x² ≤ 30 and x is positive number}.",
    option_d: "The set S = {x ∈ ℝ : 0 < x < 1}.",
    options: [
      "The set R = {2, 4, 6, 8, ...}.",
      "The set M = {(x, y) : x is a rectangle and y is the area of x}.",
      "The set T = {x : x² ≤ 30 and x is positive number}.",
      "The set S = {x ∈ ℝ : 0 < x < 1}."
    ],
    correct_answer: "B",
    explanation: "In mathematics, a relation is defined as a set of ordered pairs (x, y). Sets R, T, and S are sets of individual numbers, while set M is explicitly a set of ordered pairs.",
    topic_name: "Definition of Mathematical Relations",
    instruction_category: "Relations & Functions"
  }
];

module.exports = questions;
