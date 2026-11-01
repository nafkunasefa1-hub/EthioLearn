/**
 * Grade 11 Biology Final Exam for Boarding and Non-Boarding (Special) Schools, January 2016/2024
 * 60 Questions extracted directly from the official examination paper with comprehensive biological explanations.
 */

const questions = [
  {
    question_number: 1,
    question_text: "There are significant differences between meiosis I and meiosis II. Because during meiosis II:",
    option_a: "There is crossing over in prophase",
    option_b: "There is separation of sister chromatids",
    option_c: "There is separation of homologous pair of chromosome",
    option_d: "Chromosomes line up side by side",
    options: [
      "There is crossing over in prophase",
      "There is separation of sister chromatids",
      "There is separation of homologous pair of chromosome",
      "Chromosomes line up side by side"
    ],
    correct_answer: "B",
    explanation: "In meiosis I, homologous chromosome pairs separate (reductional division). In meiosis II, equational division occurs where sister chromatids separate at the centromere and migrate to opposite poles, analogous to mitotic division.",
    topic_name: "Cell Division - Meiosis",
    instruction_category: "Genetics and Cellular Biology"
  },
  {
    question_number: 2,
    question_text: "Honeybees can be ‘trained’ to collect sugar water from coloured dishes on a feeding table. If a blue dish with pure water sits next to a yellow dish with sugar water, worker bees will quickly learn to associate ‘yellow’ with food (even if the dishes are moved around). This is an example of:",
    option_a: "Operant conditioning",
    option_b: "Classical conditioning",
    option_c: "Latent learning",
    option_d: "Insight learning",
    options: [
      "Operant conditioning",
      "Classical conditioning",
      "Latent learning",
      "Insight learning"
    ],
    correct_answer: "B",
    explanation: "This is classical (associative) conditioning (Pavlovian conditioning), where an animal associates an originally neutral stimulus (the yellow colour) with an unconditioned appetitive reward (sugar water) so that the color alone elicits foraging behavior.",
    topic_name: "Animal Behavior - Learning",
    instruction_category: "Behavioral Biology"
  },
  {
    question_number: 3,
    question_text: "Which of the following is the characteristic of an enzyme?",
    option_a: "They raise the amount of energy present in enzyme substrate complex.",
    option_b: "They react with substrate and gradually used up during the processes",
    option_c: "Enzyme lower the amount of energy present in the substrate",
    option_d: "Enzyme lower the activation energy present in an enzyme substrate complex",
    options: [
      "They raise the amount of energy present in enzyme substrate complex.",
      "They react with substrate and gradually used up during the processes",
      "Enzyme lower the amount of energy present in the substrate",
      "Enzyme lower the activation energy present in an enzyme substrate complex"
    ],
    correct_answer: "D",
    explanation: "Enzymes are biological catalysts that accelerate chemical reactions by lowering the activation energy (Ea) barrier required to reach the transition state, without altering the overall free energy change (ΔG) or being consumed in the reaction.",
    topic_name: "Enzymes & Biological Catalysis",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 4,
    question_text: "House building is an imitation of:",
    option_a: "Termite’s mound",
    option_b: "Wing of bats",
    option_c: "Wing of birds",
    option_d: "Mosquito proboscis",
    options: [
      "Termite’s mound",
      "Wing of bats",
      "Wing of birds",
      "Mosquito proboscis"
    ],
    correct_answer: "A",
    explanation: "Biomimicry in architectural engineering and house construction (such as passive natural ventilation systems like the Eastgate Centre in Harare) directly imitates the architecture and thermal regulation of termite mounds.",
    topic_name: "Biomimicry & Applied Biology",
    instruction_category: "Applied Biology"
  },
  {
    question_number: 5,
    question_text: "When a nipple is placed in a newborn baby's mouth, the infant will immediately begin to suckle. This is an example of:",
    option_a: "Imitation.",
    option_b: "Innate behavior",
    option_c: "Imprinting",
    option_d: "Classical conditioning.",
    options: [
      "Imitation.",
      "Innate behavior",
      "Imprinting",
      "Classical conditioning."
    ],
    correct_answer: "B",
    explanation: "Suckling in human newborns is an innate (instinctive/reflexive) behavior that is genetically programmed, present at birth, and does not require prior learning or practice for survival.",
    topic_name: "Innate vs Learned Behavior",
    instruction_category: "Behavioral Biology"
  },
  {
    question_number: 6,
    question_text: "Which one of the following is ethical way of treating plants?",
    option_a: "Deforestation",
    option_b: "Testing seeds by destructive rays",
    option_c: "Consumption of seeds and fruits with conservation",
    option_d: "Burning of forests for farmland",
    options: [
      "Deforestation",
      "Testing seeds by destructive rays",
      "Consumption of seeds and fruits with conservation",
      "Burning of forests for farmland"
    ],
    correct_answer: "C",
    explanation: "Ethical botanical and environmental stewardship involves sustainable harvesting and consumption of fruits and seeds alongside active conservation, afforestation, and biodiversity preservation.",
    topic_name: "Bioethics & Conservation",
    instruction_category: "Ecology & Bioethics"
  },
  {
    question_number: 7,
    question_text: "Suppose 75% of the molecules of an enzyme are inhibited by noncompetitive inhibitors. Which of the following would happen if the amount of substrate is increased by 50%?",
    option_a: "The rate of the reaction would increase by 50%.",
    option_b: "The reaction rate would double.",
    option_c: "The rate of the reaction would remain unchanged",
    option_d: "The rate of the reaction would increase by 75%.",
    options: [
      "The rate of the reaction would increase by 50%.",
      "The reaction rate would double.",
      "The rate of the reaction would remain unchanged",
      "The rate of the reaction would increase by 75%."
    ],
    correct_answer: "C",
    explanation: "Noncompetitive inhibitors bind to allosteric sites and decrease Vmax regardless of substrate concentration. If substrate is already saturating the uninhibited enzymes, adding more substrate cannot overcome noncompetitive inhibition, so the maximum attainable rate remains unchanged.",
    topic_name: "Enzyme Kinetics & Noncompetitive Inhibition",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 8,
    question_text: "Which of the following events occurs during prophase I of meiosis I?",
    option_a: "Duplication of chromatids",
    option_b: "Separation of homologous chromatids",
    option_c: "Formation of nuclear envelope & Dispersion of spindle fibers",
    option_d: "Exchanging of genetic material between non sister chromatids",
    options: [
      "Duplication of chromatids",
      "Separation of homologous chromatids",
      "Formation of nuclear envelope & Dispersion of spindle fibers",
      "Exchanging of genetic material between non sister chromatids"
    ],
    correct_answer: "D",
    explanation: "During the pachytene stage of prophase I, homologous chromosomes form synaptonemal complexes (tetrads) and undergo crossing over (chiasmata formation), where non-sister chromatids exchange reciprocal genetic material.",
    topic_name: "Meiotic Prophase I & Crossing Over",
    instruction_category: "Genetics and Cellular Biology"
  },
  {
    question_number: 9,
    question_text: "Which is not all about the use of biology in a more modern way?",
    option_a: "Breathing in O2 coming from photosynthesis",
    option_b: "Production of biofuels",
    option_c: "Production of biological weapons",
    option_d: "Creating antibiotics",
    options: [
      "Breathing in O2 coming from photosynthesis",
      "Production of biofuels",
      "Production of biological weapons",
      "Creating antibiotics"
    ],
    correct_answer: "A",
    explanation: "Breathing oxygen produced by photosynthesis is a fundamental, ancient natural physiological necessity for aerobic organisms, whereas biofuels, modern antibiotics, and biotechnology represent technological applications of biology.",
    topic_name: "Modern Applications of Biology",
    instruction_category: "General Biology"
  },
  {
    question_number: 10,
    question_text: "Which of the following is not true about the lock-&-key and induced fit model?",
    option_a: "Lock-&-key model visualize weakening of substrate bond, whereas induced fit model not.",
    option_b: "Lock -&-key model doesn't explain development of transition state, while the induced fit model does.",
    option_c: "In both cases active site of an enzyme is bind to the substrate.",
    option_d: "Both express the mechanism of competitive inhibitor",
    options: [
      "Lock-&-key model visualize weakening of substrate bond, whereas induced fit model not.",
      "Lock -&-key model doesn't explain development of transition state, while the induced fit model does.",
      "In both cases active site of an enzyme is bind to the substrate.",
      "Both express the mechanism of competitive inhibitor"
    ],
    correct_answer: "A",
    explanation: "The Induced Fit model (proposed by Koshland) specifically explains how the active site changes conformation upon substrate binding to induce strain and weaken substrate bonds (stabilizing the transition state), which the rigid lock-and-key model fails to explain.",
    topic_name: "Enzyme Action Models",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 11,
    question_text: "Biochemical test can be applied to the following except:",
    option_a: "Nucleic acid quantification",
    option_b: "Protein test",
    option_c: "Determination blood sugar content",
    option_d: "Physiotherapy",
    options: [
      "Nucleic acid quantification",
      "Protein test",
      "Determination blood sugar content",
      "Physiotherapy"
    ],
    correct_answer: "D",
    explanation: "Physiotherapy is a physical rehabilitation branch of clinical medicine dealing with mechanical movement and exercise therapy, not a chemical laboratory assay like nucleic acid spectrophotometry, Biuret/Bradford protein tests, or blood glucose tests.",
    topic_name: "Biochemical Tests & Clinical Diagnosis",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 12,
    question_text: "A process in which an individual develops from unfertilized eggs is:",
    option_a: "Metamorphosis",
    option_b: "Complete metamorphosis",
    option_c: "Hatching",
    option_d: "Parthenogenesis",
    options: [
      "Metamorphosis",
      "Complete metamorphosis",
      "Hatching",
      "Parthenogenesis"
    ],
    correct_answer: "D",
    explanation: "Parthenogenesis is a form of asexual reproduction in which an unfertilized ovum develops into a complete viable embryo/individual (e.g., male drone honeybees).",
    topic_name: "Reproduction - Parthenogenesis",
    instruction_category: "Developmental Biology"
  },
  {
    question_number: 13,
    question_text: "All of the followings are non Mendelian inheritance EXCEPT:",
    option_a: "Multiple allelism",
    option_b: "Codominance",
    option_c: "Complete dominance",
    option_d: "Incomplete dominance",
    options: [
      "Multiple allelism",
      "Codominance",
      "Complete dominance",
      "Incomplete dominance"
    ],
    correct_answer: "C",
    explanation: "Complete dominance follows classical Mendelian inheritance (Mendel's Law of Dominance). Incomplete dominance, codominance, multiple alleles, and polygenic traits are extensions of classical Mendelian genetics (non-Mendelian).",
    topic_name: "Mendelian vs Non-Mendelian Genetics",
    instruction_category: "Genetics"
  },
  {
    question_number: 14,
    question_text: "Which of the following factor does not result in high blood glucose level?",
    option_a: "Production of low level of insulin",
    option_b: "Loss of response to insulin in target cells",
    option_c: "Having regular physical exercise",
    option_d: "Over consumption of carbohydrate rich food",
    options: [
      "Production of low level of insulin",
      "Loss of response to insulin in target cells",
      "Having regular physical exercise",
      "Over consumption of carbohydrate rich food"
    ],
    correct_answer: "C",
    explanation: "Physical exercise stimulates muscle glucose uptake via GLUT4 transporters independently of insulin, actively reducing blood glucose levels rather than elevating them.",
    topic_name: "Homeostasis & Blood Glucose Regulation",
    instruction_category: "Human Physiology"
  },
  {
    question_number: 15,
    question_text: "Which one happens earlier in embryonic development?",
    option_a: "Blastula",
    option_b: "Eight-celled structure",
    option_c: "Gastrula",
    option_d: "Tissue and organs",
    options: [
      "Blastula",
      "Eight-celled structure",
      "Gastrula",
      "Tissue and organs"
    ],
    correct_answer: "B",
    explanation: "The developmental chronological sequence is: Zygote -> 2-cell -> 4-cell -> 8-cell stage -> Morula -> Blastula (blastocyst) -> Gastrula -> Organogenesis (tissues and organs). Thus the 8-celled structure occurs earliest.",
    topic_name: "Embryonic Development Sequence",
    instruction_category: "Developmental Biology"
  },
  {
    question_number: 16,
    question_text: "Which of the following statement concerning Osmoregulation in Human body is not true?",
    option_a: "High amount of ADH is released when the water content of blood is too low",
    option_b: "Less amount of ADH is released when the water content of blood is too high",
    option_c: "Secretion of ADH in different amount can influence the water content of urine",
    option_d: "If less amount ADH is secreted the kidneys reabsorb high concentration of water",
    options: [
      "High amount of ADH is released when the water content of blood is too low",
      "Less amount of ADH is released when the water content of blood is too high",
      "Secretion of ADH in different amount can influence the water content of urine",
      "If less amount ADH is secreted the kidneys reabsorb high concentration of water"
    ],
    correct_answer: "D",
    explanation: "Antidiuretic hormone (ADH/vasopressin) increases the permeability of collecting ducts to water. When less ADH is secreted, aquaporins are removed, leading to reduced water reabsorption and the excretion of dilute, high-volume urine.",
    topic_name: "Osmoregulation & ADH Hormone",
    instruction_category: "Human Physiology"
  },
  {
    question_number: 17,
    question_text: "Which of the following example is not inherent behavior?",
    option_a: "Swimming with dolphins and other aquatic species.",
    option_b: "Opening of mouth in chicks of many bird species when their mother returns to the nest.",
    option_c: "Honeybees dance when they return to the hive after finding a source of food",
    option_d: "Salivation of a dog when a bell was rung in the absence of food ,which was paired with the conditioned stimulus",
    options: [
      "Swimming with dolphins and other aquatic species.",
      "Opening of mouth in chicks of many bird species when their mother returns to the nest.",
      "Honeybees dance when they return to the hive after finding a source of food",
      "Salivation of a dog when a bell was rung in the absence of food ,which was paired with the conditioned stimulus"
    ],
    correct_answer: "D",
    explanation: "Salivation of a dog in response to a ringing bell is a conditioned reflex (learned through Pavlovian classical conditioning), not an innate (inherent) fixed action pattern.",
    topic_name: "Learned vs Inherent Behavior",
    instruction_category: "Behavioral Biology"
  },
  {
    question_number: 18,
    question_text: "Which of the following statement does not characterize learned behavior?",
    option_a: "It is genetically determined and fully functional at the first attempt",
    option_b: "It is changed by, or develops through, experience and may vary from individual to individual",
    option_c: "The animal develops the behavior through trial and error or by insight.",
    option_d: "The behavior may be modified by new experiences",
    options: [
      "It is genetically determined and fully functional at the first attempt",
      "It is changed by, or develops through, experience and may vary from individual to individual",
      "The animal develops the behavior through trial and error or by insight.",
      "The behavior may be modified by new experiences"
    ],
    correct_answer: "A",
    explanation: "Behaviors that are genetically determined and fully functional without prior practice upon the very first attempt describe innate (instinctive) behaviors, not learned behaviors.",
    topic_name: "Characteristics of Learned Behavior",
    instruction_category: "Behavioral Biology"
  },
  {
    question_number: 19,
    question_text: "Why is sweating referred to be the best mechanism of cooling down?",
    option_a: "It raises the temperature of the body",
    option_b: "It is a means by which heat is released",
    option_c: "It is a means by which sweat glands are arrested",
    option_d: "It is a means by which the body is hydrated",
    options: [
      "It raises the temperature of the body",
      "It is a means by which heat is released",
      "It is a means by which sweat glands are arrested",
      "It is a means by which the body is hydrated"
    ],
    correct_answer: "B",
    explanation: "Sweating cools the body through evaporative heat loss: as water evaporates from the skin surface, it absorbs large quantities of thermal energy due to water's high latent heat of vaporization.",
    topic_name: "Thermoregulation & Evaporative Cooling",
    instruction_category: "Human Physiology"
  },
  {
    question_number: 20,
    question_text: "Why do small animals eat more when compared to their body size?",
    option_a: "Because they loss much heat compared to their body size",
    option_b: "Because their body weight is small",
    option_c: "Because their skin is more porous as compared to other animals",
    option_d: "Their skin is covered by thick fat layer",
    options: [
      "Because they loss much heat compared to their body size",
      "Because their body weight is small",
      "Because their skin is more porous as compared to other animals",
      "Their skin is covered by thick fat layer"
    ],
    correct_answer: "A",
    explanation: "Small homeothermic endotherms have a high surface-area-to-volume ratio, causing rapid heat loss to the environment. To maintain a constant body core temperature, they exhibit high metabolic rates and consume proportionally more food per unit body mass.",
    topic_name: "Metabolic Rate & Surface Area to Volume Ratio",
    instruction_category: "Animal Physiology"
  },
  {
    question_number: 21,
    question_text: "Identify the rightly matched cause and effect:",
    option_a: "Increased body temperature- vasodilatation",
    option_b: "Sweating-increase in temperature",
    option_c: "Increased insulin-shot in blood sugar",
    option_d: "Vasoconstriction- cooling",
    options: [
      "Increased body temperature- vasodilatation",
      "Sweating-increase in temperature",
      "Increased insulin-shot in blood sugar",
      "Vasoconstriction- cooling"
    ],
    correct_answer: "A",
    explanation: "When body temperature rises above set point, the hypothalamic thermoregulatory center triggers vasodilation of cutaneous arterioles to increase blood flow to the skin surface, facilitating convective and radiative heat dissipation.",
    topic_name: "Thermoregulation Mechanisms",
    instruction_category: "Homeostasis"
  },
  {
    question_number: 22,
    question_text: "Mammals living in the tropics as compared to similar species living in the Polar Regions have generally large protruding structures. Why?",
    option_a: "To minimize water loss",
    option_b: "To maximize heat loss",
    option_c: "To regulate salt loss",
    option_d: "To gain weight",
    options: [
      "To minimize water loss",
      "To maximize heat loss",
      "To regulate salt loss",
      "To gain weight"
    ],
    correct_answer: "B",
    explanation: "According to Allen's Rule, warm-blooded animals in hot, tropical climates evolve longer extremities, ears, and appendages to increase their surface area and maximize radiative heat dissipation.",
    topic_name: "Ecogeographical Rules (Allen's Rule)",
    instruction_category: "Ecology & Evolution"
  },
  {
    question_number: 23,
    question_text: "To which of the following does a zoologist have minimum concern?",
    option_a: "Geographical distribution of animals",
    option_b: "Study of animals along the course of evolution",
    option_c: "Genetic manipulation of animals",
    option_d: "Animal behavior",
    options: [
      "Geographical distribution of animals",
      "Study of animals along the course of evolution",
      "Genetic manipulation of animals",
      "Animal behavior"
    ],
    correct_answer: "C",
    explanation: "Zoology traditionally focuses on animal behavior (ethology), evolutionary biology, anatomy, physiology, and biogeography. Direct artificial genetic manipulation and recombinant engineering are primarily domains of biotechnology and genetic engineering.",
    topic_name: "Branches of Biology - Zoology",
    instruction_category: "General Biology"
  },
  {
    question_number: 24,
    question_text: "According to the induced fit hypothesis of enzyme catalysis, which of the following is correct?",
    option_a: "The binding of the substrate depends on the shape of the active site.",
    option_b: "Some enzymes change their structure when activators bind to the enzyme.",
    option_c: "A competitive inhibitor outcompete the substrate for the active site.",
    option_d: "The binding of the substrate changes the shape of the enzyme’s active site.",
    options: [
      "The binding of the substrate depends on the shape of the active site.",
      "Some enzymes change their structure when activators bind to the enzyme.",
      "A competitive inhibitor outcompete the substrate for the active site.",
      "The binding of the substrate changes the shape of the enzyme’s active site."
    ],
    correct_answer: "D",
    explanation: "The induced fit hypothesis states that the active site is flexible, and substrate binding induces conformational changes in the enzyme that bring catalytic residues into optimal alignment to catalyze the reaction.",
    topic_name: "Induced Fit Model of Enzyme Catalysis",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 25,
    question_text: "Which one of the following is an example of territorial behavior of animals?",
    option_a: "Fixed action of zebra fish to find a mate",
    option_b: "Honeybees nesting in a tree",
    option_c: "A male robin threatening an intruder",
    option_d: "Penguins huddling to reduce heat loss",
    options: [
      "Fixed action of zebra fish to find a mate",
      "Honeybees nesting in a tree",
      "A male robin threatening an intruder",
      "Penguins huddling to reduce heat loss"
    ],
    correct_answer: "C",
    explanation: "Territorial behavior involves defending a defined geographic feeding or breeding area against conspecific rivals, exemplified by a male European robin displaying red breast feathers and vocalizing aggressively to expel intruders.",
    topic_name: "Social & Territorial Behavior",
    instruction_category: "Behavioral Biology"
  },
  {
    question_number: 26,
    question_text: "Which of the following thermoregulatory mechanisms in homoeothermic animals is categorized into behavioral method?",
    option_a: "Go into mud when the temperature rises",
    option_b: "Dilation of capillaries under the skin when the temperature increases",
    option_c: "Shivering as a result of drop in temperature",
    option_d: "Sweating when the temperature rises",
    options: [
      "Go into mud when the temperature rises",
      "Dilation of capillaries under the skin when the temperature increases",
      "Shivering as a result of drop in temperature",
      "Sweating when the temperature rises"
    ],
    correct_answer: "A",
    explanation: "Wallowing in mud or seeking shade/burrows is a voluntary, behavioral thermoregulatory action, whereas sweating, vasodilation, and shivering are involuntary physiological reflex responses.",
    topic_name: "Behavioral vs Physiological Thermoregulation",
    instruction_category: "Animal Physiology"
  },
  {
    question_number: 27,
    question_text: "All of the followings are examples of osmoconformers EXCEPT:",
    option_a: "Lobster",
    option_b: "Human",
    option_c: "Starfish",
    option_d: "Jelly fish",
    options: ["Lobster", "Human", "Starfish", "Jelly fish"],
    correct_answer: "B",
    explanation: "Marine invertebrates (starfish, jellyfish, lobsters) are osmoconformers whose internal osmolarity matches the surrounding seawater. Terrestrial mammals (humans) are strict osmoregulators maintaining internal osmolarity independent of external conditions.",
    topic_name: "Osmoregulation vs Osmoconformity",
    instruction_category: "Comparative Physiology"
  },
  {
    question_number: 28,
    question_text: "Which of the following physiological thermoregulatory mechanism is not normally associated with cold weather?",
    option_a: "Contraction erector mucles underskin result in erection of hair",
    option_b: "Increasing contraction and relaxation of muscles which causes shivering",
    option_c: "Widening of capillaries under the skin which facilitates heat loss",
    option_d: "Increasing rate in metabolism to generate heat",
    options: [
      "Contraction erector mucles underskin result in erection of hair",
      "Increasing contraction and relaxation of muscles which causes shivering",
      "Widening of capillaries under the skin which facilitates heat loss",
      "Increasing rate in metabolism to generate heat"
    ],
    correct_answer: "C",
    explanation: "In cold weather, cutaneous arterioles undergo vasoconstriction (narrowing) to retain core heat. Widening (vasodilation) occurs during hot weather to facilitate heat loss.",
    topic_name: "Physiological Responses to Cold",
    instruction_category: "Homeostasis"
  },
  {
    question_number: 29,
    question_text: "Which statement best describes the enzyme represented in the graphs showing temperature peak at 35°C and pH peak at 8?",
    option_a: "This enzyme works best at a temperature of 35°C and a pH of 8.",
    option_b: "This enzyme works best at a temperature of 50°C and a pH of 12.",
    option_c: "Temperature and pH have no effect on the action of this enzyme.",
    option_d: "This enzyme works best at a temperature above 50°C and a pH above 12.",
    options: [
      "This enzyme works best at a temperature of 35°C and a pH of 8.",
      "This enzyme works best at a temperature of 50°C and a pH of 12.",
      "Temperature and pH have no effect on the action of this enzyme.",
      "This enzyme works best at a temperature above 50°C and a pH above 12."
    ],
    correct_answer: "A",
    explanation: "The graphical curves show maximum relative rate of enzyme action at an optimum temperature of ~35 °C and an optimum pH of 8.0.",
    topic_name: "Enzyme Temperature & pH Optimum",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 30,
    question_text: "A double-stranded DNA molecule contains a total of 120 purines and 120 pyrimidines. This DNA molecule could be composed of:",
    option_a: "120 thymine and 120 adenine molecules.",
    option_b: "120 cytosine and 120 thymine molecules.",
    option_c: "240 adenine and 240 cytosine molecules.",
    option_d: "240 guanine and 240 thymine molecules.",
    options: [
      "120 thymine and 120 adenine molecules.",
      "120 cytosine and 120 thymine molecules.",
      "240 adenine and 240 cytosine molecules.",
      "240 guanine and 240 thymine molecules."
    ],
    correct_answer: "A",
    explanation: "By Chargaff's rules, total purines (A + G) = total pyrimidines (T + C) = 120. If a DNA molecule consists purely of A-T base pairs, it would contain 120 adenine (purines) and 120 thymine (pyrimidines), giving a total of 240 nucleotides.",
    topic_name: "Chargaff's Rules & Nucleic Acid Structure",
    instruction_category: "Molecular Genetics"
  },
  {
    question_number: 31,
    question_text: "Which of the following statement about double-stranded DNA is false?",
    option_a: "The backbone contains Deoxy ribose sugars and phosphate groups.",
    option_b: "The strands are formed by nucleotides linked together via phosphodiester linkage",
    option_c: "The two strands have an antiparallel orientation",
    option_d: "The bases are on the outside of the helix and connect the two strands together",
    options: [
      "The backbone contains Deoxy ribose sugars and phosphate groups.",
      "The strands are formed by nucleotides linked together via phosphodiester linkage",
      "The two strands have an antiparallel orientation",
      "The bases are on the outside of the helix and connect the two strands together"
    ],
    correct_answer: "D",
    explanation: "In the B-DNA double helix structure (Watson and Crick), the hydrophilic sugar-phosphate backbones are on the exterior/outside, while hydrophobic nitrogenous bases face the interior/inside of the helix where they pair via hydrogen bonds.",
    topic_name: "DNA Double Helix Structure",
    instruction_category: "Molecular Genetics"
  },
  {
    question_number: 32,
    question_text: "Which of the following is true of the figure showing isoleucine inhibiting threonine deaminase (the first enzyme in its pathway)?",
    option_a: "End product inhibition.",
    option_b: "Irreversible inhibition",
    option_c: "Enzyme Denaturation.",
    option_d: "competitive inhibition",
    options: [
      "End product inhibition.",
      "Irreversible inhibition",
      "Enzyme Denaturation.",
      "competitive inhibition"
    ],
    correct_answer: "A",
    explanation: "The pathway shows feedback (end-product) inhibition: isoleucine, the final product of the multi-step metabolic pathway, binds allosterically to threonine deaminase (the first committed enzyme) to shut down its own biosynthesis when levels are sufficient.",
    topic_name: "Feedback / End-Product Inhibition",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 33,
    question_text: "Why do the hairs on our skin sometimes stand up when we are cold?",
    option_a: "To know when we are frightened",
    option_b: "To trap air under them in order to keep us warmer",
    option_c: "To release air order to cool us down",
    option_d: "To trap air under them to keep us cooler",
    options: [
      "To know when we are frightened",
      "To trap air under them in order to keep us warmer",
      "To release air order to cool us down",
      "To trap air under them to keep us cooler"
    ],
    correct_answer: "B",
    explanation: "Piloerection (goosebumps) caused by contraction of arrector pili muscles raises body hair to trap a layer of stagnant air next to the skin, which acts as an insulating barrier against heat loss.",
    topic_name: "Piloerection & Thermal Insulation",
    instruction_category: "Human Physiology"
  },
  {
    question_number: 34,
    question_text: "Some bacteria are metabolically active in hot springs because:",
    option_a: "They are able to maintain a cooler internal temperature.",
    option_b: "High temperatures make catalysis unnecessary.",
    option_c: "Their enzymes have high optimal temperatures.",
    option_d: "their enzymes are completely insensitive to temperature",
    options: [
      "They are able to maintain a cooler internal temperature.",
      "High temperatures make catalysis unnecessary.",
      "Their enzymes have high optimal temperatures.",
      "their enzymes are completely insensitive to temperature"
    ],
    correct_answer: "C",
    explanation: "Thermophilic organisms (e.g. Thermus aquaticus) possess thermally stable enzymes with extensive hydrophobic cores, ionic disulfide bonds, and high optimal temperatures (70-80 °C+).",
    topic_name: "Thermophilic Enzymes & Extremophiles",
    instruction_category: "Biochemistry & Microbiology"
  },
  {
    question_number: 35,
    question_text: "Increasing the substrate concentration in an enzymatic reaction could overcome which of the following?",
    option_a: "Denaturization of the enzyme",
    option_b: "Allosteric inhibition",
    option_c: "Competitive inhibition",
    option_d: "Saturation of the enzyme activity",
    options: [
      "Denaturization of the enzyme",
      "Allosteric inhibition",
      "Competitive inhibition",
      "Saturation of the enzyme activity"
    ],
    correct_answer: "C",
    explanation: "Competitive inhibitors bind reversibly to the active site. Increasing substrate concentration outcompetes the inhibitor for active site binding, restoring maximum catalytic velocity (Vmax).",
    topic_name: "Competitive Enzyme Inhibition",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 36,
    question_text: "Which one of the following is true of allosteric inhibition?",
    option_a: "Enzymes are activated when activator attached on the active site.",
    option_b: "Inhibition by uncompetitive inhibitor when it affect enzyme action",
    option_c: "Inhibition by competitive inhibitors when it interacts on the allosteric site",
    option_d: "It occurred when inhibitors attached on the allosteric site altering active site shape",
    options: [
      "Enzymes are activated when activator attached on the active site.",
      "Inhibition by uncompetitive inhibitor when it affect enzyme action",
      "Inhibition by competitive inhibitors when it interacts on the allosteric site",
      "It occurred when inhibitors attached on the allosteric site altering active site shape"
    ],
    correct_answer: "D",
    explanation: "Allosteric inhibition occurs when an effector molecule binds to a regulatory (allosteric) site distinct from the active site, inducing a conformational change that lowers active site affinity for the substrate.",
    topic_name: "Allosteric Regulation of Enzymes",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 37,
    question_text: "Consider the chemical reactions: I. X + H2O -> X + Y, II. APO4- + B -> A + BPO4. The enzymes that catalyze reactions I and II represent respectively:",
    option_a: "Lyases and Hydrolases",
    option_b: "Ligases and Transferases",
    option_c: "Transferases and Hydrolases",
    option_d: "Hydrolases and Transferases",
    options: [
      "Lyases and Hydrolases",
      "Ligases and Transferases",
      "Transferases and Hydrolases",
      "Hydrolases and Transferases"
    ],
    correct_answer: "D",
    explanation: "Reaction I uses water to cleave a chemical bond, which is catalyzed by a Hydrolase (EC 3). Reaction II transfers a functional phosphate group from molecule A to molecule B, which is catalyzed by a Transferase (EC 2).",
    topic_name: "Enzyme Classification (EC System)",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 38,
    question_text: "Which statement is incorrect about the factors that influence the rate of enzymatic action?",
    option_a: "When sufficient substrate is available the active site almost always occupied.",
    option_b: "An enzymes activity is generally reduced by an increase in substrate concentration.",
    option_c: "A change in an extreme PH causes an enzyme to be inactivated.",
    option_d: "As temperature increases so the rates of an enzyme activity up to optimum point",
    options: [
      "When sufficient substrate is available the active site almost always occupied.",
      "An enzymes activity is generally reduced by an increase in substrate concentration.",
      "A change in an extreme PH causes an enzyme to be inactivated.",
      "As temperature increases so the rates of an enzyme activity up to optimum point"
    ],
    correct_answer: "B",
    explanation: "Increasing substrate concentration increases the collision frequency between substrate and active sites, thereby increasing the reaction rate until all active sites become saturated (Vmax). It does not reduce activity.",
    topic_name: "Factors Influencing Enzyme Activity",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 39,
    question_text: "Zinc, an essential trace element for most organisms, is present in the active site of the enzyme carboxypeptidase. The zinc most likely functions as a:",
    option_a: "Cofactor necessary for enzyme activity.",
    option_b: "Coenzyme derived from a vitamin.",
    option_c: "Competitive inhibitor of the enzyme.",
    option_d: "Allosteric activator of the enzyme",
    options: [
      "Cofactor necessary for enzyme activity.",
      "Coenzyme derived from a vitamin.",
      "Competitive inhibitor of the enzyme.",
      "Allosteric activator of the enzyme"
    ],
    correct_answer: "A",
    explanation: "Inorganic metallic ions (like Zn2+, Mg2+, Fe2+) required for the catalytic function of metalloenzymes act as essential enzyme cofactors.",
    topic_name: "Enzyme Cofactors & Coenzymes",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 40,
    question_text: "Six test-tubes containing identical starch and amylase solutions were incubated at different temperatures (20°C: 50s, 25°C: 30s, 30°C: 15s, 35°C: 5s, 40°C: 20s, 45°C: 60s). At which temperature does the amylase work best?",
    option_a: "35 °C",
    option_b: "40 °C",
    option_c: "45 °C",
    option_d: "20 °C",
    options: ["35 °C", "40 °C", "45 °C", "20 °C"],
    correct_answer: "A",
    explanation: "Reaction rate is inversely proportional to time taken to digest starch. The shortest time (5 seconds) occurs at 35 °C, indicating that 35 °C is the optimum operating temperature for amylase in this experiment.",
    topic_name: "Enzyme Experimental Data Interpretation",
    instruction_category: "Biochemistry Laboratory"
  },
  {
    question_number: 41,
    question_text: "Which type of interaction stabilizes the alpha (α) helix and the beta (β) pleated sheet structures of proteins?",
    option_a: "Hydrophobic interactions",
    option_b: "Peptide bonds",
    option_c: "Ionic bonds",
    option_d: "Hydrogen bonds",
    options: [
      "Hydrophobic interactions",
      "Peptide bonds",
      "Ionic bonds",
      "Hydrogen bonds"
    ],
    correct_answer: "D",
    explanation: "Secondary protein structures (α-helices and β-pleated sheets) are stabilized by hydrogen bonding between the carbonyl oxygen (C=O) of one peptide bond and the amino hydrogen (N-H) of another in the polypeptide backbone.",
    topic_name: "Protein Structure (Secondary)",
    instruction_category: "Biochemistry"
  },
  {
    question_number: 42,
    question_text: "The bases in the template strand of DNA are 5ʹ AGGCTAGGC 3ʹ. The corresponding codon for the mRNA transcribed is:",
    option_a: "3ʹ UCCGAUCCG 5ʹ",
    option_b: "5ʹ UCCGAUCCG 3ʹ",
    option_c: "5ʹ UGCGAUCCG 3ʹ",
    option_d: "3ʹ UCCGAUCCC 5ʹ",
    options: [
      "3ʹ UCCGAUCCG 5ʹ",
      "5ʹ UCCGAUCCG 3ʹ",
      "5ʹ UGCGAUCCG 3ʹ",
      "3ʹ UCCGAUCCC 5ʹ"
    ],
    correct_answer: "A",
    explanation: "RNA polymerase synthesizes RNA antiparallel to the template: A pairs with U, G pairs with C, C pairs with G, and T pairs with A. For template 5'-AGGCTAGGC-3', the complementary RNA strand is 3'-UCCGAUCCG-5' (or 5'-GCCUAGCCU-3').",
    topic_name: "Transcription & Complementary Base Pairing",
    instruction_category: "Molecular Genetics"
  },
  {
    question_number: 43,
    question_text: "Which of the following stages of the cell cycle is correctly matched with events involved?",
    option_a: "G1 Phase - the cell grows, synthesizes proteins and accumulates energy and building blocks for DNA replication",
    option_b: "G0 phase - the cell accumulates the building blocks of chromosomal DNA, the associated proteins and energy to complete the task",
    option_c: "G2 Phase- the cell is neither dividing nor preparing to divide but performs regulatory and basic cellular functions",
    option_d: "M phase - DNA replication proceeds to form identical pairs of DNA molecules that are firmly attached to the centromeric region",
    options: [
      "G1 Phase - the cell grows, synthesizes proteins and accumulates energy and building blocks for DNA replication",
      "G0 phase - the cell accumulates the building blocks of chromosomal DNA, the associated proteins and energy to complete the task",
      "G2 Phase- the cell is neither dividing nor preparing to divide but performs regulatory and basic cellular functions",
      "M phase - DNA replication proceeds to form identical pairs of DNA molecules that are firmly attached to the centromeric region"
    ],
    correct_answer: "A",
    explanation: "In G1 phase (Gap 1), the cell is metabolically active, synthesizing RNA and proteins, accumulating raw materials, and growing before initiating S phase (DNA replication).",
    topic_name: "The Cell Cycle (Interphase)",
    instruction_category: "Cellular Biology"
  },
  {
    question_number: 44,
    question_text: "A cell having 32 chromosomes (2n) undergoes meiotic cell division. Then it results in:",
    option_a: "2 daughter cells each with 32 chromosomes",
    option_b: "4 daughter cells each with 16 chromosomes",
    option_c: "4 daughter cells each with 32 chromosomes",
    option_d: "2 daughter cells each with 16 chromosomes",
    options: [
      "2 daughter cells each with 32 chromosomes",
      "4 daughter cells each with 16 chromosomes",
      "4 daughter cells each with 32 chromosomes",
      "2 daughter cells each with 16 chromosomes"
    ],
    correct_answer: "B",
    explanation: "Meiosis consists of two successive nuclear divisions without an intervening S phase, resulting in 4 genetically distinct haploid daughter cells, each containing half the parent chromosome number (n = 32 / 2 = 16).",
    topic_name: "Meiosis & Chromosome Number",
    instruction_category: "Genetics and Cellular Biology"
  },
  {
    question_number: 45,
    question_text: "Which of the following is the role of topoisomerase enzyme in DNA replication?",
    option_a: "It binds to the double stranded DNA and stimulates the separation of the two strands.",
    option_b: "It adds new nucleotides to a growing strand of DNA, and links together",
    option_c: "Links two fragments of DNA by forming a phosphodiester bond",
    option_d: "It prevents super coiling at the region ahead of the replication fork.",
    options: [
      "It binds to the double stranded DNA and stimulates the separation of the two strands.",
      "It adds new nucleotides to a growing strand of DNA, and links together",
      "Links two fragments of DNA by forming a phosphodiester bond",
      "It prevents super coiling at the region ahead of the replication fork."
    ],
    correct_answer: "D",
    explanation: "Topoisomerase (DNA gyrase in prokaryotes) cuts and reseals one or both strands of DNA to relieve torsional strain and prevent supercoiling ahead of the advancing replication fork unwound by DNA helicase.",
    topic_name: "DNA Replication Enzymes",
    instruction_category: "Molecular Genetics"
  },
  {
    question_number: 46,
    question_text: "Which of the following best describes semi conservative replication of DNA?",
    option_a: "The replication of DNA never takes place with 100% accuracy",
    option_b: "The translation of a DNA molecule into a complementary strand of RNA.",
    option_c: "A DNA molecule consists of one parental strand and one new strand.",
    option_d: "The number of DNA molecules is doubled with every other replication.",
    options: [
      "The replication of DNA never takes place with 100% accuracy",
      "The translation of a DNA molecule into a complementary strand of RNA.",
      "A DNA molecule consists of one parental strand and one new strand.",
      "The number of DNA molecules is doubled with every other replication."
    ],
    correct_answer: "C",
    explanation: "The Meselson-Stahl experiment proved semiconservative replication: each newly formed double-stranded DNA molecule retains one conserved template strand from the parental molecule and one newly synthesized daughter strand.",
    topic_name: "Semiconservative DNA Replication",
    instruction_category: "Molecular Genetics"
  },
  {
    question_number: 47,
    question_text: "Which of the following type of enzyme is incorrectly matched regarding its application in industry?",
    option_a: "Cellulose – Biofuel industry",
    option_b: "Rennin – dairy industry",
    option_c: "Betaglucanase – brewing industry",
    option_d: "Trypsin – molecular biology",
    options: [
      "Cellulose – Biofuel industry",
      "Rennin – dairy industry",
      "Betaglucanase – brewing industry",
      "Trypsin – molecular biology"
    ],
    correct_answer: "D",
    explanation: "Trypsin is a proteolytic digestive enzyme primarily used in cell culture for cell detachment (trypsinization) and leather processing, whereas restriction endonucleases and DNA polymerases/ligases are the primary tools of molecular biology.",
    topic_name: "Industrial Applications of Enzymes",
    instruction_category: "Biotechnology"
  },
  {
    question_number: 48,
    question_text: "Mendel accounted for the observation that traits which had disappeared in the F1 generation reappeared in the F2 generation by proposing that:",
    option_a: "The mechanism controlling the appearance of traits was different between the F1 and the F2 plants.",
    option_b: "Traits can be dominant or recessive and the recessive traits were obscured by the dominant ones in the F1.",
    option_c: "The traits were lost in the F1 due to blending of the parental traits.",
    option_d: "Members of the F1 generation had only one allele for each character, but members of the F2 generation two alleles for each character",
    options: [
      "The mechanism controlling the appearance of traits was different between the F1 and the F2 plants.",
      "Traits can be dominant or recessive and the recessive traits were obscured by the dominant ones in the F1.",
      "The traits were lost in the F1 due to blending of the parental traits.",
      "Members of the F1 generation had only one allele for each character, but members of the F2 generation two alleles for each character"
    ],
    correct_answer: "B",
    explanation: "Mendel established that heritable factors (alleles) are discrete particulate units; a recessive allele remains intact in heterozygous F1 individuals but is masked by the dominant allele, segregating to reappear in homozygous recessive F2 individuals.",
    topic_name: "Mendelian Principles (Dominance & Segregation)",
    instruction_category: "Genetics"
  },
  {
    question_number: 49,
    question_text: "Which of the following alternatives contains the correct sequence of the three meiotic events?",
    option_a: "Pairing of homologous chromosomes, separation of homologous chromosome and separation of sister chromatids.",
    option_b: "Separation of homologous chromosomes, Pairing of homologous chromosome and separation of sister chromatids",
    option_c: "Separation of sister chromatids, Pairing of homologous chromosomes and separation of homologous chromosome",
    option_d: "Pairing of homologous chromosomes, separation of sister chromatids and separation of homologous chromosome",
    options: [
      "Pairing of homologous chromosomes, separation of homologous chromosome and separation of sister chromatids.",
      "Separation of homologous chromosomes, Pairing of homologous chromosome and separation of sister chromatids",
      "Separation of sister chromatids, Pairing of homologous chromosomes and separation of homologous chromosome",
      "Pairing of homologous chromosomes, separation of sister chromatids and separation of homologous chromosome"
    ],
    correct_answer: "A",
    explanation: "In meiosis: 1) Synapsis/pairing of homologous chromosomes occurs in Prophase I; 2) Homologous chromosomes separate in Anaphase I; 3) Sister chromatids separate in Anaphase II.",
    topic_name: "Meiotic Chromosome Dynamics",
    instruction_category: "Cellular Genetics"
  },
  {
    question_number: 50,
    question_text: "A cross between two true breeding lines one with dark blue flowers and one with bright white flowers produces F1 offspring that are light blue. When the F1 progeny are selfed, a 1:2:1 ratio of dark blue to light blue to white flowers is observed. What genetic phenomenon is consistent with these results?",
    option_a: "Incomplete dominance",
    option_b: "Codominance",
    option_c: "Random mating",
    option_d: "Complete dominance",
    options: [
      "Incomplete dominance",
      "Codominance",
      "Random mating",
      "Complete dominance"
    ],
    correct_answer: "A",
    explanation: "Incomplete dominance occurs when the heterozygous phenotype is an intermediate blend between the two homozygous parental phenotypes, yielding matching 1:2:1 genotypic and phenotypic ratios in the F2 generation.",
    topic_name: "Incomplete Dominance",
    instruction_category: "Genetics"
  },
  {
    question_number: 51,
    question_text: "In cattle, roan skin color occurs in the heterozygous (Rr), offspring of red (RR) and white (rr) homozygotes. Which of the following crosses would produce offspring in the ratio of 1 red : 2 roan : 1 white?",
    option_a: "Red X white",
    option_b: "Roan X roan",
    option_c: "White X roan",
    option_d: "Red X roan",
    options: ["Red X white", "Roan X roan", "White X roan", "Red X roan"],
    correct_answer: "B",
    explanation: "Crossing two heterozygotes (Rr × Rr) produces 1 RR (red) : 2 Rr (roan) : 1 rr (white), demonstrating a classic codominant monohybrid cross.",
    topic_name: "Codominance in Animals",
    instruction_category: "Genetics"
  },
  {
    question_number: 52,
    question_text: "Regarding seed traits, suppose a heterozygous round yellow pea plant of RrYy genotype is self-crossed and produced 256 seeds, how many of the seeds are expected to be round yellow?",
    option_a: "72",
    option_b: "36",
    option_c: "144",
    option_d: "48",
    options: ["72", "36", "144", "48"],
    correct_answer: "C",
    explanation: "In a dihybrid cross of RrYy × RrYy, the expected ratio of round yellow (R_Y_) offspring is 9/16. For 256 total seeds: Expected number = (9/16) × 256 = 9 × 16 = 144.",
    topic_name: "Dihybrid Cross Calculations",
    instruction_category: "Genetics"
  },
  {
    question_number: 53,
    question_text: "A woman with type B blood has a child with type B blood; which one of the following men couldn’t be the father of the child?",
    option_a: "AO",
    option_b: "AA",
    option_c: "OO",
    option_d: "BB",
    options: ["AO", "AA", "OO", "BB"],
    correct_answer: "B",
    explanation: "A mother with blood type B (IBIB or IBi) having a child with type B (IBIB or IBi) requires an allele contribution from the father that is either IB or i. A man with genotype AA (IAIA) can only donate an IA allele, which would result in an AB child, so he cannot be the father.",
    topic_name: "ABO Blood Group Inheritance",
    instruction_category: "Human Genetics"
  },
  {
    question_number: 54,
    question_text: "What is the Role of tRNA in translation?",
    option_a: "Assembling the amino acids into polypeptide chain",
    option_b: "Acting as a template for converting a genetic code into sequences of amino acids",
    option_c: "Carrying genetic information from DNA in the nucleus to cytoplasm",
    option_d: "Recognizing the codon of mRNA & brings the correct amino acid to the ribosome",
    options: [
      "Assembling the amino acids into polypeptide chain",
      "Acting as a template for converting a genetic code into sequences of amino acids",
      "Carrying genetic information from DNA in the nucleus to cytoplasm",
      "Recognizing the codon of mRNA & brings the correct amino acid to the ribosome"
    ],
    correct_answer: "D",
    explanation: "Transfer RNA (tRNA) functions as an adaptor molecule: its anticodon base-pairs specifically with the mRNA codon on the ribosome, delivering the corresponding amino acid attached to its 3' CCA acceptor stem.",
    topic_name: "Role of tRNA in Translation",
    instruction_category: "Molecular Genetics"
  },
  {
    question_number: 55,
    question_text: "Which of the following is alternative contains the correct description of stage of meiosis?",
    option_a: "Prophase I - chromosomes begin to condense and spindle fibers appear.",
    option_b: "Anaphase II - the pair of chromosomes are then pulled apart by the meiotic spindle.",
    option_c: "Metaphase II - pairs of chromosome align next to each other along the center equator of the cell",
    option_d: "Anaphase I - sister chromatids are pulled to opposite pole",
    options: [
      "Prophase I - chromosomes begin to condense and spindle fibers appear.",
      "Anaphase II - the pair of chromosomes are then pulled apart by the meiotic spindle.",
      "Metaphase II - pairs of chromosome align next to each other along the center equator of the cell",
      "Anaphase I - sister chromatids are pulled to opposite pole"
    ],
    correct_answer: "A",
    explanation: "During Prophase I, chromatin fibers condense into visible chromosomes, centrosomes move apart, spindle apparatus forms, and the nuclear envelope breaks down.",
    topic_name: "Stages of Meiosis",
    instruction_category: "Cellular Biology"
  },
  {
    question_number: 56,
    question_text: "Which of the following crosses will result in offspring that only display the dominant phenotype?",
    option_a: "Homozygous dominant & heterozygous recessive",
    option_b: "Homozygous dominant & Homozygous recessive",
    option_c: "Heterozygous dominant & heterozygous recessive",
    option_d: "Heterozygous dominant & Homozygous dominant",
    options: [
      "Homozygous dominant & heterozygous recessive",
      "Homozygous dominant & Homozygous recessive",
      "Heterozygous dominant & heterozygous recessive",
      "Heterozygous dominant & Homozygous dominant"
    ],
    correct_answer: "B",
    explanation: "Crossing a homozygous dominant (AA) parent with a homozygous recessive (aa) parent produces 100% heterozygous (Aa) offspring, all expressing 100% dominant phenotype.",
    topic_name: "Monohybrid Cross Phenotypic Outcomes",
    instruction_category: "Genetics"
  },
  {
    question_number: 57,
    question_text: "How does crossing over during meiosis bring variation in species?",
    option_a: "Creating genes that are not found in both parents due to meiosis",
    option_b: "Increasing the number of genes in one of the parents during meiosis",
    option_c: "Combining of genes in gametes into new recombinant combinations not found in either parent chromosome alone",
    option_d: "Combining the segment of DNA on sex chromosome and autosome",
    options: [
      "Creating genes that are not found in both parents due to meiosis",
      "Increasing the number of genes in one of the parents during meiosis",
      "Combining of genes in gametes into new recombinant combinations not found in either parent chromosome alone",
      "Combining the segment of DNA on sex chromosome and autosome"
    ],
    correct_answer: "C",
    explanation: "Crossing over shuffles maternal and paternal alleles on homologous chromatids, creating novel recombinant genotypes and genetic diversity in gametes.",
    topic_name: "Genetic Recombination & Variation",
    instruction_category: "Genetics and Evolution"
  },
  {
    question_number: 58,
    question_text: "Which of the following is correct sequence of modern malting?",
    option_a: "Steeping, heating, germinating",
    option_b: "Steeping, germinating, Heating (Kilning)",
    option_c: "Heating, Steeping, germinating",
    option_d: "Germinating, steeping, heating",
    options: [
      "Steeping, heating, germinating",
      "Steeping, germinating, Heating (Kilning)",
      "Heating, Steeping, germinating",
      "Germinating, steeping, heating"
    ],
    correct_answer: "B",
    explanation: "The industrial malting process consists of three main sequential stages: 1) Steeping (soaking barley in water), 2) Germinating (allowing grains to sprout and activate amylases), and 3) Kilning/Heating (drying with hot air to halt growth and preserve enzymes).",
    topic_name: "Industrial Malting Process",
    instruction_category: "Applied Biology"
  },
  {
    question_number: 59,
    question_text: "Which of the following genotypic ratio is not expected in the offspring if two tall pea plants are mated (where tall is dominant over short)?",
    option_a: "100% TT",
    option_b: "50% TT, 50% tt",
    option_c: "50% Tt, 50% TT",
    option_d: "25% TT, 50% Tt, 25% tt",
    options: [
      "100% TT",
      "50% TT, 50% tt",
      "50% Tt, 50% TT",
      "25% TT, 50% Tt, 25% tt"
    ],
    correct_answer: "B",
    explanation: "Two tall plants can have genotypes TT × TT (100% TT), TT × Tt (50% TT, 50% Tt), or Tt × Tt (25% TT, 50% Tt, 25% tt). A ratio of 50% TT, 50% tt is genetically impossible from mating two tall plants.",
    topic_name: "Mendelian Genotypic Ratios",
    instruction_category: "Genetics"
  },
  {
    question_number: 60,
    question_text: "Some events that take place during the synthesis of a specific protein are listed below:\nI. Messenger RNA attaches to a ribosome.\nII. DNA serves as a template for mRNA production.\nIII. Transfer RNA bonds to a specific codon.\nIV. Amino acids are bonded together.\nV. Messenger RNA moves from the nucleus to the cytoplasm.\nThe correct chronological order of these events is:",
    option_a: "II, V, I, III & IV",
    option_b: "II, V, III, I & IV",
    option_c: "V, II, I, III & IV",
    option_d: "II, V, I, IV & III",
    options: [
      "II, V, I, III & IV",
      "II, V, III, I & IV",
      "V, II, I, III & IV",
      "II, V, I, IV & III"
    ],
    correct_answer: "A",
    explanation: "The correct sequence of protein synthesis is: (II) Transcription of mRNA from DNA template -> (V) mRNA export from nucleus to cytoplasm -> (I) mRNA binds to small ribosomal subunit -> (III) Aminoacyl-tRNA anticodon binds codon -> (IV) Peptidyl transferase catalyzes peptide bond formation.",
    topic_name: "Protein Synthesis Sequence",
    instruction_category: "Molecular Genetics"
  }
];

module.exports = questions;
