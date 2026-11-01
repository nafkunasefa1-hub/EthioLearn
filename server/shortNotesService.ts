import { GoogleGenAI } from '@google/genai';
const aiGenSDK = { GoogleGenAI };
import { db } from './db';
import { Book, BookChapter, ChapterShortNote } from '../src/types';
import { buildTopicDetailedNotes } from './topicNotesKnowledge';
import { getCurriculumForBook } from './curriculumRegistry';
import { GRADE_9_ENGLISH_MASTERY } from './englishMasteryRegistry';
import { apiKeyPool } from './apiKeyPool';

// Subject-specific knowledge templates for rich, illustrated fallback notes
export function generateRichCurriculumFallbackNote(
  book: Book,
  chapter: BookChapter,
  focus: 'summary' | 'formulas' | 'euee' | 'examples' | 'quiz' = 'summary',
  topicTitle?: string,
  isDetailed = false
): ChapterShortNote {
  const subj = (book.subject_name || '').toLowerCase();
  const gr = book.grade_name || 'Grade 10';
  const unitTitle = chapter.chapter_title;
  const unitNum = chapter.chapter_number;
  const title = topicTitle || unitTitle;

  let unitSummary = isDetailed
    ? `In-Depth Comprehensive Study & Topic Breakdown for ${title} (${gr} ${book.subject_name}), calibrated for secondary mastery and Ethiopian entrance examination preparation.`
    : `High-Yield Short Notes & Core Revision for ${title} (${gr} ${book.subject_name}), highlighting essential definitions, governing formulas, tables, and exam traps.`;
  
  let detailedOverview = `Detailed curriculum study of ${title} (${gr} ${book.subject_name}). This section provides an analytical examination of fundamental definitions, theoretical mechanisms, empirical formulas, and practical applications aligned with the official Ethiopian Ministry of Education curriculum.`;

  // Look for target topic if topicTitle was passed
  const targetTopic = chapter.topics?.find(t => 
    t.title.toLowerCase() === (topicTitle || '').toLowerCase() || 
    t.title.toLowerCase().includes((topicTitle || '').toLowerCase()) || 
    (topicTitle || '').toLowerCase().includes(t.title.toLowerCase())
  ) || (topicTitle ? {
    id: `topic-${chapter.id}-dynamic`,
    chapter_id: chapter.id,
    topic_number: `${unitNum}.x`,
    title: topicTitle,
    description: `Curriculum topic: ${topicTitle}`,
    start_page: chapter.start_page
  } : undefined);

  let topicsCovered: any[] = [];
  let keyConcepts: any[] = [];
  let formulasRules: any[] = [];
  let eueeTips: any[] = [];
  let workedExamples: any[] = [];
  let practiceQuiz: any[] = [];

  if (topicTitle && targetTopic) {
    const generated = buildTopicDetailedNotes(book, chapter, {
      num: targetTopic.topic_number,
      title: targetTopic.title,
      desc: targetTopic.description,
      start_page: targetTopic.start_page
    }, isDetailed);

    unitSummary = `Core Study Notes & Illustrated Breakdown for ${targetTopic.title} (Unit ${unitNum}: ${unitTitle}). Prepared according to the Ethiopian ${gr} ${book.subject_name} syllabus.`;
    detailedOverview = `${generated.detailed_explanation}\n\nKey Takeaway: ${generated.key_takeaway}\n\nEthiopian Context & Real-World Application: ${generated.ethiopian_context}`;
    
    topicsCovered = [{
      title: generated.title,
      topic_title: generated.topic_title,
      short_notes: generated.short_notes,
      key_points: generated.key_points,
      explanation: generated.detailed_explanation,
      detailed_explanation: generated.detailed_explanation,
      diagram_illustration: generated.diagram_illustration,
      illustration_analogy: generated.illustration_analogy,
      ethiopian_context: generated.ethiopian_context,
      exam_focus: generated.exam_focus,
      key_takeaway: generated.key_takeaway
    }];

    keyConcepts = (generated.key_points || []).map((kp: string, idx: number) => ({
      concept: kp.includes(':') ? kp.split(':')[0] : `Core Principle ${idx + 1}`,
      explanation: kp,
      illustration_analogy: generated.diagram_illustration || generated.illustration_analogy
    }));

    formulasRules = (generated.short_notes || [])
      .filter((n: string) => /formula|equation|=|law|rule|ratio|integral|derivative|theorem|molar|si|density/i.test(n))
      .map((n: string) => ({
        formula_or_law: n.replace(/^[•\-\*]\s*/, '').split(':')[0] || n,
        explanation: n.replace(/^[•\-\*]\s*/, ''),
        units_conditions: 'Standard Ethiopian curriculum specifications and SI units apply.'
      }));

    if (formulasRules.length === 0) {
      formulasRules = [{
        formula_or_law: `Governing Principle: ${targetTopic.title}`,
        explanation: generated.key_takeaway,
        units_conditions: 'Standard curriculum parameters.'
      }];
    }

    eueeTips = [{
      trap: `National Exam Trap on ${targetTopic.title}`,
      how_to_avoid: generated.exam_focus || `Carefully review definitions, units, and boundary conditions for ${targetTopic.title}.`,
      frequency: 'Critical'
    }];

    workedExamples = [
      generated.worked_example || {
        title: `Worked Problem: ${targetTopic.title}`,
        problem: `Analyze and solve a representative ${gr} ${book.subject_name} problem on ${targetTopic.title} (${unitTitle}).`,
        step_solution: (generated.key_points && generated.key_points.length > 0)
          ? generated.key_points.map((kp: string, kIdx: number) => `Step ${kIdx + 1}: ${kp}`).join('\n')
          : `1. Identify given curriculum constraints and express all quantities in standard units.\n2. Apply the foundational law of ${targetTopic.title}: ${generated.key_takeaway}\n3. Check logical and mathematical consistency.`,
        result: generated.key_takeaway || `Conclusion rigorously verified for ${targetTopic.title}.`,
        examiner_note: `EUEE Focus: ${generated.exam_focus || generated.key_takeaway}`
      }
    ];

    practiceQuiz = [
      generated.quiz_item || {
        question: `In the ${gr} ${book.subject_name} syllabus (${unitTitle}), which principle accurately governs ${targetTopic.title}?`,
        options: [
          generated.key_takeaway,
          `The reverse relationship holds only when all boundary parameters are zero.`,
          `It is independent of standard ${book.subject_name} conservation and structural laws.`,
          `It applies exclusively to isolated systems with no external interactions.`
        ],
        correct_option: 0,
        explanation: `${generated.key_takeaway} (${generated.exam_focus || ''})`
      }
    ];
  } else {
    const regUnits = getCurriculumForBook(book.id, book.grade_name, book.subject_name) || [];
    const regUnit = regUnits.find(u => u.unit_num === unitNum);
    const effectiveTopics = (chapter.topics && chapter.topics.length > 0)
      ? chapter.topics
      : (regUnit?.topics ? regUnit.topics.map(t => ({
          id: `top-${chapter.id}-${t.num.replace('.', '_')}`,
          chapter_id: chapter.id,
          topic_number: t.num,
          title: t.title,
          description: t.desc || `Curriculum topic: ${t.title}`,
          start_page: t.start
        })) : []);

    topicsCovered = effectiveTopics.map(t => {
      const generated = buildTopicDetailedNotes(book, chapter, {
        num: t.topic_number,
        title: t.title,
        desc: t.description,
        start_page: t.start_page
      }, isDetailed);
      return {
        title: generated.title,
        topic_title: generated.topic_title,
        short_notes: generated.short_notes,
        key_points: generated.key_points,
        explanation: generated.detailed_explanation,
        detailed_explanation: generated.detailed_explanation,
        diagram_illustration: generated.diagram_illustration,
        illustration_analogy: generated.illustration_analogy,
        ethiopian_context: generated.ethiopian_context,
        exam_focus: generated.exam_focus,
        key_takeaway: generated.key_takeaway,
        worked_example: generated.worked_example,
        quiz_item: generated.quiz_item
      };
    });

    if (topicsCovered.length === 0) {
      const generated = buildTopicDetailedNotes(book, chapter, {
        num: `${unitNum}.1`,
        title: unitTitle,
        desc: `Fundamental laws and applications of ${unitTitle}`
      }, isDetailed);
      topicsCovered = [{
        title: generated.title,
        topic_title: generated.topic_title,
        short_notes: generated.short_notes,
        key_points: generated.key_points,
        explanation: generated.detailed_explanation,
        detailed_explanation: generated.detailed_explanation,
        diagram_illustration: generated.diagram_illustration,
        illustration_analogy: generated.illustration_analogy,
        ethiopian_context: generated.ethiopian_context,
        exam_focus: generated.exam_focus,
        key_takeaway: generated.key_takeaway,
        worked_example: generated.worked_example,
        quiz_item: generated.quiz_item
      }];
    }

    if (isDetailed && topicsCovered.length > 0) {
      const tableRows = topicsCovered.map((t, idx) => 
        `| **Topic ${idx + 1}** | ${t.title || t.topic_title} | ${(t.key_takeaway || 'Core national curriculum standard').slice(0, 90)} |`
      ).join('\n');

      detailedOverview = `### 1. Unit Masterclass: Theoretical Foundations & Governing Laws
Unit ${unitNum} (${unitTitle}) forms a foundational pillar of the Ethiopian ${gr} ${book.subject_name} syllabus. It develops students' analytical rigor, linking fundamental laws and conceptual frameworks to problem-solving strategies and real-world systems.

### 2. Comprehensive Curriculum Breakdown Table
| Section | Topic Title | Core Governing Concept & EUEE Target |
| :--- | :--- | :--- |
${tableRows}

### 3. Integrated Concept Map & Analytical Intuition
\`\`\`text
[Unit ${unitNum}: ${unitTitle}] 
       ├──> Theoretical Principles & Governing Laws
       ├──> Empirical Verification & Analytical Formulas
       └──> Ethiopian Context & Examination Mastery
\`\`\`

### 4. Real-World Applications Across Ethiopia
${topicsCovered.map(t => `- **${t.title || t.topic_title}**: ${t.ethiopian_context || 'Applied across Ethiopian secondary and university programs.'}`).join('\n')}

### 5. Examination Strategy & Common Distractor Traps
${topicsCovered.map(t => `- **${t.title || t.topic_title}**: ${t.exam_focus || t.key_takeaway}`).join('\n')}`;
    }

    keyConcepts = topicsCovered.map((tc, idx) => ({
      concept: tc.title || tc.topic_title || `Topic ${unitNum}.${idx + 1}`,
      explanation: tc.key_takeaway || (tc.key_points && tc.key_points[0]) || tc.explanation,
      illustration_analogy: tc.diagram_illustration || tc.illustration_analogy || tc.ethiopian_context
    }));

    formulasRules = topicsCovered.map((tc, idx) => ({
      formula_or_law: `${tc.title || tc.topic_title}`,
      explanation: (tc.short_notes && tc.short_notes[1]) ? tc.short_notes[1].replace(/^[•\-\*]\s*/, '') : (tc.key_takeaway || tc.explanation),
      units_conditions: tc.ethiopian_context || `Unit ${unitNum}: ${unitTitle} (${gr} ${book.subject_name})`
    }));

    eueeTips = topicsCovered.map((tc) => ({
      trap: `Exam Focus — ${tc.title || tc.topic_title}`,
      how_to_avoid: tc.exam_focus || tc.key_takeaway || `Master the core definitions and boundary conditions of ${tc.title}.`,
      frequency: 'Critical'
    }));

    workedExamples = topicsCovered.slice(0, 3).map((tc, idx) => (
      tc.worked_example ? {
        ...tc.worked_example,
        title: `${tc.worked_example.title} (${tc.title || tc.topic_title})`
      } : {
        title: `Worked Example ${idx + 1}: ${tc.title || tc.topic_title}`,
        problem: `Analyze and apply the governing curriculum principles of ${tc.title || tc.topic_title} (${unitTitle}).`,
        step_solution: (tc.key_points && tc.key_points.length > 0)
          ? tc.key_points.map((kp: string, kIdx: number) => `Step ${kIdx + 1}: ${kp}`).join('\n')
          : `1. State the core definition of ${tc.title}.\n2. Apply the governing principle: ${tc.key_takeaway}`,
        result: tc.key_takeaway || `Verified according to ${gr} ${book.subject_name} standards.`,
        examiner_note: tc.exam_focus || `Frequently tested in national entrance examinations.`
      }
    ));

    practiceQuiz = topicsCovered.slice(0, 4).map((tc) => (
      tc.quiz_item ? tc.quiz_item : {
        question: `According to ${gr} ${book.subject_name} (${unitTitle}), which statement accurately describes ${tc.title || tc.topic_title}?`,
        options: [
          tc.key_takeaway || (tc.key_points && tc.key_points[0]) || `It follows the core principles of ${unitTitle}.`,
          `The opposite relationship holds under all standard conditions.`,
          `It is independent of the foundational rules of ${unitTitle}.`,
          `Its parameters are arbitrary and do not affect system outcomes.`
        ],
        correct_option: 0,
        explanation: `${tc.key_takeaway || (tc.key_points && tc.key_points[0])} (${tc.exam_focus || ''})`
      }
    ));
  }

  // Keep unit-specific topicsCovered concepts and only use generic subject fallbacks if topicsCovered was empty
  if (!topicTitle && topicsCovered.length === 0) {
    if (subj.includes('math')) {
    detailedOverview = `Unit ${unitNum} (${unitTitle}) provides the algebraic, analytical, and geometric tools essential for higher-level mathematics and the national entrance examination. This unit synthesizes equation manipulation, coordinate geometry, functional transformations, and domain validation into a unified problem-solving framework. National exam questions routinely test boundary conditions, rapid multiple-choice deduction methods, and multi-step algebraic fluency.`;
    
    keyConcepts = [
      {
        concept: `Domain & Range Rigor`,
        explanation: `A function is defined only on the set of real numbers where denominators are non-zero, radicands of even roots are non-negative, and logarithmic arguments are strictly positive.`,
        illustration_analogy: `Think of domain like an electrical device's voltage specification: plug in a prohibited number and the function "shorts out" (undefined).`
      },
      {
        concept: `Algebraic Transformation vs. Equivalence`,
        explanation: `Operations such as squaring both sides or multiplying by expressions containing variables can introduce extraneous solutions or eliminate valid roots.`,
        illustration_analogy: `Squaring (-3) and (3) both equal 9; going backwards introduces a "ghost" solution that must be screened.`
      },
      {
        concept: `Graphical Connection to Roots`,
        explanation: `The solutions to f(x) = 0 correspond directly to the x-intercepts of the curve y = f(x). Intersections of two curves f(x) = g(x) represent their simultaneous solution set.`,
        illustration_analogy: `Two roads crossing on a map: the intersection point satisfies the coordinates of both roads simultaneously.`
      }
    ];

    formulasRules = [
      {
        formula_or_law: `Quadratic Formula & Nature of Roots: x = [-b ± √(b² - 4ac)] / (2a)`,
        explanation: `Discriminant Δ = b² - 4ac dictates root characteristics: Δ > 0 (two distinct real roots), Δ = 0 (repeated real root), Δ < 0 (complex conjugate roots).`,
        units_conditions: `Valid for any quadratic equation in canonical form ax² + bx + c = 0 with a ≠ 0.`
      },
      {
        formula_or_law: `Vieta's Formulas: Sum of roots = -b/a, Product of roots = c/a`,
        explanation: `Enables rapid verification of roots and construction of quadratic polynomials without lengthy factoring.`,
        units_conditions: `Applicable to any degree-2 polynomial with real or complex coefficients.`
      },
      {
        formula_or_law: `Distance & Midpoint: d = √[(x₂ - x₁)² + (y₂ - y₁)²], M = ((x₁+x₂)/2, (y₁+y₂)/2)`,
        explanation: `Calculates Euclidean distance and midpoint coordinates in the 2D Cartesian coordinate plane.`,
        units_conditions: `Applies to any points A(x₁, y₁) and B(x₂, y₂).`
      }
    ];

    eueeTips = [
      {
        trap: `Extraneous Solutions After Squaring`,
        how_to_avoid: `Always plug every candidate answer back into the ORIGINAL equation! If x = -2 results in √(-2) or a negative value equal to a square root, it must be discarded.`,
        frequency: 'Critical'
      },
      {
        trap: `Multiplying an Inequality by a Negative Variable`,
        how_to_avoid: `Never multiply both sides of an inequality by an unknown variable x unless you partition the problem into positive and negative cases. Use sign charts (critical value method) instead!`,
        frequency: 'Critical'
      },
      {
        trap: `Vieta's Shortcut for Multiple Choice`,
        how_to_avoid: `Before solving lengthy quadratics, check if any option matches sum = -b/a and product = c/a. This often answers the question in under 15 seconds.`,
        frequency: 'High'
      }
    ];

    workedExamples = [
      {
        title: `Worked Example: Solving Rational Equation with Extraneous Root Check`,
        problem: `Solve the rational equation for x: [ (2x) / (x - 3) ] - [ 6 / (x - 3) ] = x + 1.`,
        step_solution: `Step 1: Identify domain restriction: Denominator x - 3 ≠ 0 => x ≠ 3.\nStep 2: Combine fractions on left side with common denominator: (2x - 6)/(x - 3) = x + 1.\nStep 3: Factor the numerator: 2(x - 3)/(x - 3) = x + 1.\nStep 4: For x ≠ 3, cancel (x - 3): 2 = x + 1 => x = 1.\nStep 5: Verify x = 1 in original equation: LHS = 2(1)/(-2) - 6/(-2) = -1 + 3 = 2. RHS = 1 + 1 = 2. Valid!`,
        result: `Solution Set: S = {1}. Note: x = 3 is strictly excluded by domain restrictions.`,
        examiner_note: `EUEE examiners often include x = 3 as option A to catch students who cancel terms without domain checking!`
      },
      {
        title: `Worked Example: Finding Maximum/Minimum Value using Vertex Formula`,
        problem: `A projectile's path is modeled by the function h(t) = -5t² + 30t + 2, where h is height in meters and t is time in seconds. Find the maximum height and the time taken to reach it.`,
        step_solution: `Step 1: The quadratic function h(t) = at² + bt + c has a = -5, b = 30, c = 2.\nStep 2: Since a < 0, the parabola opens downwards, so the vertex represents the maximum.\nStep 3: Time at vertex t = -b / (2a) = -30 / [2(-5)] = -30 / -10 = 3 seconds.\nStep 4: Evaluate h(3): h(3) = -5(3)² + 30(3) + 2 = -5(9) + 90 + 2 = -45 + 90 + 2 = 47 meters.`,
        result: `Maximum height is 47 meters, reached at t = 3 seconds.`,
        examiner_note: `Remember that the axis of symmetry x = -b/(2a) gives the time, while f(-b/(2a)) gives the maximum value itself.`
      }
    ];

    practiceQuiz = [
      {
        question: `What is the solution set of the equation √(3x + 1) = x - 3 in the real numbers?`,
        options: [
          `S = {1, 8}`,
          `S = {8}`,
          `S = {1}`,
          `S = ∅ (No real solution)`
        ],
        correct_option: 1,
        explanation: `Squaring both sides gives 3x + 1 = (x - 3)² = x² - 6x + 9 => x² - 9x + 8 = 0 => (x - 8)(x - 1) = 0. Roots are x = 8 and x = 1. Testing x = 1: √(4) = 2, but 1 - 3 = -2 (2 ≠ -2, extraneous!). Testing x = 8: √(25) = 5, and 8 - 3 = 5 (Valid!). Thus S = {8}.`
      },
      {
        question: `If the quadratic equation 3x² - kx + 12 = 0 has equal real roots, what are the possible values of k?`,
        options: [
          `k = ±6`,
          `k = ±12`,
          `k = ±144`,
          `k = 0`
        ],
        correct_option: 1,
        explanation: `Equal real roots require discriminant Δ = b² - 4ac = 0. Here (-k)² - 4(3)(12) = 0 => k² - 144 = 0 => k² = 144 => k = ±12.`
      }
    ];
  } else if (subj.includes('physic')) {
    detailedOverview = `Unit ${unitNum} (${unitTitle}) explores the fundamental mechanics and physical principles governing interactions, energy transfer, and motion. In the Ethiopian Grade ${gr.replace(/[^0-9]/g, '') || '11'} syllabus, emphasis is placed on rigorous vector decomposition, conservation laws (energy, momentum), and translating kinematic graphs into algebraic solutions. EUEE physics questions frequently present multi-body systems, inclined planes, and projectile trajectories that test both conceptual understanding and calculation speed.`;

    keyConcepts = [
      {
        concept: `Independence of Orthogonal Vector Components`,
        explanation: `Motion along perpendicular axes (horizontal x and vertical y) occurs completely independently of each other. Acceleration in one axis does not alter velocity in the perpendicular axis.`,
        illustration_analogy: `A coin dropped vertically and a coin fired horizontally from the same height hit the ground at the exact same instant because vertical gravity affects both equally.`
      },
      {
        concept: `Conservation of Mechanical Energy`,
        explanation: `In an isolated system with no dissipative non-conservative forces (such as friction or air resistance), the sum of kinetic energy (K) and potential energy (U) remains constant: E_total = K + U = constant.`,
        illustration_analogy: `A roller coaster: at the peak, all energy is potential; at the bottom, all energy converts to kinetic speed.`
      },
      {
        concept: `Newton's Third Law & Action-Reaction Pairs`,
        explanation: `Forces always exist in pairs that are equal in magnitude, opposite in direction, and act on TWO DIFFERENT bodies. Action and reaction forces NEVER cancel each other out on the same object.`,
        illustration_analogy: `When you push against a wall, the wall pushes back on YOU with identical force. The push on the wall and the push on you act on different entities.`
      }
    ];

    formulasRules = [
      {
        formula_or_law: `Newton's 2nd Law: ΣF = m·a (Vector formulation)`,
        explanation: `Net external force on a body produces acceleration directly proportional to the force and inversely proportional to inertial mass.`,
        units_conditions: `Force in Newtons (N = kg·m/s²), mass in kg, acceleration in m/s².`
      },
      {
        formula_or_law: `Kinematics: v = u + at, s = ut + ½at², v² = u² + 2as`,
        explanation: `Governs straight-line motion under CONSTANT acceleration.`,
        units_conditions: `Valid ONLY when acceleration 'a' is constant. Do NOT use when acceleration varies!`
      },
      {
        formula_or_law: `Work-Energy Theorem: W_net = ΔK = ½mv_f² - ½mv_i²`,
        explanation: `The net work done on an object by all forces equals the change in its kinetic energy.`,
        units_conditions: `Work in Joules (J = N·m). Scalar quantity; work is positive if force aids motion, negative if opposing.`
      }
    ];

    eueeTips = [
      {
        trap: `Sign Convention Trap in Vertical Motion`,
        how_to_avoid: `Establish your coordinate direction at the start (e.g. Taking UP as positive: initial velocity u > 0, acceleration g = -9.8 m/s² or -10 m/s², displacement below launch point s < 0). Never change conventions mid-problem!`,
        frequency: 'Critical'
      },
      {
        trap: `Normal Force on an Inclined Plane`,
        how_to_avoid: `On an incline of angle θ, the normal force is N = mg·cos(θ), NOT mg! Friction force is f_k = μ·mg·cos(θ).`,
        frequency: 'Critical'
      },
      {
        trap: `Kinematic vs. Energy Approach Shortcut`,
        how_to_avoid: `If a problem does not ask for time 't', use Conservation of Energy instead of kinematics! It requires 50% fewer steps and avoids quadratic equation solving.`,
        frequency: 'High'
      }
    ];

    workedExamples = [
      {
        title: `Worked Example: Projectile Motion Range & Maximum Height`,
        problem: `A football is kicked from ground level with initial speed u = 20 m/s at an angle θ = 30° to the horizontal. Taking g = 10 m/s², calculate (a) time of flight, (b) maximum height reached, and (c) horizontal range.`,
        step_solution: `Step 1: Resolve initial velocity components:\n- u_x = u·cos(30°) = 20 · (√3/2) = 10√3 ≈ 17.32 m/s.\n- u_y = u·sin(30°) = 20 · (0.5) = 10 m/s.\n\nStep 2: Time to reach maximum height (where v_y = 0):\nv_y = u_y - gt => 0 = 10 - 10t => t_up = 1.0 s.\nTotal time of flight T = 2 · t_up = 2.0 seconds.\n\nStep 3: Maximum height H:\nH = u_y² / (2g) = 10² / (2 · 10) = 100 / 20 = 5.0 meters.\n\nStep 4: Horizontal Range R:\nR = u_x · T = (10√3 m/s) · (2.0 s) = 20√3 ≈ 34.64 meters.`,
        result: `Time of flight = 2.0 s; Max height = 5.0 m; Range = 20√3 m (≈ 34.6 m).`,
        examiner_note: `EUEE questions frequently use angles 30°, 45°, and 60° so that sin and cos values evaluate cleanly to 0.5, √2/2, and √3/2.`
      }
    ];

    practiceQuiz = [
      {
        question: `A bullet is fired horizontally from a rifle at the same instant another identical bullet is dropped from the same height. Neglecting air resistance, which bullet hits the ground first?`,
        options: [
          `The dropped bullet hits first.`,
          `The fired bullet hits first due to its forward momentum.`,
          `Both bullets strike the ground simultaneously.`,
          `The outcome depends on the mass of the bullet.`
        ],
        correct_option: 2,
        explanation: `Horizontal velocity and vertical acceleration due to gravity are mutually independent. Both bullets start with zero initial vertical velocity (u_y = 0) and undergo identical downward acceleration g. Therefore, both hit the ground at the exact same moment.`
      }
    ];
  } else if (subj.includes('eng') || subj.includes('language')) {
    const engMasteryUnit = GRADE_9_ENGLISH_MASTERY.find(u => u.unit_number === unitNum);

    if (engMasteryUnit) {
      detailedOverview = `Unit ${unitNum} (${engMasteryUnit.unit_title}) is a core thematic module in the Ethiopian Grade 9 English curriculum designed to build communicative fluency, grammatical mastery, and vocabulary proficiency.

1. **Reading & Thematic Focus**: "${engMasteryUnit.reading_focus.passage_title}"
   - Core Theme: ${engMasteryUnit.reading_focus.core_theme}
   - Strategies: ${engMasteryUnit.reading_focus.comprehension_strategies.join('; ')}
   - Core Takeaways: ${engMasteryUnit.reading_focus.key_takeaways.join('; ')}

2. **Grammar Masterclass**:
${engMasteryUnit.grammar_masterclass.map(g => `   - **${g.rule_title}**\n     *Formula*: \`${g.formula_structure}\`\n     *Explanation*: ${g.core_summary}\n     *AI Pedagogical Insight*: ${g.deep_ai_analysis}`).join('\n\n')}

3. **Core Vocabulary Bank**:
${engMasteryUnit.vocabulary_bank.map(v => `   - **${v.word}** (${v.part_of_speech}, ${v.phonetic}): ${v.definition}\n     *Example*: "${v.context_sentence}"\n     *Ethiopian Context*: ${v.ethiopian_context}\n     *Collocations*: ${v.collocations.join(', ')}`).join('\n\n')}

4. **Writing Genre Blueprint (${engMasteryUnit.writing_masterclass.genre})**:
   - Blueprint: ${engMasteryUnit.writing_masterclass.structure_blueprint.join('; ')}
   - Checklist: ${engMasteryUnit.writing_masterclass.writing_checklist.join('; ')}

5. **Speaking & Functional Language**:
   - Functions: ${engMasteryUnit.speaking_listening_focus.functions.join('; ')}
   - Expressions: ${engMasteryUnit.speaking_listening_focus.key_expressions.join('; ')}`;

      topicsCovered = [
        {
          title: `Reading Focus: ${engMasteryUnit.reading_focus.passage_title}`,
          topic_title: engMasteryUnit.reading_focus.passage_title,
          key_points: engMasteryUnit.reading_focus.key_takeaways,
          explanation: engMasteryUnit.reading_focus.core_theme,
          detailed_explanation: `${engMasteryUnit.reading_focus.core_theme}\n\nStrategies:\n${engMasteryUnit.reading_focus.comprehension_strategies.map(s => `• ${s}`).join('\n')}`,
          key_takeaway: engMasteryUnit.reading_focus.key_takeaways[0] || 'Active reading comprehension',
          ethiopian_context: 'Ethiopian cultural and ecological context'
        },
        ...engMasteryUnit.grammar_masterclass.map(g => ({
          title: `Grammar Focus: ${g.rule_title}`,
          topic_title: g.rule_title,
          key_points: g.usage_rules,
          explanation: g.detailed_explanation,
          detailed_explanation: `${g.detailed_explanation}\n\nAI Analysis: ${g.deep_ai_analysis}`,
          diagram_illustration: `Formula / Pattern: ${g.formula_structure}`,
          exam_focus: g.common_errors_traps[0]?.reason || 'Grammar precision in entrance exams',
          key_takeaway: g.core_summary
        })),
        {
          title: `Vocabulary Bank & Word Power (${engMasteryUnit.vocabulary_bank.length} Words)`,
          topic_title: `Vocabulary Bank: ${engMasteryUnit.unit_title}`,
          key_points: engMasteryUnit.vocabulary_bank.map(v => `${v.word} (${v.part_of_speech}): ${v.definition}`),
          explanation: `High-frequency academic and contextual vocabulary extracted from ${engMasteryUnit.unit_title}.`,
          detailed_explanation: engMasteryUnit.vocabulary_bank.map(v => `• **${v.word}** (${v.part_of_speech}) ${v.phonetic}: ${v.definition}\n  *Example*: "${v.context_sentence}"\n  *Collocations*: ${v.collocations.join(', ')}`).join('\n\n'),
          key_takeaway: `Mastery of ${engMasteryUnit.vocabulary_bank.map(v => v.word).join(', ')}.`
        },
        {
          title: `Writing Masterclass: ${engMasteryUnit.writing_masterclass.genre}`,
          topic_title: `Writing: ${engMasteryUnit.writing_masterclass.genre}`,
          key_points: engMasteryUnit.writing_masterclass.structure_blueprint,
          explanation: `Structured writing guide and model composition for ${engMasteryUnit.writing_masterclass.genre}.`,
          detailed_explanation: `Model Composition:\n\n${engMasteryUnit.writing_masterclass.sample_model}\n\nChecklist:\n${engMasteryUnit.writing_masterclass.writing_checklist.map(c => `• ${c}`).join('\n')}`,
          key_takeaway: `Structure your ${engMasteryUnit.writing_masterclass.genre} with clear topic sentences and transitions.`
        }
      ];

      keyConcepts = [
        ...engMasteryUnit.grammar_masterclass.map(g => ({
          concept: g.rule_title,
          explanation: `${g.core_summary} (Formula: ${g.formula_structure})`,
          illustration_analogy: g.deep_ai_analysis
        })),
        ...engMasteryUnit.vocabulary_bank.slice(0, 3).map(v => ({
          concept: `Vocabulary: ${v.word} (${v.part_of_speech})`,
          explanation: `${v.definition} Example: "${v.context_sentence}"`,
          illustration_analogy: v.ethiopian_context || `Collocations: ${v.collocations.join(', ')}`
        }))
      ];

      formulasRules = engMasteryUnit.grammar_masterclass.map(g => ({
        formula_or_law: `${g.rule_title}: ${g.formula_structure}`,
        explanation: g.core_summary,
        units_conditions: g.usage_rules.join(' | ')
      }));

      eueeTips = [
        ...engMasteryUnit.euee_exam_tips.map(tip => ({
          trap: `EUEE Exam Tip: ${engMasteryUnit.unit_title}`,
          how_to_avoid: tip,
          frequency: 'Critical'
        })),
        ...engMasteryUnit.grammar_masterclass.flatMap(g =>
          g.common_errors_traps.map(trap => ({
            trap: `Common Trap: "${trap.incorrect}"`,
            how_to_avoid: `Correct form is "${trap.correct}". Reason: ${trap.reason}`,
            frequency: 'High'
          }))
        )
      ];

      workedExamples = engMasteryUnit.grammar_masterclass.flatMap(g =>
        g.transformation_exercises.map(ex => ({
          title: `Sentence Transformation: ${g.rule_title}`,
          problem: `${ex.prompt}\nStarting Sentence: "${ex.starting_sentence}"`,
          step_solution: `1. Identify target grammar pattern: ${ex.target_pattern}\n2. Apply transformation rules.\n3. Solution: "${ex.solution}"`,
          result: ex.solution,
          examiner_note: ex.explanation
        }))
      );

      practiceQuiz = [
        {
          question: `In ${engMasteryUnit.unit_title}, which sentence correctly illustrates "${engMasteryUnit.grammar_masterclass[0]?.rule_title || 'Grammar Rule'}"?`,
          options: [
            engMasteryUnit.grammar_masterclass[0]?.key_examples[0]?.sentence || `Correct grammar application sentence.`,
            engMasteryUnit.grammar_masterclass[0]?.common_errors_traps[0]?.incorrect || `Incorrect distorted grammar sentence.`,
            `The grammatical rule has no specific formula or structure.`,
            `Verbs in English are used interchangeably without tense rules.`
          ],
          correct_option: 0,
          explanation: `${engMasteryUnit.grammar_masterclass[0]?.key_examples[0]?.explanation || 'This correctly applies the national curriculum grammar formula.'}`
        },
        {
          question: `What is the accurate definition of the curriculum vocabulary term "${engMasteryUnit.vocabulary_bank[0]?.word}"?`,
          options: [
            engMasteryUnit.vocabulary_bank[0]?.definition || `Accurate curriculum definition.`,
            `A completely unrelated urban phenomenon with opposite meaning.`,
            `An obsolete grammatical punctuation mark.`,
            `A colloquial slang expression not accepted in formal writing.`
          ],
          correct_option: 0,
          explanation: `"${engMasteryUnit.vocabulary_bank[0]?.word}" is defined as: ${engMasteryUnit.vocabulary_bank[0]?.definition}`
        }
      ];
    } else {
      detailedOverview = `Unit ${unitNum} (${unitTitle}) is a core thematic module in the Ethiopian ${gr} English curriculum designed to develop communicative competence, reading comprehension, critical vocabulary, and advanced grammatical accuracy.`;
      topicsCovered = [
        {
          title: `Section ${unitNum}.1: Core Textual Analysis & Thematic Reading`,
          key_points: [
            `Identifying the author's central thesis, topic sentences, and supporting details.`,
            `Evaluating argumentative coherence and distinguishing fact from author opinion.`,
            `Extracting curriculum vocabulary and morphological derivatives (prefixes/suffixes).`
          ],
          explanation: `In-depth analysis of the primary reading selections aligned with ${unitTitle}.`
        },
        {
          title: `Section ${unitNum}.2: Advanced Structural Grammar & Sentence Mechanics`,
          key_points: [
            `Mastering sentence syntax: Active and passive voice constructions, modal verbs, and conditionality.`,
            `Punctuation conventions, comma splices, and run-on sentence correction.`,
            `Prepositional idioms, phrasal verbs, and collocation patterns common in national exams.`
          ],
          explanation: `Focuses on the grammatical structures and syntactic rules required for written and spoken fluency.`
        }
      ];
      keyConcepts = [
        {
          concept: `Active vs. Passive Voice in Scientific & Expository Writing`,
          explanation: `Active voice emphasizes the agent/doer; passive voice emphasizes the object or process.`,
          illustration_analogy: `Active puts the spotlight on the performer; passive puts it on the performance.`
        }
      ];
      formulasRules = [
        {
          formula_or_law: `Sentence Structure: Subject + Verb + Object / Complement`,
          explanation: `Standard English declarative sentence syntax.`,
          units_conditions: `Maintain strict subject-verb agreement.`
        }
      ];
      eueeTips = [
        {
          trap: `Subject-Verb Agreement Trap`,
          how_to_avoid: `Ensure verb agrees with the true subject, ignoring intervening prepositional phrases.`,
          frequency: 'Critical'
        }
      ];
      workedExamples = [
        {
          title: `Exam Practice: Grammar Correction`,
          problem: `Identify and correct errors in standard sentence structure.`,
          step_solution: `Analyze verb tense and agreement.`,
          result: `Corrected standard academic English.`,
          examiner_note: `EUEE questions test sentence agreement.`
        }
      ];
      practiceQuiz = [
        {
          question: `Which of the following follows standard grammatical rules?`,
          options: [`The correct academic sentence.`, `Incorrect sentence 1.`, `Incorrect sentence 2.`, `Incorrect sentence 3.`],
          correct_option: 0,
          explanation: `This follows standard subject-verb agreement and punctuation.`
        }
      ];
    }
  }
}

  return {
    id: `note-${book.id}-${unitNum}-${Date.now()}`,
    book_id: book.id,
    chapter_id: chapter.id,
    chapter_number: unitNum,
    chapter_title: unitTitle,
    topic_title: topicTitle,
    grade_name: gr,
    subject_name: book.subject_name,
    unit_summary: unitSummary,
    detailed_overview: detailedOverview,
    topics_covered: topicsCovered,
    key_concepts: keyConcepts,
    core_formulas_rules: formulasRules,
    euee_exam_tips: eueeTips,
    worked_examples: workedExamples,
    quick_example: workedExamples[0] ? {
      problem: workedExamples[0].problem,
      step_solution: workedExamples[0].step_solution,
      result: workedExamples[0].result
    } : undefined,
    practice_quiz: practiceQuiz,
    ai_assisted: true,
    generated_at: new Date().toISOString(),
    focus,
    book_grounded: true
  };
}

