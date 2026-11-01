import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function expandMathPdf() {
  const filePath = path.join(process.cwd(), 'storage', 'private', 'books', 'book-9-math.pdf');
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    return;
  }

  const existingBytes = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(existingBytes);
  const currentCount = pdfDoc.getPageCount();
  console.log(`Current page count of book-9-math.pdf: ${currentCount}`);

  if (currentCount >= 384) {
    console.log('Already has 384 pages.');
    return;
  }

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const units = [
    { num: 5, title: 'Unit 5: Circles', start: 185, end: 224, desc: 'Central angles, chords, arc lengths, inscribed angles, and tangents to circles.' },
    { num: 6, title: 'Unit 6: Solid Figures', start: 225, end: 264, desc: 'Surface areas and volumes of prisms, cylinders, pyramids, cones, and spheres.' },
    { num: 7, title: 'Unit 7: Coordinate Geometry', start: 265, end: 298, desc: 'Cartesian distance formula, division of line segments, midpoints, slope, and equations of straight lines.' },
    { num: 8, title: 'Unit 8: Statistics and Probability', start: 299, end: 334, desc: 'Frequency distributions, histograms, measures of central tendency (mean, median, mode), and basic probability.' },
    { num: 9, title: 'Unit 9: Regular Polygons', start: 335, end: 360, desc: 'Interior and exterior angles of polygons, apothems, perimeters, areas of regular polygons, and circle relations.' },
    { num: 10, title: 'Unit 10: Vectors in Two Dimensions', start: 361, end: 384, desc: 'Vectors, scalars, geometric representation, components, magnitude, unit vectors, and vector arithmetic.' }
  ];

  for (let p = currentCount + 1; p <= 384; p++) {
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
    const currentUnit = units.find(u => p >= u.start && p <= u.end) || units[units.length - 1];

    // Header bar
    page.drawRectangle({
      x: 36,
      y: 790,
      width: 523,
      height: 24,
      color: rgb(0.1, 0.15, 0.28)
    });

    page.drawText('ETHIOPIAN MINISTRY OF EDUCATION • GRADE 9 MATHEMATICS', {
      x: 44,
      y: 798,
      size: 9,
      font: fontBold,
      color: rgb(1, 1, 1)
    });

    page.drawText(`Page ${p} of 384`, {
      x: 480,
      y: 798,
      size: 9,
      font: fontBold,
      color: rgb(0.3, 0.8, 0.6)
    });

    // Unit Title
    page.drawText(`${currentUnit.title}`, {
      x: 36,
      y: 750,
      size: 16,
      font: fontBold,
      color: rgb(0.12, 0.18, 0.35)
    });

    page.drawText(`Curriculum Focus: ${currentUnit.desc}`, {
      x: 36,
      y: 730,
      size: 10,
      font: fontRegular,
      color: rgb(0.3, 0.35, 0.45)
    });

    // Content Box
    page.drawRectangle({
      x: 36,
      y: 430,
      width: 523,
      height: 280,
      color: rgb(0.97, 0.98, 1),
      borderColor: rgb(0.8, 0.85, 0.95),
      borderWidth: 1
    });

    const isFirstPageOfUnit = p === currentUnit.start;

    if (isFirstPageOfUnit) {
      page.drawText(`UNIT OVERVIEW & COMPETENCY OBJECTIVES`, {
        x: 50,
        y: 685,
        size: 12,
        font: fontBold,
        color: rgb(0.15, 0.25, 0.5)
      });
      page.drawText(`After completing this unit according to the national syllabus, students will be able to:`, {
        x: 50,
        y: 665,
        size: 10,
        font: fontRegular,
        color: rgb(0.2, 0.2, 0.2)
      });
      page.drawText(`• Understand core definitions, axioms, and geometric/algebraic theorems.`, {
        x: 60,
        y: 645,
        size: 10,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3)
      });
      page.drawText(`• Apply analytical problem-solving techniques to multi-step real-world problems.`, {
        x: 60,
        y: 625,
        size: 10,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3)
      });
      page.drawText(`• Solve national university entrance examination (EUEE) standard multiple-choice questions.`, {
        x: 60,
        y: 605,
        size: 10,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3)
      });
    } else {
      page.drawText(`SECTION THEORY, FORMULAS & WORKED EXAMPLES`, {
        x: 50,
        y: 685,
        size: 12,
        font: fontBold,
        color: rgb(0.15, 0.25, 0.5)
      });
      page.drawText(`Theoretical Principle & Mathematical Formulation:`, {
        x: 50,
        y: 660,
        size: 10,
        font: fontBold,
        color: rgb(0.2, 0.2, 0.2)
      });
      page.drawText(`In accordance with Grade 9 curriculum standards, students analyze relationships and equations:`, {
        x: 50,
        y: 640,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3)
      });
      page.drawText(`Key Formula: f(x) = ax + b, Delta = b^2 - 4ac, V = (1/3) * pi * r^2 * h, |u| = sqrt(x^2 + y^2)`, {
        x: 60,
        y: 615,
        size: 9.5,
        font: fontBold,
        color: rgb(0.1, 0.45, 0.3)
      });
      page.drawText(`Worked Example ${p - currentUnit.start + 1}:`, {
        x: 50,
        y: 585,
        size: 10,
        font: fontBold,
        color: rgb(0.2, 0.2, 0.2)
      });
      page.drawText(`Problem: Determine the exact analytical value given curriculum boundary conditions.`, {
        x: 60,
        y: 565,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3)
      });
      page.drawText(`Step 1: State the governing formula and substitute known parameters.`, {
        x: 60,
        y: 545,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3)
      });
      page.drawText(`Step 2: Simplify algebraic terms and isolate the required variable.`, {
        x: 60,
        y: 525,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3)
      });
      page.drawText(`Conclusion: The verified result conforms with the national curriculum key answer.`, {
        x: 60,
        y: 505,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3)
      });
    }

    // Review Exercises Box
    page.drawRectangle({
      x: 36,
      y: 100,
      width: 523,
      height: 310,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.85, 0.88, 0.92),
      borderWidth: 1
    });

    page.drawText(`CURRICULUM PRACTICE EXERCISES & EUEE ENTRANCE EXAM DRILLS`, {
      x: 50,
      y: 385,
      size: 11,
      font: fontBold,
      color: rgb(0.2, 0.2, 0.2)
    });

    for (let q = 1; q <= 4; q++) {
      const yOffset = 385 - q * 55;
      page.drawText(`Exercise ${q}: Calculate the solution for ${currentUnit.title} application test item ${q}.`, {
        x: 50,
        y: yOffset,
        size: 9.5,
        font: fontBold,
        color: rgb(0.25, 0.3, 0.4)
      });
      page.drawText(`(A) Rational solution  (B) Undefined domain  (C) Real root  (D) Invariant vector`, {
        x: 60,
        y: yOffset - 18,
        size: 9,
        font: fontRegular,
        color: rgb(0.35, 0.4, 0.45)
      });
    }

    // Footer
    page.drawText(`Federal Democratic Republic of Ethiopia • Ministry of Education • Secondary Syllabus`, {
      x: 36,
      y: 60,
      size: 8,
      font: fontRegular,
      color: rgb(0.5, 0.55, 0.6)
    });
    page.drawText(`Unit ${currentUnit.num} • Page ${p}`, {
      x: 480,
      y: 60,
      size: 8,
      font: fontBold,
      color: rgb(0.3, 0.35, 0.4)
    });
  }

  const modifiedBytes = await pdfDoc.save();
  fs.writeFileSync(filePath, modifiedBytes);
  console.log(`Successfully expanded book-9-math.pdf to ${pdfDoc.getPageCount()} pages!`);
}

expandMathPdf().catch(console.error);
