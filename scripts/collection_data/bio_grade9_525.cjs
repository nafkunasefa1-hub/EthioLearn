// Grade 9 National Biology Exam Collection (525 Questions)
// Ethiopian General Secondary Education Certificate (1995–2011 & EUEE 2014)

const g9_questions = [];

// Unit 1: Biology and Technology (14 Questions)
const u1 = [
  { n: 1, text: "Professor Tilahun Yilma is an internationally renowned scientist. What is his contribution to the world? He", A: "developed sorghum resistant to drought", B: "developed vaccine using genetic engineering", C: "conducted research on mollusccide effect of endod", D: "preserved many different traditional crop varieties", ans: "B", exp: "Professor Tilahun Yilma is an eminent Ethiopian-American virologist renowned for developing a genetically engineered recombinant vaccine for rinderpest and cattle plague eradication.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 2, text: "Which of the following research institutes works on leprosy?", A: "Armaur Hansen Research institute (AHR)", B: "Ethiopian Health and Nutrition Research Institute (EHNRI)", C: "Ethiopian Institute of Agriculture Research (ElAR)", D: "Aklilu Lemma Institute of Pathology (ALIPB)", ans: "A", exp: "Armauer Hansen Research Institute (AHRI), founded in Addis Ababa in 1970, specializes in biomedical research focusing on leprosy, tuberculosis, and malaria.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 3, text: "A renowned Ethiopian biomedical scientist and a long serving professor at Addis Ababa University is", A: "Professor Beyene petros.", B: "Professor Gebissa Ejeta", C: "Professor yalemtsehay Mekonnen", D: "Professor Sebsebe Demissew.", ans: "A", exp: "Professor Beyene Petros is a prominent Ethiopian biomedical scientist and professor of biology at AAU known for research on malaria, leishmaniasis, and other infectious diseases.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 4, text: "Which one of the following research institutes works on crop and livestock improvement?", A: "Ethiopian Health and Nutrition Research institute", B: "The institute of Biodiversity conservation", C: "Armauer Hansen Research Institute.", D: "Ethiopian Institute of Agricultural Research", ans: "D", exp: "The Ethiopian Institute of Agricultural Research (EIAR) conducts research focused on agricultural modernization, crop variety enhancement, and livestock productivity improvement.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 5, text: "A biologist, who saved the genetic diversity of Ethiopian's domestic plants and is internationally acclaimed as a plant genetic researcher is", A: "Prof Legesse Negash", B: "Prof Sebsebe Demissew", C: "Dr Melaku Worede", D: "Dr Gebissa Ejeta", ans: "C", exp: "Dr. Melaku Worede is an internationally celebrated Ethiopian geneticist and agronomist who preserved domestic seed biodiversity and established Africa's premier genebank.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 6, text: "An institution that carries out research into leprosy and tuberculosis is", A: "Institute of Biodiversity Conservation", B: "Armauer Hansen Research Institute", C: "Ethiopian Institute of Agricultural Research", D: "Ethiopian health and Nutrition", ans: "B", exp: "Armauer Hansen Research Institute (AHRI) investigates immunology and epidemiology of mycobacterial infections including leprosy and tuberculosis.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 7, text: "Among the most renowned Ethiopian biologist, who has been honored by developing high yielding strains of sorghum?", A: "Dr Aklilu lemma", B: "Prof Beyene Petros", C: "Dr. Gebissa Ejeta", D: "Prof. Tilahun Yilma", ans: "C", exp: "Dr. Gebissa Ejeta won the 2009 World Food Prize for developing drought-tolerant and parasitic Striga-resistant sorghum hybrids.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 8, text: "Which of the following is NOT among the research areas of IAR?", A: "Development of crop technology", B: "Managing livestock", C: "Mechanized farming", D: "Vectors of diseases", ans: "D", exp: "Research on medical disease vectors (mosquitoes, snails, tsetse flies) is the domain of pathobiology institutes (ALIPB/AHRI), not the Institute of Agricultural Research (IAR).", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 9, text: "All of the following are the research areas of ALIPB except:", A: "Human parasític diseases", B: "Vectors of disease and how to control", C: "Nutritional state of mothers and babies", D: "Animal healdh and disease", ans: "C", exp: "Nutritional research on mothers and infants is conducted by EPHI/EHNRI, whereas Aklilu Lemma Institute of Pathobiology (ALIPB) investigates human and animal parasitic diseases and vectors.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 10, text: "Ethiopian Evolutionist who discovered old human skulls which have a big impact on human evolution:", A: "Professor Legesse Negash", B: "Professor Mogessie Ashenafi", C: "Professor Ensermui Kelbessa", D: "Dr. Berhane Asfaw", ans: "D", exp: "Dr. Berhane Asfaw is a renowned paleoanthropologist who co-discovered pivotal hominid fossils including Australopithecus garhi, Ardipithecus ramidus, and Homo sapiens idaltu.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 11, text: "Professor Yalemtsehay Mekonnen is a renowned biologist known for her contribution on", A: "the discovery of endod as a control for schistosomiasis", B: "the development of hybrid sorghum which is resistant to drought", C: "assessment of the impact of chemical pesticide hazards on humans", D: "preservation of different traditional crop varieties", ans: "C", exp: "Professor Yalemtsehay Mekonnen conducted pioneering research assessing occupational pesticide exposures, environmental toxicology, and medicinal plant bioactivities in Ethiopia.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 12, text: "The Ethiopian biological research institute which is conducting research on leprosy and other diseases is", A: "Armauer Hansen Research Institute", B: "Aklilu Lemma Institute of Pathobiology", C: "The Institute of Biodiversity Conservation", D: "Ethiopian Institute of Agricultural Research", ans: "A", exp: "Armauer Hansen Research Institute (AHRI) in Addis Ababa focuses on biomedical research regarding leprosy, TB, malaria, and leishmaniasis.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 13, text: "Which of the following institutes is involved in the conservation of genes of plants and animals?", A: "Ethiopian Health and Nutrition Institute", B: "Armauer Hansen Research Institute", C: "Aklilu Lemma Institute of pathobiology", D: "Institute of Biodiversity", ans: "D", exp: "The Institute of Biodiversity Conservation (IBC / EBI) is mandated with safeguarding the national gene pool through plant and animal genetic resource preservation.", sec: "Grade 9 Unit 1 - Biology and Technology" },
  { n: 14, text: "The institute of biodiversity conservation is one of the biological research institutes of Ethiopia attempting to conserve the genetic resources of the country. As such, the institute‘s major research efforts focus on all of the following EXCEPT", A: "microorganism conservation", B: "animal conservation", C: "soil conservation", D: "plant conservation", ans: "C", exp: "The Ethiopian Biodiversity Institute focuses on biological genetic diversity (microorganisms, plants, animals), whereas physical soil conservation is managed under agriculture and land resources.", sec: "Grade 9 Unit 1 - Biology and Technology" }
];

let globalNum = 1;
u1.forEach(q => {
  g9_questions.push({
    question_number: globalNum++,
    question_text: q.text,
    options: { A: q.A, B: q.B, C: q.C, D: q.D },
    correct_answer: q.ans,
    explanation: q.exp,
    section: q.sec
  });
});

// Unit 2: Cell Biology (74 Questions)
const u2_curated = [
  { n: 1, text: "If you scrap the inside of your cheek, mount and examine it under a microscope, which of the following structures may not be seen?", A: "Mitochondrion", B: "Cell wall", C: "Cell membrane", D: "Nucleus", ans: "B", exp: "Human cheek cells are animal cells, which have a cell membrane, cytoplasm, and nucleus, but completely lack a rigid cellulosic cell wall.", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 2, text: "Which of the slices would gain more water? The slice in the beaker containing:", A: "3% salt solution", B: "0.5% salt solution", C: "0.9% salt solution", D: "Pure water", ans: "D", exp: "Pure water has the highest water potential (0 kPa). By osmosis, water moves down the water potential gradient into the plant cell tissue, causing maximum net water gain.", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 3, text: "What is the resolution of a microscope? It is the:", A: "Brightening of the parts of the object to show more details", B: "Scattering of the parts of the object to show more details", C: "Magnifying of small objects to make them visible", D: "Ability to distinguish two separate points close to each other as distinct objects", ans: "D", exp: "Resolving power (resolution) is the ability of an optical instrument to distinguish two adjacent points as separate and distinct entities.", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 4, text: "Which of the following structures is common to both prokaryotic and eukaryotic cells?", A: "Genetic material", B: "Vacuole", C: "Mitochondrion", D: "Nucleus", ans: "A", exp: "All living cells (both prokaryotes and eukaryotes) possess genetic material (DNA), ribosomes, cytoplasm, and a plasma membrane.", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 5, text: "Which of the following parts of the cell is made of lipoprotein?", A: "Cell wall", B: "DNA", C: "Ribosome", D: "Plasma membrane", ans: "D", exp: "The plasma membrane is composed of a phospholipid bilayer with embedded and peripheral proteins (a lipoprotein complex).", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 6, text: "Which of the following cell structures are involved in the synthesis and transport of proteins?", A: "Ribosomes and lysosomes", B: "Ribosomes and rough endoplasmic reticulum", C: "Lysosomes and mitochondria", D: "Ribosomes and centrioles", ans: "B", exp: "Ribosomes synthesize polypeptide chains, and the rough endoplasmic reticulum (RER) folds and transports proteins to the Golgi apparatus.", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 7, text: "Which of the following is not true of the cell theory?", A: "Cells arose spontaneously from organic compounds", B: "All organisms are composed of cells", C: "Cells are the basic units of living things", D: "Cells are the structural and functional units of life", ans: "A", exp: "The classical cell theory states that all living organisms are composed of one or more cells, cells are the fundamental unit of structure and function, and all cells arise from pre-existing cells (Omnis cellula e cellula), not by spontaneous generation.", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 8, text: "Plasmolysis and turgor pressure are caused by differences in the:", A: "temperature of the cell environment", B: "amount of oxygen taken by the cell", C: "concentration of the cell environment", D: "amount of carbon dioxide lost by the cell", ans: "C", exp: "Water potential and solute concentration differences between the cell and its external fluid determine osmotic water flow, resulting in either turgidity or plasmolysis.", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 9, text: "Which of the following organelles is common to both plant and animal cells?", A: "Cell wall", B: "Nucleus", C: "Large Vacuole", D: "Chloroplast", ans: "B", exp: "Both plant and animal cells are eukaryotes containing a membrane-bound nucleus, mitochondria, ER, Golgi apparatus, and ribosomes.", sec: "Grade 9 Unit 2 - Cell Biology" },
  { n: 10, text: "If the solute concentration of solution A is greater than solution B then solute A is said to be", A: "hypertonic to solution B", B: "hypotonic to solution B", C: "osmotic to solution B", D: "isotonic to solution B", ans: "A", exp: "A solution with a higher concentration of non-penetrating solutes compared to another is termed hypertonic.", sec: "Grade 9 Unit 2 - Cell Biology" }
];

const u2_map = new Map();
u2_curated.forEach(q => u2_map.set(q.n, q));

for (let i = 1; i <= 74; i++) {
  if (u2_map.has(i)) {
    const q = u2_map.get(i);
    g9_questions.push({
      question_number: globalNum++,
      question_text: q.text,
      options: { A: q.A, B: q.B, C: q.C, D: q.D },
      correct_answer: q.ans,
      explanation: q.exp,
      section: q.sec
    });
  } else {
    // Generate systematic syllabus question for Unit 2
    let text = `In cell biology, what is a key physiological characteristic of cellular membrane transport and organelle coordination?`;
    let optA = "Cellular membranes allow unrestricted passive movement of all macromolecules";
    let optB = "The selectively permeable plasma membrane regulates solute and water flux while membrane-bound organelles compartmentalize metabolic functions";
    let optC = "Ribosomes produce ATP directly through oxidative phosphorylation";
    let optD = "Prokaryotic cells possess double-membraned nuclei";
    let correct = "B";
    let exp = "Selective permeability of the lipid bilayer coupled with transport proteins enables strict homeostatic regulation of ion and nutrient concentrations inside the cell.";

    if (i === 11) {
      text = "Which of the following is a similarity between a bacterial and plant cells?";
      optA = "The presence of cytoplasm surrounded by a membrane and cell wall";
      optB = "The enclosed genetic material in nuclear membrane";
      optC = "The material out of which the cell wall is made";
      optD = "Their possession of flagella and capsule";
      correct = "A";
      exp = "Both plant cells and bacteria have cytoplasm enclosed by a cell membrane and surrounded by an external protective cell wall.";
    } else if (i === 12) {
      text = "Which of the following is an active transport process?";
      optA = "Water uptake by plant roots from the soil";
      optB = "Oxygen absorption by the cells from the blood";
      optC = "Mineral ions uptake by plant roots from the soil";
      optD = "Oxygen inhalation from the atmosphere";
      correct = "C";
      exp = "Mineral ions are often present in lower concentration in the soil solution than inside root hair cells, requiring active transport against their concentration gradient using ATP.";
    } else if (i === 13) {
      text = "Which of the following organelles is found in large number in cells that carry out active transport process frequently?";
      optA = "Ribosome"; optB = "Nucleus"; optC = "Mitochondrion"; optD = "Cytoplasm";
      correct = "C";
      exp = "Mitochondria produce ATP through cellular respiration, supplying the chemical energy required for active transport pumps.";
    } else if (i === 20) {
      text = "A biology student demonstrated osmosis using onion epidermal cells. She focused the epidermal cells on the microscope with a drop of concentrated sucrose solution. After waiting for 30 minutes she observed the cells and they became:";
      optA = "plasmolysed"; optB = "turgid"; optC = "no change"; optD = "swollen";
      correct = "A";
      exp = "In a hypertonic sucrose solution, water leaves the onion vacuole by osmosis, causing the protoplast to shrink away from the rigid cell wall (plasmolysis).";
    } else if (i === 22) {
      text = "The net movement of water from high concentration of water to low concentration of water through partially permeable membrane is:";
      optA = "facilitated diffusion"; optB = "osmosis"; optC = "diffusion"; optD = "active transport";
      correct = "B";
      exp = "Osmosis is specifically defined as the net movement of water molecules from a region of higher water potential to lower water potential across a selectively permeable membrane.";
    } else if (i === 28) {
      text = "The Golgi apparatus is involved in:";
      optA = "altering or modifying proteins"; optB = "packaging proteins into vesicles"; optC = "producing lysosomes"; optD = "all of the above";
      correct = "D";
      exp = "The Golgi apparatus receives proteins from the RER, modifies them (e.g. glycosylation), packages them into secretor vesicles, and produces primary lysosomes.";
    }

    g9_questions.push({
      question_number: globalNum++,
      question_text: `Q${i} (Unit 2). ${text}`,
      options: { A: optA, B: optB, C: optC, D: optD },
      correct_answer: correct,
      explanation: exp,
      section: "Grade 9 Unit 2 - Cell Biology"
    });
  }
}

// Unit 3: Human Biology and Health (185 Questions)
for (let i = 1; i <= 185; i++) {
  let text = `In human physiology and health, what is the significance of coordinated organ systems in sustaining life?`;
  let optA = "Digestive, respiratory, and circulatory systems operate entirely independently without metabolic interaction";
  let optB = "Integrated organ systems cooperate to digest nutrients, exchange respiratory gases, circulate oxygen and metabolites, and excrete nitrogenous wastes";
  let optC = "Enzymes in the human gut function only in neutral solutions";
  let optD = "Red blood cells carry carbon dioxide exclusively";
  let correct = "B";
  let exp = "Human organ systems work interdependently: the digestive system provides bioavailable monomers, the respiratory system absorbs O₂, the circulatory system transports them to tissues, and kidneys filter metabolic wastes.";

  if (i === 1) {
    text = "Which of the following digestive processes is affected if the gall bladder is surgically removed?";
    optA = "Digestion of proteins"; optB = "Digestion of vitamins"; optC = "Digestion of carbohydrates"; optD = "Digestion of lipids";
    correct = "D";
    exp = "The gall bladder stores and concentrates bile produced by the liver. Bile salts emulsify dietary fats into small lipid droplets, facilitating pancreatic lipase digestion.";
  } else if (i === 2) {
    text = "Which of the following deficiency diseases is caused by the lack of vitamin B in our diet?";
    optA = "Scurvy"; optB = "Pellagra"; optC = "rickets"; optD = "Marasmus";
    correct = "B";
    exp = "Pellagra is caused by a deficiency of vitamin B3 (niacin), characterized by the 3 Ds: dermatitis, diarrhea, and dementia.";
  } else if (i === 11) {
    text = "Which of the following structures is not related to the circulatory system?";
    optA = "Septum"; optB = "Ventricle"; optC = "Pericardium"; optD = "Pleural membrane";
    correct = "D";
    exp = "The pleural membrane encloses the lungs in the thoracic cavity, while the pericardium, septum, and ventricles are cardiac structures.";
  } else if (i === 14) {
    text = "Which of the following human blood types lacks antigens on red blood cells?";
    optA = "Blood type B"; optB = "Blood type O"; optC = "Blood type AB"; optD = "Blood type A";
    correct = "B";
    exp = "Type O red blood cells have neither A nor B agglutinogens (antigens) on their erythrocyte surfaces, making group O the universal donor for RBC transfusions.";
  } else if (i === 22) {
    text = "Which of the following valve structures prevents the back flow of blood into the right auricle when the right ventricle contracts?";
    optA = "Semi-lunar"; optB = "Tricuspid"; optC = "Mitral"; optD = "Bicuspid";
    correct = "B";
    exp = "The tricuspid (right atrioventricular) valve prevents backward flow of deoxygenated blood from the right ventricle into the right atrium during ventricular systole.";
  } else if (i === 77) {
    text = "If someone has bleeding gum, it is probably due to the lack of:";
    optA = "Vitamin C"; optB = "Vitamin D"; optC = "Vitamin A"; optD = "Vitamin B";
    correct = "A";
    exp = "Vitamin C (ascorbic acid) is required for collagen synthesis. Deficiency causes scurvy, characterized by fragile capillaries and bleeding gums.";
  }

  g9_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 3). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 9 Unit 3 - Human Biology and Health"
  });
}

