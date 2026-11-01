/**
 * 2018 E.C. Mathematics Exam - EUEE Social Science Stream
 * Booklet Code: 544 - 60 Questions complete with Official Answer Key & In-Depth Derivations
 */

const questions = [
  {
    question_number: 1,
    question_text: "If a = -2√3 + 3√2 - 2 and b = -3√2 + 2, then a + b is equal to:",
    option_a: "2√3",
    option_b: "-2√3",
    option_c: "-2√3 + 6√2",
    option_d: "-2√3 - 6√2 + 4",
    options: ["2√3", "-2√3", "-2√3 + 6√2", "-2√3 - 6√2 + 4"],
    correct_answer: "B",
    explanation: "Summing the two real expressions:\na + b = (-2√3 + 3√2 - 2) + (-3√2 + 2)\n= -2√3 + (3√2 - 3√2) + (-2 + 2)\n= -2√3 + 0 + 0 = -2√3.",
    topic_name: "Real Number System & Radicals",
    instruction_category: "Mathematics"
  },
  {
    question_number: 2,
    question_text: "If b is a fixed positive number, which one of the following is true about graphs of the given linear functions?",
    option_a: "The graph of f(x) = -2x - b is straight line.",
    option_b: "The graph of f(x) = bx is horizontal.",
    option_c: "The graph of f(x) = -2x + b is increasing.",
    option_d: "The graph of f(x) = 2x - b is decreasing.",
    options: [
      "The graph of f(x) = -2x - b is straight line.",
      "The graph of f(x) = bx is horizontal.",
      "The graph of f(x) = -2x + b is increasing.",
      "The graph of f(x) = 2x - b is decreasing."
    ],
    correct_answer: "A",
    explanation: "Any first-degree polynomial function of the form f(x) = mx + c represents a straight line on the Cartesian plane. Since f(x) = -2x - b has slope m = -2 and y-intercept -b, its graph is a straight line.",
    topic_name: "Linear Functions",
    instruction_category: "Mathematics"
  },
  {
    question_number: 3,
    question_text: "Consider a circle that has diameter AB of length 8 cm. If you fold the circle over AB, then what is the area of the part of the circle on one part of the diameter (in cm²)?",
    option_a: "8π",
    option_b: "16π",
    option_c: "32π",
    option_d: "64π",
    options: ["8π", "16π", "32π", "64π"],
    correct_answer: "A",
    explanation: "Given diameter d = 8 cm, the radius r = 4 cm.\nTotal area of the circle = πr² = π(4)² = 16π cm².\nFolding the circle across its diameter AB divides the circle into two identical semicircles. The area of one semicircular part = (16π) / 2 = 8π cm².",
    topic_name: "Plane Geometry - Circles",
    instruction_category: "Mathematics"
  },
  {
    question_number: 4,
    question_text: "Let A = \n[  3  -3   6 ]\n[ -6   9  12 ]\n[ 12  -6   3 ]\nThen 1/3 A is equal to:",
    option_a: "[  9  -9  18 ]\n[-18  27  36 ]\n[ 36 -18   9 ]",
    option_b: "[  1  -1   2 ]\n[ -6   9  12 ]\n[ 12  -6   3 ]",
    option_c: "[  1  -1   2 ]\n[ -2   3   4 ]\n[  4  -2   1 ]",
    option_d: "[  1  -3   6 ]\n[ -3   9  12 ]\n[  4  -6   3 ]",
    options: [
      "[  9  -9  18 ]\n[-18  27  36 ]\n[ 36 -18   9 ]",
      "[  1  -1   2 ]\n[ -6   9  12 ]\n[ 12  -6   3 ]",
      "[  1  -1   2 ]\n[ -2   3   4 ]\n[  4  -2   1 ]",
      "[  1  -3   6 ]\n[ -3   9  12 ]\n[  4  -6   3 ]"
    ],
    correct_answer: "C",
    explanation: "Scalar multiplication of a matrix multiplies every single element in the matrix by 1/3:\nRow 1: [3/3, -3/3, 6/3] = [1, -1, 2]\nRow 2: [-6/3, 9/3, 12/3] = [-2, 3, 4]\nRow 3: [12/3, -6/3, 3/3] = [4, -2, 1].",
    topic_name: "Matrices & Scalar Multiplication",
    instruction_category: "Mathematics"
  },
  {
    question_number: 5,
    question_text: "In how many different ways can 6 people be seated at a round table?",
    option_a: "130",
    option_b: "310",
    option_c: "120",
    option_d: "720",
    options: ["130", "310", "120", "720"],
    correct_answer: "C",
    explanation: "The number of circular permutations of n distinct objects is given by (n - 1)!.\nFor n = 6: (6 - 1)! = 5! = 5 * 4 * 3 * 2 * 1 = 120 ways.",
    topic_name: "Permutations & Combinations",
    instruction_category: "Mathematics"
  },
  {
    question_number: 6,
    question_text: "A library has registered the following data about daily book borrowers for ten consecutive days:\n72, 84, 36, 84, 36, 30, 54, 92, 55, 83\nWhat is the range of the data?",
    option_a: "30",
    option_b: "62",
    option_c: "92",
    option_d: "84",
    options: ["30", "62", "92", "84"],
    correct_answer: "B",
    explanation: "Range = Maximum Value - Minimum Value.\nMaximum value = 92, Minimum value = 30.\nRange = 92 - 30 = 62.",
    topic_name: "Statistics - Measures of Dispersion",
    instruction_category: "Mathematics"
  },
  {
    question_number: 7,
    question_text: "The table shows the score of 12 students in mathematics:\nScores (x): 9, 7, 6, 5\nStudents (f): 4, 2, 4, 2\nWhat is the mean score of the students?",
    option_a: "7",
    option_b: "2.25",
    option_c: "6",
    option_d: "2.16",
    options: ["7", "2.25", "6", "2.16"],
    correct_answer: "A",
    explanation: "Mean = Σ(f * x) / Σf\n= [(9 * 4) + (7 * 2) + (6 * 4) + (5 * 2)] / (4 + 2 + 4 + 2)\n= [36 + 14 + 24 + 10] / 12 = 84 / 12 = 7.",
    topic_name: "Statistics - Weighted Mean",
    instruction_category: "Mathematics"
  },
  {
    question_number: 8,
    question_text: "Which one of the following is the value of sin(-600°)?",
    option_a: "-√3/2",
    option_b: "-1/2",
    option_c: "√3/2",
    option_d: "1/2",
    options: ["-√3/2", "-1/2", "√3/2", "1/2"],
    correct_answer: "C",
    explanation: "Adding 2 * 360° = 720° to find the positive coterminal angle:\n-600° + 720° = 120°.\nsin(-600°) = sin(120°) = sin(180° - 60°) = sin(60°) = √3/2.",
    topic_name: "Trigonometry - Periodic Functions",
    instruction_category: "Mathematics"
  },
  {
    question_number: 9,
    question_text: "What is the solution set of the greatest integer equation [1 - x] = 3?",
    option_a: "[-2, 3)",
    option_b: "(2, 3]",
    option_c: "[2, 3)",
    option_d: "(-3, -2]",
    options: ["[-2, 3)", "(2, 3]", "[2, 3)", "(-3, -2]"],
    correct_answer: "D",
    explanation: "By definition of the floor (greatest integer) function, [u] = 3 ⇔ 3 ≤ u < 4.\n3 ≤ 1 - x < 4\nSubtract 1: 2 ≤ -x < 3\nMultiply by -1 (reverses inequality signs): -2 ≥ x > -3 ⇔ -3 < x ≤ -2.\nIn interval notation, the solution set is (-3, -2].",
    topic_name: "Floor & Greatest Integer Functions",
    instruction_category: "Mathematics"
  },
  {
    question_number: 10,
    question_text: "When the circle (x - 3)² + (y - 1)² = 1 is reflected on a line y = 2x, then the image of the circle is:",
    option_a: "(x - 1)² + (y - 2)² = 1",
    option_b: "(x + 3)² + (y + 2)² = 1",
    option_c: "(x + 3)² + (y - 1)² = 1",
    option_d: "(x + 1)² + (y - 3)² = 1",
    options: [
      "(x - 1)² + (y - 2)² = 1",
      "(x + 3)² + (y + 2)² = 1",
      "(x + 3)² + (y - 1)² = 1",
      "(x + 1)² + (y - 3)² = 1"
    ],
    correct_answer: "D",
    explanation: "Original circle center is C(3, 1) and radius r = 1.\nReflecting the center point (3, 1) across the line y = 2x yields the reflected center C'(-1, 3).\nThe radius remains r = 1 under reflection (isometry).\nTherefore, the image circle equation is (x - (-1))² + (y - 3)² = 1 ⇒ (x + 1)² + (y - 3)² = 1.",
    topic_name: "Transformations - Reflections",
    instruction_category: "Mathematics"
  },
  {
    question_number: 11,
    question_text: "Let f(x) = x³ + 3x² - 9x + 7. Then, the graph of f is decreasing on:",
    option_a: "(-∞, -3] ∪ [1, ∞)",
    option_b: "[-3, ∞)",
    option_c: "(-∞, 1]",
    option_d: "[-3, 1]",
    options: ["(-∞, -3] ∪ [1, ∞)", "[-3, ∞)", "(-∞, 1]", "[-3, 1]"],
    correct_answer: "D",
    explanation: "A function is decreasing where its first derivative f'(x) ≤ 0.\nf'(x) = 3x² + 6x - 9 = 3(x² + 2x - 3) = 3(x + 3)(x - 1).\nSetting 3(x + 3)(x - 1) ≤ 0 yields the closed interval [-3, 1].",
    topic_name: "Differential Calculus - Monotonicity",
    instruction_category: "Mathematics"
  },
  {
    question_number: 12,
    question_text: "A person deposits Birr 6000 at the end of each year into a saving account that pays 10% interest compounded annually. What is the future value of the annuity after 3 years?",
    option_a: "14,414",
    option_b: "12,000",
    option_c: "18,230",
    option_d: "19,860",
    options: ["14,414", "12,000", "18,230", "19,860"],
    correct_answer: "D",
    explanation: "Future Value of an ordinary annuity: FV = P * [((1 + r)ⁿ - 1) / r]\nGiven P = 6000, r = 0.10, n = 3:\nFV = 6000 * [((1.10)³ - 1) / 0.10] = 6000 * [(1.331 - 1) / 0.10] = 6000 * [0.331 / 0.10] = 6000 * 3.31 = 19,860 Birr.",
    topic_name: "Financial Mathematics - Annuities",
    instruction_category: "Mathematics"
  },
  {
    question_number: 13,
    question_text: "What is the value of x in the equation 3 * ⁵√(3x)⁵ = 18?",
    option_a: "3",
    option_b: "6",
    option_c: "2",
    option_d: "9",
    options: ["3", "6", "2", "9"],
    correct_answer: "C",
    explanation: "Since ⁵√(3x)⁵ = 3x for odd roots:\n3 * (3x) = 18 ⇒ 9x = 18 ⇒ x = 2.",
    topic_name: "Radicals and Radical Equations",
    instruction_category: "Mathematics"
  },
  {
    question_number: 14,
    question_text: "What are the vertex and line of symmetry of the function y = 2x² - 4x + 3 respectively?",
    option_a: "(2, -8) and x = 2",
    option_b: "(-2, 3/2) and x = -2",
    option_c: "(-1, 1) and x = -1",
    option_d: "(1, 1) and x = 1",
    options: [
      "(2, -8) and x = 2",
      "(-2, 3/2) and x = -2",
      "(-1, 1) and x = -1",
      "(1, 1) and x = 1"
    ],
    correct_answer: "D",
    explanation: "For a quadratic y = ax² + bx + c:\nx-coordinate of vertex = -b / (2a) = -(-4) / (2 * 2) = 4 / 4 = 1.\ny-coordinate = 2(1)² - 4(1) + 3 = 2 - 4 + 3 = 1.\nVertex is (1, 1) and the vertical axis of symmetry is x = 1.",
    topic_name: "Quadratic Functions & Parabolas",
    instruction_category: "Mathematics"
  },
  {
    question_number: 15,
    question_text: "Consider the circle centered at O, and a cyclic quadrilateral ABCD in the circle where angle A = (x + 40)°, angle B = 2x°, angle C = (2x - 10)°, and angle D = y°.\nWhat is the value of y?",
    option_a: "100",
    option_b: "90",
    option_c: "80",
    option_d: "75",
    options: ["100", "90", "80", "75"],
    correct_answer: "C",
    explanation: "In a cyclic quadrilateral, opposite interior angles are supplementary (sum to 180°):\n1) ∠A + ∠C = 180° ⇒ (x + 40) + (2x - 10) = 180° ⇒ 3x + 30 = 180° ⇒ 3x = 150° ⇒ x = 50°.\n2) ∠B + ∠D = 180° ⇒ 2x + y = 180° ⇒ 2(50°) + y = 180° ⇒ 100° + y = 180° ⇒ y = 80°.",
    topic_name: "Geometry - Cyclic Quadrilaterals",
    instruction_category: "Mathematics"
  },
  {
    question_number: 16,
    question_text: "Which of the following matrices is row equivalent to matrix:\n[ 2  -2   3 ]\n[ 2   1   0 ]\n[ 1  -1  -4 ]",
    option_a: "[ 1  -2  10 ]\n[ 1   1  -4 ]\n[ 0   3   1 ]",
    option_b: "[ 2  -2   3 ]\n[ 0  -3   3 ]\n[ 0   0  11 ]",
    option_c: "[ 2  -2   3 ]\n[ 0   3   0 ]\n[ 0   0  14 ]",
    option_d: "[ 4   0   0 ]\n[ 2  -2   0 ]\n[ 1   0  -4 ]",
    options: [
      "[ 1  -2  10 ]\n[ 1   1  -4 ]\n[ 0   3   1 ]",
      "[ 2  -2   3 ]\n[ 0  -3   3 ]\n[ 0   0  11 ]",
      "[ 2  -2   3 ]\n[ 0   3   0 ]\n[ 0   0  14 ]",
      "[ 4   0   0 ]\n[ 2  -2   0 ]\n[ 1   0  -4 ]"
    ],
    correct_answer: "B",
    explanation: "Performing elementary row operations:\nOriginal: R1 = [2, -2, 3], R2 = [2, 1, 0], R3 = [1, -1, -4].\nR2' = R1 - R2 = [2-2, -2-1, 3-0] = [0, -3, 3].\n2*R3 - R1 = [2-2, -2-(-2), -8-3] = [0, 0, -11], which scaled is row equivalent to [0, 0, 11].\nThus, matrix B is row equivalent.",
    topic_name: "Matrices - Row Equivalence & Gaussian Elimination",
    instruction_category: "Mathematics"
  },
  {
    question_number: 17,
    question_text: "An outcome of a random experiment is said to be a favorable outcome if:",
    option_a: "it can be predicted in advance.",
    option_b: "it is the set of all possible results of the experiment.",
    option_c: "it insures the occurrence of particular result.",
    option_d: "it has equal chance of being chosen.",
    options: [
      "it can be predicted in advance.",
      "it is the set of all possible results of the experiment.",
      "it insures the occurrence of particular result.",
      "it has equal chance of being chosen."
    ],
    correct_answer: "C",
    explanation: "In probability theory, a favorable outcome is any specific elementary event that satisfies the given condition of interest, thereby insuring the occurrence of that particular specified event result.",
    topic_name: "Probability - Basic Definitions",
    instruction_category: "Mathematics"
  },
  {
    question_number: 18,
    question_text: "Let L and S be the largest and smallest values of the given data respectively. The coefficient of range of the data is a relative measure given by:",
    option_a: "(L - S) / L",
    option_b: "(L - S) / S",
    option_c: "(L - S) / (L + S)",
    option_d: "(L + S) / (L - S)",
    options: ["(L - S) / L", "(L - S) / S", "(L - S) / (L + S)", "(L + S) / (L - S)"],
    correct_answer: "C",
    explanation: "The coefficient of range is a dimensionless relative measure of dispersion defined as: Coefficient of Range = (L - S) / (L + S).",
    topic_name: "Statistics - Relative Measures of Dispersion",
    instruction_category: "Mathematics"
  },
  {
    question_number: 19,
    question_text: "Which one of the following is true about a given natural number?",
    option_a: "It is composite if it has more than two factors.",
    option_b: "It is prime if it has exactly three factors.",
    option_c: "It is composite if it has exactly two factors.",
    option_d: "It is prime if it has more than two factors.",
    options: [
      "It is composite if it has more than two factors.",
      "It is prime if it has exactly three factors.",
      "It is composite if it has exactly two factors.",
      "It is prime if it has more than two factors."
    ],
    correct_answer: "A",
    explanation: "A natural number greater than 1 is prime if it has exactly two positive distinct factors (1 and itself). A natural number is composite if it has strictly more than two positive factors.",
    topic_name: "Number Theory - Prime & Composite Numbers",
    instruction_category: "Mathematics"
  },
  {
    question_number: 20,
    question_text: "Which one of the following is the use of standard deviation?",
    option_a: "It gives the maximum value of the data.",
    option_b: "It measures the central tendency.",
    option_c: "It gives the average value of a given data.",
    option_d: "It measures the scatter of a given data.",
    options: [
      "It gives the maximum value of the data.",
      "It measures the central tendency.",
      "It gives the average value of a given data.",
      "It measures the scatter of a given data."
    ],
    correct_answer: "D",
    explanation: "Standard deviation is a fundamental statistical metric that quantifies the amount of variation, dispersion, or scatter of a set of data values around their arithmetic mean.",
    topic_name: "Statistics - Standard Deviation",
    instruction_category: "Mathematics"
  },
  {
    question_number: 21,
    question_text: "Which one of the following is correct about trigonometric values of angles?",
    option_a: "tan(157°) = tan(23°)",
    option_b: "sin(157°) = sin(23°)",
    option_c: "cos(157°) = sin(23°)",
    option_d: "cos(157°) = cos(23°)",
    options: [
      "tan(157°) = tan(23°)",
      "sin(157°) = sin(23°)",
      "cos(157°) = sin(23°)",
      "cos(157°) = cos(23°)"
    ],
    correct_answer: "B",
    explanation: "Since 157° and 23° are supplementary angles (157° + 23° = 180°):\nsin(180° - θ) = sin(θ) ⇒ sin(157°) = sin(180° - 23°) = sin(23°).",
    topic_name: "Trigonometric Identities - Supplementary Angles",
    instruction_category: "Mathematics"
  },
  {
    question_number: 22,
    question_text: "What is the simplified form of the expression ((x + 3)/x ÷ (x - 2)/(x - 3)) * ((x² - 2x)/(x² - 9)) over its domain?",
    option_a: "1",
    option_b: "(x - 2)(x + 3) / (x² - 3x)",
    option_c: "(x² - 2) / (x² - 9)",
    option_d: "(x - 2)/x",
    options: [
      "1",
      "(x - 2)(x + 3) / (x² - 3x)",
      "(x² - 2) / (x² - 9)",
      "(x - 2)/x"
    ],
    correct_answer: "A",
    explanation: "Step 1: Invert and multiply the division part:\n((x + 3)/x) * ((x - 3)/(x - 2)) = [(x + 3)(x - 3)] / [x(x - 2)] = (x² - 9) / [x(x - 2)].\nStep 2: Multiply by the second term:\n[(x² - 9) / (x(x - 2))] * [x(x - 2) / (x² - 9)] = 1.",
    topic_name: "Rational Algebraic Expressions",
    instruction_category: "Mathematics"
  },
  {
    question_number: 23,
    question_text: "In a certain entrance examination, the following data of results is recorded:\n12, 19, 15, 22, 53, 61, 57, 22, 18, 68, 72, 80, 83, 75, 76, 85, 85\nThen, which one of the following is true about the data?",
    option_a: "The value of Q3 - Q1 is 55.",
    option_b: "The third quartile, Q3 of the data is 76.",
    option_c: "The second quartile, Q2 of the data is 61.",
    option_d: "The first quartile, Q1 of the data is 21.",
    options: [
      "The value of Q3 - Q1 is 55.",
      "The third quartile, Q3 of the data is 76.",
      "The second quartile, Q2 of the data is 61.",
      "The first quartile, Q1 of the data is 21."
    ],
    correct_answer: "C",
    explanation: "Arranging all 17 observations in ascending order:\n12, 15, 18, 19, 22, 22, 53, 57, [61], 68, 72, 75, 76, 80, 83, 85, 85.\nSince n = 17, the median (second quartile Q2) is the 9th observation = 61.",
    topic_name: "Statistics - Quartiles & Medians",
    instruction_category: "Mathematics"
  },
  {
    question_number: 24,
    question_text: "Water is being poured into a circular cylinder of radius 50 cm at a rate of change of volume 5000π cm³/sec. What is the rate of change of height of the level of water in the cylinder when the height is 40 cm?",
    option_a: "2 cm/sec",
    option_b: "1/100 cm/sec",
    option_c: "10 cm/sec",
    option_d: "1/10 cm/sec",
    options: ["2 cm/sec", "1/100 cm/sec", "10 cm/sec", "1/10 cm/sec"],
    correct_answer: "A",
    explanation: "Volume of a cylinder: V = πr²h. Since radius r = 50 cm is constant:\nV = π(50)²h = 2500π h.\nDifferentiating with respect to time t:\ndV/dt = 2500π (dh/dt).\n5000π = 2500π (dh/dt) ⇒ dh/dt = 5000π / 2500π = 2 cm/sec.",
    topic_name: "Differential Calculus - Related Rates",
    instruction_category: "Mathematics"
  },
  {
    question_number: 25,
    question_text: "For a ≥ 0, which one of the following numbers is NOT equal to a^(2/5)?",
    option_a: "(⁵√a)²",
    option_b: "⁵√(a²)",
    option_c: "(a⁵)^(1/2)",
    option_d: "(a^(1/5))²",
    options: ["(⁵√a)²", "⁵√(a²)", "(a⁵)^(1/2)", "(a^(1/5))²"],
    correct_answer: "C",
    explanation: "(a⁵)^(1/2) = a^(5 * 1/2) = a^(5/2), which is NOT equal to a^(2/5).\nAll other options simplify exactly to a^(2/5).",
    topic_name: "Exponents and Radicals",
    instruction_category: "Mathematics"
  },
  {
    question_number: 26,
    question_text: "Which one of the diagrams represents a vector with direction East 42° South?",
    option_a: "Diagram A",
    option_b: "Diagram B",
    option_c: "Diagram C",
    option_d: "Diagram D",
    options: ["Diagram A", "Diagram B", "Diagram C", "Diagram D"],
    correct_answer: "D",
    explanation: "A direction of East 42° South starts pointing toward East (positive x-axis) and rotates 42° clockwise toward South (negative y-axis) into the 4th quadrant, which is correctly illustrated in Diagram D.",
    topic_name: "Vectors - Bearings & Coordinate Systems",
    instruction_category: "Mathematics"
  },
  {
    question_number: 27,
    question_text: "Let x be an angle in the second quadrant. If tan x = -√3, then which of the following is true about the other trigonometric values of angle x?",
    option_a: "csc x = -2√3/3",
    option_b: "sin x = 1/2",
    option_c: "cot x = -√3/3",
    option_d: "sec x = -2",
    options: ["csc x = -2√3/3", "sin x = 1/2", "cot x = -√3/3", "sec x = -2"],
    correct_answer: "D",
    explanation: "In Quadrant II with tan x = -√3, the reference angle is 60°, so x = 120°.\ncos(120°) = -1/2 ⇒ sec(120°) = 1 / (-1/2) = -2.\n(Also, sin(120°) = √3/2, csc(120°) = 2√3/3, cot(120°) = -1/√3 = -√3/3).",
    topic_name: "Trigonometry - Quadrant Values",
    instruction_category: "Mathematics"
  },
  {
    question_number: 28,
    question_text: "Which one of the following is true about the function f defined by f(x) = (3x² + 3x - 6) / (x² - 1)?",
    option_a: "Its x-intercepts are (-2, 0) and (1, 0), and its y-intercept is (0, 6).",
    option_b: "Its x-intercepts are (-2, 0) and (1, 0), and its y-intercept is (0, -6).",
    option_c: "Its x-intercept is (1, 0) and its y-intercept is (0, -6).",
    option_d: "Its x-intercept is (-2, 0) and its y-intercept is (0, 6).",
    options: [
      "Its x-intercepts are (-2, 0) and (1, 0), and its y-intercept is (0, 6).",
      "Its x-intercepts are (-2, 0) and (1, 0), and its y-intercept is (0, -6).",
      "Its x-intercept is (1, 0) and its y-intercept is (0, -6).",
      "Its x-intercept is (-2, 0) and its y-intercept is (0, 6)."
    ],
    correct_answer: "D",
    explanation: "f(x) = [3(x + 2)(x - 1)] / [(x - 1)(x + 1)] = 3(x + 2) / (x + 1) for x ≠ 1.\nSetting f(x) = 0 ⇒ x = -2 (x = 1 is a removable discontinuity / hole, not an intercept).\ny-intercept: f(0) = 3(0 + 2)/(0 + 1) = 6 ⇒ (0, 6).\nTherefore, x-intercept is (-2, 0) and y-intercept is (0, 6).",
    topic_name: "Rational Functions - Intercepts & Discontinuities",
    instruction_category: "Mathematics"
  },
  {
    question_number: 29,
    question_text: "Which one of the following is NOT true about the mode of the given data?",
    option_a: "The data 12, 12, 12, 12, 12 has no mode.",
    option_b: "The data 2, 4, 9, 3, 9, 5, 3, 4, 2 is multimodal.",
    option_c: "The data 4, 2, 7, 9, 7, 2 is bimodal.",
    option_d: "The data 4, 6, 7, 9, 3, 5, 4 is unimodal.",
    options: [
      "The data 12, 12, 12, 12, 12 has no mode.",
      "The data 2, 4, 9, 3, 9, 5, 3, 4, 2 is multimodal.",
      "The data 4, 2, 7, 9, 7, 2 is bimodal.",
      "The data 4, 6, 7, 9, 3, 5, 4 is unimodal."
    ],
    correct_answer: "A",
    explanation: "When all data values are identical (12, 12, 12, 12, 12), the mode is 12 (unimodal), so stating it has no mode is NOT true.",
    topic_name: "Statistics - Measures of Central Tendency",
    instruction_category: "Mathematics"
  },
  {
    question_number: 30,
    question_text: "Which one of the following expressions is equal to ∫ (4x³ - 3x⁻⁴ + 5) dx? (C is constant real number)",
    option_a: "12x² + 12x⁻⁵ + 5x + C",
    option_b: "x⁴/4 + 3/5 x⁻⁵ + 5x + C",
    option_c: "4x⁴ - 3x⁻³ + 5x + C",
    option_d: "x⁴ + x⁻³ + 5x + C",
    options: [
      "12x² + 12x⁻⁵ + 5x + C",
      "x⁴/4 + 3/5 x⁻⁵ + 5x + C",
      "4x⁴ - 3x⁻³ + 5x + C",
      "x⁴ + x⁻³ + 5x + C"
    ],
    correct_answer: "D",
    explanation: "Integrating term-by-term:\n∫ 4x³ dx = 4(x⁴/4) = x⁴\n∫ -3x⁻⁴ dx = -3(x⁻³/(-3)) = +x⁻³\n∫ 5 dx = 5x\nTotal integral = x⁴ + x⁻³ + 5x + C.",
    topic_name: "Integral Calculus - Indefinite Integrals",
    instruction_category: "Mathematics"
  },
  {
    question_number: 31,
    question_text: "Which one of the following statements defines regular polygon?",
    option_a: "It is a convex polygon with all sides are congruent and the measures of all angles are equal.",
    option_b: "It is a simple concave closed curve with all its sides are equal in length.",
    option_c: "It is a simple concave closed curve formed by union of three or more line segments.",
    option_d: "It is a convex polygon formed by union of three or more-line segments.",
    options: [
      "It is a convex polygon with all sides are congruent and the measures of all angles are equal.",
      "It is a simple concave closed curve with all its sides are equal in length.",
      "It is a simple concave closed curve formed by union of three or more line segments.",
      "It is a convex polygon formed by union of three or more-line segments."
    ],
    correct_answer: "A",
    explanation: "A regular polygon is defined as a convex polygon that is both equilateral (all sides equal in length) and equiangular (all interior angles equal in measure).",
    topic_name: "Plane Geometry - Polygons",
    instruction_category: "Mathematics"
  },
  {
    question_number: 32,
    question_text: "Consider the graph of the decreasing exponential function f passing through (-1, 2.5) and (0, 1).\nWhich one of the following represents the graph of f?",
    option_a: "f(x) = (0.25)ˣ",
    option_b: "f(x) = (2.5)⁻ˣ",
    option_c: "f(x) = (3/2)^(2x)",
    option_d: "f(x) = (3/2)ˣ",
    options: [
      "f(x) = (0.25)ˣ",
      "f(x) = (2.5)⁻ˣ",
      "f(x) = (3/2)^(2x)",
      "f(x) = (3/2)ˣ"
    ],
    correct_answer: "B",
    explanation: "For an exponential function f(x) = aˣ:\nf(-1) = a⁻¹ = 2.5 ⇒ a = 1 / 2.5 = 0.4.\nThen f(x) = (0.4)ˣ = (1 / 2.5)ˣ = (2.5)⁻ˣ.",
    topic_name: "Exponential Functions & Graphs",
    instruction_category: "Mathematics"
  },
  {
    question_number: 33,
    question_text: "A point (5, 2) is on a circle, where the center of the circle is (1, -1). Then what is the standard form of equation of the circle?",
    option_a: "(x + 1)² + (y - 1)² = 25",
    option_b: "(x - 2)² + (y - 5)² = 37",
    option_c: "(x - 5)² + (y - 2)² = 25",
    option_d: "(x - 1)² + (y + 1)² = 25",
    options: [
      "(x + 1)² + (y - 1)² = 25",
      "(x - 2)² + (y - 5)² = 37",
      "(x - 5)² + (y - 2)² = 25",
      "(x - 1)² + (y + 1)² = 25"
    ],
    correct_answer: "D",
    explanation: "Given center (h, k) = (1, -1).\nRadius r = √[(5 - 1)² + (2 - (-1))²] = √[4² + 3²] = √[16 + 9] = √25 = 5.\nr² = 25.\nStandard equation: (x - 1)² + (y - (-1))² = 25 ⇒ (x - 1)² + (y + 1)² = 25.",
    topic_name: "Coordinate Geometry - Circles",
    instruction_category: "Mathematics"
  },
  {
    question_number: 34,
    question_text: "Which one of the following quantities represents scalar?",
    option_a: "Force applied to lift damaged car from main road.",
    option_b: "The direction and distance moved by a bullet.",
    option_c: "Speed of a car observed on speedometer.",
    option_d: "The direction of a wind, measured by wind vane.",
    options: [
      "Force applied to lift damaged car from main road.",
      "The direction and distance moved by a bullet.",
      "Speed of a car observed on speedometer.",
      "The direction of a wind, measured by wind vane."
    ],
    correct_answer: "C",
    explanation: "A scalar is a physical quantity having magnitude only with no specified direction. Speed (measured by a speedometer) is scalar, whereas force, displacement, and wind direction are vectors.",
    topic_name: "Scalars & Vectors",
    instruction_category: "Mathematics"
  },
  {
    question_number: 35,
    question_text: "A contest offers 17 prizes. The first prize is worth Birr 6,000 and each successive prize is worth Birr 300 less than the preceding prize. What is the total value of the prizes in Birr?",
    option_a: "142,800",
    option_b: "61,200",
    option_c: "94,600",
    option_d: "47,300",
    options: ["142,800", "61,200", "94,600", "47,300"],
    correct_answer: "B",
    explanation: "This forms an Arithmetic Progression with first term a = 6000, common difference d = -300, and number of terms n = 17.\nSum Sₙ = (n/2) * [2a + (n - 1)d]\nS₁₇ = (17/2) * [2(6000) + 16(-300)] = (17/2) * [12000 - 4800] = (17/2) * 7200 = 17 * 3600 = 61,200 Birr.",
    topic_name: "Sequences & Series - Arithmetic Progression",
    instruction_category: "Mathematics"
  },
  {
    question_number: 36,
    question_text: "A company manufactures two products P and Q. Product P requires 2 hours on machine A and 1 hour on machine B. Product Q requires 1 hour on machine A and 1 hour on machine B. Machine A is available for at most 10 hours a day. Machine B is available for at most 8 hours a day. The profit for product P is Birr 40. The profit for product Q is Birr 30. How many units of P and Q should be produced to maximize the profit?",
    option_a: "4 units of P and 5 units of Q",
    option_b: "10 units of P and 2 units of Q",
    option_c: "2 units of P and 6 units of Q",
    option_d: "4 units of P and 8 units of Q",
    options: [
      "4 units of P and 5 units of Q",
      "10 units of P and 2 units of Q",
      "2 units of P and 6 units of Q",
      "4 units of P and 8 units of Q"
    ],
    correct_answer: "C",
    explanation: "Objective: Maximize Z = 40P + 30Q.\nConstraints: 2P + Q ≤ 10, P + Q ≤ 8, P ≥ 0, Q ≥ 0.\nCorner points:\n1. (0, 0) ⇒ Z = 0\n2. (5, 0) ⇒ Z = 40(5) = 200\n3. (0, 8) ⇒ Z = 30(8) = 240\n4. Intersection of 2P + Q = 10 and P + Q = 8:\nSubtracting equations: P = 2, so Q = 8 - 2 = 6.\nZ(2, 6) = 40(2) + 30(6) = 80 + 180 = 260 Birr (Maximum profit).\nTherefore, producing 2 units of P and 6 units of Q maximizes profit.",
    topic_name: "Linear Programming - Optimization",
    instruction_category: "Mathematics"
  },
  {
    question_number: 37,
    question_text: "What is the solution of the simultaneous equations:\n2x - y = -1\n-4x + 3y = 9",
    option_a: "(-3, -1)",
    option_b: "(3, 7)",
    option_c: "(0, 3)",
    option_d: "(-3, -5)",
    options: ["(-3, -1)", "(3, 7)", "(0, 3)", "(-3, -5)"],
    correct_answer: "B",
    explanation: "From equation 1: y = 2x + 1.\nSubstitute into equation 2:\n-4x + 3(2x + 1) = 9 ⇒ -4x + 6x + 3 = 9 ⇒ 2x = 6 ⇒ x = 3.\nThen y = 2(3) + 1 = 7.\nSolution is (3, 7).",
    topic_name: "Systems of Linear Equations",
    instruction_category: "Mathematics"
  },
  {
    question_number: 38,
    question_text: "Which one of the following is the degree of the polynomial function f defined by f(x) = x²(x - 4)(x² + 2)?",
    option_a: "3",
    option_b: "5",
    option_c: "4",
    option_d: "2",
    options: ["3", "5", "4", "2"],
    correct_answer: "B",
    explanation: "The degree of the product of polynomials is the sum of the degrees of the individual factors:\nDegree = 2 + 1 + 2 = 5.",
    topic_name: "Polynomial Functions - Degrees",
    instruction_category: "Mathematics"
  },
  {
    question_number: 39,
    question_text: "Given a regular square pyramid with base edge 8 cm and slant height 5 cm. What is the total surface area in cm²?",
    option_a: "144",
    option_b: "80",
    option_c: "64",
    option_d: "40",
    options: ["144", "80", "64", "40"],
    correct_answer: "A",
    explanation: "Base area = s² = 8² = 64 cm².\nLateral surface area = 4 * (1/2 * base * slant height) = 4 * (1/2 * 8 * 5) = 80 cm².\nTotal Surface Area = Base Area + Lateral Area = 64 + 80 = 144 cm².",
    topic_name: "Solid Geometry - Pyramids & Surface Area",
    instruction_category: "Mathematics"
  },
  {
    question_number: 40,
    question_text: "Which one of the following is true about homogeneity of system of linear equations?",
    option_a: "The system x - 2y - 1 = 0, x + 2y - 3 = 0, x - z + 5 = 0 is homogeneous.",
    option_b: "The system x - 2y + 4z = 0, 3x + 2y + 9z = 0 is homogeneous.",
    option_c: "The system x + y = 0, x + 2y + 3z = 0, z = 0 is nonhomogeneous.",
    option_d: "The system x - 2y = 0, 3x + 4y = 0 is nonhomogeneous.",
    options: [
      "The system x - 2y - 1 = 0, x + 2y - 3 = 0, x - z + 5 = 0 is homogeneous.",
      "The system x - 2y + 4z = 0, 3x + 2y + 9z = 0 is homogeneous.",
      "The system x + y = 0, x + 2y + 3z = 0, z = 0 is nonhomogeneous.",
      "The system x - 2y = 0, 3x + 4y = 0 is nonhomogeneous."
    ],
    correct_answer: "B",
    explanation: "A system of linear equations Ax = b is defined as homogeneous if and only if all constant terms on the right-hand side are zero (b = 0). System B satisfies this definition identically.",
    topic_name: "Linear Algebra - Homogeneous Systems",
    instruction_category: "Mathematics"
  },
  {
    question_number: 41,
    question_text: "Which of the following is equal to Σ(k=1 to 6) (k - 1)²?",
    option_a: "1 + 3 + 6 + 12 + 16 + 18",
    option_b: "1 + 4 + 9 + 16 + 25 + 36",
    option_c: "0 + 1 + 4 + 9 + 16 + 25",
    option_d: "0 + 2 + 6 + 8 + 10 + 12",
    options: [
      "1 + 3 + 6 + 12 + 16 + 18",
      "1 + 4 + 9 + 16 + 25 + 36",
      "0 + 1 + 4 + 9 + 16 + 25",
      "0 + 2 + 6 + 8 + 10 + 12"
    ],
    correct_answer: "C",
    explanation: "Evaluating for k = 1 to 6:\nk=1: (1-1)² = 0\nk=2: (2-1)² = 1\nk=3: (3-1)² = 4\nk=4: (4-1)² = 9\nk=5: (5-1)² = 16\nk=6: (6-1)² = 25\nSum = 0 + 1 + 4 + 9 + 16 + 25.",
    topic_name: "Sigma Notation & Sums",
    instruction_category: "Mathematics"
  },
  {
    question_number: 42,
    question_text: "Consider a positively skewed frequency curve (tail stretching to the right). Which one of the following is true about the relative position of the measures of central tendency?",
    option_a: "Median < Mode < Mean",
    option_b: "Mode < Median < Mean",
    option_c: "Median < Mean < Mode",
    option_d: "Mean < Median < Mode",
    options: [
      "Median < Mode < Mean",
      "Mode < Median < Mean",
      "Median < Mean < Mode",
      "Mean < Median < Mode"
    ],
    correct_answer: "B",
    explanation: "In a positively (right) skewed distribution, extreme high values pull the mean to the far right, so the relationship is always: Mode < Median < Mean.",
    topic_name: "Statistics - Skewness & Central Tendency",
    instruction_category: "Mathematics"
  },
  {
    question_number: 43,
    question_text: "If f(x) = ln(x² + 1) and g(x) = eˣ, then (f ∘ g)'(0) is equal to:",
    option_a: "1",
    option_b: "2",
    option_c: "1/2",
    option_d: "0",
    options: ["1", "2", "1/2", "0"],
    correct_answer: "A",
    explanation: "(f ∘ g)(x) = f(g(x)) = ln((eˣ)² + 1) = ln(e²ˣ + 1).\nDifferentiating with respect to x using the Chain Rule:\n(f ∘ g)'(x) = 2e²ˣ / (e²ˣ + 1).\nEvaluating at x = 0:\n(f ∘ g)'(0) = 2e⁰ / (e⁰ + 1) = 2(1) / (1 + 1) = 2 / 2 = 1.",
    topic_name: "Calculus - Chain Rule & Logarithmic Differentiation",
    instruction_category: "Mathematics"
  },
  {
    question_number: 44,
    question_text: "What is the limit of (√(x² - x) - x) as x approaches infinity?",
    option_a: "-1/2",
    option_b: "1/2",
    option_c: "0",
    option_d: "nonexistent",
    options: ["-1/2", "1/2", "0", "nonexistent"],
    correct_answer: "A",
    explanation: "Multiplying by the conjugate:\n[√(x² - x) - x] * [√(x² - x) + x] / [√(x² - x) + x]\n= [(x² - x) - x²] / [√(x² - x) + x] = -x / [x(√(1 - 1/x) + 1)] = -1 / (√(1 - 1/x) + 1).\nAs x → ∞, 1/x → 0, so Limit = -1 / (√1 + 1) = -1 / 2.",
    topic_name: "Calculus - Limits at Infinity",
    instruction_category: "Mathematics"
  },
  {
    question_number: 45,
    question_text: "The set of all values of k for which the system of equations:\nx + y + z = 1\nx + 2y + 4z = k\nx + 4y + 10z = k²\nis consistent is:",
    option_a: "{1, 2}",
    option_b: "{2, 3}",
    option_c: "{1, 4}",
    option_d: "{1, 3}",
    options: ["{1, 2}", "{2, 3}", "{1, 4}", "{1, 3}"],
    correct_answer: "A",
    explanation: "Row reducing the augmented matrix:\n[1  1  1 | 1]\n[1  2  4 | k]\n[1  4 10 | k²]\n\nR2 - R1 → [0, 1, 3 | k - 1]\nR3 - R1 → [0, 3, 9 | k² - 1]\nR3 - 3*R2 → [0, 0, 0 | (k² - 1) - 3(k - 1)] = [0, 0, 0 | k² - 3k + 2].\nFor consistency, the bottom row must have 0 = k² - 3k + 2 ⇒ (k - 1)(k - 2) = 0 ⇒ k = 1 or k = 2.\nSet of values = {1, 2}.",
    topic_name: "Linear Systems - Consistency & Parameter Conditions",
    instruction_category: "Mathematics"
  },
  {
    question_number: 46,
    question_text: "If u is a vector with initial point (2, 1) and terminal point (-4, 3), then which one of the following is equal to the vector u?",
    option_a: "6i - 2j",
    option_b: "-6i - 2j",
    option_c: "2i + 6j",
    option_d: "-6i + 2j",
    options: ["6i - 2j", "-6i - 2j", "2i + 6j", "-6i + 2j"],
    correct_answer: "D",
    explanation: "Vector u = (x₂ - x₁)i + (y₂ - y₁)j = (-4 - 2)i + (3 - 1)j = -6i + 2j.",
    topic_name: "Vectors in 2D Space",
    instruction_category: "Mathematics"
  },
  {
    question_number: 47,
    question_text: "Let f(x) = x / (x² + 3x + 1). Then, f'(x) is equal to:",
    option_a: "(-x³ - 3x) / (x² + 3x + 1)²",
    option_b: "(3x² + 6x + 1) / (x² + 3x + 1)²",
    option_c: "1 / (2x + 3)",
    option_d: "(1 - x²) / (x² + 3x + 1)²",
    options: [
      "(-x³ - 3x) / (x² + 3x + 1)²",
      "(3x² + 6x + 1) / (x² + 3x + 1)²",
      "1 / (2x + 3)",
      "(1 - x²) / (x² + 3x + 1)²"
    ],
    correct_answer: "D",
    explanation: "Using the Quotient Rule: d/dx [u/v] = (u'v - uv') / v²\nHere u = x ⇒ u' = 1, v = x² + 3x + 1 ⇒ v' = 2x + 3.\nf'(x) = [1 * (x² + 3x + 1) - x * (2x + 3)] / (x² + 3x + 1)²\n= (x² + 3x + 1 - 2x² - 3x) / (x² + 3x + 1)² = (1 - x²) / (x² + 3x + 1)².",
    topic_name: "Calculus - Quotient Rule",
    instruction_category: "Mathematics"
  },
  {
    question_number: 48,
    question_text: "A shopkeeper wants to increase his profit from Birr 3000 to Birr 3600. By what percent will his profit increase?",
    option_a: "20%",
    option_b: "60%",
    option_c: "25%",
    option_d: "30%",
    options: ["20%", "60%", "25%", "30%"],
    correct_answer: "A",
    explanation: "Increase = 3600 - 3000 = 600 Birr.\nPercentage Increase = (600 / 3000) * 100% = 20%.",
    topic_name: "Business Arithmetic - Percent Increase",
    instruction_category: "Mathematics"
  },
  {
    question_number: 49,
    question_text: "Which one of the following sets represents an empty set?",
    option_a: "{x | x ∈ ℝ and √(x²) = x}",
    option_b: "{x | x ∈ ℝ and x² ≤ 0}",
    option_c: "{x | x ∈ ℕ and x ≤ -1}",
    option_d: "{x | x ∈ ℕ and 0 < x ≤ 1}",
    options: [
      "{x | x ∈ ℝ and √(x²) = x}",
      "{x | x ∈ ℝ and x² ≤ 0}",
      "{x | x ∈ ℕ and x ≤ -1}",
      "{x | x ∈ ℕ and 0 < x ≤ 1}"
    ],
    correct_answer: "C",
    explanation: "Natural numbers ℕ = {1, 2, 3, 4, ...} are strictly positive integers. There exists no natural number less than or equal to -1. Thus, {x | x ∈ ℕ and x ≤ -1} is the empty set (∅).",
    topic_name: "Set Theory - Types of Sets",
    instruction_category: "Mathematics"
  },
  {
    question_number: 50,
    question_text: "Let f(x) = 6x⁶ + 4x⁴ + 3x² + 2 and g(x) = 3x² + 2. Then which one of the following is equal to f(x) / g(x)?",
    option_a: "2x⁴ + 3x² + 1",
    option_b: "2x⁴ + 3x² + 2",
    option_c: "2x⁴ + 1",
    option_d: "3x² + 2",
    options: ["2x⁴ + 3x² + 1", "2x⁴ + 3x² + 2", "2x⁴ + 1", "3x² + 2"],
    correct_answer: "C",
    explanation: "Factoring f(x) by grouping:\nf(x) = 2x⁴(3x² + 2) + 1(3x² + 2) = (2x⁴ + 1)(3x² + 2).\nDividing by g(x) = 3x² + 2:\nf(x) / g(x) = [(2x⁴ + 1)(3x² + 2)] / (3x² + 2) = 2x⁴ + 1.",
    topic_name: "Polynomial Division & Factoring",
    instruction_category: "Mathematics"
  },
  {
    question_number: 51,
    question_text: "Let f(x) = \n{ x² - a,  if x ≤ 2\n{ ax - 2,  if x > 2\nIf f is continuous at x = 2, then the value of a is:",
    option_a: "2",
    option_b: "-2",
    option_c: "1",
    option_d: "3",
    options: ["2", "-2", "1", "3"],
    correct_answer: "A",
    explanation: "For continuity at x = 2:\nLeft-hand limit = Right-hand limit\n2² - a = a(2) - 2 ⇒ 4 - a = 2a - 2 ⇒ 3a = 6 ⇒ a = 2.",
    topic_name: "Continuity of Piecewise Functions",
    instruction_category: "Mathematics"
  },
  {
    question_number: 52,
    question_text: "What is the value of the integral from 0 to π of sin³(x) cos(x) dx?",
    option_a: "0",
    option_b: "1/4",
    option_c: "-1/4",
    option_d: "1",
    options: ["0", "1/4", "-1/4", "1"],
    correct_answer: "A",
    explanation: "Using substitution: let u = sin(x), then du = cos(x) dx.\nWhen x = 0, u = sin(0) = 0.\nWhen x = π, u = sin(π) = 0.\nIntegral = ∫₀⁰ u³ du = [u⁴/4]₀⁰ = 0 - 0 = 0.",
    topic_name: "Definite Integrals - U-Substitution",
    instruction_category: "Mathematics"
  },
  {
    question_number: 53,
    question_text: "What is the sum of the series Σ(n=1 to ∞) 1 / (n(n + 1))?",
    option_a: "1",
    option_b: "2",
    option_c: "1/2",
    option_d: "divergent",
    options: ["1", "2", "1/2", "divergent"],
    correct_answer: "A",
    explanation: "Using partial fraction decomposition:\n1 / [n(n + 1)] = 1/n - 1/(n + 1).\nThe partial sum S_N = (1 - 1/2) + (1/2 - 1/3) + ... + (1/N - 1/(N + 1)) = 1 - 1/(N + 1).\nTaking the limit as N → ∞:\nSum = lim_{N→∞} [1 - 1/(N + 1)] = 1 - 0 = 1.",
    topic_name: "Infinite Series - Telescoping Sums",
    instruction_category: "Mathematics"
  },
  {
    question_number: 54,
    question_text: "The school management wants to study grade eleven students' performance. There are ten sections of grade eleven in the school. Three sections of grade eleven are randomly selected and ALL students in these three sections are taken as the sample. Which one of the following is the sampling technique used?",
    option_a: "Multistage sampling technique",
    option_b: "Cluster sampling method",
    option_c: "Stratified sampling technique",
    option_d: "Simple random sampling technique",
    options: [
      "Multistage sampling technique",
      "Cluster sampling method",
      "Stratified sampling technique",
      "Simple random sampling technique"
    ],
    correct_answer: "B",
    explanation: "In cluster sampling, the entire population is divided into natural groups (clusters/sections), a random sample of whole clusters is selected, and every single member within the chosen clusters is surveyed.",
    topic_name: "Sampling Techniques & Methodology",
    instruction_category: "Mathematics"
  },
  {
    question_number: 55,
    question_text: "What are the minimum and the maximum values of z = 2x + 3y subject to the constraints:\nx + y ≥ 2\nx + y ≤ 5\n2y - x ≤ 4\nx ≥ 0, y ≥ 0\nrespectively?",
    option_a: "4 and 13",
    option_b: "6 and 10",
    option_c: "4 and 10",
    option_d: "6 and 13",
    options: ["4 and 13", "6 and 10", "4 and 10", "6 and 13"],
    correct_answer: "A",
    explanation: "Feasible region vertices:\n1. (2, 0) ⇒ z = 2(2) + 3(0) = 4 (Minimum value)\n2. (5, 0) ⇒ z = 2(5) + 3(0) = 10\n3. Intersection of x + y = 5 and 2y - x = 4: Adding gives 3y = 9 ⇒ y = 3, x = 2 ⇒ (2, 3) ⇒ z = 2(2) + 3(3) = 4 + 9 = 13 (Maximum value)\n4. (0, 2) ⇒ z = 2(0) + 3(2) = 6.\nMinimum = 4 and Maximum = 13.",
    topic_name: "Linear Programming - Extreme Value Theorem",
    instruction_category: "Mathematics"
  },
  {
    question_number: 56,
    question_text: "Which one of the following is a convergent series?",
    option_a: "Σ(k=1 to ∞) 5^(k - 2)",
    option_b: "Σ(k=1 to ∞) (2/15)^(1 - k)",
    option_c: "Σ(k=1 to ∞) 4^(k + 1) / 3^(k - 1)",
    option_d: "Σ(k=1 to ∞) 2^(k + 1) / 5^(k - 1)",
    options: [
      "Σ(k=1 to ∞) 5^(k - 2)",
      "Σ(k=1 to ∞) (2/15)^(1 - k)",
      "Σ(k=1 to ∞) 4^(k + 1) / 3^(k - 1)",
      "Σ(k=1 to ∞) 2^(k + 1) / 5^(k - 1)"
    ],
    correct_answer: "D",
    explanation: "For a geometric series Σ a*r^(k-1) to converge, the absolute value of the common ratio |r| must be strictly less than 1.\nIn D: 2^(k + 1) / 5^(k - 1) = 2² * (2/5)^(k - 1) = 4 * (2/5)^(k - 1).\nCommon ratio r = 2/5 = 0.4 < 1. Therefore, series D converges.",
    topic_name: "Infinite Series - Convergence of Geometric Series",
    instruction_category: "Mathematics"
  },
  {
    question_number: 57,
    question_text: "What is the area of a triangle with vertices A(0, 0), B(1, -3) and C(5, 1) (in square units)?",
    option_a: "4",
    option_b: "8",
    option_c: "16",
    option_d: "24",
    options: ["4", "8", "16", "24"],
    correct_answer: "B",
    explanation: "Area = 1/2 * |x_A(y_B - y_C) + x_B(y_C - y_A) + x_C(y_A - y_B)|\n= 1/2 * |0 + 1(1 - 0) + 5(0 - (-3))|\n= 1/2 * |1 + 15| = 1/2 * 16 = 8 square units.",
    topic_name: "Coordinate Geometry - Triangle Area by Coordinates",
    instruction_category: "Mathematics"
  },
  {
    question_number: 58,
    question_text: "Which one of the following pairs of lines are perpendicular to each other?",
    option_a: "y - x + 5 = 0 and y + x - 1 = 0",
    option_b: "y - 2x + 5 = 0 and y - 1/2 x - 6 = 0",
    option_c: "y - 4x - 5 = 0 and y + 4x + 1 = 0",
    option_d: "y - 3x + 5 = 0 and y - 3x + 1 = 0",
    options: [
      "y - x + 5 = 0 and y + x - 1 = 0",
      "y - 2x + 5 = 0 and y - 1/2 x - 6 = 0",
      "y - 4x - 5 = 0 and y + 4x + 1 = 0",
      "y - 3x + 5 = 0 and y - 3x + 1 = 0"
    ],
    correct_answer: "A",
    explanation: "Line 1: y = x - 5 (slope m₁ = 1).\nLine 2: y = -x + 1 (slope m₂ = -1).\nProduct of slopes: m₁ * m₂ = 1 * (-1) = -1. Therefore, the two lines in A are perpendicular.",
    topic_name: "Coordinate Geometry - Perpendicular Lines",
    instruction_category: "Mathematics"
  },
  {
    question_number: 59,
    question_text: "Which one of the following logarithmic equations is correctly related with the corresponding exponential equation?",
    option_a: "log_a(x) = y and x^a = y",
    option_b: "log_a(x) = y and aʸ = x",
    option_c: "log_a(x) = y and xʸ = a",
    option_d: "log_a(x) = y and aˣ = y",
    options: [
      "log_a(x) = y and x^a = y",
      "log_a(x) = y and aʸ = x",
      "log_a(x) = y and xʸ = a",
      "log_a(x) = y and aˣ = y"
    ],
    correct_answer: "B",
    explanation: "By mathematical definition of logarithms: log_a(x) = y is equivalent to the exponential form aʸ = x (with base a > 0, a ≠ 1, x > 0).",
    topic_name: "Logarithmic & Exponential Equivalence",
    instruction_category: "Mathematics"
  },
  {
    question_number: 60,
    question_text: "For any three sets A, B and C which one of the following is NOT true about the intersection of sets?",
    option_a: "A ∩ B = A if A ⊆ B",
    option_b: "A ∩ ∅ = A",
    option_c: "A ∩ B = B ∩ A",
    option_d: "A ∩ (B ∩ C) = (A ∩ B) ∩ C",
    options: [
      "A ∩ B = A if A ⊆ B",
      "A ∩ ∅ = A",
      "A ∩ B = B ∩ A",
      "A ∩ (B ∩ C) = (A ∩ B) ∩ C"
    ],
    correct_answer: "B",
    explanation: "The intersection of any set with the empty set is always the empty set: A ∩ ∅ = ∅. Thus, statement B stating A ∩ ∅ = A is false (NOT true).",
    topic_name: "Set Theory - Set Operations & Identities",
    instruction_category: "Mathematics"
  }
];

module.exports = questions;
