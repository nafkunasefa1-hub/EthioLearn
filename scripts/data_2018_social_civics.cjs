/**
 * 2018 E.C. Civics & Ethical Education Exam - EUEE Social Science Stream
 * Booklet Code: 560 - 100 Questions Complete with Answers & Detailed Explanations
 */

const questions = [
  {
    question_number: 1,
    question_text: "Which of the following statements best defines the fundamental concept of 'Democracy' in modern political theory?",
    option_a: "A system of government where supreme political authority is derived from the people through regular, free, fair, and competitive elections, governed by the rule of law and constitutional protection of fundamental human rights",
    option_b: "An absolute monarchy where power is inherited perpetually within a single royal family",
    option_c: "A military junta where policy decisions are decreed exclusively by senior armed forces officers",
    option_d: "A totalitarian state where the ruling party prohibits all forms of political disagreement",
    options: [
      "A system of government where supreme political authority is derived from the people through regular, free, fair, and competitive elections, governed by the rule of law and constitutional protection of fundamental human rights",
      "An absolute monarchy where power is inherited perpetually within a single royal family",
      "A military junta where policy decisions are decreed exclusively by senior armed forces officers",
      "A totalitarian state where the ruling party prohibits all forms of political disagreement"
    ],
    correct_answer: "A",
    explanation: "Democracy (derived from Greek 'demos' = people and 'kratos' = rule/power) is a system of governance where institutional power originates from citizen consent, exercised directly or through freely elected representatives under constitutional guarantees.",
    topic_name: "Fundamentals of Democracy",
    instruction_category: "Civics"
  },
  {
    question_number: 2,
    question_text: "The principle of the 'Rule of Law' (Supremacy of Law) fundamentally means that:",
    option_a: "Rulers and government officials are completely exempt from legal scrutiny and penalties",
    option_b: "Laws can be arbitrarily created, modified, or suspended by executive orders without legislative approval",
    option_c: "All persons, public institutions, and private entities—including the government itself—are accountable to publicly promulgated, equally enforced, and independently adjudicated laws",
    option_d: "Only impoverished citizens must obey the penal code while wealthy individuals are above the law",
    options: [
      "Rulers and government officials are completely exempt from legal scrutiny and penalties",
      "Laws can be arbitrarily created, modified, or suspended by executive orders without legislative approval",
      "All persons, public institutions, and private entities—including the government itself—are accountable to publicly promulgated, equally enforced, and independently adjudicated laws",
      "Only impoverished citizens must obey the penal code while wealthy individuals are above the law"
    ],
    correct_answer: "C",
    explanation: "The Rule of Law establishes that no individual or state organ is above the law. Laws must be clear, public, stable, applied evenly, and administered by an independent judiciary.",
    topic_name: "The Rule of Law",
    instruction_category: "Civics"
  },
  {
    question_number: 3,
    question_text: "In constitutional jurisprudence, 'Constitutionalism' refers to:",
    option_a: "The unlimited expansion of military power over civil society",
    option_b: "The political doctrine that the authority of government is derived from, defined by, and strictly limited by a body of fundamental law (the constitution)",
    option_c: "The practice of rewriting the constitution whenever a new leader takes power",
    option_d: "The total absence of any written legal framework in governance",
    options: [
      "The unlimited expansion of military power over civil society",
      "The political doctrine that the authority of government is derived from, defined by, and strictly limited by a body of fundamental law (the constitution)",
      "The practice of rewriting the constitution whenever a new leader takes power",
      "The total absence of any written legal framework in governance"
    ],
    correct_answer: "B",
    explanation: "Constitutionalism is the political philosophy and institutional mechanism limiting government powers through entrenched legal constraints, preventing arbitrary tyranny and safeguarding fundamental liberties.",
    topic_name: "Constitutionalism & Limited Government",
    instruction_category: "Civics"
  },
  {
    question_number: 4,
    question_text: "The political doctrine of 'Separation of Powers', famously articulated by French philosopher Baron de Montesquieu, divides state power into:",
    option_a: "Local, zonal, and municipal councils",
    option_b: "Ruling party, opposition parties, and non-voters",
    option_c: "Armed forces, police, and private security companies",
    option_d: "Three distinct branches: Legislative (law-making), Executive (law-enforcing), and Judicial (law-interpreting)",
    options: [
      "Local, zonal, and municipal councils",
      "Ruling party, opposition parties, and non-voters",
      "Armed forces, police, and private security companies",
      "Three distinct branches: Legislative (law-making), Executive (law-enforcing), and Judicial (law-interpreting)"
    ],
    correct_answer: "D",
    explanation: "Separation of Powers allocates distinct governmental functions to three independent branches—the Legislature (makes statutory laws), Executive (implements laws), and Judiciary (interprets laws and resolves disputes)—preventing concentration of absolute power.",
    topic_name: "Separation of Powers",
    instruction_category: "Civics"
  },
  {
    question_number: 5,
    question_text: "The institutional mechanism of 'Checks and Balances' functions to:",
    option_a: "Enable each branch of government to monitor, constrain, and balance the powers of the other branches so that no single organ achieves unchecked dominance",
    option_b: "Balance commercial bank accounts at the end of each fiscal month",
    option_c: "Force the judiciary to obey executive orders without question",
    option_d: "Eliminate the parliament in favor of a single supreme ruler",
    options: [
      "Enable each branch of government to monitor, constrain, and balance the powers of the other branches so that no single organ achieves unchecked dominance",
      "Balance commercial bank accounts at the end of each fiscal month",
      "Force the judiciary to obey executive orders without question",
      "Eliminate the parliament in favor of a single supreme ruler"
    ],
    correct_answer: "A",
    explanation: "Checks and Balances provides specific constitutional powers for branches to check each other (e.g., judicial review of laws, legislative impeachment/budget control, executive appointment vetos), maintaining institutional equilibrium.",
    topic_name: "System of Checks & Balances",
    instruction_category: "Civics"
  },
  {
    question_number: 6,
    question_text: "Human rights are universally recognized as having which fundamental characteristics?",
    option_a: "Temporary, negotiable, revocable at government convenience, and selective",
    option_b: "Universal, inalienable, indivisible, interdependent, and inherent to all human beings without discrimination",
    option_c: "Granted solely to citizens who have completed military service",
    option_d: "Purchasable through private financial transactions in courts",
    options: [
      "Temporary, negotiable, revocable at government convenience, and selective",
      "Universal, inalienable, indivisible, interdependent, and inherent to all human beings without discrimination",
      "Granted solely to citizens who have completed military service",
      "Purchasable through private financial transactions in courts"
    ],
    correct_answer: "B",
    explanation: "Human rights are inherent to all human beings regardless of nationality, race, gender, religion, or language; they are universal (belong to all), inalienable (cannot be taken away), and indivisible (all rights have equal moral standing).",
    topic_name: "Nature & Principles of Human Rights",
    instruction_category: "Civics"
  },
  {
    question_number: 7,
    question_text: "The Universal Declaration of Human Rights (UDHR), the foundational cornerstone of international human rights law, was adopted by the United Nations General Assembly in Paris on:",
    option_a: "May 5, 1941",
    option_b: "January 1, 2000",
    option_c: "December 10, 1948",
    option_d: "July 4, 1776",
    options: ["May 5, 1941", "January 1, 2000", "December 10, 1948", "July 4, 1776"],
    correct_answer: "C",
    explanation: "Adopted on December 10, 1948 by UN Resolution 217A (celebrated worldwide as Human Rights Day), the UDHR articulates fundamental human rights in 30 articles to be universally protected.",
    topic_name: "The Universal Declaration of Human Rights (1948)",
    instruction_category: "Civics"
  },
  {
    question_number: 8,
    question_text: "Which of the following belongs to 'First-Generation Human Rights' (Civil and Political Rights)?",
    option_a: "The right to life, freedom of expression, freedom of religion, right to fair trial, and right to vote",
    option_b: "The right to clean running water and free university housing",
    option_c: "The right to international planetary peace and technological transfers",
    option_d: "The right to paid vacation and mandatory pensions",
    options: [
      "The right to life, freedom of expression, freedom of religion, right to fair trial, and right to vote",
      "The right to clean running water and free university housing",
      "The right to international planetary peace and technological transfers",
      "The right to paid vacation and mandatory pensions"
    ],
    correct_answer: "A",
    explanation: "First-generation ('liberty-oriented' or negative) rights emerged from Enlightenment revolutions, protecting individuals from state tyranny (liberty, life, security of person, freedom of speech, assembly, voting, due process).",
    topic_name: "Generations of Human Rights - First Generation",
    instruction_category: "Civics"
  },
  {
    question_number: 9,
    question_text: "'Second-Generation Human Rights' (Economic, Social, and Cultural Rights) include:",
    option_a: "The right to bear arms in civilian militias",
    option_b: "The right to establish private monopolistic cartels",
    option_c: "The right to unannounced warrantless wiretapping",
    option_d: "The right to work, education, healthcare, an adequate standard of living, and social security",
    options: [
      "The right to bear arms in civilian militias",
      "The right to establish private monopolistic cartels",
      "The right to unannounced warrantless wiretapping",
      "The right to work, education, healthcare, an adequate standard of living, and social security"
    ],
    correct_answer: "D",
    explanation: "Second-generation ('equality-oriented' or positive) rights require state action and progressive resource allocation to guarantee socio-economic wellbeing (education, healthcare, fair wages, housing, cultural participation).",
    topic_name: "Second-Generation Human Rights",
    instruction_category: "Civics"
  },
  {
    question_number: 10,
    question_text: "'Third-Generation Human Rights' (Solidarity / Group Rights) encompass which of the following?",
    option_a: "Individual freedom of correspondence",
    option_b: "The collective right to development, a healthy and clean environment, peace, and self-determination",
    option_c: "The right to copyright private intellectual software",
    option_d: "The right to establish political parties",
    options: [
      "Individual freedom of correspondence",
      "The collective right to development, a healthy and clean environment, peace, and self-determination",
      "The right to copyright private intellectual software",
      "The right to establish political parties"
    ],
    correct_answer: "B",
    explanation: "Third-generation (fraternity/solidarity) rights belong to groups and whole societies, focusing on global intergenerational issues: sustainable environment, peace, development, and self-determination.",
    topic_name: "Third-Generation Solidarity Rights",
    instruction_category: "Civics"
  },
  {
    question_number: 11,
    question_text: "A 'Federal System of Government' (Federalism) is fundamentally characterized by:",
    option_a: "The constitutional division of sovereign governing powers between a central federal authority and sub-national regional constituent states",
    option_b: "A unitary system where all decisions are made in one central ministry",
    option_c: "A direct military dictatorship with martial law",
    option_d: "A confederation of independent nations with no central government",
    options: [
      "The constitutional division of sovereign governing powers between a central federal authority and sub-national regional constituent states",
      "A unitary system where all decisions are made in one central ministry",
      "A direct military dictatorship with martial law",
      "A confederation of independent nations with no central government"
    ],
    correct_answer: "A",
    explanation: "Federalism combines shared rule for general purposes with regional self-rule for constituent units, balancing unity and diversity through a written constitution with protected jurisdictional spheres.",
    topic_name: "Principles of Federalism",
    instruction_category: "Civics"
  },
  {
    question_number: 12,
    question_text: "Under the 1995 Constitution of the Federal Democratic Republic of Ethiopia (FDRE), sovereign power in the nation resides in:",
    option_a: "The Council of Ministers exclusively",
    option_b: "The Supreme Court Justices",
    option_c: "The Nations, Nationalities, and Peoples of Ethiopia (Article 8)",
    option_d: "The Ministry of National Defense",
    options: [
      "The Council of Ministers exclusively",
      "The Supreme Court Justices",
      "The Nations, Nationalities, and Peoples of Ethiopia (Article 8)",
      "The Ministry of National Defense"
    ],
    correct_answer: "C",
    explanation: "Article 8 of the FDRE Constitution explicitly declares: 'All sovereign power resides in the Nations, Nationalities and Peoples of Ethiopia' and is expressed through their democratic representatives and direct democratic participation.",
    topic_name: "FDRE Constitution - Sovereignty & Structure",
    instruction_category: "Civics"
  },
  {
    question_number: 13,
    question_text: "Article 39 of the 1995 FDRE Constitution of Ethiopia guarantees:",
    option_a: "The mandatory establishment of a state religion",
    option_b: "The unconditional right of every Nation, Nationality, and People in Ethiopia to self-determination, including the right to secession",
    option_c: "The prohibition of private property ownership",
    option_d: "The lifetime appointment of the Prime Minister",
    options: [
      "The mandatory establishment of a state religion",
      "The unconditional right of every Nation, Nationality, and People in Ethiopia to self-determination, including the right to secession",
      "The prohibition of private property ownership",
      "The lifetime appointment of the Prime Minister"
    ],
    correct_answer: "B",
    explanation: "Article 39 guarantees every Nation, Nationality, and People the right to speak, write, and develop its language, promote its culture, self-govern within its territory, and exercise self-determination up to secession.",
    topic_name: "FDRE Constitution - Article 39",
    instruction_category: "Civics"
  },
  {
    question_number: 14,
    question_text: "In Ethiopia's bicameral federal parliamentary structure, the highest authority of the Federal Government with legislative law-making powers is:",
    option_a: "The House of Peoples' Representatives (HPR)",
    option_b: "The House of Federation (HoF)",
    option_c: "The National Security Council",
    option_d: "The Council of Constitutional Inquiry",
    options: [
      "The House of Peoples' Representatives (HPR)",
      "The House of Federation (HoF)",
      "The National Security Council",
      "The Council of Constitutional Inquiry"
    ],
    correct_answer: "A",
    explanation: "Article 50(3) and Article 55 of the FDRE Constitution establish the House of Peoples' Representatives (HPR, with members not exceeding 550 elected by universal suffrage for 5-year terms) as the highest authority of the Federal Government with legislative powers.",
    topic_name: "Legislative Branch - House of Peoples' Representatives",
    instruction_category: "Civics"
  },
  {
    question_number: 15,
    question_text: "Under the FDRE Constitution, which crucial constitutional responsibility is assigned to the House of Federation (HoF)?",
    option_a: "Enacting the federal penal code and criminal statutes",
    option_b: "Directing the armed forces in military combat",
    option_c: "Representing foreign embassies abroad",
    option_d: "Interpreting the FDRE Constitution and determining the division of federal revenues/subsidies among regional states",
    options: [
      "Enacting the federal penal code and criminal statutes",
      "Directing the armed forces in military combat",
      "Representing foreign embassies abroad",
      "Interpreting the FDRE Constitution and determining the division of federal revenues/subsidies among regional states"
    ],
    correct_answer: "D",
    explanation: "Under Article 62, the House of Federation (composed of representatives of Nations, Nationalities, and Peoples) is empowered to interpret the Constitution (assisted by the Council of Constitutional Inquiry), resolve inter-regional boundary disputes, and determine revenue-sharing formulas.",
    topic_name: "House of Federation Powers & Constitutional Interpretation",
    instruction_category: "Civics"
  },
  {
    question_number: 16,
    question_text: "In the parliamentary system of the FDRE, who serves as the Chief Executive, Head of Government, and Commander-in-Chief of the National Armed Forces?",
    option_a: "The Speaker of the House of Peoples' Representatives",
    option_b: "The Prime Minister",
    option_c: "The Chief Justice of the Federal Supreme Court",
    option_d: "The President of the Republic",
    options: [
      "The Speaker of the House of Peoples' Representatives",
      "The Prime Minister",
      "The Chief Justice of the Federal Supreme Court",
      "The President of the Republic"
    ],
    correct_answer: "B",
    explanation: "Under Article 72 and 74 of the FDRE Constitution, the Prime Minister is the Chief Executive, Head of Government, Chairman of the Council of Ministers, and Commander-in-Chief of the Ethiopian Armed Forces.",
    topic_name: "Executive Branch - Prime Minister",
    instruction_category: "Civics"
  },
  {
    question_number: 17,
    question_text: "What is the primary constitutional role of the President of the Federal Democratic Republic of Ethiopia?",
    option_a: "Commanding military tank divisions during active battles",
    option_b: "Serving as Head of Government with complete executive decree powers",
    option_c: "Serving as the ceremonial Head of State representing the nation and opening joint sessions of parliament",
    option_d: "Drafting the annual federal economic budget",
    options: [
      "Commanding military tank divisions during active battles",
      "Serving as Head of Government with complete executive decree powers",
      "Serving as the ceremonial Head of State representing the nation and opening joint sessions of parliament",
      "Drafting the annual federal economic budget"
    ],
    correct_answer: "C",
    explanation: "Under Article 69 and 71 of the Constitution, the President is the ceremonial Head of State of Ethiopia, elected in a joint session of the HPR and HoF for a six-year term, signing proclamations and accrediting ambassadors.",
    topic_name: "Head of State - The President",
    instruction_category: "Civics"
  },
  {
    question_number: 18,
    question_text: "The independence of the judiciary is crucial in a democratic constitutional system because it ensures that:",
    option_a: "Judges can adjudicate legal disputes and administer justice impartially, based strictly on facts and the law, free from political or external pressure",
    option_b: "Courts can execute political dissidents without evidence",
    option_c: "Judges are paid higher salaries than all private business owners",
    option_d: "Court rulings can be overridden by police commanders at will",
    options: [
      "Judges can adjudicate legal disputes and administer justice impartially, based strictly on facts and the law, free from political or external pressure",
      "Courts can execute political dissidents without evidence",
      "Judges are paid higher salaries than all private business owners",
      "Court rulings can be overridden by police commanders at will"
    ],
    correct_answer: "A",
    explanation: "Judicial independence (Article 78 & 79) guarantees that judges are subject only to the law and perform their duties without interference or influence from legislative, executive, or private interests.",
    topic_name: "Judicial Independence & Impartiality",
    instruction_category: "Civics"
  },
  {
    question_number: 19,
    question_text: "Active 'Civic Participation' in a democratic society includes which of the following activities?",
    option_a: "Vandalizing public infrastructure and avoiding all community dialogue",
    option_b: "Exercising voting rights, engaging in peaceful public consultations, volunteering in community projects, and holding elected officials accountable",
    option_c: "Bribing civil servants to bypass construction regulations",
    option_d: "Spreading unverified defamatory rumors on digital platforms",
    options: [
      "Vandalizing public infrastructure and avoiding all community dialogue",
      "Exercising voting rights, engaging in peaceful public consultations, volunteering in community projects, and holding elected officials accountable",
      "Bribing civil servants to bypass construction regulations",
      "Spreading unverified defamatory rumors on digital platforms"
    ],
    correct_answer: "B",
    explanation: "Civic participation is the voluntary involvement of citizens in democratic decision-making, policy dialogue, voting, community development initiatives, and civic oversight to improve public life.",
    topic_name: "Civic Participation & Citizen Engagement",
    instruction_category: "Civics"
  },
  {
    question_number: 20,
    question_text: "'Political Tolerance' is an essential democratic value defined as:",
    option_a: "Suppression of all political groups that hold differing ideologies",
    option_b: "Blindly agreeing with every government policy without questioning",
    option_c: "The willingness to respect, accept, and protect the constitutional rights, freedoms, and lawful activities of individuals and groups whose political views differ from one's own",
    option_d: "Encouraging violent clashes between political rivals",
    options: [
      "Suppression of all political groups that hold differing ideologies",
      "Blindly agreeing with every government policy without questioning",
      "The willingness to respect, accept, and protect the constitutional rights, freedoms, and lawful activities of individuals and groups whose political views differ from one's own",
      "Encouraging violent clashes between political rivals"
    ],
    correct_answer: "C",
    explanation: "Political tolerance requires recognizing and protecting the fundamental rights of political opponents, minorities, and dissenting voices to speak, organize, and campaign peacefully.",
    topic_name: "Democratic Values - Political Tolerance",
    instruction_category: "Civics"
  },
  {
    question_number: 21,
    question_text: "In a democratic multi-national state, true 'Democratic Patriotism' is best exemplified by:",
    option_a: "Devotion to the wellbeing of one's country and fellow citizens, coupled with active commitment to constitutional principles, human rights, social justice, and constructive reform",
    option_b: "Blind loyalty to political leaders regardless of corruption or illegality",
    option_c: "Hostility, xenophobia, and aggression toward other ethnic or national communities",
    option_d: "Complete indifference to national development and civic duties",
    options: [
      "Devotion to the wellbeing of one's country and fellow citizens, coupled with active commitment to constitutional principles, human rights, social justice, and constructive reform",
      "Blind loyalty to political leaders regardless of corruption or illegality",
      "Hostility, xenophobia, and aggression toward other ethnic or national communities",
      "Complete indifference to national development and civic duties"
    ],
    correct_answer: "A",
    explanation: "Democratic patriotism embraces national unity, mutual respect for cultural diversity, defense of constitutional rights, public service, and the moral courage to critique and correct injustice.",
    topic_name: "Democratic Patriotism vs Chauvinism",
    instruction_category: "Civics"
  },
  {
    question_number: 22,
    question_text: "How does 'Chauvinism' (hyper-nationalism) differ fundamentally from healthy democratic patriotism?",
    option_a: "Chauvinism promotes international cooperation and human rights",
    option_b: "Chauvinism values scientific education and civic literacy",
    option_c: "Chauvinism respects ethnic and religious diversity",
    option_d: "Chauvinism is an intolerant, aggressive, and uncritical belief in the innate superiority of one's own group over all others, fostering hostility and exclusion",
    options: [
      "Chauvinism promotes international cooperation and human rights",
      "Chauvinism values scientific education and civic literacy",
      "Chauvinism respects ethnic and religious diversity",
      "Chauvinism is an intolerant, aggressive, and uncritical belief in the innate superiority of one's own group over all others, fostering hostility and exclusion"
    ],
    correct_answer: "D",
    explanation: "While patriotism is love for one's country and democratic values without denigrating others, chauvinism represents an aggressive, supremacist, and exclusionary mindset that divides societies.",
    topic_name: "Dangers of Chauvinism and Extremism",
    instruction_category: "Civics"
  },
  {
    question_number: 23,
    question_text: "Which of the following is a primary hallmark of 'Ethical Leadership' in public administration?",
    option_a: "Using public office and state funds for personal family enrichment",
    option_b: "Integrity, honesty, transparency, accountability, fairness, and unwavering dedication to the public interest",
    option_c: "Suppressing whistleblowers who report financial fraud",
    option_d: "Appointing unqualified relatives to key government positions",
    options: [
      "Using public office and state funds for personal family enrichment",
      "Integrity, honesty, transparency, accountability, fairness, and unwavering dedication to the public interest",
      "Suppressing whistleblowers who report financial fraud",
      "Appointing unqualified relatives to key government positions"
    ],
    correct_answer: "B",
    explanation: "Ethical leaders act with moral integrity, demonstrate openness, treat citizens equitably, safeguard public resources, and serve as ethical role models for the institutions they govern.",
    topic_name: "Ethical Leadership & Moral Governance",
    instruction_category: "Civics"
  },
  {
    question_number: 24,
    question_text: "The term 'Corruption' is universally defined in governance and ethics as:",
    option_a: "The abuse of entrusted public or private power, position, or authority for illicit personal, factional, or financial gain",
    option_b: "The voluntary donation of personal income to charitable causes",
    option_c: "The efficient and timely delivery of public services to citizens",
    option_d: "The transparent public auditing of government financial accounts",
    options: [
      "The abuse of entrusted public or private power, position, or authority for illicit personal, factional, or financial gain",
      "The voluntary donation of personal income to charitable causes",
      "The efficient and timely delivery of public services to citizens",
      "The transparent public auditing of government financial accounts"
    ],
    correct_answer: "A",
    explanation: "Corruption encompasses bribery, embezzlement, nepotism, extortion, and graft, diverting scarce public resources away from public services, distorting justice, and undermining public trust in institutions.",
    topic_name: "Combating Corruption",
    instruction_category: "Civics"
  },
  {
    question_number: 25,
    question_text: "In Ethiopia, which specialized governmental institution was established to investigate, prevent, and prosecute corrupt practices and promote public integrity?",
    option_a: "The National Meteorological Agency",
    option_b: "The Ethiopian Mapping Authority",
    option_c: "The Federal Ethics and Anti-Corruption Commission (FEACC)",
    option_d: "The Tourism Commission",
    options: [
      "The National Meteorological Agency",
      "The Ethiopian Mapping Authority",
      "The Federal Ethics and Anti-Corruption Commission (FEACC)",
      "The Tourism Commission"
    ],
    correct_answer: "C",
    explanation: "The Federal Ethics and Anti-Corruption Commission (FEACC) was established by proclamation to combat corruption through public ethics education, institutional corruption risk assessments, and forensic investigations.",
    topic_name: "Anti-Corruption Institutions in Ethiopia",
    instruction_category: "Civics"
  },
  {
    question_number: 26,
    question_text: "'Transparency' in public administration requires that:",
    option_a: "All government budgets and transactions be kept strictly secret from citizens",
    option_b: "Governmental processes, public expenditures, official decisions, and policy rationales are openly accessible and understandable to the public and media",
    option_c: "Public meetings be held in undisclosed locations behind locked doors",
    option_d: "Public tenders and procurement contracts be awarded without open competitive bidding",
    options: [
      "All government budgets and transactions be kept strictly secret from citizens",
      "Governmental processes, public expenditures, official decisions, and policy rationales are openly accessible and understandable to the public and media",
      "Public meetings be held in undisclosed locations behind locked doors",
      "Public tenders and procurement contracts be awarded without open competitive bidding"
    ],
    correct_answer: "B",
    explanation: "Transparency ensures that information regarding public expenditures, administrative rules, and state decisions is freely available, enabling scrutiny and deterring corruption.",
    topic_name: "Transparency in Good Governance",
    instruction_category: "Civics"
  },
  {
    question_number: 27,
    question_text: "'Accountability' in democratic governance means that:",
    option_a: "Public officials and state organs must answer for their decisions, justify their expenditures, and accept legal and political consequences for their actions",
    option_b: "Officials are permanently immune from parliamentary oversight",
    option_c: "Citizens have no right to question administrative misconduct",
    option_d: "State employees are only accountable to their immediate family members",
    options: [
      "Public officials and state organs must answer for their decisions, justify their expenditures, and accept legal and political consequences for their actions",
      "Officials are permanently immune from parliamentary oversight",
      "Citizens have no right to question administrative misconduct",
      "State employees are only accountable to their immediate family members"
    ],
    correct_answer: "A",
    explanation: "Accountability holds that power holders in government must be subject to oversight, regularly explain their conduct, and face sanctions if they abuse their authority or fail to deliver statutory mandates.",
    topic_name: "Accountability & Responsibility",
    instruction_category: "Civics"
  },
  {
    question_number: 28,
    question_text: "The constitutional principle of 'Due Process of Law' guarantees that:",
    option_a: "Police may detain suspects indefinitely without bringing them before a judge",
    option_b: "Citizens accused of crimes are denied legal defense representation",
    option_c: "A court verdict can be pronounced without conducting a trial",
    option_d: "No person can be deprived of life, liberty, or property without fair, established legal procedures and a fair, public trial by an impartial tribunal",
    options: [
      "Police may detain suspects indefinitely without bringing them before a judge",
      "Citizens accused of crimes are denied legal defense representation",
      "A court verdict can be pronounced without conducting a trial",
      "No person can be deprived of life, liberty, or property without fair, established legal procedures and a fair, public trial by an impartial tribunal"
    ],
    correct_answer: "D",
    explanation: "Due process of law (Article 19 & 20 of FDRE Constitution) ensures procedural fairness, including prompt notification of charges, right to remain silent, legal representation, habeas corpus, and trial before an independent court.",
    topic_name: "Due Process of Law & Rights of the Accused",
    instruction_category: "Civics"
  },
  {
    question_number: 29,
    question_text: "The universal legal doctrine of the 'Presumption of Innocence' dictates that:",
    option_a: "Anyone accused by a police officer is automatically guilty until proven innocent",
    option_b: "Every person accused of a crime is presumed innocent until proven guilty according to law in a public trial with full defense guarantees",
    option_c: "Criminal suspects must prove their innocence to avoid punishment",
    option_d: "Only wealthy suspects are considered innocent",
    options: [
      "Anyone accused by a police officer is automatically guilty until proven innocent",
      "Every person accused of a crime is presumed innocent until proven guilty according to law in a public trial with full defense guarantees",
      "Criminal suspects must prove their innocence to avoid punishment",
      "Only wealthy suspects are considered innocent"
    ],
    correct_answer: "B",
    explanation: "Presumption of innocence places the legal burden of proof solely upon the prosecution to prove the defendant's guilt beyond reasonable doubt; the accused is considered innocent throughout the proceedings.",
    topic_name: "Presumption of Innocence",
    instruction_category: "Civics"
  },
  {
    question_number: 30,
    question_text: "An 'Institution of the Ombudsman' (Public Grievance Commissioner) is established to:",
    option_a: "Receive, investigate, and rectify citizen complaints regarding administrative malpractice, injustice, corruption, or inefficiency in government ministries",
    option_b: "Direct infantry combat battalions",
    option_c: "Impose arbitrary corporate income taxes",
    option_d: "Control the national electricity distribution grid",
    options: [
      "Receive, investigate, and rectify citizen complaints regarding administrative malpractice, injustice, corruption, or inefficiency in government ministries",
      "Direct infantry combat battalions",
      "Impose arbitrary corporate income taxes",
      "Control the national electricity distribution grid"
    ],
    correct_answer: "A",
    explanation: "The Ethiopian Institution of the Ombudsman (EIO, established under Article 55 of the Constitution) investigates administrative injustices, bureaucratic errors, and abuses of discretion to protect citizen rights.",
    topic_name: "The Ombudsman Institution",
    instruction_category: "Civics"
  },
  {
    question_number: 31,
    question_text: "The Ethiopian Human Rights Commission (EHRC) is an independent constitutional organ whose statutory mandate is to:",
    option_a: "Promote commercial real estate construction",
    option_b: "Collect import duties at maritime ports",
    option_c: "Ensure that human rights and freedoms are respected, investigate human rights violations, and promote public human rights awareness",
    option_d: "Manage the national lottery system",
    options: [
      "Promote commercial real estate construction",
      "Collect import duties at maritime ports",
      "Ensure that human rights and freedoms are respected, investigate human rights violations, and promote public human rights awareness",
      "Manage the national lottery system"
    ],
    correct_answer: "C",
    explanation: "The EHRC monitors human rights compliance across Ethiopia, visits prisons and detention centers, investigates alleged abuses, and issues independent recommendations to state authorities.",
    topic_name: "National Human Rights Institutions - EHRC",
    instruction_category: "Civics"
  },
  {
    question_number: 32,
    question_text: "The landmark Brundtland Commission Report (1987) defined 'Sustainable Development' as development that:",
    option_a: "Meets the needs of the present generation without compromising the ability of future generations to meet their own needs",
    option_b: "Maximizes rapid industrial resource depletion without regard to environmental pollution",
    option_c: "Relies entirely on perpetual foreign financial borrowing",
    option_d: "Shuts down all modern economic production",
    options: [
      "Meets the needs of the present generation without compromising the ability of future generations to meet their own needs",
      "Maximizes rapid industrial resource depletion without regard to environmental pollution",
      "Relies entirely on perpetual foreign financial borrowing",
      "Shuts down all modern economic production"
    ],
    correct_answer: "A",
    explanation: "Sustainable development harmonizes three core dimensions: economic growth, social inclusion, and environmental sustainability, ensuring ecological resources are preserved for future generations.",
    topic_name: "Sustainable Development Principles",
    instruction_category: "Civics"
  },
  {
    question_number: 33,
    question_text: "'Gender Equality' in civic and constitutional ethics means:",
    option_a: "Denying education to girls in rural areas",
    option_b: "Equal rights, responsibilities, opportunities, and fair treatment for women and men across political, economic, educational, and social spheres",
    option_c: "Excluding women from holding political office and leadership positions",
    option_d: "Paying women half the wages of male colleagues for the exact same work",
    options: [
      "Denying education to girls in rural areas",
      "Equal rights, responsibilities, opportunities, and fair treatment for women and men across political, economic, educational, and social spheres",
      "Excluding women from holding political office and leadership positions",
      "Paying women half the wages of male colleagues for the exact same work"
    ],
    correct_answer: "B",
    explanation: "Article 35 of the FDRE Constitution affirms that women have equal rights with men in marital, political, social, and economic spheres, including equal rights to property ownership and equal pay for equal work.",
    topic_name: "Gender Equality & Women's Constitutional Rights",
    instruction_category: "Civics"
  },
  {
    question_number: 34,
    question_text: "'Affirmative Action' measures are implemented in education and employment to:",
    option_a: "Permanently discriminate against competent individuals",
    option_b: "Lower all educational standards across the board",
    option_c: "Remedy historical injustices, systemic discrimination, and structural under-representation experienced by marginalized groups, such as women and historically disadvantaged communities",
    option_d: "Abolish competitive merit-based grading systems entirely",
    options: [
      "Permanently discriminate against competent individuals",
      "Lower all educational standards across the board",
      "Remedy historical injustices, systemic discrimination, and structural under-representation experienced by marginalized groups, such as women and historically disadvantaged communities",
      "Abolish competitive merit-based grading systems entirely"
    ],
    correct_answer: "C",
    explanation: "Affirmative action (Article 35(3)) provides temporary remedial measures, preferential support, and training to enable historically marginalized groups to compete equitably in academia and public leadership.",
    topic_name: "Affirmative Action & Social Equity",
    instruction_category: "Civics"
  },
  {
    question_number: 35,
    question_text: "Why is active civic engagement in environmental conservation (such as tree planting and watershed management) a vital civic duty?",
    option_a: "Because climate change, soil erosion, and biodiversity loss threaten national food security, public health, and ecological survival for present and future generations",
    option_b: "Because it eliminates the need for modern agricultural equipment",
    option_c: "Because trees can replace all municipal roads",
    option_d: "Because environmental policies are irrelevant to national development",
    options: [
      "Because climate change, soil erosion, and biodiversity loss threaten national food security, public health, and ecological survival for present and future generations",
      "Because it eliminates the need for modern agricultural equipment",
      "Because trees can replace all municipal roads",
      "Because environmental policies are irrelevant to national development"
    ],
    correct_answer: "A",
    explanation: "Environmental protection preserves ecosystems, maintains fresh water sources, mitigates global warming, and protects agriculture, aligning with the constitutional right to a clean and healthy environment (Article 44).",
    topic_name: "Environmental Ethics & Civic Duty",
    instruction_category: "Civics"
  },
  {
    question_number: 36,
    question_text: "Which of the following describes an 'Alternative Dispute Resolution' (ADR) mechanism where a neutral third party facilitates dialogue between disputing parties to reach a mutually agreeable voluntary settlement?",
    option_a: "Mediation",
    option_b: "Armed warfare",
    option_c: "Military intervention",
    option_d: "Unilateral judicial sentencing",
    options: ["Mediation", "Armed warfare", "Military intervention", "Unilateral judicial sentencing"],
    correct_answer: "A",
    explanation: "In mediation, an impartial facilitator (mediator) assists disputants in exploring options, communicating constructively, and reaching a collaborative, win-win settlement without formal court litigation.",
    topic_name: "Conflict Resolution - Mediation & ADR",
    instruction_category: "Civics"
  },
  {
    question_number: 37,
    question_text: "Traditional indigenous dispute resolution institutions in Ethiopia (such as Shimgelina, Guma, Jaarsummaa, Mada'a, and Xeer) are celebrated for:",
    option_a: "Imposing high monetary court litigation fees",
    option_b: "Restoring community harmony, reconciliation, and social peace through culturally respected elders and restorative justice principles",
    option_c: "Overcrowding federal formal prisons",
    option_d: "Delaying cases for several decades without resolution",
    options: [
      "Imposing high monetary court litigation fees",
      "Restoring community harmony, reconciliation, and social peace through culturally respected elders and restorative justice principles",
      "Overcrowding federal formal prisons",
      "Delaying cases for several decades without resolution"
    ],
    correct_answer: "B",
    explanation: "Ethiopia's traditional conflict resolution systems use community elders to facilitate dialogue, heal emotional trauma, repair social relations, and provide accessible, culturally rooted restorative justice.",
    topic_name: "Indigenous Conflict Resolution Mechanisms",
    instruction_category: "Civics"
  },
  {
    question_number: 38,
    question_text: "'Globalization' refers to the multidimensional historical process characterized by:",
    option_a: "The complete isolation of all sovereign nation states from one another",
    option_b: "The abolition of all global international telecommunications",
    option_c: "The increasing worldwide interconnectedness, integration, and interdependence of national economies, technologies, trade, cultures, and governance",
    option_d: "The closure of all international airports and shipping corridors",
    options: [
      "The complete isolation of all sovereign nation states from one another",
      "The abolition of all global international telecommunications",
      "The increasing worldwide interconnectedness, integration, and interdependence of national economies, technologies, trade, cultures, and governance",
      "The closure of all international airports and shipping corridors"
    ],
    correct_answer: "C",
    explanation: "Globalization expands cross-border flows of goods, services, capital, digital information, and cultural exchanges, creating economic opportunities while posing challenges for local cultural preservation.",
    topic_name: "Globalization & Its Civic Impacts",
    instruction_category: "Civics"
  },
  {
    question_number: 39,
    question_text: "A positive 'Work Ethic' in personal and professional development is demonstrated by:",
    option_a: "Punctuality, diligence, responsibility, professional integrity, continuous self-improvement, and pride in productive labor",
    option_b: "Arriving late, avoiding difficult tasks, and blaming colleagues for errors",
    option_c: "Expecting monetary wages without performing assigned job duties",
    option_d: "Taking credit for the intellectual achievements of other team members",
    options: [
      "Punctuality, diligence, responsibility, professional integrity, continuous self-improvement, and pride in productive labor",
      "Arriving late, avoiding difficult tasks, and blaming colleagues for errors",
      "Expecting monetary wages without performing assigned job duties",
      "Taking credit for the intellectual achievements of other team members"
    ],
    correct_answer: "A",
    explanation: "A strong work ethic reflects commitment, reliability, moral integrity, craftsmanship, discipline, and personal responsibility, which are essential drivers of personal productivity and national economic progress.",
    topic_name: "Work Ethic & Productivity",
    instruction_category: "Civics"
  },
  {
    question_number: 40,
    question_text: "Developing a habit of 'Saving' and financial prudence is essential for individuals and nations because:",
    option_a: "It eliminates all forms of physical currency from circulation",
    option_b: "It accumulates domestic financial capital, provides a financial safety net for emergencies, and funds productive investments in infrastructure and industry",
    option_c: "It encourages uncontrolled speculative gambling",
    option_d: "It forces people to stop consuming necessary nutritious food",
    options: [
      "It eliminates all forms of physical currency from circulation",
      "It accumulates domestic financial capital, provides a financial safety net for emergencies, and funds productive investments in infrastructure and industry",
      "It encourages uncontrolled speculative gambling",
      "It forces people to stop consuming necessary nutritious food"
    ],
    correct_answer: "B",
    explanation: "Saving mobilizes domestic capital for industrial investments, cushions households against unexpected economic shocks, and reduces reliance on foreign borrowing.",
    topic_name: "Culture of Saving & Capital Formation",
    instruction_category: "Civics"
  },
  {
    question_number: 41,
    question_text: "'Self-Reliance' at both individual and national levels is defined as:",
    option_a: "Refusing to engage in any international diplomacy or trade",
    option_b: "Complete isolation from world scientific discoveries",
    option_c: "Relying on perpetual external food hand-outs and foreign debt",
    option_d: "Relying principally on one's own internal capabilities, resources, hard work, and ingenuity to achieve sustainable growth and independence",
    options: [
      "Refusing to engage in any international diplomacy or trade",
      "Complete isolation from world scientific discoveries",
      "Relying on perpetual external food hand-outs and foreign debt",
      "Relying principally on one's own internal capabilities, resources, hard work, and ingenuity to achieve sustainable growth and independence"
    ],
    correct_answer: "D",
    explanation: "Self-reliance builds autonomy and dignity by mobilizing domestic labor, technology, and natural resources to meet national development priorities without becoming subservient to external dependency.",
    topic_name: "Self-Reliance & National Development",
    instruction_category: "Civics"
  },
  {
    question_number: 42,
    question_text: "'Critical Thinking' in civic education enables citizens to:",
    option_a: "Objectively analyze evidence, evaluate arguments, detect biases and logical fallacies, and make reasoned, informed civic decisions",
    option_b: "Blindly accept unverified rumors on social media as absolute truth",
    option_c: "Reject scientific consensus in favor of conspiracy theories",
    option_d: "Obey political authority without any rational evaluation",
    options: [
      "Objectively analyze evidence, evaluate arguments, detect biases and logical fallacies, and make reasoned, informed civic decisions",
      "Blindly accept unverified rumors on social media as absolute truth",
      "Reject scientific consensus in favor of conspiracy theories",
      "Obey political authority without any rational evaluation"
    ],
    correct_answer: "A",
    explanation: "Critical thinking is an essential civic competency that safeguards democratic societies from propaganda, manipulation, and polarization through evidence-based, rational inquiry.",
    topic_name: "Critical Thinking in Democratic Life",
    instruction_category: "Civics"
  },
  {
    question_number: 43,
    question_text: "In a democratic multi-cultural society, 'Pluralism' is best understood as:",
    option_a: "The forced cultural assimilation of all minority cultures into one single identity",
    option_b: "The complete prohibition of all non-governmental organizations",
    option_c: "The peaceful, recognized coexistence of diverse ethnic, cultural, religious, and political groups and perspectives within a unified constitutional society",
    option_d: "The expulsion of non-native residents from municipal cities",
    options: [
      "The forced cultural assimilation of all minority cultures into one single identity",
      "The complete prohibition of all non-governmental organizations",
      "The peaceful, recognized coexistence of diverse ethnic, cultural, religious, and political groups and perspectives within a unified constitutional society",
      "The expulsion of non-native residents from municipal cities"
    ],
    correct_answer: "C",
    explanation: "Pluralism affirms that diversity of opinions, cultures, beliefs, and political associations enriches democratic society and must be protected through constitutional rights and mutual respect.",
    topic_name: "Pluralism & Multicultural Democracy",
    instruction_category: "Civics"
  },
  {
    question_number: 44,
    question_text: "The civic concept of 'Social Justice' is fundamentally concerned with:",
    option_a: "Promoting extreme wealth concentration among a small ruling elite",
    option_b: "The fair and equitable distribution of opportunities, resources, rights, and privileges across all strata of society, preventing structural marginalization",
    option_c: "Eliminating all courts and judicial legal systems",
    option_d: "Enforcing hereditary caste hierarchies",
    options: [
      "Promoting extreme wealth concentration among a small ruling elite",
      "The fair and equitable distribution of opportunities, resources, rights, and privileges across all strata of society, preventing structural marginalization",
      "Eliminating all courts and judicial legal systems",
      "Enforcing hereditary caste hierarchies"
    ],
    correct_answer: "B",
    explanation: "Social justice strives for a fair society where all individuals enjoy equal life chances, basic social security, non-discrimination, and protection from systemic exploitation.",
    topic_name: "Social Justice & Equality of Opportunity",
    instruction_category: "Civics"
  },
  {
    question_number: 45,
    question_text: "What is the crucial distinction between 'Equality' and 'Equity'?",
    option_a: "Equality provides everyone with the exact same resources, while Equity allocates resources tailored to specific needs and systemic barriers to achieve fair outcomes",
    option_b: "Equality is illegal while Equity is legal",
    option_c: "Equality applies only to corporate finance while Equity applies to mathematics",
    option_d: "Equality means giving more to the rich while Equity means giving nothing to anyone",
    options: [
      "Equality provides everyone with the exact same resources, while Equity allocates resources tailored to specific needs and systemic barriers to achieve fair outcomes",
      "Equality is illegal while Equity is legal",
      "Equality applies only to corporate finance while Equity applies to mathematics",
      "Equality means giving more to the rich while Equity means giving nothing to anyone"
    ],
    correct_answer: "A",
    explanation: "While equality treats everyone identically regardless of starting point, equity recognizes historical inequalities and provides proportional resources (e.g., affirmative action, targeted healthcare) to ensure genuine fairness.",
    topic_name: "Equality vs Equity",
    instruction_category: "Civics"
  },
  {
    question_number: 46,
    question_text: "The principle of 'Unity in Diversity' in Ethiopia emphasizes:",
    option_a: "Erasing all unique languages and distinct regional cultural traditions",
    option_b: "Creating separate independent nation-states for every single language group",
    option_c: "Fostering common national citizenship, shared constitutional values, and solidarity while celebrating and respecting linguistic, cultural, and religious diversity",
    option_d: "Suppressing public cultural festivals and heritage celebrations",
    options: [
      "Erasing all unique languages and distinct regional cultural traditions",
      "Creating separate independent nation-states for every single language group",
      "Fostering common national citizenship, shared constitutional values, and solidarity while celebrating and respecting linguistic, cultural, and religious diversity",
      "Suppressing public cultural festivals and heritage celebrations"
    ],
    correct_answer: "C",
    explanation: "Unity in Diversity builds a cohesive nation bound by shared democratic institutions and collective economic interests, while protecting and developing the unique heritage and self-determination of all communities.",
    topic_name: "Unity in Diversity",
    instruction_category: "Civics"
  },
  {
    question_number: 47,
    question_text: "In public economics and governance, 'Public Goods' (such as national defense, street lighting, public highways, and flood control dykes) are distinguished by being:",
    option_a: "Sold exclusively to private luxury resort owners",
    option_b: "Excludable and highly rivalrous in consumption",
    option_c: "Manufactured only by foreign military contractors",
    option_d: "Non-excludable (available to all citizens) and non-rivalrous (one person's use does not reduce availability to others)",
    options: [
      "Sold exclusively to private luxury resort owners",
      "Excludable and highly rivalrous in consumption",
      "Manufactured only by foreign military contractors",
      "Non-excludable (available to all citizens) and non-rivalrous (one person's use does not reduce availability to others)"
    ],
    correct_answer: "D",
    explanation: "Public goods exhibit non-excludability (no one can be barred from using them) and non-rivalry (consumption by one does not deplete the good for others), necessitating public government funding through taxation.",
    topic_name: "Public Goods & State Responsibilities",
    instruction_category: "Civics"
  },
  {
    question_number: 48,
    question_text: "Paying taxes honestly and promptly is an indispensable civic duty because:",
    option_a: "Taxes generate public revenue required to construct schools, hospitals, roads, generate clean energy, maintain security, and deliver essential public services",
    option_b: "Taxes are designed solely to enrich private bank owners",
    option_c: "Taxes prevent private business investment",
    option_d: "Taxes are only collected during wartime",
    options: [
      "Taxes generate public revenue required to construct schools, hospitals, roads, generate clean energy, maintain security, and deliver essential public services",
      "Taxes are designed solely to enrich private bank owners",
      "Taxes prevent private business investment",
      "Taxes are only collected during wartime"
    ],
    correct_answer: "A",
    explanation: "Taxation provides the financial foundation for public infrastructure, social safety nets, education, healthcare, and state administration. Tax evasion undermines the delivery of vital public services.",
    topic_name: "Taxation as a Fundamental Civic Duty",
    instruction_category: "Civics"
  },
  {
    question_number: 49,
    question_text: "International Humanitarian Law (the Geneva Conventions of 1949 and Additional Protocols) establishes legal rules during armed conflict to:",
    option_a: "Encourage unrestricted destruction of civilian hospitals and schools",
    option_b: "Protect wounded combatants, prisoners of war, medical personnel, and non-combatant civilian populations, restricting methods and means of warfare",
    option_c: "Legalize biological and chemical warfare against civilians",
    option_d: "Abolish the International Committee of the Red Cross (ICRC)",
    options: [
      "Encourage unrestricted destruction of civilian hospitals and schools",
      "Protect wounded combatants, prisoners of war, medical personnel, and non-combatant civilian populations, restricting methods and means of warfare",
      "Legalize biological and chemical warfare against civilians",
      "Abolish the International Committee of the Red Cross (ICRC)"
    ],
    correct_answer: "B",
    explanation: "International Humanitarian Law (IHL / laws of armed conflict) limits the effects of armed conflict by protecting civilians, medics, and captured soldiers, and outlawing indiscriminate weapons and torture.",
    topic_name: "International Humanitarian Law & Geneva Conventions",
    instruction_category: "Civics"
  },
  {
    question_number: 50,
    question_text: "Civil Society Organizations (CSOs) and Non-Governmental Organizations (NGOs) contribute to democratic governance by:",
    option_a: "Commanding municipal police units",
    option_b: "Declaring states of emergency in regional parliaments",
    option_c: "Advocating for citizen rights, delivering humanitarian aid, promoting civic education, and monitoring government policy and human rights compliance",
    option_d: "Imposing criminal sentences on citizens",
    options: [
      "Commanding municipal police units",
      "Declaring states of emergency in regional parliaments",
      "Advocating for citizen rights, delivering humanitarian aid, promoting civic education, and monitoring government policy and human rights compliance",
      "Imposing criminal sentences on citizens"
    ],
    correct_answer: "C",
    explanation: "Civil society acts as an essential intermediary between the state and the individual, articulating community concerns, advancing human rights, building social capital, and holding institutions accountable.",
    topic_name: "Role of Civil Society Organizations (CSOs)",
    instruction_category: "Civics"
  },
  {
    question_number: 51,
    question_text: "What is the primary operational difference between 'Direct Democracy' and 'Representative Democracy'?",
    option_a: "In direct democracy, citizens vote directly on legislation and public policies (as in referendums), whereas in representative democracy, citizens elect delegates to make laws on their behalf",
    option_b: "Direct democracy has no elections while representative democracy has no constitution",
    option_c: "Representative democracy is only practiced in monarchies",
    option_d: "Direct democracy prohibits all citizen participation",
    options: [
      "In direct democracy, citizens vote directly on legislation and public policies (as in referendums), whereas in representative democracy, citizens elect delegates to make laws on their behalf",
      "Direct democracy has no elections while representative democracy has no constitution",
      "Representative democracy is only practiced in monarchies",
      "Direct democracy prohibits all citizen participation"
    ],
    correct_answer: "A",
    explanation: "In direct democracy (ancient Athens, town hall meetings, referendums), citizens debate and vote on laws themselves; in representative democracy (modern republics and parliaments), citizens choose elected officials to govern.",
    topic_name: "Forms of Democracy - Direct vs Representative",
    instruction_category: "Civics"
  },
  {
    question_number: 52,
    question_text: "Which of the following conditions is indispensable for an election to be considered 'Free and Fair'?",
    option_a: "Banning opposition political parties from registering candidates",
    option_b: "Allowing the ruling party to count votes without independent observers",
    option_c: "Intimidating voters with armed police inside polling booths",
    option_d: "Universal adult franchise, secret ballot, impartial electoral administration, equal campaign access, and freedom from intimidation",
    options: [
      "Banning opposition political parties from registering candidates",
      "Allowing the ruling party to count votes without independent observers",
      "Intimidating voters with armed police inside polling booths",
      "Universal adult franchise, secret ballot, impartial electoral administration, equal campaign access, and freedom from intimidation"
    ],
    correct_answer: "D",
    explanation: "Free and fair elections require universal suffrage, secret voting booths, an independent electoral board (NEBE), fair media access, peaceful campaigning, and transparent vote counting.",
    topic_name: "Electoral Systems - Free and Fair Elections",
    instruction_category: "Civics"
  },
  {
    question_number: 53,
    question_text: "The National Election Board of Ethiopia (NEBE) is legally established as:",
    option_a: "A partisan committee of the ruling political party",
    option_b: "An autonomous, independent constitutional institution responsible for conducting federal, regional, and municipal elections and administering political party registrations",
    option_c: "A division of the Ministry of Defense",
    option_d: "A private advertising company",
    options: [
      "A partisan committee of the ruling political party",
      "An autonomous, independent constitutional institution responsible for conducting federal, regional, and municipal elections and administering political party registrations",
      "A division of the Ministry of Defense",
      "A private advertising company"
    ],
    correct_answer: "B",
    explanation: "Under Article 102 of the FDRE Constitution and establishing proclamations, the NEBE operates independently from political control to conduct free, fair, and transparent democratic elections.",
    topic_name: "The National Election Board of Ethiopia (NEBE)",
    instruction_category: "Civics"
  },
  {
    question_number: 54,
    question_text: "'State Sovereignty' in international relations refers to:",
    option_a: "The supreme, absolute, and independent legal authority of a state to govern its territory and population without external interference",
    option_b: "The subordination of developing nations to foreign superpowers",
    option_c: "The right of a neighboring nation to unilaterally redraw international borders",
    option_d: "The absence of any domestic police force",
    options: [
      "The supreme, absolute, and independent legal authority of a state to govern its territory and population without external interference",
      "The subordination of developing nations to foreign superpowers",
      "The right of a neighboring nation to unilaterally redraw international borders",
      "The absence of any domestic police force"
    ],
    correct_answer: "A",
    explanation: "Sovereignty (recognized in UN Charter Article 2(1)) denotes internal supremacy over domestic jurisdiction and external independence from foreign control.",
    topic_name: "State Sovereignty & International Law",
    instruction_category: "Civics"
  },
  {
    question_number: 55,
    question_text: "The democratic doctrine of 'Popular Sovereignty' implies that:",
    option_a: "Government officials derive their legitimacy solely from hereditary descent",
    option_b: "The military possesses inherent right to govern without civilian oversight",
    option_c: "The ultimate source of all political authority and governing legitimacy is the will of the people",
    option_d: "Foreign ambassadors decide national domestic policies",
    options: [
      "Government officials derive their legitimacy solely from hereditary descent",
      "The military possesses inherent right to govern without civilian oversight",
      "The ultimate source of all political authority and governing legitimacy is the will of the people",
      "Foreign ambassadors decide national domestic policies"
    ],
    correct_answer: "C",
    explanation: "Popular sovereignty holds that government is created by and subject to the will of the people, who delegate limited authority to elected representatives.",
    topic_name: "Popular Sovereignty",
    instruction_category: "Civics"
  },
  {
    question_number: 56,
    question_text: "The democratic standard of 'Majority Rule with Minority Rights' ensures that:",
    option_a: "The electoral majority can eliminate all human rights of minority populations",
    option_b: "Decisions are made by majority vote, while constitutional safeguards protect the fundamental rights and liberties of minorities from being infringed",
    option_c: "Minority groups are prohibited from voting in national elections",
    option_d: "Elections are decided by the smallest minority faction",
    options: [
      "The electoral majority can eliminate all human rights of minority populations",
      "Decisions are made by majority vote, while constitutional safeguards protect the fundamental rights and liberties of minorities from being infringed",
      "Minority groups are prohibited from voting in national elections",
      "Elections are decided by the smallest minority faction"
    ],
    correct_answer: "B",
    explanation: "Majoritarian democracy must be bounded by constitutional rights; while the majority forms government and passes laws, it cannot abridge the equal protection, language, religious, or speech rights of minorities.",
    topic_name: "Majority Rule & Minority Rights",
    instruction_category: "Civics"
  },
  {
    question_number: 57,
    question_text: "The fundamental right to 'Freedom of Expression' (Article 29 of FDRE Constitution) includes:",
    option_a: "The right to seek, receive, and impart information and ideas of all kinds through speech, print, digital media, or artistic forms without censorship",
    option_b: "The right to defame individuals with deliberately fabricated falsehoods",
    option_c: "The right to broadcast hate speech inciting ethnic violence",
    option_d: "The right to disclose classified military state secrets during wartime",
    options: [
      "The right to seek, receive, and impart information and ideas of all kinds through speech, print, digital media, or artistic forms without censorship",
      "The right to defame individuals with deliberately fabricated falsehoods",
      "The right to broadcast hate speech inciting ethnic violence",
      "The right to disclose classified military state secrets during wartime"
    ],
    correct_answer: "A",
    explanation: "Article 29 protects freedom of thought, opinion, and expression, including press freedom and the prohibition of any form of state censorship, which are essential for informed democratic discourse.",
    topic_name: "Freedom of Expression & Media Freedom",
    instruction_category: "Civics"
  },
  {
    question_number: 58,
    question_text: "Under democratic constitutional law, lawful restrictions may be placed on freedom of expression only when speech:",
    option_a: "Criticizes a government economic policy peacefully",
    option_b: "Exposes administrative corruption in a municipality",
    option_c: "Expresses support for an opposition political party",
    option_d: "Directly incites war, ethnic hatred, imminent violence, defamation, or threatens public health and safety",
    options: [
      "Criticizes a government economic policy peacefully",
      "Exposes administrative corruption in a municipality",
      "Expresses support for an opposition political party",
      "Directly incites war, ethnic hatred, imminent violence, defamation, or threatens public health and safety"
    ],
    correct_answer: "D",
    explanation: "Under international law and Article 29(6), freedom of expression carries civic responsibilities and can be constitutionally limited by laws protecting individual dignity, public order, and prohibiting hate speech or war propaganda.",
    topic_name: "Constitutional Limits on Free Expression",
    instruction_category: "Civics"
  },
  {
    question_number: 59,
    question_text: "The constitutional principle of 'Freedom of Religion and Belief' (Article 27 of FDRE Constitution) guarantees that:",
    option_a: "The federal government establishes one official compulsory national religion",
    option_b: "Everyone has the right to freedom of thought, conscience, and religion, including the freedom to hold or adopt a religion or belief of their choice",
    option_c: "Religious groups are prohibited from building places of worship",
    option_d: "Citizens can be forced to convert to a specific faith to obtain employment",
    options: [
      "The federal government establishes one official compulsory national religion",
      "Everyone has the right to freedom of thought, conscience, and religion, including the freedom to hold or adopt a religion or belief of their choice",
      "Religious groups are prohibited from building places of worship",
      "Citizens can be forced to convert to a specific faith to obtain employment"
    ],
    correct_answer: "B",
    explanation: "Article 27 affirms that everyone has the right to freedom of thought, conscience, and religion, including the freedom to worship individually or in community, in public or private, without state interference.",
    topic_name: "Freedom of Religion & Conscience",
    instruction_category: "Civics"
  },
  {
    question_number: 60,
    question_text: "Under Article 11 of the FDRE Constitution, the principle of 'Secularism' (Separation of State and Religion) mandates that:",
    option_a: "State and religion are separate; there is no state religion; and the state shall not interfere in religious matters, nor religion in state affairs",
    option_b: "The government must fund all religious pilgrimages equally",
    option_c: "Religious leaders must serve as cabinet ministers",
    option_d: "Religious education is compulsory in all public secular universities",
    options: [
      "State and religion are separate; there is no state religion; and the state shall not interfere in religious matters, nor religion in state affairs",
      "The government must fund all religious pilgrimages equally",
      "Religious leaders must serve as cabinet ministers",
      "Religious education is compulsory in all public secular universities"
    ],
    correct_answer: "A",
    explanation: "Article 11 enshrines state secularism: (1) State and religion are separate; (2) There shall be no state religion; (3) The state shall not interfere in religious affairs and religion shall not interfere in state affairs.",
    topic_name: "Secularism & Separation of State and Religion",
    instruction_category: "Civics"
  },
  {
    question_number: 61,
    question_text: "Under the UN Convention on the Rights of the Child (CRC) and Article 36 of the FDRE Constitution, in all actions concerning children, the primary consideration shall be:",
    option_a: "Maximizing tax collection from minors",
    option_b: "The convenience of commercial employers",
    option_c: "The best interests of the child",
    option_d: "Enrolling all children in military academies",
    options: [
      "Maximizing tax collection from minors",
      "The convenience of commercial employers",
      "The best interests of the child",
      "Enrolling all children in military academies"
    ],
    correct_answer: "C",
    explanation: "Article 36(2) explicitly provides: 'In all actions concerning children undertaken by public and private welfare institutions, courts of law, administrative authorities or legislative bodies, the primary consideration shall be the best interests of the child.'",
    topic_name: "Rights of the Child & Best Interests Principle",
    instruction_category: "Civics"
  },
  {
    question_number: 62,
    question_text: "The human rights of Persons with Disabilities require society and state institutions to:",
    option_a: "Institutionalize them permanently in isolated facilities",
    option_b: "Ensure reasonable accommodation, accessible public infrastructure, inclusive quality education, and equal employment opportunities free from discrimination",
    option_c: "Deny them national identification cards and voting rights",
    option_d: "Prohibit them from participating in sporting events",
    options: [
      "Institutionalize them permanently in isolated facilities",
      "Ensure reasonable accommodation, accessible public infrastructure, inclusive quality education, and equal employment opportunities free from discrimination",
      "Deny them national identification cards and voting rights",
      "Prohibit them from participating in sporting events"
    ],
    correct_answer: "B",
    explanation: "The UN Convention on the Rights of Persons with Disabilities (CRPD) mandates full accessibility, non-discrimination, inclusive education, and equal participation in social, economic, and political life.",
    topic_name: "Rights of Persons with Disabilities",
    instruction_category: "Civics"
  },
  {
    question_number: 63,
    question_text: "In the Ethiopian legal system, the statutory enactments passed by the House of Peoples' Representatives are officially termed:",
    option_a: "Proclamations",
    option_b: "Regulations (issued by Council of Ministers)",
    option_c: "Directives (issued by individual Ministries)",
    option_d: "Executive Decrees",
    options: [
      "Proclamations",
      "Regulations (issued by Council of Ministers)",
      "Directives (issued by individual Ministries)",
      "Executive Decrees"
    ],
    correct_answer: "A",
    explanation: "Under Ethiopian law, the House of Peoples' Representatives passes primary legislation termed 'Proclamations'; the Council of Ministers issues 'Regulations'; and individual ministries issue 'Directives'.",
    topic_name: "Hierarchy of Laws in Ethiopia",
    instruction_category: "Civics"
  },
  {
    question_number: 64,
    question_text: "In the hierarchy of Ethiopian legal norms, which law is the supreme law of the land, rendering any law, customary practice, or decision of a state organ null and void if it contravenes it?",
    option_a: "Regional Police Regulations",
    option_b: "Municipal Building Codes",
    option_c: "Ministerial Directives",
    option_d: "The Constitution of the Federal Democratic Republic of Ethiopia (Article 9)",
    options: [
      "Regional Police Regulations",
      "Municipal Building Codes",
      "Ministerial Directives",
      "The Constitution of the Federal Democratic Republic of Ethiopia (Article 9)"
    ],
    correct_answer: "D",
    explanation: "Article 9(1) of the FDRE Constitution establishes Constitutional Supremacy: 'The Constitution is the supreme law of the land. Any law, customary practice or a decision of an organ of state or a public official which contravenes this Constitution shall be of no effect.'",
    topic_name: "Constitutional Supremacy (Article 9)",
    instruction_category: "Civics"
  },
  {
    question_number: 65,
    question_text: "The legal Latin phrase 'Ultra Vires' refers to actions taken by an administrative body or government official that:",
    option_a: "Are completely in accordance with constitutional authority",
    option_b: "Exceed the lawful scope of powers conferred upon them by statutory law, making such actions legally invalid and void",
    option_c: "Have been approved by a two-thirds majority in parliament",
    option_d: "Are performed by private military contractors abroad",
    options: [
      "Are completely in accordance with constitutional authority",
      "Exceed the lawful scope of powers conferred upon them by statutory law, making such actions legally invalid and void",
      "Have been approved by a two-thirds majority in parliament",
      "Are performed by private military contractors abroad"
    ],
    correct_answer: "B",
    explanation: "'Ultra Vires' ('beyond the powers') applies when a public official or administrative agency acts outside the legal limits set by the constitution or enabling legislation, rendering the act void.",
    topic_name: "Administrative Law - Doctrine of Ultra Vires",
    instruction_category: "Civics"
  },
  {
    question_number: 66,
    question_text: "What is the primary difference between a 'Civic Duty' (mandatory legal obligation) and a 'Civic Responsibility' (voluntary moral practice)?",
    option_a: "A civic duty is legally enforceable with penalties for non-compliance (e.g., paying taxes, obeying laws, jury service), whereas a civic responsibility is socially and morally encouraged (e.g., voting, volunteering, community dialogue)",
    option_b: "Civic duties are optional while civic responsibilities are illegal",
    option_c: "Civic duties apply only to foreign tourists",
    option_d: "There is no difference whatsoever between them",
    options: [
      "A civic duty is legally enforceable with penalties for non-compliance (e.g., paying taxes, obeying laws, jury service), whereas a civic responsibility is socially and morally encouraged (e.g., voting, volunteering, community dialogue)",
      "Civic duties are optional while civic responsibilities are illegal",
      "Civic duties apply only to foreign tourists",
      "There is no difference whatsoever between them"
    ],
    correct_answer: "A",
    explanation: "Duties (such as respecting the constitution, paying taxes, testifying in court when summoned) are legally mandated; responsibilities (participating in civil society, voting, cleaning public spaces) reflect active civic virtue.",
    topic_name: "Civic Duties vs Civic Responsibilities",
    instruction_category: "Civics"
  },
  {
    question_number: 67,
    question_text: "Traditional community self-help institutions in Ethiopia, such as 'Iddir' (burial mutual aid) and 'Equb' (rotating credit association), are vital social institutions because they:",
    option_a: "Collect federal customs tariffs at border checkpoints",
    option_b: "Issue national diplomatic passports",
    option_c: "Provide grassroots social security, financial mutual assistance, crisis support, and foster enduring community solidarity",
    option_d: "Conduct criminal murder trials",
    options: [
      "Collect federal customs tariffs at border checkpoints",
      "Issue national diplomatic passports",
      "Provide grassroots social security, financial mutual assistance, crisis support, and foster enduring community solidarity",
      "Conduct criminal murder trials"
    ],
    correct_answer: "C",
    explanation: "Iddir and Equb represent indigenous social capital and financial cooperation, providing essential community safety nets, insurance against grief/loss, and informal microfinance without bureaucratic hurdles.",
    topic_name: "Indigenous Civil Society - Iddir & Equb",
    instruction_category: "Civics"
  },
  {
    question_number: 68,
    question_text: "'Whistleblower Protection' laws are enacted in anti-corruption legislation to:",
    option_a: "Arrest journalists who report on public health",
    option_b: "Protect and shield ethical employees and citizens who report corruption, financial embezzlement, and illegal wrongdoing within institutions from retaliation, dismissal, or threats",
    option_c: "Reward corporate cartels who fix commodity prices",
    option_d: "Ban all whistle manufacturing factories",
    options: [
      "Arrest journalists who report on public health",
      "Protect and shield ethical employees and citizens who report corruption, financial embezzlement, and illegal wrongdoing within institutions from retaliation, dismissal, or threats",
      "Reward corporate cartels who fix commodity prices",
      "Ban all whistle manufacturing factories"
    ],
    correct_answer: "B",
    explanation: "Whistleblower protections encourage reporting of fraud, waste, and corruption by legally shielding informants from workplace harassment, termination, and physical retaliation.",
    topic_name: "Whistleblower Protection & Public Integrity",
    instruction_category: "Civics"
  },
  {
    question_number: 69,
    question_text: "The unethical administrative practice of appointing or favoring unqualified relatives and family members to public offices and procurement contracts is termed:",
    option_a: "Nepotism",
    option_b: "Meritocracy",
    option_c: "Philanthropy",
    option_d: "Altruism",
    options: ["Nepotism", "Meritocracy", "Philanthropy", "Altruism"],
    correct_answer: "A",
    explanation: "Nepotism is a form of corruption where officials abuse their authority to grant public appointments, promotions, or lucrative contracts to family members, violating the principles of fairness and merit.",
    topic_name: "Ethical Malpractice - Nepotism & Cronyism",
    instruction_category: "Civics"
  },
  {
    question_number: 70,
    question_text: "A genuine 'Meritocracy' in civil service recruitment and promotion ensures that:",
    option_a: "Jobs are inherited from parents to children automatically",
    option_b: "Appointments are sold to the highest bidder",
    option_c: "Employment is restricted to members of a single political party",
    option_d: "Individuals are evaluated, selected, and promoted based objectively on their demonstrated competence, skills, educational credentials, and professional excellence",
    options: [
      "Jobs are inherited from parents to children automatically",
      "Appointments are sold to the highest bidder",
      "Employment is restricted to members of a single political party",
      "Individuals are evaluated, selected, and promoted based objectively on their demonstrated competence, skills, educational credentials, and professional excellence"
    ],
    correct_answer: "D",
    explanation: "Meritocracy creates an efficient, fair, and professional civil service by selecting talent based on standardized qualifications, competitive exams, and demonstrated performance rather than nepotism or political patronage.",
    topic_name: "Meritocracy & Public Administration",
    instruction_category: "Civics"
  },
  {
    question_number: 71,
    question_text: "'Professional Ethics' refers to:",
    option_a: "Cheating on professional qualification exams",
    option_b: "The formalized codes of moral standards, ethical duties, and behavioral guidelines governing the conduct of professionals (such as doctors, lawyers, engineers, and teachers)",
    option_c: "Maximizing corporate profits by violating safety regulations",
    option_d: "Ignoring client confidentiality agreements",
    options: [
      "Cheating on professional qualification exams",
      "The formalized codes of moral standards, ethical duties, and behavioral guidelines governing the conduct of professionals (such as doctors, lawyers, engineers, and teachers)",
      "Maximizing corporate profits by violating safety regulations",
      "Ignoring client confidentiality agreements"
    ],
    correct_answer: "B",
    explanation: "Professional ethics (e.g., medical Hippocratic Oath, legal ethics) regulates professional conduct, requiring competence, integrity, confidentiality, and commitment to public welfare above personal interest.",
    topic_name: "Professional Ethics & Codes of Conduct",
    instruction_category: "Civics"
  },
  {
    question_number: 72,
    question_text: "'Moral Courage' in civic leadership and citizenship is demonstrated when an individual:",
    option_a: "Stands up for ethical principles, human rights, and the truth despite facing personal risk, peer pressure, political intimidation, or social disapproval",
    option_b: "Follows the corrupt crowd to avoid conflict",
    option_c: "Takes bribes secretly while pretending to be honest in public",
    option_d: "Abuses vulnerable citizens when no one is looking",
    options: [
      "Stands up for ethical principles, human rights, and the truth despite facing personal risk, peer pressure, political intimidation, or social disapproval",
      "Follows the corrupt crowd to avoid conflict",
      "Takes bribes secretly while pretending to be honest in public",
      "Abuses vulnerable citizens when no one is looking"
    ],
    correct_answer: "A",
    explanation: "Moral courage is the willingness to uphold ethical standards, defend victims of injustice, and speak truth to power, even when doing so entails personal hardship, loss of status, or danger.",
    topic_name: "Moral Courage & Civic Integrity",
    instruction_category: "Civics"
  },
  {
    question_number: 73,
    question_text: "In civic theory, how does an 'Active Citizen' differ from a 'Passive Citizen'?",
    option_a: "Active citizens commit criminal offenses while passive citizens work in banks",
    option_b: "Passive citizens run for parliament while active citizens avoid voting",
    option_c: "Active citizens proactively participate in community affairs, volunteer, vote, and advocate for positive social change, whereas passive citizens merely obey laws without engaging in civic life",
    option_d: "Active citizens are all civil engineers",
    options: [
      "Active citizens commit criminal offenses while passive citizens work in banks",
      "Passive citizens run for parliament while active citizens avoid voting",
      "Active citizens proactively participate in community affairs, volunteer, vote, and advocate for positive social change, whereas passive citizens merely obey laws without engaging in civic life",
      "Active citizens are all civil engineers"
    ],
    correct_answer: "C",
    explanation: "Active citizenship involves proactive civic engagement, community leadership, informed voting, and public problem-solving, whereas passive citizenship is limited to basic obedience to laws.",
    topic_name: "Active vs Passive Citizenship",
    instruction_category: "Civics"
  },
  {
    question_number: 74,
    question_text: "'Digital Citizenship' encompasses:",
    option_a: "Spreading malware and hacking municipal water grids",
    option_b: "The responsible, ethical, safe, and respectful use of technology, digital information, and social media platforms",
    option_c: "Purchasing stolen electronic devices online",
    option_d: "Creating fake identities to bully students online",
    options: [
      "Spreading malware and hacking municipal water grids",
      "The responsible, ethical, safe, and respectful use of technology, digital information, and social media platforms",
      "Purchasing stolen electronic devices online",
      "Creating fake identities to bully students online"
    ],
    correct_answer: "B",
    explanation: "Digital citizenship involves digital literacy, online privacy protection, evaluating information credibility, avoiding cyberbullying, and using internet technologies constructively.",
    topic_name: "Digital Citizenship & Cyber Ethics",
    instruction_category: "Civics"
  },
  {
    question_number: 75,
    question_text: "Which of the following online behaviors constitutes a serious violation of cyber ethics and cyber law?",
    option_a: "Cyberbullying, identity theft, unauthorized system hacking, phishing, and deliberately spreading toxic disinformation",
    option_b: "Reading verified digital educational encyclopedias",
    option_c: "Submitting homework through a secure school portal",
    option_d: "Sending polite email queries to university professors",
    options: [
      "Cyberbullying, identity theft, unauthorized system hacking, phishing, and deliberately spreading toxic disinformation",
      "Reading verified digital educational encyclopedias",
      "Submitting homework through a secure school portal",
      "Sending polite email queries to university professors"
    ],
    correct_answer: "A",
    explanation: "Cybercrimes—such as hacking, phishing scams, spreading hate speech, identity theft, and online defamation—harm individuals, disrupt digital infrastructure, and carry severe legal penalties.",
    topic_name: "Cybercrimes & Information Security",
    instruction_category: "Civics"
  },
  {
    question_number: 76,
    question_text: "The phenomenon of 'Brain Drain' refers to:",
    option_a: "The complete loss of memory due to neurological illness",
    option_b: "The reduction of school hours during vacation periods",
    option_c: "The purchase of imported scientific calculators",
    option_d: "The mass emigration of highly educated, skilled, and trained professionals (doctors, engineers, professors) from developing nations to affluent countries in search of higher pay and better conditions",
    options: [
      "The complete loss of memory due to neurological illness",
      "The reduction of school hours during vacation periods",
      "The purchase of imported scientific calculators",
      "The mass emigration of highly educated, skilled, and trained professionals (doctors, engineers, professors) from developing nations to affluent countries in search of higher pay and better conditions"
    ],
    correct_answer: "D",
    explanation: "Brain drain deprives developing countries of critical human capital (such as physicians and engineers) trained at public expense, hindering national economic and healthcare development.",
    topic_name: "Brain Drain & Human Capital Development",
    instruction_category: "Civics"
  },
  {
    question_number: 77,
    question_text: "'Dependency Syndrome' is a psychological and socio-economic condition where:",
    option_a: "A community becomes completely self-sufficient and stops importing luxury goods",
    option_b: "Individuals or communities lose self-initiative and become perpetually reliant on government hand-outs and foreign food aid rather than working for sustainable self-reliance",
    option_c: "A nation manufactures all its own industrial equipment",
    option_d: "Citizens invest heavily in national treasury bonds",
    options: [
      "A community becomes completely self-sufficient and stops importing luxury goods",
      "Individuals or communities lose self-initiative and become perpetually reliant on government hand-outs and foreign food aid rather than working for sustainable self-reliance",
      "A nation manufactures all its own industrial equipment",
      "Citizens invest heavily in national treasury bonds"
    ],
    correct_answer: "B",
    explanation: "Dependency syndrome undermines community self-initiative and resilience by fostering reliance on perpetual external handouts rather than productive labor and local problem solving.",
    topic_name: "Overcoming Dependency Syndrome",
    instruction_category: "Civics"
  },
  {
    question_number: 78,
    question_text: "Ethiopia's 'Green Legacy Initiative' is an ambitious national project designed to:",
    option_a: "Combating deforestation, soil degradation, and desertification by planting billions of seedlings across Ethiopia to enhance forest cover and food security",
    option_b: "Replacing all traditional coffee farms with concrete parking lots",
    option_c: "Selling all national forests to multinational timber corporations",
    option_d: "Painting all government buildings in green color",
    options: [
      "Combating deforestation, soil degradation, and desertification by planting billions of seedlings across Ethiopia to enhance forest cover and food security",
      "Replacing all traditional coffee farms with concrete parking lots",
      "Selling all national forests to multinational timber corporations",
      "Painting all government buildings in green color"
    ],
    correct_answer: "A",
    explanation: "Launched in 2019, the Green Legacy Initiative mobilizes millions of citizens to plant billions of indigenous, fruit, and agro-forestry trees annually to restore degraded ecosystems, mitigate climate change, and bolster food security.",
    topic_name: "The Green Legacy Initiative",
    instruction_category: "Civics"
  },
  {
    question_number: 79,
    question_text: "The construction of the Grand Ethiopian Renaissance Dam (GERD) on the Abay (Blue Nile) River embodies the international legal principle of:",
    option_a: "Unilateral monopolization of river waters without generating power",
    option_b: "Violating international environmental protocols",
    option_c: "Equitable and reasonable utilization of transboundary watercourses without causing significant harm to downstream nations",
    option_d: "Prohibiting any regional energy integration with neighboring states",
    options: [
      "Unilateral monopolization of river waters without generating power",
      "Violating international environmental protocols",
      "Equitable and reasonable utilization of transboundary watercourses without causing significant harm to downstream nations",
      "Prohibiting any regional energy integration with neighboring states"
    ],
    correct_answer: "C",
    explanation: "Under international water law (UN Watercourses Convention), GERD exemplifies equitable and reasonable utilization by generating clean renewable hydroelectricity for development while maintaining river flows without causing significant harm to downstream riparians.",
    topic_name: "Transboundary Waters & The GERD",
    instruction_category: "Civics"
  },
  {
    question_number: 80,
    question_text: "Under the 1961 Vienna Convention on Diplomatic Relations, 'Diplomatic Immunity' grants accredited diplomats:",
    option_a: "Protection from arrest, prosecution, and civil litigation in the receiving host country to ensure they can discharge their official diplomatic functions without coercion",
    option_b: "The right to commit violent crimes with total exemption from international law",
    option_c: "The authority to rewrite the constitution of the host nation",
    option_d: "The right to own all local mineral mines in the host territory",
    options: [
      "Protection from arrest, prosecution, and civil litigation in the receiving host country to ensure they can discharge their official diplomatic functions without coercion",
      "The right to commit violent crimes with total exemption from international law",
      "The authority to rewrite the constitution of the host nation",
      "The right to own all local mineral mines in the host territory"
    ],
    correct_answer: "A",
    explanation: "Diplomatic immunity protects accredited diplomats from host country arrest, detention, or prosecution, ensuring sovereign states can conduct foreign policy and dialogue without harassment or hostage taking.",
    topic_name: "Diplomatic Relations & International Law",
    instruction_category: "Civics"
  },
  {
    question_number: 81,
    question_text: "The formal legal process through which one sovereign country surrenders a suspected or convicted criminal to another country for prosecution or punishment is known as:",
    option_a: "Immigration",
    option_b: "Extradition",
    option_c: "Naturalization",
    option_d: "Expatriation",
    options: ["Immigration", "Extradition", "Naturalization", "Expatriation"],
    correct_answer: "B",
    explanation: "Extradition is regulated by bilateral treaties and international agreements, enabling sovereign governments to transfer criminal suspects across borders to face justice in the jurisdiction where the offense was committed.",
    topic_name: "International Judicial Cooperation - Extradition",
    instruction_category: "Civics"
  },
  {
    question_number: 82,
    question_text: "Regional economic integration bodies in Africa (such as IGAD, COMESA, EAC, and ECOWAS) strive to:",
    option_a: "Increase prohibitive tariff barriers among neighboring countries",
    option_b: "Prohibit all movement of goods and cross-border transport",
    option_c: "Eliminate trade barriers, promote economic cooperation, improve regional infrastructure, and harmonize market policies",
    option_d: "Impose economic sanctions on member states",
    options: [
      "Increase prohibitive tariff barriers among neighboring countries",
      "Prohibit all movement of goods and cross-border transport",
      "Eliminate trade barriers, promote economic cooperation, improve regional infrastructure, and harmonize market policies",
      "Impose economic sanctions on member states"
    ],
    correct_answer: "C",
    explanation: "Regional economic communities (RECs) serve as the building blocks for continental integration, lowering customs tariffs, connecting power grids and highways, and expanding regional commerce.",
    topic_name: "Regional Economic Integration in Africa",
    instruction_category: "Civics"
  },
  {
    question_number: 83,
    question_text: "The African Continental Free Trade Area (AfCFTA), headquartered in Accra, Ghana, was created to:",
    option_a: "Create a single continental free trade market for goods and services across 54 African nations, boosting intra-African trade and industrialization",
    option_b: "Impose European manufactured goods across Africa without tariffs",
    option_c: "Abolish all African national central banks",
    option_d: "Restrict African products from entering African markets",
    options: [
      "Create a single continental free trade market for goods and services across 54 African nations, boosting intra-African trade and industrialization",
      "Impose European manufactured goods across Africa without tariffs",
      "Abolish all African national central banks",
      "Restrict African products from entering African markets"
    ],
    correct_answer: "A",
    explanation: "AfCFTA creates the largest free trade area in the world by number of member countries, reducing tariffs on 90% of goods to expand intra-African trade, industrialization, and continental supply chains.",
    topic_name: "The AfCFTA & Continental Integration",
    instruction_category: "Civics"
  },
  {
    question_number: 84,
    question_text: "The United Nations Sustainable Development Goals (SDGs), adopted in 2015 as the 2030 Agenda for Sustainable Development, comprise how many interconnected global goals?",
    option_a: "5 goals",
    option_b: "10 goals",
    option_c: "12 goals",
    option_d: "17 goals (including No Poverty, Zero Hunger, Quality Education, and Climate Action)",
    options: [
      "5 goals",
      "10 goals",
      "12 goals",
      "17 goals (including No Poverty, Zero Hunger, Quality Education, and Climate Action)"
    ],
    correct_answer: "D",
    explanation: "The 17 SDGs encompass comprehensive targets for ending poverty, protecting the biosphere, improving education and healthcare, achieving gender equality, and fostering global partnership by 2030.",
    topic_name: "The UN Sustainable Development Goals (SDGs)",
    instruction_category: "Civics"
  },
  {
    question_number: 85,
    question_text: "Which of the following is considered a core dimension of the Rule of Law Index compiled by global governance institutions?",
    option_a: "The number of military tanks on display in national parades",
    option_b: "Absence of corruption, fundamental human rights protections, open and transparent government, order and security, and accessible civil and criminal justice",
    option_c: "The height of municipal skyscraper buildings",
    option_d: "The total quantity of imported luxury motor vehicles",
    options: [
      "The number of military tanks on display in national parades",
      "Absence of corruption, fundamental human rights protections, open and transparent government, order and security, and accessible civil and criminal justice",
      "The height of municipal skyscraper buildings",
      "The total quantity of imported luxury motor vehicles"
    ],
    correct_answer: "B",
    explanation: "The Rule of Law Index (World Justice Project) evaluates legal systems across 8 factors: constraints on government powers, absence of corruption, open government, fundamental rights, order/security, regulatory enforcement, civil justice, and criminal justice.",
    topic_name: "Evaluating the Rule of Law",
    instruction_category: "Civics"
  },
  {
    question_number: 86,
    question_text: "The ancient constitutional writ of 'Habeas Corpus' protects citizens by:",
    option_a: "Requiring that a person who has been arrested or detained be brought before a court of law without delay so the judge can determine the legality of the detention",
    option_b: "Authorizing the indefinite secret detention of citizens without trial",
    option_c: "Requiring all citizens to pay court fees in gold bullion",
    option_d: "Allowing police to confiscate private property without warrants",
    options: [
      "Requiring that a person who has been arrested or detained be brought before a court of law without delay so the judge can determine the legality of the detention",
      "Authorizing the indefinite secret detention of citizens without trial",
      "Requiring all citizens to pay court fees in gold bullion",
      "Allowing police to confiscate private property without warrants"
    ],
    correct_answer: "A",
    explanation: "Habeas corpus ('you shall have the body') is a cornerstone protection against arbitrary detention, requiring authorities to present the prisoner to a court and demonstrate lawful justification for detention.",
    topic_name: "Writ of Habeas Corpus & Personal Liberty",
    instruction_category: "Civics"
  },
  {
    question_number: 87,
    question_text: "The unethical political practice known as 'Gerrymandering' involves:",
    option_a: "Promoting women candidates in democratic elections",
    option_b: "Conducting an accurate national census every ten years",
    option_c: "Redrawing the geographic boundaries of electoral voting districts to give an unfair partisan advantage to a particular political party",
    option_d: "Installing electronic voting machines in rural communities",
    options: [
      "Promoting women candidates in democratic elections",
      "Conducting an accurate national census every ten years",
      "Redrawing the geographic boundaries of electoral voting districts to give an unfair partisan advantage to a particular political party",
      "Installing electronic voting machines in rural communities"
    ],
    correct_answer: "C",
    explanation: "Gerrymandering manipulates district boundary lines to pack or crack opposing voters, distorting electoral representation and undermining competitive democracy.",
    topic_name: "Electoral Integrity & Gerrymandering",
    instruction_category: "Civics"
  },
  {
    question_number: 88,
    question_text: "'Civil Disobedience' (advocated by Henry David Thoreau, Mahatma Gandhi, and Martin Luther King Jr.) is characterized as:",
    option_a: "Armed terrorism aimed at overthrowing the state violently",
    option_b: "The deliberate, public, non-violent refusal to obey an unjust law or policy, accepting legal penalties to appeal to the moral conscience of society and effect reform",
    option_c: "Secretly committing petty theft at night",
    option_d: "Refusing to attend secondary school classes",
    options: [
      "Armed terrorism aimed at overthrowing the state violently",
      "The deliberate, public, non-violent refusal to obey an unjust law or policy, accepting legal penalties to appeal to the moral conscience of society and effect reform",
      "Secretly committing petty theft at night",
      "Refusing to attend secondary school classes"
    ],
    correct_answer: "B",
    explanation: "Civil disobedience is nonviolent, principled, public resistance against unjust laws, where protesters accept legal consequences to expose systemic injustice and mobilize democratic change.",
    topic_name: "Non-Violent Resistance & Civil Disobedience",
    instruction_category: "Civics"
  },
  {
    question_number: 89,
    question_text: "'Social Cohesion' in a multi-ethnic community is strengthened when:",
    option_a: "There is mutual trust, shared civic values, equality of opportunity, social inclusion, and active cross-cultural solidarity",
    option_b: "Communities live in segregated, hostile enclaves",
    option_c: "Certain cultural groups are denied basic healthcare and schooling",
    option_d: "Ethnic stereotyping and derogatory slurs are promoted in media",
    options: [
      "There is mutual trust, shared civic values, equality of opportunity, social inclusion, and active cross-cultural solidarity",
      "Communities live in segregated, hostile enclaves",
      "Certain cultural groups are denied basic healthcare and schooling",
      "Ethnic stereotyping and derogatory slurs are promoted in media"
    ],
    correct_answer: "A",
    explanation: "Social cohesion reflects the strength of social bonds, mutual respect, shared civic pride, and trust among diverse citizens, preventing social fragmentation and conflict.",
    topic_name: "Building Social Cohesion",
    instruction_category: "Civics"
  },
  {
    question_number: 90,
    question_text: "'Xenophobia' is an irrational and harmful social prejudice defined as:",
    option_a: "The fear of high mountain peaks",
    option_b: "The scientific study of foreign plant species",
    option_c: "The celebration of international cultural festivals",
    option_d: "The deep-rooted hatred, fear, prejudice, or discrimination directed against foreigners, immigrants, or people perceived as outsiders",
    options: [
      "The fear of high mountain peaks",
      "The scientific study of foreign plant species",
      "The celebration of international cultural festivals",
      "The deep-rooted hatred, fear, prejudice, or discrimination directed against foreigners, immigrants, or people perceived as outsiders"
    ],
    correct_answer: "D",
    explanation: "Xenophobia manifests in hostility, exclusion, and violence against immigrants and refugees, violating universal human rights and undermining global peace and solidarity.",
    topic_name: "Combating Xenophobia & Discrimination",
    instruction_category: "Civics"
  },
  {
    question_number: 91,
    question_text: "In ethical philosophy, 'Altruism' refers to:",
    option_a: "Relentless pursuit of self-interest at the expense of others",
    option_b: "Unselfish concern, empathy, and active devotion to the wellbeing, happiness, and service of others without expecting personal gain or reward",
    option_c: "Hoarding scarce resources during an emergency",
    option_d: "Refusing to cooperate with community members",
    options: [
      "Relentless pursuit of self-interest at the expense of others",
      "Unselfish concern, empathy, and active devotion to the wellbeing, happiness, and service of others without expecting personal gain or reward",
      "Hoarding scarce resources during an emergency",
      "Refusing to cooperate with community members"
    ],
    correct_answer: "B",
    explanation: "Altruism is the moral virtue of selfless service to others, inspiring volunteering, disaster relief, philanthropy, and community solidarity.",
    topic_name: "Moral Virtues - Altruism & Empathy",
    instruction_category: "Civics"
  },
  {
    question_number: 92,
    question_text: "Universal access to quality 'Primary Education' is recognized as a fundamental human right because:",
    option_a: "It empowers individuals with literacy, critical thinking, economic productivity, civic awareness, and breaks the intergenerational cycle of poverty",
    option_b: "It forces everyone to choose the same career path",
    option_c: "It only benefits the industrial banking sector",
    option_d: "It prevents citizens from understanding their legal rights",
    options: [
      "It empowers individuals with literacy, critical thinking, economic productivity, civic awareness, and breaks the intergenerational cycle of poverty",
      "It forces everyone to choose the same career path",
      "It only benefits the industrial banking sector",
      "It prevents citizens from understanding their legal rights"
    ],
    correct_answer: "A",
    explanation: "Education is an empowering human right that enhances personal dignity, health literacy, civic participation, gender empowerment, and national economic development.",
    topic_name: "Right to Education & Human Development",
    instruction_category: "Civics"
  },
  {
    question_number: 93,
    question_text: "'Intellectual Property Rights' (patents, copyrights, and trademarks) are legally protected to:",
    option_a: "Prohibit authors from publishing any books",
    option_b: "Prevent scientific innovations from ever being used in medicine",
    option_c: "Encourage creativity and innovation by granting creators and inventors legal protections and economic rewards for their original intellectual creations",
    option_d: "Allow competitors to freely pirate original software without consequences",
    options: [
      "Prohibit authors from publishing any books",
      "Prevent scientific innovations from ever being used in medicine",
      "Encourage creativity and innovation by granting creators and inventors legal protections and economic rewards for their original intellectual creations",
      "Allow competitors to freely pirate original software without consequences"
    ],
    correct_answer: "C",
    explanation: "Intellectual property laws protect inventors, authors, and artists from theft and unauthorized copying, fostering incentives for research, development, artistic creativity, and technological innovation.",
    topic_name: "Intellectual Property & Innovation Ethics",
    instruction_category: "Civics"
  },
  {
    question_number: 94,
    question_text: "According to the Food and Agriculture Organization (FAO), 'Food Security' exists when:",
    option_a: "A country imports all its basic food crops from abroad",
    option_b: "All people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food that meets their dietary needs and food preferences for an active and healthy life",
    option_c: "Food is available only to military officers",
    option_d: "All traditional farms are converted into urban shopping plazas",
    options: [
      "A country imports all its basic food crops from abroad",
      "All people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food that meets their dietary needs and food preferences for an active and healthy life",
      "Food is available only to military officers",
      "All traditional farms are converted into urban shopping plazas"
    ],
    correct_answer: "B",
    explanation: "Food security rests on four pillars: availability (sufficient quantity), access (economic/physical ability to obtain food), utilization (nutritional value and safe water), and stability over time.",
    topic_name: "Food Security as a Human Right",
    instruction_category: "Civics"
  },
  {
    question_number: 95,
    question_text: "'Restorative Justice' focuses on:",
    option_a: "Repairing the harm caused by criminal behavior, promoting healing and reconciliation among the victim, the offender, and the affected community",
    option_b: "Inflicting the maximum physical pain on convicted offenders",
    option_c: "Executing all accused individuals without trial",
    option_d: "Ignoring the needs and feelings of crime victims",
    options: [
      "Repairing the harm caused by criminal behavior, promoting healing and reconciliation among the victim, the offender, and the affected community",
      "Inflicting the maximum physical pain on convicted offenders",
      "Executing all accused individuals without trial",
      "Ignoring the needs and feelings of crime victims"
    ],
    correct_answer: "A",
    explanation: "Restorative justice views crime as a violation of people and relationships, emphasizing offender accountability, restitution to the victim, and community reintegration.",
    topic_name: "Theories of Justice - Restorative Justice",
    instruction_category: "Civics"
  },
  {
    question_number: 96,
    question_text: "In contrast to restorative justice, 'Retributive Justice' is guided by the principle that:",
    option_a: "Offenders should receive rehabilitation and job training exclusively",
    option_b: "Criminals should never face any legal sanctions",
    option_c: "Punishment should be inflicted on wrongdoers strictly in proportion to the severity of the crime committed ('just deserts')",
    option_d: "Victims should be punished for reporting crimes",
    options: [
      "Offenders should receive rehabilitation and job training exclusively",
      "Criminals should never face any legal sanctions",
      "Punishment should be inflicted on wrongdoers strictly in proportion to the severity of the crime committed ('just deserts')",
      "Victims should be punished for reporting crimes"
    ],
    correct_answer: "C",
    explanation: "Retributive justice holds that offenders morally deserve proportionate punishment for their transgressions according to established penal law, restoring moral balance.",
    topic_name: "Theories of Justice - Retributive Justice",
    instruction_category: "Civics"
  },
  {
    question_number: 97,
    question_text: "'Distributive Justice' in political and moral philosophy addresses:",
    option_a: "The military conquest of foreign lands",
    option_b: "The fair, ethical, and equitable allocation of economic benefits, public resources, social opportunities, and tax burdens across a society",
    option_c: "The distribution of weapons to private militias",
    option_d: "The closure of rural transportation links",
    options: [
      "The military conquest of foreign lands",
      "The fair, ethical, and equitable allocation of economic benefits, public resources, social opportunities, and tax burdens across a society",
      "The distribution of weapons to private militias",
      "The closure of rural transportation links"
    ],
    correct_answer: "B",
    explanation: "Distributive justice (explored by John Rawls and Aristotle) concerns moral principles governing the fair allocation of social goods, wealth, public services, and taxation burdens.",
    topic_name: "Distributive Justice & Wealth Allocation",
    instruction_category: "Civics"
  },
  {
    question_number: 98,
    question_text: "'Procedural Justice' requires that:",
    option_a: "The legal and administrative processes and rules used to make decisions are transparent, fair, unbiased, consistent, and respectful of all participants' rights",
    option_b: "Court judges decide cases based on bribery payments",
    option_c: "The outcome of every trial is predetermined by the executive branch",
    option_d: "Rules are changed retroactively during the middle of a trial",
    options: [
      "The legal and administrative processes and rules used to make decisions are transparent, fair, unbiased, consistent, and respectful of all participants' rights",
      "Court judges decide cases based on bribery payments",
      "The outcome of every trial is predetermined by the executive branch",
      "Rules are changed retroactively during the middle of a trial"
    ],
    correct_answer: "A",
    explanation: "Procedural justice focuses on the fairness of the dispute resolution process itself—giving all parties a voice, treating people with dignity, neutrality, and clear rules.",
    topic_name: "Procedural Justice in Legal Systems",
    instruction_category: "Civics"
  },
  {
    question_number: 99,
    question_text: "According to the United Nations Development Programme (UNDP), which of the following represents a comprehensive set of characteristics defining 'Good Governance'?",
    option_a: "Secrecy, militarism, autocracy, and corruption",
    option_b: "Censorship, judicial bias, nepotism, and inequality",
    option_c: "High inflation, unemployment, and lack of accountability",
    option_d: "Participation, Rule of Law, Transparency, Responsiveness, Consensus Orientation, Equity and Inclusiveness, Effectiveness and Efficiency, and Accountability",
    options: [
      "Secrecy, militarism, autocracy, and corruption",
      "Censorship, judicial bias, nepotism, and inequality",
      "High inflation, unemployment, and lack of accountability",
      "Participation, Rule of Law, Transparency, Responsiveness, Consensus Orientation, Equity and Inclusiveness, Effectiveness and Efficiency, and Accountability"
    ],
    correct_answer: "D",
    explanation: "The UNDP identifies eight major characteristics of good governance: participatory, rule of law, transparent, responsive, consensus-oriented, equitable and inclusive, effective and efficient, and accountable.",
    topic_name: "Principles of Good Governance (UNDP)",
    instruction_category: "Civics"
  },
  {
    question_number: 100,
    question_text: "The ultimate overarching objective of Civics and Ethical Education in secondary schools is to:",
    option_a: "Cultivate informed, virtuous, active, critically thinking, and patriotic citizens committed to democracy, the rule of law, human rights, and national development",
    option_b: "Train students exclusively in memorizing historical dates without understanding",
    option_c: "Discourage young citizens from participating in community volunteer work",
    option_d: "Promote ethnic prejudice and social intolerance among youth",
    options: [
      "Cultivate informed, virtuous, active, critically thinking, and patriotic citizens committed to democracy, the rule of law, human rights, and national development",
      "Train students exclusively in memorizing historical dates without understanding",
      "Discourage young citizens from participating in community volunteer work",
      "Promote ethnic prejudice and social intolerance among youth"
    ],
    correct_answer: "A",
    explanation: "Civics and Ethical Education equips students with moral values, democratic principles, legal awareness, critical thinking, and civic responsibilities to become productive, ethical leaders and active participants in building a democratic and prosperous society.",
    topic_name: "Core Objective of Civics & Ethical Education",
    instruction_category: "Civics"
  }
];

module.exports = questions;
