// Client data and offline fallback for Grade 9 English Grammar, Vocabulary & Language Masterclass
import { GRADE_9_ENGLISH_MASTERY, EnglishUnitMastery, EnglishGrammarTopic, EnglishVocabWord } from '../../server/englishMasteryRegistry';

export type { EnglishUnitMastery, EnglishGrammarTopic, EnglishVocabWord };
export { GRADE_9_ENGLISH_MASTERY };

export function getEnglishMasteryForUnit(unitNumber: number): EnglishUnitMastery | undefined {
  return GRADE_9_ENGLISH_MASTERY.find(u => u.unit_number === unitNumber);
}

export function getAllGrammarTopics(): EnglishGrammarTopic[] {
  return GRADE_9_ENGLISH_MASTERY.flatMap(u => u.grammar_masterclass);
}

export function getAllVocabularyWords(): EnglishVocabWord[] {
  return GRADE_9_ENGLISH_MASTERY.flatMap(u => u.vocabulary_bank);
}
