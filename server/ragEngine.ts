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

export type SubjectDomain = 'cs_ai' | 'math' | 'phys' | 'chem' | 'bio' | 'eng' | 'social' | 'general';

/**
 * Accurately detects the subject domain of a student question so we NEVER
 * mix unrelated subjects (e.g. matching Biology when asked about AI or Technology).
 */
export function detectSubjectDomain(query: string, preferredSubjectId?: string): SubjectDomain {
  const q = query.toLowerCase();
  const tokens = tokenize(query);

  // 1. Explicit Scientific Laws and Scientists (STRICT PRECEDENCE over Civics/Social)
  const isPhysLaw = /\b(gauss|gauss's|gaussian|coulomb|coulomb's|newton|newton's|faraday|faraday's|ampere|ampere's|lenz|lenz's|maxwell|maxwell's|lorentz|biot savart|biot-savart|kirchhoff|kirchhoff's|ohm|ohm's|kepler|kepler's|pascal|pascal's|archimedes|bernoulli|snell|snell's|planck|bohr|carnot|stefan|doppler|compton|hubble)\b/i.test(q);
  if (isPhysLaw && !/\b(mendel|mendelian|darwin)\b/i.test(q)) {
    return 'phys';
  }

  // 2. Physics Core Concepts & Terminology
  const isPhys =
    isPhysLaw ||
    /\b(physics|force|forces|acceleration|velocity|kinematics|dynamics|gravity|gravitation|thermodynamics|f=ma|f = ma|joule|joules|watt|watts|volt|volts|tesla|henry|weber|kinetic energy|potential energy|momentum|optics|refraction|reflection|lens|lenses|electric current|voltage|resistance|resistor|resistors|magnetic field|electromagnetism|scalar|vector quantity|heat capacity|electric flux|magnetic flux|flux|electrostatic|electrostatics|electric field|electric potential|capacitance|capacitor|capacitors|dielectric|electromagnetic induction|induced emf|emf|alternating current|transformer|photoelectric effect|work function|radioactivity|half-life|alpha decay|beta decay|gamma ray|wave optics|diffraction|interference|polarization|sound wave|sound waves|simple harmonic motion|shm|pendulum|torque|angular momentum|moment of inertia|center of mass|centripetal|projectile|projectile motion|friction|viscosity|buoyancy|buoyant|thermal expansion|ideal gas|carnot cycle|blackbody)\b/i.test(q);

  if (isPhys) {
    return 'phys';
  }

  // 3. Chemistry Core Concepts & Terminology
  const isChem =
    /\b(chemistry|acid|acids|base|bases|ph scale|atom|atoms|atomic structure|electron|electrons|proton|protons|neutron|neutrons|periodic table|mole|molar|molarity|stoichiometry|covalent|ionic bonding|metallic bonding|organic chemistry|alkane|alkene|alkyne|hydrocarbon|hydrocarbons|titration|neutralization|redox|oxidation|reduction|enthalpy|entropy|gibbs|equilibrium|le chatelier|galvanic cell|voltaic cell|electrolysis|electrolytic|anode|cathode|electrolyte|electrolytes|half-cell|nernst|hybridization|sp3|sp2|sp|isomerism|functional group|alcohol|aldehyde|ketone|carboxylic acid|ester|polymer|polymerization|rate of reaction|activation energy|catalyst)\b/i.test(q);

  if (isChem) {
    return 'chem';
  }

  // 4. Biology Core Concepts & Terminology
  const isBio =
    /\b(biology|cell|cells|cellular|photosynthesis|chloroplast|chloroplasts|chlorophyll|respiration|mitochondria|mitochondrion|mitosis|meiosis|dna|rna|gene|genes|genetics|genetic|chromosome|chromosomes|allele|alleles|ecology|ecosystem|species|evolution|natural selection|enzyme|enzymes|reproduction|gamete|gametes|circulatory system|digestive system|respiratory system|heart|kidney|nephron|mendel|mendelian|heredity|monohybrid|dihybrid|punnett|biomolecule|biomolecules|carbohydrate|lipid|protein|amino acid|nucleic acid|xylem|phloem|transpiration|hormone|neuron|synapse|homeostasis|pathogen|bacteria|virus|fungi|parasite|immunity|antibody|antigen|vaccine)\b/i.test(q);

  if (isBio) {
    return 'bio';
  }

  // 5. Computer Science / AI / Technology
  const isAiCs = 
    /\b(artificial intelligence|machine learning|deep learning|neural network|algorithm|algorithms|software|hardware|programming|cybersecurity|data science|operating system|cloud computing|robotics|large language model|llm|nlp|computer science|python|database|computing|ict|information technology)\b/i.test(q) ||
    (tokens.includes('ai') && !tokens.includes('air') && !tokens.includes('aid') && !tokens.includes('aim')) ||
    (tokens.includes('ml') && tokens.length < 5);

  if (isAiCs) {
    return 'cs_ai';
  }

  // 6. Mathematics
  const isMath =
    /\b(math|mathematics|algebra|quadratic|discriminant|polynomial|polynomials|logarithm|logarithms|derivative|derivatives|integral|integrals|calculus|trigonometry|sine|cosine|tangent|matrix|matrices|vector|vectors|pythagorean|geometry|fraction|fractions|equation|equations|roots of|formula for roots|b2-4ac|b\^2-4ac|probability|statistics|mean|median|mode|sequence|series|arithmetic progression|geometric progression|permutation|combination|binomial theorem|relation|relations|function|functions|limit|limits|continuity|dot product|cross product)\b/i.test(q);

  if (isMath) {
    return 'math';
  }

  // 7. English
  const isEng =
    /\b(grammar|tense|tenses|passive voice|active voice|preposition|prepositions|adjective|adverb|noun|pronoun|synonym|synonyms|antonym|antonyms|comprehension|idiom|idioms|vocabulary|phrasal verb|clause|conditional)\b/i.test(q);

  if (isEng) {
    return 'eng';
  }

  // 8. Social Sciences (History, Geography, Economics, Civics) - Strictly Political, Historical, or Civic
  const isSocial =
    /\b(history|geography|economics|civics|adwa|battle of adwa|ethiopian history|climate|topography|map reading|inflation|gdp|demand and supply|market equilibrium|constitution|human rights|democracy|citizenship|rule of law|judiciary|parliament|governance|federalism|sovereignty|electoral|patriotism|pan-africanism|colonialism|scramble for africa|axum|zagwe|gondar|yeha|lalibela)\b/i.test(q);

  if (isSocial) {
    return 'social';
  }

  // If student explicitly filtered by subject in the UI
  if (preferredSubjectId) {
    if (preferredSubjectId === 'subj-math') return 'math';
    if (preferredSubjectId === 'subj-phys' || preferredSubjectId === 'subj-physics') return 'phys';
    if (preferredSubjectId === 'subj-chem') return 'chem';
    if (preferredSubjectId === 'subj-bio') return 'bio';
    if (preferredSubjectId === 'subj-eng') return 'eng';
    if (['subj-geog', 'subj-hist', 'subj-econ', 'subj-civics', 'subj-civ'].includes(preferredSubjectId)) return 'social';
  }

  return 'general';
}

