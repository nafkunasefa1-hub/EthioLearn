import React from 'react';
import { InlineMath } from 'react-katex';

interface FormattedQuestionTextProps {
  text: string;
  className?: string;
}

interface TableData {
  headers: string[];
  alignments: ('left' | 'center' | 'right')[];
  rows: string[][];
}

/**
 * Sanitizes and cleans cell content: removes $$, \text{...}, and normalizes common symbols.
 */
function cleanTableCell(cell: string): string {
  if (!cell) return '';
  let c = cell.trim();
  // Strip outer $$ or $ if wrapping the entire cell redundantly
  c = c.replace(/^\$\$|\$\$$/g, '').trim();
  // Strip nested or single \text{...}
  c = c.replace(/\\text\{([^\}]+)\}/g, '$1');
  // Normalize \pm
  c = c.replace(/\\pm\s*1\/2/g, '± 1/2');
  c = c.replace(/\\pm/g, '±');
  // Normalize hybridization if not in math mode
  if (/^sp\^?[23]?$/i.test(c.trim())) {
    c = `$${c.replace(/sp3/i, 'sp^3').replace(/sp2/i, 'sp^2')}$`;
  }
  return c.trim();
}

/**
 * Parses markdown table text into structured table headers and rows.
 */
function parseMarkdownTable(lines: string[]): TableData | null {
  // Filter out any standalone $$ lines that might have been included in table block
  const validLines = lines.map(l => l.trim()).filter(l => l && l !== '$$' && l !== '$');
  if (validLines.length < 2) return null;

  const parseRow = (line: string): string[] => {
    const trimmed = line.trim();
    const withoutOuterPipes = trimmed.replace(/^\|/, '').replace(/\|$/, '');
    return withoutOuterPipes.split('|').map(cell => cleanTableCell(cell));
  };

  const headers = parseRow(validLines[0]);
  if (headers.length < 2) return null;

  // Check if second line is divider (e.g., | :--- | :---: | ---: |)
  const dividerCells = parseRow(validLines[1]);
  if (dividerCells.length !== headers.length) return null;
  const isDivider = dividerCells.every(c => /^:?-+:?$/.test(c.replace(/\s+/g, '')));
  if (!isDivider) return null;

  const alignments: ('left' | 'center' | 'right')[] = dividerCells.map(c => {
    const trimmed = c.trim();
    const startColon = trimmed.startsWith(':');
    const endColon = trimmed.endsWith(':');
    if (startColon && endColon) return 'center';
    if (endColon) return 'right';
    return 'left';
  });

  const rows: string[][] = [];
  for (let i = 2; i < validLines.length; i++) {
    const rawLine = validLines[i].trim();
    if (!rawLine.startsWith('|')) continue;
    const cells = parseRow(rawLine);
    // Pad or trim cells to match header length
    while (cells.length < headers.length) cells.push('');
    rows.push(cells.slice(0, headers.length));
  }

  return { headers, alignments, rows };
}

type TextSegment =
  | { type: 'text'; content: string }
  | { type: 'table'; data: TableData };

function safeMathString(math: string): string {
  if (!math) return '';
  let m = math.trim();
  // Escape unescaped % in KaTeX math mode (otherwise treated as comment)
  m = m.replace(/(?<!\\)%/g, '\\%');
  // Normalize Greek or special symbol spacing
  m = m.replace(/\\degree/g, '^{\\circ}');
  return m;
}

function toUnicodeSuperscript(str: string): string {
  const map: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
    'n': 'ⁿ', 'i': 'ⁱ', '°': '°'
  };
  return str.split('').map(ch => map[ch] || ch).join('');
}

function toUnicodeSubscript(str: string): string {
  const map: Record<string, string> = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '⁷', '8': '₈', '9': '⁹',
    '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
    'a': 'ₐ', 'e': 'ₑ', 'o': 'ₒ', 'x': 'ₓ', 'i': 'ᵢ',
    'r': 'ᵣ', 'u': 'ᵤ', 'v': 'ᵥ', 'n': 'ₙ', 'm': 'ₘ'
  };
  return str.split('').map(ch => map[ch] || ch).join('');
}

