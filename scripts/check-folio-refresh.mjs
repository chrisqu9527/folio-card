#!/usr/bin/env node
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const data = resolve(root, "skills/folio-style/data");
const read = (path) => JSON.parse(readFileSync(path, "utf8"));
const db = read(resolve(data, "prompts.json"));
const hash = (text) => createHash("sha256").update(text).digest("hex");
const normal = (text) => text.trim().replace(/\s+/g, " ").toLowerCase();
let additions = 0;
for (const name of readdirSync(data).filter((name) => /^refresh-\d{8}-x\.json$/.test(name))) {
  const refresh = read(resolve(data, name));
  assert.equal(hash(JSON.stringify(db.prompts.slice(0, refresh.baselineCount))), refresh.baselineSha256, "Existing records changed after refresh");
  const seen = new Set(db.prompts.slice(0, refresh.baselineCount).map((p) => normal(p.prompt)));
  const sources = new Set(db.prompts.slice(0, refresh.baselineCount).map((p) => p.sourceUrl));
  for (const [index, item] of refresh.additions.entries()) {
    const p = db.prompts[refresh.baselineCount + index];
    assert.equal(Number(item.no), refresh.baselineCount + index + 1);
    assert.equal(p?.no, item.no);
    assert.equal(p.id, item.id);
    assert.equal(p.creator.handle, item.authorHandle);
    assert.equal(p.sourceUrl, item.sourceUrl);
    assert.equal(p.sourceUrl, `https://x.com/${item.authorHandle}/status/${item.tweetId}`);
    assert.equal(p.date, item.publishedAt.slice(0, 10));
    assert.equal(p.prompt, item.sourceText.slice(item.start, item.start + item.length));
    assert.equal(hash(p.prompt), item.sha256);
    assert.deepEqual(p.scenarios, item.scenarios);
    assert.ok(!seen.has(normal(p.prompt)), `Duplicate prompt ${p.no}`);
    assert.ok(!sources.has(p.sourceUrl), `Duplicate source ${p.no}`);
    seen.add(normal(p.prompt)); sources.add(p.sourceUrl);
    assert.deepEqual(p.covers, item.covers.map((c) => c.path));
    for (const cover of item.covers) {
      const path = resolve(root, "public", cover.path.slice(1));
      assert.ok(path.startsWith(resolve(root, "public/covers") + sep));
      assert.equal(new URL(cover.url).hostname, "pbs.twimg.com");
      const bytes = readFileSync(path);
      assert.equal(hash(bytes), cover.sha256);
      assert.equal(bytes.length, cover.size);
      assert.equal(bytes[0], 255); assert.equal(bytes[1], 216);
    }
    additions++;
  }
}
console.log(JSON.stringify({ok:true, count:db.count, verifiedXAdditions:additions}));
