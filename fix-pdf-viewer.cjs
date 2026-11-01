const fs = require('fs');
const file = 'src/pages/BookViewer.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `            onOpenUploadModal={() => setIsUploadModalOpen(true)}`;
const replacement = `            onOpenUploadModal={user?.role === 'admin' ? () => setIsUploadModalOpen(true) : undefined}`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Passed onOpenUploadModal conditionally!');
} else {
  console.log('Target string not found.');
}
