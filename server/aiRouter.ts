import { GoogleGenAI } from '@google/genai';
const aiGenSDK = { GoogleGenAI };
import { db } from './db';
import { retrieveRAGContext, detectSubjectDomain, extractCoreKeywords, GENERIC_STRUCTURAL_MODIFIERS } from './ragEngine';
import { AIExplanationResult, AIResponseSource } from '../src/types';
import { apiKeyPool } from './apiKeyPool';
import { getRecommendedModelList } from './modelCascade';
import { smartAICache } from './smartCache';
import { requestCoalescer } from './requestCoalescer';
import { concurrencyLimiter } from './concurrencyLimiter';
import { generateComprehensiveCurriculumAnswer } from './curriculumAIExpert';
import { getScientificIllustrationForQuestion, fetchDiagramForKeywords } from './scientificIllustrationService';
import { findRelated2018ExamQuestions, generateAIPracticeQuestions } from './aiQuestionService';

// Normalized question hashing for backward compatibility
export function normalizeQuestion(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}

// Clean forbidden negative phrases while preserving diagrams, tables, and flowcharts
function sanitizeEducationalText(text: string): string {
  if (!text) return '';
  return text
    .replace(/(?:note\s*:?\s*)?your\s+(?:text)?book\s+(?:does\s*not|doesn't|doesnt)\s+(?:contain|mention|cover|include)\s+[^\n.]+[.!?]?/gi, '')
    .replace(/(?:note\s*:?\s*)?this\s+(?:is\s+not|isn't)\s+(?:found|covered|mentioned|included)\s+in\s+your\s+(?:text)?book[.!?]?/gi, '')
    .replace(/(?:note\s*:?\s*)?the\s+(?:provided\s+)?(?:text)?book\s+(?:does\s*not|doesn't)\s+(?:contain|have)\s+[^\n.]+[.!?]?/gi, '')
    .replace(/according\s+to\s+the\s+provided\s+textbook(?:\s+context)?(?:,\s*)?/gi, '')
    .replace(/based\s+on\s+the\s+provided\s+textbook(?:\s+context)?(?:,\s*)?/gi, '')
    .trim();
}

/**
 * FORCE-CONTEXT VALIDATION STEP:
 * Validates, cleans, and structures retrieved OCR textbook context.
 * Guarantees that the LLM is supplied with valid, structured textbook context
 * containing Grade, Subject, Book Title, Chapter, Page Number, and extracted OCR text.
 */
function validateAndForceContext(
  rawQuestion: string,
  gradeId: string,
  subjectId: string,
  userGrade: string
): {
  verifiedSources: AIResponseSource[];
  hasTextbook: boolean;
  formattedContext: string;
  forcedSubject: string;
  rag: ReturnType<typeof retrieveRAGContext>;
} {
  const domain = detectSubjectDomain(rawQuestion, subjectId);
  const coreKeywords = extractCoreKeywords(rawQuestion);
  const rag = retrieveRAGContext(rawQuestion, gradeId, subjectId);

  // 1. Filter sources for strict subject alignment (No Civics for Physics, No Math for Biology)
  let verifiedSources: AIResponseSource[] = rag.sources.filter(s => {
    const bookLower = s.book_title.toLowerCase();
    const subjLower = (s.subject_name || '').toLowerCase();
    const isCivics = s.subject_id === 'subj-civics' || s.subject_id === 'subj-civ' || bookLower.includes('civic') || bookLower.includes('citizenship');

    if (domain === 'phys') {
      if (isCivics) return false;
      return subjLower.includes('phys') || bookLower.includes('physics');
    }
    if (domain === 'chem') {
      if (isCivics) return false;
      return subjLower.includes('chem') || bookLower.includes('chemistry');
    }
    if (domain === 'bio') {
      if (isCivics) return false;
      return subjLower.includes('bio') || bookLower.includes('biology');
    }
    if (domain === 'math') {
      if (isCivics) return false;
      return subjLower.includes('math') || bookLower.includes('math');
    }
    if (domain === 'cs_ai') {
      if (isCivics) return false;
      return subjLower.includes('information') || bookLower.includes('information technology') || bookLower.includes('computer');
    }
    if (domain === 'eng') {
      if (isCivics) return false;
      return subjLower.includes('eng') || bookLower.includes('english');
    }
    if (domain === 'social') {
      return ['subj-geog', 'subj-hist', 'subj-econ', 'subj-civics', 'subj-civ'].includes(s.subject_id) ||
        bookLower.includes('geography') || bookLower.includes('history') || bookLower.includes('economics') || bookLower.includes('civic');
    }
    // In general domain, never attach Civics unless query is explicitly civic
    if (isCivics) return false;
    return true;
  });

  // 2. Distinctive Keyword relevance check:
  // Must match at least one distinctive topical term (e.g. 'gauss'), NOT just generic modifiers like 'law'
  const distinctive = coreKeywords.filter(k => !GENERIC_STRUCTURAL_MODIFIERS.has(k));
  const keywordsToCheck = distinctive.length > 0 ? distinctive : coreKeywords;

  verifiedSources = verifiedSources.filter(source => {
    const text = `${source.passage_snippet} ${source.chapter_title} ${source.book_title}`.toLowerCase();
    return keywordsToCheck.some(kw => {
      return kw.length <= 3 ? new RegExp(`\\b${kw}\\b`, 'i').test(text) : text.includes(kw);
    });
  });

  const hasTextbook = verifiedSources.length > 0;

  // If no authentic textbook match exists, DO NOT inject random fallback sources!
  // Keeping verifiedSources empty prevents confusing students with false textbook citations.
  if (!hasTextbook) {
    verifiedSources = [];
  }

  // Sanitize and format the validated OCR snippets
  const formattedContext = verifiedSources
    .map((s, idx) => {
      const cleanSnippet = s.passage_snippet
        .replace(/[\r\n]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      return `--- TEXTBOOK EXCERPT #${idx + 1} ---
[Grade: ${s.grade_name || userGrade} | Subject: ${s.subject_name || domain.toUpperCase()} | Book: "${s.book_title}" | Chapter: "${s.chapter_title}" | Page: ${s.printed_page_number}]
Extracted Textbook OCR Text:
"${cleanSnippet}"`;
    })
    .join('\n\n');

  let forcedSubject = domain.toUpperCase();
  if (domain === 'cs_ai') {
    const qLower = rawQuestion.toLowerCase();
    if (qLower.includes('machine learning')) forcedSubject = 'Machine Learning';
    else if (qLower.includes('deep learning')) forcedSubject = 'Deep Learning';
    else if (qLower.includes('artificial intelligence')) forcedSubject = 'Artificial Intelligence';
    else forcedSubject = 'Computer Science & AI';
  }

  return {
    verifiedSources,
    hasTextbook: verifiedSources.length > 0,
    formattedContext: formattedContext || 'No specific textbook excerpt currently uploaded for this exact topic.',
    forcedSubject,
    rag
  };
}

export async function askAITutor(
  rawQuestion: string,
  user: { id: string; email?: string; phone_number?: string; grade: string; grade_id?: string; is_premium: boolean },
  subjectId?: string
): Promise<AIExplanationResult> {
  const gradeId = user.grade_id || 'grade-10';
  const normSubject = subjectId === 'subj-physics' ? 'subj-phys' : (subjectId || 'all');
  const canonicalKey = smartAICache.canonicalize(rawQuestion, gradeId, normSubject);

  // 1. FAST TIER: Multi-Tier Cache Check (DISABLED TO ENSURE FRESH GEMINI RESPONSES)
  /*
  const cached = smartAICache.get(canonicalKey);
  if (cached) {
    // ... cache logic ...
  }
  */

  // 2. CONCURRENCY COALESCING
  return requestCoalescer.do<AIExplanationResult>(canonicalKey, async () => {
    // Re-check cache DISABLED
    // const doubleCheck = smartAICache.get(canonicalKey);
    // if (doubleCheck) return doubleCheck;

    // 3. REBUILT: ENHANCED PROMPTING & LOGIC
    const contextInfo = validateAndForceContext(rawQuestion, gradeId, normSubject, user.grade);

    const systemInstruction = `You are an advanced, elite AI Academic Specialist and Senior Ethiopian Curriculum Tutor. Your sole purpose is to provide students with the absolute best, most comprehensive, mathematically rigorous, and visually rich educational explanations.

Execute your responses using the following strict directives:

### 1. Concrete & Direct Core Answer (No Filler)
- Answer the student's question immediately in the first sentence with zero robotic introductory filler (never start with "This concept involves..." or "In the Ethiopian curriculum...").
- Deliver a clear, definitive, and accurate summary.

### 2. Comprehensive Deep Dive Breakdown
- Break complex subjects into multi-layered explanations using logical subheadings and clear bullet points.
- Provide exhaustive pedagogical depth with real-world examples and practical applications.

### 3. Markdown Tables (Mandatory for Comparisons & Structured Data)
- Whenever comparing concepts, summarizing chemical reactions, classifying species/structures, listing physical quantities/units, or detailing mathematical formulas, YOU MUST provide a clean, beautifully formatted Markdown Table.

### 4. Diagrams, Flowcharts & Visuals (Mandatory when Important)
- When illustrating processes, cycles (e.g., carbon cycle, cardiac cycle, mitosis), causal sequences, or algorithms, PROVIDE a clear text-based flowchart or ASCII process diagram (e.g., Step 1 ──> Step 2 ──> Step 3).
- When physical, biological, chemical, or geometric structures are central (e.g., cells, heart, neuron, atom, DNA, chloroplast, ray optics, projectile trajectory, parabola), include a descriptive structural diagram block or visual breakdown.
- ALWAYS supply relevant diagram keywords on the DIAGRAM_KEYWORDS line so authentic scientific illustrations render automatically.

### 5. Beautiful Mathematical Formatting
- Standard LaTeX notation is mandatory for ALL mathematical equations and physical formulas ($inline$ and $$block$$).
- Never use plain text approximations like x^2, /frac, or sqrt().

### 6. References at the End
- Note: Genuine textbook citations (book title, chapter, exact printed page number, and OCR excerpt) and 2018 EUEE past exam questions are automatically attached by the system at the end of the lesson. Focus your response on the complete conceptual explanation, tables, and visual diagrams.

### OUTPUT STRUCTURE:
DIAGRAM_KEYWORDS: <comma-separated relevant keywords like chloroplast, heart, neuron, optics, parabola, cell, projectile, etc.>

ANSWER:
**Direct Core Answer**: <Definitive, punchy 2-3 sentence core answer to the query without fluff.>

EXPLANATION:
### Detailed Conceptual Breakdown
<Comprehensive main explanation with deep educational rigor.>

### Structured Comparison / Key Formulas
<Markdown table comparing key aspects, formulas, or classification properties.>

### Process Flow / Diagram
<Visual text flowchart, step diagram, or descriptive illustration.>

### Real-World Applications & Examples
<Concrete, relatable practical examples.>

### Key Takeaways
- <Critical takeaway 1>
- <Critical takeaway 2>
- <Critical takeaway 3>`;

    const userPrompt = `[STUDENT PROFILE]
Grade: ${user.grade}
Subject Context: ${contextInfo.forcedSubject}
Question: "${rawQuestion}"

[TEXTBOOK CONTEXT]
${contextInfo.formattedContext}

[DIRECTIVE]
Provide an engaging, accurate, and detailed tutorial with tables and diagrams following the strict formatting layout.`;


    let finalAnswer = '';
    let finalExplanation = '';
    let parsedKeywords: string[] = [];
    let usedProvider = 'local_curriculum';

    // 4. ATTEMPT MULTI-KEY & MULTI-MODEL CASCADE (Identical robust logic to Chatbot)
    const totalKeysAvailable = apiKeyPool.getStats().total_keys || 1;
    const maxKeyAttempts = Math.min(6, Math.max(1, totalKeysAvailable));
    const candidateModels = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.5-flash'];

    let releaseTicket: (() => void) | null = null;
    try {
      releaseTicket = await concurrencyLimiter.acquire();

      keyLoop: for (let attempt = 0; attempt < maxKeyAttempts; attempt++) {
        const keyInfo = apiKeyPool.getNextKey();
        if (!keyInfo) break;

        const ai = new aiGenSDK.GoogleGenAI({ apiKey: keyInfo.key });

        for (const modelName of candidateModels) {
          const startTime = Date.now();
          try {
            console.log(`[AI Tutor] Attempting ${modelName} on Key #${keyInfo.index}...`);
            const textOutput = await executeGeminiCall(ai, modelName, userPrompt, systemInstruction, 25000);

            if (textOutput && textOutput.trim()) {
              const parsed = parseAIOutput(textOutput);
              finalAnswer = sanitizeEducationalText(parsed.answer);
              finalExplanation = sanitizeEducationalText(parsed.explanation);
              parsedKeywords = parsed.diagramKeywords;
              usedProvider = `gemini:${modelName} (Key #${keyInfo.index})`;
              apiKeyPool.reportResult(keyInfo.key, true, 200, Date.now() - startTime);
              console.log(`[AI Tutor] Success with ${modelName} (Key #${keyInfo.index}) in ${Date.now() - startTime}ms`);
              break keyLoop;
            }
          } catch (modelErr: any) {
            const status = modelErr?.status || modelErr?.code || 500;
            const msg = modelErr?.message || '';
            console.warn(`[AI Tutor] Model ${modelName} on key #${keyInfo.index} failed (${status}): ${msg.slice(0, 100)}`);
            apiKeyPool.reportResult(keyInfo.key, false, status, Date.now() - startTime, msg);
          }
        }
      }
    } catch (concurrencyErr: any) {
      console.warn('[AI Tutor] Concurrency queue notice:', concurrencyErr?.message);
    } finally {
      if (releaseTicket) releaseTicket();
    }

    // 5. ZERO-DROP CURRICULUM AI EXPERT FALLBACK (Never crash, 100% reliable)
    if (!finalAnswer) {
      const expertResult = generateComprehensiveCurriculumAnswer(rawQuestion, contextInfo.verifiedSources, user.grade, subjectId);
      finalAnswer = sanitizeEducationalText(expertResult.answer);
      finalExplanation = sanitizeEducationalText(expertResult.explanation);
      usedProvider = 'ethiopian_curriculum_expert_engine';
    }

    // 6. DIAGRAM FETCHING HELPER: Fetch/render relevant diagrams based on AI keywords + question
    const resolvedDiagram = fetchDiagramForKeywords(parsedKeywords, rawQuestion) || getScientificIllustrationForQuestion(rawQuestion);

    // 7. RELATED 2018 EUEE ENTRANCE EXAM QUESTIONS & AI GENERATED PRACTICE PROBLEMS
    const related2018ExamQuestions = findRelated2018ExamQuestions(rawQuestion, subjectId);
    let aiPracticeQuestions: any[] = [];
    try {
      aiPracticeQuestions = await generateAIPracticeQuestions(rawQuestion, user.grade, subjectId);
    } catch (qErr) {
      console.warn('[AI Tutor] AI questions generation warning:', qErr);
    }

    const result: AIExplanationResult = {
      id: `ai-resp-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      question: rawQuestion,
      answer: finalAnswer,
      explanation: finalExplanation,
      source_level: contextInfo.hasTextbook ? 'textbook' : 'general_ai',
      has_textbook_reference: contextInfo.hasTextbook,
      sources: contextInfo.verifiedSources,
      related_exam_questions: related2018ExamQuestions.length > 0 ? related2018ExamQuestions : (contextInfo.rag?.related_exam_questions || []),
      ai_generated_questions: aiPracticeQuestions,
      study_recommendation: contextInfo.hasTextbook ? contextInfo.rag.study_recommendation : undefined,
      cached: false,
      created_at: new Date().toISOString(),
      diagram_svg: resolvedDiagram?.svg,
      diagram_caption: resolvedDiagram?.caption,
      diagram_keywords: parsedKeywords,
      diagrams: resolvedDiagram ? [
        {
          svg: resolvedDiagram.svg,
          caption: resolvedDiagram.caption,
          keyword: parsedKeywords[0] || resolvedDiagram.topic
        }
      ] : []
    };

    // 6. STORE IN SMART CACHE & DB (DISABLED FOR TROUBLESHOOTING)
    // smartAICache.set(canonicalKey, result);

    return result;
  });
}

async function executeGeminiCall(
  ai: GoogleGenAI,
  modelName: string,
  userPrompt: string,
  systemInstruction: string,
  timeoutMs: number = 25000
): Promise<string | null> {
  const timeoutPromise = new Promise<null>((_, reject) =>
    setTimeout(() => reject(new Error('GEMINI_TIMEOUT')), timeoutMs)
  );

  const callPromise = ai.models.generateContent({
    model: modelName,
    contents: userPrompt,
    config: {
      systemInstruction,
      maxOutputTokens: 2500,
      temperature: 0.4
    }
  }).then(res => res.text || null);

  return Promise.race([callPromise, timeoutPromise]);
}

function parseAIOutput(text: string): { answer: string; explanation: string; diagramKeywords: string[] } {
  const cleanSection = (s: string) =>
    s
      .replace(/^[-*—\s#]+/, '')
      .replace(/[-*—\s#]+$/, '')
      .trim();

  // Extract DIAGRAM_KEYWORDS if present
  let diagramKeywords: string[] = [];
  const diagMatch = text.match(/(?:#{1,4}\s*|\*{1,2})?DIAGRAM_KEYWORDS:?\*{0,2}\s*([^\n]+)/i);
  if (diagMatch && diagMatch[1]) {
    diagramKeywords = diagMatch[1]
      .split(',')
      .map(k => k.trim().toLowerCase())
      .filter(Boolean);
  }

  // Remove the DIAGRAM_KEYWORDS line from text before parsing answer/explanation
  const cleanText = text.replace(/(?:#{1,4}\s*|\*{1,2})?DIAGRAM_KEYWORDS:?\*{0,2}\s*[^\n]+\n?/gi, '');

  const ansMatch = cleanText.match(/(?:#{1,4}\s*|\*{1,2})?ANSWER:?\*{0,2}\s*([\s\S]*?)(?=(?:#{1,4}\s*|\*{1,2})?EXPLANATION:?|$)/i);
  const expMatch = cleanText.match(/(?:#{1,4}\s*|\*{1,2})?EXPLANATION:?\*{0,2}\s*([\s\S]*?)$/i);

  if (ansMatch && ansMatch[1].trim()) {
    let answer = cleanSection(ansMatch[1]);
    let explanation = expMatch ? cleanSection(expMatch[1]) : '';

    // If explanation wasn't captured but answer contains further markdown headings/subsections
    if (!explanation && answer.includes('\n### ')) {
      const parts = answer.split(/(?=\n### )/);
      answer = cleanSection(parts[0]);
      explanation = cleanSection(parts.slice(1).join('\n'));
    }

    return {
      answer,
      explanation,
      diagramKeywords
    };
  }

  // Fallback: Split by first markdown heading if available
  if (cleanText.includes('\n### ') || cleanText.includes('\n## ')) {
    const headingIndex = cleanText.search(/\n#{2,3}\s+/);
    if (headingIndex !== -1) {
      return {
        answer: cleanSection(cleanText.slice(0, headingIndex)),
        explanation: cleanSection(cleanText.slice(headingIndex)),
        diagramKeywords
      };
    }
  }

  const paras = cleanText.split(/\n\n+/).filter(p => p.trim().length > 0);
  if (paras.length > 1) {
    return {
      answer: cleanSection(paras[0]),
      explanation: cleanSection(paras.slice(1).join('\n\n')),
      diagramKeywords
    };
  }

  return {
    answer: cleanSection(cleanText),
    explanation: '',
    diagramKeywords
  };
}