function convertSimpleLatexInnerToUnicode(inner: string): string {
  let m = inner.trim();
  // Strip \text{...}, \mathrm{...}, \mathbf{...}
  m = m.replace(/\\(?:text|mathrm|mathbf|mathit|mathsf)\{([^{}]*)\}/g, '$1');
  m = m.replace(/\\mathcal\{E\}/g, 'ℰ');
  m = m.replace(/\\vec\{([a-zA-Z0-9]+)\}/g, '$1⃗');
  m = m.replace(/\\hat\{i\}/g, 'î').replace(/\\hat\{j\}/g, 'ĵ').replace(/\\hat\{k\}/g, 'k̂');

  // Degree symbols (must remove the caret ^ as well!)
  m = m.replace(/\^\s*\{\\circ\}/g, '°');
  m = m.replace(/\^\s*\\circ/g, '°');
  m = m.replace(/\\degree/g, '°');
  m = m.replace(/\\circ/g, '°');

  // Greek letters & common symbols
  const replacements: Array<[RegExp, string]> = [
    [/\\Delta/g, 'Δ'], [/\\Omega/g, 'Ω'], [/\\alpha/g, 'α'], [/\\beta/g, 'β'],
    [/\\gamma/g, 'γ'], [/\\theta/g, 'θ'], [/\\lambda/g, 'λ'], [/\\mu/g, 'μ'],
    [/\\pi/g, 'π'], [/\\sigma/g, 'σ'], [/\\omega/g, 'ω'], [/\\phi/g, 'φ'],
    [/\\rho/g, 'ρ'], [/\\tau/g, 'τ'], [/\\epsilon/g, 'ε'], [/\\eta/g, 'η'],
    [/\\nu/g, 'ν'], [/\\kappa/g, 'κ'], [/\\partial/g, '∂'], [/\\nabla/g, '∇'],
    [/\\rightleftharpoons/g, '⇌'], [/\\Longleftrightarrow/g, '⇔'], [/\\leftrightarrow/g, '↔'],
    [/\\longrightarrow/g, '→'], [/\\rightarrow/g, '→'], [/\\to\b/g, '→'],
    [/\\leftarrow/g, '←'], [/\\Rightarrow/g, '⇒'], [/\\implies/g, '⇒'], [/\\Leftarrow/g, '⇐'],
    [/\\times/g, '×'], [/\\cdot/g, '·'], [/\\div/g, '÷'], [/\\pm/g, '±'],
    [/\\leq/g, '≤'], [/\\le\b/g, '≤'], [/\\geq/g, '≥'], [/\\ge\b/g, '≥'],
    [/\\neq/g, '≠'], [/\\ne\b/g, '≠'], [/\\approx/g, '≈'], [/\\propto/g, '∝'],
    [/\\infty/g, '∞'], [/\\emptyset/g, '∅'], [/\\in\b/g, '∈'], [/\\notin\b/g, '∉'],
    [/\\subset/g, '⊂'], [/\\subseteq/g, '⊆'], [/\\cup/g, '∪'], [/\\cap/g, '∩'],
    [/\\forall/g, '∀'], [/\\exists/g, '∃'], [/\\angle/g, '∠'], [/\\perp/g, '⊥'],
    [/\\parallel/g, '∥'], [/\\quad/g, ' '], [/\\,/g, ' '], [/\\;/g, ' '], [/\\%/g, '%']
  ];
  for (const [regex, rep] of replacements) {
    m = m.replace(regex, rep);
  }

  // Convert braced superscripts and subscripts: ^{...}, _{...}
  m = m.replace(/\^\{([0-9+\-=()ni°]+)\}/g, (_, p1) => toUnicodeSuperscript(p1));
  m = m.replace(/\^([0-9+\-ni°])/g, (_, p1) => toUnicodeSuperscript(p1));
  m = m.replace(/_\{([0-9+\-=()aeoxiruvnm]+)\}/g, (_, p1) => toUnicodeSubscript(p1));
  m = m.replace(/_\{([^{}]+)\}/g, '($1)');
  m = m.replace(/_([0-9aeoxiruvnm])/g, (_, p1) => toUnicodeSubscript(p1));

  // Remove any leftover braces
  m = m.replace(/[{}]/g, '');
  return m.replace(/\s+/g, ' ').trim();
}

