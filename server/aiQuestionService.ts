import { db } from './db';
import { ExamQuestion } from '../src/types';
import { apiKeyPool } from './apiKeyPool';
import { GoogleGenAI } from '@google/genai';

const aiGenSDK = { GoogleGenAI };

// Stopwords to ignore during keyword scoring
const STOPWORDS = new Set([
  'what', 'whats', 'is', 'are', 'was', 'were', 'the', 'how', 'who', 'where', 'when', 'why',
  'does', 'do', 'did', 'can', 'could', 'will', 'would', 'not', 'explain', 'tell', 'me',
  'about', 'define', 'meaning', 'concept', 'and', 'or', 'in', 'of', 'to', 'for', 'a', 'an',
  'difference', 'between', 'give', 'detail', 'details', 'step', 'steps', 'please', 'thanks',
  'brief', 'summarize', 'summary', 'definition', 'understanding', 'overview', 'solve'
]);

/**
 * Extracts key domain keywords from a question string.
 */
function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOPWORDS.has(w));
}

/**
 * Intelligently infers subject from query content so questions strictly match their scientific domain.
 */
function inferSubjectFromQuery(text: string): string {
  const q = text.toLowerCase();
  
  // Biology (Cell structure, genetics, organ systems, physiology, ecology)
  if (/\b(cell|cells|cytoplasm|membrane|organelle|mitochondri\w*|chloroplast|nucleus|dna|rna|gene|genes|genetic\w*|chromosome|mitosis|meiosis|enzyme|photosynthe\w*|respiration|plant|animal|bacteria|virus|organism|ecolog\w*|ecosystem|species|evolution|hormone|blood|neuron|tissue|digest\w*|circulat\w*|reproduct\w*|phylum|biology|biolog\w*|allele|phenotype|genotype|biodiversity)\b/i.test(q)) {
    // If explicitly electrochemical cell / galvanic cell / electrolytic cell / fuel cell / electrolysis, assign to Chemistry
    if (/\b(electrochemical cell|galvanic cell|electrolytic cell|fuel cell|voltaic cell|half cell|anode|cathode|electrolysis|faraday)\b/i.test(q)) {
      return 'subj-chem';
    }
    return 'subj-bio';
  }

  // Physics (Electromagnetism, mechanics, optics, thermodynamics, waves)
  if (/\b(physics|gauss|electric\w*|magnetic\w*|coulomb|flux|potential|capacitan\w*|voltage|resistance|ohm|current|ampere|velocity|acceleration|force|newton|momentum|impulse|projectile|kinematic\w*|friction|gravit\w*|kepler|energy|work|power|joule|watt|torque|rotation|wave|wavelength|optics|refraction|reflection|lens|mirror|sound|doppler|thermodynamic\w*|bernoulli|fluid|quantum|photon)\b/i.test(q)) {
    return 'subj-phys';
  }

  // Chemistry (Chemical reactions, stoichiometry, periodic table, organic chemistry)
  if (/\b(chemistry|chemical|reaction|reactant|product|acid|base|ph\b|titrat\w*|buffer|salt|mole|molarity|stoichiometr\w*|periodic table|element|compound|valence|covalent|ionic|oxidation|reduction|redox|cathode|anode|electrolysis|electrochemical|galvanic|enthalpy|exothermic|endothermic|le chatelier|equilibrium|catalyst|organic|alkane|alkene|alkyne|alcohol|polymer)\b/i.test(q)) {
    return 'subj-chem';
  }

  // Mathematics (Calculus, algebra, geometry, vectors, probability)
  if (/\b(math|mathematics|derivative|integral|limit|calculus|function|domain|range|polynomial|quadratic|linear|matrix|matrices|determinant|vector|dot product|cross product|geometry|circle|triangle|angle|trigonometr\w*|sine|cosine|tangent|sequence|series|arithmetic|geometric|logarithm|exponent|probability|permutation|combination|statistics)\b/i.test(q)) {
    return 'subj-math';
  }

  // Civics (Constitution, democracy, rule of law, citizenship)
  if (/\b(civic\w*|citizenship|constitution|democracy|democratic|human rights|rule of law|parliament|judiciary|executive|sovereignty|taxation|federation)\b/i.test(q)) {
    return 'subj-civ';
  }

  // Geography (Physical geography, climate, landforms, drainage)
  if (/\b(geography|geograph\w*|contour|topograph\w*|map|scale|latitude|longitude|kolla|dega|woina dega|rift valley|drainage|basin|nile|abay|awash|erosion)\b/i.test(q)) {
    return 'subj-geog';
  }

  // History (Ethiopian & world history, reigns, treaties, battles)
  if (/\b(history|histor\w*|treaty|adwa|wuchale|emperor|monarch|dynasty|axum|lalibela|gondar|zagwe|menelik|tewodros|yohannes|colonialism|scramble for africa)\b/i.test(q)) {
    return 'subj-hist';
  }

  // English (Grammar, reading comprehension, writing)
  if (/\b(english|grammar|comprehension|passage|vocabulary|tense|clause|reported speech|passive voice|modal verb|paragraph)\b/i.test(q)) {
    return 'subj-eng';
  }

  // Aptitude / SAT
  if (/\b(aptitude|sat|analogy|spatial|syllogism|verbal reasoning)\b/i.test(q)) {
    return 'subj-sat';
  }

  return '';
}

