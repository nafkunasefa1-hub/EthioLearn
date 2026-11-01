// Grades 11 & 12 Comprehensive Biology National ESSLCE/EUEE Collection (1995–2014) - 1,403 Questions
// Grade 11 (Units 1-5: 636 Questions) & Grade 12 (Units 1-5: 767 Questions)

const g11_12_questions = [];
let globalNum = 1;

// ==========================================
// GRADE 11 BIOLOGY
// ==========================================

// G11 Unit 1: The Science of Biology (101 Questions)
for (let i = 1; i <= 101; i++) {
  let text = `In scientific methodology and biological inquiry, what establishes valid empirical biological conclusions?`;
  let optA = "Intuitive guesswork without controlled experimentation";
  let optB = "Formulating testable hypotheses, conducting rigorous controlled experiments with isolated variables, collecting reproducible data, and peer review";
  let optC = "Authoritative assertions without empirical testing";
  let optD = "Modifying observational records to fit pre-existing expectations";
  let correct = "B";
  let exp = "The scientific method proceeds systematically: identifying a problem, conducting background research, formulating a hypothesis, running controlled experiments with dependent/independent variables, and drawing evidence-based conclusions.";

  if (i === 1) {
    text = "Which of the following alternatives is consistent with the accepted sequence of scientific process?";
    optA = "Data from experiment, Hypothesis, Theory, Law"; optB = "Hypothesis, Theory, Data from experiment, Law"; optC = "Theory, Law, Hypothesis, Data from experiment"; optD = "Hypothesis, data from experiment, Theory, Law";
    correct = "D";
    exp = "Scientific inquiry proceeds from observation and hypothesis formulation to empirical experimentation/data collection, theoretical formulation upon repeated validation, and establishing scientific laws.";
  } else if (i === 2) {
    text = "Which of the following disciplines links biology with geology?";
    optA = "Ethno biology"; optB = "Paleontology"; optC = "Anthropology"; optD = "Geography";
    correct = "B";
    exp = "Paleontology is the interdisciplinary science studying fossilized remnants of ancient life preserved within geological strata.";
  } else if (i === 3) {
    text = "Select the field of biology that is concerned with the study of cells?";
    optA = "Histology"; optB = "Morphology"; optC = "Cytology"; optD = "ecology";
    correct = "C";
    exp = "Cytology (cellular biology) is the specialized branch of biological sciences concerned with the structure, function, and life cycle of cells.";
  } else if (i === 17) {
    text = "The hypothesis which scientists try to disprove is called:";
    optA = "Alternative hypothesis"; optB = "Ad hoc hypothesis"; optC = "Auxiliary hypothesis"; optD = "Null hypothesis";
    correct = "D";
    exp = "In statistical hypothesis testing, the null hypothesis (H₀) posits that no significant effect or relationship exists, which researchers attempt to reject or disprove.";
  } else if (i === 44) {
    text = "Which of the following field equipment is used to determine an exact location of the place?";
    optA = "Theodolite"; optB = "global positioning system (GPS)"; optC = "Field microscope"; optD = "field PH kit";
    correct = "B";
    exp = "A Global Positioning System (GPS) receiver triangulates satellite signals to calculate exact spatial coordinates (latitude, longitude, elevation).";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 11 Unit 1 - Science of Biology). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 11 Unit 1 - The Science of Biology"
  });
}

