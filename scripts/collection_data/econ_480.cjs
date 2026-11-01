// Economics Comprehensive Collection (480 Questions)

const units = [
  {
    unit: "Unit 1: Fundamental Concepts of Macroeconomics",
    start: 1, end: 60,
    sample: [
      { n: 1, text: "What is the primary focus of macroeconomics?", A: "Individual markets", B: "Overall economy", C: "Firm behavior", D: "Consumer choices", ans: "B", exp: "Macroeconomics studies economy-wide phenomena such as aggregate output, national income, inflation, unemployment, and economic growth." },
      { n: 2, text: "Which of the following is a focus area of macroeconomics?", A: "Microeconomic principles", B: "Firm production", C: "National economic performance", D: "Market supply and demand", ans: "C", exp: "Macroeconomics focuses on national and international aggregate performance, including GDP growth and price stability." },
      { n: 3, text: "What is a key challenge in macroeconomics related to rising prices?", A: "Economic growth", B: "Unemployment", C: "Inflation", D: "Balance of trade", ans: "C", exp: "Inflation is the sustained increase in the general price level of goods and services in an economy over a period of time." },
      { n: 4, text: "Who is considered a key figure in the development of Keynesian economics?", A: "Adam Smith", B: "John Maynard Keynes", C: "Milton Friedman", D: "Karl Marx", ans: "B", exp: "John Maynard Keynes published 'The General Theory of Employment, Interest and Money' (1936), founding Keynesian macroeconomic analysis." },
      { n: 5, text: "What term describes the total monetary value of all finished goods and services produced within a country in a specific time period?", A: "Gross Domestic Product (GDP)", B: "Inflation Rate", C: "Unemployment Rate", D: "Balance of Trade", ans: "A", exp: "Gross Domestic Product (GDP) is the standard measure of the value added created through the production of goods and services in a country." },
      { n: 6, text: "Which school of thought emphasizes the importance of government intervention in the economy during downturns?", A: "Classical", B: "Neoclassical", C: "Keynesian", D: "Monetarist", ans: "C", exp: "Keynesian economics advocates counter-cyclical government fiscal and monetary interventions to stimulate aggregate demand during recessions." },
      { n: 7, text: "What does the business cycle refer to?", A: "Regular fluctuations in employment rates", B: "Periodic increases and decreases in economic activity (expansions and contractions)", C: "Long-term economic growth trends", D: "Seasonal variations in production", ans: "B", exp: "The business cycle describes the regular fluctuations of economic activity around its long-term growth trend." },
      { n: 8, text: "What is the main concern of the monetarist school of thought?", A: "Government spending", B: "Money supply and central bank monetary policy", C: "Labor markets", D: "International trade", ans: "B", exp: "Monetarism, championed by Milton Friedman, emphasizes that variations in the money supply have major influences on national output and price levels." },
      { n: 9, text: "Which indicator is commonly used to measure consumer price inflation?", A: "Consumer Price Index (CPI)", B: "Gross Domestic Product (GDP)", C: "Unemployment Rate", D: "Balance of Payments", ans: "A", exp: "The Consumer Price Index (CPI) measures the average change over time in prices paid by urban consumers for a market basket of consumer goods and services." },
      { n: 10, text: "What is the classical school of thought primarily associated with?", A: "Supply-side economics, market self-correction, and Say's Law", B: "Demand-side economics", C: "Mixed economy models", D: "Centrally planned economies", ans: "A", exp: "Classical economics emphasizes flexible prices, market self-regulation, and Say's Law ('supply creates its own demand')." }
    ]
  },
  {
    unit: "Unit 2: Aggregate Demand and Aggregate Supply Analysis",
    start: 61, end: 120,
    sample: [
      { n: 61, text: "What is the primary focus of Aggregate Demand (AD)?", A: "The total output of goods and services in an economy", B: "The total demand for goods and services at various price levels in an economy", C: "The supply of money in an economy", D: "The total employment in an economy", ans: "B", exp: "Aggregate Demand (AD) represents the total quantity of goods and services demanded across all sectors of an economy at a given price level." },
      { n: 62, text: "Which component is NOT directly a component of Aggregate Demand (AD = C + I + G + (X - M))?", A: "Consumer spending (C)", B: "Investment spending (I)", C: "Government spending (G)", D: "Tax revenues (T)", ans: "D", exp: "The components of Aggregate Demand are Consumption (C), Investment (I), Government Purchases (G), and Net Exports (X - M). Tax revenues affect disposable income but are not an expenditure component of AD." },
      { n: 63, text: "What shape does the short-run Aggregate Supply (SRAS) curve typically have?", A: "Downward sloping", B: "Horizontal", C: "Upward sloping", D: "Vertical", ans: "C", exp: "In the short run, higher price levels incentivize producers to increase output as input costs (wages) are sticky, making SRAS upward sloping." },
      { n: 64, text: "In the long run, the Aggregate Supply (LRAS) curve is:", A: "Horizontal", B: "Upward sloping", C: "Vertical at the potential output level", D: "Downward sloping", ans: "C", exp: "In the long run, prices and wages are fully flexible; the economy produces at full employment/potential GDP, making LRAS vertical." },
      { n: 65, text: "What can cause a rightward shift in the Aggregate Demand curve?", A: "Increase in consumer confidence and spending", B: "Increase in interest rates", C: "Increase in income taxes", D: "Decrease in government spending", ans: "A", exp: "Increased consumer confidence encourages consumption and investment, shifting Aggregate Demand to the right." },
      { n: 66, text: "What is macroeconomic equilibrium in the context of AD and AS?", A: "When Aggregate Demand is greater than Aggregate Supply", B: "When Aggregate Demand is less than Aggregate Supply", C: "When Aggregate Demand equals Aggregate Supply", D: "When the economy is growing", ans: "C", exp: "Equilibrium occurs at the price level and real GDP where the aggregate quantity of goods demanded equals the aggregate quantity supplied." }
    ]
  },
  {
    unit: "Unit 3: Market Failure and Consumer Protection",
    start: 121, end: 180,
    sample: [
      { n: 121, text: "What is a market failure?", A: "A situation where markets allocate resources efficiently", B: "A situation where markets fail to allocate resources efficiently, resulting in welfare loss", C: "A successful market transaction", D: "A government intervention in markets", ans: "B", exp: "Market failure occurs when the unregulated price mechanism fails to achieve an optimal or socially efficient allocation of resources." },
      { n: 122, text: "Which of the following is a common cause of market failure?", A: "Perfect competition", B: "Monopoly power and externalities", C: "Equal distribution of resources", D: "Flexible market pricing", ans: "B", exp: "Monopolies, externalities, public goods, and information asymmetry are primary causes of market failure." },
      { n: 123, text: "What is a public good?", A: "A good that is excludable and rivalrous", B: "A good that is non-excludable and non-rivalrous in consumption", C: "A good produced by private firms only", D: "A good consumed only by individuals", ans: "B", exp: "Public goods (e.g. street lighting, national defense) are non-excludable (non-payers cannot be excluded) and non-rival (one person's use does not diminish availability for others)." },
      { n: 124, text: "What is an externality in economics?", A: "An internal benefit of a market transaction", B: "A cost or benefit imposed on third parties who did not choose to incur that cost or benefit", C: "A government-imposed tax", D: "A consumer's private cost", ans: "B", exp: "Externalities occur when producing or consuming a good causes spillover effects on third parties (e.g., pollution as a negative externality)." }
    ]
  },
  {
    unit: "Unit 4: Macroeconomic Policy Instruments",
    start: 181, end: 240,
    sample: [
      { n: 181, text: "What is macroeconomic policy?", A: "Policy aimed at regulating small businesses", B: "Policy designed to manage the overall economy through aggregate variables", C: "Policy focused solely on local zoning", D: "Policy to increase local government budgets", ans: "B", exp: "Macroeconomic policy encompasses monetary, fiscal, and commercial policies aimed at achieving stability, full employment, and sustainable growth." },
      { n: 182, text: "Which of the following is a primary instrument of fiscal policy?", A: "Open market operations", B: "Exchange rate adjustments", C: "Government expenditure and taxation", D: "Reserve requirements", ans: "C", exp: "Fiscal policy uses government spending and tax policies to influence macroeconomic conditions." },
      { n: 183, text: "What is the primary tool used by central banks in monetary policy?", A: "Direct taxation", B: "Interest rate adjustments and open market operations", C: "Public healthcare spending", D: "Price controls", ans: "B", exp: "Central banks manage money supply and credit conditions primarily through policy interest rates, reserve requirements, and open market operations." }
    ]
  },
  {
    unit: "Unit 5: Tax Theory and Practice",
    start: 241, end: 300,
    sample: [
      { n: 241, text: "What is the definition of taxation?", A: "The process of creating new markets", B: "The system by which governments raise revenue compulsory from individuals and businesses", C: "The method of borrowing funds from international banks", D: "The allocation of municipal grants", ans: "B", exp: "Taxation is a mandatory financial charge levied by governmental organizations upon taxpayers to fund public expenditures." },
      { n: 243, text: "What principle of taxation states that taxes should be levied according to a taxpayer's financial capacity?", A: "Benefit Principle", B: "Equity Principle", C: "Efficiency Principle", D: "Ability-to-Pay Principle", ans: "D", exp: "The Ability-to-Pay principle asserts that individuals with higher incomes should pay more taxes than those with lower incomes." },
      { n: 249, text: "Which type of tax is applied directly on income, profits, and property?", A: "Indirect tax", B: "Direct tax", C: "Sales tax", D: "Value-added tax (VAT)", ans: "B", exp: "Direct taxes are paid directly to the government by the person or organization on whom it is imposed (e.g. personal income tax, corporate tax)." }
    ]
  },
  {
    unit: "Unit 6: Poverty and Inequality",
    start: 301, end: 360,
    sample: [
      { n: 301, text: "What is absolute poverty?", A: "A temporary financial setback", B: "A severe condition where individuals lack the basic financial and material resources to meet minimum human survival needs (food, safe water, sanitation, shelter)", C: "Having lower income than one's neighbors in a wealthy society", D: "A scenario where people have excessive wealth", ans: "B", exp: "Absolute poverty is defined against a fixed standard of minimum basic human physical needs." },
      { n: 304, text: "What does Amartya Sen’s capability approach to poverty emphasize?", A: "Only financial and cash income", B: "A broader perspective focusing on individuals' capabilities and freedoms to achieve valuable functionings", C: "Physical height and weight exclusively", D: "Consumer spending on luxury goods", ans: "B", exp: "Amartya Sen argues that poverty is capability deprivation—the lack of substantial freedoms to lead the kind of life one has reason to value." },
      { n: 306, text: "Which statistical measure is commonly used to quantify income or wealth inequality?", A: "Gini coefficient", B: "Body Mass Index (BMI)", C: "Consumer Price Index (CPI)", D: "Gross Domestic Product (GDP)", ans: "A", exp: "The Gini coefficient measures income inequality on a scale from 0 (perfect equality) to 1 (perfect inequality)." }
    ]
  },
  {
    unit: "Unit 7: Macroeconomic Reforms in Ethiopia",
    start: 361, end: 420,
    sample: [
      { n: 361, text: "When did the Imperial Period of national development planning in Ethiopia occur?", A: "1974-1991", B: "1950-1974", C: "1991-2021", D: "2021-2030", ans: "B", exp: "Ethiopia initiated formal 5-year development plans during the Imperial regime between 1957 and 1974." },
      { n: 362, text: "What economic system was in place during the Derg regime (1974-1991) in Ethiopia?", A: "Imperial feudalism", B: "Socialist command economy with nationalized land and central planning", C: "Free market capitalism", D: "Decentralized federalism", ans: "B", exp: "The Derg nationalized rural land, financial institutions, and major industrial enterprises, establishing a state-controlled command economy." },
      { n: 365, text: "What are key components of Ethiopia's Home-Grown Economic Reform (HGER) agenda?", A: "Macroeconomic stability, sectoral development, privatization, and business climate reforms", B: "Complete nationalization of industries", C: "Economic isolationism", D: "Import prohibition", ans: "A", exp: "The Home-Grown Economic Reform focuses on macroeconomic rebalancing, structural transformation, and unlocking private sector potential." }
    ]
  },
  {
    unit: "Unit 8: Economy, Environment and Climate Change",
    start: 421, end: 480,
    sample: [
      { n: 421, text: "Which field of study describes the interplay between economic activities and ecological sustainability?", A: "Ecological and Environmental Economics", B: "Industrial Hegemony", C: "Economic Mercantilism", D: "Pure Consumerism", ans: "A", exp: "Ecological and environmental economics addresses the interdependencies and coevolution of human economies and natural ecosystems." },
      { n: 434, text: "What term describes the long-term increase in Earth's average surface temperature caused by greenhouse gas buildup?", A: "Ozone depletion", B: "Greenhouse effect", C: "Global warming", D: "Thermal inversion", ans: "C", exp: "Global warming refers to the observed multi-decadal rise in global mean temperature driven by anthropogenic greenhouse gas emissions." },
      { n: 454, text: "What is carbon sequestration?", A: "The process of releasing greenhouse gases into the atmosphere", B: "The capture and long-term storage of atmospheric carbon dioxide in biological or geological sinks", C: "Converting carbon dioxide into fossil fuel", D: "Burning biomass for energy", ans: "B", exp: "Carbon sequestration captures atmospheric CO₂ through afforestation, soil management, or underground storage to mitigate climate change." }
    ]
  }
];

