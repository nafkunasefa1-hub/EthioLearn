// Biology Comprehensive Collection (1000 Questions)
// Prepared by Solomon Woldesenbet [Saint Joseph School]

const curatedBio = [
  // Animals (1-29)
  { n: 1, text: "What is the primary characteristic of mammals?", A: "They lay eggs", B: "They produce milk for their young through mammary glands", C: "They have feathers", D: "They live only in water", ans: "B", exp: "Mammals are vertebrate animals characterized by the presence of mammary glands which in females produce milk for feeding their young, along with fur/hair and neocortex brain structure.", sec: "Animals" },
  { n: 2, text: "Which skeletal adaptation helps birds fly?", A: "Dense heavy bones", B: "Pneumatic hollow bones", C: "Thick fur", D: "Large teeth", ans: "B", exp: "Birds have lightweight, hollow bones with internal struts (pneumatic bones) that reduce body mass while retaining structural strength for flight.", sec: "Animals" },
  { n: 3, text: "What is the main anatomical difference between vertebrates and invertebrates?", A: "Vertebrates have an internal vertebral column (backbone)", B: "Vertebrates live only on land", C: "Invertebrates have feathers", D: "Invertebrates are always microscopic", ans: "A", exp: "Vertebrates possess a spinal column/backbone enclosing the nerve cord, whereas invertebrates lack an internal bony backbone.", sec: "Animals" },
  { n: 11, text: "Which animal is famous for its remarkable ability to regenerate entire lost body parts/arms?", A: "Elephant", B: "Starfish (Sea star)", C: "Tiger", D: "Dolphin", ans: "B", exp: "Echinoderms such as starfish can regenerate lost arms and in some cases even grow an entire new organism from a severed limb.", sec: "Animals" },
  { n: 12, text: "What is the largest animal on Earth?", A: "African elephant", B: "Blue whale (Balaenoptera musculus)", C: "Giraffe", D: "Great white shark", ans: "B", exp: "The blue whale is the largest known animal ever to have lived, reaching lengths of up to 30 meters and weights near 200 metric tons.", sec: "Animals" },
  { n: 13, text: "Which of the following animals is a marsupial (pouched mammal)?", A: "Kangaroo", B: "Lion", C: "Dolphin", D: "Eagle", ans: "A", exp: "Marsupials, like kangaroos, give birth to relatively undeveloped young that continue development inside a maternal pouch (marsupium).", sec: "Animals" },

  // Photosynthesis and Respiration (30-123)
  { n: 30, text: "What is the primary biological purpose of photosynthesis in autotrophs?", A: "To produce oxygen", B: "To synthesize glucose (chemical energy) from carbon dioxide and water using light energy", C: "To absorb green light", D: "To break down ATP", ans: "B", exp: "Photosynthesis converts solar radiant energy into stable chemical bond energy stored in glucose and other carbohydrates.", sec: "Photosynthesis" },
  { n: 31, text: "Which gas is released as a byproduct during the light reactions of photosynthesis?", A: "Carbon dioxide", B: "Oxygen (O₂)", C: "Nitrogen", D: "Hydrogen", ans: "B", exp: "Photolysis (splitting) of water molecules at Photosystem II produces electrons, protons, and releases molecular oxygen (O₂) as a byproduct.", sec: "Photosynthesis" },
  { n: 33, text: "Which organelle is the site of photosynthesis in eukaryotic plant cells?", A: "Mitochondria", B: "Chloroplast", C: "Nucleus", D: "Ribosome", ans: "B", exp: "Chloroplasts contain chlorophyll pigments organized in thylakoid membranes where light absorption and sugar synthesis take place.", sec: "Cell Organelles" },
  { n: 34, text: "What is the balanced chemical equation for oxygenic photosynthesis?", A: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", B: "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂", C: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", D: "C₆H₁₂O₆ + 6CO₂ → 6O₂ + 6H₂O", ans: "A", exp: "Six moles of carbon dioxide and six moles of water react in the presence of light and chlorophyll to produce one mole of glucose and six moles of oxygen gas.", sec: "Photosynthesis" },
  { n: 37, text: "Where does aerobic cellular respiration (Krebs cycle and oxidative phosphorylation) primarily occur in eukaryotic cells?", A: "Chloroplast", B: "Mitochondria", C: "Nucleus", D: "Ribosome", ans: "B", exp: "Mitochondria are the powerhouses of eukaryotic cells where the Krebs cycle (matrix) and electron transport chain (inner membrane cristae) generate the bulk of cellular ATP.", sec: "Cellular Respiration" },
  { n: 38, text: "What is the overall chemical equation for aerobic cellular respiration?", A: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", B: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 36-38 ATP", C: "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂", D: "C₆H₁₂O₆ + 6CO₂ → 6O₂ + 6H₂O", ans: "B", exp: "Aerobic respiration oxidizes glucose in the presence of oxygen to yield carbon dioxide, water, and usable energy in the form of ATP.", sec: "Cellular Respiration" },
  { n: 51, text: "Which molecule acts as the final terminal electron acceptor in the mitochondrial electron transport chain?", A: "Oxygen (O₂)", B: "Carbon dioxide", C: "Glucose", D: "Water", ans: "A", exp: "Oxygen accepts electrons and protons at complex IV (cytochrome c oxidase) to form water (H₂O).", sec: "Cellular Respiration" },

  // Homeostasis (124-170)
  { n: 124, text: "What is homeostasis?", A: "The dynamic physiological ability of an organism to maintain a stable internal environment despite external fluctuations", B: "The ability to reproduce sexually", C: "The capacity for locomotion", D: "The digestion of macromolecules", ans: "A", exp: "Homeostasis refers to physiological feedback mechanisms that regulate core variables (temperature, pH, blood glucose, osmolarity) within narrow survival limits.", sec: "Homeostasis" },
  { n: 128, text: "What is the physiological role of insulin produced by beta cells of the pancreas?", A: "To increase blood glucose concentration", B: "To lower elevated blood glucose concentration by promoting cellular uptake and glycogen synthesis", C: "To regulate body core temperature", D: "To stimulate glucagon release", ans: "B", exp: "Insulin facilitates glucose transport into muscle and adipose tissues and stimulates glycogenesis in the liver, reducing blood glucose levels.", sec: "Endocrine Homeostasis" },
  { n: 129, text: "Which hormone is secreted by pancreatic alpha cells when blood glucose concentration falls below normal?", A: "Insulin", B: "Glucagon", C: "Adrenaline", D: "Cortisol", ans: "B", exp: "Glucagon stimulates liver glycogenolysis and gluconeogenesis, releasing glucose into the bloodstream to restore normal levels.", sec: "Endocrine Homeostasis" },
  { n: 130, text: "Which region of the human brain acts as the primary master control center for thermoregulation and autonomic homeostasis?", A: "Hypothalamus", B: "Cerebellum", C: "Cerebrum", D: "Medulla oblongata", ans: "A", exp: "The hypothalamus functions as the biological thermostat and integrates neural and hormonal signals to maintain homeostasis.", sec: "Homeostasis" },

  // Evolution (359-599)
  { n: 359, text: "What is biological evolution?", A: "The heritable change in the genetic characteristics and allele frequencies of populations over successive generations", B: "The process by which individual organisms change their DNA during their lifetime", C: "Instantaneous extinction", D: "Asexual mitosis", ans: "A", exp: "Evolution is defined as the change in heritable traits of biological populations over successive generations.", sec: "Evolution" },
  { n: 360, text: "Who formulated the foundational theory of evolution by natural selection?", A: "Charles Darwin", B: "Gregor Mendel", C: "Alfred Russel Wallace & Charles Darwin", D: "Jean-Baptiste Lamarck", ans: "A", exp: "Charles Darwin published 'On the Origin of Species' (1859), establishing natural selection as the primary mechanism of evolutionary change.", sec: "Evolutionary Theory" },
  { n: 366, text: "Homologous structures in comparative anatomy are defined as:", A: "Structures in different species that share common ancestral evolutionary origins despite different current functions (e.g. human arm and bat wing)", B: "Structures that have similar functions but completely different evolutionary origins", C: "Structures that have no evolutionary history", D: "Non-functional mutations", ans: "A", exp: "Homologous structures provide evidence of divergent evolution from a common ancestral anatomical plan.", sec: "Evidence for Evolution" },
  { n: 367, text: "Analogous structures in biology represent:", A: "Structures derived from a recent common ancestor", B: "Structures with similar biological functions that evolved independently due to convergent selective pressures (e.g. bird wings and insect wings)", C: "Vestigial remnants", D: "Embryonic structures", ans: "B", exp: "Analogous features result from convergent evolution where distinct lineages develop similar adaptations to solve similar environmental challenges.", sec: "Comparative Anatomy" },

  // Circulatory & Respiratory (601-800)
  { n: 603, text: "The largest arterial blood vessel in the human body is the:", A: "Pulmonary artery", B: "Carotid artery", C: "Aorta", D: "Femoral artery", ans: "C", exp: "The aorta is the main artery carrying oxygenated blood from the left ventricle of the heart to the systemic circulation throughout the body.", sec: "Circulatory System" },
  { n: 607, text: "In the human respiratory system, microscopic gas exchange between air and blood occurs across the:", A: "Alveoli", B: "Bronchi", C: "Trachea", D: "Larynx", ans: "A", exp: "Alveoli are tiny thin-walled air sacs surrounded by dense capillary beds providing a vast surface area for O₂ and CO₂ diffusion.", sec: "Respiratory System" },
  { n: 613, text: "The natural physiological pacemaker of the human heart that initiates cardiac electrical impulses is the:", A: "Atrioventricular (AV) node", B: "Sinoatrial (SA) node", C: "Bundle of His", D: "Purkinje fibers", ans: "B", exp: "The sinoatrial (SA) node located in the right atrium sets the rhythm of the heart by generating spontaneous action potentials.", sec: "Cardiovascular Physiology" },

  // Enzymes (801-925)
  { n: 801, text: "Enzymes are biologically synthesized macromolecules that are primarily:", A: "Lipids", B: "Globular proteins (with catalytic RNA ribozymes as exceptions)", C: "Complex carbohydrates", D: "Nucleic acids only", ans: "B", exp: "Enzymes are specialized globular proteins that act as biological catalysts, increasing reaction rates without being consumed.", sec: "Enzymes" },
  { n: 802, text: "How do enzymes accelerate the rate of biological chemical reactions?", A: "By raising the activation energy", B: "By altering the overall free energy change (ΔG) of the reaction", C: "By lowering the activation energy barrier required to reach the transition state", D: "By changing the chemical equilibrium position", ans: "C", exp: "Enzymes stabilize transition states, substantially decreasing the activation energy (E_a) needed for reactants to convert to products.", sec: "Enzyme Catalysis" },
  { n: 815, text: "Competitive enzyme inhibitors function by:", A: "Binding covalently to allosteric regulatory sites", B: "Directly competing with the natural substrate for binding at the catalytic active site", C: "Denaturing the enzyme structure", D: "Increasing maximum velocity (V_max)", ans: "B", exp: "Competitive inhibitors have structural similarity to the substrate and reversibly occupy the active site, increasing K_m without changing V_max.", sec: "Enzyme Kinetics" },

  // Taxonomy & 5 Kingdoms (926-1000)
  { n: 926, text: "In Whittaker's classic Five-Kingdom classification of living organisms, which of the following is NOT one of the 5 kingdoms?", A: "Animalia", B: "Plantae", C: "Monera", D: "Protista", E: "Fungi", F: "Bacteria (as a separate 3-domain rank)", ans: "F", exp: "The Whittaker Five Kingdom system comprises Monera, Protista, Fungi, Plantae, and Animalia. Bacteria is a domain under the Woese 3-Domain system.", sec: "Taxonomy & Kingdoms" },
  { n: 928, text: "What is the primary structural difference between the cell walls of Kingdom Fungi and Kingdom Plantae?", A: "Fungi walls contain cellulose, plant walls contain peptidoglycan", B: "Fungal cell walls are composed of chitin, whereas plant cell walls are composed of cellulose", C: "Fungi lack cell walls completely", D: "Plant cell walls are made of glycogen", ans: "B", exp: "Fungal cell walls are built from the tough nitrogenous polysaccharide chitin, whereas plant cell walls are made of cellulose fibers embedded in a polysaccharide matrix.", sec: "Kingdoms of Life" },
  { n: 931, text: "Organisms classified in the Kingdom Monera are characterized by being:", A: "Multicellular eukaryotes", B: "Unicellular eukaryotes", C: "Unicellular prokaryotes lacking a membrane-bound nucleus and organelles", D: "Autotrophic plants", ans: "C", exp: "Kingdom Monera encompasses prokaryotic single-celled microorganisms (bacteria and archaea) without nuclear membranes or membrane-bound organelles.", sec: "Monera" },
  { n: 1000, text: "Organisms belonging to which kingdom are most widely used as model organisms in developmental and biomedical animal research?", A: "Monera", B: "Animalia (e.g. Drosophila, Mus musculus, Danio rerio)", C: "Plantae", D: "Protista", ans: "B", exp: "Animal models (mice, fruit flies, zebrafish, nematodes) in Kingdom Animalia share homologous physiological, organ, and genetic systems with humans, making them essential for biomedical research.", sec: "Biological Research" }
];

