import { Book, BookChapter } from '../src/types';
import { getCurriculumForBook } from './curriculumRegistry';
import { buildTopicDetailedNotes } from './topicNotesKnowledge';
import { getCivics9PageContent } from '../scripts/civics9_data/civics_pages_data';
import { getMath12PageContent } from '../scripts/math12_data/math_pages_data';
import { getPhysics12PageContent } from '../scripts/physics12_data/physics_pages_data';
import { getBio12PageContent } from '../scripts/bio12_data/bio_pages_data';
import { getEnglish12PageContent } from '../scripts/eng12_data/eng_pages_data';
import { getChemistryPageContent } from '../scripts/chemistry_pages_data';
import { getMath11PageContent } from '../scripts/math11_data/math_pages_data';
import { getITGrade9PageContent } from './itGrade9Data';
import { getMath10PageContent } from './mathGrade10Data';
import { getPhysics10PageContent } from './physicsGrade10Data';

/**
 * Clean & Sanitize OCR text artifacts (e.g. garbled symbols, diamond question marks, glued words)
 * and convert set/math notation into beautiful, structured KaTeX Markdown.
 */
export function sanitizeAndFormatOcrText(text: string): string {
  if (!text) return '';
  let s = text;

  // 1. Clean garbled unicode characters and control characters
  s = s.replace(/[\uFFFD\uFFFE\uFFFF\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');

  // Strip Table of Contents dots (both consecutive and space-separated) and dotted page references
  s = s.replace(/(?:[.\u00B7]\s*){2,}\s*\d+/g, ' ');
  s = s.replace(/(?:[.\u00B7]\s*){3,}/g, ' ');
  s = s.replace(/\.{2,}\s*\d+/g, ' ');
  s = s.replace(/\.{3,}/g, ' ');
  s = s.replace(/·{2,}\s*\d+/g, ' ');
  s = s.replace(/·{3,}/g, ' ');

  // 2. Normalize smart quotes and non-breaking spaces
  s = s.replace(/[\u2018\u2019]/g, "'");
  s = s.replace(/[\u201C\u201D]/g, '"');
  s = s.replace(/\u00A0/g, ' ');

  // 3. Fix hyphenated line-breaks (e.g. 'Ther-\nmodynamics' -> 'Thermodynamics', 'exam-\nple' -> 'example')
  s = s.replace(/([a-zA-Z]+)-\s*[\r\n]+\s*([a-zA-Z]+)/g, '$1$2');

  // 4. Strip solo bullet/icon letters and markers at line starts
  s = s.replace(/^[ \t]*[■▲◆●]\s+/gm, '');
  s = s.replace(/^[ \t]*T([A-Z][a-z]+)/gm, '$1');

  // 5. Ensure bullet points start on a new line with clear spacing
  s = s.replace(/(?:[ \t]*)•[ \t]*/g, '\n\n• ');

  // 6. Ensure punctuation has trailing space if followed directly by a letter
  s = s.replace(/([.,;:!?])([A-Za-z])/g, '$1 $2');

  // 7. Separate stuck lowercase to uppercase (e.g. 'applicable.KeyConcept' -> 'applicable. Key Concept')
  s = s.replace(/([a-z0-9])([A-Z][a-z])/g, '$1 $2');

  // 8. Format Section Headers & Key Concepts
  s = s.replace(/(?:^|\n)\s*(\d+\.\d+(?:\.\d+)?\s+[A-Za-z][^\n]+)/g, '\n\n### $1\n\n');
  s = s.replace(/(?:^|\n)\s*(Unit\s+\d+\s*:[^\n]+)/gi, '\n\n## $1\n\n');
  s = s.replace(/(?:^|\n)\s*(Key Concept:?)/gi, '\n\n> **Key Concept:**\n');
  s = s.replace(/(?:^|\n)\s*(Activity\s+\d+\.\d+[^:\n]*:?[^\n]*)/gi, '\n\n### 📋 $1\n\n');
  s = s.replace(/(?:^|\n)\s*(Practical\s+Exercise\s+\d+\.\d+[^:\n]*:?[^\n]*)/gi, '\n\n### 🛠️ $1\n\n');
  s = s.replace(/(?:^|\n)\s*(Worked Example\s+\d+\.\d+[^:\n]*:?[^\n]*)/gi, '\n\n#### 💡 $1\n\n');
  s = s.replace(/(?:^|\n)\s*(Review Questions:?|Review Exercise[^:\n]*:?|Exercise\s+\d+\.\d+[^:\n]*:?)/gi, '\n\n### ✍️ $1\n\n');
  s = s.replace(/(?:^|\n)\s*(Unit Summary[^:\n]*:?)/gi, '\n\n### 📝 $1\n\n');

  // Format Figures as visual callout cards
  s = s.replace(/(?:^|\n)\s*(Figure\s+\d+\.\d+[^:\n]*:?[^\n]*)/gi, '\n\n> 🖼️ **$1**\n> *(Original textbook diagram/illustration — View crisp illustration in the "Exact Page" tab)*\n\n');

  // Format Table titles
  s = s.replace(/(?:^|\n)\s*(Table\s+\d+\.\d+[^:\n]*:?[^\n]*)/gi, '\n\n### 📊 $1\n\n');

  // Fix common OCR bundled / glued words
  s = s.replace(/\baplain\b/gi, 'a plain');
  s = s.replace(/\bactsas\b/gi, 'acts as');
  s = s.replace(/\bofwireless\b/gi, 'of wireless');
  s = s.replace(/\bvarious types of\b/gi, 'various types of ');
  s = s.replace(/\bconnectsvarious\b/gi, 'connects various');
  s = s.replace(/\bnetworkand\b/gi, 'network and');
  s = s.replace(/\bfileand\b/gi, 'file and');
  s = s.replace(/\bfilesand\b/gi, 'files and');
  s = s.replace(/\bcomputerprogram\b/gi, 'computer program');
  s = s.replace(/\bapplicationsoftware\b/gi, 'application software');
  s = s.replace(/\bwordprocessing\b/gi, 'word processing');
  s = s.replace(/\boperating system\b/gi, 'operating system');
  s = s.replace(/\boperatingsystem\b/gi, 'operating system');
  s = s.replace(/\bfileexplorer\b/gi, 'File Explorer');
  s = s.replace(/\bkeyboard shortcut\b/gi, 'keyboard shortcut');
  s = s.replace(/\bkeyboardshortcut\b/gi, 'keyboard shortcut');

  // 9. Fix chemical reaction arrows and equilibrium symbols with pure Unicode
  s = s.replace(/<==>|<-->|<=>|\b<->\b/g, ' ⇌ ');
  s = s.replace(/-->|->/g, ' → ');

  // 10. Fix set notation and empty set symbols with pure Unicode
  s = s.replace(/\{\s*\}\s*or\s*Ø/gi, '{} or ∅');
  s = s.replace(/\bØ\b/g, '∅');

  // 11. Fix math operators and exponents with pure Unicode superscripts
  s = s.replace(/\b([a-zA-Z0-9]+)\^2\b/g, '$1²');
  s = s.replace(/\b([a-zA-Z0-9]+)\^3\b/g, '$1³');
  s = s.replace(/\$/g, '');

  // 12. Clean excessive spacing & multiple blank lines
  s = s.replace(/[ \t]{2,}/g, ' ');
  s = s.replace(/\n{3,}/g, '\n\n');

  return s.trim();
}

/**
 * Generates or cleans a textbook page into a structured, textbook-quality Digital Textbook page
 * with formatted KaTeX equations, headings, worked examples, and review questions matching the syllabus.
 */
export function buildStructuredDigitalPageText(
  book: Book,
  chapter: BookChapter | undefined,
  printedPage: number,
  existingRawText?: string
): string {
  const subjKey = (book.subject_id || '').replace('subj-', '').toLowerCase();
  const subjName = book.subject_name || 'Mathematics';
  const gradeName = book.grade_name || 'Grade 9';
  const chapNum = chapter?.chapter_number || Math.max(1, Math.ceil(printedPage / 35));
  const chapTitle = chapter?.chapter_title || `Unit ${chapNum}: Core Curriculum`;

  // Matched topic from chapter topics list (closest topic whose start_page <= printedPage)
  const sortedTopics = [...(chapter?.topics || [])].sort((a, b) => (b.start_page || 0) - (a.start_page || 0));
  const topic = sortedTopics.find(t => printedPage >= (t.start_page || 0)) || chapter?.topics?.[0] || {
    topic_number: `${chapNum}.1`,
    title: chapTitle,
    description: `Core study material for ${chapTitle}`,
    start_page: printedPage
  };

  // 1. For Grade 9 and Grade 10 textbooks (and newly uploaded textbooks), always use the
  // topic-and-page-synchronized curriculum formatter so every page matches its exact Unit, Topic,
  // Printed Page Number, and extracted PDF text 100%.
  if (gradeName.includes('9') || gradeName.includes('10') || book.id.startsWith('book-9-') || book.id.startsWith('book-10-')) {
    return buildGenericCurriculumPageText(book, chapNum, chapTitle, topic, printedPage, existingRawText);
  }

  // Grade 12 Chemistry
  if (book.id === 'book-12-chem' || book.id === 'book-12-nat-chem' || (gradeName.includes('12') && subjKey.includes('chem'))) {
    return getChemistryPageContent(printedPage);
  }

  // Grade 12 Mathematics
  if (book.id === 'book-12-math' || book.id === 'book-12-nat-math' || book.id === 'book-12-soc-math' || (gradeName.includes('12') && subjKey.includes('math'))) {
    return getMath12PageContent(printedPage);
  }

  // Grade 12 Physics
  if (book.id === 'book-12-phys' || book.id === 'book-12-nat-phys' || (gradeName.includes('12') && subjKey.includes('phys'))) {
    return getPhysics12PageContent(printedPage);
  }

  // Grade 12 Biology
  if (book.id === 'book-12-bio' || book.id === 'book-12-nat-bio' || (gradeName.includes('12') && subjKey.includes('bio'))) {
    return getBio12PageContent(printedPage);
  }

  // Grade 12 English
  if (book.id === 'book-12-eng' || book.id === 'book-12-nat-eng' || book.id === 'book-12-soc-eng' || (gradeName.includes('12') && subjKey.includes('eng'))) {
    return getEnglish12PageContent(printedPage);
  }

  // Grade 11 Mathematics
  if (book.id === 'book-11-math' || book.id === 'book-11-nat-math' || book.id === 'book-11-soc-math' || (gradeName.includes('11') && subjKey.includes('math'))) {
    return getMath11PageContent(printedPage);
  }

  // 2. For other books or newly uploaded PDFs ("Ingest with AI"), combine any clean extracted page text
  // with the rich structured curriculum explanation, callout cards, worked example, and EUEE questions
  return buildGenericCurriculumPageText(book, chapNum, chapTitle, topic, printedPage, existingRawText);
}

function buildGrade9MathPageText(
  printedPage: number,
  chapNum: number,
  chapTitle: string,
  topic: any
): string {
  const topNum = topic.topic_number || `${chapNum}.1`;
  const topTitle = topic.title || chapTitle;

  // UNIT 1: THE NUMBER SYSTEM & SETS (Pages 1 - 42)
  if (printedPage <= 42 || chapNum === 1) {
    if (printedPage <= 10) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
${gradeName()} Mathematics Student Textbook — Page ${printedPage}
Unit 1: The Number System & Sets • Section 1.1: Notion of Sets & Set Representations

### 1.1 Notion of Sets and Fundamental Notations

In mathematics, a **set** is a well-defined collection of distinct objects called *elements* or *members* of the set. A collection is well-defined if it is possible to unambiguously determine whether any given object belongs to the collection.

#### Methods of Describing Sets:
1. **Roster (Listing) Method:** Elements are listed inside curly braces separated by commas.
   - Example 1: The set $A$ of odd natural numbers less than 10 is written as:
     $$A = \\{1, 3, 5, 7, 9\\}$$
   - Example 2: The set $C$ of perfect squares between 1 and 25 inclusive:
     $$C = \\{1, 4, 9, 16, 25\\}$$
   - Example 3: The set $F$ of integers from $-10$ to $2$:
     $$F = \\{-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2\\}$$

2. **Set-Builder Notation:** States the defining property or rule that all elements must satisfy:
   $$A = \\{x \\in \\mathbb{R} \\mid P(x)\\b}$$
   - Example: The set of real numbers $x$ between 1 and 2 is written as:
     $$S = \\{x \\in \\mathbb{R} \\mid 1 < x < 2\\}$$

3. **Special Sets:**
   - **Empty Set (Null Set):** A set containing no elements, denoted by $\\emptyset$ or $\\{\\}$. Note that $\\emptyset \\neq \\{0\\}$ and $\\emptyset \\neq \\{\\emptyset\\}$.
   - **Universal Set ($U$):** The set containing all possible objects under consideration in a given discussion.

---

### Worked Example 1.1
**Problem:** Write the set $B = \\{x \\in \\mathbb{Z} \\mid x^2 - 9 = 0\\}$ in roster form and determine its cardinality $|B|$.

**Solution:**
1. Solve the quadratic equation: $x^2 - 9 = 0 \\implies x^2 = 9 \\implies x = \\pm 3$.
2. Both $3$ and $-3$ belong to the set of integers $\\mathbb{Z}$.
3. In roster form: $B = \\{-3, 3\\}$.
4. The cardinality is $|B| = 2$.

---

### Classroom Practice Exercise 1.1
1. Express the following sets using set-builder notation:
   a) $A = \\{1, 3, 5, 7, \\dots\\}$
   b) $C = \\{1, 4, 9, 16, 25\\}$
   c) $F = \\{-10, \\dots, -3, -2, -1, 0, 1, 2\\}$
2. Is the set $M = \\{x \\in \\mathbb{R} \\mid 1 < x < 2 \\text{ and } x \\in \\mathbb{Z}\\}$ empty? Explain.`;
    }

    if (printedPage <= 20) {
      return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 1: The Number System & Sets • Section 1.2: Set Operations & Venn Diagrams

### 1.2 Set Operations and Venn Diagrams

#### 1. Union of Sets ($A \\cup B$)
The union of two sets $A$ and $B$ is the set of all elements that belong to $A$, or to $B$, or to both:
$$A \\cup B = \\{x \\mid x \\in A \\text{ or } x \\in B\\}$$

#### 2. Intersection of Sets ($A \\cap B$)
The intersection of $A$ and $B$ is the set of all elements belonging to both $A$ and $B$:
$$A \\cap B = \\{x \\mid x \\in A \\text{ and } x \\in B\\}$$
- Two sets are **disjoint** if $A \\cap B = \\emptyset$.

#### 3. Difference of Sets ($A \\setminus B$)
$$A \\setminus B = \\{x \\mid x \\in A \\text{ and } x \\notin B\\}$$

#### 4. Absolute Complement ($A'$)
Given a universal set $U$, the complement of $A$ is:
$$A' = U \\setminus A = \\{x \\in U \\mid x \\notin A\\}$$

#### De Morgan's Laws:
1. $(A \\cup B)' = A' \\cap B'$
2. $(A \\cap B)' = A' \\cup B'$

---

### Worked Example 1.2
Let $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{2, 3, 5, 7\\}$, and $B = \\{1, 3, 5, 7, 9\\}$.
Find: (a) $A \\cap B$, (b) $A \\cup B$, (c) $A'$, (d) $A \\setminus B$.

**Solution:**
- (a) Common elements: $A \\cap B = \\{3, 5, 7\\}$.
- (b) Combined elements: $A \\cup B = \\{1, 2, 3, 5, 7, 9\\}$.
- (c) Elements in $U$ not in $A$: $A' = \\{1, 4, 6, 8, 9, 10\\}$.
- (d) Elements in $A$ not in $B$: $A \\setminus B = \\{2\\}$.`;
    }

    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 1: The Number System & Sets • Section 1.3: Real Numbers, Exponents & Radicals

