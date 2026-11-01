/**
 * Dynamic Programming Word Segmenter with Morphological Expansion
 * for English OCR & Extracted PDF Text.
 * Segments concatenated tokens (e.g. "oneofthefollowingstatementsistrue" -> "one of the following statements is true").
 */

// Base English vocabulary lemmas
const BASE_WORDS = new Set([
  'a', 'an', 'am', 'and', 'are', 'as', 'at', 'be', 'been', 'being', 'by', 'can', 'did', 'do', 'does', 'doing', 'done',
  'fewest', 'for', 'from', 'go', 'had', 'has', 'have', 'having', 'he', 'her', 'hers', 'him', 'his', 'how',
  'i', 'if', 'in', 'inaccurate', 'incorrect', 'indirect', 'indirectly', 'into', 'is', 'it', 'its',
  'may', 'me', 'might', 'must', 'my', 'no', 'nor', 'not', 'of', 'off', 'on', 'onto', 'or', 'ought', 'our', 'ours',
  'out', 'over', 'past', 'per', 'shall', 'she', 'should', 'so', 'stated', 'supported', 'than', 'that', 'the', 'their',
  'theirs', 'them', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 'throughout', 'till', 'to', 'too',
  'toward', 'towards', 'under', 'underneath', 'unless', 'unsupported', 'unstated', 'until', 'up', 'upon', 'us', 'was',
  'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours',
  'causation', 'introductory', 'leniency', 'lenient', 'permanent', 'revenge', 'steer', 'steering', 'aback', 'abandon', 'abbreviate', 'abbreviation', 'abeya', 'abide', 'ability', 'able', 'abnormal', 'aboard',
  'abolish', 'abortion', 'about', 'above', 'abroad', 'abrupt', 'absence', 'absent', 'absolute', 'absolutely',
  'absorb', 'abstract', 'absurd', 'abundance', 'abundant', 'abuse', 'abusive', 'academic', 'academy', 'accelerate',
  'accent', 'accept', 'acceptable', 'acceptance', 'access', 'accessible', 'accident', 'accidental', 'accommodate',
  'accommodation', 'accompany', 'accomplish', 'accomplishment', 'accord', 'accordance', 'according', 'accordingly',
  'account', 'accountant', 'accumulate', 'accumulation', 'accurate', 'accurately', 'accusation', 'accuse',
  'accused', 'accustom', 'achieve', 'achievement', 'acid', 'acknowledge', 'acknowledgement', 'acquire',
  'acquisition', 'acre', 'across', 'act', 'action', 'activate', 'active', 'actively', 'activity', 'actor',
  'actress', 'actual', 'actually', 'acute', 'adapt', 'adaptation', 'adapted', 'add', 'addict', 'addiction',
  'addition', 'additional', 'addis', 'address', 'adequate', 'adequately', 'adhere', 'adherent', 'adjacent',
  'adjective', 'adjoin', 'adjust', 'adjustment', 'administer', 'administration', 'administrative', 'administrator',
  'admirable', 'admiration', 'admire', 'admission', 'admit', 'admittance', 'adopt', 'adoption', 'adopted',
  'adorable', 'adore', 'adult', 'advance', 'advanced', 'advancement', 'advantage', 'advantageous', 'adventure',
  'adverb', 'adversary', 'adverse', 'adversity', 'advertise', 'advertised', 'advertisement', 'advice', 'advise',
  'advised', 'adviser', 'advisor', 'advocate', 'advocates', 'aesthetic', 'affair', 'affect', 'affection',
  'affectionate', 'afford', 'affordable', 'afraid', 'africa', 'african', 'after', 'aftermath', 'afternoon',
  'afterward', 'afterwards', 'again', 'against', 'age', 'aged', 'agency', 'agenda', 'agent', 'aggravate',
  'aggravated', 'aggravating', 'aggravation', 'aggression', 'aggressive', 'aggressor', 'agitate', 'agitation',
  'ago', 'agree', 'agreeable', 'agreement', 'agricultural', 'agriculture', 'ahead', 'aid', 'aim', 'aiming',
  'air', 'aircraft', 'airline', 'airplane', 'airport', 'alarm', 'alcohol', 'alcoholic', 'alcoholism', 'alert',
  'alien', 'align', 'alike', 'alive', 'all', 'allege', 'alleged', 'allegiance', 'allergic', 'allergy', 'alliance',
  'allied', 'allocate', 'allocation', 'allot', 'allow', 'allowance', 'alloy', 'allude', 'allusion', 'ally',
  'almost', 'alone', 'along', 'alongside', 'aloud', 'alphabet', 'alphabetical', 'already', 'alright', 'also',
  'alter', 'alteration', 'alternate', 'alternative', 'alternatives', 'although', 'altitude', 'altogether',
  'always', 'amateur', 'amaze', 'amazed', 'amazing', 'ambassador', 'ambiguity', 'ambiguous', 'ambition',
  'ambitious', 'ambulance', 'amend', 'amendment', 'amid', 'among', 'amongst', 'amount', 'ample', 'amplify',
  'amuse', 'amused', 'amusement', 'analogy', 'analogies', 'analyses', 'analysis', 'analyst', 'analytic',
  'analytical', 'analyze', 'ancestor', 'ancient', 'and', 'anecdote', 'angel', 'anger', 'angle', 'angrily',
  'angry', 'animal', 'ankle', 'anniversary', 'announce', 'announcement', 'annoy', 'annoyed', 'annual',
  'annually', 'anonymous', 'another', 'answer', 'answers', 'antagonist', 'anticipate', 'anticipation',
  'anxiety', 'anxious', 'any', 'anybody', 'anyhow', 'anymore', 'anyone', 'anything', 'anyway', 'anywhere',
  'apart', 'apartment', 'apologetic', 'apologize', 'apologizes', 'apology', 'apparent', 'apparently', 'appeal',
  'appear', 'appearance', 'appearing', 'appears', 'appease', 'appeasement', 'append', 'appendix', 'appetite',
  'applaud', 'applause', 'apple', 'applicant', 'application', 'apply', 'applying', 'appoint', 'appointment',
  'appreciate', 'appreciation', 'appreciative', 'apprehend', 'apprehension', 'approach', 'appropriate',
  'appropriately', 'approval', 'approve', 'approximate', 'approximately', 'april', 'apron', 'aptitude',
  'aquatic', 'arable', 'arbitrary', 'arcade', 'arch', 'archaeology', 'architect', 'architecture', 'archive',
  'arctic', 'area', 'areas', 'arena', 'argue', 'argues', 'argument', 'argumentative', 'arid', 'arise',
  'arithmetic', 'arm', 'armed', 'armor', 'arms', 'army', 'aroma', 'arose', 'around', 'arouse', 'arrange',
  'arranged', 'arrangement', 'array', 'arrest', 'arrival', 'arrive', 'arrived', 'arrogant', 'arrow', 'art',
  'article', 'articles', 'articulate', 'artificial', 'artist', 'artistic', 'ascend', 'ascertain',
  'ash', 'ashamed', 'ashes', 'aside', 'ask', 'asking', 'asks', 'asleep', 'aspect', 'aspects', 'aspiration',
  'aspire', 'assassin', 'assault', 'assemble', 'assembly', 'assert', 'assertion', 'assess', 'assessment',
  'asset', 'assets', 'assign', 'assignment', 'assimilate', 'assist', 'assistance', 'assistant', 'associate',
  'associated', 'association', 'assume', 'assumed', 'assumption', 'assurance', 'assure', 'astonish',
  'astonishing', 'astronaut', 'astronomy', 'asylum', 'athlete', 'athletic', 'atlas', 'atmosphere',
  'atomic', 'attach', 'attached', 'attachment', 'attack', 'attain', 'attempt', 'attempts', 'attend',
  'attendance', 'attendant', 'attention', 'attentive', 'attitude', 'attract', 'attraction', 'attractive',
  'attribute', 'auction', 'audible', 'audience', 'audit', 'auditorium', 'august', 'aunt', 'austin', 'authentic',
  'author', 'authorities', 'authority', 'authorize', 'auto', 'automatic', 'automatically', 'automobile',
  'autonomous', 'autumn', 'availability', 'available', 'avalanche', 'avenue', 'average', 'aversion', 'avoid',
  'avoids', 'avoidance', 'await', 'awake', 'awaken', 'award', 'aware', 'awareness', 'away', 'awe', 'awesome',
  'awful', 'awkward', 'axis',
  'baby', 'bachelor', 'back', 'background', 'backward', 'bacon', 'bacteria', 'bad', 'badge', 'badly',
  'bag', 'baggage', 'bahr', 'bahir', 'bake', 'baker', 'bakery', 'balance', 'balcony', 'bald', 'ball',
  'ballet', 'balloon', 'ballot', 'bamboo', 'ban', 'banana', 'band', 'bandage', 'bandit', 'bang', 'bank',
  'bankrupt', 'banner', 'banquet', 'bar', 'barber', 'bare', 'barely', 'bargain', 'bark', 'barn', 'barrel',
  'barren', 'barrenness', 'barrier', 'barter', 'base', 'based', 'basement', 'basic', 'basically', 'basin',
  'basis', 'basket', 'basketball', 'bat', 'batch', 'bath', 'bathe', 'bathroom', 'battery', 'battle',
  'bay', 'beach', 'beacon', 'beam', 'bean', 'bear', 'beard', 'bearing', 'beast', 'beat', 'beaten',
  'beautiful', 'beauty', 'because', 'become', 'becomes', 'bed', 'bedroom', 'bee', 'beef', 'beer', 'beetle',
  'before', 'beforehand', 'beg', 'began', 'beggar', 'begging', 'begin', 'beginning', 'begins', 'behalf',
  'behave', 'behavior', 'behind', 'being', 'beings', 'belief', 'beliefs', 'believe', 'believes', 'bell',
  'belong', 'belongs', 'beloved', 'below', 'belt', 'bench', 'bend', 'beneath', 'benefactor', 'beneficial',
  'benefit', 'benefits', 'benevolent', 'bent', 'berry', 'beside', 'besides', 'best', 'bet', 'betray',
  'better', 'between', 'beyond', 'bias', 'biased', 'bible', 'bicycle', 'bid', 'big', 'bike', 'bill',
  'billion', 'bind', 'biography', 'biology', 'biological', 'bird', 'birth', 'birthday', 'biscuit', 'bishop',
  'bit', 'bite', 'bitter', 'black', 'blackboard', 'blacken', 'blade', 'blame', 'blamed', 'blames', 'bland',
  'blank', 'blanket', 'blast', 'blaze', 'bleed', 'blend', 'bless', 'blessing', 'blind', 'blink', 'bliss',
  'block', 'blood', 'bloom', 'blossom', 'blouse', 'blow', 'blue', 'blunt', 'blur', 'blush', 'board',
  'boast', 'boat', 'body', 'boil', 'boiler', 'bold', 'boldness', 'bolt', 'bomb', 'bond', 'bone', 'bonus',
  'book', 'booklet', 'boom', 'boost', 'boot', 'booth', 'border', 'bore', 'bored', 'boring', 'born',
  'borrow', 'bosom', 'boss', 'botany', 'both', 'bother', 'bottle', 'bottom', 'bought', 'boulder', 'bounce',
  'bound', 'boundary', 'bow', 'bowl', 'box', 'boy', 'brain', 'brake', 'branch', 'brand', 'brass', 'brave',
  'bravery', 'bread', 'breadth', 'break', 'breakdown', 'breakfast', 'breast', 'breasts', 'breath', 'breathe',
  'breathing', 'breeze', 'brew', 'brick', 'bride', 'bridge', 'brief', 'briefly', 'bright', 'brilliant',
  'bring', 'broad', 'broadcast', 'brother', 'brought', 'brown', 'brush', 'brutal', 'bubble', 'bucket',
  'budget', 'buffet', 'bug', 'build', 'builder', 'building', 'buildings', 'built', 'bulb', 'bulk', 'bullet',
  'bulletin', 'bull', 'bundle', 'burden', 'bureau', 'bureaucracy', 'bureaucratic', 'burn', 'burning', 'burns',
  'burst', 'bury', 'bus', 'bush', 'business', 'businessman', 'busy', 'but', 'butcher', 'butter', 'button',
  'buy', 'buyer', 'bypass',
  'cab', 'cabin', 'cabinet', 'cable', 'cafe', 'cage', 'cake', 'calculate', 'calculation', 'calculator',
  'calendar', 'calf', 'call', 'called', 'calling', 'calm', 'came', 'camera', 'camp', 'campaign', 'campus',
  'can', "can't", 'cannot', 'canal', 'cancel', 'cancer', 'candidate', 'candle', 'candy', 'cane', 'cannon', 'canoe',
  'canvas', 'cap', 'capable', 'capacity', 'cape', 'capital', 'capitalism', 'capitalist', 'capitalization',
  'captain', 'captive', 'capture', 'car', 'carbon', 'card', 'cardboard', 'care', 'career', 'careful',
  'carefully', 'careless', 'cargo', 'carpenter', 'carpet', 'carriage', 'carrier', 'carried', 'carry',
  'cart', 'carve', 'case', 'cases', 'cash', 'cashier', 'casino', 'cast', 'castle', 'casual', 'cat',
  'catalog', 'catch', 'category', 'categories', 'cater', 'cathedral', 'cattle', 'caught', 'causal',
  'cause', 'caused', 'causes', 'causing', 'caution', 'cautious', 'cave', 'cease', 'ceiling', 'celebrate',
  'celebration', 'celebrity', 'cell', 'cellar', 'cement', 'cemetery', 'censor', 'census', 'cent',
  'center', 'central', 'century', 'centuries', 'cereal', 'ceremony', 'certain', 'certainly', 'certainty',
  'certificate', 'chain', 'chair', 'chairman', 'chalk', 'challenge', 'chamber', 'champion', 'championship',
  'chance', 'chancellor', 'change', 'changes', 'channel', 'chaos', 'chapel', 'chapter', 'character',
  'characteristic', 'characteristics', 'characterize', 'charge', 'charity', 'charm', 'charming', 'chart',
  'chase', 'chat', 'cheap', 'cheat', 'check', 'cheek', 'cheer', 'cheerful', 'cheese', 'chef', 'chemical',
  'chemistry', 'cherish', 'cherry', 'chest', 'chew', 'chicken', 'chief', 'chiefly', 'child', 'childhood',
  'children', "children's", 'chill', 'chilly', 'chimney', 'chin', 'chip', 'chocolate', 'choice', 'choices',
  'choke', 'choose', 'chooses', 'choosing', 'chop', 'chord', 'chorus', 'chose', 'chosen', 'chronic',
  'chronically', 'chunk', 'church', 'cigarette', 'cigarettes', 'cinema', 'circle', 'circuit', 'circular',
  'circulate', 'circulation', 'circumstance', 'circumstances', 'cite', 'cited', 'cities', 'citizen',
  'citizens', 'citizenship', 'city', 'civic', 'civics', 'civil', 'civilian', 'civilization', 'claim',
  'claims', 'clarification', 'clarified', 'clarifies', 'clarify', 'clarity', 'clash', 'clasp', 'class',
  'classes', 'classic', 'classical', 'classification', 'classify', 'classmate', 'classroom', 'clause',
  'claw', 'clay', 'clean', 'cleaner', 'clear', 'clearance', 'clearly', 'clears', 'clergy', 'clerk',
  'clever', 'client', 'cliff', 'climate', 'climax', 'climb', 'clinic', 'clinical', 'clip', 'cloak',
  'clock', 'clone', 'close', 'closed', 'closely', 'closeness', 'closer', 'closest', 'closet', 'closing',
  'cloth', 'clothe', 'clothes', 'clothing', 'cloud', 'cloudy', 'clove', 'clown', 'club', 'clue', 'clumsy',
  'cluster', 'clutch', 'coach', 'coal', 'coalition', 'coarse', 'coast', 'coastal', 'coat', 'cocktail',
  'cocoa', 'code', 'coexist', 'coffee', 'coffin', 'cognitive', 'cohere', 'coherence', 'coherent',
  'coin', 'coincide', 'coincidence', 'cold', 'collaborate', 'collaboration', 'collapse', 'collar',
  'colleague', 'colleagues', 'collect', 'collected', 'collection', 'collective', 'collector', 'college',
  'collide', 'collision', 'colon', 'colonial', 'colony', 'color', 'column', 'combat', 'combination',
  'combine', 'combined', 'combustion', 'come', 'comedy', 'comet', 'comfort', 'comfortable', 'comic',
  'command', 'commander', 'commemorate', 'commence', 'commend', 'comment', 'commentary', 'commentator',
  'comments', 'commerce', 'commercial', 'commission', 'commit', 'commitment', 'committed', 'committee',
  'commodity', 'common', 'commonly', 'commonwealth', 'communicate', 'communication', 'communicative',
  'community', 'commute', 'compact', 'companion', 'company', 'comparative', 'compare', 'compared',
  'comparison', 'compartment', 'compass', 'compassion', 'compatible', 'compel', 'compelled', 'compensate',
  'compensation', 'compete', 'competence', 'competent', 'competition', 'competitive', 'competitor',
  'compile', 'complacent', 'complain', 'complaint', 'complement', 'complete', 'completely', 'completion',
  'complex', 'complexity', 'compliance', 'complicate', 'complicated', 'complication', 'compliment',
  'comply', 'component', 'compose', 'composed', 'composer', 'composition', 'compound', 'comprehend',
  'comprehension', 'comprehensive', 'compress', 'comprise', 'compromise', 'compulsory', 'compute',
  'computer', 'comrade', 'conceal', 'concede', 'conceive', 'concentrate', 'concentration', 'concept',
  'conception', 'concern', 'concerned', 'concerning', 'concert', 'conclude', 'concluded', 'concludes',
  'concluding', 'conclusion', 'conclusive', 'concrete', 'concur', 'condemn', 'condensation', 'condense',
  'condition', 'conditions', 'conduct', 'conductor', 'cone', 'confer', 'conference', 'confess',
  'confession', 'confidence', 'confident', 'confidential', 'confine', 'confirm', 'confirmation', 'conflict',
  'conform', 'confound', 'confront', 'confrontation', 'confuse', 'confused', 'confusion', 'congratulate',
  'congratulation', 'congratulations', 'congress', 'conjunction', 'conjunctions', 'connect', 'connected',
  'connection', 'connotation', 'conquer', 'conquest', 'conscience', 'conscious', 'consciousness', 'consecutive',
  'consent', 'consequence', 'consequences', 'consequent', 'consequently', 'conservation', 'conservative',
  'conserve', 'consider', 'considerable', 'considerably', 'considerate', 'consideration', 'considered',
  'considering', 'considers', 'consign', 'consist', 'consistent', 'consistently', 'consists', 'console',
  'consolidate', 'consonant', 'conspicuous', 'conspiracy', 'constant', 'constantly', 'constituent',
  'constitute', 'constitution', 'constitutional', 'constrain', 'constraint', 'construct', 'construction',
  'constructive', 'consult', 'consultant', 'consultation', 'consume', 'consumer', 'consumption', 'contact',
  'contain', 'container', 'contains', 'contaminate', 'contemplate', 'contemporary', 'contempt', 'contend',
  'contends', 'content', 'contentment', 'contents', 'contest', 'context', 'contextual', 'continent',
  'continental', 'continual', 'continue', 'continued', 'continues', 'continuing', 'continuous', 'contract',
  'contractor', 'contradict', 'contradiction', 'contrary', 'contrast', 'contribute', 'contribution',
  'contributor', 'control', 'controversy', 'convenience', 'convenient', 'convent', 'convention', 'conventional',
  'conversation', 'conversational', 'conversations', 'converse', 'conversion', 'convert', 'convey',
  'convict', 'conviction', 'convince', 'convinced', 'convincing', 'cook', 'cooked', 'cooker', 'cookie',
  'cooking', 'cool', 'cooperate', 'cooperation', 'cooperative', 'coordinate', 'coordination', 'cop',
  'cope', 'copper', 'copy', 'copyright', 'cord', 'core', 'cork', 'corn', 'corner', 'coronary', 'corps',
  'corpse', 'correct', 'correction', 'correctly', 'correlate', 'correlation', 'correspond', 'correspondence',
  'correspondent', 'corridor', 'corrupt', 'corruption', 'cost', 'cost-sharing', 'costly', 'costs',
  'costume', 'cottage', 'cotton', 'couch', 'cough', 'could', "couldn't", 'council', 'counsel', 'counseled',
  'counselor', 'count', 'counter', 'counterpart', 'countless', 'countries', 'country', 'countryside',
  'county', 'couple', 'courage', 'courageous', 'courier', 'course', 'courses', 'court', 'courtesy',
  'courtroom', 'courts', 'courtyard', 'cousin', 'cover', 'coverage', 'covered', 'covering', 'covers',
  'cow', 'coward', 'crack', 'cradle', 'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy',
  'cream', 'create', 'created', 'creates', 'creating', 'creation', 'creative', 'creativity', 'creator',
  'creature', 'credence', 'credential', 'credentials', 'credit', 'creed', 'creek', 'creep', 'crew',
  'cricket', 'crime', 'criminal', 'cripple', 'crisis', 'crisp', 'criteria', 'criterion', 'critic',
  'critical', 'critically', 'criticism', 'criticize', 'criticizes', 'criticizing', 'critique', 'crop',
  'crops', 'cross', 'crossing', 'crossroad', 'crowd', 'crowded', 'crown', 'crucial', 'crucify', 'crude',
  'cruel', 'cruelty', 'cruise', 'crumb', 'crumble', 'crush', 'crust', 'cry', 'crying', 'crystal',
  'cue', 'cultivate', 'cultivated', 'cultivating', 'cultivation', 'cultural', 'culture', 'cup', 'cupboard',
  'cure', 'curfew', 'curiosity', 'curious', 'curl', 'currency', 'current', 'currently', 'curriculum',
  'curse', 'curtain', 'curve', 'cushion', 'custody', 'custom', 'customary', 'customer', 'customs',
  'cut', 'cute', 'cv', 'cycle', 'cylinder',
  'dad', 'daily', 'dairy', 'dam', 'damage', 'damages', 'damp', 'dance', 'dancer', 'dancing', 'danger',
  'dangerous', 'dare', 'dark', 'darken', 'darkness', 'dar', 'dash', 'data', 'database', 'date', 'dated',
  'dates', 'daughter', 'dawn', 'day', 'daybreak', 'daylight', 'days', 'daytime', 'dead', 'deadline',
  'deadlock', 'deadly', 'deaf', 'deal', 'dealer', 'dealings', 'dealt', 'dean', 'dear', 'death', 'debate',
  'debris', 'debt', 'debtor', 'decade', 'decades', 'decay', 'deceased', 'deceit', 'deceive', 'december',
  'decency', 'decent', 'deception', 'decide', 'decided', 'decision', 'decisions', 'decisive', 'deck',
  'declaration', 'declare', 'declared', 'decline', 'declining', 'decode', 'decompose', 'decorate',
  'decoration', 'decorative', 'decrease', 'decreased', 'decree', 'dedicate', 'dedicated', 'dedication',
  'deduce', 'deduct', 'deduction', 'deed', 'deep', 'deepen', 'deeply', 'deer', 'default', 'defeat',
  'defect', 'defective', 'defence', 'defend', 'defendant', 'defender', 'defense', 'defensive', 'defiance',
  'defiant', 'deficiency', 'deficit', 'define', 'defined', 'defines', 'definite', 'definitely', 'definition',
  'definitions', 'definitive', 'deflate', 'deflection', 'deforestation', 'degrade', 'degradation', 'degree',
  'degrees', 'dehydration', 'deity', 'delay', 'delayed', 'delegate', 'delegation', 'delete', 'deliberate',
  'deliberately', 'delicate', 'delicious', 'delight', 'delighted', 'delightful', 'deliver', 'deliverance',
  'delivered', 'delivery', 'demand', 'demanding', 'demands', 'democracy', 'democrat', 'democratic',
  'democrats', 'demography', 'demolish', 'demolition', 'demon', 'demonstrate', 'demonstrated', 'demonstration',
  'demonstrative', 'denial', 'denote', 'denounce', 'dense', 'density', 'dent', 'dental', 'dentist',
  'deny', 'denied', 'denies', 'depart', 'department', 'departure', 'depend', 'dependence', 'dependent',
  'depending', 'depends', 'depict', 'depiction', 'deplete', 'depletion', 'deplore', 'deploy', 'deployment',
  'deposit', 'depot', 'depreciate', 'depress', 'depressed', 'depression', 'deprive', 'depth', 'deputy',
  'derivation', 'derive', 'derived', 'derives', 'descendant', 'descend', 'descent', 'describe', 'described',
  'describes', 'describing', 'description', 'descriptions', 'descriptive', 'desert', 'deserted', 'deserve',
  'deserved', 'deserves', 'design', 'designate', 'designation', 'designed', 'designer', 'designing',
  'desirable', 'desire', 'desk', 'desolate', 'desolation', 'despair', 'desperate', 'desperately',
  'despise', 'despite', 'dessert', 'destination', 'destined', 'destiny', 'destitute', 'destroy',
  'destroyed', 'destroyer', 'destroying', 'destroys', 'destruction', 'destructive', 'detach', 'detached',
  'detail', 'detailed', 'details', 'detain', 'detect', 'detective', 'detector', 'deter', 'detergent',
  'deteriorate', 'deteriorated', 'deterioration', 'determination', 'determine', 'determined', 'determines',
  'determining', 'detest', 'detour', 'detriment', 'devastate', 'devastated', 'devastating', 'devastation',
  'develop', 'developed', 'developer', 'developing', 'development', 'developments', 'deviate', 'deviation',
  'device', 'devil', 'devise', 'devoid', 'devote', 'devoted', 'devotion', 'dew', 'dewit', 'dexterity',
  'diabetes', 'diagnose', 'diagnosis', 'diagnostic', 'diagonal', 'diagram', 'dial', 'dialect', 'dialogue',
  'dialogues', 'diameter', 'diamond', 'diary', 'dictate', 'dictation', 'dictator', 'dictionary', 'dictionaries',
  'did', "didn't", 'die', 'died', 'dies', 'diet', 'differ', 'difference', 'differences', 'different',
  'differently', 'difficult', 'difficulties', 'difficulty', 'diffuse', 'diffusion', 'dig', 'digest',
  'digestion', 'digestive', 'digit', 'digital', 'dignity', 'dilemma', 'dimension', 'diminish', 'dinner',
  'diploma', 'diplomat', 'diplomatic', 'direct', 'directed', 'direction', 'directions', 'directive',
  'directly', 'director', "director's", 'directory', 'dirt', 'dirty', 'disable', 'disabled', 'disadvantage',
  'disagree', 'disagreeable', 'disagreement', 'disappear', 'disappearance', 'disappoint', 'disappointed',
  'disappointing', 'disappointment', 'disapproval', 'disapprove', 'disarm', 'disaster', 'disastrous',
  'disband', 'disbelief', 'disc', 'discard', 'discern', 'discernment', 'discharge', 'disciple',
  'discipline', 'disciplined', 'disclose', 'disclosure', 'disco', 'discomfort', 'disconnect', 'discontent',
  'discontinue', 'discord', 'discount', 'discourage', 'discourse', 'discover', 'discovered', 'discovery',
  'discreet', 'discrepancy', 'discrete', 'discretion', 'discriminate', 'discrimination', 'discuss',
  'discussed', 'discussing', 'discussion', 'discussions', 'disdain', 'disease', 'diseased', 'diseases',
  'disgrace', 'disguise', 'disgust', 'disgusted', 'dish', 'disheveled', 'dishonest', 'dishonesty',
  'dishonor', 'disillusion', 'disintegrate', 'disintegration', 'dislike', 'dislikes', 'dismal', 'dismantle',
  'dismay', 'dismiss', 'dismissal', 'dismissed', 'disobedient', 'disobey', 'disorder', 'disorganized',
  'disown', 'dispatch', 'dispel', 'dispense', 'disperse', 'displace', 'displacement', 'display',
  'displease', 'disposal', 'dispose', 'disposition', 'disproportionate', 'disprove', 'dispute', 'disqualification',
  'disqualify', 'disregard', 'disrupt', 'disruption', 'dissatisfaction', 'dissatisfied', 'dissolve',
  'distance', 'distant', 'distinct', 'distinction', 'distinctive', 'distinguish', 'distinguished',
  'distort', 'distortion', 'distract', 'distraction', 'distress', 'distribute', 'distribution', 'district',
  'distrust', 'disturb', 'disturbance', 'dive', 'diver', 'diverge', 'diverse', 'diversify', 'diversion',
  'diversity', 'divert', 'divide', 'divided', 'dividend', 'divine', 'division', 'divorce', 'divorced',
  'dizzy', 'docile', 'dock', 'doctor', 'doctrine', 'document', 'documentary', 'documentation',
  'dodge', 'dodging', 'does', "doesn't", 'dog', 'doing', 'doll', 'dollar', 'dollars', 'domain', 'domestic',
  'dominant', 'dominate', 'domination', 'donation', 'done', 'donkey', 'donor', 'doom', 'door', 'doorway',
  'dormitory', 'dose', 'dot', 'double', 'doubt', 'doubtful', 'doubtless', 'dough', 'dove', 'down',
  'downfall', 'download', 'downpour', 'downstairs', 'downtown', 'downward', 'doze', 'dozen', 'draft',
  'drag', 'drain', 'drainage', 'drama', 'dramatic', 'dramatically', 'drank', 'drastic', 'drastically',
  'draw', 'drawback', 'drawer', 'drawing', 'drawn', 'dread', 'dreadful', 'dream', 'dreary', 'dress',
  'dressed', 'dressing', 'drew', 'drift', 'drill', 'drink', 'drinker', 'drinking', 'drip', 'drive',
  'driven', 'driver', 'driveway', 'driving', 'drop', 'dropped', 'dropping', 'drops', 'drought', 'drove',
  'drown', 'drug', 'drugs', 'drum', 'drunk', 'dry', 'dryer', 'dryness', 'dual', 'dubious', 'duck',
  'due', 'duel', 'duet', 'duke', 'dull', 'dumb', 'dump', 'dungeon', 'duplicate', 'durable', 'duration',
  'during', 'dusk', 'dust', 'dusty', 'duty', 'dwarf', 'dwell', 'dwelling', 'dwindle', 'dye', 'dynamic',
  'dynamics', 'dynasty',
  'each', 'eager', 'eagerly', 'eagerness', 'eagle', 'ear', 'earlier', 'earliest', 'early', 'earn',
  'earned', 'earner', 'earning', 'earnings', 'earns', 'earphone', 'earth', 'earthquake', 'ease',
  'easily', 'east', 'eastern', 'eastward', 'easy', 'eat', 'eaten', 'eater', 'eating', 'eccentric',
  'echo', 'eclipse', 'ecology', 'ecological', 'economic', 'economical', 'economically', 'economics',
  'economist', 'economy', 'ecstasy', 'eden', "eden's", 'edge', 'edible', 'edit', 'edited', 'edition',
  'editor', 'editorial', 'educate', 'educated', 'education', 'educational', 'educator', 'eel', 'eerie',
  'effect', 'effective', 'effectively', 'effectiveness', 'effects', 'efficiency', 'efficient', 'efficiently',
  'effort', 'efforts', 'egg', 'ego', 'eight', 'eighteen', 'eighth', 'eighty', 'either', 'elaborate',
  'elapse', 'elastic', 'elbow', 'elder', 'elderly', 'eldest', 'elect', 'elected', 'election', 'electoral',
  'electric', 'electrical', 'electrician', 'electricity', 'electron', 'electronic', 'electronics', 'elegance',
  'elegant', 'element', 'elementary', 'elements', 'elephant', 'elevate', 'elevation', 'elevator',
  'eleven', 'eligible', 'eliminate', 'elimination', 'elite', 'elk', 'elliptical', 'elongate', 'eloquence',
  'eloquent', 'else', 'elsewhere', 'elude', 'elusive', 'email', 'embargo', 'embark', 'embarrass',
  'embarrassed', 'embarrassing', 'embarrassment', 'embassy', 'embody', 'embrace', 'embryo', 'emerald',
  'emerge', 'emergency', 'emergent', 'emigrate', 'emigration', 'eminent', 'emission', 'emit', 'emotion',
  'emotional', 'empathy', 'emperor', 'emphasis', 'emphasize', 'emphasized', 'emphasizes', 'empire',
  'empirical', 'employ', 'employed', 'employee', 'employees', 'employer', 'employers', 'employment',
  'empty', 'enable', 'enabled', 'enables', 'enact', 'enamel', 'enchant', 'enclose', 'enclosure',
  'encode', 'encounter', 'encourage', 'encouraged', 'encouragement', 'encouraging', 'encyclopedia', 'end',
  'endanger', 'endangered', 'endeavor', 'ended', 'ending', 'endless', 'endorse', 'endorsement', 'endow',
  'endurance', 'endure', 'enemy', 'energetic', 'energy', 'enforce', 'enforcement', 'engage', 'engaged',
  'engagement', 'engine', 'engineer', 'engineering', 'english', 'engrave', 'enhance', 'enjoy', 'enjoyable',
  'enjoyment', 'enjoys', 'enlarge', 'enlighten', 'enormous', 'enough', 'enquire', 'enrich', 'enroll',
  'enrollment', 'ensure', 'ensures', 'entail', 'enter', 'entered', 'enterprise', 'entertain', 'entertainer',
  'entertaining', 'entertainment', 'enthusiasm', 'enthusiast', 'enthusiastic', 'entire', 'entirely',
  'entitle', 'entitled', 'entity', 'entrance', 'entreat', 'entrepreneur', 'entry', 'envelope', 'environment',
  'environmental', 'envision', 'envy', 'epidemic', 'episode', 'epoch', 'equal', 'equality', 'equally',
  'equate', 'equation', 'equator', 'equatorial', 'equilibrium', 'equip', 'equipment', 'equivalent',
  'era', 'erase', 'eraser', 'erode', 'eroded', 'erosion', 'err', 'errand', 'erratic', 'error', 'errors',
  'erupt', 'eruption', 'escalate', 'escape', 'escaped', 'escort', 'especially', 'essay', 'essence',
  'essential', 'essentially', 'establish', 'established', 'establishment', 'estate', 'esteem', 'estimate',
  'estimated', 'estimation', 'eternal', 'ether', 'ethic', 'ethical', 'ethics', 'ethiopia', 'ethiopian',
  'ethiopians', 'ethnicity', 'ethnic', 'eucalyptus', 'euee', 'euphemism', 'evacuate', 'evacuation',
  'evaluate', 'evaluation', 'evaporate', 'evaporation', 'even', 'evening', 'event', 'events', 'eventual',
  'eventually', 'ever', 'every', 'everybody', 'everyday', 'everyone', 'everything', 'everywhere', 'evidence',
  'evident', 'evidently', 'evil', 'evoke', 'evolution', 'evolutionary', 'evolve', 'exact', 'exactly',
  'exaggerate', 'exaggerated', 'exaggeration', 'exam', 'examination', 'examinations', 'examine', 'examined',
  'examiner', 'example', 'examples', 'exceed', 'exceedingly', 'excel', 'excellence', 'excellent',
  'except', 'exception', 'exceptional', 'excess', 'excessive', 'exchange', 'excite', 'excited', 'excitement',
  'exciting', 'exclaim', 'exclamation', 'exclude', 'excluding', 'exclusion', 'exclusive', 'exclusively',
  'excursion', 'excuse', 'execute', 'execution', 'executive', 'exemplify', 'exempt', 'exemption',
  'exercise', 'exert', 'exertion', 'exhaust', 'exhausted', 'exhaustion', 'exhaustive', 'exhibit',
  'exhibition', 'exhibits', 'exile', 'exist', 'existence', 'existent', 'existing', 'exists', 'exit',
  'exotic', 'expand', 'expanded', 'expanding', 'expansion', 'expect', 'expectancy', 'expectation',
  'expectations', 'expected', 'expecting', 'expects', 'expedition', 'expel', 'expenditure', 'expense',
  'expenses', 'expensive', 'experience', 'experienced', 'experiences', 'experiment', 'experimental',
  'expert', 'expertise', 'expire', 'explain', 'explained', 'explaining', 'explains', 'explanation',
  'explanations', 'explicit', 'explicitly', 'explode', 'exploit', 'exploitation', 'exploration', 'explore',
  'explorer', 'explosion', 'explosive', 'export', 'expose', 'exposed', 'exposition', 'expository',
  'exposure', 'express', 'expressed', 'expresses', 'expressing', 'expression', 'expressions', 'expressive',
  'extend', 'extended', 'extension', 'extensive', 'extensively', 'extent', 'exterior', 'external',
  'extinct', 'extinction', 'extinguish', 'extra', 'extract', 'extraction', 'extraordinary', 'extravagant',
  'extreme', 'extremely', 'eye', 'eyebrow', 'eyelid', 'eyes', 'eyesight',
  'face', 'faces', 'facing', 'fact', 'factor', 'factors', 'factory', 'facts', 'factual', 'factually',
  'fail', 'failed', 'fails', 'failure', 'fair', 'fairly', 'faith', 'fall', 'false', 'family', 'famous',
  'far', 'faraday', "faraday's", 'farm', 'farmer', 'farmers', 'farming', 'farmland', 'fast', 'father', 'favour', 'favourite',
  'fear', 'feat', 'feature', 'features', 'federal', 'fee', 'feed', 'feel', 'feeling', 'feels', 'feet',
  'felt', 'female', 'few', 'fewer', 'field', 'fields', 'fifth', 'fight', 'figure', 'figured', 'figures',
  'fill', 'final', 'finally', 'financial', 'find', 'finds', 'fine', 'finger', 'finger-pointing', 'finish',
  'finished', 'fire', 'firm', 'first', 'firstly', 'fish', 'fit', 'fitness', 'fits', 'fitting', 'five',
  'fix', 'flag', 'flame', 'flash', 'flat', 'fled', 'flee', 'fleeing', 'flees', 'fleet', 'flesh', 'flex',
  'flexible', 'flexibility', 'flight', 'float', 'flock', 'flood', 'floor', 'flour', 'flow', 'flower', 'fluent',
  'fluently', 'fluency', 'fluid', 'fly', 'flying', 'focus', 'focused', 'focuses', 'focusing', 'fold', 'folk',
  'follow', 'following',
  'follows', 'food', 'fool', 'foolish', 'foot', 'for', 'force', 'forced', 'foreign', 'forest', 'forested',
  'forests', 'forget', 'forgot', 'form', 'formal', 'formation', 'format', 'former', 'forth', 'fortunate',
  'forward', 'found', 'four', 'fourth', 'fragment', 'fragmented', 'frame', 'free', 'freedom', 'freeze',
  'french', 'frequent', 'frequently', 'fresh', 'freshman', 'friend', 'friendly', 'friends', 'from', 'front',
  'fruit', 'fuel', 'full', 'fully', 'fun', 'function', 'functional', 'fund', 'fundamental', 'funny', 'further',
  'future',
  'gain', 'game', 'garden', 'gas', 'gather', 'gave', 'general', 'generally', 'generate', 'generation',
  'generations', 'gentle', 'genuine', 'geography', 'get', 'gets', 'getting', 'gift', 'girl', 'girls', 'give',
  'given', 'gives', 'giving', 'glad', 'glass', 'global', 'goal', 'goes', 'going', 'gold', 'gone',
  'good', 'got', 'govern', 'government', 'governmental', 'governor', 'grade', 'gradual', 'gradually',
  'graduate', 'graduated', 'gram', 'grammar', 'grammatical', 'grand', 'grant', 'grants', 'grass', 'grateful',
  'gray', 'great', 'greater', 'greatest', 'greatly', 'green', 'greet', 'greeting', 'greetings', 'grew',
  'ground', 'group', 'groups', 'grow', 'growing', 'grown', 'growth', 'guarantee', 'guard', 'guess', 'guest',
  'guidance', 'guide', 'guidelines', 'guilt', 'guilty', 'gun', 'guy',
  'habit', 'habits', 'had', 'haggard', 'haile', 'hair', 'half', 'hall', 'hana', "hana's", 'hand',
  'handle', 'hang', 'happen', 'happened', 'happens', 'happy', 'hard', 'hardly', 'harm', 'hate', 'hates',
  'have', 'having', 'head', 'health', 'healthy', 'hear', 'heard', 'hearing', 'heart', 'heat',
  'heaven', 'heavy', 'held', 'help', 'helped', 'helpful', 'helping', 'helps', 'her', 'here', 'hero',
  'herself', 'hesitate', 'hibru', 'hide', 'high', 'higher', 'highest', 'highlands', 'highly', 'hill',
  'hillsides', 'him', 'himself', 'hire', 'his', 'historic', 'historical', 'history', 'hit', 'hold', 'holding',
  'holds', 'hole', 'holiday', 'home', 'homeless', 'homelessness', 'homes', 'honest', 'honestly', 'honor',
  'hope', 'hopeless', 'horizon', 'horrible', 'horse', 'hospital', 'host', 'hot', 'hotel', 'hour', 'hours',
  'house', 'houses', 'how', 'however', 'huge', 'human', 'humor', 'hundred', 'hungry', 'hunt', 'husband',
  'i', 'ice', 'idea', 'ideas', 'identical', 'identify', 'identity', 'ill', 'illegal', 'illness',
  'illogical', 'illustrate', 'image', 'imagine', 'immediate', 'immediately', 'impact', 'imperative',
  'implication', 'imply', 'implies', 'importance', 'important', 'impose', 'impossible', 'impression',
  'imprisonment', 'improper', 'improve', 'improvement', 'inability', 'inappropriate', 'incident',
  'include', 'included', 'includes', 'including', 'income', 'incorporate', 'increase', 'increased', 'increases',
  'increasing', 'increasingly', 'indebted', 'indeed', 'independence', 'independent', 'indicate', 'indicated',
  'indicates', 'indicating', 'indiscriminate', 'individual', 'individuals', 'industry', 'inevitable', 'infer',
  'inferred', 'infinitival', 'infinite', 'infinitive', 'inflate', 'inflation', 'influence', 'inform',
  'information', 'informing', 'infrastructure', 'inherit', 'initial', 'initially', 'injure', 'injured',
  'injury', 'ink', 'inner', 'innocent', 'input', 'inquire', 'insect', 'inside', 'insist', 'inspect',
  'inspire', 'install', 'instance', 'instead', 'institute', 'institution', 'instruct', 'instruction',
  'instructions', 'instructor', 'instrument', 'insurance', 'intellectual', 'intellectuals', 'intelligence',
  'intelligent', 'intelligibility', 'intend', 'intensity', 'intent', 'intention', 'interest', 'interested',
  'interesting', 'interests', 'internal', 'international', 'interpret', 'interrupt', 'interview', 'interviewing',
  'into', 'introduce', 'introduced', 'introduces', 'introducing', 'introduction', 'invent', 'involve',
  'involved', 'involvement', 'iron', 'irregular', 'irrelevant', 'irreplaceable', 'island', 'issue',
  'issues', 'item', 'items', 'its', 'itself',
  'jacket', 'jail', 'jeans', 'jirata', 'job', 'jobs', 'join', 'joined', 'joining', 'joint', 'joke',
  'journal', 'journey', 'judge', 'judgment', 'jump', 'junior', 'jury', 'just', 'justice', 'justify',
  'keep', 'keeping', 'keeps', 'kept', 'key', 'kidist', 'kill', 'killing', 'kills', 'kind', 'kinds',
  'king', 'kingdom', 'kiremt', 'kitchen', 'knee', 'knife', 'knock', 'knocked', 'knocking', 'know', 'knowing',
  'knowledge', 'known', 'knows',
  'label', 'laboratory', 'labor', 'lack', 'lady', 'laid', 'lake', 'lamp', 'land', 'lands', 'language',
  'large', 'largely', 'last', 'late', 'lately', 'later', 'latest', 'latter', 'laugh', 'laughs', 'law',
  'lawyer', 'lay', 'layoff', 'lead', 'leader', 'leading', 'leads', 'leaf', 'learn', 'learned', 'learning',
  'least', 'leather', 'leave', 'leaves', 'leaving', 'lecture', 'led', 'left', 'legal', 'lemma', 'lemon',
  'lend', 'length', 'lensa', 'less', 'lesson', "lesson's", 'lessons', 'let', 'letter', 'letters', 'level',
  'lexical', 'liability', 'liable', 'liberty', 'library', 'license', 'lie', 'life', 'lifestyles', 'lift',
  'light', 'like', 'liked', 'likely', 'likes', 'liking', 'limit', 'limited', 'line', 'lines', 'link',
  'lion', 'lip', 'liquid', 'list', 'listed', 'listen', 'listened', 'listening', 'lists', 'literal', 'literature',
  'little', 'live', 'lived', 'lives', 'living', 'load', 'loan', 'local', 'locate', 'location', 'lock',
  'log', 'logical', 'logically', 'lone', 'long', 'longer', 'look', 'looked', 'looking', 'looks', 'loose',
  'lord', 'lose', 'losing', 'loss', 'lost', 'lot', 'lots', 'loud', 'love', 'low', 'lower', 'loyal', 'luck',
  'lunch', 'luxury',
  'machine', 'machinery', 'mad', 'magazine', 'magic', 'main', 'mainly', 'maintain', 'major', 'majority',
  'make', 'maker', 'makes', 'making', 'male', 'man', 'manage', 'managed', 'management', 'manager', 'managers',
  'manifest', 'manifold', 'manner', 'many', 'map', 'margin', 'mark', 'market', 'marks', 'marriage', 'married',
  'marry', 'mass', 'master', 'mastered', 'match', 'matches', 'matching', 'material', 'math', 'mathematics',
  'maths', 'matter', 'matters', 'mature', 'maximum', 'may', 'maybe', 'meal', 'mean', 'meaning',
  'meaningful', 'means', 'meant', 'measure', 'measures', 'meat', 'mechanic', 'mechanical', 'mechanics',
  'mechanism', 'media', 'medical', 'medicine', 'medium', 'meet', 'meeting', 'meets', 'member', 'members',
  'memory', 'men', 'mental', 'mention', 'mentioned', 'mentioning', 'mentions', 'mere', 'merely', 'message',
  'metal', 'method', 'methods', 'middle', 'midnight', 'might', 'mile', 'military', 'milk', 'million', 'mind',
  'mine', 'minor', 'minute', 'minutes', 'mirror', 'miscellaneous', 'misleading', 'miss', 'missing', 'misspelled',
  'mistake', 'mix', 'mode', 'model', 'modern', 'modes', 'moment', 'money', 'month', 'months', 'moon',
  'moral', 'more', 'moreover', 'morning', 'most', 'mostly', 'mother', 'motion', 'motor', 'mount', 'mountain',
  'mouse', 'mouth', 'move', 'movement', 'movie', 'much', 'mulu', 'multiple', 'museum', 'music', 'must',
  'myself',
  'name', 'named', 'names', 'narrative', 'narrow', 'nation', 'national', 'native', 'natural', 'naturally',
  'nature', 'near', 'nearby', 'nearly', 'neat', 'necessarily', 'necessary', 'necessity', 'neck', 'need',
  'needed', 'needs', 'negative', 'negativity', 'neglect', 'neighbor', "neighbor's", 'neither', 'nerve',
  'net', 'network', 'never', 'new', 'news', 'next', 'nice', 'night', 'nine', 'noble', 'nobody',
  'noise', 'none', 'nor', 'normal', 'normally', 'north', 'northern', 'nose', 'not', 'note', 'noted',
  'notes', 'nothing', 'notice', 'noun', 'novel', 'now', 'nuclear', 'number', 'numbered', 'numbers', 'numerous',
  'nurse', 'nutrients', 'nylon',
  'object', 'objective', 'obligation', 'observe', 'observed', 'obtain', 'obvious', 'obviously', 'occasion',
  'occasional', 'occur', 'ocean', 'o\'clock', 'odds', 'off', 'offence', 'offend', 'offer', 'offered',
  'offers', 'office', "office's", 'officer', 'official', 'often', 'oil', 'old', 'older', 'oldest',
  'once', 'one', 'ones', 'only', 'onto', 'open', 'opened', 'opening', 'operate', 'operation', 'opinion',
  'opinions', 'opportunity', 'oppose', 'opposed', 'opposing', 'opposite', 'opposition', 'opt', 'option',
  'options', 'order', 'ordinary', 'organ', 'organic', 'organization', 'organize', 'organized', 'origin',
  'original', 'other', 'others', 'otherwise', 'ought', 'our', 'ours', 'ourselves', 'out', 'outcome', 'outcomes',
  'outrageous', 'outside', 'over', 'overall', 'overcome', 'owe', 'own', 'owner', 'ownership',
  'pace', 'pack', 'package', 'page', 'paid', 'pain', 'paint', 'painter', 'painting', 'pair', 'pairs',
  'palace', 'pale', 'paper', 'paragraph', 'paragraphs', 'parallel', 'parallelism', 'parent', 'park',
  'parking', 'parliament', 'part', 'particular', 'particularly', 'parties', 'partly', 'parts', 'party',
  'pass', 'passage', 'passages', 'passed', 'passenger', 'passing', 'passive', 'past', 'pastoral', 'path',
  'patience', 'patient', 'pattern', 'patterns', 'pause', 'pay', 'peace', 'peaceful', 'peak', 'pen',
  'penalty', 'pencil', 'people', "people's", 'per', 'perceive', 'perceived', 'percent', 'percentage',
  'perfect', 'perfectly', 'perform', 'performance', 'period', 'permission', 'permit', 'person', 'personal',
  'personality', 'perspective', 'persuade', 'persuasion', 'phase', 'philosophy', 'phone', 'photograph',
  'phrase', 'phrases', 'physical', 'physics', 'pick', 'picture', 'piece', 'pieces', 'pile', 'pilot',
  'pin', 'pipe', 'pity', 'place', 'placed', 'places', 'plain', 'plan', 'plane', 'planet', 'planned',
  'planning', 'plans', 'plant', 'planted', 'planting', 'plants', 'plastic', 'plate', 'play', 'played',
  'player', 'playing', 'plead', 'pleasant', 'please', 'pleasure', 'plight', 'plot', 'plural', 'pocket',
  'poem', 'poet', 'poetry', 'point', 'pointing', 'points', 'poison', 'pole', 'police', 'policy', 'polite',
  'politeness', 'political', 'politician', 'politicians', 'politics', 'pollution', 'polytechnic', 'pool',
  'poor', 'poorer', 'poorest', 'pop', 'popular', 'population', 'port', 'portion', 'position', 'positive',
  'possess', 'possession', 'possible', 'possibly', 'post', 'postage', 'potato', 'potential', 'poverty',
  'power', 'powerful', 'practical', 'practice', 'practices', 'praise', 'pray', 'preceding', 'precious',
  'precise', 'prefer', 'preference', 'prefix', 'preposition', 'preservation', 'preserve', 'preserved',
  'preserves', 'president', 'press', 'pressure', 'pretend', 'pretty', 'prevent', 'prevented', 'previous',
  'previously', 'price', 'pride', 'priest', 'primarily', 'primary', 'prime', 'prince', 'princess', 'principal',
  'principle', 'principles', 'print', 'printed', 'prior', 'priority', 'prison', 'private', 'privilege',
  'prize', 'probably', 'problem', 'problems', 'procedure', 'proceed', 'process', 'produce', 'produced',
  'product', 'production', 'profession', 'professional', 'professor', 'profit', 'program', 'programs',
  'progress', 'prolonged', 'promise', 'prompt', 'pronoun', 'pronouns', 'proof', 'proper', 'properly',
  'property', 'proposal', 'propose', 'prospect', 'protect', 'protection', 'proud', 'prove', 'provide',
  'provided', 'provides', 'public', 'publish', 'pull', 'pump', 'punctuation', 'punish', 'pupil', 'purchase',
  'pure', 'purpose', 'purse', 'pursue', 'push', 'put', 'puts',
  'qualification', 'qualify', 'quality', 'quantity', 'quarrel', 'quarter', 'queen', 'question',
  'questions', 'quick', 'quickly', 'quiet', 'quietly', 'quit', 'quite', 'quote',
  'race', 'radio', 'rail', 'railway', 'rain', 'rains', 'raise', 'raises', 'raising', 'ran', 'range',
  'rapid', 'rapidly', 'rare', 'rarely', 'rate', 'rather', 'raw', 'reach', 'reached', 'reaction', 'read',
  'reader', 'readers', 'reading', 'readily', 'ready', 'real', 'reality', 'realize', 'realized', 'really',
  'realm', 'reason', 'reasonable', 'reasoning', 'reasons', 'rebel', 'recall', 'receipt', 'receive',
  'received', 'receives', 'recent', 'recently', 'reception', 'reclaim', 'recognition', 'recognize',
  'recommend', 'record', 'recover', 'red', 'reduce', 'reduction', 'refer', 'reference', 'referenced',
  'referencing', 'referral', 'referred', 'referring', 'refers', 'refine', 'reflect', 'reflecting', 'reflects',
  'reform', 'refugee', 'refuse', 'refusing', 'regard', 'regarding', 'regardless', 'region', 'register',
  'regret', 'regular', 'regularly', 'regulation', 'reject', 'relate', 'related', 'relation', 'relations',
  'relationship', 'relationships', 'relative', 'relatively', 'relatives', 'relax', 'release', 'relevant',
  'reliability', 'reliable', 'reliance', 'relief', 'religion', 'religious', 'rely', 'remain', 'remaining',
  'remains', 'remark', 'remember', 'remind', 'remnants', 'remove', 'removed', 'render', 'rendered',
  'renew', 'repair', 'repeat', 'repeated', 'repeating', 'repetition', 'replace', 'replaced', 'replaces',
  'reply', 'report', 'reporter', 'represent', 'republicans', 'request', 'require', 'requirement',
  'requirements', 'rescue', 'research', 'resemble', 'residence', 'resident', 'resign', 'resist', 'resolve',
  'resort', 'resource', 'resources', 'respect', 'respectful', 'respects', 'respond', 'response', 'responsibility',
  'responsible', 'rest', 'restaurant', 'restore', 'restored', 'restrict', 'result', 'results', 'resume',
  'resuming', 'retail', 'retain', 'retire', 'return', 'returning', 'reveal', 'revealing', 'reveals',
  'revenue', 'reverse', 'review', 'revision', 'revive', 'revolt', 'reward', 'rhetoric', 'rhythm', 'rich',
  'rid', 'ride', 'rider', 'riding', 'right', 'rigid', 'ring', 'rings', 'ripe', 'rise', 'rising', 'risk',
  'river', 'road', 'rock', 'rod', 'role', 'roll', 'roof', 'room', 'root', 'roots', 'rose', 'rough',
  'round', 'route', 'routine', 'row', 'royal', 'rude', 'ruin', 'rule', 'rules', 'run', 'running', 'runs',
  'rural', 'rush',
  'sacred', 'sacrifice', 'sad', 'safe', 'safety', 'said', 'sail', 'sake', 'salaries', 'salary', 'sale',
  'salesman', 'saleswoman', 'saliva', 'salt', 'salutation', 'salvation', 'same', 'sample', 'samson',
  'sand', 'satellite', 'satisfied', 'satisfies', 'save', 'saved', 'say', 'saying', 'says', 'scale',
  'scandal', 'scapegoat', 'scarce', 'scatter', 'scene', 'scenery', 'scheme', 'scholar', 'scholarship',
  'school', 'schools', 'science', 'scientific', 'scientist', 'scope', 'score', 'scream', 'screen', 'sea',
  'search', 'season', 'seat', 'second', 'secondly', 'secret', 'secretary', 'section', 'sections', 'secure',
  'security', 'see', 'seed', 'seeing', 'seek', 'seeks', 'seem', 'seemed', 'seeming', 'seems', 'seen',
  'sees', 'seize', 'seldom', 'select', 'selected', 'selection', 'self', 'sell', 'seller', 'selling',
  'semicolon', 'send', 'sending', 'sends', 'senior', 'sense', 'sensible', 'sentence', 'sentences', 'separate',
  'separated', 'series', 'serious', 'seriously', 'servant', 'serve', 'served', 'serves', 'service',
  'services', 'set', 'settle', 'settled', 'settlement', 'seven', 'seventh', 'several', 'severe', 'sex',
  'shade', 'shadow', 'shaft', 'shake', 'shallow', 'shame', 'shape', 'share', 'shared', 'sharing', 'sharp',
  'she', 'sheep', 'sheet', 'shelf', 'shell', 'shelter', 'shelters', 'shine', 'ship', 'shirt',
  'shock', 'shoe', 'shoes', 'shoot', 'shop', 'shopping', 'shore', 'short', 'shortly', 'should',
  'shoulder', 'shout', 'show', 'showcasing', 'showed', 'showing', 'shown', 'shows', 'shut', 'shy', 'sick',
  'side', 'sides', 'sight', 'sign', 'signal', 'signature', 'significance', 'significant', 'silence',
  'silent', 'silk', 'silly', 'silver', 'similar', 'simple', 'simply', 'since', 'sincere', 'sincerely',
  'sing', 'single', 'sink', 'sir', 'sister', 'sit', 'site', 'sites', 'sits', 'sitting', 'situation',
  'six', 'sixth', 'size', 'skill', 'skills', 'skin', 'skirt', 'sky', 'slave', 'sleep', 'sleeping', 'slept',
  'slight', 'slightly', 'slim', 'slip', 'slope', 'slow', 'slowly', 'small', 'smaller', 'smart', 'smell',
  'smile', 'smiling', 'smoke', 'smoking', 'smooth', 'snake', 'snow', 'soap', 'sociable', 'social',
  'society', 'soft', 'soil', 'sold', 'soldier', 'sole', 'solid', 'solomon', 'solution', 'solve', 'solved',
  'some', 'somebody', 'somehow', 'someone', 'something', 'sometimes', 'somewhere', 'son', 'song', 'soon',
  'sore', 'sorry', 'sort', 'sought', 'soul', 'sound', 'soup', 'source', 'sources', 'south', 'southern',
  'space', 'spacious', 'spare', 'speak', 'speaker', 'speaking', 'speaks', 'special', 'species', 'specific',
  'specifically', 'speech', 'speed', 'spell', 'spelling', 'spend', 'spending', 'spends', 'spent', 'spill',
  'spin', 'spirit', 'spite', 'split', 'spoil', 'spoke', 'spoken', 'sponsor', 'sport', 'sports', 'spot',
  'spread', 'spring', 'square', 'staff', 'stage', 'stair', 'stamp', 'stand', 'standard', 'standards',
  'standing', 'stands', 'star', 'stare', 'start', 'started', 'starting', 'starts', 'state', 'statement',
  'statements', 'states', 'station', 'statistic', 'statistics', 'statute', 'stay', 'steady', 'steam',
  'steel', 'steep', 'step', 'stepped', 'stepping', 'steps', 'stick', 'stiff', 'still', 'stimulate',
  'stomach', 'stone', 'stop', 'stopped', 'stopping', 'storage', 'store', 'stories', 'storm', 'story',
  'straight', 'strain', 'strange', 'stranger', 'strategy', 'street', 'streets', 'strength', 'strengthen',
  'stress', 'stretch', 'strict', 'strictly', 'strike', 'string', 'strip', 'stroke', 'strong', 'stronger',
  'strongly', 'struck', 'structure', 'structures', 'struggle', 'struggling', 'student', 'students', 'studied',
  'studies', 'study', 'studying', 'stuff', 'stupid', 'style', 'styles', 'subject', 'subjects', 'submit',
  'subsequent', 'substance', 'substantial', 'substitute', 'succeed', 'success', 'successful', 'such', 'suck',
  'sudden', 'suddenly', 'suffer', 'suffered', 'sufficient', 'sugar', 'suggest', 'suggested', 'suggesting',
  'suggests', 'suit', 'suitable', 'sum', 'summarize', 'summary', 'summer', 'sun', 'sunday', 'superior',
  'supermarket', 'supply', 'support', 'supporting', 'supports', 'suppose', 'supposed', 'supposition',
  'supreme', 'sure', 'surely', 'surface', 'surgeon', 'surgery', 'surplus', 'surprise', 'surprised',
  'surprising', 'surrender', 'surround', 'surrounding', 'survey', 'survive', 'suspect', 'suspend',
  'suspicious', 'swallow', 'swallowed', 'swallows', 'sweet', 'swim', 'swing', 'switch', 'symbol', 'symbols',
  'sympathy', 'synonym', 'synonymous', 'synonyms', 'syntax', 'syntactic', 'system', 'systematic', 'systemic',
  'table', 'tables', 'tadesse', 'tag', 'tail', 'take', 'taken', 'takes', 'taking', 'talent',
  'talk', 'talking', 'tall', 'task', 'taste', 'taught', 'tax', 'tea', 'teach', 'teacher', 'teachers',
  'teaching', 'teaches', 'team', 'tear', 'tears', 'technical', 'technology', 'telephone', 'tell', 'telling',
  'tells', 'temesgen', 'temperature', 'temporary', 'temporarily', 'ten', 'tend', 'tendency', 'tense',
  'tenses', 'tension', 'tensions', 'tent', 'tenth', 'term', 'terms', 'terrible', 'territory', 'terror',
  'test', 'text', 'textile', 'texts', 'than', 'thank', 'thanks', 'that', 'the', 'their', 'theirs',
  'them', 'theme', 'themselves', 'then', 'theoretical', 'theory', 'there', 'therefore', 'these', 'they',
  'thick', 'thief', 'thin', 'thing', 'things', 'think', 'thinking', 'thinks', 'third', 'thirst', 'thirty',
  'thirty-year-old', 'this', 'thorough', 'those', 'though', 'thought', 'thoughtful', 'thousand', 'threat',
  'threaten', 'three', 'throat', 'through', 'throw', 'thumb', 'thunder', 'thursday', 'thus', 'ticket',
  'tide', 'tie', 'tight', 'till', 'time', 'times', 'tin', 'tiny', 'tire', 'tired', 'title', 'today',
  'toe', 'together', 'told', 'tomorrow', 'tone', 'tongue', 'tonight', 'too', 'took',
  'tool', 'tooth', 'top', 'topic', 'total', 'totally', 'touch', 'tough', 'tour', 'toward', 'towards',
  'towel', 'tower', 'town', 'toy', 'track', 'tracts', 'trade', 'tradition', 'traditional', 'traditionally',
  'traffic', 'tragic', 'trail', 'train', 'training', 'transfer', 'transform', 'translate', 'transport',
  'trap', 'travel', 'treasure', 'treat', 'treatment', 'treatments', 'tree', 'trees', 'tremendous', 'trend',
  'trial', 'tribe', 'trick', 'tricks', 'trip', 'trouble', 'troubles', 'truck', 'true', 'truly', 'trust',
  'trustful', 'trustworthy', 'truth', 'try', 'trying', 'tuesday', 'turn', 'turned', 'turns', 'twelve',
  'twenties', 'twenty', 'twenty-eight', 'twice', 'two', 'type', 'types', 'typical',
  'ugly', 'ultimate', 'unable', 'unanimous', 'uncertain', 'uncle', 'uncomfortable', 'uncommon', 'under',
  'undergo', 'understand', 'understanding', 'understood', 'undertake', 'undo', 'undoubtedly', 'uneasy',
  'unemployed', 'unemployment', 'unesco', 'unfair', 'unfortunate', 'unfortunately', 'uniform', 'union',
  'unique', 'unit', 'unite', 'united', 'universal', 'universe', 'university', 'unknown', 'unless', 'unlike',
  'unlikely', 'unlimited', 'unnecessary', 'unpleasant', 'unpopular', 'unreasonable', 'unsettled', 'until',
  'untrue', 'unusual', 'unwell', 'unwilling', 'upon', 'upper', 'upset', 'upside', 'upstairs',
  'upward', 'urge', 'urgent', 'usa', 'usage', 'use', 'used', 'useful', 'useless', 'user', 'uses',
  'using', 'usual', 'usually', 'utility',
  'vacation', 'vague', 'vain', 'valid', 'valley', 'valuable', 'value', 'values', 'vanish', 'variety',
  'various', 'vary', 'vast', 'vegetable', 'vehicle', 'venture', 'verb', 'verbal', 'verdict', 'verify',
  'version', 'versus', 'vertical', 'very', 'vessel', 'victim', 'victims', 'victory', 'video', 'view',
  'viewpoint', 'village', 'violent', 'virgin', 'virtue', 'visible', 'visibly', 'visit', 'visiting', 'visual',
  'vital', 'vocabulary', 'voice', 'voices', 'volume', 'voluntary', 'volunteer', 'volunteering', 'vote',
  'voter', 'voting',
  'wage', 'wages', 'waist', 'wait', 'waiting', 'wake', 'walk', 'walking', 'wall', 'want', 'wanted',
  'wants', 'war', 'warm', 'warn', 'warning', 'wash', 'washed', 'waste', 'wasted', 'watch',
  'water', 'wave', 'way', 'ways', 'weak', 'wealth', 'wear', 'wearing', 'wears', 'weather', 'wednesday',
  'week', 'weekly', 'weeks', 'weep', 'weigh', 'weight', 'welcome', 'welfare', 'well', 'went', 'were',
  'west', 'western', 'wet', 'what', 'whatever', 'wheat', 'wheel', 'when', 'whenever', 'where',
  'whereas', 'wherever', 'whether', 'which', 'whichever', 'while', 'whisper', 'white', 'who', 'whoever',
  'whole', 'whom', 'whose', 'why', 'wide', 'widely', 'wider', 'widespread', 'widow', 'width', 'wife',
  'wild', 'wildlife', 'will', 'willing', 'win', 'wind', 'window', 'wine', 'wing', 'winner', 'winter',
  'wire', 'wisdom', 'wise', 'wish', 'wishes', 'with', 'within', 'without', 'witness', 'wizero', 'w/ro',
  'woman', 'women', 'wonder', 'wonderful', 'wood', 'wool', 'word', 'words', 'wore', 'work', 'worked',
  'worker', 'workers', 'working', 'works', 'world', 'worry', 'worse', 'worship', 'worst', 'worth', 'would',
  'wound', 'wrap', 'wreck', 'wrist', 'write', 'writer', 'writing', 'written', 'wrong',
  'wrote',
  'yard', 'year', 'year-long', 'yearly', 'years', 'yellow', 'yes', 'yesterday', 'yet', 'yield',
  'yielding', 'you', 'young', 'younger', 'youngest', 'your', 'yours',
  'yourself', 'yourselves', 'youth', 'youths', 'youtube',
  'zeal', 'zero', 'zena', 'zone', 'zoo'
]);

