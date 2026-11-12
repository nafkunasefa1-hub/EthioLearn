import { ModuleUnit } from '../modulesData';

export const MATH_UNITS_5_TO_8: ModuleUnit[] = [
  {
    unitNumber: 5,
    title: 'UNIT FIVE: EQUATIONS AND INEQUALITIES',
    description: 'Quadratic equations, discriminant analysis (roots nature), quadratic inequalities (sign chart method), absolute value equations and inequalities, and radical equations.',
    topics: [
      {
        id: 'math-5-1',
        topicNumber: '5.1',
        title: 'Quadratic Equations, Discriminant & Inequalities',
        summary: 'ax² + bx + c = 0, quadratic formula, Δ = b² - 4ac (two distinct real, one double real, two complex roots), sign charts.',
        content: `### 5.1 Quadratic Theory & Inequalities

1. Quadratic Formula & Roots:
• For ax² + bx + c = 0 with a ≠ 0:
  x = (-b ± √(b² - 4ac)) / (2a).
• Sum of roots: x₁ + x₂ = -b / a.
• Product of roots: x₁ · x₂ = c / a.

2. Discriminant (Δ = b² - 4ac):
• Δ > 0: Two distinct real roots.
• Δ = 0: Exactly one real root (repeated/double root).
• Δ < 0: No real roots (two complex conjugate roots).

3. Quadratic Inequalities:
• To solve ax² + bx + c > 0 or < 0:
  1. Find critical roots where ax² + bx + c = 0.
  2. Partition real line into intervals.
  3. Test signs or use parabola orientation (concave up if a > 0, concave down if a < 0).`,
        workedExamples: [
          {
            problem: 'Solve the quadratic inequality: x² - 2x - 8 ≤ 0.',
            solution: 'Factor the quadratic: (x - 4)(x + 2) = 0 ⟹ critical numbers are x = -2 and x = 4.\nSince parabola opens upwards (a = 1 > 0), the expression is ≤ 0 between the roots.\nSolution interval: [-2, 4].'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the nature of the roots of 3x² - 5x + 4 = 0?',
            options: [
              'Two distinct real roots',
              'One double real root',
              'No real roots (two complex roots)',
              'Two rational roots'
            ],
            correctIndex: 2,
            explanation: 'Discriminant Δ = b² - 4ac = (-5)² - 4(3)(4) = 25 - 48 = -23 < 0. Hence, there are no real roots.'
          },
          {
            question: 'If the sum of the roots of ax² - 6x + 8 = 0 is 3, what is the value of a?',
            options: ['1', '2', '3', '4'],
            correctIndex: 1,
            explanation: 'Sum of roots = -b / a = -(-6) / a = 6 / a. Given 6 / a = 3 ⟹ a = 2.'
          },
          {
            question: 'What is the solution set of the inequality x² - 9 > 0?',
            options: ['(-3, 3)', '[-3, 3]', '(-∞, -3) ∪ (3, ∞)', '(-∞, -3] ∪ [3, ∞)'],
            correctIndex: 2,
            explanation: 'x² - 9 > 0 ⟹ (x - 3)(x + 3) > 0. The expression is positive outside the roots: (-∞, -3) ∪ (3, ∞).'
          }
        ]
      },
      {
        id: 'math-5-2',
        topicNumber: '5.2',
        title: 'Absolute Value Equations and Inequalities',
        summary: '|x| definition, |x| = c (c ≥ 0), |x| < c ⟺ -c < x < c, |x| > c ⟺ x < -c or x > c.',
        content: `### 5.2 Absolute Value Principles

1. Definition:
• |x| = x if x ≥ 0, and -x if x < 0.
• Geometric interpretation: Distance from 0 on the real number line.

2. Equations:
• |f(x)| = c:
  - If c < 0: No real solution (empty set ∅).
  - If c = 0: f(x) = 0.
  - If c > 0: f(x) = c or f(x) = -c.
• |f(x)| = |g(x)| ⟺ f(x) = g(x) or f(x) = -g(x).

3. Inequalities:
• |f(x)| ≤ c (c ≥ 0) ⟺ -c ≤ f(x) ≤ c (Intersection / Conjunction).
• |f(x)| ≥ c (c ≥ 0) ⟺ f(x) ≤ -c or f(x) ≥ c (Union / Disjunction).`,
        workedExamples: [
          {
            problem: 'Solve the inequality: |2x - 3| < 7.',
            solution: '-7 < 2x - 3 < 7\nAdd 3: -4 < 2x < 10\nDivide by 2: -2 < x < 5.\nSolution interval: (-2, 5).'
          }
        ],
        practiceQuestions: [
          {
            question: 'Solve for x: |3x + 1| = 10.',
            options: ['x = 3 or x = -11/3', 'x = 3 only', 'x = -3 or x = 11/3', 'x = 3 or x = -3'],
            correctIndex: 0,
            explanation: '3x + 1 = 10 ⟹ 3x = 9 ⟹ x = 3; or 3x + 1 = -10 ⟹ 3x = -11 ⟹ x = -11/3.'
          },
          {
            question: 'What is the solution set of |x - 4| ≥ 5?',
            options: ['(-1, 9)', '[-1, 9]', '(-∞, -1] ∪ [9, ∞)', '(-∞, 1] ∪ [9, ∞)'],
            correctIndex: 2,
            explanation: 'x - 4 ≤ -5 ⟹ x ≤ -1; or x - 4 ≥ 5 ⟹ x ≥ 9. Solution is (-∞, -1] ∪ [9, ∞).'
          },
          {
            question: 'How many real solutions exist for |2x - 5| = -3?',
            options: ['0', '1', '2', 'Infinitely many'],
            correctIndex: 0,
            explanation: 'Absolute value represents non-negative distance; it can never equal a negative number (-3). Thus, 0 solutions exist.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 6,
    title: 'UNIT SIX: RELATIONS AND FUNCTIONS',
    description: 'Relations, domain and range, inverse relations, functions, vertical line test, types of functions (one-to-one, onto, bijective), horizontal line test, function operations, and composition.',
    topics: [
      {
        id: 'math-6-1',
        topicNumber: '6.1',
        title: 'Relations, Domain, Range & Inverses',
        summary: 'Binary relations from A to B, domain (Dom R), range (Ran R), inverse relation R⁻¹ = {(y, x) | (x, y) ∈ R}.',
        content: `### 6.1 Relations and Their Properties

1. Binary Relations:
• A relation R from set A to set B is any subset of the Cartesian product: R ⊆ A × B.
• Domain (Dom R) = {x ∈ A | ∃y ∈ B such that (x, y) ∈ R}.
• Range (Ran R) = {y ∈ B | ∃x ∈ A such that (x, y) ∈ R}.

2. Inverse Relation:
• R⁻¹ = {(y, x) | (x, y) ∈ R}.
• Dom(R⁻¹) = Ran(R) and Ran(R⁻¹) = Dom(R).`,
        workedExamples: [
          {
            problem: 'Let R = {(1, 2), (2, 4), (3, 6)}. Find the domain, range, and inverse relation R⁻¹.',
            solution: 'Dom(R) = {1, 2, 3}.\nRan(R) = {2, 4, 6}.\nInverse R⁻¹ = {(2, 1), (4, 2), (6, 3)}.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the domain of the real-valued relation R = {(x, y) | y = √(16 - x²)}?',
            options: ['(-∞, ∞)', '[0, 4]', '[-4, 4]', '[0, 16]'],
            correctIndex: 2,
            explanation: 'For real values, 16 - x² ≥ 0 ⟹ x² ≤ 16 ⟹ -4 ≤ x ≤ 4. Domain is [-4, 4].'
          },
          {
            question: 'If R = {(1, a), (2, b), (3, c)}, what is the inverse relation R⁻¹?',
            options: [
              '{(a, 1), (b, 2), (c, 3)}',
              '{(1, 1), (2, 2), (3, 3)}',
              '{(c, 1), (b, 2), (a, 3)}',
              '{(a, b), (b, c), (c, a)}'
            ],
            correctIndex: 0,
            explanation: 'The inverse relation swaps each ordered pair: R⁻¹ = {(a, 1), (b, 2), (c, 3)}.'
          },
          {
            question: 'What is the range of the relation y = x² + 3 for all real numbers x?',
            options: ['(-∞, ∞)', '[0, ∞)', '[3, ∞)', '(-∞, 3]'],
            correctIndex: 2,
            explanation: 'Since x² ≥ 0 for all real x, x² + 3 ≥ 3. The range is [3, ∞).'
          }
        ]
      },
      {
        id: 'math-6-2',
        topicNumber: '6.2',
        title: 'Types of Functions, Composition & Inverses',
        summary: 'One-to-one (injective), onto (surjective), bijective, function composition (f ∘ g)(x), inverse function f⁻¹(x).',
        content: `### 6.2 Function Classification & Composition

1. Function Definition:
• A relation f: A ⟶ B where every element of A is mapped to a unique element of B.
• Vertical Line Test: A curve in the xy-plane is a function if every vertical line intersects it at most once.

2. Function Types:
• Injective (One-to-One): f(x₁) = f(x₂) ⟹ x₁ = x₂. (Satisfies Horizontal Line Test).
• Surjective (Onto): Ran(f) = Co-domain B.
• Bijective: Both injective and surjective (has a unique two-sided inverse f⁻¹).

3. Composition and Inverses:
• (f ∘ g)(x) = f(g(x)).
• To find f⁻¹(x): Set y = f(x), swap x and y, and solve for y.
• Symmetry: Graph of f⁻¹ is the reflection of f across the line y = x.`,
        workedExamples: [
          {
            problem: 'Let f(x) = 2x + 5. Find the inverse function f⁻¹(x).',
            solution: 'Set y = 2x + 5. Swap x and y:\nx = 2y + 5 ⟹ 2y = x - 5 ⟹ y = (x - 5) / 2.\nf⁻¹(x) = (x - 5) / 2.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If f(x) = 3x - 4 and g(x) = x² + 1, what is (f ∘ g)(2)?',
            options: ['11', '13', '15', '17'],
            correctIndex: 0,
            explanation: 'g(2) = 2² + 1 = 5. (f ∘ g)(2) = f(g(2)) = f(5) = 3(5) - 4 = 15 - 4 = 11.'
          },
          {
            question: 'What is the inverse of the function f(x) = (x - 3) / 4?',
            options: ['f⁻¹(x) = 4x + 3', 'f⁻¹(x) = 4x - 3', 'f⁻¹(x) = (x + 3) / 4', 'f⁻¹(x) = 3x + 4'],
            correctIndex: 0,
            explanation: 'y = (x - 3) / 4 ⟹ 4y = x - 3 ⟹ x = 4y + 3. Swap variables: f⁻¹(x) = 4x + 3.'
          },
          {
            question: 'Which test determines whether a function is one-to-one (injective)?',
            options: ['Vertical Line Test', 'Horizontal Line Test', 'Integral Test', 'Tangent Test'],
            correctIndex: 1,
            explanation: 'The Horizontal Line Test verifies that no horizontal line intersects the graph more than once, ensuring injectivity.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 7,
    title: 'UNIT SEVEN: COORDINATE GEOMETRY AND CONIC SECTIONS',
    description: 'Lines in coordinate plane (slope, distance, midpoint, parallel/perpendicular conditions), conic sections (circles, parabolas, ellipses, hyperbolas in standard form).',
    topics: [
      {
        id: 'math-7-1',
        topicNumber: '7.1',
        title: 'Lines, Slopes, Equations & Perpendicularity',
        summary: 'Distance formula, midpoint formula, slope m = Δy/Δx, parallel lines (m₁ = m₂), perpendicular lines (m₁ · m₂ = -1).',
        content: `### 7.1 Linear Coordinate Geometry

1. Coordinate Formulas:
• Distance between P₁(x₁, y₁) and P₂(x₂, y₂):
  d = √((x₂ - x₁)² + (y₂ - y₁)²).
• Midpoint: M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2).
• Slope: m = (y₂ - y₁) / (x₂ - x₁) (x₁ ≠ x₂).

2. Forms of Linear Equations:
• Slope-Intercept Form: y = mx + b.
• Point-Slope Form: y - y₁ = m(x - x₁).
• General Form: Ax + By + C = 0 (Slope m = -A / B).

3. Parallel and Perpendicular Lines:
• Parallel Lines: m₁ = m₂.
• Perpendicular Lines: m₁ · m₂ = -1 ⟹ m₂ = -1 / m₁.`,
        workedExamples: [
          {
            problem: 'Find the equation of the line passing through (2, -3) perpendicular to the line 2x - 4y + 5 = 0.',
            solution: 'Given line: 4y = 2x + 5 ⟹ y = (1/2)x + 5/4. Slope m₁ = 1/2.\nPerpendicular slope m₂ = -1 / (1/2) = -2.\nUsing point-slope form with (2, -3):\ny - (-3) = -2(x - 2) ⟹ y + 3 = -2x + 4 ⟹ y = -2x + 1 (or 2x + y - 1 = 0).'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the slope of a line perpendicular to 3x + 6y = 12?',
            options: ['-1/2', '1/2', '-2', '2'],
            correctIndex: 3,
            explanation: '6y = -3x + 12 ⟹ y = -(1/2)x + 2. The slope m₁ = -1/2. Perpendicular slope m₂ = -1 / (-1/2) = 2.'
          },
          {
            question: 'What is the distance between the points A(1, -2) and B(4, 2)?',
            options: ['3', '4', '5', '6'],
            correctIndex: 2,
            explanation: 'd = √((4 - 1)² + (2 - (-2))²) = √(3² + 4²) = √(9 + 16) = √25 = 5.'
          },
          {
            question: 'What are the coordinates of the midpoint of the segment joining (-4, 8) and (6, 2)?',
            options: ['(1, 5)', '(2, 5)', '(1, 6)', '(2, 10)'],
            correctIndex: 0,
            explanation: 'Midpoint M = ((-4 + 6)/2, (8 + 2)/2) = (2/2, 10/2) = (1, 5).'
          }
        ]
      },
      {
        id: 'math-7-2',
        topicNumber: '7.2',
        title: 'Conic Sections: Circles, Parabolas, Ellipses & Hyperbolas',
        summary: 'Standard equations of circles (x-h)²+(y-k)²=r², parabolas, ellipses (x²/a² + y²/b² = 1), hyperbolas.',
        content: `### 7.2 Conic Sections

1. Circle:
• Standard Form (center (h, k), radius r):
  (x - h)² + (y - k)² = r².

2. Parabola:
• Vertex at (h, k):
  - Vertical axis (opens up/down): (x - h)² = 4p(y - k). Focus (h, k + p), Directrix y = k - p.
  - Horizontal axis (opens right/left): (y - k)² = 4p(x - h).

3. Ellipse:
• Centered at (h, k) with a > b:
  - Horizontal Major Axis: ((x - h)² / a²) + ((y - k)² / b²) = 1.
  - c² = a² - b², Foci at (h ± c, k), Eccentricity e = c / a < 1.

4. Hyperbola:
• Horizontal Transverse Axis:
  ((x - h)² / a²) - ((y - k)² / b²) = 1.
  - c² = a² + b², Foci at (h ± c, k), Asymptotes y - k = ±(b/a)(x - h).`,
        workedExamples: [
          {
            problem: 'Find the center and radius of the circle given by x² + y² - 6x + 8y = 0.',
            solution: 'Complete the square:\n(x² - 6x + 9) + (y² + 8y + 16) = 9 + 16\n(x - 3)² + (y + 4)² = 25.\nCenter is (3, -4) and radius r = √25 = 5.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the center and radius of the circle with equation (x + 2)² + (y - 5)² = 49?',
            options: [
              'Center (-2, 5), radius 7',
              'Center (2, -5), radius 7',
              'Center (-2, 5), radius 49',
              'Center (2, -5), radius 49'
            ],
            correctIndex: 0,
            explanation: 'Comparing with (x - h)² + (y - k)² = r² gives h = -2, k = 5, and r = √49 = 7.'
          },
          {
            question: 'For an ellipse with equation x²/25 + y²/9 = 1, what are the coordinates of its foci?',
            options: ['(±4, 0)', '(0, ±4)', '(±5, 0)', '(0, ±3)'],
            correctIndex: 0,
            explanation: 'a² = 25, b² = 9. c² = a² - b² = 25 - 9 = 16 ⟹ c = 4. Since a² is under x², foci are on x-axis: (±4, 0).'
          },
          {
            question: 'What is the vertex of the parabola (y - 2)² = 8(x + 3)?',
            options: ['(3, -2)', '(-3, 2)', '(2, -3)', '(-2, 3)'],
            correctIndex: 1,
            explanation: 'Comparing with (y - k)² = 4p(x - h) yields h = -3, k = 2. Vertex is (-3, 2).'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 8,
    title: 'UNIT EIGHT: TRIGONOMETRIC FUNCTIONS',
    description: 'Radian and degree measures, arc length, unit circle definition of trig ratios, graphs, fundamental and Pythagorean identities, addition/double-angle formulas, Law of Sines, and Law of Cosines.',
    topics: [
      {
        id: 'math-8-1',
        topicNumber: '8.1',
        title: 'Radian Measure, Unit Circle & Trig Ratios',
        summary: '180° = π rad, s = rθ, unit circle x = cos θ, y = sin θ, signs in CAST quadrants.',
        content: `### 8.1 Trigonometric Fundamentals

1. Radian and Degree Conversions:
• π radians = 180° ⟹ 1 rad = 180° / π ≈ 57.3°; 1° = π / 180° rad.
• Arc Length: s = r · θ (where θ is in radians).
• Sector Area: A = (1/2) · r² · θ.

2. Unit Circle & Six Trigonometric Ratios:
• Points on unit circle (r = 1): (cos θ, sin θ).
• tan θ = sin θ / cos θ; cot θ = cos θ / sin θ.
• sec θ = 1 / cos θ; csc θ = 1 / sin θ.
• CAST Rule (Quadrants I to IV):
  - Q I (0 to π/2): All positive.
  - Q II (π/2 to π): Sin (and Csc) positive.
  - Q III (π to 3π/2): Tan (and Cot) positive.
  - Q IV (3π/2 to 2π): Cos (and Sec) positive.`,
        workedExamples: [
          {
            problem: 'Convert 150° to radians, and find the exact value of sin(150°) and cos(150°).',
            solution: '150° × (π / 180°) = 5π/6 radians.\n150° is in Quadrant II, reference angle = 180° - 150° = 30°.\nsin(150°) = +sin(30°) = 1/2.\ncos(150°) = -cos(30°) = -√3/2.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the length of an arc that subtends a central angle of π/3 radians in a circle of radius 12 cm?',
            options: ['2π cm', '4π cm', '6π cm', '8π cm'],
            correctIndex: 1,
            explanation: 'Arc length s = r · θ = 12 × (π/3) = 4π cm.'
          },
          {
            question: 'In which quadrant is sin θ < 0 and cos θ > 0?',
            options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
            correctIndex: 3,
            explanation: 'Cosine is positive and sine is negative in Quadrant IV (CAST rule).'
          },
          {
            question: 'What is the exact value of tan(225°)?',
            options: ['-1', '1', '√3', '-√3'],
            correctIndex: 1,
            explanation: '225° is in Quadrant III where tangent is positive. Reference angle = 225° - 180° = 45°. tan(225°) = +tan(45°) = 1.'
          }
        ]
      },
      {
        id: 'math-8-2',
        topicNumber: '8.2',
        title: 'Trigonometric Identities & Equations',
        summary: 'Pythagorean identities sin²θ + cos²θ = 1, double angle formulas, sum/difference identities, solving trig equations.',
        content: `### 8.2 Trigonometric Identities

1. Pythagorean Identities:
• sin²θ + cos²θ = 1.
• 1 + tan²θ = sec²θ.
• 1 + cot²θ = csc²θ.

2. Sum and Difference Formulas:
• sin(A ± B) = sin A cos B ± cos A sin B.
• cos(A ± B) = cos A cos B ∓ sin A sin B.
• tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B).

3. Double-Angle Formulas:
• sin(2θ) = 2 sin θ cos θ.
• cos(2θ) = cos²θ - sin²θ = 2 cos²θ - 1 = 1 - 2 sin²θ.
• tan(2θ) = (2 tan θ) / (1 - tan²θ).`,
        workedExamples: [
          {
            problem: 'If sin θ = 3/5 and θ is in Quadrant I, find the exact value of sin(2θ).',
            solution: 'In Q I, cos θ = √(1 - sin²θ) = √(1 - 9/25) = 4/5.\nsin(2θ) = 2 sin θ cos θ = 2(3/5)(4/5) = 24/25.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Simplify the expression: (1 - cos²θ) · csc²θ.',
            options: ['0', '1', 'tan²θ', 'sin²θ'],
            correctIndex: 1,
            explanation: '1 - cos²θ = sin²θ. Therefore, sin²θ · csc²θ = sin²θ · (1 / sin²θ) = 1.'
          },
          {
            question: 'What is the exact value of cos(2θ) if cos θ = 1/3?',
            options: ['-7/9', '7/9', '-1/9', '1/9'],
            correctIndex: 0,
            explanation: 'cos(2θ) = 2 cos²θ - 1 = 2(1/3)² - 1 = 2(1/9) - 1 = 2/9 - 9/9 = -7/9.'
          },
          {
            question: 'Solve for θ in [0, 2π): 2 sin θ - 1 = 0.',
            options: ['π/6 and 5π/6', 'π/3 and 2π/3', 'π/4 and 3π/4', '7π/6 and 11π/6'],
            correctIndex: 0,
            explanation: 'sin θ = 1/2. In [0, 2π), sine is positive in Quadrants I and II: θ = π/6 and θ = π - π/6 = 5π/6.'
          }
        ]
      },
      {
        id: 'math-8-3',
        topicNumber: '8.3',
        title: 'Laws of Sines and Cosines & Triangle Areas',
        summary: 'Law of Sines a/sin A = b/sin B = c/sin C, Law of Cosines c² = a² + b² - 2ab cos C, Area = (1/2)ab sin C.',
        content: `### 8.3 Non-Right Triangle Trigonometry

1. Law of Sines:
• a / sin A = b / sin B = c / sin C = 2R (where R is circumradius).
• Applied when given: AAS, ASA, or SSA (ambiguous case).

2. Law of Cosines:
• c² = a² + b² - 2ab cos C.
• cos C = (a² + b² - c²) / (2ab).
• Applied when given: SAS or SSS.

3. Area of a Triangle:
• Area = (1/2) ab sin C = (1/2) bc sin A = (1/2) ac sin B.
• Heron\'s Formula (given three sides): Area = √(s(s - a)(s - b)(s - c)), where semi-perimeter s = (a + b + c) / 2.`,
        workedExamples: [
          {
            problem: 'In △ABC, side a = 5 cm, side b = 8 cm, and included angle C = 60°. Find the length of side c.',
            solution: 'Using the Law of Cosines:\nc² = a² + b² - 2ab cos C\nc² = 5² + 8² - 2(5)(8) cos(60°)\nc² = 25 + 64 - 80(0.5) = 89 - 40 = 49\nc = √49 = 7 cm.'
          }
        ],
        practiceQuestions: [
          {
            question: 'In △ABC, a = 6 cm, b = 10 cm, and angle C = 30°. What is the area of the triangle?',
            options: ['15 cm²', '30 cm²', '15√3 cm²', '60 cm²'],
            correctIndex: 0,
            explanation: 'Area = (1/2) ab sin C = (1/2)(6)(10) sin(30°) = 30 × 0.5 = 15 cm².'
          },
          {
            question: 'In △ABC, if a/sin A = 14, what is the diameter of the circumscribed circle?',
            options: ['7', '14', '28', '49'],
            correctIndex: 1,
            explanation: 'By the extended Law of Sines, a / sin A = 2R = Diameter. Therefore, Diameter = 14.'
          },
          {
            question: 'If the sides of a triangle are 7 cm, 8 cm, and 9 cm, what is the semi-perimeter s used in Heron\'s formula?',
            options: ['12 cm', '14 cm', '24 cm', '28 cm'],
            correctIndex: 0,
            explanation: 'Semi-perimeter s = (7 + 8 + 9) / 2 = 24 / 2 = 12 cm.'
          }
        ]
      }
    ]
  }
];
