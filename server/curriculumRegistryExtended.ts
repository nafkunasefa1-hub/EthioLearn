import { OfficialUnit } from './curriculumRegistry';

export const EXTENDED_CURRICULUM_DATA: Record<string, OfficialUnit[]> = {
  // === GRADE 9 GEOGRAPHY ===
  'book-9-geog': [
    {
      unit_num: 1,
      title: 'Geological History and Topography of Ethiopia',
      start_page: 1,
      end_page: 38,
      topics: [
        { num: '1.1', title: 'Geological Eras and Structural Evolution of the Horn', start: 2, desc: 'Precambrian, Paleozoic, Mesozoic transgressions, and Cenozoic volcanism.' },
        { num: '1.2', title: 'Physiographic Divisions of Ethiopia', start: 12, desc: 'Western highlands, Eastern highlands, Western lowlands, Eastern lowlands, and Rift Valley.' },
        { num: '1.3', title: 'Topographic Features and Human Settlements', start: 25, desc: 'Highland vs lowland settlements, agricultural potential, and environmental vulnerability.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Climate of Ethiopia and the Horn',
      start_page: 39,
      end_page: 78,
      topics: [
        { num: '2.1', title: 'Elements and Controls of Weather and Climate', start: 40, desc: 'Altitude, latitude, distance from sea, air masses, and ocean currents.' },
        { num: '2.2', title: 'Traditional and Modern Agro-Ecological Zones', start: 52, desc: 'Bereha, Kolla, Woina Dega, Dega, and Kur / Wurch zones in Ethiopia.' },
        { num: '2.3', title: 'Rainfall Distribution and Climate Change Impacts', start: 65, desc: 'Seasonal wind systems, ITCZ, drought patterns, and mitigation strategies.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Drainage Systems and Water Resources of Ethiopia',
      start_page: 79,
      end_page: 118,
      topics: [
        { num: '3.1', title: 'Major River Basins and Drainage Systems', start: 80, desc: 'Western (Nile), Southeastern (Genale-Dawa/Wabi Shebelle), and Rift Valley basins.' },
        { num: '3.2', title: 'Lakes of Ethiopia and Hydroelectric Potential', start: 95, desc: 'Crater, rift valley, and man-made lakes (GERD); aquatic ecosystems and irrigation.' },
        { num: '3.3', title: 'Water Resource Management and Transboundary Geopolitics', start: 108, desc: 'Riparian rights, integrated watershed management, and GERD regional significance.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Natural Vegetation and Wildlife of Ethiopia',
      start_page: 119,
      end_page: 156,
      topics: [
        { num: '4.1', title: 'Altitudinal Zonation of Natural Vegetation', start: 120, desc: 'Afroalpine, coniferous forest, broadleaved rainforest, woodland, and steppe.' },
        { num: '4.2', title: 'Endemic Wildlife of Ethiopia and Conservation', start: 132, desc: 'Walia Ibex, Gelada Baboon, Ethiopian Wolf, Mountain Nyala, and National Parks.' },
        { num: '4.3', title: 'Deforestation, Habitat Loss, and Protected Areas', start: 144, desc: 'Forest degradation, community conservation, and biosphere reserves.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Population of Ethiopia and Economic Activities',
      start_page: 157,
      end_page: 198,
      topics: [
        { num: '5.1', title: 'Population Growth, Structure, and Distribution', start: 158, desc: 'Fertility, mortality, population pyramid, and spatial distribution drivers.' },
        { num: '5.2', title: 'Rural and Urban Settlement Patterns in Ethiopia', start: 172, desc: 'Internal migration, rapid urbanization, urban planning, and infrastructure.' },
        { num: '5.3', title: 'Primary Economic Activities: Agriculture, Pastoralism, and Mining', start: 184, desc: 'Smallholder crop farming, commercial agriculture, nomadic pastoralism, and mining.' }
      ]
    }
  ],

  // === GRADE 9 AMHARIC ===
  'book-9-amh': [
    {
      unit_num: 1,
      title: 'ቋንቋና ማህበረሰብ (Language and Society)',
      start_page: 1,
      end_page: 35,
      topics: [
        { num: '1.1', title: 'የቋንቋ ምንነትና የማህበራዊ ትስስር ሚና', start: 2, desc: 'የቋንቋ መገለጫዎች፣ የመግባቢያ መሳሪያነት እና የባህል ማስተላለፊያነት።' },
        { num: '1.2', title: 'የአማርኛ ቋንቋ የፊደላት ስርዓትና አነባበብ', start: 12, desc: 'ሳድስ፣ ግዕዝ፣ ካዕብ፣ ሳልስ፣ ራብዕ፣ ሃምስ፣ ሳብዕ ፊደላትና የድምፅ አወጣጥ።' },
        { num: '1.3', title: 'የቃላት አወቃቀርና የንግግር ክፍሎች', start: 22, desc: 'ስም፣ ቅጽል፣ ግስ፣ ተውሳከ-ግስ እና መስተዋድድ በአማርኛ ሰዋሰው።' }
      ]
    },
    {
      unit_num: 2,
      title: 'የንባብ ክህሎትና ማስተዋል (Reading Comprehension)',
      start_page: 36,
      end_page: 72,
      topics: [
        { num: '2.1', title: 'የተለያዩ ምንባቦችን በጥልቀት የማንበብ ዘዴዎች', start: 37, desc: 'ዋናውን ሀሳብ መረዳት፣ ፍሬ ሀሳቦችን መለየት እና አውዳዊ ትርጉም መስጠት።' },
        { num: '2.2', title: 'የአማርኛ ስነ-ቃልና አፈ-ታሪኮች', start: 50, desc: 'ተረቶች፣ እንቆቅልሾች፣ ምሳሌያዊ አነጋገሮች እና የህዝብ ግጥሞች።' },
        { num: '2.3', title: 'የቃላት አውዳዊ ፍቺ እና ፈሊጣዊ አነጋገሮች', start: 62, desc: 'ቀጥተኛና ስውር ፍቺ፣ ፈሊጦች እና ምሳሌያዊ አባባሎች ትንታኔ።' }
      ]
    },
    {
      unit_num: 3,
      title: 'የፅህፈት ስነ-ስርዓት (Writing and Composition)',
      start_page: 73,
      end_page: 110,
      topics: [
        { num: '3.1', title: 'የአንቀጽ አወቃቀርና የሀሳብ ቅደም-ተከተል', start: 74, desc: 'መሪ አረፍተ-ነገር፣ ደጋፊ ሀሳቦች እና ማጠቃለያ አረፍተ-ነገሮች ማዘጋጀት።' },
        { num: '3.2', title: 'የስርዓተ-ነጥብ አጠቃቀም በአማርኛ ፅሁፍ', start: 88, desc: 'አራት ነጥብ፣ ሁለት ነጥብ፣ ድርብ ሰረዝ፣ ትዕምርተ-ጥያቄ እና ቅንፍ አጠቃቀም።' },
        { num: '3.3', title: 'ገላጭና አስረጂ ድርሰት አፃፃፍ', start: 98, desc: 'የድርሰት መዋቅር፣ መግቢያ፣ አካል እና ማጠቃለያ ዝግጅት።' }
      ]
    },
    {
      unit_num: 4,
      title: 'የአማርኛ ሰዋሰውና አረፍተ-ነገር (Grammar and Syntax)',
      start_page: 111,
      end_page: 148,
      topics: [
        { num: '4.1', title: 'ባለቤት፣ ማሟያ እና ማሰሪያ አንቀጽ', start: 112, desc: 'የአረፍተ-ነገር መዋቅር፣ የግስና ባለቤት ስምምነት።' },
        { num: '4.2', title: 'የግስ እርባታ እና ጊዜያት (Tenses in Amharic)', start: 125, desc: 'ሀላፊ ጊዜ፣ የአሁን ጊዜ፣ የትንቢት ጊዜ እና ቀጣይ ድርጊት እርባታ።' },
        { num: '4.3', title: 'ቀጥተኛና ቀጥተኛ ያልሆነ ንግግር', start: 138, desc: 'የተናጋሪውን ንግግር ማስተላለፍ እና የሰዋሰው ስርዓትን መጠበቅ።' }
      ]
    },
    {
      unit_num: 5,
      title: 'ስነ-ፅሁፍና ትውፊት (Literature and Cultural Heritage)',
      start_page: 149,
      end_page: 185,
      topics: [
        { num: '5.1', title: 'የኢትዮጵያ ስነ-ፅሁፍ እድገት አጭር ታሪክ', start: 150, desc: 'የጥንታዊ ፅሁፎች፣ የብራና መጻህፍት እና የዘመናዊ ስነ-ፅሁፍ አጀማመር።' },
        { num: '5.2', title: 'የግጥም ስልቶችና ቤት አመታት', start: 162, desc: 'የግጥም ቤት፣ ምጣኔ፣ ስንኝ እና ሀረግ ትንታኔ።' },
        { num: '5.3', title: 'አጭር ልቦለድ እና ተውኔት ትንተና', start: 174, desc: 'ገፀ-ባህሪያት፣ ግጭት፣ መቼት እና ጭብጥ ትንተና በአማርኛ ድርሰቶች።' }
      ]
    }
  ],

  // === GRADE 9 CIVICS (CITIZENSHIP EDUCATION) ===
  'book-9-civ': [
    {
      unit_num: 1,
      title: 'Ethical Values',
      start_page: 5,
      end_page: 20,
      topics: [
        { num: '1.1', title: 'Understanding Ethics and Morality', start: 6, desc: 'Definition of ethics vs morality, integrity, honesty, empathy, and accountability.' },
        { num: '1.2', title: 'Applied Ethics in Daily Life and Public Space', start: 10, desc: 'Academic ethics, environmental ethics, bioethics, and school integrity case studies.' },
        { num: '1.3', title: 'Professional Ethics and Civic Integrity', start: 14, desc: 'Core professional duties, confidentiality, combating corruption, and FEACC mandates.' },
        { num: '1.4', title: 'Ethical Decision-Making Frameworks', start: 18, desc: 'Four-step ethical decision model, evaluating consequences against moral standards.' }
      ]
    },
    {
      unit_num: 2,
      title: 'The Culture of Using Digital Technology',
      start_page: 21,
      end_page: 42,
      topics: [
        { num: '2.1', title: 'Concepts and Tools of Digital Technology', start: 22, desc: 'Electronic systems, educational LMS, Digital Ethiopia 2025, and telecommunication infrastructure.' },
        { num: '2.2', title: 'Benefits and Ethical Challenges of Digital Media', start: 27, desc: 'Opportunities of online learning vs hazards of digital addiction, hate speech, and the digital divide.' },
        { num: '2.3', title: 'Cybersecurity, Digital Safety, and Privacy', start: 33, desc: 'Password hygiene, two-factor authentication, phishing defenses, and combating cyberbullying.' },
        { num: '2.4', title: 'Digital Citizenship and Combating Misinformation', start: 38, desc: 'Triple filter test for online sharing, verified sourcing, and responsible digital engagement.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Constitution and Constitutionalism',
      start_page: 43,
      end_page: 68,
      topics: [
        { num: '3.1', title: 'Concepts and Features of Constitutions', start: 44, desc: 'Supreme law functions, written vs unwritten, rigid vs flexible constitutional classifications.' },
        { num: '3.2', title: 'Constitutionalism and the Rule of Law', start: 50, desc: 'Limitation of government power, separation of powers, judicial independence, and periodic elections.' },
        { num: '3.3', title: 'Historical Development of Ethiopian Constitutions', start: 56, desc: 'Comparative analysis of 1931, 1955, 1987, and 1995 constitutional regimes.' },
        { num: '3.4', title: 'Fundamental Rights in the 1995 FDRE Constitution', start: 62, desc: 'Chapter 3 human rights (Articles 14-28) vs democratic rights (Articles 29-44).' }
      ]
    },
    {
      unit_num: 4,
      title: 'Understanding Indigenous Knowledge',
      start_page: 69,
      end_page: 92,
      topics: [
        { num: '4.1', title: 'Concepts and Nature of Indigenous Knowledge Systems', start: 70, desc: 'Distinctive characteristics of indigenous wisdom vs conventional laboratory science.' },
        { num: '4.2', title: 'Traditional Conflict Resolution Mechanisms in Ethiopia', start: 76, desc: 'The Gadaa system, Shimgellina, Mada\'a, and Luwa customary restorative justice models.' },
        { num: '4.3', title: 'Indigenous Environmental Conservation & Traditional Medicine', start: 82, desc: 'Konso stone terracing, church sacred forests, pastoral grazing calendars, and herbal healthcare.' },
        { num: '4.4', title: 'Integrating Indigenous Wisdom into Modern Development', start: 88, desc: 'Alternative dispute resolution (ADR), agricultural germplasm conservation, and climate adaptation.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Multiculturalism in Ethiopia',
      start_page: 93,
      end_page: 114,
      topics: [
        { num: '5.1', title: 'Meaning and Pillars of Multiculturalism', start: 94, desc: 'Cultural pluralism, Melting Pot vs Salad Bowl models, equal dignity, and mutual respect.' },
        { num: '5.2', title: 'Cultural Diversity, Languages, and Heritage in Ethiopia', start: 99, desc: 'Afro-Asiatic and Nilo-Saharan language families, regional festivals, and shared cultural wealth.' },
        { num: '5.3', title: 'Overcoming Prejudice, Stereotypes, and Ethnocentrism', start: 105, desc: 'Deconstructing biases, combating discrimination, and building school intercultural solidarity.' },
        { num: '5.4', title: 'Promoting Intercultural Competence', start: 110, desc: 'Active listening, language learning, cultural empathy, and inclusive civic habits.' }
      ]
    },
    {
      unit_num: 6,
      title: 'National Unity Through Diversity',
      start_page: 115,
      end_page: 136,
      topics: [
        { num: '6.1', title: 'Concepts of Nation, State, and Sovereignty', start: 116, desc: 'State elements, nation vs multinational state, popular sovereignty, and territorial integrity.' },
        { num: '6.2', title: 'Historical Bonds and Economic Interdependence', start: 121, desc: 'Highland-lowland ecological complementarity, historical trade corridors, and the Battle of Adwa (1896).' },
        { num: '6.3', title: 'Civic Patriotism vs. Chauvinism and Narrow Nationalism', start: 127, desc: 'Constitutional patriotism celebrating pluralism vs destructive ethnic polarization.' },
        { num: '6.4', title: 'The Youth as Architects of National Cohesion', start: 132, desc: 'Reason over emotion, educational excellence, youth volunteerism, and social peacebuilding.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Problem Solving Skills',
      start_page: 137,
      end_page: 154,
      topics: [
        { num: '7.1', title: 'Understanding Social and Community Problems', start: 138, desc: 'Personal, interpersonal, and public problem taxonomy, overcoming cognitive biases and emotional reactivity.' },
        { num: '7.2', title: 'The Six-Step Problem-Solving Model', start: 143, desc: 'Problem definition, root-cause 5-Whys analysis, brainstorming, criteria evaluation, action planning, outcome review.' },
        { num: '7.3', title: 'Collaborative Decision-Making and Civic Action', start: 149, desc: 'Consensus building, negotiation techniques, and designing school environmental and health projects.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Ethiopia\'s Foreign Relations in East Africa',
      start_page: 155,
      end_page: 173,
      topics: [
        { num: '8.1', title: 'Principles and Objectives of Ethiopian Foreign Policy', start: 156, desc: 'Sovereignty defense, poverty reduction diplomacy, good neighborliness, and non-interference.' },
        { num: '8.2', title: 'Regional Integration and the Role of IGAD', start: 161, desc: 'Horn of Africa economic integration, power grids, anti-desertification, and Addis Ababa diplomatic capital.' },
        { num: '8.3', title: 'Ethiopia\'s Peacekeeping Legacy and Pan-Africanism', start: 167, desc: 'Historic support for African liberation movements, UN and AU peacekeeping missions across Africa.' },
        { num: '8.4', title: 'Transboundary Resource Cooperation & Final Synthesis', start: 171, desc: 'Equitable water utilization, the Grand Ethiopian Renaissance Dam (GERD), and regional energy cooperation.' }
      ]
    }
  ],

  // === GRADE 9 INFORMATION TECHNOLOGY (IT) ===
  'book-9-it': [
    {
      unit_num: 1,
      title: 'Introduction to Information and Communication Technology (ICT)',
      start_page: 1,
      end_page: 30,
      topics: [
        { num: '1.1', title: 'Concepts, History, and Generations of Computers', start: 2, desc: 'Vacuum tubes, transistors, ICs, microprocessors, and modern AI computing.' },
        { num: '1.2', title: 'Role and Impact of ICT in Ethiopian Development', start: 12, desc: 'Digital Ethiopia 2025, e-commerce, digital agriculture, tele-education, and health.' },
        { num: '1.3', title: 'Ethical, Social, and Environmental Issues in ICT', start: 22, desc: 'Digital divide, e-waste recycling, digital citizenship, and ergonomics.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Computer Hardware and Architecture',
      start_page: 31,
      end_page: 65,
      topics: [
        { num: '2.1', title: 'Central Processing Unit (CPU) and System Unit Components', start: 32, desc: 'ALU, Control Unit, registers, cache, motherboard, bus architecture, and clock speed.' },
        { num: '2.2', title: 'Memory Units: Primary and Secondary Storage', start: 44, desc: 'RAM, ROM, SSDs, HDDs, optical disks, flash memory, and storage capacity metrics.' },
        { num: '2.3', title: 'Input and Output Devices and Ports', start: 54, desc: 'Keyboards, optical mice, scanners, monitors, printers, HDMI, USB, and audio ports.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Computer Software and Operating Systems',
      start_page: 66,
      end_page: 102,
      topics: [
        { num: '3.1', title: 'System Software vs Application Software', start: 67, desc: 'Operating systems, device drivers, utilities, firmware, and user applications.' },
        { num: '3.2', title: 'Functions and Types of Operating Systems', start: 79, desc: 'Process management, memory management, file systems, GUI vs CLI (Windows, Linux, Android).' },
        { num: '3.3', title: 'File Management and System Utility Tools', start: 91, desc: 'Directories, file paths, extensions, disk defragmentation, backup, and antivirus tools.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Word Processing and Productivity Tools',
      start_page: 103,
      end_page: 140,
      topics: [
        { num: '4.1', title: 'Advanced Word Processing Techniques', start: 104, desc: 'Formatting styles, tables, headers/footers, citations, and table of contents generation.' },
        { num: '4.2', title: 'Electronic Spreadsheets and Formulas', start: 116, desc: 'Cells, ranges, arithmetic formulas, SUM, AVERAGE, IF functions, and data charts.' },
        { num: '4.3', title: 'Presentation Design and Slide Techniques', start: 128, desc: 'Slide layouts, master slides, transitions, animations, and multimedia embeds.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Computer Networks, the Internet and Web Technologies',
      start_page: 141,
      end_page: 180,
      topics: [
        { num: '5.1', title: 'Network Fundamentals: LAN, MAN, WAN and Topologies', start: 142, desc: 'Star, bus, ring topologies, routers, switches, access points, and transmission media.' },
        { num: '5.2', title: 'The Internet, IP Addressing, DNS, and Web Browsers', start: 154, desc: 'TCP/IP, IPv4 vs IPv6, domain name systems, URLs, HTTP/HTTPS protocols, and search strategies.' },
        { num: '5.3', title: 'Basic Web Development with HTML and CSS', start: 166, desc: 'HTML document structure, tags, headings, paragraphs, links, images, tables, and CSS styling.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Algorithms, Problem Solving, and Cybersecurity',
      start_page: 181,
      end_page: 216,
      topics: [
        { num: '6.1', title: 'Algorithm Design: Pseudocode and Flowcharts', start: 182, desc: 'Sequence, selection (if-else), iteration (loops), and step-by-step logic.' },
        { num: '6.2', title: 'Introduction to Programming Principles', start: 194, desc: 'Variables, data types, input/output operations, and basic debugging.' },
        { num: '6.3', title: 'Cybersecurity, Malware Protection, and Data Privacy', start: 204, desc: 'Viruses, worms, phishing, strong passwords, two-factor authentication, and copyright.' }
      ]
    }
  ],

  // === GRADE 10 GEOGRAPHY ===
  'book-10-geog': [
    {
      unit_num: 1,
      title: 'Map Reading and Interpretation',
      start_page: 1,
      end_page: 36,
      topics: [
        { num: '1.1', title: 'Map Scales and Distance Calculations', start: 2, desc: 'Representative fraction, linear scale, converting scales, and area measurement on maps.' },
        { num: '1.2', title: 'Contour Lines and Landform Representation', start: 14, desc: 'Contour intervals, slopes (uniform, concave, convex), spurs, valleys, and intervisibility.' },
        { num: '1.3', title: 'Geographic Information Systems (GIS) and Remote Sensing', start: 26, desc: 'Satellite imagery, GPS tracking, spatial data layers, and cartographic applications in Ethiopia.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Physical Geography of Ethiopia and the Horn',
      start_page: 37,
      end_page: 80,
      topics: [
        { num: '2.1', title: 'Rift Valley System and Volcanic Landscapes', start: 38, desc: 'Rifting mechanics, Afar depression, Main Ethiopian Rift, hot springs, and geothermal energy.' },
        { num: '2.2', title: 'Soils of Ethiopia: Types, Fertility, and Degradation', start: 54, desc: 'Nitisols, Vertisols, Cambisols, soil erosion, terracing, and watershed rehabilitation.' },
        { num: '2.3', title: 'Mineral and Energy Resources of Ethiopia', start: 68, desc: 'Gold, potash, natural gas, tantalum, hydro, wind, and solar renewable energy.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Population and Development in Ethiopia',
      start_page: 81,
      end_page: 122,
      topics: [
        { num: '3.1', title: 'Demographic Trends and Demographic Transition Theory', start: 82, desc: 'Stages of transition, crude birth/death rates, dependency ratio, and youthful population.' },
        { num: '3.2', title: 'Migration, Urbanization, and Regional Development', start: 96, desc: 'Rural-urban migration push-pull factors, metropolitan growth, and regional corridor planning.' },
        { num: '3.3', title: 'Human Development Index (HDI) and Millennium/SDG Goals', start: 108, desc: 'Life expectancy, educational attainment, per capita income, and poverty eradication.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Economic Geography: Agriculture, Industry, and Trade',
      start_page: 123,
      end_page: 165,
      topics: [
        { num: '4.1', title: 'Agricultural Farming Systems and Food Security', start: 124, desc: 'Seed-farming, enset-planting, shifting cultivation, commercial irrigation, and fertilizer usage.' },
        { num: '4.2', title: 'Industrial Development and Industrial Parks in Ethiopia', start: 138, desc: 'Agro-processing, textiles, leather, cement, industrial parks (Hawassa, Bole Lemi), and FDI.' },
        { num: '4.3', title: 'Transportation, Communication, and International Trade', start: 150, desc: 'Railway network (Ethio-Djibouti), road corridors, Ethiopian Airlines cargo, export commodities (coffee, gold, oilseeds).' }
      ]
    },
    {
      unit_num: 5,
      title: 'Environmental Issues and Sustainability in Ethiopia',
      start_page: 166,
      end_page: 204,
      topics: [
        { num: '5.1', title: 'Land Degradation, Desertification, and Deforestation', start: 167, desc: 'Green Legacy Initiative, afforestation, soil conservation structures, and sustainable land management.' },
        { num: '5.2', title: 'Drought, Floods, and Disaster Risk Management', start: 180, desc: 'Early warning systems, National Disaster Risk Management Commission, climate resilience.' },
        { num: '5.3', title: 'Green Economy and Climate Resilient Growth in Ethiopia', start: 192, desc: 'CRGE strategy, carbon sequestration, renewable power export, and sustainable ecotourism.' }
      ]
    }
  ],

  // === GRADE 10 AMHARIC ===
  'book-10-amh': [
    {
      unit_num: 1,
      title: 'የቋንቋ ተግባቦትና ስነ-ልሳን (Linguistics and Communication)',
      start_page: 1,
      end_page: 36,
      topics: [
        { num: '1.1', title: 'የቋንቋ ተግባራትና የንግግር ስልቶች', start: 2, desc: 'መረጃ መስጠት፣ ስሜትን መግለፅ፣ ማሳመን እና ማስተማር በቋንቋ ተግባቦት።' },
        { num: '1.2', title: 'የቃላት አመሰራረት በቅጥያዎች (Affixation)', start: 14, desc: 'ቅድመ-ቅጥያ፣ ድህረ-ቅጥያ እና ውስጠ-ቅጥያ በአማርኛ ቃላት ምስረታ።' },
        { num: '1.3', title: 'የድምፅና የፊደል ዝምድና ጥናት', start: 26, desc: 'የድምፅ መውጫ ቦታዎች፣ ፈንጂና ተናባቢ ድምፆች፣ ላላና ጠበቀ አነባበብ።' }
      ]
    },
    {
      unit_num: 2,
      title: 'የንባብ ስልትና ጥልቅ ትንታኔ (Advanced Reading Comprehension)',
      start_page: 37,
      end_page: 75,
      topics: [
        { num: '2.1', title: 'የመረጃና የጥናት ፅሁፎችን ማንበብ', start: 38, desc: 'የሀቅና የአመለካከት ልዩነት፣ የደራሲውን አላማ መመርመር እና ድምዳሜ ላይ መድረስ።' },
        { num: '2.2', title: 'የኢትዮጵያ ታሪክና ባህል ምንባቦች', start: 50, desc: 'የአድዋ ድል፣ ቅርሶች እና የብሔር ብሔረሰቦች ባህል የሚያንፀባርቁ ምንባቦች።' },
        { num: '2.3', title: 'የቃላት ፈሊጣዊና ምሳሌያዊ ትንታኔ', start: 62, desc: 'ስውር ትርጉሞች፣ ቅኔያዊ አነጋገሮች፣ ሰምና ወርቅ መረዳት።' }
      ]
    },
    {
      unit_num: 3,
      title: 'የፅህፈት ጥበብና ድርሰት (Advanced Writing)',
      start_page: 76,
      end_page: 114,
      topics: [
        { num: '3.1', title: 'አመዛዛኝና አከራካሪ ድርሰት አፃፃፍ', start: 77, desc: 'መከራከሪያ ነጥቦችን ማጠናከር፣ ማስተባበል እና ምክንያታዊ ድምዳሜ መስጠት።' },
        { num: '3.2', title: 'የስራ ማመልከቻና የህይወት ታሪክ (CV) ዝግጅት', start: 90, desc: 'መደበኛ ደብዳቤ አፃፃፍ፣ የቅጥር ማመልከቻ እና የትምህርት ማስረጃዎች አቀራረብ።' },
        { num: '3.3', title: 'የስብሰባ ቃለ-ጉባኤ እና ሪፖርት አፃፃፍ', start: 102, desc: 'የውይይት ማስታወሻ፣ የውሳኔዎች አዘጋገብ እና የስራ አፈፃፀም ሪፖርት ማዘጋጀት።' }
      ]
    },
    {
      unit_num: 4,
      title: 'የአማርኛ ሰዋሰው ጥናት (Syntax and Complex Sentences)',
      start_page: 115,
      end_page: 152,
      topics: [
        { num: '4.1', title: 'ድብልቅና ጥምር አረፍተ-ነገሮች', start: 116, desc: 'አያያዦች፣ ዋና እና ጥገኛ አንቀጾች ግንኙነት።' },
        { num: '4.2', title: 'ተገብሮና አድራጊ ግሶች (Active and Passive Verbs)', start: 128, desc: 'የተገብሮ ግስ አወቃቀር እና በአረፍተ-ነገር ውስጥ ያለው ፋይዳ።' },
        { num: '4.3', title: 'የስርዓተ-ነጥብ ህጎችና የአጠቃቀም ስህተቶች እርማት', start: 140, desc: 'የሰዋሰው እና የስርዓተ-ነጥብ ስህተቶችን ማረም እና ፅሁፍን ማሳመር።' }
      ]
    },
    {
      unit_num: 5,
      title: 'ስነ-ፅሁፍና ስነ-ቃል ምርምር (Literature and Folklore)',
      start_page: 153,
      end_page: 190,
      topics: [
        { num: '5.1', title: 'የልቦለድ አካላት ትንታኔ (Plot, Character, Setting, Theme)', start: 154, desc: 'የታዋቂ የአማርኛ ልቦለዶች ትንተና (ፍቅር እስከ መቃብር፣ አደፍርስ)።' },
        { num: '5.2', title: 'ተውኔትና ድራማ አወቃቀር', start: 166, desc: 'መነጋገሪያ፣ የመድረክ መመሪያ፣ ገፀ-ባህሪ እና ግጭት በኢትዮጵያ ድራማዎች።' },
        { num: '5.3', title: 'የግጥም ቋንቋና ስነ-ውበት ጥናት', start: 178, desc: 'ዘይቤዎች (ሰውኛ፣ አነጻጻሪ፣ ምሳሌያዊ) እና የሙዚቃዊነት ምጣኔ።' }
      ]
    }
  ],

  // === GRADE 10 CIVICS ===
  'book-10-civ': [
    {
      unit_num: 1,
      title: 'Democratic System and Good Governance',
      start_page: 1,
      end_page: 34,
      topics: [
        { num: '1.1', title: 'Federalism and State Structure in Ethiopia', start: 2, desc: 'Federal and regional powers, devolution of authority, and intergovernmental relations.' },
        { num: '1.2', title: 'Principles of Good Governance: Accountability and Transparency', start: 14, desc: 'Responsiveness, equity, efficiency, public participation, and ombudsman oversight.' },
        { num: '1.3', title: 'The Role of Civil Society and Mass Media', start: 24, desc: 'Fourth estate, freedom of expression, NGO contributions to social development.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Rule of Law and Constitutionalism',
      start_page: 35,
      end_page: 68,
      topics: [
        { num: '2.1', title: 'Constitutional Rights and Human Rights Treaties', start: 36, desc: 'UDHR, ICCPR, ICESCR, and domestic constitutional implementation.' },
        { num: '2.2', title: 'Judicial Review and Separation of Powers', start: 48, desc: 'House of Federation constitutional interpretation, executive checks, and legislative oversight.' },
        { num: '2.3', title: 'Combating Corruption in Public Procurement and Administration', start: 58, desc: 'Federal Ethics and Anti-Corruption Commission, asset disclosure, and ethical leadership.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Equality, Diversity, and Social Inclusivity',
      start_page: 69,
      end_page: 100,
      topics: [
        { num: '3.1', title: 'Nations, Nationalities, and Peoples Rights', start: 70, desc: 'Self-determination, linguistic rights, cultural preservation, and equitable resource sharing.' },
        { num: '3.2', title: 'Affirmative Action and Eliminating Harmful Traditional Practices', start: 82, desc: 'FGM, early child marriage, affirmative university entry policies for disadvantaged areas.' },
        { num: '3.3', title: 'Religious Freedom and Secularism in the Constitution', start: 92, desc: 'Separation of state and religion, freedom of conscience, and interfaith harmony.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Justice, Taxation, and Economic Rights',
      start_page: 101,
      end_page: 134,
      topics: [
        { num: '4.1', title: 'Economic, Social, and Cultural Rights', start: 102, desc: 'Right to work, education, healthcare, clean environment, and sustainable livelihood.' },
        { num: '4.2', title: 'Tax System and Fiscal Federalism in Ethiopia', start: 114, desc: 'Direct vs indirect taxes, customs duties, revenue sharing between federal and regional governments.' },
        { num: '4.3', title: 'Consumer Rights, Market Ethics, and Fair Trade', start: 124, desc: 'Price regulation, anti-hoarding, food safety standards, and commercial ethics.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Patriotism, National Security, and Global Relations',
      start_page: 135,
      end_page: 170,
      topics: [
        { num: '5.1', title: 'Preserving National Sovereignty and Historical Heritage', start: 136, desc: 'Battle of Adwa legacy, defending national sovereignty, and protecting historical antiquities.' },
        { num: '5.2', title: 'Ethiopia’s Role in African Unity and International Diplomacy', start: 148, desc: 'Founding member of UN and OAU/AU, AU headquarters in Addis Ababa, and UN peacekeeping missions.' },
        { num: '5.3', title: 'Global Environmental Governance and Sustainable Development', start: 160, desc: 'Paris Climate Agreement, Africa Agenda 2063, and regional economic integration (AfCFTA).' }
      ]
    }
  ],

  // === GRADE 10 INFORMATION TECHNOLOGY (IT) ===
  'book-10-it': [
    {
      unit_num: 1,
      title: 'Database Management Systems (DBMS)',
      start_page: 1,
      end_page: 38,
      topics: [
        { num: '1.1', title: 'Database Concepts, File Systems vs Relational Databases', start: 2, desc: 'Data redundancy, tables, records, fields, keys (primary, foreign), and normalization.' },
        { num: '1.2', title: 'Entity-Relationship (ER) Modeling', start: 14, desc: 'Entities, attributes, relationships (1:1, 1:N, M:N), and ER diagram design.' },
        { num: '1.3', title: 'Structured Query Language (SQL) Fundamentals', start: 26, desc: 'CREATE, INSERT, SELECT, UPDATE, DELETE, WHERE clauses, and basic queries in DBMS.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Computer Networks and Data Communication',
      start_page: 39,
      end_page: 78,
      topics: [
        { num: '2.1', title: 'Data Transmission Media: Guided and Unguided', start: 40, desc: 'Twisted pair, coaxial, fiber optics, radio waves, microwave, satellite, and 4G/5G mobile data.' },
        { num: '2.2', title: 'Network OSI and TCP/IP Reference Models', start: 54, desc: '7 layers of OSI model, packet switching, routers, switches, and IP subnetting fundamentals.' },
        { num: '2.3', title: 'Wireless Networking, Wi-Fi Protocols, and IoT', start: 66, desc: 'WLAN standards (802.11), Bluetooth, RFID, cellular networks, and Internet of Things applications.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Web Design, Multimedia, and Web 2.0',
      start_page: 79,
      end_page: 118,
      topics: [
        { num: '3.1', title: 'Advanced HTML5 Semantic Elements and Forms', start: 80, desc: 'Header, nav, section, article, footer, inputs, validation, and audio/video embeds.' },
        { num: '3.2', title: 'CSS Styling, Box Model, and Responsive Layouts', start: 94, desc: 'Selectors, margins, padding, flexbox, CSS grid, and media queries for mobile devices.' },
        { num: '3.3', title: 'Introduction to Client-Side Scripting with JavaScript', start: 106, desc: 'DOM manipulation, event listeners, variables, functions, and interactive web elements.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Algorithms and Programming Logic (Python)',
      start_page: 119,
      end_page: 162,
      topics: [
        { num: '4.1', title: 'Python Syntax, Variables, and Data Types', start: 120, desc: 'Integers, floats, strings, booleans, lists, and standard input/output print statements.' },
        { num: '4.2', title: 'Control Structures: Conditionals and Loops in Python', start: 134, desc: 'if, elif, else conditions; for loops, while loops, break, and continue logic.' },
        { num: '4.3', title: 'Functions, Modular Programming, and Error Handling', start: 148, desc: 'Defining functions with def, parameters, return values, and try-except blocks.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Information Systems Security, Privacy, and Emerging Tech',
      start_page: 163,
      end_page: 200,
      topics: [
        { num: '5.1', title: 'Cyber Threats, Cryptography, and Firewalls', start: 164, desc: 'Symmetric vs asymmetric encryption, SSL/TLS certificates, firewalls, and ransomware defense.' },
        { num: '5.2', title: 'Data Protection, Intellectual Property, and Cybercrime Laws', start: 178, desc: 'Computer crime proclamation of Ethiopia, digital copyrights, software piracy, and ethics.' },
        { num: '5.3', title: 'Emerging Technologies: AI, Cloud Computing, and Big Data', start: 190, desc: 'Machine learning, cloud services (IaaS, PaaS, SaaS), data analytics, and future job frontiers.' }
      ]
    }
  ],

  // === GRADE 11 SOCIAL: ECONOMICS ===
  'book-11-soc-econ': [
    {
      unit_num: 1,
      title: 'The Nature of Economics and Scarcity',
      start_page: 1,
      end_page: 38,
      topics: [
        { num: '1.1', title: 'Fundamental Concepts: Scarcity, Choice, and Opportunity Cost', start: 2, desc: 'Unlimited human wants vs limited economic resources, and trade-offs.' },
        { num: '1.2', title: 'The Production Possibilities Frontier (PPF)', start: 14, desc: 'PPF curves, productive and allocative efficiency, law of increasing opportunity cost, and economic growth.' },
        { num: '1.3', title: 'Economic Systems: Traditional, Command, Market, and Mixed Economies', start: 26, desc: 'Ownership of factors of production, resource allocation mechanisms, and Ethiopia’s mixed economy.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Theory of Demand, Supply, and Market Equilibrium',
      start_page: 39,
      end_page: 84,
      topics: [
        { num: '2.1', title: 'The Law of Demand and Determinants of Demand', start: 40, desc: 'Demand schedules, curves, movements along vs shifts in demand curve, and elasticity of demand.' },
        { num: '2.2', title: 'The Law of Supply and Determinants of Supply', start: 56, desc: 'Supply curves, technology, input prices, expectations, and price elasticity of supply.' },
        { num: '2.3', title: 'Market Equilibrium, Price Ceilings, and Price Floors', start: 70, desc: 'Equilibrium price and quantity, market shortages/surpluses, government price controls, and subsidies.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Theory of Consumer Behavior',
      start_page: 85,
      end_page: 126,
      topics: [
        { num: '3.1', title: 'Cardinal Utility Theory and Diminishing Marginal Utility', start: 86, desc: 'Total utility, marginal utility, law of diminishing marginal utility, and consumer equilibrium condition.' },
        { num: '3.2', title: 'Ordinal Utility Theory: Indifference Curves and Budget Lines', start: 100, desc: 'Properties of indifference curves, marginal rate of substitution (MRS), budget constraint line.' },
        { num: '3.3', title: 'Consumer Optimum and Income/Substitution Effects', start: 114, desc: 'Tangency of budget line and indifference curve, normal vs inferior goods, and price consumption curves.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Theory of Production and Cost',
      start_page: 127,
      end_page: 172,
      topics: [
        { num: '4.1', title: 'Short-Run Production and Law of Diminishing Returns', start: 128, desc: 'Total, average, and marginal product curves; three stages of short-run production.' },
        { num: '4.2', title: 'Long-Run Production: Isoquants, Isocosts, and Returns to Scale', start: 144, desc: 'Isoquant mapping, MRTS, optimal factor combinations, economies and diseconomies of scale.' },
        { num: '4.3', title: 'Short-Run and Long-Run Cost Curves', start: 158, desc: 'Fixed costs, variable costs, MC, ATC, AVC, AFC, relationship between cost and productivity curves.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Market Structures and Business Organizations',
      start_page: 173,
      end_page: 218,
      topics: [
        { num: '5.1', title: 'Perfect Competition: Characteristics and Profit Maximization', start: 174, desc: 'Price-taking firms, MR=MC rule, short-run profit/loss, shutdown point, and long-run equilibrium.' },
        { num: '5.2', title: 'Pure Monopoly: Price Determination and Deadweight Loss', start: 190, desc: 'Barriers to entry, natural monopolies, price discrimination, consumer surplus loss, and public regulation.' },
        { num: '5.3', title: 'Monopolistic Competition and Oligopoly', start: 204, desc: 'Product differentiation, non-price competition, game theory, cartels, and kinked demand curve model.' }
      ]
    }
  ],

  // === GRADE 11 SOCIAL: HISTORY ===
  'book-11-soc-hist': [
    {
      unit_num: 1,
      title: 'Historiography and Historical Sources of Ethiopia',
      start_page: 1,
      end_page: 34,
      topics: [
        { num: '1.1', title: 'Nature of History and Historiographical Traditions', start: 2, desc: 'Objectivity, primary vs secondary sources, oral traditions, and archaeological chronicles.' },
        { num: '1.2', title: 'Early States in the Horn of Africa: Daamat and Aksum', start: 14, desc: 'Aksumite maritime commerce, coinage, conversion to Christianity and Islam, monuments, and decline.' },
        { num: '1.3', title: 'The Zagwe Dynasty and Medieval Christian Kingdom', start: 24, desc: 'Lalibela rock-hewn churches, territorial expansion, roving royal courts, and Hadiya/Ifat relations.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Muslim Sultanates and Inter-State Relations (10th–16th C.)',
      start_page: 35,
      end_page: 76,
      topics: [
        { num: '2.1', title: 'The Sultanate of Ifat and Adal', start: 36, desc: 'Trade routes, Zeila port, Walashma dynasty, and socio-economic institutions.' },
        { num: '2.2', title: 'The Wars of Ahmad ibn Ibrahim (Ahmad Gragn)', start: 50, desc: 'Causes of conflict, Ottoman and Portuguese military interventions, Battle of Shimbra Kure, and aftermath.' },
        { num: '2.3', title: 'The Population Movements of the 16th Century (Oromo Population Movement)', start: 64, desc: 'Gadaa socio-political organization, factors for expansion, integration mechanisms (Moggasa, Guddifacha).' }
      ]
    },
    {
      unit_num: 3,
      title: 'The Gondarine Period and the Era of Princes (Zemene Mesafint)',
      start_page: 77,
      end_page: 118,
      topics: [
        { num: '3.1', title: 'The Gondar Dynasty: Castles, Architecture, and Liturgical Culture', start: 78, desc: 'Fasiladas, imperial castles, painting, theology disputes (Tewahedo, Qibat, Sost Lidet).' },
        { num: '3.2', title: 'The Era of Princes (Zemene Mesafint: 1769–1855)', start: 92, desc: 'Decline of central monarchical power, regional lords (Yejju Oromo dynasty, Tigray, Begemder, Gojjam, Shewa).' },
        { num: '3.3', title: 'Socio-Economic Life, Feudal Relations, and Trade Caravans', start: 106, desc: 'Gult land tenure, peasant obligations, long-distance slave and trade routes.' }
      ]
    },
    {
      unit_num: 4,
      title: 'The Making of the Modern Ethiopian State (1855–1913)',
      start_page: 119,
      end_page: 165,
      topics: [
        { num: '4.1', title: 'Emperor Tewodros II: Vision, Modernization, and Conflict', start: 120, desc: 'Unification drives, administrative centralization, reform attempts, Gafat cannon foundry, and Battle of Maqdala (1868).' },
        { num: '4.2', title: 'Emperor Yohannes IV: Religious Policy and Defense of Territorial Integrity', start: 136, desc: 'Council of Boru Meda, defensive wars against Egyptians (Gundet, Gura), Italians (Dogali), and Mahdists (Metemma).' },
        { num: '4.3', title: 'Emperor Menelik II: Territorial Expansion and the Battle of Adwa (1896)', start: 150, desc: 'Incorporation of southern, western, and eastern regions, Treaty of Wuchale, Adwa victory, and international recognition.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Colonial Scramble for Africa and European Imperialism',
      start_page: 166,
      end_page: 206,
      topics: [
        { num: '5.1', title: 'The Berlin Conference (1884–85) and Partition of Africa', start: 167, desc: 'Economic, geopolitical, and racial drivers of colonialism, effective occupation principle.' },
        { num: '5.2', title: 'Colonial Administrative Systems: Direct and Indirect Rule', start: 180, desc: 'British indirect rule, French assimilation policy, Portuguese concession companies, and settler colonies.' },
        { num: '5.3', title: 'African Anti-Colonial Resistance Movements', start: 194, desc: 'Maji Maji rebellion, Samori Ture, Zulu resistance, and the exceptional pan-African triumph of Ethiopia.' }
      ]
    }
  ],

  // === GRADE 11 SOCIAL: GEOGRAPHY ===
  'book-11-soc-geog': [
    {
      unit_num: 1,
      title: 'Advanced Map Reading and Spatial Analysis',
      start_page: 1,
      end_page: 40,
      topics: [
        { num: '1.1', title: 'Map Projections, Coordinates, and Grid References', start: 2, desc: 'Cylindrical, conical, azimuthal projections; UTM system, latitude/longitude conversion.' },
        { num: '1.2', title: 'Relief Representation and Cross-Section Profiling', start: 16, desc: 'Drawing topographical profiles, calculating vertical exaggeration, gradient, and drainage densities.' },
        { num: '1.3', title: 'Digital Mapping, Remote Sensing, and Spatial Data', start: 28, desc: 'Raster vs vector data in GIS, multispectral satellite imagery, and environmental change detection.' }
      ]
    },
    {
      unit_num: 2,
      title: 'The Physical Environment of the Horn of Africa',
      start_page: 41,
      end_page: 86,
      topics: [
        { num: '2.1', title: 'Plate Tectonics and the Afar Triple Junction', start: 42, desc: 'Arabian, Nubian, and Somali plates, crustal thinning, geothermal rifts, and seismic hazard zones.' },
        { num: '2.2', title: 'Paleoclimatology and Monsoon Dynamics in East Africa', start: 58, desc: 'Indian Ocean Dipole, El Niño Southern Oscillation (ENSO), ITCZ migration, and rainfall variability.' },
        { num: '2.3', title: 'Hydrology, Groundwater Aquifers, and Basin Morphometry', start: 72, desc: 'Omo-Gibe, Blue Nile (Abay), Baro-Akobo basins; deep volcanic aquifers and transboundary water agreements.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Population Dynamics, Urbanization, and Economic Corridors',
      start_page: 87,
      end_page: 130,
      topics: [
        { num: '3.1', title: 'Spatial Demographic Modeling and Migration Systems', start: 88, desc: 'Gravity models, step migration, cross-border refugee flows, diaspora economic remittances.' },
        { num: '3.2', title: 'Urban Systems and Spatial Agglomeration in Ethiopia', start: 102, desc: 'Primate city hierarchy, Addis Ababa master planning, secondary regional growth centers (Hawassa, Bahir Dar).' },
        { num: '3.3', title: 'Transport Geography, Logistics, and Regional Corridors', start: 116, desc: 'LAPSSET corridor, Djibouti corridor, dry ports (Modjo), and trade integration in COMESA.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Agrarian Systems, Land Tenure, and Food Geopolitics',
      start_page: 131,
      end_page: 175,
      topics: [
        { num: '4.1', title: 'Agro-Ecological Diversity and Crop Suitability Zonation', start: 132, desc: 'Teff, coffee, oilseeds, enset agronomy zones; Green revolution technologies and seed varieties.' },
        { num: '4.2', title: 'Land Policy, Commercial Farmland Investments, and Smallholders', start: 148, desc: 'State land ownership, large-scale commercial leases in Gambella/Somali, and smallholder land certification.' },
        { num: '4.3', title: 'Food Security, Famine Vulnerability, and Social Safety Nets', start: 162, desc: 'Productive Safety Net Program (PSNP), resilience indicators, and emergency food logistics.' }
      ]
    }
  ],

  // === GRADE 11 SOCIAL: AGRICULTURE ===
  'book-11-soc-agri': [
    {
      unit_num: 1,
      title: 'Agricultural Science, Food Security, and the Ethiopian Economy',
      start_page: 1,
      end_page: 38,
      topics: [
        { num: '1.1', title: 'Role of Agriculture in Ethiopian GDP, Employment, and Exports', start: 2, desc: 'Foreign exchange earnings (coffee, oilseeds, flowers), food security, and rural livelihood.' },
        { num: '1.2', title: 'Agro-Ecological Classification and Farming Systems of Ethiopia', start: 14, desc: 'Highland mixed cereal-livestock, lowland pastoralism, peri-urban horticulture, and irrigation schemes.' },
        { num: '1.3', title: 'Agricultural Policies, Commercialization, and Cooperatives', start: 26, desc: 'Agricultural Transformation Institute (ATI), farmer training centers (FTCs), and microfinance.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Soil Science, Soil Fertility, and Watershed Management',
      start_page: 39,
      end_page: 80,
      topics: [
        { num: '2.1', title: 'Physical and Chemical Properties of Agricultural Soils', start: 40, desc: 'Texture, structure, pH, cation exchange capacity (CEC), organic matter, and soil microorganisms.' },
        { num: '2.2', title: 'Soil Nutrient Management: Organic Manures and Chemical Fertilizers', start: 54, desc: 'Nitrogen, phosphorus, potassium (NPK), bio-fertilizers, composting, vermiculture, and soil testing.' },
        { num: '2.3', title: 'Soil Erosion Control, Terracing, and Watershed Conservation', start: 68, desc: 'Gully rehabilitation, check dams, biological conservation (vetiver grass), and water harvesting.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Agronomy and Field Crop Production',
      start_page: 81,
      end_page: 125,
      topics: [
        { num: '3.1', title: 'Cereal Crop Production: Teff, Maize, Wheat, and Barley', start: 82, desc: 'Seedbed preparation, sowing rates, row planting vs broadcasting, weed management, and harvesting.' },
        { num: '3.2', title: 'Pulse and Oilseed Production: Faba Bean, Chickpea, Sesame, and Soy', start: 98, desc: 'Symbiotic nitrogen fixation, Rhizobium inoculation, crop rotation, and export market quality.' },
        { num: '3.3', title: 'Integrated Pest and Disease Management (IPM)', start: 112, desc: 'Cultural, biological, and chemical control; armyworm, rusts, blights, and pesticide safety standards.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Livestock Husbandry, Apiculture, and Animal Nutrition',
      start_page: 126,
      end_page: 168,
      topics: [
        { num: '4.1', title: 'Dairy and Beef Cattle Production in Ethiopia', start: 127, desc: 'Indigenous zebu breeds (Boran, Fogera), artificial insemination, cross-breeding, and forage crops.' },
        { num: '4.2', title: 'Small Ruminants (Sheep & Goats) and Poultry Production', start: 142, desc: 'Intensive vs backyard poultry, dual-purpose breeds, brooding management, and vaccination schedules.' },
        { num: '4.3', title: 'Beekeeping (Apiculture) and Honey Production', start: 154, desc: 'Traditional vs modern frame hives, bee forage, honey harvesting, beeswax processing, and export.' }
      ]
    }
  ],

  // === GRADE 11 & 12 SCHOLASTIC APTITUDE TEST (SAT) ===
  'book-11-nat-sat': [
    {
      unit_num: 1,
      title: 'Verbal Reasoning and Vocabulary Analogies',
      start_page: 1,
      end_page: 36,
      topics: [
        { num: '1.1', title: 'Word Relationships and Paired Analogies', start: 2, desc: 'Synonyms, antonyms, cause-effect, part-to-whole, degree of intensity, and tool-to-worker analogies.' },
        { num: '1.2', title: 'Contextual Vocabulary, Synonyms, Antonyms & Sentence Completion', start: 14, desc: 'Using contrast clues, restatement clues, and transitional signals to deduce missing vocabulary.' },
        { num: '1.3', title: 'Verbal Classification, Idioms & Odd-Word-Out Analysis', start: 26, desc: 'Categorizing semantic clusters and identifying conceptual anomalies under strict time limits.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Reading Comprehension and Critical Argument Analysis',
      start_page: 37,
      end_page: 72,
      topics: [
        { num: '2.1', title: 'Primary Purpose, Main Idea, and Author Tone Analysis', start: 38, desc: 'Identifying the author’s primary argument, persuasive strategies, and critical biases in academic passages.' },
        { num: '2.2', title: 'Inference, Deduction, and Textual Evidence Extraction', start: 50, desc: 'Distinguishing explicitly stated facts from substantiated inferences and unwarranted assumptions.' },
        { num: '2.3', title: 'Logical Fallacies, Assumptions, and Argument Structure', start: 62, desc: 'Ad hominem, circular reasoning, post hoc, false dichotomy, and evaluating premises.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Analytical & Logical Reasoning Puzzles',
      start_page: 73,
      end_page: 108,
      topics: [
        { num: '3.1', title: 'Deductive Logic, Syllogisms, and Conditional Statements', start: 74, desc: 'Universal and particular premises, contrapositives, Euler circles, and valid logical deductions.' },
        { num: '3.2', title: 'Linear Ordering, Circular Seating, and Scheduling Games', start: 86, desc: 'Constraint satisfaction tables, relative positioning, and multi-condition seating puzzles.' },
        { num: '3.3', title: 'Blood Relations, Direction Sense, and Coding-Decoding', start: 98, desc: 'Family tree generation mapping, cardinal compass displacements, and alphanumeric cipher patterns.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Quantitative Aptitude: Arithmetic, Ratios, and Word Problems',
      start_page: 109,
      end_page: 144,
      topics: [
        { num: '4.1', title: 'Number Properties, Divisibility, LCM/GCD, and Remainder Rules', start: 110, desc: 'Prime factorization, parity rules, cyclic unit digits, and modular remainder shortcuts.' },
        { num: '4.2', title: 'Ratios, Proportions, Percentages, Profit/Loss, and Interest', start: 122, desc: 'Successive percentage changes, markup/discount, simple and compound interest calculations.' },
        { num: '4.3', title: 'Work-Rate, Mixture/Alligation, and Speed-Distance-Time Problems', start: 134, desc: 'Combined work rates 1/T = 1/A + 1/B, weighted mixture rules, average speed, and relative velocity.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Quantitative Aptitude: Algebra, Sequences, and Probability',
      start_page: 145,
      end_page: 174,
      topics: [
        { num: '5.1', title: 'Numerical Series, Pattern Recognition, and Algebraic Equations', start: 146, desc: 'Arithmetic, geometric, alternating, second-difference, and Fibonacci sequence rules.' },
        { num: '5.2', title: 'Data Interpretation: Tables, Bar Charts, Pie Charts, and Line Graphs', start: 156, desc: 'Extracting cross-tabulated values, percentage growth rates, and sector angle conversions.' },
        { num: '5.3', title: 'Counting Principles, Permutations, Combinations, and Probability', start: 166, desc: 'Fundamental counting rule, nPr vs nCr selection formulas, and independent/mutually exclusive events.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Spatial Reasoning and EUEE Aptitude Test Mastery',
      start_page: 175,
      end_page: 200,
      topics: [
        { num: '6.1', title: 'Pattern Matrix Completion, Rotations, and Spatial Visualization', start: 176, desc: 'Rotational symmetry, reflection axes, 3D cube folding nets, and figure series completion.' },
        { num: '6.2', title: 'Quantitative Comparison (Quantity A vs. Quantity B) & Data Sufficiency', start: 184, desc: 'Equal/Not-Equal number plugging strategies and evaluating statement sufficiency.' },
        { num: '6.3', title: 'High-Speed EUEE Aptitude Pacing, Elimination & Trap-Avoidance Strategies', start: 192, desc: 'Managing the 60-question / 120-minute EUEE Aptitude exam with zero-panic elimination techniques.' }
      ]
    }
  ],

  'book-11-soc-sat': [
    {
      unit_num: 1,
      title: 'Verbal Reasoning and Vocabulary Analogies',
      start_page: 1,
      end_page: 36,
      topics: [
        { num: '1.1', title: 'Word Relationships and Paired Analogies', start: 2, desc: 'Synonyms, antonyms, cause-effect, part-to-whole, degree of intensity, and tool-to-worker analogies.' },
        { num: '1.2', title: 'Contextual Vocabulary, Synonyms, Antonyms & Sentence Completion', start: 14, desc: 'Using contrast clues, restatement clues, and transitional signals to deduce missing vocabulary.' },
        { num: '1.3', title: 'Verbal Classification, Idioms & Odd-Word-Out Analysis', start: 26, desc: 'Categorizing semantic clusters and identifying conceptual anomalies under strict time limits.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Reading Comprehension and Critical Argument Analysis',
      start_page: 37,
      end_page: 72,
      topics: [
        { num: '2.1', title: 'Primary Purpose, Main Idea, and Author Tone Analysis', start: 38, desc: 'Identifying the author’s primary argument, persuasive strategies, and critical biases in academic passages.' },
        { num: '2.2', title: 'Inference, Deduction, and Textual Evidence Extraction', start: 50, desc: 'Distinguishing explicitly stated facts from substantiated inferences and unwarranted assumptions.' },
        { num: '2.3', title: 'Logical Fallacies, Assumptions, and Argument Structure', start: 62, desc: 'Ad hominem, circular reasoning, post hoc, false dichotomy, and evaluating premises.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Analytical & Logical Reasoning Puzzles',
      start_page: 73,
      end_page: 108,
      topics: [
        { num: '3.1', title: 'Deductive Logic, Syllogisms, and Conditional Statements', start: 74, desc: 'Universal and particular premises, contrapositives, Euler circles, and valid logical deductions.' },
        { num: '3.2', title: 'Linear Ordering, Circular Seating, and Scheduling Games', start: 86, desc: 'Constraint satisfaction tables, relative positioning, and multi-condition seating puzzles.' },
        { num: '3.3', title: 'Blood Relations, Direction Sense, and Coding-Decoding', start: 98, desc: 'Family tree generation mapping, cardinal compass displacements, and alphanumeric cipher patterns.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Quantitative Aptitude: Arithmetic, Ratios, and Word Problems',
      start_page: 109,
      end_page: 144,
      topics: [
        { num: '4.1', title: 'Number Properties, Divisibility, LCM/GCD, and Remainder Rules', start: 110, desc: 'Prime factorization, parity rules, cyclic unit digits, and modular remainder shortcuts.' },
        { num: '4.2', title: 'Ratios, Proportions, Percentages, Profit/Loss, and Interest', start: 122, desc: 'Successive percentage changes, markup/discount, simple and compound interest calculations.' },
        { num: '4.3', title: 'Work-Rate, Mixture/Alligation, and Speed-Distance-Time Problems', start: 134, desc: 'Combined work rates 1/T = 1/A + 1/B, weighted mixture rules, average speed, and relative velocity.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Quantitative Aptitude: Algebra, Sequences, and Probability',
      start_page: 145,
      end_page: 174,
      topics: [
        { num: '5.1', title: 'Numerical Series, Pattern Recognition, and Algebraic Equations', start: 146, desc: 'Arithmetic, geometric, alternating, second-difference, and Fibonacci sequence rules.' },
        { num: '5.2', title: 'Data Interpretation: Tables, Bar Charts, Pie Charts, and Line Graphs', start: 156, desc: 'Extracting cross-tabulated values, percentage growth rates, and sector angle conversions.' },
        { num: '5.3', title: 'Counting Principles, Permutations, Combinations, and Probability', start: 166, desc: 'Fundamental counting rule, nPr vs nCr selection formulas, and independent/mutually exclusive events.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Spatial Reasoning and EUEE Aptitude Test Mastery',
      start_page: 175,
      end_page: 200,
      topics: [
        { num: '6.1', title: 'Pattern Matrix Completion, Rotations, and Spatial Visualization', start: 176, desc: 'Rotational symmetry, reflection axes, 3D cube folding nets, and figure series completion.' },
        { num: '6.2', title: 'Quantitative Comparison (Quantity A vs. Quantity B) & Data Sufficiency', start: 184, desc: 'Equal/Not-Equal number plugging strategies and evaluating statement sufficiency.' },
        { num: '6.3', title: 'High-Speed EUEE Aptitude Pacing, Elimination & Trap-Avoidance Strategies', start: 192, desc: 'Managing the 60-question / 120-minute EUEE Aptitude exam with zero-panic elimination techniques.' }
      ]
    }
  ],

  'book-12-nat-sat': [
    {
      unit_num: 1,
      title: 'Advanced EUEE Verbal Aptitude: Analogies, Synonyms, Antonyms & Precision Lexicon',
      start_page: 1,
      end_page: 36,
      topics: [
        { num: '1.1', title: 'Nine Core EUEE Analogy Bridges (Function, Degree, Part-Whole, Cause-Effect, Worker-Tool)', start: 2, desc: 'Constructing diagnostic bridge sentences and avoiding reversed-order and part-of-speech traps.' },
        { num: '1.2', title: 'High-Frequency EUEE Vocabulary, Roots, Prefixes, Synonyms & Antonyms', start: 14, desc: 'Greek/Latin roots (bene, mal, omni, equi, ver), contextual synonym precision, and polarity contrast.' },
        { num: '1.3', title: 'Double-Blank Sentence Completion & Discourse Transition Signals', start: 26, desc: 'Contrast triggers (albeit, notwithstanding, whereas), cause-effect linkers, and two-blank elimination.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Advanced Reading Comprehension & Scientific/Social Passage Synthesis',
      start_page: 37,
      end_page: 72,
      topics: [
        { num: '2.1', title: 'Analyzing Natural Science, Economics & Humanities EUEE Passages', start: 38, desc: 'Structural mapping of thesis statements, experimental evidence, counter-theories, and author synthesis.' },
        { num: '2.2', title: 'Strengthening/Weakening Arguments, Necessary vs. Sufficient Assumptions', start: 50, desc: 'Negation test for necessary assumptions, causal link validation, and identifying alternate explanations.' },
        { num: '2.3', title: 'Evaluating Paradoxes, Counterarguments & Author Perspective', start: 62, desc: 'Resolving apparent discrepancies, tone spectrum analysis, and eliminating extreme/out-of-scope distractors.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Formal Logic, Analytical Games & Deductive Reasoning',
      start_page: 73,
      end_page: 108,
      topics: [
        { num: '3.1', title: 'Propositional Logic, Contrapositives & Quantifiers', start: 74, desc: 'Conditional rule If P then Q ⇔ If not Q then not P, Converse/Inverse fallacies, and De Morgan laws.' },
        { num: '3.2', title: 'Multi-Variable Grouping, Matrix Logic & Selection Constraint Puzzles', start: 86, desc: 'In/Out selection grids, biconditional blocks, and rapid deduction chains for EUEE analytical games.' },
        { num: '3.3', title: 'Venn Diagram Set Logic, Syllogistic Validity & Family Tree Deductions', start: 98, desc: 'Three-set inclusion-exclusion n(A ∪ B ∪ C), categorical syllogisms, and multi-generation kinship puzzles.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Advanced Quantitative Reasoning: Algebraic Modeling & Word Problems',
      start_page: 109,
      end_page: 144,
      topics: [
        { num: '4.1', title: 'Quantitative Comparison Strategies (Equal/Not-Equal Plug-In Method)', start: 110, desc: 'Testing boundary numbers (0, 1, −1, 1/2, 2, 100) to compare Quantity A and Quantity B rapidly.' },
        { num: '4.2', title: 'Multi-Worker Rate Problems, Relative Velocity & Age Equations', start: 122, desc: 'Pipes and cisterns, opposite/same-direction relative speeds, boat-stream equations, and age shift matrices.' },
        { num: '4.3', title: 'Inequalities, Absolute Value, Exponents, Radicals & Function Models', start: 134, desc: 'Sign-reversal rules, compound inequalities, fractional exponents, and custom symbol operator functions.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Geometry, Combinatorics, Probability & Statistics for SAT',
      start_page: 145,
      end_page: 176,
      topics: [
        { num: '5.1', title: 'Plane & Coordinate Geometry Shortcuts (Triangles, Circles, Polygons, Slopes)', start: 146, desc: 'Pythagorean triples (3-4-5, 5-12-13), 30°-60°-90° and 45°-45°-90° triangles, arc/sector formulas, and slopes.' },
        { num: '5.2', title: 'Permutations, Combinations, Conditional Probability & Expected Value', start: 156, desc: 'Committee selection with restrictions, complementary probability 1 − P(none), and conditional tree diagrams.' },
        { num: '5.3', title: 'Statistics: Weighted Averages, Median, Quartiles, Variance & Standard Deviation', start: 166, desc: 'Effect of adding/multiplying a constant on mean and standard deviation, and balancing lever averages.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Data Sufficiency, Multi-Chart Interpretation & Full EUEE SAT Blueprint',
      start_page: 177,
      end_page: 200,
      topics: [
        { num: '6.1', title: 'Multi-Source Data Interpretation (Combined Pie Charts, Stacked Bars & Growth Tables)', start: 178, desc: 'Synthesizing ratios across linked charts, compound annual growth rates, and visual estimation shortcuts.' },
        { num: '6.2', title: 'Data Sufficiency Decision Tree (AD/BCE Elimination Grid)', start: 186, desc: 'Evaluating Statement (1) alone, Statement (2) alone, combined sufficiency, and avoiding C-trap assumptions.' },
        { num: '6.3', title: '60-Question / 120-Minute EUEE SAT Time-Management Blueprint & Common Traps', start: 194, desc: 'Optimal 35-Verbal + 25-Quantitative pacing plan, two-pass triage strategy, and high-yield EUEE checklists.' }
      ]
    }
  ],

  'book-12-soc-sat': [
    {
      unit_num: 1,
      title: 'Advanced EUEE Verbal Aptitude: Analogies, Synonyms, Antonyms & Precision Lexicon',
      start_page: 1,
      end_page: 36,
      topics: [
        { num: '1.1', title: 'Nine Core EUEE Analogy Bridges (Function, Degree, Part-Whole, Cause-Effect, Worker-Tool)', start: 2, desc: 'Constructing diagnostic bridge sentences and avoiding reversed-order and part-of-speech traps.' },
        { num: '1.2', title: 'High-Frequency EUEE Vocabulary, Roots, Prefixes, Synonyms & Antonyms', start: 14, desc: 'Greek/Latin roots (bene, mal, omni, equi, ver), contextual synonym precision, and polarity contrast.' },
        { num: '1.3', title: 'Double-Blank Sentence Completion & Discourse Transition Signals', start: 26, desc: 'Contrast triggers (albeit, notwithstanding, whereas), cause-effect linkers, and two-blank elimination.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Advanced Reading Comprehension & Scientific/Social Passage Synthesis',
      start_page: 37,
      end_page: 72,
      topics: [
        { num: '2.1', title: 'Analyzing Natural Science, Economics & Humanities EUEE Passages', start: 38, desc: 'Structural mapping of thesis statements, experimental evidence, counter-theories, and author synthesis.' },
        { num: '2.2', title: 'Strengthening/Weakening Arguments, Necessary vs. Sufficient Assumptions', start: 50, desc: 'Negation test for necessary assumptions, causal link validation, and identifying alternate explanations.' },
        { num: '2.3', title: 'Evaluating Paradoxes, Counterarguments & Author Perspective', start: 62, desc: 'Resolving apparent discrepancies, tone spectrum analysis, and eliminating extreme/out-of-scope distractors.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Formal Logic, Analytical Games & Deductive Reasoning',
      start_page: 73,
      end_page: 108,
      topics: [
        { num: '3.1', title: 'Propositional Logic, Contrapositives & Quantifiers', start: 74, desc: 'Conditional rule If P then Q ⇔ If not Q then not P, Converse/Inverse fallacies, and De Morgan laws.' },
        { num: '3.2', title: 'Multi-Variable Grouping, Matrix Logic & Selection Constraint Puzzles', start: 86, desc: 'In/Out selection grids, biconditional blocks, and rapid deduction chains for EUEE analytical games.' },
        { num: '3.3', title: 'Venn Diagram Set Logic, Syllogistic Validity & Family Tree Deductions', start: 98, desc: 'Three-set inclusion-exclusion n(A ∪ B ∪ C), categorical syllogisms, and multi-generation kinship puzzles.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Advanced Quantitative Reasoning: Algebraic Modeling & Word Problems',
      start_page: 109,
      end_page: 144,
      topics: [
        { num: '4.1', title: 'Quantitative Comparison Strategies (Equal/Not-Equal Plug-In Method)', start: 110, desc: 'Testing boundary numbers (0, 1, −1, 1/2, 2, 100) to compare Quantity A and Quantity B rapidly.' },
        { num: '4.2', title: 'Multi-Worker Rate Problems, Relative Velocity & Age Equations', start: 122, desc: 'Pipes and cisterns, opposite/same-direction relative speeds, boat-stream equations, and age shift matrices.' },
        { num: '4.3', title: 'Inequalities, Absolute Value, Exponents, Radicals & Function Models', start: 134, desc: 'Sign-reversal rules, compound inequalities, fractional exponents, and custom symbol operator functions.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Geometry, Combinatorics, Probability & Statistics for SAT',
      start_page: 145,
      end_page: 176,
      topics: [
        { num: '5.1', title: 'Plane & Coordinate Geometry Shortcuts (Triangles, Circles, Polygons, Slopes)', start: 146, desc: 'Pythagorean triples (3-4-5, 5-12-13), 30°-60°-90° and 45°-45°-90° triangles, arc/sector formulas, and slopes.' },
        { num: '5.2', title: 'Permutations, Combinations, Conditional Probability & Expected Value', start: 156, desc: 'Committee selection with restrictions, complementary probability 1 − P(none), and conditional tree diagrams.' },
        { num: '5.3', title: 'Statistics: Weighted Averages, Median, Quartiles, Variance & Standard Deviation', start: 166, desc: 'Effect of adding/multiplying a constant on mean and standard deviation, and balancing lever averages.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Data Sufficiency, Multi-Chart Interpretation & Full EUEE SAT Blueprint',
      start_page: 177,
      end_page: 200,
      topics: [
        { num: '6.1', title: 'Multi-Source Data Interpretation (Combined Pie Charts, Stacked Bars & Growth Tables)', start: 178, desc: 'Synthesizing ratios across linked charts, compound annual growth rates, and visual estimation shortcuts.' },
        { num: '6.2', title: 'Data Sufficiency Decision Tree (AD/BCE Elimination Grid)', start: 186, desc: 'Evaluating Statement (1) alone, Statement (2) alone, combined sufficiency, and avoiding C-trap assumptions.' },
        { num: '6.3', title: '60-Question / 120-Minute EUEE SAT Time-Management Blueprint & Common Traps', start: 194, desc: 'Optimal 35-Verbal + 25-Quantitative pacing plan, two-pass triage strategy, and high-yield EUEE checklists.' }
      ]
    }
  ],

  // === GRADE 12 SOCIAL SCIENCE: AGRICULTURE ===
  'book-12-soc-agri': [
    {
      unit_num: 1,
      title: 'Vegetable, Fruit, and Root Crop Production (Horticulture)',
      start_page: 1,
      end_page: 34,
      topics: [
        { num: '1.1', title: 'Principles of Horticultural Crop Production and Site Selection in Ethiopia', start: 2, desc: 'Climatic and edaphic requirements for vegetables, fruits, and root/tuber crops across Ethiopian agro-ecologies.' },
        { num: '1.2', title: 'Nursery Establishment, Propagation, Grafting, and Transplanting', start: 12, desc: 'Seedbed preparation, sexual vs asexual propagation (cuttings, budding, grafting, tissue culture), and hardening off.' },
        { num: '1.3', title: 'Post-Harvest Handling, Cold Chain Storage, and Value Addition', start: 24, desc: 'Physiological maturity vs commercial ripeness, precooling, grading, packaging, and minimizing post-harvest loss.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Coffee, Tea, Spices, and Stimulant Crop Agronomy',
      start_page: 35,
      end_page: 68,
      topics: [
        { num: '2.1', title: 'Coffee (Coffea arabica) Genetic Diversity, Ecology, and Shade Management', start: 36, desc: 'Forest, semi-forest, garden, and plantation coffee systems; pruning, stumping, and Coffee Berry Disease (CBD) control.' },
        { num: '2.2', title: 'Coffee Processing (Washed vs. Sun-Dried), Cupping Quality, and ECX Grading', start: 48, desc: 'Wet pulping, fermentation, parchment drying on raised beds, dry hulling, and specialty export traceability.' },
        { num: '2.3', title: 'Agronomy of Tea, Korarima, Ginger, Turmeric, and Black Cumin', start: 58, desc: 'Acidic highland soils for Camellia sinensis (Wushwush, Gumaro), rhizome curing, and essential oil extraction.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Ruminant, Camel, and Equine Production & Health Management',
      start_page: 69,
      end_page: 104,
      topics: [
        { num: '3.1', title: 'Dairy and Beef Cattle Genetic Improvement, Feedlot Fattening, and Ration Formulation', start: 70, desc: 'Indigenous Boran, Fogera, Horro, and Begait breeds; exotic Holstein-Friesian crossbreeding and Pearson Square rations.' },
        { num: '3.2', title: 'Camel and Equine Husbandry in Ethiopian Arid and Highland Agro-Ecologies', start: 82, desc: 'Physiological drought adaptations of dromedary camels, milk production, and draft animal welfare.' },
        { num: '3.3', title: 'Major Transboundary Animal Diseases, Biosecurity, Vaccination, and Veterinary Care', start: 94, desc: 'Foot-and-mouth disease (FMD), anthrax, blackleg, CBPP, trypanosomiasis (tsetse vector), and quarantine protocols.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Poultry, Fishery, Aquaculture, and Sericulture',
      start_page: 105,
      end_page: 136,
      topics: [
        { num: '4.1', title: 'Commercial Layer and Broiler Poultry Housing, Hatchery, and Biosecurity', start: 106, desc: 'Deep litter vs cage systems, incubation temperature (37.5°C) and humidity, brooding, and Newcastle disease vaccination.' },
        { num: '4.2', title: 'Capture Fisheries and Aquaculture in Ethiopian Lakes and Reservoirs', start: 118, desc: 'Nile tilapia (Oreochromis niloticus), African catfish, pond fertilization, dissolved oxygen management, and sustainable catch.' },
        { num: '4.3', title: 'Modern Apiculture (Beekeeping) and Silk Production (Sericulture)', start: 128, desc: 'Transitional Kenya Top Bar and modern Zander frame hives, queen rearing, mulberry/castor silkworm rearing, and cocoon reeling.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Climate-Smart Agriculture, Agroforestry, and Mechanization',
      start_page: 137,
      end_page: 168,
      topics: [
        { num: '5.1', title: 'Climate Change Adaptation, Conservation Agriculture, and Green Legacy Agroforestry', start: 138, desc: 'Minimum tillage, permanent organic mulch cover, alley cropping with Faidherbia albida, and carbon sequestration.' },
        { num: '5.2', title: 'Precision Irrigation Systems (Drip, Sprinkler), Water Harvesting, and Soil Salinity', start: 150, desc: 'Water-use efficiency calculations, leaching requirement for saline Rift Valley soils, and night-storage reservoirs.' },
        { num: '5.3', title: 'Farm Mechanization, Renewable Bioenergy (Biogas), and Digital Agriculture', start: 160, desc: 'Tractor implements, combine harvesters, anaerobic digestion of animal manure (CH4 biogas + bioslurry), and satellite advisories.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Agribusiness Management, Agricultural Marketing, and Food Security',
      start_page: 169,
      end_page: 195,
      topics: [
        { num: '6.1', title: 'Farm Records, Cost-Benefit Analysis, Depreciation, and Farm Budgeting', start: 170, desc: 'Fixed vs variable farm costs, gross margin analysis, break-even yield, straight-line depreciation, and balance sheets.' },
        { num: '6.2', title: 'Agricultural Value Chains, Cooperatives, Commodity Exchanges (ECX), and Export Trade', start: 180, desc: 'Producer-processor-exporter linkages, warehouse receipt systems, cooperative bargaining power, and sanitary standards.' },
        { num: '6.3', title: 'National Food Security Policies, Nutrition-Sensitive Agriculture, and Entrepreneurship', start: 188, desc: 'Four pillars of food security (availability, access, utilization, stability), biofortified crops, and youth agribusiness.' }
      ]
    }
  ],

  // === GRADE 11 INFORMATION TECHNOLOGY (IT) ===
  'book-11-nat-it': [
    {
      unit_num: 1,
      title: 'Information Systems and Their Applications',
      start_page: 1,
      end_page: 30,
      topics: [
        { num: '1.1', title: 'Data, Information, Knowledge, and Wisdom Hierarchy (DIKW)', start: 2, desc: 'Transforming raw facts into contextualized information, actionable knowledge, and strategic wisdom.' },
        { num: '1.2', title: 'Components and Types of Information Systems (TPS, MIS, DSS, EIS)', start: 12, desc: 'Hardware, software, data, procedures, and people; operational vs tactical vs strategic enterprise systems.' },
        { num: '1.3', title: 'E-Government, E-Commerce, E-Banking (Telebirr/CBE), and E-Learning in Ethiopia', start: 22, desc: 'Digital public service portals, B2B/B2C/G2C models, mobile money architecture, and national digital transformation.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Emerging Technologies and Artificial Intelligence',
      start_page: 31,
      end_page: 60,
      topics: [
        { num: '2.1', title: 'Artificial Intelligence (AI), Machine Learning, Deep Learning, and NLP', start: 32, desc: 'Supervised, unsupervised, and reinforcement learning; neural networks, computer vision, and Amharic/local NLP.' },
        { num: '2.2', title: 'Augmented Reality (AR), Virtual Reality (VR), IoT, and Robotics', start: 44, desc: 'Sensor-actuator IoT loops, smart agriculture sensors, industrial robotics, and immersive simulation systems.' },
        { num: '2.3', title: 'Data Science, Big Data Analytics (5 Vs), Cloud Computing, and AI Ethics', start: 52, desc: 'Volume, Velocity, Variety, Veracity, Value; IaaS/PaaS/SaaS cloud models, and algorithmic fairness.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Database Management Systems and Data Modeling',
      start_page: 61,
      end_page: 95,
      topics: [
        { num: '3.1', title: 'Relational Database Model, Schemas, Keys, and Integrity Constraints', start: 62, desc: 'Relations, tuples, attributes, primary/foreign/candidate/composite keys, entity integrity, and referential integrity.' },
        { num: '3.2', title: 'Entity-Relationship Diagrams (ERD) and Database Normalization (1NF, 2NF, 3NF)', start: 74, desc: 'Cardinality ratios (1:1, 1:M, M:N), eliminating repeating groups, partial dependencies, and transitive dependencies.' },
        { num: '3.3', title: 'SQL DDL and DML Queries (CREATE, ALTER, SELECT, JOIN, GROUP BY)', start: 86, desc: 'Creating relational tables with constraints, filtering with WHERE/ORDER BY, aggregate functions, and inner joins.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Web Authoring and Front-End Development',
      start_page: 96,
      end_page: 130,
      topics: [
        { num: '4.1', title: 'Website Planning, UI/UX Wireframing, and HTML5 Semantic Architecture', start: 97, desc: 'Site maps, accessibility standards, semantic tags, multimedia embedding, and structured HTML5 forms.' },
        { num: '4.2', title: 'Advanced CSS3 Layouts (Box Model, Flexbox, Grid, Media Queries)', start: 110, desc: 'Specificity cascade, responsive breakpoints, flexible box alignment, and two-dimensional grid templates.' },
        { num: '4.3', title: 'JavaScript Programming: Variables, Functions, DOM Events, and Form Validation', start: 120, desc: 'Document Object Model selection, event listeners, client-side input validation, and dynamic UI updates.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Hardware Maintenance and Preventive Troubleshooting',
      start_page: 131,
      end_page: 152,
      topics: [
        { num: '5.1', title: 'PC Assembly, POST Diagnostics, BIOS/UEFI Configuration, and ESD Safety', start: 132, desc: 'Electrostatic discharge grounding, motherboard form factors, beep codes, thermal paste, and boot order setup.' },
        { num: '5.2', title: 'Preventive Maintenance, Disk Partitioning, System Backup, and Recovery', start: 142, desc: 'UPS power protection, S.M.A.R.T. disk diagnostics, full/incremental/differential backups, and system restore.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Python Programming and Algorithmic Problem Solving',
      start_page: 153,
      end_page: 170,
      topics: [
        { num: '6.1', title: 'Python Data Structures: Lists, Tuples, Dictionaries, and String Manipulation', start: 154, desc: 'Zero-based indexing, slicing, mutable lists vs immutable tuples, key-value dictionaries, and string methods.' },
        { num: '6.2', title: 'Modular Functions, Scope, File Input/Output, and Exception Handling', start: 162, desc: 'Defining reusable functions, local vs global scope, reading/writing text and CSV files, and try-except blocks.' }
      ]
    }
  ],

  'book-11-soc-it': [
    {
      unit_num: 1,
      title: 'Information Systems and Their Applications',
      start_page: 1,
      end_page: 30,
      topics: [
        { num: '1.1', title: 'Data, Information, Knowledge, and Wisdom Hierarchy (DIKW)', start: 2, desc: 'Transforming raw facts into contextualized information, actionable knowledge, and strategic wisdom.' },
        { num: '1.2', title: 'Components and Types of Information Systems (TPS, MIS, DSS, EIS)', start: 12, desc: 'Hardware, software, data, procedures, and people; operational vs tactical vs strategic enterprise systems.' },
        { num: '1.3', title: 'E-Government, E-Commerce, E-Banking (Telebirr/CBE), and E-Learning in Ethiopia', start: 22, desc: 'Digital public service portals, B2B/B2C/G2C models, mobile money architecture, and national digital transformation.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Emerging Technologies and Artificial Intelligence',
      start_page: 31,
      end_page: 60,
      topics: [
        { num: '2.1', title: 'Artificial Intelligence (AI), Machine Learning, Deep Learning, and NLP', start: 32, desc: 'Supervised, unsupervised, and reinforcement learning; neural networks, computer vision, and Amharic/local NLP.' },
        { num: '2.2', title: 'Augmented Reality (AR), Virtual Reality (VR), IoT, and Robotics', start: 44, desc: 'Sensor-actuator IoT loops, smart agriculture sensors, industrial robotics, and immersive simulation systems.' },
        { num: '2.3', title: 'Data Science, Big Data Analytics (5 Vs), Cloud Computing, and AI Ethics', start: 52, desc: 'Volume, Velocity, Variety, Veracity, Value; IaaS/PaaS/SaaS cloud models, and algorithmic fairness.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Database Management Systems and Data Modeling',
      start_page: 61,
      end_page: 95,
      topics: [
        { num: '3.1', title: 'Relational Database Model, Schemas, Keys, and Integrity Constraints', start: 62, desc: 'Relations, tuples, attributes, primary/foreign/candidate/composite keys, entity integrity, and referential integrity.' },
        { num: '3.2', title: 'Entity-Relationship Diagrams (ERD) and Database Normalization (1NF, 2NF, 3NF)', start: 74, desc: 'Cardinality ratios (1:1, 1:M, M:N), eliminating repeating groups, partial dependencies, and transitive dependencies.' },
        { num: '3.3', title: 'SQL DDL and DML Queries (CREATE, ALTER, SELECT, JOIN, GROUP BY)', start: 86, desc: 'Creating relational tables with constraints, filtering with WHERE/ORDER BY, aggregate functions, and inner joins.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Web Authoring and Front-End Development',
      start_page: 96,
      end_page: 130,
      topics: [
        { num: '4.1', title: 'Website Planning, UI/UX Wireframing, and HTML5 Semantic Architecture', start: 97, desc: 'Site maps, accessibility standards, semantic tags, multimedia embedding, and structured HTML5 forms.' },
        { num: '4.2', title: 'Advanced CSS3 Layouts (Box Model, Flexbox, Grid, Media Queries)', start: 110, desc: 'Specificity cascade, responsive breakpoints, flexible box alignment, and two-dimensional grid templates.' },
        { num: '4.3', title: 'JavaScript Programming: Variables, Functions, DOM Events, and Form Validation', start: 120, desc: 'Document Object Model selection, event listeners, client-side input validation, and dynamic UI updates.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Hardware Maintenance and Preventive Troubleshooting',
      start_page: 131,
      end_page: 152,
      topics: [
        { num: '5.1', title: 'PC Assembly, POST Diagnostics, BIOS/UEFI Configuration, and ESD Safety', start: 132, desc: 'Electrostatic discharge grounding, motherboard form factors, beep codes, thermal paste, and boot order setup.' },
        { num: '5.2', title: 'Preventive Maintenance, Disk Partitioning, System Backup, and Recovery', start: 142, desc: 'UPS power protection, S.M.A.R.T. disk diagnostics, full/incremental/differential backups, and system restore.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Python Programming and Algorithmic Problem Solving',
      start_page: 153,
      end_page: 170,
      topics: [
        { num: '6.1', title: 'Python Data Structures: Lists, Tuples, Dictionaries, and String Manipulation', start: 154, desc: 'Zero-based indexing, slicing, mutable lists vs immutable tuples, key-value dictionaries, and string methods.' },
        { num: '6.2', title: 'Modular Functions, Scope, File Input/Output, and Exception Handling', start: 162, desc: 'Defining reusable functions, local vs global scope, reading/writing text and CSV files, and try-except blocks.' }
      ]
    }
  ],

  // === GRADE 12 INFORMATION TECHNOLOGY (IT) ===
  'book-12-nat-it': [
    {
      unit_num: 1,
      title: 'Information Systems Project Management & System Analysis',
      start_page: 1,
      end_page: 34,
      topics: [
        { num: '1.1', title: 'Software Development Life Cycle (SDLC): Waterfall, Agile, and Scrum Models', start: 2, desc: 'Phases of SDLC, iterative sprints, product backlogs, daily standups, and choosing appropriate methodologies.' },
        { num: '1.2', title: 'Requirements Engineering, Feasibility Analysis, and System Design (UML/DFD)', start: 14, desc: 'Functional vs non-functional requirements, technical/economic/operational feasibility, Data Flow Diagrams, and Use Cases.' },
        { num: '1.3', title: 'Software Testing, Deployment, Maintenance, and Documentation', start: 26, desc: 'Unit, integration, system, and user acceptance testing (UAT); direct, parallel, pilot, and phased deployment.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Advanced Computer Networking & Telecommunications',
      start_page: 35,
      end_page: 70,
      topics: [
        { num: '2.1', title: 'IPv4 Subnetting, CIDR Notation, IPv6 Addressing, and Routing Protocols', start: 36, desc: 'Classes of IPv4, subnet masks, calculating usable hosts (2^n - 2), static vs dynamic routing (OSPF, BGP), and 128-bit IPv6.' },
        { num: '2.2', title: 'Network Services: DHCP, DNS, NAT, VPNs, and Enterprise Switching (VLANs)', start: 48, desc: 'DORA IP lease process, hierarchical DNS resolution, private-to-public NAT translation, and virtual LAN segmentation.' },
        { num: '2.3', title: 'Network Troubleshooting Commands and Infrastructure Security', start: 60, desc: 'Diagnostic utilities (ping, tracert, ipconfig, nslookup, netstat), firewall ACLs, IDS/IPS, and WPA3 wireless security.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Advanced Database Systems & Transaction Management',
      start_page: 71,
      end_page: 104,
      topics: [
        { num: '3.1', title: 'Multi-Table SQL Joins (INNER, LEFT, RIGHT, FULL), Subqueries, and Views', start: 72, desc: 'Relational algebra joins, correlated vs uncorrelated subqueries, HAVING clauses, and virtual database views.' },
        { num: '3.2', title: 'Database Transactions, ACID Properties, Concurrency Control, and Recovery', start: 84, desc: 'Atomicity, Consistency, Isolation, Durability; COMMIT/ROLLBACK, two-phase locking, deadlock prevention, and write-ahead logs.' },
        { num: '3.3', title: 'Database Security, Role-Based Access Control (GRANT/REVOKE), and NoSQL', start: 96, desc: 'Principle of least privilege, SQL injection prevention via parameterized queries, and document/key-value/graph NoSQL databases.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Dynamic Web Application Development',
      start_page: 105,
      end_page: 138,
      topics: [
        { num: '4.1', title: 'Client-Server Architecture, HTTP Methods (GET, POST, PUT, DELETE), and REST APIs', start: 106, desc: 'Three-tier web architecture, HTTP status codes (200, 201, 400, 401, 403, 404, 500), and stateless RESTful endpoints.' },
        { num: '4.2', title: 'Asynchronous JavaScript (Promises, Async/Await, Fetch API) and JSON', start: 118, desc: 'Non-blocking event loop, fetching JSON payloads, updating DOM state dynamically, and local storage persistence.' },
        { num: '4.3', title: 'Web Application Security (XSS, CSRF, Authentication, and HTTPS/TLS)', start: 130, desc: 'Input sanitization, password hashing with salt (bcrypt), JWT session tokens, and TLS certificate encryption.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Object-Oriented Programming & Data Structures in Python',
      start_page: 139,
      end_page: 172,
      topics: [
        { num: '5.1', title: 'Classes, Objects, Constructors (__init__), Encapsulation, Inheritance, and Polymorphism', start: 140, desc: 'Modeling real-world entities with attributes and methods, superclass/subclass inheritance, and method overriding.' },
        { num: '5.2', title: 'Searching and Sorting Algorithms (Linear, Binary Search, Bubble/Merge Sort) & Big-O', start: 154, desc: 'Time and space complexity analysis O(1), O(log n), O(n), O(n log n), O(n²); trace tables for sorting and binary search.' },
        { num: '5.3', title: 'Data Analysis and Visualization Fundamentals in Python', start: 164, desc: 'Processing structured datasets, computing summary statistics, and plotting analytical charts.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Cybersecurity, Digital Forensics & IT Entrepreneurship',
      start_page: 173,
      end_page: 200,
      topics: [
        { num: '6.1', title: 'Cryptographic Protocols (Symmetric AES, Asymmetric RSA, SHA Hashing, Digital Signatures)', start: 174, desc: 'Confidentiality, integrity, authentication, and non-repudiation using public-key infrastructure (PKI).' },
        { num: '6.2', title: 'Ethical Hacking, Penetration Testing Phases, and Incident Response', start: 184, desc: 'Reconnaissance, scanning, vulnerability assessment, patching, digital evidence preservation, and Ethiopia INSA standards.' },
        { num: '6.3', title: 'Tech Startups, Intellectual Property, and Digital Economy Opportunities in Ethiopia', start: 192, desc: 'Software licensing (Open Source MIT/GPL vs Proprietary), MVP product validation, fintech, and Digital Ethiopia 2025.' }
      ]
    }
  ],

  // === GRADE 12 SOCIAL SCIENCE: ECONOMICS ===
  'book-12-soc-econ': [
    {
      unit_num: 1,
      title: 'Macroeconomic Aggregates and National Income Accounting',
      start_page: 1,
      end_page: 35,
      topics: [
        { num: '1.1', title: 'Scope of Macroeconomics, Circular Flow of Income, and Macroeconomic Goals', start: 2, desc: 'Four-sector circular flow model (households, firms, government, foreign sector), injections vs leakages.' },
        { num: '1.2', title: 'Measuring GDP and GNP: Product, Income, and Expenditure Approaches', start: 14, desc: 'GDP = C + I + G + (X - M), Value-Added method avoiding double counting, GNP = GDP + NFIA, NDP, NI, PI, and DI.' },
        { num: '1.3', title: 'Nominal vs. Real GDP, GDP Deflator, CPI, and Business Cycles', start: 26, desc: 'GDP Deflator = (Nominal GDP / Real GDP) × 100, Consumer Price Index inflation rate, expansion, peak, recession, trough.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Aggregate Demand, Aggregate Supply, and Macroeconomic Schools',
      start_page: 36,
      end_page: 70,
      topics: [
        { num: '2.1', title: 'Aggregate Demand (AD) Curve: Wealth, Interest Rate, and Exchange Rate Effects', start: 37, desc: 'Downward slope of AD (Pigou real-balance effect, Keynes interest-rate effect, Mundell-Fleming net-export effect) and shifts.' },
        { num: '2.2', title: 'Short-Run (SRAS) and Long-Run Aggregate Supply (LRAS) and Equilibrium', start: 50, desc: 'Sticky-wage and misperception theories of SRAS, vertical LRAS at potential output Y*, recessionary vs inflationary gaps.' },
        { num: '2.3', title: 'Classical, Keynesian, Monetarist, New Classical, and New Keynesian Schools', start: 60, desc: 'Say’s Law vs Keynesian effective demand, Friedman’s Quantity Theory MV = PY, rational expectations, and policy debates.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Market Failure, Externalities, Public Goods, and Consumer Protection',
      start_page: 71,
      end_page: 104,
      topics: [
        { num: '3.1', title: 'Causes of Market Failure: Positive and Negative Externalities & Coase Theorem', start: 72, desc: 'Divergence between Marginal Private Cost (MPC) and Marginal Social Cost (MSC), Pigouvian taxes, subsidies, and property rights.' },
        { num: '3.2', title: 'Public Goods (Non-Rivalry, Non-Excludability), Common Resources & Asymmetric Info', start: 84, desc: 'Pure public goods vs common-pool resources (Tragedy of the Commons), free-rider problem, adverse selection, and moral hazard.' },
        { num: '3.3', title: 'Consumer Protection Laws, Competition Policy, and Environmental Valuation', start: 96, desc: 'Rights and responsibilities of consumers in Ethiopia, anti-hoarding/price-gouging laws, and sustainable green accounting.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Macroeconomic Policy Instruments: Fiscal, Monetary, and Income Policies',
      start_page: 105,
      end_page: 140,
      topics: [
        { num: '4.1', title: 'Fiscal Policy: Government Spending, Taxation, and Multiplier Formulas', start: 106, desc: 'Expansionary vs contractionary fiscal policy, spending multiplier k_G = 1/(1 - MPC), tax multiplier k_T = -MPC/(1 - MPC), crowding out.' },
        { num: '4.2', title: 'Monetary Policy: Central Banking (NBE), Reserve Ratio, OMO, and Discount Rate', start: 120, desc: 'Money multiplier m = 1/rr, Open Market Operations, required reserve ratio, policy rate, and controlling money supply.' },
        { num: '4.3', title: 'Unemployment Types (Frictional, Structural, Cyclical), Inflation & Phillips Curve', start: 132, desc: 'Natural rate of unemployment (NRU), Okun’s Law, demand-pull vs cost-push inflation, and short-run vs long-run Phillips Curve.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Tax Theory, Public Finance, and Taxation in Ethiopia',
      start_page: 141,
      end_page: 170,
      topics: [
        { num: '5.1', title: 'Principles of Taxation, Tax Incidence, and Progressive/Regressive/Proportional Taxes', start: 142, desc: 'Adam Smith’s canons (equity, certainty, convenience, economy), ability-to-pay vs benefit principle, and Laffer curve.' },
        { num: '5.2', title: 'Direct Taxes (Schedules A, B, C, D) and Indirect Taxes (VAT, TOT, Excise, Customs)', start: 154, desc: 'Ethiopian employment income tax brackets (Schedule A), rental/business profit tax, 15% VAT, Turnover Tax, and customs duties.' },
        { num: '5.3', title: 'Fiscal Federalism, Government Budget Deficits, and Public Debt Management', start: 164, desc: 'Federal vs regional revenue-sharing formulas in Ethiopia, recurrent vs capital expenditure, and debt sustainability.' }
      ]
    },
    {
      unit_num: 6,
      title: 'International Trade, Balance of Payments, and Economic Development of Ethiopia',
      start_page: 171,
      end_page: 200,
      topics: [
        { num: '6.1', title: 'Absolute and Comparative Advantage (Ricardian & Heckscher-Ohlin) and Trade Policy', start: 172, desc: 'Opportunity cost calculations for comparative advantage, terms of trade, tariffs, quotas, and export promotion vs import substitution.' },
        { num: '6.2', title: 'Balance of Payments (Current, Capital & Financial Accounts) and Exchange Rates', start: 182, desc: 'Trade balance, remittances, FDI, fixed vs floating/market-based exchange rate regimes (devaluation vs depreciation).' },
        { num: '6.3', title: 'Poverty Measurement, Inequality (Lorenz Curve & Gini), and Ethiopian Reforms', start: 192, desc: 'Headcount poverty index, Gini coefficient (0 to 1), HDI, and Ethiopia’s Homegrown Economic Reform (HGER) & Ten-Year Development Plan.' }
      ]
    }
  ],

  // === GRADE 12 SOCIAL SCIENCE: GEOGRAPHY ===
  'book-12-soc-geog': [
    {
      unit_num: 1,
      title: 'Geological Processes, Plate Tectonics, and Landform Evolution',
      start_page: 1,
      end_page: 35,
      topics: [
        { num: '1.1', title: 'Continental Drift (Wegener) and Plate Tectonics Theory', start: 2, desc: 'Pangaea evidence (jigsaw fit, Mesosaurus fossils, paleoclimatic tillites, sea-floor spreading) and divergent/convergent/transform boundaries.' },
        { num: '1.2', title: 'Endogenic Forces: Folding, Faulting, Rift Valley Formation, Volcanism & Earthquakes', start: 14, desc: 'Anticlines/synclines, normal/reverse/strike-slip faults, Horst and Graben (East African Rift), seismic P/S/Surface waves, Richter & Mercalli scales.' },
        { num: '1.3', title: 'Exogenic Processes: Weathering, Mass Wasting, Fluvial, Aeolian & Coastal Landforms', start: 26, desc: 'Physical (exfoliation, frost action) and chemical weathering (hydrolysis, carbonation), meanders, oxbow lakes, deltas, barchans, and wave cliffs.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Global Climate Change, Atmospheric Circulation, and Adaptation',
      start_page: 36,
      end_page: 70,
      topics: [
        { num: '2.1', title: 'Global Atmospheric Circulation (Hadley, Ferrel, Polar Cells), Jet Streams & ENSO', start: 37, desc: 'ITCZ seasonal migration, Coriolis deflection, Trade Winds, Westerlies, El Niño / La Niña teleconnections with Ethiopian Kiremt/Belg rains.' },
        { num: '2.2', title: 'Natural (Milankovitch Cycles, Solar, Volcanic) vs. Anthropogenic Climate Drivers', start: 50, desc: 'Orbital eccentricity, axial tilt (obliquity), precession, radiative forcing of CO2/CH4/N2O, and positive albedo feedbacks.' },
        { num: '2.3', title: 'International Climate Governance (Kyoto, Paris Agreement) and Ethiopia’s CRGE Strategy', start: 60, desc: 'IPCC assessments, Nationally Determined Contributions (NDCs), carbon markets, and Ethiopia’s Climate-Resilient Green Economy pillars.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Population Theories, Resource Nexus, and Sustainable Development',
      start_page: 71,
      end_page: 104,
      topics: [
        { num: '3.1', title: 'Population Theories: Malthusian, Neo-Malthusian, Boserupian, and Marxist Perspectives', start: 72, desc: 'Geometric population growth vs arithmetic food growth, preventive/positive checks, Ester Boserup’s agricultural intensification, and demographic dividend.' },
        { num: '3.2', title: 'Carrying Capacity, Ecological Footprint, Water-Energy-Food Nexus & Population Policy', start: 84, desc: 'Demographic measures (TFR, CBR, CDR, Doubling Time = 70/r), anti-natalist vs pro-natalist policies, and Ethiopia’s National Population Policy.' },
        { num: '3.3', title: 'Dimensions of Sustainable Development (UN SDGs) and Green Growth Indicators', start: 96, desc: 'Balancing economic growth, social equity, and environmental stewardship; circular economy and renewable resource thresholds.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Economic Globalization, Regional Integration, and Geopolitics',
      start_page: 105,
      end_page: 140,
      topics: [
        { num: '4.1', title: 'Theories of Economic Development (Rostow’s 5 Stages, Dependency, World-Systems)', start: 106, desc: 'Rostow’s linear modernization stages, core-semiperiphery-periphery unequal exchange (Wallerstein), and structural transformation.' },
        { num: '4.2', title: 'Globalization, Multinational Corporations, Bretton Woods (IMF/World Bank/WTO) & AfCFTA', start: 120, desc: 'Global supply chains, Foreign Direct Investment, African Continental Free Trade Area, and regional economic blocs (IGAD, COMESA, EAC).' },
        { num: '4.3', title: 'Hydropolitics of the Nile Basin, Red Sea Geopolitics, and Strategic Corridors', start: 132, desc: 'Abay (Blue Nile) 86% water contribution, Cooperative Framework Agreement (CFA), GERD energy diplomacy, and Horn of Africa port logistics.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Environmental Challenges, Indigenous Stewardship, and Disaster Management',
      start_page: 141,
      end_page: 170,
      topics: [
        { num: '5.1', title: 'Biodiversity Loss, Desertification, Transboundary Pollution, and Environmental Ethics', start: 142, desc: 'Anthropocentrism vs ecocentrism, Sahel/Horn desertification drivers, wetland degradation, and invasive species (Prosopis juliflora, water hyacinth).' },
        { num: '5.2', title: 'Indigenous Environmental Knowledge Systems in Ethiopia (Konso, Gedeo, Borana)', start: 154, desc: 'UNESCO-registered Konso stone terraces, Gedeo multi-story agroforestry, and Borana Gadaa traditional deep-well (Tula) water governance.' },
        { num: '5.3', title: 'Hazard Mapping, Vulnerability Assessment, and Disaster Risk Reduction (Sendai Framework)', start: 164, desc: 'Risk equation Risk = (Hazard × Vulnerability) / Capacity; drought/flood early warning systems and community resilience.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Geographic Research Methodology, GIS, and Quantitative Map Skills',
      start_page: 171,
      end_page: 200,
      topics: [
        { num: '6.1', title: 'Geographic Research Design: Hypothesis Testing, Sampling Methods & Fieldwork', start: 172, desc: 'Probability sampling (simple random, stratified, systematic, cluster) vs non-probability sampling, correlation r, and research ethics.' },
        { num: '6.2', title: 'Quantitative Cartography: Gradient, Vertical Exaggeration, Intervisibility & Thematic Maps', start: 182, desc: 'Gradient = VI / HE, Vertical Exaggeration = Vertical Scale / Horizontal Scale, choropleth, isopleth, dot-density, and flow-line maps.' },
        { num: '6.3', title: 'Geographic Information Systems (GIS) Spatial Analysis and Remote Sensing', start: 192, desc: 'Vector (point, line, polygon) vs Raster grid models, spatial buffering, overlay analysis, and NDVI vegetation monitoring.' }
      ]
    }
  ],

  // === GRADE 12 SOCIAL SCIENCE: HISTORY ===
  'book-12-soc-hist': [
    {
      unit_num: 1,
      title: 'Development of Capitalism, Nationalism, and Imperialism (1815–1914)',
      start_page: 1,
      end_page: 35,
      topics: [
        { num: '1.1', title: 'Congress of Vienna (1815), Industrial Capitalism, Socialism, and Labor Movements', start: 2, desc: 'Metternich’s Concert of Europe, legitimacy and balance of power, Chartism, Utopian vs Scientific Socialism (Marxism), and the Paris Commune.' },
        { num: '1.2', title: 'Unification of Italy (Cavour, Garibaldi) and Germany (Bismarck’s Realpolitik)', start: 14, desc: 'Mazzini’s Young Italy, Piedmont-Sardinia diplomacy, Garibaldi’s Red Shirts, Zollverein, and Bismarck’s three wars (Denmark, Austria 1866, France 1870–71).' },
        { num: '1.3', title: 'The American Civil War (1861–65), Meiji Restoration in Japan, and the Eastern Question', start: 26, desc: 'Abraham Lincoln, Emancipation Proclamation (1863), abolition of slavery (13th Amendment), Japanese industrial modernization, and Ottoman Balkan crises.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Africa and the Colonial Experience (1880s–1960s)',
      start_page: 36,
      end_page: 70,
      topics: [
        { num: '2.1', title: 'The Scramble for Africa, Berlin Conference (1884–85), and Effective Occupation', start: 37, desc: 'King Leopold II in Congo, Fashoda Incident (1898), Articles 34 & 35 of the Berlin Act, and geometric boundary demarcation.' },
        { num: '2.2', title: 'African Anti-Colonial Resistance: Samori Ture, Ashanti, Maji-Maji, Mahdist & Urabi', start: 50, desc: 'Mandinka Empire scorched-earth tactics, Yaa Asantewaa, Kinjikitile Ngwale’s Maji-Maji uprising (1905–07), and Herero-Nama resistance.' },
        { num: '2.3', title: 'Colonial Administrative Systems (Indirect Rule, Assimilation, Settler Rule) & Economy', start: 60, desc: 'Lugard’s Dual Mandate in Nigeria, French Federation of West Africa (evolués vs indigénat), cash-crop monoculture, and forced labor.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Social, Economic, and Political Developments in Ethiopia (1855–1941)',
      start_page: 71,
      end_page: 108,
      topics: [
        { num: '3.1', title: 'Modern State Formation under Emperors Tewodros II, Yohannes IV, and Menelik II', start: 72, desc: 'Ending Zemene Mesafint, Gafat artillery, Boru Meda Council (1878), Menelik’s territorial incorporation (Chelenqo 1887, Embabo 1882), and Addis Ababa.' },
        { num: '3.2', title: 'Defending Sovereignty: Gundet, Gura, Dogali, Metemma, and the Victory of Adwa (1896)', start: 84, desc: 'Defeating Khedive Ismail’s Egyptian expeditions (1875–76), Ras Alula at Dogali (1887), Treaty of Wuchale Article XVII, and March 1, 1896 Adwa triumph.' },
        { num: '3.3', title: 'Diarchy (1916–30), 1931 Constitution, Fascist Invasion (1935–41) & Patriotic Resistance', start: 96, desc: 'Lij Iyasu, Empress Zewditu & Ras Teferi, League of Nations entry (1923), Black Lion Organization, Yekatit 12 martyrs, and May 5, 1941 Liberation.' }
      ]
    },
    {
      unit_num: 4,
      title: 'Global Wars, Totalitarianism, and the Cold War Era (1914–1991)',
      start_page: 109,
      end_page: 144,
      topics: [
        { num: '4.1', title: 'World War I (1914–18), the 1917 Russian Revolution, and the Treaty of Versailles', start: 110, desc: 'Triple Entente vs Central Powers, Schlieffen Plan, Bolshevik October Revolution, Wilson’s 14 Points, and League of Nations weaknesses.' },
        { num: '4.2', title: 'The Great Depression (1929), Rise of Fascism/Nazism, World War II, and the UN', start: 122, desc: 'Mussolini and Hitler’s aggression, Appeasement at Munich (1938), Operation Barbarossa, Pearl Harbor, Stalingrad, Hiroshima, and 1945 UN Charter.' },
        { num: '4.3', title: 'The Cold War: Truman Doctrine, Marshall Plan, NATO/Warsaw Pact, China, Korea, Vietnam & détente', start: 134, desc: 'Containment policy, Mao Zedong (1949), Ethiopian Kagnew Battalion in Korea, Cuban Missile Crisis (1962), Non-Aligned Movement, and Gorbachev’s reforms.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Imperial Consolidation, Revolution, and the Derg Regime in Ethiopia (1941–1991)',
      start_page: 145,
      end_page: 176,
      topics: [
        { num: '5.1', title: 'Post-Liberation Restoration, Anglo-Ethiopian Treaties (1942/44), Eritrea Federation & 1955 Constitution', start: 146, desc: 'Point Four Agreement with USA, UN Resolution 390-A(V) federating Eritrea (1952), Revised 1955 Constitution, and autocratic centralization.' },
        { num: '5.2', title: 'The 1960 Abortive Coup, Peasant Rebellions (Woyane, Bale, Gojjam) & Student Movement', start: 156, desc: 'Mengistu and Germame Neway (Dec 1960), First Woyane (1943), Waqo Gutu in Bale (1963–70), Gojjam tax revolt (1968), and "Land to the Tiller" slogan.' },
        { num: '5.3', title: 'The 1974 Popular Revolution, Derg Rule, 1975 Land Reform, Red Terror, 1977 War & 1991 Change', start: 166, desc: 'Creeping coup of the Derg, March 1975 rural land nationalization, Qey Shibir, Karamara victory (1978), PDRE (1987), and May 1991 fall of the Derg.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Pan-Africanism, African Decolonization, and Post-Independent Africa',
      start_page: 177,
      end_page: 200,
      topics: [
        { num: '6.1', title: 'Pan-Africanism (Du Bois, Garvey, Nkrumah), Manchester Congress (1945) & Decolonization', start: 178, desc: 'Ghana independence (1957), Year of Africa (1960), Algerian FLN war of liberation (1954–62), Mau Mau in Kenya, and Lusophone armed struggles.' },
        { num: '6.2', title: 'Casablanca vs. Monrovia Groups, Foundation of the OAU in Addis Ababa (1963) & End of Apartheid', start: 186, desc: 'Emperor Haile Selassie’s mediation in May 1963, OAU Coordinating Committee for Liberation, Nelson Mandela & ANC, and 2002 transition to the African Union.' },
        { num: '6.3', title: 'Post-Colonial Political Economy, Structural Adjustment, Regional Integration & Heritage', start: 194, desc: 'Overcoming mono-crop dependency, military coups, Cold War proxy conflicts, Agenda 2063, and safeguarding Ethiopia’s tangible and intangible UNESCO heritage.' }
      ]
    }
  ],

  // === GRADE 9 HISTORY ===
  'book-9-hist': [
    {
      unit_num: 1,
      title: 'The Discipline of History and Human Evolution',
      start_page: 1,
      end_page: 28,
      topics: [
        { num: '1.1', title: 'Meaning, Sources and Uses of History', start: 2, desc: 'Definition of history, primary vs secondary sources, oral tradition, archaeology, objectivity, and historical interpretation.' },
        { num: '1.2', title: 'Historiography and Historical Writing in Ethiopia', start: 9, desc: 'Indigenous chronicles, Ge\'ez manuscripts, European travelogues, and modern Ethiopian historical scholarship.' },
        { num: '1.3', title: 'Human Evolution and East Africa as the Cradle of Humankind', start: 16, desc: 'Hominid fossil discoveries in the Afar Rift: Australopithecus afarensis (Lucy/Dinkinesh), Ardipithecus ramidus (Ardi), and genus Homo.' },
        { num: '1.4', title: 'The Stone Age Cultures and Neolithic Revolution', start: 22, desc: 'Paleolithic stone tools (Oldowan, Acheulean), Mesolithic developments, and Neolithic agricultural domestication in the Horn.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Ancient Civilizations of the World',
      start_page: 29,
      end_page: 56,
      topics: [
        { num: '2.1', title: 'Ancient Egypt, Nubia (Kush), and Meroe', start: 30, desc: 'Nile river valley civilization, pharaonic dynasties, hieroglyphics, pyramids, Kingdom of Kush, and iron-smelting center of Meroe.' },
        { num: '2.2', title: 'Civilizations of Mesopotamia, Indus Valley, and China', start: 38, desc: 'Sumerian cuneiform, Hammurabi\'s Code, Harappan urban planning, and ancient Chinese Dynastic contributions.' },
        { num: '2.3', title: 'Classical Greece and the Roman Empire', start: 45, desc: 'Athenian democracy, Greek philosophy and architecture, Roman Republic, Pax Romana, Roman Law, and Christian adoption.' },
        { num: '2.4', title: 'Rise and Expansion of Islamic Civilization', start: 51, desc: 'Prophet Muhammad, the Quran, the Caliphates (Umayyad, Abbasid), scientific and philosophical golden age, and trade networks.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Peoples and States of Ethiopia and the Horn to the End of the 13th Century',
      start_page: 57,
      end_page: 92,
      topics: [
        { num: '3.1', title: 'Pre-Aksumite States: Da\'amat and Yeha', start: 58, desc: 'South Arabian inscriptions, Great Temple of Yeha, Da\'amat kingdom, early metallurgy, and agricultural settlements.' },
        { num: '3.2', title: 'The Aksumite Empire: Economy, Architecture, and Christianization', start: 66, desc: 'Port of Adulis, Red Sea trade, monumental stelae/obelisks, King Ezana, introduction of Christianity, and minting of coins.' },
        { num: '3.3', title: 'The Zagwe Dynasty and the Monolithic Churches of Lalibela', start: 78, desc: 'Center at Roha/Adefa, King Lalibela, 11 rock-hewn monolithic churches, religious art, and diplomatic relations.' },
        { num: '3.4', title: 'Early Muslim Sultanates of Shewa, Ifat, and Dahlak', start: 85, desc: 'Spread of Islam through Dahlak and Zeila trade routes, Makhzumi dynasty of Shewa, and Walashma dynasty of Ifat.' }
      ]
    },
    {
      unit_num: 4,
      title: 'The Middle Ages in Ethiopia and the Horn (13th to 16th Century)',
      start_page: 93,
      end_page: 128,
      topics: [
        { num: '4.1', title: 'The "Solomonic" Dynasty Restoration and Imperial Administration', start: 94, desc: 'Yekuno Amlak (1270), Kebra Nagast, mobile imperial court, royal prison of Amba Gishen, and territorial expansion under Amda Seyon.' },
        { num: '4.2', title: 'Conflicts between the Christian Highland Kingdom and Muslim Sultanates', start: 104, desc: 'Trade route rivalries between the central highlands and coastal sultanates (Ifat, Adal), and religious literature developments.' },
        { num: '4.3', title: 'The Wars of Imam Ahmad Ibn Ibrahim al-Ghazi (Ahmad Gran)', start: 114, desc: 'Causes of the conflict, Battle of Shimbra Kure (1529), conquest of the highlands, and transformation of Horn geopolitics.' },
        { num: '4.4', title: 'Portuguese and Ottoman Intervention in the Horn', start: 122, desc: 'Arrival of Christopher da Gama, Ottoman military assistance to Adal, Battle of Wayna Daga (1543), and Jesuit missionary presence.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Peoples and States of Ethiopia and the Horn (16th to Mid-19th Century)',
      start_page: 129,
      end_page: 160,
      topics: [
        { num: '5.1', title: 'The Oromo Population Movement and the Gadaa System', start: 130, desc: 'Causes and directions of the movement, Gadaa socio-political democratic institution, Gadaa grades (Luuba), and integration mechanisms (Moggasa, Guddifacha).' },
        { num: '5.2', title: 'The Gondarine Period and Cultural Renaissance', start: 140, desc: 'Emperor Fasiladas, establishment of Gondar capital (1636), Fasil Ghebbi stone castles, church art, and ecclesiastical architecture.' },
        { num: '5.3', title: 'Zemene Mesafint (The Era of Princes) and Decentralization', start: 148, desc: 'Assassination of Iyoas (1769), rise of regional lords (Ras Mikael Sehul, Yejju dynasty), decline of imperial authority, and theological debates.' },
        { num: '5.4', title: 'Major Autonomous Kingdoms and Sheikhdoms of Southern and Western Ethiopia', start: 154, desc: 'Kingdoms of Kaffa, Wolayta, Janjero, Sheka, Gibe Oromo states (Jimma, Limmu), and Beni Shangul sheikhdoms.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Modern World History (16th to 18th Century) and Africa',
      start_page: 161,
      end_page: 180,
      topics: [
        { num: '6.1', title: 'The Renaissance, Reformation, and Scientific Revolution in Europe', start: 162, desc: 'Humanism, Gutenberg printing press, Martin Luther\'s Reformation, Copernican heliocentrism, and scientific methodology.' },
        { num: '6.2', title: 'The Trans-Atlantic Slave Trade and Its Devastating Impacts on Africa', start: 168, desc: 'Triangular trade route, Middle Passage horrors, demographic catastrophe in Africa, and economic disruption.' },
        { num: '6.3', title: 'The Enlightenment and the Industrial Revolution', start: 174, desc: 'Enlightenment political philosophers (Locke, Rousseau, Montesquieu), steam power mechanization, factory system, and global market expansion.' }
      ]
    }
  ],

  // === GRADE 10 HISTORY ===
  'book-10-hist': [
    {
      unit_num: 1,
      title: 'Development of Capitalism and Industrial Society',
      start_page: 1,
      end_page: 26,
      topics: [
        { num: '1.1', title: 'The Industrial Revolution and Its Global Consequences', start: 2, desc: 'Origins in Great Britain, textile mechanization, steam engines, urbanization, growth of working class, and capitalist expansion.' },
        { num: '1.2', title: 'The American and French Revolutions', start: 10, desc: 'American Declaration of Independence (1776), French Revolution (1789), storming of the Bastille, Declaration of the Rights of Man, and Napoleonic era.' },
        { num: '1.3', title: 'Nationalism and the Unification of Italy and Germany', start: 18, desc: 'Italian Risorgimento (Mazzini, Cavour, Garibaldi) and German unification under Otto von Bismarck\'s "Blood and Iron" policy (1871).' }
      ]
    },
    {
      unit_num: 2,
      title: 'Colonial Scramble and Resistance in Africa',
      start_page: 27,
      end_page: 58,
      topics: [
        { num: '2.1', title: 'Causes and Motives of European Colonial Expansion', start: 28, desc: 'Economic motives (raw materials, markets), political nationalism, strategic bases, and "civilizing mission" ideological pretexts.' },
        { num: '2.2', title: 'The Berlin Conference (1884–1885) and the Partition of Africa', start: 36, desc: 'Convened by Bismarck, principle of "effective occupation", drawing of artificial borders, and partitioning of African territories.' },
        { num: '2.3', title: 'African Resistance Movements against Colonial Occupation', start: 44, desc: 'Armed and religious resistance: Ashanti, Samori Ture, Maji Maji rebellion, Urabi Pasha in Egypt, and Mahdist resistance in Sudan.' },
        { num: '2.4', title: 'Colonial Administrative Policies: Direct, Indirect Rule, and Assimilation', start: 51, desc: 'British Indirect Rule (Lord Lugard), French Assimilation and Association, Portuguese labor exploitation, and socio-economic consequences.' }
      ]
    },
    {
      unit_num: 3,
      title: 'State Building, Modernization and Consolidation in Ethiopia (1855–1913)',
      start_page: 59,
      end_page: 95,
      topics: [
        { num: '3.1', title: 'Emperor Tewodros II: Unification Efforts, Reforms, and Meqdela', start: 60, desc: 'Ending the Zemene Mesafint, administrative, military, and church land reforms, conflict with Britain, Napier expedition, and martyrdom at Meqdela (1868).' },
        { num: '3.2', title: 'Emperor Yohannes IV: Religious Policy and Defense Against Invasions', start: 72, desc: 'Council of Boru Meda (1878), repelling Egyptian invasions (Battles of Gundet and Gura, 1875-76), Italian incursions (Dogali 1887), and death at Metemma (1889).' },
        { num: '3.3', title: 'Emperor Menelik II: Territorial Consolidation and Early Modernization', start: 84, desc: 'Incorporation of southern, western, and eastern territories, founding of Addis Ababa (1886), introduction of railway, telegraph, modern schools, and hospitals.' }
      ]
    },
    {
      unit_num: 4,
      title: 'The Battle of Adwa (1896) and Its National & Global Significance',
      start_page: 96,
      end_page: 120,
      topics: [
        { num: '4.1', title: 'Causes of the Conflict: Wuchale Treaty Article XVII Dispute', start: 97, desc: 'Treaty of Wuchale (1889), Italian deceit in Article XVII (Amharic vs Italian versions), Menelik\'s abrogation of the treaty, and mobilization proclamation.' },
        { num: '4.2', title: 'The Mobilization, Logistics, and Military Strategy of Adwa', start: 104, desc: 'Nationwide march to the north, Empress Taytu Betul\'s strategic leadership, Battle of Amba Alage, Siege of Mekelle Water Fortress, and intelligence operations.' },
        { num: '4.3', title: 'The Decisive Battle of March 1, 1896 and Total Ethiopian Victory', start: 110, desc: 'Battlefield tactics of Ethiopian forces against Generals Baratieri, Albertone, Arimondi, and Dabormida; complete rout of the invading Italian army.' },
        { num: '4.4', title: 'Pan-African and Global Anti-Colonial Impact of the Adwa Victory', start: 115, desc: 'Treaty of Addis Ababa (1896) recognizing Ethiopian sovereignty, inspiration to African diaspora, Pan-Africanism, and symbol of Black dignity.' }
      ]
    },
    {
      unit_num: 5,
      title: 'The First World War (1914–1918) and the Russian Revolution',
      start_page: 121,
      end_page: 140,
      topics: [
        { num: '5.1', title: 'Causes, Rival Alliances, and Major Fronts of WWI', start: 122, desc: 'M-A-I-N causes (Militarism, Alliances, Imperialism, Nationalism), assassination of Franz Ferdinand, trench warfare on Western and Eastern fronts.' },
        { num: '5.2', title: 'The 1917 Russian Bolshevik Revolution and Soviet Formation', start: 129, desc: 'Fall of Tsarist autocracy, Vladimir Lenin and the Bolsheviks, "Peace, Land, and Bread", October Revolution, and emergence of the USSR.' },
        { num: '5.3', title: 'Treaty of Versailles and the League of Nations', start: 135, desc: 'Paris Peace Conference (1919), punitive terms against Germany (War Guilt Clause, reparations), redrawing of European borders, and League of Nations.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Ethiopia and the Horn in the Inter-War Period (1918–1935)',
      start_page: 141,
      end_page: 160,
      topics: [
        { num: '6.1', title: 'The Diarchy of Empress Zewditu and Ras Teferi Makonnen', start: 142, desc: 'Coup against Lij Iyasu (1916), dual power arrangement, progressive vs conservative tensions, and Ethiopia\'s entry into the League of Nations (1923).' },
        { num: '6.2', title: 'Coronation of Emperor Haile Selassie I and the 1931 Constitution', start: 148, desc: 'Coronation on November 2, 1930, proclamation of the first written Constitution of Ethiopia (1931), centralization of tax and judiciary.' },
        { num: '6.3', title: 'Modernization Reforms in Education, Administration, and Infrastructure', start: 153, desc: 'Expansion of Teferi Makonnen School, printing presses (Berhanena Selam), anti-slavery edicts, Bank of Ethiopia, and modern military academy at Holeta.' },
        { num: '6.4', title: 'The Walwal Incident (1934) and Diplomatic Pretexts for Aggression', start: 157, desc: 'Border clash at Walwal in the Ogaden, Italian fascist revanchism under Mussolini, failure of League of Nations arbitration, and preparation for war.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Fascist Italian Aggression and Ethiopian Patriotic Resistance (1935–1941)',
      start_page: 161,
      end_page: 180,
      topics: [
        { num: '7.1', title: 'The Italian Invasion, Use of Mustard Gas, and International Betrayal', start: 162, desc: 'Invasion in October 1935 under De Bono and Badoglio, Northern and Southern fronts, illegal use of chemical weapons (mustard gas), and Emperor\'s League of Nations appeal.' },
        { num: '7.2', title: 'The Ethiopian Patriotic Resistance Movement (Arbegnoch) and Yekatit 12 Massacre', start: 167, desc: 'Guerilla warfare by the Arbegnoch, attempt on Graziani by Abraha Deboch and Moges Asgedom, horrific Yekatit 12 massacre of civilians and Debre Libanos monks.' },
        { num: '7.3', title: 'The Black Lion Organization, Underground Resistance, and Women in the Struggle', start: 172, desc: 'Intellectual leadership by the Black Lions, sabotage networks, heroic roles of women patriots (Shewareged Gedle, Woizero Lekyelesh Beyan).' },
        { num: '7.4', title: 'Liberation Campaign, Defeat of Fascism, and Restoration of Independence', start: 176, desc: 'Gideon Force, joint Anglo-Ethiopian offensive, entry of Emperor Haile Selassie into Addis Ababa on May 5, 1941, and restoration of sovereignty.' }
      ]
    }
  ]
};
