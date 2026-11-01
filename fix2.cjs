const fs = require('fs');
let content = fs.readFileSync('src/components/ChapterShortNoteViewer.tsx', 'utf8');
content = content.replace(
  `  onSelectChapter,
  theme = "dark": (chapterNumber: number) => void;
  theme?: "light" | "sepia" | "dark";`,
  `  onSelectChapter: (chapterNumber: number) => void;
  theme?: "light" | "sepia" | "dark";`
);
fs.writeFileSync('src/components/ChapterShortNoteViewer.tsx', content);
