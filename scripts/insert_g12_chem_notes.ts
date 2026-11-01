import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { ChapterShortNote, BookChapter, Topic } from '../src/types';

// ==========================================
// UNIT 1: ACID-BASE EQUILIBRIA DATA
// ==========================================
const unit1Overview = `### Grade 12 Chemistry: Unit 1 — Acid-Base Equilibria (Learnex Academy 2025 G.C. Complete Master Notes)

Acid-base equilibria forms the fundamental bedrock of chemical equilibrium in aqueous systems, physiological buffering (e.g., human blood carbonic acid/bicarbonate buffer), environmental chemistry (acid rain neutralization in the Great Rift Valley), and industrial acid-base titrations.

#### 1. ACID-BASE CONCEPTS
1. **Arrhenius Concept (1884)**:
   - **Acid**: A substance that ionizes in water to increase the concentration of hydrogen ions ($H^+$ or hydronium $H_3O^+$). Example: $\\text{HCl}(aq) + \\text{H}_2\\text{O}(l) \\rightarrow \\text{H}_3\\text{O}^+(aq) + \\text{Cl}^-(aq)$
   - **Base**: A substance that dissociates in water to increase hydroxide ions ($OH^-$). Example: $\\text{NaOH}(s) \\xrightarrow{\\text{H}_2\\text{O}} \\text{Na}^+(aq) + \\text{OH}^-(aq)$
   - **Strong Acids**: $\\text{HClO}_4, \\text{H}_2\\text{SO}_4, \\text{HI}, \\text{HBr}, \\text{HCl}, \\text{HNO}_3$ (100% dissociated).
   - **Strong Bases**: Hydroxides of Group IA ($\\text{LiOH, NaOH, KOH, RbOH, CsOH}$) and Group IIA ($\\text{Ca(OH)}_2, \\text{Sr(OH)}_2, \\text{Ba(OH)}_2$, except Be).
   - **Limitations**:
     - Limited strictly to aqueous solutions.
     - Cannot explain the basicity of non-hydroxide bases such as ammonia ($\\text{NH}_3$).
     - Does not account for acidic behavior of non-proton compounds (e.g., $\\text{CO}_2, \\text{SO}_3$).

2. **Brønsted-Lowry Concept (1923)**:
   - **Acid**: Proton ($H^+$) donor.
   - **Base**: Proton ($H^+$) acceptor.
   - Applies to both aqueous and non-aqueous media.
   - **Conjugate Acid-Base Pairs**: Differ by exactly one proton ($H^+$).
     - Conjugate Base: Has one fewer hydrogen and one more negative unit of charge ($[\\text{HA}] \\rightarrow [\\text{A}^-] + H^+$).
     - Conjugate Acid: Has one additional hydrogen and one less negative charge ($[\\text{B}] + H^+ \\rightarrow [\\text{HB}^+]$).
     - *Examples*: $\\text{HF} / \\text{F}^-$, $\\text{NH}_4^+ / \\text{NH}_3$, $\\text{H}_2\\text{O} / \\text{OH}^-$, $\\text{H}_3\\text{O}^+ / \\text{H}_2\\text{O}$.
   - **Strength Inverse Law**: The stronger the acid, the weaker its conjugate base; the stronger the base, the weaker its conjugate acid.
   - **Amphiprotic Species**: Substances capable of either donating or accepting a proton depending on the reacting partner.
     - *Examples*: $\\text{H}_2\\text{O}, \\text{HCO}_3^-, \\text{H}_2\\text{PO}_4^-, \\text{HSO}_4^-$.
     - *As an acid*: $\\text{HCO}_3^- + \\text{OH}^- \\rightarrow \\text{CO}_3^{2-} + \\text{H}_2\\text{O}$
     - *As a base*: $\\text{HCO}_3^- + \\text{HF} \\rightarrow \\text{H}_2\\text{CO}_3 + \\text{F}^-$

3. **Lewis Concept (1923)**:
   - **Lewis Acid**: Electron-pair acceptor (electrophile, species with vacant orbitals or electron deficiency).
     - *Examples*: Incomplete octets ($\\text{BF}_3, \\text{AlCl}_3$), polar double-bonded oxides ($\\text{CO}_2, \\text{SO}_2, \\text{SO}_3$), simple metal cations ($\\text{Fe}^{3+}, \\text{Cu}^{2+}, \\text{Al}^{3+}$).
   - **Lewis Base**: Electron-pair donor (nucleophile, species with lone electron pairs).
     - *Examples*: Molecules with lone pairs ($\\text{NH}_3, \\text{H}_2\\text{O}, \\text{CH}_3\\text{OH}$), anions ($\\text{OH}^-, \\text{CN}^-, \\text{Cl}^-, \\text{F}^-$).
   - **Reaction Coordinate**: Forms a coordinate covalent (dative) bond:
     $$\\text{BF}_3 + :\\text{NH}_3 \\rightarrow \\text{F}_3\\text{B}\\leftarrow\\text{NH}_3$$

---

#### 2. AUTOIONIZATION OF WATER & THE pH SCALE
- **Autoionization Reaction**:
  $$2\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_3\\text{O}^+(aq) + \\text{OH}^-(aq)$$
- **Ion Product Constant ($K_w$)**:
  $$K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\text{ at } 25^\\circ\\text{C} (298\\text{ K})$$
  *(Note: $K_w$ is endothermic, so $K_w$ increases with temperature).*
- **In Pure Water at $25^\\circ\\text{C}$**:
  $$[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = \\sqrt{K_w} = 1.0 \\times 10^{-7}\\text{ M} \\implies \\text{pH} = 7.00 \\text{ (Neutral)}$$
- **Classification of Aqueous Solutions**:
  - **Acidic Solution**: $[\\text{H}_3\\text{O}^+] > [\\text{OH}^-], \\quad [\\text{H}_3\\text{O}^+] > 1.0 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} < 7.00$
  - **Neutral Solution**: $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = 1.0 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 7.00$
  - **Basic Solution**: $[\\text{OH}^-] > [\\text{H}_3\\text{O}^+], \\quad [\\text{H}_3\\text{O}^+] < 1.0 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} > 7.00$
- **Mathematical Logarithmic Relationships**:
  $$\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] \\quad \\Longleftrightarrow \\quad [\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}}$$
  $$\\text{pOH} = -\\log[\\text{OH}^-] \\quad \\Longleftrightarrow \\quad [\\text{OH}^-] = 10^{-\\text{pOH}}$$
  $$\\text{pH} + \\text{pOH} = \\text{p}K_w = 14.00 \\text{ at } 25^\\circ\\text{C}$$

---

#### 3. WEAK ACIDS AND WEAK BASES ($K_a$, $K_b$, & Percent Ionization)
1. **Acid Dissociation Constant ($K_a$)**:
   $$\\text{HA}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_3\\text{O}^+(aq) + \\text{A}^-(aq) \\implies K_a = \\frac{[\\text{H}_3\\text{O}^+][\\text{A}^-]}{[\\text{HA}]}$$
   - Larger $K_a$ indicates greater ionization and stronger weak acid.
   - For weak acids with negligible dissociation ($< 5\\%$), $[\\text{H}_3\\text{O}^+] \\approx \\sqrt{K_a \\cdot C_a}$.
2. **Percent Ionization**:
   $$\\% \\text{ Ionization} = \\left(\\frac{[\\text{H}_3\\text{O}^+]_{\\text{eq}}}{[\\text{HA}]_{\\text{initial}}}\\right) \\times 100\\%$$
   *Ostwald's Dilution Law*: Percent ionization **increases** as the acid concentration is diluted.
3. **Base Dissociation Constant ($K_b$)**:
   $$\\text{B}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{HB}^+(aq) + \\text{OH}^-(aq) \\implies K_b = \\frac{[\\text{HB}^+][\\text{OH}^-]}{[\\text{B}]}$$
4. **Relationship for Conjugate Pairs**:
   $$K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\implies \\text{p}K_a + \\text{p}K_b = 14.00$$

---

#### 4. COMMON ION EFFECT & LE CHATELIER'S PRINCIPLE
- **Definition**: The suppression of the ionization of a weak electrolyte caused by the addition of a strong electrolyte providing a common ion.
- *Example*: In an acetic acid equilibrium $\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}^+$, adding sodium acetate ($\\text{CH}_3\\text{COONa}$) introduces common $\\text{CH}_3\\text{COO}^-$.
- *Le Chatelier Response*: Shifts the equilibrium to the **left**, decreasing $[H_3O^+]$ and **increasing the solution pH**.

---

#### 5. BUFFER SOLUTIONS & HENDERSON-HASSELBALCH EQUATION
- **Definition**: A solution that resists changes in pH upon the addition of small amounts of strong acid or strong base.
- **Composition**:
  - Weak acid + its conjugate base salt (e.g., $\\text{CH}_3\\text{COOH} + \\text{CH}_3\\text{COONa}$).
  - Weak base + its conjugate acid salt (e.g., $\\text{NH}_3 + \\text{NH}_4\\text{Cl}$).
- **Buffering Mechanism**:
  - Added $H_3O^+$ is neutralized by conjugate base: $\\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O}$
  - Added $OH^-$ is neutralized by weak acid: $\\text{CH}_3\\text{COOH} + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$
- **Henderson-Hasselbalch Equations**:
  $$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Conjugate Base}]}{[\\text{Weak Acid}]}\\right)$$
  $$\\text{pOH} = \\text{p}K_b + \\log\\left(\\frac{[\\text{Conjugate Acid}]}{[\\text{Weak Base}]}\\right)$$
- **Buffer Capacity**: Maximum when $[\\text{Acid}] = [\\text{Conjugate Base}]$ (where $\\text{pH} = \\text{p}K_a$).

---

#### 6. HYDROLYSIS OF SALTS
| Salt Category | Reacting Parent Acid/Base | Hydrolyzing Ion | Solution Nature & pH | Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Strong Acid + Strong Base** | $\\text{HCl} + \\text{NaOH}$ | Neither ion hydrolyzes | **Neutral** ($\\text{pH} = 7$) | $\\text{NaCl, KNO}_3, \\text{Na}_2\\text{SO}_4, \\text{BaCl}_2$ |
| **Weak Acid + Strong Base** | $\\text{CH}_3\\text{COOH} + \\text{NaOH}$ | Anion hydrolyzes: $\\text{A}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HA} + \\text{OH}^-$ | **Basic** ($\\text{pH} > 7$) | $\\text{CH}_3\\text{COONa, Na}_2\\text{CO}_3, \\text{KCN, NaF}$ |
| **Strong Acid + Weak Base** | $\\text{HCl} + \\text{NH}_3$ | Cation hydrolyzes: $\\text{HB}^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{B} + \\text{H}_3\\text{O}^+$ | **Acidic** ($\\text{pH} < 7$) | $\\text{NH}_4\\text{Cl, NH}_4\\text{NO}_3, \\text{FeCl}_3, \\text{AlCl}_3$ |
| **Weak Acid + Weak Base** | $\\text{CH}_3\\text{COOH} + \\text{NH}_3$ | Both cation and anion hydrolyze | Dependent on $K_a$ vs $K_b$:<br>• $K_a > K_b \\implies \\text{Acidic}$<br>• $K_b > K_a \\implies \\text{Basic}$<br>• $K_a \\approx K_b \\implies \\text{Neutral}$ | $\\text{NH}_4\\text{CH}_3\\text{COO } (K_a=K_b \\implies \\text{pH}\\approx7)$ |

---

#### 7. ACID-BASE INDICATORS & TITRATIONS
- **Indicator Equilibrium**: $\\text{HIn}(aq) \\text{ (Color A)} + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_3\\text{O}^+(aq) + \\text{In}^-(aq) \\text{ (Color B)}$
  - Transition range: $\\text{pH} = \\text{p}K_{\\text{In}} \\pm 1$
  - **Phenolphthalein**: Colorless ($\\text{pH} < 8.2$) to Vivid Pink ($\\text{pH} > 10.0$) $\\rightarrow$ Ideal for **Weak Acid vs. Strong Base**.
  - **Methyl Orange**: Red ($\\text{pH} < 3.1$) to Yellow ($\\text{pH} > 4.4$) $\\rightarrow$ Ideal for **Strong Acid vs. Weak Base**.
  - **Litmus / Bromothymol Blue**: Transitions near pH 7 $\\rightarrow$ Ideal for **Strong Acid vs. Strong Base**.
- **Equivalence Point vs. End Point**:
  - *Equivalence Point*: Theoretical stoichiometric point where equivalents of acid equal equivalents of base ($N_1 V_1 = N_2 V_2$).
  - *End Point*: Physical experimental point where the indicator changes color.
- **Normality ($N$) and Equivalents**:
  - $\\text{Equivalent Mass} = \\frac{\\text{Molar Mass}}{\\text{Equivalents per mole (valency factor } n)}$
  - $N = M \\times n$ (where $n = 2$ for $\\text{H}_2\\text{SO}_4$ or $\\text{Ca(OH)}_2$).
  - Neutralization Law: $N_{\\text{acid}} \\times V_{\\text{acid}} = N_{\\text{base}} \\times V_{\\text{base}}$.
`;