/**
 * Pre-sanitize text: convert simple LaTeX patterns to clean Unicode text
 * so they never show as raw $ or \\ symbols to the user.
 */
export function sanitizeLatexToUnicode(text: string): string {
  if (!text) return text;
  let s = text;

  // First normalize \^\circ everywhere so KaTeX never sees ^°
  s = s.replace(/\^\s*\{\\circ\}/g, '°');
  s = s.replace(/\^\s*\\circ/g, '°');

  // For inline $...$ blocks that do NOT contain complex 2D structures (\frac, \sqrt, \int, \sum, \lim, \begin, \matrix),
  // convert them directly into pure, elegant Unicode and strip the $ delimiters!
  s = s.replace(/\$([^\$\n]+?)\$/g, (fullMatch, inner) => {
    if (/\\(?:frac|sqrt|int|sum|lim|prod|begin|matrix|pmatrix|bmatrix|binom|overline|underline)/.test(inner)) {
      return fullMatch;
    }
    return convertSimpleLatexInnerToUnicode(inner);
  });

  // Also clean any leftover bare commands outside $...$ blocks
  const parts = s.split(/(\$[^\$\n]+?\$)/g);
  for (let i = 0; i < parts.length; i += 2) {
    parts[i] = parts[i]
      .replace(/\\(?:text|mathrm|mathbf)\{([^{}]*)\}/g, '$1')
      .replace(/\\circ/g, '°')
      .replace(/\\times/g, '×')
      .replace(/\\div/g, '÷')
      .replace(/\\pm/g, '±')
      .replace(/\\approx/g, '≈')
      .replace(/\\infty/g, '∞')
      .replace(/\\Delta/g, 'Δ')
      .replace(/\\Omega/g, 'Ω')
      .replace(/\\rightarrow/g, '→')
      .replace(/\\rightleftharpoons/g, '⇌')
      .replace(/\\implies/g, '⇒');
  }

  return parts.join('');
}

