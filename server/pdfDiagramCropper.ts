import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { GoogleGenAI } from '@google/genai';
import { ExamQuestion } from '../src/types';
import { getDiagramForQuestion } from './diagramGenerator';

const candidateModels = ['gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.8-flash'];

export interface DetectedDiagramFigure {
  question_number: number;
  diagram_box: [number, number, number, number]; // [x, y, width, height]
  diagram_caption?: string;
  page_index?: number;
}

/**
 * Precision crops a diagram from a rendered page image and saves to public/diagrams/
 */
export function cropDiagramFromPage(
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
    // Add safe padding
    const pad = 15;
    x = Math.max(0, Math.floor(x - pad));
    y = Math.max(0, Math.floor(y - pad));
    w = Math.min(pageWidth - x, Math.floor(w + pad * 2));
    h = Math.min(pageHeight - y, Math.floor(h + pad * 2));

    if (w < 30 || h < 30) return null;

    const outFileName = `diagram_${examId}_q${qNum}.jpg`;
    const outFilePath = path.join(diagramsDir, outFileName);

    // Crop using ImageMagick convert
    execSync(`convert "${pageImagePath}" -crop ${w}x${h}+${x}+${y} +repage -quality 92 "${outFilePath}" 2>/dev/null`);

    if (fs.existsSync(outFilePath) && fs.statSync(outFilePath).size > 600) {
      console.log(`[Diagram Cropper] Successfully cropped diagram for Q${qNum} -> /api/diagrams/${outFileName}`);
      return `/api/diagrams/${outFileName}`;
    }
  } catch (err: any) {
    console.warn(`[Diagram Cropper] Error cropping diagram for Q${qNum}:`, err?.message || err);
  }
  return null;
}

/**
 * Scans a rendered PDF page image with Gemini Vision to detect all visual diagrams,
 * charts, graphs, circuit schematics, geometric figures, and tables.
 */
async function detectDiagramsOnPage(
  ai: GoogleGenAI,
  imagePath: string,
  pageIndex: number
): Promise<DetectedDiagramFigure[]> {
  const buf = fs.readFileSync(imagePath);
  const prompt = `You are a precision exam diagram and figure locator.
Image resolution: 1275 x 1650 pixels. Page #${pageIndex + 1}.
Carefully scan this exam page for ANY visual figures:
- Geometric shapes, angle diagrams, coordinate axes, trigonometric plots
- Circuit schematics, resistor networks, battery/switch diagrams
- Physics force diagrams, pulley systems, projectile trajectories, optics lenses
- Biology anatomical illustrations, cell structures, cladograms, food webs
- Chemistry chemical structures, molecular models, experimental setups, titration curves
- Data charts, bar graphs, histograms, and visual comparison tables

For each figure found on this page:
1. question_number: Integer indicating which question number this figure belongs to (e.g. 3, 14, 45).
2. diagram_box: Exact pixel coordinates [x, y, width, height] of the bounding box enclosing the entire drawing/chart and its direct visual labels.
3. diagram_caption: A concise descriptive caption (e.g. "Electric circuit with parallel resistors R1 and R2", "Geometric triangle ABC with right angle at B").

If there are NO diagrams on this page (pure text only), return an empty JSON array: [].
Return ONLY valid JSON array.`;

  for (const model of candidateModels) {
    try {
      let timer: NodeJS.Timeout | null = null;
      const timeoutPromise = new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error(`Timeout detecting diagrams on page ${pageIndex + 1}`)), 20000);
      });

      const callPromise = ai.models.generateContent({
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
        const list = Array.isArray(parsed) ? parsed : (parsed.figures || parsed.diagrams || []);
        return list.map((item: any) => ({
          question_number: parseInt(item.question_number, 10) || 0,
          diagram_box: item.diagram_box || [0, 0, 0, 0],
          diagram_caption: item.diagram_caption || item.caption || '',
          page_index: pageIndex
        })).filter((item: DetectedDiagramFigure) => item.question_number > 0 && Array.isArray(item.diagram_box) && item.diagram_box.length === 4);
      }
    } catch (err: any) {
      console.warn(`[Diagram Locator] Model ${model} on page ${pageIndex + 1} notice:`, err?.message || err);
    }
  }

  return [];
}

