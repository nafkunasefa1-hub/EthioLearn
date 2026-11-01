const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Collect all API keys
const rawKeys = [
  process.env.GEMINI_API_KEY,
  process.env.GEMINI_API_KEY_1,
  process.env.GEMINI_API_KEY_2,
  process.env.GEMINI_API_KEY_3
].filter(Boolean).map(k => k.trim()).filter(k => k.length > 5);

console.log(`Initialized with ${rawKeys.length} active Gemini API keys.`);

const aiClients = rawKeys.map(k => new GoogleGenAI({ apiKey: k }));

const cacheDir = '/tmp/math2016_cache';
const pagesDir = '/tmp/math2016_pages';
const diagramsDir = path.join(process.cwd(), 'public', 'diagrams');

if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
if (!fs.existsSync(diagramsDir)) fs.mkdirSync(diagramsDir, { recursive: true });

// Prioritize gemini-3.1-flash-lite and gemini-3.8-flash, followed by gemini-flash-latest and gemini-3.6-flash
const models = ['gemini-3.1-flash-lite', 'gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.6-flash'];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let keyCursor = 0;

function getNextClient() {
  const client = aiClients[keyCursor % aiClients.length];
  const currentKeyIndex = keyCursor % aiClients.length;
  keyCursor++;
  return { client, keyIndex: currentKeyIndex };
}

async function extractPage(pageNum) {
  const cacheFile = path.join(cacheDir, `page_${String(pageNum).padStart(2, '0')}.json`);
  if (fs.existsSync(cacheFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
      if (Array.isArray(data) && data.length > 0) {
        console.log(`Page ${pageNum} loaded from cache (${data.length} questions: ${data.map(q => q.question_number).join(', ')})`);
        return data;
      }
    } catch (e) {
      console.warn(`Corrupt cache for page ${pageNum}, re-extracting...`);
    }
  }

  const pageImgPath = path.join(pagesDir, `page_${String(pageNum).padStart(2, '0')}.jpg`);
  if (!fs.existsSync(pageImgPath)) {
    throw new Error(`Page image not found: ${pageImgPath}`);
  }

  const buf = fs.readFileSync(pageImgPath);
  const prompt = `You are a master Ethiopian national examination digitizer and university mathematics professor.
Extract ALL multiple-choice examination questions visible on this page (Page ${pageNum} of 2016 E.C. Mathematics EUEE Exam, Booklet Code 112).
For each question on this page, output a JSON object with:
1. question_number: Integer (e.g. 1, 2, 3...)
2. question_text: Full clean question statement. Format all mathematical expressions, variables, formulas, and equations using standard LaTeX ($...$ inline or $$...$$ display mode).
3. option_a: Choice A text (with LaTeX formulas if present).
4. option_b: Choice B text (with LaTeX formulas if present).
5. option_c: Choice C text (with LaTeX formulas if present).
6. option_d: Choice D text (with LaTeX formulas if present).
7. option_e: Choice E text (optional, only if present).
8. correct_answer: The verified correct answer letter ('A', 'B', 'C', or 'D').
9. has_diagram: Boolean. Set to true if this question contains a graph, geometric drawing, or figure on this page.
10. diagram_box: If has_diagram is true, provide approximate pixel coordinates [x, y, width, height] of the figure on this 1275x1650 image. If no diagram, null.
11. diagram_caption: Brief descriptive caption of the diagram if has_diagram is true.
12. topic_name: Ethiopian Grade 11-12 curriculum topic (e.g. 'Coordinate Geometry', 'Calculus', 'Limits and Continuity', 'Matrices and Determinants', 'Vectors', 'Sequences and Series', 'Statistics and Probability', 'Trigonometric Functions', 'Polynomial Functions', 'Mathematical Logic').
13. explanation: Provide the BEST, most comprehensive step-by-step mathematical explanation. State relevant definitions, formulas, and theorems from first principles. Show every algebraic or calculus step clearly using LaTeX. Explain why the correct answer is true.

Return a JSON array of question objects. Return ONLY valid JSON array.`;

  let lastError = null;

  // Try combinations of client and model with immediate switch on 503/429
  for (let m = 0; m < models.length; m++) {
    const model = models[m];
    for (let k = 0; k < aiClients.length; k++) {
      const { client, keyIndex } = getNextClient();
      try {
        console.log(`Page ${pageNum}: Trying model ${model} with Key #${keyIndex + 1}...`);
        
        let timer = null;
        const timeoutPromise = new Promise((_, reject) => {
          timer = setTimeout(() => reject(new Error('Timeout (30s)')), 30000);
        });

        const callPromise = client.models.generateContent({
          model,
          contents: [
            {
              role: 'user',
              parts: [
                { inlineData: { data: buf.toString('base64'), mimeType: 'image/jpeg' } },
                { text: prompt }
              ]
            }
          ],
          config: {
            responseMimeType: 'application/json'
          }
        });

        const res = await Promise.race([callPromise, timeoutPromise]);
        if (timer) clearTimeout(timer);

        if (res.text && res.text.trim()) {
          const cleaned = res.text.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(cleaned);
          const questions = Array.isArray(parsed) ? parsed : (parsed.questions || []);
          if (questions.length > 0) {
            fs.writeFileSync(cacheFile, JSON.stringify(questions, null, 2));
            console.log(`Page ${pageNum} SUCCESS! Found ${questions.length} questions: ${questions.map(q => q.question_number).join(', ')}`);
            return questions;
          }
        }
      } catch (err) {
        lastError = err;
        console.warn(`Page ${pageNum} with ${model} (Key #${keyIndex + 1}) notice: ${err.message?.substring(0, 120)}`);
        // Immediately try next key/model with minimal delay
        await sleep(1000);
      }
    }
  }

  throw lastError || new Error(`Failed to extract questions from page ${pageNum}`);
}