/**
 * Sanitizes invalid escape sequences commonly produced when LLMs output LaTeX in JSON strings.
 */
function sanitizeJsonEscapes(raw: string): string {
  if (!raw) return '';
  // 1. Protect common LaTeX commands that start with standard JSON escape letters
  let s = raw
    .replace(/\\begin\b/g, '\\\\begin')
    .replace(/\\frac\b/g, '\\\\frac')
    .replace(/\\nabla\b/g, '\\\\nabla')
    .replace(/\\rho\b/g, '\\\\rho')
    .replace(/\\text\b/g, '\\\\text')
    .replace(/\\times\b/g, '\\\\times')
    .replace(/\\theta\b/g, '\\\\theta')
    .replace(/\\tau\b/g, '\\\\tau');

  // 2. Escape any backslash that is NOT followed by a valid JSON escape: " \ / b f n r t or u[0-9a-fA-F]{4}
  // This repairs \sqrt, \alpha, \Delta, \pm, \int, \cdot, \omega, etc.
  s = s.replace(/\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '\\\\');

  // 3. Remove trailing commas before closing braces/brackets
  s = s.replace(/,\s*([}\]])/g, '$1');

  return s;
}

/**
 * Resilient JSON parser for LLM outputs that safely handles markdown wrappers,
 * bad escaped characters from LaTeX math notation, trailing commas,
 * and balanced object boundary extraction.
 */