function renderMathOrText(text: string): React.ReactNode {
  if (!text) return text;

  // Pre-sanitize: convert simple LaTeX patterns to clean Unicode
  let cleaned = sanitizeLatexToUnicode(text);
  
  // Normalize LaTeX parenthetical and bracket delimiters \(...\) and \[...\]
  cleaned = cleaned.replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');
  cleaned = cleaned.replace(/\\\[([\s\S]*?)\\\]/g, '$$$1$$');

  // Convert double-dollar $$...$$ blocks to $...$ for safe inline KaTeX rendering
  cleaned = cleaned.replace(/\$\$([\s\S]+?)\$\$/g, '$$$1$$');

  // Strip OCR artifacts and non-printable control characters
  cleaned = cleaned.replace(/[\u0000-\u0008\u000B-\u001F\uFFFD]/g, '');

  // Normalize LaTeX arrow typo spaces systematically
  cleaned = cleaned.replace(/\\long right arrow/gi, '\\longrightarrow')
                   .replace(/\\right arrow/gi, '\\rightarrow')
                   .replace(/\\Right arrow/gi, '\\Rightarrow')
                   .replace(/\\Left right arrow/gi, '\\Leftrightarrow')
                   .replace(/\\left right arrow/gi, '\\leftrightarrow')
                   .replace(/\\rightArrow/g, '\\rightarrow')
                   .replace(/\\LeftrightArrow/g, '\\Leftrightarrow')
                   .replace(/\\RightArrow/g, '\\Rightarrow');

  // Auto-wrap raw unwrapped LaTeX fractions and roots
  cleaned = cleaned.replace(/(?<!\$)\\frac\{[^{}]+\}\{[^{}]+\}(?!\$)/g, '$$$&$$');
  cleaned = cleaned.replace(/(?<!\$)\\sqrt\{[^{}]+\}(?!\$)/g, '$$$&$$');

  // Auto-wrap raw unwrapped common scientific & math commands
  cleaned = cleaned.replace(
    /(?<!\$)\\(lim|int|sum|vec|mathbf|alpha|beta|gamma|theta|lambda|pi|sigma|omega|Delta|Omega|times|div|pm|leq|geq|neq|approx|rightleftharpoons|rightarrow|longrightarrow|partial)(?:_\{[^}]+\}|_[a-zA-Z0-9]+|\^\{[^}]+\}|\^[a-zA-Z0-9]+|\{[^}]+\}|[a-zA-Z0-9\s=\+\-\/\(\)]*?)(?=\s*[,\.]?(?:\s|$|\$))/g,
    (m) => '$$' + m.trim() + '$$'
  );

  // Match $...$ or caret powers like b^2, x^3, (a+b)^2, sp^3, sp^2
  const mathRegex = /(\$([^\$\n]+?)\$|\b(?:sp\^[23]|sp|m_[ls]|[a-zA-Z0-9\(\)]+\^(?:\{[^\}]+\}|-?[0-9a-zA-Z]+)))/g;
  if (!mathRegex.test(cleaned)) {
    return cleaned;
  }
  mathRegex.lastIndex = 0;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = mathRegex.exec(cleaned)) !== null) {
    if (match.index > lastIndex) {
      elements.push(cleaned.substring(lastIndex, match.index));
    }
    const token = match[0];
    const mathContent = match[2] !== undefined ? match[2].trim() : token;

    elements.push(
      <span key={`math-inline-${match.index}`} className="inline font-medium mx-0.5 break-words">
        <InlineMath
          math={safeMathString(mathContent)}
          renderError={() => <span>{convertSimpleLatexInnerToUnicode(mathContent)}</span>}
        />
      </span>
    );
    lastIndex = mathRegex.lastIndex;
  }

  if (lastIndex < cleaned.length) {
    elements.push(cleaned.substring(lastIndex));
  }

  return elements.length > 0 ? elements : cleaned;
}

