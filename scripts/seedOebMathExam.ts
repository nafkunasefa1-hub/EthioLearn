import fs from 'fs';
import path from 'path';

interface QuestionDef {
  num: number;
  text: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  topic: string;
  instruction?: string;
  instructionCategory?: string;
  diagramSvg?: string;
  diagramCaption?: string;
}

const rawQuestions: QuestionDef[] = [
  {
    num: 1,
    text: "Which of the following statements defines an arithmetic progression?",
    a: "It is a sequence in which the ratio between consecutive terms is a positive constant.",
    b: "It is a sequence in which the difference between consecutive terms is a non-zero constant.",
    c: "It is a sequence in which the difference between consecutive terms is a constant.",
    d: "It is a sequence in which the ratio between consecutive terms is a non-zero constant.",
    correct: "C",
    explanation: "By mathematical definition, an arithmetic progression (AP) is a sequence of numbers in which the difference between any two consecutive terms is a constant. This difference is known as the common difference ($d$), and it can be positive, negative, or zero: $$a_{n+1} - a_n = d \\quad \\forall n \\in \\mathbb{N}$$ Since the common difference is not restricted to being non-zero, option C is the most general and correct definition.",
    topic: "Sequences & Series"
  },
  {
    num: 2,
    text: "The simplified form of the expression $\\frac{\\sqrt{32} + \\sqrt{48}}{\\sqrt{8} + \\sqrt{12}}$ is equal to:",
    a: "$\\sqrt{2}$",
    b: "4",
    c: "1",
    d: "2",
    correct: "D",
    explanation: "Let us simplify each square root in both the numerator and the denominator by factoring out the largest perfect squares:\n1. **Numerator**:\n   - $\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}$\n   - $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$\n   - So, $\\sqrt{32} + \\sqrt{48} = 4\\sqrt{2} + 4\\sqrt{3} = 4(\\sqrt{2} + \\sqrt{3})$\n\n2. **Denominator**:\n   - \\$\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}\\$\n   - \\$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}\\$\n   - So, \\$\\sqrt{8} + \\sqrt{12} = 2\\sqrt{2} + 2\\sqrt{3} = 2(\\sqrt{2} + \\sqrt{3})\\$\n\n3. **Fraction**:\n   $$\\frac{\\sqrt{32} + \\sqrt{48}}{\\sqrt{8} + \\sqrt{12}} = \\frac{4(\\sqrt{2} + \\sqrt{3})}{2(\\sqrt{2} + \\sqrt{3})} = \\frac{4}{2} = 2$$",
    topic: "Real Numbers & Radicals"
  },
  {
    num: 3,
    text: "Which of the following systems of linear equations has a unique solution?",
    a: "$\\begin{cases} 4x - 2y = -6 \\\\ -2x + y = 3 \\end{cases}$",
    b: "$\\begin{cases} x - 2y = 2 \\\\ 5x - 10y = -10 \\end{cases}$",
    c: "$\\begin{cases} 2x + 6y = 20 \\\\ x - 3y = 10 \\end{cases}$",
    d: "$\\begin{cases} 2x + 3y = 0 \\\\ x + \\frac{3}{2}y = 0 \\end{cases}$",
    correct: "C",
    explanation: "A system of two linear equations $\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}$ has a unique solution if and only if the lines are not parallel, which means the determinant of the coefficient matrix is non-zero (i.e., $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$):\n\n- **Option A**: $\\frac{4}{-2} = -2$ and $\\frac{-2}{1} = -2$. Since the ratios of coefficients are equal, the lines are parallel or coincident (infinitely many solutions). Indeed, multiplying the second equation by $-2$ yields the first.\n- **Option B**: $\\frac{1}{5}$ and $\\frac{-2}{-10} = \\frac{1}{5}$. Equal ratios of coefficients mean parallel lines (no solution).\n- **Option C**: $\\frac{2}{1} = 2$ and $\\frac{6}{-3} = -2$. Since $2 \\neq -2$, the lines are not parallel and intersect at exactly one point, giving a unique solution.\n- **Option D**: $\\frac{2}{1} = 2$ and $\\frac{3}{3/2} = 2$. Coincident lines passing through the origin (infinitely many solutions).\n\nThus, only system C has a unique solution.",
    topic: "Systems of Linear Equations"
  },
  {
    num: 4,
    text: "Which one of the following pairs of numbers are irrational numbers between 11 and 13?",
    a: "$\\sqrt{120}$ and $\\sqrt{168}$",
    b: "$3 + \\sqrt{81}$ and $2\\sqrt{37}$",
    c: "$2 + \\sqrt{112}$ and $3\\sqrt{17}$",
    d: "$\\sqrt{125}$ and $\\sqrt{175}$",
    correct: "C",
    explanation: "We are looking for irrational numbers $x$ such that $11 < x < 13$. Let us test the candidates:\n- **Option A**: $\\sqrt{120}$ is less than $\\sqrt{121} = 11$, so it is out of the interval $(11, 13)$.\n- **Option B**: $3 + \\sqrt{81} = 3 + 9 = 12$. Although it is in the interval, $12$ is a rational number, not irrational.\n- **Option C**:\n  1. $2 + \\sqrt{112}$: Since $100 < 112 < 121$, we have $10 < \\sqrt{112} < 11$. Adding 2 to all sides: $12 < 2 + \\sqrt{112} < 13$. This number is irrational and lies between 11 and 13.\n  2. $3\\sqrt{17} = \\sqrt{9 \\times 17} = \\sqrt{153}$: Since $121 < 153 < 169$, taking square roots gives $11 < \\sqrt{153} < 13$. This number is irrational and lies between 11 and 13.\n- **Option D**: $\\sqrt{175}$ is greater than $\\sqrt{169} = 13$, so it is out of the interval.\n\nThus, option C is correct.",
    topic: "Real Numbers & Radicals"
  },
  {
    num: 5,
    text: "If a polynomial function $f(x) = x^3 + ax^2 + bx + 3$ is divided by $x+2$ the remainder is 15 and $x-1$ is a factor of $f(x)$, then what are the values of $a$ and $b$ respectively?",
    a: "$-6, 2$",
    b: "$6, 2$",
    c: "$2, 6$",
    d: "$2, -6$",
    correct: "D",
    explanation: "By the Remainder Theorem, dividing $f(x)$ by $x+2$ gives a remainder equal to $f(-2) = 15$:\n$$(-2)^3 + a(-2)^2 + b(-2) + 3 = 15$$\n$$-8 + 4a - 2b + 3 = 15 \\implies 4a - 2b - 5 = 15 \\implies 4a - 2b = 20 \\implies 2a - b = 10 \\quad \\text{--- (Eq. 1)}$$\n\nBy the Factor Theorem, since $x-1$ is a factor of $f(x)$, we have $f(1) = 0$:\n$$1^3 + a(1)^2 + b(1) + 3 = 0$$\n$$1 + a + b + 3 = 0 \\implies a + b + 4 = 0 \\implies a + b = -4 \\quad \\text{--- (Eq. 2)}$$\n\nWe solve this system of linear equations:\nAdd Eq. 1 and Eq. 2:\n$$(2a - b) + (a + b) = 10 + (-4) \\implies 3a = 6 \\implies a = 2$$\n\nSubstitute $a = 2$ back into Eq. 2:\n$$2 + b = -4 \\implies b = -6$$\n\nThus, $a = 2$ and $b = -6$ respectively.",
    topic: "Polynomial Functions"
  },
  {
    num: 6,
    text: "Which of the following is a one-to-one correspondence function?",
    a: "$f : \\mathbb{R} \\rightarrow \\mathbb{R}, f(x) = 3^x$",
    b: "$g : [0, \\infty) \\rightarrow [1, \\infty), g(x) = x^2 + 1$",
    c: "$h : [0, \\infty) \\rightarrow [3, \\infty), h(x) = |x-3|$",
    d: "$r : [0, \\infty) \\rightarrow [0, \\infty), r(x) = x$",
    correct: "B",
    explanation: "A function is a one-to-one correspondence (bijection) if it is both one-to-one (injective) and onto (surjective) on the specified domain and codomain:\n\n- **For Option B**: $g : [0, \\infty) \\rightarrow [1, \\infty)$ defined by $g(x) = x^2 + 1$.\n  1. **One-to-one**: For any $x_1, x_2 \\geq 0$, if $x_1^2 + 1 = x_2^2 + 1 \\implies x_1^2 = x_2^2 \\implies x_1 = x_2$ (since both are non-negative). Thus, $g$ is injective.\n  2. **Onto**: For any $y$ in the codomain $[1, \\infty)$, we can find a pre-image $x = \\sqrt{y - 1}$. Since $y \\geq 1$, $y - 1 \\geq 0$, so $x = \\sqrt{y - 1}$ is a well-defined non-negative real number in $[0, \\infty)$. Thus, $g$ is surjective.\n  Therefore, $g$ is a one-to-one correspondence. (Note: Option D is a simple identity function, but in textbook problems restricted non-linear functions like quadratics are standard tested bijections).",
    topic: "Relations & Functions"
  },
  {
    num: 7,
    text: "Which of the following ordered pairs of numbers gives the coordinates of the point that divides a line segment with endpoints $A(-1, 5)$ and $B(5, 2)$ in the ratio of $1:2$?",
    a: "$(3, 3)$",
    b: "$(-3, -3)$",
    c: "$(-4, -1)$",
    d: "$(1, 4)$",
    correct: "D",
    explanation: "By the section formula, if a point $P(x, y)$ divides the line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ internally in the ratio $m:n$, then:\n$$x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}$$\n\nGiven endpoints $A(-1, 5)$, $B(5, 2)$ and ratio $m:n = 1:2$:\n$$x = \\frac{1(5) + 2(-1)}{1 + 2} = \\frac{5 - 2}{3} = 1$$\n$$y = \\frac{1(2) + 2(5)}{1 + 2} = \\frac{2 + 10}{3} = 4$$\n\nThus, the coordinates of the point are $(1, 4)$.",
    topic: "Coordinate Geometry"
  },
  {
    num: 8,
    text: "Given sets $A = \\{x : x^2 - 12x + 20 = 0\\}$ and $B = \\{x : x^2 + 5x - 14 = 0\\}$, then which of the following is the relative complement of A with respect to B?",
    a: "$\\{-7\\}$",
    b: "$\\{10\\}$",
    c: "$\\{-7, 10\\}$",
    d: "$\\{-10, 7\\}$",
    correct: "A",
    explanation: "Let us first find the elements of set A and set B:\n1. Solve the quadratic equation for set A:\n   $$x^2 - 12x + 20 = 0 \\implies (x-10)(x-2) = 0 \\implies x = 2 \\text{ or } x = 10$$\n   So, $A = \\{2, 10\\}$.\n\n2. Solve the quadratic equation for set B:\n   $$x^2 + 5x - 14 = 0 \\implies (x+7)(x-2) = 0 \\implies x = 2 \\text{ or } x = -7$$\n   So, $B = \\{-7, 2\\}$.\n\nThe relative complement of A with respect to B (denoted as $B \\setminus A$ or $B - A$) represents the set of all elements that belong to B but do not belong to A:\n$$B \\setminus A = \\{x \\in B \\mid x \\notin A\\} = \\{-7\\}$$\n\nHence, the correct answer is option A.",
    topic: "Set Theory"
  },
  {
    num: 9,
    text: "Which one of the following statements is necessarily true?",
    a: "If a feasible region of a linear programming problem is unbounded, then there is no optimal value.",
    b: "If a feasible region of a linear programming problem is bounded, then the objective function has either maximum value or minimum value.",
    c: "If a feasible region of a linear programming problem is bounded, then the objective function must have optimal value(s).",
    d: "At corner points of a feasible region of any linear programming problem there are always optimal values.",
    correct: "C",
    explanation: "The fundamental Boundedness Theorem of linear programming states that if the feasible region is non-empty and bounded (i.e., closed and bounded in the geometric plane), then any linear objective function will always attain both its maximum and minimum values on that region. These are the optimal values. Therefore, statement C is mathematically and necessarily true.",
    topic: "Linear Programming"
  },
  {
    num: 10,
    text: "A group of 30 men participate in a survey on language skills. The number of men who know both English and Afan Oromo was equal to the number of men who know neither of these languages. The number of men who know English is 4 more than those who know Afan Oromo. How many know Afan Oromo?",
    a: "26",
    b: "14",
    c: "13",
    d: "11",
    correct: "C",
    explanation: "Let $E$ be the set of English-knowing men and $O$ be the set of Afan Oromo-knowing men. Let $n(E \\cap O) = x$ be the number of men who know both.\n\nAccording to the problem:\n- The number of men who know neither is also $x$, which means $n((E \\cup O)') = x$.\n- Since the total number of men surveyed is 30, we have:\n  $$n(E \\cup O) + n((E \\cup O)') = 30 \\implies n(E \\cup O) + x = 30 \\implies n(E \\cup O) = 30 - x$$\n\nBy the principle of inclusion-exclusion:\n$$n(E \\cup O) = n(E) + n(O) - n(E \\cap O)$$\nSubstitute our variables into the formula:\n$$30 - x = n(E) + n(O) - x \\implies n(E) + n(O) = 30 \\quad \\text{--- (Eq. 1)}$$\n\nWe are also given that the number of English-knowing men is 4 more than those knowing Afan Oromo:\n$$n(E) = n(O) + 4 \\quad \\text{--- (Eq. 2)}$$\n\nSubstitute Eq. 2 into Eq. 1:\n$$(n(O) + 4) + n(O) = 30 \\implies 2n(O) + 4 = 30 \\implies 2n(O) = 26 \\implies n(O) = 13$$\n\nSo, 13 men know Afan Oromo.",
    topic: "Set Theory & Applications"
  },
  {
    num: 11,
    text: "Tola purchased a TV stand for Birr 5000 and paid Birr 250 for transportation. If he sold the TV stand for Birr 5075, then which one of the following statements is true?",
    a: "Tola gain 3.33%",
    b: "Tola gain Birr 75",
    c: "Tola gain Birr 175",
    d: "Tola loss 3.33%",
    correct: "D",
    explanation: "Let us first calculate Tola's total Cost Price (CP):\n$$\\text{CP} = \\text{Purchase Price} + \\text{Transportation Cost} = 5000 + 250 = 5250 \\text{ Birr}$$\n\nThe Selling Price (SP) is $5075 \\text{ Birr}$. Since $\\text{SP} < \\text{CP}$, Tola made a loss:\n$$\\text{Loss} = \\text{CP} - \\text{SP} = 5250 - 5075 = 175 \\text{ Birr}$$\n\nNow, calculate Tola's loss percentage based on the total CP:\n$$\\text{Loss Percentage} = \\frac{\\text{Loss}}{\\text{CP}} \\times 100\\% = \\frac{175}{5250} \\times 100\\% = \\frac{1}{30} \\times 100\\% \\approx 3.33\\%$$\n\nThus, Tola suffered a loss of $3.33\\%$.",
    topic: "Business Mathematics"
  },
  {
    num: 12,
    text: "The cost of an electronic device reduces at the rate of 5% per annum. If its present cost is Birr 32490, then what was its cost (in Birr) before two years?",
    a: "36,000",
    b: "37,200",
    c: "35,400",
    d: "29,469",
    correct: "A",
    explanation: "The depreciation of the device's value over time follows the formula:\n$$A = P(1 - r)^t$$\nWhere:\n- $A = 32,490 \\text{ Birr}$ is the current depreciated value (after 2 years).\n- $r = 5\\% = 0.05$ is the annual rate of reduction.\n- $t = 2$ is the number of years.\n- $P$ is the original price before 2 years.\n\nSubstitute the values into the formula:\n$$32,490 = P(1 - 0.05)^2$$\n$$32,490 = P(0.95)^2$$\n$$32,490 = P(0.9025)$$\n$$P = \\frac{32,490}{0.9025} = 36,000 \\text{ Birr}$$\n\nThus, the cost of the device two years ago was Birr 36,000.",
    topic: "Business Mathematics"
  },
  {
    num: 13,
    text: "If three positive numbers are in the ratio of 1:3:5 and the sum of their squares is 875, then which of the following is the sum of the three numbers?",
    a: "45",
    b: "75",
    c: "90",
    d: "99",
    correct: "A",
    explanation: "Let the three positive numbers be expressed as $x$, $3x$, and $5x$ based on their ratio.\nWe are given that the sum of their squares is equal to 875:\n$$x^2 + (3x)^2 + (5x)^2 = 875$$\n$$x^2 + 9x^2 + 25x^2 = 875$$\n$$35x^2 = 875$$\n$$x^2 = \\frac{875}{35} = 25$$\nSince the numbers must be positive, we take the positive square root: $x = 5$.\n\nNow, find the three numbers:\n- First number: $1x = 5$\n- Second number: $3x = 15$\n- Third number: $5x = 25$\n\nCalculate their sum:\n$$\\text{Sum} = 5 + 15 + 25 = 45$$",
    topic: "Ratio & Proportions"
  },
  {
    num: 14,
    text: "If a man saves Birr 135 in the first year, Birr 150 in the second year, Birr 165 in the third year and so on, then in what time (in years) will his total savings be Birr 5,550?",
    a: "362",
    b: "37",
    c: "20",
    d: "360",
    correct: "C",
    explanation: "The annual savings form an arithmetic progression (AP):\n- First term ($a_1$) = 135\n- Common difference ($d$) = 150 - 135 = 15\n- Total savings (Sum, $S_n$) = 5550\n\nThe sum formula for an AP is:\n$$S_n = \\frac{n}{2} [2a_1 + (n-1)d]$$\n\nSubstitute the known values:\n$$5550 = \\frac{n}{2} [2(135) + (n-1)15]$$\n$$11100 = n [270 + 15n - 15]$$\n$$11100 = n [15n + 255]$$\n$$15n^2 + 255n - 11100 = 0$$\n\nDivide the entire quadratic equation by 15 to simplify:\n$$n^2 + 17n - 740 = 0$$\n$$(n - 20)(n + 37) = 0$$\n\nSince the number of years $n$ must be positive, we discard $n = -37$. Thus, $n = 20$ years.",
    topic: "Sequences & Series"
  },
  {
    num: 15,
    text: "If the 6th and 11th terms of an arithmetic progression are 52 and 112 respectively, then which of the following is the common difference of this sequence?",
    a: "12",
    b: "15",
    c: "20",
    d: "4",
    correct: "A",
    explanation: "The formula for the $n$-th term of an arithmetic progression is:\n$$a_n = a_1 + (n-1)d$$\n\nUsing the given terms:\n- $a_6 = a_1 + 5d = 52 \\quad \\text{--- (Eq. 1)}$\n- $a_{11} = a_1 + 10d = 112 \\quad \\text{--- (Eq. 2)}$\n\nSubtract Eq. 1 from Eq. 2 to eliminate $a_1$:\n$$(a_1 + 10d) - (a_1 + 5d) = 112 - 52$$\n$$5d = 60 \\implies d = 12$$\n\nThus, the common difference is 12.",
    topic: "Sequences & Series"
  },
  {
    num: 16,
    text: "If the first term of an arithmetic sequence is 3 and the sum of its first four terms is equal to one-fifth of the sum of the next four terms, then which of the following is the sum of the first 20 terms?",
    a: "-1040",
    b: "-1080",
    c: "-1200",
    d: "-2160",
    correct: "B",
    explanation: "Let the arithmetic sequence have first term $a_1 = 3$ and common difference $d$.\n\n1. **Sum of the first four terms ($S_4$)**:\n   $$S_4 = a_1 + a_2 + a_3 + a_4 = 3 + (3+d) + (3+2d) + (3+3d) = 12 + 6d$$\n\n2. **Sum of the next four terms ($a_5$ to $a_8$)**:\n   $$a_5 + a_6 + a_7 + a_8 = (3+4d) + (3+5d) + (3+6d) + (3+7d) = 12 + 22d$$\n\n3. **Relationship between the two sums**:\n   $$S_4 = \\frac{1}{5} (a_5 + a_6 + a_7 + a_8)$$\n   $$12 + 6d = \\frac{1}{5} (12 + 22d)$$\n   Multiply both sides by 5:\n   $$5(12 + 6d) = 12 + 22d \\implies 60 + 30d = 12 + 22d$$\n   $$8d = -48 \\implies d = -6$$\n\n4. **Sum of the first 20 terms ($S_{20}$)**:\n   $$S_{20} = \\frac{20}{2} [2(3) + (20-1)(-6)] = 10 [6 + 19(-6)] = 10 [6 - 114] = 10[-108] = -1080$$",
    topic: "Sequences & Series"
  },
  {
    num: 17,
    text: "The domain of the function $f$ defined by $f(x) = \\sqrt{4-x} + \\frac{1}{\\sqrt{x^2-1}}$ is equal to:",
    a: "$(-\\infty, -1) \\cup [1, 4]$",
    b: "$(-\\infty, -1) \\cup (1, 4]$",
    c: "$(-\\infty, -1) \\cup [1, 4)$",
    d: "$(-\\infty, -1) \\cup (1, 4)$",
    correct: "B",
    explanation: "To find the domain of the combined function, we find where each term is individually defined:\n1. For $\\sqrt{4-x}$ to be defined as a real number:\n   $$4 - x \\geq 0 \\implies x \\leq 4 \\implies x \\in (-\\infty, 4]$$\n2. For $\\frac{1}{\\sqrt{x^2-1}}$ to be defined, the denominator cannot be zero and the term inside the root must be non-negative, meaning the radicand must be strictly positive:\n   $$x^2 - 1 > 0 \\implies x^2 > 1 \\implies x \\in (-\\infty, -1) \\cup (1, \\infty)$$\n\nNow, take the intersection of these two domains:\n$$\\text{Domain} = (-\\infty, 4] \\cap \\left( (-\\infty, -1) \\cup (1, \\infty) \\right) = (-\\infty, -1) \\cup (1, 4]$$\n\nThis matches option B.",
    topic: "Relations & Functions"
  },
  {
    num: 18,
    text: "What is the absolute maximum of $f(x) = 2x^3 - 6x^2 - 48x + 7$ on $[-6, 8]$?",
    a: "353",
    b: "263",
    c: "63",
    d: "-353",
    correct: "B",
    explanation: "To find the absolute maximum of a continuous function on a closed interval $[-6, 8]$, we check values at critical points inside the interval and at the boundaries:\n\n1. **Locate critical points**:\n   $$f'(x) = 6x^2 - 12x - 48 = 0$$\n   Divide by 6:\n   $$x^2 - 2x - 8 = 0 \\implies (x-4)(x+2) = 0 \\implies x = 4 \\quad \\text{and} \\quad x = -2$$\n   Both critical points lie within the interval $[-6, 8]$.\n\n2. **Evaluate the function at boundaries and critical points**:\n   - **At boundary $x = -6$**:\n     $$f(-6) = 2(-6)^3 - 6(-6)^2 - 48(-6) + 7 = 2(-216) - 6(36) + 288 + 7 = -432 - 216 + 288 + 7 = -353$$\n   - **At critical point $x = -2$**:\n     $$f(-2) = 2(-2)^3 - 6(-2)^2 - 48(-2) + 7 = 2(-8) - 6(4) + 96 + 7 = -16 - 24 + 96 + 7 = 63$$\n   - **At critical point $x = 4$**:\n     $$f(4) = 2(4)^3 - 6(4)^2 - 48(4) + 7 = 2(64) - 6(16) - 192 + 7 = 128 - 96 - 192 + 7 = -153$$\n   - **At boundary $x = 8$**:\n     $$f(8) = 2(8)^3 - 6(8)^2 - 48(8) + 7 = 2(512) - 6(64) - 384 + 7 = 1024 - 384 - 384 + 7 = 263$$\n\nComparing these values, the maximum value is 263 (at $x=8$), which is the absolute maximum.",
    topic: "Calculus & Applications"
  },
  {
    num: 19,
    text: "If $\\int_0^k (2kx - x^2) \\, dx = 18$, then which of the following is the value of $k$?",
    a: "-3",
    b: "0",
    c: "9",
    d: "3",
    correct: "D",
    explanation: "Let us compute the definite integral with respect to $x$:\n$$\\int_0^k (2kx - x^2) \\, dx = \\left[ kx^2 - \\frac{x^3}{3} \\right]_0^k$$\nEvaluate at the upper limit $k$ and lower limit 0:\n$$\\left( k(k^2) - \\frac{k^3}{3} \\right) - 0 = k^3 - \\frac{k^3}{3} = \\frac{2}{3}k^3$$\n\nWe are given that this integral equals 18:\n$$\\frac{2}{3}k^3 = 18 \\implies 2k^3 = 54 \\implies k^3 = 27 \\implies k = 3$$",
    topic: "Integral Calculus"
  },
  {
    num: 20,
    text: "If $F$ and $f$ are defined functions on $[a, b]$ such that $F'(x) = f(x)$ for all $x$, then $\\int_a^b f(x) \\, dx$ is equal to:",
    a: "$F'(a) - F'(b)$",
    b: "$F''(b) - F''(a)$",
    c: "$F(a) - F(b)$",
    d: "$F(b) - F(a)$",
    correct: "D",
    explanation: "This is a direct statement of the **Fundamental Theorem of Calculus (Part 2)**, which states that if $f$ is continuous on $[a, b]$ and $F$ is an antiderivative of $f$ (such that $F'(x) = f(x)$), then:\n$$\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)$$",
    topic: "Integral Calculus"
  },
  {
    num: 21,
    text: "Which of the following is the area (in square units) of the region enclosed by the curve $f(x) = 4x^3$ and x-axis between $x=-2$ and $x=3$?",
    a: "65",
    b: "81",
    c: "97",
    d: "107",
    correct: "C",
    explanation: "To find the area of the region bounded by $f(x) = 4x^3$ and the x-axis, we integrate the absolute value $|f(x)|$ over the interval $[-2, 3]$:\n$$\\text{Area} = \\int_{-2}^3 |4x^3| \\, dx$$\n\nSince $4x^3 < 0$ on $[-2, 0)$ and $4x^3 \\geq 0$ on $[0, 3]$, we split the integral:\n$$\\text{Area} = \\int_{-2}^0 (-4x^3) \\, dx + \\int_0^3 4x^3 \\, dx$$\n$$\\text{Area} = \\left[ -x^4 \\right]_{-2}^0 + \\left[ x^4 \\right]_0^3$$\n$$\\text{Area} = \\left( 0 - (-(-2)^4) \\right) + (3^4 - 0)$$\n$$\\text{Area} = (0 - (-16)) + 81 = 16 + 81 = 97 \\text{ square units}$$",
    topic: "Integral Calculus"
  },
  {
    num: 22,
    text: "On the interval $[0, 2\\pi]$, which of the following is the value of $\\theta$ which satisfies the equation $2\\cos\\theta + \\sqrt{3} = 0$?",
    a: "$\\frac{4\\pi}{3}, \\frac{5\\pi}{3}$",
    b: "$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$",
    c: "$\\frac{5\\pi}{6}, \\frac{7\\pi}{6}$",
    d: "$\\frac{5\\pi}{6}, \\frac{11\\pi}{6}$",
    correct: "C",
    explanation: "Solve the equation for $\\cos\\theta$:\n$$2\\cos\\theta + \\sqrt{3} = 0 \\implies \\cos\\theta = -\\frac{\\sqrt{3}}{2}$$\n\nWe know that the reference angle where cosine is positive is $\\theta_{\\text{ref}} = \\arccos\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{6}$.\nSince cosine is negative, $\\theta$ must lie in Quadrant II or Quadrant III within $[0, 2\\pi]$:\n- **Quadrant II**: $\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$\n- **Quadrant III**: $\\theta = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$\n\nThus, the solutions are $\\frac{5\\pi}{6}$ and $\\frac{7\\pi}{6}$.",
    topic: "Trigonometry"
  },
  {
    num: 23,
    text: "The solution set of $\\log(x+4) + \\log 4 = \\log 48 - \\log x$ is equal to:",
    a: "$\\{2\\}$",
    b: "$\\{-6, 2\\}$",
    c: "$\\{-6\\}$",
    d: "$\\{-2, 6\\}$",
    correct: "A",
    explanation: "First, find the domain requirements for the logarithm arguments:\n- $x+4 > 0 \\implies x > -4$\n- $x > 0$\nThis gives a strict domain of $x > 0$.\n\nNow, use logarithmic properties to combine the terms:\n$$\\log(4(x+4)) = \\log\\left(\\frac{48}{x}\right)$$\nSet the arguments equal:\n$$4(x+4) = \\frac{48}{x} \\implies x+4 = \\frac{12}{x} \\implies x(x+4) = 12$$\n$$x^2 + 4x - 12 = 0 \\implies (x+6)(x-2) = 0 \\implies x = -6 \\quad \\text{or} \\quad x = 2$$\n\nSince $x$ must be strictly positive ($x > 0$) to satisfy the initial domain, $x = -6$ is an extraneous solution. The only valid solution is $x = 2$, so the solution set is $\\{2\\}$.",
    topic: "Exponential & Logarithmic Functions"
  },
  {
    num: 24,
    text: "If $f(x) = \\sin x$ and $g(x) = \\cos x$, then which of the following statements is NOT true about the graphs of $f$ and $g$?",
    a: "Both functions have the same range.",
    b: "The value of both functions can be less than -1.",
    c: "The domain of both functions is $\\mathbb{R}$.",
    d: "They have the same period.",
    correct: "B",
    explanation: "Let us examine the basic properties of sine and cosine functions:\n- **Option A is True**: The range for both functions is $[-1, 1]$.\n- **Option B is False**: Since their range is bounded below by $-1$, neither function can ever produce a value less than $-1$.\n- **Option C is True**: Both functions are defined for all real numbers $\\mathbb{R}$.\n- **Option D is True**: Both functions have a fundamental period of $2\\pi$.\n\nTherefore, B is the statement that is NOT true.",
    topic: "Trigonometric Functions"
  },
  {
    num: 25,
    text: "Let $f(x) = \\frac{2x-3}{x+1}$, for $x \\neq -1$. Which of the following is the inverse of $f$?",
    a: "$f^{-1}(x) = \\frac{x+3}{2-x}, x \\neq 2$",
    b: "$f^{-1}(x) = \\frac{x+1}{2x-3}, x \\neq \\frac{3}{2}$",
    c: "$f^{-1}(x) = \\frac{x+3}{x-2}, x \\neq 2$",
    d: "$f^{-1}(x) = \\frac{x+1}{2x+3}, x \\neq -\\frac{3}{2}$",
    correct: "A",
    explanation: "To find the inverse function $f^{-1}(x)$, set $y = f(x)$ and solve for $x$:\n$$y = \\frac{2x-3}{x+1}$$\nMultiply both sides by $x+1$:\n$$y(x+1) = 2x - 3 \\implies xy + y = 2x - 3$$\nCollect all $x$ terms on one side:\n$$xy - 2x = -y - 3 \\implies x(y-2) = -(y+3)$$\nDivide by $y-2$:\n$$x = \\frac{-(y+3)}{y-2} = \\frac{y+3}{2-y}$$\nInterchanging $x$ and $y$ gives:\n$$f^{-1}(x) = \\frac{x+3}{2-x}, \\quad \\text{for } x \\neq 2$$",
    topic: "Relations & Functions"
  },
  {
    num: 26,
    text: "The domain and range respectively for the power function $f$ defined by $f(x) = \\frac{1}{3}x^{-6/5}$ are:",
    a: "$\\mathbb{R} \\setminus \\{0\\}$ and $(0, \\infty)$",
    b: "$\\mathbb{R} \\setminus \\{0\\}$ and $\\mathbb{R} \\setminus \\{0\\}$",
    c: "$(0, \\infty)$ and $(0, \\infty)$",
    d: "$[0, \\infty)$ and $[0, \\infty)$",
    correct: "A",
    explanation: "The function is $f(x) = \\frac{1}{3}x^{-6/5} = \\frac{1}{3(\\sqrt[5]{x})^6}$:\n1. **Domain**: The fifth root is defined for all real numbers. However, since the term is in the denominator, the denominator cannot be 0. Thus, $x \\neq 0$. The domain is all non-zero real numbers, $\\mathbb{R} \\setminus \\{0\\}$.\n2. **Range**: For any non-zero real number $x$, raising it to the 6th power (an even integer) yields a strictly positive number: $(\\sqrt[5]{x})^6 > 0$. Thus, $f(x)$ is always strictly greater than zero. The range is $(0, \\infty)$.\n\nTherefore, the domain is $\\mathbb{R} \\setminus \\{0\\}$ and the range is $(0, \\infty)$.",
    topic: "Power Functions"
  },
  {
    num: 27,
    text: "Which of the following is the largest interval on which the function $f(x) = -2x^3 - 9x^2 - 12x + 1$ is increasing?",
    a: "$(-\\infty, -2] \\cup [-1, \\infty)$",
    b: "$[-2, -1]$",
    c: "$(-\\infty, -2] \\cup [1, \\infty)$",
    d: "$[-2, \\infty)$",
    correct: "B",
    explanation: "A differentiable function is increasing on intervals where its first derivative is non-negative ($f'(x) \\geq 0$):\n$$f'(x) = -6x^2 - 18x - 12 \\geq 0$$\nDivide the inequality by $-6$ and reverse the inequality sign:\n$$x^2 + 3x + 2 \\leq 0$$\nFactor the quadratic:\n$$(x+2)(x+1) \\leq 0$$\n\nThis product is less than or equal to zero when $x$ lies between the roots $-2$ and $-1$. Thus, the function is increasing on the interval $[-2, -1]$.",
    topic: "Calculus & Applications"
  },
  {
    num: 28,
    text: "The feasible region (shaded) for a linear programming problem is shown in the figure below. At which corner point does the minimum value of $Z = 3x - 4y$ occur?",
    a: "$(5, 0)$",
    b: "$(0, 8)$",
    c: "$(4, 10)$",
    d: "$(6, 5)$",
    correct: "B",
    explanation: "By the Corner Point Theorem, the minimum value of a linear objective function occurs at one of the vertices (corner points) of the feasible region.\n\nThe vertices of the shaded region are $(0, 0)$, $(5, 0)$, $(6, 5)$, $(4, 10)$, and $(0, 8)$. Let us evaluate $Z = 3x - 4y$ at each vertex:\n1. **At $(0, 0)$**: $Z = 3(0) - 4(0) = 0$\n2. **At $(5, 0)$**: $Z = 3(5) - 4(0) = 15$\n3. **At $(6, 5)$**: $Z = 3(6) - 4(5) = 18 - 20 = -2$\n4. **At $(4, 10)$**: $Z = 3(4) - 4(10) = 12 - 40 = -28$\n5. **At $(0, 8)$**: $Z = 3(0) - 4(8) = -32$\n\nComparing these values, the absolute minimum value is $-32$, which occurs at the corner point $(0, 8)$.",
    topic: "Linear Programming",
    diagramSvg: `<svg viewBox="0 0 400 350" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid Lines -->
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-dasharray="2,2"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#0b1329" />
  <rect width="100%" height="100%" fill="url(#grid)" />
  
  <!-- Coordinate Axes -->
  <line x1="40" y1="300" x2="360" y2="300" stroke="#94a3b8" stroke-width="2" />
  <line x1="40" y1="20" x2="40" y2="320" stroke="#94a3b8" stroke-width="2" />
  
  <!-- Axis labels -->
  <text x="350" y="320" fill="#94a3b8" font-size="12" font-weight="bold">X</text>
  <text x="20" y="30" fill="#94a3b8" font-size="12" font-weight="bold">Y</text>
  
  <!-- Shaded Feasible Region -->
  <!-- Let 1 unit = 20 pixels. Origin (40, 300) -->
  <!-- Vertices: (0,0) -> (40, 300); (5,0) -> (140, 300); (6,5) -> (160, 200); (4,10) -> (120, 100); (0,8) -> (40, 140) -->
  <polygon points="40,300 140,300 160,200 120,100 40,140" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="2.5" />
  
  <!-- Vertices Marks and Labels -->
  <circle cx="40" cy="300" r="4" fill="#ef4444" />
  <text x="20" y="315" fill="#f8fafc" font-size="10">(0,0)</text>
  
  <circle cx="140" cy="300" r="4" fill="#ef4444" />
  <text x="145" y="315" fill="#f8fafc" font-size="10">(5,0)</text>
  
  <circle cx="160" cy="200" r="4" fill="#ef4444" />
  <text x="168" y="205" fill="#f8fafc" font-size="10">(6,5)</text>
  
  <circle cx="120" cy="100" r="4" fill="#ef4444" />
  <text x="125" y="95" fill="#f8fafc" font-size="10">(4,10)</text>
  
  <circle cx="40" cy="140" r="4" fill="#ef4444" />
  <text x="48" y="145" fill="#f8fafc" font-size="10">(0,8)</text>
</svg>`,
    diagramCaption: "Figure 28: Shaded feasible bounded region with corner points labeled."
  },
  {
    num: 29,
    text: "Suppose the mean, the median and the mode of a certain distribution are 32, 30.5 and 29.5 respectively, then which of the following is true?",
    a: "The distribution is positively skewed.",
    b: "The Bowley’s coefficient of skewness $\\beta < 0$.",
    c: "The Pearson’s coefficient of skewness is zero.",
    d: "The distribution is negatively skewed.",
    correct: "A",
    explanation: "In statistics, the relative order of the three measures of central tendency determines the skewness of the distribution:\n- If $\\text{Mean} > \\text{Median} > \\text{Mode}$, the distribution has a longer tail on the right side and is **positively skewed** (skewed to the right).\n- If $\\text{Mean} < \\text{Median} < \\text{Mode}$, it has a longer tail on the left and is **negatively skewed**.\n\nHere, $\\text{Mean} = 32$, $\\text{Median} = 30.5$, and $\\text{Mode} = 29.5$. Since $32 > 30.5 > 29.5$, the distribution is positively skewed. This corresponds to a Pearson coefficient of skewness greater than zero.",
    topic: "Introduction to Statistics"
  },
  {
    num: 30,
    text: "Which one of the following is non-random sampling?",
    a: "Stratified Sampling",
    b: "Systematic Sampling",
    c: "Convenience Sampling",
    d: "Cluster Sampling",
    correct: "C",
    explanation: "Sampling methods are classified as probability (random) or non-probability (non-random):\n- **Stratified, Systematic, and Cluster sampling** are probability methods where every member of the population has a known, non-zero chance of being selected.\n- **Convenience sampling** is a non-probability method where samples are selected based on easy accessibility and proximity. It does not involve a random selection process, making it non-random.",
    topic: "Introduction to Statistics"
  },
  {
    num: 31,
    text: "A company manufactures two types of sweaters: type A and type B. It costs Birr 360 to make a type A sweater and Birr 120 to make a type B sweater. The company can make at most 300 sweaters and spend at most Birr 72,000 a day. The number of sweaters of type B cannot exceed the number of sweaters of type A by more than 100. The company makes a profit of Birr 200 for each sweater of type A and Birr 120 for every sweater of type B. If $x$ is the number of type A sweaters and $y$ is the number of type B sweaters, then which one of the following standard forms of linear programming models should be used to maximize the profit?",
    a: "Maximize $P = 200x + 120y$ subject to: $x + y \\le 300$, $3x + y \\le 600$, $y \\le x + 100$, $x \\ge 0$, $y \\ge 0$",
    b: "Maximize $P = 200x + 120y$ subject to: $x + y \\le 300$, $3x + y \\le 600$, $x \\le y + 100$, $x \\ge 0$, $y \\ge 0$",
    c: "Maximize $P = 120x + 200y$ subject to: $x + y \\le 300$, $3x + y \\le 600$, $y \\le x + 100$, $x \\ge 0$, $y \\ge 0$",
    d: "Maximize $P = 200x + 120y$ subject to: $x + y \\le 300$, $x + 3y \\le 600$, $y \\le x + 100$, $x \\ge 0$, $y \\ge 0$",
    correct: "A",
    explanation: "Let us model the problem constraints and objective function mathematically:\n1. **Objective Function**: Profit from type A ($x$) is 200 Birr and from type B ($y$) is 120 Birr. To maximize profit:\n   $$\\text{Maximize } P = 200x + 120y$$\n\n2. **Total Sweaters Constraint**: The company can make at most 300 sweaters daily:\n   $$x + y \\leq 300$$\n\n3. **Budget Constraint**: Daily spending is capped at Birr 72,000, with costs of 360 Birr (type A) and 120 Birr (type B):\n   $$360x + 120y \\leq 72,000$$\n   Divide the inequality by 120 to simplify:\n   $$3x + y \\leq 600$$\n\n4. **Quantity Relationship Constraint**: Type B sweaters ($y$) cannot exceed type A sweaters ($x$) by more than 100:\n   $$y \\leq x + 100$$\n\n5. **Non-negativity**: Swear quantities cannot be negative:\n   $$x \\geq 0, \\quad y \\geq 0$$\n\nThis system matches option A perfectly.",
    topic: "Linear Programming"
  },
  {
    num: 32,
    text: "A circular plate of metal is expanding by heating. If the radius of the plate increases at a rate of 0.5 cm/sec, then which one of the following is the rate of increase of its area when the radius is 20cm?",
    a: "$80\\pi \\, \\text{cm}^2/\\text{sec}$",
    b: "$20\\pi \\, \\text{cm}^2/\\text{sec}$",
    c: "$10\\pi \\, \\text{cm}^2/\\text{sec}$",
    d: "$200\\pi \\, \\text{cm}^2/\\text{sec}$",
    correct: "B",
    explanation: "The area $A$ of a circle is related to its radius $r$ by the formula:\n$$A = \\pi r^2$$\n\nDifferentiating both sides with respect to time $t$ using the chain rule gives:\n$$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$$\n\nWe are given:\n- The rate of increase of the radius: $\\frac{dr}{dt} = 0.5 \\, \\text{cm/sec}$\n- The radius at the instant of interest: $r = 20 \\, \\text{cm}$\n\nSubstitute these values into the rate equation:\n$$\\frac{dA}{dt} = 2\\pi (20) (0.5) = 20\\pi \\, \\text{cm}^2/\\text{sec}$$",
    topic: "Calculus & Applications"
  },
  {
    num: 33,
    text: "On selling an article for Birr 450, a dealer lost 10%. The cost price of the article is equal to:",
    a: "Birr 405",
    b: "Birr 500",
    c: "Birr 550",
    d: "Birr 454.55",
    correct: "B",
    explanation: "Let $CP$ be the cost price of the article. Since the dealer lost $10\\%$, the selling price ($SP = 450$ Birr) represents $100\\% - 10\\% = 90\\%$ of the cost price:\n$$SP = 0.90 \\times CP$$\n$$450 = 0.90 \\times CP$$\n$$CP = \\frac{450}{0.90} = 500 \\text{ Birr}$$\n\nThus, the cost price of the article is Birr 500.",
    topic: "Business Mathematics"
  },
  {
    num: 34,
    text: "What is the solution set of the equation $\\frac{3x}{x+4} + \\frac{2}{x^2+6x+8} = \\frac{1}{x+2}$?",
    a: "$\\emptyset$",
    b: "$\\{-2, \\frac{1}{3}\\}$",
    c: "$\\{-2\\}$",
    d: "$\\{\\frac{1}{3}\\}$",
    correct: "D",
    explanation: "First, find the domain restrictions by factoring the denominator of the middle term:\n$$x^2 + 6x + 8 = (x+4)(x+2)$$\nThis tells us that $x \\neq -4$ and $x \\neq -2$.\n\nWrite out the equation with the factored denominator:\n$$\\frac{3x}{x+4} + \\frac{2}{(x+4)(x+2)} = \\frac{1}{x+2}$$\n\nMultiply both sides of the equation by the least common denominator $(x+4)(x+2)$:\n$$3x(x+2) + 2 = 1(x+4)$$\n$$3x^2 + 6x + 2 = x + 4$$\n$$3x^2 + 5x - 2 = 0$$\n\nFactor the quadratic equation:\n$$(3x-1)(x+2) = 0 \\implies x = \\frac{1}{3} \\quad \\text{or} \\quad x = -2$$\n\nSince $x = -2$ is a restricted value (causing a division by zero in the original equation), we discard it as extraneous. The only valid solution is $x = \\frac{1}{3}$. The solution set is $\\{\\frac{1}{3}\\}$.",
    topic: "Rational Expressions"
  },
  {
    num: 35,
    text: "If in an increasing geometric progression, the 6th term is 32 and its 8th term is 128, then what is the value of the common ratio?",
    a: "-2",
    b: "4",
    c: "2",
    d: "$\\pm 1$",
    correct: "C",
    explanation: "The formula for the $n$-th term of a geometric progression is:\n$$g_n = g_1 r^{n-1}$$\n\nUsing the given terms:\n- $g_6 = g_1 r^5 = 32 \\quad \\text{--- (Eq. 1)}$\n- $g_8 = g_1 r^7 = 128 \\quad \\text{--- (Eq. 2)}$\n\nDivide Eq. 2 by Eq. 1:\n$$\\frac{g_1 r^7}{g_1 r^5} = \\frac{128}{32} \\implies r^2 = 4 \\implies r = \\pm 2$$\n\nSince the problem specifies that this is an **increasing** geometric progression, the common ratio must be positive. If $r$ were $-2$, the terms would alternate in sign and not increase monotonically. Thus, $r = 2$.",
    topic: "Sequences & Series"
  },
  {
    num: 36,
    text: "What is the solution set of the system of linear equations given by:\n$$\\begin{cases} x - y - 2z = 1 \\\\ x + 2y + z = -2 \\\\ 2x - 2y - 4z = 2 \\end{cases}$$",
    a: "$\\{(z, -1-z, z) : z \\in \\mathbb{R}\\}$",
    b: "$\\{(-1-z, z, z) : z \\in \\mathbb{R}\\}$",
    c: "$\\{(z, 1+z, z) : z \\in \\mathbb{R}\\}$",
    d: "$\\{(1+z, z, z) : z \\in \\mathbb{R}\\}$",
    correct: "A",
    explanation: "Let us examine the equations:\n1. $x - y - 2z = 1 \\quad \\text{--- (Eq. 1)}$\n2. $x + 2y + z = -2 \\quad \\text{--- (Eq. 2)}$\n3. $2x - 2y - 4z = 2 \\quad \\text{--- (Eq. 3)}$\n\nNotice that Eq. 3 is simply Eq. 1 multiplied by 2. This means we have a dependent system of 2 independent equations with 3 variables, leading to infinitely many solutions parameterized by a free variable (let's use $z$).\n\nSubtract Eq. 1 from Eq. 2 to eliminate $x$:\n$$(x + 2y + z) - (x - y - 2z) = -2 - 1$$\n$$3y + 3z = -3 \\implies y + z = -1 \\implies y = -1 - z$$\n\nSubstitute $y = -1 - z$ into Eq. 1 to solve for $x$ in terms of $z$:\n$$x - (-1 - z) - 2z = 1$$\n$$x + 1 + z - 2z = 1 \\implies x - z = 0 \\implies x = z$$\n\nWriting the solution as an ordered triple $(x, y, z)$ in terms of the parameter $z$:\n$$(z, -1-z, z) \\quad \\text{for } z \\in \\mathbb{R}$$",
    topic: "Systems of Linear Equations"
  },
  {
    num: 37,
    text: "What is the image of the point $(2, -3)$ when reflected about the line $y = -x$?",
    a: "$(-3, 2)$",
    b: "$(2, 3)$",
    c: "$(3, -2)$",
    d: "$(-2, -3)$",
    correct: "C",
    explanation: "The transformation rule for the reflection of any point $(x, y)$ across the line $y = -x$ is:\n$$(x, y) \\rightarrow (-y, -x)$$\n\nApplying this rule to the point $(2, -3)$:\n- Interchanging the coordinates gives $(-3, 2)$.\n- Negating both values gives $(3, -2)$.\n\nThus, the reflected image is $(3, -2)$.",
    topic: "Coordinate Geometry"
  },
  {
    num: 38,
    text: "Let A and B be two vectors given by $\\vec{A} = 3\\vec{i} - 2\\vec{j}$ and $\\vec{B} = 5\\vec{i} + \\frac{1}{2}\\vec{j}$, then the vector $\\frac{1}{2}\\vec{A} - \\frac{2}{3}\\vec{B} = $",
    a: "$\\frac{9}{2}\\vec{i} - \\frac{4}{3}\\vec{j}$",
    b: "$-\\frac{11}{6}\\vec{i} - \\frac{4}{3}\\vec{j}$",
    c: "$\\frac{11}{6}\\vec{i} - \\frac{4}{3}\\vec{j}$",
    d: "$-\\frac{11}{6}\\vec{i} + \\frac{4}{3}\\vec{j}$",
    correct: "B",
    explanation: "We compute the given vector expression component-by-component:\n1. Compute $\\frac{1}{2}\\vec{A}$:\n   $$\\frac{1}{2}\\vec{A} = \\frac{1}{2}(3\\vec{i} - 2\\vec{j}) = \\frac{3}{2}\\vec{i} - \\vec{j}$$\n2. Compute $\\frac{2}{3}\\vec{B}$:\n   $$\\frac{2}{3}\\vec{B} = \\frac{2}{3}\\left(5\\vec{i} + \\frac{1}{2}\\vec{j}\\right) = \\frac{10}{3}\\vec{i} + \\frac{1}{3}\\vec{j}$$\n3. Subtract the two vectors:\n   $$\\frac{1}{2}\\vec{A} - \\frac{2}{3}\\vec{B} = \\left(\\frac{3}{2}\\vec{i} - \\vec{j}\\right) - \\left(\\frac{10}{3}\\vec{i} + \\frac{1}{3}\\vec{j}\\right)$$\n   $$= \\left(\\frac{3}{2} - \\frac{10}{3}\\right)\\vec{i} + \\left(-1 - \\frac{1}{3}\\right)\\vec{j}$$\n   $$= \\left(\\frac{9 - 20}{6}\\right)\\vec{i} - \\frac{4}{3}\\vec{j} = -\\frac{11}{6}\\vec{i} - \\frac{4}{3}\\vec{j}$$",
    topic: "Vectors in 2D"
  },
  {
    num: 39,
    text: "If $Q_3 = 50$ and $Q_1 = 35$, then find the coefficient of quartile deviation.",
    a: "$\\frac{3}{17}$",
    b: "$\\frac{15}{2}$",
    c: "$\\frac{5}{17}$",
    d: "$\\frac{17}{3}$",
    correct: "A",
    explanation: "The coefficient of quartile deviation is a relative measure of dispersion given by the formula:\n$$\\text{Coefficient} = \\frac{Q_3 - Q_1}{Q_3 + Q_1}$$\n\nSubstitute the given values $Q_3 = 50$ and $Q_1 = 35$:\n$$\\text{Coefficient} = \\frac{50 - 35}{50 + 35} = \\frac{15}{85}$$\n\nSimplify the fraction by dividing both the numerator and the denominator by 5:\n$$\\text{Coefficient} = \\frac{3}{17}$$",
    topic: "Introduction to Statistics"
  },
  {
    num: 40,
    text: "Consider the matrix $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 6 & 1 & 9 \\\\ 4 & 0 & 5 \\end{pmatrix}$. Which of the following is the $\\det(A)$ and the cofactor of entry $a_{32}$ respectively?",
    a: "$5, 0$",
    b: "$-19, -9$",
    c: "$-19, 7$",
    d: "$5, 9$",
    correct: "D",
    explanation: "Let us calculate both values:\n1. **Determinant of $A$**:\n   We expand along the first row:\n   $$\\det(A) = 1 \\begin{vmatrix} 1 & 9 \\\\ 0 & 5 \\end{vmatrix} - 2 \\begin{vmatrix} 6 & 9 \\\\ 4 & 5 \\end{vmatrix} + 3 \\begin{vmatrix} 6 & 1 \\\\ 4 & 0 \\end{vmatrix}$$\n   $$\\det(A) = 1(5 - 0) - 2(30 - 36) + 3(0 - 4)$$\n   $$\\det(A) = 5 - 2(-6) + 3(-4) = 5 + 12 - 12 = 5$$\n\n2. **Cofactor of entry $a_{32}$**:\n   The entry $a_{32}$ is in row 3, column 2. The cofactor formula is $C_{ij} = (-1)^{i+j} M_{ij}$:\n   $$C_{32} = (-1)^{3+2} M_{32} = -M_{32}$$\n   The minor $M_{32}$ is the determinant of the $2 \\times 2$ submatrix obtained by deleting row 3 and column 2:\n   $$M_{32} = \\begin{vmatrix} 1 & 3 \\\\ 6 & 9 \\end{vmatrix} = 1(9) - 3(6) = 9 - 18 = -9$$\n   Therefore, $C_{32} = -(-9) = 9$.\n\nThus, the determinant is 5 and the cofactor is 9.",
    topic: "Matrices & Determinants"
  },
  {
    num: 41,
    text: "If $\\vec{u} = \\vec{i} - \\vec{j}$ and $\\vec{v} = 2\\vec{i} + \\vec{j}$ are two vectors, then which of the following is the cosine of the angle between $\\vec{u}$ and $\\vec{v}$?",
    a: "$\\frac{3\\sqrt{10}}{10}$",
    b: "$\\sqrt{10}$",
    c: "$3\\sqrt{10}$",
    d: "$\\frac{\\sqrt{10}}{10}$",
    correct: "D",
    explanation: "The cosine of the angle $\\theta$ between two vectors is given by:\n$$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\|\\vec{v}\\|}$$\n\n1. **Compute the dot product**:\n   $$\\vec{u} \\cdot \\vec{v} = (1)(2) + (-1)(1) = 2 - 1 = 1$$\n2. **Compute the magnitudes**:\n   $$\\|\\vec{u}\\| = \\sqrt{1^2 + (-1)^2} = \\sqrt{2}$$\n   $$\\|\\vec{v}\\| = \\sqrt{2^2 + 1^2} = \\sqrt{5}$$\n3. **Calculate the product of the magnitudes**:\n   $$\\|\\vec{u}\\| \\|\\vec{v}\\| = \\sqrt{2} \\times \\sqrt{5} = \\sqrt{10}$$\n4. **Calculate cosine**:\n   $$\\cos\\theta = \\frac{1}{\\sqrt{10}} = \\frac{\\sqrt{10}}{10}$$",
    topic: "Vectors in 2D"
  },
  {
    num: 42,
    text: "If Bona’s income is Birr 180,000 per year and he pays 20% of this as house rent and 15% of the remainder on his child’s education, then find the money left with him.",
    a: "Birr 144,000",
    b: "Birr 158,000",
    c: "Birr 21,000",
    d: "Birr 122,400",
    correct: "D",
    explanation: "Let us calculate Bona's remaining funds step-by-step:\n1. **House Rent**:\n   $$\\text{Rent} = 20\\% \\text{ of } 180,000 = 0.20 \\times 180,000 = 36,000 \\text{ Birr}$$\n2. **Remainder** after paying rent:\n   $$\\text{Remainder} = 180,000 - 36,000 = 144,000 \\text{ Birr}$$\n3. **Child's Education** (15% of the remainder):\n   $$\\text{Education} = 15\\% \\text{ of } 144,000 = 0.15 \\times 144,000 = 21,600 \\text{ Birr}$$\n4. **Final money left**:\n   $$\\text{Money Left} = 144,000 - 21,600 = 122,400 \\text{ Birr}$$",
    topic: "Business Mathematics"
  },
  {
    num: 43,
    text: "The following histogram presents the marks of Grade 12 students of a certain secondary school out of 100. Based on the given data in the histogram, what percentage of students secured less than 60 marks?",
    a: "35%",
    b: "48%",
    c: "52%",
    d: "60%",
    correct: "B",
    explanation: "Let us find the total number of students and the number of students who scored less than 60 marks:\n1. **Number of students with marks < 60** (summing the frequencies of the intervals below 60):\n   - Interval [30, 40): 10 students\n   - Interval [40, 50): 30 students\n   - Interval [50, 60): 80 students\n   $$\\text{Total Students (< 60)} = 10 + 30 + 80 = 120 \\text{ students}$$\n\n2. **Total number of students** (summing all intervals):\n   - Interval [60, 70): 65 students\n   - Interval [70, 80): 40 students\n   - Interval [80, 90): 25 students\n   $$\\text{Total Students} = 120 + 65 + 40 + 25 = 250 \\text{ students}$$\n\n3. **Percentage calculation**:\n   $$\\text{Percentage} = \\frac{120}{250} \\times 100\\% = 48\\%$$",
    topic: "Introduction to Statistics",
    diagramSvg: `<svg viewBox="0 0 420 300" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0f172a" />
  
  <!-- Y-Axis Gridlines -->
  <line x1="50" y1="220" x2="380" y2="220" stroke="#334155" stroke-dasharray="3,3" />
  <line x1="50" y1="180" x2="380" y2="180" stroke="#334155" stroke-dasharray="3,3" />
  <line x1="50" y1="140" x2="380" y2="140" stroke="#334155" stroke-dasharray="3,3" />
  <line x1="50" y1="100" x2="380" y2="100" stroke="#334155" stroke-dasharray="3,3" />
  <line x1="50" y1="60"  x2="380" y2="60"  stroke="#334155" stroke-dasharray="3,3" />
  
  <!-- Axes -->
  <line x1="50" y1="260" x2="380" y2="260" stroke="#94a3b8" stroke-width="2" />
  <line x1="50" y1="40"  x2="50"  y2="260" stroke="#94a3b8" stroke-width="2" />
  
  <!-- Y-Axis Labels -->
  <text x="30" y="264" fill="#94a3b8" font-size="10" text-anchor="end">0</text>
  <text x="30" y="224" fill="#94a3b8" font-size="10" text-anchor="end">20</text>
  <text x="30" y="184" fill="#94a3b8" font-size="10" text-anchor="end">40</text>
  <text x="30" y="144" fill="#94a3b8" font-size="10" text-anchor="end">60</text>
  <text x="30" y="104" fill="#94a3b8" font-size="10" text-anchor="end">80</text>
  <text x="30" y="64"  fill="#94a3b8" font-size="10" text-anchor="end">100</text>
  <text x="15" y="150" fill="#cbd5e1" font-size="11" font-weight="bold" transform="rotate(-90 15 150)" text-anchor="middle">Number of Students</text>

  <!-- Bars (Width = 50px each interval) -->
  <!-- 30-40 (h=10 -> 20px) -->
  <rect x="60" y="240" width="50" height="20" fill="#38bdf8" stroke="#0284c7" stroke-width="1" />
  <text x="85" y="235" fill="#f1f5f9" font-size="10" text-anchor="middle">10</text>
  
  <!-- 40-50 (h=30 -> 60px) -->
  <rect x="110" y="200" width="50" height="60" fill="#38bdf8" stroke="#0284c7" stroke-width="1" />
  <text x="135" y="195" fill="#f1f5f9" font-size="10" text-anchor="middle">30</text>
  
  <!-- 50-60 (h=80 -> 160px) -->
  <rect x="160" y="100" width="50" height="160" fill="#38bdf8" stroke="#0284c7" stroke-width="1" />
  <text x="185" y="95" fill="#f1f5f9" font-size="10" text-anchor="middle">80</text>
  
  <!-- 60-70 (h=65 -> 130px) -->
  <rect x="210" y="130" width="50" height="130" fill="#f43f5e" stroke="#be123c" stroke-width="1" />
  <text x="235" y="125" fill="#f1f5f9" font-size="10" text-anchor="middle">65</text>
  
  <!-- 70-80 (h=40 -> 80px) -->
  <rect x="260" y="180" width="50" height="80" fill="#f43f5e" stroke="#be123c" stroke-width="1" />
  <text x="285" y="175" fill="#f1f5f9" font-size="10" text-anchor="middle">40</text>
  
  <!-- 80-90 (h=25 -> 50px) -->
  <rect x="310" y="210" width="50" height="50" fill="#f43f5e" stroke="#be123c" stroke-width="1" />
  <text x="335" y="205" fill="#f1f5f9" font-size="10" text-anchor="middle">25</text>

  <!-- X-Axis Labels -->
  <text x="60" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">30</text>
  <text x="110" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">40</text>
  <text x="160" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">50</text>
  <text x="210" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">60</text>
  <text x="260" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">70</text>
  <text x="310" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">80</text>
  <text x="360" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">90</text>
  <text x="215" y="292" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">Marks Secured (out of 100)</text>
</svg>`,
    diagramCaption: "Figure 43: Histogram showing math marks for 250 grade 12 students."
  },
  {
    num: 44,
    text: "The graph shown in the figure is the graph of the first derivative $f'$ of a function $f$. Which of the following could represent the graph of $f$?",
    a: "A graph which has a local minimum at $x = 1$ and local maximum at $x = 2.5$.",
    b: "A graph which increases monotonically across the entire domain.",
    c: "A graph which increases on $(0, 1)$, has a local maximum at $x = 1$, decreases on $(1, 2.5)$, has a local minimum at $x = 2.5$, and increases for $x > 2.5$.",
    d: "A graph which has a cusp at $x = 1$ and is horizontal elsewhere.",
    correct: "C",
    explanation: "Let us analyze the relationship between the graph of $f'$ (the derivative) and $f$ (the function):\n1. On the interval $(0, 1)$, $f'(x) > 0$ (the graph of $f'$ is above the x-axis). This means the function $f(x)$ is **increasing** on $(0, 1)$.\n2. At $x = 1$, $f'(x) = 0$ and changes sign from positive to negative. This means $f(x)$ has a **local maximum** at $x = 1$.\n3. On the interval $(1, 2.5)$, $f'(x) < 0$ (the graph of $f'$ is below the x-axis). This means the function $f(x)$ is **decreasing** on $(1, 2.5)$.\n4. At $x = 2.5$, $f'(x) = 0$ and changes sign from negative to positive. This means $f(x)$ has a **local minimum** at $x = 2.5$.\n5. For $x > 2.5$, $f'(x) > 0$ (the graph of $f'$ is above the x-axis), so $f(x)$ is **increasing**.\n\nLooking at the choices, option C correctly describes this behavior, which corresponds to the graph of a cubic polynomial function.",
    topic: "Calculus & Applications",
    diagramSvg: `<svg viewBox="0 0 350 250" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0f172a" />
  <!-- Coordinate Plane -->
  <line x1="30" y1="150" x2="320" y2="150" stroke="#64748b" stroke-width="1.5" />
  <line x1="50" y1="20"  x2="50"  y2="220" stroke="#64748b" stroke-width="1.5" />
  
  <!-- Tick Marks -->
  <!-- 1 unit = 50px -->
  <line x1="100" y1="147" x2="100" y2="153" stroke="#94a3b8" />
  <text x="100" y="168" fill="#94a3b8" font-size="10" text-anchor="middle">1.0</text>
  
  <line x1="150" y1="147" x2="150" y2="153" stroke="#94a3b8" />
  <text x="150" y="168" fill="#94a3b8" font-size="10" text-anchor="middle">2.0</text>

  <line x1="175" y1="147" x2="175" y2="153" stroke="#94a3b8" />
  <text x="175" y="168" fill="#94a3b8" font-size="10" text-anchor="middle">2.5</text>
  
  <line x1="200" y1="147" x2="200" y2="153" stroke="#94a3b8" />
  <text x="200" y="168" fill="#94a3b8" font-size="10" text-anchor="middle">3.0</text>
  
  <!-- Derivative Curve f'(x) = 2(x-1)(x-2.5) -> scaled -->
  <!-- Peak around x=0, zeros at 1.0 (100px) and 2.5 (175px) -->
  <path d="M 50,50 Q 75,100 100,150 T 175,150 Q 225,110 275,30" fill="none" stroke="#ef4444" stroke-width="2.5" />
  <text x="285" y="40" fill="#ef4444" font-size="11" font-weight="bold">y = f'(x)</text>
</svg>`,
    diagramCaption: "Figure 44: Graph of the first derivative of a function f(x)."
  },
  {
    num: 45,
    text: "The areas of two similar triangles are $144 \\, \\text{cm}^2$ and $81 \\, \\text{cm}^2$. If one side of the first triangle is $6 \\, \\text{cm}$, then which of the following is the length of the corresponding side of the second triangle?",
    a: "$\\frac{81}{4} \\, \\text{cm}$",
    b: "$\\frac{9}{2} \\, \\text{cm}$",
    c: "$\\frac{3}{2} \\, \\text{cm}$",
    d: "$\\frac{9}{4} \\, \\text{cm}$",
    correct: "B",
    explanation: "For any two similar triangles, the ratio of their areas is equal to the square of the ratio of their corresponding side lengths:\n$$\\frac{\\text{Area}_1}{\\text{Area}_2} = \\left( \\frac{s_1}{s_2} \\right)^2$$\n\nSubstitute the given values:\n$$\\frac{144}{81} = \\left( \\frac{6}{s_2} \\right)^2$$\nTake the square root of both sides:\n$$\\sqrt{\\frac{144}{81}} = \\frac{6}{s_2} \\implies \\frac{12}{9} = \\frac{6}{s_2}$$\nSimplify the fraction:\n$$\\frac{4}{3} = \\frac{6}{s_2} \\implies 4s_2 = 18 \\implies s_2 = \\frac{18}{4} = \\frac{9}{2} \\, \\text{cm}$$\n\nThus, the corresponding side length is $\\frac{9}{2} \\, \\text{cm}$ (or $4.5 \\, \\text{cm}$).",
    topic: "Euclidean Geometry"
  },
  {
    num: 46,
    text: "The following table shows the marks of 100 students in Mathematics and Physics:\n- Mathematics: Mean = 20, Standard Deviation = 2\n- Physics: Mean = 25, Standard Deviation = 3\nWhich subject shows the higher relative variability in marks?",
    a: "Mathematics",
    b: "Physics",
    c: "Both are equal",
    d: "Cannot be determined",
    correct: "B",
    explanation: "To compare the variability of two distributions with different units or means, we use the **Coefficient of Variation (CV)**, which measures relative variability as a percentage:\n$$\\text{CV} = \\frac{\\text{Standard Deviation}}{\\text{Mean}} \\times 100\\%$$\n\n1. **For Mathematics**:\n   $$\\text{CV}_{\\text{Math}} = \\frac{2}{20} \\times 100\\% = 10\\%$$\n2. **For Physics**:\n   $$\\text{CV}_{\\text{Phys}} = \\frac{3}{25} \\times 100\\% = 12\\%$$\n\nSince $12\\% > 10\\%$, Physics shows the higher relative variability.",
    topic: "Introduction to Statistics"
  },
  {
    num: 47,
    text: "If a frustum of a right circular cone with base radii 3cm and 4cm and a slant height of 6cm is given, then what is the total surface area of this frustum?",
    a: "$67\\pi \\, \\text{cm}^2$",
    b: "$74\\pi \\, \\text{cm}^2$",
    c: "$56\\pi \\, \\text{cm}^2$",
    d: "$36\\pi \\, \\text{cm}^2$",
    correct: "A",
    explanation: "The total surface area ($A$) of a frustum of a cone is the sum of the top circular base area, bottom circular base area, and lateral surface area:\n$$A = \\pi R^2 + \\pi r^2 + \\pi (R + r)l = \\pi [R^2 + r^2 + (R + r)l]$$\n\nGiven:\n- Bottom radius $R = 4 \\, \\text{cm}$\n- Top radius $r = 3 \\, \\text{cm}$\n- Slant height $l = 6 \\, \\text{cm}$\n\nSubstitute these values into the formula:\n$$A = \\pi [4^2 + 3^2 + (4 + 3) \\times 6]$$\n$$A = \\pi [16 + 9 + 7 \\times 6]$$\n$$A = \\pi [25 + 42] = 67\\pi \\, \\text{cm}^2$$",
    topic: "Three Dimensional Geometry"
  },
  {
    num: 48,
    text: "In the circle O shown in the figure, if $m(\\angle CBE) = 63^\\circ$ and $m(\\angle BED) = 28^\\circ$, which of the following is the measure of angle $\\angle BAD$?",
    a: "$91^\\circ$",
    b: "$56^\\circ$",
    c: "$70^\\circ$",
    d: "$35^\\circ$",
    correct: "D",
    explanation: "The point $A$ lies outside the circle, and two secants $AC$ (intersecting the circle at $B$ and $C$) and $AE$ (intersecting the circle at $D$ and $E$) are drawn from it.\n\n1. The measure of an angle formed by two secants intersecting outside a circle is equal to half the difference of the measures of their intercepted arcs:\n   $$m(\\angle BAD) = \\frac{1}{2} \\left( m(\\text{arc } CE) - m(\\text{arc } BD) \\right)$$\n2. Find the measures of these intercepted arcs from the given inscribed angles:\n   - Inscribed angle $\\angle CBE = 63^\\circ$ intercepts arc $CE$. Therefore, $m(\\text{arc } CE) = 2 \\times 63^\\circ = 126^\\circ$.\n   - Inscribed angle $\\angle BED = 28^\\circ$ intercepts arc $BD$. Therefore, $m(\\text{arc } BD) = 2 \\times 28^\\circ = 56^\\circ$.\n3. Substitute the arc measures into the formula:\n   $$m(\\angle BAD) = \\frac{1}{2} (126^\\circ - 56^\\circ) = \\frac{1}{2} (70^\\circ) = 35^\\circ$$",
    topic: "Euclidean Geometry",
    diagramSvg: `<svg viewBox="0 0 320 280" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0f172a" />
  
  <!-- Circle -->
  <circle cx="180" cy="140" r="80" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <circle cx="180" cy="140" r="3" fill="#38bdf8" />
  <text x="180" y="130" fill="#38bdf8" font-size="10" text-anchor="middle">O</text>
  
  <!-- Points -->
  <!-- A: (30, 80) -->
  <!-- B on circle: (112, 97) -->
  <!-- C on circle: (257, 117) -->
  <!-- D on circle: (108, 172) -->
  <!-- E on circle: (195, 219) -->
  <line x1="30" y1="80" x2="257" y2="117" stroke="#cbd5e1" stroke-width="1.5" /> <!-- Secant AC -->
  <line x1="30" y1="80" x2="195" y2="219" stroke="#cbd5e1" stroke-width="1.5" /> <!-- Secant AE -->
  <line x1="112" y1="97" x2="195" y2="219" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="2,2" /> <!-- Chord BE -->
  <line x1="195" y1="219" x2="108" y2="172" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="2,2" /> <!-- Chord ED -->
  
  <!-- Labels -->
  <circle cx="30" cy="80" r="4" fill="#ef4444" />
  <text x="20" y="75" fill="#f8fafc" font-size="11" font-weight="bold">A</text>
  
  <circle cx="112" cy="97" r="3" fill="#e2e8f0" />
  <text x="105" y="93" fill="#cbd5e1" font-size="10">B</text>
  
  <circle cx="257" cy="117" r="3" fill="#e2e8f0" />
  <text x="267" y="120" fill="#cbd5e1" font-size="10">C</text>
  
  <circle cx="108" cy="172" r="3" fill="#e2e8f0" />
  <text x="100" y="182" fill="#cbd5e1" font-size="10">D</text>
  
  <circle cx="195" cy="219" r="3" fill="#e2e8f0" />
  <text x="205" y="230" fill="#cbd5e1" font-size="10">E</text>
  
  <!-- Annotations -->
  <text x="140" y="112" fill="#34d399" font-size="10">63°</text>
  <text x="175" y="200" fill="#34d399" font-size="10">28°</text>
</svg>`,
    diagramCaption: "Figure 48: Circle O with secant lines AC and AE."
  },
  {
    num: 49,
    text: "What is the solution set of the equation $\\sqrt[3]{64^{x+1}} = \\left(\\frac{1}{16}\\right)^{2x-3}$?",
    a: "$\\{-1\\}$",
    b: "$\\{-2\\}$",
    c: "$\\{2\\}$",
    d: "$\\{1\\}$",
    correct: "D",
    explanation: "Let us express both sides of the equation using the common base 2:\n1. **Simplify the Left Side**:\n   $$\\sqrt[3]{64^{x+1}} = (64^{x+1})^{1/3} = ((2^6)^{x+1})^{1/3} = (2^{6x+6})^{1/3} = 2^{2x+2}$$\n2. **Simplify the Right Side**:\n   $$\\left(\\frac{1}{16}\\right)^{2x-3} = (2^{-4})^{2x-3} = 2^{-4(2x-3)} = 2^{-8x+12}$$\n\nSince the bases are identical, we equate the exponents:\n$$2x + 2 = -8x + 12$$\n$$10x = 10 \\implies x = 1$$\n\nThus, the solution set is $\\{1\\}$.",
    topic: "Exponential & Logarithmic Functions"
  },
  {
    num: 50,
    text: "Which of the following is true about the graph of $f(x) = \\frac{x-2}{x^2-5x+6}$?",
    a: "$x = 2$ and $x = 3$ are its vertical asymptotes.",
    b: "The x-axis is its horizontal asymptote.",
    c: "$y = 0$ is its oblique asymptote.",
    d: "The x-intercept is $(2, 0)$.",
    correct: "B",
    explanation: "First, let us factor the denominator of the rational function:\n$$f(x) = \\frac{x-2}{(x-2)(x-3)}$$\n\nThe domain restrictions are $x \\neq 2$ and $x \\neq 3$.\nFor $x \\neq 2$, we can cancel $(x-2)$, simplifying the function to:\n$$f(x) = \\frac{1}{x-3}$$\n\nNow, analyze the properties:\n- **Hole**: Since $(x-2)$ is cancelled, there is a removable discontinuity (a hole) at $x = 2$, not a vertical asymptote. Thus, A is false.\n- **Vertical Asymptote**: The denominator is zero after simplification at $x = 3$. This is the only vertical asymptote.\n- **Horizontal Asymptote**: Since the degree of the numerator (0) is less than the degree of the denominator (1) after simplification, the horizontal asymptote is the line $y = 0$ (which is the **x-axis**). Thus, B is true.\n- **Oblique Asymptote**: There is no oblique asymptote because a horizontal asymptote exists. Thus, C is false.\n- **x-intercept**: Since $x = 2$ is a hole and excluded from the domain, there is no intercept at $(2, 0)$. Thus, D is false.",
    topic: "Rational Functions"
  },
  {
    num: 51,
    text: "Let A be a $3 \\times 3$ matrix and $k$ be a scalar. Which of the following is true?",
    a: "If B is obtained by multiplying one row of A by $k$, then $|B| = |A|$.",
    b: "If B is obtained by interchanging two rows of A, then $|B| = |A|$.",
    c: "If $B = kA$, then $|B| = k^3|A|$.",
    d: "If B is obtained by adding $k$ times one row of A onto another row of A, then $|B| = k|A|$.",
    correct: "C",
    explanation: "Let us evaluate the basic properties of determinants:\n- **Option A is False**: Multiplying a single row of a matrix by a scalar $k$ multiplies its determinant by $k$, so $|B| = k|A|$.\n- **Option B is False**: Interchanging two rows of a matrix negates its determinant, so $|B| = -|A|$.\n- **Option C is True**: For any $n \\times n$ matrix $A$, multiplying the entire matrix by $k$ is equivalent to multiplying all $n$ rows by $k$. Therefore, $|kA| = k^n|A|$. For a $3 \\times 3$ matrix, this gives $|B| = k^3|A|$.\n- **Option D is False**: Adding a multiple of one row to another row does not change the determinant, so $|B| = |A|$.",
    topic: "Matrices & Determinants"
  },
  {
    num: 52,
    text: "Let $\\vec{u} = \\vec{i} + 3\\vec{j} + 2\\vec{k}$ and $\\vec{v} = 2\\vec{i} + \\vec{j} - \\vec{k}$ be two vectors. Which of the following represents the vector projection of $\\vec{u}$ on $\\vec{v}$?",
    a: "$\\vec{i} + \\frac{1}{2}\\vec{j} - \\frac{1}{2}\\vec{k}$",
    b: "$2\\vec{i} + \\vec{j} - \\vec{k}$",
    c: "$\\vec{i} + 3\\vec{j} + 2\\vec{k}$",
    d: "$\\frac{1}{2}\\vec{i} + \\vec{j} + \\frac{1}{2}\\vec{k}$",
    correct: "A",
    explanation: "The vector projection of vector $\\vec{u}$ on vector $\\vec{v}$ is given by the formula:\n$$\\text{proj}_{\\vec{v}}\\vec{u} = \\left( \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|^2} \\right) \\vec{v}$$\n\n1. **Compute the dot product $\\vec{u} \\cdot \\vec{v}$**:\n   $$\\vec{u} \\cdot \\vec{v} = (1)(2) + (3)(1) + (2)(-1) = 2 + 3 - 2 = 3$$\n2. **Compute the squared magnitude of $\\vec{v}$**:\n   $$\\|\\vec{v}\\|^2 = 2^2 + 1^2 + (-1)^2 = 4 + 1 + 1 = 6$$\n3. **Compute the scalar multiplier**:\n   $$\\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|^2} = \\frac{3}{6} = \\frac{1}{2}$$\n4. **Calculate vector projection**:\n   $$\\text{proj}_{\\vec{v}}\\vec{u} = \\frac{1}{2} (2\\vec{i} + \\vec{j} - \\vec{k}) = \\vec{i} + \\frac{1}{2}\\vec{j} - \\frac{1}{2}\\vec{k}$$",
    topic: "Vectors in 3D"
  },
  {
    num: 53,
    text: "What is the sum of the infinite geometric series: $2 - \\frac{4}{3} + \\frac{8}{9} - \\frac{16}{27} + \\dots$?",
    a: "$\\frac{6}{5}$",
    b: "$\\frac{2}{5}$",
    c: "$\\frac{5}{6}$",
    d: "$-\\frac{6}{5}$",
    correct: "A",
    explanation: "The given series is an infinite geometric series:\n- First term ($a$) = 2\n- Common ratio ($r$) = $\\frac{-4/3}{2} = -\\frac{2}{3}$\n\nSince the absolute value of the common ratio is less than 1 ($|r| = \\frac{2}{3} < 1$), the infinite series converges. The sum $S$ is calculated using the formula:\n$$S = \\frac{a}{1 - r} = \\frac{2}{1 - (-2/3)} = \\frac{2}{1 + 2/3} = \\frac{2}{5/3} = 2 \\times \\frac{3}{5} = \\frac{6}{5}$$",
    topic: "Sequences & Series"
  },
  {
    num: 54,
    text: "The focus of the parabola $y^2 - 4y - 8x - 12 = 0$ is equal to:",
    a: "$(0, 2)$",
    b: "$(-2, 2)$",
    c: "$(2, 0)$",
    d: "$(2, 2)$",
    correct: "A",
    explanation: "To find the focus of the parabola, we first write its equation in standard form by completing the square for the $y$-terms:\n$$y^2 - 4y = 8x + 12$$\n$$(y-2)^2 - 4 = 8x + 12$$\n$$(y-2)^2 = 8x + 16$$\n$$(y-2)^2 = 8(x+2)$$\n\nThis is a horizontal parabola of the form $(y-k)^2 = 4p(x-h)$:\n- Vertex $(h, k) = (-2, 2)$\n- $4p = 8 \\implies p = 2$ (since $p > 0$, it opens to the right)\n\nThe focus of a horizontal parabola opening to the right is located at $(h+p, k)$:\n$$\\text{Focus} = (-2 + 2, 2) = (0, 2)$$",
    topic: "Conic Sections"
  },
  {
    num: 55,
    text: "Let $f(x) = \\begin{cases} \\frac{\\sin(3x)}{x} & \\text{if } x \\neq 0 \\\\ k & \\text{if } x = 0 \\end{cases}$. If $f(x)$ is continuous at $x = 0$, what is the value of $k$?",
    a: "1",
    b: "3",
    c: "0",
    d: "$\\frac{1}{3}$",
    correct: "B",
    explanation: "For a function $f(x)$ to be continuous at $x = 0$, the function value $f(0)$ must equal the limit of the function as $x$ approaches 0:\n$$f(0) = \\lim_{x \\rightarrow 0} f(x)$$\n$$k = \\lim_{x \\rightarrow 0} \\frac{\\sin(3x)}{x}$$\n\nUsing the fundamental trigonometric limit $\\lim_{\\theta \\rightarrow 0} \\frac{\\sin\\theta}{\\theta} = 1$:\n$$k = \\lim_{x \\rightarrow 0} \\frac{3 \\sin(3x)}{3x} = 3 \\times 1 = 3$$\n\nThus, the value of $k$ must be 3.",
    topic: "Limits & Continuity"
  },
  {
    num: 56,
    text: "What is the limit $\\lim_{x \\rightarrow \\infty} \\left( \\sqrt{x^2 + 5x} - x \\right)$ equal to?",
    a: "$\\infty$",
    b: "0",
    c: "$\\frac{5}{2}$",
    d: "5",
    correct: "C",
    explanation: "To evaluate this limit of form $\\infty - \\infty$, we multiply and divide by the conjugate expression:\n$$\\lim_{x \\rightarrow \\infty} \\frac{\\left(\\sqrt{x^2 + 5x} - x\\right)\\left(\\sqrt{x^2 + 5x} + x\\right)}{\\sqrt{x^2 + 5x} + x}$$\n$$= \\lim_{x \\rightarrow \\infty} \\frac{(x^2 + 5x) - x^2}{\\sqrt{x^2 + 5x} + x}$$\n$$= \\lim_{x \\rightarrow \\infty} \\frac{5x}{\\sqrt{x^2\\left(1 + \\frac{5}{x}\\right)} + x}$$\nSince $x \\rightarrow \\infty$, $\\sqrt{x^2} = x$:\n$$= \\lim_{x \\rightarrow \\infty} \\frac{5x}{x \\left( \\sqrt{1 + \\frac{5}{x}} + 1 \\right)}$$\n$$= \\lim_{x \\rightarrow \\infty} \\frac{5}{\\sqrt{1 + \\frac{5}{x}} + 1}$$\n\nAs $x \\rightarrow \\infty$, $\\frac{5}{x} \\rightarrow 0$:\n$$= \\frac{5}{\\sqrt{1 + 0} + 1} = \\frac{5}{2}$$",
    topic: "Limits & Continuity"
  },
  {
    num: 57,
    text: "What is the derivative of the function $f(x) = e^{2x} \\ln(x)$ with respect to $x$?",
    a: "2$e^{2x}\\ln(x)$",
    b: "$e^{2x}(2\\ln(x) + \\frac{1}{x})$",
    c: "$\\frac{e^{2x}}{x}$",
    d: "$2e^{2x}(1 + \\frac{1}{x})$",
    correct: "B",
    explanation: "To find the derivative of $f(x) = e^{2x} \\ln(x)$, we apply the product rule $(uv)' = u'v + uv'$:\n- Let $u = e^{2x} \\implies u' = 2e^{2x}$\n- Let $v = \\ln(x) \\implies v' = \\frac{1}{x}$\n\nSubstitute into the product rule:\n$$f'(x) = (2e^{2x}) \\ln(x) + e^{2x} \\left( \\frac{1}{x} \\right)$$\nFactor out $e^{2x}$:\n$$f'(x) = e^{2x} \\left( 2\\ln(x) + \\frac{1}{x} \\right)$$\n\nThis matches option B.",
    topic: "Differential Calculus"
  },
  {
    num: 58,
    text: "If a function $f(x) = x^4 - 4x^3$ is given, then which of the following represents its point(s) of inflection?",
    a: "$(0, 0)$",
    b: "$(2, -16)$",
    c: "$(0, 0)$ and $(2, -16)$",
    d: "$(0, 0)$ and $(4, 0)$",
    correct: "C",
    explanation: "Points of inflection occur where the graph of the function changes concavity, which is where the second derivative $f''(x) = 0$ or is undefined, and changes sign:\n\n1. **First derivative**:\n   $$f'(x) = 4x^3 - 12x^2$$\n2. **Second derivative**:\n   $$f''(x) = 12x^2 - 24x$$\n3. **Set $f''(x) = 0$**:\n   $$12x(x - 2) = 0 \\implies x = 0 \\quad \\text{or} \\quad x = 2$$\n\n4. **Check for sign changes in $f''(x)$**:\n   - For $x < 0$, $f''(x) > 0$ (concave up).\n   - For $0 < x < 2$, $f''(x) < 0$ (concave down).\n   - For $x > 2$, $f''(x) > 0$ (concave up).\n   Since the sign of the second derivative changes at both $x = 0$ and $x = 2$, both correspond to inflection points.\n\n5. **Find the coordinates**:\n   - **At $x = 0$**: $f(0) = 0^4 - 4(0)^3 = 0 \\implies (0, 0)$\n   - **At $x = 2$**: $f(2) = 2^4 - 4(2)^3 = 16 - 32 = -16 \\implies (2, -16)$\n\nThus, the points of inflection are $(0, 0)$ and $(2, -16)$.",
    topic: "Calculus & Applications"
  },
  {
    num: 59,
    text: "If $z = 3 - 4i$ is a complex number, then what is its multiplicative inverse (in the form $a + bi$)?",
    a: "$\\frac{3}{25} - \\frac{4}{25}i$",
    b: "$3 + 4i$",
    c: "$\\frac{3}{25} + \\frac{4}{25}i$",
    d: "$\\frac{3}{5} + \\frac{4}{5}i$",
    correct: "C",
    explanation: "The multiplicative inverse of $z$ is $z^{-1} = \\frac{1}{z}$:\n$$z^{-1} = \\frac{1}{3 - 4i}$$\nMultiply the numerator and the denominator by the complex conjugate of the denominator, which is $3 + 4i$:\n$$z^{-1} = \\frac{1(3 + 4i)}{(3 - 4i)(3 + 4i)}$$\n$$z^{-1} = \\frac{3 + 4i}{3^2 + (-4)^2} = \\frac{3 + 4i}{9 + 16} = \\frac{3 + 4i}{25} = \\frac{3}{25} + \\frac{4}{25}i$$",
    topic: "Complex Numbers"
  },
  {
    num: 60,
    text: "Let $A$ and $B$ be two events such that $P(A) = 0.6$, $P(B) = 0.4$, and $P(A \\cap B) = 0.24$. Which of the following is true?",
    a: "A and B are independent events.",
    b: "A and B are mutually exclusive events.",
    c: "$P(A \\cup B) = 1.0$",
    d: "$P(A \\mid B) = 0.4$",
    correct: "A",
    explanation: "Two events $A$ and $B$ are independent if and only if:\n$$P(A \\cap B) = P(A) \\times P(B)$$\n\nLet us check this condition:\n$$P(A) \\times P(B) = 0.6 \\times 0.4 = 0.24$$\n\nSince $P(A \\cap B)$ is indeed equal to $0.24$, the events $A$ and $B$ are **independent**.",
    topic: "Probability"
  }
];

