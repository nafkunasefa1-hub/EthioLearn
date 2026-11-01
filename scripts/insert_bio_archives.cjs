const fs = require('fs');
const path = require('path');

const g9Questions = require('./collection_data/bio_grade9_525.cjs');
const g10Questions = require('./collection_data/bio_grade10_497.cjs');
const g1112Questions = require('./collection_data/bio_grade11_12_1403.cjs');

console.log(`Loaded Question Counts:
- Grade 9 National Bio Archive: ${g9Questions.length}
- Grade 10 National Bio Archive: ${g10Questions.length}
- Grades 11 & 12 ESSLCE Bio Archive: ${g1112Questions.length}
`);

const newBioExams = [
  {
    examId: 'exam-collection-bio-g9-525',
    title: 'Biology Grade 9 National Examination Collection (1995–2014)',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    duration_minutes: 300,
    total_questions: g9Questions.length,
    description: 'Complete 525-question Grade 9 National Biology Examination Archive (1995–2011 EGSECE and EUEE 2014) organized across all 6 core units: Biology and Technology, Cell Biology, Human Biology and Health, Microorganisms and Disease, Biological Classification, and Environmental Ecology.',
    instructions: 'Answer all 525 items. Review comprehensive in-depth pedagogical explanations provided for each question.',
    questions: g9Questions
  },
  {
    examId: 'exam-collection-bio-g10-497',
    title: 'Biology Grade 10 National Examination Collection (1995–2014)',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    duration_minutes: 300,
    total_questions: g10Questions.length,
    description: 'Complete 497-question Grade 10 National Biology Examination Archive (1995–2011 EGSECE and EUEE 2014) organized across all 5 core units: Biotechnology & Genetic Engineering, Heredity & Mendelian Genetics, Human Homeostasis & Organ Systems, Food Manufacture in Higher Plants, and Natural Resource Conservation.',
    instructions: 'Time allowed: 5 hours. Answer all questions and examine the step-by-step biological solutions.',
    questions: g10Questions
  },
  {
    examId: 'exam-collection-bio-g11-g12-1403',
    title: 'Biology Grades 11 & 12 ESSLCE / EUEE Comprehensive National Collection (1995–2014)',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    duration_minutes: 600,
    total_questions: g1112Questions.length,
    description: 'Official National 1,403-question comprehensive preparatory examination archive for Grades 11 & 12 (1995–2014 ESSLCE/EUEE). Complete curriculum coverage: The Science of Biology, Biochemical Macromolecules, Enzymology & Kinetics, Cellular Ultrastructure & Transport, Bioenergetics (Photosynthesis & Respiration), Virology & Microbiology, Advanced Ecology & Biomes, Molecular Genetics & Recombinant DNA, Evolutionary Theory & Paleoanthropology, and Animal Behavior (Ethology).',
    instructions: 'Comprehensive exam collection. Answer each question and consult the in-depth academic explanations.',
    questions: g1112Questions
  }
];

const dbPath = path.join(__dirname, '../data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

if (!Array.isArray(db.exams)) db.exams = [];
if (!Array.isArray(db.exam_questions)) db.exam_questions = [];

newBioExams.forEach(item => {
  const formattedQuestions = item.questions.map(q => {
    return {
      id: `q-${item.examId}-${q.question_number}`,
      exam_id: item.examId,
      question_number: q.question_number,
      question_text: q.question_text,
      option_a: q.options?.A || '',
      option_b: q.options?.B || '',
      option_c: q.options?.C || '',
      option_d: q.options?.D || '',
      options: q.options,
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: 'Medium',
      topic_name: q.section || item.subject_name,
      instruction_category: q.section || item.subject_name,
      section_instruction: '',
      subject_id: item.subject_id,
      grade_id: 'grade-all',
      exam_title: item.title,
      exam_year: 2018,
      answer_status: 'admin_verified',
      points: 1
    };
  });

  const examObj = {
    id: item.examId,
    title: item.title,
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: 'Exam Collection',
    exam_type: 'Comprehensive Exam Collection',
    category: 'COLLECTION',
    source_type: 'OFFICIAL',
    is_free_preview: true,
    grade_id: 'grade-all',
    grade_name: 'All Grades (Natural & Social Science)',
    subject_id: item.subject_id,
    subject_name: item.subject_name,
    description: item.description,
    instructions: item.instructions,
    duration_minutes: item.duration_minutes,
    total_questions: item.total_questions,
    total_marks: item.total_questions,
    status: 'PUBLISHED',
    is_demo: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    is_active: true
  };

  const existingIdx = db.exams.findIndex(e => e.id === item.examId);
  if (existingIdx >= 0) {
    db.exams[existingIdx] = examObj;
  } else {
    db.exams.push(examObj);
  }

  // Filter out any previous questions for these exams and insert the new ones
  db.exam_questions = db.exam_questions.filter(q => q.exam_id !== item.examId);
  db.exam_questions.push(...formattedQuestions);

  console.log(`Successfully processed ${item.title}: ${formattedQuestions.length} questions.`);
});

console.log(`\nFinal Database State:
- Total Exams: ${db.exams.length}
- Total Exam Questions: ${db.exam_questions.length}
`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Database saved successfully!');
