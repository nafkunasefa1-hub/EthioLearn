import fs from 'fs';
import path from 'path';
import { GRADE_12_CURRICULUM } from '../server/curriculumRegistryGrade12';

const dbPath = path.join(process.cwd(), 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const chemReg = GRADE_12_CURRICULUM['book-12-nat-chem'];
console.log('Registry units count for book-12-nat-chem:', chemReg.length);

const bookIds = ['book-12-nat-chem', 'book-12-chem'];

for (const bId of bookIds) {
  db.book_chapters = (db.book_chapters || []).filter((c: any) => c.book_id !== bId);
  chemReg.forEach(u => {
    db.book_chapters.push({
      id: `chap-${bId}-${u.unit_num}`,
      book_id: bId,
      chapter_number: u.unit_num,
      chapter_title: `Unit ${u.unit_num}: ${u.title}`,
      description: `Unit ${u.unit_num}: ${u.title}`,
      start_page: u.start_page,
      end_page: u.end_page,
      topics: u.topics.map(t => ({
        id: `topic-${bId}-${u.unit_num}-${t.num.replace('.', '_')}`,
        chapter_id: `chap-${bId}-${u.unit_num}`,
        topic_number: t.num,
        title: t.title,
        start_page: t.start,
        description: t.desc || `Curriculum topic ${t.num}: ${t.title}`
      })),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  });
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');

// Also update official_textbooks_backup.json
[
  path.join(process.cwd(), 'data', 'official_textbooks_backup.json'),
  path.join(process.cwd(), 'server', 'official_textbooks_backup.json')
].forEach(p => {
  if (fs.existsSync(p)) {
    const backup = JSON.parse(fs.readFileSync(p, 'utf8'));
    backup.book_chapters = db.book_chapters;
    fs.writeFileSync(p, JSON.stringify(backup), 'utf8');
  }
});

console.log('Successfully updated chapters with full topics for book-12-nat-chem and book-12-chem!');
