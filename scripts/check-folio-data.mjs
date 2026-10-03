import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(resolve(root, path), "utf8").replace(/\r\n/g, "\n");
const hash = (value) => createHash("sha256").update(value).digest("hex");
const db = JSON.parse(read("skills/folio-style/data/prompts.json"));
const refresh = JSON.parse(read("skills/folio-style/data/refresh-20260930.json"));
const reconciliation = JSON.parse(read("skills/folio-style/data/reconciliation-20261001.json"));
execFileSync(process.execPath, [resolve(root, "scripts/sync-folio-data.mjs"), "--check"], {
  stdio: "inherit",
});
if (process.argv.includes("--verify-reconciliation")) {
  assert.equal(
    hash(
      JSON.stringify(
        db.prompts
          .slice(0, refresh.baselineCount)
          .map(({ scenarios: _scenarios, visualCategory, ...p }) => ({
            ...p,
            category: visualCategory ?? p.category,
          })),
      ),
    ),
    refresh.baselineSha256,
    "Original 001-150 content changed beyond scenario metadata",
  );
}
const byId = new Map(db.prompts.map((p) => [p.id, p]));
for (const mapping of reconciliation.renumbered) assert.equal(byId.get(mapping.id)?.no, mapping.no);
const remap = new Map(reconciliation.renumbered.map((item) => [item.oldLocalNo, item.no]));
const historicalEvidence = refresh.additions.map((item) => ({
  ...item,
  no: remap.get(item.no) ?? item.no,
}));
const evidence = [...historicalEvidence, ...reconciliation.additions];
const normal = (text) => text.trim().replace(/\s+/g, " ").toLowerCase();
const seenSources = new Set(db.prompts.slice(0, 150).map((p) => p.sourceUrl));
const seenPrompts = new Set(db.prompts.slice(0, 150).map((p) => normal(p.prompt)));
for (const item of evidence) {
  const p = db.prompts.find((p) => p.no === item.no);
  assert.ok(p, `Missing reconciled entry ${item.no}`);
  assert.equal(p.creator.handle, item.authorHandle);
  assert.equal(p.sourceUrl, item.sourceUrl);
  assert.equal(p.prompt, item.sourceText.slice(item.start, item.start + item.length));
  assert.equal(hash(p.prompt), item.sha256);
  assert.ok(!seenSources.has(p.sourceUrl), `Duplicate source ${p.no}`);
  assert.ok(!seenPrompts.has(normal(p.prompt)), `Duplicate prompt ${p.no}`);
  seenSources.add(p.sourceUrl);
  seenPrompts.add(normal(p.prompt));
  assert.deepEqual(
    p.covers,
    item.covers.map((c) => c.path),
  );
  for (const cover of item.covers)
    assert.equal(hash(readFileSync(resolve(root, "public", cover.path.slice(1)))), cover.sha256);
}
assert.equal(evidence.length, 12, "The reconciled historical additions are incomplete");
assert.equal(db.prompts.find((p) => p.no === "153").id, "azed-stitched-world");
assert.equal(db.prompts.find((p) => p.no === "155").id, "charas-pixel-ninja");
for (const p of db.prompts) {
  for (const cover of p.covers) {
    assert.ok(cover.startsWith("/covers/"));
    const path = resolve(root, "public", cover.slice(1));
    assert.ok(path.startsWith(resolve(root, "public/covers") + sep));
    assert.ok(statSync(path).size > 0, `Empty cover ${p.no}`);
  }
  const entry = read(`skills/folio-style/entries/${p.no}.md`);
  assert.equal(entry.split("## 提示词\n\n```\n")[1].split("\n```\n")[0], p.prompt);
}
for (const p of db.prompts.filter((p) => Number(p.no) > 150)) {
  const output = execFileSync(
    process.execPath,
    [resolve(root, "skills/folio-style/scripts/lookup.mjs"), p.no],
    { encoding: "utf8" },
  );
  assert.equal(output.split("---PROMPT---\n")[1].split("\n---END---")[0], p.prompt);
}
console.log(
  JSON.stringify({
    ok: true,
    count: db.count,
    images: db.prompts.filter((p) => p.medium === "image").length,
    videos: db.prompts.filter((p) => p.medium === "video").length,
    preserved: 150,
    verifiedHistoricalAdditions: evidence.length,
  }),
);
