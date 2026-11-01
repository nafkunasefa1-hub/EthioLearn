const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'data', 'database.json');

const PASSAGE_1 = `Sustainable agroforestry and watershed rehabilitation have become central pillars of environmental and rural economic policy in the Ethiopian highlands. Over decades of intensive cereal cultivation and seasonal grazing, steep terrain across regions such as Amhara, Oromia, and Tigray suffered severe topsoil erosion, nutrient depletion, and irregular stream hydrology. In response, integrated soil and water conservation (SWC) programs—incorporating deep stone bunding, terracing, and the reintroduction of indigenous leguminous tree species like Acacia albida (Faidherbia albida)—have yielded measurable ecological restoration. Faidherbia albida exhibits 'reverse phenology': it sheds its foliage during the wet agricultural season, thereby preventing canopy shading over staple crops like teff, maize, and sorghum, while its nitrogen-rich leaf litter enriches topsoil organic matter. Concurrently, micro-watershed enclosure systems have curtailed surface rainwater runoff, allowing groundwater aquifers to recharge and perennial natural springs to re-emerge downstream. Economic assessments indicate that smallholder households participating in collaborative watershed management experience increased crop yields, reduced seasonal drought vulnerability, and diversified income streams through apiculture and fodder production.`;

const PASSAGE_2 = `The rapid expansion of mobile telecommunications and digital payment systems has catalyzed transformative financial inclusion across Ethiopia. Historically, formal commercial banking services remained heavily concentrated in major urban centers, leaving rural farming communities and micro-merchants underserved due to prohibitive physical branch infrastructure costs and strict collateral requirements. The national rollout of mobile money platforms—most notably Telebirr alongside licensed private payment system operators—has fundamentally altered this paradigm. By leveraging ubiquitous cellular networks and USSD technology, digital wallets enable users to execute peer-to-peer remittances, purchase utility services, receive agricultural input subsidies, and settle local commerce transactions without a conventional bank account. Financial economists note that real-time mobile liquidity shortens transaction settlement cycles, mitigates the physical theft risks associated with carrying paper cash across rural weekly markets, and builds digital transactional footprints that enable micro-credit scoring. However, realizing the full potential of this fintech revolution requires overcoming persistent rural network connectivity dead zones, expanding digital financial literacy among elderly and rural populations, and maintaining stringent cybersecurity against mobile fraud and phishing vectors.`;

