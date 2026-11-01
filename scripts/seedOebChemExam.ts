import fs from 'fs';
import path from 'path';
import { diagramQ25, diagramQ29, diagramQ44, diagramQ47 } from '../server/chemExamDiagrams';

interface QuestionDef {
  num: number;
  text: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  topic: string;
  instruction?: string;
  instructionCategory?: string;
  diagramSvg?: string;
  diagramCaption?: string;
}

const rawQuestions: QuestionDef[] = [
  {
    num: 1,
    text: "Which of the following sub atomic particle is used to determine chemical properties of elements?",
    a: "proton",
    b: "electron",
    c: "Nucleus",
    d: "Neutron",
    correct: "B",
    explanation: "The chemical properties, bonding capacity, and reactivity of elements are determined by their valence electrons in the outermost shell. In contrast, protons identify the atomic number and element, while neutrons dictate isotopic stability.",
    topic: "Fundamental Concepts & Atomic Structure"
  },
  {
    num: 2,
    text: "An element has two isotopes with masses of $62.93\\text{ amu}$ ($69.17\\%$) and $64.93\\text{ amu}$ ($30.83\\%$). What is the average atomic mass?",
    a: "$64.54\\text{ amu}$",
    b: "$63.54\\text{ amu}$",
    c: "$63.93\\text{ amu}$",
    d: "$64.93\\text{ amu}$",
    correct: "B",
    explanation: "The average atomic mass is calculated as the weighted sum of isotopic masses: $$\\text{Average Atomic Mass} = (62.93\\text{ amu} \\times 0.6917) + (64.93\\text{ amu} \\times 0.3083) = 43.529 + 20.018 = 63.547 \\approx 63.54\\text{ amu}$$ (corresponding to naturally occurring copper, $\\text{Cu}$).",
    topic: "Fundamental Concepts & Atomic Structure"
  },
  {
    num: 3,
    text: "What is the effect of increasing atomic size on electronegativity down a group of periodic table?",
    a: "The electronegativity increases because the atomic energy level increases.",
    b: "The electronegativity increases because the atomic number increases.",
    c: "The electronegativity decreases because the atomic size increases.",
    d: "The electronegativity decreases because the atomic size decreases.",
    correct: "C",
    explanation: "As you move down a group in the periodic table, additional electron shells increase the atomic radius and electron shielding. Consequently, the effective nuclear attraction on shared bonding electrons weakens, causing electronegativity to decrease.",
    topic: "Periodic Table & Periodic Properties"
  },
  {
    num: 4,
    text: "The periodic table contains two separate rows of inner transition elements located below the main table. These rows contain 14 elements each and belong to the 6th and 7th periods. Based on their position and electron configurations, which pair of elements series correctly corresponds to 6th and 7th periods?",
    a: "Halogenes, Nobel gas",
    b: "lanthanoids, actinoids",
    c: "chalcogens, halogens",
    d: "actinoids, halogens",
    correct: "B",
    explanation: "The inner transition elements (f-block) consist of two series: the Lanthanoids ($4f$ series, period 6, $Z=57-71$) and the Actinoids ($5f$ series, period 7, $Z=89-103$).",
    topic: "Periodic Table & Periodic Properties"
  },
  {
    num: 5,
    text: "Aluminum reacts with a certain nonmetallic element, $\\text{X}$ to form a compound with the general formula $\\text{AlX}$. Element $\\text{X}$ is a diatomic gas at room temperature. Element $\\text{X}$ must be:",
    a: "sulfur",
    b: "fluorine",
    c: "Bromine",
    d: "Nitrogen",
    correct: "D",
    explanation: "Aluminum forms $\\text{Al}^{3+}$ cations. For an empirical formula of $\\text{AlX}$ (a 1:1 mole ratio), element $\\text{X}$ must carry a $-3$ oxidation state (forming $\\text{X}^{3-}$). Nitrogen is a group 15 nonmetal that forms $\\text{N}^{3-}$ (nitride ion) and exists naturally as diatomic $\\text{N}_2$ gas, producing aluminum nitride ($\\text{AlN}$).",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 6,
    text: "Ammonium ion ($\\text{NH}_4^+$) is formed when ammonia ($\\text{NH}_3$) reacts with a hydrogen ion ($\\text{H}^+$). Which statement correctly analyzes the bond formed in the ammonium ion ($\\text{NH}_4^+$)?",
    a: "All $\\text{N}-\\text{H}$ bonds are ionic because the ion carries an overall positive charge.",
    b: "$\\text{N}-\\text{H}$ bond is formed when nitrogen donates a lone pair of electrons to a hydrogen ion.",
    c: "$\\text{N}-\\text{H}$ bonds are formed by transfer of electrons from hydrogen to nitrogen atom.",
    d: "The positive charge causes all bonds in the ion to become nonpolar covalent bonds.",
    correct: "B",
    explanation: "In the formation of $\\text{NH}_4^+$, ammonia's central nitrogen atom donates its non-bonding lone pair of valence electrons into the empty $1s$ orbital of an incoming proton ($\\text{H}^+$), creating a coordinate covalent (dative) bond.",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 7,
    text: "A student misunderstood that London dispersion forces are insignificant and can be ignored when predicting physical properties. Which of the following is the best to evaluate this claim?",
    a: "London forces exist only in gaseous molecules and not in liquids or solids.",
    b: "London forces are the strongest type of interaction found in all substances.",
    c: "London forces exist in all molecules and become significant in large atoms.",
    d: "London forces only occur in ionic compounds and have no effect on molecules.",
    correct: "C",
    explanation: "London dispersion forces operate in all atoms and molecules regardless of polarity. In large molecules and heavy atoms with large, highly polarizable electron clouds, dispersion forces become exceptionally strong (e.g., explaining why $\\text{I}_2$ is a solid at room temperature).",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 8,
    text: "Someone conducts an experiment by using test tube with unknown compounds. If he/she touches the outer surface of the test tube during the reaction progress, he/she feels hot. This indicates the reaction that takes place in the test tube is ______.",
    a: "absorbed heat from the surroundings.",
    b: "released heat energy to the surroundings.",
    c: "the unknown compound evaporated to atmosphere",
    d: "heat is neither absorbed nor released during the reaction.",
    correct: "B",
    explanation: "An exothermic reaction releases thermal energy from the chemical system to its surroundings (the solvent and test tube walls), leading to an increase in temperature.",
    topic: "Chemical Thermodynamics & Thermochemistry"
  },
  {
    num: 9,
    text: "If a student uses $2.0\\text{ grams}$ of copper (II) oxide and obtains $1.60\\text{ grams}$ of copper after reduction, which of the following statements correctly describes its law of definite proportion?",
    a: "The ratio of copper to oxygen remains constant in the compound.",
    b: "The compound contains more amount of oxygen than before.",
    c: "The mass of copper depends on the volume of hydrogen gas used.",
    d: "The changes temperature changes the composition of the compound.",
    correct: "A",
    explanation: "By Proust's Law of Definite Proportions (Constant Composition), a given chemical compound always contains its constituent elements in a fixed, definite mass ratio regardless of sample size or synthesis method ($1.60\\text{ g Cu} : 0.40\\text{ g O} = 4:1$).",
    topic: "Fundamental Concepts & Atomic Structure"
  },
  {
    num: 10,
    text: "Why does the electron configuration of chromium ($\\text{Cr}$) deviate from the expected $[\\text{Ar}] 4s^2 3d^4$?",
    a: "Half-filled d -orbitals are more stable than incomplete field.",
    b: "d-orbital of Chromium is more stable than s- orbital",
    c: "4s orbital is in the higher energy than 3d orbital.",
    d: "Electron fills the lower energy before higher energy.",
    correct: "A",
    explanation: "Chromium adopts the configuration $[\\text{Ar}] 4s^1 3d^5$. Exactly half-filled subshells ($d^5$) possess enhanced electronic stability due to symmetric charge distribution and maximized exchange energy among parallel electron spins.",
    topic: "Fundamental Concepts & Atomic Structure"
  },
  {
    num: 11,
    text: "Many classic experiments have given indirect evidence about the nature of the atom. Which statement below is NOT correct about the results of these experiments?",
    a: "Rutherford Experiment confirmed that Plum Pudding Model of the atom was correct.",
    b: "Dalton’s atomic model stated that atoms are not subdivided in to subatomic particles.",
    c: "Oil Droplet Experiment showed that electric charge occurs in multi-electron charge.",
    d: "Cathode Ray Tube Experiment demonstrated that electrons carry a negative electric charge.",
    correct: "A",
    explanation: "Rutherford's gold foil alpha-particle scattering experiment refuted and disproved J.J. Thomson's Plum Pudding model by demonstrating that positive charge and mass are concentrated in a dense, compact central nucleus.",
    topic: "Fundamental Concepts & Atomic Structure"
  },
  {
    num: 12,
    text: "On the gold foil experiment, most alpha particles passed straight through the foil while a few were strongly deflected. What conclusion can be drawn from this observation?",
    a: "Atoms are completely solid spheres and destructible.",
    b: "Most of the mass of an atom is evenly distributed.",
    c: "Electrons are embedded in a positive sphere of an atom.",
    d: "Atoms contain a small, dense, positively charged nucleus.",
    correct: "D",
    explanation: "Because the vast majority of alpha particles passed undeviated, most of an atom's volume is empty space. The few particles deflected at large angles proved the presence of a tiny, extremely dense, positively charged nucleus.",
    topic: "Fundamental Concepts & Atomic Structure"
  },
  {
    num: 13,
    text: "Which of the following statements correctly relates wavelength, frequency, and speed of EMR in vacuum?",
    a: "Wavelength increases, frequency increases, speed decreases",
    b: "Wavelength decreases, frequency increases, speed constant",
    c: "Wavelength increases, frequency decreases, speed decreases",
    d: "Wavelength decreases, frequency decreases, speed constant",
    correct: "B",
    explanation: "The speed of electromagnetic radiation in a vacuum is a universal constant ($c = \\lambda \\nu = 3.00 \\times 10^8\\text{ m/s}$). Therefore, wavelength and frequency are inversely related: as wavelength decreases, frequency increases while speed remains constant.",
    topic: "Fundamental Concepts & Atomic Structure"
  },
  {
    num: 14,
    text: "Which combination represents all possible sets of quantum numbers for the $3d$ electrons?\n\n$$\\begin{array}{|c|c|c|c|c|}\\hline \Choices & n & l & m_l & m_s \\\\ \\hline \\text{A} & 3 & 2 & -2, -1, 0, 1, 2 & \\pm 1/2 \\\\ \\hline \\text{B} & 3 & 1 & -1, 0, 1 & \\pm 1/2 \\\\ \\hline \\text{C} & 3 & 2 & -3, -2, -1, 0, 1, 2, 3 & +1/2 \\\\ \\hline \\text{D} & 3 & 1 & -2, -1, 0, 1, 2 & \\pm 1/2 \\\\ \\hline \\end{array}$$",
    a: "Choice A: $n=3, l=2, m_l = -2, -1, 0, 1, 2, m_s = \\pm 1/2$",
    b: "Choice B: $n=3, l=1, m_l = -1, 0, 1, m_s = \\pm 1/2$",
    c: "Choice C: $n=3, l=2, m_l = -3, -2, -1, 0, 1, 2, 3, m_s = +1/2$",
    d: "Choice D: $n=3, l=1, m_l = -2, -1, 0, 1, 2, m_s = \\pm 1/2$",
    correct: "A",
    explanation: "For the $3d$ subshell, the principal quantum number $n = 3$, orbital angular momentum quantum number for a $d$-orbital is $l = 2$, magnetic quantum number $m_l$ ranges from $-l$ to $+l$ ($-2, -1, 0, +1, +2$), and spin quantum number $m_s = \\pm 1/2$.",
    topic: "Fundamental Concepts & Atomic Structure"
  },
  {
    num: 15,
    text: "Which of the following sets shows the correct first four members of the alkane series?",
    a: "Methane, Ethene, Propane, Butane",
    b: "Methane, Methanol, Ethanol, Butanol",
    c: "Methane, Ethyne, Propane, Butene",
    d: "Methane, Ethane, Propane, Butane",
    correct: "D",
    explanation: "The homologous series of unbranched alkanes ($C_n H_{2n+2}$) begins with Methane ($CH_4$), Ethane ($C_2H_6$), Propane ($C_3H_8$), and Butane ($C_4H_{10}$).",
    topic: "Hydrocarbons & Organic Chemistry"
  },
  {
    num: 16,
    text: "Given elements: $\\text{O}, \\text{Be}, \\text{N}, \\text{B}, \\text{F}$: which is the correct increasing order of first ionization energy?",
    a: "$\\text{Be} < \\text{B} < \\text{N} < \\text{O} < \\text{F}$",
    b: "$\\text{F} < \\text{B} < \\text{Be} < \\text{O} < \\text{N}$",
    c: "$\\text{N} < \\text{B} < \\text{O} < \\text{Be} < \\text{F}$",
    d: "$\\text{B} < \\text{Be} < \\text{O} < \\text{N} < \\text{F}$",
    correct: "D",
    explanation: "Across Period 2, ionization energy increases generally, with standard anomalies: $\\text{B} (2s^2 2p^1) < \\text{Be} (2s^2)$ due to shielding by the full $2s$ subshell, and $\\text{O} (2s^2 2p^4) < \\text{N} (2s^2 2p^3)$ due to spin-pairing repulsion in oxygen's $2p$ orbital vs Nitrogen's stable half-filled subshell. Thus, the order is $\\text{B} < \\text{Be} < \\text{O} < \\text{N} < \\text{F}$.",
    topic: "Periodic Table & Periodic Properties"
  },
  {
    num: 17,
    text: "Which of the following statements is CORRECT regarding the formation of ionic compounds?",
    a: "Ionic compounds are formed when electrons are shared between atoms.",
    b: "Ionic compounds are formed between atoms with similar electronegativity.",
    c: "Ionic compounds form when electrons transferred from one atom to another.",
    d: "Ionic compounds formed by delocalization of electrons in metal.",
    correct: "C",
    explanation: "Ionic bonds are electrostatic attractions formed when one or more valence electrons are completely transferred from an electropositive metallic atom to an electronegative non-metallic atom.",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 18,
    text: "Why is graphite a good conductor of electricity, while diamond ($\\text{C}$) is not, even though both are forms of carbon allotropes?",
    a: "Graphite has delocalized electrons due to its hexagonal structure, while diamond does not",
    b: "Graphite is a metal having delocalized electron while diamond is a non-metal doesn’t.",
    c: "Diamond has metallic bonding; while graphite forms ionic bond with each other.",
    d: "Both graphite and diamond have identical structures and conductivity randomly.",
    correct: "A",
    explanation: "In graphite, each carbon atom is $sp^2$ hybridized in planar sheets, leaving one unhybridized $p$ electron per carbon delocalized across the $\\pi$-framework to conduct charge. In diamond, each carbon is $sp^3$ hybridized in a rigid 3D tetrahedral network with all valence electrons locked in localized $\\sigma$ bonds.",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 19,
    text: "Which of the following lists correctly shows the strength of the intermolecular attractive forces in decreasing order?",
    a: "$\\text{Hydrogen bond} \\longrightarrow \\text{dipole-dipole force} \\longrightarrow \\text{London force}$",
    b: "$\\text{Dipole-dipole force} \\longrightarrow \\text{Hydrogen bond} \\longrightarrow \\text{London force}$",
    c: "$\\text{London force} \\longrightarrow \\text{dipole-dipole force} \\longrightarrow \\text{Hydrogen bond}$",
    d: "$\\text{London force} \\longrightarrow \\text{Hydrogen bond} \\longrightarrow \\text{dipole-dipole force}$",
    correct: "A",
    explanation: "For molecules of comparable molar mass and size, hydrogen bonds are the strongest intermolecular force ($10-40\\text{ kJ/mol}$), followed by dipole-dipole interactions ($5-25\\text{ kJ/mol}$), and London dispersion forces ($0.05-40\\text{ kJ/mol}$).",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 20,
    text: "When two chlorine atoms combine to form a chlorine molecule ($\\text{Cl}_2$), a covalent bond is formed due to the overlapping of atomic orbitals. Which orbital overlap is responsible for the formation of the bond in $\\text{Cl}_2$?",
    a: "Side-by-side overlaps of two p orbitals to forms a $\\pi$ bond.",
    b: "End-to-end overlap of two p orbitals to forms a $\\sigma$ bond.",
    c: "End-to-end overlaps of two s orbitals to forms a $\\sigma$ bond.",
    d: "Side-by-side overlap of s orbital and p orbital forms a $\\pi$ bond.",
    correct: "B",
    explanation: "Each chlorine atom has a singly occupied $3p_z$ orbital. The single covalent bond in $\\text{Cl}_2$ is formed by the head-on (end-to-end/coaxial) overlap of these two $3p$ orbitals, yielding a cylindrical $\\sigma$ (sigma) bond.",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 21,
    text: "You want to design a set of molecules whose central atoms all exhibit $sp^2$ hybridization. Using concepts of molecular geometry and hybridization, which of the following groups of molecules could best satisfy this requirement?",
    a: "$\\text{SO}_2, \\text{SO}_4^{2-}, \\text{C}_6\\text{H}_6$",
    b: "$\\text{CHCl}_3, \\text{C}_6\\text{H}_6, \\text{C}_2\\text{H}_4$",
    c: "$\\text{SO}_2, \\text{C}_6\\text{H}_6, \\text{C}_2\\text{H}_4$",
    d: "$\\text{CHCl}_3, \\text{SO}_2, \\text{C}_6\\text{H}_6$",
    correct: "C",
    explanation: "In $\\text{SO}_2$, the central sulfur atom has 2 bonded oxygens and 1 lone pair (steric number 3 $\\rightarrow sp^2$). In benzene ($\\text{C}_6\\text{H}_6$), all 6 carbon atoms are $sp^2$ hybridized. In ethene ($\\text{C}_2\\text{H}_4$), both carbons are $sp^2$ hybridized.",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 22,
    text: "Given two molecules $\\text{X}$ and $\\text{Y}$ that satisfy the following conditions:\n- Molecule $\\text{X}$ contains $14$ sigma ($\\sigma$) bonds and no pi ($\\pi$) bonds.\n- Molecule $\\text{Y}$ contains $5$ sigma ($\\sigma$) bonds and $0$ pi ($\\pi$) bonds.\nWhich of the following molecules can be represented by $\\text{X}$ and $\\text{Y}$ respectively?",
    a: "diethyl ether, $(\\text{CH}_3\\text{CH}_2)_2\\text{O}$ and hydrazine, $(\\text{N}_2\\text{H}_4)$",
    b: "diethyl ether, $(\\text{CH}_3\\text{CH}_2)_2\\text{O}$ and carbon dioxide $(\\text{CO}_2)$",
    c: "Ethyl alcohol $(\\text{CH}_3\\text{CH}_2\\text{OH})$ and Benzene $(\\text{C}_6\\text{H}_6)$",
    d: "hydrazine, $(\\text{N}_2\\text{H}_4)$ and Chloroform $(\\text{CHCl}_3)$",
    correct: "A",
    explanation: "In diethyl ether $(\\text{CH}_3\\text{CH}_2)_2\\text{O}$: there are $2\\times (\\text{C}-\\text{C}) + 2\\times (\\text{C}-\\text{O}) + 10\\times (\\text{C}-\\text{H}) = 14\\ \\sigma$ bonds and $0\\ \\pi$ bonds. In hydrazine $\\text{N}_2\\text{H}_4$: there is $1\\times (\\text{N}-\\text{N}) + 4\\times (\\text{N}-\\text{H}) = 5\\ \\sigma$ bonds and $0\\ \\pi$ bonds.",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 23,
    text: "The molecule $\\text{BF}_3$ consists of a boron atom bonded to three fluorine atoms. Based on VSEPR theory what is the shape and bond angle of $\\text{BF}_3$?",
    a: "Tetrahedral $109.5^\\circ$ bond angles",
    b: "Trigonal planar with $120^\\circ$ bond angles",
    c: "Linear with $180^\\circ$ bond angles",
    d: "Bent with bond angles less than $120^\\circ$",
    correct: "B",
    explanation: "Boron has 3 valence electrons and forms 3 single bonds with fluorine with 0 lone pairs. By VSEPR theory, 3 electron domains arrange symmetrically in a trigonal planar geometry with bond angles of $120^\\circ$.",
    topic: "Chemical Bonding & Structure"
  },
  {
    num: 24,
    text: "Which of the following statements correctly describes Boyle’s law?",
    a: "The volume of a gas is directly proportional to temperature at constant pressure.",
    b: "The pressure of a gas is inversely proportional to its volume at constant temperature.",
    c: "The pressure of a gas is directly proportional to the number of moles at constant temperature.",
    d: "The volume of a gas is directly proportional to pressure at constant temperature.",
    correct: "B",
    explanation: "Boyle's Law states that at constant temperature and fixed amount of gas, the pressure of an ideal gas is inversely proportional to its volume ($P \\propto 1/V$, or $P_1V_1 = P_2V_2$).",
    topic: "States of Matter & Gas Laws"
  },
  {
    num: 25,
    text: "Identify the hybridization of carbon atoms in the molecule labelled as 1, 2, 3, 4 in the given figure below:\n\n$$\\begin{array}{|c|c|c|c|c|}\\hline \Option & 1 & 2 & 3 & 4 \\\\ \\hline \\text{A} & sp^3 & sp^2 & sp^2 & sp^2 \\\\ \\hline \\text{B} & sp^2 & sp^2 & sp^2 & sp \\\\ \\hline \\text{C} & sp^3 & sp^3 & sp^3 & sp^2 \\\\ \\hline \\text{D} & sp^2 & sp^3 & sp^2 & sp^3 \\\\ \\hline \\end{array}$$",
    a: "$1: sp^3,\\ 2: sp^2,\\ 3: sp^2,\\ 4: sp^2$",
    b: "$1: sp^2,\\ 2: sp^2,\\ 3: sp^2,\\ 4: sp$",
    c: "$1: sp^3,\\ 2: sp^3,\\ 3: sp^3,\\ 4: sp^2$",
    d: "$1: sp^2,\\ 2: sp^3,\\ 3: sp^2,\\ 4: sp^3$",
    correct: "A",
    explanation: "Carbon 1 is bonded to 4 single groups ($-\\text{CH}(\\text{CH}_3)-$) $\\rightarrow sp^3$. Carbon 2 is part of a $\\text{C}=\\text{C}$ double bond $\\rightarrow sp^2$. Carbon 3 is part of the $\\text{C}=\\text{C}$ double bond $\\rightarrow sp^2$. Carbon 4 is a carbonyl carbon ($\\\\text{C}=\\text{O}$) $\\rightarrow sp^2$.",
    topic: "Chemical Bonding & Structure",
    diagramSvg: diagramQ25,
    diagramCaption: "Numbered carbon atoms 1, 2, 3, and 4 in the organic amine-ketone structure"
  },
  {
    num: 26,
    text: "Which of the following is NOT a pre-condition for a chemical reaction to occur?",
    a: "Effective collision",
    b: "Sufficient energy.",
    c: "proper orientation",
    d: "high activation energy",
    correct: "D",
    explanation: "According to Collision Theory, three conditions must be satisfied: reactant particles must collide, with kinetic energy greater than or equal to the activation energy ($E \\ge E_a$), and in a proper stereochemical orientation. A 'high activation energy' is an impediment that slows down reactions, not a prerequisite condition.",
    topic: "Chemical Kinetics & Reaction Rates"
  },
  {
    num: 27,
    text: "Two substances $\\text{X}$ and $\\text{Y}$ have melting points of $100\\ ^\\circ\\text{C}$ and $50\\ ^\\circ\\text{C}$, respectively. Which substance is more thermally stable as a solid?",
    a: "$\\text{Y}$, because it melts at lower temperature.",
    b: "Both are equally stable at the given temperature.",
    c: "$\\text{X}$, because it requires more heat to melt",
    d: "Impossible to guess.",
    correct: "C",
    explanation: "Substance $\\text{X}$ has stronger crystal lattice or intermolecular bonding forces, requiring significantly greater thermal energy ($100\\ ^\\circ\\text{C}$) to disrupt its solid structure and transition into liquid state.",
    topic: "States of Matter & Gas Laws"
  },
  {
    num: 28,
    text: "Which of the following changes will generally increase the rate of a reaction?",
    a: "Decreasing temperature of the reaction.",
    b: "Decreasing concentration of reactants.",
    c: "Using powdered solids instead of large size.",
    d: "Removing a catalyst from the reaction.",
    correct: "C",
    explanation: "Grinding a solid into a fine powder significantly increases the total accessible surface area of the reactant, increasing collision frequency between reactant particles and accelerating the reaction rate.",
    topic: "Chemical Kinetics & Reaction Rates"
  },
  {
    num: 29,
    text: "The phase change diagram below shows different physical processes, labeled $\\text{X}, \\text{Y}, \\text{Z}, \\text{M}$:\n\n$$\\begin{array}{|c|c|c|c|c|}\\hline & \\text{X} & \\text{Y} & \\text{Z} & \\text{M} \\\\ \\hline \\text{A} & \\text{sublimation} & \\text{boiling} & \\text{deposition} & \\text{freezing} \\\\ \\hline \\text{B} & \\text{Melting} & \\text{boiling} & \\text{deposition} & \\text{freezing} \\\\ \\hline \\text{C} & \\text{Melting} & \\text{boiling} & \\text{freezing} & \\text{condensation} \\\\ \\hline \\text{D} & \\text{Melting} & \\text{boiling} & \\text{deposition} & \\text{sublimation} \\\\ \\hline \\end{array}$$",
    a: "X = sublimation, Y = boiling, Z = deposition, M = freezing",
    b: "X = Melting, Y = boiling, Z = deposition, M = freezing",
    c: "X = Melting, Y = boiling, Z = freezing, M = condensation",
    d: "X = Melting, Y = boiling, Z = deposition, M = sublimation",
    correct: "B",
    explanation: "In phase changes: Solid $\\rightarrow$ Liquid is Melting ($\\text{X}$); Liquid $\\rightarrow$ Gas is Boiling/Vaporization ($\\text{Y}$); Gas $\\rightarrow$ Solid is Deposition ($\\text{Z}$); Liquid $\\rightarrow$ Solid is Freezing ($\\text{M}$).",
    topic: "States of Matter & Gas Laws",
    diagramSvg: diagramQ29,
    diagramCaption: "Phase change cycle diagram connecting Solid, Liquid, and Gas states"
  },
  {
    num: 30,
    text: "If $K_{c1}$ and $K_{c2}$ are the equilibrium constants for the two reactions:\n1. $\\text{XeF}_6(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{XeOF}_4(g) + 2\\text{HF}(g) \\quad K_{c1}$\n2. $\\text{XeF}_4(g) + \\text{XeF}_6(g) \\rightleftharpoons \\text{XeOF}_4(g) + \\text{XeO}_3\\text{F}_2(g) \\quad K_{c2}$\n\nWhat is the equilibrium constant for the reaction:\n$$\\text{XeF}_4(g) + 2\\text{HF}(g) \\rightleftharpoons \\text{XeO}_3\\text{F}_2(g) + \\text{H}_2\\text{O}(g)$$?",
    a: "$K_{c1} - K_{c2}$",
    b: "$K_{c2} - K_{c1}$",
    c: "$K_{c2} / K_{c1}$",
    d: "$K_{c1} / K_{c2}$",
    correct: "C",
    explanation: "Reversing reaction (1) gives an equilibrium constant $1/K_{c1}$. Adding the reversed reaction (1) to reaction (2) yields the target reaction. When chemical equations are added, their equilibrium constants are multiplied: $$K = K_{c2} \\times \\frac{1}{K_{c1}} = \\frac{K_{c2}}{K_{c1}}$$",
    topic: "Chemical Equilibrium"
  },
  {
    num: 31,
    text: "How is the reaction quotient ($Q_c$) related to equilibrium constant ($K_{eq}$)?",
    a: "$Q_c < K_c$ after equilibrium",
    b: "$Q_c = K_c$ before equilibrium",
    c: "$Q_c = K_c$ at equilibrium",
    d: "$Q_c$ and $K_c$ are not related",
    correct: "C",
    explanation: "The reaction quotient $Q_c$ has the same mathematical expression as the equilibrium constant $K_c$ using non-equilibrium concentrations. Exactly when a system reaches dynamic chemical equilibrium, $Q_c = K_c$.",
    topic: "Chemical Equilibrium"
  },
  {
    num: 32,
    text: "Which statement best explains why alcohols generally have higher boiling points than alkanes with similar molecular mass?",
    a: "Alcohols contain hydroxyl groups that form intermolecular hydrogen bonds.",
    b: "Alcohols molecules contain carbon atoms that increase intermolecular attractions.",
    c: "Alcohols molecules have shorter carbon chains than most similar alkane molecules.",
    d: "Alcohols molecules are less polar than alkanes with similar molecular masses.",
    correct: "A",
    explanation: "Alcohols possess polar hydroxyl ($-OH$) functional groups with highly electronegative oxygen atoms, enabling strong intermolecular hydrogen bonding that requires substantially higher thermal energy to separate.",
    topic: "Hydrocarbons & Organic Chemistry"
  },
  {
    num: 33,
    text: "Given the following compounds, what would be the correct decreasing order of boiling point?:\nI. $\\text{CH}_3\\text{CH}_2\\text{CH}(\\text{CH}_3)\\text{CH}_2\\text{COOH}$\nII. $\\text{CH}_3(\\text{CH}_2)_4\\text{COOH}$\nIII. $\\text{CH}_3\\text{CH}_2\\text{C}(\\text{CH}_3)_2\\text{COOH}$",
    a: "$\\text{I} > \\text{III} > \\text{II}$",
    b: "$\\text{II} > \\text{III} > \\text{I}$",
    c: "$\\text{III} > \\text{I} > \\text{II}$",
    d: "$\\text{II} > \\text{I} > \\text{III}$",
    correct: "D",
    explanation: "All three compounds are structural isomers of hexanoic acid ($C_6H_{12}O_2$). The unbranched straight chain (II) provides the greatest surface area and van der Waals contact, followed by the mono-branched isomer (I), while the highly branched isomer (III) is most compact with the lowest surface area. Thus: $\\text{II} > \\text{I} > \\text{III}$.",
    topic: "Hydrocarbons & Organic Chemistry"
  },
  {
    num: 34,
    text: "Which of the following describes a general method for synthesizing esters from carboxylic acids and alcohols, emphasizing reaction conditions and equilibrium?",
    a: "Mixing alcohol and carboxylic acid without catalyst.",
    b: "Carboxylic acids and alcohols are reacted under basic condition",
    c: "Heating of carboxylic acid and alcohol with concentrated $\\text{H}_2\\text{SO}_4$",
    d: "Esters formed only by oxidation of alcohols in the presence of $\\text{Cu}$.",
    correct: "C",
    explanation: "Fischer esterification involves heating a carboxylic acid and alcohol under reflux in the presence of concentrated $\\text{H}_2\\text{SO}_4$, which acts as an acid catalyst and a dehydrating agent to drive the equilibrium toward ester formation.",
    topic: "Hydrocarbons & Organic Chemistry"
  },
  {
    num: 35,
    text: "Which evaluation correctly describe physical and chemical properties of oils?",
    a: "Oils are solids and remain unreactive under all conditions.",
    b: "Oils are polar solid and can’t decompose when exposed to air.",
    c: "Oils are generally liquid undergo hydrogenation reaction",
    d: "Oils are nonpolar liquids but cannot react with acids and bases",
    correct: "C",
    explanation: "Plant and vegetable oils are triglycerides rich in unsaturated fatty acids with double bonds (rendering them liquid at room temperature). They undergo catalytic hydrogenation (addition of $H_2$) to form saturated solid fats like margarine.",
    topic: "Hydrocarbons & Organic Chemistry"
  },
  {
    num: 36,
    text: "Why tricarboxylic acids have higher boiling points than monocarboxylic acids?",
    a: "Monocarboxylic acids are branched, lowering the boiling point.",
    b: "Tricarboxylic acids are lighter, which increases boiling points.",
    c: "Monocarboxylic acids contain double bonds, reducing its boiling point",
    d: "The more –$\\text{COOH}$ in tricarboxylic acid, forming stronger hydrogen bonds",
    correct: "D",
    explanation: "Tricarboxylic acids contain three carboxyl groups ($-COOH$), facilitating an extensive 3D network of multiple intermolecular hydrogen bonds as well as higher molecular mass.",
    topic: "Hydrocarbons & Organic Chemistry"
  },
  {
    num: 37,
    text: "In a redox reaction: $\\text{MnO}_2 + 4\\text{HCl} \\longrightarrow \\text{MnCl}_2 + \\text{Cl}_2 + 2\\text{H}_2\\text{O}$. Which of the following statements correctly identifies the roles of the reactants?",
    a: "$\\text{MnO}_2$ is the reducing agent because the oxidation state of $\\text{Mn}$ increases.",
    b: "$\\text{HCl}$ is the oxidizing agent because the oxidation state of $\\text{Cl}$ increases.",
    c: "$\\text{MnO}_2$ is the oxidizing agent because the oxidation state of $\\text{Mn}$ decreases",
    d: "$\\text{HCl}$ is the reducing agent because the oxidation state of $\\text{H}$ decreases.",
    correct: "C",
    explanation: "The oxidation state of manganese drops from $+4$ in $\\text{MnO}_2$ to $+2$ in $\\text{MnCl}_2$ (reduction). Hence, $\\text{MnO}_2$ is the oxidizing agent.",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 38,
    text: "When $5.0\\text{ g}$ of magnesium reacts with $20.0\\text{ g}$ of oxygen gas according to the reaction: $$2\\text{Mg}(s) + \\text{O}_2(g) \\rightarrow 2\\text{MgO}(s)$$ What is the mass of $\\text{MgO}$ that can be formed?",
    a: "$8.3\\text{ g}$",
    b: "$10.0\\text{ g}$",
    c: "$16.7\\text{ g}$",
    d: "$20.0\\text{ g}$",
    correct: "A",
    explanation: "Molar mass of $\\text{Mg} = 24.3\\text{ g/mol}$, $\\text{O}_2 = 32.0\\text{ g/mol}$, and $\\text{MgO} = 40.3\\text{ g/mol}$. Moles of $\\text{Mg} = 5.0 / 24.3 = 0.2058\\text{ mol}$; moles of $\\text{O}_2 = 20.0 / 32.0 = 0.625\\text{ mol}$. Magnesium is the limiting reactant. Yield: $$0.2058\\text{ mol} \\times 40.3\\text{ g/mol} = 8.29\\text{ g} \\approx 8.3\\text{ g}$$",
    topic: "Stoichiometry & Chemical Calculations"
  },
  {
    num: 39,
    text: "A student crushes a large crystal of sugar into many small pieces before dissolving it in water. The sugar dissolves faster than the large crystal. Which of the following is correctly describing the observation?",
    a: "Increase in intermolecular force",
    b: "Increase the surface area of the molecule",
    c: "Increase in pressure of the system",
    d: "Decrease temperature",
    correct: "B",
    explanation: "Subdividing a large crystal into smaller particles increases the surface area exposed to the surrounding solvent molecules, accelerating the dissolution process.",
    topic: "Solutions & Solubility"
  },
  {
    num: 40,
    text: "A technician prepares a solution by dissolving $40\\text{ g}$ of $\\text{NaOH}$, in enough water to make $500\\text{ mL}$ of solution. What is the molarity ($\\text{M}$) of this solution?",
    a: "$1.0\\text{ M}$",
    b: "$2.0\\text{ M}$",
    c: "$0.5\\text{ M}$",
    d: "$4.0\\text{ M}$",
    correct: "B",
    explanation: "Molar mass of $\\text{NaOH} = 23 + 16 + 1 = 40.0\\text{ g/mol}$. Moles of $\\text{NaOH} = 40\\text{ g} / 40\\text{ g/mol} = 1.0\\text{ mol}$. Volume = $500\\text{ mL} = 0.500\\text{ L}$. Molarity $$M = \\frac{1.0\\text{ mol}}{0.500\\text{ L}} = 2.0\\text{ M}$$",
    topic: "Solutions & Solubility"
  },
  {
    num: 41,
    text: "Which of the following oxides is classified as an amphoteric oxide?",
    a: "$\\text{CaO}$",
    b: "$\\text{SO}_2$",
    c: "$\\text{Al}_2\\text{O}_3$",
    d: "$\\text{CO}_2$",
    correct: "C",
    explanation: "Aluminum oxide ($\\text{Al}_2\\text{O}_3$) is an amphoteric oxide because it can react with both strong acids (forming aluminum salts) and strong bases (forming aluminate ions).",
    topic: "Inorganic Chemistry & Periodic Trends"
  },
  {
    num: 42,
    text: "Which of the following statements correctly applies to the formation and nature of salts?\nI. $\\text{NaHSO}_4$ is a normal salt because all ionizable $\\text{H}^+$ from the acid are replaced.\nII. $\\text{NaHSO}_4$ is acidic salt formed when ionizable $\\text{H}^+$ of the acid is not completely replaced by metal ions.\nIII. $\\text{Zn(OH)Cl}$ is a basic salt because it contains one ionizable $\\text{OH}^-$ group in its formula.\nIV. $\\text{Na}_2\\text{CO}_3$ is a basic salt due to the presence of $\\text{CO}_3^{2-}$ that can be hydrolysis.",
    a: "Only IV",
    b: "Only II",
    c: "II, III & IV",
    d: "I, II & IV",
    correct: "C",
    explanation: "Statement I is incorrect because $\\text{NaHSO}_4$ has an unreplaced ionizable proton. Statements II (acid salt), III (basic salt with hydroxy group), and IV (salt of strong base + weak acid that undergoes anion hydrolysis to yield alkaline solution) are all correct.",
    topic: "Acid-Base Chemistry & Salts"
  },
  {
    num: 43,
    text: "In a Galvanic cell consisting of Zinc and Copper electrodes, which of the following process occurs at the anode electrode?",
    a: "Reduction half-cell reaction is takes placed",
    b: "Copper ions are reduced to Copper metal.",
    c: "Electrons flow from Copper to Zinc.",
    d: "Zinc metal is oxidized to Zinc ions.",
    correct: "D",
    explanation: "In a Daniell galvanic cell, the anode is the negative electrode where oxidation takes place: $\\text{Zn}(s) \\rightarrow \\text{Zn}^{2+}(aq) + 2e^-$.",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 44,
    text: "Which of the following statement is correctly describing the reaction represented in the diagram below?",
    a: "It is an endothermic reaction with a positive $\\Delta\\text{H}$.",
    b: "Energy is absorbed from the surroundings.",
    c: "It is an exothermic reaction with a negative $\\Delta\\text{H}$.",
    d: "Heat is neither released nor absorbed in this reaction",
    correct: "C",
    explanation: "In the potential energy diagram, the enthalpy of the products is lower than that of the reactants ($H_{\\text{products}} < H_{\\text{reactants}}$), so $\\Delta H = H_p - H_r < 0$, signifying an exothermic reaction that releases heat.",
    topic: "Chemical Thermodynamics & Thermochemistry",
    diagramSvg: diagramQ44,
    diagramCaption: "Enthalpy profile diagram showing products lower in energy than reactants"
  },
  {
    num: 45,
    text: "In the extraction of Iron using a blast furnace, what is the primary purpose of adding Limestone ($\\text{CaCO}_3$) to the furnace?",
    a: "Act as a reducing agent for the iron ore.",
    b: "Provide the heat necessary for the reaction.",
    c: "Remove impurities like silica ($\\text{SiO}_2$)",
    d: "Prevent the iron from re-oxidizing.",
    correct: "C",
    explanation: "Limestone thermally decomposes into calcium oxide ($\\text{CaO}$), which acts as a basic flux reacting with acidic sand/silica impurities ($\\text{SiO}_2$) to form molten calcium silicate slag ($\\text{CaSiO}_3$) that floats and is tapped off.",
    topic: "Industrial Chemistry & Metallurgy"
  },
  {
    num: 46,
    text: "Non-metals usually have poor electrical conductivity and are often brittle. However, they are widely used in electrical insulation and chemical industries. Which evaluation best explain how these properties affect their real-world uses?",
    a: "Non-metals are unsuitable for all industrial applications because they are brittle.",
    b: "Non-metals are useful as electrical insulators but their brittleness limited their use",
    c: "Non-metals are mainly used for construction because they are strong and malleable",
    d: "Non-metals are good electrical and heat conductors like metal",
    correct: "B",
    explanation: "Because non-metals lack free mobile valence electrons, they are non-conductive and serve as vital electrical insulators, though their mechanical brittleness limits their utility in load-bearing structural tasks.",
    topic: "Inorganic Chemistry & Periodic Trends"
  },
  {
    num: 47,
    text: "What is the correct IUPAC name for this molecule?",
    a: "4,4-diethyl-3,4-dibromo-5-methyl decane",
    b: "7,8-dibromo-6,6-diethyl-8-methyl decane",
    c: "4,4-diethyl-3,4-dibromo-3-methyl decane",
    d: "3,4-dibromo-5,5-diethyl-3-methyl decane",
    correct: "D",
    explanation: "The longest continuous carbon chain contains 10 carbons (decane). Numbering from the left gives substituents at positions 3, 4, and 5. Alphabetical ordering: bromo before diethyl before methyl yields 3,4-dibromo-5,5-diethyl-3-methyldecane.",
    topic: "Hydrocarbons & Organic Chemistry",
    diagramSvg: diagramQ47,
    diagramCaption: "Decane skeleton showing bromine, methyl, and two ethyl substituents"
  },
  {
    num: 48,
    text: "Abel is a grade 10 student. He took three different test tubes and added $5.00\\text{ mL}$ of toluene to each test tube. Then he added 2 drops of $\\text{Br}_2$ water in the first test tube, equal drops of cold $\\text{KMnO}_4$ in the second test tube and again equal drops of concentrated $\\text{H}_2\\text{SO}_4$ in the third test tube. In which test tube does a reaction occur?",
    a: "The 1st and the 3rd test tube",
    b: "The 2nd test tube and the 3rd test tube",
    c: "The 3rd test tube",
    d: "The 1st, 2nd and 3rd test tube",
    correct: "C",
    explanation: "Toluene is an aromatic hydrocarbon that does not react with aqueous bromine water without a Lewis acid catalyst/UV light, nor does it react with cold dilute $\\text{KMnO}_4$ (oxidation of the methyl side chain requires heating). However, toluene undergoes electrophilic aromatic sulfonation with concentrated $\\text{H}_2\\text{SO}_4$ at room temperature.",
    topic: "Hydrocarbons & Organic Chemistry"
  },
  {
    num: 49,
    text: "Which of the following is the major limitation of the Arrhenius concept of acids and bases?",
    a: "It is limited to aqueous solutions",
    b: "It explains proton transfer",
    c: "It includes Lewis acid-base reactions",
    d: "It applies to non-aqueous solvents",
    correct: "A",
    explanation: "The Arrhenius theory restricts acids and bases strictly to substances that dissociate to produce $\\text{H}^+$ or $\\text{OH}^-$ ions in water (aqueous medium), failing to account for acid-base behaviors in gas phases or non-aqueous solvents.",
    topic: "Acid-Base Chemistry & Salts"
  },
  {
    num: 50,
    text: "A grade 12 student prepares $0.20\\text{ M}$ aqueous solution of Acetic acid in the laboratory, according to the ionization equation given: $$\\text{CH}_3\\text{COOH}(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{CH}_3\\text{COO}^-(aq): K_a = 1.8 \\times 10^{-5}$$ Which of the following is the closest approximation of the hydrogen ion concentration? (Given $\\sqrt{3.6} = 1.9$)",
    a: "$1.9 \\times 10^{-3}\\text{ M}$",
    b: "$1.9 \\times 10^{-8}\\text{ M}$",
    c: "$1.9 \\times 10^{-5}\\text{ M}$",
    d: "$1.9 \\times 10^{-4}\\text{ M}$",
    correct: "A",
    explanation: "For a weak monoprotic acid: $$[\\text{H}^+] = \\sqrt{K_a \\cdot C_a} = \\sqrt{1.8 \\times 10^{-5} \\times 0.20} = \\sqrt{3.6 \\times 10^{-6}} = 1.9 \\times 10^{-3}\\text{ M}$$",
    topic: "Acid-Base Chemistry & Salts"
  },
  {
    num: 51,
    text: "Consider a solution that is $0.10\\text{ M}$ acetic acid ($\\text{CH}_3\\text{COOH}$) and $0.20\\text{ M}$ sodium acetate ($\\text{NaCH}_3\\text{COO}$). Which of the following statements is correct?",
    a: "Adding a small amount of $\\text{NaOH}$ causes the $\\text{pH}$ to decrease slightly.",
    b: "When $\\text{NaOH}$ is added, the $\\text{OH}^-$ ions react with $\\text{CH}_3\\text{COO}^-$ ions.",
    c: "Adding a small amount of $\\text{HCl}$ causes the $\\text{pH}$ to decrease slightly.",
    d: "When $\\text{HCl}$ is added, the $\\text{H}^+$ ions react with $\\text{CH}_3\\text{COOH}$ molecules.",
    correct: "C",
    explanation: "This is an acidic buffer solution. Adding a small amount of strong acid ($\\text{HCl}$) is buffered by acetate ions ($\\text{CH}_3\\text{COO}^- + \\text{H}^+ \\rightarrow \\text{CH}_3\\text{COOH}$), resulting in only a slight decrease in $\\text{pH}$.",
    topic: "Acid-Base Chemistry & Salts"
  },
  {
    num: 52,
    text: "Which of the following procedure can NOT produce buffer solution?",
    a: "Equal volume of $0.5\\text{M } \\text{NaOH}$ and $1\\text{M } \\text{HCl}$ solution are mixed.",
    b: "Equal volume of $0.5\\text{M } \\text{NaOH}$ and $1\\text{M } \\text{CH}_3\\text{COOH}$ solution are mixed.",
    c: "Equal volume of $1\\text{M } \\text{CH}_3\\text{COONa}$ and $1\\text{M } \\text{CH}_3\\text{COOH}$ solution are mixed.",
    d: "Equal volume of $1\\text{M } \\text{NH}_3$ and $0.5\\text{M } \\text{HCl}$ solution are mixed.",
    correct: "A",
    explanation: "Mixing $\\text{NaOH}$ with excess strong acid $\\text{HCl}$ produces $\\text{NaCl}$ and residual $\\text{HCl}$. Since both are strong electrolytes with no weak conjugate pair, it cannot function as a buffer.",
    topic: "Acid-Base Chemistry & Salts"
  },
  {
    num: 53,
    text: "A buffer solution is prepared using Acetic acid ($\\text{CH}_3\\text{COOH}$) and its conjugate base Sodium acetate ($\\text{CH}_3\\text{COONa}$). Under which condition will this buffer solution have maximum buffering capacity?",
    a: "$\\text{pH} = \\text{pK}_a$",
    b: "$[\\text{A}^-] = 10[\\text{HA}]$",
    c: "$[\\text{HA}] = 10[\\text{A}^-]$",
    d: "$\\text{pH} = \\text{pOH}$",
    correct: "A",
    explanation: "Maximum buffer capacity occurs when the concentrations of weak acid and conjugate base are equal ($[\\text{HA}] = [\\text{A}^-]$), at which point $\\text{pH} = \\text{p}K_a$ according to the Henderson-Hasselbalch equation.",
    topic: "Acid-Base Chemistry & Salts"
  },
  {
    num: 54,
    text: "Which of the following salts will produce an acidic solution when dissolved in water?",
    a: "$\\text{NH}_4\\text{Cl}$",
    b: "$\\text{CH}_3\\text{COONa}$",
    c: "$\\text{NaCl}$",
    d: "$\\text{KNO}_3$",
    correct: "A",
    explanation: "Ammonium chloride ($\\text{NH}_4\\text{Cl}$) is the salt of a weak base ($\\text{NH}_3$) and a strong acid ($\\text{HCl}$). The $\\text{NH}_4^+$ cation hydrolyzes in water to produce hydronium ions: $\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$.",
    topic: "Acid-Base Chemistry & Salts"
  },
  {
    num: 55,
    text: "The dye bromothymol blue ($\\text{HBb}$) is a weak acid whose ionization can be represented as follows: $$\\text{HBb}(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{Bb}^-(aq)$$ Which way will the equilibrium shift when $\\text{NaOH}$ is added?",
    a: "Initially to the left, finally to right",
    b: "Initially to the right finally to left",
    c: "To the left",
    d: "to the right",
    correct: "D",
    explanation: "Adding $\\text{NaOH}$ introduces hydroxide ions ($\\text{OH}^-$), which react with $\\text{H}^+$ to form water. By Le Chatelier's Principle, removing $\\text{H}^+$ shifts the equilibrium to the right.",
    topic: "Acid-Base Chemistry & Salts"
  },
  {
    num: 56,
    text: "During laboratory class, a student placed clean water in a beaker and added pieces of calcium metal using tongs. Which of the following is observed color after the reaction has completed?",
    a: "The litmus paper turns to blue.",
    b: "The litmus paper turns to red.",
    c: "The litmus paper maintains its color.",
    d: "The litmus paper turns to colorless",
    correct: "A",
    explanation: "Calcium reacts with water to form basic calcium hydroxide and hydrogen gas: $\\text{Ca}(s) + 2\\text{H}_2\\text{O}(l) \\rightarrow \\text{Ca(OH)}_2(aq) + \\text{H}_2(g)$. The resulting alkaline solution turns red litmus paper blue.",
    topic: "Inorganic Chemistry & Periodic Trends"
  },
  {
    num: 57,
    text: "Which of the following statement is NOT correctly describe about oxidation and reduction?",
    a: "oxidizing agent is a species being reduced and causes oxidation",
    b: "Reducing agent is a species being oxidized and causes reduction.",
    c: "Oxidation is gain of electron while reduction is loss of electrons",
    d: "Oxidation and reduction reactions are occurs simultaneously",
    correct: "C",
    explanation: "By definition (OIL RIG): Oxidation is the Loss of electrons, and Reduction is the Gain of electrons. Statement C incorrectly reverses this definition.",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 58,
    text: "A chemist compares electrolysis of dilute $\\text{NaCl}$ solution and concentrated $\\text{NaCl}$ solution using inert electrodes. The substance produced at anode electrode of dilute $\\text{NaCl}$ solution and concentrated $\\text{NaCl}$ solution are _____ and _____ respectively.",
    a: "Oxygen and chlorine.",
    b: "chlorine and chlorine",
    c: "hydrogen and chlorine",
    d: "Hydrogen and sodium",
    correct: "A",
    explanation: "In dilute $\\text{NaCl}$ solution, water oxidation dominates at the anode producing Oxygen ($\\text{O}_2$). In concentrated $\\text{NaCl}$ (brine), chloride ion discharge is favored due to high concentration and chlorine overpotential, producing Chlorine ($\\text{Cl}_2$).",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 59,
    text: "An aqueous solution contains $\\text{Ag}^+(aq)$ and $\\text{Cu}^{2+}(aq)$ ions. Electrolysis is carried out using inert platinum electrodes. A constant current of $9.65\\text{ A}$ is passed through the solution for $1000\\text{ seconds}$. Which metal will be deposited at the cathode and what mass will be deposited?",
    a: "Copper, $10.8\\text{ g}$",
    b: "Silver, $10.8\\text{ g}$",
    c: "Silver, $5.4\\text{ g}$",
    d: "Copper, $21.6\\text{ g}$",
    correct: "B",
    explanation: "Because $E^\\circ(\\text{Ag}^+/\\text{Ag}) = +0.80\\text{ V} > E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$, silver ions reduce first at the cathode. Charge $Q = I \\times t = 9.65\\text{ A} \\times 1000\\text{ s} = 9650\\text{ C} = 0.10\\text{ mol } e^-$. Moles of $\\text{Ag} = 0.10\\text{ mol}$. Mass $= 0.10\\text{ mol} \\times 108\\text{ g/mol} = 10.8\\text{ g}$.",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 60,
    text: "A Galvanic cell constructed from a strip of magnesium metal dipped in a solution of magnesium sulfate and a strip of silver metal immersed in a solution of silver nitrate. Which of the following correctly represents the cell notation for this galvanic cell?",
    a: "$\\text{Ag} /\\text{Ag}^+ //\\text{Mg}^{2+} / \\text{Mg}$",
    b: "$\\text{Mg} /\\text{Mg}^{2+} // \\text{Ag}^+ /\\text{Ag}$",
    c: "$\\text{Mg} /\\text{Mg}^{2+}/ \\text{Ag}^+ / \\text{Ag}$",
    d: "$\\text{Ag} / \\text{Ag}^+ // \\text{Mg} / \\text{Mg}^{2+}$",
    correct: "B",
    explanation: "By convention, the anode (oxidation of $\\text{Mg}$) is written on the left, followed by the double vertical line for the salt bridge, and the cathode (reduction of $\\text{Ag}^+$) on the right: $\\text{Mg} | \\text{Mg}^{2+} || \\text{Ag}^+ | \\text{Ag}$.",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 61,
    text: "Aluminum metal reacts spontaneously with iron (II) ions according to the reaction: $$2\\text{Al}(s) + 3\\text{Fe}^{2+}(aq) \\rightarrow 2\\text{Al}^{3+}(aq) + 3\\text{Fe}(s)$$ What is the value of $\\Delta G^\\circ$ for the reaction?",
    a: "$-1216\\text{ kJ}$",
    b: "$-608\\text{ kJ}$",
    c: "$-706\\text{ kJ}$",
    d: "$-203\\text{ kJ}$",
    correct: "C",
    explanation: "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = -0.44\\text{ V} - (-1.66\\text{ V}) = +1.22\\text{ V}$. For $n = 6\\text{ mol } e^-$: $$\\Delta G^\\circ = -nFE^\\circ = -6 \\times 96500\\text{ C/mol} \\times 1.22\\text{ V} = -706380\\text{ J} = -706.4\\text{ kJ} \\approx -706\\text{ kJ}$$",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 62,
    text: "A metal pipeline buried underground is protected from corrosion by attaching a more reactive metal such as magnesium. Why does magnesium protect the iron pipe?",
    a: "Magnesium decreases oxygen concentration around iron.",
    b: "Magnesium acts as a sacrificial anode and oxidizes first.",
    c: "Magnesium increases the potential of iron.",
    d: "Magnesium prevents electron movement.",
    correct: "B",
    explanation: "Magnesium has a more negative standard reduction potential than iron, preferentially undergoing oxidation as a sacrificial anode to supply electrons and protect the iron cathode from corroding.",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 63,
    text: "Which of the following is considered a renewable resource?",
    a: "Petroleum",
    b: "Natural gas",
    c: "Solar energy",
    d: "Coal",
    correct: "C",
    explanation: "Solar energy is inexhaustible and naturally replenished on a human timescale, making it a renewable resource unlike fossil fuels.",
    topic: "Environmental Chemistry & Natural Resources"
  },
  {
    num: 64,
    text: "At which stage of industrial manufacturing process of sulphuric acid, vanadium (V) oxide specifically required to ensure efficient industrial production?",
    a: "During the oxidation of sulfur dioxide to sulfur trioxide",
    b: "During the combustion of sulfur to produce sulfur dioxide",
    c: "During the dilution of oleum with water to form sulfuric acid",
    d: "During the reaction of sulfur trioxide with sulfuric acid to form oleum",
    correct: "A",
    explanation: "In the Contact Process, vanadium(V) oxide ($\\text{V}_2\\text{O}_5$) is used as the heterogeneous catalyst during the exothermic catalytic oxidation of sulfur dioxide: $2\\text{SO}_2(g) + \\text{O}_2(g) \\xrightarrow{\\text{V}_2\\text{O}_5} 2\\text{SO}_3(g)$.",
    topic: "Industrial Chemistry & Metallurgy"
  },
  {
    num: 65,
    text: "Which one of the following fertilizers supplies the highest percentage of nitrogen to plants?",
    a: "Urea ($\\text{CO(NH}_2)_2$)",
    b: "Urea Ammonium Nitrate ($\\text{CO(NH}_2)_2 + \\text{NH}_4\\text{NO}_3$)",
    c: "Diammonium Phosphate ($(\\text{NH}_4)_2\\text{HPO}_4$)",
    d: "Monoammonium Phosphate ($\\text{NH}_4\\text{H}_2\\text{PO}_4$)",
    correct: "A",
    explanation: "Urea ($\\text{CO(NH}_2)_2$) has a molar mass of $60.06\\text{ g/mol}$ and contains 2 nitrogen atoms ($28.02\\text{ g}$), delivering a nitrogen content of $\\approx 46.7\\%$, the highest of all solid nitrogenous fertilizers.",
    topic: "Industrial Chemistry & Metallurgy"
  },
  {
    num: 66,
    text: "Which of the following describes the process of manufacturing valuable products in industries?",
    a: "Designing to produce a desired output from raw materials using energy",
    b: "Discharging of a solid, liquid or gaseous substance into an environment",
    c: "Unwanted reaction of a material those results in the dissolution of material.",
    d: "Uses of only inorganic chemicals in the production of valuable products.",
    correct: "A",
    explanation: "Chemical industrial manufacturing entails systematic engineering processes that convert raw chemical feedstocks into valuable commercial commodities utilizing controlled energy inputs.",
    topic: "Industrial Chemistry & Metallurgy"
  },
  {
    num: 67,
    text: "Which type of glass is made by heating a mixture of silica, sodium carbonate and limestone?",
    a: "Quartz",
    b: "Pyrex",
    c: "Borosilicate",
    d: "Soda-lime",
    correct: "D",
    explanation: "Soda-lime glass is the most common commercial glass, produced by fusing silica sand ($\\text{SiO}_2$), soda ash ($\\text{Na}_2\\text{CO}_3$), and limestone ($\\text{CaCO}_3$).",
    topic: "Industrial Chemistry & Metallurgy"
  },
  {
    num: 68,
    text: "Which of the following chemicals is commonly known as washing soda?",
    a: "$\\text{NaHCO}_3$",
    b: "$\\text{Na}_2\\text{CO}_3\\cdot 10\\text{H}_2\\text{O}$",
    c: "$\\text{NaOH}$",
    d: "$\\text{Na}_2\\text{SO}_4$",
    correct: "B",
    explanation: "Washing soda is the common name for hydrated sodium carbonate decahydrate ($\\text{Na}_2\\text{CO}_3\\cdot 10\\text{H}_2\\text{O}$). $\\text{NaHCO}_3$ is baking soda, and $\\text{NaOH}$ is caustic soda.",
    topic: "Inorganic Chemistry & Periodic Trends"
  },
  {
    num: 69,
    text: "Which of the following chemicals is mainly used to kill unwanted plants in agricultural fields?",
    a: "Pesticides",
    b: "Herbicide",
    c: "Insecticide",
    d: "Fungicide",
    correct: "B",
    explanation: "Herbicides are agrochemical formulations specifically designed to control, suppress, or eradicate unwanted vegetation and weeds.",
    topic: "Industrial Chemistry & Metallurgy"
  },
  {
    num: 70,
    text: "Which of the following is NOT the Methods of reducing water pollution.",
    a: "Treatment of water before discharge into rivers and lakes.",
    b: "Recycling and replacing of industrial and agricultural wastes.",
    c: "Industries shouldn’t discharge heat-ladened water into water body.",
    d: "Using high amount of agricultural chemicals and organic fertilizers.",
    correct: "D",
    explanation: "Applying excessive agricultural chemicals and fertilizers causes extensive nutrient runoff and eutrophication in freshwater ecosystems.",
    topic: "Environmental Chemistry & Natural Resources"
  },
  {
    num: 71,
    text: "Consider the following steps involved in the preparation of local alcohol (Araki):\nI: Fermentation of the mixture which converts sugars into ethanol.\nII: Preparation of the raw materials by crushing cereals and mixing them with water.\nIII: Distillation of the fermented mixture to separate ethanol from water.\nIV: Heating the fermented mixture to produce alcohol vapor, later condenses to liquid alcohol.\n\nWhich of the following shows the correct sequence of steps in the preparation of local alcohol (Araki)?",
    a: "$\\text{II} \\rightarrow \\text{I} \\rightarrow \\text{IV} \\rightarrow \\text{III}$",
    b: "$\\text{I} \\rightarrow \\text{II} \\rightarrow \\text{III} \\rightarrow \\text{IV}$",
    c: "$\\text{II} \\rightarrow \\text{IV} \\rightarrow \\text{I} \\rightarrow \\text{III}$",
    d: "$\\text{I} \\rightarrow \\text{III} \\rightarrow \\text{II} \\rightarrow \\text{IV}$",
    correct: "A",
    explanation: "The traditional process begins with grain crushing and mash preparation (II), followed by yeast fermentation into alcohol (I), thermal heating/evaporating (IV), and finally condensation/distillation collection (III).",
    topic: "Industrial Chemistry & Metallurgy"
  },
  {
    num: 72,
    text: "What is the molar mass of a polyethylene sample, $[-\\text{CH}_2-\\text{CH}_2-]_n$, when $n = 4600$?",
    a: "$1.288 \\times 10^3\\text{ g/mol}$",
    b: "$1.288 \\times 10^5\\text{ g/mol}$",
    c: "$1.196 \\times 10^3\\text{ g/mol}$",
    d: "$1.196 \\times 10^4\\text{ g/mol}$",
    correct: "B",
    explanation: "The molar mass of the repeat unit $-\\text{CH}_2-\\text{CH}_2-$ is $2(12.01) + 4(1.008) = 28.05\\text{ g/mol}$. Total molar mass: $$M = 4600 \\times 28.0\\text{ g/mol} = 128,800\\text{ g/mol} = 1.288 \\times 10^5\\text{ g/mol}$$",
    topic: "Polymers & Macromolecules"
  },
  {
    num: 73,
    text: "Which one of the following polymer-monomer pairs is INCORRECTLY matched?",
    a: "Teflon....Propylene",
    b: "PVC.....Chloroethene",
    c: "Plexiglass....methyl methacrylate",
    d: "Bakelite....phenol and formaldehyde",
    correct: "A",
    explanation: "Teflon (polytetrafluoroethylene) is synthesized from tetrafluoroethene ($F_2C=CF_2$), not propylene. Polypropylene is made from propene.",
    topic: "Polymers & Macromolecules"
  },
  {
    num: 74,
    text: "A student compared thermoplastic polymers and thermosetting polymers.\n\n$$\\begin{array}{|c|l|l|}\\hline & \\text{Thermoplastic polymers} & \\text{Thermosetting polymers} \\\\ \\hline \\text{A} & \\text{soften and reshaped when heated} & \\text{permanently hard after heating} \\\\ \\hline \\text{B} & \\text{consist mainly of linear chains} & \\text{highly cross-linked three-dimensional structures} \\\\ \\hline \\text{C} & \\text{Can't repeatedly melted and remolded} & \\text{soften when heated and can be reshaped again} \\\\ \\hline \\text{D} & \\text{are generally recyclable} & \\text{Can't be recyclable} \\\\ \\hline \\end{array}$$\n\nWhich of the following pairs is NOT correct about their difference?",
    a: "Pair A",
    b: "Pair B",
    c: "Pair C",
    d: "Pair D",
    correct: "C",
    explanation: "Pair C is completely inverted. Thermoplastics can be repeatedly melted, remolded, and reshaped upon heating, whereas thermosets decompose and cannot be softened once cured.",
    topic: "Polymers & Macromolecules"
  },
  {
    num: 75,
    text: "For the electrolysis of aqueous copper (II) sulfate solution using graphite electrode, what substances produced at anode and cathode electrode respectively and their ratio?",
    a: "$\\text{Cu}$ and $\\text{O}_2$ are produced in a mol ratio of $2:1$",
    b: "$\\text{H}_2$ and $\\text{O}_2$ are produced in a mol ratio of $1:1$",
    c: "$\\text{H}_2$ and $\\text{O}_2$ are produced in a mol ratio of $2:1$",
    d: "$\\text{O}_2$ and $\\text{Cu}$ are produced in a mol ratio of $1:2$",
    correct: "D",
    explanation: "At the anode, water oxidizes: $2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2 + 4\\text{H}^+ + 4e^-$ ($1\\text{ mol } \\text{O}_2 / 4e^-$). At the cathode, copper reduces: $2\\text{Cu}^{2+} + 4e^- \\rightarrow 2\\text{Cu}$ ($2\\text{ mol } \\text{Cu} / 4e^-$). Hence, $\\text{O}_2$ and $\\text{Cu}$ are generated in a $1:2$ molar ratio.",
    topic: "Electrochemistry & Redox Reactions"
  },
  {
    num: 76,
    text: "Which one of the following reactions creates energy in our bodies during respiration?",
    a: "$\\text{C}_6\\text{H}_{12}\\text{O}_6(s) + 6\\text{O}_2(g) \\rightarrow 6\\text{CO}_2(g) + 6\\text{H}_2\\text{O}(l)$",
    b: "$\\text{CO}_2(g) + 6\\text{H}_2\\text{O}(l) \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6(s) + 6\\text{O}_2(g)$",
    c: "$\\text{C}_6\\text{H}_{12}\\text{O}_6(s) \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH}(l) + 2\\text{CO}_2(g)$",
    d: "$\\text{NH}_2\\text{CONH}_2(g) + \\text{H}_2\\text{O}(g) \\rightarrow 2\\text{NH}_3(l) + \\text{CO}_2(g)$",
    correct: "A",
    explanation: "Aerobic cellular respiration combusts glucose with oxygen to yield carbon dioxide, water, and ATP energy: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Energy}$.",
    topic: "Biomolecules & Biochemistry"
  },
  {
    num: 77,
    text: "The following gases are contributed to the greenhouse effect on Earth. Which is the correct order of their importance from greatest to smallest in the natural greenhouse effect?",
    a: "$\\text{CO}_2, \\text{H}_2\\text{O}, \\text{CH}_4$",
    b: "$\\text{H}_2\\text{O}, \\text{CO}_2, \\text{CH}_4$",
    c: "$\\text{CH}_4, \\text{CO}_2, \\text{H}_2\\text{O}$",
    d: "$\\text{H}_2\\text{O}, \\text{CH}_4, \\text{CO}_2$",
    correct: "B",
    explanation: "In Earth's atmosphere, water vapor ($\\text{H}_2\\text{O}$) contributes roughly $36-70\\%$ of the greenhouse effect, followed by carbon dioxide ($\\text{CO}_2$, $9-26\\%$) and methane ($\\text{CH}_4$, $4-9\\%$).",
    topic: "Environmental Chemistry & Natural Resources"
  },
  {
    num: 78,
    text: "Which of the following sample routine correctly indicate the extraction of copper from is principal-ore?",
    a: "$\\text{Concentration of ores} \\Rightarrow \\text{Reduction} \\Rightarrow \\text{Roasting} \\Rightarrow \\text{Purification}$",
    b: "$\\text{Concentration of ores} \\Rightarrow \\text{Purification} \\Rightarrow \\text{Roasting} \\Rightarrow \\text{Reduction}$",
    c: "$\\text{Purification} \\Rightarrow \\text{Concentration of ores} \\Rightarrow \\text{Reduction} \\Rightarrow \\text{Roasting}$",
    d: "$\\text{Concentration of ores} \\Rightarrow \\text{Roasting} \\Rightarrow \\text{Reduction} \\Rightarrow \\text{Purification}$",
    correct: "D",
    explanation: "Metallurgical extraction of copper proceeds sequentially: 1) Froth flotation concentration, 2) Roasting sulfide ore in air, 3) Smelting reduction to blister copper, 4) Electrolytic refining purification.",
    topic: "Industrial Chemistry & Metallurgy"
  },
  {
    num: 79,
    text: "Which of the following is TRUE about a homologous series?",
    a: "A group of compounds with different functional group",
    b: "A group of isomers with the same boiling point",
    c: "Compounds with different molecular masses but the same formula",
    d: "hydrocarbons where each member differs from the next by a repeating unit $-\\text{CH}_2-$",
    correct: "D",
    explanation: "A homologous series is a series of organic compounds possessing the same general formula and functional group, in which each successive member differs from the previous one by a methylene ($-\\text{CH}_2-$) unit.",
    topic: "Hydrocarbons & Organic Chemistry"
  },
  {
    num: 80,
    text: "The following reaction can be used for the synthesis of $\\text{CH}_3\\text{CH}=\\text{CHCH}_3$ as a desired product:\n$$\\text{CH}_3\\text{CH}_2\\text{CHBrCH}_3 + \\text{CH}_3\\text{S}^- \\longrightarrow \\text{CH}_3\\text{CH}=\\text{CHCH}_3 + \\text{CH}_3\\text{SH} + \\text{Br}^-$$\nWhat is the atom economy for the above reaction?",
    a: "$80\\%$",
    b: "$48\\%$",
    c: "$56\\%$",
    d: "$30.4\\%$",
    correct: "D",
    explanation: "Atom economy is given by: $$\\text{Atom Economy} = \\frac{\\text{Molar mass of desired product}}{\\text{Total molar mass of all reactants}} \\times 100\\%$$ Desired product $\\text{C}_4\\text{H}_8 = 4(12.0) + 8(1.0) = 56.0\\text{ g/mol}$. Reactants: $\\text{C}_4\\text{H}_9\\text{Br} (136.9) + \\text{CH}_3\\text{S}^- (47.1) = 184.0\\text{ g/mol}$. $$\\text{Atom Economy} = \\frac{56.0}{184.0} \\times 100\\% = 30.43\\% \\approx 30.4\\%$$",
    topic: "Industrial Chemistry & Metallurgy"
  }
];

