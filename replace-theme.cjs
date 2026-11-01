const fs = require('fs');

function replaceClasses(content) {
  return content
    .replace(/\bbg-slate-950\b/g, 'bg-[var(--bg-canvas)]')
    .replace(/\bbg-slate-900\b/g, 'bg-[var(--bg-paper)]')
    .replace(/\bbg-slate-800\b/g, 'bg-[var(--bg-card)]')
    .replace(/\bhover:bg-slate-800\b/g, 'hover:bg-[var(--bg-card-hover)]')
    .replace(/\btext-slate-100\b/g, 'text-[var(--text-main)]')
    .replace(/\btext-slate-200\b/g, 'text-[var(--text-main)]')
    .replace(/\btext-slate-300\b/g, 'text-[var(--text-muted)]')
    .replace(/\btext-slate-400\b/g, 'text-[var(--text-muted)]')
    .replace(/\bborder-slate-800\b/g, 'border-[var(--border-light)]')
    .replace(/\bborder-slate-700\b/g, 'border-[var(--border-medium)]')
    .replace(/\btext-white\b/g, 'text-[var(--text-heading)]');
}

['src/components/ChapterShortNoteViewer.tsx', 'src/components/DetailedShortNoteViewer.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = replaceClasses(content);
  fs.writeFileSync(file, content);
});
console.log('Classes replaced!');