### 1.3 The Real Number System ($\mathbb{R}$)

The set of real numbers $\\mathbb{R}$ consists of rational numbers $\\mathbb{Q}$ and irrational numbers $\\mathbb{I}$:
$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$

#### Laws of Exponents:
For any non-zero real numbers $a, b$ and integers $m, n$:
1. $a^m \\cdot a^n = a^{m+n}$
2. $\\frac{a^m}{a^n} = a^{m-n}$
3. $(a^m)^n = a^{m \\cdot n}$
4. $(ab)^n = a^n b^n$
5. $a^{-n} = \\frac{1}{a^n}$
6. $a^0 = 1 \\quad (a \\neq 0)$

#### Simplification of Radicals:
$$\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}, \\quad \\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$

---

### Worked Example 1.3
Simplify: $\\frac{2^5 \\cdot 4^{-2}}{8^{-1}}$.

**Solution:**
Express all terms with base 2:
$$\\frac{2^5 \\cdot (2^2)^{-2}}{(2^3)^{-1}} = \\frac{2^5 \\cdot 2^{-4}}{2^{-3}} = \\frac{2^{5-4}}{2^{-3}} = \\frac{2^1}{2^{-3}} = 2^{1 - (-3)} = 2^4 = 16$$`;
  }

  // UNIT 2: EQUATIONS AND INEQUALITIES (Pages 43 - 92)
  if (printedPage <= 92 || chapNum === 2) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 2: Equations and Inequalities • ${topNum}: ${topTitle}

### 2. Quadratic Equations and Inequalities

A **quadratic equation** in one variable $x$ is an equation that can be written in standard form:
$$ax^2 + bx + c = 0, \\quad a \\neq 0$$

#### Methods of Solution:
1. **Factoring Method:** If $ax^2 + bx + c = (px + q)(rx + s) = 0$, then $x = -q/p$ or $x = -s/r$.
2. **Quadratic Formula:**
   $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
3. **Discriminant Analysis ($\Delta = b^2 - 4ac$):**
   - If $\\Delta > 0$: Two distinct real roots.
   - If $\\Delta = 0$: Exactly one real root (repeated).
   - If $\\Delta < 0$: No real roots (two complex roots).

---

### Worked Example 2.1
Solve $2x^2 - 5x + 2 = 0$ using the quadratic formula.

**Solution:**
Identify coefficients: $a = 2$, $b = -5$, $c = 2$.
$$\\Delta = (-5)^2 - 4(2)(2) = 25 - 16 = 9$$
$$x = \\frac{-(-5) \\pm \\sqrt{9}}{2(2)} = \\frac{5 \\pm 3}{4}$$
$$x_1 = \\frac{8}{4} = 2, \\quad x_2 = \\frac{2}{4} = \\frac{1}{2}$$
Solution set: $S = \\{1/2, 2\\}$.`;
  }

  // UNIT 3: RELATIONS AND FUNCTIONS (Pages 93 - 138)
  if (printedPage <= 138 || chapNum === 3) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 3: Relations and Functions • ${topNum}: ${topTitle}

### 3. Concept of Functions & Graphing Linear and Quadratic Functions

#### 1. Function Definition:
A **function** $f$ from set $A$ to set $B$ (written $f: A \\to B$) is a relation that assigns to each element $x \\in A$ exactly one element $y = f(x) \\in B$.
- **Domain $\\text{Dom}(f)$:** Set of all valid inputs $x$.
- **Range $\\text{Ran}(f)$:** Set of all actual outputs $y$.
- **Vertical Line Test:** A curve in the Cartesian plane represents a function if and only if no vertical line intersects the curve at more than one point.

#### 2. Linear Function:
$$f(x) = mx + c$$
Where $m$ is the slope (gradient) $m = \\frac{y_2 - y_1}{x_2 - x_1}$ and $c$ is the $y$-intercept.

#### 3. Quadratic Function (Parabola):
$$f(x) = ax^2 + bx + c$$
- **Vertex:** $\\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)$
- **Axis of Symmetry:** $x = -\\frac{b}{2a}$
- Opens upwards if $a > 0$, opens downwards if $a < 0$.

---

### Worked Example 3.1
Find the vertex and axis of symmetry of $f(x) = x^2 - 4x + 3$.

**Solution:**
$a = 1, b = -4, c = 3$.
$x$-coordinate of vertex: $x = -\\frac{-4}{2(1)} = 2$.
$y$-coordinate: $f(2) = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1$.
Vertex is $(2, -1)$ and axis of symmetry is $x = 2$.`;
  }

  // UNIT 4 - 10: GEOMETRIC, COORDINATE & VECTOR MATHEMATICS (Pages 139 - 384)
  if (printedPage <= 184 || chapNum === 4) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 4: Geometry • ${topNum}: ${topTitle}

### 4. Triangles, Congruence, and Pythagorean Theorem

#### Pythagorean Theorem:
In any right-angled triangle with legs $a, b$ and hypotenuse $c$:
$$a^2 + b^2 = c^2$$

#### Special Right Triangles:
1. $45^\\circ - 45^\\circ - 90^\\circ$ triangle: Side ratios $1 : 1 : \\sqrt{2}$.
2. $30^\\circ - 60^\\circ - 90^\\circ$ triangle: Side ratios $1 : \\sqrt{3} : 2$.

---

### Worked Example 4.1
Calculate the length of the diagonal of a square with side length $6\\text{ cm}$.

**Solution:**
Using $a^2 + b^2 = c^2$:
$$c^2 = 6^2 + 6^2 = 36 + 36 = 72 \\implies c = \\sqrt{72} = 6\\sqrt{2}\\text{ cm} \\approx 8.49\\text{ cm}$$`;
  }

  if (printedPage <= 224 || chapNum === 5) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 5: Circles • ${topNum}: ${topTitle}

### 5. Circle Formulas and Arc Measurements

#### Fundamental Formulas:
- **Circumference:** $C = 2\\pi r = \\pi d$
- **Area of Circle:** $A = \\pi r^2$
- **Arc Length ($s$):** $s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$
- **Sector Area ($A_{\\text{sec}}$):** $A_{\\text{sec}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$

---

### Worked Example 5.1
Find the area of a circle sector with radius $r = 7\\text{ cm}$ and central angle $\\theta = 60^\\circ$.

**Solution:**
$$A_{\\text{sec}} = \\frac{60^\\circ}{360^\\circ} \\times \\pi (7)^2 = \\frac{1}{6} \\times 49\\pi = \\frac{49\\pi}{6} \\approx 25.66\\text{ cm}^2$$`;
  }

  if (printedPage <= 264 || chapNum === 6) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 6: Solid Figures • ${topNum}: ${topTitle}

### 6. Volume and Surface Area of 3D Geometric Solids

#### Key Formulas:
- **Right Circular Cylinder:**
  - Volume: $V = \\pi r^2 h$
  - Total Surface Area: $A = 2\\pi r h + 2\\pi r^2$
- **Cone:**
  - Volume: $V = \\frac{1}{3}\\pi r^2 h$
- **Sphere:**
  - Surface Area: $A = 4\\pi r^2$
  - Volume: $V = \\frac{4}{3}\\pi r^3$`;
  }

  if (printedPage <= 298 || chapNum === 7) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 7: Coordinate Geometry • ${topNum}: ${topTitle}

### 7. Analytic Geometry in 2D Cartesian Plane

#### Key Formulas:
1. **Distance Formula:** Between $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$:
   $$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
2. **Midpoint Formula:**
   $$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$
3. **Slope of Line:**
   $$m = \\frac{y_2 - y_1}{x_2 - x_1}$$
   - Parallel lines: $m_1 = m_2$.
   - Perpendicular lines: $m_1 \\cdot m_2 = -1$.`;
  }

  if (printedPage <= 334 || chapNum === 8) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit 8: Statistics and Probability • ${topNum}: ${topTitle}

### 8. Measures of Central Tendency and Basic Probability

#### 1. Mean ($\bar{x}$):
$$\\bar{x} = \\frac{\\sum_{i=1}^n x_i}{n}$$

#### 2. Theoretical Probability ($P(E)$):
$$P(E) = \\frac{n(E)}{n(S)}$$
Where $n(E)$ is the number of favorable outcomes and $n(S)$ is the total sample space size.
- $0 \\le P(E) \\le 1$
- $P(E') = 1 - P(E)$`;
  }

  // UNITS 9 & 10 (Pages 335 - 384)
  return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Mathematics Student Textbook — Page ${printedPage}
Unit ${chapNum}: ${chapTitle} • ${topNum}: ${topTitle}

### ${chapNum}. Vectors in Two Dimensions ($\mathbb{R}^2$)

A **vector** $\\mathbf{v}$ is a quantity possessing both magnitude and direction.

#### Vector Components & Operations:
Given $\\mathbf{u} = (x_1, y_1)$ and $\\mathbf{v} = (x_2, y_2)$:
1. **Component Representation:** $\\mathbf{v} = x_2\\mathbf{i} + y_2\\mathbf{j}$
2. **Magnitude:**
   $$\\|\\mathbf{v}\\| = \\sqrt{x_2^2 + y_2^2}$$
3. **Vector Addition:**
   $$\\mathbf{u} + \\mathbf{v} = (x_1 + x_2, y_1 + y_2)$$
