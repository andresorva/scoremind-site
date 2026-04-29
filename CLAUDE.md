# CLAUDE.md — ScoreMind.AI Landing Page

> Master context for the marketing website at scoremind.ai
> This file is the source of truth. Read it before every task.

---

## 1. PROJECT OVERVIEW

**What this repo is:** The marketing landing page for ScoreMind AI, hosted at scoremind.ai. It is NOT the app — the app is a separate Flutter project (ScoreMindAI-Flutter) with its own backend (ScoreMindAI-Backend on Railway).

**This repo's only jobs:**
1. Convert visitors into app downloads (Google Play primarily; App Store soon)
2. Host the Privacy Policy and Terms of Service pages required by Apple and Google
3. Serve the demo URLs Apple App Review checks

**This repo is NOT:**
- A web version of the app (the app is mobile-only Flutter)
- A blog or content site
- A user dashboard

---

## 2. STACK

- **Framework:** Vanilla HTML/CSS/JS (no build system, no bundler)
- **Hosting:** GitHub Pages (auto-deploy on push to main)
- **Repo:** andresorva/scoremind-site
- **Domain:** scoremind.ai (CNAME → GitHub Pages)
- **Languages:** English (default) + Spanish (toggle in header, persisted in localStorage)
- **Analytics:** None (deliberate — keep site lean per CLAUDE.md rule §9.5)
- **CSS strategy:** Inline `<style>` blocks per page (privacy/, terms/, index.html each self-contained)
- **i18n strategy:** JSON dictionary in assets/js/i18n.js with `data-i18n="key"` attributes; toggle stored in localStorage
- **Images:** WebP for screenshots, SVG for icons. Stored in `/assets/screenshots/` and `/assets/icons/`. PNG backups in `/assets/screenshots/png/`.

---

## 3. ECOSYSTEM CONTEXT (other repos Claude should know about)

| Repo | Purpose | Stack |
|------|---------|-------|
| ScoreMindAI-Flutter | The mobile app | Flutter, package `ai.scoremind.scoremind` |
| ScoreMindAI-Backend | API + crons | Node.js on Railway |
| Supabase project `dqjamdyahhcprmreyctr` | Database | Supabase Pro |
| Sportmonks | Football data API | External (Ultra plan) |
| ScoreBot | AI sports analyst inside the app | Google Gemini 2.5-flash, thinking-budget=0 |

The landing page does NOT call any of these directly. It's a static marketing site.

---

## 4. KEY FACTS (for copy and stats)

These numbers should be reflected accurately on the site at all times:

- **140+ competitions** worldwide (NOT 83, NOT 118 — current as of Apr 2026)
- **5 languages supported in-app:** English, Spanish, Portuguese, French, Arabic
- **Football is the only sport at launch.** Cricket, basketball, tennis, NFL are roadmap — NOT featured on the landing as "coming soon" anymore.
- **Free with optional Premium** ($2.99 USD Plus / $5.99 USD Premium per month)
- **No ads** in the app (ad-free as a deliberate product decision)
- **iOS:** in App Store review (TestFlight available)
- **Android:** Live on Google Play Open Testing
- **Made by:** Datanaat (the legal entity / company name shown in footer)

---

## 5. BRAND IDENTITY

### Colors (from design_guide.md — see that file for full system)
- **Primary:** Cyan `#00CEC9`
- **Accent:** Gold `#F59E0B`
- **Background:** Pure black `#000000` (dark theme is the canonical theme for the site)
- **Surface:** `#111111`
- **Text primary:** `#FFFFFF`
- **Text secondary:** `#999999`
- **Pill colors:** Cyan (confidence), Blue `#0984E3` (O/U), Purple `#6C5CE7` (BTTS)

### Typography
- **Font:** Inter (Display variant for headlines, regular for body)
- **Headline weight:** ExtraBold (800) or Black (900)
- **Body weight:** Regular (400) or Medium (500)

### Visual style (per design_guide.md)
- Flat, clean, minimal — inspired by FotMob and SofaScore
- Single-layer subtle shadows ONLY
- No 3D, no neumorphic, no textures, no gradients (except subtle radial accent glows)
- Border radius: 12px on cards, 20px on pills
- Compact spacing — maximize content per screen

### Voice and tone
- Direct, confident, no marketing fluff
- Casual but credible — like a smart friend explaining the app
- Bilingual EN/ES — Spanish should feel native (Latin American neutral, NOT translated literally)
- NEVER use words like "betting" or "gambling" as verbs — Apple-safe language. Always frame as "predictions", "picks", "analysis".
- Disclaimer language: "ScoreMind doesn't promote betting. Statistical analysis for entertainment purposes only."

---