function safeParseAiJson(text: string): any {
  if (!text) throw new Error('Empty AI response');
  let cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
  const startIdx = cleaned.indexOf('{');
  if (startIdx === -1) throw new Error('No JSON object found in response');
  cleaned = cleaned.substring(startIdx);

  // 1. Try direct parse first
  try {
    return JSON.parse(cleaned);
  } catch {
    // 2. Try parse with sanitized escape characters (repairs unescaped LaTeX in JSON strings)
    try {
      return JSON.parse(sanitizeJsonEscapes(cleaned));
    } catch {}

    // 3. Balanced brace extraction (extract outermost JSON object)
    let braceCount = 0;
    let inString = false;
    let escape = false;
    let endIdx = -1;
    for (let i = 0; i < cleaned.length; i++) {
      const c = cleaned[i];
      if (escape) {
        escape = false;
        continue;
      }
      if (c === '\\') {
        escape = true;
        continue;
      }
      if (c === '"') {
        inString = !inString;
        continue;
      }
      if (!inString) {
        if (c === '{') braceCount++;
        else if (c === '}') {
          braceCount--;
          if (braceCount === 0) {
            endIdx = i;
            break;
          }
        }
      }
    }

    if (endIdx !== -1) {
      const balanced = cleaned.substring(0, endIdx + 1);
      try {
        return JSON.parse(balanced);
      } catch {
        try {
          return JSON.parse(sanitizeJsonEscapes(balanced));
        } catch {}
      }
    }

    // 4. Try lastIndexOf('}') fallback with sanitized escape characters
    const lastBrace = cleaned.lastIndexOf('}');
    if (lastBrace !== -1) {
      const sliceCandidate = cleaned.substring(0, lastBrace + 1);
      try {
        return JSON.parse(sliceCandidate);
      } catch {
        try {
          return JSON.parse(sanitizeJsonEscapes(sliceCandidate));
        } catch {}
      }
    }

    // 5. Last resort: if still fails, try regex extraction for key fields
    try {
      const summaryMatch = cleaned.match(/"unit_summary"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/);
      if (summaryMatch) {
        return {
          unit_summary: summaryMatch[1].replace(/\\"/g, '"'),
          key_concepts: [],
          core_formulas_rules: [],
          euee_exam_tips: []
        };
      }
    } catch {}

    throw new Error('Unable to parse AI response into valid JSON');
  }
}

// Generate an extensive, illustrated AI Short Note grounded in uploaded/seeded textbook text
export async function getOrGenerateChapterShortNote(
  bookId: string,
  chapterNumber: number,
  forceAI = false,
  focus: 'summary' | 'formulas' | 'euee' | 'examples' | 'quiz' = 'summary',
  topicTitle?: string,
  isDetailed = false
): Promise<ChapterShortNote> {
  const book = db.getBookById(bookId);
  if (!book) throw new Error(`Book ${bookId} not found`);

  const chapters = db.getBookChapters(bookId);
  const chapter = chapters.find(c => c.chapter_number === chapterNumber) || chapters[0] || {
    id: `chap-${bookId}-${chapterNumber}`,
    book_id: bookId,
    chapter_number: chapterNumber,
    chapter_title: `Unit ${chapterNumber}: Core Syllabus Concepts`,
    description: `Curriculum unit ${chapterNumber}`,
    start_page: 1,
    end_page: 30
  };

  // Look up target topic in chapter if topicTitle was provided
  const targetTopic = chapter.topics?.find(t => 
    t.title.toLowerCase() === (topicTitle || '').toLowerCase() || 
    t.title.toLowerCase().includes((topicTitle || '').toLowerCase()) || 
    (topicTitle || '').toLowerCase().includes(t.title.toLowerCase())
  );

  // Helper to determine if an existing note is an old repetitive generic template
  const isRepetitiveTemplate = (n: ChapterShortNote | null | undefined): boolean => {
    if (!n) return true;
    if (!n.ai_assisted) return true;
    const text = (n.detailed_overview || '') + (n.unit_summary || '') + ((n.topics_covered && n.topics_covered[0]?.explanation) || '');
    if (text.includes('forms a cornerstone of the Ethiopian') && text.includes('governing analytical models')) return true;
    if (text.includes('Rigorous academic definition, mathematical/physical relationships')) return true;
    if (text.includes('Core Competencies') && text.includes('National Syllabus Standard')) return true;
    return false;
  };

  // If not forcing AI and already cached in db with authentic AI content, return cached note
  const topicLookup = isDetailed ? `${topicTitle || ''}__detailed` : topicTitle;
  const existing = db.getChapterShortNote(bookId, chapterNumber, topicLookup) || 
    (!isDetailed ? db.getChapterShortNote(bookId, chapterNumber, topicTitle) : null);

  if (!forceAI && existing && !isRepetitiveTemplate(existing)) {
    if (!topicTitle || existing.topic_title === topicTitle || existing.topic_title === topicLookup) {
      return existing;
    }
  }

  // 1. Gather REAL TEXTBOOK EXTRACTS from the book's pages in db
  const allPages = db.getBookPages(bookId);
  const startP = targetTopic ? targetTopic.start_page : chapter.start_page;
  const endP = targetTopic ? (targetTopic.start_page + 10) : chapter.end_page;
  
  const chapterPages = allPages.filter(
    p => p.printed_page_number >= startP && p.printed_page_number <= endP
  );

  let sourcePagesUsed: number[] = [];
  let relevantText = '';

  if (chapterPages.length > 0) {
    sourcePagesUsed = chapterPages.slice(0, 10).map(p => p.printed_page_number);
    relevantText = chapterPages
      .slice(0, 10)
      .map(p => `[PAGE ${p.printed_page_number}]\n${p.final_text || p.extracted_text}`)
      .join('\n\n---\n\n')
      .slice(0, 14000);
  } else {
    const fallbackPages = allPages.slice(0, 8);
    sourcePagesUsed = fallbackPages.map(p => p.printed_page_number);
    relevantText = fallbackPages
      .map(p => `[PAGE ${p.printed_page_number}]\n${p.final_text || p.extracted_text}`)
      .join('\n\n---\n\n')
      .slice(0, 12000);
  }

  // 2. Check if Gemini API Key is available
  const keyObj = apiKeyPool.getNextKey();
  const apiKey = (typeof keyObj === 'object' ? keyObj?.key : keyObj) || process.env.GEMINI_API_KEY;
  const shouldRunAI = (forceAI || !existing || isRepetitiveTemplate(existing)) && Boolean(apiKey);

  if (shouldRunAI && apiKey) {
    try {
      const ai = new aiGenSDK.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const systemInstruction = `You are an elite Ethiopian curriculum textbook author and senior Ethiopian University Entrance Examination (EUEE) examiner.
You are creating an extensive, richly illustrated, high-yield AI STUDY NOTE for secondary students studying:
- Grade: ${book.grade_name || 'Secondary'}
- Subject: ${book.subject_name}
- Unit ${chapter.chapter_number}: ${chapter.chapter_title}
${topicTitle ? `- TARGET TOPIC TO EXPLAIN: '${topicTitle}'` : '- UNIT OVERVIEW & ALL CURRICULUM TOPICS'}

MANDATORY PEDAGOGICAL REQUIREMENTS:
1. Authentic Textbook Grounding: Ground all content in the official Ethiopian curriculum. Use authentic terminology, SI units, formulas, definitions, and real Ethiopian application context.
2. NO REPETITIVE COMPETENCIES OR OBJECTIVES: Do NOT output repetitive generic syllabus competencies or unit objectives. Instead, explain the actual academic concepts, scientific definitions, step-by-step procedures, laws, mechanisms, and grammar/problem-solving rules for this topic.
3. If a TARGET TOPIC is specified (${topicTitle || 'None'}), focus 100% EXCLUSIVELY on this specific topic "${topicTitle || ''}". Explain every single point one by one with clarity.
4. TEXTBOOK FIGURES & TABLES (CRITICAL): The textbook contains essential figures, diagrams, charts, and reference tables. You MUST include these:
   - For Tables: Include structured Markdown tables with clear column headers (e.g. comparing concepts, formulas, SI units, vocabulary, classifications, or physical properties).
   - For Figures & Diagrams: Include clear, intuitive ASCII/Unicode diagram figures, flowchart cycles, apparatus setups, or mind maps labeled [Figure: ...] or [Diagram: ...] in detailed_overview and explanation fields to make concepts crystal clear for students.
5. Comprehensive Short Notes vs Detailed Notes:
   - For Short Notes: 5-8 crisp, high-yield bulleted notes that summarize essential definitions, formulas, and rules without fluff, plus a reference table and diagram.
   - For Detailed Notes: Exhaustive masterclass explanation of every concept point one by one in great depth, complete step-by-step derivations, comparison tables, diagram walkthroughs, and worked examples.
6. Problem Solving & Entrance Exam Traps: Provide step-by-step worked examples and warn against high-frequency EUEE examiner tricks.

Structure your response as a valid JSON object matching this schema:
{
  "unit_summary": "string (Crisp 2-3 sentence summary of this topic/unit)",
  "detailed_overview": "string (Rich paragraphs explaining principles, intuition, tables, and real-world relevance)",
  "topics_covered": [
    {
      "title": "string (Exact Topic Number and Title)",
      "short_notes": [
        "string (Specific short note 1)",
        "string (Specific short note 2)",
        "string (Specific short note 3)",
        "string (Specific short note 4)",
        "string (Specific short note 5)"
      ],
      "key_points": [
        "string (Core concept point 1)",
        "string (Core concept point 2)",
        "string (Core concept point 3)"
      ],
      "explanation": "string (Detailed explanation of this specific topic, including Markdown tables and ASCII diagrams)",
      "diagram_illustration": "string (ASCII/Unicode diagram, flowchart, or apparatus setup)",
      "ethiopian_context": "string (Real-world Ethiopian application or context)",
      "exam_focus": "string (High-frequency EUEE question pattern and trap)"
    }
  ],
  "key_concepts": [
    {
      "concept": "string (Concept Name)",
      "explanation": "string (Detailed explanation)",
      "illustration_analogy": "string (Analogy or visual model)"
    }
  ],
  "core_formulas_rules": [
    {
      "formula_or_law": "string (Formula, rule, or theorem)",
      "explanation": "string (Variable definitions and physical meaning)",
      "units_conditions": "string (SI units and conditions)"
    }
  ],
  "worked_examples": [
    {
      "title": "string (Worked Example Title)",
      "problem": "string (Clear problem statement)",
      "step_solution": "string (Step-by-step solution)",
      "result": "string (Final answer with units)",
      "examiner_note": "string (Examiner advice)"
    }
  ],
  "euee_exam_tips": [
    {
      "trap": "string (Common examiner trick or student trap)",
      "how_to_avoid": "string (Technique to avoid this mistake)",
      "frequency": "Critical"
    }
  ],
  "practice_quiz": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correct_option": 0,
      "explanation": "string"
    }
  ]
}
Return ONLY valid JSON.`;

      const topicsList = (chapter.topics || [])
        .map(t => `- Topic ${t.topic_number}: ${t.title} (Starts Page ${t.start_page}): ${t.description || ''}`)
        .join('\n');

      const targetName = topicTitle || chapter.chapter_title;
      const coreInstructionPrompt = isDetailed
        ? `Explain the topic "${targetName}" in great DETAIL and depth. Explain every single point one by one. Provide structured Markdown reference/comparison tables and clear ASCII diagram illustrations representing the figures from the textbook.`
        : `Explain the topic "${targetName}" as high-yield short notes (briefly). Make the important points clear and explain it well with 5-8 bulleted notes, core formulas, a reference table, and a clear diagram. Don't leave out any IMPORTANT point.`;

      const userPrompt = `TEXTBOOK: ${book.title} (${book.grade_name || 'Grade 9'} • ${book.subject_name})
UNIT ${chapter.chapter_number}: ${chapter.chapter_title}
${topicTitle ? `TARGET TOPIC: '${topicTitle}'` : `UNIT OVERVIEW & ALL TOPICS`}
MODE: ${isDetailed ? 'DETAILED NOTES (IN-DEPTH MASTERCLASS WITH FIGURES & TABLES)' : 'SHORT NOTES (HIGH-YIELD BRIEF REVISION WITH TABLES & FIGURES)'}

PRIMARY PROMPT MANDATE:
"${coreInstructionPrompt}"

Curriculum Topics in this Unit:
${topicsList || 'All syllabus topics for this unit'}

Textbook Context Extracts:
"""
${relevantText || 'Standard Ethiopian Ministry of Education Curriculum Framework.'}
"""

Generate the extensive, structured JSON now according to the mandate. Include rich markdown tables and ASCII diagrams/illustrations in detailed_overview, topics_covered, and explanations.`;

      let responseText = '';
      // Primary: gemini-3.5-flash-lite (fast ~900ms response time & high reliability)
      // Fallback: gemini-3.5-flash & gemini-3.8-flash
      const candidateModels = [
        'gemini-3.5-flash-lite',
        'gemini-3.5-flash',
        'gemini-3.8-flash'
      ];

      for (const modelName of candidateModels) {
        let success = false;
        for (let attempt = 1; attempt <= 2; attempt++) {
          try {
            let timer: NodeJS.Timeout | null = null;
            const timeoutPromise = new Promise<never>((_, reject) => {
              timer = setTimeout(() => reject(new Error('AI generation timeout')), 30000);
            });
            const response = await Promise.race([
              ai.models.generateContent({
                model: modelName,
                contents: userPrompt,
                config: {
                  systemInstruction,
                  responseMimeType: 'application/json'
                }
              }),
              timeoutPromise
            ]);
            if (timer) clearTimeout(timer);
            responseText = response.text || '';
            if (responseText) {
              success = true;
              break;
            }
          } catch (err: any) {
            const status = err?.status || err?.code || (err?.message && err.message.includes('503') ? 503 : 0);
            if ((status === 503 || status === 429) && attempt === 1) {
              await new Promise(r => setTimeout(r, 400));
              continue;
            }
            break;
          }
        }
        if (success && responseText) break;
      }

      if (responseText) {
        const parsed = safeParseAiJson(responseText);

        const shortNote: ChapterShortNote = {
          id: `note-${book.id}-${chapterNumber}-${Date.now()}`,
          book_id: book.id,
          chapter_id: chapter.id,
          chapter_number: chapter.chapter_number,
          chapter_title: chapter.chapter_title,
          topic_title: isDetailed ? (topicLookup || '__detailed') : topicTitle,
          grade_name: book.grade_name,
          subject_name: book.subject_name,
          unit_summary: parsed.unit_summary || `AI study note for ${topicTitle || chapter.chapter_title}`,
          detailed_overview: parsed.detailed_overview || undefined,
          topics_covered: Array.isArray(parsed.topics_covered) ? parsed.topics_covered : undefined,
          key_concepts: Array.isArray(parsed.key_concepts) ? parsed.key_concepts : [],
          core_formulas_rules: Array.isArray(parsed.core_formulas_rules) ? parsed.core_formulas_rules : [],
          worked_examples: Array.isArray(parsed.worked_examples) ? parsed.worked_examples : undefined,
          quick_example: (parsed.worked_examples && parsed.worked_examples[0]) ? {
            problem: parsed.worked_examples[0].problem_statement || parsed.worked_examples[0].problem,
            step_solution: parsed.worked_examples[0].step_by_step_solution || parsed.worked_examples[0].step_solution,
            result: parsed.worked_examples[0].final_answer || parsed.worked_examples[0].result
          } : parsed.quick_example || undefined,
          euee_exam_tips: Array.isArray(parsed.euee_exam_tips) ? parsed.euee_exam_tips : [],
          practice_quiz: Array.isArray(parsed.practice_quiz) ? parsed.practice_quiz : undefined,
          ai_assisted: true,
          generated_at: new Date().toISOString(),
          focus,
          source_pages_used: sourcePagesUsed,
          book_grounded: true
        };

        db.saveChapterShortNote(shortNote);

        // Auto-unpack subtopics so every topic is individually indexed and offline-accessible
        // Unpacks both Short Notes (topic_title) and Detailed Notes (topic_title__detailed)
        if (!topicTitle && Array.isArray(shortNote.topics_covered)) {
          for (const tc of shortNote.topics_covered) {
            const tTitle = tc.topic_title || tc.title;
            const subTitleKey = isDetailed ? `${tTitle}__detailed` : tTitle;
            if (tTitle) {
              const subNote: ChapterShortNote = {
                id: `note-${book.id}-${chapterNumber}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
                book_id: book.id,
                chapter_id: chapter.id,
                chapter_number: chapter.chapter_number,
                chapter_title: chapter.chapter_title,
                topic_title: subTitleKey,
                grade_name: book.grade_name,
                subject_name: book.subject_name,
                unit_summary: isDetailed
                  ? `Detailed Masterclass Notes: ${tTitle}. ${(tc.detailed_explanation || tc.explanation || '').slice(0, 160)}...`
                  : `Study Notes: ${tTitle}. ${(tc.short_notes && tc.short_notes[0]) || tc.explanation || ''}`,
                detailed_overview: tc.detailed_explanation || tc.explanation || shortNote.detailed_overview,
                topics_covered: [tc],
                key_concepts: Array.isArray(tc.key_points) ? tc.key_points.map((kp: string, i: number) => ({
                  concept: kp.includes(':') ? kp.split(':')[0] : `Core Principle ${i + 1}`,
                  explanation: kp,
                  illustration_analogy: tc.diagram_illustration || tc.illustration_analogy
                })) : shortNote.key_concepts,
                core_formulas_rules: shortNote.core_formulas_rules || [],
                worked_examples: shortNote.worked_examples,
                quick_example: shortNote.quick_example,
                euee_exam_tips: tc.exam_focus ? [{
                  trap: `EUEE Exam Focus: ${tTitle}`,
                  how_to_avoid: tc.exam_focus,
                  frequency: 'Critical'
                }] : shortNote.euee_exam_tips,
                practice_quiz: shortNote.practice_quiz,
                ai_assisted: true,
                generated_at: new Date().toISOString(),
                focus,
                source_pages_used: sourcePagesUsed,
                book_grounded: true
              };
              db.saveChapterShortNote(subNote);
            }
          }
        }

        return shortNote;
      }
    } catch (err: any) {
      console.warn(`[ShortNotes] AI synthesis notice, applying rich curriculum grounded note:`, err?.message || err);
    }
  }

  // 3. Rich Curriculum-Grounded Fallback Note
  const fallback = generateRichCurriculumFallbackNote(book, chapter, focus, topicTitle, isDetailed);
  fallback.source_pages_used = sourcePagesUsed;
  if (isDetailed && topicLookup) {
    fallback.topic_title = topicLookup;
  }
  db.saveChapterShortNote(fallback);

  // If this was a unit-level fallback, also auto-unpack each topic
  if (!topicTitle && Array.isArray(fallback.topics_covered)) {
    for (const tc of fallback.topics_covered) {
      const tTitle = tc.topic_title || tc.title;
      if (tTitle && !db.getChapterShortNote(bookId, chapterNumber, tTitle)) {
        const subNote: ChapterShortNote = {
          id: `note-${book.id}-${chapterNumber}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          book_id: book.id,
          chapter_id: chapter.id,
          chapter_number: chapter.chapter_number,
          chapter_title: chapter.chapter_title,
          topic_title: tTitle,
          grade_name: book.grade_name,
          subject_name: book.subject_name,
          unit_summary: `Curriculum Study Notes: ${tTitle}. ${(tc.short_notes && tc.short_notes[0]) || tc.explanation || ''}`,
          detailed_overview: tc.detailed_explanation || tc.explanation || fallback.detailed_overview,
          topics_covered: [tc],
          key_concepts: Array.isArray(tc.key_points) ? tc.key_points.map((kp: string, i: number) => ({
            concept: kp.includes(':') ? kp.split(':')[0] : `Core Principle ${i + 1}`,
            explanation: kp,
            illustration_analogy: tc.diagram_illustration || tc.illustration_analogy
          })) : fallback.key_concepts,
          core_formulas_rules: fallback.core_formulas_rules || [],
          worked_examples: fallback.worked_examples,
          quick_example: fallback.quick_example,
          euee_exam_tips: tc.exam_focus ? [{
            trap: `EUEE Exam Focus: ${tTitle}`,
            how_to_avoid: tc.exam_focus,
            frequency: 'Critical'
          }] : fallback.euee_exam_tips,
          practice_quiz: fallback.practice_quiz,
          ai_assisted: true,
          generated_at: new Date().toISOString(),
          focus,
          source_pages_used: sourcePagesUsed,
          book_grounded: true
        };
        db.saveChapterShortNote(subNote);
      }
    }
  }

  return fallback;
}

// Pre-generate or fetch all short notes and detailed notes for a book's units and topics
export async function generateAllShortNotesForBook(bookId: string, forceAI = false): Promise<ChapterShortNote[]> {
  const chapters = db.getBookChapters(bookId);
  const results: ChapterShortNote[] = [];
  
  for (const chap of chapters) {
    try {
      // 1. Unit Short Note
      const unitNote = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, forceAI, 'summary', undefined, false);
      results.push(unitNote);

      // 2. Unit Detailed Note
      const unitDetailedNote = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, forceAI, 'summary', undefined, true);
      results.push(unitDetailedNote);
      
      // 3. Topic Short Notes & Detailed Notes
      if (chap.topics && chap.topics.length > 0) {
        for (const top of chap.topics) {
          try {
            const topicNote = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, forceAI, 'summary', top.title, false);
            results.push(topicNote);

            const topicDetailedNote = await getOrGenerateChapterShortNote(bookId, chap.chapter_number, forceAI, 'summary', top.title, true);
            results.push(topicDetailedNote);
          } catch (te) {
            console.warn(`Could not cache topic note for ${top.title}:`, te);
          }
        }
      }
    } catch (e) {
      console.warn(`Could not generate short note for book ${bookId} unit ${chap.chapter_number}:`, e);
    }
  }
  db.flush();
  return results;
}

