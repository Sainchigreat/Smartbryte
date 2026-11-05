# SmartBryte — Homepage

A polished, responsive, single-page homepage for **SmartBryte**, an online school
for children and young people aged **7–22** that combines regular academic
learning with technology, AI awareness and practical digital skills. The page is
written for parents: it explains what SmartBryte is, why it matters, what each
age-group programme covers, what a child gains, and how to take the next step.

> **Scope:** homepage only. No About / Programmes / Contact / Application pages,
> and no backend (no login, registration, payment, LMS, booking, database, CRM or
> newsletter). All navigation and CTAs are lightweight, in-page scroll targets.

Built to the authoritative **SmartBryte Lovable Homepage Build Brief**
(`docs/design-references/SmartBryte_Lovable_Homepage_Build_Brief.pdf`). Every
visible word is reproduced **verbatim** from the brief's approved copy.

---

## Run it

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build
npm run qa:content # verify all copy is verbatim + rendered (see below)
```

Stack: **Vite + React + TypeScript + Tailwind CSS v4**. Fonts are self-hosted
via Fontsource (**Manrope** + **Instrument Serif**) — no external CDN calls.

---

## Design direction — one coherent synthesis

The brief asked for a deliberate synthesis of four references, not a clone of
any one. Here is how each contributes and how the conflicts were resolved:

| Reference | What it contributes |
|---|---|
| **SuperHi** (MD) | A disciplined *decorative shape system*: flat geometric cut-outs (starburst, semicircle, ring, squiggle, dot-grid, triangle) placed behind content; one confident action colour; flat pill controls with a directional arrow. |
| **WonderKids** (image) | Playful learning energy: an italic-serif accent word inside a clean sans headline, circular-arrow pill CTAs, and a rich purple closing band. |
| **Huddle** (MD) | Editorial restraint: warm light canvas, generous rhythm, strong type hierarchy at regular/medium weights, 1px hairline borders (no shadows), and **colour-as-category** pastel cards. |
| **TriVision** (image) | Page *architecture*: oversized hero → horizontal photo strip → split image-and-copy intro → distinct programme/benefit presentation → restrained testimonial area → strong dark footer. (Its green/lime identity, stats and text are **not** borrowed.) |

**Deliberate conflict resolutions**

- **Canvas:** a warm paper white base (`#faf7f1`) with a pale-blue wash
  (`#ebf1f8`) for alternating section rhythm — neither reference's exact canvas.
- **Action colour:** a SmartBryte-specific violet (`#5b3df0`) owns every filled
  action — not SuperHi's electric iris, not Huddle's black/amber.
- **Elevation:** everything is flat — hairline borders and background contrast
  only. No shadows anywhere (blurred or offset).
- **Type:** Manrope carries ~95% of the system; Instrument Serif italic appears
  only as the accent word. Two families, never more.
- **Programme cards:** Huddle's muted pastels are assigned one-to-one to the age
  groups — **sage → Junior Learners (7–12)**, **lavender → Teen Learners
  (13–19)**, **dusty rose → Young Adults (20–22)** — so they are instantly
  comparable.
- **Radius:** one friendly family — 24px cards, 20px photo crops, full pills.

### Design tokens

Defined in `src/index.css` (`@theme`). Key values:

```
paper #faf7f1   wash #ebf1f8   ink #23203a   ink-soft #524e68
violet #5b3df0  violet-deep #4a2fd6
sage #d5e3d0 / sage-deep #3e6b4f
lavender #dcd3f0 / lavender-deep #4a3aa8
rose #f0d9d3 / rose-deep #96483d
sun #f7c948   sky #9ccbeb
```

---

## Simplicity

The page follows a Linear / Apple-Notes discipline: one purpose per section,
headings that stand on their own, and no secondary chrome. There are **no**
taglines, wayfinding micro-labels, section numbers, or helper captions — if a
section needed a label to make sense, the layout was fixed instead. The entire
UI kit is three primitives (`Container`, `PillLink`, `ArrowRight`); controls are
flat with colour-only hover states. All approved copy is preserved verbatim.

**Deployment:** the site deploys on **Vercel** from `main`. Merging to `main`
publishes automatically.

## Content integrity

All approved copy lives in **`src/lib/content.ts`** (single source of truth) and
is reproduced exactly — including straight apostrophes, en-dashes in age ranges,
and the one paragraph that intentionally ends without a full stop.

`npm run qa:content` server-renders the real homepage and checks, against a
fixture extracted verbatim from the PDF (`scripts/pdf-copy.txt`):

1. Every approved string is **verbatim** in the content module.
2. Every approved string actually **renders** in the DOM.
3. Counts are correct — 3 programmes, 5 "Why" modules, 5 gains, **9 FAQs** — and
   the age ranges (7–12, 13–19, 20–22) and final **"Apply Now"** label are exact.
4. **No invented content**: no copyright line, email, phone, or fabricated
   testimonials. The testimonials section uses only the supplied note.
5. The period-less paragraph is preserved.

The testimonials section is a dignified empty state using only the supplied
note. The final **Apply Now** CTA and the programme **Explore …** CTAs are
non-destructive scroll targets — they do not pretend an application system
exists.

---

## Accessibility & responsiveness

- Semantic landmarks (`header`/`nav`/`main`/`footer`), one `h1`, ordered headings.
- Skip link, visible `:focus-visible` rings, keyboard-operable accordion and
  mobile menu, ≥44px touch targets.
- Decorative shapes are `aria-hidden` and `pointer-events-none`, kept behind
  content and clipped by section edges; content images have meaningful alt text.
- Responsive images with reserved aspect ratios (no layout shift), lazy loading
  below the fold, optimised JPEGs.
- Desktop multi-column → tablet reduced columns → mobile single column; decorative
  shapes hide on small screens so they never cover content.
- `prefers-reduced-motion` disables smooth scroll and transitions.

> **Imagery note:** the education photographs are AI-generated illustrative
> images chosen to reflect SmartBryte's Lagos context. No pictured person is
> identified as a SmartBryte student or teacher.

---

## Project structure

```
src/
  lib/content.ts            # all verbatim copy + structural labels
  components/
    shapes/index.tsx        # flat decorative shape library
    ui.tsx                  # Container, PillLink, ArrowRight
    Header.tsx              # sticky nav + scroll-spy + mobile menu + Wordmark
    Hero.tsx                # headline, CTAs, age note, photo strip
    Introduction.tsx        # editorial split
    WhySmartBryte.tsx       # five benefit modules
    Programmes.tsx          # three pastel age-group cards
    Gains.tsx               # two-column benefit grid
    Testimonials.tsx        # restrained empty state (supplied note only)
    Faqs.tsx                # nine-item accessible accordion
    FinalCta.tsx            # closing enrolment band
    Footer.tsx              # wordmark + section navigation only
  App.tsx / main.tsx / index.css
scripts/
  pdf-copy.txt              # verbatim PDF copy fixture (QA source of truth)
  qa-content.mjs            # content verification harness
  _qa-entry.tsx             # SSR entry used by the harness
docs/design-references/     # the build brief PDF + two design-system MD files
public/images/              # optimised education photography
```
