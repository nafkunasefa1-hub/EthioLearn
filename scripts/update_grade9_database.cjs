// scripts/update_grade9_database.js
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const engQuestions = require('./extract_grade9_english.cjs');
const mathQuestions = require('./extract_grade9_math.cjs');
const chemQuestions = require('./extract_grade9_chemistry.cjs');
const physQuestions = require('./extract_grade9_physics.cjs');
const bioQuestions = require('./extract_grade9_biology.cjs');

const grade9ExamsConfig = [
  {
    id: 'exam-grade9-eng',
    title: 'Grade 9 English Language First Semester Final Exam',
    subject_id: 'subj-eng',
    grade_id: 'grade-9',
    total_questions: 60,
    duration_minutes: 80,
    year: 2016,
    ethiopian_year: '2016 E.C.',
    category: 'GRADE_9',
    exam_series: 'Grade 9 Exams',
    questions: engQuestions
  },
  {
    id: 'exam-grade9-math',
    title: 'Grade 9 Mathematics Final Exam',
    subject_id: 'subj-math',
    grade_id: 'grade-9',
    total_questions: 60,
    duration_minutes: 180,
    year: 2016,
    ethiopian_year: '2016 E.C.',
    category: 'GRADE_9',
    exam_series: 'Grade 9 Exams',
    questions: mathQuestions
  },
  {
    id: 'exam-grade9-chem',
    title: 'Grade 9 Chemistry Final Exam',
    subject_id: 'subj-chem',
    grade_id: 'grade-9',
    total_questions: 60,
    duration_minutes: 120,
    year: 2016,
    ethiopian_year: '2016 E.C.',
    category: 'GRADE_9',
    exam_series: 'Grade 9 Exams',
    questions: chemQuestions
  },
  {
    id: 'exam-grade9-phys',
    title: 'Grade 9 Physics First Semester Final Exam',
    subject_id: 'subj-phys',
    grade_id: 'grade-9',
    total_questions: 40,
    duration_minutes: 120,
    year: 2016,
    ethiopian_year: '2016 E.C.',
    category: 'GRADE_9',
    exam_series: 'Grade 9 Exams',
    questions: physQuestions
  },
  {
    id: 'exam-grade9-bio',
    title: 'Grade 9 Biology Final Exam',
    subject_id: 'subj-bio',
    grade_id: 'grade-9',
    total_questions: 60,
    duration_minutes: 75,
    year: 2016,
    ethiopian_year: '2016 E.C.',
    category: 'GRADE_9',
    exam_series: 'Grade 9 Exams',
    questions: bioQuestions
  }
];

const grade9ExamIds = grade9ExamsConfig.map(c => c.id);

// 1. Update or replace Exam objects in db.exams
grade9ExamsConfig.forEach(cfg => {
  const existingIndex = db.exams.findIndex(e => e.id === cfg.id);
  const examRecord = {
    id: cfg.id,
    title: cfg.title,
    subject_id: cfg.subject_id,
    grade_id: cfg.grade_id,
    total_questions: cfg.total_questions,
    duration_minutes: cfg.duration_minutes,
    year: cfg.year,
    ethiopian_year: cfg.ethiopian_year,
    category: cfg.category,
    exam_series: cfg.exam_series,
    instructions: 'Follow all instructions provided on the examination sheet carefully. Answer all questions.'
  };

  if (existingIndex >= 0) {
    db.exams[existingIndex] = { ...db.exams[existingIndex], ...examRecord };
  } else {
    db.exams.push(examRecord);
  }
});

// 2. Remove all old Grade 9 questions
const initialQuestionCount = db.exam_questions.length;
db.exam_questions = db.exam_questions.filter(q => !grade9ExamIds.includes(q.exam_id));
const removedCount = initialQuestionCount - db.exam_questions.length;
console.log(`Removed ${removedCount} old Grade 9 questions.`);

// 3. Insert newly extracted questions
let insertedCount = 0;
grade9ExamsConfig.forEach(cfg => {
  cfg.questions.forEach(q => {
    const qRecord = {
      id: `${cfg.id}-q${q.question_number}`,
      exam_id: cfg.id,
      question_number: q.question_number,
      question_text: q.question_text,
      option_a: q.option_a,
      option_b: q.option_b,
      option_c: q.option_c,
      option_d: q.option_d,
      correct_answer: q.correct_answer,
      explanation: q.explanation || 'Detailed explanation provided.',
      difficulty: q.difficulty || 'medium',
      topic_name: q.topic_name || 'Core Curriculum',
      instruction_category: q.instruction_category || 'Core Questions',
      section_instruction: q.section_instruction || 'Choose the best alternative for each question.',
      reading_passage: q.reading_passage || null,
      passage_title: q.passage_title || null,
      subject_id: cfg.subject_id,
      grade_id: cfg.grade_id,
      exam_title: cfg.title,
      exam_year: cfg.year,
      topic_id: `top-${cfg.subject_id}-grade9`,
      answer_status: 'VERIFIED'
    };
    db.exam_questions.push(qRecord);
    insertedCount++;
  });
});

console.log(`Inserted ${insertedCount} newly extracted Grade 9 questions.`);

// 4. Verify Regional Model Examinations
const modelExams = db.exams.filter(e => e.category === 'MODEL' || e.exam_series === 'Regional Model Examinations');
console.log(`Regional Model Examinations count is now: ${modelExams.length}`);
modelExams.forEach(e => {
  console.log(` - ${e.id}: ${e.title} (${e.total_questions} Qs)`);
});

const grade9Exams = db.exams.filter(e => e.exam_series === 'Grade 9 Exams' || e.category === 'GRADE_9');
console.log(`Grade 9 Exams count is: ${grade9Exams.length}`);
grade9Exams.forEach(e => {
  const qCount = db.exam_questions.filter(q => q.exam_id === e.id).length;
  console.log(` - ${e.id}: ${e.title} (${qCount} Qs in db)`);
});

// Save to disk
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully updated database.json!');
