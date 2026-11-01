const fs = require('fs');
const path = require('path');

const satQs = require('./data_2018_social_sat.cjs');
const mathQs = require('./data_2018_social_math.cjs');
const geogQs = require('./data_2018_social_geog.cjs');
const histQs = require('./data_2018_social_hist.cjs');
const civicsQs = require('./data_2018_social_civics.cjs');
const econQs = require('./data_2018_social_econ.cjs');

const socialExams = [
  {
    id: 'exam-2018-social-sat',
    title: '2018 E.C. Scholastic Aptitude Test (Social Science)',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: '2018 E.C. EUEE Social Science Exams',
    exam_type: 'University Entrance Examination',
    category: 'ENTRANCE',
    source_type: 'OFFICIAL',
    is_free_preview: true,
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    subject_id: 'subj-sat',
    subject_name: 'SAT (Aptitude)',
    description: 'Official 2018 E.C. Ethiopian University Entrance Examination (EUEE) Scholastic Aptitude Test for Social Science stream. Complete 60 questions with comprehensive explanations.',
    instructions: 'This booklet contains 60 Scholastic Aptitude questions for Social Science candidates. Answer all questions within 2 hours. Choose the best answer from the given alternatives (A, B, C, or D).',
    duration_minutes: 120,
    total_questions: 60,
    total_marks: 60,
    status: 'PUBLISHED',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    questions: satQs
  },
  {
    id: 'exam-2018-social-math',
    title: '2018 E.C. Mathematics (Social Science) EUEE Exam',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: '2018 E.C. EUEE Social Science Exams',
    exam_type: 'University Entrance Examination',
    category: 'ENTRANCE',
    source_type: 'OFFICIAL',
    is_free_preview: true,
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    description: 'Official 2018 E.C. Ethiopian University Entrance Examination (EUEE) Mathematics for Social Science stream. Complete 60 questions with detailed step-by-step mathematical proofs and solutions.',
    instructions: 'This booklet contains 60 Mathematics questions for Social Science candidates. Answer all questions within 3 hours. Choose the best answer from the given alternatives (A, B, C, or D).',
    duration_minutes: 180,
    total_questions: 60,
    total_marks: 60,
    status: 'PUBLISHED',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    questions: mathQs
  },
  {
    id: 'exam-2018-social-geog',
    title: '2018 E.C. Geography EUEE Exam',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: '2018 E.C. EUEE Social Science Exams',
    exam_type: 'University Entrance Examination',
    category: 'ENTRANCE',
    source_type: 'OFFICIAL',
    is_free_preview: true,
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    subject_id: 'subj-geog',
    subject_name: 'Geography',
    description: 'Official 2018 E.C. Ethiopian University Entrance Examination (EUEE) Geography Paper. Complete 100 questions covering Ethiopian and global physical, human, economic geography, and GIS.',
    instructions: 'This booklet contains 100 Geography questions. Answer all questions within 2 hours. Choose the best answer from the given alternatives (A, B, C, or D).',
    duration_minutes: 120,
    total_questions: 100,
    total_marks: 100,
    status: 'PUBLISHED',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    questions: geogQs
  },
  {
    id: 'exam-2018-social-hist',
    title: '2018 E.C. History EUEE Exam',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: '2018 E.C. EUEE Social Science Exams',
    exam_type: 'University Entrance Examination',
    category: 'ENTRANCE',
    source_type: 'OFFICIAL',
    is_free_preview: true,
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    subject_id: 'subj-hist',
    subject_name: 'History',
    description: 'Official 2018 E.C. Ethiopian University Entrance Examination (EUEE) History Paper. Complete 100 questions covering Ethiopian, African, and World historical eras from antiquity to modern times.',
    instructions: 'This booklet contains 100 History questions. Answer all questions within 2 hours. Choose the best answer from the given alternatives (A, B, C, or D).',
    duration_minutes: 120,
    total_questions: 100,
    total_marks: 100,
    status: 'PUBLISHED',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    questions: histQs
  },
  {
    id: 'exam-2018-social-civics',
    title: '2018 E.C. Civics and Ethical Education EUEE Exam',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: '2018 E.C. EUEE Social Science Exams',
    exam_type: 'University Entrance Examination',
    category: 'ENTRANCE',
    source_type: 'OFFICIAL',
    is_free_preview: true,
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    subject_id: 'subj-civ',
    subject_name: 'Civics',
    description: 'Official 2018 E.C. Ethiopian University Entrance Examination (EUEE) Civics and Ethical Education Paper. Complete 100 questions covering democracy, constitutionalism, human rights, justice, and patriotism.',
    instructions: 'This booklet contains 100 Civics and Ethical Education questions. Answer all questions within 2 hours. Choose the best answer from the given alternatives (A, B, C, or D).',
    duration_minutes: 120,
    total_questions: 100,
    total_marks: 100,
    status: 'PUBLISHED',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    questions: civicsQs
  },
  {
    id: 'exam-2018-social-econ',
    title: '2018 E.C. Economics EUEE Exam',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: '2018 E.C. EUEE Social Science Exams',
    exam_type: 'University Entrance Examination',
    category: 'ENTRANCE',
    source_type: 'OFFICIAL',
    is_free_preview: true,
    grade_id: 'grade-12-social',
    grade_name: 'Grade 12 - Social Science',
    subject_id: 'subj-econ',
    subject_name: 'Economics',
    description: 'Official 2018 E.C. Ethiopian University Entrance Examination (EUEE) Economics Paper. Complete 100 questions covering microeconomics, macroeconomics, Ethiopian economic development, and international trade.',
    instructions: 'This booklet contains 100 Economics questions. Answer all questions within 2 hours. Choose the best answer from the given alternatives (A, B, C, or D).',
    duration_minutes: 120,
    total_questions: 100,
    total_marks: 100,
    status: 'PUBLISHED',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    questions: econQs
  }
];

