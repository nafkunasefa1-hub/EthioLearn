const fs = require('fs');
const css = `
.theme-light {
  --bg-canvas: #f1f5f9;
  --bg-paper: #ffffff;
  --text-main: #0f172a;
  --text-heading: #020617;
  --text-muted: #475569;
  --border-light: #e2e8f0;
  --border-medium: #cbd5e1;
  --bg-card: #f8fafc;
  --bg-card-hover: #f1f5f9;
}

.theme-sepia {
  --bg-canvas: #e8e3d8;
  --bg-paper: #fcf7ed;
  --text-main: #433422;
  --text-heading: #2b1f12;
  --text-muted: #786650;
  --border-light: #e6dcce;
  --border-medium: #dcd0bc;
  --bg-card: #f4ebd9;
  --bg-card-hover: #efe3cb;
}

.theme-dark {
  --bg-canvas: #020617;
  --bg-paper: #0f172a;
  --text-main: #e2e8f0;
  --text-heading: #ffffff;
  --text-muted: #94a3b8;
  --border-light: #1e293b;
  --border-medium: #334155;
  --bg-card: #1e293b;
  --bg-card-hover: #334155;
}
`;
fs.appendFileSync('src/index.css', css);
console.log('CSS appended!');
