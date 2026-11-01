const fs = require('fs');
const file = 'server.ts';
let content = fs.readFileSync(file, 'utf8');

const target = `const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'receipt') {
      cb(null, PRIVATE_RECEIPTS_DIR);
    } else if (file.fieldname === 'book_pdf') {
      cb(null, PRIVATE_BOOKS_DIR);`;

const replacement = `const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'receipt') {
      cb(null, PRIVATE_RECEIPTS_DIR);
    } else if (file.fieldname === 'chunk') {
      cb(null, CHUNKS_DIR);
    } else if (file.fieldname === 'book_pdf') {
      cb(null, PRIVATE_BOOKS_DIR);`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Fixed multer destination');
} else {
  console.log('Could not find multer destination logic');
}
