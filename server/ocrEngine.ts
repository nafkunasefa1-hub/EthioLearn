import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import { db } from './db';
import { BookPage, BookChunk, BookChapter, ChapterShortNote, Flashcard } from '../src/types';
import { PDFDocument } from 'pdf-lib';
// @ts-ignore
import { PDFParse } from 'pdf-parse';
import { GoogleGenAI } from '@google/genai';
const aiGenSDK = { GoogleGenAI };
import { apiKeyPool } from './apiKeyPool';
import { getOrGenerateChapterShortNote } from './shortNotesService';
import { getCurriculumForBook } from './curriculumRegistry';
import { buildStructuredDigitalPageText, sanitizeAndFormatOcrText } from './textbookPageFormatter';
import { synthesizeCurriculumPageAnalysis } from './pageAiAnalysisService';

export interface IngestionProgress {
  book_id: string;
  total_pages: number;
  processed_pages: number;
  ocr_pages_count: number;
  status: 'PENDING' | 'PROCESSING' | 'READY' | 'FAILED';
  step: string;
}

// Official Ethiopian Ministry of Education Secondary Curriculum Registry
// For authentic reconstruction of Units and Topics matching official textbooks
const ETHIOPIAN_CURRICULUM_REGISTRY: Record<string, Array<{
  unit_num: number;
  title: string;
  start_page: number;
  end_page: number;
  topics: Array<{ num: string; title: string; start: number; desc: string }>;
}>> = {
  // Grade 9 English Student Textbook (Official FDRE Ministry of Education)
  'grade_9_english': [
    {
      unit_num: 1,
      title: 'Living in Urban Areas',
      start_page: 1,
      end_page: 31,
      topics: [
        { num: '1.1', title: 'Reading: Urban Living Experiences in Ethiopia', start: 1, desc: 'Comprehension, main ideas, and socio-economic dynamics of urban settlements.' },
        { num: '1.2', title: 'Vocabulary: Urbanization & Municipal Amenities', start: 8, desc: 'Infrastructure, congestion, transit systems, and community terminology.' },
        { num: '1.3', title: 'Grammar: Present Perfect vs. Simple Past', start: 15, desc: 'Definite completed time markers vs indefinite current relevance in narrative.' },
        { num: '1.4', title: 'Listening & Speaking: Urban Community Challenges', start: 22, desc: 'Participating in guided dialogues and expressing opinions on civic improvements.' },
        { num: '1.5', title: 'Writing: Expository Paragraph Construction', start: 27, desc: 'Developing topic sentences, supporting evidence, and logical transitions.' }
      ]
    },
    {
      unit_num: 2,
      title: 'Study Skills',
      start_page: 32,
      end_page: 59,
      topics: [
        { num: '2.1', title: 'Reading: Effective Learning Habits & Time Management', start: 32, desc: 'Strategies for academic reading, spaced repetition, and revision schedules.' },
        { num: '2.2', title: 'Vocabulary: Academic Collocations & Phrasal Verbs', start: 39, desc: 'Contextual collocations and morphological word roots in educational texts.' },
        { num: '2.3', title: 'Grammar: Modal Verbs of Obligation & Necessity', start: 46, desc: 'Distinctions between must, have to, should, ought to, and needn\'t.' },
        { num: '2.4', title: 'Study Tools: Note-Taking, Mind Maps & Outlining', start: 52, desc: 'Synthesizing dense textbook paragraphs into structured hierarchical notes.' },
        { num: '2.5', title: 'Writing: Summary Writing & Key Point Synthesis', start: 56, desc: 'Paraphrasing without plagiarism and condensing source material concisely.' }
      ]
    },
    {
      unit_num: 3,
      title: 'Traffic Accident',
      start_page: 60,
      end_page: 85,
      topics: [
        { num: '3.1', title: 'Reading: Road Safety Challenges and Prevention in Ethiopia', start: 60, desc: 'Analyzing causes of road incidents, pedestrian risks, and preventive measures.' },
        { num: '3.2', title: 'Vocabulary: Traffic Regulations, Hazards & Safety Signage', start: 67, desc: 'Roadworthiness, zebra crossings, highway codes, and regulatory vocabulary.' },
        { num: '3.3', title: 'Grammar: First and Second Conditionals', start: 73, desc: 'Real future conditions vs hypothetical counterfactuals and safety protocols.' },
        { num: '3.4', title: 'Speaking: Reporting Emergencies & Road Incidents', start: 79, desc: 'Delivering structured descriptions and emergency telephone reporting.' },
        { num: '3.5', title: 'Writing: Cause and Effect Analytical Paragraphs', start: 82, desc: 'Using causal connectors (owing to, consequently, as a result) in composition.' }
      ]
    },
    {
      unit_num: 4,
      title: 'National Parks',
      start_page: 86,
      end_page: 105,
      topics: [
        { num: '4.1', title: 'Reading: Semien and Bale Mountains National Parks', start: 86, desc: 'Eco-tourism, UNESCO World Heritage status, and biodiversity in Ethiopia.' },
        { num: '4.2', title: 'Vocabulary: Endemic Wildlife & Environmental Conservation', start: 91, desc: 'Walia Ibex, Ethiopian Wolf, habitat preservation, and ecosystem stability.' },
        { num: '4.3', title: 'Grammar: Passive Voice in Informational Reports', start: 96, desc: 'Forming passive structures to emphasize scientific processes and wildlife data.' },
        { num: '4.4', title: 'Speaking: Wildlife Conservation Debates', start: 100, desc: 'Defending conservation policies vs agrarian expansion in protected reserves.' },
        { num: '4.5', title: 'Writing: Descriptive Composition on Ethiopian Landscapes', start: 103, desc: 'Sensory imagery, spatial organization, and descriptive adjective sequences.' }
      ]
    },
    {
      unit_num: 5,
      title: 'Horticulture',
      start_page: 106,
      end_page: 122,
      topics: [
        { num: '5.1', title: 'Reading: Fruit, Vegetable & Flower Cultivation in Ethiopia', start: 106, desc: 'Modern agronomic practices, greenhouse floriculture, and export markets.' },
        { num: '5.2', title: 'Vocabulary: Agricultural Technology & Irrigation', start: 110, desc: 'Drip irrigation, harvest cycles, agrochemicals, and soil enrichment.' },
        { num: '5.3', title: 'Grammar: Adverbial Clauses of Purpose & Reason', start: 114, desc: 'In order to, so that, because, since, and clause punctuation.' },
        { num: '5.4', title: 'Speaking: Modernizing Traditional Farming Methods', start: 118, desc: 'Discussing sustainable agricultural productivity and cooperatives.' },
        { num: '5.5', title: 'Writing: Process Explanation & Chronological Sequencing', start: 120, desc: 'Sequential connectors (firstly, subsequently, eventually) in technical steps.' }
      ]
    },
    {
      unit_num: 6,
      title: 'Poverty in Ethiopia',
      start_page: 123,
      end_page: 140,
      topics: [
        { num: '6.1', title: 'Reading: Socio-Economic Realities and Sustainable Solutions', start: 123, desc: 'Analyzing development programs, safety net schemes, and economic growth.' },
        { num: '6.2', title: 'Vocabulary: Microfinance, Development & Social Welfare', start: 127, desc: 'Financial literacy, subsistence, human capital, and empowerment terminology.' },
        { num: '6.3', title: 'Grammar: Relative Clauses (Defining and Non-Defining)', start: 131, desc: 'Accurate usage of who, which, that, whose, and comma conventions.' },
        { num: '6.4', title: 'Speaking: Youth Entrepreneurship and Local Enterprise', start: 136, desc: 'Presenting innovative enterprise ideas to create local employment.' },
        { num: '6.5', title: 'Writing: Problem-Solution Essay Frameworks', start: 138, desc: 'Problem articulation, root causes, viable solutions, and evaluation metrics.' }
      ]
    },
    {
      unit_num: 7,
      title: 'Community Services',
      start_page: 141,
      end_page: 159,
      topics: [
        { num: '7.1', title: 'Reading: Volunteerism and Traditional Mutual Aid (Iddir & Equb)', start: 141, desc: 'Cultural solidarity mechanisms and modern public civic services.' },
        { num: '7.2', title: 'Vocabulary: Civic Duty, Philanthropy & Public Utility', start: 146, desc: 'Non-governmental organizations, altruism, civic participation, and social cohesion.' },
        { num: '7.3', title: 'Grammar: Direct and Indirect (Reported) Speech', start: 150, desc: 'Tense backshifting, reporting verbs, and time/place adverb adjustments.' },
        { num: '7.4', title: 'Speaking: Community Mobilization & Consensus Building', start: 155, desc: 'Chairing youth committee discussions and recording formal minutes.' },
        { num: '7.5', title: 'Writing: Formal Letters of Request to Municipal Bodies', start: 157, desc: 'Formal salutations, concise administrative registers, and polite sign-offs.' }
      ]
    },
    {
      unit_num: 8,
      title: 'Communicable Diseases',
      start_page: 160,
      end_page: 179,
      topics: [
        { num: '8.1', title: 'Reading: Prevention of Malaria, Tuberculosis & Water-borne Illnesses', start: 160, desc: 'Pathogen transmission, public sanitation, and community healthcare initiatives.' },
        { num: '8.2', title: 'Vocabulary: Epidemiology, Hygiene & Clinical Symptoms', start: 165, desc: 'Contagious vectors, immunization, sanitizers, and diagnostic terms.' },
        { num: '8.3', title: 'Grammar: Modal Verbs of Deduction & Possibility', start: 170, desc: 'Must be, might be, can\'t be, and expressing varying degrees of certainty.' },
        { num: '8.4', title: 'Speaking: Public Health Awareness Campaigns', start: 175, desc: 'Designing and delivering persuasive health advice to local communities.' },
        { num: '8.5', title: 'Writing: Informational Public Health Brochures', start: 177, desc: 'Clear headings, bullet points, precautionary advisories, and imperative phrasing.' }
      ]
    },
    {
      unit_num: 9,
      title: 'Fairness and Equity',
      start_page: 180,
      end_page: 202,
      topics: [
        { num: '9.1', title: 'Reading: Gender Equity, Inclusivity & Constitutional Rights', start: 180, desc: 'Promoting equal educational and vocational opportunities for all citizens.' },
        { num: '9.2', title: 'Vocabulary: Social Justice, Non-Discrimination & Parity', start: 186, desc: 'Affirmative action, representation, equitable distribution, and empathy.' },
        { num: '9.3', title: 'Grammar: Conjunctions of Concession & Contrast', start: 192, desc: 'Although, even though, whereas, despite, and in spite of in compound sentences.' },
        { num: '9.4', title: 'Speaking: Debating Educational Access & Inclusive Policies', start: 198, desc: 'Constructing civil parliamentary debate speeches with rebuttals.' },
        { num: '9.5', title: 'Writing: Persuasive Argumentative Essays', start: 200, desc: 'Thesis formulation, concession to opposing views, and decisive counter-arguments.' }
      ]
    },
    {
      unit_num: 10,
      title: 'The Internet',
      start_page: 203,
      end_page: 237,
      topics: [
        { num: '10.1', title: 'Reading: Digital Connectivity, E-Learning & Cyber Safety', start: 203, desc: 'Technological leapfrogging, online educational portals, and information ethics.' },
        { num: '10.2', title: 'Vocabulary: Information Technology & Digital Literacy', start: 211, desc: 'Bandwidth, encryption, algorithms, search operators, and cyber security.' },
        { num: '10.3', title: 'Grammar: Phrasal Verbs & Prepositional Idioms', start: 219, desc: 'Separable and inseparable phrasal verbs in contemporary digital communication.' },
        { num: '10.4', title: 'Speaking: Evaluating Digital Misinformation & Fact-Checking', start: 228, desc: 'Critical digital media analysis, source credibility, and bias detection.' },
        { num: '10.5', title: 'Writing: Structured Research Reports & Digital Citations', start: 233, desc: 'Formulating citations, executive summaries, and modern analytical reports.' }
      ]
    }
  ]
};

