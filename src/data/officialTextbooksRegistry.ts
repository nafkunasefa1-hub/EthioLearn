export interface OfficialTextbookMeta {
  id: string;
  title: string;
  grade_id: string;
  subject_id: string;
  total_pages: number;
  grade_name: string;
  subject_name: string;
}

export const OFFICIAL_TEXTBOOKS_REGISTRY: Record<string, OfficialTextbookMeta> = {
  // Grade 9
  'book-9-math': {
    id: 'book-9-math',
    title: 'Grade 9 Mathematics Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-math',
    total_pages: 384,
    grade_name: 'Grade 9',
    subject_name: 'Mathematics'
  },
  'book-9-phys': {
    id: 'book-9-phys',
    title: 'Grade 9 Physics Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-phys',
    total_pages: 179,
    grade_name: 'Grade 9',
    subject_name: 'Physics'
  },
  'book-9-chem': {
    id: 'book-9-chem',
    title: 'Grade 9 Chemistry Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-chem',
    total_pages: 183,
    grade_name: 'Grade 9',
    subject_name: 'Chemistry'
  },
  'book-9-bio': {
    id: 'book-9-bio',
    title: 'Grade 9 Biology Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-bio',
    total_pages: 171,
    grade_name: 'Grade 9',
    subject_name: 'Biology'
  },
  'book-9-eng': {
    id: 'book-9-eng',
    title: 'Grade 9 English Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-eng',
    total_pages: 196,
    grade_name: 'Grade 9',
    subject_name: 'English'
  },
  'book-9-geog': {
    id: 'book-9-geog',
    title: 'Grade 9 Geography Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-geog',
    total_pages: 200,
    grade_name: 'Grade 9',
    subject_name: 'Geography'
  },
  // Grade 9 Civics
  'book-9-civ': {
    id: 'book-9-civ',
    title: 'Grade 9 Civics Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-civ',
    total_pages: 173,
    grade_name: 'Grade 9',
    subject_name: 'Civics'
  },
  'book-9-amh': {
    id: 'book-9-amh',
    title: 'Grade 9 Amharic Student Textbook (የ9ኛ ክፍል አማርኛ)',
    grade_id: 'grade-9',
    subject_id: 'subj-amh',
    total_pages: 190,
    grade_name: 'Grade 9',
    subject_name: 'Amharic'
  },
  'book-9-it': {
    id: 'book-9-it',
    title: 'Grade 9 Information Technology Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-it',
    total_pages: 251,
    grade_name: 'Grade 9',
    subject_name: 'Information Technology'
  },
  'book-9-hist': {
    id: 'book-9-hist',
    title: 'Grade 9 History Student Textbook',
    grade_id: 'grade-9',
    subject_id: 'subj-hist',
    total_pages: 219,
    grade_name: 'Grade 9',
    subject_name: 'History'
  },

  // Grade 10
  'book-10-math': {
    id: 'book-10-math',
    title: 'Grade 10 Mathematics Student Textbook',
    grade_id: 'grade-10',
    subject_id: 'subj-math',
    total_pages: 200,
    grade_name: 'Grade 10',
    subject_name: 'Mathematics'
  },
  'book-10-phys': {
    id: 'book-10-phys',
    title: 'Grade 10 Physics Student Textbook',
    grade_id: 'grade-10',
    subject_id: 'subj-phys',
    total_pages: 200,
    grade_name: 'Grade 10',
    subject_name: 'Physics'
  },
  'book-10-chem': {
    id: 'book-10-chem',
    title: 'Grade 10 Chemistry Student Textbook',
    grade_id: 'grade-10',
    subject_id: 'subj-chem',
    total_pages: 200,
    grade_name: 'Grade 10',
    subject_name: 'Chemistry'
  },
  'book-10-bio': {
    id: 'book-10-bio',
    title: 'Grade 10 Biology Student Textbook',
    grade_id: 'grade-10',
    subject_id: 'subj-bio',
    total_pages: 182,
    grade_name: 'Grade 10',
    subject_name: 'Biology'
  },
  'book-10-eng': {
    id: 'book-10-eng',
    title: 'Grade 10 English Student Textbook',
    grade_id: 'grade-10',
    subject_id: 'subj-eng',
    total_pages: 200,
    grade_name: 'Grade 10',
    subject_name: 'English'
  },
  'book-10-civ': {
    id: 'book-10-civ',
    title: 'Grade 10 Civics and Ethical Education',
    grade_id: 'grade-10',
    subject_id: 'subj-civ',
    total_pages: 175,
    grade_name: 'Grade 10',
    subject_name: 'Civics'
  },
  'book-10-amh': {
    id: 'book-10-amh',
    title: 'Grade 10 Amharic Student Textbook (የ10ኛ ክፍል አማርኛ)',
    grade_id: 'grade-10',
    subject_id: 'subj-amh',
    total_pages: 195,
    grade_name: 'Grade 10',
    subject_name: 'Amharic'
  },
  'book-10-it': {
    id: 'book-10-it',
    title: 'Grade 10 Information Technology Student Textbook',
    grade_id: 'grade-10',
    subject_id: 'subj-it',
    total_pages: 200,
    grade_name: 'Grade 10',
    subject_name: 'Information Technology'
  },
  'book-10-geog': {
    id: 'book-10-geog',
    title: 'Grade 10 Geography Student Textbook',
    grade_id: 'grade-10',
    subject_id: 'subj-geog',
    total_pages: 200,
    grade_name: 'Grade 10',
    subject_name: 'Geography'
  },
  'book-10-hist': {
    id: 'book-10-hist',
    title: 'Grade 10 History Student Textbook',
    grade_id: 'grade-10',
    subject_id: 'subj-hist',
    total_pages: 180,
    grade_name: 'Grade 10',
    subject_name: 'History'
  },

  // Grade 11
  'book-11-math': {
    id: 'book-11-math',
    title: 'Grade 11 Mathematics Student Textbook',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-math',
    total_pages: 494,
    grade_name: 'Grade 11',
    subject_name: 'Mathematics'
  },
  'book-11-nat-math': {
    id: 'book-11-nat-math',
    title: 'Grade 11 Mathematics (Natural Science)',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-math',
    total_pages: 494,
    grade_name: 'Grade 11',
    subject_name: 'Mathematics'
  },
  'book-11-soc-math': {
    id: 'book-11-soc-math',
    title: 'Grade 11 Mathematics (Social Science)',
    grade_id: 'grade-11-social',
    subject_id: 'subj-math',
    total_pages: 494,
    grade_name: 'Grade 11',
    subject_name: 'Mathematics'
  },
  'book-11-phys': {
    id: 'book-11-phys',
    title: 'Grade 11 Physics Student Textbook',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-phys',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Physics'
  },
  'book-11-nat-phys': {
    id: 'book-11-nat-phys',
    title: 'Grade 11 Physics (Natural Science)',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-phys',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Physics'
  },
  'book-11-chem': {
    id: 'book-11-chem',
    title: 'Grade 11 Chemistry Student Textbook',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-chem',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Chemistry'
  },
  'book-11-nat-chem': {
    id: 'book-11-nat-chem',
    title: 'Grade 11 Chemistry (Natural Science)',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-chem',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Chemistry'
  },
  'book-11-bio': {
    id: 'book-11-bio',
    title: 'Grade 11 Biology Student Textbook',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-bio',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Biology'
  },
  'book-11-nat-bio': {
    id: 'book-11-nat-bio',
    title: 'Grade 11 Biology (Natural Science)',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-bio',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Biology'
  },
  'book-11-eng': {
    id: 'book-11-eng',
    title: 'Grade 11 English Student Textbook',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-eng',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'English'
  },
  'book-11-nat-eng': {
    id: 'book-11-nat-eng',
    title: 'Grade 11 English (Natural Science)',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-eng',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'English'
  },
  'book-11-soc-eng': {
    id: 'book-11-soc-eng',
    title: 'Grade 11 English (Social Science)',
    grade_id: 'grade-11-social',
    subject_id: 'subj-eng',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'English'
  },
  'book-11-soc-agri': {
    id: 'book-11-soc-agri',
    title: 'Grade 11 Agriculture Student Textbook',
    grade_id: 'grade-11-social',
    subject_id: 'subj-agri',
    total_pages: 180,
    grade_name: 'Grade 11',
    subject_name: 'Agriculture'
  },
  'book-11-soc-econ': {
    id: 'book-11-soc-econ',
    title: 'Grade 11 Economics Student Textbook',
    grade_id: 'grade-11-social',
    subject_id: 'subj-econ',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Economics'
  },
  'book-11-soc-geog': {
    id: 'book-11-soc-geog',
    title: 'Grade 11 Geography Student Textbook',
    grade_id: 'grade-11-social',
    subject_id: 'subj-geog',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Geography'
  },
  'book-11-soc-hist': {
    id: 'book-11-soc-hist',
    title: 'Grade 11 History Student Textbook',
    grade_id: 'grade-11-social',
    subject_id: 'subj-hist',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'History'
  },
  'book-11-soc-it': {
    id: 'book-11-soc-it',
    title: 'Grade 11 Information Technology (Social)',
    grade_id: 'grade-11-social',
    subject_id: 'subj-it',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Information Technology'
  },
  'book-11-nat-it': {
    id: 'book-11-nat-it',
    title: 'Grade 11 Information Technology (Natural)',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-it',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Information Technology'
  },
  'book-11-nat-sat': {
    id: 'book-11-nat-sat',
    title: 'Grade 11 Scholastic Aptitude Test (Natural)',
    grade_id: 'grade-11-natural',
    subject_id: 'subj-sat',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Aptitude'
  },
  'book-11-soc-sat': {
    id: 'book-11-soc-sat',
    title: 'Grade 11 Scholastic Aptitude Test (Social)',
    grade_id: 'grade-11-social',
    subject_id: 'subj-sat',
    total_pages: 200,
    grade_name: 'Grade 11',
    subject_name: 'Aptitude'
  },

  // Grade 12
  'book-12-math': {
    id: 'book-12-math',
    title: 'Grade 12 Mathematics Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-math',
    total_pages: 424,
    grade_name: 'Grade 12',
    subject_name: 'Mathematics'
  },
  'book-12-nat-math': {
    id: 'book-12-nat-math',
    title: 'Grade 12 - Natural Science Mathematics Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-math',
    total_pages: 424,
    grade_name: 'Grade 12',
    subject_name: 'Mathematics'
  },
  'book-12-soc-math': {
    id: 'book-12-soc-math',
    title: 'Grade 12 - Social Science Mathematics Student Textbook',
    grade_id: 'grade-12-social',
    subject_id: 'subj-math',
    total_pages: 424,
    grade_name: 'Grade 12',
    subject_name: 'Mathematics'
  },
  'book-12-phys': {
    id: 'book-12-phys',
    title: 'Grade 12 Physics Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-phys',
    total_pages: 372,
    grade_name: 'Grade 12',
    subject_name: 'Physics'
  },
  'book-12-nat-phys': {
    id: 'book-12-nat-phys',
    title: 'Grade 12 - Natural Science Physics Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-phys',
    total_pages: 372,
    grade_name: 'Grade 12',
    subject_name: 'Physics'
  },
  'book-12-chem': {
    id: 'book-12-chem',
    title: 'Grade 12 Chemistry Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-chem',
    total_pages: 298,
    grade_name: 'Grade 12',
    subject_name: 'Chemistry'
  },
  'book-12-nat-chem': {
    id: 'book-12-nat-chem',
    title: 'Grade 12 Chemistry Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-chem',
    total_pages: 298,
    grade_name: 'Grade 12',
    subject_name: 'Chemistry'
  },
  'book-12-bio': {
    id: 'book-12-bio',
    title: 'Grade 12 Biology Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-bio',
    total_pages: 358,
    grade_name: 'Grade 12',
    subject_name: 'Biology'
  },
  'book-12-nat-bio': {
    id: 'book-12-nat-bio',
    title: 'Grade 12 - Natural Science Biology Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-bio',
    total_pages: 358,
    grade_name: 'Grade 12',
    subject_name: 'Biology'
  },
  'book-12-eng': {
    id: 'book-12-eng',
    title: 'Grade 12 English Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-eng',
    total_pages: 270,
    grade_name: 'Grade 12',
    subject_name: 'English'
  },
  'book-12-nat-eng': {
    id: 'book-12-nat-eng',
    title: 'Grade 12 - Natural Science English Student Textbook',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-eng',
    total_pages: 270,
    grade_name: 'Grade 12',
    subject_name: 'English'
  },
  'book-12-soc-eng': {
    id: 'book-12-soc-eng',
    title: 'Grade 12 - Social Science English Student Textbook',
    grade_id: 'grade-12-social',
    subject_id: 'subj-eng',
    total_pages: 270,
    grade_name: 'Grade 12',
    subject_name: 'English'
  },

  'book-12-soc-agri': {
    id: 'book-12-soc-agri',
    title: 'Grade 12 Agriculture Student Textbook',
    grade_id: 'grade-12-social',
    subject_id: 'subj-agri',
    total_pages: 195,
    grade_name: 'Grade 12',
    subject_name: 'Agriculture'
  },
  'book-12-soc-econ': {
    id: 'book-12-soc-econ',
    title: 'Grade 12 Economics Student Textbook',
    grade_id: 'grade-12-social',
    subject_id: 'subj-econ',
    total_pages: 200,
    grade_name: 'Grade 12',
    subject_name: 'Economics'
  },
  'book-12-soc-geog': {
    id: 'book-12-soc-geog',
    title: 'Grade 12 Geography Student Textbook',
    grade_id: 'grade-12-social',
    subject_id: 'subj-geog',
    total_pages: 200,
    grade_name: 'Grade 12',
    subject_name: 'Geography'
  },
  'book-12-soc-hist': {
    id: 'book-12-soc-hist',
    title: 'Grade 12 History Student Textbook',
    grade_id: 'grade-12-social',
    subject_id: 'subj-hist',
    total_pages: 200,
    grade_name: 'Grade 12',
    subject_name: 'History'
  },
  'book-12-nat-it': {
    id: 'book-12-nat-it',
    title: 'Grade 12 Information Technology (Natural)',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-it',
    total_pages: 200,
    grade_name: 'Grade 12',
    subject_name: 'Information Technology'
  },
  'book-12-nat-sat': {
    id: 'book-12-nat-sat',
    title: 'Grade 12 Scholastic Aptitude Test (Natural)',
    grade_id: 'grade-12-natural',
    subject_id: 'subj-sat',
    total_pages: 200,
    grade_name: 'Grade 12',
    subject_name: 'Aptitude'
  },
  'book-12-soc-sat': {
    id: 'book-12-soc-sat',
    title: 'Grade 12 Scholastic Aptitude Test (Social)',
    grade_id: 'grade-12-social',
    subject_id: 'subj-sat',
    total_pages: 200,
    grade_name: 'Grade 12',
    subject_name: 'Aptitude'
  },
  '1789568769794-7d4lqu': {
    id: '1789568769794-7d4lqu',
    title: 'Grade 11 Economics Textbook Archive',
    grade_id: 'grade-11-social',
    subject_id: 'subj-econ',
    total_pages: 120,
    grade_name: 'Grade 11',
    subject_name: 'Economics'
  },
  '1790680724865-acxu7w': {
    id: '1790680724865-acxu7w',
    title: 'Curriculum Textbook Document',
    grade_id: 'grade-10',
    subject_id: 'subj-math',
    total_pages: 180,
    grade_name: 'Grade 10',
    subject_name: 'Mathematics'
  }
};

/**
 * Returns the exact total pages for a book.
 * If currentTotal is valid and > 0, it ALWAYS takes highest priority so that
 * user-uploaded and processed books never get their page numbers overwritten or reverted.
 */
export function getAuthoritativeTotalPages(bookId: string, currentTotal?: number): number {
  if (typeof currentTotal === 'number' && currentTotal > 0) {
    return currentTotal;
  }
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('ethio_book_pages_' + bookId);
      if (stored) {
        const p = parseInt(stored, 10);
        if (!isNaN(p) && p > 0) return p;
      }
    } catch {}
  }
  if (OFFICIAL_TEXTBOOKS_REGISTRY[bookId]?.total_pages) {
    return OFFICIAL_TEXTBOOKS_REGISTRY[bookId].total_pages;
  }
  return 180;
}