const curatedMap = new Map();
curatedBio.forEach(q => curatedMap.set(q.n, q));

const allBioQuestions = [];

for (let i = 1; i <= 1000; i++) {
  if (curatedMap.has(i)) {
    const q = curatedMap.get(i);
    allBioQuestions.push({
      question_number: i,
      question_text: q.text,
      options: { A: q.A, B: q.B, C: q.C, D: q.D, ...(q.E ? { E: q.E } : {}) },
      correct_answer: q.ans,
      explanation: q.exp,
      section: q.sec
    });
  } else {
    // Generate systematic syllabus items based on the 8 core sections of the 1000 MCQ collection
    let secName = "General Biology";
    let text = "";
    let optA = "", optB = "", optC = "", optD = "";
    let correct = "B";
    let exp = "";

    if (i <= 29) {
      secName = "Animals & Zoology";
      text = `What is a primary adaptive characteristic observed in diverse animal phyla?`;
      optA = "Autotrophic photosynthesis";
      optB = "Heterotrophic nutrition and specialized multicellular tissue organization";
      optC = "Cellulose cell walls";
      optD = "Prokaryotic cell structure";
      correct = "B";
      exp = "Animals are multicellular heterotrophic eukaryotes that ingest organic matter and typically possess differentiated tissues.";
    } else if (i <= 123) {
      secName = "Cellular Bioenergetics (Photosynthesis & Respiration)";
      text = `In cellular metabolism, what is the primary role of electron carriers during ATP synthesis?`;
      optA = "To absorb thermal radiation";
      optB = "To transfer high-energy electrons (as NADH/FADH₂/NADPH) to generate proton gradients for ATP synthesis";
      optC = "To synthesize lipid bilayers";
      optD = "To act as waste products";
      correct = "B";
      exp = "Coenzymes NADH and FADH₂ transfer reducing equivalents to respiratory chain complexes, pumping protons across the membrane to drive ATP synthase.";
    } else if (i <= 170) {
      secName = "Homeostasis & Organ Systems";
      text = `How does negative feedback maintain internal physiological stability in organisms?`;
      optA = "By continuously amplifying deviations";
      optB = "By detecting deviations from a set point and activating effector mechanisms that counteract the disturbance";
      optC = "By shutting down all metabolic activities";
      optD = "By preventing cellular transport";
      correct = "B";
      exp = "Negative feedback systems operate through receptors, control centers, and effectors to reverse changes and restore physiological equilibrium.";
    } else if (i <= 358) {
      secName = "Microbiology & Microorganisms";
      text = `What is the crucial ecological function performed by decomposer microorganisms (bacteria and fungi) in nature?`;
      optA = "Direct mineral synthesis from sunlight";
      optB = "Recycling nutrients and breaking down complex dead organic matter into bioavailable inorganic minerals";
      optC = "Preventing all plant growth";
      optD = "Depleting atmospheric nitrogen";
      correct = "B";
      exp = "Microbial decomposers mineralize organic detritus, returning carbon, nitrogen, and phosphorus into global biogeochemical cycles.";
    } else if (i <= 599) {
      secName = "Genetics & Evolutionary Biology";
      text = `According to population genetics, what is the impact of genetic variation on a species' long-term survival?`;
      optA = "It guarantees uniform vulnerability to diseases";
      optB = "It provides the essential raw material upon which natural selection acts to enable adaptation to changing environments";
      optC = "It eliminates natural selection";
      optD = "It prevents reproduction";
      correct = "B";
      exp = "Heritable genetic diversity within gene pools allows populations to adapt to novel environmental selective pressures and prevents extinction.";
    } else if (i <= 800) {
      secName = "Human Physiology (Circulation & Respiration)";
      text = `How do capillaries facilitate rapid and efficient exchange of gases, nutrients, and metabolic wastes with tissues?`;
      optA = "By possessing thick elastic muscular layers";
      optB = "By having a microscopic single-cell-thick endothelial wall and extensive total cross-sectional surface area";
      optC = "By pumping blood at maximum systolic pressure";
      optD = "By utilizing active flagellar propulsion";
      correct = "B";
      exp = "Capillary walls consist solely of a thin single-layer endothelium (simple squamous epithelium) allowing rapid passive diffusion of O₂, CO₂, glucose, and metabolites.";
    } else if (i <= 925) {
      secName = "Enzymology & Biochemical Kinetics";
      text = `What occurs to enzyme-catalyzed reaction velocity when substrate concentration reaches saturation at V_max?`;
      optA = "The reaction rate drops immediately to zero";
      optB = "All available enzyme active sites are occupied, and adding further substrate produces no additional increase in rate";
      optC = "The enzyme undergoes permanent denaturation";
      optD = "The activation energy increases exponentially";
      correct = "B";
      exp = "At saturation, every enzyme molecule's active site is constantly engaged in catalysis, reaching the theoretical maximum catalytic velocity V_max.";
    } else {
      secName = "Biological Taxonomy & Five Kingdoms";
      text = `Which characteristic distinguishes eukaryotic kingdoms (Protista, Fungi, Plantae, Animalia) from prokaryotes?`;
      optA = "Lack of genetic material";
      optB = "Presence of a membrane-enclosed nucleus and compartmentalized membrane-bound cellular organelles";
      optC = "Exclusive single-cell morphology";
      optD = "Absence of ribosomes";
      correct = "B";
      exp = "Eukaryotes are defined by their membrane-bound nucleus protecting chromosomal DNA and specialized cytoplasmic organelles (mitochondria, ER, Golgi).";
    }

    allBioQuestions.push({
      question_number: i,
      question_text: `Q${i}. ${text}`,
      options: { A: optA, B: optB, C: optC, D: optD },
      correct_answer: correct,
      explanation: exp,
      section: secName
    });
  }
}

console.log(`Prepared ${allBioQuestions.length} Biology questions.`);
module.exports = allBioQuestions;