4. **Unit Vector in Direction of $\\mathbf{v}$:**
   $$\\mathbf{\\hat{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$$`;
}

function buildGrade9PhysicsPageText(
  printedPage: number,
  chapNum: number,
  chapTitle: string,
  topic: any
): string {
  const topNum = topic.topic_number || `${chapNum}.1`;
  const topTitle = topic.title || chapTitle;

  // UNIT 1: PHYSICS AND HUMAN SOCIETY (Pages 1 - 28)
  if (printedPage <= 28 || chapNum === 1) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Physics Student Textbook — Page ${printedPage} of 184
Unit 1: Physics and Human Society • ${topNum}: ${topTitle}

### 1. Physics and Human Society

Physics is a branch of natural science that studies the fundamental laws governing matter, energy, space, and time, along with their mutual transformations and interactions.

#### Core Branches of Physics:
1. **Mechanics:** Motion, forces, energy, momentum, and equilibrium of physical bodies.
2. **Thermodynamics:** Heat, temperature, energy transfer, and state changes of matter.
3. **Electromagnetism:** Electric charges, magnetic fields, electric circuits, and electromagnetic waves.
4. **Optics:** Nature and propagation of light, reflection, refraction, and optical instruments.
5. **Modern Physics:** Atomic structure, nuclear energy, quantum mechanics, and relativity.

#### Physics in Ethiopian National Development:
- **Renewable Hydroelectric Power:** Engineering principles applied in the Grand Ethiopian Renaissance Dam (GERD) generating over $5,150\\text{ MW}$ of clean electricity.
- **Solar and Geothermal Energy:** Solar photovoltaic installations in rural health centers and agricultural irrigation across the Rift Valley.
- **Medical & Infrastructure Advances:** X-ray radiography, CT scans, radiation therapy, telecommunications, and highway construction.

---

### Worked Example 1.1
**Question:** Explain how physics contributes to modern telecommunication systems in Ethiopia.

**Answer & Explanation:**
Telecommunications relies on the physics of electromagnetic wave propagation through space and total internal reflection of light inside fiber-optic cables, enabling high-speed internet and mobile data transmission nationwide.

---

### EUEE Review Questions
1. Which major branch of physics deals with the principles governing electric currents and magnetic forces?
   A) Optics
   B) Electromagnetism
   C) Thermodynamics
   D) Quantum Mechanics
2. State two major contributions of physics to renewable energy infrastructure in Ethiopia.`;
  }

  // UNIT 2: PHYSICAL QUANTITIES AND MEASUREMENT (Pages 29 - 60)
  if (printedPage <= 60 || chapNum === 2) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Physics Student Textbook — Page ${printedPage} of 184
Unit 2: Physical Quantities and Measurement • ${topNum}: ${topTitle}

### 2. Physical Quantities, SI Base Units & Errors

A **physical quantity** is any property of a physical system that can be measured with an instrument and quantified with a numerical value and a unit of measurement.

#### 1. Fundamental SI Base Quantities:
- Length: meter ($\\text{m}$)
- Mass: kilogram ($\\text{kg}$)
- Time: second ($\\text{s}$)
- Electric Current: Ampere ($\\text{A}$)
- Thermodynamic Temperature: Kelvin ($\\text{K}$)
- Amount of Substance: mole ($\\text{mol}$)
- Luminous Intensity: candela ($\\text{cd}$)

#### 2. Measuring Instruments & Precision:
- **Vernier Caliper:** Precision up to $0.1\\text{ mm}$ ($0.01\\text{ cm}$).
- **Micrometer Screw Gauge:** Precision up to $0.01\\text{ mm}$ ($0.001\\text{ cm}$).
- **Density Formula:** $\\rho = \\frac{m}{V}$ ($\\text{kg/m}^3$)

#### 3. Error Analysis:
- **Systematic Errors:** Flaws in equipment or zero-point offset (predictable, corrected by calibration).
- **Random Errors:** Fluctuations in environment or human observation (minimized by averaging trials).

---

### Worked Example 2.1
**Problem:** A metal cylinder has mass $m = 157.0\\text{ g}$ and volume $V = 20.0\\text{ cm}^3$. Calculate its density in SI units ($\\text{kg/m}^3$).

**Solution:**
1. Convert mass to $\\text{kg}$: $m = 157.0 \\times 10^{-3}\\text{ kg} = 0.157\\text{ kg}$.
2. Convert volume to $\\text{m}^3$: $V = 20.0 \\times 10^{-6}\\text{ m}^3 = 2.0 \\times 10^{-5}\\text{ m}^3$.
3. Compute density:
   $$\\rho = \\frac{0.157\\text{ kg}}{2.0 \\times 10^{-5}\\text{ m}^3} = 7,850\\text{ kg/m}^3$$`;
  }

  // UNIT 3: MOTION IN A STRAIGHT LINE (Pages 61 - 104)
  if (printedPage <= 104 || chapNum === 3) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Physics Student Textbook — Page ${printedPage} of 184
Unit 3: Motion in a Straight Line (1D Kinematics) • ${topNum}: ${topTitle}

### 3. One-Dimensional Motion & Equations of Uniform Acceleration

#### 1. Distance vs. Displacement:
- **Distance ($s$):** Scalar quantity representing total path length traveled.
- **Displacement ($\\mathbf{\\Delta x}$):** Vector quantity representing straight-line change in position: $\\mathbf{\\Delta x} = x_f - x_i$.

#### 2. Speed, Velocity, and Acceleration:
- Average Speed: $v_{\\text{avg}} = \\frac{\\text{Total Distance}}{\\text{Total Time}}$
- Average Velocity: $\\mathbf{v}_{\\text{avg}} = \\frac{\\mathbf{\\Delta x}}{\\Delta t}$
- Acceleration: $a = \\frac{v - u}{t}$ ($\\text{m/s}^2$)

#### 3. Equations of Uniformly Accelerated 1D Motion:
1. $v = u + at$
2. $s = ut + \\frac{1}{2}at^2$
3. $v^2 = u^2 + 2as$
4. $s = \\left(\\frac{u + v}{2}\\right)t$

#### 4. Vertical Free Fall under Gravity:
An object dropped in vacuum accelerates downwards with $g = 9.8\\text{ m/s}^2$. Taking downwards as positive:
$$v = gt, \\quad h = \\frac{1}{2}gt^2, \\quad v^2 = 2gh$$

---

### Worked Example 3.1
**Problem:** A vehicle accelerates uniformly from rest ($u = 0$) at $a = 2.5\\text{ m/s}^2$ for $t = 8.0\\text{ s}$. Find its final velocity $v$ and displacement $s$.

**Solution:**
1. Final velocity: $v = u + at = 0 + (2.5)(8.0) = 20.0\\text{ m/s}$.
2. Displacement: $s = ut + \\frac{1}{2}at^2 = 0 + \\frac{1}{2}(2.5)(8.0)^2 = \\frac{1}{2}(2.5)(64) = 80.0\\text{ m}$.`;
  }

  // UNIT 4: FORCE, WORK, ENERGY AND POWER (Pages 105 - 146)
  if (printedPage <= 146 || chapNum === 4) {
    return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Physics Student Textbook — Page ${printedPage} of 184
Unit 4: Force, Work, Energy and Power • ${topNum}: ${topTitle}

### 4. Newton's Laws, Work, Energy & Power

#### 1. Newton's Laws of Motion:
- **First Law (Inertia):** A body remains at rest or in uniform 1D motion unless acted upon by a non-zero net external force ($F_{\\text{net}} = 0 \\implies a = 0$).
- **Second Law:** $F_{\\text{net}} = ma$ ($\\text{1 N} = 1\\text{ kg}\\cdot\\text{m/s}^2$).
- **Third Law:** Action and reaction forces are equal in magnitude and opposite in direction ($F_{A \\to B} = -F_{B \\to A}$).

#### 2. Work, Mechanical Energy, and Power:
- **Work Done:** $W = F \\cdot d \\cos \\theta$ (Joules, $\\text{J}$)
- **Kinetic Energy:** $E_k = \\frac{1}{2}mv^2$
- **Gravitational Potential Energy:** $E_p = mgh$
- **Conservation of Mechanical Energy:** $E_{\\text{total}} = E_k + E_p = \\text{constant}$
- **Power:** $P = \\frac{W}{t} = F \\cdot v$ (Watts, $\\text{W}$)

---

### Worked Example 4.1
**Problem:** A $2.0\\text{ kg}$ object is dropped from a height $h = 20.0\\text{ m}$. Using energy conservation ($g = 9.8\\text{ m/s}^2$), find its kinetic energy and speed just before striking the ground.

**Solution:**
1. Initial $E_p = mgh = (2.0)(9.8)(20.0) = 392.0\\text{ J}$.
2. At bottom, $E_k = E_p = 392.0\\text{ J}$.
3. Speed: $\\frac{1}{2}mv^2 = 392.0 \\implies v = \\sqrt{\\frac{2(392.0)}{2.0}} = \\sqrt{392.0} \\approx 19.8\\text{ m/s}$.`;
  }

  // UNIT 5: SIMPLE MACHINES (Pages 147 - 184)
  return `Federal Democratic Republic of Ethiopia • Ministry of Education
Grade 9 Physics Student Textbook — Page ${printedPage} of 184
Unit 5: Simple Machines • ${topNum}: ${topTitle}

### 5. Simple Machines, Levers, Pulleys & Efficiency

A **simple machine** is a mechanical device that changes the direction or magnitude of an applied effort force to move a load.

#### Core Definitions & Formulas:
1. **Mechanical Advantage (MA):**
   $$\\text{MA} = \\frac{\\text{Load } (L)}{\\text{Effort } (E)}$$
2. **Velocity Ratio (VR):**
   $$\\text{VR} = \\frac{\\text{Distance moved by Effort } (d_E)}{\\text{Distance moved by Load } (d_L)}$$
3. **Efficiency ($\\eta$):**
   $$\\eta = \\frac{\\text{Work Output}}{\\text{Work Input}} \\times 100\\% = \\frac{\\text{MA}}{\\text{VR}} \\times 100\\%$$

#### Types of Simple Machines:
- **Levers:** Class 1 (Fulcrum in middle, e.g., scissors), Class 2 (Load in middle, e.g., wheelbarrow), Class 3 (Effort in middle, e.g., tweezers).
- **Pulleys:** Single fixed pulley ($\\text{VR} = 1$), single movable pulley ($\\text{VR} = 2$), block and tackle system ($\\text{VR} = n$ number of supporting rope segments).
- **Inclined Plane:** $\\text{VR} = \\frac{\\text{Length of incline } (L)}{\\text{Height } (h)}$.

---

### Worked Example 5.1
**Problem:** A block and tackle system has 4 supporting ropes ($\\text{VR} = 4$). An effort of $150\\text{ N}$ lifts a load of $480\\text{ N}$. Find the $\\text{MA}$ and efficiency $\\eta$.

**Solution:**
1. $\\text{MA} = \\frac{480\\text{ N}}{150\\text{ N}} = 3.2$.
2. $\\eta = \\frac{\\text{MA}}{\\text{VR}} \\times 100\\% = \\frac{3.2}{4} \\times 100\\% = 80\\%$.`;
}

function buildGenericCurriculumPageText(
  book: Book,
  chapNum: number,
  chapTitle: string,
  topic: any,
  printedPage: number,
  existingRawText?: string
): string {
  const topNum = topic.topic_number || `${chapNum}.1`;
  const topTitle = topic.title || chapTitle;
  const sub = book.subject_name || 'Curriculum';
  const gr = book.grade_name || 'Secondary';
  const offset = book.page_offset || 0;
  const maxPrinted = Math.max(1, (book.total_pages || 180) - offset);
  const pdfPage = printedPage + offset;

  const mockChapter: BookChapter = {
    id: `chap-${book.id}-${chapNum}`,
    book_id: book.id,
    chapter_number: chapNum,
    chapter_title: chapTitle,
    description: `Unit ${chapNum} study material`,
    start_page: printedPage,
    end_page: printedPage + 20
  };

  const detailedNotes = buildTopicDetailedNotes(book, mockChapter, {
    num: topic.topic_number,
    title: topic.title,
    desc: topic.description,
    start_page: topic.start_page
  }, true);

  const notesList = (detailedNotes.short_notes || [])
    .map(n => n.replace(/^[•\-\*]\s*/, ''))
    .map(n => `> • ${n}`)
    .join('\n');

  // Extract clean authentic prose from the page if present (excluding TOC dumps and old generic wrappers)
  let extractedPageSection = '';
  if (existingRawText && existingRawText.trim().length > 40) {
    const isOldWrapper =
      existingRawText.includes('Core Curriculum Objectives & Key Takeaways') ||
      existingRawText.includes('Core Definition & Foundation Principle:') ||
      existingRawText.includes('Core Concepts & Student Objectives Checklist:') ||
      existingRawText.includes('ETHIOPIAN MINISTRY OF EDUCATION TEXTBOOK OCR') ||
      existingRawText.includes('Problem Statement: Apply the core rules') ||
      existingRawText.includes('Federal Democratic Republic of Ethiopia • Ministry of Education');
    const isTocDump =
      /(?:[.\u00B7]\s*){3,}/.test(existingRawText) ||
      /table of contents/i.test(existingRawText);

    if (!isOldWrapper && !isTocDump) {
      const cleanedRaw = sanitizeAndFormatOcrText(existingRawText)
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 2 && !/^\d{1,3}$/.test(l))
        .join('\n\n');
      if (cleanedRaw.length > 40) {
        extractedPageSection = `\n### 📄 Textbook Page ${printedPage} — Structured Curriculum Text\n\n${cleanedRaw}\n\n---\n`;
      }
    }
  }

  return `# ${chapTitle}
## ${topNum} ${topTitle}
*${book.title} • Textbook Page ${printedPage} of ${maxPrinted}${offset > 0 ? ` (PDF Page ${pdfPage})` : ''} • ${gr} ${sub} — Official Ethiopian Curriculum*

---

> 🎯 **Core Curriculum Objectives & Key Takeaways (${topNum} ${topTitle}):**
> • **Topic Focus (Starts on Textbook Page ${topic.start_page || printedPage}):** ${topic.description || detailedNotes.key_takeaway}
${notesList}

---
${extractedPageSection}
### 📖 Structured AI Concept Breakdown & Explanation

${detailedNotes.detailed_explanation}

> 💡 **Core Definition & Governing Principle:**
> **${topTitle}:** ${detailedNotes.key_takeaway}

---

> 🇪🇹 **Ethiopian Real-World Application & Relevance:**
> ${detailedNotes.ethiopian_context || `Concepts of ${topTitle} directly inform agricultural, industrial, and infrastructure development across Ethiopia.`}

> ⚡ **EUEE National Exam Strategy & Common Trap:**
> ${detailedNotes.exam_focus || `National entrance exam questions on ${topTitle} focus on precise terminology, unit conversions, and domain restrictions.`}

---

### 🧮 Worked Step-by-Step Curriculum Example
**Problem:** Apply the governing principles of **${topTitle}** to analyze and solve a standard ${gr} ${sub} curriculum problem.

**Step-by-Step Solution:**
${(detailedNotes.key_points || []).map((kp, idx) => `${idx + 1}. ${kp}`).join('\n') || `1. Identify Given Parameters and express them in standard curriculum notation.\n2. Apply Core Principle: ${detailedNotes.key_takeaway}\n3. Verify logical consistency against national examination standards.`}

---

### ✍️ Self-Check EUEE Review Question
**1. Which of the following statements regarding ${topTitle} is strictly valid according to the Ethiopian National Curriculum?**
- **A)** ${detailedNotes.key_takeaway}
- **B)** It operates independently of physical or theoretical boundary conditions.
- **C)** It yields arbitrary results regardless of initial system parameters.
- **D)** None of the above.

> ✅ **Correct Answer:** **A** — *${detailedNotes.key_takeaway}*`;
}

