import { db } from './db';
import { AIResponseSource, ExamQuestion } from '../src/types';

export interface RAGRetrievalResult {
  sources: AIResponseSource[];
  related_exam_questions: ExamQuestion[];
  study_recommendation?: {
    topic_name: string;
    grade_name: string;
    subject_name: string;
    book_title: string;
    chapter_title: string;
    page_start: number;
    page_end: number;
    note: string;
  };
}

// Common conversational or generic question stopwords
const STOPWORDS = new Set([
  'what', 'whats', 'is', 'are', 'was', 'were', 'the', 'how', 'who', 'where', 'when', 'why',
  'does', 'do', 'did', 'can', 'could', 'will', 'would', 'not', 'explain', 'tell', 'me',
  'about', 'define', 'meaning', 'concept', 'and', 'or', 'in', 'of', 'to', 'for', 'a', 'an',
  'difference', 'between', 'give', 'detail', 'details', 'step', 'steps', 'please', 'thanks',
  'brief', 'summarize', 'summary', 'definition', 'understanding', 'overview', 'state'
]);

// Structural or modifier nouns that frequently appear across subjects and MUST NOT trigger false citations on their own
export const GENERIC_STRUCTURAL_MODIFIERS = new Set([
  'law', 'laws', 'rule', 'rules', 'principle', 'principles', 'theory', 'theories',
  'system', 'systems', 'type', 'types', 'method', 'methods', 'order', 'form', 'forms',
  'model', 'models', 'process', 'processes', 'equation', 'equations', 'property', 'properties',
  'structure', 'structures', 'rate', 'value', 'values', 'theorem', 'theorems'
]);

// Tokenize and clean text
export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length >= 2); // Include 2-letter words like AI, pH, IT
}

export function extractCoreKeywords(query: string): string[] {
  return tokenize(query).filter(t => !STOPWORDS.has(t));
}

export function extractDistinctiveTopicKeywords(query: string): string[] {
  return extractCoreKeywords(query).filter(t => !GENERIC_STRUCTURAL_MODIFIERS.has(t));
}

/**
 * Accurately detects Table of Contents, Index, or Syllabus pages so that
 * a student asking conceptual questions is NEVER pointed to page 7 Table of Contents!
 */
export function isTableOfContentsOrIndexChunk(chunkText: string, printedPage: number): boolean {
  const lower = chunkText.toLowerCase();

  // 1. Explicit indicators
  if (
    lower.includes('table of contents') ||
    lower.includes('contents\n') ||
    lower.includes('content\n') ||
    lower.startsWith('index') ||
    lower.startsWith('glossary')
  ) {
    return true;
  }

  // 2. Early pages with multiple dotted lines or unit-to-page listings
  if (printedPage <= 15) {
    const tocPatternMatches = (chunkText.match(/\t\d+|\.{2,}\s*\d+/g) || []).length;
    const unitListMatches = (chunkText.match(/unit\s*\d+\s*:/gi) || []).length;
    if (tocPatternMatches >= 2 || (unitListMatches >= 2 && printedPage <= 12)) {
      return true;
    }
  }

  return false;
}

export type SubjectDomain =
  | 'cs_ai'
  | 'it'
  | 'math'
  | 'phys'
  | 'chem'
  | 'bio'
  | 'eng'
  | 'geog'
  | 'hist'
  | 'econ'
  | 'civ'
  | 'sat'
  | 'agri'
  | 'amh'
  | 'general';

/**
 * Accurately detects the subject domain of a student question so we NEVER
 * mix unrelated subjects (e.g. matching Biology when asked about AI or Technology,
 * or Economics when asked about Geography).
 */
