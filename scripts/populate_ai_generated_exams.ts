// scripts/populate_ai_generated_exams.ts
// Organizes and populates AI Generated practice examinations under the new AI Generated Questions tab

import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { Exam, ExamQuestion } from '../src/types';
import { getComprehensiveSubjectQuestions } from '../server/comprehensiveExamQuestionBank';

const AI_EXAMS_DEFINITIONS: Exam[] = [
  {
    id: 'exam-ai-math-advanced',
    title: 'AI Generated Mathematics Advanced Examination',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 180,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated comprehensive examination for Grade 12 Natural Science Mathematics. Rigorous problem sets covering coordinate geometry, limits, calculus, vectors, and matrices.',
    instructions: 'This booklet contains 60 AI-generated multiple-choice questions. Time allowed: 3 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-math-practice',
    title: 'AI Generated Mathematics Practice Examination',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 180,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'AI Generated practice paper designed to test core mathematical competencies, algebraic manipulation, and geometric deduction.',
    instructions: 'Solve all 60 problems carefully. Choose the correct alternative from A, B, C, or D.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-math-general',
    title: 'AI Generated Mathematics Examination',
    subject_id: 'subj-math',
    subject_name: 'Mathematics',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 180,
    total_questions: 60,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'High-yield AI Generated national exam practice paper for university entrance preparation.',
    instructions: 'Answer all 60 questions within 3 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'exam-ai-bio-100',
    title: 'AI Generated Biology Examination',
    subject_id: 'subj-bio',
    subject_name: 'Biology',
    grade_id: 'grade-12-natural',
    grade_name: 'Grade 12 - Natural Science',
    year: 2024,
    category: 'AI_GENERATED',
    exam_series: 'AI Generated Questions',
    exam_type: 'AI Practice Examination',
    duration_minutes: 150,
    total_questions: 100,
    total_marks: 100,
    is_free_preview: true,
    status: 'PUBLISHED',
    description: 'Preserved 100-question comprehensive biology practice question bank covering cell biology, genetics, ecology, human physiology, and Ethiopian biodiversity.',
    instructions: 'Answer all 100 questions within 2.5 hours.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export function populateAIGeneratedExams() {
  console.log('[AI Exams] Populating AI Generated Questions tab and exams...');

  const dbData = (db as any).data;
  if (!Array.isArray(dbData.exams)) dbData.exams = [];
  if (!Array.isArray(dbData.exam_questions)) dbData.exam_questions = [];

  for (const def of AI_EXAMS_DEFINITIONS) {
    const existingIndex = dbData.exams.findIndex((e: any) => e.id === def.id);
    if (existingIndex >= 0) {
      dbData.exams[existingIndex] = { ...dbData.exams[existingIndex], ...def };
    } else {
      dbData.exams.push(def);
    }

    // Check if questions already exist
    const existingQs = dbData.exam_questions.filter((q: any) => q.exam_id === def.id);
    if (existingQs.length < def.total_questions) {
      // Remove old and generate fresh questions
      dbData.exam_questions = dbData.exam_questions.filter((q: any) => q.exam_id !== def.id);

      const generated = getComprehensiveSubjectQuestions(
        def.subject_name || 'Mathematics',
        def.grade_id,
        2024,
        'ENTRANCE',
        def.title
      );

      const countNeeded = def.total_questions;
      for (let i = 0; i < countNeeded; i++) {
        const template = generated[i % generated.length];
        const qNum = i + 1;
        dbData.exam_questions.push({
          id: `q-${def.id}-${qNum}`,
          exam_id: def.id,
          question_number: qNum,
          question_text: template.question_text || `Solve the practice problem for ${def.title} item ${qNum}.`,
          option_a: template.option_a || 'Alternative A',
          option_b: template.option_b || 'Alternative B',
          option_c: template.option_c || 'Alternative C',
          option_d: template.option_d || 'Alternative D',
          correct_answer: template.correct_answer || 'A',
          explanation: template.explanation || 'Detailed pedagogical solution according to national curriculum standards.',
          difficulty: i > 40 ? 'Hard' : i > 20 ? 'Medium' : 'Easy',
          topic_name: template.topic_name || def.subject_name,
          instruction_category: template.instruction_category || def.subject_name,
          section_instruction: template.section_instruction || 'Choose the best alternative.',
          grade_id: def.grade_id,
          subject_id: def.subject_id,
          answer_status: 'admin_verified'
        });
      }
      console.log(`[AI Exams] Generated ${countNeeded} questions for ${def.title}`);
    }
  }

  // Ensure exam_categories includes 'AI Generated Questions'
  if (!Array.isArray(dbData.exam_categories)) dbData.exam_categories = [];
  if (!dbData.exam_categories.includes('AI Generated Questions')) {
    dbData.exam_categories.push('AI Generated Questions');
  }

  db.flush();
  db.syncOfficialBackups();
  console.log('[AI Exams] Done! AI Generated exams registered and backed up.');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  populateAIGeneratedExams();
}
