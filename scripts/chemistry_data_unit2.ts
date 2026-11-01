// Unit 2: Electrochemistry (Pages 64 to 142)
export function getUnit2PageContent(pageNum: number): string {
  const p = pageNum - 8; // printed page (56 to 134)

  if (p === 56) {
    return `# UNIT 2: ELECTROCHEMISTRY

### Unit Outcomes
At the end of this unit, you will be able to:
- Balance redox reactions using oxidation number and ion-electron methods.
- Distinguish between metallic conduction and electrolytic conduction.
- Describe the parts of an electrolytic cell and reactions occurring at electrodes.
- State factors affecting preferential discharge of ions in aqueous solutions.
- Apply Faraday's first and second laws of electrolysis to numerical calculations.
- Describe industrial applications of electrolysis: aluminum extraction, copper refining, electroplating.
- Describe the construction and operation of galvanic (voltaic) cells and Daniell cell.
- Explain the role of the salt bridge and standard hydrogen electrode (SHE).
- Calculate standard cell potentials (E°cell) and non-standard potentials using Nernst equation.
- Describe primary batteries, secondary rechargeable batteries, and fuel cells.
- Explain the mechanism of metal corrosion (rusting) and electrochemical prevention.`;
  }
  if (p === 57) {
    return `### 2.1 Oxidation-Reduction Reactions
At the end of this subunit, you will be able to:
- Define oxidation and reduction in terms of electron transfer and oxidation numbers.
- Determine the oxidation number of an element in a given formula.
- Identify oxidizing agents and reducing agents in redox equations.

### Fundamental Definitions:
1. **Oxidation**: The loss of electrons or increase in oxidation state.
   M -> M^(n+) + n e-
2. **Reduction**: The gain of electrons or decrease in oxidation state.
   X + n e- -> X^(n-)
3. **Oxidizing Agent**: Species that accepts electrons, causing another species to be oxidized. It undergoes reduction.
4. **Reducing Agent**: Species that donates electrons, causing another species to be reduced. It undergoes oxidation.

Example: Zn(s) + Cu2+(aq) -> Zn2+(aq) + Cu(s)
- Zinc loses 2 electrons (oxidized; reducing agent).
- Copper(II) gains 2 electrons (reduced; oxidizing agent).`;
  }
  if (p === 58) {
    return `### Oxidation Numbers and Rules
The **oxidation number** (oxidation state) represents the electric charge an atom would have if electrons were transferred completely.
**Rules for Assigning Oxidation Numbers**:
1. Free, uncombined elements have an oxidation number of 0 (e.g., Na, H2, O2, P4, S8).
2. Monatomic ions have an oxidation number equal to their charge (e.g., Na+ is +1, Fe3+ is +3, Cl- is -1).
3. Fluorine is always -1 in all its compounds.
4. Group IA alkali metals are always +1; Group IIA alkaline earth metals are always +2.
5. Hydrogen is usually +1, except in metal hydrides (e.g., NaH, CaH2) where it is -1.
6. Oxygen is usually -2, except in peroxides (e.g., H2O2) where it is -1, and in OF2 where it is +2.
7. The algebraic sum of oxidation numbers in a neutral molecule is 0.
8. The algebraic sum of oxidation numbers in a polyatomic ion equals the charge of the ion.`;
  }
  if (p <= 65) {
    return `### Balancing Redox Reactions (Printed Page ${p})
There are two standard systematic methods for balancing redox reactions:
1. **Oxidation Number Method**:
   - Assign oxidation numbers to all elements.
   - Identify elements undergoing oxidation and reduction.
   - Calculate increase and decrease in oxidation numbers.
   - Equalize total increase and decrease using integer coefficients.
   - Balance spectator ions and oxygen/hydrogen using H2O and H+.
2. **Ion-Electron (Half-Reaction) Method**:
   - Separate overall equation into oxidation and reduction half-reactions.
   - Balance all atoms other than H and O.
   - Balance O by adding H2O.
   - Balance H by adding H+ (in acidic solution).
   - In basic solution, add equal OH- to both sides to neutralize H+ into H2O.
   - Balance charge by adding electrons (e-).
   - Multiply half-reactions so electrons cancel, then add together.`;
  }
  if (p <= 79) {
    return `### 2.2 Electrolysis of Aqueous Solutions (Printed Page ${p})
- **Electrolysis**: Chemical decomposition produced by passing an electric current through an electrolyte.
- **Electrolytic Cell**: Converts electrical energy into non-spontaneous chemical change (delta G > 0).
  - Anode: Connected to positive terminal (+). Site of oxidation.
  - Cathode: Connected to negative terminal (-). Site of reduction.
- **Preferential Discharge of Ions**:
  When multiple ions are present in aqueous solution, discharge order depends on:
  1. *Electrode potential (position in electrochemical series)*: Cations with higher standard reduction potential (lower in activity series) discharge preferentially at the cathode.
  2. *Concentration of ions*: Higher ion concentration favors discharge (e.g., concentrated chloride in brine).
  3. *Nature of the electrode*: Inert (Pt, graphite) vs active electrodes (Cu, Ag).
- Molten NaCl: Na+ reduced to Na(l) at cathode; Cl- oxidized to Cl2(g) at anode.
- Brine (aqueous NaCl): H+ reduced to H2(g) at cathode; Cl- oxidized to Cl2(g) at anode; NaOH remains in solution.`;
  }
  if (p <= 85) {
    return `### 2.3 Quantitative Aspects of Electrolysis (Printed Page ${p})
Faraday's Laws relate electrical charge to chemical mass deposited:
1. **Faraday's First Law**:
   The mass (m) of substance liberated at an electrode is directly proportional to the quantity of electricity (Q) passed:
   m = Z * Q = Z * I * t
   m = (M * I * t) / (n * F)
   - M: Molar mass (g/mol)
   - I: Current in Amperes (A)
   - t: Time in seconds (s)
   - n: Number of electrons transferred per ion
   - F: Faraday's constant = 96,500 C/mol of electrons
2. **Faraday's Second Law**:
   When the same quantity of electricity passes through different electrolytes in series:
   m1 / E1 = m2 / E2
   where E is equivalent mass (E = M / n).`;
  }
  if (p <= 91) {
    return `### 2.4 Industrial Applications of Electrolysis (Printed Page ${p})
1. **Extraction of Aluminum (Hall-Héroult Process)**:
   - Alumina (Al2O3) dissolved in molten synthetic cryolite (Na3AlF6) at 950°C.
   - Cathode: Carbon lining; Al3+ + 3e- -> Al(l) (molten aluminum sinks to bottom).
   - Anode: Carbon rods; 2O2- + C -> CO2(g) + 4e- (anodes consumed gradually).
2. **Electrorefining of Copper**:
   - Anode: Thick slab of impure copper (dissolves: Cu -> Cu2+ + 2e-).
   - Cathode: Thin pure copper sheet (deposits pure copper: Cu2+ + 2e- -> Cu).
   - Anode mud: Impurities like gold, silver, and platinum settle below anode.
3. **Electroplating**:
   - Coating an object with a thin protective or decorative metal layer (Ag, Cr, Au, Ni). Object is made the cathode.`;
  }
  if (p <= 105) {
    return `### 2.5 Voltaic (Galvanic) Cells & Cell Potentials (Printed Page ${p})
A **voltaic (galvanic) cell** converts chemical energy from a spontaneous redox reaction into electrical energy.
- **Daniell Cell Architecture**:
  - Anode (-): Zinc strip in 1.0 M ZnSO4: Zn(s) -> Zn2+(aq) + 2e- (Oxidation).
  - Cathode (+): Copper strip in 1.0 M CuSO4: Cu2+(aq) + 2e- -> Cu(s) (Reduction).
  - Salt Bridge: Contains inert electrolyte (e.g., KNO3 in agar). Maintains electrical neutrality by ion migration and completes circuit.
- **Cell Notation**:
  Zn(s) | Zn2+(1.0 M) || Cu2+(1.0 M) | Cu(s)
- **Standard Hydrogen Electrode (SHE)**:
  Reference electrode assigned E° = 0.00 V.
- **Standard Cell Potential**:
  E°cell = E°cathode - E°anode = +0.34 V - (-0.76 V) = +1.10 V.
  delta G° = -n * F * E°cell (Spontaneous when E°cell > 0, delta G° < 0).`;
  }
  if (p <= 120) {
    return `### Nernst Equation & Commercial Batteries (Printed Page ${p})
- **Nernst Equation**: Relates cell potential to ion concentrations at 25°C:
  Ecell = E°cell - (0.0592 / n) * log Q
  where Q = [Products]^c / [Reactants]^a for aqueous and gaseous species.
- **Primary Cells (Non-rechargeable)**:
  - Zinc-carbon dry cell (Leclanché): 1.5 V, Zn anode, MnO2 cathode, NH4Cl paste.
  - Alkaline dry cell: KOH electrolyte, longer life and stable voltage.
- **Secondary Cells (Rechargeable)**:
  - Lead-acid storage battery: Car battery, 12 V (6 cells of 2.0 V in series).
    Pb(s) + PbO2(s) + 2H2SO4(aq) <=> 2PbSO4(s) + 2H2O(l)
  - Lithium-ion battery: Lightweight, high energy density, rechargeable.
- **Fuel Cells**: Continuous supply of reactants (e.g., H2 + O2 -> H2O). High efficiency (60-70%), non-polluting.`;
  }
  // p 121 - 134
  if (p <= 130) {
    return `### Corrosion of Metals & Electrochemical Prevention (Printed Page ${p})
- **Corrosion**: Deterioration of metals through electrochemical redox reactions with environmental air and moisture.
- **Rusting of Iron**:
  - Anodic area: Fe(s) -> Fe2+(aq) + 2e-
  - Cathodic area: O2(g) + 4H+(aq) + 4e- -> 2H2O(l)
  - Rust formation: Fe2+ oxidizes further to hydrated iron(III) oxide:
    4Fe2+ + O2 + (4 + 2n)H2O -> 2Fe2O3.nH2O(s) + 8H+
- **Methods of Corrosion Prevention**:
  1. Barrier protection: Painting, greasing, plastic coating.
  2. Galvanizing: Coating iron with zinc (Zn is sacrificial anode).
  3. Cathodic protection: Connecting underground iron pipes to magnesium or zinc sacrificial blocks.`;
  }
  if (p <= 133) {
    return `### Unit 2 Summary & Formulas Checklist (Printed Page ${p})
- Oxidation is loss of electrons; reduction is gain of electrons.
- Half-reaction method balances mass and charge in acidic/basic media.
- Electrolytic cell: Non-spontaneous (E < 0), Anode (+), Cathode (-).
- Galvanic cell: Spontaneous (E > 0), Anode (-), Cathode (+).
- Faraday's 1st Law: m = (M * I * t) / (n * 96,500).
- Faraday's 2nd Law: m1 / E1 = m2 / E2.
- E°cell = E°cathode - E°anode.
- delta G° = -n * F * E°cell.
- Nernst Equation: Ecell = E°cell - (0.0592 / n) * log Q at 25°C.
- Rusting requires Fe, O2, and H2O; prevented by galvanizing and cathodic protection.`;
  }
  // p === 134
  return `### Unit 2 Review Exercises (Printed Page 134)
1. Balance the following redox reaction in acidic solution:
   Cr2O7 2- + Fe2+ -> Cr3+ + Fe3+
2. A current of 3.00 A is passed through a solution of CuSO4 for 2.00 hours. Calculate the mass of copper deposited at the cathode. (Cu = 63.5 g/mol, F = 96,500 C/mol).
3. Write cell notation and calculate standard potential E°cell for:
   Mg(s) + 2Ag+(aq) -> Mg2+(aq) + 2Ag(s)
   (E° Mg2+/Mg = -2.37 V, E° Ag+/Ag = +0.80 V).
4. Calculate the potential of the Zn-Cu cell at 25°C when [Zn2+] = 0.010 M and [Cu2+] = 1.50 M.
5. Explain why aluminum metal cannot be produced by the electrolysis of an aqueous aluminum chloride solution.`;
}
