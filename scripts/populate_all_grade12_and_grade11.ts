// scripts/populate_all_grade12_and_grade11.ts
import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { BookPage, BookChunk, BookChapter } from '../src/types';
import { getMath12PageContent } from './math12_data/math_pages_data';
import { getPhysics12PageContent } from './physics12_data/physics_pages_data';
import { getBio12PageContent } from './bio12_data/bio_pages_data';
import { getEnglish12PageContent } from './eng12_data/eng_pages_data';
import { getMath11PageContent } from './math11_data/math_pages_data';
import { getCurriculumForBook } from '../server/curriculumRegistry';
import { buildTopicDetailedNotes } from '../server/topicNotesKnowledge';

interface BookPopulateConfig {
  bookIds: string[];
  totalPages: number;
  getPageContent: (p: number) => string;
  gradeId: string;
  subjectId: string;
}

const CONFIGS: BookPopulateConfig[] = [
  {
    bookIds: ['book-12-math', 'book-12-nat-math', 'book-12-soc-math'],
    totalPages: 424,
    getPageContent: getMath12PageContent,
    gradeId: 'grade-12-natural',
    subjectId: 'subj-math'
  },
  {
    bookIds: ['book-12-phys', 'book-12-nat-phys'],
    totalPages: 372,
    getPageContent: getPhysics12PageContent,
    gradeId: 'grade-12-natural',
    subjectId: 'subj-phys'
  },
  {
    bookIds: ['book-12-bio', 'book-12-nat-bio'],
    totalPages: 358,
    getPageContent: getBio12PageContent,
    gradeId: 'grade-12-natural',
    subjectId: 'subj-bio'
  },
  {
    bookIds: ['book-12-eng', 'book-12-nat-eng', 'book-12-soc-eng'],
    totalPages: 270,
    getPageContent: getEnglish12PageContent,
    gradeId: 'grade-12-natural',
    subjectId: 'subj-eng'
  },
  {
    bookIds: ['book-11-math', 'book-11-nat-math', 'book-11-soc-math'],
    totalPages: 494,
    getPageContent: getMath11PageContent,
    gradeId: 'grade-11-natural',
    subjectId: 'subj-math'
  }
];

