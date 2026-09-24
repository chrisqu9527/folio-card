#!/usr/bin/env node
// FOLIO style lookup. Usage:
//   node scripts/lookup.mjs 16
//   node scripts/lookup.mjs 016
//   node scripts/lookup.mjs --search 武侠
//   node scripts/lookup.mjs --category eastern
//   node scripts/lookup.mjs --list
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const db = JSON.parse(readFileSync(join(root, "data/prompts.json"), "utf8"));
const byNo = new Map(db.prompts.map((p) => [p.no, p]));
const catName = Object.fromEntries(db.categories.map((c) => [c.id, c.name]));

function parseNo(raw) {
  const m = String(raw).trim().match(/^(?:#|no\.?|风格|编号)?\s*0*(\d{1,3})\s*号?$/i);
  if (!m) return null;
  return String(Number(m[1])).padStart(3, "0");
}

function line(p) {
  return `${p.no}\t${catName[p.category]}\t${p.medium}\t${p.style}\t${p.title}\t@${p.creator.handle}`;
}

function printOne(p) {
  const slots = p.slots?.length ? p.slots.map((s) => `【${s}】`).join("、") : "无";
  process.stdout.write(
    [
      `NO ${p.no}`,
      `TITLE ${p.title}`,
      `STYLE ${p.style}`,
      `CATEGORY ${catName[p.category]} (${p.category})`,
      `MEDIUM ${p.medium}`,
      `CREATOR ${p.creator.name} @${p.creator.handle}`,
      `SOURCE ${p.sourceUrl}`,
      p.model ? `MODEL ${p.model}` : "",
      `SLOTS ${slots}`,
      p.notes ? `NOTES ${p.notes}` : "",
      "---PROMPT---",
      p.prompt,
      "---END---",
      "",
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
  console.log("usage: lookup.mjs <编号> | --list | --category <id|中文名> | --search <词>");
  process.exit(args.length === 0 ? 1 : 0);
}

if (args[0] === "--list") {
  for (const p of db.prompts) console.log(line(p));
  process.exit(0);
}

if (args[0] === "--category") {
  const q = (args[1] || "").trim().toLowerCase();
  const cat = db.categories.find((c) => c.id === q || c.name === args[1]);
  if (!cat) {
    console.error("unknown category. use: " + db.categories.map((c) => `${c.id}(${c.name})`).join(", "));
    process.exit(1);
  }
  for (const p of db.prompts.filter((p) => p.category === cat.id)) console.log(line(p));
  process.exit(0);
}

if (args[0] === "--search") {
  const q = args.slice(1).join(" ").trim().toLowerCase();
  if (!q) {
    console.error("missing query");
    process.exit(1);
  }
  const hits = db.prompts.filter((p) =>
    [p.no, p.title, p.style, p.kicker, p.excerpt, p.category, catName[p.category], p.creator.name, p.creator.handle, ...p.tags]
      .join("\n")
      .toLowerCase()
      .includes(q),
  );
  if (!hits.length) {
    console.error("no match");
    process.exit(1);
  }
  for (const p of hits) console.log(line(p));
  process.exit(0);
}

const no = parseNo(args[0]);
const hit = no && byNo.get(no);
if (!hit) {
  console.error(`unknown number: ${args[0]}`);
  process.exit(1);
}
printOne(hit);
