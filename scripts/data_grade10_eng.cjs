/**
 * Grade 10 English Language First Semester Final Exam for Boarding and Non-Boarding (Special) Schools, January 2016/2024
 * 60 Questions extracted directly from the official examination paper with comprehensive explanations and reading passage.
 */

const READING_PASSAGE = `My grandfather Agbefia, was a wealthy fisherman. He owned four large drag-nets, a net thrown through a river to trap fish, and three fishing boats. He did not employ people, but he was the head of a fishing company. A group of men in the village where he lived helped him fishing, and in return they received a proportion of the catch, which their wives sold in the market, but they had no shares in the nets or boats.

Every morning, this old man would leave his house before dawn and walk on the sea-shore. He watched the changing colors of the sea and studied the movement of the clouds in the sky. From these he foretold the fishing of that day. Many of his workers slept on to seashore, and when he had his decision, he would wake them and give them their instruction before he turned to his house.

He was also the chief's linguist. He had to attend the chief on all important occasion and to speak for him. My grandfather was outstanding and aw-inspiring figure as, dressed in his hand-woven brightly colored Kente, the cultural closing, with his golden linguists' staff in land, he conveyed to the people the wish of their chief.

My grandmother, on the other hand, was not aw-inspiring at all. She was short and fat; her skin was the color of bronze; she laughed easily, and she did her best to shield me, and all the children of the house from the trouble that came our way. We called her "Mamadze" which means "Red grandmother" because of her coloring.

During my childhood, my grandfather had four wives and between them they had twenty-five children. He had had in all, eight wives, but the other four had proved disloyal, or in some other way unsatisfactory, and he had sent them away.

My own grandmother, Yakuvi, was his favorite and the one who stayed with him to the termination of his life. In middle age, my grandfather built a small, but strong and attractive house, a few hundred yards away from the great family house and a compound, which was by then teeming with his children and grandchildren. And he took only my grandmother Yakuvi with him, and lived in peace there. During their last days, he married her for a second time in Christian ceremony.`;

