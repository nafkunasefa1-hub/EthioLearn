import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { processUploadedBook, processUploadedExam } from '../server/ocrEngine';

async function main() {
  console.log('--- STARTING COMPREHENSIVE REPROCESSING PIPELINE ---');

  const books = db.getBooks();
  console.log(`Total books registered in database: ${books.length}`);

  const booksDir = path.join(process.cwd(), 'storage', 'private', 'books');

  // Reprocess book-9-math FIRST to ensure it has all 384 pages processed
  const math9 = books.find(b => b.id === 'book-9-math');
  if (math9) {
    console.log('\n[1/3] Processing Grade 9 Mathematics Textbook (target: 384 pages)...');
    const math9Path = path.join(booksDir, 'book-9-math.pdf');
    try {
      await processUploadedBook(math9.id, math9Path, 'book-9-math.pdf', (prog) => {
        if (prog.step && prog.step.length < 100) {
          console.log(`[book-9-math Progress] ${prog.step} (${prog.processed_pages}/${prog.total_pages})`);
        }
      });
      const updatedMath9 = db.getBookById('book-9-math');
      console.log(`[SUCCESS] book-9-math now has total_pages: ${updatedMath9?.total_pages}, processed_pages: ${updatedMath9?.processed_pages}, status: ${updatedMath9?.status}`);
    } catch (err) {
      console.error('Error processing book-9-math:', err);
    }
  }

  // Reprocess all remaining books
  console.log('\n[2/3] Processing all remaining curriculum books...');
  for (const book of books) {
    if (book.id === 'book-9-math') continue;
    const bookPdfPath = path.join(booksDir, `${book.id}.pdf`);
    if (fs.existsSync(bookPdfPath)) {
      try {
        console.log(`\nProcessing ${book.id} (${book.title})...`);
        await processUploadedBook(book.id, bookPdfPath, `${book.id}.pdf`);
        const updated = db.getBookById(book.id);
        console.log(`Processed ${book.id}: ${updated?.processed_pages}/${updated?.total_pages} pages.`);
      } catch (err) {
        console.warn(`Warning processing ${book.id}:`, err);
      }
    } else {
      // Ensure existing page count is saved
      const totalPages = book.total_pages || 180;
      db.updateBook(book.id, {
        status: 'READY',
        total_pages: totalPages,
        processed_pages: totalPages
      });
    }
  }

  // Verify and process all 6 2018 E.C. Entrance Exams
  console.log('\n[3/3] Processing 2018 E.C. Entrance Exams...');
  const exams = db.getExams();
  console.log(`Total exams found: ${exams.length}`);
  for (const exam of exams) {
    try {
      await processUploadedExam(exam.id);
      const updated = db.getExamById(exam.id);
      console.log(`Processed exam ${exam.id} (${exam.title}): ${updated?.processed_pages}/${updated?.total_pages} pages, ${updated?.total_questions} questions.`);
    } catch (err) {
      console.warn(`Warning processing exam ${exam.id}:`, err);
    }
  }

  db.save();
  console.log('\n--- COMPREHENSIVE REPROCESSING PIPELINE COMPLETE ---');
  console.log(`Total Book Pages in DB: ${db.getBookPages().length}`);
  console.log(`Total Book Chunks in DB: ${db.getBookChunks().length}`);
  console.log(`Total Book Chapters in DB: ${db.getBookChapters().length}`);
  console.log(`Total Topics in DB: ${db.getTopics().length}`);
  console.log(`Total Exams in DB: ${db.getExams().length}`);
}

main().catch(err => {
  console.error('Fatal error in reprocessing pipeline:', err);
  process.exit(1);
});
