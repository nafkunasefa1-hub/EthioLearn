/**
 * Official Ethiopian Curriculum Subject Classification
 * 
 * Entrance Exam Subjects:
 * - Natural Science: Mathematics, English, Physics, Chemistry, Biology, Aptitude (SAT)
 * - Social Science: Mathematics, English, History, Geography, Economics, Aptitude (SAT)
 * 
 * Non-Entrance Subjects:
 * - Information Technology (IT), Civics / Citizenship, Amharic, Agriculture, HPE, General Science, etc.
 */

export const ENTRANCE_EXAM_SUBJECTS = [
  'mathematics',
  'math',
  'english',
  'physics',
  'chemistry',
  'biology',
  'history',
  'geography',
  'economics',
  'aptitude',
  'sat'
];

export function isEntranceExamSubject(subjectNameOrId?: string): boolean {
  if (!subjectNameOrId) return false;
  const s = subjectNameOrId.toLowerCase().trim();

  // Non-Entrance Subjects (IT, Civics, Agriculture, Amharic, etc.)
  if (
    s === 'it' ||
    s.includes('information technology') ||
    s.includes('information & communication') ||
    s.includes('information communication') ||
    s.includes('ict') ||
    s.includes('subj-it') ||
    s.includes('-it') ||
    s.includes('civics') ||
    s.includes('citizenship') ||
    s.includes('amharic') ||
    s.includes('agriculture') ||
    s.includes('hpe') ||
    s.includes('health') ||
    s.includes('general science') ||
    s.includes('drawing')
  ) {
    return false;
  }

  // Entrance Subjects for Natural Science: Mathematics, English, Physics, Chemistry, Biology, Aptitude (SAT)
  // Entrance Subjects for Social Science: Mathematics, English, History, Geography, Economics, Aptitude (SAT)
  return ENTRANCE_EXAM_SUBJECTS.some(sub => s.includes(sub));
}

export function getExamTerminology(subjectNameOrId?: string) {
  const isEntrance = isEntranceExamSubject(subjectNameOrId);
  return {
    isEntrance,
    examShortName: isEntrance ? 'EUEE' : 'Tests',
    examFullName: isEntrance ? 'Ethiopian University Entrance Examination (EUEE)' : 'Secondary Curriculum Tests & Examinations',
    trapHeading: isEntrance ? 'EUEE National Exam Trap & Strategy' : 'Frequently Asked Questions of Tests & Common Traps',
    tabLabel: isEntrance ? 'EUEE Exam Traps' : 'Frequently Asked Questions of Tests',
    sectionTitle: isEntrance ? 'EUEE Exam Traps & Examiner Secrets' : 'Frequently Asked Questions of Tests & Common Pitfalls',
    bannerTitle: isEntrance ? 'EUEE National Exam Traps & Examiner Secrets Active' : 'Frequently Asked Questions of Tests Active',
    bannerSubtitle: isEntrance
      ? 'Jumped directly to high-yield national entrance exam distractors, trap patterns, and time-saving shortcuts.'
      : 'Jumped directly to frequently asked questions of tests, common student traps, and classroom assessment secrets.'
  };
}
