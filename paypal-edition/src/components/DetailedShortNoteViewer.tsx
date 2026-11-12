import React from 'react';
import { Book, BookChapter } from '../types';
import { ChapterShortNoteViewer } from './ChapterShortNoteViewer';

interface DetailedShortNoteViewerProps {
  book: Book;
  currentChapter?: BookChapter;
  chapters: BookChapter[];
  selectedTopicTitle?: string;
  onSelectTopic: (topicTitle: string) => void;
  onNavigateToPdf: () => void;
  onSelectChapter: (chapterNumber: number) => void;
  onAskAITutor?: (prompt: string) => void;
  onViewGrammarVocab?: () => void;
  theme?: 'light' | 'sepia' | 'dark';
}

export const DetailedShortNoteViewer: React.FC<DetailedShortNoteViewerProps> = ({
  book,
  currentChapter,
  chapters,
  selectedTopicTitle,
  onSelectTopic,
  onNavigateToPdf,
  onSelectChapter,
  onAskAITutor = () => {},
  onViewGrammarVocab,
  theme = 'dark'
}) => {
  return (
    <ChapterShortNoteViewer
      book={book}
      currentChapter={currentChapter}
      chapters={chapters}
      selectedTopicTitle={selectedTopicTitle}
      onSelectTopic={onSelectTopic}
      onNavigateToPdf={onNavigateToPdf}
      onSelectChapter={onSelectChapter}
      onAskAITutor={onAskAITutor}
      onViewGrammarVocab={onViewGrammarVocab}
      theme={theme}
      isDetailed={true}
    />
  );
};