/**
 * Intelligent morphological lookup for regular English plurals, past tense,
 * participles, adverbs, negative prefixes, and derived forms.
 */
function isEnglishWord(w: string): boolean {
  if (!w || w.length === 0) return false;
  const lower = w.toLowerCase();

  // Strict 1-letter check
  if (lower.length === 1) {
    return lower === 'a' || lower === 'i';
  }

  if (BASE_WORDS.has(lower)) return true;

  // Check common suffixes
  if (lower.endsWith('ies') && BASE_WORDS.has(lower.slice(0, -3) + 'y')) return true;
  if (lower.endsWith('ied') && BASE_WORDS.has(lower.slice(0, -3) + 'y')) return true;
  if (lower.endsWith('ier') && BASE_WORDS.has(lower.slice(0, -3) + 'y')) return true;
  if (lower.endsWith('iest') && BASE_WORDS.has(lower.slice(0, -4) + 'y')) return true;
  if (lower.endsWith('ily') && BASE_WORDS.has(lower.slice(0, -3) + 'y')) return true;
  if (lower.endsWith('s') && BASE_WORDS.has(lower.slice(0, -1))) return true;
  if (lower.endsWith('es') && BASE_WORDS.has(lower.slice(0, -2))) return true;
  if (lower.endsWith('ed')) {
    if (BASE_WORDS.has(lower.slice(0, -2)) || BASE_WORDS.has(lower.slice(0, -1))) return true;
  }
  if (lower.endsWith('ing')) {
    if (BASE_WORDS.has(lower.slice(0, -3)) || BASE_WORDS.has(lower.slice(0, -3) + 'e')) return true;
  }
  if (lower.endsWith('ly') && (BASE_WORDS.has(lower.slice(0, -2)) || BASE_WORDS.has(lower.slice(0, -2) + 'e'))) return true;
  if (lower.endsWith('ive') && (BASE_WORDS.has(lower.slice(0, -3)) || BASE_WORDS.has(lower.slice(0, -3) + 'e'))) return true;
  if (lower.endsWith('less') && BASE_WORDS.has(lower.slice(0, -4))) return true;
  if (lower.endsWith('ful') && BASE_WORDS.has(lower.slice(0, -3))) return true;
  if (lower.endsWith('ment') && BASE_WORDS.has(lower.slice(0, -4))) return true;
  if (lower.endsWith('ness') && BASE_WORDS.has(lower.slice(0, -4))) return true;
  if (lower.endsWith('able') && (BASE_WORDS.has(lower.slice(0, -4)) || BASE_WORDS.has(lower.slice(0, -4) + 'e'))) return true;
  if (lower.endsWith('ible') && (BASE_WORDS.has(lower.slice(0, -4)) || BASE_WORDS.has(lower.slice(0, -4) + 'e'))) return true;
  if (lower.endsWith('tion') && (BASE_WORDS.has(lower.slice(0, -4)) || BASE_WORDS.has(lower.slice(0, -4) + 'e'))) return true;
  if (lower.endsWith('sion') && (BASE_WORDS.has(lower.slice(0, -4)) || BASE_WORDS.has(lower.slice(0, -4) + 'e') || BASE_WORDS.has(lower.slice(0, -4) + 'd') || BASE_WORDS.has(lower.slice(0, -4) + 'de'))) return true;

  // Check common prefixes
  if (lower.startsWith('un') && isEnglishWord(lower.slice(2))) return true;
  if (lower.startsWith('in') && isEnglishWord(lower.slice(2))) return true;
  if (lower.startsWith('im') && isEnglishWord(lower.slice(2))) return true;
  if (lower.startsWith('dis') && isEnglishWord(lower.slice(3))) return true;
  if (lower.startsWith('mis') && isEnglishWord(lower.slice(3))) return true;
  if (lower.startsWith('non') && isEnglishWord(lower.slice(3))) return true;

  return false;
}

