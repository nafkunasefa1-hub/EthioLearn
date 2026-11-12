import { Book } from '../types';
import { OFFICIAL_TEXTBOOKS_REGISTRY } from './officialTextbooksRegistry';

export const STATIC_BOOKS_CATALOG: Book[] = Object.values(OFFICIAL_TEXTBOOKS_REGISTRY).map(entry => {
  return {
    id: entry.id,
    title: entry.title,
    grade_id: entry.grade_id,
    grade_name: entry.grade_name,
    subject_id: entry.subject_id,
    subject_name: entry.subject_name,
    author: 'FDRE Ministry of Education',
    publisher: 'Curriculum Development Directorate',
    edition: 'Official National Standard Edition',
    language: entry.subject_id === 'subj-amh' ? 'Amharic' : 'English',
    description: `Official Ethiopian National Curriculum Textbook for ${entry.title}. Complete ${entry.total_pages} pages verbatim with structured syllabus units, formulas, figures, tables, and EUEE exam questions.`,
    short_note: `High-yield syllabus textbook covering all units, core formulas, worked examples, and national entrance examination tips.`,
    cover_image_path: `/covers/${entry.subject_id.replace('subj-', '')}.png`,
    original_pdf_path: `storage/private/books/${entry.id}.pdf`,
    total_pages: entry.total_pages,
    processed_pages: entry.total_pages,
    status: 'READY',
    access_level: 'free',
    version: '2024.1',
    is_demo: false,
    created_at: '2026-09-01T00:00:00.000Z',
    updated_at: '2026-10-22T00:00:00.000Z'
  };
});

export function getStaticBookById(id: string): Book | undefined {
  return STATIC_BOOKS_CATALOG.find(b => b.id === id);
}

export function getStaticBooksByGrade(gradeId: string): Book[] {
  if (gradeId === 'all') return STATIC_BOOKS_CATALOG;
  return STATIC_BOOKS_CATALOG.filter(b => b.grade_id === gradeId);
}
