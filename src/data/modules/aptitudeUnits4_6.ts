import { ModuleUnit } from '../modulesData';

export const APTITUDE_UNITS_4_TO_6: ModuleUnit[] = [
  {
    unitNumber: 4,
    title: 'UNIT FOUR: ANALYTICAL LOGIC & DEDUCTIVE REASONING',
    description: 'Categorical syllogisms, family tree blood relations, circular and linear seating arrangements, and compass direction navigation problems.',
    topics: [
      {
        id: 'apt-4-1',
        topicNumber: '4.1',
        title: 'Syllogisms & Categorical Propositions',
        summary: 'Standard categorical forms (All, Some, No, Some Not), Venn diagram deduction, and truth validity rules.',
        content: `### 4.1 Categorical Syllogisms & Venn Method

1. The Four Categorical Propositions:
• Universal Affirmative (A): "All S are P" (Set S is completely enclosed within set P).
• Universal Negative (E): "No S are P" (Set S and set P are completely disjoint; intersection is empty).
• Particular Affirmative (I): "Some S are P" (There is an overlap between set S and set P).
• Particular Negative (O): "Some S are not P" (At least one member of set S lies outside set P).

2. Rules of Syllogistic Inference:
• Two negative premises yield NO valid conclusion.
• Two particular premises yield NO valid conclusion.
• If one premise is negative, any valid conclusion must be negative.
• If one premise is particular, any valid conclusion must be particular.

3. Venn Diagram Technique:
• Draw overlapping circles for the terms.
• Shade or place markers based strictly on premises.
• A conclusion is valid ONLY if it holds true in every possible diagram that satisfies the premises.`,
        workedExamples: [
          {
            problem: 'Statements: 1. All cats are mammals. 2. All mammals are animals.\nConclusion: Can we conclude that "All cats are animals"?',
            solution: 'Set Cats ⊆ Set Mammals ⊆ Set Animals.\nSince Cats are completely inside Mammals, and Mammals are completely inside Animals, Cats must be inside Animals.\nValid conclusion: Yes, All cats are animals.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Statements:\n1. All roses are flowers.\n2. Some flowers fade quickly.\nConclusions:\nI. Some roses fade quickly.\nII. Some roses do not fade quickly.\nWhich conclusion logically follows?',
            options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Neither I nor II follows necessarily'],
            correctIndex: 3,
            explanation: 'The flowers that fade quickly may not include roses at all; thus, neither conclusion I nor II can be definitively proven from the premises alone.'
          },
          {
            question: 'Statements:\n1. No bird is a mammal.\n2. All bats are mammals.\nConclusions:\nI. No bat is a bird.\nII. No bird is a bat.',
            options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither follows'],
            correctIndex: 2,
            explanation: 'Since Bats ⊆ Mammals and Mammals ∩ Birds = ∅, Bats and Birds are completely disjoint. Therefore, both "No bat is a bird" and "No bird is a bat" are valid.'
          },
          {
            question: 'Statements:\n1. Some doctors are teachers.\n2. All teachers are researchers.\nConclusion: Some doctors are researchers.',
            options: ['The conclusion is definitively true', 'The conclusion is false', 'The conclusion is uncertain', 'Insufficient data'],
            correctIndex: 0,
            explanation: 'The subset of doctors who are teachers are also researchers because ALL teachers are researchers. Hence, at least some doctors are researchers.'
          }
        ]
      },
      {
        id: 'apt-4-2',
        topicNumber: '4.2',
        title: 'Blood Relations & Family Tree Deduction',
        summary: 'Deciphering multi-generational family trees, maternal vs paternal lineages, and pointing-to-photograph puzzles.',
        content: `### 4.2 Blood Relations & Genealogical Trees

1. Relationship Nomenclature:
• Father\'s / Mother\'s Father = Grandfather.
• Father\'s / Mother\'s Brother = Uncle.
• Father\'s / Mother\'s Sister = Aunt.
• Uncle\'s / Aunt\'s Son or Daughter = Cousin.
• Brother\'s / Sister\'s Son = Nephew.
• Brother\'s / Sister\'s Daughter = Niece.
• Sister of Husband / Wife = Sister-in-law.

2. Standardization Method for Puzzles:
• Use generations as vertical tiers: Grandparents ⟶ Parents/Aunts/Uncles ⟶ Siblings/Cousins ⟶ Children.
• Use symbols for gender: (+) for Male, (-) for Female.
• Use double horizontal line (=) for married couples, and single horizontal line (-) for sibling relationships.`,
        workedExamples: [
          {
            problem: 'Pointing to a photograph of a boy, Dawit said: "He is the only son of the only daughter of my grandfather." How is Dawit related to the boy if Dawit has no brothers or sisters?',
            solution: 'Dawit\'s grandfather has an only daughter ⟹ That daughter is Dawit\'s mother.\nThe boy is the only son of Dawit\'s mother ⟹ The boy is Dawit himself (or his brother; since Dawit has no brothers, Dawit is pointing to himself).'
          }
        ],
        practiceQuestions: [
          {
            question: 'Pointing to a gentleman, Helen said, "His only brother is the father of my daughter\'s father." How is the gentleman related to Helen\'s husband?',
            options: ['Father', 'Brother', 'Uncle', 'Grandfather'],
            correctIndex: 2,
            explanation: 'Helen\'s daughter\'s father is Helen\'s husband. The gentleman\'s brother is Helen\'s husband\'s father (father-in-law to Helen). The brother of one\'s father is an uncle.'
          },
          {
            question: 'A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?',
            options: ['Father', 'Uncle', 'Brother', 'Grandfather'],
            correctIndex: 1,
            explanation: 'A is brother to C. C is the father of D. The brother of a father is an uncle.'
          },
          {
            question: 'If "P + Q" means P is the mother of Q; "P - Q" means P is the brother of Q; and "P × Q" means P is the father of Q, which of the following means that M is the maternal uncle of N?',
            options: ['M - K + N', 'M + K - N', 'M × K + N', 'M - K × N'],
            correctIndex: 0,
            explanation: 'M - K means M is brother of K. K + N means K is mother of N. Therefore, M is the brother of N\'s mother, which is the definition of maternal uncle.'
          }
        ]
      },
      {
        id: 'apt-4-3',
        topicNumber: '4.3',
        title: 'Seating Arrangements & Linear Rankings',
        summary: 'Linear rows, circular tables (facing center vs outward), and ordinal position calculations from left/right extremes.',
        content: `### 4.3 Arrangements and Linear Orderings

1. Linear Ranking Formula:
• Total persons in a row:
  Total = (Rank from Left) + (Rank from Right) - 1.
• If a person\'s rank from Left is L in a row of N people:
  Rank from Right = (N - L) + 1.

2. Circular Seating Arrangements:
• Facing the Center:
  - Moving Clockwise = Moving to the Left.
  - Moving Counter-Clockwise = Moving to the Right.
• Facing Outward: Directions are reversed.`,
        workedExamples: [
          {
            problem: 'In a class of 45 students, Abebe ranks 16th from the top. What is his rank from the bottom?',
            solution: 'Rank from bottom = Total - Rank from top + 1 = 45 - 16 + 1 = 30th.'
          }
        ],
        practiceQuestions: [
          {
            question: 'In a row of boys, if Yohannes is 10th from the left and 9th from the right, how many boys are in the row?',
            options: ['17', '18', '19', '20'],
            correctIndex: 1,
            explanation: 'Total = Left rank + Right rank - 1 = 10 + 9 - 1 = 18.'
          },
          {
            question: 'Five colleagues A, B, C, D, and E are seated in a row. B is between A and C. E is to the right of C. D is to the left of A. Who is in the exact middle?',
            options: ['A', 'B', 'C', 'D'],
            correctIndex: 1,
            explanation: 'Arrangement from left to right: D - A - B - C - E. The middle person is B.'
          },
          {
            question: 'Six friends are sitting in a circle facing the center. P is between M and N. Q is opposite P. R is to the immediate right of N. Who is sitting opposite R?',
            options: ['M', 'N', 'P', 'Cannot be determined without more details'],
            correctIndex: 0,
            explanation: 'Placing 6 chairs facing inward: If P is at bottom, M and N are adjacent. N with R to immediate right places R opposite M.'
          }
        ]
      },
      {
        id: 'apt-4-4',
        topicNumber: '4.4',
        title: 'Direction Sense & Compass Navigation Puzzles',
        summary: 'Cardinal and ordinal compass directions, turn angles (90°, 180°), and shortest displacement via Pythagorean theorem.',
        content: `### 4.4 Direction Sense & Spatial Displacement

1. Compass Cardinal Points:
• Four Cardinal Directions: North (N), South (S), East (E), West (W).
• Four Inter-cardinal Points: North-East (NE), South-East (SE), South-West (SW), North-West (NW).
• Turns:
  - Facing North: Right turn = East, Left turn = West.
  - Facing South: Right turn = West, Left turn = East.
  - Facing East: Right turn = South, Left turn = North.
  - Facing West: Right turn = North, Left turn = South.

2. Shortest Distance (Displacement):
• Use Pythagorean theorem for right-angled triangles:
  Displacement d = √(Δx² + Δy²), where Δx is net East-West displacement and Δy is net North-South displacement.`,
        workedExamples: [
          {
            problem: 'A person walks 8 km North, then turns right and walks 6 km East. How far and in what direction is he from his starting point?',
            solution: '1. Net North = 8 km; Net East = 6 km.\n2. Straight-line distance d = √(8² + 6²) = √(64 + 36) = √100 = 10 km.\n3. Direction = North-East.'
          }
        ],
        practiceQuestions: [
          {
            question: 'A man travels 4 km North, then turns left and walks 3 km. How far is he from his starting point?',
            options: ['5 km', '6 km', '7 km', '8 km'],
            correctIndex: 0,
            explanation: 'The journey forms a right-angled triangle with legs 4 km and 3 km. Distance = √(4² + 3²) = √(16 + 9) = √25 = 5 km.'
          },
          {
            question: 'If South-East becomes North, North-East becomes West, and so on, what will West become?',
            options: ['North-East', 'South-East', 'North-West', 'South-West'],
            correctIndex: 1,
            explanation: 'South-East rotating to North represents a 135° counter-clockwise turn. Applying a 135° counter-clockwise turn to West yields South-East.'
          },
          {
            question: 'Starting from point A, Sarah walks 10 meters East, turns right and walks 10 meters, turns right again and walks 10 meters. In which direction is she from point A?',
            options: ['North', 'South', 'East', 'West'],
            correctIndex: 1,
            explanation: '10 m East (+x), 10 m South (-y), 10 m West (-x). The horizontal movements cancel (10 - 10 = 0), leaving her 10 meters due South of point A.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 5,
    title: 'UNIT FIVE: ABSTRACT & SPATIAL REASONING',
    description: 'Matrix completions, rotational pattern transformations, letter/number cipher encoding, and odd-one-out classification.',
    topics: [
      {
        id: 'apt-5-1',
        topicNumber: '5.1',
        title: 'Figure Series, Rotations & Pattern Matrices',
        summary: 'Clockwise/counter-clockwise 45°/90°/180° rotations, mirror reflections, and additive/subtractive geometric element rules.',
        content: `### 5.1 Abstract Geometry & Matrix Patterns

1. Common Transformation Rules:
• Rotation: Elements rotate by fixed angular increments (e.g., +45°, +90°, +180° clockwise or counter-clockwise).
• Translation / Shifting: Elements step across corners or sides in fixed cycle orders.
• Reflection: Symmetry along vertical or horizontal mirror planes.
• Addition / Subtraction of Features: Number of sides, dots, or cross-bars increasing by +1, +2 or alternating.
• Superposition / Boolean Operations: XOR logic (features present in both figures disappear, unique features remain).`,
        workedExamples: [
          {
            problem: 'A square has an arrow pointing North in figure 1, North-East in figure 2, East in figure 3, and South-East in figure 4. Where does it point in figure 5?',
            solution: 'The arrow rotates clockwise by 45° in each successive frame:\nNorth (0°) ⟶ NE (45°) ⟶ East (90°) ⟶ SE (135°) ⟶ South (180°).\nAnswer: SOUTH.'
          }
        ],
        practiceQuestions: [
          {
            question: 'A clock face shows 3:00. If the hour hand rotates 135 degrees clockwise, at what hour marker will it point?',
            options: ['6:30', '7:30', '8:00', '9:00'],
            correctIndex: 1,
            explanation: 'Each hour interval on a 12-hour clock represents 360° / 12 = 30°. Rotating 135° = 135 / 30 = 4.5 hour markers clockwise. Starting at 3, 3 + 4.5 = 7:30.'
          },
          {
            question: 'In a progressive polygon sequence, the shapes have 3 sides, 4 sides, 5 sides, and 6 sides. What shape appears next?',
            options: ['Hexagon', 'Heptagon (7 sides)', 'Octagon', 'Nonagon'],
            correctIndex: 1,
            explanation: 'The number of sides increases by +1 each term: Triangle (3) ⟶ Quadrilateral (4) ⟶ Pentagon (5) ⟶ Hexagon (6) ⟶ Heptagon (7).'
          },
          {
            question: 'If a shape is mirrored across a horizontal axis, which coordinate or dimension is inverted?',
            options: ['Left and right are swapped', 'Top and bottom are inverted (vertical flip)', 'It rotates 90 degrees', 'No change occurs'],
            correctIndex: 1,
            explanation: 'Horizontal reflection flips the shape across the horizontal plane, inverting top and bottom while preserving left-to-right orientation.'
          }
        ]
      },
      {
        id: 'apt-5-2',
        topicNumber: '5.2',
        title: 'Coding-Decoding & Cipher Systems',
        summary: 'Caesar letter shifts, reverse alphabet mappings (A=26, Z=1), and symbol-word transpositions.',
        content: `### 5.2 Cryptography and Cipher Decoding

1. Alphabetical Positioning:
• Forward positions: A=1, B=2, C=3 ... M=13 ... X=24, Y=25, Z=26. (Mnemonic: EJOTY = 5, 10, 15, 20, 25).
• Reverse positions (Opposite letter pairs sum to 27):
  - A ↔ Z (1+26=27), B ↔ Y (2+25=27), C ↔ X, D ↔ W, E ↔ V, M ↔ N.

2. Typical Cipher Rules:
• Constant Shift (+k or -k): Every letter is shifted forward or backward by k positions.
• Variable Shift: +1, +2, +3, +4...
• Position Scramble / Anagram: Rearranging letter indices without altering the letters themselves.`,
        workedExamples: [
          {
            problem: 'If the word "CAT" is coded as "DBU", how is "DOG" coded using the same rule?',
            solution: 'C (+1) = D\nA (+1) = B\nT (+1) = U\nEvery letter shifts forward by +1.\nApplying to DOG:\nD (+1) = E\nO (+1) = P\nG (+1) = H\nAnswer: EPH.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If "EARTH" is coded as "GCTVJ" in a certain code, how is "GLOBE" written in that same code?',
            options: ['INQDG', 'INQDH', 'IMQDG', 'JNQDH'],
            correctIndex: 0,
            explanation: 'Rule is +2 forward shift for every letter:\nE(+2)=G, A(+2)=C, R(+2)=T, T(+2)=V, H(+2)=J.\nFor GLOBE:\nG(+2)=I, L(+2)=N, O(+2)=Q, B(+2)=D, E(+2)=G ⟹ INQDG.'
          },
          {
            question: 'If in a code language, A = 1, AND = 19, what is the numerical code for BAT?',
            options: ['21', '22', '23', '24'],
            correctIndex: 2,
            explanation: 'A=1, N=14, D=4 ⟹ 1 + 14 + 4 = 19 (sum of alphabet positions).\nFor BAT: B=2, A=1, T=20 ⟹ 2 + 1 + 20 = 23.'
          },
          {
            question: 'If "FRIEND" is coded as "HUMJTK", what is the shift applied to each consecutive letter?',
            options: ['+1, +2, +3, +4, +5, +6', '+2, +3, +4, +5, +6, +7', '+2, +2, +2, +2, +2, +2', 'All letters reversed'],
            correctIndex: 1,
            explanation: 'F(6)+2=H(8); R(18)+3=U(21); I(9)+4=M(13); E(5)+5=J(10); N(14)+6=T(20); D(4)+7=K(11). Shift is +2, +3, +4, +5, +6, +7.'
          }
        ]
      },
      {
        id: 'apt-5-3',
        topicNumber: '5.3',
        title: 'Classification & Odd-One-Out Identification',
        summary: 'Identifying non-conforming items through prime numbers, semantic categories, and geometric symmetries.',
        content: `### 5.3 Classification: Isolating Anomalies

Odd-one-out questions require finding the common defining attribute shared by all choices except one.

1. Common Classification Criteria:
• Number Classification: Primes vs composites, odd vs even, squares/cubes, divisibility rules.
• Word Classification: Part of speech, biological taxonomy (mammals vs reptiles), tool vs product.
• Letter Classification: Vowels vs consonants, positional symmetry, difference between consecutive letters.`,
        workedExamples: [
          {
            problem: 'Identify the odd one out: 2, 3, 5, 7, 9, 11, 13',
            solution: '2, 3, 5, 7, 11, 13 are all prime numbers.\n9 is a composite number (3 × 3).\nAnswer: 9.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which of the following numbers is the ODD one out: 27, 64, 125, 144, 216?',
            options: ['27', '64', '125', '144'],
            correctIndex: 3,
            explanation: '27 (3³), 64 (4³), 125 (5³), and 216 (6³) are perfect cubes. 144 is 12² (a square, not a cube).'
          },
          {
            question: 'Choose the word which is LEAST like the other words in the group: Zinc, Iron, Copper, Mercury, Gold.',
            options: ['Iron', 'Zinc', 'Mercury', 'Gold'],
            correctIndex: 2,
            explanation: 'Mercury is the only metal that is liquid at standard room temperature; all the others are solids.'
          },
          {
            question: 'Which letter group does NOT follow the same pattern: BDF, HJL, NPR, KMO, TVW?',
            options: ['BDF', 'HJL', 'KMO', 'TVW'],
            correctIndex: 3,
            explanation: 'In BDF, HJL, NPR, and KMO, letters skip one position (+2, +2). In TVW, T to V is +2, but V to W is only +1.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 6,
    title: 'UNIT SIX: DATA INTERPRETATION & CRITICAL EVALUATION',
    description: 'Tabular data analysis, bar/line/pie chart computations, percentage growth, and statement-assumption critical thinking.',
    topics: [
      {
        id: 'apt-6-1',
        topicNumber: '6.1',
        title: 'Tables, Bar Charts & Pie Chart Calculations',
        summary: 'Extracting data trends, calculating percentage shares, and degree-to-percentage pie sector conversions.',
        content: `### 6.1 Data Interpretation (DI) Calculations

1. Pie Chart Conversions:
• Total circle = 360° = 100%.
• 1% = 3.6°.
• Angle of sector θ = (Percentage / 100) × 360°.
• Value represented by sector = (θ / 360°) × Total Value.

2. Growth Rate & Percentage Share:
• % Growth = ((Value in Year 2 - Value in Year 1) / Value in Year 1) × 100%.
• Percentage share = (Category Value / Total Value) × 100%.`,
        workedExamples: [
          {
            problem: 'In a university pie chart, the sector representing Engineering students subtends an angle of 72° at the center. What percentage of total students are enrolled in Engineering?',
            solution: 'Percentage = (Angle / 360°) × 100% = (72 / 360) × 100% = (1 / 5) × 100% = 20%.'
          }
        ],
        practiceQuestions: [
          {
            question: 'A pie chart shows that education accounts for 54° of a family\'s monthly budget. What percentage of the budget is spent on education?',
            options: ['12%', '15%', '18%', '20%'],
            correctIndex: 1,
            explanation: 'Percentage = (54° / 360°) × 100% = (3 / 20) × 100% = 15%.'
          },
          {
            question: 'A company\'s sales increased from 40 million Birr in 2024 to 50 million Birr in 2025. What was the percentage increase in sales?',
            options: ['20%', '25%', '30%', '35%'],
            correctIndex: 1,
            explanation: '% Increase = ((50 - 40) / 40) × 100% = (10 / 40) × 100% = 25%.'
          },
          {
            question: 'If 30% of a school\'s 1,200 students are enrolled in science and 45% of those science students are female, how many female science students are there?',
            options: ['144', '162', '180', '196'],
            correctIndex: 1,
            explanation: 'Total science students = 1,200 × 0.30 = 360. Female science students = 360 × 0.45 = 162.'
          }
        ]
      },
      {
        id: 'apt-6-2',
        topicNumber: '6.2',
        title: 'Critical Thinking: Assumptions, Inferences & Fallacies',
        summary: 'Evaluating implicit assumptions, distinguishing valid inferences from unwarranted speculations, and recognizing common fallacies.',
        content: `### 6.2 Critical Reasoning & Argument Analysis

1. Statement and Assumption:
• An assumption is something unstated that is taken for granted as true to make an argument logical.
• Test for Validity (Negation Test): If negating the assumption collapses or invalidates the conclusion, the assumption is necessary and valid.

2. Common Logical Fallacies in Aptitude:
• Ad Hominem: Attacking the person rather than the argument.
• Post Hoc Ergo Propter Hoc: Assuming correlation or sequence implies causation (e.g., event B followed event A, so A caused B).
• Circular Reasoning: The conclusion is smuggled into the premise.
• False Dilemma: Presenting only two extreme choices when intermediate alternatives exist.`,
        workedExamples: [
          {
            problem: 'Statement: "Drink FreshTea to stay energetic all day long."\nAssumption: 1. People want to stay energetic throughout the day.\nIs this assumption implicit?',
            solution: 'Yes. An advertisement recommending a beverage to remain energetic assumes that the target audience desires to stay energetic.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Statement: "Please do not use mobile phones inside the hospital intensive care unit."\nAssumptions:\nI. Mobile phone signals can interfere with sensitive medical equipment.\nII. People usually follow reasonable cautionary notices.\nWhich assumption is implicit?',
            options: ['Only assumption I is implicit', 'Only assumption II is implicit', 'Both assumptions I and II are implicit', 'Neither assumption is implicit'],
            correctIndex: 2,
            explanation: 'Both assumptions are implicit: the warning is posted because phones may interfere with equipment, and the hospital assumes visitors will heed the notice.'
          },
          {
            question: 'Which logical fallacy assumes that because Event B occurred immediately after Event A, Event A must have caused Event B?',
            options: ['Ad Hominem', 'False Dilemma', 'Post Hoc (Faulty Causality)', 'Straw Man'],
            correctIndex: 2,
            explanation: 'The Post Hoc Ergo Propter Hoc fallacy assumes sequential occurrence proves causal connection.'
          },
          {
            question: 'Statement: "The city council should build more bicycle lanes to reduce downtown traffic congestion."\nWhich of the following, if true, most strongly strengthens this argument?',
            options: ['Bicycles produce zero greenhouse emissions', 'A recent survey showed 40% of commuters would bike to work if safe lanes existed', 'Bicycle lanes require occasional asphalt resurfacing', 'Bicycles travel slower than motor vehicles'],
            correctIndex: 1,
            explanation: 'Demonstrating that commuters would actively switch from cars to bicycles if lanes are built directly supports reducing traffic congestion.'
          }
        ]
      }
    ]
  }
];
