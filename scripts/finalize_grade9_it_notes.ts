import * as fs from 'fs';
import * as path from 'path';
import { ChapterShortNote } from '../src/types';

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const bId = 'book-9-it';

const UNIT_TITLES: Record<number, string> = {
  1: 'Unit 1: Organization of Files',
  2: 'Unit 2: Computer Network',
  3: 'Unit 3: Application Software',
  4: 'Unit 4: Image Processing and Multimedia',
  5: 'Unit 5: Information and Computer Security',
  6: 'Unit 6: Fundamentals of Programming'
};

function objectToMarkdown(obj: any): string {
  if (typeof obj === 'string') return obj;
  if (!obj || typeof obj !== 'object') return '';

  let md = '';

  if (obj.introduction || obj.overview || obj.summary) {
    md += `${obj.introduction || obj.overview || obj.summary}\n\n`;
  }

  if (obj.ascii_diagram || obj.diagram || obj.architecture) {
    const diag = obj.ascii_diagram || obj.diagram || obj.architecture;
    md += `#### Architectural Schematic & Mental Model\n\`\`\`\n${diag}\n\`\`\`\n\n`;
  }

  for (const [k, v] of Object.entries(obj)) {
    if (['introduction', 'overview', 'summary', 'ascii_diagram', 'diagram', 'architecture'].includes(k)) continue;

    const heading = k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    if (Array.isArray(v)) {
      if (v.length > 0 && typeof v[0] === 'object' && v[0] !== null) {
        // Render as a Markdown Table
        const cols = Object.keys(v[0]);
        md += `#### ${heading}\n\n`;
        md += `| ${cols.map(c => c.replace(/_/g, ' ').toUpperCase()).join(' | ')} |\n`;
        md += `| ${cols.map(() => ':---').join(' | ')} |\n`;
        for (const row of v) {
          md += `| ${cols.map(c => String(row[c] || '').replace(/\|/g, '\\|').replace(/\n/g, ' ')).join(' | ')} |\n`;
        }
        md += `\n`;
      } else {
        md += `#### ${heading}\n\n`;
        for (const item of v) {
          md += `• ${item}\n`;
        }
        md += `\n`;
      }
    } else if (typeof v === 'object' && v !== null) {
      md += `#### ${heading}\n\n${objectToMarkdown(v)}\n\n`;
    } else if (typeof v === 'string') {
      md += `#### ${heading}\n\n${v}\n\n`;
    }
  }

  return md.trim();
}

console.log('Finalizing and normalizing all IT Grade 9 Short Notes and Detailed Notes...');

const itKeys = Object.keys(db.chapter_short_notes || {}).filter(k => k.startsWith(bId));
let normalizedOverviews = 0;
let normalizedTopicsCovered = 0;

for (const k of itKeys) {
  const note: ChapterShortNote = db.chapter_short_notes[k];
  if (!note) continue;

  // 1. Fix chapter_title if old title
  if (UNIT_TITLES[note.chapter_number]) {
    note.chapter_title = UNIT_TITLES[note.chapter_number];
  }

  // 2. Normalize detailed_overview to rich Markdown string
  if (typeof note.detailed_overview === 'object' && note.detailed_overview !== null) {
    note.detailed_overview = objectToMarkdown(note.detailed_overview);
    normalizedOverviews++;
  } else if (!note.detailed_overview && note.unit_summary) {
    note.detailed_overview = note.unit_summary;
  }

  // 3. Normalize topics_covered to array of objects
  if (Array.isArray(note.topics_covered)) {
    const fixedTopics = note.topics_covered.map((tc: any, i: number) => {
      if (typeof tc === 'string') {
        normalizedTopicsCovered++;
        return {
          title: tc,
          topic_title: tc,
          short_notes: [tc],
          key_points: [tc],
          explanation: tc,
          detailed_explanation: `${tc}. Mastered as a core competency of ${note.chapter_title} in Ethiopian Grade 9 IT.`,
          key_takeaway: tc
        };
      }
      return tc;
    });
    note.topics_covered = fixedTopics;
  }

  // 4. Ensure topic_title is clean for short notes and distinct for detailed notes
  const isDetailed = k.includes('__detailed');
  if (isDetailed && note.topic_title && !note.topic_title.includes('__detailed')) {
    note.topic_title = `${note.topic_title}__detailed`;
  }
}

// 5. Ensure the 6 Unit-Level Short Notes and Detailed Notes are pristine
for (let ch = 1; ch <= 6; ch++) {
  const uTitle = UNIT_TITLES[ch];
  const uShortKey = `${bId}_ch_${ch}`;
  const uDetKey = `${bId}_ch_${ch}___detailed`;

  if (db.chapter_short_notes[uShortKey]) {
    db.chapter_short_notes[uShortKey].chapter_title = uTitle;
  }
  if (db.chapter_short_notes[uDetKey]) {
    db.chapter_short_notes[uDetKey].chapter_title = uTitle;
    db.chapter_short_notes[uDetKey].topic_title = '__detailed';
    db.chapter_short_notes[`${bId}_ch_${ch}__detailed`] = db.chapter_short_notes[uDetKey];
    db.chapter_short_notes[`${bId}_ch_${ch}_topic___detailed`] = db.chapter_short_notes[uDetKey];
  }
}

// 6. Write back to data/database.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved normalized database.json! Normalized ${normalizedOverviews} overviews and ${normalizedTopicsCovered} topic entries.`);

// 7. Write to official backups
const backupData = {
  books: db.books || [],
  book_chapters: db.book_chapters || [],
  book_pages: db.book_pages || [],
  book_chunks: db.book_chunks || [],
  chapter_short_notes: db.chapter_short_notes || {}
};

const backupPaths = [
  path.resolve('data/official_textbooks_backup.json'),
  path.resolve('server/official_textbooks_backup.json'),
  path.resolve('data/database.all55exams.bak.json')
];

for (const bp of backupPaths) {
  try {
    if (bp.includes('all55exams')) {
      fs.writeFileSync(bp, JSON.stringify(db, null, 2), 'utf8');
    } else {
      fs.writeFileSync(bp, JSON.stringify(backupData, null, 2), 'utf8');
    }
    console.log(`Synced to backup: ${bp}`);
  } catch (e: any) {
    console.warn(`Could not sync to ${bp}:`, e.message);
  }
}

console.log('Finalization completed successfully.');