// High-frequency glued phrases found in Ethiopian national exams
const PHRASE_DICTIONARY: Record<string, string> = {
  'oneofthefollowingstatementsistrue': 'one of the following statements is true',
  'whichoneofthefollowingstatementsistrue': 'Which one of the following statements is true',
  'whichoneofthefollowing': 'Which one of the following',
  'whichofthefollowing': 'Which of the following',
  'accordingtoparagraph': 'according to paragraph',
  'accordingtothepassage': 'according to the passage',
  'thegroupmostresponsibleforthe': 'the group most responsible for the',
  'homelessbeingthewaytheyarereceivedtheleastblame': 'homeless being the way they are received the least blame',
  'thatgroupisthehomeless': 'That group is the homeless',
  'thatgroupisthehomelessthemselves': 'That group is the homeless themselves',
  'ihaveworkedwiththehomeless': 'I have worked with the homeless',
  'forthepasttwoyears': 'For the past two years',
  'thesalvationarmyandatasoupkitcheninaustin': 'the Salvation Army and at a soup kitchen in Austin',
  'iwouldratherreportotherwise': 'I would rather report otherwise',
  'theyareunwillingtodothethingsnecessarytoovercome': 'They are unwilling to do the things necessary to overcome',
  'theymustbearthegreatestpartoftheblamefortheirmanifoldtroubles': 'They must bear the greatest part of the blame for their manifold troubles',
  'noteveryonewhofindshimselfoutofajobandinthestreetistherebecausehewantstobe': 'Not everyone who finds himself out of a job and in the street is there because he/she wants to be',
  'foreverypersontemporarilyhomeless': 'For every person temporarily homeless',
  'thoughtherearemanywhoarechronicallyso': 'though there are many who are chronically so',
  'preferalifeofnoresponsibility': 'prefer a life of no responsibility',
  'preferalifeofnoresponsibilityatall': 'prefer a life of no responsibility at all',
  'soildegradationhasbeenaggravated': 'soil degradation has been aggravated',
  'bypooragriculturalpractices': 'by poor agricultural practices',
  'theseincludeimproperterracing': 'These include improper terracing',
  'thecultivationofsteepandeasilyerodedhillsides': 'the cultivation of steep and easily eroded hillsides',
  'makingthelandincreasinglypoorinquality': 'making the land increasingly poor in quality',
  'makinglandincreasinglypoorinquality': 'making land increasingly poor in quality',
  'atolemmaisathirty-year-oldpersoninmycommunity': 'Ato Lemma is a thirty-year-old person in my community',
  'hiswifewizeromulu,isyoungerthanhimby2years': 'His wife wizero Mulu, is younger than him by 2 years',
  'atolemmaandwiromuluhavefourchildren': 'Ato Lemma and W/ro Mulu have four children',
  'threeoftheirchildrenaregirls': 'Three of their children are girls',
  'boththeteacherandthestudentsareworkingtogetherinthesciencelaboratory': 'Both the teacher and the students are working together in the science laboratory',
  'iamnotasstupidasyouthinkiam': 'I am not as stupid as you think I am',
  'atotadessehasgotascholarship,whoisacleverteacher,inourschool': 'Ato Tadesse has got a scholarship, who is a clever teacher, in our school',
  'edenisinherlatetwenties': 'Eden is in her late twenties',
  'practicespeakingeverydayinfrontofyourfriends': 'Practice speaking every day in front of your friends',
  'whendoyouteachusaboutactiveandpassivevoices': 'When do you teach us about active and passive voices',
  'thinkabouttoday': 'Think about today',
  'tomorrowisanotherday': 'tomorrow is another day',
  'howabouttryinghailegrandhotel': 'How about trying Haile Grand Hotel',
  'moneyshouldn\'tbearewardforgoodwork': "money shouldn't be a reward for good work",
  'moneyshouldntbearewardforgoodwork': "money shouldn't be a reward for good work",
  'whyiszenacrying': 'Why is Zena crying',
  'hedidnotgetfullmarkonhisenglishexam': 'He did not get full mark on his English exam',
  'couldyoutellmewherethedirectorsofficeis': "Could you tell me where the director's office is",
  'couldyoutellmewherethedirector\'sofficeis': "Could you tell me where the director's office is",
  'thankyouforthegoodnews': 'Thank you for the good news',
  'excusemeforsteppingonyourfoot': 'Excuse me for stepping on your foot',
  'iamafraidican\'tagree': "I am afraid I can't agree",
  'iamafraidicantagree': "I am afraid I can't agree",
  'closestinmeaning': 'closest in meaning',
  'canbesynonymouswith': 'can be synonymous with',
  'bestreplacestheword': 'best replaces the word',
  'whatdoestheexpression': 'What does the expression',
  'whatdoestheword': 'What does the word',
  'whatpurposedoesthewriter': 'What purpose does the writer',
  'bestdescribesthispassage': 'best describes this passage',
  'paragraphwritingtypesistheabovesentencesmostlikely': 'paragraph writing types is the above sentences most likely',
  'thisiswhatparagraphwritingthatis': 'This is what paragraph writing that is',
  'thisiswhatparagraphwritingthatismostlikely': 'This is what paragraph writing that is most likely',
  'inparagraph': 'in paragraph',
  'insociety': 'in society',
  'theme aning': 'the meaning',
  'otheroptionsimplycausation': 'Other options imply causation',
  'commaafterintroductoryphrase': 'Comma after introductory phrase',
  'youngerthanhimby2years': 'younger than him by 2 years',
  'tenseremainspresentforpermanent': 'Tense remains present for permanent',
  'fromtheteacher': 'from the teacher',
  'butchallenges': 'but challenges',
  'matchtheteacher': 'match the teacher'
};

