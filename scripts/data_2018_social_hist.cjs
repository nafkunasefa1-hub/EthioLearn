/**
 * 2018 E.C. History Exam - EUEE Social Science Stream
 * Booklet Code: 559 - 100 Questions Complete with Answers & Comprehensive Historical Explanations
 */

const questions = [
  {
    question_number: 1,
    question_text: "Which of the following sources of historical knowledge provides primary, first-hand evidence created at the time of the event under study?",
    option_a: "Eyewitness accounts, original manuscripts, archival documents, and archaeological artifacts",
    option_b: "Modern historical textbooks and encyclopedias written centuries later",
    option_c: "Fictional novels and dramatized television series",
    option_d: "Secondary analysis articles and peer-reviewed commentaries",
    options: [
      "Eyewitness accounts, original manuscripts, archival documents, and archaeological artifacts",
      "Modern historical textbooks and encyclopedias written centuries later",
      "Fictional novels and dramatized television series",
      "Secondary analysis articles and peer-reviewed commentaries"
    ],
    correct_answer: "A",
    explanation: "Primary sources are direct, contemporary evidence from the period being studied, including original government records, inscriptions, letters, diaries, oral accounts by eyewitnesses, and excavated archaeological artifacts.",
    topic_name: "Nature of History & Historical Sources",
    instruction_category: "History"
  },
  {
    question_number: 2,
    question_text: "The world-famous hominid fossil 'Lucy' (locally known in Amharic as 'Dinknesh') was discovered in 1974 by Donald Johanson and his team at which paleoanthropological site in Ethiopia?",
    option_a: "Melka Kunture in the Awash valley",
    option_b: "Hadar in the Afar Depression",
    option_c: "Omo Kibish near Lake Turkana",
    option_d: "Porc Epic cave near Dire Dawa",
    options: [
      "Melka Kunture in the Awash valley",
      "Hadar in the Afar Depression",
      "Omo Kibish near Lake Turkana",
      "Porc Epic cave near Dire Dawa"
    ],
    correct_answer: "B",
    explanation: "Australopithecus afarensis fossil AL 288-1 ('Lucy' or 'Dinknesh'), dated to 3.2 million years old and demonstrating habitual bipedalism, was excavated at Hadar in the lower Awash River Valley, Afar region, in November 1974.",
    topic_name: "Human Evolution & Ethiopian Paleoanthropology",
    instruction_category: "History"
  },
  {
    question_number: 3,
    question_text: "The fossil specimen of Australopithecus afarensis ('Lucy' / 'Dinknesh') lived approximately how many years ago?",
    option_a: "3.2 million years ago",
    option_b: "100,000 years ago",
    option_c: "10,000 years ago",
    option_d: "15 million years ago",
    options: ["3.2 million years ago", "100,000 years ago", "10,000 years ago", "15 million years ago"],
    correct_answer: "A",
    explanation: "Radiometric dating of volcanic ash layers embedding the Hadar fossil stratigraphy established Lucy's age at approximately 3.18 to 3.2 million years before present (Pliocene epoch).",
    topic_name: "Human Origins & Geochronology",
    instruction_category: "History"
  },
  {
    question_number: 4,
    question_text: "The 'Neolithic Revolution' in world history is fundamentally characterized by:",
    option_a: "The manufacture of iron steam engines and railways",
    option_b: "The discovery of fire and nomadic hunting-gathering",
    option_c: "The transition from nomadic foraging to plant domestication, animal husbandry, and sedentary village settlements",
    option_d: "The mass migration of Homo erectus out of Africa",
    options: [
      "The manufacture of iron steam engines and railways",
      "The discovery of fire and nomadic hunting-gathering",
      "The transition from nomadic foraging to plant domestication, animal husbandry, and sedentary village settlements",
      "The mass migration of Homo erectus out of Africa"
    ],
    correct_answer: "C",
    explanation: "The Neolithic Revolution (New Stone Age, c. 10,000 BCE) marked the pivotal agricultural transition from foraging to food production (domestication of wheat, barley, teff, enset, cattle), enabling permanent settlements, pottery, and social complexity.",
    topic_name: "The Neolithic Agricultural Revolution",
    instruction_category: "History"
  },
  {
    question_number: 5,
    question_text: "Which ancient civilization developed along the fertile floodplains of the Nile River in northeastern Africa, renowned for hieroglyphic writing, pharaonic dynasties, and monumental pyramids?",
    option_a: "Ancient Egypt",
    option_b: "Mesopotamia",
    option_c: "Indus Valley Civilization",
    option_d: "Shang Dynasty",
    options: ["Ancient Egypt", "Mesopotamia", "Indus Valley Civilization", "Shang Dynasty"],
    correct_answer: "A",
    explanation: "Ancient Egypt flourished along the lower reaches of the Nile River, developing one of humanity's earliest centralized states, monumental architecture (Giza pyramids), papyrus writing, and complex religious institutions.",
    topic_name: "Ancient Civilizations - Nile Valley",
    instruction_category: "History"
  },
  {
    question_number: 6,
    question_text: "The ancient land of Punt, renowned in ancient Egyptian hieroglyphic inscriptions for rich trade in myrrh, frankincense, gold, ebony, and ivory, was located in:",
    option_a: "The Scandinavian Peninsula",
    option_b: "The Horn of Africa (coastal Ethiopia, Eritrea, and Somalia)",
    option_c: "The British Isles",
    option_d: "The Iberian Peninsula",
    options: [
      "The Scandinavian Peninsula",
      "The Horn of Africa (coastal Ethiopia, Eritrea, and Somalia)",
      "The British Isles",
      "The Iberian Peninsula"
    ],
    correct_answer: "B",
    explanation: "Egyptian expedition records (notably Queen Hatshepsut's 15th-century BC Deir el-Bahari relief) describe maritime expeditions to the 'Land of Punt' situated along the Red Sea and Gulf of Aden coasts in the Horn of Africa.",
    topic_name: "Ancient Horn of Africa - Land of Punt",
    instruction_category: "History"
  },
  {
    question_number: 7,
    question_text: "The pre-Aksumite Kingdom of Da'amat (Damot), which flourished in northern Ethiopia during the first millennium BCE, had its major religious and architectural center at:",
    option_a: "Gondar",
    option_b: "Harar",
    option_c: "Yeha (famed for the Temple of the Moon)",
    option_d: "Jimma",
    options: [
      "Gondar",
      "Harar",
      "Yeha (famed for the Temple of the Moon)",
      "Jimma"
    ],
    correct_answer: "C",
    explanation: "The Kingdom of Da'amat (fl. 8th–5th centuries BCE) had its ceremonial and political center at Yeha in Tigray, featuring South Arabian-influenced epigraphic inscriptions and the surviving limestone Temple of the Moon.",
    topic_name: "Pre-Aksumite Civilizations - Da'amat & Yeha",
    instruction_category: "History"
  },
  {
    question_number: 8,
    question_text: "What was the principal international maritime port city of the Kingdom of Aksum on the Red Sea coast, linking the Ethiopian highlands with the Greco-Roman, Indian, and Byzantine worlds?",
    option_a: "Zeila",
    option_b: "Berbera",
    option_c: "Mombasa",
    option_d: "Adulis",
    options: ["Zeila", "Berbera", "Mombasa", "Adulis"],
    correct_answer: "D",
    explanation: "Adulis (situated on the Gulf of Zula near modern Massawa) was the chief commercial port of the Aksumite Empire, recorded extensively in the 1st-century CE Periplus of the Erythraean Sea.",
    topic_name: "Aksumite Maritime Trade & Adulis",
    instruction_category: "History"
  },
  {
    question_number: 9,
    question_text: "King Ezana of Aksum converted to Christianity during the mid-4th century AD (c. 330–340 AD) through the evangelization of which Christian scholar who became the first Bishop (Abba Salama) of Ethiopia?",
    option_a: "Frumentius (Abba Salama Kasate Berhan)",
    option_b: "Saint Yared",
    option_c: "Abba Pantelewon",
    option_d: "Abba Garima",
    options: [
      "Frumentius (Abba Salama Kasate Berhan)",
      "Saint Yared",
      "Abba Pantelewon",
      "Abba Garima"
    ],
    correct_answer: "A",
    explanation: "Frumentius, a consecrated Tyrian scholar, tutored Ezana and was later ordained as the first Metropolitan Bishop of Aksum by Patriarch Athanasius of Alexandria in Egypt, adopting the honorary title Abba Salama ('Father of Peace').",
    topic_name: "Christianization of Aksum - King Ezana",
    instruction_category: "History"
  },
  {
    question_number: 10,
    question_text: "Islam was first introduced into Ethiopia during the lifetime of Prophet Muhammad when early Muslim converts fled persecution in Mecca in 615 AD in what is known as the:",
    option_a: "Crusades",
    option_b: "First Hijra (migration) to the Aksumite Kingdom ruled by King Armah (Al-Najashi)",
    option_c: "Battle of Karbala",
    option_d: "Treaty of Hudaybiyyah",
    options: [
      "Crusades",
      "First Hijra (migration) to the Aksumite Kingdom ruled by King Armah (Al-Najashi)",
      "Battle of Karbala",
      "Treaty of Hudaybiyyah"
    ],
    correct_answer: "B",
    explanation: "In 615 AD, facing violent persecution in Mecca, Prophet Muhammad instructed his followers to seek asylum in the Christian Kingdom of Aksum, where King Armah (Al-Najashi) granted them sanctuary and religious freedom (First Hijra).",
    topic_name: "Early Islam in Ethiopia - The First Hijra",
    instruction_category: "History"
  },
  {
    question_number: 11,
    question_text: "The Zagwe Dynasty, which succeeded the Aksumite state in the 12th century, established its imperial capital at Roha (modern Lalibela) in the province of:",
    option_a: "Gojjam",
    option_b: "Shoa",
    option_c: "Lasta (Bugna)",
    option_d: "Kaffa",
    options: ["Gojjam", "Shoa", "Lasta (Bugna)", "Kaffa"],
    correct_answer: "C",
    explanation: "The Agaw-speaking Zagwe Dynasty arose in the Lasta mountains of northern Wollo, shifting the political and ecclesiastical center of the Ethiopian Christian state southwards to Roha.",
    topic_name: "The Zagwe Dynasty",
    instruction_category: "History"
  },
  {
    question_number: 12,
    question_text: "The world-famous monolithic rock-hewn churches of Lalibela (including Bete Giyorgis and Bete Medhane Alem) were excavated during the reign of which Zagwe monarch?",
    option_a: "King Lalibela (Gebra Masqal Lalibela)",
    option_b: "King Mara Takla Haymanot",
    option_c: "King Yekuno Amlak",
    option_d: "King Na'akueto La'ab",
    options: [
      "King Lalibela (Gebra Masqal Lalibela)",
      "King Mara Takla Haymanot",
      "King Yekuno Amlak",
      "King Na'akueto La'ab"
    ],
    correct_answer: "A",
    explanation: "King Lalibela (reigned c. late 12th - early 13th century) commissioned the carving of eleven monolithic and semi-monolithic rock-hewn churches out of solid volcanic tuff to establish a 'New Jerusalem' in Lasta.",
    topic_name: "Medieval Rock-Hewn Architecture",
    instruction_category: "History"
  },
  {
    question_number: 13,
    question_text: "In 1270 AD, the Zagwe dynasty ended and the 'Solomonic Dynasty' was restored in Shewa under the leadership of:",
    option_a: "Emperor Amda Seyon I",
    option_b: "Emperor Yekuno Amlak",
    option_c: "Emperor Zara Yaqob",
    option_d: "Emperor Baeda Maryam",
    options: [
      "Emperor Amda Seyon I",
      "Emperor Yekuno Amlak",
      "Emperor Zara Yaqob",
      "Emperor Baeda Maryam"
    ],
    correct_answer: "B",
    explanation: "Yekuno Amlak defeated the last Zagwe King Yetbarak in 1270 AD with the political backing of Saint Tekle Haymanot and the Shewan Amhara nobility, proclaiming genealogical descent from King Solomon and Queen of Sheba.",
    topic_name: "Restoration of the Solomonic Dynasty (1270)",
    instruction_category: "History"
  },
  {
    question_number: 14,
    question_text: "Emperor Amda Seyon I (reigned 1314–1344) is celebrated in Ethiopian medieval history for:",
    option_a: "Surrendering all highland territories to foreign invaders",
    option_b: "Moving the imperial capital permanently to Massawa",
    option_c: "Major military campaigns that consolidated Christian imperial hegemony over Muslim coastal sultanates and southern regions",
    option_d: "Abolishing the Ethiopian Orthodox Church",
    options: [
      "Surrendering all highland territories to foreign invaders",
      "Moving the imperial capital permanently to Massawa",
      "Major military campaigns that consolidated Christian imperial hegemony over Muslim coastal sultanates and southern regions",
      "Abolishing the Ethiopian Orthodox Church"
    ],
    correct_answer: "C",
    explanation: "Amda Seyon I expanded the borders of the medieval Christian kingdom through military campaigns, subduing the Muslim sultanates of Ifat, Hadya, Dawaro, and Bale, and establishing a dominant tributary empire.",
    topic_name: "Medieval Solomonic Expansion - Amda Seyon I",
    instruction_category: "History"
  },
  {
    question_number: 15,
    question_text: "The Sultanates of Ifat and Adal were prominent medieval Islamic polities that developed primarily along which lucrative commercial corridor?",
    option_a: "The eastern trade routes connecting the fertile central Ethiopian highlands to the Gulf of Aden port of Zeila",
    option_b: "The Atlantic slave trade routes along the Congo river",
    option_c: "The trans-Saharan caravan network across the Sahara desert",
    option_d: "The southern Mediterranean maritime shipping lanes",
    options: [
      "The eastern trade routes connecting the fertile central Ethiopian highlands to the Gulf of Aden port of Zeila",
      "The Atlantic slave trade routes along the Congo river",
      "The trans-Saharan caravan network across the Sahara desert",
      "The southern Mediterranean maritime shipping lanes"
    ],
    correct_answer: "A",
    explanation: "The Walashma dynasty of Ifat and later Adal controlled the strategic Zeila trade route, channeling highland ivory, gold, spices, and coffee to Arabian and Indian Ocean merchant networks.",
    topic_name: "Muslim Sultanates of the Horn of Africa",
    instruction_category: "History"
  },
  {
    question_number: 16,
    question_text: "The 16th-century armed conflict between the Christian Highland Kingdom and the Sultanate of Adal (1529–1543) was led on the Muslim side by which military commander?",
    option_a: "Sultan Sa'ad ad-Din II",
    option_b: "Imam Ahmad ibn Ibrahim al-Ghazi (Ahmad Gragn)",
    option_c: "Emir Nur ibn Mujahid",
    option_d: "Sultan Badlay",
    options: [
      "Sultan Sa'ad ad-Din II",
      "Imam Ahmad ibn Ibrahim al-Ghazi (Ahmad Gragn)",
      "Emir Nur ibn Mujahid",
      "Sultan Badlay"
    ],
    correct_answer: "B",
    explanation: "Imam Ahmad ibn Ibrahim al-Ghazi ('Ahmad Gragn' or 'the Left-Handed') led the armies of Adal armed with Ottoman firearms, defeating Emperor Lebna Dengel at the Battle of Shimbra Kure in 1529 and ruling the highlands for 14 years.",
    topic_name: "The 16th Century Wars of Ahmad Gragn",
    instruction_category: "History"
  },
  {
    question_number: 17,
    question_text: "A Portuguese military expedition of 400 musketeers arrived in 1541 to aid the Christian Kingdom against Imam Ahmad Gragn, commanded by:",
    option_a: "Vasco da Gama",
    option_b: "Afonso de Albuquerque",
    option_c: "Cristóvão da Gama",
    option_d: "Pedro Álvares Cabral",
    options: ["Vasco da Gama", "Afonso de Albuquerque", "Cristóvão da Gama", "Pedro Álvares Cabral"],
    correct_answer: "C",
    explanation: "Cristóvão da Gama (son of Vasco da Gama) led the 400 Portuguese soldiers who reinforced Emperor Galawdewos, culminating in the Battle of Wayna Daga in 1543 where Imam Ahmad was killed.",
    topic_name: "Portuguese Intervention & Battle of Wayna Daga",
    instruction_category: "History"
  },
  {
    question_number: 18,
    question_text: "The 16th-century Oromo population movement and expansion across the Ethiopian plateau was socio-politically organized and regulated by which indigenous institution?",
    option_a: "The Gadaa system",
    option_b: "Feudal serfdom (Gult system)",
    option_c: "Monarchical dynastic succession",
    option_d: "Colonial military governorates",
    options: [
      "The Gadaa system",
      "Feudal serfdom (Gult system)",
      "Monarchical dynastic succession",
      "Colonial military governorates"
    ],
    correct_answer: "A",
    explanation: "The Gadaa system—with its organized 8-year age-grade leadership (Abba Gadaa and military leader Abba Duula)—provided the social cohesion, military mobilization, and governance structure that facilitated the 16th-century Oromo expansion.",
    topic_name: "The Oromo Population Movement & Gadaa",
    instruction_category: "History"
  },
  {
    question_number: 19,
    question_text: "The Oromo 'Gadaa System' is best defined as:",
    option_a: "A hereditary military dictatorship ruled by absolute kings",
    option_b: "A monastic religious order dedicated exclusively to scriptural translation",
    option_c: "A trade guild of maritime merchants along the Red Sea",
    option_d: "An indigenous democratic system of socio-political administration based on generation classes with peaceful power transfer every eight years",
    options: [
      "A hereditary military dictatorship ruled by absolute kings",
      "A monastic religious order dedicated exclusively to scriptural translation",
      "A trade guild of maritime merchants along the Red Sea",
      "An indigenous democratic system of socio-political administration based on generation classes with peaceful power transfer every eight years"
    ],
    correct_answer: "D",
    explanation: "Recognized as UNESCO Intangible Cultural Heritage, Gadaa is an egalitarian, democratic governance system where male cohorts advance through 8-year grades (Gadaa classes), transferring political, judicial, and legislative power every 8 years.",
    topic_name: "Indigenous Governance - The Gadaa System",
    instruction_category: "History"
  },
  {
    question_number: 20,
    question_text: "The Gondarine Period in Ethiopian history was initiated in 1636 when which emperor established Gondar as the permanent imperial capital?",
    option_a: "Emperor Susenyos",
    option_b: "Emperor Fasilides",
    option_c: "Emperor Yohannes I",
    option_d: "Emperor Bakaffa",
    options: ["Emperor Susenyos", "Emperor Fasilides", "Emperor Yohannes I", "Emperor Bakaffa"],
    correct_answer: "B",
    explanation: "After expelling Jesuit missionaries and restoring Orthodox Christianity in 1632, Emperor Fasilides ended centuries of roving royal tent camps by establishing Gondar as the permanent imperial capital in 1636.",
    topic_name: "Establishment of the Gondar Kingdom",
    instruction_category: "History"
  },
  {
    question_number: 21,
    question_text: "The architectural marvel of Gondar, the 'Fasil Ghebbi' (Royal Enclosure), is distinguished by:",
    option_a: "Stone castle complexes and palaces blending indigenous Aksumite, Portuguese, Arab-Moorish, and Indian architectural styles",
    option_b: "Mud-brick sun-dried adobe huts with thatched roofs",
    option_c: "Pre-fabricated cast iron and glass modern skyscrapers",
    option_d: "Subterranean limestone tunnels under lakes",
    options: [
      "Stone castle complexes and palaces blending indigenous Aksumite, Portuguese, Arab-Moorish, and Indian architectural styles",
      "Mud-brick sun-dried adobe huts with thatched roofs",
      "Pre-fabricated cast iron and glass modern skyscrapers",
      "Subterranean limestone tunnels under lakes"
    ],
    correct_answer: "A",
    explanation: "Fasil Ghebbi encompasses fortified stone castles, battlements, banquet halls, and libraries built by consecutive Gondarine monarchs (Fasilides, Yohannes I, Iyasu I, Bakaffa, Empress Mentewab) displaying unique synthesis of diverse building traditions.",
    topic_name: "Gondarine Castles & Culture",
    instruction_category: "History"
  },
  {
    question_number: 22,
    question_text: "The 'Era of the Princes' (Zemene Mesafint) in Ethiopian history was triggered in 1769 when Ras Mikael Sehul of Tigray assassinated/deposed which puppet Gondarine emperor?",
    option_a: "Emperor Bakaffa",
    option_b: "Emperor Iyasu II",
    option_c: "Emperor Iyoas I",
    option_d: "Emperor Fasilides",
    options: ["Emperor Bakaffa", "Emperor Iyasu II", "Emperor Iyoas I", "Emperor Fasilides"],
    correct_answer: "C",
    explanation: "In 1769, Ras Mikael Sehul assassinated Emperor Iyoas I and placed elderly Yohannes II on the throne, reducing the monarchy to figureheads and inaugurating the century of regional warlord fragmentation (Zemene Mesafint).",
    topic_name: "Zemene Mesafint - Origins",
    instruction_category: "History"
  },
  {
    question_number: 23,
    question_text: "Which of the following was a defining political characteristic of the Zemene Mesafint (1769–1855)?",
    option_a: "Decentralization of political power, autonomous regional warlords (Rases), powerless puppet emperors in Gondar, and chronic civil war",
    option_b: "A highly centralized bureaucratic empire dominated by a single despotic emperor",
    option_c: "Foreign British colonial military occupation throughout the entire interior",
    option_d: "A peaceful democratic parliament with universal suffrage",
    options: [
      "Decentralization of political power, autonomous regional warlords (Rases), powerless puppet emperors in Gondar, and chronic civil war",
      "A highly centralized bureaucratic empire dominated by a single despotic emperor",
      "Foreign British colonial military occupation throughout the entire interior",
      "A peaceful democratic parliament with universal suffrage"
    ],
    correct_answer: "A",
    explanation: "During the Zemene Mesafint (1769–1855), powerful regional lords of Begemder, Tigray, Gojjam, Wollo, and Shewa competed for the title of Enderase (Regent), reducing the imperial crown to symbolic status amid continuous civil strife.",
    topic_name: "Features of Zemene Mesafint",
    instruction_category: "History"
  },
  {
    question_number: 24,
    question_text: "The end of the Zemene Mesafint and the beginning of modern Ethiopian state centralization was marked in 1855 by the coronation of:",
    option_a: "Emperor Menelik II",
    option_b: "Emperor Tewodros II (Kassa Hailu of Qwara)",
    option_c: "Emperor Yohannes IV",
    option_d: "Emperor Haile Selassie I",
    options: [
      "Emperor Menelik II",
      "Emperor Tewodros II (Kassa Hailu of Qwara)",
      "Emperor Yohannes IV",
      "Emperor Haile Selassie I"
    ],
    correct_answer: "B",
    explanation: "Kassa Hailu defeated rival regional feudal lords in battles at Gur Amba, Gorgora Bichen, Ayshal, and Deresge, and was crowned Emperor Tewodros II in February 1855, launching ambitious national unification and administrative reforms.",
    topic_name: "Reign of Emperor Tewodros II",
    instruction_category: "History"
  },
  {
    question_number: 25,
    question_text: "The tragic demise of Emperor Tewodros II occurred in April 1868 at which mountain fortress following the British military expedition commanded by Sir Robert Napier?",
    option_a: "Mount Entoto",
    option_b: "Ankober",
    option_c: "Amba Alagi",
    option_d: "Meqdela (Magdala)",
    options: ["Mount Entoto", "Ankober", "Amba Alagi", "Meqdela (Magdala)"],
    correct_answer: "D",
    explanation: "After Napier's British-Indian expedition breached the Meqdela mountain fortress on April 13, 1868, Emperor Tewodros II committed suicide with his pistol rather than surrender to foreign forces.",
    topic_name: "The Meqdela Expedition (1868)",
    instruction_category: "History"
  },
  {
    question_number: 26,
    question_text: "Emperor Yohannes IV (reigned 1872–1889) successfully defended Ethiopian sovereignty against external invasions in the 1870s by decisively defeating the expansionist Egyptian forces at:",
    option_a: "The Battles of Gundet (1875) and Gura (1876)",
    option_b: "The Battle of Adwa (1896)",
    option_c: "The Battle of Chelenqo (1887)",
    option_d: "The Battle of Omdurman (1898)",
    options: [
      "The Battles of Gundet (1875) and Gura (1876)",
      "The Battle of Adwa (1896)",
      "The Battle of Chelenqo (1887)",
      "The Battle of Omdurman (1898)"
    ],
    correct_answer: "A",
    explanation: "Khedive Ismail of Egypt dispatched modern armies under European and American mercenary officers to annex northern Ethiopia, but Yohannes IV and Ras Alula decimated them at Gundet (Nov 1875) and Gura (March 1876).",
    topic_name: "Emperor Yohannes IV & Ethio-Egyptian Wars",
    instruction_category: "History"
  },
  {
    question_number: 27,
    question_text: "The religious council convened by Emperor Yohannes IV in 1878 to resolve deep theological disputes within the Ethiopian Orthodox Church and enforce doctrinal uniformity was held at:",
    option_a: "Debre Damo",
    option_b: "Boru Meda (in Wollo)",
    option_c: "Axum Tsion",
    option_d: "Debre Libanos",
    options: ["Debre Damo", "Boru Meda (in Wollo)", "Axum Tsion", "Debre Libanos"],
    correct_answer: "B",
    explanation: "At the Council of Boru Meda (1878), Yohannes IV declared the Tewahdo (Unionist) doctrine as the sole orthodox doctrine of the Church, banning the rival Sost Lidet and Qebat sects, and requiring Muslim leaders in Wollo to convert.",
    topic_name: "Council of Boru Meda (1878)",
    instruction_category: "History"
  },
  {
    question_number: 28,
    question_text: "Emperor Yohannes IV died on the battlefield in March 1889 fighting against the invading Mahdist forces of Sudan at the:",
    option_a: "Battle of Embabo",
    option_b: "Battle of Dogali",
    option_c: "Battle of Metemma (Gallabat)",
    option_d: "Battle of Shire",
    options: [
      "Battle of Embabo",
      "Battle of Dogali",
      "Battle of Metemma (Gallabat)",
      "Battle of Shire"
    ],
    correct_answer: "C",
    explanation: "On March 9, 1889, while leading the Ethiopian army to victory over Mahdist Sudanese forces at the Battle of Metemma, Yohannes IV was struck by a sniper bullet and died the following day.",
    topic_name: "Battle of Metemma (1889)",
    instruction_category: "History"
  },
  {
    question_number: 29,
    question_text: "During his reign, Emperor Menelik II (1889–1913) carried out extensive territorial integration that shaped modern Ethiopia by:",
    option_a: "Incorporating the southern, southwestern, and eastern kingdoms and principalities into the centralized Ethiopian state",
    option_b: "Ceding all highland territories to European colonial empires",
    option_c: "Dismantling the national postal and communication network",
    option_d: "Abolishing all standing armies",
    options: [
      "Incorporating the southern, southwestern, and eastern kingdoms and principalities into the centralized Ethiopian state",
      "Ceding all highland territories to European colonial empires",
      "Dismantling the national postal and communication network",
      "Abolishing all standing armies"
    ],
    correct_answer: "A",
    explanation: "Menelik II expanded southwards, westwards, and eastwards (incorporating Gurage, Arsi, Wolayta, Kaffa, Harar, Jimma, Somali, Gambella, and Benishangul regions), forging modern Ethiopia's recognized territorial boundaries.",
    topic_name: "Territorial Integration under Menelik II",
    instruction_category: "History"
  },
  {
    question_number: 30,
    question_text: "The diplomatic dispute between Ethiopia and Italy that directly caused the First Italo-Ethiopian War arose from conflicting translations of which Article in the 1889 Treaty of Wuchale?",
    option_a: "Article III (Border demarcation)",
    option_b: "Article XVII (Foreign relations clause)",
    option_c: "Article I (Peace and friendship)",
    option_d: "Article XX (Trade tariffs)",
    options: [
      "Article III (Border demarcation)",
      "Article XVII (Foreign relations clause)",
      "Article I (Peace and friendship)",
      "Article XX (Trade tariffs)"
    ],
    correct_answer: "B",
    explanation: "In the Amharic text of Article XVII, Ethiopia 'could' choose to use Italian diplomatic channels for foreign relations (optional), while the Italian text stated Ethiopia 'consented' to use Italy (obligatory protectorate), prompting Menelik II to abrogate the treaty.",
    topic_name: "Treaty of Wuchale & Article XVII",
    instruction_category: "History"
  },
  {
    question_number: 31,
    question_text: "On March 1, 1896, the Ethiopian army led by Emperor Menelik II and Empress Taytu Betul achieved a historic victory over invading Italian colonial forces at the:",
    option_a: "Battle of Adwa",
    option_b: "Battle of Dogali",
    option_c: "Battle of Amba Alagi",
    option_d: "Battle of Mekelle",
    options: ["Battle of Adwa", "Battle of Dogali", "Battle of Amba Alagi", "Battle of Mekelle"],
    correct_answer: "A",
    explanation: "At the Battle of Adwa (Sunday, March 1, 1896), the Ethiopian united army crushed General Oreste Baratieri's four Italian brigades, inflicting over 6,000 casualties and decisively defending national independence.",
    topic_name: "The Battle of Adwa (1896)",
    instruction_category: "History"
  },
  {
    question_number: 32,
    question_text: "What was the profound global and African significance of the Ethiopian victory at the Battle of Adwa (1896)?",
    option_a: "It led directly to the total colonization of Ethiopia by Great Britain.",
    option_b: "It caused Ethiopia to renounce all modern diplomatic ties with foreign nations.",
    option_c: "It was the first decisive military defeat of a major European colonial empire by an African nation, inspiring Pan-African liberation movements globally",
    option_d: "It forced Italy to annex all Red Sea coastal territories permanently.",
    options: [
      "It led directly to the total colonization of Ethiopia by Great Britain.",
      "It caused Ethiopia to renounce all modern diplomatic ties with foreign nations.",
      "It was the first decisive military defeat of a major European colonial empire by an African nation, inspiring Pan-African liberation movements globally",
      "It forced Italy to annex all Red Sea coastal territories permanently."
    ],
    correct_answer: "C",
    explanation: "Adwa shattered the myth of European racial and military invincibility, secured Ethiopia's sovereign international recognition, and stood as an enduring beacon of freedom for Pan-African and anti-colonial movements across the globe.",
    topic_name: "Global Significance of Adwa Victory",
    instruction_category: "History"
  },
  {
    question_number: 33,
    question_text: "Which of the following modern technological innovations was introduced to Ethiopia during the reign of Emperor Menelik II?",
    option_a: "Nuclear power stations",
    option_b: "Space satellite launch vehicles",
    option_c: "Modern jet commercial airlines",
    option_d: "The Ethio-Djibouti railway, telegraph/telephone systems, Bank of Abyssinia, Menelik II School, and Menelik II Hospital",
    options: [
      "Nuclear power stations",
      "Space satellite launch vehicles",
      "Modern jet commercial airlines",
      "The Ethio-Djibouti railway, telegraph/telephone systems, Bank of Abyssinia, Menelik II School, and Menelik II Hospital"
    ],
    correct_answer: "D",
    explanation: "Menelik II modernised Ethiopia by founding Addis Ababa (1886), constructing the Franco-Ethiopian railway to Djibouti, establishing modern postal/telecom networks, printing national currency, opening the Bank of Abyssinia (1905), and building first state schools and hospitals.",
    topic_name: "Modernization under Menelik II",
    instruction_category: "History"
  },
  {
    question_number: 34,
    question_text: "Lij Iyasu (designated heir of Menelik II who ruled from 1913 to 1916) was deposed in September 1916 primarily because of:",
    option_a: "His refusal to collect any taxes from the nobility",
    option_b: "Opposition from Shewan feudal nobility and Allied powers who accused him of aligning with Islam and the Central Powers during World War I",
    option_c: "His surrender to Italian colonial forces in Massawa",
    option_d: "His decision to move the capital back to Gondar",
    options: [
      "His refusal to collect any taxes from the nobility",
      "Opposition from Shewan feudal nobility and Allied powers who accused him of aligning with Islam and the Central Powers during World War I",
      "His surrender to Italian colonial forces in Massawa",
      "His decision to move the capital back to Gondar"
    ],
    correct_answer: "B",
    explanation: "Lij Iyasu attempted progressive national integration by appointing Muslim leaders, building mosques, and fostering ties with Somali leader Sayyid Muhammad Abdullah Hassan and the Ottoman Empire, which alarmed Orthodox clergy, Shewan nobility, and Allied legations (Britain, France, Italy).",
    topic_name: "Reign and Fall of Lij Iyasu (1913-1916)",
    instruction_category: "History"
  },
  {
    question_number: 35,
    question_text: "Following the coup d'état of September 1916, who was crowned Empress of Ethiopia with Ras Teferi Mekonnen appointed as Regent and Heir to the Throne?",
    option_a: "Empress Zewditu (daughter of Menelik II)",
    option_b: "Empress Taytu Betul",
    option_c: "Empress Mentewab",
    option_d: "Empress Menen Asfaw",
    options: [
      "Empress Zewditu (daughter of Menelik II)",
      "Empress Taytu Betul",
      "Empress Mentewab",
      "Empress Menen Asfaw"
    ],
    correct_answer: "A",
    explanation: "Empress Zewditu was crowned as the first female head of state of modern Ethiopia (reigned 1916–1930) in a diarchical power arrangement, while Ras Teferi Mekonnen directed state administration and modernization.",
    topic_name: "Diarchy of Empress Zewditu & Ras Teferi",
    instruction_category: "History"
  },
  {
    question_number: 36,
    question_text: "Under the diplomatic leadership of Regent Ras Teferi Mekonnen, Ethiopia gained international recognition by officially joining the League of Nations in:",
    option_a: "1896",
    option_b: "1914",
    option_c: "1923",
    option_d: "1945",
    options: ["1896", "1914", "1923", "1945"],
    correct_answer: "C",
    explanation: "In September 1923, Ethiopia was formally admitted to the League of Nations in Geneva, strengthening diplomatic sovereignty and committing to the progressive eradication of the slave trade.",
    topic_name: "Ethiopia and the League of Nations (1923)",
    instruction_category: "History"
  },
  {
    question_number: 37,
    question_text: "On November 2, 1930, Ras Teferi Mekonnen was formally crowned Emperor of Ethiopia under which regal throne name?",
    option_a: "Emperor Tewodros III",
    option_b: "Emperor Haile Selassie I ('Power of the Trinity')",
    option_c: "Emperor Menelik III",
    option_d: "Emperor Yohannes V",
    options: [
      "Emperor Tewodros III",
      "Emperor Haile Selassie I ('Power of the Trinity')",
      "Emperor Menelik III",
      "Emperor Yohannes V"
    ],
    correct_answer: "B",
    explanation: "Following Empress Zewditu's death, Negus Teferi was crowned Emperor Haile Selassie I ('Power of the Holy Trinity', King of Kings of Ethiopia, Conquering Lion of the Tribe of Judah) at St. George Cathedral in Addis Ababa on November 2, 1930.",
    topic_name: "Coronation of Haile Selassie I (1930)",
    instruction_category: "History"
  },
  {
    question_number: 38,
    question_text: "Ethiopia's first written constitution, introduced by Emperor Haile Selassie I to modernize central government and consolidate absolute imperial power, was promulgated in:",
    option_a: "1931",
    option_b: "1955",
    option_c: "1974",
    option_d: "1987",
    options: ["1931", "1955", "1974", "1987"],
    correct_answer: "A",
    explanation: "The 1931 Constitution established a bicameral parliament (Chamber of Deputies and Senate) while legally enshrining supreme absolute authority in the person of the Emperor and establishing hereditary dynastic succession.",
    topic_name: "The 1931 Constitution of Ethiopia",
    instruction_category: "History"
  },
  {
    question_number: 39,
    question_text: "The border skirmish engineered by Fascist Italy in December 1934 to manufacture a pretext for the 1935 invasion of Ethiopia was the:",
    option_a: "Adwa incident",
    option_b: "Massawa incident",
    option_c: "Dogali incident",
    option_d: "Walwal Incident (in the Ogaden)",
    options: ["Adwa incident", "Massawa incident", "Dogali incident", "Walwal Incident (in the Ogaden)"],
    correct_answer: "D",
    explanation: "On December 5, 1934, Italian colonial troops occupying an illegal fort at Walwal inside Ethiopia clashed with Ethiopian escort forces, providing Benito Mussolini the manufactured crisis to invade in October 1935.",
    topic_name: "The Walwal Incident (1934)",
    instruction_category: "History"
  },
  {
    question_number: 40,
    question_text: "During the five-year Italian Fascist occupation (1936–1941), Ethiopian resistance was valiantly sustained across the country by guerrilla fighters known as:",
    option_a: "The Arbegnoch (Patriots)",
    option_b: "The Banda collaborators",
    option_c: "The Askari units",
    option_d: "The Blackshirts",
    options: [
      "The Arbegnoch (Patriots)",
      "The Banda collaborators",
      "The Askari units",
      "The Blackshirts"
    ],
    correct_answer: "A",
    explanation: "The Arbegnoch (Patriotic resistance fighters), led by leaders like Ras Abebe Aregai, Belay Zeleke, Amoraw Wubneh, and Shewareged Gedle, waged an unyielding guerrilla resistance against Fascist military rule.",
    topic_name: "Patriotic Resistance (Arbegnoch) 1936-1941",
    instruction_category: "History"
  },
  {
    question_number: 41,
    question_text: "On May 5, 1941, Emperor Haile Selassie I triumphantly re-entered Addis Ababa, ending the five-year Italian occupation, aided by Ethiopian Patriots and British/Allied forces known as:",
    option_a: "The French Foreign Legion",
    option_b: "Gideon Force (commanded by Orde Wingate and Dan Sandford)",
    option_c: "The US Marines",
    option_d: "The Soviet Red Army",
    options: [
      "The French Foreign Legion",
      "Gideon Force (commanded by Orde Wingate and Dan Sandford)",
      "The US Marines",
      "The Soviet Red Army"
    ],
    correct_answer: "B",
    explanation: "Gideon Force, a British-Ethiopian special guerrilla brigade under Major Orde Wingate accompanying Emperor Haile Selassie, fought alongside northern Patriots, culminating in the liberation of Addis Ababa on May 5, 1941.",
    topic_name: "Liberation of Ethiopia (May 1941)",
    instruction_category: "History"
  },
  {
    question_number: 42,
    question_text: "In 1952, under United Nations General Assembly Resolution 390 A (V), Eritrea was officially reunited with Ethiopia under which constitutional structure?",
    option_a: "An independent sovereign republic",
    option_b: "A British crown colony",
    option_c: "An autonomous unit federated under the sovereignty of the Ethiopian Crown",
    option_d: "A direct military protectorate of Italy",
    options: [
      "An independent sovereign republic",
      "A British crown colony",
      "An autonomous unit federated under the sovereignty of the Ethiopian Crown",
      "A direct military protectorate of Italy"
    ],
    correct_answer: "C",
    explanation: "The UN Federation of 1952 granted Eritrea internal self-government (with its own constitution, parliament, and police force) while placing defense, foreign affairs, currency, and international commerce under the Ethiopian Federal Crown.",
    topic_name: "The Ethio-Eritrean Federation (1952-1962)",
    instruction_category: "History"
  },
  {
    question_number: 43,
    question_text: "In December 1960, while Emperor Haile Selassie was visiting Brazil, a progressive military coup d'état was launched against the feudal imperial regime led by:",
    option_a: "Brigadier General Mengistu Neway (Imperial Bodyguard commander) and his brother Girmame Neway",
    option_b: "General Aman Andom",
    option_c: "Major Mengistu Haile Mariam",
    option_d: "General Teferi Benti",
    options: [
      "Brigadier General Mengistu Neway (Imperial Bodyguard commander) and his brother Girmame Neway",
      "General Aman Andom",
      "Major Mengistu Haile Mariam",
      "General Teferi Benti"
    ],
    correct_answer: "A",
    explanation: "The Neway brothers mobilized the Imperial Bodyguard (Kebur Zabagna) in December 1960 to overthrow the feudal aristocracy and declare Crown Prince Asfaw Wossen constitutional monarch before the coup was crushed by the regular army.",
    topic_name: "The 1960 Imperial Bodyguard Coup Attempt",
    instruction_category: "History"
  },
  {
    question_number: 44,
    question_text: "In the late 1960s and early 1970s, the radical Ethiopian Student Movement (ESM) mobilized widespread civil opposition against imperial autocracy under which iconic slogan?",
    option_a: "'Gold to the Merchants'",
    option_b: "'Land to the Tiller' (Meret Le-Arashu)",
    option_c: "'Power to the Feudal Lords'",
    option_d: "'All Authority to the Crown'",
    options: [
      "'Gold to the Merchants'",
      "'Land to the Tiller' (Meret Le-Arashu)",
      "'Power to the Feudal Lords'",
      "'All Authority to the Crown'"
    ],
    correct_answer: "B",
    explanation: "First articulated by student leader Ibsa Gutama and university activists in 1965, 'Land to the Tiller' (Meret Le-Arashu) demanded the abolition of exploitative tenant-landlord feudal relations, becoming the catalyst for the 1974 revolution.",
    topic_name: "Ethiopian Student Movement & 'Land to the Tiller'",
    instruction_category: "History"
  },
  {
    question_number: 45,
    question_text: "On September 12, 1974, the centuries-old Solomonic imperial monarchy in Ethiopia came to an end when Emperor Haile Selassie I was deposed by the military committee known as:",
    option_a: "The EPLF",
    option_b: "The OLF",
    option_c: "The Derg (Provisional Military Administrative Council - PMAC)",
    option_d: "The EPRP",
    options: [
      "The EPLF",
      "The OLF",
      "The Derg (Provisional Military Administrative Council - PMAC)",
      "The EPRP"
    ],
    correct_answer: "C",
    explanation: "The Derg (Ge'ez for 'Committee', comprising 108 junior military and police officers) arrested and deposed Emperor Haile Selassie on September 12, 1974, establishing military socialist rule under the slogan 'Ethiopia Tikdem'.",
    topic_name: "The 1974 Ethiopian Revolution",
    instruction_category: "History"
  },
  {
    question_number: 46,
    question_text: "Who emerged as the undisputed autocratic military dictator of the Derg regime and head of state of the People's Democratic Republic of Ethiopia (PDRE)?",
    option_a: "Colonel Mengistu Haile Mariam",
    option_b: "General Aman Andom",
    option_c: "Brigadier General Teferi Benti",
    option_d: "Atnafu Abate",
    options: [
      "Colonel Mengistu Haile Mariam",
      "General Aman Andom",
      "Brigadier General Teferi Benti",
      "Atnafu Abate"
    ],
    correct_answer: "A",
    explanation: "Through a series of internal purges (eliminating rivals Aman Andom, Teferi Benti, and Atnafu Abate), Mengistu Haile Mariam consolidated absolute power as Derg Chairman and later General Secretary of the Workers' Party of Ethiopia (WPE).",
    topic_name: "The Derg Regime & Mengistu Haile Mariam",
    instruction_category: "History"
  },
  {
    question_number: 47,
    question_text: "In March 1975, the Derg enacted which radical socialist proclamation that fundamentally transformed the rural socio-economic landscape of Ethiopia?",
    option_a: "The privatization of all state banks",
    option_b: "Proclamation No. 31/1975: The Public Ownership of Rural Lands (abolishing private land ownership and tenancy)",
    option_c: "The re-establishment of feudal Gult estates",
    option_d: "The immediate return of lands to the imperial family",
    options: [
      "The privatization of all state banks",
      "Proclamation No. 31/1975: The Public Ownership of Rural Lands (abolishing private land ownership and tenancy)",
      "The re-establishment of feudal Gult estates",
      "The immediate return of lands to the imperial family"
    ],
    correct_answer: "B",
    explanation: "Proclamation No. 31 of March 1975 nationalized all rural lands without compensation, banned the hiring of wage labor and land mortgaging, distributed land up to 10 hectares per farming family, and established Peasant Associations (Kebele).",
    topic_name: "1975 Rural Land Proclamation",
    instruction_category: "History"
  },
  {
    question_number: 48,
    question_text: "The violent urban counter-insurgency campaign waged by the Derg regime in 1977–1978 to eliminate civilian political opposition (notably the EPRP) is known as the:",
    option_a: "White Terror",
    option_b: "Cultural Revolution",
    option_c: "Red Terror (Qey Shibir)",
    option_d: "Zemecha",
    options: [
      "White Terror",
      "Cultural Revolution",
      "Red Terror (Qey Shibir)",
      "Zemecha"
    ],
    correct_answer: "C",
    explanation: "The Red Terror (Qey Shibir) was an urban terror campaign executed by the Derg security apparatus and Kebele militias, resulting in the extrajudicial detention, torture, and killing of tens of thousands of educated youths and political activists.",
    topic_name: "The Red Terror (Qey Shibir) 1977-1978",
    instruction_category: "History"
  },
  {
    question_number: 49,
    question_text: "During the 1977–1978 Ethio-Somali War (Ogaden War), the invasion launched by Somali President Siad Barre was defeated by Ethiopian armed forces with direct military assistance from:",
    option_a: "The Soviet Union (USSR), Cuba, and South Yemen",
    option_b: "The United States and Great Britain",
    option_c: "Fascist Italy and Nazi Germany",
    option_d: "NATO allied forces",
    options: [
      "The Soviet Union (USSR), Cuba, and South Yemen",
      "The United States and Great Britain",
      "Fascist Italy and Nazi Germany",
      "NATO allied forces"
    ],
    correct_answer: "A",
    explanation: "In a Cold War alignment shift, the USSR delivered $1 billion in heavy armaments (tanks, MiG-21/23 jets) alongside 15,000 combat troops deployed by Cuba under General Arnaldo Ochoa to help Ethiopia repel the Somali army at Harar and Karamara (March 1978).",
    topic_name: "The Ogaden War (1977-1978)",
    instruction_category: "History"
  },
  {
    question_number: 50,
    question_text: "The 17-year rule of the military Marxist Derg regime collapsed on May 28, 1991 when which coalition captured Addis Ababa?",
    option_a: "The Imperial Bodyguard",
    option_b: "The Ethiopian Peoples' Revolutionary Democratic Front (EPRDF)",
    option_c: "The British Commonwealth Army",
    option_d: "The League of Nations peacekeeping force",
    options: [
      "The Imperial Bodyguard",
      "The Ethiopian Peoples' Revolutionary Democratic Front (EPRDF)",
      "The British Commonwealth Army",
      "The League of Nations peacekeeping force"
    ],
    correct_answer: "B",
    explanation: "Following Mengistu's flight to Zimbabwe on May 21, 1991, EPRDF forces entered Addis Ababa on May 28, 1991, concluding the civil war and establishing the Transitional Government of Ethiopia (TGE).",
    topic_name: "Fall of the Derg (May 1991)",
    instruction_category: "History"
  },
  {
    question_number: 51,
    question_text: "The 'Trans-Atlantic Slave Trade' (16th to 19th centuries) formed a triangular trading system connecting which three continents?",
    option_a: "Europe, Africa, and the Americas",
    option_b: "Asia, Australia, and Antarctica",
    option_c: "Europe, Asia, and Australia",
    option_d: "Africa, Antarctica, and South America",
    options: [
      "Europe, Africa, and the Americas",
      "Asia, Australia, and Antarctica",
      "Europe, Asia, and Australia",
      "Africa, Antarctica, and South America"
    ],
    correct_answer: "A",
    explanation: "The Triangular Trade transported European manufactured goods (guns, textiles) to Africa, enslaved Africans across the Middle Passage to plantation colonies in the Americas, and raw agricultural commodities (sugar, tobacco, cotton) back to Europe.",
    topic_name: "Trans-Atlantic Slave Trade",
    instruction_category: "History"
  },
  {
    question_number: 52,
    question_text: "The Industrial Revolution, which transitioned human manufacturing from manual handcrafts to steam-powered factory mechanization, originated during the mid-18th century in:",
    option_a: "Imperial Russia",
    option_b: "Ancient Rome",
    option_c: "Great Britain",
    option_d: "Qing Dynasty China",
    options: ["Imperial Russia", "Ancient Rome", "Great Britain", "Qing Dynasty China"],
    correct_answer: "C",
    explanation: "Britain pioneered the Industrial Revolution (c. 1760–1840) due to rich coal and iron deposits, agricultural productivity gains, financial capital, patent protection, and mechanization in textile spinning and James Watt's steam engine.",
    topic_name: "The Industrial Revolution",
    instruction_category: "History"
  },
  {
    question_number: 53,
    question_text: "The French Revolution of 1789 abolished feudal absolute monarchy under which world-renowned revolutionary rallying slogan?",
    option_a: "'Peace, Land, and Bread'",
    option_b: "'Liberty, Equality, Fraternity' (Liberté, Égalité, Fraternité)",
    option_c: "'Blood and Iron'",
    option_d: "'Workers of the World, Unite'",
    options: [
      "'Peace, Land, and Bread'",
      "'Liberty, Equality, Fraternity' (Liberté, Égalité, Fraternité)",
      "'Blood and Iron'",
      "'Workers of the World, Unite'"
    ],
    correct_answer: "B",
    explanation: "The French Revolution dismantled the Ancien Régime and promulgated the Declaration of the Rights of Man and of the Citizen under the tripartite ideal of 'Liberté, Égalité, Fraternité' (Liberty, Equality, Fraternity).",
    topic_name: "The French Revolution (1789)",
    instruction_category: "History"
  },
  {
    question_number: 54,
    question_text: "The Berlin Conference of 1884–1885, which laid down the ground rules for the colonial 'Scramble for Africa', was convened by which German Chancellor?",
    option_a: "Otto von Bismarck",
    option_b: "Kaiser Wilhelm II",
    option_c: "Adolf Hitler",
    option_d: "Helmut Kohl",
    options: ["Otto von Bismarck", "Kaiser Wilhelm II", "Adolf Hitler", "Helmut Kohl"],
    correct_answer: "A",
    explanation: "German Chancellor Otto von Bismarck convened 14 European powers and the USA at the Berlin Conference (1884–85), enacting the 'Principle of Effective Occupation' to partition Africa without armed European conflict.",
    topic_name: "The Berlin Conference & Scramble for Africa",
    instruction_category: "History"
  },
  {
    question_number: 55,
    question_text: "Which European colonial power primarily implemented the colonial administrative policy of 'Direct Rule' and 'Assimilation' (attempting to turn colonized subjects into French citizens)?",
    option_a: "Great Britain",
    option_b: "France",
    option_c: "Portugal",
    option_d: "Germany",
    options: ["Great Britain", "France", "Portugal", "Germany"],
    correct_answer: "B",
    explanation: "France employed centralized Direct Rule and the cultural policy of Assimilation (and later Association), placing French commandants over administrative cercles and requiring Africans to adopt French language and law to attain citizenship.",
    topic_name: "Colonial Administrative Systems - Direct Rule",
    instruction_category: "History"
  },
  {
    question_number: 56,
    question_text: "The British colonial administrative doctrine of 'Indirect Rule', governing through indigenous traditional chiefs and customary native courts, was formulated by:",
    option_a: "Cecil Rhodes",
    option_b: "General Charles Gordon",
    option_c: "Lord Frederick Lugard (in Nigeria)",
    option_d: "David Livingstone",
    options: [
      "Cecil Rhodes",
      "General Charles Gordon",
      "Lord Frederick Lugard (in Nigeria)",
      "David Livingstone"
    ],
    correct_answer: "C",
    explanation: "Lord Lugard formulated 'Indirect Rule' in The Dual Mandate in British Tropical Africa, utilizing pre-existing traditional hierarchical structures (such as Fulani emirs in Northern Nigeria) to enforce colonial taxation and law at minimal British administrative cost.",
    topic_name: "British Indirect Rule - Lord Lugard",
    instruction_category: "History"
  },
  {
    question_number: 57,
    question_text: "Which two African nations successfully maintained their political independence during the 19th-century European 'Scramble for Africa'?",
    option_a: "Kenya and Uganda",
    option_b: "Algeria and Nigeria",
    option_c: "Ghana and South Africa",
    option_d: "Ethiopia and Liberia",
    options: [
      "Kenya and Uganda",
      "Algeria and Nigeria",
      "Ghana and South Africa",
      "Ethiopia and Liberia"
    ],
    correct_answer: "D",
    explanation: "Throughout the Scramble for Africa, only Ethiopia (through decisive military victory at Adwa in 1896) and Liberia (established by free African Americans in 1847 under US diplomatic patronage) preserved sovereign independence.",
    topic_name: "African Resistance to Colonialism",
    instruction_category: "History"
  },
  {
    question_number: 58,
    question_text: "The outbreak of World War I in July 1914 was sparked by the assassination of Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, in Sarajevo by:",
    option_a: "Gavrilo Princip (a Bosnian Serb nationalist of the Black Hand)",
    option_b: "Vladimir Lenin",
    option_c: "Winston Churchill",
    option_d: "Kaiser Wilhelm II",
    options: [
      "Gavrilo Princip (a Bosnian Serb nationalist of the Black Hand)",
      "Vladimir Lenin",
      "Winston Churchill",
      "Kaiser Wilhelm II"
    ],
    correct_answer: "A",
    explanation: "On June 28, 1914, 19-year-old Gavrilo Princip shot Archduke Franz Ferdinand and his wife Sophie in Sarajevo, triggering the diplomatic July Crisis and interlocking European military alliances into World War I.",
    topic_name: "Outbreak of World War I (1914)",
    instruction_category: "History"
  },
  {
    question_number: 59,
    question_text: "The Treaty of Versailles (1919), which formally concluded World War I, imposed severe financial reparations, territorial losses, and the 'War Guilt Clause' (Article 231) on:",
    option_a: "Great Britain",
    option_b: "Germany",
    option_c: "The United States",
    option_d: "The Ottoman Empire",
    options: ["Great Britain", "Germany", "The United States", "The Ottoman Empire"],
    correct_answer: "B",
    explanation: "The Versailles Treaty forced Germany to accept sole moral responsibility for WWI, pay massive financial reparations, surrender Alsace-Lorraine and overseas colonies, demilitarize the Rhineland, and drastically cap its military size.",
    topic_name: "The Treaty of Versailles (1919)",
    instruction_category: "History"
  },
  {
    question_number: 60,
    question_text: "The Bolshevik Revolution of October/November 1917 in Russia, which overthrew the Russian Provisional Government and established the world's first socialist state, was led by:",
    option_a: "Joseph Stalin",
    option_b: "Tsar Nicholas II",
    option_c: "Vladimir Ilyich Lenin",
    option_d: "Leon Trotsky alone",
    options: [
      "Joseph Stalin",
      "Tsar Nicholas II",
      "Vladimir Ilyich Lenin",
      "Leon Trotsky alone"
    ],
    correct_answer: "C",
    explanation: "Vladimir Lenin led the Bolshevik party to seize power in Petrograd under the slogans 'All Power to the Soviets' and 'Peace, Land, and Bread', founding Soviet Russia.",
    topic_name: "The Russian Bolshevik Revolution (1917)",
    instruction_category: "History"
  },
  {
    question_number: 61,
    question_text: "World War II in Europe was officially triggered on September 1, 1939 when Nazi Germany under Adolf Hitler launched a Blitzkrieg invasion of:",
    option_a: "Poland",
    option_b: "The Soviet Union",
    option_c: "Great Britain",
    option_d: "The United States",
    options: ["Poland", "The Soviet Union", "Great Britain", "The United States"],
    correct_answer: "A",
    explanation: "Hitler's unprovoked invasion of Poland on September 1, 1939 compelled Britain and France to honor their defense guarantees by declaring war on Germany on September 3, starting World War II.",
    topic_name: "Outbreak of World War II (1939)",
    instruction_category: "History"
  },
  {
    question_number: 62,
    question_text: "The state-sponsored, systematic genocide perpetrated by Nazi Germany during World War II that murdered six million European Jews and millions of others is known as:",
    option_a: "The Great Purge",
    option_b: "The Reign of Terror",
    option_c: "Apartheid",
    option_d: "The Holocaust (Shoah)",
    options: ["The Great Purge", "The Reign of Terror", "Apartheid", "The Holocaust (Shoah)"],
    correct_answer: "D",
    explanation: "The Holocaust was the industrialized genocide orchestrated by Nazi Germany (1941–1945), murdering two-thirds of European Jewry alongside Romani people, Soviet prisoners of war, and disabled individuals in concentration and death camps.",
    topic_name: "World War II - The Holocaust",
    instruction_category: "History"
  },
  {
    question_number: 63,
    question_text: "The United Nations (UN) was established in 1945 to maintain international peace and security at the San Francisco Conference following the end of:",
    option_a: "World War I",
    option_b: "World War II",
    option_c: "The Cold War",
    option_d: "The Napoleonic Wars",
    options: ["World War I", "World War II", "The Cold War", "The Napoleonic Wars"],
    correct_answer: "B",
    explanation: "The UN Charter was signed on June 26, 1945 in San Francisco by 50 nations (including Ethiopia as an original founding member) to replace the failed League of Nations and prevent future global warfare.",
    topic_name: "Founding of the United Nations (1945)",
    instruction_category: "History"
  },
  {
    question_number: 64,
    question_text: "The 'Cold War' (1947–1991) is characterized as an ideological, geopolitical, and military rivalry between which two superpowers?",
    option_a: "The United States (leading the capitalist Western bloc) and the Soviet Union (leading the communist Eastern bloc)",
    option_b: "Great Britain and France",
    option_c: "China and Japan",
    option_d: "Germany and Italy",
    options: [
      "The United States (leading the capitalist Western bloc) and the Soviet Union (leading the communist Eastern bloc)",
      "Great Britain and France",
      "China and Japan",
      "Germany and Italy"
    ],
    correct_answer: "A",
    explanation: "The Cold War pitted the USA (democracy/capitalism/NATO) against the USSR (Marxism-Leninism/Warsaw Pact) in an era of nuclear arms race, space exploration rivalry, and proxy wars across Korea, Vietnam, and Africa without direct superpower warfare.",
    topic_name: "The Cold War (1947-1991)",
    instruction_category: "History"
  },
  {
    question_number: 65,
    question_text: "The year 1960 is celebrated as the 'Year of Africa' in world history because:",
    option_a: "All African economies adopted a single common currency",
    option_b: "European colonial powers colonized the entire continent anew",
    option_c: "Seventeen African nations achieved sovereign independence from colonial rule in that single year",
    option_d: "The African Union was established in Cairo",
    options: [
      "All African economies adopted a single common currency",
      "European colonial powers colonized the entire continent anew",
      "Seventeen African nations achieved sovereign independence from colonial rule in that single year",
      "The African Union was established in Cairo"
    ],
    correct_answer: "C",
    explanation: "In 1960, seventeen newly independent African countries (including Nigeria, DRC, Cameroon, Senegal, Ivory Coast, and Somalia) gained independence, marking the decisive breakthrough of continental decolonization.",
    topic_name: "1960 - The Year of Africa",
    instruction_category: "History"
  },
  {
    question_number: 66,
    question_text: "The Organization of African Unity (OAU) was founded on May 25, 1963 with its permanent headquarters established in:",
    option_a: "Addis Ababa, Ethiopia",
    option_b: "Cairo, Egypt",
    option_c: "Accra, Ghana",
    option_d: "Nairobi, Kenya",
    options: [
      "Addis Ababa, Ethiopia",
      "Cairo, Egypt",
      "Accra, Ghana",
      "Nairobi, Kenya"
    ],
    correct_answer: "A",
    explanation: "Thirty-two independent African heads of state met in Addis Ababa under the host chairmanship of Emperor Haile Selassie I on May 25, 1963, signing the OAU Charter and designating Addis Ababa as the permanent diplomatic capital of Africa.",
    topic_name: "Founding of the OAU (1963)",
    instruction_category: "History"
  },
  {
    question_number: 67,
    question_text: "The institutionalized racial segregation and white minority supremacy system in South Africa known as 'Apartheid' was dismantled in 1994 with the election of:",
    option_a: "Desmond Tutu",
    option_b: "Nelson Mandela (leader of the African National Congress)",
    option_c: "Steve Biko",
    option_d: "Oliver Tambo",
    options: [
      "Desmond Tutu",
      "Nelson Mandela (leader of the African National Congress)",
      "Steve Biko",
      "Oliver Tambo"
    ],
    correct_answer: "B",
    explanation: "Following decades of armed and civil struggle and 27 years of imprisonment, Nelson Mandela won South Africa's first multiracial democratic elections in April 1994, becoming the nation's first Black president and dismantling Apartheid.",
    topic_name: "The Anti-Apartheid Movement & Nelson Mandela",
    instruction_category: "History"
  },
  {
    question_number: 68,
    question_text: "The dissolution and collapse of the Soviet Union (USSR), marking the end of the Cold War, occurred in:",
    option_a: "1945",
    option_b: "1975",
    option_c: "December 1991",
    option_d: "2001",
    options: ["1945", "1975", "December 1991", "2001"],
    correct_answer: "C",
    explanation: "Following Mikhail Gorbachev's Glasnost (openness) and Perestroika (restructuring) policies, the 15 Soviet Republics declared independence, and the USSR officially dissolved on December 26, 1991.",
    topic_name: "Collapse of the Soviet Union (1991)",
    instruction_category: "History"
  },
  {
    question_number: 69,
    question_text: "The earliest known stone tool technology manufactured by early hominids (Homo habilis), consisting of simple chipped river pebbles and choppers, is known as the:",
    option_a: "Oldowan tool industry",
    option_b: "Acheulean handaxe industry",
    option_c: "Mousterian flaking tradition",
    option_d: "Microlithic blade tradition",
    options: [
      "Oldowan tool industry",
      "Acheulean handaxe industry",
      "Mousterian flaking tradition",
      "Microlithic blade tradition"
    ],
    correct_answer: "A",
    explanation: "The Oldowan stone tool culture (dating from 2.6 to 1.7 million years ago, named after Olduvai Gorge and found at Gona in Afar) represents humanity's oldest archaeological tool industry.",
    topic_name: "Paleolithic Stone Tool Technologies",
    instruction_category: "History"
  },
  {
    question_number: 70,
    question_text: "The ancient Babylonian legal code compiled around 1750 BCE, inscribed on a diorite stele and renowned for the principle of retributive justice ('an eye for an eye, a tooth for a tooth'), is the:",
    option_a: "Ten Commandments",
    option_b: "Code of Hammurabi",
    option_c: "Justinian Code",
    option_d: "Magna Carta",
    options: ["Ten Commandments", "Code of Hammurabi", "Justinian Code", "Magna Carta"],
    correct_answer: "B",
    explanation: "King Hammurabi of Babylon codified 282 legal statutes governing property, contracts, family law, and criminal punishments, exemplifying the ancient legal doctrine of Lex Talionis.",
    topic_name: "Ancient Mesopotamian Legal Systems",
    instruction_category: "History"
  },
  {
    question_number: 71,
    question_text: "Which ancient Greek city-state (Polis) is renowned as the birthplace of Western direct democracy, philosophical inquiry (Socrates, Plato), and classical drama?",
    option_a: "Sparta",
    option_b: "Thebes",
    option_c: "Athens",
    option_d: "Corinth",
    options: ["Sparta", "Thebes", "Athens", "Corinth"],
    correct_answer: "C",
    explanation: "Under statesmen like Cleisthenes and Pericles (5th century BCE), classical Athens instituted direct citizen assembly democracy (Ecclesia) and gave birth to Western philosophy, theater, and arts.",
    topic_name: "Classical Greece - Athenian Democracy",
    instruction_category: "History"
  },
  {
    question_number: 72,
    question_text: "The two-century period of relative peace, imperial expansion, and economic stability across the Roman Empire initiated under Emperor Augustus is known as the:",
    option_a: "Pax Romana",
    option_b: "Hellenistic Age",
    option_c: "Middle Ages",
    option_d: "Renaissance",
    options: ["Pax Romana", "Hellenistic Age", "Middle Ages", "Renaissance"],
    correct_answer: "A",
    explanation: "The Pax Romana (Roman Peace, 27 BCE – 180 CE) spanned from the reign of Augustus to Marcus Aurelius, characterized by minimal civil expansion warfare, extensive road building, and flourishing trade across the Mediterranean basin.",
    topic_name: "The Roman Empire & Pax Romana",
    instruction_category: "History"
  },
  {
    question_number: 73,
    question_text: "The Magna Carta (Great Charter), signed by King John of England at Runnymede in 1215, was historically momentous because it:",
    option_a: "Gave the king unlimited power to execute citizens without trial",
    option_b: "Established the principle that the monarch is subject to the rule of law and protected feudal barons from arbitrary royal imprisonment (habeas corpus)",
    option_c: "Abolished all taxes in the Kingdom of England",
    option_d: "Declared England a communist state",
    options: [
      "Gave the king unlimited power to execute citizens without trial",
      "Established the principle that the monarch is subject to the rule of law and protected feudal barons from arbitrary royal imprisonment (habeas corpus)",
      "Abolished all taxes in the Kingdom of England",
      "Declared England a communist state"
    ],
    correct_answer: "B",
    explanation: "Magna Carta (1215) forced the English Crown to acknowledge legal constraints on royal prerogative, guaranteeing due process of law and laying the foundation for modern constitutional governance.",
    topic_name: "Medieval Constitutional History - Magna Carta",
    instruction_category: "History"
  },
  {
    question_number: 74,
    question_text: "The European Renaissance, characterized by a revival of classical Greek and Roman learning, humanism, and artistic mastery, began during the 14th century in:",
    option_a: "The Russian steppes",
    option_b: "The Scandinavian fjords",
    option_c: "Italian merchant city-states (such as Florence, Venice, and Genoa)",
    option_d: "The Scottish highlands",
    options: [
      "The Russian steppes",
      "The Scandinavian fjords",
      "Italian merchant city-states (such as Florence, Venice, and Genoa)",
      "The Scottish highlands"
    ],
    correct_answer: "C",
    explanation: "The Renaissance originated in affluent northern Italian city-states (predominantly Florence under the Medici patronage) fueled by Mediterranean trade wealth, humanist philosophy (Petrarch), and artistic breakthroughs (Leonardo da Vinci, Michelangelo).",
    topic_name: "The European Renaissance",
    instruction_category: "History"
  },
  {
    question_number: 75,
    question_text: "The Protestant Reformation in 16th-century Europe was initiated in 1517 when which German theologian nailed his Ninety-Five Theses criticizing papal indulgences to the church door in Wittenberg?",
    option_a: "Martin Luther",
    option_b: "John Calvin",
    option_c: "Ulrich Zwingli",
    option_d: "Henry VIII",
    options: ["Martin Luther", "John Calvin", "Ulrich Zwingli", "Henry VIII"],
    correct_answer: "A",
    explanation: "Martin Luther's Ninety-Five Theses (1517) denounced ecclesiastical corruption and papal sale of indulgences, sparking the Protestant Reformation that fractured Western Christendom into Catholic and Protestant denominations.",
    topic_name: "The Protestant Reformation",
    instruction_category: "History"
  },
  {
    question_number: 76,
    question_text: "The United States Declaration of Independence was adopted on July 4, 1776, drafting Enlightenment principles of 'Life, Liberty and the pursuit of Happiness', authored principally by:",
    option_a: "George Washington",
    option_b: "Thomas Jefferson",
    option_c: "Benjamin Franklin",
    option_d: "Alexander Hamilton",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Benjamin Franklin",
      "Alexander Hamilton"
    ],
    correct_answer: "B",
    explanation: "Thomas Jefferson penned the Declaration of Independence during the Second Continental Congress, drawing heavily from John Locke's social contract theory and natural rights philosophy.",
    topic_name: "The American Revolution (1776)",
    instruction_category: "History"
  },
  {
    question_number: 77,
    question_text: "The Meiji Restoration of 1868 in Japan is historically famous for:",
    option_a: "Isolating Japan completely from all global interaction for 300 years",
    option_b: "Surrendering Japanese sovereignty to British colonial rule",
    option_c: "Restoring practical imperial rule, abolishing the feudal Tokugawa Shogunate, and rapidly modernizing Japan into an industrial and military power",
    option_d: "Adopting primitive nomadic subsistence pastoralism",
    options: [
      "Isolating Japan completely from all global interaction for 300 years",
      "Surrendering Japanese sovereignty to British colonial rule",
      "Restoring practical imperial rule, abolishing the feudal Tokugawa Shogunate, and rapidly modernizing Japan into an industrial and military power",
      "Adopting primitive nomadic subsistence pastoralism"
    ],
    correct_answer: "C",
    explanation: "The Meiji Restoration dismantled the feudal samurai shogunate, modernized the economy, built modern industries, telegraphs, and railways, and reformed the military, enabling Japan to defeat Russia in 1905.",
    topic_name: "Asian Modernization - Meiji Restoration",
    instruction_category: "History"
  },
  {
    question_number: 78,
    question_text: "At the Battle of Omdurman in 1898, British colonial forces under General Herbert Kitchener reconquered Sudan by defeating the armies of:",
    option_a: "The Mahdist State",
    option_b: "The Sokoto Caliphate",
    option_c: "The Zulu Kingdom",
    option_d: "The Ashanti Empire",
    options: [
      "The Mahdist State",
      "The Sokoto Caliphate",
      "The Zulu Kingdom",
      "The Ashanti Empire"
    ],
    correct_answer: "A",
    explanation: "Kitchener utilized Maxim machine guns and gunboats at the Battle of Omdurman (September 1898) to defeat Khalifa Abdullah's Mahdist forces, establishing the Anglo-Egyptian Condominium over Sudan.",
    topic_name: "Colonial Wars in Northeast Africa - Sudan",
    instruction_category: "History"
  },
  {
    question_number: 79,
    question_text: "The Maji Maji Rebellion (1905–1907) was a massive armed anti-colonial uprising against forced cotton cultivation and brutal colonial taxation in:",
    option_a: "British Kenya",
    option_b: "German East Africa (modern mainland Tanzania)",
    option_c: "French West Africa",
    option_d: "Portuguese Angola",
    options: [
      "British Kenya",
      "German East Africa (modern mainland Tanzania)",
      "French West Africa",
      "Portuguese Angola"
    ],
    correct_answer: "B",
    explanation: "Spirit medium Kinjikitile Ngwale inspired diverse ethnic groups across German East Africa to unite against German colonial rule in the Maji Maji Rebellion, resisting harsh labor exploitation.",
    topic_name: "Anti-Colonial Resistance - Maji Maji",
    instruction_category: "History"
  },
  {
    question_number: 80,
    question_text: "The League of Nations failed to prevent the aggression of Fascist Italy against Ethiopia (1935) and Nazi Germany in Europe primarily because:",
    option_a: "It possessed a massive standing international army that overwhelmed member states",
    option_b: "It was controlled entirely by developing African nations",
    option_c: "It met only once every fifty years",
    option_d: "It lacked an independent armed enforcement mechanism and the United States never joined the organization",
    options: [
      "It possessed a massive standing international army that overwhelmed member states",
      "It was controlled entirely by developing African nations",
      "It met only once every fifty years",
      "It lacked an independent armed enforcement mechanism and the United States never joined the organization"
    ],
    correct_answer: "D",
    explanation: "The League of Nations was structurally weakened by the US Senate's refusal to ratify membership, reliance on unanimous voting, and lack of military enforcement to stop Italian, German, and Japanese aggression.",
    topic_name: "Failure of Collective Security & League of Nations",
    instruction_category: "History"
  },
  {
    question_number: 81,
    question_text: "The Great Depression, the most severe global economic crisis of the 20th century, was triggered in October 1929 by:",
    option_a: "The Wall Street stock market crash in the United States ('Black Tuesday')",
    option_b: "The discovery of vast new gold mines in South Africa",
    option_c: "The end of the Napoleonic Wars",
    option_d: "The opening of the Panama Canal",
    options: [
      "The Wall Street stock market crash in the United States ('Black Tuesday')",
      "The discovery of vast new gold mines in South Africa",
      "The end of the Napoleonic Wars",
      "The opening of the Panama Canal"
    ],
    correct_answer: "A",
    explanation: "On October 29, 1929 ('Black Tuesday'), the New York Stock Exchange collapsed, leading to bank runs, industrial paralysis, hyper-unemployment, and a worldwide economic depression throughout the 1930s.",
    topic_name: "The Great Depression (1929)",
    instruction_category: "History"
  },
  {
    question_number: 82,
    question_text: "The Non-Aligned Movement (NAM), established following the 1955 Bandung Conference and 1961 Belgrade Summit, aimed to:",
    option_a: "Merge all third-world nations into the Warsaw Pact under Soviet command",
    option_b: "Enable developing Asian, African, and Latin American nations to maintain diplomatic neutrality and autonomy without aligning with either Cold War superpower bloc",
    option_c: "Establish a single global monarchical government",
    option_d: "Promote nuclear weapons proliferation among all member states",
    options: [
      "Merge all third-world nations into the Warsaw Pact under Soviet command",
      "Enable developing Asian, African, and Latin American nations to maintain diplomatic neutrality and autonomy without aligning with either Cold War superpower bloc",
      "Establish a single global monarchical government",
      "Promote nuclear weapons proliferation among all member states"
    ],
    correct_answer: "B",
    explanation: "Pioneered by leaders like Josip Broz Tito, Jawaharlal Nehru, Gamal Abdel Nasser, Kwame Nkrumah, and Sukarno, NAM sought self-determination, mutual non-aggression, and independence from US and Soviet Cold War spheres.",
    topic_name: "The Non-Aligned Movement (NAM)",
    instruction_category: "History"
  },
  {
    question_number: 83,
    question_text: "The October 1962 'Cuban Missile Crisis', which brought the world to the brink of direct thermonuclear war, occurred when the Soviet Union installed nuclear ballistic missiles in Cuba, confronting US President:",
    option_a: "John F. Kennedy (confronting Soviet Premier Nikita Khrushchev)",
    option_b: "Harry S. Truman",
    option_c: "Richard Nixon",
    option_d: "Ronald Reagan",
    options: [
      "John F. Kennedy (confronting Soviet Premier Nikita Khrushchev)",
      "Harry S. Truman",
      "Richard Nixon",
      "Ronald Reagan"
    ],
    correct_answer: "A",
    explanation: "For 13 days in October 1962, President John F. Kennedy instituted a naval quarantine of Cuba, resolving the crisis after Nikita Khrushchev agreed to withdraw Soviet nuclear missiles in exchange for US pledges not to invade Cuba and remove US Jupiter missiles from Turkey.",
    topic_name: "The Cuban Missile Crisis (1962)",
    instruction_category: "History"
  },
  {
    question_number: 84,
    question_text: "The fall of the Berlin Wall in November 1989 historically symbolized:",
    option_a: "The outbreak of World War I",
    option_b: "The victory of the Ottoman Empire in Europe",
    option_c: "The collapse of communist satellite regimes in Eastern Europe and the impending end of the Cold War division of Germany",
    option_d: "The construction of the Iron Curtain",
    options: [
      "The outbreak of World War I",
      "The victory of the Ottoman Empire in Europe",
      "The collapse of communist satellite regimes in Eastern Europe and the impending end of the Cold War division of Germany",
      "The construction of the Iron Curtain"
    ],
    correct_answer: "C",
    explanation: "On November 9, 1989, peaceful popular demonstrations led to the opening and demolition of the Berlin Wall, leading to German reunification in October 1990 and the unraveling of Soviet hegemony across Eastern Europe.",
    topic_name: "Fall of the Berlin Wall (1989)",
    instruction_category: "History"
  },
  {
    question_number: 85,
    question_text: "The African Union (AU) was officially launched in 2002 in Durban, South Africa, succeeding which earlier continental organization?",
    option_a: "The League of Arab States",
    option_b: "The Organization of African Unity (OAU)",
    option_c: "The Commonwealth of Nations",
    option_d: "The European Union",
    options: [
      "The League of Arab States",
      "The Organization of African Unity (OAU)",
      "The Commonwealth of Nations",
      "The European Union"
    ],
    correct_answer: "B",
    explanation: "The African Union (AU) succeeded the OAU (1963–2002) to accelerate socio-economic and political continental integration under Agenda 2063, retaining its permanent headquarters in Addis Ababa.",
    topic_name: "Evolution from OAU to African Union",
    instruction_category: "History"
  },
  {
    question_number: 86,
    question_text: "The ancient trans-continental trade network that linked China, Central Asia, India, Persia, and the Mediterranean world for centuries is known as the:",
    option_a: "The Silk Road",
    option_b: "The Amber Road",
    option_c: "The Royal Road of Persia",
    option_d: "The Trans-Saharan Highway",
    options: ["The Silk Road", "The Amber Road", "The Royal Road of Persia", "The Trans-Saharan Highway"],
    correct_answer: "A",
    explanation: "The Silk Road was an overland network of trade routes originating during the Han Dynasty (c. 130 BCE) facilitating commerce in Chinese silk, paper, spices, porcelain, and cultural exchange across Eurasia.",
    topic_name: "Ancient Trade Networks - The Silk Road",
    instruction_category: "History"
  },
  {
    question_number: 87,
    question_text: "The Trans-Saharan Trade in medieval West and North Africa was fundamentally based on the exchange of which two vital primary commodities?",
    option_a: "Coal and steel",
    option_b: "Petroleum and rubber",
    option_c: "Gold (from West African forest mines) and Rock Salt (from Saharan deposits like Taghaza)",
    option_d: "Spruce timber and furs",
    options: [
      "Coal and steel",
      "Petroleum and rubber",
      "Gold (from West African forest mines) and Rock Salt (from Saharan deposits like Taghaza)",
      "Spruce timber and furs"
    ],
    correct_answer: "C",
    explanation: "Camel caravans traversed the Sahara Desert exchanging gold and slaves from West Africa (Ghana, Mali, Songhai empires) for rock salt from Saharan mines, textiles, glassware, and Islamic scholarship.",
    topic_name: "Trans-Saharan Trade in African History",
    instruction_category: "History"
  },
  {
    question_number: 88,
    question_text: "The ancient Kingdom of Kush (Nubia), which once conquered and ruled Egypt as the 25th Pharaonic Dynasty, had its successive historical capitals at:",
    option_a: "Aksum, Yeha, and Roha",
    option_b: "Kerma, Napata, and Meroë",
    option_c: "Thebes, Memphis, and Alexandria",
    option_d: "Carthage, Utica, and Leptis Magna",
    options: [
      "Aksum, Yeha, and Roha",
      "Kerma, Napata, and Meroë",
      "Thebes, Memphis, and Alexandria",
      "Carthage, Utica, and Leptis Magna"
    ],
    correct_answer: "B",
    explanation: "The Kingdom of Kush developed along the Middle Nile in Sudan, shifting capitals from Kerma (c. 2500–1500 BCE) to Napata (c. 1000–300 BCE, under Piye and Taharqa), and finally to the iron-smelting center of Meroë (c. 300 BCE–350 CE).",
    topic_name: "Ancient Nubian Civilizations - Kingdom of Kush",
    instruction_category: "History"
  },
  {
    question_number: 89,
    question_text: "The Kingdom of Aksum was the first sub-Saharan African state to mint its own indigenous coinage in gold, silver, and bronze, inscribed in which two languages?",
    option_a: "Greek (for international trade) and Ge'ez (for domestic circulation)",
    option_b: "Latin and Arabic",
    option_c: "Sumerian and Hieroglyphics",
    option_d: "Portuguese and Italian",
    options: [
      "Greek (for international trade) and Ge'ez (for domestic circulation)",
      "Latin and Arabic",
      "Sumerian and Hieroglyphics",
      "Portuguese and Italian"
    ],
    correct_answer: "A",
    explanation: "Starting under King Endubis (c. 270 CE), Aksum minted coins bearing royal portraits and inscriptions in Greek (the lingua franca of Red Sea trade) and the indigenous Semitic Ge'ez script.",
    topic_name: "Aksumite Numismatics & Economy",
    instruction_category: "History"
  },
  {
    question_number: 90,
    question_text: "The 14th-century Ethiopian epic and liturgical chronicle that established the national founding legend of the Queen of Sheba (Makeda) and King Solomon of Jerusalem is the:",
    option_a: "Fetha Nagast (Law of the Kings)",
    option_b: "Ser'ata Gebr",
    option_c: "Tarike Negest",
    option_d: "Kebra Nagast ('The Glory of the Kings')",
    options: [
      "Fetha Nagast (Law of the Kings)",
      "Ser'ata Gebr",
      "Tarike Negest",
      "Kebra Nagast ('The Glory of the Kings')"
    ],
    correct_answer: "D",
    explanation: "Compiled under Nebura'ed Yeshaq of Axum in the early 14th century, the Kebra Nagast ('Glory of Kings') recounts the birth of Menelik I to Queen Makeda and King Solomon, the transfer of the Ark of the Covenant to Aksum, and divine legitimacy for the Solomonic dynasty.",
    topic_name: "Ethiopian Literary Heritage - Kebra Nagast",
    instruction_category: "History"
  },
  {
    question_number: 91,
    question_text: "In 1622, which Ethiopian Emperor was convinced by Jesuit missionary Pedro Páez to convert to Roman Catholicism, provoking bloody religious civil wars across the highlands?",
    option_a: "Emperor Galawdewos",
    option_b: "Emperor Susenyos",
    option_c: "Emperor Fasilides",
    option_d: "Emperor Sarsa Dengel",
    options: [
      "Emperor Galawdewos",
      "Emperor Susenyos",
      "Emperor Fasilides",
      "Emperor Sarsa Dengel"
    ],
    correct_answer: "B",
    explanation: "Emperor Susenyos declared Catholicism the state religion in 1622 under Jesuit Patriarch Afonso Mendes, sparking nationwide religious rebellions. Horrified by the bloodshed, Susenyos abdicated in 1632 in favor of his son Fasilides, who restored Orthodox Christianity.",
    topic_name: "The Jesuit Mission & Emperor Susenyos",
    instruction_category: "History"
  },
  {
    question_number: 92,
    question_text: "The 1882 Battle of Embabo in modern East Wollega was fought between King Menelik of Shewa and King Takla Haymanot of Gojjam for supremacy over:",
    option_a: "Control of the rich southwestern trade routes and resources (coffee, ivory, gold)",
    option_b: "The Red Sea port of Massawa",
    option_c: "The coastal salt mines of Afar",
    option_d: "The British consulate in Aden",
    options: [
      "Control of the rich southwestern trade routes and resources (coffee, ivory, gold)",
      "The Red Sea port of Massawa",
      "The coastal salt mines of Afar",
      "The British consulate in Aden"
    ],
    correct_answer: "A",
    explanation: "On June 6, 1882, Shewan forces under Menelik routed the Gojjame army under Takla Haymanot at Embabo, securing Shewan hegemony over the southwest and prompting Emperor Yohannes IV to arbitrate regional spheres.",
    topic_name: "The Battle of Embabo (1882)",
    instruction_category: "History"
  },
  {
    question_number: 93,
    question_text: "King Menelik annexed the historic commercial and Islamic city-state of Harar in January 1887 following his victory over Emir Abdullahi at the:",
    option_a: "Battle of Gundet",
    option_b: "Battle of Adwa",
    option_c: "Battle of Chelenqo",
    option_d: "Battle of Shire",
    options: [
      "Battle of Gundet",
      "Battle of Adwa",
      "Battle of Chelenqo",
      "Battle of Shire"
    ],
    correct_answer: "C",
    explanation: "On January 6, 1887, Menelik's army defeated Emir Abdullahi at Chelenqo, annexing the Emirate of Harar into the Ethiopian Empire and appointing his cousin Ras Makonnen Wolde Mikael as its governor.",
    topic_name: "The Battle of Chelenqo & Annexation of Harar",
    instruction_category: "History"
  },
  {
    question_number: 94,
    question_text: "At the Battle of Dogali in January 1887, Ethiopian general Ras Alula Engida ('The Abba Nega') decisively defeated an invading Italian colonial battalion commanded by:",
    option_a: "Colonel Cristoforis",
    option_b: "General Oreste Baratieri",
    option_c: "Marshal Pietro Badoglio",
    option_d: "General Emilio De Bono",
    options: [
      "Colonel Cristoforis",
      "General Oreste Baratieri",
      "Marshal Pietro Badoglio",
      "General Emilio De Bono"
    ],
    correct_answer: "A",
    explanation: "On January 26, 1887, Ras Alula ambushed and wiped out a 500-man Italian column under Lt. Col. Tommaso De Cristoforis at Dogali near Massawa, in a major early victory against Italian colonial expansion.",
    topic_name: "Ras Alula & The Battle of Dogali (1887)",
    instruction_category: "History"
  },
  {
    question_number: 95,
    question_text: "Following Italy's crushing defeat at the Battle of Adwa, the Treaty of Addis Ababa signed in October 1896 stipulated that:",
    option_a: "Ethiopia would become an Italian protectorate",
    option_b: "Italy unconditionally abrogated the Treaty of Wuchale and recognized the absolute sovereign independence of Ethiopia",
    option_c: "Ethiopia agreed to pay war reparations to Rome",
    option_d: "All Ethiopian ports were ceded to the Italian navy",
    options: [
      "Ethiopia would become an Italian protectorate",
      "Italy unconditionally abrogated the Treaty of Wuchale and recognized the absolute sovereign independence of Ethiopia",
      "Ethiopia agreed to pay war reparations to Rome",
      "All Ethiopian ports were ceded to the Italian navy"
    ],
    correct_answer: "B",
    explanation: "The Treaty of Addis Ababa (October 26, 1896) nullified the Treaty of Wuchale, compelled Italy to recognize Ethiopia's unconditional sovereignty under international law, and established diplomatic relations between the two sovereign states.",
    topic_name: "The Treaty of Addis Ababa (1896)",
    instruction_category: "History"
  },
  {
    question_number: 96,
    question_text: "The horrific 'Yekatit 12 Massacre' (February 1937) was a three-day genocidal reprisal in Addis Ababa by Italian Fascist occupation forces under Viceroy Rodolfo Graziani following an assassination attempt by:",
    option_a: "Abraha Deboch and Moges Asgedom (two young Eritrean-Ethiopian patriots)",
    option_b: "Ras Abebe Aregai",
    option_c: "Belay Zeleke",
    option_d: "Zerai Deres",
    options: [
      "Abraha Deboch and Moges Asgedom (two young Eritrean-Ethiopian patriots)",
      "Ras Abebe Aregai",
      "Belay Zeleke",
      "Zerai Deres"
    ],
    correct_answer: "A",
    explanation: "On February 19, 1937 (Yekatit 12), Abraha Deboch and Moges Asgedom hurled grenades at Graziani at the Genete Le'ul palace. In retaliation, Fascist Blackshirts murdered up to 30,000 civilians and massacred the monks of Debre Libanos monastery.",
    topic_name: "The Yekatit 12 Massacre (1937)",
    instruction_category: "History"
  },
  {
    question_number: 97,
    question_text: "The Bale Peasant Rebellion (1963–1970) was an armed agrarian revolt against imperial feudal land expropriation, religious marginalization, and unfair taxation, led by:",
    option_a: "Dejazmach Geresu Duki",
    option_b: "Blatta Haile Mariam Redda",
    option_c: "General Waqo Gutu",
    option_d: "Ras Mesfin Sileshi",
    options: [
      "Dejazmach Geresu Duki",
      "Blatta Haile Mariam Redda",
      "General Waqo Gutu",
      "Ras Mesfin Sileshi"
    ],
    correct_answer: "C",
    explanation: "General Waqo Gutu and guerrilla leaders in El Kere and Delo led pastoral and peasant populations of Bale in a seven-year armed rebellion against land alienation by absentee feudal landlords and high tax burdens.",
    topic_name: "Peasant Rebellions - Bale Rebellion (1963-1970)",
    instruction_category: "History"
  },
  {
    question_number: 98,
    question_text: "The Gojjam Peasant Rebellion of 1968 was provoked primarily by the imperial government's attempt to enforce:",
    option_a: "Forced military conscription for foreign wars",
    option_b: "A new Agricultural Income Tax Assessment system without local consent",
    option_c: "The conversion of the population to Catholicism",
    option_d: "The closure of all local markets",
    options: [
      "Forced military conscription for foreign wars",
      "A new Agricultural Income Tax Assessment system without local consent",
      "The conversion of the population to Catholicism",
      "The closure of all local markets"
    ],
    correct_answer: "B",
    explanation: "In 1968, Gojjam peasants revolted against government tax assessors implementing the new Agricultural Income Tax Law, refusing tax payments until the imperial government suspended the tax and granted an amnesty.",
    topic_name: "The Gojjam Peasant Rebellion (1968)",
    instruction_category: "History"
  },
  {
    question_number: 99,
    question_text: "The selection of Addis Ababa as the permanent headquarters of the Organization of African Unity (OAU) in 1963 was largely due to:",
    option_a: "The diplomatic prestige, continental leadership, and anti-colonial solidarity of Ethiopia and Emperor Haile Selassie I",
    option_b: "Ethiopia offering the lowest rent for office spaces",
    option_c: "A random lottery draw among all 32 founding delegates",
    option_d: "Pressure from European colonial powers",
    options: [
      "The diplomatic prestige, continental leadership, and anti-colonial solidarity of Ethiopia and Emperor Haile Selassie I",
      "Ethiopia offering the lowest rent for office spaces",
      "A random lottery draw among all 32 founding delegates",
      "Pressure from European colonial powers"
    ],
    correct_answer: "A",
    explanation: "Ethiopia's enduring symbol of African independence, Emperor Haile Selassie's mediation bridging the rival Casablanca and Monrovia blocs, and Ethiopia's active material backing for liberation movements earned Addis Ababa universal consensus as the diplomatic capital of Africa.",
    topic_name: "Pan-African Diplomacy & Ethiopia's Role",
    instruction_category: "History"
  },
  {
    question_number: 100,
    question_text: "What is the primary intellectual and societal significance of the rigorous, critical study of History?",
    option_a: "To memorize isolated names and dates for competitive trivia games alone",
    option_b: "To justify unverified myths and erase ancestral records",
    option_c: "To cultivate national chauvinism and hostility toward neighboring states",
    option_d: "To understand how past political, social, and economic processes have shaped the present, develop critical analytical skills, and foster informed civic responsibility",
    options: [
      "To memorize isolated names and dates for competitive trivia games alone",
      "To justify unverified myths and erase ancestral records",
      "To cultivate national chauvinism and hostility toward neighboring states",
      "To understand how past political, social, and economic processes have shaped the present, develop critical analytical skills, and foster informed civic responsibility"
    ],
    correct_answer: "D",
    explanation: "History equips societies with critical thinking, evidence-based analysis, empathetic understanding of diverse human experiences, and causal insights into modern challenges to build a just and enlightened future.",
    topic_name: "Significance of Historical Study",
    instruction_category: "History"
  }
];

module.exports = questions;
