import { ModuleUnit } from '../modulesData';

export const BIO_UNITS_1_TO_4: ModuleUnit[] = [
  {
    unitNumber: 1,
    title: 'UNIT ONE: CELL BIOLOGY & MICROSCOPY',
    description: 'Characteristics of life, light and electron microscopy, cell theory, prokaryotic vs eukaryotic cell architecture, organelles, membrane dynamics (fluid mosaic model), osmosis, active transport, and cell division (mitosis and meiosis).',
    topics: [
      {
        id: 'bio-1-1',
        topicNumber: '1.1',
        title: 'Microscopy, Cell Structure & Organelles',
        summary: 'Compound light vs electron microscopes, resolution vs magnification, organelle structures and physiological functions.',
        content: `### 1.1 Microscopy and Cellular Organization

1. Principles of Microscopy:
• Magnification: The degree of enlargement of an object. Total magnification = Magnification of eyepiece × Magnification of objective lens.
• Resolution (Resolving Power): The minimum distance between two distinct points at which they can still be seen as separate entities.
  - Light Microscope (LM): Uses visible light; maximum resolving power ~0.2 µm (~200 nm), maximum useful magnification ~1,500×.
  - Transmission Electron Microscope (TEM): Uses beam of electrons transmitted through ultra-thin specimen; resolution ~0.2 nm; used to view internal ultrastructures.
  - Scanning Electron Microscope (SEM): Scans surface with electron beam to generate high-resolution 3D surface topography.

2. Cell Theory:
• Formulated by Matthias Schleiden (1838) and Theodor Schwann (1839), expanded by Rudolf Virchow (1855, "Omnis cellula e cellula"):
  1. All living organisms are composed of one or more cells.
  2. The cell is the basic structural and functional unit of life.
  3. All cells arise from pre-existing cells by cell division.

3. Prokaryotes vs. Eukaryotes:
• Prokaryotes (Bacteria, Archaea): Lack membrane-bound nucleus and organelles; 70S ribosomes; circular naked DNA in nucleoid; peptidoglycan cell wall; binary fission.
• Eukaryotes (Protists, Fungi, Plants, Animals): Linear DNA enclosed in double-membraned nucleus with histones; membrane-bound organelles (mitochondria, ER, Golgi); 80S ribosomes; mitosis and meiosis.

4. Essential Organelles & Functions:
• Nucleus: Double membrane with nuclear pores; houses chromatin and nucleolus (site of rRNA transcription and ribosome assembly).
• Mitochondria: Double-membraned powerhouse; cristae increase surface area for ATP synthase; matrix contains mitochondrial DNA and Krebs cycle enzymes.
• Endoplasmic Reticulum (ER):
  - Rough ER: Studded with ribosomes; synthesizes and processes proteins destined for secretion or membranes.
  - Smooth ER: Lacks ribosomes; synthesizes lipids, phospholipids, steroids; detoxifies drugs in liver cells; stores Ca²⁺ in muscle cells.
• Golgi Apparatus: Stacks of flattened cisternae; modifies, sorts, and packages glycoproteins into secretory vesicles.
• Lysosomes: Hydrolytic enzyme vesicles operating at acidic pH for autophagy, phagocytosis, and apoptosis.
• Chloroplasts: Found in photosynthetic eukaryotes; double-membrane, stroma (Calvin cycle), thylakoids stacked in grana containing chlorophyll.
• Ribosomes: Non-membrane bound ribonucleoprotein complexes; translate mRNA into polypeptides.`,
        workedExamples: [
          {
            problem: 'A light microscope eyepiece has a magnification of 10× and the high-power objective has a magnification of 40×. If a plant cell measures 30 µm across, what is the apparent image size viewed through the microscope?',
            solution: 'Total magnification = Eyepiece × Objective = 10 × 40 = 400×.\nApparent image size = Actual size × Magnification = 30 µm × 400 = 12,000 µm = 12 mm.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which organelle is responsible for post-translational modification and sorting of proteins for secretion?',
            options: ['Ribosome', 'Golgi apparatus', 'Peroxisome', 'Smooth endoplasmic reticulum'],
            correctIndex: 1,
            explanation: 'The Golgi apparatus modifies (e.g., glycosylation), packages, and directs proteins received from the rough ER toward their cellular or extracellular destinations.'
          },
          {
            question: 'Which microscope provides the highest resolving power to study internal organelles such as mitochondrial cristae?',
            options: ['Compound light microscope', 'Phase-contrast microscope', 'Transmission electron microscope (TEM)', 'Scanning electron microscope (SEM)'],
            correctIndex: 2,
            explanation: 'TEM utilizes short-wavelength electron beams transmitted through thin sections, achieving resolutions down to ~0.2 nm, ideal for internal ultrastructures.'
          },
          {
            question: 'What is a structural difference between prokaryotic and eukaryotic ribosomes?',
            options: ['Prokaryotes have 70S ribosomes while eukaryotes have 80S cytosolic ribosomes', 'Prokaryotes lack ribosomes entirely', 'Eukaryotic ribosomes lack RNA', 'Prokaryotic ribosomes are membrane-bound'],
            correctIndex: 0,
            explanation: 'Prokaryotes possess 70S ribosomes (50S + 30S subunits), whereas eukaryotic cytoplasm contains 80S ribosomes (60S + 40S subunits).'
          },
          {
            question: 'Who first contributed the principle that "all cells arise from pre-existing cells" (Omnis cellula e cellula)?',
            options: ['Robert Hooke', 'Anton van Leeuwenhoek', 'Rudolf Virchow', 'Matthias Schleiden'],
            correctIndex: 2,
            explanation: 'Rudolf Virchow proposed in 1855 that cells divide to produce daughter cells, completing the classical cell theory.'
          },
          {
            question: 'Which organelle contains hydrolytic enzymes responsible for intracellular digestion and autophagy?',
            options: ['Lysosome', 'Centrosome', 'Ribosome', 'Nucleolus'],
            correctIndex: 0,
            explanation: 'Lysosomes contain acid hydrolases that digest phagocytosed pathogens and recycle damaged cellular organelles.'
          },
          {
            question: 'Which of the following cellular structures is present in BOTH plant and animal cells?',
            options: ['Cell wall composed of cellulose', 'Centrioles for spindle fiber formation', 'Large central sap vacuole', 'Mitochondria for ATP production'],
            correctIndex: 3,
            explanation: 'Both plant and animal cells require mitochondria to carry out aerobic cellular respiration and produce ATP.'
          },
          {
            question: 'Smooth endoplasmic reticulum is primarily involved in which physiological process?',
            options: ['Translation of secretory proteins', 'Lipid and steroid hormone synthesis', 'Transcription of ribosomal RNA', 'Light-dependent photolysis of water'],
            correctIndex: 1,
            explanation: 'Smooth ER lacks ribosomes and synthesizes lipids, phospholipids, and steroid hormones, while detoxifying metabolic byproducts.'
          },
          {
            question: 'If a magnified image is 15 mm in length under a microscope of 500× total magnification, what is the actual size of the specimen?',
            options: ['30 µm', '300 µm', '7.5 µm', '3 µm'],
            correctIndex: 0,
            explanation: 'Actual size = Image size / Magnification = 15,000 µm / 500 = 30 µm.'
          }
        ]
      },
      {
        id: 'bio-1-2',
        topicNumber: '1.2',
        title: 'Membrane Transport, Osmosis & Cell Cycle (Mitosis & Meiosis)',
        summary: 'Fluid mosaic model, passive diffusion, osmosis, active transport, and stages of mitosis versus meiosis.',
        content: `### 1.2 Membrane Transport & Cell Division

1. Fluid Mosaic Model of Cell Membrane (Singer & Nicolson, 1972):
• Phospholipid Bilayer: Amphipathic molecules with hydrophilic polar heads (phosphate group) facing aqueous environments and hydrophobic nonpolar fatty acid tails facing inwards.
• Membrane Proteins:
  - Integral (transmembrane) proteins: Channels, carrier proteins, and receptor molecules.
  - Peripheral proteins: Attached to exterior or interior surfaces for signaling and cytoskeletal anchorage.
• Cholesterol: Modulates membrane fluidity (prevents excessive fluidity at high temperatures and prevents crystallization at low temperatures).
• Glycocalyx: Glycoproteins and glycolipids crucial for cell-cell recognition and immune identification.

2. Mechanisms of Membrane Transport:
• Passive Transport (Down electrochemical/concentration gradient, NO ATP required):
  - Simple Diffusion: Direct transit of small nonpolar molecules (O₂, CO₂, lipids, N₂) across lipid bilayer.
  - Facilitated Diffusion: Protein-mediated transport of polar/charged molecules (glucose, amino acids, ions) via channels or carriers.
  - Osmosis: Net movement of free water molecules across a selectively permeable membrane from an area of lower solute concentration (higher water potential) to higher solute concentration (lower water potential).
    * Hypotonic Solution: Water enters cell ⟹ Plant cells become turgid (normal); animal cells swell and lyse.
    * Hypertonic Solution: Water leaves cell ⟹ Plant cells undergo plasmolysis; animal cells become crenated/shriveled.
    * Isotonic Solution: No net water movement (dynamic equilibrium).
• Active Transport (Against concentration gradient, REQUIRES ATP):
  - Primary Active Transport: Direct ATP hydrolysis (e.g., Na⁺/K⁺-ATPase pump: moves 3 Na⁺ out and 2 K⁺ in per ATP).
  - Secondary Active Transport (Cotransport): Symport and antiport driven by ion electrochemical gradients.
  - Bulk Transport: Endocytosis (phagocytosis "cell eating", pinocytosis "cell drinking", receptor-mediated) and Exocytosis.

3. The Cell Cycle & Mitosis:
• Interphase: G1 (growth and protein synthesis), S (DNA replication; chromosomes duplicate into sister chromatids), G2 (preparation for division, spindle protein synthesis).
• Mitosis (Somatic cell division producing 2 genetically identical diploid 2n daughter cells):
  - Prophase: Chromatin condenses into visible chromosomes; nucleolus and nuclear envelope disassemble; centrosomes migrate to poles.
  - Metaphase: Chromosomes align along equatorial metaphase plate; spindle fibers attach to kinetochores.
  - Anaphase: Sister chromatids separate at centromeres and are pulled to opposite spindle poles.
  - Telophase: Nuclear envelopes reform around daughter nuclei; chromosomes decondense.
  - Cytokinesis: Cleavage furrow formation in animal cells (actin-myosin ring); cell plate formation in plant cells.

4. Meiosis (Gamete formation, reductive division producing 4 genetically varied haploid n gametes):
• Meiosis I (Reductional Division):
  - Prophase I: Synapsis of homologous chromosomes forming tetrads/bivalents; Crossing Over at chiasmata creates genetic recombination.
  - Metaphase I: Independent assortment of homologous pairs along equatorial plate.
  - Anaphase I: Homologous chromosomes separate (sister chromatids remain attached).
  - Telophase I: Forms 2 haploid nuclei.
• Meiosis II (Equational Division, resembles mitosis):
  - Separates sister chromatids, yielding 4 genetically unique haploid gametes (sperm/egg).`,
        workedExamples: [
          {
            problem: 'A human somatic cell has 46 chromosomes (2n = 46). State the number of chromosomes and the number of chromatids present in the cell during: (a) G1 phase, (b) Metaphase of mitosis, and (c) an individual daughter cell after Meiosis I.',
            solution: '(a) G1 phase: 46 chromosomes, 46 chromatids (unreplicated).\n(b) Metaphase of mitosis: 46 chromosomes, 92 sister chromatids.\n(c) After Meiosis I: 23 chromosomes, 46 chromatids (each chromosome composed of 2 sister chromatids).'
          }
        ],
        practiceQuestions: [
          {
            question: 'During which phase of meiosis does crossing over and genetic recombination occur?',
            options: ['Metaphase I', 'Prophase I', 'Anaphase II', 'Telophase I'],
            correctIndex: 1,
            explanation: 'Crossing over takes place in Prophase I of meiosis between non-sister chromatids of homologous chromosomes at points called chiasmata.'
          },
          {
            question: 'What occurs to a red blood cell placed in a strongly hypertonic sodium chloride solution?',
            options: ['It absorbs water and bursts (hemolysis)', 'It loses water and shrivels (crenation)', 'It maintains normal volume', 'It builds up turgor pressure'],
            correctIndex: 1,
            explanation: 'In a hypertonic medium, water exits the erythrocyte down the water potential gradient, causing it to shrink and crenate.'
          },
          {
            question: 'The sodium-potassium pump (Na⁺/K⁺-ATPase) actively transports which ratio of ions per ATP consumed?',
            options: ['3 Na⁺ into cell, 2 K⁺ out', '3 Na⁺ out of cell, 2 K⁺ in', '2 Na⁺ out of cell, 3 K⁺ in', '1 Na⁺ out of cell, 1 K⁺ in'],
            correctIndex: 1,
            explanation: 'The Na⁺/K⁺-ATPase pump hydrolyzes 1 ATP to transport 3 Na⁺ out of the cell and 2 K⁺ into the cell against their electrochemical gradients.'
          },
          {
            question: 'During which stage of the eukaryotic cell cycle is genomic nuclear DNA replicated?',
            options: ['G1 phase', 'S phase (Synthesis)', 'G2 phase', 'M phase (Mitosis)'],
            correctIndex: 1,
            explanation: 'DNA replication occurs exclusively during the S phase of interphase.'
          },
          {
            question: 'In plant cell cytokinesis, what structure develops to divide the cytoplasm into two daughter cells?',
            options: ['Cleavage furrow', 'Centrosome groove', 'Cell plate derived from Golgi vesicles', 'Kinetochore ring'],
            correctIndex: 2,
            explanation: 'Plant cytokinesis occurs via cell plate formation as Golgi-derived vesicles coalesce across the division plane.'
          },
          {
            question: 'How many total viable spermatozoa are produced from a single primary spermatocyte undergoing complete meiosis?',
            options: ['1', '2', '4', '8'],
            correctIndex: 2,
            explanation: 'Spermatogenesis produces 4 functional haploid spermatozoa from one primary spermatocyte.'
          },
          {
            question: 'Which component of the plasma membrane acts as a fluidity buffer across varying physiological temperatures?',
            options: ['Cholesterol', 'Glycolipids', 'Peripheral proteins', 'Carbohydrate chains'],
            correctIndex: 0,
            explanation: 'Cholesterol restrains phospholipid movement at higher temperatures and impedes packing at lower temperatures, maintaining fluidity.'
          },
          {
            question: 'Separation of homologous chromosome pairs occurs during which phase?',
            options: ['Anaphase of mitosis', 'Anaphase I of meiosis', 'Anaphase II of meiosis', 'Metaphase II of meiosis'],
            correctIndex: 1,
            explanation: 'Homologous chromosome pairs segregate during Anaphase I of meiosis, whereas sister chromatids separate in Anaphase II and Mitotic Anaphase.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 2,
    title: 'UNIT TWO: BIOCHEMICAL MOLECULES & ENZYMES',
    description: 'Structure and physiological roles of biological macromolecules (carbohydrates, lipids, proteins, nucleic acids), ATP, enzyme kinetics, active site catalysis, and enzyme inhibition.',
    topics: [
      {
        id: 'bio-2-1',
        topicNumber: '2.1',
        title: 'Biological Macromolecules & Chemical Bonds of Life',
        summary: 'Monosaccharides, disaccharides, polysaccharides, saturated vs unsaturated lipids, protein folding hierarchies, and nucleic acid structure.',
        content: `### 2.1 Biological Macromolecules

1. Carbohydrates (General formula: C_n(H₂O)_n):
• Monosaccharides: Single sugar units. Trioses (glyceraldehyde), pentoses (ribose, deoxyribose), hexoses (glucose, fructose, galactose).
• Disaccharides: Formed via condensation (dehydration) reactions forming glycosidic bonds:
  - Maltose = Glucose + Glucose (α-1,4-glycosidic bond).
  - Sucrose = Glucose + Fructose (non-reducing sugar).
  - Lactose = Glucose + Galactose (milk sugar).
• Polysaccharides:
  - Starch: Plant energy reserve consisting of amylose (unbranched α-1,4) and amylopectin (branched α-1,6).
  - Glycogen: Animal energy reserve stored in liver and muscle; highly branched α-1,4 and α-1,6 linkages.
  - Cellulose: Structural polymer in plant cell walls; linear β-1,4-glucan chains linked by hydrogen bonds forming microfibrils. Cannot be digested by human amylase.
  - Chitin: Exoskeleton of arthropods and fungal cell walls (polymer of N-acetylglucosamine).

2. Lipids (Hydrophobic organic macromolecules):
• Triglycerides: 1 glycerol + 3 fatty acids linked via ester bonds.
  - Saturated Fatty Acids: No C=C double bonds; maximum hydrogen atoms; straight chains that pack densely (solid at room temperature, e.g., animal fats).
  - Unsaturated Fatty Acids: Contain one (monounsaturated) or more (polyunsaturated) C=C cis-double bonds; create kinks that prevent tight packing (liquid oils at room temperature).
• Phospholipids: Glycerol + 2 fatty acids + phosphate group; amphipathic basis of biological membranes.
• Steroids: Four fused carbon rings (e.g., cholesterol, testosterone, estrogen, bile salts).

3. Proteins (Polymers of 20 L-α-amino acids linked by peptide bonds):
• Amino Acid Structure: Central α-carbon bonded to -NH₂ (amino group), -COOH (carboxyl group), -H, and variable -R side chain.
• Levels of Protein Organization:
  - Primary Structure: Linear sequence of amino acids joined by covalent peptide bonds.
  - Secondary Structure: Local folding stabilized by hydrogen bonds between backbone carbonyl and amide groups (α-helix and β-pleated sheet).
  - Tertiary Structure: Overall 3D conformation stabilized by R-group interactions (hydrophobic interactions, ionic salt bridges, hydrogen bonds, and covalent disulfide bridges -S-S-).
  - Quaternary Structure: Multi-subunit association (e.g., hemoglobin = 2α + 2β chains with 4 heme groups).
• Denaturation: Loss of secondary, tertiary, and quaternary structure by heat, extreme pH, heavy metals, or organic solvents, destroying biological activity.

4. Nucleic Acids:
• Monomer: Nucleotide consisting of nitrogenous base + pentose sugar + phosphate group linked by phosphodiester bonds.
• DNA (Deoxyribonucleic acid): Double helix, antiparallel strands (5' to 3' and 3' to 5'), complementary base pairing via hydrogen bonds: Adenine = Thymine (2 H-bonds), Guanine ≡ Cytosine (3 H-bonds). Sugar is 2-deoxyribose.
• RNA (Ribonucleic acid): Single-stranded, contains ribose sugar, replaces Thymine with Uracil (A pairs with U). Messenger RNA (mRNA), Transfer RNA (tRNA), Ribosomal RNA (rRNA).`,
        workedExamples: [
          {
            problem: 'A double-stranded DNA sample contains 28% Cytosine. Using Chargaff\'s rules, determine the percentage of Adenine, Guanine, and Thymine in the sample.',
            solution: 'According to Chargaff\'s rule:\n1. %G = %C = 28%.\n2. Total G + C = 28% + 28% = 56%.\n3. %A + %T = 100% - 56% = 44%.\n4. Since %A = %T, %A = 44% / 2 = 22% and %T = 22%.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which covalent linkage joins adjacent monosaccharide units in a disaccharide or polysaccharide?',
            options: ['Peptide bond', 'Phosphodiester bond', 'Glycosidic bond', 'Ester bond'],
            correctIndex: 2,
            explanation: 'Glycosidic bonds are formed by dehydration synthesis between the hydroxyl groups of adjacent carbohydrate monomers.'
          },
          {
            question: 'Which level of protein structure is stabilized predominantly by hydrogen bonding between peptide backbone -C=O and -N-H groups?',
            options: ['Primary structure', 'Secondary structure', 'Tertiary structure', 'Quaternary structure'],
            correctIndex: 1,
            explanation: 'Secondary structure (such as alpha-helices and beta-pleated sheets) arises from hydrogen bonds between backbone atoms.'
          },
          {
            question: 'Which of the following carbohydrates is a non-reducing sugar that does NOT give a positive Benedict\'s test without prior acid hydrolysis?',
            options: ['Glucose', 'Maltose', 'Sucrose', 'Lactose'],
            correctIndex: 2,
            explanation: 'Sucrose is a non-reducing sugar because its glycosidic bond involves both anomeric carbons of glucose and fructose, leaving no free aldehyde or ketone group.'
          },
          {
            question: 'If a segment of double-stranded DNA contains 32% Adenine, what is the percentage of Guanine?',
            options: ['32%', '18%', '36%', '68%'],
            correctIndex: 1,
            explanation: '%A = %T = 32%, so A + T = 64%. Remaining G + C = 36%, therefore %G = %C = 18%.'
          },
          {
            question: 'What type of bond stabilizes the tertiary structure of proteins through covalent linkage between two cysteine side chains?',
            options: ['Disulfide bridge', 'Ionic bond', 'Hydrogen bond', 'Van der Waals interaction'],
            correctIndex: 0,
            explanation: 'Cysteine residues contain -SH (thiol) groups that oxidize to form covalent disulfide (-S-S-) bridges.'
          },
          {
            question: 'Which storage polysaccharide is found in animal hepatocytes and myocytes with high branching?',
            options: ['Amylose', 'Cellulose', 'Glycogen', 'Chitin'],
            correctIndex: 2,
            explanation: 'Glycogen is the animal carbohydrate storage form, extensively branched via α-1,6-glycosidic links for rapid glucose mobilization.'
          },
          {
            question: 'What distinguishes unsaturated fatty acids from saturated fatty acids at room temperature?',
            options: ['Presence of carbon-carbon double bonds causing kinks that keep them liquid', 'Higher melting points in unsaturated fats', 'Absence of carboxyl functional groups', 'Presence of peptide bonds'],
            correctIndex: 0,
            explanation: 'Cis-double bonds in unsaturated fatty acids introduce bends that hinder close packing, lowering their melting temperature and keeping them liquid.'
          },
          {
            question: 'Which base is found in RNA but is completely absent from DNA?',
            options: ['Adenine', 'Cytosine', 'Uracil', 'Thymine'],
            correctIndex: 2,
            explanation: 'RNA incorporates Uracil (U) instead of Thymine (T) to base pair with Adenine.'
          }
        ]
      },
      {
        id: 'bio-2-2',
        topicNumber: '2.2',
        title: 'Enzyme Kinetics, Catalysis & Inhibition',
        summary: 'Enzymes as biological catalysts, activation energy reduction, active sites, Michaelis-Menten principles, competitive vs non-competitive inhibition.',
        content: `### 2.2 Enzyme Action and Catalytic Regulation

1. Properties of Enzymes:
• Biological catalysts (primarily globular proteins, with some catalytic RNAs known as ribozymes).
• Accelerate biochemical reaction rates by factors of 10⁶ to 10¹² by lowering the activation energy (E_a).
• Do NOT alter the equilibrium constant (K_eq) or change the overall free energy (ΔG) of the reaction.
• Exhibit high substrate specificity due to complementary binding sites.

2. Models of Enzyme-Substrate Binding:
• Lock and Key Model (Emil Fischer, 1894): The active site is rigid and pre-shaped to fit the substrate with complementary geometry.
• Induced Fit Model (Daniel Koshland, 1958): The active site is flexible; substrate binding induces a conformational change in the enzyme that aligns catalytic residues precisely and strains substrate bonds to form the transition state.

3. Factors Influencing Enzyme Reaction Velocity:
• Temperature:
  - Velocity increases with temperature up to the optimum temperature (approx. 37 °C for human enzymes) due to increased kinetic energy and collision frequency (Q₁₀ rule).
  - Above optimum temperature, thermal agitation disrupts hydrogen and ionic bonds, causing irreversible thermal denaturation.
• pH: Each enzyme has an optimum pH (e.g., pepsin in stomach ~pH 1.5–2, salivary amylase ~pH 6.8, trypsin in duodenum ~pH 8). Extreme pH alters the ionization state of active site amino acid side chains.
• Substrate Concentration [S]:
  - At low [S], rate is directly proportional to [S] (first-order kinetics).
  - At high [S], all active sites become saturated, reaching maximum velocity (V_max) (zero-order kinetics).
• K_m (Michaelis Constant): Substrate concentration at which reaction velocity is half of V_max (½ V_max). A lower K_m reflects higher substrate affinity.

4. Enzyme Inhibition:
• Competitive Inhibition:
  - Inhibitor structurally resembles the substrate and competes for the active site.
  - Can be overcome by increasing substrate concentration [S].
  - Effect on parameters: V_max remains unchanged; apparent K_m increases.
  - Example: Malonate competing with succinate for succinate dehydrogenase; statin drugs competing with HMG-CoA reductase.
• Non-Competitive (Allosteric) Inhibition:
  - Inhibitor binds to an allosteric site (different from active site), altering enzyme conformation so the active site cannot effectively catalyze.
  - Cannot be overcome by increasing [S].
  - Effect on parameters: V_max decreases; K_m remains unchanged.
  - Example: Cyanide binding cytochrome c oxidase; heavy metals (Pb²⁺, Hg²⁺) binding enzyme thiol groups.
• Feedback (End-Product) Inhibition: The final product of a metabolic pathway allosterically inhibits the first committed pathway enzyme, preventing excessive buildup.`,
        workedExamples: [
          {
            problem: 'In an experiment, enzyme activity was measured in the presence of an unknown inhibitor. When substrate concentration was increased significantly, the reaction rate reached the normal uninhibited V_max, but the apparent K_m was double the original value. Identify the type of inhibition and explain.',
            solution: 'The unknown inhibitor is a Competitive Inhibitor. In competitive inhibition, the inhibitor competes directly with the substrate for the active site. Increasing [S] outcompetes the inhibitor, restoring the original V_max, but higher substrate is needed to achieve ½ V_max, thus increasing apparent K_m.'
          }
        ],
        practiceQuestions: [
          {
            question: 'How do enzymes accelerate chemical reaction rates without altering reaction equilibrium?',
            options: ['By lowering the activation energy barrier', 'By increasing free energy change (ΔG)', 'By raising the reaction temperature', 'By converting endergonic reactions to exergonic ones'],
            correctIndex: 0,
            explanation: 'Enzymes lower the activation energy required to achieve the transition state, accelerating forward and reverse rates without shifting equilibrium.'
          },
          {
            question: 'What is the effect of a competitive inhibitor on enzyme kinetic parameters V_max and K_m?',
            options: ['Decreases V_max and leaves K_m unchanged', 'V_max remains unchanged and apparent K_m increases', 'Both V_max and K_m decrease', 'V_max increases and K_m decreases'],
            correctIndex: 1,
            explanation: 'Competitive inhibitors compete for the active site: V_max is reachable with saturating [S], so V_max is unchanged, but higher [S] is required to reach ½ V_max, increasing K_m.'
          },
          {
            question: 'What is the Michaelis constant (K_m) of an enzyme?',
            options: ['The maximum velocity of the catalyzed reaction', 'The substrate concentration at which reaction rate is half of V_max', 'The optimal temperature for enzyme catalysis', 'The activation energy of the uncatalyzed reaction'],
            correctIndex: 1,
            explanation: 'K_m is defined as the substrate concentration at which reaction velocity is exactly half of V_max, inversely measuring affinity.'
          },
          {
            question: 'Which model states that substrate binding induces conformational adjustment in the enzyme active site?',
            options: ['Lock and Key model', 'Fluid Mosaic model', 'Induced Fit model', 'Central Dogma model'],
            correctIndex: 2,
            explanation: 'Koshland\'s Induced Fit model explains that the enzyme undergoes subtle structural adaptation upon substrate docking.'
          },
          {
            question: 'Pepsin exhibits optimal catalytic activity at which physiological pH range?',
            options: ['pH 1.5 – 2.0', 'pH 6.5 – 7.0', 'pH 8.0 – 8.5', 'pH 10.0 – 11.0'],
            correctIndex: 0,
            explanation: 'Pepsin functions in the highly acidic gastric juice of the stomach with an optimum pH around 1.5 to 2.0.'
          },
          {
            question: 'In non-competitive inhibition, where does the inhibitor molecule bind?',
            options: ['Directly to the catalytic active site', 'To an allosteric site distinct from the active site', 'To the substrate molecule', 'To the product molecule'],
            correctIndex: 1,
            explanation: 'Non-competitive inhibitors bind to allosteric sites away from the active site, altering the 3D shape and reducing catalytic efficacy.'
          },
          {
            question: 'When the end product of a multi-step biosynthetic pathway inhibits the first committed pathway enzyme, the mechanism is called:',
            options: ['Feedback inhibition', 'Competitive displacement', 'Substrate phosphorylation', 'Irreversible denaturation'],
            correctIndex: 0,
            explanation: 'Feedback (or end-product) inhibition prevents redundant metabolic expenditure by turning off the pacemaker enzyme.'
          },
          {
            question: 'What occurs when an enzyme is heated significantly beyond its optimum temperature?',
            options: ['Reaction velocity increases indefinitely', 'The enzyme undergoes irreversible thermal denaturation of its active site', 'The enzyme converts into a non-protein ribozyme', 'The substrate transforms into an inhibitor'],
            correctIndex: 1,
            explanation: 'Excessive thermal kinetic energy ruptures weak hydrogen and ionic bonds stabilizing tertiary structure, irreversibly destroying catalytic activity.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 3,
    title: 'UNIT THREE: CELLULAR METABOLISM & ENERGY CONVERSIONS',
    description: 'Photosynthesis (light reactions, photophosphorylation, Calvin-Benson cycle, C3/C4/CAM adaptations) and Cellular Respiration (glycolysis, link reaction, Krebs cycle, oxidative phosphorylation, and anaerobic fermentation).',
    topics: [
      {
        id: 'bio-3-1',
        topicNumber: '3.1',
        title: 'Photosynthesis: Light Reactions & Calvin Cycle',
        summary: 'Chloroplast ultrastructure, light harvesting, non-cyclic and cyclic photophosphorylation, Rubisco and Calvin cycle stages.',
        content: `### 3.1 Photosynthesis: Light and Dark Reactions

1. Overview of Photosynthesis:
• Overall equation: 6CO₂ + 6H₂O + Light Energy ⟶ C₆H₁₂O₆ + 6O₂ (using chlorophyll in chloroplasts).
• Takes place in chloroplasts:
  - Thylakoids / Grana: Site of light-dependent reactions (photolysis, electron transport, ATP & NADPH generation).
  - Stroma: Gel-like fluid containing enzymes, site of light-independent Calvin cycle (CO₂ fixation).

2. Light-Dependent Reactions:
• Photosystems: Multi-protein complexes embedded in thylakoid membrane consisting of light-harvesting antenna complexes (chlorophyll a, chlorophyll b, carotenoids) and a reaction center:
  - Photosystem II (PS II, P680): Absorbs light at 680 nm.
  - Photosystem I (PS I, P700): Absorbs light at 700 nm.
• Non-Cyclic Photophosphorylation (Z-Scheme):
  1. Photolysis of Water: Water-splitting enzyme at PS II breaks 2H₂O ⟶ 4H⁺ + 4e⁻ + O₂. O₂ is released as a byproduct into the atmosphere.
  2. Electron Transport Chain: Excited electrons from P680 pass through plastoquinone (Pq), cytochrome b₆f complex, and plastocyanin (Pc) to PS I.
  3. Chemiosmosis: H⁺ ions pumped across thylakoid membrane into the lumen create a proton motive force. Protons return to stroma via ATP synthase, phosphorylating ADP + P_i ⟶ ATP.
  4. NADPH Formation: Excited electrons from P700 pass through ferredoxin (Fd) to NADP⁺ reductase, forming NADPH.
• Cyclic Photophosphorylation: Involves only PS I. Electrons cycle from P700 to ferredoxin, cytochrome complex, and back to P700, generating ATP only without NADPH or O₂ production.

3. Light-Independent Reactions (Calvin-Benson Cycle in Stroma):
• Phase 1: Carbon Fixation:
  - CO₂ combines with 5-carbon ribulose 1,5-bisphosphate (RuBP), catalyzed by the enzyme RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase).
  - Produces an unstable 6C intermediate that splits into 2 molecules of 3-phosphoglycerate (3-PGA).
• Phase 2: Reduction:
  - 3-PGA is phosphorylated by ATP and reduced by NADPH to form glyceraldehyde-3-phosphate (G3P / PGAL).
  - For every 3 CO₂ fixed, 6 G3P are produced, of which 1 G3P exits to form glucose and other carbohydrates.
• Phase 3: Regeneration of RuBP:
  - The remaining 5 G3P molecules are rearranged using 3 ATP to regenerate 3 RuBP molecules, completing the cycle.
• Net cost per 1 molecule of glucose (6 CO₂): Requires 18 ATP and 12 NADPH.

4. C4 and CAM Plant Adaptations:
• Photorespiration: In hot dry climates, RuBisCO binds O₂ instead of CO₂, wasting energy and carbon.
• C4 Pathway (Kranz Anatomy, e.g., Maize, Sugarcane, Sorghum):
  - Initial CO₂ fixation by PEP carboxylase (high affinity for CO₂, no oxygenase activity) in mesophyll cells to form 4C oxaloacetate.
  - Malate transferred to bundle sheath cells where CO₂ is released at high concentration around RuBisCO.
• CAM Pathway (Crassulacean Acid Metabolism, e.g., Cactus, Pineapple):
  - Stomata open at night to fix CO₂ into malic acid; stomata close during hot day to prevent transpiration while CO₂ is released internally for Calvin cycle.`,
        workedExamples: [
          {
            problem: 'Calculate the total number of ATP and NADPH molecules required by the Calvin cycle to synthesize one net molecule of hexose glucose (C₆H₁₂O₆).',
            solution: 'Synthesis of 1 glucose requires 6 CO₂ turns of the cycle:\n1. 6 CO₂ + 6 RuBP ⟶ 12 (3-PGA).\n2. Reduction: 12 (3-PGA) + 12 ATP + 12 NADPH ⟶ 12 G3P.\n3. Regeneration: 10 G3P + 6 ATP ⟶ 6 RuBP.\nTotal requirements: 12 + 6 = 18 ATP, and 12 NADPH.'
          }
        ],
        practiceQuestions: [
          {
            question: 'During light-dependent photosynthesis, from which molecule is atmospheric oxygen (O₂) released as a byproduct?',
            options: ['Carbon dioxide (CO₂)', 'Water (H₂O)', 'Glucose (C₆H₁₂O₆)', 'Ribulose-1,5-bisphosphate (RuBP)'],
            correctIndex: 1,
            explanation: 'Oxygen is released during the photolysis of water at Photosystem II (2H₂O ⟶ 4H⁺ + 4e⁻ + O₂).'
          },
          {
            question: 'Which enzyme catalyzes the primary carbon fixation reaction in the Calvin cycle?',
            options: ['PEP carboxylase', 'ATP synthase', 'RuBisCO', 'Phosphofructokinase'],
            correctIndex: 2,
            explanation: 'RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase) fixes atmospheric CO₂ onto RuBP.'
          },
          {
            question: 'Where specifically do the light-dependent reactions of photosynthesis take place within a plant cell?',
            options: ['Chloroplast stroma', 'Thylakoid membranes', 'Mitochondrial matrix', 'Outer chloroplast membrane'],
            correctIndex: 1,
            explanation: 'Light-absorbing photosystems and electron transport chains are embedded within the thylakoid membranes.'
          },
          {
            question: 'What are the two high-energy chemical products generated by light reactions used to drive the Calvin cycle?',
            options: ['Glucose and O₂', 'ATP and NADPH', 'FADH₂ and NADH', 'Pyruvate and lactate'],
            correctIndex: 1,
            explanation: 'ATP and NADPH produced in the light reactions supply the chemical energy and reducing power to synthesize sugars in the stroma.'
          },
          {
            question: 'Which anatomical feature characterizes C4 plants to prevent photorespiration in arid conditions?',
            options: ['Kranz anatomy with specialized bundle sheath cells', 'Cuticular stomatal crypts', 'Absence of chloroplasts in mesophyll cells', 'Peroxisomal sheath'],
            correctIndex: 0,
            explanation: 'Kranz anatomy arranges bundle sheath cells around vascular bundles, concentrating CO₂ around RuBisCO.'
          },
          {
            question: 'How do CAM plants conserve water while carrying out photosynthesis in desert biomes?',
            options: ['Opening stomata during the day only', 'Fixing carbon dioxide at night when stomata are open and running Calvin cycle by day', 'Excluding RuBisCO entirely', 'Synthesizing glucose without light energy'],
            correctIndex: 1,
            explanation: 'CAM plants open stomata at night to store CO₂ as organic malic acid, closing stomata during day to minimize water loss.'
          },
          {
            question: 'How many molecules of ATP and NADPH are consumed to synthesize one net molecule of glucose in C3 photosynthesis?',
            options: ['12 ATP and 12 NADPH', '18 ATP and 12 NADPH', '36 ATP and 24 NADPH', '6 ATP and 6 NADPH'],
            correctIndex: 1,
            explanation: 'Fixing 6 CO₂ into 1 glucose requires 18 ATP (12 during reduction, 6 during RuBP regeneration) and 12 NADPH.'
          },
          {
            question: 'Which photosystem reaction center is designated P680 and participates in the photolysis of water?',
            options: ['Photosystem I', 'Photosystem II', 'ATP synthase complex', 'Cytochrome c oxidase'],
            correctIndex: 1,
            explanation: 'Photosystem II contains the P680 reaction center and the water-splitting manganese complex.'
          }
        ]
      },
      {
        id: 'bio-3-2',
        topicNumber: '3.2',
        title: 'Cellular Respiration: Aerobic & Anaerobic Pathways',
        summary: 'Glycolysis, link reaction, Krebs cycle, electron transport chain, ATP yield, and lactic acid/ethanol fermentation.',
        content: `### 3.2 Cellular Respiration & ATP Yield

1. Overview:
• Overall equation: C₆H₁₂O₆ + 6O₂ ⟶ 6CO₂ + 6H₂O + ~30–32 ATP.
• Four Stages of Aerobic Respiration:
  1. Glycolysis (Cytosol)
  2. Link Reaction / Pyruvate Oxidation (Mitochondrial Matrix)
  3. Krebs (Citric Acid) Cycle (Mitochondrial Matrix)
  4. Oxidative Phosphorylation & Chemiosmosis (Mitochondrial Inner Membrane / Cristae)

2. Stage 1: Glycolysis (in Cytosol, Anaerobic):
• 1 Glucose (6C) ⟶ 2 Pyruvate (3C).
• Energy investment phase: Uses 2 ATP (phosphorylates glucose to fructose-1,6-bisphosphate).
• Energy payoff phase: Yields 4 ATP (via substrate-level phosphorylation) and 2 NADH.
• Net yield: 2 ATP + 2 NADH + 2 Pyruvate.

3. Stage 2: Link Reaction (Pyruvate Oxidation):
• 2 Pyruvate transported into mitochondrial matrix via H⁺/pyruvate symport.
• Each pyruvate undergoes oxidative decarboxylation by pyruvate dehydrogenase:
  Pyruvate (3C) + CoA + NAD⁺ ⟶ Acetyl-CoA (2C) + CO₂ + NADH.
• Per glucose (2 pyruvates): Produces 2 Acetyl-CoA + 2 CO₂ + 2 NADH.

4. Stage 3: Krebs Cycle (Citric Acid Cycle):
• Acetyl-CoA (2C) combines with Oxaloacetate (4C) to form Citrate (6C), releasing CoA.
• Cycle sequence: Citrate (6C) ⟶ Isocitrate (6C) ⟶ α-Ketoglutarate (5C, yields NADH + CO₂) ⟶ Succinyl-CoA (4C, yields NADH + CO₂) ⟶ Succinate (yields 1 ATP/GTP via substrate-level phosphorylation) ⟶ Fumarate (yields FADH₂) ⟶ Malate ⟶ Oxaloacetate (yields NADH).
• Per 1 glucose molecule (2 turns of Krebs cycle): Produces 4 CO₂ + 6 NADH + 2 FADH₂ + 2 ATP.

5. Stage 4: Oxidative Phosphorylation & Electron Transport Chain (ETC):
• Complex I (NADH dehydrogenase), Complex II (succinate dehydrogenase), Complex III (cytochrome bc₁), Complex IV (cytochrome c oxidase).
• Coenzyme Q (ubiquinone) and Cytochrome c act as mobile electron carriers.
• Final electron acceptor: Oxygen (O₂). Complex IV transfers 4e⁻ to O₂ + 4H⁺ ⟶ 2H₂O.
• Chemiosmotic ATP synthesis (Peter Mitchell): Proton pumping creates electrochemical proton gradient across inner membrane. Protons stream through F₀F₁-ATP synthase into matrix, driving ATP synthesis.
• Theoretical yield: ~2.5 ATP per NADH, ~1.5 ATP per FADH₂.
• Total net yield per glucose: ~30 to 32 ATP under optimal conditions.

6. Anaerobic Fermentation (in Cytosol when O₂ is absent):
• Glycolysis continues by regenerating NAD⁺ from NADH:
  - Lactic Acid Fermentation (in animal skeletal muscle and lactic acid bacteria):
    Pyruvate + NADH ⟶ Lactate + NAD⁺ (catalyzed by lactate dehydrogenase).
  - Alcoholic Fermentation (in yeast):
    Pyruvate ⟶ Acetaldehyde + CO₂ (pyruvate decarboxylase), then
    Acetaldehyde + NADH ⟶ Ethanol + NAD⁺ (alcohol dehydrogenase).
• Net ATP yield in fermentation: Only 2 ATP per glucose (from glycolysis).`,
        workedExamples: [
          {
            problem: 'Trace the carbon atoms of one glucose molecule (C₆H₁₂O₆) during complete aerobic respiration. At which specific stages are the 6 carbon atoms released as CO₂?',
            solution: 'A glucose molecule contains 6 carbon atoms:\n1. Glycolysis: 1 Glucose (6C) ⟶ 2 Pyruvate (3C). No CO₂ released.\n2. Link Reaction: 2 Pyruvate ⟶ 2 Acetyl-CoA (2C) + 2 CO₂ released.\n3. Krebs Cycle: 2 Acetyl-CoA enter; each turn releases 2 CO₂ (total 4 CO₂ released).\nTotal CO₂ released = 2 + 4 = 6 CO₂.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the final electron acceptor in the mitochondrial electron transport chain during aerobic respiration?',
            options: ['NAD⁺', 'FAD', 'Oxygen (O₂)', 'Cytochrome c'],
            correctIndex: 2,
            explanation: 'Oxygen acts as the terminal electron acceptor, combining with electrons and protons at Complex IV to form water.'
          },
          {
            question: 'Where within a eukaryotic cell does glycolysis take place?',
            options: ['Mitochondrial matrix', 'Inner mitochondrial membrane', 'Cytosol', 'Endoplasmic reticulum'],
            correctIndex: 2,
            explanation: 'Glycolysis is an anaerobic pathway occurring entirely in the cytoplasm/cytosol.'
          },
          {
            question: 'What is the net ATP yield from one molecule of glucose during anaerobic lactic acid fermentation?',
            options: ['2 ATP', '4 ATP', '30 ATP', '36 ATP'],
            correctIndex: 0,
            explanation: 'Fermentation yields only the 2 net ATP generated during glycolysis, as the subsequent fermentation step merely regenerates NAD⁺.'
          },
          {
            question: 'Which enzyme complex couples the flow of protons down their electrochemical gradient to ATP synthesis?',
            options: ['Pyruvate kinase', 'ATP synthase', 'Cytochrome c oxidase', 'Hexokinase'],
            correctIndex: 1,
            explanation: 'ATP synthase utilizes the proton motive force across the inner mitochondrial membrane to synthesize ATP from ADP and Pi.'
          },
          {
            question: 'During alcoholic fermentation in yeast cells, what gas is produced causing dough to rise?',
            options: ['Oxygen (O₂)', 'Carbon dioxide (CO₂)', 'Methane (CH₄)', 'Hydrogen gas (H₂)'],
            correctIndex: 1,
            explanation: 'Pyruvate decarboxylation produces acetaldehyde and releases carbon dioxide (CO₂).'
          },
          {
            question: 'How many molecules of NADH are generated in the mitochondrial matrix by TWO turns of the Krebs cycle per glucose?',
            options: ['2', '4', '6', '10'],
            correctIndex: 2,
            explanation: 'Each turn of the Krebs cycle yields 3 NADH, so two turns per glucose molecule yield 6 NADH.'
          },
          {
            question: 'Which chemical intermediate links glycolysis to the Krebs cycle upon entering the mitochondria?',
            options: ['Citrate', 'Acetyl-CoA', 'Oxaloacetate', 'Lactate'],
            correctIndex: 1,
            explanation: 'Pyruvate is oxidatively decarboxylated to Acetyl-CoA, which delivers the 2-carbon acetyl group into the citric acid cycle.'
          },
          {
            question: 'Who proposed the chemiosmotic hypothesis explaining ATP synthesis via proton gradients across biological membranes?',
            options: ['Hans Krebs', 'Peter Mitchell', 'Melvin Calvin', 'Louis Pasteur'],
            correctIndex: 1,
            explanation: 'Peter Mitchell proposed the chemiosmotic theory in 1961, earning the 1978 Nobel Prize in Chemistry.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 4,
    title: 'UNIT FOUR: TAXONOMY, MICROBIOLOGY & BIODIVERSITY',
    description: 'Principles of biological classification, binomial nomenclature, five-kingdom and three-domain systems, viruses, bacteria, protists, fungi, and plant/animal diversity.',
    topics: [
      {
        id: 'bio-4-1',
        topicNumber: '4.1',
        title: 'Taxonomic Hierarchy & Kingdoms of Life',
        summary: 'Carl Linnaeus system, binomial naming rules, 3 domains (Archaea, Bacteria, Eukarya), and 5 kingdoms.',
        content: `### 4.1 Taxonomy and Diversity of Organisms

1. Principles of Classification:
• Taxonomy: The scientific discipline of naming, describing, and classifying organisms based on shared morphological, anatomical, and molecular characteristics.
• Taxonomic Hierarchy (Broadest to Most Specific):
  Domain ⟶ Kingdom ⟶ Phylum (Division in plants) ⟶ Class ⟶ Order ⟶ Family ⟶ Genus ⟶ Species.
  (Mnemonic: "Dear King Philip Came Over For Good Soup").
• Species Definition (Biological Species Concept - Ernst Mayr): A group of naturally interbreeding individuals that can produce fertile, viable offspring.

2. Binomial Nomenclature (Carl Linnaeus):
• Two-part scientific name: Genus (capitalized) + specific epithet (lowercase).
• Written in italics (when printed) or underlined separately (when handwritten).
  - Example: Homo sapiens, Zea mays, Escherichia coli.

3. The Three Domains (Carl Woese, 1990, based on 16S/18S rRNA sequences):
• Domain Archaea: Extremophilic prokaryotes; ether-linked branched lipid membranes; lack peptidoglycan; methanogens, halophiles, thermoacidophiles.
• Domain Bacteria: True prokaryotic bacteria; ester-linked unbranched lipids; peptidoglycan cell walls.
• Domain Eukarya: Organisms with membrane-bound nuclei and organelles (Protista, Fungi, Plantae, Animalia).

4. The Five Kingdom System (Robert Whittaker, 1969):
• Kingdom Monera: All unicellular prokaryotic bacteria and cyanobacteria.
• Kingdom Protista: Mostly unicellular or colonial eukaryotes (Amoeba, Paramecium, Euglena, Plasmodium, algae).
• Kingdom Fungi: Heterotrophic, saprophytic/parasitic eukaryotes with chitinous cell walls; absorptive nutrition (yeasts, molds, mushrooms).
• Kingdom Plantae: Multicellular autotrophic photosynthetic eukaryotes; cellulose cell walls.
• Kingdom Animalia: Multicellular heterotrophic eukaryotes; lack cell walls; ingestive nutrition.`,
        workedExamples: [
          {
            problem: 'Write the scientific name for the African lion properly according to the rules of binomial nomenclature if its genus is panthera and species is leo.',
            solution: 'Genus begins with a capital letter: Panthera.\nSpecific epithet is in lowercase: leo.\nPrinted format must be italicized: Panthera leo (or underlined if handwritten: Panthera leo).'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which taxonomic rank represents the most specific category containing individuals capable of interbreeding to produce fertile offspring?',
            options: ['Genus', 'Family', 'Species', 'Order'],
            correctIndex: 2,
            explanation: 'The biological species is the fundamental unit of classification comprising individuals capable of producing fertile offspring.'
          },
          {
            question: 'What is the correct scientific format for writing the binomial name of modern humans?',
            options: ['homo Sapiens', 'Homo sapiens (italicized)', 'HOMO SAPIENS', 'Homo Sapiens'],
            correctIndex: 1,
            explanation: 'The genus name is capitalized, species epithet is lowercase, and the entire name is italicized.'
          },
          {
            question: 'Carl Woese established the Three-Domain system based on comparative analysis of which molecular sequence?',
            options: ['Cytochrome c amino acid sequence', 'Ribosomal RNA (16S/18S rRNA) gene sequences', 'Phospholipid fatty acid chain length', 'Hemoglobin quaternary structure'],
            correctIndex: 1,
            explanation: 'Carl Woese used small subunit ribosomal RNA (16S/18S rRNA) nucleotide sequences to establish Archaea, Bacteria, and Eukarya.'
          },
          {
            question: 'Which kingdom contains multicellular heterotrophs that absorb nutrients across chitinous cell walls?',
            options: ['Plantae', 'Protista', 'Fungi', 'Monera'],
            correctIndex: 2,
            explanation: 'Fungi possess chitinous cell walls and obtain nutrition through extracellular digestion and absorptive saprophytism.'
          },
          {
            question: 'Organisms that inhabit extreme environments such as hydrothermal vents and hypersaline lakes belong to which domain?',
            options: ['Bacteria', 'Archaea', 'Protista', 'Eukarya'],
            correctIndex: 1,
            explanation: 'Archaea include extremophiles with unique ether-linked membrane lipids that thrive in extreme heat, salinity, and acidity.'
          },
          {
            question: 'Which taxonomic level is immediately between Class and Family?',
            options: ['Phylum', 'Order', 'Genus', 'Kingdom'],
            correctIndex: 1,
            explanation: 'Following the hierarchy: Kingdom, Phylum, Class, Order, Family, Genus, Species.'
          },
          {
            question: 'Peptidoglycan is a prominent macromolecular constituent of the cell walls of organisms in which kingdom?',
            options: ['Monera (Bacteria)', 'Plantae', 'Fungi', 'Protista'],
            correctIndex: 0,
            explanation: 'Eubacterial cell walls contain peptidoglycan (murein) networks composed of sugars crosslinked by amino acids.'
          },
          {
            question: 'Cyanobacteria (blue-green algae) are classified under which group?',
            options: ['Eukaryotic photosynthetic algae', 'Prokaryotic autotrophic eubacteria', 'Unicellular saprophytic fungi', 'Protozoan flagellates'],
            correctIndex: 1,
            explanation: 'Cyanobacteria are true prokaryotes (Monera) capable of oxygenic photosynthesis.'
          }
        ]
      }
    ]
  }
];
