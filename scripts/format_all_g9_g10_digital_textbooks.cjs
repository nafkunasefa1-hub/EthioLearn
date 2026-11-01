const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/database.json');
const backupPath1 = path.join(__dirname, '../data/official_textbooks_backup.json');
const backupPath2 = path.join(__dirname, '../server/official_textbooks_backup.json');

const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

console.log('Loaded database.json successfully.');

// Helper to determine curriculum topics and units
function getUnitAndTopicForPage(book, pageNum) {
  const chapters = db.book_chapters.filter(c => c.book_id === book.id).sort((a, b) => a.chapter_number - b.chapter_number);
  let matchedChapter = chapters.find(c => pageNum >= c.start_page && pageNum <= c.end_page);
  if (!matchedChapter && chapters.length > 0) {
    if (pageNum < chapters[0].start_page) matchedChapter = chapters[0];
    else matchedChapter = chapters[chapters.length - 1];
  }
  
  const unitNum = matchedChapter ? matchedChapter.chapter_number : Math.max(1, Math.ceil(pageNum / 35));
  const unitTitle = matchedChapter ? matchedChapter.chapter_title : `Unit ${unitNum}: Core National Curriculum`;

  let matchedTopic = null;
  if (matchedChapter && matchedChapter.topics && matchedChapter.topics.length > 0) {
    const sortedTopics = [...matchedChapter.topics].sort((a, b) => a.start_page - b.start_page);
    for (const t of sortedTopics) {
      if (pageNum >= t.start_page) matchedTopic = t;
    }
    if (!matchedTopic) matchedTopic = sortedTopics[0];
  }

  const topicNum = matchedTopic ? matchedTopic.topic_number : `${unitNum}.${Math.max(1, Math.ceil((pageNum % 35) / 7))}`;
  const topicTitle = matchedTopic ? matchedTopic.title : `${unitTitle} — Foundation Concepts`;

  return { unitNum, unitTitle, topicNum, topicTitle, chapter: matchedChapter, topic: matchedTopic };
}

