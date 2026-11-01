const fs = require('fs');
const path = require('path');

const bioQuestions = require('./data_grade10_bio.cjs');
const engQuestions = require('./data_grade10_eng.cjs');
const mathQuestions = require('./data_grade10_math.cjs');
const chemQuestions = require('./data_grade10_chem.cjs');
const physQuestions = require('./data_grade10_phys.cjs');

const dbPath = path.join(__dirname, '../data/database.json');
const backupPath = path.join(__dirname, '../server/official_exams_backup.json');

const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Define the 5 Grade 10 Exam records
const grade10Exams = [
  {
    id: "exam-grade10-bio",
    title: "Grade 10 Biology Final Exam",
    subject_id: "subj-bio",
    grade_id: "grade-10",
    year: 2016,
    duration_minutes: 120,
    total_marks: 60,
    pass_percentage: 50,
    description: "Official Grade 10 Biology First Semester Final Exam for Boarding and Non-Boarding (Special) Schools, 2016 E.C. (2024 G.C.)",
    is_published: true,
    is_official: true,
    category: "GRADE_10",
    exam_series: "Grade 10 Exams",
    stream: "NATURAL",
    order_index: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "exam-grade10-eng",
    title: "Grade 10 English Final Exam",
    subject_id: "subj-eng",
    grade_id: "grade-10",
    year: 2016,
    duration_minutes: 120,
    total_marks: 60,
    pass_percentage: 50,
    description: "Official Grade 10 English First Semester Final Exam for Boarding and Non-Boarding (Special) Schools, 2016 E.C. (2024 G.C.)",
    is_published: true,
    is_official: true,
    category: "GRADE_10",
    exam_series: "Grade 10 Exams",
    stream: "NATURAL",
    order_index: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "exam-grade10-math",
    title: "Grade 10 Mathematics Final Exam",
    subject_id: "subj-math",
    grade_id: "grade-10",
    year: 2016,
    duration_minutes: 120,
    total_marks: 60,
    pass_percentage: 50,
    description: "Official Grade 10 Mathematics Final Exam for Boarding and Non-Boarding (Special) Schools, 2016 E.C. (2024 G.C.)",
    is_published: true,
    is_official: true,
    category: "GRADE_10",
    exam_series: "Grade 10 Exams",
    stream: "NATURAL",
    order_index: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "exam-grade10-chem",
    title: "Grade 10 Chemistry Final Exam",
    subject_id: "subj-chem",
    grade_id: "grade-10",
    year: 2016,
    duration_minutes: 120,
    total_marks: 60,
    pass_percentage: 50,
    description: "Official Grade 10 Chemistry Final Exam for Boarding and Non-Boarding (Special) Schools, 2016 E.C. (2024 G.C.)",
    is_published: true,
    is_official: true,
    category: "GRADE_10",
    exam_series: "Grade 10 Exams",
    stream: "NATURAL",
    order_index: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "exam-grade10-phys",
    title: "Grade 10 Physics Final Exam",
    subject_id: "subj-phys",
    grade_id: "grade-10",
    year: 2016,
    duration_minutes: 90,
    total_marks: 45,
    pass_percentage: 50,
    description: "Official Grade 10 Physics Final Exam for Boarding and Non-Boarding (Special) Schools, 2016 E.C. (2024 G.C.)",
    is_published: true,
    is_official: true,
    category: "GRADE_10",
    exam_series: "Grade 10 Exams",
    stream: "NATURAL",
    order_index: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

function transformQuestions(rawQuestions, examId, subjectId, examTitle, totalMarks) {
  return rawQuestions.map((q) => {
    const optA = q.option_a || (q.options && q.options[0]) || '';
    const optB = q.option_b || (q.options && q.options[1]) || '';
    const optC = q.option_c || (q.options && q.options[2]) || '';
    const optD = q.option_d || (q.options && q.options[3]) || '';

    return {
      id: `${examId}-q${q.question_number}`,
      exam_id: examId,
      question_number: q.question_number,
      question_text: q.question_text,
      option_a: optA,
      option_b: optB,
      option_c: optC,
      option_d: optD,
      options: [optA, optB, optC, optD],
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty || "medium",
      topic_name: q.topic_name || "General Review",
      instruction_category: q.instruction_category || "General",
      section_instruction: q.section_instruction || "Choose the best answer from the given alternatives.",
      reading_passage: q.reading_passage || null,
      passage_title: q.passage_title || null,
      subject_id: subjectId,
      grade_id: "grade-10",
      exam_title: examTitle,
      exam_year: 2016,
      topic_id: `top-${subjectId}-grade10`,
      answer_status: "VERIFIED",
      marks: 1
    };
  });
}

const allGrade10Questions = [
  ...transformQuestions(bioQuestions, "exam-grade10-bio", "subj-bio", "Grade 10 Biology Final Exam", 60),
  ...transformQuestions(engQuestions, "exam-grade10-eng", "subj-eng", "Grade 10 English Final Exam", 60),
  ...transformQuestions(mathQuestions, "exam-grade10-math", "subj-math", "Grade 10 Mathematics Final Exam", 60),
  ...transformQuestions(chemQuestions, "exam-grade10-chem", "subj-chem", "Grade 10 Chemistry Final Exam", 60),
  ...transformQuestions(physQuestions, "exam-grade10-phys", "subj-phys", "Grade 10 Physics Final Exam", 45),
];

console.log(`Prepared ${grade10Exams.length} exams and ${allGrade10Questions.length} total questions.`);

// 1. Update database.json
// Remove existing grade 10 exams if any to avoid duplication
const g10ExamIds = new Set(grade10Exams.map(e => e.id));
db.exams = db.exams.filter(e => !g10ExamIds.has(e.id));
db.exams.push(...grade10Exams);

// Remove existing grade 10 questions if any
db.exam_questions = db.exam_questions.filter(q => !g10ExamIds.has(q.exam_id));
db.exam_questions.push(...allGrade10Questions);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully updated database.json with ${grade10Exams.length} exams and ${allGrade10Questions.length} questions.`);

// 2. Update server/official_exams_backup.json if it exists
if (fs.existsSync(backupPath)) {
  const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
  backup.exams = (backup.exams || []).filter(e => !g10ExamIds.has(e.id));
  backup.exams.push(...grade10Exams);

  backup.exam_questions = (backup.exam_questions || []).filter(q => !g10ExamIds.has(q.exam_id));
  backup.exam_questions.push(...allGrade10Questions);

  fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2), 'utf8');
  console.log(`Successfully updated server/official_exams_backup.json.`);
}
