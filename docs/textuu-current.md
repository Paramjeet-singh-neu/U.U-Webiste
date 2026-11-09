# textuu.ai — current visible copy and brand

Captured 2026-11-08 from https://textuu.ai (JS-rendered SPA). Browser audit + HTML metadata + CSS asset colors. This file is the source of truth for **current** wording and brand colors. Phase 1 site copy still follows PLAN §4; where brand colors conflict with PLAN §2 tokens, **brand wins**.

## Metadata

| Field | Value |
|---|---|
| Title | `u.u \| text your future self` |
| Description | `Text your future self. Ask the person who has already been there. Join the u.u waitlist.` |
| Author | General Intent Team |
| OG / Twitter image | https://textuu.ai/uu-social.jpg (1200×630) — saved as `/public/uu-social.jpg` |
| Favicon | https://textuu.ai/favicon.png — saved as `/public/favicon.png` |
| Canonical URL | https://textuu.ai/ |

## Brand colors (live site — overrides PLAN tokens)

Visual dark theme (what visitors actually see):

| Role | Hex | Notes |
|---|---|---|
| Primary background | `#2D1B24` | Deep plum / burgundy. Also appears as `#3B2130` in CSS. |
| Foreground / text | `#F8D8D7` | Soft pink off-white (range ~`#F8D8D7`–`#FBE6E8`) |
| Accent / primary button | `#FFA4C2` | Soft pink (range ~`#FF9EB8`–`#FFA4C2`; stronger `#F58CB2`, `#DE4F82` also present) |
| Muted / secondary | `#5C4453` | Mauve |
| Light surface accents | `#FFF8F8`, `#FCF7F7`, `#FFEDF1` | Soft pink whites in CSS |

Default CSS variables on `:root` are black/white HSL; the product UI overrides to the dark plum theme above.

**Conflict with PLAN §2:** PLAN Night ink `#1B2340` and Porch light `#F2C14E` are not the live brand. This project uses live plum + pink as primary surface/accent tokens.

## Logo

- Text logo: **u.u** (lowercase), bold rounded geometric sans
- Color: soft pink / off-white on dark backgrounds
- No separate SVG logo asset found; wordmark is typed

## Waitlist / CTA

- Web input placeholder: `your first name`
- Button: `text them`
- Instruction: `type your name, or text (628) 231-0257`
- Bottom CTA: `Text (628) 231-0257`
- Note: `iPhone only for now`
- Success destination for web form: **unknown** (open item 2 — stub in Phase 1)

## Visible copy (top to bottom)

### Nav
- Logo: `u.u`
- `see it`
- `● text yourself`

### Hero
- Floating callout: `hi. it's you, from 2031 :)`
- Headline: `text your future self.`
- Form: first-name field + `text them`
- Sub: `type your name, or text (628) 231-0257`

### Product
- Headline: `it connects your whole life. you just text.`
- Body: `Email, calendar, bank, notes, photos, texts. Everything you connect is read as one picture of you. Below: eight weeks of one person's life, mapped.`

### Life-map demo
- Titles like `24 things, 17 connections` / `noticed across your life`
- Central node `you`; sample nodes include money, worries, work, places, people, etc.
- Sample future-you texts (demo persona):  
  - `you say this on sunday nights. you're 20. you're not behind`  
  - `the label's showcase is at mercury lounge in march. go`

### FAQ (questions visible; answers not reliably extracted from the minified bundle)

**the basics**
1. Is u.u an app?
2. Does it work on Android?
3. How is it different from ChatGPT?
4. What does it cost?

**data management**
1. Does u.u connect to my Google account?
2. What does u.u do with Gmail?
3. What does u.u do with Google Calendar?
4. What does u.u do with Google Docs?
5. Do you sell my data or train AI on it?

### Bottom CTA
- Headline: `your future self is one text away.`
- Sub: `Text u.u to join the waitlist. You'll get a text back confirming you're on it.`
- Button: `Text (628) 231-0257`
- Note: `iPhone only for now`
- Privacy line (visible): `Your data isn't sold. No ads. u.u asks before texting anyone else.`

### Footer
- Tagline: `A text from you, a few years from now.`
- Links: See the mind map · Text (628) 231-0257 · textuu.ai · Instagram · Contact
- `© 2026 u.u` · Privacy policy · Terms

## Tone note

Live site is **all lowercase**. PLAN + project rules require **sentence case** for the new marketing site. Prefer sentence case in `content/site.ts`; do not invent new claims.

## Open items for Kemi (do not invent)

1. Full privacy / data statement for Chapter 8 beyond the one-liner above
2. Waitlist web-form destination (reuse exact textuu.ai destination)
3. FAQ answers for pricing, stop-texts, therapist framing, Google-data questions
4. Whether this site replaces textuu.ai
5. Public SMS vs waitlist-only policy confirmation
6. Any stats / accuracy numbers (quote none until real)
