AI Water Footprint Tracker
A Chrome browser extension that tracks the hidden water cost of your AI usage in real-time. Built by yours truly for StarDance 2026.

What Does It Do?
Every AI query uses water — from cooling servers to powering data centers. This extension makes that invisible cost **visible** by:
- Showing a **floating badge** on AI websites (ChatGPT, Claude, Gemini, Grok, Kimi, Meta AI, Manus) with your water cost per query
- Providing a **quick calculator** in the popup to estimate water usage for any number of queries
-  **Tracking** your daily, weekly, and monthly water footprint
- Showing how much water you **saved** by choosing efficient models over GPT-4
- Logging every calculation in a **daily tracker**
- Delivering **cheeky reminders** about your digital water habits

How to Install
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right)
4. Click **Load unpacked** and select the `ai-water-extension` folder
5. Pin the extension to your toolbar

That's it — the extension will now show water badges on supported AI websites and track your usage.

Features
| Feature | Description |
|---------|-------------|
| Floating Badge | Appears on AI sites showing water cost per query in real-time |
| Quick Calculator | Select any AI provider, enter queries, see water cost instantly |
| Usage Tracker | Logs all calculations with date, provider, and water used |
| Stats Dashboard | Shows Today, This Week, and This Month water usage |
| Water Saved | Compares your choices against GPT-4 baseline (25ml/query) |
| Cheeky Remarks | Random personality-filled reminders about your AI habits |
| Clear Data | One-click reset for all stored data |
| Link to Full Calculator | Direct link to the web-based AI Water Footprint Calculator |

Supported AI Platforms
- ChatGPT (GPT-4, GPT-3.5)
- Claude (Opus, Haiku)
- Google Gemini
- Grok (xAI)
- Kimi (Moonshot AI)
- Meta AI
- Manus
- Local AI (LLaMA) — lowest water footprint at 2ml/query

Water Cost Data
| AI Model | Water per Query |
|----------|----------------|
| ChatGPT (GPT-4) | 25 mL |
| Claude (Opus) | 20 mL |
| Gemini (Advanced) | 22 mL |
| ChatGPT (GPT-3.5) | 10 mL |
| Claude (Haiku) | 8 mL |
| Grok (xAI) | 22 mL |
| Kimi (Moonshot) | 18 mL |
| Meta AI | 15 mL |
| Manus | 20 mL |
| Local AI (LLaMA) | 2 mL |

Data sourced from independent research on AI inference water consumption. The baseline comparison uses GPT-4 at 25ml per query as the highest-cost model.

Tech Stack
- HTML, CSS, JavaScript (vanilla — no frameworks)
- Chrome Extension API (Manifest V3)
- Chrome Storage API for persistent data

Project Context
This extension is part of a series of projects addressing the hidden environmental cost of AI. The companion web-based [AI Water Footprint Calculator](https://itz-coco.github.io/AI-WATER-FOOTPRINT/) provides a more detailed breakdown with visualizations and comparisons.
Built as a submission for **StarDance 2026** and as groundwork for **The Earth Prize 2027**.

License
MIT License. 