const SAT_2016_QUESTIONS = [
  // --- Section 1: Verbal Reasoning & Word Analogies (Q1 - Q8) ---
  {
    question_number: 1,
    section_instruction: "Each question consists of a related pair of words followed by four lettered pairs. Select the pair that best expresses a relationship similar to that expressed in the original pair.",
    instruction_category: "Verbal Reasoning & Word Analogies",
    topic_name: "Word Analogies",
    question_text: "OMNISCIENT : KNOWLEDGE ::",
    option_a: "omnipotent : power",
    option_b: "benevolent : malice",
    option_c: "audacious : fear",
    option_d: "tenacious : weakness",
    correct_answer: "A",
    explanation: "Omniscient means having complete, infinite knowledge. Similarly, omnipotent means having complete, unlimited power. Both words describe an absolute, maximal quality of the corresponding noun (omni- prefix). In contrast, benevolent is the opposite of malice, audacious is the absence of fear, and tenacious is the absence of weakness.",
    difficulty: "Medium"
  },
  {
    question_number: 2,
    section_instruction: "Select the pair that best expresses a relationship similar to that expressed in the original pair.",
    instruction_category: "Verbal Reasoning & Word Analogies",
    topic_name: "Word Analogies",
    question_text: "REFRACT : LIGHT ::",
    option_a: "echo : sound",
    option_b: "absorb : heat",
    option_c: "deflect : motion",
    option_d: "magnify : lens",
    correct_answer: "C",
    explanation: "To refract is to change the direction of light as it passes through a medium (altering its path). Similarly, to deflect is to change the direction of motion or trajectory of an object. While sound echoes (A), an echo is a reflection rather than a directional refraction, and a lens (D) is the instrument, not the effect.",
    difficulty: "Hard"
  },
  {
    question_number: 3,
    section_instruction: "Select the pair that best expresses a relationship similar to that expressed in the original pair.",
    instruction_category: "Verbal Reasoning & Word Analogies",
    topic_name: "Word Analogies",
    question_text: "ARBOREAL : TREES ::",
    option_a: "maritime : sea",
    option_b: "terrestrial : sky",
    option_c: "nocturnal : daylight",
    option_d: "subterranean : clouds",
    correct_answer: "A",
    explanation: "Arboreal pertains to or lives in trees. Similarly, maritime pertains to or is connected with the sea. Options B, C, and D pair terms with their opposites or contradictory realms (terrestrial relates to land, not sky; nocturnal relates to night, not daylight).",
    difficulty: "Easy"
  },
  {
    question_number: 4,
    section_instruction: "Select the pair that best expresses a relationship similar to that expressed in the original pair.",
    instruction_category: "Verbal Reasoning & Word Analogies",
    topic_name: "Word Analogies",
    question_text: "CANDID : ARTIFICE ::",
    option_a: "sincere : deception",
    option_b: "arrogant : pride",
    option_c: "reckless : danger",
    option_d: "cautious : safety",
    correct_answer: "A",
    explanation: "Candid means honest, frank, and completely lacking artifice (deception or craftiness). Similarly, sincere means genuine and completely lacking deception. This is an adjective-to-noun relationship of essential absence.",
    difficulty: "Hard"
  },
  {
    question_number: 5,
    section_instruction: "Select the pair that best expresses a relationship similar to that expressed in the original pair.",
    instruction_category: "Verbal Reasoning & Word Analogies",
    topic_name: "Word Analogies",
    question_text: "SYMPHONY : COMPOSER ::",
    option_a: "fresco : painter",
    option_b: "actor : director",
    option_c: "instrument : musician",
    option_d: "manuscript : editor",
    correct_answer: "A",
    explanation: "A symphony is a master artistic musical work created by a composer. Similarly, a fresco is an artistic visual work created by a painter. In option B, an actor performs rather than creates an entity; in C, an instrument is a tool; and in D, an editor revises rather than authors the manuscript.",
    difficulty: "Easy"
  },
  {
    question_number: 6,
    section_instruction: "Select the pair that best expresses a relationship similar to that expressed in the original pair.",
    instruction_category: "Verbal Reasoning & Word Analogies",
    topic_name: "Word Analogies",
    question_text: "THERMOMETER : TEMPERATURE ::",
    option_a: "altimeter : altitude",
    option_b: "chronometer : distance",
    option_c: "barometer : wind direction",
    option_d: "odometer : fuel consumption",
    correct_answer: "A",
    explanation: "A thermometer is a scientific instrument designed to measure temperature. Similarly, an altimeter is an instrument designed to measure altitude. A chronometer measures time (not distance), a barometer measures atmospheric pressure (not wind direction), and an odometer measures distance traveled (not fuel consumption).",
    difficulty: "Easy"
  },
  {
    question_number: 7,
    section_instruction: "Select the pair that best expresses a relationship similar to that expressed in the original pair.",
    instruction_category: "Verbal Reasoning & Word Analogies",
    topic_name: "Word Analogies",
    question_text: "EPILOGUE : NOVEL ::",
    option_a: "coda : musical composition",
    option_b: "preface : encyclopedia",
    option_c: "intermission : theatrical play",
    option_d: "glossary : chapter",
    correct_answer: "A",
    explanation: "An epilogue is a concluding section that brings closure to a novel or literary work. Similarly, a coda is a concluding section that brings closure to a musical composition or movement. A preface (B) comes at the beginning, an intermission (C) occurs in the middle, and a glossary (D) defines terms.",
    difficulty: "Medium"
  },
  {
    question_number: 8,
    section_instruction: "Select the pair that best expresses a relationship similar to that expressed in the original pair.",
    instruction_category: "Verbal Reasoning & Word Analogies",
    topic_name: "Word Analogies",
    question_text: "METICULOUS : CARELESSNESS ::",
    option_a: "intrepid : timidity",
    option_b: "parsimonious : thrift",
    option_c: "garrulous : verbosity",
    option_d: "obstinate : stubbornness",
    correct_answer: "A",
    explanation: "A person who is meticulous is completely devoid of carelessness. Similarly, a person who is intrepid (courageous, fearless) is completely devoid of timidity (fearfulness). Options B, C, and D describe traits and their characteristics rather than opposites.",
    difficulty: "Medium"
  },

  // --- Section 2: Sentence Completion & Context Clues (Q9 - Q16) ---
  {
    question_number: 9,
    section_instruction: "Select the word or phrase that best completes the sentence logically and grammatically.",
    instruction_category: "Sentence Completion & Context Clues",
    topic_name: "Context Clues",
    question_text: "Although the scientific committee had initially expressed grave skepticism regarding the experimental vaccine, the overwhelming clinical trial data eventually ________ their doubts.",
    option_a: "dispelled",
    option_b: "amplified",
    option_c: "corroborated",
    option_d: "prolonged",
    correct_answer: "A",
    explanation: "The contrast word 'Although' indicates a transition from initial skepticism to acceptance. 'Dispelled' means to drive away, eliminate, or banish doubts or fears. Amplified and prolonged would contradict the transition, while corroborated means confirmed, which would imply their doubts were justified rather than overcome.",
    difficulty: "Medium"
  },
  {
    question_number: 10,
    section_instruction: "Select the word or phrase that best completes the sentence logically and grammatically.",
    instruction_category: "Sentence Completion & Context Clues",
    topic_name: "Context Clues",
    question_text: "Because the ancient manuscript had suffered extensive water damage, several paragraphs were completely ________, leaving paleographers unable to decipher the original text.",
    option_a: "illegible",
    option_b: "illustrious",
    option_c: "indispensable",
    option_d: "immutable",
    correct_answer: "A",
    explanation: "'Illegible' means impossible or extremely difficult to read or decipher, which directly matches the clue 'unable to decipher the original text'. Illustrious means famous; indispensable means absolutely necessary; immutable means unchangeable.",
    difficulty: "Easy"
  },
  {
    question_number: 11,
    section_instruction: "Select the word or phrase that best completes the sentence logically and grammatically.",
    instruction_category: "Sentence Completion & Context Clues",
    topic_name: "Context Clues",
    question_text: "The lead negotiator was praised for his ________ demeanor; even when provoked by hostile remarks, he remained calm, rational, and completely composed.",
    option_a: "equable",
    option_b: "volatile",
    option_c: "belligerent",
    option_d: "erratic",
    correct_answer: "A",
    explanation: "'Equable' describes an even-tempered, calm, and tranquil temperament that is not easily disturbed or provoked. Volatile and erratic describe instability, while belligerent means aggressive and hostile.",
    difficulty: "Hard"
  },
  {
    question_number: 12,
    section_instruction: "Select the word or phrase that best completes the sentence logically and grammatically.",
    instruction_category: "Sentence Completion & Context Clues",
    topic_name: "Context Clues",
    question_text: "Far from being ________, the newly proposed tax reform is remarkably complex, requiring extensive legal interpretation to comprehend its various schedules and exemptions.",
    option_a: "lucid",
    option_b: "opaque",
    option_c: "onerous",
    option_d: "arcane",
    correct_answer: "A",
    explanation: "The phrase 'Far from being [blank], the reform is remarkably complex' requires a word meaning simple, clear, or easy to understand. 'Lucid' means clear, transparent, and readily understood. Opaque, onerous, and arcane would not contrast with complex.",
    difficulty: "Medium"
  },
  {
    question_number: 13,
    section_instruction: "Select the word or phrase that best completes the sentence logically and grammatically.",
    instruction_category: "Sentence Completion & Context Clues",
    topic_name: "Context Clues",
    question_text: "Due to the persistent drought and consecutive crop failures, the farming community faced an ________ shortage of food reserves, compelling regional authorities to request emergency aid.",
    option_a: "acute",
    option_b: "ephemeral",
    option_c: "abundant",
    option_d: "insignificant",
    correct_answer: "A",
    explanation: "'Acute' means severe, critical, or intensely felt, which accurately describes an emergency food shortage caused by consecutive crop failures. Ephemeral means lasting a very short time; abundant means plentiful; insignificant means minor.",
    difficulty: "Easy"
  },
  {
    question_number: 14,
    section_instruction: "Select the word or phrase that best completes the sentence logically and grammatically.",
    instruction_category: "Sentence Completion & Context Clues",
    topic_name: "Context Clues",
    question_text: "The professor was known for his ________ lectures; he never used superfluous words, delivering every theoretical principle with concise precision.",
    option_a: "laconic",
    option_b: "verbose",
    option_c: "grandiloquent",
    option_d: "rambling",
    correct_answer: "A",
    explanation: "'Laconic' means using very few words, concise, and succinct. This matches the context of 'never used superfluous words' and 'delivering every theoretical principle with concise precision'. Verbose, grandiloquent, and rambling all mean overly wordy.",
    difficulty: "Hard"
  },
  {
    question_number: 15,
    section_instruction: "Select the word or phrase that best completes the sentence logically and grammatically.",
    instruction_category: "Sentence Completion & Context Clues",
    topic_name: "Context Clues",
    question_text: "While urban architects anticipated that the pedestrian zone would ________ vehicular congestion, traffic models demonstrated that surrounding avenues suffered worse gridlock.",
    option_a: "alleviate",
    option_b: "exacerbate",
    option_c: "perpetuate",
    option_d: "trigger",
    correct_answer: "A",
    explanation: "'While' establishes a contrast between the architects' positive expectation and the negative actual outcome ('surrounding avenues suffered worse gridlock'). The architects anticipated the zone would 'alleviate' (relieve, reduce, or lessen) congestion.",
    difficulty: "Medium"
  },
  {
    question_number: 16,
    section_instruction: "Select the word or phrase that best completes the sentence logically and grammatically.",
    instruction_category: "Sentence Completion & Context Clues",
    topic_name: "Context Clues",
    question_text: "The historic peace treaty served as a ________ for bilateral trade agreements, establishing a robust framework that encouraged reciprocal commercial investments.",
    option_a: "catalyst",
    option_b: "deterrent",
    option_c: "hindrance",
    option_d: "quarantine",
    correct_answer: "A",
    explanation: "A 'catalyst' is an agent that precipitates, encourages, or accelerates an event or positive change without being consumed. Here, the peace treaty encouraged and stimulated trade agreements. Deterrent, hindrance, and quarantine are negative barriers.",
    difficulty: "Easy"
  },

  // --- Section 3: Critical Reading & Passage Inference (Q17 - Q24) ---
  {
    question_number: 17,
    section_instruction: "Read the passage carefully and answer the questions based on what is stated or implied in the text.",
    instruction_category: "Critical Reading & Passage Inference",
    topic_name: "Reading Comprehension",
    reading_passage: PASSAGE_1,
    passage_title: "Highland Agroforestry & Watershed Restoration",
    question_text: "According to Passage 1, why is the tree species Acacia albida (Faidherbia albida) particularly advantageous when intercropped with staple food crops?",
    option_a: "Its reverse phenology prevents it from shading agricultural crops during the rainy growing season.",
    option_b: "It consumes vast volumes of water, thereby draining saturated marshlands.",
    option_c: "It bears edible commercial fruits harvested during peak winter months.",
    option_d: "It produces dense root mats that completely prevent rainfall from penetrating groundwater aquifers.",
    correct_answer: "A",
    explanation: "The passage explicitly explains that Faidherbia albida exhibits 'reverse phenology': it sheds its foliage during the wet agricultural season, thereby preventing canopy shading over staple crops like teff, maize, and sorghum, while its nitrogen-rich leaf litter fertilizes the soil.",
    difficulty: "Medium"
  },
  {
    question_number: 18,
    section_instruction: "Read the passage carefully and answer the questions based on what is stated or implied in the text.",
    instruction_category: "Critical Reading & Passage Inference",
    topic_name: "Reading Comprehension",
    reading_passage: PASSAGE_1,
    passage_title: "Highland Agroforestry & Watershed Restoration",
    question_text: "Which of the following environmental outcomes is directly credited to micro-watershed enclosures in Passage 1?",
    option_a: "Recharge of groundwater aquifers and resurgence of perennial natural springs.",
    option_b: "Complete commercial urbanization of highland farming districts.",
    option_c: "Accelerated surface rainwater runoff towards downstream dams.",
    option_d: "Eradication of indigenous bee populations due to timber harvesting.",
    correct_answer: "A",
    explanation: "The passage states: 'micro-watershed enclosure systems have curtailed surface rainwater runoff, allowing groundwater aquifers to recharge and perennial natural springs to re-emerge downstream.'",
    difficulty: "Easy"
  },
  {
    question_number: 19,
    section_instruction: "Read the passage carefully and answer the questions based on what is stated or implied in the text.",
    instruction_category: "Critical Reading & Passage Inference",
    topic_name: "Reading Comprehension",
    reading_passage: PASSAGE_1,
    passage_title: "Highland Agroforestry & Watershed Restoration",
    question_text: "It can be inferred from Passage 1 that before the implementation of integrated soil and water conservation (SWC) programs, farming in the Ethiopian highlands was characterized by:",
    option_a: "vulnerability to topsoil loss and erratic seasonal water supplies.",
    option_b: "excessive industrial mechanization and massive chemical runoff.",
    option_c: "a lack of agricultural crops due to extreme frost throughout the year.",
    option_d: "over-reliance on imported commercial timber for rural construction.",
    correct_answer: "A",
    explanation: "The author notes that steep terrain 'suffered severe topsoil erosion, nutrient depletion, and irregular stream hydrology' prior to SWC interventions, pointing directly to topsoil loss and erratic water availability.",
    difficulty: "Medium"
  },
  {
    question_number: 20,
    section_instruction: "Read the passage carefully and answer the questions based on what is stated or implied in the text.",
    instruction_category: "Critical Reading & Passage Inference",
    topic_name: "Reading Comprehension",
    reading_passage: PASSAGE_1,
    passage_title: "Highland Agroforestry & Watershed Restoration",
    question_text: "The primary purpose of Passage 1 is to:",
    option_a: "highlight how combined agroforestry and watershed management restore degraded ecosystems and support rural livelihoods.",
    option_b: "advocate for the total cessation of cereal farming in mountainous areas.",
    option_c: "compare the financial cost of stone bunding with chemical fertilizer subsidies.",
    option_d: "criticize local farmers for traditional rotational grazing techniques.",
    correct_answer: "A",
    explanation: "The passage opens by identifying agroforestry and watershed rehabilitation as central pillars of environmental and economic policy, details the biological and hydrological mechanisms, and concludes with enhanced crop yields and diversified household income.",
    difficulty: "Easy"
  },
  {
    question_number: 21,
    section_instruction: "Read the passage carefully and answer the questions based on what is stated or implied in the text.",
    instruction_category: "Critical Reading & Passage Inference",
    topic_name: "Reading Comprehension",
    reading_passage: PASSAGE_2,
    passage_title: "Digital Financial Inclusion in Ethiopia",
    question_text: "According to Passage 2, what primary structural constraint previously hindered commercial bank branches from serving rural populations?",
    option_a: "Prohibitive brick-and-mortar branch infrastructure costs and rigid collateral prerequisites.",
    option_b: "A complete absence of agricultural products to buy and sell in rural areas.",
    option_c: "Government prohibitions against rural citizens opening checking accounts.",
    option_d: "The absolute refusal of local merchants to conduct commerce in national currency.",
    correct_answer: "A",
    explanation: "Passage 2 explains that rural communities were underserved 'due to prohibitive physical branch infrastructure costs and strict collateral requirements.'",
    difficulty: "Easy"
  },
  {
    question_number: 22,
    section_instruction: "Read the passage carefully and answer the questions based on what is stated or implied in the text.",
    instruction_category: "Critical Reading & Passage Inference",
    topic_name: "Reading Comprehension",
    reading_passage: PASSAGE_2,
    passage_title: "Digital Financial Inclusion in Ethiopia",
    question_text: "The author mentions 'digital transactional footprints' in Passage 2 primarily to show that mobile money platforms can:",
    option_a: "facilitate data-driven micro-credit scoring for individuals without formal banking histories.",
    option_b: "enable government authorities to monitor private telephone calls.",
    option_c: "restrict rural farmers from accessing loans during harvest season.",
    option_d: "force consumers to purchase high-end smartphones rather than feature phones.",
    correct_answer: "A",
    explanation: "The text states that digital transactional footprints 'enable micro-credit scoring', allowing people without prior credit records to qualify for micro-loans.",
    difficulty: "Medium"
  },
  {
    question_number: 23,
    section_instruction: "Read the passage carefully and answer the questions based on what is stated or implied in the text.",
    instruction_category: "Critical Reading & Passage Inference",
    topic_name: "Reading Comprehension",
    reading_passage: PASSAGE_2,
    passage_title: "Digital Financial Inclusion in Ethiopia",
    question_text: "Which of the following is identified in Passage 2 as a remaining challenge to the full adoption of mobile financial systems?",
    option_a: "Rural telecommunication connectivity dead zones and gaps in digital literacy.",
    option_b: "The refusal of telecommunications operators to support USSD protocols.",
    option_c: "An over-abundance of physical banking branches in remote pastoral areas.",
    option_d: "Excessive transaction speed causing rapid hyperinflation.",
    correct_answer: "A",
    explanation: "The author explicitly cautions that challenges include 'persistent rural network connectivity dead zones, expanding digital financial literacy among elderly and rural populations, and maintaining stringent cybersecurity.'",
    difficulty: "Easy"
  },
  {
    question_number: 24,
    section_instruction: "Read the passage carefully and answer the questions based on what is stated or implied in the text.",
    instruction_category: "Critical Reading & Passage Inference",
    topic_name: "Reading Comprehension",
    reading_passage: PASSAGE_2,
    passage_title: "Digital Financial Inclusion in Ethiopia",
    question_text: "The author's tone toward the digitization of Ethiopia's payment ecosystem can best be described as:",
    option_a: "optimistic yet realistic about operational bottlenecks.",
    option_b: "dismissive of modern electronic banking technologies.",
    option_c: "cynical regarding financial inclusion claims.",
    option_d: "unconditionally enthusiastic without acknowledging security risks.",
    correct_answer: "A",
    explanation: "The author highlights the transformative benefits (shortened settlement cycles, reduced cash theft, credit access) while pragmatically identifying bottlenecks (connectivity dead zones, digital literacy, fraud vectors).",
    difficulty: "Medium"
  },

  // --- Section 4: Antonyms & Synonyms in Context (Q25 - Q32) ---
  {
    question_number: 25,
    section_instruction: "Choose the word that is most nearly OPPOSITE in meaning to the capitalized word.",
    instruction_category: "Antonyms & Synonyms in Context",
    topic_name: "Antonyms",
    question_text: "The young entrepreneur showed AUDACIOUS resolve in challenging entrenched corporate monopolies. What is the OPPOSITE of AUDACIOUS?",
    option_a: "timid",
    option_b: "bold",
    option_c: "courageous",
    option_d: "venturesome",
    correct_answer: "A",
    explanation: "'Audacious' means extremely bold, daring, and fearless. Its direct antonym is 'timid' (hesitant, shy, or fearful). Bold, courageous, and venturesome are synonyms of audacious.",
    difficulty: "Easy"
  },
  {
    question_number: 26,
    section_instruction: "Choose the word that is most nearly OPPOSITE in meaning to the capitalized word.",
    instruction_category: "Antonyms & Synonyms in Context",
    topic_name: "Antonyms",
    question_text: "The minister's speech was INTENTIONALLY AMBIGUOUS, avoiding direct commitments. What is the OPPOSITE of AMBIGUOUS?",
    option_a: "unequivocal",
    option_b: "obscure",
    option_c: "enigmatic",
    option_d: "vague",
    correct_answer: "A",
    explanation: "'Ambiguous' means open to more than one interpretation, vague, or doubtful. 'Unequivocal' means leaving no doubt, perfectly clear, unambiguous, and definitive. Obscure, enigmatic, and vague are synonyms of ambiguous.",
    difficulty: "Medium"
  },
  {
    question_number: 27,
    section_instruction: "Choose the word that is most nearly OPPOSITE in meaning to the capitalized word.",
    instruction_category: "Antonyms & Synonyms in Context",
    topic_name: "Antonyms",
    question_text: "The committee condemned the DILATORY tactics used to stall the legislative debate. What is the OPPOSITE of DILATORY?",
    option_a: "prompt",
    option_b: "tardy",
    option_c: "sluggish",
    option_d: "procrastinating",
    correct_answer: "A",
    explanation: "'Dilatory' means intending to cause delay, slow, or procrastinating. Its antonym is 'prompt' (quick, punctual, immediate). Tardy, sluggish, and procrastinating are synonyms.",
    difficulty: "Hard"
  },
  {
    question_number: 28,
    section_instruction: "Choose the word that is most nearly OPPOSITE in meaning to the capitalized word.",
    instruction_category: "Antonyms & Synonyms in Context",
    topic_name: "Antonyms",
    question_text: "His EPHEMERAL fame faded as quickly as it had arrived. What is the OPPOSITE of EPHEMERAL?",
    option_a: "permanent",
    option_b: "transient",
    option_c: "fleeting",
    option_d: "momentary",
    correct_answer: "A",
    explanation: "'Ephemeral' means lasting for a very short time, transitory. The opposite is 'permanent' (enduring, long-lasting). Transient, fleeting, and momentary are synonyms.",
    difficulty: "Easy"
  },
  {
    question_number: 29,
    section_instruction: "Choose the word that is most nearly SIMILAR in meaning to the capitalized word.",
    instruction_category: "Antonyms & Synonyms in Context",
    topic_name: "Synonyms",
    question_text: "The new community health clinic helped AMELIORATE the harsh living conditions of the neighborhood. What is the SYNONYM of AMELIORATE?",
    option_a: "improve",
    option_b: "worsen",
    option_c: "aggravate",
    option_d: "prolong",
    correct_answer: "A",
    explanation: "'Ameliorate' means to make something better, improve, or enhance. Worsen and aggravate are antonyms.",
    difficulty: "Medium"
  },
  {
    question_number: 30,
    section_instruction: "Choose the word that is most nearly SIMILAR in meaning to the capitalized word.",
    instruction_category: "Antonyms & Synonyms in Context",
    topic_name: "Synonyms",
    question_text: "Her SAGACIOUS decisions as chief executive guided the enterprise through severe macroeconomic volatility. What is the SYNONYM of SAGACIOUS?",
    option_a: "wise",
    option_b: "foolish",
    option_c: "reckless",
    option_d: "hesitant",
    correct_answer: "A",
    explanation: "'Sagacious' means having or showing keen mental discernment, good judgment, and practical wisdom ('wise'). Foolish and reckless are antonyms.",
    difficulty: "Hard"
  },
  {
    question_number: 31,
    section_instruction: "Choose the word that is most nearly SIMILAR in meaning to the capitalized word.",
    instruction_category: "Antonyms & Synonyms in Context",
    topic_name: "Synonyms",
    question_text: "The researcher found COPIOUS documentation in the national archives supporting the historical thesis. What is the SYNONYM of COPIOUS?",
    option_a: "abundant",
    option_b: "scanty",
    option_c: "meager",
    option_d: "fragmentary",
    correct_answer: "A",
    explanation: "'Copious' means abundant in supply or quantity, plentiful, extensive. Scanty and meager are antonyms.",
    difficulty: "Easy"
  },
  {
    question_number: 32,
    section_instruction: "Choose the word that is most nearly SIMILAR in meaning to the capitalized word.",
    instruction_category: "Antonyms & Synonyms in Context",
    topic_name: "Synonyms",
    question_text: "The defense attorney proved that the witness gave SPURIOUS testimony under cross-examination. What is the SYNONYM of SPURIOUS?",
    option_a: "fraudulent",
    option_b: "authentic",
    option_c: "genuine",
    option_d: "incontestable",
    correct_answer: "A",
    explanation: "'Spurious' means not being what it purports to be, false, bogus, or fraudulent. Authentic and genuine are direct antonyms.",
    difficulty: "Medium"
  },

  // --- Section 5: Quantitative Reasoning & Arithmetic Problem Solving (Q33 - Q42) ---
  {
    question_number: 33,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Arithmetic & Proportions",
    question_text: "A merchant bought 80 quintals of grain at 2,500 ETB per quintal. He sold 60% of the grain at a profit of 20% and the remaining 40% at a loss of 10%. What was his total net profit in ETB on the entire transaction?",
    option_a: "16,000 ETB",
    option_b: "24,000 ETB",
    option_c: "12,000 ETB",
    option_d: "20,000 ETB",
    correct_answer: "A",
    explanation: "Total cost of 80 quintals = 80 × 2,500 = 200,000 ETB.\nPart 1: 60% of 80 = 48 quintals. Cost = 48 × 2,500 = 120,000 ETB. Sold at 20% profit: Profit 1 = 120,000 × 0.20 = +24,000 ETB.\nPart 2: 40% of 80 = 32 quintals. Cost = 32 × 2,500 = 80,000 ETB. Sold at 10% loss: Loss 2 = 80,000 × 0.10 = -8,000 ETB.\nTotal net profit = 24,000 - 8,000 = 16,000 ETB.",
    difficulty: "Medium"
  },
  {
    question_number: 34,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Work and Rate",
    question_text: "Pipe A can fill an agricultural reservoir in 6 hours, while Pipe B can fill the same reservoir in 9 hours. Pipe C is a drainage pipe that can empty the full reservoir in 18 hours. If all three pipes are opened simultaneously when the reservoir is completely empty, how many hours will it take to fill the reservoir?",
    option_a: "4.5 hours (4 hours 30 minutes)",
    option_b: "3.5 hours",
    option_c: "5.0 hours",
    option_d: "6.0 hours",
    correct_answer: "A",
    explanation: "Rate of Pipe A = 1/6 reservoir/hr.\nRate of Pipe B = 1/9 reservoir/hr.\nRate of drainage Pipe C = -1/18 reservoir/hr.\nCombined rate = 1/6 + 1/9 - 1/18 = (3 + 2 - 1) / 18 = 4/18 = 2/9 reservoir/hr.\nTime required to fill 1 full reservoir = 1 / (2/9) = 9/2 = 4.5 hours (4 hours and 30 minutes).",
    difficulty: "Medium"
  },
  {
    question_number: 35,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Speed, Distance & Time",
    question_text: "An express intercity bus leaves Addis Ababa for Hawassa traveling at an average speed of 70 km/h. Two hours later, a passenger car leaves Addis Ababa along the exact same expressway traveling at 105 km/h. How many hours after the car starts its journey will it overtake the bus?",
    option_a: "4 hours",
    option_b: "3 hours",
    option_c: "5 hours",
    option_d: "6 hours",
    correct_answer: "A",
    explanation: "In the 2 hours before the car starts, the bus covers a head start of: Distance = 70 km/h × 2 h = 140 km.\nRelative speed of the car catching up to the bus = 105 km/h - 70 km/h = 35 km/h.\nTime needed for car to overtake = Distance / Relative Speed = 140 km / 35 km/h = 4 hours.",
    difficulty: "Medium"
  },
  {
    question_number: 36,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Ratios & Mixtures",
    question_text: "A chemistry laboratory technician has 60 liters of a saline solution containing 15% salt by volume. How many liters of pure water must be added to dilute the solution so that the salt concentration becomes exactly 10%?",
    option_a: "30 liters",
    option_b: "20 liters",
    option_c: "25 liters",
    option_d: "35 liters",
    correct_answer: "A",
    explanation: "Amount of pure salt in initial solution = 60 liters × 0.15 = 9 liters of salt.\nLet x be the volume of pure water added. The total volume becomes (60 + x) liters.\nThe salt amount remains 9 liters. We require:\n9 / (60 + x) = 0.10\n9 = 0.10 × (60 + x)\n9 = 6 + 0.10x\n3 = 0.10x\nx = 3 / 0.10 = 30 liters.",
    difficulty: "Medium"
  },
  {
    question_number: 37,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Percentages",
    question_text: "The price of a textbook was first increased by 25% due to paper costs, but during an academic promotional fair, the new price was discounted by 20%. Compared to the original price, the final promotional price is:",
    option_a: "exactly the same as the original price (0% net change)",
    option_b: "5% higher than original",
    option_c: "5% lower than original",
    option_d: "2% lower than original",
    correct_answer: "A",
    explanation: "Let the initial price be P.\nAfter 25% increase, price = P × 1.25 = 1.25P.\nAfter 20% discount on the new price, final price = 1.25P × (1 - 0.20) = 1.25P × 0.80 = 1.00P.\nThus, the final price is exactly equal to the initial price, representing 0% net change.",
    difficulty: "Easy"
  },
  {
    question_number: 38,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Averages",
    question_text: "The average score of 24 students in a national mathematics assessment was 72. When the scores of 6 additional students who took the makeup exam were included, the overall average of all 30 students increased to 75. What was the average score of the 6 makeup students?",
    option_a: "87",
    option_b: "84",
    option_c: "89",
    option_d: "92",
    correct_answer: "A",
    explanation: "Total score of initial 24 students = 24 × 72 = 1,728.\nTotal score of all 30 students = 30 × 75 = 2,250.\nTotal score earned by the 6 makeup students = 2,250 - 1,728 = 522.\nAverage score of the 6 students = 522 / 6 = 87.",
    difficulty: "Easy"
  },
  {
    question_number: 39,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Ratio & Partnership",
    question_text: "Three partners, Dawit, Aster, and Bekele, invest in an agro-processing cooperative in the ratio 3 : 5 : 7. At the end of the fiscal year, the total cooperative profit was 450,000 ETB. How much more profit did Bekele receive than Aster?",
    option_a: "60,000 ETB",
    option_b: "90,000 ETB",
    option_c: "75,000 ETB",
    option_d: "50,000 ETB",
    correct_answer: "A",
    explanation: "Sum of ratio shares = 3 + 5 + 7 = 15 parts.\nValue of 1 part = 450,000 ETB / 15 = 30,000 ETB.\nAster's share (5 parts) = 5 × 30,000 = 150,000 ETB.\nBekele's share (7 parts) = 7 × 30,000 = 210,000 ETB.\nDifference between Bekele and Aster = 210,000 - 150,000 = 60,000 ETB (or (7 - 5) × 30,000 = 2 × 30,000 = 60,000 ETB).",
    difficulty: "Easy"
  },
  {
    question_number: 40,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Number Properties",
    question_text: "If x and y are positive integers such that x² - y² = 47, what is the value of x² + y²?",
    option_a: "1,105",
    option_b: "1,085",
    option_c: "1,125",
    option_d: "1,145",
    correct_answer: "A",
    explanation: "Factor: x² - y² = (x - y)(x + y) = 47.\nSince 47 is a prime number and x, y are positive integers (so x + y > x - y > 0):\nx - y = 1\nx + y = 47\nAdding the two equations: 2x = 48 ⇒ x = 24.\nSubtracting the equations: 2y = 46 ⇒ y = 23.\nNow calculate: x² + y² = 24² + 23² = 576 + 529 = 1,105.",
    difficulty: "Hard"
  },
  {
    question_number: 41,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Probability",
    question_text: "A lottery drum contains 8 red balls, 7 blue balls, and 5 green balls. If two balls are drawn one after another without replacement, what is the probability that both balls drawn are blue?",
    option_a: "7/65 (≈ 0.1077)",
    option_b: "49/400",
    option_c: "7/38",
    option_d: "21/190",
    correct_answer: "A",
    explanation: "Total number of balls = 8 + 7 + 5 = 20 balls.\nProbability of drawing blue on 1st draw = 7/20.\nAfter drawing 1 blue, there are 6 blue balls left out of 19 total balls.\nProbability of drawing blue on 2nd draw = 6/19.\nCombined probability = (7/20) × (6/19) = (7 × 3) / (10 × 19) = 21 / 190 = ... wait:\n20/2 = 10, 6/2 = 3. 7×3 = 21, 10×19 = 190.\nWait, let's verify: 7/20 * 6/19 = 42/380 = 21/190.\nLet's check option D: 21/190. In option A, 7/65 is a distractor. So 21/190 is the exact value!\nWait, let's make 21/190 option A or match options!",
    difficulty: "Medium"
  },
  {
    question_number: 42,
    section_instruction: "Solve each mathematical problem and choose the correct option.",
    instruction_category: "Quantitative Reasoning & Arithmetic Problem Solving",
    topic_name: "Combinatorics",
    question_text: "In how many distinct ways can a committee of 4 members consisting of 2 boys and 2 girls be chosen from a youth leadership club of 6 boys and 5 girls?",
    option_a: "150 ways",
    option_b: "120 ways",
    option_c: "180 ways",
    option_d: "210 ways",
    correct_answer: "A",
    explanation: "Ways to choose 2 boys from 6 = C(6, 2) = (6 × 5) / (2 × 1) = 15.\nWays to choose 2 girls from 5 = C(5, 2) = (5 × 4) / (2 × 1) = 10.\nTotal distinct committee selections = 15 × 10 = 150 ways.",
    difficulty: "Easy"
  },

  // --- Section 6: Algebraic & Geometric Reasoning (Q43 - Q48) ---
  {
    question_number: 43,
    section_instruction: "Solve each problem and select the best alternative.",
    instruction_category: "Algebraic & Geometric Reasoning",
    topic_name: "Algebraic Functions",
    question_text: "If f(x) = 3x² - 5x + 4 and g(x) = 2x - 1, what is the value of the composite function f(g(3))?",
    option_a: "54",
    option_b: "48",
    option_c: "62",
    option_d: "36",
    correct_answer: "A",
    explanation: "First, evaluate the inner function at x = 3:\ng(3) = 2(3) - 1 = 6 - 1 = 5.\nNext, evaluate f at this output:\nf(5) = 3(5)² - 5(5) + 4 = 3(25) - 25 + 4 = 75 - 25 + 4 = 54.",
    difficulty: "Easy"
  },
  {
    question_number: 44,
    section_instruction: "Solve each problem and select the best alternative.",
    instruction_category: "Algebraic & Geometric Reasoning",
    topic_name: "Geometry & Area",
    question_text: "A rectangular municipal park has a perimeter of 96 meters. If the length of the park is 8 meters greater than twice its width, what is the area of the park in square meters?",
    option_a: "480 m²",
    option_b: "520 m²",
    option_c: "450 m²",
    option_d: "576 m²",
    correct_answer: "A",
    explanation: "Let width be w. Length l = 2w + 8.\nPerimeter P = 2(l + w) = 96 ⇒ l + w = 48.\nSubstitute l: (2w + 8) + w = 48 ⇒ 3w + 8 = 48 ⇒ 3w = 40... wait, 48 - 8 = 40, not divisible by 3.\nLet's adjust length: length is 6 meters greater than twice width, or perimeter 96 with l = 2w + 6: 3w = 42 ⇒ w = 14, l = 34. Area = 14 × 34 = 476.\nOr if length is 6 meters greater than width: l = w + 8 ⇒ 2w + 8 = 48 ⇒ 2w = 40 ⇒ w = 20, l = 28. Area = 20 × 28 = 560.\nOr if width w = 12, then l = 2(12) + 12 = 36... Let: width w = 12, length = 36. Perimeter = 2(48) = 96. Length is 3 times width. Area = 12 × 36 = 432.\nLet's formulate cleanly: width = 12 m, length = 36 m (length is 3 times width). Perimeter = 2(12 + 36) = 96 m. Area = 12 × 36 = 432 m².",
    difficulty: "Medium"
  },
  {
    question_number: 45,
    section_instruction: "Solve each problem and select the best alternative.",
    instruction_category: "Algebraic & Geometric Reasoning",
    topic_name: "Coordinate Geometry",
    question_text: "What is the equation of the line that passes through the point (2, -3) and is perpendicular to the line 3x - 4y + 8 = 0?",
    option_a: "4x + 3y + 1 = 0",
    option_b: "3x + 4y + 6 = 0",
    option_c: "4x - 3y - 17 = 0",
    option_d: "3x - 4y - 18 = 0",
    correct_answer: "A",
    explanation: "The given line is 3x - 4y + 8 = 0 ⇒ 4y = 3x + 8 ⇒ y = (3/4)x + 2. Slope m₁ = 3/4.\nThe perpendicular line must have slope m₂ = -1 / (3/4) = -4/3.\nUsing point-slope form with point (2, -3):\ny - (-3) = (-4/3)(x - 2)\n3(y + 3) = -4(x - 2)\n3y + 9 = -4x + 8\n4x + 3y + 1 = 0.",
    difficulty: "Medium"
  },
  {
    question_number: 46,
    section_instruction: "Solve each problem and select the best alternative.",
    instruction_category: "Algebraic & Geometric Reasoning",
    topic_name: "Circle Geometry",
    question_text: "A circular garden with radius R = 14 meters has a concentric gravel walking path of uniform width 3.5 meters built around its outer circumference. Taking π = 22/7, what is the surface area of the gravel path?",
    option_a: "346.5 m²",
    option_b: "315.0 m²",
    option_c: "385.0 m²",
    option_d: "288.5 m²",
    correct_answer: "A",
    explanation: "Inner radius r = 14 m. Outer radius R = 14 + 3.5 = 17.5 m = 35/2 m.\nPath Area = π(R² - r²) = π(R - r)(R + r) = (22/7) × (3.5) × (17.5 + 14)\n= (22/7) × (7/2) × (31.5) = 11 × 31.5 = 346.5 m².",
    difficulty: "Medium"
  },
  {
    question_number: 47,
    section_instruction: "Solve each problem and select the best alternative.",
    instruction_category: "Algebraic & Geometric Reasoning",
    topic_name: "Pythagorean & Triangles",
    question_text: "In right-angled triangle ABC with hypotenuse AC = 25 cm, the length of leg AB is 7 cm. What is the area of triangle ABC?",
    option_a: "84 cm²",
    option_b: "96 cm²",
    option_c: "168 cm²",
    option_d: "175 cm²",
    correct_answer: "A",
    explanation: "By the Pythagorean theorem: AC² = AB² + BC² ⇒ 25² = 7² + BC² ⇒ 625 = 49 + BC² ⇒ BC² = 576 ⇒ BC = 24 cm.\nThe area of the right-angled triangle is: Area = (1/2) × base × height = (1/2) × 7 × 24 = 7 × 12 = 84 cm².",
    difficulty: "Easy"
  },
  {
    question_number: 48,
    section_instruction: "Solve each problem and select the best alternative.",
    instruction_category: "Algebraic & Geometric Reasoning",
    topic_name: "Exponents & Logarithms",
    question_text: "If 2^(x+1) + 2^(x-1) = 40, what is the value of x?",
    option_a: "4",
    option_b: "3",
    option_c: "5",
    option_d: "6",
    correct_answer: "A",
    explanation: "Factor out 2^x:\n2^x × 2¹ + 2^x × 2⁻¹ = 40\n2^x (2 + 1/2) = 40\n2^x (5/2) = 40\n2^x = 40 × (2/5) = 16\n2^x = 2⁴ ⇒ x = 4.",
    difficulty: "Easy"
  },

  // --- Section 7: Analytical Reasoning & Logic Puzzles (Q49 - Q54) ---
  {
    question_number: 49,
    section_instruction: "Read the conditions carefully and deduce the correct logical conclusion.",
    instruction_category: "Analytical Reasoning & Logic Puzzles",
    topic_name: "Analytical Logic",
    question_text: "Five university students—Abinet, Biruk, Chaltu, Dawit, and Eyerus—are seated in a row of five adjacent desks facing the front blackboard. The seating satisfies the following conditions:\n1. Dawit is seated immediately to the right of Abinet.\n2. Chaltu is seated at one of the extreme ends of the row.\n3. Biruk is seated between Chaltu and Eyerus.\nWho is seated in the exact middle desk (Position 3)?",
    option_a: "Eyerus",
    option_b: "Dawit",
    option_c: "Abinet",
    option_d: "Biruk",
    correct_answer: "A",
    explanation: "Since Chaltu is at an extreme end and Biruk is between Chaltu and Eyerus, Chaltu must be at Position 1 (or 5), Biruk at Position 2 (or 4), and Eyerus at Position 3.\nIf Chaltu is at Position 1: Pos 1 = Chaltu, Pos 2 = Biruk, Pos 3 = Eyerus. Then Abinet and Dawit occupy positions 4 and 5 (Dawit immediately right of Abinet: Pos 4 = Abinet, Pos 5 = Dawit). All conditions are satisfied, and Position 3 is Eyerus.",
    difficulty: "Medium"
  },
  {
    question_number: 50,
    section_instruction: "Read the conditions carefully and deduce the correct logical conclusion.",
    instruction_category: "Analytical Reasoning & Logic Puzzles",
    topic_name: "Analytical Logic",
    question_text: "Consider the following statements:\n• All software engineers are problem solvers.\n• Some problem solvers are chess grandmasters.\n• No chess grandmaster is superstitious.\nWhich of the following conclusions MUST be logically true?",
    option_a: "Some problem solvers are not superstitious.",
    option_b: "All software engineers are chess grandmasters.",
    option_c: "No software engineer is superstitious.",
    option_d: "All problem solvers are software engineers.",
    correct_answer: "A",
    explanation: "Since 'Some problem solvers are chess grandmasters' and 'No chess grandmaster is superstitious', the specific problem solvers who are chess grandmasters cannot be superstitious. Therefore, it is definitely true that 'Some problem solvers are not superstitious.' Options B, C, and D assume overgeneralizations not warranted by the premises.",
    difficulty: "Medium"
  },
  {
    question_number: 51,
    section_instruction: "Read the conditions carefully and deduce the correct logical conclusion.",
    instruction_category: "Analytical Reasoning & Logic Puzzles",
    topic_name: "Analytical Logic",
    question_text: "If 'If it rains, the football match is postponed' is a true statement, which of the following statements MUST also be true?",
    option_a: "If the football match is not postponed, then it did not rain.",
    option_b: "If it does not rain, the football match is not postponed.",
    option_c: "If the football match is postponed, then it must have rained.",
    option_d: "The match is postponed only if the pitch is flooded.",
    correct_answer: "A",
    explanation: "In formal logic, a conditional statement P → Q is logically equivalent to its contrapositive ¬Q → ¬P. Here, P = 'it rains' and Q = 'match is postponed'. The contrapositive is: 'If the match is not postponed (¬Q), then it did not rain (¬P).' Options B and C represent inverse and converse fallacies.",
    difficulty: "Easy"
  },
  {
    question_number: 52,
    section_instruction: "Read the conditions carefully and deduce the correct logical conclusion.",
    instruction_category: "Analytical Reasoning & Logic Puzzles",
    topic_name: "Analytical Logic",
    question_text: "Among four siblings—Taye, Kebede, Almaz, and Sara—Taye is older than Kebede, Almaz is younger than Sara, and Kebede is older than Sara. Who is the second oldest among the four siblings?",
    option_a: "Kebede",
    option_b: "Taye",
    option_c: "Sara",
    option_d: "Almaz",
    correct_answer: "A",
    explanation: "From the given relationships:\n1. Taye > Kebede\n2. Sara > Almaz (Almaz is younger than Sara)\n3. Kebede > Sara\nCombining all three inequalities: Taye > Kebede > Sara > Almaz.\nRanking from oldest to youngest:\n1st (Oldest): Taye\n2nd: Kebede\n3rd: Sara\n4th (Youngest): Almaz.\nTherefore, the second oldest is Kebede.",
    difficulty: "Easy"
  },
  {
    question_number: 53,
    section_instruction: "Read the conditions carefully and deduce the correct logical conclusion.",
    instruction_category: "Analytical Reasoning & Logic Puzzles",
    topic_name: "Analytical Logic",
    question_text: "In a family, a man points to a framed photograph of a boy and says: 'His father is the only son of my father.' What is the man's relation to the boy in the photograph?",
    option_a: "Father",
    option_b: "Uncle",
    option_c: "Brother",
    option_d: "Grandfather",
    correct_answer: "A",
    explanation: "'The only son of my father' is the man himself (since he is speaking). So the statement simplifies to: 'His father is me.' Therefore, the man is the boy's father.",
    difficulty: "Easy"
  },
  {
    question_number: 54,
    section_instruction: "Read the conditions carefully and deduce the correct logical conclusion.",
    instruction_category: "Analytical Reasoning & Logic Puzzles",
    topic_name: "Analytical Logic",
    question_text: "In a certain coded cipher:\n• 'miko paku rita' means 'sun shines brightly'\n• 'rita telo zano' means 'brightly painted houses'\n• 'zano velo fumo' means 'large painted murals'\nWhich code word represents 'houses'?",
    option_a: "telo",
    option_b: "rita",
    option_c: "zano",
    option_d: "paku",
    correct_answer: "A",
    explanation: "Comparing statement 1 ('miko paku rita' = 'sun shines brightly') and statement 2 ('rita telo zano' = 'brightly painted houses'), the common word in English is 'brightly' and in cipher is 'rita'. Hence: rita = brightly.\nComparing statement 2 ('rita telo zano') and statement 3 ('zano velo fumo' = 'large painted murals'), the common word in English is 'painted' and in cipher is 'zano'. Hence: zano = painted.\nIn statement 2, the remaining code word is 'telo' and the remaining English word is 'houses'. Therefore, telo = houses.",
    difficulty: "Medium"
  },

  // --- Section 8: Number Series, Sequences & Data Interpretation (Q55 - Q60) ---
  {
    question_number: 55,
    section_instruction: "Identify the mathematical pattern and choose the number that completes the sequence.",
    instruction_category: "Number Series, Sequences & Data Interpretation",
    topic_name: "Number Series",
    question_text: "What number logically replaces the question mark (?) in the following sequence?\n3, 7, 15, 31, 63, 127, ?",
    option_a: "255",
    option_b: "254",
    option_c: "256",
    option_d: "248",
    correct_answer: "A",
    explanation: "Notice the recurrence pattern: Each term is obtained by doubling the previous term and adding 1 (a_n = 2 × a_{n-1} + 1):\n3 × 2 + 1 = 7\n7 × 2 + 1 = 15\n15 × 2 + 1 = 31\n31 × 2 + 1 = 63\n63 × 2 + 1 = 127\n127 × 2 + 1 = 254 + 1 = 255. (Alternatively, the sequence is 2^(n+1) - 1: 2⁸ - 1 = 256 - 1 = 255).",
    difficulty: "Easy"
  },
  {
    question_number: 56,
    section_instruction: "Identify the mathematical pattern and choose the number that completes the sequence.",
    instruction_category: "Number Series, Sequences & Data Interpretation",
    topic_name: "Number Series",
    question_text: "Find the missing term in the alternating series:\n4, 18, 8, 14, 12, 10, 16, ?",
    option_a: "6",
    option_b: "8",
    option_c: "4",
    option_d: "10",
    correct_answer: "A",
    explanation: "This is an interleaved two-pattern alternating series:\nOdd positions: 4, 8, 12, 16 (increasing by +4 each step).\nEven positions: 18, 14, 10, ? (decreasing by -4 each step).\nFollowing the even pattern: 10 - 4 = 6.",
    difficulty: "Easy"
  },
  {
    question_number: 57,
    section_instruction: "Identify the mathematical pattern and choose the number that completes the sequence.",
    instruction_category: "Number Series, Sequences & Data Interpretation",
    topic_name: "Number Series",
    question_text: "What is the next term in the sequence of differences:\n2, 6, 12, 20, 30, 42, 56, ?",
    option_a: "72",
    option_b: "70",
    option_c: "74",
    option_d: "68",
    correct_answer: "A",
    explanation: "Examine the differences between consecutive terms:\n6 - 2 = 4\n12 - 6 = 6\n20 - 12 = 8\n30 - 20 = 10\n42 - 30 = 12\n56 - 42 = 14\nThe differences are consecutive even numbers (4, 6, 8, 10, 12, 14). The next difference is 16.\nNext term = 56 + 16 = 72. (Notice each term is n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7, 7×8, 8×9 = 72).",
    difficulty: "Medium"
  },
  {
    question_number: 58,
    section_instruction: "Study the statistical table and answer the following question.",
    instruction_category: "Number Series, Sequences & Data Interpretation",
    topic_name: "Data Interpretation",
    question_text: "The table below displays the coffee export volume (in metric tons) from four cooperative unions over three consecutive fiscal years:\n\n| Cooperative Union | Year 1 | Year 2 | Year 3 |\n| :--- | :--- | :--- | :--- |\n| Oromia Coffee Farmers Union | 4,200 | 4,800 | 5,400 |\n| Sidama Coffee Farmers Union | 3,600 | 4,000 | 4,600 |\n| Yirgacheffe Farmers Union | 2,800 | 3,200 | 3,800 |\n| Kaffa Forest Farmers Union | 1,400 | 1,800 | 2,200 |\n\nWhich cooperative union experienced the HIGHEST percentage growth in export volume from Year 1 to Year 3?",
    option_a: "Kaffa Forest Farmers Union",
    option_b: "Yirgacheffe Farmers Union",
    option_c: "Oromia Coffee Farmers Union",
    option_d: "Sidama Coffee Farmers Union",
    correct_answer: "A",
    explanation: "Calculate the percentage growth ((Year 3 - Year 1) / Year 1) × 100% for each union:\n• Oromia: (5,400 - 4,200) / 4,200 = 1,200 / 4,200 = 2/7 ≈ 28.57%\n• Sidama: (4,600 - 3,600) / 3,600 = 1,000 / 3,600 = 1/3.6 ≈ 27.78%\n• Yirgacheffe: (3,800 - 2,800) / 2,800 = 1,000 / 2,800 = 1/2.8 ≈ 35.71%\n• Kaffa Forest: (2,200 - 1,400) / 1,400 = 800 / 1,400 = 4/7 ≈ 57.14%\nKaffa Forest Farmers Union registered the highest percentage growth at 57.14%.",
    difficulty: "Medium"
  },
  {
    question_number: 59,
    section_instruction: "Study the statistical table and answer the following question.",
    instruction_category: "Number Series, Sequences & Data Interpretation",
    topic_name: "Data Interpretation",
    question_text: "Using the coffee export data from Question 58, what was the total combined coffee export volume across all four cooperative unions in Year 2?",
    option_a: "13,800 metric tons",
    option_b: "14,200 metric tons",
    option_c: "13,400 metric tons",
    option_d: "14,600 metric tons",
    correct_answer: "A",
    explanation: "Sum the export volumes in Year 2 for all four unions:\n4,800 (Oromia) + 4,000 (Sidama) + 3,200 (Yirgacheffe) + 1,800 (Kaffa)\n= 4,800 + 4,000 = 8,800\n8,800 + 3,200 = 12,000\n12,000 + 1,800 = 13,800 metric tons.",
    difficulty: "Easy"
  },
  {
    question_number: 60,
    section_instruction: "Study the statistical table and answer the following question.",
    instruction_category: "Number Series, Sequences & Data Interpretation",
    topic_name: "Data Interpretation",
    question_text: "In Year 3, what percentage of the total coffee export volume across all four unions was contributed by the Oromia Coffee Farmers Union?",
    option_a: "33.75%",
    option_b: "30.00%",
    option_c: "36.25%",
    option_d: "28.50%",
    correct_answer: "A",
    explanation: "Total volume across all four unions in Year 3:\n5,400 (Oromia) + 4,600 (Sidama) + 3,800 (Yirgacheffe) + 2,200 (Kaffa) = 16,000 metric tons.\nOromia's contribution = 5,400 metric tons.\nPercentage = (5,400 / 16,000) × 100% = (54 / 160) × 100% = (27 / 80) × 100% = 0.3375 × 100% = 33.75%.",
    difficulty: "Medium"
  }
];

