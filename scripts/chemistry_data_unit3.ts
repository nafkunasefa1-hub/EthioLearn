// Unit 3: Industrial Chemistry in Ethiopia (Pages 143 to 220)
export function getUnit3PageContent(pageNum: number): string {
  const p = pageNum - 8; // printed page (135 to 212)

  if (p === 135) {
    return `# UNIT 3: INDUSTRIAL CHEMISTRY IN ETHIOPIA

### Unit Outcomes
At the end of this unit, you will be able to:
- List the major natural chemical resources available in Ethiopia.
- Classify natural resources as renewable and non-renewable.
- Describe the manufacturing processes for key industrial chemicals: ammonia, nitric acid, sulfuric acid, sodium carbonate, and sodium hydroxide.
- Explain the production and agricultural importance of chemical fertilizers (DAP and urea) and pesticides.
- Describe the chemical manufacturing steps in Ethiopian industries: cement, sugar, tanning, glass, ceramics, paper, and soaps.
- Assess the socio-economic impact and environmental footprint of local chemical industries.`;
  }
  if (p <= 141) {
    return `### 3.1 & 3.2 Natural Resources and Industry in Ethiopia (Printed Page ${p})
- **Scope of Industrial Chemistry**: Transforming raw materials into valuable chemical products through scalable, economically viable chemical reactions.
- **Classification of Natural Resources in Ethiopia**:
  1. **Atmospheric Resources**: Nitrogen (N2, 78%) and Oxygen (O2, 21%) extracted by fractional distillation of liquid air. Used for ammonia synthesis and oxy-fuel welding.
  2. **Hydrospheric Resources**: Water from major river basins (Abay, Awash, Omo) and lakes in the Great Rift Valley (Lake Abijatta, Shala) containing rich brine salts and sodium carbonate.
  3. **Lithospheric Resources**: Mineral reserves including limestone (CaCO3) in Mugher and Dire Dawa, clay/silica, gypsum, potash salts in the Danakil Depression (Afar), tantalum in Kenticha, and gold.
  4. **Biospheric Resources**: Agricultural biomass including sugarcane in Wonji and Metehara, oilseeds, timber/bamboo, animal hides and skins for tanneries.
- **Renewable vs. Non-renewable**: Biomass, water, and air are renewable; mineral ores, crude oil, and potash deposits are non-renewable.`;
  }
  if (p <= 147) {
    return `### 3.3.1 Ammonia Manufacturing (Haber-Bosch Process) (Printed Page ${p})
Ammonia (NH3) is synthesized by direct catalytic combination of nitrogen and hydrogen gases:
N2(g) + 3H2(g) <=> 2NH3(g)   delta H = -92.4 kJ/mol

**Industrial Reaction Conditions**:
1. **Pressure**: 150 - 250 atm (High pressure shifts equilibrium toward fewer gas moles, maximizing ammonia yield).
2. **Temperature**: 400°C - 500°C (Compromise temperature: low temp favors exothermic forward reaction but reduces reaction rate; 450°C gives optimal rate and ~15% yield per pass).
3. **Catalyst**: Finely divided iron (Fe) promoted with potassium oxide (K2O) and aluminum oxide (Al2O3).
4. **Recycling**: Gas mixture is cooled to condense liquid NH3; unreacted N2 and H2 are recycled continuously to achieve >95% overall conversion.
- **Uses**: Nitrogen fertilizers (ammonium nitrate, urea), nitric acid synthesis, explosives, refrigerants.`;
  }
  if (p <= 153) {
    return `### 3.3.2 Nitric Acid Manufacturing (Ostwald Process) (Printed Page ${p})
Nitric acid (HNO3) is manufactured industrially from ammonia in three stages:
1. **Catalytic Oxidation of Ammonia**:
   4NH3(g) + 5O2(g) -> 4NO(g) + 6H2O(g)   (Pt-Rh gauze catalyst at 900°C, highly exothermic).
2. **Oxidation of Nitric Oxide to Nitrogen Dioxide**:
   2NO(g) + O2(g) -> 2NO2(g)   (Occurs on cooling below 100°C).
3. **Absorption of NO2 in Water**:
   3NO2(g) + H2O(l) -> 2HNO3(aq) + NO(g)
   The released NO is recycled back to Stage 2.
- Produces ~68% concentrated HNO3 (commercial grade).
- **Uses**: Ammonium nitrate fertilizer (NH4NO3), nitro compounds, etching, explosives (TNT, nitroglycerin).`;
  }
  if (p <= 159) {
    return `### 3.3.3 Sulfuric Acid Manufacturing (Contact Process) (Printed Page ${p})
Sulfuric acid (H2SO4), known as the 'king of chemicals', is manufactured in three stages:
1. **Production of Sulfur Dioxide**:
   S(s) + O2(g) -> SO2(g)   or roasting sulfide ores (4FeS2 + 11O2 -> 2Fe2O3 + 8SO2).
2. **Catalytic Oxidation of SO2 to SO3**:
   2SO2(g) + O2(g) <=> 2SO3(g)   delta H = -197 kJ/mol
   Conditions: Vanadium(V) oxide (V2O5) catalyst, 450°C, 1-2 atm pressure.
3. **Formation of Oleum and Hydration**:
   SO3 is absorbed in 98% concentrated H2SO4 to form **Oleum** (pyrosulfuric acid):
   SO3(g) + H2SO4(l) -> H2S2O7(l)
   Oleum is then diluted carefully with calculated water to produce 98% H2SO4:
   H2S2O7(l) + H2O(l) -> 2H2SO4(l)
   *(Note: SO3 is never dissolved directly into water because the reaction is violent and produces an unmanageable acid mist).*`;
  }
  if (p <= 165) {
    return `### 3.3.4 Sodium Carbonate (Solvay Process) & Chlor-Alkali (Printed Page ${p})
- **Solvay Process for Soda Ash (Na2CO3)**:
  - Raw Materials: Brine (NaCl), limestone (CaCO3), and ammonia (NH3).
  - Overall Reaction:
    CaCO3(s) + 2NaCl(aq) -> Na2CO3(s) + CaCl2(aq)
  - Key intermediate: Sodium hydrogen carbonate (NaHCO3) precipitates and is calcined:
    2NaHCO3(s) -> Na2CO3(s) + H2O(g) + CO2(g)
  - In Ethiopia, natural trona and soda ash are also harvested from Lake Abijatta brine deposits.
- **Chlor-Alkali Industry**:
  Electrolysis of concentrated brine produces three co-products simultaneously:
  2NaCl(aq) + 2H2O(l) -> 2NaOH(aq) + Cl2(g) + H2(g)
  - Membrane cell prevents mixing of chlorine gas with hydroxide ions.`;
  }
  if (p <= 173) {
    return `### Chemical Fertilizers & Pesticides (Printed Page ${p})
1. **Chemical Fertilizers in Ethiopian Agriculture**:
   - **DAP (Diammonium Phosphate)**:
     2NH3 + H3PO4 -> (NH4)2HPO4
     Supplies both nitrogen (18%) and phosphorus (46% P2O5).
   - **Urea**:
     2NH3 + CO2 -> NH2CONH2 + H2O (at 190°C, 150 atm).
     Contains the highest nitrogen content (46% N) among solid nitrogenous fertilizers.
2. **Pesticides**:
   - Insecticides (organophosphates, carbamates) control insect crop pests.
   - Herbicides (glyphosate, 2,4-D) eliminate competing weeds.
   - Fungicides protect crops from fungal rusts and blights.
   - Environmental caution: Overuse leads to bioaccumulation and water runoff pollution.`;
  }
  if (p <= 185) {
    return `### 3.4.1 Cement Manufacturing in Ethiopia (Printed Page ${p})
Major cement plants in Ethiopia include Mugher, Dangote, Derba, Messebo, and National Cement.
1. **Raw Materials**:
   - Calcareous (limestone, CaCO3, ~75%)
   - Argillaceous (clay/shale providing SiO2, Al2O3, Fe2O3, ~25%)
2. **Rotary Kiln Stages (up to 1450°C)**:
   - Dehydration (100–500°C): Removal of bound water from clay.
   - Calcination (900°C): CaCO3 -> CaO + CO2(g).
   - Clinkerization (1200–1450°C): Formation of calcium silicates:
     2CaO + SiO2 -> 2CaO.SiO2 (Dicalcium silicate)
     3CaO + SiO2 -> 3CaO.SiO2 (Tricalcium silicate)
3. **Gypsum Addition**:
   Clinker is finely pulverized with 2–3% gypsum (CaSO4.2H2O) to retard setting time and prevent flash setting.`;
  }
  if (p <= 195) {
    return `### 3.4.2 Sugar & Tannery Industries in Ethiopia (Printed Page ${p})
1. **Sugar Industry (Wonji, Metehara, Finchaa, Kessem, Omo Kuraz)**:
   - Milling: Sugarcane crushed to extract raw juice.
   - Clarification: Juice heated and treated with milk of lime, Ca(OH)2, to neutralize acids and precipitate impurities.
   - Evaporation & Crystallization: Vacuum boiling forms sugar crystals and molasses byproduct.
   - Byproducts: Bagasse (fuel for boilers, paper pulp), Molasses (fermented into industrial ethanol).
2. **Tannery Industry (Modjo, Batu, Addis Ababa)**:
   - Pre-tanning: Soaking, unhairing with Na2S and Ca(OH)2, deliming with ammonium salts.
   - Chrome Tanning: Collagen fibers crosslinked with basic chromium sulfate [Cr(OH)SO4] to prevent decay.
   - Effluent treatment: Crucial to remove toxic chromium(VI) and sulfides before environmental discharge.`;
  }
  if (p <= 208) {
    return `### Glass, Ceramics, Paper & Soap Manufacturing (Printed Page ${p})
1. **Glass Industry**:
   Raw materials: Silica sand (SiO2, 70%), soda ash (Na2CO3, 15%), limestone (CaCO3, 10%), and cullet (recycled broken glass). Fused at 1500°C.
2. **Ceramics**:
   Kaolin clay (Al2Si2O5(OH)4) shaped, dried, and fired in kilns to form porous bisques and glazed tiles.
3. **Pulp and Paper**:
   Wood chips or bamboo delignified using sodium hydroxide and sodium sulfide (Kraft process), then bleached and rolled into paper sheets.
4. **Soaps and Detergents**:
   - Saponification: Hydrolysis of fats/oils with sodium hydroxide:
     Fat/Oil + 3NaOH -> 3 Soap (RCOONa) + Glycerol
   - Detergents: Synthetic alkyl benzene sulfonates that do not form insoluble scum with hard water.`;
  }
  if (p <= 211) {
    return `### Unit 3 Summary: Industrial Processes in Ethiopia (Printed Page ${p})
- Haber Process: N2 + 3H2 <=> 2NH3 (Fe catalyst, 450°C, 200 atm).
- Ostwald Process: 4NH3 + 5O2 -> 4NO -> 2NO2 -> HNO3 (Pt-Rh catalyst).
- Contact Process: S -> SO2 -> SO3 -> Oleum (H2S2O7) -> H2SO4 (V2O5 catalyst).
- Solvay Process: Produces Na2CO3 using brine, CaCO3, and ammonia.
- Cement: Rotary kiln clinkerization (1450°C) with gypsum added as setting retarder.
- Sugar: Cane crushing, liming, vacuum boiling, molasses fermentation to bioethanol.
- Saponification: Triglyceride + NaOH -> Soap + Glycerol.
- Ethiopian industry benefits from rich local mineral, brine, and agricultural resources.`;
  }
  // p === 212
  return `### Unit 3 Review Exercises (Printed Page 212)
1. Write balanced chemical equations for the 3 stages in the Contact process for sulfuric acid manufacturing.
2. Why is sulfur trioxide absorbed in concentrated sulfuric acid rather than in water?
3. Calculate the percentage of nitrogen by mass in:
   a. Ammonium nitrate, NH4NO3
   b. Urea, (NH2)2CO (H = 1, C = 12, N = 14, O = 16).
4. Explain the function of gypsum (CaSO4.2H2O) added to cement clinker during grinding.
5. Discuss two environmental challenges associated with tannery operations in Ethiopia and state methods used to treat tannery effluents.`;
}
