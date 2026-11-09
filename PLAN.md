# u.u 3D website — build plan for Cursor

Goal: a professional, scroll-driven 3D site that explains the **finished** u.u product to someone who has never heard of it, and turns that curiosity into a waitlist signup (or a first text to u.u).

Build for the final product, not today's progress. Every chapter below describes a feature as it will work when the loop is complete.

---

## 0. Source material and what's still missing

**From textuu.ai (the live customer site).** The page renders with JavaScript, so only its metadata could be read:
- Title: "u.u | text your future self"
- Tagline: "Text your future self. Ask the person who has already been there."
- Primary action: "Join the u.u waitlist"
- Author: General Intent Team. Social image: https://textuu.ai/uu-social.jpg (1200x630)

**Before Phase 1, pull the rest by hand.** Open textuu.ai in a browser (or Cursor's built-in browser), copy every line of visible text into `docs/textuu-current.md`, and save the logo, social image and any colors you can inspect (DevTools > Computed). Cursor should treat that file as the source of truth for current wording.

**From the 3D roadmap doc.** Only its title and intro were readable: a roadmap from beginner to award-level immersive sites covering WebGL, Three.js, React Three Fiber, animation and creative development, citing Pasqua, Pear and Zoo as reference sites. Download it as .docx, drop it in `docs/3d-roadmap.docx` (or paste it into `docs/3d-roadmap.md`), and `@` it in Cursor when you start Phases 3 to 5.

**The final-product loop (from the team plans).**

| Stage | What the user experiences | Owner on the team |
|---|---|---|
| Understand | You text u.u about your life; it builds a picture of you | already built |
| Futures read | u.u shows a few possible futures; you choose one | futures / `uu_futures` |
| Plan | The chosen future becomes goals, milestones and one small daily step | Rutuja |
| Daily text | One text a day, in your future self's voice | Rue (voice rules), you (message writer) |
| Predictions | Dated, checkable claims with a probability, e.g. "Runs a 10k by March 1, 70%" | you |
| Reassess | Every night, u.u checks how you're doing; if you're slipping, it replans | you + Surya (pace check) |
| Goal and money findings | Patterns about goals and spending surface in the texts | Jasline |

**Open items to confirm with Kemi before launch** (don't invent these on the site):
1. Is this site replacing textuu.ai, or a separate page? Who approves copy and brand?
2. Where do waitlist signups go today? Reuse that exact destination.
3. Is texting u.u directly (an SMS number) open to the public, or waitlist only?
4. The plain-language data and privacy statement. This section matters more than any 3D effect: u.u asks people what gets in their way, which is a high-trust ask.
5. Is there an iOS app link to show?
6. Any numbers you'd want to quote (users, prediction accuracy). If there are none yet, the site quotes none.

---

## 1. The concept

**One idea carries the whole site: a road that runs from today into your future.**

The visitor scrolls, and the camera travels forward along a single path through a quiet 3D landscape. The path is the u.u loop made physical:

- At the start, a phone floats beside the road. A text arrives from future-you.
- The road **forks** into three possible futures (Futures read). The visitor picks one. This is the one interactive moment that matters.
- Along the chosen branch, **milestone stones** appear, with smaller **daily steps** between them (Plan).
- Text bubbles rise from the stones (Daily text).
- Small dated **markers** stand beside the road. As the camera passes, each one resolves: lit for true, dimmed for false (Predictions).
- **Night falls once.** The path visibly bends to a new route around an obstacle (Reassess and replan). Morning returns.
- The road ends at the horizon, where the page asks the visitor to start.

That camera journey is the bold thing. Everything around it stays quiet: plain type, generous space, no decoration that doesn't explain the product.

**Two voices, two typefaces.** Present-you writes in a clean sans. Future-you answers in a serif. The type itself shows the two selves talking, everywhere on the site.

---

## 2. Design tokens

| Name | Hex | Use |
|---|---|---|
| Night ink | `#1B2340` | text, night sky, dark mode surface |
| Dawn lilac | `#B9A7E8` | the road, the future branches |
| Porch light | `#F2C14E` | resolved-true markers, primary button |
| Morning paper | `#EEF0F5` | light surface |
| Fog | `#8A93A8` | secondary text, unresolved markers |
| Dusk rose | `#E07A8C` | at-risk milestone, replan bend (used rarely) |

Confirm against u.u's real brand colors once you've pulled them from textuu.ai. Brand wins over this table.

**Type**
- Present-you / UI: **Schibsted Grotesk** (400, 500, 700)
- Future-you / headlines: **Newsreader** (400, 500; optical sizes)
- Scale: 1.25 ratio from 17px body. Line length under 70 characters. Serif body gets line-height 1.6, sans 1.5.
- Sentence case everywhere. No all-caps labels, no single highlighted word in headlines.

**Layout**
- Text is left-aligned in a narrow column on the left third; the 3D road owns the rest of the viewport.
- On mobile, the canvas sits behind the text at reduced opacity, and text cards scroll over it.

```
Desktop, any chapter
+--------------------------------------------------------------+
| u.u                                          Join the waitlist |
|                                                                |
|  Headline in Newsreader          .  .   road  recedes   .     |
|  Two lines of plain copy           .   /                \     |
|  [ one action ]                      _/   (3D canvas)    \_   |
|                                                                |
+--------------------------------------------------------------+
```

**Motion rules**
- Motion is tied to scroll (the camera) or to the visitor's actions. No idle bouncing, no fade-up on every section.
- `prefers-reduced-motion`: the camera jumps between chapter poses with a short crossfade; no continuous travel.
- No WebGL, or a low-power device: a static illustrated version of each chapter (pre-rendered images of the same scenes).

---

## 3. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | static export, SEO-friendly server-rendered text, deploys to Vercel |
| 3D | three.js via React Three Fiber + drei | declarative scenes in React, fits your React/TS stack |
| Scroll | GSAP ScrollTrigger + Lenis | camera tied to scroll progress, smooth scroll |
| Effects | @react-three/postprocessing (bloom only on porch-light markers) | one subtle effect, not a stack |
| Styling | Tailwind CSS with the tokens above as CSS variables | |
| Models | Blender for the road, stones, phone; export GLB with Draco, textures as KTX2 | small files |
| Forms | waitlist posts to whatever textuu.ai uses today (open item 2) | one list, not two |
| Analytics | Vercel Analytics or PostHog | measure scroll depth and signups |

Check current package versions with npm when you scaffold. React Three Fiber's major version must match your React major version; Cursor will sometimes install mismatched ones.

**Budgets (acceptance criteria for every phase)**
- 3D assets total under 3 MB compressed; first canvas frame under 2.5 s on a mid-range phone over 4G.
- Text and the waitlist form render and work before any 3D loads (canvas is lazy-loaded).
- 60 fps on a 2020 laptop, 30+ fps on a mid-range phone; drei's `PerformanceMonitor` lowers DPR when frames drop.
- Lighthouse: Performance 85+, Accessibility 95+, SEO 95+.
- Every chapter's text is real HTML, readable by screen readers and search engines.

---

## 4. Site map and copy

Copy is a first draft. Keep it plain, keep it about what the visitor gets, and replace anything that conflicts with textuu.ai or with what Kemi approves. All copy lives in one file, `content/site.ts`, so nothing is hardcoded in components.

**Chapter 1: Hero**
- Headline (future-you serif): "Text your future self."
- Line: "Ask the person who has already been there."
- Scene: the phone beside the road; a text from future-you arrives.
- Actions: "Join the waitlist" (primary), "See how it works" (scrolls on).

**Chapter 2: Understand**
- Headline: "It starts with a text."
- Copy: "Tell u.u what you want and what keeps getting in the way. Text it like you'd text a friend. No forms, no quizzes."
- Scene: your message bubbles drift up and gather into a soft outline of a person by the road.

**Chapter 3: Futures read (interactive)**
- Headline: "See where you could be."
- Copy: "u.u reads what you've told it and shows you a few futures that could really happen. You choose the one you want."
- Scene: the road forks into three. Three cards, one per branch, from a sample persona (e.g. "Training for a first half marathon", "Leaving a job to freelance", "Paying off a card by summer"). The visitor taps one; the camera turns down that branch and the rest of the scroll follows it.
- Scripted, not live: each branch has pre-written texts for the chapters ahead. No LLM call on the marketing site in v1.

**Chapter 4: Plan**
- Headline: "A future, broken into Tuesdays."
- Copy: "Your future becomes milestones, and each milestone becomes one small step for today."
- Scene: milestone stones rise along the branch, with small step markers between them.

**Chapter 5: Daily text**
- Headline: "One text a day, from you."
- Copy: "Each day, future-you checks in with one specific thing to do. It sounds like you, because it learned from you."
- Scene: a bubble rises from today's step; the visitor sees two or three sample texts for their branch.

**Chapter 6: Predictions you can check**
- Headline: "Predictions with a date on them."
- Copy: "u.u doesn't say 'you'll feel better.' It says what will happen and by when, then checks whether it was right."
- Scene: dated markers beside the road ("10k by March 1, 70%"). As the camera passes, each resolves and lights or dims.
- Don't show an accuracy number unless the team has a real one.

**Chapter 7: Reassess**
- Headline: "When life gets in the way, the plan moves."
- Copy: "Every night u.u looks at how things are going. If a milestone is slipping, it doesn't scold you. It finds a new route."
- Scene: the sky goes to night ink; an obstacle appears on the road (one dusk-rose stone); the path bends around it; morning returns.

**Chapter 8: Your data**
- Headline: "What happens to what you tell it."
- Copy: placeholder until Kemi provides the approved statement (open item 4). Plain words: what is stored, who sees it, how to delete it.
- No 3D on this section. A calm, flat panel, so it reads as serious.

**Chapter 9: Start**
- Headline (serif): "Your future self is waiting for your text."
- Waitlist form: phone or email (whatever the current waitlist takes), one button: "Join the waitlist". Success state: "You're on the list. We'll text you when it's your turn."
- Footer: General Intent, privacy, terms, contact.

**FAQ** (below Chapter 9, plain accordion): Is it a therapist? (no; say what it is). Does it cost anything? How do I stop texts? Is my data sold? All answers come from the team.

---

## 5. Build phases

Work in one Cursor chat per phase. Start each in Plan mode, read the plan, then let Agent build. Commit after every phase that passes its checks.

### Phase 1: Scaffold and content (half a day)
- Next.js + TS + Tailwind, fonts via `next/font`, tokens as CSS variables (light and dark).
- `content/site.ts` with all copy from section 4, typed.
- All nine chapters as plain HTML sections with no 3D. The site already makes sense and the form already works (stub the submit until open item 2 is answered).
- Done when: the page reads well top to bottom with JavaScript off, and Lighthouse Accessibility is 95+.

### Phase 2: Scroll system (half a day)
- Lenis smooth scroll, GSAP ScrollTrigger; one global `progress` value (0 to 1) and a `chapter` index in a small store (zustand).
- Reduced-motion and no-WebGL detection in one hook.
- Done when: a debug overlay shows progress and chapter updating while you scroll, on desktop and phone.

### Phase 3: The road and the camera (2 days, the heart of the build)
- One fixed full-screen `<Canvas>` behind the text, lazy-loaded.
- The road as a `CatmullRomCurve3` spline with a ribbon mesh; three branches at the fork.
- Camera moves along the curve by `progress`, with a look-ahead target. Define a pose per chapter and ease between them.
- Fog and a sky gradient driven by progress (day, then one night, then morning).
- Start with primitives (boxes, spheres). No final art yet.
- Done when: scrolling top to bottom is a smooth trip along the road with no jumps, 60 fps on your laptop.

### Phase 4: Chapter scenes (3 days)
- Hero phone with an arriving text bubble (HTML via drei `<Html>` or a texture; keep text crisp).
- Understand: instanced particles gathering into an outline.
- Futures read: three branch cards; the click sets `selectedFuture` in the store; the camera turns down that branch.
- Plan: milestone stones and step markers placed along the selected branch from data.
- Daily text: bubbles from the branch's script.
- Predictions: markers that resolve when the camera passes (bloom only here).
- Reassess: obstacle, bend of the spline, night and morning.
- Done when: every chapter's scene matches its copy, and choosing each of the three futures gives a complete, different trip.

### Phase 5: Art pass (2 to 3 days)
- Replace primitives with Blender models: road, stones, phone, markers. Draco plus KTX2; check total size.
- Lighting: one key light and soft environment; no heavy shadows on mobile.
- Type pass: future-you serif in every bubble, present-you sans in the visitor's.
- Done when: asset budget is met and the site looks finished in light and dark.

### Phase 6: Performance and fallbacks (1 day)
- `PerformanceMonitor` adaptive DPR, `frameloop="demand"` when the page is idle, dispose unused geometry.
- Static fallback images per chapter for no-WebGL and very low-power devices.
- Reduced-motion path tested.
- Done when: every budget in section 3 passes on a real phone.

### Phase 7: Waitlist, analytics, SEO, launch (1 day)
- Connect the form to the real destination from open item 2. Validate input; never write directly to the production database from the client.
- Events: chapter reached, future chosen, waitlist submitted.
- Metadata and social image matching textuu.ai, sitemap, robots.
- Deploy a Vercel preview. Send the link to Kemi for sign-off before it goes anywhere near the textuu.ai domain.

Rough total: 10 to 12 working days part-time.

---

## 6. Folder structure

```
app/
  layout.tsx           fonts, tokens, metadata
  page.tsx             chapters in order
components/
  chapters/            Hero.tsx, Understand.tsx, Futures.tsx, ... Start.tsx
  ui/                  Button, WaitlistForm, Faq
  three/
    Experience.tsx     the one Canvas
    Road.tsx           spline, ribbon, branches
    CameraRig.tsx      progress -> camera pose
    scenes/            PhoneScene, Particles, Stones, Bubbles, Markers, NightShift
content/
  site.ts              all copy
  futures.ts           the three sample branches and their scripted texts
lib/
  store.ts             progress, chapter, selectedFuture
  useCapabilities.ts   reduced motion, WebGL, device tier
public/
  models/              *.glb (Draco)
  textures/            *.ktx2
  fallback/            static chapter images
docs/
  textuu-current.md    copied text from the live site
  3d-roadmap.md        the roadmap doc
.cursor/rules/
  uu-site.mdc          project rules for Cursor
```

---

## 7. Cursor prompts, one per phase

Paste these at the start of each phase chat. `@` the files named.

**Phase 1**
> Read @PLAN.md sections 2, 4 and 6 and @docs/textuu-current.md. Scaffold a Next.js App Router project with TypeScript and Tailwind. Load Schibsted Grotesk and Newsreader with next/font. Put the color tokens from section 2 in CSS variables with light and dark values. Create content/site.ts containing all the copy from section 4, typed, and render the nine chapters as plain semantic HTML sections in app/page.tsx. No 3D yet. The waitlist form should validate input and call a stub. Show me your plan before writing code.

**Phase 2**
> Using @PLAN.md section 5 Phase 2, add Lenis smooth scroll and GSAP ScrollTrigger. Expose a global scroll progress (0 to 1) and current chapter index in a zustand store in lib/store.ts. Add lib/useCapabilities.ts that detects prefers-reduced-motion, WebGL support and a rough device tier. Add a dev-only overlay that shows progress and chapter. Don't add any 3D.

**Phase 3**
> Using @PLAN.md sections 1 and 5 Phase 3, add one fixed full-screen React Three Fiber Canvas behind the page, lazy-loaded after the text renders. Build the road as a CatmullRomCurve3 with a ribbon mesh and a three-way fork at chapter 3. Write CameraRig.tsx that moves the camera along the curve by store progress, looks ahead along the curve, and eases between one pose per chapter. Drive fog and sky color from progress, including one night at chapter 7. Use primitive geometry only. Explain how the curve and poses are defined so I can tune them.

**Phase 4**
> Using @PLAN.md section 4 and @content/futures.ts, build the chapter scenes in components/three/scenes/, one component per chapter, each mounted only near its chapter. The Futures chapter sets selectedFuture in the store and the rest of the trip follows that branch. Bloom applies only to prediction markers. Keep all text from content files.

**Phase 5 to 7**: prompt the same way, quoting that phase's "Done when" line as the requirement.

---

## 8. Things to watch

- **Claims.** The site describes the finished product, so every claim must be one the team is building toward. No invented stats, no medical or financial promises, no "AI that knows your future." u.u makes checkable predictions; it doesn't foretell.
- **Trust before spectacle.** If Chapter 8 is weak, the 3D won't save conversion.
- **Text inside 3D.** Keep important words in HTML, not baked into textures, so they stay sharp, translatable and accessible.
- **Mobile first-load.** Most people will open this from a shared link on a phone. Test there every phase.
- **Ownership.** textuu.ai is the company's customer-facing site. Build on a preview URL and get sign-off before touching the domain.