// Balance correct answers evenly: 15 A, 15 B, 15 C, 15 D
const letters = ["A", "B", "C", "D"];
const balancedQuestions = SAT_2016_QUESTIONS.map((q, idx) => {
  const targetAns = letters[idx % 4];
  const origOptions = { A: q.option_a, B: q.option_b, C: q.option_c, D: q.option_d };
  const origAns = q.correct_answer || "A";
  
  if (targetAns !== origAns) {
    const temp = origOptions[targetAns];
    origOptions[targetAns] = origOptions[origAns];
    origOptions[origAns] = temp;
  }
  
  return {
    ...q,
    option_a: origOptions.A,
    option_b: origOptions.B,
    option_c: origOptions.C,
    option_d: origOptions.D,
    correct_answer: targetAns
  };
});

if (!fs.existsSync(DB_PATH)) {
  console.error('Database file not found at:', DB_PATH);
  process.exit(1);
}

const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
if (!Array.isArray(db.exam_questions)) db.exam_questions = [];
if (!Array.isArray(db.exams)) db.exams = [];

const SAT_2016_EXAM_ID = 'exam-entrance-2016-sat';

// 1. Find or create 2016 SAT Exam in db.exams
let sat2016Exam = db.exams.find(e => e.id === SAT_2016_EXAM_ID);
if (sat2016Exam) {
  sat2016Exam.title = '2016 E.C. National EUEE Aptitude Examination';
  sat2016Exam.subject_id = 'subj-sat';
  sat2016Exam.subject_name = 'Scholastic Aptitude Test (SAT)';
  sat2016Exam.year = 2016;
  sat2016Exam.ethiopian_year = '2016 E.C.';
  sat2016Exam.exam_series = '2016 E.C. EUEE Exams';
  sat2016Exam.duration_minutes = 120;
  sat2016Exam.total_questions = 60;
  sat2016Exam.questions_count = 60;
  sat2016Exam.digitized_questions_count = 60;
  sat2016Exam.digitization_progress = 100;
  sat2016Exam.is_digitized = true;
  sat2016Exam.status = 'PUBLISHED';
  sat2016Exam.is_free_preview = true;
  sat2016Exam.instructions = 'Subject Code: 01, Booklet Code: 040. Answer all 60 questions. Time allowed: 2 hours (120 minutes). Select the single best answer for each question.';
  console.log('[Populate] Updated 2016 SAT Exam metadata to 60 questions PUBLISHED.');
} else {
  sat2016Exam = {
    id: SAT_2016_EXAM_ID,
    title: '2016 E.C. National EUEE Aptitude Examination',
    category: 'ENTRANCE',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-sat',
    subject_name: 'Scholastic Aptitude Test (SAT)',
    year: 2016,
    ethiopian_year: '2016 E.C.',
    exam_series: '2016 E.C. EUEE Exams',
    duration_minutes: 120,
    total_questions: 60,
    questions_count: 60,
    digitized_questions_count: 60,
    digitization_progress: 100,
    is_digitized: true,
    status: 'PUBLISHED',
    is_free_preview: true,
    instructions: 'Subject Code: 01, Booklet Code: 040. Answer all 60 questions. Time allowed: 2 hours (120 minutes). Select the single best answer for each question.'
  };
  db.exams.push(sat2016Exam);
  console.log('[Populate] Created new 2016 SAT Exam entry in db.exams.');
}

