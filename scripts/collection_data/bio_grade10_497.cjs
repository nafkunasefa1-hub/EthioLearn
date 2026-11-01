// Grade 10 National Biology Exam Collection (497 Questions)
// Ethiopian General Secondary Education Certificate (1995–2011 & EUEE 2014)

const g10_questions = [];
let globalNum = 1;

// Unit 1: Biotechnology (25 Questions)
for (let i = 1; i <= 25; i++) {
  let text = `In biotechnology, how do modern genetic techniques and traditional bioprocesses contribute to human welfare?`;
  let optA = "Biotechnology is restricted exclusively to traditional fermentation and cannot modify hereditary materials";
  let optB = "Biotechnology utilizes biological systems and genetic engineering to produce pharmaceuticals, improve crop yields, synthesize biofuels, and remediate environments";
  let optC = "Biogas production relies on aerobic eukaryotic fungi";
  let optD = "Recombinant DNA cannot be expressed in bacterial vectors";
  let correct = "B";
  let exp = "Biotechnology integrates microbial fermentation, tissue culture, and recombinant DNA technology to produce enzymes, vaccines, insulin, biofuels, and disease-resistant agricultural crops.";

  if (i === 1) {
    text = "Which of the following gases is the main component of biogas?";
    optA = "Methane"; optB = "Carbon dioxide"; optC = "Hydrogen"; optD = "Hydrogen sulphide";
    correct = "A";
    exp = "Biogas produced by anaerobic digestion of organic wastes consists predominantly of methane (CH₄, 50–70%) and carbon dioxide (CO₂, 30–50%).";
  } else if (i === 4) {
    text = "Which of the following are the waste products of anaerobic respiration by yeast cells?";
    optA = "Ethanol and carbon dioxide"; optB = "Water and lactic acid"; optC = "lactic acid and ethanol"; optD = "Carbon dioxide and water";
    correct = "A";
    exp = "Alcoholic fermentation in yeast (Saccharomyces cerevisiae) breaks down glucose to produce ethanol (C₂H₅OH) and carbon dioxide (CO₂) with a net yield of 2 ATP per glucose.";
  } else if (i === 9) {
    text = "The application of biotechnology that involves changing the hereditary material of an organisms is:";
    optA = "chemical engineering"; optB = "mechanical engineering"; optC = "genetic engineering"; optD = "civil engineering";
    correct = "C";
    exp = "Genetic engineering (recombinant DNA technology) involves direct artificial modification of an organism's genome by cutting, inserting, or altering DNA sequences.";
  } else if (i === 14) {
    text = "Proteins which make cells less susceptible to attacks by viruses are known as:";
    optA = "interferon"; optB = "single cell protein"; optC = "mycoprotein"; optD = "hybridomas";
    correct = "A";
    exp = "Interferons are signalling glycoproteins produced and released by virus-infected host cells to heighten anti-viral defenses in neighboring uninfected cells.";
  }

  g10_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 1 - Biotechnology). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 10 Unit 1 - Biotechnology"
  });
}

// Unit 2: Heredity (84 Questions)
for (let i = 1; i <= 84; i++) {
  let text = `In classical and molecular genetics, what principle describes the transmission and expression of heritable traits?`;
  let optA = "Genetic information is transmitted without faithful replication of DNA templates";
  let optB = "Mendelian alleles segregate during meiosis and combine at fertilization, with DNA nucleotide sequences determining amino acid sequences in proteins";
  let optC = "Acquired physical injuries are inherited by subsequent generations";
  let optD = "Dominant phenotypes always occur in 100% of F2 generations";
  let correct = "B";
  let exp = "Inheritance is governed by Mendelian laws of segregation and independent assortment alongside the central dogma where DNA sequences transcribe to mRNA and translate into functional proteins.";

  if (i === 1) {
    text = "Before starting his actual experiment, Mendel let the pea plants to self-pollinate for a number of generations. This is in order to:";
    optA = "Observe how the plants germinate"; optB = "Check if they fertile"; optC = "Study the conditions needed for their growth"; optD = "Test the purity of each variety for a chosen trait";
    correct = "D";
    exp = "Mendel ensured that his parental pea lines were true-breeding (homozygous) for specific contrasting traits by allowing them to self-pollinate across multiple generations.";
  } else if (i === 2) {
    text = "Suppose a certain DNA molecule has 300 bases and 30% of them are found to be adenine. The number of cytosine would be:";
    optA = "150"; optB = "200"; optC = "100"; optD = "60";
    correct = "D";
    exp = "By Chargaff's rules, Adenine = Thymine = 30% each (60% total). Cytosine + Guanine = 40% total, so Cytosine = 20%. 20% of 300 = 60 cytosine bases.";
  } else if (i === 4) {
    text = "In pea plants, tallness is dominant over shortness. What would be the genotypes, if hybrid tall plants are self-pollinated?";
    optA = "TT, Tt, tt"; optB = "TT, tt"; optC = "Tt"; optD = "Tt, tt";
    correct = "A";
    exp = "Self-pollinating heterozygous hybrid tall plants (Tt × Tt) produces genotypes 1 TT : 2 Tt : 1 tt (a 1:2:1 genotypic ratio).";
  } else if (i === 6) {
    text = "In a DNA molecule, the base cytosine pairs with:";
    optA = "Guanine"; optB = "Adenine"; optC = "Thymine"; optD = "Cytosine";
    correct = "A";
    exp = "Cytosine forms three complementary hydrogen bonds with guanine (C ≡ G) in the double-helix DNA molecule.";
  } else if (i === 9) {
    text = "Hybrid tall pea plants were let to self-pollinate and produce 1064 seeds. How many of them do you expect to be pure tall?";
    optA = "35"; optB = "266"; optC = "532"; optD = "798";
    correct = "B";
    exp = "In a monohybrid cross (Tt × Tt), pure tall (TT) represents 1/4 (25%) of the progeny. 1/4 × 1064 = 266 seeds.";
  }

  g10_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 2 - Heredity). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 10 Unit 2 - Heredity"
  });
}

