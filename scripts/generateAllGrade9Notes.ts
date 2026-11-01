import { db } from '../server/db';
import { getOrGenerateChapterShortNote } from '../server/shortNotesService';

async function main() {
  console.log('[Script] Starting comprehensive generation of Short Notes & Detailed Notes for all Grade 9 Textbooks...');
  
  const allBooks = db.getBooks().filter(b => 
    (b.grade_id && b.grade_id.includes('9')) || 
    (b.grade_name && b.grade_name.includes('9')) ||
    b.id.includes('-9-')
  );

  console.log(`[Script] Found ${allBooks.length} Grade 9 books to process:`, allBooks.map(b => `${b.id} (${b.title})`));

  let totalUnits = 0;
  let totalTopics = 0;
  let totalGenerated = 0;

  for (const book of allBooks) {
    console.log(`\n======================================================`);
    console.log(`Processing: ${book.title} [${book.id}]`);
    console.log(`======================================================`);

    const chapters = db.getBookChapters(book.id);
    console.log(`Found ${chapters.length} chapters/units for ${book.title}`);

    for (const chap of chapters) {
      totalUnits++;
      console.log(`\n  Unit ${chap.chapter_number}: ${chap.chapter_title}`);

      // 1. Generate Unit Short Note (Prompt mandate: brief, important points clear, table/diagram)
      try {
        const unitShort = await getOrGenerateChapterShortNote(book.id, chap.chapter_number, false, 'summary', undefined, false);
        db.saveChapterShortNote(unitShort);
        totalGenerated++;
      } catch (e: any) {
        console.warn(`    Error on Unit Short Note:`, e.message);
      }

      // 2. Generate Unit Detailed Note (Prompt mandate: great detail, depth, one by one, table/diagram)
      try {
        const unitDetailed = await getOrGenerateChapterShortNote(book.id, chap.chapter_number, false, 'summary', undefined, true);
        unitDetailed.topic_title = '__detailed';
        db.saveChapterShortNote(unitDetailed);
        totalGenerated++;
      } catch (e: any) {
        console.warn(`    Error on Unit Detailed Note:`, e.message);
      }

      // 3. Process every topic in this unit
      const topics = (chap.topics && chap.topics.length > 0) ? chap.topics : [{
        id: `topic-${chap.id}-1`,
        chapter_id: chap.id,
        topic_number: `${chap.chapter_number}.1`,
        title: chap.chapter_title,
        description: `Core concepts of ${chap.chapter_title}`,
        start_page: chap.start_page
      }];

      for (const top of topics) {
        totalTopics++;
        console.log(`    - Generating Topic: "${top.title}" (Short & Detailed Notes)`);

        // Topic Short Note
        try {
          const topShort = await getOrGenerateChapterShortNote(book.id, chap.chapter_number, false, 'summary', top.title, false);
          topShort.topic_title = top.title;
          db.saveChapterShortNote(topShort);
          totalGenerated++;
        } catch (te: any) {
          console.warn(`      Error on Topic Short Note (${top.title}):`, te.message);
        }

        // Topic Detailed Note
        try {
          const topDetailed = await getOrGenerateChapterShortNote(book.id, chap.chapter_number, false, 'summary', top.title, true);
          topDetailed.topic_title = `${top.title}__detailed`;
          db.saveChapterShortNote(topDetailed);
          totalGenerated++;
        } catch (te: any) {
          console.warn(`      Error on Topic Detailed Note (${top.title}):`, te.message);
        }
      }
    }
  }

  // Force immediate flush and backup sync
  db.syncOfficialBackups();
  console.log(`\n======================================================`);
  console.log(`[Script] Complete! Processed ${totalUnits} units, ${totalTopics} topics, generated ${totalGenerated} structured Short and Detailed Notes.`);
  console.log(`All Grade 9 notes are permanently saved to database and backup files for offline access.`);
  console.log(`======================================================\n`);
}

main().catch(err => {
  console.error('[Script] Fatal error:', err);
  process.exit(1);
});
