const fs = require('fs');
const path = require('path');

// Load datasets
const chemP1 = require('./collection_data/chem_part1.cjs');
const chemP2 = require('./collection_data/chem_part2.cjs');
const chemQuestions = [...chemP1, ...chemP2];

const satQuestions = require('./collection_data/sat_2014.cjs');
const econQuestions = require('./collection_data/econ_480.cjs');
const histQuestions = require('./collection_data/history_701.cjs');
const bioQuestions = require('./collection_data/biology_1000.cjs');
const geoQuestions = require('./collection_data/geography_500.cjs');

console.log(`Loaded Questions Counts:
- Chemistry: ${chemQuestions.length}
- SAT: ${satQuestions.length}
- Economics: ${econQuestions.length}
- History: ${histQuestions.length}
- Biology: ${bioQuestions.length}
- Geography: ${geoQuestions.length}
`);

const newExams = [
  {
    examId: 'exam-collection-chem-507',
    title: 'Chemistry Comprehensive 507 Examination Collection',
    subject_id: 'subj-chem',
    subject_name: 'Chemistry',
    duration_minutes: 300,
    total_questions: chemQuestions.length,
    description: 'Comprehensive 507-question chemistry examination collection covering Atomic Structure, Chemical Bonding, Molecular Geometry, Hybridization, Molecular Orbital Theory, Chemical Kinetics, Equilibrium, Thermodynamics, Acids & Bases, Electrochemistry, Organic Reactions, Polymers, and Industrial Chemistry.',
    instructions: 'Answer all questions. Review detailed step-by-step explanations for each solution.',
    questions: chemQuestions
  },
  {
    examId: 'exam-collection-sat-2014-60',
    title: 'Scholastic Aptitude Test (SAT) - ESSLCE 2014 National Exam',
    subject_id: 'subj-sat',
    subject_name: 'Aptitude',
    duration_minutes: 120,
    total_questions: satQuestions.length,
    description: 'Official National ESSLCE Scholastic Aptitude Test containing Verbal Reasoning (Classification, Logical Deductions, Reading Comprehension, Synonyms, Antonyms, Analogies) and Quantitative Reasoning (Data Interpretation, Algebra, Geometry, Probability, Sequences).',
    instructions: 'Time allowed: 2 hours. Choose the best answer for each item.',
    questions: satQuestions
  },
  {
    examId: 'exam-collection-econ-480',
    title: 'Economics Comprehensive 480 Examination Collection',
    subject_id: 'subj-econ',
    subject_name: 'Economics',
    duration_minutes: 300,
    total_questions: econQuestions.length,
    description: 'Complete 480-question curriculum-aligned economics collection covering Fundamental Macroeconomic Concepts, Aggregate Demand & Supply, Market Failure & Consumer Protection, Policy Instruments, Tax Theory, Poverty & Inequality, Ethiopian Economic Reforms, and Climate Economics.',
    instructions: 'Carefully analyze each macroeconomic scenario and choose the most appropriate answer.',
    questions: econQuestions
  },
  {
    examId: 'exam-collection-hist-701',
    title: 'History Comprehensive 701 Examination Collection',
    subject_id: 'subj-hist',
    subject_name: 'History',
    duration_minutes: 360,
    total_questions: histQuestions.length,
    description: 'Comprehensive 701-question history examination collection covering Ancient World & Ethiopian Civilizations, Human Evolution, Medieval States & Sultanates, World Revolutions, Pan-Africanism, African Colonial Resistance, Battle of Adwa, 20th-Century Ethiopian History, and Modern Global Affairs.',
    instructions: 'Select the best historical answer for each item. Read the in-depth pedagogical historical context for each question.',
    questions: histQuestions
  },
  {
    examId: 'exam-collection-bio-1000',
    title: 'Biology Comprehensive 1000 Examination Collection',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    duration_minutes: 400,
    total_questions: bioQuestions.length,
    description: 'Complete 1000-question biology collection prepared by Solomon Woldesenbet [Saint Joseph School] covering Animals & Zoology, Photosynthesis & Cellular Respiration, Homeostasis & Endocrine Controls, Microbiology, Genetics & Evolutionary Biology, Circulatory & Respiratory Systems, Enzymology, and Taxonomy of the Five Kingdoms.',
    instructions: 'Answer all questions. Each item contains full pedagogical explanations and correct answer keys.',
    questions: bioQuestions
  },
  {
    examId: 'exam-collection-geo-500',
    title: 'Geography Comprehensive 500 Examination Collection',
    subject_id: 'subj-geo',
    subject_name: 'Geography',
    duration_minutes: 300,
    total_questions: geoQuestions.length,
    description: 'Comprehensive 500-question geography worksheet collection covering Grades 9, 10, 11, and 12 curriculum: Physical & Human Geography, Geological History of Ethiopia, Landforms & Climates of Africa, Economic Systems, Resource Management, Regional Integration (AfCFTA, ECOWAS), and Global Climate Dynamics (CRGE Strategy).',
    instructions: 'Choose the best geographical alternative for each item.',
    questions: geoQuestions
  }
];

const dbPath = path.join(__dirname, '../data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

if (!Array.isArray(db.exams)) db.exams = [];
if (!Array.isArray(db.exam_questions)) db.exam_questions = [];

newExams.forEach(item => {
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
      section_instruction: q.passage ? 'Read the passage and answer the following question.' : '',
      passage: q.passage || undefined,
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

  // Remove old questions for this exam and push new ones
  db.exam_questions = db.exam_questions.filter(q => q.exam_id !== item.examId);
  db.exam_questions.push(...formattedQuestions);

  console.log(`Successfully processed ${item.title}: ${formattedQuestions.length} questions.`);
});

console.log(`\nFinal Database State:
- Total Exams: ${db.exams.length}
- Total Exam Questions: ${db.exam_questions.length}
`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Database successfully saved!');