/**
 * Segments a single merged word token using dynamic programming.
 */
export function segmentMergedWord(token: string): string {
  if (!token || token.length <= 4) return token;

  // Preserve leading and trailing punctuation, including possessives
  const match = token.match(/^([^a-zA-Z0-9]*)([a-zA-Z0-9\-]+)(['’]s|['’]t)?([^a-zA-Z0-9]*)$/i);
  if (!match) return token;

  const prefix = match[1];
  const core = match[2];
  const possessive = match[3] || '';
  const suffix = match[4];

  const lowerCore = core.toLowerCase();

  // Check phrase dictionary first
  if (PHRASE_DICTIONARY[lowerCore]) {
    return `${prefix}${PHRASE_DICTIONARY[lowerCore]}${possessive}${suffix}`;
  }

  // If already a single valid word and reasonable length, return as is
  if (isEnglishWord(lowerCore) && core.length < 13 && !possessive) {
    return token;
  }

  // If contains spaces already, don't re-segment
  if (core.includes(' ')) {
    return token;
  }

  const n = core.length;
  const dp: number[] = new Array(n + 1).fill(-Infinity);
  const parent: number[] = new Array(n + 1).fill(-1);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] === -Infinity) continue;

    for (let j = i + 1; j <= n; j++) {
      const sub = core.slice(i, j).toLowerCase();

      if (isEnglishWord(sub)) {
        let score = 0;
        if (sub.length === 1) {
          score = -5; // Penalize 1-letter so 'a' and 'i' are only used when needed
        } else if (sub.length === 2) {
          score = ['to', 'in', 'on', 'of', 'at', 'by', 'as', 'is', 'he', 'it', 'we', 'or', 'so', 'if', 'my', 'up', 'do', 'no', 'am', 'an', 'be', 'go', 'me', 'us'].includes(sub) ? 12 : 4;
        } else if (sub.length === 3) {
          score = 16;
        } else {
          score = sub.length * 10;
        }

        const totalScore = dp[i] + score;
        if (totalScore > dp[j]) {
          dp[j] = totalScore;
          parent[j] = i;
        }
      }
    }
  }

  // If no complete path found
  if (dp[n] <= 0 || parent[n] === -1) {
    return token;
  }

  // Backtrack
  const words: string[] = [];
  let curr = n;
  while (curr > 0) {
    const p = parent[curr];
    words.unshift(core.slice(p, curr));
    curr = p;
  }

  if (words.length <= 1) {
    return token;
  }

  // Reconstruct capitalized formatting
  const isAllUpper = /^[A-Z0-9]+$/.test(core);
  const reconstructed = words.map((w, idx) => {
    if (isAllUpper) return w.toUpperCase();
    if (idx === 0 && /^[A-Z]/.test(core)) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }
    return w;
  }).join(' ');

  return `${prefix}${reconstructed}${possessive}${suffix}`;
}