export function detectSubjectDomain(query: string, preferredSubjectId?: string): SubjectDomain {
  const q = query.toLowerCase();
  const tokens = tokenize(query);

  // 0. Explicit subject preference from UI filter
  if (preferredSubjectId) {
    if (preferredSubjectId === 'subj-math') return 'math';
    if (preferredSubjectId === 'subj-phys' || preferredSubjectId === 'subj-physics') return 'phys';
    if (preferredSubjectId === 'subj-chem') return 'chem';
    if (preferredSubjectId === 'subj-bio') return 'bio';
    if (preferredSubjectId === 'subj-eng') return 'eng';
    if (preferredSubjectId === 'subj-geog') return 'geog';
    if (preferredSubjectId === 'subj-hist') return 'hist';
    if (preferredSubjectId === 'subj-econ') return 'econ';
    if (preferredSubjectId === 'subj-civ' || preferredSubjectId === 'subj-civics') return 'civ';
    if (preferredSubjectId === 'subj-sat' || preferredSubjectId === 'subj-apt') return 'sat';
    if (preferredSubjectId === 'subj-it' || preferredSubjectId === 'subj-cs') return 'it';
    if (preferredSubjectId === 'subj-agri') return 'agri';
    if (preferredSubjectId === 'subj-amh') return 'amh';
  }

  // 1. Geography
  const isGeog = /\b(geography|topography|physiography|physiographic|landform|landforms|rift valley|afar depression|denakil|plateau|plateaus|highland|highlands|lowland|lowlands|ras dashen|bale mountains|simien|climate|weather|temperature|rainfall|precipitation|agro-climatic|kolla|woyna dega|dega|bereha|wurch|soil erosion|soil degradation|soil types|drainage system|river basin|blue nile|abbay|awash|baro|genale|wabeshebelle|lake tana|lake abaya|demography|population growth|urbanization|settlement|map reading|contour|contours|contour interval|map scale|representative fraction|grid reference|eastings|northings|latitude|longitude|meridian|equator|spatial distribution|cartography)\b/i.test(q);
  if (isGeog) return 'geog';

  // 2. History
  const isHist = /\b(history|historical|emperor|empress|king of kings|monarch|dynasty|battle of adwa|adwa|menelik|menilik|tewodros|yohannes|haile selassie|zemen mesafint|era of princes|axum|aksum|axumite|zagwe|lalibela|gondar|yeha|daamat|treaty of wuchale|colonialism|scramble for africa|battle of metemma|gragn|ahmad ibn ibrahim|fasiledes|oromo population movement|oromo migration|gadaa|gada|solomonic dynasty|yodit|gudit|ancient civilization|tripartite treaty|italian invasion|walwal)\b/i.test(q);
  if (isHist) return 'hist';

  // 3. Economics
  const isEcon = /\b(economics|economy|economic|microeconomics|macroeconomics|gdp|gross domestic product|gnp|inflation|deflation|consumer price index|cpi|law of demand|law of supply|elasticity|price elasticity|market equilibrium|equilibrium price|shortage|surplus|monopoly|monopolistic|oligopoly|perfect competition|factors of production|opportunity cost|production possibility|ppf|consumption|consumer behavior|utility|marginal utility|indifference curve|fiscal policy|monetary policy|taxation|taxes|national income|circular flow|budget deficit|balance of payments|central bank|national bank of ethiopia)\b/i.test(q);
  if (isEcon) return 'econ';

  // 4. Civics
  const isCiv = /\b(civics|ethical|ethics|constitution|constitutional|fdre constitution|human rights|democratic rights|democracy|democratic|rule of law|judiciary|judicial|legislative|executive|house of peoples representatives|house of federation|citizenship|citizen|citizens|sovereignty|federalism|federation|electoral|election|nebe|good governance|transparency|accountability|anti-corruption|patriotism|civic participation|tolerance|conflict resolution|african union|au charter|un charter|universal declaration of human rights|international relations|foreign policy of ethiopia)\b/i.test(q);
  if (isCiv) return 'civ';

  // 5. SAT / Scholastic Aptitude
  const isSat = /\b(scholastic aptitude|aptitude|sat|verbal reasoning|quantitative reasoning|analytical reasoning|reading comprehension test|sentence completion|analogies|analogy|syllogism|deductive reasoning|inductive reasoning|spatial reasoning|data sufficiency|logical reasoning|abstract reasoning)\b/i.test(q);
  if (isSat) return 'sat';

  // 6. Explicit Scientific Laws and Scientists (STRICT PRECEDENCE over general)
  const isPhysLaw = /\b(gauss|gauss's|gaussian|coulomb|coulomb's|newton|newton's|faraday|faraday's|ampere|ampere's|lenz|lenz's|maxwell|maxwell's|lorentz|biot savart|biot-savart|kirchhoff|kirchhoff's|ohm|ohm's|kepler|kepler's|pascal|pascal's|archimedes|bernoulli|snell|snell's|planck|bohr|carnot|stefan|doppler|compton|hubble)\b/i.test(q);
  if (isPhysLaw && !/\b(mendel|mendelian|darwin)\b/i.test(q)) {
    return 'phys';
  }

  // 7. Physics Core Concepts & Terminology
  const isPhys =
    isPhysLaw ||
    /\b(physics|force|forces|acceleration|velocity|kinematics|dynamics|gravity|gravitation|thermodynamics|f=ma|f = ma|joule|joules|watt|watts|volt|volts|tesla|henry|weber|kinetic energy|potential energy|momentum|optics|refraction|reflection|lens|lenses|electric current|voltage|resistance|resistor|resistors|magnetic field|electromagnetism|scalar|vector quantity|heat capacity|electric flux|magnetic flux|flux|electrostatic|electrostatics|electric field|electric potential|capacitance|capacitor|capacitors|dielectric|electromagnetic induction|induced emf|emf|alternating current|transformer|photoelectric effect|work function|radioactivity|half-life|alpha decay|beta decay|gamma ray|wave optics|diffraction|interference|polarization|sound wave|sound waves|simple harmonic motion|shm|pendulum|torque|angular momentum|moment of inertia|center of mass|centripetal|projectile|projectile motion|friction|viscosity|buoyancy|buoyant|thermal expansion|ideal gas|carnot cycle|blackbody)\b/i.test(q);

  if (isPhys) {
    return 'phys';
  }

  // 8. Chemistry Core Concepts & Terminology
  const isChem =
    /\b(chemistry|acid|acids|base|bases|ph scale|atom|atoms|atomic structure|electron|electrons|proton|protons|neutron|neutrons|periodic table|mole|molar|molarity|stoichiometry|covalent|ionic bonding|metallic bonding|organic chemistry|alkane|alkene|alkyne|hydrocarbon|hydrocarbons|titration|neutralization|redox|oxidation|reduction|enthalpy|entropy|gibbs|equilibrium|le chatelier|galvanic cell|voltaic cell|electrolysis|electrolytic|anode|cathode|electrolyte|electrolytes|half-cell|nernst|hybridization|sp3|sp2|sp|isomerism|functional group|alcohol|aldehyde|ketone|carboxylic acid|ester|polymer|polymerization|rate of reaction|activation energy|catalyst)\b/i.test(q);

  if (isChem) {
    return 'chem';
  }

  // 9. Biology Core Concepts & Terminology
  const isBio =
    /\b(biology|cell|cells|cellular|photosynthesis|chloroplast|chloroplasts|chlorophyll|respiration|mitochondria|mitochondrion|mitosis|meiosis|dna|rna|gene|genes|genetics|genetic|chromosome|chromosomes|allele|alleles|ecology|ecosystem|species|evolution|natural selection|enzyme|enzymes|reproduction|gamete|gametes|circulatory system|digestive system|respiratory system|heart|kidney|nephron|mendel|mendelian|heredity|monohybrid|dihybrid|punnett|biomolecule|biomolecules|carbohydrate|lipid|protein|amino acid|nucleic acid|xylem|phloem|transpiration|hormone|neuron|synapse|homeostasis|pathogen|bacteria|virus|fungi|parasite|immunity|antibody|antigen|vaccine)\b/i.test(q);

  if (isBio) {
    return 'bio';
  }

  // 10. Information Technology / Computer Science / AI
  const isAiCs = 
    /\b(artificial intelligence|machine learning|deep learning|neural network|algorithm|algorithms|software|hardware|programming|cybersecurity|data science|operating system|cloud computing|robotics|large language model|llm|nlp|computer science|python|database|computing|ict|information technology|binary|logic gate|boolean algebra)\b/i.test(q) ||
    (tokens.includes('ai') && !tokens.includes('air') && !tokens.includes('aid') && !tokens.includes('aim')) ||
    (tokens.includes('ml') && tokens.length < 5);

  if (isAiCs) {
    return 'it';
  }

  // 11. Mathematics
  const isMath =
    /\b(math|mathematics|algebra|quadratic|discriminant|polynomial|polynomials|logarithm|logarithms|derivative|derivatives|integral|integrals|calculus|trigonometry|sine|cosine|tangent|matrix|matrices|vector|vectors|pythagorean|geometry|fraction|fractions|equation|equations|roots of|formula for roots|b2-4ac|b\^2-4ac|probability|statistics|mean|median|mode|sequence|series|arithmetic progression|geometric progression|permutation|combination|binomial theorem|relation|relations|function|functions|limit|limits|continuity|dot product|cross product)\b/i.test(q);

  if (isMath) {
    return 'math';
  }

  // 12. English
  const isEng =
    /\b(english|grammar|tense|tenses|passive voice|active voice|preposition|prepositions|adjective|adverbs?|noun|nouns|pronoun|pronouns|verb|verbs|synonym|synonyms|antonym|antonyms|comprehension|idiom|idioms|vocabulary|phrasal verb|clause|clauses|conditional|conditionals|lowercase|lower case|uppercase|upper case|capital letter|capital letters|capitalization|letter|letters|alphabet|spelling|phonics|punctuation|direct speech|indirect speech|reported speech|conjunction|conjunctions|interjection|sentence|paragraph|essay|modal verbs?)\b/i.test(q);

  if (isEng) {
    return 'eng';
  }

  // 13. Agriculture
  const isAgri = /\b(agriculture|agricultural|agronomy|crop production|cereal crops|pulses|oilseeds|coffee production|teff|soil fertility|fertilizer|compost|irrigation|livestock|cattle|dairy|poultry|apiculture|beekeeping|pest management|horticulture|forestry|agroforestry)\b/i.test(q);
  if (isAgri) return 'agri';

  // 14. Amharic
  const isAmh = /\b(amharic|አማርኛ|ሰዋሰው|ስነ-ጽሁፍ|ቅኔ|ግጥም|ልቦለድ|ድርሰት|ተረት|ምሳሌያዊ አነጋገር)\b/i.test(q);
  if (isAmh) return 'amh';

  return 'general';
}

