const fs = require('fs');
const path = require('path');

console.log('⚡ Generating comprehensive offline bundles for EthioLearn Mobile APK...');

const dbPath = path.resolve(__dirname, '../data/database.json');
if (!fs.existsSync(dbPath)) {
  console.error('Database file not found at:', dbPath);
  process.exit(1);
}

const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const outDir = path.resolve(__dirname, '../public/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Group questions by exam_id
const questionsByExam = {};
(db.exam_questions || []).forEach(q => {
  if (!q.exam_id) return;
  if (!questionsByExam[q.exam_id]) {
    questionsByExam[q.exam_id] = [];
  }
  questionsByExam[q.exam_id].push({
    id: q.id,
    exam_id: q.exam_id,
    question_number: q.question_number || questionsByExam[q.exam_id].length + 1,
    text: q.text || q.question_text || '',
    options: q.options || [],
    correct_option: q.correct_option !== undefined ? q.correct_option : (q.correct_answer || 0),
    explanation: q.explanation || '',
    topic: q.topic || '',
    subject_id: q.subject_id || '',
    diagram_url: q.diagram_url || null,
    instruction_category: q.instruction_category || null
  });
});
fs.writeFileSync(path.join(outDir, 'offline_questions.json'), JSON.stringify(questionsByExam));
console.log(`✅ Written public/data/offline_questions.json with ${Object.keys(questionsByExam).length} exams.`);

// 2. Prepare metadata
const metadata = {
  version: '2026.11.03',
  exams: db.exams || [],
  subjects: db.subjects || [],
  books: db.books || [],
  book_chapters: db.book_chapters || []
};
fs.writeFileSync(path.join(outDir, 'offline_metadata.json'), JSON.stringify(metadata));
console.log(`✅ Written public/data/offline_metadata.json with ${metadata.exams.length} exams and ${metadata.books.length} books.`);

// 3. Pages
fs.writeFileSync(path.join(outDir, 'offline_pages.json'), JSON.stringify(db.book_pages || []));
console.log(`✅ Written public/data/offline_pages.json with ${(db.book_pages || []).length} pages.`);

// 4. Short notes
fs.writeFileSync(path.join(outDir, 'offline_short_notes.json'), JSON.stringify(db.chapter_short_notes || {}));
console.log(`✅ Written public/data/offline_short_notes.json with ${Object.keys(db.chapter_short_notes || {}).length} notes.`);

// 5. Flashcards
fs.writeFileSync(path.join(outDir, 'offline_flashcards.json'), JSON.stringify(db.flashcards || []));
console.log(`✅ Written public/data/offline_flashcards.json with ${(db.flashcards || []).length} flashcards.`);

console.log('🎉 Comprehensive offline bundle generation complete!');
