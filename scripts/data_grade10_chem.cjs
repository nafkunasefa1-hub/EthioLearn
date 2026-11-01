/**
 * Grade 10 Chemistry Final Exam for Boarding and Non-Boarding (Special) Schools, January 2016/2024
 * 60 Questions extracted directly from the official examination paper with comprehensive chemical explanations and mechanisms.
 */

const questions = [
  {
    question_number: 1,
    question_text: "Which one of the following is NOT a reason why carbon forms a uniquely vast number of organic compounds?",
    option_a: "Tetravalency of carbon",
    option_b: "Catenation ability of carbon",
    option_c: "High electronegativity of carbon",
    option_d: "Tendency to form multiple bonds (single, double, triple)",
    options: [
      "Tetravalency of carbon",
      "Catenation ability of carbon",
      "High electronegativity of carbon",
      "Tendency to form multiple bonds (single, double, triple)"
    ],
    correct_answer: "C",
    explanation: "Carbon forms millions of organic compounds due to its tetravalency (forming four covalent bonds), strong catenation (self-linking ability into chains and rings), and ability to form multiple bonds (C=C, C≡C). Carbon has a moderate electronegativity (2.5), not a high electronegativity.",
    topic_name: "Uniqueness of Carbon & Catenation",
    instruction_category: "Organic Chemistry"
  },
  {
    question_number: 2,
    question_text: "In which of the following hydrocarbons are all the carbon atoms sp-hybridized?",
    option_a: "Ethene",
    option_b: "Ethyne",
    option_c: "Propene",
    option_d: "Ethane",
    options: ["Ethene", "Ethyne", "Propene", "Ethane"],
    correct_answer: "B",
    explanation: "Ethyne (acetylene, H-C≡C-H) has a carbon-carbon triple bond where each carbon forms two sigma bonds (one with H and one with C) and two pi bonds, requiring sp hybridization for both carbon atoms.",
    topic_name: "Hybridization of Carbon Compounds",
    instruction_category: "Organic Chemistry"
  },
  {
    question_number: 3,
    question_text: "Which of the following statements correctly describes the physical properties of alkanes?",
    option_a: "Boiling points increase as molecular mass and chain length increase.",
    option_b: "Alkanes are highly soluble in polar solvents like water.",
    option_c: "Branched-chain alkanes have higher boiling points than straight-chain isomers.",
    option_d: "Density of alkanes is greater than that of liquid water.",
    options: [
      "Boiling points increase as molecular mass and chain length increase.",
      "Alkanes are highly soluble in polar solvents like water.",
      "Branched-chain alkanes have higher boiling points than straight-chain isomers.",
      "Density of alkanes is greater than that of liquid water."
    ],
    correct_answer: "A",
    explanation: "As the carbon chain length and molecular mass of alkanes increase, the surface area increases, resulting in stronger London dispersion forces and progressively higher boiling points.",
    topic_name: "Physical Properties of Alkanes",
    instruction_category: "Hydrocarbons - Alkanes"
  },
  {
    question_number: 4,
    question_text: "Which pair of organic compounds belongs to the same homologous series?",
    option_a: "CH4 and C2H4",
    option_b: "C2H4 and C2H2",
    option_c: "C3H8 and C4H10",
    option_d: "C2H6 and C2H4",
    options: [
      "CH4 and C2H4",
      "C2H4 and C2H2",
      "C3H8 and C4H10",
      "C2H6 and C2H4"
    ],
    correct_answer: "C",
    explanation: "Propane (C3H8) and butane (C4H10) both follow the general alkane formula CnH2n+2 and differ by a single methylene (-CH2-) unit, belonging to the same alkane homologous series.",
    topic_name: "Homologous Series",
    instruction_category: "Organic Chemistry Basics"
  },
  {
    question_number: 5,
    question_text: "What is the correct IUPAC name of the compound CH3-CH(CH3)-CH(CH3)-CH(CH3)-CH3?",
    option_a: "2,3,4-trimethylpentane",
    option_b: "2,3,4-trimethylhexane",
    option_c: "2,4-dimethylpentane",
    option_d: "1,2,3-trimethylbutane",
    options: [
      "2,3,4-trimethylpentane",
      "2,3,4-trimethylhexane",
      "2,4-dimethylpentane",
      "1,2,3-trimethylbutane"
    ],
    correct_answer: "A",
    explanation: "The longest continuous carbon chain has 5 carbon atoms (pentane). Three methyl substituents are located at carbons 2, 3, and 4, giving the IUPAC name 2,3,4-trimethylpentane.",
    topic_name: "IUPAC Nomenclature of Alkanes",
    instruction_category: "Hydrocarbons - Alkanes"
  },
  {
    question_number: 6,
    question_text: "Which one of the following carbon-containing compounds is classified as an INORGANIC compound?",
    option_a: "Methane (CH4)",
    option_b: "Calcium carbonate (CaCO3)",
    option_c: "Ethanol (C2H5OH)",
    option_d: "Acetic acid (CH3COOH)",
    options: [
      "Methane (CH4)",
      "Calcium carbonate (CaCO3)",
      "Ethanol (C2H5OH)",
      "Acetic acid (CH3COOH)"
    ],
    correct_answer: "B",
    explanation: "Carbonates (CaCO3), carbon oxides (CO, CO2), cyanides (NaCN), and carbides are traditionally classified as inorganic carbon compounds.",
    topic_name: "Organic vs Inorganic Compounds",
    instruction_category: "Introduction to Organic Chemistry"
  },
  {
    question_number: 7,
    question_text: "The reaction of alkyl halides with sodium metal in dry ether to produce symmetrical higher alkanes is known as:",
    option_a: "Friedel-Crafts reaction",
    option_b: "Kolbe electrolysis",
    option_c: "Wurtz reaction",
    option_d: "Cannizzaro reaction",
    options: [
      "Friedel-Crafts reaction",
      "Kolbe electrolysis",
      "Wurtz reaction",
      "Cannizzaro reaction"
    ],
    correct_answer: "C",
    explanation: "The Wurtz reaction involves coupling two alkyl halide molecules using metallic sodium in dry ether: 2 R-X + 2 Na -> R-R + 2 NaX.",
    topic_name: "Preparation of Alkanes (Wurtz Reaction)",
    instruction_category: "Hydrocarbons - Alkanes"
  },
  {
    question_number: 8,
    question_text: "In saturated hydrocarbons (alkanes), the geometry around each carbon atom is:",
    option_a: "Linear",
    option_b: "Trigonal planar",
    option_c: "Trigonal bipyramidal",
    option_d: "Tetrahedral",
    options: ["Linear", "Trigonal planar", "Trigonal bipyramidal", "Tetrahedral"],
    correct_answer: "D",
    explanation: "Each carbon atom in an alkane is sp3-hybridized and forms 4 single sigma bonds directed toward the corners of a regular tetrahedron with bond angles of approximately 109.5°.",
    topic_name: "Molecular Geometry of Saturated Hydrocarbons",
    instruction_category: "Hydrocarbons - Alkanes"
  },
  {
    question_number: 9,
    question_text: "What are the stoichiometric coefficients for ethane and oxygen in the balanced complete combustion equation: a C2H6 + b O2 -> c CO2 + d H2O?",
    option_a: "a = 1, b = 3",
    option_b: "a = 2, b = 7",
    option_c: "a = 2, b = 5",
    option_d: "a = 1, b = 7/2",
    options: ["a = 1, b = 3", "a = 2, b = 7", "a = 2, b = 5", "a = 1, b = 7/2"],
    correct_answer: "B",
    explanation: "Balancing the complete combustion reaction with whole numbers: 2 C2H6 + 7 O2 -> 4 CO2 + 6 H2O. Thus a = 2, b = 7, c = 4, d = 6.",
    topic_name: "Combustion Reactions of Hydrocarbons",
    instruction_category: "Chemical Reactions"
  },
  {
    question_number: 10,
    question_text: "A hydrocarbon is described as 'saturated' because:",
    option_a: "It contains double bonds between carbon atoms.",
    option_b: "It is completely dissolved in water.",
    option_c: "It contains only single carbon-carbon bonds holding maximum hydrogen atoms.",
    option_d: "It has a cyclic benzene ring structure.",
    options: [
      "It contains double bonds between carbon atoms.",
      "It is completely dissolved in water.",
      "It contains only single carbon-carbon bonds holding maximum hydrogen atoms.",
      "It has a cyclic benzene ring structure."
    ],
    correct_answer: "C",
    explanation: "Saturated hydrocarbons contain only single covalent C-C and C-H bonds, meaning the carbon skeleton is saturated with the maximum possible number of bonded hydrogen atoms.",
    topic_name: "Definition of Saturated Hydrocarbons",
    instruction_category: "Hydrocarbons"
  },
  {
    question_number: 11,
    question_text: "Which type of structural isomerism is displayed by unbranched and branched alkanes having 4 or more carbon atoms (e.g., butane and isobutane)?",
    option_a: "Functional group isomerism",
    option_b: "Chain (skeletal) isomerism",
    option_c: "Geometric (cis-trans) isomerism",
    option_d: "Positional isomerism",
    options: [
      "Functional group isomerism",
      "Chain (skeletal) isomerism",
      "Geometric (cis-trans) isomerism",
      "Positional isomerism"
    ],
    correct_answer: "B",
    explanation: "Chain (skeletal) isomerism occurs when compounds have identical molecular formulas but differ in the carbon skeleton arrangement (straight vs. branched chains).",
    topic_name: "Structural Isomerism in Alkanes",
    instruction_category: "Organic Chemistry"
  },
  {
    question_number: 12,
    question_text: "The chlorination of methane in the presence of ultraviolet (UV) light proceeds via which mechanism?",
    option_a: "Free radical substitution",
    option_b: "Electrophilic addition",
    option_c: "Nucleophilic substitution",
    option_d: "Electrophilic aromatic substitution",
    options: [
      "Free radical substitution",
      "Electrophilic addition",
      "Nucleophilic substitution",
      "Electrophilic aromatic substitution"
    ],
    correct_answer: "A",
    explanation: "Under UV light, homolytic fission of Cl-Cl creates chlorine free radicals, initiating a three-step free radical substitution mechanism: initiation, propagation, and termination.",
    topic_name: "Free Radical Substitution Mechanism",
    instruction_category: "Hydrocarbons - Alkanes"
  },
  {
    question_number: 13,
    question_text: "According to Markovnikov’s rule, when an unsymmetrical hydrogen halide (HX) adds across the double bond of an unsymmetrical alkene, the hydrogen atom attaches to:",
    option_a: "The double-bonded carbon bearing the greater number of hydrogen atoms.",
    option_b: "The double-bonded carbon bearing fewer hydrogen atoms.",
    option_c: "Either carbon atom with equal probability.",
    option_d: "The terminal methyl carbon.",
    options: [
      "The double-bonded carbon bearing the greater number of hydrogen atoms.",
      "The double-bonded carbon bearing fewer hydrogen atoms.",
      "Either carbon atom with equal probability.",
      "The terminal methyl carbon."
    ],
    correct_answer: "A",
    explanation: "Markovnikov's rule states that in the electrophilic addition of an unsymmetrical reagent (HX) to an unsymmetrical alkene, the hydrogen ion (electrophile) adds to the carbon with more attached hydrogen atoms to yield the more stable carbocation intermediate.",
    topic_name: "Markovnikov's Addition Rule",
    instruction_category: "Hydrocarbons - Alkenes"
  },
  {
    question_number: 14,
    question_text: "The reaction of an alkene with cold, alkaline potassium permanganate solution (Baeyer’s reagent) produces:",
    option_a: "Carboxylic acid and CO2",
    option_b: "Alkyl halide",
    option_c: "Alkane",
    option_d: "1,2-diol (glycol)",
    options: [
      "Carboxylic acid and CO2",
      "Alkyl halide",
      "Alkane",
      "1,2-diol (glycol)"
    ],
    correct_answer: "D",
    explanation: "Baeyer's reagent (cold, dilute, alkaline KMnO4) oxidizes alkenes by syn-dihydroxylation to form vicinal diols (1,2-diols or glycols), with the purple permanganate decolourising to form a brown MnO2 precipitate.",
    topic_name: "Baeyer's Test for Unsaturation",
    instruction_category: "Hydrocarbons - Alkenes"
  },
  {
    question_number: 15,
    question_text: "When bromine water (Br2 in CCl4) is shaken with an alkene (such as ethene), what visual change is observed?",
    option_a: "The reddish-brown color of bromine is decolourized immediately.",
    option_b: "A dense white precipitate forms.",
    option_c: "The solution turns intensely purple.",
    option_d: "Bubbles of hydrogen gas are evolved.",
    options: [
      "The reddish-brown color of bromine is decolourized immediately.",
      "A dense white precipitate forms.",
      "The solution turns intensely purple.",
      "Bubbles of hydrogen gas are evolved."
    ],
    correct_answer: "A",
    explanation: "Bromine adds rapidly across the carbon-carbon double bond forming a colourless 1,2-dibromoalkane, causing the characteristic reddish-brown bromine solution to discharge (decolourise), which serves as a diagnostic test for unsaturation.",
    topic_name: "Bromine Addition Test for Unsaturation",
    instruction_category: "Hydrocarbons - Alkenes"
  },
  {
    question_number: 16,
    question_text: "The characteristic chemical reactions of alkenes are primarily:",
    option_a: "Electrophilic addition reactions",
    option_b: "Free radical substitution reactions",
    option_c: "Nucleophilic addition reactions",
    option_d: "Electrophilic aromatic substitution",
    options: [
      "Electrophilic addition reactions",
      "Free radical substitution reactions",
      "Nucleophilic addition reactions",
      "Electrophilic aromatic substitution"
    ],
    correct_answer: "A",
    explanation: "The loosely held pi (π) electrons in the carbon-carbon double bond act as an electron-rich nucleophilic center, readily attracting electrophiles to undergo electrophilic addition.",
    topic_name: "Reaction Mechanisms of Alkenes",
    instruction_category: "Hydrocarbons - Alkenes"
  },
  {
    question_number: 17,
    question_text: "What is the IUPAC name for the alkene CH3-CH=CH-CH(CH3)-CH3?",
    option_a: "2-methyl-3-pentene",
    option_b: "4-methyl-2-pentene",
    option_c: "4-methyl-3-pentene",
    option_d: "2-methyl-2-pentene",
    options: [
      "2-methyl-3-pentene",
      "4-methyl-2-pentene",
      "4-methyl-3-pentene",
      "2-methyl-2-pentene"
    ],
    correct_answer: "B",
    explanation: "Numbering starts from the end that gives the double bond the lowest locant (carbon 2): C1(H3)-C2(H)=C3(H)-C4(H)(CH3)-C5(H3). The methyl group is at carbon 4, giving 4-methyl-2-pentene.",
    topic_name: "IUPAC Nomenclature of Alkenes",
    instruction_category: "Hydrocarbons - Alkenes"
  },
  {
    question_number: 18,
    question_text: "The general molecular formula for aliphatic acyclic alkynes is:",
    option_a: "CnH2n+2",
    option_b: "CnH2n-2",
    option_c: "CnH2n",
    option_d: "CnH2n-4",
    options: ["CnH2n+2", "CnH2n-2", "CnH2n", "CnH2n-4"],
    correct_answer: "B",
    explanation: "Alkynes contain one carbon-carbon triple bond (-C≡C-), which introduces two degrees of unsaturation relative to alkanes, giving the general homologous formula CnH2n-2.",
    topic_name: "General Formula of Alkynes",
    instruction_category: "Hydrocarbons - Alkynes"
  },
  {
    question_number: 19,
    question_text: "Which of the following alkynes will form a precipitate with ammoniacal silver nitrate (Tollens’ reagent)?",
    option_a: "2-Butyne (CH3-C≡C-CH3)",
    option_b: "1-Butyne (CH3-CH2-C≡C-H)",
    option_c: "2-Pentyne (CH3-CH2-C≡C-CH3)",
    option_d: "3-Hexyne (CH3-CH2-C≡C-CH2-CH3)",
    options: [
      "2-Butyne (CH3-C≡C-CH3)",
      "1-Butyne (CH3-CH2-C≡C-H)",
      "2-Pentyne (CH3-CH2-C≡C-CH3)",
      "3-Hexyne (CH3-CH2-C≡C-CH2-CH3)"
    ],
    correct_answer: "B",
    explanation: "Terminal alkynes (like 1-butyne) contain a weakly acidic sp-hybridized C-H hydrogen atom that reacts with ammoniacal silver nitrate to form a heavy, insoluble white precipitate of silver alkynide (CH3-CH2-C≡C-Ag). Non-terminal alkynes lack acidic terminal hydrogens and do not react.",
    topic_name: "Acidity of Terminal Alkynes & Chemical Tests",
    instruction_category: "Hydrocarbons - Alkynes"
  },
  {
    question_number: 20,
    question_text: "Hydrogenation of an alkyne using hydrogen gas in the presence of Lindlar’s catalyst (palladium poisoned with CaCO3 and quinoline) yields:",
    option_a: "cis-alkene",
    option_b: "trans-alkene",
    option_c: "alkane",
    option_d: "alcohol",
    options: ["cis-alkene", "trans-alkene", "alkane", "alcohol"],
    correct_answer: "A",
    explanation: "Lindlar's catalyst partially deactivates palladium, allowing syn-addition of H2 across the triple bond to stereoselectively yield a cis-alkene (Z-alkene).",
    topic_name: "Stereoselective Hydrogenation of Alkynes",
    instruction_category: "Hydrocarbons - Alkynes"
  },
  {
    question_number: 21,
    question_text: "Hydration of ethyne (acetylene) by passing it into warm dilute H2SO4 in the presence of HgSO4 catalyst yields which final carbonyl product?",
    option_a: "Ethanol",
    option_b: "Ethanoic acid",
    option_c: "Ethanal (acetaldehyde)",
    option_d: "Propanone",
    options: ["Ethanol", "Ethanoic acid", "Ethanal (acetaldehyde)", "Propanone"],
    correct_answer: "C",
    explanation: "Hydration of ethyne initially forms unstable ethenol (vinyl alcohol, CH2=CH-OH), which rapidly tautomerizes (keto-enol tautomerism) into stable ethanal (acetaldehyde, CH3-CHO).",
    topic_name: "Hydration of Alkynes & Tautomerism",
    instruction_category: "Hydrocarbons - Alkynes"
  },
  {
    question_number: 22,
    question_text: "The functional group characteristic of aliphatic alcohols is the:",
    option_a: "Hydroxyl group (-OH)",
    option_b: "Carbonyl group (>C=O)",
    option_c: "Carboxyl group (-COOH)",
    option_d: "Amino group (-NH2)",
    options: [
      "Hydroxyl group (-OH)",
      "Carbonyl group (>C=O)",
      "Carboxyl group (-COOH)",
      "Amino group (-NH2)"
    ],
    correct_answer: "A",
    explanation: "Alcohols are organic derivatives of water in which one hydrogen atom is replaced by an alkyl group, characterized by the polar hydroxyl (-OH) functional group bonded to an sp3 carbon.",
    topic_name: "Functional Group of Alcohols",
    instruction_category: "Alcohols"
  },
  {
    question_number: 23,
    question_text: "Which of the following compounds is an example of a tertiary (3°) alcohol?",
    option_a: "1-Butanol",
    option_b: "2-Butanol",
    option_c: "2-Methyl-1-propanol",
    option_d: "2-Methyl-2-propanol",
    options: [
      "1-Butanol",
      "2-Butanol",
      "2-Methyl-1-propanol",
      "2-Methyl-2-propanol"
    ],
    correct_answer: "D",
    explanation: "In 2-methyl-2-propanol ((CH3)3C-OH), the carbon bearing the -OH group is directly attached to three other carbon atoms (methyl groups), classifying it as a tertiary (3°) alcohol.",
    topic_name: "Classification of Alcohols (1°, 2°, 3°)",
    instruction_category: "Alcohols"
  },
  {
    question_number: 24,
    question_text: "Dehydration of ethanol with excess concentrated sulfuric acid (H2SO4) at 170 °C produces:",
    option_a: "Diethyl ether",
    option_b: "Ethene",
    option_c: "Ethanal",
    option_d: "Ethane",
    options: ["Diethyl ether", "Ethene", "Ethanal", "Ethane"],
    correct_answer: "B",
    explanation: "At 170 °C with excess conc. H2SO4, ethanol undergoes intramolecular elimination (dehydration) of water to produce ethene gas (CH2=CH2). (At 140 °C with excess ethanol, intermolecular dehydration produces diethyl ether).",
    topic_name: "Dehydration of Alcohols",
    instruction_category: "Alcohols"
  },
  {
    question_number: 25,
    question_text: "Oxidation of a secondary (2°) alcohol with acidified potassium dichromate (K2Cr2O7/H+) yields a:",
    option_a: "Carboxylic acid",
    option_b: "Ketone",
    option_c: "Aldehyde",
    option_d: "Ester",
    options: ["Carboxylic acid", "Ketone", "Aldehyde", "Ester"],
    correct_answer: "B",
    explanation: "A secondary alcohol has two alkyl groups attached to the carbinol carbon (R2CH-OH). Oxidation removes the carbinol hydrogen and hydroxyl hydrogen to form a ketone (R2C=O).",
    topic_name: "Oxidation of Alcohols",
    instruction_category: "Alcohols"
  },
  {
    question_number: 26,
    question_text: "The Lucas reagent, used to differentiate between primary, secondary, and tertiary alcohols, consists of a mixture of:",
    option_a: "Anhydrous ZnCl2 and concentrated HCl",
    option_b: "Ammoniacal AgNO3",
    option_c: "CuSO4 and sodium potassium tartrate",
    option_d: "KMnO4 and dilute H2SO4",
    options: [
      "Anhydrous ZnCl2 and concentrated HCl",
      "Ammoniacal AgNO3",
      "CuSO4 and sodium potassium tartrate",
      "KMnO4 and dilute H2SO4"
    ],
    correct_answer: "A",
    explanation: "Lucas reagent is an equimolar mixture of anhydrous zinc chloride (Lewis acid catalyst) and concentrated hydrochloric acid. Tertiary alcohols form insoluble alkyl chloride turbidity immediately; secondary alcohols form turbidity in 5 minutes; primary alcohols do not react at room temperature.",
    topic_name: "Lucas Test for Alcohol Classification",
    instruction_category: "Alcohols"
  },
  {
    question_number: 27,
    question_text: "Phenol (C6H5OH) is more acidic than aliphatic alcohols (such as ethanol) because:",
    option_a: "The phenoxide ion is stabilized by resonance delocalization of negative charge into the benzene ring.",
    option_b: "Phenol has a higher molecular weight than ethanol.",
    option_c: "The hydroxyl group in phenol is non-polar.",
    option_d: "Phenol contains an aliphatic carbon chain.",
    options: [
      "The phenoxide ion is stabilized by resonance delocalization of negative charge into the benzene ring.",
      "Phenol has a higher molecular weight than ethanol.",
      "The hydroxyl group in phenol is non-polar.",
      "Phenol contains an aliphatic carbon chain."
    ],
    correct_answer: "A",
    explanation: "When phenol loses a proton (H+), the resulting phenoxide ion (C6H5O-) is stabilized by resonance delocalization of the negative charge over the ortho and para positions of the aromatic benzene ring, driving equilibrium toward ionization.",
    topic_name: "Acidity of Phenols vs Alcohols",
    instruction_category: "Aromatic Compounds & Alcohols"
  },
  {
    question_number: 28,
    question_text: "Industrial production of ethanol from molasses or starchy grains via fermentation involves which biological enzyme complex produced by yeast?",
    option_a: "Amylase",
    option_b: "Zymase",
    option_c: "Lipase",
    option_d: "Pepsin",
    options: ["Amylase", "Zymase", "Lipase", "Pepsin"],
    correct_answer: "B",
    explanation: "Yeast secretes invertase and zymase enzymes. Zymase catalyzes the anaerobic conversion of simple hexose sugars (glucose and fructose) into ethanol and carbon dioxide: C6H12O6 -> 2 C2H5OH + 2 CO2.",
    topic_name: "Fermentation & Alcohol Production",
    instruction_category: "Applied Chemistry"
  },
  {
    question_number: 29,
    question_text: "The carbonyl functional group (>C=O) is present in which of the following pairs of homologous families?",
    option_a: "Alcohols and ethers",
    option_b: "Alkanes and alkenes",
    option_c: "Aldehydes and ketones",
    option_d: "Alkyl halides and amines",
    options: [
      "Alcohols and ethers",
      "Alkanes and alkenes",
      "Aldehydes and ketones",
      "Alkyl halides and amines"
    ],
    correct_answer: "C",
    explanation: "Both aldehydes (R-CHO) and ketones (R-CO-R') share the carbonyl functional group (>C=O), differing only in whether the carbonyl carbon is attached to at least one hydrogen or two carbon groups.",
    topic_name: "Carbonyl Compounds",
    instruction_category: "Aldehydes & Ketones"
  },
  {
    question_number: 30,
    question_text: "What type of isomerism exists between propanal (CH3-CH2-CHO) and propanone (CH3-CO-CH3)?",
    option_a: "Chain isomerism",
    option_b: "Functional group isomerism",
    option_c: "Position isomerism",
    option_d: "Geometric isomerism",
    options: [
      "Chain isomerism",
      "Functional group isomerism",
      "Position isomerism",
      "Geometric isomerism"
    ],
    correct_answer: "B",
    explanation: "Both propanal and propanone share the same molecular formula C3H6O but belong to different homologous families with distinct functional groups (aldehyde vs. ketone), exhibiting functional group isomerism.",
    topic_name: "Functional Group Isomerism",
    instruction_category: "Organic Chemistry"
  },
  {
    question_number: 31,
    question_text: "Mild oxidation of aldehydes using acidified potassium permanganate or Tollens’ reagent produces:",
    option_a: "Carboxylic acids",
    option_b: "Primary alcohols",
    option_c: "Ketones",
    option_d: "Esters",
    options: ["Carboxylic acids", "Primary alcohols", "Ketones", "Esters"],
    correct_answer: "A",
    explanation: "Aldehydes contain a readily oxidizable hydrogen atom attached to the carbonyl group; oxidation converts the formyl group (-CHO) into a carboxyl group (-COOH).",
    topic_name: "Oxidation of Aldehydes",
    instruction_category: "Aldehydes & Ketones"
  },
  {
    question_number: 32,
    question_text: "Which of the following organic compounds will give a positive result (forming a brick-red precipitate of Cu2O) with Fehling’s solution?",
    option_a: "Propanal",
    option_b: "Propanone",
    option_c: "Ethanol",
    option_d: "Ethyl acetate",
    options: ["Propanal", "Propanone", "Ethanol", "Ethyl acetate"],
    correct_answer: "A",
    explanation: "Aliphatic aldehydes (such as propanal) are reducing agents that reduce blue Cu2+ ions in alkaline tartrate (Fehling's solution) to an insoluble brick-red precipitate of copper(I) oxide (Cu2O). Ketones do not reduce Fehling's solution.",
    topic_name: "Fehling's Test for Aldehydes",
    instruction_category: "Aldehydes & Ketones"
  },
  {
    question_number: 33,
    question_text: "The functional group of carboxylic acids is called the:",
    option_a: "Hydroxyl group",
    option_b: "Carbonyl group",
    option_c: "Carboxyl group (-COOH)",
    option_d: "Alkoxy group",
    options: [
      "Hydroxyl group",
      "Carbonyl group",
      "Carboxyl group (-COOH)",
      "Alkoxy group"
    ],
    correct_answer: "C",
    explanation: "Carboxylic acids are defined by the carboxyl group (-COOH), which is a hybrid combination of a carbonyl group (>C=O) and a hydroxyl group (-OH) attached to the same carbon atom.",
    topic_name: "Carboxylic Acid Functional Group",
    instruction_category: "Carboxylic Acids"
  },
  {
    question_number: 34,
    question_text: "The process of saponification refers to the alkaline hydrolysis of:",
    option_a: "Alkanes with halogens",
    option_b: "Alkenes with steam",
    option_c: "Fats and oils (triglyceride esters) with strong bases like NaOH",
    option_d: "Proteins with hydrochloric acid",
    options: [
      "Alkanes with halogens",
      "Alkenes with steam",
      "Fats and oils (triglyceride esters) with strong bases like NaOH",
      "Proteins with hydrochloric acid"
    ],
    correct_answer: "C",
    explanation: "Saponification is the basic hydrolysis of fatty acid esters (triglycerides) using aqueous sodium or potassium hydroxide, producing glycerol and carboxylate salts (soaps).",
    topic_name: "Saponification & Soap Making",
    instruction_category: "Esters & Fats"
  },
  {
    question_number: 35,
    question_text: "Esterification is a reversible reaction between a carboxylic acid and an alcohol in the presence of an acid catalyst that produces:",
    option_a: "An ester and water",
    option_b: "An aldehyde and hydrogen",
    option_c: "An ether and carbon dioxide",
    option_d: "An amine and water",
    options: [
      "An ester and water",
      "An aldehyde and hydrogen",
      "An ether and carbon dioxide",
      "An amine and water"
    ],
    correct_answer: "A",
    explanation: "Fischer esterification: R-COOH + R'-OH (in the presence of conc. H2SO4) ⇌ R-COOR' (ester) + H2O.",
    topic_name: "Esterification Reactions",
    instruction_category: "Esters & Carboxylic Acids"
  },
  {
    question_number: 36,
    question_text: "What is the systematic IUPAC name for the carboxylic acid CH3-CH(CH3)-COOH?",
    option_a: "Butanoic acid",
    option_b: "2-Methylpropanoic acid",
    option_c: "3-Methylpropanoic acid",
    option_d: "Propanoic acid",
    options: [
      "Butanoic acid",
      "2-Methylpropanoic acid",
      "3-Methylpropanoic acid",
      "Propanoic acid"
    ],
    correct_answer: "B",
    explanation: "The longest chain containing the carboxyl group has 3 carbon atoms (propanoic acid), with carbon 1 at -COOH. A methyl substituent is at carbon 2, yielding 2-methylpropanoic acid (isobutyric acid).",
    topic_name: "IUPAC Nomenclature of Carboxylic Acids",
    instruction_category: "Carboxylic Acids"
  },
  {
    question_number: 37,
    question_text: "A 4% to 8% aqueous solution of ethanoic acid (acetic acid) is commonly known as:",
    option_a: "Vinegar",
    option_b: "Formalin",
    option_c: "Tincture",
    option_d: "Brine",
    options: ["Vinegar", "Formalin", "Tincture", "Brine"],
    correct_answer: "A",
    explanation: "Vinegar is a dilute aqueous solution containing roughly 4% to 8% ethanoic (acetic) acid by volume, widely used as a food seasoning and preservative.",
    topic_name: "Common Applications of Carboxylic Acids",
    instruction_category: "Applied Chemistry"
  },
  {
    question_number: 38,
    question_text: "Which of the following organic compounds has the highest boiling point among molecules of comparable molecular weight?",
    option_a: "Ethane",
    option_b: "Methoxymethane",
    option_c: "Ethanol",
    option_d: "Ethanoic acid",
    options: ["Ethane", "Methoxymethane", "Ethanol", "Ethanoic acid"],
    correct_answer: "D",
    explanation: "Carboxylic acids (like ethanoic acid) form extensive intermolecular hydrogen bonds, creating stable dimeric pairs in both liquid and vapor phases that require significant thermal energy to overcome.",
    topic_name: "Intermolecular Forces & Boiling Points",
    instruction_category: "Carboxylic Acids"
  },
  {
    question_number: 39,
    question_text: "Acid-catalyzed hydrolysis of an ester yields:",
    option_a: "Carboxylic acid and an alcohol",
    option_b: "Alkane and carbon dioxide",
    option_c: "Aldehyde and ketone",
    option_d: "Amine and water",
    options: [
      "Carboxylic acid and an alcohol",
      "Alkane and carbon dioxide",
      "Aldehyde and ketone",
      "Amine and water"
    ],
    correct_answer: "A",
    explanation: "Hydrolysis of an ester (R-COOR') with water in the presence of dilute mineral acid reverses esterification, producing the parent carboxylic acid (R-COOH) and alcohol (R'-OH).",
    topic_name: "Ester Hydrolysis",
    instruction_category: "Esters"
  },
  {
    question_number: 40,
    question_text: "Methanoic acid (formic acid, HCOOH) reduces Tollens’ reagent unlike other carboxylic acids because:",
    option_a: "It possesses both an aldehyde-like formyl group (-CHO) and a carboxyl group.",
    option_b: "It is a stronger acid than hydrochloric acid.",
    option_c: "It contains an aromatic benzene nucleus.",
    option_d: "It contains no oxygen atoms.",
    options: [
      "It possesses both an aldehyde-like formyl group (-CHO) and a carboxyl group.",
      "It is a stronger acid than hydrochloric acid.",
      "It contains an aromatic benzene nucleus.",
      "It contains no oxygen atoms."
    ],
    correct_answer: "A",
    explanation: "Methanoic acid (H-C(=O)-OH) has a hydrogen directly attached to the carbonyl carbon, allowing it to behave as an aldehyde that reduces Tollens' and Fehling's reagents to CO2 and H2O.",
    topic_name: "Unique Reducing Properties of Methanoic Acid",
    instruction_category: "Carboxylic Acids"
  },
  {
    question_number: 41,
    question_text: "Amines are organic nitrogen compounds structurally derived by replacing one or more hydrogen atoms of:",
    option_a: "Nitric acid (HNO3)",
    option_b: "Ammonia (NH3)",
    option_c: "Hydrazine (N2H4)",
    option_d: "Nitrogen gas (N2)",
    options: [
      "Nitric acid (HNO3)",
      "Ammonia (NH3)",
      "Hydrazine (N2H4)",
      "Nitrogen gas (N2)"
    ],
    correct_answer: "B",
    explanation: "Amines are organic derivatives of ammonia (NH3) where one, two, or three hydrogen atoms are replaced by alkyl or aryl groups (forming 1°, 2°, or 3° amines).",
    topic_name: "Structure of Amines",
    instruction_category: "Nitrogen Compounds - Amines"
  },
  {
    question_number: 42,
    question_text: "Which of the following orders represents the decreasing basicity of methylamines in aqueous solution?",
    option_a: "(CH3)2NH > CH3NH2 > (CH3)3N > NH3",
    option_b: "NH3 > (CH3)3N > CH3NH2 > (CH3)2NH",
    option_c: "(CH3)3N > (CH3)2NH > CH3NH2 > NH3",
    option_d: "CH3NH2 > (CH3)2NH > (CH3)3N > NH3",
    options: [
      "(CH3)2NH > CH3NH2 > (CH3)3N > NH3",
      "NH3 > (CH3)3N > CH3NH2 > (CH3)2NH",
      "(CH3)3N > (CH3)2NH > CH3NH2 > NH3",
      "CH3NH2 > (CH3)2NH > (CH3)3N > NH3"
    ],
    correct_answer: "A",
    explanation: "In aqueous solution, the basic strength of methylamines is governed by an interplay of inductive electron donation (+I effect), steric hindrance, and hydration of the ammonium cation, giving the order: Secondary (2°) > Primary (1°) > Tertiary (3°) > Ammonia.",
    topic_name: "Basicity of Amines in Aqueous Solution",
    instruction_category: "Nitrogen Compounds - Amines"
  },
  {
    question_number: 43,
    question_text: "Polymers that are formed by the repeated combination of bifunctional monomers with the simultaneous elimination of small molecules (such as H2O or HCl) are called:",
    option_a: "Addition polymers",
    option_b: "Condensation (step-growth) polymers",
    option_c: "Homopolymers",
    option_d: "Vinyl polymers",
    options: [
      "Addition polymers",
      "Condensation (step-growth) polymers",
      "Homopolymers",
      "Vinyl polymers"
    ],
    correct_answer: "B",
    explanation: "Condensation polymerization (step-growth) occurs when polyfunctional monomer molecules react with one another to form polymer chains while splitting off small by-product molecules like water, alcohol, or ammonia.",
    topic_name: "Types of Polymerization (Addition vs Condensation)",
    instruction_category: "Polymers"
  },
  {
    question_number: 44,
    question_text: "Which one of the following is a naturally occurring biopolymer?",
    option_a: "Bakelite",
    option_b: "Polyvinyl chloride (PVC)",
    option_c: "Nylon-6,6",
    option_d: "Cellulose",
    options: [
      "Bakelite",
      "Polyvinyl chloride (PVC)",
      "Nylon-6,6",
      "Cellulose"
    ],
    correct_answer: "D",
    explanation: "Cellulose is a natural polysaccharide synthesized by plants that forms the primary structural component of plant cell walls. PVC, Nylon-6,6, and Bakelite are synthetic man-made polymers.",
    topic_name: "Natural vs Synthetic Polymers",
    instruction_category: "Polymers & Biomolecules"
  },
  {
    question_number: 45,
    question_text: "Nylon-6,6 is synthesized by the condensation polymerization of hexamethylenediamine and adipic acid. It belongs to which class of synthetic polymers?",
    option_a: "Polyamides",
    option_b: "Polyesters",
    option_c: "Polyalkenes",
    option_d: "Polyurethanes",
    options: ["Polyamides", "Polyesters", "Polyalkenes", "Polyurethanes"],
    correct_answer: "A",
    explanation: "Nylon-6,6 is joined by repeating amide linkage groups (-CO-NH-), classifying it as a synthetic polyamide.",
    topic_name: "Synthetic Polyamides & Nylon",
    instruction_category: "Polymers"
  },
  {
    question_number: 46,
    question_text: "The monomer unit used to produce polyethylene (polythene) is:",
    option_a: "Ethene (CH2=CH2)",
    option_b: "Ethyne (HC≡CH)",
    option_c: "Ethane (CH3-CH3)",
    option_d: "Vinyl chloride (CH2=CHCl)",
    options: [
      "Ethene (CH2=CH2)",
      "Ethyne (HC≡CH)",
      "Ethane (CH3-CH3)",
      "Vinyl chloride (CH2=CHCl)"
    ],
    correct_answer: "A",
    explanation: "Polyethylene is synthesized by addition polymerization of ethene (ethylene) monomers under high temperature and pressure with a catalyst: n CH2=CH2 -> -[CH2-CH2]-n.",
    topic_name: "Addition Polymers (Polyethylene)",
    instruction_category: "Polymers"
  },
  {
    question_number: 47,
    question_text: "A major difference between thermoplastic and thermosetting polymers is that thermosetting polymers:",
    option_a: "Can be repeatedly softened by heating and remolded into new shapes.",
    option_b: "Have linear chains with weak intermolecular forces.",
    option_c: "Undergo permanent cross-linking upon heating and cannot be remolded.",
    option_d: "Are completely soluble in all organic solvents.",
    options: [
      "Can be repeatedly softened by heating and remolded into new shapes.",
      "Have linear chains with weak intermolecular forces.",
      "Undergo permanent cross-linking upon heating and cannot be remolded.",
      "Are completely soluble in all organic solvents."
    ],
    correct_answer: "C",
    explanation: "Thermosetting plastics (such as Bakelite and melamine) form extensive covalent cross-links during molding; once set, they decompose rather than melt upon reheating and cannot be reshaped.",
    topic_name: "Thermoplastics vs Thermosetting Polymers",
    instruction_category: "Polymers"
  },
  {
    question_number: 48,
    question_text: "The vulcanization of natural rubber involves heating crude rubber with which non-metal to introduce cross-links and enhance elasticity and mechanical strength?",
    option_a: "Sulfur",
    option_b: "Carbon",
    option_c: "Phosphorus",
    option_d: "Chlorine",
    options: ["Sulfur", "Carbon", "Phosphorus", "Chlorine"],
    correct_answer: "A",
    explanation: "Charles Goodyear developed vulcanization by heating raw isoprene rubber with elemental sulfur, forming disulfide cross-links between polymer strands to improve tensile strength, thermal resistance, and elasticity.",
    topic_name: "Vulcanization of Natural Rubber",
    instruction_category: "Polymers"
  },
  {
    question_number: 49,
    question_text: "Carbohydrates are polyhydroxy aldehydes or polyhydroxy ketones typically having the empirical formula:",
    option_a: "CnH2n",
    option_b: "Cx(H2O)y",
    option_c: "CnH2n+2O",
    option_d: "CnH2nO2",
    options: ["CnH2n", "Cx(H2O)y", "CnH2n+2O", "CnH2nO2"],
    correct_answer: "B",
    explanation: "Historically termed 'hydrates of carbon', most carbohydrates conform to the general empirical formula Cx(H2O)y.",
    topic_name: "Classification & Formula of Carbohydrates",
    instruction_category: "Biochemistry & Biomolecules"
  },
  {
    question_number: 50,
    question_text: "Glucose (C6H12O6) is classified biochemically as an:",
    option_a: "Aldohexose",
    option_b: "Ketohexose",
    option_c: "Aldopentose",
    option_d: "Ketopentose",
    options: ["Aldohexose", "Ketohexose", "Aldopentose", "Ketopentose"],
    correct_answer: "A",
    explanation: "Glucose contains six carbon atoms (hexose) and an aldehyde group (-CHO) at carbon 1, making it an aldohexose.",
    topic_name: "Structure of Monosaccharides (Glucose)",
    instruction_category: "Biochemistry & Biomolecules"
  },
  {
    question_number: 51,
    question_text: "Complete enzymatic or acid hydrolysis of common table sugar (sucrose) yields an equimolar mixture of:",
    option_a: "Two glucose molecules",
    option_b: "Glucose and fructose",
    option_c: "Glucose and galactose",
    option_d: "Galactose and fructose",
    options: [
      "Two glucose molecules",
      "Glucose and fructose",
      "Glucose and galactose",
      "Galactose and fructose"
    ],
    correct_answer: "B",
    explanation: "Sucrose is a disaccharide formed by an α-1,2-glycosidic bond linking α-D-glucopyranose and β-D-fructofuranose; its hydrolysis yields equal amounts of D-glucose and D-fructose.",
    topic_name: "Disaccharide Hydrolysis (Sucrose)",
    instruction_category: "Biochemistry & Biomolecules"
  },
  {
    question_number: 52,
    question_text: "All 20 standard amino acids that compose living proteins simultaneously contain which two essential functional groups?",
    option_a: "Amino group (-NH2) and carboxyl group (-COOH)",
    option_b: "Carbonyl group and hydroxyl group",
    option_c: "Amide group and ester group",
    option_d: "Hydroxyl group and halide group",
    options: [
      "Amino group (-NH2) and carboxyl group (-COOH)",
      "Carbonyl group and hydroxyl group",
      "Amide group and ester group",
      "Hydroxyl group and halide group"
    ],
    correct_answer: "A",
    explanation: "Alpha-amino acids possess both a basic amino group (-NH2) and an acidic carboxylic acid group (-COOH) attached to the central alpha-carbon.",
    topic_name: "Structure of Amino Acids",
    instruction_category: "Biochemistry & Biomolecules"
  },
  {
    question_number: 53,
    question_text: "The covalent linkage formed between the alpha-carboxyl group of one amino acid and the alpha-amino group of an adjacent amino acid is called a:",
    option_a: "Glycosidic bond",
    option_b: "Phosphodiester bond",
    option_c: "Peptide bond",
    option_d: "Ester bond",
    options: [
      "Glycosidic bond",
      "Phosphodiester bond",
      "Peptide bond",
      "Ester bond"
    ],
    correct_answer: "C",
    explanation: "During protein synthesis, a dehydration condensation reaction forms an amide linkage (-CO-NH-) termed a peptide bond.",
    topic_name: "Peptide Bonds & Polypeptides",
    instruction_category: "Biochemistry & Biomolecules"
  },
  {
    question_number: 54,
    question_text: "Denaturation of a protein by extreme heat, severe pH changes, or heavy metals results in:",
    option_a: "Hydrolysis of all primary peptide bonds into free amino acids.",
    option_b: "Conversion of amino acids into carbohydrates.",
    option_c: "Creation of new covalent disulfide linkages.",
    option_d: "Disruption of secondary, tertiary, and quaternary structural folding while retaining primary amino acid sequence.",
    options: [
      "Hydrolysis of all primary peptide bonds into free amino acids.",
      "Conversion of amino acids into carbohydrates.",
      "Creation of new covalent disulfide linkages.",
      "Disruption of secondary, tertiary, and quaternary structural folding while retaining primary amino acid sequence."
    ],
    correct_answer: "D",
    explanation: "Denaturation disrupts the non-covalent interactions (hydrogen bonds, ionic interactions, hydrophobic packing) responsible for secondary and tertiary conformations, causing loss of biological function without breaking primary covalent peptide bonds.",
    topic_name: "Protein Denaturation",
    instruction_category: "Biochemistry & Biomolecules"
  },
  {
    question_number: 55,
    question_text: "Nucleic acids (DNA and RNA) are biological macromolecules composed of repeating monomer units known as:",
    option_a: "Nucleotides",
    option_b: "Amino acids",
    option_c: "Monosaccharides",
    option_d: "Fatty acids",
    options: ["Nucleotides", "Amino acids", "Monosaccharides", "Fatty acids"],
    correct_answer: "A",
    explanation: "Nucleic acids are polymers of nucleotides, each comprising a nitrogenous base, a pentose sugar, and a phosphate group.",
    topic_name: "Nucleic Acid Composition",
    instruction_category: "Biochemistry & Biomolecules"
  },
  {
    question_number: 56,
    question_text: "Which pyrimidine nitrogenous base is present exclusively in RNA molecules and replaces thymine found in DNA?",
    option_a: "Adenine",
    option_b: "Guanine",
    option_c: "Uracil",
    option_d: "Cytosine",
    options: ["Adenine", "Guanine", "Uracil", "Cytosine"],
    correct_answer: "C",
    explanation: "RNA contains the pyrimidine base Uracil (U) in place of Thymine (T). Both DNA and RNA contain Adenine, Guanine, and Cytosine.",
    topic_name: "Nitrogenous Bases in DNA vs RNA",
    instruction_category: "Biochemistry & Genetics"
  },
  {
    question_number: 57,
    question_text: "The primary greenhouse gas released by the combustion of fossil fuels that contributes most significantly to anthropomorphic global warming is:",
    option_a: "Carbon dioxide (CO2)",
    option_b: "Nitrogen gas (N2)",
    option_c: "Oxygen gas (O2)",
    option_d: "Argon (Ar)",
    options: [
      "Carbon dioxide (CO2)",
      "Nitrogen gas (N2)",
      "Oxygen gas (O2)",
      "Argon (Ar)"
    ],
    correct_answer: "A",
    explanation: "Carbon dioxide (CO2) absorbs and re-emits infrared radiation within the atmosphere, functioning as the primary anthropogenic greenhouse gas driving global climate change.",
    topic_name: "Greenhouse Effect & Climate Change",
    instruction_category: "Environmental Chemistry"
  },
  {
    question_number: 58,
    question_text: "Acid rain is primarily produced by atmospheric reactions involving industrial emissions of which gases?",
    option_a: "Methane and ozone",
    option_b: "Sulfur dioxide (SO2) and nitrogen oxides (NOx)",
    option_c: "Carbon monoxide and helium",
    option_d: "Chlorofluorocarbons and argon",
    options: [
      "Methane and ozone",
      "Sulfur dioxide (SO2) and nitrogen oxides (NOx)",
      "Carbon monoxide and helium",
      "Chlorofluorocarbons and argon"
    ],
    correct_answer: "B",
    explanation: "SO2 and NOx react with atmospheric moisture, oxygen, and oxidants to form sulfuric acid (H2SO4) and nitric acid (HNO3), which precipitate as acid rain.",
    topic_name: "Acid Rain Formation & Effects",
    instruction_category: "Environmental Chemistry"
  },
  {
    question_number: 59,
    question_text: "Stratospheric ozone layer depletion is primarily caused by catalytic reactions of chlorine free radicals derived from:",
    option_a: "Chlorofluorocarbons (CFCs)",
    option_b: "Carbon dioxide emissions",
    option_c: "Agricultural fertilizers",
    option_d: "Dust particles",
    options: [
      "Chlorofluorocarbons (CFCs)",
      "Carbon dioxide emissions",
      "Agricultural fertilizers",
      "Dust particles"
    ],
    correct_answer: "A",
    explanation: "CFCs rise into the stratosphere where UV radiation breaks C-Cl bonds, releasing reactive chlorine free radicals (Cl·) that catalytically destroy ozone (O3) molecules.",
    topic_name: "Ozone Depletion & CFCs",
    instruction_category: "Environmental Chemistry"
  },
  {
    question_number: 60,
    question_text: "The rapid, excessive growth of algae in freshwater lakes and rivers, leading to severe oxygen depletion and aquatic death (eutrophication), is caused by excessive runoff of:",
    option_a: "Nitrate and phosphate fertilizers",
    option_b: "Sodium chloride salt",
    option_c: "Carbon monoxide",
    option_d: "Heavy metals like lead and mercury",
    options: [
      "Nitrate and phosphate fertilizers",
      "Sodium chloride salt",
      "Carbon monoxide",
      "Heavy metals like lead and mercury"
    ],
    correct_answer: "A",
    explanation: "Agricultural runoff enriched with nitrates and phosphates acts as excess plant nutrients, causing algal blooms. When algae die, decomposing aerobic bacteria consume dissolved oxygen (hypoxia), suffocating fish and aquatic life.",
    topic_name: "Eutrophication of Water Bodies",
    instruction_category: "Environmental Chemistry"
  }
];

module.exports = questions;