// Compute term overlap score (BM25 approximation with co-occurrence boost)
function computeKeywordScore(queryTokens: string[], docText: string): number {
  const docTokens = tokenize(docText);
  if (docTokens.length === 0) return 0;

  const docFreq: Record<string, number> = {};
  docTokens.forEach(t => {
    docFreq[t] = (docFreq[t] || 0) + 1;
  });

  let score = 0;
  let uniqueMatched = 0;
  queryTokens.forEach(token => {
    if (docFreq[token]) {
      const isStop = STOPWORDS.has(token);
      const weight = isStop ? 0.05 : 1.5;
      const tf = docFreq[token];
      score += weight * (tf * 2.2) / (tf + 1.2);
      if (!isStop) uniqueMatched++;
    }
  });

  // High-yield topic co-occurrence boost: prevent single-word false matches
  if (uniqueMatched >= 3) {
    score += 6.0;
  } else if (uniqueMatched >= 2) {
    score += 3.0;
  }

  return score;
}

/**
 * Checks if a textbook chunk or book belongs to the detected domain.
 * This guarantees we NEVER match Biology chunks for AI or Mathematics questions,
 * and NEVER match Economics or Civics when asked about Geography!
 */
export function isChunkSubjectCompatible(chunkSubjectId: string, bookTitle: string, domain: SubjectDomain): boolean {
  const normBook = bookTitle.toLowerCase();

  switch (domain) {
    case 'cs_ai':
    case 'it':
      return chunkSubjectId === 'subj-it' || chunkSubjectId === 'subj-cs' || normBook.includes('information technology') || normBook.includes('computer');

    case 'math':
      return chunkSubjectId === 'subj-math' || normBook.includes('mathematics') || normBook.includes('math');

    case 'phys':
      return chunkSubjectId === 'subj-phys' || chunkSubjectId === 'subj-physics' || normBook.includes('physics');

    case 'chem':
      return chunkSubjectId === 'subj-chem' || normBook.includes('chemistry');

    case 'bio':
      return chunkSubjectId === 'subj-bio' || normBook.includes('biology');

    case 'eng':
      return chunkSubjectId === 'subj-eng' || normBook.includes('english');

    case 'geog':
      return chunkSubjectId === 'subj-geog' || normBook.includes('geography');

    case 'hist':
      return chunkSubjectId === 'subj-hist' || normBook.includes('history');

    case 'econ':
      return chunkSubjectId === 'subj-econ' || normBook.includes('economics');

    case 'civ':
      return chunkSubjectId === 'subj-civ' || chunkSubjectId === 'subj-civics' || normBook.includes('civic') || normBook.includes('ethical') || normBook.includes('citizenship');

    case 'sat':
      return chunkSubjectId === 'subj-sat' || chunkSubjectId === 'subj-apt' || normBook.includes('scholastic aptitude') || normBook.includes('sat');

    case 'agri':
      return chunkSubjectId === 'subj-agri' || normBook.includes('agriculture');

    case 'amh':
      return chunkSubjectId === 'subj-amh' || normBook.includes('amharic') || normBook.includes('አማርኛ');

    case 'general':
    default:
      // In general domain, exclude Civics/Citizenship unless explicitly civic
      const isCivics = chunkSubjectId === 'subj-civ' || chunkSubjectId === 'subj-civics' || normBook.includes('civic') || normBook.includes('citizenship');
      if (isCivics) return false;
      return true;
  }
}

