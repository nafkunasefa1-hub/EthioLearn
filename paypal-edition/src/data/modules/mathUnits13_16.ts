import { ModuleUnit } from '../modulesData';

export const MATH_UNITS_13_TO_16: ModuleUnit[] = [
  {
    unitNumber: 13,
    title: 'UNIT THIRTEEN: LINEAR PROGRAMMING',
    description: 'Linear inequalities in two variables, feasible regions, convex polygonal sets, objective function, and optimization via the Corner Point (Vertex) Method.',
    topics: [
      {
        id: 'math-13-1',
        topicNumber: '13.1',
        title: 'Linear Inequalities in Two Variables & Feasible Regions',
        summary: 'Half-planes, boundary lines Ax + By = C, system of constraints, bounded vs unbounded feasible regions.',
        content: `### 13.1 Graphing Linear Inequalities & Feasible Regions

1. Linear Inequalities in Two Variables:
• Expressions of the form Ax + By ≤ C, ≥ C, < C, or > C.
• Boundary line Ax + By = C divides the Cartesian plane into two open half-planes.
• Solid line indicates inclusive (≤ or ≥); dashed line indicates strict (< or >).
• Test Point Method: Substitute (0, 0) (or any point not on boundary) to identify the true half-plane.

2. Feasible Region:
• The intersection of all half-planes determined by the simultaneous linear constraints and non-negativity restrictions (x ≥ 0, y ≥ 0).
• Convex Polygon Property: Any line segment connecting two points in the feasible region lies entirely within the region.`,
        workedExamples: [
          {
            problem: 'Determine whether the point (2, 3) lies within the feasible region defined by: x + y ≤ 6, 2x - y ≥ 0, x ≥ 0, y ≥ 0.',
            solution: 'Check constraint 1: 2 + 3 = 5 ≤ 6 (True).\nCheck constraint 2: 2(2) - 3 = 4 - 3 = 1 ≥ 0 (True).\nCheck non-negativity: 2 ≥ 0 and 3 ≥ 0 (True).\nSince all constraints are satisfied, (2, 3) lies in the feasible region.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which test point is commonly chosen to determine the shaded half-plane when the boundary line does NOT pass through the origin?',
            options: ['(1, 1)', '(0, 0)', '(-1, -1)', '(10, 10)'],
            correctIndex: 1,
            explanation: 'The origin (0, 0) provides the fastest arithmetic test when the line does not pass through it.'
          },
          {
            question: 'The non-negativity constraints x ≥ 0 and y ≥ 0 restrict the feasible region to which quadrant of the coordinate plane?',
            options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
            correctIndex: 0,
            explanation: 'Both x and y are non-negative strictly in Quadrant I.'
          },
          {
            question: 'If a feasible region can be completely enclosed within a circle of finite radius, the region is classified as:',
            options: ['Unbounded', 'Bounded', 'Empty', 'Infeasible'],
            correctIndex: 1,
            explanation: 'A bounded region is finite in extent and enclosed by constraints on all sides.'
          }
        ]
      },
      {
        id: 'math-13-2',
        topicNumber: '13.2',
        title: 'Optimization: The Corner Point Method',
        summary: 'Objective function z = ax + by, Fundamental Theorem of Linear Programming, evaluating vertices for max/min.',
        content: `### 13.2 The Corner Point (Vertex) Optimization Method

1. Fundamental Theorem of Linear Programming:
• If an optimal value (maximum or minimum) of an objective function z = ax + by exists over a bounded polygonal feasible region, it occurs at one or more of the corner points (vertices) of the region.

2. Systematic Procedure:
• Step 1: Graph the constraint inequalities and identify the feasible region.
• Step 2: Determine coordinates of all corner points (vertices) by solving pairwise linear system intersections.
• Step 3: Evaluate objective function z = ax + by at every corner point.
• Step 4: Identify the maximum (largest z) or minimum (smallest z) value.`,
        workedExamples: [
          {
            problem: 'Maximize z = 3x + 2y subject to vertices at (0, 0), (4, 0), (2, 4), and (0, 5).',
            solution: 'At (0, 0): z = 3(0) + 2(0) = 0.\nAt (4, 0): z = 3(4) + 2(0) = 12.\nAt (2, 4): z = 3(2) + 2(4) = 6 + 8 = 14.\nAt (0, 5): z = 3(0) + 2(5) = 10.\nMaximum value is z = 14, occurring at corner point (2, 4).'
          }
        ],
        practiceQuestions: [
          {
            question: 'Where must the optimal maximum or minimum value of a linear objective function occur on a bounded feasible set?',
            options: [
              'At the geometric center of the region',
              'At one or more corner points (vertices)',
              'Along the steepest constraint boundary',
              'Always at the origin (0, 0)'
            ],
            correctIndex: 1,
            explanation: 'By the Fundamental Theorem of Linear Programming, extrema occur at the vertices (corner points) of the feasible polygon.'
          },
          {
            question: 'If the vertices of a feasible region are (0, 0), (3, 0), (2, 3), and (0, 4), what is the minimum value of z = 4x - 2y?',
            options: ['-8', '0', '2', '12'],
            correctIndex: 0,
            explanation: 'At (0, 0): z = 0. At (3, 0): z = 12. At (2, 3): z = 8 - 6 = 2. At (0, 4): z = 0 - 8 = -8. Minimum is -8.'
          },
          {
            question: 'If two adjacent corner points yield the identical maximum value of the objective function, how many optimal solutions exist?',
            options: [
              'Only those 2 points',
              'Exactly 4 solutions',
              'Infinitely many solutions along the line segment joining the two vertices',
              'No solution exists'
            ],
            correctIndex: 2,
            explanation: 'Every point on the line segment connecting the two optimal vertices yields the same optimal value.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 14,
    title: 'UNIT FOURTEEN: MATHEMATICAL APPLICATIONS IN STATISTICS',
    description: 'Grouped and ungrouped data, frequency distributions, histograms, cumulative frequency ogives, measures of central tendency (mean, median, mode), and measures of dispersion (range, variance, standard deviation).',
    topics: [
      {
        id: 'math-14-1',
        topicNumber: '14.1',
        title: 'Frequency Distributions & Visual Data',
        summary: 'Class intervals, class width, class marks x_i = (L + U)/2, histograms, frequency polygons, and cumulative ogives.',
        content: `### 14.1 Organizing Statistical Data

1. Frequency Distributions:
• Class Limits: Lower Limit (L) and Upper Limit (U).
• Class Mark (Midpoint): x_i = (Lower Limit + Upper Limit) / 2.
• Class Width: w = Upper Boundary - Lower Boundary.

2. Graphical Representations:
• Histogram: Adjacent vertical bars where area is proportional to class frequency.
• Frequency Polygon: Connecting the midpoints of histogram tops.
• Cumulative Frequency Curve (Ogive): Plots cumulative frequency against upper class boundaries, useful for finding percentiles and medians.`,
        workedExamples: [
          {
            problem: 'For the class interval 20 - 29, find the class limits, class boundaries, and class mark.',
            solution: 'Lower limit = 20, Upper limit = 29.\nClass boundaries: 19.5 to 29.5.\nClass width = 29.5 - 19.5 = 10.\nClass mark x_i = (20 + 29) / 2 = 24.5.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the class mark (midpoint) of the interval 40 - 49?',
            options: ['44', '44.5', '45', '45.5'],
            correctIndex: 1,
            explanation: 'Class mark = (40 + 49) / 2 = 89 / 2 = 44.5.'
          },
          {
            question: 'Which graphical chart plots cumulative frequency against upper class boundaries to read medians and quartiles?',
            options: ['Histogram', 'Frequency polygon', 'Ogive curve', 'Scatter plot'],
            correctIndex: 2,
            explanation: 'An ogive (cumulative frequency curve) displays cumulative totals against class boundaries.'
          },
          {
            question: 'If the lower class boundary is 19.5 and the upper boundary is 29.5, what is the class width?',
            options: ['9', '9.5', '10', '10.5'],
            correctIndex: 2,
            explanation: 'Class width = Upper boundary - Lower boundary = 29.5 - 19.5 = 10.'
          }
        ]
      },
      {
        id: 'math-14-2',
        topicNumber: '14.2',
        title: 'Measures of Central Tendency (Mean, Median, Mode)',
        summary: 'Mean x̄ = (∑ f_i x_i)/N, median position and grouped formula, mode as most frequent value.',
        content: `### 14.2 Measures of Central Tendency

1. Arithmetic Mean (x̄):
• Ungrouped: x̄ = (∑ x_i) / n.
• Grouped: x̄ = (∑ f_i x_i) / (∑ f_i).

2. Median:
• Middle value dividing data into two equal halves.
• Grouped formula: Median = L + [((N/2 - CF_prev) / f_median) · w].

3. Mode:
• Value that occurs with the highest frequency.
• Empirical Relationship: Mode ≈ 3 · Median - 2 · Mean (for moderately skewed distributions).`,
        workedExamples: [
          {
            problem: 'Find the mean, median, and mode of data: 4, 7, 7, 8, 9, 10, 11.',
            solution: 'Mean = (4 + 7 + 7 + 8 + 9 + 10 + 11) / 7 = 56 / 7 = 8.\nMedian (4th value of 7 ordered items) = 8.\nMode (appears twice) = 7.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the median of the dataset: 12, 5, 8, 14, 9, 11, 3?',
            options: ['8', '9', '10', '11'],
            correctIndex: 1,
            explanation: 'Arranging in ascending order: 3, 5, 8, 9, 11, 12, 14. With 7 elements, the middle (4th) element is 9.'
          },
          {
            question: 'If a dataset has a mean of 24 and a median of 22, what is the approximate mode using the empirical relationship?',
            options: ['18', '20', '26', '28'],
            correctIndex: 0,
            explanation: 'Empirical mode ≈ 3(Median) - 2(Mean) = 3(22) - 2(24) = 66 - 48 = 18.'
          },
          {
            question: 'Which measure of central tendency is most severely distorted by extreme outliers?',
            options: ['Median', 'Arithmetic Mean', 'Mode', 'Interquartile range'],
            correctIndex: 1,
            explanation: 'The arithmetic mean incorporates every numerical value and is pulled toward extreme outlier values.'
          }
        ]
      },
      {
        id: 'math-14-3',
        topicNumber: '14.3',
        title: 'Measures of Dispersion (Variance & Standard Deviation)',
        summary: 'Range, variance s² = (∑(x_i - x̄)²)/(n - 1), standard deviation s = √s², coefficient of variation CV = (s/x̄) × 100%.',
        content: `### 14.3 Measures of Statistical Dispersion

1. Range:
• Range = Maximum Value - Minimum Value.

2. Variance (s² or σ²):
• Population Variance: σ² = (∑ (x_i - μ)²) / N.
• Sample Variance: s² = (∑ (x_i - x̄)²) / (n - 1).
• Computational Formula: s² = [(∑ x_i²) - ((∑ x_i)² / n)] / (n - 1).

3. Standard Deviation (s or σ):
• s = √(Variance).
• Units are identical to the original data measurements.

4. Coefficient of Variation (CV):
• Measure of relative variability: CV = (s / x̄) × 100%. Useful for comparing dispersion between datasets with different units or scales.`,
        workedExamples: [
          {
            problem: 'Calculate the variance and standard deviation of numbers: 2, 4, 6, 8, 10.',
            solution: 'Mean x̄ = (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6.\nDeviations: -4, -2, 0, 2, 4.\nSquared deviations: 16, 4, 0, 4, 16. Sum = 40.\nPopulation variance σ² = 40 / 5 = 8.\nStandard deviation σ = √8 = 2√2 ≈ 2.83.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the variance of a dataset where every single value is identical (e.g. 7, 7, 7, 7)?',
            options: ['0', '1', '7', '49'],
            correctIndex: 0,
            explanation: 'Since every value equals the mean (x_i = x̄), all deviations are zero, so variance is 0.'
          },
          {
            question: 'If the variance of a set of exam scores is 64, what is the standard deviation?',
            options: ['4', '8', '16', '32'],
            correctIndex: 1,
            explanation: 'Standard deviation = √(Variance) = √64 = 8.'
          },
          {
            question: 'If every value in a dataset is multiplied by 3, what happens to the standard deviation?',
            options: ['It remains unchanged', 'It increases by 3', 'It is multiplied by 3', 'It is multiplied by 9'],
            correctIndex: 2,
            explanation: 'Multiplying all data by constant c scales the standard deviation by |c|: new SD = 3 × original SD.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 15,
    title: 'UNIT FIFTEEN: FURTHER ON PROBABILITY',
    description: 'Permutations, combinations, axioms of probability, addition rule, conditional probability P(A|B) = P(A ∩ B)/P(B), independent events, and Bayes\' Theorem.',
    topics: [
      {
        id: 'math-15-1',
        topicNumber: '15.1',
        title: 'Counting Principles, Permutations & Combinations',
        summary: 'Fundamental principle of counting, permutations nPr = n!/(n-r)!, combinations nCr = n!/(r!(n-r)!).',
        content: `### 15.1 Combinatorics in Probability

1. Multiplication Rule of Counting:
• If an experiment consists of k successive steps with n₁, n₂, ..., n_k outcomes, total outcomes = n₁ × n₂ × ... × n_k.

2. Permutations (Arrangements where order matters):
• P(n, r) = n! / (n - r)!.
• Circular Permutations of n distinct objects = (n - 1)!.
• Permutations with repetitions: n! / (n₁! n₂! ... n_k!).

3. Combinations (Selections where order does NOT matter):
• C(n, r) = n! / [r! (n - r)!].`,
        workedExamples: [
          {
            problem: 'In how many ways can 4 students be seated in a row of 4 chairs?',
            solution: 'P(4, 4) = 4! = 4 × 3 × 2 × 1 = 24 ways.'
          }
        ],
        practiceQuestions: [
          {
            question: 'How many different 3-person committees can be formed from a group of 8 candidates?',
            options: ['24', '56', '336', '512'],
            correctIndex: 1,
            explanation: 'Order does not matter: C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56.'
          },
          {
            question: 'How many distinct permutations can be formed using all letters of the word "LEVEL"?',
            options: ['30', '60', '120', '24'],
            correctIndex: 0,
            explanation: 'LEVEL has 5 letters with 2 L\'s and 2 E\'s: 5! / (2! × 2!) = 120 / 4 = 30.'
          },
          {
            question: 'In how many ways can 5 people be seated around a circular table?',
            options: ['24', '60', '120', '720'],
            correctIndex: 0,
            explanation: 'Circular permutation of n objects is (n - 1)! = (5 - 1)! = 4! = 24.'
          }
        ]
      },
      {
        id: 'math-15-2',
        topicNumber: '15.2',
        title: 'Probability Rules & Conditional Probability',
        summary: 'Sample spaces, axioms 0 ≤ P(E) ≤ 1, addition rule P(A ∪ B) = P(A) + P(B) - P(A ∩ B), conditional probability.',
        content: `### 15.2 Probability Axioms and Conditional Probability

1. Axiomatic Rules:
• 0 ≤ P(A) ≤ 1 for any event A.
• P(S) = 1 (Sample space certainty).
• Complement Rule: P(A\') = 1 - P(A).
• Addition Rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).
  - If A and B are mutually exclusive (disjoint): P(A ∩ B) = 0 ⟹ P(A ∪ B) = P(A) + P(B).

2. Conditional Probability:
• Probability of A given that B has already occurred:
  P(A | B) = P(A ∩ B) / P(B) (provided P(B) > 0).
• Multiplication Rule: P(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A).`,
        workedExamples: [
          {
            problem: 'If P(A) = 0.6, P(B) = 0.4, and P(A ∩ B) = 0.2, find P(A | B) and P(A ∪ B).',
            solution: 'P(A | B) = P(A ∩ B) / P(B) = 0.2 / 0.4 = 0.5.\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.6 + 0.4 - 0.2 = 0.8.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If events A and B are mutually exclusive with P(A) = 0.35 and P(B) = 0.45, what is P(A ∪ B)?',
            options: ['0.1575', '0.70', '0.80', '1.00'],
            correctIndex: 2,
            explanation: 'For mutually exclusive events, P(A ∪ B) = P(A) + P(B) = 0.35 + 0.45 = 0.80.'
          },
          {
            question: 'If P(A ∩ B) = 0.18 and P(B) = 0.60, what is P(A | B)?',
            options: ['0.108', '0.30', '0.42', '0.78'],
            correctIndex: 1,
            explanation: 'P(A | B) = P(A ∩ B) / P(B) = 0.18 / 0.60 = 0.30.'
          },
          {
            question: 'What is the probability of rolling a sum of at least 11 with two standard six-sided dice?',
            options: ['1/12', '1/18', '1/9', '5/36'],
            correctIndex: 0,
            explanation: 'Sums ≥ 11 are 11 (5,6), (6,5) and 12 (6,6) ⟹ 3 favorable outcomes out of 36. Probability = 3/36 = 1/12.'
          }
        ]
      },
      {
        id: 'math-15-3',
        topicNumber: '15.3',
        title: 'Independent Events & Bayes\' Theorem',
        summary: 'P(A ∩ B) = P(A) · P(B) for independence, Law of Total Probability, Bayes\' Theorem.',
        content: `### 15.3 Independent Events & Bayes\' Theorem

1. Independent Events:
• Two events A and B are statistically independent if the occurrence of one does not affect the other:
  P(A | B) = P(A) ⟺ P(A ∩ B) = P(A) · P(B).
• Note: Independent events are NOT mutually exclusive (unless one has probability 0).

2. Law of Total Probability:
• If B₁, B₂, ..., B_k form a partition of sample space S:
  P(A) = ∑_{i=1}^k P(B_i) · P(A | B_i).

3. Bayes\' Theorem:
• Revising prior probabilities given new evidence A:
  P(B_j | A) = (P(B_j) · P(A | B_j)) / [∑_{i=1}^k P(B_i) · P(A | B_i)].`,
        workedExamples: [
          {
            problem: 'Factory machine M1 produces 60% of items (2% defective) and M2 produces 40% (4% defective). An item chosen at random is defective. What is the probability it was produced by M1?',
            solution: 'P(M1) = 0.60, P(D|M1) = 0.02. P(M2) = 0.40, P(D|M2) = 0.04.\nP(D) = (0.60)(0.02) + (0.40)(0.04) = 0.012 + 0.016 = 0.028.\nBy Bayes\' theorem: P(M1|D) = (0.60 × 0.02) / 0.028 = 0.012 / 0.028 = 12 / 28 = 3/7 ≈ 0.4286.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If A and B are independent events with P(A) = 0.5 and P(B) = 0.4, what is P(A ∩ B)?',
            options: ['0.1', '0.2', '0.9', '0.02'],
            correctIndex: 1,
            explanation: 'For independent events, P(A ∩ B) = P(A) · P(B) = 0.5 × 0.4 = 0.20.'
          },
          {
            question: 'If two fair coins are tossed, what is the probability of obtaining two heads?',
            options: ['1/2', '1/3', '1/4', '1/8'],
            correctIndex: 2,
            explanation: 'Tosses are independent: P(H₁) · P(H₂) = (1/2) × (1/2) = 1/4.'
          },
          {
            question: 'What mathematical principle calculates posterior probability P(B|A) using conditional likelihoods P(A|B)?',
            options: ['Markov inequality', 'Bayes\' Theorem', 'Central Limit Theorem', 'Chebyshev\'s rule'],
            correctIndex: 1,
            explanation: 'Bayes\' Theorem updates the prior probability of an event given observed conditional evidence.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 16,
    title: 'UNIT SIXTEEN: INTRODUCTION TO CALCULUS',
    description: 'Limits of functions, indeterminate forms 0/0, continuity, definition of derivative, rules of differentiation (power, product, quotient, chain), applications (tangents, extrema, concavity), and introduction to definite/indefinite integrals.',
    topics: [
      {
        id: 'math-16-1',
        topicNumber: '16.1',
        title: 'Limits & Continuity',
        summary: 'lim_{x→c} f(x) = L, one-sided limits, algebraic techniques (factoring, rationalizing), 3 continuity conditions.',
        content: `### 16.1 Limits and Continuity

1. Concept of Limit:
• lim_{x→c} f(x) = L means f(x) can be made arbitrarily close to L as x approaches c from both sides.
• Existence: lim_{x→c} f(x) = L if and only if lim_{x→c⁻} f(x) = lim_{x→c⁺} f(x) = L.

2. Indeterminate Form (0/0):
• Resolved by:
  - Factoring and canceling common factors.
  - Rationalization of radicals.
  - L\'Hôpital\'s Rule: lim (f/g) = lim (f\'/g\').

3. Continuity:
• Function f is continuous at x = c if:
  1. f(c) is defined.
  2. lim_{x→c} f(x) exists.
  3. lim_{x→c} f(x) = f(c).`,
        workedExamples: [
          {
            problem: 'Evaluate lim_{x→3} (x² - 9) / (x - 3).',
            solution: 'Direct substitution yields 0/0 (indeterminate).\nFactor numerator: (x - 3)(x + 3) / (x - 3) = x + 3 (for x ≠ 3).\nlim_{x→3} (x + 3) = 3 + 3 = 6.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Evaluate the limit: lim_{x→2} (x² - 4) / (x - 2).',
            options: ['0', '2', '4', 'Undefined'],
            correctIndex: 2,
            explanation: 'Factor: (x - 2)(x + 2) / (x - 2) = x + 2. Substituting x = 2 gives 2 + 2 = 4.'
          },
          {
            question: 'What is lim_{x→0} (sin x / x)?',
            options: ['0', '1', '∞', 'Undefined'],
            correctIndex: 1,
            explanation: 'The fundamental trigonometric limit establishes that lim_{x→0} (sin x / x) = 1.'
          },
          {
            question: 'If f(x) = (x² - 1)/(x - 1) for x ≠ 1, what value must be assigned to f(1) so that f is continuous at x = 1?',
            options: ['0', '1', '2', '3'],
            correctIndex: 2,
            explanation: 'lim_{x→1} (x - 1)(x + 1)/(x - 1) = lim (x + 1) = 2. For continuity, f(1) must equal the limit: f(1) = 2.'
          }
        ]
      },
      {
        id: 'math-16-2',
        topicNumber: '16.2',
        title: 'Derivatives & Rules of Differentiation',
        summary: 'f\'(x) limit definition, Power rule d/dx(x^n) = nx^(n-1), Product, Quotient, and Chain rules.',
        content: `### 16.2 Rules of Differentiation

1. Definition of Derivative:
• f\'(x) = lim_{h→0} [f(x + h) - f(x)] / h.
• Geometrically: Slope of the tangent line to the curve at point (x, f(x)).

2. Differentiation Rules:
• Power Rule: d/dx(x^n) = n · x^(n - 1).
• Constant Multiple: d/dx(c · f(x)) = c · f\'(x).
• Sum/Difference: (f ± g)\' = f\' ± g\'.
• Product Rule: (f · g)\' = f\' · g + f · g\'.
• Quotient Rule: (f / g)\' = (f\' · g - f · g\') / g².
• Chain Rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x).`,
        workedExamples: [
          {
            problem: 'Find the derivative of f(x) = (2x + 1)⁵.',
            solution: 'Using Chain Rule with u = 2x + 1, u\' = 2:\nf\'(x) = 5(2x + 1)⁴ · (2) = 10(2x + 1)⁴.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the derivative of f(x) = 4x³ - 5x² + 7x - 9?',
            options: [
              '12x² - 10x + 7',
              '12x³ - 10x² + 7',
              '4x² - 5x + 7',
              '12x² - 5x + 7'
            ],
            correctIndex: 0,
            explanation: 'Applying power rule: d/dx(4x³) = 12x²; d/dx(-5x²) = -10x; d/dx(7x) = 7; d/dx(-9) = 0.'
          },
          {
            question: 'If y = x · e^x, what is dy/dx using the product rule?',
            options: ['e^x', 'x · e^x', '(x + 1)e^x', '2xe^x'],
            correctIndex: 2,
            explanation: 'dy/dx = (d/dx x) · e^x + x · (d/dx e^x) = 1 · e^x + x · e^x = (x + 1)e^x.'
          },
          {
            question: 'What is the derivative of f(x) = sin(3x)?',
            options: ['cos(3x)', '3 cos(3x)', '-3 cos(3x)', '3 sin(3x)'],
            correctIndex: 1,
            explanation: 'By the chain rule: d/dx[sin(3x)] = cos(3x) · d/dx(3x) = 3 cos(3x).'
          }
        ]
      },
      {
        id: 'math-16-3',
        topicNumber: '16.3',
        title: 'Applications of Derivatives',
        summary: 'Tangent line slope m = f\'(x₀), increasing/decreasing test, First Derivative Test (extrema), Second Derivative concavity.',
        content: `### 16.3 Derivative Applications: Tangents & Extrema

1. Tangent and Normal Lines:
• Tangent line slope at x = x₀ is m = f\'(x₀).
• Equation of tangent line: y - y₀ = f\'(x₀)(x - x₀).
• Normal line slope: m_normal = -1 / f\'(x₀).

2. Monotonicity & Extrema:
• Critical Points: Values of c where f\'(c) = 0 or f\'(c) is undefined.
• Increasing/Decreasing:
  - If f\'(x) > 0 on an interval ⟹ f is strictly increasing.
  - If f\'(x) < 0 on an interval ⟹ f is strictly decreasing.
• First Derivative Test:
  - f\' changes from + to - at c ⟹ Local Maximum at c.
  - f\' changes from - to + at c ⟹ Local Minimum at c.
• Second Derivative Test:
  - If f\'(c) = 0 and f\'\'(c) < 0 ⟹ Local Maximum (concave down).
  - If f\'(c) = 0 and f\'\'(c) > 0 ⟹ Local Minimum (concave up).`,
        workedExamples: [
          {
            problem: 'Find the slope of the tangent line to the curve y = x³ - 3x + 2 at x = 2.',
            solution: 'y\' = 3x² - 3.\nAt x = 2: m = y\'(2) = 3(2²) - 3 = 12 - 3 = 9.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the slope of the line tangent to y = x² - 4x + 3 at the point (3, 0)?',
            options: ['1', '2', '3', '4'],
            correctIndex: 1,
            explanation: 'y\' = 2x - 4. At x = 3: y\'(3) = 2(3) - 4 = 6 - 4 = 2.'
          },
          {
            question: 'At what x-value does f(x) = x² - 6x + 5 attain its local minimum?',
            options: ['x = -3', 'x = 0', 'x = 3', 'x = 5'],
            correctIndex: 2,
            explanation: 'f\'(x) = 2x - 6 = 0 ⟹ 2x = 6 ⟹ x = 3. Since f\'\'(x) = 2 > 0, x = 3 is a local minimum.'
          },
          {
            question: 'If f\'\'(x) > 0 on an open interval, what is the geometric concavity of the curve on that interval?',
            options: ['Concave downward', 'Concave upward', 'Linear', 'Inflectional'],
            correctIndex: 1,
            explanation: 'A positive second derivative (f\'\'(x) > 0) indicates the curve is concave upward.'
          }
        ]
      },
      {
        id: 'math-16-4',
        topicNumber: '16.4',
        title: 'Introduction to Integral Calculus',
        summary: 'Antiderivatives, Power rule ∫ x^n dx = (x^(n+1))/(n+1) + C, Fundamental Theorem of Calculus ∫_a^b f(x)dx = F(b) - F(a).',
        content: `### 16.4 Introduction to Integrals

1. Indefinite Integral (Antiderivative):
• ∫ f(x) dx = F(x) + C, where F\'(x) = f(x) and C is the constant of integration.
• Power Rule of Integration:
  ∫ x^n dx = (x^(n + 1) / (n + 1)) + C (for n ≠ -1).
  ∫ (1 / x) dx = ln|x| + C.
  ∫ e^(kx) dx = (1/k) e^(kx) + C.
• Linearity: ∫ [a f(x) + b g(x)] dx = a ∫ f(x) dx + b ∫ g(x) dx.

2. Fundamental Theorem of Calculus:
• If f is continuous on [a, b] and F is any antiderivative of f:
  ∫_a^b f(x) dx = F(b) - F(a) = [F(x)]_a^b.
• Geometric Application: Represents the net signed area between the curve y = f(x) and the x-axis from x = a to x = b.`,
        workedExamples: [
          {
            problem: 'Evaluate the definite integral: ∫₁³ (3x² - 2x) dx.',
            solution: 'Antiderivative: F(x) = x³ - x².\nF(3) = 3³ - 3² = 27 - 9 = 18.\nF(1) = 1³ - 1² = 1 - 1 = 0.\nValue = F(3) - F(1) = 18 - 0 = 18.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the indefinite integral ∫ (6x² - 4x + 3) dx?',
            options: [
              '2x³ - 2x² + 3x + C',
              '3x³ - 4x² + 3x + C',
              '12x - 4 + C',
              '2x³ - 4x² + 3x + C'
            ],
            correctIndex: 0,
            explanation: '∫ 6x² dx = 2x³; ∫ -4x dx = -2x²; ∫ 3 dx = 3x. Sum = 2x³ - 2x² + 3x + C.'
          },
          {
            question: 'Evaluate the definite integral ∫₀² 4x dx.',
            options: ['4', '8', '12', '16'],
            correctIndex: 1,
            explanation: 'Antiderivative is 2x². Evaluating from 0 to 2 gives 2(2²) - 2(0²) = 2(4) - 0 = 8.'
          },
          {
            question: 'What is the integral of f(x) = 1/x for x > 0?',
            options: ['-1/x² + C', 'ln(x) + C', 'e^x + C', 'x + C'],
            correctIndex: 1,
            explanation: 'By definition, the antiderivative of 1/x is ln|x| + C.'
          }
        ]
      }
    ]
  }
];
