import fs from 'fs';
import path from 'path';

// Clean span tags and extra citation artifacts
function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/\[span_\d+\]\(start_span\)\[span_\d+\]\(end_span\)/g, '')
    .replace(/\[span_\d+\]/g, '')
    .replace(/\\text\{([^}]*)\}/g, '$1') // preserve standard math if wanted, but KaTeX handles \text{} perfectly so let's keep valid LaTeX \text{}
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanMathLatex(str) {
  if (!str) return '';
  return str
    .replace(/\[span_\d+\]\(start_span\)\[span_\d+\]\(end_span\)/g, '')
    .replace(/\[span_\d+\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const rawQuestions = [
  {
    number: 1,
    text: "The masses of different substances, liberated or deposited by the same amount of electricity, are proportional to their equivalent masses. This statement is:",
    option_a: "Faraday's first law of electrolysis",
    option_b: "the law of definite proportion",
    option_c: "Faraday's second law of electrolysis",
    option_d: "the law of multiple proportion",
    answer: "C",
    explanation: "Faraday's second law of electrolysis states that when the same quantity of electricity is passed through different electrolytes connected in series, the masses of ions liberated at the electrodes are directly proportional to their chemical equivalent masses ($E = \\text{Molar Mass} / \\text{Valence}$). Option A refers to the first law, where mass is proportional to total charge $Q$. Options B and D are fundamental laws of chemical combination, not electrolysis.",
    topic: "Electrochemistry & Electrolysis",
    difficulty: "Easy"
  },
  {
    number: 2,
    text: "An unknown element has the following electronic configuration: $1s^2 2s^2 2p^6 3s^2 3p^3$. To which period and group does this element belong in the periodic table, respectively?",
    option_a: "3 and VA",
    option_b: "5 and IIIA",
    option_c: "3 and IIIA",
    option_d: "4 and IIA",
    answer: "A",
    explanation: "* **Period:** The highest principal quantum number ($n$) occupied by electrons is $n=3$, placing it in **Period 3**.\n* **Group:** The valence shell electron configuration is $3s^2 3p^3$, giving a total of $2 + 3 = 5$ valence electrons. This corresponds to **Group VA (Group 15)**. (The element is Phosphorus, $P$, $Z=15$).",
    topic: "Atomic Structure & Periodic Classification",
    difficulty: "Easy"
  },
  {
    number: 3,
    text: "Which of the following reactions represents the chemical equation for the reaction that takes place between aluminum metal and a solution of hydrochloric acid?",
    option_a: "$2\\text{AlCl}_3(aq) + 3\\text{H}_2(g) \\rightarrow 2\\text{Al}(s) + 6\\text{HCl}(aq)$",
    option_b: "$2\\text{Al}(s) + 6\\text{HCl}(aq) \\rightarrow 2\\text{AlCl}_3(aq) + 3\\text{H}_2(g)$",
    option_c: "$2\\text{Al} + 6\\text{HCl}(aq) \\rightarrow 2\\text{AlCl}_3(aq)$",
    option_d: "$\\text{Al} + \\text{HCl} \\rightarrow \\text{AlCl}_3$",
    answer: "B",
    explanation: "Aluminum is more reactive than hydrogen and undergoes a single displacement reaction with aqueous hydrochloric acid to produce aqueous aluminum chloride ($\\text{AlCl}_3$) and hydrogen gas ($\\text{H}_2$). The balanced chemical equation requiring full stoichiometric coefficients is:\n$$2\\text{Al}(s) + 6\\text{HCl}(aq) \\rightarrow 2\\text{AlCl}_3(aq) + 3\\text{H}_2(g)$$\nOption A reverses the reaction; Option C omits hydrogen gas product; Option D is unbalanced.",
    topic: "Chemical Reactions & Stoichiometry",
    difficulty: "Easy"
  },
  {
    number: 4,
    text: "A cell containing $\\text{AlCl}_3$ as an electrolyte is placed in series with another cell containing $\\text{AgNO}_3$ as an electrolyte. What mass of $\\text{Ag}$ is deposited when $18\\text{ g}$ of $\\text{Al}$ is deposited at the cathode electrode? ($M_{\\text{Ag}} = 108\\text{ g/mol}$ and $M_{\\text{Al}} = 27\\text{ g/mol}$)",
    option_a: "$36\\text{ g}$",
    option_b: "$24\\text{ g}$",
    option_c: "$216\\text{ g}$",
    option_d: "$72\\text{ g}$",
    answer: "C",
    explanation: "Using Faraday's Second Law of Electrolysis:\n$$\\frac{m_1}{E_1} = \\frac{m_2}{E_2}$$\n* Equivalent weight of $\\text{Al}$ ($E_{\\text{Al}}$) = $\\frac{\\text{Molar Mass}}{n} = \\frac{27}{3} = 9\\text{ g/eq}$\n* Equivalent weight of $\\text{Ag}$ ($E_{\\text{Ag}}$) = $\\frac{\\text{Molar Mass}}{n} = \\frac{108}{1} = 108\\text{ g/eq}$\n\n$$\\frac{m_{\\text{Al}}}{E_{\\text{Al}}} = \\frac{m_{\\text{Ag}}}{E_{\\text{Ag}}} \\implies \\frac{18\\text{ g}}{9\\text{ g/eq}} = \\frac{m_{\\text{Ag}}}{108\\text{ g/eq}}$$\n$$2 = \\frac{m_{\\text{Ag}}}{108} \\implies m_{\\text{Ag}} = 216\\text{ g}$$",
    topic: "Electrochemistry & Electrolysis",
    difficulty: "Medium"
  },
  {
    number: 5,
    text: "Nitric acid is a colorless fuming liquid with a boiling point of 83°C. However, it turns yellow as it stays for a long time. Which of the following accounts for the observed property of nitric acid?",
    option_a: "$\\text{NO}_3^-$",
    option_b: "$\\text{NO}_2$",
    option_c: "$\\text{NO}_2^-$",
    option_d: "$\\text{NO}$",
    answer: "B",
    explanation: "Pure concentrated nitric acid ($\\text{HNO}_3$) is colorless. Upon standing or exposure to light, it undergoes partial thermal and photochemical decomposition:\n$$4\\text{HNO}_3(l) \\xrightarrow{\\text{light/heat}} 4\\text{NO}_2(g) + \\text{O}_2(g) + 2\\text{H}_2\\text{O}(l)$$\nThe generated nitrogen dioxide ($\\text{NO}_2$) is a reddish-brown gas that dissolves back into the liquid acid, imparting a characteristic yellow or yellowish-brown color.",
    topic: "Inorganic Chemistry & Industrial Chemicals",
    difficulty: "Easy"
  },
  {
    number: 6,
    text: "Which of the following tells the exact number of atoms of different elements present in a molecule?",
    option_a: "Molecular mass",
    option_b: "Empirical formula",
    option_c: "Formula mass",
    option_d: "Molecular formula",
    answer: "D",
    explanation: "* **Molecular formula** gives the actual/exact number of atoms of each element in a single molecule of a compound.\n* **Empirical formula** gives only the simplest whole-number ratio of the atoms.\n* **Molecular mass** and **Formula mass** refer to total atomic mass values, not chemical formulas.",
    topic: "Fundamental Concepts & Chemical Bonding",
    difficulty: "Easy"
  },
  {
    number: 7,
    text: "What is the concentration of hydrogen ion in a solution of $0.1\\text{ M}$ nicotinic acid, $\\text{HC}_6\\text{H}_4\\text{NO}_2$, at 25°C? ($K_a = 1.4 \\times 10^{-5}$)",
    option_a: "$1.2 \\times 10^{-5}\\text{ M}$",
    option_b: "$1.2 \\times 10^{-3}\\text{ M}$",
    option_c: "$1.4 \\times 10^{-5}\\text{ M}$",
    option_d: "$1.4 \\times 10^{-6}\\text{ M}$",
    answer: "B",
    explanation: "Nicotinic acid is a weak monoprotic acid ($\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$).\nSince $C_0 / K_a = 0.1 / (1.4 \\times 10^{-5}) \\gg 400$, we apply the approximation:\n$$[\\text{H}^+] = \\sqrt{K_a \\cdot C_0} = \\sqrt{(1.4 \\times 10^{-5}) \\cdot 0.1} = \\sqrt{1.4 \\times 10^{-6}}$$\n$$[\\text{H}^+] \\approx 1.183 \\times 10^{-3}\\text{ M} \\approx 1.2 \\times 10^{-3}\\text{ M}$$",
    topic: "Acid-Base Equilibria & pH Calculations",
    difficulty: "Medium"
  },
  {
    number: 8,
    text: "Chlorine has two naturally occurring isotopes. In a sample of chlorine, 25% of the atoms are Cl-37 and 75% of the atoms are Cl-35. What is the average atomic mass of chlorine?",
    option_a: "26.25",
    option_b: "25.75",
    option_c: "35.5",
    option_d: "36.0",
    answer: "C",
    explanation: "The average atomic mass is calculated as the weighted sum of isotope masses:\n$$\\text{Average Mass} = (\\% \\text{ abundance}_1 \\times \\text{Mass}_1) + (\\% \\text{ abundance}_2 \\times \\text{Mass}_2)$$\n$$\\text{Average Mass} = (0.75 \\times 35) + (0.25 \\times 37) = 26.25 + 9.25 = 35.5\\text{ amu}$$",
    topic: "Atomic Structure & Isotopes",
    difficulty: "Easy"
  },
  {
    number: 9,
    text: "A student performs an experiment to distinguish different oxides by doing the following experiment. He/she put $100\\text{ mL}$ $\\text{KI}$ solution into four different test tubes. He/she acidified each of these solutions with 10 drops of dilute $\\text{H}_2\\text{SO}_4$ solution. He/she added a spatula full of $\\text{CaO}$ in the first, $\\text{Al}_2\\text{O}_3$ in the second, $\\text{Na}_2\\text{O}_2$ in the third, and $\\text{P}_4\\text{O}_{10}$ in the fourth test tubes. Finally, he/she added $10\\text{ mL}$ starch solution to each of the four test tubes. In which test tube will he/she observe a color change?",
    option_a: "Test tube 2",
    option_b: "Test tube 1",
    option_c: "Test tube 3",
    option_d: "Test tube 4",
    answer: "C",
    explanation: "Sodium peroxide ($\\text{Na}_2\\text{O}_2$) in test tube 3 contains the peroxide ion ($\\text{O}_2^{2-}$), which acts as a strong oxidizing agent in acidic solution. It oxidizes iodide ions ($\\text{I}^-$) from $\\text{KI}$ into free molecular iodine ($\\text{I}_2$):\n$$\\text{Na}_2\\text{O}_2 + 2\\text{KI} + 2\\text{H}_2\\text{SO}_4 \\rightarrow \\text{I}_2 + \\text{Na}_2\\text{SO}_4 + \\text{K}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$$\nFree iodine ($\\text{I}_2$) forms a characteristic deep blue-black complex with starch solution. $\\text{CaO}$, $\\text{Al}_2\\text{O}_3$, and $\\text{P}_4\\text{O}_{10}$ do not oxidize $\\text{I}^-$ to $\\text{I}_2$.",
    topic: "Oxides & Redox Reactions",
    difficulty: "Hard"
  },
  {
    number: 10,
    text: "Combustion of acetylene at about $3000^\\circ\\text{C}$ with oxygen produces an intensely hot flame. In which group of hydrocarbons is this compound classified?",
    option_a: "Alkanes",
    option_b: "Aromatics",
    option_c: "Alkenes",
    option_d: "Alkynes",
    answer: "D",
    explanation: "Acetylene (systematic IUPAC name: ethyne, $\\text{C}_2\\text{H}_2$) contains a carbon-carbon triple bond ($\\text{H}-\\text{C}\\equiv\\text{C}-\\text{H}$). Hydrocarbons featuring carbon-carbon triple bonds belong to the **alkyne** homologous series.",
    topic: "Hydrocarbons & Organic Chemistry",
    difficulty: "Easy"
  },
  {
    number: 11,
    text: "Phosphorus pentafluoride, $\\text{PF}_5$, is one example of an exception to the octet rule. Why is $\\text{PF}_5$ considered to be exceptional to the octet rule? This is because the:",
    option_a: "central atom has more than eight valence electrons.",
    option_b: "atoms attached to P have more than eight valence electrons.",
    option_c: "central atom has less than eight valence electrons.",
    option_d: "central atom has eight valence electrons.",
    answer: "A",
    explanation: "In phosphorus pentafluoride ($\\text{PF}_5$), the central phosphorus atom forms 5 covalent single bonds with 5 fluorine atoms. This results in 10 valence electrons surrounding phosphorus, forming an **expanded octet** (hypervalent molecule).",
    topic: "Chemical Bonding & Molecular Geometry",
    difficulty: "Easy"
  },
  {
    number: 12,
    text: "Refer to the diagram below showing environmental carbon dioxide and greenhouse gas interactions:\n\n* **A**: Automobile emissions (exhaust gas)\n* **B**: Livestock / cow respiration and methane\n* **C**: Evergreen tree forest\n* **D**: Industrial factory smokestack emissions\n\nWhich of the above does NOT contribute to global warming?",
    option_a: "B",
    option_b: "A",
    option_c: "D",
    option_d: "C",
    answer: "D",
    explanation: "* **A (Cars)** emit $\\text{CO}_2$ (greenhouse gas).\n* **B (Livestock)** emit $\\text{CH}_4$ and $\\text{CO}_2$ (greenhouse gases).\n* **D (Factories)** emit large volumes of fossil fuel $\\text{CO}_2$.\n* **C (Trees/Plants)** absorb carbon dioxide from the atmosphere during photosynthesis, acting as a carbon sink, thus reducing global warming.",
    topic: "Environmental Chemistry & Carbon Cycle",
    difficulty: "Easy"
  },
  {
    number: 13,
    text: "You are supposed to test the conductivity of substances using a conductivity apparatus consisting of an electric bulb, DC power supply, and two immersed electrodes in beaker solution.\n\nWhich of the following aqueous solutions does NOT cause the bulb to glow when the switch turns on?",
    option_a: "Sodium hydroxide solution",
    option_b: "Copper sulphate solution",
    option_c: "Table salt solution",
    option_d: "Sugar solution",
    answer: "D",
    explanation: "* Electrical conductivity in aqueous solution requires the presence of mobile ions (electrolytes).\n* $\\text{NaOH}$, $\\text{CuSO}_4$, and $\\text{NaCl}$ dissociate into free-moving cations and anions ($\\text{Na}^+, \\text{OH}^-, \\text{Cu}^{2+}, \\text{SO}_4^{2-}, \\text{Cl}^-$).\n* **Sugar (sucrose)** is a molecular covalent substance that dissolves as neutral molecules ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$) without ionizing, making it a non-electrolyte.",
    topic: "Solutions & Electrolytic Conductivity",
    difficulty: "Easy"
  },
  {
    number: 14,
    text: "Copper metal reacts with sulfuric acid to produce copper sulphate, sulfur dioxide, and water. Which of the following is the coefficient of $\\text{H}_2\\text{SO}_4$ after balancing this chemical reaction?",
    option_a: "6",
    option_b: "1",
    option_c: "2",
    option_d: "3",
    answer: "C",
    explanation: "The reaction between copper metal and concentrated sulfuric acid is a redox reaction:\n$$\\text{Cu}(s) + 2\\text{H}_2\\text{SO}_4(aq) \\rightarrow \\text{CuSO}_4(aq) + \\text{SO}_2(g) + 2\\text{H}_2\\text{O}(l)$$\nBalancing elements:\n* $\\text{Cu}$: 1 on left, 1 on right.\n* $\\text{S}$: 2 on left ($2\\text{H}_2\\text{SO}_4$), 2 on right ($\\text{CuSO}_4 + \\text{SO}_2$).\n* $\\text{H}$: 4 on left ($2\\text{H}_2\\text{SO}_4$), 4 on right ($2\\text{H}_2\\text{O}$).\n* $\\text{O}$: 8 on left ($2 \\times 4$), 8 on right ($4 + 2 + 2$).\nThe coefficient of $\\text{H}_2\\text{SO}_4$ is **2**.",
    topic: "Balancing Chemical Equations & Redox",
    difficulty: "Medium"
  },
  {
    number: 15,
    text: "What is the amount of energy emitted when an electron moves from the $n=4$ to $n=2$ energy level? ($R_H = 2.18 \\times 10^{-18}\\text{ J}$)",
    option_a: "$-6.54 \\times 10^{-18}\\text{ J}$",
    option_b: "$-4.09 \\times 10^{-19}\\text{ J}$",
    option_c: "$4.09 \\times 10^{-19}\\text{ J}$",
    option_d: "$6.54 \\times 10^{-18}\\text{ J}$",
    answer: "C",
    explanation: "The energy emitted during an electronic transition in a hydrogenic atom is given by:\n$$\\Delta E = R_H \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right)$$\n$$\\Delta E = 2.18 \\times 10^{-18}\\text{ J} \\left( \\frac{1}{2^2} - \\frac{1}{4^2} \\right) = 2.18 \\times 10^{-18} \\left( \\frac{1}{4} - \\frac{1}{16} \\right)$$\n$$\\Delta E = 2.18 \\times 10^{-18} \\left( \\frac{3}{16} \\right) = 4.0875 \\times 10^{-19}\\text{ J} \\approx 4.09 \\times 10^{-19}\\text{ J}$$",
    topic: "Atomic Structure & Bohr Model",
    difficulty: "Medium"
  },
  {
    number: 16,
    text: "Consider the electrolytic cell used for the refining of copper: An electrolytic tank contains aqueous copper sulphate electrolyte (A), impure copper anode, pure copper cathode, and insoluble solid accumulated at the bottom below the anode (C).\n\nWhat is the name of the species indicated by letter **'C'**?",
    option_a: "Copper sulphate solution",
    option_b: "Strip of pure copper",
    option_c: "Cathode mud",
    option_d: "Anode mud",
    answer: "D",
    explanation: "In the electrolytic refining of copper:\n* The **Anode** consists of crude, impure copper.\n* As pure copper dissolves as $\\text{Cu}^{2+}$ ions into solution, noble impurities (such as $\\text{Au}, \\text{Ag}, \\text{Pt}$) do not oxidize and settle at the bottom directly beneath the anode. This residue is termed **anode mud** (or anode sludge).",
    topic: "Electrochemistry & Metallurgy",
    difficulty: "Easy"
  },
  {
    number: 17,
    text: "Consider the following equilibrium reaction of a certain weak acid, $\\text{RCOOH}$:\n$$\\text{RCOOH}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{RCOO}^-(aq) + \\text{H}_3\\text{O}^+(aq)$$\nWhich of the following is the CORRECT expression of the percent ionization of $\\text{RCOOH}$?",
    option_a: "$\\frac{\\text{Equilibrium concentration of }\\text{H}_3\\text{O}^+}{\\text{Initial concentration of the acid}} \\times 100$",
    option_b: "$\\frac{\\text{Initial concentration of the acid}}{\\text{Equilibrium concentration of the acid}} \\times 100$",
    option_c: "$\\frac{\\text{Initial concentration of }\\text{RCOO}^-}{\\text{Initial concentration of the acid}} \\times 100$",
    option_d: "$\\frac{\\text{Equilibrium concentration of the acid}}{\\text{Initial concentration of the acid}} \\times 100$",
    answer: "A",
    explanation: "Percent ionization is defined as the fraction of weak acid molecules that dissociate into ions at equilibrium, expressed as a percentage:\n$$\\%\\text{ Ionization} = \\frac{[\\text{H}_3\\text{O}^+]_{\\text{eq}}}{[\\text{HA}]_{\\text{initial}}} \\times 100 = \\frac{[\\text{RCOO}^-]_{\\text{eq}}}{[\\text{RCOOH}]_{\\text{initial}}} \\times 100$$",
    topic: "Acid-Base Equilibria",
    difficulty: "Easy"
  },
  {
    number: 18,
    text: "Consider the reaction given below:\n$$\\text{AB}_2\\text{C} + \\text{C} \\rightarrow \\text{AB}_2 + \\text{C}_2$$\nWhich of the following successful collisions are effective in the formation of the products?",
    option_a: "The collision that results in the A and C atoms directly facing each other.",
    option_b: "The collision that results in the C atoms directly facing each other.",
    option_c: "The collision that results in the B and C atoms directly facing each other.",
    option_d: "The collision that results in the A and B atoms directly facing each other.",
    answer: "B",
    explanation: "According to collision theory, a reaction requires proper steric orientation. To form a new $\\text{C}-\\text{C}$ bond ($\\text{C}_2$) while breaking the $\\text{AB}_2\\text{C}$ bond, the free incoming atom $\\text{C}$ must directly collide with the $\\text{C}$ atom bound within the $\\text{AB}_2\\text{C}$ molecule.",
    topic: "Chemical Kinetics & Collision Theory",
    difficulty: "Easy"
  },
  {
    number: 19,
    text: "At 0°C and $1.0\\text{ atm}$, the solubility of $\\text{O}_2$ gas in water is $48.4\\text{ mL/L}$ (or $48.4\\text{ mM}$). What is the solubility of $\\text{O}_2$ in a saturated water solution at a partial pressure of $0.20\\text{ atm}$?",
    option_a: "$1.20 \\times 10^{-3}\\text{ M}$",
    option_b: "$9.68\\text{ mM}$",
    option_c: "$4.10 \\times 10^{-3}\\text{ M}$",
    option_d: "$2.44\\text{ M}$",
    answer: "B",
    explanation: "By **Henry's Law**, gas solubility ($S$) is directly proportional to its partial pressure ($P$) above the liquid:\n$$\\frac{S_1}{P_1} = \\frac{S_2}{P_2} \\implies S_2 = S_1 \\times \\left( \\frac{P_2}{P_1} \\right)$$\n$$S_2 = 48.4 \\times \\left( \\frac{0.20\\text{ atm}}{1.0\\text{ atm}} \\right) = 9.68\\text{ units}$$",
    topic: "Solutions & Henry's Law",
    difficulty: "Medium"
  },
  {
    number: 20,
    text: "Which one of the following does NOT explain the chemical properties of acidic oxides?\nAcidic oxides react with:",
    option_a: "acids to form salt and water.",
    option_b: "basic oxides to form salts.",
    option_c: "water to form acids.",
    option_d: "bases to form salt and water.",
    answer: "A",
    explanation: "Acidic oxides (non-metal oxides like $\\text{SO}_3, \\text{CO}_2, \\text{P}_4\\text{O}_{10}$) exhibit acidic character. They react with water to form acids, with bases to form salt and water, and with basic oxides to form salts. They **do not** react with acids due to like-character non-reactivity. (Basic oxides react with acids).",
    topic: "Oxides & Inorganic Properties",
    difficulty: "Easy"
  },
  {
    number: 21,
    text: "What is the electronic configuration of an element with an atomic number of 19, on the main energy levels?",
    option_a: "2, 8, 7, 2",
    option_b: "2, 8, 9",
    option_c: "2, 9, 8",
    option_d: "2, 8, 8, 1",
    answer: "D",
    explanation: "Atomic number $Z = 19$ corresponds to Potassium ($\\text{K}$).\nFilling energy levels via the Aufbau principle:\n* Level 1 ($1s^2$): 2 electrons\n* Level 2 ($2s^2 2p^6$): 8 electrons\n* Level 3 ($3s^2 3p^6$): 8 electrons\n* Level 4 ($4s^1$): 1 electron\nShell distribution: **2, 8, 8, 1**.",
    topic: "Atomic Structure & Electron Shells",
    difficulty: "Easy"
  },
  {
    number: 22,
    text: "Recently, Lake Tana was invaded by a surface water plant commonly known as \"Emboch\" (Water Hyacinth). Which one of the following describes this phenomenon?",
    option_a: "Industrial pollution",
    option_b: "Water pollution",
    option_c: "Soil pollution",
    option_d: "Air pollution",
    answer: "B",
    explanation: "Biological invasions and nutrient loading leading to weed blooms (\"Emboch\") degrade aquatic ecosystems, deplete dissolved oxygen, and harm aquatic life, which is classified under **water pollution** (eutrophication/biological contamination).",
    topic: "Environmental Chemistry & Water Quality",
    difficulty: "Easy"
  },
  {
    number: 23,
    text: "Which one of the following philosophers believed that matter is NOT continuous?",
    option_a: "Plato",
    option_b: "Democritus",
    option_c: "Empedocles",
    option_d: "Aristotle",
    answer: "B",
    explanation: "**Democritus** proposed the discrete atomic theory of matter—that matter consists of small, indivisible particles called *atomos*, meaning matter is discontinuous. Aristotle and Plato advocated the continuous view of matter.",
    topic: "History of Atomic Theory",
    difficulty: "Easy"
  },
  {
    number: 24,
    text: "Which of the following oxides has oxygen with a negative one (-1) oxidation state in its molecule?",
    option_a: "Basic oxide",
    option_b: "Super oxide",
    option_c: "Acidic oxide",
    option_d: "Peroxide",
    answer: "D",
    explanation: "* Normal oxides (acidic, basic, amphoteric): Oxygen oxidation state = **-2**.\n* **Peroxides** ($\\text{O}_2^{2-}$, e.g., $\\text{H}_2\\text{O}_2, \\text{Na}_2\\text{O}_2$): Oxygen oxidation state = **-1**.\n* **Superoxides** ($\\text{O}_2^-$, e.g., $\\text{KO}_2$): Oxygen oxidation state = **-1/2**.",
    topic: "Oxidation Numbers & Types of Oxides",
    difficulty: "Easy"
  },
  {
    number: 25,
    text: "Combustion of methane results in a release of heat. Which of the following statements describes these chemical phenomena? The release of heat is attributed to the energy change:",
    option_a: "due to the emission of light.",
    option_b: "that accompanies the reaction process.",
    option_c: "that resists changes in the reaction process.",
    option_d: "due to the absorption of light.",
    answer: "B",
    explanation: "Chemical enthalpy changes ($\\Delta H$) accompany chemical reactions when the total energy required to break bonds in reactants is less than the total energy released when forming new bonds in products, manifesting as released heat.",
    topic: "Thermochemistry & Enthalpy",
    difficulty: "Easy"
  },
  {
    number: 26,
    text: "Which one of the following is a synthetic polymer?",
    option_a: "Teflon",
    option_b: "Enzymes",
    option_c: "Starch",
    option_d: "Cotton",
    answer: "A",
    explanation: "* **Teflon** (polytetrafluoroethylene, $\\text{PTFE}$) is a man-made synthetic polymer synthesized from tetrafluoroethylene.\n* Enzymes, starch, and cotton (cellulose) are naturally occurring biopolymers.",
    topic: "Polymers & Macromolecules",
    difficulty: "Easy"
  },
  {
    number: 27,
    text: "Which one of the following is a polar covalent molecule?",
    option_a: "$\\text{CO}_2$",
    option_b: "$\\text{CCl}_4$",
    option_c: "$\\text{CH}_4$",
    option_d: "$\\text{SO}_2$",
    answer: "D",
    explanation: "* $\\text{CO}_2$ (linear), $\\text{CCl}_4$ (tetrahedral), and $\\text{CH}_4$ (tetrahedral) possess symmetrical geometries where individual bond dipoles cancel out, making them nonpolar molecules.\n* **$\\text{SO}_2$** has a bent (V-shaped) geometry due to a lone pair on the sulfur atom, resulting in a net dipole moment ($\\mu \\neq 0$), making it polar.",
    topic: "Chemical Bonding & Dipole Moments",
    difficulty: "Medium"
  },
  {
    number: 28,
    text: "Consider the following electrochemical reaction:\n$$\\text{Cu}(s) + 2\\text{Ce}^{4+}(aq) \\rightleftharpoons \\text{Cu}^{2+}(aq) + 2\\text{Ce}^{3+}(aq)$$\nWhich of the following effects increases the cell potential of the reaction?",
    option_a: "Decreasing concentration of $\\text{Cu}(s)$",
    option_b: "Increasing concentration of $\\text{Cu}^{2+}$",
    option_c: "Increasing concentration of $\\text{Ce}^{3+}$",
    option_d: "Increasing concentration of $\\text{Ce}^{4+}$",
    answer: "D",
    explanation: "Using the Nernst equation:\n$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{RT}{nF} \\ln Q \\quad \\text{where } Q = \\frac{[\\text{Cu}^{2+}][\\text{Ce}^{3+}]^2}{[\\text{Ce}^{4+}]^2}$$\nIncreasing the concentration of reactant ions ($\\text{Ce}^{4+}$) decreases the reaction quotient $Q$, thereby **increasing** $E_{\\text{cell}}$.",
    topic: "Electrochemistry & Nernst Equation",
    difficulty: "Medium"
  },
  {
    number: 29,
    text: "In the industrial schematic diagram for the Contact Process:\n* Furnace Stage A produces a gas from burning sulfur in air.\n* Catalytic Converter B converts this gas over $\\text{V}_2\\text{O}_5$.\n* Absorption Tower C absorbs product into concentrated acid to yield oleum.\n\nWhat are the compounds represented by stages A, B, and C, respectively?",
    option_a: "$\\text{SO}_2$, $\\text{H}_2\\text{SO}_4$, and $\\text{SO}_4^{2-}$",
    option_b: "$\\text{SO}_3$, $\\text{SO}_2$, and $\\text{H}_2\\text{SO}_4$",
    option_c: "$\\text{SO}_2$, $\\text{SO}_3$, and $\\text{H}_2\\text{SO}_4$",
    option_d: "$\\text{SO}_2$, $\\text{H}_2\\text{SO}_4$, and $\\text{SO}_3$",
    answer: "C",
    explanation: "In the Contact Process:\n1. **A**: Sulfur combustion produces Sulfur Dioxide gas ($\\text{SO}_2$).\n2. **B**: Catalytic oxidation converts $\\text{SO}_2$ to Sulfur Trioxide ($\\text{SO}_3$).\n3. **C**: Absorption of $\\text{SO}_3$ into conc. $\\text{H}_2\\text{SO}_4$ forms oleum, which is diluted to produce Sulfuric acid ($\\text{H}_2\\text{SO}_4$).",
    topic: "Industrial Chemistry & Contact Process",
    difficulty: "Medium"
  },
  {
    number: 30,
    text: "Which one of the following is an alloy composed of 87% copper, 10% tin, and 3% zinc?",
    option_a: "Solder",
    option_b: "Gun metal",
    option_c: "Bronze",
    option_d: "Gold alloys",
    answer: "B",
    explanation: "* **Gunmetal** (red brass) is composed of 87% $\\text{Cu}$, 10% $\\text{Sn}$, and 3% $\\text{Zn}$.\n* Bronze is predominantly $\\text{Cu} + \\text{Sn}$.\n* Solder is $\\text{Pb} + \\text{Sn}$.",
    topic: "Metals, Alloys & Metallurgy",
    difficulty: "Easy"
  },
  {
    number: 31,
    text: "What is the pH of a solution when the concentration of hydroxide ion is $1.0 \\times 10^{-9}\\text{ M}$?",
    option_a: "5",
    option_b: "1.8",
    option_c: "9",
    option_d: "7",
    answer: "A",
    explanation: "$$\\text{pOH} = -\\log[\\text{OH}^-] = -\\log(1.0 \\times 10^{-9}) = 9$$\n$$\\text{pH} + \\text{pOH} = 14 \\implies \\text{pH} = 14 - 9 = 5$$",
    topic: "Acids, Bases & pH Calculations",
    difficulty: "Easy"
  },
  {
    number: 32,
    text: "A chemistry teacher designed an experiment to fill three similar balloons with three different gases to compare their rate of diffusion. He/she filled the first balloon with helium gas, the second with hydrogen gas, and the third with oxygen gas. Which balloon will fill first?",
    option_a: "Second balloon",
    option_b: "Third balloon",
    option_c: "First balloon",
    option_d: "First and second balloon fill equally",
    answer: "A",
    explanation: "According to Graham's Law of Effusion/Diffusion:\n$$\\text{Rate} \\propto \\frac{1}{\\sqrt{M}}$$\nMolar masses: $M(\\text{H}_2) = 2\\text{ g/mol}$, $M(\\text{He}) = 4\\text{ g/mol}$, $M(\\text{O}_2) = 32\\text{ g/mol}$.\nHydrogen ($\\text{H}_2$) has the lowest molar mass, thus it diffuses fastest and fills the balloon quickest.",
    topic: "Gas Laws & Graham's Law",
    difficulty: "Easy"
  },
  {
    number: 33,
    text: "Oxygen reacts with sulfur to form sulfur dioxide. Experimentally, it was found that the total mass of reactants (oxygen and sulfur) is equal to the mass of the product (sulfur dioxide). Which of the following laws illustrates this experiment? The law of:",
    option_a: "constant composition",
    option_b: "conservation of mass",
    option_c: "multiple proportions",
    option_d: "definite proportions",
    answer: "B",
    explanation: "The **Law of Conservation of Mass** (Lavoisier) states that matter can neither be created nor destroyed in a chemical reaction; the total mass of products equals the total mass of reactants.",
    topic: "Laws of Chemical Combination",
    difficulty: "Easy"
  },
  {
    number: 34,
    text: "Which of the following is formed from the combination of two or more substances with at least two visible phases?",
    option_a: "Heterogeneous mixture",
    option_b: "Compound",
    option_c: "Homogeneous mixture",
    option_d: "Solution",
    answer: "A",
    explanation: "A **heterogeneous mixture** is non-uniform in composition and consists of physically distinct parts or phases (two or more visible phases). Homogeneous mixtures/solutions have a single uniform phase.",
    topic: "Classification of Matter",
    difficulty: "Easy"
  },
  {
    number: 35,
    text: "If a $50\\text{ cm}^3$ sample of gas exerts a pressure of $60.0\\text{ kPa}$ at $35^\\circ\\text{C}$, what volume will it occupy at STP ($0^\\circ\\text{C}$ and $1\\text{ atm} = 101.325\\text{ kPa}$) in $\\text{cm}^3$?",
    option_a: "226.86",
    option_b: "234.0",
    option_c: "26.24",
    option_d: "265.0",
    answer: "C",
    explanation: "Using the Combined Gas Law:\n$$\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$$\n* $P_1 = 60.0\\text{ kPa}$, $V_1 = 50\\text{ cm}^3$, $T_1 = 35 + 273.15 = 308.15\\text{ K}$\n* $P_2 = 101.325\\text{ kPa}$, $T_2 = 273.15\\text{ K}$\n\n$$V_2 = \\frac{P_1 V_1 T_2}{P_2 T_1} = \\frac{(60.0) \\times (50) \\times (273.15)}{(101.325) \\times (308.15)} = \\frac{819450}{31223.4} \\approx 26.24\\text{ cm}^3$$",
    topic: "Gas Laws & Combined Gas Equation",
    difficulty: "Medium"
  },
  {
    number: 36,
    text: "The following polymer structure represents Poly(ethylene terephthalate) (PET):\n$$\\left[ -\\text{O}-\\text{CH}_2-\\text{CH}_2-\\text{O}-\\text{C}(=\\text{O})-\\text{C}_6\\text{H}_4-\\text{C}(=\\text{O})- \\right]_n$$\nWhat are the monomers for this condensation polymer?",
    option_a: "Adipic acid and hexamethylene diamine",
    option_b: "Ethylene glycol and terephthalic acid",
    option_c: "Ethylene glycol and adipic acid",
    option_d: "Terephthalic acid and hexamethylene diamine",
    answer: "B",
    explanation: "Poly(ethylene terephthalate) (PET) is synthesized via condensation polymerization between **Ethylene glycol** ($\\text{HO}-\\text{CH}_2\\text{CH}_2-\\text{OH}$) and **Terephthalic acid** ($\\text{HOOC}-\\text{C}_6\\text{H}_4-\\text{COOH}$).",
    topic: "Polymers & Condensation Reactions",
    difficulty: "Medium"
  },
  {
    number: 37,
    text: "Which of the following is the structural/condensed molecular formula of 2-hexanol?",
    option_a: "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CH}(\\text{OH})\\text{CH}_3$",
    option_b: "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{C}(\\text{OH})_2\\text{CH}_3$",
    option_c: "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{C}(\\text{OH})_2\\text{CH}_2\\text{CH}_3$",
    option_d: "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{OH}$",
    answer: "A",
    explanation: "2-hexanol is a secondary alcohol containing a 6-carbon chain with the hydroxyl group ($-\\text{OH}$) located at carbon-2:\n$$\\overset{6}{\\text{C}}\\text{H}_3-\\overset{5}{\\text{C}}\\text{H}_2-\\overset{4}{\\text{C}}\\text{H}_2-\\overset{3}{\\text{C}}\\text{H}_2-\\overset{2}{\\text{C}}\\text{H}(\\text{OH})-\\overset{1}{\\text{C}}\\text{H}_3$$",
    topic: "Organic Chemistry & Alcohols",
    difficulty: "Easy"
  },
  {
    number: 38,
    text: "Crystalline solids are classified as covalent, ionic, molecular, and metallic crystals. Which of the following is an example of a metallic crystal?",
    option_a: "Diamond",
    option_b: "Gold",
    option_c: "$\\text{KCl}$",
    option_d: "$\\text{CaCO}_3$",
    answer: "B",
    explanation: "* **Gold ($\\text{Au}$)** is a metallic crystal bound by metallic bonding.\n* Diamond is a covalent network crystal.\n* $\\text{KCl}$ and $\\text{CaCO}_3$ are ionic crystals.",
    topic: "States of Matter & Solid Structures",
    difficulty: "Easy"
  },
  {
    number: 39,
    text: "A Grade-12 student sets up a $\\text{Zn-Cu}$ cell containing $1.0\\text{ M } \\text{ZnSO}_4$ solution and $1.0\\text{ M } \\text{CuSO}_4$ solution to measure cell potential using a voltmeter. What will be the reading of the voltmeter under standard conditions?",
    option_a: "$0.34\\text{ V}$",
    option_b: "$0.76\\text{ V}$",
    option_c: "$0.42\\text{ V}$",
    option_d: "$1.1\\text{ V}$",
    answer: "D",
    explanation: "Standard reduction potentials:\n* $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$\n* $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$\n\n$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = (+0.34\\text{ V}) - (-0.76\\text{ V}) = +1.10\\text{ V}$$",
    topic: "Electrochemistry & Galvanic Cells",
    difficulty: "Easy"
  },
  {
    number: 40,
    text: "Which of the following factors does NOT affect preferential discharge during electrolysis?",
    option_a: "Nature of ions",
    option_b: "Nature of electrodes",
    option_c: "Thickness of the electrodes",
    option_d: "Concentration of ions",
    answer: "C",
    explanation: "Preferential discharge of ions at electrodes depends on:\n1. Position in the electrochemical series (nature of ions).\n2. Relative concentration of ions in solution.\n3. Nature/type of electrode material (inert vs. active).\n**Thickness** of the electrodes affects resistance/lifespan but does not alter electrochemical selective discharge energy.",
    topic: "Electrochemistry & Preferential Discharge",
    difficulty: "Easy"
  },
  {
    number: 41,
    text: "A given element 'M' has an atomic number of 20. What is the common ion form of this element after ionization?",
    option_a: "$\\text{M}^+$",
    option_b: "$\\text{M}^{2+}$",
    option_c: "$\\text{M}^-$",
    option_d: "$\\text{M}^{2-}$",
    answer: "B",
    explanation: "Element $M$ ($Z=20$) is Calcium ($\\text{Ca}$), a Group IIA alkaline earth metal. It has 2 valence electrons ($4s^2$) which it readily loses to achieve a noble gas configuration ($\\text{Ar}$), forming the cation **$\\text{M}^{2+}$**.",
    topic: "Periodic Table & Ion Formation",
    difficulty: "Easy"
  },
  {
    number: 42,
    text: "Which one of the following periods is a short period in the modern periodic table?",
    option_a: "Period 5",
    option_b: "Period 3",
    option_c: "Period 4",
    option_d: "Period 6",
    answer: "B",
    explanation: "Periods 1, 2, and 3 contain 2, 8, and 8 elements respectively and are classified as **short periods**. Periods 4, 5, 6, and 7 contain transition elements and inner-transition elements and are long periods.",
    topic: "Periodic Classification of Elements",
    difficulty: "Easy"
  },
  {
    number: 43,
    text: "What is the reaction type that involves the breaking down of a single compound into two or more components?",
    option_a: "Decomposition reaction",
    option_b: "Redox reaction",
    option_c: "Displacement reaction",
    option_d: "Combination reaction",
    answer: "A",
    explanation: "A **decomposition reaction** is defined by the general chemical form:\n$$\\text{AB} \\rightarrow \\text{A} + \\text{B}$$\nwhere a single reactant breaks down into simpler products.",
    topic: "Types of Chemical Reactions",
    difficulty: "Easy"
  },
  {
    number: 44,
    text: "A student carried out an experiment to test the reaction between silver nitrate solution and dilute hydrochloric acid under optimum reaction conditions. Which one of the following reactions will be obtained according to the law of conservation of mass?",
    option_a: "$\\text{HCl}(aq) + \\text{AgNO}_3(aq) \\rightarrow \\text{AgCl}(s) + \\text{HNO}_3(l)$",
    option_b: "$\\text{HCl}(aq) + \\text{AgNO}_3(aq) \\rightarrow 2\\text{AgCl}(s) + \\text{HNO}_3(l)$",
    option_c: "$\\text{HCl}(aq) + \\text{AgNO}_3(aq) \\rightarrow \\text{AgCl}(s) + 2\\text{HNO}_3(l)$",
    option_d: "$2\\text{HCl}(aq) + \\text{AgNO}_3(aq) \\rightarrow \\text{AgCl}(s) + \\text{HNO}_3(l)$",
    answer: "A",
    explanation: "The reaction is a double displacement precipitation reaction. Balancing atom counts:\n$$\\text{HCl}(aq) + \\text{AgNO}_3(aq) \\rightarrow \\text{AgCl}(s) + \\text{HNO}_3(aq)$$\nOption A preserves stoichiometric mass conservation with a $1:1$ molar ratio.",
    topic: "Chemical Reactions & Precipitation",
    difficulty: "Easy"
  },
  {
    number: 45,
    text: "Which of the following is a non-renewable natural resource?",
    option_a: "Cotton",
    option_b: "Gold",
    option_c: "Silk",
    option_d: "Wood",
    answer: "B",
    explanation: "* **Gold** is an elemental mineral resource formed geological ages ago; its total Earth quantity is finite, making it non-renewable.\n* Cotton, silk, and wood are renewable biological/agricultural resources.",
    topic: "Natural Resources & Mineral Wealth",
    difficulty: "Easy"
  },
  {
    number: 46,
    text: "Consider the following equilibrium reaction:\n$$a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$$\nWhich of the following is CORRECT about the given reaction?",
    option_a: "Removing both reactants and products decreases the value of $K_c$.",
    option_b: "Adding products to the system decreases the value of $K_c$.",
    option_c: "Adding reactants to the system increases the value of $K_c$.",
    option_d: "$K_c$ is not affected by removing both reactants and products.",
    answer: "D",
    explanation: "The equilibrium constant $K_c$ is a thermodynamic constant dependent **solely on temperature**. Changing concentration by adding or removing species shifts equilibrium position according to Le Chatelier's Principle but leaves the numeric value of $K_c$ unchanged.",
    topic: "Chemical Equilibrium & Equilibrium Constants",
    difficulty: "Medium"
  },
  {
    number: 47,
    text: "What is the molecular shape of phosphorus trichloride, $\\text{PCl}_3$? (Atomic number $\\text{P}=15$, $\\text{Cl}=17$)",
    option_a: "Trigonal planar",
    option_b: "Trigonal pyramidal",
    option_c: "Square planar",
    option_d: "Tetrahedral",
    answer: "B",
    explanation: "$\\text{PCl}_3$ central atom Phosphorus has 5 valence electrons. It forms 3 single bonds with $\\text{Cl}$ atoms and retains 1 lone pair ($\\text{AX}_3\\text{E}_1$ VSEPR notation). The electron geometry is tetrahedral, giving a **trigonal pyramidal** molecular geometry.",
    topic: "Molecular Shapes & VSEPR Theory",
    difficulty: "Easy"
  },
  {
    number: 48,
    text: "Consider the reaction curve showing concentration of reactant D over time, with Point A earlier on the steep portion of the curve and Point B later on the flattened portion of the curve.\n\nWhich of the following is CORRECT about the rate of reaction of reactant D?",
    option_a: "The rate for this reaction is constant at all points.",
    option_b: "The instantaneous rate at point A is greater than at point B.",
    option_c: "The instantaneous rate at point A is equal to that at point B.",
    option_d: "The instantaneous rate at point A is less than at point B.",
    answer: "B",
    explanation: "The instantaneous rate corresponds to the magnitude of the slope ($-\\frac{d[\\text{D}]}{dt}$) of the tangent line. As reactant concentration diminishes, collision frequency decreases, causing the rate to slow down. The curve is steeper at Point A than at Point B, meaning the instantaneous rate at A is greater.",
    topic: "Chemical Kinetics & Reaction Rates",
    difficulty: "Medium"
  },
  {
    number: 49,
    text: "Neutron is one of the fundamental sub-atomic particles of an atom. What is the relative charge of a neutron in an atom?",
    option_a: "0",
    option_b: "+1",
    option_c: "-1",
    option_d: "+2",
    answer: "A",
    explanation: "Neutrons are neutral subatomic particles located in the atomic nucleus with a charge of **0**. Protons have +1, electrons -1.",
    topic: "Atomic Structure & Subatomic Particles",
    difficulty: "Easy"
  },
  {
    number: 50,
    text: "Consider a standard $\\text{Zn-Cu}$ voltaic cell: The zinc electrode is on the left immersed in $\\text{ZnSO}_4$ solution, connected through a voltmeter to a copper electrode (B) on the right immersed in $\\text{CuSO}_4$ solution.\n\nIn this voltaic cell, what does letter **B** represent?",
    option_a: "Cathode",
    option_b: "Voltameter",
    option_c: "Anode",
    option_d: "Salt bridge",
    answer: "A",
    explanation: "In a $\\text{Zn-Cu}$ galvanic cell, reduction occurs at the copper electrode ($\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}(s)$). The electrode where reduction occurs is the **Cathode** (labeled B).",
    topic: "Electrochemistry & Galvanic Cells",
    difficulty: "Easy"
  },
  {
    number: 51,
    text: "Consider the following structure:\n$$\\text{CH}_3-\\text{CH}_2-\\text{CH}(\\text{CH}_3)-\\text{CH}_2-\\text{C}\\equiv\\text{C}-\\text{CH}_2-\\text{CH}_3$$\nWhich one of the following is the IUPAC name for the given organic compound?",
    option_a: "2-Ethyl-6-heptyne",
    option_b: "6-Ethyl-3-heptyne",
    option_c: "3-Methyl-5-octyne",
    option_d: "6-Methyl-3-octyne",
    answer: "D",
    explanation: "1. Find the longest carbon chain containing the triple bond: 8 carbons ($\\text{octyne}$).\n2. Number from the right end to give the triple bond the lowest locant:\n   $\\text{C}1(\\text{right}) - \\text{C}2 - \\text{C}3\\equiv\\text{C}4 - \\text{C}5 - \\text{C}6(\\text{CH}_3) - \\text{C}7 - \\text{C}8$\n3. Triple bond is at position 3; methyl group is at position 6.\n4. IUPAC Name: **6-Methyl-3-octyne**.",
    topic: "IUPAC Nomenclature & Alkynes",
    difficulty: "Medium"
  },
  {
    number: 52,
    text: "In a laboratory experiment, a test tube containing a mixture of iron filings ($\\text{Fe}$) and yellow sulfur powder ($\\text{S}$) is strongly heated over a Bunsen burner flame until a glowing black solid forms.\n\nWhich of the following reactions takes place in the above experiment?",
    option_a: "Decomposition reaction",
    option_b: "Direct combination reaction",
    option_c: "Double displacement reaction",
    option_d: "Single displacement reaction",
    answer: "B",
    explanation: "Heating iron filings ($\\text{Fe}$) and sulfur powder ($\\text{S}$) causes them to combine directly into a single substance, iron(II) sulfide:\n$$\\text{Fe}(s) + \\text{S}(s) \\xrightarrow{\\Delta} \\text{FeS}(s)$$\nThis is a synthesis or **direct combination reaction**.",
    topic: "Chemical Reactions & Synthesis",
    difficulty: "Easy"
  },
  {
    number: 53,
    text: "An equilibrium mixture contains $0.30\\text{ mol }\\text{CO}$, $0.10\\text{ mol }\\text{H}_2$, $0.020\\text{ mol }\\text{H}_2\\text{O}$ and an unknown concentration of $\\text{CH}_4$, in a $1.0\\text{ L}$ container at $1200\\text{ K}$. In this mixture, what is the molar concentration of $\\text{CH}_4$ at equilibrium?\n$$\\text{CO}(g) + 3\\text{H}_2(g) \\rightleftharpoons \\text{CH}_4(g) + \\text{H}_2\\text{O}(g), \\quad K_c = 3.92$$",
    option_a: "$0.059\\text{ mol/L}$",
    option_b: "$0.015\\text{ mol/L}$",
    option_c: "$0.197\\text{ mol/L}$",
    option_d: "$0.001\\text{ mol/L}$",
    answer: "A",
    explanation: "Set up the equilibrium constant expression:\n$$K_c = \\frac{[\\text{CH}_4][\\text{H}_2\\text{O}]}{[\\text{CO}][\\text{H}_2]^3}$$\nSubstitute given values ($V = 1.0\\text{ L}$ means $\\text{moles} = \\text{molarity}$):\n$$3.92 = \\frac{[\\text{CH}_4](0.020)}{(0.30)(0.10)^3} = \\frac{0.020 [\\text{CH}_4]}{(0.30)(0.001)} = \\frac{0.020 [\\text{CH}_4]}{0.0003}$$\n$$0.020 [\\text{CH}_4] = 3.92 \\times 0.0003 = 0.001176$$\n$$[\\text{CH}_4] = \\frac{0.001176}{0.020} = 0.0588\\text{ M} \\approx 0.059\\text{ mol/L}$$",
    topic: "Chemical Equilibrium Calculations",
    difficulty: "Hard"
  },
  {
    number: 54,
    text: "Which one of the following is the reason why hydrolysis of sodium carbonate gives a basic solution? This is due to:",
    option_a: "$\\text{CO}_3^{2-}$ is hydrolyzed",
    option_b: "$\\text{H}^+$ is hydrolyzed",
    option_c: "$\\text{OH}^-$ is hydrolyzed",
    option_d: "$\\text{Na}^+$ is hydrolyzed",
    answer: "A",
    explanation: "$\\text{Na}_2\\text{CO}_3$ dissolves to release $\\text{Na}^+$ and $\\text{CO}_3^{2-}$. $\\text{Na}^+$ is the spectator conjugate of a strong base ($\\text{NaOH}$) and does not hydrolyze. $\\text{CO}_3^{2-}$ is the strong conjugate base of a weak acid ($\\text{HCO}_3^-$) and undergoes anion hydrolysis:\n$$\\text{CO}_3^{2-}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{HCO}_3^-(aq) + \\text{OH}^-(aq)$$\nThe production of excess $\\text{OH}^-$ turns the solution basic.",
    topic: "Salt Hydrolysis & Buffer Systems",
    difficulty: "Easy"
  },
  {
    number: 55,
    text: "The thermal decomposition of calcium carbonate during the commercial preparation of lime ($\\text{CaO}$) is given below:\n$$\\text{CaCO}_3(s) \\rightarrow \\text{CaO}(s) + \\text{CO}_2(g)$$\nWhat is the atom economy for the preparation of lime based on the above reaction? (Atomic masses: $\\text{Ca}=40$, $\\text{C}=12$, $\\text{O}=16\\text{ g/mol}$)",
    option_a: "56%",
    option_b: "49.1%",
    option_c: "44%",
    option_d: "100%",
    answer: "A",
    explanation: "$$\\text{Atom Economy} = \\left( \\frac{\\text{Molar mass of desired product}}{\\text{Total molar mass of reactants}} \\right) \\times 100\\%$$\n* Desired product ($\\text{CaO}$): $40 + 16 = 56\\text{ g/mol}$\n* Reactant ($\\text{CaCO}_3$): $40 + 12 + (3 \\times 16) = 100\\text{ g/mol}$\n\n$$\\text{Atom Economy} = \\left( \\frac{56}{100} \\right) \\times 100\\% = 56\\%$$",
    topic: "Green Chemistry & Atom Economy",
    difficulty: "Easy"
  },
  {
    number: 56,
    text: "The rate constant of a reaction increases by a factor of 4 when the temperature is increased from $300\\text{ K}$ to $320\\text{ K}$. What is the approximate activation energy of the reaction? ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$, $\\ln(4) \\approx 1.386$)",
    option_a: "$27.6\\text{ kJ/mol}$",
    option_b: "$55.3\\text{ kJ/mol}$",
    option_c: "$110.6\\text{ kJ/mol}$",
    option_d: "$8.31\\text{ kJ/mol}$",
    answer: "B",
    explanation: "Using the two-temperature Arrhenius equation:\n$$\\ln\\left( \\frac{k_2}{k_1} \\right) = \\frac{E_a}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)$$\n$$1.386 = \\frac{E_a}{8.314} \\left( \\frac{1}{300} - \\frac{1}{320} \\right) = \\frac{E_a}{8.314} \\left( \\frac{20}{96000} \\right) = \\frac{E_a}{8.314} \\left( \\frac{1}{4800} \\right)$$\n$$E_a = 1.386 \\times 8.314 \\times 4800 = 55311.6\\text{ J/mol} \\approx 55.3\\text{ kJ/mol}$$",
    topic: "Chemical Kinetics & Arrhenius Equation",
    difficulty: "Hard"
  },
  {
    number: 57,
    text: "Calculate the electromotive force (EMF) of the cell $\\text{Zn}|\\text{Zn}^{2+}(0.01\\text{M})||\\text{Cu}^{2+}(1.0\\text{M})|\\text{Cu}$ at $25^\\circ\\text{C}$ ($E^\\circ_{\\text{cell}} = 1.10\\text{ V}$).",
    option_a: "$1.10\\text{ V}$",
    option_b: "$1.04\\text{ V}$",
    option_c: "$1.16\\text{ V}$",
    option_d: "$1.22\\text{ V}$",
    answer: "C",
    explanation: "By the Nernst equation ($n=2$):\n$$E = E^\\circ - \\frac{0.0592}{n} \\log Q = 1.10 - \\frac{0.0592}{2} \\log \\left( \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]} \\right)$$\n$$E = 1.10 - 0.0296 \\log\\left(\\frac{0.01}{1.0}\\right) = 1.10 - 0.0296 (-2) = 1.10 + 0.0592 = 1.1592\\text{ V} \\approx 1.16\\text{ V}$$",
    topic: "Electrochemistry & Nernst Equation",
    difficulty: "Hard"
  },
  {
    number: 58,
    text: "What is the pH of a buffer solution prepared by mixing $50.0\\text{ mL}$ of $0.20\\text{ M } \\text{CH}_3\\text{COOH}$ and $50.0\\text{ mL}$ of $0.10\\text{ M } \\text{NaOH}$? ($K_a \\text{ for } \\text{CH}_3\\text{COOH} = 1.8 \\times 10^{-5}$)",
    option_a: "2.87",
    option_b: "4.74",
    option_c: "5.04",
    option_d: "9.26",
    answer: "B",
    explanation: "Moles initial:\n* $\\text{CH}_3\\text{COOH} = 0.050\\text{ L} \\times 0.20\\text{ M} = 0.010\\text{ mol}$\n* $\\text{NaOH} = 0.050\\text{ L} \\times 0.10\\text{ M} = 0.005\\text{ mol}$\n\nNeutralization reaction:\n$$\\text{CH}_3\\text{COOH} + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$$\n* Remaining $\\text{CH}_3\\text{COOH} = 0.010 - 0.005 = 0.005\\text{ mol}$\n* Formed $\\text{CH}_3\\text{COO}^- = 0.005\\text{ mol}$\n\nSince $[\\text{Acid}] = [\\text{Conjugate Base}]$, using Henderson-Hasselbalch:\n$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Base}]}{[\\text{Acid}]}\\right) = \\text{p}K_a + \\log(1) = \\text{p}K_a$$\n$$\\text{pH} = -\\log(1.8 \\times 10^{-5}) \\approx 4.74$$",
    topic: "Buffer Solutions & Henderson-Hasselbalch",
    difficulty: "Hard"
  },
  {
    number: 59,
    text: "Calculate the standard enthalpy of formation of liquid benzene ($\\text{C}_6\\text{H}_6(l)$) given the standard enthalpies of combustion: $\\Delta H_c^\\circ(\\text{C}(s)) = -394\\text{ kJ/mol}$, $\\Delta H_c^\\circ(\\text{H}_2(g)) = -286\\text{ kJ/mol}$, $\\Delta H_c^\\circ(\\text{C}_6\\text{H}_6(l)) = -3268\\text{ kJ/mol}$.",
    option_a: "$-46\\text{ kJ/mol}$",
    option_b: "$+46\\text{ kJ/mol}$",
    option_c: "$+3222\\text{ kJ/mol}$",
    option_d: "$-3268\\text{ kJ/mol}$",
    answer: "B",
    explanation: "Target formation reaction: $6\\text{C}(s) + 3\\text{H}_2(g) \\rightarrow \\text{C}_6\\text{H}_6(l)$.\nUsing standard enthalpies of combustion:\n$$\\Delta H_f^\\circ = \\sum \\Delta H_c^\\circ(\\text{reactants}) - \\sum \\Delta H_c^\\circ(\\text{products})$$\n$$\\Delta H_f^\\circ = [6(-394) + 3(-286)] - [-3268]$$\n$$\\Delta H_f^\\circ = [-2364 - 858] + 3268 = -3222 + 3268 = +46\\text{ kJ/mol}$$",
    topic: "Thermochemistry & Hess's Law",
    difficulty: "Hard"
  },
  {
    number: 60,
    text: "Which of the following alkyl halides is most reactive towards an $\\text{S}_\\text{N}1$ substitution reaction mechanism?",
    option_a: "1-Chlorobutane",
    option_b: "2-Chlorobutane",
    option_c: "2-Chloro-2-methylpropane",
    option_d: "Chloromethane",
    answer: "C",
    explanation: "The rate-determining step in an $\\text{S}_\\text{N}1$ mechanism is carbocation formation. Carbocation stability increases in the order: methyl < $1^\\circ < 2^\\circ < 3^\\circ$ due to alkyl hyperconjugation and inductive stabilization. 2-chloro-2-methylpropane is a **tertiary ($3^\\circ$) alkyl halide**, making it the most reactive via $\\text{S}_\\text{N}1$.",
    topic: "Organic Reaction Mechanisms & Alkyl Halides",
    difficulty: "Medium"
  },
  {
    number: 61,
    text: "Which quantum number determines the spatial orientation of an orbital in a magnetic field?",
    option_a: "Principal quantum number ($n$)",
    option_b: "Azimuthal quantum number ($l$)",
    option_c: "Magnetic quantum number ($m_l$)",
    option_d: "Spin quantum number ($m_s$)",
    answer: "C",
    explanation: "* **$n$** defines energy level and shell size.\n* **$l$** defines orbital shape (subshell).\n* **$m_l$** specifies spatial orientation of the orbital in space relative to an external magnetic field.\n* **$m_s$** specifies intrinsic electron spin.",
    topic: "Atomic Structure & Quantum Numbers",
    difficulty: "Easy"
  },
  {
    number: 62,
    text: "What is the hybridization of the central sulfur atom in sulfur hexafluoride, $\\text{SF}_6$?",
    option_a: "$sp^3$",
    option_b: "$sp^3d$",
    option_c: "$sp^3d^2$",
    option_d: "$sp^2$",
    answer: "C",
    explanation: "$\\text{SF}_6$ has 6 bonding pairs and 0 lone pairs around Sulfur (Steric Number = 6). A steric number of 6 corresponds to an octahedral geometry and **$sp^3d^2$** hybridization.",
    topic: "Chemical Bonding & Orbital Hybridization",
    difficulty: "Easy"
  },
  {
    number: 63,
    text: "Which of the following aqueous solutions will have the highest boiling point elevation?",
    option_a: "$0.10\\text{ M } \\text{NaCl}$",
    option_b: "$0.10\\text{ M } \\text{CaCl}_2$",
    option_c: "$0.10\\text{ M } \\text{AlCl}_3$",
    option_d: "$0.10\\text{ M } \\text{Glucose}$",
    answer: "C",
    explanation: "Boiling point elevation is a colligative property ($\\Delta T_b = i \\cdot K_b \\cdot m$). Higher van 't Hoff factor ($i$) yields higher boiling point:\n* Glucose: $i = 1$\n* $\\text{NaCl}$: $i = 2$ ($\\text{Na}^+, \\text{Cl}^-$)\n* $\\text{CaCl}_2$: $i = 3$ ($\\text{Ca}^{2+}, 2\\text{Cl}^-$)\n* **$\\text{AlCl}_3$**: $i = 4$ ($\\text{Al}^{3+}, 3\\text{Cl}^-$) — highest total dissolved ion concentration.",
    topic: "Colligative Properties & van 't Hoff Factor",
    difficulty: "Medium"
  },
  {
    number: 64,
    text: "The conjugate base of hydrogen phosphate ion, $\\text{HPO}_4^{2-}$, is:",
    option_a: "$\\text{H}_3\\text{PO}_4$",
    option_b: "$\\text{H}_2\\text{PO}_4^-$",
    option_c: "$\\text{PO}_4^{3-}$",
    option_d: "$\\text{P}_2\\text{O}_7^{4-}$",
    answer: "C",
    explanation: "A conjugate base is formed when a Bronsted-Lowry acid loses one proton ($\\text{H}^+$).\n$$\\text{HPO}_4^{2-} \\rightarrow \\text{H}^+ + \\text{PO}_4^{3-}$$\nThus, the conjugate base is **$\\text{PO}_4^{3-}$**.",
    topic: "Bronsted-Lowry Acids & Bases",
    difficulty: "Easy"
  },
  {
    number: 65,
    text: "What is the oxidation number of chromium in potassium dichromate, $\\text{K}_2\\text{Cr}_2\\text{O}_7$?",
    option_a: "+3",
    option_b: "+6",
    option_c: "+7",
    option_d: "+4",
    answer: "B",
    explanation: "$$2(+1) + 2(x) + 7(-2) = 0$$\n$$2 + 2x - 14 = 0 \\implies 2x = 12 \\implies x = +6$$",
    topic: "Redox & Oxidation Numbers",
    difficulty: "Easy"
  },
  {
    number: 66,
    text: "Which of the following primary functional groups characterizes an aldehyde?",
    option_a: "$-\\text{COOH}$",
    option_b: "$-\\text{CHO}$",
    option_c: "$-\\text{CO}- $",
    option_d: "$-\\text{OH}$",
    answer: "B",
    explanation: "* $-\\text{CHO}$ is aldehyde (carbonyl bonded to at least one hydrogen).\n* $-\\text{COOH}$ is carboxylic acid.\n* $-\\text{CO}-$ is ketone.\n* $-\\text{OH}$ is alcohol.",
    topic: "Organic Functional Groups",
    difficulty: "Easy"
  },
  {
    number: 67,
    text: "In a zero-order reaction, the unit of the rate constant $k$ is:",
    option_a: "$\\text{s}^{-1}$",
    option_b: "$\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$",
    option_c: "$\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
    option_d: "$\\text{L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1}$",
    answer: "C",
    explanation: "$\\text{Rate} = k[\\text{A}]^0 = k$.\nSince $\\text{Rate}$ is in concentration/time ($\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$ or $\\text{M/s}$), the unit for $k$ in a zero-order reaction is **$\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$**.",
    topic: "Chemical Kinetics & Rate Laws",
    difficulty: "Medium"
  },
  {
    number: 68,
    text: "Which gas is produced at the anode during the electrolysis of concentrated aqueous sodium chloride ($\\text{NaCl}$) solution using inert electrodes?",
    option_a: "Oxygen gas ($\\text{O}_2$)",
    option_b: "Hydrogen gas ($\\text{H}_2$)",
    option_c: "Chlorine gas ($\\text{Cl}_2$)",
    option_d: "Sodium vapor ($\\text{Na}$)",
    answer: "C",
    explanation: "In concentrated brine, due to overvoltage and concentration effects, chloride ions ($\\text{Cl}^-$) are preferentially oxidized over water at the anode, yielding **Chlorine gas ($\\text{Cl}_2$)**. Water is reduced at cathode to produce $\\text{H}_2$.",
    topic: "Electrochemistry & Industrial Electrolysis",
    difficulty: "Medium"
  },
  {
    number: 69,
    text: "What is the general formula for non-cyclic alkanes?",
    option_a: "$\\text{C}_n\\text{H}_{2n}$",
    option_b: "$\\text{C}_n\\text{H}_{2n+2}$",
    option_c: "$\\text{C}_n\\text{H}_{2n-2}$",
    option_d: "$\\text{C}_n\\text{H}_{2n-6}$",
    answer: "B",
    explanation: "Saturated open-chain hydrocarbons (alkanes) conform to the general molecular formula **$\\text{C}_n\\text{H}_{2n+2}$**.",
    topic: "Hydrocarbons & Alkanes",
    difficulty: "Easy"
  },
  {
    number: 70,
    text: "According to Le Chatelier's principle, what happens to the exothermic reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) + \\text{heat}$ when temperature is increased?",
    option_a: "Equilibrium shifts to the right; $K_c$ increases.",
    option_b: "Equilibrium shifts to the left; $K_c$ decreases.",
    option_c: "Equilibrium shifts to the right; $K_c$ stays constant.",
    option_d: "No shift occurs.",
    answer: "B",
    explanation: "Increasing temperature adds heat to an exothermic system. To counteract this, the equilibrium shifts in the endothermic reverse direction (to the left), forming more reactants and causing **$K_c$ to decrease**.",
    topic: "Chemical Equilibrium & Le Chatelier's Principle",
    difficulty: "Medium"
  },
  {
    number: 71,
    text: "Which oxide listed below is amphoteric?",
    option_a: "$\\text{Na}_2\\text{O}$",
    option_b: "$\\text{SO}_3$",
    option_c: "$\\text{Al}_2\\text{O}_3$",
    option_d: "$\\text{CO}_2$",
    answer: "C",
    explanation: "Aluminum oxide ($\\text{Al}_2\\text{O}_3$) reacts with both acids and strong bases to yield salt and water, making it **amphoteric**. ($\\text{Na}_2\\text{O}$ is basic; $\\text{SO}_3$ and $\\text{CO}_2$ are acidic).",
    topic: "Oxides & Amphoterism",
    difficulty: "Easy"
  },
  {
    number: 72,
    text: "What is the percentage composition by mass of carbon in ethanol, $\\text{C}_2\\text{H}_5\\text{OH}$? (Atomic masses: $\\text{C}=12, \\text{H}=1, \\text{O}=16$)",
    option_a: "52.2%",
    option_b: "13.0%",
    option_c: "34.8%",
    option_d: "26.1%",
    answer: "A",
    explanation: "* Molar mass of $\\text{C}_2\\text{H}_6\\text{O} = (2 \\times 12) + (6 \\times 1) + 16 = 24 + 6 + 16 = 46\\text{ g/mol}$.\n* Mass of Carbon $= 24\\text{ g/mol}$.\n$$\\%\\text{ C} = \\left(\\frac{24}{46}\\right) \\times 100\\% \\approx 52.17\\% \\approx 52.2\\%$$",
    topic: "Stoichiometry & Percentage Composition",
    difficulty: "Easy"
  },
  {
    number: 73,
    text: "What is the IUPAC name of $\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{CH}_3$?",
    option_a: "Propanone",
    option_b: "Butanal",
    option_c: "Butan-2-one",
    option_d: "Butan-1-ol",
    answer: "C",
    explanation: "It is a 4-carbon chain ketone with the carbonyl oxygen located at position 2: **Butan-2-one** (or 2-butanone).",
    topic: "IUPAC Nomenclature & Ketones",
    difficulty: "Easy"
  },
  {
    number: 74,
    text: "The expression for the solubility product constant ($K_{sp}$) of calcium phosphate, $\\text{Ca}_3(\\text{PO}_4)_2$, is:",
    option_a: "$[\\text{Ca}^{2+}][\\text{PO}_4^{3-}]$",
    option_b: "$[\\text{Ca}^{2+}]^3 [\\text{PO}_4^{3-}]^2$",
    option_c: "$[\\text{Ca}^{2+}]^2 [\\text{PO}_4^{3-}]^3$",
    option_d: "$3[\\text{Ca}^{2+}] \\cdot 2[\\text{PO}_4^{3-}]$",
    answer: "B",
    explanation: "Dissolution equation: $\\text{Ca}_3(\\text{PO}_4)_2(s) \\rightleftharpoons 3\\text{Ca}^{2+}(aq) + 2\\text{PO}_4^{3-}(aq)$.\n$$K_{sp} = [\\text{Ca}^{2+}]^3 [\\text{PO}_4^{3-}]^2$$",
    topic: "Solubility Equilibria & Ksp Expressions",
    difficulty: "Easy"
  },
  {
    number: 75,
    text: "Which law states that at constant temperature, the volume of a given mass of gas is inversely proportional to its pressure?",
    option_a: "Charles's Law",
    option_b: "Boyle's Law",
    option_c: "Gay-Lussac's Law",
    option_d: "Avogadro's Law",
    answer: "B",
    explanation: "**Boyle's Law** states $V \\propto \\frac{1}{P}$ at constant temperature and amount of gas.",
    topic: "Gas Laws & Gas Behaviour",
    difficulty: "Easy"
  },
  {
    number: 76,
    text: "Which standard subatomic particle was discovered by J.J. Thomson using the cathode ray tube experiment?",
    option_a: "Proton",
    option_b: "Neutron",
    option_c: "Electron",
    option_d: "Alpha particle",
    answer: "C",
    explanation: "J.J. Thomson discovered the **electron** in 1897 through his experiments with cathode ray tubes.",
    topic: "History of Atomic Discovery",
    difficulty: "Easy"
  },
  {
    number: 77,
    text: "What is the bond angle in a molecule with perfect tetrahedral geometry (such as $\\text{CH}_4$)?",
    option_a: "90°",
    option_b: "120°",
    option_c: "109.5°",
    option_d: "180°",
    answer: "C",
    explanation: "A regular $sp^3$ hybridized tetrahedral geometry with 0 lone pairs ($\\text{AX}_4$) exhibits bond angles of **109.5°**.",
    topic: "Molecular Geometry & Bond Angles",
    difficulty: "Easy"
  },
  {
    number: 78,
    text: "In industrial extraction of iron in a blast furnace, which species acts as the main reducing agent for iron ores?",
    option_a: "Carbon dioxide ($\\text{CO}_2$)",
    option_b: "Carbon monoxide ($\\text{CO}$)",
    option_c: "Limestone ($\\text{CaCO}_3$)",
    option_d: "Slag ($\\text{CaSiO}_3$)",
    answer: "B",
    explanation: "Carbon monoxide ($\\text{CO}$) gas generated by high-temperature coke reaction reduces hematite ($\\text{Fe}_2\\text{O}_3$):\n$$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$$",
    topic: "Metallurgy & Blast Furnace Chemistry",
    difficulty: "Easy"
  },
  {
    number: 79,
    text: "Which type of radiation possesses the highest penetrating power?",
    option_a: "Alpha ($\\alpha$) particles",
    option_b: "Beta ($\\beta$) particles",
    option_c: "Gamma ($\\gamma$) rays",
    option_d: "Positron emission",
    answer: "C",
    explanation: "**Gamma ($\\gamma$) rays** are high-energy electromagnetic photons with zero charge and mass, giving them the highest penetrating power among nuclear emissions.",
    topic: "Nuclear Chemistry & Radioactivity",
    difficulty: "Easy"
  },
  {
    number: 80,
    text: "What is the oxidation product of a secondary alcohol when reacted with potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7/\\text{H}^+$)?",
    option_a: "Carboxylic acid",
    option_b: "Aldehyde",
    option_c: "Ketone",
    option_d: "Alkene",
    answer: "C",
    explanation: "Controlled oxidation of a secondary alcohol ($\\text{R}_2\\text{CHOH}$) removes two hydrogen atoms to yield a **ketone** ($\\text{R}_2\\text{C}=\\text{O}$). Primary alcohols oxidize to aldehydes/carboxylic acids.",
    topic: "Organic Chemistry & Alcohol Reactions",
    difficulty: "Easy"
  }
];

// Target Exam ID
const EXAM_ID = 'exam-entrance-1789446267047';

function runIngestion() {
  console.log('Starting ingestion of 80 Chemistry questions for 2018 E.C. Exam...');
  const dbPath = path.join(process.cwd(), 'data', 'database.json');
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  let exam = db.exams.find(e => e.id === EXAM_ID);
  if (!exam) {
    exam = {
      id: EXAM_ID,
      title: '2018 E.C. Chemistry First Round ESSLCE Online Exam',
      year: 2018,
      ethiopian_year: '2018 E.C.',
      exam_series: '2018 E.C. EUEE Exams',
      exam_type: 'University Entrance Examination',
      category: 'ENTRANCE',
      source_type: 'OFFICIAL',
      is_free_preview: true,
      grade_id: 'grade-12-natural',
      subject_id: 'subj-chem',
      grade_name: 'Grade 12 - Natural Science',
      subject_name: 'Chemistry',
      description: 'Official 80-question 2018 E.C. First Round ESSLCE / EUEE Chemistry Examination with LaTeX formulas, chemical equations, diagrams, and step-by-step pedagogical explanations.',
      instructions: 'Answer all 80 questions. Each question carries equal marks. Choose the single best alternative A, B, C, or D.',
      duration_minutes: 150,
      total_questions: 80,
      total_marks: 100,
      original_pdf_path: `storage/private/exams/${EXAM_ID}.pdf`,
      pdf_path: `storage/private/exams/${EXAM_ID}.pdf`,
      status: 'PUBLISHED',
      is_demo: false,
      created_at: '2026-09-15T04:24:27.059Z',
      updated_at: new Date().toISOString()
    };
    db.exams.push(exam);
  } else {
    exam.title = '2018 E.C. Chemistry First Round ESSLCE Online Exam';
    exam.total_questions = 80;
    exam.description = 'Official 80-question 2018 E.C. First Round ESSLCE / EUEE Chemistry Examination with LaTeX formulas, chemical equations, diagrams, and step-by-step pedagogical explanations.';
    exam.instructions = 'Answer all 80 questions. Each question carries equal marks. Choose the single best alternative A, B, C, or D.';
    exam.duration_minutes = 150;
    exam.updated_at = new Date().toISOString();
  }

  // Remove existing questions for this exam
  db.exam_questions = db.exam_questions.filter(q => q.exam_id !== EXAM_ID);

  // Convert raw questions into full ExamQuestion objects
  const newQuestions = rawQuestions.map((q) => {
    return {
      id: `q-${EXAM_ID}-${q.number}`,
      exam_id: EXAM_ID,
      question_number: q.number,
      question_text: cleanMathLatex(q.text),
      option_a: cleanMathLatex(q.option_a),
      option_b: cleanMathLatex(q.option_b),
      option_c: cleanMathLatex(q.option_c),
      option_d: cleanMathLatex(q.option_d),
      correct_answer: q.answer,
      explanation: cleanMathLatex(q.explanation),
      difficulty: q.difficulty || 'Medium',
      topic_id: `top-chem-${q.number}`,
      topic_name: q.topic || 'General Chemistry',
      subject_id: 'subj-chem',
      grade_id: 'grade-12-natural',
      points: 1.25,
      has_diagram: [12, 13, 16, 29, 48, 50, 52].includes(q.number),
      created_at: new Date().toISOString()
    };
  });

  db.exam_questions.push(...newQuestions);

  // Write updated DB
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log(`Saved ${newQuestions.length} questions to data/database.json`);

  // Mirror to official backups
  const backups = [
    path.join(process.cwd(), 'data', 'official_exams_backup.json'),
    path.join(process.cwd(), 'server', 'official_exams_backup.json')
  ];

  for (const bPath of backups) {
    try {
      if (fs.existsSync(bPath)) {
        const bData = JSON.parse(fs.readFileSync(bPath, 'utf8'));
        const exIdx = bData.exams.findIndex(e => e.id === EXAM_ID);
        if (exIdx >= 0) {
          bData.exams[exIdx] = { ...bData.exams[exIdx], ...exam };
        } else {
          bData.exams.push(exam);
        }
        bData.exam_questions = bData.exam_questions.filter(q => q.exam_id !== EXAM_ID);
        bData.exam_questions.push(...newQuestions);
        fs.writeFileSync(bPath, JSON.stringify(bData, null, 2), 'utf8');
        console.log(`Successfully mirrored to ${bPath}`);
      }
    } catch (err) {
      console.warn(`Could not mirror to ${bPath}:`, err.message);
    }
  }

  console.log('Ingestion complete!');
}

runIngestion();
