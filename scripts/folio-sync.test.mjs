import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { test } from "node:test";

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "folio-sync-"));
  t.after(() => {
    assert.equal(dirname(resolve(root)), resolve(tmpdir()));
    assert.ok(basename(root).startsWith("folio-sync-"));
    rmSync(root, { recursive: true, force: true });
  });
  for (const dir of ["scripts", "skills/folio-style/data", "skills/folio-style/entries"])
    mkdirSync(join(root, dir), { recursive: true });
  const prompt = "First line.\n\n  [SUBJECT] keeps this spacing.\nFinal line.";
  const db = {
    count: 1,
    categories: [{ id: "craft", name: "插画工艺", blurb: "工艺" }],
    uses: [],
    prompts: [
      {
        no: "001",
        id: "stable",
        title: "样本",
        style: "布艺",
        category: "craft",
        scenarios: ["craft"],
        medium: "image",
        tags: ["手作"],
        slots: ["SUBJECT"],
        covers: ["/covers/example.jpg"],
        creator: { name: "Author", handle: "author", url: "https://x.com/author" },
        sourceUrl: "https://x.com/author/status/12345",
        date: "2026-10-01",
        prompt,
      },
    ],
  };
  writeFileSync(
    join(root, "scripts/sync-folio-data.mjs"),
    readFileSync(new URL("./sync-folio-data.mjs", import.meta.url)),
  );
  writeFileSync(join(root, "skills/folio-style/data/prompts.json"), JSON.stringify(db));
  writeFileSync(join(root, "README.md"), "当前 **156** 条\n");
  writeFileSync(join(root, "skills/folio-style/README.md"), "目前到 `156`\n");
  writeFileSync(join(root, "skills/folio-style/SKILL.md"), "当前是 `001`–`156`\n");
  return {
    root,
    db,
    run: (...args) =>
      spawnSync(process.execPath, [join(root, "scripts/sync-folio-data.mjs"), ...args], {
        encoding: "utf8",
      }),
  };
}

test("exports preserve prompt spacing and detect stale files without writing", (t) => {
  const { root, db, run } = fixture(t);
  assert.equal(run().status, 0);
  const mirror = join(root, "src/data/prompts.json");
  assert.deepEqual(JSON.parse(readFileSync(mirror, "utf8")), db);
  assert.ok(
    readFileSync(join(root, "skills/folio-style/entries/001.md"), "utf8").includes(
      db.prompts[0].prompt,
    ),
  );
  assert.equal(readFileSync(join(root, "README.md"), "utf8"), "当前 **1** 条\n");
  assert.equal(run("--check").status, 0);
  const damaged = JSON.stringify({ ...db, count: 99 });
  writeFileSync(mirror, damaged);
  const failed = run("--check");
  assert.equal(failed.status, 1);
  assert.match(failed.stderr, /src\/data\/prompts.json/);
  assert.equal(readFileSync(mirror, "utf8"), damaged);
  assert.equal(run().status, 0);
  assert.equal(run("--check").status, 0);
});

test("duplicate stable numbers are rejected before exporting", (t) => {
  const { root, db, run } = fixture(t);
  db.prompts.push({ ...db.prompts[0], id: "different" });
  db.count = 2;
  writeFileSync(join(root, "skills/folio-style/data/prompts.json"), JSON.stringify(db));
  const failed = run();
  assert.equal(failed.status, 1);
  assert.match(failed.stderr, /Duplicate number/);
  assert.throws(() => readFileSync(join(root, "src/data/prompts.json")), { code: "ENOENT" });
});

test("code-rendered videos export with their separate application intent", (t) => {
  const { root, db, run } = fixture(t);
  db.categories.push({ id: "code", name: "代码成片", blurb: "代码渲染的视频" });
  db.uses.push({ id: "reel", name: "作品集" });
  Object.assign(db.prompts[0], {
    category: "code", visualCategory: "code", medium: "video", use: "reel",
  });
  writeFileSync(join(root, "skills/folio-style/data/prompts.json"), JSON.stringify(db));
  assert.equal(run().status, 0);
  assert.equal(run("--check").status, 0);
  assert.match(readFileSync(join(root, "skills/folio-style/CATALOG.md"), "utf8"), /## 代码成片（1）/);
  assert.deepEqual(JSON.parse(readFileSync(join(root, "src/data/prompts.json"), "utf8")), db);
  db.prompts[0].medium = "image";
  writeFileSync(join(root, "skills/folio-style/data/prompts.json"), JSON.stringify(db));
  assert.match(run().stderr, /Code collection requires video/);
});
