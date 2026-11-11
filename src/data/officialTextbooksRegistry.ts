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
  "book-9-math": {
    "id": "book-9-math",
    "title": "Grade 9 Mathematics Student Textbook",
    "grade_id": "grade-9",
    "subject_id": "subj-math",
    "total_pages": 375,
    "grade_name": "Grade 9",
    "subject_name": "Mathematics"
  },
  "book-9-phys": {
    "id": "book-9-phys",
    "title": "Grade 9 Physics Student Textbook",
    "grade_id": "grade-9",
    "subject_id": "subj-phys",
    "total_pages": 179,
    "grade_name": "Grade 9",
    "subject_name": "Physics"
  },
  "book-9-chem": {
    "id": "book-9-chem",
    "title": "Grade 9 Chemistry Student Textbook",
    "grade_id": "grade-9",
    "subject_id": "subj-chem",
    "total_pages": 183,
    "grade_name": "Grade 9",
    "subject_name": "Chemistry"
  },
  "book-9-bio": {
    "id": "book-9-bio",
    "title": "Grade 9 Biology Student Textbook",
    "grade_id": "grade-9",
    "subject_id": "subj-bio",
    "total_pages": 171,
    "grade_name": "Grade 9",
    "subject_name": "Biology"
  },
  "book-9-eng": {
    "id": "book-9-eng",
    "title": "Grade 9 English Student Textbook",
    "grade_id": "grade-9",
    "subject_id": "subj-eng",
    "total_pages": 196,
    "grade_name": "Grade 9",
    "subject_name": "English"
  },
  "book-10-math": {
    "id": "book-10-math",
    "title": "Grade 10 Mathematics Student Textbook",
    "grade_id": "grade-10",
    "subject_id": "subj-math",
    "total_pages": 394,
    "grade_name": "Grade 10",
    "subject_name": "Mathematics"
  },
  "book-10-phys": {
    "id": "book-10-phys",
    "title": "Grade 10 Physics Student Textbook",
    "grade_id": "grade-10",
    "subject_id": "subj-phys",
    "total_pages": 258,
    "grade_name": "Grade 10",
    "subject_name": "Physics"
  },
  "book-10-chem": {
    "id": "book-10-chem",
    "title": "Grade 10 Chemistry Student Textbook",
    "grade_id": "grade-10",
    "subject_id": "subj-chem",
    "total_pages": 306,
    "grade_name": "Grade 10",
    "subject_name": "Chemistry"
  },
  "book-10-bio": {
    "id": "book-10-bio",
    "title": "Grade 10 Biology Student Textbook",
    "grade_id": "grade-10",
    "subject_id": "subj-bio",
    "total_pages": 182,
    "grade_name": "Grade 10",
    "subject_name": "Biology"
  },
  "book-10-eng": {
    "id": "book-10-eng",
    "title": "Grade 10 English Student Textbook",
    "grade_id": "grade-10",
    "subject_id": "subj-eng",
    "total_pages": 326,
    "grade_name": "Grade 10",
    "subject_name": "English"
  },
  "book-11-math": {
    "id": "book-11-math",
    "title": "Grade 11 (General) Mathematics Student Textbook",
    "grade_id": "grade-11",
    "subject_id": "subj-math",
    "total_pages": 494,
    "grade_name": "Grade 11 (General)",
    "subject_name": "Mathematics"
  },
  "book-11-phys": {
    "id": "book-11-phys",
    "title": "Grade 11 (General) Physics Student Textbook",
    "grade_id": "grade-11",
    "subject_id": "subj-phys",
    "total_pages": 338,
    "grade_name": "Grade 11 (General)",
    "subject_name": "Physics"
  },
  "book-11-chem": {
    "id": "book-11-chem",
    "title": "Grade 11 (General) Chemistry Student Textbook",
    "grade_id": "grade-11",
    "subject_id": "subj-chem",
    "total_pages": 342,
    "grade_name": "Grade 11 (General)",
    "subject_name": "Chemistry"
  },
  "book-11-bio": {
    "id": "book-11-bio",
    "title": "Grade 11 (General) Biology Student Textbook",
    "grade_id": "grade-11",
    "subject_id": "subj-bio",
    "total_pages": 294,
    "grade_name": "Grade 11 (General)",
    "subject_name": "Biology"
  },
  "book-11-eng": {
    "id": "book-11-eng",
    "title": "Grade 11 (General) English Student Textbook",
    "grade_id": "grade-11",
    "subject_id": "subj-eng",
    "total_pages": 290,
    "grade_name": "Grade 11 (General)",
    "subject_name": "English"
  },
  "book-12-math": {
    "id": "book-12-math",
    "title": "Grade 12 (General) Mathematics Student Textbook",
    "grade_id": "grade-12",
    "subject_id": "subj-math",
    "total_pages": 426,
    "grade_name": "Grade 12 (General)",
    "subject_name": "Mathematics"
  },
  "book-12-phys": {
    "id": "book-12-phys",
    "title": "Grade 12 (General) Physics Student Textbook",
    "grade_id": "grade-12",
    "subject_id": "subj-phys",
    "total_pages": 186,
    "grade_name": "Grade 12 (General)",
    "subject_name": "Physics"
  },
  "book-12-chem": {
    "id": "book-12-chem",
    "title": "Grade 12 (General) Chemistry Student Textbook",
    "grade_id": "grade-12",
    "subject_id": "subj-chem",
    "total_pages": 298,
    "grade_name": "Grade 12 (General)",
    "subject_name": "Chemistry"
  },
  "book-12-bio": {
    "id": "book-12-bio",
    "title": "Grade 12 (General) Biology Student Textbook",
    "grade_id": "grade-12",
    "subject_id": "subj-bio",
    "total_pages": 358,
    "grade_name": "Grade 12 (General)",
    "subject_name": "Biology"
  },
  "book-12-eng": {
    "id": "book-12-eng",
    "title": "Grade 12 (General) English Student Textbook",
    "grade_id": "grade-12",
    "subject_id": "subj-eng",
    "total_pages": 270,
    "grade_name": "Grade 12 (General)",
    "subject_name": "English"
  },
  "book-9-geog": {
    "id": "book-9-geog",
    "title": "Grade 9 Geography Student Textbook",
    "grade_id": "grade-9",
    "subject_id": "subj-geog",
    "total_pages": 237,
    "grade_name": "Grade 9",
    "subject_name": "Geography"
  },
  "book-9-amh": {
    "id": "book-9-amh",
    "title": "Grade 9 Amharic Student Textbook (የ9ኛ ክፍል አማርኛ)",
    "grade_id": "grade-9",
    "subject_id": "subj-amh",
    "total_pages": 175,
    "grade_name": "Grade 9",
    "subject_name": "Amharic"
  },
  "book-9-civ": {
    "id": "book-9-civ",
    "title": "Grade 9 Civics and Ethical Education",
    "grade_id": "grade-9",
    "subject_id": "subj-civ",
    "total_pages": 173,
    "grade_name": "Grade 9",
    "subject_name": "Civics"
  },
  "book-9-it": {
    "id": "book-9-it",
    "title": "Grade 9 Information Technology (IT) Textbook",
    "grade_id": "grade-9",
    "subject_id": "subj-it",
    "total_pages": 251,
    "grade_name": "Grade 9",
    "subject_name": "Information Technology"
  },
  "book-10-geog": {
    "id": "book-10-geog",
    "title": "Grade 10 Geography Student Textbook",
    "grade_id": "grade-10",
    "subject_id": "subj-geog",
    "total_pages": 214,
    "grade_name": "Grade 10",
    "subject_name": "Geography"
  },
  "book-10-amh": {
    "id": "book-10-amh",
    "title": "Grade 10 Amharic Student Textbook (የ10ኛ ክፍል አማርኛ)",
    "grade_id": "grade-10",
    "subject_id": "subj-amh",
    "total_pages": 164,
    "grade_name": "Grade 10",
    "subject_name": "Amharic"
  },
  "book-10-civ": {
    "id": "book-10-civ",
    "title": "Grade 10 Civics and Ethical Education",
    "grade_id": "grade-10",
    "subject_id": "subj-civ",
    "total_pages": 202,
    "grade_name": "Grade 10",
    "subject_name": "Civics"
  },
  "book-10-it": {
    "id": "book-10-it",
    "title": "Grade 10 Information Technology (IT) Textbook",
    "grade_id": "grade-10",
    "subject_id": "subj-it",
    "total_pages": 234,
    "grade_name": "Grade 10",
    "subject_name": "Information Technology"
  },
  "book-11-nat-math": {
    "id": "book-11-nat-math",
    "title": "Grade 11 Natural Mathematics Student Textbook",
    "grade_id": "grade-11-natural",
    "subject_id": "subj-math",
    "total_pages": 494,
    "grade_name": "Grade 11 - Natural Science",
    "subject_name": "Mathematics"
  },
  "book-11-nat-phys": {
    "id": "book-11-nat-phys",
    "title": "Grade 11 Physics Student Textbook",
    "grade_id": "grade-11-natural",
    "subject_id": "subj-phys",
    "total_pages": 338,
    "grade_name": "Grade 11 - Natural Science",
    "subject_name": "Physics"
  },
  "book-11-nat-bio": {
    "id": "book-11-nat-bio",
    "title": "Grade 11 Biology Student Textbook",
    "grade_id": "grade-11-natural",
    "subject_id": "subj-bio",
    "total_pages": 294,
    "grade_name": "Grade 11 - Natural Science",
    "subject_name": "Biology"
  },
  "book-11-nat-chem": {
    "id": "book-11-nat-chem",
    "title": "Grade 11 Chemistry Student Textbook",
    "grade_id": "grade-11-natural",
    "subject_id": "subj-chem",
    "total_pages": 342,
    "grade_name": "Grade 11 - Natural Science",
    "subject_name": "Chemistry"
  },
  "book-11-nat-eng": {
    "id": "book-11-nat-eng",
    "title": "Grade 11 English Student Textbook",
    "grade_id": "grade-11-natural",
    "subject_id": "subj-eng",
    "total_pages": 290,
    "grade_name": "Grade 11 - Natural Science",
    "subject_name": "English"
  },
  "book-11-nat-sat": {
    "id": "book-11-nat-sat",
    "title": "Grade 11 Scholastic Aptitude Test (SAT) Guide",
    "grade_id": "grade-11-natural",
    "subject_id": "subj-sat",
    "total_pages": 200,
    "grade_name": "Grade 11 - Natural Science",
    "subject_name": "SAT (Aptitude)"
  },
  "book-11-nat-it": {
    "id": "book-11-nat-it",
    "title": "Grade 11 Information Technology (IT) Textbook",
    "grade_id": "grade-11-natural",
    "subject_id": "subj-it",
    "total_pages": 170,
    "grade_name": "Grade 11 - Natural Science",
    "subject_name": "Information Technology"
  },
  "book-11-soc-math": {
    "id": "book-11-soc-math",
    "title": "Grade 11 Social Mathematics Student Textbook",
    "grade_id": "grade-11-social",
    "subject_id": "subj-math",
    "total_pages": 494,
    "grade_name": "Grade 11 - Social Science",
    "subject_name": "Mathematics"
  },
  "book-11-soc-eng": {
    "id": "book-11-soc-eng",
    "title": "Grade 11 English Student Textbook",
    "grade_id": "grade-11-social",
    "subject_id": "subj-eng",
    "total_pages": 290,
    "grade_name": "Grade 11 - Social Science",
    "subject_name": "English"
  },
  "book-11-soc-sat": {
    "id": "book-11-soc-sat",
    "title": "Grade 11 Scholastic Aptitude Test (SAT) Guide",
    "grade_id": "grade-11-social",
    "subject_id": "subj-sat",
    "total_pages": 200,
    "grade_name": "Grade 11 - Social Science",
    "subject_name": "SAT (Aptitude)"
  },
  "book-11-soc-econ": {
    "id": "book-11-soc-econ",
    "title": "Grade 11 Economics Student Textbook",
    "grade_id": "grade-11-social",
    "subject_id": "subj-econ",
    "total_pages": 202,
    "grade_name": "Grade 11 - Social Science",
    "subject_name": "Economics"
  },
  "book-11-soc-hist": {
    "id": "book-11-soc-hist",
    "title": "Grade 11 History Student Textbook",
    "grade_id": "grade-11-social",
    "subject_id": "subj-hist",
    "total_pages": 270,
    "grade_name": "Grade 11 - Social Science",
    "subject_name": "History"
  },
  "book-11-soc-geog": {
    "id": "book-11-soc-geog",
    "title": "Grade 11 Geography Student Textbook",
    "grade_id": "grade-11-social",
    "subject_id": "subj-geog",
    "total_pages": 254,
    "grade_name": "Grade 11 - Social Science",
    "subject_name": "Geography"
  },
  "book-11-soc-agri": {
    "id": "book-11-soc-agri",
    "title": "Grade 11 Agriculture Student Textbook",
    "grade_id": "grade-11-social",
    "subject_id": "subj-agri",
    "total_pages": 270,
    "grade_name": "Grade 11 - Social Science",
    "subject_name": "Agriculture"
  },
  "book-11-soc-it": {
    "id": "book-11-soc-it",
    "title": "Grade 11 Information Technology (IT) Textbook",
    "grade_id": "grade-11-social",
    "subject_id": "subj-it",
    "total_pages": 170,
    "grade_name": "Grade 11 - Social Science",
    "subject_name": "Information Technology"
  },
  "book-12-nat-math": {
    "id": "book-12-nat-math",
    "title": "Grade 12 Natural Mathematics Student Textbook",
    "grade_id": "grade-12-natural",
    "subject_id": "subj-math",
    "total_pages": 426,
    "grade_name": "Grade 12 - Natural Science",
    "subject_name": "Mathematics"
  },
  "book-12-nat-phys": {
    "id": "book-12-nat-phys",
    "title": "Grade 12 Physics Student Textbook",
    "grade_id": "grade-12-natural",
    "subject_id": "subj-phys",
    "total_pages": 186,
    "grade_name": "Grade 12 - Natural Science",
    "subject_name": "Physics"
  },
  "book-12-nat-bio": {
    "id": "book-12-nat-bio",
    "title": "Grade 12 Biology Student Textbook",
    "grade_id": "grade-12-natural",
    "subject_id": "subj-bio",
    "total_pages": 358,
    "grade_name": "Grade 12 - Natural Science",
    "subject_name": "Biology"
  },
  "book-12-nat-chem": {
    "id": "book-12-nat-chem",
    "title": "Grade 12 Chemistry Student Textbook",
    "grade_id": "grade-12-natural",
    "subject_id": "subj-chem",
    "total_pages": 298,
    "grade_name": "Grade 12 - Natural Science",
    "subject_name": "Chemistry"
  },
  "book-12-nat-eng": {
    "id": "book-12-nat-eng",
    "title": "Grade 12 English Student Textbook",
    "grade_id": "grade-12-natural",
    "subject_id": "subj-eng",
    "total_pages": 270,
    "grade_name": "Grade 12 - Natural Science",
    "subject_name": "English"
  },
  "book-12-nat-sat": {
    "id": "book-12-nat-sat",
    "title": "Grade 12 Scholastic Aptitude Test (SAT) Guide",
    "grade_id": "grade-12-natural",
    "subject_id": "subj-sat",
    "total_pages": 200,
    "grade_name": "Grade 12 - Natural Science",
    "subject_name": "SAT (Aptitude)"
  },
  "book-12-nat-it": {
    "id": "book-12-nat-it",
    "title": "Grade 12 Information Technology (IT) Textbook",
    "grade_id": "grade-12-natural",
    "subject_id": "subj-it",
    "total_pages": 210,
    "grade_name": "Grade 12 - Natural Science",
    "subject_name": "Information Technology"
  },
  "book-12-soc-math": {
    "id": "book-12-soc-math",
    "title": "Grade 12 Social Mathematics Student Textbook",
    "grade_id": "grade-12-social",
    "subject_id": "subj-math",
    "total_pages": 426,
    "grade_name": "Grade 12 - Social Science",
    "subject_name": "Mathematics"
  },
  "book-12-soc-eng": {
    "id": "book-12-soc-eng",
    "title": "Grade 12 English Student Textbook",
    "grade_id": "grade-12-social",
    "subject_id": "subj-eng",
    "total_pages": 270,
    "grade_name": "Grade 12 - Social Science",
    "subject_name": "English"
  },
  "book-12-soc-sat": {
    "id": "book-12-soc-sat",
    "title": "Grade 12 Scholastic Aptitude Test (SAT) Guide",
    "grade_id": "grade-12-social",
    "subject_id": "subj-sat",
    "total_pages": 200,
    "grade_name": "Grade 12 - Social Science",
    "subject_name": "SAT (Aptitude)"
  },
  "book-12-soc-econ": {
    "id": "book-12-soc-econ",
    "title": "Grade 12 Economics Student Textbook",
    "grade_id": "grade-12-social",
    "subject_id": "subj-econ",
    "total_pages": 214,
    "grade_name": "Grade 12 - Social Science",
    "subject_name": "Economics"
  },
  "book-12-soc-hist": {
    "id": "book-12-soc-hist",
    "title": "Grade 12 History Student Textbook",
    "grade_id": "grade-12-social",
    "subject_id": "subj-hist",
    "total_pages": 290,
    "grade_name": "Grade 12 - Social Science",
    "subject_name": "History"
  },
  "book-12-soc-geog": {
    "id": "book-12-soc-geog",
    "title": "Grade 12 Geography Student Textbook",
    "grade_id": "grade-12-social",
    "subject_id": "subj-geog",
    "total_pages": 266,
    "grade_name": "Grade 12 - Social Science",
    "subject_name": "Geography"
  },
  "book-9-hist": {
    "id": "book-9-hist",
    "title": "Grade 9 History Student Textbook",
    "grade_id": "grade-9",
    "subject_id": "subj-hist",
    "total_pages": 219,
    "grade_name": "Grade 9",
    "subject_name": "Grade 9 History Student Textbook"
  },
  "book-10-hist": {
    "id": "book-10-hist",
    "title": "Grade 10 History Student Textbook",
    "grade_id": "grade-10",
    "subject_id": "subj-hist",
    "total_pages": 246,
    "grade_name": "Grade 10",
    "subject_name": "Grade 10 History Student Textbook"
  },
  "book-12-soc-agri": {
    "id": "book-12-soc-agri",
    "title": "Grade 12 - Social Science Agriculture Student Textbook",
    "grade_id": "grade-12-social",
    "subject_id": "subj-agri",
    "total_pages": 195,
    "grade_name": "Grade 12 - Social Science",
    "subject_name": "Agriculture"
  }
};

export function getAuthoritativeTotalPages(bookId: string, currentTotal?: number): number {
  if (OFFICIAL_TEXTBOOKS_REGISTRY[bookId]?.total_pages) {
    return OFFICIAL_TEXTBOOKS_REGISTRY[bookId].total_pages;
  }
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
  return 180;
}