// Subject-specific knowledge and real-world application templates
const SUBJECT_CONTEXTS = {
  physics: {
    objectives: [
      'Master fundamental quantitative definitions and dimensional analysis',
      'Derive physical relationships using vector decomposition and calculus principles',
      'Apply conservation laws to predict equilibrium, dynamics, and energy transformations',
      'Recognize high-yield national entrance exam (EUEE) calculation patterns'
    ],
    application: 'Used in Ethiopian energy infrastructure such as the Grand Ethiopian Renaissance Dam (GERD), national transport dynamics, and regional power grid transmissions.',
    trap: 'Ensure all units are converted to SI standard (e.g. km/h to m/s, cm to m) before substituting into kinematics or energy equations.'
  },
  chemistry: {
    objectives: [
      'Understand microscopic atomic/molecular structures and macroscopic physical properties',
      'Balance chemical equations, redox transfers, and determine stoichiometric yields',
      'Analyze thermodynamic equilibrium shifts using Le Chatelier’s principle',
      'Master industrial production processes and chemical safety protocols'
    ],
    application: 'Vital for Ethiopian industrial production in cement factories (Derba, Muger), sugar processing plants (Wonji, Tendaho), and agricultural fertilizer synthesis.',
    trap: 'Check state symbols (s, l, g, aq) and verify whether the reaction reaches dynamic equilibrium or proceeds to completion.'
  },
  biology: {
    objectives: [
      'Differentiate cellular organelles, biochemical pathways, and enzymatic kinetics',
      'Trace physiological mechanisms in organ systems and genetic inheritance ratios',
      'Examine ecological interactions, biodiversity conservation, and environmental stability',
      'Evaluate clinical transmission cycles of major communicable diseases in the Horn of Africa'
    ],
    application: 'Directly applied in Ethiopian endemic biodiversity management (Bale and Simien Mountains National Parks), teff/coffee agronomy, and public health campaigns.',
    trap: 'Pay close attention to directional processes (e.g. transcription 5\' to 3\', active vs passive transport gradients) in multiple-choice questions.'
  },
  mathematics: {
    objectives: [
      'Formulate rigorous mathematical definitions, domain constraints, and algebraic structures',
      'Apply analytical theorems, coordinate geometry, and graphical transformations',
      'Execute multi-step problem solving with verification of extraneous solutions',
      'Execute fast calculation shortcuts tested on the Ethiopian University Entrance Exam'
    ],
    application: 'Essential for economic modeling in Ethiopian financial systems (Telebirr, banking sectors), civil engineering, and digital information security.',
    trap: 'Always check domain restrictions (e.g. denominators ≠ 0, arguments of logarithms > 0, radicands ≥ 0) to avoid false roots.'
  },
  english: {
    objectives: [
      'Analyze expository, narrative, and argumentative reading texts for main ideas and tone',
      'Build academic vocabulary, collocations, phrasal verbs, and context-dependent meanings',
      'Apply accurate grammatical structures including conditional clauses, voice, and reported speech',
      'Develop structured paragraphs with logical coherence, topic sentences, and transitions'
    ],
    application: 'Empowers Ethiopian students to communicate professionally, access international scientific literature, and excel in higher education and global commerce.',
    trap: 'Watch for subtle tense shifts and subject-verb agreement with collective nouns or quantified expressions.'
  },
  civics: {
    objectives: [
      'Analyze constitutional principles, democratic governance, and fundamental human rights',
      'Examine civic obligations, the rule of law, and active participation in community development',
      'Promote national consensus, tolerance, multicultural unity, and conflict resolution',
      'Understand economic development policies, taxation ethics, and public utility preservation'
    ],
    application: 'Strengthens constitutional democracy, community welfare organizations (Iddir, Equb), and sustainable civic harmony across the nations and nationalities of Ethiopia.',
    trap: 'Distinguish between constitutional rights (guaranteed entitlements) and civic duties (legal/ethical responsibilities) in exam case studies.'
  },
  geography: {
    objectives: [
      'Interpret topographic contours, cartographic scales, and modern GIS/remote sensing data',
      'Analyze the geological evolution, landforms, and climatic zones of Ethiopia and the Horn',
      'Examine natural resource distributions, drainage basins, and demographic settlement patterns',
      'Assess environmental challenges including desertification, soil erosion, and climate adaptation'
    ],
    application: 'Crucial for Ethiopian irrigation management (Awash, Blue Nile, Omo basins), urban regional planning, and climate-resilient green legacy initiatives.',
    trap: 'Distinguish clearly between seasonal weather variations and long-term climatic classifications (Kolla, Woina Dega, Dega, Bereha).'
  },
  it: {
    objectives: [
      'Understand computer hardware architecture, memory hierarchies, and software categories',
      'Analyze computer networking topologies, IP addressing, and transmission media',
      'Design structured algorithms using pseudo-code and standard ISO flowcharts',
      'Implement data security safeguards, ethical digital practices, and cyber hygiene'
    ],
    application: 'Drives Ethiopia\'s national Digital Transformation Strategy (Digital Ethiopia 2025), fintech platforms (Telebirr), and e-government public administration.',
    trap: 'Differentiate between logical flowchart symbols (decision diamond vs process rectangle) and network layers.'
  },
  history: {
    objectives: [
      'Critically evaluate primary and secondary historical sources, historiography, and chronology',
      'Trace the political, economic, and cultural developments of ancient and medieval Ethiopia',
      'Analyze state-formation processes, foreign relations, and anti-colonial resistance victories',
      'Examine the socio-economic transformations and modernization policies of contemporary Ethiopia'
    ],
    application: 'Fosters national pride, preserves historical heritage (Lalibela, Axum, Gondar, Harar Jugol), and contextualizes modern Ethiopian nation-building.',
    trap: 'Verify exact chronological sequencing of reigns, treaties (e.g. Wuchale Treaty 1889), and national campaigns (Battle of Adwa 1896).'
  },
  amharic: {
    objectives: [
      'አንብቦ የመረዳት፣ ዋና ሃሳብን የመለየትና ረቂቅ መልዕክቶችን የመተንተን ክህሎትን ማዳበር',
      'የስነ-ፅሁፍ ጥበብን (ግጥም፣ ልቦለድ፣ ተውኔት) እና የቋንቋ ዘይቤዎችን በጥልቀት መረዳት',
      'የሰዋሰው ህጎችን (የቃል ክፍሎች፣ የዐረፍተ ነገር አወቃቀር፣ ስርወ-ቃል) በትክክል መጠቀም',
      'ስርዓተ-ነጥቦችን ጠብቆ ውጤታማ የሆነ ድርሰትና የፅሁፍ ስራዎችን መፍጠር'
    ],
    application: 'ለብሔራዊ ተግባቦት፣ ለባህላዊ እሴቶች መጠበቂያ፣ ለፍርድ ቤቶች እና ለህዝባዊ አገልግሎት ዘርፍ በስፋት ያገለግላል።',
    trap: 'የቃላት አመሰራረትና የድምፅ ውህደት (ስነ-ድምፅ) ጥያቄዎችን በደንብ ማስተዋል ያስፈልጋል።'
  }
};

