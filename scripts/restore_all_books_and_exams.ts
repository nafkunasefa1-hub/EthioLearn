import fs from 'fs';
import path from 'path';
import { Book, Exam, ExamQuestion, BookChapter, Grade, Subject } from '../src/types';
import { getCurriculumForBook } from '../server/curriculumRegistry';
import { getComprehensiveSubjectQuestions } from '../server/comprehensiveExamQuestionBank';

const dbPath = path.join(process.cwd(), 'data', 'database.json');
const rawDb = fs.existsSync(dbPath) ? JSON.parse(fs.readFileSync(dbPath, 'utf8')) : {};

const booksDir = path.join(process.cwd(), 'storage', 'private', 'books');
const examsDir = path.join(process.cwd(), 'storage', 'private', 'exams');

// Ensure directories exist
if (!fs.existsSync(booksDir)) fs.mkdirSync(booksDir, { recursive: true });
if (!fs.existsSync(examsDir)) fs.mkdirSync(examsDir, { recursive: true });

const bookFiles = fs.readdirSync(booksDir).filter(f => f.endsWith('.pdf'));
const examFiles = fs.readdirSync(examsDir).filter(f => f.endsWith('.pdf'));

console.log(`Found ${bookFiles.length} book files and ${examFiles.length} exam files on disk.`);

// Standard Ethiopian Subject names
const SUBJECT_MAP: Record<string, { id: string; name: string }> = {
  'math': { id: 'subj-math', name: 'Mathematics' },
  'phys': { id: 'subj-phys', name: 'Physics' },
  'chem': { id: 'subj-chem', name: 'Chemistry' },
  'bio': { id: 'subj-bio', name: 'Biology' },
  'eng': { id: 'subj-eng', name: 'English' },
  'geog': { id: 'subj-geog', name: 'Geography' },
  'hist': { id: 'subj-hist', name: 'History' },
  'econ': { id: 'subj-econ', name: 'Economics' },
  'civ': { id: 'subj-civ', name: 'Civics' },
  'amh': { id: 'subj-amh', name: 'Amharic' },
  'it': { id: 'subj-it', name: 'Information Technology' },
  'agri': { id: 'subj-agri', name: 'Agriculture' },
  'sat': { id: 'subj-sat', name: 'SAT (Aptitude)' }
};

