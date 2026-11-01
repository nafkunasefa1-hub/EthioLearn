// SAT 2014 ESSLCE Examination (All 60 Questions)

const satQuestions = [
  // Section One: Verbal Reasoning (Questions 1 - 35)
  // Classification Items (1-4)
  {
    question_number: 1,
    question_text: "Choose the word which does not fit the relation:",
    options: { A: "Aloof", B: "Sociable", C: "Reticent", D: "Haughty" },
    correct_answer: "B",
    explanation: "'Aloof', 'Reticent', and 'Haughty' all denote reserved, detached, or distant attitudes, whereas 'Sociable' means friendly, outgoing, and willing to interact with others.",
    section: "Verbal Classification"
  },
  {
    question_number: 2,
    question_text: "Choose the word which does not fit the relation:",
    options: { A: "Swindle", B: "Deceit", C: "Morbid", D: "Treachery" },
    correct_answer: "C",
    explanation: "'Swindle', 'Deceit', and 'Treachery' all relate to dishonesty, fraud, and betrayal, whereas 'Morbid' relates to an unhealthy interest in death or disease.",
    section: "Verbal Classification"
  },
  {
    question_number: 3,
    question_text: "Choose the word which does not fit the relation:",
    options: { A: "Scarce", B: "Intermittent", C: "Frequent", D: "Sporadic" },
    correct_answer: "C",
    explanation: "'Scarce', 'Intermittent', and 'Sporadic' denote irregularity, rarity, or infrequent occurrence, whereas 'Frequent' means occurring often at short intervals.",
    section: "Verbal Classification"
  },
  {
    question_number: 4,
    question_text: "Choose the word which does not fit the relation:",
    options: { A: "Commence", B: "Initiate", C: "Launch", D: "Cease" },
    correct_answer: "D",
    explanation: "'Commence', 'Initiate', and 'Launch' all mean to begin or start something, whereas 'Cease' means to stop or bring to an end.",
    section: "Verbal Classification"
  },

  // Analytical and Logical Reasoning (Questions 5-14)
  {
    question_number: 5,
    passage: "XYZ, a specialty restaurant, is open for business every Monday through Saturday but is closed Sundays. Lunch is the only meal served on Mondays, Tuesdays and Thursdays. Dinner is the only meal served on Wednesdays, Fridays and Saturdays. The restaurant's floors are polished and its plants are watered only on days that XYZ is open for business, according to the following schedule:\n• Plants are watered two days each week, but never on consecutive days and never on the same day that floors are polished.\n• Floors are polished on Monday and two other days each week, but never on consecutive days and never on the same day that plants are watered.",
    question_text: "According to the schedule, which of the following could be true?",
    options: {
      A: "Dinner is served on Thursday.",
      B: "Floors are polished on Tuesday.",
      C: "Lunch is served on Friday.",
      D: "Plants are watered on Saturday."
    },
    correct_answer: "D",
    explanation: "Dinner is served on Wed, Fri, Sat (so A and C are false). Floors are polished Monday and never consecutive days, so floors cannot be polished Tuesday (B is false). Plants can be watered on non-consecutive open days when floors are not polished, such as Saturday.",
    section: "Analytical Reasoning"
  },
  {
    question_number: 6,
    passage: "XYZ, a specialty restaurant schedule: Floors polished Monday and two other non-consecutive open days (Mon-Sat), never on the same day plants are watered (2 non-consecutive days).",
    question_text: "According to the schedule, the restaurant's floors are polished on either:",
    options: {
      A: "Thursday or Friday.",
      B: "Wednesday or Friday.",
      C: "Tuesday or Thursday.",
      D: "Tuesday or Wednesday."
    },
    correct_answer: "B",
    explanation: "Since Monday is a floor-polishing day, Tuesday cannot be a floor-polishing day (non-consecutive rule). The second polishing day must be Wednesday or Thursday. If polished Wednesday, the third day can be Friday or Saturday. Thus Wednesday or Friday are valid floor polishing days.",
    section: "Analytical Reasoning"
  },
  {
    question_number: 7,
    passage: "XYZ, a specialty restaurant: Lunch on Mon, Tue, Thu; Dinner on Wed, Fri, Sat. Floors polished on Mon + 2 other non-consecutive days. Plants watered 2 non-consecutive days, mutually exclusive with polishing.",
    question_text: "If dinner is served on a day that plants are watered, which of the following must be true?",
    options: {
      A: "Floors are polished on Wednesday.",
      B: "Plants are watered on Wednesday.",
      C: "Floors are polished on Thursday.",
      D: "Plants are watered on Tuesday."
    },
    correct_answer: "C",
    explanation: "If plants are watered on a dinner day (Wed, Fri, or Sat), floor polishing cannot occur on that day. Since floors are polished on 3 non-consecutive days starting with Monday, the floors must be polished on Thursday to accommodate the schedule without consecutive days.",
    section: "Analytical Reasoning"
  },
  {
    question_number: 8,
    passage: "Assume that floors are polished on consecutive instead of non-consecutive days but that all other scheduling policies are unchanged (Mon + 2 days, total 3 days; Plants watered 2 days, never same day).",
    question_text: "For how many of the six days can it be determined both whether plants are watered and whether floors are polished?",
    options: { A: "Six", B: "Four", C: "Three", D: "Two" },
    correct_answer: "A",
    explanation: "If floors are polished on consecutive days starting Monday, they must be polished Mon, Tue, and Wed. The remaining 3 open days (Thu, Fri, Sat) must house the 2 non-consecutive plant watering days (Thu and Sat, with Friday off). Thus all 6 days are uniquely determined.",
    section: "Analytical Reasoning"
  },
  {
    question_number: 9,
    passage: "A College in Addis Ababa has built its reputation for academic excellence largely on significant contributions from wealthy alumni who are fans of the college’s football team. Although the team has won more national championships over the years than any other team in its division, this year it did not even win the division title, and so the College can expect to see a decline in alumni contributions next year.",
    question_text: "The above argument relies on which of the following assumptions about the college?",
    options: {
      A: "The college's football team will continue its losing streak next year.",
      B: "The college's alumni contributions depend to an extent on a winning record by the college's football team.",
      C: "Contributions from alumni are needed for the college to produce a winning football team.",
      D: "The college's reputation for academic excellence depends on the performance of its football team."
    },
    correct_answer: "B",
    explanation: "The conclusion that alumni donations will decline because the team failed to win the division title directly assumes that the level of alumni giving is tied to the football team's winning success.",
    section: "Critical Reasoning"
  },
  {
    question_number: 10,
    passage: "It is well known that the world urgently needs the adequate distribution of food so that everyone gets enough. Adequate distribution of medicine is just as urgent as the need for food. Medical expertise and medical supplies need to be redistributed throughout the world so that people in emerging nations will have proper medical care.",
    question_text: "This paragraph best supports the statement that:",
    options: {
      A: "many people who live in emerging nations are not receiving proper medical care.",
      B: "the medical-supply industry should step up production of its products.",
      C: "most of the world's doctors are selfish about giving time and money to the poor.",
      D: "food production in emerging nations has slowed during the past several years."
    },
    correct_answer: "A",
    explanation: "The passage states that medical expertise and supplies need to be redistributed so that people in emerging nations will have proper medical care, directly implying that many in emerging nations currently lack proper medical care.",
    section: "Reading Inference"
  },
  {
    question_number: 11,
    question_text: "Five children are sitting in a row. S is sitting next to P but not T. K is sitting next to R who is sitting on the extreme left, and T is not sitting next to K. Who are sitting adjacent to S?",
    options: { A: "R & P", B: "K & P", C: "P & T", D: "Only P" },
    correct_answer: "B",
    explanation: "R is at the extreme left (Position 1: R). K is next to R (Position 2: K). T is not next to K, so T is at Position 5. S is next to P and not T, which places S at Position 3 and P at Position 4. The row order is R - K - S - P - T. Thus, K and P sit adjacent to S.",
    section: "Logical Arrangement"
  },
  {
    question_number: 12,
    question_text: "In a family, there are husband, wife, two sons and two daughters. All the ladies were invited to a dinner. Both sons went out to play. Husband did not return from office. Who was at home?",
    options: {
      A: "All ladies were at home.",
      B: "Only sons were at home.",
      C: "Nobody was at home.",
      D: "Only wife was at home."
    },
    correct_answer: "C",
    explanation: "All the ladies (mother and 2 daughters) went to dinner, both sons were out playing, and the husband was at the office. Therefore, nobody was at home.",
    section: "Logical Deductions"
  },
  {
    question_number: 13,
    passage: "Statement: Parents are prepared to pay any price for an elite education to their children.",
    question_text: "Choose the conclusion that can be reached based on the statement:",
    options: {
      A: "Rich parents were more concerned for their children's education than poor parents are.",
      B: "Parents are ready to do whatever they can to satisfy their children.",
      C: "Parents have an obsessive passion for perfect development of their children through good schooling.",
      D: "All parents these days are very well off."
    },
    correct_answer: "C",
    explanation: "The statement emphasizes that parents are willing to pay any price for high-quality schooling, reflecting their strong desire and priority for their children's educational development.",
    section: "Logical Conclusions"
  },
  {
    question_number: 14,
    passage: "Rearrange the following five sentences in proper sequence to form a meaningful paragraph:\n1. Kemal received a call to attend the interview.\n2. He applied for a new job.\n3. Kemal was an ambitious boy.\n4. But, he was not happy there.\n5. His father had put him in a clerical job.",
    question_text: "The correct order is:",
    options: {
      A: "4, 2, 1, 5, 3",
      B: "2, 4, 5, 3, 2",
      C: "2, 5, 4, 3, 1",
      D: "3, 5, 4, 2, 1"
    },
    correct_answer: "D",
    explanation: "The logical narrative sequence: 3 (Kemal was ambitious) → 5 (Father placed him in clerical job) → 4 (He was unhappy there) → 2 (He applied for a new job) → 1 (He received an interview call). Order: 3, 5, 4, 2, 1.",
    section: "Sentence Ordering"
  },

  // Antonyms (15-17)
  {
    question_number: 15,
    question_text: "Choose the word most nearly opposite in meaning to IMPARTIAL:",
    options: { A: "worried", B: "biased", C: "need", D: "hostile" },
    correct_answer: "B",
    explanation: "Impartial means unbiased, fair, and neutral. The exact opposite is 'biased' (prejudiced or favoring one side).",
    section: "Antonyms"
  },
  {
    question_number: 16,
    question_text: "Choose the word most nearly opposite in meaning to PROGRESS:",
    options: { A: "advance", B: "reversion", C: "movement", D: "silence" },
    correct_answer: "B",
    explanation: "Progress means forward movement or advancement. Its opposite is 'reversion' (or regression, moving backward).",
    section: "Antonyms"
  },
  {
    question_number: 17,
    question_text: "Choose the word most nearly opposite in meaning to CANDID:",
    options: { A: "deceptive", B: "cunning", C: "rude", D: "vague" },
    correct_answer: "A",
    explanation: "Candid means truthful, straightforward, and frank. The most direct opposite is 'deceptive' (misleading or dishonest).",
    section: "Antonyms"
  },

  // Reading Comprehension I (18-21)
  {
    question_number: 18,
    passage: "The coconut is an unusual food for many reasons. It is technically a seed, produced by the coconut palm tree, and as such is one of the largest edible seeds produced by any plant. Its unusual contents also make it unique in the seed world: the interior consists of both 'meat' and 'water.' The meat is the white pith with which we are all familiar, as it is used extensively for cooking and flavourings; the coconut water is a white liquid that is very sweet and thirst-quenching.\nPortuguese explorers gave the nut its name in the 15th century, referring to it as coco, meaning 'ghost' in their language. The three dimples and the hairy texture reminded them of a ghost's face, and the tree has retained that name ever since.\nThe coconut has many varied uses. It is used to make margarine, as well as various cooking oils, and these cooking oils are used by fast-food restaurants around the world to make such diet staples as French fries. The coconut fluid is a favorite drink in hot climates, providing a cool and refreshing beverage right off the tree. This water is also used by manufacturers of various sports drinks because of its isotonic electrolyte properties. Even the shell itself has many uses, including cattle food and fertilizer.",
    question_text: "The coconut earned the nickname 'ghost' because:",
    options: {
      A: "of its smell.",
      B: "it is round.",
      C: "it resembles a ghost's face.",
      D: "its pale color."
    },
    correct_answer: "C",
    explanation: "According to paragraph 2, Portuguese explorers named it 'coco' (ghost) because the three dimples and hairy texture reminded them of a ghost's face.",
    section: "Reading Comprehension"
  },
  {
    question_number: 19,
    passage: "The coconut passage (see above).",
    question_text: "What is the main focus of this passage?",
    options: {
      A: "Portuguese discoveries.",
      B: "how cooking oil is made",
      C: "Coconut trees and nuts have many varied characteristics and uses.",
      D: "the history of coconuts"
    },
    correct_answer: "C",
    explanation: "The passage discusses the physical uniqueness of the coconut, its naming origin, and its wide variety of dietary, industrial, and agricultural uses.",
    section: "Reading Comprehension"
  },
  {
    question_number: 20,
    passage: "The coconut passage (see above).",
    question_text: "The passage implies that coconut palms are:",
    options: {
      A: "coconut palms are good shade trees.",
      B: "Portuguese explorers loved coconuts.",
      C: "coconut oil is the best way to cook.",
      D: "highly valuable and versatile plants."
    },
    correct_answer: "D",
    explanation: "Because nearly every part of the coconut (meat, water, oil, shell) is utilized in foods, beverages, electrolytes, cattle feed, and fertilizer, it is shown to be a highly valuable plant.",
    section: "Reading Comprehension"
  },
  {
    question_number: 21,
    passage: "The coconut passage (see above).",
    question_text: "Coconut differs from most other seeds because of its:",
    options: { A: "flavour.", B: "unusual contents (interior meat and water).", C: "special uses.", D: "color." },
    correct_answer: "B",
    explanation: "Paragraph 1 states: 'Its unusual contents also make it unique in the seed world: the interior consists of both meat and water.'",
    section: "Reading Comprehension"
  },

  // Reading Comprehension II (22-25)
  {
    question_number: 22,
    passage: "Dogs and cats should never be permitted to eat chocolate because chocolate works like a poison in their bodies. Chocolate contains a chemical called theobromine, which is similar to caffeine. Human bodies are able to process the theobromine without any ill side effects, but dogs and cats cannot. Different types of chocolate contain different amounts of theobromine. It would take 20 ounces of milk chocolate to kill a 20-pound dog, but only two ounces of baker's chocolate or six ounces of semi-sweet chocolate. The amounts, of course, are much smaller for a cat, whose body weight is typically less than that of a dog. Most cats are not naturally attracted to eating chocolate, but many dogs are. Dogs by nature will sample nearly anything that they see their masters eating, so pet owners must take care to keep all chocolate products well out of reach of their dogs and cats.",
    question_text: "According to the passage, why is chocolate poisonous for dogs and cats?",
    options: {
      A: "They cannot process theobromine.",
      B: "It gets stuck in their intestines.",
      C: "Chocolate is made from processed cocoa.",
      D: "It contains caffeine."
    },
    correct_answer: "A",
    explanation: "The passage explicitly notes that human bodies can process theobromine safely, but dogs and cats cannot metabolize it, making it toxic.",
    section: "Reading Comprehension"
  },
  {
    question_number: 23,
    passage: "Chocolate toxicity passage (see above).",
    question_text: "According to the passage, how much milk chocolate would be poisonous to a cat?",
    options: {
      A: "half a Hershey bar",
      B: "approximately one pound",
      C: "substantially more than 20 ounces",
      D: "substantially less than 20 ounces"
    },
    correct_answer: "D",
    explanation: "The passage states that 20 ounces of milk chocolate can kill a 20-pound dog, and the lethal amount for a cat is 'much smaller' because a cat's body weight is much less.",
    section: "Reading Comprehension"
  },
  {
    question_number: 24,
    passage: "Chocolate toxicity passage (see above).",
    question_text: "Why might a dog eat chocolate, according to the passage?",
    options: {
      A: "Dogs like to sample what their masters eat.",
      B: "They can smell the theobromine.",
      C: "Dogs won't eat chocolate.",
      D: "Because it tastes good."
    },
    correct_answer: "A",
    explanation: "The text states: 'Dogs by nature will sample nearly anything that they see their masters eating.'",
    section: "Reading Comprehension"
  },
  {
    question_number: 25,
    passage: "Chocolate toxicity passage (see above).",
    question_text: "What best summarizes the moral / advice of this passage?",
    options: {
      A: "A penny saved is a penny earned.",
      B: "Monkey see, monkey do.",
      C: "Pet food for pets, people food for people (keep human chocolate away from pets).",
      D: "Look before you leap."
    },
    correct_answer: "C",
    explanation: "The passage highlights that foods harmless to humans (like chocolate) are lethal to pets, advising owners to keep human treats out of pets' reach.",
    section: "Reading Comprehension"
  },

  // Synonyms (26-28)
  {
    question_number: 26,
    question_text: "Choose the word most nearly SIMILAR in meaning to ATTACHMENT:",
    options: { A: "appendage", B: "causation", C: "influence", D: "affinity" },
    correct_answer: "D",
    explanation: "Attachment in emotional and interpersonal contexts refers to an affinity, close bond, or affection.",
    section: "Synonyms"
  },
  {
    question_number: 27,
    question_text: "Choose the word most nearly SIMILAR in meaning to FOUND (as a verb):",
    options: { A: "search", B: "realize", C: "establish", D: "see" },
    correct_answer: "C",
    explanation: "To 'found' an institution, city, or organization means to establish or set it up.",
    section: "Synonyms"
  },
  {
    question_number: 28,
    question_text: "Choose the word most nearly SIMILAR in meaning to ADVICE:",
    options: { A: "proposal", B: "practice", C: "counsel", D: "council" },
    correct_answer: "C",
    explanation: "Advice refers to guidance or recommendations offered with regard to prudent future action, synonymous with 'counsel'.",
    section: "Synonyms"
  },

  // Analogy (29-35)
  {
    question_number: 29,
    question_text: "BRIDGE is to RIVER as TUNNEL is to _____:",
    options: { A: "rock", B: "mountain", C: "underway", D: "nails" },
    correct_answer: "B",
    explanation: "A bridge provides a passage across a river; a tunnel provides a passage through a mountain.",
    section: "Verbal Analogy"
  },
  {
    question_number: 30,
    question_text: "PROSE is to POETRY as CONVERSATION is to _____:",
    options: { A: "song", B: "poem", C: "language", D: "listening" },
    correct_answer: "A",
    explanation: "Prose is spoken/written language in ordinary form compared to artistic verse (poetry); similarly, conversation is ordinary speech compared to musical vocal art (song).",
    section: "Verbal Analogy"
  },
  {
    question_number: 31,
    question_text: "READING is to KNOWLEDGE as WORK is to _____:",
    options: { A: "engagement", B: "experience", C: "employment", D: "money" },
    correct_answer: "B",
    explanation: "Reading yields knowledge through mental effort; working yields experience through practical effort.",
    section: "Verbal Analogy"
  },
  {
    question_number: 32,
    question_text: "COLLEGE is related to TEACHERS in the same way as HOSPITAL is related to:",
    options: { A: "beds", B: "medicine", C: "patients", D: "doctors" },
    correct_answer: "D",
    explanation: "Teachers are the primary professionals who provide service in a college; doctors are the primary professionals who provide service in a hospital.",
    section: "Verbal Analogy"
  },
  {
    question_number: 33,
    question_text: "TABLE is related to WOOD in the same way as SHIRT is related to:",
    options: { A: "uniform", B: "medicine", C: "cloth", D: "cotton" },
    correct_answer: "C",
    explanation: "A table is manufactured from wood (its direct material); a shirt is manufactured from cloth.",
    section: "Verbal Analogy"
  },
  {
    question_number: 34,
    question_text: "WALK is related to RUN in the same way as BREEZE is related to:",
    options: { A: "air", B: "wind", C: "dust", D: "cold" },
    correct_answer: "B",
    explanation: "Walking is a gentle pace of locomotion while running is intense; similarly, a breeze is a gentle motion of air while wind (or gale) is more intense.",
    section: "Verbal Analogy"
  },
  {
    question_number: 35,
    question_text: "WAX is related to GREASE in the same way as MILK is related to:",
    options: { A: "curd", B: "protein", C: "ghee", D: "drink" },
    correct_answer: "A",
    explanation: "Wax and grease are related fatty/lipid substances; milk transforms into curd as its standard solid derived dairy product.",
    section: "Verbal Analogy"
  },

  // SECTION TWO: Quantitative Reasoning (Questions 36-60)
  // Data Interpretation (36-40) Table:
  // 1996: Heavy=21, Light=32, Cars=202, Jeeps=146, Two-wheelers=349, Total=750
  // 1997: Heavy=43, Light=66, Cars=236, Jeeps=178, Two-wheelers=323, Total=846
  // 1998: Heavy=74, Light=75, Cars=232, Jeeps=217, Two-wheelers=402, Total=1000
  // 1999: Heavy=86, Light=94, Cars=289, Jeeps=256, Two-wheelers=418, Total=1143
  // 2000: Heavy=103, Light=119, Cars=261, Jeeps=235, Two-wheelers=476, Total=1194
  {
    question_number: 36,
    passage: "Table: Vehicle Sales by Category (in thousands):\n1996: Heavy 21, Light Commercial 32, Cars 202, Jeeps 146, Two-wheeler 349, Total 750\n1997: Heavy 43, Light Commercial 66, Cars 236, Jeeps 178, Two-wheeler 323, Total 846\n1998: Heavy 74, Light Commercial 75, Cars 232, Jeeps 217, Two-wheeler 402, Total 1000\n1999: Heavy 86, Light Commercial 94, Cars 289, Jeeps 256, Two-wheeler 418, Total 1143\n2000: Heavy 103, Light Commercial 119, Cars 261, Jeeps 235, Two-wheeler 476, Total 1194",
    question_text: "In which of the following years was the number of light commercial vehicles sold approximately 25% (1/4) of the number of two-wheelers sold in the same year?",
    options: { A: "1999", B: "1998", C: "2000", D: "1996" },
    correct_answer: "C",
    explanation: "In year 2000: Light Commercial = 119; Two-wheelers = 476. (119 / 476) × 100% = 25.0%.",
    section: "Data Interpretation"
  },
  {
    question_number: 37,
    passage: "Vehicle sales data: Heavy vehicles in 1999 = 86, in 2000 = 103.",
    question_text: "If the same percentage increase in the number of heavy vehicles as in 2000 over 1999 was expected in 2001 over 2000, approximately how many heavy vehicles were sold in 2001?",
    options: { A: "166", B: "123", C: "128", D: "138" },
    correct_answer: "B",
    explanation: "Percentage increase in 2000 over 1999 = (103 - 86) / 86 = 17 / 86 ≈ 19.77%. Expected sales in 2001 = 103 × (1 + 0.1977) = 103 × 1.1977 ≈ 123.36 ≈ 123 thousand.",
    section: "Data Interpretation"
  },
  {
    question_number: 38,
    passage: "Vehicle sales data: Heavy vehicles in 1999 = 86; Total vehicles in 1998 = 1000.",
    question_text: "What is the percentage of the number of heavy vehicles sold in 1999 to the total number of all vehicles sold in 1998?",
    options: { A: "9%", B: "8.6%", C: "7.5%", D: "12%" },
    correct_answer: "B",
    explanation: "Heavy vehicles in 1999 = 86. Total vehicles in 1998 = 1000. Percentage = (86 / 1000) × 100% = 8.6%.",
    section: "Data Interpretation"
  },
  {
    question_number: 39,
    passage: "Vehicle sales data: Two-wheelers to Total vehicles: 1996: 349/750 = 46.5%; 1997: 323/846 = 38.2%; 1998: 402/1000 = 40.2%; 1999: 418/1143 = 36.6%; 2000: 476/1194 = 39.9%.",
    question_text: "In which of the following years was the percentage of two-wheelers sold to the total vehicles sold highest?",
    options: { A: "1997", B: "1998", C: "1996", D: "1999" },
    correct_answer: "C",
    explanation: "In 1996, the ratio is 349 / 750 = 46.53%, which is higher than in any other year.",
    section: "Data Interpretation"
  },
  {
    question_number: 40,
    passage: "Vehicle sales data from 1996 to 1997: Heavy: 21→43 (+104.8%); Light Commercial: 32→66 (+106.25%); Cars: 202→236 (+16.8%); Jeeps: 146→178 (+21.9%).",
    question_text: "For which category of vehicles was the percentage increase in sales in 1997 over the previous year maximum?",
    options: { A: "Light commercial", B: "Jeeps", C: "Two-wheelers", D: "Cars" },
    correct_answer: "A",
    explanation: "Percentage increase for Light Commercial = (66 - 32)/32 × 100% = 106.25%, which is the highest among all categories.",
    section: "Data Interpretation"
  },
  {
    question_number: 41,
    question_text: "At a certain school, if the ratio of teachers to students is 1 to 10, which one of the following can be the total number of teachers and students in the school?",
    options: { A: "1,011", B: "144", C: "121", D: "100" },
    correct_answer: "C",
    explanation: "Ratio is 1 : 10, so total parts = 1 + 10 = 11. The total number must be a multiple of 11. 121 ÷ 11 = 11 (11 teachers and 110 students).",
    section: "Quantitative Reasoning"
  },
  {
    question_number: 42,
    question_text: "If x is 30% of 400, y is 40% of x, and z is 25% of y, which of the following is equal to x + y + z?",
    options: { A: "175", B: "150", C: "180", D: "120" },
    correct_answer: "C",
    explanation: "x = 0.30 × 400 = 120. y = 0.40 × 120 = 48. z = 0.25 × 48 = 12. Total = 120 + 48 + 12 = 180.",
    section: "Quantitative Reasoning"
  },
  {
    question_number: 43,
    question_text: "A radioactive substance decays at an annual rate of 17%. If the initial amount is 650 grams, which function h(t) models the remaining amount after t years?",
    options: {
      A: "h(t) = 650(0.83)ᵗ",
      B: "h(t) = 0.83(650)ᵗ",
      C: "h(t) = 650(0.17)ᵗ",
      D: "h(t) = 0.17(650)ᵗ"
    },
    correct_answer: "A",
    explanation: "Decay factor = 1 - 0.17 = 0.83. With initial amount A₀ = 650 g, the exponential decay model is h(t) = 650(0.83)ᵗ.",
    section: "Quantitative Reasoning"
  },
  {
    question_number: 44,
    question_text: "Which of the following is equal to the algebraic product ((2y + 6)/4) · ((3y - 36)/(3y + 9)) for all valid y?",
    options: { A: "y - 6", B: "(8y - 30)/(3y + 13)", C: "(y - 12)/2", D: "(12y² - 126)/(12y + 36)" },
    correct_answer: "C",
    explanation: "Factor both terms: (2(y + 3) / 4) · (3(y - 12) / 3(y + 3)) = ((y + 3)/2) · ((y - 12)/(y + 3)) = (y - 12) / 2.",
    section: "Algebra"
  },
  {
    question_number: 45,
    passage: "The diameter of a circle O is equal to the side length s of a square S (diameter d = 2r = s).",
    question_text: "Compare Column A (Area of circle O) and Column B (Area of square S):",
    options: {
      A: "The relationship cannot be determined.",
      B: "The two quantities are equal.",
      C: "The quantity in Column B is greater.",
      D: "The quantity in Column A is greater."
    },
    correct_answer: "C",
    explanation: "Let s = d = 2. Area of square S = s² = 4. Radius of circle r = d/2 = 1. Area of circle O = πr² = π(1)² = π ≈ 3.1416. Since 4 > 3.1416, Column B is greater.",
    section: "Quantitative Comparison"
  },
  {
    question_number: 46,
    passage: "Let y be a real number. Column A: (y + 1) · y · (y - 1); Column B: y · y · y = y³.",
    question_text: "Compare Column A and Column B:",
    options: {
      A: "The relationship cannot be determined.",
      B: "The two quantities are equal.",
      C: "The quantity in Column B is greater.",
      D: "The quantity in Column A is greater."
    },
    correct_answer: "A",
    explanation: "Column A simplifies to y(y² - 1) = y³ - y. If y = 0, both are 0 (equal). If y = 2, Column A is 6 and Column B is 8 (B > A). If y = -2, Column A is -6 and Column B is -8 (A > B). Thus, the relationship cannot be determined without knowing y.",
    section: "Quantitative Comparison"
  },
  {
    question_number: 47,
    question_text: "Which one of the following is equal to the arithmetic sequence {a_n} if a₅ + a₉ = 72 and a₇ + a₁₂ = 97?",
    options: {
      A: "3, 8, 13, 18, 23, ...",
      B: "4, 9, 14, 19, 24, ...",
      C: "5, 10, 15, 20, 25, ...",
      D: "6, 11, 16, 21, 26, ..."
    },
    correct_answer: "D",
    explanation: "a_n = a₁ + (n - 1)d. a₅ + a₉ = 2a₁ + 12d = 72 → a₁ + 6d = 36. a₇ + a₁₂ = 2a₁ + 17d = 97. Subtracting gives 5d = 25 → d = 5. Then a₁ + 6(5) = 36 → a₁ = 6. The sequence is 6, 11, 16, 21, 26, ...",
    section: "Sequences and Series"
  },
  {
    question_number: 48,
    question_text: "Which term of the geometric sequence 2, 8, 32, 128, ... is 2048?",
    options: { A: "7th", B: "6th", C: "12th", D: "11th" },
    correct_answer: "B",
    explanation: "a₁ = 2, common ratio r = 4. a_n = a₁ · r^(n-1) → 2 · 4^(n-1) = 2048 → 4^(n-1) = 1024 = 4⁵ → n - 1 = 5 → n = 6 (the 6th term).",
    section: "Geometric Sequences"
  },
  {
    question_number: 49,
    question_text: "In the arithmetic sequence: -1, n, 13, ..., what is the value of n?",
    options: { A: "8", B: "9", C: "6", D: "7" },
    correct_answer: "C",
    explanation: "In an arithmetic progression, the middle term is the arithmetic mean: n = (-1 + 13) / 2 = 12 / 2 = 6.",
    section: "Arithmetic Sequences"
  },
  {
    question_number: 50,
    question_text: "Which one of the following is a term in the arithmetic sequence 6, 14, 22, ...?",
    options: { A: "258", B: "284", C: "264", D: "246" },
    correct_answer: "D",
    explanation: "a₁ = 6, d = 8. Any term a_n satisfies a_n = 6 + 8(n - 1) = 8n - 2. Checking: 246 + 2 = 248, and 248 ÷ 8 = 31 (n = 31). None of the other options give an integer n.",
    section: "Arithmetic Sequences"
  },
  {
    question_number: 51,
    question_text: "Which one of the following is equal to the series ∑_{n=1}^∞ (2n - 5)?",
    options: {
      A: "(-3) + (-1) + 1 + ...",
      B: "1 + (-3) + (-7) + ...",
      C: "1 + (-3) + 1 + ...",
      D: "1 + 5 + 9 + ..."
    },
    correct_answer: "A",
    explanation: "For n=1: 2(1)-5 = -3. For n=2: 2(2)-5 = -1. For n=3: 2(3)-5 = +1. Thus the series is (-3) + (-1) + (1) + ...",
    section: "Series Expansion"
  },
  {
    question_number: 52,
    question_text: "A container has 235 flowers in colors: red, blue, yellow, and purple. There are 45 blue flowers, 1/5 are red, 40% are purple, and the rest are yellow. If a flower is picked at random, what is the probability it is yellow?",
    options: { A: "9/47", B: "49/235", C: "2/5", D: "1/5" },
    correct_answer: "B",
    explanation: "Total = 235. Blue = 45. Red = (1/5) × 235 = 47. Purple = 0.40 × 235 = 94. Yellow = 235 - (45 + 47 + 94) = 235 - 186 = 49. Probability = 49 / 235.",
    section: "Probability"
  },
  {
    question_number: 53,
    question_text: "A menu has 25 sandwiches, and 6 of them are toasted. What is the probability of randomly ordering a sandwich that is NOT toasted?",
    options: { A: "19/25", B: "16/25", C: "9/25", D: "6/25" },
    correct_answer: "A",
    explanation: "Non-toasted sandwiches = 25 - 6 = 19. Probability = 19 / 25.",
    section: "Probability"
  },
  {
    question_number: 54,
    question_text: "28 male lions and 172 female lions live in a park. If 35 more male lions are introduced, how many more female lions (x) should be introduced so that 6/7 of the total lions are female?",
    options: { A: "241", B: "324", C: "206", D: "378" },
    correct_answer: "C",
    explanation: "New male lions = 28 + 35 = 63. Since 6/7 of the total lions are female, 1/7 are male. If 1/7 of total = 63, Total = 63 × 7 = 441. Females needed = (6/7) × 441 = 378. Additional females = 378 - 172 = 206.",
    section: "Word Problems & Fractions"
  },
  {
    question_number: 55,
    question_text: "A business is owned by 1 man and 5 women, each with an equal 1/6 share. If one woman sells 2/5 of her share to the man, and another woman keeps 1/4 of her share and sells the rest (3/4) to the man, what fraction of the total business does the man now own?",
    options: { A: "43/120", B: "2/3", C: "37/120", D: "9/40" },
    correct_answer: "A",
    explanation: "Man's initial share = 1/6 = 20/120. From woman 1: (2/5) × (1/6) = 2/30 = 8/120. From woman 2: (3/4) × (1/6) = 3/24 = 15/120. Total man's share = (20 + 8 + 15) / 120 = 43/120.",
    section: "Fraction Problems"
  },
  {
    question_number: 56,
    question_text: "What is the value of x in the sequence: 1, 5, 14, 30, x, 91, ...?",
    options: { A: "75", B: "55", C: "65", D: "85" },
    correct_answer: "B",
    explanation: "The differences are consecutive perfect squares: 5 - 1 = 4 (2²); 14 - 5 = 9 (3²); 30 - 14 = 16 (4²); x - 30 = 25 (5²) → x = 55; 91 - 55 = 36 (6²). Thus x = 55.",
    section: "Number Sequences"
  },
  {
    question_number: 57,
    question_text: "What is the sum of the infinite geometric series: 3 + 1 + 1/3 + 1/9 + 1/27 + ...?",
    options: { A: "1/3", B: "2/9", C: "3/2", D: "9/2" },
    correct_answer: "D",
    explanation: "First term a = 3, common ratio r = 1/3. S_∞ = a / (1 - r) = 3 / (1 - 1/3) = 3 / (2/3) = 9/2 = 4.5.",
    section: "Infinite Geometric Series"
  },
  {
    question_number: 58,
    question_text: "In which quadrant is the solution to the system of equations 2x + 3y = 2 and 3x + 2y = 2 located?",
    options: { A: "Quadrant IV", B: "Quadrant II", C: "Quadrant III", D: "Quadrant I" },
    correct_answer: "D",
    explanation: "Adding both equations: 5x + 5y = 4 → x + y = 4/5. Subtracting: -x + y = 0 → x = y. Thus 2x = 4/5 → x = 2/5, y = 2/5. Since both x > 0 and y > 0, the point (0.4, 0.4) lies in Quadrant I.",
    section: "Coordinate Geometry"
  },
  {
    question_number: 59,
    question_text: "Given the inequality y ≤ 2x + 2, which of the following ordered pairs is NOT a solution?",
    options: { A: "(-1, 0)", B: "(-3, 3)", C: "(0, 2)", D: "(2, 3)" },
    correct_answer: "B",
    explanation: "Testing (-3, 3): 3 ≤ 2(-3) + 2 → 3 ≤ -4 (False). Testing others: (A) 0 ≤ 0 (True); (C) 2 ≤ 2 (True); (D) 3 ≤ 6 (True). Therefore, (-3, 3) is not a solution.",
    section: "Inequalities"
  },
  {
    question_number: 60,
    question_text: "The equation T = 25 + 3c models temperature T in °F based on cricket chirps c per minute. What is the estimated increase in temperature when the chirps increase by 1?",
    options: { A: "28°F", B: "25°F", C: "5°F", D: "3°F" },
    correct_answer: "D",
    explanation: "The slope of the linear equation T = 25 + 3c is 3, which means for every 1 unit increase in c (chirps/min), the temperature T increases by 3°F.",
    section: "Linear Modeling"
  }
];

module.exports = satQuestions;
