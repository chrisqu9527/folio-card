#!/usr/bin/env node
import assert from "node:assert/strict";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// This file is the only editable library. Website, Markdown and counts are exports.
const root = fileURLToPath(new URL("../", import.meta.url));
const canonical = "skills/folio-style/data/prompts.json";
const read = (path) => readFileSync(resolve(root, path), "utf8").replace(/\r\n/g, "\n");
const db = JSON.parse(read(canonical));
const check = process.argv.includes("--check");
const categories = Object.fromEntries(db.categories.map((c) => [c.id, c.name]));
const uses = Object.fromEntries(db.uses.map((u) => [u.id, u.name]));
assert.equal(db.count, db.prompts.length, "Canonical count differs from records");
assert.equal(new Set(db.prompts.map((p) => p.no)).size, db.count, "Duplicate number");
assert.equal(new Set(db.prompts.map((p) => p.id)).size, db.count, "Duplicate ID");
for (const [index, p] of db.prompts.entries()) {
  assert.equal(p.no, String(index + 1).padStart(3, "0"), "Number order changed");
  assert.ok(categories[p.category], `Unknown category ${p.no}`);
  assert.ok(["image", "video"].includes(p.medium));
  if (p.medium === "video") assert.ok(uses[p.use], `Missing video use ${p.no}`);
  assert.ok(p.prompt.trim() && p.creator.handle && p.sourceUrl && p.covers.length);
}

const stale = [];
function exportFile(path, content) {
  let current;
  try {
    current = read(path);
  } catch {
    current = undefined;
  }
  if (current === content) return;
  stale.push(path);
  if (check) return;
  mkdirSync(dirname(resolve(root, path)), { recursive: true });
  writeFileSync(resolve(root, path), content);
}

function renderEntry(p) {
  const q = (value) => JSON.stringify(value);
  const front = [
    "---",
    `no: ${q(p.no)}`,
    `title: ${q(p.title)}`,
    `style: ${q(p.style)}`,
    `category: ${p.category}`,
    `category_name: ${categories[p.category]}`,
    `medium: ${p.medium}`,
    ...(p.use ? [`use: ${p.use}`] : []),
    `creator: ${q(p.creator.name)}`,
    `handle: ${p.creator.handle}`,
    `source: ${p.sourceUrl}`,
    `date: ${p.date}`,
    `tags: ${q(p.tags)}`,
    "---",
  ];
  return [
    ...front,
    "",
    `# ${p.no} · ${p.title}`,
    "",
    `- 风格：${p.style}`,
    `- 分类：${categories[p.category]}`,
    `- 媒介：${p.medium === "image" ? "图像" : "视频"}`,
    ...(p.use ? [`- 场景：${uses[p.use]}`] : []),
    `- 作者：${p.creator.name} [@${p.creator.handle}](${p.creator.url})`,
    `- 原帖：${p.sourceUrl}`,
    ...(p.model ? [`- 模型备注：${p.model}`] : []),
    "",
    p.slots.length
      ? `可替换槽位：${p.slots.map((slot) => `【${slot}】`).join("、")}。只替换槽位，其余句子保持原样。`
      : "没有显式槽位。要换主体时，只替换画面里的主体描述，版式、镜头、材质和禁止项保持原样。",
    ...(p.notes ? ["", `作者后记：${p.notes}`] : []),
    "",
    "## 提示词",
    "",
    "```",
    p.prompt,
    "```",
    "",
  ].join("\n");
}

function renderCatalog() {
  const lines = [
    "# FOLIO 风格编号目录",
    "",
    `共 ${db.count} 条。图像按风格分类，视频再按场景用途分开。编号 001–106 已冻结；107 起只追加。复制时读 \`entries/NNN.md\`，不要改写提示词。`,
    "",
  ];
  const table = (items) => {
    lines.push("| 编号 | 风格 | 标题 | 作者 |", "| --- | --- | --- | --- |");
    for (const p of items)
      lines.push(
        `| ${p.no} | ${p.style.replaceAll("|", "\\|")} | ${p.title.replaceAll("|", "\\|")} | @${p.creator.handle} |`,
      );
    lines.push("");
  };
  const images = db.prompts.filter((p) => p.medium === "image");
  const videos = db.prompts.filter((p) => p.medium === "video");
  lines.push(`# 图像（${images.length}）`, "");
  for (const category of db.categories) {
    const items = images.filter((p) => p.category === category.id);
    if (!items.length) continue;
    lines.push(`## ${category.name}（${items.length}）`, "", category.blurb, "");
    table(items);
  }
  lines.push(`# 视频（${videos.length}）`, "");
  for (const use of db.uses) {
    const items = videos.filter((p) => p.use === use.id);
    if (!items.length) continue;
    lines.push(`## ${use.name}（${items.length}）`, "", use.blurb, "");
    table(items);
  }
  return lines.join("\n");
}

exportFile("src/data/prompts.json", JSON.stringify(db, null, 2) + "\n");
for (const p of db.prompts) exportFile(`skills/folio-style/entries/${p.no}.md`, renderEntry(p));
exportFile("skills/folio-style/CATALOG.md", renderCatalog());
for (const [path, pattern, replacement] of [
  ["README.md", /当前 \*\*\d+\*\* 条/, `当前 **${db.count}** 条`],
  ["skills/folio-style/README.md", /目前到 `\d+`/, `目前到 \`${db.count}\``],
  ["skills/folio-style/SKILL.md", /当前是 `001`–`\d+`/, `当前是 \`001\`–\`${db.count}\``],
]) {
  const text = read(path);
  assert.ok(pattern.test(text), `Missing count marker in ${path}`);
  exportFile(path, text.replace(pattern, replacement));
}
const expected = new Set(db.prompts.map((p) => `${p.no}.md`));
const orphans = readdirSync(resolve(root, "skills/folio-style/entries")).filter(
  (name) => name.endsWith(".md") && !expected.has(name),
);
assert.deepEqual(orphans, [], "Unindexed Markdown entries; add them to the canonical data first");
if (check && stale.length) {
  console.error("Stale exports. Run npm run data:sync:\n" + stale.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    JSON.stringify({
      ok: true,
      count: db.count,
      mode: check ? "check" : "sync",
      updated: stale.length,
    }),
  );
}
