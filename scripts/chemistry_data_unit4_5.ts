// Unit 4 (Polymers), Unit 5 (Environmental Chemistry) & References (Pages 221 to 298)
export function getUnit4And5PageContent(pageNum: number): string {
  const p = pageNum - 8; // printed page (213 to 290)

  // ==========================================
  // UNIT 4: POLYMERS (Printed 213 - 239)
  // ==========================================
  if (p === 213) {
    return `# UNIT 4: POLYMERS

### Unit Outcomes
At the end of this unit, you will be able to:
- Define monomer, polymer, homopolymer, copolymer, and degree of polymerization.
- Describe the mechanism of addition (chain-growth) polymerization.
- Describe the mechanism of condensation (step-growth) polymerization.
- Classify polymers based on origin, structure, thermal response, and end-use.
- Compare the physical properties and applications of thermoplastics and thermosetting plastics.
- Discuss the environmental impacts of synthetic plastic wastes and plastic recycling methods in Ethiopia.`;
  }
  if (p <= 219) {
    return `### 4.1 & 4.2 Addition Polymerization (Printed Page ${p})
- **Definitions**:
  - **Monomer**: Small repeating molecular unit from which a polymer is constructed.
  - **Polymer**: Macromolecule composed of many covalently linked repeating monomer units.
  - **Degree of Polymerization (DP)**: Total number of repeating monomer units in the polymer chain.
  - **Homopolymer**: Polymer synthesized from a single type of monomer (e.g., polyethylene).
  - **Copolymer**: Polymer containing two or more distinct types of monomer units (e.g., SBR rubber, Nylon 6,6).
- **Addition (Chain-Growth) Polymerization**:
  Monomers containing double or triple bonds join together without the loss of any small atoms or molecules.
  - *Initiation*: An organic peroxide catalyst (e.g., benzoyl peroxide) dissociates into free radicals (R*), which attack the carbon-carbon double bond.
  - *Propagation*: The radical chain reacts repeatedly with new monomer units, growing the polymer chain:
    R-CH2-CH2* + CH2=CH2 -> R-CH2-CH2-CH2-CH2*
  - *Termination*: Two growing chains combine, or disproportionate, ending the chain reaction.`;
  }
  if (p <= 229) {
    return `### 4.2.2 Condensation Polymerization & Common Polymers (Printed Page ${p})
- **Condensation (Step-Growth) Polymerization**:
  Monomers with two or more functional groups react with the simultaneous elimination of small molecules (such as H2O, HCl, or NH3).
  1. **Nylon 6,6 (Polyamide)**:
     Formed by condensing adipic acid (hexanedioic acid) with hexamethylenediamine:
     n HOOC-(CH2)4-COOH + n H2N-(CH2)6-NH2 -> [-OC-(CH2)4-CONH-(CH2)6-NH-]n + 2n H2O
     Contains repeating amide (-CO-NH-) linkages. Used in synthetic textiles, ropes, and parachutes.
  2. **Dacron / Terylene (PET, Polyester)**:
     Formed from terephthalic acid and ethylene glycol:
     n HOOC-C6H4-COOH + n HO-CH2CH2-OH -> [-OC-C6H4-COO-CH2CH2-O-]n + 2n H2O
     Contains repeating ester (-COO-) linkages. Used in plastic beverage bottles and synthetic fabrics.
  3. **Bakelite (Phenol-Formaldehyde Resin)**:
     Crosslinked thermosetting plastic used in electrical switches and saucepan handles.`;
  }
  if (p <= 239) {
    return `### 4.3 Classification of Polymers & Plastic Waste (Printed Page ${p})
- **Classification by Thermal Properties**:
  - **Thermoplastics**: Linear or branched polymers with weak intermolecular forces that soften on heating and can be repeatedly melted, reshaped, and recycled.
    Examples: Polyethylene (PE), Polypropylene (PP), Polystyrene (PS), Polyvinyl chloride (PVC).
  - **Thermosetting Plastics**: Heavily crosslinked 3D network polymers that undergo permanent chemical setting on heating; they decompose rather than melt and cannot be reshaped.
    Examples: Bakelite, melamine, epoxy resins.
- **Natural Polymers**: Starch, cellulose, proteins (polypeptides of amino acids), natural rubber (cis-polyisoprene).
- **Plastic Waste Management in Ethiopia**:
  Synthetic plastics are non-biodegradable, causing environmental clogging of drainage systems, livestock ingestion hazards, and toxic fumes on burning.
  Management: The 4 R's (Reduce, Reuse, Recycle, Recover) and development of biodegradable bioplastics.`;
  }

  // ==========================================
  // UNIT 5: ENVIRONMENTAL CHEMISTRY (Printed 240 - 288)
  // ==========================================
  if (p === 240) {
    return `# UNIT 5: INTRODUCTION TO ENVIRONMENTAL CHEMISTRY

### Unit Outcomes
At the end of this unit, you will be able to:
- Define environmental chemistry and describe the four spheres of the Earth.
- Describe the key biogeochemical cycles: carbon, nitrogen, oxygen, phosphorus, and water cycles.
- Identify major air pollutants, their sources, and control mechanisms.
- Explain the causes and effects of photochemical smog, acid rain, and ozone depletion.
- Discuss water pollution parameters: dissolved oxygen (DO), biochemical oxygen demand (BOD), and heavy metal toxicity.
- Explain the greenhouse effect, greenhouse gases, and climate change impacts on Ethiopia and the Horn of Africa.
- State and explain the 12 Principles of Green Chemistry and calculate atom economy.`;
  }
  if (p <= 254) {
    return `### 5.1 Components of the Environment & Biogeochemical Cycles (Printed Page ${p})
- **Four Environmental Spheres**:
  1. **Atmosphere**: Gaseous envelope surrounding the Earth. Divided into layers: Troposphere (0–12 km, where weather occurs), Stratosphere (12–50 km, contains protective ozone layer), Mesosphere, and Thermosphere.
  2. **Hydrosphere**: All liquid water, ice, and vapor on Earth (oceans 97%, polar ice caps 2%, freshwater rivers and lakes <1%).
  3. **Lithosphere**: Solid crust and upper mantle of the Earth containing rocks, soils, and mineral reserves.
  4. **Biosphere**: The global ecological system integrating all living organisms and their relationships with the physical spheres.
- **Biogeochemical Cycles**:
  - *Carbon Cycle*: Photosynthesis (CO2 + H2O -> C6H12O6 + O2) balanced by cellular respiration and combustion.
  - *Nitrogen Cycle*: Atmospheric N2 fixed by Rhizobium bacteria in legume nodules, industrial Haber process, and lightning into nitrates (NO3-) for plant protein synthesis; returned by denitrifying bacteria.
  - *Water (Hydrological) Cycle*: Evaporation, transpiration, condensation, precipitation, and groundwater recharge.`;
  }
  if (p <= 268) {
    return `### 5.2 Environmental Pollution: Air, Water & Land (Printed Page ${p})
- **Air Pollution**:
  - *Carbon Monoxide (CO)*: Incomplete combustion of fuels; binds irreversibly with blood hemoglobin to form carboxyhemoglobin, preventing oxygen transport.
  - *Sulfur Dioxide (SO2) and Nitrogen Oxides (NOx)*: Released from burning fossil fuels and metal smelters; react with atmospheric moisture to form **Acid Rain**:
    SO2 + H2O -> H2SO3;  2SO2 + O2 + 2H2O -> 2H2SO4
    Acid rain lowers lake pH, leaches toxic aluminum from soils, damages forests, and corrodes limestone buildings.
  - *Photochemical Smog*: Brown haze formed by reaction of sunlight with NOx and volatile organic compounds (VOCs), producing ozone (O3) and PAN (peroxyacetyl nitrate).
  - *Ozone Depletion*: Chlorofluorocarbons (CFCs) release chlorine radicals (Cl*) in the stratosphere that catalyze ozone breakdown:
    Cl* + O3 -> ClO* + O2;  ClO* + O -> Cl* + O2
- **Water Pollution Parameters**:
  - **DO (Dissolved Oxygen)**: Oxygen gas dissolved in water available for aquatic life (>5 mg/L indicates healthy water).
  - **BOD (Biochemical Oxygen Demand)**: Amount of dissolved oxygen required by aerobic microorganisms to decompose organic waste in water. High BOD indicates severe organic pollution.
  - **Eutrophication**: Excessive nutrient runoff (phosphates and nitrates from fertilizers) causes rapid algae blooms, blocking sunlight and depleting oxygen upon algae decay.`;
  }
  if (p <= 274) {
    return `### 5.3 Global Warming and Climate Change (Printed Page ${p})
- **The Greenhouse Effect**:
  Natural phenomenon where atmospheric gases absorb outgoing infrared (thermal) radiation re-emitted by the Earth's surface, warming the lower troposphere by approximately 33°C.
- **Major Greenhouse Gases**:
  - Carbon dioxide (CO2, ~60% contribution, fossil fuel combustion and deforestation)
  - Methane (CH4, 25 times more potent than CO2, from cattle rumination, rice paddies, and natural gas leaks)
  - Nitrous oxide (N2O, from agricultural soil fertilizers)
  - Fluorinated gases (CFCs, HFCs, SF6)
- **Impacts on Ethiopia and East Africa**:
  1. Recurrent droughts and desertification in arid pastoral regions (Afar, Somali, Borena).
  2. Alteration of seasonal Belg and Kiremt rainfall patterns, impacting agricultural productivity.
  3. Increased incidence of vector-borne tropical diseases (malaria) at higher elevations.`;
  }
  if (p <= 285) {
    return `### 5.4 Green Chemistry and Cleaner Production (Printed Page ${p})
Green chemistry is the design of chemical products and processes that reduce or eliminate the generation of hazardous substances.
**The 12 Principles of Green Chemistry**:
1. **Waste Prevention**: Prevent waste rather than clean it up after it is created.
2. **Atom Economy**: Maximize incorporation of all raw materials into the final product:
   % Atom Economy = (Molar mass of desired product / Total molar mass of all reactants) x 100%
3. **Less Hazardous Chemical Syntheses**: Design synthetic pathways using non-toxic substances.
4. **Designing Safer Chemicals**: Maintain functional efficacy while minimizing toxicity.
5. **Safer Solvents and Auxiliaries**: Minimize or replace volatile toxic solvents with water or supercritical CO2.
6. **Design for Energy Efficiency**: Run reactions at ambient temperature and pressure whenever feasible.
7. **Use of Renewable Feedstocks**: Prefer agricultural biomass feedstocks over petroleum.
8. **Reduce Derivatives**: Avoid unnecessary protection or modification steps.
9. **Catalysis**: Use selective catalytic reagents rather than stoichiometric reagents.
10. **Design for Degradation**: Chemical products should break down safely into harmless substances.
11. **Real-time Analysis for Pollution Prevention**: In-line sensor monitoring to prevent accident releases.
12. **Inherently Safer Chemistry for Accident Prevention**: Minimize fire, explosion, and leak hazards.`;
  }
  if (p <= 288) {
    return `### Unit 5 Summary & Review Exercises (Printed Page ${p})
- 4 spheres: Atmosphere, Hydrosphere, Lithosphere, Biosphere.
- Air pollutants: CO, SO2, NOx, particulates, photochemical smog, CFCs.
- Acid rain formed from SO2 and NOx; damages aquatic ecosystems and crops.
- Stratospheric ozone layer protects against UV radiation.
- High BOD indicates high organic pollution and depleted dissolved oxygen.
- Greenhouse effect caused by CO2, CH4, N2O trapping infrared radiation.
- 12 principles of green chemistry emphasize waste prevention and atom economy.

**Review Exercises**:
1. Define BOD and explain why a high BOD value is harmful to fish and aquatic life.
2. Calculate the atom economy for the production of hydrogen gas in the reaction:
   CH4(g) + H2O(g) -> CO(g) + 3H2(g) (Desired product is H2).
3. Explain the difference between primary and secondary air pollutants with examples.
4. Describe how chlorofluorocarbons (CFCs) cause depletion of the stratospheric ozone layer.`;
  }

  // ==========================================
  // APPENDIX & REFERENCE (Printed 289 - 290)
  // ==========================================
  if (p === 289) {
    return `# APPENDIX: CHEMICAL DATA & CONSTANTS (Printed Page 289)

### Standard Reduction Potentials at 25°C (1.0 M Aqueous Solutions)
- F2(g) + 2e- -> 2F-(aq) : E° = +2.87 V
- PbO2(s) + 4H+ + SO4 2- + 2e- -> PbSO4(s) + 2H2O : E° = +1.69 V
- MnO4-(aq) + 8H+ + 5e- -> Mn2+(aq) + 4H2O : E° = +1.51 V
- Cl2(g) + 2e- -> 2Cl-(aq) : E° = +1.36 V
- Cr2O7 2-(aq) + 14H+ + 6e- -> 2Cr3+(aq) + 7H2O : E° = +1.33 V
- O2(g) + 4H+ + 4e- -> 2H2O : E° = +1.23 V
- Ag+(aq) + e- -> Ag(s) : E° = +0.80 V
- Fe3+(aq) + e- -> Fe2+(aq) : E° = +0.77 V
- I2(s) + 2e- -> 2I-(aq) : E° = +0.54 V
- Cu2+(aq) + 2e- -> Cu(s) : E° = +0.34 V
- 2H+(aq) + 2e- -> H2(g) : E° = 0.00 V (SHE Reference Standard)
- Pb2+(aq) + 2e- -> Pb(s) : E° = -0.13 V
- Ni2+(aq) + 2e- -> Ni(s) : E° = -0.25 V
- Fe2+(aq) + 2e- -> Fe(s) : E° = -0.44 V
- Zn2+(aq) + 2e- -> Zn(s) : E° = -0.76 V
- Al3+(aq) + 3e- -> Al(s) : E° = -1.66 V
- Mg2+(aq) + 2e- -> Mg(s) : E° = -2.37 V
- Na+(aq) + e- -> Na(s) : E° = -2.71 V
- K+(aq) + e- -> K(s) : E° = -2.93 V
- Li+(aq) + e- -> Li(s) : E° = -3.05 V`;
  }

  // p === 290 (PDF page 298)
  return `# APPENDIX: PHYSICAL CONSTANTS & GLOSSARY (Printed Page 290)

### Fundamental Physical Constants:
- Avogadro's Number (N_A) = 6.022 x 10^23 particles/mol
- Gas Constant (R) = 0.08206 L.atm/(mol.K) = 8.314 J/(mol.K)
- Faraday Constant (F) = 96,485 C/mol of electrons ≈ 96,500 C/mol
- Ion-product constant of water (Kw) = 1.00 x 10^-14 at 25°C
- Planck's Constant (h) = 6.626 x 10^-34 J.s
- Speed of Light (c) = 3.00 x 10^8 m/s

### Curriculum Glossary:
- **Amphiprotic**: Capable of acting as either a proton donor or a proton acceptor.
- **Buffer Solution**: Resists change in pH when small amounts of acid or base are added.
- **Common Ion Effect**: Shift in equilibrium caused by adding an ion already involved in the equilibrium.
- **Electrolysis**: Process using electric current to drive a non-spontaneous redox reaction.
- **Faraday**: Charge of one mole of electrons (96,500 Coulombs).
- **Galvanic Cell**: Electrochemical device producing electricity from spontaneous redox reactions.
- **Green Chemistry**: Design of chemical products and processes that minimize hazardous substances.
- **Half-Reaction**: Oxidation or reduction component of a redox equation.
- **Le Chatelier's Principle**: System in equilibrium counteracts any applied stress.
- **Nernst Equation**: Equation relating cell potential to reactant/product concentrations.
- **Polymer**: Large molecule built by covalently linking repeating monomer subunits.
- **Saponification**: Base-catalyzed hydrolysis of triglycerides into soap and glycerol.
- **Voltaic Cell**: Device converting spontaneous chemical energy into electrical work.

Federal Democratic Republic of Ethiopia • Ministry of Education (MoE) • GEQIP-E Standard`;
}