// Update 2018 Natural Science exam series names for clear distinction
const updateBackup = () => {
  const backupPath = path.join(__dirname, '..', 'server', 'official_exams_backup.json');
  if (!fs.existsSync(backupPath)) return;
  const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'));

  // Update existing 2018 Natural Science exams
  backup.exams.forEach(ex => {
    if (ex.year === 2018 && (ex.exam_series === '2018 E.C. EUEE Exams' || ex.exam_series === '2018 E.C. EUEE Natural Science Exams')) {
      ex.exam_series = '2018 E.C. EUEE Natural Science Exams';
      if (!ex.grade_id) ex.grade_id = 'grade-12-natural';
      if (!ex.grade_name) ex.grade_name = 'Grade 12 - Natural Science';
    }
  });

  // Remove existing social exams if re-running
  const socialExamIds = new Set(socialExams.map(e => e.id));
  backup.exams = backup.exams.filter(e => !socialExamIds.has(e.id));
  backup.exam_questions = (backup.exam_questions || []).filter(q => !socialExamIds.has(q.exam_id));

  // Add all social exams & questions
  for (const ex of socialExams) {
    const examCopy = { ...ex };
    const qs = examCopy.questions;
    delete examCopy.questions;
    backup.exams.push(examCopy);

    qs.forEach((q, idx) => {
      backup.exam_questions.push({
        id: `q-${ex.id}-${q.question_number || (idx + 1)}`,
        exam_id: ex.id,
        question_number: q.question_number || (idx + 1),
        question_text: q.question_text,
        option_a: q.option_a || (q.options ? q.options[0] : ''),
        option_b: q.option_b || (q.options ? q.options[1] : ''),
        option_c: q.option_c || (q.options ? q.options[2] : ''),
        option_d: q.option_d || (q.options ? q.options[3] : ''),
        options: q.options || [q.option_a, q.option_b, q.option_c, q.option_d],
        correct_answer: q.correct_answer,
        explanation: q.explanation || '',
        topic_name: q.topic_name || '',
        instruction_category: q.instruction_category || ex.subject_name,
        section_instruction: q.section_instruction || '',
        reading_passage: q.reading_passage || '',
        image_url: q.image_url || '',
        diagram_data: q.diagram_data || null,
        grade_id: ex.grade_id,
        subject_id: ex.subject_id,
        points: 1,
        answer_status: 'admin_verified'
      });
    });
  }

  fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2), 'utf8');
  console.log('Successfully updated server/official_exams_backup.json with', backup.exams.length, 'exams and', backup.exam_questions.length, 'questions.');
};

// Also update data/database.json if present
const updateDatabase = () => {
  const dbPath = path.join(__dirname, '..', 'data', 'database.json');
  if (!fs.existsSync(dbPath)) return;
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  // Update existing 2018 Natural Science exams
  db.exams.forEach(ex => {
    if (ex.year === 2018 && (ex.exam_series === '2018 E.C. EUEE Exams' || ex.exam_series === '2018 E.C. EUEE Natural Science Exams')) {
      ex.exam_series = '2018 E.C. EUEE Natural Science Exams';
      if (!ex.grade_id) ex.grade_id = 'grade-12-natural';
      if (!ex.grade_name) ex.grade_name = 'Grade 12 - Natural Science';
    }
  });

  const socialExamIds = new Set(socialExams.map(e => e.id));
  db.exams = db.exams.filter(e => !socialExamIds.has(e.id));
  if (!db.exam_questions) db.exam_questions = [];
  db.exam_questions = db.exam_questions.filter(q => !socialExamIds.has(q.exam_id));

  for (const ex of socialExams) {
    const examCopy = { ...ex };
    const qs = examCopy.questions;
    delete examCopy.questions;
    db.exams.push(examCopy);

    qs.forEach((q, idx) => {
      db.exam_questions.push({
        id: `q-${ex.id}-${q.question_number || (idx + 1)}`,
        exam_id: ex.id,
        question_number: q.question_number || (idx + 1),
        question_text: q.question_text,
        option_a: q.option_a || (q.options ? q.options[0] : ''),
        option_b: q.option_b || (q.options ? q.options[1] : ''),
        option_c: q.option_c || (q.options ? q.options[2] : ''),
        option_d: q.option_d || (q.options ? q.options[3] : ''),
        options: q.options || [q.option_a, q.option_b, q.option_c, q.option_d],
        correct_answer: q.correct_answer,
        explanation: q.explanation || '',
        topic_name: q.topic_name || '',
        instruction_category: q.instruction_category || ex.subject_name,
        section_instruction: q.section_instruction || '',
        reading_passage: q.reading_passage || '',
        image_url: q.image_url || '',
        diagram_data: q.diagram_data || null,
        grade_id: ex.grade_id,
        subject_id: ex.subject_id,
        points: 1,
        answer_status: 'admin_verified'
      });
    });
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Successfully updated data/database.json with', db.exams.length, 'exams and', db.exam_questions.length, 'questions.');
};

updateBackup();
updateDatabase();
