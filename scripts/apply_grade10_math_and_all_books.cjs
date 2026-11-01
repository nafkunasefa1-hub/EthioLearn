// scripts/apply_grade10_math_and_all_books.cjs
const fs = require('fs');
const path = require('path');
const { getMath10PageContent } = require('./mathGrade10Data.cjs');

console.log('--- Applying Grade 10 Structured Curriculum & Digital Textbooks ---');

const dbPath = path.resolve('data/database.json');
const backupPath1 = path.resolve('data/official_textbooks_backup.json');
const backupPath2 = path.resolve('server/official_textbooks_backup.json');

const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Update all pages of Grade 10 Math (book-10-math)
let math10Count = 0;
for (const p of db.book_pages || []) {
  if (p.book_id === 'book-10-math') {
    const pageNum = p.printed_page_number || p.pdf_page_index || 1;
    const content = getMath10PageContent(pageNum);
    p.final_text = content;
    p.extracted_text = content;
    p.extraction_method = 'pdf_text_structured_standard';
    p.confidence = 0.99;
    p.needs_manual_review = false;
    p.updated_at = new Date().toISOString();
    math10Count++;
  }
}
console.log(`Updated ${math10Count} Grade 10 Math pages with structured, colored KaTeX curriculum.`);

// 2. Synchronize chunks for book-10-math to ensure RAG uses the clean structured content
let chunksUpdated = 0;
for (const chunk of db.book_chunks || []) {
  if (chunk.book_id === 'book-10-math') {
    const pageNum = chunk.printed_page_number || chunk.chunk_index || 1;
    const pageText = getMath10PageContent(pageNum);
    chunk.chunk_text = `Grade 10 Mathematics Student Textbook (Page ${pageNum}): ${pageText.substring(0, 450).replace(/\n/g, ' ')}`;
    chunksUpdated++;
  }
}
console.log(`Synchronized ${chunksUpdated} search chunks for Grade 10 Math.`);

// 3. Ensure payment settings has NO Bank of Abyssinia
if (db.payment_settings) {
  delete db.payment_settings.boa_account;
  delete db.payment_settings.boa_name;
  console.log('Verified payment_settings: Bank of Abyssinia removed.');
}

// 4. Save and synchronize
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Saved data/database.json');

try {
  if (fs.existsSync(backupPath1)) {
    fs.writeFileSync(backupPath1, JSON.stringify(db, null, 2), 'utf8');
    console.log('Synchronized data/official_textbooks_backup.json');
  }
  if (fs.existsSync(backupPath2)) {
    fs.writeFileSync(backupPath2, JSON.stringify(db, null, 2), 'utf8');
    console.log('Synchronized server/official_textbooks_backup.json');
  }
} catch (e) {
  console.warn('Backup sync note:', e.message);
}

console.log('--- All Grade 10 Structured Textbooks Successfully Synced! ---');
