// Common data models and API contracts for EthioLearn AI

export type UserRole = 'student' | 'admin';

export interface UserProfile {
  id: string;
  phone_number?: string;
  email?: string;
  full_name: string;
  grade: string; // e.g., "Grade 9", "Grade 10", "Grade 11 - Natural", "Grade 11 - Social", "Grade 12 - Natural", "Grade 12 - Social"
  grade_id: string; // "grade-9", "grade-10", "grade-11-natural", "grade-11-social", "grade-12-natural", "grade-12-social"
  role: UserRole;
  is_premium: boolean;
  subscription_type?: string;
  subscription_tier?: string;
  paid_amount?: number;
  is_all_access?: boolean;
  unlocked_grades?: string[]; // array of unlocked grade_ids, e.g. ['grade-9'] or ['all']
  device_id?: string;
  premium_device_id?: string;
  password_hash?: string;
  daily_ai_requests_count?: number;
  last_ai_request_date?: string;
  created_at: string;
  updated_at: string;
}

export interface Grade {
  id: string;
  name: string; // "Grade 9", "Grade 10", "Grade 11", "Grade 12 - Natural Science", "Grade 12 - Social Science"
  level: number; // 9, 10, 11, 12
  stream?: 'common' | 'natural' | 'social';
  description: string;
}

export interface Subject {
  id: string;
  name: string; // "Mathematics", "Physics", "Chemistry", "Biology", "English"
  code: string;
  icon: string;
  color: string;
  description: string;
}

export type BookStatus = 'UPLOADED' | 'PROCESSING' | 'READY' | 'FAILED' | 'ARCHIVED';

export interface Book {
  id: string;
  title: string;
  grade_id: string;
  subject_id: string;
  author: string;
  publisher: string;
  edition: string;
  language: string;
  description: string;
  short_note: string; // 1-3 student-friendly sentences
  cover_image_path: string;
  original_pdf_path: string;
  total_pages: number;
  processed_pages?: number;
  status: BookStatus;
  access_level: 'free' | 'premium';
  version: string;
  is_demo?: boolean;
  is_free_preview?: boolean;
  pdf_path?: string;
  page_offset?: number;
  created_at: string;
  updated_at: string;
  // Joined fields
  grade_name?: string;
  subject_name?: string;
}

export interface ChapterTopic {
  id: string;
  topic_number?: string; // e.g. "1.1", "1.2"
  title: string;
  start_page?: number;
  description?: string;
}

export interface BookChapter {
  id: string;
  book_id: string;
  chapter_number: number;
  chapter_title: string;
  description: string;
  start_page: number;
  end_page: number;
  is_free_preview?: boolean;
  topics?: ChapterTopic[];
  created_at?: string;
  updated_at?: string;
}

export interface ChapterShortNote {
  id: string;
  book_id: string;
  chapter_id?: string;
  chapter_number: number;
  chapter_title: string;
  topic_title?: string;
  grade_name?: string;
  subject_name?: string;
  unit_summary: string;
  detailed_overview?: string; // Comprehensive conceptual background & real-world intuition
  topics_covered?: Array<{
    title?: string;
    topic_title?: string;
    key_points?: string[];
    explanation?: string;
    detailed_explanation?: string;
    short_notes?: string[];
    diagram_illustration?: string;
    illustration_analogy?: string;
    ethiopian_context?: string;
    exam_focus?: string;
    key_takeaway?: string;
  }>;
  key_concepts: Array<string | {
    concept: string;
    explanation: string;
    illustration_analogy?: string;
  }>;
  core_formulas_rules: Array<string | {
    formula_or_law: string;
    explanation: string;
    units_conditions?: string;
  }>;
  euee_exam_tips: Array<string | {
    trap: string;
    how_to_avoid: string;
    frequency?: 'High' | 'Critical' | 'Medium' | string;
  }>;
  quick_example?: {
    problem: string;
    step_solution: string;
    result: string;
  };
  worked_examples?: Array<{
    title?: string;
    problem_statement?: string;
    problem?: string;
    step_by_step_solution?: string;
    step_solution?: string;
    final_answer?: string;
    result?: string;
    approach_hint?: string;
    examiner_note?: string;
    common_mistakes_to_avoid?: string;
  }>;
  practice_quiz?: Array<{
    question: string;
    options: string[];
    correct_option?: number;
    correct_index?: number;
    explanation: string;
  }>;
  ai_assisted: boolean;
  generated_at: string;
  focus?: 'summary' | 'formulas' | 'euee' | 'examples' | 'quiz';
  source_pages_used?: number[];
  book_grounded?: boolean;
  real_world_applications?: Array<{ domain: string; description: string }>;
}

