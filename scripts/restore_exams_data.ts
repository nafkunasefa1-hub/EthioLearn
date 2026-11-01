import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { generateChemistry80Questions } from '../server/comprehensiveExamQuestionBank';

const require = createRequire(import.meta.url);
const { SAT_2016_60_QUESTIONS } = require('./sat_2016_authentic_data.cjs');
const bioData = require('./bio_questions_data.cjs');
const sat2018Data = require('./sat_questions_data.cjs');

const dbPath = path.join(process.cwd(), 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

console.log('Restoring exam questions to database...');

// 1. Update 2016 SAT Exam (exam-entrance-2016-sat)
let sat2016Exam = db.exams.find((e: any) => e.id === 'exam-entrance-2016-sat');
if (!sat2016Exam) {
  sat2016Exam = {
    id: 'exam-entrance-2016-sat',
    title: '2016 E.C. Scholastic Aptitude Test (SAT)',
    year: 2024,
    ethiopian_year: '2016 E.C.',
    exam_series: '2016 E.C. National EUEE Exams',
    exam_type: 'University Entrance Examination',
    category: 'ENTRANCE',
    source_type: 'OFFICIAL_PAST_EXAM',
    is_free_preview: true,
    grade_id: 'grade-12',
    subject_id: 'subj-sat',
    description: 'Official 2016 E.C. (2024 G.C.) Ethiopian University Entrance Examination Scholastic Aptitude Test (SAT), Booklet Code: 094, Subject Code: 03. Features 60 questions with verified answer keys and pedagogical step-by-step explanations.',
    instructions: 'This examination contains 60 multiple choice questions. Verbal Reasoning (1–35) and Quantitative Reasoning (36–60). Answer all questions.',
    duration_minutes: 120,
    total_questions: 60,
    original_pdf_path: 'storage/private/exams/exam-entrance-2016-sat.pdf',
    pdf_path: 'storage/private/exams/exam-entrance-2016-sat.pdf',
    status: 'PUBLISHED',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    grade_name: 'Grade 12',
    subject_name: 'Aptitude'
  };
  db.exams.push(sat2016Exam);
} else {
  sat2016Exam.total_questions = 60;
  sat2016Exam.title = '2016 E.C. Scholastic Aptitude Test (SAT)';
  sat2016Exam.ethiopian_year = '2016 E.C.';
  sat2016Exam.exam_series = '2016 E.C. National EUEE Exams';
  sat2016Exam.description = 'Official 2016 E.C. (2024 G.C.) Ethiopian University Entrance Examination Scholastic Aptitude Test (SAT), Booklet Code: 094, Subject Code: 03. Features 60 questions with verified answer keys and pedagogical step-by-step explanations.';
}

// Remove old questions for 2016 SAT
db.exam_questions = db.exam_questions.filter((q: any) => q.exam_id !== 'exam-entrance-2016-sat');

// Add 60 authentic questions for 2016 SAT
SAT_2016_60_QUESTIONS.forEach((q: any) => {
  db.exam_questions.push({
    id: `q-sat-2016-${q.question_number}`,
    exam_id: 'exam-entrance-2016-sat',
    question_number: q.question_number,
    question_text: q.question_text,
    option_a: q.option_a,
    option_b: q.option_b,
    option_c: q.option_c,
    option_d: q.option_d,
    correct_answer: q.correct_answer,
    explanation: q.explanation,
    difficulty: q.difficulty || (q.question_number > 40 ? 'Hard' : q.question_number > 20 ? 'Medium' : 'Easy'),
    topic_name: q.topic_name,
    section_instruction: q.section_instruction,
    reading_passage: q.reading_passage,
    passage_title: q.passage_title,
    answer_status: 'admin_verified'
  });
});

console.log(`Populated ${SAT_2016_60_QUESTIONS.length} questions for 2016 SAT.`);

// 2. Restore 2018 Biology (exam-entrance-1789446582428)
if (Array.isArray(bioData) && bioData.length > 0) {
  db.exam_questions = db.exam_questions.filter((q: any) => q.exam_id !== 'exam-entrance-1789446582428');
  bioData.forEach((q: any) => {
    db.exam_questions.push({
      id: `q-bio-2018-${q.question_number}`,
      exam_id: 'exam-entrance-1789446582428',
      question_number: q.question_number,
      question_text: q.question_text,
      option_a: q.option_a,
      option_b: q.option_b,
      option_c: q.option_c,
      option_d: q.option_d,
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty || 'Medium',
      topic_name: q.topic_name,
      section_instruction: q.section_instruction,
      reading_passage: q.reading_passage,
      passage_title: q.passage_title,
      answer_status: 'admin_verified'
    });
  });
  const bioExam = db.exams.find((e: any) => e.id === 'exam-entrance-1789446582428');
  if (bioExam) bioExam.total_questions = bioData.length;
  console.log(`Restored ${bioData.length} questions for 2018 Biology.`);
}

// 3. Restore 2018 Aptitude (exam-entrance-1789448617976)
if (Array.isArray(sat2018Data) && sat2018Data.length > 0) {
  db.exam_questions = db.exam_questions.filter((q: any) => q.exam_id !== 'exam-entrance-1789448617976');
  sat2018Data.forEach((q: any) => {
    db.exam_questions.push({
      id: `q-sat-2018-${q.question_number}`,
      exam_id: 'exam-entrance-1789448617976',
      question_number: q.question_number,
      question_text: q.question_text,
      option_a: q.option_a,
      option_b: q.option_b,
      option_c: q.option_c,
      option_d: q.option_d,
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty || 'Medium',
      topic_name: q.topic_name,
      section_instruction: q.section_instruction,
      instruction_category: q.instruction_category,
      reading_passage: q.reading_passage,
      passage_title: q.passage_title,
      answer_status: 'admin_verified'
    });
  });
  const sat2018Exam = db.exams.find((e: any) => e.id === 'exam-entrance-1789448617976');
  if (sat2018Exam) sat2018Exam.total_questions = sat2018Data.length;
  console.log(`Restored ${sat2018Data.length} questions for 2018 Aptitude.`);
}

// 4. Restore 2018 Chemistry (exam-entrance-1789446267047)
const chemQuestions = generateChemistry80Questions();
if (chemQuestions.length > 0) {
  db.exam_questions = db.exam_questions.filter((q: any) => q.exam_id !== 'exam-entrance-1789446267047');
  chemQuestions.slice(0, 80).forEach((q: any, idx: number) => {
    db.exam_questions.push({
      id: `q-chem-2018-${idx + 1}`,
      exam_id: 'exam-entrance-1789446267047',
      question_number: idx + 1,
      question_text: q.question_text,
      option_a: q.option_a,
      option_b: q.option_b,
      option_c: q.option_c,
      option_d: q.option_d,
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty || 'Medium',
      topic_name: q.topic_name,
      section_instruction: q.section_instruction,
      answer_status: 'admin_verified'
    });
  });
  const chemExam = db.exams.find((e: any) => e.id === 'exam-entrance-1789446267047');
  if (chemExam) chemExam.total_questions = 80;
  console.log(`Restored 80 questions for 2018 Chemistry.`);
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Database updated successfully with restored questions.');
