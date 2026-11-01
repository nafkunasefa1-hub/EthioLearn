const fs = require('fs');
const path = require('path');

const { bio2016Questions } = require('./data_2016_bio.cjs');
const { bio2016Questions_21_50 } = require('./data_2016_bio_21_50.cjs');
const { bio2016Questions_51_75 } = require('./data_2016_bio_51_75.cjs');
const { bio2016Questions_76_100 } = require('./data_2016_bio_76_100.cjs');

const { phys2016Questions_1_30 } = require('./data_2016_phys_1_30.cjs');
const { phys2016Questions_31_60 } = require('./data_2016_phys_31_60.cjs');

const allBioQuestions = [
  ...bio2016Questions,
  ...bio2016Questions_21_50,
  ...bio2016Questions_51_75,
  ...bio2016Questions_76_100
];

const allPhysQuestions = [
  ...phys2016Questions_1_30,
  ...phys2016Questions_31_60
];

console.log(`Loaded ${allBioQuestions.length} Biology questions and ${allPhysQuestions.length} Physics questions.`);

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Verify Biology Subject and Physics Subject
const bioSubj = db.subjects.find(s => s.id === 'subj-bio') || { id: 'subj-bio', name: 'Biology' };
const physSubj = db.subjects.find(s => s.id === 'subj-phys') || { id: 'subj-phys', name: 'Physics' };

const bioExamId = 'exam-entrance-2016-bio';
const physExamId = 'exam-entrance-2016-phys';

const bioExamRecord = {
  id: bioExamId,
  title: '2016 E.C. Ethiopian University Entrance Examination (EUEE) Biology',
  description: 'Official 2016 E.C. National EUEE Biology Examination for Grade 12 Natural Science students with 100 comprehensive questions and in-depth pedagogical explanations.',
  subject_id: bioSubj.id,
  subject_name: bioSubj.name,
  grade_id: 'grade-12',
  grade_name: 'Grade 12',
  year: 2016,
  ethiopian_year: '2016 E.C.',
  exam_series: '2016 E.C. EUEE Exams',
  category: 'ENTRANCE',
  duration_minutes: 120,
  total_questions: allBioQuestions.length,
  passing_score: 50,
  instructions: 'Answer all 100 questions. Each question is directly extracted from the 2016 E.C. national exam with in-depth explanations.'
};

const physExamRecord = {
  id: physExamId,
  title: '2016 E.C. Ethiopian University Entrance Examination (EUEE) Physics',
  description: 'Official 2016 E.C. National EUEE Physics Examination / ESSPT Pilot Paper for Grade 12 Natural Science students with 60 comprehensive questions and step-by-step mathematical derivations.',
  subject_id: physSubj.id,
  subject_name: physSubj.name,
  grade_id: 'grade-12',
  grade_name: 'Grade 12',
  year: 2016,
  ethiopian_year: '2016 E.C.',
  exam_series: '2016 E.C. EUEE Exams',
  category: 'ENTRANCE',
  duration_minutes: 120,
  total_questions: allPhysQuestions.length,
  passing_score: 50,
  instructions: 'Answer all 60 questions. Review the complete step-by-step physical derivations and formulas.'
};

// Update or insert exams
db.exams = db.exams.filter(e => e.id !== bioExamId && e.id !== physExamId);
db.exams.push(bioExamRecord);
db.exams.push(physExamRecord);

// Remove any existing questions for these exams
db.exam_questions = db.exam_questions.filter(q => q.exam_id !== bioExamId && q.exam_id !== physExamId);

// Format and add questions
allBioQuestions.forEach((q, idx) => {
  db.exam_questions.push({
    id: `${bioExamId}-q${q.question_number || idx + 1}`,
    exam_id: bioExamId,
    question_number: q.question_number || idx + 1,
    question_text: q.question_text,
    option_a: q.option_a,
    option_b: q.option_b,
    option_c: q.option_c,
    option_d: q.option_d,
    correct_answer: q.correct_answer,
    explanation: q.explanation,
    instruction_category: q.instruction_category || 'General Biology',
    topic_name: q.topic_name || 'Biology',
    difficulty: q.difficulty || 'Medium',
    points: 1
  });
});

allPhysQuestions.forEach((q, idx) => {
  db.exam_questions.push({
    id: `${physExamId}-q${q.question_number || idx + 1}`,
    exam_id: physExamId,
    question_number: q.question_number || idx + 1,
    question_text: q.question_text,
    option_a: q.option_a,
    option_b: q.option_b,
    option_c: q.option_c,
    option_d: q.option_d,
    correct_answer: q.correct_answer,
    explanation: q.explanation,
    instruction_category: q.instruction_category || 'General Physics',
    topic_name: q.topic_name || 'Physics',
    difficulty: q.difficulty || 'Medium',
    points: 1
  });
});

// Save database
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Database successfully updated!');
console.log(`Total exams now in db: ${db.exams.length}`);
console.log(`Total questions for ${bioExamId}: ${db.exam_questions.filter(q => q.exam_id === bioExamId).length}`);
console.log(`Total questions for ${physExamId}: ${db.exam_questions.filter(q => q.exam_id === physExamId).length}`);
