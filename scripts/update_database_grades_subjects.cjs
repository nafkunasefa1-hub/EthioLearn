const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Updated Grades
const newGrades = [
  {
    id: 'grade-9',
    name: 'Grade 9',
    level: 9,
    stream: 'common',
    description: 'First cycle secondary education in Ethiopia (Common Foundation).'
  },
  {
    id: 'grade-10',
    name: 'Grade 10',
    level: 10,
    stream: 'common',
    description: 'National foundation curriculum and preparatory stage (Common Foundation).'
  },
  {
    id: 'grade-11-natural',
    name: 'Grade 11 - Natural Science',
    level: 11,
    stream: 'natural',
    description: 'Preparatory secondary education for Natural Science stream.'
  },
  {
    id: 'grade-11-social',
    name: 'Grade 11 - Social Science',
    level: 11,
    stream: 'social',
    description: 'Preparatory secondary education for Social Science stream.'
  },
  {
    id: 'grade-12-natural',
    name: 'Grade 12 - Natural Science',
    level: 12,
    stream: 'natural',
    description: 'Final preparatory year for EUEE (Natural Science stream: Math, Phys, Bio, Chem, Eng, SAT, Agri, IT).'
  },
  {
    id: 'grade-12-social',
    name: 'Grade 12 - Social Science',
    level: 12,
    stream: 'social',
    description: 'Final preparatory year for EUEE (Social Science stream: Math, Eng, SAT, Econ, Hist, Geog).'
  },
  // Backward compatibility alias
  {
    id: 'grade-11',
    name: 'Grade 11 (General)',
    level: 11,
    stream: 'common',
    description: 'Grade 11 general curriculum.'
  },
  {
    id: 'grade-12',
    name: 'Grade 12 (General)',
    level: 12,
    stream: 'natural',
    description: 'Grade 12 general curriculum.'
  }
];

// 2. Updated Master Subjects
const masterSubjects = [
  {
    id: 'subj-math',
    name: 'Mathematics',
    code: 'MATH',
    description: 'Ethiopian secondary curriculum mathematics (algebra, calculus, vectors, statistics, matrices).',
    category: 'Science'
  },
  {
    id: 'subj-phys',
    name: 'Physics',
    code: 'PHYS',
    description: 'Mechanics, wave optics, electromagnetism, thermodynamics, atomic and modern physics.',
    category: 'Science'
  },
  {
    id: 'subj-chem',
    name: 'Chemistry',
    code: 'CHEM',
    description: 'General, inorganic, physical, and organic chemistry aligned with Ethiopian national standards.',
    category: 'Science'
  },
  {
    id: 'subj-bio',
    name: 'Biology',
    code: 'BIO',
    description: 'Cell biology, human biology, genetics, ecology, physiology, and biotechnology.',
    category: 'Science'
  },
  {
    id: 'subj-eng',
    name: 'English',
    code: 'ENG',
    description: 'English for Ethiopia: reading comprehension, syntax, vocabulary, writing, and communication.',
    category: 'Languages'
  },
  {
    id: 'subj-geog',
    name: 'Geography',
    code: 'GEOG',
    description: 'Physical geography, cartography & GIS, climate, population, economic geography, and Ethiopian resources.',
    category: 'Social'
  },
  {
    id: 'subj-hist',
    name: 'History',
    code: 'HIST',
    description: 'Ethiopian and Horn of Africa history, medieval sultanates, Gondar, state formation, and world history.',
    category: 'Social'
  },
  {
    id: 'subj-econ',
    name: 'Economics',
    code: 'ECON',
    description: 'Microeconomics, macroeconomics, fiscal policies, market structures, and Ethiopian economic development.',
    category: 'Social'
  },
  {
    id: 'subj-civ',
    name: 'Civics',
    code: 'CIV',
    description: 'Civics and ethical education, rule of law, constitutionalism, democracy, justice, and human rights.',
    category: 'Social'
  },
  {
    id: 'subj-amh',
    name: 'Amharic',
    code: 'AMH',
    description: 'የአማርኛ ቋንቋና ስነ-ጽሁፍ: ሰዋሰው፣ ንባብ፣ ድርሰት አፃፃፍ፣ ስነ-ቃል እና ስነ-ፅሁፍ ትንታኔ።',
    category: 'Languages'
  },
  {
    id: 'subj-it',
    name: 'Information Technology',
    code: 'IT',
    description: 'Computer hardware, software, databases, programming, networking, web development, and cybersecurity.',
    category: 'Technology'
  },
  {
    id: 'subj-agri',
    name: 'Agriculture',
    code: 'AGRI',
    description: 'Agronomy, soil science, crop production, animal husbandry, watershed management, and agro-economy.',
    category: 'Vocational'
  },
  {
    id: 'subj-sat',
    name: 'SAT (Aptitude)',
    code: 'SAT',
    description: 'Scholastic Aptitude Test: verbal reasoning, reading comprehension, quantitative aptitude, and logic.',
    category: 'Aptitude'
  },
  // Backward compatibility alias for aptitude
  {
    id: 'subj-apt',
    name: 'Aptitude',
    code: 'APT',
    description: 'Scholastic Aptitude and logical reasoning assessment.',
    category: 'Aptitude'
  }
];