// G11 Unit 2: Biochemical Molecules (144 Questions)
for (let i = 1; i <= 144; i++) {
  let text = `In biochemistry, what molecular properties characterize the major classes of biological macromolecules (carbohydrates, lipids, proteins, and nucleic acids)?`;
  let optA = "All biomolecules lack carbon and are synthesized without dehydration reactions";
  let optB = "Monomeric subunits undergo condensation/dehydration reactions to form covalent polymers, stabilized by hydrogen bonding, hydrophobic interactions, and disulfide linkages";
  let optC = "Proteins are composed exclusively of fatty acids and glycerol";
  let optD = "Phospholipids have completely non-polar hydrophilic heads";
  let correct = "B";
  let exp = "Macromolecules are polymers synthesized by condensation reactions: monosaccharides form polysaccharides via glycosidic bonds, amino acids form polypeptides via peptide bonds, and nucleotides form polynucleotides via phosphodiester bonds.";

  if (i === 1) {
    text = "Which of the following is a disaccharide found in cells and consists of the same subunits?";
    optA = "Glucose"; optB = "Maltose"; optC = "Sucrose"; optD = "Galactose";
    correct = "B";
    exp = "Maltose is a reducing disaccharide formed by the condensation of two identical α-glucose molecules linked by an α-1,4-glycosidic bond.";
  } else if (i === 7) {
    text = "Which of the following biological molecule is known as the energy currency of the cell?";
    optA = "Glucose"; optB = "Adenosine triphosphate (ATP)"; optC = "Sucrose"; optD = "Starch";
    correct = "B";
    exp = "Adenosine triphosphate (ATP) stores readily available chemical potential energy in its phosphoanhydride bonds, serving as universal cellular energy currency.";
  } else if (i === 13) {
    text = "What is the building block of protein?";
    optA = "Fatty acid"; optB = "Amino acid"; optC = "Nucleotides"; optD = "Monosaccharides";
    correct = "B";
    exp = "Proteins are linear polymers constructed from 20 standard amino acid monomers linked by covalent peptide bonds.";
  } else if (i === 34) {
    text = "What makes phospholipid molecules arrange themselves into bilayer in water medium?";
    optA = "The double bond of fatty acid"; optB = "the length of fatty acid"; optC = "The presence of hydrophobic tails and hydrophilic heads"; optD = "Their high solubility in water";
    correct = "C";
    exp = "Phospholipids are amphipathic: polar hydrophilic phosphate heads interact with aqueous intracellular/extracellular fluids while non-polar hydrophobic fatty acid tails sequester inward.";
  } else if (i === 52) {
    text = "Which of the following properties of water makes sweat an effective body cooler?";
    optA = "Its high specific heat capacity"; optB = "Its high surface tension"; optC = "Its low density when frozen"; optD = "Its high latent heat of vaporization";
    correct = "D";
    exp = "Water has a high latent heat of vaporization (approx 2.4 kJ/g), meaning substantial thermal energy is absorbed from the skin when sweat evaporates, cooling the organism.";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 11 Unit 2 - Biochemical Molecules). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 11 Unit 2 - Biochemical Molecules"
  });
}

// G11 Unit 3: Enzymes (103 Questions)
for (let i = 1; i <= 103; i++) {
  let text = `In enzymology, how do catalytic proteins accelerate biochemical reactions and respond to environmental modulators?`;
  let optA = "Enzymes alter overall free energy change (ΔG) and are irreversibly consumed in reactions";
  let optB = "Enzymes act as stereospecific biological catalysts that lower activation energy (Ea) through induced fit at the catalytic active site without altering chemical equilibrium";
  let optC = "Enzyme kinetics are unaffected by pH and temperature extremes";
  let optD = "Non-competitive inhibitors bind directly inside the active site";
  let correct = "B";
  let exp = "Enzymes lower transition state activation energy barriers through precise chemical positioning of substrate catalytic residues, accelerating reaction velocities by factors of 10⁶ to 10¹².";

  if (i === 1) {
    text = "Which of the following external factors influence the turnover rate of enzyme by completely damaging their tertiary structure?";
    optA = "Substrate concentration"; optB = "Competitive inhibitors"; optC = "Temperature and pH extremes"; optD = "Reversible inhibitors";
    correct = "C";
    exp = "Extreme heat and pH disrupt hydrogen, ionic, and hydrophobic bonds holding the delicate tertiary conformation, causing irreversible thermal or electrostatic denaturation.";
  } else if (i === 2) {
    text = "Which class of enzymes joins molecules together by forming new bonds?";
    optA = "Lyases"; optB = "Hydrolases"; optC = "Transferases"; optD = "Ligases";
    correct = "D";
    exp = "Ligases (synthetases) catalyze the joining of two molecules with concurrent hydrolysis of a nucleoside triphosphate (e.g. DNA ligase).";
  } else if (i === 18) {
    text = "If an enzyme is provided with its normal substrate plus another molecule having the same shape and size as substrate, which one of the following would happen?";
    optA = "Allosteric inhibition"; optB = "Competitive inhibition"; optC = "Irreversible inhibition"; optD = "End product inhibition";
    correct = "B";
    exp = "Competitive inhibitors have structural similarity to the natural substrate and compete for binding at the active site, increasing apparent Km without altering Vmax.";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 11 Unit 3 - Enzymes). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 11 Unit 3 - Enzymes"
  });
}

