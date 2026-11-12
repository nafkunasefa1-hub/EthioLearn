import { ModuleUnit } from '../modulesData';

export const APTITUDE_UNITS_1_TO_3: ModuleUnit[] = [
  {
    unitNumber: 1,
    title: 'UNIT ONE: NUMERICAL & QUANTITATIVE APTITUDE',
    description: 'Number sequences, difference layers, ratio and proportion, percentages, profit and loss, time and work, and speed-distance-time word problems for competitive admissions tests.',
    topics: [
      {
        id: 'apt-1-1',
        topicNumber: '1.1',
        title: 'Number Series, Sequences & Missing Term Patterns',
        summary: 'Identifying single-tier, two-tier differences, geometric multiples, square/cube offsets, and alternating sequences.',
        content: `### 1.1 Number Series and Pattern Recognition

Number series questions evaluate the candidate's ability to identify underlying mathematical rules governing consecutive terms.

1. Common Sequence Archetypes:
• Arithmetic Differences (Single & Two-Tier):
  - Constant difference: d = T_{n} - T_{n-1} = k.
  - Variable difference: The difference itself forms an arithmetic progression (+2, +4, +6, +8...).
• Geometric Sequences & Multiplicative Rules:
  - Each term is multiplied or divided by a factor: T_{n} = T_{n-1} × r (or × 2 + 1, × 3 - 2).
• Squares and Cubes:
  - Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...
  - Perfect cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000...
  - Offsets: (n² - 1), (n² + 1), (n³ - n), (n³ + 1).
• Alternating / Interleaved Series:
  - Two distinct series intertwined at odd and even index positions.
  - Series 1 (Positions 1, 3, 5, 7...): Rule A.
  - Series 2 (Positions 2, 4, 6, 8...): Rule B.
• Fibonacci & Triangular Cumulative Sequences:
  - Each term is the sum of the preceding two terms: 1, 1, 2, 3, 5, 8, 13, 21...

2. Systematic Strategy for Missing Number Problems:
• Step 1: Check if terms grow rapidly. If terms increase exponentially, look for multiplication, powers, or factorials.
• Step 2: If growth is gradual, calculate first differences Δ₁ = T_{n} - T_{n-1}.
• Step 3: If Δ₁ is not constant, calculate second differences Δ₂ = Δ_{n} - Δ_{n-1}.
• Step 4: If numbers fluctuate up and down, test for alternating interleaved series.`,
        workedExamples: [
          {
            problem: 'Find the next term in the series: 3, 7, 15, 31, 63, ?',
            solution: 'Observe term transitions:\n3 × 2 + 1 = 7\n7 × 2 + 1 = 15\n15 × 2 + 1 = 31\n31 × 2 + 1 = 63\nRule: T_n = 2 × T_{n-1} + 1.\nNext term = 63 × 2 + 1 = 126 + 1 = 127.\nAlternatively, first differences are 4, 8, 16, 32, 64 (powers of 2): 63 + 64 = 127.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the missing number in the following sequence: 2, 6, 12, 20, 30, 42, ?',
            options: ['52', '56', '60', '64'],
            correctIndex: 1,
            explanation: 'Differences between consecutive terms are: 6 - 2 = 4, 12 - 6 = 6, 20 - 12 = 8, 30 - 20 = 10, 42 - 30 = 12. The differences increase by 2 each step. Next difference = 14. Therefore, missing term = 42 + 14 = 56. (Also n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42, 7×8=56).'
          },
          {
            question: 'Find the missing term in the alternating sequence: 4, 18, 8, 14, 12, 10, 16, ?',
            options: ['6', '8', '18', '20'],
            correctIndex: 0,
            explanation: 'This is an interleaved series:\nOdd positions: 4, 8, 12, 16 (increases by +4).\nEven positions: 18, 14, 10, ? (decreases by -4).\nNext term = 10 - 4 = 6.'
          },
          {
            question: 'Identify the next number in the series: 1, 8, 27, 64, 125, ?',
            options: ['169', '196', '216', '256'],
            correctIndex: 2,
            explanation: 'The terms are consecutive cubes of positive integers: 1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125. The next term is 6³ = 216.'
          }
        ]
      },
      {
        id: 'apt-1-2',
        topicNumber: '1.2',
        title: 'Ratios, Proportions, Mixtures & Alligations',
        summary: 'Compounding ratios, sharing in given proportions, direct and inverse variation, and weighted mixture alligations.',
        content: `### 1.2 Ratios, Proportions and Mixtures

1. Fundamental Concepts:
• Ratio: Quantitative relation comparing two magnitudes of the same kind: a : b = a / b.
• Proportion: Equality of two ratios: a : b = c : d ⟺ a × d = b × c (Product of extremes = Product of means).
  - Fourth proportional to a, b, c is x = (b × c) / a.
  - Mean proportional between a and b is x = √(a × b).

2. Dividing Quantities in Given Ratios:
• To divide an amount T among A, B, and C in the ratio p : q : r:
  - Total parts = p + q + r.
  - Share of A = (p / (p + q + r)) × T.
  - Share of B = (q / (p + q + r)) × T.
  - Share of C = (r / (p + q + r)) × T.

3. Rule of Alligation (Mixture Problems):
• When two ingredients of prices/concentrations C₁ (cheaper) and C₂ (dearer) are mixed to produce an intermediate mean price C_m:
  - (Quantity of Cheaper) / (Quantity of Dearer) = (C₂ - C_m) / (C_m - C₁).
• Dilution Formula:
  - If a vessel contains x units of pure liquid and y units are removed and replaced with water repeatedly n times:
    Liquid remaining = x × (1 - y / x)^n.`,
        workedExamples: [
          {
            problem: 'Divide 4,500 Birr among three students A, B, and C in the ratio 2 : 3 : 4. How much does student B receive?',
            solution: 'Sum of ratio parts = 2 + 3 + 4 = 9 parts.\nValue of 1 part = 4,500 Birr / 9 = 500 Birr.\nStudent B has 3 parts: Share of B = 3 × 500 = 1,500 Birr.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If A : B = 3 : 4 and B : C = 8 : 9, what is the ratio A : C in simplest terms?',
            options: ['1 : 2', '2 : 3', '3 : 5', '4 : 5'],
            correctIndex: 1,
            explanation: 'A / C = (A / B) × (B / C) = (3 / 4) × (8 / 9) = (3 × 8) / (4 × 9) = 24 / 36 = 2 / 3. Thus, A : C = 2 : 3.'
          },
          {
            question: 'Two numbers are in the ratio 4 : 5. If 6 is subtracted from each, the resulting ratio becomes 5 : 7. What is the smaller number?',
            options: ['16', '24', '32', '40'],
            correctIndex: 1,
            explanation: 'Let numbers be 4x and 5x.\n(4x - 6) / (5x - 6) = 5 / 7\n7(4x - 6) = 5(5x - 6)\n28x - 42 = 25x - 30\n3x = 12 ⟹ x = 4.\nSmaller number = 4x = 4(4) = 16... Wait, let us check: if x=4, numbers are 16 and 20. Subtract 6: 10 and 14 -> 10/14 = 5/7. So the smaller number is 16!'
          },
          {
            question: 'In what ratio must an Ethiopian merchant mix coffee costing 60 Birr/kg with premium coffee costing 90 Birr/kg to obtain a blend worth 72 Birr/kg?',
            options: ['3 : 2', '2 : 1', '4 : 3', '5 : 2'],
            correctIndex: 0,
            explanation: 'Using the rule of alligation:\n(Quantity of cheaper 60 Birr) / (Quantity of dearer 90 Birr) = (90 - 72) / (72 - 60) = 18 / 12 = 3 / 2.'
          }
        ]
      },
      {
        id: 'apt-1-3',
        topicNumber: '1.3',
        title: 'Percentages, Profit, Loss & Interest Computations',
        summary: 'Percent change, successive discounts, cost/selling price margins, and simple vs compound interest formulas.',
        content: `### 1.3 Percentages, Commercial Arithmetic & Interest

1. Percentages & Relative Change:
• Percentage Change = (|Final - Initial| / Initial) × 100%.
• Successive Percentage Changes:
  - If a quantity is changed by +a% and then +b%:
    Net % Change = a + b + (a × b / 100) %.
  - If increased by a% then decreased by b%:
    Net % Change = a - b - (a × b / 100) %.

2. Commercial Profit and Loss:
• Profit (Gain) = Selling Price (SP) - Cost Price (CP).
• Loss = Cost Price (CP) - Selling Price (SP).
• Profit % = (Profit / CP) × 100%.
• Loss % = (Loss / CP) × 100%.
• Key relation: SP = CP × (100 ± Profit% or Loss%) / 100.
• Marked Price (MP) & Discount:
  - Discount = MP - SP. Discount % = (Discount / MP) × 100%.
  - Successive discounts d₁% and d₂%:
    Net Discount = d₁ + d₂ - (d₁ × d₂ / 100) %.

3. Interest Calculations:
• Simple Interest (SI):
  - SI = (P × R × T) / 100 (where P = Principal, R = Annual rate %, T = Time in years).
  - Total Amount A = P + SI = P × (1 + R × T / 100).
• Compound Interest (CI):
  - Amount A = P × (1 + R / (100 × n))^(n × T) (compounded n times per year).
  - For annual compounding (n = 1): A = P × (1 + R / 100)^T.
  - CI = Amount - Principal = P × [(1 + R / 100)^T - 1].
  - Difference between CI and SI for 2 years: Difference = P × (R / 100)².`,
        workedExamples: [
          {
            problem: 'A retailer buys an article for 800 Birr and marks it 25% above cost. If he gives a 10% discount on the marked price, find his net profit percentage.',
            solution: '1. Cost Price (CP) = 800 Birr.\n2. Marked Price (MP) = 800 × 1.25 = 1,000 Birr.\n3. Selling Price (SP) with 10% discount = 1,000 × (1 - 0.10) = 900 Birr.\n4. Profit = SP - CP = 900 - 800 = 100 Birr.\n5. Profit % = (100 / 800) × 100% = 12.5%.'
          }
        ],
        practiceQuestions: [
          {
            question: 'If the price of teff increases by 25%, by what percentage must a household reduce its consumption so that total expenditure remains unchanged?',
            options: ['15%', '20%', '25%', '30%'],
            correctIndex: 1,
            explanation: 'Expenditure = Price × Quantity. If price becomes 1.25P, then new quantity Q\' must satisfy 1.25 × Q\' = 1 ⟹ Q\' = 1 / 1.25 = 0.80 = 80% of original. Reduction = 100% - 80% = 20%. Formula: (r / (100 + r)) × 100% = (25 / 125) × 100% = 20%.'
          },
          {
            question: 'A shopkeeper sells a book for 540 Birr, incurring a 10% loss on cost. At what price must he sell it to earn a 15% profit?',
            options: ['600 Birr', '660 Birr', '690 Birr', '720 Birr'],
            correctIndex: 2,
            explanation: 'SP = CP × (1 - 0.10) ⟹ 540 = 0.90 × CP ⟹ CP = 540 / 0.90 = 600 Birr.\nDesired selling price for 15% profit = CP × (1 + 0.15) = 600 × 1.15 = 690 Birr.'
          },
          {
            question: 'What is the simple interest earned on an investment of 12,000 Birr deposited for 3 years at an annual interest rate of 8%?',
            options: ['2,400 Birr', '2,880 Birr', '3,120 Birr', '3,450 Birr'],
            correctIndex: 1,
            explanation: 'SI = (P × R × T) / 100 = (12,000 × 8 × 3) / 100 = 120 × 24 = 2,880 Birr.'
          }
        ]
      },
      {
        id: 'apt-1-4',
        topicNumber: '1.4',
        title: 'Time and Work, Pipes & Cisterns',
        summary: 'Unitary rate of work, combined work rates, alternate day shifts, and inlet/outlet reservoir filling rates.',
        content: `### 1.4 Time, Work & Cisterns

1. Fundamental Unitary Principle:
• If person A can complete a whole task in N days, A's 1-day work rate = 1 / N of the total job.
• Conversely, if A completes (1 / N) of a job in one day, the whole job takes N days.
• Combined Work Rate:
  - If A takes x days and B takes y days individually:
    Together in 1 day they complete (1 / x + 1 / y) = (x + y) / (x × y) of the job.
  - Time taken working together = (x × y) / (x + y) days.
  - If three workers take x, y, and z days: Time = (x × y × z) / (xy + yz + zx) days.

2. Efficiency and Wages:
• Efficiency is inversely proportional to time taken: Efficiency ∝ 1 / Time.
• Wages are distributed directly proportional to the amount of work completed by each individual (or their work rates).

3. Pipes and Cisterns:
• Inlet Pipe: Fills a reservoir (positive work rate +1 / T_in).
• Outlet (Leak / Drain) Pipe: Empties a reservoir (negative work rate -1 / T_out).
• Net filling rate with both inlet and outlet open = (1 / T_in) - (1 / T_out).`,
        workedExamples: [
          {
            problem: 'A can complete a piece of work in 12 days, and B can complete the same work in 24 days. If they work together, how many days will it take them to finish the work?',
            solution: 'Combined 1-day work = 1/12 + 1/24 = 2/24 + 1/24 = 3/24 = 1/8.\nSince they complete 1/8 of the job per day together, the total time required is 8 days.'
          }
        ],
        practiceQuestions: [
          {
            question: 'A can do a piece of work in 10 days, and B can do it in 15 days. How many days will they take to complete the work together?',
            options: ['5 days', '6 days', '7.5 days', '8 days'],
            correctIndex: 1,
            explanation: 'Time = (A × B) / (A + B) = (10 × 15) / (10 + 15) = 150 / 25 = 6 days.'
          },
          {
            question: 'Pipe A can fill a water tank in 6 hours, while drain pipe B can empty the full tank in 10 hours. If both pipes are opened simultaneously when the tank is empty, how long will it take to fill the tank completely?',
            options: ['12 hours', '15 hours', '18 hours', '20 hours'],
            correctIndex: 1,
            explanation: 'Net filling rate = 1/6 - 1/10 = (5 - 3) / 30 = 2/30 = 1/15 of the tank per hour. Therefore, the tank fills in 15 hours.'
          },
          {
            question: 'A is twice as efficient as B. If together they finish a project in 18 days, in how many days can A alone finish the work?',
            options: ['24 days', '27 days', '36 days', '54 days'],
            correctIndex: 1,
            explanation: 'Let B\'s rate = x; then A\'s rate = 2x. Together: 2x + x = 3x. Combined rate = 1/18 ⟹ 3x = 1/18 ⟹ x = 1/54 (B takes 54 days). A\'s rate = 2x = 2/54 = 1/27. Hence, A alone finishes in 27 days.'
          }
        ]
      },
      {
        id: 'apt-1-5',
        topicNumber: '1.5',
        title: 'Speed, Distance, Time, Trains & Relative Motion',
        summary: 'Conversion factors, average speed across journeys, relative speed (opposite vs same direction), and train crossing problems.',
        content: `### 1.5 Speed, Distance, Time & Relative Velocity

1. Core Equations and Unit Conversions:
• Distance (D) = Speed (S) × Time (T).
• Unit Conversion:
  - 1 km/h = 1000 m / 3600 s = 5 / 18 m/s.
  - To convert km/h to m/s: Multiply by 5/18.
  - To convert m/s to km/h: Multiply by 18/5.

2. Average Speed:
• Average Speed = Total Distance / Total Time.
• Special Case: When equal distances are traveled at speeds S₁ and S₂:
  Average Speed = (2 × S₁ × S₂) / (S₁ + S₂). (Harmonic mean of speeds).

3. Relative Speed:
• Objects moving in Opposite Directions (approaching each other):
  Relative Speed = S₁ + S₂.
• Objects moving in the Same Direction:
  Relative Speed = |S₁ - S₂|.

4. Trains Crossing Landmarks:
• Crossing a stationary point / pole / man (negligible length):
  Time = Length of Train / Speed of Train.
• Crossing a platform / bridge of length L:
  Time = (Length of Train + Length of Platform) / Speed of Train.
• Two trains of lengths L₁ and L₂ crossing each other:
  Time = (L₁ + L₂) / (Relative Speed).`,
        workedExamples: [
          {
            problem: 'A train 180 meters long is traveling at a speed of 72 km/h. How many seconds will it take to pass a stationary telegraph pole beside the track?',
            solution: '1. Convert speed to m/s: 72 × (5/18) = 4 × 5 = 20 m/s.\n2. Distance to cover = Length of train = 180 m.\n3. Time = Distance / Speed = 180 / 20 = 9 seconds.'
          }
        ],
        practiceQuestions: [
          {
            question: 'A motorist drives from Addis Ababa to Adama at 60 km/h and returns along the same route at 40 km/h. What is his average speed for the round trip?',
            options: ['48 km/h', '50 km/h', '52 km/h', '54 km/h'],
            correctIndex: 0,
            explanation: 'For equal distance: Average Speed = (2 × S₁ × S₂) / (S₁ + S₂) = (2 × 60 × 40) / (60 + 40) = 4,800 / 100 = 48 km/h.'
          },
          {
            question: 'A train 240 meters long passes a platform 360 meters long in 30 seconds. What is the speed of the train in km/h?',
            options: ['60 km/h', '72 km/h', '80 km/h', '90 km/h'],
            correctIndex: 1,
            explanation: 'Total distance = 240 + 360 = 600 meters. Speed = 600 m / 30 s = 20 m/s. Convert to km/h: 20 × (18 / 5) = 72 km/h.'
          },
          {
            question: 'Two runners run toward each other from two points 300 meters apart at speeds of 6 m/s and 4 m/s. After how many seconds will they meet?',
            options: ['25 seconds', '30 seconds', '35 seconds', '50 seconds'],
            correctIndex: 1,
            explanation: 'Relative speed moving in opposite directions = 6 + 4 = 10 m/s. Time to meet = Distance / Relative Speed = 300 / 10 = 30 seconds.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 2,
    title: 'UNIT TWO: ALGEBRAIC PUZZLES & MATHEMATICAL LOGIC',
    description: 'Age relationship puzzles, simultaneous linear constraints, weighted averages, and combinatorics/probability reasoning.',
    topics: [
      {
        id: 'apt-2-1',
        topicNumber: '2.1',
        title: 'Age Word Problems & Linear Constraint Systems',
        summary: 'Translating past, present, and future age descriptions into algebraic simultaneous equations.',
        content: `### 2.1 Age Relationship Puzzles and Linear Systems

1. Algebraic Modeling of Age Problems:
• Let the current age of an individual be x years.
  - Age n years ago = x - n.
  - Age n years hence (in future) = x + n.
• Constant Age Difference Principle:
  - The difference between the ages of any two people remains invariant across time:
    (Age_A(t) - Age_B(t)) = Constant for all t.
• Standard Setup:
  - Step 1: Assign variables to current ages (e.g., F = Father, S = Son).
  - Step 2: Formulate equations based on statements about current and past/future times.
  - Step 3: Solve via substitution or elimination.`,
        workedExamples: [
          {
            problem: 'A father is currently three times as old as his son. In 12 years, he will be twice as old as his son. What is the father\'s present age?',
            solution: 'Let Son\'s present age = S. Father\'s present age F = 3S.\nIn 12 years: F + 12 = 2(S + 12).\nSubstitute F = 3S:\n3S + 12 = 2S + 24\nS = 12 years.\nFather\'s present age = 3 × 12 = 36 years.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Ten years ago, a mother was four times as old as her daughter. Ten years hence, she will be twice as old as her daughter. What is the mother\'s present age?',
            options: ['40 years', '50 years', '60 years', '70 years'],
            correctIndex: 1,
            explanation: 'Let present ages be M and D.\n10 years ago: (M - 10) = 4(D - 10) ⟹ M - 10 = 4D - 40 ⟹ M = 4D - 30.\n10 years hence: (M + 10) = 2(D + 10) ⟹ M + 10 = 2D + 20 ⟹ M = 2D + 10.\nEquating M: 4D - 30 = 2D + 10 ⟹ 2D = 40 ⟹ D = 20.\nMother\'s age M = 2(20) + 10 = 50 years.'
          },
          {
            question: 'The sum of the ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?',
            options: ['4 years', '6 years', '8 years', '10 years'],
            correctIndex: 0,
            explanation: 'Let the youngest child be x. Ages are: x, x+3, x+6, x+9, x+12.\nSum = 5x + 30 = 50 ⟹ 5x = 20 ⟹ x = 4 years.'
          },
          {
            question: 'A man is 24 years older than his son. In 2 years, his age will be twice the age of his son. The present age of his son is:',
            options: ['18 years', '20 years', '22 years', '24 years'],
            correctIndex: 2,
            explanation: 'Let son\'s age be S. Man\'s age = S + 24.\nIn 2 years: (S + 24 + 2) = 2(S + 2) ⟹ S + 26 = 2S + 4 ⟹ S = 22 years.'
          }
        ]
      },
      {
        id: 'apt-2-2',
        topicNumber: '2.2',
        title: 'Averages, Weighted Means & Distribution Puzzles',
        summary: 'Arithmetic mean properties, replacement effects on group averages, and weighted average mixtures.',
        content: `### 2.2 Averages and Group Statistics

1. Core Equations:
• Average (Arithmetic Mean) = Sum of observations / Number of observations.
• Sum of observations = Average × Number of observations.

2. Impact of Group Changes:
• If a new person of value W joins a group of n members with previous average A, and the new average becomes A_new:
  W = A_new + n × (A_new - A).
• If an existing person of weight W_old is replaced by a person of weight W_new, causing average of n members to increase by Δ:
  W_new = W_old + (n × Δ).

3. Weighted Average:
• For groups with sizes n₁, n₂, ... and respective averages A₁, A₂:
  A_weighted = (n₁A₁ + n₂A₂ + ...) / (n₁ + n₂ + ...).`,
        workedExamples: [
          {
            problem: 'The average score of 20 students in a class is 65. When the teacher\'s score is included, the average increases by 1. Find the score of the teacher.',
            solution: 'Original total score = 20 × 65 = 1,300.\nNew number of persons = 21, new average = 66.\nNew total score = 21 × 66 = 1,386.\nTeacher\'s score = 1,386 - 1,300 = 86.'
          }
        ],
        practiceQuestions: [
          {
            question: 'The average weight of 8 men increases by 1.5 kg when a man weighing 65 kg is replaced by a new man. What is the weight of the new man?',
            options: ['73 kg', '75 kg', '77 kg', '80 kg'],
            correctIndex: 2,
            explanation: 'Weight increase across all 8 men = 8 × 1.5 = 12 kg.\nWeight of new man = Replaced weight + Total increase = 65 + 12 = 77 kg.'
          },
          {
            question: 'The average of four consecutive even numbers is 27. What is the largest of these numbers?',
            options: ['28', '30', '32', '34'],
            correctIndex: 1,
            explanation: 'Let consecutive even numbers be x, x+2, x+4, x+6.\nAverage = (4x + 12) / 4 = x + 3 = 27 ⟹ x = 24.\nLargest number = x + 6 = 24 + 6 = 30.'
          },
          {
            question: 'In an exam, the average marks obtained by 40 boys was 70, and the average marks of 60 girls was 80. What was the combined average for all 100 students?',
            options: ['74', '75', '76', '78'],
            correctIndex: 2,
            explanation: 'Total marks = (40 × 70) + (60 × 80) = 2,800 + 4,800 = 7,600.\nCombined average = 7,600 / 100 = 76.'
          }
        ]
      },
      {
        id: 'apt-2-3',
        topicNumber: '2.3',
        title: 'Permutations, Combinations & Probability Puzzles',
        summary: 'Fundamental counting principle, linear arrangements, team selections, and independent/mutually exclusive probabilities.',
        content: `### 2.3 Combinatorics & Probability Reasoning

1. Fundamental Counting Principle:
• If event A can occur in m ways and event B in n independent ways, both can occur in m × n ways.
• Permutations (Order matters): P(n, r) = n! / (n - r)!.
• Combinations (Order does NOT matter, selection only): C(n, r) = n! / [r! (n - r)!].

2. Probability Fundamentals:
• Probability P(E) = Number of favorable outcomes / Total possible outcomes.
• 0 ≤ P(E) ≤ 1. Complement: P(not E) = 1 - P(E).
• Addition Rule: P(A or B) = P(A) + P(B) - P(A and B).
• Independent Events: P(A and B) = P(A) × P(B).`,
        workedExamples: [
          {
            problem: 'In how many different ways can a committee of 3 students be chosen from a group of 7 candidates?',
            solution: 'Since order of selection does not matter, use combination C(7, 3):\nC(7, 3) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 ways.'
          }
        ],
        practiceQuestions: [
          {
            question: 'How many different 4-letter permutations can be formed from the letters of the word "LOGIC" without repetition?',
            options: ['24', '60', '120', '720'],
            correctIndex: 2,
            explanation: 'LOGIC has 5 distinct letters. Number of 4-letter words = P(5, 4) = 5 × 4 × 3 × 2 = 120.'
          },
          {
            question: 'Two dice are rolled simultaneously. What is the probability that the sum of the numbers appearing on top is 7?',
            options: ['1/12', '1/6', '5/36', '1/4'],
            correctIndex: 1,
            explanation: 'Total outcomes = 6 × 6 = 36. Pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. Probability = 6/36 = 1/6.'
          },
          {
            question: 'From a bag containing 4 red and 6 blue balls, 2 balls are drawn at random. What is the probability that both balls are red?',
            options: ['2/15', '1/5', '4/15', '1/3'],
            correctIndex: 0,
            explanation: 'Favorable ways = C(4, 2) = (4 × 3) / 2 = 6.\nTotal ways = C(10, 2) = (10 × 9) / 2 = 45.\nProbability = 6 / 45 = 2 / 15.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 3,
    title: 'UNIT THREE: VERBAL REASONING & VOCABULARY RELATIONSHIPS',
    description: 'Verbal analogies, semantic relationships, sentence completions, vocabulary context clues, and verbal classifications.',
    topics: [
      {
        id: 'apt-3-1',
        topicNumber: '3.1',
        title: 'Verbal Analogies & Semantic Relationships',
        summary: 'Identifying primary relationship types (cause-effect, tool-worker, part-whole, degree of intensity, synonym/antonym).',
        content: `### 3.1 Verbal Analogies: Bridging Relationships

Analogies test the ability to recognize the precise relationship between a pair of words and apply that same relationship to another pair.

1. High-Frequency Analogy Relationship Categories:
• Worker and Tool:
  - Carpenter : Saw :: Surgeon : Scalpel.
  - Blacksmith : Anvil :: Sculptor : Chisel.
• Worker and Product:
  - Author : Novel :: Mason : Wall.
• Part to Whole:
  - Petal : Flower :: Page : Book :: Room : House.
• Degree of Intensity:
  - Warm : Hot :: Drizzle : Downpour.
  - Glance : Stare :: Whisper : Shout.
• Cause and Effect:
  - Virus : Disease :: Friction : Heat :: Carelessness : Accident.
• Tool and Action:
  - Compass : Navigation :: Thermometer : Temperature.

2. Strategy: Formulate a Clear "Bridge Sentence":
• Create a tight, grammatically precise sentence linking Word 1 and Word 2.
  Example: "A SCALPEL is a tool used by a SURGEON to perform incisions."
• Test the answer choices using the identical sentence template.`,
        workedExamples: [
          {
            problem: 'THERMOMETER : TEMPERATURE :: BAROMETER : ?',
            solution: 'Bridge Sentence: A thermometer is an instrument used to measure temperature.\nSimilarly, a barometer is an instrument used to measure atmospheric pressure.\nAnswer: PRESSURE.'
          }
        ],
        practiceQuestions: [
          {
            question: 'SCALPEL : SURGEON :: CHISEL : ?',
            options: ['Gardener', 'Sculptor', 'Mechanic', 'Pilot'],
            correctIndex: 1,
            explanation: 'A scalpel is the primary precision hand tool of a surgeon; likewise, a chisel is the primary carving tool of a sculptor.'
          },
          {
            question: 'GLANCE : STARE :: WHISPER : ?',
            options: ['Mumble', 'Shout', 'Speak', 'Listen'],
            correctIndex: 1,
            explanation: 'Degree of intensity: A stare is an intensified, prolonged glance. Similarly, a shout is an intensified, elevated whisper.'
          },
          {
            question: 'OASIS : DESERT :: ISLAND : ?',
            options: ['Mountain', 'Ocean', 'Forest', 'Peninsula'],
            correctIndex: 1,
            explanation: 'An oasis is a fertile, water-bearing body surrounded completely by a desert; an island is a body of land surrounded completely by an ocean/water.'
          }
        ]
      },
      {
        id: 'apt-3-2',
        topicNumber: '3.2',
        title: 'Antonyms, Synonyms & Academic Vocabulary',
        summary: 'Identifying subtle connotations, prefix/suffix roots, and precise semantic opposites.',
        content: `### 3.2 Academic Vocabulary: Antonyms & Synonyms

Aptitude vocabulary questions test academic lexicon and the ability to detect fine shades of meaning.

1. Common Root Words:
• Bene- (Good, well): Benevolent, beneficial, benefactor.
• Mal- (Bad, harmful): Malevolent, malicious, malignant.
• Chron- (Time): Chronological, synchronous, chronic.
• Equi- (Equal): Equilibrium, equitable, equivalent.
• Omni- (All): Omnipotent, omniscient, omnipresent.

2. Strategy for Antonym & Synonym Identification:
• Charge the word: Determine if the target word has a positive (+), negative (-), or neutral connotation.
• Beware of trap synonyms when an antonym is sought.
• Consider secondary meanings (e.g., "table" as a verb means to postpone; "pedestrian" as an adjective means dull/commonplace).`,
        workedExamples: [
          {
            problem: 'Choose the word that is most nearly OPPOSITE in meaning to EPHEMERAL.',
            solution: 'Ephemeral means lasting for a very short time (transitory, fleeting).\nThe opposite must mean long-lasting or permanent.\nAnswer: PERMANENT / ETERNAL.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Choose the word that is most nearly OPPOSITE in meaning to METICULOUS:',
            options: ['Careful', 'Careless', 'Thorough', 'Punctual'],
            correctIndex: 1,
            explanation: 'Meticulous means showing extreme care and attention to detail. The direct antonym is careless (or sloppy).'
          },
          {
            question: 'Select the word that is most SIMILAR in meaning to PRAGMATIC:',
            options: ['Idealistic', 'Practical', 'Theoretical', 'Hesitant'],
            correctIndex: 1,
            explanation: 'Pragmatic means dealing with matters in a sensible, realistic, and practical way.'
          },
          {
            question: 'Choose the word most nearly OPPOSITE in meaning to CANDID:',
            options: ['Honest', 'Frank', 'Deceitful', 'Blunt'],
            correctIndex: 2,
            explanation: 'Candid means truthful, straightforward, and sincere. Its antonym is deceitful (or insincere).'
          }
        ]
      },
      {
        id: 'apt-3-3',
        topicNumber: '3.3',
        title: 'Sentence Completion & Verbal Logic',
        summary: 'Context clues, contrast transition markers (although, however), and parallel supporting connectors.',
        content: `### 3.3 Sentence Completion & Textual Logic

1. Structural Sentence Signal Words:
• Contrast Indicators (Expect a shift to an opposite idea):
  - Although, despite, however, nevertheless, yet, whereas, on the other hand, in contrast.
• Cause and Effect Indicators:
  - Because, therefore, consequently, as a result, since, thus, hence.
• Support and Continuation Indicators:
  - Furthermore, moreover, in addition, similarly, likewise.

2. Four-Step Technique:
• Read for overall meaning without looking at options.
• Identify signal transition keywords.
• Predict your own word before inspecting answer choices.
• Insert candidate choices and verify that tone and grammatical syntax align.`,
        workedExamples: [
          {
            problem: 'Although she was known for her _____ demeanor in public, in private she was surprisingly warm and outgoing.',
            solution: 'The contrast word "Although" signals that the blank must contrast with "warm and outgoing".\nA word like aloof, distant, cold, or reserved fits.\nCandidate matching this: RESERVED.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Although the initial findings appeared promising, subsequent clinical trials proved to be entirely _____.',
            options: ['Conclusive', 'Disappointing', 'Exciting', 'Beneficial'],
            correctIndex: 1,
            explanation: 'The contrast word "Although" contrasts the positive "promising" with a negative result, making "disappointing" the logically coherent choice.'
          },
          {
            question: 'Because the witness gave _____ testimony that contradicted earlier statements, the judge dismissed the evidence.',
            options: ['Reliable', 'Inconsistent', 'Truthful', 'Credible'],
            correctIndex: 1,
            explanation: '"Because" indicates cause: evidence contradicted earlier statements, which means the testimony was inconsistent.'
          },
          {
            question: 'The professor\'s lecture was so _____ that many students struggled to remain awake.',
            options: ['Fascinating', 'Monotonous', 'Inspiring', 'Animated'],
            correctIndex: 1,
            explanation: 'Students struggling to stay awake signals that the lecture was dull and tedious; "monotonous" fits precisely.'
          }
        ]
      }
    ]
  }
];