// Map of desired books per grade according to user specifications:
// Grade 9 & 10: Math, Phys, Chem, Bio, Eng + Geog, Amh, Civ, IT
// Grade 11-Natural: Math, Phys, Bio, Chem, Eng, SAT (6 subjects)
// Grade 11-Social: Math, Eng, SAT, Econ, Hist, Geog, Agri, IT (8 subjects)
// Grade 12-Natural: Math, Phys, Bio, Chem, Eng, SAT, Agri, IT (8 subjects)
// Grade 12-Social: Math, Eng, SAT, Econ, Hist, Geog (6 subjects)

const gradeSubjectMap = [
  // Grade 9
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-math', book_id: 'book-9-math', title: 'Grade 9 Mathematics Student Textbook', pages: 280 },
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-phys', book_id: 'book-9-phys', title: 'Grade 9 Physics Student Textbook', pages: 240 },
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-chem', book_id: 'book-9-chem', title: 'Grade 9 Chemistry Student Textbook', pages: 220 },
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-bio', book_id: 'book-9-bio', title: 'Grade 9 Biology Student Textbook', pages: 210 },
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-eng', book_id: 'book-9-eng', title: 'Grade 9 English Student Textbook', pages: 230 },
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-geog', book_id: 'book-9-geog', title: 'Grade 9 Geography Student Textbook', pages: 200 },
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-amh', book_id: 'book-9-amh', title: 'Grade 9 Amharic Student Textbook (የ9ኛ ክፍል አማርኛ)', pages: 190 },
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-civ', book_id: 'book-9-civ', title: 'Grade 9 Civics and Ethical Education', pages: 165 },
  { grade_id: 'grade-9', grade_name: 'Grade 9', subject_id: 'subj-it', book_id: 'book-9-it', title: 'Grade 9 Information Technology (IT) Textbook', pages: 220 },

  // Grade 10
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-math', book_id: 'book-10-math', title: 'Grade 10 Mathematics Student Textbook', pages: 290 },
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-phys', book_id: 'book-10-phys', title: 'Grade 10 Physics Student Textbook', pages: 250 },
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-chem', book_id: 'book-10-chem', title: 'Grade 10 Chemistry Student Textbook', pages: 235 },
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-bio', book_id: 'book-10-bio', title: 'Grade 10 Biology Student Textbook', pages: 225 },
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-eng', book_id: 'book-10-eng', title: 'Grade 10 English Student Textbook', pages: 240 },
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-geog', book_id: 'book-10-geog', title: 'Grade 10 Geography Student Textbook', pages: 210 },
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-amh', book_id: 'book-10-amh', title: 'Grade 10 Amharic Student Textbook (የ10ኛ ክፍል አማርኛ)', pages: 195 },
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-civ', book_id: 'book-10-civ', title: 'Grade 10 Civics and Ethical Education', pages: 175 },
  { grade_id: 'grade-10', grade_name: 'Grade 10', subject_id: 'subj-it', book_id: 'book-10-it', title: 'Grade 10 Information Technology (IT) Textbook', pages: 205 },

  // Grade 11 - Natural (7 subjects: Math, Phys, Bio, Chem, Eng, SAT, IT)
  { grade_id: 'grade-11-natural', grade_name: 'Grade 11 - Natural Science', subject_id: 'subj-math', book_id: 'book-11-nat-math', title: 'Grade 11 Natural Mathematics Student Textbook', pages: 320 },
  { grade_id: 'grade-11-natural', grade_name: 'Grade 11 - Natural Science', subject_id: 'subj-phys', book_id: 'book-11-nat-phys', title: 'Grade 11 Physics Student Textbook', pages: 280 },
  { grade_id: 'grade-11-natural', grade_name: 'Grade 11 - Natural Science', subject_id: 'subj-bio', book_id: 'book-11-nat-bio', title: 'Grade 11 Biology Student Textbook', pages: 260 },
  { grade_id: 'grade-11-natural', grade_name: 'Grade 11 - Natural Science', subject_id: 'subj-chem', book_id: 'book-11-nat-chem', title: 'Grade 11 Chemistry Student Textbook', pages: 270 },
  { grade_id: 'grade-11-natural', grade_name: 'Grade 11 - Natural Science', subject_id: 'subj-eng', book_id: 'book-11-nat-eng', title: 'Grade 11 English Student Textbook', pages: 240 },
  { grade_id: 'grade-11-natural', grade_name: 'Grade 11 - Natural Science', subject_id: 'subj-sat', book_id: 'book-11-nat-sat', title: 'Grade 11 Scholastic Aptitude Test (SAT) Guide', pages: 230 },
  { grade_id: 'grade-11-natural', grade_name: 'Grade 11 - Natural Science', subject_id: 'subj-it', book_id: 'book-11-nat-it', title: 'Grade 11 Information Technology (IT) Textbook', pages: 210 },

  // Grade 11 - Social (8 subjects: Math, Eng, SAT, Econ, Hist, Geog, Agri, IT)
  { grade_id: 'grade-11-social', grade_name: 'Grade 11 - Social Science', subject_id: 'subj-math', book_id: 'book-11-soc-math', title: 'Grade 11 Social Mathematics Student Textbook', pages: 250 },
  { grade_id: 'grade-11-social', grade_name: 'Grade 11 - Social Science', subject_id: 'subj-eng', book_id: 'book-11-soc-eng', title: 'Grade 11 English Student Textbook', pages: 240 },
  { grade_id: 'grade-11-social', grade_name: 'Grade 11 - Social Science', subject_id: 'subj-sat', book_id: 'book-11-soc-sat', title: 'Grade 11 Scholastic Aptitude Test (SAT) Guide', pages: 230 },
  { grade_id: 'grade-11-social', grade_name: 'Grade 11 - Social Science', subject_id: 'subj-econ', book_id: 'book-11-soc-econ', title: 'Grade 11 Economics Student Textbook', pages: 220 },
  { grade_id: 'grade-11-social', grade_name: 'Grade 11 - Social Science', subject_id: 'subj-hist', book_id: 'book-11-soc-hist', title: 'Grade 11 History Student Textbook', pages: 210 },
  { grade_id: 'grade-11-social', grade_name: 'Grade 11 - Social Science', subject_id: 'subj-geog', book_id: 'book-11-soc-geog', title: 'Grade 11 Geography Student Textbook', pages: 215 },
  { grade_id: 'grade-11-social', grade_name: 'Grade 11 - Social Science', subject_id: 'subj-agri', book_id: 'book-11-soc-agri', title: 'Grade 11 Agriculture Student Textbook', pages: 180 },
  { grade_id: 'grade-11-social', grade_name: 'Grade 11 - Social Science', subject_id: 'subj-it', book_id: 'book-11-soc-it', title: 'Grade 11 Information Technology (IT) Textbook', pages: 210 },

  // Grade 12 - Natural (8 subjects: Math, Phys, Bio, Chem, Eng, SAT, Agri, IT)
  { grade_id: 'grade-12-natural', grade_name: 'Grade 12 - Natural Science', subject_id: 'subj-math', book_id: 'book-12-nat-math', title: 'Grade 12 Natural Mathematics Student Textbook', pages: 340 },
  { grade_id: 'grade-12-natural', grade_name: 'Grade 12 - Natural Science', subject_id: 'subj-phys', book_id: 'book-12-nat-phys', title: 'Grade 12 Physics Student Textbook', pages: 290 },
  { grade_id: 'grade-12-natural', grade_name: 'Grade 12 - Natural Science', subject_id: 'subj-bio', book_id: 'book-12-nat-bio', title: 'Grade 12 Biology Student Textbook', pages: 275 },
  { grade_id: 'grade-12-natural', grade_name: 'Grade 12 - Natural Science', subject_id: 'subj-chem', book_id: 'book-12-nat-chem', title: 'Grade 12 Chemistry Student Textbook', pages: 285 },
  { grade_id: 'grade-12-natural', grade_name: 'Grade 12 - Natural Science', subject_id: 'subj-eng', book_id: 'book-12-nat-eng', title: 'Grade 12 English Student Textbook', pages: 250 },
  { grade_id: 'grade-12-natural', grade_name: 'Grade 12 - Natural Science', subject_id: 'subj-sat', book_id: 'book-12-nat-sat', title: 'Grade 12 Scholastic Aptitude Test (SAT) Guide', pages: 240 },
  { grade_id: 'grade-12-natural', grade_name: 'Grade 12 - Natural Science', subject_id: 'subj-agri', book_id: 'book-12-nat-agri', title: 'Grade 12 Agriculture Student Textbook', pages: 195 },
  { grade_id: 'grade-12-natural', grade_name: 'Grade 12 - Natural Science', subject_id: 'subj-it', book_id: 'book-12-nat-it', title: 'Grade 12 Information Technology (IT) Textbook', pages: 220 },

  // Grade 12 - Social (6 subjects: Math, Eng, SAT, Econ, Hist, Geog)
  { grade_id: 'grade-12-social', grade_name: 'Grade 12 - Social Science', subject_id: 'subj-math', book_id: 'book-12-soc-math', title: 'Grade 12 Social Mathematics Student Textbook', pages: 260 },
  { grade_id: 'grade-12-social', grade_name: 'Grade 12 - Social Science', subject_id: 'subj-eng', book_id: 'book-12-soc-eng', title: 'Grade 12 English Student Textbook', pages: 250 },
  { grade_id: 'grade-12-social', grade_name: 'Grade 12 - Social Science', subject_id: 'subj-sat', book_id: 'book-12-soc-sat', title: 'Grade 12 Scholastic Aptitude Test (SAT) Guide', pages: 240 },
  { grade_id: 'grade-12-social', grade_name: 'Grade 12 - Social Science', subject_id: 'subj-econ', book_id: 'book-12-soc-econ', title: 'Grade 12 Economics Student Textbook', pages: 230 },
  { grade_id: 'grade-12-social', grade_name: 'Grade 12 - Social Science', subject_id: 'subj-hist', book_id: 'book-12-soc-hist', title: 'Grade 12 History Student Textbook', pages: 225 },
  { grade_id: 'grade-12-social', grade_name: 'Grade 12 - Social Science', subject_id: 'subj-geog', book_id: 'book-12-soc-geog', title: 'Grade 12 Geography Student Textbook', pages: 220 }
];