function buildGrade9EnglishPageText(
  printedPage: number,
  chapNum: number,
  chapTitle: string,
  topic: any
): string {
  const topNum = topic.topic_number || `${chapNum}.1`;
  const topTitle = topic.title || chapTitle;

  // Unit-specific detailed curriculum knowledge
  const englishUnitsData: Record<number, {
    title: string;
    reading: string;
    vocab: Array<{ word: string; def: string; eg: string }>;
    grammar: { ruleTitle: string; ruleExplanation: string; examples: string[]; examTrap: string };
    comprehension: { question: string; answer: string };
    exercise: { question: string; options: string[]; answer: string; reason: string };
  }> = {
    1: {
      title: 'Living in a Village',
      reading: `Rural settlement patterns in Ethiopia reflect a close relationship between agricultural production, communal labor sharing, and ecological stewardship. In many Ethiopian highland and lowland communities, life revolves around seasonal rainfall cycles (Kiremt and Belg). Families participate in cooperative mutual aid institutions such as Debo and Wonfel to harvest teff, wheat, and barley collectively. Elders preserve oral narratives and arbitrate local disputes, ensuring social harmony across generations.`,
      vocab: [
        { word: 'Communal', def: 'Shared by all members of a community; collective.', eg: 'Wonfel is a communal labor arrangement commonly practiced during ploughing season.' },
        { word: 'Stewardship', def: 'The responsible overseeing and protection of resources.', eg: 'Ethiopian farmers exercise careful environmental stewardship to prevent topsoil erosion.' },
        { word: 'Subsistence', def: 'Maintaining or supporting oneself at a minimal level.', eg: 'Subsistence farming provides food security directly to agrarian households.' }
      ],
      grammar: {
        ruleTitle: 'Present Simple vs. Present Continuous Tense',
        ruleExplanation: 'The Present Simple describes habitual actions, general truths, and permanent routines (e.g., "Farmers plant crops when rains arrive"). The Present Continuous describes actions happening at the moment of speaking or temporary trends (e.g., "The agriculture extension officer is demonstrating drip irrigation today").',
        examples: [
          'Permanent fact: The Blue Nile flows through northwestern Ethiopia.',
          'Action in progress: The villagers are building a communal grain storehouse right now.'
        ],
        examTrap: 'Stative verbs like understand, believe, know, and belong are rarely used in the continuous form on EUEE examinations. Say "I understand the instruction", NOT "I am understanding".'
      },
      comprehension: {
        question: 'How do traditional mutual aid institutions like Debo and Wonfel strengthen Ethiopian village life?',
        answer: 'They pool communal labor during labor-intensive agricultural phases such as harvesting and weeding, reducing individual economic vulnerability and reinforcing social solidarity.'
      },
      exercise: {
        question: 'Identify the grammatically correct sentence representing a general truth:',
        options: [
          'A) Teff is growing primarily in Ethiopian highlands.',
          'B) Teff grows primarily in Ethiopian highlands.',
          'C) Teff has been grow primarily in Ethiopian highlands.',
          'D) Teff are growing primarily in Ethiopian highlands.'
        ],
        answer: 'B',
        reason: 'General truths and biological facts take the simple present tense with third-person singular agreement ("grows").'
      }
    },
    2: {
      title: 'History of Writing',
      reading: `The development of writing represents one of humanity's most revolutionary intellectual breakthroughs. From early Sumerian cuneiform on clay tablets and Egyptian hieroglyphics on papyrus to the ancient South Arabian script and the invention of the Ge\'ez fidel in northern Ethiopia, written language transformed how knowledge, legal codes, and historical chronicles were preserved. The Ge\'ez script uniquely evolved from an abjad into an abugida (an alphasyllabary where vowel markers modify consonant signs), demonstrating Ethiopian linguistic innovation.`,
      vocab: [
        { word: 'Hieroglyphics', def: 'A stylized picture of an object representing a word, syllable, or sound.', eg: 'Scribes recorded royal decrees using hieroglyphics on temple walls.' },
        { word: 'Abugida', def: 'A writing system in which consonant-vowel sequences are written as a unit.', eg: 'Ge\'ez is classified typologically as an abugida because each symbol denotes a consonant with an inherent vowel.' },
        { word: 'Chronicle', def: 'A factual written account of important or historical events in order of occurrence.', eg: 'Royal chronicles preserved detailed records of medieval Ethiopian reigns.' }
      ],
      grammar: {
        ruleTitle: 'Past Simple vs. Past Continuous with While & When',
        ruleExplanation: 'Use the Past Continuous for a longer background action interrupted by a shorter action in the Past Simple. "While/As + Past Continuous, Past Simple" or "Past Continuous + when + Past Simple".',
        examples: [
          'While the archaeologist was excavating the site, she uncovered an ancient parchment scroll.',
          'The monks were transcribing the holy codex when the monastery bells chimed.'
        ],
        examTrap: 'Examiners test clause order. If "When" introduces the time clause, it is usually followed by Past Simple ("When I arrived, they were reading"). "While" is followed by Past Continuous.'
      },
      comprehension: {
        question: 'Why is the Ge\'ez script considered an abugida rather than a pure alphabet or abjad?',
        answer: 'Because consonant graphemes are modified systematically with vowel diacritics to represent syllables, rather than having completely independent consonant and vowel letters.'
      },
      exercise: {
        question: 'Complete the sentence: While the scribe ______ the manuscript, the candle ______ out.',
        options: [
          'A) was illuminating / went',
          'B) illuminated / was going',
          'C) is illuminating / goes',
          'D) illuminates / has gone'
        ],
        answer: 'A',
        reason: 'The continuous background action takes "was illuminating", and the sudden interruption takes the simple past "went".'
      }
    },
    3: {
      title: 'People and Animals',
      reading: `Ethiopia is renowned for its exceptional biodiversity and high levels of endemism. In the rugged peaks of the Simien Mountains and the high moorlands of the Bale Mountains, rare endemic species such as the Walia Ibex, the Ethiopian Wolf (Canis simensis), and the Gelada Baboon thrive. Human population growth, deforestation, and overgrazing by domestic livestock have placed heavy pressure on these fragile afro-alpine ecosystems. Wildlife conservation programs now involve local communities to balance pastoral livelihood needs with species protection.`,
      vocab: [
        { word: 'Endemic', def: 'Native and strictly restricted to a certain place.', eg: 'The Walia Ibex is endemic to the high precipices of the Simien Mountains National Park.' },
        { word: 'Biodiversity', def: 'The variety of plant and animal life in a particular habitat.', eg: 'Preserving biodiversity ensures ecological resilience against climate extremes.' },
        { word: 'Poaching', def: 'Illegal hunting or capturing of wild animals.', eg: 'Rangers patrol national parks day and night to eradicate illegal poaching.' },
        { word: 'Pastoralist', def: 'A farmer who breeds and herds livestock.', eg: 'Pastoralist communities depend on seasonal grazing pastures.' }
      ],
      grammar: {
        ruleTitle: 'Degrees of Comparison: Comparative & Superlative Adjectives',
        ruleExplanation: 'One-syllable adjectives form comparatives with "-er" and superlatives with "-est" (fast, faster, fastest). Adjectives of two or more syllables typically take "more" and "most" (fragile, more fragile, most fragile). Irregular adjectives: good/better/best, bad/worse/worst, far/further/furthest.',
        examples: [
          'The Ethiopian Wolf is rarer than the African Golden Wolf.',
          'Ras Dejen is the highest mountain peak in Ethiopia.'
        ],
        examTrap: 'Never use double comparatives or double superlatives like "more faster" or "most highest". Watch out for "fewer" (with countable nouns like animals) versus "less" (with uncountable nouns like water).'
      },
      comprehension: {
        question: 'What anthropogenic threats challenge the survival of endemic mammals in Ethiopian national parks?',
        answer: 'Habitat encroachment, agricultural expansion, livestock overgrazing, and road infrastructure fragmentation.'
      },
      exercise: {
        question: 'Choose the correct comparative form: The Bale Mountains National Park is ______ than most people realize.',
        options: [
          'A) more diverse',
          'B) most diverse',
          'C) diverse-er',
          'D) much diverse'
        ],
        answer: 'A',
        reason: '"Diverse" is a two-syllable adjective and correctly forms its comparative with "more".'
      }
    },
    4: {
      title: 'The Digital World',
      reading: `The expansion of telecommunications and digital mobile services across Ethiopia has accelerated modernization. Mobile money platforms like Telebirr, high-speed fiber-optic expansion, and school e-learning initiatives are bridging the digital divide between urban centers like Addis Ababa and rural woredas. Students can now access educational resources, curriculum study guides, and collaborative learning communities online. Alongside these opportunities, digital literacy and cybersecurity awareness are critical competencies.`,
      vocab: [
        { word: 'Infrastructure', def: 'The basic physical and organizational structures needed for operation.', eg: 'Expanding fiber-optic infrastructure is vital for equitable internet access.' },
        { word: 'Phishing', def: 'The fraudulent practice of sending messages to induce individuals to reveal personal info.', eg: 'Security workshops teach students how to identify malicious phishing links.' },
        { word: 'Bandwidth', def: 'The capacity for data transmission over a computer network.', eg: 'Video lectures require higher bandwidth than text-based study modules.' }
      ],
      grammar: {
        ruleTitle: 'Future Forms: Will vs. Be Going To vs. Present Continuous',
        ruleExplanation: '"Will" is used for spontaneous decisions, promises, and predictions based on opinion. "Be going to" expresses prior intentions or predictions based on present physical evidence. "Present continuous" expresses fixed arrangements with a specific time and place.',
        examples: [
          'Prior intention: I am going to study computer science at Addis Ababa University next year.',
          'Spontaneous offer: The connection dropped; I will restart the router immediately.',
          'Fixed arrangement: Our school is launching its new computer laboratory next Monday at 10 AM.'
        ],
        examTrap: 'National exams test evidence-based predictions: "Look at those dark clouds! It is going to rain" (NOT "It will rain" when direct physical evidence is present).'
      },
      comprehension: {
        question: 'In what ways does digital connectivity empower students in regional Ethiopian schools?',
        answer: 'It enables equal access to digital textbooks, interactive STEM simulations, national exam question banks, and distant teacher guidance.'
      },
      exercise: {
        question: 'Select the best future form: "Look at the battery icon! The laptop ______ in a minute."',
        options: [
          'A) is going to shut down',
          'B) will shut down',
          'C) shuts down',
          'D) was shutting down'
        ],
        answer: 'A',
        reason: 'Predictions based on clear current observable evidence require "is going to".'
      }
    },
    5: {
      title: 'Tourism in Ethiopia',
      reading: `Ethiopia boasts an extraordinary heritage landscape recognized internationally by UNESCO. From the rock-hewn monolithic churches of Lalibela and the ancient obelisks of Axum to the walled historical city of Harar Jugol and the cultural landscape of Konso, visitors experience living history. Ecotourism in the Danakil Depression, the volcanic crater lakes of Bishoftu, and the Omo Valley offers economic growth while demanding responsible visitor management to preserve architectural and ecological integrity.`,
      vocab: [
        { word: 'Monolithic', def: 'Formed of a single large block of stone.', eg: 'Bete Giyorgis in Lalibela is a monolithic church carved downward from bedrock.' },
        { word: 'Ecotourism', def: 'Responsible travel to natural areas that conserves the environment and improves local well-being.', eg: 'Ecotourism generates income for rural guides without harming wildlife.' },
        { word: 'Heritage', def: 'Valued objects and qualities such as historic buildings and cultural traditions passed down.', eg: 'Protecting Ethiopian cultural heritage is a national civic duty.' }
      ],
      grammar: {
        ruleTitle: 'Present Perfect vs. Past Simple with Time Markers',
        ruleExplanation: 'Use the Present Perfect (have/has + past participle) for past actions with relevance to the present, or with indefinite time markers (already, yet, ever, never, since, for). Use the Past Simple for actions completed at a definite past time (yesterday, in 2018, two years ago, last week).',
        examples: [
          'Indefinite time: Many tourists have visited the rock churches of Lalibela.',
          'Definite time: UNESCO inscribed the Tiya stele site in 1980.'
        ],
        examTrap: 'Never use the Present Perfect with specific past time indicators. "I have seen him yesterday" is WRONG. The correct form is "I saw him yesterday".'
      },
      comprehension: {
        question: 'Why is community-based ecotourism preferable to unmanaged mass tourism?',
        answer: 'Because revenues remain within the local host community, reducing poverty while minimizing environmental degradation and cultural commodification.'
      },
      exercise: {
        question: 'Choose the grammatically correct sentence:',
        options: [
          'A) The delegation has arrived in Bahir Dar three days ago.',
          'B) The delegation arrived in Bahir Dar three days ago.',
          'C) The delegation is arriving in Bahir Dar three days ago.',
          'D) The delegation will have arrived in Bahir Dar three days ago.'
        ],
        answer: 'B',
        reason: 'Specific past time indicators ("three days ago") strictly require the Past Simple.'
      }
    }
  };

  const unitData = englishUnitsData[chapNum] || englishUnitsData[1];
  const sub = 'English';
  const gr = 'Grade 9';

  return `Federal Democratic Republic of Ethiopia • Ministry of Education
${gr} ${sub} Student Textbook — Page ${printedPage} of 196
Unit ${chapNum}: ${unitData.title} • Section ${topNum}: ${topTitle}

### Section ${topNum}: ${topTitle}

#### 1. Core Curriculum Reading Passage & Cultural Context
${unitData.reading}

---

#### 2. Curriculum Vocabulary Bank & Terminology in Context
Mastering domain-specific vocabulary is vital for reading comprehension and national examination performance:

| Term / Expression | Part of Speech | Academic Definition | Illustrative Context Sentence |
| :--- | :--- | :--- | :--- |
${unitData.vocab.map(v => `| **${v.word}** | Noun / Adj | ${v.def} | *"${v.eg}"* |`).join('\n')}

---

#### 3. Grammar Masterclass & Structural Rules
**Focus Rule:** **${unitData.grammar.ruleTitle}**

${unitData.grammar.ruleExplanation}

##### Illustrative Model Structures:
${unitData.grammar.examples.map(ex => `- ${ex}`).join('\n')}

> **EUEE National Exam Strategy & Common Trap:**
> ${unitData.grammar.examTrap}

---

#### 4. Reading Comprehension & Analytical Check
**Critical Thinking Question:**
*${unitData.comprehension.question}*

**Model Exemplar Answer:**
${unitData.comprehension.answer}

---

#### 5. National Examination Multiple Choice Practice
**Question:** ${unitData.exercise.question}
${unitData.exercise.options.map(opt => `${opt}`).join('\n')}

**Correct Answer:** **${unitData.exercise.answer}**
*Explanation & Distractor Breakdown:* ${unitData.exercise.reason}`;
}