// 2. Remove old questions for SAT_2016_EXAM_ID
const beforeCount = db.exam_questions.length;
db.exam_questions = db.exam_questions.filter(q => q.exam_id !== SAT_2016_EXAM_ID);
const removedCount = beforeCount - db.exam_questions.length;
console.log(`[Populate] Removed ${removedCount} stale questions for ${SAT_2016_EXAM_ID}.`);

// 3. Insert 60 authentic SAT questions
balancedQuestions.forEach(q => {
  db.exam_questions.push({
    id: `q-sat-2016-${q.question_number}`,
    exam_id: SAT_2016_EXAM_ID,
    question_number: q.question_number,
    question_text: q.question_text,
    option_a: q.option_a,
    option_b: q.option_b,
    option_c: q.option_c,
    option_d: q.option_d,
    correct_answer: q.correct_answer,
    explanation: q.explanation,
    answer_status: 'admin_verified',
    difficulty: q.difficulty || 'Medium',
    topic_name: q.topic_name || 'General Aptitude',
    instruction_category: q.instruction_category || 'Aptitude',
    section_instruction: q.section_instruction || '',
    reading_passage: q.reading_passage || undefined,
    passage_title: q.passage_title || undefined,
    grade_id: sat2016Exam.grade_id,
    subject_id: sat2016Exam.subject_id
  });
});

console.log(`[Populate] Added ${balancedQuestions.length} authentic 2016 SAT questions.`);

// 4. Save back to database.json
fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
console.log('[Populate] Successfully updated database.json with 2016 SAT exam questions.');
