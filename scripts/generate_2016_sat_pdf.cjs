const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { SAT_2016_60_QUESTIONS } = require('./sat_2016_authentic_data.cjs');

function sanitizeForPdf(str) {
  if (!str) return '';
  return str
    .replace(/≠/g, '!=')
    .replace(/∛/g, 'cbrt')
    .replace(/√/g, 'sqrt')
    .replace(/△/g, 'Triangle ')
    .replace(/∠/g, 'Angle ')
    .replace(/²/g, '^2')
    .replace(/⁻¹/g, '^-1')
    .replace(/⁰/g, '^0')
    .replace(/•/g, '-')
    .replace(/–/g, '-')
    .replace(/—/g, '-')
    .replace(/[^\x00-\x7F]/g, '');
}

async function generateSatPdf() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Cover / Header on Page 1
  let page = pdfDoc.addPage([595.28, 841.89]); // A4
  let y = 800;

  function checkNewPage(neededSpace = 80) {
    if (y < neededSpace) {
      page = pdfDoc.addPage([595.28, 841.89]);
      y = 800;
      // Top header on subsequent pages
      page.drawRectangle({
        x: 40,
        y: y - 5,
        width: 515,
        height: 18,
        color: rgb(0.12, 0.18, 0.3)
      });
      page.drawText('2016 E.C. (2024 G.C.) ESSLCE SCHOLASTIC APTITUDE TEST (SAT) • BOOKLET 094', {
        x: 45,
        y: y,
        size: 8,
        font: fontBold,
        color: rgb(1, 1, 1)
      });
      y -= 30;
    }
  }

  // Header Banner
  page.drawRectangle({
    x: 40,
    y: y - 55,
    width: 515,
    height: 60,
    color: rgb(0.08, 0.15, 0.28)
  });
  page.drawText('FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA • MINISTRY OF EDUCATION', {
    x: 60,
    y: y - 18,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1)
  });
  page.drawText('ETHIOPIAN SECONDARY SCHOOL LEAVING CERTIFICATE EXAMINATION (ESSLCE)', {
    x: 60,
    y: y - 32,
    size: 9.5,
    font: fontBold,
    color: rgb(0.8, 0.9, 1)
  });
  page.drawText('SCHOLASTIC APTITUDE TEST (SAT) — 2016 E.C. / 2024 G.C.  |  BOOKLET: 094  |  CODE: 03', {
    x: 60,
    y: y - 48,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.85, 0.6)
  });
  y -= 80;

  // Directions block
  page.drawRectangle({
    x: 40,
    y: y - 40,
    width: 515,
    height: 40,
    color: rgb(0.95, 0.97, 1)
  });
  page.drawText('GENERAL DIRECTIONS:', {
    x: 50,
    y: y - 15,
    size: 9,
    font: fontBold,
    color: rgb(0.1, 0.2, 0.4)
  });
  page.drawText('This booklet contains 60 multiple choice questions. Section 1: Verbal Reasoning (1-35) & Section 2: Quantitative Reasoning (36-60).', {
    x: 50,
    y: y - 28,
    size: 8,
    font: fontRegular,
    color: rgb(0.2, 0.25, 0.3)
  });
  page.drawText('Time Allowed: 2 Hours (120 Minutes). Choose the single best alternative from A, B, C, or D.', {
    x: 50,
    y: y - 38,
    size: 8,
    font: fontRegular,
    color: rgb(0.2, 0.25, 0.3)
  });
  y -= 55;

  let currentPassage = '';

  for (const q of SAT_2016_60_QUESTIONS) {
    // If there is a reading passage and it's new
    if (q.reading_passage && q.reading_passage !== currentPassage) {
      currentPassage = q.reading_passage;
      checkNewPage(160);
      page.drawRectangle({
        x: 40,
        y: y - 120,
        width: 515,
        height: 125,
        color: rgb(0.96, 0.98, 0.95)
      });
      page.drawText(sanitizeForPdf(`[ ${q.passage_title || 'READING PASSAGE'} ]`), {
        x: 50,
        y: y - 12,
        size: 9,
        font: fontBold,
        color: rgb(0.15, 0.45, 0.3)
      });
      
      // Wrap passage lines
      const words = sanitizeForPdf(q.reading_passage).split(' ');
      let line = '';
      let passY = y - 25;
      for (const w of words) {
        if ((line + w).length > 95) {
          page.drawText(line, { x: 50, y: passY, size: 7.5, font: fontRegular, color: rgb(0.15, 0.2, 0.25) });
          line = w + ' ';
          passY -= 10;
          if (passY < y - 115) break;
        } else {
          line += w + ' ';
        }
      }
      if (line) {
        page.drawText(line, { x: 50, y: passY, size: 7.5, font: fontRegular, color: rgb(0.15, 0.2, 0.25) });
      }
      y -= 135;
    }

    checkNewPage(100);

    // Section instruction if start of section
    if (q.section_instruction && (q.question_number === 1 || q.question_number === 5 || q.question_number === 8 || q.question_number === 12 || q.question_number === 18 || q.question_number === 21 || q.question_number === 25 || q.question_number === 29 || q.question_number === 32 || q.question_number === 36 || q.question_number === 56)) {
      page.drawText(sanitizeForPdf(`SECTION: ${q.topic_name.toUpperCase()}`), {
        x: 40,
        y: y,
        size: 8.5,
        font: fontBold,
        color: rgb(0.1, 0.35, 0.6)
      });
      y -= 14;
    }

    // Question Number & Text
    const qHeader = `${q.question_number}. `;
    const qLines = [];
    const qWords = sanitizeForPdf(q.question_text).split(' ');
    let curLine = qHeader;
    for (const w of qWords) {
      if ((curLine + w).length > 88) {
        qLines.push(curLine);
        curLine = '   ' + w + ' ';
      } else {
        curLine += w + ' ';
      }
    }
    if (curLine.trim()) qLines.push(curLine);

    for (const l of qLines) {
      page.drawText(l, {
        x: 40,
        y,
        size: 8.5,
        font: fontBold,
        color: rgb(0.1, 0.15, 0.2)
      });
      y -= 12;
    }

    // Options A, B, C, D in 2 columns
    const optY1 = y;
    page.drawText(sanitizeForPdf(`A. ${q.option_a}`), { x: 55, y: optY1, size: 8, font: fontRegular, color: rgb(0.2, 0.2, 0.25) });
    page.drawText(sanitizeForPdf(`B. ${q.option_b}`), { x: 290, y: optY1, size: 8, font: fontRegular, color: rgb(0.2, 0.2, 0.25) });
    y -= 11;
    const optY2 = y;
    page.drawText(sanitizeForPdf(`C. ${q.option_c}`), { x: 55, y: optY2, size: 8, font: fontRegular, color: rgb(0.2, 0.2, 0.25) });
    page.drawText(sanitizeForPdf(`D. ${q.option_d}`), { x: 290, y: optY2, size: 8, font: fontRegular, color: rgb(0.2, 0.2, 0.25) });
    y -= 16;
  }

  // Append Answer Key & Detailed Pedagogical Solutions Page
  checkNewPage(400);
  page.drawRectangle({
    x: 40,
    y: y - 25,
    width: 515,
    height: 25,
    color: rgb(0.08, 0.35, 0.25)
  });
  page.drawText('VERIFIED ANSWER KEYS AND PEDAGOGICAL EXPLANATIONS', {
    x: 50,
    y: y - 17,
    size: 10,
    font: fontBold,
    color: rgb(1, 1, 1)
  });
  y -= 40;

  for (const q of SAT_2016_60_QUESTIONS) {
    checkNewPage(45);
    page.drawText(`Question ${q.question_number} [Correct Answer: ${q.correct_answer}]`, {
      x: 40,
      y,
      size: 8.5,
      font: fontBold,
      color: rgb(0.08, 0.4, 0.25)
    });
    y -= 11;
    const expWords = sanitizeForPdf(q.explanation).split(' ');
    let expLine = '';
    for (const w of expWords) {
      if ((expLine + w).length > 95) {
        page.drawText(expLine, { x: 45, y, size: 7.5, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
        expLine = w + ' ';
        y -= 9.5;
      } else {
        expLine += w + ' ';
      }
    }
    if (expLine.trim()) {
      page.drawText(expLine, { x: 45, y, size: 7.5, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
      y -= 12;
    }
    y -= 4;
  }

  const pdfBytes = await pdfDoc.save();
  const outPath1 = path.join(process.cwd(), 'storage', 'private', 'exams', 'exam-entrance-2016-sat.pdf');
  const outPath2 = path.join(process.cwd(), 'storage', 'private', 'exams', '1789761115145-p3x5ac.pdf');
  fs.writeFileSync(outPath1, pdfBytes);
  fs.writeFileSync(outPath2, pdfBytes);
  console.log('Successfully generated official 2016 SAT PDF:', outPath1);
}

generateSatPdf();
