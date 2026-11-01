// Exhaustive Grammar, Vocabulary, Reading, Speaking, and Writing Curriculum Registry for Grade 9 English
// Grounded in the official FDRE Ministry of Education Ethiopian National Curriculum

export interface EnglishVocabWord {
  word: string;
  part_of_speech: string;
  phonetic: string;
  definition: string;
  context_sentence: string;
  ethiopian_context: string;
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  word_family?: {
    noun?: string;
    verb?: string;
    adjective?: string;
    adverb?: string;
  };
}

export interface EnglishGrammarTopic {
  id: string;
  unit_number: number;
  unit_title: string;
  rule_title: string;
  formula_structure: string;
  core_summary: string;
  detailed_explanation: string;
  deep_ai_analysis: string;
  usage_rules: string[];
  key_examples: Array<{
    sentence: string;
    explanation: string;
    context?: string;
  }>;
  common_errors_traps: Array<{
    incorrect: string;
    correct: string;
    reason: string;
  }>;
  transformation_exercises: Array<{
    prompt: string;
    starting_sentence: string;
    target_pattern: string;
    solution: string;
    explanation: string;
  }>;
}

export interface EnglishUnitMastery {
  unit_number: number;
  unit_title: string;
  start_page: number;
  end_page: number;
  reading_focus: {
    passage_title: string;
    core_theme: string;
    comprehension_strategies: string[];
    key_takeaways: string[];
  };
  grammar_masterclass: EnglishGrammarTopic[];
  vocabulary_bank: EnglishVocabWord[];
  speaking_listening_focus: {
    functions: string[];
    key_expressions: string[];
    sample_dialogue: Array<{ speaker: string; text: string }>;
  };
  writing_masterclass: {
    genre: string;
    structure_blueprint: string[];
    sample_model: string;
    writing_checklist: string[];
  };
  euee_exam_tips: string[];
}