export function retrieveRAGContext(query: string, studentGradeId?: string, preferredSubjectId?: string): RAGRetrievalResult {
  const normalizedSubjectId = preferredSubjectId === 'subj-physics' ? 'subj-phys' : preferredSubjectId;
  const domain = detectSubjectDomain(query, normalizedSubjectId);
  const coreKeywords = extractCoreKeywords(query);
  const distinctiveKeywords = extractDistinctiveTopicKeywords(query);
  const searchKeywords = distinctiveKeywords.length > 0 ? distinctiveKeywords : coreKeywords;
  const allChunks = db.getBookChunks();

  // If question is about AI / Computer Science and we do not have an IT textbook uploaded,
  // do NOT rush to match random subjects like Biology or English!
  if (domain === 'cs_ai') {
    const hasItTextbook = allChunks.some(c => {
      const b = db.getBookById(c.book_id);
      return isChunkSubjectCompatible(c.subject_id, b?.title || '', 'cs_ai');
    });

    if (!hasItTextbook) {
      return {
        sources: [],
        related_exam_questions: [],
        study_recommendation: undefined
      };
    }
  }

  // Strict filtering: Chunk must be subject-compatible, not a TOC/index page, and must contain distinctive core query concepts
  const candidateChunks = allChunks.filter(chunk => {
    const book = db.getBookById(chunk.book_id);
    const bookTitle = book?.title || '';

    // 0. Exclude Table of Contents, Index, or Syllabus pages
    if (isTableOfContentsOrIndexChunk(chunk.chunk_text, chunk.printed_page_number)) {
      return false;
    }

    // 1. Strict Subject compatibility check
    if (!isChunkSubjectCompatible(chunk.subject_id, bookTitle, domain)) {
      return false;
    }

    // 2. Distinctive keyword containment check:
    // The chunk or chapter MUST mention at least one key distinctive concept (e.g. 'gauss').
    // Matching only generic modifiers like 'law' or 'rule' without the core scientific noun is rejected!
    if (searchKeywords.length > 0) {
      const chunkTextLower = chunk.chunk_text.toLowerCase();
      const chapter = chunk.chapter_id ? db.getBookChapters(chunk.book_id).find(c => c.id === chunk.chapter_id) : undefined;
      const chapterLower = (chapter?.chapter_title || '').toLowerCase();

      let matchedCount = 0;
      for (const kw of searchKeywords) {
        if (kw.length <= 3) {
          const regex = new RegExp(`\\b${kw}\\b`, 'i');
          if (regex.test(chunkTextLower) || regex.test(chapterLower)) matchedCount++;
        } else {
          if (chunkTextLower.includes(kw) || chapterLower.includes(kw)) matchedCount++;
        }
      }

      // Strict multi-keyword grounding: reject accidental single-word matches
      if (searchKeywords.length >= 2 && matchedCount < 2) {
        return false;
      }
      if (searchKeywords.length === 1 && matchedCount < 1) {
        return false;
      }
    }

    return true;
  });

  // Score candidate chunks with heavy weighting on distinctive topic keywords
  const scoredChunks = candidateChunks.map(chunk => {
    let score = computeKeywordScore(searchKeywords, chunk.chunk_text) * 3.0;
    if (distinctiveKeywords.length > 0) {
      score += computeKeywordScore(distinctiveKeywords, chunk.chunk_text) * 4.0;
    }

    // Grade bias if student grade matches
    if (studentGradeId && chunk.grade_id === studentGradeId) {
      score *= 1.3;
    }
    // Preferred subject bias
    if (normalizedSubjectId && chunk.subject_id === normalizedSubjectId) {
      score *= 1.4;
    }

    return { chunk, score };
  });

  // Strict threshold to prevent false-positive textbook references
  const topChunks = scoredChunks
    .filter(item => item.score >= 4.0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const sources: AIResponseSource[] = [];
  topChunks.forEach(({ chunk, score }) => {
    const book = db.getBookById(chunk.book_id);
    const page = db.getBookPageByPrintedPage(chunk.book_id, chunk.printed_page_number);
    const chapter = chunk.chapter_id ? db.getBookChapters(chunk.book_id).find(c => c.id === chunk.chapter_id) : undefined;
    const grade = db.getGrades().find(g => g.id === chunk.grade_id);
    const subject = db.getSubjects().find(s => s.id === chunk.subject_id);

    if (book) {
      // 1. Try explicit Unit heading (e.g. "Unit 4: Reproduction")
      let resolvedChapterTitle: string | null = null;
      const unitMatch = chunk.chunk_text.match(/Unit\s*(\d+)\s*:\s*([^\n\r\t]+)/i);
      if (unitMatch) {
        resolvedChapterTitle = `Unit ${unitMatch[1]}: ${unitMatch[2].trim().split('.')[0]}`;
      }

      // 2. Try section heading (e.g. "4.1 Introduction to reproduction")
      if (!resolvedChapterTitle) {
        const sectionMatch = chunk.chunk_text.match(/(?:^|\n|:\s*|\)\s*)\s*(\d+)\.\d+\s+([^\n\r\t?]+)/i);
        if (sectionMatch) {
          const unitNum = parseInt(sectionMatch[1], 10);
          const matchedChapter = db.getBookChapters(chunk.book_id).find(c => c.chapter_number === unitNum);
          if (matchedChapter) {
            resolvedChapterTitle = matchedChapter.chapter_title;
          }
        }
      }

      // 3. Fallback to chapter from database
      if (!resolvedChapterTitle) {
        resolvedChapterTitle = chapter?.chapter_title || `Chapter ${chapter?.chapter_number || 1}`;
      }

      sources.push({
        book_id: book.id,
        book_title: book.title,
        page_id: page?.id || `page-${book.id}-${chunk.printed_page_number}`,
        printed_page_number: chunk.printed_page_number,
        pdf_page_index: chunk.pdf_page_index,
        chapter_id: chapter?.id,
        chapter_title: resolvedChapterTitle,
        grade_name: grade?.name || 'Grade 10',
        subject_name: subject?.name || 'Secondary Curriculum',
        subject_id: book.subject_id || chunk.subject_id,
        relevance_score: Math.min(0.99, Math.round((score / 10) * 100) / 100),
        passage_snippet: chunk.chunk_text
      });
    }
  });

  // 3. Page-level search: Search full authentic textbook pages across candidate domain books
  if (sources.length < 3 && searchKeywords.length > 0 && domain !== 'cs_ai') {
    const allBooks = db.getBooks();
    const domainBooks = allBooks.filter(b => isChunkSubjectCompatible(b.subject_id, b.title, domain));
    domainBooks.sort((a, b) => {
      if (studentGradeId) {
        if (a.grade_id === studentGradeId && b.grade_id !== studentGradeId) return -1;
        if (b.grade_id === studentGradeId && a.grade_id !== studentGradeId) return 1;
      }
      return 0;
    });

    const existingKeys = new Set(sources.map(s => `${s.book_id}_${s.printed_page_number}`));
    const pageMatches: Array<{ book: any; page: any; score: number }> = [];

    for (const book of domainBooks) {
      const pages = db.getBookPages(book.id);
      for (const p of pages) {
        if (existingKeys.has(`${book.id}_${p.printed_page_number}`)) continue;
        const text = (p.extracted_text || p.ocr_text || '').toLowerCase();
        if (text.length < 40) continue;
        if (isTableOfContentsOrIndexChunk(text, p.printed_page_number)) continue;

        let matchedCount = 0;
        for (const kw of searchKeywords) {
          if (kw.length <= 3) {
            if (new RegExp(`\\b${kw}\\b`, 'i').test(text)) matchedCount++;
          } else {
            if (text.includes(kw)) matchedCount++;
          }
        }
        if (searchKeywords.length >= 2 && matchedCount < 2) continue;
        if (searchKeywords.length === 1 && matchedCount < 1) continue;

        let score = computeKeywordScore(searchKeywords, text) * 3.0;
        if (distinctiveKeywords.length > 0) score += computeKeywordScore(distinctiveKeywords, text) * 4.0;
        if (studentGradeId && book.grade_id === studentGradeId) score *= 1.3;
        if (normalizedSubjectId && book.subject_id === normalizedSubjectId) score *= 1.4;

        if (score >= 4.0) {
          pageMatches.push({ book, page: p, score });
        }
      }
    }

    const needed = 3 - sources.length;
    const topPages = pageMatches.sort((a, b) => b.score - a.score).slice(0, needed);

    topPages.forEach(({ book, page, score }) => {
      const chapters = db.getBookChapters(book.id);
      const chapter = chapters.find(c => page.printed_page_number >= c.start_page && page.printed_page_number <= c.end_page) || chapters[0];
      const grade = db.getGrades().find(g => g.id === book.grade_id);
      const subject = db.getSubjects().find(s => s.id === book.subject_id);

      let resolvedChapterTitle = chapter?.chapter_title;
      const unitHeadingMatch = (page.extracted_text || '').match(/^#\s*(Unit\s*\d+[^#\n\r]+)/m);
      const sectionHeadingMatch = (page.extracted_text || '').match(/^##\s*(\d+\.\d+[^#\n\r]+)/m);

      if (unitHeadingMatch && sectionHeadingMatch) {
        resolvedChapterTitle = `${unitHeadingMatch[1].trim()} — ${sectionHeadingMatch[1].trim()}`;
      } else if (unitHeadingMatch) {
        resolvedChapterTitle = unitHeadingMatch[1].trim();
      } else {
        const unitMatch = (page.extracted_text || '').match(/Unit\s*(\d+)\s*:\s*([^\n\r\t]+)/i);
        if (unitMatch) {
          resolvedChapterTitle = `Unit ${unitMatch[1]}: ${unitMatch[2].trim().split('.')[0]}`;
        } else if (!resolvedChapterTitle) {
          resolvedChapterTitle = `Chapter ${chapter?.chapter_number || 1}`;
        }
      }

      const fullText = (page.extracted_text || page.ocr_text || '').replace(/\r/g, '').trim();
      let snippet = fullText;
      if (fullText.length > 900) {
        const lower = fullText.toLowerCase();
        let bestIdx = -1;
        for (const kw of searchKeywords) {
          const idx = lower.indexOf(kw);
          if (idx !== -1) { bestIdx = idx; break; }
        }
        if (bestIdx !== -1) {
          const start = Math.max(0, bestIdx - 150);
          const end = Math.min(fullText.length, bestIdx + 750);
          snippet = (start > 0 ? '...' : '') + fullText.slice(start, end).trim() + (end < fullText.length ? '...' : '');
        } else {
          snippet = fullText.slice(0, 800) + '...';
        }
      }
      snippet = snippet.replace(/^#+\s+/gm, '').replace(/\s+/g, ' ').trim();

      sources.push({
        book_id: book.id,
        book_title: book.title,
        page_id: page.id || `page-${book.id}-${page.printed_page_number}`,
        printed_page_number: page.printed_page_number,
        pdf_page_index: page.pdf_page_index,
        chapter_id: chapter?.id,
        chapter_title: resolvedChapterTitle,
        grade_name: grade?.name || (book.title.match(/Grade\s*\d+/i) ? book.title.match(/Grade\s*\d+/i)![0] : 'Grade 10'),
        subject_name: subject?.name || 'Secondary Curriculum',
        subject_id: book.subject_id,
        relevance_score: Math.min(0.99, Math.round((score / 10) * 100) / 100),
        passage_snippet: snippet
      });
      existingKeys.add(`${book.id}_${page.printed_page_number}`);
    });
  }

  // Retrieve related entrance-exam questions ONLY if they match the domain and topic
  const allQuestions = db.getExamQuestions();
  const scoredQuestions = allQuestions
  // 4. Strict Subject Isolation for EUEE Entrance Exam Questions:
  // Non-EUEE subjects (IT, Agriculture, Civics, Amharic, AI) NEVER have entrance exams!
  const NON_EUEE_DOMAINS = new Set(['civ', 'it', 'agri', 'amh', 'cs_ai']);
  let related_exam_questions: ExamQuestion[] = [];
  if (!NON_EUEE_DOMAINS.has(domain)) {
    const scoredQuestions = db
      .getExamQuestions()
      .filter(q => {
        if (!q.question_text || q.question_text.length < 15) return false;
        // Strictly match the current domain
        if (domain === 'math' && q.subject_id !== 'subj-math') return false;
        if (domain === 'phys' && q.subject_id !== 'subj-phys') return false;
        if (domain === 'chem' && q.subject_id !== 'subj-chem') return false;
        if (domain === 'bio' && q.subject_id !== 'subj-bio') return false;
        if (domain === 'eng' && q.subject_id !== 'subj-eng') return false;
        if (domain === 'geog' && q.subject_id !== 'subj-geog') return false;
        if (domain === 'hist' && q.subject_id !== 'subj-hist') return false;
        if (domain === 'econ' && q.subject_id !== 'subj-econ') return false;
        if (domain === 'sat' && q.subject_id !== 'subj-sat' && q.subject_id !== 'subj-apt') return false;
        return true;
      })
      .map(q => {
        let qScore = computeKeywordScore(coreKeywords, `${q.question_text} ${q.explanation} ${q.topic_name || ''}`) * 2.0;

        if (sources.length > 0) {
          if (q.book_id && sources.some(s => s.book_id === q.book_id)) qScore += 2.0;
          if (q.printed_page_number && sources.some(s => Math.abs((s.printed_page_number || 0) - (q.printed_page_number || 0)) <= 10)) {
            qScore += 2.0;
          }
        }

        return { question: q, score: qScore };
      });

    related_exam_questions = scoredQuestions
      .filter(item => item.score >= 4.0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.question);
  }

  // Study recommendation: ONLY if a verified textbook source exists
  let study_recommendation: RAGRetrievalResult['study_recommendation'] = undefined;
  if (sources.length > 0) {
    const s = sources[0];
    study_recommendation = {
      topic_name: s.chapter_title || 'Curriculum Concept',
      grade_name: s.grade_name,
      subject_name: s.subject_name,
      book_title: s.book_title,
      chapter_title: s.chapter_title || 'Chapter Section',
      page_start: Math.max(1, s.printed_page_number - 2),
      page_end: s.printed_page_number + 4,
      note: `Review pages ${Math.max(1, s.printed_page_number - 2)}–${s.printed_page_number + 4} of ${s.book_title} to reinforce this concept.`
    };
  }

  return {
    sources,
    related_exam_questions,
    study_recommendation
  };
}