export interface BookPage {
  id: string;
  book_id: string;
  pdf_page_index: number; // 1-based or 0-based PDF page index
  printed_page_number: number; // What the student sees on the physical page
  chapter_id?: string;
  extracted_text: string;
  ocr_text?: string;
  verified_text?: string;
  final_text: string;
  extraction_method: 'pdf_text' | 'ocr' | 'verified_manual' | 'structured_curriculum';
  confidence: number;
  page_image_path?: string;
  needs_manual_review: boolean;
  ai_analysis?: {
    overview: string;
    key_points?: string[];
    figures_and_tables?: string;
    ethiopian_context: string;
    euee_insight: string;
    worked_example?: {
      title?: string;
      problem: string;
      step_solution: string;
      result: string;
    };
  };
  created_at: string;
  updated_at: string;
}

export interface BookChunk {
  id: string;
  book_id: string;
  book_page_id: string;
  grade_id: string;
  subject_id: string;
  chapter_id?: string;
  topic_id?: string;
  chunk_text: string;
  chunk_index: number;
  printed_page_number: number;
  pdf_page_index: number;
}

export interface Flashcard {
  id: string;
  book_id?: string;
  exam_id?: string;
  topic_id: string;
  topic_name: string;
  subject_name: string;
  grade_name: string;
  front_title: string;
  front_content: string;
  front_subtitle?: string;
  back_definition: string;
  ethiopian_context?: string;
  euee_exam_trap?: string;
  formula_or_keypoint?: string;
  tags?: string[];
  mastered?: boolean;
  created_at?: string;
}

export interface Topic {
  id: string;
  grade_id: string;
  subject_id: string;
  chapter_id?: string;
  topic_name: string;
  description: string;
}

export type ExamStatus = 'DRAFT' | 'PROCESSING' | 'REVIEW_REQUIRED' | 'READY' | 'PUBLISHED' | 'ARCHIVED';

export interface Exam {
  id: string;
  title: string;
  year: number; // e.g. 2024 or 2018
  ethiopian_year?: string; // e.g. "2018 E.C."
  exam_series?: string; // e.g. "2018 E.C. EUEE Exams", "2017 E.C. EUEE Exams", "Regional Model Examinations"
  exam_type: string; // "University Entrance Examination" | "Model Examination"
  category?: 'ENTRANCE' | 'MODEL' | 'GRADE_9' | 'GRADE_10' | 'GRADE_11_NATURAL' | 'COLLECTION' | 'AI_GENERATED' | 'WORKSHEET';
  model_region?: string; // e.g. "Addis Ababa", "Oromia", "Amhara", "National Directorate"
  source_type?: 'OFFICIAL' | 'REGIONAL_MODEL' | 'USER_UPLOADED' | 'OFFICIAL_NATIONAL_ARCHIVE';
  grade_id: string;
  subject_id: string;
  description: string;
  instructions: string;
  duration_minutes: number;
  total_questions: number;
  total_marks?: number;
  questions_count?: number;
  digitized_questions_count?: number;
  digitization_progress?: number;
  is_digitized?: boolean;
  total_pages?: number;
  processed_pages?: number;
  original_pdf_path?: string;
  original_pdf_name?: string;
  pdf_path?: string;
  questions?: ExamQuestion[];
  status: ExamStatus;
  is_active?: boolean;
  is_demo?: boolean;
  is_free_preview?: boolean;
  created_at?: string;
  updated_at?: string;
  // Joined fields
  grade_name?: string;
  subject_name?: string;
}

export type AnswerStatus = 'ai_generated' | 'admin_verified' | 'needs_review';

