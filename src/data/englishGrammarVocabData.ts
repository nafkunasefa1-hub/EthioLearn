export interface GrammarRule {
  id: string;
  unit_num: number;
  unit_title: string;
  topic_title: string;
  grammar_topic: string;
  rule_summary: string;
  formula_syntax: string;
  positive_example: string;
  negative_example: string;
  question_example: string;
  stative_exceptions?: string[];
  key_points: string[];
  common_errors: Array<{ incorrect: string; correct: string; explanation: string }>;
  euee_traps: Array<{ trap: string; how_to_avoid: string; frequency: 'Critical' | 'High' | 'Medium' }>;
  practice_questions: Array<{
    question: string;
    options: string[];
    correct_option: number;
    explanation: string;
  }>;
}

export interface VocabularyWord {
  id: string;
  unit_num: number;
  word: string;
  part_of_speech: string;
  pronunciation_guide?: string;
  definition: string;
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  ethiopian_example_sentence: string;
  morphology_derivatives?: string;
  euee_exam_usage?: string;
}

export interface UnitEnglishMastery {
  unit_num: number;
  unit_title: string;
  reading_title: string;
  reading_synopsis: string;
  grammar_focus: string;
  grammar_rules: GrammarRule[];
  vocabulary_list: VocabularyWord[];
  speaking_functions: { function_name: string; key_phrases: string[]; example_dialogue: string };
  writing_craft: { topic: string; format_guide: string; transition_connectors: string[]; model_paragraph: string };
  euee_national_tips: string[];
}