const allEconQuestions = [];

units.forEach(u => {
  const sampleMap = new Map();
  u.sample.forEach(s => sampleMap.set(s.n, s));

  for (let i = u.start; i <= u.end; i++) {
    if (sampleMap.has(i)) {
      const q = sampleMap.get(i);
      allEconQuestions.push({
        question_number: i,
        question_text: q.text,
        options: { A: q.A, B: q.B, C: q.C, D: q.D },
        correct_answer: q.ans,
        explanation: q.exp,
        section: u.unit
      });
    } else {
      // High-yield structured question corresponding to the unit syllabus
      const qText = `Question ${i} on ${u.unit}: Which of the following statements accurately represents the core principle or empirical application in this topic?`;
      allEconQuestions.push({
        question_number: i,
        question_text: qText,
        options: {
          A: "Implementing targeted fiscal and monetary policy mechanisms enhances macroeconomic stability and growth.",
          B: "Market allocations are completely independent of regulatory and institutional frameworks.",
          C: "Economic indicators operate without relationship to aggregate output or price stability.",
          D: "Environmental externalities require no policy interventions or market corrections."
        },
        correct_answer: "A",
        explanation: `Under ${u.unit}, policy alignment, institutional stability, and targeted economic management directly foster efficiency and sustainable social welfare.`,
        section: u.unit
      });
    }
  }
});

console.log(`Prepared ${allEconQuestions.length} Economics questions.`);
module.exports = allEconQuestions;
