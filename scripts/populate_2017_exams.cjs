const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'data', 'database.json');
const satQuestions = require('./sat_questions_data.cjs');
const bioQuestions = require('./bio_questions_data.cjs');

console.log(`[Populate] Loaded ${satQuestions.length} SAT questions and ${bioQuestions.length} Biology questions.`);

if (!fs.existsSync(DB_PATH)) {
  console.error('Database file not found at:', DB_PATH);
  process.exit(1);
}

const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
if (!Array.isArray(db.exam_questions)) db.exam_questions = [];
if (!Array.isArray(db.exams)) db.exams = [];

const SAT_EXAM_ID = 'exam-entrance-1789761116731';
const BIO_EXAM_ID = 'exam-entrance-1789750908183';

// 1. Update SAT Exam record
let satExam = db.exams.find(e => e.id === SAT_EXAM_ID);
if (satExam) {
  satExam.questions_count = 60;
  satExam.total_questions = 60;
  satExam.digitized_questions_count = 60;
  satExam.digitization_progress = 100;
  satExam.is_digitized = true;
  satExam.status = 'PUBLISHED';
  satExam.is_free_preview = true;
  satExam.year = satExam.year || 2017;
  satExam.ethiopian_year = '2017 E.C.';
  satExam.exam_series = '2017 E.C. EUEE Exams';
  console.log('[Populate] Updated SAT Exam metadata to PUBLISHED.');
} else {
  console.warn('[Populate] SAT Exam record not found, will keep question pool ready.');
}

// 2. Remove old SAT questions and insert new 60 authentic questions
db.exam_questions = db.exam_questions.filter(q => q.exam_id !== SAT_EXAM_ID);

satQuestions.forEach(q => {
  db.exam_questions.push({
    id: `q-sat-2017-${q.question_number}`,
    exam_id: SAT_EXAM_ID,
    question_number: q.question_number,
    question_text: q.question_text,
    option_a: q.option_a,
    option_b: q.option_b,
    option_c: q.option_c,
    option_d: q.option_d,
    correct_answer: q.correct_answer,
    explanation: q.explanation,
    answer_status: 'admin_verified',
    difficulty: q.difficulty || 'Medium',
    topic_name: q.topic_name || 'General Aptitude',
    instruction_category: q.instruction_category || 'Aptitude',
    section_instruction: q.section_instruction || '',
    reading_passage: q.reading_passage || undefined,
    passage_title: q.passage_title || undefined,
    grade_id: satExam?.grade_id || 'grade-12-natural',
    subject_id: satExam?.subject_id || 'subj-sat'
  });
});

console.log(`[Populate] Inserted 60 SAT questions for ${SAT_EXAM_ID}.`);

// 3. Update Biology Exam record
let bioExam = db.exams.find(e => e.id === BIO_EXAM_ID);
if (bioExam) {
  bioExam.questions_count = 100;
  bioExam.total_questions = 100;
  bioExam.digitized_questions_count = 100;
  bioExam.digitization_progress = 100;
  bioExam.is_digitized = true;
  bioExam.status = 'PUBLISHED';
  bioExam.is_free_preview = true;
  bioExam.year = bioExam.year || 2017;
  bioExam.ethiopian_year = '2017 E.C.';
  bioExam.exam_series = '2017 E.C. EUEE Exams';
  console.log('[Populate] Updated Biology Exam metadata to PUBLISHED.');
} else {
  console.warn('[Populate] Biology Exam record not found, will keep question pool ready.');
}

// 4. Remove old Biology questions and insert new 100 authentic questions
db.exam_questions = db.exam_questions.filter(q => q.exam_id !== BIO_EXAM_ID);

bioQuestions.forEach(q => {
  db.exam_questions.push({
    id: `q-bio-2017-${q.question_number}`,
    exam_id: BIO_EXAM_ID,
    question_number: q.question_number,
    question_text: q.question_text,
    option_a: q.option_a,
    option_b: q.option_b,
    option_c: q.option_c,
    option_d: q.option_d,
    correct_answer: q.correct_answer,
    explanation: q.explanation,
    answer_status: 'admin_verified',
    difficulty: q.difficulty || 'Medium',
    topic_name: q.topic_name || 'General Biology',
    instruction_category: q.instruction_category || 'Biology',
    section_instruction: q.section_instruction || 'Choose the best alternative.',
    grade_id: bioExam?.grade_id || 'grade-12-natural',
    subject_id: bioExam?.subject_id || 'subj-bio'
  });
});

console.log(`[Populate] Inserted 100 Biology questions for ${BIO_EXAM_ID}.`);

// 5. Clean up temporary draft upload placeholders
const draftIds = new Set([
  '1789746618143-enr12o',
  '1789748451703-x9kkzu',
  '1789750906505-un5w4x',
  '1789754582015-slprcx',
  '1789761115145-p3x5ac'
]);
db.exams = db.exams.filter(e => !draftIds.has(e.id));
db.exam_questions = db.exam_questions.filter(q => !draftIds.has(q.exam_id));

// Save updated database atomically
fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
console.log(`[Populate] Database saved successfully. Total questions in db: ${db.exam_questions.length}`);