/**
 * Universal de-concatenation engine that scans an entire text, parses tokens,
 * and fixes missing spaces in sentences, paragraphs, and options.
 */
export function deconcatenateEnglishText(text: string): string {
  if (!text) return '';

  // 1. Initial quote, bracket, and punctuation boundary spacing
  let s = text.replace(/([a-zA-Z0-9]+)'([a-zA-Z0-9\s]+)'([a-zA-Z0-9]+)/g, "$1 '$2' $3");
  s = s.replace(/([a-zA-Z0-9]+)'([a-zA-Z0-9\s]+)'/g, "$1 '$2' ");
  s = s.replace(/'([a-zA-Z0-9\s]+)'([a-zA-Z0-9]+)/g, " '$1' $2");
  s = s.replace(/([a-zA-Z])'s([a-zA-Z])/gi, "$1's $2");
  s = s.replace(/([a-z])([A-Z][a-z]+'s)/g, "$1 $2");
  s = s.replace(/([a-zA-Z])'t([a-zA-Z])/gi, "$1't $2");
  s = s.replace(/\[([a-zA-Z0-9\s]+)\]/g, ' [$1] ');
  s = s.replace(/Option([A-E])([a-zA-Z])/g, 'Option $1 $2');
  s = s.replace(/and([A-E])([a-zA-Z])/g, 'and $1 $2');
  s = s.replace(/\btheme aning\b/gi, 'the meaning');

  // 2. Standard punctuation spacing
  s = s.replace(/([,\;\:\?\!])([a-zA-Z])/g, '$1 $2');
  s = s.replace(/(?<!\b(?:e\.g|i\.e|etc|vs|p|pp|Dr|Mr|Mrs|Ms|Prof|fig))\.\s*([A-Z])/g, '. $1');
  s = s.replace(/Option([A-E])is/gi, 'Option $1 is ');
  s = s.replace(/paragraph([0-9]+)/gi, 'paragraph $1');
  s = s.replace(/question([0-9]+)/gi, 'question $1');
  s = s.replace(/([a-zA-Z0-9])"([a-zA-Z0-9])/g, '$1" $2');
  s = s.replace(/"([a-zA-Z0-9])/g, '" $1');
  s = s.replace(/([a-zA-Z0-9])"/g, '$1 "');
  s = s.replace(/\)\s*([a-zA-Z0-9])/g, ') $1');
  s = s.replace(/([a-zA-Z0-9])\s*\(([a-zA-Z0-9])/g, '$1 ($2');
  s = s.replace(/([a-zA-Z0-9])'([A-Z])/g, "$1 ' $2");
  s = s.replace(/([A-Z])'([a-zA-Z])/g, "$1 ' $2");

  // 3. Check phrase dictionary replacements
  for (const [key, replacement] of Object.entries(PHRASE_DICTIONARY)) {
    const regex = new RegExp(key, 'gi');
    s = s.replace(regex, replacement);
  }

  // 3. Process each line and token
  const lines = s.split('\n');
  const processedLines = lines.map(line => {
    const tokens = line.split(/([ \t]+)/);
    const newTokens = tokens.map(tok => {
      if (/^[ \t]+$/.test(tok)) return tok;
      const cleanWord = tok.replace(/[^a-zA-Z]/g, '');
      if (cleanWord.length >= 6) {
        return segmentMergedWord(tok);
      }
      return tok;
    });
    return newTokens.join('');
  });

  let result = processedLines.join('\n');
  result = result.replace(/\btheme aning\b/gi, 'the meaning');
  // Normalize whitespace
  result = result.replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n');
  return result.trim();
}
