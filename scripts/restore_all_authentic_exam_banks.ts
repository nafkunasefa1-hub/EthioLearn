// scripts/restore_all_authentic_exam_banks.ts
import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { ExamQuestion } from '../src/types';

export function restoreAllAuthenticExamBanks() {
  console.log('=== [RESTORING AUTHENTIC EXAM QUESTION BANKS] ===');

  const bakPath = path.join(process.cwd(), 'data', 'database.json.bak');
  const bak = JSON.parse(fs.readFileSync(bakPath, 'utf8'));

  const extracted2016MathPath = path.join(process.cwd(), 'data', 'extracted_2016_math_questions.json');
  const math2016 = JSON.parse(fs.readFileSync(extracted2016MathPath, 'utf8'));

  // 1. 2017 Math (60 authentic questions)
  const math2017Bak = (bak.exam_questions || []).filter((q: any) => q.exam_id === 'exam-entrance-1789746619994');
  if (math2017Bak.length > 0) {
    console.log(`Restoring 2017 Mathematics (${math2017Bak.length} authentic questions)...`);
    db.clearExamQuestions('exam-entrance-1789746619994');
    const questionsToInsert = math2017Bak.map((q: any, idx: number) => ({
      ...q,
      question_number: idx + 1,
      options: [q.option_a, q.option_b, q.option_c, q.option_d]
    }));
    questionsToInsert.forEach((q: any) => db.addExamQuestion(q));
  }

  // 2. 2017 Biology (100 authentic questions)
  const bio2017Bak = (bak.exam_questions || []).filter((q: any) => q.exam_id === 'exam-entrance-1789750908183').slice(0, 100);
  if (bio2017Bak.length > 0) {
    console.log(`Restoring 2017 Biology (${bio2017Bak.length} authentic questions)...`);
    db.clearExamQuestions('exam-entrance-1789750908183');
    const questionsToInsert = bio2017Bak.map((q: any, idx: number) => ({
      ...q,
      question_number: idx + 1,
      options: [q.option_a, q.option_b, q.option_c, q.option_d]
    }));
    questionsToInsert.forEach((q: any) => db.addExamQuestion(q));
  }

  // 3. 2017 Physics (60 authentic questions)
  const phys2017Bak = (bak.exam_questions || []).filter((q: any) => q.exam_id === 'exam-entrance-1789754583713');
  if (phys2017Bak.length > 0) {
    console.log(`Restoring 2017 Physics (${phys2017Bak.length} authentic questions)...`);
    db.clearExamQuestions('exam-entrance-1789754583713');
    const questionsToInsert = phys2017Bak.map((q: any, idx: number) => ({
      ...q,
      question_number: idx + 1,
      options: [q.option_a, q.option_b, q.option_c, q.option_d]
    }));
    questionsToInsert.forEach((q: any) => db.addExamQuestion(q));
  }

  // 4. 2017 English (100 authentic questions with reading passages)
  const eng2017Bak = (bak.exam_questions || []).filter((q: any) => q.exam_id === 'exam-entrance-1789789754319');
  if (eng2017Bak.length > 0) {
    console.log(`Restoring 2017 English (${eng2017Bak.length} authentic questions with reading comprehension)...`);
    db.clearExamQuestions('exam-entrance-1789789754319');
    const questionsToInsert = eng2017Bak.map((q: any, idx: number) => ({
      ...q,
      question_number: idx + 1,
      options: [q.option_a, q.option_b, q.option_c, q.option_d]
    }));
    questionsToInsert.forEach((q: any) => db.addExamQuestion(q));
  }

  // 5. 2016 Math (60 authentic questions from extracted_2016_math_questions.json)
  if (Array.isArray(math2016) && math2016.length > 0) {
    console.log(`Restoring 2016 Mathematics (${math2016.length} authentic questions)...`);
    db.clearExamQuestions('exam-entrance-1789806810941');
    const questionsToInsert = math2016.map((q: any, idx: number) => ({
      ...q,
      id: `eq-2016-math-${idx + 1}`,
      exam_id: 'exam-entrance-1789806810941',
      question_number: idx + 1,
      options: [q.option_a, q.option_b, q.option_c, q.option_d]
    }));
    questionsToInsert.forEach((q: any) => db.addExamQuestion(q));
  }

  // 6. Ensure AI Generated Mathematics questions are legitimate with proper questions and options
  // Use variations of authentic math items instead of placeholder text
  const authenticMathQuestions = db.getExamQuestions('exam-entrance-1789625998133'); // 2018 Math
  const aiMathExams = ['exam-ai-math-advanced', 'exam-ai-math-practice', 'exam-ai-math-general'];
  aiMathExams.forEach((examId, eIdx) => {
    console.log(`Upgrading ${examId} with legitimate mathematics questions...`);
    db.clearExamQuestions(examId);
    const newQs = authenticMathQuestions.slice(0, 60).map((bm: any, i: number) => {
      const qNum = i + 1;
      return {
        id: `ai-math-${eIdx + 1}-q${qNum}`,
        exam_id: examId,
        question_number: qNum,
        question_text: `[Practice Problem ${qNum}]: ${bm.question_text}`,
        option_a: bm.option_a,
        option_b: bm.option_b,
        option_c: bm.option_c,
        option_d: bm.option_d,
        options: [bm.option_a, bm.option_b, bm.option_c, bm.option_d],
        correct_answer: bm.correct_answer,
        explanation: bm.explanation,
        topic_name: bm.topic_name || 'Mathematics Mastery',
        difficulty: bm.difficulty || 'Medium',
        grade_id: 'grade-12',
        subject_id: 'subj-math'
      };
    });
    newQs.forEach((q: any) => db.addExamQuestion(q));
  });

  // 7. Ensure AI Generated Biology has clean authentic questions
  const extraBio = (bak.exam_questions || []).filter((q: any) => q.exam_id === 'exam-entrance-1789446582428' || q.exam_id === 'exam-entrance-1789750908183').slice(0, 100);
  if (extraBio.length > 0) {
    console.log(`Setting up exam-ai-bio-100 with ${extraBio.length} authentic biology questions...`);
    db.clearExamQuestions('exam-ai-bio-100');
    const newBioQs = extraBio.map((b: any, i: number) => ({
      ...b,
      id: `ai-bio-q${i + 1}`,
      exam_id: 'exam-ai-bio-100',
      question_number: i + 1,
      options: [b.option_a, b.option_b, b.option_c, b.option_d]
    }));
    newBioQs.forEach((q: any) => db.addExamQuestion(q));
  }

  // 8. Flush and sync
  console.log('Flushing database and official exam backups...');
  db.flush();
  db.syncOfficialBackups();
  console.log('=== [ALL AUTHENTIC EXAMS RESTORED SUCCESSFULLY!] ===');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  restoreAllAuthenticExamBanks();
}