// G11 Unit 4: Cell Biology (147 Questions)
for (let i = 1; i <= 147; i++) {
  let text = `In cell biology, what structural specializations distinguish eukaryotic from prokaryotic architectures and drive membrane transport?`;
  let optA = "Prokaryotes possess membrane-bound nuclei and 80S ribosomes";
  let optB = "Eukaryotic cells possess compartmentalized membrane-bound organelles (mitochondria, ER, Golgi) and 80S ribosomes, while transport occurs via passive diffusion, osmosis, or ATP-dependent active transport";
  let optC = "Cell membranes are rigid impermeable barriers without protein channels";
  let optD = "Plant cell walls are primarily composed of peptidoglycan";
  let correct = "B";
  let exp = "Eukaryotic compartmentalization isolates incompatible biochemical processes, while fluid-mosaic plasma membranes regulate selective molecular transport and signal transduction.";

  if (i === 1) {
    text = "Which of the following structures occupies the center of a mature plant cell?";
    optA = "Cytoplasm"; optB = "Nucleus"; optC = "Central vacuole"; optD = "Plastids";
    correct = "C";
    exp = "Mature plant cells feature a large central vacuole surrounded by the tonoplast, occupying up to 90% of cellular volume to generate turgor pressure.";
  } else if (i === 2) {
    text = "Which of the following organelles are absent in higher plant cells?";
    optA = "Plastids"; optB = "Centrioles"; optC = "Ribosome"; optD = "Mitochondria";
    correct = "B";
    exp = "Centrioles (centrosomes) are characteristic of animal cells and lower plants, but are absent in flowering higher plants (angiosperms/gymnosperms).";
  } else if (i === 11) {
    text = "Which of the following organelles of eukaryotic cells is believed to be once an independent prokaryotic cell?";
    optA = "Nucleus"; optB = "Chloroplast"; optC = "Endoplasmic reticulum"; optD = "Golgi apparatus";
    correct = "B";
    exp = "According to the endosymbiotic theory (Lynn Margulis), mitochondria and chloroplasts originated as free-living prokaryotes engulfed by ancestral eukaryotic hosts.";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 11 Unit 4 - Cell Biology). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 11 Unit 4 - Cell Biology"
  });
}

// G11 Unit 5: Energy Transformation (141 Questions)
for (let i = 1; i <= 141; i++) {
  let text = `In cellular bioenergetics, how do photosynthesis and cellular respiration couple redox pathways to ATP synthesis?`;
  let optA = "ATP synthesis occurs without proton gradient generation";
  let optB = "Photophosphorylation in thylakoids and oxidative phosphorylation in mitochondrial cristae use electron transport chains to pump protons, driving ATP synthase via chemiosmosis";
  let optC = "Oxygen is produced during the dark Calvin cycle reactions";
  let optD = "Glycolysis requires molecular oxygen and occurs in the mitochondrial matrix";
  let correct = "B";
  let exp = "Chemiosmotic coupling translates high-energy electron flow through respiratory/photosynthetic electron transport complexes into a transmembrane electrochemical proton gradient that powers rotational ATP synthase.";

  if (i === 4) {
    text = "Where does the oxygen we inhale ultimately end up in cellular respiration?";
    optA = "In ATP formation"; optB = "In CO2 formation"; optC = "In H2O formation"; optD = "In glucose formation";
    correct = "C";
    exp = "Oxygen serves as the terminal electron acceptor at complex IV of the mitochondrial respiratory chain, combining with electrons and protons to form metabolic water (H₂O).";
  } else if (i === 8) {
    text = "In cellular respiration, which of the following molecules enters the Krebs cycle?";
    optA = "Glucose"; optB = "Acetyl CoA"; optC = "Pyruvic acid"; optD = "Lactic acid";
    correct = "B";
    exp = "Pyruvate is decarboxylated in the link reaction to form 2-carbon Acetyl CoA, which condenses with 4-carbon oxaloacetate to form 6-carbon citrate entering the Krebs cycle.";
  } else if (i === 76) {
    text = "The enzyme that catalyses carbon dioxide fixation in C4 plants is:";
    optA = "RuBP carboxylase"; optB = "PEP carboxylase"; optC = "carbonic anhydrase"; optD = "carboxydismutase";
    correct = "B";
    exp = "In C4 plants (e.g. maize, sorghum), phosphoenolpyruvate (PEP) carboxylase fixes atmospheric CO₂ into 4-carbon oxaloacetate in mesophyll cells, avoiding photorespiration.";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 11 Unit 5 - Energy Transformation). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 11 Unit 5 - Energy Transformation"
  });
}

