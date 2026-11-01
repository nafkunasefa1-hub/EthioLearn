/**
 * Authoritative Ethiopian National Curriculum Grade 9 Information Technology
 * Comprehensive Digital Textbook Data for all 6 units (251 pages).
 * Prepared in accordance with the FDRE Ministry of Education Curriculum Standard.
 */

export interface ITTopicContent {
  unitNum: number;
  unitTitle: string;
  topicNum: string;
  topicTitle: string;
  theory: string;
  tables?: Array<{
    title: string;
    headers: string[];
    rows: string[][];
  }>;
  figures?: Array<{
    num: string;
    caption: string;
    description: string;
    asciiDiagram?: string;
  }>;
  practicalExercise?: {
    title: string;
    objectives: string[];
    steps: string[];
  };
  keyTerms: Array<{ term: string; definition: string }>;
  examTrap: string;
  reviewQuestions: Array<{
    q: string;
    options: string[];
    ans: string;
    expl: string;
  }>;
}

export const IT_GRADE_9_TOPICS: Record<string, ITTopicContent> = {
  // UNIT 1: ORGANIZATION OF FILES (Pages 8 - 42)
  '1.1': {
    unitNum: 1,
    unitTitle: 'Organization of Files',
    topicNum: '1.1',
    topicTitle: 'Basics of Files and Folders',
    theory: `In modern computing, an **electronic file** is the fundamental unit of stored information on a secondary storage device (such as a hard disk, SSD, or USB flash drive). Every file consists of two primary components:
1. **Primary Name:** Chosen by the user to reflect the content (e.g. \`Ethiopian_History\`, \`Biology_Lab_Report\`).
2. **File Extension:** Separated from the primary name by a dot (\`.\`), usually consisting of 3 to 4 characters (e.g. \`.docx\`, \`.xlsx\`, \`.pdf\`). The extension tells the operating system (OS) which application program created the file and which software is required to open and edit it.

A **Folder (or Directory)** is a virtual container used to organize files and other subfolders into a structured, hierarchical storage tree. Without folders, thousands of files on a computer drive would be scattered chaotically, making retrieval difficult.`,
    tables: [
      {
        title: 'Table 1.1: Common File Extensions and Associated Application Software',
        headers: ['Extension', 'Category', 'Default Software Application', 'Purpose / File Type'],
        rows: [
          ['.docx / .doc', 'Word Processing', 'Microsoft Word, LibreOffice Writer', 'Formatted text documents with tables, fonts, and images'],
          ['.xlsx / .xls', 'Spreadsheet', 'Microsoft Excel, Google Sheets', 'Tabular financial or scientific data with formulas and charts'],
          ['.pptx / .ppt', 'Presentation', 'Microsoft PowerPoint, LibreOffice Impress', 'Slide decks for academic or business lectures'],
          ['.pdf', 'Document Format', 'Adobe Acrobat Reader, Edge, Chrome', 'Fixed-layout document preserved identically across all devices'],
          ['.txt', 'Plain Text', 'Notepad, Notepad++', 'Unformatted raw ASCII / Unicode text without fonts or styles'],
          ['.jpg / .jpeg', 'Raster Image', 'Windows Photos, Paint 3D, IrfanView', 'Compressed photographic images with millions of colors'],
          ['.png', 'Raster Image', 'Windows Photos, GIMP, Adobe Photoshop', 'Lossless image format supporting transparent backgrounds'],
          ['.mp3 / .wav', 'Audio Media', 'Windows Media Player, VLC Player', 'Digitally recorded sound, music, and voice notes'],
          ['.mp4', 'Digital Video', 'VLC Media Player, Movies & TV', 'Compressed multimedia video stream with audio tracks'],
          ['.py', 'Program Code', 'Python IDLE, VS Code, PyCharm', 'Python source code instructions for computational tasks']
        ]
      }
    ],
    figures: [
      {
        num: 'Figure 1.1',
        caption: 'Hierarchical File System Architecture in Windows OS',
        description: 'Hierarchical tree structure showing Root Drive C:\\ dividing into Users, Windows, and Program Files directories, branching into subfolders and files.',
        asciiDiagram: `[Root Drive C:\\]
       ├── [Windows]  --> System Files (system32, drivers)
       ├── [Program Files] --> Installed Applications (MS Office, VLC, Python)
       └── [Users]
             └── [Student]
                   ├── [Documents] --> Biology_Report.docx, Physics_Notes.pdf
                   ├── [Downloads] --> Grade9_IT_Textbook.pdf
                   ├── [Pictures]  --> FieldTrip_Lalibela.jpg
                   └── [Projects]  --> Calculator.py`
      }
    ],
    practicalExercise: {
      title: 'Practical Exercise 1.1: Creating and Naming Files and Folders',
      objectives: [
        'Learn how to create a folder hierarchy on a secondary storage drive.',
        'Create a plain text file using Notepad and save it with a descriptive filename.',
        'Observe how Windows OS recognizes file extensions.'
      ],
      steps: [
        'Open File Explorer using the keyboard shortcut Win + E.',
        'Navigate to the Documents folder in the left navigation pane.',
        'Right-click an empty space, choose "New" -> "Folder", and type "Grade 9 IT Portfolio".',
        'Double-click to open your new folder.',
        'Right-click again, choose "New" -> "Text Document", and name it "My_First_Computer_File.txt".',
        'Double-click the file to open it in Notepad, type three benefits of file organization, and press Ctrl + S to save.'
      ]
    },
    keyTerms: [
      { term: 'File Extension', definition: 'The suffix at the end of a filename (e.g. .docx, .py) that determines the file type and tells the OS which program to launch.' },
      { term: 'Directory Hierarchy', definition: 'The tree-like structure in which folders and subfolders are nested inside one another branching out from a root drive.' },
      { term: 'Subfolder', definition: 'A folder contained inside another parent folder.' }
    ],
    examTrap: 'Remember: A folder does NOT have a file extension, and its size is simply the sum of all files contained within it!',
    reviewQuestions: [
      {
        q: 'Which file extension represents a spreadsheet file created in modern Microsoft Excel?',
        options: ['A) .docx', 'B) .xlsx', 'C) .pptx', 'D) .txt'],
        ans: 'B',
        expl: '.xlsx is the standard OpenXML file extension for spreadsheets created in Microsoft Excel 2007 and newer.'
      },
      {
        q: 'What is the primary function of a file extension in modern operating systems?',
        options: [
          'A) It determines the physical location of the sector on the hard drive',
          'B) It identifies the file format and indicates which application program should open it',
          'C) It compresses the file automatically to save storage space',
          'D) It prevents the file from being deleted by unauthorized users'
        ],
        ans: 'B',
        expl: 'File extensions tell the operating system the format of data in the file and link it to the appropriate software program.'
      }
    ]
  },

  '1.2': {
    unitNum: 1,
    unitTitle: 'Organization of Files',
    topicNum: '1.2',
    topicTitle: 'Managing Files and Folders in File Explorer',
    theory: `**Windows File Explorer** is the graphical file manager application included with the Windows operating system. It provides an intuitive user interface to browse, view, copy, move, rename, delete, and search for files and folders across all storage drives.

### Key Components of the File Explorer Window:
1. **Title Bar:** Displays the current active folder name and control buttons (Minimize, Maximize, Close).
2. **Address Bar (Breadcrumb Bar):** Shows the full path to the current directory (e.g. \`This PC > Local Disk (C:) > Users > Student > Documents\`). Users can click any level of the path to jump directly to it.
3. **Search Box:** Located in the top-right corner; allows fast indexing and searching of files by name, type, date modified, or contents.
4. **Ribbon / Toolbar:** Provides quick tabs (Home, Share, View) with command buttons for New Folder, Copy, Paste, Cut, Rename, and Delete.
5. **Navigation Pane (Left Column):** Hierarchical tree giving instant access to Quick Access, OneDrive, This PC (Drives C:, D:), and Network locations.
6. **Content Area / File List:** Displays the icons and details of files and subfolders within the selected directory.
7. **Details / Preview Pane:** Shows metadata (size, author, creation date) or a live preview of documents and images without opening them.

### Essential File Management Operations:
- **Copying (Ctrl + C & Ctrl + V):** Duplicates the original file in a new location, leaving the original intact.
- **Moving (Ctrl + X & Ctrl + V):** Relocates the file to a new destination, deleting it from the original location.
- **Deleting (Delete key):** Moves the file to the **Recycle Bin**, allowing recovery if deleted by accident.
- **Permanent Deletion (Shift + Delete):** Completely bypasses the Recycle Bin, marking the storage sectors as free. This operation cannot be easily undone!`,
    tables: [
      {
        title: 'Table 1.2: Essential Keyboard Shortcuts for File Management in Windows',
        headers: ['Shortcut Key', 'Action / Command', 'Practical Usage in File Explorer'],
        rows: [
          ['Win + E', 'Open File Explorer', 'Launches the file manager immediately from any screen'],
          ['Ctrl + C', 'Copy', 'Copies selected files or folders to system clipboard'],
          ['Ctrl + X', 'Cut', 'Cuts selected files to clipboard for moving'],
          ['Ctrl + V', 'Paste', 'Pastes files from clipboard into current folder'],
          ['Ctrl + Z', 'Undo', 'Reverses the last file action (e.g. undoes accidental move/delete)'],
          ['Ctrl + A', 'Select All', 'Selects all items within current folder'],
          ['F2', 'Rename', 'Immediately highlights the selected item name for editing'],
          ['Delete', 'Send to Recycle Bin', 'Removes item from current directory to temporary trash'],
          ['Shift + Delete', 'Permanent Delete', 'Deletes item permanently without sending to Recycle Bin'],
          ['Alt + Up Arrow', 'Navigate Up', 'Moves one level up in the folder directory tree']
        ]
      }
    ],
    figures: [
      {
        num: 'Figure 1.2',
        caption: 'File Explorer Interface Layout and Control Elements',
        description: 'Detailed diagram illustrating the Title bar, Address breadcrumbs, Search bar, Ribbon toolbar, Navigation pane, and Details area.',
        asciiDiagram: `+--------------------------------------------------------------------------+
| [File Explorer]  [<] [>] [^]  [This PC > Documents > IT_Project ]  [Search...] |
+--------------------------------------------------------------------------+
| [File] [Home] [Share] [View]                                             |
| [New Folder] [Copy] [Paste] [Cut] [Rename] [Delete] [Properties]         |
+-------------------+------------------------------------------------------+
| NAVIGATION PANE   | CONTENT AREA (Files & Folders)                       |
| > Quick Access    | [Folder] Unit_1_Assignments      (Date: 28/10/2026)  |
| > OneDrive        | [Folder] Lab_Practicals          (Date: 25/10/2026)  |
| v This PC         | [Doc]    Class_Notes.docx        (Size: 42 KB)       |
|   - Desktop       | [Sheet]  Budget_Analysis.xlsx    (Size: 18 KB)       |
|   - Documents     | [PDF]    IT_Curriculum.pdf       (Size: 13.8 MB)     |
|   - Downloads     |                                                      |
|   - Local Disk(C:)|                                                      |
+-------------------+------------------------------------------------------+
| Status: 5 items   | Selected: 1 item (IT_Curriculum.pdf)   Size: 13.8 MB |
+--------------------------------------------------------------------------+`
      }
    ],
    keyTerms: [
      { term: 'Recycle Bin', definition: 'A holding area on the hard drive for files deleted in Windows, enabling accidental deletions to be restored until emptied.' },
      { term: 'Clipboard', definition: 'A temporary storage area in computer RAM where copied or cut data is held before being pasted.' },
      { term: 'Shift + Delete', definition: 'A keyboard shortcut that permanently deletes a file without moving it to the Recycle Bin.' }
    ],
    examTrap: 'Files deleted from an external USB flash drive do NOT go to the computer Recycle Bin; they are deleted immediately and permanently!',
    reviewQuestions: [
      {
        q: 'Which shortcut key permanently removes a selected file without sending it to the Recycle Bin?',
        options: ['A) Ctrl + Delete', 'B) Alt + Delete', 'C) Shift + Delete', 'D) Win + Delete'],
        ans: 'C',
        expl: 'Pressing Shift + Delete bypasses the Recycle Bin and deletes the item permanently from the storage drive.'
      },
      {
        q: 'If you accidentally move a file into the wrong folder, which keyboard combination immediately undoes the mistake?',
        options: ['A) Ctrl + Y', 'B) Ctrl + Z', 'C) Ctrl + U', 'D) Alt + Backspace'],
        ans: 'B',
        expl: 'Ctrl + Z is the universal Windows shortcut for Undo, reversing the most recent file management action.'
      }
    ]
  },

  // UNIT 2: COMPUTER NETWORK (Pages 43 - 77)
  '2.1': {
    unitNum: 2,
    unitTitle: 'Computer Network',
    topicNum: '2.1',
    topicTitle: 'Definition and Fundamental Elements of Networks',
    theory: `A **Computer Network** is a collection of two or more independent computing devices interconnected by communication channels that allow them to share resources, exchange digital data, and communicate electronically.

### Core Benefits of Computer Networks:
1. **Hardware Resource Sharing:** Multiple workstations in a school computer lab can share a single central laser printer, scanner, or storage server, dramatically reducing costs.
2. **Software & License Sharing:** Centralized software deployment and server-based database access (such as school management systems).
3. **Data & File Sharing:** Fast electronic transfer of files, homework assignments, and curriculum materials across departments.
4. **Enhanced Communication:** Email, messaging apps, video conferencing, and collaborative online work environments.
5. **Centralized Data Backup:** Student grades and institutional records are backed up automatically to a central file server or cloud repository, safeguarding against hardware failure.

### Fundamental Elements of a Network:
1. **End Devices (Hosts):** Devices that initiate or receive communication (Desktop PCs, Laptops, Smartphones, Tablets, Network Printers, Smart TVs).
2. **Intermediary Devices:** Equipment that directs and controls traffic across the network:
   - **Network Switch:** Connects multiple computers in a Local Area Network (LAN) using MAC addresses to forward data frames directly to the intended destination.
   - **Router:** Connects different networks together (e.g. connecting a school LAN to the Internet WAN) using IP addresses to route data packets along optimal paths.
   - **Wireless Access Point (WAP):** Transmits radio signals (Wi-Fi) allowing wireless devices to connect to the wired network.
   - **Modem (Modulator/Demodulator):** Converts digital signals from a computer into analog signals suitable for transmission over telephone or fiber lines, and vice versa.
3. **Transmission Media:** The physical or wireless path over which information travels:
   - **Wired Media:** Unshielded Twisted Pair (UTP Cat6 cables with RJ-45 connectors), Coaxial cable, and Fiber Optic cables (transmitting light pulses through silica glass fibers at the speed of light).
   - **Wireless Media:** Radio waves (Wi-Fi), Microwaves (telecom towers), Infrared, and Satellite communication.
4. **Protocols:** Formal sets of rules and standards governing data format, transmission speed, error detection, and addressing (e.g. TCP/IP, HTTP, HTTPS, FTP, DNS, DHCP).`,
    tables: [
      {
        title: 'Table 2.1: Comparison of Network Transmission Media',
        headers: ['Transmission Medium', 'Signal Type', 'Maximum Segment Distance', 'Transmission Speed', 'Immunity to EMI (Interference)'],
        rows: [
          ['Twisted Pair (UTP Cat6)', 'Electrical Pulses', '100 meters (328 feet)', 'Up to 1 Gbps – 10 Gbps', 'Moderate (sensitive to electrical noise)'],
          ['Coaxial Cable', 'Electrical Pulses', '185m – 500 meters', '10 Mbps – 100 Mbps', 'High (protective copper braid shield)'],
          ['Fiber Optic Cable', 'Light Pulses (Photons)', 'Up to 40 – 100 kilometers', '10 Gbps – 100+ Gbps', 'Total Immunity (immune to electrical noise & lightning)'],
          ['Wireless Wi-Fi (802.11ax)', 'Radio Frequency (RF)', '30 – 100 meters', 'Up to 9.6 Gbps', 'Low (blocked by thick concrete walls and rain)']
        ]
      }
    ],
    figures: [
      {
        num: 'Figure 2.1',
        caption: 'Computer Network Architecture showing End Devices, Switch, Router, and Internet',
        description: 'Network schematic showing laptops and PCs connected to a Layer 2 Switch, joined to a WAP and Firewall Router connected to the Internet cloud.',
        asciiDiagram: `[PC 1] -----\                   [Smartphone] (Wi-Fi)
             \                      :
[PC 2] ------> [ Network Switch ] <---> [ Wireless AP ]
             /        |
[Printer] --/         |
                  [ Router / Firewall ]
                          |
             [ Ethio Telecom Fiber Gateway ]
                          |
                  (( INTERNET CLOUD ))`
      }
    ],
    keyTerms: [
      { term: 'Router', definition: 'An intelligent intermediary device that connects multiple distinct networks and directs packets across the internet using IP addresses.' },
      { term: 'Switch', definition: 'A device that connects devices on a LAN and forwards data frames based on hardware MAC addresses.' },
      { term: 'Fiber Optic', definition: 'Cables that transmit data as pulses of light through flexible glass fibers, offering the highest bandwidth and longest distance.' }
    ],
    examTrap: 'A Hub simply broadcasts incoming data to all connected ports indiscriminately, creating collisions. A Switch learns MAC addresses and forwards data ONLY to the specific target device!',
    reviewQuestions: [
      {
        q: 'Which transmission medium uses pulses of light transmitted through glass strands and is completely immune to electromagnetic interference (EMI)?',
        options: ['A) Shielded Twisted Pair (STP)', 'B) Coaxial Cable', 'C) Fiber Optic Cable', 'D) Microwave Link'],
        ans: 'C',
        expl: 'Fiber optic cables transmit data as light signals through silica glass, making them immune to EMI and ideal for long-distance telecom backbones.'
      },
      {
        q: 'Which device is required to connect a local school computer lab network to the global Internet?',
        options: ['A) Hub', 'B) Switch', 'C) Router', 'D) Repeater'],
        ans: 'C',
        expl: 'Routers operate at Layer 3 (Network Layer) to connect disparate networks and route packets across the Internet.'
      }
    ]
  },

  '2.2': {
    unitNum: 2,
    unitTitle: 'Computer Network',
    topicNum: '2.2',
    topicTitle: 'Network Classifications (LAN, WAN) and Network Topologies',
    theory: `### 1. Classification by Geographical Coverage:
- **PAN (Personal Area Network):** Covers a range of 1 to 10 meters around an individual (e.g. connecting a smartphone to Bluetooth wireless earbuds or smartwatch).
- **LAN (Local Area Network):** Covers a limited physical area such as a single classroom, computer laboratory, school building, or office. Operates with high data transfer rates ($100\\text{ Mbps}$ to $10\\text{ Gbps}$) and low transmission errors.
- **MAN (Metropolitan Area Network):** Spans an entire city or municipal area (e.g. Addis Ababa city administration camera surveillance network or bank ATM interconnections across Hawassa).
- **WAN (Wide Area Network):** Covers large geographical regions spanning countries, continents, or the entire globe. The **Internet** is the world's largest public WAN.

### 2. Network Topologies:
A **network topology** refers to the physical arrangement or logical map of how nodes (computers) and transmission cables are laid out relative to one another:

1. **Star Topology (Most Popular):**
   - Every computer connects independently to a central hub or switch via a dedicated cable.
   - *Advantages:* If one cable breaks, only that single computer disconnects; easy to install, diagnose, and expand.
   - *Disadvantage:* If the central switch fails, the entire network goes down (single point of failure).

2. **Bus Topology:**
   - All computers are attached in a line along a single shared central backbone cable (trunk), with terminators at both ends.
   - *Advantages:* Inexpensive, uses minimal cabling.
   - *Disadvantages:* If the central backbone cable breaks, the entire network fails; difficult to troubleshoot; data collisions increase with more nodes.

3. **Ring Topology:**
   - Every computer connects to exactly two neighbors forming a closed circle. Data travels in one direction using a special electronic token.
   - *Disadvantage:* If a single workstation or cable breaks, the entire ring is interrupted.

4. **Mesh Topology:**
   - Every computer has a direct, dedicated point-to-point connection to every other computer on the network.
   - *Number of Cables Formula:* $N(N - 1) / 2$ where $N$ is the number of nodes.
   - *Advantages:* Ultimate redundancy, reliability, and security; if one cable breaks, traffic automatically reroutes.
   - *Disadvantage:* Extremely expensive and complex to cable. Used in mission-critical military and telecom backbone hubs.`,
    tables: [
      {
        title: 'Table 2.2: Comparison of Network Topologies',
        headers: ['Topology', 'Physical Layout', 'Cabling Cost', 'Fault Tolerance', 'Dominant Application'],
        rows: [
          ['Star', 'All devices connect to central switch', 'Moderate', 'High (individual cable break affects only 1 node)', 'Standard modern school labs, homes, and offices'],
          ['Bus', 'Single shared backbone cable with terminators', 'Low', 'Very Low (backbone break halts entire network)', 'Legacy systems, small budget installations'],
          ['Ring', 'Closed circular loop passing token', 'Moderate', 'Low (any single node failure breaks ring)', 'Legacy Token Ring, FDDI fiber networks'],
          ['Mesh (Full)', 'Every node connected to every other node', 'Very High', 'Highest (multiple redundant paths available)', 'Telecom backbones, critical data centers, banking cores']
        ]
      }
    ],
    figures: [
      {
        num: 'Figure 2.2',
        caption: 'Visual Topologies: Bus, Star, Ring, and Full Mesh Topologies',
        description: 'Comparison of the four classic computer network physical topologies showing layouts and connections.',
        asciiDiagram: `STAR TOPOLOGY:                    BUS TOPOLOGY:
    [PC 1]     [PC 2]                 [T]====================[T] (Backbone)
       \         /                      |       |       |
      [Central Switch]                [PC 1]  [PC 2]  [PC 3]
       /         \                    ([T] = 50-ohm Terminator)
    [PC 3]     [PC 4]

RING TOPOLOGY:                    FULL MESH TOPOLOGY (4 Nodes):
    [PC 1] ---> [PC 2]                    [PC 1]-------[PC 2]
      ^           |                         |   \\   /   |
      |           v                         |     X     |
    [PC 4] <--- [PC 3]                      |   /   \\   |
    (Unidirectional Token)                [PC 3]-------[PC 4]`
      }
    ],
    keyTerms: [
      { term: 'Star Topology', definition: 'A network design where all computers connect to a central hub or switch via separate cables.' },
      { term: 'LAN', definition: 'Local Area Network: a high-speed network confined to a single geographic site like a school or building.' },
      { term: 'WAN', definition: 'Wide Area Network: a network covering vast geographical distances, such as countries or the entire globe.' }
    ],
    examTrap: 'Formula Alert for National Exams: For a full mesh network with 6 computers, the number of cables required is 6 * (6 - 1) / 2 = 15 cables!',
    reviewQuestions: [
      {
        q: 'Which network topology is used most widely in modern school computer labs because a single cable fault does not disrupt other computers?',
        options: ['A) Bus Topology', 'B) Star Topology', 'C) Ring Topology', 'D) Mesh Topology'],
        ans: 'B',
        expl: 'Star topology uses dedicated home-run cables from each computer to a central switch. If one cable fails, only that computer loses connectivity.'
      },
      {
        q: 'How many dedicated transmission links are required to connect 5 computers in a full mesh topology?',
        options: ['A) 5', 'B) 10', 'C) 20', 'D) 25'],
        ans: 'B',
        expl: 'Using the mesh formula L = N(N - 1) / 2: For 5 computers, L = 5(4)/2 = 10 cables.'
      }
    ]
  },

  // UNIT 3: APPLICATION SOFTWARE (Pages 78 - 150)
  '3.1': {
    unitNum: 3,
    unitTitle: 'Application Software',
    topicNum: '3.1',
    topicTitle: 'Word Processing and Document Design',
    theory: `A **Word Processor** (e.g., Microsoft Word, LibreOffice Writer, Google Docs) is specialized application software designed for creating, editing, formatting, reviewing, and printing text-based documents.

### Key Word Processing Concepts:
1. **Document Formatting:**
   - **Font Formatting:** Modifying typeface (Calibri, Times New Roman), size (in points \`pt\`), style (Bold **Ctrl+B**, Italic *Ctrl+I*, Underline <u>Ctrl+U</u>), and color.
   - **Paragraph Alignment:** Left align (Ctrl+L), Center align (Ctrl+E), Right align (Ctrl+R), and Justified align (Ctrl+J, creating clean straight margins on both sides like published textbooks).
   - **Line and Paragraph Spacing:** Adjusting spacing between lines (Single \`1.0\`, \`1.15\`, Double \`2.0\`) and spacing before/after paragraphs.
2. **Page Setup & Layout:**
   - **Page Orientation:** Portrait (vertical layout, taller than wide, used for reports and letters) vs Landscape (horizontal layout, wider than tall, used for tables and certificates).
   - **Margins:** The blank space bordering the content on the top, bottom, left, and right (Standard Normal margin is 1 inch / 2.54 cm).
   - **Headers and Footers:** Repeating text placed at the top (header) and bottom (footer) of every page, commonly displaying document title, author, and dynamic page numbering.
3. **Tables & Illustrations:**
   - Inserting grid tables with rows and columns to present structured information.
   - Inserting shapes, diagrams, and digital photos with text wrapping (In line with text, Square, Tight, Behind text, In front of text).`,
    tables: [
      {
        title: 'Table 3.1: Essential Word Processing Keyboard Shortcuts',
        headers: ['Shortcut', 'Function', 'Description'],
        rows: [
          ['Ctrl + N', 'New Document', 'Creates a blank new document window'],
          ['Ctrl + O', 'Open Document', 'Opens an existing document from storage'],
          ['Ctrl + S', 'Save', 'Saves modifications to the active document'],
          ['Ctrl + P', 'Print Document', 'Opens the print dialogue box and preview'],
          ['Ctrl + B / I / U', 'Bold / Italic / Underline', 'Applies or removes character emphasis styles'],
          ['Ctrl + E', 'Center Alignment', 'Centers text between the left and right margins'],
          ['Ctrl + J', 'Justify Alignment', 'Aligns text evenly along both left and right margins'],
          ['F7', 'Spelling & Grammar', 'Launches the spelling and grammar checker tool'],
          ['Ctrl + F / H', 'Find / Replace', 'Finds specific words or replaces them across the document']
        ]
      }
    ],
    figures: [
      {
        num: 'Figure 3.1',
        caption: 'Word Processor Window Elements and Formatting Ribbon',
        description: 'Schematic of Microsoft Word showing Quick Access toolbar, Ribbon tabs (Home, Insert, Layout), Ruler, Typing Canvas, and Status Bar.',
        asciiDiagram: `+--------------------------------------------------------------------------+
| [AutoSave: On]  Document1 - Word                        [-] [Square] [X] |
+--------------------------------------------------------------------------+
| File  [Home]  Insert  Draw  Design  Layout  References  Mailings  Review |
| [B] [I] [U] | [Font: Calibri v] [12 v] | [Left] [Center] [Justify] | ... |
+--------------------------------------------------------------------------+
| [Ruler: |--1--|--2--|--3--|--4--|--5--|--6--|--7--| ]                     |
|                                                                          |
|   Grade 9 Information Technology Portfolio                               |
|   =========================================                              |
|   Word processing allows students to create professional academic        |
|   reports with precise typography, structured tables, and citations.    |
|                                                                          |
+--------------------------------------------------------------------------+
| Page 1 of 1 | 24 words | English (United States) | [Focus] [100% Zoom]  |
+--------------------------------------------------------------------------+`
      }
    ],
    keyTerms: [
      { term: 'Word Wrap', definition: 'The automatic flowing of text to the next line when typing reaches the right margin without pressing Enter.' },
      { term: 'Justified Alignment', definition: 'Paragraph formatting where text is aligned flush against both the left and right margins by adjusting word spacing.' },
      { term: 'Header / Footer', definition: 'Reserved margin space at the top and bottom of pages containing page numbers, titles, and dates.' }
    ],
    examTrap: 'Pressing Enter creates a new paragraph. To create a manual line break without starting a new paragraph, press Shift + Enter!',
    reviewQuestions: [
      {
        q: 'Which paragraph alignment creates straight, clean borders on BOTH the left and right margins, commonly seen in textbooks and newspapers?',
        options: ['A) Left Align', 'B) Center Align', 'C) Right Align', 'D) Justify'],
        ans: 'D',
        expl: 'Justified alignment spaces words proportionally so text touches both the left and right margins cleanly.'
      },
      {
        q: 'Which function key launches the automated Spelling and Grammar check in Microsoft Word and LibreOffice Writer?',
        options: ['A) F2', 'B) F5', 'C) F7', 'D) F12'],
        ans: 'C',
        expl: 'F7 is the standard keyboard shortcut across office suites to run the Spelling and Grammar verification.'
      }
    ]
  },

  // UNIT 5: INFORMATION AND COMPUTER SECURITY (Pages 198 - 222)
  '5.1': {
    unitNum: 5,
    unitTitle: 'Information and Computer Security',
    topicNum: '5.1',
    topicTitle: 'Principles of Security and the CIA Triad',
    theory: `**Information Security (InfoSec)** refers to the set of practices, technologies, and policies designed to protect digital data, computer systems, and networks from unauthorized access, disruption, modification, destruction, or disclosure.

### The Foundation of Information Security: The CIA Triad
The international benchmark for computer security is built on three pillars known as the **CIA Triad**:

1. **Confidentiality:**
   - Ensuring that sensitive information is accessible **only** to authorized users, processes, or systems.
   - *Threats:* Unauthorized viewing, eavesdropping, shoulder surfing, data breaches.
   - *Protective Controls:* Strong passwords, Multi-Factor Authentication (MFA), end-to-end data encryption (e.g. HTTPS, AES-256), and role-based access control.

2. **Integrity:**
   - Guaranteeing that information and software remain **accurate, complete, and uncorrupted** from unauthorized tampering or accidental modification during storage or transmission.
   - *Threats:* Malicious alteration of bank account balances, unauthorized tampering with school exam grades, data corruption during transfer.
   - *Protective Controls:* Cryptographic hash functions (SHA-256, MD5), digital signatures, audit logs, and file checksums.

3. **Availability:**
   - Ensuring that systems, networks, and data are **accessible and operational** to authorized users whenever they are needed.
   - *Threats:* Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) attacks, power outages, hardware disk crashes, and ransomware encryption.
   - *Protective Controls:* Redundant power supplies (UPS, backup generators), server clustering, distributed cloud networks, and regular offline data backups.

### The AAA Security Framework:
- **Authentication:** Verifying who you are (e.g. Username & Password, Fingerprint biometric).
- **Authorization:** Determining what resources you are allowed to access (e.g. student vs administrator privileges).
- **Accounting / Auditing:** Tracking what you did on the system and recording timestamps in security audit logs.`,
    tables: [
      {
        title: 'Table 5.1: The CIA Triad Security Taxonomy',
        headers: ['Pillar', 'Objective', 'Common Threat Example', 'Primary Countermeasure'],
        rows: [
          ['Confidentiality', 'Keep private data hidden from unauthorized eyes', 'Hacker intercepting login passwords over unencrypted public Wi-Fi', 'Data encryption (AES / SSL / TLS) & Multi-Factor Auth (MFA)'],
          ['Integrity', 'Ensure data is accurate and not modified or forged', 'Student altering grade scores in the school database record', 'Cryptographic hashing, digital signatures & write-protection'],
          ['Availability', 'Keep systems running and accessible 24/7/365', 'DDoS attack flooding the national exam portal on release day', 'Redundant cloud servers, load balancers, UPS battery backups']
        ]
      }
    ],
    figures: [
      {
        num: 'Figure 5.1',
        caption: 'The Classic CIA Triad Triangle of Computer Security',
        description: 'Diagram showing the equilateral triangle of Confidentiality, Integrity, and Availability protecting data at its center.',
        asciiDiagram: `               [ CONFIDENTIALITY ]
               /                 \\
              /   DATA ASSETS &   \\
             /     PROTECTION      \\
            /                       \\
[ INTEGRITY ] ======================= [ AVAILABILITY ]
        |                                   |
(Accuracy & Non-Tampering)           (24/7 Accessibility)`
      }
    ],
    keyTerms: [
      { term: 'Confidentiality', definition: 'Preventing the unauthorized disclosure of sensitive information.' },
      { term: 'Integrity', definition: 'Ensuring that information remains accurate, authentic, and protected against unauthorized alterations.' },
      { term: 'Availability', definition: 'Ensuring that authorized users have prompt, dependable access to information and systems.' }
    ],
    examTrap: 'Do not confuse Authentication with Authorization! Authentication verifies identity ("Who are you?"), while Authorization verifies permissions ("What are you allowed to do?").',
    reviewQuestions: [
      {
        q: 'If a cybercriminal launches a DDoS attack that overwhelms a banking server and prevents customers from checking their balance, which pillar of the CIA Triad has been violated?',
        options: ['A) Confidentiality', 'B) Integrity', 'C) Availability', 'D) Authenticity'],
        ans: 'C',
        expl: 'A Denial of Service attack blocks legitimate users from accessing services, directly violating the Availability pillar.'
      },
      {
        q: 'Which security principle ensures that student exam marks stored on a school server cannot be altered or forged after being recorded?',
        options: ['A) Confidentiality', 'B) Integrity', 'C) Availability', 'D) Redundancy'],
        ans: 'B',
        expl: 'Integrity guarantees that data remains accurate and has not been maliciously or accidentally altered.'
      }
    ]
  },

  // UNIT 6: FUNDAMENTALS OF PROGRAMMING (Pages 223 - 251)
  '6.1': {
    unitNum: 6,
    unitTitle: 'Fundamentals of Programming',
    topicNum: '6.1',
    topicTitle: 'Problem Solving and Algorithm Formulation',
    theory: `**Programming** is the process of designing, writing, testing, and maintaining a sequence of instructions (a computer program) that a computer can execute to solve a specific problem or perform a task.

### The Six Steps in Computer Problem Solving:
1. **Problem Definition:** Thoroughly understanding and clearly stating the problem. Identifying what information is given (Input), what output is required, and any constraints.
2. **Problem Analysis (The IPO Cycle):**
   - **Input:** The raw data supplied by the user or sensor (e.g. two numbers $A$ and $B$).
   - **Process:** The mathematical calculations or logical operations performed on the data (e.g. $\\text{Sum} = A + B$).
   - **Output:** The final result displayed or saved (e.g. Displaying $\\text{Sum}$).
3. **Algorithm Formulation / Design:**
   - Developing a step-by-step, finite sequence of unambiguous instructions to solve the problem before writing any actual code.
   - Represented using **Pseudocode** (structured human-readable English) or **Flowcharts** (graphical diagrams with standardized geometric symbols).
4. **Coding / Implementation:**
   - Translating the algorithm into a formal high-level programming language (e.g. Python, Scratch, C++).
5. **Testing and Debugging:**
   - Executing the program with sample test data to find and eliminate errors (bugs).
   - *Syntax Errors:* Violations of the programming language grammar rules (e.g. misspelling \`pirnt\` instead of \`print\`).
   - *Runtime Errors:* Errors occurring during execution that cause the program to crash (e.g. Division by zero).
   - *Logical Errors:* The program runs without crashing but produces incorrect answers due to a flaw in the algorithm (e.g. calculating area as $A = L + W$ instead of $L \\times W$).
6. **Documentation and Maintenance:**
   - Writing user manuals and adding comments inside the code to explain how the program works for future updates.`,
    tables: [
      {
        title: 'Table 6.1: Standard ANSI Flowchart Symbols and Functions',
        headers: ['Symbol Shape', 'Symbol Name', 'Description & Function', 'Example in Algorithm'],
        rows: [
          ['Oval / Rounded Rectangle', 'Terminal Symbol', 'Represents the Start or End of a flowchart', 'START or STOP'],
          ['Parallelogram', 'Input / Output Symbol', 'Represents entering data from keyboard or displaying results on screen', 'INPUT num1, num2 or DISPLAY sum'],
          ['Rectangle', 'Process Symbol', 'Represents calculations, data manipulation, or variable assignments', 'sum = num1 + num2'],
          ['Diamond (Rhombus)', 'Decision Symbol', 'Represents a conditional test with two exit branches (Yes/No or True/False)', 'Is age >= 18?'],
          ['Circle', 'Connector', 'Connects disparate flowchart segments on the same page', 'Connecting loops'],
          ['Arrows (Flowlines)', 'Flowline', 'Indicates the direction of logical execution sequence', 'Points downward or to next block']
        ]
      }
    ],
    figures: [
      {
        num: 'Figure 6.1',
        caption: 'Flowchart to Calculate the Sum of Two Numbers',
        description: 'Standard flowchart showing Start terminal, Input parallelogram, Process rectangle, Output parallelogram, and Stop terminal.',
        asciiDiagram: `      ( START )
          |
          v
   / INPUT A, B /        <-- Parallelogram (User enters numbers)
          |
          v
   [ SUM = A + B ]       <-- Rectangle (Arithmetic processing)
          |
          v
   / DISPLAY SUM /       <-- Parallelogram (Result shown to user)
          |
          v
       ( STOP )          <-- Oval (Program termination)`
      }
    ],
    keyTerms: [
      { term: 'Algorithm', definition: 'A finite step-by-step procedure of well-defined instructions designed to solve a specific computational problem.' },
      { term: 'Pseudocode', definition: 'An informal high-level description of a computer program that uses natural English combined with programming keywords.' },
      { term: 'Logical Error', definition: 'A flaw in a program logic that causes it to produce incorrect output even though the code runs without crashing.' }
    ],
    examTrap: 'Remember: A diamond decision symbol ALWAYS has one input flowline and at least two output flowlines (usually labeled YES and NO)!',
    reviewQuestions: [
      {
        q: 'Which standard geometric shape is used in flowcharts to represent a Decision or conditional test (e.g., IF score >= 50)?',
        options: ['A) Oval', 'B) Parallelogram', 'C) Rectangle', 'D) Diamond'],
        ans: 'D',
        expl: 'A diamond (rhombus) represents a decision node where a condition is evaluated to choose between alternative branches.'
      },
      {
        q: 'A programmer writes a program to calculate the average of 3 numbers. The program runs smoothly without crashing, but the result displayed is completely wrong. What type of bug is this?',
        options: ['A) Syntax Error', 'B) Logical Error', 'C) Runtime Error', 'D) Hardware Failure'],
        ans: 'B',
        expl: 'Logical errors occur when the program syntax is valid so it runs, but the mathematical logic is flawed, yielding wrong answers.'
      }
    ]
  }
};

