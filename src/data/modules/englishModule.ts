import { SubjectModule } from '../modulesData';

export const ENGLISH_MODULE: SubjectModule = {
  id: 'module-eng',
  subjectCode: 'ENG',
  subjectName: 'English',
  iconName: 'BookOpen',
  colorGradient: 'from-purple-600 via-violet-600 to-indigo-800',
  authorNote: 'Oromia Education Bureau • ASTU Special School (Writers: Tatek Hunde MA, Shimelis Bashe MA, Nuguse Kurfa MA)',
  description: 'High School English Communicative Grammar, Words Category, Phrasal Verbs, Active/Passive Voice, Gerunds & Infinitives, Subject-Verb Agreement, Tenses, Articles, Prepositions, Modal Verbs, Syntax, and EUEE Language Mastery.',
  units: [
    {
      unitNumber: 1,
      title: 'UNIT ONE: WORDS CATEGORY (NOUNS, ADJECTIVES, VERBS, ADVERBS, CONJUNCTIONS)',
      description: 'Classification and basic characteristics of Nouns, Royal Order & Degrees of Adjectives, Dynamic vs Stative Verbs, Adverbs, and Coordinating, Correlative & Subordinating Conjunctions.',
      topics: [
        {
          id: 'eng-1-1',
          topicNumber: '1.1',
          title: 'Nouns & Their Basic Classification',
          summary: 'Definition of Nouns, Proper, Common, Collective, Concrete, and Abstract Nouns.',
          content: `### 1.1 Nouns and Their Types

Definition of Nouns:
A noun is any member of a class of words that represents a person, place, thing, or idea. Nouns can serve as subject, direct object, indirect object, subject complement, object complement, or appositive in a sentence.

Types of Nouns:
1. Proper Nouns: Refer to specific individuals, places, or organizations and are always capitalized.
   • Examples: John, Addis Ababa, ASTU, Ethiopia.
2. Common Nouns: Refer to general categories or classes of things and are not capitalized unless at the start of a sentence.
   • Examples: city, teacher, school, country.
3. Collective Nouns: Refer to a group of items or individuals as a single unit.
   • Examples: team (of players), herd (of cattle), fleet (of ships), committee.
4. Concrete Nouns: Tangible objects perceived with the physical senses.
   • Examples: desk, book, computer, building.
5. Abstract Nouns: Intangible concepts, qualities, states, or ideas.
   • Examples: freedom, happiness, knowledge, beauty, justice.

Basic Characteristics of Nouns:
• Most countable nouns have singular and plural inflections (child -> children, boy -> boys).
• Nouns can be preceded by articles (a, an, the) and determiners (eight, few, many).
• Nouns show possessive case using apostrophes (Student's book, Students' cafeteria).`,
          workedExamples: [
            {
              problem: 'Identify the noun types in: "The committee in Addis Ababa demonstrated remarkable wisdom."',
              solution: '• "committee": Collective Noun\n• "Addis Ababa": Proper Noun (capitalized geographic entity)\n• "wisdom": Abstract Noun (intangible quality of the mind)'
            },
            {
              problem: 'Determine whether the noun "information" is countable or uncountable in English.',
              solution: '"Information" is uncountable (mass noun). It cannot take a plural -s ("informations" is incorrect) and cannot take the indefinite article "a/an" directly. We say "a piece of information".'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following words is an abstract noun?',
              options: ['Fleet', 'Desk', 'Knowledge', 'Teacher'],
              correctIndex: 2,
              explanation: '"Knowledge" refers to an intangible concept, state, or mental quality, whereas desk is concrete, fleet is collective, and teacher is common.'
            },
            {
              question: 'A large group of ships sailing together is referred to by the collective noun:',
              options: ['Flock', 'Fleet', 'Pack', 'Herd'],
              correctIndex: 1,
              explanation: '"Fleet" is the specific collective noun for a collection of ships or naval vessels.'
            },
            {
              question: 'Choose the sentence that correctly uses the plural form of irregular nouns:',
              options: [
                'The childs saw many sheeps on the farm.',
                'The children saw many sheep on the farm.',
                'The childrens saw many sheeps on the farm.',
                'The children saw many sheepes on the farm.'
              ],
              correctIndex: 1,
              explanation: 'The irregular plural of "child" is "children", and "sheep" remains unchanged in plural ("sheep").'
            }
          ]
        },
        {
          id: 'eng-1-2',
          topicNumber: '1.2',
          title: 'Adjectives: Royal Order & Degrees of Comparison',
          summary: 'Order of adjectives in sentences (OSASCOMP rule) and Positive, Comparative, Superlative degrees.',
          content: `### 1.2 Adjectives and Order of Adjectives

Adjectives describe or modify nouns and pronouns. They tell us "which one", "what kind", or "how many".

The Royal Order of Adjectives (OSASCOMP):
When multiple adjectives precede a noun, they strictly follow this sequence:
1. Opinion / Quality: beautiful, delicious, ugly, comfortable
2. Size: large, small, tiny, huge
3. Age: old, young, ancient, new
4. Shape: round, square, rectangular, oval
5. Color: red, blue, green, black
6. Origin / Nationality: Ethiopian, British, Italian, Japanese
7. Material: wooden, silk, metallic, leather, plastic
8. Purpose / Qualifier: cooking (oil), sleeping (bag), wedding (dress)

Example Sentence:
"She bought a beautiful (Opinion) small (Size) old (Age) round (Shape) red (Color) Ethiopian (Origin) wooden (Material) coffee (Purpose) table."

Degrees of Adjectives:
• Absolute (Positive): "Kume is tall."
• Comparative: "Kume is taller than Yeshi."
• Superlative: "Kume is the tallest student in the class."`,
          workedExamples: [
            {
              problem: 'Arrange in correct order: "leather / dark / expensive / Italian / new / jacket"',
              solution: 'Order: Opinion (expensive) -> Age (new) -> Color (dark) -> Origin (Italian) -> Material (leather)\nResult: "expensive new dark Italian leather jacket"'
            },
            {
              problem: 'Complete with the correct degree: "Of the two brothers, Dawit is the (taller / tallest)."',
              solution: 'When comparing exactly two items or people, the comparative degree is required. Correct: "taller".'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following sentences exhibits the correct royal order of adjectives?',
              options: [
                'She wore a silk black beautiful dress.',
                'She wore a beautiful long black silk dress.',
                'She wore a black long silk beautiful dress.',
                'She wore a long silk beautiful black dress.'
              ],
              correctIndex: 1,
              explanation: 'Follows OSASCOMP: Opinion (beautiful) -> Size/Length (long) -> Color (black) -> Material (silk).'
            },
            {
              question: 'Choose the correct sequence of adjectives to fill the blank: "He bought a _______ car."',
              options: [
                'German fast red sports',
                'fast red German sports',
                'red fast German sports',
                'sports fast German red'
              ],
              correctIndex: 1,
              explanation: 'Opinion/Speed (fast) -> Color (red) -> Origin (German) -> Purpose (sports).'
            },
            {
              question: 'This is by far the _______ film I have ever watched in my life.',
              options: ['worse', 'baddest', 'worst', 'more bad'],
              correctIndex: 2,
              explanation: 'The superlative form of the irregular adjective "bad" is "worst".'
            }
          ]
        },
        {
          id: 'eng-1-3',
          topicNumber: '1.3',
          title: 'Dynamic vs Stative Verbs & Conjunctions',
          summary: 'Action verbs vs stative state-of-being verbs, and Coordinating (FANBOYS), Correlative & Subordinating conjunctions.',
          content: `### 1.3 Verbs and Conjunctions

Dynamic (Action) vs Stative Verbs:
1. Dynamic Verbs: Describe physical actions, activities, or mental processes. Can be used in continuous/progressive tenses.
   • Examples: run, write, study, build, swim, think (process).
2. Stative Verbs: Describe a state, condition, feeling, or perception. CANNOT normally be used in continuous (-ing) tenses.
   • Examples: love, hate, know, believe, understand, belong, fit, prefer, want.
   • Incorrect: "I am knowing the answer."
   • Correct: "I know the answer."

Types of Conjunctions:
1. Coordinating Conjunctions (FANBOYS): Join clauses of equal grammatical rank.
   • For, And, Nor, But, Or, Yet, So.
2. Correlative Conjunctions: Paired conjunctions working together.
   • Both...and, Either...or, Neither...nor, Not only...but also, Whether...or.
   • Example: "Not only is he intelligent, but he is also hard-working."
3. Subordinating Conjunctions: Connect dependent clauses to independent clauses.
   • Because, although, since, unless, while, whereas, as soon as, provided that.`,
          workedExamples: [
            {
              problem: 'Correct the sentence: "I am loving this traditional music."',
              solution: '"Love" is a stative verb expressing emotional feeling, so it cannot be used in continuous progressive aspect. Correct: "I love this traditional music."'
            },
            {
              problem: 'Join the clauses using correlative conjunctions: "He did not study. He did not attend class."',
              solution: 'Using neither...nor: "He neither studied nor attended class."'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following verbs is a stative verb that CANNOT normally be used in the continuous progressive (-ing) aspect?',
              options: ['Write', 'Believe', 'Run', 'Dance'],
              correctIndex: 1,
              explanation: '"Believe" is a stative verb of cognition; saying "I am believing you" is grammatically incorrect.'
            },
            {
              question: 'Select the coordinating conjunction that expresses unexpected contrast or concession:',
              options: ['And', 'So', 'Yet', 'For'],
              correctIndex: 2,
              explanation: '"Yet" functions like "but" to introduce an unexpected contrast between equal clauses.'
            },
            {
              question: 'Complete the sentence: "_______ it was raining heavily, the football match continued."',
              options: ['Despite', 'Although', 'In spite of', 'Because'],
              correctIndex: 1,
              explanation: '"Although" is a subordinating conjunction followed by a full subject-verb clause ("it was raining"). "Despite" must be followed by a noun phrase.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'UNIT TWO: PHRASAL VERBS',
      description: 'Separable vs Inseparable phrasal verbs, pronoun object rules, phrasal verb collocations and EUEE exam mastery.',
      topics: [
        {
          id: 'eng-2-1',
          topicNumber: '2.1',
          title: 'Phrasal Verbs: Rules, Separability & Usage',
          summary: 'Verb + preposition/adverb combinations, separable object positioning, and high-frequency phrasal verbs.',
          content: `### 2.1 Phrasal Verbs Rules & Mechanics

A phrasal verb combines a normal base verb with a particle (preposition or adverb) to create an idiomatic verbal expression with a new meaning.

Separable vs Inseparable Phrasal Verbs:
1. Separable Phrasal Verbs:
   • The direct object can be placed EITHER after the phrasal verb OR between the verb and the particle.
   • Example: "Turn off the light" OR "Turn the light off."
   • CRITICAL PRONOUN RULE: If the direct object is a PRONOUN (it, them, him, her, me), it MUST be placed IN THE MIDDLE!
     - Correct: "Turn it off."
     - Incorrect: "Turn off it."
2. Inseparable Phrasal Verbs:
   • The verb and particle must stay together; the object always follows the particle.
   • Examples: look after, call on, run into, get over, look forward to.
   • Example: "She looked after her sick brother." (NOT "looked her brother after").

High-Frequency EUEE Phrasal Verbs:
• Call off: Cancel (e.g. "The match was called off due to heavy rain.")
• Carry on: Continue doing something.
• Cut down on: Reduce consumption.
• Do away with: Eliminate or abolish.
• Figure out: Understand or solve a problem.
• Look forward to (+ V-ing): Anticipate with pleasure.
• Pass away: Die (polite expression).
• Put off: Postpone or delay.
• Put through: Connect by telephone.`,
          workedExamples: [
            {
              problem: 'Choose correct pronoun placement for phrasal verb "pick up" with pronoun "them":',
              solution: 'Since "pick up" is separable and "them" is an object pronoun, it must go in between: "Pick them up."'
            },
            {
              problem: 'What is the meaning of "call off" versus "put off"?',
              solution: '• "Call off" means to CANCEL permanently ("The exam was called off").\n• "Put off" means to POSTPONE or delay to a later date ("The exam was put off until Monday").'
            }
          ],
          practiceQuestions: [
            {
              question: 'The meeting was _____ because the manager fell ill.',
              options: ['called for', 'called off', 'called out', 'called in'],
              correctIndex: 1,
              explanation: '"Called off" means canceled.'
            },
            {
              question: 'We cannot afford to delay the decision any longer; we have already _______ the meeting twice.',
              options: ['put off', 'put on', 'put out', 'put up'],
              correctIndex: 0,
              explanation: '"Put off" means postponed or delayed.'
            },
            {
              question: 'Choose the grammatically correct sentence involving an object pronoun with a separable phrasal verb:',
              options: [
                'Please throw away it immediately.',
                'Please throw it away immediately.',
                'Please throw away them now.',
                'Please look after it him.'
              ],
              correctIndex: 1,
              explanation: 'When the object of a separable phrasal verb is a pronoun (it, them), it must be placed between the verb and particle ("throw it away").'
            },
            {
              question: 'I am really looking forward to _______ my grandparents during the semester break.',
              options: ['visit', 'visiting', 'visited', 'have visited'],
              correctIndex: 1,
              explanation: 'In the phrasal expression "look forward to", "to" is a preposition, which must be followed by a gerund (-ing form): "visiting".'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'UNIT THREE: VOICES IN ENGLISH (ACTIVE AND PASSIVE)',
      description: 'Forming passive voice across all tenses, modal passives, agent selection (by + agent), and formal writing applications.',
      topics: [
        {
          id: 'eng-3-1',
          topicNumber: '3.1',
          title: 'Active & Passive Voice Transformations',
          summary: 'Grammar structure: Object + Form of Be + Past Participle (V3), and tense conversion rules.',
          content: `### 3.1 Active and Passive Voice

Forming Passive Voice:
Standard Passive Formula:
Subject (Original Object) + [Appropriate Tense Form of BE] + Past Participle (V3) + [by + Agent]

Tense Transformations Table:
| Tense | Active Voice | Passive Voice |
| :--- | :--- | :--- |
| Simple Present | She writes the report. | The report is written by her. |
| Present Continuous | She is writing the report. | The report is being written by her. |
| Present Perfect | She has written the report. | The report has been written by her. |
| Simple Past | She wrote the report. | The report was written by her. |
| Past Continuous | She was writing the report. | The report was being written by her. |
| Past Perfect | She had written the report. | The report had been written by her. |
| Simple Future | She will write the report. | The report will be written by her. |
| Modal Verbs | She must write the report. | The report must be written by her. |

When to Use Passive Voice:
1. When the agent / performer is unknown: "The bank was robbed last night."
2. When the action is more important than who did it: "Harvard University was founded in 1636."
3. In formal scientific, technical, or academic reporting.`,
          workedExamples: [
            {
              problem: 'Convert to passive: "The bank manager told me that someone had not paid for the house."',
              solution: 'Passive: "The bank manager told me that the house had not been paid for."'
            },
            {
              problem: 'Convert to passive: "Engineers are constructing a new bridge across the Abay River."',
              solution: 'Active is Present Continuous. Formula: is/are being + V3.\nPassive: "A new bridge is being constructed across the Abay River by engineers."'
            }
          ],
          practiceQuestions: [
            {
              question: 'Which of the following represents the correct passive conversion of: "They will announce the entrance exam results tomorrow"?',
              options: [
                'The entrance exam results will be announced tomorrow.',
                'The entrance exam results are being announced tomorrow.',
                'The entrance exam results have been announced tomorrow.',
                'The entrance exam results would announce tomorrow.'
              ],
              correctIndex: 0,
              explanation: 'Modal/future passive uses "will + be + V3": "will be announced".'
            },
            {
              question: 'Change into passive voice: "Someone has stolen my laptop from the library."',
              options: [
                'My laptop was stolen from the library.',
                'My laptop has been stolen from the library.',
                'My laptop is being stolen from the library.',
                'My laptop had been stolen from the library.'
              ],
              correctIndex: 1,
              explanation: 'Present perfect active ("has stolen") converts to present perfect passive ("has been stolen").'
            },
            {
              question: 'Identify the sentence written in the passive voice:',
              options: [
                'The teacher praised the diligent student.',
                'The diligent student completed the homework.',
                'The student was praised by the headmaster.',
                'The students are studying for the upcoming national exam.'
              ],
              correctIndex: 2,
              explanation: '"The student was praised by the headmaster" uses form of be (was) + past participle (praised) + by agent.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'UNIT FOUR: GERUNDS AND INFINITIVES',
      description: 'Verbs followed by infinitives (to + V), gerunds (V-ing), both without meaning change, and verbs with critical meaning changes (forget, regret, stop, remember).',
      topics: [
        {
          id: 'eng-4-1',
          topicNumber: '4.1',
          title: 'Infinitive & Gerund Structures',
          summary: 'Verb classification guidelines, purpose clauses, and verbs with meaning changes.',
          content: `### 4.1 Gerunds and Infinitives

1. Infinitives (To + Base Verb):
• Used after specific verbs: agree, decide, manage, offer, plan, refuse, promise, attempt, hope, afford, demand.
  - Example: "He decided to apply for the scholarship."
• Used to express purpose: "He turned on the light to see clearly."

2. Gerunds (Verb + -ing as a Noun):
• Used after specific verbs: avoid, enjoy, finish, mind, postpone, practice, recommend, suggest, resist, miss, admit.
  - Example: "She enjoys reading historical novels."
• Used after prepositions: "interested in", "look forward to", "tired of", "instead of", "afraid of".
  - Example: "We look forward to meeting you."

3. Verbs with CRITICAL Meaning Changes:
• Stop:
  - Stop + To-Infinitive: Interrupt one action in order to do another. ("He stopped to drink water.")
  - Stop + Gerund: Cease or quit an activity completely. ("He stopped smoking cigarettes.")
• Regret:
  - Regret + To-Infinitive: Regret having to deliver bad news. ("I regret to inform you that your application was unsuccessful.")
  - Regret + Gerund: Regret a past action. ("He regrets buying that expensive car.")
• Forget / Remember:
  - Forget + To-Infinitive: Fail to perform a task. ("Don't forget to lock the door.")
  - Forget + Gerund: Forget a past memory. ("I will never forget visiting Lalibela.")`,
          workedExamples: [
            {
              problem: 'Choose correct verb form: "He avoids (to talk / talking) during lectures."',
              solution: '"Avoid" is always followed by a gerund. Correct: "talking".'
            },
            {
              problem: 'Explain the difference between: (A) "He stopped to smoke." (B) "He stopped smoking."',
              solution: '• (A) "stopped to smoke" means he paused whatever he was doing in order to smoke.\n• (B) "stopped smoking" means he quit the habit of smoking completely.'
            }
          ],
          practiceQuestions: [
            {
              question: 'The doctor advised him to give up _______ junk food late at night.',
              options: ['eat', 'eating', 'to eat', 'having eaten'],
              correctIndex: 1,
              explanation: '"Give up" is a phrasal verb ending in preposition "up", which strictly requires a gerund: "eating".'
            },
            {
              question: 'After extensive negotiations, both political parties finally agreed _______ the peace treaty.',
              options: ['sign', 'signing', 'to sign', 'for signing'],
              correctIndex: 2,
              explanation: 'The verb "agree" is followed by a to-infinitive: "to sign".'
            },
            {
              question: 'I vividly remember _______ my front door before leaving for work this morning.',
              options: ['lock', 'to lock', 'locking', 'locked'],
              correctIndex: 2,
              explanation: '"Remember + gerund" refers to remembering a past event or memory that already happened.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 5,
      title: 'UNIT FIVE: SUBJECT-VERB AGREEMENT',
      description: 'Subject-verb concord rules, compound subjects, correlative conjunction proximity rule, collective nouns, indefinite pronouns, and fractional expressions.',
      topics: [
        {
          id: 'eng-5-1',
          topicNumber: '5.1',
          title: 'Subject-Verb Concord Rules & Exam Applications',
          summary: 'Rules for singular/plural subject-verb agreement and common national exam trap patterns.',
          content: `### 5.1 Rules of Subject-Verb Concord

Rule 1: Compound Subjects Joined by "And":
Take a plural verb. ("The student and the teacher write every day.")

Rule 2: Singular Nouns Connected by "Or" / "Nor":
Take a singular verb. ("Either the CEO or the manager approves the budget.")

Rule 3: Correlative Conjunction Proximity Rule (Either...or, Neither...nor, Not only...but also):
The verb agrees with the subject CLOSER to it!
• "Either the teacher or the students are in the library." (students -> plural verb 'are')
• "Either the students or the teacher is in the library." (teacher -> singular verb 'is')

Rule 4: Indefinite Pronouns:
Each, every, everyone, everybody, nobody, someone, somebody, anybody, neither, either are SINGULAR!
• "Each of the teachers is willing to attend."
• "Nobody has come for the party yet."

Rule 5: Fractions and Percentages:
Verb agrees with the noun following the preposition "of":
• "Forty percent of the milk HAS been sold." (milk -> uncountable -> singular 'has')
• "Forty percent of the students HAVE passed." (students -> plural -> plural 'have')

Rule 6: Collective Nouns:
Singular when acting as a single unit ("The committee has agreed"), plural when individual members act separately.`,
          workedExamples: [
            {
              problem: 'Select correct verb: "Neither of the two candidates (is / are) qualified."',
              solution: '"Neither" as an indefinite pronoun takes a singular verb. Correct: "is".'
            },
            {
              problem: 'Select correct verb: "Not only the players but also the coach (was / were) celebrating."',
              solution: 'By the proximity rule for "not only...but also", the verb agrees with the closer subject "the coach" (singular). Correct: "was".'
            }
          ],
          practiceQuestions: [
            {
              question: 'Neither the principal nor the teachers _______ present at the regional education symposium yesterday.',
              options: ['was', 'were', 'is', 'are'],
              correctIndex: 1,
              explanation: 'With "neither...nor", the verb agrees with the closer subject ("teachers", plural past ⟹ "were").'
            },
            {
              question: 'Every student in the boarding school _______ required to wear the official uniform.',
              options: ['are', 'is', 'were', 'have been'],
              correctIndex: 1,
              explanation: '"Every" takes a singular noun and a singular verb ("is").'
            },
            {
              question: 'Two-thirds of the fresh milk in the refrigerator _______ spoiled.',
              options: ['is', 'are', 'were', 'have'],
              correctIndex: 0,
              explanation: 'With fractions and percentages, concord depends on the noun in the of-phrase. "Milk" is uncountable, so singular "is" is used.'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 6,
      title: 'UNIT SIX: ENGLISH TENSES & ASPECT SYSTEMS',
      description: 'Complete breakdown of 12 English tenses: Present, Past, and Future simple, continuous, perfect, and perfect continuous forms with time signals.',
      topics: [
        {
          id: 'eng-6-1',
          topicNumber: '6.1',
          title: 'Comprehensive Mastery of Tenses',
          summary: 'Structures, time markers, and sequential event rules across all 12 tenses.',
          content: `### 6.1 English Tense System Overview

Present Tenses:
• Simple Present: Habitual actions, general truths, timetables. ("She studies every night.")
• Present Continuous: Temporary actions happening now, fixed future plans. ("They are taking the exam now.")
• Present Perfect: Past actions with present relevance, life experiences up to now. ("I have completed three units.")
• Present Perfect Continuous: Action started in past and continuing until now. ("He has been working for 4 hours.")

Past Tenses:
• Simple Past: Completed action at a specific past time. ("We finished yesterday.")
• Past Continuous: Action in progress at a specific past moment or interrupted action. ("I was studying when he called.")
• Past Perfect: Action completed BEFORE another past action. ("When the plane landed, they had already left.")
• Past Perfect Continuous: Duration of an action up until a past point. ("She had been waiting for 2 hours before the bus arrived.")

Future Tenses:
• Simple Future (will / be going to): Predictions, promises, spontaneous decisions vs planned intentions.
• Future Perfect (will have + V3): Action that WILL be completed before a future time. ("By 2026, he will have graduated.")
• Future Perfect Continuous (will have been + V-ing): Duration of action up to a future point. ("By next month, I will have been living here for 5 years.")`,
          workedExamples: [
            {
              problem: 'Choose correct tense: "By the time I arrived at the station, the train (left / had left)."',
              solution: 'The train departed BEFORE "I arrived" in the past, so use Past Perfect: "had left".'
            },
            {
              problem: 'Choose correct tense: "She (live) in Hawassa for ten years before she moved to Addis Ababa."',
              solution: 'Living in Hawassa took place prior to moving in the past. Correct: "had lived" (or "had been living").'
            }
          ],
          practiceQuestions: [
            {
              question: 'By the end of this academic year, the university students _______ all their graduation requirements.',
              options: ['will complete', 'will have completed', 'have completed', 'had completed'],
              correctIndex: 1,
              explanation: '"By the end of [future time]" signals the Future Perfect tense (will have + V3).'
            },
            {
              question: 'When the telephone rang, Martha _______ a chemical experiment in the laboratory.',
              options: ['is performing', 'was performing', 'has performed', 'performed'],
              correctIndex: 1,
              explanation: 'Past Continuous ("was performing") describes an action in progress that was interrupted by a shorter action in the Simple Past ("rang").'
            },
            {
              question: 'He _______ in this secondary school since 2015 and loves his teaching job.',
              options: ['is teaching', 'has been teaching', 'taught', 'had taught'],
              correctIndex: 1,
              explanation: 'Action started in 2015 and continues into the present, signaled by "since 2015", requiring Present Perfect Continuous ("has been teaching").'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 7,
      title: 'UNIT SEVEN: ARTICLES & PREPOSITIONS',
      description: 'Definite article "the" vs indefinite articles "a/an", zero article rules, prepositions of time/place, and verb-preposition collocations.',
      topics: [
        {
          id: 'eng-7-1',
          topicNumber: '7.1',
          title: 'Articles & Prepositional Collocations',
          summary: 'Definite vs indefinite article usage, zero article rules, and fixed prepositional collocations.',
          content: `### 7.1 Articles and Prepositions

Articles (a, an, the, zero article):
• Indefinite Article (a / an): Used with singular countable nouns mentioned for the first time or in general.
  - "a" before consonant sound ("a book", "a European country" [y-sound]).
  - "an" before vowel sound ("an hour" [silent h], "an apple").
• Definite Article (the): Used when referring to a specific noun, unique celestial bodies (the Sun, the Moon), superlatives (the best), or national groups (the British).
• Omission of Articles (Zero Article):
  - Abstract nouns in general sense ("Creativity is valuable.")
  - Academic subjects and sports ("He likes math", "She plays tennis.")
  - Languages ("She speaks French.")
  - Cities and most countries ("Addis Ababa", "Ethiopia" - EXCEPT "the USA", "the UK").

Fixed Prepositional Collocations:
• Afraid OF, Interested IN, Depend ON, Listen TO, Talk TO (someone), Talk ABOUT (something), Look FORWARD TO (+ V-ing), Consist OF, Rely ON, Suffer FROM, Good AT.`,
          workedExamples: [
            {
              problem: 'Fill articles: "___ USA is ___ country in North America."',
              solution: '"the USA" (country name with plural/republic/union form takes "the"); "a country" (general singular). Correct: "The USA is a country..."'
            },
            {
              problem: 'Choose the correct preposition: "She congratulated him (for / on) passing the national entrance exam."',
              solution: 'The verb "congratulate" takes the fixed preposition "on": "congratulated him on passing".'
            }
          ],
          practiceQuestions: [
            {
              question: 'Mount Everest is _______ highest mountain in _______ world.',
              options: ['a / the', 'the / a', 'the / the', 'zero / the'],
              correctIndex: 2,
              explanation: 'Superlatives take "the" ("the highest"), and unique global entities take "the" ("the world").'
            },
            {
              question: 'Abebe is extremely good _______ solving complex mathematical equations.',
              options: ['in', 'at', 'with', 'for'],
              correctIndex: 1,
              explanation: 'The adjective "good" collocates with "at" to denote proficiency or skill in an activity.'
            },
            {
              question: 'He is studying hard because he wants to enter _______ university next year.',
              options: ['a', 'an', 'the', 'zero article'],
              correctIndex: 0,
              explanation: '"University" begins with a consonant glide sound /j/ ("yoo-ni-ver-si-ty"), so it takes the indefinite article "a", not "an".'
            }
          ]
        }
      ]
    },
    {
      unitNumber: 8,
      title: 'UNIT EIGHT: MODALS & SYNTAX',
      description: 'Modal auxiliary functions, sentence structures (simple, compound, complex, compound-complex), sentence fragments, comma splices, and run-on sentences.',
      topics: [
        {
          id: 'eng-8-1',
          topicNumber: '8.1',
          title: 'Modal Auxiliary Verbs & Sentence Syntax',
          summary: 'Modal functions (obligation, deduction, permission) and structural sentence types.',
          content: `### 8.1 Modals and Sentence Syntax

Modal Auxiliary Functions:
• Strong Obligation / Command: Must ("You must turn in your exam on time.")
• Weak Obligation / Advice: Should, Ought to ("You should see a doctor.")
• Lack of Necessity: Don't have to, Need not ("You don't have to bring lunch; food is provided.")
• Logical Deduction / Certainty: Must ("He has a luxury car; he must be rich.")
• Past Deduction / Regret: Must have + V3 ("She must have forgotten"), Should have + V3 ("You should have called me").

Types of Sentence Structures:
1. Simple Sentence: 1 Independent Clause. ("We go to school in the morning.")
2. Compound Sentence: 2 Independent Clauses joined by a coordinating conjunction (FANBOYS) or semicolon. ("We went to the market, but it was closed.")
3. Complex Sentence: 1 Independent Clause + 1 or more Dependent Clauses. ("Although it was raining, we went for a walk.")
4. Compound-Complex Sentence: 2+ Independent Clauses + 1+ Dependent Clause. ("Although she was tired, Sarah went to the gym, and she felt energized afterward.")

Common Syntax Errors:
• Sentence Fragment: Incomplete sentence lacking subject or verb. ("Running through the field.")
• Run-on Sentence / Fused Sentence: Two independent clauses joined without punctuation. ("She likes coffee he prefers tea.")
• Comma Splice: Two independent clauses incorrectly joined by only a comma. ("It was raining, we stayed inside.")`,
          workedExamples: [
            {
              problem: 'Identify the error: "It was raining, we stayed inside."',
              solution: 'This is a Comma Splice (joining two independent clauses with only a comma). Fix: "It was raining; we stayed inside." OR "It was raining, so we stayed inside."'
            },
            {
              problem: 'Express logical deduction in the past: "The ground is completely wet this morning."',
              solution: 'Past deduction: "It must have rained last night."'
            }
          ],
          practiceQuestions: [
            {
              question: 'The lights in his bedroom are completely turned off; he _______ asleep.',
              options: ['must be', 'can be', 'should have been', 'would be'],
              correctIndex: 0,
              explanation: '"Must be" expresses strong logical deduction in the present based on observable evidence.'
            },
            {
              question: 'Identify the type of sentence: "Because she studied diligently every day, Selam earned top marks on the entrance exam, and her parents were overjoyed."',
              options: ['Simple sentence', 'Compound sentence', 'Complex sentence', 'Compound-complex sentence'],
              correctIndex: 3,
              explanation: 'It contains one dependent adverb clause ("Because she studied diligently...") and two independent clauses joined by "and".'
            },
            {
              question: 'Which of the following represents a correct revision of the run-on sentence: "The bell rang the students rushed into the classroom"?',
              options: [
                'The bell rang, the students rushed into the classroom.',
                'The bell rang; the students rushed into the classroom.',
                'The bell rang the students, rushed into the classroom.',
                'Because the bell rang the students rushed into the classroom.'
              ],
              correctIndex: 1,
              explanation: 'A semicolon (;) correctly links two independent, closely related clauses without a coordinating conjunction.'
            }
          ]
        }
      ]
    }
  ]
};
