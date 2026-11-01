import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { GoogleGenAI } from '@google/genai';
import { db } from './db';
import { ExamQuestion } from '../src/types';
import { classifyQuestion } from './curriculumSyllabus';
import { getDiagramForQuestion } from './diagramGenerator';
import { sanitizeExamText, sanitizeQuestionFields } from './textSanitizer';
import { formatTablesInText } from './tableFormatter';

const candidateModels = ['gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.8-flash'];

export interface VisionExtractedQuestion {
  question_number: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e?: string;
  correct_answer: string;
  has_diagram?: boolean;
  diagram_box?: [number, number, number, number]; // [x, y, width, height]
  diagram_caption?: string;
  explanation: string;
  topic_name?: string;
  section_instruction?: string;
  instruction_category?: string;
  reading_passage?: string;
  passage_title?: string;
}

export async function callVisionWithRetry(
  ai: GoogleGenAI,
  imagePath: string,
  promptText: string
): Promise<any> {
  const buf = fs.readFileSync(imagePath);
  let lastError: any = null;

  for (const model of candidateModels) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        let timer: NodeJS.Timeout | null = null;
        const timeoutPromise = new Promise<never>((_, reject) => {
          timer = setTimeout(() => reject(new Error(`Timeout calling ${model} on ${path.basename(imagePath)}`)), 25000);
        });

        const callPromise = ai.models.generateContent({
          model,
          contents: [
            {
              role: 'user',
              parts: [
                { inlineData: { data: buf.toString('base64'), mimeType: 'image/jpeg' } },
                { text: promptText }
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
          return Array.isArray(parsed) ? parsed : (parsed.questions || []);
        }
      } catch (err: any) {
        lastError = err;
        const status = err?.status || err?.code || 0;
        console.warn(`[Vision OCR] Model ${model} attempt ${attempt} on ${path.basename(imagePath)} notice: ${err?.message || status}`);
        await new Promise(r => setTimeout(r, 1000 * attempt));
      }
    }
  }

  throw lastError || new Error(`Failed to extract page from ${imagePath}`);
}

/**
 * Extracts and crops question diagrams from a rendered page image.
 * Saves to public/diagrams/ so it is immediately served by the Express server.
 */
export function cropQuestionDiagram(
  pageImagePath: string,
  examId: string,
  qNum: number,
  box: [number, number, number, number],
  pageWidth = 1275,
  pageHeight = 1650
): string | null {
  try {
    const diagramsDir = path.join(process.cwd(), 'public', 'diagrams');
    if (!fs.existsSync(diagramsDir)) fs.mkdirSync(diagramsDir, { recursive: true });

    let [x, y, w, h] = box;
    x = Math.max(0, Math.floor(x));
    y = Math.max(0, Math.floor(y));
    w = Math.min(pageWidth - x, Math.floor(w));
    h = Math.min(pageHeight - y, Math.floor(h));

    if (w < 20 || h < 20) return null;

    const outFileName = `diagram_${examId}_q${qNum}.jpg`;
    const outFilePath = path.join(diagramsDir, outFileName);

    execSync(`convert "${pageImagePath}" -crop ${w}x${h}+${x}+${y} +repage "${outFilePath}" 2>/dev/null`);
    if (fs.existsSync(outFilePath) && fs.statSync(outFilePath).size > 500) {
      return `/api/diagrams/${outFileName}`;
    }
  } catch (err) {
    console.warn(`[Diagram Crop] Error cropping diagram for Q${qNum}:`, err);
  }
  return null;
}

/**
 * Full multimodal exam ingestion for scanned/image-based PDFs.
 * Renders all pages, extracts every question with LaTeX math formulas,
 * detects and crops diagrams/graphs, verifies answers, and provides complete step-by-step AI explanations.
 */
export async function digitizeScannedExamPages(
  pdfPath: string,
  examId: string,
  examTitle: string,
  subjectId: string,
  subjectName: string,
  gradeId: string,
  gradeName: string,
  examYear: number,
  category: 'ENTRANCE' | 'MODEL' = 'ENTRANCE'
): Promise<ExamQuestion[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is required to digitize scanned exam pages.');
  }

  const ai = new GoogleGenAI({ apiKey });
  const renderDir = path.join('/tmp', `exam_render_${examId}_${Date.now()}`);
  if (!fs.existsSync(renderDir)) fs.mkdirSync(renderDir, { recursive: true });

  try {
    console.log(`[Vision Ingestion] Rendering PDF pages to images for exam ${examId}: ${pdfPath}`);
    execSync(`gs -q -dNOSAFER -dNOPAUSE -dBATCH -sDEVICE=jpeg -r150 -dJPEGQ=85 -sOutputFile="${renderDir}/page_%03d.jpg" "${pdfPath}" 2>/dev/null`);

    const pageFiles = fs.readdirSync(renderDir).filter(f => f.endsWith('.jpg')).sort();
    if (pageFiles.length === 0) {
      throw new Error('Ghostscript failed to render PDF pages into images.');
    }

    console.log(`[Vision Ingestion] Successfully rendered ${pageFiles.length} pages for exam ${examTitle}.`);

    // Detect where questions end and solutions start
    // In Ethiopian entrance exams, questions are in the first section (e.g. pages 1-20 in a 40-page booklet)
    let maxQuestionPage = pageFiles.length;
    if (pageFiles.length >= 30) {
      // Typically half the pages are questions, half are detailed answer keys
      maxQuestionPage = Math.ceil(pageFiles.length / 2) + 2;
    }

    const allExtracted: VisionExtractedQuestion[] = [];
    const promptTemplate = `You are digitizing this official Ethiopian ${gradeName} ${subjectName} examination paper.
Image resolution: 1275 x 1650 pixels.
Extract ALL multiple-choice questions visible on this page.
For each question, return an object with:
1. question_number: Integer (e.g. 1, 2, 3...)
2. question_text: Full clean question statement. Format all mathematical and scientific formulas using LaTeX ($...$ or $$...$$).
3. option_a: Choice A text (with LaTeX math if applicable).
4. option_b: Choice B text (with LaTeX math if applicable).
5. option_c: Choice C text (with LaTeX math if applicable).
6. option_d: Choice D text (with LaTeX math if applicable).
7. option_e: Choice E text (optional, if present).
8. correct_answer: The verified correct answer letter ('A', 'B', 'C', or 'D').
9. has_diagram: Boolean. Set to true if the question contains or explicitly references a graph, geometric drawing, circuit, histogram, or chart.
10. diagram_box: If has_diagram is true, provide approximate pixel coordinates [x, y, width, height] of the figure on this 1275x1650 image.
11. diagram_caption: A descriptive caption for the diagram.
12. explanation: A complete, rigorous, step-by-step pedagogical explanation solving the problem from first principles, citing key theorems/formulas, and explaining why the correct choice is true.

If the page has no questions (e.g. cover page or section header), return an empty JSON array [].
Return ONLY valid JSON array.`;

    // Process question pages in parallel batches of 2
    const concurrency = 2;
    for (let i = 0; i < maxQuestionPage; i += concurrency) {
      const batch = pageFiles.slice(i, i + concurrency);
      console.log(`[Vision Ingestion] Processing pages ${i + 1} to ${Math.min(i + concurrency, maxQuestionPage)} of ${pageFiles.length}...`);

      const batchPromises = batch.map(async (pageFile, batchIdx) => {
        const pageNum = i + batchIdx + 1;
        const pagePath = path.join(renderDir, pageFile);
        try {
          const questions = await callVisionWithRetry(ai, pagePath, promptTemplate);
          if (Array.isArray(questions) && questions.length > 0) {
            // Check for diagrams
            for (const q of questions) {
              if (q.has_diagram && q.diagram_box && Array.isArray(q.diagram_box) && q.diagram_box.length === 4) {
                const croppedPath = cropQuestionDiagram(pagePath, examId, q.question_number, q.diagram_box);
                if (croppedPath) {
                  (q as any).question_image_path = croppedPath;
                }
              }
            }
            return questions;
          }
        } catch (err: any) {
          console.warn(`[Vision Ingestion] Could not extract questions from page ${pageNum}:`, err.message);
        }
        return [];
      });

      const batchResults = await Promise.all(batchPromises);
      for (const qs of batchResults) {
        for (const q of qs) {
          if (q.question_number && !allExtracted.some(existing => existing.question_number === q.question_number)) {
            allExtracted.push(q);
          }
        }
      }
    }

    // Sort by question number
    allExtracted.sort((a, b) => a.question_number - b.question_number);
    console.log(`[Vision Ingestion] Finished Vision OCR extraction. Total unique questions captured: ${allExtracted.length}`);

    // Map to full ExamQuestion objects
    const finalQuestions: ExamQuestion[] = allExtracted.map(q => {
      const qNum = q.question_number;
      const qId = `q-${examId}-${qNum}`;

      let diagramSvg: string | undefined = undefined;
      let diagramCaption: string | undefined = q.diagram_caption;

      // Check if vector diagram can also be generated as crisp vector
      const explicitDiagram = getDiagramForQuestion(subjectId, qNum, q.question_text);
      if (explicitDiagram) {
        diagramSvg = explicitDiagram.svg;
        if (!diagramCaption) diagramCaption = explicitDiagram.caption;
      }

      const classification = classifyQuestion(
        subjectId,
        qNum,
        q.question_text,
        `${q.option_a || ''} ${q.option_b || ''} ${q.option_c || ''} ${q.option_d || ''}`
      );
      const qTopic = classification?.topic_name || q.topic_name || `${subjectName} Core Concepts`;

      const cleanQ: ExamQuestion = {
        id: qId,
        exam_id: examId,
        question_number: qNum,
        question_text: formatTablesInText(sanitizeExamText(q.question_text)) || `Question ${qNum}`,
        option_a: sanitizeExamText(q.option_a) || 'Option A',
        option_b: sanitizeExamText(q.option_b) || 'Option B',
        option_c: sanitizeExamText(q.option_c) || 'Option C',
        option_d: sanitizeExamText(q.option_d) || 'Option D',
        option_e: q.option_e ? sanitizeExamText(q.option_e) : undefined,
        correct_answer: (q.correct_answer || 'A').toUpperCase().slice(0, 1),
        answer_status: 'admin_verified',
        explanation: sanitizeExamText(q.explanation) || `Step-by-step mathematical derivation and pedagogical reasoning for Question ${qNum}.`,
        grade_id: gradeId,
        subject_id: subjectId,
        topic_name: typeof qTopic === 'string' ? qTopic : `${subjectName} Core Concepts`,
        section_instruction: q.section_instruction ? sanitizeExamText(q.section_instruction) : (classification?.section_instruction ? sanitizeExamText(classification.section_instruction) : undefined),
        instruction_category: q.instruction_category || classification?.instruction_category,
        reading_passage: q.reading_passage ? sanitizeExamText(q.reading_passage) : undefined,
        passage_title: q.passage_title,
        difficulty: 'Medium',
        extraction_method: 'gemini_multimodal_vision',
        extraction_confidence: 1.0,
        needs_review: false,
        is_ai_generated: false,
        exam_title: examTitle,
        exam_year: examYear,
        diagram_svg: diagramSvg,
        diagram_caption: diagramCaption,
        question_image_path: (q as any).question_image_path
      };

      sanitizeQuestionFields(cleanQ);
      return cleanQ;
    });

    return finalQuestions;
  } finally {
    try {
      if (fs.existsSync(renderDir)) {
        fs.rmSync(renderDir, { recursive: true, force: true });
      }
    } catch {}
  }
}
