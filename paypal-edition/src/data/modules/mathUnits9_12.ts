import { ModuleUnit } from '../modulesData';

export const MATH_UNITS_9_TO_12: ModuleUnit[] = [
  {
    unitNumber: 9,
    title: 'UNIT NINE: VECTORS IN TWO AND THREE DIMENSIONS',
    description: 'Vector addition, scalar multiplication, unit vectors, dot (scalar) product, angle between vectors, vector projection, cross (vector) product in 3D, and geometric applications.',
    topics: [
      {
        id: 'math-9-1',
        topicNumber: '9.1',
        title: 'Vector Operations, Magnitude & Direction',
        summary: 'Component form v = ai + bj, magnitude ||v|| = √(a² + b²), unit vector u = v / ||v||, scalar multiplication.',
        content: `### 9.1 Vectors in Component Form

1. Definition & Notation:
• Directed line segment characterized by magnitude and direction.
• In 2D: v = ⟨v₁, v₂⟩ = v₁i + v₂j.
• In 3D: v = ⟨v₁, v₂, v₃⟩ = v₁i + v₂j + v₃k.
• Magnitude: ||v|| = √(v₁² + v₂² + v₃²).

2. Vector Operations:
• Vector Addition: u + v = ⟨u₁ + v₁, u₂ + v₂, u₃ + v₃⟩.
• Scalar Multiplication: c · v = ⟨cv₁, cv₂, cv₃⟩.
• Unit Vector: u_v = v / ||v|| (has magnitude 1 in the direction of v).`,
        workedExamples: [
          {
            problem: 'Given v = 3i - 4j, find its magnitude and the unit vector in the direction of v.',
            solution: 'Magnitude ||v|| = √(3² + (-4)²) = √(9 + 16) = √25 = 5.\nUnit vector u = (3/5)i - (4/5)j.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the magnitude of the 3D vector v = 2i - 3j + 6k?',
            options: ['5', '7', '9', '11'],
            correctIndex: 1,
            explanation: '||v|| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.'
          },
          {
            question: 'If u = ⟨4, -2⟩ and v = ⟨1, 5⟩, what is 2u - 3v?',
            options: ['⟨5, -19⟩', '⟨5, 11⟩', '⟨11, -19⟩', '⟨8, -10⟩'],
            correctIndex: 0,
            explanation: '2u = ⟨8, -4⟩. 3v = ⟨3, 15⟩. 2u - 3v = ⟨8 - 3, -4 - 15⟩ = ⟨5, -19⟩.'
          },
          {
            question: 'Which of the following is a unit vector in the direction of v = ⟨1, 1⟩?',
            options: ['⟨1/2, 1/2⟩', '⟨1/√2, 1/√2⟩', '⟨1, 0⟩', '⟨√2, √2⟩'],
            correctIndex: 1,
            explanation: '||v|| = √(1² + 1²) = √2. Unit vector u = ⟨1/√2, 1/√2⟩.'
          }
        ]
      },
      {
        id: 'math-9-2',
        topicNumber: '9.2',
        title: 'Dot Product, Orthogonality & Projections',
        summary: 'u · v = u₁v₁ + u₂v₂ + u₃v₃ = ||u|| ||v|| cos θ, orthogonal condition u · v = 0, vector projection.',
        content: `### 9.2 Dot Product and Geometric Angles

1. Definition of Dot (Scalar) Product:
• Algebraic: u · v = u₁v₁ + u₂v₂ + u₃v₃.
• Geometric: u · v = ||u|| ||v|| cos θ (where θ is the angle between u and v, 0 ≤ θ ≤ π).
• Angle Formula: cos θ = (u · v) / (||u|| ||v||).

2. Orthogonality (Perpendicularity):
• Two non-zero vectors u and v are orthogonal (perpendicular) if and only if:
  u · v = 0 (since cos 90° = 0).

3. Projections:
• Scalar Projection of u onto v: comp_v(u) = (u · v) / ||v||.
• Vector Projection of u onto v: proj_v(u) = ((u · v) / ||v||²) · v.`,
        workedExamples: [
          {
            problem: 'Find the angle between u = ⟨1, 1, 0⟩ and v = ⟨0, 1, 1⟩.',
            solution: 'u · v = (1)(0) + (1)(1) + (0)(1) = 1.\n||u|| = √(1 + 1 + 0) = √2, ||v|| = √(0 + 1 + 1) = √2.\ncos θ = (u · v) / (||u|| ||v||) = 1 / (√2 · √2) = 1/2.\nθ = arccos(1/2) = 60° (or π/3 radians).'
          }
        ],
        practiceQuestions: [
          {
            question: 'For what value of k are the vectors u = ⟨2, 3⟩ and v = ⟨k, -4⟩ orthogonal?',
            options: ['4', '6', '8', '-6'],
            correctIndex: 1,
            explanation: 'Orthogonal condition: u · v = 0 ⟹ 2(k) + 3(-4) = 0 ⟹ 2k - 12 = 0 ⟹ 2k = 12 ⟹ k = 6.'
          },
          {
            question: 'What is the scalar projection of u = ⟨3, 4⟩ onto v = ⟨1, 0⟩?',
            options: ['3', '4', '5', '7'],
            correctIndex: 0,
            explanation: 'comp_v(u) = (u · v) / ||v|| = ((3)(1) + (4)(0)) / 1 = 3 / 1 = 3.'
          },
          {
            question: 'What is the dot product of any vector v with itself, v · v?',
            options: ['0', '1', '||v||', '||v||²'],
            correctIndex: 3,
            explanation: 'v · v = v₁² + v₂² + v₃² = ||v||².'
          }
        ]
      },
      {
        id: 'math-9-3',
        topicNumber: '9.3',
        title: 'Cross Product & Geometric Applications',
        summary: 'u × v determinant definition, right-hand rule, ||u × v|| = Area of parallelogram, parallel condition u × v = 0.',
        content: `### 9.3 Cross Product in 3D

1. Definition of Cross (Vector) Product:
• Defined exclusively in 3D space:
  u × v = | i   j   k  |
          | u₁  u₂  u₃ |
          | v₁  v₂  v₃ |
        = (u₂v₃ - u₃v₂)i - (u₁v₃ - u₃v₁)j + (u₁v₂ - u₂v₁)k.
• Result is a vector perpendicular to BOTH u and v (Right-Hand Rule).
• Non-commutative: v × u = -(u × v).

2. Geometric Applications:
• Magnitude: ||u × v|| = ||u|| ||v|| sin θ.
• Area of Parallelogram spanned by u and v = ||u × v||.
• Area of Triangle spanned by u and v = (1/2) ||u × v||.
• Parallel Condition: Two non-zero vectors u and v are parallel if and only if u × v = 0.
• Scalar Triple Product: u · (v × w) = Volume of Parallelepiped.`,
        workedExamples: [
          {
            problem: 'Calculate u × v for u = ⟨1, 0, 0⟩ and v = ⟨0, 1, 0⟩.',
            solution: 'u = i, v = j.\ni × j = k = ⟨0, 0, 1⟩.\nNotice that ||i × j|| = 1, which equals the area of a 1×1 unit square.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the cross product of i × k?',
            options: ['j', '-j', 'k', '0'],
            correctIndex: 1,
            explanation: 'By standard right-hand cyclic orientation (i ⟶ j ⟶ k ⟶ i): i × j = k, j × k = i, and k × i = j. Therefore, i × k = -(k × i) = -j.'
          },
          {
            question: 'What is the area of the parallelogram formed by vectors u = ⟨2, 0, 0⟩ and v = ⟨0, 3, 0⟩?',
            options: ['3', '5', '6', '12'],
            correctIndex: 2,
            explanation: 'u × v = 6k = ⟨0, 0, 6⟩. Area = ||u × v|| = 6.'
          },
          {
            question: 'If two non-zero vectors u and v are parallel, what is their cross product u × v?',
            options: ['1', '0 (Zero vector)', '||u|| ||v||', 'Undefined'],
            correctIndex: 1,
            explanation: 'When parallel, the angle θ = 0° (or 180°), so sin θ = 0. Thus, u × v = 0.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 10,
    title: 'UNIT TEN: MATRICES AND DETERMINANTS',
    description: 'Matrix order, addition, scalar multiplication, matrix multiplication, transpose, symmetric/skew-symmetric matrices, 2x2 and 3x3 determinants, matrix inverses, and solving linear systems using Cramer\'s rule.',
    topics: [
      {
        id: 'math-10-1',
        topicNumber: '10.1',
        title: 'Matrix Operations, Transpose & Properties',
        summary: 'Order m × n, matrix addition, multiplication condition (columns of A = rows of B), transpose (A^T), (AB)^T = B^T A^T.',
        content: `### 10.1 Matrix Algebra & Transpose

1. Matrix Multiplication:
• Product AB is defined only if columns of A = rows of B.
• If A is m × k and B is k × n, then AB is m × n.
• Matrix multiplication is associative [A(BC) = (AB)C] and distributive, but NOT generally commutative (AB ≠ BA).

2. Transpose of a Matrix (A^T):
• Formed by interchanging rows and columns: (a_ij)^T = a_ji.
• Properties:
  - (A^T)^T = A
  - (A + B)^T = A^T + B^T
  - (cA)^T = c A^T
  - (AB)^T = B^T A^T (Reversal Rule).
• Symmetric Matrix: A^T = A.
• Skew-Symmetric Matrix: A^T = -A (main diagonal entries must be 0).`,
        workedExamples: [
          {
            problem: 'Let A = [1 2; 3 4] and B = [2 0; 1 3]. Find product AB.',
            solution: 'Row 1 · Col 1: (1)(2) + (2)(1) = 4.\nRow 1 · Col 2: (1)(0) + (2)(3) = 6.\nRow 2 · Col 1: (3)(2) + (4)(1) = 10.\nRow 2 · Col 2: (3)(0) + (4)(3) = 12.\nAB = [4 6; 10 12].'
          }
        ],
        practiceQuestions: [
          {
            question: 'If matrix A has order 3 × 4 and matrix B has order 4 × 2, what is the order of the product matrix AB?',
            options: ['3 × 2', '4 × 4', '2 × 3', 'Product is undefined'],
            correctIndex: 0,
            explanation: 'Inner dimensions match (4 = 4). The outer dimensions define the order of the product: 3 × 2.'
          },
          {
            question: 'Which property is generally FALSE for square matrices of the same size?',
            options: ['A + B = B + A', 'A(B + C) = AB + AC', '(AB)^T = B^T A^T', 'AB = BA'],
            correctIndex: 3,
            explanation: 'Matrix multiplication is non-commutative in general (AB ≠ BA).'
          },
          {
            question: 'If A is a symmetric matrix, which condition holds true?',
            options: ['A^T = -A', 'A^T = A', 'det(A) = 0', 'A² = I'],
            correctIndex: 1,
            explanation: 'By definition, a matrix is symmetric if it equals its own transpose: A^T = A.'
          }
        ]
      },
      {
        id: 'math-10-2',
        topicNumber: '10.2',
        title: 'Determinants: 2x2, 3x3 & Cofactor Expansion',
        summary: 'det(A) = ad - bc for 2x2, Laplace cofactor expansion along rows/columns, properties of determinants.',
        content: `### 10.2 Determinants of Square Matrices

1. 2 × 2 Determinant:
• det([a b; c d]) = ad - bc.

2. 3 × 3 Determinant (Cofactor Expansion):
• det(A) = a₁₁ C₁₁ + a₁₂ C₁₂ + a₁₃ C₁₃.
• Cofactor C_ij = (-1)^(i+j) · M_ij (where M_ij is the minor determinant).

3. Key Determinant Properties:
• det(AB) = det(A) · det(B).
• det(A^T) = det(A).
• det(c A) = c^n · det(A) for an n × n matrix.
• If any row (or column) is all zeros, det(A) = 0.
• If two rows (or columns) are identical or proportional, det(A) = 0.
• Interchanging two rows multiplies determinant by -1.`,
        workedExamples: [
          {
            problem: 'Evaluate det(A) for A = [3 1; 4 2].',
            solution: 'det(A) = (3)(2) - (1)(4) = 6 - 4 = 2.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If A is a 3 × 3 matrix with det(A) = 4, what is det(2A)?',
            options: ['8', '16', '24', '32'],
            correctIndex: 3,
            explanation: 'For an n × n matrix, det(cA) = c^n · det(A). Here n = 3: det(2A) = 2³ · det(A) = 8 × 4 = 32.'
          },
          {
            question: 'What is the determinant of the 2 × 2 matrix [5 -2; 3 4]?',
            options: ['14', '20', '26', '-6'],
            correctIndex: 2,
            explanation: 'det = (5)(4) - (-2)(3) = 20 - (-6) = 20 + 6 = 26.'
          },
          {
            question: 'If two rows of a square matrix A are identical, what is the value of det(A)?',
            options: ['1', '-1', '0', 'Undefined'],
            correctIndex: 2,
            explanation: 'A matrix with two linearly dependent or identical rows has determinant equal to 0.'
          }
        ]
      },
      {
        id: 'math-10-3',
        topicNumber: '10.3',
        title: 'Matrix Inverses & Solving Systems with Cramer\'s Rule',
        summary: 'Invertibility condition det(A) ≠ 0, 2x2 inverse formula A⁻¹ = (1/det)(adj A), Cramer\'s rule x_i = det(A_i)/det(A).',
        content: `### 10.3 Matrix Inversion and Systems of Equations

1. Matrix Inverse (A⁻¹):
• A square matrix A is invertible (non-singular) if and only if det(A) ≠ 0.
• Definition: A · A⁻¹ = A⁻¹ · A = I.
• For 2 × 2 matrix A = [a b; c d]:
  A⁻¹ = (1 / (ad - bc)) · [d -b; -c a].
• Inversion properties: (A⁻¹)⁻¹ = A; (AB)⁻¹ = B⁻¹ A⁻¹; det(A⁻¹) = 1 / det(A).

2. Solving Systems AX = B:
• Matrix Inverse Method: X = A⁻¹ B (if det(A) ≠ 0).
• Cramer\'s Rule:
  x = det(A_x) / det(A), y = det(A_y) / det(A), z = det(A_z) / det(A).`,
        workedExamples: [
          {
            problem: 'Solve using Cramer\'s rule: 2x + y = 7 and 3x - y = 8.',
            solution: 'det(A) = |2 1; 3 -1| = (2)(-1) - (1)(3) = -2 - 3 = -5.\ndet(A_x) = |7 1; 8 -1| = -7 - 8 = -15.\ndet(A_y) = |2 7; 3 8| = 16 - 21 = -5.\nx = -15 / -5 = 3.\ny = -5 / -5 = 1.'
          }
        ],
        practiceQuestions: [
          {
            question: 'For what value of k is the matrix [k 4; 2 8] singular (non-invertible)?',
            options: ['1', '2', '4', '8'],
            correctIndex: 0,
            explanation: 'A matrix is singular when det = 0: (k)(8) - (4)(2) = 0 ⟹ 8k - 8 = 0 ⟹ 8k = 8 ⟹ k = 1.'
          },
          {
            question: 'If A = [3 2; 1 1], what is the inverse matrix A⁻¹?',
            options: [
              '[1 -2; -1 3]',
              '[-1 2; 1 -3]',
              '[3 -1; -2 1]',
              '[1 2; 1 3]'
            ],
            correctIndex: 0,
            explanation: 'det(A) = (3)(1) - (2)(1) = 1. A⁻¹ = (1/1) · [1 -2; -1 3] = [1 -2; -1 3].'
          },
          {
            question: 'If det(A) = 5, what is the determinant of its inverse, det(A⁻¹)?',
            options: ['-5', '5', '1/5', '0'],
            correctIndex: 2,
            explanation: 'det(A⁻¹) = 1 / det(A) = 1/5.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 11,
    title: 'UNIT ELEVEN: SEQUENCES AND SERIES',
    description: 'Sequences, common difference d, common ratio r, arithmetic progressions (AP), geometric progressions (GP), infinite geometric series, sigma notation, and the Binomial Theorem.',
    topics: [
      {
        id: 'math-11-1',
        topicNumber: '11.1',
        title: 'Arithmetic Progressions (AP)',
        summary: 'n-th term a_n = a₁ + (n - 1)d, arithmetic series sum S_n = (n/2)(2a₁ + (n - 1)d) = (n/2)(a₁ + a_n).',
        content: `### 11.1 Arithmetic Progressions (AP)

1. General Term:
• An arithmetic sequence has consecutive terms with constant difference d = a_n - a_{n-1}:
  a_n = a₁ + (n - 1)d.

2. Sum of the First n Terms (Arithmetic Series S_n):
• S_n = (n / 2) · [2a₁ + (n - 1)d]
• S_n = (n / 2) · [a₁ + a_n] (Average of first and last terms multiplied by count).

3. Arithmetic Mean:
• The arithmetic mean of two numbers a and b is (a + b) / 2.`,
        workedExamples: [
          {
            problem: 'The 3rd term of an AP is 8 and the 7th term is 20. Find the first term a₁ and common difference d.',
            solution: 'a₃ = a₁ + 2d = 8\na₇ = a₁ + 6d = 20\nSubtracting gives: 4d = 12 ⟹ d = 3.\na₁ = 8 - 2(3) = 8 - 6 = 2.\nAP: 2, 5, 8, 11, 14, 17, 20...'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the sum of the first 20 natural numbers (1 + 2 + 3 + ... + 20)?',
            options: ['190', '200', '210', '220'],
            correctIndex: 2,
            explanation: 'S_n = n(n + 1) / 2 = 20(21) / 2 = 210.'
          },
          {
            question: 'Find the 15th term of the arithmetic progression: 3, 7, 11, 15, ...',
            options: ['55', '59', '63', '67'],
            correctIndex: 1,
            explanation: 'a₁ = 3, d = 4. a₁₅ = a₁ + 14d = 3 + 14(4) = 3 + 56 = 59.'
          },
          {
            question: 'How many terms are in the arithmetic sequence: 5, 9, 13, ..., 81?',
            options: ['18', '19', '20', '21'],
            correctIndex: 2,
            explanation: '81 = 5 + (n - 1)(4) ⟹ 76 = 4(n - 1) ⟹ n - 1 = 19 ⟹ n = 20.'
          }
        ]
      },
      {
        id: 'math-11-2',
        topicNumber: '11.2',
        title: 'Geometric Progressions (GP) & Infinite Series',
        summary: 'n-th term a_n = a₁ · r^(n - 1), finite sum S_n = a₁(1 - r^n)/(1 - r), infinite sum S_∞ = a₁/(1 - r) for |r| < 1.',
        content: `### 11.2 Geometric Progressions (GP)

1. General Term:
• Terms have a constant ratio r = a_n / a_{n-1}:
  a_n = a₁ · r^(n - 1).

2. Finite Geometric Series:
• S_n = a₁ · (1 - r^n) / (1 - r) (for r ≠ 1).

3. Infinite Geometric Series:
• Converges if and only if |r| < 1 (-1 < r < 1):
  S_∞ = a₁ / (1 - r).
• Diverges if |r| ≥ 1.`,
        workedExamples: [
          {
            problem: 'Evaluate the sum of the infinite geometric series: 12 + 4 + 4/3 + 4/9 + ...',
            solution: 'First term a₁ = 12; common ratio r = 4 / 12 = 1/3.\nSince |r| = 1/3 < 1, the series converges.\nS_∞ = a₁ / (1 - r) = 12 / (1 - 1/3) = 12 / (2/3) = 12 × (3/2) = 18.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the sum of the infinite series 8 + 4 + 2 + 1 + ...?',
            options: ['12', '14', '16', '32'],
            correctIndex: 2,
            explanation: 'a₁ = 8, r = 1/2. S_∞ = 8 / (1 - 1/2) = 8 / 0.5 = 16.'
          },
          {
            question: 'Find the 6th term of the geometric sequence: 2, 6, 18, 54, ...',
            options: ['162', '486', '972', '1,458'],
            correctIndex: 1,
            explanation: 'a₁ = 2, r = 3. a₆ = 2 · 3⁵ = 2 · 243 = 486.'
          },
          {
            question: 'For which value of common ratio r does an infinite geometric series CONVERGE?',
            options: ['r = 1.5', 'r = -1.2', 'r = 0.75', 'r = -2'],
            correctIndex: 2,
            explanation: 'Convergence requires |r| < 1. Only r = 0.75 satisfies |0.75| < 1.'
          }
        ]
      },
      {
        id: 'math-11-3',
        topicNumber: '11.3',
        title: 'Sigma Notation & Binomial Theorem',
        summary: 'Summation notation Σ, Binomial Theorem (a + b)^n = Σ C(n, k) a^(n-k) b^k, Pascal\'s triangle.',
        content: `### 11.3 Sigma Notation & Binomial Theorem

1. Sigma Notation (Σ):
• ∑_{k=1}^n c = n · c.
• ∑_{k=1}^n k = n(n + 1) / 2.
• ∑_{k=1}^n k² = n(n + 1)(2n + 1) / 6.
• ∑_{k=1}^n k³ = [n(n + 1) / 2]².

2. Binomial Theorem:
• For non-negative integer n:
  (a + b)^n = ∑_{k=0}^n C(n, k) · a^(n - k) · b^k
  where C(n, k) = n! / (k! (n - k)!).
• Number of terms in expansion = n + 1.
• (r + 1)-th term: T_{r+1} = C(n, r) · a^(n - r) · b^r.`,
        workedExamples: [
          {
            problem: 'Find the 4th term in the binomial expansion of (x + 2)⁶.',
            solution: 'Using T_{r+1} with r = 3, n = 6, a = x, b = 2:\nT₄ = C(6, 3) · x^(6 - 3) · 2³ = 20 · x³ · 8 = 160x³.'
          }
        ],
        practiceQuestions: [
          {
            question: 'How many terms are in the expansion of (2x - 3y)⁸?',
            options: ['7', '8', '9', '16'],
            correctIndex: 2,
            explanation: 'The expansion of (a + b)^n has n + 1 terms. For n = 8, there are 8 + 1 = 9 terms.'
          },
          {
            question: 'What is the sum of the binomial coefficients in (x + y)⁵, ∑_{k=0}⁵ C(5, k)?',
            options: ['16', '25', '32', '64'],
            correctIndex: 2,
            explanation: 'Setting x = 1 and y = 1 gives (1 + 1)⁵ = 2⁵ = 32.'
          },
          {
            question: 'Evaluate the sum: ∑_{k=1}⁵ (2k + 1).',
            options: ['25', '35', '45', '55'],
            correctIndex: 1,
            explanation: 'Terms for k=1 to 5: 3 + 5 + 7 + 9 + 11 = 35. (Or 2 · (5·6/2) + 5 = 30 + 5 = 35).'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 12,
    title: 'UNIT TWELVE: BUSINESS MATHEMATICS',
    description: 'Simple and compound interest, present and future values, continuous compounding, depreciation (straight-line and declining balance), annuities, sinking funds, and commercial break-even analysis.',
    topics: [
      {
        id: 'math-12-1',
        topicNumber: '12.1',
        title: 'Simple and Compound Interest & Present Value',
        summary: 'I = Prt, A = P(1 + r/m)^(mt), continuous compounding A = Pe^(rt), present value PV = A(1 + i)^(-n).',
        content: `### 12.1 Financial Mathematics: Interest & Discounting

1. Simple Interest:
• I = P · r · t.
• Total Amount A = P + I = P(1 + rt).

2. Compound Interest:
• A = P · (1 + r / m)^(m · t) (compounded m times per year).
• Continuous Compounding: A = P · e^(r · t).
• Present Value (Discounting):
  PV = A / (1 + i)^n = A · (1 + i)^(-n).`,
        workedExamples: [
          {
            problem: 'Calculate the total amount accrued when 5,000 Birr is compounded semi-annually at 8% annual interest for 3 years.',
            solution: 'P = 5,000, r = 0.08, m = 2 (semi-annual), t = 3 ⟹ n = m · t = 6 periods.\nPeriodic rate i = 0.08 / 2 = 0.04.\nA = 5,000(1 + 0.04)⁶ = 5,000(1.04)⁶ ≈ 5,000(1.2653) = 6,326.50 Birr.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the present value of 1,210 Birr due in 2 years at an annual interest rate of 10% compounded annually?',
            options: ['1,000 Birr', '1,050 Birr', '1,100 Birr', '1,150 Birr'],
            correctIndex: 0,
            explanation: 'PV = A / (1 + r)^t = 1,210 / (1.10)² = 1,210 / 1.21 = 1,000 Birr.'
          },
          {
            question: 'If 4,000 Birr is deposited at 6% simple interest per annum, how many years will it take to earn 1,200 Birr in interest?',
            options: ['3 years', '4 years', '5 years', '6 years'],
            correctIndex: 2,
            explanation: 'I = P · r · t ⟹ 1,200 = 4,000 · (0.06) · t = 240 · t ⟹ t = 1,200 / 240 = 5 years.'
          },
          {
            question: 'Under continuous compounding at annual rate r, the accumulated amount formula is:',
            options: ['A = P(1 + r)^t', 'A = Pe^(rt)', 'A = P(1 + rt)', 'A = P ln(rt)'],
            correctIndex: 1,
            explanation: 'Continuous compounding utilizes Euler\'s constant: A = P · e^(rt).'
          }
        ]
      },
      {
        id: 'math-12-2',
        topicNumber: '12.2',
        title: 'Depreciation, Annuities & Sinking Funds',
        summary: 'Straight-line depreciation D = (C - S)/n, declining balance V_n = C(1 - d)^n, ordinary annuity future value.',
        content: `### 12.2 Depreciation and Annuities

1. Depreciation:
• Straight-Line Method: Annual Depreciation D = (Initial Cost C - Salvage Value S) / Useful Life n.
• Book Value in year t: BV_t = C - t · D.
• Declining Balance Method: BV_t = C · (1 - d)^t, where d is the annual depreciation rate.

2. Annuities:
• Sequence of equal payments made at equal intervals.
• Future Value of Ordinary Annuity (payment PMT at end of each period):
  FV = PMT · [((1 + i)^n - 1) / i].
• Sinking Fund: Fund accumulated by periodic payments to pay off future debt.`,
        workedExamples: [
          {
            problem: 'A machine is purchased for 50,000 Birr. It has an estimated lifespan of 5 years and a salvage value of 10,000 Birr. Find the annual straight-line depreciation.',
            solution: 'D = (Cost - Salvage) / Lifespan = (50,000 - 10,000) / 5 = 40,000 / 5 = 8,000 Birr/year.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Using straight-line depreciation, a computer costing 30,000 Birr with salvage value 6,000 Birr over 4 years has an annual depreciation of:',
            options: ['5,000 Birr', '6,000 Birr', '7,500 Birr', '8,000 Birr'],
            correctIndex: 1,
            explanation: 'D = (30,000 - 6,000) / 4 = 24,000 / 4 = 6,000 Birr/year.'
          },
          {
            question: 'In an annuity, what is a fund established by a business by setting aside periodic payments to liquidate a future debt called?',
            options: ['Contingency fund', 'Sinking fund', 'Mutual fund', 'Amortization reserve'],
            correctIndex: 1,
            explanation: 'A sinking fund is specifically an interest-bearing account created to accumulate capital for future liabilities.'
          },
          {
            question: 'If a car costing 200,000 Birr depreciates at 10% per year using the declining balance method, what is its book value after 2 years?',
            options: ['160,000 Birr', '162,000 Birr', '170,000 Birr', '180,000 Birr'],
            correctIndex: 1,
            explanation: 'BV = 200,000 × (1 - 0.10)² = 200,000 × (0.90)² = 200,000 × 0.81 = 162,000 Birr.'
          }
        ]
      },
      {
        id: 'math-12-3',
        topicNumber: '12.3',
        title: 'Break-Even Analysis & Commercial Math',
        summary: 'Total Cost C(x) = Fixed Cost + Variable Cost(x), Revenue R(x) = p · x, Break-Even Point where R(x) = C(x).',
        content: `### 12.3 Break-Even & Commercial Operations

1. Cost, Revenue, and Profit Functions:
• Cost Function: C(x) = FC + V · x (where FC = Fixed Cost, V = Variable cost per unit).
• Revenue Function: R(x) = p · x (where p = selling price per unit).
• Profit Function: P(x) = R(x) - C(x) = (p - V) · x - FC.

2. Break-Even Point (BEP):
• Point where Total Revenue equals Total Cost: R(x) = C(x) ⟹ Profit P(x) = 0.
• Break-Even Quantity: x_BE = FC / (p - V).
• (p - V) is termed the Contribution Margin per unit.`,
        workedExamples: [
          {
            problem: 'A factory has fixed costs of 20,000 Birr. The variable cost per unit is 15 Birr and the selling price is 25 Birr. Find the break-even production quantity.',
            solution: 'Contribution margin = p - V = 25 - 15 = 10 Birr.\nBreak-Even quantity x = FC / (p - V) = 20,000 / 10 = 2,000 units.'
          }
        ],
        practiceQuestions: [
          {
            question: 'A company has fixed overhead costs of 36,000 Birr, variable production cost of 40 Birr per item, and sells each item for 70 Birr. How many units must be sold to break even?',
            options: ['800 units', '1,000 units', '1,200 units', '1,500 units'],
            correctIndex: 2,
            explanation: 'x = FC / (p - V) = 36,000 / (70 - 40) = 36,000 / 30 = 1,200 units.'
          },
          {
            question: 'What is the term for the difference between the selling price per unit and the variable cost per unit (p - V)?',
            options: ['Gross revenue', 'Contribution margin', 'Net income', 'Operating expense'],
            correctIndex: 1,
            explanation: 'The contribution margin represents the portion of sales revenue that covers fixed costs.'
          },
          {
            question: 'If Total Cost C(x) = 500 + 20x and Revenue R(x) = 45x, what is the profit from selling 40 units?',
            options: ['300 Birr', '500 Birr', '800 Birr', '1,000 Birr'],
            correctIndex: 1,
            explanation: 'Profit P(x) = R(x) - C(x) = 45(40) - (500 + 20(40)) = 1,800 - (500 + 800) = 1,800 - 1,300 = 500 Birr.'
          }
        ]
      }
    ]
  }
];