function renderSingleRichLine(content: string): React.ReactNode {
  if (!content) return null;

  // Pattern matches:
  // 1. <u>**...**</u> or <u>...</u> or <ins>...</ins>
  // 2. **...**
  // 3. *...*
  // 4. (Synonym), (Antonym), (Antonyms)
  const tokenRegex = /(<u>(?:\*\*)?[\s\S]*?(?:\*\*)?<\/u>|<ins>(?:\*\*)?[\s\S]*?(?:\*\*)?<\/ins>|\*\*[\s\S]*?\*\*|\*[^*\n]+?\*|\((?:Synonym|Antonym|Antonyms|synonym|antonym|antonyms)\))/g;

  const parts = content.split(tokenRegex);
  if (parts.length <= 1) {
    return renderMathOrText(content);
  }

  return parts.map((part, index) => {
    if (!part) return null;

    // 1. Underline / Distinct Target Word: <u>**WORD**</u> or <u>WORD</u>
    if (/^(?:<u>|<ins>)[\s\S]*(?:<\/u>|<\/ins>)$/i.test(part)) {
      const innerText = part
        .replace(/^<u(?:>|\s+[^>]*>)|^<ins(?:>|\s+[^>]*>)/i, '')
        .replace(/<\/u>$|<\/ins>$/i, '')
        .replace(/\*\*/g, '')
        .trim();

      return (
        <span
          key={index}
          className="inline-flex items-baseline font-bold underline decoration-2 decoration-amber-500 dark:decoration-amber-400 underline-offset-4 text-amber-950 dark:text-amber-100 bg-amber-100/90 dark:bg-amber-950/70 px-1.5 py-0.5 mx-0.5 rounded border border-amber-300/80 dark:border-amber-700/60 tracking-wider shadow-2xs select-text transition-colors"
          title="Target Vocabulary Word"
        >
          {renderMathOrText(innerText)}
        </span>
      );
    }

    // 2. Bold text: **WORD**
    if (/^\*\*[\s\S]*\*\*$/.test(part)) {
      const innerText = part.slice(2, -2);
      const cleanLower = innerText.trim().toLowerCase();

      // Negative emphasis like "does NOT fit"
      if (cleanLower === 'not') {
        return (
          <span
            key={index}
            className="inline-flex items-center font-black text-xs px-1.5 py-0.5 mx-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 uppercase tracking-wider"
          >
            {innerText}
          </span>
        );
      }

      // Logical Reasoning keywords: Statement, Deduction, Assumption, Conclusion
      if (cleanLower.startsWith('statement')) {
        return (
          <span
            key={index}
            className="inline-flex items-center font-bold text-xs px-1.5 py-0.5 mx-0.5 rounded bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80"
          >
            {innerText}
          </span>
        );
      }

      if (cleanLower.startsWith('deduction')) {
        return (
          <span
            key={index}
            className="inline-flex items-center font-bold text-xs px-1.5 py-0.5 mx-0.5 rounded bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80"
          >
            {innerText}
          </span>
        );
      }

      if (cleanLower.startsWith('assumption')) {
        return (
          <span
            key={index}
            className="inline-flex items-center font-bold text-xs px-1.5 py-0.5 mx-0.5 rounded bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/80"
          >
            {innerText}
          </span>
        );
      }

      if (cleanLower.startsWith('conclusion')) {
        return (
          <span
            key={index}
            className="inline-flex items-center font-bold text-xs px-1.5 py-0.5 mx-0.5 rounded bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80"
          >
            {innerText}
          </span>
        );
      }

      // Quantitative Comparison tokens
      if (cleanLower.startsWith('quantity')) {
        return (
          <span
            key={index}
            className="inline-flex items-center font-bold text-xs px-1.5 py-0.5 mx-0.5 rounded bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80"
          >
            {innerText}
          </span>
        );
      }

      // Answer & Explanation markers
      if (cleanLower.startsWith('answer:')) {
        return (
          <span key={index} className="font-bold text-emerald-700 dark:text-emerald-400">
            {innerText}
          </span>
        );
      }
      if (cleanLower.startsWith('explanation:')) {
        return (
          <span key={index} className="font-bold text-blue-700 dark:text-blue-400">
            {innerText}
          </span>
        );
      }

      return (
        <strong key={index} className="font-bold text-slate-900 dark:text-white">
          {renderMathOrText(innerText)}
        </strong>
      );
    }

    // 3. Italic text: *WORD*
    if (/^\*[^*\n]+\*$/.test(part)) {
      const innerText = part.slice(1, -1);
      return (
        <em key={index} className="italic text-slate-800 dark:text-slate-200">
          {renderMathOrText(innerText)}
        </em>
      );
    }

    // 4. Vocabulary Relationship Badges: (Synonym) / (Antonym)
    if (/^\((?:Synonym|Antonym|Antonyms|synonym|antonym|antonyms)\)$/i.test(part)) {
      const isSyn = /synonym/i.test(part);
      return (
        <span
          key={index}
          className={`inline-flex items-center text-[11px] font-extrabold uppercase px-2 py-0.5 mx-1 rounded-full border shadow-2xs tracking-wider ${
            isSyn
              ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/80'
              : 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-700/80'
          }`}
        >
          {part.replace(/[\(\)]/g, '').toUpperCase()}
        </span>
      );
    }

    return renderMathOrText(part);
  });
}

/**
 * Renders inline markdown: distinct underlines <u>...</u>, bold **...**, italics *...*,
 * math expressions via KaTeX, sleek badges, and multi-line option text rows.
 */
