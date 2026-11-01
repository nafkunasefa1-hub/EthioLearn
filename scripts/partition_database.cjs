const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
console.log('Loading database.json for partitioning...');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Partition book_pages by book_id
const pagesDir = path.join(__dirname, '..', 'data', 'book_pages');
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

const pagesByBook = {};
for (const p of db.book_pages || []) {
  if (!p || !p.book_id) continue;
  if (!pagesByBook[p.book_id]) pagesByBook[p.book_id] = [];
  pagesByBook[p.book_id].push(p);
}

for (const [bookId, pages] of Object.entries(pagesByBook)) {
  fs.writeFileSync(path.join(pagesDir, `${bookId}.json`), JSON.stringify(pages));
}
console.log(`Partitioned ${Object.keys(pagesByBook).length} books of pages into data/book_pages/`);

// 2. Partition chapter_short_notes by book_id
const notesDir = path.join(__dirname, '..', 'data', 'short_notes');
if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir, { recursive: true });

const notesByBook = {};
for (const [key, note] of Object.entries(db.chapter_short_notes || {})) {
  if (!note) continue;
  const bookId = note.book_id || key.split('_ch_')[0];
  if (!notesByBook[bookId]) notesByBook[bookId] = {};
  notesByBook[bookId][key] = note;
}

for (const [bookId, notes] of Object.entries(notesByBook)) {
  fs.writeFileSync(path.join(notesDir, `${bookId}.json`), JSON.stringify(notes));
}
console.log(`Partitioned ${Object.keys(notesByBook).length} books of short notes into data/short_notes/`);

// 3. Keep streamlined database.json without heavy arrays
db.book_pages = [];
db.chapter_short_notes = {};
fs.writeFileSync(dbPath, JSON.stringify(db));
console.log(`Streamlined data/database.json (${(fs.statSync(dbPath).size / 1024 / 1024).toFixed(1)} MB)`);
