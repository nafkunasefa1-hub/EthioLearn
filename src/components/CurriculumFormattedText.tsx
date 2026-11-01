import React from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface CurriculumFormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Maps common LaTeX commands to clean unicode characters for safe fallback
 */
function latexToUnicode(s: string): string {
  return s
    .replace(/\\vec\{([a-zA-Z])\}/g, '$1⃗')
    .replace(/\\vec\s*([a-zA-Z])/g, '$1⃗')
    .replace(/\\hat\{([a-zA-Z])\}/g, '$1̂')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\theta/g, 'θ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\pi/g, 'π')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\leq/g, '≤')
    .replace(/\\geq/g, '≥')
    .replace(/\\neq/g, '≠')
    .replace(/\\approx/g, '≈')
    .replace(/\\degree/g, '°')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\leftarrow/g, '←')
    .replace(/\\leftrightarrow/g, '↔')
    .replace(/\\rightleftharpoons/g, '⇌')
    .replace(/\\circ/g, '°')
    .replace(/\\infty/g, '∞')
    .replace(/\\/g, '')
    .replace(/[{}]/g, '')
    .replace(/\$/g, '');
}

/**
 * Normalizes math string for KaTeX rendering
 */
function sanitizeKatexString(raw: string): string {
  if (!raw) return '';
  let m = raw.trim();
  // Escape percent signs
  m = m.replace(/(?<!\\)%/g, '\\%');
  // Degree symbol fix
  m = m.replace(/\\degree/g, '^{\\circ}');
  // Arrow spacing
  m = m.replace(/\\long right arrow/gi, '\\longrightarrow')
       .replace(/\\right arrow/gi, '\\rightarrow')
       .replace(/\\Left right arrow/gi, '\\Leftrightarrow');
  return m;
}

/**
 * CurriculumFormattedText parses and renders text with embedded KaTeX formulas,
 * ensuring no raw LaTeX symbols, escaped dollar signs, or broken OCR artifacts leak to the UI.
 */
export const CurriculumFormattedText: React.FC<CurriculumFormattedTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // 1. Pre-process text to unescape any literal escaped dollar signs (do NOT touch $$)
  let clean = text.replace(/\\\$/g, '$');

  // Convert parenthetical LaTeX \( ... \) and \[ ... \] to $...$
  clean = clean.replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');
  clean = clean.replace(/\\\[([\s\S]*?)\\\]/g, '$$$1$$');

  // Convert double dollar $$...$$ to $...$ safely for inline KaTeX
  clean = clean.replace(/\$\$([\s\S]+?)\$\$/g, '$$$1$$');

  // Only auto-wrap unwrapped vector or Greek notation outside existing math blocks
  const parts = clean.split(/(\$[^\$\n]+?\$)/g);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      parts[i] = parts[i]
        .replace(/\\frac\{[^{}]+\}\{[^{}]+\}/g, '$$$&$$')
        .replace(/\\sqrt\{[^{}]+\}/g, '$$$&$$')
        .replace(/\\(vec\{[a-zA-Z]\}|mathbf\{[a-zA-Z0-9]+\}|theta|alpha|beta|lambda|Delta)\b/g, '$$$&$$');
    }
  }
  clean = parts.join('');

  // Regex to match $math$ or words with caret/subscript (e.g. A_x, A_y, sp^3, x^2)
  const mathTokenRegex = /(\$([^\$\n]+?)\$|(?:\b[A-Za-z]_[a-zA-Z0-9]+\b)|(?:\b[A-Za-z0-9]+\^[0-9a-zA-Z]+\b))/g;

  if (!mathTokenRegex.test(clean)) {
    // If no math tokens, also ensure no raw LaTeX commands like \vec or \theta remain in plain text
    if (/\\[a-zA-Z]/.test(clean)) {
      clean = latexToUnicode(clean);
    }
    return <span className={className}>{clean}</span>;
  }

  mathTokenRegex.lastIndex = 0;
  const nodes: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = mathTokenRegex.exec(clean)) !== null) {
    if (match.index > lastIdx) {
      const plainText = clean.substring(lastIdx, match.index);
      // Clean any stray backslashes or artifacts in plain text portion
      nodes.push(
        <span key={`text-${lastIdx}`}>
          {/\\[a-zA-Z]/.test(plainText) ? latexToUnicode(plainText) : plainText}
        </span>
      );
    }

    const matchedToken = match[0];
    let formulaContent = match[2] !== undefined ? match[2].trim() : matchedToken;

    // Check if formulaContent has subscript or caret without $
    if (!match[2] && (/_[a-zA-Z0-9]+/.test(formulaContent) || /\^[0-9a-zA-Z]+/.test(formulaContent))) {
      formulaContent = formulaContent.replace(/_([a-zA-Z0-9]+)/g, '_{$1}').replace(/\^([a-zA-Z0-9]+)/g, '^{$1}');
    }

    nodes.push(
      <span key={`math-${match.index}`} className="inline-block mx-0.5 font-medium text-emerald-300">
        <InlineMath
          math={sanitizeKatexString(formulaContent)}
          renderError={() => <span>{latexToUnicode(formulaContent)}</span>}
        />
      </span>
    );

    lastIdx = mathTokenRegex.lastIndex;
  }

  if (lastIdx < clean.length) {
    const remaining = clean.substring(lastIdx);
    nodes.push(
      <span key={`text-${lastIdx}`}>
        {/\\[a-zA-Z]/.test(remaining) ? latexToUnicode(remaining) : remaining}
      </span>
    );
  }

  return <span className={className}>{nodes}</span>;
};
