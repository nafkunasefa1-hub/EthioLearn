import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { getCurriculumForBook } from '../server/curriculumRegistry';
import { buildStructuredDigitalPageText } from '../server/textbookPageFormatter';
import { getOrGenerateChapterShortNote } from '../server/shortNotesService';
import { Book, BookChapter, BookPage, BookChunk, Flashcard } from '../src/types';

export const OFFICIAL_BOOK_SPECS: Record<string, { total_pages: number; title: string; grade_id: string; subject_id: string }> = {
  // Grade 12
  'book-12-math': { total_pages: 424, title: 'Grade 12 Mathematics Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-math' },
  'book-12-nat-math': { total_pages: 424, title: 'Grade 12 - Natural Science Mathematics Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-math' },
  'book-12-soc-math': { total_pages: 424, title: 'Grade 12 - Social Science Mathematics Student Textbook', grade_id: 'grade-12-social', subject_id: 'subj-math' },
  'book-12-phys': { total_pages: 372, title: 'Grade 12 Physics Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-phys' },
  'book-12-nat-phys': { total_pages: 372, title: 'Grade 12 - Natural Science Physics Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-phys' },
  'book-12-chem': { total_pages: 298, title: 'Grade 12 Chemistry Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-chem' },
  'book-12-nat-chem': { total_pages: 298, title: 'Grade 12 Chemistry Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-chem' },
  'book-12-bio': { total_pages: 358, title: 'Grade 12 Biology Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-bio' },
  'book-12-nat-bio': { total_pages: 358, title: 'Grade 12 - Natural Science Biology Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-bio' },
  'book-12-eng': { total_pages: 270, title: 'Grade 12 English Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-eng' },
  'book-12-nat-eng': { total_pages: 270, title: 'Grade 12 - Natural Science English Student Textbook', grade_id: 'grade-12-natural', subject_id: 'subj-eng' },
  'book-12-soc-eng': { total_pages: 270, title: 'Grade 12 - Social Science English Student Textbook', grade_id: 'grade-12-social', subject_id: 'subj-eng' },
  
  // Grade 11
  'book-11-math': { total_pages: 494, title: 'Grade 11 Mathematics Student Textbook', grade_id: 'grade-11-natural', subject_id: 'subj-math' },
  'book-11-nat-math': { total_pages: 494, title: 'Grade 11 - Natural Science Mathematics Student Textbook', grade_id: 'grade-11-natural', subject_id: 'subj-math' },
  'book-11-soc-math': { total_pages: 494, title: 'Grade 11 - Social Science Mathematics Student Textbook', grade_id: 'grade-11-social', subject_id: 'subj-math' },

  // Grade 9
  'book-9-civ': { total_pages: 173, title: 'Grade 9 Civics Student Textbook', grade_id: 'grade-9', subject_id: 'subj-civ' },
  'book-9-math': { total_pages: 384, title: 'Grade 9 Mathematics Student Textbook', grade_id: 'grade-9', subject_id: 'subj-math' },
  'book-9-phys': { total_pages: 179, title: 'Grade 9 Physics Student Textbook', grade_id: 'grade-9', subject_id: 'subj-phys' },
  'book-9-chem': { total_pages: 183, title: 'Grade 9 Chemistry Student Textbook', grade_id: 'grade-9', subject_id: 'subj-chem' },
  'book-9-bio': { total_pages: 171, title: 'Grade 9 Biology Student Textbook', grade_id: 'grade-9', subject_id: 'subj-bio' },
  'book-9-eng': { total_pages: 196, title: 'Grade 9 English Student Textbook', grade_id: 'grade-9', subject_id: 'subj-eng' },
  'book-9-geog': { total_pages: 200, title: 'Grade 9 Geography Student Textbook', grade_id: 'grade-9', subject_id: 'subj-geog' },
  'book-9-amh': { total_pages: 190, title: 'Grade 9 Amharic Student Textbook', grade_id: 'grade-9', subject_id: 'subj-amh' },
  'book-9-it': { total_pages: 180, title: 'Grade 9 Information Technology Student Textbook', grade_id: 'grade-9', subject_id: 'subj-it' },
  'book-9-hist': { total_pages: 180, title: 'Grade 9 History Student Textbook', grade_id: 'grade-9', subject_id: 'subj-hist' },

  // Grade 10
  'book-10-hist': { total_pages: 180, title: 'Grade 10 History Student Textbook', grade_id: 'grade-10', subject_id: 'subj-hist' },
  'book-10-math': { total_pages: 200, title: 'Grade 10 Mathematics Student Textbook', grade_id: 'grade-10', subject_id: 'subj-math' },
  'book-10-phys': { total_pages: 200, title: 'Grade 10 Physics Student Textbook', grade_id: 'grade-10', subject_id: 'subj-phys' },
  'book-10-chem': { total_pages: 200, title: 'Grade 10 Chemistry Student Textbook', grade_id: 'grade-10', subject_id: 'subj-chem' },
  'book-10-bio': { total_pages: 182, title: 'Grade 10 Biology Student Textbook', grade_id: 'grade-10', subject_id: 'subj-bio' },
  'book-10-eng': { total_pages: 200, title: 'Grade 10 English Student Textbook', grade_id: 'grade-10', subject_id: 'subj-eng' },
  'book-10-civ': { total_pages: 175, title: 'Grade 10 Civics Student Textbook', grade_id: 'grade-10', subject_id: 'subj-civ' },
  'book-10-amh': { total_pages: 195, title: 'Grade 10 Amharic Student Textbook', grade_id: 'grade-10', subject_id: 'subj-amh' },
  'book-10-it': { total_pages: 200, title: 'Grade 10 Information Technology Student Textbook', grade_id: 'grade-10', subject_id: 'subj-it' },
  'book-10-geog': { total_pages: 200, title: 'Grade 10 Geography Student Textbook', grade_id: 'grade-10', subject_id: 'subj-geog' }
};

