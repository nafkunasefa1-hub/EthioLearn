import { SubjectModule } from '../modulesData';
import { APTITUDE_UNITS_1_TO_3 } from './aptitudeUnits1_3';
import { APTITUDE_UNITS_4_TO_6 } from './aptitudeUnits4_6';

export const APTITUDE_MODULE: SubjectModule = {
  id: 'module-sat',
  subjectCode: 'SAT',
  subjectName: 'Aptitude (SAT)',
  iconName: 'Brain',
  colorGradient: 'from-rose-600 via-pink-600 to-purple-800',
  authorNote: 'Scholastic Aptitude & General Logical Reasoning for Ethiopian University Admissions (EUEE)',
  description: 'Comprehensive Scholastic Aptitude Module covering Numerical Series, Commercial Arithmetic, Time & Work, Speed & Relative Motion, Age & Algebraic Puzzles, Combinatorics, Verbal Analogies, Antonyms & Synonyms, Categorical Syllogisms, Blood Relations, Seating Arrangements, Compass Navigation, Spatial Figures, Cryptographic Ciphers, and Data Interpretation.',
  units: [
    ...APTITUDE_UNITS_1_TO_3,
    ...APTITUDE_UNITS_4_TO_6
  ]
};

// Also alias as SAT_MODULE for backwards compatibility
export const SAT_MODULE = APTITUDE_MODULE;
