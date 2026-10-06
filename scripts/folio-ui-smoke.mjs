import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { checkedUrl } from "./browser-guard.mjs";

// Native agent-browser is unavailable in this Windows checkout. Exercise the
// actual app with the installed Playwright dependency and an isolated browser.
const url = checkedUrl(process.argv[2] ?? "http://127.0.0.1:8080/");
const db = JSON.parse(readFileSync(new URL("../src/data/prompts.json", import.meta.url), "utf8"));
const out = new URL("../screenshots/", import.meta.url);
const screenshotDir = fileURLToPath(out);
const outputPrefix = process.env.FOLIO_SMOKE_PREFIX ?? "folio";
assert.match(outputPrefix, /^[a-z0-9-]+$/);
const clipboardText = (text) => text.replace(/\r\n/g, "\n");
mkdirSync(out, { recursive: true });
const errors = [];
const checks = [];
const browser = await chromium.launch({
  headless: true,
  ...(process.platform === "win32" ? { channel: "chrome" } : {}),
});
try {
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const page = await context.newPage();
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  const cards = page.locator(".folio-card");
  const query = page.getByRole("textbox", { name: "搜索场景、编号、风格或作者" });
  const waitCount = (n) =>
    page.waitForFunction((count) => document.querySelectorAll(".folio-card").length === count, n);
  const noOverflow = async () =>
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
    );
  const imageCount = db.prompts.filter((p) => p.medium === "image").length;
  await page.goto(url, { waitUntil: "networkidle" });
  assert.equal(await page.title(), "C叔风格库");
  await page.waitForFunction(() => {
    const logo = document.querySelector(".folio-logo img");
    return logo?.complete && logo.naturalWidth > 0;
  });
  assert.equal(await page.locator(".folio-logo img").getAttribute("src"), "/brand/cshu-owl.png");
  await waitCount(imageCount);
  await page.waitForFunction(() => document.querySelectorAll(".folio-column").length === 5);
  await noOverflow();
  await page.screenshot({
    path: join(screenshotDir, `${outputPrefix}-wide.png`),
    animations: "disabled",
  });
  checks.push("desktop: five-column gallery, all image entries, no overflow");

  await page
    .getByRole("navigation", { name: "应用场景" })
    .getByRole("button", { name: "表达心意", exact: true })
    .click();
  await waitCount(
    db.prompts.filter((p) => p.medium === "image" && p.scenarios.includes("feeling")).length,
  );
  assert.ok(
    (await cards.evaluateAll((items) => items.map((item) => item.dataset.no))).includes("110"),
  );
  checks.push("scenario filter includes secondary uses");
  for (const category of db.categories) {
    if (!db.prompts.some((p) => p.medium === "image" && p.scenarios.includes(category.id))) continue;
    await page
      .getByRole("navigation", { name: "应用场景" })
      .getByRole("button", { name: category.name, exact: true })
      .click();
    const expected = db.prompts.filter(
      (p) => p.medium === "image" && p.scenarios.includes(category.id),
    );
    await waitCount(expected.length);
    const actual = await cards.evaluateAll((items) => items.map((item) => item.dataset.no).sort());
    assert.deepEqual(actual, expected.map((p) => p.no).sort());
  }
  checks.push("all nine image scenarios match their actual record sets");
  await query.fill("完全不存在的风格_xyz");
  await waitCount(0);
  assert.equal(await page.getByText("没有找到匹配的风格", { exact: true }).isVisible(), true);
  await query.fill("016");
  await waitCount(1);
  const numbered = db.prompts.find((p) => p.no === "016");
  await cards.getByRole("button", { name: `查看 016 ${numbered.title}`, exact: true }).click();
  assert.equal(await page.locator(".folio-prompt-text").textContent(), numbered.prompt);
  assert.equal(
    await page.getByRole("link", { name: "查看原帖" }).getAttribute("href"),
    numbered.sourceUrl,
  );
  await page.bringToFront();
  await page.getByRole("button", { name: "复制提示词", exact: true }).click();
  await page.getByRole("button", { name: "已复制提示词", exact: true }).waitFor();
  assert.equal(
    clipboardText(await page.evaluate(() => navigator.clipboard.readText())),
    numbered.prompt,
  );
  await page.screenshot({
    path: join(screenshotDir, `${outputPrefix}-detail.png`),
    animations: "disabled",
  });
  await page.keyboard.press("Escape");
  checks.push("number lookup, exact original prompt, author link, real clipboard copy");

  await query.fill("001");
  await waitCount(1);
  await cards.locator(".folio-card-cover").click();
  const first = db.prompts.find((p) => p.no === "001");
  await page.getByRole("button", { name: "查看样张 2", exact: true }).click();
  assert.equal(await page.locator(".folio-detail-image img").getAttribute("src"), first.covers[1]);
  await page.getByRole("button", { name: "放大图片", exact: true }).click();
  await page.keyboard.press("ArrowLeft");
  assert.equal(await page.locator(".folio-lightbox > img").getAttribute("src"), first.covers[0]);
  await page.keyboard.press("Escape");
  await page.locator(".folio-lightbox").waitFor({ state: "hidden" });
  assert.equal(await page.locator(".folio-detail-dialog").isVisible(), true);
  await page.keyboard.press("Escape");
  await page.locator(".folio-detail-dialog").waitFor({ state: "hidden" });
  await cards.getByRole("button", { name: "收藏 001", exact: true }).click();
  await page.reload({ waitUntil: "networkidle" });
  await page.getByRole("button", { name: "取消收藏 001", exact: true }).waitFor();
  await page.getByRole("button", { name: "只看收藏", exact: true }).click();
  await waitCount(1);
  await cards.getByRole("button", { name: "取消收藏 001", exact: true }).click();
  await waitCount(0);
  checks.push(
    "sample switching, nested lightbox keyboard controls, persistent favorites, empty favorites",
  );

  await page.getByRole("button", { name: "视频风格", exact: true }).click();
  await waitCount(db.prompts.filter((p) => p.medium === "video").length);
  await page
    .getByRole("navigation", { name: "视频形式" })
    .getByRole("button", { name: "预告片", exact: true })
    .click();
  await waitCount(db.prompts.filter((p) => p.medium === "video" && p.use === "trailer").length);
  await page.getByRole("button", { name: "全部形式", exact: true }).click();
  await page
    .getByRole("navigation", { name: "应用场景" })
    .getByRole("button", { name: "讲清知识", exact: true })
    .click();
  await waitCount(
    db.prompts.filter((p) => p.medium === "video" && p.scenarios.includes("knowledge")).length,
  );
  await page
    .getByRole("navigation", { name: "视频形式" })
    .getByRole("button", { name: "产品宣传", exact: true })
    .click();
  await waitCount(
    db.prompts.filter(
      (p) => p.medium === "video" && p.scenarios.includes("knowledge") && p.use === "product",
    ).length,
  );
  assert.equal(
    await page
      .getByRole("navigation", { name: "应用场景" })
      .getByRole("button", { name: "讲清知识", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  checks.push("video intent remains selected when intersected with format");
  await page.getByRole("button", { name: "图像风格", exact: true }).click();
  await waitCount(imageCount);
  await page.getByRole("button", { name: "最新", exact: true }).click();
  const newest = db.prompts
    .filter((p) => p.medium === "image")
    .sort((a, b) => b.date.localeCompare(a.date) || Number(b.no) - Number(a.no))[0];
  assert.equal(await cards.first().getAttribute("data-no"), newest.no);
  await page.getByRole("button", { name: "编号", exact: true }).click();
  assert.equal(await cards.first().getAttribute("data-no"), "001");
  checks.push("video library and use filter, date and number sorting");

  await page.getByRole("button", { name: "视频风格", exact: true }).click();
  await page.getByRole("button", { name: "重置筛选", exact: true }).click();
  await page.getByRole("button", { name: "代码成片", exact: true }).click();
  await waitCount(db.prompts.filter((p) => p.category === "code").length);
  assert.deepEqual(
    await cards.evaluateAll((nodes) => nodes.map((node) => node.getAttribute("data-no")).sort()),
    db.prompts.filter((p) => p.category === "code").map((p) => p.no).sort(),
  );
  checks.push("code-rendered videos are available as a collection without losing their application intent");

  await page.goto(`${url}#016`, { waitUntil: "networkidle" });
  await page.locator(".folio-detail-dialog").waitFor();
  assert.equal(await page.locator(".folio-prompt-text").textContent(), numbered.prompt);
  await page.keyboard.press("Escape");
  const refresh = JSON.parse(
    readFileSync(
      new URL("../skills/folio-style/data/refresh-20260930.json", import.meta.url),
      "utf8",
    ),
  );
  const samples = db.prompts.filter(
    (p) =>
      (Number(p.no) > refresh.baselineCount && Number(p.no) <= 162) ||
      Number(p.no) >= 457 ||
      ["163", "191", "290", "431", "433", "442", "443", "449", "450", "451", "454", "456"].includes(
        p.no,
      ),
  );
  for (const added of samples) {
    await page.getByRole("button", { name: "重置筛选", exact: true }).click();
    await page
      .getByRole("button", {
        name: added.medium === "image" ? "图像风格" : "视频风格",
        exact: true,
      })
      .click();
    await query.fill(added.no);
    await waitCount(1);
    assert.equal(await cards.first().getAttribute("data-no"), added.no);
    await cards.locator(".folio-card-cover").click();
    assert.equal(await page.locator(".folio-prompt-text").textContent(), added.prompt);
    assert.equal(
      await page.getByRole("link", { name: "查看原帖" }).getAttribute("href"),
      added.sourceUrl,
    );
    await page.waitForFunction(() => {
      const img = document.querySelector(".folio-detail-image img");
      return img?.complete && img.naturalWidth > 0;
    });
    await page.bringToFront();
    await page.getByRole("button", { name: "复制提示词", exact: true }).click();
    await page.getByRole("button", { name: "已复制提示词", exact: true }).waitFor();
    assert.equal(
      clipboardText(await page.evaluate(() => navigator.clipboard.readText())),
      added.prompt,
    );
    await page.keyboard.press("Escape");
  }
  checks.push(
    "representative entries across collections: exact lookup, original prompt, source, cover and clipboard",
  );
  await page.getByRole("button", { name: "图像风格", exact: true }).click();
  await page.getByRole("button", { name: "重置筛选", exact: true }).click();
  await waitCount(imageCount);
  await page.setViewportSize({ width: 900, height: 900 });
  await noOverflow();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForFunction(() => document.querySelectorAll(".folio-column").length === 2);
  assert.equal(await page.locator(".folio-mobile-brand").isVisible(), true);
  assert.equal(await page.locator(".folio-mobile-brand span").textContent(), "C叔");
  assert.equal(
    await page
      .locator(".folio-mobile-brand img")
      .evaluate((el) => el.complete && el.naturalWidth > 0),
    true,
  );
  await noOverflow();
  await page
    .getByRole("navigation", { name: "应用场景" })
    .getByRole("button", { name: "构思角色与世界", exact: true })
    .click();
  await waitCount(
    db.prompts.filter((p) => p.medium === "image" && p.scenarios.includes("concept")).length,
  );
  await noOverflow();
  await page.screenshot({
    path: join(screenshotDir, `${outputPrefix}-phone.png`),
    animations: "disabled",
  });
  await query.fill("016");
  await waitCount(1);
  await cards.locator(".folio-card-cover").click();
  const scrollBox = page.locator(".folio-detail-layout");
  assert.equal(await scrollBox.evaluate((el) => el.scrollHeight > el.clientHeight), true);
  await scrollBox.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  assert.equal(await scrollBox.evaluate((el) => el.scrollTop > 0), true);
  await page.bringToFront();
  await page.getByRole("button", { name: "复制提示词", exact: true }).click();
  await page.getByRole("button", { name: "已复制提示词", exact: true }).waitFor();
  assert.equal(
    clipboardText(await page.evaluate(() => navigator.clipboard.readText())),
    numbered.prompt,
  );
  await page.screenshot({
    path: join(screenshotDir, `${outputPrefix}-phone-detail.png`),
    animations: "disabled",
  });
  await noOverflow();
  const close = page.getByRole("button", { name: "关闭", exact: true });
  assert.equal(
    await close.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      const topElement = document.elementFromPoint(
        rect.x + rect.width / 2,
        rect.y + rect.height / 2,
      );
      return rect.top >= 0 && rect.bottom <= innerHeight && el.contains(topElement);
    }),
    true,
  );
  await close.click();
  await page.locator(".folio-detail-dialog").waitFor({ state: "hidden" });
  checks.push(
    "hash deep link, tablet and mobile responsive layout, mobile dialog scroll, copy and visible close control",
  );
  assert.deepEqual(errors, []);
  writeFileSync(
    new URL(`${outputPrefix}-interactions.json`, out),
    JSON.stringify({ ok: true, url, checks, errors }, null, 2),
  );
  console.log(JSON.stringify({ ok: true, checks, errors }, null, 2));
} finally {
  await browser.close();
}
