const fs = require('fs');
let file = 'src/pages/Exams.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(
  /const \[selectedSubject, setSelectedSubject\] = useState<string>\('all'\);/,
  "const [selectedSubject, setSelectedSubject] = useState<string>('all');\n  const [selectedGrade, setSelectedGrade] = useState<string>(user?.grade_id || 'all');"
);

fs.writeFileSync(file, content);
console.log('Fixed Exams state');
