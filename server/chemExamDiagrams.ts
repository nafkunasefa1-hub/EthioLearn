import fs from 'fs';
import path from 'path';

// Define SVG diagrams for questions that have visual figures
const diagramQ25 = `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
    </marker>
  </defs>
  <!-- Main Backbone -->
  <!-- C1(CH3) -->
  <text x="60" y="145" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">H₃C</text>
  <line x1="95" y1="140" x2="140" y2="120" stroke="#1e293b" stroke-width="2.5"/>
  <text x="140" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">1</text>
  <line x1="145" y1="110" x2="145" y2="70" stroke="#1e293b" stroke-width="2.5"/>
  <text x="135" y="60" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">CH₃</text>
  
  <!-- C1 to C2 -->
  <line x1="155" y1="120" x2="215" y2="155" stroke="#1e293b" stroke-width="2.5"/>
  <text x="215" y="175" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">2</text>
  
  <!-- C2 to C3 (Double Bond) -->
  <line x1="225" y1="150" x2="290" y2="120" stroke="#1e293b" stroke-width="3"/>
  <line x1="228" y1="160" x2="285" y2="132" stroke="#1e293b" stroke-width="2"/>
  <text x="295" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">3</text>
  <line x1="295" y1="110" x2="295" y2="70" stroke="#1e293b" stroke-width="2.5"/>
  <text x="282" y="60" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">NH₂</text>
  
  <!-- C3 to C4 -->
  <line x1="305" y1="120" x2="370" y2="155" stroke="#1e293b" stroke-width="2.5"/>
  <text x="370" y="175" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">4</text>
  
  <!-- C4=O (Carbonyl) -->
  <line x1="375" y1="150" x2="420" y2="120" stroke="#dc2626" stroke-width="3"/>
  <line x1="380" y1="160" x2="425" y2="130" stroke="#dc2626" stroke-width="2"/>
  <text x="430" y="125" font-family="sans-serif" font-size="16" font-weight="bold" fill="#dc2626">O</text>
  
  <!-- C4-CH3 -->
  <line x1="375" y1="175" x2="375" y2="205" stroke="#1e293b" stroke-width="2.5"/>
  <text x="360" y="225" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">CH₃</text>
</svg>`;

const diagramQ29 = `<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
  <!-- Boxes -->
  <rect x="30" y="70" width="100" height="50" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
  <text x="80" y="100" font-family="sans-serif" font-size="15" font-weight="bold" fill="#312e81" text-anchor="middle">SOLID</text>
  
  <rect x="220" y="70" width="100" height="50" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
  <text x="270" y="100" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">LIQUID</text>
  
  <rect x="410" y="70" width="100" height="50" rx="8" fill="#ccfbf1" stroke="#0f766e" stroke-width="2"/>
  <text x="460" y="100" font-family="sans-serif" font-size="15" font-weight="bold" fill="#134e4a" text-anchor="middle">GAS</text>
  
  <!-- Arrow X (Solid -> Liquid) -->
  <path d="M 90 60 C 140 20, 200 20, 250 60" fill="none" stroke="#16a34a" stroke-width="2.5" marker-end="url(#green-arrow)"/>
  <text x="170" y="35" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803d">X (Melting)</text>
  
  <!-- Arrow Y (Liquid -> Gas) -->
  <path d="M 280 60 C 330 20, 390 20, 440 60" fill="none" stroke="#16a34a" stroke-width="2.5" marker-end="url(#green-arrow)"/>
  <text x="360" y="35" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803d">Y (Boiling)</text>
  
  <!-- Arrow Z (Gas -> Solid) -->
  <path d="M 430 130 C 350 185, 180 185, 100 130" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="260" y="185" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1d4ed8">Z (Deposition)</text>
  
  <!-- Arrow M (Liquid -> Solid / Gas -> Liquid) -->
  <path d="M 420 130 C 380 160, 310 160, 270 130" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="340" y="155" font-family="sans-serif" font-size="15" font-weight="bold" fill="#b91c1c">M (Freezing)</text>
</svg>`;