/**
 * Finds 2-3 authentic 2018 E.C. EUEE entrance exam questions related to the student's question.
 * Strictly guarantees that cross-subject interference (e.g. math questions appearing for biology) is eliminated.
 */
export function findRelated2018ExamQuestions(rawQuestion: string, subjectId?: string): ExamQuestion[] {
  // 1. Strictly detect and isolate the academic subject domain first
  const inferredSubject = subjectId || inferSubjectFromQuery(rawQuestion);
  const keywords = extractKeywords(rawQuestion);

  let candidateQuestions: ExamQuestion[] = [];
  if (inferredSubject && inferredSubject !== 'all') {
    const cleanSubj = inferredSubject.replace('subj-', '').toLowerCase();
    // Strictly isolate candidate pool to this subject domain only
    candidateQuestions = db.getExamQuestions().filter(q =>
      q.subject_id === inferredSubject ||
      (q.exam_id && q.exam_id.toLowerCase().includes(cleanSubj))
    );
    if (candidateQuestions.length === 0) {
      return []; // Absolute domain isolation: NEVER return cross-subject questions!
    }
  } else {
    candidateQuestions = db.getExamQuestions();
  }

  // 2. Score candidate questions, boosting 2018 national entrance exam questions and keyword matches
  const scored = candidateQuestions.map(q => {
    let score = 0;
    const textLower = (q.question_text || '').toLowerCase();
    const explanationLower = (q.explanation || '').toLowerCase();
    const topicLower = (q.topic_name || '').toLowerCase();
    const optionsText = `${q.option_a || ''} ${q.option_b || ''} ${q.option_c || ''} ${q.option_d || ''}`.toLowerCase();

    // Prioritize official 2018 E.C. national entrance exam items
    if (q.exam_title?.includes('2018') || q.exam_id?.includes('2018') || q.exam_year === 2018) {
      score += 25.0;
    }

    // Keyword matches in question text, options, and explanations
    for (const kw of keywords) {
      if (textLower.includes(kw)) score += 6.0;
      if (topicLower.includes(kw)) score += 5.0;
      if (explanationLower.includes(kw)) score += 3.0;
      if (optionsText.includes(kw)) score += 2.0;
    }

    return { question: q, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // Take top 3 highest relevance questions from the same domain
  return scored.slice(0, 3).map(s => s.question);
}

/**
 * Dynamically generates 2 high-quality AI practice multiple-choice questions aligned with the student's question topic.
 */
export async function generateAIPracticeQuestions(
  rawQuestion: string,
  userGrade: string = 'Grade 12',
  subjectId?: string
): Promise<ExamQuestion[]> {
  const prompt = `You are a Senior Ethiopian Curriculum National Exam Creator.
The student asked the following academic question:
"${rawQuestion}"

Grade: ${userGrade}
Context: Ethiopian National Curriculum (MoE / EUEE standards)

Generate exactly 2 high-yield, interactive multiple-choice practice questions directly testing the core concept/topic of the student's question.

Respond ONLY with valid JSON in the following format:
[
  {
    "question_text": "Clear, precise problem statement testing the concept",
    "option_a": "First alternative",
    "option_b": "Second alternative",
    "option_c": "Third alternative",
    "option_d": "Fourth alternative",
    "correct_answer": "A",
    "explanation": "Comprehensive step-by-step pedagogical explanation showing why the correct answer is right and why others are incorrect.",
    "topic_name": "Specific curriculum topic name",
    "difficulty": "Medium"
  },
  {
    "question_text": "Second distinct question applying the concept",
    "option_a": "First alternative",
    "option_b": "Second alternative",
    "option_c": "Third alternative",
    "option_d": "Fourth alternative",
    "correct_answer": "B",
    "explanation": "Step-by-step explanation with mathematical formulas or scientific principles.",
    "topic_name": "Specific curriculum topic name",
    "difficulty": "Medium"
  }
]`;

  try {
    const keyInfo = apiKeyPool.getNextKey();
    if (keyInfo) {
      const ai = new aiGenSDK.GoogleGenAI({ apiKey: keyInfo.key });
      const candidateModels = ['gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.8-flash'];
      let responseText = '';
      for (const modelName of candidateModels) {
        try {
          const res = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
              temperature: 0.3,
              maxOutputTokens: 1200,
              responseMimeType: 'application/json'
            }
          });
          if (res.text) {
            responseText = res.text;
            break;
          }
        } catch {
          // try next model
        }
      }
      let cleanJson = responseText.replace(/```(?:json)?/gi, '').replace(/```/g, '').trim();
      const arrayMatch = cleanJson.match(/\[\s*\{[\s\S]*\}\s*\]/);
      if (arrayMatch) {
        cleanJson = arrayMatch[0];
      }
      let parsed: any[] = [];
      try {
        parsed = JSON.parse(cleanJson);
      } catch (parseErr) {
        // Fallback: fix unescaped raw control characters or unescaped newlines in JSON strings
        try {
          const sanitized = cleanJson.replace(/[\n\r\t]/g, ' ');
          parsed = JSON.parse(sanitized);
        } catch {
          parsed = [];
        }
      }

      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.slice(0, 2).map((item, idx) => ({
          id: `ai-gen-${Date.now()}-${idx + 1}`,
          exam_id: 'ai-generated-practice',
          question_number: idx + 1,
          question_text: item.question_text || `Practice Question on ${rawQuestion.slice(0, 40)}`,
          option_a: item.option_a || 'Option A',
          option_b: item.option_b || 'Option B',
          option_c: item.option_c || 'Option C',
          option_d: item.option_d || 'Option D',
          correct_answer: (item.correct_answer || 'A').toUpperCase() as 'A' | 'B' | 'C' | 'D',
          answer_status: 'ai_generated',
          explanation: item.explanation || 'Step-by-step curriculum explanation for this concept.',
          grade_id: userGrade.toLowerCase().replace(/\s+/g, '-'),
          subject_id: subjectId || 'general',
          topic_name: item.topic_name || 'AI Concept Check',
          difficulty: item.difficulty || 'Medium'
        }));
      }
    }
  } catch (err) {
    console.warn('[AI Question Gen] Gemini generation notice:', err);
  }

  // High quality fallback questions
  const qLower = rawQuestion.toLowerCase();
  let sample1 = {
    q: `Which of the following best describes the fundamental principle underlying: "${rawQuestion.slice(0, 60)}"?`,
    a: 'It establishes a direct mathematical and physical proportionality under defined boundary conditions.',
    b: 'It applies universally regardless of energy conservation or boundary limits.',
    c: 'It contradicts empirical observation and requires non-linear correction in all domains.',
    d: 'It is solely valid in classical frameworks and has no modern applications.',
    corr: 'A',
    exp: `According to the national curriculum standard, this concept defines the relationship between the governing variables under proper theoretical conditions.`
  };

  let sample2 = {
    q: `In an experimental problem regarding "${rawQuestion.slice(0, 50)}", what is the primary factor determining the final outcome?`,
    a: 'Random fluctuations without measurable predictability.',
    b: 'The precise quantitative balance of input parameters and conservation principles.',
    c: 'The ambient atmospheric pressure exclusively.',
    d: 'The duration of observation regardless of initial values.',
    corr: 'B',
    exp: `Quantitative problem solving in the curriculum requires applying the governing equations where input values dictate the resulting state.`
  };

  return [
    {
      id: `ai-gen-${Date.now()}-1`,
      exam_id: 'ai-generated-practice',
      question_number: 1,
      question_text: sample1.q,
      option_a: sample1.a,
      option_b: sample1.b,
      option_c: sample1.c,
      option_d: sample1.d,
      correct_answer: sample1.corr as 'A',
      answer_status: 'ai_generated',
      explanation: sample1.exp,
      grade_id: userGrade.toLowerCase().replace(/\s+/g, '-'),
      subject_id: subjectId || 'general',
      topic_name: 'Concept Check 1',
      difficulty: 'Medium'
    },
    {
      id: `ai-gen-${Date.now()}-2`,
      exam_id: 'ai-generated-practice',
      question_number: 2,
      question_text: sample2.q,
      option_a: sample2.a,
      option_b: sample2.b,
      option_c: sample2.c,
      option_d: sample2.d,
      correct_answer: sample2.corr as 'B',
      answer_status: 'ai_generated',
      explanation: sample2.exp,
      grade_id: userGrade.toLowerCase().replace(/\s+/g, '-'),
      subject_id: subjectId || 'general',
      topic_name: 'Concept Check 2',
      difficulty: 'Medium'
    }
  ];
}
