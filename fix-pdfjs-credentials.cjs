const fs = require('fs');
const file = 'src/components/PdfCanvasViewer.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `        const loadingTask = pdfjs.getDocument({ 
          url: pdfUrl, 
          withCredentials: true 
        });`;

const replacement = `        const loadingTask = pdfjs.getDocument({ 
          url: pdfUrl 
        });`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Removed withCredentials');
}