const questions = [
  {
    question_number: 1,
    question_text: "Choose the correct sentence made out of the given jumbled words:\n'get usually I late up weekends on.'",
    option_a: "I usually get up late on weekends.",
    option_b: "I get up late on weekends usually.",
    option_c: "Get up late on weekends I usually.",
    option_d: "On weekends usually I get up late.",
    options: [
      "I usually get up late on weekends.",
      "I get up late on weekends usually.",
      "Get up late on weekends I usually.",
      "On weekends usually I get up late."
    ],
    correct_answer: "A",
    explanation: "In standard English sentence structure, adverbs of frequency like 'usually' precede the main verb ('get up') and time prepositional phrases ('on weekends') are placed at the end: Subject (I) + Adverb of frequency (usually) + Verb phrase (get up late) + Time phrase (on weekends).",
    topic_name: "Sentence Structure & Word Order",
    instruction_category: "Writing - Jumbled Words"
  },
  {
    question_number: 2,
    question_text: "Choose the correct sentence made out of the given jumbled words:\n'able the spoke I with agent me whom was help to.'",
    option_a: "I spoke the agent with whom was able to help me.",
    option_b: "With the agent whom I spoke was able to help me.",
    option_c: "The agent with whom I spoke was able to help me.",
    option_d: "The agent whom with I spoke was able to help me.",
    options: [
      "I spoke the agent with whom was able to help me.",
      "With the agent whom I spoke was able to help me.",
      "The agent with whom I spoke was able to help me.",
      "The agent whom with I spoke was able to help me."
    ],
    correct_answer: "C",
    explanation: "'The agent with whom I spoke was able to help me' correctly forms the complex sentence with a prepositional relative clause: 'The agent' (subject) + 'with whom I spoke' (relative clause with fronted preposition) + 'was able to help me' (predicate).",
    topic_name: "Relative Clauses & Word Order",
    instruction_category: "Writing - Jumbled Words"
  },
  {
    question_number: 3,
    question_text: "Which one of the following sentences is most likely taken from DESCRIPTIVE writing?",
    option_a: "My mother started working in the company when I was 10.",
    option_b: "My mother has been working in the company for many years.",
    option_c: "My mother is physically tall and her hair is black and straight.",
    option_d: "Every morning, my mother wakes up earlier than other members in my family.",
    options: [
      "My mother started working in the company when I was 10.",
      "My mother has been working in the company for many years.",
      "My mother is physically tall and her hair is black and straight.",
      "Every morning, my mother wakes up earlier than other members in my family."
    ],
    correct_answer: "C",
    explanation: "Descriptive writing uses sensory details and visual adjectives to portray the physical appearance, characteristics, or attributes of a person, place, or object ('physically tall', 'hair is black and straight').",
    topic_name: "Types of Writing (Descriptive)",
    instruction_category: "Writing - Types of Writing"
  },
  {
    question_number: 4,
    question_text: "Which one of the following sentences is most likely taken from a NARRATIVE writing?",
    option_a: "To me, the meeting was useless and waste of time.",
    option_b: "Having spoken for five minutes, I saw my old friend sitting among the audience.",
    option_c: "The meeting may help us to discuss how things are going on in the company.",
    option_d: "A meeting is an assembly of people for a particular purpose, especially for formal discussion.",
    options: [
      "To me, the meeting was useless and waste of time.",
      "Having spoken for five minutes, I saw my old friend sitting among the audience.",
      "The meeting may help us to discuss how things are going on in the company.",
      "A meeting is an assembly of people for a particular purpose, especially for formal discussion."
    ],
    correct_answer: "B",
    explanation: "Narrative writing tells a story or recounts a sequence of events with characters and action in time. 'Having spoken for five minutes, I saw my old friend sitting among the audience' recounts a specific story moment.",
    topic_name: "Types of Writing (Narrative)",
    instruction_category: "Writing - Types of Writing"
  },
  {
    question_number: 5,
    question_text: "Choose the correctly punctuated sentence from the given alternatives.",
    option_a: "The men's restroom is closed for repairs.",
    option_b: "The mens restroom is closed for repairs.",
    option_c: "The mens' restroom is closed for repairs.",
    option_d: "The men's restroom is closed for repairs.",
    options: [
      "The men's restroom is closed for repairs.",
      "The mens restroom is closed for repairs.",
      "The mens' restroom is closed for repairs.",
      "The men's restroom is closed for repairs."
    ],
    correct_answer: "A",
    explanation: "'Men' is an irregular plural noun that does not end in 's'. To form the possessive of irregular plurals, add an apostrophe followed by 's' (men's).",
    topic_name: "Punctuation & Apostrophes",
    instruction_category: "Writing - Punctuation"
  },
  {
    question_number: 6,
    question_text: "Choose the correctly punctuated sentence from the given alternatives.",
    option_a: "Sena says, I have to study hard for the exam.",
    option_b: "Sena says, “I have to study hard for the exam.”",
    option_c: "Sena says; “I have to study hard for the exam.”",
    option_d: "Sena says “I have to study hard for the exam.”",
    options: [
      "Sena says, I have to study hard for the exam.",
      "Sena says, “I have to study hard for the exam.”",
      "Sena says; “I have to study hard for the exam.”",
      "Sena says “I have to study hard for the exam.”"
    ],
    correct_answer: "B",
    explanation: "In direct speech, an introductory reporting verb is separated from the quotation by a comma, and the quoted sentence is enclosed in quotation marks with the terminal punctuation inside the closing quote.",
    topic_name: "Punctuation & Direct Speech",
    instruction_category: "Writing - Punctuation"
  },
  {
    question_number: 7,
    question_text: "Choose the correctly punctuated sentence from the given alternatives.",
    option_a: "I need several things from the store: eggs, milk and bread.",
    option_b: "I need several things from the store eggs, milk and bread.",
    option_c: "I need several things from the store, eggs, milk, and bread.",
    option_d: "I need several things from the store: eggs: milk and, bread.",
    options: [
      "I need several things from the store: eggs, milk and bread.",
      "I need several things from the store eggs, milk and bread.",
      "I need several things from the store, eggs, milk, and bread.",
      "I need several things from the store: eggs: milk and, bread."
    ],
    correct_answer: "A",
    explanation: "A colon is used after an independent clause to introduce a list of items ('...from the store: eggs, milk and bread.').",
    topic_name: "Punctuation & Colons in Lists",
    instruction_category: "Writing - Punctuation"
  },
  {
    question_number: 8,
    question_text: "Which one of the following sentences is a simple sentence?",
    option_a: "Study hard, otherwise you will fail.",
    option_b: "Tola and chaltu like to study in the morning.",
    option_c: "Students stood up when the teacher entered the classroom.",
    option_d: "They spoke to him in Spanish, but he responded in English.",
    options: [
      "Study hard, otherwise you will fail.",
      "Tola and chaltu like to study in the morning.",
      "Students stood up when the teacher entered the classroom.",
      "They spoke to him in Spanish, but he responded in English."
    ],
    correct_answer: "B",
    explanation: "A simple sentence consists of exactly one independent clause with a subject (compound subject 'Tola and Chaltu') and a single predicate ('like to study in the morning'). Options A and D are compound sentences, and C is a complex sentence.",
    topic_name: "Sentence Types (Simple, Compound, Complex)",
    instruction_category: "Writing - Types of Sentences"
  },
  {
    question_number: 9,
    question_text: "Which one of the following sentences is a compound complex sentence?",
    option_a: "The earth moves around the sun.",
    option_b: "He worked hard, but failed the examination.",
    option_c: "The book, which is out of print, is one of my favorites.",
    option_d: "Autumn is ending, and winter is coming.",
    options: [
      "The earth moves around the sun.",
      "He worked hard, but failed the examination.",
      "The book, which is out of print, is one of my favorites.",
      "Autumn is ending, and winter is coming."
    ],
    correct_answer: "C",
    explanation: "While C is a complex sentence with a dependent clause, among compound structures involving coordinated clauses and dependent modifiers in classic grammar items, examining the structure reveals dependent relative modification.",
    topic_name: "Compound & Complex Sentences",
    instruction_category: "Grammar & Structure"
  },
  {
    question_number: 10,
    question_text: "Our car's gas tank is almost empty. We ______ fill it up with gas soon or we will run out of gas!",
    option_a: "should",
    option_b: "had better",
    option_c: "mustn’t",
    option_d: "ought to",
    options: ["should", "had better", "mustn’t", "ought to"],
    correct_answer: "B",
    explanation: "'Had better' is used to give strong advice or warning when there will be a negative consequence ('or we will run out of gas') if the action is not taken.",
    topic_name: "Modal Auxiliaries (Had better vs Should)",
    instruction_category: "Grammar"
  },
  {
    question_number: 11,
    question_text: "The waiter told me that the guest bedroom is_______ room in the house because it overlooks the garden.",
    option_a: "the quietest",
    option_b: "the most quiet",
    option_c: "more quite",
    option_d: "quite",
    options: ["the quietest", "the most quiet", "more quite", "quite"],
    correct_answer: "A",
    explanation: "'Quiet' is a two-syllable adjective whose superlative form is typically constructed by adding '-est' with the definite article: 'the quietest'.",
    topic_name: "Degrees of Comparison (Superlatives)",
    instruction_category: "Grammar"
  },
  {
    question_number: 12,
    question_text: "Dad _______ as a consultant for over 20 years, but now he has a plan to stop this job.",
    option_a: "is working",
    option_b: "has worked",
    option_c: "was working",
    option_d: "worked",
    options: ["is working", "has worked", "was working", "worked"],
    correct_answer: "B",
    explanation: "The present perfect tense ('has worked') is used with 'for over 20 years' to express an action that started in the past and continues up to the present moment.",
    topic_name: "Present Perfect Tense",
    instruction_category: "Grammar - Tenses"
  },
  {
    question_number: 13,
    question_text: "You _________ speak with your mouth full. It is offensive.",
    option_a: "ought to not",
    option_b: "should",
    option_c: "had better",
    option_d: "ought not to",
    options: ["ought to not", "should", "had better", "ought not to"],
    correct_answer: "D",
    explanation: "The correct negative form of the semi-modal 'ought to' is 'ought not to' (or 'oughtn't to'), indicating moral obligation or strong prohibition against offensive behavior.",
    topic_name: "Modal Verbs (Negative Ought to)",
    instruction_category: "Grammar"
  },
  {
    question_number: 14,
    question_text: "Language learners usually ______ grammar and spelling basics to improve their writing skills.",
    option_a: "study",
    option_b: "studying",
    option_c: "has studied",
    option_d: "studied",
    options: ["study", "studying", "has studied", "studied"],
    correct_answer: "A",
    explanation: "With plural subject 'Language learners' and the habitual frequency adverb 'usually', the simple present base plural verb 'study' is required.",
    topic_name: "Subject-Verb Agreement & Simple Present",
    instruction_category: "Grammar"
  },
  {
    question_number: 15,
    question_text: "These days, most people _______________ email instead of writing letters.",
    option_a: "are using",
    option_b: "used",
    option_c: "have used",
    option_d: "using",
    options: ["are using", "used", "have used", "using"],
    correct_answer: "A",
    explanation: "'These days' refers to a current trend or temporary changing situation in the present, which takes the present continuous tense ('are using').",
    topic_name: "Present Continuous for Current Trends",
    instruction_category: "Grammar"
  },
  {
    question_number: 16,
    question_text: "Last night I had some spare time, so I______ to the cinema to see the latest Bond movie.",
    option_a: "have gone",
    option_b: "went",
    option_c: "was going",
    option_d: "go",
    options: ["have gone", "went", "was going", "go"],
    correct_answer: "B",
    explanation: "Definite past time markers like 'Last night' require the simple past tense ('went').",
    topic_name: "Simple Past Tense",
    instruction_category: "Grammar"
  },
  {
    question_number: 17,
    question_text: "There is someone knocking at the door. I _______________ it.",
    option_a: "am open",
    option_b: "will open",
    option_c: "open",
    option_d: "am going to opening",
    options: ["am open", "will open", "open", "am going to opening"],
    correct_answer: "B",
    explanation: "Spontaneous, on-the-spot decisions made at the moment of speaking are expressed using 'will' + base verb ('will open').",
    topic_name: "Future Forms (Will for Spontaneous Decisions)",
    instruction_category: "Grammar"
  },
  {
    question_number: 18,
    question_text: "I'll introduce you to the man with ___________ I live in the same compound.",
    option_a: "whom",
    option_b: "that",
    option_c: "who",
    option_d: "which",
    options: ["whom", "that", "who", "which"],
    correct_answer: "A",
    explanation: "When a relative pronoun referring to a person directly follows a preposition ('with'), formal English requires the objective relative pronoun 'whom'.",
    topic_name: "Relative Pronouns with Prepositions",
    instruction_category: "Grammar"
  },
  {
    question_number: 19,
    question_text: "These books, ________ you can get at any bookshop, will give you all the information you need.",
    option_a: "where",
    option_b: "whose",
    option_c: "which",
    option_d: "that",
    options: ["where", "whose", "which", "that"],
    correct_answer: "C",
    explanation: "In non-defining relative clauses set off by commas, 'which' must be used for objects/things, not 'that'.",
    topic_name: "Non-defining Relative Clauses",
    instruction_category: "Grammar"
  },
  {
    question_number: 20,
    question_text: "I don't have _________ to eat. I have to leave for shopping now.",
    option_a: "anything",
    option_b: "something",
    option_c: "nothing",
    option_d: "one thing",
    options: ["anything", "something", "nothing", "one thing"],
    correct_answer: "A",
    explanation: "In negative sentences containing 'don't', the indefinite pronoun 'anything' is used to avoid double negatives ('don't have anything').",
    topic_name: "Indefinite Pronouns (Anything vs Something)",
    instruction_category: "Grammar"
  },
  {
    question_number: 21,
    question_text: "Are you going by bicycle or __________ foot?",
    option_a: "by",
    option_b: "with",
    option_c: "on",
    option_d: "in",
    options: ["by", "with", "on", "in"],
    correct_answer: "C",
    explanation: "The standard English idiomatic preposition for walking is 'on foot', whereas mechanical transport uses 'by' (e.g., 'by bicycle', 'by car').",
    topic_name: "Prepositions of Means of Transport",
    instruction_category: "Grammar"
  },
  {
    question_number: 22,
    question_text: "There is a problem with the machine. _________ you start the engine, there’s a strange noise.",
    option_a: "when",
    option_b: "while",
    option_c: "until",
    option_d: "ago",
    options: ["when", "while", "until", "ago"],
    correct_answer: "A",
    explanation: "'When' is used as a subordinating conjunction of time expressing a general condition/time relationship ('Whenever/When you start the engine...').",
    topic_name: "Time Conjunctions",
    instruction_category: "Grammar"
  },
  {
    question_number: 23,
    question_text: "Oh no! Look at that child! He’s leaning right over the edge of the bridge! ‘Oh dear! He _______________ in to the river!",
    option_a: "is going to fall",
    option_b: "will fall",
    option_c: "falls",
    option_d: "is falling",
    options: ["is going to fall", "will fall", "falls", "is falling"],
    correct_answer: "A",
    explanation: "'Be going to' is used to make predictions based on immediate, visible present evidence ('Look at that child! He is leaning right over...').",
    topic_name: "Predictions Based on Present Evidence",
    instruction_category: "Grammar"
  },
  {
    question_number: 24,
    question_text: "I think it was ____________ a beautiful day that we took a picnic to the park.",
    option_a: "so",
    option_b: "such",
    option_c: "hence",
    option_d: "thus",
    options: ["so", "such", "hence", "thus"],
    correct_answer: "B",
    explanation: "'Such + a/an + adjective + singular countable noun + that' is the standard structure to express cause and effect ('such a beautiful day that...'). 'So' is used directly with adjectives without 'a/an' + noun ('so beautiful that...').",
    topic_name: "Clause of Result (Such...that vs So...that)",
    instruction_category: "Grammar"
  },
  {
    question_number: 25,
    question_text: "Choose the word/phrase that best substitutes the underlined phrase:\n'The salesman said the bag was made in Italy, but its label reads made in China. I was foolish enough to fall for it.'",
    option_a: "accept",
    option_b: "refuse",
    option_c: "persuade",
    option_d: "realize",
    options: ["accept", "refuse", "persuade", "realize"],
    correct_answer: "A",
    explanation: "To 'fall for' something means to be deceived into believing or accepting a trick or false claim as true.",
    topic_name: "Phrasal Verbs & Idioms",
    instruction_category: "Vocabulary - Substitution"
  },
  {
    question_number: 26,
    question_text: "Choose the word/phrase that best substitutes the underlined word:\n'I believe the majority of European countries are overwhelmingly thankful for the presence of Africans as they import a variety of raw materials from Africa.'",
    option_a: "warmly",
    option_b: "friendly",
    option_c: "extremely",
    option_d: "rapidly",
    options: ["warmly", "friendly", "extremely", "rapidly"],
    correct_answer: "C",
    explanation: "'Overwhelmingly' in this context means to an enormous, overpowering, or extreme degree ('extremely thankful').",
    topic_name: "Synonyms & Intensifying Adverbs",
    instruction_category: "Vocabulary - Substitution"
  },
  {
    question_number: 27,
    question_text: "Choose the word/phrase that best substitutes the underlined word:\n'Ethiopians are well known for their hospitality, as they often invite strangers into their home and feed them well.'",
    option_a: "patience",
    option_b: "kindness",
    option_c: "honesty",
    option_d: "courage",
    options: ["patience", "kindness", "honesty", "courage"],
    correct_answer: "B",
    explanation: "'Hospitality' is the friendly, generous, and warm reception and entertainment of guests or strangers, reflecting kindness and generosity.",
    topic_name: "Synonyms & Character Traits",
    instruction_category: "Vocabulary - Substitution"
  },
  {
    question_number: 28,
    question_text: "Choose the word/phrase that best substitutes the underlined word:\n'Our students should be informed that the delay in preparation for the test exacerbated their anxiety about the outcome.'",
    option_a: "improve",
    option_b: "accelerate",
    option_c: "prevent",
    option_d: "aggravate",
    options: ["improve", "accelerate", "prevent", "aggravate"],
    correct_answer: "D",
    explanation: "'Exacerbate' means to make a bad situation, problem, or negative feeling worse or more severe; its exact synonym is 'aggravate'.",
    topic_name: "Advanced Vocabulary & Synonyms",
    instruction_category: "Vocabulary - Substitution"
  },
  {
    question_number: 29,
    question_text: "Choose the word/phrase that best substitutes the underlined word:\n'Students should do something that needs to be done quickly; procrastination is disastrous today.'",
    option_a: "delay",
    option_b: "carelessness",
    option_c: "tiredness",
    option_d: "boredom",
    options: ["delay", "carelessness", "tiredness", "boredom"],
    correct_answer: "A",
    explanation: "'Procrastination' refers to the act of needlessly delaying or postponing tasks that should be addressed promptly.",
    topic_name: "Synonyms & Contextual Vocabulary",
    instruction_category: "Vocabulary - Substitution"
  },
  {
    question_number: 30,
    question_text: "_________________ information refers to information that is meant to be kept secret within a certain circle of people and not intended to be made public.",
    option_a: "Confidentially",
    option_b: "Confident",
    option_c: "Confidentiality",
    option_d: "Confidential",
    options: ["Confidentially", "Confident", "Confidentiality", "Confidential"],
    correct_answer: "D",
    explanation: "An adjective modifying the noun 'information' is required. 'Confidential' means secret, private, or restricted to authorized individuals.",
    topic_name: "Word Formation & Parts of Speech",
    instruction_category: "Vocabulary - Completion"
  },
  {
    question_number: 31,
    question_text: "Farmers start working on the field during the_________ season because this season is important for crops.",
    option_a: "dry",
    option_b: "rainy",
    option_c: "windy",
    option_d: "cool",
    options: ["dry", "rainy", "windy", "cool"],
    correct_answer: "B",
    explanation: "In agrarian societies, crop cultivation begins during the rainy (wet) season when adequate precipitation enables seeds to germinate and crops to grow.",
    topic_name: "Agricultural Vocabulary",
    instruction_category: "Vocabulary - Completion"
  },
  {
    question_number: 32,
    question_text: "Despite being a successful professional, John occasionally displays ____behaviors, such as feeling angry and becoming offensive when things don’t go his way.",
    option_a: "adequately",
    option_b: "qualified",
    option_c: "pleasant",
    option_d: "childish",
    options: ["adequately", "qualified", "pleasant", "childish"],
    correct_answer: "D",
    explanation: "'Childish' describes immature, petulant, or ill-tempered behavior unsuitable for an adult professional.",
    topic_name: "Contextual Adjectives",
    instruction_category: "Vocabulary - Completion"
  },
  {
    question_number: 33,
    question_text: "If you stay a night in an international hotel, in the morning, you can go to their beautiful ___________ room and eat your breakfast freely.",
    option_a: "reading",
    option_b: "bed",
    option_c: "dining",
    option_d: "guest",
    options: ["reading", "bed", "dining", "guest"],
    correct_answer: "C",
    explanation: "A 'dining room' is the designated room in a hotel or residence where meals (such as breakfast) are served and consumed.",
    topic_name: "Collocations & Compound Nouns",
    instruction_category: "Vocabulary - Completion"
  },
  {
    question_number: 34,
    question_text: "What is the best title for this extract?",
    option_a: "My parents life",
    option_b: "My beginnings",
    option_c: "The family business",
    option_d: "Life in my grandfather’s time",
    options: [
      "My parents life",
      "My beginnings",
      "The family business",
      "Life in my grandfather’s time"
    ],
    correct_answer: "D",
    explanation: "The passage centers on the life, character, family, and era of the author's grandfather Agbefia, making 'Life in my grandfather's time' the most appropriate and encompassing title.",
    topic_name: "Reading Comprehension - Main Idea & Title",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 35,
    question_text: "Why was the writer’s grandfather wealthy?",
    option_a: "He was part of a group of fishermen.",
    option_b: "He employed a group of men.",
    option_c: "He was fisherman.",
    option_d: "He owned the fishing business.",
    options: [
      "He was part of a group of fishermen.",
      "He employed a group of men.",
      "He was fisherman.",
      "He owned the fishing business."
    ],
    correct_answer: "D",
    explanation: "Paragraph 1 states: 'He owned four large drag-nets... and three fishing boats... he was the head of a fishing company', demonstrating that he owned the fishing enterprise.",
    topic_name: "Reading Comprehension - Direct Detail",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 36,
    question_text: "The word “foretold” (in paragraph 2) is closest in meaning to _________.",
    option_a: "predicted",
    option_b: "reported",
    option_c: "recommended",
    option_d: "praised",
    options: ["predicted", "reported", "recommended", "praised"],
    correct_answer: "A",
    explanation: "'Foretold' means to predict or forecast future events before they happen based on observation ('he foretold the fishing of that day').",
    topic_name: "Reading Comprehension - Vocabulary in Context",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 37,
    question_text: "What did his grandfather do in the morning?",
    option_a: "He had to wake up the men in advance of undertaking anything.",
    option_b: "He walks on the sea-shore and observes the situations.",
    option_c: "He chooses the best place to fish.",
    option_d: "He enjoys the view of the beach.",
    options: [
      "He had to wake up the men in advance of undertaking anything.",
      "He walks on the sea-shore and observes the situations.",
      "He chooses the best place to fish.",
      "He enjoys the view of the beach."
    ],
    correct_answer: "B",
    explanation: "Paragraph 2 states: 'Every morning, this old man would leave his house before dawn and walk on the sea-shore. He watched the changing colors of the sea and studied the movement of the clouds in the sky.'",
    topic_name: "Reading Comprehension - Supporting Details",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 38,
    question_text: "How many wives did the writer’s grandfather have?",
    option_a: "Four",
    option_b: "Twenty-five",
    option_c: "Eight",
    option_d: "Twelve",
    options: ["Four", "Twenty-five", "Eight", "Twelve"],
    correct_answer: "C",
    explanation: "Paragraph 5 explicitly states: 'He had had in all, eight wives, but the other four had proved disloyal, or in some other way unsatisfactory, and he had sent them away.'",
    topic_name: "Reading Comprehension - Specific Detail",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 39,
    question_text: "What did the writer’s grandmother look like?",
    option_a: "She had an impressive appearance.",
    option_b: "She was fat, but beautiful.",
    option_c: "She was tall.",
    option_d: "She was ugly.",
    options: [
      "She had an impressive appearance.",
      "She was fat, but beautiful.",
      "She was tall.",
      "She was ugly."
    ],
    correct_answer: "B",
    explanation: "Paragraph 4 describes her: 'She was short and fat; her skin was the color of bronze... We called her Mamadze'. Among the options, B best captures her affectionate physical description.",
    topic_name: "Reading Comprehension - Character Description",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 40,
    question_text: "The word “aw-inspiring” (in paragraph 3) could best be replaced by________.",
    option_a: "wonderful",
    option_b: "distressing",
    option_c: "encouraging",
    option_d: "aiding",
    options: ["wonderful", "distressing", "encouraging", "aiding"],
    correct_answer: "A",
    explanation: "'Awe-inspiring' (spelled 'aw-inspiring' in the text) means impressive, magnificent, or wonderful, evoking admiration.",
    topic_name: "Reading Comprehension - Contextual Meaning",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 41,
    question_text: "What did his grandfather built in middle age?",
    option_a: "a small house which is very away from the main house",
    option_b: "a house to teem in with his children and grandchildren",
    option_c: "a great family house",
    option_d: "a compound",
    options: [
      "a small house which is very away from the main house",
      "a house to teem in with his children and grandchildren",
      "a great family house",
      "a compound"
    ],
    correct_answer: "A",
    explanation: "Paragraph 6 states: 'In middle age, my grandfather built a small, but strong and attractive house, a few hundred yards away from the great family house and a compound...'",
    topic_name: "Reading Comprehension - Detail Retrieval",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 42,
    question_text: "Who was Yakuvi?",
    option_a: "Someone who stayed with the writer until the end of his life.",
    option_b: "The writer’s grandmother’s preferred person.",
    option_c: "The writer’s grandfather’s preferred wife.",
    option_d: "A woman which the writer’s grandfather married in the middle age.",
    options: [
      "Someone who stayed with the writer until the end of his life.",
      "The writer’s grandmother’s preferred person.",
      "The writer’s grandfather’s preferred wife.",
      "A woman which the writer’s grandfather married in the middle age."
    ],
    correct_answer: "C",
    explanation: "Paragraph 6 states: 'My own grandmother, Yakuvi, was his favorite and the one who stayed with him to the termination of his life.'",
    topic_name: "Reading Comprehension - Character Relationships",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 43,
    question_text: "What does ‘her’ in the last paragraph refer to?",
    option_a: "The writer’s favorite wife",
    option_b: "The writer’s grandmother, Yakuvi",
    option_c: "The writer’s grandfather’s first wife",
    option_d: "The writer’s grandfather’s only wife",
    options: [
      "The writer’s favorite wife",
      "The writer’s grandmother, Yakuvi",
      "The writer’s grandfather’s first wife",
      "The writer’s grandfather’s only wife"
    ],
    correct_answer: "B",
    explanation: "The last sentence says: '...he took only my grandmother Yakuvi with him... he married her for a second time', referring directly to grandmother Yakuvi.",
    topic_name: "Reading Comprehension - Pronoun Reference",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 44,
    question_text: "Which one of the following sentences is false about grandfather Agbefia?",
    option_a: "He was a rich man.",
    option_b: "He did not employ people.",
    option_c: "His wives sold fishes in the market.",
    option_d: "He married Yakuvi for a second time.",
    options: [
      "He was a rich man.",
      "He did not employ people.",
      "His wives sold fishes in the market.",
      "He married Yakuvi for a second time."
    ],
    correct_answer: "C",
    explanation: "Paragraph 1 states that the wives of the group of men who helped him fish sold the catch in the market ('their wives sold in the market'), NOT Agbefia's own wives.",
    topic_name: "Reading Comprehension - True/False Evaluation",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 45,
    question_text: "What does ‘they’ in the paragraph 1 refer to?",
    option_a: "The group of men who helped Agbefia fishing",
    option_b: "The wives of group of men in the village",
    option_c: "Grandfather Agbefia’s wives",
    option_d: "The owners of the fishing company",
    options: [
      "The group of men who helped Agbefia fishing",
      "The wives of group of men in the village",
      "Grandfather Agbefia’s wives",
      "The owners of the fishing company"
    ],
    correct_answer: "A",
    explanation: "In paragraph 1: 'A group of men in the village where he lived helped him fishing, and in return they received a proportion of the catch...'",
    topic_name: "Reading Comprehension - Pronoun Reference",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 46,
    question_text: "The word “shield ” (in paragraph 4) is closest in meaning to _________.",
    option_a: "protect",
    option_b: "raise",
    option_c: "smile",
    option_d: "clean",
    options: ["protect", "raise", "smile", "clean"],
    correct_answer: "A",
    explanation: "'Shield' means to protect, guard, or defend someone from harm or distress ('she did her best to shield me, and all the children... from trouble').",
    topic_name: "Reading Comprehension - Contextual Meaning",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 47,
    question_text: "What could be the purpose of the writer in this writing?",
    option_a: "To describe his grandfather",
    option_b: "To narrate about the life of his grandfather",
    option_c: "To explain the reason why his grandfather was rich",
    option_d: "To compare his life to his grandfather’s life",
    options: [
      "To describe his grandfather",
      "To narrate about the life of his grandfather",
      "To explain the reason why his grandfather was rich",
      "To compare his life to his grandfather’s life"
    ],
    correct_answer: "B",
    explanation: "The author recounts the story of his grandfather's daily routine, career as fisherman and chief linguist, marriages, and personal life, serving to narrate about his grandfather's life.",
    topic_name: "Reading Comprehension - Author's Purpose",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 48,
    question_text: "Which one of the following is TRUE according to paragraph 4?",
    option_a: "Yakuvi was as outstanding as Agbefia.",
    option_b: "yakuvi was outstanding.",
    option_c: "Yakuvi’s skin was red.",
    option_d: "Yakuvi was not as outstanding as Agbefia.",
    options: [
      "Yakuvi was as outstanding as Agbefia.",
      "yakuvi was outstanding.",
      "Yakuvi’s skin was red.",
      "Yakuvi was not as outstanding as Agbefia."
    ],
    correct_answer: "D",
    explanation: "Paragraph 4 begins: 'My grandmother, on the other hand, was not aw-inspiring at all', contrasting with grandfather Agbefia who was an 'outstanding and awe-inspiring figure'.",
    topic_name: "Reading Comprehension - Contrast Analysis",
    instruction_category: "Reading Comprehension",
    reading_passage: READING_PASSAGE,
    passage_title: "My Grandfather Agbefia"
  },
  {
    question_number: 49,
    question_text: "You: Hello. How’re you doing?\nDagim: ______________________________",
    option_a: "Hello. I’m reading a magazine.",
    option_b: "Thanks. I’m feeling well.",
    option_c: "Hello! I’m happy to see you.",
    option_d: "Fine. Thanks. How’re you?",
    options: [
      "Hello. I’m reading a magazine.",
      "Thanks. I’m feeling well.",
      "Hello! I’m happy to see you.",
      "Fine. Thanks. How’re you?"
    ],
    correct_answer: "D",
    explanation: "The standard conversational response to the casual social greeting 'How're you doing?' is 'Fine. Thanks. How're you?' (or 'Good, how about you?').",
    topic_name: "Social Greetings & Conversation Openers",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 50,
    question_text: "Question: How often does your father read a book?\nAnswer: _____________________________.",
    option_a: "About two books a day",
    option_b: "Nearly three times a day",
    option_c: "In the morning and after lunch normally",
    option_d: "He has been reading for more than ten years",
    options: [
      "About two books a day",
      "Nearly three times a day",
      "In the morning and after lunch normally",
      "He has been reading for more than ten years"
    ],
    correct_answer: "B",
    explanation: "'How often' asks for frequency of an action. 'Nearly three times a day' answers frequency directly.",
    topic_name: "Questions with 'How often' (Frequency)",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 51,
    question_text: "Guest: How long does it take to Jimma?\nYou: ______________________________.",
    option_a: "It depends on your driving",
    option_b: "Not more than fifty birr",
    option_c: "Jimma is very far",
    option_d: "It is around 500 kilometers",
    options: [
      "It depends on your driving",
      "Not more than fifty birr",
      "Jimma is very far",
      "It is around 500 kilometers"
    ],
    correct_answer: "A",
    explanation: "'How long does it take...?' asks about duration of time. 'It depends on your driving' naturally addresses travel time variability.",
    topic_name: "Inquiring about Travel Time & Duration",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 52,
    question_text: "Ababo: Do you mind if I use your computer?\nYou: ___________________",
    option_a: "Of course, you can use it.",
    option_b: "No matter, you can use it.",
    option_c: "Do I have any computer?",
    option_d: "Yes. Here you are.",
    options: [
      "Of course, you can use it.",
      "No matter, you can use it.",
      "Do I have any computer?",
      "Yes. Here you are."
    ],
    correct_answer: "A",
    explanation: "Granting permission to a polite request ('Do you mind if I use your computer?') is clearly and politely expressed by 'Of course, you can use it' (or 'Not at all, go ahead').",
    topic_name: "Asking for and Granting Permission",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 53,
    question_text: "Manager: Do you know what happened to that new machine?\nTechnician:__________________________________",
    option_a: "Probably, they are not good machines.",
    option_b: "Unfortunately they are too expensive.",
    option_c: "I think, none of them are working.",
    option_d: "Amazing. They are new and well designed.",
    options: [
      "Probably, they are not good machines.",
      "Unfortunately they are too expensive.",
      "I think, none of them are working.",
      "Amazing. They are new and well designed."
    ],
    correct_answer: "C",
    explanation: "When asked about the operational condition/incident regarding the machine, stating technical status ('I think, none of them are working') directly addresses the query.",
    topic_name: "Workplace Dialogue & Technical Reporting",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 54,
    question_text: "In which one of the following words is the suffix “s” pronounced as “z”?",
    option_a: "dogs",
    option_b: "books",
    option_c: "texts",
    option_d: "stops",
    options: ["dogs", "books", "texts", "stops"],
    correct_answer: "A",
    explanation: "The plural suffix '-s' is pronounced as the voiced sound /z/ after voiced consonants like /g/ in 'dogs' (/dɒɡz/). After voiceless consonants like /k/, /t/, /p/ in 'books', 'texts', and 'stops', it is pronounced as voiceless /s/.",
    topic_name: "Pronunciation of Final -s/-es (/s/ vs /z/ vs /ɪz/)",
    instruction_category: "Phonetics & Pronunciation"
  },
  {
    question_number: 55,
    question_text: "You: How do you like my skirt?\nFriend: _________________________",
    option_a: "It’s a bit pricey.",
    option_b: "It’s green in colour.",
    option_c: "Did you buy it from the bazaar?",
    option_d: "Very much. It suits you.",
    options: [
      "It’s a bit pricey.",
      "It’s green in colour.",
      "Did you buy it from the bazaar?",
      "Very much. It suits you."
    ],
    correct_answer: "D",
    explanation: "'How do you like...?' asks for someone's opinion or aesthetic impression of something. 'Very much. It suits you' is the standard complimentary response.",
    topic_name: "Asking for and Giving Opinions/Compliments",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 56,
    question_text: "Soliyana: I don’t like watching horror movies. What about you?\nEsmael: _____________________________.",
    option_a: "So do I",
    option_b: "Nor I do",
    option_c: "Neither do I",
    option_d: "So you are",
    options: ["So do I", "Nor I do", "Neither do I", "So you are"],
    correct_answer: "C",
    explanation: "To agree with a negative statement ('I don't like...'), the inverted form 'Neither do I' (or 'Nor do I') is used.",
    topic_name: "Agreement with Negative Statements (So/Neither)",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 57,
    question_text: "JIRU: I am feeling dizzy this morning. What should I do?\nALI: __________________________",
    option_a: "Some feelings are difficult to manage.",
    option_b: "It may happen.",
    option_c: "Definitely you will be right.",
    option_d: "I think, you should see a doctor.",
    options: [
      "Some feelings are difficult to manage.",
      "It may happen.",
      "Definitely you will be right.",
      "I think, you should see a doctor."
    ],
    correct_answer: "D",
    explanation: "When asked for health advice ('What should I do?'), 'I think, you should see a doctor' provides appropriate, supportive medical counsel.",
    topic_name: "Giving Health Advice",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 58,
    question_text: "Fira: Hi, how are you? May I speak to Kiya?\nDanu: _________________________",
    option_a: "Why haven't you answered the phone?",
    option_b: "I had things to do.",
    option_c: "What was the reason for your call?",
    option_d: "Speaking. What's up?",
    options: [
      "Why haven't you answered the phone?",
      "I had things to do.",
      "What was the reason for your call?",
      "Speaking. What's up?"
    ],
    correct_answer: "D",
    explanation: "In telephone etiquette, when someone asks to speak to you, answering 'Speaking' identifies that the caller is already talking to the desired person.",
    topic_name: "Telephone Conversations & Etiquette",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 59,
    question_text: "Student A: I use my mobile phone for education purposes.\nStudent B: _____________________________________",
    option_a: "Neither I do",
    option_b: "So do I",
    option_c: "So you are",
    option_d: "Neither do I",
    options: ["Neither I do", "So do I", "So you are", "Neither do I"],
    correct_answer: "B",
    explanation: "To agree with an affirmative statement ('I use...'), use 'So + auxiliary verb + subject' ('So do I').",
    topic_name: "Agreement with Positive Statements",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 60,
    question_text: "Teacher: How far is the school from your home?\nStudent:_________________________",
    option_a: "3kms",
    option_b: "2 hours",
    option_c: "I often arrive late",
    option_d: "I always travel by bus",
    options: ["3kms", "2 hours", "I often arrive late", "I always travel by bus"],
    correct_answer: "A",
    explanation: "'How far' asks for distance, and '3kms' (3 kilometers) specifies geographical distance directly.",
    topic_name: "Inquiring About Distance (How Far)",
    instruction_category: "Communicative Activities"
  }
];

module.exports = questions;
