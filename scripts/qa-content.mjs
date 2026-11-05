/**
 * SmartBryte content QA.
 *
 * Verifies, against the approved PDF copy (scripts/pdf-copy.txt fixture,
 * extracted verbatim from the build brief):
 *   1. Every approved string is reproduced VERBATIM in the content module.
 *   2. Every approved string actually RENDERS in the homepage DOM.
 *   3. Section counts, age ranges and the final CTA are correct.
 *   4. No invented content (copyright, email, phone, fabricated testimonials).
 *   5. The intentionally period-less paragraph is preserved.
 *
 * Run: npm run qa:content
 */
import { build } from "esbuild";
import { readFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const fixture = readFileSync(join(root, "scripts/pdf-copy.txt"), "utf8");

// --- bundle the real app + content for inspection -------------------------
const dir = mkdtempSync(join(tmpdir(), "sbqa-"));
const out = join(dir, "bundle.mjs");
await build({
  entryPoints: [join(root, "scripts/_qa-entry.tsx")],
  bundle: true,
  platform: "node",
  format: "esm",
  jsx: "automatic",
  outfile: out,
  logLevel: "silent",
  loader: { ".tsx": "tsx", ".ts": "ts" },
  banner: {
    js: "import { createRequire as __cr } from 'module'; const require = __cr(import.meta.url);",
  },
});
const { html, content } = await import(pathToFileURL(out).href);

// --- helpers --------------------------------------------------------------
const decode = (s) =>
  s
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x2F;/g, "/")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
const norm = (s) => decode(s).replace(/\s+/g, " ").trim();

const renderedText = norm(html.replace(/<[^>]+>/g, " "));
const fixtureText = norm(fixture);

let failures = 0;
const ok = (cond, msg) => {
  if (!cond) {
    failures++;
    console.error("  ✗ " + msg);
  }
};

// --- collect every approved display string --------------------------------
const C = content;
const approved = [];
const push = (s) => approved.push(s);

push(C.HERO.headline);
push(C.HERO.supporting);
push(C.HERO.primaryCta);
push(C.HERO.secondaryCta);
push(C.HERO.ageNote);

push(C.INTRO.headline);
C.INTRO.paragraphs.forEach(push);

push(C.WHY.headline);
push(C.WHY.introduction);
push(C.WHY.leadIn);
C.WHY.modules.forEach((m) => {
  push(m.title);
  push(m.body);
});

push(C.PROGRAMMES.headline);
push(C.PROGRAMMES.introduction);
C.PROGRAMMES.items.forEach((p) => {
  push(p.name);
  push(p.ageRange);
  push(p.headline);
  push(p.description);
  push(p.learnLabel);
  p.learn.forEach(push);
  push(p.cta);
});

push(C.GAINS.headline);
push(C.GAINS.introduction);
C.GAINS.items.forEach((g) => {
  push(g.title);
  push(g.body);
});

push(C.TESTIMONIALS.headline);
push(C.TESTIMONIALS.note);

push(C.FAQS.headline);
C.FAQS.items.forEach((f) => {
  push(f.q);
  push(f.a);
});

push(C.FINAL_CTA.headline);
push(C.FINAL_CTA.supporting1);
push(C.FINAL_CTA.supporting2);
push(C.FINAL_CTA.cta);
push(C.APPLY_LABEL);

// --- 1 & 2: verbatim against PDF + actually rendered ----------------------
console.log(`Checking ${approved.length} approved strings…`);
for (const s of approved) {
  const n = norm(s);
  ok(fixtureText.includes(n), `Not verbatim in PDF fixture: "${s.slice(0, 70)}…"`);
  ok(renderedText.includes(n), `Not rendered in DOM: "${s.slice(0, 70)}…"`);
}

// --- 3: counts, age ranges, final CTA -------------------------------------
ok(C.PROGRAMMES.items.length === 3, "Programmes must be exactly 3");
ok(C.WHY.modules.length === 5, "Why modules must be exactly 5");
ok(C.GAINS.items.length === 5, "Gains must be exactly 5");
ok(C.FAQS.items.length === 9, "FAQs must be exactly 9");
const faqButtons = (html.match(/id="faq-btn-/g) || []).length;
ok(faqButtons === 9, `Expected 9 rendered FAQ items, found ${faqButtons}`);
["Ages 7–12", "Ages 13–19", "Ages 20–22"].forEach((a) =>
  ok(renderedText.includes(a), `Missing age range: ${a}`),
);
ok(C.FINAL_CTA.cta === "Apply Now", "Final CTA must read exactly 'Apply Now'");

// --- 4: no invented content ----------------------------------------------
ok(!/©/.test(renderedText), "No copyright line should be invented");
ok(!/[\w.+-]+@[\w-]+\.[\w.-]+/.test(renderedText), "No email address allowed");
ok(
  !/\(\d{3}\)\s?\d{3}-\d{4}|\+\d{10,}/.test(renderedText),
  "No phone number allowed",
);
ok(!/<blockquote/i.test(html), "No fabricated testimonial quotes");
ok(renderedText.includes(norm(C.TESTIMONIALS.note)), "Testimonials note present");

// --- 5: period-less paragraph preserved -----------------------------------
ok(
  renderedText.includes("creating things of their own") &&
    !renderedText.includes("creating things of their own."),
  "The 'Learning Beyond the Classroom' paragraph must end without a period",
);

// --- nav labels are the permitted structural set --------------------------
const permittedNav = [
  "Home",
  "Why SmartBryte",
  "Programmes",
  "What Your Child Gains",
  "FAQs",
];
ok(
  JSON.stringify(C.NAV.map((n) => n.label)) === JSON.stringify(permittedNav),
  "Nav labels must match the permitted set",
);

if (failures === 0) {
  console.log(`\n✅ PASS — all ${approved.length} strings verbatim & rendered; scope/content checks green.`);
  process.exit(0);
} else {
  console.error(`\n❌ FAIL — ${failures} issue(s) found.`);
  process.exit(1);
}
