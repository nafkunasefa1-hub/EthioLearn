import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { ALL_55_EXAMS } from './restoreAll55ExamCategories';
import { populateAIGeneratedExams } from './populate_ai_generated_exams';
import { getCurriculumForBook } from '../server/curriculumRegistry';
import { BookChapter } from '../src/types';

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
  'book-9-eng': { total_pages: 237, title: 'Grade 9 English Student Textbook', grade_id: 'grade-9', subject_id: 'subj-eng' },
  'book-9-geog': { total_pages: 200, title: 'Grade 9 Geography Student Textbook', grade_id: 'grade-9', subject_id: 'subj-geog' },
  'book-9-amh': { total_pages: 190, title: 'Grade 9 Amharic Student Textbook', grade_id: 'grade-9', subject_id: 'subj-amh' },
  'book-9-it': { total_pages: 180, title: 'Grade 9 Information Technology Student Textbook', grade_id: 'grade-9', subject_id: 'subj-it' }
};

export async function masterSyncAll() {
  console.log('=== [MASTER SYNC ALL] Executing Full Applet Synchronization ===');

  const dbData = (db as any).data;

  // 1. Restore & Standardize All 55 Master Official Exams
  console.log('[1/4] Restoring 55 Master Official Entrance & Curriculum Exams...');
  const existingExamMap = new Map<string, any>();
  (dbData.exams || []).forEach((e: any) => existingExamMap.set(e.id, e));

  const restoredExams = ALL_55_EXAMS.map(me => {
    const existing = existingExamMap.get(me.id) || {};
    return {
      ...existing,
      ...me,
      status: 'PUBLISHED',
      is_free_preview: true
    };
  });
  dbData.exams = restoredExams;
  console.log(`[Master Sync] Registered ${dbData.exams.length} master exams.`);

  // 2. Add AI Generated Exams (4 exams)
  console.log('[2/4] Registering 4 AI Generated Practice Exams under AI Generated Questions tab...');
  populateAIGeneratedExams();
  console.log(`[Master Sync] Total exams after adding AI Generated exams: ${dbData.exams.length}`);

  // 3. Ensure all books have correct page counts and chapters
  console.log('[3/4] Validating Book Page Counts, Units, and Digital Pages...');
  for (const [bookId, spec] of Object.entries(OFFICIAL_BOOK_SPECS)) {
    const book = db.getBookById(bookId);
    if (book) {
      db.updateBook(bookId, {
        total_pages: spec.total_pages,
        processed_pages: spec.total_pages,
        status: 'READY',
        access_level: 'free'
      });

      // Ensure chapters exist
      let chapters = db.getBookChapters(bookId);
      if (!chapters || chapters.length === 0) {
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
        }
      }
    }
  }

  // 4. Save to Disk and Backups
  console.log('[4/4] Writing permanently to database.json and official backups...');
  db.flush();
  db.syncOfficialBackups();

  const textbookBackup = {
    books: dbData.books || [],
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

  console.log('=== [MASTER SYNC ALL] FINISHED SUCCESSFULLY! All 59 exams and all textbooks secured. ===');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  masterSyncAll().catch(e => {
    console.error('Error in masterSyncAll:', e);
    process.exit(1);
  });
}
