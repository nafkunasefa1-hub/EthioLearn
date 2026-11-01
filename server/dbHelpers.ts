import { Book, Exam, ExamQuestion, BookChapter } from '../src/types';
import { getCurriculumForBook } from './curriculumRegistry';
import { getComprehensiveSubjectQuestions } from './comprehensiveExamQuestionBank';

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

export function buildDiscoveredBookMetadata(bookId: string, filename: string): Book {
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
    return {
      id: bookId,
      title: 'Advanced Secondary Supplementary Material',
      grade_id: 'grade-12-natural',
      grade_name: 'Grade 12 - Natural Science',
      subject_id: 'subj-math',
      subject_name: 'Mathematics',
      author: 'FDRE Ministry of Education / Curriculum Specialists',
      publisher: 'Educational Materials Production & Distribution',
      edition: 'National Curriculum Standard Edition',
      language: 'English',
      description: 'Authorized supplementary textbook resource for Ethiopian secondary and preparatory students.',
      short_note: 'Comprehensive student review materials, syllabus summaries, and exercises.',
      cover_image_path: '/covers/math.png',
      original_pdf_path: `storage/private/books/${filename}`,
      total_pages: bookId === '1789568769794-7d4lqu' ? 120 : 180,
      processed_pages: bookId === '1789568769794-7d4lqu' ? 120 : 180,
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
    processed_pages: 180,
    status: 'READY',
    access_level: 'free',
    version: '2024.1',
    is_demo: false,
    created_at: '2024-09-01T08:00:00.000Z',
    updated_at: new Date().toISOString()
  };
}

export function buildDiscoveredExamMetadata(examId: string, filename: string): Exam {
  let subjId = 'subj-math';
  let subjName = 'Mathematics';
  let year = 2024;
  let ethYear = '2016 E.C.';

  if (examId.includes('phys')) {
    subjId = 'subj-phys';
    subjName = 'Physics';
  } else if (examId.includes('chem')) {
    subjId = 'subj-chem';
    subjName = 'Chemistry';
  } else if (examId.includes('bio')) {
    subjId = 'subj-bio';
    subjName = 'Biology';
  } else if (examId.includes('eng')) {
    subjId = 'subj-eng';
    subjName = 'English';
  } else if (examId.includes('sat') || examId.includes('apt')) {
    subjId = 'subj-sat';
    subjName = 'Scholastic Aptitude Test (SAT)';
  }

  if (examId.includes('2018')) {
    year = 2018;
    ethYear = '2018 E.C.';
  } else if (examId.includes('2023')) {
    year = 2023;
    ethYear = '2015 E.C.';
  } else if (examId.includes('2024')) {
    year = 2024;
    ethYear = '2016 E.C.';
  }

  return {
    id: examId,
    title: `${year} E.C. ${subjName} National EUEE Examination`,
    subject_id: subjId,
    subject_name: subjName,
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year,
    ethiopian_year: ethYear,
    duration_minutes: subjId === 'subj-math' ? 180 : 150,
    total_questions: subjId === 'subj-chem' ? 80 : (subjId === 'subj-bio' || subjId === 'subj-eng' ? 100 : (subjId === 'subj-math' ? 65 : 60)),
    exam_type: 'University Entrance Examination',
    category: 'ENTRANCE',
    exam_series: 'National EUEE Exams',
    description: 'Official National EUEE examination with detailed solutions and step-by-step guidance.',
    instructions: 'Answer all questions carefully within the allocated time limit.',
    status: 'PUBLISHED',
    pdf_path: `storage/private/exams/${filename}`,
    original_pdf_path: `storage/private/exams/${filename}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

export function generateChaptersForBook(book: Book): BookChapter[] {
  const units = getCurriculumForBook(book.id, book.grade_name, book.subject_name);
  if (units && units.length > 0) {
    return units.map(u => {
      const chapId = `ch-${book.id}-${u.unit_num}`;
      return {
        id: chapId,
        book_id: book.id,
        chapter_number: u.unit_num,
        chapter_title: `Unit ${u.unit_num}: ${u.title}`,
        start_page: u.start_page,
        end_page: u.end_page,
        description: u.topics.map(t => `${t.num} ${t.title}`).join('; '),
        topics: u.topics.map(t => ({
          id: `top-${chapId}-${t.num.replace(/\./g, '_')}`,
          chapter_id: chapId,
          topic_number: t.num,
          title: t.title,
          start_page: t.start,
          description: t.desc || `Curriculum topic ${t.num}: ${t.title}`
        }))
      };
    });
  }

  const generated: BookChapter[] = [];
  for (let u = 1; u <= 6; u++) {
    generated.push({
      id: `ch-${book.id}-${u}`,
      book_id: book.id,
      chapter_number: u,
      chapter_title: `Unit ${u}: ${book.subject_name} Foundations Part ${u}`,
      start_page: (u - 1) * 30 + 1,
      end_page: u * 30,
      description: `Official curriculum unit covering syllabus requirements and exercises for Unit ${u}.`
    });
  }
  return generated;
}

export function generateQuestionsForExam(exam: Exam): ExamQuestion[] {
  const list = getComprehensiveSubjectQuestions(
    exam.subject_name || exam.subject_id,
    exam.grade_id,
    exam.year,
    exam.category === 'MODEL' ? 'MODEL' : 'ENTRANCE',
    exam.title
  );

  return list.map((g, idx) => ({
    id: `q-${exam.id}-${idx + 1}`,
    exam_id: exam.id,
    grade_id: exam.grade_id,
    subject_id: exam.subject_id,
    answer_status: 'admin_verified' as const,
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
  }));
}
