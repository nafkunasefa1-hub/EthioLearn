// scripts/repopulate_all_chapters.ts
import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { BookChapter, Topic } from '../src/types';
import { getCurriculumForBook } from '../server/curriculumRegistry';

async function repopulateAllChapters() {
  console.log('=== [REPOPULATE CHAPTERS] Starting Chapter and Topic Reconstruction for All 61 Books ===');

  const books = db.getBooks();
  let count = 0;
  const allTopics: Topic[] = [];

  for (const book of books) {
    let chapters = db.getBookChapters(book.id);
    if (!chapters || chapters.length === 0) {
      const regUnits = getCurriculumForBook(book.id, book.grade_name || 'Secondary', book.subject_name || 'Subject');
      const totalPages = book.total_pages || 200;

      if (regUnits && regUnits.length > 0) {
        const regMaxPage = Math.max(...regUnits.map(u => u.end_page));
        const shouldScale = totalPages > 0 && regMaxPage > 0 && Math.abs(totalPages - regMaxPage) > 5;
        const scale = shouldScale ? (totalPages / regMaxPage) : 1.0;

        chapters = regUnits.map((u, uIdx) => {
          const isLastUnit = uIdx === regUnits.length - 1;
          const sPage = shouldScale ? Math.max(1, Math.min(totalPages, Math.round(u.start_page * scale))) : Math.min(totalPages, u.start_page);
          const ePage = isLastUnit ? totalPages : (shouldScale ? Math.max(sPage, Math.min(totalPages, Math.round(u.end_page * scale))) : Math.min(totalPages, u.end_page));

          return {
            id: `chap-${book.id}-${u.unit_num}`,
            book_id: book.id,
            chapter_number: u.unit_num,
            chapter_title: `Unit ${u.unit_num}: ${u.title}`,
            description: `Official Ethiopian Curriculum Unit ${u.unit_num}: ${u.title}`,
            start_page: sPage,
            end_page: ePage,
            is_free_preview: u.unit_num === 1,
            topics: (u.topics || []).map((t, idx) => {
              const tStart = shouldScale ? Math.max(sPage, Math.min(ePage, Math.round(t.start * scale))) : Math.min(ePage, t.start);
              return {
                id: `topic-${book.id}-${u.unit_num}-${t.num.replace('.', '_')}`,
                topic_number: t.num,
                title: t.title,
                start_page: tStart,
                description: t.desc || `Curriculum topic ${t.num}: ${t.title}`
              };
            }),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
        });
      } else {
        const unitPages = Math.max(10, Math.floor(totalPages / 5));
        chapters = [1, 2, 3, 4, 5].map(uNum => ({
          id: `chap-${book.id}-${uNum}`,
          book_id: book.id,
          chapter_number: uNum,
          chapter_title: `Unit ${uNum}: Core Principles of ${book.title}`,
          description: `Curriculum unit ${uNum}`,
          start_page: (uNum - 1) * unitPages + 1,
          end_page: uNum === 5 ? totalPages : uNum * unitPages,
          is_free_preview: uNum === 1,
          topics: [
            {
              id: `topic-${book.id}-${uNum}-1`,
              topic_number: `${uNum}.1`,
              title: `Foundations of Unit ${uNum}`,
              start_page: (uNum - 1) * unitPages + 1,
              description: `Key principles and theoretical foundations for Unit ${uNum}`
            },
            {
              id: `topic-${book.id}-${uNum}-2`,
              topic_number: `${uNum}.2`,
              title: `Advanced Concepts & Problem Solving`,
              start_page: Math.floor((uNum - 1) * unitPages + unitPages / 2),
              description: `Application, analytical methods, and EUEE problem solving`
            }
          ],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }));
      }

      chapters.forEach(c => db.addBookChapter(c));
      count++;

      // Also gather topics for global topics table
      for (const chap of chapters) {
        if (chap.topics) {
          chap.topics.forEach((t: any, idx: number) => {
            allTopics.push({
              id: t.id || `topic-${book.id}-${chap.chapter_number}-${(t.topic_number || `${idx + 1}`).replace('.', '_')}`,
              grade_id: book.grade_id,
              subject_id: book.subject_id,
              chapter_id: chap.id,
              topic_name: t.title,
              description: t.description || `Curriculum topic: ${t.title}`
            });
          });
        }
      }
    }
  }

  if (allTopics.length > 0) {
    db.addTopicsBatch(allTopics);
  }

  console.log(`Successfully populated chapters for ${count} books.`);
  console.log(`Total book_chapters now: ${db.getBookChapters().length}`);
  console.log(`Total topics now: ${db.getTopics().length}`);

  // Flush and update backups
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

  console.log('=== [REPOPULATE CHAPTERS] Finished and Saved to All Backups! ===');
}

repopulateAllChapters().catch(e => {
  console.error('Fatal error repopulating chapters:', e);
  process.exit(1);
});
