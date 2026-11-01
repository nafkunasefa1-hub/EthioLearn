// scripts/seed_grade9_exams.cjs
// Master seeder for Grade 9 Comprehensive Exams (50 questions per exam)
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
if (!fs.existsSync(dbPath)) {
  console.error('Database file not found!');
  process.exit(1);
}

const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Ensure the "Grade 9 Exams" category is added
if (!db.exam_categories) {
  db.exam_categories = [];
}
if (!db.exam_categories.includes('Grade 9 Exams')) {
  db.exam_categories.push('Grade 9 Exams');
}

// 2. Ensure the 5 Grade 9 exams exist with total_questions = 50
const exams = [
  {
    id: 'exam-grade9-math',
    title: 'Grade 9 Mathematics Comprehensive National Exam',
    category: 'MODEL',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    grade_id: 'grade-9',
    grade_name: 'Grade 9',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: 'Grade 9 Exams',
    duration_minutes: 120,
    total_questions: 50,
    instructions: 'Answer all 50 questions. Questions cover the real number system, equations and inequalities, linear functions, geometry, measurement, and statistics and probability.',
    status: 'PUBLISHED',
    is_active: true,
    source_type: 'SYSTEM_SEEDED'
  },
  {
    id: 'exam-grade9-phys',
    title: 'Grade 9 Physics Comprehensive National Exam',
    category: 'MODEL',
    subject_id: 'subj-phys',
    subject_name: 'Physics',
    grade_id: 'grade-9',
    grade_name: 'Grade 9',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: 'Grade 9 Exams',
    duration_minutes: 120,
    total_questions: 50,
    instructions: 'Answer all 50 questions. Standard gravity g = 9.8 m/s² (or 10 m/s² where specified) may be used. Questions cover Units 1 to 6.',
    status: 'PUBLISHED',
    is_active: true,
    source_type: 'SYSTEM_SEEDED'
  },
  {
    id: 'exam-grade9-chem',
    title: 'Grade 9 Chemistry Comprehensive National Exam',
    category: 'MODEL',
    subject_id: 'subj-chem',
    subject_name: 'Chemistry',
    grade_id: 'grade-9',
    grade_name: 'Grade 9',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: 'Grade 9 Exams',
    duration_minutes: 120,
    total_questions: 50,
    instructions: 'Answer all 50 questions. Covers chemistry and its importance, measurements, atomic structure, periodic properties, and chemical bonding.',
    status: 'PUBLISHED',
    is_active: true,
    source_type: 'SYSTEM_SEEDED'
  },
  {
    id: 'exam-grade9-bio',
    title: 'Grade 9 Biology Comprehensive National Exam',
    category: 'MODEL',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    grade_id: 'grade-9',
    grade_name: 'Grade 9',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: 'Grade 9 Exams',
    duration_minutes: 120,
    total_questions: 50,
    instructions: 'Answer all 50 questions. Covers introduction to biology, taxonomy, cell biology, human systems, microorganisms, and ecology.',
    status: 'PUBLISHED',
    is_active: true,
    source_type: 'SYSTEM_SEEDED'
  },
  {
    id: 'exam-grade9-eng',
    title: 'Grade 9 English Comprehensive National Exam',
    category: 'MODEL',
    subject_id: 'subj-eng',
    subject_name: 'English',
    grade_id: 'grade-9',
    grade_name: 'Grade 9',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: 'Grade 9 Exams',
    duration_minutes: 120,
    total_questions: 50,
    instructions: 'Answer all 50 questions covering grammar, tenses, passive voice, reported speech, conditionals, vocabulary, reading comprehension, and communication skills.',
    status: 'PUBLISHED',
    is_active: true,
    source_type: 'SYSTEM_SEEDED'
  }
];

// Update or add the 5 exams
exams.forEach(ex => {
  const existingIdx = db.exams.findIndex(e => e.id === ex.id);
  if (existingIdx >= 0) {
    db.exams[existingIdx] = { ...db.exams[existingIdx], ...ex };
  } else {
    db.exams.push(ex);
  }
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');

// Now run the 5 subject seeders
console.log('Seeding 50 questions for each of the 5 Grade 9 exams...');
require('./seed_grade9_math_50.cjs');
require('./seed_grade9_phys_50.cjs');
require('./seed_grade9_chem_50.cjs');
require('./seed_grade9_bio_50.cjs');
require('./seed_grade9_eng_50.cjs');

console.log('All 5 Grade 9 exams have been successfully seeded with 50 questions each!');