export async function populateAllSecondaryTextbooks() {
  console.log('=== [POPULATE SECONDARY TEXTBOOKS] Starting complete ingestion ===');

  for (const cfg of CONFIGS) {
    const primaryBookId = cfg.bookIds[0];
    const curriculumUnits = getCurriculumForBook(primaryBookId, 'Secondary', cfg.subjectId);
    console.log(`\nProcessing ${primaryBookId} (${cfg.totalPages} pages, ${curriculumUnits.length} curriculum units)...`);

    for (const bookId of cfg.bookIds) {
      console.log(`- Updating metadata and chapters for ${bookId}...`);
      db.updateBook(bookId, {
        total_pages: cfg.totalPages,
        processed_pages: cfg.totalPages,
        status: 'READY',
        access_level: 'free'
      });

      // Clear previous dummy pages
      db.clearBookPagesAndChunks(bookId);

      // Register Chapters & Topics
      const topicsBatch: any[] = [];
      curriculumUnits.forEach(u => {
        const chapId = `chap-${bookId}-${u.unit_num}`;
        const chapObj: BookChapter = {
          id: chapId,
          book_id: bookId,
          chapter_number: u.unit_num,
          chapter_title: `Unit ${u.unit_num}: ${u.title}`,
          description: `Official Ethiopian Curriculum Unit ${u.unit_num}: ${u.title}`,
          start_page: u.start_page,
          end_page: u.end_page,
          is_free_preview: true,
          topics: (u.topics || []).map(t => ({
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

        (u.topics || []).forEach(t => {
          topicsBatch.push({
            id: `topic-${bookId}-${u.unit_num}-${t.num.replace('.', '_')}`,
            grade_id: cfg.gradeId,
            subject_id: cfg.subjectId,
            chapter_id: chapId,
            topic_name: t.title,
            description: t.desc || `Core study concepts for ${t.title}`
          });
        });
      });

      if (topicsBatch.length > 0) {
        db.addTopicsBatch(topicsBatch);
      }

      // Generate all pages & chunks
      const pages: BookPage[] = [];
      const chunks: BookChunk[] = [];

      for (let pNum = 1; pNum <= cfg.totalPages; pNum++) {
        const pageText = cfg.getPageContent(pNum);
        const curUnit = curriculumUnits.find(u => pNum >= u.start_page && pNum <= u.end_page) || curriculumUnits[0];
        const chapId = `chap-${bookId}-${curUnit?.unit_num || 1}`;

        const pageObj: BookPage = {
          id: `page-${bookId}-${pNum}`,
          book_id: bookId,
          pdf_page_index: pNum,
          printed_page_number: pNum,
          chapter_id: chapId,
          extracted_text: pageText,
          ocr_text: pageText,
          final_text: pageText,
          extraction_method: 'verified_manual',
          confidence: 1.0,
          needs_manual_review: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        pages.push(pageObj);

        chunks.push({
          id: `chunk-${bookId}-${pNum}-1`,
          book_id: bookId,
          book_page_id: pageObj.id,
          grade_id: cfg.gradeId,
          subject_id: cfg.subjectId,
          chapter_id: chapId,
          chunk_text: pageText.slice(0, 450),
          chunk_index: pNum,
          printed_page_number: pNum,
          pdf_page_index: pNum
        });
      }

      pages.forEach(p => db.addBookPage(p));
      chunks.forEach(c => db.addBookChunk(c));
      console.log(`  ✓ Inserted ${pages.length} authentic pages & chunks for ${bookId}`);

      // Generate in-depth Short Notes and Detailed Notes for each chapter and topic
      const bookObj = db.getBookById(bookId);
      if (bookObj) {
        for (const u of curriculumUnits) {
          const chapObj = db.getBookChapters(bookId).find(c => c.chapter_number === u.unit_num);
          if (chapObj) {
            // Unit short note
            const unitShort = buildTopicDetailedNotes(bookObj, chapObj, {
              num: `${u.unit_num}.1`,
              title: u.title,
              desc: `Unit ${u.unit_num} overview`,
              start_page: u.start_page
            }, false);

            db.saveChapterShortNote({
              id: `note-${bookId}-${u.unit_num}-summary`,
              book_id: bookId,
              chapter_id: chapObj.id,
              chapter_number: u.unit_num,
              chapter_title: chapObj.chapter_title,
              topic_title: undefined,
              grade_name: bookObj.grade_name,
              subject_name: bookObj.subject_name,
              unit_summary: `High-yield summary for Unit ${u.unit_num}: ${u.title}`,
              detailed_overview: unitShort.detailed_explanation,
              key_concepts: (unitShort.key_points || []).map(kp => ({
                concept: kp.split(':')[0] || 'Core Principle',
                explanation: kp,
                illustration_analogy: unitShort.diagram_illustration
              })),
              core_formulas_rules: (unitShort.short_notes || []).map(n => ({
                formula_or_law: n.split(':')[0] || n,
                explanation: n,
                units_conditions: 'Standard curriculum parameters.'
              })),
              euee_exam_tips: [{
                trap: `Examiner trap for Unit ${u.unit_num}`,
                how_to_avoid: unitShort.exam_focus || 'Review boundary conditions and SI units.',
                frequency: 'Critical'
              }],
              ai_assisted: true,
              generated_at: new Date().toISOString(),
              focus: 'summary',
              book_grounded: true
            });

            // Unit detailed note
            const unitDetailed = buildTopicDetailedNotes(bookObj, chapObj, {
              num: `${u.unit_num}.1`,
              title: u.title,
              desc: `Unit ${u.unit_num} in-depth breakdown`,
              start_page: u.start_page
            }, true);

            db.saveChapterShortNote({
              id: `note-${bookId}-${u.unit_num}-detailed`,
              book_id: bookId,
              chapter_id: chapObj.id,
              chapter_number: u.unit_num,
              chapter_title: chapObj.chapter_title,
              topic_title: '__detailed',
              grade_name: bookObj.grade_name,
              subject_name: bookObj.subject_name,
              unit_summary: `In-depth masterclass for Unit ${u.unit_num}: ${u.title}`,
              detailed_overview: unitDetailed.detailed_explanation,
              key_concepts: (unitDetailed.key_points || []).map(kp => ({
                concept: kp.split(':')[0] || 'Key Principle',
                explanation: kp,
                illustration_analogy: unitDetailed.diagram_illustration
              })),
              core_formulas_rules: (unitDetailed.short_notes || []).map(n => ({
                formula_or_law: n.split(':')[0] || n,
                explanation: n,
                units_conditions: 'Standard curriculum parameters.'
              })),
              euee_exam_tips: [{
                trap: `High-frequency EUEE question focus for Unit ${u.unit_num}`,
                how_to_avoid: unitDetailed.exam_focus || 'Avoid common distractors and sign inversion.',
                frequency: 'Critical'
              }],
              ai_assisted: true,
              generated_at: new Date().toISOString(),
              focus: 'summary',
              book_grounded: true
            });

            // Subtopics notes
            for (const t of (u.topics || [])) {
              const tNotesShort = buildTopicDetailedNotes(bookObj, chapObj, t, false);
              db.saveChapterShortNote({
                id: `note-${bookId}-${u.unit_num}-${t.num}-short`,
                book_id: bookId,
                chapter_id: chapObj.id,
                chapter_number: u.unit_num,
                chapter_title: chapObj.chapter_title,
                topic_title: t.title,
                grade_name: bookObj.grade_name,
                subject_name: bookObj.subject_name,
                unit_summary: `Short revision notes for ${t.title}: ${tNotesShort.key_takeaway}`,
                detailed_overview: tNotesShort.detailed_explanation,
                key_concepts: (tNotesShort.key_points || []).map(kp => ({
                  concept: kp.split(':')[0] || 'Core Rule',
                  explanation: kp
                })),
                core_formulas_rules: (tNotesShort.short_notes || []).map(n => ({
                  formula_or_law: n.split(':')[0] || n,
                  explanation: n,
                  units_conditions: 'Standard curriculum parameters.'
                })),
                euee_exam_tips: [{
                  trap: `Exam trap on ${t.title}`,
                  how_to_avoid: tNotesShort.exam_focus || 'Review specific definitions and units.',
                  frequency: 'High'
                }],
                ai_assisted: true,
                generated_at: new Date().toISOString(),
                focus: 'summary',
                book_grounded: true
              });
            }
          }
        }
      }
    }
  }

  console.log('\nFlushing database and synchronizing official backups...');
  db.flush();
  db.syncOfficialBackups();
  console.log('=== [POPULATE SECONDARY TEXTBOOKS] Finished successfully! All pages permanently saved. ===');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  populateAllSecondaryTextbooks().catch(e => {
    console.error('Error during population:', e);
    process.exit(1);
  });
}
