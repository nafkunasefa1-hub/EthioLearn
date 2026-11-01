const fs = require('fs');
let file = 'src/pages/Exams.tsx';
let content = fs.readFileSync(file, 'utf-8');
content = content.replace(
  /const canAccess = isFree \|\| user\?\.is_premium \|\| \(exam\.grade_id \? hasGradeAccess\(exam\.grade_id\) : hasGradeAccess\('grade-12-natural'\)\) \|\| user\?\.role === 'admin';/g,
  "const canAccess = isFree || (exam.grade_id ? hasGradeAccess(exam.grade_id) : hasGradeAccess('grade-12-natural'));"
);
fs.writeFileSync(file, content);
