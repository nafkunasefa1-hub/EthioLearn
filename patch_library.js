const fs = require('fs');
let file = 'src/pages/Library.tsx';
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
  /const filteredBooks = books\.filter\(b => \{([\s\S]*?)return true;\n  \}\);/,
  `const filteredBooks = books.filter(b => {
    if (selectedGrade === 'grade-12-natural') {
      if (!NATURAL_SUBJECTS.includes(b.subject_id)) return false;
      if (!['grade-9', 'grade-10', 'grade-11', 'grade-12-natural'].includes(b.grade_id)) return false;
    } else if (selectedGrade === 'grade-12-social') {
      if (!SOCIAL_SUBJECTS.includes(b.subject_id)) return false;
      if (!['grade-9', 'grade-10', 'grade-11', 'grade-12-social'].includes(b.grade_id)) return false;
    } else if (selectedGrade !== 'all') {
      if (b.grade_id !== selectedGrade) return false;
    }

    if (selectedSubject !== 'all' && b.subject_id !== selectedSubject) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        b.title.toLowerCase().includes(q) ||
        (b.short_note && b.short_note.toLowerCase().includes(q)) ||
        (b.description && b.description.toLowerCase().includes(q))
      );
    }
    return true;
  });`
);

content = content.replace(
  /const filteredBooks = books\.filter\(b => \{/,
  effectPatch + '\n  const filteredBooks = books.filter(b => {'
);

fs.writeFileSync(file, content);
console.log('Library patched');