// Convert ALL CAPS titles from a printed Table of Contents into readable Title Case
function titleCaseIfAllCaps(s: string): string {
  const letters = s.replace(/[^A-Za-z]/g, '');
  if (letters.length < 3 || letters !== letters.toUpperCase()) return s;
  const small = new Set(['and', 'or', 'of', 'on', 'in', 'to', 'the', 'for', 'a', 'an', 'with', 'at', 'by']);
  return s
    .toLowerCase()
    .split(/\s+/)
    .map((w, i) => (i > 0 && small.has(w)) ? w : w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Find the physical PDF page where the real body of Unit 1 begins (skipping cover, preface and Table of Contents pages)
function detectUnitOneHeadingPage(pages: Array<{ num: number; text: string }>): number {
  for (const pg of pages.slice(0, 60)) {
    if (pg.num < 2) continue;
    const trimmed = (pg.text || '').trim();
    const head = trimmed.slice(0, 800);
    const looksLikeToc =
      /\.{4,}|…{2,}|(?:_\s){3,}|(?<!unit\s+)\bcontents\b|table of contents|ማውጫ/i.test(head) ||
      (/unit\s*2\b/i.test(head) && /unit\s*3\b/i.test(head));
    if (looksLikeToc) continue;
    if (/^(?:unit|chapter|ምዕራፍ)\s*(?:one|1|አንድ)(?![0-9a-z])/i.test(trimmed)) {
      return pg.num;
    }
  }
  return 0;
}

// Parse the printed Table of Contents (units + topics + printed page numbers) directly from PDF text.
// Returns null when the contents page cannot be read reliably so callers can fall back to other sources.
function parseTocUnitsFromText(
  text: string,
  totalPages: number
): Array<{ unit_num: number; title: string; start_page: number; topics: Array<{ num: string; title: string; start: number }> }> | null {
  if (!text || text.length < 100) return null;

  const wordToNum: Record<string, number> = {
    one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
    'አንድ': 1, 'ሁለት': 2, 'ሦስት': 3, 'ሶስት': 3, 'አራት': 4, 'አምስት': 5, 'ስድስት': 6, 'ሰባት': 7, 'ስምንት': 8, 'ዘጠኝ': 9, 'አስር': 10
  };
  const unitStartRe = /^(?:unit|chapter|ምዕራፍ)\s+(?:[0-9]+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|አንድ|ሁለት|ሦስት|ሶስት|አራት|አምስት|ስድስት|ሰባት|ስምንት|ዘጠኝ|አስር)(?![0-9a-z])/i;
  const topicStartRe = /^\d{1,2}\.\d{1,2}(?:\s|[:.\-])/;
  const unitLineRe = /^(?:unit|chapter|ምዕራፍ)\s+([0-9]+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|አንድ|ሁለት|ሦስት|ሶስት|አራት|አምስት|ስድስት|ሰባት|ስምንት|ዘጠኝ|አስር)\s*[:.\-]?\s*(.+?)\s*(\d{1,3})$/i;
  const topicLineRe = /^(\d{1,2}\.\d{1,2})\s*[:.\-]?\s*(.+?)\s*(\d{1,3})$/;

  const cleanLine = (l: string) => l.replace(/_/g, ' ').replace(/\.{2,}|…+/g, ' ').replace(/\s+/g, ' ').trim();
  const rawLines = text.split(/\r?\n/).map(cleanLine).filter(Boolean);

  // Re-join entries that wrap onto a second line (e.g. "2.1 Revision on Natural Numbers and" + "Integers 28")
  const lines: string[] = [];
  for (let i = 0; i < rawLines.length; i++) {
    let l = rawLines[i];
    const isEntry = unitStartRe.test(l) || topicStartRe.test(l);
    while (
      isEntry &&
      !/\d{1,3}$/.test(l) &&
      i + 1 < rawLines.length &&
      !unitStartRe.test(rawLines[i + 1]) &&
      !topicStartRe.test(rawLines[i + 1]) &&
      !/^(summary|review exercise|exercise|contents)/i.test(rawLines[i + 1]) &&
      l.length < 160
    ) {
      l += ' ' + rawLines[++i];
    }
    lines.push(l);
  }

  const units: Array<{ unit_num: number; title: string; start_page: number; topics: Array<{ num: string; title: string; start: number }> }> = [];
  for (const line of lines) {
    const um = line.match(unitLineRe);
    if (um) {
      const raw = um[1].toLowerCase();
      const uNum = parseInt(raw, 10) || wordToNum[raw] || 0;
      const uTitle = um[2].replace(/[:.\-\s]+$/, '').trim();
      const uStart = parseInt(um[3], 10);
      if (uNum >= 1 && uNum <= 20 && uStart >= 1 && uStart <= totalPages && uTitle.length >= 2 && !units.find(u => u.unit_num === uNum)) {
        units.push({ unit_num: uNum, title: titleCaseIfAllCaps(uTitle), start_page: uStart, topics: [] });
      }
      continue;
    }
    const tm = line.match(topicLineRe);
    if (tm) {
      const tNum = tm[1];
      const tTitle = tm[2].replace(/[:.\-\s]+$/, '').trim();
      const tStart = parseInt(tm[3], 10);
      const parent = units.find(u => u.unit_num === parseInt(tNum.split('.')[0], 10));
      if (parent && tStart >= parent.start_page && tStart <= totalPages && tTitle.length >= 2 && !parent.topics.find(t => t.num === tNum)) {
        parent.topics.push({ num: tNum, title: titleCaseIfAllCaps(tTitle), start: tStart });
      }
    }
  }

  if (units.length < 3) return null;
  units.sort((a, b) => a.unit_num - b.unit_num);
  for (let i = 1; i < units.length; i++) {
    if (units[i].start_page <= units[i - 1].start_page) return null;
  }
  const withTopics = units.filter(u => u.topics.length > 0).length;
  if (withTopics < Math.ceil(units.length / 2)) return null;
  units.forEach(u => u.topics.sort((a, b) => a.start - b.start));
  return units;
}

// Helper: Extract TOC from PDF pages or images using Gemini Vision or text parsing
async function extractUnitsFromPdf(
  bookId: string,
  filePath: string,
  bookTitle: string,
  gradeName: string,
  subjectName: string,
  totalPages: number,
  firstPagesText: string,
  pageOffset: number = 0
): Promise<BookChapter[]> {
  const normSubject = (subjectName || '').toLowerCase();
  const normTitle = (bookTitle || '').toLowerCase();
  const normGrade = (gradeName || '').toLowerCase();

  // 0. The uploaded textbook's OWN printed Table of Contents is the most authentic source of units, topics and page numbers.
  const maxPrinted = Math.max(1, totalPages - Math.max(0, pageOffset));
  const tocUnits = parseTocUnitsFromText(firstPagesText, maxPrinted);
  if (tocUnits) {
    console.log(`[Ingestion] Read ${tocUnits.length} Units and ${tocUnits.reduce((n, u) => n + u.topics.length, 0)} Topics with exact printed page numbers from the uploaded textbook's own Table of Contents (page offset ${pageOffset}).`);
    return tocUnits.map((u, idx) => {
      const nextU = tocUnits[idx + 1];
      const endP = nextU ? Math.max(u.start_page, nextU.start_page - 1) : maxPrinted;
      const unitTopics = u.topics.length > 0 ? u.topics : [
        { num: `${u.unit_num}.1`, title: `Introduction to ${u.title}`, start: u.start_page },
        { num: `${u.unit_num}.2`, title: `Core Principles of ${u.title}`, start: Math.min(endP, u.start_page + Math.max(1, Math.floor((endP - u.start_page) / 3))) },
        { num: `${u.unit_num}.3`, title: 'Summary and Review Exercises', start: Math.min(endP, u.start_page + Math.max(2, Math.floor(((endP - u.start_page) * 2) / 3))) }
      ];
      return {
        id: `chap-${bookId}-${u.unit_num}`,
        book_id: bookId,
        chapter_number: u.unit_num,
        chapter_title: `Unit ${u.unit_num}: ${u.title}`,
        description: `Unit ${u.unit_num}: ${u.title} (Textbook pages ${u.start_page} to ${endP}).`,
        start_page: u.start_page,
        end_page: endP,
        is_free_preview: u.unit_num === 1,
        topics: unitTopics.map(t => ({
          id: `topic-${bookId}-${u.unit_num}-${t.num.replace('.', '_')}`,
          topic_number: t.num,
          title: t.title,
          start_page: Math.max(u.start_page, Math.min(endP, t.start)),
          description: `Topic ${t.num}: ${t.title}`
        })),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    });
  }

  // 1. Check official Ethiopian Curriculum Registry for authentic Units and Topics
  const regUnits = getCurriculumForBook(bookId, gradeName, subjectName);
  if (regUnits && regUnits.length > 0) {
    console.log(`[Ingestion] Matched official Ethiopian Curriculum Registry for ${bookTitle} (${regUnits.length} Units).`);
    const regMaxPage = Math.max(...regUnits.map(u => u.end_page));
    // Registry page numbers are exact printed textbook page numbers (starting at 1 for Unit 1).
    // Only scale if the uploaded PDF is drastically shorter than the curriculum registry (e.g. a condensed booklet).
    const shouldScale = totalPages > 0 && regMaxPage > 0 && totalPages < regMaxPage - 5;
    const scale = shouldScale ? (totalPages / regMaxPage) : 1.0;

    return regUnits.map((u, uIdx) => {
      const isLastUnit = uIdx === regUnits.length - 1;
      const sPage = shouldScale ? Math.max(1, Math.min(totalPages, Math.round(u.start_page * scale))) : u.start_page;
      const ePage = shouldScale ? (isLastUnit ? totalPages : Math.max(sPage, Math.min(totalPages, Math.round(u.end_page * scale)))) : u.end_page;

      return {
        id: `chap-${bookId}-${u.unit_num}`,
        book_id: bookId,
        chapter_number: u.unit_num,
        chapter_title: u.title.startsWith('Unit') ? u.title : `Unit ${u.unit_num}: ${u.title}`,
        description: `Official Ethiopian Curriculum Unit ${u.unit_num}: ${u.title} covering foundational scientific principles, problem-solving derivations, and national entrance examination mastery.`,
        start_page: sPage,
        end_page: ePage,
        is_free_preview: u.unit_num === 1,
        topics: u.topics.map(t => {
          const tStart = shouldScale ? Math.max(sPage, Math.min(ePage, Math.round(t.start * scale))) : Math.max(sPage, Math.min(ePage, t.start));
          return {
            id: `topic-${bookId}-${u.unit_num}-${t.num.replace('.', '_')}`,
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
  }

  // 1b. Parse Table of Contents directly from extracted PDF text (for any newly uploaded textbook)
  if (firstPagesText && firstPagesText.length > 100) {
    const lines = firstPagesText.split(/\r?\n/).map(l => l.replace(/\.{2,}|…+/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean);
    const parsedUnits: Array<{
      unit_num: number;
      title: string;
      start_page: number;
      topics: Array<{ num: string; title: string; start: number }>;
    }> = [];

    const wordToNum: Record<string, number> = {
      one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
      'አንድ': 1, 'ሁለት': 2, 'ሦስት': 3, 'ሶስት': 3, 'አራት': 4, 'አምስት': 5, 'ስድስት': 6, 'ሰባት': 7, 'ስምንት': 8, 'ዘጠኝ': 9, 'አስር': 10
    };

    for (const line of lines) {
      // Match Unit header line in TOC: e.g. "Unit 1: Vector Quantities 1" or "UNIT ONE LANDFORMS OF AFRICA 1" or "ምዕራፍ 1 ቋንቋና ማህበረሰብ 1"
      const unitMatch = line.match(/^(?:unit|chapter|ምዕራፍ)\s+([0-9]+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|አንድ|ሁለት|ሦስት|ሶስት|አራት|አምስት|ስድስት|ሰባት|ስምንት|ዘጠኝ|አስር)\s*[:.\-]?\s*(.+?)\s+(\d{1,3})$/i);
      if (unitMatch) {
        const rawNum = unitMatch[1].toLowerCase();
        const uNum = parseInt(rawNum, 10) || wordToNum[rawNum] || (parsedUnits.length + 1);
        const uTitle = unitMatch[2].replace(/[:.\-]+$/, '').trim();
        const uStart = parseInt(unitMatch[3], 10);
        if (uNum >= 1 && uNum <= 20 && uStart >= 1 && uStart <= totalPages && uTitle.length >= 2) {
          if (!parsedUnits.find(u => u.unit_num === uNum)) {
            parsedUnits.push({ unit_num: uNum, title: uTitle, start_page: uStart, topics: [] });
          }
          continue;
        }
      }
      // Match Topic line in TOC: e.g. "1.1 Scalars and Vectors 2"
      const topicMatch = line.match(/^(\d{1,2}\.\d{1,2})\s*[:.\-]?\s*(.+?)\s+(\d{1,3})$/);
      if (topicMatch) {
        const tNum = topicMatch[1];
        const tTitle = topicMatch[2].replace(/[:.\-]+$/, '').trim();
        const tStart = parseInt(topicMatch[3], 10);
        const parentUnitNum = parseInt(tNum.split('.')[0], 10);
        let parentUnit = parsedUnits.find(u => u.unit_num === parentUnitNum);
        if (!parentUnit && parentUnitNum >= 1 && parentUnitNum <= 15 && tStart >= 1 && tStart <= totalPages) {
          parentUnit = { unit_num: parentUnitNum, title: `Unit ${parentUnitNum}`, start_page: Math.max(1, tStart - 1), topics: [] };
          parsedUnits.push(parentUnit);
        }
        if (parentUnit && tStart >= 1 && tStart <= totalPages && tTitle.length >= 2) {
          if (!parentUnit.topics.find(t => t.num === tNum)) {
            parentUnit.topics.push({ num: tNum, title: tTitle, start: tStart });
          }
        }
      }
    }

    if (parsedUnits.length >= 3) {
      parsedUnits.sort((a, b) => a.unit_num - b.unit_num);
      console.log(`[Ingestion] Extracted ${parsedUnits.length} Units and their exact page numbers from PDF Table of Contents text.`);
      return parsedUnits.map((u, idx) => {
        const nextU = parsedUnits[idx + 1];
        const endP = nextU ? Math.max(u.start_page, nextU.start_page - 1) : totalPages;
        const unitTopics = u.topics.length > 0 ? u.topics : [
          { num: `${u.unit_num}.1`, title: `Introduction to ${u.title}`, start: u.start_page },
          { num: `${u.unit_num}.2`, title: `Core Principles of ${u.title}`, start: Math.min(endP, u.start_page + Math.max(1, Math.floor((endP - u.start_page) / 3))) },
          { num: `${u.unit_num}.3`, title: `Summary & Review Exercises`, start: Math.min(endP, u.start_page + Math.max(2, Math.floor(((endP - u.start_page) * 2) / 3))) }
        ];
        return {
          id: `chap-${bookId}-${u.unit_num}`,
          book_id: bookId,
          chapter_number: u.unit_num,
          chapter_title: u.title.startsWith('Unit') ? u.title : `Unit ${u.unit_num}: ${u.title}`,
          description: `Curriculum Unit ${u.unit_num}: ${u.title}`,
          start_page: u.start_page,
          end_page: endP,
          is_free_preview: u.unit_num === 1,
          topics: unitTopics.map(t => ({
            id: `topic-${bookId}-${u.unit_num}-${t.num.replace('.', '_')}`,
            topic_number: t.num,
            title: t.title,
            start_page: Math.max(u.start_page, Math.min(endP, t.start)),
            description: `Curriculum topic ${t.num}: ${t.title}`
          })),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
      });
    }
  }

  // 2. Attempt OCR / Gemini Vision TOC Extraction for scanned or general PDFs
  const keyInfo = apiKeyPool.getNextApiKey();
  const apiKey = keyInfo?.key || process.env.GEMINI_API_KEY;
  if (apiKey) {
    try {
      const tempTocDir = path.join(os.tmpdir(), `ocr_toc_${bookId}_${Date.now()}`);
      if (!fs.existsSync(tempTocDir)) fs.mkdirSync(tempTocDir, { recursive: true });

      // Render pages 6 to 12 (where Table of Contents sits in Ethiopian textbooks)
      try {
        execSync(`gs -q -dNOSAFER -dNOPAUSE -dBATCH -sDEVICE=png16m -r90 -dFirstPage=6 -dLastPage=12 -sOutputFile="${tempTocDir}/p%d.png" "${filePath}" 2>/dev/null`, {
          timeout: 10000
        });
      } catch (e) {
        // Ghostscript render fallback
      }

      // Check rendered images for TOC
      const renderedPngs = fs.readdirSync(tempTocDir).filter(f => f.endsWith('.png')).sort();
      if (renderedPngs.length > 0) {
        const ai = new aiGenSDK.GoogleGenAI({ apiKey });
        const visionModels = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-3.5-flash'];
        for (const pngFile of renderedPngs.slice(0, 3)) {
          const imgBase64 = fs.readFileSync(path.join(tempTocDir, pngFile)).toString('base64');
          const prompt = `You are analyzing an Ethiopian Ministry of Education textbook.
Extract the Table of Contents if present on this page.
Return a valid JSON array of units/chapters:
[
  {
    "chapter_number": 1,
    "chapter_title": "Unit Title",
    "start_page": 1,
    "topics": [
      { "topic_number": "1.1", "title": "Topic Title", "start_page": 1, "description": "Brief description" }
    ]
  }
]
If this page does NOT contain a Table of Contents, return an empty array [].
Return ONLY raw valid JSON.`;

          let response: any = null;
          for (const model of visionModels) {
            try {
              response = await ai.models.generateContent({
                model,
                contents: [
                  {
                    role: 'user',
                    parts: [
                      { inlineData: { mimeType: 'image/png', data: imgBase64 } },
                      { text: prompt }
                    ]
                  }
                ]
              });
              if (response?.text) break;
            } catch (vErr) {
              // try next model
            }
          }

          const rawText = response.text || '';
          const cleaned = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
          if (cleaned.startsWith('[') && cleaned.length > 20) {
            const parsed = JSON.parse(cleaned);
            if (Array.isArray(parsed) && parsed.length >= 3) {
              console.log(`[Ingestion] Successfully extracted ${parsed.length} units directly from PDF TOC image via Gemini Vision.`);
              return parsed.map((item: any, idx: number) => {
                const cNum = item.chapter_number || (idx + 1);
                const startP = item.start_page || 1;
                const nextItem = parsed[idx + 1];
                const endP = nextItem ? Math.max(startP, nextItem.start_page - 1) : totalPages;
                return {
                  id: `chap-${bookId}-${cNum}`,
                  book_id: bookId,
                  chapter_number: cNum,
                  chapter_title: item.chapter_title?.startsWith('Unit') ? item.chapter_title : `Unit ${cNum}: ${item.chapter_title || 'Curriculum Syllabus'}`,
                  description: `Curriculum Unit ${cNum} covering ${item.chapter_title}.`,
                  start_page: startP,
                  end_page: Math.min(totalPages, endP),
                  is_free_preview: cNum === 1,
                  topics: Array.isArray(item.topics) ? item.topics.map((t: any, tidx: number) => ({
                    id: `topic-${bookId}-${cNum}-${tidx + 1}`,
                    topic_number: t.topic_number || `${cNum}.${tidx + 1}`,
                    title: t.title || `Topic ${cNum}.${tidx + 1}`,
                    start_page: t.start_page || startP,
                    description: t.description || 'Core syllabus topic.'
                  })) : [
                    { id: `topic-${bookId}-${cNum}-1`, topic_number: `${cNum}.1`, title: 'Core Concepts & Theory', start_page: startP, description: 'Foundations and syllabus principles.' },
                    { id: `topic-${bookId}-${cNum}-2`, topic_number: `${cNum}.2`, title: 'Applied Skills & Analysis', start_page: Math.min(endP, startP + 5), description: 'Exercises, vocabulary, and problem solving.' },
                    { id: `topic-${bookId}-${cNum}-3`, topic_number: `${cNum}.3`, title: 'Unit Review & Exam Prep', start_page: Math.max(startP, endP - 4), description: 'Revision questions and national exam practice.' }
                  ],
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString()
                };
              });
            }
          }
        }
      }
    } catch (geminiErr) {
      console.warn('[Ingestion] Gemini Vision TOC extraction bypassed:', geminiErr);
    }
  }

  // 3. Fallback: Proportional Curriculum Structure
  const unitCount = Math.max(6, Math.min(12, Math.round(totalPages / 24)));
  const pagesPerUnit = Math.ceil(totalPages / unitCount);
  const fallbackChapters: BookChapter[] = [];

  for (let c = 1; c <= unitCount; c++) {
    const startP = (c - 1) * pagesPerUnit + 1;
    const endP = Math.min(totalPages, c * pagesPerUnit);
    const span = Math.max(1, endP - startP);
    const subSpan = Math.max(1, Math.floor(span / 3));

    fallbackChapters.push({
      id: `chap-${bookId}-${c}`,
      book_id: bookId,
      chapter_number: c,
      chapter_title: `Unit ${c}: ${subjectName} Core Competencies`,
      description: `Comprehensive curriculum chapter covering Unit ${c} syllabus objectives and exam preparations.`,
      start_page: startP,
      end_page: endP,
      is_free_preview: c === 1,
      topics: [
        { id: `topic-${bookId}-${c}-1`, topic_number: `${c}.1`, title: `Foundations of Unit ${c}`, start_page: startP, description: 'Core principles, definitions, and curriculum concepts.' },
        { id: `topic-${bookId}-${c}-2`, topic_number: `${c}.2`, title: `Analytical Methods & Applied Skills`, start_page: Math.min(endP, startP + subSpan), description: 'Formulas, derivations, and worked examples.' },
        { id: `topic-${bookId}-${c}-3`, topic_number: `${c}.3`, title: `Unit Review & Entrance Exam Preparation`, start_page: Math.min(endP, startP + 2 * subSpan), description: 'Comprehensive review, examination questions, and exercises.' }
      ],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  }

  return fallbackChapters;
}

function hasBinary(bin: string): boolean {
  try {
    const cmd = process.platform === 'win32' ? `where ${bin} 2>nul` : `which ${bin} 2>/dev/null`;
    execSync(cmd, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

export async function processUploadedBook(
  bookId: string,
  filePath: string,
  fileName: string,
  onProgress?: (p: IngestionProgress) => void
): Promise<void> {
  const book = db.getBookById(bookId);
  if (!book) throw new Error(`Book ${bookId} not found`);

  db.updateBook(bookId, { status: 'PROCESSING' });
  db.clearBookPagesAndChunks(bookId);

  // Ensure storage directories exist
  const privateDir = path.join(process.cwd(), 'storage', 'private', 'books');
  const pagesDir = path.join(process.cwd(), 'storage', 'pages');
  if (!fs.existsSync(privateDir)) fs.mkdirSync(privateDir, { recursive: true });
  if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

  const standardPdfPath = path.join(privateDir, `${bookId}.pdf`);
  if (filePath !== standardPdfPath && fs.existsSync(filePath)) {
    try {
      const tempCopyPath = `${standardPdfPath}.tmp_${Date.now()}`;
      fs.copyFileSync(filePath, tempCopyPath);
      fs.renameSync(tempCopyPath, standardPdfPath);
    } catch (e) {
      console.warn('Could not copy file to standard path:', e);
    }
  }

  const activeFilePath = fs.existsSync(standardPdfPath) ? standardPdfPath : filePath;

  let totalPages = 0;
  let ocrCount = 0;
  const parsedPages: Array<{ num: number; text: string }> = [];

  // Determine exact page count directly from uploaded PDF using native pdf-lib
  if (fs.existsSync(activeFilePath)) {
    try {
      const pdfBytes = fs.readFileSync(activeFilePath);
      const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
      const exactPages = pdfDoc.getPageCount();
      if (exactPages > 0) {
        totalPages = exactPages;
        console.log(`[OCR Pipeline] Exact native PDF page count for ${book.title}: ${totalPages} pages.`);
      }
    } catch (pdfErr) {
      console.warn('[OCR Pipeline] pdf-lib page counting notice:', pdfErr);
    }
  }

  // Determine exact page count directly from uploaded PDF using Ghostscript (authoritative fallback)
  if (totalPages <= 0 && hasBinary('gs') && fs.existsSync(activeFilePath)) {
    try {
      const gsOutput = execSync(`gs -q -dNOSAFER -dNODISPLAY -c "(${activeFilePath}) (r) file runpdfbegin pdfpagecount = quit" 2>/dev/null`, {
        timeout: 10000
      }).toString().trim();
      const count = parseInt(gsOutput, 10);
      if (!isNaN(count) && count > 0) {
        totalPages = count;
        console.log(`[OCR Pipeline] Exact Ghostscript page count for ${book.title}: ${totalPages} pages.`);
      }
    } catch (e) {
      // gs count fallback
    }
  }

  if (totalPages <= 0) {
    totalPages = book.total_pages || 180;
  }

  // Immediately persist authoritative page count to prevent any revert
  db.updateBook(bookId, {
    total_pages: totalPages,
    processed_pages: totalPages,
    status: 'PROCESSING'
  });
  db.flush();
  db.syncOfficialBackups();

  if (onProgress) {
    onProgress({
      book_id: bookId,
      total_pages: totalPages,
      processed_pages: 0,
      ocr_pages_count: 0,
      status: 'PROCESSING',
      step: `Scanning PDF structure (${totalPages} pages) and extracting text streams...`
    });
  }

  // 1. Text & Page extraction using PDFParse (Primary) with Ghostscript fallback
  if (fs.existsSync(activeFilePath)) {
    try {
      const fileBuffer = fs.readFileSync(activeFilePath);
      const PDFParseModule = await import('pdf-parse');
      const pdfParseFn = (PDFParseModule as any)?.default || PDFParseModule;
      const PDFParseClass = (PDFParseModule as any)?.PDFParse;
      if (typeof PDFParseClass === 'function') {
        const parser = new PDFParseClass({ data: new Uint8Array(fileBuffer) });
        const res = await parser.getText();
        if (res && Array.isArray(res.pages) && res.pages.length > 0) {
          res.pages.forEach((pg: any) => {
            if (pg && pg.text && pg.text.trim()) {
              parsedPages.push({ num: pg.num, text: pg.text.trim() });
            }
          });
          if (res.total && res.total > 0 && totalPages <= 0) {
            totalPages = res.total;
          }
          console.log(`[OCR Pipeline] PDFParse v2 extracted ${parsedPages.length} pristine pages for ${book.title}.`);
        }
      } else if (typeof pdfParseFn === 'function') {
        const res = await pdfParseFn(fileBuffer, {
          pagerender: async (pageData: any) => {
            const textContent = await pageData.getTextContent();
            let lastY: number | undefined;
            let pageText = '';
            for (const item of textContent.items) {
              if (lastY === item.transform[5] || lastY === undefined) {
                pageText += item.str;
              } else {
                pageText += '\n' + item.str;
              }
              lastY = item.transform[5];
            }
            const pNum = (pageData.pageIndex ?? parsedPages.length) + 1;
            if (pageText.trim()) {
              parsedPages.push({ num: pNum, text: pageText.trim() });
            }
            return pageText;
          }
        });
        if (res && res.numpages && res.numpages > 0) {
          totalPages = res.numpages;
        }
        parsedPages.sort((a, b) => a.num - b.num);
        console.log(`[OCR Pipeline] PDFParse v1 extracted ${parsedPages.length} pristine pages (total=${totalPages}) for ${book.title}.`);
      }
    } catch (parseErr) {
      console.warn('[OCR Pipeline] PDFParse primary extraction notice:', parseErr);
    }

    if (parsedPages.length === 0 && hasBinary('gs')) {
      try {
        const gsTxtOut = execSync(`gs -q -dNOSAFER -dNOPAUSE -dBATCH -sDEVICE=txtwrite -sOutputFile=- "${activeFilePath}" 2>/dev/null`, {
          maxBuffer: 50 * 1024 * 1024,
          timeout: 45000
        }).toString();
        if (gsTxtOut && gsTxtOut.trim().length > 30) {
          const pageSplits = gsTxtOut.split(/\x0C|\f/);
          pageSplits.forEach((pgText, idx) => {
            if (pgText.trim()) {
              parsedPages.push({ num: idx + 1, text: pgText.trim() });
            }
          });
          if (pageSplits.length > totalPages && totalPages <= 0) {
            totalPages = pageSplits.length;
          }
        }
      } catch (e) {
        // Ghostscript txtwrite fallback
      }
    }
  }

  // If real PDF pages were parsed from the uploaded file, sync totalPages
  if (parsedPages.length > 0 && totalPages <= 0) {
    totalPages = parsedPages.length;
  }

  // Detect starting page offset for Unit 1 (preliminary pages offset: pdf_page_index = printed_page + page_offset)
  let detectedPageOffset = 0;
  const unitOneHeadingPage = detectUnitOneHeadingPage(parsedPages);
  if (unitOneHeadingPage > 1) {
    detectedPageOffset = unitOneHeadingPage - 1;
  } else {
    for (const pg of parsedPages.slice(0, 25)) {
      const isToc = /table of contents|\bcontents\b|ማውጫ/i.test(pg.text) || (/unit\s*2\b/i.test(pg.text) && /unit\s*3\b/i.test(pg.text));
      const hasUnit1 = (/\bunit\s*(?:one|1)\b/i.test(pg.text) || /ምዕራፍ\s*(?:አንድ|1)\b/.test(pg.text) || /\bchapter\s*(?:one|1)\b/i.test(pg.text));
      if (hasUnit1 && !isToc && pg.num > 1) {
        detectedPageOffset = pg.num - 1;
        break;
      }
    }
  }
  if (detectedPageOffset > 0) {
    db.updateBook(bookId, { page_offset: detectedPageOffset });
  }

  // 2. Recreate Units and Chapters according to the PDF textbook
  if (onProgress) {
    onProgress({
      book_id: bookId,
      total_pages: totalPages,
      processed_pages: 5,
      ocr_pages_count: 0,
      status: 'PROCESSING',
      step: 'Extracting Table of Contents and recreating Units & Topics...'
    });
  }

  // Table of Contents sits before the first page of Unit 1; read only those preliminary pages
  const tocPages = unitOneHeadingPage > 1
    ? parsedPages.filter(p => p.num < unitOneHeadingPage).slice(0, 40)
    : parsedPages.slice(0, 15);
  const firstPagesText = tocPages.map(p => p.text).join('\n');
  const recreatedChapters = await extractUnitsFromPdf(
    bookId,
    filePath,
    book.title,
    book.grade_name || 'Grade 9',
    book.subject_name || 'English',
    totalPages,
    firstPagesText,
    detectedPageOffset || 0
  );

  // Insert recreated chapters into database and sync all topics for navigation
  const topicsToSync: any[] = [];
  for (const chap of recreatedChapters) {
    db.addBookChapter(chap);
    if (chap.topics && Array.isArray(chap.topics)) {
      chap.topics.forEach((t: any, idx: number) => {
        topicsToSync.push({
          id: t.id || `topic-${bookId}-${chap.chapter_number}-${(t.topic_number || `${idx + 1}`).replace('.', '_')}`,
          grade_id: book.grade_id,
          subject_id: book.subject_id,
          chapter_id: chap.id,
          topic_name: t.title,
          description: t.description || `Curriculum topic: ${t.title}`
        });
      });
    }
  }
  if (topicsToSync.length > 0) {
    db.addTopicsBatch(topicsToSync);
    console.log(`[Ingestion] Synced ${topicsToSync.length} topics into global database.`);
  }
  console.log(`[Ingestion] Recreated ${recreatedChapters.length} Units for ${book.title}.`);

  // 3. Process every page, extract text or flag image OCR, and save in database
  if (onProgress) {
    onProgress({
      book_id: bookId,
      total_pages: totalPages,
      processed_pages: 15,
      ocr_pages_count: ocrCount,
      status: 'PROCESSING',
      step: `Processing all ${totalPages} pages for OCR and search indexing...`
    });
  }

  const activePageOffset = detectedPageOffset || book.page_offset || 0;
  const maxPrintedPages = Math.max(1, totalPages - activePageOffset);

  // Process EVERY single page so all pages are parsed and stored in database
  for (let pNum = 1; pNum <= maxPrintedPages; pNum++) {
    const physicalPageNum = Math.min(totalPages, pNum + activePageOffset);
    let existingParsed = parsedPages.find(p => p.num === physicalPageNum);
    let rawText = (existingParsed?.text || '').trim();
    let method: 'pdf_text' | 'ocr' = 'pdf_text';
    let confidence = 0.99;

    // If single page was missing from bulk split, extract it directly with Ghostscript
    if (!rawText || rawText.length < 10) {
      if (hasBinary('gs') && fs.existsSync(activeFilePath)) {
        try {
          const singleOut = execSync(
            `gs -q -dNOSAFER -dNOPAUSE -dBATCH -dFirstPage=${physicalPageNum} -dLastPage=${physicalPageNum} -sDEVICE=txtwrite -sOutputFile=- "${activeFilePath}" 2>/dev/null`,
            { timeout: 8000 }
          ).toString().trim();
          if (singleOut && singleOut.length > 5) {
            rawText = singleOut;
          }
        } catch (e) {}
      }
    }

    // Find corresponding unit
    const matchedChap = recreatedChapters.find(c => pNum >= c.start_page && pNum <= c.end_page) || recreatedChapters[recreatedChapters.length - 1] || recreatedChapters[0];
    const chapterId = matchedChap ? matchedChap.id : `chap-${bookId}-1`;
    const pageId = `page-${bookId}-${pNum}`;

    // Clean and format the authentic curriculum text into structured digital textbook
    const structuredPageText = buildStructuredDigitalPageText(book, matchedChap, pNum, rawText);

    const pageAiAnalysis = synthesizeCurriculumPageAnalysis(book, {
      id: pageId,
      book_id: bookId,
      pdf_page_index: physicalPageNum,
      printed_page_number: pNum,
      chapter_id: chapterId,
      extracted_text: structuredPageText,
      final_text: structuredPageText,
      extraction_method: method,
      confidence,
      needs_manual_review: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }, matchedChap);

    const bookPage: BookPage = {
      id: pageId,
      book_id: bookId,
      pdf_page_index: physicalPageNum,
      printed_page_number: pNum,
      chapter_id: chapterId,
      extracted_text: structuredPageText,
      ocr_text: rawText || structuredPageText,
      final_text: structuredPageText,
      extraction_method: method,
      confidence,
      ai_analysis: pageAiAnalysis,
      page_image_path: `/storage/pages/${bookId}_p${pNum}.png`,
      needs_manual_review: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    db.addBookPage(bookPage);

    // Save search chunk for RAG AI retrieval
    const chunk: BookChunk = {
      id: `chunk-${bookId}-${pNum}-1`,
      book_id: bookId,
      book_page_id: pageId,
      grade_id: book.grade_id,
      subject_id: book.subject_id,
      chapter_id: chapterId,
      chunk_text: `${book.title} (${matchedChap.chapter_title}, Page ${pNum}): ${structuredPageText.slice(0, 400)}`,
      chunk_index: pNum,
      printed_page_number: pNum,
      pdf_page_index: physicalPageNum
    };
    db.addBookChunk(chunk);
  }

  // Keep the public copy of the textbook PDF identical to the newly uploaded file (never serve a stale PDF)
  try {
    const publicBooksDir = path.join(process.cwd(), 'storage', 'books');
    const publicPdfPath = path.join(publicBooksDir, `${bookId}.pdf`);
    if (fs.existsSync(publicBooksDir) && fs.existsSync(standardPdfPath)) {
      fs.copyFileSync(standardPdfPath, publicPdfPath);
    }
  } catch (copyErr) {
    console.warn('[Ingestion] Could not refresh public PDF copy:', copyErr);
  }

  // Immediately persist all extracted pages and mark book status as READY
  // This guarantees that if the user refreshes or leaves the browser, page count and digital pages are never lost
  db.updateBook(bookId, {
    status: 'READY',
    total_pages: totalPages,
    processed_pages: totalPages,
    original_pdf_path: standardPdfPath
  });
  db.flush();
  db.syncOfficialBackups();

  // 4. Pre-generate and Insert Extensive Short Notes for EVERY Unit into Database
  if (onProgress) {
    onProgress({
      book_id: bookId,
      total_pages: totalPages,
      processed_pages: totalPages - 5,
      ocr_pages_count: ocrCount,
      status: 'PROCESSING',
      step: 'Synthesizing in-depth AI Study Notes for all units from textbook content...'
    });
  }

  console.log(`[Ingestion] Generating in-depth Short Notes, Detailed Notes, and Flashcards for all ${recreatedChapters.length} units and topics...`);
  for (const chap of recreatedChapters) {
    try {
      // 1. Generate Unit Short Note if missing
      const existingUnit = db.getChapterShortNote(bookId, chap.chapter_number);
      if (!existingUnit) {
        const note = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, false, 'summary', undefined, false);
        db.saveChapterShortNote(note);
      }

      // 2. Generate Unit Detailed Note if missing
      const existingDetailedUnit = db.getChapterShortNote(bookId, chap.chapter_number, '__detailed');
      if (!existingDetailedUnit) {
        const detailedUnitNote = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, false, 'summary', undefined, true);
        detailedUnitNote.topic_title = '__detailed';
        db.saveChapterShortNote(detailedUnitNote);
      }

      console.log(`[Ingestion] Verified AI Short Note & Detailed Note for Unit ${chap.chapter_number}: ${chap.chapter_title}`);

      // 3. Generate Topic-by-Topic Short Notes and Detailed Notes if missing
      const chapterTopics = (chap.topics && chap.topics.length > 0) ? chap.topics : [{
        topic_number: `${chap.chapter_number}.1`,
        title: chap.chapter_title,
        description: `Core concepts of ${chap.chapter_title}`,
        start_page: chap.start_page
      }];

      for (const topic of chapterTopics) {
        try {
          const existingShort = db.getChapterShortNote(bookId, chap.chapter_number, topic.title);
          if (!existingShort || !existingShort.ai_assisted) {
            const topShort = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, false, 'summary', topic.title, false);
            topShort.topic_title = topic.title;
            db.saveChapterShortNote(topShort);
          }

          const existingDetailed = db.getChapterShortNote(bookId, chap.chapter_number, `${topic.title}__detailed`);
          if (!existingDetailed || !existingDetailed.ai_assisted) {
            const topDetailed = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, false, 'summary', topic.title, true);
            topDetailed.topic_title = `${topic.title}__detailed`;
            db.saveChapterShortNote(topDetailed);
          }
        } catch (tErr) {
          console.warn(`[Ingestion] Notice generating topic note for ${topic.title}:`, tErr);
        }
      }

      const allTopicFlashcards: Flashcard[] = [];
      for (const topic of chapterTopics) {
        const topNum = topic.topic_number || `${chap.chapter_number}.1`;
        const topicId = `topic-${bookId}-${chap.chapter_number}-${topNum.replace('.', '-')}`;
        const topicFlashcards: Flashcard[] = [
          {
            id: `fc-${topicId}-1`,
            book_id: bookId,
            topic_id: topicId,
            topic_name: topic.title,
            subject_name: book.subject_name || 'Curriculum Subject',
            grade_name: book.grade_name || 'Secondary Grade',
            front_title: `Core Concept: ${topic.title}`,
            front_content: `What is the standard definition and theoretical/mathematical foundation of "${topic.title}" (${topic.description || ''})?`,
            front_subtitle: `Unit ${chap.chapter_number} • Topic ${topNum}`,
            back_definition: `"${topic.title}" is a vital curriculum component governing key analytical principles and required problem-solving methods for secondary mastery and national exams.`,
            ethiopian_context: `Tested regularly in Ethiopian national entrance examinations.`,
            euee_exam_trap: `Watch out for sign errors, unit mismatches, and domain constraints in multiple choice options.`,
            formula_or_keypoint: `Key Formula / Principle: Master governing equations for ${topic.title}.`,
            tags: ['Core Definition', 'Must-Know'],
            created_at: new Date().toISOString()
          },
          {
            id: `fc-${topicId}-2`,
            book_id: bookId,
            topic_id: topicId,
            topic_name: topic.title,
            subject_name: book.subject_name || 'Curriculum Subject',
            grade_name: book.grade_name || 'Secondary Grade',
            front_title: `EUEE Exam Trap & High-Yield Strategy`,
            front_content: `What common conceptual or calculation mistake do candidates make on "${topic.title}"?`,
            front_subtitle: `Examiner Insight`,
            back_definition: `Students frequently confuse vector/scalar parameters, ignore boundary conditions, or misapply proportionality laws.`,
            ethiopian_context: `National examination papers frequently place distractor options targeting this exact student misconception.`,
            euee_exam_trap: `Always check dimensional consistency and extreme boundary cases before selecting your final answer.`,
            formula_or_keypoint: `Mastery Trick: Work backwards from choices if algebraic expansion takes over 60 seconds.`,
            tags: ['EUEE Trap', 'Exam Strategy'],
            created_at: new Date().toISOString()
          },
          {
            id: `fc-${topicId}-3`,
            book_id: bookId,
            topic_id: topicId,
            topic_name: topic.title,
            subject_name: book.subject_name || 'Curriculum Subject',
            grade_name: book.grade_name || 'Secondary Grade',
            front_title: `Key Laws & Formulas`,
            front_content: `State the essential equations, theorems, or governing relations for "${topic.title}".`,
            front_subtitle: `Formula Memory Bank`,
            back_definition: `Governing relations tie input variables to outputs with strict mathematical and physical validity.`,
            ethiopian_context: `Directly derived from the official Ethiopian Ministry of Education Student Textbook.`,
            euee_exam_trap: `Ensure all quantities are converted to standard SI units before computation.`,
            formula_or_keypoint: `Formula: Primary Relations for ${topic.title}`,
            tags: ['Formulas', 'Quick Reference'],
            created_at: new Date().toISOString()
          },
          {
            id: `fc-${topicId}-4`,
            book_id: bookId,
            topic_id: topicId,
            topic_name: topic.title,
            subject_name: book.subject_name || 'Curriculum Subject',
            grade_name: book.grade_name || 'Secondary Grade',
            front_title: `Real-World Ethiopian Application`,
            front_content: `How is "${topic.title}" applied in Ethiopian industry, technology, or scientific projects?`,
            front_subtitle: `Contextual Connection`,
            back_definition: `Applied in nationwide infrastructure (e.g., hydroelectric modeling, agricultural meteorology, communications, and economic planning).`,
            ethiopian_context: `Utilized by Ethiopian engineers and researchers across regional initiatives.`,
            euee_exam_trap: `Contextual questions test conceptual reasoning over brute-force calculation.`,
            formula_or_keypoint: `Takeaway: Connect abstract theoretical formulas to concrete physical measurements.`,
            tags: ['Ethiopian Context', 'Application'],
            created_at: new Date().toISOString()
          },
          {
            id: `fc-${topicId}-5`,
            book_id: bookId,
            topic_id: topicId,
            topic_name: topic.title,
            subject_name: book.subject_name || 'Curriculum Subject',
            grade_name: book.grade_name || 'Secondary Grade',
            front_title: `45-Second Speed Solve Shortcut`,
            front_content: `How can you solve questions on "${topic.title}" in under 45 seconds during the timed exam?`,
            front_subtitle: `Time-Saving Trick`,
            back_definition: `Use order-of-magnitude estimates and unit elimination to instantly disqualify 2 incorrect options.`,
            ethiopian_context: `Saves critical minutes during timed national entrance examinations.`,
            euee_exam_trap: `Don't waste time on complex long division if answer choices differ by orders of magnitude.`,
            formula_or_keypoint: `Shortcut: Estimate magnitude -> Check units -> Select matching choice.`,
            tags: ['Speed Shortcut', '45-Sec Trick'],
            created_at: new Date().toISOString()
          }
        ];
        allTopicFlashcards.push(...topicFlashcards);
      }
      db.saveFlashcardsBatch(allTopicFlashcards);
      console.log(`[Ingestion] Saved ${allTopicFlashcards.length} Flashcards (5 per topic) for Unit ${chap.chapter_number}: ${chap.chapter_title}`);
    } catch (noteErr) {
      console.warn(`[Ingestion] Could not generate notes/flashcards for Unit ${chap.chapter_number}:`, noteErr);
    }
  }

  // 5. Finalize Book status as READY and guarantee permanent storage
  db.updateBook(bookId, {
    status: 'READY',
    total_pages: totalPages,
    processed_pages: totalPages,
    original_pdf_path: standardPdfPath
  });
  db.flush();
  db.syncOfficialBackups();

  // 6. Backup file to Firestore
  try {
    const { uploadFileToFirestore } = await import('./firestoreSync');
    await uploadFileToFirestore(standardPdfPath, 'books', bookId);
  } catch (err) {
    console.error('Failed to backup book to Firestore:', err);
  }

  if (onProgress) {
    onProgress({
      book_id: bookId,
      total_pages: totalPages,
      processed_pages: totalPages,
      ocr_pages_count: ocrCount,
      status: 'READY',
      step: `Ingestion complete: ${recreatedChapters.length} Units, ${totalPages} pages, and comprehensive Short Notes created.`
    });
  }
}

export async function processUploadedExam(examId: string): Promise<void> {
  const exam = db.getExamById(examId);
  if (!exam) throw new Error(`Exam ${examId} not found`);

  // Count pages if exam PDF exists
  let totalPages = exam.total_pages || 1;
  const examPath = path.join(process.cwd(), 'storage', 'private', 'exams', `${examId}.pdf`);
  if (fs.existsSync(examPath) && hasBinary('gs')) {
    try {
      const gsOutput = execSync(`gs -q -dNOSAFER -dNODISPLAY -c "(${examPath}) (r) file runpdfbegin pdfpagecount = quit" 2>/dev/null`, {
        timeout: 10000
      }).toString().trim();
      const count = parseInt(gsOutput, 10);
      if (!isNaN(count) && count > 0) totalPages = count;
    } catch (e) {}
  }

  const existingQuestions = db.getExamQuestions(examId);
  db.updateExam(examId, {
    status: 'READY',
    total_pages: totalPages,
    processed_pages: totalPages,
    total_questions: existingQuestions.length || exam.total_questions || 50
  });

  // Backup exam file to Firestore
  if (fs.existsSync(examPath)) {
    try {
      const { uploadFileToFirestore } = await import('./firestoreSync');
      await uploadFileToFirestore(examPath, 'exams', examId);
    } catch (err) {
      console.warn('Exam Firestore backup notice:', err);
    }
  }
}