// ==========================================
// UNIT 2: ELECTROCHEMISTRY DATA
// ==========================================
const unit2Overview = `### Grade 12 Chemistry: Unit 2 — Electrochemistry (Learnex Academy 2025 G.C. Complete Master Notes)

Electrochemistry investigates the interconversion between chemical potential energy and electrical energy through redox electron transfer processes.

---

#### 1. REDOX REACTIONS & OXIDATION NUMBER RULES
- **Oxidation**: Loss of electrons ($e^-$), increase in oxidation number, addition of oxygen, removal of hydrogen.
- **Reduction**: Gain of electrons ($e^-$), decrease in oxidation number, removal of oxygen, addition of hydrogen.
- **Oxidizing Agent (Oxidant)**: Substance that oxidizes another and is itself reduced.
- **Reducing Agent (Reductant)**: Substance that reduces another and is itself oxidized.
  *In the Daniell Cell Reaction*: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$
  - $\\text{Zn}$ loses $2e^-$ (Oxidation, reducing agent).
  - $\\text{Cu}^{2+}$ gains $2e^-$ (Reduction, oxidizing agent).

#### Rules for Assigning Oxidation Numbers:
1. Free uncombined element $= 0$ (e.g., $\\text{H}_2, \\text{O}_2, \\text{Na}, \\text{Fe}, \\text{P}_4, \\text{S}_8 = 0$).
2. Monatomic ion $=$ its ionic charge (e.g., $\\text{Na}^+ = +1, \\text{Cl}^- = -1, \\text{Al}^{3+} = +3$).
3. Oxygen in compounds $=-2$ (except in peroxides $\\text{H}_2\\text{O}_2 = -1$, and in $\\text{OF}_2 = +2$).
4. Hydrogen in compounds $=+1$ (with nonmetals) and $-1$ in metal hydrides (e.g., $\\text{NaH}, \\text{CaH}_2$).
5. Fluorine in all compounds $=-1$.
6. Neutral compound sum of oxidation states $= 0$.
7. Polyatomic ion sum of oxidation states $=$ net charge on ion.
   *Example*: In potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$):
   $$2(+1) + 2(x) + 7(-2) = 0 \\implies 2 + 2x - 14 = 0 \\implies 2x = 12 \\implies x = +6$$

---

#### 2. BALANCING REDOX EQUATIONS (Ion-Electron / Half-Reaction Method)
1. Split equation into oxidation and reduction half-reactions.
2. Balance elements other than $\\text{O}$ and $\\text{H}$.
3. Balance $\\text{O}$ atoms by adding $\\text{H}_2\\text{O}$.
4. Balance $\\text{H}$ atoms by adding $\\text{H}^+$ (in acidic medium) or adding equal $\\text{OH}^-$ to both sides (in basic medium).
5. Balance net charges by adding electrons ($e^-$).
6. Equalize electrons by multiplying by integer factors.
7. Add half-reactions and cancel identical species on both sides.
   *Acidic Example*: $5\\text{Fe}^{2+} + \\text{MnO}_4^- + 8\\text{H}^+ \\rightarrow 5\\text{Fe}^{3+} + \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$

---

#### 3. ELECTROLYTIC CELLS & PREFERENTIAL DISCHARGE
- **Electrolytic Cell**: Uses external direct electrical energy (DC power source) to drive a non-spontaneous redox reaction ($\\Delta G > 0, E_{\\text{cell}} < 0$).
- **Electrode Conventions**:
  - **Anode** ($+$): Positive electrode connected to positive terminal; oxidation occurs here.
  - **Cathode** ($-$): Negative electrode connected to negative terminal; reduction occurs here.
- **Types of Conduction**:
  - *Metallic Conduction*: Mobile delocalized electrons, no chemical decomposition, resistance increases with temperature.
  - *Electrolytic Conduction*: Mobile cations/anions in molten state or aqueous solution, involves chemical changes at electrodes, conductivity increases with temperature.

#### Factors Determining Preferential Discharge of Ions:
1. **Position in Electrochemical Series**:
   - Cations with lower reduction potential (more positive $E^\\circ$, lower in series) discharge preferentially at the cathode: $\\text{Cu}^{2+} > \\text{H}^+ > \\text{Fe}^{2+} > \\text{Zn}^{2+} > \\text{Al}^{3+} > \\text{Mg}^{2+} > \\text{Na}^+ > \\text{K}^+$.
   - Anions discharge order at anode: $\\text{I}^- > \\text{Br}^- > \\text{Cl}^- > \\text{OH}^- > \\text{SO}_4^{2-} > \\text{NO}_3^- > \\text{F}^-$.
2. **Concentration Effect**: High concentration can override standard discharge positions (e.g., concentrated brine $\\text{NaCl}(aq)$ produces $\\text{Cl}_2$ gas at the anode instead of $\\text{O}_2$).
3. **Nature of Electrodes (Inert vs. Active)**:
   - Inert electrodes ($\\text{Pt, Graphite/C}$) do not participate chemically.
   - Active electrodes ($\\text{Cu, Ag, Ni}$) dissolve at the anode: $\\text{Cu}(s) \\rightarrow \\text{Cu}^{2+}(aq) + 2e^-$.

#### Summary of Major Electrolysis Processes:
| System / Electrolyte | Cathode Reaction (Reduction) | Anode Reaction (Oxidation) | Overall Reaction & Products |
| :--- | :--- | :--- | :--- |
| **Molten $\\text{NaCl}$** | $\\text{Na}^+ + e^- \\rightarrow \\text{Na}(l)$ | $2\\text{Cl}^- \\rightarrow \\text{Cl}_2(g) + 2e^-$ | $2\\text{NaCl}(l) \\rightarrow 2\\text{Na}(l) + \\text{Cl}_2(g)$ |
| **Concentrated Brine $\\text{NaCl}(aq)$** | $2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2(g)$ | $2\\text{Cl}^- \\rightarrow \\text{Cl}_2(g) + 2e^-$ | $2\\text{NaCl} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2 + \\text{Cl}_2$ (Chlor-Alkali Industry) |
| **Dilute $\\text{H}_2\\text{SO}_4(aq)$** | $4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2(g)$ | $4\\text{OH}^- \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2 + 4e^-$ | $2\\text{H}_2\\text{O}(l) \\rightarrow 2\\text{H}_2(g) + \\text{O}_2(g)$ (Water Electrolysis) |
| **$\\text{CuSO}_4(aq)$ with Active $\\text{Cu}$** | $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}(s)$ | $\\text{Cu}(s) \\rightarrow \\text{Cu}^{2+} + 2e^-$ | Pure copper deposited on cathode; impure copper anode dissolves (Electrorefining) |

---

#### 4. FARADAY'S LAWS OF ELECTROLYSIS (Quantitative Stoichiometry)
1. **Faraday's First Law**:
   $$m = \\left(\\frac{M \\cdot I \\cdot t}{n \\cdot F}\\right) = Z \\cdot I \\cdot t$$
   - $m$: Mass of deposited substance in grams.
   - $M$: Molar mass (g/mol).
   - $I$: Current in Amperes (A).
   - $t$: Time in seconds ($s$).
   - $n$: Number of electrons transferred per ion ($z$).
   - $F$: Faraday constant $= 96,500\\text{ C/mol } e^- = 1\\text{ Faraday}$.
   - $Q = I \\times t$ (Total electrical charge in Coulombs).
2. **Faraday's Second Law**:
   $$\\frac{m_1}{E_1} = \\frac{m_2}{E_2} \\quad \\text{where } E = \\frac{\\text{Molar Mass } M}{n} \\text{ (Equivalent Mass)}$$

---

#### 5. INDUSTRIAL APPLICATIONS OF ELECTROLYSIS
1. **Extraction of Reactive Light Metals (Hall-Héroult Process)**:
   - Electrolytic reduction of molten alumina ($\\text{Al}_2\\text{O}_3$) dissolved in molten synthetic cryolite ($\\text{Na}_3\\text{AlF}_6$) at $\\approx 950^\\circ\\text{C}$ with carbon anodes and cathode lining.
   - $\\text{Cathode: } \\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}(l) \\quad | \\quad \\text{Anode: } 2\\text{O}^{2-} + \\text{C} \\rightarrow \\text{CO}_2 + 4e^-$
2. **Electrorefining of Blister Copper**:
   - Anode: Impure crude copper slab (dissolves).
   - Cathode: Pure thin copper starter sheet (grows).
   - Valuable impurities ($\\text{Au, Ag, Pt}$) settle at bottom as *Anode Mud*.
3. **Electroplating**:
   - Cathode: Article to be electroplated (spoon, car bumper).
   - Anode: Pure plating metal (silver, gold, chromium, nickel).
   - Electrolyte: Soluble aqueous salt of plating metal (e.g., $\\text{AgNO}_3$).

---

#### 6. GALVANIC (VOLTAIC) CELLS & DANIELL CELL
- **Definition**: Device that converts chemical energy from a spontaneous redox reaction ($\\Delta G < 0, E_{\\text{cell}} > 0$) into electrical work.
- **Daniell Cell Architecture**:
  - **Anode Half-Cell ($-$)**: $\\text{Zn}$ rod immersed in $1.0\\text{ M } \\text{ZnSO}_4(aq)$ $\\rightarrow$ Oxidation: $\\text{Zn}(s) \\rightarrow \\text{Zn}^{2+}(aq) + 2e^-$.
  - **Cathode Half-Cell ($+$)**: $\\text{Cu}$ rod immersed in $1.0\\text{ M } \\text{CuSO}_4(aq)$ $\\rightarrow$ Reduction: $\\text{Cu}^{2+}(aq) + 2e^- \\rightarrow \\text{Cu}(s)$.
  - **Salt Bridge ($U$-Tube with $\\text{KNO}_3$ or $\\text{KCl}$ in agar-agar)**:
    - Maintains electrical neutrality by allowing anion migration ($\\text{NO}_3^-$) toward anode and cation migration ($\\text{K}^+$) toward cathode.
    - Prevents mechanical mixing of electrolyte solutions while completing the electrical circuit.
- **IUPAC Standard Cell Notation**:
  $$\\text{Anode} \\mid \\text{Anode Electrolyte} \\parallel \\text{Cathode Electrolyte} \\mid \\text{Cathode}$$
  $$\\text{Zn}(s) \\mid \\text{Zn}^{2+}(1\\text{ M}) \\parallel \\text{Cu}^{2+}(1\\text{ M}) \\mid \\text{Cu}(s)$$

---

#### 7. STANDARD ELECTRODE POTENTIALS ($E^\\circ$) & NERNST EQUATION
- **Standard Hydrogen Electrode (SHE)**: Reference electrode assigned $E^\\circ = 0.00\\text{ V}$ at standard conditions ($25^\\circ\\text{C}, 1\\text{ atm } \\text{H}_2, 1.0\\text{ M } \\text{H}^+$).
  $$2\\text{H}^+(1\\text{ M}) + 2e^- \\rightleftharpoons \\text{H}_2(1\\text{ atm, Pt})$$
- **Standard Cell Potential Formula**:
  $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode (reduction)}} - E^\\circ_{\\text{anode (reduction)}}$$
  *For Daniell Cell*: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V}) = +1.10\\text{ V}$
- **Thermodynamic Link**:
  $$\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}} \\quad \\text{and} \\quad \\ln K = \\frac{n F E^\\circ_{\\text{cell}}}{R T} \\implies \\log K = \\frac{n E^\\circ_{\\text{cell}}}{0.0592} \\text{ at } 25^\\circ\\text{C}$$
- **Nernst Equation (Non-Standard State Potential)**:
  $$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log Q \\quad \\text{at } 298\\text{ K}$$
  Where $Q = \\frac{[\\text{Products}]^c}{[\\text{Reactants}]^a}$ (considering only aqueous ions and gases).

---

#### 8. COMMERCIAL BATTERIES, FUEL CELLS & CORROSION
1. **Primary Cells (Non-Rechargeable)**:
   - *Dry Cell (Leclanché)*: $\\text{Zn}$ can anode, $\\text{C/MnO}_2$ cathode, $\\text{NH}_4\\text{Cl/ZnCl}_2$ paste ($1.5\\text{ V}$).
   - *Alkaline Cell*: $\\text{Zn}$ anode, $\\text{MnO}_2$ cathode, $\\text{KOH}$ electrolyte (longer shelf-life, stable voltage).
   - *Mercury Cell*: $\\text{Zn-Hg}$ amalgam anode, $\\text{HgO}$ cathode ($1.35\\text{ V}$, constant voltage for hearing aids).
2. **Secondary Cells (Rechargeable)**:
   - *Lead-Acid Accumulator* (Car Battery): $\\text{Pb}$ anode, $\\text{PbO}_2$ cathode, $38\\% \\text{ H}_2\\text{SO}_4$ electrolyte ($2.0\\text{ V/cell} \\times 6 = 12\\text{ V}$).
     $$\\text{Discharge: } \\text{Pb}(s) + \\text{PbO}_2(s) + 2\\text{H}_2\\text{SO}_4(aq) \\rightleftharpoons 2\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l)$$
   - *Lithium-Ion Battery*: Graphite anode with intercalated lithium, lithium cobalt oxide cathode ($\\text{LiCoO}_2$), high energy density ($3.6\\text{ V}$).
3. **Fuel Cells**:
   - Continuous reactant supply ($\\text{H}_2$ fuel $+ \\text{O}_2$ oxidant $\\rightarrow \\text{H}_2\\text{O}$ byproduct).
   - High thermodynamic efficiency ($\\approx 60-70\\%$), silent, non-polluting.
4. **Corrosion of Iron (Rusting)**:
   - Electrochemical deterioration requiring iron, dissolved oxygen, and water/electrolyte.
   - Anodic Site: $\\text{Fe}(s) \\rightarrow \\text{Fe}^{2+}(aq) + 2e^-$
   - Cathodic Site: $\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\rightarrow 2\\text{H}_2\\text{O}(l)$
   - Rust Formation: $4\\text{Fe}^{2+} + \\text{O}_2 + (4+2n)\\text{H}_2\\text{O} \\rightarrow 2\\text{Fe}_2\\text{O}_3\\cdot n\\text{H}_2\\text{O} \\text{ (Hydrated Iron(III) Oxide)} + 8\\text{H}^+$
   - **Corrosion Prevention**: Protective barrier coatings, galvanizing ($\\text{Zn}$ sacrificial coating), cathodic protection with magnesium sacrificial anodes on underground pipelines.
`;

