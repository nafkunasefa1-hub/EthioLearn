import { ModuleUnit } from '../modulesData';

export const MATH_UNITS_1_TO_4: ModuleUnit[] = [
  {
    unitNumber: 1,
    title: 'UNIT ONE: FURTHER ON SETS',
    description: 'Concepts of sets, notation, descriptions (verbal, listing, set-builder), empty set, finite/infinite sets, subsets, power sets, Venn diagrams, universal sets, operations (union, intersection, difference, symmetric difference, complement), De Morgan laws, Cartesian product, and inclusion-exclusion principle.',
    topics: [
      {
        id: 'math-1-1',
        topicNumber: '1.1',
        title: 'Introduction to Concepts of Sets & Descriptions',
        summary: 'Set definition, well-defined collections, elements, and three primary description methods.',
        content: `### 1.1 Introduction to Concepts of Sets

A set is a well-defined collection of distinct objects, numbers, or things. The individual objects in a set are called elements or members of the set.

Key Principles:
• Repeating elements in a set does not add new elements: e.g. {a, a, a} = {a}.
• A set is well-defined if and only if it can be unequivocally decided whether a given object belongs to the set or not.
• Notation: Capital letters (A, B, C) name sets; lowercase letters (a, b, c) represent elements.
• x ∈ A reads "x is an element of A" or "x belongs to A".
• x ∉ A reads "x does not belong to A".

Methods of Describing Sets:
1. Verbal Method: Describing a set using words (e.g. {all natural numbers}).
2. Listing (Roster) Method:
   • Complete Listing: Listing all elements inside braces, suitable for small finite sets: A = {a, 2, 7}.
   • Partial Listing: Used when listing all elements is cumbersome or infinite, using ellipses (...): N = {1, 2, 3, ..., 50} or Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}.
3. Set-Builder Method: Describing the property that elements must satisfy:
   A = {x ∈ R | P(x)}
   • Example: N = {x | x ∈ N} or A = {x ∈ R | 0 < x < 1}.`,
        workedExamples: [
          {
            problem: 'Express set B = {x ∈ Z | x² = 9} in listing (roster) method.',
            solution: 'Solving x² = 9 in integers gives x = 3 or x = -3.\nTherefore, in listing form: B = {-3, 3}.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which of the following represents a well-defined set?',
            options: [
              'The collection of all good students in Grade 12',
              'The collection of prime numbers less than 20',
              'The collection of tall teachers in Ethiopia',
              'The collection of beautiful cities'
            ],
            correctIndex: 1,
            explanation: 'Prime numbers less than 20 ({2, 3, 5, 7, 11, 13, 17, 19}) is objectively defined without subjective opinion.'
          },
          {
            question: 'Which of the following sets is written in correct set-builder notation for the set of all odd integers?',
            options: [
              '{x ∈ Z | x = 2k, k ∈ Z}',
              '{x ∈ Z | x = 2k + 1, k ∈ Z}',
              '{x ∈ R | x > 0}',
              '{1, 3, 5, 7, ...}'
            ],
            correctIndex: 1,
            explanation: 'Odd integers are characterized by the algebraic form 2k + 1 for any integer k ∈ Z.'
          },
          {
            question: 'If set S = {x ∈ N | x² - 5x + 6 = 0}, what is the set S in roster form?',
            options: [
              '{-3, -2}',
              '{2, 3}',
              '{1, 6}',
              '{-6, 1}'
            ],
            correctIndex: 1,
            explanation: 'Factoring x² - 5x + 6 = (x - 2)(x - 3) = 0 yields x = 2 or x = 3. Both are natural numbers (N), so S = {2, 3}.'
          }
        ]
      },
      {
        id: 'math-1-2',
        topicNumber: '1.2',
        title: 'The Notion of Sets: Empty, Subsets, Power Sets & Equality',
        summary: 'Null sets, finite vs infinite sets, subset relations, power sets, proper subsets, and set equality.',
        content: `### 1.2 The Notion of Sets

1. Empty (Null) Set:
• The set containing no elements, denoted by ∅ or {}.
• Note: {∅} and {0} are NOT empty sets (they contain one element each).
• The empty set is a subset of every set: ∅ ⊆ A for every set A.

2. Cardinality of a Set:
• Number of distinct elements in set A, denoted by n(A) or |A|.
• Finite Set: n(A) is a non-negative integer.
• Infinite Set: Elements cannot be counted by a finite natural number.

3. Subsets and Proper Subsets:
• A is a subset of B (A ⊆ B) if every element of A is also an element of B:
  (∀x)(x ∈ A ⟹ x ∈ B).
• A is a proper subset of B (A ⊂ B) if A ⊆ B and A ≠ B.
• Set Equality: A = B if and only if A ⊆ B and B ⊆ A.

4. Power Set:
• The set of all subsets of set A, denoted by P(A).
• If n(A) = k, then:
  - Total number of subsets = 2^k.
  - Total number of proper subsets = 2^k - 1.
  - Total number of non-empty subsets = 2^k - 1.`,
        workedExamples: [
          {
            problem: 'Let A = {1, 2, 3}. Find the power set P(A) and state its cardinality.',
            solution: 'Subsets with 0 elements: ∅\nSubsets with 1 element: {1}, {2}, {3}\nSubsets with 2 elements: {1, 2}, {1, 3}, {2, 3}\nSubsets with 3 elements: {1, 2, 3}\nP(A) = {∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.\nCardinality n(P(A)) = 2³ = 8.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If a set A has 5 elements, how many PROPER subsets does set A possess?',
            options: ['32', '31', '30', '16'],
            correctIndex: 1,
            explanation: 'Total subsets = 2^n = 2⁵ = 32. Proper subsets exclude the set itself, so 2⁵ - 1 = 31.'
          },
          {
            question: 'Which of the following statements is mathematically TRUE for any arbitrary set A?',
            options: [
              '∅ ∈ A',
              '∅ ⊆ A',
              '{∅} ⊆ A',
              'A ⊂ A'
            ],
            correctIndex: 1,
            explanation: 'The empty set ∅ is universally a subset of every set A (∅ ⊆ A). It is an element (∈) only if explicitly defined inside A.'
          },
          {
            question: 'If the power set P(B) has exactly 64 elements, how many elements does set B contain?',
            options: ['5', '6', '7', '8'],
            correctIndex: 1,
            explanation: 'n(P(B)) = 2^k = 64. Since 2⁶ = 64, k = 6 elements.'
          }
        ]
      },
      {
        id: 'math-1-3',
        topicNumber: '1.3',
        title: 'Operations on Sets & Inclusion-Exclusion Principle',
        summary: 'Union, intersection, set difference, symmetric difference, complements, De Morgan laws, and Cartesian product.',
        content: `### 1.3 Operations on Sets

1. Fundamental Operations:
• Union (A ∪ B) = {x | x ∈ A or x ∈ B}.
• Intersection (A ∩ B) = {x | x ∈ A and x ∈ B}. If A ∩ B = ∅, A and B are disjoint.
• Difference (Relative Complement A \\ B or A - B) = {x | x ∈ A and x ∉ B}.
• Absolute Complement (A\') = {x ∈ U | x ∉ A} = U \\ A.
• Symmetric Difference (A Δ B) = (A \\ B) ∪ (B \\ A) = (A ∪ B) \\ (A ∩ B).

2. De Morgan\'s Laws:
• (A ∪ B)\' = A\' ∩ B\'
• (A ∩ B)\' = A\' ∪ B\'

3. Cartesian Product:
• A × B = {(a, b) | a ∈ A and b ∈ B}.
• Cardinality: n(A × B) = n(A) × n(B).

4. Principle of Inclusion-Exclusion:
• For two finite sets:
  n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
• For three finite sets:
  n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C).`,
        workedExamples: [
          {
            problem: 'In a class of 50 students, 30 take Math, 25 take Physics, and 10 take both. How many take neither subject?',
            solution: 'Using inclusion-exclusion:\nn(M ∪ P) = n(M) + n(P) - n(M ∩ P) = 30 + 25 - 10 = 45.\nStudents taking neither = Total - n(M ∪ P) = 50 - 45 = 5.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If n(A) = 28, n(B) = 32, and n(A ∪ B) = 45, what is n(A ∩ B)?',
            options: ['12', '15', '17', '19'],
            correctIndex: 1,
            explanation: 'n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 28 + 32 - 45 = 60 - 45 = 15.'
          },
          {
            question: 'If universal set U = {1, 2, 3, 4, 5, 6, 7, 8}, A = {2, 4, 6, 8}, and B = {3, 4, 5, 6}, what is (A ∪ B)\'?',
            options: [
              '{1, 7}',
              '{4, 6}',
              '{2, 3, 5, 8}',
              '{1, 3, 5, 7}'
            ],
            correctIndex: 0,
            explanation: 'A ∪ B = {2, 3, 4, 5, 6, 8}. The complement (A ∪ B)\' consists of elements in U not in A ∪ B: {1, 7}.'
          },
          {
            question: 'If set A has 4 elements and set B has 3 elements, what is the cardinality of the Cartesian product A × B?',
            options: ['7', '12', '64', '81'],
            correctIndex: 1,
            explanation: 'n(A × B) = n(A) × n(B) = 4 × 3 = 12.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 2,
    title: 'UNIT TWO: FURTHER ON GEOMETRY',
    description: 'Polygons (interior/exterior angle sums), regular polygons, triangle congruence and similarity criteria, circle geometry (chords, tangents, secants, angle theorems), and 3D surface areas and volumes.',
    topics: [
      {
        id: 'math-2-1',
        topicNumber: '2.1',
        title: 'Regular Polygons & Interior/Exterior Angles',
        summary: 'Interior angle sum (n-2)×180°, exterior angle sum 360°, each interior angle of regular n-gon.',
        content: `### 2.1 Polygons and Angle Theorems

1. Convex Polygons:
• For any convex polygon with n sides:
  - Sum of Interior Angles: S_int = (n - 2) × 180°.
  - Sum of Exterior Angles (one at each vertex): S_ext = 360° (constant for all n).
  - Number of Diagonals = n(n - 3) / 2.

2. Regular Polygons:
• A polygon with all sides equal and all interior angles equal:
  - Each Interior Angle = ((n - 2) × 180°) / n.
  - Each Exterior Angle = 360° / n.
  - Interior angle + Exterior angle = 180° at any vertex.`,
        workedExamples: [
          {
            problem: 'Find the number of sides of a regular polygon whose interior angle measures 144°.',
            solution: 'Exterior angle = 180° - 144° = 36°.\nNumber of sides n = 360° / (Exterior angle) = 360° / 36° = 10 sides (regular decagon).'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the sum of the interior angles of a convex octagon (8-sided polygon)?',
            options: ['900°', '1,080°', '1,260°', '1,440°'],
            correctIndex: 1,
            explanation: 'Sum = (n - 2) × 180° = (8 - 2) × 180° = 6 × 180° = 1,080°.'
          },
          {
            question: 'How many diagonals can be drawn in a convex polygon with 12 sides (dodecagon)?',
            options: ['48', '54', '60', '72'],
            correctIndex: 1,
            explanation: 'Number of diagonals = n(n - 3) / 2 = 12(9) / 2 = 108 / 2 = 54.'
          },
          {
            question: 'If each exterior angle of a regular polygon is 24°, how many sides does the polygon have?',
            options: ['12', '14', '15', '16'],
            correctIndex: 2,
            explanation: 'Number of sides n = 360° / 24° = 15 sides.'
          }
        ]
      },
      {
        id: 'math-2-2',
        topicNumber: '2.2',
        title: 'Congruence, Similarity & Scale Factors',
        summary: 'SSS, SAS, ASA, AAS, RHS congruence criteria; AA, SAS, SSS similarity; ratio of areas and volumes.',
        content: `### 2.2 Congruence and Similarity

1. Congruence Criteria for Triangles:
• SSS (Side-Side-Side)
• SAS (Side-Angle-Side: angle must be included)
• ASA (Angle-Side-Angle) and AAS (Angle-Angle-Side)
• RHS (Right-angle, Hypotenuse, Side) for right triangles.

2. Similarity Criteria (Same shape, proportional sizes):
• AA (Angle-Angle): If two angles are equal, triangles are similar.
• SAS similarity: Two pairs of sides proportional and included angle equal.
• SSS similarity: All three pairs of corresponding sides in equal ratio.

3. Ratios of Linear Dimensions, Areas & Volumes:
• If scale factor of lengths is k:
  - Ratio of corresponding lengths/perimeters = k.
  - Ratio of corresponding areas = k².
  - Ratio of corresponding volumes = k³.`,
        workedExamples: [
          {
            problem: 'Two similar triangles have corresponding sides in the ratio 3 : 5. If the area of the smaller triangle is 36 cm², find the area of the larger triangle.',
            solution: 'Ratio of areas = (3/5)² = 9/25.\nArea_large = 36 × (25/9) = 4 × 25 = 100 cm².'
          }
        ],
        practiceQuestions: [
          {
            question: 'Two similar cylinders have heights in the ratio 2 : 3. What is the ratio of their volumes?',
            options: ['4 : 9', '2 : 3', '8 : 27', '16 : 81'],
            correctIndex: 2,
            explanation: 'The ratio of volumes of similar figures is the cube of the linear scale factor: k³ = (2/3)³ = 8 / 27.'
          },
          {
            question: 'If two triangles are similar and the ratio of their areas is 49 : 64, what is the ratio of their perimeters?',
            options: ['7 : 8', '49 : 64', '343 : 512', '14 : 16'],
            correctIndex: 0,
            explanation: 'Perimeter ratio = √(Area ratio) = √(49 / 64) = 7 / 8.'
          },
          {
            question: 'Which of the following is NOT a valid triangle congruence criterion?',
            options: ['SSS', 'SAS', 'AAA', 'RHS'],
            correctIndex: 2,
            explanation: 'AAA establishes similarity (equal angles), but does NOT guarantee congruence because side lengths can be scaled.'
          }
        ]
      },
      {
        id: 'math-2-3',
        topicNumber: '2.3',
        title: 'Circles: Chords, Tangents, Secants & Angle Theorems',
        summary: 'Inscribed angle theorem, intersecting chords theorem, tangent-secant power theorem, and cyclic quadrilaterals.',
        content: `### 2.3 Circle Theorems

1. Angles in a Circle:
• The angle subtended by an arc at the center is double the angle subtended at any point on the circumference: θ_center = 2 × θ_inscribed.
• Angles in the same segment subtended by the same arc are equal.
• Angle in a semicircle is a right angle (90°).
• In a cyclic quadrilateral (all 4 vertices on circle), opposite angles are supplementary (sum = 180°).

2. Intersecting Chords & Secant Theorems:
• Intersecting Chords (inside circle): AE × EB = CE × ED.
• Secant-Secant Theorem (outside circle at P): PA × PB = PC × PD.
• Tangent-Secant Theorem (PT tangent, PAB secant): PT² = PA × PB.
• Tangent from external point: The two tangent segments from point P to circle are equal in length and perpendicular to radius at point of contact (PT ⊥ OT).`,
        workedExamples: [
          {
            problem: 'From an external point P, a tangent PT of length 12 cm is drawn to a circle. A secant PAB intersects the circle at A and B. If PA = 8 cm, find the length of segment AB.',
            solution: 'Using tangent-secant theorem: PT² = PA × PB.\n12² = 8 × PB ⟹ 144 = 8 × PB ⟹ PB = 18 cm.\nLength AB = PB - PA = 18 - 8 = 10 cm.'
          }
        ],
        practiceQuestions: [
          {
            question: 'In a circle, an arc subtends an angle of 74° at the center. What is the measure of the inscribed angle subtended by the same arc at the circumference?',
            options: ['37°', '74°', '148°', '106°'],
            correctIndex: 0,
            explanation: 'The inscribed angle is half of the central angle: 74° / 2 = 37°.'
          },
          {
            question: 'ABCD is a cyclic quadrilateral. If angle A = 68°, what is the measure of the opposite angle C?',
            options: ['68°', '112°', '136°', '90°'],
            correctIndex: 1,
            explanation: 'Opposite angles in a cyclic quadrilateral are supplementary: Angle C = 180° - 68° = 112°.'
          },
          {
            question: 'Two chords AB and CD intersect inside a circle at point E. If AE = 4 cm, EB = 9 cm, and CE = 6 cm, find the length of ED.',
            options: ['4 cm', '6 cm', '8 cm', '9 cm'],
            correctIndex: 1,
            explanation: 'By the intersecting chords theorem: AE × EB = CE × ED ⟹ 4 × 9 = 6 × ED ⟹ 36 = 6 × ED ⟹ ED = 6 cm.'
          }
        ]
      },
      {
        id: 'math-2-4',
        topicNumber: '2.4',
        title: '3D Solids: Surface Areas and Volumes',
        summary: 'Prisms, cylinders, pyramids, cones, and spheres formulas and calculations.',
        content: `### 2.4 Three-Dimensional Solids

1. Prisms & Cylinders:
• Volume = Base Area × Height = B × h.
• Cylinder (radius r, height h):
  - Lateral Area = 2πrh.
  - Total Surface Area = 2πr² + 2πrh = 2πr(r + h).
  - Volume = πr²h.

2. Pyramids & Cones:
• Volume = (1/3) × Base Area × Height = (1/3)Bh.
• Right Circular Cone (radius r, height h, slant height l = √(r² + h²)):
  - Lateral Area = πrl.
  - Total Surface Area = πr² + πrl = πr(r + l).
  - Volume = (1/3)πr²h.

3. Spheres:
• Surface Area = 4πr².
• Volume = (4/3)πr³.`,
        workedExamples: [
          {
            problem: 'Calculate the volume and surface area of a sphere of radius 3 cm (in terms of π).',
            solution: 'Volume = (4/3)πr³ = (4/3)π(3³) = (4/3)π(27) = 36π cm³.\nSurface Area = 4πr² = 4π(3²) = 36π cm².'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the total surface area of a solid hemisphere of radius r?',
            options: ['2πr²', '3πr²', '4πr²', '(2/3)πr³'],
            correctIndex: 1,
            explanation: 'A solid hemisphere includes the curved surface area (2πr²) plus the circular flat base (πr²), yielding 3πr².'
          },
          {
            question: 'A right circular cone has a base radius of 6 cm and a vertical height of 8 cm. What is its lateral surface area?',
            options: ['48π cm²', '60π cm²', '80π cm²', '96π cm²'],
            correctIndex: 1,
            explanation: 'Slant height l = √(6² + 8²) = √(36 + 64) = 10 cm. Lateral area = πrl = π × 6 × 10 = 60π cm².'
          },
          {
            question: 'If the radius of a sphere is doubled, by what factor does its volume increase?',
            options: ['2 times', '4 times', '6 times', '8 times'],
            correctIndex: 3,
            explanation: 'Volume is proportional to r³. If r is replaced by 2r, volume becomes (2)³ = 8 times greater.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 3,
    title: 'UNIT THREE: POLYNOMIAL AND RATIONAL FUNCTIONS',
    description: 'Polynomial division (long and synthetic), remainder and factor theorems, rational root theorem, fundamental theorem of algebra, rational functions, domain, vertical/horizontal/oblique asymptotes, and holes.',
    topics: [
      {
        id: 'math-3-1',
        topicNumber: '3.1',
        title: 'Polynomial Division, Remainder & Factor Theorems',
        summary: 'Long division, synthetic division, Remainder Theorem f(c) = R, Factor Theorem (x - c is factor ⟺ f(c) = 0).',
        content: `### 3.1 Polynomial Division & Root Theorems

1. Polynomial Division Algorithm:
• For polynomials f(x) and d(x) with d(x) ≠ 0:
  f(x) = d(x) · q(x) + r(x), where r(x) = 0 or deg(r) < deg(d).

2. Remainder Theorem:
• If polynomial f(x) is divided by (x - c), the remainder is equal to f(c).
• If divided by (ax - b), the remainder is f(b/a).

3. Factor Theorem:
• (x - c) is a factor of f(x) if and only if f(c) = 0.

4. Rational Root Theorem:
• If f(x) = a_n x^n + ... + a₀ has integer coefficients, any rational zero p/q in lowest terms satisfies:
  - p is a factor of constant term a₀.
  - q is a factor of leading coefficient a_n.`,
        workedExamples: [
          {
            problem: 'Find the remainder when f(x) = 2x³ - 5x² + x - 7 is divided by (x - 2).',
            solution: 'By the Remainder Theorem, R = f(2).\nf(2) = 2(2)³ - 5(2)² + (2) - 7 = 2(8) - 5(4) + 2 - 7 = 16 - 20 + 2 - 7 = -9.'
          }
        ],
        practiceQuestions: [
          {
            question: 'For what value of k is (x + 2) a factor of P(x) = x³ + 3x² + kx + 6?',
            options: ['3', '5', '7', '-5'],
            correctIndex: 1,
            explanation: 'By the Factor Theorem, P(-2) = 0.\n(-2)³ + 3(-2)² + k(-2) + 6 = 0 ⟹ -8 + 12 - 2k + 6 = 0 ⟹ 10 - 2k = 0 ⟹ 2k = 10 ⟹ k = 5.'
          },
          {
            question: 'What is the remainder when f(x) = 3x⁴ - 2x² + 5 is divided by (x - 1)?',
            options: ['4', '5', '6', '8'],
            correctIndex: 2,
            explanation: 'Remainder R = f(1) = 3(1)⁴ - 2(1)² + 5 = 3 - 2 + 5 = 6.'
          },
          {
            question: 'According to the Rational Root Theorem, which of the following could possibly be a rational root of 2x³ - 3x² + 5x - 6 = 0?',
            options: ['5', '4', '3/2', '5/2'],
            correctIndex: 2,
            explanation: 'Factors of constant term -6 are ±1, ±2, ±3, ±6; factors of leading coeff 2 are ±1, ±2. Possible rational roots p/q include ±3/2. 5 and 4 are not factors of -6.'
          }
        ]
      },
      {
        id: 'math-3-2',
        topicNumber: '3.2',
        title: 'Rational Functions, Asymptotes & Holes',
        summary: 'Domain restrictions, vertical asymptotes (zeros of denominator), horizontal asymptotes, and removable discontinuities.',
        content: `### 3.2 Rational Functions and Asymptotic Behavior

A rational function is f(x) = P(x) / Q(x) where P and Q are polynomials and Q(x) ≠ 0.

1. Domain Restrictions & Removable Discontinuities (Holes):
• If (x - c) is a factor in both numerator and denominator, canceling (x - c) creates a hole at x = c if multiplicity in numerator ≥ denominator.

2. Vertical Asymptotes (VA):
• Located at zeros of the simplified denominator where Q(x) = 0. The line x = a is a VA.

3. Horizontal Asymptotes (HA):
• Let f(x) = (a_n x^n + ...) / (b_m x^m + ...):
  - Case 1: n < m (degree numerator < denominator) ⟹ HA is y = 0 (x-axis).
  - Case 2: n = m (equal degrees) ⟹ HA is y = a_n / b_m (ratio of leading coefficients).
  - Case 3: n > m ⟹ No horizontal asymptote (if n = m + 1, an oblique/slant asymptote exists).`,
        workedExamples: [
          {
            problem: 'Find the horizontal and vertical asymptotes of f(x) = (3x² - 5) / (x² - 4).',
            solution: '1. Vertical Asymptotes: Set denominator x² - 4 = 0 ⟹ x = 2 and x = -2.\n2. Horizontal Asymptote: Degree of numerator (2) = degree of denominator (2). Leading coefficients ratio = 3 / 1 = 3.\nHorizontal asymptote is y = 3.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the horizontal asymptote of the rational function f(x) = (4x² + 7) / (2x² - 3x + 1)?',
            options: ['y = 0', 'y = 2', 'y = 4', 'No horizontal asymptote'],
            correctIndex: 1,
            explanation: 'Since degrees are equal (2 = 2), HA is the ratio of leading coefficients: y = 4 / 2 = 2.'
          },
          {
            question: 'At which x-value does the function f(x) = (x² - 9) / (x - 3) have a removable discontinuity (hole)?',
            options: ['x = -3', 'x = 0', 'x = 3', 'x = 9'],
            correctIndex: 2,
            explanation: 'f(x) = (x - 3)(x + 3) / (x - 3). The common factor (x - 3) cancels, creating a removable hole at x = 3.'
          },
          {
            question: 'What are the vertical asymptotes of f(x) = 5 / (x² - 5x + 6)?',
            options: ['x = 2 and x = 3', 'x = -2 and x = -3', 'x = 5 and x = 6', 'x = 1 and x = 6'],
            correctIndex: 0,
            explanation: 'Denominator factors to (x - 2)(x - 3) = 0, giving vertical asymptotes at x = 2 and x = 3.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 4,
    title: 'UNIT FOUR: EXPONENTIAL AND LOGARITHMIC FUNCTIONS',
    description: 'Exponential laws, natural exponential e, exponential growth and decay, logarithmic properties, change of base, and solving exponential/logarithmic equations.',
    topics: [
      {
        id: 'math-4-1',
        topicNumber: '4.1',
        title: 'Exponential Functions, Laws & Applications',
        summary: 'f(x) = a^x (a > 0, a ≠ 1), domain R, range (0, ∞), exponential growth/decay models, half-life.',
        content: `### 4.1 Exponential Functions

1. Definition & Properties:
• f(x) = a^x, with base a > 0 and a ≠ 1.
  - Domain: (-∞, ∞); Range: (0, ∞).
  - Horizontal asymptote: y = 0.
  - Always passes through (0, 1) since a⁰ = 1.
  - If a > 1: Strictly increasing (Exponential Growth).
  - If 0 < a < 1: Strictly decreasing (Exponential Decay).

2. Exponential Growth & Decay Models:
• A(t) = A₀ · e^(kt) or A(t) = A₀ · (1 + r)^t.
• Half-Life Model: N(t) = N₀ · (1/2)^(t / t_half).`,
        workedExamples: [
          {
            problem: 'Solve the exponential equation: 4^(2x - 1) = 32.',
            solution: 'Express both sides with base 2:\n4 = 2² ⟹ (2²)^(2x - 1) = 2^(4x - 2).\n32 = 2⁵.\nSince bases are equal: 4x - 2 = 5 ⟹ 4x = 7 ⟹ x = 7/4.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Solve for x: 3^(x + 2) = 81.',
            options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
            correctIndex: 1,
            explanation: '81 = 3⁴. Thus, 3^(x + 2) = 3⁴ ⟹ x + 2 = 4 ⟹ x = 2.'
          },
          {
            question: 'What is the range of the function f(x) = 2^(x - 3) + 4?',
            options: ['(0, ∞)', '(3, ∞)', '(4, ∞)', '(-∞, ∞)'],
            correctIndex: 2,
            explanation: 'Since 2^(x - 3) > 0 for all real x, 2^(x - 3) + 4 > 4. The range is (4, ∞).'
          },
          {
            question: 'A radioactive substance with half-life 5 days has an initial mass of 80 grams. What mass remains after 15 days?',
            options: ['5 grams', '10 grams', '20 grams', '40 grams'],
            correctIndex: 1,
            explanation: 'Number of half-lives = 15 / 5 = 3. Remaining mass = 80 × (1/2)³ = 80 / 8 = 10 grams.'
          }
        ]
      },
      {
        id: 'math-4-2',
        topicNumber: '4.2',
        title: 'Logarithmic Functions & Properties',
        summary: 'log_a(x) = y ⟺ a^y = x, product, quotient, power rules, natural logarithm ln, change of base formula.',
        content: `### 4.2 Logarithmic Functions & Laws

1. Definition:
• y = log_a(x) ⟺ a^y = x (for x > 0, a > 0, a ≠ 1).
• Inverse of exponential function: Domain is (0, ∞), Range is (-∞, ∞).
• Vertical asymptote: x = 0 (y-axis).
• log_a(1) = 0 and log_a(a) = 1.

2. Laws of Logarithms:
• Product Rule: log_a(M · N) = log_a(M) + log_a(N).
• Quotient Rule: log_a(M / N) = log_a(M) - log_a(N).
• Power Rule: log_a(M^p) = p · log_a(M).
• Change of Base Formula: log_a(b) = (log_c b) / (log_c a) = (ln b) / (ln a).`,
        workedExamples: [
          {
            problem: 'Solve for x: log₂(x) + log₂(x - 2) = 3.',
            solution: 'Using product rule: log₂[x(x - 2)] = 3.\nConvert to exponential form: x(x - 2) = 2³ = 8.\nx² - 2x - 8 = 0 ⟹ (x - 4)(x + 2) = 0 ⟹ x = 4 or x = -2.\nSince log requires positive arguments, x = -2 is extraneous.\nSolution: x = 4.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the value of log₃(81) + log₂(1/8)?',
            options: ['1', '2', '7', '-1'],
            correctIndex: 0,
            explanation: 'log₃(81) = 4 (since 3⁴ = 81). log₂(1/8) = -3 (since 2⁻³ = 1/8). Sum = 4 + (-3) = 1.'
          },
          {
            question: 'If ln(x) = 3, what is the exact value of x?',
            options: ['3', 'e³', '3e', '10³'],
            correctIndex: 1,
            explanation: 'Natural logarithm has base e: ln(x) = 3 ⟺ x = e³.'
          },
          {
            question: 'Solve for x: log(x + 3) - log(x) = 1 (base 10).',
            options: ['1/3', '1/9', '3', '9'],
            correctIndex: 0,
            explanation: 'log((x + 3)/x) = 1 ⟹ (x + 3)/x = 10¹ = 10 ⟹ x + 3 = 10x ⟹ 9x = 3 ⟹ x = 3/9 = 1/3.'
          }
        ]
      }
    ]
  }
];
