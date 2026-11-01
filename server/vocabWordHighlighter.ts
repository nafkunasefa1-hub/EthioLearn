/**
 * Utility for detecting, underlining, capitalizing, and highlighting
 * target vocabulary words in Ethiopian National Examinations (EUEE),
 * Model Exams, and SAT / Aptitude test papers.
 *
 * For questions asking for Synonyms, Antonyms, Closest Meaning,
 * Opposite Meaning, or Word Substitution (e.g., "Choose the word closest
 * in meaning to the underlined/capitalized word"), this module ensures
 * the target word or phrase in question_text is formatted as:
 *   <u>**WORD**</u>
 * so students immediately know which word they are solving for.
 */

interface QuestionLike {
  id?: string;
  exam_id?: string;
  question_number?: number;
  question_text?: string;
  option_a?: string;
  option_b?: string;
  option_c?: string;
  option_d?: string;
  option_e?: string;
  correct_answer?: string;
  explanation?: string;
  section_instruction?: string;
  instruction_category?: string;
  topic_name?: string;
  reading_passage?: string;
}

/**
 * Curated target words for known official national examination questions.
 * Guarantees 100% fidelity for official exams like 2018 E.C. Aptitude and English.
 */
const KNOWN_EXAM_TARGET_WORDS: Record<string, Record<number, string>> = {
  // 2018 E.C. Aptitude Round 1 EUEE Exam
  'exam-entrance-1789448617976': {
    1: 'unabated',
    2: 'devote',
    3: 'erratic',
    4: 'Marginalization',
    5: 'cosmopolitan',
    6: 'disgrace',
    7: 'calamity',
    8: 'ample',
    9: 'Obesity',
  },
  // 2018 EUEE English Online Exam Round 1
  'exam-entrance-1789392169291': {
    71: 'aggravate',
    75: 'Ultimately',
    94: 'demolished',
    95: 'look into',
    96: 'annoy',
    97: 'contagious',
    98: 'hand in',
    99: 'eradicate',
    100: 'vital',
  },
};

/**
 * Strips leaked section titles, passage bodies, and promotional footers
 * that may have been glued to option_d or question_text during OCR/PDF extraction.
 */
export function cleanOptionAndQuestionStrayHeaders<T extends QuestionLike>(q: T): T {
  const strayPatterns = [
    /(?:\n|\r|[.!?]|(?<=[a-z]))\s*(?:(?:I|II|III|IV|V|VI|VII|VIII|IX|X)\.\s*)?(?:Section|Part)\s+(?:One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|\d+)\s*[:–-][\s\S]*/i,
    /(?:\n|\r|[.!?]|(?<=[a-z]))\s*(?:(?:I|II|III|IV|V|VI|VII|VIII|IX|X)\.\s*)?(?:Writing|Comprehension|Vocabulary|Grammar|Reading|Analogies|Logical Reasoning)\s*\([^)]*\)[\s\S]*/i,
    /(?:\n|\r|[.!?]|(?<=[a-z]))\s*Passage\s+\d+\s*:[\s\S]*/i,
    /(?:\n|\r|[.!?]|(?<=[a-z]))\s*Passage\s+[I|V|X]+\s*:[\s\S]*/i,
    /(?:\n|\r|[.!?]|(?<=[a-z]))\s*Directions?:\s*[\s\S]*/i,
    /\bENTR[A-Z]*\s*TRICKS(?:\s*\d{4})?/gi,
  ];

  const cleanField = (text?: string): string => {
    if (!text) return '';
    let res = text;
    for (const pat of strayPatterns) {
      res = res.replace(pat, '');
    }
    return res.trim();
  };

  if (q.option_a) q.option_a = cleanField(q.option_a);
  if (q.option_b) q.option_b = cleanField(q.option_b);
  if (q.option_c) q.option_c = cleanField(q.option_c);
  if (q.option_d) q.option_d = cleanField(q.option_d);
  if (q.option_e) q.option_e = cleanField(q.option_e);

  return q;
}