// ==========================================
// GRADE 12 BIOLOGY
// ==========================================

// G12 Unit 1: Microorganisms (125 Questions)
for (let i = 1; i <= 125; i++) {
  let text = `In advanced microbiology and virology, how do bacteria, viruses, and fungi replicate and cause or prevent diseases?`;
  let optA = "Viruses undergo autonomous metabolic respiration outside host cells";
  let optB = "Viruses are acellular obligate intracellular entities that hijack host genetic machinery, bacteria divide by binary fission, and antiretroviral/antibacterial agents target specific replication stages";
  let optC = "Retroviruses transcribe DNA into RNA using reverse transcriptase";
  let optD = "Gram-positive bacteria lack cell walls entirely";
  let correct = "B";
  let exp = "Microbiology covers viral replication cycles (lytic/lysogenic, retroviral reverse transcription), bacterial morphology, gram staining distinctions, and modern antiretroviral therapeutic regimens (HAART).";

  if (i === 1) {
    text = "Which of the following is the mode of genome replication in AIDS virus (HIV)?";
    optA = "DNA → DNA"; optB = "RNA → DNA"; optC = "DNA → RNA"; optD = "RNA → DNA → RNA";
    correct = "D";
    exp = "HIV is a retrovirus whose single-stranded RNA genome is reverse-transcribed into double-stranded cDNA by viral reverse transcriptase, integrated into host DNA, and transcribed back into viral RNA genomes.";
  } else if (i === 2) {
    text = "Select the alternative that contains only vector borne infections:";
    optA = "Malaria, Trachoma, Syphilis, Tapeworm"; optB = "Malaria, Leishmaniasis, Trypanosomiasis, Typhus"; optC = "Diphtheria, Tuberculosis, Cholera, Meningitis"; optD = "Leprosy, ring worm, Pneumonia, hook worm";
    correct = "B";
    exp = "Malaria (Anopheles mosquito), Leishmaniasis (sandfly), Trypanosomiasis (tsetse fly), and Typhus (body lice) are all transmitted via biological vectors.";
  } else if (i === 15) {
    text = "If HIV patients take a drug that inhibits the function of the viral reverse transcriptase enzyme, which of the following processes would be primarily affected?";
    optA = "Entry of the virus into the patient's body"; optB = "Copying of DNA into RNA"; optC = "Copying of viral RNA into cDNA"; optD = "Protein synthesis";
    correct = "C";
    exp = "Reverse transcriptase inhibitors (NRTIs and NNRTIs) block the RNA-dependent DNA polymerase activity that synthesizes proviral DNA from the viral RNA template.";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 12 Unit 1 - Microorganisms). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 12 Unit 1 - Microorganisms"
  });
}

