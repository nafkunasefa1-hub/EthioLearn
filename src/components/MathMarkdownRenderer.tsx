import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { Table as TableIcon } from 'lucide-react';
import { sanitizeLatexToUnicode } from './FormattedQuestionText';

interface MathMarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Normalization Pipeline:
 * Fixes some common formatting issues from AI text.
 */
function normalizeContent(raw: string): string {
  if (!raw) return '';
  let str = sanitizeLatexToUnicode(raw);
  
  // 1. Unescape literal escaped dollar signs \$ to $ (do NOT touch $$ display math)
  str = str.replace(/\\\$/g, '$');

  // 2. Convert standard parenthetical inline math \( ... \) to $...$ and \[ ... \] to $$...$$
  str = str.replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');
  str = str.replace(/\\\[([\s\S]*?)\\\]/g, '$$$$$1$$$$');

  // 3. For any raw unwrapped LaTeX, ONLY wrap in text segments outside existing math blocks
  // This prevents breaking existing $$...$$ multi-term equations like \frac{m_1}{m_2} = \frac{E_1}{E_2}
  const parts = str.split(/(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g);
  for (let i = 0; i < parts.length; i++) {
    // Even indices are strictly OUTSIDE existing math blocks
    if (i % 2 === 0) {
      let segment = parts[i];
      // Auto-wrap raw unwrapped LaTeX fractions
      segment = segment.replace(/\\frac\{[^{}]+\}\{[^{}]+\}/g, '$$$&$$');
      // Auto-wrap raw unwrapped LaTeX square roots
      segment = segment.replace(/\\sqrt\{[^{}]+\}/g, '$$$&$$');
      // Auto-wrap raw unwrapped vectors and greek letters
      segment = segment.replace(/\\(vec\{[a-zA-Z]\}|mathbf\{[a-zA-Z0-9]+\}|theta|alpha|beta|lambda|Delta)\b/g, '$$$&$$');
      parts[i] = segment;
    }
  }
  str = parts.join('');

  // 4. Clean legacy ASCII diagram slash blocks into clean structured callouts
  str = str.replace(/```diagram\n([\s\S]+?)```/g, '\n> **Visual Diagram / Schematic**\n> ```text\n$1\n```\n');

  return str;
}

export const MathMarkdownRenderer: React.FC<MathMarkdownRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  const normalized = normalizeContent(content);

  // Custom components for react-markdown with native GFM table & visual diagram support
  const markdownComponents = {
    p: ({ children }: any) => (
      <p className="mb-3 last:mb-0 leading-relaxed text-slate-200">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="my-2.5 ml-5 list-disc space-y-1.5 text-slate-200">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="my-2.5 ml-5 list-decimal space-y-1.5 text-slate-200">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="leading-relaxed text-slate-200">
        {children}
      </li>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-emerald-300">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-teal-200">
        {children}
      </em>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-base sm:text-lg font-bold text-white mb-2 mt-4 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-sm sm:text-base font-bold text-emerald-200 mb-2 mt-3 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xs sm:text-sm font-bold text-indigo-300 mb-1.5 mt-2.5 first:mt-0">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-3 border-l-4 border-emerald-500 bg-emerald-950/25 pl-4 py-2.5 pr-3 rounded-r-xl text-emerald-100 text-xs sm:text-sm leading-relaxed shadow-sm">
        {children}
      </blockquote>
    ),
    // GFM Table Support: Render clean, structured HTML tables with responsive styling
    table: ({ children }: any) => (
      <div className="my-4 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/90 shadow-xl">
        <div className="flex items-center justify-between px-3.5 py-2 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/60 border-b border-slate-800 text-[11px] text-slate-300">
          <div className="flex items-center gap-2">
            <TableIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-bold tracking-wider text-slate-200 uppercase text-[10px]">
              Data & Concept Table
            </span>
          </div>
          <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/70">
            Reference
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            {children}
          </table>
        </div>
      </div>
    ),
    thead: ({ children }: any) => (
      <thead className="bg-slate-900/90 border-b border-slate-800 text-slate-200 font-semibold text-[11px] uppercase tracking-wider">
        {children}
      </thead>
    ),
    tbody: ({ children }: any) => (
      <tbody className="divide-y divide-slate-800/80 text-slate-200">
        {children}
      </tbody>
    ),
    tr: ({ children }: any) => (
      <tr className="even:bg-slate-900/40 hover:bg-indigo-950/30 transition-colors">
        {children}
      </tr>
    ),
    th: ({ children, style }: any) => (
      <th
        style={style}
        className="px-4 py-3 text-slate-200 font-bold border-r border-slate-800/80 last:border-r-0 whitespace-nowrap select-none"
      >
        {children}
      </th>
    ),
    td: ({ children, style }: any) => (
      <td
        style={style}
        className="px-4 py-2.5 text-slate-300 align-top border-r border-slate-800/60 last:border-r-0 leading-relaxed"
      >
        {children}
      </td>
    ),
    // Image rendering with responsive container and caption
    img: ({ src, alt }: any) => (
      <div className="my-3 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/90 p-2 shadow-lg">
        <img
          src={src}
          alt={alt || 'Educational Illustration'}
          className="max-h-72 w-auto max-w-full mx-auto object-contain rounded"
          loading="lazy"
        />
        {alt && (
          <p className="mt-1.5 text-center text-xs text-slate-400 italic">
            {alt}
          </p>
        )}
      </div>
    ),
    // Clean Code / Derivation block rendering
    pre: ({ children }: any) => {
      return (
        <div className="my-3 rounded-xl border border-slate-800 bg-slate-950/95 overflow-hidden shadow-md">
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-300">
              Derivation / Formula
            </span>
          </div>
          <div className="p-3 overflow-x-auto">
            <pre className="font-mono text-xs sm:text-[13px] text-emerald-300 leading-relaxed tracking-wide select-all whitespace-pre">
              {children}
            </pre>
          </div>
        </div>
      );
    },
    code: ({ inline, className, children }: any) => {
      if (inline) {
        return (
          <code className="bg-slate-900 border border-slate-700/60 text-emerald-300 px-1.5 py-0.5 rounded text-[11px] font-mono">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    }
  };

  return (
    <div className={`markdown-body space-y-3 ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={markdownComponents as any}
      >
        {normalized}
      </Markdown>
    </div>
  );
};
