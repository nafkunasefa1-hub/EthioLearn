import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { db } from '../server/db';
import { processUploadedBook } from '../server/ocrEngine';

async function run() {
  console.log('=== [AUTHENTIC BOOK INGESTION & AI SYNTHESIS PIPELINE] STARTING ===');

  const targetBooks = [
    { id: 'book-9-eng', file: 'storage/private/books/book-9-eng.pdf', name: 'Grade 9 English' },
    { id: 'book-9-chem', file: 'storage/private/books/book-9-chem.pdf', name: 'Grade 9 Chemistry' },
    { id: 'book-9-phys', file: 'storage/private/books/book-9-phys.pdf', name: 'Grade 9 Physics' }
  ];

  for (const tb of targetBooks) {
    const fullPath = path.resolve(process.cwd(), tb.file);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[Pipeline] File not found: ${fullPath}`);
      continue;
    }

    console.log(`\n==================================================`);
    console.log(`[Pipeline] Ingesting & Generating AI Notes for: ${tb.name} (${tb.id})`);
    console.log(`==================================================`);

    try {
      await processUploadedBook(tb.id, fullPath, path.basename(fullPath), (p) => {
        console.log(`[${tb.id}] [${p.status}] ${p.step} (Processed: ${p.processed_pages}/${p.total_pages})`);
      });
      console.log(`[Pipeline] Successfully finished ingestion for ${tb.name}!`);
    } catch (err) {
      console.error(`[Pipeline] Error processing ${tb.name}:`, err);
    }
  }

  // Final flush and official backup synchronization
  db.flush();
  db.syncOfficialBackups();
  console.log('\n=== [AUTHENTIC BOOK INGESTION] ALL BOOKS INGESTED & PERMANENTLY SAVED ===');
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
