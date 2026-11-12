import { Grade } from '../types';

export const STATIC_GRADES_CATALOG: Grade[] = [
  { id: 'grade-9', name: 'Grade 9', level: 9, stream: 'common', description: 'First cycle secondary education in Ethiopia (Common Foundation).' },
  { id: 'grade-10', name: 'Grade 10', level: 10, stream: 'common', description: 'National foundation curriculum and secondary preparation (Common Foundation).' },
  { id: 'grade-11-natural', name: 'Grade 11 - Natural Science', level: 11, stream: 'natural', description: 'Preparatory secondary education for Natural Sciences (Math, Phys, Bio, Chem, Eng, SAT).' },
  { id: 'grade-11-social', name: 'Grade 11 - Social Science', level: 11, stream: 'social', description: 'Preparatory secondary education for Social Sciences (Math, Eng, SAT, Econ, Hist, Geog, Agri, IT).' },
  { id: 'grade-12-natural', name: 'Grade 12 - Natural Science', level: 12, stream: 'natural', description: 'Final preparatory year for EUEE (Natural Science stream: Math, Phys, Bio, Chem, Eng, SAT, IT).' },
  { id: 'grade-12-social', name: 'Grade 12 - Social Science', level: 12, stream: 'social', description: 'Final preparatory year for EUEE (Social Science stream: Math, Eng, SAT, Econ, Hist, Geog, Agri).' },
  { id: 'grade-11', name: 'Grade 11 (General)', level: 11, stream: 'common', description: 'Grade 11 Curriculum' },
  { id: 'grade-12', name: 'Grade 12 (General)', level: 12, stream: 'natural', description: 'Grade 12 Curriculum' }
];
