const fs = require('fs');

const content = fs.readFileSync('server/worksheetsCatalog.ts', 'utf8');
const lines = content.split('\n');

// Extract JSON part for WORKSHEET_QUESTIONS
const match = content.match(/export const WORKSHEET_QUESTIONS: ExamQuestion\[\] = (\[[\s\S]*?\]);\s*$/);
if (!match) {
  console.error('Could not find WORKSHEET_QUESTIONS in server/worksheetsCatalog.ts');
  process.exit(1);
}

const questions = JSON.parse(match[1]);
console.log('Total worksheet questions:', questions.length);

const generic = questions.filter(q => (q.explanation || '').includes('is mathematically and conceptually verified'));
console.log('Questions with generic explanation:', generic.length);

const byExam = {};
generic.forEach(q => {
  byExam[q.exam_id] = (byExam[q.exam_id] || 0) + 1;
});
console.log('By exam ID:', byExam);

// Print first 5 from each exam
const printedByExam = {};
generic.forEach(q => {
  printedByExam[q.exam_id] = (printedByExam[q.exam_id] || 0) + 1;
  if (printedByExam[q.exam_id] <= 3) {
    console.log(`[${q.exam_id}] Q${q.question_number} (${q.correct_answer}): ${q.question_text.slice(0, 70)}...`);
    console.log(`   A: ${q.option_a.slice(0, 40)} | B: ${q.option_b.slice(0, 40)} | C: ${q.option_c.slice(0, 40)} | D: ${q.option_d.slice(0, 40)}`);
  }
});
