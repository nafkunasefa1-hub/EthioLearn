/**
 * Table detection and formatting utility for Ethiopian National Exams.
 * Converts LaTeX tabular environments, HTML tables, flattened or space-separated tabular data in question stems into
 * structured standard Markdown tables (| Col 1 | Col 2 | ...).
 */

export function convertLatexTabularToMarkdown(latex: string): string {
  if (!latex || typeof latex !== 'string') return '';

  return latex.replace(/\\begin\{(?:tabular|table|array)\}(?:\{[^\}]*\})?([\s\S]*?)\\end\{(?:tabular|table|array)\}/gi, (match, body) => {
    try {
      // Remove \hline, \toprule, \midrule, \bottomrule, \cline{...}
      let cleaned = body
        .replace(/\\(?:hline|toprule|midrule|bottomrule|cline\{[^\}]*\})/gi, '')
        .trim();

      // Split into rows by \\
      const rawRows = cleaned.split(/\\\\/).map((r: string) => r.trim()).filter((r: string) => r.length > 0);
      if (rawRows.length === 0) return '';

      const tableRows: string[][] = [];
      let maxCols = 0;

      for (const row of rawRows) {
        // Split by & (ignoring \&)
        const cells = row.split(/(?<!\\)&/).map((c: string) => {
          let cell = c.trim();
          // Clean common LaTeX markup in cells
          cell = cell
            .replace(/\\textbf\{([^}]+)\}/g, '**$1**')
            .replace(/\\textit\{([^}]+)\}/g, '*$1*')
            .replace(/\\underline\{([^}]+)\}/g, '$1')
            .replace(/\\multicolumn\{\d+\}\{[^}]*\}\{([^}]+)\}/g, '$1')
            .replace(/\\multirow\{\d+\}\{[^}]*\}\{([^}]+)\}/g, '$1')
            .replace(/\\&/g, '&')
            .replace(/\\%/g, '%')
            .replace(/\s+/g, ' ')
            .trim();
          return cell;
        });

        if (cells.length > 0) {
          maxCols = Math.max(maxCols, cells.length);
          tableRows.push(cells);
        }
      }

      if (tableRows.length === 0 || maxCols < 1) return match;

      // Ensure all rows have equal columns
      for (const r of tableRows) {
        while (r.length < maxCols) {
          r.push('');
        }
      }

      const headerRow = tableRows[0];
      const dataRows = tableRows.slice(1);
      const divider = headerRow.map(() => ':---');

      const mdHeader = `| ${headerRow.join(' | ')} |`;
      const mdDivider = `| ${divider.join(' | ')} |`;
      const mdData = (dataRows.length > 0 ? dataRows : [headerRow.map(() => '-')])
        .map(r => `| ${r.join(' | ')} |`)
        .join('\n');

      return `\n\n${mdHeader}\n${mdDivider}\n${mdData}\n\n`;
    } catch (e) {
      return match;
    }
  });
}