## 6. APPLE COMPLIANCE (CRITICAL — DO NOT BREAK)

The site hosts pages Apple App Review checks. Breaking them will block the app.

### Required pages (must always be reachable)
- `/privacy` — Privacy Policy (5.1.1 compliance)
- `/terms` — Terms of Service (3.1.1 compliance)
- `/contact` — Contact page

### Critical copy rules
- The site must NEVER use language that suggests we facilitate, encourage, or process bets or wagers
- Always say "ScoreMind doesn't promote betting" / "No promovemos apuestas"
- Never include affiliate links to sportsbooks or gambling operators
- Never mention "real money", "winnings", "stakes", "odds you can bet on"

### Demo account
For App Review, the demo account is:
- Email: `review@scoremind.ai`
- Password: `ScoreMind2026Review!`
- Tier: FREE (do NOT change to Premium)

This account exists in the app's Supabase auth, NOT on the website.

---

## 7. SITE STRUCTURE (current)
/                  → Hero + stats + sports placeholder + download CTA
/privacy           → Privacy Policy (Apple-spec)
/terms             → Terms of Service (Apple-spec)
/contact           → Contact form / email

### Header (global)
- Left: ScoreMind.AI logo + wordmark
- Right: EN / ES toggle

### Footer (global)
- Links: Privacy Policy / Terms of Service / Contact
- Tagline: "© 2026 Datanaat. All rights reserved."
- Optional: "Made by a sports fan with ❤"

---

## 8. CODE CONVENTIONS

- **Component naming:** PascalCase
- **File naming:** kebab-case for non-component files (e.g. `lib/i18n.ts`)
- **CSS:** [Tailwind / CSS modules / styled-components — confirm based on stack]
- **Images:** WebP for photos, SVG for icons. Store in `/public/assets/` or `/assets/` based on stack.
- **i18n strategy:** [confirm — likely a simple JSON dictionary with `en` and `es` keys, toggle stored in localStorage]
- **No external scripts** unless explicitly approved (no Google Analytics, no Hotjar, no Intercom — keep it lean)

---

## 9. RULES FOR CLAUDE CODE

1. **Do NOT git push after each commit.** Only push to main ONE time at the end of a session. No other branches. The user says when to push.
2. **Verify Apple compliance pages still work** after any change to routing, layout, or navigation. `/privacy`, `/terms`, `/contact` must always return 200.
3. **Preserve i18n.** If you add copy in English, you MUST add the Spanish version. Never ship English-only strings.
4. **Show the plan before coding** when the change touches more than 3 files.
5. **No new dependencies without explicit approval.** Especially avoid analytics, tracking, or heavy animation libraries.
6. **Performance budget:** Lighthouse Performance >85, Accessibility >90, SEO >95. Run Lighthouse before declaring done.
7. **Image hygiene:** Never commit images >500KB. Use WebP and proper dimensions. Lazy-load below the fold.
8. **No "Coming Soon"** placeholders unless explicitly requested. They make the product look unfinished. If a feature isn't ready, omit the section entirely.
9. **Stats and numbers must match reality.** Before changing any stat (accuracy %, prediction count, competition count), verify with the user. Never invent numbers.
10. **Copy is sacred.** Apple-compliant language is non-negotiable. Never write "bet", "wager", "gamble" as verbs.

---

## 10. DECISION LOG

Decisions made about the landing site, with date and reasoning:

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-04-28 | Removed "Coming Soon — More Sports" section | Emojis looked amateur, weakened focus on football |
| 2026-04-28 | Hero redesigned with 3 phone mockups | Show, don't tell — visitors want to see the app |
| 2026-04-28 | "83+ competitions" → "140+ competitions" | Reflect actual current count |
| 2026-04-28 | Removed App Store "Coming Soon" label | Strengthens download CTA, replaced with TestFlight link |
| 2026-04-28 | Stack confirmed as GitHub Pages (not Vercel) | CNAME present in repo; no Vercel project linked. CLAUDE.md previously listed Vercel — corrected during landing redesign session. |
| 2026-04-28 | Hero composition reduced to 1 phone (was 3) | 3 phones with marketing copy embedded competed with hero headline at viewports <1440px and clipped at the column boundary. Single-phone matches Linear/Raycast/Vercel pattern. Other 4 screenshots reused in dedicated sections (Meet ScoreBot, Beyond the Score, Stats That Matter, Live social-proof card). |
| 2026-04-28 | Live.webp placed as inline social-proof card between Trust Bar and Why ScoreMind | Reinforces credibility ("AI predicted, currently winning") with real validation, without bloating into a full section. |
| [add as decisions are made] | | |

---

*Last updated: 28 April 2026*
*Owner: Mac (Andrés Orvananos) — datanaat / ScoreMind AI*