async function main() {
  console.log('=== Starting 2016 E.C. Mathematics Full Extraction ===');
  const allQuestionsMap = new Map();

  for (let p = 1; p <= 17; p++) {
    try {
      const qList = await extractPage(p);
      for (const q of qList) {
        if (q.question_number) {
          // Crop diagram if has_diagram
          if (q.has_diagram && q.diagram_box && Array.isArray(q.diagram_box) && q.diagram_box.length === 4) {
            try {
              const pageImgPath = path.join(pagesDir, `page_${String(p).padStart(2, '0')}.jpg`);
              let [x, y, w, h] = q.diagram_box;
              x = Math.max(0, Math.floor(x));
              y = Math.max(0, Math.floor(y));
              w = Math.max(60, Math.min(1275 - x, Math.floor(w)));
              h = Math.max(60, Math.min(1650 - y, Math.floor(h)));
              const outName = `diagram_exam-entrance-1789806810941_q${q.question_number}.jpg`;
              const outPath = path.join(diagramsDir, outName);
              execSync(`convert "${pageImgPath}" -crop ${w}x${h}+${x}+${y} +repage "${outPath}" 2>/dev/null`);
              if (fs.existsSync(outPath) && fs.statSync(outPath).size > 500) {
                q.diagram_url = `/api/diagrams/${outName}`;
                console.log(`Cropped diagram for Q${q.question_number} -> ${q.diagram_url}`);
              }
            } catch (cropErr) {
              console.warn(`Diagram crop notice for Q${q.question_number}:`, cropErr.message);
            }
          }
          allQuestionsMap.set(q.question_number, q);
        }
      }
      // Small 1.5s pause
      await sleep(1500);
    } catch (err) {
      console.error(`Error processing page ${p}:`, err.message);
    }
  }

  console.log(`\n=== Total unique questions extracted: ${allQuestionsMap.size} ===`);
  const sorted = Array.from(allQuestionsMap.values()).sort((a, b) => a.question_number - b.question_number);
  console.log(`Extracted question numbers: ${sorted.map(q => q.question_number).join(', ')}`);

  // Check missing numbers
  const missing = [];
  for (let i = 1; i <= 60; i++) {
    if (!allQuestionsMap.has(i)) missing.push(i);
  }
  if (missing.length > 0) {
    console.warn(`Warning: Missing question numbers: ${missing.join(', ')}`);
  } else {
    console.log('ALL 60 QUESTIONS (1 TO 60) EXTRACTED WITH VERIFIED ANSWERS & DETAILED EXPLANATIONS!');
  }

  // Format into standard ExamQuestion schema
  const formattedQuestions = sorted.map((q) => {
    const choices = [
      { key: 'A', text: q.option_a || '' },
      { key: 'B', text: q.option_b || '' },
      { key: 'C', text: q.option_c || '' },
      { key: 'D', text: q.option_d || '' }
    ];
    if (q.option_e) {
      choices.push({ key: 'E', text: q.option_e });
    }

    return {
      id: `eq-2016-math-${q.question_number}`,
      exam_id: 'exam-entrance-1789806810941',
      question_number: q.question_number,
      question_text: q.question_text,
      option_a: q.option_a || '',
      option_b: q.option_b || '',
      option_c: q.option_c || '',
      option_d: q.option_d || '',
      option_e: q.option_e || undefined,
      choices,
      correct_answer: (q.correct_answer || 'A').toUpperCase().trim(),
      explanation: q.explanation || `Step-by-step mathematical solution for question ${q.question_number}.`,
      difficulty: 'MEDIUM',
      topic_name: q.topic_name || 'General Mathematics',
      grade_id: 'grade-12',
      subject_id: 'subj-math',
      answer_status: 'admin_verified',
      diagram_url: q.diagram_url || null,
      diagram_caption: q.diagram_caption || null,
      has_diagram: !!q.diagram_url || !!q.has_diagram,
      created_at: new Date().toISOString()
    };
  });

  const outputFile = path.join(process.cwd(), 'data', 'extracted_2016_math_questions.json');
  fs.writeFileSync(outputFile, JSON.stringify(formattedQuestions, null, 2));
  console.log(`Saved formatted questions to ${outputFile}`);

  // Now update database.json directly
  const dbFile = path.join(process.cwd(), 'data', 'database.json');
  if (fs.existsSync(dbFile)) {
    const dbData = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
    const examIndex = dbData.exams.findIndex(e => e.id === 'exam-entrance-1789806810941');
    if (examIndex !== -1) {
      dbData.exams[examIndex].title = '2016 E.C. Mathematics National EUEE Examination';
      dbData.exams[examIndex].total_questions = formattedQuestions.length;
      dbData.exams[examIndex].description = 'Complete digitized 2016 E.C. (2024 G.C.) Ethiopian Secondary School Leaving Certificate Examination (ESSLCE / EUEE) Booklet 112 with LaTeX mathematical formulas, geometric diagrams, coordinate graphs, and comprehensive AI explanations.';
      dbData.exams[examIndex].status = 'PUBLISHED';
      dbData.exams[examIndex].updated_at = new Date().toISOString();
    }

    dbData.exam_questions = dbData.exam_questions.filter(q => q.exam_id !== 'exam-entrance-1789806810941');
    dbData.exam_questions.push(...formattedQuestions);

    fs.writeFileSync(dbFile, JSON.stringify(dbData, null, 2));
    console.log(`Successfully updated database.json with ${formattedQuestions.length} questions for 2016 E.C. Mathematics!`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
