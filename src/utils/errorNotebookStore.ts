import { ExamQuestion } from '../types';

export interface ErrorNotebookEntry {
  id: string;
  question_id: string;
  exam_id?: string;
  exam_title?: string;
  subject_id: string;
  grade_id?: string;
  question: ExamQuestion;
  user_selected_answer?: string;
  correct_answer: string;
  first_missed_at: string;
  last_missed_at: string;
  missed_count: number;
  correct_review_count: number;
  leitner_box: 1 | 2 | 3 | 4; // 1: Review Tomorrow, 2: 3-Day Interval, 3: 7-Day Interval, 4: Mastered
  next_review_due: string;
  user_note?: string;
}

const STORAGE_KEY = 'ethiolearn_error_notebook_v1';

function getNextReviewDate(box: 1 | 2 | 3 | 4): string {
  const d = new Date();
  if (box === 1) {
    d.setDate(d.getDate() + 1);
  } else if (box === 2) {
    d.setDate(d.getDate() + 3);
  } else if (box === 3) {
    d.setDate(d.getDate() + 7);
  } else {
    d.setDate(d.getDate() + 30);
  }
  return d.toISOString();
}

export function getAllErrorNotebookEntries(): ErrorNotebookEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('Failed to read error notebook from storage:', e);
    return [];
  }
}

export function saveAllErrorNotebookEntries(entries: ErrorNotebookEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (e) {
    console.warn('Failed to save error notebook to storage:', e);
  }
}

/**
 * Automatically records a question missed during Timed Exam or Practice Mode
 */
export function recordMissedQuestion(
  question: ExamQuestion,
  userSelected: string,
  examId?: string,
  examTitle?: string
): ErrorNotebookEntry {
  const entries = getAllErrorNotebookEntries();
  const qId = question.id;
  const existingIdx = entries.findIndex(e => e.question_id === qId);

  const now = new Date().toISOString();

  if (existingIdx >= 0) {
    const existing = entries[existingIdx];
    const updated: ErrorNotebookEntry = {
      ...existing,
      exam_id: examId || existing.exam_id,
      exam_title: examTitle || existing.exam_title,
      question: { ...question, ...existing.question },
      user_selected_answer: userSelected,
      last_missed_at: now,
      missed_count: existing.missed_count + 1,
      leitner_box: 1, // Reset to Box 1 for immediate revision
      next_review_due: getNextReviewDate(1)
    };
    entries[existingIdx] = updated;
    saveAllErrorNotebookEntries(entries);
    return updated;
  }

  const newEntry: ErrorNotebookEntry = {
    id: `err-${qId}-${Date.now()}`,
    question_id: qId,
    exam_id: examId,
    exam_title: examTitle,
    subject_id: question.subject_id || 'subj-gen',
    grade_id: question.grade_id,
    question,
    user_selected_answer: userSelected,
    correct_answer: question.correct_answer || 'A',
    first_missed_at: now,
    last_missed_at: now,
    missed_count: 1,
    correct_review_count: 0,
    leitner_box: 1,
    next_review_due: getNextReviewDate(1)
  };

  entries.unshift(newEntry);
  saveAllErrorNotebookEntries(entries);
  return newEntry;
}

/**
 * Student reviews a card in Error Notebook:
 * - If correct: advances to next Leitner Box (1 -> 2 -> 3 -> 4 [Mastered])
 * - If incorrect: drops back to Box 1 for immediate review
 */
export function reviewErrorNotebookItem(questionId: string, isCorrect: boolean): ErrorNotebookEntry | null {
  const entries = getAllErrorNotebookEntries();
  const idx = entries.findIndex(e => e.question_id === questionId);
  if (idx === -1) return null;

  const current = entries[idx];
  let nextBox: 1 | 2 | 3 | 4 = current.leitner_box;

  if (isCorrect) {
    if (current.leitner_box === 1) nextBox = 2;
    else if (current.leitner_box === 2) nextBox = 3;
    else if (current.leitner_box === 3) nextBox = 4;
  } else {
    nextBox = 1;
  }

  const updated: ErrorNotebookEntry = {
    ...current,
    leitner_box: nextBox,
    correct_review_count: isCorrect ? current.correct_review_count + 1 : current.correct_review_count,
    next_review_due: getNextReviewDate(nextBox)
  };

  entries[idx] = updated;
  saveAllErrorNotebookEntries(entries);
  return updated;
}

/**
 * Remove an item permanently from the Error Notebook
 */
export function removeErrorNotebookItem(questionId: string): void {
  const entries = getAllErrorNotebookEntries();
  const filtered = entries.filter(e => e.question_id !== questionId);
  saveAllErrorNotebookEntries(filtered);
}

/**
 * Update personal notes for this mistake (e.g. "Remember to check unit prefix milli vs micro")
 */
export function updateUserNoteForMistake(questionId: string, note: string): void {
  const entries = getAllErrorNotebookEntries();
  const idx = entries.findIndex(e => e.question_id === questionId);
  if (idx !== -1) {
    entries[idx].user_note = note;
    saveAllErrorNotebookEntries(entries);
  }
}

/**
 * Get statistics for the dashboard/flashcards header
 */
export function getErrorNotebookStats(): {
  total: number;
  dueToday: number;
  box1: number;
  box2: number;
  box3: number;
  mastered: number;
} {
  const entries = getAllErrorNotebookEntries();
  const now = new Date();

  let dueToday = 0;
  let box1 = 0;
  let box2 = 0;
  let box3 = 0;
  let mastered = 0;

  for (const e of entries) {
    if (e.leitner_box === 1) box1++;
    else if (e.leitner_box === 2) box2++;
    else if (e.leitner_box === 3) box3++;
    else if (e.leitner_box === 4) mastered++;

    if (e.leitner_box < 4 && new Date(e.next_review_due) <= now) {
      dueToday++;
    }
  }

  return {
    total: entries.length,
    dueToday,
    box1,
    box2,
    box3,
    mastered
  };
}
