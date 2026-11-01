const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const newSubjects = [
  { id: 'subj-geog', name: 'Geography', code: 'GEOG', icon: 'Globe', color: 'from-green-600 to-emerald-700', description: 'Physical and human geography.' },
  { id: 'subj-hist', name: 'History', code: 'HIST', icon: 'BookOpen', color: 'from-amber-700 to-amber-900', description: 'World and Ethiopian history.' },
  { id: 'subj-econ', name: 'Economics', code: 'ECON', icon: 'TrendingUp', color: 'from-blue-500 to-cyan-600', description: 'Micro and macro economics.' },
  { id: 'subj-apt', name: 'Aptitude', code: 'APT', icon: 'Lightbulb', color: 'from-yellow-400 to-orange-500', description: 'Logical and quantitative reasoning.' }
];

for (const subj of newSubjects) {
  if (!db.subjects.find(s => s.id === subj.id)) {
    db.subjects.push(subj);
  }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('Updated subjects in database.json');