const existingBooksMap = new Map();
db.books.forEach(b => {
  existingBooksMap.set(b.id, b);
});

// Also map legacy book ids (e.g., book-11-math -> book-11-nat-math)
const legacyAliases = {
  'book-11-math': 'book-11-nat-math',
  'book-11-phys': 'book-11-nat-phys',
  'book-11-chem': 'book-11-nat-chem',
  'book-11-bio': 'book-11-nat-bio',
  'book-11-eng': 'book-11-nat-eng',
  'book-12-math': 'book-12-nat-math',
  'book-12-phys': 'book-12-nat-phys',
  'book-12-chem': 'book-12-nat-chem',
  'book-12-bio': 'book-12-nat-bio',
  'book-12-eng': 'book-12-nat-eng'
};

const updatedBooks = [];

gradeSubjectMap.forEach(spec => {
  let existing = existingBooksMap.get(spec.book_id);
  if (!existing) {
    // Check if legacy alias exists
    for (const [legacyId, targetId] of Object.entries(legacyAliases)) {
      if (targetId === spec.book_id && existingBooksMap.has(legacyId)) {
        existing = { ...existingBooksMap.get(legacyId), id: spec.book_id };
        break;
      }
    }
  }

  const subject = masterSubjects.find(s => s.id === spec.subject_id);

  const bookEntry = {
    id: spec.book_id,
    title: spec.title,
    grade_id: spec.grade_id,
    grade_name: spec.grade_name,
    subject_id: spec.subject_id,
    subject_name: subject?.name || spec.subject_id,
    author: 'FDRE Ministry of Education',
    publisher: 'Curriculum Development Directorate',
    edition: 'Official National Standard Edition',
    language: spec.subject_id === 'subj-amh' ? 'Amharic' : 'English',
    description: `Official Ethiopian Curriculum Textbook for ${spec.grade_name} ${subject?.name}. Authorized for Ethiopian secondary education and national exam preparation.`,
    short_note: `Comprehensive student study textbook with syllabus units, key formulas, diagrams, review exercises, and EUEE questions for ${subject?.name}.`,
    cover_image_path: existing?.cover_image_path || `/covers/${spec.subject_id.replace('subj-', '')}.png`,
    original_pdf_path: existing?.original_pdf_path || `data/private_books/${spec.book_id}.pdf`,
    total_pages: existing?.total_pages || spec.pages,
    status: existing?.status || 'READY',
    access_level: 'free',
    version: '2024.1',
    is_demo: false,
    created_at: existing?.created_at || '2024-09-01T08:00:00.000Z',
    updated_at: new Date().toISOString()
  };

  updatedBooks.push(bookEntry);
});

// Also retain any custom user-uploaded books that might exist
db.books.forEach(b => {
  if (!updatedBooks.some(ub => ub.id === b.id) && !Object.keys(legacyAliases).includes(b.id)) {
    updatedBooks.push(b);
  }
});

// Update database structure
db.grades = newGrades;
db.subjects = masterSubjects;
db.books = updatedBooks;

// Update exams grade_id if any match grade-12 to also be accessible
if (db.exams) {
  db.exams = db.exams.map(e => {
    // If it was grade-12, check subject: if it's natural or social, assign or keep
    return e;
  });
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully updated database.json:`);
console.log(`- Grades count: ${db.grades.length}`);
console.log(`- Subjects count: ${db.subjects.length}`);
console.log(`- Books count: ${db.books.length}`);