export interface ExamQuestion {
  id: string;
  exam_id: string;
  question_number: number;
  question_text: string;
  question_image_path?: string;
  diagram_svg?: string; // High-fidelity vector SVG illustration for circuits, geometry, graphs, chemical structures
  diagram_caption?: string; // Caption or figure label e.g. "Figure 1: DC Bridge Circuit"
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e?: string;
  correct_answer: string; // "A" | "B" | "C" | "D" | "E"
  answer_status?: AnswerStatus;
  explanation: string;
  grade_id?: string;
  subject_id?: string;
  topic_id?: string;
  topic_name?: string;
  book_id?: string;
  chapter_id?: string;
  chapter_title?: string;
  page_id?: string;
  printed_page_number?: number;
  source_pdf_page?: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  extraction_method?: string;
  extraction_confidence?: number;
  needs_review?: boolean;
  is_ai_generated?: boolean; // true if AI-generated practice question, false for OFFICIAL ENTRANCE EXAM
  exam_title?: string;
  exam_year?: number | string;
  year?: number | string;
  ethiopian_year?: string;
  section_instruction?: string; // e.g. "Communicative Activities: Choose the alternative that is most appropriate to complete the dialogue."
  instruction_category?: string; // e.g. "Dialogue", "Reading Comprehension", "Grammar & Structure", "Vocabulary & Synonyms"
  reading_passage?: string; // Full reading passage text for comprehension questions
  passage_title?: string; // e.g. "Passage 1: The Importance of Mental Health"
  grade_level?: number | string;
  has_diagram?: boolean;
  points?: number;
  diagram_url?: string;
  options?: string[];
  textbook_reference?: any;
  created_at?: string;
  updated_at?: string;
}

export type AuditLog = AdminAuditLog;

export interface WeakTopic {
  topic_id: string;
  topic_name: string;
  subject_name: string;
  grade_name: string;
  accuracy_percentage: number;
  attempts_count: number;
  recommended_book: string;
  recommended_chapter: string;
  recommended_pages: string;
}

export interface PracticeAnswerFeedback {
  is_correct: boolean;
  selected_answer: string;
  correct_answer: string;
  explanation: string;
  textbook_reference?: {
    book_id: string;
    book_title: string;
    printed_page_number: number;
    chapter_title?: string;
  };
}

export interface ExamAttempt {
  id: string;
  user_id: string;
  exam_id: string;
  started_at: string;
  submitted_at?: string;
  score: number;
  percentage: number;
  correct_count: number;
  incorrect_count: number;
  unanswered_count: number;
  total_questions?: number;
  time_taken_seconds: number;
  completed: boolean;
  created_at: string;
  exam?: Exam;
}

export interface StudentAnswer {
  id: string;
  attempt_id: string;
  question_id: string;
  selected_answer: string;
  is_correct: boolean;
  marked_for_review: boolean;
  answered_at: string;
}

export interface PracticeAttempt {
  id: string;
  user_id: string;
  mode: 'full_exam' | 'topic' | 'single_question';
  exam_id?: string;
  topic_id?: string;
  started_at: string;
  completed_at?: string;
  score: number;
  percentage: number;
  total_questions: number;
  created_at: string;
}

export interface PracticeAnswer {
  id: string;
  practice_attempt_id: string;
  question_id: string;
  selected_answer: string;
  is_correct: boolean;
  answered_at: string;
  explanation_viewed: boolean;
}

export interface AIResponseSource {
  book_id: string;
  book_title: string;
  page_id: string;
  printed_page_number: number;
  pdf_page_index: number;
  chapter_id?: string;
  chapter_title?: string;
  grade_name: string;
  subject_name: string;
  subject_id?: string;
  relevance_score: number;
  passage_snippet: string;
}

export interface AIExplanationResult {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  source_level: 'textbook' | 'approved_database' | 'general_ai';
  has_textbook_reference: boolean;
  sources: AIResponseSource[];
  related_exam_questions: ExamQuestion[];
  ai_generated_questions?: ExamQuestion[];
  ai_practice_questions?: ExamQuestion[];
  study_recommendation?: {
    topic_name: string;
    grade_name: string;
    subject_name: string;
    book_title: string;
    chapter_title: string;
    page_start: number;
    page_end: number;
    note: string;
  };
  cached?: boolean;
  created_at: string;
  diagram_svg?: string;
  diagram_caption?: string;
  image_url?: string;
  diagram_keywords?: string[];
  diagrams?: Array<{
    svg?: string;
    image_url?: string;
    caption?: string;
    keyword?: string;
  }>;
}

