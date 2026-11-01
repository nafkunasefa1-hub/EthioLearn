import { ModuleUnit } from '../modulesData';

export const BIO_UNITS_5_TO_8: ModuleUnit[] = [
  {
    unitNumber: 5,
    title: 'UNIT FIVE: HUMAN PHYSIOLOGY & BODY SYSTEMS',
    description: 'Digestive system, human cardiovascular and lymphatic circulation, respiratory gas exchange, nervous coordination and action potentials, endocrine hormone regulation, and human reproduction.',
    topics: [
      {
        id: 'bio-5-1',
        topicNumber: '5.1',
        title: 'Digestion, Respiration & Cardiovascular Systems',
        summary: 'Alimentary canal enzymes, pulmonary gas exchange, heart anatomy, cardiac cycle, and ABO/Rh blood groups.',
        content: `### 5.1 Human Organ Systems: Digestion, Respiration and Circulation

1. The Human Digestive System:
• Mouth: Mastication and salivary amylase (breaks starch into maltose at pH 6.8).
• Stomach: Gastric juice contains HCl (activates pepsinogen to pepsin, kills bacteria, pH ~1.5–2) and mucus. Pepsin hydrolyzes proteins into peptones/polypeptides.
• Small Intestine (Duodenum, Jejunum, Ileum):
  - Bile: Synthesized in liver, stored in gallbladder; contains bile salts that emulsify fats (physical digestion into micelles).
  - Pancreatic Juice: Pancreatic amylase (starch ⟶ maltose), trypsin/chymotrypsin (protein digestion), pancreatic lipase (fats ⟶ glycerol + fatty acids), sodium bicarbonate (neutralizes acidic chyme to pH 8).
  - Intestinal Enzymes: Maltase, sucrase, lactase, and peptidase.
  - Villi and Microvilli in ileum exponentially maximize surface area for nutrient absorption into capillaries and lacteals (lymphatic vessel for fat absorption).

2. The Respiratory System & Gas Exchange:
• Inhalation (Active): Diaphragm contracts (flattens), external intercostal muscles contract (rib cage moves upward and outward) ⟹ Thoracic volume increases ⟹ Intrapulmonary pressure drops below atmospheric ⟹ Air rushes in.
• Exhalation (Passive at rest): Diaphragm and intercostal muscles relax ⟹ Thoracic volume decreases ⟹ Pressure rises ⟹ Air expelled.
• Alveoli: Gas exchange surfaces; one cell thick (squamous epithelium), moist, richly vascularized with high partial pressure gradients (PO₂ in alveoli ~104 mmHg vs ~40 mmHg in deoxygenated pulmonary capillaries).
• Oxygen Transport: 98.5% bound to Hemoglobin (Hb + 4O₂ ⇌ Hb(O₂)₄ oxyhemoglobin). Bohr Effect: High CO₂, low pH, and elevated temperature decrease Hb oxygen affinity, promoting O₂ release to active tissues.
• CO₂ Transport: 70% as bicarbonate ions (HCO₃⁻ in plasma via erythrocyte carbonic anhydrase), 23% as carbaminohemoglobin, 7% dissolved in plasma.

3. The Cardiovascular System & Blood:
• Heart Anatomy: 4 chambers (right/left atria, right/left ventricles). Double circulation:
  - Pulmonary Circulation: Right ventricle ⟶ Pulmonary trunk/arteries ⟶ Lungs ⟶ Pulmonary veins ⟶ Left atrium.
  - Systemic Circulation: Left ventricle (thickest muscular wall) ⟶ Aorta ⟶ Systemic body tissues ⟶ Vena cava ⟶ Right atrium.
• Cardiac Valves: Tricuspid (right AV), Bicuspid/Mitral (left AV), Aortic and Pulmonary semilunar valves prevent backflow.
• Cardiac Conduction System: Sinoatrial (SA) node (natural pacemaker in right atrium) ⟶ Atrioventricular (AV) node ⟶ Bundle of His ⟶ Purkinje fibers.
• Blood Components: Plasma (55%), Erythrocytes (RBCs, carry O₂ via hemoglobin), Leukocytes (WBCs, immunity), Platelets (thrombocytes, blood clotting via thrombin and fibrin).
• ABO and Rh Blood Groups:
  - Type A: A antigen, anti-B antibody.
  - Type B: B antigen, anti-A antibody.
  - Type AB: Both A and B antigens, no antibodies (Universal Recipient).
  - Type O: Neither antigen, anti-A and anti-B antibodies (Universal Donor).
  - Rh Factor: Rh-positive (possesses D antigen) vs Rh-negative.`,
        workedExamples: [
          {
            problem: 'A patient with blood type B-negative requires an urgent blood transfusion. List all compatible donor blood types that can safely be transfused into this patient.',
            solution: 'A person with type B-negative has:\n• B antigens on RBCs and anti-A antibodies in plasma.\n• Rh-negative factor (cannot receive Rh-positive blood without sensitization).\nCompatible donors must lack A antigens and lack Rh antigen:\nSafe donor blood types: B-negative and O-negative.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which digestive enzyme functions optimally in the highly acidic environment of the human stomach (pH ~1.5–2)?',
            options: ['Salivary amylase', 'Pepsin', 'Trypsin', 'Pancreatic lipase'],
            correctIndex: 1,
            explanation: 'Pepsin is activated by hydrochloric acid in gastric juice and hydrolyzes proteins at optimal acidic pH.'
          },
          {
            question: 'What is the natural pacemaker of the human heart responsible for initiating rhythmic electrical impulses?',
            options: ['Atrioventricular (AV) node', 'Purkinje fibers', 'Sinoatrial (SA) node', 'Bundle of His'],
            correctIndex: 2,
            explanation: 'The Sinoatrial (SA) node located in the right atrium wall initiates spontaneous electrical depolarizations.'
          },
          {
            question: 'Which blood type is designated as the universal red blood cell donor because its erythrocytes lack A and B surface antigens?',
            options: ['Type AB positive', 'Type A positive', 'Type O negative', 'Type B negative'],
            correctIndex: 2,
            explanation: 'Type O-negative erythrocytes possess neither A, B, nor Rh (D) antigens, preventing agglutination in recipients.'
          },
          {
            question: 'Most carbon dioxide (approx. 70%) is transported in human blood in which chemical form?',
            options: ['Dissolved CO₂ gas in plasma', 'Bicarbonate ions (HCO₃⁻) in plasma', 'Carbaminohemoglobin inside RBCs', 'Carbon monoxide complexes'],
            correctIndex: 1,
            explanation: 'CO₂ is converted into bicarbonate (HCO₃⁻) and H⁺ by carbonic anhydrase inside erythrocytes, and HCO₃⁻ is transported in plasma.'
          },
          {
            question: 'During quiet normal inhalation in humans, what muscular actions expand the thoracic cavity?',
            options: ['Diaphragm contracts and flattens; external intercostal muscles contract', 'Diaphragm relaxes and arches upward; internal intercostals contract', 'Abdominal wall muscles contract forcefully', 'Alveolar capillaries constrict'],
            correctIndex: 0,
            explanation: 'Diaphragm contraction flattens the dome, and external intercostal contraction elevates the ribs, increasing thoracic volume.'
          },
          {
            question: 'What specialized lymphatic structures inside the intestinal villi absorb dietary fatty acids and glycerol?',
            options: ['Capillary networks', 'Lacteals', 'Bile ducts', 'Peyer\'s patches'],
            correctIndex: 1,
            explanation: 'Lacteals are specialized lymphatic capillaries in the center of villi that absorb packaged chylomicrons/fatty acids.'
          },
          {
            question: 'The left ventricle of the mammalian heart possesses significantly thicker muscular walls than the right ventricle because it:',
            options: ['Receives deoxygenated venous blood', 'Pumps blood against high systemic vascular resistance to the entire body', 'Contains four separate valves', 'Generates spontaneous action potentials without nerves'],
            correctIndex: 1,
            explanation: 'The left ventricle pumps oxygenated blood through the high-pressure systemic aorta to nourish all tissues of the body.'
          },
          {
            question: 'Which vitamin is essential for hepatic synthesis of prothrombin and active blood clotting factors?',
            options: ['Vitamin A', 'Vitamin C', 'Vitamin K', 'Vitamin D'],
            correctIndex: 2,
            explanation: 'Vitamin K is an indispensable cofactor for gamma-carboxylation of clotting factors (prothrombin, VII, IX, X).'
          }
        ]
      },
      {
        id: 'bio-5-2',
        topicNumber: '5.2',
        title: 'Nervous System, Hormones & Human Reproduction',
        summary: 'Neuron action potentials, synapses, neurotransmitters, endocrine glands and hormones, menstrual cycle, and fertilization.',
        content: `### 5.2 Nervous Coordination, Endocrinology & Reproduction

1. Neuron Structure & Action Potential:
• Neuron Anatomy: Dendrites (receive signals) ⟶ Cell body (soma) ⟶ Axon (conducts impulses) ⟶ Axon terminals (release neurotransmitters). Myelin sheath (Schwann cells/oligodendrocytes) permits rapid saltatory conduction at Nodes of Ranvier.
• Resting Membrane Potential (-70 mV): Maintained by Na⁺/K⁺-ATPase pump (3 Na⁺ pumped out for every 2 K⁺ in) and high membrane permeability to K⁺ leak channels.
• Action Potential Stages:
  1. Depolarization: Stimulus exceeds threshold (-55 mV) ⟹ Voltage-gated Na⁺ channels open rapidly; Na⁺ rushes into axon ⟹ Membrane potential surges to +30 mV.
  2. Repolarization: Voltage-gated Na⁺ channels inactivate; voltage-gated K⁺ channels open ⟹ K⁺ rushes out of axon ⟹ Potential returns toward negative.
  3. Hyperpolarization: K⁺ channels slow to close (undershoot below -70 mV) before resting potential is restored.
• Chemical Synapse: Action potential depolarizes presynaptic bulb ⟹ Voltage-gated Ca²⁺ channels open ⟹ Ca²⁺ influx causes synaptic vesicles to exocytose neurotransmitters (e.g., Acetylcholine) across synaptic cleft ⟹ Binds to postsynaptic receptors, inducing graded potential.

2. Endocrine System & Major Hormones:
• Pituitary Gland ("Master Gland", controlled by Hypothalamus):
  - Anterior Pituitary: GH (growth), TSH (thyroid), ACTH (adrenal cortex), FSH (follicle development), LH (ovulation/testosterone), Prolactin (milk synthesis).
  - Posterior Pituitary: Oxytocin (uterine contractions, milk letdown), ADH/Vasopressin (water reabsorption in kidney collecting ducts).
• Thyroid Gland: Thyroxine (T₄) and Triiodothyronine (T₃) regulate basal metabolic rate (requires iodine); Calcitonin lowers blood Ca²⁺.
• Parathyroid Gland: PTH (Parathyroid hormone) raises blood Ca²⁺ via bone resorption and kidney reabsorption.
• Pancreas (Islets of Langerhans):
  - Beta (β) cells: Insulin (lowers blood glucose by promoting cellular uptake and glycogen synthesis in liver).
  - Alpha (α) cells: Glucagon (raises blood glucose by glycogenolysis and gluconeogenesis).
• Adrenal Gland:
  - Adrenal Medulla: Epinephrine and Norepinephrine (fight-or-flight sympathetic response).
  - Adrenal Cortex: Cortisol (glucocorticoid stress hormone), Aldosterone (mineralocorticoid for Na⁺ retention).

3. Human Reproduction & Menstrual Cycle:
• Spermatogenesis: Occurs continuously in seminiferous tubules of testes regulated by FSH and LH/ICSH (Leydig cells secrete testosterone).
• Oogenesis: Cyclic production of secondary oocyte in ovaries.
• The Ovarian and Uterine Cycles (~28 Days):
  - Follicular Phase (Days 1–14): FSH stimulates follicle maturation; follicle secretes Estrogen, causing endometrial thickening.
  - Ovulation (Day 14): Peak Estrogen triggers a sharp LH Surge, causing rupture of mature Graafian follicle and release of secondary oocyte into Fallopian tube.
  - Luteal Phase (Days 15–28): Ruptured follicle transforms into Corpus Luteum, secreting Progesterone and Estrogen to maintain thick vascular endometrium for implantation.
  - Menstruation: If fertilization does not occur, corpus luteum degenerates into corpus albicans; progesterone plunges, and endometrium sloughs off.
• Fertilization: Occurs in ampulla of Fallopian tube (oviduct). Cortical reaction prevents polyspermy. Blastocyst implants into uterine wall.`,
        workedExamples: [
          {
            problem: 'Explain the physiological hormone cascade that triggers ovulation on day 14 of the human menstrual cycle.',
            solution: 'During the follicular phase, developing follicles secrete increasing amounts of Estrogen. When estrogen levels cross a high threshold, negative feedback switches to positive feedback on the anterior pituitary and hypothalamus. This causes a massive surge in Luteinizing Hormone (LH surge), which directly triggers follicle rupture and release of the secondary oocyte (ovulation) within 24–36 hours.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which rapid ion movement across the neuronal axon membrane causes depolarization during an action potential?',
            options: ['Potassium (K⁺) influx into the cell', 'Sodium (Na⁺) influx into the cell through voltage-gated channels', 'Chloride (Cl⁻) efflux from the cell', 'Calcium (Ca²⁺) pumping out of the cell'],
            correctIndex: 1,
            explanation: 'Depolarization is caused by the opening of voltage-gated Na⁺ channels, allowing rapid Na⁺ influx down its electrochemical gradient.'
          },
          {
            question: 'Which anterior pituitary hormone surge directly induces ovulation in human females on approximately day 14 of the cycle?',
            options: ['FSH (Follicle-Stimulating Hormone)', 'LH (Luteinizing Hormone)', 'Prolactin', 'Oxytocin'],
            correctIndex: 1,
            explanation: 'The LH surge induced by peak estrogen levels triggers the rupture of the mature follicle and release of the ovum.'
          },
          {
            question: 'What hormone is secreted by pancreatic beta (β) cells to decrease elevated blood glucose concentrations?',
            options: ['Glucagon', 'Insulin', 'Somatostatin', 'Epinephrine'],
            correctIndex: 1,
            explanation: 'Insulin stimulates glucose uptake into muscle and adipose tissues and promotes glycogen synthesis in the liver.'
          },
          {
            question: 'Which structure in the ovary secretes large quantities of progesterone following ovulation to maintain the uterine lining?',
            options: ['Graafian follicle', 'Corpus luteum', 'Germinal epithelium', 'Zona pellucida'],
            correctIndex: 1,
            explanation: 'The corpus luteum develops from the ruptured follicle and secretes progesterone to maintain the vascularized endometrium.'
          },
          {
            question: 'Where along a myelinated axon do action potentials appear to jump rapidly from node to node via saltatory conduction?',
            options: ['Synaptic boutons', 'Nodes of Ranvier', 'Dendritic spines', 'Axon hillock only'],
            correctIndex: 1,
            explanation: 'Nodes of Ranvier are periodic unmyelinated gaps where voltage-gated ion channels cluster, facilitating saltatory conduction.'
          },
          {
            question: 'Which hormone released by the posterior pituitary stimulates uterine contractions during labor and milk ejection during nursing?',
            options: ['Oxytocin', 'Prolactin', 'Progesterone', 'Estrogen'],
            correctIndex: 0,
            explanation: 'Oxytocin stimulates smooth muscle contractions of the myometrium during childbirth and myoepithelial cells in mammary glands.'
          },
          {
            question: 'What is the primary physiological role of Antidiuretic Hormone (ADH / Vasopressin)?',
            options: ['Stimulates sodium ion excretion in kidneys', 'Increases water permeability of kidney collecting ducts to conserve water', 'Lowers systemic arterial blood pressure', 'Promotes glycogen breakdown in hepatocytes'],
            correctIndex: 1,
            explanation: 'ADH causes insertion of aquaporin-2 water channels into collecting duct apical membranes, concentrating urine and reabsorbing water.'
          },
          {
            question: 'In which anatomical region of the female reproductive tract does normal fertilization of the secondary oocyte take place?',
            options: ['Uterine cavity', 'Cervical canal', 'Fallopian tube (oviduct)', 'Ovarian cortex'],
            correctIndex: 2,
            explanation: 'Fertilization normally takes place in the ampulla of the Fallopian tube (oviduct).'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 6,
    title: 'UNIT SIX: GENETICS & MOLECULAR BIOLOGY',
    description: 'Mendelian laws of segregation and independent assortment, monohybrid and dihybrid crosses, codominance, sex-linked traits, Central Dogma (transcription and translation), mutations, and biotechnology tools (PCR, gel electrophoresis, recombinant DNA).',
    topics: [
      {
        id: 'bio-6-1',
        topicNumber: '6.1',
        title: 'Mendelian Genetics, Pedigrees & Sex Linkage',
        summary: 'Gregor Mendel laws, Punnett squares, test crosses, incomplete dominance, codominance, and X-linked recessive inheritance.',
        content: `### 6.1 Classical Genetics and Patterns of Inheritance

1. Gregor Mendel\'s Laws of Inheritance:
• Gregor Mendel (Father of Modern Genetics, studied Pisum sativum pea plants):
  - Law of Segregation (First Law): During gamete formation, the two alleles for a heritable character segregate such that each gamete carries only one allele for each gene.
  - Law of Independent Assortment (Second Law): Alleles of two or more different genes sort independently into gametes, provided the genes reside on different chromosomes (unlinked).
• Phenotypic vs Genotypic Ratios:
  - Monohybrid heterozygous cross (Aa × Aa): Genotypic ratio = 1 AA : 2 Aa : 1 aa (1:2:1); Phenotypic ratio = 3 dominant : 1 recessive (3:1).
  - Dihybrid heterozygous cross (AaBb × AaBb): Phenotypic ratio = 9 : 3 : 3 : 1.
• Test Cross: Crossing an individual with an unknown dominant phenotype (A_) with a homozygous recessive individual (aa). If any recessive offspring appear, the parent was heterozygous (Aa).

2. Non-Mendelian Inheritance Patterns:
• Incomplete Dominance: Heterozygote displays an intermediate blending phenotype (e.g., Red (RR) × White (rr) snapdragons yield Pink (Rr) flowers; 1:2:1 phenotypic ratio).
• Codominance: Both alleles are simultaneously and fully expressed in the heterozygote without blending (e.g., ABO blood group allele I^A and I^B yielding type AB, coat color in roan cattle).
• Multiple Alleles: A gene has three or more alleles within a population (e.g., I^A, I^B, i in human ABO blood types).
• Polygenic Inheritance: Additive effect of two or more independent genes on a single quantitative trait (e.g., human skin color, height; bell-shaped normal distribution).

3. Sex Determination and Sex-Linked Inheritance:
• Human Karyotype: 46 chromosomes (22 pairs of autosomes + 1 pair of sex chromosomes: XX in females, XY in males).
• Sex-Linked (X-Linked) Genes: Genes located on the non-homologous portion of the X-chromosome:
  - Males (XY) are hemizygous; a single recessive allele on the X-chromosome produces the mutant phenotype.
  - Recessive X-linked disorders are far more prevalent in males and cannot be transmitted from father to son.
  - Examples: Hemophilia A (deficiency of factor VIII clotting protein), Red-Green Color Blindness, Duchenne Muscular Dystrophy.`,
        workedExamples: [
          {
            problem: 'A man with normal color vision marries a woman who is a carrier for red-green color blindness (an X-linked recessive trait). Determine the expected genotypic and phenotypic ratios among their male and female children.',
            solution: 'Genotypes: Father = X^C Y; Mother = X^C X^c.\nPunnett Square cross: X^C Y × X^C X^c:\n• Female offspring: 50% X^C X^C (normal vision homozygous), 50% X^C X^c (carrier female). 100% of daughters have normal vision.\n• Male offspring: 50% X^C Y (normal vision male), 50% X^c Y (color-blind male).\nOverall: 25% carrier female, 25% normal female, 25% normal male, 25% color-blind male. Among sons, 50% are color-blind.'
          }
        ],
        practiceQuestions: [
          {
            question: 'What is the expected phenotypic ratio in the F2 generation of a classic Mendelian dihybrid cross (AaBb × AaBb)?',
            options: ['3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1', '1 : 1 : 1 : 1'],
            correctIndex: 2,
            explanation: 'Independent assortment of two unlinked heterozygous gene pairs yields a 9:3:3:1 phenotypic ratio.'
          },
          {
            question: 'A test cross is performed by crossing an organism exhibiting a dominant phenotype with which known genotype?',
            options: ['Homozygous dominant (AA)', 'Homozygous recessive (aa)', 'Heterozygous (Aa)', 'Hemizygous'],
            correctIndex: 1,
            explanation: 'A test cross mates the organism of unknown genotype with a homozygous recessive tester to reveal alleles.'
          },
          {
            question: 'Why do sex-linked recessive conditions like hemophilia appear much more frequently in human males than females?',
            options: ['Males carry two Y chromosomes', 'Males are hemizygous and express recessive alleles on their single X chromosome', 'Testosterone inhibits clotting factor synthesis', 'Females degrade damaged X chromosomes'],
            correctIndex: 1,
            explanation: 'Human males possess only one X chromosome (XY), so a single recessive allele on the X is expressed phenotypic ally.'
          },
          {
            question: 'When red-flowered snapdragons (RR) are crossed with white-flowered snapdragons (rr), all F1 offspring have pink flowers (Rr). This exemplifies:',
            options: ['Complete dominance', 'Incomplete dominance', 'Epistasis', 'Codominance'],
            correctIndex: 1,
            explanation: 'Incomplete dominance produces an intermediate blended phenotype in heterozygous individuals.'
          },
          {
            question: 'The simultaneous and complete expression of both A and B antigens on erythrocytes of an AB individual demonstrates:',
            options: ['Codominance', 'Incomplete dominance', 'Pleiotropy', 'Polygenic inheritance'],
            correctIndex: 0,
            explanation: 'In codominance, both alleles (I^A and I^B) are fully expressed without intermediate blending.'
          },
          {
            question: 'How many different types of genetically distinct gametes can be produced by an individual with the genotype AaBbCc?',
            options: ['3', '6', '8', '16'],
            correctIndex: 2,
            explanation: 'Using the formula 2^n where n is the number of heterozygous gene pairs: 2³ = 8 different gamete combinations.'
          },
          {
            question: 'Which of Mendel\'s laws states that each individual pair of alleles segregates independently of other pairs during gamete formation?',
            options: ['Law of Segregation', 'Law of Independent Assortment', 'Law of Unit Characters', 'Law of Dominance'],
            correctIndex: 1,
            explanation: 'The Law of Independent Assortment applies to genes located on different non-homologous chromosomes.'
          },
          {
            question: 'If a color-blind father (X^c Y) and a homozygous normal mother (X^C X^C) have children, what percentage of their daughters will be carriers?',
            options: ['0%', '25%', '50%', '100%'],
            correctIndex: 3,
            explanation: 'All daughters receive the father\'s X^c and the mother\'s X^C, making 100% of daughters carriers (X^C X^c).'
          }
        ]
      },
      {
        id: 'bio-6-2',
        topicNumber: '6.2',
        title: 'Molecular Genetics, Protein Synthesis & Biotechnology',
        summary: 'Central Dogma, transcription, translation, genetic code, mutations, PCR, and recombinant DNA technology.',
        content: `### 6.2 Molecular Biology and Genetic Engineering

1. The Central Dogma of Molecular Biology (Francis Crick):
• Direction of flow of genetic information: DNA ⟶ (Transcription) ⟶ mRNA ⟶ (Translation) ⟶ Protein.
  - Exception: Retroviruses (e.g., HIV) carry RNA and synthesize cDNA using reverse transcriptase (RNA ⟶ DNA).

2. DNA Replication (Semi-Conservative Model - Meselson & Stahl):
• Helicase unwinds double helix at replication fork; single-strand binding proteins stabilize template strands.
• Topoisomerase / DNA Gyrase relieves torsional strain ahead of replication fork.
• Primase synthesizes short RNA primers to provide a 3'-OH group.
• DNA Polymerase III synthesizes new DNA strand strictly in 5' to 3' direction:
  - Leading strand: Synthesized continuously toward replication fork.
  - Lagging strand: Synthesized discontinuously away from fork as Okazaki fragments.
• DNA Polymerase I removes RNA primers and replaces them with deoxyribonucleotides.
• DNA Ligase seals nicks by forming phosphodiester bonds.

3. Transcription (DNA ⟶ mRNA in Nucleus):
• RNA Polymerase binds to promoter region (e.g., TATA box) and transcribes template (antisense) strand into pre-mRNA (substituting U for T).
• Post-Transcriptional Modifications in Eukaryotes:
  1. 5' Capping: Addition of 7-methylguanosine cap (prevents degradation, assists ribosome binding).
  2. Poly-A Tail: 3' polyadenylation with 150–250 adenine nucleotides.
  3. RNA Splicing: Spliceosomes remove non-coding Introns and splice together coding Exons.

4. Translation (mRNA ⟶ Polypeptide at Ribosome):
• Genetic Code Features: Triplet (3 nucleotides = 1 codon), degenerate/redundant (64 codons for 20 amino acids), non-overlapping, universal. Start codon = AUG (Methionine). Stop codons = UAA, UAG, UGA.
• tRNA: Contains anticodon loop complementary to mRNA codon, and 3'-CCA terminal amino acid attachment site.
• Ribosomal Sites: A site (aminoacyl, accepts incoming charged aminoacyl-tRNA), P site (peptidyl, holds tRNA with growing polypeptide), E site (exit site for discharged tRNA). Peptidyl transferase catalyzes peptide bond formation.

5. Mutations:
• Point Mutations: Silent (no amino acid change due to codon degeneracy), Missense (single amino acid substitution, e.g., Sickle Cell Anemia: GAG ⟶ GTG, Glutamic acid ⟶ Valine at position 6 of β-globin), Nonsense (creates premature stop codon).
• Frameshift Mutations: Insertion or deletion of nucleotides not in multiples of 3, disrupting all downstream reading codons.

6. Modern Biotechnology Tools:
• Restriction Endonucleases: Molecular scissors that cleave DNA at palindromic recognition sequences, generating sticky or blunt ends (e.g., EcoRI: 5'-GAATTC-3').
• Recombinant DNA: Inserting target genes into bacterial plasmid vectors using DNA ligase, creating recombinant plasmids for transformation.
• Polymerase Chain Reaction (PCR - Kary Mullis): In vitro amplification of specific DNA fragments through repeated cycles:
  1. Denaturation (94–96 °C): Separates double strands.
  2. Annealing (50–65 °C): Primers bind complementary sequences.
  3. Extension (72 °C): Heat-stable Taq polymerase synthesizes new strands.
• Gel Electrophoresis: Separates DNA fragments by size through agarose gel in electric field (negatively charged DNA migrates toward positive anode; smaller fragments travel faster and further).`,
        workedExamples: [
          {
            problem: 'A coding template strand of DNA has the sequence 3\'-TAC-CGA-TTC-ACT-5\'. Determine: (a) the resulting mRNA sequence, (b) the tRNA anticodons, and (c) the number of amino acids translated.',
            solution: '(a) Complementary mRNA (5\' to 3\'): 5\'-AUG-GCU-AAG-UGA-3\'.\n(b) tRNA anticodons: UAC, CGA, UUC (UGA is a stop codon and has no aminoacyl-tRNA).\n(c) AUG (Met) - GCU (Ala) - AAG (Lys) - UGA (Stop). Translates into 3 amino acids before termination.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which enzyme synthesizes DNA fragments discontinuously as Okazaki fragments on the lagging strand?',
            options: ['RNA Polymerase II', 'DNA Polymerase III', 'Reverse Transcriptase', 'DNA Ligase'],
            correctIndex: 1,
            explanation: 'DNA Polymerase III synthesizes Okazaki fragments in the 5\' to 3\' direction away from the replication fork on the lagging strand.'
          },
          {
            question: 'What molecular mutation causes sickle cell hemoglobin (HbS)?',
            options: ['Nonsense mutation introducing stop codon', 'Single missense substitution of valine for glutamic acid in beta-globin', 'Frameshift deletion of entire exon', 'Duplication of alpha-globin genes'],
            correctIndex: 1,
            explanation: 'Sickle cell anemia results from a point mutation (GAG to GTG) replacing hydrophilic glutamic acid with hydrophobic valine at position 6 of beta-globin.'
          },
          {
            question: 'What is the universal start codon in eukaryotic mRNA translation that encodes Methionine?',
            options: ['AUG', 'UAA', 'UAG', 'UGA'],
            correctIndex: 0,
            explanation: 'AUG is the universal start codon recognized by the initiator Met-tRNA to establish the reading frame.'
          },
          {
            question: 'During Polymerase Chain Reaction (PCR), what is the function of the elevated 95 °C incubation step?',
            options: ['To allow DNA polymerase extension', 'To anneal oligonucleotide primers', 'To denature double-stranded DNA into single strands', 'To ligate plasmid vectors'],
            correctIndex: 2,
            explanation: 'Heating to 94–96 °C breaks hydrogen bonds between complementary base pairs, denaturing double-stranded DNA into single strands.'
          },
          {
            question: 'Why does DNA migrate toward the positive electrode (anode) during agarose gel electrophoresis?',
            options: ['DNA molecules contain positively charged basic histones', 'Negatively charged phosphate groups give DNA an overall negative charge', 'Electrolytic buffer pushes uncharged molecules forward', 'Ribose sugars are positively polarized'],
            correctIndex: 1,
            explanation: 'The repeating sugar-phosphate backbone imparts a uniform negative charge to DNA, pulling it toward the positive anode.'
          },
          {
            question: 'What enzyme joins Okazaki fragments by catalyzing phosphodiester bond formation between adjacent nucleotides?',
            options: ['DNA Ligase', 'DNA Helicase', 'Topoisomerase', 'Primase'],
            correctIndex: 0,
            explanation: 'DNA Ligase seals structural nicks in the phosphodiester backbone of the lagging strand.'
          },
          {
            question: 'Which molecular complexes excise non-coding introns and splice exons together during pre-mRNA processing?',
            options: ['Ribosomes', 'Spliceosomes', 'Proteasomes', 'Centrosomes'],
            correctIndex: 1,
            explanation: 'Spliceosomes composed of snRNPs recognize splice sites, removing introns and joining exons into mature mRNA.'
          },
          {
            question: 'Restriction endonucleases cleave DNA at specific symmetrical sequences termed:',
            options: ['Palindromic sequences', 'Poly-A sequences', 'Promoter consensus sequences', 'Telomeric repeats'],
            correctIndex: 0,
            explanation: 'Restriction enzymes recognize palindromic sequences that read identically 5\' to 3\' on both complementary strands.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 7,
    title: 'UNIT SEVEN: ECOLOGY, ECOSYSTEMS & ENVIRONMENTAL CONSERVATION',
    description: 'Ecosystem structures, food webs, trophic levels and Lindeman 10% energy transfer rule, biogeochemical cycles (carbon, nitrogen, water), Ethiopian biomes and endemic biodiversity, conservation biology, and pollution.',
    topics: [
      {
        id: 'bio-7-1',
        topicNumber: '7.1',
        title: 'Ecosystem Energetics, Food Webs & Biogeochemical Cycles',
        summary: 'Trophic pyramids, Lindeman 10% rule, primary productivity (GPP and NPP), and the carbon and nitrogen cycles.',
        content: `### 7.1 Ecosystem Energetics and Material Cycling

1. Ecosystem Components:
• Ecosystem: Community of interacting biotic organisms along with abiotic physical factors (temperature, soil, sunlight, water, minerals).
• Trophic Levels:
  - Producers (Autotrophs): Photoautotrophs (plants, phytoplankton) and chemoautotrophs.
  - Primary Consumers (Herbivores): Feed directly on producers.
  - Secondary Consumers (Carnivores): Feed on herbivores.
  - Tertiary / Quaternary Consumers (Apex Predators).
  - Decomposers (Saprophytes - bacteria and fungi): Recycle organic matter into inorganic nutrients.

2. Energy Flow & The 10% Law (Lindeman, 1942):
• Unidirectional energy flow: Solar energy ⟶ Producers ⟶ Consumers ⟶ Dissipated as metabolic heat (Second Law of Thermodynamics).
• Approximately 90% of energy is lost at each trophic step via cellular respiration, movement, excretion, and heat.
• Only ~10% of energy stored in biomass is successfully transferred to the next trophic level.
• Productivity:
  - Gross Primary Productivity (GPP): Total rate of organic biomass synthesized by autotrophs via photosynthesis.
  - Net Primary Productivity (NPP): Biomass remaining after autotrophic cellular respiration (R): NPP = GPP - R.

3. Ecological Pyramids (Eltonian Pyramids):
• Pyramid of Numbers: Count of individuals at each trophic level (can be inverted, e.g., one oak tree supporting thousands of insects).
• Pyramid of Biomass: Total dry mass of living tissue (usually upright; inverted in open ocean phytoplankton-zooplankton systems).
• Pyramid of Energy: Energy content per unit area per unit time (ALWAYS strictly upright due to thermodynamic laws).

4. Biogeochemical Cycles:
• Carbon Cycle: Atmospheric CO₂ fixed by photosynthesis; returned by respiration, decomposition, and fossil fuel combustion. Ocean acts as major carbon sink.
• Nitrogen Cycle:
  1. Nitrogen Fixation: Atmospheric N₂ (unreactive triple bond N≡N) converted to ammonia (NH₃/NH₄⁺) by:
     - Biological: Symbiotic Rhizobium in root nodules of legumes, free-living Azotobacter and Clostridium, and aquatic Anabaena.
     - Industrial (Haber-Bosch) and atmospheric (lightning).
  2. Nitrification: Two-step aerobic bacterial oxidation:
     - Nitrosomonas oxidizes NH₄⁺ ⟶ NO₂⁻ (Nitrite).
     - Nitrobacter oxidizes NO₂⁻ ⟶ NO₃⁻ (Nitrate, the main form absorbed by plant roots).
  3. Assimilation: Plants incorporate nitrate into amino acids and nucleic acids.
  4. Ammonification: Decomposers convert nitrogenous waste into ammonia.
  5. Denitrification: Anaerobic bacteria (Pseudomonas denitrificans) reduce NO₃⁻ ⟶ N₂ gas, returning nitrogen to atmosphere in waterlogged soils.`,
        workedExamples: [
          {
            problem: 'In a grassland ecosystem, the net primary production (NPP) is 20,000 kJ/m²/year. Using Lindeman\'s 10% ecological energy transfer rule, calculate the energy available to tertiary consumers in this community.',
            solution: 'Applying the 10% transfer rule at each successive trophic step:\n1. Producers (NPP): 20,000 kJ/m²/year.\n2. Primary Consumers (Herbivores): 20,000 × 0.10 = 2,000 kJ/m²/year.\n3. Secondary Consumers (Carnivores): 2,000 × 0.10 = 200 kJ/m²/year.\n4. Tertiary Consumers (Apex Predators): 200 × 0.10 = 20 kJ/m²/year.'
          }
        ],
        practiceQuestions: [
          {
            question: 'Which ecological pyramid is strictly upright and can NEVER be inverted in any natural stable ecosystem?',
            options: ['Pyramid of numbers', 'Pyramid of biomass', 'Pyramid of energy', 'Pyramid of species density'],
            correctIndex: 2,
            explanation: 'The pyramid of energy is always upright because the second law of thermodynamics dictates that energy is dissipated as heat at each transfer.'
          },
          {
            question: 'Which bacteria are responsible for converting toxic nitrite (NO₂⁻) into plant-absorbable nitrate (NO₃⁻) during nitrification?',
            options: ['Rhizobium', 'Nitrosomonas', 'Nitrobacter', 'Pseudomonas'],
            correctIndex: 2,
            explanation: 'Nitrobacter oxidizes nitrites into nitrates during the second step of nitrification.'
          },
          {
            question: 'What is the mathematical relationship between Gross Primary Productivity (GPP), Net Primary Productivity (NPP), and plant Respiration (R)?',
            options: ['NPP = GPP + R', 'NPP = GPP - R', 'GPP = NPP - R', 'R = GPP × NPP'],
            correctIndex: 1,
            explanation: 'NPP represents the remaining usable biomass after subtracting autotrophic respiratory losses: NPP = GPP - R.'
          },
          {
            question: 'Which genus of symbiotic nitrogen-fixing bacteria resides within root nodules of leguminous plants like peas and beans?',
            options: ['Escherichia', 'Rhizobium', 'Streptococcus', 'Lactobacillus'],
            correctIndex: 1,
            explanation: 'Rhizobium forms mutualistic root nodules in legumes, fixing atmospheric N₂ into bioavailable ammonia.'
          },
          {
            question: 'According to Lindeman\'s ecological efficiency rule, approximately what percentage of stored energy is passed to the next trophic level?',
            options: ['1%', '10%', '50%', '90%'],
            correctIndex: 1,
            explanation: 'On average, approximately 10% of energy is transferred between adjacent trophic levels; 90% is lost through respiration and metabolic heat.'
          },
          {
            question: 'In waterlogged and oxygen-deficient soils, which biological process converts nitrates back into atmospheric N₂ gas?',
            options: ['Nitrification', 'Ammonification', 'Denitrification', 'Nitrogen fixation'],
            correctIndex: 2,
            explanation: 'Denitrification by anaerobic bacteria such as Pseudomonas denitrificans reduces nitrates back into nitrogen gas.'
          },
          {
            question: 'Which organism occupies the first trophic level in a marine aquatic pelagic food chain?',
            options: ['Zooplankton', 'Phytoplankton', 'Pelagic predatory fish', 'Benthic crustaceans'],
            correctIndex: 1,
            explanation: 'Phytoplankton are microscopic photosynthetic autotrophs serving as the primary producers in marine food webs.'
          },
          {
            question: 'What ecological term describes organisms that consume dead organic matter and feces, breaking it down into smaller fragments?',
            options: ['Detritivores', 'Apex predators', 'Photoheterotrophs', 'Obligate parasites'],
            correctIndex: 0,
            explanation: 'Detritivores (such as earthworms and woodlice) ingest and fragment detritus, aiding microbial decomposition.'
          }
        ]
      },
      {
        id: 'bio-7-2',
        topicNumber: '7.2',
        title: 'Ethiopian Biodiversity, Endemic Species & Conservation',
        summary: 'Ethiopian biomes, afroalpine zones, endemic mammals and birds, protected areas, biodiversity threats, and conservation strategies.',
        content: `### 7.2 Ethiopian Biodiversity, Endemism & Conservation

1. Ecological Geography and Biomes of Ethiopia:
• Ethiopia boasts exceptionally diverse topography (elevations from -125 m in the Danakil Depression to 4,533 m at Ras Dejen in the Simien Mountains), creating distinct climatic life zones:
  - Afroalpine and Subafroalpine Zone: High mountains above 3,200 m (Bale and Simien mountains). Characterized by Giant Lobelia (Lobelia rhynchopetalum), Erica arborea heather, cold temperatures, and thin soils.
  - Dry Evergreen Montane Forest and Grassland: Central highlands (1,500–3,000 m). Dominated by Juniperus procera (Tid), Podocarpus falcatus (Zigba), Olea europaea (Weyra).
  - Moist Evergreen Montane Rainforest: Southwestern highlands (e.g., Kaffa, Bench Maji). Native habitat of wild Arabica coffee (Coffea arabica).
  - Acacia-Commiphora Bushland and Thicket: Rift Valley and arid lowlands. Drought-tolerant thorny shrubs and succulents.
  - Desert and Semi-Desert Scrubland: Afar triangle, Somali region.

2. Endemic Fauna of Ethiopia:
• Endemic Mammals:
  - Walia Ibex (Capra walie): Confined exclusively to the high cliffs of Simien Mountains National Park.
  - Ethiopian Wolf (Canis simensis): World's rarest canid; restricted to afroalpine habitats in Bale and Simien mountains; feeds primarily on giant mole-rats.
  - Mountain Nyala (Tragelaphus buxtoni): High-altitude woodland antelope found in Bale Mountains and Arsi highlands.
  - Gelada Baboon (Theropithecus gelada): Endemic graminivorous primate ("bleeding heart baboon") found in northern high plateaus.
  - Bale Monkey (Chlorocebus djamdjamensis): Bamboo specialist in Bale forest.
• Endemic Birds:
  - Prince Ruspoli\'s Turaco, Harwood\'s Francolin, Yellow-fronted Parrot, Spot-breasted Lapwing, Blue-winged Goose, Rouget\'s Rail, Abyssinian Catbird.

3. Protected Conservation Areas in Ethiopia:
• Simien Mountains National Park: UNESCO World Heritage site; refugium for Walia Ibex and Ethiopian Wolf.
• Bale Mountains National Park: Center of afroalpine biodiversity; vital watershed for southeast Ethiopia.
• Awash National Park: Rift valley savanna wildlife (Beisa Oryx, Soemmerring\'s Gazelle).
• Nechisar National Park: Spans lakes Abaya and Chamo; protects Swayne\'s Hartebeest and giant Nile crocodiles.

4. Threats to Biodiversity & Conservation Measures:
• Major Threats: Habitat destruction and deforestation (agricultural expansion, charcoal production), overgrazing by domestic livestock, poaching, human-wildlife conflict, introduction of invasive alien species (e.g., Prosopis juliflora in Afar, Parthenium hysterophorus, Eichhornia crassipes water hyacinth in Lake Tana).
• Conservation Approaches:
  - In-Situ Conservation: Protecting species in their native natural habitats (National parks, wildlife sanctuaries, biosphere reserves).
  - Ex-Situ Conservation: Preservation outside native habitats (gene banks, Ethiopian Biodiversity Institute EBI, botanical gardens, captive breeding centers).`,
        workedExamples: [
          {
            problem: 'Classify the following Ethiopian species into in-situ protected endemic species and invasive alien species: (a) Canis simensis, (b) Prosopis juliflora, (c) Capra walie, (d) Eichhornia crassipes.',
            solution: '(a) Canis simensis (Ethiopian Wolf): Endemic mammal protected in-situ (Bale/Simien).\n(b) Prosopis juliflora: Invasive alien thorny shrub threatening native rangelands in Afar.\n(c) Capra walie (Walia Ibex): Endemic mammal found only in Simien Mountains National Park.\n(d) Eichhornia crassipes (Water hyacinth): Invasive alien aquatic weed threatening Lake Tana.'
          }
        ],
        practiceQuestions: [
          {
            question: 'The Walia Ibex (Capra walie) is an endangered mammal endemic exclusively to which protected conservation area in Ethiopia?',
            options: ['Bale Mountains National Park', 'Simien Mountains National Park', 'Awash National Park', 'Omo National Park'],
            correctIndex: 1,
            explanation: 'The Walia Ibex is restricted solely to the steep rocky cliffs of Simien Mountains National Park.'
          },
          {
            question: 'Which endemic Ethiopian primate is primarily a graminivore (grass-eating) living in high-altitude plateau herds?',
            options: ['Hamadryas baboon', 'Gelada baboon (Theropithecus gelada)', 'Colobus monkey', 'Olive baboon'],
            correctIndex: 1,
            explanation: 'The Gelada baboon is an endemic terrestrial primate adapted to eating highland grasses and subterranean tubers.'
          },
          {
            question: 'Which of the following is an invasive alien aquatic plant currently threatening biodiversity and navigation in Lake Tana?',
            options: ['Giant Lobelia', 'Water Hyacinth (Eichhornia crassipes)', 'Coffea arabica', 'Podocarpus falcatus'],
            correctIndex: 1,
            explanation: 'Water Hyacinth (Eichhornia crassipes) forms dense floating mats that deplete dissolved oxygen and choke Lake Tana.'
          },
          {
            question: 'What is the natural evolutionary homeland and primary center of genetic diversity for Coffea arabica?',
            options: ['Afroalpine zones of Bale Mountains', 'Moist evergreen montane rainforests of southwestern Ethiopia (Kaffa)', 'Arid Acacia lowlands of the Rift Valley', 'Danakil depression'],
            correctIndex: 1,
            explanation: 'The southwest Ethiopian cloud rainforests (Kaffa region) are the global birthplace of wild Coffea arabica.'
          },
          {
            question: 'The Ethiopian wolf (Canis simensis) specializes in preying primarily upon which high-altitude rodent species?',
            options: ['Crested porcupine', 'Giant root-rat / Big-headed African mole-rat', 'Nile rat', 'Desert jerboa'],
            correctIndex: 1,
            explanation: 'The Ethiopian wolf feeds predominantly on diurnal afroalpine rodents, especially the giant mole-rat (Tachyoryctes macrocephalus).'
          },
          {
            question: 'Preserving endangered plant germplasm in refrigerated seed vaults and botanical gardens represents which type of conservation?',
            options: ['In-situ conservation', 'Ex-situ conservation', 'Successional restoration', 'Bioremediation'],
            correctIndex: 1,
            explanation: 'Ex-situ conservation preserves biological diversity outside its natural habitat in gene banks, seed vaults, and zoos.'
          },
          {
            question: 'Which plant genus is a prominent Giant rosette species defining the Ethiopian afroalpine vegetation zone?',
            options: ['Lobelia (Giant Lobelia rhynchopetalum)', 'Eucalyptus', 'Prosopis', 'Parthenium'],
            correctIndex: 0,
            explanation: 'Lobelia rhynchopetalum is the iconic giant rosette plant dominating the Afroalpine tundra.'
          },
          {
            question: 'Which national park protects the endemic Swayne\'s Hartebeest between Lake Chamo and Lake Abaya?',
            options: ['Nechisar National Park', 'Gambella National Park', 'Yangudi Rassa National Park', 'Mago National Park'],
            correctIndex: 0,
            explanation: 'Nechisar National Park protects Swayne\'s Hartebeest on its central grassy plains between Lakes Abaya and Chamo.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: 8,
    title: 'UNIT EIGHT: EVOLUTION, SPECIATION & ANIMAL BEHAVIOR',
    description: 'Theories of evolution (Lamarckian use/disuse vs Darwinian natural selection), modern synthetic theory, evidence for evolution (homologous vs analogous structures, fossils, molecular clocks), speciation, Hardy-Weinberg equilibrium, and innate versus learned animal behaviors.',
    topics: [
      {
        id: 'bio-8-1',
        topicNumber: '8.1',
        title: 'Evolutionary Theories, Evidence & Population Genetics',
        summary: 'Darwinian natural selection, Lamarckism, homologous structures, speciation mechanisms, and Hardy-Weinberg equation.',
        content: `### 8.1 Evolutionary Mechanisms and Population Genetics

1. Theories of Evolution:
• Lamarckism (Jean-Baptiste Lamarck, 1809):
  - Theory of Inheritance of Acquired Characteristics and Principle of Use and Disuse.
  - Proved incorrect because acquired somatic traits do not alter the germline DNA passed to gametes (Weismann's germplasm theory).
• Darwinian Evolution by Natural Selection (Charles Darwin & Alfred Russel Wallace, 1859):
  - Overproduction of offspring: Species produce more offspring than environmental carrying capacity can sustain.
  - Struggle for existence: Competition for limited resources (food, territory, mates).
  - Heritable variation: Individuals in a population exhibit phenotypic variations.
  - Differential reproductive success ("Survival of the Fittest"): Individuals with favorable adaptive traits survive, reproduce, and pass alleles to the next generation at higher frequencies.

2. Evidence Supporting Evolution:
• Paleontology (Fossil Record): Shows progressive transitions over geological strata (e.g., Archaeopteryx linking theropod dinosaurs to birds).
• Comparative Anatomy:
  - Homologous Structures: Anatomically similar structures inherited from a common ancestor with different functions (Divergent Evolution, e.g., pentadactyl limb in humans, bats, whales, cats).
  - Analogous Structures: Structures with similar functions but different embryonic origins and anatomies, driven by similar environmental pressures (Convergent Evolution, e.g., wings of insects and birds).
  - Vestigial Structures: Reduced non-functional remnants of organs functional in ancestors (e.g., human appendix, coccyx, pelvic bones in whales).
• Molecular Biology: Universality of the genetic code, cytochrome c amino acid sequence conservation, and percentage of genomic DNA sequence identity.

3. Population Genetics & The Hardy-Weinberg Principle:
• Hardy-Weinberg Equilibrium: Allele and genotype frequencies in a population remain constant from generation to generation in the absence of evolutionary influences.
• Equations:
  - Allele frequencies: p + q = 1 (where p = frequency of dominant allele A, q = frequency of recessive allele a).
  - Genotype frequencies: p² + 2pq + q² = 1 (p² = AA homozygous dominant, 2pq = Aa heterozygous, q² = aa homozygous recessive).
• 5 Assumptions for Hardy-Weinberg Equilibrium:
  1. Extremely large population size (no genetic drift).
  2. No gene flow (no migration into or out of population).
  3. No mutations.
  4. Random mating.
  5. No natural selection (all genotypes have equal reproductive fitness).

4. Speciation Mechanisms:
• Speciation: The evolutionary process by which biological populations evolve to become distinct reproductive species.
• Allopatric Speciation: Geographic isolation (mountains, rivers, continental drift) physically separates populations, allowing divergent selection and genetic drift until reproductive isolation develops.
• Sympatric Speciation: Speciation occurring in the same geographic territory without physical barriers (often via polyploidy in plants, or behavioral niche differentiation).`,
        workedExamples: [
          {
            problem: 'In a randomly mating population at Hardy-Weinberg equilibrium, 16% of the individuals express a recessive cystic fibrosis phenotype (aa). Calculate: (a) the frequency of the recessive allele (q), (b) the frequency of the dominant allele (p), and (c) the percentage of the population that are heterozygous carriers (Aa).',
            solution: '1. Recessive genotype frequency q² = 0.16. Therefore, q = √0.16 = 0.40.\n2. Allele frequency equation: p + q = 1 ⟹ p = 1 - 0.40 = 0.60.\n3. Heterozygous carrier frequency = 2pq = 2(0.60)(0.40) = 0.48 = 48% of the population.'
          }
        ],
        practiceQuestions: [
          {
            question: 'The pentadactyl limb architecture found in humans, bats, whales, and cats provides classic evidence of:',
            options: ['Analogous structures resulting from convergent evolution', 'Homologous structures resulting from divergent evolution', 'Vestigial remnants with no ancestral origin', 'Acquired characteristics during individual lifespans'],
            correctIndex: 1,
            explanation: 'Homologous structures share a common ancestral anatomical plan but have diverged to serve different environmental adaptations.'
          },
          {
            question: 'Under Hardy-Weinberg equilibrium, if the frequency of a recessive allele (q) is 0.3, what is the expected frequency of heterozygous carriers (2pq)?',
            options: ['0.09', '0.42', '0.49', '0.21'],
            correctIndex: 1,
            explanation: 'p = 1 - q = 1 - 0.3 = 0.7. Heterozygous frequency 2pq = 2 × 0.7 × 0.3 = 0.42 (42%).'
          },
          {
            question: 'Which mechanism of speciation occurs when a geographic barrier physically divides a single population into two isolated groups?',
            options: ['Sympatric speciation', 'Allopatric speciation', 'Artificial selection', 'Parapatric drift'],
            correctIndex: 1,
            explanation: 'Allopatric speciation is triggered by geographic separation preventing gene flow between subdivided populations.'
          },
          {
            question: 'What key assumption must be satisfied for a population to remain in Hardy-Weinberg equilibrium?',
            options: ['Small population size susceptible to genetic drift', 'High rate of directional mutation', 'Random mating without sexual selection', 'Continuous immigration of new individuals'],
            correctIndex: 2,
            explanation: 'Random mating is required so that alleles combine according to independent probability without mate preference.'
          },
          {
            question: 'Wings of butterflies and wings of birds perform identical flight functions but evolved independently from different origins. These are:',
            options: ['Homologous structures', 'Analogous structures', 'Vestigial organs', 'Embryonic arches'],
            correctIndex: 1,
            explanation: 'Analogous structures result from convergent evolution where unrelated lineages evolve similar solutions to common functional demands.'
          },
          {
            question: 'Why was Jean-Baptiste Lamarck\'s theory of inheritance of acquired characteristics refuted?',
            options: ['Natural selection occurs too slowly', 'Phenotypic changes in somatic cells do not alter gametic DNA sequences', 'Giraffes never stretched their necks', 'Acquired traits are always fatal'],
            correctIndex: 1,
            explanation: 'Modifications acquired by somatic tissues during an organism\'s lifetime do not alter gametic DNA and cannot be inherited.'
          },
          {
            question: 'Random fluctuations in allele frequencies in small populations due to chance events are referred to as:',
            options: ['Gene flow', 'Genetic drift', 'Directional selection', 'Non-random mating'],
            correctIndex: 1,
            explanation: 'Genetic drift refers to stochastic changes in allele frequencies that have disproportionate impact in small breeding populations.'
          },
          {
            question: 'Fossil remains of Archaeopteryx represent a celebrated evolutionary transition linking which two major vertebrate classes?',
            options: ['Fish and Amphibians', 'Reptiles (Dinosaurs) and Birds', 'Amphibians and Mammals', 'Birds and Mammals'],
            correctIndex: 1,
            explanation: 'Archaeopteryx displays both reptilian features (toothed beak, clawed wings, bony tail) and avian characteristics (flight feathers).'
          }
        ]
      },
      {
        id: 'bio-8-2',
        topicNumber: '8.2',
        title: 'Animal Behavior: Innate Instincts vs Learned Behaviors',
        summary: 'Innate behavior (reflexes, taxes, kinesis, fixed action patterns) and learned behavior (habituation, imprinting, classical/operant conditioning, insight).',
        content: `### 8.2 Animal Behavior and Ethology

1. Innate (Instinctive) Behaviors:
• Genetically programmed, developmentally fixed behaviors exhibited by all individuals of a species without prior experience.
• Types of Innate Behaviors:
  - Reflex: Rapid, involuntary, automatic motor response to a sensory stimulus (e.g., knee-jerk reflex, withdrawal from painful stimulus).
  - Kinesis: Non-directional change in activity rate or turning frequency in response to stimulus intensity (e.g., woodlice move faster in dry areas and slow down in moist environments).
  - Taxis: Directional orientation movement toward (positive) or away from (negative) an environmental stimulus (e.g., positive phototaxis in Euglena, negative geotaxis in seedlings).
  - Fixed Action Pattern (FAP): Stereotypical sequence of unlearned behavioral acts that is essentially unchangeable and carried to completion once initiated by a sign stimulus / releaser (e.g., male three-spined stickleback aggressive defense against red-bellied intruders; egg-rolling behavior in greylag geese).

2. Learned Behaviors:
• Modification of behavior based on specific environmental experiences over an animal's lifespan.
• Types of Learned Behaviors:
  - Habituation: Decrease in behavioral response to repeated benign stimuli that convey neither benefit nor harm (e.g., scarecrow scaring birds initially, but ignored over time). Prevents sensory overload.
  - Imprinting (Konrad Lorenz): Irreversible learning occurring exclusively during a restricted critical period in early life (e.g., newly hatched goslings following the first moving object they see).
  - Classical Conditioning (Ivan Pavlov): Associative learning where an arbitrary neutral stimulus becomes associated with a biologically meaningful unconditioned stimulus (e.g., ringing bell paired with meat powder induces salivation in dogs).
  - Operant Conditioning (B.F. Skinner / Trial-and-Error): Associative learning where an animal learns to associate its own voluntary behavior with a consequence (reward or punishment, e.g., rat pressing lever for food in a Skinner box).
  - Insight Learning (Kohler): Ability to solve a novel, complex problem immediately on the first attempt by mentally organizing past experiences and spatial relationships without trial-and-error (e.g., chimpanzees stacking boxes to reach suspended bananas).`,
        workedExamples: [
          {
            problem: 'Classify each of the following behavioral scenarios as either Innate (specify type) or Learned (specify type): (a) A puppy salivating upon hearing a food can opener. (b) A moth flying directly toward an artificial lamp. (c) A human infant withdrawing their hand instantly from a hot stove. (d) Newly hatched ducklings following a human caregiver.',
            solution: '(a) Learned - Classical Conditioning (learned association between sound and food).\n(b) Innate - Positive Phototaxis (directional movement toward light stimulus).\n(c) Innate - Reflex action (protective spinal reflex).\n(d) Learned - Imprinting (learning confined to early critical sensitive period).'
          }
        ],
        practiceQuestions: [
          {
            question: 'A behavioral sequence that, once triggered by a specific sign stimulus, is invariably carried through to completion is a:',
            options: ['Fixed Action Pattern (FAP)', 'Classical conditioning response', 'Operant association', 'Habituation reflex'],
            correctIndex: 0,
            explanation: 'A Fixed Action Pattern is an innate, stereotypical motor response that proceeds to completion once released by a sign stimulus.'
          },
          {
            question: 'Konrad Lorenz demonstrated that newly hatched greylag geese form a strong attachment to the first moving object during a critical period through:',
            options: ['Operant conditioning', 'Imprinting', 'Sensory habituation', 'Trial-and-error learning'],
            correctIndex: 1,
            explanation: 'Imprinting is rapid, irreversible learning occurring exclusively during a brief sensitive developmental window.'
          },
          {
            question: 'Woodlice randomly increasing their speed of locomotion when encountering dry air until finding moist shelter exemplifies:',
            options: ['Negative phototaxis', 'Kinesis', 'Operant learning', 'Habituation'],
            correctIndex: 1,
            explanation: 'Kinesis is a non-directional change in movement speed or turning rate stimulated by environmental intensity.'
          },
          {
            question: 'A bird ceases to fly away from a harmless scarecrow after encountering it repeatedly without harm. This behavioral modification is:',
            options: ['Classical conditioning', 'Sensory habituation', 'Insight cognition', 'Imprinting'],
            correctIndex: 1,
            explanation: 'Habituation is the waning of an innate response to a repeated harmless stimulus lacking consequences.'
          },
          {
            question: 'Ivan Pavlov\'s experiment in which dogs salivated upon hearing a metronome or bell after repeated pairings with food is an example of:',
            options: ['Operant conditioning', 'Classical conditioning', 'Latent learning', 'Positive taxis'],
            correctIndex: 1,
            explanation: 'Classical conditioning pairs an unconditioned stimulus (food) with a conditioned stimulus (bell) to elicit a conditioned response.'
          },
          {
            question: 'What type of learning involves immediate problem solving without physical trial-and-error, as observed in primates using tools?',
            options: ['Insight learning', 'Habituation', 'Imprinting', 'Fixed action pattern'],
            correctIndex: 0,
            explanation: 'Insight learning is high-order cognitive problem solving using mental evaluation without physical trial-and-error.'
          },
          {
            question: 'Positive phototaxis refers to which type of biological response?',
            options: ['Non-directional wandering in light', 'Directional movement directly toward a light source', 'Loss of responsiveness to sunlight', 'Learned attraction to illuminated boxes'],
            correctIndex: 1,
            explanation: 'Taxis is directional movement, and positive phototaxis is movement directed toward light (e.g., in photosynthetic flagellates).'
          },
          {
            question: 'Training a dog to sit using tasty food rewards whenever the desired behavior is exhibited is based upon:',
            options: ['Operant conditioning (trial-and-error reinforcement)', 'Imprinting', 'Sensory adaptation', 'Classical Pavlovian conditioning'],
            correctIndex: 0,
            explanation: 'Operant conditioning reinforces voluntary behaviors through positive rewards or negative reinforcements.'
          }
        ]
      }
    ]
  }
];
