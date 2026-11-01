/**
 * Grade 10 Biology Final Exam for Boarding and Non-Boarding (Special) Schools, January 2016/2024
 * 60 Questions extracted directly from the official examination paper with comprehensive explanations.
 */

const questions = [
  {
    question_number: 1,
    question_text: "Which one is quite different from the others?",
    option_a: "Poultry",
    option_b: "Biotechnology",
    option_c: "Genetics",
    option_d: "Tissue culture",
    options: ["Poultry", "Biotechnology", "Genetics", "Tissue culture"],
    correct_answer: "A",
    explanation: "Poultry refers to animal husbandry (raising domesticated birds for meat or eggs), which is a conventional agricultural practice. Biotechnology, genetics, and tissue culture are advanced modern biological sciences and molecular/cellular techniques.",
    topic_name: "Sub-disciplines of Biology & Biotechnology",
    instruction_category: "General Biology"
  },
  {
    question_number: 2,
    question_text: "The field of biology that is concerned with storage and analysis of biological data is called____________.",
    option_a: "Genetic engineering",
    option_b: "Tissue engineering",
    option_c: "Bioinformatics",
    option_d: "Biotechnology",
    options: ["Genetic engineering", "Tissue engineering", "Bioinformatics", "Biotechnology"],
    correct_answer: "C",
    explanation: "Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data, especially when data sets are large and complex, such as DNA sequences and protein structures.",
    topic_name: "Bioinformatics & Computational Biology",
    instruction_category: "Biological Sciences"
  },
  {
    question_number: 3,
    question_text: "The discovery of the structure of DNA is associated to which of the following scientists?",
    option_a: "Wilmut",
    option_b: "Watson and Crick",
    option_c: "Brabara McClintock",
    option_d: "Lous Pasteur",
    options: ["Wilmut", "Watson and Crick", "Brabara McClintock", "Lous Pasteur"],
    correct_answer: "B",
    explanation: "James Watson and Francis Crick proposed the double helix structure of the DNA molecule in 1953 based on X-ray diffraction data by Rosalind Franklin and Maurice Wilkins.",
    topic_name: "DNA Structure & Molecular Genetics",
    instruction_category: "Genetics"
  },
  {
    question_number: 4,
    question_text: "A cancerous tissue can be identified by:",
    option_a: "Histology",
    option_b: "Ecology",
    option_c: "Evolution",
    option_d: "Parasitology",
    options: ["Histology", "Ecology", "Evolution", "Parasitology"],
    correct_answer: "A",
    explanation: "Histology is the microscopic study of the structure of biological tissues. Histopathology specifically examines diseased or cancerous tissues to observe abnormal cell proliferation and architecture.",
    topic_name: "Tissue Biology & Histology",
    instruction_category: "Cytology & Histology"
  },
  {
    question_number: 5,
    question_text: "One of the following has something to do with the work of Louis Pasteur.",
    option_a: "Vaccine development",
    option_b: "Inheritance of traits",
    option_c: "Cloning",
    option_d: "Evolution",
    options: ["Vaccine development", "Inheritance of traits", "Cloning", "Evolution"],
    correct_answer: "A",
    explanation: "Louis Pasteur made groundbreaking discoveries in vaccination (developing rabies and anthrax vaccines), microbial fermentation, and pasteurization, establishing the germ theory of disease.",
    topic_name: "History of Biology & Immunology",
    instruction_category: "Microbiology"
  },
  {
    question_number: 6,
    question_text: "Which one of the following does not have positive impact on agricultural production?",
    option_a: "Genetic Diversity",
    option_b: "Biodiversity",
    option_c: "Deforestation",
    option_d: "Plantation",
    options: ["Genetic Diversity", "Biodiversity", "Deforestation", "Plantation"],
    correct_answer: "C",
    explanation: "Deforestation leads to severe soil erosion, loss of topsoil nutrients, disruption of the water cycle, and loss of beneficial species, having a major negative impact on agricultural productivity and ecosystems.",
    topic_name: "Ecology & Agricultural Environment",
    instruction_category: "Ecology"
  },
  {
    question_number: 7,
    question_text: "Which of the following part flower structure is incorrectly matched with its description?",
    option_a: "Sepal –leaf like structure protecting male and female parts",
    option_b: "Stamen –consisting of filaments and bilobed anther",
    option_c: "Anther- mostly coloured part which attract insects for pollination",
    option_d: "Pistil – female part consisting with ovule ,style and stigma",
    options: [
      "Sepal –leaf like structure protecting male and female parts",
      "Stamen –consisting of filaments and bilobed anther",
      "Anther- mostly coloured part which attract insects for pollination",
      "Pistil – female part consisting with ovule ,style and stigma"
    ],
    correct_answer: "C",
    explanation: "The brightly coloured parts that attract pollinators are the petals (corolla), not the anther. The anther is the terminal pollen-bearing part of the stamen.",
    topic_name: "Plant Reproduction & Floral Anatomy",
    instruction_category: "Plant Biology"
  },
  {
    question_number: 8,
    question_text: "Select the one not essential for seed germination.",
    option_a: "Oxygen",
    option_b: "Carbon dioxide",
    option_c: "Temperature",
    option_d: "Water",
    options: ["Oxygen", "Carbon dioxide", "Temperature", "Water"],
    correct_answer: "B",
    explanation: "Seed germination fundamentally requires Water (for enzymatic activation and imbibition), Oxygen (for aerobic respiration generating ATP), and suitable Temperature. Carbon dioxide is used in photosynthesis after green leaves emerge, not during seed germination.",
    topic_name: "Plant Physiology & Seed Germination",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 9,
    question_text: "Between the wave lengths of 500-600nm, which of the following is the most reflected color in higher plant leaves?",
    option_a: "Blue",
    option_b: "Red",
    option_c: "Green",
    option_d: "Yellow",
    options: ["Blue", "Red", "Green", "Yellow"],
    correct_answer: "C",
    explanation: "Chlorophyll pigments absorb light strongly in the blue (400-500 nm) and red (600-700 nm) regions while reflecting the green wavelengths (500-560 nm), which gives plant leaves their characteristic green colour.",
    topic_name: "Photosynthesis & Light Absorption",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 10,
    question_text: "Indole acetic acid cannot be applied for the following, which one?",
    option_a: "Rooting",
    option_b: "Cutting and propagation",
    option_c: "Adventitious rooting",
    option_d: "Seed dormancy",
    options: ["Rooting", "Cutting and propagation", "Adventitious rooting", "Seed dormancy"],
    correct_answer: "D",
    explanation: "Indole-3-acetic acid (IAA) is an auxin that promotes cell elongation, apical dominance, and adventitious root initiation in stem cuttings. Seed dormancy is primarily maintained and regulated by abscisic acid (ABA), not auxin.",
    topic_name: "Plant Hormones & Growth Regulators",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 11,
    question_text: "When a stem of a plant is cut and planted in soil media in pot, which of the following does not happen?",
    option_a: "Welting",
    option_b: "Immediate flowering",
    option_c: "Rooting if appropriate nutrients are supplied",
    option_d: "Certainly, the plant cannot survive",
    options: [
      "Welting",
      "Immediate flowering",
      "Rooting if appropriate nutrients are supplied",
      "Certainly, the plant cannot survive"
    ],
    correct_answer: "B",
    explanation: "A newly cut stem lacks an established root system to supply water and energy for the high energetic demands of immediate flowering. It first experiences wilting and needs to establish adventitious roots before vegetative or reproductive growth can resume.",
    topic_name: "Vegetative Propagation & Plant Development",
    instruction_category: "Plant Biology"
  },
  {
    question_number: 12,
    question_text: "Before conducting starch testing on green leaf, leaf has to be boiled. Why?",
    option_a: "To convert polysaccharides to simple sugar",
    option_b: "To remove simple sugars",
    option_c: "To remove chlorophyll",
    option_d: "To remove proteins",
    options: [
      "To convert polysaccharides to simple sugar",
      "To remove simple sugars",
      "To remove chlorophyll",
      "To remove proteins"
    ],
    correct_answer: "C",
    explanation: "Boiling the leaf in water kills the cells and breaks cell membranes, and subsequently boiling it in ethanol extracts and removes the green chlorophyll pigment (decolorizing the leaf) so that the color change with iodine reagent can be clearly observed.",
    topic_name: "Photosynthesis & Starch Testing",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 13,
    question_text: "Why leaf of flowering plants is green?",
    option_a: "Because green wave length of the visible light is the wave length reflected",
    option_b: "Because green wave length is the most reflected wave length on roots",
    option_c: "Green wave length is within the range of invisible light",
    option_d: "Blue wave length is the most reflected wave length on leaf",
    options: [
      "Because green wave length of the visible light is the wave length reflected",
      "Because green wave length is the most reflected wave length on roots",
      "Green wave length is within the range of invisible light",
      "Blue wave length is the most reflected wave length on leaf"
    ],
    correct_answer: "A",
    explanation: "Leaves appear green because chlorophyll a and b absorb light in the blue-violet and red regions of the visible spectrum and transmit or reflect the green wavelengths of light back to our eyes.",
    topic_name: "Plant Pigments & Light Spectrum",
    instruction_category: "Plant Biology"
  },
  {
    question_number: 14,
    question_text: "What is the most serious effect if the soil temperature is at freezing point for a seed sawed in it.",
    option_a: "Germination is not affected",
    option_b: "Oxygen supply could be disrupted",
    option_c: "Enzyme activities could be arrested",
    option_d: "The seed could be suffocated",
    options: [
      "Germination is not affected",
      "Oxygen supply could be disrupted",
      "Enzyme activities could be arrested",
      "The seed could be suffocated"
    ],
    correct_answer: "C",
    explanation: "At freezing temperatures, the kinetic energy of molecules is extremely low, inactivating or arresting metabolic enzyme activities needed to hydrolyze stored food reserves and drive cellular respiration during germination.",
    topic_name: "Seed Germination & Environmental Factors",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 15,
    question_text: "Which one of the following cannot be applied to break dormancy and facilitate germination?",
    option_a: "Treatment of seed with warm water",
    option_b: "Chipping of seed coat",
    option_c: "Threshing",
    option_d: "Incineration",
    options: [
      "Treatment of seed with warm water",
      "Chipping of seed coat",
      "Threshing",
      "Incineration"
    ],
    correct_answer: "D",
    explanation: "Incineration involves burning the seed to ashes, which destroys the living embryo. Methods to break seed coat dormancy (scarification) include warm water soaking, mechanical scratching/chipping, or threshing.",
    topic_name: "Seed Dormancy & Scarification",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 16,
    question_text: "How do you distinguish a root from underground stem?",
    option_a: "Absence of root cap",
    option_b: "Presence of terminal bud",
    option_c: "Presence of adventitious roots",
    option_d: "Absence of buds on the nodes",
    options: [
      "Absence of root cap",
      "Presence of terminal bud",
      "Presence of adventitious roots",
      "Absence of buds on the nodes"
    ],
    correct_answer: "D",
    explanation: "Stems possess nodes, internodes, and auxiliary/terminal buds. Roots lack nodes and buds entirely. Therefore, the absence of buds and nodes distinguishes true roots from underground modified stems (like rhizomes or tubers).",
    topic_name: "Plant Morphology & Anatomy",
    instruction_category: "Plant Biology"
  },
  {
    question_number: 17,
    question_text: "Which of the following could not help you reduce transpiration?",
    option_a: "Surplus watering",
    option_b: "Covering the plant with transparent and porous plastic",
    option_c: "Keeping the plant on pot in well aerated and ventilated place",
    option_d: "Keeping the plant on pot under shade",
    options: [
      "Surplus watering",
      "Covering the plant with transparent and porous plastic",
      "Keeping the plant on pot in well aerated and ventilated place",
      "Keeping the plant on pot under shade"
    ],
    correct_answer: "C",
    explanation: "Placing a plant in a well-aerated and ventilated (windy) location removes the humid boundary layer around the leaves, steepening the water vapor concentration gradient and increasing the transpiration rate rather than reducing it.",
    topic_name: "Transpiration & Water Loss",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 18,
    question_text: "Why do you think Ethiopia could be a potential source of many plant products for the treatment of many diseases?",
    option_a: "Due to its ample source of plant species",
    option_b: "Because of its location on the globe",
    option_c: "Due to extinction of many plant species",
    option_d: "Due to the fact that Ethiopia is mainly a highland country",
    options: [
      "Due to its ample source of plant species",
      "Because of its location on the globe",
      "Due to extinction of many plant species",
      "Due to the fact that Ethiopia is mainly a highland country"
    ],
    correct_answer: "A",
    explanation: "Ethiopia is one of the world's Vavilov biodiversity centers, possessing immense agro-ecological and botanical diversity with thousands of endemic and medicinal plant species rich in pharmacologically active compounds.",
    topic_name: "Biodiversity & Medicinal Plants of Ethiopia",
    instruction_category: "Ecology & Biodiversity"
  },
  {
    question_number: 19,
    question_text: "Why fibrous rooted plants are more adaptable in areas where water stress is minimum?",
    option_a: "Because they can easily absorb water on top soil",
    option_b: "Because they are better in absorbing water from deep in the soil",
    option_c: "Because they are stronger in anchoring the plant",
    option_d: "Because they are less branched",
    options: [
      "Because they can easily absorb water on top soil",
      "Because they are better in absorbing water from deep in the soil",
      "Because they are stronger in anchoring the plant",
      "Because they are less branched"
    ],
    correct_answer: "A",
    explanation: "Fibrous root systems form a dense network spread across the shallow upper soil layers, allowing them to rapidly and efficiently absorb moisture and nutrients from light rainfall and surface water when water is readily available near the surface.",
    topic_name: "Root System Types & Adaptations",
    instruction_category: "Plant Biology"
  },
  {
    question_number: 20,
    question_text: "Identify the correct characteristics of Dicot seeds?",
    option_a: "They have cotyledons which is very thin",
    option_b: "Their primary root formed from radical is replaced by adventitious fibrous roots",
    option_c: "They are lack endosperm and store their food materials in the cotyledons",
    option_d: "They have cotyledons and endosperms which are used to store food and other substance",
    options: [
      "They have cotyledons which is very thin",
      "Their primary root formed from radical is replaced by adventitious fibrous roots",
      "They are lack endosperm and store their food materials in the cotyledons",
      "They have cotyledons and endosperms which are used to store food and other substance"
    ],
    correct_answer: "C",
    explanation: "Most non-endospermic (exalbuminous) dicot seeds (like beans and peas) absorb the endosperm during development and store their reserve food in two fleshy, prominent cotyledons.",
    topic_name: "Dicot vs Monocot Seed Structure",
    instruction_category: "Plant Anatomy"
  },
  {
    question_number: 21,
    question_text: "Which one of the following well characterizes the seed of flowering plants?",
    option_a: "Seed is covered by seed coat",
    option_b: "Naked seed is common in angiosperms",
    option_c: "Seeds of conifers are best characterizing seed of flowering plants",
    option_d: "Endosperm is part of seeds of gymnosperms",
    options: [
      "Seed is covered by seed coat",
      "Naked seed is common in angiosperms",
      "Seeds of conifers are best characterizing seed of flowering plants",
      "Endosperm is part of seeds of gymnosperms"
    ],
    correct_answer: "A",
    explanation: "In flowering plants (angiosperms), the fertilized ovule develops into a seed protected by an outer protective testa (seed coat) derived from the integuments, enclosed within an ovary (fruit).",
    topic_name: "Angiosperm Seed Structure",
    instruction_category: "Plant Reproduction"
  },
  {
    question_number: 22,
    question_text: "One of the following best characterizes mosses, which one?",
    option_a: "They are vascular plants",
    option_b: "They have functional xylem",
    option_c: "They have functional phloem",
    option_d: "They are non-vascular plants",
    options: [
      "They are vascular plants",
      "They have functional xylem",
      "They have functional phloem",
      "They are non-vascular plants"
    ],
    correct_answer: "D",
    explanation: "Mosses belong to the division Bryophyta. They are non-vascular plants (bryophytes) lacking specialized vascular tissues (true xylem and phloem) and true roots, absorbing water and nutrients directly across their surfaces.",
    topic_name: "Bryophytes & Non-Vascular Plants",
    instruction_category: "Plant Taxonomy"
  },
  {
    question_number: 23,
    question_text: "Based on the diagram of the leaf cross-section, labels 1, 2, 4, and 6 respectively represent:",
    option_a: "palisade mesophyll ,upper epidermis ,lower epidermis and guard cells",
    option_b: "Upper epidermis ,palisade mesophyll, lower epidermis and guard cells",
    option_c: "Upper epidermis ,palisade mesophyll, spongy mesophyll and stomata",
    option_d: "Upper epidermis ,palisade mesophyll, lower epidermis and guard cells",
    options: [
      "palisade mesophyll ,upper epidermis ,lower epidermis and guard cells",
      "Upper epidermis ,palisade mesophyll, lower epidermis and guard cells",
      "Upper epidermis ,palisade mesophyll, spongy mesophyll and stomata",
      "Upper epidermis ,palisade mesophyll, lower epidermis and guard cells"
    ],
    correct_answer: "B",
    explanation: "In a typical leaf cross section: 1 represents the upper epidermis (covered by cuticle), 2 represents the vertically elongated palisade mesophyll containing abundant chloroplasts, 3 is the vascular bundle (xylem/phloem), 4 is the lower epidermis, 5 is spongy mesophyll, and 6 represents the guard cells surrounding the stomatal pore.",
    topic_name: "Leaf Internal Anatomy",
    instruction_category: "Plant Anatomy"
  },
  {
    question_number: 24,
    question_text: "The high concentration of auxin will be on lower side of both shoot and root when a seedling placed horizontally, however growth direction of shoot and root is not similar. This is because :",
    option_a: "The high concentration of auxin promote growth of both shoot and root",
    option_b: "The high concentration of auxin which promote growth of shoot inhibit growth of root",
    option_c: "The low concentration of auxin in lower side inhibit growth of shoot and root",
    option_d: "The low concentration of auxin promote growth of shoot but inhibit growth of root",
    options: [
      "The high concentration of auxin promote growth of both shoot and root",
      "The high concentration of auxin which promote growth of shoot inhibit growth of root",
      "The low concentration of auxin in lower side inhibit growth of shoot and root",
      "The low concentration of auxin promote growth of shoot but inhibit growth of root"
    ],
    correct_answer: "B",
    explanation: "Shoots and roots have different sensitivity to auxin. High auxin concentration on the lower side promotes cell elongation in the shoot (causing it to curve upward, negative gravitropism), but inhibits cell elongation in the root (causing the upper side to grow faster and curve downward, positive gravitropism).",
    topic_name: "Plant Tropisms & Auxin Differential Growth",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 25,
    question_text: "Which of the following alternative contains the structure of leaf which is correctly matched its function",
    option_a: "Waxy cuticle -allows diffusion of gases in and out of leaf",
    option_b: "Guard cells - provide big surface area for gas exchange",
    option_c: "Palisade mesophyll -main photosynthetic tissues of leaf",
    option_d: "Spongy mesophyll controls opening & closing of stomata",
    options: [
      "Waxy cuticle -allows diffusion of gases in and out of leaf",
      "Guard cells - provide big surface area for gas exchange",
      "Palisade mesophyll -main photosynthetic tissues of leaf",
      "Spongy mesophyll controls opening & closing of stomata"
    ],
    correct_answer: "C",
    explanation: "The palisade mesophyll cells are packed with chloroplasts and positioned perpendicular to the upper leaf surface to maximize light interception, serving as the main site of photosynthesis in leaves.",
    topic_name: "Leaf Structure & Function",
    instruction_category: "Plant Anatomy"
  },
  {
    question_number: 26,
    question_text: "Which of the following is true of the process taken place in hypogeal germination?",
    option_a: "Hypocotyl is elongated and bringing the cotyledon above the ground",
    option_b: "Epicotyl is elongated and bringing the cotyledon above the ground",
    option_c: "Epicotyl is elongated and leaving the cotyledon below the ground",
    option_d: "Hypocotyl is elongated and leaving the cotyledon below the ground",
    options: [
      "Hypocotyl is elongated and bringing the cotyledon above the ground",
      "Epicotyl is elongated and bringing the cotyledon above the ground",
      "Epicotyl is elongated and leaving the cotyledon below the ground",
      "Hypocotyl is elongated and leaving the cotyledon below the ground"
    ],
    correct_answer: "C",
    explanation: "In hypogeal germination (e.g., in maize and broad beans), the epicotyl rapidly elongates while the hypocotyl remains short, pushing the plumule upward while leaving the cotyledons buried beneath the soil surface.",
    topic_name: "Hypogeal vs Epigeal Germination",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 27,
    question_text: "Which of the following is not involved in light dependent stage of photosynthesis?",
    option_a: "Formation of ATP",
    option_b: "Oxidation of NADPH2 to NADP+",
    option_c: "Photolysis of water",
    option_d: "Production of oxygen gas",
    options: [
      "Formation of ATP",
      "Oxidation of NADPH2 to NADP+",
      "Photolysis of water",
      "Production of oxygen gas"
    ],
    correct_answer: "B",
    explanation: "In the light-dependent reactions (occurring in thylakoid membranes), water is split (photolysis), releasing O2, and NADP+ is reduced to NADPH while ATP is generated via photophosphorylation. Oxidation of NADPH back to NADP+ occurs in the light-independent Calvin cycle (stroma).",
    topic_name: "Light Reactions vs Calvin Cycle",
    instruction_category: "Plant Physiology & Biochemistry"
  },
  {
    question_number: 28,
    question_text: "Which of the following statement about xylem is true?",
    option_a: "It is living tissue absorb water and mineral from soil",
    option_b: "It is made up of dead tissue which transport the product of photosynthesis",
    option_c: "It is made up of living tissue which transport product of photosynthesis",
    option_d: "it is made up of dead tissue which transport water and minerals from root to the leaves",
    options: [
      "It is living tissue absorb water and mineral from soil",
      "It is made up of dead tissue which transport the product of photosynthesis",
      "It is made up of living tissue which transport product of photosynthesis",
      "it is made up of dead tissue which transport water and minerals from root to the leaves"
    ],
    correct_answer: "D",
    explanation: "Mature xylem vessels and tracheids are dead, hollow, lignified tubes that conduct water and dissolved inorganic minerals unidirectionally from roots up to leaves.",
    topic_name: "Plant Vascular System (Xylem)",
    instruction_category: "Plant Anatomy"
  },
  {
    question_number: 29,
    question_text: "Which of the following statement is not true about tropism?",
    option_a: "Shoot is positively phototropic but root is negatively phototropic",
    option_b: "Root is positively hydrotropic but shoot is negatively hydrotropic",
    option_c: "Shoot is positively geotropic but root is negatively geotropic",
    option_d: "Root is positively Gravitropic and shoot is negatively Gravitropic",
    options: [
      "Shoot is positively phototropic but root is negatively phototropic",
      "Root is positively hydrotropic but shoot is negatively hydrotropic",
      "Shoot is positively geotropic but root is negatively geotropic",
      "Root is positively Gravitropic and shoot is negatively Gravitropic"
    ],
    correct_answer: "C",
    explanation: "Shoots grow away from gravity (negatively geotropic / gravitropic) while roots grow toward gravity into the soil (positively geotropic / gravitropic). Therefore, claiming shoots are positively geotropic is false.",
    topic_name: "Plant Tropisms (Phototropism & Geotropism)",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 30,
    question_text: "Which of the following is true of photosynthesis?",
    option_a: "Light reaction stage is takes place in stroma",
    option_b: "Carbondioxide is fixed in dark reaction",
    option_c: "Dark reaction is involved only during night time",
    option_d: "Light independent stage is involved in grana of chloroplast",
    options: [
      "Light reaction stage is takes place in stroma",
      "Carbondioxide is fixed in dark reaction",
      "Dark reaction is involved only during night time",
      "Light independent stage is involved in grana of chloroplast"
    ],
    correct_answer: "B",
    explanation: "Carbon dioxide fixation occurs during the light-independent reactions (Calvin cycle / dark reactions) in the stroma of the chloroplast, catalyzed by the enzyme RuBisCO.",
    topic_name: "Mechanisms of Photosynthesis",
    instruction_category: "Cellular Energetics"
  },
  {
    question_number: 31,
    question_text: "Select the one that characterizes higher plants",
    option_a: "They are sessile",
    option_b: "They are mobile",
    option_c: "They have fragile cell wall",
    option_d: "All are annuals",
    options: [
      "They are sessile",
      "They are mobile",
      "They have fragile cell wall",
      "All are annuals"
    ],
    correct_answer: "A",
    explanation: "Higher plants (gymnosperms and angiosperms) are stationary (sessile) organisms anchored to a substrate by root systems, possessing rigid cell walls made of cellulose and lignin.",
    topic_name: "Characteristics of Plantae",
    instruction_category: "Plant Taxonomy"
  },
  {
    question_number: 32,
    question_text: "What is the implication of seed dispersal?",
    option_a: "Diversify plants",
    option_b: "Increase competition for light",
    option_c: "Doesn't have implication for colonization of new niches",
    option_d: "Seed dispersal is not important in plant reproduction",
    options: [
      "Diversify plants",
      "Increase competition for light",
      "Doesn't have implication for colonization of new niches",
      "Seed dispersal is not important in plant reproduction"
    ],
    correct_answer: "A",
    explanation: "Seed dispersal allows plants to colonize new geographic areas, avoid intense intraspecific competition near parent plants, and spread genetic diversity across wider ecological ranges.",
    topic_name: "Seed Dispersal & Ecological Adaptation",
    instruction_category: "Ecology & Reproduction"
  },
  {
    question_number: 33,
    question_text: "Answer the following question based on the biochemical food test table: Iodine confirms positive for Potato; Benedict's confirms positive for Honey; Ethanol emulsion confirms positive for Cooking oil; Biuret reagent confirms positive for Egg albumin. Which statement is incorrect about the biochemical food test indicated?",
    option_a: "Adding Iodine solution confirms for starch presence in the potato.",
    option_b: "Boiling Benedict solution confirms presence of non-reducing sugar in honey.",
    option_c: "Mixing ethanol with cooking oil confirms lipid is insoluble in water",
    option_d: "Adding Biuret reagent confirm protein presence in egg albumin.",
    options: [
      "Adding Iodine solution confirms for starch presence in the potato.",
      "Boiling Benedict solution confirms presence of non-reducing sugar in honey.",
      "Mixing ethanol with cooking oil confirms lipid is insoluble in water",
      "Adding Biuret reagent confirm protein presence in egg albumin."
    ],
    correct_answer: "B",
    explanation: "Benedict's solution detects REDUCING sugars (such as glucose and fructose, which are abundant in honey), not non-reducing sugars. Non-reducing sugars (like sucrose) give a negative Benedict's test unless first hydrolyzed with acid.",
    topic_name: "Biochemical Food Tests",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 34,
    question_text: "If you visit water bodies like river and lake you can find some organisms walk on the water surface. What conclusion you would give concerning the characteristics of water which allow those organisms move on water?",
    option_a: "High latent heat of vaporization",
    option_b: "Boiling and freezing point",
    option_c: "Density and freezing properties",
    option_d: "High surface tension",
    options: [
      "High latent heat of vaporization",
      "Boiling and freezing point",
      "Density and freezing properties",
      "High surface tension"
    ],
    correct_answer: "D",
    explanation: "Water has high surface tension due to the strong cohesive hydrogen bonding between water molecules at the air-water interface, creating a film-like elastic surface capable of supporting light insects like water striders.",
    topic_name: "Properties of Water in Biological Systems",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 35,
    question_text: "Choose the letter that contains only macronutrients?",
    option_a: "Sodium, potassium, magnesium and phosphorus",
    option_b: "Phosphorus, manganese, iron and copper",
    option_c: "Magnesium, manganese, iron and potassium",
    option_d: "Sulfur, copper, iodine and phosphorus",
    options: [
      "Sodium, potassium, magnesium and phosphorus",
      "Phosphorus, manganese, iron and copper",
      "Magnesium, manganese, iron and potassium",
      "Sulfur, copper, iodine and phosphorus"
    ],
    correct_answer: "A",
    explanation: "Macronutrients are required by organisms in relatively large quantities. Sodium (Na), potassium (K), magnesium (Mg), and phosphorus (P) are essential macronutrients. Iron, copper, and manganese are micronutrients (trace elements).",
    topic_name: "Mineral Nutrients & Plant/Animal Nutrition",
    instruction_category: "Inorganic Nutrients"
  },
  {
    question_number: 36,
    question_text: "Which of the following is true of characteristics of water and its importance in life?",
    option_a: "Cohesive and adhesive force- transport of water from the root to the leaves of the plants",
    option_b: "Water as solvent- involved in condensation reaction to make polymer",
    option_c: "Boiling and freezing point- sustain aquatic ecosystem & regulate body temperature",
    option_d: "Unique density and freezing point - Increase survival rate of life under cold temperature",
    options: [
      "Cohesive and adhesive force- transport of water from the root to the leaves of the plants",
      "Water as solvent- involved in condensation reaction to make polymer",
      "Boiling and freezing point- sustain aquatic ecosystem & regulate body temperature",
      "Unique density and freezing point - Increase survival rate of life under cold temperature"
    ],
    correct_answer: "A",
    explanation: "Cohesion (hydrogen bonding between water molecules) and adhesion (attraction between water molecules and xylem walls) drive the continuous transpiration stream pulling water from roots up to leaves.",
    topic_name: "Cohesion-Tension Theory & Water Properties",
    instruction_category: "Plant Physiology & Water"
  },
  {
    question_number: 37,
    question_text: "Which of the following is not true clinical condition caused by inorganic ions through alteration of its usual concentration?",
    option_a: "Wilson disease is caused by abnormal copper deposition in liver and brain",
    option_b: "Increase in take of sodium result in high blood pressure",
    option_c: "Abnormal iron deposition causes hemochromatosis",
    option_d: "Hypothyroidism results in goiter",
    options: [
      "Wilson disease is caused by abnormal copper deposition in liver and brain",
      "Increase in take of sodium result in high blood pressure",
      "Abnormal iron deposition causes hemochromatosis",
      "Hypothyroidism results in goiter"
    ],
    correct_answer: "D",
    explanation: "While iodine deficiency can cause goiter, goiter itself is an enlargement of the thyroid gland resulting from thyroid dysregulation (which can be associated with hypothyroidism), but between the clinical choices, mineral ion disorders are: Wilson's (Cu), Hypertension (Na), Hemochromatosis (Fe), whereas goiter is primarily caused by dietary iodine deficiency leading to elevated TSH.",
    topic_name: "Inorganic Ions in Human Health",
    instruction_category: "Human Physiology"
  },
  {
    question_number: 38,
    question_text: "As a biology student what you recommend for our community to prevent spread of goiter?",
    option_a: "Taking excess amount of iodine rich food like dairy products.",
    option_b: "Create awareness on eating of iodized salt",
    option_c: "Removing of enlarged thyroid gland which cause deformity",
    option_d: "Adding of leguminous plant such as bean and pea in daily diet",
    options: [
      "Taking excess amount of iodine rich food like dairy products.",
      "Create awareness on eating of iodized salt",
      "Removing of enlarged thyroid gland which cause deformity",
      "Adding of leguminous plant such as bean and pea in daily diet"
    ],
    correct_answer: "B",
    explanation: "The most effective and sustainable public health intervention to prevent endemic goiter and iodine deficiency disorders (IDD) is promoting the consumption of universal iodized salt in the daily diet.",
    topic_name: "Nutrition & Deficiency Diseases",
    instruction_category: "Human Health"
  },
  {
    question_number: 39,
    question_text: "There are 20 different amino acids in nature which make up different types of proteins. What makes one amino acid different from another?",
    option_a: "Different carboxyl groups attached to carbon",
    option_b: "Different amino groups attached to carbon",
    option_c: "Different side chains attached to carbon",
    option_d: "Different alpha carbons",
    options: [
      "Different carboxyl groups attached to carbon",
      "Different amino groups attached to carbon",
      "Different side chains attached to carbon",
      "Different alpha carbons"
    ],
    correct_answer: "C",
    explanation: "All amino acids share a common central alpha-carbon bonded to a hydrogen atom, an amino group (-NH2), and a carboxyl group (-COOH). They differ from one another exclusively by their specific chemical side chain (the variable 'R' group).",
    topic_name: "Amino Acid Structure & Proteins",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 40,
    question_text: "Which of the following is an example of fibrous proteins?",
    option_a: "Enzymes",
    option_b: "Keratin",
    option_c: "Antibodies",
    option_d: "Haemoglobin",
    options: ["Enzymes", "Keratin", "Antibodies", "Haemoglobin"],
    correct_answer: "B",
    explanation: "Keratin, collagen, and elastin are insoluble, elongated fibrous structural proteins that provide mechanical support and protection in hair, nails, skin, and tendons. Enzymes, antibodies, and hemoglobin are globular proteins.",
    topic_name: "Fibrous vs Globular Proteins",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 41,
    question_text: "Which of the following represent the type of complex carbohydrates, RESPECTIVELY:\nI. carbohydrate storage in animal liver\nII. structural component of plant cell walls\nIII. carbohydrate storage in plants\nIV. Exoskeleton of insects",
    option_a: "Glycogen, Starch, Chitin, Cellulose",
    option_b: "Glycogen, Chitin, Starch, Cellulose",
    option_c: "Glycogen, Starch, Cellulose, Chitin",
    option_d: "Glycogen, Cellulose Starch, Chitin",
    options: [
      "Glycogen, Starch, Chitin, Cellulose",
      "Glycogen, Chitin, Starch, Cellulose",
      "Glycogen, Starch, Cellulose, Chitin",
      "Glycogen, Cellulose Starch, Chitin"
    ],
    correct_answer: "D",
    explanation: "I = Glycogen (animal storage), II = Cellulose (plant cell walls), III = Starch (plant storage), and IV = Chitin (arthropod exoskeleton and fungal cell walls).",
    topic_name: "Polysaccharides & Carbohydrate Function",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 42,
    question_text: "The molecular formula for glucose is C6H12O6. What would be the molecular formula for a molecule made by linking three glucose molecules together by condensation reactions?",
    option_a: "C18H36O18",
    option_b: "C18H32O16",
    option_c: "C18H30O15",
    option_d: "C18H36O15",
    options: ["C18H36O18", "C18H32O16", "C18H30O15", "C18H36O15"],
    correct_answer: "B",
    explanation: "Linking 3 glucose molecules involves 2 condensation reactions, each eliminating one water molecule (H2O):\nFormula = 3 × (C6H12O6) - 2 × (H2O) = C18H36O18 - H4O2 = C18H32O16.",
    topic_name: "Condensation Reactions & Oligosaccharides",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 43,
    question_text: "Phospholipids are group of lipids which are made up of:",
    option_a: "One glycerol, one fatty acid & two phosphate groups.",
    option_b: "One glycerol, two fatty acids & a phosphate group",
    option_c: "One glycerol, three fatty acids & a phosphate group.",
    option_d: "One glycerol, two fatty acids & two phosphate groups.",
    options: [
      "One glycerol, one fatty acid & two phosphate groups.",
      "One glycerol, two fatty acids & a phosphate group",
      "One glycerol, three fatty acids & a phosphate group.",
      "One glycerol, two fatty acids & two phosphate groups."
    ],
    correct_answer: "B",
    explanation: "A phospholipid consists of a glycerol backbone esterified to two nonpolar hydrophobic fatty acid chains and one polar hydrophilic phosphate group (often attached to a choline or other head group).",
    topic_name: "Lipid Structure & Phospholipids",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 44,
    question_text: "All of the following statements concerning saturated fats are true EXCEPT",
    option_a: "They are more common in animals than in plants.",
    option_b: "They generally solidify at room temperature.",
    option_c: "They have multiple double bonds in the carbon chains of their fatty acids.",
    option_d: "They contain more hydrogen than unsaturated fats",
    options: [
      "They are more common in animals than in plants.",
      "They generally solidify at room temperature.",
      "They have multiple double bonds in the carbon chains of their fatty acids.",
      "They contain more hydrogen than unsaturated fats"
    ],
    correct_answer: "C",
    explanation: "Saturated fats have NO double bonds (C=C) in their hydrocarbon fatty acid chains; they are fully 'saturated' with hydrogen atoms, allowing them to pack closely and remain solid at room temperature.",
    topic_name: "Saturated vs Unsaturated Lipids",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 45,
    question_text: "Which of the following statement is true regarding the chemical reaction illustrated in the figure (showing two amino acids joining with the removal of H2O)?",
    option_a: "It is a hydrolysis reaction.",
    option_b: "It results in a peptide bond.",
    option_c: "It joins two fatty acids together",
    option_d: "It results in a glycosidic bond",
    options: [
      "It is a hydrolysis reaction.",
      "It results in a peptide bond.",
      "It joins two fatty acids together",
      "It results in a glycosidic bond"
    ],
    correct_answer: "B",
    explanation: "The reaction shows condensation (dehydration synthesis) between the carboxyl group of one amino acid and the amino group of an adjacent amino acid, releasing water (H2O) and forming a covalent peptide bond (-CO-NH-).",
    topic_name: "Peptide Bond Formation",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 46,
    question_text: "Which of the following statement concerning description of G1 stage of cell cycle is true?",
    option_a: "Cells are quite active metabolically, accumulate building blocks of DNA and associated protein",
    option_b: "It is a stage at which DNA is replicated and make final preparation before it undergoes mitosis",
    option_c: "Is the stage when cell replenish its energy store and synthesize protein necessary for chromosome manipulation and movement.",
    option_d: "It is the stage at which nucleus and cytoplasm divides and produce two daughter cells",
    options: [
      "Cells are quite active metabolically, accumulate building blocks of DNA and associated protein",
      "It is a stage at which DNA is replicated and make final preparation before it undergoes mitosis",
      "Is the stage when cell replenish its energy store and synthesize protein necessary for chromosome manipulation and movement.",
      "It is the stage at which nucleus and cytoplasm divides and produce two daughter cells"
    ],
    correct_answer: "A",
    explanation: "During the G1 (first gap) phase of interphase, the cell undergoes vigorous metabolic activity, protein synthesis, and growth, accumulating the necessary nucleotide building blocks and enzymes needed for DNA replication in the S phase.",
    topic_name: "Cell Cycle (Interphase & G1 Phase)",
    instruction_category: "Cell Biology & Cytology"
  },
  {
    question_number: 47,
    question_text: "The cells produced in mitosis will have a:",
    option_a: "Haploid number of chromosomes and will be genetically identical to each other.",
    option_b: "Diploid number of chromosomes and will differ genetically from each other.",
    option_c: "Diploid number of chromosomes and will be genetically identical to each other.",
    option_d: "Haploid number of chromosomes and will differ genetically from each other",
    options: [
      "Haploid number of chromosomes and will be genetically identical to each other.",
      "Diploid number of chromosomes and will differ genetically from each other.",
      "Diploid number of chromosomes and will be genetically identical to each other.",
      "Haploid number of chromosomes and will differ genetically from each other"
    ],
    correct_answer: "C",
    explanation: "Mitosis is an equational division resulting in two daughter cells that have the same diploid (2n) chromosome number and are genetically identical clones of the parent cell and each other.",
    topic_name: "Mitosis & Chromosome Number",
    instruction_category: "Cell Biology"
  },
  {
    question_number: 48,
    question_text: "The diagram below shows the stages of mitosis (A: Telophase/Cytokinesis, B: Prophase, C: Metaphase, D: Anaphase). Which are correct sequences of these stages?",
    option_a: "B,C,D,A",
    option_b: "C,B,D,A",
    option_c: "B,C,A,D",
    option_d: "C,A,B,D",
    options: ["B,C,D,A", "C,B,D,A", "B,C,A,D", "C,A,B,D"],
    correct_answer: "A",
    explanation: "The chronological sequence of mitotic stages is: Prophase (B) -> Metaphase (C) -> Anaphase (D) -> Telophase/Cytokinesis (A), which is B, C, D, A.",
    topic_name: "Stages of Mitosis",
    instruction_category: "Cell Division"
  },
  {
    question_number: 49,
    question_text: "The difference between the sugar in DNA and the sugar in RNA is that the sugar in DNA",
    option_a: "Contains one less oxygen atom.",
    option_b: "Can form a double-stranded molecule.",
    option_c: "Has a six-membered ring of carbon and nitrogen atom",
    option_d: "Is a six-carbon sugar and the sugar in RNA is a five-carbon sugar.",
    options: [
      "Contains one less oxygen atom.",
      "Can form a double-stranded molecule.",
      "Has a six-membered ring of carbon and nitrogen atom",
      "Is a six-carbon sugar and the sugar in RNA is a five-carbon sugar."
    ],
    correct_answer: "A",
    explanation: "Deoxyribose (in DNA, C5H10O4) lacks an oxygen atom at the 2' carbon position compared to ribose (in RNA, C5H10O5), which possesses a 2'-OH hydroxyl group.",
    topic_name: "Nucleic Acid Sugars (Deoxyribose vs Ribose)",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 50,
    question_text: "What are three components of RNA molecule?",
    option_a: "Ribose sugar, a phosphate group & nitrogenous base.",
    option_b: "Deoxy ribose sugar, a phosphate group & nitrogenous base.",
    option_c: "Hexose sugar, a phosphate group & nitrogenous base.",
    option_d: "A pentose sugar, two phosphate group & nitrogenous base.",
    options: [
      "Ribose sugar, a phosphate group & nitrogenous base.",
      "Deoxy ribose sugar, a phosphate group & nitrogenous base.",
      "Hexose sugar, a phosphate group & nitrogenous base.",
      "A pentose sugar, two phosphate group & nitrogenous base."
    ],
    correct_answer: "A",
    explanation: "An RNA nucleotide consists of three fundamental chemical components: a five-carbon ribose sugar, an inorganic phosphate group, and one of four nitrogenous bases (Adenine, Uracil, Cytosine, or Guanine).",
    topic_name: "RNA Molecular Composition",
    instruction_category: "Molecular Genetics"
  },
  {
    question_number: 51,
    question_text: "Which of the following alternatives contain the incorrect association in stage of mitotic cell division?",
    option_a: "Metaphase- Chromatids attached to the spindle fiber",
    option_b: "Anaphase- Chromatids move to opposite poles of the cell",
    option_c: "Telophase –Mitotic spindle breaks down and disappears",
    option_d: "Prophase- chromosomes line up end to end along the metaphase plate",
    options: [
      "Metaphase- Chromatids attached to the spindle fiber",
      "Anaphase- Chromatids move to opposite poles of the cell",
      "Telophase –Mitotic spindle breaks down and disappears",
      "Prophase- chromosomes line up end to end along the metaphase plate"
    ],
    correct_answer: "D",
    explanation: "Chromosomes line up along the equatorial metaphase plate during Metaphase, not Prophase. During Prophase, chromatin condenses into visible chromosomes, nucleoli disappear, and the mitotic spindle forms.",
    topic_name: "Mitotic Stages & Events",
    instruction_category: "Cell Division"
  },
  {
    question_number: 52,
    question_text: "A cell having 64 chromosomes (2n) undergoes mitotic cell division. then it results in",
    option_a: "2 daughter cells each with 32 chromosomes",
    option_b: "4 daughter cells each with 32 chromosomes",
    option_c: "4daughter cells each with 64 chromosomes",
    option_d: "2 daughter cells each with 64 chromosomes",
    options: [
      "2 daughter cells each with 32 chromosomes",
      "4 daughter cells each with 32 chromosomes",
      "4daughter cells each with 64 chromosomes",
      "2 daughter cells each with 64 chromosomes"
    ],
    correct_answer: "D",
    explanation: "Mitosis yields exactly 2 daughter cells, and each daughter cell preserves the original diploid chromosome number (2n = 64 chromosomes).",
    topic_name: "Mitosis Products & Chromosome Constancy",
    instruction_category: "Cell Division"
  },
  {
    question_number: 53,
    question_text: "Which of the following statements regarding the function of mitosis is false?",
    option_a: "It allows organisms to generate genetic diversity.",
    option_b: "It allows organisms to reproduce asexually.",
    option_c: "It allows organisms to repair tissues.",
    option_d: "It allows organisms to grow.",
    options: [
      "It allows organisms to generate genetic diversity.",
      "It allows organisms to reproduce asexually.",
      "It allows organisms to repair tissues.",
      "It allows organisms to grow."
    ],
    correct_answer: "A",
    explanation: "Mitosis produces genetically identical cells, preserving genetic constancy. Genetic diversity is generated by meiosis through crossing over (homologous recombination) and independent assortment of chromosomes.",
    topic_name: "Functions of Mitosis vs Meiosis",
    instruction_category: "Cell Division"
  },
  {
    question_number: 54,
    question_text: "The tail of phospholipids molecules that make up cell membrane is:",
    option_a: "Polar and water repellent",
    option_b: "Polar and hydrophilic",
    option_c: "Non-polar & water repellent",
    option_d: "Non-polar and water loving",
    options: [
      "Polar and water repellent",
      "Polar and hydrophilic",
      "Non-polar & water repellent",
      "Non-polar and water loving"
    ],
    correct_answer: "C",
    explanation: "Phospholipid molecules are amphipathic: the phosphate head is polar and hydrophilic (water-loving), while the fatty acid hydrocarbon tails are non-polar and hydrophobic (water-repellent).",
    topic_name: "Cell Membrane & Phospholipid Bilayer",
    instruction_category: "Cytology & Biochemistry"
  },
  {
    question_number: 55,
    question_text: "How is the water in the xylem transport upwards to the top of the plant?",
    option_a: "By pulling of transpiration stream",
    option_b: "Due to high concentration of water in the soil",
    option_c: "By using of cellular energy",
    option_d: "Only via root pressure",
    options: [
      "By pulling of transpiration stream",
      "Due to high concentration of water in the soil",
      "By using of cellular energy",
      "Only via root pressure"
    ],
    correct_answer: "A",
    explanation: "Water is transported upward through xylem vessels mainly by the transpiration pull (transpiration stream), supported by the cohesion between water molecules and adhesion to xylem walls (the Dixon and Joly cohesion-tension mechanism).",
    topic_name: "Transpiration Pull & Xylem Transport",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 56,
    question_text: "In experiment with plant growth, scientists have found the plant tip will bend toward light this is because:",
    option_a: "More Auxin will be in light side than dark side",
    option_b: "Growth will more in dark side than illuminated side",
    option_c: "Growth will more in illuminated side than dark side",
    option_d: "Auxin moves towards light from dark side",
    options: [
      "More Auxin will be in light side than dark side",
      "Growth will more in dark side than illuminated side",
      "Growth will more in illuminated side than dark side",
      "Auxin moves towards light from dark side"
    ],
    correct_answer: "B",
    explanation: "Light causes auxin to migrate to the shaded (dark) side of the shoot tip. The higher auxin concentration stimulates faster cell elongation on the dark side, bending the stem toward the light source (positive phototropism).",
    topic_name: "Phototropism & Auxin Redistribution",
    instruction_category: "Plant Physiology"
  },
  {
    question_number: 57,
    question_text: "Which of the following internal structure of root is mismatched with its function?",
    option_a: "Cortex – provide storage of food and water",
    option_b: "Endodermis – Helps the movement of water and dissolved nutrients",
    option_c: "Pericyle – The site of origin of lateral buds",
    option_d: "Peliferous layer- composed of cuticles for waterproof",
    options: [
      "Cortex – provide storage of food and water",
      "Endodermis – Helps the movement of water and dissolved nutrients",
      "Pericyle – The site of origin of lateral buds",
      "Peliferous layer- composed of cuticles for waterproof"
    ],
    correct_answer: "D",
    explanation: "The piliferous (epiblema) layer of roots is responsible for water and mineral absorption and bears root hairs; it lacks a waterproof waxy cuticle because a cuticle would obstruct the inward absorption of water from the soil.",
    topic_name: "Internal Anatomy of Roots",
    instruction_category: "Plant Anatomy"
  },
  {
    question_number: 58,
    question_text: "Both types of nucleic acids are made from structures called nucleotide, however:",
    option_a: "DNA is made from a single polynucleotide chain.",
    option_b: "RNA is made from two polynucleotide chains.",
    option_c: "RNA is much larger than DNA.",
    option_d: "DNA is double stranded.",
    options: [
      "DNA is made from a single polynucleotide chain.",
      "RNA is made from two polynucleotide chains.",
      "RNA is much larger than DNA.",
      "DNA is double stranded."
    ],
    correct_answer: "D",
    explanation: "DNA typically exists as a stable, double-stranded antiparallel double helix, whereas RNA is predominantly a single-stranded polynucleotide chain.",
    topic_name: "DNA vs RNA Structural Comparison",
    instruction_category: "Molecular Biology"
  },
  {
    question_number: 59,
    question_text: "Which of the following leaf structure is the most external part?",
    option_a: "Palisade cell",
    option_b: "Upper epidermis",
    option_c: "Cuticle",
    option_d: "Spongy cell",
    options: ["Palisade cell", "Upper epidermis", "Cuticle", "Spongy cell"],
    correct_answer: "C",
    explanation: "The waxy cuticle is a non-cellular, hydrophobic outer layer secreted by epidermal cells that covers the outermost surface of the leaf to minimize transpiration.",
    topic_name: "Leaf Surface Anatomy",
    instruction_category: "Plant Anatomy"
  },
  {
    question_number: 60,
    question_text: "Where in the plant cell does actual synthesis of sugar occur?",
    option_a: "Matrix",
    option_b: "Stroma",
    option_c: "Granum",
    option_d: "Intermembrane space",
    options: ["Matrix", "Stroma", "Granum", "Intermembrane space"],
    correct_answer: "B",
    explanation: "The synthesis of sugar (G3P/glucose) occurs in the stroma of the chloroplast, where the soluble enzymes of the Calvin cycle (light-independent reactions) utilize ATP and NADPH to reduce CO2 into carbohydrates.",
    topic_name: "Chloroplast Stroma & Calvin Cycle",
    instruction_category: "Cellular Energetics"
  }
];

module.exports = questions;