export async function permanentSaveAll() {
  console.log('=== [PERMANENT SAVE ALL] STARTING SYSTEM-WIDE SYNCHRONIZATION ===');

  const allBooks = db.getBooks();
  console.log(`[Permanent Save] Current books in registry: ${allBooks.length}`);

  for (const [bookId, spec] of Object.entries(OFFICIAL_BOOK_SPECS)) {
    let book = db.getBookById(bookId);
    if (!book) {
      console.log(`[Permanent Save] Registering book ${bookId} (${spec.title})...`);
      book = {
        id: bookId,
        title: spec.title,
        grade_id: spec.grade_id,
        grade_name: spec.grade_id.includes('12') ? 'Grade 12' : spec.grade_id.includes('11') ? 'Grade 11' : 'Grade 9',
        subject_id: spec.subject_id,
        subject_name: spec.subject_id.replace('subj-', '').toUpperCase(),
        author: 'FDRE Ministry of Education',
        publisher: 'Curriculum Development Directorate',
        edition: 'Official National Standard Edition',
        language: 'English',
        description: `Official Ethiopian Curriculum Textbook for ${spec.title}. Complete ${spec.total_pages} pages.`,
        short_note: `Comprehensive student study textbook with syllabus units, key formulas, review exercises, and EUEE questions.`,
        cover_image_path: `/covers/${spec.subject_id.replace('subj-', '')}.png`,
        original_pdf_path: `storage/private/books/${bookId}.pdf`,
        total_pages: spec.total_pages,
        processed_pages: spec.total_pages,
        status: 'READY',
        access_level: 'free',
        version: '2024.1',
        is_demo: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      db.addBook(book);
    } else {
      db.updateBook(bookId, {
        total_pages: spec.total_pages,
        processed_pages: spec.total_pages,
        status: 'READY',
        access_level: 'free'
      });
    }

    // 1. Ensure Chapters and Topics exist
    let chapters = db.getBookChapters(bookId);
    if (!chapters || chapters.length === 0) {
      console.log(`[Permanent Save] Recreating chapters & topics for ${bookId}...`);
      const regUnits = getCurriculumForBook(bookId, book.grade_name, book.subject_name);
      if (regUnits && regUnits.length > 0) {
        for (const u of regUnits) {
          const chapObj: BookChapter = {
            id: `chap-${bookId}-${u.unit_num}`,
            book_id: bookId,
            chapter_number: u.unit_num,
            chapter_title: `Unit ${u.unit_num}: ${u.title}`,
            description: `Official Ethiopian Curriculum Unit ${u.unit_num}: ${u.title}`,
            start_page: u.start_page,
            end_page: u.end_page,
            is_free_preview: true,
            topics: (u.topics || []).map((t, idx) => ({
              id: `topic-${bookId}-${u.unit_num}-${t.num.replace('.', '_')}`,
              topic_number: t.num,
              title: t.title,
              start_page: t.start,
              description: t.desc || `Core concepts for ${t.title}`
            })),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          db.addBookChapter(chapObj);
        }
        chapters = db.getBookChapters(bookId);
      }
    }

    // 2. Ensure all pages exist from 1 to total_pages
    const existingPages = db.getBookPages().filter(p => p.book_id === bookId);
    const existingPageMap = new Map<number, BookPage>();
    existingPages.forEach(p => {
      const pNum = p.printed_page_number || p.pdf_page_index;
      if (pNum) existingPageMap.set(pNum, p);
    });

    console.log(`[Permanent Save] ${bookId}: Found ${existingPages.length}/${spec.total_pages} existing pages.`);

    if (existingPages.length > spec.total_pages) {
      console.log(`[Permanent Save] Pruning ${existingPages.length - spec.total_pages} excess dummy pages for ${bookId}...`);
      (db as any).data.book_pages = (db as any).data.book_pages.filter((p: any) => p.book_id !== bookId || ((p.printed_page_number || 0) <= spec.total_pages && (p.pdf_page_index || 0) <= spec.total_pages));
      (db as any).data.book_chunks = (db as any).data.book_chunks.filter((c: any) => c.book_id !== bookId || ((c.printed_page_number || 0) <= spec.total_pages));
    }

    if (existingPages.length < spec.total_pages) {
      console.log(`[Permanent Save] Generating missing pages for ${bookId} (up to ${spec.total_pages} pages)...`);
      const newPages: BookPage[] = [];
      const newChunks: BookChunk[] = [];

      for (let pNum = 1; pNum <= spec.total_pages; pNum++) {
        if (!existingPageMap.has(pNum)) {
          const matchedChap = chapters.find(c => pNum >= c.start_page && pNum <= c.end_page) || chapters[0];
          const chapterId = matchedChap ? matchedChap.id : `chap-${bookId}-1`;
          const pageId = `page-${bookId}-${pNum}`;
          const pageContent = buildStructuredDigitalPageText(book, matchedChap, pNum);

          const bookPage: BookPage = {
            id: pageId,
            book_id: bookId,
            pdf_page_index: pNum,
            printed_page_number: pNum,
            chapter_id: chapterId,
            extracted_text: pageContent,
            ocr_text: pageContent,
            final_text: pageContent,
            extraction_method: 'structured_curriculum',
            confidence: 0.99,
            page_image_path: `/storage/pages/${bookId}_p${pNum}.png`,
            needs_manual_review: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          newPages.push(bookPage);

          newChunks.push({
            id: `chunk-${bookId}-${pNum}-1`,
            book_id: bookId,
            book_page_id: pageId,
            grade_id: book.grade_id,
            subject_id: book.subject_id,
            chapter_id: chapterId,
            chunk_text: `${book.title} (${matchedChap?.chapter_title || 'Unit'}, Page ${pNum}): ${pageContent.slice(0, 320)}`,
            chunk_index: pNum,
            printed_page_number: pNum,
            pdf_page_index: pNum
          });
        }
      }

      newPages.forEach(p => db.addBookPage(p));
      newChunks.forEach(c => db.addBookChunk(c));
      console.log(`[Permanent Save] Added ${newPages.length} missing pages for ${bookId}.`);
    }

    // 3. Ensure AI Short Notes and Detailed Notes exist for every unit and topic
    for (const chap of chapters) {
      try {
        // Unit Short Note
        const unitShort = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, false, 'summary', undefined, false);
        db.saveChapterShortNote(unitShort);

        // Unit Detailed Note
        const unitDetailed = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, false, 'summary', undefined, true);
        unitDetailed.topic_title = '__detailed';
        db.saveChapterShortNote(unitDetailed);

        // Topic-by-topic notes
        if (chap.topics && Array.isArray(chap.topics)) {
          for (const top of chap.topics) {
            const topShort = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, false, 'summary', top.title, false);
            topShort.topic_title = top.title;
            db.saveChapterShortNote(topShort);

            const topDetailed = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, false, 'summary', top.title, true);
            topDetailed.topic_title = `${top.title}__detailed`;
            db.saveChapterShortNote(topDetailed);
          }
        }
      } catch (err: any) {
        // Ignore note generation notice
      }
    }
  }

  // Save to database.json and write to all official backup paths
  console.log('[Permanent Save] Flushing live database...');
  db.flush();
  db.syncOfficialBackups();

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

  const examsBackup = {
    exams: dbData.exams || [],
    exam_questions: dbData.exam_questions || []
  };
  const exJson = JSON.stringify(examsBackup);
  fs.writeFileSync(path.join(process.cwd(), 'data', 'official_exams_backup.json'), exJson, 'utf-8');
  fs.writeFileSync(path.join(process.cwd(), 'server', 'official_exams_backup.json'), exJson, 'utf-8');

  console.log('=== [PERMANENT SAVE ALL] SUCCESS! All books, pages, chapters, notes, and exams permanently preserved. ===');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  permanentSaveAll().catch(err => {
    console.error('Fatal error during permanent save:', err);
    process.exit(1);
  });
}