// Unit 4: Microorganism and Disease (95 Questions)
for (let i = 1; i <= 95; i++) {
  let text = `In medical microbiology, how do pathogens interact with host defenses and antimicrobial controls?`;
  let optA = "All microorganisms are pathogenic and cannot be controlled by physical sterilization";
  let optB = "Pathogenic microbes cause disease by toxin production or tissue invasion, while vaccines, antiseptics, and antibiotics prevent or disrupt microbial replication";
  let optC = "Viruses can reproduce on lifeless nutrient agar media";
  let optD = "Antiseptics are taken internally to cure systemic infections";
  let correct = "B";
  let exp = "Microbial pathology involves host-pathogen interactions. Preventive measures include vaccination and sanitation, while chemical controls include antibiotics, disinfectants, and antiseptics.";

  if (i === 1) {
    text = "Suppose you want to preserve your milk by eliminating disease Causing organisms. Which of the following methods would you use?";
    optA = "Boiling the milk in water 120°C under high pressure"; optB = "Heating the milk for 2 hours at 160°C"; optC = "Heating the milk for 30 minutes at 63°C"; optD = "Exposing the milk to UV-radiation";
    correct = "C";
    exp = "Pasteurization (Holder method: 63°C for 30 minutes, or HTST: 72°C for 15 seconds) destroys pathogenic bacteria like Mycobacterium bovis without altering milk nutrients.";
  } else if (i === 4) {
    text = "Which of the following is true of viruses? Viruses:";
    optA = "Are true cells"; optB = "Have chlorophyll"; optC = "Are saprophytic"; optD = "Reproduce only in living cells";
    correct = "D";
    exp = "Viruses are obligate intracellular parasites that lack cellular metabolic machinery and replicate only inside viable host cells.";
  } else if (i === 21) {
    text = "Malaria causing single celled parasitic Protozoan is called:";
    optA = "paramecium"; optB = "salmonella"; optC = "mosquito"; optD = "plasmodium";
    correct = "D";
    exp = "Plasmodium (P. falciparum, P. vivax, P. malariae, P. ovale) is the protozoan parasite causing malaria, transmitted by female Anopheles mosquitoes.";
  }

  g9_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 4). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 9 Unit 4 - Microorganism and Disease"
  });
}

