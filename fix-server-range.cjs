const fs = require('fs');
const file = 'server.ts';
let content = fs.readFileSync(file, 'utf8');

const target = `  if (isDownload) {
    res.setHeader('Content-Disposition', \`attachment; filename="\${filename}"\`);
  } else {
    res.setHeader('Content-Disposition', \`inline; filename="\${filename}"\`);
  }

  const stream = fs.createReadStream(pdfPath);
  stream.pipe(res);`;

const replacement = `  if (isDownload) {
    res.setHeader('Content-Disposition', \`attachment; filename="\${filename}"\`);
  } else {
    res.setHeader('Content-Disposition', \`inline; filename="\${filename}"\`);
  }

  // Use sendFile to automatically support HTTP Range requests for fast PDF streaming
  res.sendFile(pdfPath);`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Fixed server.ts range requests');
} else {
  console.log('Target not found in server.ts');
}