function seed() {
  const dbPath = path.join(process.cwd(), 'data', 'database.json');
  const backupPath = path.join(process.cwd(), 'data', 'database.json.bak');
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  const targetExamId = 'exam-model-1789960911494';
  
  // Find or create exam entry
  let examIndex = db.exams.findIndex((e: any) => e.id === targetExamId);
  const examMetadata = {
    id: targetExamId,
    title: '2018 E.C. Regional CHEMISTRY Model Examination',
    year: 2018,
    ethiopian_year: '2018 E.C.',
    exam_series: 'Regional Model Examinations',
    exam_type: 'Model Examination',
    category: 'MODEL',
    model_region: 'Oromia Education Bureau',
    source_type: 'USER_UPLOADED',
    is_free_preview: true,
    grade_id: 'grade-12',
    subject_id: 'subj-chem',
    description: 'Official 2018 E.C. (2026 G.C.) Grade 12 Chemistry Model Examination from Oromia Education Bureau (OEB). Contains all 80 multiple choice questions with authentic reaction diagrams, tables, and step-by-step pedagogical solutions.',
    instructions: 'Answer all 80 questions. Choose the single best alternative from A, B, C, or D. Time allowed: 2.5 hours.',
    duration_minutes: 150,
    total_questions: 80,
    original_pdf_path: 'storage/private/exams/oeb_chemistry_2018_model.pdf',
    pdf_path: 'storage/private/exams/exam-model-1789960911494.pdf',
    status: 'PUBLISHED',
    created_at: '2026-09-20T10:00:00.000Z',
    updated_at: new Date().toISOString(),
    grade_name: 'Grade 12',
    subject_name: 'Chemistry'
  };

  if (examIndex >= 0) {
    db.exams[examIndex] = examMetadata;
  } else {
    db.exams.push(examMetadata);
  }

  // Remove existing questions for this exam
  db.exam_questions = (db.exam_questions || []).filter((q: any) => q.exam_id !== targetExamId);

  // Add all 80 questions
  const newQuestions = rawQuestions.map((q) => ({
    id: `q-${targetExamId}-${q.num}`,
    exam_id: targetExamId,
    question_number: q.num,
    question_text: q.text,
    option_a: q.a,
    option_b: q.b,
    option_c: q.c,
    option_d: q.d,
    correct_answer: q.correct,
    explanation: q.explanation,
    difficulty: q.num > 60 ? 'Hard' : q.num > 25 ? 'Medium' : 'Easy',
    topic_name: q.topic,
    section_instruction: q.instruction || (q.num <= 25 ? 'Answer questions based on General Principles and Atomic Structure.' : q.num <= 50 ? 'Answer questions based on Physical Chemistry, Kinetics, and Equilibrium.' : 'Answer questions based on Electrochemistry, Industrial Chemistry, and Organic Chemistry.'),
    instruction_category: q.instructionCategory || q.topic,
    diagram_svg: q.diagramSvg,
    diagram_caption: q.diagramCaption,
    created_at: new Date().toISOString()
  }));

  db.exam_questions.push(...newQuestions);

  // Write back
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync(backupPath, JSON.stringify(db, null, 2), 'utf8');

  console.log(`Successfully seeded ${newQuestions.length} questions for exam ${targetExamId}`);
}

seed();