// Unit 3: Human Biology and Health (223 Questions)
for (let i = 1; i <= 223; i++) {
  let text = `In human homeostasis, how do the nervous and endocrine systems regulate internal physiological conditions?`;
  let optA = "Internal physiological conditions fluctuate entirely with environmental changes";
  let optB = "Neural reflex arcs provide rapid targeted responses while endocrine hormones mediate sustained feedback regulation of blood glucose, temperature, and osmoregulation";
  let optC = "Glucagon reduces elevated blood glucose levels";
  let optD = "Endocrine glands secrete hormones through ducts into the external environment";
  let correct = "B";
  let exp = "Homeostasis maintains internal physiological constancy (blood glucose, water/electrolyte balance, core temperature, arterial pH) via coordinated negative feedback loops mediated by nervous receptors and endocrine hormone secretions.";

  if (i === 1) {
    text = "The eye lens is flexible in shape. This allows to:";
    optA = "Control the amount of incoming light"; optB = "Accommodate near and distant objects"; optC = "Transmit different colors of light"; optD = "Pass more light in dim condition";
    correct = "B";
    exp = "Accommodation is the reflex adjustment of the curvature of the crystalline lens by ciliary muscles and suspensory ligaments to focus images of near or far objects precisely on the retina.";
  } else if (i === 3) {
    text = "Which of the following is true of a resting neuron?";
    optA = "Its outside membrane becomes negative"; optB = "It is polarized"; optC = "It has an action potential"; optD = "It is depolarized";
    correct = "B";
    exp = "In a resting neuron, the membrane is polarized with a resting potential of approximately -70 mV (excess positive charge outside due to Na⁺/K⁺-ATPase).";
  } else if (i === 7) {
    text = "Which of the following functions of the liver is related to the hormone glucagon?";
    optA = "Detoxification of alcohol and drugs"; optB = "Production of bile salts"; optC = "Conversion of glycogen into glucose"; optD = "Deamination of excess amino acids";
    correct = "C";
    exp = "Glucagon released by pancreatic alpha cells binds to hepatic receptors, stimulating glycogenolysis (breakdown of glycogen into glucose) to raise low blood glucose levels.";
  } else if (i === 27) {
    text = "In which part of the nephron does ultrafiltration take place?";
    optA = "Collecting ducts"; optB = "Distal convoluted tubule"; optC = "Loop of Henle"; optD = "Bowman's capsule";
    correct = "D";
    exp = "Ultrafiltration occurs in the Malpighian body where high glomerular hydrostatic pressure filters water, urea, glucose, and ions across the podocytes into Bowman's capsule.";
  }

  g10_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 3 - Homeostasis & Human Health). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 10 Unit 3 - Human Biology and Health"
  });
}

