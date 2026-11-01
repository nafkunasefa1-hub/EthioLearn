import { formatTablesInText } from './tableFormatter';
import { cleanOptionAndQuestionStrayHeaders, highlightVocabQuestion } from './vocabWordHighlighter';
import { deconcatenateEnglishText } from './wordSegmenter';

/**
 * Intelligent word de-concatenation and spacing restoration for OCR / PDF extracted exam texts.
 * Restores missing spaces after punctuation, fixes glued words, and formats parenthetical citations.
 */
export function restoreEthiopianExamWordSpacing(text: string): string {
  if (!text) return '';
  let s = deconcatenateEnglishText(text);

  // 1. Punctuation spacing: comma, semicolon, colon, question mark, exclamation mark followed by letter
  s = s.replace(/([,\;\:\?\!])([a-zA-Z])/g, '$1 $2');
  // Period followed by capital letter (except e.g., i.e., etc., vs., Dr., Mr.)
  s = s.replace(/(?<!\b(?:e\.g|i\.e|etc|vs|p|pp|Dr|Mr|Mrs|Ms|Prof|fig))\.\s*([A-Z])/g, '. $1');
  // Number followed by letter or letter followed by parenthesis
  s = s.replace(/([a-zA-Z0-9])\s*\(([a-zA-Z0-9])/g, '$1 ($2');
  s = s.replace(/\)\s*([a-zA-Z0-9])/g, ') $1');
  s = s.replace(/,\s*"([a-zA-Z])/g, '," $1');
  s = s.replace(/"([a-zA-Z0-9])/g, '" $1');
  s = s.replace(/([a-zA-Z0-9])"/g, '$1 "');

  // 2. High-frequency glued phrases in Ethiopian examinations
  const phraseReplacements: Array<[RegExp, string]> = [
    [/accordingtoparagraph/gi, 'according to paragraph '],
    [/accordingtothepassage/gi, 'according to the passage '],
    [/Whichoneofthefollowingstatementsistrue/gi, 'Which one of the following statements is true '],
    [/Whichoneofthefollowing/gi, 'Which one of the following '],
    [/Whichofthefollowing/gi, 'Which of the following '],
    [/oneofthefollowing/gi, 'one of the following '],
    [/ofthefollowing/gi, 'of the following '],
    [/Whatdoestheexpression/gi, 'What does the expression '],
    [/Whatdoestheword/gi, 'What does the word '],
    [/Whatpurposedoesthewriter/gi, 'What purpose does the writer '],
    [/referstotheword/gi, 'refers to the word '],
    [/referstothe/gi, 'refers to the '],
    [/refersto/gi, 'refers to '],
    [/referto\?/gi, 'refer to?'],
    [/referto\b/gi, 'refer to '],
    [/closestinmeaning/gi, 'closest in meaning '],
    [/canbesynonymouswith/gi, 'can be synonymous with '],
    [/bestreplacestheword/gi, 'best replaces the word '],
    [/bestdescribesthispassage/gi, 'best describes this passage '],
    [/Thewriter criticizes/gi, 'The writer criticizes '],
    [/Thewriter/gi, 'The writer '],
    [/andblamesthemfortheirsituation/gi, 'and blames them for their situation'],
    [/Wordslike/gi, 'Words like '],
    [/preferalifeofnoresponsibility/gi, 'prefer a life of no responsibility'],
    [/showdisapproval/gi, 'show disapproval'],
    [/notappreciation/gi, 'not appreciation'],
    [/admitanuncomfortabletruth/gi, 'admit an uncomfortable truth: '],
    [/manyhomelesschoosetheirlifestyle/gi, 'many homeless choose their lifestyle.'],
    [/fearofrevealingthisunpopularcause/gi, 'fear of revealing this unpopular cause'],
    [/condemninggovernment/gi, 'condemning government'],
    [/orinformingthepublic/gi, 'or informing the public'],
    [/supporttheirclaim/gi, 'support their claim '],
    [/manyhomelesspeopleareresponsiblefortheirownplight/gi, 'many homeless people are responsible for their own plight.'],
    [/therootcause/gi, 'the root cause '],
    [/notpoliticalinvolvement/gi, 'not political involvement '],
    [/socialdisintegration/gi, 'social disintegration '],
    [/unwell—oftenperceivedassuspiciousoruntrustworthy/gi, 'unwell — often perceived as suspicious or untrustworthy.'],
    [/homelessstate/gi, 'homeless state.'],
    [/from the previous sentence/gi, 'from the previous sentence: '],
    [/Not everyonewhofindshimselfoutofajobandinthestreetistherebecausehewantstobe/gi, 'Not everyone who finds himself out of a job and in the street is there because he/she wants to be.'],
    [/For every persontemporarilyhomeless/gi, 'For every person temporarily homeless, '],
    [/though,therearemanywhoarechronicallyso/gi, 'though, there are many who are chronically so '],
    [/Thewriter argues that/gi, 'The writer argues that '],
    [/homeless individuals bear the greatest blame/gi, 'homeless individuals bear the greatest blame '],
    [/fortheirtroubles/gi, 'for their troubles '],
    [/personal responsibility over systemic factors/gi, 'personal responsibility over systemic factors.'],
    [/bypooragriculturalpractices/gi, 'by poor agricultural practices. '],
    [/soil degradation has been aggravated/gi, 'soil degradation has been aggravated '],
    [/These include improper terracing/gi, 'These include improper terracing, '],
    [/the cultivation of steep and easily eroded hillsides/gi, 'the cultivation of steep and easily eroded hillsides'],
    [/desertion implies abandonment andbarrenness/gi, 'desertion implies abandonment and barrenness, '],
    [/fitting the context of land rendered useless/gi, 'fitting the context of land rendered useless.'],
    [/Aggravated meansmademoresevere/gi, 'Aggravated means made more severe. '],
    [/meaningthesepracticesworsenedtheproblem/gi, 'meaning these practices worsened the problem.'],
    [/suggests addition,not intensification/gi, 'suggests addition, not intensification.'],
    [/severe erosion causes soil to be/gi, 'severe erosion causes soil to be '],
    [/makinglandincreasingly poor in quality/gi, 'making land increasingly poor in quality '],
    [/impossible to reclaim/gi, 'impossible to reclaim. '],
    [/Trees cannot survive because the soil is too shallow for roots/gi, 'Trees cannot survive because the soil is too shallow for roots.'],
    [/AtoLemmaandWiroMuluhavefourchildren/gi, 'Ato Lemma and W/ro Mulu have four children.'],
    [/AtoLemmaisathirty-year-oldpersoninmycommunity/gi, 'Ato Lemma is a thirty-year-old person in my community.'],
    [/HiswifewizeroMulu,isyoungerthanhimby2years/gi, 'His wife wizero Mulu, is younger than him by 2 years.'],
    [/Threeoftheirchildren are girls/gi, 'Three of their children are girls.'],
    [/nexttoourEnglishteacherismymother/gi, 'next to our English teacher is my mother.'],
    [/lifeimprisonmentinseveralcountries/gi, 'life imprisonment in several countries.']
  ];

  for (const [re, repl] of phraseReplacements) {
    s = s.replace(re, repl);
  }

  // 3. Normalization
  s = s.replace(/[ \t]{2,}/g, ' ');
  return s.trim();
}

/**
 * Core text sanitization utility for Ethiopian National Examinations,
 * Model Exams, and curriculum textbooks.
 *
 * Strips out watermark text, running headers/footers, promotional app download
 * links (such as "Entrance Tricks APP", "ESSLCE Online Exam", etc.), page numbers,
 * leaked section headers, and OCR artifacts.
 */
export function sanitizeExamText(text: string | undefined | null): string {
  if (!text || typeof text !== 'string') return '';
  let s = text;

  // 1. Line-anchored document-level running headers, footers, and watermarks
  s = s.replace(/(?:^|\n|\r)[ \t]*(?:\d{4}\s+)?(?:Biology|Chemistry|Physics|Mathematics|English|Aptitude|SAT|Civics|Economics|History|Geography|Natural|Social)?\s*(?:First|Second|1st|2nd)?\s*Round\s*(?:ESSLCE|EUEE)\s*(?:Online\s*Exam|National\s*Exam)[^\n\r]*/gi, '');
  s = s.replace(/(?:^|\n|\r)[ \t]*(?:ESSLCE|EUEE)\s*(?:Online\s*Exam|National\s*Exam)[^\n\r]*/gi, '');
  s = s.replace(/(?:^|\n|\r)[ \t]*Download\s+Entrance\s+Tricks(?:\s+mobile)?\s+APP[^\n\r]*/gi, '');
  s = s.replace(/(?:^|\n|\r)[ \t]*Download\s+Entrance\s+Tricks[^\n\r]*/gi, '');
  s = s.replace(/(?:^|\n|\r)[ \t]*Entrance\s+Tricks(?:\s+mobile)?\s+APP[^\n\r]*/gi, '');
  s = s.replace(/(?:^|\n|\r)[ \t]*Entrance\s+Tricks[^\n\r]*/gi, '');
  s = s.replace(/(?:^|\n|\r)[ \t]*Download\s+[^\n\r]*?\s+APP[^\n\r]*/gi, '');
  s = s.replace(/(?:^|\n|\r)[ \t]*(?:Page\s*\d+\s*)+/gi, '');
  s = s.replace(/(?:^|\n|\r)[ \t]*Page\s+\d+\s+of\s+\d+[^\n\r]*/gi, '');
  s = s.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  s = s.replace(/Telegram\s*channel\s*@?[a-zA-Z0-9_]+/gi, '');
  s = s.replace(/Youtube\s*@?[a-zA-Z0-9_]+/gi, '');
  s = s.replace(/(?:Telegram\s*:\s*|t\.me\/)@?[a-zA-Z0-9_]+/gi, '');
  s = s.replace(/@entrance_tricks/gi, '');
  s = s.replace(/ENTRANCE\s*TRICKS/gi, '');
  s = s.replace(/(?:\d{1,3}\.\s*)?\(Omitted\s*[-–—]?\s*Promotional\s*message[^\)]*\)/gi, '');
  s = s.replace(/\(Promotional\s*message[^\)]*\)/gi, '');

  // 2. Inline / mid-sentence watermark and header phrases (e.g. when page breaks split a question)
  s = s.replace(/(?:\d{4}\s+)?(?:Biology|Chemistry|Physics|Mathematics|English|Aptitude|SAT|Civics|Economics|History|Geography|Natural|Social)?\s*(?:First|Second|1st|2nd)?\s*Round\s*(?:ESSLCE|EUEE)\s*Online\s*Exam/gi, '');
  s = s.replace(/Download\s+Entrance\s+Tricks(?:\s+mobile)?\s+APP(?:\s+Page\s*\d+)?/gi, '');
  s = s.replace(/Entrance\s+Tricks\s+APP(?:\s+Page\s*\d+)?/gi, '');
  s = s.replace(/Download\s+Entrance\s+Tricks/gi, '');
  s = s.replace(/Entrance\s+Tricks/gi, '');
  s = s.replace(/Page\s+\d+\s+(?:Page\s+\d+)?/gi, '');
  s = s.replace(/\bPage\s+\d+\b/gi, '');

  // 3. Spacing restoration
  s = restoreEthiopianExamWordSpacing(s);

  // 4. Normalize spacing & excessive blank lines
  s = s.replace(/[ \t]{2,}/g, ' ');
  s = s.replace(/\n\s*\n\s*\n+/g, '\n\n');
  return s.trim();
}

/**
 * Sanitizes all string fields of a question object in-place or returns the cleaned question.
 * If option_a is a generic placeholder and question_text contains embedded choices (a., b., c., d.),
 * it will accurately extract and populate the options while cleaning the question body.
 * Automatically identifies vocabulary target words and formats them distinctly (underlined & capitalized),
 * strips stray headers, and formats markdown tables.
 */
export function sanitizeQuestionFields<T extends {
  id?: string;
  exam_id?: string;
  question_number?: number;
  question_text?: string;
  option_a?: string;
  option_b?: string;
  option_c?: string;
  option_d?: string;
  option_e?: string;
  explanation?: string;
  section_instruction?: string;
  instruction_category?: string;
  topic_name?: string;
  reading_passage?: string;
}>(q: T): T {
  // If options are missing or generic placeholders, check if question_text has embedded options
  if (
    q.question_text &&
    (!q.option_a || q.option_a.trim().toLowerCase() === 'option a' || q.option_a.trim().length === 0)
  ) {
    const text = q.question_text;
    const optMatch = text.match(/(?:^|\n|\r|\s{2,})([a-dA-D])[\.\)]\s+([\s\S]*)/);
    if (optMatch && optMatch.index !== undefined) {
      const optBlock = text.slice(optMatch.index);
      const qBody = text.slice(0, optMatch.index).trim();

      const aM = optBlock.match(/(?:^|\n|\r|\s{2,})[Aa][\.\)]\s+([\s\S]*?)(?=(?:(?:\n|\r|\s{2,})[Bb][\.\)]\s+|$))/);
      const bM = optBlock.match(/(?:^|\n|\r|\s{2,})[Bb][\.\)]\s+([\s\S]*?)(?=(?:(?:\n|\r|\s{2,})[Cc][\.\)]\s+|$))/);
      const cM = optBlock.match(/(?:^|\n|\r|\s{2,})[Cc][\.\)]\s+([\s\S]*?)(?=(?:(?:\n|\r|\s{2,})[Dd][\.\)]\s+|$))/);
      const dM = optBlock.match(/(?:^|\n|\r|\s{2,})[Dd][\.\)]\s+([\s\S]*?)(?=(?:(?:\n|\r|\s{2,})[Ee][\.\)]\s+|$))/);
      const eM = optBlock.match(/(?:^|\n|\r|\s{2,})[Ee][\.\)]\s+([\s\S]*?)$/);

      if (aM && bM && cM && dM) {
        q.question_text = qBody;
        q.option_a = aM[1].trim();
        q.option_b = bM[1].trim();
        q.option_c = cM[1].trim();
        q.option_d = dM[1].trim();
        if (eM) q.option_e = eM[1].trim();
      }
    }
  }

  // 1. Clean leaked stray section and passage headers from options
  cleanOptionAndQuestionStrayHeaders(q);

  // 2. Identify and distinctly format target vocabulary words (underlined & capitalized)
  highlightVocabQuestion(q);

  // 3. Format tables and sanitize exam texts
  if (q.question_text) {
    q.question_text = formatTablesInText(sanitizeExamText(q.question_text));
  }
  if (q.option_a) q.option_a = sanitizeExamText(q.option_a);
  if (q.option_b) q.option_b = sanitizeExamText(q.option_b);
  if (q.option_c) q.option_c = sanitizeExamText(q.option_c);
  if (q.option_d) q.option_d = sanitizeExamText(q.option_d);
  if (q.option_e) q.option_e = sanitizeExamText(q.option_e);
  if (q.explanation) q.explanation = sanitizeExamText(q.explanation);
  if (q.section_instruction) q.section_instruction = sanitizeExamText(q.section_instruction);
  if (q.reading_passage) {
    q.reading_passage = formatTablesInText(sanitizeExamText(q.reading_passage));
  }
  return q;
}