const diagramQ44 = `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
  <!-- Axes -->
  <line x1="80" y1="200" x2="450" y2="200" stroke="#334155" stroke-width="2"/>
  <line x1="80" y1="200" x2="80" y2="30" stroke="#334155" stroke-width="2"/>
  <polygon points="450,200 440,195 440,205" fill="#334155"/>
  <polygon points="80,30 75,40 85,40" fill="#334155"/>
  
  <text x="220" y="225" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569">Reaction Progress</text>
  <text x="35" y="120" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569" transform="rotate(-90 35,120)">Enthalpy (H)</text>
  
  <!-- Reactants Platform -->
  <line x1="100" y1="70" x2="220" y2="70" stroke="#16a34a" stroke-width="4"/>
  <text x="130" y="60" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">Reactants</text>
  
  <!-- Curve to Products -->
  <path d="M 220 70 C 260 70, 270 140, 310 140" fill="none" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4,4"/>
  
  <!-- Products Platform -->
  <line x1="310" y1="140" x2="430" y2="140" stroke="#dc2626" stroke-width="4"/>
  <text x="340" y="160" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b91c1c">Products</text>
  
  <!-- Delta H Drop Arrow -->
  <line x1="160" y1="70" x2="160" y2="140" stroke="#b91c1c" stroke-width="2.5"/>
  <line x1="100" y1="140" x2="310" y2="140" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3"/>
  <polygon points="160,140 155,130 165,130" fill="#b91c1c"/>
  <text x="175" y="110" font-family="sans-serif" font-size="15" font-weight="bold" fill="#b91c1c">ΔH &lt; 0 (Exothermic)</text>
</svg>`;

const diagramQ47 = `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
  <text x="20" y="115" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₃CH₂</text>
  <line x1="85" y1="110" x2="120" y2="110" stroke="#1e293b" stroke-width="2.5"/>
  
  <!-- C3 with 2 Br -->
  <text x="125" y="115" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">C</text>
  <line x1="132" y1="95" x2="132" y2="55" stroke="#991b1b" stroke-width="2.5"/>
  <text x="125" y="45" font-family="sans-serif" font-size="15" font-weight="bold" fill="#991b1b">Br</text>
  <line x1="132" y1="125" x2="132" y2="165" stroke="#1e293b" stroke-width="2.5"/>
  <text x="122" y="185" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₃</text>
  
  <line x1="145" y1="110" x2="185" y2="110" stroke="#1e293b" stroke-width="2.5"/>
  
  <!-- C4 with Br -->
  <text x="190" y="115" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">CH</text>
  <line x1="202" y1="95" x2="202" y2="55" stroke="#991b1b" stroke-width="2.5"/>
  <text x="195" y="45" font-family="sans-serif" font-size="15" font-weight="bold" fill="#991b1b">Br</text>
  
  <line x1="220" y1="110" x2="255" y2="110" stroke="#1e293b" stroke-width="2.5"/>
  
  <!-- C5 with 2 Ethyl groups -->
  <text x="260" y="115" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563eb">C</text>
  <line x1="267" y1="95" x2="267" y2="55" stroke="#1e293b" stroke-width="2.5"/>
  <text x="245" y="45" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₂CH₃</text>
  
  <line x1="267" y1="125" x2="267" y2="165" stroke="#1e293b" stroke-width="2.5"/>
  <text x="245" y="185" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₂CH₃</text>
  
  <line x1="277" y1="110" x2="315" y2="110" stroke="#1e293b" stroke-width="2.5"/>
  
  <!-- Rest of decane chain -->
  <text x="320" y="115" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">CH₂CH₂CH₂CH₂CH₃</text>
</svg>`;

export { diagramQ25, diagramQ29, diagramQ44, diagramQ47 };
