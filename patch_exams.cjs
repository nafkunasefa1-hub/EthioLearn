const fs = require('fs');
let file = 'src/pages/Exams.tsx';
let content = fs.readFileSync(file, 'utf-8');

const effectPatch = `  useEffect(() => {
    if (user?.grade_id) {
      setSelectedGrade(user.grade_id);
    }
  }, [user?.grade_id]);

  const NATURAL_SUBJECTS = ['subj-math', 'subj-phys', 'subj-eng', 'subj-bio', 'subj-chem', 'subj-apt'];
  const SOCIAL_SUBJECTS = ['subj-math', 'subj-eng', 'subj-sat', 'subj-geog', 'subj-hist', 'subj-econ'];
`;

content = content.replace(
  /const filteredExams = exams\.filter\(e => \{([\s\S]*?)return true;\n  \}\);/,
  `const filteredExams = exams.filter(e => {
    if (activeCategory !== 'ALL' && activeCategory !== 'BY_CATEGORY') {
      const examCategory = e.category || 'ENTRANCE';
      if (examCategory !== activeCategory) return false;
    }
    if (selectedSeries !== 'all') {
      const series = e.exam_series || (e.category === 'MODEL' ? 'Regional Model Examinations' : 'National EUEE Exams');
      if (series.toLowerCase() !== selectedSeries.toLowerCase()) return false;
    }

    if (selectedGrade === 'grade-12-natural') {
      if (!NATURAL_SUBJECTS.includes(e.subject_id)) return false;
      if (!['grade-9', 'grade-10', 'grade-11', 'grade-12-natural'].includes(e.grade_id)) return false;
    } else if (selectedGrade === 'grade-12-social') {
      if (!SOCIAL_SUBJECTS.includes(e.subject_id)) return false;
      if (!['grade-9', 'grade-10', 'grade-11', 'grade-12-social'].includes(e.grade_id)) return false;
    } else if (selectedGrade !== 'all') {
      if (e.grade_id !== selectedGrade) return false;
    }

    if (selectedSubject !== 'all' && e.subject_id !== selectedSubject) return false;
    if (selectedYear !== 'all' && e.ethiopian_year !== selectedYear && e.year.toString() !== selectedYear) return false;
    return true;
  });`
);

content = content.replace(
  /const filteredExams = exams\.filter\(e => \{/,
  effectPatch + '\n  const filteredExams = exams.filter(e => {'
);

fs.writeFileSync(file, content);
console.log('Exams patched');
