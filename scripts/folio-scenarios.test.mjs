import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { countMedium, filterPrompts, folio } from "../src/lib/folio.ts";

const migration = JSON.parse(
  readFileSync(
    new URL("../skills/folio-style/data/scenario-migration-20261003.json", import.meta.url),
    "utf8",
  ),
);

test("scenario migration preserves all existing content and stable identities", () => {
  assert.equal(migration.count, migration.entries.length);
  for (const before of migration.entries) {
    const p = folio.prompts.find((item) => item.no === before.no);
    assert.equal(p?.id, before.id);
    assert.equal(p.visualCategory, before.previousCategory);
    const { category, scenarios, visualCategory, ...content } = p;
    assert.ok(category && scenarios.length && visualCategory);
    assert.equal(
      createHash("sha256").update(JSON.stringify(content)).digest("hex"),
      before.contentSha256,
      `Content changed during classification: ${p.no}`,
    );
  }
});

test("website and CLI include secondary scenarios and count each record once", () => {
  assert.deepEqual(
    filterPrompts("110", "feeling", "image").map((p) => p.no),
    ["110"],
  );
  assert.deepEqual(filterPrompts("110", "knowledge", "image"), []);
  const output = execFileSync(
    process.execPath,
    [
      fileURLToPath(new URL("../skills/folio-style/scripts/lookup.mjs", import.meta.url)),
      "--category",
      "表达心意",
      "--medium",
      "image",
    ],
    { encoding: "utf8" },
  );
  const cliNumbers = output
    .trim()
    .split("\n")
    .map((line) => line.split("\t")[0]);
  const website = filterPrompts("", "feeling", "image");
  assert.deepEqual(
    cliNumbers,
    website.map((p) => p.no),
  );
  assert.equal(countMedium("image", "feeling"), website.length);
  assert.equal(new Set(cliNumbers).size, cliNumbers.length);
  assert.deepEqual(filterPrompts("表达心意", "all", "image"), website);
});

test("video formats intersect with intent and retain teaching versus product distinctions", () => {
  const teaching = filterPrompts("", "knowledge", "video");
  assert.ok(teaching.some((p) => p.no === "162"));
  const product = filterPrompts("", "knowledge", "video", "product");
  assert.ok(product.length > 0);
  assert.ok(product.every((p) => p.use === "product" && p.scenarios.includes("knowledge")));
  assert.equal(countMedium("video", "knowledge", "product"), product.length);
  assert.ok(!product.some((p) => p.no === "162"));
});

test("code-rendered videos can be found by collection and by application intent", () => {
  const expected = folio.prompts.filter((p) => p.category === "code");
  assert.ok(expected.length > 0);
  assert.ok(expected.every((p) => p.medium === "video" && p.visualCategory === "code"));
  assert.deepEqual(filterPrompts("", "code", "video"), expected);
  assert.equal(countMedium("video", "code"), expected.length);
  assert.deepEqual(filterPrompts("", "code", "image"), []);
  for (const p of expected) {
    assert.deepEqual(filterPrompts(p.no, "code", "video"), [p]);
    assert.deepEqual(filterPrompts(p.no, p.scenarios[0], "video"), [p]);
  }
  const output = execFileSync(process.execPath, [
    fileURLToPath(new URL("../skills/folio-style/scripts/lookup.mjs", import.meta.url)),
    "--category", "代码成片", "--medium", "video",
  ], { encoding: "utf8" });
  assert.deepEqual(output.trim().split("\n").map((line) => line.split("\t")[0]), expected.map((p) => p.no));
});