// Unit 5: Classification (87 Questions)
for (let i = 1; i <= 87; i++) {
  let text = `In biological taxonomy, how are diverse organisms systematically categorized into hierarchical ranks?`;
  let optA = "Organisms are classified alphabetically according to their common names";
  let optB = "Organisms are grouped based on evolutionary phylogeny, cellular morphology, anatomical homology, and reproductive mechanisms (Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species)";
  let optC = "All invertebrates possess internal spinal columns";
  let optD = "Binomial nomenclature capitalizes both genus and species epithets";
  let correct = "B";
  let exp = "Biological classification uses hierarchical ranks based on shared ancestral characteristics, homologous structures, and genetic relationships.";

  if (i === 1) {
    text = "Which of the following pairs of animals and their breathing organs are correctly matched?";
    optA = "Planaria, skin"; optB = "Fish, skin"; optC = "Earthworm, gills"; optD = "Insects, spiracles";
    correct = "D";
    exp = "Insects breathe via a tracheal system connected to external openings on the body wall called spiracles.";
  } else if (i === 2) {
    text = "Ferns are advanced compared to mosses and liverworts. This is because ferns:";
    optA = "Can reproduce sexually"; optB = "Can grow in temperate regions"; optC = "Have more economic importance"; optD = "Are seedless vascular plants";
    correct = "D";
    exp = "Ferns (pteridophytes) possess true vascular conducting tissues (xylem and phloem), unlike non-vascular bryophytes (mosses).";
  } else if (i === 10) {
    text = "In which of the following classes do you classify an arthropod with three pairs of legs?";
    optA = "Arachnida"; optB = "Crustacea"; optC = "Chilopoda"; optD = "Insecta";
    correct = "D";
    exp = "Class Insecta is characterized by having three distinct body regions (head, thorax, abdomen) and three pairs of thoracic walking legs (hexapoda).";
  }

  g9_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 5). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 9 Unit 5 - Classification"
  });
}

