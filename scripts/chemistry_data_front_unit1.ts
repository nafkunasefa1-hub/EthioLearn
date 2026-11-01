// Front matter (1-8) and Unit 1: Acid-Base Equilibria (9-63)
export function getUnit1AndFrontPage(pageNum: number): string {
  // Front Matter
  if (pageNum === 1) {
    return `# CHEMISTRY STUDENT TEXTBOOK — GRADE 12
**FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA • MINISTRY OF EDUCATION**
Hawassa University • GEQIP-E National Curriculum Standard
**Cover Topic**: Polymers, Chemical Equilibria, Electrochemistry, Industrial & Environmental Chemistry`;
  }
  if (pageNum === 2) {
    return `### Take Good Care of this Textbook
This textbook is the property of your school. Take good care not to damage or lose it.
Here are 10 ideas to help take care of the book:
1. Cover the book with protective material, such as plastic, old newspapers or magazines.
2. Always keep the book in a clean dry place.
3. Be sure your hands are clean when you use the book.
4. Do not write on the cover or inside pages.
5. Use a piece of paper or cardboard as a bookmark.
6. Never tear or cut out any pictures or pages.
7. Repair any torn pages with paste or tape.
8. Pack the book carefully when you place it in your school bag.
9. Handle the book with care when passing it to another person.
10. When using a new book for the first time, lay it on its back. Open only a few pages at a time. Press lightly along the bound edge as you turn the pages. This will keep the cover in good condition.`;
  }
  if (pageNum === 3) {
    return `### CHEMISTRY STUDENT TEXTBOOK — GRADE 12
**Writers**:
- Hailu Shiferaw (PhD)
- Muluken Aklilu (PhD)

**Editors**:
- Chala Regasa (MSc) — Content Editor
- Taye Hirpassa (BSc., MA) — Curriculum Editor
- Meseret Getnet (PhD) — Language Editor

**Illustrator**: Asresahegn Kassaye (MSc)
**Designer**: Daniel Tesfay (MSc)

**Evaluators**:
- Tolessa Mergo Roro (BSc., MEd)
- Nega Gichile (BSc., MA)
- Sefiw Melesse (MSc.)

*Federal Democratic Republic of Ethiopia Ministry of Education • Hawassa University*`;
  }
  if (pageNum === 4) {
    return `### Publication & Copyright Notice
First Published August 2023 by the Federal Democratic Republic of Ethiopia, Ministry of Education, under the General Education Quality Improvement Program for Equity (GEQIP-E) supported by the World Bank, UK FCDO, Finland Ministry for Foreign Affairs, Royal Norwegian Embassy, UNICEF, GPE, and Danish Ministry of Foreign Affairs.

© 2023 by the Federal Democratic Republic of Ethiopia, Ministry of Education. All rights reserved.
ISBN: 978-99990-0-019-2
Printed by: GRAVITY GROUP IND LLC, Sharjah, UNITED ARAB EMIRATES
Under Ministry of Education Contract no. MOE/GEQIP-E/LICB/G-01/23`;
  }
  if (pageNum === 5) {
    return `### Table of Contents — Unit 1: Acid-Base Equilibria (Pages 1–55)
- 1.1 Acid-Base Concepts (Page 3)
  - 1.1.1 Arrhenius Concept of Acids and Bases (Page 3)
  - 1.1.2 Brønsted-Lowry Concept of Acids and Bases (Page 5)
  - 1.1.2.1 Conjugate Acid-Base Pairs (Page 6)
  - 1.1.2.2 Strengths of Conjugate Acid-Base Pairs (Page 8)
  - 1.1.2.3 Amphiprotic Species (Page 9)
  - 1.1.2.4 Autoionization of Water and Ammonia (Page 10)
  - 1.1.3 Lewis Concept of Acids and Bases (Page 11)
- 1.2 Ionic Equilibria of Weak Acids and Bases (Page 14)
  - 1.2.1 Ionization of Water (Page 15)
  - 1.2.2 Measures of the Strength of Acids and Bases in Aqueous Solution (Page 22)
  - 1.2.2.1 Extent of Dissociation (Page 22)
  - 1.2.2.2 pH and pOH (Page 23)
  - 1.2.2.3 Percent Ionization (Page 23)
  - 1.2.2.4 Dissociation Constants Ka and Kb (Page 24)
  - 1.2.2.5 Polyprotic Acids (Page 31)`;
  }
  if (pageNum === 6) {
    return `### Table of Contents — Unit 2: Electrochemistry (Pages 56–134)
- 2.1 Oxidation-Reduction Reactions (Page 57)
  - 2.1.1 Oxidation and Reduction Definitions (Page 57)
  - 2.1.2 Oxidation Numbers (Page 58)
  - 2.1.3 Balancing Redox Reactions: Oxidation Number Method (Page 60)
  - 2.1.4 Balancing Redox Reactions: Ion-Electron Method (Page 62)
- 2.2 Electrolysis of Aqueous Solutions (Page 66)
  - 2.2.1 Electrical Conduction: Metallic vs. Electrolytic (Page 66)
  - 2.2.2 Electrolytic Cells (Page 67)
  - 2.2.3 Preferential Discharge of Ions (Page 69)
  - 2.2.4 Molten NaCl Electrolysis (Page 71)
  - 2.2.5 Concentrated Brine Electrolysis (Page 73)
  - 2.2.6 Dilute Sulfuric Acid Electrolysis (Page 76)
  - 2.2.7 Copper(II) Sulfate Electrolysis (Page 78)
- 2.3 Quantitative Aspects of Electrolysis (Page 80)
  - 2.3.1 Faraday's First Law (Page 80)
  - 2.3.2 Faraday's Second Law (Page 83)
- 2.4 Industrial Application of Electrolysis (Page 86)
- 2.5 Voltaic Cells & Corrosion (Page 92)`;
  }
  if (pageNum === 7) {
    return `### Table of Contents — Unit 3: Industrial Chemistry & Unit 4: Polymers
#### Unit 3: Industrial Chemistry in Ethiopia (Pages 135–212)
- 3.1 Introduction to Industrial Chemistry (Page 136)
- 3.2 Natural Resources in Ethiopia (Page 138)
- 3.3 Manufacturing of Valuable Chemicals (Page 142)
  - Ammonia (Haber-Bosch Process)
  - Nitric Acid (Ostwald Process)
  - Sulfuric Acid (Contact Process)
  - Sodium Carbonate (Solvay Process)
  - DAP & Urea Chemical Fertilizers
- 3.4 Manufacturing Industries in Ethiopia (Page 174)
  - Cement (Mugher, Derba, Dangote)
  - Sugar (Wonji, Shoa, Finchaa, Metehara)
  - Tannery, Glass, Ceramics, Pulp & Paper, Soaps

#### Unit 4: Polymers (Pages 213–239)
- 4.1 Introduction to Polymers (Page 214)
- 4.2 Polymerization: Addition and Condensation (Page 215)
- 4.3 Classification of Polymers (Page 224)`;
  }
  if (pageNum === 8) {
    return `### Table of Contents — Unit 5: Environmental Chemistry (Pages 240–288)
- 5.1 Introduction and Components of Environment (Page 241)
  - Atmosphere, Hydrosphere, Lithosphere, Biosphere
  - Biogeochemical Cycles: Carbon, Nitrogen, Oxygen, Water
- 5.2 Environmental Pollution (Page 255)
  - Air Pollution, Smog, Acid Rain, Ozone Layer Depletion
  - Water Pollution, BOD, Heavy Metals, Eutrophication
  - Soil Pollution and Solid Waste
- 5.3 Global Warming and Climate Change (Page 269)
  - Greenhouse Gases and Thermal Radiation Trapping
- 5.4 Green Chemistry and Cleaner Production (Page 275)
  - 12 Principles of Green Chemistry & Atom Economy
- Appendix & References (Pages 289–298)`;
  }

  // Printed Pages 1 - 55 (PDF pages 9 - 63)
  const p = pageNum - 8;
  return getUnit1ContentByPrintedPage(p);
}