// Compute term overlap score (BM25 approximation)
function computeKeywordScore(queryTokens: string[], docText: string): number {
  const docTokens = tokenize(docText);
  if (docTokens.length === 0) return 0;

  const docFreq: Record<string, number> = {};
  docTokens.forEach(t => {
    docFreq[t] = (docFreq[t] || 0) + 1;
  });

  let score = 0;
  queryTokens.forEach(token => {
    if (docFreq[token]) {
      const isStop = STOPWORDS.has(token);
      const weight = isStop ? 0.05 : 1.5;
      const tf = docFreq[token];
      score += weight * (tf * 2.2) / (tf + 1.2);
    }
  });

  return score;
}

/**
 * Checks if a textbook chunk belongs to the detected domain.
 * This guarantees we NEVER match Biology chunks for AI or Mathematics questions!
 */
function isChunkSubjectCompatible(chunkSubjectId: string, bookTitle: string, domain: SubjectDomain): boolean {
  const normBook = bookTitle.toLowerCase();

  switch (domain) {
    case 'cs_ai':
      // Currently, if no IT/CS textbook is uploaded, do NOT force-match any other subject!
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

    case 'social':
      return ['subj-geog', 'subj-hist', 'subj-econ', 'subj-civics'].includes(chunkSubjectId) ||
        normBook.includes('geography') || normBook.includes('history') || normBook.includes('economics') || normBook.includes('civics');

    case 'general':
    default:
      // In general domain, strictly exclude Civics/History/Social studies unless the query explicitly contains social/civic terms
      const isCivicsOrSocial = ['subj-geog', 'subj-hist', 'subj-econ', 'subj-civics', 'subj-civ'].includes(chunkSubjectId) ||
        normBook.includes('civic') || normBook.includes('citizenship') || normBook.includes('history') || normBook.includes('geography');
      if (isCivicsOrSocial) {
        return false;
      }
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

      const hasDirectKeywordMatch = searchKeywords.some(kw => {
        // Full word boundary check for short terms like 'ai' or 'ph'
        if (kw.length <= 3) {
          const regex = new RegExp(`\\b${kw}\\b`, 'i');
          return regex.test(chunkTextLower) || regex.test(chapterLower);
        }
        return chunkTextLower.includes(kw) || chapterLower.includes(kw);
      });

      if (!hasDirectKeywordMatch) {
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
    .filter(item => item.score >= 2.0)
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

  // 3. Page-level fallback: Search full textbook pages across candidate books if chunks had 0 matches
  if (sources.length === 0 && searchKeywords.length > 0 && domain !== 'cs_ai') {
    const allBooks = db.getBooks();
    const domainBooks = allBooks.filter(b => isChunkSubjectCompatible(b.subject_id, b.title, domain));
    domainBooks.sort((a, b) => {
      if (studentGradeId) {
        if (a.grade_id === studentGradeId && b.grade_id !== studentGradeId) return -1;
        if (b.grade_id === studentGradeId && a.grade_id !== studentGradeId) return 1;
      }
      return 0;
    });
    const pageMatches = [];
    for (const book of domainBooks) {
      const pages = db.getBookPages(book.id);
      for (const p of pages) {
        const text = (p.extracted_text || p.ocr_text || '').toLowerCase();
        if (text.length < 40) continue;
        if (isTableOfContentsOrIndexChunk(text, p.printed_page_number)) continue;
        let score = computeKeywordScore(searchKeywords, text) * 3.0;
        if (distinctiveKeywords.length > 0) score += computeKeywordScore(distinctiveKeywords, text) * 4.0;
        if (studentGradeId && book.grade_id === studentGradeId) score *= 1.3;
        if (normalizedSubjectId && book.subject_id === normalizedSubjectId) score *= 1.4;
        if (score >= 2.0) pageMatches.push({ book, page: p, score });
      }
      if (pageMatches.length >= 6) break;
    }
    const topPages = pageMatches.sort((a, b) => b.score - a.score).slice(0, 3);
    topPages.forEach(({ book, page, score }) => {
      const chapters = db.getBookChapters(book.id);
      const chapter = chapters.find(c => page.printed_page_number >= c.start_page && page.printed_page_number <= c.end_page) || chapters[0];
      const grade = db.getGrades().find(g => g.id === book.grade_id);
      const subject = db.getSubjects().find(s => s.id === book.subject_id);
      let resolvedChapterTitle = chapter?.chapter_title;
      const unitMatch = (page.extracted_text || '').match(/Unit\s*(\d+)\s*:\s*([^\n\r\t]+)/i);
      if (unitMatch) {
        resolvedChapterTitle = `Unit ${unitMatch[1]}: ${unitMatch[2].trim().split('.')[0]}`;
      } else if (!resolvedChapterTitle) {
        resolvedChapterTitle = `Chapter ${chapter?.chapter_number || 1}`;
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
      sources.push({
        book_id: book.id,
        book_title: book.title,
        page_id: page.id || `page-${book.id}-${page.printed_page_number}`,
        printed_page_number: page.printed_page_number,
        pdf_page_index: page.pdf_page_index,
        chapter_id: chapter?.id,
        chapter_title: resolvedChapterTitle,
        grade_name: grade?.name || 'Grade 10',
        subject_name: subject?.name || 'Secondary Curriculum',
        subject_id: book.subject_id,
        relevance_score: Math.min(0.99, Math.round((score / 10) * 100) / 100),
        passage_snippet: snippet
      });
    });
  }

  // Retrieve related entrance-exam questions ONLY if they match the domain and topic
  const allQuestions = db.getExamQuestions();
  const scoredQuestions = allQuestions
    .filter(q => {
      // Must match domain
      if (domain === 'cs_ai') return false; // No EUEE entrance exams exist for AI yet
      if (domain === 'math' && q.subject_id !== 'subj-math') return false;
      if (domain === 'phys' && q.subject_id !== 'subj-phys') return false;
      if (domain === 'chem' && q.subject_id !== 'subj-chem') return false;
      if (domain === 'bio' && q.subject_id !== 'subj-bio') return false;
      if (domain === 'eng' && q.subject_id !== 'subj-eng') return false;
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

  const related_exam_questions = scoredQuestions
    .filter(item => item.score >= 2.0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.question);

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