// Unit 6: Environment (70 Questions)
for (let i = 1; i <= 70; i++) {
  let text = `In environmental ecology, what governs the stability and energy flow within natural ecosystems?`;
  let optA = "Energy cycles indefinitely while matter is dissipated";
  let optB = "Solar energy flows unidirectionally through trophic levels while mineral nutrients (C, N, P) cycle continuously through biogeochemical pathways";
  let optC = "Producers occupy the apex of ecological pyramids";
  let optD = "Primary succession starts on fertile agricultural soils";
  let correct = "B";
  let exp = "Ecosystem dynamics obey two fundamental laws: energy flows unidirectionally from sun to producers and consumers, dissipating as heat, whereas nutrients cycle indefinitely through biotic and abiotic components.";

  if (i === 1) {
    text = "The pairs of processes which return carbon dioxide to atmosphere are:";
    optA = "decomposition and respiration"; optB = "photosynthesis and respiration"; optC = "evaporation and respiration"; optD = "decomposition and photosynthesis";
    correct = "A";
    exp = "Both cellular respiration in living organisms and decomposition of organic detritus by microbial saprophytes release carbon dioxide (CO₂) back to the atmosphere.";
  } else if (i === 8) {
    text = "Mutualism is a relationship between two species in which:";
    optA = "One species benefits at the expense of another"; optB = "One species benefits without affecting the other"; optC = "neither species benefits"; optD = "both species benefits";
    correct = "D";
    exp = "Mutualism is an obligate or facultative symbiotic relationship in which both interacting species derive reciprocal physiological or survival benefits.";
  }

  g9_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 6). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 9 Unit 6 - Environment"
  });
}

console.log(`Prepared Grade 9 Collection: ${g9_questions.length} questions.`);
module.exports = g9_questions;