export async function insertGrade12ChemistryNotes() {
  console.log('[Script] Starting comprehensive insertion of Grade 12 Chemistry Unit 1 & 2 Notes and 60 Review Exercises...');

  // 1. Prepare Unit 1 Short Note Structure
  const unit1ShortNote: ChapterShortNote = {
    id: 'note-book-12-chem-1',
    book_id: 'book-12-chem',
    chapter_number: 1,
    chapter_title: 'Unit 1: Acid-Base Equilibria',
    grade_name: 'Grade 12',
    subject_name: 'Chemistry',
    unit_summary: 'Master study notes for Grade 12 Chemistry Unit 1 (Acid-Base Equilibria), covering Arrhenius, Brønsted-Lowry, and Lewis concepts, water autoionization, pH/pOH calculations, weak acid/base equilibria, common ion effect, buffer solutions, salt hydrolysis, and acid-base titration curves.',
    detailed_overview: unit1Overview,
    topics_covered: [
      {
        title: '1. Acid-Base Concepts (Arrhenius, Brønsted-Lowry, Lewis)',
        topic_title: '1. Acid-Base Concepts',
        explanation: 'Arrhenius acids produce H+ and bases produce OH- in water. Brønsted-Lowry acids donate protons (H+) while bases accept protons, forming conjugate pairs differing by 1 H+. Lewis acids accept electron pairs (e.g., BF3, AlCl3, metal cations) and Lewis bases donate electron pairs (e.g., NH3, H2O, OH-).',
        diagram_illustration: `[Lewis Acid-Base Coordinate Adduct Formation]
   F             H                    F   H
   |             |                    |   |
F--B  (empty) + :N--H  (lone pair) --> F--B---N--H
   |             |                    |   |
   F             H                    F   H
(Lewis Acid)  (Lewis Base)          (Dative Adduct)`
      },
      {
        title: '2. Ionization of Water and the pH Scale',
        topic_title: '2. Ionization of Water and the pH Scale',
        explanation: 'Water autoionizes: 2H2O <=> H3O+ + OH-. At 25°C, Kw = [H3O+][OH-] = 1.0 x 10^-14. pH = -log[H3O+], pOH = -log[OH-], and pH + pOH = 14.00. Neutral pH is 7.00 at 25°C.',
        diagram_illustration: `[pH & [H3O+] Spectrum at 25°C]
pH:    0 ----- 3 ----- 7 ----- 11 ----- 14
[H+]:  10^0   10^-3   10^-7   10^-11   10^-14 M
       |<-- ACIDIC -->| NEUTRAL |<-- BASIC -->|`
      },
      {
        title: '3. Weak Acids, Weak Bases, and Percent Ionization',
        topic_title: '3. Weak Acids and Bases (Ka, Kb)',
        explanation: 'Weak acids dissociate partially: Ka = [H3O+][A-]/[HA]. Weak bases: Kb = [HB+][OH-]/[B]. For conjugate pairs, Ka x Kb = Kw = 1.0 x 10^-14. Percent ionization = ([H3O+]eq/[HA]init) x 100%, which increases with dilution.',
      },
      {
        title: '4. Common Ion Effect and Buffer Solutions',
        topic_title: '4. Common Ion Effect & Buffers',
        explanation: 'Common ion effect shifts equilibrium left, suppressing ionization. Buffers contain weak acid + conjugate base (or weak base + conjugate acid) and resist pH changes. pH is calculated using the Henderson-Hasselbalch equation: pH = pKa + log([Base]/[Acid]).'
      },
      {
        title: '5. Hydrolysis of Salts & Titrations',
        topic_title: '5. Salt Hydrolysis & Titrations',
        explanation: 'Salts of weak acid + strong base (e.g., CH3COONa) hydrolyze to produce basic solutions (pH > 7). Salts of strong acid + weak base (e.g., NH4Cl) produce acidic solutions (pH < 7). In titrations, equivalence point occurs when moles acid = moles base (N1V1 = N2V2).'
      }
    ],
    key_concepts: [
      { concept: 'Arrhenius Theory', explanation: 'Acid yields H+ in water; base yields OH- in water. Restricted to aqueous solutions.' },
      { concept: 'Brønsted-Lowry Theory', explanation: 'Acid is a proton (H+) donor; base is a proton acceptor. Generates conjugate acid-base pairs.' },
      { concept: 'Lewis Theory', explanation: 'Acid is an electron-pair acceptor; base is an electron-pair donor. Covers coordination complexes.' },
      { concept: 'Autoionization of Water', explanation: 'Kw = [H3O+][OH-] = 1.0 x 10^-14 at 25°C. pH + pOH = 14.00.' },
      { concept: 'Common Ion Effect', explanation: 'Adding an ion already in equilibrium suppresses dissociation of weak electrolyte (Le Chatelier shift).' },
      { concept: 'Buffer Action', explanation: 'Resists pH shift; weak acid neutralizes added OH-, conjugate base neutralizes added H3O+.' },
      { concept: 'Henderson-Hasselbalch Equation', explanation: 'pH = pKa + log([Conjugate Base]/[Weak Acid]). Maximum buffer capacity at pH = pKa.' },
      { concept: 'Salt Hydrolysis', explanation: 'Anions of weak acids yield OH- (basic); cations of weak bases yield H3O+ (acidic); ions of strong acids/bases do not hydrolyze (neutral).' },
      { concept: 'Equivalence vs End Point', explanation: 'Equivalence point is theoretical stoichiometric completion; end point is observed color change of indicator.' }
    ],
    core_formulas_rules: [
      { formula_or_law: 'Kw = [H3O+][OH-] = 1.0 x 10^-14', explanation: 'Ion product constant of water at 25°C', units_conditions: 'Valid for all aqueous solutions at 298 K' },
      { formula_or_law: 'pH = -log[H3O+], pOH = -log[OH-]', explanation: 'Logarithmic scale of hydronium and hydroxide concentrations', units_conditions: 'pH + pOH = 14.00 at 25°C' },
      { formula_or_law: 'Ka x Kb = Kw', explanation: 'Relationship between dissociation constants of conjugate acid-base pairs', units_conditions: 'pKa + pKb = 14.00' },
      { formula_or_law: '% Ionization = ([H3O+]eq / [HA]initial) x 100%', explanation: 'Degree of weak acid dissociation', units_conditions: 'Increases upon dilution' },
      { formula_or_law: 'pH = pKa + log([Conjugate Base] / [Weak Acid])', explanation: 'Henderson-Hasselbalch equation for buffer solutions', units_conditions: 'Valid when concentrations > 0.01 M' },
      { formula_or_law: 'N1V1 = N2V2', explanation: 'Neutralization equation for titrations using normality', units_conditions: 'Normality N = Molarity M x Equivalents per mole n' }
    ],
    euee_exam_tips: [
      { trap: 'Confusing Conjugate Acid vs Conjugate Base', how_to_avoid: 'Conjugate base has 1 FEWER H+ and 1 MORE negative charge. (e.g. H2PO4- loses H+ to become HPO4^2-).', frequency: 'Critical' },
      { trap: 'Assuming pH = 7 is always neutral at all temperatures', how_to_avoid: 'Neutrality means [H3O+] = [OH-]. At higher temperatures Kw > 10^-14, so neutral pH is below 7.00.', frequency: 'High' },
      { trap: 'Selecting wrong indicator for weak acid - strong base titration', how_to_avoid: 'At equivalence point of weak acid + strong base, salt hydrolyzes to basic pH (>7), so use Phenolphthalein (range 8.2 - 10.0), NOT methyl orange.', frequency: 'Critical' }
    ],
    practice_quiz: [
      { question: 'Which definition of acids and bases applies to non-aqueous solutions?', options: ['Arrhenius', 'Brønsted-Lowry', 'Lewis', 'Both b and c'], correct_index: 3, explanation: 'Brønsted-Lowry and Lewis definitions apply to non-aqueous systems; Arrhenius is limited to water.' },
      { question: 'What is the conjugate base of H2PO4-?', options: ['H3PO4', 'HPO4^2-', 'PO4^3-', 'H2O'], correct_index: 1, explanation: 'Removing one proton (H+) from H2PO4- leaves HPO4^2-.' },
      { question: 'In the reaction NH3 + H2O <=> NH4+ + OH-, which acts as the acid?', options: ['NH3', 'H2O', 'NH4+', 'OH-'], correct_index: 1, explanation: 'H2O donates a proton to NH3, acting as a Brønsted-Lowry acid.' },
      { question: 'The value of Kw at 25°C is:', options: ['1.0 x 10^-7', '1.0 x 10^-14', '1.0 x 10^7', '1.0 x 10^14'], correct_index: 1, explanation: 'Kw = [H3O+][OH-] = 1.0 x 10^-14 at 25°C.' },
      { question: 'If [H3O+] = 1.0 x 10^-9 M, the solution is:', options: ['Acidic', 'Basic', 'Neutral', 'Cannot determine'], correct_index: 1, explanation: '[H3O+] < 10^-7 M, [OH-] = 10^-5 M > [H3O+], so the solution is basic (pH = 9.0).' },
      { question: 'What is the pH of a solution with [H3O+] = 2.5 x 10^-4 M?', options: ['3.60', '4.60', '5.60', '6.60'], correct_index: 0, explanation: 'pH = -log(2.5 x 10^-4) = 4 - log(2.5) = 4 - 0.398 = 3.60.' },
      { question: 'If pH = 11.0, what is pOH?', options: ['3.0', '11.0', '14.0', 'Cannot determine'], correct_index: 0, explanation: 'pOH = 14.0 - pH = 14.0 - 11.0 = 3.0.' },
      { question: 'A stronger acid has a:', options: ['Larger Ka value', 'Smaller Ka value', 'Larger Kb value', 'Neutral Ka value'], correct_index: 0, explanation: 'Larger Ka indicates higher extent of acid ionization and stronger acidity.' },
      { question: 'For conjugate acid-base pairs, Ka x Kb equals:', options: ['1.0', '7.0', '1.0 x 10^-7', '1.0 x 10^-14'], correct_index: 3, explanation: 'Ka x Kb = Kw = 1.0 x 10^-14 at 25°C.' },
      { question: 'Which is an amphiprotic species?', options: ['Cl-', 'HCO3-', 'Na+', 'NO3-'], correct_index: 1, explanation: 'HCO3- can donate H+ to form CO3^2- or accept H+ to form H2CO3.' },
      { question: 'The common ion effect causes weak acid ionization to:', options: ['Increase', 'Decrease', 'Stay the same', 'Become unpredictable'], correct_index: 1, explanation: 'Adding common conjugate ions shifts equilibrium left, suppressing ionization.' },
      { question: 'A buffer solution contains:', options: ['Strong acid and strong base', 'Weak acid and its conjugate base', 'Two strong acids', 'Water only'], correct_index: 1, explanation: 'Buffers consist of a weak acid/base pair present in appreciable concentrations.' },
      { question: 'The Henderson-Hasselbalch equation relates pH to:', options: ['Only Ka', 'Only concentration', 'Both Ka and concentration ratio', 'Neither Ka nor concentration'], correct_index: 2, explanation: 'pH = pKa + log([Base]/[Acid]), combining both pKa and concentration ratio.' },
      { question: 'Buffer capacity is maximum when:', options: ['[acid] >> [conjugate base]', '[conjugate base] >> [acid]', '[acid] = [conjugate base]', 'pH = 7'], correct_index: 2, explanation: 'Maximum buffer capacity occurs when [acid] = [conjugate base], meaning pH = pKa.' },
      { question: 'A salt of strong acid and strong base produces a solution that is:', options: ['Acidic', 'Basic', 'Neutral', 'Depends on concentration'], correct_index: 2, explanation: 'Neither ion undergoes hydrolysis (e.g., NaCl), producing a neutral solution (pH = 7).' },
      { question: 'NaCH3COO solution is:', options: ['Acidic', 'Basic', 'Neutral', 'Depends on temperature'], correct_index: 1, explanation: 'Acetate ion (CH3COO-) hydrolyzes: CH3COO- + H2O <=> CH3COOH + OH- (pH > 7).' },
      { question: 'NH4Cl solution is:', options: ['Acidic', 'Basic', 'Neutral', 'Amphoteric'], correct_index: 0, explanation: 'Ammonium cation (NH4+) hydrolyzes: NH4+ + H2O <=> NH3 + H3O+ (pH < 7).' },
      { question: 'Which indicator is suitable for strong acid-strong base titration?', options: ['Methyl orange only', 'Phenolphthalein only', 'Either methyl orange or phenolphthalein', 'No indicator works'], correct_index: 2, explanation: 'Strong acid-strong base has a steep pH surge from 4 to 10, so both indicators encompass the inflection.' },
      { question: 'The equivalence point in weak acid-strong base titration occurs at:', options: ['pH < 7', 'pH = 7', 'pH > 7', 'Variable pH'], correct_index: 2, explanation: 'The resulting basic salt hydrolyzes to generate excess OH-, giving pH > 7.' },
      { question: 'For H2SO4, the number of equivalents per mole is:', options: ['1', '2', '3', '4'], correct_index: 1, explanation: 'H2SO4 is diprotic and donates 2 moles of H+ per mole of acid (n = 2).' },
      { question: 'What is [OH-] in a solution with pH = 10.0?', options: ['1.0 x 10^-4 M', '1.0 x 10^-10 M', '1.0 x 10^4 M', '1.0 x 10^10 M'], correct_index: 0, explanation: 'pOH = 14.0 - 10.0 = 4.0 -> [OH-] = 10^-4 M.' },
      { question: 'Which is the strongest acid among HF (Ka = 6.8x10^-4), HCN (Ka = 4.9x10^-10), CH3COOH (Ka = 1.8x10^-5)?', options: ['HF (Ka = 6.8 x 10^-4)', 'HCN (Ka = 4.9 x 10^-10)', 'CH3COOH (Ka = 1.8 x 10^-5)', 'All equal'], correct_index: 0, explanation: 'Highest Ka (6.8 x 10^-4) indicates the strongest acid.' },
      { question: 'In Lewis theory, BF3 is a:', options: ['Lewis acid', 'Lewis base', 'Neither', 'Both'], correct_index: 0, explanation: 'BF3 has an incomplete octet (6 valence electrons) and accepts an electron pair.' },
      { question: 'Percent ionization of a weak acid:', options: ['Increases with dilution', 'Decreases with dilution', 'Stays constant', 'Not related to concentration'], correct_index: 0, explanation: 'According to Ostwald dilution law, percent ionization increases as solution becomes more dilute.' },
      { question: 'The end point in titration is when:', options: ['Equivalence point reached', 'Indicator changes color', 'pH = 7', 'All reactants consumed'], correct_index: 1, explanation: 'End point is the experimental observation when indicator changes color.' },
      { question: 'A solution with pH = 7 at 25°C is:', options: ['Always neutral', 'Always acidic', 'Always basic', 'Neutral only in pure water'], correct_index: 0, explanation: 'At 25°C, pH = 7 corresponds to [H3O+] = [OH-] = 10^-7 M (neutral).' },
      { question: 'For weak base with Kb = 1.8 x 10^-5, its conjugate acid has Ka equal to:', options: ['1.8 x 10^-5', '1.8 x 10^5', '5.6 x 10^-10', 'Cannot calculate'], correct_index: 2, explanation: 'Ka = Kw / Kb = (1.0 x 10^-14) / (1.8 x 10^-5) = 5.6 x 10^-10.' },
      { question: 'Which salt undergoes hydrolysis: NaCl, KNO3, Na2CO3, Na2SO4?', options: ['NaCl', 'KNO3', 'Na2CO3', 'Na2SO4'], correct_index: 2, explanation: 'Na2CO3 contains CO3^2- (conjugate base of weak H2CO3), which hydrolyzes.' },
      { question: 'pKa + pKb for conjugate pairs equals:', options: ['7', '14', '0', 'Variable'], correct_index: 1, explanation: 'pKa + pKb = pKw = 14.00 at 25°C.' },
      { question: 'If 25 mL of 0.1 N HCl neutralizes 50 mL NaOH, the normality of NaOH is:', options: ['0.05 N', '0.1 N', '0.2 N', '0.5 N'], correct_index: 0, explanation: 'N1V1 = N2V2 -> (0.1 N)(25 mL) = N2(50 mL) -> N2 = 2.5 / 50 = 0.05 N.' }
    ],
    ai_assisted: false,
    generated_at: new Date().toISOString(),
    focus: 'summary',
    book_grounded: true
  };

  // 2. Prepare Unit 2 Short Note Structure
  const unit2ShortNote: ChapterShortNote = {
    id: 'note-book-12-chem-2',
    book_id: 'book-12-chem',
    chapter_number: 2,
    chapter_title: 'Unit 2: Electrochemistry',
    grade_name: 'Grade 12',
    subject_name: 'Chemistry',
    unit_summary: 'Master study notes for Grade 12 Chemistry Unit 2 (Electrochemistry), covering Redox definitions, Oxidation Number rules, Ion-Electron balancing, Electrolytic cells, Preferential discharge, Faraday\'s Laws, Industrial processes, Galvanic/Daniell cells, Standard potentials, Nernst equation, Batteries, Fuel cells, and Corrosion.',
    detailed_overview: unit2Overview,
    topics_covered: [
      {
        title: '1. Redox Concepts, Oxidation Numbers & Balancing',
        topic_title: '1. Redox & Oxidation Numbers',
        explanation: 'Oxidation is loss of electrons/increase in oxidation number; reduction is gain of electrons/decrease in oxidation number. Redox reactions are balanced via half-reaction (ion-electron) method in acidic or basic solutions.',
      },
      {
        title: '2. Electrolysis, Electrolytic Cells & Preferential Discharge',
        topic_title: '2. Electrolysis & Preferential Discharge',
        explanation: 'Electrolytic cells use electrical energy to force non-spontaneous reactions. Cations lower in reduction series discharge at cathode (-), anions at anode (+). Examples include molten NaCl, brine NaCl(aq), dilute H2SO4, and CuSO4 electrorefining.',
      },
      {
        title: '3. Faraday\'s Laws of Electrolysis',
        topic_title: '3. Faraday\'s Laws',
        explanation: '1st Law: m = (M I t) / (n F). 2nd Law: m1/E1 = m2/E2 where E = M/n. 1 Faraday = 96,500 C = 1 mole of electrons.',
      },
      {
        title: '4. Galvanic Cells, Daniell Cell & Standard Potentials',
        topic_title: '4. Galvanic Cells & Standard Potentials',
        explanation: 'Galvanic cells produce electrical power from spontaneous reactions. Daniell Cell: Zn(s) | Zn2+(1M) || Cu2+(1M) | Cu(s). E°cell = E°cathode - E°anode = 0.34 - (-0.76) = +1.10 V. Salt bridge maintains electrical neutrality.',
      },
      {
        title: '5. Nernst Equation, Batteries, Fuel Cells & Corrosion',
        topic_title: '5. Nernst Equation & Commercial Applications',
        explanation: 'Ecell = E°cell - (0.0592/n) log Q. ΔG° = -nFE°cell. Lead-acid car battery uses Pb, PbO2, H2SO4 (2V/cell). Fuel cells combine H2 + O2 to produce water and electricity. Corrosion of iron forms hydrated Fe2O3.nH2O.',
      }
    ],
    key_concepts: [
      { concept: 'Oxidation vs Reduction', explanation: 'OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons.' },
      { concept: 'Electrochemical Cells Comparison', explanation: 'Galvanic: Spontaneous (ΔG < 0, Ecell > 0), Anode (-), Cathode (+). Electrolytic: Non-spontaneous (ΔG > 0), Anode (+), Cathode (-).' },
      { concept: 'Preferential Discharge', explanation: 'Cations lower in reduction series and anions with lower oxidation overpotentials discharge first.' },
      { concept: 'Faraday\'s First Law', explanation: 'Mass deposited m = (M x I x t) / (n x 96,500).' },
      { concept: 'Standard Hydrogen Electrode (SHE)', explanation: 'Arbitrary reference standard E° = 0.00 V.' },
      { concept: 'Cell Potential & Spontaneity', explanation: 'E°cell = E°cathode - E°anode. Positive E°cell indicates spontaneous forward reaction.' },
      { concept: 'Nernst Equation', explanation: 'Ecell = E°cell - (0.0592/n)log Q at 25°C. Predicts voltage under non-standard concentrations.' },
      { concept: 'Lead-Acid Storage Battery', explanation: 'Secondary rechargeable battery: Pb + PbO2 + 2H2SO4 <=> 2PbSO4 + 2H2O (2.0 V/cell).' },
      { concept: 'Rusting Mechanism & Prevention', explanation: 'Electrochemical corrosion of iron into Fe2O3.nH2O, prevented by galvanizing, painting, or sacrificial Mg/Zn anodes.' }
    ],
    core_formulas_rules: [
      { formula_or_law: 'm = (M x I x t) / (n x F)', explanation: 'Faraday\'s First Law of Electrolysis', units_conditions: 'F = 96,500 C/mol, t in seconds' },
      { formula_or_law: 'm1 / E1 = m2 / E2', explanation: 'Faraday\'s Second Law for series electrolytic cells', units_conditions: 'E = M / n (Equivalent mass)' },
      { formula_or_law: 'E°cell = E°cathode - E°anode', explanation: 'Standard electromotive force of galvanic cell', units_conditions: 'Standard states (1 M, 1 atm, 25°C)' },
      { formula_or_law: 'ΔG° = -n F E°cell', explanation: 'Standard Gibbs free energy change and cell potential', units_conditions: 'Spontaneous when ΔG° < 0 and E°cell > 0' },
      { formula_or_law: 'log K = (n x E°cell) / 0.0592', explanation: 'Equilibrium constant relationship at 25°C', units_conditions: 'T = 298.15 K' },
      { formula_or_law: 'Ecell = E°cell - (0.0592 / n) log Q', explanation: 'Nernst equation for non-standard concentration cell potential', units_conditions: 'Q = [Products]^c / [Reactants]^a' }
    ],
    euee_exam_tips: [
      { trap: 'Reversing Anode and Cathode signs between Galvanic and Electrolytic Cells', how_to_avoid: 'In BOTH cells, Oxidation ALWAYS occurs at Anode and Reduction at Cathode. But in Galvanic cells, Anode is (-), whereas in Electrolytic cells, Anode is (+).', frequency: 'Critical' },
      { trap: 'Electrolysis of Aqueous NaCl vs Molten NaCl', how_to_avoid: 'Molten NaCl yields Na metal at cathode; Concentrated aqueous NaCl yields H2 gas at cathode because H+ is reduced preferentially over Na+.', frequency: 'Critical' },
      { trap: 'Calculating time in minutes instead of seconds in Faraday equations', how_to_avoid: 'Always convert time t into seconds (multiply minutes by 60) before applying m = (M I t)/(n F).', frequency: 'High' }
    ],
    practice_quiz: [
      { question: 'In the reaction Zn + Cu^2+ -> Zn^2+ + Cu, which species is the oxidizing agent?', options: ['Zn', 'Cu^2+', 'Zn^2+', 'Cu'], correct_index: 1, explanation: 'Cu^2+ gains electrons and is reduced, making it the oxidizing agent.' },
      { question: 'What is the oxidation number of chromium in K2Cr2O7?', options: ['+3', '+6', '+7', '+12'], correct_index: 1, explanation: '2(+1) + 2x + 7(-2) = 0 -> 2x = 12 -> x = +6.' },
      { question: 'When a current of 5 A flows through AgNO3 solution for 965 seconds, what mass of silver is deposited? (Ag = 108 g/mol, F = 96,500 C/mol)', options: ['5.4 g', '10.8 g', '2.7 g', '1.35 g'], correct_index: 0, explanation: 'm = (108 x 5 x 965) / (1 x 96,500) = 5.4 g.' },
      { question: 'In electrolysis of molten sodium chloride, what products are formed at the cathode and anode respectively?', options: ['Na and Cl2', 'H2 and O2', 'Na and O2', 'H2 and Cl2'], correct_index: 0, explanation: 'Cathode reduces Na+ -> Na(l); Anode oxidizes 2Cl- -> Cl2(g).' },
      { question: 'What is the standard cell potential for: Mg + Zn^2+ -> Mg^2+ + Zn, given E° Mg^2+/Mg = -2.37 V and E° Zn^2+/Zn = -0.76 V?', options: ['-3.13 V', '+1.61 V', '-1.61 V', '+3.13 V'], correct_index: 1, explanation: 'E°cell = E°cathode - E°anode = -0.76 - (-2.37) = +1.61 V.' },
      { question: 'In a galvanic cell, electrons flow through the external circuit from:', options: ['cathode to anode', 'anode to cathode', 'positive to negative', 'salt bridge to electrodes'], correct_index: 1, explanation: 'Electrons flow externally from anode (site of oxidation) to cathode (site of reduction).' },
      { question: 'Which factor does NOT affect preferential discharge during electrolysis?', options: ['Position in electrochemical series', 'Concentration of ions', 'Nature of electrode', 'Color of the solution'], correct_index: 3, explanation: 'Discharge depends on reduction potential, concentration, and electrode overpotential, not solution color.' },
      { question: 'Calculate the time required to deposit 3.2 g of copper from CuSO4 solution using a current of 2 A. (Cu = 63.5 g/mol, F = 96,500 C/mol)', options: ['2412.5 seconds', '4825 seconds', '1206.25 seconds', '9650 seconds'], correct_index: 1, explanation: 'm = (M I t)/(n F) -> t = (3.2 x 2 x 96,500) / (63.5 x 2) = 4825 seconds.' },
      { question: 'What is the cell notation for a cell where zinc is oxidized and silver ions are reduced?', options: ['Ag | Ag+ || Zn2+ | Zn', 'Zn | Zn2+ || Ag+ | Ag', 'Zn2+ | Zn || Ag | Ag+', 'Ag+ | Ag || Zn | Zn2+'], correct_index: 1, explanation: 'Anode oxidation on left | salt bridge || cathode reduction on right: Zn | Zn2+ || Ag+ | Ag.' },
      { question: 'In the electrolysis of dilute H2SO4 solution using platinum electrodes, what gas is evolved at the anode?', options: ['H2', 'O2', 'SO2', 'SO3'], correct_index: 1, explanation: '4OH- -> 2H2O + O2 + 4e- evolves oxygen gas at the anode.' },
      { question: 'Two electrolytic cells containing AgNO3 and CuSO4 are connected in series. If 1.08 g of Ag is deposited, what mass of Cu is deposited? (Ag = 108, Cu = 63.5)', options: ['0.318 g', '0.635 g', '1.27 g', '0.159 g'], correct_index: 0, explanation: 'm1/E1 = m2/E2 -> 1.08 / 108 = m(Cu) / (63.5/2) -> 0.01 x 31.75 = 0.3175 g ≈ 0.318 g.' },
      { question: 'What is the function of a salt bridge in a galvanic cell?', options: ['To allow electron flow', 'To maintain electrical neutrality', 'To increase cell voltage', 'To store electrolyte'], correct_index: 1, explanation: 'Salt bridge maintains electrical neutrality by ion diffusion without mixing electrolyte solutions.' },
      { question: 'Calculate the standard cell potential for: 2Al + 3Cu^2+ -> 2Al^3+ + 3Cu (E° Al^3+/Al = -1.66 V, E° Cu^2+/Cu = +0.34 V):', options: ['+2.00 V', '-1.32 V', '+1.32 V', '-2.00 V'], correct_index: 0, explanation: 'E°cell = E°cathode - E°anode = +0.34 - (-1.66) = +2.00 V.' },
      { question: 'In which type of cell is the anode positively charged?', options: ['Galvanic cell', 'Voltaic cell', 'Electrolytic cell', 'Fuel cell'], correct_index: 2, explanation: 'In electrolytic cells, the anode is connected to the positive terminal of the power supply.' },
      { question: 'What happens to the pH at the cathode during electrolysis of water?', options: ['Decreases', 'Increases', 'Remains constant', 'First increases then decreases'], correct_index: 1, explanation: 'Reduction produces OH- ions: 2H2O + 2e- -> H2 + 2OH-, which increases the pH.' },
      { question: 'How many moles of electrons are required to deposit 0.1 mole of aluminum from Al^3+ solution?', options: ['0.1 mole', '0.2 mole', '0.3 mole', '0.05 mole'], correct_index: 2, explanation: 'Al^3+ + 3e- -> Al, so 0.1 mol Al requires 0.1 x 3 = 0.3 moles of electrons.' },
      { question: 'Calculate the cell potential at 25°C for the Zn-Cu cell when [Zn^2+] = 0.1 M and [Cu^2+] = 1.0 M (E°cell = 1.10 V, n = 2):', options: ['1.10 V', '1.13 V', '1.07 V', '1.16 V'], correct_index: 1, explanation: 'E = 1.10 - (0.0592/2) log(0.1/1.0) = 1.10 - (-0.0296) = 1.1296 V ≈ 1.13 V.' },
      { question: 'In the lead-acid battery during discharge, what substance is formed at both electrodes?', options: ['PbO2', 'Pb', 'PbSO4', 'H2SO4'], correct_index: 2, explanation: 'Both anode (Pb) and cathode (PbO2) react with H2SO4 to form solid PbSO4 precipitate.' },
      { question: 'Which metal cannot be extracted by electrolysis of its aqueous salt solution?', options: ['Copper', 'Sodium', 'Silver', 'Nickel'], correct_index: 1, explanation: 'Sodium has high reactivity (very negative E°); water (H+) is reduced preferentially in aqueous medium.' },
      { question: 'What is the value of the Faraday constant?', options: ['96,500 J/mol', '96,500 C/mol', '96,500 V/mol', '96,500 A/mol'], correct_index: 1, explanation: '1 Faraday = 96,500 Coulombs per mole of electrons.' },
      { question: 'In electroplating silver onto a spoon, the spoon should be made the:', options: ['anode', 'cathode', 'salt bridge', 'electrolyte'], correct_index: 1, explanation: 'The object to be plated is placed at the cathode where Ag+ ions are reduced to Ag metal.' },
      { question: 'Calculate the equilibrium constant K for a cell reaction with E°cell = +0.30 V at 25°C (n = 2):', options: ['1.0 x 10^10', '1.0 x 10^5', '1.0 x 10^20', '1.0 x 10^15'], correct_index: 0, explanation: 'log K = (2 x 0.30) / 0.0592 = 10.135 -> K ≈ 1.0 x 10^10.' },
      { question: 'Which of the following will increase the cell potential of a galvanic cell?', options: ['Increasing product concentration', 'Decreasing reactant concentration', 'Increasing reactant concentration', 'Allowing the cell to operate longer'], correct_index: 2, explanation: 'Increasing reactant concentration decreases Q, which increases Ecell via Nernst equation.' },
      { question: 'In the electrolysis of CuSO4 solution using copper electrodes, what happens?', options: ['Copper deposits at cathode, oxygen evolves at anode', 'Copper dissolves at anode, copper deposits at cathode', 'Oxygen evolves at both electrodes', 'Hydrogen evolves at cathode, oxygen at anode'], correct_index: 1, explanation: 'Active Cu anode dissolves into Cu^2+ while Cu^2+ deposits as pure copper at the cathode.' },
      { question: 'What is the relationship between Gibbs free energy and cell potential?', options: ['ΔG = n x F x Ecell', 'ΔG = -n x F x Ecell', 'ΔG = Ecell / (n x F)', 'ΔG = -Ecell / (n x F)'], correct_index: 1, explanation: 'ΔG = -nFEcell. Positive Ecell gives negative ΔG (spontaneous).' },
      { question: 'Calculate the amount of charge needed to deposit 2.7 g of aluminum (Al = 27 g/mol, F = 96,500 C/mol):', options: ['9,650 C', '19,300 C', '28,950 C', '38,600 C'], correct_index: 2, explanation: 'Moles Al = 2.7/27 = 0.1 mol. Moles e- = 0.1 x 3 = 0.3 mol. Q = 0.3 x 96,500 = 28,950 C.' },
      { question: 'Which type of cell is a hydrogen-oxygen fuel cell?', options: ['Primary cell', 'Secondary cell', 'Neither, it is a fuel cell', 'Both primary and secondary'], correct_index: 2, explanation: 'Fuel cells convert chemical energy of continuous fuel feed into electricity.' },
      { question: 'In a concentration cell, the electrode in the more concentrated solution acts as the:', options: ['anode', 'cathode', 'salt bridge', 'neither electrode'], correct_index: 1, explanation: 'The concentrated half-cell reduces cations to lower concentration, acting as cathode.' },
      { question: 'What is produced when concentrated brine solution is electrolyzed using inert electrodes?', options: ['Na, Cl2, H2', 'H2, Cl2, NaOH', 'Na, O2, H2', 'H2, O2, NaCl'], correct_index: 1, explanation: 'Cathode produces H2, anode produces Cl2, leaving NaOH in solution.' },
      { question: 'Calculate the mass of oxygen gas produced at the anode when 4 g of hydrogen is produced at the cathode during water electrolysis (H = 1, O = 16):', options: ['16 g', '32 g', '64 g', '8 g'], correct_index: 1, explanation: '2H2O -> 2H2 + O2 (4 g H2 corresponds to 32 g O2, 2 mol H2 : 1 mol O2).' }
    ],
    ai_assisted: false,
    generated_at: new Date().toISOString(),
    focus: 'summary',
    book_grounded: true
  };

  // 3. Save to database under primary and alias keys
  db.saveChapterShortNote(unit1ShortNote);
  db.saveChapterShortNote(unit2ShortNote);

  // Also save under Unit 3 and Unit 4 aliases for 5-unit textbook compatibility
  db.saveChapterShortNote({
    ...unit1ShortNote,
    id: 'note-book-12-chem-3',
    chapter_number: 3,
    chapter_title: 'Unit 3: Acid-Base Equilibria'
  });
  db.saveChapterShortNote({
    ...unit2ShortNote,
    id: 'note-book-12-chem-4',
    chapter_number: 4,
    chapter_title: 'Unit 4: Electrochemistry'
  });

  // 4. Save individual topic notes for Unit 1 & Unit 2
  const unit1Topics = [
    { title: 'Arrhenius Concept', desc: 'Acids increase H+ in aqueous solution; bases increase OH- in aqueous solution.' },
    { title: 'Brønsted-Lowry Concept', desc: 'Proton donor-acceptor conjugate pairs and amphiprotic species.' },
    { title: 'Lewis Concept', desc: 'Electron pair acceptor (acid) and electron pair donor (base) coordinate bonding.' },
    { title: 'Autoionization of Water and pH Scale', desc: 'Kw = 1.0 x 10^-14 at 25°C, pH = -log[H+], pOH = -log[OH-].' },
    { title: 'Weak Acids, Bases and Percent Ionization', desc: 'Ka and Kb dissociation constants, percent ionization increases upon dilution.' },
    { title: 'Common Ion Effect', desc: 'Suppression of weak electrolyte ionization by common ion addition.' },
    { title: 'Buffer Solutions and Henderson-Hasselbalch', desc: 'Resisting pH changes using weak acid/base conjugate systems.' },
    { title: 'Hydrolysis of Salts', desc: 'Acidic, basic, and neutral salts resulting from parent acid-base combinations.' },
    { title: 'Acid-Base Indicators and Titrations', desc: 'Color transition ranges, equivalence vs end points, and titration curves.' }
  ];

  unit1Topics.forEach((top, i) => {
    const cleanName = top.title.toLowerCase().replace(/[^a-z0-9]/g, '_');
    db.saveChapterShortNote({
      ...unit1ShortNote,
      id: `note-book-12-chem-1-top-${i + 1}`,
      topic_title: top.title,
      unit_summary: `In-depth topic notes on ${top.title} under Acid-Base Equilibria: ${top.desc}`
    });
  });

  const unit2Topics = [
    { title: 'Oxidation-Reduction Reactions & Oxidation Numbers', desc: 'Rules for assigning oxidation numbers and balancing redox equations via half-reaction method.' },
    { title: 'Electrolytic Cells & Preferential Discharge', desc: 'Non-spontaneous reactions, anode/cathode conventions, and factors affecting ion discharge.' },
    { title: 'Faraday\'s Laws of Electrolysis', desc: 'Quantitative calculations m = (M I t)/(n F) and equivalent masses m1/E1 = m2/E2.' },
    { title: 'Industrial Applications of Electrolysis', desc: 'Hall-Héroult aluminum extraction, copper electrorefining, and electroplating.' },
    { title: 'Galvanic Cells & Standard Electrode Potentials', desc: 'Daniell cell Zn-Cu, salt bridge mechanism, standard hydrogen electrode (SHE), and E°cell calculations.' },
    { title: 'Nernst Equation & Thermodynamics', desc: 'Ecell = E°cell - (0.0592/n)log Q, ΔG° = -nFE°cell, and equilibrium constant log K.' },
    { title: 'Batteries, Fuel Cells and Corrosion', desc: 'Primary dry/alkaline cells, secondary lead-acid batteries, H2-O2 fuel cells, and iron corrosion prevention.' },
    { title: 'Comparison of Galvanic and Electrolytic Cells', desc: 'Comprehensive comparative analysis and similarities between electrochemical cell types.' }
  ];

  unit2Topics.forEach((top, i) => {
    const cleanName = top.title.toLowerCase().replace(/[^a-z0-9]/g, '_');
    db.saveChapterShortNote({
      ...unit2ShortNote,
      id: `note-book-12-chem-2-top-${i + 1}`,
      topic_title: top.title,
      unit_summary: `In-depth topic notes on ${top.title} under Electrochemistry: ${top.desc}`
    });
  });

  // 5. Update book chapters list in DB to ensure Unit 1 & Unit 2 are clearly structured
  const chemChapters = db.getBookChapters('book-12-chem');
  const existingU1 = chemChapters.find(c => c.chapter_number === 1);
  if (existingU1) {
    existingU1.chapter_title = 'Unit 1: Acid-Base Equilibria';
    existingU1.description = 'Comprehensive coverage of Arrhenius, Brønsted-Lowry, Lewis models, autoionization of water, pH scale, weak acid/base constants, common ion effect, buffer solutions, salt hydrolysis, and acid-base titration curves.';
    existingU1.topics = unit1Topics.map((t, idx) => ({
      id: `topic-12-chem-1-${idx + 1}`,
      chapter_id: existingU1.id,
      topic_number: `1.${idx + 1}`,
      title: t.title,
      description: t.desc,
      start_page: idx * 5 + 1
    }));
    db.addBookChapter(existingU1);
  }

  const existingU2 = chemChapters.find(c => c.chapter_number === 2);
  if (existingU2) {
    existingU2.chapter_title = 'Unit 2: Electrochemistry';
    existingU2.description = 'Comprehensive coverage of redox balancing, electrolytic cells, preferential discharge, Faraday\'s laws, industrial metal extraction, galvanic Daniell cells, standard electrode potentials, Nernst equation, commercial batteries, fuel cells, and corrosion.';
    existingU2.topics = unit2Topics.map((t, idx) => ({
      id: `topic-12-chem-2-${idx + 1}`,
      chapter_id: existingU2.id,
      topic_number: `2.${idx + 1}`,
      title: t.title,
      description: t.desc,
      start_page: idx * 5 + 45
    }));
    db.addBookChapter(existingU2);
  }

  // 6. Flush and sync everything permanently to all 3 backup locations
  db.flush();
  db.syncOfficialBackups();

  console.log('[Script] Successfully saved all Grade 12 Chemistry Unit 1 & 2 notes, diagrams, tables, and 60 review questions + solutions permanently!');
}

insertGrade12ChemistryNotes();
