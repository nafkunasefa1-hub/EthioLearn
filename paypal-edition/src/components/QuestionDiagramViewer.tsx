import React, { useState } from 'react';
import { Eye, Maximize2, X, Image as ImageIcon } from 'lucide-react';

interface QuestionDiagramViewerProps {
  imagePath?: string;
  diagramSvg?: string;
  caption?: string;
  questionNumber?: number;
  title?: string;
}

export const QuestionDiagramViewer: React.FC<QuestionDiagramViewerProps> = ({
  imagePath,
  diagramSvg,
  caption,
  questionNumber,
  title
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'photo' | 'vector'>(imagePath ? 'photo' : 'vector');

  if (!imagePath && !diagramSvg) {
    return null;
  }

  const defaultCaption = caption || (questionNumber ? `Figure for Question ${questionNumber}` : 'Official Exam Diagram / Illustration');
  const headerTitle = title || (questionNumber ? `Figure for Question ${questionNumber}` : 'Exam Diagram / Illustration');

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/70 p-3 shadow-inner">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded bg-emerald-500/20 text-emerald-400">
            <ImageIcon className="w-3.5 h-3.5" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            {headerTitle}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {imagePath && diagramSvg && (
            <div className="flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5 text-[11px]">
              <button
                type="button"
                onClick={() => setViewMode('photo')}
                className={`px-2 py-0.5 rounded ${viewMode === 'photo' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Exam Original
              </button>
              <button
                type="button"
                onClick={() => setViewMode('vector')}
                className={`px-2 py-0.5 rounded ${viewMode === 'vector' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Vector
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 hover:border-emerald-500/50"
            title="Click to expand diagram in full view"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Zoom</span>
          </button>
        </div>
      </div>

      {/* Diagram container */}
      <div className="flex flex-col items-center justify-center p-2 bg-slate-900/90 rounded-lg border border-slate-800/60 overflow-hidden">
        {imagePath && (viewMode === 'photo' || !diagramSvg) ? (
          <div className="p-2 bg-white rounded-lg shadow-md max-w-full flex items-center justify-center">
            <img
              src={imagePath}
              alt={defaultCaption}
              className="max-h-80 max-w-full object-contain rounded transition-transform hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
        ) : diagramSvg ? (
          <div
            className="w-full max-w-md max-h-72 overflow-auto flex items-center justify-center py-2 text-slate-100 [&_svg]:max-w-full [&_svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: diagramSvg }}
          />
        ) : null}

        <p className="mt-2 text-center text-xs italic text-slate-400 font-sans">
          {defaultCaption}
        </p>
      </div>

      {/* Zoom / Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-emerald-500/20 text-emerald-400">
                  <Eye className="w-4 h-4" />
                </span>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {defaultCaption}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center max-h-[75vh] overflow-auto p-4 bg-slate-950/80 rounded-xl border border-slate-800">
              {imagePath && (viewMode === 'photo' || !diagramSvg) ? (
                <div className="p-3 bg-white rounded-xl shadow-lg max-w-full flex items-center justify-center">
                  <img
                    src={imagePath}
                    alt={defaultCaption}
                    className="max-h-[65vh] w-auto object-contain rounded-lg"
                  />
                </div>
              ) : diagramSvg ? (
                <div
                  className="w-full max-w-2xl text-slate-100 [&_svg]:w-full [&_svg]:h-auto"
                  dangerouslySetInnerHTML={{ __html: diagramSvg }}
                />
              ) : null}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>National Examination Diagram Asset • High Resolution</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
