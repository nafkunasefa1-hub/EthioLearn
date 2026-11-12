# 🇪🇹💳 EthioLearn AI — Autonomous PayPal MCP & Diaspora Education Sponsorship Platform

> **Official Devpost PayPal AI Hackathon Submission**
> - 🌐 **Live Interactive App (24/7)**: https://nafkunasefa1-ethiolearn-paypal.static.hf.space
> - 🧪 **Postman API & MCP Collection**: [`/postman/EthioLearn_PayPal_AI_Collection.json`](./postman/EthioLearn_PayPal_AI_Collection.json)
> - ⚡ **Judge Instant Access**: Click **"⚡ Devpost Judge / 1-Click Instant Demo Access"** on the login screen (or open the floating **"PayPal AI Hackathon Showcase"** pill in the bottom-right corner at any time).

---

## 🌍 1. The Real-World Problem & The PayPal PPP Multiplier

Every year, over **5 million secondary school students (Grades 9–12)** across Ethiopia prepare for the high-stakes **Ethiopian University Entrance Examination (EUEE)** facing two severe barriers:
1. **Acute Physical Textbook & Prep Scarcity**: Printed textbooks and past EUEE papers are scarce outside major cities, while private exam-prep tutoring costs $50–$150/month—out of reach for 95%+ of families.
2. **Cross-Border Payment Disconnect**: Most Ethiopian students cannot issue international USD cards, while **3+ million Ethiopian diaspora members** across North America, Europe, and the Middle East want a transparent, instant, zero-remittance-fee way to sponsor students' education back home.

### 💡 Why PayPal + Agentic AI Solves This (`$4.99 USD = 100× PPP Impact`)
Through Purchasing Power Parity (PPP), a **$4.99 USD** micro-sponsorship via PayPal (~650 ETB) funds a student's **complete annual curriculum & AI tutoring pass**—delivering the equivalent of **$500+ in private tutoring and printed materials** directly to an Ethiopian scholar's phone or browser with zero wire-transfer friction.

---

## ⚡ 2. Five Core PayPal AI & MCP Innovations

| # | Innovation | Key Implementation | What Judges Can Test Live |
|---|---|---|---|
| **1** | **Official PayPal MCP Server (`JSON-RPC 2.0`)** | `server/paypalMcpServer.ts` & `/api/paypal/mcp` | Exposes **5 autonomous PayPal tools** over both HTTP (`POST /api/paypal/mcp`) and `stdio` (`--stdio` for Claude Desktop, Cursor & Antigravity). |
| **2** | **Autonomous AI Tutor Sponsorship Action Card** | `src/pages/AITutor.tsx` & `/api/paypal/ai-agent/action` | When a student tells the AI Tutor *"I can't afford exam prep, can my uncle in D.C. sponsor me?"*, the agent detects financial need and autonomously generates a PayPal Order & shareable Diaspora Link Card inside the chat! |
| **3** | **PayPal AI Merit Scholarship Challenge** | `src/components/PayPalMeritChallengeModal.tsx` | Underprivileged students solve 3 EUEE curriculum questions; scoring **66%+** triggers the `paypal_award_merit_scholarship` MCP tool to unlock a 100% Diaspora-Pool-Funded Pass! |
| **4** | **Global Diaspora PayPal Sponsorship Portal** | `src/pages/SponsorPortal.tsx` | Supports Individual (`$4.99`), Study Group (`$14.99`), and Classroom (`$24.99`) PayPal REST v2 Checkout tiers + instant downloadable **Official Sponsorship Impact Certificates**. |
| **5** | **Interactive Judge Showcase & Webhook Simulator** | `src/components/PayPalDevpostQuickDemo.tsx` | 1-click live execution of all 5 MCP tools, PayPal Order Capture, `PAYMENT.CAPTURE.COMPLETED` Webhook simulation, JSON-RPC payload inspector, and Postman collection download. |

---

## 🛠️ 3. Official PayPal Model Context Protocol (MCP) Tools

Our MCP server (`POST /api/paypal/mcp`) adheres strictly to **JSON-RPC 2.0** (`tools/list` and `tools/call`):

1. `paypal_create_student_sponsorship` — Creates a PayPal REST v2 Checkout Order (`INTENT: CAPTURE`) with custom student metadata and returns `paypal_order_id`, `checkout_url`, and `share_portal_url`.
2. `paypal_verify_order` — Verifies and captures a PayPal order ID and activates the scholar's all-access pass in real time.
3. `paypal_send_invoice` — Generates and dispatches an itemized PayPal sponsorship invoice to a diaspora sponsor's email.
4. `paypal_award_merit_scholarship` — Evaluates live quiz performance and autonomously issues a `PP-MERIT-*` grant from the PayPal Diaspora Community Pool.
5. `paypal_get_diaspora_impact` — Returns live transparency metrics (scholars funded, USD raised, ETB PPP equivalent).

---

## 📚 4. Authentic National Curriculum Scale (100% Complete)

EthioLearn AI is not a mockup—it is a complete national learning engine built on authentic FDRE Ministry of Education materials:

- 📖 **59 Official FDRE Textbooks (Grades 9–12, Natural & Social Science)** — **15,494 pages** across **414 curriculum chapters**, featuring **Continuous Canvas PDF Scroll**, **Browser PDF Streaming**, and a **Smart Digital Reader** with KaTeX math & Text-to-Speech.
- 📝 **58 Complete AI Short Notes & Detailed Masterclass Modules** — Unit-by-unit and topic-by-topic summaries, core formulas & laws, step-by-step worked examples, EUEE examiner traps, and interactive unit quizzes, plus live **"Deepen Note with AI"**.
- 🎓 **73 Authentic EUEE Entrance, Regional Model & Boarding Worksheet Exams** — **11,002 real exam questions** with instant Practice Mode answer verification, step-by-step explanations, Timed Examination Hall, Error Notebook spaced repetition, and **2019 E.C. AI Exam Predictor**.
- 🤖 **24/7 RAG AI Curriculum Tutor** — Powered by Google Gemini (`gemini-2.5-flash`) with an automatic multi-key load-balancing pool and full offline pedagogical fallback.

---

## 🚀 5. Quick Start (Local Full-Stack Server)

```bash
npm install
# Configure PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, and GEMINI_API_KEYS in .env
npm run build
npx tsx server.ts
# Server starts on http://localhost:3000
```

### Run PayPal MCP Server over `stdio` (Claude / Cursor / Antigravity)
```bash
npx tsx server/paypalMcpServer.ts --stdio
```

---

## 📄 License
MIT License — Built with ❤️ for Ethiopian students and the global diaspora community.
