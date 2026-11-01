import { db } from '../server/db';
const examId = 'exam-entrance-1789625998133';
const questions = db.getExamQuestions(examId);
console.log(`Exam questions found: ${questions.length}`);
const stubs = questions.filter(q => q.explanation.includes('Official Ethiopian National Examination'));
console.log(`Stubs found: ${stubs.length}`);