const STOP_WORDS = new Set([
  'to', 'the', 'a', 'an', 'is', 'in', 'on', 'at', 'by', 'for', 'with', 'of',
  'and', 'or', 'as', 'be', 'it', 'this', 'that', 'these', 'those', 'from',
  'was', 'were', 'are', 'been', 'has', 'have', 'had', 'do', 'does', 'did',
  'not', 'but', 'if', 'so', 'can', 'will', 'would', 'could', 'should'
]);

/**
 * Detects whether a question is a vocabulary, synonym, antonym, or word-substitution item.
 */
export function isVocabQuestion(q: QuestionLike): boolean {
  const examId = q.exam_id || '';
  const qNum = q.question_number || 0;
  if (KNOWN_EXAM_TARGET_WORDS[examId] && KNOWN_EXAM_TARGET_WORDS[examId][qNum]) {
    return true;
  }

  const text = (q.question_text || '').toLowerCase();
  const rawText = q.question_text || '';

  // Exclude fill-in-the-blank sentence completion questions (e.g. "The factory had to ______ ...")
  if (rawText.includes('____') || rawText.includes('___') || rawText.includes('.....')) {
    return false;
  }

  const instr = (q.section_instruction || '').toLowerCase();
  const cat = (q.instruction_category || '').toLowerCase();
  const topic = (q.topic_name || '').toLowerCase();

  // Explicit parenthetical indicators in question text
  if (/\((?:synonym|antonym|antonyms|synonyms|closest\s+in\s+meaning|opposite\s+in\s+meaning)\)/i.test(text)) {
    return true;
  }

  // Section instructions indicators
  if (
    instr.includes('synonym') ||
    instr.includes('antonym') ||
    instr.includes('underlined word') ||
    instr.includes('capitalized word') ||
    instr.includes('word substitution') ||
    instr.includes('closest in meaning') ||
    instr.includes('opposite in meaning') ||
    instr.includes('keeps the meaning') ||
    instr.includes('most nearly opposite')
  ) {
    return true;
  }

  // Category indicators
  if (
    cat.includes('antonym') ||
    cat.includes('synonym') ||
    cat.includes('word substitution') ||
    cat.includes('vocabulary') ||
    topic.includes('antonym') ||
    topic.includes('synonym') ||
    topic.includes('word substitution')
  ) {
    // If it's pure sentence completion with blank, it was already excluded above
    return true;
  }

  // Phrased question indicators (e.g. "In paragraph 2, the word aggravate most likely means:")
  if (
    /(?:the word|the phrase|the term)\s+["“']?[a-z-]+["”']?\s+(?:most likely means|most closely means|means|is closest|is opposite|refers to)/i.test(text)
  ) {
    return true;
  }

  return false;
}

/**
 * Automatically discovers the target word or phrase that should be highlighted.
 */
export function detectTargetWord(q: QuestionLike): string | null {
  const examId = q.exam_id || '';
  const qNum = q.question_number || 0;

  // 1. Check curated overrides for known official exams
  if (KNOWN_EXAM_TARGET_WORDS[examId] && KNOWN_EXAM_TARGET_WORDS[examId][qNum]) {
    return KNOWN_EXAM_TARGET_WORDS[examId][qNum];
  }

  const text = q.question_text || '';
  const expl = q.explanation || '';

  // 2. Check if question already has <u>...</u> or **...** or <ins>...</ins>
  const existingUnderline = text.match(/<u>(.*?)<\/u>/i) || text.match(/<ins>(.*?)<\/ins>/i);
  if (existingUnderline) {
    return existingUnderline[1].replace(/\*\*/g, '').trim();
  }

  // 3. Check for direct phrasing in question text:
  // e.g. "the word 'aggravate' most likely means", "the word Ultimately most closely means"
  const phraseMatch = text.match(
    /(?:the word|the term|the phrase)\s+["“']?([a-zA-Z-]+)["”']?\s+(?:most likely means|most closely means|means|is closest|is opposite|refers to)/i
  );
  if (phraseMatch) {
    const candidate = phraseMatch[1].trim();
    // Validate candidate exists in text
    if (new RegExp(`\\b${escapeRegExp(candidate)}\\b`, 'i').test(text)) {
      return candidate;
    }
  }

  // 4. Extract target word from explanation:
  // Ethiopian exam explanations consistently define the word at the start:
  // e.g., "“Unabated” means...", "“Erratic” describes...", "To “devote” wealth..."
  // "“Demolished” means torn down...", 'The phrasal verb "look into" means...'
  if (expl) {
    const explCandidateRegexes = [
      /[“"'\`]([a-zA-Z\s-]{2,30})[”"'\`]\s+(?:means|refers to|is defined as|describes|is the process|is the direct opposite|is an? \w+ that|is a|is\s+closely)/i,
      /(?:the word|the phrasal verb|the phrase|to)\s+[“"'\`]?([a-zA-Z\s-]{2,30})[”"'\`]?\s+(?:means|refers to|describes)/i,
      /(?:^|\.\s*)([A-Z][a-zA-Z-]{2,25})\s+means\s+/i,
    ];

    for (const r of explCandidateRegexes) {
      const match = expl.match(r);
      if (match) {
        const candidate = match[1].trim();
        if (STOP_WORDS.has(candidate.toLowerCase())) continue;
        // Check if candidate appears in question_text (excluding parenthesis tag like (Synonym))
        const cleanText = text.replace(/\([^)]*\)/g, '');
        if (new RegExp(`\\b${escapeRegExp(candidate)}\\b`, 'i').test(cleanText)) {
          return candidate;
        }
      }
    }
  }

  // 5. Look for words matching options or common patterns
  const options = [q.option_a, q.option_b, q.option_c, q.option_d]
    .filter(Boolean)
    .map(o => o!.toLowerCase().trim());

  if (expl) {
    // If explanation says e.g. "X is a synonym for Y" or "X matches Y"
    for (const opt of options) {
      const optRegex = new RegExp(`["“'\`]?${escapeRegExp(opt)}["”'\`]?\\s+(?:is a synonym for|matches|is the closest synonym to|means|is the opposite of)\\s+["“'\`]?([a-zA-Z\s-]{2,30})["”'\`]?`, 'i');
      const match = expl.match(optRegex);
      if (match) {
        const candidate = match[1].trim();
        if (new RegExp(`\\b${escapeRegExp(candidate)}\\b`, 'i').test(text)) {
          return candidate;
        }
      }
    }
  }

  return null;
}

/**
 * Wraps the target word or phrase in `question_text` with `<u>**WORD**</u>`.
 * Both underlines the word and capitalizes it, making it distinctly stand out
 * to the student as requested.
 */
export function formatTargetWordInQuestionText(questionText: string, targetWord: string): string {
  if (!questionText || !targetWord) return questionText;

  // If already underlined, normalize to uppercase inside <u>**...**</u>
  if (questionText.includes(`<u>**${targetWord.toUpperCase()}**</u>`)) {
    return questionText;
  }

  // Replace any existing <u>targetWord</u> or <ins>targetWord</ins> or **targetWord**
  const existingUnderlineRegex = new RegExp(`(?:<u>|<ins>)(?:\\*\\*)?\\s*${escapeRegExp(targetWord)}\\s*(?:\\*\\*)?(?:<\\/u>|<\\/ins>)`, 'gi');
  if (existingUnderlineRegex.test(questionText)) {
    return questionText.replace(existingUnderlineRegex, `<u>**${targetWord.toUpperCase()}**</u>`);
  }

  // Search for the standalone word/phrase in text
  const wordRegex = new RegExp(`\\b(${escapeRegExp(targetWord)})\\b`, 'i');
  if (wordRegex.test(questionText)) {
    return questionText.replace(wordRegex, `<u>**${targetWord.toUpperCase()}**</u>`);
  }

  return questionText;
}

/**
 * Main processor: Analyzes any question, and if it is a vocabulary/synonym/antonym
 * question, ensures the target word is distinctly underlined and capitalized.
 * Also cleans any stray headers from options.
 */
export function highlightVocabQuestion<T extends QuestionLike>(q: T): T {
  // 1. Clean any stray headers or footers from options
  cleanOptionAndQuestionStrayHeaders(q);

  // 2. Check if this is a vocabulary question
  if (!isVocabQuestion(q)) {
    return q;
  }

  // 3. Detect the target word
  const targetWord = detectTargetWord(q);
  if (targetWord && q.question_text) {
    q.question_text = formatTargetWordInQuestionText(q.question_text, targetWord);
  }

  return q;
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