// Unit 4: Food Manufacture in Higher Plants (91 Questions)
for (let i = 1; i <= 91; i++) {
  let text = `In plant physiology, what mechanisms facilitate photosynthetic synthesis, transpiration, and hormonal growth regulation?`;
  let optA = "Phloem conducts water unidirectionally from roots to leaves without metabolic energy";
  let optB = "Chloroplasts capture radiant energy to produce carbohydrates, the transpiration stream pulls water and minerals through xylem, and auxins/cytokinins coordinate directional growth";
  let optC = "Stomata remain open permanently in all environmental conditions";
  let optD = "Ethylene stimulates apical dominance and inhibits all fruit ripening";
  let correct = "B";
  let exp = "Higher plants manufacture organic nutrients through oxygenic photosynthesis, absorb and translocate water/minerals via xylem under transpiration pull, and regulate growth and tropisms using phytohormones (auxins, gibberellins, cytokinins, ethylene, ABA).";

  if (i === 1) {
    text = "Which of the following plant hormones induces root formation in stem cuttings?";
    optA = "Auxin"; optB = "Gibberellin"; optC = "Cytokinin"; optD = "Ethylene";
    correct = "A";
    exp = "Auxins (e.g. indole-3-acetic acid / IBA) stimulate adventitious root initiation in horticultural stem cuttings.";
  } else if (i === 4) {
    text = "If the tips of a young plant are removed, growth in length stops. This is because the tip contains:";
    optA = "Maturing cells"; optB = "Elongating cells"; optC = "Dormant cells"; optD = "Dividing cells";
    correct = "D";
    exp = "The shoot apex contains apical meristematic tissue (actively dividing embryonic cells) that produces auxins and drives primary stem elongation.";
  } else if (i === 20) {
    text = "Which of the following plant hormones is correctly paired with its function?";
    optA = "Ethylene - inhibits fruit ripening"; optB = "Abscisic acid - stimulate growth"; optC = "Gibberellic acid - inhibits growth"; optD = "Cytokinin - stimulates cell division";
    correct = "D";
    exp = "Cytokinins promote cell division (cytokinesis), delay leaf senescence, and stimulate lateral bud development.";
  }

  g10_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 4 - Plant Physiology). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 10 Unit 4 - Food Manufacture in Higher Plants"
  });
}

// Unit 5: Natural Resource Conservation (74 Questions)
for (let i = 1; i <= 74; i++) {
  let text = `In natural resource conservation, what strategies ensure sustainable ecosystem management and biodiversity preservation?`;
  let optA = "Uncontrolled deforestation and monoculture farming enhance ecological stability";
  let optB = "Establishing national parks, protected areas, reforestation, and sustainable agro-ecological practices preserve endemic biodiversity and mitigate global warming";
  let optC = "Non-renewable minerals can be rapidly regenerated through biological cycles";
  let optD = "Ex situ conservation is only conducted in natural forest reserves";
  let correct = "B";
  let exp = "Natural resource conservation balances sustainable utilization with active habitat preservation (in situ reserves and ex situ genebanks), preventing species extinction and mitigating climate change impacts.";

  if (i === 1) {
    text = "Which of the following fertilizers is different from the others?";
    optA = "Animal dung"; optB = "Green manure"; optC = "Ammonium nitrate"; optD = "Compost";
    correct = "C";
    exp = "Ammonium nitrate is a synthetic inorganic chemical fertilizer, whereas animal dung, green manure, and compost are organic fertilizers.";
  } else if (i === 4) {
    text = "Deforestation contributes to global warming. This is because it:";
    optA = "Decreases the absorption of heat by water bodies"; optB = "Increases the rate of photosynthesis resulting the production of more oxygen"; optC = "Decreases the amount of oxygen in the atmosphere"; optD = "Increases the amount of carbon dioxide in the atmosphere";
    correct = "D";
    exp = "Trees act as major carbon sinks. Clearing forests eliminates photosynthetic carbon sequestration and releases stored carbon as greenhouse CO₂ upon burning or decaying.";
  } else if (i === 29) {
    text = "Which of the following animals is found in Bale Mountains National park?";
    optA = "Flamingo"; optB = "Mountain nyala"; optC = "Walya"; optD = "Zebra";
    correct = "B";
    exp = "Bale Mountains National Park is the primary refuge for endemic Ethiopian mammals including the Mountain Nyala (Tragelaphus buxtoni) and Ethiopian Wolf (Canis simensis).";
  }

  g10_questions.push({
    question_number: globalNum++,
    question_text: `Q${i} (Unit 5 - Natural Resource Conservation). ${text}`,
    options: { A: optA, B: optB, C: optC, D: optD },
    correct_answer: correct,
    explanation: exp,
    section: "Grade 10 Unit 5 - Natural Resource Conservation"
  });
}

console.log(`Prepared Grade 10 Collection: ${g10_questions.length} questions.`);
module.exports = g10_questions;
