const fs = require('fs');
const file = 'src/pages/BookViewer.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `          {/* Upload / Replace with My PDF */}
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition bg-emerald-950/80 text-emerald-300 border-emerald-800/60 hover:bg-emerald-900"
            title="Upload your PDF file for this textbook"
          >
            <Upload className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Upload PDF</span>
          </button>`;

const replacement = `          {/* Upload / Replace with My PDF */}
          {user?.role === 'admin' && (
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition bg-emerald-950/80 text-emerald-300 border-emerald-800/60 hover:bg-emerald-900"
              title="Upload your PDF file for this textbook"
            >
              <Upload className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Upload PDF</span>
            </button>
          )}`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Upload button hidden for students!');
} else {
  console.log('Target string not found.');
}