/**
 * Takes an uploaded PDF file and a list of extracted questions.
 * Renders all pages of the PDF, scans for all visual diagrams/charts,
 * cuts them out directly as images, and attaches the image paths to the questions.
 */
export async function extractAndAttachPdfDiagrams(
  pdfPath: string,
  examId: string,
  questions: ExamQuestion[],
  subjectId?: string
): Promise<ExamQuestion[]> {
  if (!pdfPath || !fs.existsSync(pdfPath)) {
    return questions;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const renderDir = path.join('/tmp', `diagram_render_${examId}_${Date.now()}`);
  if (!fs.existsSync(renderDir)) fs.mkdirSync(renderDir, { recursive: true });

  try {
    console.log(`[PDF Diagram Extractor] Rendering pages for PDF diagram cutting: ${pdfPath}`);
    execSync(`gs -q -dNOSAFER -dNOPAUSE -dBATCH -sDEVICE=jpeg -r150 -dJPEGQ=85 -sOutputFile="${renderDir}/page_%03d.jpg" "${pdfPath}" 2>/dev/null`);

    const pageFiles = fs.readdirSync(renderDir).filter(f => f.endsWith('.jpg')).sort();
    if (pageFiles.length === 0) {
      console.warn('[PDF Diagram Extractor] Ghostscript could not render pages from PDF.');
      return questions;
    }

    console.log(`[PDF Diagram Extractor] Rendered ${pageFiles.length} pages. Starting visual diagram detection & cropping...`);

    const qMap = new Map<number, ExamQuestion>();
    questions.forEach(q => qMap.set(q.question_number, q));

    if (apiKey) {
      const ai = new GoogleGenAI({ apiKey });
      // Only scan first 25 pages (where questions and diagrams reside)
      const scanPages = pageFiles.slice(0, 25);
      const concurrency = 2;

      for (let i = 0; i < scanPages.length; i += concurrency) {
        const batch = scanPages.slice(i, i + concurrency);
        const batchPromises = batch.map(async (pageFile, batchIdx) => {
          const pageIndex = i + batchIdx;
          const pagePath = path.join(renderDir, pageFile);
          try {
            const detected = await detectDiagramsOnPage(ai, pagePath, pageIndex);
            for (const fig of detected) {
              const q = qMap.get(fig.question_number);
              if (q && fig.diagram_box) {
                const croppedUrl = cropDiagramFromPage(pagePath, examId, fig.question_number, fig.diagram_box);
                if (croppedUrl) {
                  q.question_image_path = croppedUrl;
                  if (fig.diagram_caption && (!q.diagram_caption || q.diagram_caption.includes('Question'))) {
                    q.diagram_caption = fig.diagram_caption;
                  }
                }
              }
            }
          } catch (err: any) {
            console.warn(`[PDF Diagram Extractor] Error processing page ${pageIndex + 1}:`, err?.message);
          }
        });

        await Promise.all(batchPromises);
      }
    }

    // Fallback: For any STEM questions (Physics, Math, Biology, Chemistry) that still need a diagram
    // if vector diagram is available, make sure diagram_svg is provided
    for (const q of questions) {
      if (!q.question_image_path && !q.diagram_svg) {
        const fallbackVec = getDiagramForQuestion(subjectId || q.subject_id, q.question_number, q.question_text);
        if (fallbackVec) {
          q.diagram_svg = fallbackVec.svg;
          if (!q.diagram_caption) q.diagram_caption = fallbackVec.caption;
        }
      }
    }

    console.log(`[PDF Diagram Extractor] Completed diagram extraction for exam ${examId}. Cropped diagrams attached!`);
    return questions;
  } catch (err: any) {
    console.error('[PDF Diagram Extractor] Unexpected error during diagram extraction:', err);
    return questions;
  } finally {
    try {
      if (fs.existsSync(renderDir)) {
        fs.rmSync(renderDir, { recursive: true, force: true });
      }
    } catch {}
  }
}
