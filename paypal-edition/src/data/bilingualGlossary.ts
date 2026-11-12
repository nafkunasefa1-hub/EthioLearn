export interface GlossaryTerm {
  id: string;
  term_en: string;
  term_am: string;
  term_or: string;
  subject_id: string;
  subject_name: string;
  category: string;
  definition_en: string;
  definition_am: string;
  definition_or: string;
  formula_latex?: string;
  example_en?: string;
  grade_level?: string;
}

export const BILINGUAL_GLOSSARY: GlossaryTerm[] = [
  // ----------------------------------------------------
  // PHYSICS
  // ----------------------------------------------------
  {
    id: 'glo-phys-centripetal',
    term_en: 'Centripetal Acceleration',
    term_am: 'ማዕከል አሳቢ ማፋጠን (ሴንትሪፔታል)',
    term_or: 'Ariitii Giddu-galeessatti Harkifamu',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    category: 'Mechanics & Circular Motion',
    definition_en: 'The acceleration directed radially inward toward the center of curvature that keeps an object moving along a circular path.',
    definition_am: 'አንድ አካል በክብ መስመር ላይ እንዲጓዝ ወደ ክብ መሀል አቅጣጫ የሚስበው የፍጥነት ለውጥ (ማፋጠን) ነው።',
    definition_or: 'Ariitii kallattii giddu-galeessa geengootiin harkifamu kan qaamni tokko karaa geengoorra akka naanna\'u godhudha.',
    formula_latex: 'a_c = \\frac{v^2}{r} = \\omega^2 r',
    example_en: 'A car rounding a circular curve or the Moon orbiting Earth.',
    grade_level: 'Grade 10 / 12'
  },
  {
    id: 'glo-phys-momentum',
    term_en: 'Linear Momentum',
    term_am: 'የቀጥታ መስመር እንቅስቃሴ መጠን (ሞመንተም)',
    term_or: 'Hangi Sochii Qajeelaa (Momentamii)',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    category: 'Mechanics',
    definition_en: 'A vector quantity defined as the product of an object\'s mass and its linear velocity; conserved in isolated systems.',
    definition_am: 'የአንድ ቁስ ክብደት እና ፍጥንጥነት ተባዝቶ የሚገኝ የቬክተር መጠን ሲሆን በገለልተኛ ስርዓት ውስጥ ሳይለወጥ ይቆያል።',
    definition_or: 'Gurguddoo veektarii kan ulfaatina fi saffisa walitti baay\'isuun argamu; sirna qophaatti hin jijjiiramu.',
    formula_latex: '\\vec{p} = m \\vec{v}',
    example_en: 'Collision between two billiard balls or vehicle crashes.',
    grade_level: 'Grade 9 / 11'
  },
  {
    id: 'glo-phys-work',
    term_en: 'Mechanical Work',
    term_am: 'ሜካኒካል ስራ',
    term_or: 'Hojii Meekaaniikaalaa',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    category: 'Work, Energy & Power',
    definition_en: 'The scalar product of the applied force vector and the displacement vector through which the force acts.',
    definition_am: 'የተተገበረው ሃይል እና በእቃው የተጓዘው የቦታ ለውጥ ተባዝቶ የሚሰላው የስራ መጠን (በጁል ይለካል)።',
    definition_or: 'Humni hojiirra oole fageenya qaamichi deemee wajjin walitti baay\'ifamee kan shallagamu (Juuliin safarama).',
    formula_latex: 'W = \\vec{F} \\cdot \\vec{d} = F d \\cos \\theta',
    example_en: 'Lifting a bag of teff vertically against gravity.',
    grade_level: 'Grade 9 / 10'
  },
  {
    id: 'glo-phys-refraction',
    term_en: 'Refraction of Light',
    term_am: 'የብርሃን ስብራት (ሪፍራክሽን)',
    term_or: 'Cabiinsa Ifaa',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    category: 'Optics & Waves',
    definition_en: 'The bending of a light ray as it passes at an angle from one transparent medium into another medium of differing optical density.',
    definition_am: 'ብርሃን ከአንድ መካከለኛ ቁስ ወደ ሌላ የተለያየ እፍጋት ወዳለው ቁስ ሲያልፍ አቅጣጫውን የሚቀይርበት ክስተት።',
    definition_or: 'Yeroo ifti meeshaalee dhangala\'aa ykn qilleensa adda addaa keessa darbu kallattii isaa jijjiirradha.',
    formula_latex: 'n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2 \\quad (\\text{Snell\'s Law})',
    example_en: 'A straw appearing bent when placed into a glass of water.',
    grade_level: 'Grade 10 / 12'
  },
  {
    id: 'glo-phys-coulomb',
    term_en: 'Coulomb\'s Law',
    term_am: 'የኩሎምብ ህግ (የኤሌክትሪክ ሃይል)',
    term_or: 'Seera Kuuloombii',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    category: 'Electromagnetism',
    definition_en: 'Electrostatic force between two stationary point charges is directly proportional to product of charges and inversely proportional to square of distance.',
    definition_am: 'በሁለት ቻርጆች መካከል ያለው ሃይል ከቻርጆቹ ብዜት ጋር በቀጥታ፤ በመካከላቸው ካለው ርቀት ካሬ ጋር በተገላቢጦሽ ይዛመዳል።',
    definition_or: 'Humni elektirikii chaarjiiwwan lamaan gidduu jiru baay\'ata chaarjiiwwaniitiin wal-qixa; fageenya isaanitiin ammoo faallaa herregama.',
    formula_latex: 'F_e = k_e \\frac{|q_1 q_2|}{r^2}',
    example_en: 'Attraction between an electron and a proton inside a hydrogen atom.',
    grade_level: 'Grade 10 / 11'
  },

  // ----------------------------------------------------
  // CHEMISTRY
  // ----------------------------------------------------
  {
    id: 'glo-chem-electronegativity',
    term_en: 'Electronegativity',
    term_am: 'ኤሌክትሮኔጋቲቪቲ (የኤሌክትሮን ሳቢነት)',
    term_or: 'Harkisa Elektiroonii (Elektiroonegaatiiviti)',
    subject_id: 'subj-chem',
    subject_name: 'Chemistry',
    category: 'Atomic Structure & Bonding',
    definition_en: 'The relative tendency of an atom within a chemical bond to attract shared electron pairs toward itself.',
    definition_am: 'አንድ አቶም በኬሚካል ትስስር ውስጥ የጋራ የሆኑ ኤሌክትሮኖችን ወደራሱ የመሳብ ችሎታ ወይም ዝንባሌ ነው።',
    definition_or: 'Dandeettii atoomiin tokko hidhoo keessatti elektiroonota waloomaa gara ofiitti harkisuuf qabudha.',
    example_en: 'Fluorine has the highest Pauling electronegativity value (3.98).',
    grade_level: 'Grade 9 / 11'
  },
  {
    id: 'glo-chem-catalyst',
    term_en: 'Catalyst',
    term_am: 'አፋጣኝ (ካታሊስት)',
    term_or: 'Kattaa / Si\'eessituu Wal-nyaatinsaa',
    subject_id: 'subj-chem',
    subject_name: 'Chemistry',
    category: 'Chemical Kinetics',
    definition_en: 'A substance that increases the rate of a chemical reaction by lowering activation energy without being consumed.',
    definition_am: 'አንድ ኬሚካላዊ አፀግብሮት ሳይፈጅ እንዲፈጥን የሚያደርግ፤ ነገር ግን ራሱ የማይበላሽ ወይም የማይቀየር ንጥረ ነገር።',
    definition_or: 'Wantoota wal-nyaatinsi keemikaalaa akka ariifatu godhu, garuu ofii isaanii hin miidhamne ykn hin dhumne.',
    formula_latex: '\\text{Rate} \\propto e^{-\\frac{E_a}{RT}}',
    example_en: 'Platinum used in catalytic converters or Iron (Fe) in the Haber process.',
    grade_level: 'Grade 11 / 12'
  },
  {
    id: 'glo-chem-le-chatelier',
    term_en: 'Le Chatelier\'s Principle',
    term_am: 'የሌ ሻትሊየር መርህ',
    term_or: 'Qajeeltoo Lee Shaatiliyee',
    subject_id: 'subj-chem',
    subject_name: 'Chemistry',
    category: 'Chemical Equilibrium',
    definition_en: 'If an external stress (concentration, temperature, pressure) is applied to a system at equilibrium, the system shifts to counteract that stress.',
    definition_am: 'ሚዛናዊ በሆነ ኬሚካላዊ ስርዓት ላይ ጫና (ሙቀት፣ ግፊት፣ መጠን) ሲፈጠር፤ ስርዓቱ ጫናውን ለማርገብ አቅጣጫውን ይለውጣል።',
    definition_or: 'Sirna madaallii qabu tokkorratti yoo dhiibbaan (hoo\'i, dhiibbaan, baay\'inni) dhufe, sirnichis dhiibbaa sana hir\'isuuf of jijjiira.',
    example_en: 'Increasing pressure in N2 + 3H2 ⇌ 2NH3 shifts the equilibrium toward the forward direction.',
    grade_level: 'Grade 11'
  },

  // ----------------------------------------------------
  // BIOLOGY
  // ----------------------------------------------------
  {
    id: 'glo-bio-respiration',
    term_en: 'Cellular Respiration',
    term_am: 'የህዋስ አተነፋፈስ (ሴሉላር ረስፒሬሽን)',
    term_or: 'Hafuura Baafannaa Seelii',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    category: 'Cellular Metabolism',
    definition_en: 'Metabolic pathway breaking down glucose in the presence of oxygen to release usable cellular chemical energy in the form of ATP.',
    definition_am: 'ህዋሳት ግሉኮስን ከኦክስጅን ጋር በማዋሃድ ለእለት ተእለት ስራ የሚሆን ሃይል (ኤቲፒ) የሚያመነጩበት ውስጣዊ ሂደት ነው።',
    definition_or: 'Adeemsa keemikaalaa seelonni soorata (gulukoosii) fi oksijiinii fayyadamuun annisaa (ATP) itti maddisiisanidha.',
    formula_latex: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 36\\text{--}38\\,\\text{ATP}',
    example_en: 'Mitochondria performing Krebs cycle and oxidative phosphorylation.',
    grade_level: 'Grade 9 / 12'
  },
  {
    id: 'glo-bio-photosynthesis',
    term_en: 'Photosynthesis',
    term_am: 'ፎቶሲንተሲስ (የብርሃን ቅንብር)',
    term_or: 'Footoosinteesissii (Annisaa Ifaan Soorata Qopheessuu)',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    category: 'Plant Physiology',
    definition_en: 'Autotrophic process whereby green plants, algae, and cyanobacteria synthesize organic sugars using sunlight, water, and atmospheric carbon dioxide.',
    definition_am: 'አረንጓዴ ተክሎች የፀሐይ ብርሃንን፣ ውሃን እና ካርቦን ዳይኦክሳይድን በመጠቀም የራሳቸውን ምግብ (ግሉኮስ) የሚያዘጋጁበት ሂደት።',
    definition_or: 'Adeemsa biqiltoonni magariisi ifa aduu, bishaanii fi kaarboondaayoksaayidii fayyadamuun soorata isaanii itti qopheeffatan.',
    formula_latex: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} + h\\nu \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2',
    example_en: 'Chloroplast thylakoids and stroma generating oxygen and sucrose in crops.',
    grade_level: 'Grade 9 / 12'
  },
  {
    id: 'glo-bio-homeostasis',
    term_en: 'Homeostasis',
    term_am: 'ሆሚዮስታሲስ (የሰውነት ውስጣዊ ሚዛን መጠበቅ)',
    term_or: 'Hoomiyoostaasisii (Madaallii Keessoo Eeguu)',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    category: 'Physiology',
    definition_en: 'The maintenance of a relatively stable internal physiological environment despite external environmental perturbations.',
    definition_am: 'የውጭ ሁኔታ ቢለዋወጥም የሰውነት ውስጣዊ የሙቀት መጠን፣ የውሃ እና የኬሚካል ይዘት ሚዛን ተጠብቆ እንዲቆይ የማድረግ ሂደት ነው።',
    definition_or: 'Dandeettii lubbu-qabeeyyiin haala keessoo isaanii tasgabbaa\'aa taasisanii eeguuf qaban (fkn: hoo\'a qaamaa eeguu).',
    example_en: 'Sweating when hot to maintain core human body temperature at ~37°C.',
    grade_level: 'Grade 10 / 11'
  },

  // ----------------------------------------------------
  // MATHEMATICS
  // ----------------------------------------------------
  {
    id: 'glo-math-discriminant',
    term_en: 'Discriminant',
    term_am: 'ዲስክሪሚናንት (የኳድራቲክ ስሮች መለያ ቁጥር)',
    term_or: 'Diskiriminaantii (Adda Baastuu Hiddootaa)',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    category: 'Algebra & Quadratics',
    definition_en: 'The expression inside the square root of the quadratic formula (b² - 4ac) indicating nature of roots (real distinct, real equal, or complex).',
    definition_am: 'በኳድራቲክ ቀመር ውስጥ (b² - 4ac) የሚገኝ መለያ ሲሆን የስሮቹን ባህሪ (እውነተኛ፣ እኩል፣ ወይም ኮምፕሌክስ መሆናቸውን) ያሳውቃል።',
    definition_or: 'Kutaa herregaa koodiraatikii (b² - 4ac) kan amala hiddoota herregichaa adda baasuu dandahudha.',
    formula_latex: '\\Delta = b^2 - 4ac',
    example_en: 'If Δ > 0: two distinct real roots; If Δ = 0: one real double root; If Δ < 0: two complex conjugate roots.',
    grade_level: 'Grade 10 / 11'
  },
  {
    id: 'glo-math-derivative',
    term_en: 'Derivative',
    term_am: 'ዴሪቫቲቭ (የለውጥ ምጣኔ)',
    term_or: 'Diriiveetivii (Reetii Jijjiiramaa)',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    category: 'Differential Calculus',
    definition_en: 'The instantaneous rate of change of a function with respect to one of its variables, corresponding to the tangent slope.',
    definition_am: 'አንድ ፈንክሽን በአንድ ነጥብ ላይ በቅጽበት የሚለወጥበት ምጣኔ ሲሆን የግራፉ የታንጀንት መስመር ስሎፕ (ቁልቁለት) ነው።',
    definition_or: 'Reetii saffisa jijjiirama faankishinii tokkoo bakka ykn qabxii murtaa\'e tokkotti agarsiisudha.',
    formula_latex: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}',
    example_en: 'The derivative of displacement with respect to time gives velocity (v = ds/dt).',
    grade_level: 'Grade 12'
  },

  // ----------------------------------------------------
  // SAT / APTITUDE
  // ----------------------------------------------------
  {
    id: 'glo-sat-analogy',
    term_en: 'Verbal Analogy',
    term_am: 'የቃል ዝምድና ንፅፅር (አናሎጂ)',
    term_or: 'Wal-bira Qabinsa Jechootaa (Anaalojii)',
    subject_id: 'subj-sat',
    subject_name: 'SAT (Aptitude)',
    category: 'Verbal Reasoning',
    definition_en: 'A cognitive item testing the ability to abstract the precise semantic relation between an initial pair A : B and match it with pair C : D.',
    definition_am: 'በመጀመሪያው ጥንድ ቃላት (A : B) መካከል ያለውን ትክክለኛ ግንኙነት በመገንዘብ ከተሰጡት አማራጮች ተመሳሳይ ግንኙነት ያለውን የመምረጥ ፈተና ነው።',
    definition_or: 'Dandeettii walitti dhufeenya jechoota lameen jalqabaa hubachuun filannoo keessaa kan isa wajjin wal-fakkatu filachuu madaala.',
    example_en: 'SCALPEL : SURGEON :: BRUSH : PAINTER (Tool and Worker relationship).',
    grade_level: 'Grade 11 / 12'
  },
  {
    id: 'glo-sat-syllogism',
    term_en: 'Categorical Syllogism',
    term_am: 'አመክንዮአዊ ድምዳሜ (ሲሎሎጂዝም)',
    term_or: 'Yaada Ragaa Qabu (Siilojizimii)',
    subject_id: 'subj-sat',
    subject_name: 'SAT (Aptitude)',
    category: 'Logical Reasoning',
    definition_en: 'A deductive argument consisting of a major premise, a minor premise, and a logically necessary conclusion.',
    definition_am: 'ከሁለት እውነተኛ መነሻ ሀሳቦች በመነሳት ወደ አንድ የማይታበል ትክክለኛ ድምዳሜ የሚደረስበት የአመክንዮ መንገድ ነው።',
    definition_or: 'Ragaalee bu\'uuraa lamaarraa ka\'uun gara yaada xumuraa sirrii ta\'eetti adeemuudha.',
    example_en: 'All mammals have hearts; All cows are mammals; Therefore, all cows have hearts.',
    grade_level: 'Grade 11 / 12'
  }
];

export function searchGlossary(query: string, subjectId?: string): GlossaryTerm[] {
  const q = (query || '').toLowerCase().trim();
  return BILINGUAL_GLOSSARY.filter(item => {
    if (subjectId && subjectId !== 'all' && item.subject_id !== subjectId) {
      return false;
    }
    if (!q) return true;
    return (
      item.term_en.toLowerCase().includes(q) ||
      item.term_am.toLowerCase().includes(q) ||
      item.term_or.toLowerCase().includes(q) ||
      item.definition_en.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });
}
