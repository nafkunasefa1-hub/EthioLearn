const fs = require('fs');
const path = require('path');

const p1 = require('./hawas_data/part1_word_order_vocab.cjs');
const p2 = require('./hawas_data/part2_completion_grammar.cjs');
const p3 = require('./hawas_data/part3_reading_dialogue.cjs');
const p4 = require('./hawas_data/part4_writing_analogy.cjs');

const allQuestions = [...p1, ...p2, ...p3, ...p4];
console.log(`Loaded ${allQuestions.length} questions.`);

const examId = 'exam-collection-hawas-500-eng';

const formattedExamQuestions = allQuestions.map((q, idx) => {
  return {
    id: `q-hawas500-${q.question_number}`,
    exam_id: examId,
    question_number: q.question_number,
    question_text: q.question_text,
    option_a: q.options.A || '',
    option_b: q.options.B || '',
    option_c: q.options.C || '',
    option_d: q.options.D || '',
    options: q.options,
    correct_answer: q.correct_answer,
    explanation: q.explanation,
    difficulty: "Medium",
    topic_name: q.section,
    instruction_category: q.section,
    section_instruction: q.instruction || '',
    passage: q.passage || undefined,
    subject_id: "subj-eng",
    grade_id: "grade-all",
    exam_title: "Hawas 500 - English Comprehensive Exam Collection",
    exam_year: 2018,
    answer_status: "admin_verified",
    points: 1
  };
});

const examObject = {
  id: examId,
  title: "Hawas 500 - English Comprehensive Exam Collection",
  year: 2018,
  ethiopian_year: "2018 E.C.",
  exam_series: "Exam Collection",
  exam_type: "Comprehensive Exam Collection",
  category: "COLLECTION",
  source_type: "OFFICIAL",
  is_free_preview: true,
  grade_id: "grade-all",
  grade_name: "All Grades (Natural & Social Science)",
  subject_id: "subj-eng",
  subject_name: "English",
  description: "Complete 500-question comprehensive Ethiopian English examination collection containing Word Order, Vocabulary Substitution & Completion, Grammar, Reading Comprehension with full passages, Communicative Activities & Dialogues, Writing Skills, and Verbal Analogies with full step-by-step pedagogical explanations.",
  instructions: "Answer all 500 questions. Carefully read the instructions for each section, including reading passages and dialogue contexts. Choose the best option for each question.",
  duration_minutes: 300,
  total_questions: 500,
  total_marks: 500,
  status: "PUBLISHED",
  is_demo: false,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  is_active: true
};

const dbPath = path.join(__dirname, '../data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Check if exam already exists and replace, or append
const existingIdx = db.exams.findIndex(e => e.id === examId);
if (existingIdx >= 0) {
  db.exams[existingIdx] = examObject;
  console.log(`Updated existing exam ${examId}`);
} else {
  db.exams.push(examObject);
  console.log(`Added new exam ${examId}`);
}

// Update exam_questions array
if (!Array.isArray(db.exam_questions)) {
  db.exam_questions = [];
}
// Remove old questions for this exam
db.exam_questions = db.exam_questions.filter(q => q.exam_id !== examId);
// Append all 500 questions
db.exam_questions.push(...formattedExamQuestions);

console.log(`Total exam_questions now: ${db.exam_questions.length}`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Database successfully updated!');
