/**
 * 2018 E.C. Geography Exam - EUEE Social Science Stream
 * Booklet Code: 610 - 100 Questions Complete with Answers & Detailed Explanations
 */

const questions = [
  {
    question_number: 1,
    question_text: "What is the major difference between practical geography and theoretical geography?",
    option_a: "Practical geography studies the universe while theoretical studies only Earth.",
    option_b: "Practical geography involves field work and applied techniques while theoretical focuses on concepts and models.",
    option_c: "Theoretical geography uses field equipment while practical does not.",
    option_d: "Practical geography is purely philosophical while theoretical is mathematical.",
    options: [
      "Practical geography studies the universe while theoretical studies only Earth.",
      "Practical geography involves field work and applied techniques while theoretical focuses on concepts and models.",
      "Theoretical geography uses field equipment while practical does not.",
      "Practical geography is purely philosophical while theoretical is mathematical."
    ],
    correct_answer: "B",
    explanation: "Theoretical geography deals with developing geographic concepts, laws, hypotheses, and spatial theories, whereas practical geography applies empirical methods, cartography, GIS, field surveying, and spatial analysis to solve real-world problems.",
    topic_name: "Nature and Scope of Geography",
    instruction_category: "Geography"
  },
  {
    question_number: 2,
    question_text: "Which early Greek scholar is credited with coining the term 'Geography' and calculating the Earth's circumference with remarkable accuracy?",
    option_a: "Herodotus",
    option_b: "Strabo",
    option_c: "Ptolemy",
    option_d: "Eratosthenes",
    options: ["Herodotus", "Strabo", "Ptolemy", "Eratosthenes"],
    correct_answer: "D",
    explanation: "Eratosthenes (c. 276–194 BC) was the chief librarian at Alexandria who coined the word 'Geographia' (earth description) and accurately computed the Earth's circumference using sun angles between Syene and Alexandria.",
    topic_name: "Historical Development of Geography",
    instruction_category: "Geography"
  },
  {
    question_number: 3,
    question_text: "During which period did the 'Quantitative Revolution' transform geography into a spatial science using statistical and mathematical models?",
    option_a: "Early 18th century",
    option_b: "Mid-20th century (1950s - 1960s)",
    option_c: "Late 19th century",
    option_d: "Early 21st century",
    options: [
      "Early 18th century",
      "Mid-20th century (1950s - 1960s)",
      "Late 19th century",
      "Early 21st century"
    ],
    correct_answer: "B",
    explanation: "The Quantitative Revolution in geography occurred during the 1950s and 1960s, shifting geography from descriptive regionalism to rigorous spatial analysis, statistical modeling, and scientific hypothesis testing.",
    topic_name: "Schools of Geographic Thought",
    instruction_category: "Geography"
  },
  {
    question_number: 4,
    question_text: "Which of the following statements correctly distinguishes Human Geography from Physical Geography?",
    option_a: "Human geography studies atmospheric dynamics, whereas physical geography studies urban settlements.",
    option_b: "Physical geography is concerned with cultural landscapes, while human geography studies landforms.",
    option_c: "Human geography focuses on human societies and their spatial interactions, while physical geography investigates natural processes of the Earth.",
    option_d: "There is no functional distinction between human and physical geography.",
    options: [
      "Human geography studies atmospheric dynamics, whereas physical geography studies urban settlements.",
      "Physical geography is concerned with cultural landscapes, while human geography studies landforms.",
      "Human geography focuses on human societies and their spatial interactions, while physical geography investigates natural processes of the Earth.",
      "There is no functional distinction between human and physical geography."
    ],
    correct_answer: "C",
    explanation: "Human geography investigates the patterns, processes, and spatial organization of human activities (population, culture, economics, urbanism), while physical geography studies the natural environment (lithosphere, atmosphere, hydrosphere, biosphere).",
    topic_name: "Branches of Geography",
    instruction_category: "Geography"
  },
  {
    question_number: 5,
    question_text: "Which of the following is an essential marginal element of a standard map that defines the ratio between map distance and ground distance?",
    option_a: "North arrow",
    option_b: "Legend",
    option_c: "Grid lines",
    option_d: "Scale",
    options: ["North arrow", "Legend", "Grid lines", "Scale"],
    correct_answer: "D",
    explanation: "Map scale mathematically expresses the relationship (ratio or proportion) between a given distance measured on the map and the corresponding real distance on the ground.",
    topic_name: "Map Reading & Cartography",
    instruction_category: "Geography"
  },
  {
    question_number: 6,
    question_text: "On a topographic map, individual features such as water wells, benchmarks, and historical monuments are typically represented by:",
    option_a: "Point symbols (dots/icons)",
    option_b: "Line symbols",
    option_c: "Area/Polygon symbols",
    option_d: "Hachures",
    options: ["Point symbols (dots/icons)", "Line symbols", "Area/Polygon symbols", "Hachures"],
    correct_answer: "A",
    explanation: "Cartographic symbols are categorized into point, line, and area symbols. Point symbols represent zero-dimensional geographic locations with fixed coordinates, such as wells, church buildings, spot heights, and monuments.",
    topic_name: "Cartographic Representation",
    instruction_category: "Geography"
  },
  {
    question_number: 7,
    question_text: "If a map has a Representative Fraction (R.F.) scale of 1:50,000, what is the actual ground distance represented by a line measuring 4 cm on the map?",
    option_a: "2 kilometers",
    option_b: "20 kilometers",
    option_c: "200 meters",
    option_d: "500 meters",
    options: ["2 kilometers", "20 kilometers", "200 meters", "500 meters"],
    correct_answer: "A",
    explanation: "1 cm on map = 50,000 cm on the ground = 500 meters = 0.5 km.\nGround distance = 4 cm * 0.5 km/cm = 2.0 km.",
    topic_name: "Map Scale Calculations",
    instruction_category: "Geography"
  },
  {
    question_number: 8,
    question_text: "When contour lines on a topographic map are spaced very close together, they indicate:",
    option_a: "A steep slope",
    option_b: "A gentle slope",
    option_c: "A flat plain",
    option_d: "A depression",
    options: ["A steep slope", "A gentle slope", "A flat plain", "A depression"],
    correct_answer: "A",
    explanation: "Contour lines connect points of equal elevation. When contours are closely packed, elevation changes rapidly over a short horizontal distance, representing a steep slope or cliff.",
    topic_name: "Topographic Interpretation",
    instruction_category: "Geography"
  },
  {
    question_number: 9,
    question_text: "A direction measured in degrees clockwise starting from True North (000° to 360°) is known as:",
    option_a: "Magnetic declination",
    option_b: "True bearing (Azimuth)",
    option_c: "Grid coordinate",
    option_d: "Cardinal direction",
    options: ["Magnetic declination", "True bearing (Azimuth)", "Grid coordinate", "Cardinal direction"],
    correct_answer: "B",
    explanation: "True bearing (whole circle azimuth) is the horizontal angle measured clockwise from True North (0°/360°) to a target line.",
    topic_name: "Navigation & Bearings",
    instruction_category: "Geography"
  },
  {
    question_number: 10,
    question_text: "What does the acronym GIS stand for in modern geospatial technology?",
    option_a: "Geological International Standard",
    option_b: "Global Internet System",
    option_c: "Geographic Information System",
    option_d: "Geodetic Information Sensor",
    options: [
      "Geological International Standard",
      "Global Internet System",
      "Geographic Information System",
      "Geodetic Information Sensor"
    ],
    correct_answer: "C",
    explanation: "GIS stands for Geographic Information System, an integrated framework for capturing, managing, analyzing, and displaying all forms of geographically referenced spatial and attribute data.",
    topic_name: "GIS & Geospatial Analysis",
    instruction_category: "Geography"
  },
  {
    question_number: 11,
    question_text: "The science and art of gathering data about an object or surface without making physical contact, using sensors on satellites or aircraft, is called:",
    option_a: "Cadastral surveying",
    option_b: "Geodesy",
    option_c: "Triangulation",
    option_d: "Remote Sensing",
    options: ["Cadastral surveying", "Geodesy", "Triangulation", "Remote Sensing"],
    correct_answer: "D",
    explanation: "Remote sensing is the acquisition of information about the Earth's surface and atmosphere from a distance, typically through electromagnetic radiation sensors mounted on satellites, aircraft, or drones.",
    topic_name: "Remote Sensing",
    instruction_category: "Geography"
  },
  {
    question_number: 12,
    question_text: "Global Positioning System (GPS) determines exact geographic coordinates (latitude, longitude, altitude) by receiving signals from:",
    option_a: "A constellation of Earth-orbiting satellites",
    option_b: "Ground-based seismic stations",
    option_c: "Atmospheric weather balloons",
    option_d: "Deep ocean sonar beacons",
    options: [
      "A constellation of Earth-orbiting satellites",
      "Ground-based seismic stations",
      "Atmospheric weather balloons",
      "Deep ocean sonar beacons"
    ],
    correct_answer: "A",
    explanation: "GPS functions by trilaterating radio signals transmitted from a constellation of orbiting satellites (minimum 4 satellites in view) to compute precise 3D position coordinates and time.",
    topic_name: "GPS Technology",
    instruction_category: "Geography"
  },
  {
    question_number: 13,
    question_text: "The Earth's lithosphere is comprised of which structural layers?",
    option_a: "The inner core and outer core",
    option_b: "The crust and the uppermost rigid part of the mantle",
    option_c: "The asthenosphere and lower mantle",
    option_d: "The hydrosphere and atmosphere only",
    options: [
      "The inner core and outer core",
      "The crust and the uppermost rigid part of the mantle",
      "The asthenosphere and lower mantle",
      "The hydrosphere and atmosphere only"
    ],
    correct_answer: "B",
    explanation: "The lithosphere is the solid, rigid outer mechanical shell of the Earth, encompassing the entire crust (continental and oceanic) and the brittle uppermost mantle, resting above the plastic asthenosphere.",
    topic_name: "Internal Structure of the Earth",
    instruction_category: "Geography"
  },
  {
    question_number: 14,
    question_text: "The theory that describes the large-scale motion of seven major and numerous minor lithospheric plates over the asthenosphere is known as:",
    option_a: "Geosynclinal theory",
    option_b: "Isostasy",
    option_c: "Plate Tectonics",
    option_d: "Catastrophism",
    options: ["Geosynclinal theory", "Isostasy", "Plate Tectonics", "Catastrophism"],
    correct_answer: "C",
    explanation: "Plate Tectonics is the unifying geological theory explaining continental drift, seafloor spreading, seismic activity, volcanism, and mountain building through the movement of tectonic plates.",
    topic_name: "Plate Tectonics",
    instruction_category: "Geography"
  },
  {
    question_number: 15,
    question_text: "Which geological feature is typically formed at divergent plate boundaries where tectonic plates pull apart?",
    option_a: "Rift valleys and mid-ocean ridges",
    option_b: "Deep ocean trenches",
    option_c: "Fold mountains",
    option_d: "Subduction zones",
    options: [
      "Rift valleys and mid-ocean ridges",
      "Deep ocean trenches",
      "Fold mountains",
      "Subduction zones"
    ],
    correct_answer: "A",
    explanation: "At divergent (constructive) plate boundaries, extensional forces pull plates apart, creating continental rift valleys (e.g., East African Rift) and mid-ocean ridges (e.g., Mid-Atlantic Ridge) as magma rises to form new crust.",
    topic_name: "Plate Boundaries & Landforms",
    instruction_category: "Geography"
  },
  {
    question_number: 16,
    question_text: "The mechanical disintegration and chemical decomposition of rocks in situ (without major transport) is defined as:",
    option_a: "Erosion",
    option_b: "Deposition",
    option_c: "Mass wasting",
    option_d: "Weathering",
    options: ["Erosion", "Deposition", "Mass wasting", "Weathering"],
    correct_answer: "D",
    explanation: "Weathering is the breakdown of rocks, minerals, and soils in place (in situ) through atmospheric, chemical, and biological processes without significant transport.",
    topic_name: "Geomorphic Processes - Weathering",
    instruction_category: "Geography"
  },
  {
    question_number: 17,
    question_text: "Which of the following processes is a prime example of chemical weathering?",
    option_a: "Frost wedging (freeze-thaw action)",
    option_b: "Carbonation and oxidation of rock minerals",
    option_c: "Thermal expansion and contraction",
    option_d: "Abrasion by wind-blown sand",
    options: [
      "Frost wedging (freeze-thaw action)",
      "Carbonation and oxidation of rock minerals",
      "Thermal expansion and contraction",
      "Abrasion by wind-blown sand"
    ],
    correct_answer: "B",
    explanation: "Chemical weathering alters the chemical composition of rocks. Carbonation (carbonic acid dissolving calcium carbonate in limestone) and oxidation (reaction of iron with oxygen) are prominent chemical weathering processes.",
    topic_name: "Chemical Weathering",
    instruction_category: "Geography"
  },
  {
    question_number: 18,
    question_text: "An oxbow lake is a crescent-shaped water body formed during the old age stage of a river by:",
    option_a: "Glacial scouring of bedrock",
    option_b: "Volcanic caldera collapse",
    option_c: "River meander neck cut-off and deposition of alluvium",
    option_d: "Tectonic rifting",
    options: [
      "Glacial scouring of bedrock",
      "Volcanic caldera collapse",
      "River meander neck cut-off and deposition of alluvium",
      "Tectonic rifting"
    ],
    correct_answer: "C",
    explanation: "As a mature meandering river flows across a floodplain, lateral erosion narrows the meander neck. During high floods, the river cuts through the neck directly, and alluvial deposition seals off the abandoned loop, forming an oxbow lake.",
    topic_name: "Fluvial Landforms",
    instruction_category: "Geography"
  },
  {
    question_number: 19,
    question_text: "Which of the following is a classic erosional landform created by alpine glaciation?",
    option_a: "U-shaped valley (glacial trough)",
    option_b: "V-shaped river valley",
    option_c: "Barchan sand dune",
    option_d: "Alluvial fan",
    options: [
      "U-shaped valley (glacial trough)",
      "V-shaped river valley",
      "Barchan sand dune",
      "Alluvial fan"
    ],
    correct_answer: "A",
    explanation: "Glaciers widen, deepen, and straighten pre-existing river valleys, transforming narrow V-shaped river valleys into steep-sided, flat-bottomed U-shaped valleys (glacial troughs).",
    topic_name: "Glacial Landforms",
    instruction_category: "Geography"
  },
  {
    question_number: 20,
    question_text: "Which of the following landforms is produced by wind erosion (deflation and abrasion) in arid desert regions?",
    option_a: "Drumlins and eskers",
    option_b: "Yardangs and Zeugen",
    option_c: "Sinkholes and stalactites",
    option_d: "Deltas and levees",
    options: ["Drumlins and eskers", "Yardangs and Zeugen", "Sinkholes and stalactites", "Deltas and levees"],
    correct_answer: "B",
    explanation: "Yardangs (elongated streamlined ridges) and Zeugen (tabular rock masses undercut by sandblasting) are distinctive erosional landforms created by wind abrasion and deflation in desert environments.",
    topic_name: "Aeolian Landforms",
    instruction_category: "Geography"
  },
  {
    question_number: 21,
    question_text: "In which layer of the Earth's atmosphere is the ozone layer (O₃) concentrated, absorbing harmful ultraviolet (UV) solar radiation?",
    option_a: "Troposphere",
    option_b: "Stratosphere",
    option_c: "Mesosphere",
    option_d: "Thermosphere",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    correct_answer: "B",
    explanation: "The ozone layer is located in the lower stratosphere (approximately 15 to 35 km above sea level), where it absorbs high-energy UV-B and UV-C solar radiation.",
    topic_name: "Atmospheric Layers",
    instruction_category: "Geography"
  },
  {
    question_number: 22,
    question_text: "The natural atmospheric process that warms the Earth's lower atmosphere by absorbing and re-emitting terrestrial infrared radiation is called the:",
    option_a: "Greenhouse Effect",
    option_b: "Coriolis effect",
    option_c: "Adiabatic lapse rate",
    option_d: "Albedo effect",
    options: ["Greenhouse Effect", "Coriolis effect", "Adiabatic lapse rate", "Albedo effect"],
    correct_answer: "A",
    explanation: "The greenhouse effect occurs when atmospheric gases (water vapor, CO₂, CH₄, N₂O) absorb long-wave terrestrial infrared radiation emitted by the Earth, keeping global average surface temperatures hospitable for life.",
    topic_name: "Climatology - Greenhouse Effect",
    instruction_category: "Geography"
  },
  {
    question_number: 23,
    question_text: "As altitude (elevation) above sea level increases, what happens to atmospheric pressure?",
    option_a: "Atmospheric pressure increases exponentially.",
    option_b: "Atmospheric pressure decreases due to lower air column density.",
    option_c: "Atmospheric pressure remains completely unchanged.",
    option_d: "Atmospheric pressure fluctuates wildly with no relation to elevation.",
    options: [
      "Atmospheric pressure increases exponentially.",
      "Atmospheric pressure decreases due to lower air column density.",
      "Atmospheric pressure remains completely unchanged.",
      "Atmospheric pressure fluctuates wildly with no relation to elevation."
    ],
    correct_answer: "B",
    explanation: "Atmospheric pressure is the weight of the overlying column of air per unit area. As altitude increases, fewer air molecules remain above, causing atmospheric pressure to decrease continuously with height.",
    topic_name: "Atmospheric Pressure & Altitude",
    instruction_category: "Geography"
  },
  {
    question_number: 24,
    question_text: "Due to the Earth's rotation from west to east, the Coriolis force deflects moving winds and ocean currents:",
    option_a: "To the right in the Northern Hemisphere and to the left in the Southern Hemisphere",
    option_b: "To the left in the Northern Hemisphere and to the right in the Southern Hemisphere",
    option_c: "Straight towards the poles in both hemispheres",
    option_d: "Straight towards the Equator in both hemispheres",
    options: [
      "To the right in the Northern Hemisphere and to the left in the Southern Hemisphere",
      "To the left in the Northern Hemisphere and to the right in the Southern Hemisphere",
      "Straight towards the poles in both hemispheres",
      "Straight towards the Equator in both hemispheres"
    ],
    correct_answer: "A",
    explanation: "Ferrel's Law states that because of the Coriolis effect, any freely moving object or fluid is deflected to the right of its path in the Northern Hemisphere and to the left in the Southern Hemisphere.",
    topic_name: "Global Wind Patterns & Coriolis Force",
    instruction_category: "Geography"
  },
  {
    question_number: 25,
    question_text: "What does the abbreviation ITCZ stand for in equatorial climatology?",
    option_a: "International Temperature Control Zone",
    option_b: "Inter-Continental Terrestrial Center",
    option_c: "Inter-Tropical Convergence Zone",
    option_d: "Isobaric Thermal Convection Zone",
    options: [
      "International Temperature Control Zone",
      "Inter-Continental Terrestrial Center",
      "Inter-Tropical Convergence Zone",
      "Isobaric Thermal Convection Zone"
    ],
    correct_answer: "C",
    explanation: "The ITCZ (Inter-Tropical Convergence Zone) is a broad low-pressure belt near the equator where the northeast trade winds and southeast trade winds converge, producing intense convectional rainfall.",
    topic_name: "Tropical Climatology - ITCZ",
    instruction_category: "Geography"
  },
  {
    question_number: 26,
    question_text: "Monsoon winds are fundamentally characterized by:",
    option_a: "Constant velocity blowing continuously in a single direction throughout the entire year",
    option_b: "A complete seasonal reversal in wind direction driven by differential heating of land and sea",
    option_c: "Purely localized katabatic mountain breezes occurring at night",
    option_d: "Cold polar easterlies circulating only over ice caps",
    options: [
      "Constant velocity blowing continuously in a single direction throughout the entire year",
      "A complete seasonal reversal in wind direction driven by differential heating of land and sea",
      "Purely localized katabatic mountain breezes occurring at night",
      "Cold polar easterlies circulating only over ice caps"
    ],
    correct_answer: "B",
    explanation: "Monsoons are large-scale seasonal wind systems characterized by a periodic reversal in prevailing wind direction, primarily caused by temperature and pressure differentials between vast continental landmasses and adjacent oceans.",
    topic_name: "Monsoon Meteorology",
    instruction_category: "Geography"
  },
  {
    question_number: 27,
    question_text: "The global hydrological cycle is primarily powered by:",
    option_a: "Earth's magnetic field and tectonic friction",
    option_b: "Tidal friction from lunar gravity alone",
    option_c: "Volcanic degassing and mantle convection",
    option_d: "Solar radiation and gravitational force",
    options: [
      "Earth's magnetic field and tectonic friction",
      "Tidal friction from lunar gravity alone",
      "Volcanic degassing and mantle convection",
      "Solar radiation and gravitational force"
    ],
    correct_answer: "D",
    explanation: "The hydrological cycle is driven by solar radiation (which provides energy for evaporation and transpiration) and gravitational force (which causes condensation precipitation, runoff, and percolation).",
    topic_name: "Hydrological Cycle",
    instruction_category: "Geography"
  },
  {
    question_number: 28,
    question_text: "The gently sloping, relatively shallow submerged margin of a continent extending from the coast to the continental slope is called the:",
    option_a: "Continental shelf",
    option_b: "Abyssal plain",
    option_c: "Ocean trench",
    option_d: "Mid-oceanic ridge",
    options: ["Continental shelf", "Abyssal plain", "Ocean trench", "Mid-oceanic ridge"],
    correct_answer: "A",
    explanation: "The continental shelf is the shallow underwater edge of a continental landmass, averaging less than 200 meters in depth, rich in marine life and offshore mineral/petroleum resources.",
    topic_name: "Ocean Floor Topography",
    instruction_category: "Geography"
  },
  {
    question_number: 29,
    question_text: "How do warm ocean currents influence the climate of adjacent coastal regions?",
    option_a: "They create arid coastal deserts with extreme fog.",
    option_b: "They lower air temperatures and reduce atmospheric moisture.",
    option_c: "They raise coastal air temperatures and increase precipitation and humidity.",
    option_d: "They cause perpetual sub-zero freezing along tropical shorelines.",
    options: [
      "They create arid coastal deserts with extreme fog.",
      "They lower air temperatures and reduce atmospheric moisture.",
      "They raise coastal air temperatures and increase precipitation and humidity.",
      "They cause perpetual sub-zero freezing along tropical shorelines."
    ],
    correct_answer: "C",
    explanation: "Warm ocean currents heat the overlying maritime air, boosting evaporation and atmospheric moisture, which leads to higher temperatures and increased rainfall on adjacent coastal lands.",
    topic_name: "Ocean Currents & Climate",
    instruction_category: "Geography"
  },
  {
    question_number: 30,
    question_text: "The periodic climatic phenomenon characterized by abnormal warming of sea surface temperatures in the central and eastern equatorial Pacific Ocean is known as:",
    option_a: "El Niño (ENSO)",
    option_b: "La Niña",
    option_c: "Benguela Current",
    option_d: "Kuroshio Current",
    options: ["El Niño (ENSO)", "La Niña", "Benguela Current", "Kuroshio Current"],
    correct_answer: "A",
    explanation: "El Niño is the warm phase of the El Niño-Southern Oscillation (ENSO), characterized by unusual warming of surface waters in the eastern tropical Pacific, disrupting global atmospheric circulation and causing severe droughts or floods worldwide.",
    topic_name: "Global Climate Teleconnections",
    instruction_category: "Geography"
  },
  {
    question_number: 31,
    question_text: "According to soil science, which five interrelated factors determine soil formation (pedogenesis)?",
    option_a: "Magnetism, sunlight, ocean tides, wind speed, latitude",
    option_b: "Bedrock hardness, earthquakes, tectonic drift, volcanic ash, glaciers",
    option_c: "Human settlement, industrialization, crop rotation, fertilization, irrigation",
    option_d: "Parent material, climate, living organisms, topography/relief, and time (CLORPT)",
    options: [
      "Magnetism, sunlight, ocean tides, wind speed, latitude",
      "Bedrock hardness, earthquakes, tectonic drift, volcanic ash, glaciers",
      "Human settlement, industrialization, crop rotation, fertilization, irrigation",
      "Parent material, climate, living organisms, topography/relief, and time (CLORPT)"
    ],
    correct_answer: "D",
    explanation: "Hans Jenny's foundational soil equation identifies five primary soil-forming factors: Climate, Organisms, Relief (topography), Parent material, and Time (CLORPT).",
    topic_name: "Pedology - Soil Formation Factors",
    instruction_category: "Geography"
  },
  {
    question_number: 32,
    question_text: "In a typical soil profile, which uppermost horizon contains the highest concentration of decomposed organic matter (humus) and biological activity?",
    option_a: "A horizon (Topsoil) / O horizon",
    option_b: "B horizon (Subsoil)",
    option_c: "C horizon (Weathered parent rock)",
    option_d: "R horizon (Solid bedrock)",
    options: [
      "A horizon (Topsoil) / O horizon",
      "B horizon (Subsoil)",
      "C horizon (Weathered parent rock)",
      "R horizon (Solid bedrock)"
    ],
    correct_answer: "A",
    explanation: "The O (organic) and A (topsoil) horizons sit at the top of the soil profile, rich in decomposed humus, soil microorganisms, plant roots, and essential plant nutrients.",
    topic_name: "Soil Profiles & Horizons",
    instruction_category: "Geography"
  },
  {
    question_number: 33,
    question_text: "Which of the following agricultural practices is widely employed on steep slopes to control surface runoff and prevent soil erosion?",
    option_a: "Up-and-down slope plowing",
    option_b: "Terracing and contour plowing",
    option_c: "Overgrazing and monoculture",
    option_d: "Deforestation and clear-cutting",
    options: [
      "Up-and-down slope plowing",
      "Terracing and contour plowing",
      "Overgrazing and monoculture",
      "Deforestation and clear-cutting"
    ],
    correct_answer: "B",
    explanation: "Contour plowing (plowing across slopes along contour lines) and terracing (creating stepped flat platforms) significantly reduce runoff velocity, promoting water infiltration and preventing severe soil erosion.",
    topic_name: "Soil Conservation Methods",
    instruction_category: "Geography"
  },
  {
    question_number: 34,
    question_text: "The tropical rainforest biome (selva) is distinguished by which combination of environmental characteristics?",
    option_a: "Year-round high temperatures, heavy rainfall, multi-layered dense canopy, and high biodiversity",
    option_b: "Extremely dry conditions, sparse cacti, extreme daily temperature range",
    option_c: "Severe sub-zero winters, coniferous pine forests, low annual precipitation",
    option_d: "Treeless grasslands with continuous permafrost",
    options: [
      "Year-round high temperatures, heavy rainfall, multi-layered dense canopy, and high biodiversity",
      "Extremely dry conditions, sparse cacti, extreme daily temperature range",
      "Severe sub-zero winters, coniferous pine forests, low annual precipitation",
      "Treeless grasslands with continuous permafrost"
    ],
    correct_answer: "A",
    explanation: "Tropical rainforest biomes (found along equatorial basins such as the Amazon and Congo) feature high annual temperatures (>24°C), abundant annual rainfall (>2000 mm), stratified multi-canopy evergreen trees, and Earth's highest terrestrial biodiversity.",
    topic_name: "Biomes of the World - Tropical Rainforest",
    instruction_category: "Geography"
  },
  {
    question_number: 35,
    question_text: "The Savanna biome is best described as:",
    option_a: "An evergreen boreal forest dominated by spruce and fir trees",
    option_b: "A frozen desert devoid of vegetative life",
    option_c: "A tropical grassland ecosystem with scattered drought-resistant trees, experiencing distinct wet and dry seasons",
    option_d: "A temperate deciduous forest with high snowfall in winter",
    options: [
      "An evergreen boreal forest dominated by spruce and fir trees",
      "A frozen desert devoid of vegetative life",
      "A tropical grassland ecosystem with scattered drought-resistant trees, experiencing distinct wet and dry seasons",
      "A temperate deciduous forest with high snowfall in winter"
    ],
    correct_answer: "C",
    explanation: "Savannas are tropical grassland biomes found between tropical wet and semi-arid zones, characterized by tall grasses, scattered acacia and baobab trees, and pronounced wet and dry seasons.",
    topic_name: "Biomes - Savanna Ecosystems",
    instruction_category: "Geography"
  },
  {
    question_number: 36,
    question_text: "Which terrestrial biome is characterized by permanently frozen subsoil (permafrost), short cool summers, and low-growing vegetation such as mosses and lichens?",
    option_a: "Taiga",
    option_b: "Tundra",
    option_c: "Chaparral",
    option_d: "Steppe",
    options: ["Taiga", "Tundra", "Chaparral", "Steppe"],
    correct_answer: "B",
    explanation: "The Arctic and Alpine Tundra biomes are characterized by permafrost, extreme cold, short growing seasons, and dwarf vegetation (lichens, mosses, small sedges).",
    topic_name: "Biomes - Tundra",
    instruction_category: "Geography"
  },
  {
    question_number: 37,
    question_text: "A biogeographic region characterized by exceptionally high levels of endemic species that is simultaneously under severe threat of habitat destruction is termed a:",
    option_a: "Biosphere transition zone",
    option_b: "Microclimate envelope",
    option_c: "Monoculture corridor",
    option_d: "Biodiversity Hotspot",
    options: [
      "Biosphere transition zone",
      "Microclimate envelope",
      "Monoculture corridor",
      "Biodiversity Hotspot"
    ],
    correct_answer: "D",
    explanation: "Conservation International defines a Biodiversity Hotspot as a region with at least 1,500 endemic vascular plant species that has lost at least 70% of its original natural vegetation (such as the Horn of Africa and Eastern Afromontane hotspots).",
    topic_name: "Ecosystems & Biodiversity Conservation",
    instruction_category: "Geography"
  },
  {
    question_number: 38,
    question_text: "Large-scale deforestation leads to severe environmental degradation primarily by:",
    option_a: "Accelerating soil erosion, reducing biodiversity, and increasing atmospheric CO₂ concentrations",
    option_b: "Increasing groundwater replenishment and expanding cloud cover",
    option_c: "Lowering global temperatures and eliminating river sediment loads",
    option_d: "Stabilizing local river discharge throughout dry seasons",
    options: [
      "Accelerating soil erosion, reducing biodiversity, and increasing atmospheric CO₂ concentrations",
      "Increasing groundwater replenishment and expanding cloud cover",
      "Lowering global temperatures and eliminating river sediment loads",
      "Stabilizing local river discharge throughout dry seasons"
    ],
    correct_answer: "A",
    explanation: "Deforestation strips protective vegetative cover, leading to accelerated runoff, severe topsoil erosion, habitat destruction, loss of biodiversity, and increased atmospheric CO₂ concentrations.",
    topic_name: "Environmental Geography - Deforestation",
    instruction_category: "Geography"
  },
  {
    question_number: 39,
    question_text: "Ethiopia is located in the Horn of Africa within which approximate latitudinal and longitudinal boundaries?",
    option_a: "3°N to 15°N Latitude and 33°E to 48°E Longitude",
    option_b: "15°S to 30°S Latitude and 10°W to 20°E Longitude",
    option_c: "0° to 10°S Latitude and 20°E to 35°E Longitude",
    option_d: "25°N to 40°N Latitude and 45°E to 60°E Longitude",
    options: [
      "3°N to 15°N Latitude and 33°E to 48°E Longitude",
      "15°S to 30°S Latitude and 10°W to 20°E Longitude",
      "0° to 10°S Latitude and 20°E to 35°E Longitude",
      "25°N to 40°N Latitude and 45°E to 60°E Longitude"
    ],
    correct_answer: "A",
    explanation: "Astronomically, Ethiopia lies in the tropical zone between approximately 3°N (Moyale) and 14°53'N (Bademe) latitude and 32°42'E (Akobo) to 47°58'E (near Ogaden border) longitude.",
    topic_name: "Geography of Ethiopia - Location & Size",
    instruction_category: "Geography"
  },
  {
    question_number: 40,
    question_text: "The highest mountain peak in Ethiopia, standing at 4,550 meters above sea level in the Simien Mountains, is:",
    option_a: "Mount Tullu Dimtu",
    option_b: "Mount Ras Dashen (Dejen)",
    option_c: "Mount Batu",
    option_d: "Mount Guna",
    options: ["Mount Tullu Dimtu", "Mount Ras Dashen (Dejen)", "Mount Batu", "Mount Guna"],
    correct_answer: "B",
    explanation: "Mount Ras Dashen (4,550 m) in the Simien Mountains National Park is the highest peak in Ethiopia and the fourth highest in Africa.",
    topic_name: "Physiography of Ethiopia - Relief",
    instruction_category: "Geography"
  },
  {
    question_number: 41,
    question_text: "The Great East African Rift Valley divides the Ethiopian highlands into which two major physiographic blocks?",
    option_a: "The Northern and Southern lowlands",
    option_b: "The Western plains and Eastern coastal desert",
    option_c: "The Northwestern (Western) Highlands and the Southeastern (Eastern) Highlands",
    option_d: "The Danakil block and the Ogaden depression",
    options: [
      "The Northern and Southern lowlands",
      "The Western plains and Eastern coastal desert",
      "The Northwestern (Western) Highlands and the Southeastern (Eastern) Highlands",
      "The Danakil block and the Ogaden depression"
    ],
    correct_answer: "C",
    explanation: "The Ethiopian Rift Valley runs northeast-southwest, cleanly dividing the massive Ethiopian massifs into the Northwestern Highlands (Shewan, Gojjam, Gondar, Tigray plateaus) and Southeastern Highlands (Arsi, Bale, Hararghe plateaus).",
    topic_name: "Physiographic Regions of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 42,
    question_text: "The Blue Nile River (Abay) originates from which natural water body in the Northwestern Ethiopian Highlands?",
    option_a: "Lake Tana",
    option_b: "Lake Ziway",
    option_c: "Lake Hawassa",
    option_d: "Lake Chamo",
    options: ["Lake Tana", "Lake Ziway", "Lake Hawassa", "Lake Chamo"],
    correct_answer: "A",
    explanation: "The Abay (Blue Nile) flows out of the southern end of Lake Tana (fed by the Gilgel Abay) in the Amhara region, before carving deep gorges towards the Sudan border.",
    topic_name: "Drainage Systems of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 43,
    question_text: "Which Ethiopian river basin is an endorheic (inland) drainage system that terminates in Lake Abbe on the Djibouti border without reaching any ocean?",
    option_a: "Baro-Akobo River Basin",
    option_b: "Awash River Basin",
    option_c: "Omo-Gibe River Basin",
    option_d: "Genale-Dawa River Basin",
    options: [
      "Baro-Akobo River Basin",
      "Awash River Basin",
      "Omo-Gibe River Basin",
      "Genale-Dawa River Basin"
    ],
    correct_answer: "B",
    explanation: "The Awash River flows entirely within the Ethiopian Rift Valley through middle and lower valleys, terminating in a chain of saline lakes, ending in Lake Abbe on the Ethiopia-Djibouti border.",
    topic_name: "Inland Drainage of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 44,
    question_text: "In the traditional agro-climatic classification of Ethiopia, the 'Kolla' zone corresponds to:",
    option_a: "Cool alpine highlands above 3,300 meters",
    option_b: "Temperate highlands between 2,300 and 3,300 meters",
    option_c: "Subtropical mid-highlands between 1,500 and 2,300 meters",
    option_d: "Hot lowlands below 1,500 meters altitude with mean temperatures above 20°C",
    options: [
      "Cool alpine highlands above 3,300 meters",
      "Temperate highlands between 2,300 and 3,300 meters",
      "Subtropical mid-highlands between 1,500 and 2,300 meters",
      "Hot lowlands below 1,500 meters altitude with mean temperatures above 20°C"
    ],
    correct_answer: "D",
    explanation: "The traditional Ethiopian agro-climatic zones are: Bereha (<500 m, very hot), Kolla (500–1500 m, warm/hot), Woina Dega (1500–2300 m, temperate), Dega (2300–3300 m, cool), and Wurch/Kur (>3300 m, alpine cold).",
    topic_name: "Ethiopian Agro-Climatic Zones",
    instruction_category: "Geography"
  },
  {
    question_number: 45,
    question_text: "The 'Dega' agro-climatic zone in Ethiopia is characterized by which elevation range and agricultural profile?",
    option_a: "Elevations between 2,300m and 3,300m, cool climate, suitable for barley, wheat, and pulses",
    option_b: "Elevations below 500m, desert climate, suitable only for nomadic pastoralism",
    option_c: "Elevations between 1,500m and 2,300m, ideal for coffee and teff production",
    option_d: "Coastal plains with mangrove swamps",
    options: [
      "Elevations between 2,300m and 3,300m, cool climate, suitable for barley, wheat, and pulses",
      "Elevations below 500m, desert climate, suitable only for nomadic pastoralism",
      "Elevations between 1,500m and 2,300m, ideal for coffee and teff production",
      "Coastal plains with mangrove swamps"
    ],
    correct_answer: "A",
    explanation: "The Dega zone (2300–3300 m) features cool temperatures (10–15°C) and supports high-altitude crops like barley, wheat, faba beans, peas, and highland sheep husbandry.",
    topic_name: "Agro-Ecological Classification",
    instruction_category: "Geography"
  },
  {
    question_number: 46,
    question_text: "In Ethiopia, the small rainy season known as 'Belg' typically occurs between:",
    option_a: "June and September",
    option_b: "March and May (Spring)",
    option_c: "October and December",
    option_d: "December and February",
    options: [
      "June and September",
      "March and May (Spring)",
      "October and December",
      "December and February"
    ],
    correct_answer: "B",
    explanation: "The Belg season (small rains) occurs in spring from March to May, brought by moist south-easterly air masses originating from the Indian Ocean.",
    topic_name: "Seasons & Rainfall Mechanisms of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 47,
    question_text: "The main rainy season in Ethiopia ('Kiremt') provides the majority of the annual precipitation from:",
    option_a: "June to September (Summer), driven by Atlantic and Indian Ocean monsoon winds",
    option_b: "December to February (Winter), driven by dry North-Easterly winds",
    option_c: "September to November (Autumn)",
    option_d: "January to March",
    options: [
      "June to September (Summer), driven by Atlantic and Indian Ocean monsoon winds",
      "December to February (Winter), driven by dry North-Easterly winds",
      "September to November (Autumn)",
      "January to March"
    ],
    correct_answer: "A",
    explanation: "Kiremt (summer rains) spans June to September, caused by the convergence of moist Guinea monsoon winds (Congo air boundary) and Indian Ocean maritime air as the ITCZ shifts northward over Ethiopia.",
    topic_name: "Rainfall Regimes of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 48,
    question_text: "Which two soil types are dominant and widely cultivated across the Ethiopian volcanic highlands?",
    option_a: "Regosols and Arenosols",
    option_b: "Solonchaks and Gleysols",
    option_c: "Nitosols (red volcanic soils) and Vertisols (black clay soils)",
    option_d: "Podzols and Histosols",
    options: [
      "Regosols and Arenosols",
      "Solonchaks and Gleysols",
      "Nitosols (red volcanic soils) and Vertisols (black clay soils)",
      "Podzols and Histosols"
    ],
    correct_answer: "C",
    explanation: "Nitosols (deep, well-drained, fertile red tropical soils) and Vertisols (heavy black cracking clays with high water retention) cover large parts of the Ethiopian plateau and support intensive cereal and coffee agriculture.",
    topic_name: "Soils of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 49,
    question_text: "The Walia Ibex (Capra walie), an iconic endangered wild mammal endemic to Ethiopia, is exclusively found in:",
    option_a: "Simien Mountains National Park",
    option_b: "Bale Mountains National Park",
    option_c: "Nechisar National Park",
    option_d: "Awash National Park",
    options: [
      "Simien Mountains National Park",
      "Bale Mountains National Park",
      "Nechisar National Park",
      "Awash National Park"
    ],
    correct_answer: "A",
    explanation: "The Walia Ibex is strictly endemic to the steep, rocky afro-alpine escarpments of the Simien Mountains National Park in northern Ethiopia.",
    topic_name: "Endemic Wildlife of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 50,
    question_text: "The endangered Ethiopian Wolf (Simien Fox/Canis simensis) has its largest surviving global population concentrated in:",
    option_a: "Gambella National Park",
    option_b: "Bale Mountains National Park (Sanetti Plateau)",
    option_c: "Yangudi Rassa National Park",
    option_d: "Omo National Park",
    options: [
      "Gambella National Park",
      "Bale Mountains National Park (Sanetti Plateau)",
      "Yangudi Rassa National Park",
      "Omo National Park"
    ],
    correct_answer: "B",
    explanation: "Over half of the world's remaining Ethiopian Wolf population survives in the afro-alpine habitat and Sanetti Plateau of the Bale Mountains National Park.",
    topic_name: "Endemic Fauna & Protected Areas",
    instruction_category: "Geography"
  },
  {
    question_number: 51,
    question_text: "What is the scientific discipline dedicated to the statistical study of human populations, including size, composition, and spatial distribution?",
    option_a: "Demography",
    option_b: "Ethnography",
    option_c: "Sociometry",
    option_d: "Anthropology",
    options: ["Demography", "Ethnography", "Sociometry", "Anthropology"],
    correct_answer: "A",
    explanation: "Demography is the scientific study of human populations, focusing on population dynamics, fertility, mortality, migration, age-sex structures, and geographic distribution.",
    topic_name: "Population Geography - Demography",
    instruction_category: "Geography"
  },
  {
    question_number: 52,
    question_text: "Crude Birth Rate (CBR) is defined statistically as:",
    option_a: "The number of children born per woman across her reproductive lifespan",
    option_b: "The annual number of live births per 1,000 mid-year total population",
    option_c: "The percentage of infant deaths occurring before age one",
    option_d: "The ratio of male births to female births",
    options: [
      "The number of children born per woman across her reproductive lifespan",
      "The annual number of live births per 1,000 mid-year total population",
      "The percentage of infant deaths occurring before age one",
      "The ratio of male births to female births"
    ],
    correct_answer: "B",
    explanation: "Crude Birth Rate (CBR) = (Total Live Births in a year / Total Mid-year Population) * 1,000.",
    topic_name: "Demographic Measures",
    instruction_category: "Geography"
  },
  {
    question_number: 53,
    question_text: "In the Demographic Transition Model (DTM), Stage 2 (Early Expanding) is characterized by:",
    option_a: "High birth rates and high death rates resulting in stationary population",
    option_b: "Rapidly falling birth rates and low death rates",
    option_c: "High birth rates and rapidly falling death rates, leading to rapid population growth",
    option_d: "Birth rates falling below death rates causing population decline",
    options: [
      "High birth rates and high death rates resulting in stationary population",
      "Rapidly falling birth rates and low death rates",
      "High birth rates and rapidly falling death rates, leading to rapid population growth",
      "Birth rates falling below death rates causing population decline"
    ],
    correct_answer: "C",
    explanation: "In Stage 2 of the DTM, improvements in public health, sanitation, medicine, and food supply drastically reduce death rates while birth rates remain elevated, creating an explosive rate of natural increase.",
    topic_name: "Demographic Transition Model",
    instruction_category: "Geography"
  },
  {
    question_number: 54,
    question_text: "A population pyramid with a broad base tapering rapidly toward a narrow top indicates:",
    option_a: "A high birth rate, high youth dependency ratio, and rapid population expansion",
    option_b: "An aging population with low fertility rates",
    option_c: "Zero population growth with equal proportions across all cohorts",
    option_d: "A declining population dominated by senior citizens",
    options: [
      "A high birth rate, high youth dependency ratio, and rapid population expansion",
      "An aging population with low fertility rates",
      "Zero population growth with equal proportions across all cohorts",
      "A declining population dominated by senior citizens"
    ],
    correct_answer: "A",
    explanation: "An expansive (triangular) population pyramid with a broad base reflects high fertility, a high proportion of children under 15 years old, high child dependency, and expanding population momentum (common in developing nations).",
    topic_name: "Age-Sex Population Pyramids",
    instruction_category: "Geography"
  },
  {
    question_number: 55,
    question_text: "The demographic dependency ratio measures the relationship between:",
    option_a: "The number of emigrants versus immigrants",
    option_b: "The urban population versus rural population",
    option_c: "The number of literate adults versus illiterate adults",
    option_d: "The dependent age groups (0–14 years and 65+ years) and the working-age population (15–64 years)",
    options: [
      "The number of emigrants versus immigrants",
      "The urban population versus rural population",
      "The number of literate adults versus illiterate adults",
      "The dependent age groups (0–14 years and 65+ years) and the working-age population (15–64 years)"
    ],
    correct_answer: "D",
    explanation: "Dependency Ratio = [(Population aged 0-14 + Population aged 65+) / Population aged 15-64] * 100.",
    topic_name: "Dependency Ratio Calculations",
    instruction_category: "Geography"
  },
  {
    question_number: 56,
    question_text: "Which of the following is considered a 'Push factor' in human migration?",
    option_a: "Drought, civil conflict, famine, and lack of employment opportunities",
    option_b: "High wages, political stability, and high quality universities",
    option_c: "Pleasant climate and advanced healthcare services",
    option_d: "Abundant agricultural farmland available for free",
    options: [
      "Drought, civil conflict, famine, and lack of employment opportunities",
      "High wages, political stability, and high quality universities",
      "Pleasant climate and advanced healthcare services",
      "Abundant agricultural farmland available for free"
    ],
    correct_answer: "A",
    explanation: "Push factors are unfavorable socio-economic, environmental, or political conditions in a place of origin (e.g., poverty, war, natural disasters, unemployment) that compel individuals to leave.",
    topic_name: "Migration Dynamics - Push & Pull Factors",
    instruction_category: "Geography"
  },
  {
    question_number: 57,
    question_text: "Which of the following is a primary 'Pull factor' attracting rural migrants to metropolitan urban centers?",
    option_a: "Rural soil erosion and land fragmentation",
    option_b: "Lack of clean drinking water in villages",
    option_c: "Perception of superior employment prospects, modern education, and healthcare infrastructure",
    option_d: "Severe crop failure caused by pests",
    options: [
      "Rural soil erosion and land fragmentation",
      "Lack of clean drinking water in villages",
      "Perception of superior employment prospects, modern education, and healthcare infrastructure",
      "Severe crop failure caused by pests"
    ],
    correct_answer: "C",
    explanation: "Pull factors are positive attributes at a destination (better wages, diverse job markets, educational institutions, modern amenities) that attract incoming migrants.",
    topic_name: "Rural-Urban Migration",
    instruction_category: "Geography"
  },
  {
    question_number: 58,
    question_text: "Urbanization refers to:",
    option_a: "The movement of city residents back to primitive subsistence agriculture",
    option_b: "The progressive increase in the percentage and absolute number of people living in urban settlements",
    option_c: "The conversion of urban buildings into wildlife conservation parks",
    option_d: "The complete decentralization of all manufacturing industries to remote forests",
    options: [
      "The movement of city residents back to primitive subsistence agriculture",
      "The progressive increase in the percentage and absolute number of people living in urban settlements",
      "The conversion of urban buildings into wildlife conservation parks",
      "The complete decentralization of all manufacturing industries to remote forests"
    ],
    correct_answer: "B",
    explanation: "Urbanization is the demographic, economic, and spatial process by which an increasing proportion of a country's total population becomes concentrated in cities and towns.",
    topic_name: "Urban Geography - Urbanization",
    instruction_category: "Geography"
  },
  {
    question_number: 59,
    question_text: "A city that is disproportionately larger than any other city in a country (often more than twice as large as the second-ranking city) and dominates national economic and political life is called a:",
    option_a: "Primate city",
    option_b: "Megalopolis",
    option_c: "Conurbation",
    option_d: "Edge city",
    options: ["Primate city", "Megalopolis", "Conurbation", "Edge city"],
    correct_answer: "A",
    explanation: "Mark Jefferson introduced the 'Law of the Primate City', defining a primate city as one that is overwhelmingly the largest in its country, expressing national capacity and culture (e.g., Addis Ababa in Ethiopia).",
    topic_name: "Urban Systems - Primacy",
    instruction_category: "Geography"
  },
  {
    question_number: 60,
    question_text: "A rural settlement pattern where houses are constructed in a continuous sequence along a transportation corridor, river bank, or canal is described as a:",
    option_a: "Dispersed settlement",
    option_b: "Nucleated circular settlement",
    option_c: "Grid-iron settlement",
    option_d: "Linear (ribbon) settlement",
    options: [
      "Dispersed settlement",
      "Nucleated circular settlement",
      "Grid-iron settlement",
      "Linear (ribbon) settlement"
    ],
    correct_answer: "D",
    explanation: "Linear (or ribbon) settlement patterns develop along major physical or transport axes such as roads, railways, coastlines, or river levees for accessibility.",
    topic_name: "Settlement Geography",
    instruction_category: "Geography"
  },
  {
    question_number: 61,
    question_text: "Which of the following economic sectors directly extracts raw materials from the Earth's natural environment?",
    option_a: "Primary sector (agriculture, mining, logging, fishing)",
    option_b: "Secondary sector (automobile manufacturing)",
    option_c: "Tertiary sector (banking, tourism)",
    option_d: "Quaternary sector (scientific research)",
    options: [
      "Primary sector (agriculture, mining, logging, fishing)",
      "Secondary sector (automobile manufacturing)",
      "Tertiary sector (banking, tourism)",
      "Quaternary sector (scientific research)"
    ],
    correct_answer: "A",
    explanation: "The primary sector encompasses economic activities that directly harvest or extract natural resources from the lithosphere, biosphere, and hydrosphere.",
    topic_name: "Economic Geography - Sectors of Economy",
    instruction_category: "Geography"
  },
  {
    question_number: 62,
    question_text: "The secondary sector of the economy is primarily concerned with:",
    option_a: "Extracting iron ore from mines",
    option_b: "Transforming raw materials into finished manufactured goods through industrial processing",
    option_c: "Providing legal and insurance services",
    option_d: "Managing telecommunication data networks",
    options: [
      "Extracting iron ore from mines",
      "Transforming raw materials into finished manufactured goods through industrial processing",
      "Providing legal and insurance services",
      "Managing telecommunication data networks"
    ],
    correct_answer: "B",
    explanation: "The secondary economic sector involves value-added manufacturing, construction, energy generation, and industrial processing of primary commodities into manufactured goods.",
    topic_name: "Manufacturing & Secondary Industry",
    instruction_category: "Geography"
  },
  {
    question_number: 63,
    question_text: "Which of the following activities belongs strictly to the Tertiary sector of an economy?",
    option_a: "Gold panning in a river bed",
    option_b: "Cotton spinning in a textile mill",
    option_c: "Tourism hospitality, healthcare services, and retail trade",
    option_d: "Wheat harvesting with a combine harvester",
    options: [
      "Gold panning in a river bed",
      "Cotton spinning in a textile mill",
      "Tourism hospitality, healthcare services, and retail trade",
      "Wheat harvesting with a combine harvester"
    ],
    correct_answer: "C",
    explanation: "The tertiary sector provides intangible services rather than goods, including transportation, wholesaling/retailing, tourism, healthcare, banking, education, and hospitality.",
    topic_name: "Tertiary Economic Sector",
    instruction_category: "Geography"
  },
  {
    question_number: 64,
    question_text: "Economic activities centered around information processing, software engineering, biotechnology, and advanced research are classified as:",
    option_a: "Primary sector",
    option_b: "Secondary sector",
    option_c: "Subsistence sector",
    option_d: "Quaternary sector",
    options: ["Primary sector", "Secondary sector", "Subsistence sector", "Quaternary sector"],
    correct_answer: "D",
    explanation: "The quaternary sector represents the knowledge-based component of the economy, including information technology, R&D, financial engineering, scientific consultancy, and strategic management.",
    topic_name: "Knowledge Economy & Quaternary Sector",
    instruction_category: "Geography"
  },
  {
    question_number: 65,
    question_text: "Intensive commercial agriculture is characterized by:",
    option_a: "High inputs of capital, fertilizer, labor, and technology per unit of land area to maximize yields",
    option_b: "Large expanses of land with minimal labor input per hectare",
    option_c: "Farming solely for household consumption without market sales",
    option_d: "Periodic abandonment of agricultural plots through slash-and-burn",
    options: [
      "High inputs of capital, fertilizer, labor, and technology per unit of land area to maximize yields",
      "Large expanses of land with minimal labor input per hectare",
      "Farming solely for household consumption without market sales",
      "Periodic abandonment of agricultural plots through slash-and-burn"
    ],
    correct_answer: "A",
    explanation: "Intensive agriculture maximizes crop yields from a relatively small land area through high capital investment, labor, machinery, fertilizer, pesticide, and irrigation inputs.",
    topic_name: "Agricultural Systems",
    instruction_category: "Geography"
  },
  {
    question_number: 66,
    question_text: "The traditional agricultural system known as 'shifting cultivation' (swidden or slash-and-burn) involves:",
    option_a: "Permanent automated greenhouse cultivation in suburbs",
    option_b: "Clearing a forest plot by cutting and burning, cultivating for a few years, and moving to a new plot when soil fertility declines",
    option_c: "Continuous monocropping on large commercial plantations using heavy combine harvesters",
    option_d: "Raising specialized dairy cattle on irrigated pastures",
    options: [
      "Permanent automated greenhouse cultivation in suburbs",
      "Clearing a forest plot by cutting and burning, cultivating for a few years, and moving to a new plot when soil fertility declines",
      "Continuous monocropping on large commercial plantations using heavy combine harvesters",
      "Raising specialized dairy cattle on irrigated pastures"
    ],
    correct_answer: "B",
    explanation: "Shifting cultivation (slash-and-burn) is an extensive subsistence farming system where forest vegetation is cleared and burned to enrich soil with ash; when nutrients deplete after 2-3 years, farmers shift to fallow plots.",
    topic_name: "Subsistence Farming Systems",
    instruction_category: "Geography"
  },
  {
    question_number: 67,
    question_text: "The 'Green Revolution' of the mid-20th century substantially boosted global cereal production through the adoption of:",
    option_a: "Traditional wooden hand-plows and organic manure alone",
    option_b: "Genetically modified wild grasses without water irrigation",
    option_c: "High-Yielding Variety (HYV) dwarf seeds, synthetic chemical fertilizers, pesticides, and controlled irrigation systems",
    option_d: "Complete reliance on natural rainfed subsistence practices",
    options: [
      "Traditional wooden hand-plows and organic manure alone",
      "Genetically modified wild grasses without water irrigation",
      "High-Yielding Variety (HYV) dwarf seeds, synthetic chemical fertilizers, pesticides, and controlled irrigation systems",
      "Complete reliance on natural rainfed subsistence practices"
    ],
    correct_answer: "C",
    explanation: "Pioneered by Norman Borlaug, the Green Revolution transformed agriculture across Asia and Latin America through modern technology packages consisting of HYVs of wheat/rice, synthetic fertilizers, chemical pest control, and expanded irrigation.",
    topic_name: "Agricultural Development - Green Revolution",
    instruction_category: "Geography"
  },
  {
    question_number: 68,
    question_text: "Subsistence agriculture is fundamentally defined as farming that is practiced:",
    option_a: "Primarily to satisfy the nutritional requirements of the farmer and their family, with little or no surplus for market sale",
    option_b: "Exclusively for export to international global commodity markets",
    option_c: "By multinational agribusiness conglomerates for corporate profit",
    option_d: "On hydroponic factory farms inside urban vertical towers",
    options: [
      "Primarily to satisfy the nutritional requirements of the farmer and their family, with little or no surplus for market sale",
      "Exclusively for export to international global commodity markets",
      "By multinational agribusiness conglomerates for corporate profit",
      "On hydroponic factory farms inside urban vertical towers"
    ],
    correct_answer: "A",
    explanation: "Subsistence agriculture produces food crops and livestock primarily for direct domestic consumption by the farming household, relying mainly on family labor and simple tools.",
    topic_name: "Agricultural Types",
    instruction_category: "Geography"
  },
  {
    question_number: 69,
    question_text: "Coffee arabica originated as a wild indigenous understory tree species in the highland montane rainforests of:",
    option_a: "Brazil",
    option_b: "Southwestern Ethiopia (Kaffa/Bonga region)",
    option_c: "Vietnam",
    option_d: "Colombia",
    options: ["Brazil", "Southwestern Ethiopia (Kaffa/Bonga region)", "Vietnam", "Colombia"],
    correct_answer: "B",
    explanation: "Coffee arabica is native to the southwestern highland tropical rainforests of Ethiopia (the historical Kaffa region), which holds the highest genetic diversity of wild Arabica coffee on Earth.",
    topic_name: "Geography of Agriculture - Cash Crops",
    instruction_category: "Geography"
  },
  {
    question_number: 70,
    question_text: "Which of the following commodities represent the leading agricultural exports generating foreign exchange for Ethiopia?",
    option_a: "Wheat, rice, and barley",
    option_b: "Palm oil, rubber, and cocoa",
    option_c: "Apples, grapes, and citrus fruits",
    option_d: "Coffee, oilseeds, pulses, cut flowers, and live animals/meat",
    options: [
      "Wheat, rice, and barley",
      "Palm oil, rubber, and cocoa",
      "Apples, grapes, and citrus fruits",
      "Coffee, oilseeds, pulses, cut flowers, and live animals/meat"
    ],
    correct_answer: "D",
    explanation: "Ethiopia's primary export earnings are generated by high-value agricultural commodities: Arabica coffee (accounting for 30-35%), oilseeds (sesame, niger seed), pulses (chickpeas, beans), floriculture (cut roses), and livestock/meat.",
    topic_name: "Ethiopia's Foreign Trade & Exports",
    instruction_category: "Geography"
  },
  {
    question_number: 71,
    question_text: "What constitutes the largest untapped and actively developed renewable energy source for electric power generation in Ethiopia?",
    option_a: "Hydropower (hydroelectric energy)",
    option_b: "Nuclear fission energy",
    option_c: "Anthracite coal combustion",
    option_d: "Offshore tidal wave power",
    options: [
      "Hydropower (hydroelectric energy)",
      "Nuclear fission energy",
      "Anthracite coal combustion",
      "Offshore tidal wave power"
    ],
    correct_answer: "A",
    explanation: "Due to its rugged topography, deep river canyons, and abundant rainfall, Ethiopia is known as the 'Water Tower of East Africa', possessing an estimated 45,000 MW of exploitable hydroelectric potential.",
    topic_name: "Energy Resources of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 72,
    question_text: "The Grand Ethiopian Renaissance Dam (GERD), the largest hydroelectric power project in Africa, is constructed on which river?",
    option_a: "Wabe Shebelle River",
    option_b: "Abay (Blue Nile) River in Benishangul-Gumuz Region",
    option_c: "Baro River in Gambella Region",
    option_d: "Omo River in Southern Region",
    options: [
      "Wabe Shebelle River",
      "Abay (Blue Nile) River in Benishangul-Gumuz Region",
      "Baro River in Gambella Region",
      "Omo River in Southern Region"
    ],
    correct_answer: "B",
    explanation: "GERD is a major gravity dam constructed on the Blue Nile (Abay River) in the Guba Woreda of the Benishangul-Gumuz Region, approximately 15 km east of the Sudanese border.",
    topic_name: "Mega Infrastructure Projects in Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 73,
    question_text: "A renewable natural resource is defined as a resource that:",
    option_a: "Can be replenished or regenerated naturally through physical or ecological cycles over human time scales",
    option_b: "Exists in strictly fixed, finite quantities that are permanently depleted once consumed",
    option_c: "Can only be created artificially in chemical laboratories",
    option_d: "Contains high quantities of radioactive isotopes",
    options: [
      "Can be replenished or regenerated naturally through physical or ecological cycles over human time scales",
      "Exists in strictly fixed, finite quantities that are permanently depleted once consumed",
      "Can only be created artificially in chemical laboratories",
      "Contains high quantities of radioactive isotopes"
    ],
    correct_answer: "A",
    explanation: "Renewable resources (such as solar radiation, wind energy, water, timber, and biomass) are naturally restored by biogeochemical processes if managed sustainably, in contrast to non-renewable fossil fuels.",
    topic_name: "Natural Resources Management",
    instruction_category: "Geography"
  },
  {
    question_number: 74,
    question_text: "The classic Brundtland Commission report (1987) defines 'Sustainable Development' as development that:",
    option_a: "Focuses exclusively on rapid industrialization without environmental regulations",
    option_b: "Halts all technological advancement to preserve raw wilderness unchanged",
    option_c: "Meets the needs of the present generation without compromising the ability of future generations to meet their own needs",
    option_d: "Prioritizes immediate resource extraction over future resource availability",
    options: [
      "Focuses exclusively on rapid industrialization without environmental regulations",
      "Halts all technological advancement to preserve raw wilderness unchanged",
      "Meets the needs of the present generation without compromising the ability of future generations to meet their own needs",
      "Prioritizes immediate resource extraction over future resource availability"
    ],
    correct_answer: "C",
    explanation: "Our Common Future (Brundtland Report, 1987) established that sustainable development harmonizes economic growth, social equity, and environmental conservation to safeguard intergenerational equity.",
    topic_name: "Sustainable Development",
    instruction_category: "Geography"
  },
  {
    question_number: 75,
    question_text: "Anthropogenic global climate change and global warming are driven primarily by:",
    option_a: "Excessive emissions of greenhouse gases (CO₂, CH₄, N₂O) from fossil fuel burning and land-use change",
    option_b: "Variations in lunar gravitational tides",
    option_c: "Underwater volcanic eruptions along deep abyssal trenches",
    option_d: "Decreased cosmic ray emissions from distant galaxies",
    options: [
      "Excessive emissions of greenhouse gases (CO₂, CH₄, N₂O) from fossil fuel burning and land-use change",
      "Variations in lunar gravitational tides",
      "Underwater volcanic eruptions along deep abyssal trenches",
      "Decreased cosmic ray emissions from distant galaxies"
    ],
    correct_answer: "A",
    explanation: "The scientific consensus shows that human industrial activities—primarily burning coal, oil, and gas, alongside deforestation—have raised atmospheric CO₂ from 280 ppm to over 420 ppm, enhancing the greenhouse effect and driving global warming.",
    topic_name: "Global Environmental Change - Climate Warming",
    instruction_category: "Geography"
  },
  {
    question_number: 76,
    question_text: "Acid precipitation (acid rain) is produced when industrial emissions of which atmospheric pollutants react with atmospheric water vapor?",
    option_a: "Pure oxygen (O₂) and nitrogen gas (N₂)",
    option_b: "Sulfur dioxide (SO₂) and nitrogen oxides (NOₓ)",
    option_c: "Helium (He) and Argon (Ar)",
    option_d: "Ozone (O₃) and hydrogen peroxide",
    options: [
      "Pure oxygen (O₂) and nitrogen gas (N₂)",
      "Sulfur dioxide (SO₂) and nitrogen oxides (NOₓ)",
      "Helium (He) and Argon (Ar)",
      "Ozone (O₃) and hydrogen peroxide"
    ],
    correct_answer: "B",
    explanation: "Combustion of fossil fuels releases SO₂ and NOₓ gases into the atmosphere, where they oxidize and react with water droplets to form sulfuric acid (H₂SO₄) and nitric acid (HNO₃), causing acid rain (pH < 5.6).",
    topic_name: "Atmospheric Pollution - Acid Rain",
    instruction_category: "Geography"
  },
  {
    question_number: 77,
    question_text: "The depletion of the stratospheric ozone layer was caused primarily by the historical industrial release of:",
    option_a: "Carbon monoxide from vehicles",
    option_b: "Methane from rice paddies",
    option_c: "Water vapor from thermal power plants",
    option_d: "Chlorofluorocarbons (CFCs) and halons used in refrigeration and aerosols",
    options: [
      "Carbon monoxide from vehicles",
      "Methane from rice paddies",
      "Water vapor from thermal power plants",
      "Chlorofluorocarbons (CFCs) and halons used in refrigeration and aerosols"
    ],
    correct_answer: "D",
    explanation: "CFCs rise into the stratosphere where UV radiation breaks them down, releasing reactive chlorine atoms that catalytically destroy thousands of ozone molecules, creating the Antarctic ozone hole.",
    topic_name: "Ozone Layer Depletion",
    instruction_category: "Geography"
  },
  {
    question_number: 78,
    question_text: "Desertification is defined by the United Nations Convention to Combat Desertification (UNCCD) as:",
    option_a: "Land degradation in arid, semi-arid, and dry sub-humid areas resulting from various factors, including climatic variations and human activities",
    option_b: "The natural movement of coastal sand dunes by tidal waves",
    option_c: "The intentional creation of botanical parks in city centers",
    option_d: "Flooding of low-lying plains by torrential rainstorms",
    options: [
      "Land degradation in arid, semi-arid, and dry sub-humid areas resulting from various factors, including climatic variations and human activities",
      "The natural movement of coastal sand dunes by tidal waves",
      "The intentional creation of botanical parks in city centers",
      "Flooding of low-lying plains by torrential rainstorms"
    ],
    correct_answer: "A",
    explanation: "Desertification is the persistent degradation of dryland ecosystems by overgrazing, deforestation, inappropriate irrigation, and recurring droughts, stripping the biological and economic productivity of land.",
    topic_name: "Dryland Degradation & Desertification",
    instruction_category: "Geography"
  },
  {
    question_number: 79,
    question_text: "The 'Great Green Wall' initiative in Africa is a pan-continental environmental project designed to:",
    option_a: "Construct a concrete defensive wall along national borders",
    option_b: "Pave green highways connecting North Africa to South Africa",
    option_c: "Restore 100 million hectares of degraded land and combat desertification across the Sahel-Sahara belt",
    option_d: "Subsidize petroleum exploration in coastal wetlands",
    options: [
      "Construct a concrete defensive wall along national borders",
      "Pave green highways connecting North Africa to South Africa",
      "Restore 100 million hectares of degraded land and combat desertification across the Sahel-Sahara belt",
      "Subsidize petroleum exploration in coastal wetlands"
    ],
    correct_answer: "C",
    explanation: "The Great Green Wall is an African Union flagship initiative stretching 8,000 km across the Sahel from Senegal to Djibouti, planting trees and practicing sustainable land management to combat land degradation and climate change.",
    topic_name: "African Environmental Initiatives",
    instruction_category: "Geography"
  },
  {
    question_number: 80,
    question_text: "Ecotourism is characterized as a form of tourism that:",
    option_a: "Builds high-rise casinos and mega-malls in pristine national parks",
    option_b: "Involves responsible travel to natural areas, conserving the environment, sustaining the well-being of local people, and involving interpretation/education",
    option_c: "Encourages trophy hunting of endangered wildlife species",
    option_d: "Focuses strictly on industrial factory tours in major metropolitan cities",
    options: [
      "Builds high-rise casinos and mega-malls in pristine national parks",
      "Involves responsible travel to natural areas, conserving the environment, sustaining the well-being of local people, and involving interpretation/education",
      "Encourages trophy hunting of endangered wildlife species",
      "Focuses strictly on industrial factory tours in major metropolitan cities"
    ],
    correct_answer: "B",
    explanation: "Ecotourism promotes low-impact, ecologically sustainable tourism that preserves natural ecosystems, provides direct financial benefits for local community conservation, and educates travelers.",
    topic_name: "Tourism Geography - Ecotourism",
    instruction_category: "Geography"
  },
  {
    question_number: 81,
    question_text: "A topographic map portrays three-dimensional land surface relief and elevation differences using:",
    option_a: "Contour lines (isohypses)",
    option_b: "Isobars",
    option_c: "Isotherms",
    option_d: "Choropleth color shading alone",
    options: ["Contour lines (isohypses)", "Isobars", "Isotherms", "Choropleth color shading alone"],
    correct_answer: "A",
    explanation: "Contour lines (lines of equal elevation above a datum, usually mean sea level) represent the configuration, slope, and height of the landscape on a 2D topographic map.",
    topic_name: "Topographic Mapping - Contours",
    instruction_category: "Geography"
  },
  {
    question_number: 82,
    question_text: "On a meteorological weather map, a line connecting geographic points that receive equal amounts of rainfall/precipitation over a given period is called an:",
    option_a: "Isobar",
    option_b: "Isohyet",
    option_c: "Isotherm",
    option_d: "Isohypse",
    options: ["Isobar", "Isohyet", "Isotherm", "Isohypse"],
    correct_answer: "B",
    explanation: "An isohyet is an isoline drawn on a weather map connecting locations that receive equal amounts of precipitation over a designated time period.",
    topic_name: "Meteorological Isolines",
    instruction_category: "Geography"
  },
  {
    question_number: 83,
    question_text: "An isoline drawn on a climatological map that connects locations experiencing the same mean atmospheric temperature is termed an:",
    option_a: "Isochron",
    option_b: "Isohaline",
    option_c: "Isotherm",
    option_d: "Isoquant",
    options: ["Isochron", "Isohaline", "Isotherm", "Isoquant"],
    correct_answer: "C",
    explanation: "An isotherm is a line on a map or chart connecting points having the same temperature at a given time or on average over a given period.",
    topic_name: "Climatology - Isotherms",
    instruction_category: "Geography"
  },
  {
    question_number: 84,
    question_text: "A line on a weather synoptic chart connecting points of equal atmospheric barometric pressure is known as an:",
    option_a: "Isohel",
    option_b: "Isotach",
    option_c: "Isoneph",
    option_d: "Isobar",
    options: ["Isohel", "Isotach", "Isoneph", "Isobar"],
    correct_answer: "D",
    explanation: "Isobars connect points of equal atmospheric pressure (adjusted to sea-level equivalent); closely packed isobars indicate a steep pressure gradient and high wind speeds.",
    topic_name: "Synoptic Meteorology - Isobars",
    instruction_category: "Geography"
  },
  {
    question_number: 85,
    question_text: "In satellite remote sensing, 'spatial resolution' refers to:",
    option_a: "The smallest ground feature size that can be resolved and represented by a single image pixel",
    option_b: "The number of spectral bands a sensor can capture",
    option_c: "The time it takes for a satellite to orbit the Earth once",
    option_d: "The number of bits used to record the digital signal intensity",
    options: [
      "The smallest ground feature size that can be resolved and represented by a single image pixel",
      "The number of spectral bands a sensor can capture",
      "The time it takes for a satellite to orbit the Earth once",
      "The number of bits used to record the digital signal intensity"
    ],
    correct_answer: "A",
    explanation: "Spatial resolution specifies pixel ground dimension (e.g., 30m for Landsat, 10m for Sentinel-2, 0.5m for WorldView). High spatial resolution resolves smaller objects on the Earth's surface.",
    topic_name: "Remote Sensing Principles",
    instruction_category: "Geography"
  },
  {
    question_number: 86,
    question_text: "In Geographic Information Systems (GIS), the data model that represents spatial geography as a regular matrix of grid cells (pixels) with assigned values is called the:",
    option_a: "Vector data model",
    option_b: "Raster data model",
    option_c: "Relational database table",
    option_d: "Topology graph",
    options: ["Vector data model", "Raster data model", "Relational database table", "Topology graph"],
    correct_answer: "B",
    explanation: "The raster data model structures continuous spatial phenomena (like satellite imagery, digital elevation models, and land surface temperature) as a continuous matrix of equal-sized rows and columns of grid cells.",
    topic_name: "GIS Data Models - Raster & Vector",
    instruction_category: "Geography"
  },
  {
    question_number: 87,
    question_text: "In GIS, discrete geographic entities such as roads (lines), city locations (points), and administrative boundaries (polygons) are represented by the:",
    option_a: "Grid-mesh model",
    option_b: "Digital Elevation Model (DEM)",
    option_c: "Vector data model",
    option_d: "Pixel matrix",
    options: ["Grid-mesh model", "Digital Elevation Model (DEM)", "Vector data model", "Pixel matrix"],
    correct_answer: "C",
    explanation: "The vector data model uses explicit coordinate pairs (X, Y) to represent spatial geometries as points (0D), polylines (1D), and polygons/areas (2D) with linked attribute tables.",
    topic_name: "Vector GIS Structures",
    instruction_category: "Geography"
  },
  {
    question_number: 88,
    question_text: "The cartographic process of simplifying, selecting, smoothing, and aggregating detailed geographic features to maintain clarity when reducing map scale is called:",
    option_a: "Map projection",
    option_b: "Georeferencing",
    option_c: "Photogrammetry",
    option_d: "Cartographic Generalization",
    options: [
      "Map projection",
      "Georeferencing",
      "Photogrammetry",
      "Cartographic Generalization"
    ],
    correct_answer: "D",
    explanation: "Cartographic generalization simplifies real-world complexities so that a smaller-scale map remains legible, visually balanced, and functionally informative without overcrowding.",
    topic_name: "Cartographic Design",
    instruction_category: "Geography"
  },
  {
    question_number: 89,
    question_text: "Which category of map projection is best suited for mapping mid-latitude regions with predominantly east-west territorial elongation (such as the United States or Europe)?",
    option_a: "Conic projection (e.g., Lambert Conformal Conic)",
    option_b: "Cylindrical Mercator projection",
    option_c: "Azimuthal polar projection",
    option_d: "Gnomonic projection",
    options: [
      "Conic projection (e.g., Lambert Conformal Conic)",
      "Cylindrical Mercator projection",
      "Azimuthal polar projection",
      "Gnomonic projection"
    ],
    correct_answer: "A",
    explanation: "Conic map projections conceptualize projecting the Earth onto a tangent or secant cone, minimizing distortion along standard parallels in mid-latitude zones with broad east-west extents.",
    topic_name: "Map Projections",
    instruction_category: "Geography"
  },
  {
    question_number: 90,
    question_text: "What is the primary cartographic distortion inherent in the standard cylindrical Mercator projection?",
    option_a: "Shapes are completely distorted at the Equator.",
    option_b: "Area is severely exaggerated at high latitudes towards the poles (e.g., Greenland appears larger than Africa).",
    option_c: "Compass navigation rhumb lines are plotted as complex spiral curves.",
    option_d: "Distances along the Equator are reduced to zero.",
    options: [
      "Shapes are completely distorted at the Equator.",
      "Area is severely exaggerated at high latitudes towards the poles (e.g., Greenland appears larger than Africa).",
      "Compass navigation rhumb lines are plotted as complex spiral curves.",
      "Distances along the Equator are reduced to zero."
    ],
    correct_answer: "B",
    explanation: "While the Mercator projection is conformal (preserving local angles and compass bearings for maritime navigation), its area scale increases infinitely towards the poles, vastly exaggerating the size of high-latitude landmasses.",
    topic_name: "Map Projection Distortions",
    instruction_category: "Geography"
  },
  {
    question_number: 91,
    question_text: "Physiographically, the Ethiopian landmass is divided into Highlands and Lowlands based on which conventional elevation contour threshold?",
    option_a: "500 meters",
    option_b: "1,000 meters",
    option_c: "1,500 meters",
    option_d: "3,000 meters",
    options: ["500 meters", "1,000 meters", "1,500 meters", "3,000 meters"],
    correct_answer: "C",
    explanation: "In Ethiopian geography, land above the 1,500-meter contour line is defined as Highlands (High Plateau accounting for ~56% of the country), while land below 1,500 meters constitutes the Lowlands.",
    topic_name: "Physiography of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 92,
    question_text: "The Main Ethiopian Rift (MER) was formed by which tectonic mechanism?",
    option_a: "Tensional tectonic stress pulling the African and Arabian plates apart, causing crustal rifting and graben subsidence",
    option_b: "Compressional folding creating alpine nappes",
    option_c: "Glacial erosion scouring deep bedrock trenches",
    option_d: "Meteorite impact cratering",
    options: [
      "Tensional tectonic stress pulling the African and Arabian plates apart, causing crustal rifting and graben subsidence",
      "Compressional folding creating alpine nappes",
      "Glacial erosion scouring deep bedrock trenches",
      "Meteorite impact cratering"
    ],
    correct_answer: "A",
    explanation: "Extensional tectonic forces driven by mantle plumes pulled the Nubian and Somalian sub-plates apart, faulting the Earth's crust along parallel faults and forming the subsiding central rift graben.",
    topic_name: "Geology of the Ethiopian Rift",
    instruction_category: "Geography"
  },
  {
    question_number: 93,
    question_text: "The Danakil (Afar) Depression in northeastern Ethiopia is globally renowned for which unique geographic features?",
    option_a: "Dense tropical rainforests with heavy annual snowfall",
    option_b: "Alpine glacial tarns located at 4,000 meters above sea level",
    option_c: "Perennial sub-zero temperatures and tundra vegetation",
    option_d: "Being one of the hottest places on Earth, containing areas below sea level (Kobar Sink at -125m) and active shield volcanoes like Erta Ale",
    options: [
      "Dense tropical rainforests with heavy annual snowfall",
      "Alpine glacial tarns located at 4,000 meters above sea level",
      "Perennial sub-zero temperatures and tundra vegetation",
      "Being one of the hottest places on Earth, containing areas below sea level (Kobar Sink at -125m) and active shield volcanoes like Erta Ale"
    ],
    correct_answer: "D",
    explanation: "The Danakil Depression is a hyper-arid tectonic triple junction containing the Kobar Sink (-125 m below sea level), geothermal sulfur springs at Dallol, and the continuously active lava lake of Erta Ale volcano.",
    topic_name: "Afar Triangle & Danakil Depression",
    instruction_category: "Geography"
  },
  {
    question_number: 94,
    question_text: "Which agricultural commodity remains the dominant single source of foreign exchange revenue for Ethiopia?",
    option_a: "Coffee",
    option_b: "Tea",
    option_c: "Sugar cane",
    option_d: "Natural rubber",
    options: ["Coffee", "Tea", "Sugar cane", "Natural rubber"],
    correct_answer: "A",
    explanation: "Coffee is Ethiopia's most valuable export crop, generating over $1.3 billion annually and supporting the livelihoods of an estimated 15 million citizens across the supply chain.",
    topic_name: "Ethiopian Export Economy",
    instruction_category: "Geography"
  },
  {
    question_number: 95,
    question_text: "The settlement distribution in the Ethiopian Highlands is historically characterized by:",
    option_a: "Dense coastal ports and seaside canal towns",
    option_b: "Dispersed homesteads and nucleated hilltop villages situated to avoid malaria-prone lowlands",
    option_c: "Nomadic tent encampments following desert dunes",
    option_d: "Subterranean cave complexes below sea level",
    options: [
      "Dense coastal ports and seaside canal towns",
      "Dispersed homesteads and nucleated hilltop villages situated to avoid malaria-prone lowlands",
      "Nomadic tent encampments following desert dunes",
      "Subterranean cave complexes below sea level"
    ],
    correct_answer: "B",
    explanation: "Due to favorable temperate climate, reliable rainfall, and freedom from tropical diseases (like malaria and trypanosomiasis), over 80% of Ethiopia's population settled in highland village massifs.",
    topic_name: "Population Distribution of Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 96,
    question_text: "In Ethiopia, agro-ecological zoning is primarily determined by the interaction between which two dominant geographic variables?",
    option_a: "Soil salinity and ocean tidal currents",
    option_b: "Longitude and lunar orbital phase",
    option_c: "Altitude (elevation) and thermal/moisture regimes (rainfall)",
    option_d: "Wind vane azimuth and barometric tide",
    options: [
      "Soil salinity and ocean tidal currents",
      "Longitude and lunar orbital phase",
      "Altitude (elevation) and thermal/moisture regimes (rainfall)",
      "Wind vane azimuth and barometric tide"
    ],
    correct_answer: "C",
    explanation: "Altitude heavily modifies temperature (lapse rate) and rainfall patterns across Ethiopia's complex terrain, serving as the foundational determinant of agro-ecological zones and cropping systems.",
    topic_name: "Agro-Ecological Zones",
    instruction_category: "Geography"
  },
  {
    question_number: 97,
    question_text: "What is the most severe and widespread environmental land degradation challenge affecting agricultural productivity in the Ethiopian Highlands?",
    option_a: "Severe soil erosion and loss of fertile topsoil caused by steep slopes, deforestation, and heavy rains",
    option_b: "Sea-level rise inundating crop fields",
    option_c: "Glacial moraine deposition burying villages",
    option_d: "Permafrost melting collapsing farm buildings",
    options: [
      "Severe soil erosion and loss of fertile topsoil caused by steep slopes, deforestation, and heavy rains",
      "Sea-level rise inundating crop fields",
      "Glacial moraine deposition burying villages",
      "Permafrost melting collapsing farm buildings"
    ],
    correct_answer: "A",
    explanation: "High population pressure, steep cultivated slopes, loss of tree canopy, and torrential monsoon downpours cause massive topsoil erosion, costing Ethiopia billions of tons of fertile soil annually.",
    topic_name: "Environmental Issues in Ethiopia",
    instruction_category: "Geography"
  },
  {
    question_number: 98,
    question_text: "The Sustainable Land Management Program (SLMP) implemented across various Ethiopian regional states focuses on:",
    option_a: "Clearing all natural forests to expand urban cement factories",
    option_b: "Community-based integrated watershed management, physical soil bunds, terracing, and re-vegetation",
    option_c: "Constructing thermal coal power plants in wildlife sanctuaries",
    option_d: "Converting highland rivers into artificial saltwater lakes",
    options: [
      "Clearing all natural forests to expand urban cement factories",
      "Community-based integrated watershed management, physical soil bunds, terracing, and re-vegetation",
      "Constructing thermal coal power plants in wildlife sanctuaries",
      "Converting highland rivers into artificial saltwater lakes"
    ],
    correct_answer: "B",
    explanation: "SLMP is a nationwide initiative promoting sustainable land management through community watershed restoration, biological stabilization, check dams, stone/soil bunds, and agroforestry.",
    topic_name: "Sustainable Resource Management",
    instruction_category: "Geography"
  },
  {
    question_number: 99,
    question_text: "The ranking and structural organization of human settlements in a country according to population size, economic functions, and service sphere of influence is known as the:",
    option_a: "Urban hierarchy (Central Place hierarchy)",
    option_b: "Demographic transition",
    option_c: "Gentrification index",
    option_d: "Concentric zone radius",
    options: [
      "Urban hierarchy (Central Place hierarchy)",
      "Demographic transition",
      "Gentrification index",
      "Concentric zone radius"
    ],
    correct_answer: "A",
    explanation: "An urban hierarchy classifies urban centers into hierarchical tiers (hamlet, village, town, regional city, national primate city) based on population threshold, functional complexity, and central place services.",
    topic_name: "Urban Systems & Settlement Hierarchy",
    instruction_category: "Geography"
  },
  {
    question_number: 100,
    question_text: "In contemporary economic geography, 'Globalization' refers to:",
    option_a: "The complete isolation of national economies behind impenetrable trade barriers",
    option_b: "The restriction of all cultural communication to local tribal dialects",
    option_c: "The increasing interconnectedness, integration, and interdependence of world economies, cultures, financial markets, and technologies across international borders",
    option_d: "The elimination of global shipping networks in favor of horse carts",
    options: [
      "The complete isolation of national economies behind impenetrable trade barriers",
      "The restriction of all cultural communication to local tribal dialects",
      "The increasing interconnectedness, integration, and interdependence of world economies, cultures, financial markets, and technologies across international borders",
      "The elimination of global shipping networks in favor of horse carts"
    ],
    correct_answer: "C",
    explanation: "Globalization is the ongoing process of accelerating worldwide interconnectedness and integration across economies, trade, capital flows, information technology, and cultural exchange.",
    topic_name: "Global Economic Systems",
    instruction_category: "Geography"
  }
];

module.exports = questions;