function buildGrade9ChemistryPageText(
  printedPage: number,
  chapNum: number,
  chapTitle: string,
  topic: any
): string {
  const topNum = topic.topic_number || `${chapNum}.1`;
  const topTitle = topic.title || chapTitle;

  const chemUnitsData: Record<number, {
    title: string;
    overview: string;
    equations: string[];
    concepts: Array<{ name: string; desc: string }>;
    example: { problem: string; solution: string };
    examTip: string;
    question: { q: string; opts: string[]; ans: string; expl: string };
  }> = {
    1: {
      title: 'Chemistry and Human Society',
      overview: `Chemistry is the science of matter, its properties, composition, structure, and the changes it undergoes during chemical transformations. In Ethiopia, chemistry underpins vital sectors including agriculture (manufacturing of urea and DAP fertilizers), pharmaceuticals, mineral processing, cement manufacturing at Mugher and Derba factories, and drinking water purification. Laboratory safety is essential; students must understand hazard symbols (toxic, corrosive, flammable, explosive) and standard operating procedures.`,
      equations: [
        '\\text{Haber-Bosch Process: } \\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)',
        '\\text{Cement Clinker Calcination: } \\text{CaCO}_3(s) \\xrightarrow{\\Delta} \\text{CaO}(s) + \\text{CO}_2(g)'
      ],
      concepts: [
        { name: 'Branches of Chemistry', desc: 'Inorganic (non-carbon minerals), Organic (carbon compounds), Physical (thermodynamics & kinetics), Analytical (quantification & separation), and Biochemistry (chemical processes in living organisms).' },
        { name: 'Hazard Pictograms', desc: 'Standardized GHS symbols indicating chemical risks: corrosive (acids/bases damaging tissue), toxic (poisonous on ingestion/inhalation), and oxidizing (supplying oxygen to fire).' }
      ],
      example: {
        problem: 'Explain the role of nitrogenous fertilizers in Ethiopian agriculture and identify the key raw chemical compound synthesized.',
        solution: 'Ammonia ($\\text{NH}_3$) is synthesized from atmospheric nitrogen and hydrogen. It is processed into urea ($\\text{CO(NH}_2)_2$) to supply essential nitrogen for plant vegetative growth and protein synthesis.'
      },
      examTip: 'EUEE questions frequently test laboratory safety rules. Never add water to concentrated acid; always add acid slowly down the side of the container into water with constant stirring ("AA: Add Acid").',
      question: {
        q: 'Which branch of chemistry deals primarily with developing laboratory methods for measuring the concentration of fluoride in drinking water from the Rift Valley?',
        opts: [
          'A) Organic Chemistry',
          'B) Analytical Chemistry',
          'C) Inorganic Chemistry',
          'D) Physical Chemistry'
        ],
        ans: 'B',
        expl: 'Analytical chemistry focuses on qualitative and quantitative analysis of substances.'
      }
    },
    2: {
      title: 'Measurements and Units in Chemistry',
      overview: `Quantitative chemistry requires rigorous measurement using the International System of Units (SI). Fundamental base quantities include length (meter, $\\text{m}$), mass (kilogram, $\\text{kg}$), time (second, $\\text{s}$), temperature (Kelvin, $\\text{K}$), and amount of substance (mole, $\\text{mol}$). Derived units include volume ($\\text{m}^3$ or $\\text{L}$), density ($\\text{g/cm}^3$ or $\\text{kg/m}^3$), and pressure (Pascal, $\\text{Pa}$ or $\\text{atm}$). Calculations must observe significant figure rules and dimensional analysis.`,
      equations: [
        '\\text{Density: } \\rho = \\frac{m}{V} \\quad [\\text{g/cm}^3 \\text{ or } \\text{kg/m}^3]',
        '\\text{Temperature Conversion: } T(\\text{K}) = T(^\\circ\\text{C}) + 273.15',
        '\\text{Pressure: } 1\\text{ atm} = 760\\text{ mmHg} = 101.325\\text{ kPa}'
      ],
      concepts: [
        { name: 'Precision vs. Accuracy', desc: 'Accuracy is how close a measured value is to the true or accepted value. Precision is how close repeated measurements are to one another.' },
        { name: 'Significant Figures', desc: 'All non-zero digits are significant. Zeros between non-zeros are significant. Leading zeros are NEVER significant (e.g., $0.0045$ has 2 sig figs). Trailing zeros with a decimal point are significant.' }
      ],
      example: {
        problem: 'A sample of mineral quartz has a mass of $54.20\\text{ g}$. When immersed in a graduated cylinder containing $30.0\\text{ mL}$ of water, the water level rises to $50.5\\text{ mL}$. Calculate the density of quartz with correct significant figures.',
        solution: '1. Volume $V = 50.5\\text{ mL} - 30.0\\text{ mL} = 20.5\\text{ mL}$.\\n2. Density $\\rho = \\frac{m}{V} = \\frac{54.20\\text{ g}}{20.5\\text{ mL}} = 2.6439... \\approx 2.64\\text{ g/cm}^3$ (3 significant figures, constrained by volume).'
      },
      examTip: 'Remember significant figure rules for addition/subtraction: the result has the same number of decimal places as the measurement with the fewest decimal places.',
      question: {
        q: 'How many significant figures are in the measurement $0.03050\\text{ kg}$?',
        opts: [
          'A) 2',
          'B) 3',
          'C) 4',
          'D) 5'
        ],
        ans: 'C',
        expl: 'Leading zeros ($0.0$) are not significant. The digits $3$, the interior $0$, $5$, and the trailing $0$ after the decimal are all significant (4 sig figs).'
      }
    },
    3: {
      title: 'Structure of the Atom',
      overview: `Atoms are the fundamental building blocks of all chemical elements. An atom consists of a dense, positively charged nucleus containing protons ($p^+$) and neutrons ($n^0$), surrounded by electrons ($e^-$) residing in quantized energy levels. The atomic number ($Z$) uniquely defines the element by its number of protons. The mass number ($A$) is the sum of protons and neutrons ($A = Z + N$). Isotopes are atoms of the same element having the same atomic number but different mass numbers. Electron configuration follows the Aufbau principle, Hund's rule, and the Pauli exclusion principle.`,
      equations: [
        'A = Z + N \\quad [\\text{Mass Number} = \\text{Atomic Number} + \\text{Neutrons}]',
        '\\text{Relative Atomic Mass } (A_r) = \\sum \\left( \\frac{\\% \\text{ Abundance} \\times \\text{Isotopic Mass}}{100} \\right)',
        '2n^2 \\quad [\\text{Maximum electrons in principal energy level } n]'
      ],
      concepts: [
        { name: 'Subatomic Particles', desc: 'Protons ($+1$ charge, $\\approx 1.007\\text{ amu}$), Neutrons ($0$ charge, $\\approx 1.008\\text{ amu}$), Electrons ($-1$ charge, $\\approx \\frac{1}{1836}\\text{ amu}$).' },
        { name: 'Bohr Model vs. Quantum Model', desc: 'Bohr proposed fixed circular orbits with discrete energy levels ($E_n$). The modern quantum mechanical model describes electrons in three-dimensional probability orbitals ($s, p, d, f$).' }
      ],
      example: {
        problem: 'Chlorine exists as two major isotopes: $^{35}\\text{Cl}$ (mass $34.97\\text{ amu}$, abundance $75.77\\%$) and $^{37}\\text{Cl}$ (mass $36.97\\text{ amu}$, abundance $24.23\\%$). Calculate the relative atomic mass of chlorine.',
        solution: '$$A_r = \\frac{(75.77 \\times 34.97) + (24.23 \\times 36.97)}{100} = \\frac{2649.68 + 895.78}{100} = \\frac{3545.46}{100} = 35.45\\text{ amu}$$'
      },
      examTip: 'Valence electrons are the electrons in the outermost principal shell ($n$). For main group elements (Groups 1-8), the group number equals the number of valence electrons.',
      question: {
        q: 'What is the electronic configuration of a neutral phosphorus atom ($Z = 15$)?',
        opts: [
          'A) 2, 8, 5',
          'B) 2, 8, 3',
          'C) 2, 7, 6',
          'D) 2, 5, 8'
        ],
        ans: 'A',
        expl: 'Phosphorus has 15 electrons arranged in energy levels: Level 1 holds 2, Level 2 holds 8, and Level 3 holds 5 valence electrons (2, 8, 5).'
      }
    },
    4: {
      title: 'Periodic Classification of the Elements',
      overview: `The modern Periodic Table arranges elements in order of increasing atomic number ($Z$), exhibiting periodic repetition of chemical and physical properties (Periodic Law). Columns are called Groups (or Families) and indicate elements with identical valence electron configurations and similar chemical reactivity. Rows are called Periods and indicate the principal energy level being filled with electrons. Periodic trends govern atomic radius, ionization energy, electron affinity, electronegativity, and metallic character.`,
      equations: [
        '\\text{Ionization Energy: } \\text{X}(g) + \\text{IE}_1 \\rightarrow \\text{X}^+(g) + e^-',
        '\\text{Electron Affinity: } \\text{X}(g) + e^- \\rightarrow \\text{X}^-(g) + \\text{Energy}'
      ],
      concepts: [
        { name: 'Atomic Radius Trend', desc: 'Increases down a group due to the addition of principal electron shells. Decreases across a period from left to right due to increased effective nuclear charge ($Z_{\\text{eff}}$) pulling electrons closer.' },
        { name: 'Ionization Energy & Electronegativity', desc: 'Increases across a period (harder to remove electrons; stronger pull on bonding pairs). Decreases down a group (increased atomic radius and electron shielding).' }
      ],
      example: {
        problem: 'Rank the elements Sodium ($\\text{Na}$), Magnesium ($\\text{Mg}$), and Chlorine ($\\text{Cl}$) in order of increasing first ionization energy and decreasing atomic radius.',
        solution: '1. Across Period 3 from left to right, nuclear charge increases.\\n2. Ionization energy: $\\text{Na} < \\text{Mg} < \\text{Cl}$ (Chlorine requires the most energy to remove an electron).\\n3. Atomic radius: $\\text{Na} > \\text{Mg} > \\text{Cl}$ (Sodium has the largest atomic radius).'
      },
      examTip: 'Noble gases (Group 18) have the highest first ionization energies in their periods because of their completely filled, stable electron octets.',
      question: {
        q: 'Which element possesses the highest electronegativity value on the Pauling scale?',
        opts: [
          'A) Cesium (Cs)',
          'B) Oxygen (O)',
          'C) Fluorine (F)',
          'D) Chlorine (Cl)'
        ],
        ans: 'C',
        expl: 'Fluorine has an electronegativity of 4.0, the highest of all elements in the periodic table.'
      }
    },
    5: {
      title: 'Chemical Bonding',
      overview: `Chemical bonding occurs when atoms interact to achieve a stable noble gas electronic configuration, typically an octet of eight valence electrons. Ionic bonding arises from the electrostatic attraction between oppositely charged ions formed by complete transfer of electrons from a metal to a non-metal. Covalent bonding involves the sharing of one, two, or three electron pairs between non-metal atoms. Metallic bonding consists of an array of positive metal cations surrounded by a delocalized "sea of mobile valence electrons", explaining electrical and thermal conductivity.`,
      equations: [
        '\\text{Ionic Formation: } 2\\text{Na}(s) + \\text{Cl}_2(g) \\rightarrow 2\\text{NaCl}(s)',
        '\\text{Covalent Bond: } \\text{H}\\cdot + \\cdot\\text{H} \\rightarrow \\text{H}:\\text{H} \\quad (\\text{H}_2)',
        '\\text{Lattice Energy } U \\propto \\frac{|q_1 q_2|}{r_0}'
      ],
      concepts: [
        { name: 'Ionic vs. Covalent Properties', desc: 'Ionic compounds have high melting points, form crystalline lattices, and conduct electricity when molten or aqueous. Covalent molecules generally have lower melting points and do not conduct electricity.' },
        { name: 'Polar vs. Nonpolar Covalent', desc: 'Nonpolar bonds share electrons equally ($\\Delta\\text{EN} < 0.4$, e.g., $\\text{O}_2, \\text{CH}_4$). Polar covalent bonds share electrons unequally ($0.4 \\le \\Delta\\text{EN} \\le 1.8$, e.g., $\\text{H}_2\\text{O}, \\text{HCl}$), producing dipole moments.' }
      ],
      example: {
        problem: 'Draw the Lewis electron dot structure for water ($\\text{H}_2\\text{O}$) and predict whether the molecule is polar or non-polar.',
        solution: 'Oxygen has 6 valence electrons; each Hydrogen has 1. Total valence electrons = $6 + 2(1) = 8$. Oxygen forms two single covalent bonds with Hydrogens and retains two lone pairs. Because of its bent V-shaped geometry ($104.5^\\circ$), the bond dipoles do not cancel, making water a polar molecule with strong hydrogen bonding.'
      },
      examTip: 'National examiners love testing conduction of ionic solids: Solid NaCl does NOT conduct electricity because ions are locked in fixed lattice positions. It ONLY conducts when molten or dissolved in water.',
      question: {
        q: 'Which of the following substances contains ionic bonds?',
        opts: [
          'A) Carbon dioxide ($CO_2$)',
          'B) Magnesium oxide ($MgO$)',
          'C) Methane ($CH_4$)',
          'D) Water ($H_2O$)'
        ],
        ans: 'B',
        expl: 'Magnesium is an alkaline earth metal and oxygen is a non-metal ($Mg^{2+} + O^{2-} \\rightarrow MgO$), forming an ionic bond.'
      }
    }
  };

  const unitData = chemUnitsData[chapNum] || chemUnitsData[1];
  const sub = 'Chemistry';
  const gr = 'Grade 9';

  return `Federal Democratic Republic of Ethiopia • Ministry of Education
${gr} ${sub} Student Textbook — Page ${printedPage} of 183
Unit ${chapNum}: ${unitData.title} • ${topNum}: ${topTitle}

### Section ${topNum}: ${topTitle}

#### 1. Core Curriculum Theory & Conceptual Overview
${unitData.overview}

---

#### 2. Governing Chemical Equations & Quantitative Formulations
$$\\begin{aligned}
${unitData.equations.join(' \\\\\n')}
\\end{aligned}$$

---

#### 3. Core Scientific Principles & Definitions
${unitData.concepts.map(c => `- **${c.name}:** ${c.desc}`).join('\n')}

---

#### 4. Step-by-Step Worked Problem
**Problem:** ${unitData.example.problem}

**Solution Protocol:**
${unitData.example.solution}

> **EUEE National Exam Strategy & Examiner Insight:**
> ${unitData.examTip}

---

#### 5. National Entrance Examination (EUEE) Review Questions
**Question:** ${unitData.question.q}
${unitData.question.opts.join('\n')}

**Correct Answer:** **${unitData.question.ans}**
*Explanation:* ${unitData.question.expl}`;
}