function getUnit1ContentByPrintedPage(p: number): string {
  if (p === 1) {
    return `# UNIT 1: ACID-BASE EQUILIBRIA

### Unit Outcomes
At the end of this unit, you will be able to:
- Describe the drawbacks of the Arrhenius acid-base concepts.
- Define Brønsted-Lowry and Lewis concepts of acids and bases.
- Describe the dissociation of water, weak monoprotic and polyprotic acids, and weak bases.
- Solve equilibrium problems involving concentration of reactants and products, Ka, Kb, pH, and pOH.
- Discuss the common ion effect, buffer solution, hydrolysis of salts, acid-base indicators, and acid-base titrations.
- Explain how buffering action affects our daily lives using examples.
- Determine the equivalents of acid or base that are required to neutralize a specific amount of acid or base.
- Predict, in qualitative terms, whether a solution of a specific salt will be acidic, basic, or neutral.
- Explain how to solve problems involving concentration and pH of acid-base titration.
- Write chemical equations to show differences in the three definitions of acids and bases.`;
  }
  if (p === 2) {
    return `### Start-up Activity
You have learnt acid-base concepts and properties in earlier grades. Discuss the following questions in groups:
1. Explain the properties of acids and bases.
2. What do you observe when the following indicators are added to the solutions listed in the table?

| Solution | Red Litmus Paper | Blue Litmus Paper | Phenolphthalein | Methyl Orange |
| :--- | :--- | :--- | :--- | :--- |
| Acetic acid solution | Remains Red | Turns Red | Colorless | Red |
| Hydrochloric acid | Remains Red | Turns Red | Colorless | Red |
| Sodium chloride | Remains Red | Remains Blue | Colorless | Yellow |
| Ammonia solution | Turns Blue | Remains Blue | Pink | Yellow |
| Lemon juice | Remains Red | Turns Red | Colorless | Red |

Common household acids include acetic acid (CH3COOH, in vinegar), citric acid (in citrus fruits), and phosphoric acid (H3PO4, in beverages). Sodium hydroxide (NaOH) and ammonia (NH3) are household bases.`;
  }
  if (p === 3) {
    return `### 1.1 Acid-Base Concepts
At the end of this subunit, you will be able to:
- Define acid and base by Arrhenius, Brønsted-Lowry, and Lewis concepts.
- Give examples of each type of acid and base.
- Explain what conjugate acids and conjugate bases are.
- Identify conjugate acid-base pairs from chemical equations.
- Write equations for the self-ionization of water and ammonia.
- Explain what is meant by amphiprotic species.

### 1.1.1 Arrhenius Concept of Acids and Bases
In 1884, the Swedish chemist Svante Arrhenius defined acids and bases in aqueous solutions:
- **Arrhenius Acid**: A substance that releases hydrogen ions (H+) or hydronium ions (H3O+) in aqueous solution.
  HCl(aq) -> H+(aq) + Cl-(aq)
- **Arrhenius Base**: A substance that dissociates in water to yield hydroxide ions (OH-).
  NaOH(aq) -> Na+(aq) + OH-(aq)`;
  }
  if (p === 4) {
    return `### Drawbacks and Limitations of Arrhenius Concept
Although the Arrhenius theory was a major breakthrough, it has notable limitations:
1. **Restricted to Aqueous Solutions**: It only applies to reactions in water. It cannot explain acid-base behavior in non-aqueous solvents (e.g., liquid ammonia or benzene) or in the gas phase.
2. **Cannot Explain Basic Nature of Ammonia**: Ammonia (NH3) lacks a hydroxide group (OH-) in its formula, yet it turns red litmus paper blue and neutralizes acids.
3. **Does Not Account for Basic Oxides**: Metal oxides like CaO and Na2O behave as bases but do not contain OH- groups directly.
4. **Nature of Hydrogen Ion**: The H+ ion is a bare proton with an extremely high charge density. In water, it does not exist freely; it hydrates immediately to form the hydronium ion (H3O+).`;
  }
  if (p === 5) {
    return `### 1.1.2 Brønsted-Lowry Concept of Acids and Bases
In 1923, Danish chemist Johannes Brønsted and English chemist Thomas Lowry independently proposed a broader definition:
- **Brønsted-Lowry Acid**: A proton (H+) donor.
- **Brønsted-Lowry Base**: A proton (H+) acceptor.

Consider the reaction of ammonia gas with water:
NH3(aq) + H2O(l) <=> NH4+(aq) + OH-(aq)
Here, H2O donates a proton to NH3, acting as a Brønsted-Lowry acid. NH3 accepts the proton, acting as a Brønsted-Lowry base.

In the reverse reaction:
NH4+(aq) + OH-(aq) <=> NH3(aq) + H2O(l)
NH4+ donates a proton to OH-, acting as the acid, while OH- accepts the proton, acting as the base.`;
  }
  if (p === 6) {
    return `### 1.1.2.1 Conjugate Acid-Base Pairs
A **conjugate acid-base pair** consists of two species that differ from each other by only one proton (H+).
- **Conjugate Base**: The species formed when an acid loses a proton.
  Acid -> Conjugate Base + H+
- **Conjugate Acid**: The species formed when a base accepts a proton.
  Base + H+ -> Conjugate Acid

In the reaction:
CH3COOH(aq) + H2O(l) <=> H3O+(aq) + CH3COO-(aq)
- CH3COOH is an acid; its conjugate base is CH3COO-.
- H2O acts as a base; its conjugate acid is H3O+.`;
  }
  if (p === 7) {
    return `### Table 1.1: Conjugate Acid-Base Pairs in Acid-Base Reactions

| Acid | + Base | <=> Conjugate Base | + Conjugate Acid |
| :--- | :--- | :--- | :--- |
| HF | H2O | F- | H3O+ |
| H2SO4 | H2O | HSO4- | H3O+ |
| NH4+ | H2O | NH3 | H3O+ |
| H2O | NH3 | OH- | NH4+ |
| HCO3- | OH- | CO3 2- | H2O |
| H2PO4- | H2O | HPO4 2- | H3O+ |

Notice that the conjugate base always has one fewer hydrogen atom and one more unit of negative charge than the parent acid.`;
  }
  if (p === 8) {
    return `### 1.1.2.2 Strengths of Conjugate Acid-Base Pairs
There is an inverse relationship between the strength of an acid and the strength of its conjugate base:
- The stronger an acid, the weaker its conjugate base.
- The stronger a base, the weaker its conjugate acid.

For example, HCl is a very strong acid that ionizes completely in water. Its conjugate base, Cl-, is an exceptionally weak base that has virtually no tendency to accept a proton in aqueous solution.
Conversely, acetic acid (CH3COOH) is a weak acid, meaning its conjugate base, acetate (CH3COO-), has a modest affinity for protons and acts as a weak base.

Relative strength of common acids:
HClO4 > HCl > HNO3 > H3O+ > HSO4- > H3PO4 > CH3COOH > H2CO3 > H2S > NH4+ > HCN > HCO3- > H2O > NH3`;
  }
  if (p === 9) {
    return `### 1.1.2.3 Amphiprotic Species
An **amphiprotic substance** is one that can act either as a proton donor (acid) or as a proton acceptor (base), depending on the nature of the reacting substance.

Water is the most common example of an amphiprotic substance:
1. Acting as a base (accepting H+ from HCl):
   HCl(aq) + H2O(l) -> H3O+(aq) + Cl-(aq)
2. Acting as an acid (donating H+ to NH3):
   NH3(aq) + H2O(l) <=> NH4+(aq) + OH-(aq)

Other important amphiprotic ions:
- Hydrogen carbonate ion (HCO3-):
  With acid: HCO3- + H3O+ -> H2CO3 + H2O
  With base: HCO3- + OH- -> CO3 2- + H2O
- Dihydrogen phosphate ion (H2PO4-) and Hydrogen sulfate ion (HSO4-).`;
  }
  if (p === 10) {
    return `### 1.1.2.4 Autoionization of Water and Ammonia
Because water is amphiprotic, two water molecules can react with each other in a process called **autoionization** (or self-ionization):
H2O(l) + H2O(l) <=> H3O+(aq) + OH-(aq)
One water molecule acts as a Brønsted acid (donating H+) and the other acts as a Brønsted base (accepting H+).

Similarly, pure liquid ammonia undergoes self-ionization:
NH3(l) + NH3(l) <=> NH4+ + NH2-
Here, ammonium (NH4+) is the conjugate acid of ammonia, and amide (NH2-) is the conjugate base of ammonia.`;
  }
  if (p === 11) {
    return `### 1.1.3 Lewis Concept of Acids and Bases
In 1923, American chemist Gilbert N. Lewis proposed an even broader definition based on electron pairs:
- **Lewis Acid**: An electron-pair acceptor (an electrophile).
- **Lewis Base**: An electron-pair donor (a nucleophile).

The reaction between a Lewis acid and a Lewis base results in the formation of a **coordinate covalent bond** (dative bond) to yield an acid-base adduct:
BF3 + :NH3 -> F3B-NH3
- BF3 has an incomplete valence octet (6 valence electrons on boron) and accepts an electron pair.
- :NH3 has a lone pair of electrons on nitrogen and donates it.`;
  }
  if (p === 12) {
    return `### Examples and Classification of Lewis Acids and Bases
**Lewis Acids include**:
1. Molecules with incomplete octets: BF3, AlCl3, BCl3.
2. Simple metal cations: Fe3+, Cu2+, Al3+, Zn2+, Ag+.
   Example: Cu2+ + 4NH3 -> [Cu(NH3)4]2+ (Deep blue complex ion).
3. Molecules with polar double bonds: CO2, SO2, SO3.
   Example: CO2 + OH- -> HCO3-.

**Lewis Bases include**:
1. Neutral molecules with lone pairs: H2O, NH3, alcohols, ethers.
2. Anions: OH-, Cl-, CN-, F-, I-.`;
  }
  if (p === 13) {
    return `### Exercise 1.1 & Summary of Acid-Base Theories
1. Identify the Brønsted-Lowry acid, base, conjugate acid, and conjugate base in:
   a. HNO2(aq) + H2O(l) <=> NO2-(aq) + H3O+(aq)
   b. NH3(aq) + H2S(aq) <=> NH4+(aq) + HS-(aq)
2. Which of the following species are Lewis acids, and which are Lewis bases?
   a. Fe3+  b. NH3  c. BF3  d. F-  e. SO3
3. Explain why all Brønsted-Lowry bases are Lewis bases, but not all Brønsted-Lowry acids are Lewis acids.

**Comparison Table of Acid-Base Theories**:
- Arrhenius: Acid yields H+ in water; Base yields OH- in water.
- Brønsted-Lowry: Acid donates H+; Base accepts H+.
- Lewis: Acid accepts electron pair; Base donates electron pair.`;
  }
  if (p === 14) {
    return `### 1.2 Ionic Equilibria of Weak Acids and Bases
At the end of this subunit, you will be able to:
- Explain the autoionization of water and calculate Kw.
- Define pH and pOH and convert between [H3O+], [OH-], pH, and pOH.
- Distinguish between strong and weak electrolytes.
- Write expressions for acid dissociation constant (Ka) and base dissociation constant (Kb).
- Calculate percent ionization of weak acids and weak bases.
- Explain the ionization behavior of polyprotic acids.

Weak acids and weak bases do not ionize completely in water. Instead, a dynamic equilibrium is established between the un-ionized molecules and the ions produced.`;
  }
  if (p === 15) {
    return `### 1.2.1 Ionization of Water and the Ion Product Kw
Autoionization of water:
2H2O(l) <=> H3O+(aq) + OH-(aq)
The equilibrium expression is:
Kc = ([H3O+][OH-]) / [H2O]^2

Since water is present in vast excess, its concentration is effectively constant (55.5 M). Multiplying Kc by [H2O]^2 yields the **ion-product constant of water (Kw)**:
Kw = [H3O+][OH-]

At 25°C (298 K):
Kw = 1.0 x 10^-14
In pure water, stoichiometry requires [H3O+] = [OH-]:
[H3O+] = [OH-] = sqrt(1.0 x 10^-14) = 1.0 x 10^-7 M.`;
  }
  if (p === 16) {
    return `### Effect of Temperature on Kw and Solution Classification
The autoionization of water is an endothermic process:
2H2O(l) + heat <=> H3O+(aq) + OH-(aq)
According to Le Chatelier's principle, increasing the temperature shifts the equilibrium to the right. Therefore, Kw increases as temperature increases:
- At 0°C: Kw = 1.14 x 10^-15
- At 25°C: Kw = 1.00 x 10^-14
- At 50°C: Kw = 5.47 x 10^-14

**Classification of Aqueous Solutions at 25°C**:
- **Neutral Solution**: [H3O+] = [OH-] = 1.0 x 10^-7 M
- **Acidic Solution**: [H3O+] > [OH-], so [H3O+] > 1.0 x 10^-7 M
- **Basic Solution**: [OH-] > [H3O+], so [OH-] > 1.0 x 10^-7 M`;
  }
  if (p === 17) {
    return `### 1.2.2.2 pH and pOH Scales
In 1909, the Danish biochemist Søren Sørensen devised the **pH scale** to express hydronium ion concentrations conveniently:
pH = -log[H3O+]   <=>   [H3O+] = 10^-pH

Similarly, pOH is defined as:
pOH = -log[OH-]   <=>   [OH-] = 10^-pOH

Taking the negative logarithm of Kw:
-log(Kw) = -log([H3O+][OH-]) = -log[H3O+] + (-log[OH-])
pKw = pH + pOH

At 25°C, since Kw = 1.0 x 10^-14:
pH + pOH = 14.00
- Acidic: pH < 7.00
- Neutral: pH = 7.00
- Basic: pH > 7.00`;
  }
  if (p === 18) {
    return `### Worked Examples: pH and pOH Calculations
**Example 1.1**:
Calculate the pH of a 0.025 M HCl solution.
*Solution*:
HCl is a strong monoprotic acid that ionizes completely:
[H3O+] = 0.025 M = 2.5 x 10^-2 M
pH = -log(2.5 x 10^-2) = -(log 2.5 + log 10^-2) = -(0.40 - 2) = 1.60.

**Example 1.2**:
The pH of human blood is 7.40 at 25°C. Calculate [H3O+] and [OH-].
*Solution*:
[H3O+] = 10^-7.40 = 3.98 x 10^-8 M
pOH = 14.00 - 7.40 = 6.60
[OH-] = 10^-6.60 = 2.51 x 10^-7 M.`;
  }
  if (p === 19) {
    return `### Exercise 1.2: Practice on pH and pOH
1. Calculate the [H3O+], [OH-], and pOH of:
   a. 0.001 M HNO3 solution
   b. 0.005 M Ba(OH)2 solution
2. A sample of orange juice has a hydronium ion concentration of 2.9 x 10^-4 M. What is its pH?
3. Calculate the hydronium ion concentration of a solution with:
   a. pH = 3.82
   b. pOH = 5.25
4. The Kw of pure water at 60°C is 9.6 x 10^-14.
   a. Calculate [H3O+] and [OH-] in pure water at 60°C.
   b. Calculate the pH of neutral water at 60°C. (Is it acidic? Explain).`;
  }
  if (p === 20) {
    return `### Measuring pH: Indicators and Instruments
Two methods are commonly used to measure the pH of a solution:
1. **Acid-Base Indicators**:
   Weak organic acids or bases that exhibit different colors in their protonated and deprotonated forms.
   - Litmus: Red in acid (pH < 4.5), blue in base (pH > 8.3).
   - Phenolphthalein: Colorless in acid (pH < 8.2), pink in base (pH > 10.0).
   - Universal Indicator Paper: A mixture of indicators showing a smooth spectrum of colors from pH 1 to 14.
2. **pH Meter**:
   An electronic instrument equipped with a glass sensing electrode and reference electrode that measures voltage differences and converts them to digital pH readings accurate to ±0.01 pH units.`;
  }
  if (p === 21) {
    return `### 1.2.2 Measures of the Strength of Acids and Bases
The strength of an acid or base depends on its extent of ionization in water.
- **Strong Acids and Bases**: Ionize or dissociate 100% into ions in aqueous solution.
  Examples: HCl, HBr, HI, HNO3, H2SO4, HClO4, NaOH, KOH, Ba(OH)2.
- **Weak Acids and Bases**: Ionize only partially in aqueous solution, typically less than 5%.
  Examples: CH3COOH, HF, HCN, HNO2, NH3, methylamine.

Because weak acids and bases establish dynamic equilibria, their strength is quantified using equilibrium dissociation constants (Ka and Kb) and percent ionization.`;
  }
  if (p === 22) {
    return `### 1.2.2.3 Percent Ionization
Percent ionization is defined as the fraction of acid or base molecules that have dissociated into ions, multiplied by 100%:
% Ionization = ([H3O+] at equilibrium / [Initial HA]) x 100%

For a weak base:
% Ionization = ([OH-] at equilibrium / [Initial B]) x 100%

**Ostwald's Dilution Law**:
As a weak acid or weak base solution is diluted with water, its percent ionization **increases**, even though the total concentration of [H3O+] decreases. Dilution decreases ion collision frequency, favoring the forward dissociation process.`;
  }
  if (p === 23) {
    return `### 1.2.2.4 Acid Dissociation Constant, Ka
Consider a weak monoprotic acid HA dissolving in water:
HA(aq) + H2O(l) <=> H3O+(aq) + A-(aq)

The acid dissociation constant Ka is:
Ka = ([H3O+][A-]) / [HA]

- The larger the value of Ka, the stronger the weak acid.
- For most weak acids, Ka values range between 10^-2 and 10^-12.
- pKa is defined as: pKa = -log(Ka). A smaller pKa corresponds to a stronger acid.`;
  }
  if (p === 24) {
    return `### Table 1.2: Ionization Constants of Weak Acids at 25°C

| Name of Acid | Formula | Ka | pKa |
| :--- | :--- | :--- | :--- |
| Hydrofluoric acid | HF | 6.8 x 10^-4 | 3.17 |
| Nitrous acid | HNO2 | 4.5 x 10^-4 | 3.35 |
| Formic acid | HCOOH | 1.8 x 10^-4 | 3.74 |
| Benzoic acid | C6H5COOH | 6.5 x 10^-5 | 4.19 |
| Acetic acid | CH3COOH | 1.8 x 10^-5 | 4.74 |
| Carbonic acid (Ka1) | H2CO3 | 4.3 x 10^-7 | 6.37 |
| Hydrogen sulfide (Ka1)| H2S | 9.5 x 10^-8 | 7.02 |
| Hydrocyanic acid | HCN | 4.9 x 10^-10 | 9.31 |`;
  }
  if (p === 25) {
    return `### Worked Example 1.3: Calculating Ka from pH
**Problem**: A 0.100 M solution of acetic acid (CH3COOH) has a pH of 2.87 at 25°C. Calculate Ka and percent ionization.
*Solution*:
[H3O+] = 10^-2.87 = 1.35 x 10^-3 M
From stoichiometry: [CH3COO-] = [H3O+] = 1.35 x 10^-3 M
[CH3COOH] at equilibrium = 0.100 - 0.00135 = 0.09865 M
Ka = ([H3O+][CH3COO-]) / [CH3COOH] = (1.35 x 10^-3)^2 / 0.09865 = 1.85 x 10^-5
% Ionization = (1.35 x 10^-3 / 0.100) x 100% = 1.35%.`;
  }
  if (p === 26) {
    return `### The 5% Rule of Approximation
When solving for equilibrium concentration x in weak acid calculations:
Ka = x^2 / (C_initial - x)

If the acid is weak and C_initial is relatively large, x is very small compared to C_initial:
C_initial - x ≈ C_initial
Ka ≈ x^2 / C_initial   =>   x = sqrt(Ka * C_initial)

**5% Rule Check**:
The approximation is valid if:
(x / C_initial) x 100% < 5%
If percent ionization is >= 5%, the quadratic equation must be solved using:
x = (-b ± sqrt(b^2 - 4ac)) / (2a).`;
  }
  if (p === 27) {
    return `### Base Dissociation Constant, Kb
Weak bases react with water by accepting a proton:
B(aq) + H2O(l) <=> HB+(aq) + OH-(aq)
Kb = ([HB+][OH-]) / [B]

Table 1.3: Common Weak Bases at 25°C:
- Ethylamine (C2H5NH2): Kb = 5.6 x 10^-4
- Methylamine (CH3NH2): Kb = 4.4 x 10^-4
- Ammonia (NH3): Kb = 1.8 x 10^-5
- Hydrazine (N2H4): Kb = 1.7 x 10^-6
- Pyridine (C5H5N): Kb = 1.7 x 10^-9
- Aniline (C6H5NH2): Kb = 3.8 x 10^-10

pKb = -log(Kb).`;
  }
  if (p === 28) {
    return `### Relationship Between Ka and Kb for Conjugate Pairs
For any conjugate acid-base pair (e.g., NH4+ and NH3):
Ka(NH4+) = ([H3O+][NH3]) / [NH4+]
Kb(NH3) = ([NH4+][OH-]) / [NH3]

Multiplying Ka by Kb:
Ka * Kb = (([H3O+][NH3]) / [NH4+]) * (([NH4+][OH-]) / [NH3]) = [H3O+][OH-] = Kw
Ka * Kb = Kw = 1.0 x 10^-14 at 25°C
Taking negative logarithms:
pKa + pKb = 14.00.`;
  }
  if (p === 29) {
    return `### 1.2.2.5 Polyprotic Acids
A **polyprotic acid** contains more than one ionizable hydrogen atom per molecule.
Ionization occurs in sequential stepwise stages, each with its own Ka value.

Example: Phosphoric acid (H3PO4):
1. H3PO4 + H2O <=> H3O+ + H2PO4-  (Ka1 = 7.5 x 10^-3)
2. H2PO4- + H2O <=> H3O+ + HPO4 2-  (Ka2 = 6.2 x 10^-8)
3. HPO4 2- + H2O <=> H3O+ + PO4 3-  (Ka3 = 4.8 x 10^-13)

Notice that Ka1 >> Ka2 >> Ka3. It is much easier to remove a proton from a neutral molecule than from a negatively charged ion. Thus, practically all H3O+ comes from the first ionization step.`;
  }
  if (p === 30) {
    return `### Exercise 1.3: Review Questions on Weak Acids and Bases
1. Calculate the pH of a 0.15 M solution of nitrous acid (HNO2, Ka = 4.5 x 10^-4).
2. Calculate the percent ionization of 0.20 M hydrofluoric acid (HF, Ka = 6.8 x 10^-4).
3. The Kb of ammonia is 1.8 x 10^-5. What is the Ka of the ammonium ion (NH4+)?
4. For a 0.050 M solution of carbonic acid (H2CO3, Ka1 = 4.3 x 10^-7, Ka2 = 5.6 x 10^-11), calculate:
   a. [H3O+] and pH
   b. [HCO3-]
   c. [CO3 2-]`;
  }
  if (p <= 40) {
    return `### 1.3 Common Ion Effect and Buffer Solutions (Printed Page ${p})
- **The Common Ion Effect**: The suppression of the ionization of a weak electrolyte by the addition of an ionic compound that provides a common ion.
  Example: Adding sodium acetate (CH3COONa) to an acetic acid (CH3COOH) solution shifts equilibrium left, reducing [H3O+] and raising the pH.
- **Buffer Solution**: A solution that resists changes in pH upon the addition of small amounts of strong acid or strong base.
  Composition: Weak acid + its conjugate base (e.g., CH3COOH + CH3COONa), or weak base + its conjugate acid (e.g., NH3 + NH4Cl).
- **Henderson-Hasselbalch Equation**:
  pH = pKa + log([Conjugate Base] / [Weak Acid])
  pOH = pKb + log([Conjugate Acid] / [Weak Base])
- **Buffer Capacity**: Highest when [Acid] = [Base], which occurs when pH = pKa.`;
  }
  if (p <= 48) {
    return `### 1.4 Hydrolysis of Salts (Printed Page ${p})
Salt hydrolysis is the reaction of the anion or cation of a salt with water to produce H3O+ or OH-.
1. **Salts of Strong Acid & Strong Base** (e.g., NaCl, KNO3): Neither ion hydrolyzes. Solution is **neutral** (pH = 7.00).
2. **Salts of Weak Acid & Strong Base** (e.g., CH3COONa, NaCN): Anion hydrolyzes to produce OH-. Solution is **basic** (pH > 7.00).
   CH3COO- + H2O <=> CH3COOH + OH-
3. **Salts of Strong Acid & Weak Base** (e.g., NH4Cl): Cation hydrolyzes to produce H3O+. Solution is **acidic** (pH < 7.00).
   NH4+ + H2O <=> NH3 + H3O+
4. **Salts of Weak Acid & Weak Base** (e.g., NH4CH3COO): Both ions hydrolyze. The pH depends on the relative values of Ka and Kb.`;
  }
  // p 49 - 55
  if (p === 49) {
    return `### 1.5 Acid–Base Indicators and Titrations
- **Acid-Base Indicators**: Organic dyes that change color over specific pH ranges.
  HIn(aq) + H2O(l) <=> H3O+(aq) + In-(aq)
  Acid color (HIn) differs from base color (In-). Color changes when [HIn] ≈ [In-], which occurs at pH = pKa(indicator) ± 1.
- Table of Common Indicators:
  - Methyl orange: Red (pH < 3.1) to Yellow (pH > 4.4)
  - Methyl red: Red (pH < 4.4) to Yellow (pH > 6.2)
  - Bromothymol blue: Yellow (pH < 6.0) to Blue (pH > 7.6)
  - Phenolphthalein: Colorless (pH < 8.2) to Pink (pH > 10.0)`;
  }
  if (p === 50) {
    return `### Equivalents and Normality of Acids and Bases
- **Equivalent Mass**:
  Equivalent Mass = Molar Mass / n
  where n is the number of moles of H+ donated per mole of acid or OH- accepted per mole of base.
  - For HCl: n = 1
  - For H2SO4: n = 2
  - For NaOH: n = 1
  - For Ca(OH)2: n = 2
- **Normality (N)**: Number of equivalents per liter of solution:
  N = Molarity (M) x n
- Neutralization condition:
  N1 * V1 = N2 * V2`;
  }
  if (p === 51) {
    return `### Acid–Base Titration Curves
A titration curve plots pH versus the volume of titrant added.
1. **Strong Acid vs. Strong Base** (e.g., HCl vs. NaOH):
   - Initial pH is very low (~1.0).
   - Equivalence point pH is exactly 7.00.
   - Steep vertical rise in pH occurs from pH 4 to 10.
   - Indicators: Both methyl orange and phenolphthalein are suitable.`;
  }
  if (p === 52) {
    return `### Weak Acid vs. Strong Base Titration Curves
Titration of 50.0 mL of 0.100 M CH3COOH with 0.100 M NaOH:
1. Initial pH is around 2.87.
2. Buffer region formed before equivalence point: CH3COOH and CH3COO- co-exist.
3. Midpoint of titration: Volume = 25.0 mL, [CH3COOH] = [CH3COO-], so pH = pKa = 4.74.
4. Equivalence point: Volume = 50.0 mL, all acid converted to CH3COONa.
   Hydrolysis of acetate produces a **basic pH at equivalence (pH = 8.72)**.
5. Suitable indicator: **Phenolphthalein** (transition range 8.2–10.0). Methyl orange is not suitable.`;
  }
  if (p === 53) {
    return `### Strong Acid vs. Weak Base Titration Curves
Titration of 50.0 mL of 0.100 M NH3 with 0.100 M HCl:
1. Initial pH is basic (~11.1).
2. Buffer region contains NH3 and NH4+.
3. Equivalence point: All NH3 converted to NH4Cl.
   Cation hydrolysis produces an **acidic pH at equivalence (pH = 5.28)**.
4. Suitable indicator: **Methyl red** or **Methyl orange** (acidic transition ranges). Phenolphthalein is not suitable.`;
  }
  if (p === 54) {
    return `### Unit 1 Summary: Key Concepts Checklist
- Arrhenius: Acids produce H+; bases produce OH- in water.
- Brønsted-Lowry: Acids donate protons (H+); bases accept protons.
- Lewis: Acids accept electron pairs; bases donate electron pairs.
- Kw = [H3O+][OH-] = 1.0 x 10^-14 at 25°C.
- pH = -log[H3O+], pOH = -log[OH-], and pH + pOH = 14.00.
- Ka and Kb measure weak acid/base strength; Ka * Kb = Kw.
- % Ionization increases with dilution.
- Common ion effect shifts equilibrium and suppresses weak electrolyte ionization.
- Buffer solutions resist pH changes (pH = pKa + log([Base]/[Acid])).
- Neutralization: N1 * V1 = N2 * V2.`;
  }
  // p === 55
  return `### Unit 1 Review Exercises
1. Calculate the pH of a solution formed by mixing 50 mL of 0.10 M HCl with 25 mL of 0.10 M NaOH.
2. What is the pH of a buffer containing 0.20 M CH3COOH and 0.30 M CH3COONa? (Ka = 1.8 x 10^-5).
3. Which of the following salts form acidic, basic, or neutral aqueous solutions?
   a. KBr  b. NaNO2  c. NH4NO3  d. Na2CO3
4. A 25.0 mL sample of unknown vinegar (CH3COOH) requires 32.4 mL of 0.105 M NaOH for titration to phenolphthalein end point. Calculate the molarity of acetic acid.
5. Explain why the equivalence point pH is greater than 7 for weak acid-strong base titrations.`;
}
