export interface ModuleTopic {
  id: string;
  topicNumber: string;
  title: string;
  summary: string;
  content: string; // Clean, structured, exact text without raw LaTeX codes
  workedExamples?: Array<{
    problem: string;
    solution: string;
  }>;
  practiceQuestions?: Array<{
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }>;
}

export interface ModuleUnit {
  unitNumber: number;
  title: string;
  description: string;
  topics: ModuleTopic[];
}

export interface SubjectModule {
  id: string;
  subjectCode: string;
  subjectName: string;
  iconName: string;
  colorGradient: string;
  authorNote?: string;
  description: string;
  units: ModuleUnit[];
}

export const MODULE_CATEGORY_TITLE = "Module of Grade 9-12";

import { MATH_MODULE } from './modules/mathModule';
import { ENGLISH_MODULE } from './modules/englishModule';
import { PHYSICS_MODULE } from './modules/physicsModule';
import { BIOLOGY_MODULE } from './modules/bioModule';
import { CHEMISTRY_MODULE } from './modules/chemModule';
import { APTITUDE_MODULE, SAT_MODULE } from './modules/aptitudeModule';

export {
  MATH_MODULE,
  ENGLISH_MODULE,
  PHYSICS_MODULE,
  BIOLOGY_MODULE,
  CHEMISTRY_MODULE,
  APTITUDE_MODULE,
  SAT_MODULE
};

export const EUEE_SUBJECT_MODULES: SubjectModule[] = [
  MATH_MODULE,
  ENGLISH_MODULE,
  PHYSICS_MODULE,
  BIOLOGY_MODULE,
  CHEMISTRY_MODULE,
  APTITUDE_MODULE
];
