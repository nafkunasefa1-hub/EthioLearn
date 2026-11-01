import fs from 'fs';
import path from 'path';
import { sanitizeQuestionFields } from './textSanitizer';

const DB_PATH = path.join(process.cwd(), 'data', 'database.json');

export function runCleanMigration(): { total: number; cleaned: number } {
  if (!fs.existsSync(DB_PATH)) {
    console.warn('[Migration] database.json does not exist at', DB_PATH);
    return { total: 0, cleaned: 0 };
  }

  const raw = fs.readFileSync(DB_PATH, 'utf8');
  const data = JSON.parse(raw);

  if (!Array.isArray(data.exam_questions)) {
    console.warn('[Migration] No exam_questions array in database.json');
    return { total: 0, cleaned: 0 };
  }

  const watermarkRegex = /(?:Entrance\s*Tricks|ESSLCE\s*Online\s*Exam|Download\s*Entrance|First\s*Round\s*ESSLCE|Page\s*\d+\b|--\s*\d+\s*of\s*\d+\s*--)/i;

  let cleanedCount = 0;
  const initialTotal = data.exam_questions.length;

  data.exam_questions = data.exam_questions.map((q: any) => {
    const hadWatermark = [
      q.question_text,
      q.option_a,
      q.option_b,
      q.option_c,
      q.option_d,
      q.option_e,
      q.explanation,
      q.section_instruction,
      q.reading_passage
    ].some(f => f && watermarkRegex.test(f));

    const cleaned = sanitizeQuestionFields(q);
    if (hadWatermark) {
      cleanedCount++;
    }
    return cleaned;
  });

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[Migration] Cleaned ${cleanedCount} questions out of ${initialTotal} total questions.`);
  return { total: initialTotal, cleaned: cleanedCount };
}

// Run migration
runCleanMigration();
