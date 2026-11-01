/**
 * Grade 11 English Language First Semester Final Exam, January 2016/2024
 * 80 Questions extracted directly from the official examination paper with comprehensive linguistic and grammatical explanations.
 */

const questions = [
  // I. COMMUNICATIVE ACTIVITIES (1-15)
  {
    question_number: 1,
    question_text: "Father: Where have you been, son?\nSon: _____________________",
    option_a: "Why should I be asked?",
    option_b: "My sister hasn’t come yet.",
    option_c: "I am sorry Dad; the bus delayed me.",
    option_d: "Can you talk to the bus chauffer?",
    options: [
      "Why should I be asked?",
      "My sister hasn’t come yet.",
      "I am sorry Dad; the bus delayed me.",
      "Can you talk to the bus chauffer?"
    ],
    correct_answer: "C",
    explanation: "Option C is the only polite, cooperative, and direct response that explains the speaker's whereabouts and apologizes for the delay.",
    topic_name: "Conversational English - Explanations & Apologies",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 2,
    question_text: "Guest: Do you know where the exhibition is being held?\nPasserby: _____________________________________",
    option_a: "Sorry, I am new here myself.",
    option_b: "Yes, let me know the participants",
    option_c: "Yes, exhibition is very communal these days.",
    option_d: "Sure, it is a supreme exhibition of the farm worker's skills.",
    options: [
      "Sorry, I am new here myself.",
      "Yes, let me know the participants",
      "Yes, exhibition is very communal these days.",
      "Sure, it is a supreme exhibition of the farm worker's skills."
    ],
    correct_answer: "A",
    explanation: "'Sorry, I am new here myself' is a standard courteous response when a passerby lacks local geographical knowledge to give directions.",
    topic_name: "Conversational English - Asking and Giving Directions",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 3,
    question_text: "Teacher: How much time do you need to complete your assignment?\nStudent: _________________________________________",
    option_a: "Time is precious.",
    option_b: "Two hours in an average.",
    option_c: "We don’t think we can do it.",
    option_d: "What time do we have to start it?",
    options: [
      "Time is precious.",
      "Two hours in an average.",
      "We don’t think we can do it.",
      "What time do we have to start it?"
    ],
    correct_answer: "B",
    explanation: "The teacher asks for an estimated duration ('How much time...'), and 'Two hours on average' directly provides the required time estimate.",
    topic_name: "Conversational English - Time Estimation",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 4,
    question_text: "Darara: I’m glad to meet you. Can’t we sit down somewhere and talk?\nMalifu: Sure, ____________________.",
    option_a: "but talk doesn’t help",
    option_b: "let’s sit over there",
    option_c: "let’s forget it for today",
    option_d: "I don’t think that is possible",
    options: [
      "but talk doesn’t help",
      "let’s sit over there",
      "let’s forget it for today",
      "I don’t think that is possible"
    ],
    correct_answer: "B",
    explanation: "Malifu agrees with 'Sure' and follows up constructively by proposing a specific location: 'let's sit over there'.",
    topic_name: "Conversational English - Invitations and Suggestions",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 5,
    question_text: "Client: Excuse me; would you please bring me the t-shirt over there? I want to buy it.\nShopkeeper: __________________________________",
    option_a: "How much is it?",
    option_b: "Sure, here you are.",
    option_c: "Sure, it’s price is 8 dollars",
    option_d: "I am glad that you buy it.",
    options: [
      "How much is it?",
      "Sure, here you are.",
      "Sure, it’s price is 8 dollars",
      "I am glad that you buy it."
    ],
    correct_answer: "B",
    explanation: "When handing an item requested by a customer, the conventional polite service phrase is 'Sure, here you are.'",
    topic_name: "Conversational English - Shopping & Service",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 6,
    question_text: "Client: Well, thanks. How much is it?\nShopkeeper: ________________",
    option_a: "It is a nice t-shirt.",
    option_b: "I bought it for 8 dollars",
    option_c: "10 dollars only. It is a quality material.",
    option_d: "Look how nice it is. I wish you wouldn’t miss it",
    options: [
      "It is a nice t-shirt.",
      "I bought it for 8 dollars",
      "10 dollars only. It is a quality material.",
      "Look how nice it is. I wish you wouldn’t miss it"
    ],
    correct_answer: "C",
    explanation: "The client asks 'How much is it?', which requires the selling price ('10 dollars only. It is a quality material.').",
    topic_name: "Conversational English - Inquiring and Quoting Prices",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 7,
    question_text: "Client: It is fine, but any reduction, please?\nShopkeeper: __________________________________",
    option_a: "No, price is fixed for each item here.",
    option_b: "What reduction are you talking about?",
    option_c: "You do not seem to be interested in it",
    option_d: "You must have misunderstood me",
    options: [
      "No, price is fixed for each item here.",
      "What reduction are you talking about?",
      "You do not seem to be interested in it",
      "You must have misunderstood me"
    ],
    correct_answer: "A",
    explanation: "When a customer asks for a discount/reduction in a fixed-price store, the shopkeeper politely clarifies: 'No, price is fixed for each item here.'",
    topic_name: "Conversational English - Bargaining & Negotiation",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 8,
    question_text: "Client: But I don’t read any price fix.\nShopkeeper: ____________________",
    option_a: "I mean I tell the truth.",
    option_b: "It is all that, no reduction.",
    option_c: "Don’t this item.",
    option_d: "You seem to joke.",
    options: [
      "I mean I tell the truth.",
      "It is all that, no reduction.",
      "Don’t this item.",
      "You seem to joke."
    ],
    correct_answer: "B",
    explanation: "The shopkeeper reaffirms firmly that the price stands as stated without any discount: 'It is all that, no reduction.'",
    topic_name: "Conversational English - Firm Clarification",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 9,
    question_text: "Client: __________________________________\nShopkeeper: Yes, that is the right decision. Here it is.",
    option_a: "So, you are missing me.",
    option_b: "So, I stop here with you.",
    option_c: "Well, pack it for me. Here is the money",
    option_d: "Where is the t-shirt?",
    options: [
      "So, you are missing me.",
      "So, I stop here with you.",
      "Well, pack it for me. Here is the money",
      "Where is the t-shirt?"
    ],
    correct_answer: "C",
    explanation: "The customer decides to purchase the item ('Well, pack it for me. Here is the money'), prompting the shopkeeper's approval ('Yes, that is the right decision. Here it is.').",
    topic_name: "Conversational English - Concluding a Transaction",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 10,
    question_text: "Teacher: _________________________________________\nStudent: Excuse me Sir; my mother was ill and I had to take her to a hospital.",
    option_a: "Where were you yesterday?",
    option_b: "You are not a good student.",
    option_c: "You seem to be busy these days.",
    option_d: "Why did you miss classes in the last two days?",
    options: [
      "Where were you yesterday?",
      "You are not a good student.",
      "You seem to be busy these days.",
      "Why did you miss classes in the last two days?"
    ],
    correct_answer: "D",
    explanation: "The student provides a formal justification for being absent for a medical emergency, which answers the teacher's inquiry: 'Why did you miss classes in the last two days?'",
    topic_name: "Conversational English - Classroom Inquiries & Excuses",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 11,
    question_text: "Doctor: Your name is Balcha, right?\nPatient: _____________________",
    option_a: "I am Balcha, and you?",
    option_b: "Yes Sir, I’m Balcha.",
    option_c: "My name is Balcha",
    option_d: "Balcha is my name.",
    options: [
      "I am Balcha, and you?",
      "Yes Sir, I’m Balcha.",
      "My name is Balcha",
      "Balcha is my name."
    ],
    correct_answer: "B",
    explanation: "A tag question ('..., right?') seeking confirmation is answered respectfully with 'Yes Sir, I'm Balcha.'",
    topic_name: "Conversational English - Confirming Identity",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 12,
    question_text: "Doctor: So, what is wrong, Balcha?\nPatient: ____________________",
    option_a: "Well, I am not comfortable.",
    option_b: "Well, I feel backache.",
    option_c: "It is good to see you, Sir.",
    option_d: "I feel backache; I do not know what to do",
    options: [
      "Well, I am not comfortable.",
      "Well, I feel backache.",
      "It is good to see you, Sir.",
      "I feel backache; I do not know what to do"
    ],
    correct_answer: "B",
    explanation: "The doctor asks about medical symptoms ('what is wrong?'), to which the patient describes their condition ('Well, I feel backache' / 'I have backache').",
    topic_name: "Conversational English - Medical Consultations",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 13,
    question_text: "Doctor: ___________________\nPatient: It started me a month ago.",
    option_a: "I saw you a fortnight ago also.",
    option_b: "When did it start you?",
    option_c: "Have I seen you before?",
    option_d: "How long is it since it started you?",
    options: [
      "I saw you a fortnight ago also.",
      "When did it start you?",
      "Have I seen you before?",
      "How long is it since it started you?"
    ],
    correct_answer: "B",
    explanation: "'It started a month ago' is a direct answer to the question regarding onset of symptoms: 'When did it start you?'",
    topic_name: "Conversational English - Medical History Taking",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 14,
    question_text: "Doctor: Here, take this to Ultraviolent Room. See you next.\nPatient: ____________________________________",
    option_a: "Well, I do not know where it is.",
    option_b: "Ultraviolent? What a hell is it?",
    option_c: "Well, where is this room?",
    option_d: "Where is your Ultraviolent Room?",
    options: [
      "Well, I do not know where it is.",
      "Ultraviolent? What a hell is it?",
      "Well, where is this room?",
      "Where is your Ultraviolent Room?"
    ],
    correct_answer: "C",
    explanation: "The patient politely inquires about the room's location ('Well, where is this room?') which sets up the doctor's subsequent reply in question 15.",
    topic_name: "Conversational English - Inquiring About Hospital Locations",
    instruction_category: "Communicative Activities"
  },
  {
    question_number: 15,
    question_text: "Doctor: _____________________________\nPatient: Well, thank you, Sir.",
    option_a: "Why do you nag me man?",
    option_b: "It is on underground floor",
    option_c: "Is it your first time to see a doctor?",
    option_d: "Can’t you guess where it can be?",
    options: [
      "Why do you nag me man?",
      "It is on underground floor",
      "Is it your first time to see a doctor?",
      "Can’t you guess where it can be?"
    ],
    correct_answer: "B",
    explanation: "The doctor provides the location requested in question 14 ('It is on underground floor / basement level'), prompting the patient's gratitude ('Well, thank you, Sir.').",
    topic_name: "Conversational English - Giving Hospital Directions",
    instruction_category: "Communicative Activities"
  },

  // II. VOCABULARY (16-27)
  {
    question_number: 16,
    question_text: "Prof. Gebisa Ejeta is a famous Ethiopian Agronomist who _______ drought-resistant sorghum for Sub-Saharan Africa.",
    option_a: "invented",
    option_b: "created",
    option_c: "declared",
    option_d: "discovered",
    options: ["invented", "created", "declared", "discovered"],
    correct_answer: "B",
    explanation: "Agronomists and plant geneticists breed and 'create' / develop new hybrid crop cultivars tailored to climatic conditions.",
    topic_name: "Vocabulary in Context - Collocations",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 17,
    question_text: "Ali was _________ when he heard the news of his brother’s death by the rebels.",
    option_a: "upset",
    option_b: "fascinated",
    option_c: "amazed",
    option_d: "surprised",
    options: ["upset", "fascinated", "amazed", "surprised"],
    correct_answer: "A",
    explanation: "'Upset' (deeply distressed, sorrowful, agitated) is the only contextually appropriate emotional adjective for receiving tragic news of a family member's demise.",
    topic_name: "Vocabulary - Emotional Adjectives",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 18,
    question_text: "Dire Dawa is a pleasant place to live; its people are ________.",
    option_a: "smart",
    option_b: "friendly",
    option_c: "crowded",
    option_d: "hardworking",
    options: ["smart", "friendly", "crowded", "hardworking"],
    correct_answer: "B",
    explanation: "The sentence links 'pleasant place to live' with a welcoming interpersonal descriptor; 'friendly' logically supports why the city is pleasant.",
    topic_name: "Vocabulary - Descriptive Adjectives",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 19,
    question_text: "The Corner Market _________ last week because they didn’t have many customers.",
    option_a: "opened again",
    option_b: "broadened itself",
    option_c: "closed down",
    option_d: "made much profit",
    options: ["opened again", "broadened itself", "closed down", "made much profit"],
    correct_answer: "C",
    explanation: "The phrasal verb 'closed down' means ceased business operations permanently or indefinitely due to lack of patronage/customers.",
    topic_name: "Phrasal Verbs - Business Operations",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 20,
    question_text: "He bought ______ such as chair, table, stool, sofa, and buffet last week.",
    option_a: "tools",
    option_b: "house furniture",
    option_c: "utensils",
    option_d: "all",
    options: ["tools", "house furniture", "utensils", "all"],
    correct_answer: "B",
    explanation: "Chairs, tables, stools, sofas, and buffets are categorized collectively as 'house furniture'.",
    topic_name: "Vocabulary - Category Classifications",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 21,
    question_text: "It is getting late for school to this boy. Please ______ in time so that he catches the bus.",
    option_a: "wake him",
    option_b: "wake him up",
    option_c: "wake him around",
    option_d: "wake him down",
    options: ["wake him", "wake him up", "wake him around", "wake him down"],
    correct_answer: "B",
    explanation: "The separable phrasal verb 'wake (someone) up' means to cause someone to stop sleeping.",
    topic_name: "Phrasal Verbs - Daily Routines",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 22,
    question_text: "The hill was too arduous for us to climb. We had to walk our bicycles up the hill. What does arduous mean?",
    option_a: "tall",
    option_b: "exciting",
    option_c: "challenging",
    option_d: "steep",
    options: ["tall", "exciting", "challenging", "steep"],
    correct_answer: "C",
    explanation: "'Arduous' means requiring strenuous effort, difficult, tiring, and challenging.",
    topic_name: "Vocabulary - Contextual Synonyms",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 23,
    question_text: "Needles and thread are indispensable tools for a tailor; without them he would not be able to work. What is indispensable?",
    option_a: "unimportant",
    option_b: "suitable",
    option_c: "essential",
    option_d: "interesting",
    options: ["unimportant", "suitable", "essential", "interesting"],
    correct_answer: "C",
    explanation: "'Indispensable' means absolutely necessary, vital, or essential (something one cannot do without).",
    topic_name: "Vocabulary - Synonyms",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 24,
    question_text: "Girma is flexible, but his brother is adamant. The contextual meaning of adamant is:",
    option_a: "smooth",
    option_b: "rigid",
    option_c: "unfriendly",
    option_d: "stupid",
    options: ["smooth", "rigid", "unfriendly", "stupid"],
    correct_answer: "B",
    explanation: "'Adamant' means refusing to be persuaded or to change one's mind; unyielding, inflexible, or rigid.",
    topic_name: "Vocabulary - Context Clues (Antonyms)",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 25,
    question_text: "What contextual clue could be used to reach the meaning of adamant above?",
    option_a: "synonym",
    option_b: "antonym",
    option_c: "example",
    option_d: "general sense",
    options: ["synonym", "antonym", "example", "general sense"],
    correct_answer: "B",
    explanation: "The coordinating contrast conjunction 'but' sets up an antonym clue between 'flexible' and 'adamant'.",
    topic_name: "Reading Strategies - Context Clues",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 26,
    question_text: "Tigist’s biological father is not alive. Biological father means:",
    option_a: "a father teaching Biology",
    option_b: "a male parent",
    option_c: "known in Biology",
    option_d: "dead father",
    options: [
      "a father teaching Biology",
      "a male parent",
      "known in Biology",
      "dead father"
    ],
    correct_answer: "B",
    explanation: "A biological father is the male genetic parent who provided the sperm that fertilized the egg resulting in the child.",
    topic_name: "Vocabulary - Compound Terms",
    instruction_category: "Vocabulary"
  },
  {
    question_number: 27,
    question_text: "You are doing very well in Mathematics, boy. You _______, please.",
    option_a: "keep it",
    option_b: "keep it up",
    option_c: "keep it well",
    option_d: "keep it constant",
    options: ["keep it", "keep it up", "keep it well", "keep it constant"],
    correct_answer: "B",
    explanation: "'Keep it up' is an idiomatic encouragement phrase meaning to continue to do something well or work at the same high standard.",
    topic_name: "Idioms and Phrasal Verbs - Encouragement",
    instruction_category: "Vocabulary"
  },

  // III. READING COMPREHENSION (28-45)
  // Passage 1 (28-32)
  {
    question_number: 28,
    question_text: "[Passage 1: 'Leave Interstate 25 at exit 7S. Follow that road for two miles. After one mile, you will pass a small shopping center on your left. At the next set of traffic lights, turn right onto Maple Drive. Erik's house is the third house on your left. Its number is 33, and it's white with green trim.']\n\nThis writing is _________________ kind of writing.",
    option_a: "descriptive",
    option_b: "argumentative",
    option_c: "narrative",
    option_d: "expository",
    options: ["descriptive", "argumentative", "narrative", "expository"],
    correct_answer: "D",
    explanation: "Expository / directional writing provides clear informational instructions, explanations, and sequential directions to a location.",
    topic_name: "Reading Comprehension - Text Types",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 29,
    question_text: "Which one of the following is the best possible topic for the reading text?",
    option_a: "The Color of Erick’s House",
    option_b: "Direction to Erick’s House",
    option_c: "Erick’s Whereabouts",
    option_d: "How Distant Erick’s House is",
    options: [
      "The Color of Erick’s House",
      "Direction to Erick’s House",
      "Erick’s Whereabouts",
      "How Distant Erick’s House is"
    ],
    correct_answer: "B",
    explanation: "The short passage gives explicit step-by-step driving and turning directions to locate Erik's house from the interstate.",
    topic_name: "Reading Comprehension - Main Idea & Topic",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 30,
    question_text: "What is Erik's address?",
    option_a: "Interstate 25",
    option_b: "7S Exit",
    option_c: "13 Erika Street",
    option_d: "33 Maple Drive",
    options: ["Interstate 25", "7S Exit", "13 Erika Street", "33 Maple Drive"],
    correct_answer: "D",
    explanation: "The passage explicitly states: 'turn right onto Maple Drive. Erik's house is the third house on your left. Its number is 33...'",
    topic_name: "Reading Comprehension - Detail Extraction",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 31,
    question_text: "Which is closest to Erik's house?",
    option_a: "the traffic lights",
    option_b: "the shopping center",
    option_c: "exit 7S",
    option_d: "a green house",
    options: ["the traffic lights", "the shopping center", "exit 7S", "a green house"],
    correct_answer: "A",
    explanation: "According to the sequence: Exit 7S -> after 1 mile shopping center -> next traffic lights -> turn right onto Maple Drive -> 3rd house. The traffic lights are the closest preceding landmark.",
    topic_name: "Reading Comprehension - Spatial Relationships",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 32,
    question_text: "‘that road’ in the first line of the text refers to _________",
    option_a: "Road to Erik's house from Interstate 25.",
    option_b: "Interstate 25",
    option_c: "Road that takes to the traffic lights from exit 7S",
    option_d: "Road to Maple Drive from the next set of traffic lights.",
    options: [
      "Road to Erik's house from Interstate 25.",
      "Interstate 25",
      "Road that takes to the traffic lights from exit 7S",
      "Road to Maple Drive from the next set of traffic lights."
    ],
    correct_answer: "C",
    explanation: "Line 1 says 'Leave Interstate 25 at exit 7S. Follow that road for two miles.' 'That road' refers to the road you enter upon leaving exit 7S that leads to the traffic lights.",
    topic_name: "Reading Comprehension - Reference Words",
    instruction_category: "Reading Comprehension"
  },

  // Passage 2: Euthanasia (33-45)
  {
    question_number: 33,
    question_text: "The third paragraph of the passage focuses on:",
    option_a: "Mechanisms of discouraging euthanasia",
    option_b: "Prevalence of active euthanasia",
    option_c: "That euthanasia is of Greek origin",
    option_d: "Prevalence of passive euthanasia",
    options: [
      "Mechanisms of discouraging euthanasia",
      "Prevalence of active euthanasia",
      "That euthanasia is of Greek origin",
      "Prevalence of passive euthanasia"
    ],
    correct_answer: "D",
    explanation: "Paragraph 3 discusses: 'we face a bigger, more insidious threat from passive forms of euthanasia... growing numbers of documented deaths caused by caregivers withholding life-sustaining care...'",
    topic_name: "Reading Comprehension - Paragraph Main Idea",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 34,
    question_text: "According to the passage, euthanasia is defined in paragraph 1 as:",
    option_a: "the act of killing someone to suffer more",
    option_b: "the killing of someone to end the person’s suffering",
    option_c: "the act of killing a person painlessly for no reasons",
    option_d: "unintentional killings of ill or harmed persons by relatives or friends",
    options: [
      "the act of killing someone to suffer more",
      "the killing of someone to end the person’s suffering",
      "the act of killing a person painlessly for no reasons",
      "unintentional killings of ill or harmed persons by relatives or friends"
    ],
    correct_answer: "B",
    explanation: "Paragraph 1 quotes the American Heritage Dictionary defining euthanasia as 'the act of killing a person painlessly for reasons of mercy' (to end suffering).",
    topic_name: "Reading Comprehension - Direct Definitions",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 35,
    question_text: "The best title for the passage is:",
    option_a: "Euthanasia, a Sympathetic Killing of Incapacitated Persons against the Right to Life",
    option_b: "Euthanasia, the Act of Killing a Person Passively for Reasons of Mercy",
    option_c: "Euthanasia, an Apparently Accepted Active Killing of Incapacitated Persons",
    option_d: "Euthanasia, Mechanisms of Protecting Vulnerable Patients",
    options: [
      "Euthanasia, a Sympathetic Killing of Incapacitated Persons against the Right to Life",
      "Euthanasia, the Act of Killing a Person Passively for Reasons of Mercy",
      "Euthanasia, an Apparently Accepted Active Killing of Incapacitated Persons",
      "Euthanasia, Mechanisms of Protecting Vulnerable Patients"
    ],
    correct_answer: "A",
    explanation: "The author argues throughout the passage that euthanasia (both active and passive), despite being portrayed sympathetically, violates the fundamental universal right to life.",
    topic_name: "Reading Comprehension - Best Title",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 36,
    question_text: "According to the passage, euthanasia is:",
    option_a: "a suicide made to avoid unbearable suffering",
    option_b: "killing of incapacitated persons or patients with their consents",
    option_c: "a crime made against vulnerable people",
    option_d: "a killing by arch enemies",
    options: [
      "a suicide made to avoid unbearable suffering",
      "killing of incapacitated persons or patients with their consents",
      "a crime made against vulnerable people",
      "a killing by arch enemies"
    ],
    correct_answer: "C",
    explanation: "Paragraph 2 explicitly states that 'such killings are a crime' and paragraphs 3-4 describe them as infringing upon vulnerable people's legal right to life.",
    topic_name: "Reading Comprehension - Inferences & Text Facts",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 37,
    question_text: "Which one of the following is not true about euthanasia by withholding care?",
    option_a: "largely confined to hospitals",
    option_b: "largely confined to the terminally ill",
    option_c: "often requested by family members",
    option_d: "approved by living wills",
    options: [
      "largely confined to hospitals",
      "largely confined to the terminally ill",
      "often requested by family members",
      "approved by living wills"
    ],
    correct_answer: "D",
    explanation: "The text emphasizes that passive euthanasia often occurs to vulnerable patients who cannot speak for themselves without valid self-directed living wills.",
    topic_name: "Reading Comprehension - Evaluating Negative Statements",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 38,
    question_text: "As used in paragraph 5, which one of the following does not mean vulnerable?",
    option_a: "susceptible",
    option_b: "defenseless",
    option_c: "helpless",
    option_d: "with adequate protection",
    options: ["susceptible", "defenseless", "helpless", "with adequate protection"],
    correct_answer: "D",
    explanation: "'Vulnerable' means exposed to the possibility of being attacked or harmed, either physically or emotionally (defenseless, helpless). 'With adequate protection' is the opposite (antonym).",
    topic_name: "Vocabulary in Reading - Antonyms",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 39,
    question_text: "As used in paragraph 3, what is the contextual meaning of threat?",
    option_a: "courage",
    option_b: "intimidation",
    option_c: "promise",
    option_d: "potential danger",
    options: ["courage", "intimidation", "promise", "potential danger"],
    correct_answer: "B",
    explanation: "In paragraph 3 ('insidious threat'), threat signifies an impending danger, menace, or intimidation to human life.",
    topic_name: "Vocabulary in Reading - Contextual Meanings",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 40,
    question_text: "As used in paragraph 1, the best antonym for mercy is:",
    option_a: "heartlessness",
    option_b: "forgiveness",
    option_c: "cruelty",
    option_d: "prosperity",
    options: ["heartlessness", "forgiveness", "cruelty", "prosperity"],
    correct_answer: "C",
    explanation: "Mercy means compassion, kindness, or leniency toward others; its direct antonym is cruelty (or heartlessness).",
    topic_name: "Vocabulary in Reading - Antonyms",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 41,
    question_text: "alarming as used in paragraph 3 line 1 means:",
    option_a: "awakening",
    option_b: "frightening",
    option_c: "soothing",
    option_d: "depressing",
    options: ["awakening", "frightening", "soothing", "depressing"],
    correct_answer: "B",
    explanation: "'Alarming' means causing worry, fear, or serious concern; frightening / disturbing.",
    topic_name: "Vocabulary in Reading - Synonyms",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 42,
    question_text: "withholding as used in the passage means:",
    option_a: "giving",
    option_b: "refusing to provide",
    option_c: "minimizing",
    option_d: "controlling",
    options: ["giving", "refusing to provide", "minimizing", "controlling"],
    correct_answer: "B",
    explanation: "'Withholding' care/nutrition means actively refusing to supply or holding back life-sustaining necessities.",
    topic_name: "Vocabulary in Reading - Context Clues",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 43,
    question_text: "They in paragraph 2 line 2 refers to:",
    option_a: "ill or incapacitated persons",
    option_b: "United States",
    option_c: "cases of active euthanasia",
    option_d: "news",
    options: [
      "ill or incapacitated persons",
      "United States",
      "cases of active euthanasia",
      "news"
    ],
    correct_answer: "C",
    explanation: "Line 1-2 mentions 'numerous cases of active euthanasia in the news. They usually involve...'. 'They' refers to 'cases of active euthanasia'.",
    topic_name: "Reading Comprehension - Pronoun Reference",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 44,
    question_text: "them as used in paragraph 2 line 5 refers to:",
    option_a: "deliberate killings",
    option_b: "perpetrators",
    option_c: "relatives or friends",
    option_d: "loved ones",
    options: ["deliberate killings", "perpetrators", "relatives or friends", "loved ones"],
    correct_answer: "B",
    explanation: "Sentence: 'the perpetrators are often dealt with leniently... and the media usually portrays them as compassionate heroes'. 'Them' refers back to 'the perpetrators'.",
    topic_name: "Reading Comprehension - Pronoun Reference",
    instruction_category: "Reading Comprehension"
  },
  {
    question_number: 45,
    question_text: "their as used in paragraph 5 line 4 refers to:",
    option_a: "that of vulnerable people",
    option_b: "that of ours",
    option_c: "that of protectors of vulnerable people",
    option_d: "human being",
    options: [
      "that of vulnerable people",
      "that of ours",
      "that of protectors of vulnerable people",
      "human being"
    ],
    correct_answer: "A",
    explanation: "Sentence: 'protect vulnerable people from those who consider their lives meaningless...' 'Their' refers to the vulnerable people.",
    topic_name: "Reading Comprehension - Possessive Pronoun Reference",
    instruction_category: "Reading Comprehension"
  },

  // IV. GRAMMAR (46-68)
  {
    question_number: 46,
    question_text: "Every 15 minutes, someone ____________ to a hospital as a result of an alcohol-related collision nowadays.",
    option_a: "is taken",
    option_b: "takes",
    option_c: "has taken",
    option_d: "took",
    options: ["is taken", "takes", "has taken", "took"],
    correct_answer: "A",
    explanation: "The sentence requires the simple present passive voice ('is taken') for an ongoing general statistical fact occurring regularly ('Every 15 minutes ... nowadays').",
    topic_name: "Passive Voice - Simple Present",
    instruction_category: "Grammar"
  },
  {
    question_number: 47,
    question_text: "Our homeroom teacher _____ attendance every day.",
    option_a: "don’t take",
    option_b: "doesn’t take",
    option_c: "doesn’t takes",
    option_d: "take not",
    options: ["don’t take", "doesn’t take", "doesn’t takes", "take not"],
    correct_answer: "B",
    explanation: "The third-person singular subject ('Our homeroom teacher') in the negative simple present requires the auxiliary 'doesn't' followed by the base verb 'take'.",
    topic_name: "Subject-Verb Agreement & Present Simple Negatives",
    instruction_category: "Grammar"
  },
  {
    question_number: 48,
    question_text: "You can’t do the group work until you ____________ all four lessons on the computer.",
    option_a: "complete",
    option_b: "will complete",
    option_c: "have complete",
    option_d: "completed",
    options: ["complete", "will complete", "have complete", "completed"],
    correct_answer: "A",
    explanation: "In time clauses introduced by conjunctions like 'until', 'when', or 'before', the present simple tense ('complete') is used to express future conditions.",
    topic_name: "Time Clauses & Future Conditionals",
    instruction_category: "Grammar"
  },
  {
    question_number: 49,
    question_text: "The report ______ next week.",
    option_a: "will submit",
    option_b: "will be submit",
    option_c: "will be submitted",
    option_d: "will be submitting",
    options: ["will submit", "will be submit", "will be submitted", "will be submitting"],
    correct_answer: "C",
    explanation: "The subject 'The report' receives the action in the future, requiring the future passive form: will + be + past participle ('will be submitted').",
    topic_name: "Passive Voice - Future Simple",
    instruction_category: "Grammar"
  },
  {
    question_number: 50,
    question_text: "I scored a good grade ______ the exam was difficult.",
    option_a: "because",
    option_b: "also",
    option_c: "even if",
    option_d: "since",
    options: ["because", "also", "even if", "since"],
    correct_answer: "C",
    explanation: "'Even if' / 'Even though' introduces a concession clause expressing contrast between the difficulty of the exam and the good grade scored.",
    topic_name: "Concession & Contrast Conjunctions",
    instruction_category: "Grammar"
  },
  {
    question_number: 51,
    question_text: "By the time we arrived at the bus station, the first bus __________.",
    option_a: "has left",
    option_b: "left",
    option_c: "had left",
    option_d: "would leave",
    options: ["has left", "left", "had left", "would leave"],
    correct_answer: "C",
    explanation: "'By the time' followed by a simple past clause ('we arrived') requires the past perfect ('had left') to indicate an action completed prior to another past event.",
    topic_name: "Past Perfect Tense with 'By the time'",
    instruction_category: "Grammar"
  },
  {
    question_number: 52,
    question_text: "I _______ my assignment after my father had bought me a book.",
    option_a: "completed",
    option_b: "complete",
    option_c: "have completed",
    option_d: "was completing",
    options: ["completed", "complete", "have completed", "was completing"],
    correct_answer: "A",
    explanation: "When 'after' introduces a past perfect action ('had bought'), the subsequent completed action takes the simple past tense ('completed').",
    topic_name: "Past Simple vs Past Perfect Sequences",
    instruction_category: "Grammar"
  },
  {
    question_number: 53,
    question_text: "My friend _______ before he started job.",
    option_a: "got married",
    option_b: "has got married",
    option_c: "had got married",
    option_d: "gets married",
    options: ["got married", "has got married", "had got married", "gets married"],
    correct_answer: "C",
    explanation: "The earlier of two past events before a time point ('before he started') is expressed using the past perfect ('had got married').",
    topic_name: "Past Perfect Tense with 'Before'",
    instruction_category: "Grammar"
  },
  {
    question_number: 54,
    question_text: "Next year by this time, I ______ a car.",
    option_a: "will buy",
    option_b: "will have bought",
    option_c: "shall buy",
    option_d: "will be bought",
    options: ["will buy", "will have bought", "shall buy", "will be bought"],
    correct_answer: "B",
    explanation: "'By this time next year' specifies a future deadline by which an action will be completed, requiring the future perfect tense ('will have bought').",
    topic_name: "Future Perfect Tense",
    instruction_category: "Grammar"
  },
  {
    question_number: 55,
    question_text: "When we had a serious argument, Simon and I _____________ talk to each other for weeks.",
    option_a: "didn’t",
    option_b: "used to",
    option_c: "didn’t use to",
    option_d: "wouldn't",
    options: ["didn’t", "used to", "didn’t use to", "wouldn't"],
    correct_answer: "A",
    explanation: "'Didn't talk to each other for weeks' is the natural simple past expression describing the negative outcome of their argument.",
    topic_name: "Past Tense Usage",
    instruction_category: "Grammar"
  },
  {
    question_number: 56,
    question_text: "Writer Ernest Hemingway is known for his ___________ language and his lively dialogue.",
    option_a: "simply",
    option_b: "simple",
    option_c: "simplicity",
    option_d: "simplest",
    options: ["simply", "simple", "simplicity", "simplest"],
    correct_answer: "B",
    explanation: "An adjective is needed to modify the noun 'language'; 'simple' correctly describes Hemingway's famously direct prose style.",
    topic_name: "Parts of Speech - Adjectives",
    instruction_category: "Grammar"
  },
  {
    question_number: 57,
    question_text: "I am seriously sick; can you _____ home, teacher?",
    option_a: "let me go",
    option_b: "let me to go",
    option_c: "let me go to",
    option_d: "going",
    options: ["let me go", "let me to go", "let me go to", "going"],
    correct_answer: "A",
    explanation: "The causative verb 'let' is followed by the object and a bare infinitive without 'to': 'let + object + base verb' -> 'let me go'.",
    topic_name: "Causative Verbs (Let / Make / Have)",
    instruction_category: "Grammar"
  },
  {
    question_number: 58,
    question_text: "The decree made many people ____.",
    option_a: "to worry",
    option_b: "worry",
    option_c: "worrying",
    option_d: "being worried",
    options: ["to worry", "worry", "worrying", "being worried"],
    correct_answer: "B",
    explanation: "The causative verb 'make' in active voice takes a bare infinitive: 'make + someone + base verb' -> 'made many people worry'.",
    topic_name: "Causative Verbs (Make)",
    instruction_category: "Grammar"
  },
  {
    question_number: 59,
    question_text: "My teacher said: “I have covered the portion” means:",
    option_a: "He said he has covered the portion.",
    option_b: "He said he would cover the portion",
    option_c: "He said that he had covered the portion.",
    option_d: "He said that he covers the portion.",
    options: [
      "He said he has covered the portion.",
      "He said he would cover the portion",
      "He said that he had covered the portion.",
      "He said that he covers the portion."
    ],
    correct_answer: "C",
    explanation: "In reported speech with a past reporting verb ('said'), the present perfect ('have covered') backshifts to the past perfect ('had covered').",
    topic_name: "Reported Speech (Direct to Indirect)",
    instruction_category: "Grammar"
  },
  {
    question_number: 60,
    question_text: "Tulu joined the English Drama Club _________ he wanted to improve his intonation.",
    option_a: "although",
    option_b: "consequently",
    option_c: "due to",
    option_d: "because",
    options: ["although", "consequently", "due to", "because"],
    correct_answer: "D",
    explanation: "'Because' introduces a subordinate clause of reason/cause explaining why Tulu joined the drama club.",
    topic_name: "Conjunctions of Reason & Cause",
    instruction_category: "Grammar"
  },
  {
    question_number: 61,
    question_text: "My colleague said: “We will meet tomorrow”. This can be best stated as:",
    option_a: "My colleague said we would meet tomorrow.",
    option_b: "My colleague said we would meet the following day.",
    option_c: "My colleague said we would have met the following day.",
    option_d: "My colleague said we will meet the following day.",
    options: [
      "My colleague said we would meet tomorrow.",
      "My colleague said we would meet the following day.",
      "My colleague said we would have met the following day.",
      "My colleague said we will meet the following day."
    ],
    correct_answer: "B",
    explanation: "In indirect speech, the modal 'will' backshifts to 'would', and the time adverbial 'tomorrow' transforms into 'the following day' or 'the next day'.",
    topic_name: "Reported Speech - Time Adverbial Changes",
    instruction_category: "Grammar"
  },
  {
    question_number: 62,
    question_text: "__________ we didn’t have anything to do last weekend, we decided to rent a film.",
    option_a: "So",
    option_b: "As",
    option_c: "While",
    option_d: "However",
    options: ["So", "As", "While", "However"],
    correct_answer: "B",
    explanation: "'As' is used as a subordinating conjunction of cause (meaning 'since' or 'because') at the beginning of the sentence.",
    topic_name: "Conjunctions of Cause",
    instruction_category: "Grammar"
  },
  {
    question_number: 63,
    question_text: "I am not inviting many friends on the occasion of my son’s wedding _____ that the cost will be unmanageable.",
    option_a: "for fear",
    option_b: "lest",
    option_c: "in order",
    option_d: "A&B",
    options: ["for fear", "lest", "in order", "A&B"],
    correct_answer: "A",
    explanation: "'For fear that' is a conjunction phrase indicating apprehension or prevention of an undesirable consequence ('for fear that the cost will be unmanageable').",
    topic_name: "Conjunctions of Fear and Purpose",
    instruction_category: "Grammar"
  },
  {
    question_number: 64,
    question_text: "We all could not pronounce the word correctly. The word’s ______ is difficult.",
    option_a: "Pronouncing",
    option_b: "pronunciation",
    option_c: "pronounce",
    option_d: "All",
    options: ["Pronouncing", "pronunciation", "pronounce", "All"],
    correct_answer: "B",
    explanation: "A noun is required after the Saxon genitive ('word's'); 'pronunciation' is the correct noun form.",
    topic_name: "Word Formation & Noun Derivatives",
    instruction_category: "Grammar"
  },
  {
    question_number: 65,
    question_text: "The teacher to ____ I talked is teaching English.",
    option_a: "who",
    option_b: "whom",
    option_c: "which",
    option_d: "that",
    options: ["who", "whom", "which", "that"],
    correct_answer: "B",
    explanation: "After a preposition ('to'), the objective relative pronoun 'whom' is grammatically required when referring to a person.",
    topic_name: "Relative Clauses - Preposition + Whom",
    instruction_category: "Grammar"
  },
  {
    question_number: 66,
    question_text: "I do not know the place ______ you have put the book.",
    option_a: "when",
    option_b: "where",
    option_c: "which",
    option_d: "whom",
    options: ["when", "where", "which", "whom"],
    correct_answer: "B",
    explanation: "The relative adverb 'where' refers to a place or physical location.",
    topic_name: "Relative Adverbs (Place)",
    instruction_category: "Grammar"
  },
  {
    question_number: 67,
    question_text: "My younger brother reminds me of my paternal grandfather _______ he looks like my grandfather.",
    option_a: "also",
    option_b: "for instance",
    option_c: "because",
    option_d: "likewise",
    options: ["also", "for instance", "because", "likewise"],
    correct_answer: "C",
    explanation: "'Because' gives the logical reason why the brother reminds the speaker of their grandfather.",
    topic_name: "Connectors of Cause",
    instruction_category: "Grammar"
  },
  {
    question_number: 68,
    question_text: "My grandfather’s hobby was going to the feasts of the wedding ceremony of relatives and neighbors. My brother _______ enjoys going to night clubs.",
    option_a: "also",
    option_b: "too",
    option_c: "thus",
    option_d: "but",
    options: ["also", "too", "thus", "but"],
    correct_answer: "A",
    explanation: "'Also' is placed before the main verb 'enjoys' to add related information about hobbies and preferences.",
    topic_name: "Additive Transition Words",
    instruction_category: "Grammar"
  },

  // V. WRITING (69-80)
  // Section 1: Punctuation (69-72)
  {
    question_number: 69,
    question_text: "Choose the sentence which is correctly punctuated:",
    option_a: "I like three things, swimming, driving, and touring.",
    option_b: "I like three things: swimming, driving, and touring.",
    option_c: "I like three things; swimming, driving, and touring",
    option_d: "I like three things: swimming, driving and touring.",
    options: [
      "I like three things, swimming, driving, and touring.",
      "I like three things: swimming, driving, and touring.",
      "I like three things; swimming, driving, and touring",
      "I like three things: swimming, driving and touring."
    ],
    correct_answer: "B",
    explanation: "A colon is used after an independent clause to introduce a list of items, with commas and terminal punctuation correctly placed.",
    topic_name: "Punctuation - Colons and Serial Commas",
    instruction_category: "Writing Skills"
  },
  {
    question_number: 70,
    question_text: "Choose the sentence which is correctly punctuated:",
    option_a: "Whose is this pen; your’s or their’s?",
    option_b: "Whose is this pen? Your’s or their’s?",
    option_c: "Whose is this pen? Your’s or their’s?",
    option_d: "Whose is this pen? Yours or theirs?",
    options: [
      "Whose is this pen; your’s or their’s?",
      "Whose is this pen? Your’s or their’s?",
      "Whose is this pen? Your’s or their’s?",
      "Whose is this pen? Yours or theirs?"
    ],
    correct_answer: "D",
    explanation: "Possessive pronouns ('yours', 'theirs', 'hers', 'ours') never take an apostrophe. Option D punctuates both questions properly.",
    topic_name: "Punctuation - Possessive Pronouns vs Apostrophes",
    instruction_category: "Writing Skills"
  },
  {
    question_number: 71,
    question_text: "Choose the sentence which is correctly punctuated:",
    option_a: "\"What have I got in my pocket\"? he said aloud.",
    option_b: "\"What have I got in my pocket?” He said aloud.",
    option_c: "\"What have I got in my pocket,\" he said aloud.",
    option_d: "\"What have I got in my pocket?\" he said aloud.",
    options: [
      "\"What have I got in my pocket\"? he said aloud.",
      "\"What have I got in my pocket?” He said aloud.",
      "\"What have I got in my pocket,\" he said aloud.",
      "\"What have I got in my pocket?\" he said aloud."
    ],
    correct_answer: "D",
    explanation: "In direct dialogue, the question mark goes inside the closing quotation marks, and the dialogue tag ('he said aloud') begins with a lowercase letter.",
    topic_name: "Punctuation - Direct Speech Quotations",
    instruction_category: "Writing Skills"
  },
  {
    question_number: 72,
    question_text: "Choose the sentence which is correctly punctuated:",
    option_a: "Although I am 1.82 meters long; my brother is very short.",
    option_b: "Although I am 1:82 meters long; my brother is very short.",
    option_c: "Although I am 1.82 meters tall, my brother is very short.",
    option_d: "Although I am 1.82 meters long; my brother is very short.",
    options: [
      "Although I am 1.82 meters long; my brother is very short.",
      "Although I am 1:82 meters long; my brother is very short.",
      "Although I am 1.82 meters tall, my brother is very short.",
      "Although I am 1.82 meters long; my brother is very short."
    ],
    correct_answer: "C",
    explanation: "An introductory dependent adverbial clause ('Although...') is separated from the main clause by a comma, not a semicolon.",
    topic_name: "Punctuation - Dependent Clauses & Commas",
    instruction_category: "Writing Skills"
  },

  // Section 2: Types of Writing (73-75)
  {
    question_number: 73,
    question_text: "“My father’s name is Robert Oeleis. He died on Aug. 28th, 2003 of a heart attack. It was about six in the morning. I was sleeping restlessly and the phone rang again.” This extract is most likely taken from______________ writing.",
    option_a: "Descriptive",
    option_b: "Narrative",
    option_c: "Expository",
    option_d: "Persuasive",
    options: ["Descriptive", "Narrative", "Expository", "Persuasive"],
    correct_answer: "B",
    explanation: "Narrative writing tells a chronological personal story or recount of events involving characters, setting, and timeline.",
    topic_name: "Types of Writing - Narrative",
    instruction_category: "Writing Skills"
  },
  {
    question_number: 74,
    question_text: "“Snoring is a natural thing humans and animals do. The common factors for snoring are age, weight, using alcohol, and the position of sleep.” This extract is most likely taken from_____",
    option_a: "Problem-solution",
    option_b: "Cause and effect",
    option_c: "Classification",
    option_d: "Compare and contrast",
    options: ["Problem-solution", "Cause and effect", "Classification", "Compare and contrast"],
    correct_answer: "B",
    explanation: "Cause and effect expository structure identifies a phenomenon (snoring) and analyzes the contributing causal factors (age, weight, alcohol, sleep position).",
    topic_name: "Text Structure - Cause and Effect",
    instruction_category: "Writing Skills"
  },
  {
    question_number: 75,
    question_text: "“Meti is a young girl in her early twenties. She is short and plump. She has chocolate round face with dimples on both sides.” This extract is most likely taken from__________ writing.",
    option_a: "Descriptive",
    option_b: "Narrative",
    option_c: "Expository",
    option_d: "Persuasive",
    options: ["Descriptive", "Narrative", "Expository", "Persuasive"],
    correct_answer: "A",
    explanation: "Descriptive writing uses sensory details and vivid imagery to paint a picture of a person's physical appearance, features, and traits.",
    topic_name: "Types of Writing - Descriptive",
    instruction_category: "Writing Skills"
  },

  // Section 3: Jumbled Words (76-78)
  {
    question_number: 76,
    question_text: "Put the words in the proper order to make a correct sentence: [does to not class beautiful our the girl belong]",
    option_a: "Does the beautiful girl not belong to our class.",
    option_b: "Our beautiful girl does not belong to the class.",
    option_c: "The beautiful girl does not belong to our class.",
    option_d: "Does not the beautiful girl belong to our class.",
    options: [
      "Does the beautiful girl not belong to our class.",
      "Our beautiful girl does not belong to the class.",
      "The beautiful girl does not belong to our class.",
      "Does not the beautiful girl belong to our class."
    ],
    correct_answer: "C",
    explanation: "'The beautiful girl does not belong to our class.' arranges the subject determiner + adjective + noun, negative auxiliary verb + base verb, and prepositional phrase accurately.",
    topic_name: "Sentence Structure - Word Order",
    instruction_category: "Writing Skills"
  },
  {
    question_number: 77,
    question_text: "Put the words in the proper order to make a correct sentence: [before were in they a all packed room interview tiny started]",
    option_a: "All packed in a tiny room before they were started interview.",
    option_b: "Before they were packed started all interview in a tiny room.",
    option_c: "Interview was started before they all packed in a tiny room.",
    option_d: "They were all packed in a tiny room before interview started.",
    options: [
      "All packed in a tiny room before they were started interview.",
      "Before they were packed started all interview in a tiny room.",
      "Interview was started before they all packed in a tiny room.",
      "They were all packed in a tiny room before interview started."
    ],
    correct_answer: "D",
    explanation: "'They were all packed in a tiny room before interview started.' forms a grammatically coherent complex sentence.",
    topic_name: "Sentence Structure - Jumbled Words",
    instruction_category: "Writing Skills"
  },
  {
    question_number: 78,
    question_text: "Put the words in the proper order to make a correct sentence: [Was boy test the scored full difficult the although mark]",
    option_a: "Although was the test difficult, the boy scored full mark.",
    option_b: "The boy scored full test although the mark was difficult.",
    option_c: "Although the test was difficult, the boy scored full mark.",
    option_d: "Although the test scored full mark difficult, the boy was.",
    options: [
      "Although was the test difficult, the boy scored full mark.",
      "The boy scored full test although the mark was difficult.",
      "Although the test was difficult, the boy scored full mark.",
      "Although the test scored full mark difficult, the boy was."
    ],
    correct_answer: "C",
    explanation: "'Although the test was difficult, the boy scored full mark.' accurately places the subordinating conjunction clause followed by the main independent clause.",
    topic_name: "Sentence Structure - Complex Sentences",
    instruction_category: "Writing Skills"
  },

  // Section 4: Jumbled Sentences (79-80)
  {
    question_number: 79,
    question_text: "Reorder the jumbled sentences to make a coherent narrative:\na. Because the waitress thought a gorilla would be easily fooled, she charged it ten more dollars.\nb. The waitress was shocked to see a gorilla in the restaurant but brought the sandwich.\nc. When the waitress received the money from the gorilla, she said she didn’t often see gorillas in the restaurant.\nd. A gorilla walked to a restaurant and ordered a sandwich.\ne. The gorilla told her that at those prices, she wouldn’t see any more either.",
    option_a: "b c a d e",
    option_b: "d a e c b",
    option_c: "d b a c e",
    option_d: "d b a e c",
    options: ["b c a d e", "d a e c b", "d b a c e", "d b a e c"],
    correct_answer: "C",
    explanation: "Logical narrative flow: (d) Gorilla arrives & orders -> (b) Waitress is shocked but serves -> (a) Waitress overcharges -> (c) Waitress remarks about seeing gorillas -> (e) Gorilla delivers punchline.",
    topic_name: "Paragraph Organization - Narrative Coherence",
    instruction_category: "Writing Skills"
  },
  {
    question_number: 80,
    question_text: "Reorder the jumbled sentences to make a coherent expository paragraph:\na. You start to produce hormones which make your body function like an adult person.\nb. When you are a teenager, all sorts of changes happen to your body.\nc. All in all, there is a lot of pressure on the lifetime of the young people.\nd. These hormones, then, cause new feelings and desires that cannot be controlled easily.\ne. That’s why many young people give in to these powerful feelings.",
    option_a: "b d c a e",
    option_b: "c e d b a",
    option_c: "b a d e c",
    option_d: "b c d a e",
    options: ["b d c a e", "c e d b a", "b a d e c", "b c d a e"],
    correct_answer: "C",
    explanation: "Coherent sequence: (b) Topic sentence on teenage bodily changes -> (a) Hormonal production begins -> (d) Hormones trigger new intense feelings -> (e) Young people react -> (c) Concluding summary on pressure.",
    topic_name: "Paragraph Organization - Expository Flow",
    instruction_category: "Writing Skills"
  }
];

module.exports = questions;
