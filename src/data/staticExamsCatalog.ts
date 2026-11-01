import { Exam } from '../types';
import { AUTHORITATIVE_59_EXAMS } from '../../server/authoritativeExamsCatalog';

export const STATIC_EXAMS_CATALOG: Exam[] = AUTHORITATIVE_59_EXAMS;

export function getStaticExamById(id: string): Exam | undefined {
  return STATIC_EXAMS_CATALOG.find(e => e.id === id);
}

export function getStaticExamsByCategory(category: string): Exam[] {
  if (category === 'ALL') return STATIC_EXAMS_CATALOG;
  return STATIC_EXAMS_CATALOG.filter(e => e.category === category);
}
