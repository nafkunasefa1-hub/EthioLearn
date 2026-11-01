const fs = require('fs');
const path = require('path');

const bioQuestions = require('./data_grade11_bio.cjs');
const engQuestions = require('./data_grade11_eng.cjs');
const mathQuestions = require('./data_grade11_math.cjs');
const chemQuestions = require('./data_grade11_chem.cjs');
const physQuestions = require('./data_grade11_phys.cjs');

const dbPath = path.join(__dirname, '../data/database.json');
const backupPath = path.join(__dirname, '../server/official_exams_backup.json');

const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Define the 5 Grade 11 Natural Science Exam records
const grade11Exams = [
  {
    id: "exam-grade11-nat-bio",
    title: "Grade 11 Natural Science Biology Final Exam",
    subject_id: "subj-bio",
    grade_id: "grade-11-natural",
    year: 2016,
    ethiopian_year: "2016 E.C.",
    duration_minutes: 120,
    total_questions: bioQuestions.length,
    total_marks: bioQuestions.length,
    pass_percentage: 50,
    description: "Official Grade 11 Biology Final Exam for Special and Boarding Schools, Academic Year 2016 E.C. (2024 G.C.) - Natural Science Stream",
    instructions: "Answer all questions. Each question has four alternatives, choose the best answer.",
    is_published: true,
    is_official: true,
    status: "PUBLISHED",
    category: "GRADE_11_NATURAL",
    exam_series: "Grade 11 Natural Science Exams",
    stream: "NATURAL",
    order_index: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "exam-grade11-nat-eng",
    title: "Grade 11 Natural Science English Final Exam",
    subject_id: "subj-eng",
    grade_id: "grade-11-natural",
    year: 2016,
    ethiopian_year: "2016 E.C.",
    duration_minutes: 120,
    total_questions: engQuestions.length,
    total_marks: engQuestions.length,
    pass_percentage: 50,
    description: "Official Grade 11 English Final Exam for Special and Boarding Schools, Academic Year 2016 E.C. (2024 G.C.)",
    instructions: "Answer all questions. Choose the correct response according to standard English grammar and comprehension.",
    is_published: true,
    is_official: true,
    status: "PUBLISHED",
    category: "GRADE_11_NATURAL",
    exam_series: "Grade 11 Natural Science Exams",
    stream: "NATURAL",
    order_index: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "exam-grade11-nat-math",
    title: "Grade 11 Natural Science Mathematics Final Exam",
    subject_id: "subj-math",
    grade_id: "grade-11-natural",
    year: 2016,
    ethiopian_year: "2016 E.C.",
    duration_minutes: 150,
    total_questions: mathQuestions.length,
    total_marks: mathQuestions.length,
    pass_percentage: 50,
    description: "Official Grade 11 Mathematics for Natural Science Stream Final Exam for Special and Boarding Schools, Academic Year 2016 E.C. (2024 G.C.)",
    instructions: "Solve all problems carefully. Choose the correct alternative from the given choices.",
    is_published: true,
    is_official: true,
    status: "PUBLISHED",
    category: "GRADE_11_NATURAL",
    exam_series: "Grade 11 Natural Science Exams",
    stream: "NATURAL",
    order_index: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "exam-grade11-nat-chem",
    title: "Grade 11 Natural Science Chemistry Final Exam",
    subject_id: "subj-chem",
    grade_id: "grade-11-natural",
    year: 2016,
    ethiopian_year: "2016 E.C.",
    duration_minutes: 120,
    total_questions: chemQuestions.length,
    total_marks: chemQuestions.length,
    pass_percentage: 50,
    description: "Official Grade 11 Chemistry Final Exam for Special and Boarding Schools, Academic Year 2016 E.C. (2024 G.C.) - Natural Science Stream",
    instructions: "Answer all questions. Check chemical equations, stoichiometry, and atomic configurations carefully.",
    is_published: true,
    is_official: true,
    status: "PUBLISHED",
    category: "GRADE_11_NATURAL",
    exam_series: "Grade 11 Natural Science Exams",
    stream: "NATURAL",
    order_index: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "exam-grade11-nat-phys",
    title: "Grade 11 Natural Science Physics Final Exam",
    subject_id: "subj-phys",
    grade_id: "grade-11-natural",
    year: 2016,
    ethiopian_year: "2016 E.C.",
    duration_minutes: 120,
    total_questions: physQuestions.length,
    total_marks: physQuestions.length,
    pass_percentage: 50,
    description: "Official Grade 11 Physics Final Exam for Special and Boarding Schools, Academic Year 2016 E.C. (2024 G.C.) - Natural Science Stream",
    instructions: "Answer all questions. Use standard physical constants given in the problem statements.",
    is_published: true,
    is_official: true,
    status: "PUBLISHED",
    category: "GRADE_11_NATURAL",
    exam_series: "Grade 11 Natural Science Exams",
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
      topic_name: q.topic_name || "Grade 11 Natural Science Curriculum",
      instruction_category: q.instruction_category || "General",
      section_instruction: q.section_instruction || "Choose the best answer from the given alternatives.",
      reading_passage: q.reading_passage || null,
      passage_title: q.passage_title || null,
      subject_id: subjectId,
      grade_id: "grade-11-natural",
      exam_title: examTitle,
      exam_year: 2016,
      topic_id: `top-${subjectId}-grade11-nat`,
      answer_status: "VERIFIED",
      marks: 1
    };
  });
}

const allGrade11Questions = [
  ...transformQuestions(bioQuestions, "exam-grade11-nat-bio", "subj-bio", "Grade 11 Natural Science Biology Final Exam", 60),
  ...transformQuestions(engQuestions, "exam-grade11-nat-eng", "subj-eng", "Grade 11 Natural Science English Final Exam", 80),
  ...transformQuestions(mathQuestions, "exam-grade11-nat-math", "subj-math", "Grade 11 Natural Science Mathematics Final Exam", 65),
  ...transformQuestions(chemQuestions, "exam-grade11-nat-chem", "subj-chem", "Grade 11 Natural Science Chemistry Final Exam", 80),
  ...transformQuestions(physQuestions, "exam-grade11-nat-phys", "subj-phys", "Grade 11 Natural Science Physics Final Exam", 50),
];

console.log(`Prepared ${grade11Exams.length} exams and ${allGrade11Questions.length} total questions for Grade 11 Natural Science.`);

// 1. Update database.json
const g11ExamIds = new Set(grade11Exams.map(e => e.id));
db.exams = db.exams.filter(e => !g11ExamIds.has(e.id));
db.exams.push(...grade11Exams);

// Remove existing grade 11 questions if any
db.exam_questions = db.exam_questions.filter(q => !g11ExamIds.has(q.exam_id));
db.exam_questions.push(...allGrade11Questions);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully updated database.json with ${grade11Exams.length} exams and ${allGrade11Questions.length} questions.`);

// 2. Update server/official_exams_backup.json if it exists
if (fs.existsSync(backupPath)) {
  const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
  backup.exams = (backup.exams || []).filter(e => !g11ExamIds.has(e.id));
  backup.exams.push(...grade11Exams);

  backup.exam_questions = (backup.exam_questions || []).filter(q => !g11ExamIds.has(q.exam_id));
  backup.exam_questions.push(...allGrade11Questions);

  fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2), 'utf8');
  console.log(`Successfully updated server/official_exams_backup.json.`);
}