function buildGrade9GeographyPageText(
  printedPage: number,
  chapNum: number,
  chapTitle: string,
  topic: any
): string {
  const topNum = topic?.topic_number || `${chapNum}.1`;
  const topTitle = topic?.title || chapTitle;

  const topicCatalog: Record<string, {
    unitNum: number;
    unitTitle: string;
    topicNum: string;
    topicTitle: string;
    theory: string;
    concepts: string[];
    caseStudy: string;
    examTrap: string;
    question: { q: string; opts: string[]; ans: string; expl: string };
  }> = {
    '1.1': {
      unitNum: 1,
      unitTitle: 'Geological History and Topography of Ethiopia',
      topicNum: '1.1',
      topicTitle: 'Geological Eras and Structural Evolution of the Horn',
      theory: `The physical architecture of the Horn of Africa is the culmination of endogenic and exogenic geological processes spanning 4.5 billion years across four principal eras:

1. **Precambrian Era (4.5 billion – 600 million years ago):** Formed the crystalline basement complex of folded metamorphic rocks (gneisses, schists, quartzites) intruded by plutonic granites. These ancient rocks form the structural foundation of Ethiopia and are exposed today where overlying strata have been stripped by erosion (Tigray, Gambella, Benishangul-Gumuz, and Borena).
2. **Paleozoic Era (600 – 225 million years ago):** Characterized by prolonged denudation and peneplanation, flattening the Precambrian basement. No major marine transgression occurred.
3. **Mesozoic Era (225 – 65 million years ago):** A period of massive marine transgression and regression caused by the tilting of the landmass. The Indian Ocean invaded from southeast to northwest:
   - **Adigrat Sandstone:** Transgressive basal sandstone deposited on the Precambrian basement.
   - **Hintalo Limestone:** Deposited when the shallow sea was at its maximum depth.
   - **Upper Sandstone:** Regressive sandstone deposited as the sea retreated southeastward.
4. **Cenozoic Era (65 million years ago – Present):** Characterized by violent volcanism and tectonism:
   - **Tertiary Period:** Uplifting of the Arabo-Ethiopian swell and outpouring of extensive flood basalts (Trappean Series), building thick lava plateaus and shield volcanoes (Ras Dejen, Mt. Guna, Mt. Tullu Dimtu).
   - **Quaternary Period:** Rifting fractured the plateau into the Great East African Rift Valley, accompanied by Aden volcanic series and caldera formation.`,
      concepts: [
        'Precambrian Basement: Foundation crystalline complex rich in metallic mineral ores (gold, platinum, tantalum).',
        'Mesozoic Transgression Sequence: Adigrat Sandstone (bottom) -> Hintalo Limestone (middle) -> Upper Sandstone (top).',
        'Trappean Series Volcanism: Continental flood basalts exceeding 1,000 meters in thickness forming the high plateau massifs.',
        'Rifting Mechanics: Tensional crustal forces caused divergent lithospheric thinning, graben down-faulting, and horst uplift.'
      ],
      caseStudy: 'The Mesozoic sedimentary layers of Hintalo Limestone in the Tigray and Central Highlands are actively quarried for modern Portland cement production (e.g., Messebo and Muger cement factories), proving how geological history directly underpins modern industrial development.',
      examTrap: 'EUEE questions test the order of Mesozoic rocks: Adigrat Sandstone was deposited during marine transgression (oldest), while Upper Sandstone was deposited during regression (youngest).',
      question: {
        q: 'Which of the following formations represents the oldest Mesozoic sedimentary rock unit in Ethiopia?',
        opts: ['A) Hintalo Limestone', 'B) Adigrat Sandstone', 'C) Upper Sandstone', 'D) Trappean Basalt'],
        ans: 'B',
        expl: 'Adigrat Sandstone is the basal transgressive rock layer deposited directly on the peneplained Precambrian basement as the Mesozoic sea advanced.'
      }
    },
    '1.2': {
      unitNum: 1,
      unitTitle: 'Geological History and Topography of Ethiopia',
      topicNum: '1.2',
      topicTitle: 'Physiographic Divisions of Ethiopia',
      theory: `Ethiopia\'s relief is categorized into three major physiographic regions:

1. **The Western Highlands and Lowlands:**
   - **Highlands:** Comprises the North-Central Massif (including Mt. Ras Dejen 4,550m, Mt. Guna, Mt. Kollo), the Shewan Plateau (forming the hydrographic divide between Abay, Awash, and Omo basins), and the Southwestern Highlands (the most dissected, humid, and forested plateau, draining into Baro-Akobo and Omo rivers).
   - **Lowlands:** Tekeze Lowland, Abay-Dinder Lowland, and Baro-Akobo Lowland (highest annual rainfall of all lowlands).
2. **The Southeastern Highlands and Lowlands:**
   - **Highlands:** Separated from Western Highlands by the Rift Valley. Includes the Hararghe Plateau (draining towards Wabi Shebelle), Arsi-Bale Massif (home to Mt. Tullu Dimtu 4,377m and Mt. Batu), and Sidama Highlands.
   - **Lowlands:** Ogaden Plains, El-Kere, and Borena Lowlands, gently sloping towards Somalia and the Indian Ocean.
3. **The Ethiopian Rift Valley:**
   - Forms a structural belt dividing the highlands into two blocks.
   - Sub-divided into: 1) **Afar Triangle / Danakil Depression** (lowest point at -125m in Lake Assale/Dallol, active volcanic Erta Ale); 2) **Main Ethiopian Rift (Central Rift)** (series of closed and open lakes: Ziway, Langano, Abijatta, Shalla, Hawassa); 3) **Chew Bahir Rift (Southern Rift)** draining the Weito and Sagan rivers.`,
      concepts: [
        'Hypsographic Profile: Over 56% of Ethiopia lies above 1,000m elevation, earning the title "Roof of Africa".',
        'North-Central Massif: Features deeply incised river gorges and isolated flat-topped tablelands called "Ambas".',
        'Danakil Depression: Extreme hyper-arid tectonic depression hosting salt pans, geothermal geysers, and lava lakes.',
        'Watershed Divides: The Shewan Plateau serves as the national water divide connecting the Nile, Awash, and Rift Valley basins.'
      ],
      caseStudy: 'The Afar Depression represents one of only two places on Earth where a mid-ocean ridge is visible on dry land (triple junction of African, Arabian, and Somali plates), making it a global natural laboratory for geophysical plate tectonic studies.',
      examTrap: 'Remember that Mount Tullu Dimtu (4,377m) is the second highest peak in Ethiopia and is located in the Bale Massif (Southeastern Highlands), while Ras Dejen (4,550m) is in the Simien Massif (Western Highlands).',
      question: {
        q: 'Which physiographic sub-division contains the highest concentration of endemic broadleaved montane rainforests and the origin of wild Coffea arabica?',
        opts: ['A) North-Central Massif', 'B) Southwestern Highlands', 'C) Hararghe Plateau', 'D) Afar Depression'],
        ans: 'B',
        expl: 'The Southwestern Highlands (Kaffa, Illubabor, Bench-Sheko) receive high rainfall year-round and contain Ethiopia\'s primary montane rainforests and wild coffee gene pools.'
      }
    },
    '1.3': {
      unitNum: 1,
      unitTitle: 'Geological History and Topography of Ethiopia',
      topicNum: '1.3',
      topicTitle: 'Topographic Features and Human Settlements',
      theory: `Topography acts as a fundamental master control over human settlement, agricultural land use, disease distribution, and transport connectivity in Ethiopia:

- **Settlement Concentration:** Over 85% of Ethiopia\'s population resides in the highlands above 1,500m due to moderate temperatures, fertile volcanic and alluvial soils, adequate precipitation, and freedom from tropical vector-borne diseases like malaria and trypanosomiasis.
- **Agricultural Land Suitability:** Flat plateau surfaces and gentle piedmont slopes support intensive plow agriculture (teff, wheat, barley, enset), while steep canyon walls and escarpments suffer from severe sheet and gully erosion.
- **Infrastructural Challenges:** Deep river gorges (e.g., the 1,000-meter deep Blue Nile Gorge) and jagged escarpments create rugged transportation barriers, escalating the cost of road and railway construction.
- **Microclimate and Hydrological Regulation:** Highland topography intercepts prevailing rain-bearing winds, triggering orographic rainfall that feeds downstream aquifers and irrigation basins.`,
      concepts: [
        'Altitude Barrier: The 1,500m contour separates high-density highland settlements from low-density pastoralist lowlands.',
        'Highland Defense & Fortress Ambas: Historically, steep flat-topped mesas (Amba Gishen, Amba Wehni) provided natural military strongholds.',
        'High Altitude Disease Refuge: Malaria transmission drops dramatically above 1,800m-2,000m due to low ambient temperatures limiting mosquito vector development.'
      ],
      caseStudy: 'The construction of the Addis Ababa–Djibouti standard gauge railway and the Expressway corridor required specialized viaduct bridges and tunnels to negotiate the rugged transition from the 2,400m high central plateau down to the Rift Valley floor.',
      examTrap: 'Avoid confusing topographic barriers with economic unviability: while rugged terrain increases road construction costs, it simultaneously provides massive hydroelectric potential due to high gravitational head (hydraulic drop).',
      question: {
        q: 'Why are human settlements historically concentrated in the Ethiopian highlands rather than the fertile river valleys?',
        opts: [
          'A) Highlands have higher temperatures and lower rainfall',
          'B) River valleys historically posed severe health hazards from malaria and tsetse flies',
          'C) Lowlands are prone to severe permafrost freezing',
          'D) Highlands have no drainage systems'
        ],
        ans: 'B',
        expl: 'Lowland river valleys historically suffered from intense malaria and sleeping sickness (trypanosomiasis), driving human settlements to the healthier temperate highland plateaus.'
      }
    },
    '2.1': {
      unitNum: 2,
      unitTitle: 'Climate of Ethiopia and the Horn',
      topicNum: '2.1',
      topicTitle: 'Elements and Controls of Weather and Climate',
      theory: `Weather is the atmospheric condition over a short time, while climate represents long-term average atmospheric patterns over 30+ years. 

**Principal Controls of Climate in Ethiopia:**
1. **Altitude (Elevation):** The dominant control. Temperature decreases with increasing altitude at the normal environmental lapse rate ($-6.4^\\circ\\text{C}$ per $1,000\\text{m}$ elevation gain).
2. **Latitude:** Located near the equator ($3^\\circ\\text{N} - 15^\\circ\\text{N}$), giving high overhead sun angles and minimal annual day-length variation.
3. **Pressure Systems and Air Masses:**
   - **Equatorial Westerlies (Guinea Monsoon):** Moisture-laden winds from the Atlantic/Congo basin responsible for heavy Kiremt rains in summer.
   - **Tropical Maritime Air Mass (Southeast Trades):** Blows from the Indian Ocean, bringing Belg rains in spring.
   - **Tropical Continental Air Mass (Northeast Trades):** Dry, dust-bearing continental winds blowing from Arabia/Sahara during the winter Bega dry season.
4. **Inter-Tropical Convergence Zone (ITCZ):** The low-pressure zone where northern and southern hemisphere trade winds converge. Its northward migration in June–August brings peak rainfall, while its southward shift in November–January brings dry skies.`,
      concepts: [
        'Normal Lapse Rate Formula: $\\Delta T = -6.4^\\circ\\text{C} \\times \\frac{\\Delta h}{1000\\text{m}}$.',
        'ITCZ Oscillations: Tracks the thermal equator northward in summer and southward in winter.',
        'Orographic Precipitation: Windward mountain slopes receive heavy relief rainfall; leeward slopes sit in rain-shadow deserts.'
      ],
      caseStudy: 'The Ethiopian National Meteorological Agency (NMA) operates a network of Doppler radar stations and automated weather stations to model ITCZ movement and forecast seasonal rainfall for the Ministry of Agriculture.',
      examTrap: 'Always apply the lapse rate correctly: If sea level temperature is $30^\\circ\\text{C}$, a city at $2,000\\text{m}$ altitude (like Addis Ababa) will have a mean temperature of $30 - (2 \\times 6.4) = 17.2^\\circ\\text{C}$.',
      question: {
        q: 'If the mean sea level temperature is 32°C, what is the expected temperature at an Ethiopian highland station located at an altitude of 2,500 meters?',
        opts: ['A) 24.0°C', 'B) 16.0°C', 'C) 8.0°C', 'D) 20.5°C'],
        ans: 'B',
        expl: 'Temperature decrease = (2500 / 1000) * 6.4°C = 16.0°C. Expected temperature = 32°C - 16.0°C = 16.0°C.'
      }
    },
    '2.2': {
      unitNum: 2,
      unitTitle: 'Climate of Ethiopia and the Horn',
      topicNum: '2.2',
      topicTitle: 'Traditional and Modern Agro-Ecological Zones',
      theory: `Ethiopia\'s unique altitudinal zonation divides the country into five distinct traditional agro-climatic thermal zones:

| Agro-Climatic Zone | Elevation Range | Mean Annual Temp | Mean Annual Rainfall | Dominant Crops & Vegetation |
| :--- | :--- | :--- | :--- | :--- |
| **Bereha (Hot Arid)** | $< 500\\text{ m}$ | $> 27^\\circ\\text{C}$ | $< 400\\text{ mm}$ | Acacia, Commiphora, date palms, nomadic pastoralism (camels, goats) |
| **Kolla (Warm Semi-Arid)** | $500 - 1,500\\text{ m}$ | $20 - 27^\\circ\\text{C}$ | $400 - 800\\text{ mm}$ | Sorghum, millet, cotton, sesame, groundnuts, beef cattle |
| **Woina Dega (Temperate)** | $1,500 - 2,300\\text{ m}$ | $15 - 20^\\circ\\text{C}$ | $800 - 1,200\\text{ mm}$ | **Teff**, maize, wheat, enset, pulses, coffee, mixed crop-livestock |
| **Dega (Cool Highlands)** | $2,300 - 3,200\\text{ m}$ | $10 - 15^\\circ\\text{C}$ | $1,000 - 2,000\\text{ mm}$ | Barley, wheat, highland pulses (faba bean), sheep, potatoes |
| **Wurch / Kur (Alpine)** | $> 3,200\\text{ m}$ | $< 10^\\circ\\text{C}$ | $> 1,000\\text{ mm}$ | Afro-alpine grasses, Giant Lobelia, limited sheep grazing, frost-prone |

- **Woina Dega ("Wine Highlands"):** Supports the densest rural population in Ethiopia due to optimum physiological comfort, reliable two-season rainfall, and multi-crop productivity.`,
      concepts: [
        'Thermal Adaptability: Teff and maize thrive in Woina Dega; barley and faba beans tolerate frost in Dega; sorghum tolerates Kolla droughts.',
        'Enset Culture Complex: Concentrated in Woina Dega and Dega of southern Ethiopia, providing high caloric yield per hectare.',
        'Frost Hazard (Wurch & Upper Dega): Sub-zero nighttime radiative cooling damages crops during clear Bega skies.'
      ],
      caseStudy: 'In Gurage and Sidama zones, high-density smallholder populations thrive in Woina Dega microclimates by practicing intensive multi-story agroforestry combining enset (false banana), Coffea arabica, fruit trees, and livestock manure recycling.',
      examTrap: 'Woina Dega spans 1,500m to 2,300m, NOT 2,300m to 3,200m (which is Dega). Pay close attention to boundary elevations in national exam questions!',
      question: {
        q: 'Which crop has the highest cold-tolerance and serves as the primary staple cereal in the high Dega and lower Wurch zones of Ethiopia?',
        opts: ['A) Maize', 'B) Barley', 'C) Teff', 'D) Sorghum'],
        ans: 'B',
        expl: 'Barley (Hordeum vulgare) has superior cold and frost tolerance compared to teff or maize, making it the dominant staple crop above 2,500 meters in the Dega and sub-afroalpine zones.'
      }
    },
    '2.3': {
      unitNum: 2,
      unitTitle: 'Climate of Ethiopia and the Horn',
      topicNum: '2.3',
      topicTitle: 'Rainfall Distribution, Seasons, and Climate Change',
      theory: `Ethiopia experiences three distinct rainfall regimes and seasons:

1. **Kiremt (Summer: June – September):** Main rainy season for the majority of the highlands. Driven by the Congo Air Boundary (CAB) and South Atlantic / Indian Ocean equatorial westerly monsoons pulled in by the Saharan/Arabian thermal low.
2. **Belg (Spring: February – May):** Secondary rainy season crucial for short-cycle crops in eastern and central highlands. Driven by moist maritime air masses from the tropical Indian Ocean.
3. **Bega (Winter: October – January):** Dry season across the highlands under continental Northeast Trade winds, but represents the primary rainy season for the Southeastern lowlands (Somali and Borena).

**Climate Change Vulnerability and National Mitigation:**
- **Rainfall Variability:** Increasing frequency of erratic rainfall onsets, flash floods, and prolonged droughts linked to El Niño–Southern Oscillation (ENSO) events.
- **Green Legacy Initiative:** Large-scale national afforestation program planting billions of indigenous and agroforestry tree seedlings across degraded watersheds to enhance carbon sequestration and restore rainfall retention.`,
      concepts: [
        'Monsoon Mechanics: Thermal pressure gradients between landmass and oceans reverse wind directions seasonally.',
        'Belg Crop Failure Risk: Belg rain failure triggers severe early-season food insecurity in Wollo, Hararghe, and Tigray.',
        'Green Legacy Reforestation: Restores soil moisture regimes, halts gully erosion, and protects downstream dams from siltation.'
      ],
      caseStudy: 'The Green Legacy initiative launched by Ethiopia has planted over 25 billion seedlings since 2019, restoring critical catchment forests in the Choke Mountains and Simien massifs to protect headwater flow for the Blue Nile basin.',
      examTrap: 'Note that while Kiremt is the main rainy season for the Western and Central Highlands, the Southeastern Lowlands (Ogaden and Borena) receive their rains during Belg (Gu) and Bega/Autumn (Deyr).',
      question: {
        q: 'Which air mass is primarily responsible for the heavy Kiremt rainfall in the Ethiopian highlands between June and September?',
        opts: [
          'A) Continental Northeast Trade Winds',
          'B) Equatorial Westerlies (Guinea Monsoon / Congo Air Boundary)',
          'C) Polar Maritime Air Mass',
          'D) Siberian Anticyclone'
        ],
        ans: 'B',
        expl: 'Equatorial Westerlies originating from the Atlantic Ocean and passing over the moist Congo Basin bring moisture that causes the heavy summer Kiremt rains.'
      }
    },
    '3.1': {
      unitNum: 3,
      unitTitle: 'Drainage Systems and Water Resources of Ethiopia',
      topicNum: '3.1',
      topicTitle: 'Major River Basins and Drainage Systems',
      theory: `Ethiopia\'s radial drainage pattern is governed by topographic uplift, dividing the country into three principal drainage systems:

1. **The Western (Nile) Drainage System (70% of total national runoff):**
   - **Abay (Blue Nile):** Originates from Lake Tana / Gilgel Abay, flows through a massive 1,000m gorge, joined by tributaries (Beshilo, Didesa, Dabus, Fincha, Guder), contributes over 60% of Main Nile water.
   - **Tekeze (Atbara):** Drains northern highlands into the Main Nile in Sudan.
   - **Baro-Akobo (Sobat):** Drains the humid southwestern rainforests; Baro is the only navigable river in Ethiopia during high-water seasons.
   - **Gibe-Omo:** Originates in central highlands, drains into the closed Lake Turkana in Kenya.
2. **The Southeastern Drainage System (20% of total national runoff):**
   - **Wabi Shebelle:** Ethiopia\'s longest river ($2,052\\text{ km}$ total), drains Hararghe and Bale highlands into Somalia.
   - **Genale-Dawa:** Flows southeastward to form the Juba River in Somalia before emptying into the Indian Ocean.
3. **The Inland (Rift Valley) Drainage System (10% of total national runoff):**
   - **Awash River:** Rises near Ginchi, flows through the Central Rift, feeds commercial sugar plantations, and terminates in Lake Abbe on the Djibouti border without reaching the sea.`,
      concepts: [
        'Water Tower of Eastern Africa: 12 major river basins producing over 124 billion cubic meters of annual runoff.',
        'Radial Drainage Pattern: Rivers flow outward in all directions from the high central plateau hub.',
        'Baro River Navigability: Open to river barges between Gambella port and South Sudan during the rainy season.'
      ],
      caseStudy: 'The Baro-Akobo basin generates the highest runoff per square kilometer of all Ethiopian basins due to dense tropical rainforest cover, feeding critical wetlands in Gambella National Park that support the second largest mammal migration in Africa (white-eared kob).',
      examTrap: 'Do not confuse river length with volume! Wabi Shebelle is the longest river in Ethiopia, but Abay (Blue Nile) discharges by far the highest volume of water.',
      question: {
        q: 'Which Ethiopian river is the longest within the country’s boundaries but frequently fails to reach the Indian Ocean in dry seasons?',
        opts: ['A) Abay', 'B) Awash', 'C) Wabi Shebelle', 'D) Tekeze'],
        ans: 'C',
        expl: 'Wabi Shebelle is Ethiopia\'s longest river (over 2,052 km), but high evaporation and seepage in the arid lowlands often cause it to run dry before reaching the Indian Ocean.'
      }
    },
    '3.2': {
      unitNum: 3,
      unitTitle: 'Drainage Systems and Water Resources of Ethiopia',
      topicNum: '3.2',
      topicTitle: 'Lakes of Ethiopia and Hydroelectric Potential',
      theory: `Ethiopia contains numerous freshwater and alkaline lakes categorized by their geological origin:

1. **Highland Lakes:**
   - **Lake Tana:** Ethiopia\'s largest lake ($3,600\\text{ km}^2$), formed by volcanic lava damming in the Quaternary period. Source of the Blue Nile and home to ancient island monasteries.
   - **Crater Lakes:** Formed in volcanic calderas (e.g., Lake Wonchi, Lake Dendi, and the 7 crater lakes of Bishoftu/Debre Zeyit).
2. **Rift Valley Lakes:**
   - **Freshwater Lakes:** Lake Ziway, Lake Hawassa, and Lake Chamo (supporting rich fisheries, tilapia, Nile perch, and hippopotami).
   - **Alkaline / Soda Lakes:** Lake Abijatta, Lake Shalla (deepest lake at $>266\\text{m}$), and Lake Langano (bilharzia-free due to high soda content).
3. **Hydroelectric Power (HEP) Exploitation:**
   - Total national technical HEP potential exceeds **45,000 MW**.
   - **Grand Ethiopian Renaissance Dam (GERD):** Capacity 5,150 MW, reservoir volume 74 billion $m^3$.
   - **Other Major HEP Dams:** Gilgel Gibe III (1,870 MW), Tekeze Dam (300 MW), Beles Multipurpose, Melka Wakena, Finchaa Dam.`,
      concepts: [
        'Volcanic Damming Origin: Lake Tana was created when Quaternary basalt lava flows blocked the northern exit of the basin.',
        'Lake Shalla Caldera: Deepest lake in Ethiopia (>266m) located inside a collapsed volcanic caldera.',
        'Clean Energy Export: Ethiopian Electric Power (EEP) exports surplus renewable electricity to Kenya, Sudan, and Djibouti via regional high-voltage interconnectors.'
      ],
      caseStudy: 'The GERD project on the Blue Nile is Africa\'s largest hydroelectric plant, doubling national electricity generation, fueling industrial parks, powering urban electric rail systems, and boosting green regional energy trade.',
      examTrap: 'Lake Tana is the LARGEST lake in surface area, but Lake Shalla is the DEEPEST lake in Ethiopia. Lake Langano is widely known as bilharzia-free.',
      question: {
        q: 'Which of the following is the deepest lake in Ethiopia, situated within a volcanic caldera in the Rift Valley?',
        opts: ['A) Lake Tana', 'B) Lake Ziway', 'C) Lake Shalla', 'D) Lake Hawassa'],
        ans: 'C',
        expl: 'Lake Shalla is the deepest lake in Ethiopia (maximum depth exceeding 266 meters), occupying a large volcanic caldera in the Central Rift Valley.'
      }
    },
    '3.3': {
      unitNum: 3,
      unitTitle: 'Drainage Systems and Water Resources of Ethiopia',
      topicNum: '3.3',
      topicTitle: 'Water Resource Management and Regional Geopolitics',
      theory: `Water resource development in the Horn of Africa is intertwined with transboundary water diplomacy and watershed conservation:

- **The Nile Basin Geopolitics:** Historically, colonial-era treaties (1929 and 1959 Nile Waters Agreements) allocated full water rights exclusively to Egypt and Sudan, completely excluding Ethiopia (which generates 86% of the Nile\'s flow).
- **The Cooperative Framework Agreement (CFA):** Formulated under the Nile Basin Initiative (NBI) to replace colonial monopolies with principle of **equitable and reasonable utilization** and **no significant harm**. The CFA has now been signed and ratified by upstream nations.
- **Integrated Watershed Management:** Upstream soil and water conservation (terracing, check dams, afforestation) prevents catastrophic siltation of downstream reservoirs, extending the operational lifespan of multipurpose dams.`,
      concepts: [
        'Equitable Water Utilization: International water law standard replacing historic colonial vetoes.',
        'Siltation Mitigation: Soil erosion upstream directly reduces dam reservoir storage capacity; catchment terracing is mandatory.',
        'Regional Energy Integration: Clean hydropower exports create shared economic interdependence among Horn of Africa nations.'
      ],
      caseStudy: 'Catchment rehabilitation programs in the Tekeze and Gilgel Gibe watersheds have reduced reservoir sedimentation rates by over 40%, proving that community-led land management is essential for long-term power generation.',
      examTrap: 'Remember that Ethiopia contributes approximately 86% of the Nile\'s annual flow during peak flood seasons (via Abay, Baro-Akobo, and Tekeze), yet historically utilized less than 1% for domestic irrigation.',
      question: {
        q: 'What is the primary international legal principle promoted by upstream Nile basin states under the Cooperative Framework Agreement (CFA)?',
        opts: [
          'A) Absolute historic rights based on 1929 colonial treaties',
          'B) Equitable and reasonable utilization of transboundary water resources',
          'C) Complete ban on hydroelectric dam construction',
          'D) Exclusive diversion of rivers away from downstream nations'
        ],
        ans: 'B',
        expl: 'The CFA is grounded in modern international water law, championing equitable and reasonable utilization without causing significant harm to any riparian nation.'
      }
    },
    '4.1': {
      unitNum: 4,
      unitTitle: 'Natural Vegetation and Wildlife of Ethiopia',
      topicNum: '4.1',
      topicTitle: 'Altitudinal Zonation of Natural Vegetation',
      theory: `Vegetation distribution in Ethiopia mirrors altitudinal temperature and precipitation gradients:

1. **Afro-Alpine and Sub-Afro-Alpine Belt ($> 3,300\\text{ m}$):**
   - High mountain summits (Simien, Bale, Mt. Guna, Mt. Guge).
   - Flora: Giant Lobelia (Lobelia rhynchopetalum), red-hot poker (Kniphofia), everlasting flowers (Helichrysum), and alpine tussock grasses.
2. **Montane Coniferous Forest ($2,200 - 3,300\\text{ m}$):**
   - Dega and high Woina Dega plateau areas.
   - Flora: **Tid** (African pencil cedar / *Juniperus procera*), **Zigba** (*Podocarpus falcatus*), Kosso (*Hagenia abyssinica*), and wild olive (*Olea europaea*).
3. **Broadleaved Montane Rainforest ($1,500 - 2,400\\text{ m}$):**
   - Humid Southwestern Highlands (Kaffa, Sheka, Illubabor).
   - Flora: Multi-tiered canopy of Aningeria altissima, Albizia, tree ferns, epiphytic orchids, and indigenous wild **Coffea arabica**.
4. **Acacia Woodland and Savanna ($1,000 - 1,800\\text{ m}$):**
   - Rift Valley floor and mid-altitude lowlands.
   - Flora: Flat-topped Acacia tortilis, Balanites aegyptiaca, thorny shrubs, and perennial bunchgrasses.
5. **Steppe and Semi-Desert Vegetation ($< 1,000\\text{ m}$):**
   - Arid peripheral lowlands (Afar, Ogaden, Borena).
   - Flora: Drought-deciduous Commiphora (myrrh), Boswellia (frankincense), succulents (Euphorbia), and short ephemeral grasses.`,
      concepts: [
        'Altitudinal Inversion: Higher altitudes support colder-adapted alpine vegetation; lower altitudes support xerophytic shrubs.',
        'Hagenia abyssinica (Kosso): Prized medicinal tree historically used as an anthelmintic against tapeworms.',
        'Xerophytic Adaptations: Deep taproots, waxy cuticle coatings, thorny leaves, and succulent stems to minimize evapotranspiration.'
      ],
      caseStudy: 'The moist evergreen montane forests of Kaffa and Yayu are designated as UNESCO Biosphere Reserves, safeguarding the world\'s most valuable wild genetic reservoir of Coffea arabica.',
      examTrap: 'Juniperus procera (Tid) and Podocarpus falcatus (Zigba) belong to Montane Coniferous forests, whereas Aningeria and wild Coffee belong to Broadleaved Montane Rainforests.',
      question: {
        q: 'Which indigenous Ethiopian highland tree species is famous for its high-grade timber and was historically used as an anthelmintic herbal medicine against tapeworms?',
        opts: ['A) Podocarpus falcatus (Zigba)', 'B) Hagenia abyssinica (Kosso)', 'C) Acacia tortilis', 'D) Eucalyptus globulus'],
        ans: 'B',
        expl: 'Hagenia abyssinica (Kosso) is an indigenous montane tree whose dried female flowers were historically consumed across the highlands as an effective traditional cure for tapeworm infestations.'
      }
    },
    '4.2': {
      unitNum: 4,
      unitTitle: 'Natural Vegetation and Wildlife of Ethiopia',
      topicNum: '4.2',
      topicTitle: 'Endemic Wildlife of Ethiopia and Conservation',
      theory: `Due to isolated mountain massifs and unique ecological niches, Ethiopia possesses extraordinary biodiversity and high rates of biological endemism:

**Flagship Endemic Mammals:**
1. **Walia Ibex (*Capra walie*):** Strictly endemic to the rocky precipices and cliffs of **Simien Mountains National Park** (population recovered from $<200$ to $>900$).
2. **Ethiopian Wolf / Simien Red Fox (*Canis simensis*):** World\'s rarest canid, restricted to afro-alpine moorlands of **Bale Mountains National Park** and Simien Mountains. Feeds primarily on giant mole-rats.
3. **Mountain Nyala (*Tragelaphus buxtoni*):** Endemic spiral-horned antelope inhabiting montane woodland and heathlands of the **Bale Massif** and Arsi mountains.
4. **Gelada Baboon (*Theropithecus gelada*):** Highland grass-eating primate inhabiting gorges of the Central and North-Central plateaus.
5. **Swayne\'s Hartebeest (*Alcelaphus buselaphus swaynei*):** Endemic plains antelope preserved in **Senkelle Sanctuary** and Nechisar National Park.

**Major National Parks:**
- **Simien Mountains National Park:** UNESCO World Heritage site featuring dramatic pinnacles and endemic wildlife.
- **Bale Mountains National Park:** Highest concentration of afro-alpine biodiversity in Africa.
- **Awash National Park:** Famous for Beisa Oryx, Soemmerring\'s Gazelle, Awash river gorge and waterfalls.
- **Gambella National Park:** Vast open savanna supporting massive white-eared kob and Nile lechwe migrations.`,
      concepts: [
        'Biological Endemism: Species naturally found nowhere else on Earth due to geographic isolation.',
        'Afro-Alpine Specialist: The Ethiopian Wolf relies entirely on open afro-alpine grasslands above 3,000m for hunting rodents.',
        'Threats to Endemics: Overgrazing by domestic cattle, agricultural encroachment on alpine zones, illegal hunting, and rabies transmission from feral domestic dogs.'
      ],
      caseStudy: 'The recovery of the Walia Ibex in Simien Mountains National Park represents an international conservation success story, achieved through community-based ranger scouting, boundary demarcation, and eco-tourism revenue sharing.',
      examTrap: 'Match the endemic animal to its specific habitat: Walia Ibex = Simien Mountains ONLY; Mountain Nyala = Bale Mountains; Swayne\'s Hartebeest = Senkelle Sanctuary.',
      question: {
        q: 'Which national park in Ethiopia is recognized as a UNESCO World Heritage site and represents the exclusive global habitat of the Walia Ibex?',
        opts: ['A) Bale Mountains National Park', 'B) Simien Mountains National Park', 'C) Awash National Park', 'D) Gambella National Park'],
        ans: 'B',
        expl: 'Simien Mountains National Park is the only place in the world where the endangered Walia Ibex lives in the wild.'
      }
    },
    '4.3': {
      unitNum: 4,
      unitTitle: 'Natural Vegetation and Wildlife of Ethiopia',
      topicNum: '4.3',
      topicTitle: 'Deforestation, Protected Areas, and Biosphere Reserves',
      theory: `Historical forest cover in Ethiopia declined dramatically from approximately **40%** in the early 20th century to less than **4%** by the late 1990s due to agricultural land clearing, fuel-wood collection, charcoal production, and uncontrolled logging.

**Consequences of Forest Loss:**
- Accelerating topsoil erosion (losing over 1.5 billion metric tons of topsoil annually).
- Flash flooding, loss of river base-flow during dry seasons, and reservoir siltation.
- Severe habitat fragmentation threatening endemic fauna with local extinction.

**Conservation Strategies & Biosphere Reserves:**
1. **UNESCO Man and the Biosphere (MAB) Reserves:**
   - **Kafa Biosphere Reserve:** Conserves in-situ wild Coffea arabica gene pools.
   - **Yayu Coffee Forest Biosphere Reserve:** Preserves primary montane rainforest in Illubabor.
   - **Sheka Forest Biosphere Reserve:** Conserves biodiversity, sacred cultural forests, and pristine watershed ecosystems.
   - **Lake Tana Biosphere Reserve:** Wetland and aquatic biodiversity conservation.
2. **Participatory Forest Management (PFM):** Empowers local forest-dwelling communities to co-manage forest resources sustainably through non-timber forest products (wild coffee, forest honey, spices).`,
      concepts: [
        'Core, Buffer, and Transition Zones: Zoned architecture of UNESCO Biosphere Reserves balancing strict preservation with sustainable development.',
        'Non-Timber Forest Products (NTFPs): Harvesting honey, natural spices, and medicinal plants provides sustainable livelihood without felling timber.',
        'Eucalyptus Expansion: Fast-growing exotic tree planted for timber and fuelwood, but criticized for high water consumption and soil acidification.'
      ],
      caseStudy: 'Under Participatory Forest Management (PFM) agreements in Sheka and Kafa, local cooperatives earned premium fair-trade certification for forest honey and organic wild coffee, reducing illegal deforestation rates by over 75%.',
      examTrap: 'Eucalyptus is NOT an indigenous Ethiopian tree; it was introduced from Australia in the late 19th century (during Emperor Menelik II) to solve severe firewood and construction timber shortages around Addis Ababa.',
      question: {
        q: 'What is the primary conservation function of the Kafa and Yayu UNESCO Biosphere Reserves in southwestern Ethiopia?',
        opts: [
          'A) Commercial timber harvesting of exotic pine plantations',
          'B) In-situ conservation of the wild genetic diversity of Coffea arabica',
          'C) Expansion of intensive open-cast coal mining',
          'D) Eradication of native broadleaved rainforests'
        ],
        ans: 'B',
        expl: 'Kafa and Yayu are globally recognized for preserving the irreplaceable in-situ wild genetic gene pools of Coffea arabica within their original montane rainforest habitats.'
      }
    },
    '5.1': {
      unitNum: 5,
      unitTitle: 'Population of Ethiopia and Economic Activities',
      topicNum: '5.1',
      topicTitle: 'Population Growth, Dynamics, and Structure',
      theory: `Ethiopia is the second most populous country in Africa, with a population exceeding **120 million people**.

**Demographic Parameters:**
- **Crude Birth Rate (CBR):** $\\approx 32$ births per 1,000 population per year.
- **Crude Death Rate (CDR):** $\\approx 6$ deaths per 1,000 population per year (declined significantly due to improved immunization and health post coverage).
- **Rate of Natural Increase (RNI):** $\\text{RNI} = \\frac{\\text{CBR} - \\text{CDR}}{10} = \\frac{32 - 6}{10} = 2.6\\%$.
- **Total Fertility Rate (TFR):** $\\approx 4.1$ children per woman (higher in rural pastoralist areas, lower in Addis Ababa $\\approx 1.8$).

**Age-Sex Structure & Population Pyramid:**
- Characterized by an **expansive population pyramid** with a very broad base, indicating a high proportion of children ($> 40\\%$ under age 15) and a small proportion of elderly ($< 4\\%$ over age 65).
- **Dependency Ratio:** High young-age dependency ratio placing heavy socio-economic demand on public spending for primary education, pediatric healthcare, and youth employment generation.`,
      concepts: [
        'Rate of Natural Increase Formula: $\\text{RNI}(\\%) = \\frac{\\text{CBR} - \\text{CDR}}{10}$.',
        'Doubling Time Formula (Rule of 70): $\\text{Doubling Time} = \\frac{70}{\\text{RNI}(\\%)} = \\frac{70}{2.6} \\approx 27\\text{ years}$.',
        'Youthful Dependency Ratio Formula: $\\text{Dependency Ratio} = \\frac{P_{0-14} + P_{65+}}{P_{15-64}} \\times 100$.'
      ],
      caseStudy: 'Ethiopia\'s Health Extension Program (HEP) deployed over 40,000 female health extension workers across rural kebeles, drastically reducing infant and maternal mortality and increasing contraceptive prevalence.',
      examTrap: 'Always divide (CBR - CDR) by 10 to get percentage! If CBR = 35/1000 and CDR = 9/1000, RNI = (35 - 9)/10 = 2.6%.',
      question: {
        q: 'If a region in Ethiopia has a Crude Birth Rate of 36 per 1,000 and a Crude Death Rate of 8 per 1,000, what is its annual Rate of Natural Increase (RNI)?',
        opts: ['A) 28%', 'B) 2.8%', 'C) 0.28%', 'D) 4.4%'],
        ans: 'B',
        expl: 'RNI = (CBR - CDR) / 10 = (36 - 8) / 10 = 28 / 10 = 2.8% per annum.'
      }
    },
    '5.2': {
      unitNum: 5,
      unitTitle: 'Population of Ethiopia and Economic Activities',
      topicNum: '5.2',
      topicTitle: 'Spatial Distribution, Migration, and Urbanization',
      theory: `**Spatial Distribution Patterns:**
- Population distribution is highly uneven: over **80%** of the population lives in the highlands on less than **40%** of the national land area.
- Dense settlement corridors occur in the Shewan Plateau, Southern highlands (Enset zone reaching $>500\\text{ persons/km}^2$), and eastern Hararghe plateaus.
- Low density ($<25\\text{ persons/km}^2$) characterizes the peripheral arid lowlands of Afar, Somali, and Gambella.

**Internal Migration & Urbanization:**
- **Rural-to-Urban Migration:** Driven by rural "push" factors (land fragmentation, soil degradation, underemployment) and urban "pull" factors (higher education, modern health services, industrial job opportunities).
- **Urbanization Rate:** Approximately **22%**, but growing at one of the fastest rates in sub-Saharan Africa ($>4.5\\%$ annually).
- **Urban Primacy:** Addis Ababa is a primate city, many times larger than the next secondary cities (Dire Dawa, Hawassa, Adama, Bahir Dar, Mekelle, Gondar).`,
      concepts: [
        'Physiological Density: Population per unit of arable agricultural land (much higher than crude arithmetic density in highland zones).',
        'Push vs Pull Migration: Economic distress and lack of farmland push youths out of rural kebeles; wage employment and services pull them into urban centers.',
        'Secondary City Industrial Hubs: Industrial parks in Hawassa, Dire Dawa, and Kombolcha promote balanced regional urbanization.'
      ],
      caseStudy: 'The Hawassa Industrial Park, specialized in sustainable textile and apparel manufacturing, attracted over 30,000 manufacturing jobs, demonstrating how secondary cities can absorb rural youth migration effectively.',
      examTrap: 'Ethiopia is still predominantly rural (~78% rural), but its rate of urban growth is extremely rapid. Do not confuse low urbanization level with slow urban growth rate!',
      question: {
        q: 'Which of the following describes the current demographic settlement pattern of Ethiopia?',
        opts: [
          'A) Over 80% of the population lives in lowland pastoral zones',
          'B) Over 80% of the population is concentrated in highland areas above 1,500m elevation',
          'C) The population is uniformly distributed across all regions at 50 people/km²',
          'D) Over 75% of the population resides in major metropolitan cities'
        ],
        ans: 'B',
        expl: 'Over 80% of Ethiopia\'s population resides in the temperate, well-watered highlands above 1,500 meters altitude.'
      }
    },
    '5.3': {
      unitNum: 5,
      unitTitle: 'Population of Ethiopia and Economic Activities',
      topicNum: '5.3',
      topicTitle: 'Primary Economic Activities: Agriculture, Pastoralism, and Mining',
      theory: `Agriculture is the backbone of the Ethiopian economy, contributing over **33% of GDP**, employing **65% of the active labor force**, and generating over **75% of foreign exchange earnings**.

**Agricultural Systems:**
1. **Seed-Farming Complex:** Dominates in central and northern highlands; relies on oxen plow cultivation of cereals (**Teff**, wheat, barley, maize, sorghum, pulses, and oilseeds).
2. **Enset-Planting Complex:** Dominates in southwestern and southern highlands; high-density subsistence cultivation of enset (*Ensete ventricosum*), root crops, and coffee.
3. **Pastoralist Livestock Complex:** Practiced across the arid and semi-arid lowlands of Afar, Somali, and Borena; nomadic pastoralism managing cattle, camels, sheep, and goats (Ethiopia has the largest livestock herd in Africa with $>70$ million cattle).
4. **Commercial Agriculture:** Export-oriented greenhouse floriculture (Bishoftu, Ziway), large-scale irrigated sugar cane (Tendaho, Wonji, Omo-Kuraz), cotton, sesame, and tea estates.

**Mining and Industrial Development:**
- Gold (Lega Dembi in Shakiso, artisanal gold in Benishangul and Gambella), Tantalum (Kenticha), Potash (Danakil Depression), Marble, and Gemstones (opals in Wollo).`,
      concepts: [
        'Teff (Eragrostis tef): Indigenous gluten-free cereal grain endemic to the Ethiopian highlands, commanding high domestic market value.',
        'Coffee Arabica Export: Ethiopia is the birthplace and largest producer of Arabica coffee in Africa (Yirgacheffe, Sidama, Harar, Limu, Jimma varieties).',
        'Export Diversification: Floriculture (cut flowers) has emerged as a multi-million-dollar non-traditional export earner.'
      ],
      caseStudy: 'Specialty coffee from Yirgacheffe and Guji zones commands premium prices on global commodity exchanges due to distinctive floral and citrus cup profiles, providing livelihood income for millions of smallholder farming families.',
      examTrap: 'Teff is endemic to Ethiopia and is primarily a highland cereal crop (Woina Dega); it is NOT grown in the hot, arid Bereha lowlands.',
      question: {
        q: 'Which economic sector currently employs the majority of the Ethiopian labor force and generates the largest share of export revenue?',
        opts: ['A) Heavy Manufacturing', 'B) Agriculture and Agribusiness', 'C) Financial Technology', 'D) Commercial Aviation'],
        ans: 'B',
        expl: 'Agriculture employs over 65% of the labor force and produces the overwhelming majority of export earnings through coffee, oilseeds, pulses, and floriculture.'
      }
    }
  };

  // Determine which of the 15 topics matches this page
  let matchedKey = '1.1';
  if (chapNum === 1) {
    matchedKey = printedPage <= 12 ? '1.1' : printedPage <= 24 ? '1.2' : '1.3';
  } else if (chapNum === 2) {
    matchedKey = printedPage <= 50 ? '2.1' : printedPage <= 64 ? '2.2' : '2.3';
  } else if (chapNum === 3) {
    matchedKey = printedPage <= 94 ? '3.1' : printedPage <= 106 ? '3.2' : '3.3';
  } else if (chapNum === 4) {
    matchedKey = printedPage <= 130 ? '4.1' : printedPage <= 142 ? '4.2' : '4.3';
  } else {
    matchedKey = printedPage <= 170 ? '5.1' : printedPage <= 182 ? '5.2' : '5.3';
  }

  // Override if topicNum was passed
  if (topNum && topicCatalog[topNum]) {
    matchedKey = topNum;
  }

  const topicData = topicCatalog[matchedKey] || topicCatalog['1.1'];
  const sub = 'Geography';
  const gr = 'Grade 9';

  return `Federal Democratic Republic of Ethiopia • Ministry of Education
${gr} ${sub} Student Textbook — Page ${printedPage} of 200
Unit ${topicData.unitNum}: ${topicData.unitTitle} • Section ${topicData.topicNum}: ${topicData.topicTitle}

### Section ${topicData.topicNum}: ${topicData.topicTitle}

#### 1. Core Curriculum Theory & Geographical Overview
${topicData.theory}

---

#### 2. Key Curriculum Concepts & Spatial Principles
${topicData.concepts.map(c => `- **${c.split(':')[0]}:** ${c.split(':').slice(1).join(':').trim()}`).join('\n')}

---

#### 3. Real-World Case Study & Ethiopian Geographic Context
**Case Study Overview:**
${topicData.caseStudy}

---

#### 4. National Entrance Examination (EUEE) Strategy & High-Yield Insights
> **Examiner Insight & Trap Warning:**
> ${topicData.examTrap}

---

#### 5. National Examination Practice Review Questions
**Question:** ${topicData.question.q}
${topicData.question.opts.join('\n')}

**Correct Answer:** **${topicData.question.ans}**
*Detailed Explanation:* ${topicData.question.expl}`;
}

function gradeName(): string {
  return 'Grade 9';
}

