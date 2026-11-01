import { SubjectModule } from '../modulesData';
import { MATH_UNITS_1_TO_4 } from './mathUnits1_4';
import { MATH_UNITS_5_TO_8 } from './mathUnits5_8';
import { MATH_UNITS_9_TO_12 } from './mathUnits9_12';
import { MATH_UNITS_13_TO_16 } from './mathUnits13_16';

export const MATH_MODULE: SubjectModule = {
  id: 'module-math',
  subjectCode: 'MATH',
  subjectName: 'Mathematics',
  iconName: 'Calculator',
  colorGradient: 'from-blue-600 via-indigo-600 to-purple-700',
  authorNote: 'Oromia Education Bureau • ASTU Special School (Writer: Yohannes Megersa MSc; Reviewers: Mitiku Daba PhD, Feyisa Kebede PhD)',
  description: 'Comprehensive Secondary Mathematics High School Module (Grade 9-12) covering Sets, Geometry, Polynomials, Exponential & Logarithmic Functions, Inequalities, Plane Geometry, Measurement, Relations & Functions, Coordinate Geometry, Statistics & Probability, Matrices & Determinants, Vectors & Transformations, Sequences & Series, Linear Programming, Business Math, and Calculus.',
  units: [
    ...MATH_UNITS_1_TO_4,
    ...MATH_UNITS_5_TO_8,
    ...MATH_UNITS_9_TO_12,
    ...MATH_UNITS_13_TO_16
  ]
};
