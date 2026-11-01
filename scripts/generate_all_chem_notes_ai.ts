import fs from 'fs';
import path from 'path';
import { GRADE_12_CURRICULUM } from '../server/curriculumRegistryGrade12';
import { ChapterShortNote } from '../src/types';

export function generateAllGrade12ChemistryNotes() {
  console.log('[Notes Generator] Building comprehensive AI-grounded Short Notes and Detailed Notes for Grade 12 Chemistry...');

  const dbPath = path.join(process.cwd(), 'data', 'database.json');
  const backupDataPath = path.join(process.cwd(), 'data', 'official_textbooks_backup.json');
  const backupServerPath = path.join(process.cwd(), 'server', 'official_textbooks_backup.json');

  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  if (!db.chapter_short_notes) db.chapter_short_notes = {};

  const chemReg = GRADE_12_CURRICULUM['book-12-nat-chem'];
  const bookIds = ['book-12-nat-chem', 'book-12-chem'];

  // Knowledge base for Grade 12 Chemistry Units and Topics
  const topicDetails: Record<string, {
    summary: string;
    overview: string;
    shortNotes: string[];
    keyPoints: string[];
    formulaRules: Array<{ formula_or_law: string; explanation: string; units_conditions: string }>;
    eueeTips: Array<{ trap: string; how_to_avoid: string; frequency: string }>;
    workedExamples: Array<{ title: string; problem: string; step_solution: string; result: string }>;
    quiz: Array<{ question: string; options: string[]; correct_index: number; explanation: string }>;
  }> = {
    // UNIT 1 TOPICS
    '1.1': {
      summary: 'Arrhenius, Brønsted-Lowry, and Lewis theories of acids and bases, conjugate pairs, and amphiprotic behavior.',
      overview: 'Acid-base definitions evolved from Arrhenius (aqueous H+/OH- yield) to Brønsted-Lowry (proton donor/acceptor) and Lewis (electron-pair acceptor/donor). Conjugate acid-base pairs differ by exactly one proton (H+). The stronger an acid, the weaker its conjugate base. Amphiprotic substances (like H2O and HCO3-) can act as either acids or bases depending on the reactant.',
      shortNotes: [
        'Arrhenius acid produces H+ in water; Arrhenius base produces OH- in water.',
        'Brønsted-Lowry acid is a proton (H+) donor; Brønsted-Lowry base is a proton acceptor.',
        'Conjugate pairs differ by only one proton: Acid <=> Conjugate Base + H+.',
        'Inverse strength relationship: Strong acid gives exceptionally weak conjugate base.',
        'Amphiprotic species (H2O, HCO3-, H2PO4-) can donate or accept protons.',
        'Lewis acid accepts electron pairs (BF3, AlCl3, Cu2+); Lewis base donates electron pairs (NH3, H2O, OH-).'
      ],
      keyPoints: [
        'Arrhenius concept is limited to aqueous solutions and fails to explain basicity of NH3.',
        'Brønsted-Lowry concept operates in both aqueous and non-aqueous media.',
        'Lewis concept is the broadest, explaining coordinate covalent adduct formation without proton transfer.'
      ],
      formulaRules: [
        { formula_or_law: 'Acid <=> Conjugate Base + H+', explanation: 'Conjugate base has 1 fewer H and 1 more negative charge.', units_conditions: 'Applies to all Brønsted-Lowry conjugate pairs.' },
        { formula_or_law: 'Lewis Adduct: A + :B -> A-B', explanation: 'Formation of coordinate covalent (dative) bond.', units_conditions: 'A is electrophile, B is nucleophile with lone pair.' }
      ],
      eueeTips: [
        { trap: 'Confusing Conjugate Acid vs Conjugate Base', how_to_avoid: 'Conjugate base has 1 FEWER H+ (e.g., H2PO4- loses H+ to become HPO4 2-). Conjugate acid has 1 MORE H+ (e.g., H2PO4- gains H+ to become H3PO4).', frequency: 'Critical' },
        { trap: 'Lewis Acid Identification', how_to_avoid: 'Look for species with incomplete octets (BF3, AlCl3) or positive metal cations (Fe3+, Cu2+).', frequency: 'High' }
      ],
      workedExamples: [
        {
          title: 'Identifying Conjugate Pairs',
          problem: 'Identify the acid, base, conjugate acid, and conjugate base in: HSO4-(aq) + NH3(aq) <=> SO4 2-(aq) + NH4+(aq).',
          step_solution: '1. HSO4- loses a proton to become SO4 2-, so HSO4- is the acid and SO4 2- is its conjugate base.\n2. NH3 gains a proton to become NH4+, so NH3 is the base and NH4+ is its conjugate acid.',
          result: 'Acid: HSO4-, Base: NH3, Conjugate Base: SO4 2-, Conjugate Acid: NH4+.'
        }
      ],
      quiz: [
        { question: 'What is the conjugate base of HCO3-?', options: ['H2CO3', 'CO3 2-', 'H3O+', 'OH-'], correct_index: 1, explanation: 'Removing one proton (H+) from HCO3- yields the carbonate ion, CO3 2-.' },
        { question: 'Which of the following is a Lewis acid but NOT a Brønsted-Lowry acid?', options: ['HCl', 'BF3', 'CH3COOH', 'H2SO4'], correct_index: 1, explanation: 'BF3 contains no hydrogen to donate as a proton, but accepts an electron pair into its vacant p orbital.' }
      ]
    },
    '1.2': {
      summary: 'Water autoionization (Kw = 1.0 x 10^-14 at 25°C), pH and pOH scales, weak acid/base dissociation constants (Ka, Kb), and percent ionization.',
      overview: 'Water autoionizes into H3O+ and OH- with Kw = 1.0 x 10^-14 at 25°C. pH = -log[H3O+] and pH + pOH = 14.00. Weak acids ionize partially with Ka = [H3O+][A-]/[HA]. For conjugate pairs, Ka * Kb = Kw. Percent ionization increases upon dilution (Ostwald dilution law). Polyprotic acids ionize in sequential steps with Ka1 >> Ka2 >> Ka3.',
      shortNotes: [
        'Kw = [H3O+][OH-] = 1.0 x 10^-14 at 25°C; autoionization is endothermic, so Kw increases with temperature.',
        'pH = -log[H3O+], pOH = -log[OH-], and pH + pOH = 14.00 at 25°C.',
        'Ka measures weak acid strength; larger Ka indicates higher ionization and lower pH.',
        'Ka * Kb = Kw = 1.0 x 10^-14 for any conjugate acid-base pair.',
        'Percent ionization = ([H3O+]eq / [HA]initial) x 100%; increases upon dilution.',
        '5% Rule: If x / C_initial < 0.05, approximation C_initial - x ≈ C_initial is valid.'
      ],
      keyPoints: [
        'Neutral pH equals 7.00 only at 25°C. At higher temperatures, Kw > 10^-14, so neutral pH is below 7.',
        'For polyprotic acids (H3PO4, H2CO3), Ka1 is much larger than Ka2, so [H3O+] is determined by the first step.'
      ],
      formulaRules: [
        { formula_or_law: 'pH = -log[H3O+], pOH = -log[OH-]', explanation: 'Logarithmic scale of ion concentrations.', units_conditions: 'pH + pOH = 14.00 at 25°C.' },
        { formula_or_law: 'Ka = [H3O+][A-] / [HA]', explanation: 'Acid dissociation equilibrium constant.', units_conditions: 'Valid for weak monoprotic acids.' },
        { formula_or_law: 'Ka * Kb = Kw', explanation: 'Relates dissociation constants of conjugate pairs.', units_conditions: 'pKa + pKb = 14.00 at 298 K.' }
      ],
      eueeTips: [
        { trap: 'Assuming neutral pH is always 7.00 regardless of temperature', how_to_avoid: 'Neutrality strictly means [H3O+] = [OH-]. Since autoionization is endothermic, Kw increases with temperature, making neutral pH < 7 at elevated temperatures.', frequency: 'Critical' },
        { trap: 'Ignoring the 5% approximation check', how_to_avoid: 'Always check if x / C_initial < 0.05. If >= 5%, you must solve the full quadratic equation.', frequency: 'High' }
      ],
      workedExamples: [
        {
          title: 'Calculating pH of a Weak Acid Solution',
          problem: 'Calculate the pH of a 0.10 M solution of acetic acid (CH3COOH, Ka = 1.8 x 10^-5).',
          step_solution: '1. Equation: CH3COOH + H2O <=> H3O+ + CH3COO-\n2. Ka = x^2 / (0.10 - x) ≈ x^2 / 0.10 = 1.8 x 10^-5\n3. x^2 = 1.8 x 10^-6 => x = 1.34 x 10^-3 M\n4. Check 5% rule: (1.34 x 10^-3 / 0.10) x 100% = 1.34% < 5% (Valid!)\n5. pH = -log(1.34 x 10^-3) = 2.87.',
          result: 'pH = 2.87.'
        }
      ],
      quiz: [
        { question: 'What is the pH of a solution with [OH-] = 1.0 x 10^-4 M at 25°C?', options: ['4.0', '10.0', '7.0', '14.0'], correct_index: 1, explanation: 'pOH = -log(10^-4) = 4.0; pH = 14.0 - 4.0 = 10.0.' },
        { question: 'According to Ostwald dilution law, what happens to percent ionization of a weak acid as the solution is diluted?', options: ['Decreases', 'Increases', 'Remains unchanged', 'Becomes zero'], correct_index: 1, explanation: 'Dilution shifts the equilibrium forward, increasing the fraction of ionized molecules.' }
      ]
    },
    '1.3': {
      summary: 'Common ion effect and buffer solutions, Henderson-Hasselbalch equation, and biological buffering mechanisms.',
      overview: 'The common ion effect is the suppression of weak electrolyte ionization caused by adding an ionic compound that supplies a common ion. Buffer solutions resist pH changes upon adding small quantities of strong acid or base. Buffers consist of weak acid + conjugate base salt, or weak base + conjugate acid salt. pH is calculated using the Henderson-Hasselbalch equation: pH = pKa + log([Base]/[Acid]). Buffer capacity is maximized when [Acid] = [Conjugate Base], where pH = pKa.',
      shortNotes: [
        'Common ion effect suppresses weak acid/base ionization according to Le Chatelier principle.',
        'Adding CH3COONa to CH3COOH shifts equilibrium left, decreasing [H3O+] and raising the pH.',
        'Buffer solution consists of weak acid + its conjugate base salt, or weak base + conjugate acid salt.',
        'Henderson-Hasselbalch equation: pH = pKa + log([Conjugate Base] / [Weak Acid]).',
        'Buffer capacity is maximized when [Acid] = [Base], meaning pH = pKa.',
        'Human blood is buffered at pH 7.35–7.45 primarily by the carbonic acid/bicarbonate (H2CO3 / HCO3-) system.'
      ],
      keyPoints: [
        'Buffers cannot be made from strong acids and strong bases.',
        'Effective buffer range is typically pKa ± 1.0 pH units.'
      ],
      formulaRules: [
        { formula_or_law: 'pH = pKa + log([Conjugate Base] / [Weak Acid])', explanation: 'Henderson-Hasselbalch equation for acidic buffer systems.', units_conditions: 'Valid when concentrations exceed 0.01 M.' }
      ],
      eueeTips: [
        { trap: 'Selecting a strong acid + strong base as a buffer', how_to_avoid: 'A buffer MUST contain a weak conjugate pair (e.g., CH3COOH + CH3COONa). NaCl + HCl is NOT a buffer.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Buffer pH Calculation',
          problem: 'Calculate the pH of a buffer solution containing 0.15 M CH3COOH and 0.20 M CH3COONa (Ka = 1.8 x 10^-5, pKa = 4.74).',
          step_solution: '1. Apply Henderson-Hasselbalch: pH = pKa + log([CH3COO-] / [CH3COOH])\n2. pH = 4.74 + log(0.20 / 0.15) = 4.74 + log(1.333)\n3. pH = 4.74 + 0.125 = 4.87.',
          result: 'pH = 4.87.'
        }
      ],
      quiz: [
        { question: 'A buffer solution can be prepared by mixing:', options: ['HCl and NaCl', 'NaOH and NaCl', 'CH3COOH and CH3COONa', 'H2SO4 and K2SO4'], correct_index: 2, explanation: 'Buffers require a weak acid and its conjugate base salt.' }
      ]
    },
    '1.4': {
      summary: 'Hydrolysis of salts: acidic, basic, and neutral solutions resulting from parent acid-base combinations.',
      overview: 'Salt hydrolysis is the reaction of salt anions or cations with water to generate OH- or H3O+. Salts of strong acid + strong base (NaCl) do not hydrolyze (neutral, pH = 7.00). Salts of weak acid + strong base (CH3COONa) hydrolyze to produce basic solutions (pH > 7). Salts of strong acid + weak base (NH4Cl) hydrolyze to produce acidic solutions (pH < 7). For weak acid + weak base salts, pH depends on whether Ka > Kb (acidic) or Kb > Ka (basic).',
      shortNotes: [
        'Strong acid + Strong base salt (NaCl, KNO3): Neither ion hydrolyzes; pH = 7.00 (neutral).',
        'Weak acid + Strong base salt (CH3COONa, NaCN): Anion hydrolyzes to yield OH-; pH > 7.00 (basic).',
        'Strong acid + Weak base salt (NH4Cl, (NH4)2SO4): Cation hydrolyzes to yield H3O+; pH < 7.00 (acidic).',
        'Weak acid + Weak base salt (NH4CH3COO): Both ions hydrolyze; solution is acidic if Ka > Kb, basic if Kb > Ka, neutral if Ka = Kb.'
      ],
      keyPoints: [
        'Anions derived from strong monoprotic acids (Cl-, NO3-, Br-, I-) are negligible bases and do not hydrolyze.',
        'Cations derived from strong bases (Group IA alkali metals and Ca2+, Sr2+, Ba2+) do not hydrolyze.'
      ],
      formulaRules: [
        { formula_or_law: 'Kh = Kw / Ka (for anion hydrolysis); Kh = Kw / Kb (for cation hydrolysis)', explanation: 'Hydrolysis constant of salt ions.', units_conditions: 'Kw = 1.0 x 10^-14 at 25°C.' }
      ],
      eueeTips: [
        { trap: 'Assuming all neutral-tasting salts have pH = 7', how_to_avoid: 'Salts containing the conjugate of a weak acid (e.g., Na2CO3, CH3COONa) are ALWAYS basic. Salts containing NH4+ are ALWAYS acidic.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Predicting Solution pH of Salts',
          problem: 'Classify whether aqueous solutions of (a) KBr, (b) NaNO2, and (c) NH4NO3 are acidic, basic, or neutral.',
          step_solution: '1. KBr: From strong base (KOH) and strong acid (HBr) -> Neutral (pH = 7).\n2. NaNO2: From strong base (NaOH) and weak acid (HNO2) -> Basic (pH > 7).\n3. NH4NO3: From weak base (NH3) and strong acid (HNO3) -> Acidic (pH < 7).',
          result: '(a) Neutral, (b) Basic, (c) Acidic.'
        }
      ],
      quiz: [
        { question: 'Which of the following salts produces an acidic aqueous solution?', options: ['NaCl', 'CH3COONa', 'NH4Cl', 'K2CO3'], correct_index: 2, explanation: 'NH4Cl contains the ammonium ion (NH4+), which hydrolyzes to produce H3O+.' }
      ]
    },
    '1.5': {
      summary: 'Acid-base indicators, equivalents, normality (N1V1 = N2V2), and titration curves for all acid-base combinations.',
      overview: 'Acid-base indicators are weak organic acids whose protonated and deprotonated forms display different colors across a specific pH transition range (pKa ± 1). Titration is a quantitative analytical method to find the unknown concentration of an analyte using a standard solution. Equivalence point is the stoichiometric completion (moles H+ = moles OH-, or N1V1 = N2V2). End point is the observed indicator color change. In strong acid-strong base titrations, equivalence pH is 7.00. In weak acid-strong base, equivalence pH > 7.00 (phenolphthalein indicator). In strong acid-weak base, equivalence pH < 7.00 (methyl orange indicator).',
      shortNotes: [
        'Indicators change color over pH range: pH = pKa(indicator) ± 1.',
        'Phenolphthalein transition range: 8.2 (colorless) to 10.0 (pink).',
        'Methyl orange transition range: 3.1 (red) to 4.4 (yellow).',
        'Equivalence point: Theoretical stoichiometric neutralization point.',
        'End point: Experimental observation when indicator changes color.',
        'Neutralization equation: N1 * V1 = N2 * V2, where Normality N = Molarity M x n.',
        'Strong acid vs strong base: Equivalence pH = 7.00 (either methyl orange or phenolphthalein suitable).',
        'Weak acid vs strong base: Equivalence pH > 7.00 (phenolphthalein suitable).',
        'Strong acid vs weak base: Equivalence pH < 7.00 (methyl orange suitable).'
      ],
      keyPoints: [
        'The indicator transition range must encompass the vertical surge region of the titration curve.',
        'Primary standards must have high purity, known formula, stability in air, and high molar mass to minimize weighing errors.'
      ],
      formulaRules: [
        { formula_or_law: 'N1 * V1 = N2 * V2', explanation: 'Equivalence relation in volumetric acid-base titrations.', units_conditions: 'N = M x n (n = number of reacting H+ or OH-).' }
      ],
      eueeTips: [
        { trap: 'Selecting Methyl Orange for Weak Acid - Strong Base Titration', how_to_avoid: 'Weak acid + strong base titration has equivalence pH > 7 (basic salt). Methyl orange changes color at pH 3.1–4.4, prematurely ending the titration! You MUST use Phenolphthalein.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Titration Stoichiometry',
          problem: 'A 25.0 mL sample of unknown H2SO4 requires 34.2 mL of 0.120 M NaOH for complete neutralization. Calculate the molarity of H2SO4.',
          step_solution: '1. Balanced equation: H2SO4 + 2NaOH -> Na2SO4 + 2H2O\n2. Moles NaOH = 0.0342 L x 0.120 mol/L = 4.104 x 10^-3 mol\n3. Moles H2SO4 = (4.104 x 10^-3 mol) / 2 = 2.052 x 10^-3 mol\n4. Molarity H2SO4 = 2.052 x 10^-3 mol / 0.0250 L = 0.0821 M.',
          result: 'Molarity of H2SO4 = 0.0821 M.'
        }
      ],
      quiz: [
        { question: 'Which indicator is best suited for titrating acetic acid (weak acid) with sodium hydroxide (strong base)?', options: ['Methyl orange', 'Methyl red', 'Phenolphthalein', 'Litmus'], correct_index: 2, explanation: 'The equivalence point pH is basic (~8.7), which falls within the phenolphthalein color change range (8.2–10.0).' }
      ]
    },

    // UNIT 2 TOPICS
    '2.1': {
      summary: 'Oxidation and reduction definitions, oxidation number rules, and balancing redox reactions via half-reaction method.',
      overview: 'Redox reactions involve electron transfer. Oxidation is loss of electrons/increase in oxidation state; reduction is gain of electrons/decrease in oxidation state. Oxidation numbers are assigned using standard rules (uncombined elements = 0, monoatomic ions = charge, F = -1, O = -2, H = +1). Balancing in acidic solution: balance non-H/O atoms, balance O with H2O, balance H with H+, and balance charge with electrons. In basic solution, add OH- to neutralize H+ into H2O.',
      shortNotes: [
        'Oxidation: Loss of electrons; oxidation number increases. Reducing agent undergoes oxidation.',
        'Reduction: Gain of electrons; oxidation number decreases. Oxidizing agent undergoes reduction.',
        'Rules: Elements = 0, Group IA = +1, Group IIA = +2, F = -1, H = +1 (hydrides -1), O = -2 (peroxides -1).',
        'Half-reaction method balances mass and charge independently before combining.',
        'Acidic solution uses H2O and H+; basic solution neutralizes H+ with OH-.'
      ],
      keyPoints: [
        'Total electrons lost in oxidation MUST equal total electrons gained in reduction.'
      ],
      formulaRules: [
        { formula_or_law: 'Total increase in oxidation number = Total decrease in oxidation number', explanation: 'Charge conservation in redox reactions.', units_conditions: 'Fundamental law of redox balancing.' }
      ],
      eueeTips: [
        { trap: 'Confusing Oxidizing Agent with Substance Oxidized', how_to_avoid: 'The substance that is oxidized loses electrons and acts as the REDUCING AGENT. The oxidizing agent is the substance that gets reduced.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Assigning Oxidation Numbers',
          problem: 'Find the oxidation number of sulfur in H2SO4 and Cr in K2Cr2O7.',
          step_solution: '1. In H2SO4: 2(+1) + S + 4(-2) = 0 => 2 + S - 8 = 0 => S = +6.\n2. In K2Cr2O7: 2(+1) + 2(Cr) + 7(-2) = 0 => 2 + 2Cr - 14 = 0 => 2Cr = 12 => Cr = +6.',
          result: 'S = +6, Cr = +6.'
        }
      ],
      quiz: [
        { question: 'In the reaction Zn + Cu2+ -> Zn2+ + Cu, which species acts as the oxidizing agent?', options: ['Zn', 'Cu2+', 'Zn2+', 'Cu'], correct_index: 1, explanation: 'Cu2+ gains electrons (reduced), so it acts as the oxidizing agent.' }
      ]
    },
    '2.2': {
      summary: 'Electrolytic cells, electrical conduction, and preferential discharge during electrolysis of aqueous and molten systems.',
      overview: 'Electrolysis uses electrical energy to force non-spontaneous chemical reactions (delta G > 0). Electrolytic cells feature an anode connected to the positive terminal (+) where oxidation occurs, and a cathode connected to the negative terminal (-) where reduction occurs. Preferential discharge depends on reduction potential (electrochemical series), ion concentration, and electrode overpotential. Molten NaCl yields Na(l) and Cl2(g). Concentrated aqueous NaCl (brine) yields H2(g) at cathode and Cl2(g) at anode, leaving NaOH in solution.',
      shortNotes: [
        'Electrolytic cell converts electrical energy to chemical energy (non-spontaneous, delta G > 0).',
        'Anode is positive (+); site of oxidation. Cathode is negative (-); site of reduction.',
        'Preferential discharge factors: Position in electrochemical series, concentration, and electrode nature.',
        'Cations with higher reduction potentials discharge first at the cathode.',
        'Electrolysis of molten NaCl: 2NaCl(l) -> 2Na(l) + Cl2(g).',
        'Electrolysis of concentrated brine: 2NaCl + 2H2O -> H2(g) + Cl2(g) + 2NaOH(aq).'
      ],
      keyPoints: [
        'In aqueous solution, reactive metals (Na, K, Ca, Mg, Al) are NOT discharged at the cathode because water (H+) has a higher reduction potential and reduces to H2 gas.'
      ],
      formulaRules: [
        { formula_or_law: 'Cathode (-): Reduction (Cations gain e-); Anode (+): Oxidation (Anions lose e-)', explanation: 'Electrode conventions for electrolytic cells.', units_conditions: 'Universal for all electrolytic cells.' }
      ],
      eueeTips: [
        { trap: 'Predicting sodium metal formation from aqueous NaCl', how_to_avoid: 'Electrolysis of aqueous NaCl NEVER yields sodium metal because H+ is reduced preferentially over Na+ to form H2 gas. Sodium is only extracted from MOLTEN NaCl.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Predicting Electrolysis Products',
          problem: 'Predict the products formed at cathode and anode during the electrolysis of dilute H2SO4 with inert platinum electrodes.',
          step_solution: '1. Ions present: H+, OH-, SO4 2-, H2O.\n2. At Cathode (-): H+ is reduced: 2H+ + 2e- -> H2(g).\n3. At Anode (+): OH- is oxidized preferentially over SO4 2-: 4OH- -> 2H2O + O2(g) + 4e-.\n4. Net result: Electrolysis of water producing 2 volumes of H2 to 1 volume of O2.',
          result: 'Cathode: H2(g), Anode: O2(g).'
        }
      ],
      quiz: [
        { question: 'What gas is evolved at the cathode during electrolysis of brine (concentrated aqueous NaCl)?', options: ['Cl2', 'O2', 'H2', 'Na vapor'], correct_index: 2, explanation: 'Hydrogen ions from water are reduced preferentially over sodium ions, producing H2 gas.' }
      ]
    },
    '2.3': {
      summary: 'Faraday’s First and Second Laws of Electrolysis, quantitative mass and charge calculations.',
      overview: 'Faraday’s First Law states that the mass of a substance deposited or liberated at an electrode is directly proportional to the electric charge passed: m = (M * I * t) / (n * F). Faraday’s Second Law states that when the same current passes through cells in series, masses deposited are proportional to equivalent masses: m1 / E1 = m2 / E2. One Faraday (F) = 96,500 Coulombs/mol of electrons.',
      shortNotes: [
        'Faraday First Law: m = Z * Q = (M * I * t) / (n * F).',
        'Charge Q = I * t (Current in Amperes, time in SECONDS).',
        'Faraday constant: 1 F = 96,485 C/mol ≈ 96,500 C/mol of electrons.',
        'Equivalent mass: E = Molar Mass / n (where n is valence electrons transferred).',
        'Faraday Second Law: m1 / E1 = m2 / E2 for series connected cells.'
      ],
      keyPoints: [
        'Always convert time into SECONDS before substituting into Faraday formulas.'
      ],
      formulaRules: [
        { formula_or_law: 'm = (M * I * t) / (n * F)', explanation: 'Faraday First Law quantitative formula.', units_conditions: 'M in g/mol, I in A, t in seconds, F = 96,500 C/mol.' },
        { formula_or_law: 'm1 / E1 = m2 / E2', explanation: 'Faraday Second Law for series electrolytic cells.', units_conditions: 'E = M / n (Equivalent mass).' }
      ],
      eueeTips: [
        { trap: 'Forgetting to convert time in minutes or hours to seconds', how_to_avoid: 'Time t MUST be in seconds. 1 hour = 3600 seconds. 30 minutes = 1800 seconds.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Faraday First Law Calculation',
          problem: 'Calculate the mass of copper deposited when a current of 2.50 A passes through a CuSO4 solution for 40.0 minutes (Cu = 63.5 g/mol, F = 96,500 C/mol).',
          step_solution: '1. Reaction: Cu2+ + 2e- -> Cu(s), so n = 2.\n2. Time t = 40.0 x 60 s = 2400 s.\n3. Charge Q = I x t = 2.50 A x 2400 s = 6000 C.\n4. Mass m = (M * I * t) / (n * F) = (63.5 x 6000) / (2 x 96,500) = 381,000 / 193,000 = 1.97 g.',
          result: 'Mass of Cu deposited = 1.97 g.'
        }
      ],
      quiz: [
        { question: 'How many Faradays of electricity are required to deposit 1.0 mole of aluminum from molten Al2O3?', options: ['1.0 F', '2.0 F', '3.0 F', '6.0 F'], correct_index: 2, explanation: 'Al3+ + 3e- -> Al, so 1 mole of Al requires 3 moles of electrons = 3 Faradays.' }
      ]
    },
    '2.4': {
      summary: 'Industrial applications of electrolysis: Hall-Héroult extraction of aluminum, copper electrorefining, and electroplating.',
      overview: '1. Hall-Héroult Process: Aluminum is extracted by dissolving Al2O3 in molten synthetic cryolite (Na3AlF6) at 950°C. Molten aluminum forms at the carbon cathode lining (Al3+ + 3e- -> Al) and sinks. Carbon anodes are oxidized to CO2 gas and must be replaced periodically. 2. Copper Refining: Impure blister copper anode dissolves into Cu2+ while pure copper deposits on thin cathode sheets. Precious anode mud (Au, Ag, Pt) settles below. 3. Electroplating: Coating a base metal with protective/decorative metal (Ag, Cr, Au) by making the object the cathode.',
      shortNotes: [
        'Hall-Héroult: Alumina (Al2O3) dissolved in molten cryolite (Na3AlF6) at 950°C.',
        'Cryolite lowers melting point from 2050°C to 950°C and increases electrical conductivity.',
        'Cathode lining collects liquid aluminum; carbon anodes burn away as CO2.',
        'Copper electrorefining: Impure copper is anode, pure copper is cathode, electrolyte is CuSO4.',
        'Valuable anode mud contains gold, silver, and platinum.',
        'Electroplating: Object to be plated is always the CATHODE.'
      ],
      keyPoints: [
        'In electroplating, the electrolyte must contain ions of the plating metal, and the anode is made of pure plating metal.'
      ],
      formulaRules: [
        { formula_or_law: 'Cathode: Al3+ + 3e- -> Al(l); Anode: 2O 2- + C -> CO2(g) + 4e-', explanation: 'Electrode reactions in the Hall-Héroult process.', units_conditions: 'Molten bath at 950°C.' }
      ],
      eueeTips: [
        { trap: 'Role of Cryolite in Aluminum Extraction', how_to_avoid: 'Cryolite does NOT act as a chemical reactant; it acts as a flux that drastically lowers the melting temperature of alumina from 2050°C to 950°C.', frequency: 'High' }
      ],
      workedExamples: [
        {
          title: 'Copper Refining Principles',
          problem: 'In the electrorefining of blister copper, what happens to impurities more active than copper (like zinc) and less active than copper (like gold)?',
          step_solution: '1. More active metals (Zn, Fe) oxidize into aqueous ions (Zn2+, Fe2+) and remain in solution.\n2. Less active metals (Au, Ag, Pt) do not oxidize at the cell voltage; they fall to the bottom as insoluble anode mud.',
          result: 'Active impurities remain dissolved; noble impurities form anode mud.'
        }
      ],
      quiz: [
        { question: 'In the Hall-Héroult process, synthetic cryolite (Na3AlF6) is added to alumina to:', options: ['Act as an oxidizing agent', 'Lower the melting point and improve conductivity', 'Prevent oxidation of carbon anodes', 'Precipitate impurities'], correct_index: 1, explanation: 'Cryolite lowers the melting temperature from 2050°C to 950°C and enhances electrical conductivity.' }
      ]
    },
    '2.5': {
      summary: 'Voltaic (galvanic) cells, Daniell cell, standard hydrogen electrode (SHE), Nernst equation, batteries, fuel cells, and corrosion.',
      overview: 'A voltaic (galvanic) cell converts chemical energy from a spontaneous redox reaction (delta G < 0) into electrical work (E°cell > 0). Daniell cell: Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s) has E°cell = +1.10 V. The salt bridge maintains electrical neutrality via ion migration. Standard reduction potentials (E°) are measured against the SHE (assigned 0.00 V). E°cell = E°cathode - E°anode. delta G° = -nFE°cell. The Nernst equation relates cell potential to non-standard concentrations: Ecell = E°cell - (0.0592/n)log Q. Batteries include primary cells (dry cell, alkaline), secondary rechargeable cells (lead-acid car battery, lithium-ion), and fuel cells (H2/O2). Corrosion of iron (rusting) is an electrochemical process forming Fe2O3.nH2O, prevented by barrier coatings, galvanizing (Zn sacrificial coating), and cathodic protection.',
      shortNotes: [
        'Voltaic cell produces electricity from spontaneous redox (delta G < 0, E°cell > 0).',
        'Anode is negative (-); site of oxidation. Cathode is positive (+); site of reduction.',
        'Salt bridge completes circuit and maintains electrical neutrality by ion diffusion.',
        'Standard Hydrogen Electrode (SHE): E° = 0.00 V (1 M H+, 1 atm H2, Pt electrode at 25°C).',
        'E°cell = E°cathode - E°anode. More positive E° indicates greater tendency to reduce.',
        'Nernst equation: Ecell = E°cell - (0.0592 / n) * log Q at 25°C.',
        'Lead-acid battery: Pb(s) + PbO2(s) + 2H2SO4(aq) <=> 2PbSO4(s) + 2H2O(l) (2.0 V/cell).',
        'Rusting requires iron, oxygen, and moisture; prevented by galvanizing and sacrificial anodes.'
      ],
      keyPoints: [
        'In both galvanic and electrolytic cells, oxidation occurs at the anode and reduction at the cathode (An Ox, Red Cat). However, electrode polarities are opposite: Galvanic Anode is (-), Electrolytic Anode is (+).'
      ],
      formulaRules: [
        { formula_or_law: 'E°cell = E°cathode - E°anode', explanation: 'Standard electromotive force of galvanic cell.', units_conditions: 'Standard states (1 M, 1 atm, 25°C).' },
        { formula_or_law: 'delta G° = -n * F * E°cell', explanation: 'Gibbs free energy change and cell potential.', units_conditions: 'Spontaneous when delta G° < 0 and E°cell > 0.' },
        { formula_or_law: 'Ecell = E°cell - (0.0592 / n) * log Q', explanation: 'Nernst equation for non-standard concentration cell potential.', units_conditions: 'T = 298.15 K.' }
      ],
      eueeTips: [
        { trap: 'Reversing Anode and Cathode signs between Galvanic and Electrolytic cells', how_to_avoid: 'In BOTH cells, Oxidation = Anode and Reduction = Cathode. But in Galvanic cells, Anode is (-), whereas in Electrolytic cells, Anode is (+).', frequency: 'Critical' },
        { trap: 'Multiplying standard reduction potentials by stoichiometric coefficients', how_to_avoid: 'Standard reduction potential E° is an INTENSIVE property! Never multiply E° values by stoichiometric numbers when balancing.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Nernst Equation Calculation',
          problem: 'Calculate the cell potential at 25°C for the Daniell cell when [Zn2+] = 0.010 M and [Cu2+] = 1.00 M (E°cell = 1.10 V, n = 2).',
          step_solution: '1. Cell reaction: Zn(s) + Cu2+(aq) -> Zn2+(aq) + Cu(s)\n2. Reaction quotient Q = [Zn2+] / [Cu2+] = 0.010 / 1.00 = 10^-2\n3. Nernst equation: E = 1.10 - (0.0592 / 2) * log(10^-2)\n4. E = 1.10 - (0.0296) * (-2) = 1.10 + 0.0592 = 1.159 V ≈ 1.16 V.',
          result: 'Ecell = 1.16 V.'
        }
      ],
      quiz: [
        { question: 'What is the standard cell potential for: Zn + Cu2+ -> Zn2+ + Cu (E° Zn2+/Zn = -0.76 V, E° Cu2+/Cu = +0.34 V)?', options: ['+0.42 V', '-1.10 V', '+1.10 V', '+0.76 V'], correct_index: 2, explanation: 'E°cell = E°cathode - E°anode = +0.34 - (-0.76) = +1.10 V.' }
      ]
    },

    // UNIT 3 TOPICS
    '3.1': {
      summary: 'Scope of industrial chemistry, economic significance, and transformation of natural raw materials in Ethiopia.',
      overview: 'Industrial chemistry bridges laboratory science and large-scale manufacturing to synthesize valuable products efficiently, economically, and safely. Chemical industries provide employment, infrastructure development, agricultural inputs (fertilizers, pesticides), and consumer goods (soaps, cement, sugar) in Ethiopia.',
      shortNotes: [
        'Industrial chemistry converts raw materials into commercial products using chemical engineering.',
        'Key goals: High yield, low production cost, minimum waste, and environmental compliance.',
        'Primary sectors in Ethiopia: Construction (cement), agriculture (fertilizers), consumer goods (sugar, soaps).'
      ],
      keyPoints: [
        'Batch vs continuous processes: Continuous processes offer higher efficiency and consistency for large commodity chemicals.'
      ],
      formulaRules: [
        { formula_or_law: '% Yield = (Actual Yield / Theoretical Yield) x 100%', explanation: 'Reaction efficiency metric in industrial chemistry.', units_conditions: 'Mass in grams or metric tons.' }
      ],
      eueeTips: [
        { trap: 'Confusing Raw Material with Intermediate', how_to_avoid: 'Raw materials come from nature (limestone, air, brine). Intermediates are synthesized along the process (like oleum or NO).', frequency: 'Medium' }
      ],
      workedExamples: [
        {
          title: 'Industrial Yield Calculation',
          problem: 'In an industrial process, 100 metric tons of reactant should theoretically yield 75 tons of product. If 63 tons are recovered, calculate percent yield.',
          step_solution: '% Yield = (63 / 75) x 100% = 84%.',
          result: '84% yield.'
        }
      ],
      quiz: [
        { question: 'Which is a primary raw material rather than a synthetic chemical intermediate?', options: ['Sulfur trioxide', 'Limestone (CaCO3)', 'Nitric oxide', 'Oleum'], correct_index: 1, explanation: 'Limestone is a natural mineral raw material quarried from the lithosphere.' }
      ]
    },
    '3.2': {
      summary: 'Natural resources in Ethiopia: atmospheric, hydrospheric, lithospheric, and biospheric raw materials.',
      overview: 'Ethiopia is endowed with rich natural resources categorized into four spheres: Atmospheric (N2, O2 from liquid air fractionation), Hydrospheric (river water, Great Rift Valley brine salts at Lake Abijatta/Shala), Lithospheric (limestone in Mugher/Dire Dawa, gypsum, potash in Danakil Depression, clay/kaolin), and Biospheric (sugarcane in Wonji/Metehara, livestock hides, oilseeds).',
      shortNotes: [
        'Atmospheric: N2 for Haber process; O2 for combustion and medical use.',
        'Hydrospheric: Abundant freshwater basins and saline lakes (Lake Abijatta soda ash/trona).',
        'Lithospheric: Massive limestone reserves for cement, potash in Afar for potassium fertilizers.',
        'Biospheric: Sugarcane, cattle hides for leather tanneries, natural oilseeds.'
      ],
      keyPoints: [
        'Renewable resources (biomass, water) replenish naturally; non-renewable mineral deposits require sustainable extraction.'
      ],
      formulaRules: [
        { formula_or_law: 'CaCO3 -> CaO + CO2', explanation: 'Calcination of lithospheric limestone raw material.', units_conditions: 'High temperature (~900°C).' }
      ],
      eueeTips: [
        { trap: 'Potash Reserve Location in Ethiopia', how_to_avoid: 'Major potash (KCl, K2SO4) mineral deposits are located in the Danakil Depression (Dallol, Afar Region).', frequency: 'High' }
      ],
      workedExamples: [
        {
          title: 'Classifying Ethiopian Resources',
          problem: 'Classify whether (a) Lake Abijatta soda ash, (b) Wonji sugarcane, and (c) Kenticha tantalum are renewable or non-renewable.',
          step_solution: '(a) Soda ash is a mineral salt (non-renewable); (b) Sugarcane is agricultural biomass (renewable); (c) Tantalum is a rare mineral ore (non-renewable).',
          result: '(a) Non-renewable, (b) Renewable, (c) Non-renewable.'
        }
      ],
      quiz: [
        { question: 'In Ethiopia, rich natural deposits of sodium carbonate (soda ash) are found in:', options: ['Lake Tana', 'Lake Abijatta', 'Lake Chamo', 'Lake Hawassa'], correct_index: 1, explanation: 'Lake Abijatta in the Great Rift Valley is the major domestic source of commercial soda ash.' }
      ]
    },
    '3.3': {
      summary: 'Manufacturing processes for Haber ammonia, Ostwald nitric acid, Contact sulfuric acid, Solvay soda ash, fertilizers, and pesticides.',
      overview: '1. Haber-Bosch Process: N2 + 3H2 <=> 2NH3 (Fe catalyst, 450°C, 200 atm). 2. Ostwald Process: 4NH3 + 5O2 -> 4NO -> 2NO2 -> HNO3 (Pt-Rh catalyst). 3. Contact Process: S -> SO2 -> SO3 -> Oleum (H2S2O7) -> H2SO4 (V2O5 catalyst). SO3 is absorbed in concentrated H2SO4, never water, to prevent choking acid mist. 4. Solvay Process: Brine + CaCO3 + NH3 -> Na2CO3. 5. Fertilizers: DAP (diammonium phosphate, 18% N, 46% P2O5) and Urea (highest nitrogen content, 46% N).',
      shortNotes: [
        'Haber process: N2 + 3H2 <=> 2NH3 (Fe catalyst, 450°C, 200 atm, exothermic).',
        'Ostwald process: NH3 oxidation over Pt-Rh catalyst yields nitric acid (HNO3).',
        'Contact process: 2SO2 + O2 <=> 2SO3 over V2O5 catalyst; SO3 absorbed in H2SO4 to form oleum.',
        'Solvay process produces soda ash (Na2CO3) using brine, limestone, and ammonia.',
        'Urea, (NH2)2CO, contains 46% nitrogen by mass, the highest among solid fertilizers.',
        'DAP, (NH4)2HPO4, supplies both nitrogen and phosphorus nutrients to crops.'
      ],
      keyPoints: [
        'In the Contact process, SO3 cannot be added directly to water because the reaction is violent and produces an uncontrollable acid mist.'
      ],
      formulaRules: [
        { formula_or_law: 'N2 + 3H2 <=> 2NH3 (delta H = -92.4 kJ/mol)', explanation: 'Haber ammonia synthesis equilibrium.', units_conditions: 'High pressure favors forward yield.' },
        { formula_or_law: 'SO3 + H2SO4 -> H2S2O7 (Oleum); H2S2O7 + H2O -> 2H2SO4', explanation: 'Contact process oleum intermediate hydration.', units_conditions: 'Controlled hydration in industrial towers.' }
      ],
      eueeTips: [
        { trap: 'Why SO3 is not dissolved in water directly in Contact Process', how_to_avoid: 'Dissolving SO3 in water is intensely exothermic, forming a fog of acid droplets that escapes into the atmosphere rather than condensing.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Nitrogen Percentage in Urea',
          problem: 'Calculate the percentage of nitrogen by mass in urea, (NH2)2CO (N = 14, C = 12, O = 16, H = 1).',
          step_solution: '1. Molar mass = 2(14) + 4(1) + 12 + 16 = 28 + 4 + 12 + 16 = 60 g/mol.\n2. Mass of nitrogen = 2 x 14 = 28 g.\n3. % N = (28 / 60) x 100% = 46.67% ≈ 46%.',
          result: 'Nitrogen content = 46.7%.'
        }
      ],
      quiz: [
        { question: 'Which catalyst is used in the Contact process for oxidizing SO2 to SO3?', options: ['Finely divided iron', 'Vanadium(V) oxide (V2O5)', 'Platinum-rhodium gauze', 'Nickel'], correct_index: 1, explanation: 'Vanadium(V) oxide (V2O5) is the industrial catalyst used at 450°C in the Contact process.' }
      ]
    },
    '3.4': {
      summary: 'Key manufacturing industries in Ethiopia: Cement, sugar, tanneries, glass, ceramics, paper, and soaps/detergents.',
      overview: '1. Cement: Calcination of limestone (CaCO3 -> CaO + CO2) and clinkerization with clay at 1450°C in rotary kilns. Gypsum (2–3%) is ground with clinker to retard setting time. 2. Sugar: Crushing cane, liming with Ca(OH)2 to precipitate impurities, vacuum evaporation, crystallization, and molasses fermentation into ethanol. 3. Tanneries: Unhairing, deliming, and chrome tanning with basic chromium sulfate. 4. Soaps: Saponification of fats with NaOH producing soap and glycerol.',
      shortNotes: [
        'Cement raw materials: Limestone (CaCO3, 75%) and clay/shale (25%).',
        'Clinker forms at 1450°C; ground with 2–3% gypsum to prevent flash setting.',
        'Sugar clarifying agent: Milk of lime (Ca(OH)2); byproduct molasses yields bioethanol.',
        'Tannery chrome tanning crosslinks collagen with chromium(III) sulfate.',
        'Saponification: Fat/Triglyceride + 3NaOH -> 3 Soap + Glycerol.'
      ],
      keyPoints: [
        'Without gypsum, mixed cement would set instantly (flash set), making construction work impossible.'
      ],
      formulaRules: [
        { formula_or_law: 'Fat/Oil + 3NaOH -> 3 RCOONa (Soap) + C3H5(OH)3 (Glycerol)', explanation: 'Saponification chemical equation.', units_conditions: 'Base-catalyzed triglyceride hydrolysis.' }
      ],
      eueeTips: [
        { trap: 'Function of Gypsum in Cement', how_to_avoid: 'Gypsum (CaSO4.2H2O) is added to RETARD (slow down) the setting time of cement. It does NOT accelerate setting.', frequency: 'Critical' }
      ],
      workedExamples: [
        {
          title: 'Saponification Products',
          problem: 'What are the two products formed when glyceryl tristearate reacts with aqueous sodium hydroxide?',
          step_solution: '1. Sodium stearate (soap, C17H35COONa).\n2. Glycerol (propane-1,2,3-triol, C3H8O3).',
          result: 'Soap and Glycerol.'
        }
      ],
      quiz: [
        { question: 'Why is gypsum added to cement clinker during grinding?', options: ['To accelerate hardening', 'To retard the setting time', 'To increase whiteness', 'To reduce production cost'], correct_index: 1, explanation: 'Gypsum retards the hydration rate of tricalcium aluminate, preventing flash setting.' }
      ]
    },

    // UNIT 4 TOPICS
    '4.1': {
      summary: 'Introduction to polymers: Monomers, repeating units, degree of polymerization, homopolymers and copolymers.',
      overview: 'Polymers are macromolecules constructed by covalently linking repeating monomer subunits. Degree of polymerization (DP) indicates the number of monomer units in a chain: DP = Molar mass of polymer / Molar mass of monomer. Homopolymers consist of a single monomer type (polyethylene). Copolymers consist of two or more distinct monomer types (SBR rubber, Nylon 6,6).',
      shortNotes: [
        'Monomer: Small reactive molecule that forms polymer chains.',
        'Polymer: High molecular mass macromolecule built from repeating units.',
        'Degree of Polymerization (DP): Total repeating units in chain.',
        'Homopolymer: Single monomer type (PE, PVC, Teflon).',
        'Copolymer: Two or more monomer types (Nylon 6,6, Buna-S).'
      ],
      keyPoints: ['Polymers possess distinct physical properties from their parent monomers.'],
      formulaRules: [{ formula_or_law: 'DP = M_polymer / M_monomer', explanation: 'Degree of polymerization calculation.', units_conditions: 'Molar mass in g/mol.' }],
      eueeTips: [{ trap: 'Homopolymer vs Copolymer Distinction', how_to_avoid: 'Check if the polymer chain is formed from one monomer (homopolymer) or two alternating monomers (copolymer).', frequency: 'High' }],
      workedExamples: [{ title: 'Calculating DP', problem: 'Calculate the degree of polymerization of polyethylene having a molar mass of 56,000 g/mol (Ethylene C2H4 = 28 g/mol).', step_solution: 'DP = 56,000 / 28 = 2000.', result: 'DP = 2000.' }],
      quiz: [{ question: 'Which of the following is a copolymer?', options: ['Polyethylene', 'Polyvinyl chloride', 'Nylon 6,6', 'Polystyrene'], correct_index: 2, explanation: 'Nylon 6,6 is synthesized from two different monomers: adipic acid and hexamethylenediamine.' }]
    },
    '4.2': {
      summary: 'Polymerization reactions: Addition (chain-growth) free-radical mechanism vs condensation (step-growth) polymerization.',
      overview: '1. Addition Polymerization: Monomers with double bonds join without eliminating small molecules. Stages: Initiation (peroxide radicals attack C=C), Propagation (radical chain extends), Termination (coupling of two radicals). Examples: Polyethylene, PP, PVC, Polystyrene, Teflon (PTFE). 2. Condensation Polymerization: Bifunctional monomers join with elimination of small molecules (H2O, HCl). Examples: Nylon 6,6 (polyamide with amide -CO-NH- linkages) and Dacron/PET (polyester with ester -COO- linkages).',
      shortNotes: [
        'Addition polymerization: Unsaturated monomers link without losing atoms.',
        'Stages of addition: Initiation, Propagation, and Termination.',
        'Common addition polymers: Polyethylene, PVC, Polystyrene, Teflon.',
        'Condensation polymerization: Bifunctional monomers link with loss of small molecules (H2O).',
        'Nylon 6,6 is a polyamide containing repeating amide (-CONH-) bonds.',
        'Dacron (PET) is a polyester containing repeating ester (-COO-) bonds.'
      ],
      keyPoints: ['Addition monomers require carbon-carbon double bonds; condensation monomers require at least two reactive functional groups (-COOH, -NH2, -OH).'],
      formulaRules: [
        { formula_or_law: 'n CH2=CH2 -> [-CH2-CH2-]n', explanation: 'Addition polymerization of ethylene.', units_conditions: 'Heat, pressure, and radical initiator.' },
        { formula_or_law: 'n HOOC-R-COOH + n H2N-R-NH2 -> [-OC-R-CONH-R-NH-]n + 2n H2O', explanation: 'Condensation polymerization of polyamide.', units_conditions: 'Step-growth elimination of water.' }
      ],
      eueeTips: [{ trap: 'Identifying Linkage Type in Nylon vs Dacron', how_to_avoid: 'Nylon has AMIDE linkages (-CO-NH-); Dacron (PET) has ESTER linkages (-COO-).', frequency: 'Critical' }],
      workedExamples: [{ title: 'Differentiating Polymerization Mechanisms', problem: 'Classify whether formation of (a) Teflon from CF2=CF2 and (b) Dacron from terephthalic acid and ethylene glycol are addition or condensation.', step_solution: '(a) Teflon forms from C=C double bonds with no eliminated molecule -> Addition.\n(b) Dacron forms from dicarboxylic acid and diol with elimination of H2O -> Condensation.', result: '(a) Addition, (b) Condensation.' }],
      quiz: [{ question: 'What type of bond links monomer units together in Nylon 6,6?', options: ['Ester bond', 'Amide (peptide) bond', 'Ether bond', 'Glycosidic bond'], correct_index: 1, explanation: 'Nylon 6,6 is a polyamide featuring repeating amide (-CO-NH-) linkages.' }]
    },
    '4.3': {
      summary: 'Classification of polymers: Natural vs synthetic, thermoplastics vs thermosets, elastomers, and recycling in Ethiopia.',
      overview: 'Polymers are classified by: 1. Origin: Natural (cellulose, starch, proteins, natural rubber) vs Synthetic (PE, PVC, Nylon). 2. Thermal behavior: Thermoplastics (linear/branched, soften on heating, recyclable, e.g., PE, PP, PS) vs Thermosetting plastics (crosslinked 3D networks, decompose rather than melt, non-recyclable, e.g., Bakelite, melamine). 3. Plastic Waste: Synthetic plastics are non-biodegradable; recycling practices in Ethiopia emphasize collection, sorting, and mechanical shredding into plastic pellets.',
      shortNotes: [
        'Thermoplastics: Linear/branched chains; can be repeatedly melted, reshaped, and recycled.',
        'Thermosets: 3D crosslinked networks; permanently harden upon heating; non-recyclable.',
        'Natural polymers: Cellulose, starch, DNA, proteins, natural rubber (polyisoprene).',
        'Rubber vulcanization: Heating raw rubber with sulfur creates disulfide crosslinks, improving elasticity and thermal stability.',
        'Environmental challenge: Synthetic plastics persist for centuries; recycling (4 R\'s) is essential.'
      ],
      keyPoints: ['Vulcanization with sulfur transforms soft, sticky natural rubber into resilient, elastic rubber.'],
      formulaRules: [{ formula_or_law: 'Vulcanization: Crosslinking polyisoprene chains via -S-S- disulfide bridges', explanation: 'Enhances tensile strength and resilience.', units_conditions: 'Heat with 1-5% sulfur.' }],
      eueeTips: [{ trap: 'Thermoplastic vs Thermosetting Examples', how_to_avoid: 'Bakelite and Melamine are THERMOSETS (cannot be remelted). Polyethylene and PVC are THERMOPLASTICS (can be remelted).', frequency: 'Critical' }],
      workedExamples: [{ title: 'Classifying Plastics', problem: 'Identify why Bakelite is chosen for electric saucepan handles rather than polyethylene.', step_solution: 'Bakelite is a thermosetting polymer with high thermal resistance and crosslinked structure that does not soften or melt when heated.', result: 'Thermosetting heat resistance.' }],
      quiz: [{ question: 'Which of the following is a thermosetting plastic?', options: ['Polyethylene', 'Polystyrene', 'Bakelite', 'Polyvinyl chloride'], correct_index: 2, explanation: 'Bakelite is a crosslinked thermoset that does not melt upon reheating.' }]
    },

    // UNIT 5 TOPICS
    '5.1': {
      summary: 'Components of the environment: Atmosphere, hydrosphere, lithosphere, biosphere, and biogeochemical cycles.',
      overview: 'The Earth consists of four interconnected spheres: 1. Atmosphere (78% N2, 21% O2, divided into troposphere, stratosphere, mesosphere, thermosphere). 2. Hydrosphere (all liquid and frozen water). 3. Lithosphere (crust, mineral reserves, soil). 4. Biosphere (all living ecosystems). Biogeochemical cycles (Carbon, Nitrogen, Oxygen, Hydrological) circulate essential chemical elements continuously through living and non-living realms.',
      shortNotes: [
        'Atmosphere layers: Troposphere (0–12 km, weather), Stratosphere (12–50 km, ozone layer).',
        'Hydrosphere: 97% ocean saltwater, 2% glaciers, <1% accessible freshwater rivers/lakes.',
        'Lithosphere: Solid outer Earth crust providing minerals, ores, and soil nutrients.',
        'Carbon cycle: Photosynthesis balances respiration and fossil fuel combustion.',
        'Nitrogen cycle: N2 fixed by bacteria, lightning, and Haber process into nitrates.'
      ],
      keyPoints: ['The stratosphere houses the protective ozone layer that filters harmful UV-B solar radiation.'],
      formulaRules: [
        { formula_or_law: 'Photosynthesis: 6CO2 + 6H2O -> C6H12O6 + 6O2', explanation: 'Primary carbon fixation reaction.', units_conditions: 'Requires sunlight and chlorophyll.' }
      ],
      eueeTips: [{ trap: 'Atmosphere Layer Containing Ozone Layer', how_to_avoid: 'The protective ozone layer is in the STRATOSPHERE, NOT the troposphere. Tropospheric ozone is a harmful pollutant.', frequency: 'Critical' }],
      workedExamples: [{ title: 'Carbon Cycle Flux', problem: 'State the primary natural process that removes CO2 from the atmosphere and the two main processes that return it.', step_solution: 'Removal: Photosynthesis by green plants and oceanic phytoplankton.\nReturn: Cellular respiration and volcanic/fossil fuel combustion.', result: 'Photosynthesis vs Respiration/Combustion.' }],
      quiz: [{ question: 'In which atmospheric layer is the protective ozone layer located?', options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], correct_index: 1, explanation: 'The stratospheric ozone layer (15–35 km) absorbs harmful UV radiation.' }]
    },
    '5.2': {
      summary: 'Environmental pollution: Air pollution, acid rain, photochemical smog, ozone depletion, and water quality parameters (BOD, DO).',
      overview: '1. Air Pollution: Carbon monoxide (CO, binds hemoglobin), SO2 and NOx react with atmospheric moisture to form acid rain (pH < 5.6), damaging aquatic habitats and leaching soil minerals. Photochemical smog is formed from NOx, VOCs, and sunlight, generating secondary pollutants like ozone and PAN. CFCs release chlorine radicals that catalyze stratospheric ozone depletion. 2. Water Pollution: Dissolved oxygen (DO) indicates water health (>5 mg/L). Biochemical Oxygen Demand (BOD) measures organic pollution; high BOD indicates oxygen depletion. Eutrophication occurs when excess phosphate/nitrate runoffs trigger algae blooms.',
      shortNotes: [
        'CO forms carboxyhemoglobin, asphyxiating oxygen transport in blood.',
        'Acid rain: SO2 and NOx form H2SO4 and HNO3; causes lake acidification and soil leaching.',
        'Photochemical smog contains ground-level ozone (O3) and PAN, forming in sunny, warm urban air.',
        'CFC ozone depletion: Cl* radicals catalyze breakdown of O3 to O2.',
        'DO > 5 mg/L is required for healthy fish life.',
        'High BOD indicates severe organic waste pollution and depleted oxygen.',
        'Eutrophication: Nutrient enrichment causes rapid algae growth and aquatic dead zones.'
      ],
      keyPoints: ['High BOD is inversely related to DO: as organic waste decomposes, DO drops sharply, causing fish kills.'],
      formulaRules: [
        { formula_or_law: 'Acid Rain: SO2 + H2O -> H2SO3; 2SO2 + O2 + 2H2O -> 2H2SO4', explanation: 'Atmospheric formation of acid precipitation.', units_conditions: 'Moisture in cloud droplets.' }
      ],
      eueeTips: [{ trap: 'Interpreting BOD Values', how_to_avoid: 'HIGH BOD means heavily POLLUTED water (microbes need lots of oxygen to decompose organic waste). LOW BOD means clean water.', frequency: 'Critical' }],
      workedExamples: [{ title: 'Evaluating Water Quality', problem: 'Water sample A has BOD = 2 mg/L and DO = 8 mg/L. Water sample B has BOD = 28 mg/L and DO = 1.5 mg/L. Which sample is heavily polluted?', step_solution: 'Sample B has very high BOD and severely depleted DO, indicating heavy organic waste pollution.', result: 'Sample B is heavily polluted.' }],
      quiz: [{ question: 'What does a high Biochemical Oxygen Demand (BOD) value indicate about a water body?', options: ['The water is pure and clean', 'The water is heavily polluted with organic waste', 'The water contains high dissolved oxygen', 'The water is sterile'], correct_index: 1, explanation: 'High BOD indicates substantial organic waste requiring large quantities of oxygen for microbial decomposition.' }]
    },
    '5.3': {
      summary: 'Global warming and climate change: Greenhouse gases, infrared radiation absorption mechanism, and impacts on East Africa.',
      overview: 'The greenhouse effect is the natural warming of the Earth caused by atmospheric greenhouse gases (CO2, CH4, N2O, water vapor, CFCs) absorbing outgoing infrared (heat) radiation re-emitted by the Earth. Enhanced greenhouse effect due to anthropogenic emissions causes global climate change. Impacts on Ethiopia: Increased frequency of severe droughts in pastoral areas, erratic seasonal rainfall patterns affecting rain-fed agriculture, and shifting geographic ranges of malaria.',
      shortNotes: [
        'Greenhouse gases absorb infrared radiation re-emitted by Earth, trapping heat.',
        'Primary greenhouse gases: CO2 (fossil fuel burning), CH4 (cattle, rice, natural gas), N2O (fertilizers).',
        'Methane (CH4) has ~25 times greater global warming potential per mole than CO2.',
        'Climate change impacts in Ethiopia: Recurrent droughts in arid lowlands, shifting rainy seasons, crop yield drops.'
      ],
      keyPoints: ['N2 and O2 do not absorb infrared radiation because they lack changing dipole moments during vibration.'],
      formulaRules: [
        { formula_or_law: 'Incoming solar UV/visible radiation -> Earth absorbs -> Re-emits Infrared (heat) -> Trapped by greenhouse gases', explanation: 'Mechanism of the greenhouse effect.', units_conditions: 'Radiation wavelength transformation.' }
      ],
      eueeTips: [{ trap: 'Why N2 and O2 are NOT greenhouse gases', how_to_avoid: 'Diatomic homonuclear molecules (N2, O2) cannot absorb IR radiation because symmetrical vibrations do not produce a net dipole change.', frequency: 'High' }],
      workedExamples: [{ title: 'Comparing Greenhouse Gas Warming Potential', problem: 'Why is methane (CH4) considered a more potent greenhouse gas than carbon dioxide (CO2) despite lower atmospheric concentration?', step_solution: 'Methane has a Global Warming Potential (GWP) approximately 25–28 times higher than CO2 over a 100-year horizon because it absorbs infrared wavelengths more effectively.', result: 'Higher IR absorption efficiency per molecule.' }],
      quiz: [{ question: 'Which of the following atmospheric gases is NOT a greenhouse gas?', options: ['Carbon dioxide (CO2)', 'Methane (CH4)', 'Nitrogen (N2)', 'Nitrous oxide (N2O)'], correct_index: 2, explanation: 'Nitrogen gas (N2) is homonuclear and does not absorb infrared radiation.' }]
    },
    '5.4': {
      summary: '12 Principles of Green Chemistry, atom economy calculations, renewable feedstocks, and cleaner industrial production.',
      overview: 'Green chemistry is the design of chemical products and processes that reduce or eliminate the generation of hazardous substances. The 12 Principles emphasize: Waste prevention, atom economy, less hazardous syntheses, designing safer chemicals, safer solvents, energy efficiency, renewable feedstocks, catalysis, and degradation. Atom economy measures the proportion of reactant mass incorporated into the final desired product: % Atom Economy = (Molar mass of desired product / Total molar mass of all reactants) x 100%.',
      shortNotes: [
        'Principle 1: Better to prevent waste than to treat waste after formation.',
        'Atom Economy = (Molar mass of desired product / Total molar mass of reactants) x 100%.',
        'High atom economy minimizes byproduct waste and maximizes resource utilization.',
        'Renewable feedstocks: Utilizing biomass and agricultural residues instead of depleting petroleum.',
        'Catalysis: Selective catalysts operate under mild conditions and reduce energy consumption.',
        'Cleaner production in Ethiopia: Effluent recycling, solar drying, and bio-waste composting in manufacturing.'
      ],
      keyPoints: ['100% stoichiometric yield does NOT mean 100% atom economy if a massive useless byproduct is produced.'],
      formulaRules: [
        { formula_or_law: '% Atom Economy = (Molar mass of desired product / Total molar mass of all reactants) x 100%', explanation: 'Metric for synthetic green efficiency.', units_conditions: 'Calculated from balanced stoichiometric equation.' }
      ],
      eueeTips: [{ trap: 'Percent Yield vs Atom Economy', how_to_avoid: 'Percent yield measures reaction completeness in practice. Atom economy measures the theoretical efficiency of the reaction design itself.', frequency: 'Critical' }],
      workedExamples: [
        {
          title: 'Calculating Atom Economy',
          problem: 'Calculate the atom economy for the production of iron in the blast furnace: Fe2O3 + 3CO -> 2Fe + 3CO2. (Fe = 56, C = 12, O = 16). Desired product is Fe.',
          step_solution: '1. Desired product mass = 2 x 56 = 112 g.\n2. Total reactant mass = [2(56) + 3(16)] + 3[12 + 16] = 160 + 3(28) = 160 + 84 = 244 g.\n3. % Atom Economy = (112 / 244) x 100% = 45.9%.',
          result: 'Atom Economy = 45.9%.'
        }
      ],
      quiz: [
        { question: 'What is the primary objective of Green Chemistry?', options: ['To clean up industrial pollution after it occurs', 'To design processes that prevent hazard and waste generation', 'To replace all chemical fertilizers with imported chemicals', 'To stop all manufacturing industries'], correct_index: 1, explanation: 'Green chemistry aims to design chemical processes that inherently prevent hazardous waste and toxic substances.' }
      ]
    }
  };

  // Generate for both book-12-nat-chem and book-12-chem
  for (const bId of bookIds) {
    for (const u of chemReg) {
      const uNum = u.unit_num;

      // 1. Generate Overall Unit Short Note
      const unitTopics = u.topics.map((t, idx) => {
        const topKey = t.num;
        const detail = topicDetails[topKey];
        return {
          title: `${t.num} ${t.title}`,
          topic_title: t.title,
          short_notes: detail?.shortNotes || [`Key curriculum concepts of ${t.title}`],
          key_points: detail?.keyPoints || [t.desc],
          explanation: detail?.overview || t.desc,
          detailed_explanation: detail?.overview || t.desc,
          diagram_illustration: `[Conceptual Walkthrough of ${t.title}]\nMaster governing laws, boundary conditions, and SI unit conventions.`,
          ethiopian_context: `Applied extensively across Ethiopian industry, agriculture, and national curriculum standards.`,
          exam_focus: `High-frequency topic on the Ethiopian University Entrance Examination (EUEE).`,
          key_takeaway: detail?.summary || t.desc
        };
      });

      const allConcepts = u.topics.flatMap(t => {
        const detail = topicDetails[t.num];
        return (detail?.keyPoints || []).map(kp => ({
          concept: kp.includes(':') ? kp.split(':')[0] : t.title,
          explanation: kp,
          illustration_analogy: 'Standard physical and chemical curriculum model.'
        }));
      });

      const allFormulas = u.topics.flatMap(t => {
        const detail = topicDetails[t.num];
        return detail?.formulaRules || [];
      });

      const allTips = u.topics.flatMap(t => {
        const detail = topicDetails[t.num];
        return detail?.eueeTips || [];
      });

      const allExamples = u.topics.flatMap(t => {
        const detail = topicDetails[t.num];
        return detail?.workedExamples || [];
      });

      const allQuizzes = u.topics.flatMap(t => {
        const detail = topicDetails[t.num];
        return (detail?.quiz || []).map(q => ({
          question: q.question,
          options: q.options,
          correct_index: q.correct_index,
          correct_option: q.correct_index,
          explanation: q.explanation
        }));
      });

      const unitNote: ChapterShortNote = {
        id: `note-${bId}-${uNum}`,
        book_id: bId,
        chapter_number: uNum,
        chapter_title: `Unit ${uNum}: ${u.title}`,
        grade_name: 'Grade 12',
        subject_name: 'Chemistry',
        unit_summary: `Complete curriculum study notes for Grade 12 Chemistry Unit ${uNum} (${u.title}), covering all topics, formulas, worked examples, and EUEE exam traps.`,
        detailed_overview: `Unit ${uNum} (${u.title}) forms a fundamental component of the Ethiopian Grade 12 Chemistry curriculum. It covers the governing theoretical models, reaction equilibria, quantitative problem-solving procedures, and industrial applications.\n\nKey Subunits:\n${u.topics.map(t => `- **${t.num} ${t.title}** (Page ${t.start}): ${t.desc}`).join('\n')}`,
        topics_covered: unitTopics,
        key_concepts: allConcepts.slice(0, 10),
        core_formulas_rules: allFormulas.slice(0, 10),
        euee_exam_tips: allTips.slice(0, 6),
        worked_examples: allExamples,
        practice_quiz: allQuizzes,
        ai_assisted: true,
        generated_at: new Date().toISOString(),
        focus: 'summary',
        book_grounded: true
      };

      // Save under primary chapter key
      db.chapter_short_notes[`${bId}_ch_${uNum}`] = unitNote;
      db.chapter_short_notes[`${bId}_ch_${uNum}_topic_`] = unitNote;
      db.chapter_short_notes[`${bId}_ch_${uNum}_topic___detailed`] = {
        ...unitNote,
        id: `note-${bId}-${uNum}-detailed`,
        unit_summary: `[Detailed Masterclass] ${unitNote.unit_summary}`
      };

      // 2. Generate Topic-Specific Short Note AND Detailed Note for EVERY Topic
      u.topics.forEach((t, idx) => {
        const detail = topicDetails[t.num];
        const cleanSlug = t.title.toLowerCase().replace(/[^a-z0-9]/g, '_');

        const topicShortNote: ChapterShortNote = {
          id: `note-${bId}-${uNum}-top-${idx + 1}`,
          book_id: bId,
          chapter_number: uNum,
          chapter_title: `Unit ${uNum}: ${u.title}`,
          topic_title: t.title,
          grade_name: 'Grade 12',
          subject_name: 'Chemistry',
          unit_summary: detail?.summary || `Core study notes for ${t.title} in Grade 12 Chemistry Unit ${uNum}.`,
          detailed_overview: detail?.overview || `Comprehensive study of ${t.title} (${t.desc}). Grounded in Ethiopian National Curriculum standards.`,
          topics_covered: [{
            title: `${t.num} ${t.title}`,
            topic_title: t.title,
            short_notes: detail?.shortNotes || [`Key principle of ${t.title}`],
            key_points: detail?.keyPoints || [t.desc],
            explanation: detail?.overview || t.desc,
            detailed_explanation: detail?.overview || t.desc,
            diagram_illustration: `[Topic Schematic: ${t.title}]\nMaster definitions, reactions, and calculation techniques.`,
            ethiopian_context: `Directly tested on the Ethiopian University Entrance Examination (EUEE).`,
            exam_focus: detail?.eueeTips?.[0]?.how_to_avoid || `Pay special attention to standard SI units and boundary rules.`,
            key_takeaway: detail?.summary || t.desc
          }],
          key_concepts: (detail?.keyPoints || []).map(kp => ({
            concept: kp.includes(':') ? kp.split(':')[0] : t.title,
            explanation: kp,
            illustration_analogy: 'Standard curriculum pedagogical model.'
          })),
          core_formulas_rules: detail?.formulaRules || [],
          euee_exam_tips: detail?.eueeTips || [],
          worked_examples: detail?.workedExamples || [],
          practice_quiz: (detail?.quiz || []).map(q => ({
            question: q.question,
            options: q.options,
            correct_index: q.correct_index,
            correct_option: q.correct_index,
            explanation: q.explanation
          })),
          ai_assisted: true,
          generated_at: new Date().toISOString(),
          focus: 'summary',
          book_grounded: true
        };

        const topicDetailedNote: ChapterShortNote = {
          ...topicShortNote,
          id: `note-${bId}-${uNum}-top-${idx + 1}-detailed`,
          unit_summary: `[In-Depth Detailed Analysis] ${topicShortNote.unit_summary}`,
          detailed_overview: `${topicShortNote.detailed_overview}\n\n### In-Depth Scientific Foundations\nMastery of ${t.title} requires connecting molecular/ionic mechanisms to macroscopic physical observations. Ethiopian national examiners evaluate problem-solving accuracy under timed exam conditions.\n\n### Detailed Key Observations:\n${(detail?.shortNotes || []).map(sn => `- ${sn}`).join('\n')}`
        };

        // Save under multiple topic key permutations so lookups NEVER miss
        db.chapter_short_notes[`${bId}_ch_${uNum}_topic_${cleanSlug}`] = topicShortNote;
        db.chapter_short_notes[`${bId}_ch_${uNum}_topic_${cleanSlug}__detailed`] = topicDetailedNote;
        db.chapter_short_notes[`${bId}_ch_${uNum}_topic_top_${idx + 1}`] = topicShortNote;
        db.chapter_short_notes[`note-${bId}-${uNum}-top-${idx + 1}`] = topicShortNote;
      });

      console.log(`[Notes Generator] Generated Notes for Unit ${uNum} (${u.title}) + ${u.topics.length} topics for ${bId}`);
    }
  }

  // Save to database.json
  console.log('[Notes Generator] Writing to database.json...');
  fs.writeFileSync(dbPath, JSON.stringify(db), 'utf8');

  // Sync to official backups
  console.log('[Notes Generator] Writing to official_textbooks_backup.json in data/ and server/...');
  const backup = {
    books: db.books || [],
    book_chapters: db.book_chapters || [],
    book_pages: db.book_pages || [],
    book_chunks: db.book_chunks || [],
    chapter_short_notes: db.chapter_short_notes || {},
    flashcards: db.flashcards || []
  };
  const bStr = JSON.stringify(backup);
  fs.writeFileSync(backupDataPath, bStr, 'utf8');
  fs.writeFileSync(backupServerPath, bStr, 'utf8');

  console.log('[Notes Generator] SUCCESS: All Short Notes and Detailed Notes permanently saved!');
}

generateAllGrade12ChemistryNotes();
