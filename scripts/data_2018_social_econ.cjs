/**
 * 2018 E.C. Economics Exam - EUEE Social Science Stream
 * Booklet Code: 561 - 100 Questions Complete with Answers & In-Depth Economic Explanations
 */

const questions = [
  {
    question_number: 1,
    question_text: "The fundamental economic problem that forms the foundation of all economic inquiry across all human societies is:",
    option_a: "The scarcity of productive economic resources relative to unlimited human wants and needs",
    option_b: "The overproduction of luxury manufactured consumer goods",
    option_c: "The complete absence of physical paper currency in commercial banks",
    option_d: "The existence of international maritime shipping tariffs",
    options: [
      "The scarcity of productive economic resources relative to unlimited human wants and needs",
      "The overproduction of luxury manufactured consumer goods",
      "The complete absence of physical paper currency in commercial banks",
      "The existence of international maritime shipping tariffs"
    ],
    correct_answer: "A",
    explanation: "Scarcity is the universal condition that human wants and desires exceed the finite productive resources (land, labor, capital, entrepreneurship) available to satisfy them, necessitating choice and allocation.",
    topic_name: "The Fundamental Economic Problem - Scarcity",
    instruction_category: "Economics"
  },
  {
    question_number: 2,
    question_text: "The concept of 'Opportunity Cost' is scientifically defined in economic decision-making as:",
    option_a: "The total monetary cash paid for purchasing a new commercial product",
    option_b: "The accounting profit recorded on a corporate balance sheet",
    option_c: "The value of the next best alternative that is forgone or sacrificed when making a choice",
    option_d: "The average historical cost of raw material inputs",
    options: [
      "The total monetary cash paid for purchasing a new commercial product",
      "The accounting profit recorded on a corporate balance sheet",
      "The value of the next best alternative that is forgone or sacrificed when making a choice",
      "The average historical cost of raw material inputs"
    ],
    correct_answer: "C",
    explanation: "Opportunity cost measures the real economic cost of any decision by evaluating the highest-valued forgone alternative (e.g., studying for an exam rather than earning wages at work).",
    topic_name: "Opportunity Cost & Trade-offs",
    instruction_category: "Economics"
  },
  {
    question_number: 3,
    question_text: "On a Production Possibility Curve (PPC / PPF), an economic output combination that lies strictly inside the frontier curve signifies:",
    option_a: "An unattainable production level with current technology",
    option_b: "Inefficient production characterized by unemployment, underemployment, or misallocation of available economic resources",
    option_c: "Maximum potential productive efficiency",
    option_d: "A state of hyper-inflation in the national economy",
    options: [
      "An unattainable production level with current technology",
      "Inefficient production characterized by unemployment, underemployment, or misallocation of available economic resources",
      "Maximum potential productive efficiency",
      "A state of hyper-inflation in the national economy"
    ],
    correct_answer: "B",
    explanation: "Points on the PPC represent productive efficiency (full employment); points inside indicate idle resources or inefficient allocation; points outside are currently unattainable without economic growth or technological progress.",
    topic_name: "Production Possibility Frontier (PPF)",
    instruction_category: "Economics"
  },
  {
    question_number: 4,
    question_text: "The 'Law of Demand' states that, holding all other factors constant (ceteris paribus):",
    option_a: "There is an inverse (negative) relationship between the price of a good and the quantity demanded of that good",
    option_b: "As the price of a good rises, consumers will buy more of that good",
    option_c: "Price changes have no effect on consumer purchasing volume",
    option_d: "Higher consumer income always reduces quantity demanded",
    options: [
      "There is an inverse (negative) relationship between the price of a good and the quantity demanded of that good",
      "As the price of a good rises, consumers will buy more of that good",
      "Price changes have no effect on consumer purchasing volume",
      "Higher consumer income always reduces quantity demanded"
    ],
    correct_answer: "A",
    explanation: "Under the Law of Demand (ceteris paribus), as price ($P$) increases, quantity demanded ($Q_d$) decreases, and as price falls, quantity demanded rises due to substitution and income effects.",
    topic_name: "Theory of Demand & Law of Demand",
    instruction_category: "Economics"
  },
  {
    question_number: 5,
    question_text: "The 'Law of Supply' states that, ceteris paribus:",
    option_a: "Producers supply less when the market price rises",
    option_b: "Supply is determined entirely by consumer preferences",
    option_c: "Price and quantity supplied are inversely related",
    option_d: "There is a direct (positive) relationship between the price of a good and the quantity producers are willing and able to supply to the market",
    options: [
      "Producers supply less when the market price rises",
      "Supply is determined entirely by consumer preferences",
      "Price and quantity supplied are inversely related",
      "There is a direct (positive) relationship between the price of a good and the quantity producers are willing and able to supply to the market"
    ],
    correct_answer: "D",
    explanation: "Because higher market prices incentivize higher profit margins, producers increase the quantity supplied ($Q_s$) when price ($P$) increases, yielding an upward-sloping supply curve.",
    topic_name: "Theory of Supply & Law of Supply",
    instruction_category: "Economics"
  },
  {
    question_number: 6,
    question_text: "In a competitive free market, 'Market Equilibrium' occurs at the unique price point where:",
    option_a: "Quantity demanded exceeds quantity supplied creating a perpetual shortage",
    option_b: "The quantity demanded by consumers exactly equals the quantity supplied by producers ($Q_d = Q_s$)",
    option_c: "The government fixes the price above production costs",
    option_d: "Total consumer surplus is zero",
    options: [
      "Quantity demanded exceeds quantity supplied creating a perpetual shortage",
      "The quantity demanded by consumers exactly equals the quantity supplied by producers ($Q_d = Q_s$)",
      "The government fixes the price above production costs",
      "Total consumer surplus is zero"
    ],
    correct_answer: "B",
    explanation: "Market equilibrium is the price-quantity coordinate where demand and supply curves intersect ($Q_d = Q_s$), clearing the market without shortages (excess demand) or surpluses (excess supply).",
    topic_name: "Market Equilibrium & Price Determination",
    instruction_category: "Economics"
  },
  {
    question_number: 7,
    question_text: "If a 10% increase in the price of a good leads to a 25% decrease in the quantity demanded of that good, the Price Elasticity of Demand ($E_d$) is equal to:",
    option_a: "-2.5 (Demand is Price Elastic)",
    option_b: "-0.4 (Demand is Price Inelastic)",
    option_c: "-1.0 (Demand is Unitary Elastic)",
    option_d: "0 (Demand is Perfectly Inelastic)",
    options: [
      "-2.5 (Demand is Price Elastic)",
      "-0.4 (Demand is Price Inelastic)",
      "-1.0 (Demand is Unitary Elastic)",
      "0 (Demand is Perfectly Inelastic)"
    ],
    correct_answer: "A",
    explanation: "Price Elasticity of Demand $E_d = \\frac{\\% \\Delta Q_d}{\\% \\Delta P} = \\frac{-25\\%}{+10\\%} = -2.5$. Since $|E_d| = 2.5 > 1$, demand is price elastic (highly responsive to price changes).",
    topic_name: "Price Elasticity of Demand Calculation",
    instruction_category: "Economics"
  },
  {
    question_number: 8,
    question_text: "If the Cross-Price Elasticity of Demand between Good X and Good Y is positive ($E_{xy} > 0$), it demonstrates that Goods X and Y are:",
    option_a: "Complementary goods (consumed together)",
    option_b: "Inferior goods",
    option_c: "Substitute goods (consumed in place of one another, like tea and coffee)",
    option_d: "Completely unrelated independent goods",
    options: [
      "Complementary goods (consumed together)",
      "Inferior goods",
      "Substitute goods (consumed in place of one another, like tea and coffee)",
      "Completely unrelated independent goods"
    ],
    correct_answer: "C",
    explanation: "A positive cross-price elasticity ($E_{xy} > 0$) means an increase in the price of Good Y causes an increase in the demand for Good X, identifying them as substitute goods.",
    topic_name: "Cross-Price Elasticity of Demand",
    instruction_category: "Economics"
  },
  {
    question_number: 9,
    question_text: "A good is classified as an 'Inferior Good' in microeconomic consumer theory when its Income Elasticity of Demand ($E_I$) is:",
    option_a: "Greater than 1 ($E_I > 1$)",
    option_b: "Negative ($E_I < 0$), meaning demand decreases as consumer income increases",
    option_c: "Equal to zero ($E_I = 0$)",
    option_d: "Between 0 and 1 ($0 < E_I < 1$)",
    options: [
      "Greater than 1 ($E_I > 1$)",
      "Negative ($E_I < 0$), meaning demand decreases as consumer income increases",
      "Equal to zero ($E_I = 0$)",
      "Between 0 and 1 ($0 < E_I < 1$)"
    ],
    correct_answer: "B",
    explanation: "For an inferior good (e.g., low-grade staples), higher household income leads consumers to substitute toward higher-quality alternatives, resulting in a negative income elasticity ($E_I < 0$).",
    topic_name: "Income Elasticity & Good Classifications",
    instruction_category: "Economics"
  },
  {
    question_number: 10,
    question_text: "A government-imposed 'Price Ceiling' set legally below the market equilibrium price leads to:",
    option_a: "A persistent market shortage (excess demand where $Q_d > Q_s$)",
    option_b: "A market surplus of unsold goods",
    option_c: "An immediate expansion in producer profits",
    option_d: "Complete elimination of black markets",
    options: [
      "A persistent market shortage (excess demand where $Q_d > Q_s$)",
      "A market surplus of unsold goods",
      "An immediate expansion in producer profits",
      "Complete elimination of black markets"
    ],
    correct_answer: "A",
    explanation: "A binding price ceiling holds prices below equilibrium, causing buyers to demand more while sellers supply less, generating a chronic shortage ($Q_d > Q_s$), rationing, and informal black markets.",
    topic_name: "Government Price Controls - Price Ceilings",
    instruction_category: "Economics"
  },
  {
    question_number: 11,
    question_text: "A legally mandated 'Price Floor' (such as an agricultural minimum support price or minimum wage) set above the equilibrium price results in:",
    option_a: "A severe commodity shortage",
    option_b: "An increase in quantity demanded",
    option_c: "A reduction in supplier revenue",
    option_d: "A market surplus (excess supply where $Q_s > Q_d$)",
    options: [
      "A severe commodity shortage",
      "An increase in quantity demanded",
      "A reduction in supplier revenue",
      "A market surplus (excess supply where $Q_s > Q_d$)"
    ],
    correct_answer: "D",
    explanation: "A binding price floor sets a legal minimum above market equilibrium, encouraging producers to supply more while discouraging consumer demand, resulting in excess supply/surplus ($Q_s > Q_d$).",
    topic_name: "Price Controls - Price Floors & Minimum Wage",
    instruction_category: "Economics"
  },
  {
    question_number: 12,
    question_text: "The 'Law of Diminishing Marginal Utility' states that as a consumer consumes successive units of a given commodity within a given time period:",
    option_a: "Total utility continuously declines from the very first unit",
    option_b: "The additional satisfaction or utility derived from each additional unit consumed progressively decreases",
    option_c: "Marginal utility remains constant forever",
    option_d: "Price automatically increases to infinity",
    options: [
      "Total utility continuously declines from the very first unit",
      "The additional satisfaction or utility derived from each additional unit consumed progressively decreases",
      "Marginal utility remains constant forever",
      "Price automatically increases to infinity"
    ],
    correct_answer: "B",
    explanation: "While total utility may increase at a decreasing rate, each additional (marginal) unit consumed yields less additional satisfaction ($MU = \\Delta TU / \\Delta Q$ decreases), explaining downward-sloping demand curves.",
    topic_name: "Cardinal Utility Theory - Diminishing Marginal Utility",
    instruction_category: "Economics"
  },
  {
    question_number: 13,
    question_text: "Under Cardinal Utility Theory, a rational consumer maximizes total utility subject to a budget constraint when which condition is satisfied across all goods?",
    option_a: "$\\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} = ... = \\frac{MU_n}{P_n}$ (The equimarginal principle)",
    option_b: "$MU_x \\times P_x = MU_y \\times P_y$",
    option_c: "$P_x + P_y = 0$",
    option_d: "$TU_x = TU_y$",
    options: [
      "$\\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} = ... = \\frac{MU_n}{P_n}$ (The equimarginal principle)",
      "$MU_x \\times P_x = MU_y \\times P_y$",
      "$P_x + P_y = 0$",
      "$TU_x = TU_y$"
    ],
    correct_answer: "A",
    explanation: "Consumer equilibrium is attained when the marginal utility per birr spent is equalized across all purchased goods ($\\frac{MU_x}{P_x} = \\frac{MU_y}{P_y}$) and the entire budget is exhausted.",
    topic_name: "Consumer Utility Maximization",
    instruction_category: "Economics"
  },
  {
    question_number: 14,
    question_text: "Which of the following is a standard geometric property of an 'Indifference Curve' in ordinal utility analysis?",
    option_a: "Indifference curves are concave to the origin",
    option_b: "Indifference curves intersect each other at right angles",
    option_c: "Indifference curves are downward-sloping from left to right and convex to the origin due to diminishing Marginal Rate of Substitution ($MRS_{xy}$)",
    option_d: "Lower indifference curves represent higher levels of consumer satisfaction",
    options: [
      "Indifference curves are concave to the origin",
      "Indifference curves intersect each other at right angles",
      "Indifference curves are downward-sloping from left to right and convex to the origin due to diminishing Marginal Rate of Substitution ($MRS_{xy}$)",
      "Lower indifference curves represent higher levels of consumer satisfaction"
    ],
    correct_answer: "C",
    explanation: "Indifference curves show combinations of two goods yielding equal total utility; they slope downward, are convex to the origin ($MRS_{xy}$ diminishes), cannot intersect, and higher curves denote higher utility.",
    topic_name: "Ordinal Utility & Indifference Curve Analysis",
    instruction_category: "Economics"
  },
  {
    question_number: 15,
    question_text: "In classical economics, the four primary 'Factors of Production' and their respective factor rewards are correctly paired as:",
    option_a: "Land (Wages), Labor (Rent), Capital (Profit), Entrepreneurship (Interest)",
    option_b: "Land (Interest), Labor (Profit), Capital (Wages), Entrepreneurship (Rent)",
    option_c: "Land (Taxes), Labor (Subsidies), Capital (Tariffs), Entrepreneurship (Dividends)",
    option_d: "Land (Rent), Labor (Wages), Capital (Interest), Entrepreneurship (Profit)",
    options: [
      "Land (Wages), Labor (Rent), Capital (Profit), Entrepreneurship (Interest)",
      "Land (Interest), Labor (Profit), Capital (Wages), Entrepreneurship (Rent)",
      "Land (Taxes), Labor (Subsidies), Capital (Tariffs), Entrepreneurship (Dividends)",
      "Land (Rent), Labor (Wages), Capital (Interest), Entrepreneurship (Profit)"
    ],
    correct_answer: "D",
    explanation: "Economic factors of production are remunerated by factor incomes: natural resources/land receive Rent; human labor receives Wages; physical capital receives Interest; and entrepreneurial innovation/risk-taking receives Profit.",
    topic_name: "Factors of Production & Factor Incomes",
    instruction_category: "Economics"
  },
  {
    question_number: 16,
    question_text: "The 'Law of Diminishing Marginal Returns' operates in short-run production when:",
    option_a: "Successive units of a variable input (labor) are added to fixed inputs (capital/land), causing the marginal product ($MP_L$) of the variable input to eventually decline",
    option_b: "All inputs are increased proportionally in the long run",
    option_c: "Total output immediately drops to zero",
    option_d: "Capital machinery is doubled every month",
    options: [
      "Successive units of a variable input (labor) are added to fixed inputs (capital/land), causing the marginal product ($MP_L$) of the variable input to eventually decline",
      "All inputs are increased proportionally in the long run",
      "Total output immediately drops to zero",
      "Capital machinery is doubled every month"
    ],
    correct_answer: "A",
    explanation: "In the short run, because plant capacity and capital are fixed, adding more workers beyond a certain threshold causes overcrowding and less capital per worker, reducing Marginal Product ($MP_L$).",
    topic_name: "Short-Run Production - Diminishing Returns",
    instruction_category: "Economics"
  },
  {
    question_number: 17,
    question_text: "In microeconomic short-run cost theory, Total Cost ($TC$) is the sum of:",
    option_a: "Average Cost and Marginal Cost",
    option_b: "Total Fixed Cost ($TFC$) and Total Variable Cost ($TVC$)",
    option_c: "Accounting Profit and Economic Loss",
    option_d: "Gross Revenue and Taxes",
    options: [
      "Average Cost and Marginal Cost",
      "Total Fixed Cost ($TFC$) and Total Variable Cost ($TVC$)",
      "Accounting Profit and Economic Loss",
      "Gross Revenue and Taxes"
    ],
    correct_answer: "B",
    explanation: "Total Cost is composed of Total Fixed Costs ($TFC$, which do not change with output level, e.g. rent) plus Total Variable Costs ($TVC$, which vary directly with output, e.g. labor and raw materials): $TC = TFC + TVC$.",
    topic_name: "Cost Theory - Short-Run Cost Structures",
    instruction_category: "Economics"
  },
  {
    question_number: 18,
    question_text: "What is the exact mathematical and graphical relationship between Marginal Cost ($MC$) and Average Total Cost ($ATC$)?",
    option_a: "$MC$ lies above $ATC$ at all output levels",
    option_b: "$MC$ is completely horizontal while $ATC$ is vertical",
    option_c: "$MC$ intersects both Average Total Cost ($ATC$) and Average Variable Cost ($AVC$) at their respective minimum points",
    option_d: "$MC$ never intersects the $ATC$ curve",
    options: [
      "$MC$ lies above $ATC$ at all output levels",
      "$MC$ is completely horizontal while $ATC$ is vertical",
      "$MC$ intersects both Average Total Cost ($ATC$) and Average Variable Cost ($AVC$) at their respective minimum points",
      "$MC$ never intersects the $ATC$ curve"
    ],
    correct_answer: "C",
    explanation: "When $MC < ATC$, it pulls $ATC$ downward; when $MC > ATC$, it pulls $ATC$ upward; hence $MC$ cuts the $ATC$ (and $AVC$) curve precisely at its lowest (minimum) turning point.",
    topic_name: "Cost Curves Relationships - MC and ATC",
    instruction_category: "Economics"
  },
  {
    question_number: 19,
    question_text: "Which of the following is a core structural feature of a 'Perfect Competition' market structure?",
    option_a: "A large number of buyers and sellers, homogeneous (identical) products, free entry and exit of firms, and firms are price takers ($P = MR = AR$)",
    option_b: "A single dominant seller setting high monopoly prices",
    option_c: "Heavy expenditure on differentiated brand advertising",
    option_d: "High legal barriers preventing new firms from entering the industry",
    options: [
      "A large number of buyers and sellers, homogeneous (identical) products, free entry and exit of firms, and firms are price takers ($P = MR = AR$)",
      "A single dominant seller setting high monopoly prices",
      "Heavy expenditure on differentiated brand advertising",
      "High legal barriers preventing new firms from entering the industry"
    ],
    correct_answer: "A",
    explanation: "Under perfect competition, no single firm can influence market price (price takers); products are perfect substitutes, information is perfect, and freedom of entry ensures zero economic profits in the long run ($P = MC = \\min ATC$).",
    topic_name: "Market Structures - Perfect Competition",
    instruction_category: "Economics"
  },
  {
    question_number: 20,
    question_text: "A 'Pure Monopoly' market structure is characterized by:",
    option_a: "Thousands of small firms selling identical grain products",
    option_b: "A single seller, a unique product with no close substitutes, high barriers to entry, and the firm is a price maker facing a downward-sloping demand curve",
    option_c: "Zero barriers to market entry",
    option_d: "Marginal revenue equal to market price ($MR = P$)",
    options: [
      "Thousands of small firms selling identical grain products",
      "A single seller, a unique product with no close substitutes, high barriers to entry, and the firm is a price maker facing a downward-sloping demand curve",
      "Zero barriers to market entry",
      "Marginal revenue equal to market price ($MR = P$)"
    ],
    correct_answer: "B",
    explanation: "A monopolist is the sole supplier in the industry protected by structural, legal, or natural barriers, giving it pricing power where $P > MR = MC$, resulting in deadweight welfare loss.",
    topic_name: "Market Structures - Monopoly",
    instruction_category: "Economics"
  },
  {
    question_number: 21,
    question_text: "'Monopolistic Competition' is distinguished from pure competition primarily by:",
    option_a: "The complete absence of any competitors",
    option_b: "Government ownership of all retail stores",
    option_c: "Firms charging zero prices",
    option_d: "Product differentiation (through branding, design, quality, and advertising) among many competing firms with free entry and exit",
    options: [
      "The complete absence of any competitors",
      "Government ownership of all retail stores",
      "Firms charging zero prices",
      "Product differentiation (through branding, design, quality, and advertising) among many competing firms with free entry and exit"
    ],
    correct_answer: "D",
    explanation: "Monopolistic competition features many sellers offering differentiated (non-identical) products (e.g., restaurants, clothing brands, salons), giving each firm slight pricing power over its downward-sloping demand curve.",
    topic_name: "Market Structures - Monopolistic Competition",
    instruction_category: "Economics"
  },
  {
    question_number: 22,
    question_text: "An 'Oligopoly' market structure is defined by:",
    option_a: "A single seller with no competitors",
    option_b: "Millions of microscopic firms",
    option_c: "A small number of large, dominant firms exhibiting strategic mutual interdependence (such as telecommunications or the airline industry)",
    option_d: "Complete absence of barriers to entry",
    options: [
      "A single seller with no competitors",
      "Millions of microscopic firms",
      "A small number of large, dominant firms exhibiting strategic mutual interdependence (such as telecommunications or the airline industry)",
      "Complete absence of barriers to entry"
    ],
    correct_answer: "C",
    explanation: "In an oligopoly, a few dominant firms control the market; each firm's pricing and output decisions directly affect rivals, incentivizing strategic behaviors, game theory interactions, or collusive cartels (OPEC).",
    topic_name: "Market Structures - Oligopoly",
    instruction_category: "Economics"
  },
  {
    question_number: 23,
    question_text: "Gross Domestic Product (GDP) is scientifically defined in national income accounting as:",
    option_a: "The total market value of all final goods and services produced within the geographic borders of a country during a specified time period (typically one year)",
    option_b: "The total value of intermediate components used in factories",
    option_c: "The total quantity of paper money stored in the central bank",
    option_d: "The total financial wealth owned by citizens abroad",
    options: [
      "The total market value of all final goods and services produced within the geographic borders of a country during a specified time period (typically one year)",
      "The total value of intermediate components used in factories",
      "The total quantity of paper money stored in the central bank",
      "The total financial wealth owned by citizens abroad"
    ],
    correct_answer: "A",
    explanation: "GDP measures current geographic economic production of final goods/services (excluding intermediate inputs to avoid double counting) produced inside national borders over a year.",
    topic_name: "National Income Accounting - GDP Definition",
    instruction_category: "Economics"
  },
  {
    question_number: 24,
    question_text: "Under the Expenditure Approach to calculating GDP, the components of national expenditure are formulated as:",
    option_a: "$GDP = \\text{Wages} + \\text{Rent} + \\text{Interest} + \\text{Profit}$",
    option_b: "$GDP = C + I + G + (X - M)$ (Consumption + Investment + Government Purchases + Net Exports)",
    option_c: "$GDP = \\text{Money Supply} \\times \\text{Velocity}$",
    option_d: "$GDP = \\text{Exports} + \\text{Taxes} - \\text{Imports}$",
    options: [
      "$GDP = \\text{Wages} + \\text{Rent} + \\text{Interest} + \\text{Profit}$",
      "$GDP = C + I + G + (X - M)$ (Consumption + Investment + Government Purchases + Net Exports)",
      "$GDP = \\text{Money Supply} \\times \\text{Velocity}$",
      "$GDP = \\text{Exports} + \\text{Taxes} - \\text{Imports}$"
    ],
    correct_answer: "B",
    explanation: "The expenditure formula aggregates household consumption ($C$), gross private domestic investment ($I$), government consumption/investment ($G$), and net exports ($NX = X - M$).",
    topic_name: "Expenditure Approach to GDP",
    instruction_category: "Economics"
  },
  {
    question_number: 25,
    question_text: "How does 'Real GDP' differ fundamentally from 'Nominal GDP'?",
    option_a: "Nominal GDP excludes services while Real GDP includes services",
    option_b: "Real GDP is measured in kilograms while Nominal GDP is measured in liters",
    option_c: "Real GDP is adjusted for changes in the price level (inflation) using constant base-year prices, whereas Nominal GDP is valued at current prevailing market prices",
    option_d: "Nominal GDP is always smaller than Real GDP",
    options: [
      "Nominal GDP excludes services while Real GDP includes services",
      "Real GDP is measured in kilograms while Nominal GDP is measured in liters",
      "Real GDP is adjusted for changes in the price level (inflation) using constant base-year prices, whereas Nominal GDP is valued at current prevailing market prices",
      "Nominal GDP is always smaller than Real GDP"
    ],
    correct_answer: "C",
    explanation: "Nominal GDP reflects both changes in physical output and price changes, while Real GDP eliminates price inflation ($\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{GDP Deflator}} \\times 100$), measuring true volume of physical output.",
    topic_name: "Nominal vs Real GDP",
    instruction_category: "Economics"
  },
  {
    question_number: 26,
    question_text: "Gross National Product (GNP) is calculated from Gross Domestic Product (GDP) by:",
    option_a: "Adding Net Factor Income from Abroad (NFIA) to GDP ($GNP = GDP + NFIA$)",
    option_b: "Subtracting total exports from GDP",
    option_c: "Multiplying GDP by the national tax rate",
    option_d: "Dividing GDP by total population",
    options: [
      "Adding Net Factor Income from Abroad (NFIA) to GDP ($GNP = GDP + NFIA$)",
      "Subtracting total exports from GDP",
      "Multiplying GDP by the national tax rate",
      "Dividing GDP by total population"
    ],
    correct_answer: "A",
    explanation: "GNP/GNI measures the market value of all final goods produced by nationality (resources owned by a nation's citizens, domestically or abroad): $GNP = GDP + \\text{Factor income from abroad} - \\text{Factor income paid to foreigners}$.",
    topic_name: "GDP vs GNP / GNI",
    instruction_category: "Economics"
  },
  {
    question_number: 27,
    question_text: "In the macroeconomic Circular Flow of Income model for an open economy with government, the condition for macroeconomic equilibrium is:",
    option_a: "Total Taxes = Total Imports",
    option_b: "Total Savings = Total Consumption",
    option_c: "Velocity of money = 0",
    option_d: "Total Injections ($I + G + X$) equal Total Leakages/Withdrawals ($S + T + M$)",
    options: [
      "Total Taxes = Total Imports",
      "Total Savings = Total Consumption",
      "Velocity of money = 0",
      "Total Injections ($I + G + X$) equal Total Leakages/Withdrawals ($S + T + M$)"
    ],
    correct_answer: "D",
    explanation: "In circular flow equilibrium, total additions to the flow (Investment $I$ + Government Spending $G$ + Exports $X$) must equal total withdrawals from the flow (Savings $S$ + Taxes $T$ + Imports $M$).",
    topic_name: "Circular Flow of Income - Injections and Leakages",
    instruction_category: "Economics"
  },
  {
    question_number: 28,
    question_text: "'Inflation' is scientifically defined in macroeconomics as:",
    option_a: "A one-time temporary increase in the price of a single agricultural crop",
    option_b: "A continuous, sustained, and general increase in the overall price level of goods and services across the economy over time",
    option_c: "A decline in the total national population",
    option_d: "An increase in commercial bank reserve deposits",
    options: [
      "A one-time temporary increase in the price of a single agricultural crop",
      "A continuous, sustained, and general increase in the overall price level of goods and services across the economy over time",
      "A decline in the total national population",
      "An increase in commercial bank reserve deposits"
    ],
    correct_answer: "B",
    explanation: "Inflation is the persistent upward movement in the average price index across the economy, which erodes the purchasing power of the domestic currency.",
    topic_name: "Macroeconomic Inflation Definition",
    instruction_category: "Economics"
  },
  {
    question_number: 29,
    question_text: "'Demand-Pull Inflation' is initiated in the macroeconomy when:",
    option_a: "Aggregate demand for goods and services significantly exceeds the economy's productive capacity at full employment ('too much money chasing too few goods')",
    option_b: "Oil and raw material production costs suddenly increase",
    option_c: "Wages of workers are drastically cut by employers",
    option_d: "Agricultural harvest yields double in volume",
    options: [
      "Aggregate demand for goods and services significantly exceeds the economy's productive capacity at full employment ('too much money chasing too few goods')",
      "Oil and raw material production costs suddenly increase",
      "Wages of workers are drastically cut by employers",
      "Agricultural harvest yields double in volume"
    ],
    correct_answer: "A",
    explanation: "Demand-pull inflation occurs when aggregate spending ($AD = C + I + G + NX$) outpaces aggregate supply near full capacity, bidding up equilibrium price levels across markets.",
    topic_name: "Theories of Inflation - Demand-Pull vs Cost-Push",
    instruction_category: "Economics"
  },
  {
    question_number: 30,
    question_text: "The Consumer Price Index (CPI) of an economy was 120 in year 2024 and rose to 132 in year 2025. What was the annual rate of inflation?",
    option_a: "12%",
    option_b: "8.5%",
    option_c: "10%",
    option_d: "15%",
    options: ["12%", "8.5%", "10%", "15%"],
    correct_answer: "C",
    explanation: "Inflation rate = $\\frac{CPI_{2025} - CPI_{2024}}{CPI_{2024}} \\times 100\\% = \\frac{132 - 120}{120} \\times 100\\% = \\frac{12}{120} \\times 100\\% = 10\\%$.",
    topic_name: "Measuring Inflation Rate via CPI",
    instruction_category: "Economics"
  },
  {
    question_number: 31,
    question_text: "An engineer who is temporarily unemployed while actively transitioning and interviewing between jobs in different cities is experiencing which type of unemployment?",
    option_a: "Cyclical unemployment",
    option_b: "Structural unemployment",
    option_c: "Seasonal unemployment",
    option_d: "Frictional unemployment",
    options: [
      "Cyclical unemployment",
      "Structural unemployment",
      "Seasonal unemployment",
      "Frictional unemployment"
    ],
    correct_answer: "D",
    explanation: "Frictional unemployment is voluntary and short-term, occurring naturally as workers search for jobs that best match their skills or transition between positions and locations.",
    topic_name: "Types of Unemployment - Frictional",
    instruction_category: "Economics"
  },
  {
    question_number: 32,
    question_text: "If a country has a total labor force of 50 million people, of which 45 million are employed and 5 million are unemployed, what is the official Unemployment Rate?",
    option_a: "10%",
    option_b: "5%",
    option_c: "11.1%",
    option_d: "90%",
    options: ["10%", "5%", "11.1%", "90%"],
    correct_answer: "A",
    explanation: "Unemployment Rate = $\\frac{\\text{Number of Unemployed}}{\\text{Total Labor Force}} \\times 100\\% = \\frac{5\\text{ million}}{50\\text{ million}} \\times 100\\% = 10\\%$.",
    topic_name: "Calculating the Unemployment Rate",
    instruction_category: "Economics"
  },
  {
    question_number: 33,
    question_text: "The 'Natural Rate of Unemployment' (NRU) in an economy consists of the sum of:",
    option_a: "Cyclical unemployment and disguised unemployment",
    option_b: "Frictional unemployment and Structural unemployment (when cyclical unemployment is zero)",
    option_c: "Total national population minus employed workers",
    option_d: "Zero percent unemployment",
    options: [
      "Cyclical unemployment and disguised unemployment",
      "Frictional unemployment and Structural unemployment (when cyclical unemployment is zero)",
      "Total national population minus employed workers",
      "Zero percent unemployment"
    ],
    correct_answer: "B",
    explanation: "The Natural Rate of Unemployment (full-employment unemployment) is the baseline level of unemployment present even when the economy is producing at potential GDP ($NRU = \\text{Frictional} + \\text{Structural}$).",
    topic_name: "Natural Rate of Unemployment & Full Employment",
    instruction_category: "Economics"
  },
  {
    question_number: 34,
    question_text: "The recurring fluctuations of real GDP around its long-term growth trend, exhibiting phases of Expansion, Peak, Contraction (Recession), and Trough, is known as:",
    option_a: "The Trade Tariff Cycle",
    option_b: "The Life Cycle Hypothesis",
    option_c: "The Business Cycle (Economic Cycle)",
    option_d: "The Demographic Transition",
    options: [
      "The Trade Tariff Cycle",
      "The Life Cycle Hypothesis",
      "The Business Cycle (Economic Cycle)",
      "The Demographic Transition"
    ],
    correct_answer: "C",
    explanation: "The business cycle describes alternating macroeconomic expansions (rising output, lower unemployment) and contractions/recessions (falling GDP, rising unemployment) over economic history.",
    topic_name: "The Macroeconomic Business Cycle",
    instruction_category: "Economics"
  },
  {
    question_number: 35,
    question_text: "'Fiscal Policy' refers to the macroeconomic management of the national economy through:",
    option_a: "Government adjustments in taxation ($T$) and government spending ($G$)",
    option_b: "Central bank adjustments of interest rates and open market operations",
    option_c: "Commercial bank personal loan approvals",
    option_d: "Fixing foreign currency exchange rates",
    options: [
      "Government adjustments in taxation ($T$) and government spending ($G$)",
      "Central bank adjustments of interest rates and open market operations",
      "Commercial bank personal loan approvals",
      "Fixing foreign currency exchange rates"
    ],
    correct_answer: "A",
    explanation: "Fiscal policy is conducted by the executive and legislative branches using budgetary tools—government expenditures ($G$) and tax revenues ($T$)—to influence aggregate demand, growth, and employment.",
    topic_name: "Fiscal Policy Definition & Instruments",
    instruction_category: "Economics"
  },
  {
    question_number: 36,
    question_text: "To combat a severe economic recession with high unemployment, a Keynesian government should implement 'Expansionary Fiscal Policy' by:",
    option_a: "Decreasing government spending and raising income taxes",
    option_b: "Increasing government expenditure on public infrastructure ($G \\uparrow$) and/or cutting taxes ($T \\downarrow$) to stimulate aggregate demand",
    option_c: "Closing all commercial bank branches",
    option_d: "Banning all imports from foreign countries",
    options: [
      "Decreasing government spending and raising income taxes",
      "Increasing government expenditure on public infrastructure ($G \\uparrow$) and/or cutting taxes ($T \\downarrow$) to stimulate aggregate demand",
      "Closing all commercial bank branches",
      "Banning all imports from foreign countries"
    ],
    correct_answer: "B",
    explanation: "Expansionary fiscal policy boosts aggregate demand by injecting funds directly through public spending ($G$) and increasing disposable consumer income through tax cuts ($T$), shifting the AD curve rightward.",
    topic_name: "Expansionary Fiscal Policy",
    instruction_category: "Economics"
  },
  {
    question_number: 37,
    question_text: "When an economy experiences high demand-pull inflation, the appropriate 'Contractionary Fiscal Policy' response is to:",
    option_a: "Double government spending on social welfare programs",
    option_b: "Abolish all corporate profit taxes",
    option_c: "Distribute stimulus checks to all citizens",
    option_d: "Reduce government expenditure ($G \\downarrow$) and/or increase tax rates ($T \\uparrow$) to cool down aggregate demand",
    options: [
      "Double government spending on social welfare programs",
      "Abolish all corporate profit taxes",
      "Distribute stimulus checks to all citizens",
      "Reduce government expenditure ($G \\downarrow$) and/or increase tax rates ($T \\uparrow$) to cool down aggregate demand"
    ],
    correct_answer: "D",
    explanation: "Contractionary fiscal policy reins in overheated inflation by withdrawing liquidity from the economy through reduced public spending ($G$) and higher taxes ($T$), shifting aggregate demand leftward.",
    topic_name: "Contractionary Fiscal Policy",
    instruction_category: "Economics"
  },
  {
    question_number: 38,
    question_text: "'Monetary Policy' is formulated and executed by the nation's Central Bank (e.g., National Bank of Ethiopia) primarily to:",
    option_a: "Appoint judges to regional courts",
    option_b: "Enact criminal sentencing laws",
    option_c: "Regulate the money supply, credit availability, interest rates, and financial liquidity to achieve price stability and sustainable economic growth",
    option_d: "Collect municipal parking fees",
    options: [
      "Appoint judges to regional courts",
      "Enact criminal sentencing laws",
      "Regulate the money supply, credit availability, interest rates, and financial liquidity to achieve price stability and sustainable economic growth",
      "Collect municipal parking fees"
    ],
    correct_answer: "C",
    explanation: "Monetary policy controls macroeconomic liquidity and interest rates via tools like open market operations, required reserve ratios, and discount window lending to stabilize inflation and foster investment.",
    topic_name: "Monetary Policy & Central Banking",
    instruction_category: "Economics"
  },
  {
    question_number: 39,
    question_text: "To expand credit and stimulate economic activity during a downturn, a Central Bank implementing 'Expansionary Monetary Policy' (Easy Money) will:",
    option_a: "Purchase government bonds in Open Market Operations, lower the reserve requirement ratio, and decrease the policy discount rate",
    option_b: "Sell government bonds and raise the required reserve ratio",
    option_c: "Ban commercial banks from issuing loans",
    option_d: "Confiscate commercial bank cash reserves",
    options: [
      "Purchase government bonds in Open Market Operations, lower the reserve requirement ratio, and decrease the policy discount rate",
      "Sell government bonds and raise the required reserve ratio",
      "Ban commercial banks from issuing loans",
      "Confiscate commercial bank cash reserves"
    ],
    correct_answer: "A",
    explanation: "Buying securities injects cash into the banking system; lowering reserve requirements and discount rates frees commercial bank reserves, lowering interest rates and expanding private borrowing and investment.",
    topic_name: "Expansionary Monetary Policy Instruments",
    instruction_category: "Economics"
  },
  {
    question_number: 40,
    question_text: "When inflation accelerates, the Central Bank executes 'Contractionary Monetary Policy' (Tight Money) by:",
    option_a: "Printing unlimited paper banknotes",
    option_b: "Selling government securities in open market operations, raising the reserve requirement ratio, and increasing interest rates to restrict credit",
    option_c: "Giving free loans to all private firms",
    option_d: "Eliminating the central bank reserve requirement completely",
    options: [
      "Printing unlimited paper banknotes",
      "Selling government securities in open market operations, raising the reserve requirement ratio, and increasing interest rates to restrict credit",
      "Giving free loans to all private firms",
      "Eliminating the central bank reserve requirement completely"
    ],
    correct_answer: "B",
    explanation: "Selling bonds absorbs excess bank reserves; raising reserve ratios and lending rates raises borrowing costs, curbing consumer credit, capital spending, and inflationary pressures.",
    topic_name: "Contractionary Monetary Policy",
    instruction_category: "Economics"
  },
  {
    question_number: 41,
    question_text: "Which of the following is NOT one of the classic, universally recognized functions of 'Money' in an economy?",
    option_a: "Medium of exchange",
    option_b: "Unit of account (measure of value)",
    option_c: "Store of value over time",
    option_d: "Source of infinite unearned physical wealth",
    options: [
      "Medium of exchange",
      "Unit of account (measure of value)",
      "Store of value over time",
      "Source of infinite unearned physical wealth"
    ],
    correct_answer: "D",
    explanation: "Money serves four primary functions: (1) Medium of exchange (solves double coincidence of wants), (2) Unit of account (standard pricing), (3) Store of value (purchasing power preservation), and (4) Standard of deferred payment.",
    topic_name: "Functions of Money in Modern Economics",
    instruction_category: "Economics"
  },
  {
    question_number: 42,
    question_text: "Which set of characteristics makes a commodity or fiat currency effective as money?",
    option_a: "Portability, durability, divisibility, uniformity (standardization), scarcity (limited supply), and universal acceptability",
    option_b: "Perishability, heavy weight, and unlimited supply",
    option_c: "Invisibility and impossibility to count",
    option_d: "Rapidly decaying physical properties",
    options: [
      "Portability, durability, divisibility, uniformity (standardization), scarcity (limited supply), and universal acceptability",
      "Perishability, heavy weight, and unlimited supply",
      "Invisibility and impossibility to count",
      "Rapidly decaying physical properties"
    ],
    correct_answer: "A",
    explanation: "Sound money must be durable, easy to carry (portable), easily divided into smaller denominations, uniform across units, scarce enough to retain value, and legally/socially accepted.",
    topic_name: "Characteristics of Sound Money",
    instruction_category: "Economics"
  },
  {
    question_number: 43,
    question_text: "The National Bank of Ethiopia (NBE) performs which of the following essential central banking functions?",
    option_a: "Selling retail clothing directly to consumers",
    option_b: "Operating commercial passenger airline flights",
    option_c: "Sole issuer of legal tender currency (Ethiopian Birr), banker to the government, regulator of commercial banks, and custodian of international foreign exchange reserves",
    option_d: "Collecting municipal garbage disposal fees",
    options: [
      "Selling retail clothing directly to consumers",
      "Operating commercial passenger airline flights",
      "Sole issuer of legal tender currency (Ethiopian Birr), banker to the government, regulator of commercial banks, and custodian of international foreign exchange reserves",
      "Collecting municipal garbage disposal fees"
    ],
    correct_answer: "C",
    explanation: "As the central bank of Ethiopia, NBE is constitutionally and statutorily empowered to issue banknotes/coins, manage foreign exchange reserves, regulate credit, and oversee banking stability.",
    topic_name: "Role & Functions of National Bank of Ethiopia (NBE)",
    instruction_category: "Economics"
  },
  {
    question_number: 44,
    question_text: "The 'Balance of Payments' (BOP) of a nation is an accounting statement that systematically records:",
    option_a: "The number of motor vehicles registered in municipal cities",
    option_b: "All economic and financial transactions between the residents of a country and the rest of the world over a specified period (one year)",
    option_c: "The internal tax revenue collected from regional states",
    option_d: "The daily attendance of public secondary school students",
    options: [
      "The number of motor vehicles registered in municipal cities",
      "All economic and financial transactions between the residents of a country and the rest of the world over a specified period (one year)",
      "The internal tax revenue collected from regional states",
      "The daily attendance of public secondary school students"
    ],
    correct_answer: "B",
    explanation: "The Balance of Payments accounts for international flows of merchandise, services, primary income, unilateral transfers, foreign direct investment, and financial assets across borders.",
    topic_name: "Balance of Payments (BOP) Accounting",
    instruction_category: "Economics"
  },
  {
    question_number: 45,
    question_text: "The 'Current Account' in the Balance of Payments includes which of the following transactions?",
    option_a: "The balance of trade in merchandise goods (exports minus imports), services, net cross-border factor income, and net unilateral transfers (remittances)",
    option_b: "Purchases of foreign government bonds and real estate abroad",
    option_c: "Foreign Direct Investment (FDI) equity purchases",
    option_d: "Changes in central bank official reserve gold assets",
    options: [
      "The balance of trade in merchandise goods (exports minus imports), services, net cross-border factor income, and net unilateral transfers (remittances)",
      "Purchases of foreign government bonds and real estate abroad",
      "Foreign Direct Investment (FDI) equity purchases",
      "Changes in central bank official reserve gold assets"
    ],
    correct_answer: "A",
    explanation: "The Current Account records real non-capital transactions: visible merchandise trade balance ($X - M$), invisible services (tourism/transport), net factor income (dividends/interest), and unrequited transfers/remittances.",
    topic_name: "Components of the Current Account",
    instruction_category: "Economics"
  },
  {
    question_number: 46,
    question_text: "According to David Ricardo's seminal Theory of Comparative Advantage, mutually beneficial international trade occurs when countries specialize in producing goods in which they have:",
    option_a: "An absolute advantage in terms of lower total hours worked",
    option_b: "Higher production costs than all other trading partners",
    option_c: "A monopoly granted by international treaty",
    option_d: "A lower opportunity cost compared to other nations",
    options: [
      "An absolute advantage in terms of lower total hours worked",
      "Higher production costs than all other trading partners",
      "A monopoly granted by international treaty",
      "A lower opportunity cost compared to other nations"
    ],
    correct_answer: "D",
    explanation: "Even if one country has an absolute advantage in all goods, mutual gains from trade arise if each specializes in the good where its relative opportunity cost is lower, maximizing global output.",
    topic_name: "Ricardian Theory of Comparative Advantage",
    instruction_category: "Economics"
  },
  {
    question_number: 47,
    question_text: "The 'Terms of Trade' (TOT) of a country is calculated as:",
    option_a: "$\\text{Total Exports} + \\text{Total Imports}$",
    option_b: "$\\frac{\\text{Index of Export Prices}}{\\text{Index of Import Prices}} \\times 100$",
    option_c: "$\\text{Nominal GDP} - \\text{Real GDP}$",
    option_d: "$\\frac{\\text{Government Spending}}{\\text{Tax Revenue}} \\times 100$",
    options: [
      "$\\text{Total Exports} + \\text{Total Imports}$",
      "$\\frac{\\text{Index of Export Prices}}{\\text{Index of Import Prices}} \\times 100$",
      "$\\text{Nominal GDP} - \\text{Real GDP}$",
      "$\\frac{\\text{Government Spending}}{\\text{Tax Revenue}} \\times 100$"
    ],
    correct_answer: "B",
    explanation: "Terms of Trade measures the purchasing power of exports in terms of imports ($TOT = \\frac{P_x}{P_m} \\times 100$). A rising index indicates favorable TOT (export prices rising relative to import prices).",
    topic_name: "Terms of Trade (TOT)",
    instruction_category: "Economics"
  },
  {
    question_number: 48,
    question_text: "A 'Tariff' is defined in international trade policy as:",
    option_a: "A complete physical prohibition on all incoming goods",
    option_b: "A cash subsidy paid directly to foreign exporters",
    option_c: "A customs duty or tax levied by a government on imported goods and services",
    option_d: "A standard currency exchange rate fixed by treaty",
    options: [
      "A complete physical prohibition on all incoming goods",
      "A cash subsidy paid directly to foreign exporters",
      "A customs duty or tax levied by a government on imported goods and services",
      "A standard currency exchange rate fixed by treaty"
    ],
    correct_answer: "C",
    explanation: "Tariffs are protective or revenue-generating taxes on imports, raising the domestic price of foreign goods to protect domestic infant industries and generate government revenue.",
    topic_name: "Trade Protectionism - Tariffs",
    instruction_category: "Economics"
  },
  {
    question_number: 49,
    question_text: "In a 'Flexible (Floating) Exchange Rate' system, the foreign exchange value of a national currency is determined by:",
    option_a: "The market forces of supply and demand for that currency in the foreign exchange market",
    option_b: "A rigid decree issued by the United Nations",
    option_c: "The physical quantity of gold stored in the royal palace",
    option_d: "The average temperature of the national capital",
    options: [
      "The market forces of supply and demand for that currency in the foreign exchange market",
      "A rigid decree issued by the United Nations",
      "The physical quantity of gold stored in the royal palace",
      "The average temperature of the national capital"
    ],
    correct_answer: "A",
    explanation: "Under a floating regime, currency valuation appreciates or depreciates according to private and public market demand (exports/inflows) and market supply (imports/outflows) on global forex markets.",
    topic_name: "Foreign Exchange Rate Determination",
    instruction_category: "Economics"
  },
  {
    question_number: 50,
    question_text: "A currency 'Devaluation' (or depreciation) by a country makes its:",
    option_a: "Imports cheaper and exports more expensive to foreign buyers",
    option_b: "Exports cheaper in foreign currency (boosting export competitiveness) and imports more expensive in domestic currency (discouraging imports)",
    option_c: "Domestic inflation rate drop instantly to zero",
    option_d: "National debt completely vanish without repayment",
    options: [
      "Imports cheaper and exports more expensive to foreign buyers",
      "Exports cheaper in foreign currency (boosting export competitiveness) and imports more expensive in domestic currency (discouraging imports)",
      "Domestic inflation rate drop instantly to zero",
      "National debt completely vanish without repayment"
    ],
    correct_answer: "B",
    explanation: "Lowering the value of the domestic currency makes domestic export commodities more price-competitive abroad, while raising the domestic cost of imported goods, helping correct a trade deficit.",
    topic_name: "Macroeconomic Effects of Currency Devaluation",
    instruction_category: "Economics"
  },
  {
    question_number: 51,
    question_text: "What is the crucial qualitative distinction between 'Economic Growth' and 'Economic Development'?",
    option_a: "Economic growth is the quantitative expansion of national output (real GDP), while economic development is a broader qualitative transformation encompassing improved living standards, literacy, healthcare, poverty reduction, and structural institutional change",
    option_b: "Economic growth applies only to rich countries while development applies only to islands",
    option_c: "Economic growth is measured in degrees Celsius while development is measured in dollars",
    option_d: "There is no distinction whatsoever between the two concepts",
    options: [
      "Economic growth is the quantitative expansion of national output (real GDP), while economic development is a broader qualitative transformation encompassing improved living standards, literacy, healthcare, poverty reduction, and structural institutional change",
      "Economic growth applies only to rich countries while development applies only to islands",
      "Economic growth is measured in degrees Celsius while development is measured in dollars",
      "There is no distinction whatsoever between the two concepts"
    ],
    correct_answer: "A",
    explanation: "Growth is a necessary but insufficient condition for development; development requires multi-dimensional progress: structural economic transformation, human capital development, institutional quality, and equitable distribution.",
    topic_name: "Economic Growth vs Economic Development",
    instruction_category: "Economics"
  },
  {
    question_number: 52,
    question_text: "The United Nations Human Development Index (HDI) measures national socioeconomic wellbeing by combining which three fundamental dimensions?",
    option_a: "Military defense budget, number of airports, and gold reserves",
    option_b: "Annual rainfall, crude oil production, and steel output",
    option_c: "A long and healthy life (Life Expectancy), Knowledge (Mean/Expected Years of Schooling), and a decent standard of living (GNI per capita in PPP)",
    option_d: "Total number of commercial banks, internet domain names, and highway kilometers",
    options: [
      "Military defense budget, number of airports, and gold reserves",
      "Annual rainfall, crude oil production, and steel output",
      "A long and healthy life (Life Expectancy), Knowledge (Mean/Expected Years of Schooling), and a decent standard of living (GNI per capita in PPP)",
      "Total number of commercial banks, internet domain names, and highway kilometers"
    ],
    correct_answer: "C",
    explanation: "The UNDP Human Development Index (HDI) calculates the geometric mean of normalized indices across health (life expectancy at birth), education (schooling years), and standard of living (Gross National Income per capita).",
    topic_name: "The Human Development Index (HDI)",
    instruction_category: "Economics"
  },
  {
    question_number: 53,
    question_text: "The 'Gini Coefficient' (derived from the Lorenz Curve) is an established statistical metric used to measure:",
    option_a: "The speed of commercial internet connections",
    option_b: "The degree of income inequality or wealth distribution within an economy (ranging from 0 for perfect equality to 1 for absolute inequality)",
    option_c: "The annual inflation rate of agricultural food items",
    option_d: "The fertility rate of the female population",
    options: [
      "The speed of commercial internet connections",
      "The degree of income inequality or wealth distribution within an economy (ranging from 0 for perfect equality to 1 for absolute inequality)",
      "The annual inflation rate of agricultural food items",
      "The fertility rate of the female population"
    ],
    correct_answer: "B",
    explanation: "The Gini coefficient measures the area between the 45-degree line of perfect equality and the actual Lorenz curve; a score of 0 represents absolute equality, while 1 indicates complete inequality.",
    topic_name: "Measuring Inequality - Gini Coefficient & Lorenz Curve",
    instruction_category: "Economics"
  },
  {
    question_number: 54,
    question_text: "'Absolute Poverty' is defined in development economics as:",
    option_a: "Having fewer luxury vehicles than one's wealthy neighbors",
    option_b: "Earning less than the national average salary",
    option_c: "Working more than 40 hours per week in agriculture",
    option_d: "A severe condition characterized by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, and education (living below the international poverty threshold)",
    options: [
      "Having fewer luxury vehicles than one's wealthy neighbors",
      "Earning less than the national average salary",
      "Working more than 40 hours per week in agriculture",
      "A severe condition characterized by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, and education (living below the international poverty threshold)"
    ],
    correct_answer: "D",
    explanation: "Absolute poverty establishes a fixed biological/subsistence income threshold (e.g. World Bank $2.15/day benchmark) below which basic physical survival and human dignity are compromised.",
    topic_name: "Poverty Concepts - Absolute vs Relative Poverty",
    instruction_category: "Economics"
  },
  {
    question_number: 55,
    question_text: "Ethiopia's long-standing development strategy of 'Agricultural Development-Led Industrialization' (ADLI) was designed on the premise that:",
    option_a: "Modernizing and transforming smallholder peasant agriculture would raise rural incomes, provide food security, supply industrial raw materials, and create a domestic consumer market for emerging manufacturing industries",
    option_b: "All agriculture should be shut down to focus entirely on mining",
    option_c: "Food should be imported entirely from overseas",
    option_d: "Industrialization does not require raw agricultural inputs",
    options: [
      "Modernizing and transforming smallholder peasant agriculture would raise rural incomes, provide food security, supply industrial raw materials, and create a domestic consumer market for emerging manufacturing industries",
      "All agriculture should be shut down to focus entirely on mining",
      "Food should be imported entirely from overseas",
      "Industrialization does not require raw agricultural inputs"
    ],
    correct_answer: "A",
    explanation: "ADLI prioritized productivity growth in smallholder agriculture as the primary engine to supply food, generate raw materials for agro-processing, stimulate domestic demand, and finance industrial expansion.",
    topic_name: "Ethiopian Development Strategy - ADLI",
    instruction_category: "Economics"
  },
  {
    question_number: 56,
    question_text: "Ethiopia's 'Homegrown Economic Reform Agenda' focuses on addressing macroeconomic imbalances and unlocking growth by:",
    option_a: "Abolishing all private enterprises and commercial businesses",
    option_b: "Banning all foreign investments and international trade",
    option_c: "Achieving macroeconomic stability, resolving foreign currency shortages, easing structural business bottlenecks, liberalizing strategic sectors (telecom, finance), and promoting export competitiveness",
    option_d: "Shutting down the National Bank of Ethiopia",
    options: [
      "Abolishing all private enterprises and commercial businesses",
      "Banning all foreign investments and international trade",
      "Achieving macroeconomic stability, resolving foreign currency shortages, easing structural business bottlenecks, liberalizing strategic sectors (telecom, finance), and promoting export competitiveness",
      "Shutting down the National Bank of Ethiopia"
    ],
    correct_answer: "C",
    explanation: "The Homegrown Economic Reform Agenda tackles structural bottlenecks through monetary reforms, exchange rate unification, opening key sectors to private investment, and strengthening fiscal discipline.",
    topic_name: "Homegrown Economic Reform Agenda",
    instruction_category: "Economics"
  },
  {
    question_number: 57,
    question_text: "In Keynesian macroeconomic theory, if the Marginal Propensity to Consume ($MPC$) is 0.75, the Marginal Propensity to Save ($MPS$) and the simple Investment Spending Multiplier ($k$) are respectively:",
    option_a: "$MPS = 0.75$ and $k = 1.33$",
    option_b: "$MPS = 0.25$ and $k = 4.0$",
    option_c: "$MPS = 0.50$ and $k = 2.0$",
    option_d: "$MPS = 1.0$ and $k = 0$",
    options: [
      "$MPS = 0.75$ and $k = 1.33$",
      "$MPS = 0.25$ and $k = 4.0$",
      "$MPS = 0.50$ and $k = 2.0$",
      "$MPS = 1.0$ and $k = 0$"
    ],
    correct_answer: "B",
    explanation: "Since $MPC + MPS = 1$, $MPS = 1 - 0.75 = 0.25$. The investment multiplier $k = \\frac{1}{1 - MPC} = \\frac{1}{MPS} = \\frac{1}{0.25} = 4.0$. An injection of 1 million birr generates 4 million birr in national income.",
    topic_name: "Keynesian Multiplier Analysis",
    instruction_category: "Economics"
  },
  {
    question_number: 58,
    question_text: "If an initial injection of autonomous investment spending of 200 million Birr results in an ultimate increase in National Income of 1,000 million Birr, the value of the investment multiplier is:",
    option_a: "5.0",
    option_b: "0.2",
    option_c: "2.5",
    option_d: "10.0",
    options: ["5.0", "0.2", "2.5", "10.0"],
    correct_answer: "A",
    explanation: "Multiplier $k = \\frac{\\Delta Y}{\\Delta I} = \\frac{1,000\\text{ million}}{200\\text{ million}} = 5.0$. (Which also implies $MPS = 0.2$ and $MPC = 0.8$).",
    topic_name: "Calculating the Investment Multiplier",
    instruction_category: "Economics"
  },
  {
    question_number: 59,
    question_text: "The downward slope of the Aggregate Demand (AD) curve is explained by which three macroeconomic effects?",
    option_a: "The weather effect, the calendar effect, and the harvest effect",
    option_b: "The nominal wage effect, the union effect, and the tax evasion effect",
    option_c: "The advertising effect, the branding effect, and the monopoly effect",
    option_d: "The Real Wealth Effect (Pigou Effect), the Interest Rate Effect (Keynes Effect), and the International Trade / Net Export Effect (Mundell-Fleming Effect)",
    options: [
      "The weather effect, the calendar effect, and the harvest effect",
      "The nominal wage effect, the union effect, and the tax evasion effect",
      "The advertising effect, the branding effect, and the monopoly effect",
      "The Real Wealth Effect (Pigou Effect), the Interest Rate Effect (Keynes Effect), and the International Trade / Net Export Effect (Mundell-Fleming Effect)"
    ],
    correct_answer: "D",
    explanation: "As price level falls: (1) real wealth increases, raising consumption; (2) money demand falls, lowering interest rates and raising investment; and (3) domestic goods become cheaper relative to foreign goods, boosting net exports.",
    topic_name: "Aggregate Demand Theory & Slope Explanation",
    instruction_category: "Economics"
  },
  {
    question_number: 60,
    question_text: "In classical and neoclassical macroeconomic theory, the Long-Run Aggregate Supply (LRAS) curve is:",
    option_a: "Completely horizontal at zero output",
    option_b: "A vertical straight line at the potential full-employment level of real GDP ($Y_p$), determined solely by real productive factors and technology",
    option_c: "Downward sloping like the aggregate demand curve",
    option_d: "Determined entirely by the nominal money supply",
    options: [
      "Completely horizontal at zero output",
      "A vertical straight line at the potential full-employment level of real GDP ($Y_p$), determined solely by real productive factors and technology",
      "Downward sloping like the aggregate demand curve",
      "Determined entirely by the nominal money supply"
    ],
    correct_answer: "B",
    explanation: "In the long run, input prices fully adjust to price changes; hence potential GDP is determined by capital, labor, resources, and technology, resulting in a vertical LRAS curve independent of price level.",
    topic_name: "Long-Run Aggregate Supply (LRAS)",
    instruction_category: "Economics"
  },
  {
    question_number: 61,
    question_text: "'Microeconomics' focuses on the study of:",
    option_a: "Individual economic decision-making units (households, individual consumers, firms, and single product markets)",
    option_b: "The national rate of unemployment and national income",
    option_c: "Global balance of payments deficits across continents",
    option_d: "Federal monetary policy and reserve currencies",
    options: [
      "Individual economic decision-making units (households, individual consumers, firms, and single product markets)",
      "The national rate of unemployment and national income",
      "Global balance of payments deficits across continents",
      "Federal monetary policy and reserve currencies"
    ],
    correct_answer: "A",
    explanation: "Microeconomics analyzes individual components of the economy (price determination of specific goods, consumer choice, firm cost minimization), whereas macroeconomics investigates economy-wide aggregates.",
    topic_name: "Microeconomics vs Macroeconomics",
    instruction_category: "Economics"
  },
  {
    question_number: 62,
    question_text: "Which of the following is an example of a 'Positive Economic Statement' (objective, descriptive, and factually testable)?",
    option_a: "The government ought to provide free university education to all citizens",
    option_b: "Income inequality is morally unjust and should be eradicated immediately",
    option_c: "An increase in the federal excise tax on gasoline leads to a reduction in the quantity demanded of fuel",
    option_d: "The minimum wage should be doubled because workers deserve higher pay",
    options: [
      "The government ought to provide free university education to all citizens",
      "Income inequality is morally unjust and should be eradicated immediately",
      "An increase in the federal excise tax on gasoline leads to a reduction in the quantity demanded of fuel",
      "The minimum wage should be doubled because workers deserve higher pay"
    ],
    correct_answer: "C",
    explanation: "Positive economics deals with objective facts and cause-and-effect relationships ('what is') that can be tested and verified empirically, whereas normative statements express value judgments ('what ought to be').",
    topic_name: "Positive vs Normative Economics",
    instruction_category: "Economics"
  },
  {
    question_number: 63,
    question_text: "A 'Mixed Economic System' (the dominant economic structure in modern nations, including Ethiopia) is characterized by:",
    option_a: "Complete state control with zero private property",
    option_b: "A pure barter economy with no money",
    option_c: "The absence of any government laws or taxation",
    option_d: "A combination of private market enterprise guided by the price mechanism alongside government public sector investment, regulation, and provision of public goods",
    options: [
      "Complete state control with zero private property",
      "A pure barter economy with no money",
      "The absence of any government laws or taxation",
      "A combination of private market enterprise guided by the price mechanism alongside government public sector investment, regulation, and provision of public goods"
    ],
    correct_answer: "D",
    explanation: "A mixed economy harnesses market efficiencies and private initiative for consumer goods production while maintaining public government intervention to regulate monopolies, supply public goods, and provide safety nets.",
    topic_name: "Comparative Economic Systems - Mixed Economy",
    instruction_category: "Economics"
  },
  {
    question_number: 64,
    question_text: "When the demand for a life-saving medication remains completely unchanged regardless of how high its price rises, the Price Elasticity of Demand is:",
    option_a: "Elastic ($|E_d| > 1$)",
    option_b: "Perfectlyn Inelastic ($E_d = 0$, represented by a perfectly vertical demand curve)",
    option_c: "Unitary Elastic ($E_d = 1$)",
    option_d: "Infinite ($E_d = \\infty$)",
    options: [
      "Elastic ($|E_d| > 1$)",
      "Perfectlyn Inelastic ($E_d = 0$, represented by a perfectly vertical demand curve)",
      "Unitary Elastic ($E_d = 1$)",
      "Infinite ($E_d = \\infty$)"
    ],
    correct_answer: "B",
    explanation: "When consumers must buy the exact same quantity regardless of price changes (e.g. vital prescription medicine with no substitutes), $\% \\Delta Q_d = 0$, so $E_d = 0$ (perfectly inelastic vertical demand).",
    topic_name: "Perfect Inelasticity of Demand",
    instruction_category: "Economics"
  },
  {
    question_number: 65,
    question_text: "A perfectly horizontal demand curve parallel to the horizontal quantity axis indicates that demand is:",
    option_a: "Perfectlyn Elastic ($E_d = \\infty$)",
    option_b: "Perfectlyn Inelastic ($E_d = 0$)",
    option_c: "Unitary Elastic ($E_d = 1$)",
    option_d: "Relatively Inelastic ($E_d < 1$)",
    options: [
      "Perfectlyn Elastic ($E_d = \\infty$)",
      "Perfectlyn Inelastic ($E_d = 0$)",
      "Unitary Elastic ($E_d = 1$)",
      "Relatively Inelastic ($E_d < 1$)"
    ],
    correct_answer: "A",
    explanation: "A horizontal demand curve (like that faced by an individual competitive price-taking firm) represents infinite price elasticity ($E_d = \\infty$); any price increase causes sales to drop to zero.",
    topic_name: "Perfect Elasticity of Demand",
    instruction_category: "Economics"
  },
  {
    question_number: 66,
    question_text: "'Consumer Surplus' is graphically represented as the area:",
    option_a: "Below the market price and above the supply curve",
    option_b: "To the right of the quantity demanded axis",
    option_c: "Below the demand curve and above the prevailing equilibrium market price",
    option_d: "Inside the total cost rectangle",
    options: [
      "Below the market price and above the supply curve",
      "To the right of the quantity demanded axis",
      "Below the demand curve and above the prevailing equilibrium market price",
      "Inside the total cost rectangle"
    ],
    correct_answer: "C",
    explanation: "Consumer surplus measures the net economic benefit to consumers (the difference between what buyers were willing and able to pay based on the demand curve and the actual market price paid).",
    topic_name: "Welfare Economics - Consumer Surplus",
    instruction_category: "Economics"
  },
  {
    question_number: 67,
    question_text: "'Producer Surplus' is defined as:",
    option_a: "The total value of inventory that went unsold",
    option_b: "The difference between the actual market price received by producers and the minimum price at which they were willing to sell (represented by the marginal cost/supply curve)",
    option_c: "The amount of taxes paid by factory owners",
    option_d: "The total expenditure on employee wages",
    options: [
      "The total value of inventory that went unsold",
      "The difference between the actual market price received by producers and the minimum price at which they were willing to sell (represented by the marginal cost/supply curve)",
      "The amount of taxes paid by factory owners",
      "The total expenditure on employee wages"
    ],
    correct_answer: "B",
    explanation: "Producer surplus is the net benefit to producers, measured as the area above the market supply curve and below the market price level up to the quantity sold.",
    topic_name: "Welfare Economics - Producer Surplus",
    instruction_category: "Economics"
  },
  {
    question_number: 68,
    question_text: "In welfare economics, the 'Deadweight Loss' (efficiency loss) resulting from a distorting commodity excise tax represents:",
    option_a: "The net loss in total economic surplus (consumer plus producer surplus) that is not captured by anyone as government tax revenue",
    option_b: "The total wages paid to customs revenue officers",
    option_c: "The physical decay of goods during transport",
    option_d: "The total volume of goods exported abroad",
    options: [
      "The net loss in total economic surplus (consumer plus producer surplus) that is not captured by anyone as government tax revenue",
      "The total wages paid to customs revenue officers",
      "The physical decay of goods during transport",
      "The total volume of goods exported abroad"
    ],
    correct_answer: "A",
    explanation: "Deadweight loss occurs when taxes or price distortions reduce output below the socially optimal equilibrium, destroying mutually beneficial transactions and reducing aggregate social welfare.",
    topic_name: "Deadweight Loss of Taxation",
    instruction_category: "Economics"
  },
  {
    question_number: 69,
    question_text: "When industrial factories dump toxic chemical waste into a river without compensating downstream communities, it generates a 'Negative Externality' resulting in:",
    option_a: "Underproduction of the commodity relative to the socially optimal level",
    option_b: "Zero economic production cost",
    option_c: "Equality between private cost and social cost",
    option_d: "Market failure where Marginal Social Cost exceeds Marginal Private Cost ($MSC > MPC$), causing the free market to overproduce the good",
    options: [
      "Underproduction of the commodity relative to the socially optimal level",
      "Zero economic production cost",
      "Equality between private cost and social cost",
      "Market failure where Marginal Social Cost exceeds Marginal Private Cost ($MSC > MPC$), causing the free market to overproduce the good"
    ],
    correct_answer: "D",
    explanation: "Negative externalities impose unpriced external costs on third parties ($MSC = MPC + \\text{External Cost}$). Without government corrective taxes (Pigouvian taxes), the free market overallocates resources to polluting goods.",
    topic_name: "Market Failures - Negative Externalities",
    instruction_category: "Economics"
  },
  {
    question_number: 70,
    question_text: "The 'Free-Rider Problem' in public economics arises primarily because pure public goods (like national defense or street lamps) are:",
    option_a: "Priced too high for low-income citizens to afford",
    option_b: "Non-excludable (people cannot be excluded from benefiting even if they pay nothing) and Non-rivalrous in consumption",
    option_c: "Produced exclusively by foreign multinational corporations",
    option_d: "Subject to severe physical wear and tear within minutes",
    options: [
      "Priced too high for low-income citizens to afford",
      "Non-excludable (people cannot be excluded from benefiting even if they pay nothing) and Non-rivalrous in consumption",
      "Produced exclusively by foreign multinational corporations",
      "Subject to severe physical wear and tear within minutes"
    ],
    correct_answer: "B",
    explanation: "Because non-payers cannot be excluded from enjoying public goods, rational consumers have no incentive to pay voluntarily (free riding), leading private markets to under-provide them and necessitating state tax funding.",
    topic_name: "Public Goods & The Free-Rider Problem",
    instruction_category: "Economics"
  },
  {
    question_number: 71,
    question_text: "'Asymmetric Information' in market transactions gives rise to which two classic economic problems?",
    option_a: "Adverse Selection (pre-contractual hidden information) and Moral Hazard (post-contractual hidden action)",
    option_b: "Elastic demand and inelastic supply",
    option_c: "Fiscal surplus and monetary deficit",
    option_d: "Perfect competition and pure monopoly",
    options: [
      "Adverse Selection (pre-contractual hidden information) and Moral Hazard (post-contractual hidden action)",
      "Elastic demand and inelastic supply",
      "Fiscal surplus and monetary deficit",
      "Perfect competition and pure monopoly"
    ],
    correct_answer: "A",
    explanation: "Information asymmetry causes Adverse Selection (e.g., higher proportion of high-risk buyers in insurance) and Moral Hazard (insured individuals taking greater risks knowing damages are covered).",
    topic_name: "Asymmetric Information - Adverse Selection & Moral Hazard",
    instruction_category: "Economics"
  },
  {
    question_number: 72,
    question_text: "'Economies of Scale' occur when a firm expands its production scale in the long run and experiences:",
    option_a: "A continuous rise in Total Fixed Costs",
    option_b: "An immediate collapse in sales revenues",
    option_c: "A decrease in Long-Run Average Total Cost ($LRATC$) as output increases due to labor specialization, bulk discounts, and technological efficiencies",
    option_d: "An increase in Marginal Cost above Average Total Cost",
    options: [
      "A continuous rise in Total Fixed Costs",
      "An immediate collapse in sales revenues",
      "A decrease in Long-Run Average Total Cost ($LRATC$) as output increases due to labor specialization, bulk discounts, and technological efficiencies",
      "An increase in Marginal Cost above Average Total Cost"
    ],
    correct_answer: "C",
    explanation: "Economies of scale lower per-unit cost ($LRATC$) as plant size expands, through division of labor, managerial specialization, volume purchasing discounts, and large-scale machinery.",
    topic_name: "Long-Run Cost Theory - Economies of Scale",
    instruction_category: "Economics"
  },
  {
    question_number: 73,
    question_text: "'Diseconomies of Scale' in long-run industrial expansion occur when:",
    option_a: "Per-unit production cost falls to zero",
    option_b: "A firm becomes so excessively large that managerial bottlenecks, communication breakdowns, and bureaucratic inefficiencies cause Long-Run Average Cost to rise",
    option_c: "The government nationalizes all private manufacturing",
    option_d: "The firm doubles its market advertising budget",
    options: [
      "Per-unit production cost falls to zero",
      "A firm becomes so excessively large that managerial bottlenecks, communication breakdowns, and bureaucratic inefficiencies cause Long-Run Average Cost to rise",
      "The government nationalizes all private manufacturing",
      "The firm doubles its market advertising budget"
    ],
    correct_answer: "B",
    explanation: "Beyond minimum efficient scale, excessive organizational complexity leads to administrative friction, communication lag, and worker alienation, pushing $LRATC$ upward.",
    topic_name: "Diseconomies of Scale",
    instruction_category: "Economics"
  },
  {
    question_number: 74,
    question_text: "In microeconomics, the 'Short Run' is distinguished from the 'Long Run' by the fact that in the short run:",
    option_a: "At least one input of production (such as factory plant size or capital equipment) is fixed in quantity",
    option_b: "All factors of production are completely variable",
    option_c: "Firms can freely enter and exit the industry",
    option_d: "No costs are incurred by the firm",
    options: [
      "At least one input of production (such as factory plant size or capital equipment) is fixed in quantity",
      "All factors of production are completely variable",
      "Firms can freely enter and exit the industry",
      "No costs are incurred by the firm"
    ],
    correct_answer: "A",
    explanation: "The short run is a time horizon where at least one factor input is fixed (giving rise to fixed costs); in the long run, all inputs and costs are variable and firms can enter or exit.",
    topic_name: "Production Horizons - Short Run vs Long Run",
    instruction_category: "Economics"
  },
  {
    question_number: 75,
    question_text: "In the short run, a perfectly competitive firm will choose to shut down operations immediately if the market price ($P$) falls below:",
    option_a: "Average Total Cost ($ATC$)",
    option_b: "Total Fixed Cost ($TFC$)",
    option_c: "Marginal Revenue ($MR$)",
    option_d: "Minimum Average Variable Cost ($P < \\min AVC$)",
    options: [
      "Average Total Cost ($ATC$)",
      "Total Fixed Cost ($TFC$)",
      "Marginal Revenue ($MR$)",
      "Minimum Average Variable Cost ($P < \\min AVC$)"
    ],
    correct_answer: "D",
    explanation: "If price falls below minimum $AVC$, the firm cannot even cover its operating variable expenses (wages, materials); staying open loses all fixed costs plus variable costs, so shutting down minimizes losses to just fixed costs.",
    topic_name: "Firm Decision - Short-Run Shutdown Rule",
    instruction_category: "Economics"
  },
  {
    question_number: 76,
    question_text: "The 'Break-Even Point' for a firm in a competitive market occurs at the output level where:",
    option_a: "Total revenue is zero",
    option_b: "Market price equals minimum Average Total Cost ($P = \\min ATC$), yielding zero economic profit (normal profit)",
    option_c: "Marginal cost is at its maximum peak",
    option_d: "Fixed costs exceed variable costs",
    options: [
      "Total revenue is zero",
      "Market price equals minimum Average Total Cost ($P = \\min ATC$), yielding zero economic profit (normal profit)",
      "Marginal cost is at its maximum peak",
      "Fixed costs exceed variable costs"
    ],
    correct_answer: "B",
    explanation: "At $P = \\min ATC$, total revenue equals total economic cost ($TR = TC$), meaning the firm earns a normal rate of return (zero economic profit) covering all explicit and implicit opportunity costs.",
    topic_name: "Break-Even Point & Normal Profit",
    instruction_category: "Economics"
  },
  {
    question_number: 77,
    question_text: "The pricing strategy of 'Price Discrimination' (such as student discounts on airline tickets) occurs when a firm:",
    option_a: "Charges the exact same price to all customers without exception",
    option_b: "Sells lower quality goods at higher prices illegally",
    option_c: "Charges different prices to different consumer segments for identical goods based on differences in price elasticity of demand, without cost differences",
    option_d: "Is forced by government decree to lower all prices",
    options: [
      "Charges the exact same price to all customers without exception",
      "Sells lower quality goods at higher prices illegally",
      "Charges different prices to different consumer segments for identical goods based on differences in price elasticity of demand, without cost differences",
      "Is forced by government decree to lower all prices"
    ],
    correct_answer: "C",
    explanation: "A firm with monopoly power practices 3rd-degree price discrimination by charging higher prices to price-inelastic buyers (business travelers) and lower prices to price-elastic buyers (students), capturing consumer surplus.",
    topic_name: "Monopoly Pricing - Price Discrimination",
    instruction_category: "Economics"
  },
  {
    question_number: 78,
    question_text: "A 'Cartel' (such as the Organization of the Petroleum Exporting Countries - OPEC) is a formal collusive agreement among oligopoly producers designed to:",
    option_a: "Restrict industry output, fix market prices, and allocate market quotas to maximize joint industry monopoly profits",
    option_b: "Encourage intense price wars among member firms",
    option_c: "Abolish all international crude oil exports",
    option_d: "Subsidize petroleum consumption for all poor countries",
    options: [
      "Restrict industry output, fix market prices, and allocate market quotas to maximize joint industry monopoly profits",
      "Encourage intense price wars among member firms",
      "Abolish all international crude oil exports",
      "Subsidize petroleum consumption for all poor countries"
    ],
    correct_answer: "A",
    explanation: "Cartels collude formally to restrict supply and behave like a monopoly, raising prices and profits; however, cartels face instability due to individual incentives to cheat on assigned quotas.",
    topic_name: "Oligopolistic Collusion & Cartels",
    instruction_category: "Economics"
  },
  {
    question_number: 79,
    question_text: "In Game Theory analysis of oligopolistic competition, the 'Prisoner's Dilemma' illustrates how:",
    option_a: "Firms always achieve the socially optimal competitive outcome",
    option_b: "Dominant individual self-interest leads competing players to choose non-cooperative strategies resulting in an outcome worse for both than mutual cooperation",
    option_c: "Monopolists always face perfectly elastic demand curves",
    option_d: "Price leadership eliminates all business risk",
    options: [
      "Firms always achieve the socially optimal competitive outcome",
      "Dominant individual self-interest leads competing players to choose non-cooperative strategies resulting in an outcome worse for both than mutual cooperation",
      "Monopolists always face perfectly elastic demand curves",
      "Price leadership eliminates all business risk"
    ],
    correct_answer: "B",
    explanation: "The Prisoner's Dilemma models strategic conflict: each firm's dominant strategy (e.g., cutting price or cheating on a cartel) results in a Nash Equilibrium where both earn lower profits than if they cooperated.",
    topic_name: "Game Theory & The Prisoner's Dilemma",
    instruction_category: "Economics"
  },
  {
    question_number: 80,
    question_text: "The fundamental National Income Accounting identity for an open macroeconomy is expressed as:",
    option_a: "$Y = C + I + G + NX$",
    option_b: "$Y = C - I - G - NX$",
    option_c: "$Y = \\text{Taxes} + \\text{Tariffs} + \\text{Subsidies}$",
    option_d: "$Y = \\text{Money Supply} / \\text{Price Level}$",
    options: [
      "$Y = C + I + G + NX$",
      "$Y = C - I - G - NX$",
      "$Y = \\text{Taxes} + \\text{Tariffs} + \\text{Subsidies}$",
      "$Y = \\text{Money Supply} / \\text{Price Level}$"
    ],
    correct_answer: "A",
    explanation: "Total national output/income ($Y$) identically equals Aggregate Expenditure: Household Consumption ($C$) + Gross Private Investment ($I$) + Government Purchases ($G$) + Net Exports ($NX = X - M$).",
    topic_name: "National Income Accounting Identity",
    instruction_category: "Economics"
  },
  {
    question_number: 81,
    question_text: "A nation's 'Per Capita Real GDP' is calculated by:",
    option_a: "Multiplying GDP by the national inflation rate",
    option_b: "Subtracting total imports from nominal GDP",
    option_c: "Adding all foreign remittances to the state budget",
    option_d: "Dividing the nation's Real GDP by its total population ($\\text{Per Capita GDP} = \\frac{\\text{Real GDP}}{\\text{Total Population}}$)",
    options: [
      "Multiplying GDP by the national inflation rate",
      "Subtracting total imports from nominal GDP",
      "Adding all foreign remittances to the state budget",
      "Dividing the nation's Real GDP by its total population ($\\text{Per Capita GDP} = \\frac{\\text{Real GDP}}{\\text{Total Population}}$)"
    ],
    correct_answer: "D",
    explanation: "Per capita real GDP measures average economic output per resident, serving as a standard baseline indicator for comparing national average standards of living across countries.",
    topic_name: "Per Capita GDP Calculation",
    instruction_category: "Economics"
  },
  {
    question_number: 82,
    question_text: "Economic transactions that take place in the 'Informal / Underground Economy' (such as unregistered street vending or barter services):",
    option_a: "Are counted twice in national GDP statistics",
    option_b: "Are typically unrecorded and excluded from official GDP calculations, causing official GDP figures to understate total economic output",
    option_c: "Are fully taxed through automatic corporate payroll systems",
    option_d: "Represent 100% of GDP in all developed nations",
    options: [
      "Are counted twice in national GDP statistics",
      "Are typically unrecorded and excluded from official GDP calculations, causing official GDP figures to understate total economic output",
      "Are fully taxed through automatic corporate payroll systems",
      "Represent 100% of GDP in all developed nations"
    ],
    correct_answer: "B",
    explanation: "Because informal and subsistence activities are not mediated through registered markets or tax records, standard GDP statistics underestimate total productive economic activity in developing economies.",
    topic_name: "Limitations of GDP - Informal Economy",
    instruction_category: "Economics"
  },
  {
    question_number: 83,
    question_text: "The macroeconomic phenomenon known as 'Stagflation' is characterized by the coexistence of:",
    option_a: "Rapid economic expansion, low inflation, and labor shortages",
    option_b: "A budget surplus combined with zero interest rates",
    option_c: "Stagnant economic growth (or recession), high unemployment, and high inflation simultaneously",
    option_d: "Falling prices and hyper-employment",
    options: [
      "Rapid economic expansion, low inflation, and labor shortages",
      "A budget surplus combined with zero interest rates",
      "Stagnant economic growth (or recession), high unemployment, and high inflation simultaneously",
      "Falling prices and hyper-employment"
    ],
    correct_answer: "C",
    explanation: "Stagflation (stagnation + inflation) typically results from severe adverse supply shocks (e.g. 1970s oil crises) that shift the SRAS curve leftward, simultaneously causing falling GDP and rising price levels.",
    topic_name: "Macroeconomic Stagflation",
    instruction_category: "Economics"
  },
  {
    question_number: 84,
    question_text: "The traditional short-run 'Phillips Curve' suggests an inverse relationship between:",
    option_a: "The rate of inflation and the rate of unemployment",
    option_b: "Government spending and corporate tax receipts",
    option_c: "Money supply and foreign exchange reserves",
    option_d: "Agricultural exports and manufacturing imports",
    options: [
      "The rate of inflation and the rate of unemployment",
      "Government spending and corporate tax receipts",
      "Money supply and foreign exchange reserves",
      "Agricultural exports and manufacturing imports"
    ],
    correct_answer: "A",
    explanation: "A.W. Phillips observed that in the short run, higher aggregate demand reduces unemployment but creates demand-pull inflationary pressure, creating a short-run trade-off between inflation and unemployment.",
    topic_name: "The Phillips Curve Trade-off",
    instruction_category: "Economics"
  },
  {
    question_number: 85,
    question_text: "A tax system in which individuals with higher income pay a higher percentage (marginal tax rate) of their income in taxes is termed a:",
    option_a: "Regressive tax",
    option_b: "Proportional (flat) tax",
    option_c: "Poll tax",
    option_d: "Progressive tax",
    options: ["Regressive tax", "Proportional (flat) tax", "Poll tax", "Progressive tax"],
    correct_answer: "D",
    explanation: "A progressive income tax applies graduated brackets where tax rates rise as taxable income increases, promoting vertical equity and redistributing income toward lower-income households.",
    topic_name: "Taxation Structures - Progressive, Proportional, Regressive",
    instruction_category: "Economics"
  },
  {
    question_number: 86,
    question_text: "How do 'Direct Taxes' differ from 'Indirect Taxes'?",
    option_a: "Direct taxes are paid in cash while indirect taxes are paid with agricultural goods",
    option_b: "Direct taxes are levied directly on the income, wealth, or profits of individuals and corporations (e.g. personal income tax), whereas indirect taxes are levied on goods and services transactions (e.g. VAT, excise duties, customs tariffs)",
    option_c: "Indirect taxes are voluntary while direct taxes are illegal",
    option_d: "Direct taxes apply only to foreign tourists",
    options: [
      "Direct taxes are paid in cash while indirect taxes are paid with agricultural goods",
      "Direct taxes are levied directly on the income, wealth, or profits of individuals and corporations (e.g. personal income tax), whereas indirect taxes are levied on goods and services transactions (e.g. VAT, excise duties, customs tariffs)",
      "Indirect taxes are voluntary while direct taxes are illegal",
      "Direct taxes apply only to foreign tourists"
    ],
    correct_answer: "B",
    explanation: "Direct taxes cannot be shifted to others (borne by the entity taxed); indirect taxes (VAT, sales tax) are collected by intermediaries from consumers and can be shifted across market participants.",
    topic_name: "Direct vs Indirect Taxation",
    instruction_category: "Economics"
  },
  {
    question_number: 87,
    question_text: "A government experiences a 'Budget Deficit' in a given fiscal year when:",
    option_a: "Its total expenditures exceed its total tax revenues ($G > T$)",
    option_b: "Tax revenues equal total expenditures ($T = G$)",
    option_c: "Total tax revenues exceed total expenditures ($T > G$)",
    option_d: "The central bank doubles the interest rate",
    options: [
      "Its total expenditures exceed its total tax revenues ($G > T$)",
      "Tax revenues equal total expenditures ($T = G$)",
      "Total tax revenues exceed total expenditures ($T > G$)",
      "The central bank doubles the interest rate"
    ],
    correct_answer: "A",
    explanation: "When government operational and capital spending ($G$) exceeds tax receipts ($T$), the fiscal shortfall creates a budget deficit that must be financed by borrowing through treasury bills/bonds.",
    topic_name: "Fiscal Budget Balance - Deficits vs Surpluses",
    instruction_category: "Economics"
  },
  {
    question_number: 88,
    question_text: "The 'National Debt' (Public Debt) of a country represents:",
    option_a: "The total value of paper money printed by the central bank in one month",
    option_b: "The annual difference between exports and imports",
    option_c: "The cumulative total sum of all past outstanding borrowed funds owed by the government to domestic and foreign creditors",
    option_d: "The total savings of private commercial bank customers",
    options: [
      "The total value of paper money printed by the central bank in one month",
      "The annual difference between exports and imports",
      "The cumulative total sum of all past outstanding borrowed funds owed by the government to domestic and foreign creditors",
      "The total savings of private commercial bank customers"
    ],
    correct_answer: "C",
    explanation: "While the budget deficit is an annual flow, the national debt is the stock variable representing the cumulative total of all unpaid historical government deficits financed through sovereign debt instruments.",
    topic_name: "National Public Debt",
    instruction_category: "Economics"
  },
  {
    question_number: 89,
    question_text: "The 'Crowding-Out Effect' in macroeconomic fiscal theory occurs when heavy government deficit borrowing:",
    option_a: "Eliminates all commercial banking transactions",
    option_b: "Drives up market interest rates, which reduces (crowds out) private business investment spending and consumer credit",
    option_c: "Forces all private companies to shut down immediately",
    option_d: "Doubles the country's agricultural output overnight",
    options: [
      "Eliminates all commercial banking transactions",
      "Drives up market interest rates, which reduces (crowds out) private business investment spending and consumer credit",
      "Forces all private companies to shut down immediately",
      "Doubles the country's agricultural output overnight"
    ],
    correct_answer: "B",
    explanation: "When governments borrow heavily in financial loanable funds markets, the increased demand for credit raises equilibrium interest rates, increasing capital costs for private firms and dampening private investment.",
    topic_name: "Fiscal Deficits & The Crowding-Out Effect",
    instruction_category: "Economics"
  },
  {
    question_number: 90,
    question_text: "'Open Market Operations' (OMO) by the Central Bank involve:",
    option_a: "The buying and selling of government treasury securities in financial markets to regulate bank reserves and the money supply",
    option_b: "Opening municipal outdoor vegetable markets on weekends",
    option_c: "Inspecting corporate factory machinery for safety",
    option_d: "Setting the retail prices of consumer electronics",
    options: [
      "The buying and selling of government treasury securities in financial markets to regulate bank reserves and the money supply",
      "Opening municipal outdoor vegetable markets on weekends",
      "Inspecting corporate factory machinery for safety",
      "Setting the retail prices of consumer electronics"
    ],
    correct_answer: "A",
    explanation: "OMO is the most flexible tool of monetary policy: central bank purchases of treasury bills inject liquidity and expand the money supply, whereas open market sales absorb liquidity.",
    topic_name: "Central Bank Tools - Open Market Operations",
    instruction_category: "Economics"
  },
  {
    question_number: 91,
    question_text: "If the Central Bank establishes a Legal Required Reserve Ratio ($RR$) of 10% on commercial bank checkable deposits, the theoretical Simple Money Multiplier is:",
    option_a: "1.0",
    option_b: "5.0",
    option_c: "2.0",
    option_d: "10.0 ($\\text{Money Multiplier} = \\frac{1}{RR} = \\frac{1}{0.10} = 10$)",
    options: [
      "1.0",
      "5.0",
      "2.0",
      "10.0 ($\\text{Money Multiplier} = \\frac{1}{RR} = \\frac{1}{0.10} = 10$)"
    ],
    correct_answer: "D",
    explanation: "The potential deposit expansion multiplier equals the reciprocal of the required reserve ratio ($m = \\frac{1}{RR} = \\frac{1}{0.10} = 10$). Each birr of new excess reserves can support up to 10 birr in new deposits.",
    topic_name: "Fractional Reserve Banking & Money Multiplier",
    instruction_category: "Economics"
  },
  {
    question_number: 92,
    question_text: "According to John Maynard Keynes' Liquidity Preference Theory, what are the three distinct motives for holding money balances in cash?",
    option_a: "The agricultural motive, the industrial motive, and the mining motive",
    option_b: "The Transactions motive (daily purchases), Precautionary motive (unforeseen emergencies), and Speculative motive (expectations regarding bond yields)",
    option_c: "The export motive, the import motive, and the tariff motive",
    option_d: "The printing motive, the auditing motive, and the taxation motive",
    options: [
      "The agricultural motive, the industrial motive, and the mining motive",
      "The Transactions motive (daily purchases), Precautionary motive (unforeseen emergencies), and Speculative motive (expectations regarding bond yields)",
      "The export motive, the import motive, and the tariff motive",
      "The printing motive, the auditing motive, and the taxation motive"
    ],
    correct_answer: "B",
    explanation: "Keynes identified: (1) Transactions demand (dependent on income for daily spending), (2) Precautionary demand (for unexpected crises), and (3) Speculative demand (inversely related to interest rates/bond prices).",
    topic_name: "Keynesian Liquidity Preference Theory",
    instruction_category: "Economics"
  },
  {
    question_number: 93,
    question_text: "What is a primary difference in government revenue generation between an Import Tariff and an Import Quota?",
    option_a: "An import tariff generates tax revenue for the national treasury, whereas a quota restricts quantity and generates quota rents captured by license holders (unless auctioned)",
    option_b: "A tariff is completely illegal while a quota is mandatory under all circumstances",
    option_c: "Quotas double government tax revenues while tariffs yield zero revenue",
    option_d: "Tariffs apply only to domestic exports",
    options: [
      "An import tariff generates tax revenue for the national treasury, whereas a quota restricts quantity and generates quota rents captured by license holders (unless auctioned)",
      "A tariff is completely illegal while a quota is mandatory under all circumstances",
      "Quotas double government tax revenues while tariffs yield zero revenue",
      "Tariffs apply only to domestic exports"
    ],
    correct_answer: "A",
    explanation: "While both raise domestic prices and protect domestic producers, tariffs generate direct fiscal revenue ($T = \\text{Tariff} \\times \\text{Imports}$) for the state treasury, whereas quotas bestow windfall profits upon import license holders.",
    topic_name: "Trade Protectionism - Tariffs vs Quotas",
    instruction_category: "Economics"
  },
  {
    question_number: 94,
    question_text: "The World Trade Organization (WTO) is the premier international organization dedicated to:",
    option_a: "Enforcing absolute price ceilings on all agricultural exports globally",
    option_b: "Printing a single global currency for all nations",
    option_c: "Administering multilateral international trade agreements, reducing global tariffs and trade barriers, and arbitrating trade disputes among member states",
    option_d: "Managing military defense treaties",
    options: [
      "Enforcing absolute price ceilings on all agricultural exports globally",
      "Printing a single global currency for all nations",
      "Administering multilateral international trade agreements, reducing global tariffs and trade barriers, and arbitrating trade disputes among member states",
      "Managing military defense treaties"
    ],
    correct_answer: "C",
    explanation: "Succeeding GATT in 1995, the WTO provides the legal and institutional framework for negotiating international trade liberalization, enforcing non-discrimination (Most Favored Nation), and settling trade disputes.",
    topic_name: "The World Trade Organization (WTO)",
    instruction_category: "Economics"
  },
  {
    question_number: 95,
    question_text: "In the economic development of developing nations, 'Structural Transformation' is characterized by:",
    option_a: "The complete abandonment of all modern technology",
    option_b: "The progressive reallocation of labor and productive economic resources from low-productivity subsistence agriculture toward high-productivity modern manufacturing, industrial value addition, and advanced services",
    option_c: "The permanent migration of entire populations into desert regions",
    option_d: "The total elimination of the industrial manufacturing sector",
    options: [
      "The complete abandonment of all modern technology",
      "The progressive reallocation of labor and productive economic resources from low-productivity subsistence agriculture toward high-productivity modern manufacturing, industrial value addition, and advanced services",
      "The permanent migration of entire populations into desert regions",
      "The total elimination of the industrial manufacturing sector"
    ],
    correct_answer: "B",
    explanation: "Structural transformation (Lewis model) is the fundamental developmental transition where economy-wide productivity rises through modernization, urbanization, and shift of surplus labor to high-productivity industries.",
    topic_name: "Development Economics - Structural Transformation",
    instruction_category: "Economics"
  },
  {
    question_number: 96,
    question_text: "Microfinance Institutions (MFIs) in Ethiopia play a vital role in grassroots economic development by:",
    option_a: "Providing accessible, collateral-flexible micro-credit loans, small-scale savings products, and financial literacy to low-income rural households, farmers, and micro-entrepreneurs",
    option_b: "Financing large-scale international aerospace satellites exclusively",
    option_c: "Replacing the National Bank of Ethiopia in foreign reserve storage",
    option_d: "Imposing prohibitive corporate interest rates on smallholder farmers",
    options: [
      "Providing accessible, collateral-flexible micro-credit loans, small-scale savings products, and financial literacy to low-income rural households, farmers, and micro-entrepreneurs",
      "Financing large-scale international aerospace satellites exclusively",
      "Replacing the National Bank of Ethiopia in foreign reserve storage",
      "Imposing prohibitive corporate interest rates on smallholder farmers"
    ],
    correct_answer: "A",
    explanation: "Microfinance institutions (such as ACSI, DECSI, OCSSCO) expand financial inclusion, enabling rural women and smallholder entrepreneurs to access capital for fertilizer, livestock, and small commercial ventures.",
    topic_name: "Financial Inclusion & Microfinance in Ethiopia",
    instruction_category: "Economics"
  },
  {
    question_number: 97,
    question_text: "The absolute value of the slope of the Production Possibility Frontier (PPF) at any given point measures the:",
    option_a: "Income elasticity of demand",
    option_b: "Consumer price index",
    option_c: "Average total cost",
    option_d: "Marginal Rate of Transformation ($MRT$), which represents the opportunity cost of producing one additional unit of Good X in terms of Good Y",
    options: [
      "Income elasticity of demand",
      "Consumer price index",
      "Average total cost",
      "Marginal Rate of Transformation ($MRT$), which represents the opportunity cost of producing one additional unit of Good X in terms of Good Y"
    ],
    correct_answer: "D",
    explanation: "The slope of the PPF ($\\frac{\\Delta Y}{\\Delta X}$) represents the Marginal Rate of Transformation ($MRT$), reflecting the law of increasing opportunity costs as more resources are reallocated between goods.",
    topic_name: "PPF Slope & Marginal Rate of Transformation",
    instruction_category: "Economics"
  },
  {
    question_number: 98,
    question_text: "A 'Giffen Good' is a rare theoretical type of inferior good for which:",
    option_a: "An increase in price leads to a decrease in quantity demanded",
    option_b: "An increase in the price of the good causes an increase in quantity demanded (violating the standard law of demand) because the negative income effect outweighs the substitution effect",
    option_c: "The price elasticity of demand is infinity",
    option_d: "Marginal utility is always negative",
    options: [
      "An increase in price leads to a decrease in quantity demanded",
      "An increase in the price of the good causes an increase in quantity demanded (violating the standard law of demand) because the negative income effect outweighs the substitution effect",
      "The price elasticity of demand is infinity",
      "Marginal utility is always negative"
    ],
    correct_answer: "B",
    explanation: "For a Giffen good (an essential staple occupying a large fraction of poor consumers' budgets), a price increase severely reduces real income, forcing households to cut back on luxury foods and buy even more of the staple good.",
    topic_name: "Exceptions to the Law of Demand - Giffen Goods",
    instruction_category: "Economics"
  },
  {
    question_number: 99,
    question_text: "A 'Veblen Good' (associated with Thorstein Veblen's concept of 'Conspicuous Consumption') is a luxury item for which demand increases when price rises because:",
    option_a: "It is an essential life-saving medicine",
    option_b: "It is produced exclusively by state-owned monopolies",
    option_c: "The high price itself confers social status, prestige, and exclusivity on the affluent consumer",
    option_d: "The good is subject to price ceiling regulations",
    options: [
      "It is an essential life-saving medicine",
      "It is produced exclusively by state-owned monopolies",
      "The high price itself confers social status, prestige, and exclusivity on the affluent consumer",
      "The good is subject to price ceiling regulations"
    ],
    correct_answer: "C",
    explanation: "Veblen goods (designer luxury watches, haute couture, supercars) exhibit upward-sloping demand over certain price ranges because high prices function as status symbols signaling wealth.",
    topic_name: "Conspicuous Consumption & Veblen Goods",
    instruction_category: "Economics"
  },
  {
    question_number: 100,
    question_text: "In comprehensive summary, the discipline of 'Economics' is most accurately defined as:",
    option_a: "The social science that studies how individuals, households, businesses, governments, and societies choose to allocate scarce productive resources among competing alternative uses to satisfy unlimited human wants and needs",
    option_b: "The technical trade of printing physical paper currency and counting coins",
    option_c: "The mathematical forecasting of the daily stock market without errors",
    option_d: "The study of how to eliminate all forms of taxation and government",
    options: [
      "The social science that studies how individuals, households, businesses, governments, and societies choose to allocate scarce productive resources among competing alternative uses to satisfy unlimited human wants and needs",
      "The technical trade of printing physical paper currency and counting coins",
      "The mathematical forecasting of the daily stock market without errors",
      "The study of how to eliminate all forms of taxation and government"
    ],
    correct_answer: "A",
    explanation: "Economics is the systematic study of scarcity, choice, production, distribution, and consumption of goods and services, aiming to optimize human welfare and understand economic behavior under constraints.",
    topic_name: "Comprehensive Definition of Economics",
    instruction_category: "Economics"
  }
];

module.exports = questions;
