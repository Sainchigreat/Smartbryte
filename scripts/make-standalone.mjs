/**
 * Builds a single, self-contained HTML preview file that opens directly in
 * Chrome (double-click, no server needed). It inlines the production CSS/JS
 * and embeds every font and image as a base64 data URI.
 *
 * Run: npm run build && npm run preview:file
 * Output: SmartBryte-Homepage-Preview.html (repo root)
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const assetsDir = join(dist, "assets");
const files = readdirSync(assetsDir);
const cssFile = files.find((f) => f.endsWith(".css"));
const jsFile = files.find((f) => f.endsWith(".js"));
if (!cssFile || !jsFile) throw new Error("Run `npm run build` first.");

let html = readFileSync(join(dist, "index.html"), "utf8");
let css = readFileSync(join(assetsDir, cssFile), "utf8");
let js = readFileSync(join(assetsDir, jsFile), "utf8");

const mime = (f) =>
  f.endsWith(".woff2") ? "font/woff2"
  : f.endsWith(".woff") ? "font/woff"
  : f.endsWith(".svg") ? "image/svg+xml"
  : f.endsWith(".jpg") || f.endsWith(".jpeg") ? "image/jpeg"
  : f.endsWith(".png") ? "image/png"
  : "application/octet-stream";

const dataUri = (path) =>
  `data:${mime(path)};base64,${readFileSync(path).toString("base64")}`;

// 1) Inline every font referenced by the CSS as a data URI.
css = css.replace(/url\((['"]?)([^)'"]+)\1\)/g, (m, _q, p) => {
  if (p.startsWith("data:")) return m;
  const name = p.split("/").pop().split("?")[0].split("#")[0];
  try {
    return `url(${dataUri(join(assetsDir, name))})`;
  } catch {
    return m;
  }
});

// 2) Inline every content image referenced by the JS as a data URI.
js = js.replace(/\/images\/([A-Za-z0-9_.-]+\.(?:jpg|jpeg|png|svg))/g, (_m, name) =>
  dataUri(join("public", "images", name)),
);

// 3) Inline the favicon.
html = html.replace(
  /href="\/favicon\.svg"/,
  `href="${dataUri(join("public", "favicon.svg"))}"`,
);

// 4) Guard against premature tag closure inside inline blocks.
css = css.replace(/<\/style>/gi, "<\\/style>");
js = js.replace(/<\/script>/gi, "<\\/script>");

// 5) Swap the external <link>/<script> for inline blocks.
html = html.replace(
  /<link rel="stylesheet"[^>]*href="[^"]*\.css"[^>]*>/,
  () => `<style>\n${css}\n</style>`,
);
html = html.replace(
  /<script type="module"[^>]*src="[^"]*\.js"[^>]*><\/script>/,
  () => `<script type="module">\n${js}\n</script>`,
);

const out = "SmartBryte-Homepage-Preview.html";
writeFileSync(out, html);

const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
const leftover = (html.match(/(?:src|href)="\/(?!\/)/g) || []).length;
console.log(`✅ Wrote ${out} (${kb} KB).`);
console.log(
  leftover === 0
    ? "✅ Fully self-contained — no external file references."
    : `⚠️ ${leftover} absolute reference(s) remain (check output).`,
);