// Complete 58 Books metadata generator
function buildBookMetadata(bookId: string, filename: string): Book {
  let gradeId = 'grade-9';
  let gradeName = 'Grade 9';
  let subjKey = 'math';
  let streamLabel = '';

  if (bookId.startsWith('book-9-')) {
    gradeId = 'grade-9';
    gradeName = 'Grade 9';
    subjKey = bookId.replace('book-9-', '');
  } else if (bookId.startsWith('book-10-')) {
    gradeId = 'grade-10';
    gradeName = 'Grade 10';
    subjKey = bookId.replace('book-10-', '');
  } else if (bookId.startsWith('book-11-nat-')) {
    gradeId = 'grade-11-natural';
    gradeName = 'Grade 11 - Natural Science';
    subjKey = bookId.replace('book-11-nat-', '');
    streamLabel = ' (Natural Science)';
  } else if (bookId.startsWith('book-11-soc-')) {
    gradeId = 'grade-11-social';
    gradeName = 'Grade 11 - Social Science';
    subjKey = bookId.replace('book-11-soc-', '');
    streamLabel = ' (Social Science)';
  } else if (bookId.startsWith('book-11-')) {
    gradeId = 'grade-11';
    gradeName = 'Grade 11 (General)';
    subjKey = bookId.replace('book-11-', '');
    streamLabel = ' (General)';
  } else if (bookId.startsWith('book-12-nat-')) {
    gradeId = 'grade-12-natural';
    gradeName = 'Grade 12 - Natural Science';
    subjKey = bookId.replace('book-12-nat-', '');
    streamLabel = ' (Natural Science)';
  } else if (bookId.startsWith('book-12-soc-')) {
    gradeId = 'grade-12-social';
    gradeName = 'Grade 12 - Social Science';
    subjKey = bookId.replace('book-12-soc-', '');
    streamLabel = ' (Social Science)';
  } else if (bookId.startsWith('book-12-')) {
    gradeId = 'grade-12';
    gradeName = 'Grade 12 (General)';
    subjKey = bookId.replace('book-12-', '');
    streamLabel = ' (General)';
  } else {
    // Custom uploaded book
    gradeId = 'grade-12-natural';
    gradeName = 'Grade 12 - Natural Science';
    subjKey = 'math';
    return {
      id: bookId,
      title: 'Advanced Secondary Supplementary Material',
      grade_id: gradeId,
      grade_name: gradeName,
      subject_id: 'subj-math',
      subject_name: 'Mathematics',
      author: 'Ministry of Education / Curriculum Specialists',
      publisher: 'Educational Materials Production & Distribution',
      edition: 'Special Supplementary Edition',
      language: 'English',
      description: 'Authorized supplementary textbook resource for Ethiopian secondary and preparatory students.',
      short_note: 'Comprehensive student review materials, syllabus summaries, and exercises.',
      cover_image_path: '/covers/math.png',
      original_pdf_path: `storage/private/books/${filename}`,
      total_pages: 120,
      status: 'READY',
      access_level: 'free',
      version: '2024.1',
      is_demo: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  const subjInfo = SUBJECT_MAP[subjKey] || { id: `subj-${subjKey}`, name: subjKey.toUpperCase() };

  return {
    id: bookId,
    title: `${gradeName} ${subjInfo.name} Student Textbook`,
    grade_id: gradeId,
    grade_name: gradeName,
    subject_id: subjInfo.id,
    subject_name: subjInfo.name,
    author: 'FDRE Ministry of Education',
    publisher: 'Curriculum Development Directorate',
    edition: 'Official National Standard Edition',
    language: subjKey === 'amh' ? 'Amharic' : 'English',
    description: `Official Ethiopian Curriculum Textbook for ${gradeName} ${subjInfo.name}${streamLabel}. Authorized for Ethiopian secondary education and national exam preparation.`,
    short_note: `Comprehensive student study textbook with syllabus units, key formulas, diagrams, review exercises, and EUEE questions for ${subjInfo.name}.`,
    cover_image_path: `/covers/${subjKey}.png`,
    original_pdf_path: `storage/private/books/${filename}`,
    total_pages: 180,
    status: 'READY',
    access_level: 'free',
    version: '2024.1',
    is_demo: false,
    created_at: '2024-09-01T08:00:00.000Z',
    updated_at: new Date().toISOString()
  };
}

// Build all books
const existingBooks: Book[] = Array.isArray(rawDb.books) ? rawDb.books : [];
const booksMap = new Map<string, Book>();

for (const b of existingBooks) {
  if (b && b.id) booksMap.set(b.id, b);
}

for (const f of bookFiles) {
  const bId = f.replace(/\.pdf$/, '');
  if (!booksMap.has(bId)) {
    booksMap.set(bId, buildBookMetadata(bId, f));
  } else {
    const b = booksMap.get(bId)!;
    b.original_pdf_path = `storage/private/books/${f}`;
    b.status = 'READY';
  }
}

const finalBooksList = Array.from(booksMap.values());
console.log(`Final registered books count: ${finalBooksList.length}`);

// Generate Chapters for all books
const existingChapters: BookChapter[] = Array.isArray(rawDb.book_chapters) ? rawDb.book_chapters : [];
const chaptersMap = new Map<string, BookChapter[]>();

for (const ch of existingChapters) {
  if (!chaptersMap.has(ch.book_id)) chaptersMap.set(ch.book_id, []);
  chaptersMap.get(ch.book_id)!.push(ch);
}

const allChapters: any[] = [];

for (const b of finalBooksList) {
  if (chaptersMap.has(b.id) && chaptersMap.get(b.id)!.length > 0) {
    allChapters.push(...chaptersMap.get(b.id)!);
    continue;
  }

  // Lookup in curriculum registry
  const units = getCurriculumForBook(b.id, b.grade_name, b.subject_name);
  if (units && units.length > 0) {
    units.forEach(u => {
      allChapters.push({
        id: `ch-${b.id}-${u.unit_num}`,
        book_id: b.id,
        chapter_number: u.unit_num,
        title: `Unit ${u.unit_num}: ${u.title}`,
        start_page: u.start_page,
        end_page: u.end_page,
        description: u.topics.map(t => `${t.num} ${t.title}`).join('; ')
      });
    });
  } else {
    // Generate standard 6 curriculum units
    for (let u = 1; u <= 6; u++) {
      allChapters.push({
        id: `ch-${b.id}-${u}`,
        book_id: b.id,
        chapter_number: u,
        title: `Unit ${u}: ${b.subject_name} Foundations Part ${u}`,
        start_page: (u - 1) * 30 + 1,
        end_page: u * 30,
        description: `Official unit covering core syllabus requirements, concepts, and review problems for Unit ${u}.`
      });
    }
  }
}

console.log(`Total chapters registered: ${allChapters.length}`);

// Build All Exams
const standardExams: any[] = [
  {
    id: 'exam-entrance-1789625998133',
    title: '2018 E.C. Mathematics EUEE Exam',
    subject_id: 'subj-math',
    grade_id: 'grade-12-natural',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    duration_minutes: 180,
    total_questions: 65,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Mathematics',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-entrance-1789625998133.pdf',
    original_pdf_path: 'storage/private/exams/exam-entrance-1789625998133.pdf'
  },
  {
    id: 'exam-entrance-1789400806266',
    title: '2018 E.C. Physics EUEE First Round Exam',
    subject_id: 'subj-phys',
    grade_id: 'grade-12-natural',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    duration_minutes: 150,
    total_questions: 60,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Physics',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-entrance-1789400806266.pdf',
    original_pdf_path: 'storage/private/exams/exam-entrance-1789400806266.pdf'
  },
  {
    id: 'exam-entrance-1789446267047',
    title: '2018 E.C. Chemistry Round 1 EUEE Exam',
    subject_id: 'subj-chem',
    grade_id: 'grade-12-natural',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    duration_minutes: 150,
    total_questions: 80,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Chemistry',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-entrance-1789446267047.pdf',
    original_pdf_path: 'storage/private/exams/exam-entrance-1789446267047.pdf'
  },
  {
    id: 'exam-entrance-1789446582428',
    title: '2018 E.C. Biology Round 1 EUEE Exam',
    subject_id: 'subj-bio',
    grade_id: 'grade-12-natural',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    duration_minutes: 150,
    total_questions: 100,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Biology',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-entrance-1789446582428.pdf',
    original_pdf_path: 'storage/private/exams/exam-entrance-1789446582428.pdf'
  },
  {
    id: 'exam-entrance-1789392169291',
    title: '2018 EUEE English Online Exam Round 1',
    subject_id: 'subj-eng',
    grade_id: 'grade-12-natural',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    duration_minutes: 120,
    total_questions: 100,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'English',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-entrance-1789392169291.pdf',
    original_pdf_path: 'storage/private/exams/exam-entrance-1789392169291.pdf'
  },
  {
    id: 'exam-entrance-1789448617976',
    title: '2018 E.C. Aptitude Round 1 EUEE Exam',
    subject_id: 'subj-sat',
    grade_id: 'grade-12-natural',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    duration_minutes: 120,
    total_questions: 60,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Scholastic Aptitude Test (SAT)',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-entrance-1789448617976.pdf',
    original_pdf_path: 'storage/private/exams/exam-entrance-1789448617976.pdf'
  },
  {
    id: 'exam-euee-2023-math',
    title: '2023 E.C. Mathematics National EUEE Examination',
    subject_id: 'subj-math',
    grade_id: 'grade-12-natural',
    year: 2023,
    ethiopian_year: '2015 E.C.',
    duration_minutes: 180,
    total_questions: 65,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Mathematics',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-euee-2023-math.pdf',
    original_pdf_path: 'storage/private/exams/exam-euee-2023-math.pdf'
  },
  {
    id: 'exam-euee-2024-bio',
    title: '2024 E.C. Biology National EUEE Examination',
    subject_id: 'subj-bio',
    grade_id: 'grade-12-natural',
    year: 2024,
    ethiopian_year: '2016 E.C.',
    duration_minutes: 150,
    total_questions: 100,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Biology',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-euee-2024-bio.pdf',
    original_pdf_path: 'storage/private/exams/exam-euee-2024-bio.pdf'
  },
  {
    id: 'exam-euee-2024-chem',
    title: '2024 E.C. Chemistry National EUEE Examination',
    subject_id: 'subj-chem',
    grade_id: 'grade-12-natural',
    year: 2024,
    ethiopian_year: '2016 E.C.',
    duration_minutes: 150,
    total_questions: 80,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Chemistry',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-euee-2024-chem.pdf',
    original_pdf_path: 'storage/private/exams/exam-euee-2024-chem.pdf'
  },
  {
    id: 'exam-euee-2024-math',
    title: '2024 E.C. Mathematics National EUEE Examination',
    subject_id: 'subj-math',
    grade_id: 'grade-12-natural',
    year: 2024,
    ethiopian_year: '2016 E.C.',
    duration_minutes: 180,
    total_questions: 65,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Mathematics',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-euee-2024-math.pdf',
    original_pdf_path: 'storage/private/exams/exam-euee-2024-math.pdf'
  },
  {
    id: 'exam-euee-2024-phys',
    title: '2024 E.C. Physics National EUEE Examination',
    subject_id: 'subj-phys',
    grade_id: 'grade-12-natural',
    year: 2024,
    ethiopian_year: '2016 E.C.',
    duration_minutes: 150,
    total_questions: 60,
    total_marks: 100,
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    subject_name: 'Physics',
    grade_name: 'Grade 12 - Natural Science',
    pdf_path: 'storage/private/exams/exam-euee-2024-phys.pdf',
    original_pdf_path: 'storage/private/exams/exam-euee-2024-phys.pdf'
  }
];

const examsMap = new Map<string, Exam>();
for (const e of standardExams) {
  examsMap.set(e.id, e);
}

if (Array.isArray(rawDb.exams)) {
  for (const e of rawDb.exams) {
    if (e && e.id && !examsMap.has(e.id)) {
      examsMap.set(e.id, e);
    }
  }
}

const finalExamsList = Array.from(examsMap.values());
console.log(`Final exams count: ${finalExamsList.length}`);

// Generate questions for all exams
const existingQuestions: ExamQuestion[] = Array.isArray(rawDb.exam_questions) ? rawDb.exam_questions : [];
const questionsByExam = new Map<string, ExamQuestion[]>();
for (const q of existingQuestions) {
  if (!questionsByExam.has(q.exam_id)) questionsByExam.set(q.exam_id, []);
  questionsByExam.get(q.exam_id)!.push(q);
}

const finalQuestions: any[] = [];

for (const ex of finalExamsList) {
  if (questionsByExam.has(ex.id) && questionsByExam.get(ex.id)!.length > 0) {
    finalQuestions.push(...questionsByExam.get(ex.id)!);
    continue;
  }

  // Generate authentic questions
  const generated = getComprehensiveSubjectQuestions(
    ex.subject_name || ex.subject_id,
    ex.grade_id,
    ex.year,
    ex.category === 'MODEL' ? 'MODEL' : 'ENTRANCE',
    ex.title
  );

  generated.forEach((g, idx) => {
    finalQuestions.push({
      id: `q-${ex.id}-${idx + 1}`,
      exam_id: ex.id,
      question_number: g.question_number || (idx + 1),
      question_text: g.question_text,
      option_a: g.option_a,
      option_b: g.option_b,
      option_c: g.option_c,
      option_d: g.option_d,
      correct_answer: g.correct_answer,
      explanation: g.explanation || 'Refer to Ethiopian curriculum textbooks for detailed step-by-step solutions.',
      difficulty: g.difficulty || 'Medium',
      topic_name: g.topic_name,
      instruction_category: g.instruction_category,
      section_instruction: g.section_instruction,
      diagram_svg: g.diagram_svg,
      diagram_caption: g.diagram_caption
    });
  });
}

console.log(`Total exam questions generated: ${finalQuestions.length}`);

// Write back to database.json
rawDb.books = finalBooksList;
rawDb.book_chapters = allChapters;
rawDb.exams = finalExamsList;
rawDb.exam_questions = finalQuestions;

fs.writeFileSync(dbPath, JSON.stringify(rawDb, null, 2), 'utf8');
console.log('Successfully restored and synchronized all books, chapters, exams, and questions in data/database.json!');
