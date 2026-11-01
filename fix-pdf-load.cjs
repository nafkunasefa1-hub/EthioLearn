const fs = require('fs');
const file = 'src/components/PdfCanvasViewer.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetLoad = `        const res = await apiFetch(pdfUrl);
        if (!res.ok) {
          throw new Error(\`HTTP \${res.status}: PDF document not found or unavailable.\`);
        }

        const buffer = await res.arrayBuffer();
        if (!isMounted) return;

        const loadingTask = pdfjs.getDocument({ data: new Uint8Array(buffer) });`;

const replacementLoad = `        const loadingTask = pdfjs.getDocument({ 
          url: pdfUrl, 
          withCredentials: true 
        });`;

content = content.replace(targetLoad, replacementLoad);

const targetRender1 = `        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = \`\${Math.floor(viewport.width)}px\`;
        canvas.style.height = \`\${Math.floor(viewport.height)}px\`;`;

const replacementRender1 = `        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = \`\${Math.floor(viewport.width)}px\`;
        canvas.style.height = 'auto';`;

// It appears twice (renderSinglePage and renderContinuousPage)
content = content.split(targetRender1).join(replacementRender1);

fs.writeFileSync(file, content);
console.log('Fixed PDF loading and rendering.');