export interface AIProviderConfig {
  id: string;
  provider_name: string; // 'gemini' | 'claude_compatible' | 'openai_compatible'
  model_name: string;
  enabled: boolean;
  priority: number;
  daily_limit: number;
  requests_used: number;
  requests_remaining: number;
  failure_count: number;
  cooldown_until?: string | null;
  status: 'HEALTHY' | 'RATE_LIMITED' | 'TEMPORARILY_UNAVAILABLE' | 'DISABLED' | 'QUOTA_EXCEEDED';
  last_used_at?: string;
}

export interface AIUsageLog {
  id: string;
  user_id: string;
  provider_name: string;
  model_name: string;
  status: 'success' | 'failed' | 'rate_limited' | 'cached';
  latency_ms: number;
  cached: boolean;
  created_at: string;
}

export interface PaymentSettings {
  id: string;
  price_birr: number; // 200 ETB for single grade
  all_grades_price_birr: number; // 300 ETB for all grades (or 100 ETB add-on)
  cbe_account: string;
  cbe_name: string;
  telebirr_number: string;
  telebirr_name: string;
  awash_account?: string;
  awash_name?: string;
  coop_account?: string;
  coop_name?: string;
  telegram_handle: string; // "@wiznfk4"
  support_phone: string; // "+251994847287"
  support_email: string;
  instructions: string;
}

export type ReceiptStatus = 'pending' | 'approved' | 'rejected';

export interface ReceiptVerification {
  id: string;
  user_id: string;
  student_phone?: string;
  student_email?: string;
  student_name: string;
  target_grade_id?: string;
  upgrade_all_grades?: boolean;
  amount_birr?: number;
  transaction_reference?: string;
  receipt_storage_path: string;
  receipt_filename: string;
  status: ReceiptStatus;
  rejection_reason?: string;
  submitted_at: string;
  reviewed_at?: string;
  reviewed_by?: string;
}

export interface DeviceTransferRequest {
  id: string;
  user_id: string;
  phone_number: string;
  student_name: string;
  old_device_id: string;
  new_device_id: string;
  status: 'pending' | 'approved' | 'rejected';
  reason?: string;
  requested_at: string;
  resolved_at?: string;
}

export interface NotificationItem {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'payment_approved' | 'payment_rejected' | 'exam_ready' | 'system';
  read: boolean;
  created_at: string;
}

export interface AdminAuditLog {
  id: string;
  admin_id: string;
  admin_email: string;
  action: string;
  target_type: string;
  target_id: string;
  metadata?: Record<string, any>;
  created_at: string;
}

export interface DashboardMetrics {
  total_students: number;
  premium_students: number;
  free_students: number;
  pending_payments: number;
  approved_payments: number;
  rejected_payments: number;
  total_books: number;
  processing_books: number;
  published_exams: number;
  total_exam_questions: number;
  total_exam_attempts: number;
  total_ai_requests: number;
}

export interface StudentAnalytics {
  average_score: number;
  best_score: number;
  exams_completed: number;
  practice_questions_solved: number;
  ai_questions_asked: number;
  weak_topics: {
    topic_id: string;
    topic_name: string;
    subject_name: string;
    grade_name: string;
    accuracy_percentage: number;
    attempts_count: number;
    recommended_book: string;
    recommended_chapter: string;
    recommended_pages: string;
  }[];
  recent_attempts: ExamAttempt[];
  subject_performance: {
    subject_name: string;
    accuracy: number;
    questions_attempted: number;
  }[];
}

export interface QuestionFeedback {
  id: string;
  question_id: string;
  question_number: number;
  exam_id: string;
  exam_title: string;
  subject_name?: string;
  grade_name?: string;
  user_id: string;
  user_name?: string;
  user_phone?: string;
  feedback_type: 'wrong_answer' | 'typo_error' | 'poor_explanation' | 'diagram_issue' | 'other';
  suggested_answer?: string; // 'A' | 'B' | 'C' | 'D'
  comment: string;
  question_text_snapshot?: string;
  status: 'pending' | 'reviewed' | 'corrected' | 'dismissed';
  admin_notes?: string;
  created_at: string;
  updated_at?: string;
}
