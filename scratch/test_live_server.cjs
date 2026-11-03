const http = require('http');

function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(`http://localhost:3000${path}`, options, (res) => {
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
    if (options.body) {
      req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
    }
    req.end();
  });
}

(async () => {
  console.log('Testing server health...');
  try {
    const health = await request('/api/health');
    console.log('Health:', health.status);

    console.log('\nTesting Exams list...');
    const examsRes = await request('/api/exams', {
      headers: { 'x-user-id': 'usr-student-premium' }
    });
    console.log('Exams status:', examsRes.status);
    if (Array.isArray(examsRes.data)) {
      console.log('Total exams returned:', examsRes.data.length);
      const worksheets = examsRes.data.filter(e => e.category === 'WORKSHEET' || e.id.startsWith('ws-'));
      console.log('Worksheet exams found:', worksheets.length);
      worksheets.forEach(w => {
        console.log(`  - [${w.id}] ${w.title} (${w.total_questions} questions)`);
      });
    }

    console.log('\nTesting Questions for each worksheet:');
    const wsIds = [
      'ws-grade-12-phys-arsiu',
      'ws-grade-11-chem-ifaboru',
      'ws-grade-11-phys-thermal',
      'ws-grade-11-phys-electricity',
      'ws-grade-12-phys-nuclear'
    ];

    let totalWsQuestions = 0;
    for (const id of wsIds) {
      const qRes = await request(`/api/exams/${id}/questions`, {
        headers: { 'x-user-id': 'usr-student-premium' }
      });
      const qCount = Array.isArray(qRes.data) ? qRes.data.length : 0;
      totalWsQuestions += qCount;
      console.log(`  Exam ${id} questions: ${qCount}`);
      if (Array.isArray(qRes.data) && qRes.data.length > 0) {
        const first = qRes.data[0];
        console.log(`    Q1: "${first.question_text.slice(0, 50)}..." Ans: ${first.correct_answer}`);
      }
    }
    console.log('Total worksheet questions across all 5 exams:', totalWsQuestions);

  } catch (err) {
    console.error('Test error:', err.message);
  }
})();