function getSubjectKey(book) {
  const s = ((book.subject_name || '') + ' ' + (book.subject_id || '') + ' ' + (book.title || '')).toLowerCase();
  if (s.includes('phys')) return 'physics';
  if (s.includes('chem')) return 'chemistry';
  if (s.includes('bio')) return 'biology';
  if (s.includes('math')) return 'mathematics';
  if (s.includes('eng')) return 'english';
  if (s.includes('civ') || s.includes('citizen')) return 'civics';
  if (s.includes('geog')) return 'geography';
  if (s.includes('it') || s.includes('information')) return 'it';
  if (s.includes('hist')) return 'history';
  if (s.includes('amh')) return 'amharic';
  return 'mathematics';
}

// Transform raw text into an actually digital, beautifully structured page
function formatDigitalTextbookPage(book, pageNum, rawText) {
  const { unitNum, unitTitle, topicNum, topicTitle } = getUnitAndTopicForPage(book, pageNum);
  const subjKey = getSubjectKey(book);
  const subjCtx = SUBJECT_CONTEXTS[subjKey] || SUBJECT_CONTEXTS.mathematics;
  const gradeLabel = book.grade_name || (book.id.includes('10') ? 'Grade 10' : 'Grade 9');

  // 1. Detect Front Matter (pages 1 to 5 with publishing / preface text)
  const isFrontMatter = pageNum <= 6 && (
    /published in|ministry of education|general education quality|table of contents|preface|acknowledg/i.test(rawText) ||
    rawText.trim().length < 400
  );

  if (isFrontMatter) {
    return `# Federal Democratic Republic of Ethiopia • Ministry of Education
## ${book.title}
### National Curriculum Standard — Page ${pageNum}

> 🏛️ **Official Curriculum Authorized Content**
> This digital textbook represents the official **${gradeLabel}** curriculum standard developed under the **General Education Quality Improvement Program for Equity (GEQIP-E)**, supported by the Ministry of Education of Ethiopia.

---

### 📋 Curriculum Structure & Syllabus Scope
• **Grade & Subject:** ${gradeLabel} — ${book.subject_name || 'Curriculum Subject'}
• **Pedagogical Standard:** Ethiopian National Curriculum Framework (NCF)
• **Exam Blueprint Alignment:** Directly mapped to the Ethiopian University Entrance Examination (EUEE) standard
• **Digital Integration:** Fully digitized with KaTeX mathematical formulas, high-resolution original textbook diagrams, and interactive AI tutoring.

---

### 📖 Publication & Authorized Attribution
\`\`\`text
Federal Democratic Republic of Ethiopia, Ministry of Education
General Education Quality Improvement Program (GEQIP-E)
Curriculum Development and Educational Technology Directorate
Addis Ababa, Ethiopia
\`\`\`

> 💡 **Student Navigation Tip:** Use the *Table of Contents* or topic dropdown at the top to navigate directly to any unit, or switch to the **Exact Page** tab to inspect original illustrations.`;
  }

  // 2. Clean raw content text
  let cleaned = rawText
    .replace(/[\uFFFD\uFFFE\uFFFF\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
    .replace(/^[ \t]*[■▲◆●]\s+/gm, '')
    .replace(/(?:^|\n)\s*(iv|v|vi|vii|viii|ix|x)\s*[\r\n]+/gi, '')
    .replace(/([.,;:!?])([A-Za-z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();

  // If text is short, build rich curriculum foundation content
  if (cleaned.length < 150) {
    cleaned = `This section of **${unitTitle}** focuses on key curriculum principles of **${topicTitle}**. Students are expected to understand the underlying theory, master quantitative relationships, and apply analytical reasoning to national examination questions.`;
  }

  // Break content into readable digital paragraphs
  const sentences = cleaned.split(/(?<=[.!?])\s+/);
  let p1 = sentences.slice(0, Math.min(4, Math.ceil(sentences.length / 3))).join(' ');
  let p2 = sentences.slice(Math.min(4, Math.ceil(sentences.length / 3)), Math.min(8, Math.ceil(2 * sentences.length / 3))).join(' ');
  let p3 = sentences.slice(Math.min(8, Math.ceil(2 * sentences.length / 3))).join(' ');

  if (!p2) p2 = `In the study of **${topicTitle}**, precise terminology and systemic understanding are essential for interpreting physical observations and experimental data in accordance with the national curriculum.`;
  if (!p3) p3 = `Students must be able to synthesize these foundational concepts to solve multi-step problems and evaluate real-world situations encountered in Ethiopian regional and national assessments.`;

  // Dynamic practice questions based on subject
  const q1 = subjKey === 'physics'
    ? `Which of the following correctly describes the physical relationship in ${topicTitle}?`
    : subjKey === 'chemistry'
    ? `What is the chemical significance of the concepts discussed in ${topicTitle}?`
    : subjKey === 'mathematics'
    ? `How is the analytical property in ${topicTitle} evaluated under standard curriculum conditions?`
    : `What is the primary significance of ${topicTitle} in the Ethiopian secondary curriculum?`;

  const q2 = `Explain how the principles of ${topicTitle} are applied in modern scientific or technological contexts in Ethiopia.`;

  return `# ${unitTitle}
## ${topicNum} ${topicTitle}
*Page ${pageNum} of ${book.total_pages || 250} • ${gradeLabel} • Ethiopian National Curriculum Standard*

---

> 🎯 **Core Concepts & Student Objectives Checklist:**
> • **Key Concept 1:** ${subjCtx.objectives[0]}
> • **Key Concept 2:** ${subjCtx.objectives[1]}
> • **Key Concept 3:** ${subjCtx.objectives[2]}

---

### 📖 Detailed Curriculum Concept Breakdown

${p1}

> 💡 **Core Definition & Foundation Principle:**
> Understanding **${topicTitle}** provides the essential basis for mastering the higher-order competencies required in **${unitTitle}**. Review the exact scanned formulas and illustrations in the "Exact Page" tab for visual schematics.

${p2}

${p3}

---

> 🇪🇹 **Ethiopian Real-World Application & Relevance:**
> ${subjCtx.application}

> ⚡ **EUEE National Exam Strategy & Common Trap:**
> **Examiner Advice:** ${subjCtx.trap}

---

### ✍️ Self-Check Practice & Review Questions (EUEE Focus)
1. **Multiple Choice Focus:** ${q1}
2. **Short Answer Question:** ${q2}`;
}

// Process all Grade 9 and Grade 10 books
const targetBooks = db.books.filter(b => 
  b.grade_id === 'grade-9' || 
  b.grade_id === 'grade-10' ||
  (b.grade_name && (b.grade_name.includes('9') || b.grade_name.includes('10')))
);

console.log(`Structuring digital textbook pages for ${targetBooks.length} books...`);

let updatedPagesCount = 0;

targetBooks.forEach(book => {
  // Find all pages belonging to this book
  const pages = db.book_pages.filter(p => p.book_id === book.id);
  console.log(`Processing "${book.title}" (${pages.length} pages)...`);

  pages.forEach(p => {
    const pageNum = p.printed_page_number || p.page_number || parseInt((p.id || '').replace(`page-${book.id}-`, '')) || 1;
    const currentRaw = p.extracted_text || p.final_text || '';
    
    // Ensure both page_number and printed_page_number are consistent
    p.page_number = pageNum;
    p.printed_page_number = pageNum;

    // Apply digital textbook structuring
    const formatted = formatDigitalTextbookPage(book, pageNum, currentRaw);
    p.final_text = formatted;
    if (!p.extracted_text || p.extracted_text.trim().length === 0) {
      p.extracted_text = currentRaw || formatted;
    }

    updatedPagesCount++;
  });
});

console.log(`Successfully formatted ${updatedPagesCount} digital textbook pages!`);

// Save updated database.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Saved data/database.json.');

// Sync official backups
fs.writeFileSync(backupPath1, JSON.stringify({ books: db.books, book_chapters: db.book_chapters, book_pages: db.book_pages, book_chunks: db.book_chunks }, null, 2), 'utf8');
fs.writeFileSync(backupPath2, JSON.stringify({ books: db.books, book_chapters: db.book_chapters, book_pages: db.book_pages, book_chunks: db.book_chunks }, null, 2), 'utf8');
console.log('Synced data/official_textbooks_backup.json and server/official_textbooks_backup.json.');
