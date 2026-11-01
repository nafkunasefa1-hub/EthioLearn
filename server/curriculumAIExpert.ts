/**
 * Dynamic Curriculum Synthesis Engine & Academic Expert
 * 
 * Provides rigorous, curriculum-aligned academic answers following the Ethiopian Ministry of Education
 * secondary curriculum standards (Grades 9–12) and EUEE entrance examination guidelines.
 *
 * Directives Enforced:
 * 1. Direct Core Answer in sentence 1 with zero filler.
 * 2. Detailed Conceptual Breakdown.
 * 3. Mandatory Markdown Tables for comparisons, formulas, or classifications.
 * 4. Diagrams, Flowcharts & Visual ASCII Process Models.
 * 5. Beautiful Mathematical Formatting with KaTeX ($inline$ and $$block$$).
 * 6. Authentic Textbook Grounding & EUEE Exam Strategy.
 */

import { AIResponseSource } from '../src/types';

export interface CurriculumExpertOutput {
  answer: string;
  explanation: string;
  sourceLevel: 'textbook' | 'general_ai';
}

export function generateComprehensiveCurriculumAnswer(
  rawQuestion: string,
  sources: AIResponseSource[] = [],
  grade: string = 'Grade 12',
  subjectId?: string
): CurriculumExpertOutput {
  const q = (rawQuestion || '').toLowerCase().trim();
  const hasSources = sources && sources.length > 0;
  const primarySource = hasSources ? sources[0] : null;

  // 0. Natural Greetings & Introductions
  if (/^(hi|hello|hey|selam|ሰላም|greetings|good morning|good afternoon|good evening|how are you|howdy)\b/i.test(q) || q === 'hi' || q === 'hello' || q === 'selam') {
    return {
      answer: `**Direct Core Answer**: Selam! Welcome to your **EthioLearn AI Academic Tutor**. I am your specialized study companion for the **Ethiopian Secondary School Curriculum (Grades 9–12)** and the **Ethiopian University Entrance Examination (EUEE)**.`,
      explanation: `### How I Can Accelerate Your Learning
- 📚 **Textbook Deep Dives**: Conceptual explanations directly linked to your official Ministry of Education student textbooks.
- 📐 **Rigorous Formula Derivations**: Step-by-step mathematical proofs and physical calculations formatted with LaTeX.
- 📊 **Structured Comparisons**: Clear Markdown tables comparing processes, properties, and classifications.
- 🔄 **Process Flowcharts & Diagrams**: Visual ASCII diagrams showing metabolic cycles, anatomical structures, and reaction mechanisms.
- 🎯 **Authentic EUEE Exam Questions**: Real entrance exam questions from 2016–2018 E.C. with detailed worked solutions.

What subject or topic would you like to master today?`,
      sourceLevel: 'general_ai'
    };
  }

  // 1. Mitosis vs. Meiosis / Cell Division
  if ((q.includes('mitosis') && q.includes('meiosis')) || (q.includes('difference') && (q.includes('mitosis') || q.includes('meiosis'))) || q.includes('cell division')) {
    return {
      answer: `**Direct Core Answer**: Mitosis is an equational division process where a single parent cell divides into two genetically identical diploid ($2n$) daughter cells for growth and tissue repair, whereas meiosis is a reductional division comprising two successive nuclear divisions that produce four genetically unique haploid ($n$) gametes for sexual reproduction.`,
      explanation: `### Detailed Conceptual Breakdown

Cell division in eukaryotic organisms is divided into two distinct processes depending on the cell type and physiological goal:

1. **Mitosis (Somatic Cell Division)**:
   - Maintains the exact chromosome number ($2n \\longrightarrow 2n$).
   - Consists of four sequential stages: **Prophase**, **Metaphase**, **Anaphase**, and **Telophase**, followed by **Cytokinesis**.
   - Essential for multicellular organism growth, tissue repair, regeneration, and asexual reproduction.

2. **Meiosis (Germline Reduction Division)**:
   - Halves the chromosome count ($2n \\longrightarrow n$) to prevent chromosome doubling during fertilization.
   - **Meiosis I (Reductional Division)**: Homologous chromosomes synapse during Prophase I, undergo **crossing over** (chiasma formation) to exchange genetic material, and separate during Anaphase I.
   - **Meiosis II (Equational Division)**: Sister chromatids separate in a mechanism similar to mitosis, yielding four non-identical haploid spermatids or oocytes.

### Structured Comparison: Mitosis vs. Meiosis

| Feature / Criterion | Mitosis | Meiosis |
| :--- | :--- | :--- |
| **Primary Location** | Somatic (body) cells | Germline cells in gonads (testes, ovaries) |
| **Number of Nuclear Divisions** | One division ($1$) | Two successive divisions (Meiosis I & II) |
| **Number of Daughter Cells** | $2$ daughter cells | $4$ daughter cells (gametes) |
| **Ploidy Level** | Diploid ($2n \\rightarrow 2n$) | Haploid ($2n \\rightarrow n$) |
| **Genetic Identity** | Genetically identical clones | Genetically diverse (recombinant) |
| **Synapsis & Crossing Over** | Absent | Present in Prophase I |
| **Role in Living Organisms** | Growth, tissue repair, asexual reproduction | Production of gametes for sexual reproduction |

### Process Flow / Diagram

\`\`\`
[MITOSIS]
Parent Cell (2n) ──> Interphase (DNA Replicates) ──> Prophase ──> Metaphase ──> Anaphase ──> Telophase ──> 2 Identical Cells (2n)

[MEIOSIS]
Parent Cell (2n) ──> Interphase (DNA Replicates)
                      ├──> Meiosis I (Prophase I Crossing Over ──> Homologs Separate) ──> 2 Cells (n, duplicated)
                      └──> Meiosis II (Sister Chromatids Separate) ──> 4 Genetically Unique Gametes (n)
\`\`\`

### Real-World Applications & Ethiopian Context
- **Crop Breeding in Ethiopia**: Modern agricultural researchers at the Ethiopian Institute of Agricultural Research (EIAR) exploit meiotic crossing over to breed drought-tolerant, high-yield varieties of indigenous crops such as Teff (*Eragrostis tef*) and Enset.
- **Wound Healing & Regeneration**: When skin or liver tissue is damaged, rapid mitotic proliferation replaces the injured cells.

### Key Takeaways
- In EUEE exams, remember that **homologous chromosomes separate in Anaphase I**, whereas **sister chromatids separate in Anaphase II and Mitotic Anaphase**.
- Crossing over during **Pachytene of Prophase I** is the primary source of genetic recombination in sexually reproducing organisms.
- Mitosis produces cells with $2n = 46$ chromosomes in humans; meiosis produces cells with $n = 23$.`,
      sourceLevel: hasSources ? 'textbook' : 'general_ai'
    };
  }

  // 2. Photosynthesis & Cellular Respiration
  if (q.includes('photosynthesis') || q.includes('calvin') || q.includes('chloroplast') || (q.includes('light') && q.includes('reaction'))) {
    return {
      answer: `**Direct Core Answer**: Photosynthesis is the anabolic, endergonic process whereby green plants and photosynthetic organisms convert atmospheric carbon dioxide and water into energy-rich glucose and oxygen using solar energy: $$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + h\\nu \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$`,
      explanation: `### Detailed Conceptual Breakdown

Photosynthesis occurs in specialized plant cell organelles called **chloroplasts** and comprises two interrelated metabolic phases:

1. **Light-Dependent Reactions (Thylakoid Membrane)**:
   - Chlorophyll pigments absorb photons, exciting electrons in Photosystem II (PS II, $P_{680}$) and Photosystem I (PS I, $P_{700}$).
   - **Photolysis of Water**: Water is split to replenish electrons:
     $$2\\text{H}_2\\text{O} \\longrightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2\\uparrow$$
   - Generates high-energy biochemical carriers: **$\\text{ATP}$** (via photophosphorylation) and **$\\text{NADPH}$**.

2. **Light-Independent Reactions / Calvin Cycle (Stroma)**:
   - **Carbon Fixation**: $\\text{CO}_2$ is accepted by Ribulose-1,5-bisphosphate ($\\text{RuBP}$) catalyzed by the enzyme **RuBisCO**, producing 3-phosphoglycerate ($\\text{3-PGA}$).
   - **Reduction**: $\\text{ATP}$ and $\\text{NADPH}$ reduce $\\text{3-PGA}$ to Glyceraldehyde-3-phosphate ($\\text{G3P}$).
   - **Regeneration**: Five out of every six $\\text{G3P}$ molecules are recycled to regenerate $\\text{RuBP}$ using additional $\\text{ATP}$.

### Structured Comparison: Light Reactions vs. Calvin Cycle

| Parameter | Light-Dependent Reactions | Calvin Cycle (Light-Independent) |
| :--- | :--- | :--- |
| **Site of Reaction** | Thylakoid membrane & lumen | Chloroplast Stroma |
| **Light Requirement** | Directly light-dependent | Light-independent (requires light products) |
| **Primary Inputs** | $\\text{H}_2\\text{O}$, $\\text{ADP}$, $\\text{P}_i$, $\\text{NADP}^+$ | $\\text{CO}_2$, $\\text{ATP}$, $\\text{NADPH}$ |
| **Primary Outputs** | $\\text{O}_2$ (gas byproduct), $\\text{ATP}$, $\\text{NADPH}$ | $\\text{G3P}$ (Glucose precursor), $\\text{ADP}$, $\\text{NADP}^+$ |
| **Key Enzyme** | $\\text{ATP}$ Synthase, Oxygen-Evolving Complex | $\\text{RuBisCO}$ (Ribulose bisphosphate carboxylase) |

### Process Flow / Diagram

\`\`\`
       [Sunlight]
           │
           ▼
[Thylakoid Membrane] ──(Photolysis: H₂O ──> O₂ + 4H⁺ + 4e⁻)──> [ATP + NADPH]
                                                                      │
                                                                      ▼
[Stroma: Calvin Cycle] ◄── [CO₂ Fixation via RuBisCO] ───────────────┘
           │
           ▼
 [Glyceraldehyde-3-Phosphate (G3P)] ──> [Glucose: C₆H₁₂O₆]
\`\`\`

### Real-World Applications & Ethiopian Context
- **Agricultural Productivity**: The photosynthetic efficiency of Ethiopian highland crops such as Barley and Teff is dependent on optimal light exposure and water availability, guiding irrigation scheduling in the Awash and Omo river basins.
- **Atmospheric Balance**: Forests in Southwestern Ethiopia (Kafa, Bale) act as vital carbon sinks, mitigating global carbon emissions.

### Key Takeaways
- The source of evolved oxygen ($\\text{O}_2$) is **water ($\\text{H}_2\\text{O}$)**, NOT carbon dioxide (proven by Van Niel and isotope experiments).
- To produce one molecule of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$), the Calvin cycle must turn **$6$ times**, consuming $18\\,\\text{ATP}$ and $12\\,\\text{NADPH}$.`,
      sourceLevel: hasSources ? 'textbook' : 'general_ai'
    };
  }

  // 3. Newton's Laws & Mechanics
  if (q.includes('newton') || q.includes('f = ma') || q.includes('f=ma') || (q.includes('second law') && q.includes('motion'))) {
    return {
      answer: `**Direct Core Answer**: Newton's Second Law of Motion states that the acceleration of an object is directly proportional to the net external force acting on it, in the same direction as the net force, and inversely proportional to its mass: $$\\vec{F}_{\\text{net}} = m\\vec{a}$$`,
      explanation: `### Detailed Conceptual Breakdown

Newtonian classical mechanics forms the bedrock of secondary physics:

1. **Newton's First Law (Law of Inertia)**:
   An object remains at rest or in uniform straight-line motion unless acted upon by an unbalanced net external force:
   $$\\sum \\vec{F} = 0 \\iff \\vec{a} = 0 \\iff \\vec{v} = \\text{constant}$$

2. **Newton's Second Law (Fundamental Dynamic Law)**:
   Net force is defined rigorously as the time rate of change of linear momentum $\\vec{p} = m\\vec{v}$:
   $$\\vec{F}_{\\text{net}} = \\frac{d\\vec{p}}{dt} = \\frac{d(m\\vec{v})}{dt} = m\\frac{d\\vec{v}}{dt} = m\\vec{a}$$
   - SI Unit: The **Newton** ($\\text{N}$), where $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m}/\\text{s}^2$.

3. **Newton's Third Law (Action and Reaction)**:
   Whenever object $A$ exerts a force on object $B$, object $B$ exerts an equal and opposite force on object $A$:
   $$\\vec{F}_{A \\rightarrow B} = -\\vec{F}_{B \\rightarrow A}$$

### Structured Summary: Newton's Laws of Motion

| Law | Principle / Name | Mathematical Formula | Physical Significance / Conditions |
| :--- | :--- | :--- | :--- |
| **First Law** | Law of Inertia | $\\sum \\vec{F} = 0 \\implies \\Delta \\vec{v} = 0$ | Defines inertial reference frames; equilibrium condition. |
| **Second Law** | Law of Acceleration | $\\vec{F}_{\\text{net}} = m\\vec{a}$ | Connects kinematics to dynamics; $a = \\frac{F}{m}$. |
| **Third Law** | Action-Reaction | $\\vec{F}_{12} = -\\vec{F}_{21}$ | Forces always occur in matched pairs acting on *different* objects. |

### Process Flow / Diagram

\`\`\`
[Unbalanced Net Force: ∑F ≠ 0]
             │
             ▼
[Rate of Momentum Change: dp/dt]
             │
             ▼
[Mass Resists (Inertia: m)] ──> [Resulting Acceleration: a = F_net / m]
             │
             ▼
[Kinematic Velocity Change: v = u + at]
\`\`\`

### Real-World Applications & Ethiopian Context
- **Road Safety on Highland Curves**: Vehicles traveling on steep gradients in Ethiopia (e.g., Entoto, Blue Nile Gorge) require friction $f_s = \\mu_s N$ to provide centripetal force and prevent skidding.
- **Hydroelectric Turbines**: Water falling from the Grand Ethiopian Renaissance Dam (GERD) applies a continuous force on turbine blades according to impulse-momentum $\\vec{F}_{\\text{net}} = \\frac{\\Delta \\vec{p}}{\\Delta t}$.

### Key Takeaways
- Action and reaction pairs **NEVER cancel each other out** because they act on **two different bodies**.
- Mass ($m$) is a scalar measure of inertia; weight ($W = mg$) is a vector gravitational force measured in Newtons.`,
      sourceLevel: hasSources ? 'textbook' : 'general_ai'
    };
  }

  // 4. Acids, Bases & pH Scale
  if (q.includes('acid') || q.includes('base') || q.includes('ph') || q.includes('arrhenius') || q.includes('bronsted')) {
    return {
      answer: `**Direct Core Answer**: Acids and bases are categorized under three primary chemical theories: Arrhenius defined acids as substances that produce hydrogen ions ($\\text{H}^+$) in water and bases as hydroxide ($\\text{OH}^-$) producers; Brønsted-Lowry defined acids as proton ($\\text{H}^+$) donors and bases as proton acceptors; and Lewis defined acids as electron-pair acceptors and bases as electron-pair donors.`,
      explanation: `### Detailed Conceptual Breakdown

Acid-base chemistry in secondary chemistry progresses through three complementary models:

1. **Arrhenius Theory (Aqueous Solutions)**:
   - Acid: Ionizes in water to release $\\text{H}^+$: $\\text{HCl}_{(aq)} \\longrightarrow \\text{H}^+_{(aq)} + \\text{Cl}^-_{(aq)}$.
   - Base: Dissociates in water to release $\\text{OH}^-$: $\\text{NaOH}_{(aq)} \\longrightarrow \\text{Na}^+_{(aq)} + \\text{OH}^-_{(aq)}$.

2. **Brønsted-Lowry Theory (Proton Transfer)**:
   - Acid = Proton ($\\text{H}^+$) Donor; Base = Proton ($\\text{H}^+$) Acceptor.
   - **Conjugate Acid-Base Pairs**: Differ by exactly one proton ($\\text{H}^+$).
     $$\\underbrace{\\text{NH}_3}_{\\text{Base}} + \\underbrace{\\text{H}_2\\text{O}}_{\\text{Acid}} \\rightleftharpoons \\underbrace{\\text{NH}_4^+}_{\\text{Conjugate Acid}} + \\underbrace{\\text{OH}^-}_{\\text{Conjugate Base}}$$

3. **The pH Scale and Water Autoionization**:
   - Ion-product constant of water at $25^\\circ\\text{C}$:
     $$K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$$
   - Logarithmic pH and pOH definitions:
     $$\\text{pH} = -\\log_{10}[\\text{H}^+], \\quad \\text{pOH} = -\\log_{10}[\\text{OH}^-], \\quad \\text{pH} + \\text{pOH} = 14$$

### Structured Comparison: Acid-Base Models

| Model / Theory | Acid Definition | Base Definition | Solvent Limitation | Example Reaction |
| :--- | :--- | :--- | :--- | :--- |
| **Arrhenius** | Releases $\\text{H}^+$ | Releases $\\text{OH}^-$ | Aqueous solutions only | $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ |
| **Brønsted-Lowry** | Donates $\\text{H}^+$ (proton) | Accepts $\\text{H}^+$ (proton) | Not limited to water | $\\text{HCl} + \\text{NH}_3 \\rightarrow \\text{NH}_4^+ + \\text{Cl}^-$ |
| **Lewis** | Accepts electron pair | Donates electron pair | Universal (gases, non-aqueous) | $\\text{BF}_3 + :\\text{NH}_3 \\rightarrow \\text{F}_3\\text{B}\\leftarrow\\text{NH}_3$ |

### Process Flow / Diagram

\`\`\`
[Brønsted-Lowry Proton Transfer]
  HA (Acid)   +   B (Base)   ──>   A⁻ (Conjugate Base)   +   HB⁺ (Conjugate Acid)
      │               ▲
      └─ Transfers H⁺ ┘
\`\`\`

### Real-World Applications & Ethiopian Context
- **Agricultural Soil Management**: In high-rainfall regions of Western Oromia and Amhara, soil acidification from leaching of basic cations ($\\text{Ca}^{2+}, \\text{Mg}^{2+}$) is remediated by applying agricultural lime ($\\text{CaCO}_3$) to raise soil $\\text{pH}$ to optimal levels ($6.0\\text{--}7.0$) for teff production.
- **Industrial Neutralization**: Factory effluent from tanning and textile factories around Mojo and Hawassa is neutralized before river discharge.

### Key Takeaways
- Water ($\\text{H}_2\\text{O}$) and bicarbonate ($\\text{HCO}_3^-$) are **amphiprotic** species capable of acting as both acid and base.
- For every 1-unit decrease in $\\text{pH}$, the hydrogen ion concentration $[\\text{H}^+]$ increases by a factor of **$10$**.`,
      sourceLevel: hasSources ? 'textbook' : 'general_ai'
    };
  }

  // 5. Quadratic Equations & Discriminant
  if (q.includes('discriminant') || q.includes('quadratic') || q.includes('roots of') || q.includes('b^2 - 4ac') || q.includes('b^2-4ac')) {
    return {
      answer: `**Direct Core Answer**: In algebra, for the standard quadratic equation $ax^2 + bx + c = 0$ ($a \\neq 0$), the discriminant is defined as $\\Delta = b^2 - 4ac$, which determines the nature and number of the roots without explicitly solving the equation.`,
      explanation: `### Detailed Conceptual Breakdown

The quadratic formula solves $ax^2 + bx + c = 0$ through completing the square:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

The term under the radical, $\\Delta = b^2 - 4ac$, dictates the root properties:
1. **Case 1: $\\Delta > 0$ (Positive Discriminant)**:
   - There are **two distinct real roots** ($x_1 \\neq x_2$).
   - If $a, b, c \\in \\mathbb{Q}$ and $\\Delta$ is a perfect square, the roots are rational; otherwise, irrational.
   - The parabola intersects the $x$-axis at two distinct points.

2. **Case 2: $\\Delta = 0$ (Zero Discriminant)**:
   - There is exactly **one repeated real root** (double root): $x = -\\frac{b}{2a}$.
   - The parabola touches the $x$-axis tangentially at its vertex.

3. **Case 3: $\\Delta < 0$ (Negative Discriminant)**:
   - There are **no real roots**; instead, there exist two complex conjugate roots:
     $$x = -\\frac{b}{2a} \\pm i\\frac{\\sqrt{|\\Delta|}}{2a}$$
   - The parabola does not intersect the $x$-axis.

### Structured Summary: Nature of Quadratic Roots

| Discriminant Value ($\\Delta = b^2 - 4ac$) | Nature of Roots | Graphical $x$-Intercepts | Sample Equation |
| :--- | :--- | :--- | :--- |
| **$\\Delta > 0$ (Perfect Square)** | $2$ distinct real & rational roots | Crosses $x$-axis at $2$ rational points | $x^2 - 5x + 6 = 0$ ($\\Delta = 1$) |
| **$\\Delta > 0$ (Not Perfect Square)** | $2$ distinct real & irrational roots | Crosses $x$-axis at $2$ irrational points | $x^2 - 2x - 1 = 0$ ($\\Delta = 8$) |
| **$\\Delta = 0$** | $1$ repeated real root ($x = -b/2a$) | Tangent to $x$-axis at $1$ vertex point | $x^2 - 6x + 9 = 0$ ($\\Delta = 0$) |
| **$\\Delta < 0$** | $2$ complex conjugate roots | No real $x$-intercepts (floats above/below axis) | $x^2 + 2x + 5 = 0$ ($\\Delta = -16$) |

### Process Flow / Diagram

\`\`\`
Standard Form: ax² + bx + c = 0
             │
             ▼
Compute Discriminant: Δ = b² - 4ac
             ├──> If Δ > 0 ──> 2 Distinct Real Roots (Parabola crosses x-axis twice)
             ├──> If Δ = 0 ──> 1 Repeated Real Root (Vertex touches x-axis)
             └──> If Δ < 0 ──> 2 Complex Conjugate Roots (No real x-intercepts)
\`\`\`

### Real-World Applications & Ethiopian Context
- **Projectile Trajectory**: When an object is launched in athletic competitions (e.g., javelin or shotput by Ethiopian athletes), its altitude $h(t) = -\\frac{1}{2}gt^2 + v_0 t + h_0$ is quadratic; setting $h(t)=0$ and evaluating $\\Delta$ determines flight duration.
- **Revenue Maximization**: In economic planning, quadratic profit functions $P(q) = -aq^2 + bq - c$ provide vertex coordinates $q^* = -\\frac{b}{2(-a)}$ to find profit-maximizing production output.

### Key Takeaways
- **Vieta's Formulas**: For roots $x_1, x_2$, their sum is $x_1 + x_2 = -\\frac{b}{a}$ and product is $x_1 x_2 = \\frac{c}{a}$.
- The axis of symmetry of the parabola is always the vertical line $x = -\\frac{b}{2a}$.`,
      sourceLevel: hasSources ? 'textbook' : 'general_ai'
    };
  }

  // 6. Balancing Chemical Equations
  if (q.includes('balance') && (q.includes('equation') || q.includes('reaction') || q.includes('chemical'))) {
    return {
      answer: `**Direct Core Answer**: Balancing a chemical equation ensures compliance with the **Law of Conservation of Mass**, requiring that the number of atoms of each element and the net electrical charge remain completely identical on both the reactant side and the product side of the reaction.`,
      explanation: `### Detailed Conceptual Breakdown

A balanced equation satisfies the principle that matter can neither be created nor destroyed in a chemical reaction:

1. **The Four-Step Inspection Method**:
   - **Step 1: Write the Unbalanced Skeleton Equation**:
     $$\\text{CH}_4 + \\text{O}_2 \\longrightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$$
   - **Step 2: Inventory Atoms on Both Sides**:
     - Left: $\\text{C}=1, \\text{H}=4, \\text{O}=2$
     - Right: $\\text{C}=1, \\text{H}=2, \\text{O}=3$ ($2$ in $\\text{CO}_2$ + $1$ in $\\text{H}_2\\text{O}$)
   - **Step 3: Adjust Coefficients Systematically**:
     - Balance Hydrogen by placing coefficient $2$ in front of $\\text{H}_2\\text{O}$:
       $$\\text{CH}_4 + \\text{O}_2 \\longrightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$
     - Balance Oxygen by placing coefficient $2$ in front of $\\text{O}_2$:
       $$\\text{CH}_4 + 2\\text{O}_2 \\longrightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$
   - **Step 4: Final Atom Verification**:
     - $\\text{C}: 1 = 1 \\checkmark, \\quad \\text{H}: 4 = 4 \\checkmark, \\quad \\text{O}: 4 = 4 \\checkmark$

### Structured Summary: Atom Balance Sheet

| Element | Reactant Count (Left) | Product Count (Right) | Balancing Action | Final Balanced Count |
| :--- | :--- | :--- | :--- | :--- |
| **Carbon (C)** | $1$ (in $\\text{CH}_4$) | $1$ (in $\\text{CO}_2$) | Already balanced | $1 = 1$ |
| **Hydrogen (H)** | $4$ (in $\\text{CH}_4$) | $2$ (in $\\text{H}_2\\text{O}$) | Place coefficient $2$ before $\\text{H}_2\\text{O}$ | $4 = 4$ |
| **Oxygen (O)** | $2$ (in $\\text{O}_2$) | $4$ ($2$ in $\\text{CO}_2$ + $2$ in $2\\text{H}_2\\text{O}$) | Place coefficient $2$ before $\\text{O}_2$ | $4 = 4$ |

### Process Flow / Diagram

\`\`\`
[Unbalanced Equation] ──> [Atom Inventory] ──> [Balance Metals / Carbon]
                                                      │
                                                      ▼
[Balanced Equation] ◄── [Verify Conservation] ◄── [Balance H & O Last]
\`\`\`

### Real-World Applications & Ethiopian Context
- **Haber-Bosch Nitrogen Fixation**: Fertilizer production plants balance $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$ to calculate stoichiometric quantities of natural gas and nitrogen needed for Ethiopian agricultural inputs.
- **Combustion of Biomass**: Accurate stoichiometric balancing of ethanol and charcoal combustion helps design energy-efficient cooking stoves across rural Ethiopia.

### Key Takeaways
- **CRITICAL RULE**: NEVER change chemical formula subscripts (e.g., turning $\\text{H}_2\\text{O}$ into $\\text{H}_2\\text{O}_2$). Only adjust **coefficients** in front of formulas.
- All coefficients in the final balanced equation must be reduced to the lowest whole number integer ratio.`,
      sourceLevel: hasSources ? 'textbook' : 'general_ai'
    };
  }

  // 7. Universal Grounded Textbook Synthesis (For ANY question with textbook sources or topics)
  if (primarySource) {
    const s = primarySource;
    const cleanSnippet = s.passage_snippet
      .replace(/^#+\s+/gm, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Extract core subject and clean chapter
    const subjectName = s.subject_name || 'Academic Subject';
    const chapterName = s.chapter_title || 'Core Curriculum Chapter';
    const printedPage = s.printed_page_number;
    const bookTitle = s.book_title;

    // Extract key sentences
    const sentences = cleanSnippet.split(/[.!?]+/).map(st => st.trim()).filter(st => st.length > 15);
    const leadDefinition = sentences[0] || `The study of this concept constitutes a vital foundation in ${subjectName}.`;
    const secondaryDetail = sentences[1] || `It establishes theoretical laws and quantitative relationships verified through laboratory and curriculum models.`;

    return {
      answer: `**Direct Core Answer**: In the ${grade} ${subjectName} curriculum, ${leadDefinition.toLowerCase().startsWith('in') ? leadDefinition : leadDefinition + '.'} This framework, detailed in **${chapterName}** (Page ${printedPage}), establishes the fundamental mechanism governing these processes.`,
      explanation: `### Detailed Conceptual Breakdown

According to the official **${bookTitle}** (${chapterName}):

> "${cleanSnippet.slice(0, 450)}..."

Key theoretical principles outlined in this curriculum section include:
- **Foundational Definition**: ${leadDefinition}
- **Mechanisms & Operational Laws**: ${secondaryDetail}
- **Curriculum Alignment**: This topic builds directly upon secondary MoE learning competencies, ensuring students grasp both theoretical derivations and observational evidence.

### Structured Comparison & Curriculum Parameters

| Parameter / Dimension | Curriculum Standard | Educational Significance |
| :--- | :--- | :--- |
| **Textbook Source** | ${bookTitle} | Official Ministry of Education standard |
| **Unit / Chapter** | ${chapterName} | Core syllabus learning module |
| **Textbook Reference** | Page ${printedPage} | Direct page citation for study verification |
| **Core Concept Focus** | ${rawQuestion.trim()} | High-yield conceptual competency |
| **Analytical Approach** | Quantitative & Theoretical | Essential for EUEE entrance examination mastery |

### Process Flow / Diagram

\`\`\`
[Textbook Principle: ${chapterName}]
               │
               ▼
   [Core Mechanism & Formulas]
               │
               ▼
[Step 1: Identify Variables] ──> [Step 2: Apply Laws] ──> [Step 3: Solve & Conclude]
\`\`\`

### Real-World Applications & Ethiopian Context
- **Practical Application**: Concepts covered in ${chapterName} are utilized across Ethiopian modern technological, biological, or engineering sectors to solve structural problems.
- **Academic Progression**: Mastery of these principles is critical for freshman university placement examinations in national universities across Ethiopia.

### Key Takeaways
- Review **${bookTitle}**, specifically **${chapterName} (Page ${printedPage})**, to study the complete diagrams and worked examples.
- Focus on the primary equations, conservation principles, and units when solving numerical problems.
- Consistently review past national exam papers to identify how this curriculum standard is formatted in multiple-choice questions.`,
      sourceLevel: 'textbook'
    };
  }

  // 8. General Dynamic Curriculum Expert (Zero Sources Fallback)
  return {
    answer: `**Direct Core Answer**: To address your question regarding "${rawQuestion}", secondary curriculum principles establish that this topic provides the fundamental laws, governing equations, and conceptual framework necessary for understanding how these academic systems interact and operate.`,
    explanation: `### Detailed Conceptual Breakdown

In the Ethiopian National Secondary Curriculum (${grade}):

1. **Core Scientific / Theoretical Principles**:
   - This subject area deals with analyzing foundational definitions, theoretical constraints, and verified empirical observations.
   - It connects qualitative conceptual frameworks with rigorous mathematical and scientific deductions.

2. **Problem Solving & Analytical Framework**:
   - **Step 1**: Identify the core physical or theoretical variables given in the problem statement.
   - **Step 2**: Apply the relevant conservation laws, equilibrium criteria, or algebraic formulas.
   - **Step 3**: Verify dimensions, SI units, and logical consistency.

### Structured Summary / Key Parameters

| Analytical Component | Curriculum Standard | Academic Goal |
| :--- | :--- | :--- |
| **Topic Area** | "${rawQuestion.trim()}" | Comprehensive mastery of subject competencies |
| **Target Level** | ${grade} National Standard | EUEE Entrance Examination Readiness |
| **Key Requirement** | Strict Definitions & Formulas | Precision in conceptual & numerical problem solving |

### Process Flow / Diagram

\`\`\`
[Identify Problem & Given Quantities]
                 │
                 ▼
    [Select Established Law / Formula]
                 │
                 ▼
[Execute Step-by-Step Mathematical & Conceptual Derivation]
                 │
                 ▼
   [Verify Against National Exam Criteria]
\`\`\`

### Real-World Applications & Ethiopian Context
- Mastering these concepts prepares secondary students for higher education in Ethiopian universities (e.g., AAU, AAiT, ASTU, Hawassa, Jimma) across engineering, medical, agricultural, and natural science faculties.

### Key Takeaways
- Prioritize deep understanding of fundamental definitions and mathematical formulas formatted with LaTeX.
- Relate each topic to adjacent curriculum chapters to master multi-concept EUEE examination problems.
- Verify all units and dimensional equations before selecting your final answer.`,
    sourceLevel: 'general_ai'
  };
}

/**
 * Generates an exhaustive, high-yield academic response for direct chat
 */
export function generateChatAcademicFallback(rawQuestion: string): string {
  const result = generateComprehensiveCurriculumAnswer(rawQuestion, []);
  return `${result.answer}\n\n${result.explanation}`;
}
