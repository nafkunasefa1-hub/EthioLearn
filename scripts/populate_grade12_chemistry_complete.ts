import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { BookPage, BookChunk } from '../src/types';
import { getChemistryPageContent } from './chemistry_pages_data';

export function populateGrade12ChemistryVerbatim() {
  console.log('[Chemistry 12] Starting full verbatim population of Grade 12 Chemistry Student Textbook...');

  const bookIds = ['book-12-nat-chem', 'book-12-chem'];

  for (const bookId of bookIds) {
    console.log(`[Chemistry 12] Deleting all existing digital textbook pages and chunks for ${bookId}...`);
    db.clearBookPagesAndChunks(bookId);

    db.updateBook(bookId, {
      title: 'Grade 12 Chemistry Student Textbook',
      total_pages: 298,
      processed_pages: 298,
      status: 'READY',
      description: 'Official Ethiopian National Curriculum Student Textbook for Grade 12 Chemistry (Hawassa University / MoE 2023 GEQIP-E Standard Edition). Complete 298 pages from cover to cover.',
      short_note: 'Comprehensive 5-unit curriculum: Acid-Base Equilibria, Electrochemistry, Industrial Chemistry in Ethiopia, Polymers, and Environmental Chemistry.'
    });

    const pages: BookPage[] = [];
    const chunks: BookChunk[] = [];

    for (let pageNum = 1; pageNum <= 298; pageNum++) {
      const pageText = getChemistryPageContent(pageNum);
      const unitNum = getPageUnitNumber(pageNum);
      const chapterId = `chap-${bookId}-${unitNum}`;
      const printedPage = pageNum <= 8 ? 1 : (pageNum - 8);

      const pageObj: BookPage = {
        id: `page-${bookId}-${pageNum}`,
        book_id: bookId,
        pdf_page_index: pageNum,
        printed_page_number: pageNum, // Map directly 1:1 so navigating to page N in viewer loads page N
        chapter_id: chapterId,
        extracted_text: pageText,
        ocr_text: pageText,
        final_text: pageText,
        extraction_method: 'verified_manual',
        confidence: 1.0,
        needs_manual_review: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      pages.push(pageObj);

      chunks.push({
        id: `chunk-${bookId}-${pageNum}-1`,
        book_id: bookId,
        book_page_id: pageObj.id,
        grade_id: 'grade-12-natural',
        subject_id: 'subj-chem',
        chapter_id: chapterId,
        chunk_text: pageText.slice(0, 500),
        chunk_index: pageNum,
        printed_page_number: pageNum,
        pdf_page_index: pageNum
      });
    }

    pages.forEach(p => db.addBookPage(p));
    chunks.forEach(c => db.addBookChunk(c));
    console.log(`[Chemistry 12] Successfully inserted all ${pages.length} pages for ${bookId}`);
  }

  // Save to database.json and write to all official backup paths
  console.log('[Chemistry 12] Flushing database and synchronizing backups...');
  db.flush();
  db.syncOfficialBackups();

  // Double check direct write to backup files
  const dbData = (db as any).data;
  const textbookBackup = {
    books: dbData.books,
    book_chapters: dbData.book_chapters || [],
    book_pages: dbData.book_pages || [],
    book_chunks: dbData.book_chunks || [],
    chapter_short_notes: dbData.chapter_short_notes || {},
    flashcards: dbData.flashcards || []
  };
  const tbJson = JSON.stringify(textbookBackup);
  fs.writeFileSync(path.join(process.cwd(), 'data', 'official_textbooks_backup.json'), tbJson, 'utf-8');
  fs.writeFileSync(path.join(process.cwd(), 'server', 'official_textbooks_backup.json'), tbJson, 'utf-8');

  console.log('[Chemistry 12] Finished permanent save across database.json and official backups!');
}

function getPageUnitNumber(pdfPage: number): number {
  if (pdfPage <= 8) return 1;
  const p = pdfPage - 8;
  if (p <= 55) return 1;
  if (p <= 134) return 2;
  if (p <= 212) return 3;
  if (p <= 239) return 4;
  return 5;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  populateGrade12ChemistryVerbatim();
}
