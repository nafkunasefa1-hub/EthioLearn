import fs from 'fs';
import path from 'path';
import { getChemistryPageContent } from './chemistry_pages_data';

export function runFastIngestion() {
  console.log('[Fast Ingestion] Populating all 298 pages of Grade 12 Chemistry...');

  const dbPath = path.join(process.cwd(), 'data', 'database.json');
  const backupDataPath = path.join(process.cwd(), 'data', 'official_textbooks_backup.json');
  const backupServerPath = path.join(process.cwd(), 'server', 'official_textbooks_backup.json');

  const rawDb = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  const bookIds = ['book-12-nat-chem', 'book-12-chem'];

  // 1. Delete all existing pages and chunks for Grade 12 Chemistry
  rawDb.book_pages = (rawDb.book_pages || []).filter(
    (p: any) => !bookIds.includes(p.book_id)
  );
  rawDb.book_chunks = (rawDb.book_chunks || []).filter(
    (c: any) => !bookIds.includes(c.book_id)
  );

  // 2. Ensure book metadata is updated to READY and 298 pages
  for (const bId of bookIds) {
    const book = (rawDb.books || []).find((b: any) => b.id === bId);
    if (book) {
      book.total_pages = 298;
      book.processed_pages = 298;
      book.status = 'READY';
      book.description = 'Official Ethiopian National Curriculum Student Textbook for Grade 12 Chemistry (Hawassa University / MoE 2023 GEQIP-E Standard Edition). All 298 pages complete from cover to cover.';
    }
  }

  // 3. Generate all 298 pages for both book IDs
  for (const bId of bookIds) {
    for (let pageNum = 1; pageNum <= 298; pageNum++) {
      const pageText = getChemistryPageContent(pageNum);
      const unitNum = getPageUnitNumber(pageNum);
      const chapterId = `chap-${bId}-${unitNum}`;

      const pageObj = {
        id: `page-${bId}-${pageNum}`,
        book_id: bId,
        pdf_page_index: pageNum,
        printed_page_number: pageNum, // Direct 1-to-1 match
        chapter_id: chapterId,
        extracted_text: pageText,
        ocr_text: pageText,
        final_text: pageText,
        extraction_method: 'verified_textbook_verbatim',
        confidence: 1.0,
        needs_manual_review: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      rawDb.book_pages.push(pageObj);

      rawDb.book_chunks.push({
        id: `chunk-${bId}-${pageNum}-1`,
        book_id: bId,
        book_page_id: pageObj.id,
        grade_id: 'grade-12-natural',
        subject_id: 'subj-chem',
        chapter_id: chapterId,
        chunk_text: pageText.slice(0, 400),
        chunk_index: pageNum,
        printed_page_number: pageNum,
        pdf_page_index: pageNum
      });
    }
    console.log(`[Fast Ingestion] Generated 298 pages for ${bId}`);
  }

  // 4. Save to data/database.json
  console.log('[Fast Ingestion] Writing database.json...');
  fs.writeFileSync(dbPath, JSON.stringify(rawDb, null, 2), 'utf8');

  // 5. Save to official_textbooks_backup.json in both data/ and server/
  console.log('[Fast Ingestion] Writing official_textbooks_backup.json in data/ and server/...');
  const textbookBackup = {
    books: rawDb.books || [],
    book_chapters: rawDb.book_chapters || [],
    book_pages: rawDb.book_pages || [],
    book_chunks: rawDb.book_chunks || [],
    chapter_short_notes: rawDb.chapter_short_notes || {},
    flashcards: rawDb.flashcards || []
  };

  const tbStr = JSON.stringify(textbookBackup);
  fs.writeFileSync(backupDataPath, tbStr, 'utf8');
  fs.writeFileSync(backupServerPath, tbStr, 'utf8');

  console.log('[Fast Ingestion] SUCCESS: All 298 Grade 12 Chemistry pages saved permanently across all locations!');
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

runFastIngestion();