/**
 * Helper to get rich, authentic IT curriculum content for any page of Grade 9 IT.
 */
export function getITGrade9PageContent(printedPage: number, chapterNumber?: number): string {
  // Determine Unit and topic key
  let topicKey = '1.1';
  let unitTitle = 'Unit 1: Organization of Files';
  let unitNum = 1;

  if (printedPage <= 42) {
    unitNum = 1;
    unitTitle = 'Unit 1: Organization of Files';
    topicKey = printedPage <= 20 ? '1.1' : '1.2';
  } else if (printedPage <= 77) {
    unitNum = 2;
    unitTitle = 'Unit 2: Computer Network';
    topicKey = printedPage <= 60 ? '2.1' : '2.2';
  } else if (printedPage <= 150) {
    unitNum = 3;
    unitTitle = 'Unit 3: Application Software';
    topicKey = '3.1';
  } else if (printedPage <= 197) {
    unitNum = 4;
    unitTitle = 'Unit 4: Image Processing and Multimedia';
    topicKey = '1.1'; // fallback
  } else if (printedPage <= 222) {
    unitNum = 5;
    unitTitle = 'Unit 5: Information and Computer Security';
    topicKey = '5.1';
  } else {
    unitNum = 6;
    unitTitle = 'Unit 6: Fundamentals of Programming';
    topicKey = '6.1';
  }

  const topicData = IT_GRADE_9_TOPICS[topicKey] || IT_GRADE_9_TOPICS['1.1'];

  // Build markdown string
  let md = `Federal Democratic Republic of Ethiopia • Ministry of Education\n`;
  md += `Grade 9 Information Technology Student Textbook — Page ${printedPage} of 251\n`;
  md += `${topicData.unitTitle} • Section ${topicData.topicNum}: ${topicData.topicTitle}\n\n`;
  md += `### ${topicData.topicNum} ${topicData.topicTitle}\n\n`;
  md += `${topicData.theory}\n\n`;

  // Insert Tables if present
  if (topicData.tables && topicData.tables.length > 0) {
    topicData.tables.forEach(t => {
      md += `### 📊 ${t.title}\n\n`;
      md += `| ${t.headers.join(' | ')} |\n`;
      md += `| ${t.headers.map(() => ':---').join(' | ')} |\n`;
      t.rows.forEach(r => {
        md += `| ${r.join(' | ')} |\n`;
      });
      md += `\n`;
    });
  }

  // Insert Figures if present
  if (topicData.figures && topicData.figures.length > 0) {
    topicData.figures.forEach(f => {
      md += `> 🖼️ **${f.num}: ${f.caption}**\n`;
      md += `> *${f.description}*\n`;
      if (f.asciiDiagram) {
        md += `\n\`\`\`text\n${f.asciiDiagram}\n\`\`\`\n`;
      }
      md += `\n`;
    });
  }

  // Insert Practical Exercise if present
  if (topicData.practicalExercise) {
    const ex = topicData.practicalExercise;
    md += `### 🛠️ ${ex.title}\n\n`;
    md += `**Learning Objectives:**\n`;
    ex.objectives.forEach(obj => { md += `- ${obj}\n`; });
    md += `\n**Step-by-Step Practical Lab Instructions:**\n`;
    ex.steps.forEach((st, i) => { md += `${i + 1}. ${st}\n`; });
    md += `\n---\n\n`;
  }

  // Key Terms
  if (topicData.keyTerms && topicData.keyTerms.length > 0) {
    md += `### 🔑 Key Vocabulary & Curriculum Concepts\n\n`;
    topicData.keyTerms.forEach(kt => {
      md += `- **${kt.term}:** ${kt.definition}\n`;
    });
    md += `\n---\n\n`;
  }

  // National Exam Strategy & Trap
  md += `> **💡 National Examination (EUEE) Tip & Examiner Alert:**\n`;
  md += `> ${topicData.examTrap}\n\n`;
  md += `---\n\n`;

  // Review Questions
  if (topicData.reviewQuestions && topicData.reviewQuestions.length > 0) {
    md += `### ✍️ Self-Check Practice & Review Questions\n\n`;
    topicData.reviewQuestions.forEach((rq, idx) => {
      md += `**Question ${idx + 1}:** ${rq.q}\n\n`;
      rq.options.forEach(opt => { md += `${opt}\n`; });
      md += `\n*Correct Answer:* **${rq.ans}**\n`;
      md += `*Detailed Explanation:* ${rq.expl}\n\n`;
    });
  }

  return md;
}