export function renderRichInline(content: string): React.ReactNode {
  if (!content) return null;

  // Clean out redundant "Choice A:" or "Option A:" prefixes if followed by math/text
  let cleanedContent = content.replace(/^(?:Choice|Option)\s+[A-D]:\s*/i, '');

  if (cleanedContent.includes('\n')) {
    const lines = cleanedContent.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length > 1) {
      return (
        <span className="flex flex-col gap-1 w-full text-left">
          {lines.map((line, idx) => (
            <span key={idx} className="block leading-relaxed">
              {renderSingleRichLine(line)}
            </span>
          ))}
        </span>
      );
    }
  }

  return renderSingleRichLine(cleanedContent);
}

export const FormattedQuestionText: React.FC<FormattedQuestionTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Split text by lines and identify markdown table blocks
  const rawLines = text.split(/\r?\n/);
  const segments: TextSegment[] = [];
  let currentTextLines: string[] = [];
  let currentTableLines: string[] = [];
  let inTable = false;

  const flushText = () => {
    if (currentTextLines.length > 0) {
      const content = currentTextLines.join('\n').trim();
      if (content) {
        segments.push({ type: 'text', content });
      }
      currentTextLines = [];
    }
  };

  const flushTable = () => {
    if (currentTableLines.length > 0) {
      const tableData = parseMarkdownTable(currentTableLines);
      if (tableData) {
        segments.push({ type: 'table', data: tableData });
      } else {
        // Fallback: couldn't parse as table, keep as text
        segments.push({ type: 'text', content: currentTableLines.join('\n') });
      }
      currentTableLines = [];
    }
  };

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const isPipeLine = line.trim().startsWith('|');

    if (isPipeLine) {
      if (!inTable) {
        flushText();
        inTable = true;
      }
      currentTableLines.push(line);
    } else {
      if (inTable) {
        flushTable();
        inTable = false;
      }
      currentTextLines.push(line);
    }
  }

  if (inTable) {
    flushTable();
  } else {
    flushText();
  }

  // If no markdown tables detected, render text with inline rich formatting
  if (!segments.some(s => s.type === 'table')) {
    return (
      <div className={`whitespace-pre-line leading-relaxed break-words [overflow-wrap:anywhere] max-w-full overflow-hidden ${className}`}>
        {renderRichInline(text)}
      </div>
    );
  }

  return (
    <div className={`space-y-3 leading-relaxed break-words [overflow-wrap:anywhere] max-w-full overflow-hidden ${className}`}>
      {segments.map((segment, idx) => {
        if (segment.type === 'text') {
          return (
            <p key={idx} className="whitespace-pre-line break-words [overflow-wrap:anywhere] max-w-full">
              {renderRichInline(segment.content)}
            </p>
          );
        }

        const { headers, alignments, rows } = segment.data;

        return (
          <div
            key={idx}
            className="my-3.5 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 shadow-xs"
          >
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700">
                  {headers.map((h, hIdx) => {
                    const align = alignments[hIdx] || 'left';
                    const alignClass =
                      align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
                    return (
                      <th
                        key={hIdx}
                        scope="col"
                        className={`px-3.5 py-2.5 sm:px-4 sm:py-3 font-semibold text-slate-800 dark:text-slate-100 tracking-wide select-none ${alignClass}`}
                      >
                        {renderRichInline(h)}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="even:bg-slate-50/60 dark:even:bg-slate-800/30 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition-colors"
                  >
                    {row.map((cell, cIdx) => {
                      const align = alignments[cIdx] || 'left';
                      const alignClass =
                        align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
                      const isNumberCol = cIdx === 0 && /^(\d{1,2}|[IVX]+|[A-D])\.?$/.test(cell.trim());

                      return (
                        <td
                          key={cIdx}
                          className={`px-3.5 py-2.5 sm:px-4 sm:py-3 text-slate-700 dark:text-slate-300 align-top ${alignClass} ${
                            isNumberCol ? 'font-semibold text-slate-900 dark:text-slate-100 w-12 sm:w-16' : ''
                          }`}
                        >
                          {renderRichInline(cell)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