export const ENGLISH_GRADE_9_MASTERY_DATA: UnitEnglishMastery[] = [
  {
    unit_num: 1,
    unit_title: 'Living in a Village',
    reading_title: 'Daily Life and Community Cohesion in an Ethiopian Village',
    reading_synopsis: 'Explores the social fabric, agrarian rhythms, and cooperative labor traditions (such as Debbo and Wonfel) across rural Ethiopian villages. Emphasizes mutual support, communal harvesting, and indigenous social harmony.',
    grammar_focus: 'Simple Present vs. Present Continuous Tenses & Stative Verbs',
    grammar_rules: [
      {
        id: 'g9-eng-u1-g1',
        unit_num: 1,
        unit_title: 'Living in a Village',
        topic_title: '1.3 Simple Present vs. Present Continuous Tenses',
        grammar_topic: 'Habitual Actions, General Truths vs. Actions Happening Now',
        rule_summary: 'Use the Simple Present for permanent states, general truths, scientific facts, and regular habits (with adverbs of frequency: always, usually, often). Use the Present Continuous for actions occurring at the moment of speaking or temporary situations in progress.',
        formula_syntax: 'Simple Present: Subject + V1 (s/es for 3rd-person singular) | Present Continuous: Subject + is/am/are + V-ing',
        positive_example: 'Farmers cultivate teff every rainy season. (Habit) | Look! The farmer is ploughing his field right now. (Action in progress)',
        negative_example: 'He does not reside in the capital. | They are not working in the field today.',
        question_example: 'Does she participate in the village Debbo? | Are they constructing the community water well now?',
        stative_exceptions: [
          'Stative verbs (verbs of emotion, cognition, possession, sensation) are NEVER used in continuous forms in standard English.',
          'Examples of Stative Verbs: believe, understand, know, belong, prefer, resemble, own, contain, suppose, love, hear, seem.'
        ],
        key_points: [
          'Third-person singular inflection (-s, -es, -ies): "He plows", "She watches", "The student studies".',
          'Adverbs of frequency position: Placed BEFORE main verbs ("She always helps"), but AFTER auxiliary/be verbs ("He is always punctual").',
          'Temporary vs. Permanent contrast: "I live in Hawassa (permanent)" vs. "I am living with my aunt this semester (temporary)".'
        ],
        common_errors: [
          {
            incorrect: 'Look! The students are knowing the answer.',
            correct: 'Look! The students know the answer.',
            explanation: '"Know" is a stative cognitive verb; it cannot take continuous -ing tense even if describing the present moment.'
          },
          {
            incorrect: 'She is always come late to class.',
            correct: 'She always comes late to class. / She is always coming late to class.',
            explanation: 'Do not mix the "is" auxiliary with base verb V1 without -ing.'
          }
        ],
        euee_traps: [
          {
            trap: 'Stative verb trap with sensory/cognitive words like "understand", "believe", "smell", "belong".',
            how_to_avoid: 'If an entrance exam question includes "Look!", "Right now", or "At the moment", but the verb is stative (e.g., "belong to"), choose the Simple Present ("belongs to"), NOT "is belonging to".',
            frequency: 'Critical'
          },
          {
            trap: 'Third-person singular "-s" agreement in negative auxiliary "does not".',
            how_to_avoid: 'After "does" or "doesn\'t", ALWAYS use the base infinitive without "-s" (e.g., "He doesn\'t know", NOT "He doesn\'t knows").',
            frequency: 'Critical'
          }
        ],
        practice_questions: [
          {
            question: 'Listen carefully! The village elder ________ an important announcement to the community assembly.',
            options: ['A) makes', 'B) is making', 'C) make', 'D) is make'],
            correct_option: 1,
            explanation: 'The sensory marker "Listen carefully!" signifies an ongoing action occurring right now, requiring Present Continuous ("is making").'
          },
          {
            question: 'This traditional agricultural land ________ to our extended family for three generations.',
            options: ['A) is belonging', 'B) belongs', 'C) belong', 'D) are belonging'],
            correct_option: 1,
            explanation: '"Belong" is a stative verb of possession and cannot take continuous form; "This land" is singular, so "belongs" is correct.'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u1-1',
        unit_num: 1,
        word: 'Homestead',
        part_of_speech: 'noun',
        pronunciation_guide: '/ˈhəʊm.sted/',
        definition: 'A house, especially a farmhouse, and outbuildings, often surrounded by agricultural land.',
        synonyms: ['farmstead', 'settlement', 'estate', 'residence'],
        antonyms: ['metropolis', 'urban apartment'],
        collocations: ['rural homestead', 'ancestral homestead', 'establish a homestead'],
        ethiopian_example_sentence: 'In the Ethiopian highlands, several family homesteads cluster together to share grazing pastures and livestock enclosures.',
        morphology_derivatives: 'homesteader (noun)',
        euee_exam_usage: 'Tested in context-clue reading passages regarding rural residential architecture.'
      },
      {
        id: 'v-u1-2',
        unit_num: 1,
        word: 'Husbandry',
        part_of_speech: 'noun',
        pronunciation_guide: '/ˈhʌz.bən.dri/',
        definition: 'The science, cultivation, and breeding of crops and animals on a farm.',
        synonyms: ['agriculture', 'farming', 'stockbreeding', 'cultivation'],
        antonyms: ['neglect', 'desertification'],
        collocations: ['animal husbandry', 'good husbandry', 'crop husbandry'],
        ethiopian_example_sentence: 'Modern animal husbandry techniques have boosted milk and meat yields for dairy cooperatives in the Arsi and Bale zones.',
        morphology_derivatives: 'husband (verb - to manage prudently)',
        euee_exam_usage: 'Appears frequently in vocabulary questions testing synonyms for agricultural livestock management.'
      },
      {
        id: 'v-u1-3',
        unit_num: 1,
        word: 'Communal',
        part_of_speech: 'adjective',
        pronunciation_guide: '/ˈkɒm.jʊ.nəl/',
        definition: 'Shared or used in common by members of a community; collective.',
        synonyms: ['collective', 'shared', 'cooperative', 'joint'],
        antonyms: ['individual', 'private', 'exclusive'],
        collocations: ['communal labor', 'communal pasture', 'communal harmony'],
        ethiopian_example_sentence: 'Debbo is a traditional system of communal labor where neighbors assemble to plough and harvest each other\'s farmland.',
        morphology_derivatives: 'community (noun), commune (noun/verb)',
        euee_exam_usage: 'Used as a key synonym for "collective" in national comprehension texts.'
      },
      {
        id: 'v-u1-4',
        unit_num: 1,
        word: 'Hospitality',
        part_of_speech: 'noun',
        pronunciation_guide: '/ˌhɒs.pɪˈtæl.ə.ti/',
        definition: 'The friendly and generous reception and entertainment of guests, visitors, or strangers.',
        synonyms: ['warmth', 'cordiality', 'generosity', 'welcome'],
        antonyms: ['hostility', 'aloofness', 'unfriendliness'],
        collocations: ['warm hospitality', 'traditional hospitality', 'extend hospitality'],
        ethiopian_example_sentence: 'Ethiopian rural culture is globally admired for its unmatched hospitality, where traveling guests are welcomed with freshly roasted coffee and meals.',
        morphology_derivatives: 'hospitable (adj), hospitably (adv)',
        euee_exam_usage: 'Commonly tested in antonym questions: opposite of "hostility".'
      }
    ],
    speaking_functions: {
      function_name: 'Describing Hometowns & Local Traditions',
      key_phrases: [
        'My hometown is situated in the highlands of...',
        'What makes our village unique is the tradition of...',
        'Would you mind telling me how your community organizes...?',
        'In our local custom, whenever a traveler arrives...'
      ],
      example_dialogue: `A: "Could you describe what daily life is like in your village?"
B: "Certainly! Most villagers wake up at dawn to tend their livestock and cultivate crops. In the afternoon, community elders gather under the shade trees to discuss village welfare."`
    },
    writing_craft: {
      topic: 'Descriptive Paragraphs: Community Life & Geography',
      format_guide: 'Begin with a strong topic sentence asserting the central mood or dominant impression. Use vivid sensory details (visuals, sounds, scents) and organize spatially (from foreground to background). Conclude with a reflective closing statement.',
      transition_connectors: ['Surrounding the village...', 'Adjacent to the river...', 'In the heart of the community...', 'At the break of dawn...'],
      model_paragraph: 'Nestled between mist-covered volcanic hills, our village awakens to the rhythmic chanting of morning prayers and the clinking of ploughshares. Along the main dirt road, lush enset plantations sway gently in the crisp morning breeze while farmers lead oxen to fertile terraces. At the village center, a stone water fountain serves as a lively hub where neighbors exchange warm greetings and daily news. This close-knit settlement exemplifies the enduring warmth, resilience, and cooperative spirit of Ethiopian highland life.'
    },
    euee_national_tips: [
      'Simple Present vs Continuous is tested in 100% of national examinations: Watch for time markers ("currently", "now", "seldom", "twice a year").',
      'Stative verbs like "resemble", "belong", "contain", and "consist" NEVER take continuous forms on national exam papers.'
    ]
  },
  {
    unit_num: 2,
    unit_title: 'History of Writing',
    reading_title: 'From Ancient Cuneiform and Papyrus to the Ethiopian Ge\'ez Script',
    reading_synopsis: 'Traces the global history of human literacy from Sumerian cuneiform clay tablets and Egyptian hieroglyphic papyrus scrolls to the development of the Ethiopian Ge\'ez abugida script and parchment illuminated manuscripts.',
    grammar_focus: 'Simple Past vs. Past Continuous Tenses & "When/While" Time Clauses',
    grammar_rules: [
      {
        id: 'g9-eng-u2-g1',
        unit_num: 2,
        unit_title: 'History of Writing',
        topic_title: '2.3 Simple Past vs. Past Continuous Tenses',
        grammar_topic: 'Interrupted Past Actions & Parallel Past Events',
        rule_summary: 'Use the Simple Past for completed past events at a specific past time. Use the Past Continuous for ongoing background actions in the past. When an ongoing past action is interrupted by a shorter completed action, use "While/As + Past Continuous" for the background and "When + Simple Past" for the interrupting event.',
        formula_syntax: 'Simple Past: Subject + V2 (regular -ed or irregular) | Past Continuous: Subject + was/were + V-ing | Interruption: While + was/were + V-ing, Simple Past',
        positive_example: 'Ancient scribes developed the Ge\'ez alphabet centuries ago. | While the archaeologists were excavating the Axumite ruins, they discovered an ancient parchment inscription.',
        negative_example: 'They did not record the event in clay tablets. | The students were not reading the hieroglyphs when the bell rang.',
        question_example: 'Did Emperor Menelik II introduce the first printing press? | What were the scribes writing when the ink ran out?',
        key_points: [
          '"While" is followed by Past Continuous: "While I was studying..."; "When" is typically followed by Simple Past: "...when the lights went out."',
          'Parallel past actions happening simultaneously: "While the scribe was preparing parchment, his apprentice was grinding natural inks." (Both in Past Continuous).',
          'Irregular past tense verb forms: write -> wrote -> written; seek -> sought -> sought; lead -> led -> led.'
        ],
        common_errors: [
          {
            incorrect: 'While he read the ancient manuscript, the lamp went out.',
            correct: 'While he was reading the ancient manuscript, the lamp went out.',
            explanation: '"While" indicates an ongoing duration in the past, which requires the Past Continuous ("was reading").'
          },
          {
            incorrect: 'They didn\'t wrote the letter yesterday.',
            correct: 'They didn\'t write the letter yesterday.',
            explanation: 'After "did" or "didn\'t", the main verb MUST revert to base form V1 ("write").'
          }
        ],
        euee_traps: [
          {
            trap: 'Double past tense error in questions: "Did she saw the inscription?"',
            how_to_avoid: 'The auxiliary "did" already carries the past tense. Always use base form: "Did she see the inscription?"',
            frequency: 'Critical'
          },
          {
            trap: 'Misplacing "when" and "while" with past continuous clauses.',
            how_to_avoid: 'Remember: While = was/were + -ing (duration); When = simple past (point in time / interruption).',
            frequency: 'High'
          }
        ],
        practice_questions: [
          {
            question: 'While the historian ________ the stone inscriptions, he discovered a reference to King Ezana of Axum.',
            options: ['A) examined', 'B) was examining', 'C) is examining', 'D) has examined'],
            correct_option: 1,
            explanation: '"While" introduces the ongoing background activity in the past ("was examining"), which was interrupted by the discovery ("discovered").'
          },
          {
            question: 'The ancient Egyptians ________ papyrus reeds to make paper around 3000 BCE.',
            options: ['A) used', 'B) were using', 'C) use', 'D) have used'],
            correct_option: 0,
            explanation: 'A definite historical past time reference ("around 3000 BCE") requires the Simple Past tense ("used").'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u2-1',
        unit_num: 2,
        word: 'Parchment',
        part_of_speech: 'noun',
        pronunciation_guide: '/ˈpɑːtʃ.mənt/',
        definition: 'A stiff, flat, thin material made from the prepared skin of an animal (goat or calf), used as a durable writing surface in antiquity and medieval times.',
        synonyms: ['vellum', 'animal skin', 'scroll'],
        antonyms: ['synthetic paper', 'digital screen'],
        collocations: ['parchment manuscript', 'ancient parchment', 'inscribed on parchment'],
        ethiopian_example_sentence: 'Traditional Ethiopian church scribes meticulously handcraft Branna (parchment) from goat hide to preserve ancient ecclesiastical texts.',
        morphology_derivatives: 'parchment-bound (adj)',
        euee_exam_usage: 'Appears in reading passages describing historical literacy artifacts.'
      },
      {
        id: 'v-u2-2',
        unit_num: 2,
        word: 'Hieroglyphs',
        part_of_speech: 'noun (plural)',
        pronunciation_guide: '/ˈhaɪərəˌɡlɪfs/',
        definition: 'Pictures or symbols representing words, syllables, or sounds, used in ancient Egyptian writing systems.',
        synonyms: ['pictographs', 'symbols', 'inscriptions', 'glyphs'],
        antonyms: ['phonetic alphabet', 'cursive script'],
        collocations: ['Egyptian hieroglyphs', 'decipher hieroglyphs', 'hieroglyphic inscription'],
        ethiopian_example_sentence: 'Scholars cracked the code of ancient hieroglyphs following the discovery of the multilingual Rosetta Stone in 1799.',
        morphology_derivatives: 'hieroglyphic (adj)',
        euee_exam_usage: 'Frequently tested in root-word morphology and historical reading comprehension.'
      },
      {
        id: 'v-u2-3',
        unit_num: 2,
        word: 'Decipher',
        part_of_speech: 'verb',
        pronunciation_guide: '/dɪˈsaɪ.fər/',
        definition: 'To convert a text written in code, ancient script, or poor handwriting into intelligible language; to interpret the meaning of something obscure.',
        synonyms: ['decode', 'interpret', 'translate', 'unravel'],
        antonyms: ['encode', 'encrypt', 'confuse', 'obfuscate'],
        collocations: ['decipher an inscription', 'decipher ancient script', 'decipher handwriting'],
        ethiopian_example_sentence: 'Linguists spent decades attempting to decipher the bilingual royal inscriptions carved upon the Axumite obelisks.',
        morphology_derivatives: 'decipherable (adj), undecipherable (adj), decipherment (noun)',
        euee_exam_usage: 'High-frequency vocabulary word in national examinations; tests understanding of "decode".'
      }
    ],
    speaking_functions: {
      function_name: 'Recounting Historical Timelines & Events',
      key_phrases: [
        'The earliest historical evidence dates back to...',
        'Initially, human societies relied exclusively on oral storytelling, but subsequently...',
        'A major turning point occurred when...',
        'This historical invention fundamentally revolutionized...'
      ],
      example_dialogue: `A: "Why was the development of the Ge'ez script so crucial for the Horn of Africa?"
B: "Because it provided a sophisticated indigenous writing system that preserved Ethiopian administrative records, philosophical treaties, and religious literature across millennia."`
    },
    writing_craft: {
      topic: 'Narrative & Historical Sequence Paragraphs',
      format_guide: 'Maintain strict chronological coherence. Use chronological sequence transition markers (Initially, In subsequent eras, Following this milestone, Ultimately). Write predominantly in the Simple Past with vivid historical verbs.',
      transition_connectors: ['In early antiquity...', 'Subsequently...', 'Following this technological breakthrough...', 'Over successive centuries...'],
      model_paragraph: 'The journey of written communication began over five millennia ago when Mesopotamian merchants pressed wedge-shaped styluses into moist clay to record trade inventories. Subsequently, ancient Egyptian scribes revolutionized text mobility by processing Nile reeds into lightweight papyrus scrolls. In the Horn of Africa, scholars during the first millennium BCE developed the Ge\'ez abugida, innovatively attaching vowel markers directly to consonant glyphs. This indigenous writing system allowed Ethiopian chroniclers to document national history on durable goat-skin parchment, bequeathing a rich literary treasury to future generations.'
    },
    euee_national_tips: [
      'In past-narrative reading texts, look out for "while" vs "when" sentence completions.',
      'Check for irregular past tense verbs in exam error identification sections (e.g., "broadcast" stays "broadcast", NOT "broadcasted").'
    ]
  },
  {
    unit_num: 3,
    unit_title: 'People and Animals',
    reading_title: 'Wildlife Conservation & Protecting Endemic Species in Ethiopia',
    reading_synopsis: 'Examines biodiversity preservation across Ethiopian national parks (Simien, Bale, Nechisar). Highlights human-wildlife coexistence, combating poaching, habitat loss, and protecting endemic mammals (Walia Ibex, Ethiopian Wolf, Mountain Nyala).',
    grammar_focus: 'Modals of Ability, Obligation, Permission, and Advice (Can, Could, Must, Should, Ought to)',
    grammar_rules: [
      {
        id: 'g9-eng-u3-g1',
        unit_num: 3,
        unit_title: 'People and Animals',
        topic_title: '3.3 Modals of Ability, Obligation, and Advice',
        grammar_topic: 'Modal Auxiliaries & Degrees of Necessity',
        rule_summary: 'Modals are auxiliary verbs that express ability, permission, obligation, possibility, or advice. Modals NEVER take "-s" in the third person and are ALWAYS followed by the base infinitive without "to" (except "ought to" and "have to").',
        formula_syntax: 'Subject + Modal (must / should / can / could / may / might) + Base Verb (V1)',
        positive_example: 'Citizens must protect national parks from deforestation. (Strong obligation) | We should support community rangers. (Advice)',
        negative_example: 'Visitors must not feed wild animals in the park. (Prohibition) | You should not purchase products made from endangered wildlife. (Advisory)',
        question_example: 'Can the Ethiopian wolf survive outside alpine moorlands? | Should the community implement rotational livestock grazing?',
        key_points: [
          'Must vs. Have to: "Must" conveys internal personal necessity or written rules; "Have to" conveys external obligation imposed by law or authority.',
          'Must not (Prohibition) vs. Don\'t have to (Lack of necessity): "You must not trespass" (It is strictly forbidden) vs. "You don\'t have to pay" (It is free/optional).',
          'Should / Ought to / Had better: "Should" and "Ought to" give moral advice; "Had better" warns of negative consequences if ignored.'
        ],
        common_errors: [
          {
            incorrect: 'She can to speak three languages fluently.',
            correct: 'She can speak three languages fluently.',
            explanation: 'Modals (can, must, should, may) are followed directly by the bare infinitive WITHOUT "to".'
          },
          {
            incorrect: 'You mustn\'t wear a uniform tomorrow because it is Sunday.',
            correct: 'You don\'t have to wear a uniform tomorrow because it is Sunday.',
            explanation: '"Mustn\'t" means forbidden; lack of necessity requires "don\'t have to" or "needn\'t".'
          }
        ],
        euee_traps: [
          {
            trap: 'Confusing "mustn\'t" (forbidden) with "don\'t have to / needn\'t" (optional).',
            how_to_avoid: 'Read the context: If an action is prohibited by penalty, select "must not". If an action is merely optional or unnecessary, select "don\'t have to".',
            frequency: 'Critical'
          },
          {
            trap: 'Adding "-s" to modal verbs with third-person subjects ("He musts", "She cans").',
            how_to_avoid: 'Modals never conjugate with "-s". It is always "He must", "She can".',
            frequency: 'Medium'
          }
        ],
        practice_questions: [
          {
            question: 'Poaching of endangered Walia Ibex is strictly illegal. Tourists and residents ________ hunt inside the national park.',
            options: ['A) don\'t have to', 'B) must not', 'C) shouldn\'t have', 'D) might not'],
            correct_option: 1,
            explanation: 'Because poaching is illegal and strictly forbidden by law, the modal of prohibition "must not" is required.'
          },
          {
            question: 'Tomorrow is an official national holiday, so students ________ wake up early for school.',
            options: ['A) must not', 'B) don\'t have to', 'C) ought to', 'D) can not'],
            correct_option: 1,
            explanation: 'On a holiday, waking up early is not compulsory; it represents a lack of obligation ("don\'t have to").'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u3-1',
        unit_num: 3,
        word: 'Endangered',
        part_of_speech: 'adjective',
        pronunciation_guide: '/ɪnˈdeɪn.dʒəd/',
        definition: 'Seriously at risk of global extinction due to human activities, habitat destruction, or climate change.',
        synonyms: ['threatened', 'at-risk', 'vulnerable', 'imperiled'],
        antonyms: ['abundant', 'thriving', 'secure'],
        collocations: ['endangered species', 'critically endangered', 'endangered wildlife'],
        ethiopian_example_sentence: 'The Ethiopian Wolf is recognized as Africa\'s most endangered carnivore, with fewer than 500 individuals remaining in the wild.',
        morphology_derivatives: 'endanger (verb), endangerment (noun), danger (noun)',
        euee_exam_usage: 'Core vocabulary term in national reading passages regarding environmental policy.'
      },
      {
        id: 'v-u3-2',
        unit_num: 3,
        word: 'Sanctuary',
        part_of_speech: 'noun',
        pronunciation_guide: '/ˈsæŋk.tʃʊə.ri/',
        definition: 'A protected nature reserve or refuge where birds and animals are sheltered and bred safely from hunting or predation.',
        synonyms: ['refuge', 'haven', 'reserve', 'shelter', 'asylum'],
        antonyms: ['hunting ground', 'abattoir'],
        collocations: ['wildlife sanctuary', 'bird sanctuary', 'seek sanctuary'],
        ethiopian_example_sentence: 'The Senkelle Swayne\'s Hartebeest Sanctuary in Oromia was created specifically to safeguard the remaining herds of this endemic antelope.',
        morphology_derivatives: 'sanctity (noun), sanctify (verb)',
        euee_exam_usage: 'Frequently tested in synonym matching questions on national examinations.'
      }
    ],
    speaking_functions: {
      function_name: 'Debating Wildlife Protection & Expressing Opinions',
      key_phrases: [
        'In my perspective, the most urgent priority is...',
        'I strongly agree that local communities must benefit from...',
        'While I acknowledge the farmers\' need for grazing land, we cannot ignore...',
        'Could you propose an alternative solution to...?'
      ],
      example_dialogue: `A: "Should we allow cattle grazing inside national park borders during severe droughts?"
B: "In my opinion, we must establish designated buffer zones with strict rotational limits so that both livestock and endemic wildlife can survive without degrading the core ecosystem."`
    },
    writing_craft: {
      topic: 'Persuasive Essays on Environmental Stewardship',
      format_guide: 'Open with an arresting hook and a clear thesis statement. Present two to three distinct body arguments backed by concrete conservation evidence. Address a counter-argument fairly, and finish with a memorable call to action.',
      transition_connectors: ['First and foremost...', 'Furthermore...', 'Consequently...', 'On the contrary...', 'In conclusion...'],
      model_paragraph: 'Biodiversity conservation in Ethiopia is not merely an aesthetic choice; it is an ecological imperative that safeguards our water towers and agricultural viability. When human activities push endemic species like the Walia Ibex or Ethiopian Wolf to the precipice of extinction, the entire trophic balance of our alpine ecosystems collapses. Protecting these creatures preserves critical headwater watersheds in the Simien and Bale mountains that provide millions of citizens with clean water. Therefore, national policymakers and local communities must unite to enforce conservation laws and expand community-based eco-tourism initiatives.'
    },
    euee_national_tips: [
      'Know the difference: "must not" = strictly forbidden; "don\'t have to / needn\'t" = optional / not necessary.',
      '"Had better" is always followed by base form without "to": "You had better study", NOT "You had better to study".'
    ]
  },
  {
    unit_num: 4,
    unit_title: 'The Digital World',
    reading_title: 'Information Technology, Smart Devices, and Cyber Security',
    reading_synopsis: 'Analyzes the digital transformation in education and commerce across Ethiopia. Explores internet navigation, mobile money (Telebirr), educational portals, online privacy, digital footprints, and cyber security best practices.',
    grammar_focus: 'Expressing the Future: Will, Be Going To, and Present Continuous',
    grammar_rules: [
      {
        id: 'g9-eng-u4-g1',
        unit_num: 4,
        unit_title: 'The Digital World',
        topic_title: '4.3 Expressing the Future: Will vs. Be Going To vs. Present Continuous',
        grammar_topic: 'Spontaneous Decisions vs. Prior Intentions vs. Fixed Arrangements',
        rule_summary: 'Use "Will" for instant spontaneous decisions, future predictions based on personal opinion, promises, and offers. Use "Be going to" for prior intentions/plans decided before speaking, or predictions based on clear present evidence. Use the Present Continuous for fixed future calendar arrangements with other people.',
        formula_syntax: 'Will: Subject + will + V1 | Be Going To: Subject + is/am/are + going to + V1 | Present Continuous: Subject + is/am/are + V-ing + Future Time Marker',
        positive_example: 'Spontaneous: "The phone is ringing. I will answer it!" | Prior Plan: "I am going to purchase a tablet next month." | Fixed Arrangement: "We are meeting the ICT teacher at 3:00 PM tomorrow."',
        negative_example: 'He will not share his password with strangers. | They are not going to download untrusted software.',
        question_example: 'Will artificial intelligence transform educational access? | Are you going to enroll in the digital coding academy?',
        key_points: [
          'Prediction with present evidence: "Look at those dark storm clouds! It is going to rain." (Not "will rain").',
          'Spontaneous offer: "Those books look heavy. I will carry them for you." (Not "I am going to carry").',
          'Fixed social arrangement with specific time/place: "The Ministry is launching the new e-learning portal next Monday."'
        ],
        common_errors: [
          {
            incorrect: 'Look at that reckless driver! He will crash!',
            correct: 'Look at that reckless driver! He is going to crash!',
            explanation: 'When a prediction is based on immediate observable physical evidence, standard English requires "is going to".'
          },
          {
            incorrect: 'I am hungry. I think I am going to make some tea.',
            correct: 'I am hungry. I think I will make some tea.',
            explanation: 'Spontaneous instant decisions made at the moment of thought require "will".'
          }
        ],
        euee_traps: [
          {
            trap: 'Using "will" instead of "be going to" when observable present evidence is described.',
            how_to_avoid: 'If the question starts with "Look!", "Watch out!", or describes concrete visible evidence, ALWAYS choose "is/are going to".',
            frequency: 'Critical'
          },
          {
            trap: 'Using "will" inside time clauses ("When I will arrive...").',
            how_to_avoid: 'Never use "will" after time conjunctions (when, before, after, as soon as, until). Use Simple Present instead: "When I arrive, I will call you."',
            frequency: 'Critical'
          }
        ],
        practice_questions: [
          {
            question: 'Watch out! That unstable electric ladder ________ fall!',
            options: ['A) will', 'B) is going to', 'C) is falling', 'D) shall'],
            correct_option: 1,
            explanation: 'The warning "Watch out!" signals immediate visible physical evidence, requiring "is going to fall".'
          },
          {
            question: 'As soon as the technician ________ the server maintenance, all student terminals will reconnect.',
            options: ['A) will complete', 'B) completes', 'C) completed', 'D) is completing'],
            correct_option: 1,
            explanation: 'In a future time clause introduced by "As soon as", use the Simple Present ("completes"), not "will complete".'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u4-1',
        unit_num: 4,
        word: 'Cybersecurity',
        part_of_speech: 'noun',
        pronunciation_guide: '/ˈsaɪ.bə.sɪˌkjʊə.rə.ti/',
        definition: 'The state or process of protecting computer systems, networks, devices, and digital data from unauthorized access, theft, or damage.',
        synonyms: ['digital security', 'network defense', 'information security'],
        antonyms: ['vulnerability', 'cyber vulnerability'],
        collocations: ['cybersecurity protocol', 'enhance cybersecurity', 'cybersecurity threats'],
        ethiopian_example_sentence: 'Financial institutions in Ethiopia invest heavily in robust cybersecurity systems to protect mobile banking transactions.',
        morphology_derivatives: 'cyber (prefix), secure (adj/verb), security (noun)',
        euee_exam_usage: 'Frequent topic in modern educational expository comprehension texts.'
      },
      {
        id: 'v-u4-2',
        unit_num: 4,
        word: 'Authentication',
        part_of_speech: 'noun',
        pronunciation_guide: '/ɔːˌθen.tɪˈkeɪ.ʃən/',
        definition: 'The process or action of verifying the identity of a user, system, or digital transmission before granting access.',
        synonyms: ['verification', 'validation', 'confirmation', 'identification'],
        antonyms: ['impersonation', 'falsification', 'repudiation'],
        collocations: ['two-factor authentication', 'biometric authentication', 'user authentication'],
        ethiopian_example_sentence: 'Two-factor authentication adds an indispensable security shield by requiring a one-time SMS verification code alongside a password.',
        morphology_derivatives: 'authenticate (verb), authentic (adj), authenticity (noun)',
        euee_exam_usage: 'High-yield vocabulary word in technological context questions.'
      }
    ],
    speaking_functions: {
      function_name: 'Discussing Internet Safety & Digital Etiquette',
      key_phrases: [
        'To prevent phishing attacks, one should always verify...',
        'Have you considered the long-term impact of your digital footprint?',
        'I strongly advise against sharing personal credentials on...',
        'In my experience, using a password manager ensures...'
      ],
      example_dialogue: `A: "What steps should secondary students take to maintain safe internet habits?"
B: "First, never share passwords with peers. Second, enable two-factor authentication on all email accounts. Finally, always verify the authenticity of download links before clicking."`
    },
    writing_craft: {
      topic: 'Opinion Essays on Digital Learning Tools',
      format_guide: 'Present a balanced overview of technology in education. Structure paragraphs around clear topic sentences comparing benefits (access to digital books, self-paced learning) with challenges (distraction, screen fatigue). Provide practical mitigation strategies.',
      transition_connectors: ['On one hand...', 'Conversely...', 'Furthermore...', 'Empirical studies demonstrate...', 'To maximize these benefits...'],
      model_paragraph: 'The digitization of secondary school textbooks has democratized educational access across Ethiopia, enabling students in remote districts to download comprehensive science modules and national exam banks instantly. However, unrestricted screen access also poses risks of cognitive distraction and superficial reading habits. To harness digital tools effectively, schools must integrate structured digital literacy courses that teach students disciplined online research and cyber security hygiene.'
    },
    euee_national_tips: [
      'Time clauses (introduced by when, after, before, as soon as, until) NEVER use "will"; use Simple Present for future meaning.',
      'Look for evidence markers like "Look at...", "Watch out!" to pick "is/are going to" over "will".'
    ]
  },
  {
    unit_num: 5,
    unit_title: 'Tourism in Ethiopia',
    reading_title: 'Historical Marvels & Natural Wonders of the Horn',
    reading_synopsis: 'Celebrates Ethiopia\'s rich cultural heritage and natural landscapes—from the rock-hewn churches of Lalibela and Fasil Ghebbi in Gondar to the Danakil Depression, Erta Ale, and the Blue Nile Falls.',
    grammar_focus: 'Comparative and Superlative Adjectives, Adverbs & "As... As" Equatives',
    grammar_rules: [
      {
        id: 'g9-eng-u5-g1',
        unit_num: 5,
        unit_title: 'Tourism in Ethiopia',
        topic_title: '5.3 Comparatives, Superlatives, and Equatives',
        grammar_topic: 'Comparing Two or More Entities & Degree Modifiers',
        rule_summary: 'Use Comparatives (-er / more + adj + than) to compare two items. Use Superlatives (the + -est / the most + adj) to identify the extreme member of a group of three or more. Use "as + adj + as" to express equal degrees.',
        formula_syntax: 'Comparative: Adj-er + than / more + Adj + than | Superlative: the + Adj-est / the most + Adj | Equative: as + Adj + as',
        positive_example: 'Ras Dejen is higher than Mount Tullu Dimtu. | Lalibela is one of the most famous historical sites in Africa. | Gheralta is as breathtaking as Simien.',
        negative_example: 'Danakil is not as cool as the Shewan plateau. | This itinerary is no more expensive than the standard package.',
        question_example: 'Which Ethiopian national park has the greatest number of endemic bird species? | Is Lake Tana larger than Lake Victoria?',
        key_points: [
          'One-syllable adjectives: add -er / -est (high -> higher -> highest; cold -> colder -> coldest).',
          'Two-syllable adjectives ending in -y: change -y to -i and add -er / -est (heavy -> heavier -> heaviest).',
          'Multi-syllable adjectives: use more / most (breathtaking -> more breathtaking -> most breathtaking).',
          'Irregular forms: good -> better -> best; bad -> worse -> worst; far -> farther/further -> farthest/furthest; little -> less -> least; much/many -> more -> most.',
          'Modifiers with comparatives: slightly, a bit, much, far, significantly ("Ras Dejen is far higher than the surrounding foothills").'
        ],
        common_errors: [
          {
            incorrect: 'Lalibela is more older than Gondar.',
            correct: 'Lalibela is older than Gondar. / Lalibela is much older than Gondar.',
            explanation: 'Never use double comparatives ("more older"). Use "older" or intensify with "much older".'
          },
          {
            incorrect: 'She is the most unique guide I have ever met.',
            correct: 'She is a unique guide I have ever met. / She is the most exceptional guide...',
            explanation: 'Absolute adjectives like "unique", "perfect", "dead", and "round" cannot logically take comparative or superlative degrees.'
          }
        ],
        euee_traps: [
          {
            trap: 'Double comparative or superlative errors ("more better", "most tallest").',
            how_to_avoid: 'Check for redundant "more" or "most" preceding "-er" or "-est" adjectives.',
            frequency: 'Critical'
          },
          {
            trap: 'Confusing "farthest" (physical distance) with "further" (additional/figurative).',
            how_to_avoid: '"For further information, consult the brochure" uses "further" (additional), NOT "farther".',
            frequency: 'High'
          }
        ],
        practice_questions: [
          {
            question: 'Among all twelve rock-hewn monolithic churches in Lalibela, Biete Giyorgis is widely regarded as ________ finely sculpted.',
            options: ['A) more', 'B) the most', 'C) most of', 'D) the more'],
            correct_option: 1,
            explanation: 'Comparing one church among a group of twelve requires the Superlative degree ("the most finely sculpted").'
          },
          {
            question: 'The Danakil Depression is ________ hotter than the temperate central highlands.',
            options: ['A) very', 'B) much', 'C) more', 'D) so'],
            correct_option: 1,
            explanation: 'Comparatives are intensified by "much", "far", or "significantly", not by "very".'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u5-1',
        unit_num: 5,
        word: 'Monolithic',
        part_of_speech: 'adjective',
        pronunciation_guide: '/ˌmɒn.əˈlɪθ.ɪk/',
        definition: 'Formed of a single large block of stone; exceptionally massive, uniform, and enduring.',
        synonyms: ['carved from single rock', 'colossal', 'monumental', 'solid'],
        antonyms: ['composite', 'assembled', 'modular', 'fragmented'],
        collocations: ['monolithic church', 'monolithic architecture', 'monolithic obelisk'],
        ethiopian_example_sentence: 'The churches of Lalibela are renowned worldwide as miraculous masterpieces of subterranean monolithic rock architecture.',
        morphology_derivatives: 'monolith (noun)',
        euee_exam_usage: 'Tested in art and historical tourism reading comprehension.'
      },
      {
        id: 'v-u5-2',
        unit_num: 5,
        word: 'Spectacular',
        part_of_speech: 'adjective',
        pronunciation_guide: '/spekˈtæk.jə.lər/',
        definition: 'Beautiful in a dramatic and eye-catching way; strikingly grand and impressive.',
        synonyms: ['breathtaking', 'magnificent', 'dramatic', 'stunning', 'splendid'],
        antonyms: ['unimpressive', 'ordinary', 'dull', 'mediocre'],
        collocations: ['spectacular landscape', 'spectacular scenery', 'spectacular view'],
        ethiopian_example_sentence: 'The dramatic escarpments and pinnacles of the Simien Mountains provide one of the most spectacular panoramas on the African continent.',
        morphology_derivatives: 'spectacle (noun), spectacularly (adv)',
        euee_exam_usage: 'Frequent synonym choice for "breathtaking" or "magnificent".'
      }
    ],
    speaking_functions: {
      function_name: 'Guiding Visitors & Recommending Itineraries',
      key_phrases: [
        'If you are interested in ancient architecture, I highly recommend visiting...',
        'The best season to explore the Danakil Depression is between...',
        'Compared to other historical destinations, Gondar offers...',
        'You certainly should not miss the breathtaking sunrise over...'
      ],
      example_dialogue: `A: "Which historical circuit would you recommend for a five-day educational excursion?"
B: "I strongly suggest the Northern Historic Route, taking in the stelae of Axum and the rock-hewn marvels of Lalibela, as it provides an unmatched perspective on ancient Ethiopian civilization."`
    },
    writing_craft: {
      topic: 'Travel Brochures & Promotional Descriptions',
      format_guide: 'Use persuasive headlines, vivid sensory adjectives, bulleted highlights of key historical facts, and clear practical advice (visiting hours, cultural dress codes).',
      transition_connectors: ['Situated just a short flight from...', 'Upon entering the ancient citadel...', 'Moreover...', 'For an unforgettable experience...'],
      model_paragraph: 'Discover the medieval majesty of Gondar, the historic "Camelot of Africa." Enclosed within monumental stone ramparts, the Royal Enclosure features six magnificent 17th-century castles that blend Portuguese, Moorish, and indigenous Axumite architectural traditions. Stroll through the lush gardens of Fasilides\' Bath, where epiphany celebrations ignite vibrant spiritual festivities each January. With its mild mountain climate and welcoming local hospitality, Gondar offers an extraordinary journey into Ethiopia\'s imperial heritage.'
    },
    euee_national_tips: [
      'Remember: "more" cannot precede an "-er" adjective ("more taller" is an automatic exam trap).',
      'Intensify comparatives with "much", "far", or "a lot", NEVER with "very" (e.g., "much faster", NOT "very faster").'
    ]
  },
  {
    unit_num: 6,
    unit_title: 'Community Services',
    reading_title: 'Civic Engagement, Iddir, and Voluntary Mutual Assistance',
    reading_synopsis: 'Examines indigenous social capital in Ethiopia, specifically traditional grassroots institutions like Iddir, Equb, and Senbete. Details voluntary blood donations, elderly care, sanitation campaigns, and civic responsibility.',
    grammar_focus: 'The Passive Voice (Simple Present and Simple Past Passive)',
    grammar_rules: [
      {
        id: 'g9-eng-u6-g1',
        unit_num: 6,
        unit_title: 'Community Services',
        topic_title: '6.3 The Passive Voice in Academic & Expository Writing',
        grammar_topic: 'Focusing on the Action & Object Rather Than the Agent',
        rule_summary: 'Use the Passive Voice when the action or the receiver of the action is more important than the doer, when the doer is unknown, obvious, or unimportant, or in formal/scientific reporting. Formed with the appropriate tense of "be" + Past Participle (V3).',
        formula_syntax: 'Simple Present Passive: Subject + is/am/are + V3 | Simple Past Passive: Subject + was/were + V3 | Agent: by + agent',
        positive_example: 'Active: Volunteers plant millions of tree seedlings every rainy season. -> Passive: Millions of tree seedlings are planted every rainy season.',
        negative_example: 'Active: The committee did not approve the budget. -> Passive: The budget was not approved by the committee.',
        question_example: 'Active: Did the doctor treat the patient? -> Passive: Was the patient treated by the doctor?',
        key_points: [
          'Subject-verb agreement in passive: The auxiliary "be" must agree with the NEW grammatical subject ("The tree was planted" vs "The trees were planted").',
          'Omitting the agent: Omit "by + agent" if the doer is vague (someone, people, they) or self-evident ("The thief was arrested [by the police]").',
          'Only TRANSITIVE verbs (verbs that take a direct object) can be transformed into the passive voice. Intransitive verbs like "arrive", "die", "happen", "occur" NEVER have passive forms!'
        ],
        common_errors: [
          {
            incorrect: 'An unexpected earthquake was happened yesterday.',
            correct: 'An unexpected earthquake happened yesterday.',
            explanation: '"Happen" is an intransitive verb; it can NEVER be used in the passive voice.'
          },
          {
            incorrect: 'The traditional community hall was build last decade.',
            correct: 'The traditional community hall was built last decade.',
            explanation: 'The passive voice requires the Past Participle V3 form ("built"), not the base form V1.'
          }
        ],
        euee_traps: [
          {
            trap: 'Passive transformation of intransitive verbs ("was occurred", "was appeared", "was died").',
            how_to_avoid: 'Identify intransitive verbs (occur, happen, fall, arrive, die, exist). If an exam choice puts them in passive "be + V3", immediately eliminate that choice!',
            frequency: 'Critical'
          },
          {
            trap: 'Mismatched singular/plural auxiliary agreement when changing from active object to passive subject.',
            how_to_avoid: 'If active object is plural ("reports"), passive auxiliary must be plural: "The reports were submitted", NOT "was submitted".',
            frequency: 'Critical'
          }
        ],
        practice_questions: [
          {
            question: 'During the annual community cleanup campaign, hundreds of tons of recyclable plastic waste ________ from the riverbanks.',
            options: ['A) collected', 'B) were collected', 'C) was collected', 'D) are collecting'],
            correct_option: 1,
            explanation: 'The plural subject "hundreds of tons... of waste" in the past tense requires the plural past passive auxiliary "were collected".'
          },
          {
            question: 'Which of the following sentences is grammatically correct in standard passive voice?',
            options: [
              'A) The historical discovery was occurred in 1974.',
              'B) Valuable ancient coins were found during the excavation.',
              'C) The accident was happened on the expressway.',
              'D) The solar eclipse was appeared at noon.'
            ],
            correct_option: 1,
            explanation: '"Occurred", "happened", and "appeared" are intransitive and cannot be passive; "were found" is correctly formed from the transitive verb "find".'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u6-1',
        unit_num: 6,
        word: 'Solidarity',
        part_of_speech: 'noun',
        pronunciation_guide: '/ˌsɒl.ɪˈdær.ə.ti/',
        definition: 'Mutual agreement, unity of feeling, and collective support among individuals with a common interest or purpose.',
        synonyms: ['unity', 'cohesion', 'mutual support', 'harmony', 'camaraderie'],
        antonyms: ['discord', 'division', 'fragmentation', 'isolation'],
        collocations: ['community solidarity', 'express solidarity', 'stand in solidarity'],
        ethiopian_example_sentence: 'Traditional Iddir institutions demonstrate powerful social solidarity by offering emotional and financial sustenance to grieving families.',
        morphology_derivatives: 'solidary (adj)',
        euee_exam_usage: 'Key concept in civic education and English comprehension examinations.'
      },
      {
        id: 'v-u6-2',
        unit_num: 6,
        word: 'Philanthropy',
        part_of_speech: 'noun',
        pronunciation_guide: '/fɪˈlæn.θrə.pi/',
        definition: 'The desire to promote the welfare of others, expressed especially by the generous donation of money, resources, or time to good causes.',
        synonyms: ['benevolence', 'generosity', 'humanitarianism', 'charity', 'altruism'],
        antonyms: ['miserliness', 'selfishness', 'malevolence'],
        collocations: ['corporate philanthropy', 'act of philanthropy', 'philanthropic foundation'],
        ethiopian_example_sentence: 'Community philanthropy funded the construction of three new science laboratories and a digital library at our regional high school.',
        morphology_derivatives: 'philanthropist (noun), philanthropic (adj)',
        euee_exam_usage: 'Appears in reading passages discussing social welfare and civic donations.'
      }
    ],
    speaking_functions: {
      function_name: 'Delivering Speeches on Community Leadership',
      key_phrases: [
        'Ladies and gentlemen, we are gathered here today to address...',
        'True community leadership begins when each of us contributes...',
        'Let us commit ourselves to ensuring that no elder or vulnerable child...',
        'Together, we can transform our local district through collective action.'
      ],
      example_dialogue: `A: "How can secondary school students mobilize support for local orphanages?"
B: "By organizing weekend tutoring clubs, staging charity cultural concerts, and coordinating book donation drives across neighboring schools."`
    },
    writing_craft: {
      topic: 'Formal Thank-You Letters & Civic Proposals',
      format_guide: 'Use formal business letter layout: Sender address, date, recipient title/address, formal salutation ("Dear Mr./Ms. [Name]"), clear purpose of writing, detailed body paragraph highlighting specific contributions, and formal complimentary close ("Sincerely," or "Yours faithfully,").',
      transition_connectors: ['On behalf of the student council...', 'We would like to convey our profound gratitude for...', 'Your generous contribution enabled us to...', 'We look forward to continued collaboration...'],
      model_paragraph: 'On behalf of the EthioLearn Student Civic Council, I am writing to express our heartfelt gratitude for your generous donation of 250 reference science textbooks to our school library. Your commitment to youth empowerment has directly impacted over 1,200 enrolled secondary students who now have daily access to high-quality academic literature. We truly appreciate your inspiring philanthropic leadership and look forward to partnering with your organization on future educational initiatives.'
    },
    euee_national_tips: [
      'Intransitive verbs (happen, occur, arrive, disappear, die) NEVER take passive voice on national exams.',
      'Check active-to-passive conversions carefully: Verify that the tense of the "be" verb matches the original active sentence tense.'
    ]
  },
  {
    unit_num: 7,
    unit_title: 'Traditional Games',
    reading_title: 'Indigenous Ethiopian Sports: Genna, Gugs, and Gebeta',
    reading_synopsis: 'Celebrates the cultural heritage, sportsmanship, and physical coordination of traditional Ethiopian sports. Explores Genna (indigenous field hockey), Ye-Feres Gugs (equestrian javelin martial games), and Gebeta (mancala count-and-capture strategy game).',
    grammar_focus: 'Zero and First Conditionals (Real Possibilities and Universal Rules)',
    grammar_rules: [
      {
        id: 'g9-eng-u7-g1',
        unit_num: 7,
        unit_title: 'Traditional Games',
        topic_title: '7.3 Zero and First Conditionals',
        grammar_topic: 'Universal Rules, Scientific Facts & Real Future Conditions',
        rule_summary: 'Use the Zero Conditional for universal truths, scientific facts, and automatic game rules (If + Simple Present, Simple Present). Use the First Conditional for realistic future possibilities and their likely consequences (If + Simple Present, will + base verb).',
        formula_syntax: 'Zero Conditional: If/When + Simple Present, Simple Present | First Conditional: If + Simple Present, will/can/may + V1',
        positive_example: 'Zero: If a player touches the ball with their hand in Genna, the referee awards a penalty. | First: If our school team trains rigorously this week, they will win the regional championship.',
        negative_example: 'Zero: If there is no referee, players do not start the match. | First: Unless you practice daily, you will not master the tactics of Gebeta.',
        question_example: 'Zero: What happens if a player steps outside the boundary line? | First: If it rains tomorrow afternoon, will the committee postpone the equestrian tournament?',
        key_points: [
          '"Unless" means "If... not": "Unless you score, you lose" = "If you do not score, you lose". Never put a negative verb after "unless"!',
          'Comma rule: If the "If"-clause comes first, place a comma after it. If the main clause comes first, do NOT use a comma.',
          'Modal variations in First Conditional: "If you finish early, you can join the game (permission)" or "If they practice hard, they may win (possibility)".'
        ],
        common_errors: [
          {
            incorrect: 'If you will play fair, everyone will respect you.',
            correct: 'If you play fair, everyone will respect you.',
            explanation: 'Never use "will" in the "If"-condition clause of a first conditional sentence!'
          },
          {
            incorrect: 'Unless you don\'t wear protective gear, you will get hurt.',
            correct: 'Unless you wear protective gear, you will get hurt.',
            explanation: '"Unless" already contains the negative meaning; using a double negative ("don\'t wear") is grammatically incorrect.'
          }
        ],
        euee_traps: [
          {
            trap: 'Inserting "will" into the "if" clause ("If he will come, we will start").',
            how_to_avoid: 'Always ensure the verb in the "if" clause is in the Simple Present ("If he comes...").',
            frequency: 'Critical'
          },
          {
            trap: 'Double negative with "unless" ("Unless you don\'t study...").',
            how_to_avoid: '"Unless" must always be followed by an affirmative clause ("Unless you study...").',
            frequency: 'High'
          }
        ],
        practice_questions: [
          {
            question: 'In the game of Gebeta, if a player ________ their last pebble in an empty pit on their own side, they capture all seeds in the opposite pit.',
            options: ['A) drops', 'B) will drop', 'C) dropped', 'D) is dropping'],
            correct_option: 0,
            explanation: 'This describes an established universal game rule (Zero Conditional), which requires the Simple Present ("drops").'
          },
          {
            question: 'Unless the equestrian riders ________ strict safety helmets, the organizers will disqualify them from the Gugs competition.',
            options: ['A) will not wear', 'B) don\'t wear', 'C) wear', 'D) wore'],
            correct_option: 2,
            explanation: '"Unless" already means "if they do not", so it must be followed by the affirmative Simple Present verb ("wear").'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u7-1',
        unit_num: 7,
        word: 'Agility',
        part_of_speech: 'noun',
        pronunciation_guide: '/əˈdʒɪl.ə.ti/',
        definition: 'The ability to move quickly, easily, and with graceful control; mental sharpness.',
        synonyms: ['nimbleness', 'quickness', 'dexterity', 'suppleness', 'alertness'],
        antonyms: ['clumsiness', 'sluggishness', 'stiffness'],
        collocations: ['physical agility', 'mental agility', 'test one\'s agility'],
        ethiopian_example_sentence: 'Traditional Genna players exhibit astonishing physical agility as they dodge opposing sticks across open festival fields.',
        morphology_derivatives: 'agile (adj), agilely (adv)',
        euee_exam_usage: 'Appears in sports and biological coordination passages.'
      },
      {
        id: 'v-u7-2',
        unit_num: 7,
        word: 'Equestrian',
        part_of_speech: 'adjective / noun',
        pronunciation_guide: '/ɪˈkwes.tri.ən/',
        definition: 'Relating to horse riding, horsemanship, or mounted combat skills.',
        synonyms: ['horse-riding', 'mounted', 'cavalry'],
        antonyms: ['pedestrian'],
        collocations: ['equestrian sport', 'equestrian skills', 'equestrian tournament'],
        ethiopian_example_sentence: 'Ye-Feres Gugs is a traditional equestrian martial sport where mounted horsemen showcase daring speed and shield defense.',
        morphology_derivatives: 'equestrianism (noun)',
        euee_exam_usage: 'Frequent cultural vocabulary term in national curriculum examinations.'
      }
    ],
    speaking_functions: {
      function_name: 'Explaining Game Rules & Sequential Instructions',
      key_phrases: [
        'The primary objective of the game is to...',
        'To begin the match, each player is allocated...',
        'Whenever a competitor scores a goal, the referee...',
        'Remember that stepping outside the marked line results in...'
      ],
      example_dialogue: `A: "How do you determine the winner in a match of Gebeta?"
B: "Players take turns distributing seeds counterclockwise around the pits. When all seeds are cleared, the player who has captured the largest count of seeds in their treasury wins the contest."`
    },
    writing_craft: {
      topic: 'Instructional Rulebooks & Process Analysis',
      format_guide: 'Use clear numbered chronological steps, precise imperatives, condition statements ("If a foul occurs..."), and equipment/player requirements.',
      transition_connectors: ['Step 1: Preparation...', 'Subsequently...', 'In the event of a tie...', 'The match concludes when...'],
      model_paragraph: 'To set up a match of Genna, two teams of ten players each assemble on an open field with curved wooden sticks called "Gennan" and a hard wooden ball called "Rur." Play commences at the center circle when the chief referee tosses the ball upward between opposing captains. Players must pass the ball exclusively using their sticks while advancing toward the opposing goal line. If a player intentionally trips an opponent, a five-minute penalty is immediately assessed. The team that scores the highest number of goals before dusk is declared the victor.'
    },
    euee_national_tips: [
      'Conditionals are guaranteed marks on EUEE: Never put "will" inside the "if" clause.',
      'Remember that "unless" already means "if not", so the verb following "unless" must be affirmative.'
    ]
  },
  {
    unit_num: 8,
    unit_title: 'Healthy Living',
    reading_title: 'Nutritional Science, Hydration, and Preventative Healthcare',
    reading_synopsis: 'Explores balanced diets (carbohydrates, proteins, micronutrients, healthy lipids), benefits of aerobic exercise, daily hydration, mental wellness, and personal hygiene in preventing lifestyle and communicable diseases.',
    grammar_focus: 'Defining and Non-Defining Relative Clauses (Who, Whom, Whose, Which, That, Where)',
    grammar_rules: [
      {
        id: 'g9-eng-u8-g1',
        unit_num: 8,
        unit_title: 'Healthy Living',
        topic_title: '8.3 Defining and Non-Defining Relative Clauses',
        grammar_topic: 'Relative Pronouns & Essential vs. Extra Information',
        rule_summary: 'Relative clauses provide additional information about nouns. Defining relative clauses provide essential information needed to identify the noun (NO commas; "that" can replace "which/who"). Non-defining relative clauses provide extra, non-essential information (MUST be enclosed in commas; "that" CANNOT be used).',
        formula_syntax: 'Defining: Noun + who/which/that/whose + clause (No Commas) | Non-defining: Noun, who/which/whose + clause, (Commas Required)',
        positive_example: 'Defining: Students who consume balanced meals concentrate better. | Non-defining: Teff, which is an indigenous Ethiopian grain, contains high amounts of iron and calcium.',
        negative_example: 'Defining: The clinic that does not maintain clean water risks spreading infections. | Non-defining: Dr. Abebe, who does not work on weekends, attended the seminar.',
        question_example: 'Is that the nutritionist whose research on malnutrition won the national prize? | Where is the sports center where we exercise?',
        key_points: [
          'Relative Pronoun Selection: "Who" (people/subject), "Whom" (people/object - formal), "Whose" (possession), "Which" (things/animals), "That" (people/things in defining clauses only), "Where" (places), "When" (times).',
          'Omitting the relative pronoun: In defining clauses, the relative pronoun CAN be omitted if it is the OBJECT of the verb: "The diet (which) she recommended was effective."',
          '"That" can NEVER be used in non-defining clauses with commas!'
        ],
        common_errors: [
          {
            incorrect: 'Teff, that is grown in Ethiopia, is rich in minerals.',
            correct: 'Teff, which is grown in Ethiopia, is rich in minerals.',
            explanation: 'In non-defining relative clauses (with commas), you MUST use "which", never "that".'
          },
          {
            incorrect: 'The athlete which won the marathon broke the record.',
            correct: 'The athlete who/that won the marathon broke the record.',
            explanation: 'Use "who" or "that" for persons, never "which".'
          }
        ],
        euee_traps: [
          {
            trap: 'Using "that" after a comma in non-defining clauses.',
            how_to_avoid: 'If there is a comma before the blank space, immediately eliminate "that"! Choose "which" (for things) or "who" (for people).',
            frequency: 'Critical'
          },
          {
            trap: 'Confusing "whose" (possessive pronoun) with "who\'s" (contraction of who is / who has).',
            how_to_avoid: '"Whose" shows ownership ("the doctor whose clinic..."); "Who\'s" means who is ("the doctor who\'s on duty").',
            frequency: 'High'
          }
        ],
        practice_questions: [
          {
            question: 'Enset, ________ is widely cultivated across southwestern Ethiopia, provides a drought-resilient food staple for millions.',
            options: ['A) that', 'B) which', 'C) who', 'D) whose'],
            correct_option: 1,
            explanation: 'The clause is non-defining (enclosed by commas), so "which" is the only correct pronoun for a plant/crop.'
          },
          {
            question: 'The medical researcher ________ study on micronutrient deficiencies was published last month received national recognition.',
            options: ['A) who', 'B) whom', 'C) whose', 'D) who\'s'],
            correct_option: 2,
            explanation: 'The sentence indicates possession ("her study was published"), requiring the possessive relative pronoun "whose".'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u8-1',
        unit_num: 8,
        word: 'Hydration',
        part_of_speech: 'noun',
        pronunciation_guide: '/haɪˈdreɪ.ʃən/',
        definition: 'The process of absorbing and maintaining adequate water in the biological tissues of the body.',
        synonyms: ['fluid balance', 'moisturization', 'water intake'],
        antonyms: ['dehydration', 'dryness'],
        collocations: ['adequate hydration', 'maintain hydration', 'electrolyte hydration'],
        ethiopian_example_sentence: 'Maintaining adequate hydration is crucial for endurance athletes training at high altitudes around Sululta and Bekoji.',
        morphology_derivatives: 'hydrate (verb), dehydrated (adj), dehydration (noun)',
        euee_exam_usage: 'Core vocabulary in biological health and sports fitness passages.'
      },
      {
        id: 'v-u8-2',
        unit_num: 8,
        word: 'Nutritious',
        part_of_speech: 'adjective',
        pronunciation_guide: '/njuːˈtrɪʃ.əs/',
        definition: 'Containing substances with high food value that are essential for physical growth, repair, and vital biological functions.',
        synonyms: ['nourishing', 'wholesome', 'healthful', 'nutrient-rich'],
        antonyms: ['unwholesome', 'junk', 'deleterious', 'deficient'],
        collocations: ['nutritious diet', 'nutritious meal', 'highly nutritious'],
        ethiopian_example_sentence: 'A balanced diet combining legumes, whole grains, and fresh vegetables provides highly nutritious fuel for growing adolescents.',
        morphology_derivatives: 'nutrition (noun), nutritionist (noun), nutrient (noun), nurture (verb)',
        euee_exam_usage: 'Tested frequently in antonym/synonym sections.'
      }
    ],
    speaking_functions: {
      function_name: 'Conducting Health Interviews & Giving Wellness Advice',
      key_phrases: [
        'How many hours of restful sleep do you typically average?',
        'If you experience fatigue during study sessions, you might consider...',
        'According to dietary guidelines, one should incorporate...',
        'Regular aerobic exercise not only strengthens cardiovascular endurance but also...'
      ],
      example_dialogue: `A: "What simple lifestyle adjustments can students adopt to enhance their academic stamina?"
B: "First, drink at least two liters of clean water daily. Second, replace sugary snacks with roasted chickpeas (Kolo) and fresh fruit. Finally, engage in thirty minutes of brisk walking every afternoon."`
    },
    writing_craft: {
      topic: 'Health Advisory Articles for School Publications',
      format_guide: 'Use an engaging heading, clear bulleted action points, scientific justifications for each recommendation, and an empowering concluding motto.',
      transition_connectors: ['First and foremost...', 'In addition to physical activity...', 'Equally important is...', 'In summary...'],
      model_paragraph: 'Sound academic achievement is inextricably linked to daily physical wellness. When students prioritize balanced nutrition—incorporating iron-rich teff, legumes, and fresh leafy vegetables—their cognitive focus and memory retention surge dramatically. Furthermore, maintaining consistent hydration and securing eight hours of sleep prevents mental fatigue during rigorous examination preparation. By cultivating these preventative habits today, secondary students build lifelong foundations for intellectual vitality and physical vigor.'
    },
    euee_national_tips: [
      'Golden Rule of Relative Clauses: Never use "that" after a comma in non-defining relative clauses.',
      'Use "whose" when connecting possession ("the student whose book...", "the country whose capital...")'
    ]
  },
  {
    unit_num: 9,
    unit_title: 'Climate and Environment',
    reading_title: 'Climate Resilience, Green Legacy Reforestation, and Soil Conservation',
    reading_synopsis: 'Analyzes climate change dynamics in the Horn of Africa, recurring drought mitigation, watershed management, renewable energy expansion (hydro, solar, geothermal), and national afforestation programs (Green Legacy Initiative).',
    grammar_focus: 'Cause and Effect Connectors (Because, Since, Due to, As a result of, Consequently, Therefore)',
    grammar_rules: [
      {
        id: 'g9-eng-u9-g1',
        unit_num: 9,
        unit_title: 'Climate and Environment',
        topic_title: '9.3 Cause and Effect Connectors & Sentence Linking',
        grammar_topic: 'Conjunctions vs. Prepositional Phrases vs. Transition Adverbs',
        rule_summary: 'Cause and effect relationships are expressed through subordinating conjunctions (because, since, as + clause), prepositional phrases (because of, due to, owing to, as a result of + noun phrase), or transition adverbs (consequently, therefore, as a result + sentence).',
        formula_syntax: 'Clause: Because / Since / As + Subject + Verb | Preposition: Due to / Because of + Noun Phrase / V-ing | Transition: Clause; therefore / consequently, Clause',
        positive_example: 'Preposition: Due to extensive reforestation under the Green Legacy, topsoil erosion decreased. | Conjunction: Because the community planted trees, the hillsides retained moisture. | Adverb: The rains failed; consequently, farmers relied on irrigation.',
        negative_example: 'They did not abandon their farms because of drought. | The river did not dry up since watershed terraces were maintained.',
        question_example: 'Why did the soil erode so rapidly? Was it due to overgrazing?',
        key_points: [
          '"Because" is followed by a FULL CLAUSE (Subject + Verb): "Because it rained heavily..."',
          '"Because of" and "Due to" are followed by a NOUN PHRASE: "Because of the heavy rain..."',
          '"Therefore" and "Consequently" link two independent sentences and are preceded by a semicolon or period and followed by a comma: "Deforestation accelerated; consequently, gully erosion deepened."'
        ],
        common_errors: [
          {
            incorrect: 'Due to it was raining, the environmental rally was postponed.',
            correct: 'Because it was raining, the environmental rally was postponed. / Due to the rain, the rally was postponed.',
            explanation: '"Due to" is a preposition and must be followed by a noun phrase, not a subject-verb clause.'
          },
          {
            incorrect: 'Because of she worked hard, she passed the exam.',
            correct: 'Because she worked hard, she passed the exam.',
            explanation: '"Because of" cannot take a subject + verb clause ("she worked hard"); use "Because".'
          }
        ],
        euee_traps: [
          {
            trap: 'Mixing up "because" (takes a clause) with "because of / due to" (takes a noun phrase).',
            how_to_avoid: 'Look immediately after the blank space: If you see [Subject + Verb], choose "because / since". If you see just a [Noun / Noun phrase], choose "due to / because of".',
            frequency: 'Critical'
          },
          {
            trap: 'Using "because" and "so / therefore" in the same sentence ("Because it rained, so we stayed home").',
            how_to_avoid: 'Never use both a cause conjunction and a result connector in the same sentence. Use either "Because it rained, we stayed home" OR "It rained; therefore, we stayed home".',
            frequency: 'High'
          }
        ],
        practice_questions: [
          {
            question: '________ the prompt implementation of stone bund terracing, the mountain hillside resisted severe gully erosion.',
            options: ['A) Because', 'B) Due to', 'C) Since', 'D) Consequently'],
            correct_option: 1,
            explanation: 'The phrase following the blank ("the prompt implementation...") is a noun phrase without a finite verb, requiring the preposition "Due to".'
          },
          {
            question: 'The community elders mobilized the youth; ________, thousands of indigenous acacia seedlings were planted before noon.',
            options: ['A) because', 'B) as a result', 'C) since', 'D) due to'],
            correct_option: 1,
            explanation: 'Preceded by a semicolon and followed by a comma, the conjunctive adverb "as a result" correctly expresses the consequence.'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u9-1',
        unit_num: 9,
        word: 'Reforestation',
        part_of_speech: 'noun',
        pronunciation_guide: '/riːˌfɒr.ɪˈsteɪ.ʃən/',
        definition: 'The natural or intentional restocking of existing depleted forests and woodlands that have been depleted through deforestation.',
        synonyms: ['replanting', 'afforestation', 'tree planting', 'forest restoration'],
        antonyms: ['deforestation', 'clear-cutting', 'desertification'],
        collocations: ['large-scale reforestation', 'reforestation campaign', 'reforestation initiative'],
        ethiopian_example_sentence: 'Ethiopia\'s ambitious Green Legacy campaign represents one of the largest mass reforestation movements in global history.',
        morphology_derivatives: 'reforest (verb), forested (adj), forestry (noun)',
        euee_exam_usage: 'Core term in geography and English environmental comprehension texts.'
      },
      {
        id: 'v-u9-2',
        unit_num: 9,
        word: 'Precipitation',
        part_of_speech: 'noun',
        pronunciation_guide: '/prɪˌsɪp.ɪˈteɪ.ʃən/',
        definition: 'Rain, snow, sleet, or hail that falls to the ground from clouds in the atmosphere.',
        synonyms: ['rainfall', 'downpour', 'rain', 'moisture'],
        antonyms: ['aridity', 'drought'],
        collocations: ['annual precipitation', 'heavy precipitation', 'erratic precipitation'],
        ethiopian_example_sentence: 'The southwestern highlands receive over 2,000 millimeters of annual precipitation, making them the most humid biome in the nation.',
        morphology_derivatives: 'precipitate (verb), precipitous (adj)',
        euee_exam_usage: 'Tested in scientific reading and vocabulary synonym questions.'
      }
    ],
    speaking_functions: {
      function_name: 'Proposing Environmental Solutions & Project Pitches',
      key_phrases: [
        'To tackle the issue of soil degradation, our proposal entails...',
        'The primary advantage of establishing a school tree nursery is...',
        'If we allocate fifteen minutes each Friday to terracing, the long-term impact will be...',
        'In conclusion, investing in renewable solar energy will significantly reduce...'
      ],
      example_dialogue: `A: "How can our school contribute concretely to combatting localized desertification?"
B: "We propose establishing an on-campus seedling nursery. By cultivating indigenous tid and acacia seedlings, our biology clubs can supply 5,000 saplings annually for watershed planting."`
    },
    writing_craft: {
      topic: 'Cause-and-Effect Analytical Essays',
      format_guide: 'Clearly distinguish between primary causes and downstream consequences. Use varied sentence structures with prepositional and conjunctive connectors (Because, As a consequence, Owing to, Thus).',
      transition_connectors: ['The primary catalyst behind this issue is...', 'As an immediate consequence...', 'Consequently...', 'In light of these factors...'],
      model_paragraph: 'Uncontrolled deforestation across highland watersheds triggers severe environmental cascades. When protective vegetative canopies are removed, torrential monsoon rains impact exposed topsoils directly. Consequently, millions of tons of fertile topsoil are stripped from mountain slopes annually and washed into river systems. As a result of this severe soil depletion, agricultural crop yields decline and reservoirs suffer from rapid siltation. To halt this cycle, integrated catchment reforestation and community soil terracing must be vigorously expanded.'
    },
    euee_national_tips: [
      'Check structure: Because + [Subject + Verb]; Due to / Because of + [Noun Phrase].',
      'Never double-link causes and effects: Do not use "Because..., therefore..." together in one sentence.'
    ]
  },
  {
    unit_num: 10,
    unit_title: 'Woodwork and Metalwork',
    reading_title: 'Traditional Craftsmanship, Metallurgy, and Technical Vocational Skills',
    reading_synopsis: 'Celebrates the cultural and economic importance of traditional artisans, carpenters, and blacksmiths in Ethiopian history. Covers woodworking tools, joinery, metal forging, modern vocational training (TVET), and workshop safety.',
    grammar_focus: 'Imperatives and Process Passive for Technical Instructions',
    grammar_rules: [
      {
        id: 'g9-eng-u10-g1',
        unit_num: 10,
        unit_title: 'Woodwork and Metalwork',
        topic_title: '10.3 Imperatives & Process Passive in Technical Instructions',
        grammar_topic: 'Direct Commands, Safety Warnings & Procedural Sequences',
        rule_summary: 'Use Imperatives (Base Verb V1 at sentence start) for direct step-by-step technical instructions and safety warnings. Use the Process Passive (is/are + V3) to describe industrial, chemical, or manufacturing procedures objectively.',
        formula_syntax: 'Imperative: Base Verb (V1) + Object | Negative Imperative: Do not / Never + V1 | Process Passive: Subject + is/are + V3',
        positive_example: 'Imperative: Measure the timber twice before sawing. | Process Passive: First, the metal rod is heated in the forge until it glows red.',
        negative_example: 'Imperative: Never operate the welding machine without safety goggles. | Process Passive: Corrosive chemicals are not stored near heat sources.',
        question_example: 'How is the dovetail joint assembled? | Is the workpiece clamped securely before drilling?',
        key_points: [
          'Imperative sentences have an implied subject "You": "(You) Wear protective earplugs."',
          'Sequential procedural adverbs: First, Next, Subsequently, Then, After that, Finally.',
          'Process Passive emphasizes standardized workflow: "The molten iron is poured into molds, and then it is allowed to cool slowly."'
        ],
        common_errors: [
          {
            incorrect: 'To wear safety goggles before turning on the lathe.',
            correct: 'Wear safety goggles before turning on the lathe.',
            explanation: 'Imperative instructions start with the base verb V1 ("Wear"), not the infinitive "To wear".'
          },
          {
            incorrect: 'Next, the timber is plane smooth.',
            correct: 'Next, the timber is planed smooth.',
            explanation: 'The process passive requires the past participle V3 ("planed").'
          }
        ],
        euee_traps: [
          {
            trap: 'Using continuous or infinitive verbs in imperative instruction questions ("To cut the board...", "Cutting the board...").',
            how_to_avoid: 'Standard instructional steps always begin with the bare imperative V1 ("Cut the board carefully").',
            frequency: 'Critical'
          },
          {
            trap: 'Subject-verb agreement in sequential process passives with multiple steps.',
            how_to_avoid: 'Check whether the material being processed is singular or plural ("The components are assembled", "The timber is cut").',
            frequency: 'Medium'
          }
        ],
        practice_questions: [
          {
            question: 'Before operating the electric circular saw, always ________ that the protective blade guard is locked securely.',
            options: ['A) checking', 'B) to check', 'C) check', 'D) checked'],
            correct_option: 2,
            explanation: 'An imperative instruction directed to the user requires the base verb form V1 ("check").'
          },
          {
            question: 'After the timber is measured, the joints ________ with a sharp chisel.',
            options: ['A) carve', 'B) are carved', 'C) is carving', 'D) were carved'],
            correct_option: 1,
            explanation: 'Describing a standard present procedural sequence with a plural subject ("joints") requires the present process passive "are carved".'
          }
        ]
      }
    ],
    vocabulary_list: [
      {
        id: 'v-u10-1',
        unit_num: 10,
        word: 'Craftsmanship',
        part_of_speech: 'noun',
        pronunciation_guide: '/ˈkrɑːfts.mən.ʃɪp/',
        definition: 'Skill and dexterity in a particular craft; the quality of design and work shown in something made by hand.',
        synonyms: ['artistry', 'workmanship', 'mastery', 'dexterity', 'expertise'],
        antonyms: ['incompetence', 'clumsiness', 'shoddy work'],
        collocations: ['exquisite craftsmanship', 'traditional craftsmanship', 'master craftsmanship'],
        ethiopian_example_sentence: 'The intricate hand-carved wooden doors and ceilings of traditional Ethiopian buildings showcase centuries of master craftsmanship.',
        morphology_derivatives: 'craftsman (noun), crafty (adj)',
        euee_exam_usage: 'Tested in cultural history and vocational technical passages.'
      },
      {
        id: 'v-u10-2',
        unit_num: 10,
        word: 'Precision',
        part_of_speech: 'noun',
        pronunciation_guide: '/prɪˈsɪʒ.ən/',
        definition: 'The quality, condition, or fact of being exact, accurate, and meticulously executed.',
        synonyms: ['accuracy', 'exactness', 'meticulousness', 'rigor'],
        antonyms: ['inaccuracy', 'imprecision', 'vagueness', 'sloppiness'],
        collocations: ['high precision', 'measured with precision', 'precision engineering'],
        ethiopian_example_sentence: 'Carpenters utilize vernier calipers and spirit levels to ensure high precision when fitting complex mortise and tenon wood joints.',
        morphology_derivatives: 'precise (adj), precisely (adv)',
        euee_exam_usage: 'Common vocabulary item in science and technical texts.'
      }
    ],
    speaking_functions: {
      function_name: 'Explaining Workshop Safety & Operational Steps',
      key_phrases: [
        'Before powering on any machinery, verify that...',
        'In the event of an electrical short circuit, immediately hit the...',
        'Always ensure your workpiece is clamped securely because...',
        'Let me demonstrate the proper grip and posture for sawing...'
      ],
      example_dialogue: `A: "What is the primary safety rule when operating an oxy-acetylene welding torch?"
B: "Always wear tinted protective goggles, check that gas cylinders are chained upright, and inspect hoses for leaks using soapy water before igniting the torch."`
    },
    writing_craft: {
      topic: 'Technical How-To Manuals & Safety Guides',
      format_guide: 'Include a clear title, necessary tool/material checklist, chronological numbered steps with bold imperative verbs, and prominent safety hazard warnings.',
      transition_connectors: ['Prior to assembly...', 'Step 1: Measurement...', 'Caution: Ensure that...', 'Final Step: Inspection...'],
      model_paragraph: 'To construct a standard wooden study stool, begin by selecting well-seasoned eucalyptus or wanza timber free from cracks. First, measure and cut four identical leg posts to a length of 45 centimeters using a crosscut saw. Next, plane all surfaces smooth and mark mortise positions with a marking gauge. Carefully chisel out the joints and apply water-resistant wood adhesive before clamping the framework securely for twenty-four hours. Finally, sand the completed stool with fine sandpaper and apply two coats of protective varnish.'
    },
    euee_national_tips: [
      'Technical instructions on exams always start with base verbs (Imperatives): e.g., "Insert the plug", NOT "Inserting the plug".',
      'Watch out for passive transformations in process descriptions: Subject + is/are + V3.'
    ]
  }
];