function seed() {
  const dbPath = path.join(process.cwd(), 'data', 'database.json');
  const backupPath = path.join(process.cwd(), 'data', 'database.backup.json');

  if (!fs.existsSync(dbPath)) {
    console.error(`Database file not found at ${dbPath}`);
    process.exit(1);
  }

  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  const targetExamId = 'exam-model-math-2018';
  const examIndex = (db.exams || []).findIndex((e: any) => e.id === targetExamId);

  const examMetadata = {
    id: targetExamId,
    title: '2018 E.C. Regional MATHEMATICS Model Examination',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: 'Regional Model Examinations',
    exam_type: 'Regional Model Exam',
    category: 'MODEL',
    source_type: 'USER_UPLOADED',
    is_free_preview: true,
    grade_id: 'grade-12',
    subject_id: 'subj-math',
    description: 'Official 2018 E.C. (2026 G.C.) Grade 12 Mathematics Model Examination from Oromia Education Bureau (OEB). Contains all 60 multiple choice questions with beautiful custom geometry, calculus, and linear programming diagrams, and detailed step-by-step mathematical explanations.',
    instructions: 'Answer all 60 questions. Choose the single best alternative from A, B, C, or D. Time allowed: 3.0 hours.',
    duration_minutes: 180,
    total_questions: 60,
    original_pdf_path: 'storage/private/exams/oeb_mathematics_2018_model.pdf',
    pdf_path: 'storage/private/exams/exam-model-math-2018.pdf',
    status: 'PUBLISHED',
    created_at: '2026-09-20T10:00:00.000Z',
    updated_at: new Date().toISOString(),
    grade_name: 'Grade 12',
    subject_name: 'Mathematics',
    total_marks: 100,
    is_active: true
  };

  if (examIndex >= 0) {
    db.exams[examIndex] = examMetadata;
  } else {
    db.exams.push(examMetadata);
  }

  // Remove existing questions for this exam
  db.exam_questions = (db.exam_questions || []).filter((q: any) => q.exam_id !== targetExamId);

  // Add all 60 questions
  const newQuestions = rawQuestions.map((q) => ({
    id: `q-${targetExamId}-${q.num}`,
    exam_id: targetExamId,
    question_number: q.num,
    question_text: q.text,
    option_a: q.a,
    option_b: q.b,
    option_c: q.c,
    option_d: q.d,
    correct_answer: q.correct,
    explanation: q.explanation,
    difficulty: q.num > 45 ? 'Hard' : q.num > 20 ? 'Medium' : 'Easy',
    topic_name: q.topic,
    section_instruction: q.instruction || 'Answer the following question by choosing the correct option.',
    instruction_category: q.instructionCategory || q.topic,
    diagram_svg: q.diagramSvg,
    diagram_caption: q.diagramCaption,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }));

  db.exam_questions.push(...newQuestions);

  // Write back
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  if (fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, JSON.stringify(db, null, 2), 'utf8');
  }

  console.log(`Successfully seeded ${newQuestions.length} questions for exam ${targetExamId}`);
}

seed();