export function formatTablesInText(rawText: string | undefined | null): string {
  if (!rawText || typeof rawText !== 'string') return '';
  let text = rawText;

  // 1. Convert any LaTeX tabular / table / array environments first
  if (/\\begin\{(?:tabular|table|array)\}/i.test(text)) {
    text = convertLatexTabularToMarkdown(text);
  }

  // If already contains a valid markdown table with dividers, return it cleaned
  if (/\|[^\n]+\|\s*\n\s*\|(?:\s*:?---+:?\s*\|)+\s*\n\s*\|[^\n]+\|/.test(text)) {
    return text;
  }

  // Known specific table questions from 2018 Biology exam
  // Q6: Digestive Enzymes
  if (/role\s+of\s+digestive\s+enzymes/i.test(text) && /Pepsin/i.test(text)) {
    return text
      .replace(/digestive\s*enzymesand/i, 'digestive enzymes and')
      .replace(
        /(No\.\s+Enzymes[\s\S]*?Optimum\s+pH[\s\S]*?)(Which alternative[\s\S]*|$)/i,
        `\n\n| No. | Enzymes | The role of the enzyme | Optimum pH |\n| :--- | :--- | :--- | :--- |\n| 1. | Pepsin | Hydrolyzes proteins to amino acids | 1 |\n| 2. | Amylase | Converts starch to maltose | 4 - 6 |\n| 3. | Nuclease | Converts nucleotides to nucleic acids | 1 |\n| 4. | Lactase | Hydrolyzes lactose to glucose and galactose | 7 - 8 |\n\n$2`
      ).trim();
  }

  // Q16: Classification of Organic Molecules
  if (/classification\s+of\s+organic\s+molecules/i.test(text) && /Sucrose/i.test(text)) {
    return text
      .replace(/andmonomers/i, 'and monomers')
      .replace(
        /(No\.\s+Organic\s+molecules[\s\S]*?Monomers[\s\S]*?)(Which numbers[\s\S]*|$)/i,
        `\n\n| No. | Organic molecules | Elemental composition | Monomers |\n| :--- | :--- | :--- | :--- |\n| 1. | Sucrose | Carbon, hydrogen and oxygen | Glucose and fructose |\n| 2. | Starch | Carbon, hydrogen and oxygen | Glucose and galactose |\n| 3. | Proteins | Carbon, hydrogen and oxygen | Amino acids |\n| 4. | Lipids | Carbon, hydrogen and oxygen | Fatty acid and glycerol |\n\n$2`
      ).trim();
  }

  // Q34: Food Chain
  if (/table\s+about\s+food\s+chain/i.test(text) && /Trophic\s+level/i.test(text)) {
    return text
      .replace(/itsexamples/i, 'its examples')
      .replace(
        /(No\.\s+Characteristics[\s\S]*?Example[\s\S]*?)(Which numbers[\s\S]*|$)/i,
        `\n\n| No. | Characteristics | Trophic level | Feeding level | Example |\n| :--- | :--- | :--- | :--- | :--- |\n| 1. | Make their own food | First | Producers | Grass |\n| 2. | Feeds on herbivores | Third | Tertiary consumer | Frog |\n| 3. | Feeds on another carnivore | Fourth | Tertiary consumer | Snake |\n| 4. | Feeds on green plants | Second | Primary consumer | Grasshopper |\n\n$2`
      ).trim();
  }

  // Q51: Feedback Control Mechanism (Menstrual Cycle)
  if (/feedback\s+control\s+mechanism/i.test(text) && /Hormone\s+level/i.test(text)) {
    return text
      .replace(/fromdays/i, 'from days')
      .replace(
        /(No\.\s+Hormone\s+level[\s\S]*?Feedback\s+system[\s\S]*?)(Based\s+on\s+the\s+above\s+table[\s\S]*|$)/i,
        `\n\n| No. | Hormone level | Events | Feedback system |\n| :--- | :--- | :--- | :--- |\n| I. | High FSH | Reduces gonadotrophin | Negative |\n| II. | Low FSH | Menstruation | Negative |\n| III. | High LH | Ovulation | Negative |\n| IV. | High LH | More estradiol | Positive |\n\n$2`
      ).trim();
  }

  // Q52: Reproduction in Vertebrate Animals
  if (/reproduction\s+in\s+vertebrate\s+animals/i.test(text) && /Birds[\s\S]*?Frog[\s\S]*?Rat/i.test(text)) {
    return text.replace(
      /(No\.\s+Birds[\s\S]*?Rat[\s\S]*?)(Which alternatives[\s\S]*|$)/i,
      `\n\n| No. | Birds | Frog | Rat |\n| :--- | :--- | :--- |\n| 1. | Fertilization takes place in cloaca | Fertilization happens in the ovary | Fertilization takes place in the oviduct |\n| 2. | Magnum produces unfertilized egg | Oviduct produces fertilized egg | Ovary produces unfertilized egg |\n| 3. | Do not go through larval stage after fertilization | Go through larval stage after fertilization | Do not go through larval stage after fertilization |\n| 4. | Produce amniotic egg | Produce non-amniotic egg | Produce amniotic egg |\n\n$2`
    ).trim();
  }

  // Q66: Homeotherms and Poikilotherms
  if (/homeotherms\s+and\s+poikilotherms/i.test(text) && /Features[\s\S]*?Examples/i.test(text)) {
    return text
      .replace(/withtheir/i, 'with their')
      .replace(/ofpoikilotherms/i, 'of poikilotherms')
      .replace(
        /(No\.\s+Features[\s\S]*?Examples[\s\S]*?)(Which alternative[\s\S]*|$)/i,
        `\n\n| No. | Features | Examples |\n| :--- | :--- |\n| 1. | Have internal control over their body temperature | Frogs |\n| 2. | Use burrows to keep their body warm | Snakes |\n| 3. | Use vasoconstriction to prevent heat loss | Crocodiles |\n| 4. | Generate internal heat to adjust their body temperature | Human |\n\n$2`
      ).trim();
  }

  // Q79: Structure of Plants and Functions
  if (/structure\s+of\s+plants\s+and\s+their[\s\S]*?functions/i.test(text) && /Plant\s+structures[\s\S]*?Functions/i.test(text)) {
    return text
      .replace(/theircorresponding/i, 'their corresponding')
      .replace(
        /(No\.\s+Plant\s+structures[\s\S]*?Functions[\s\S]*?)(Which alternative[\s\S]*|$)/i,
        `\n\n| No. | Plant structures | Functions |\n| :--- | :--- |\n| 1. | Epidermis | Reduces water loss through transpiration |\n| 2. | Endodermis | Produces food by photosynthesis |\n| 3. | Vascular bundles | Conduct nutrients to different part of the plant |\n| 4. | Cortex | Prevent tissues from infection by pathogens |\n\n$2`
      ).trim();
  }

  // Generic heuristic parser for future uploaded questions with tables:
  // Detects: "based on the following table..." followed by "No. Header1 Header2..." and "1. ... 2. ... 3. ... 4. ..."
  const genericTableMatch = text.match(
    /(based\s+on\s+the\s+following\s+table[^\n.]*[\.:]?\s*\n+)(No\.?[ \t]+[^\n]+)(\n+(?:(?:\d{1,2}|[IVX]+|[A-D])\.?[ \t]+[^\n]+(?:\n+|$))+)([\s\S]*)/i
  );

  if (genericTableMatch) {
    const intro = genericTableMatch[1].trim();
    const rawHeader = genericTableMatch[2].trim();
    const rawRowsBlock = genericTableMatch[3].trim();
    const outro = genericTableMatch[4].trim();

    // Split headers by multiple spaces or tabs
    const headers = rawHeader.split(/[ \t]{2,}|\t/).map(h => h.trim()).filter(Boolean);
    if (headers.length >= 2) {
      const divider = headers.map(() => ':---').join(' | ');
      const rowsLines = rawRowsBlock.split(/\n+/).map(l => l.trim()).filter(Boolean);
      const parsedRows: string[] = [];

      for (const line of rowsLines) {
        const rowCells = line.split(/[ \t]{2,}|\t/).map(c => c.trim()).filter(Boolean);
        if (rowCells.length > 0) {
          if (rowCells.length < headers.length) {
            while (rowCells.length < headers.length) rowCells.push('');
          } else if (rowCells.length > headers.length) {
            const extra = rowCells.slice(headers.length - 1).join(' ');
            rowCells.splice(headers.length - 1, rowCells.length - headers.length + 1, extra);
          }
          parsedRows.push(`| ${rowCells.join(' | ')} |`);
        }
      }

      if (parsedRows.length >= 2) {
        const mdTable = `| ${headers.join(' | ')} |\n| ${divider} |\n${parsedRows.join('\n')}`;
        return `${intro}\n\n${mdTable}\n\n${outro}`.trim();
      }
    }
  }

  return text;
}
