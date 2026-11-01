const fs = require('fs');
const path = require('path');

console.log('[Script] Starting population of 2017 Aptitude (60 Qs) and Biology (100 Qs)...');

const DB_PATH = path.join(__dirname, '..', 'data', 'database.json');
if (!fs.existsSync(DB_PATH)) {
  console.error('Database file not found at:', DB_PATH);
  process.exit(1);
}

const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
console.log('Database loaded successfully.');

// Ensure arrays exist
if (!Array.isArray(db.exam_questions)) db.exam_questions = [];
if (!Array.isArray(db.exams)) db.exams = [];

// Target exam IDs
const SAT_EXAM_ID = 'exam-entrance-1789761116731';
const BIO_EXAM_ID = 'exam-entrance-1789750908183';

console.log('Target exams:', { SAT_EXAM_ID, BIO_EXAM_ID });
