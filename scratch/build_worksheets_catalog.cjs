const fs = require('fs');
const path = require('path');

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '')
    .replace(/\bBY HABTAMU J\. PHYSICS SUMMER PROGRAM IN 2016\b/gi, '')
    .replace(/\bOROMIA EDUCATIONAL BUREAU\b/gi, '')
    .replace(/\bARSI UNIVERSITY\b/gi, '')
    .replace(/\bPHYSICS WORKSHEET WITH\s+SOLUTIONS FOR GRADE 12 IN\s+SUMMER PROGRAM\b/gi, '')
    .replace(/\bBY HABTAMU J\.\s+DATE 13\/12\/2016\b/gi, '')
    .replace(/\bIFA BORU\s+SPECIAL BOARDING SECONDARY SCHOOL\b/gi, '')
    .replace(/\bOROMIA IFA BORU SPECIAL BOARDING SCHOOL@2016\b/gi, '')
    .replace(/Follow Us On:[\s\S]*?Telegram:[^\n]*/gi, '')
    .replace(/CHEMISTRY WORKSHEET FOR GRADE \(9-11\)[\s\S]*?ORGANIC COMPOUNDS\]/gi, '')
    .replace(/Thermal Physics Worksheet[\s\S]*?Asella, Ethiopia/gi, '')
    .replace(/Static and Current Electricity\s+Worksheet[\s\S]*?Asella, Ethiopia/gi, '')
    .replace(/Nuclear Physics\s+Worksheet[\s\S]*?Asella, Ethiopia/gi, '')
    .replace(/^\s*\d+\s*$/gm, '')
    .replace(/\r/g, '')
    .trim();
}

function parseBlocks(filename, maxCount) {
  const content = fs.readFileSync(path.join(__dirname, filename), 'utf8');
  const lines = content.split('\n');
  const questions = [];
  let cur = null;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const m = l.match(/^\s*([1-9]\d{0,2})[\.:]\s*(.*)$/);
    if (m && parseInt(m[1]) <= maxCount) {
      const num = parseInt(m[1]);
      if (!cur || num === cur.num + 1 || (num > cur.num && num <= cur.num + 2)) {
        if (cur) questions.push(cur);
        cur = { num, lines: [m[2]] };
        continue;
      }
    }
    if (cur) cur.lines.push(l);
  }
  if (cur) questions.push(cur);
  return questions;
}

console.log('Building worksheets catalog...');