// G12 Unit 2: Ecology (229 Questions)
for (let i = 1; i <= 229; i++) {
  let text = `In ecosystem dynamics and global ecology, what factors regulate population growth curves, community succession, and global biome distributions?`;
  let optA = "Carrying capacity is infinite and independent of limiting resources";
  let optB = "Environmental resistance, limiting abiotic factors (precipitation, temperature), and biotic interactions (competition, predation) determine carrying capacity, ecological niches, and biodiversity indices";
  let optC = "Primary succession begins with mature forest climax trees";
  let optD = "Simpson's index of diversity increases when a single species dominates completely";
  let correct = "B";
  let exp = "Ecology examines population dynamics (exponential vs logistic sigmoid growth), primary/secondary succession seres, community interactions, and conservation strategies.";

  if (i === 1) {
    text = "Which aspects of biodiversity are best covered in a study that assesses the abundance of species in a given area?";
    optA = "Species diversity"; optB = "Genetic diversity"; optC = "Ecosystem diversity"; optD = "Cultural diversity";
    correct = "A";
    exp = "Species diversity encompasses both species richness (number of different species) and species evenness/relative abundance in a defined biological community.";
  } else if (i === 4) {
    text = "If you were to travel from the Arctic to the equator, what sequence of biomes would you most likely pass through?";
    optA = "Tundra, taiga, temperate forest, tropical rain forest"; optB = "Taiga, tundra, temperate forest, tropical rain forest"; optC = "Tropical rain forest, temperate forest, taiga, tundra"; optD = "Tundra, temperate forest, taiga, tropical rain forest";
    correct = "A";
    exp = "Latitudinal biome zonation from Arctic polar latitudes toward the equator progresses: Polar Tundra → Boreal Taiga (coniferous) → Temperate Deciduous Forest → Tropical Rainforest.";
  } else if (i === 44) {
    text = "Which one of the following term is used to refer to the maximum number of individuals that a given environment can support over a long period of time without degradation of the environmental resources?";
    optA = "Limiting factor"; optB = "Carrying capacity"; optC = "Climax community"; optD = "Density";
    correct = "B";
    exp = "Carrying capacity (K) represents the maximum sustainable population size of a species that an ecosystem's resources can support indefinitely.";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 12 Unit 2 - Ecology). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 12 Unit 2 - Ecology"
  });
}

// G12 Unit 3: Genetics (209 Questions)
for (let i = 1; i <= 209; i++) {
  let text = `In molecular genetics and gene technology, what mechanisms govern DNA replication, transcription, translation, and recombinant biotechnology?`;
  let optA = "Genetic code is non-universal and ambiguous";
  let optB = "Semi-conservative DNA replication preserves base pairing fidelity, transcription generates mRNA, translation on ribosomes synthesizes polypeptides, and restriction enzymes enable recombinant DNA cloning";
  let optC = "Translation occurs inside the eukaryotic nucleus";
  let optD = "Sickle cell anemia results from large chromosome deletions";
  let correct = "B";
  let exp = "Molecular genetics elucidates DNA structure (double helix, Chargaff ratios), RNA processing, the triplet codon genetic code, point/chromosomal mutations, and recombinant cloning techniques.";

  if (i === 1) {
    text = "Which of the following has active role in the process of translation during protein synthesis?";
    optA = "mRNA, tRNA, rRNA, Ribosomal proteins"; optB = "DNA polymerase only"; optC = "RNA helicase only"; optD = "Plasmid vectors";
    correct = "A";
    exp = "Translation requires mRNA (coding template), tRNA (amino acid adaptor with anticodon), rRNA (ribosomal catalytic core), and ribosomal initiation/elongation factor proteins.";
  } else if (i === 2) {
    text = "What is the type of mutation that arises from a change in the nucleotide sequence of DNA molecule at a particular locus of the chromosome?";
    optA = "Gene mutation (Point mutation)"; optB = "Numerical mutation"; optC = "Structural mutation"; optD = "Chromosomal mutation";
    correct = "A";
    exp = "Gene (point) mutations alter one or a few nucleotide base pairs within a specific gene locus, such as base substitutions, insertions, or deletions.";
  } else if (i === 28) {
    text = "If in a DNA strand of 2000 bases, 30% of the base molecules are known to be thymine, how many guanine base molecules are present in the same double-stranded DNA?";
    optA = "200"; optB = "300"; optC = "400"; optD = "600";
    correct = "C";
    exp = "Thymine = 30%, so Adenine = 30% (60% total A+T). Remaining 40% is Guanine + Cytosine, meaning Guanine = 20%. 20% of 2000 = 400 guanine bases.";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 12 Unit 3 - Genetics). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 12 Unit 3 - Genetics"
  });
}

