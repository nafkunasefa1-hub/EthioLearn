const http = require('http');

function post(path, body) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const req = http.request(`http://localhost:3000${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'x-user-id': 'usr-student-premium'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data });
        }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

(async () => {
  console.log('--- Test 1: Natural Science Query (Physics: Centripetal force & circular motion) ---');
  const t1 = Date.now();
  const res1 = await post('/api/ai/ask', {
    question: 'Explain centripetal acceleration and what force keeps a car moving in a circular curve.',
    subject_id: 'subj-phys',
    grade_id: 'grade-12'
  });
  console.log(`Response time: ${((Date.now() - t1) / 1000).toFixed(1)}s, status: ${res1.status}`);
  if (res1.data) {
    console.log('Answer preview:', res1.data.answer?.slice(0, 150));
    console.log('Textbook citations:', (res1.data.sources || []).map(s => `${s.book_title} (p. ${s.printed_page_number}, ${s.chapter_title})`));
    console.log('Related EUEE questions count:', (res1.data.related_exam_questions || []).length);
    if (res1.data.related_exam_questions?.length > 0) {
      console.log('  EUEE sample:', res1.data.related_exam_questions[0].question_text.slice(0, 80));
      console.log('  EUEE subject:', res1.data.related_exam_questions[0].subject_id);
    }
    console.log('AI Practice questions count:', (res1.data.ai_practice_questions || []).length);
    (res1.data.ai_practice_questions || []).forEach((q, idx) => {
      console.log(`  AI Q${idx + 1}: ${q.question_text.slice(0, 60)}... Ans: ${q.correct_answer}`);
    });
  }

  console.log('\n--- Test 2: Non-EUEE Subject Query (Information Technology: Database normalization) ---');
  const t2 = Date.now();
  const res2 = await post('/api/ai/ask', {
    question: 'What is database normalization and what is the difference between 1NF and 2NF in relational databases?',
    subject_id: 'subj-it',
    grade_id: 'grade-11'
  });
  console.log(`Response time: ${((Date.now() - t2) / 1000).toFixed(1)}s, status: ${res2.status}`);
  if (res2.data) {
    console.log('Answer preview:', res2.data.answer?.slice(0, 150));
    console.log('Related EUEE questions count for IT:', (res2.data.related_exam_questions || []).length);
    console.log('AI Practice questions count for IT:', (res2.data.ai_practice_questions || []).length);
  }

  console.log('\n--- Test 3: Non-EUEE Subject Query (Civics: Ethiopian constitutional principles) ---');
  const t3 = Date.now();
  const res3 = await post('/api/ai/ask', {
    question: 'What are the fundamental principles of the FDRE Constitution regarding rule of law and human rights?',
    subject_id: 'subj-civ',
    grade_id: 'grade-10'
  });
  console.log(`Response time: ${((Date.now() - t3) / 1000).toFixed(1)}s, status: ${res3.status}`);
  if (res3.data) {
    console.log('Related EUEE questions count for Civics:', (res3.data.related_exam_questions || []).length);
    console.log('AI Practice questions count for Civics:', (res3.data.ai_practice_questions || []).length);
  }
})();
