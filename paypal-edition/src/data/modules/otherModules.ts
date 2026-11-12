import { SubjectModule } from '../modulesData';

export const BIOLOGY_MODULE: SubjectModule = {
  id: 'module-bio',
  subjectCode: 'BIO',
  subjectName: 'Biology',
  iconName: 'Dna',
  colorGradient: 'from-emerald-600 via-green-600 to-teal-800',
  authorNote: 'Secondary Science Curriculum • Grade 9-12 Biology Module',
  description: 'Cell Biology, Taxonomy & Classification, Human Physiology, Genetics & Molecular Biology, Ecology & Conservation, Evolution, and Biotechnology.',
  units: [
    {
      unitNumber: 1,
      title: 'UNIT ONE: CELL BIOLOGY & MOLECULAR GENETICS',
      description: 'Cell theory, organelle structures, plant vs animal cells, cell membrane transport, DNA double helix, replication, transcription, translation, and Central Dogma.',
      topics: [
        {
          id: 'bio-1-1',
          topicNumber: '1.1',
          title: 'Cell Organelles & Membrane Transport',
          summary: 'Nucleus, mitochondria, chloroplasts, passive transport (diffusion, osmosis), and active ATP pumps.',
          content: `### 1.1 Cell Biology and Membrane Transport

Cells are the fundamental structural and functional units of all living organisms.

Key Organelle Functions:
• Nucleus: Contains genomic DNA and directs protein synthesis.
• Mitochondria: Site of aerobic respiration and cellular ATP generation.
• Chloroplasts: Site of plant photosynthesis containing chlorophyll pigments.
• Ribosomes: Catalyze peptide bond synthesis during mRNA translation.

Transport Mechanisms:
• Passive Transport: Diffusion and Osmosis (water movement across selectively permeable membranes down concentration gradients without ATP).
• Active Transport: Movement of ions/molecules against concentration gradients requiring ATP energy pumps.`
        }
      ]
    }
  ]
};

export const CHEMISTRY_MODULE: SubjectModule = {
  id: 'module-chem',
  subjectCode: 'CHEM',
  subjectName: 'Chemistry',
  iconName: 'FlaskConical',
  colorGradient: 'from-teal-600 via-emerald-600 to-cyan-800',
  authorNote: 'Secondary Chemistry Curriculum • Grade 9-12 Chemistry Module',
  description: 'Measurements, Atomic Theory, Periodic Trends, Chemical Bonding, Solutions & Colligative Properties, Chemical Equilibrium, Acids & Bases, Electrochemistry, and Organic Hydrocarbons.',
  units: [
    {
      unitNumber: 1,
      title: 'UNIT ONE: ATOMIC STRUCTURE & PERIODIC PROPERTIES',
      description: 'Dalton to Bohr atomic models, subatomic particles, isotopes, Bohr electron shells 2n², and periodic trends across periods and down groups.',
      topics: [
        {
          id: 'chem-1-1',
          topicNumber: '1.1',
          title: 'Subatomic Structure & Periodic Trends',
          summary: 'Protons, neutrons, electrons, electron configuration, atomic radius, ionization energy, and electronegativity.',
          content: `### 1.1 Atomic Structure and Periodic Trends

Subatomic Particles:
• Proton (p⁺): Charge +1, Mass ≈ 1 u, located inside nucleus.
• Neutron (n⁰): Charge 0, Mass ≈ 1 u, located inside nucleus.
• Electron (e⁻): Charge -1, Mass ≈ 1/1836 u, extranuclear shells.

Periodic Trends Summary:
• Across a Period (→): Atomic radius decreases; Ionization Energy, Electron Affinity, and Electronegativity increase.
• Down a Group (↓): Atomic radius increases; Ionization Energy, Electron Affinity, and Electronegativity decrease.`
        }
      ]
    }
  ]
};

export const SAT_MODULE: SubjectModule = {
  id: 'module-sat',
  subjectCode: 'SAT',
  subjectName: 'Aptitude (SAT)',
  iconName: 'Brain',
  colorGradient: 'from-rose-600 via-pink-600 to-purple-800',
  authorNote: 'Scholastic Aptitude & Logical Reasoning for Ethiopian University Admissions',
  description: 'Quantitative Aptitude, Verbal Reasoning, Analytical Logic, Number Series, Spatial Reasoning, and Data Interpretation for EUEE Scholastic Aptitude Test.',
  units: [
    {
      unitNumber: 1,
      title: 'UNIT ONE: QUANTITATIVE REASONING & NUMBER SERIES',
      description: 'Numerical patterns, arithmetic reasoning, ratio & proportion, percentage, algebraic puzzles, and spatial logical reasoning.',
      topics: [
        {
          id: 'sat-1-1',
          topicNumber: '1.1',
          title: 'Number Series & Pattern Recognition',
          summary: 'Identifying arithmetic, geometric, alternating, and polynomial term sequences in aptitude tests.',
          content: `### 1.1 Quantitative Aptitude: Pattern Recognition

Scholastic aptitude tests evaluate problem-solving speed and logical pattern recognition.

High-Frequency Series Types:
1. Arithmetic Differences: Consecutive terms differ by +k or -k or expanding differences +1, +3, +5, +7, ...
2. Geometric Ratios: Consecutive terms multiplied or divided by a constant factor (× 2, × 3, ...).
3. Square and Cube Sequences: n² ± k or n³ ± k (e.g. 1, 8, 27, 64, 125, ...).
4. Alternating / Interleaved Series: Odd position terms follow rule A; even position terms follow rule B.`
        }
      ]
    }
  ]
};