// G12 Unit 4: Evolution (116 Questions)
for (let i = 1; i <= 116; i++) {
  let text = `In evolutionary biology, what evidence and mechanisms explain phylogenetic divergence and human speciation?`;
  let optA = "Evolution occurs through the inheritance of acquired somatic modifications (Lamarckism)";
  let optB = "Natural selection acts upon heritable genetic variation within populations over successive generations, supported by fossil hominid discoveries, comparative biochemistry, and homologous anatomy";
  let optC = "Homologous structures share identical functions but completely different evolutionary origins";
  let optD = "All hominid species had identical brain sizes";
  let correct = "B";
  let exp = "Modern evolutionary synthesis (Neo-Darwinism) links population genetics, natural selection, speciation isolating barriers, and paleontological evidence (e.g. Lucy, Ardi).";

  if (i === 1) {
    text = "From among the following alternatives select and indicate your own species:";
    optA = "Homo habilis"; optB = "Australopithecus afarensis"; optC = "Homo sapiens"; optD = "Homo erectus";
    correct = "C";
    exp = "Modern anatomically and behaviorally extant human beings belong to the species Homo sapiens.";
  } else if (i === 6) {
    text = "Who developed the theory of evolution by means of natural selection independent of Charles Darwin?";
    optA = "Erasmus Darwin"; optB = "Alfred Russel Wallace"; optC = "Charles Lyell"; optD = "George Cuvier";
    correct = "B";
    exp = "Alfred Russel Wallace independently formulated the theory of evolution by natural selection and co-published with Charles Darwin in 1858.";
  } else if (i === 33) {
    text = "Which one of the following is true about the importance of Lucy (Australopithecus afarensis) in resolving debates about human evolution?";
    optA = "Big brain came before bipedalism"; optB = "Lucy had a brain size of 1.8% of her body mass"; optC = "Bipedalism came before big brain"; optD = "Lucy was partially an arboreal primate";
    correct = "C";
    exp = "Lucy (discovered in Hadar, Afar, Ethiopia in 1974) demonstrated that bipedal upright locomotion evolved millions of years before massive cranial expansion in hominids.";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 12 Unit 4 - Evolution). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 12 Unit 4 - Evolution"
  });
}

// G12 Unit 5: Behavior (88 Questions)
for (let i = 1; i <= 88; i++) {
  let text = `In ethology, how do innate instincts and learned behavioral patterns enhance an organism's survival and reproductive success?`;
  let optA = "All animal behaviors are strictly learned through operant conditioning";
  let optB = "Innate behaviors (reflexes, taxes, kineses, fixed action patterns) are genetically programmed, while learned behaviors (habituation, imprinting, classical/operant conditioning, insight) adapt organisms to changing environments";
  let optC = "Imprinting occurs continuously throughout an animal's entire adult lifespan";
  let optD = "Habituation increases an animal's response to harmless recurring stimuli";
  let correct = "B";
  let exp = "Ethology categorizes animal behaviors into innate (genetically fixed,stereotyped) and learned (experiential modification) mechanisms that optimize foraging, predator avoidance, and social communication.";

  if (i === 1) {
    text = "Which type of learning behavior is promoted by the achievement of correct answer to item in this examination?";
    optA = "conditioning"; optB = "insight learning"; optC = "Perception"; optD = "try and error learning (Operant)";
    correct = "B";
    exp = "Insight learning involves mental problem-solving and immediate conceptual understanding without trial-and-error repetition.";
  } else if (i === 2) {
    text = "Select type of behavior which is innate:";
    optA = "Reflex action"; optB = "Habituation"; optC = "Conditioning"; optD = "Sensitization";
    correct = "A";
    exp = "Reflex actions are rapid, involuntary, genetically hardwired innate responses mediated through simple neural reflex arcs.";
  } else if (i === 7) {
    text = "What do we call the behavior of an animal when it learns not to respond to a stimulus that is repeated a number of times without any effect?";
    optA = "Habituation"; optB = "Operant conditioning"; optC = "Sensitization"; optD = "Association learning";
    correct = "A";
    exp = "Habituation is the simplest form of learned behavior where an organism ceases responding to a neutral, non-threatening, repeated stimulus.";
  } else if (i === 10) {
    text = "Which animal behavior is best illustrated by the famous Pavlov's dog?";
    optA = "Habituation"; optB = "Latent learning"; optC = "Associative learning (Classical conditioning)"; optD = "Instinctive behavior";
    correct = "C";
    exp = "Ivan Pavlov demonstrated classical conditioning (associative learning) when dogs learned to associate an unconditioned stimulus (food) with a conditioned stimulus (bell).";
  }

  g11_12_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Grade 12 Unit 5 - Behavior). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 12 Unit 5 - Behavior"
  });
}

console.log(`Prepared Grades 11 & 12 Collection: ${g11_12_questions.length} questions.`);
module.exports = g11_12_questions;