export const GRADE_9_ENGLISH_MASTERY: EnglishUnitMastery[] = [
  {
    unit_number: 1,
    unit_title: 'Unit 1: Living in a Village',
    start_page: 1,
    end_page: 24,
    reading_focus: {
      passage_title: 'Daily Life and Community in an Ethiopian Village',
      core_theme: 'Rural agrarian lifestyle, cooperative labor (Debo & Wonfel), and harmonious village social structures.',
      comprehension_strategies: [
        'Skimming for main ideas: Read the introductory and concluding sentences of each paragraph to identify central themes before deep reading.',
        'Scanning for specific facts: Look for numerical data, names of traditional tools, and specific agricultural seasons.',
        'Contextual vocabulary deduction: Use surrounding clues to infer the meanings of traditional agricultural terminology.'
      ],
      key_takeaways: [
        'Ethiopian rural life relies heavily on cooperative communal labor networks known as Wonfel (mutual labor exchange) and Debo (large communal work parties).',
        'Subsistence farming dictates daily schedules: waking at dawn, tending livestock, cultivating crops, and evening community gatherings.',
        'Traditional agrarian knowledge balances environmental stewardship with generational social cohesion.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u1-g1',
        unit_number: 1,
        unit_title: 'Unit 1: Living in a Village',
        rule_title: 'Simple Present vs. Present Continuous Tenses',
        formula_structure: 'Simple Present: Subject + Verb(s/es) (+ Object) | Present Continuous: Subject + am/is/are + Verb-ing',
        core_summary: 'Use Simple Present for habits, routines, general facts, and permanent states. Use Present Continuous for actions happening right now, temporary situations, or changing trends.',
        detailed_explanation: `1. **Simple Present Tense**:
- **Habitual Actions & Routines**: Expresses actions repeated at regular intervals. Often accompanied by adverbs of frequency (*always, usually, frequently, often, sometimes, rarely, never*).
  *Example*: "The village elders meet under the acacia tree every Friday morning."
- **Universal Truths & General Scientific Facts**: Statements of permanent validity.
  *Example*: "Water boils at 100 degrees Celsius at sea level."
- **Permanent Situations**: Long-term arrangements.
  *Example*: "My uncle lives in a quiet village near Lake Tana."

2. **Present Continuous Tense**:
- **Actions in Progress at the Moment of Speaking**: Immediate occurrences.
  *Example*: "Listen! The children are singing a traditional harvest song outside."
- **Temporary Situations**: Ongoing during a current period but not permanent.
  *Example*: "Aster is staying with her grandmother in the countryside during the harvest break."
- **Changing and Developing Trends**: Gradual shifts over time.
  *Example*: "More farmers in the highlands are adopting solar water pumps."

3. **Stative Verbs vs. Action Verbs**:
Stative verbs describe feelings, thoughts, possessions, or sensory perceptions and are NOT typically used in continuous forms (*know, believe, understand, belong, possess, prefer, remember, need*).
- *Incorrect*: "I am knowing the way to the market."
- *Correct*: "I know the way to the market."`,
        deep_ai_analysis: 'In academic English and National Entrance Examinations (EUEE), examiners frequently test stative verbs (like *seem, belong, possess, understand*) disguised in continuous forms, as well as the placement of adverbs of frequency (which come BEFORE main verbs but AFTER the verb *to be*). Master the distinction between habitual state and transient progress.',
        usage_rules: [
          'Rule 1: Add -s or -es to base verbs for 3rd person singular (he, she, it) in Simple Present: "He cultivates", "She washes".',
          'Rule 2: Adverbs of frequency precede normal verbs ("She always wakes early") but follow the auxiliary "be" ("He is always punctual").',
          'Rule 3: Stative verbs describing cognition (know, remember), emotion (like, hate), and possession (own, belong) strictly take Simple Present.'
        ],
        key_examples: [
          {
            sentence: 'Farmers in Arsi plough their fields using oxen before the Meher rains begin.',
            explanation: 'Simple Present used to express a recurring agricultural routine and seasonal reality.',
            context: 'Agricultural Routine'
          },
          {
            sentence: 'Right now, the village youth are constructing a new footbridge over the stream.',
            explanation: 'Present Continuous used with "Right now" to depict an action actively taking place at the moment of speech.',
            context: 'Immediate Action'
          },
          {
            sentence: 'This house belongs to our extended family.',
            explanation: 'Stative verb "belong" expresses possession and cannot take continuous form (*is belonging).',
            context: 'Stative Verb'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'Look! The cattle is crossing the river.',
            correct: 'Look! The cattle are crossing the river.',
            reason: '"Cattle" is a plural collective noun requiring the plural auxiliary "are".'
          },
          {
            incorrect: 'She is having three dairy cows on her farm.',
            correct: 'She has three dairy cows on her farm.',
            reason: '"Have" expressing possession is a stative verb and must not use the progressive form.'
          },
          {
            incorrect: 'Abebe is usually waking up at 5:30 AM.',
            correct: 'Abebe usually wakes up at 5:30 AM.',
            reason: 'Habitual actions marked with frequency adverbs take Simple Present, not Present Continuous.'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Combine the sentence using Present Continuous for the temporary action and Simple Present for the general routine:',
            starting_sentence: 'Tolosa normally (walk) to school, but this week he (ride) his brother\'s bicycle.',
            target_pattern: 'Routine (Simple Present) vs. Temporary exception (Present Continuous)',
            solution: 'Tolosa normally walks to school, but this week he is riding his brother\'s bicycle.',
            explanation: '"Normally walks" marks general routine, while "this week he is riding" marks a temporary deviation.'
          },
          {
            prompt: 'Correct the stative verb error:',
            starting_sentence: 'I am understanding the instructions given by the agricultural extension worker.',
            target_pattern: 'Stative verb correction',
            solution: 'I understand the instructions given by the agricultural extension worker.',
            explanation: '"Understand" is a verb of cognition and takes Simple Present.'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Agrarian',
        part_of_speech: 'adjective',
        phonetic: '/əˈɡreə.ri.ən/',
        definition: 'Relating to cultivated land, agriculture, or rural farming communities.',
        context_sentence: 'Most Ethiopian rural districts maintain an agrarian economic model centered on crop cultivation and livestock rearing.',
        ethiopian_context: 'Describes traditional rural economic life across regional states in Ethiopia.',
        synonyms: ['Agricultural', 'Farming', 'Rural', 'Pastoral'],
        antonyms: ['Industrial', 'Urban', 'Metropolitan'],
        collocations: ['Agrarian society', 'Agrarian economy', 'Agrarian reform'],
        word_family: { noun: 'Agrarianism', adjective: 'Agrarian' }
      },
      {
        word: 'Subsistence',
        part_of_speech: 'noun',
        phonetic: '/səbˈsɪs.təns/',
        definition: 'The state or fact of supporting oneself at a minimal level; producing just enough food to survive with little or no surplus for sale.',
        context_sentence: 'Subsistence farmers work diligently to feed their households through seasonal crop yields.',
        ethiopian_context: 'Commonly contrasts with large-scale commercial agribusiness in Ethiopian geography and economics curricula.',
        synonyms: ['Livelihood', 'Survival', 'Maintenance', 'Sustenance'],
        antonyms: ['Surplus', 'Commercialization', 'Abundance'],
        collocations: ['Subsistence farming', 'Subsistence wage', 'Means of subsistence'],
        word_family: { verb: 'Subsist', noun: 'Subsistence' }
      },
      {
        word: 'Wonfel',
        part_of_speech: 'noun (indigenous cultural loanword)',
        phonetic: '/wɒnˈfɛl/',
        definition: 'An indigenous Ethiopian reciprocal labor-sharing institution where neighbors assist each other equally on rotational farm tasks.',
        context_sentence: 'Through wonfel, the village farmers ploughed all four neighboring plots within a single week.',
        ethiopian_context: 'Core cultural institution of reciprocal cooperation in Ethiopian rural communities.',
        synonyms: ['Mutual aid', 'Cooperative labor', 'Rotational solidarity'],
        antonyms: ['Individualism', 'Hired labor'],
        collocations: ['Practice wonfel', 'Wonfel arrangement', 'Rotational wonfel']
      },
      {
        word: 'Irrigation',
        part_of_speech: 'noun',
        phonetic: '/ˌɪr.ɪˈɡeɪ.ʃən/',
        definition: 'The artificial supply of water to agricultural land or crops to encourage plant growth and resilience during dry seasons.',
        context_sentence: 'Small-scale drip irrigation systems enabled the community to harvest vegetables twice a year.',
        ethiopian_context: 'Key technological development in Ethiopian river basins like the Awash and Omo.',
        synonyms: ['Watering', 'Water supply', 'Hydration'],
        antonyms: ['Drought', 'Dehydration', 'Aridity'],
        collocations: ['Drip irrigation', 'Canal irrigation', 'Irrigation scheme'],
        word_family: { verb: 'Irrigate', noun: 'Irrigation', adjective: 'Irrigated' }
      },
      {
        word: 'Pastoralist',
        part_of_speech: 'noun',
        phonetic: '/ˈpɑː.stər.əl.ɪst/',
        definition: 'A farmer or herder who moves livestock across grazing pastures as a primary lifestyle and economic livelihood.',
        context_sentence: 'Pastoralist communities in Afar and Somali regions possess extensive knowledge of weather indicators and pasture migration.',
        ethiopian_context: 'Characterizes the mobile livestock herding populations in the lowlands of Ethiopia.',
        synonyms: ['Herder', 'Nomad', 'Grazing farmer'],
        antonyms: ['Sedentary farmer', 'City dweller'],
        collocations: ['Nomadic pastoralist', 'Pastoralist livelihood', 'Pastoralist corridor'],
        word_family: { noun: 'Pastoralism', adjective: 'Pastoral' }
      }
    ],
    speaking_listening_focus: {
      functions: ['Describing daily habits and local community structures', 'Asking for and giving directions in a village', 'Expressing polite requests'],
      key_expressions: [
        '"Could you please tell me how often the village council convenes?"',
        '"In our village, it is customary to greet elders before entering the meeting hall."',
        '"What I admire most about our local traditions is the spirit of collective self-reliance."'
      ],
      sample_dialogue: [
        { speaker: 'Almaz', text: 'Hello, Dawit! How does your family manage the intense harvesting season every autumn?' },
        { speaker: 'Dawit', text: 'We rely on wonfel. Our neighbors come over to cut the barley on Monday, and we assist on their farm on Wednesday.' },
        { speaker: 'Almaz', text: 'That is wonderful! Mutual cooperation makes heavy labor manageable for everyone in the village.' }
      ]
    },
    writing_masterclass: {
      genre: 'Descriptive Paragraph (Place & Community)',
      structure_blueprint: [
        '1. Topic Sentence: State the subject and dominant impression (e.g., "My hometown village of Debre Sina is a vibrant community anchored by lush green hills and unwavering cooperative spirit.").',
        '2. Supporting Details: Use sensory imagery (sight, sound, smell) and spatial organization (from foreground to background).',
        '3. Concluding Sentence: Summarize the emotional impact or lasting cultural value of the village.'
      ],
      sample_model: 'Nestled between the rolling slopes of Mount Fentale lies our tranquil village, a haven of agrarian vitality and enduring community bonds. At daybreak, the rhythmic hum of wooden flour mills blends with the melodious calls of birds across the eucalyptus groves. Farmers in traditional cotton shawls guide sturdy oxen along dusty pathways toward the terraced fields, while women prepare rich coffee over aromatic open hearths. In this close-knit settlement, every celebration and hardship is shared through age-old traditions like Debo and Iddir. The village is not merely a geographic settlement; it is a living tapestry of Ethiopian solidarity, warmth, and resilience.',
      writing_checklist: [
        'Did you use precise descriptive adjectives (lush, tranquil, sturdy, aromatic)?',
        'Are your Simple Present verbs correctly conjugated for third-person subjects?',
        'Did you organize sentences logically using transition markers (at daybreak, along, while)?'
      ]
    },
    euee_exam_tips: [
      'EUEE Question Type: Identifying Stative Verbs. When you see verbs like *taste, smell, look, feel*, check whether they describe a state (Simple Present: "This injera tastes fresh") or an intentional active action (Continuous: "The chef is tasting the sauce to test its saltiness").',
      'Watch out for subject-verb agreement with collective nouns: "The committee meets every Monday" (singular entity) vs. "The cattle are grazing in the meadow" (always plural).'
    ]
  },
  {
    unit_number: 2,
    unit_title: 'Unit 2: History of Writing',
    start_page: 25,
    end_page: 48,
    reading_focus: {
      passage_title: 'From Ancient Cuneiform and Hieroglyphs to the Ge\'ez Script',
      core_theme: 'Evolution of human writing systems, palaeography, indigenous African scripts, and manuscript preservation.',
      comprehension_strategies: [
        'Chronological order tracking: Construct a mental timeline from Mesopotamian cuneiform to Egyptian hieroglyphs and the development of the Ge\'ez abugida in Aksum.',
        'Identifying cause and effect: Trace how agricultural record-keeping and administrative needs necessitated written symbols.'
      ],
      key_takeaways: [
        'Writing evolved from concrete pictograms to phonetic syllables and alphabetic alphabets.',
        'The Ge\'ez script (Fidel) is Africa\'s sole indigenous active abugida (syllabary), wherein vowel sounds are indicated by modifications to consonantal characters.',
        'Ethiopian illuminated parchment manuscripts preserved ancient scientific, historical, and religious texts across millennia.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u2-g1',
        unit_number: 2,
        unit_title: 'Unit 2: History of Writing',
        rule_title: 'Simple Past vs. Past Continuous Tenses',
        formula_structure: 'Simple Past: Subject + Verb2 (regular -ed / irregular) | Past Continuous: Subject + was/were + Verb-ing',
        core_summary: 'Use Simple Past for completed past actions with definite time markers. Use Past Continuous for actions that were ongoing at a specific moment in the past, or background actions interrupted by a shorter action (joined by when/while).',
        detailed_explanation: `1. **Simple Past Tense**:
- Completed actions at a specific time in the past (*yesterday, last year, in 1991, 500 years ago*).
  *Example*: "King Ezana erected the inscribed stone obelisks in Aksum during the 4th century CE."
- A sequence of completed past actions in chronological storytelling.
  *Example*: "The scribe prepared the goat parchment, ground the natural pigments, and wrote the sacred chronicle."

2. **Past Continuous Tense**:
- Ongoing background action in the past.
  *Example*: "At 3:00 PM yesterday, the archaeologist was deciphering the ancient inscription."
- Two simultaneous past actions happening at the exact same time (using *while*).
  *Example*: "While Aster was researching ancient scripts in the library, Bekele was drawing the Aksumite symbols."

3. **Interrupted Past Actions (When vs. While)**:
- **Rule**: Ongoing longer background action in **Past Continuous** + **When** + Short interrupting action in **Simple Past**.
  *Formula*: [Past Continuous] + *when* + [Simple Past]
  *Example*: "The historians were examining the illuminated manuscript when the power went out."
- **Rule**: **While** + [Past Continuous], [Simple Past].
  *Example*: "While the professor was lecturing on the origins of writing, a student asked an insightful question."`,
        deep_ai_analysis: 'In EUEE exams, *while* is overwhelmingly followed by the Past Continuous (was/were + V-ing), whereas *when* is typically followed by the Simple Past (V2). Watch for irregular past tense verb forms (write -> wrote -> written, decipher -> deciphered, bind -> bound).',
        usage_rules: [
          'Rule 1: Form Simple Past with -ed for regular verbs (inscribe -> inscribed) and memorized forms for irregular verbs (make -> made, write -> wrote).',
          'Rule 2: Use "was" for singular subjects (I, he, she, it) and "were" for plural subjects (we, you, they).',
          'Rule 3: Use Past Continuous for the longer background action and Simple Past for the sudden interruption.'
        ],
        key_examples: [
          {
            sentence: 'Ancient Egyptian scribes carved hieroglyphs into stone temple walls.',
            explanation: 'Simple Past regular verb used for historical fact completed in antiquity.',
            context: 'Historical Fact'
          },
          {
            sentence: 'While the monk was binding the parchment leaves, he noticed a faint marginal notation.',
            explanation: '"While" introduces the longer continuous action (was binding) interrupted by the punctual discovery (noticed).',
            context: 'Interrupted Action'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'While I was studying in the library, my phone was ringing.',
            correct: 'While I was studying in the library, my phone rang.',
            reason: 'The sudden interrupting action should be in Simple Past ("rang"), not Past Continuous.'
          },
          {
            incorrect: 'The ancient scribes writed their records on papyrus rolls.',
            correct: 'The ancient scribes wrote their records on papyrus rolls.',
            reason: '"Write" is an irregular verb with past tense "wrote", never "writed".'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Combine the two sentences using "while" to show interrupted action:',
            starting_sentence: 'The archaeologist excavated the trench. She found a Ge\'ez coin.',
            target_pattern: 'While + Past Continuous, Simple Past',
            solution: 'While the archaeologist was excavating the trench, she found an ancient Aksumite coin.',
            explanation: 'The ongoing excavation is expressed in Past Continuous, while the coin discovery is in Simple Past.'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Parchment',
        part_of_speech: 'noun',
        phonetic: '/ˈpɑːtʃ.mənt/',
        definition: 'A stiff, flat, thin material made from the prepared skin of an animal (such as a goat or sheep) and used as a durable writing surface in ancient manuscripts.',
        context_sentence: 'Ethiopian monastic scholars inscribed illuminated theological manuscripts on parchment (Branna) that endure for centuries.',
        ethiopian_context: 'Directly corresponds to traditional Ethiopian *Branna* craftsmanship.',
        synonyms: ['Vellum', 'Animal skin', 'Manuscript membrane'],
        antonyms: ['Synthetic paper', 'Digital screen'],
        collocations: ['Parchment manuscript', 'Goat parchment', 'Parchment scroll']
      },
      {
        word: 'Hieroglyph',
        part_of_speech: 'noun',
        phonetic: '/ˈhaɪə.rə.ɡlɪf/',
        definition: 'A stylized picture of an object representing a word, syllable, or sound, as found in ancient Egyptian and other writing systems.',
        context_sentence: 'Scholars spent centuries attempting to decipher ancient Egyptian hieroglyphs until the Rosetta Stone provided the key.',
        ethiopian_context: 'Studied in relation to early Nile Valley civilizations neighboring the Horn of Africa.',
        synonyms: ['Pictograph', 'Symbol', 'Inscriptional character'],
        antonyms: ['Alphabetic letter', 'Phonetic text'],
        collocations: ['Egyptian hieroglyph', 'Carved hieroglyph', 'Decipher hieroglyphs'],
        word_family: { noun: 'Hieroglyphics', adjective: 'Hieroglyphic' }
      },
      {
        word: 'Decipher',
        part_of_speech: 'verb',
        phonetic: '/dɪˈsaɪ.fər/',
        definition: 'To convert a text written in code or ancient script into intelligible, understandable language.',
        context_sentence: 'Linguists collaborated across continents to decipher the ancient Sabaean and Ge\'ez inscriptions discovered in Yeha.',
        ethiopian_context: 'Essential term for understanding Ethiopian archaeology and historical linguistics.',
        synonyms: ['Decode', 'Translate', 'Interpret', 'Unravel'],
        antonyms: ['Encode', 'Obscure', 'Scramble'],
        collocations: ['Decipher an inscription', 'Decipher ancient script', 'Decipher code'],
        word_family: { verb: 'Decipher', noun: 'Decipherment', adjective: 'Decipherable' }
      },
      {
        word: 'Manuscript',
        part_of_speech: 'noun',
        phonetic: '/ˈmæn.jə.skrɪpt/',
        definition: 'A book, document, or piece of music written by hand rather than typed or printed.',
        context_sentence: 'The Institute of Ethiopian Studies preserves thousands of illuminated Ge\'ez manuscripts chronicling royal history and philosophy.',
        ethiopian_context: 'Central to Ethiopia\'s cultural heritage preserved in historical monasteries like Debre Damo and Lake Tana.',
        synonyms: ['Handwritten text', 'Codex', 'Document'],
        antonyms: ['Printed book', 'E-book'],
        collocations: ['Illuminated manuscript', 'Ancient manuscript', 'Preserve manuscripts']
      }
    ],
    speaking_listening_focus: {
      functions: ['Recounting historical events in chronological order', 'Asking questions about historical timelines', 'Expressing historical comparisons'],
      key_expressions: [
        '"According to historical evidence, writing first originated in..."',
        '"What is particularly fascinating about the Ge\'ez script is its abugida vocalic system."',
        '"Prior to the invention of the printing press, all manuscripts were transcribed meticulously by hand."'
      ],
      sample_dialogue: [
        { speaker: 'Hanna', text: 'Which ancient writing system do you find most impressive, Samuel?' },
        { speaker: 'Samuel', text: 'I am amazed by the Ge\'ez Fidel. Unlike European alphabets, each character inherently carries both a consonant and a specific vowel sound.' },
        { speaker: 'Hanna', text: 'Indeed! That phonetic sophistication made literacy more structured for scribes in Aksum.' }
      ]
    },
    writing_masterclass: {
      genre: 'Chronological Narrative Paragraph',
      structure_blueprint: [
        '1. Topic Sentence: State the overarching historical development.',
        '2. Time Transitions: Use sequential linkers (*Initially, subsequently, during the 4th century, eventually*).',
        '3. Concluding Sentence: Summarize the enduring historical legacy.'
      ],
      sample_model: 'The development of written communication represents humanity\'s most revolutionary intellectual achievement. Initially, ancient civilizations utilized simple pictograms to tally trade surpluses in livestock and grain. Over centuries, Mesopotamian scribes pressed wedge-shaped reeds into soft clay tablets, formulating the cuneiform script, while Nile Valley scribes developed sacred hieroglyphic inscriptions. Concurrently in the Horn of Africa, the Aksumite civilization adapted South Arabian characters into the distinct Ge\'ez abugida, innovatively modifying character stems to encode vocalic variations. Through handwritten parchment manuscripts, these early African scholars ensured that literature, governance, and philosophy survived for future generations.',
      writing_checklist: [
        'Are all past tense verbs regular and irregular conjugated accurately?',
        'Did you employ time transition signals (Initially, over centuries, concurrently)?',
        'Is the paragraph chronologically coherent?'
      ]
    },
    euee_exam_tips: [
      'Watch for irregular verb past participles in EUEE multiple-choice questions (e.g., *choose -> chose -> chosen, freeze -> froze -> frozen, lay -> laid -> laid*).',
      'When two actions in the past happened simultaneously over an extended period, both can take Past Continuous joined by *while*: "While Meron was writing her essay, her brother was reading a historical novel."'
    ]
  },
  {
    unit_number: 3,
    unit_title: 'Unit 3: People and Animals',
    start_page: 49,
    end_page: 72,
    reading_focus: {
      passage_title: 'Wildlife Conservation and Endangered Species in Ethiopia',
      core_theme: 'Biodiversity, endemic wildlife conservation, habitat fragmentation, and ecological stewardship.',
      comprehension_strategies: [
        'Identifying main arguments vs. supporting statistics: Note ecological percentages and habitat acreage.',
        'Distinguishing fact from opinion in environmental advocacy passages.'
      ],
      key_takeaways: [
        'Ethiopia is a global biodiversity hotspot boasting endemic species such as the Walia Ibex, Ethiopian Wolf (Simien Fox), Mountain Nyala, and Gelada Baboon.',
        'Habitat encroachment, illegal poaching, and deforestation severely threaten fragile Afro-alpine ecosystems.',
        'Community-based conservation models successfully balance human economic needs with protected wildlife sanctuaries.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u3-g1',
        unit_number: 3,
        unit_title: 'Unit 3: People and Animals',
        rule_title: 'Modals of Ability, Permission, Obligation, and Advice',
        formula_structure: 'Subject + Modal Auxiliary (can, could, must, should, may, might, have to, ought to) + Base Verb (V1)',
        core_summary: 'Modals modify the mood, necessity, capability, or likelihood of the main verb. They never take -s in third person and are followed by the bare infinitive (except "have to" and "ought to").',
        detailed_explanation: `1. **Ability**:
- **Can**: Present general ability (*"The Walia ibex can climb precipitous mountain cliffs."*)
- **Could**: Past general ability (*"In the 19th century, large herds of elephants could roam freely across the rift valley."*)
- **Be able to**: Used across all tenses, especially future (*"With conservation funding, researchers will be able to monitor the wolf packs."*)

2. **Obligation & Necessity**:
- **Must**: Strong internal or official obligation; speaker considers it vital (*"Citizens must protect national heritage and wildlife."*)
- **Have to**: External obligation imposed by laws, regulations, or circumstances (*"Tourists have to obtain a permit before camping in Simien National Park."*)
- **Must not (Prohibition)**: Strictly forbidden (*"Visitors must not feed or harass wild animals."*)
- **Don't have to (Lack of obligation)**: Not necessary, but optional (*"Students do not have to pay entrance fees on national conservation day."*)

3. **Advice & Recommendation**:
- **Should / Ought to**: Moderate advice; what is good or sensible (*"We should plant indigenous trees around wildlife corridors."*)
- **Had better**: Urgent advice with an implied negative consequence if ignored (*"You had better extinguish the campfire, or it will ignite the dry grass."*)

4. **Permission & Possibility**:
- **May / Can**: Asking and giving permission (*"May we interview the park warden for our biology project?"*)
- **May / Might / Could**: Expressing possibility (*"Global warming might reduce the natural habitat of the Ethiopian wolf."*)`,
        deep_ai_analysis: 'EUEE examiners heavily test the contrast between **Must not** (prohibition: 0% allowed) and **Don\'t have to** (lack of obligation: optional). They also test "had better + bare infinitive" (NEVER "had better to go").',
        usage_rules: [
          'Rule 1: Always follow modal verbs with the bare infinitive (V1) without "to": "She must go" (NOT "She must to go").',
          'Rule 2: "Must not" means forbidden; "Don\'t have to" means not necessary.',
          'Rule 3: "Had better" takes bare infinitive and refers to the present or future, never past.'
        ],
        key_examples: [
          {
            sentence: 'Poachers must not enter the boundaries of the national sanctuary.',
            explanation: 'Prohibition: It is strictly illegal and forbidden by law.',
            context: 'Legal Prohibition'
          },
          {
            sentence: 'You had better wear sturdy hiking boots when trekking through the Bale Mountains.',
            explanation: '"Had better" provides strong cautionary advice to avoid injury.',
            context: 'Strong Caution'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'You must to submit your conservation report tomorrow.',
            correct: 'You must submit your conservation report tomorrow.',
            reason: 'Modal verbs take the bare infinitive without "to".'
          },
          {
            incorrect: 'You don\'t have to hunt endangered animals in the reserve.',
            correct: 'You must not hunt endangered animals in the reserve.',
            reason: 'Hunting endangered animals is strictly illegal (prohibition = must not), not an optional activity (don\'t have to).'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Rewrite the sentence using a modal verb expressing strong advice/warning:',
            starting_sentence: 'It is very important that you do not leave plastic trash in the wildlife park, or animals will swallow it.',
            target_pattern: 'Had better not + bare infinitive',
            solution: 'You had better not leave plastic trash in the wildlife park, or animals will swallow it.',
            explanation: '"Had better not" encapsulates urgent advice with a negative consequence.'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Endemic',
        part_of_speech: 'adjective',
        phonetic: '/enˈdem.ɪk/',
        definition: 'Native and strictly restricted to a certain country, geographic area, or ecological niche.',
        context_sentence: 'The Walia Ibex and Ethiopian Wolf are endemic species found exclusively in the highland massifs of Ethiopia.',
        ethiopian_context: 'Pivotal term in Ethiopian biology and environmental conservation curricula.',
        synonyms: ['Indigenous', 'Native', 'Localized'],
        antonyms: ['Exotic', 'Introduced', 'Invasive', 'Cosmopolitan'],
        collocations: ['Endemic species', 'Endemic wildlife', 'Endemic flora']
      },
      {
        word: 'Sanctuary',
        part_of_speech: 'noun',
        phonetic: '/ˈsæŋk.tʃʊə.ri/',
        definition: 'A protected nature reserve where wildlife is sheltered from hunting, poaching, and human exploitation.',
        context_sentence: 'The Babile Elephant Sanctuary was established to safeguard the remaining African elephant herds in eastern Ethiopia.',
        ethiopian_context: 'Refers to Ethiopian government-protected wildlife zones like Babile and Senkelle.',
        synonyms: ['Refuge', 'Reserve', 'Haven', 'Conservation park'],
        antonyms: ['Hunting ground', 'Open territory'],
        collocations: ['Wildlife sanctuary', 'Nature sanctuary', 'Bird sanctuary']
      },
      {
        word: 'Poaching',
        part_of_speech: 'noun',
        phonetic: '/ˈpəʊ.tʃɪŋ/',
        definition: 'The illegal hunting, capturing, or killing of wild animals on protected land.',
        context_sentence: 'Stricter penalties and armed park ranger patrols have drastically reduced illegal poaching in Simien National Park.',
        ethiopian_context: 'A critical threat to rare Ethiopian fauna targeted by national conservation policies.',
        synonyms: ['Illegal hunting', 'Game theft'],
        antonyms: ['Wildlife conservation', 'Legal game protection'],
        collocations: ['Anti-poaching patrol', 'Illegal poaching', 'Combating poaching'],
        word_family: { verb: 'Poach', noun: 'Poacher / Poaching' }
      }
    ],
    speaking_listening_focus: {
      functions: ['Expressing obligation and prohibition', 'Debating conservation policies', 'Expressing opinions with supporting justification'],
      key_expressions: [
        '"In my view, local communities ought to be active partners in ecotourism revenues."',
        '"We must not compromise the integrity of pristine national reserves for short-term economic gains."',
        '"Would you agree that environmental education should be mandatory in secondary schools?"'
      ],
      sample_dialogue: [
        { speaker: 'Kidus', text: 'Should the government allocate more budget to anti-poaching patrols in Bale?' },
        { speaker: 'Saba', text: 'Undoubtedly. If we fail to protect the Ethiopian wolf today, future generations will only know this majestic creature from textbooks.' }
      ]
    },
    writing_masterclass: {
      genre: 'Persuasive Essay (Wildlife Protection)',
      structure_blueprint: [
        '1. Introduction: Hook reader with ecological urgency, state thesis statement.',
        '2. Body Paragraph 1: Detail biodiversity importance and endemic heritage.',
        '3. Body Paragraph 2: Present counter-argument and refute it persuasively.',
        '4. Conclusion: Restate thesis with a powerful call to action.'
      ],
      sample_model: 'Ethiopia\'s unique ecological topography has bestowed our nation with unparalleled biodiversity, including rare species found nowhere else on planet Earth. However, the alarming pace of habitat loss and illegal poaching threatens to push iconic creatures like the Walia Ibex and Mountain Nyala toward extinction. While some argue that expanding agricultural boundaries is indispensable for economic expansion, sustainable ecotourism offers a far more lucrative and long-lasting alternative. When rural communities participate directly in conservation revenue, both human livelihoods and natural ecosystems flourish in harmony. We must act decisively: strict enforcement of environmental legislation, coupled with community-based conservation initiatives, is our sacred duty to protect Ethiopia\'s living heritage.',
      writing_checklist: [
        'Did you use strong modal verbs (must, ought to, should)?',
        'Is your thesis statement clearly articulated in the introduction?',
        'Did you include a persuasive counter-argument refutation?'
      ]
    },
    euee_exam_tips: [
      'Master the distinction between **can\'t** (impossibility: "It can\'t be true") and **must not** (prohibition: "You must not enter").',
      'Remember that "have to" takes auxiliary *do/does/did* for negatives and questions: "Does he have to attend?" (NOT "Has he to attend?").'
    ]
  },
  {
    unit_number: 4,
    unit_title: 'Unit 4: The Digital World',
    start_page: 73,
    end_page: 96,
    reading_focus: {
      passage_title: 'How the Internet and Smart Devices Transform Modern Society',
      core_theme: 'Digital revolution, information access, cyber hygiene, social media impacts, and artificial intelligence.',
      comprehension_strategies: [
        'Evaluating pros and cons in informational texts.',
        'Synthesizing arguments across technological perspectives.'
      ],
      key_takeaways: [
        'The internet democratizes education, allowing students in remote regions to access global libraries and online courses.',
        'Digital footprints, data privacy, and phishing require vigilant cyber hygiene.',
        'Balanced screen time prevents digital addiction, eye strain, and social isolation.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u4-g1',
        unit_number: 4,
        unit_title: 'Unit 4: The Digital World',
        rule_title: 'Expressing the Future: Will, Be Going To, Present Continuous',
        formula_structure: 'Will + V1 (Spontaneous/Prediction) | Be Going To + V1 (Prior Plan/Evidence) | Present Continuous (Fixed arrangement)',
        core_summary: 'Choose the appropriate future form depending on whether the decision is spontaneous ("will"), planned in advance ("be going to"), based on present visual evidence ("be going to"), or a fixed scheduled appointment with other people ("Present Continuous").',
        detailed_explanation: `1. **Will (Future Simple)**:
- **Spontaneous Decisions**: Made at the moment of speaking without prior deliberation.
  *Example*: "The internet connection is lagging; I will switch to mobile data."
- **Predictions based on opinion, belief, or guesswork** (often with *think, believe, probably, hope*).
  *Example*: "I think artificial intelligence will transform medical diagnostics in Ethiopia."
- **Promises, Offers, and Refusals**:
  *Example*: "I will help you configure the antivirus software after class."

2. **Be Going To**:
- **Pre-meditated Intentions & Plans**: Decided before speaking.
  *Example*: "Yonas has saved his pocket money; he is going to buy a digital tablet next month."
- **Predictions based on present visual/sensory evidence**: You can observe what is about to happen.
  *Example*: "Look at the low battery indicator on your smartphone! It is going to shut down."

3. **Present Continuous for Fixed Future Arrangements**:
- Actions organized with specific times, dates, and other participants.
  *Example*: "Our ICT class is visiting the regional innovation hub this Thursday at 10:00 AM."`,
        deep_ai_analysis: 'EUEE exam questions frequently contrast **will** and **be going to** in conversational dialogue: if speaker A presents a problem and speaker B offers an immediate solution, use **will** ("I will fix it"). If speaker B reveals a prior decision, use **be going to** ("I am going to study computer science").',
        usage_rules: [
          'Rule 1: Use "will" for spontaneous offers and promises at the time of speech.',
          'Rule 2: Use "be going to" when there is clear physical evidence right now indicating an imminent outcome.',
          'Rule 3: Use Present Continuous for pre-arranged future events involving specific schedules or appointments.'
        ],
        key_examples: [
          {
            sentence: 'The computer lab is locking up; I will print my assignment tomorrow morning.',
            explanation: 'Spontaneous decision made in response to an immediate circumstance.',
            context: 'Spontaneous Decision'
          },
          {
            sentence: 'Dark clouds of smoke are rising from the power transformer; it is going to blow a fuse.',
            explanation: 'Prediction based on present observable physical evidence.',
            context: 'Evidence-Based Prediction'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'Look at the car speeding toward the ditch! It will crash!',
            correct: 'Look at the car speeding toward the ditch! It is going to crash!',
            reason: 'Observable present evidence requires "be going to", not "will".'
          },
          {
            incorrect: 'I promise I am going to return your laptop on time.',
            correct: 'I promise I will return your laptop on time.',
            reason: 'Promises strictly take "will".'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Complete the dialogue with the correct future form (will or be going to):',
            starting_sentence: 'A: "Why are you holding that USB cable?" B: "I (transfer) the educational videos to my phone."',
            target_pattern: 'Pre-meditated intention (be going to)',
            solution: 'I am going to transfer the educational videos to my phone.',
            explanation: 'Holding the cable proves the plan was premeditated prior to the dialogue.'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Algorithm',
        part_of_speech: 'noun',
        phonetic: '/ˈæl.ɡə.rɪ.ðəm/',
        definition: 'A step-by-step procedure, formula, or set of rules followed by a computer to solve problems or perform data processing.',
        context_sentence: 'Search engine algorithms rank web pages based on relevance, keywords, and user engagement metrics.',
        ethiopian_context: 'Fundamental concept in digital literacy and secondary school ICT curricula.',
        synonyms: ['Procedure', 'Computational logic', 'Formula', 'Protocol'],
        antonyms: ['Randomness', 'Disorder'],
        collocations: ['Computer algorithm', 'Search algorithm', 'Algorithm design']
      },
      {
        word: 'Phishing',
        part_of_speech: 'noun',
        phonetic: '/ˈfɪʃ.ɪŋ/',
        definition: 'The fraudulent practice of sending deceptive emails or messages purporting to be from reputable companies to induce individuals to reveal personal information like passwords or bank PINs.',
        context_sentence: 'Cybersecurity workshops teach secondary students how to identify suspicious phishing links in SMS messages.',
        ethiopian_context: 'Crucial for mobile banking and digital security awareness in Ethiopia.',
        synonyms: ['Social engineering scam', 'Digital fraud', 'Cyber deception'],
        antonyms: ['Legitimate authentication', 'Secure verification'],
        collocations: ['Phishing scam', 'Phishing email', 'Victim of phishing']
      },
      {
        word: 'Encryption',
        part_of_speech: 'noun',
        phonetic: '/ɪnˈkrɪp.ʃən/',
        definition: 'The process of encoding data and communications into an unreadable ciphertext to prevent unauthorized access.',
        context_sentence: 'End-to-end encryption ensures that only the sender and recipient can read private digital chat messages.',
        ethiopian_context: 'Underpins secure national telecommunications and fintech applications.',
        synonyms: ['Encoding', 'Cryptography', 'Ciphering'],
        antonyms: ['Decryption', 'Plaintext', 'Decoding'],
        collocations: ['End-to-end encryption', 'Data encryption', 'Encryption key'],
        word_family: { verb: 'Encrypt', noun: 'Encryption', adjective: 'Encrypted' }
      }
    ],
    speaking_listening_focus: {
      functions: ['Discussing the advantages and drawbacks of social networks', 'Giving instructions on digital device security', 'Debating screen time limits'],
      key_expressions: [
        '"While technology undoubtedly boosts productivity, excessive screen time can disrupt study habits."',
        '"Could you explain step-by-step how to activate two-factor authentication?"',
        '"From my perspective, digital literacy is just as fundamental as reading and writing."'
      ],
      sample_dialogue: [
        { speaker: 'Ephrem', text: 'Do you think smartphones should be permitted inside secondary classrooms during lectures?' },
        { speaker: 'Selam', text: 'Only when supervised for educational research. Otherwise, continuous social notifications distract students from active participation.' }
      ]
    },
    writing_masterclass: {
      genre: 'Opinion Essay (Benefits & Risks of Artificial Intelligence in Education)',
      structure_blueprint: [
        '1. Introduction: Contextualize the rapid rise of digital learning tools; state opinion clearly.',
        '2. Body 1 (Benefits): Detail customized learning, 24/7 tutoring access, and multimedia visualization.',
        '3. Body 2 (Risks & Solutions): Address digital divide, plagiarism risks, and advocate ethical usage guidelines.',
        '4. Conclusion: Reiterate opinion with a visionary closing recommendation.'
      ],
      sample_model: 'The digital revolution is rapidly reshaping educational landscapes across the globe, offering unprecedented opportunities alongside modern challenges. In my view, integrating digital learning platforms into Ethiopian high schools is essential for bridging educational disparities and preparing youth for 21st-century careers. Firstly, online academic resources and AI tutors provide personalized, self-paced mastery of complex STEM concepts. Secondly, digital connectivity allows rural students to access the same textbooks and entrance exam libraries as urban peers. Nevertheless, access must be accompanied by rigorous cybersecurity education and clear policies against digital distraction. When implemented responsibly, digital technology empowers students to become proactive innovators rather than passive consumers.',
      writing_checklist: [
        'Did you use transition markers (Firstly, secondly, nevertheless, consequently)?',
        'Are future tense structures applied accurately to express predictions?',
        'Did you maintain a formal academic tone throughout?'
      ]
    },
    euee_exam_tips: [
      'In time clauses starting with *when, as soon as, before, after, until*, use the **Simple Present** even when referring to the future: "I will call you when I **arrive** home" (NOT "when I will arrive").'
    ]
  },
  {
    unit_number: 5,
    unit_title: 'Unit 5: Tourism in Ethiopia',
    start_page: 97,
    end_page: 120,
    reading_focus: {
      passage_title: 'Historic and Natural Marvels of Ethiopia',
      core_theme: 'UNESCO World Heritage Sites, ecotourism potential, cultural hospitality, and sustainable tourism economics.',
      comprehension_strategies: [
        'Comparative reading: Compare historical architectural marvels (Lalibela, Gondar) with natural geographical landscapes (Danakil, Bale).',
        'Extracting tourist itineraries and promotional information.'
      ],
      key_takeaways: [
        'Ethiopia houses eleven UNESCO World Heritage Sites encompassing monolithic rock-hewn churches, ancient stelae, and medieval castles.',
        'Ecotourism generates foreign currency and local employment while encouraging the preservation of pristine wildlife habitats.',
        'Hospitality traditions, including the Ethiopian Coffee Ceremony, represent rich intangible cultural heritage.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u5-g1',
        unit_number: 5,
        unit_title: 'Unit 5: Tourism in Ethiopia',
        rule_title: 'Comparative and Superlative Adjectives and Adverbs',
        formula_structure: 'Comparative: Adjective + -er than / more + Adjective + than | Superlative: the + Adjective + -est / the most + Adjective',
        core_summary: 'Use comparatives to contrast two entities. Use superlatives to identify the extreme member of a group of three or more. Follow syllable rules and master irregular forms.',
        detailed_explanation: `1. **One-Syllable Adjectives**:
- Add **-er** / **-est**: *high -> higher -> highest*, *deep -> deeper -> deepest*.
- Single vowel + single consonant: Double the consonant (*hot -> hotter -> hottest*).

2. **Two-Syllable Adjectives ending in -y**:
- Change **-y** to **-i** and add **-er** / **-est**: *scenic -> more scenic / heavy -> heavier -> heaviest*.

3. **Two or More Syllable Adjectives**:
- Use **more / most**: *magnificent -> more magnificent -> most magnificent*, *spectacular -> more spectacular -> most spectacular*.

4. **Irregular Comparatives & Superlatives**:
- *good / well -> better -> best*
- *bad / badly -> worse -> worst*
- *far -> farther / further -> farthest / furthest*
- *little -> less -> least*
- *many / much -> more -> most*

5. **Equatives & Double Comparatives**:
- **As ... as** (Equal quality): *"Lake Tana is as picturesque as Lake Ziway."*
- **Not as ... as** (Unequal quality): *"The lowland heat is not as mild as the highland breeze."*
- **The + comparative, the + comparative** (Parallel increase): *"The higher we climb up Mount Ras Dashen, the cooler the air becomes."*`,
        deep_ai_analysis: 'EUEE questions frequently test double comparatives (*The more you study, the better your score*) and parallel structures. Avoid the double comparative trap (*more higher* or *most best* - these are grammatically incorrect!).',
        usage_rules: [
          'Rule 1: Never combine "-er" with "more" or "-est" with "most" (e.g., say "easier", NOT "more easier").',
          'Rule 2: Always use "than" after a comparative adjective (NOT "then" or "as").',
          'Rule 3: Use "the" before superlative adjectives.'
        ],
        key_examples: [
          {
            sentence: 'The Danakil Depression is one of the lowest and hottest places on Earth.',
            explanation: 'Superlative adjectives "lowest" and "hottest" used to describe global geographic extremes.',
            context: 'Superlative Extremes'
          },
          {
            sentence: 'Lalibela is more visited by international tourists than many other historical sites.',
            explanation: 'Comparative structure using "more + adjective + than" for a multi-syllable adjective.',
            context: 'Comparative Form'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'Ras Dashen is more higher than Mount Guna.',
            correct: 'Ras Dashen is higher than Mount Guna.',
            reason: 'Never use "more" with single-syllable adjectives already taking "-er".'
          },
          {
            incorrect: 'Ethiopia is richer in cultural heritage then many neighbors.',
            correct: 'Ethiopia is richer in cultural heritage than many neighbors.',
            reason: '"Than" is used for comparisons; "then" refers to time sequence.'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Rewrite using "not as ... as":',
            starting_sentence: 'The Erta Ale volcano is more hazardous to explore than Lake Tana.',
            target_pattern: 'Equative comparative (not as ... as)',
            solution: 'Lake Tana is not as hazardous to explore as the Erta Ale volcano.',
            explanation: 'Reversing subject positions while preserving original meaning using the negative equative.'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Monolithic',
        part_of_speech: 'adjective',
        phonetic: '/ˌmɒn.əˈlɪθ.ɪk/',
        definition: 'Formed from a single large block or mass of stone; carved completely out of solid bedrock without joining separate stones.',
        context_sentence: 'The church of Saint George (Bete Giyorgis) in Lalibela is a breathtaking monolithic structure carved downward into volcanic rock.',
        ethiopian_context: 'Hallmark architectural description of the world-famous rock-hewn churches of Lalibela.',
        synonyms: ['Single-block', 'Rock-hewn', 'Solid-stone', 'Monumental'],
        antonyms: ['Fragmented', 'Composite', 'Multi-piece'],
        collocations: ['Monolithic church', 'Monolithic architecture', 'Monolithic pillar']
      },
      {
        word: 'Itinerary',
        part_of_speech: 'noun',
        phonetic: '/aɪˈtɪn.ər.ər.i/',
        definition: 'A planned route, schedule, or list of places to visit on a journey.',
        context_sentence: 'The tour operator designed a ten-day historic route itinerary covering Aksum, Lalibela, Gondar, and Bahir Dar.',
        ethiopian_context: 'Standard term in travel and tourism industry within Ethiopia.',
        synonyms: ['Travel schedule', 'Route map', 'Tour program'],
        antonyms: ['Improvisation', 'Aimless journey'],
        collocations: ['Tour itinerary', 'Travel itinerary', 'Detailed itinerary']
      },
      {
        word: 'Hospitality',
        part_of_speech: 'noun',
        phonetic: '/ˌhɒs.pɪˈtæl.ə.ti/',
        definition: 'The friendly, generous, and warm reception and entertainment of guests, visitors, or strangers.',
        context_sentence: 'Foreign travelers consistently praise the legendary warmth and hospitality of Ethiopian families.',
        ethiopian_context: 'A deeply cherished cultural virtue exemplified by welcoming guests with fresh coffee and traditional food.',
        synonyms: ['Warmth', 'Welcoming spirit', 'Graciousness', 'Cordiality'],
        antonyms: ['Hostility', 'Unfriendliness', 'Coldness'],
        collocations: ['Legendary hospitality', 'Warm hospitality', 'Hospitality industry'],
        word_family: { adjective: 'Hospitable', noun: 'Hospitality' }
      }
    ],
    speaking_listening_focus: {
      functions: ['Recommending travel destinations', 'Comparing tourism sites', 'Describing cultural experiences'],
      key_expressions: [
        '"If you are interested in medieval castles, I strongly recommend visiting the Royal Enclosure in Gondar."',
        '"Mount Ras Dashen is considerably more challenging to hike than Mount Entoto."',
        '"Would you prefer trekking through alpine wilderness or exploring ancient subterranean architecture?"'
      ],
      sample_dialogue: [
        { speaker: 'Tour Guide', text: 'Welcome to Lalibela! Have you ever seen churches carved out of solid mountain rock like this before?' },
        { speaker: 'Visitor', text: 'Never! It is far more magnificent in person than in photographs. How long did it take to chisel these masterpieces?' }
      ]
    },
    writing_masterclass: {
      genre: 'Informational Travel Brochure',
      structure_blueprint: [
        '1. Catchy Headline: Capture tourists\' imagination with evocative language.',
        '2. Geographic Highlights: List top historical, natural, and culinary attractions with comparative praise.',
        '3. Practical Tips: Mention best seasons to travel, clothing recommendations, and cultural etiquette.',
        '4. Concluding Call to Action: Provide booking or contact encouragement.'
      ],
      sample_model: 'DISCOVER ETHIOPIA: THE CRADLE OF MANKIND & JEWEL OF EAST AFRICA\n\nEmbark on an unforgettable adventure through a land of majestic highlands, ancient civilizations, and untamed natural beauty. From the subterranean rock-hewn wonders of Lalibela to the dramatic peaks of the Simien Mountains National Park, Ethiopia offers the most diverse tourism experience on the continent.\n\nHighlights of Your Historic Route:\n- Aksum: Stand in awe before towering granite stelae dating back over two millennia.\n- Gondar: Explore fairy-tale castles of the 17th-century emperors.\n- Lake Tana: Cruise peaceful waters to discover centuries-old island monasteries.\n\nExperience genuine Ethiopian hospitality, savor world-renowned Arabica coffee ceremonies, and witness rare wildlife found nowhere else on Earth. Book your journey today and walk where history lives!',
      writing_checklist: [
        'Did you employ vivid sensory adjectives (breathtaking, ancient, dramatic)?',
        'Are comparative and superlative structures used correctly?',
        'Is the formatting clear with headings, bullet points, and an inviting tone?'
      ]
    },
    euee_exam_tips: [
      'Look out for "the ... the ..." comparative structures: "The **older** the manuscript, the **more valuable** it is."',
      'Remember that "elder/eldest" is used only for family relationships ("my elder brother"), while "older/oldest" is used for all general things and people.'
    ]
  },
  {
    unit_number: 6,
    unit_title: 'Unit 6: Community Services',
    start_page: 121,
    end_page: 144,
    reading_focus: {
      passage_title: 'Civic Engagement, Iddir, and Community Self-Help Organizations',
      core_theme: 'Traditional self-help institutions (Iddir, Mahber, Equb), volunteerism, civic duties, and communal solidarity.',
      comprehension_strategies: [
        'Analyzing organizational structures of community associations.',
        'Evaluating the social safety net functions of civil society in Ethiopia.'
      ],
      key_takeaways: [
        'Iddir serves as an indigenous socio-economic safety net providing mutual insurance, grief support, and community coordination during family bereavements.',
        'Youth volunteerism cleans public areas, tutors younger peers, and plants trees in municipal green legacy campaigns.',
        'Active civic engagement strengthens democracy and social harmony.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u6-g1',
        unit_number: 6,
        unit_title: 'Unit 6: Community Services',
        rule_title: 'The Passive Voice (Present Simple and Past Simple)',
        formula_structure: 'Present Simple Passive: Subject + am/is/are + Past Participle (V3) | Past Simple Passive: Subject + was/were + Past Participle (V3)',
        core_summary: 'Use the Passive Voice when the action or the receiver of the action is more important than the doer (agent), when the agent is unknown, obvious, or when describing formal processes and institutional actions.',
        detailed_explanation: `1. **When to Use the Passive Voice**:
- **Agent is Unknown**: *"The community hall was constructed in 1985 (we do not know the exact builders)."*
- **Agent is Obvious**: *"The criminal was arrested yesterday (obviously by the police)."*
- **Action/Result is the Main Focus**: *"Over ten thousand indigenous saplings are planted in our kebele every July."*
- **Formal, Academic & Scientific Reports**: Maintains objective neutrality.

2. **Forming Passive Voice**:
- **Active**: Subject + Verb + Object -> **Passive**: Object + [Form of BE] + [Past Participle V3] (+ by Subject).
- **Simple Present Active**: *"Volunteers clean the public park weekly."*
  -> **Simple Present Passive**: *"The public park **is cleaned** weekly by volunteers."*
- **Simple Past Active**: *"The village council built a new maternity clinic."*
  -> **Simple Past Passive**: *"A new maternity clinic **was built** by the village council."*

3. **Passive with Two Objects (Direct & Indirect)**:
- *Active*: *"The elder gave Almaz a certificate of appreciation."*
- *Passive 1 (Focus on person)*: *"Almaz **was given** a certificate of appreciation by the elder."*
- *Passive 2 (Focus on item)*: *"A certificate of appreciation **was given to** Almaz by the elder."*`,
        deep_ai_analysis: 'EUEE questions test passive transformation with irregular past participles (break -> broken, choose -> chosen, give -> given, write -> written). Pay special attention to subject-verb agreement with the NEW subject in passive voice (e.g. "Three clinics **were** built", NOT "was built").',
        usage_rules: [
          'Rule 1: Always check the number (singular vs plural) of the new subject to choose between "is/are" or "was/were".',
          'Rule 2: The main verb must ALWAYS be in its Past Participle (V3) form.',
          'Rule 3: Only include "by + agent" if the doer adds vital, meaningful context.'
        ],
        key_examples: [
          {
            sentence: 'Iddir funds are managed transparently by an elected committee of trusted elders.',
            explanation: 'Present Simple Passive highlighting institutional procedure and communal transparency.',
            context: 'Institutional Procedure'
          },
          {
            sentence: 'The communal water well was repaired yesterday after the heavy storm.',
            explanation: 'Past Simple Passive focusing on the completed maintenance of the public amenity.',
            context: 'Completed Action'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'Ten thousand trees was planted during the green legacy campaign.',
            correct: 'Ten thousand trees were planted during the green legacy campaign.',
            reason: '"Ten thousand trees" is plural and requires the plural auxiliary "were".'
          },
          {
            incorrect: 'The school library is clean by students every afternoon.',
            correct: 'The school library is cleaned by students every afternoon.',
            reason: 'Passive voice requires the Past Participle "cleaned", not the base verb "clean".'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Convert from active to passive voice:',
            starting_sentence: 'The Red Cross volunteers distributed relief supplies to the flooded village.',
            target_pattern: 'Past Simple Passive (was/were + V3)',
            solution: 'Relief supplies were distributed to the flooded village by the Red Cross volunteers.',
            explanation: 'The plural object "relief supplies" becomes the new subject with "were distributed".'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Iddir',
        part_of_speech: 'noun (indigenous cultural loanword)',
        phonetic: '/ɪˈdɪər/',
        definition: 'A traditional Ethiopian indigenous voluntary self-help association that provides financial aid, funeral assistance, and emotional solidarity to members during times of family bereavement.',
        context_sentence: 'Every household in the neighborhood pays monthly dues to the local Iddir to ensure communal security and funeral support.',
        ethiopian_context: 'Pinnacle of Ethiopian civic solidarity and mutual insurance.',
        synonyms: ['Burial society', 'Mutual aid association', 'Community solidarity fund'],
        antonyms: ['Commercial insurer', 'Individualism'],
        collocations: ['Iddir membership', 'Join an Iddir', 'Iddir executive committee']
      },
      {
        word: 'Altruism',
        part_of_speech: 'noun',
        phonetic: '/ˈæl.tru.ɪ.zəm/',
        definition: 'The selfless concern for the well-being and happiness of other people without seeking personal reward or profit.',
        context_sentence: 'Volunteering to teach literacy to illiterate adults in the community is a remarkable demonstration of pure altruism.',
        ethiopian_context: 'Core ethical value in Ethiopian civics and community welfare education.',
        synonyms: ['Selflessness', 'Philanthropy', 'Generosity', 'Charity'],
        antonyms: ['Selfishness', 'Egoism', 'Greed'],
        collocations: ['Act of altruism', 'Pure altruism', 'Inspire altruism'],
        word_family: { adjective: 'Altruistic', adverb: 'Altruistically', noun: 'Altruist' }
      },
      {
        word: 'Grassroots',
        part_of_speech: 'adjective / noun',
        phonetic: '/ˈɡrɑːs.ruːts/',
        definition: 'Originating from ordinary local people in a community rather than from high-level government officials or politicians.',
        context_sentence: 'The tree-planting initiative started as a grassroots movement among high school environmental clubs before gaining national support.',
        ethiopian_context: 'Describes local community-driven development across Ethiopian woredas and kebeles.',
        synonyms: ['Community-based', 'Local', 'Bottom-up', 'Popular'],
        antonyms: ['Top-down', 'Government-imposed', 'Authoritarian'],
        collocations: ['Grassroots movement', 'Grassroots organization', 'Grassroots democracy']
      }
    ],
    speaking_listening_focus: {
      functions: ['Expressing gratitude formally', 'Delivering short civic speeches', 'Conducting meeting discussions'],
      key_expressions: [
        '"On behalf of our school community, I would like to express our heartfelt gratitude to the volunteers."',
        '"Our neighborhood thrives when each citizen takes responsibility for communal cleanliness."',
        '"Let us establish an agenda for this weekend\'s community cleanup campaign."'
      ],
      sample_dialogue: [
        { speaker: 'Kebele Leader', text: 'Thank you all for attending this emergency meeting. How can the youth association assist our elderly neighbors this winter?' },
        { speaker: 'Youth Representative', text: 'We have organized twenty volunteers who will repair leaking roofs and deliver firewood every Saturday.' }
      ]
    },
    writing_masterclass: {
      genre: 'Formal Letter of Gratitude (to Community Volunteers)',
      structure_blueprint: [
        '1. Sender\'s Address & Date in upper corner.',
        '2. Recipient\'s Designation & Organization Address.',
        '3. Formal Salutation: *Dear Mr./Ms. [Last Name]*, or *Dear Committee Members*,',
        '4. Opening: State clearly the purpose of writing (formal gratitude).',
        '5. Body: Detail specific contributions, impact on community welfare.',
        '6. Closing & Formal Sign-off: *Yours sincerely / Respectfully yours* followed by signature and full name.'
      ],
      sample_model: 'Hawassa Secondary School\nP.O. Box 450\nHawassa, Sidama Region\nOctober 14, 2024\n\nTo: The Executive Committee\nUnity Youth Volunteer Association\nHawassa\n\nDear Committee Members,\n\nSubject: Letter of Commendation and Gratitude for Library Refurbishment\n\nOn behalf of the students, faculty, and administrative staff of Hawassa Secondary School, I am writing to express our sincere appreciation for the exemplary community service rendered by your association during the recent semester break.\n\nYour team of forty dedicated volunteers successfully repaired over two hundred damaged desks, repainted the reading hall, and cataloged five hundred donated science textbooks. Because of your selfless altruism and proactive civic leadership, more than one thousand secondary students now enjoy a safe, welcoming, and productive learning environment.\n\nYour commitment to community empowerment serves as an inspiring model of grassroots citizenship. We look forward to continuing our fruitful partnership on future community initiatives.\n\nYours sincerely,\n\n[Signature]\n\nTesfaye Bekele\nSchool Principal',
      writing_checklist: [
        'Did you format the addresses, date, and formal salutation correctly?',
        'Did you use passive constructions where appropriate to highlight the work accomplished?',
        'Is the tone respectful, professional, and grammatically impeccable?'
      ]
    },
    euee_exam_tips: [
      'In passive voice questions, check whether the sentence contains a stative or intransitive verb that CANNOT be made passive (e.g., *die, happen, arrive, occur, seem*). These verbs never take passive forms: "An accident was happened" is WRONG; say "An accident happened".'
    ]
  },
  {
    unit_number: 7,
    unit_title: 'Unit 7: Traditional Games',
    start_page: 145,
    end_page: 168,
    reading_focus: {
      passage_title: 'Indigenous Ethiopian Sports: Genna, Gugs, and Gebeta',
      core_theme: 'Cultural sports, strategic games, horse-riding tournaments, and sportsmanship values.',
      comprehension_strategies: [
        'Sequencing technical procedures in sports rulebooks.',
        'Analyzing cultural symbolism embedded in holiday sporting traditions.'
      ],
      key_takeaways: [
        'Genna is a traditional field hockey game played during Christmas festivities using curved wooden sticks (*Gennam*) and a hand-crafted wooden ball (*Rur*).',
        'Gebeta (Mancala) is a complex mathematical counting and strategic board game played across Ethiopian highlands and lowlands.',
        'Gugs is a dynamic equestrian tournament demonstrating agility, precision javelin-throwing, and horsemanship.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u7-g1',
        unit_number: 7,
        unit_title: 'Unit 7: Traditional Games',
        rule_title: 'Zero and First Conditionals',
        formula_structure: 'Zero Conditional: If/When + Present Simple, Present Simple | First Conditional: If + Present Simple, will/can/may + V1',
        core_summary: 'Zero Conditional describes universal scientific facts, general rules, and automatic consequences. First Conditional describes realistic future possibilities and their probable outcomes.',
        detailed_explanation: `1. **Zero Conditional (Universal Truths & Game Rules)**:
- **Structure**: *If / When + Present Simple, Present Simple*
- **Usage**: Expresses eternal scientific facts, universal truths, or fixed rules in a sport.
  *Example*: "In Gebeta, if a player captures the final seed in an empty pit, they win that row."
  *Example*: "If water reaches 100 degrees Celsius, it turns into steam."

2. **First Conditional (Real Future Possibilities)**:
- **Structure**: *If + Present Simple, will + Bare Infinitive (V1)*
- **Usage**: Talks about a real, possible condition in the present or future, and its likely result.
  *Example*: "If our school team wins the regional Genna tournament, they will receive a gold trophy."
  *Example*: "If you practice horse-riding daily, you will master the sport of Gugs."

3. **Unless (= If ... not)**:
- **Structure**: *Unless + Present Simple, will + V1*
- *Example*: "Unless the referee blows the whistle, the players continue running." (= If the referee does not blow the whistle...)

4. **Alternative Modal Verbs in First Conditional**:
- You can replace *will* with *can, may, might, or should* to express varying degrees of possibility, ability, or advice.
  *Example*: "If the weather is rainy, the equestrian tournament **might** be postponed."`,
        deep_ai_analysis: 'EUEE examiners frequently test the rule that you NEVER put "will" inside the "if" clause (e.g. *If it will rain...* is an absolute grammatical error!). They also test **Unless**, which already contains a negative meaning, so it must not be followed by another negative verb (*Unless you don\'t study* is WRONG; say *Unless you study*).',
        usage_rules: [
          'Rule 1: Never use "will" in the If-clause in First Conditional sentences (say "If you come", NOT "If you will come").',
          'Rule 2: "Unless" means "If not", so do not use double negatives with unless.',
          'Rule 3: When the If-clause comes first, use a comma; if the main clause comes first, no comma is needed.'
        ],
        key_examples: [
          {
            sentence: 'If a Genna stick breaks during the match, the player replaces it immediately.',
            explanation: 'Zero conditional expressing an official, invariant game rule.',
            context: 'Official Game Rule'
          },
          {
            sentence: 'If you train with determination, you will qualify for the national equestrian squad.',
            explanation: 'First conditional expressing a realistic future possibility dependent on present effort.',
            context: 'Future Real Condition'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'If our team will score one more goal, we will win the championship.',
            correct: 'If our team scores one more goal, we will win the championship.',
            reason: 'The condition clause following "if" must use the Present Simple, not "will".'
          },
          {
            incorrect: 'Unless you don\'t follow the referee\'s instructions, you will receive a penalty card.',
            correct: 'Unless you follow the referee\'s instructions, you will receive a penalty card.',
            reason: '"Unless" already means "if you do not"; adding another negative is a double-negative error.'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Rewrite the sentence using "Unless":',
            starting_sentence: 'If you do not wear protective riding gear, you cannot participate in Gugs.',
            target_pattern: 'Unless + Affirmative Verb',
            solution: 'Unless you wear protective riding gear, you cannot participate in Gugs.',
            explanation: '"Unless you wear" replaces "If you do not wear" smoothly.'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Sportsmanship',
        part_of_speech: 'noun',
        phonetic: '/ˈspɔːts.mən.ʃɪp/',
        definition: 'Fair, generous, and polite behavior, respect for opponents, and graceful acceptance of both victory and defeat in athletic games.',
        context_sentence: 'True sportsmanship was exhibited when the winning Genna captain embraced the defeated opponents after the tense final match.',
        ethiopian_context: 'A central moral theme reinforced in traditional Ethiopian competitive games.',
        synonyms: ['Fair play', 'Integrity', 'Respect', 'Chivalry'],
        antonyms: ['Cheating', 'Unsportsmanlike conduct', 'Hostility'],
        collocations: ['Display sportsmanship', 'Spirit of sportsmanship', 'Exemplary sportsmanship']
      },
      {
        word: 'Gebeta',
        part_of_speech: 'noun (indigenous cultural loanword)',
        phonetic: '/ɡɛˈbɛ.tɑː/',
        definition: 'A traditional Ethiopian strategic count-and-capture board game played with seeds or pebbles placed into rows of carved wooden or stone pits.',
        context_sentence: 'Elders gathered in the shade to play Gebeta, demonstrating lightning-fast mental arithmetic and tactical anticipation.',
        ethiopian_context: 'Widely recognized as one of the oldest calculating board games in African history.',
        synonyms: ['Mancala', 'Pebble game', 'Count-and-capture game'],
        antonyms: ['Modern video game'],
        collocations: ['Play Gebeta', 'Gebeta board', 'Gebeta tournament']
      },
      {
        word: 'Equestrian',
        part_of_speech: 'adjective',
        phonetic: '/ɪˈkwes.tri.ən/',
        definition: 'Relating to horse riding, horsemanship, or tournaments involving mounted riders.',
        context_sentence: 'During major national holidays, skilled horsemen perform breathtaking equestrian maneuvers during the Gugs tournaments.',
        ethiopian_context: 'Describes traditional Oromo and Amhara horse culture celebrated across central and northern Ethiopia.',
        synonyms: ['Horseback', 'Mounted', 'Horsemanship'],
        antonyms: ['Pedestrian', 'Foot-based'],
        collocations: ['Equestrian tournament', 'Equestrian skill', 'Equestrian heritage']
      }
    ],
    speaking_listening_focus: {
      functions: ['Explaining game rules systematically', 'Clarifying misunderstandings', 'Giving and receiving feedback on athletic performance'],
      key_expressions: [
        '"To begin the game of Gebeta, each player deposits four seeds into each pit."',
        '"What happens if a player accidentally steps outside the boundary line?"',
        '"In Gugs, riders are awarded points for both throwing accuracy and defensive dodging."'
      ],
      sample_dialogue: [
        { speaker: 'Dawit', text: 'How do you determine the winner in traditional Genna, Yohannes?' },
        { speaker: 'Yohannes', text: 'If a team strikes the wooden ball through the opposing goalposts before sunset, they score a goal. The team with the highest tally wins.' }
      ]
    },
    writing_masterclass: {
      genre: 'Instructional How-To Guide / Game Rulebook',
      structure_blueprint: [
        '1. Title & Objective: State the game\'s name, required equipment, and victory conditions.',
        '2. Setup Instructions: Explain how players position themselves and arrange equipment.',
        '3. Sequential Steps: Use numbered steps and imperative verbs (*Step 1: Divide into two teams... Step 2: Toss a coin...*).',
        '4. Conditional Rules & Penalties: Use Zero Conditionals to define fouls and boundary violations.'
      ],
      sample_model: 'HOW TO PLAY TRADITIONAL ETHIOPIAN GEBETA (MANCALA)\n\nObjective:\nTo capture more seeds than your opponent through mathematical calculation, sequential sowing, and strategic planning.\n\nEquipment Needed:\n- One carved wooden Gebeta board featuring two rows of six pits and two larger bank pits at either end.\n- 48 smooth pebbles, seeds, or glass beads.\n\nGame Rules & Step-by-Step Instructions:\n1. Initial Setup: Place exactly four seeds into each of the twelve small pits.\n2. First Move: Player 1 picks up all four seeds from any pit on their side of the board and drops them one by one in a counterclockwise direction into subsequent pits.\n3. Sowing Seeds: If the final seed lands in an occupied pit, the player picks up all seeds from that pit and continues sowing.\n4. Capturing Seeds: If your last seed lands in an empty pit on your own side, you capture that seed plus all seeds in the directly opposite pit on your opponent\'s side.\n5. Game Conclusion: When one player no longer has seeds on their side, the game ends. The player with the highest number of captured seeds in their bank pit wins the match.',
      writing_checklist: [
        'Did you use clear imperative verbs for each procedural step?',
        'Are conditional rules formulated accurately with Zero Conditional syntax?',
        'Is the formatting numbered and intuitive for new learners?'
      ]
    },
    euee_exam_tips: [
      'Be alert for conditional clauses inverted without "if": **Had I known** (= If I had known), **Should you need help** (= If you need help), **Were he to come** (= If he were to come).',
      'Watch out for punctuation: Put a comma when the "if" clause comes first.'
    ]
  },
  {
    unit_number: 8,
    unit_title: 'Unit 8: Healthy Living',
    start_page: 169,
    end_page: 192,
    reading_focus: {
      passage_title: 'Dietary Balance, Hydration, and Daily Exercise',
      core_theme: 'Human nutrition, macronutrients, disease prevention, personal hygiene, and mental wellness.',
      comprehension_strategies: [
        'Classifying information into nutritional and physiological categories.',
        'Identifying authoritative medical recommendations versus popular dietary myths.'
      ],
      key_takeaways: [
        'A balanced diet incorporates carbohydrates, proteins, healthy fats, vitamins, minerals, fiber, and clean water.',
        'Teff, an indigenous Ethiopian super-grain, is naturally gluten-free and packed with essential minerals including iron, calcium, and amino acids.',
        'Regular aerobic exercise and adequate sleep strengthen immune defenses and reduce cardiovascular disease risk.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u8-g1',
        unit_number: 8,
        unit_title: 'Unit 8: Healthy Living',
        rule_title: 'Defining and Non-Defining Relative Clauses',
        formula_structure: 'Relative Pronouns: Who (people), Whom (object people), Whose (possession), Which/That (things), Where (places), When (times)',
        core_summary: 'Defining relative clauses provide essential information needed to identify the noun (no commas). Non-defining relative clauses provide extra, non-essential background information (enclosed in commas).',
        detailed_explanation: `1. **Defining Relative Clauses (Essential Information)**:
- Necessary to identify which specific person or thing is being discussed. Without this clause, the sentence is incomplete or ambiguous.
- **NO commas** are used.
- *That* can replace *who* or *which*.
  *Example*: "Students **who exercise regularly** experience lower stress levels during exam periods." (Specifies which students).
  *Example*: "The food **that contains the highest amount of iron** is teff."

2. **Non-Defining Relative Clauses (Extra Information)**:
- Gives additional, non-vital details about an already clearly identified person, place, or thing.
- **MUST be separated by commas**.
- *That* can NEVER be used in non-defining clauses; use *who* or *which*.
  *Example*: "Teff, **which is indigenous to Ethiopia**, is recognized globally as a nutritious super-grain."
  *Example*: "Dr. Aster, **who leads the regional public health clinic**, gave an inspiring lecture on hygiene."

3. **Relative Pronouns Reference Guide**:
- **Who**: Subject pronoun for people (*"The doctor who treated me was very kind."*)
- **Whom**: Object pronoun for people in formal register (*"The nutritionist whom we consulted recommended a balanced diet."*)
- **Whose**: Shows possession for people or things (*"The athlete whose ankle was sprained received immediate therapy."*)
- **Which**: For animals and inanimate objects in both defining and non-defining clauses.
- **That**: For people, animals, and things, strictly in DEFINING clauses only.
- **Where**: Refers to a physical place (*"The hospital where she works is modern."*)
- **When**: Refers to a specific time (*"The morning is the time when metabolism is highest."*)

4. **Omitting the Relative Pronoun**:
- You can omit *who/which/that* in defining clauses ONLY when it functions as the **object** of the relative clause:
  *Example*: "The vitamins [that] you consume daily protect your immune system." (Vitamins = object; "you" = subject).`,
        deep_ai_analysis: 'EUEE examiners consistently test two core traps: 1) Using "that" inside commas (NEVER use "that" in non-defining clauses: *My car, that is red,...* is WRONG; must be *which is red*). 2) Choosing between **whose** (possession) and **who\'s** (contraction of who is / who has).',
        usage_rules: [
          'Rule 1: Never use commas with defining relative clauses.',
          'Rule 2: Always enclose non-defining relative clauses with commas.',
          'Rule 3: "That" is forbidden in non-defining clauses; use "which" for things and "who" for people.',
          'Rule 4: Use "whose" for possession (e.g., "The boy whose mother is a nurse").'
        ],
        key_examples: [
          {
            sentence: 'The vitamins which protect our body against infections are found abundantly in fresh vegetables.',
            explanation: 'Defining relative clause specifying the exact category of vitamins without commas.',
            context: 'Essential Defining Clause'
          },
          {
            sentence: 'Pure mountain spring water, which contains essential minerals, should be boiled if unsealed.',
            explanation: 'Non-defining relative clause providing supplemental descriptive detail enclosed in commas.',
            context: 'Extra Detail Clause'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'Dr. Belay, that graduated from Addis Ababa University, is our family physician.',
            correct: 'Dr. Belay, who graduated from Addis Ababa University, is our family physician.',
            reason: '"That" can never be used in a non-defining relative clause enclosed by commas; use "who".'
          },
          {
            incorrect: 'I met a student who\'s father is a public health officer.',
            correct: 'I met a student whose father is a public health officer.',
            reason: '"Whose" shows possession; "who\'s" is a contraction for "who is".'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Combine the two sentences into one using a non-defining relative clause:',
            starting_sentence: 'Mount Entoto provides fresh eucalyptus air. It is located directly north of Addis Ababa.',
            target_pattern: 'Non-defining relative clause with "which" and commas',
            solution: 'Mount Entoto, which is located directly north of Addis Ababa, provides fresh eucalyptus air.',
            explanation: 'The geographic location is supplemental information requiring commas and "which".'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Macronutrient',
        part_of_speech: 'noun',
        phonetic: '/ˌmæk.rəʊˈnjuː.tri.ənt/',
        definition: 'A type of food required in large amounts in the diet, such as proteins, carbohydrates, and fats.',
        context_sentence: 'Athletes must balance all three macronutrients to maintain stamina, muscular repair, and cognitive sharpness.',
        ethiopian_context: 'Pivotal scientific concept in secondary school biology and home economics curricula.',
        synonyms: ['Essential nutrient', 'Dietary component'],
        antonyms: ['Micronutrient (vitamins/minerals)'],
        collocations: ['Macronutrient intake', 'Balance macronutrients', 'Essential macronutrient']
      },
      {
        word: 'Hydration',
        part_of_speech: 'noun',
        phonetic: '/haɪˈdreɪ.ʃən/',
        definition: 'The process of providing or absorbing adequate water to maintain physiological fluid balance.',
        context_sentence: 'Proper hydration improves kidney function, regulates body temperature, and prevents mental fatigue.',
        ethiopian_context: 'Vital health topic emphasized in both rural and urban hygiene programs.',
        synonyms: ['Fluid intake', 'Water balance', 'Rehydration'],
        antonyms: ['Dehydration', 'Aridity'],
        collocations: ['Adequate hydration', 'Maintain hydration', 'Optimal hydration'],
        word_family: { verb: 'Hydrate', noun: 'Hydration', adjective: 'Hydrated' }
      },
      {
        word: 'Cardiovascular',
        part_of_speech: 'adjective',
        phonetic: '/ˌkɑː.di.əʊˈvæs.kjə.lər/',
        definition: 'Relating to the heart and blood vessels.',
        context_sentence: 'Thirty minutes of brisk walking or jogging every day significantly enhances cardiovascular endurance.',
        ethiopian_context: 'Key terminology for understanding non-communicable health risks.',
        synonyms: ['Circulatory', 'Cardiac', 'Heart-related'],
        antonyms: ['Respiratory (lungs)', 'Digestive'],
        collocations: ['Cardiovascular disease', 'Cardiovascular fitness', 'Cardiovascular system']
      }
    ],
    speaking_listening_focus: {
      functions: ['Interviewing peers about daily health habits', 'Giving health and dietary advice', 'Expressing polite recommendations'],
      key_expressions: [
        '"How many glasses of clean water do you drink on a typical school day?"',
        '"If you feel lethargic in the afternoon, you might benefit from eating more whole grains like teff."',
        '"Regular physical activity is vital not only for bodily health but also for psychological well-being."'
      ],
      sample_dialogue: [
        { speaker: 'School Nurse', text: 'Good morning, Aster! What changes have you made to improve your personal wellness lately?' },
        { speaker: 'Aster', text: 'I have replaced processed sugary snacks with fresh fruit, and I walk two kilometers to school every morning.' }
      ]
    },
    writing_masterclass: {
      genre: 'Health Advisory Article for School Newsletter',
      structure_blueprint: [
        '1. Engaging Headline: Hook teenage readers on health and vitality.',
        '2. Introduction: Address common unhealthy lifestyle habits among secondary students.',
        '3. Body Sections with Subheadings: Cover Dietary Nutrition, Physical Activity, and Sleep Hygiene.',
        '4. Conclusion & Actionable Challenge: Encourage immediate lifestyle commitments.'
      ],
      sample_model: 'FUELING YOUR FUTURE: A HIGH SCHOOL GUIDE TO OPTIMAL WELLNESS\n\nBy Aster Mengistu, Grade 9 Health Club\n\nBetween demanding academic schedules and after-school responsibilities, secondary students often overlook the foundation of academic success: a healthy mind and body. Incorporating practical wellness routines into your daily schedule guarantees higher energy levels, stronger immunity, and peak concentration in the classroom.\n\n1. Champion Nutritional Balance with Indigenous Grains\nInstead of reaching for nutrient-poor sugary snacks, fuel your brain with Ethiopia\'s nutritional superpower: teff. Packed with iron, calcium, and complex carbohydrates, injera provides sustained energy without mid-day crashes.\n\n2. Maintain Daily Hydration\nDehydration is the primary hidden cause of student fatigue and headaches. Strive to drink at least two liters of clean, boiled or treated water daily.\n\n3. Move Every Day\nEngaging in thirty minutes of vigorous physical activity—whether playing football, jogging, or brisk walking—strengthens your cardiovascular system and alleviates examination stress.\n\nTake charge of your health today: small daily choices create lifelong vitality!',
      writing_checklist: [
        'Did you use defining and non-defining relative clauses smoothly?',
        'Are medical and nutritional terms spelled and applied accurately?',
        'Is the tone motivational and practical for peer audiences?'
      ]
    },
    euee_exam_tips: [
      'Remember: If the relative pronoun is followed immediately by a verb, it is a SUBJECT pronoun and CANNOT be omitted (*The doctor who treated me* -> "who" cannot be omitted).',
      'If the relative pronoun is followed by a subject + verb, it is an OBJECT pronoun and can be omitted in defining clauses (*The meal [that] we ate*).'
    ]
  },
  {
    unit_number: 9,
    unit_title: 'Unit 9: Climate and Environment',
    start_page: 193,
    end_page: 216,
    reading_focus: {
      passage_title: 'Weather Cycles, Droughts, and Climate Resilience in the Horn of Africa',
      core_theme: 'Climatology, global warming, afforestation, greenhouse gas emissions, and watershed rehabilitation.',
      comprehension_strategies: [
        'Cause-and-effect mapping: Graph relationships between deforestation, soil erosion, and climate volatility.',
        'Interpreting meteorological charts and precipitation data.'
      ],
      key_takeaways: [
        'Climate change intensifies drought cycles and irregular rainfall patterns across the Horn of Africa.',
        'Deforestation accelerates topsoil erosion, diminishing agricultural productivity and silting river basins.',
        'National afforestation campaigns (such as the Green Legacy Initiative) restore degraded watersheds and capture atmospheric carbon.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u9-g1',
        unit_number: 9,
        unit_title: 'Unit 9: Climate and Environment',
        rule_title: 'Cause and Effect Conjunctions',
        formula_structure: 'Cause Clause: because, since, as, due to the fact that | Cause Phrase: because of, due to, owing to, as a result of + Noun Phrase | Effect Clause: therefore, consequently, as a result, hence, thus',
        core_summary: 'Express the logical relationship between reasons (causes) and outcomes (effects). Master the grammatical difference between conjunctions that connect full clauses versus prepositions that connect noun phrases.',
        detailed_explanation: `1. **Conjunctions Introducing Causes (Followed by Subject + Verb)**:
- **Because / Since / As**:
  *Example*: *"Farmers planted drought-resistant sorghum **because** rainfall was predicted to be scarce."*
  *Example*: *"**Since** the mountain slopes were heavily forested, soil erosion remained minimal."*

2. **Prepositions Introducing Causes (Followed by Noun Phrase or Gerund V-ing)**:
- **Because of / Due to / Owing to / As a result of**:
  *Formula*: [Preposition] + [Noun / Noun Phrase / Pronoun]
  *Example*: *"Crops failed **due to** severe prolonged drought."* (Drought = noun).
  *Example*: *"**Because of** illegal logging, the hillside lost its fertile topsoil."*
  *Note*: *"Due to the fact that"* is followed by a full clause (*Subject + Verb*).

3. **Transition Adverbs Introducing Effects (Followed by Result Clause)**:
- **Therefore / Consequently / As a result / Hence / Thus**:
  *Structure*: [Sentence 1]. + **Therefore**, + [Sentence 2]. OR [Sentence 1]; + **therefore**, + [Sentence 2].
  *Example*: *"The community planted five million indigenous seedlings; **consequently**, the local water table rose significantly."*
  *Example*: *"Global carbon emissions continue to rise. **Therefore**, worldwide temperatures are increasing."*`,
        deep_ai_analysis: 'EUEE exams heavily test the distinction between **Because** (requires a full sentence with subject + verb) vs. **Because of / Due to** (requires a noun phrase). Trap: *Because of it was raining* is WRONG; must be *Because it was raining* OR *Because of the rain*.',
        usage_rules: [
          'Rule 1: "Because", "since", and "as" are conjunctions followed by a full clause (Subject + Verb).',
          'Rule 2: "Because of", "due to", "owing to", and "as a result of" are prepositions followed by a noun phrase or V-ing.',
          'Rule 3: Transitions like "therefore" and "consequently" require proper punctuation (period before, comma after, or semicolon before).'
        ],
        key_examples: [
          {
            sentence: 'Owing to rapid deforestation in the upper highlands, flash floods occurred in the lower valley.',
            explanation: '"Owing to" connects the cause as a noun phrase ("rapid deforestation...") to the main effect.',
            context: 'Prepositional Cause Link'
          },
          {
            sentence: 'The region experienced below-average precipitation; as a result, the reservoir levels dropped.',
            explanation: '"As a result" serves as a transition adverb connecting two independent sentences with a semicolon.',
            context: 'Sentence Transition'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'Due to it was raining heavily, our outdoor ecology trip was cancelled.',
            correct: 'Because it was raining heavily, our outdoor ecology trip was cancelled.',
            reason: '"Due to" must be followed by a noun phrase ("Due to heavy rain"), not a full clause with a verb.'
          },
          {
            incorrect: 'Soil erosion is severe, therefore farmers use terracing.',
            correct: 'Soil erosion is severe; therefore, farmers use terracing.',
            reason: '"Therefore" cannot join two independent clauses with just a comma (comma splice error); use a semicolon or period.'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Rewrite using "Because of" instead of "Because":',
            starting_sentence: 'Because the temperatures rose drastically, the alpine glacier receded.',
            target_pattern: 'Because of + Noun Phrase',
            solution: 'Because of the drastic rise in temperatures, the alpine glacier receded.',
            explanation: 'The clause "temperatures rose drastically" is converted into the noun phrase "the drastic rise in temperatures".'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Afforestation',
        part_of_speech: 'noun',
        phonetic: '/æfˌɒr.ɪˈsteɪ.ʃən/',
        definition: 'The act or process of establishing a new forest on land that has not previously been forested or has been bare for a long period.',
        context_sentence: 'Large-scale afforestation on bare mountain ridges revitalizes underground springs and prevents topsoil loss.',
        ethiopian_context: 'Pillar of Ethiopia\'s national Green Legacy Initiative.',
        synonyms: ['Tree planting', 'Forest establishment', 'Reforestation'],
        antonyms: ['Deforestation', 'Logging', 'Clear-cutting'],
        collocations: ['Afforestation project', 'Massive afforestation', 'Afforestation policy'],
        word_family: { verb: 'Afforest', noun: 'Afforestation' }
      },
      {
        word: 'Desertification',
        part_of_speech: 'noun',
        phonetic: '/dɪˌzɜː.tɪ.fɪˈkeɪ.ʃən/',
        definition: 'The process by which fertile land becomes desert, typically as a result of drought, deforestation, or inappropriate agriculture.',
        context_sentence: 'Constructing stone bunds and planting acacia trees halts the advance of desertification in arid lowlands.',
        ethiopian_context: 'Major environmental concern across the Sahel and Horn of Africa.',
        synonyms: ['Land degradation', 'Aridification'],
        antonyms: ['Land reclamation', 'Re-greening'],
        collocations: ['Combat desertification', 'Risk of desertification', 'Spreading desertification'],
        word_family: { verb: 'Desertify', noun: 'Desertification' }
      },
      {
        word: 'Greenhouse Gas',
        part_of_speech: 'noun',
        phonetic: '/ˈɡriːn.haʊs ɡæs/',
        definition: 'A gas (such as carbon dioxide or methane) that absorbs infrared radiation in the atmosphere, trapping heat and contributing to global warming.',
        context_sentence: 'Transitioning to renewable hydroelectric and geothermal energy substantially lowers national greenhouse gas emissions.',
        ethiopian_context: 'Linked to Ethiopia\'s Climate-Resilient Green Economy (CRGE) strategy.',
        synonyms: ['Carbon emission', 'Atmospheric pollutant'],
        antonyms: ['Clean energy', 'Carbon sink'],
        collocations: ['Greenhouse gas emissions', 'Reduce greenhouse gases', 'Greenhouse effect']
      }
    ],
    speaking_listening_focus: {
      functions: ['Presenting environmental proposals', 'Expressing cause-and-effect relationships', 'Debating climate adaptation strategies'],
      key_expressions: [
        '"Due to climate volatility, our school environmental club proposes establishing a nursery for indigenous saplings."',
        '"What are the primary causes behind the recent flash flooding in our woreda?"',
        '"Unless we address deforestation immediately, agricultural yields will continue to decline."'
      ],
      sample_dialogue: [
        { speaker: 'Ecology Officer', text: 'Why is terracing so crucial on highland slopes, Senait?' },
        { speaker: 'Senait', text: 'Because terracing slows down runoff water during heavy rains; consequently, the rich volcanic topsoil is conserved.' }
      ]
    },
    writing_masterclass: {
      genre: 'Cause-and-Effect Analytical Essay',
      structure_blueprint: [
        '1. Introduction: Introduce the environmental crisis (e.g., deforestation) and state central thesis.',
        '2. Body Paragraph 1 (Causes): Detail logging, expansion of cropland, and charcoal production.',
        '3. Body Paragraph 2 (Effects): Explain soil degradation, water table depletion, and biodiversity loss.',
        '4. Conclusion: Synthesize cause-effect links and propose sustainable remediation strategies.'
      ],
      sample_model: 'DEFORESTATION IN ETHIOPIA: CAUSES, CONSEQUENCES, AND REMEDIAL ACTION\n\nForests are the ecological lungs of our planet, regulating atmospheric carbon, purifying waterways, and anchoring fertile soil. Over the past century, agricultural expansion, fuelwood collection, and unsustainable logging have drastically reduced Ethiopia\'s indigenous forest cover. Analyzing the root causes and severe consequences of this ecological crisis reveals why immediate nationwide reforestation is essential for our country\'s sustainable future.\n\nThe primary driver of deforestation is the relentless demand for arable cropland and charcoal to sustain growing populations. Because many rural households lack access to modern renewable energy, ancient timber is cut down for cooking fuel. Consequently, the protective canopy and root systems that stabilize steep mountain slopes are obliterated.\n\nThe ecological consequences of this loss are profound. Without tree roots to absorb precipitation, torrential seasonal rains wash away millions of tons of fertile topsoil into major river basins, causing severe siltation in dams and reservoirs. Furthermore, groundwater recharge diminishes, leaving traditional wells dry during the dry season.\n\nTo counteract this environmental hazard, Ethiopia has spearheaded ambitious afforestation campaigns like the Green Legacy Initiative. By transitioning to solar energy, enforcing protected biosphere reserves, and planting billions of indigenous seedlings, we can reverse soil degradation and secure a resilient climate for generations to come.',
      writing_checklist: [
        'Did you use cause and effect transition markers (Because, consequently, therefore, due to)?',
        'Did you clearly distinguish root causes from resulting effects in separate paragraphs?',
        'Is the thesis statement strong and well-supported?'
      ]
    },
    euee_exam_tips: [
      'Be vigilant when identifying cause vs effect: "A occurred **because of** B" (B is the cause) vs "A occurred; **consequently**, B happened" (B is the effect).',
      'Remember that "Due to" cannot begin a sentence in strictly traditional formal grammar if it modifies a verb, but modern exams accept it when followed by a noun phrase.'
    ]
  },
  {
    unit_number: 10,
    unit_title: 'Unit 10: Woodwork and Metalwork',
    start_page: 217,
    end_page: 237,
    reading_focus: {
      passage_title: 'Traditional Crafts, Carpentry, and Blacksmithing in Ethiopia',
      core_theme: 'Vocational technical skills, metallurgy, carpentry, workshop safety standards, and modern manufacturing.',
      comprehension_strategies: [
        'Following technical procedural diagrams and sequence charts.',
        'Understanding technical terminology and safety hazard warnings.'
      ],
      key_takeaways: [
        'Traditional Ethiopian blacksmiths (*Tumata*) and carpenters have forged agricultural ploughshares (*Maresha*), tools, and furniture for centuries.',
        'Workshop safety requires mandatory protective equipment (safety goggles, steel-toe boots, ear defenders).',
        'Modern technical and vocational education training (TVET) bridges traditional artisanal mastery with advanced engineering.'
      ]
    },
    grammar_masterclass: [
      {
        id: 'eng9-u10-g1',
        unit_number: 10,
        unit_title: 'Unit 10: Woodwork and Metalwork',
        rule_title: 'Imperatives and Process Passive for Technical Instructions',
        formula_structure: 'Imperative: Base Verb (V1) / Do not + Base Verb | Process Passive: Subject + is/are/must be + Past Participle (V3)',
        core_summary: 'Use imperative sentences for direct commands, safety notices, and step-by-step technical instructions. Use the process passive to describe industrial manufacturing procedures and technical operations objectively.',
        detailed_explanation: `1. **Imperative Sentences (Direct Instructions & Safety Commands)**:
- Starts with the bare base form of the verb (V1) with an implied subject (You).
- **Affirmative Imperative**:
  *Example*: *"Measure the timber twice before cutting."*
  *Example*: *"Wear protective safety goggles before operating the electric lathe."*
- **Negative Imperative (Prohibitions & Safety Warnings)**:
  *Formula*: *Do not / Don't + Base Verb (V1)*
  *Example*: *"Do not touch the heated iron anvil with bare hands."*
  *Example*: *"Never leave power tools connected to electricity unattended."*

2. **Process Passive for Technical Explanations**:
- Used to describe how materials are transformed during industrial or artisan processes.
- **Formula**: *First, [Item] + is + V3 ... Next, [Item] + is + V3 ... Finally, [Item] + is + V3*.
  *Example*: *"First, the scrap metal **is heated** in the forge until it glows red. Next, it **is shaped** on the heavy anvil using a sledgehammer. Finally, the finished ploughshare **is quenched** in cold water to harden the steel."*

3. **Modal Process Passive (Safety Regulations & Standards)**:
- **Formula**: *Subject + must be / should be / ought to be + Past Participle (V3)*.
  *Example*: *"Safety masks **must be worn** during spray-varnishing."*
  *Example*: *"The machine blades **should be sharpened** regularly to prevent rough cuts."*`,
        deep_ai_analysis: 'EUEE exam questions on technical English test sequencing linkers in process descriptions (*First, subsequently, while being shaped, prior to cooling, finally*) combined with proper passive verb conjugations (e.g., *is melted*, *are assembled*).',
        usage_rules: [
          'Rule 1: Imperatives always use the base form of the verb without suffixes (say "Clamp the wood", NOT "Clamping" or "Clamps").',
          'Rule 2: In process passives, keep verb tenses consistent (Present Simple Passive throughout the procedural chain).',
          'Rule 3: Use sequence linkers (First, next, then, after that, finally) to structure technical steps logically.'
        ],
        key_examples: [
          {
            sentence: 'Always secure the wooden workpiece firmly in the bench vice before sawing.',
            explanation: 'Affirmative imperative specifying a vital technical safety instruction.',
            context: 'Safety Command'
          },
          {
            sentence: 'The molten iron is poured carefully into sand molds to create durable cooking griddles.',
            explanation: 'Process passive describing manufacturing without focusing on the individual worker.',
            context: 'Technical Process'
          }
        ],
        common_errors_traps: [
          {
            incorrect: 'To wear safety goggles before entering the workshop.',
            correct: 'Wear safety goggles before entering the workshop.',
            reason: 'An imperative sentence must start with the bare base verb, not an infinitive with "to".'
          },
          {
            incorrect: 'First the wood is measured, then it cut by the carpenter.',
            correct: 'First the wood is measured, then it is cut by the carpenter.',
            reason: 'Each passive step requires both the auxiliary "is" and the past participle "cut".'
          }
        ],
        transformation_exercises: [
          {
            prompt: 'Convert the active instruction into a formal modal process passive:',
            starting_sentence: 'Workers must oil the mechanical gears every morning.',
            target_pattern: 'Modal Process Passive (must be + V3)',
            solution: 'The mechanical gears must be oiled every morning.',
            explanation: 'The object "mechanical gears" becomes the subject followed by "must be oiled".'
          }
        ]
      }
    ],
    vocabulary_bank: [
      {
        word: 'Ploughshare',
        part_of_speech: 'noun',
        phonetic: '/ˈplaʊ.ʃeər/',
        definition: 'The main cutting blade of a plough that digs into and turns over the top layer of agricultural soil.',
        context_sentence: 'The village blacksmith expertly forged a hardened steel ploughshare (Maresha) for the planting season.',
        ethiopian_context: 'The essential iron component of the traditional Ethiopian ox-drawn *Maresha* plough.',
        synonyms: ['Cutting blade', 'Colter', 'Iron blade'],
        antonyms: ['Handle', 'Harness'],
        collocations: ['Forged ploughshare', 'Iron ploughshare', 'Sharpen a ploughshare']
      },
      {
        word: 'Anvil',
        part_of_speech: 'noun',
        phonetic: '/ˈæn.vɪl/',
        definition: 'A heavy iron block with a flat top and concave horn on which heated metal pieces are hammered and shaped into tools.',
        context_sentence: 'Sparks flew across the workshop as the blacksmith struck the red-hot iron rod against the anvil.',
        ethiopian_context: 'Foundational equipment in metalworking and blacksmith workshops across Ethiopia.',
        synonyms: ['Forging block', 'Metal block'],
        antonyms: ['Hammer (the striking tool)'],
        collocations: ['Blacksmith\'s anvil', 'Heavy anvil', 'Strike the anvil']
      },
      {
        word: 'Chisel',
        part_of_speech: 'noun / verb',
        phonetic: '/ˈtʃɪz.əl/',
        definition: 'A long-bladed hand tool with a beveled cutting edge, used with a wooden mallet for carving or cutting wood, stone, or metal.',
        context_sentence: 'The carpenter used a sharp beveled chisel to carve precise mortise-and-tenon joints for the timber dining table.',
        ethiopian_context: 'Standard carpentry tool in vocational schools and artisan workshops.',
        synonyms: ['Carving tool', 'Gouge', 'Cutting tool'],
        antonyms: ['Adhesive', 'Fastener'],
        collocations: ['Wood chisel', 'Cold chisel', 'Carve with a chisel'],
        word_family: { noun: 'Chisel', verb: 'Chisel' }
      }
    ],
    speaking_listening_focus: {
      functions: ['Explaining workshop safety precautions', 'Giving sequential technical instructions', 'Warning peers about hazardous tools'],
      key_expressions: [
        '"Caution! Make sure the lathe is turned off before clearing wood shavings."',
        '"First, secure the metal beam in the vice; then, use the hacksaw at a steady forty-five-degree angle."',
        '"Protective ear muffs must be worn whenever operating loud motorized planers."'
      ],
      sample_dialogue: [
        { speaker: 'Instructor', text: 'Tadesse, what is the first rule before initiating any welding operation?' },
        { speaker: 'Tadesse', text: 'You must inspect your welding helmet, ensure the ventilation fan is running, and remove all flammable materials from the perimeter.' }
      ]
    },
    writing_masterclass: {
      genre: 'Illustrated Technical Operation Manual',
      structure_blueprint: [
        '1. Title & Specifications: State the manual title, required tools, and safety gear.',
        '2. Safety Warnings: Highlight hazards prominently using negative imperatives (*Do not... Never...*).',
        '3. Step-by-Step Technical Process: Detail chronological steps using process passive and imperative forms.',
        '4. Quality Inspection Checklist: Define standards for the completed item.'
      ],
      sample_model: 'TECHNICAL MANUAL: FABRICATING A STANDARD WOODEN STUDY DESK\n\nSafety Prerequisites:\n- Safety goggles and dust masks MUST be worn at all times.\n- Never operate electrical circular saws with loose clothing or untied hair.\n- Ensure the emergency power stop button is accessible.\n\nRequired Tools & Materials:\n- Seasoned highland timber (Wanza or Eucalyptus planks).\n- Hand saw, try-square, wood chisel, claw hammer, sandpaper (grades 80 and 120), wood glue, and non-toxic varnish.\n\nProcedural Steps:\n1. Preparation & Measurement: First, the timber is inspected for warping or knots. Accurate dimensions (120 cm length x 60 cm width x 75 cm height) are marked using a pencil and try-square.\n2. Cutting & Jointing: Cut the four legs and desktop planks to exact size. Mortise and tenon joints are chiseled into the leg frames to guarantee structural durability.\n3. Assembly: Apply wood glue into each joint. Assemble the framework and clamp securely with bar clamps for four hours until the adhesive cures completely.\n4. Sanding & Finishing: Sand the desktop surface progressively with coarse grade 80 sandpaper followed by fine grade 120 sandpaper. Finally, two coats of protective wood varnish are applied with a clean bristle brush.\n\nQuality Verification:\nEnsure the desktop is completely level, free of splinters, and able to bear at least fifty kilograms without wobbling.',
      writing_checklist: [
        'Did you employ both imperative commands and process passives appropriately?',
        'Are technical measurements and tool names precise?',
        'Is the safety section prominent and unambiguous?'
      ]
    },
    euee_exam_tips: [
      'In technical English questions, watch for sequence markers that dictate passive voice: *"Prior to **being assembled**, the components are inspected."*',
      'Remember that imperative sentences never take an overt subject: *"You wear your goggles"* is an observation or command with pronoun; standard imperative is strictly *"Wear your goggles!"*'
    ]
  }
];
