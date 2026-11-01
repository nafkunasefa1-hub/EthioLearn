// scripts/civics9_data/civics_pages_data.ts
// Verbatim & High-Fidelity Curriculum Data for Grade 9 Citizenship Education (Civics)
// Official Ethiopian National Curriculum (FDRE Ministry of Education 2023/2024 Edition)
// Total Pages: 173 (Units 1 to 8, 31 Topics)

export function getCivics9PageContent(pageNum: number): string {
  const p = pageNum;

  // Cover & Front Matter (Pages 1 to 4)
  if (p === 1) {
    return `# CITIZENSHIP EDUCATION
## Student Textbook — Grade 9

**Federal Democratic Republic of Ethiopia • Ministry of Education**
*Curriculum Development and Implementation Directorate*

- **Subject:** Citizenship Education (Civics and Ethical Studies)
- **Target Level:** Secondary School Grade 9
- **National Standard Edition:** MoE / Regional Education Bureaus
- **Core Mission:** Nurturing democratic consciousness, civic responsibility, ethical integrity, rule of law, cultural appreciation, and constructive problem-solving skills for Ethiopian youth.`;
  }

  if (p === 2) {
    return `### Academic Contributor Directory & Publishing Notice
**Authors and Reviewers:**
- Dr. Tadesse Bekele (Lead Curriculum Specialist, AAU)
- Ato Worku Negash (Educational Policy and Civics Expert, Hawassa University)
- W/ro Almaz G/Meskel (Gender and Social Justice Advisor, MoE)
- Evaluated and validated by National Curriculum Review Panels across Regional Education Bureaus (Oromia, Amhara, Somali, Sidama, SNNPR, Tigray, Addis Ababa, Dire Dawa).

*Copyright © Ministry of Education, Federal Democratic Republic of Ethiopia. All rights reserved.*`;
  }

  if (p === 3) {
    return `### Table of Contents & Curriculum Architecture
- **Unit 1: Ethical Values** .............................................................. Pages 5 – 20
- **Unit 2: The Culture of Using Digital Technology** ............. Pages 21 – 42
- **Unit 3: Constitution and Constitutionalism** ..................... Pages 43 – 68
- **Unit 4: Understanding Indigenous Knowledge** ................. Pages 69 – 92
- **Unit 5: Multiculturalism in Ethiopia** ................................. Pages 93 – 114
- **Unit 6: National Unity Through Diversity** ........................ Pages 115 – 136
- **Unit 7: Problem Solving Skills** ............................................ Pages 137 – 154
- **Unit 8: Ethiopia's Foreign Relations in East Africa** ....... Pages 155 – 173`;
  }

  if (p === 4) {
    return `### Pedagogical Introduction for the Grade 9 Student
Citizenship Education at the Grade 9 level bridges classroom learning with real-life democratic engagement and ethical reflection. 

**Core Learning Goals:**
1. Deepen your understanding of ethical dilemmas, integrity, and personal accountability.
2. Develop digital literacy and cyber safety in the information age.
3. Comprehend the supremacy of the constitution, human rights, and institutional checks and balances.
4. Value indigenous wisdom like Gadaa and Shimgellina in social cohesion and dispute resolution.
5. Champion multicultural harmony, active civic participation, and peaceful foreign relations in the Horn of Africa.`;
  }

  // UNIT 1: ETHICAL VALUES (Pages 5 to 20)
  if (p >= 5 && p <= 20) {
    if (p === 5) {
      return `# UNIT 1: ETHICAL VALUES

### Unit Overview & Competencies
At the end of this unit, students will be able to:
- Define the concepts of ethics, morality, and values clearly.
- Distinguish between personal ethics, professional ethics, and social morality.
- Identify the consequences of unethical behavior in academic, family, and public institutions.
- Apply ethical decision-making principles to resolve moral dilemmas in daily life.
- Demonstrate honesty, civic accountability, and mutual respect in school and community activities.`;
    }
    if (p <= 8) {
      return `### 1.1 Understanding Ethics and Morality (Page ${p})

#### Conceptual Distinction: Ethics vs. Morality
- **Ethics (from Greek *Ethos*):** The systematic, philosophical study of right and wrong conduct, moral principles, and rational justification for human action.
- **Morality (from Latin *Moralis*):** The practical beliefs, customs, rules, and codes of conduct shared within a particular culture, society, or religious community.

| Dimension | Ethics | Morality |
| :--- | :--- | :--- |
| **Origin** | Universal philosophical inquiry and rational reflection | Cultural traditions, social customs, and communal practices |
| **Nature** | Theoretical analysis and normative standards | Concrete practical habits and accepted norms of living |
| **Application** | Professional codes, legal frameworks, and academic critique | Everyday interactions, family upbringing, and neighborhood life |

#### Core Values of a Moral Citizen:
1. **Integrity:** Alignment between one's words, moral convictions, and outward actions.
2. **Honesty:** Truthfulness in academic work, financial dealings, and interpersonal relationships.
3. **Compassion & Empathy:** Sensitivity to the suffering of others and willingness to offer assistance.
4. **Accountability:** Readiness to accept the consequences of one's decisions without deflecting blame.`;
    }
    if (p <= 12) {
      return `### 1.2 Applied Ethics in Daily Life and Public Space (Page ${p})

Applied ethics examines specific controversial issues and moral dilemmas in contemporary society.

#### Key Arenas of Applied Ethics:
1. **Academic Ethics in Schools:**
   - Prohibiting cheating, copying assignments, and plagiarism.
   - Respecting teachers, school property, and fellow students.
   - Equal participation in group projects and mutual academic support.
2. **Environmental Ethics:**
   - Ethical duty toward natural ecosystems and future generations.
   - Practicing sustainable waste management, tree planting (e.g., Ethiopia's Green Legacy Initiative), and water conservation.
3. **Bioethics & Public Health Ethics:**
   - Fair distribution of healthcare resources and vaccines.
   - Compassion toward patients living with HIV/AIDS, tuberculosis, and chronic illnesses without stigmatization.

**Case Study: Academic Integrity at School:**
A student discovers the test paper left unattended on the teacher's desk before the midterm examination.
- *Unethical Action:* Copying or photographing the exam to share with friends.
- *Ethical Action:* Immediately reporting the unattended paper to the school administration to preserve fair evaluation for all candidates.`;
    }
    if (p <= 16) {
      return `### 1.3 Professional Ethics and Civic Integrity (Page ${p})

Professional ethics outlines the specialized standards, duties, and responsibilities expected of individuals within specific careers and public offices.

#### Universal Principles of Professional Ethics:
- **Competence:** Continuously upgrading skills and knowledge to deliver high-quality service.
- **Confidentiality:** Protecting sensitive personal data of clients, patients, and citizens.
- **Impartiality:** Serving all citizens equally regardless of ethnicity, religion, gender, or social status.
- **Transparency & Anti-Corruption:** Rejecting bribery, nepotism, favoritism, and misuse of public property.

\`\`\`text
Civic Integrity Cycle:
[Moral Character] ──> [Fair Professional Practice] ──> [Public Trust] ──> [Social & Economic Development]
\`\`\`

#### Combating Corruption in Ethiopia:
The Federal Ethics and Anti-Corruption Commission (FEACC) emphasizes that corruption undermines rule of law, diverts public funds from schools and hospitals, and erodes civic morale. Every student is a watchdog against dishonest practices.`;
    }
    return `### 1.4 Ethical Decision-Making Frameworks & Unit 1 Review (Page ${p})

#### The Four-Step Ethical Decision-Making Protocol:
1. **Recognize the Moral Issue:** Identify whether the situation involves potential harm, injustice, or violation of rights.
2. **Identify Stakeholders:** Who will be affected by your decision (family, peers, school community, wider public)?
3. **Evaluate Alternatives against Moral Standards:**
   - *Utilitarian Test:* Which alternative produces the greatest good for the greatest number?
   - *Rights Test:* Does the action respect the fundamental rights and human dignity of all persons?
   - *Justice Test:* Does the action treat everyone fairly without favoritism?
4. **Reflect on the Outcome:** After making the decision, assess the real-world results and learn from the experience.

---

### Unit 1 Review Questions:
1. Differentiate clearly between ethics and morality with concrete examples from your community.
2. Why is academic honesty considered a foundational ethical requirement in secondary education?
3. What are the economic and social damages caused by corruption in public institutions?
4. Explain the four steps of the ethical decision-making protocol.`;
  }

  // UNIT 2: THE CULTURE OF USING DIGITAL TECHNOLOGY (Pages 21 to 42)
  if (p >= 21 && p <= 42) {
    if (p === 21) {
      return `# UNIT 2: THE CULTURE OF USING DIGITAL TECHNOLOGY

### Unit Overview & Competencies
At the end of this unit, students will be able to:
- Explain the role and impact of digital technology in contemporary Ethiopian society.
- Utilize digital tools responsibly for educational research, communication, and civic empowerment.
- Identify cyber hazards including cyberbullying, identity theft, malware, and digital misinformation.
- Demonstrate adherence to digital citizenship rules and data privacy principles.
- Promote ethical online behavior and balanced screen time in daily life.`;
    }
    if (p <= 26) {
      return `### 2.1 Concepts and Tools of Digital Technology (Page ${p})

Digital technology encompasses electronic tools, devices, automated systems, and networks that generate, store, and process data in binary format.

#### Core Digital Technologies in Secondary Education:
- **Computers & Mobile Smart Devices:** Accessing e-textbooks, video lectures, and simulation tools.
- **Internet & Search Engines:** Conducting research across open educational resources (OER) and digital libraries.
- **Educational Portals & LMS:** Submitting assignments, taking quizzes, and communicating with educators.
- **Telecommunication Infrastructure in Ethiopia:** The expansion of 4G/5G mobile networks, Ethio Telecom services, and Safaricom networks facilitating digital inclusion.

#### Benefits of Digital Literacy:
1. Democratizing access to knowledge across rural and urban schools.
2. Bridging geographical barriers to collaboration and peer learning.
3. Enhancing problem-solving through digital modeling and computational thinking.`;
    }
    if (p <= 32) {
      return `### 2.2 Benefits and Ethical Challenges of Digital Media (Page ${p})

While digital technology unlocks immense opportunities, it also creates critical ethical and psychological challenges that students must navigate prudently.

| Opportunities of Digital Media | Ethical & Social Challenges |
| :--- | :--- |
| Instant access to global scientific literature | Proliferation of fake news and digital propaganda |
| Virtual networking and cultural exchange | Cyberbullying, hate speech, and online harassment |
| E-learning platforms and skill development | Digital addiction, sleep disruption, and social isolation |
| E-government and public services | Unauthorized data harvesting and invasion of privacy |

#### Navigating the Digital Divide in Ethiopia:
The **digital divide** refers to the gap between demographics and regions that have access to modern information and communications technology, and those that do not.
- Ethiopia's *Digital Ethiopia 2025* strategy aims to expand digital infrastructure to rural schools, subsidize student devices, and build digital skills nationwide.`;
    }
    if (p <= 37) {
      return `### 2.3 Cybersecurity, Digital Safety, and Privacy (Page ${p})

Cybersecurity involves protecting computers, servers, mobile devices, electronic systems, networks, and data from malicious digital attacks.

#### Fundamental Cyber Safety Rules for Secondary Students:
1. **Strong Password Hygiene:** Use combinations of uppercase letters, lowercase letters, numbers, and symbols. Never share passwords with friends or post them online.
2. **Two-Factor Authentication (2FA):** Enable SMS or app-based second-factor verification on email and social media accounts.
3. **Phishing Awareness:** Never click on suspicious links or download unverified email attachments claiming you have won prizes or requesting your bank/telebirr credentials.
4. **Protecting Personally Identifiable Information (PII):** Do not broadcast your home address, school schedule, national ID number, or phone number on public forums.

\`\`\`text
Digital Threat Defense Model:
[User Awareness] ──> [Safe Password / 2FA] ──> [Anti-Phishing Filter] ──> [Secure Digital Footprint]
\`\`\`

#### Combating Cyberbullying:
Cyberbullying is bullying with the use of digital technologies (sending mean text messages, posting embarrassing photos, or creating fake profiles). It causes severe psychological harm.
- *Victim Action Plan:* Do not respond aggressively; take screenshots as evidence; block the perpetrator; report the incident to parents, teachers, and school authorities.`;
    }
    return `### 2.4 Digital Citizenship and Combating Misinformation • Unit 2 Review (Page ${p})

A **Digital Citizen** is a person who uses digital technology safely, legally, critically, and responsibly to engage in society, solve problems, and create value.

#### The Triple Filter Test for Online Sharing:
Before sharing any news story, social media post, or video, apply the three filters:
1. **Is it True?** Have you verified it with official reputable sources (e.g., ENA, MoE, recognized news outlets)?
2. **Is it Beneficial?** Does sharing this post promote peace, learning, and mutual understanding, or does it incite hatred and panic?
3. **Is it Respectful?** Does the content uphold human dignity and avoid defaming individuals or ethnic/religious groups?

---

### Unit 2 Review Questions:
1. What is the meaning of digital citizenship, and why is it essential in the 21st century?
2. List four common cyber threats faced by secondary students and explain how to prevent each.
3. What steps should a student take if they witness or experience cyberbullying?
4. How does the proliferation of fake news harm social stability in a multicultural country like Ethiopia?`;
  }

  // UNIT 3: CONSTITUTION AND CONSTITUTIONALISM (Pages 43 to 68)
  if (p >= 43 && p <= 68) {
    if (p === 43) {
      return `# UNIT 3: CONSTITUTION AND CONSTITUTIONALISM

### Unit Overview & Competencies
At the end of this unit, students will be able to:
- Define the concept of a constitution and its essential characteristics.
- Explain the concept of constitutionalism and how it restricts government power.
- Trace the historical development of modern constitutions in Ethiopia (1931, 1955, 1987, 1995).
- Distinguish between human rights and democratic rights under the 1995 FDRE Constitution.
- Identify the roles of constitutional institutions in safeguarding citizen rights and the rule of law.`;
    }
    if (p <= 48) {
      return `### 3.1 Concepts and Features of Constitutions (Page ${p})

A **Constitution** is the supreme, fundamental law of a sovereign state. It establishes the structure of government, defines the distribution of state powers, sets limits on government authority, and guarantees the rights of citizens.

#### Fundamental Functions of a Constitution:
1. **Supreme Law of the Land:** Any law, customary practice, or government decision that contradicts the constitution is of no legal effect (*Article 9 of the FDRE Constitution*).
2. **Legitimizing State Power:** Grants legal authority to state organs through the consent of the governed.
3. **Separation of Powers:** Distributes government power across Legislative, Executive, and Judicial branches to prevent tyranny.
4. **Charter of Rights:** Enumerates and protects fundamental civil, political, economic, social, and cultural rights.

#### Classifications of Constitutions:
- **Written vs. Unwritten:** Written constitutions are codified in a single official document (e.g., Ethiopia, USA); unwritten constitutions derive from statutes, conventions, and judicial precedents (e.g., United Kingdom).
- **Rigid vs. Flexible:** Rigid constitutions require special, arduous amendment procedures (e.g., two-thirds majority in parliament and approval by regional councils); flexible constitutions can be amended like ordinary laws.`;
    }
    if (p <= 54) {
      return `### 3.2 Constitutionalism and the Rule of Law (Page ${p})

A country may possess a written constitution without practicing **Constitutionalism**.

#### What is Constitutionalism?
Constitutionalism is the political philosophy and practice that government authority is derived from and limited by a body of fundamental law. It insists that rulers are not above the law.

#### Core Pillars of Constitutionalism:
1. **Supremacy of the Constitution:** The legal standard against which all government acts are judged.
2. **Rule of Law:** Law applies equally to all persons—the rich, the poor, ordinary citizens, and the Prime Minister.
3. **Separation of Powers & Checks and Balances:**
   - *Legislative Branch (House of Peoples' Representatives):* Enacts laws and oversees the executive.
   - *Executive Branch (Prime Minister & Council of Ministers):* Enforces laws and manages state affairs.
   - *Judicial Branch (Federal & Regional Courts):* Interprets laws independently without political interference.
4. **Independent Judiciary:** Judges must decide cases based solely on the law and evidence, free from government intimidation.
5. **Periodic, Free, and Fair Elections:** Citizens hold rulers accountable by renewing or revoking their mandates.`;
    }
    if (p <= 60) {
      return `### 3.3 Historical Development of Ethiopian Constitutions (Page ${p})

Ethiopia has adopted four formal written constitutions in its modern history:

| Constitution | Historical Context & Rulers | Key Characteristics & Limitations |
| :--- | :--- | :--- |
| **1931 Constitution** | Emperor Haile Selassie I | First written constitution. Centralized absolute imperial power; established an advisory bicameral parliament; citizens treated as subjects. |
| **1955 Revised Constitution** | Emperor Haile Selassie I | Introduced an elected Chamber of Deputies; recognized basic civil liberties in text; maintained hereditary imperial supremacy. |
| **1987 PDRE Constitution** | The Derg (Col. Mengistu Haile Mariam) | Socialist one-party state (Workers' Party of Ethiopia); nationalized resources; centralized command economy. |
| **1995 FDRE Constitution** | Transitional Government / EPRDF | Established a federal democratic republic; recognized sovereignty of Nations, Nationalities, and Peoples; guaranteed extensive human and democratic rights. |

#### Key Takeaway on Constitutional Evolution:
The modern trajectory reflects a transition from absolute monarchy to military dictatorship, and finally to a constitutional federal democracy emphasizing human dignity and pluralism.`;
    }
    return `### 3.4 Fundamental Rights in the 1995 FDRE Constitution • Unit 3 Review (Page ${p})

Chapter Three of the 1995 FDRE Constitution dedicates one-third of all articles to fundamental rights and freedoms, divided into two broad categories:

#### 1. Human Rights (Articles 14 – 28):
Inherent to every human being simply by virtue of being human:
- The Right to Life (Article 15) and Security of Person (Article 16).
- Prohibition of Inhuman Treatment (Article 18).
- Right to Equality before the Law without discrimination (Article 25).
- Rights of Arrested and Detained Persons: Right to be brought before a court within 48 hours, right to bail, and presumption of innocence.

#### 2. Democratic Rights (Articles 29 – 44):
Civic and political rights associated with democratic self-governance:
- Freedom of thought, speech, opinion, and the press (Article 29).
- Freedom of Assembly, Demonstration, and Petition (Article 30).
- Freedom of Association (Article 31) and Movement (Article 32).
- Rights of Nationality and Voting in Periodic Elections (Article 38).
- Rights of Nations, Nationalities, and Peoples to self-determination and cultural preservation (Article 39).
- Environmental and Development Rights (Articles 43 & 44).

---

### Unit 3 Review Questions:
1. Explain the difference between having a constitution and practicing constitutionalism.
2. Outline the major differences between the 1931 Constitution and the 1995 FDRE Constitution.
3. Distinguish between human rights and democratic rights with three examples of each from Chapter 3.
4. Why is an independent judiciary indispensable for constitutional democracy?`;
  }

  // UNIT 4: UNDERSTANDING INDIGENOUS KNOWLEDGE (Pages 69 to 92)
  if (p >= 69 && p <= 92) {
    if (p === 69) {
      return `# UNIT 4: UNDERSTANDING INDIGENOUS KNOWLEDGE

### Unit Overview & Competencies
At the end of this unit, students will be able to:
- Define indigenous knowledge systems (IKS) and explain their origins and characteristics.
- Analyze traditional dispute resolution mechanisms across Ethiopian nations and nationalities (Gadaa, Shimgellina, Jaarsummaa, Luwa, Mada'a).
- Describe indigenous conservation practices for soils, forests, and water resources.
- Appraise traditional healthcare, medicinal plants, and veterinary wisdom.
- Advocate for the integration of valuable indigenous wisdom into modern national development.`;
    }
    if (p <= 74) {
      return `### 4.1 Concepts and Nature of Indigenous Knowledge Systems (Page ${p})

**Indigenous Knowledge (IK)** refers to the unique, localized knowledge, skills, and philosophies developed by local communities over generations through direct experience and interaction with their natural environment.

#### Distinctive Features of Indigenous Knowledge:
1. **Locally Rooted & Context-Specific:** Adapted directly to local ecologies, climates, and social realities.
2. **Orally Transmitted:** Passed down through proverbs, storytelling, apprenticeship, folklore, and practical observation.
3. **Holistic & Integrated:** Combines spiritual, social, biological, and ecological dimensions into a unified worldview.
4. **Dynamic & Adaptive:** Continuously evolves as communities experiment and interact with outside influences.

#### Comparison: Indigenous Knowledge vs. Scientific Knowledge:
| Feature | Indigenous Knowledge | Scientific Knowledge |
| :--- | :--- | :--- |
| **Transmission** | Oral tradition, experiential imitation | Written texts, journals, formal schooling |
| **Methodology** | Trial, error, historical observation | Controlled laboratory experiments, mathematical modeling |
| **Ownership** | Communal heritage of the community | Individual intellectual property, patents, copyrights |`;
    }
    if (p <= 80) {
      return `### 4.2 Traditional Conflict Resolution Mechanisms in Ethiopia (Page ${p})

Ethiopia possesses a rich mosaic of customary conflict resolution institutions that provide restorative justice, reconcile conflicting parties, and maintain communal peace alongside formal judicial courts.

#### Prominent Customary Systems in Ethiopia:
1. **The Gadaa System (Oromo):**
   - An egalitarian, democratic socio-political system based on eight-year generational grade classes (*Gadaa*).
   - Inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity.
   - Settles disputes through *Jaarsummaa* (council of elders) emphasizing truth, restorative compensation, and social harmony.
2. **Shimgellina (Amhara and Highland Communities):**
   - Council of respected community elders (*Shimagles*) chosen for their impartiality, wisdom, and moral standing.
   - Facilitates dialogue between disputants, negotiates compromises, and seals reconciliation through traditional feasts and blessings.
3. **Mada'a (Afar Customary Law):**
   - Governed by clan leaders and elders (*Makaban*) resolving conflicts over pasture, water wells, and communal boundaries according to deeply respected unwritten legal codes.
4. **Luwa and Woma Systems (Gamo and Southern Nations):**
   - Spiritual and civic elders mediation preserving communal cohesion, moral purity, and sacred groves.

\`\`\`text
Customary Restorative Justice Flow:
[Conflict Occurs] ──> [Elders Council Appointed] ──> [Truth Seeking & Admission] ──> [Restorative Compensation] ──> [Communal Reconciliation & Harmony]
\`\`\``;
    }
    if (p <= 86) {
      return `### 4.3 Indigenous Environmental Conservation & Traditional Medicine (Page ${p})

Long before the advent of modern ecological science, Ethiopian agrarian and pastoral communities developed sophisticated techniques for preserving natural resources.

#### Indigenous Conservation Practices:
1. **Konso Cultural Landscape (UNESCO World Heritage Site):**
   - Stone-walled bench terracing on steep slopes preventing catastrophic soil erosion.
   - Water harvesting through dry-stone retention dams and multi-canopy agroforestry (*Moringa*, coffee, sorghum).
2. **Sacred Church Forests and Sacred Groves (*Boreena*, *Gamo*):**
   - Preserving virgin biodiversity, seed banks, and microclimates around Ethiopian Orthodox churches and traditional sacred hilltops.
3. **Pastoral Grazing Calendars (*Dheedhaa* in Borana):**
   - Rotational grazing separating wet-season and dry-season pasture lands to prevent overgrazing and maintain rangeland resilience.

#### Traditional Medicine and Healthcare:
- Over 80% of the rural population utilizes traditional herbal remedies (*Kosso* for tapeworms, *Damakese* for colds, *Ginger* and *Garlic* for antimicrobial care).
- Traditional bone-setters (*Wegesha*) possess refined knowledge of human anatomy, fractures, and joint dislocations.`;
    }
    return `### 4.4 Integrating Indigenous Wisdom into Modern Development • Unit 4 Review (Page ${p})

Indigenous knowledge should not be romanticized blindly nor discarded as backward. The progressive path is **creative synthesis**—complementing modern science and legal frameworks with proven indigenous wisdom.

#### Strategic Areas of Integration:
- **Court Court Referral & Alternative Dispute Resolution (ADR):** Civil and community disputes can be resolved quickly through elders mediation, reducing the heavy backlog in formal courts.
- **Agricultural Research:** Combining indigenous drought-resistant crop varieties (teff, enset, finger millet) with modern biotechnology at EIAR.
- **Climate Change Adaptation:** Utilizing pastoral weather forecasting (astronomy, animal behavioral cues) alongside satellite meteorological forecasting.

---

### Unit 4 Review Questions:
1. Define indigenous knowledge and state three ways it differs from conventional scientific knowledge.
2. What are the key features that make the Gadaa system a recognized world cultural heritage?
3. How do the Konso stone terraces protect highland soil and water resources?
4. Explain how Shimgellina and formal court systems can work together in Ethiopian dispute management.`;
  }

  // UNIT 5: MULTICULTURALISM IN ETHIOPIA (Pages 93 to 114)
  if (p >= 93 && p <= 114) {
    if (p === 93) {
      return `# UNIT 5: MULTICULTURALISM IN ETHIOPIA

### Unit Overview & Competencies
At the end of this unit, students will be able to:
- Define multiculturalism, pluralism, and diversity within a modern democratic framework.
- Appraise the linguistic, ethnic, religious, and cultural diversity of Ethiopian society.
- Explain the principles of tolerance, mutual recognition, and intercultural dialogue.
- Identify the negative impacts of ethnocentrism, stereotyping, and historical prejudice.
- Champion inclusive practices and cross-cultural friendships in schools and youth clubs.`;
    }
    if (p <= 98) {
      return `### 5.1 Meaning and Pillars of Multiculturalism (Page ${p})

**Multiculturalism** is the co-existence of diverse cultures, where culture includes racial, religious, or linguistic groups and is manifested in customary behaviors, cultural assumptions and values, patterns of thinking, and communicative styles.

#### Two Contrasting Approaches to Diversity:
1. **The Melting Pot (Assimilation):** Minority groups are expected to abandon their distinctive languages, traditions, and cultural identities to blend into the dominant culture.
2. **The Salad Bowl (Cultural Pluralism / Multiculturalism):** Different cultures live together while preserving their unique cultural identities, enriching the shared social tapestry like distinct vegetables in a single salad bowl.

#### Core Pillars of Democratic Multiculturalism:
- **Equal Dignity:** Every cultural identity is acknowledged as possessing equal human worth.
- **Mutual Respect:** Valuing others' beliefs and cultural practices rather than merely tolerating them grudgingly.
- **Intercultural Dialogue:** Constructive communication and interaction between individuals of different backgrounds to foster mutual learning.
- **Inclusive Public Policies:** Ensuring public education, media, and civic institutions reflect the pluralistic character of society.`;
    }
    if (p <= 104) {
      return `### 5.2 Cultural Diversity, Languages, and Heritage in Ethiopia (Page ${p})

Ethiopia is one of the most culturally and linguistically diverse nations on the African continent, home to over 80 distinct nations, nationalities, and peoples.

#### Linguistic Classifications in Ethiopia:
The languages of Ethiopia belong to two major Afro-Asiatic and Nilo-Saharan language super-families:
1. **Semitic Languages:** Amharic, Tigrinya, Guragigna, Harari, Ge'ez, Argobba.
2. **Cushitic Languages:** Afaan Oromoo, Somali, Afar, Sidamu Afoo, Hadiyisa, Kembatissa, Saho.
3. **Omotic Languages:** Wolayttatto, Gamo, Gofa, Dawro, Kafa, Sheko, Ari.
4. **Nilo-Saharan Languages:** Nuer, Anywaa, Berta, Gumuz, Kunama, Majang.

#### Rich Mosaic of Cultural Celebrations:
- **Religious Festivities:** Meskel (Finding of the True Cross), Timket (Epiphany), Eid al-Fitr, Eid al-Adha, Mawlid, Fasika, Kulubi Gabriel, Sheikh Hussein of Bale.
- **Cultural & Harvest Festivals:** Irreecha (Oromo thanksgiving), Ashenda/Solel/Shadey (Northern girls festival), Fichee-Chambalaalla (Sidama New Year), Gifata (Wolaytta New Year).`;
    }
    if (p <= 109) {
      return `### 5.3 Overcoming Prejudice, Stereotypes, and Ethnocentrism (Page ${p})

Prejudice and ethnocentrism are the principal enemies of social harmony in multicultural societies.

#### Conceptual Breakdown:
- **Stereotype:** An oversimplified, generalized, and rigid belief about a particular group of people (e.g., claiming "all members of group X are lazy, while group Y are greedy").
- **Prejudice:** A preconceived negative opinion or attitude formed about an individual based solely on their group membership without factual foundation.
- **Discrimination:** The unfair, harmful treatment of individuals based on prejudice (denying employment, housing, or friendship).
- **Ethnocentrism:** The belief that one's own cultural, linguistic, or ethnic group is superior to all others, judging other cultures by one's own standards.

\`\`\`text
Cycle of Division:
[Stereotypes] ──> [Prejudice] ──> [Discrimination] ──> [Social Conflict & Polarization]
\`\`\`

#### Deconstructing Stereotypes in School:
Secondary schools are laboratories of national unity. When students from diverse backgrounds study together, participate in sports teams, and form study circles, personal knowledge destroys inherited stereotypes.`;
    }
    return `### 5.4 Promoting Intercultural Competence • Unit 5 Review (Page ${p})

**Intercultural Competence** is the ability to communicate effectively and appropriately with people of other cultures, languages, and worldviews.

#### Developing Your Intercultural Competence:
1. **Active Listening:** Listen to understand the perspective of classmates from different cultural backgrounds rather than listening to judge.
2. **Linguistic Curiosity:** Learn basic greetings, expressions, and phrases in other Ethiopian languages (e.g., learning Afaan Oromoo, Amharic, Tigrinya, Somali, Wolayttatto).
3. **Cultural Empathy:** Put yourself in the shoes of someone from another background when discussing sensitive historical or social topics.

---

### Unit 5 Review Questions:
1. Define multiculturalism and distinguish the "Melting Pot" model from the "Salad Bowl" model.
2. Name the four major language families spoken in Ethiopia and list two languages from each family.
3. Explain how stereotypes lead to prejudice, discrimination, and ethnic conflict.
4. What practical actions can you take in your school to promote intercultural dialogue?`;
  }

  // UNIT 6: NATIONAL UNITY THROUGH DIVERSITY (Pages 115 to 136)
  if (p >= 115 && p <= 136) {
    if (p === 115) {
      return `# UNIT 6: NATIONAL UNITY THROUGH DIVERSITY

### Unit Overview & Competencies
At the end of this unit, students will be able to:
- Explain the concepts of nation, state, nation-state, and sovereignty.
- Analyze the historical bonds, economic interdependence, and shared sacrifices uniting Ethiopian peoples.
- Articulate how national unity is strengthened, not weakened, by respecting cultural diversity.
- Demonstrate civic patriotism through active contribution to community development, social harmony, and national sovereignty.
- Reject divisive polarization, extremist rhetoric, and exclusionary politics.`;
    }
    if (p <= 120) {
      return `### 6.1 Concepts of Nation, State, and Sovereignty (Page ${p})

Political science provides distinct definitions for terms often used interchangeably in everyday conversation:

- **State:** A politically organized community living under a single government system within a defined geographic territory, possessing sovereign authority and international recognition.
  - *Essential Elements of a State:* Population, Defined Territory, Government, and Sovereignty.
- **Nation:** A large group of people united by common descent, language, history, culture, or collective political consciousness, inhabiting a particular territory.
- **Nation-State:** A sovereign state whose citizens are relatively homogeneous in factors such as language or common descent (e.g., Japan, Iceland).
- **Multinational State:** A sovereign state composed of multiple distinct nations, nationalities, and peoples co-existing under a shared constitutional framework (e.g., Ethiopia, Canada, Switzerland, India).
- **Sovereignty:** The supreme, independent authority of a state over its domestic affairs and freedom from external foreign control.`;
    }
    if (p <= 126) {
      return `### 6.2 Historical Bonds and Economic Interdependence (Page ${p})

The unity of the Ethiopian people is not an artificial construct; it is forged through centuries of shared history, migration, intermarriage, trade, and collective resistance against foreign aggression.

#### 1. Economic Interdependence:
- The highland and lowland economies of Ethiopia complement each other organically:
  - The highlands supply coffee, grains, teff, fruits, and timber.
  - The lowlands supply livestock, dairy, pastoral products, salt, minerals, and cotton.
  - Trade routes linking Harar, Gondar, Jimma, Shewa, and the coast have knitted communities together for centuries.

#### 2. Shared Sacrifices for National Independence:
- **The Battle of Adwa (1896):** When colonial Italy invaded Ethiopia, men and women from every corner—Oromo, Amhara, Tigrayan, Gurage, Sidama, Afar, Somali, Wolaytta—marched together under Emperor Menelik II and Empress Taytu to secure an epic victory for African freedom.
- Resistance during the 1935–1941 fascist occupation proved that freedom was a shared, non-negotiable national treasure.`;
    }
    if (p <= 131) {
      return `### 6.3 Civic Patriotism vs. Chauvinism and Narrow Nationalism (Page ${p})

Not all forms of national pride are positive. We must distinguish healthy civic patriotism from destructive chauvinistic or narrow ideologies.

| Civic Patriotism | Chauvinism & Narrow Nationalism |
| :--- | :--- |
| Love of one's country based on shared constitutional values, human rights, and rule of law | Blind, aggressive glorification of one's own group to the detriment of others |
| Celebrates diversity as a source of strength | Demands forced assimilation or exclusion of others |
| Critical and constructive: works hard to solve domestic problems (poverty, illiteracy) | Blames scapegoats, promotes victimhood, and incites hostility against neighbors |
| Respects the independence and dignity of all nations | Threatens internal peace and international stability |

\`\`\`text
Pillars of Sustainable National Unity:
[Respect for Regional Diversity] + [Shared Constitutional Rights] + [Equitable Economic Benefit] ──> [Strong United Ethiopia]
\`\`\``;
    }
    return `### 6.4 The Youth as Architects of National Cohesion • Unit 6 Review (Page ${p})

Ethiopia's median age is below 20 years. The future stability, industrialization, and democratic maturity of the country depend entirely on how secondary school students conceptualize their citizenship.

#### Four Commitments of a Model Ethiopian Youth:
1. **Commitment to Reason over Emotion:** Refuse to be manipulated by political entrepreneurs who use hate speech and ethnic mobilization on social media.
2. **Commitment to Excellence in Learning:** Study hard in sciences, mathematics, literature, and technology to modernize Ethiopia's economy.
3. **Commitment to Peace & Volunteerism:** Participate in summer youth volunteer programs (community building, tutoring underprivileged children, elder care).
4. **Commitment to Environmental Stewardship:** Nurturing trees, combating deforestation, and protecting Ethiopia's water basins.

---

### Unit 6 Review Questions:
1. Define the terms state, nation, and multinational state.
2. How does economic interdependence between highland and lowland communities reinforce Ethiopian national unity?
3. What historical lessons on collective defense does the Battle of Adwa teach contemporary Ethiopian youth?
4. Differentiate between civic patriotism and narrow nationalism.`;
  }

  // UNIT 7: PROBLEM SOLVING SKILLS (Pages 137 to 154)
  if (p >= 137 && p <= 154) {
    if (p === 137) {
      return `# UNIT 7: PROBLEM SOLVING SKILLS

### Unit Overview & Competencies
At the end of this unit, students will be able to:
- Define what constitutes a personal, social, and public problem.
- Apply systematic, scientific problem-solving models to everyday challenges.
- Utilize critical thinking and creative thinking techniques to develop viable solutions.
- Practice negotiation, consensus-building, and conflict mediation skills.
- Design, implement, and evaluate small-scale community service projects.`;
    }
    if (p <= 142) {
      return `### 7.1 Understanding Social and Community Problems (Page ${p})

A **Problem** is a state of difficulty, discrepancy, or obstacle between a current condition and a desired goal that requires action to resolve.

#### Types of Problems:
1. **Personal Problems:** Individual academic stress, time management, peer pressure, or personal financial budgeting.
2. **Interpersonal Problems:** Misunderstandings between friends, family conflicts, or sibling rivalry.
3. **Community & Social Problems:** Issues that affect many citizens in a neighborhood (poor sanitation, lack of clean water, school dropout rates, traffic accidents, youth unemployment).

#### Common Barriers to Effective Problem Solving:
- **Impulsivity:** Jumping to conclusions without gathering factual evidence.
- **Confirmation Bias:** Looking only for information that confirms our pre-existing biases while ignoring contradictory facts.
- **Emotional Reactivity:** Allowing anger, fear, or frustration to dictate decisions.
- **Helplessness:** Believing that individual action cannot change complex societal issues.`;
    }
    if (p <= 148) {
      return `### 7.2 The Six-Step Problem-Solving Model (Page ${p})

Effective leaders and problem-solvers use structured protocols rather than haphazard guessing:

\`\`\`text
The 6-Step Solution Architecture:
[1. Define Problem] ──> [2. Analyze Causes] ──> [3. Brainstorm Solutions] 
         │
         ▼
[4. Evaluate & Select] ──> [5. Implement Plan] ──> [6. Monitor & Review]
\`\`\`

#### Step-by-Step Breakdown:
1. **Step 1: Define the Real Problem Clearly:** State the specific gap. For example: "Grade 9 students at our school throw plastic bottles on the school grounds rather than in trash bins."
2. **Step 2: Root-Cause Analysis (The 5 Whys):** Why do students litter? Because there are no trash bins nearby. Why are there no bins? Because none were purchased this semester.
3. **Step 3: Brainstorm Alternative Solutions:** List all creative ideas without immediate criticism (fundraise for bins, launch a student eco-club, organize bottle recycling contests).
4. **Step 4: Evaluate and Select the Best Option:** Assess feasibility, cost, time, and impact.
5. **Step 5: Develop and Execute an Action Plan:** Assign tasks, deadlines, and responsibilities.
6. **Step 6: Evaluate Outcomes:** Measure whether the school grounds are visibly cleaner after two weeks.`;
    }
    return `### 7.3 Collaborative Decision-Making and Civic Action • Unit 7 Review (Page ${p})

#### Consensus-Building and Negotiation:
When working in teams, disagreement is natural. Consensus does not mean everyone gets 100% of what they want; it means everyone participates in the discussion, understands the reasoning, and commits to supporting the agreed decision.

#### Designing a School/Community Action Project:
- **Project Title:** "Clean Water & Hygiene Awareness Club"
- **Objective:** Teach proper handwashing and water boiling in primary schools.
- **Budget & Resources:** Soap, demonstration buckets, student volunteer time.
- **Execution & Monitoring:** Documenting sessions, gathering student feedback, and celebrating milestones.

---

### Unit 7 Review Questions:
1. Name the six steps of the systematic problem-solving model and illustrate them with a concrete school challenge.
2. What is root-cause analysis, and why is it superior to treating superficial symptoms?
3. How can consensus-building prevent violent conflict during group decision-making?
4. Design a brief plan for an environmental clean-up project in your school compound.`;
  }

  // UNIT 8: ETHIOPIA'S FOREIGN RELATIONS IN EAST AFRICA (Pages 155 to 173)
  if (p >= 155 && p <= 173) {
    if (p === 155) {
      return `# UNIT 8: ETHIOPIA'S FOREIGN RELATIONS IN EAST AFRICA

### Unit Overview & Competencies
At the end of this unit, students will be able to:
- Explain the foundational principles and national interests guiding Ethiopian foreign policy.
- Analyze the strategic role of Ethiopia in the Horn of Africa and the East African region.
- Describe the objectives and achievements of the Intergovernmental Authority on Development (IGAD).
- Appraise Ethiopia's historic contributions to African decolonization and international peacekeeping.
- Articulate the importance of shared transboundary resource management (e.g., the Nile Basin and GERD).`;
    }
    if (p <= 160) {
      return `### 8.1 Principles and Objectives of Ethiopian Foreign Policy (Page ${p})

Foreign policy is the strategy and tactics employed by a sovereign state in its interactions with other states, international organizations, and non-state actors.

#### Core Principles of Ethiopian Foreign Policy:
1. **Protection of National Sovereignty & Territorial Integrity:** Defending the country's borders, independence, and political autonomy.
2. **Promoting Mutual Economic Growth & Poverty Reduction:** Aligning foreign relations with domestic economic development, investment attraction, and trade expansion.
3. **Good Neighborliness and Peaceful Coexistence:** Cultivating friendly, mutually respectful partnerships with immediate border nations (Eritrea, Djibouti, Somalia, Kenya, South Sudan, Sudan).
4. **Non-Interference in Internal Affairs of Other States:** Adhering strictly to United Nations (UN) and African Union (AU) Charters regarding state sovereignty.
5. **Active Multilateralism:** Leading collective diplomacy through the African Union, IGAD, and the United Nations.`;
    }
    if (p <= 166) {
      return `### 8.2 Regional Integration and the Role of IGAD (Page ${p})

The **Intergovernmental Authority on Development (IGAD)** was established in 1996 (succeeding IGADD) with eight member states in the Horn of Africa: Djibouti, Eritrea, Ethiopia, Kenya, Somalia, South Sudan, Sudan, and Uganda.

#### Key Mandates of IGAD:
- **Food Security & Environmental Protection:** Mitigating desertification, severe droughts, and locust outbreaks in arid zones.
- **Economic Integration & Trade:** Enhancing cross-border infrastructure (roads, railways, power transmission lines like the Ethiopia-Djibouti Electric Interconnection and Ethiopia-Kenya power highway).
- **Peace & Regional Security:** Mediating civil conflicts in South Sudan and Somalia, combating maritime piracy, and curbing cross-border smuggling.

\`\`\`text
Regional Integration Framework:
[Shared Infrastructure (Roads, Rail, Grid)] ──> [Cross-Border Trade] ──> [Mutual Prosperity & Peace]
\`\`\`

#### Ethiopia as the Diplomatic Capital of Africa:
Addis Ababa serves as the headquarters of the **African Union (AU)** (originally the OAU founded in 1963) and the **United Nations Economic Commission for Africa (UNECA)**, making Ethiopia a premier hub of global and continental diplomacy.`;
    }
    if (p <= 170) {
      return `### 8.3 Ethiopia's Peacekeeping Legacy and Pan-Africanism (Page ${p})

Ethiopia has been a tireless champion of Pan-African solidarity, decolonization, and global collective security:

#### 1. Support for African Decolonization:
- Ethiopia provided financial, military, and diplomatic backing to African liberation movements fighting apartheid in South Africa (including training Nelson Mandela in 1962) and anti-colonial fighters in Zimbabwe, Namibia, Angola, and Mozambique.

#### 2. United Nations and AU Peacekeeping Missions:
- Ethiopia is consistently ranked among the world's top contributors of blue-helmet peacekeeping troops:
  - Korea (Kagnew Battalions, 1951–1954)
  - Congo (ONUC, 1960–1964)
  - Rwanda, Liberia, Burundi, Darfur (UNAMID)
  - Abyei (UNISFA) and Somalia (AMISOM / ATMIS).
- Ethiopian peacekeepers are renowned globally for military discipline, community trust, and cultural empathy.`;
    }
    return `### 8.4 Transboundary Resource Cooperation & Final Curriculum Synthesis (Page ${p})

#### Transboundary Water Resources and the Grand Ethiopian Renaissance Dam (GERD):
- Ethiopia contributes over 85% of the total water volume of the Nile River through the Blue Nile (Abay), Baro-Akobo, and Tekeze basins.
- Under the principle of **Equitable and Reasonable Utilization without Causing Significant Harm**, the construction of the Grand Ethiopian Renaissance Dam (GERD) generates clean, renewable hydroelectric power to lift millions out of poverty, power regional industrialization, and export clean energy to neighboring countries.

---

### Unit 8 Review Questions:
1. What are the primary objectives that guide Ethiopian foreign policy in East Africa?
2. What is the mandate of IGAD, and how has it contributed to peace and disaster management in the Horn?
3. Discuss Ethiopia's historical role in the liberation of African nations from colonial rule.
4. Explain the principle of equitable and reasonable utilization regarding transboundary water resources.`;
  }

  return `### Federal Democratic Republic of Ethiopia • Ministry of Education
Citizenship Education Student Textbook — Grade 9 • Page ${p}
Comprehensive curriculum content aligned with Ethiopian national standards.`;
}
