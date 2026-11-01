import React, { useState } from 'react';
import { Eye, Maximize2, Compass, Layers, Zap, Info } from 'lucide-react';
import { InlineMath } from 'react-katex';

interface ScientificDiagramRendererProps {
  diagramText?: string;
  topicTitle?: string;
  subjectName?: string;
  className?: string;
}

/**
 * Renders an authentic, crisp vector representation diagram with Cartesian & Polar coordinate systems
 */
function VectorCoordinateDiagram() {
  return (
    <div className="w-full space-y-4">
      {/* SVG Canvas for Vector System */}
      <div className="w-full overflow-hidden rounded-xl bg-slate-950/90 border border-indigo-900/40 p-4 flex flex-col items-center">
        <svg
          viewBox="0 0 520 280"
          className="w-full max-w-lg h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.8" opacity="0.6" />
            </pattern>
            {/* Arrow Marker for Vector A */}
            <marker id="arrowVector" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#38bdf8" />
            </marker>
            {/* Arrow Marker for Axes */}
            <marker id="arrowAxis" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 8 5 L 0 8 z" fill="#64748b" />
            </marker>
          </defs>

          {/* Background Grid */}
          <rect x="20" y="20" width="480" height="240" rx="8" fill="#090d16" />
          <rect x="20" y="20" width="480" height="240" fill="url(#grid)" />

          {/* Coordinate Axes */}
          {/* X Axis */}
          <line x1="50" y1="220" x2="470" y2="220" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowAxis)" />
          <text x="475" y="224" fill="#94a3b8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">+x</text>

          {/* Y Axis */}
          <line x1="90" y1="240" x2="90" y2="40" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowAxis)" />
          <text x="85" y="32" fill="#94a3b8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">+y</text>

          {/* Origin O */}
          <circle cx="90" cy="220" r="4" fill="#38bdf8" />
          <text x="75" y="238" fill="#64748b" fontSize="12" fontFamily="sans-serif">O (0,0)</text>

          {/* Component Projections (Dashed Lines) */}
          {/* Vertical dashed line to X-axis: from (350, 90) down to (350, 220) */}
          <line x1="350" y1="90" x2="350" y2="220" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="5,4" />
          {/* Horizontal dashed line to Y-axis: from (350, 90) across to (90, 90) */}
          <line x1="90" y1="90" x2="350" y2="90" stroke="#a855f7" strokeWidth="1.8" strokeDasharray="5,4" />

          {/* Right Angle Indicator at (350, 220) */}
          <polyline points="338,220 338,208 350,208" fill="none" stroke="#f59e0b" strokeWidth="1.2" />

          {/* Angle θ Arc */}
          <path d="M 150 220 A 60 60 0 0 0 144 193" fill="none" stroke="#34d399" strokeWidth="2.5" />
          <text x="160" y="205" fill="#34d399" fontSize="14" fontWeight="bold" fontFamily="sans-serif">θ</text>

          {/* Vector A (Hypotenuse) */}
          <line x1="90" y1="220" x2="344" y2="93" stroke="#38bdf8" strokeWidth="3.5" markerEnd="url(#arrowVector)" />

          {/* Vector A Label */}
          <g transform="translate(195, 135)">
            <rect x="-8" y="-18" width="80" height="24" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="5" y="-2" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">A⃗ = (R, θ)</text>
          </g>

          {/* Component Labels */}
          {/* Horizontal Component A_x on X-axis */}
          <line x1="90" y1="226" x2="350" y2="226" stroke="#f59e0b" strokeWidth="3" />
          <g transform="translate(170, 248)">
            <rect x="-6" y="-14" width="130" height="20" rx="4" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1" />
            <text x="0" y="0" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="sans-serif">A_x = |A⃗| cos θ</text>
          </g>

          {/* Vertical Component A_y on Y-axis */}
          <line x1="84" y1="220" x2="84" y2="90" stroke="#a855f7" strokeWidth="3" />
          <g transform="translate(10, 155)">
            <rect x="-6" y="-14" width="125" height="20" rx="4" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1" />
            <text x="0" y="0" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">A_y = |A⃗| sin θ</text>
          </g>

          {/* Vector Point Coordinates */}
          <circle cx="350" cy="90" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
          <text x="360" y="85" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">P(A_x, A_y)</text>
        </svg>

        <p className="mt-2 text-center text-xs text-slate-400 font-medium">
          Figure: Authentic Resolution of Vector <InlineMath math="\vec{A}" /> into Cartesian Orthogonal Components <InlineMath math="A_x" /> and <InlineMath math="A_y" /> at Angle <InlineMath math="\theta" />
        </p>
      </div>

      {/* Structured Formula & Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {/* Polar Representation */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wide">
            <Compass className="w-4 h-4" />
            <span>Polar Coordinates: (R, θ)</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Specifies the vector by its scalar magnitude <InlineMath math="R = |\vec{A}|" /> and counterclockwise direction angle <InlineMath math="\theta" /> relative to the reference axis (<InlineMath math="+x" />).
          </p>
          <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-emerald-300 font-mono text-center">
            <InlineMath math="|\vec{A}| = \sqrt{A_x^2 + A_y^2} \quad , \quad \theta = \tan^{-1}\left(\frac{A_y}{A_x}\right)" />
          </div>
        </div>

        {/* Cartesian Representation */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-purple-500/30 space-y-2">
          <div className="flex items-center gap-1.5 text-purple-400 font-bold uppercase tracking-wide">
            <Layers className="w-4 h-4" />
            <span>Cartesian Components: (A_x, A_y)</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Resolves the vector into two mutually perpendicular components along the <InlineMath math="x" /> and <InlineMath math="y" /> axes using standard unit vectors <InlineMath math="\mathbf{\hat{i}}" /> and <InlineMath math="\mathbf{\hat{j}}" />.
          </p>
          <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-purple-300 font-mono text-center">
            <InlineMath math="\vec{A} = A_x \mathbf{\hat{i}} + A_y \mathbf{\hat{j}} \quad \text{where} \quad A_x = A\cos\theta, \; A_y = A\sin\theta" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Strips ASCII art characters (/ \ | + - _) from legacy diagram descriptions
 * and formats them into clean, readable text items.
 */
function cleanLegacyAsciiDiagram(rawText: string): { title: string; points: string[] } {
  if (!rawText) return { title: 'Textbook Apparatus & Conceptual Schematic', points: [] };

  const lines = rawText.split('\n');
  const points: string[] = [];
  let title = 'Textbook Apparatus & Conceptual Schematic';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Check for title pattern like [Diagram: ...]
    const titleMatch = trimmed.match(/^\[(?:Diagram|Figure|Schematic):\s*(.+?)\]$/i);
    if (titleMatch) {
      title = titleMatch[1];
      continue;
    }

    // Skip pure ASCII art lines (e.g. lines composed mostly of slashes, pipes, pluses, dashes)
    const asciiSymbolRatio = (trimmed.match(/[\/\\\|\+\-\^\_\=\<\>]/g) || []).length / trimmed.length;
    if (asciiSymbolRatio > 0.4 && !trimmed.includes(':') && !trimmed.includes('=')) {
      continue;
    }

    // Clean inline slashes and symbol artifacts
    const cleanedLine = trimmed
      .replace(/^[\|\/\+\-\*\#\>]\s*/, '')
      .replace(/\|/g, '')
      .replace(/\/{2,}/g, '')
      .replace(/\\{2,}/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (cleanedLine.length > 2) {
      points.push(cleanedLine);
    }
  }

  return { title, points };
}

export const ScientificDiagramRenderer: React.FC<ScientificDiagramRendererProps> = ({
  diagramText = '',
  topicTitle = '',
  subjectName = '',
  className = ''
}) => {
  const combined = `${topicTitle} ${diagramText} ${subjectName}`.toLowerCase();

  // 1. Detect if this is a Vector / Coordinate System diagram
  const isVectorDiagram =
    combined.includes('vector') ||
    combined.includes('polar') ||
    combined.includes('cartesian') ||
    combined.includes('coordinate system') ||
    combined.includes('component');

  if (isVectorDiagram) {
    return (
      <div className={`p-4 sm:p-5 rounded-2xl bg-purple-950/20 border border-purple-800/40 text-purple-200 shadow-lg ${className}`}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-900/50">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-amber-500/20 text-amber-300">
              <Zap className="w-4 h-4" />
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300">
              Interactive Textbook Schematic: Vector Representation & Coordinate Systems
            </span>
          </div>
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60">
            Vector Standard
          </span>
        </div>

        <VectorCoordinateDiagram />
      </div>
    );
  }

  // 2. Generic diagram handler: clean out ASCII slashes and render structured visual card
  const { title, points } = cleanLegacyAsciiDiagram(diagramText);

  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 text-indigo-200 shadow-md ${className}`}>
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-indigo-900/50">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-lg bg-amber-500/20 text-amber-300">
            <Info className="w-4 h-4" />
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300">
            {title}
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60">
          Visual Model
        </span>
      </div>

      {points.length > 0 ? (
        <div className="grid gap-2 pt-1">
          {points.map((pt, pIdx) => (
            <div
              key={pIdx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 italic">
          Textbook conceptual model illustrates proportional mechanical, biological, or physical relationships.
        </div>
      )}
    </div>
  );
};
