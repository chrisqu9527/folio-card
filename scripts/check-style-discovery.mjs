// End-to-end verification on an isolated browser, with no user login/profile.
import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import { checkedUrl } from "./browser-guard.mjs";

const url = checkedUrl(process.argv[2] || "http://127.0.0.1:8080/");
const name = process.argv[3] === "built" ? "built" : "dev";
const out = resolve("screenshots");
mkdirSync(out, { recursive: true });
const data = JSON.parse(readFileSync("skills/folio-style/data/prompts.json", "utf8"));
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  permissions: ["clipboard-read", "clipboard-write"],
});
const page = await context.newPage();
const errors = [],
  failures = [],
  checks = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(`${m.text()} ${m.location().url}`);
});
page.on("requestfailed", (r) => failures.push({ url: r.url(), error: r.failure()?.errorText }));
function check(name, value) {
  assert.ok(value, name);
  checks.push(name);
}
async function screenshot(suffix) {
  await page.screenshot({ path: resolve(out, `discovery-${name}-${suffix}.png`) });
}
async function closeDialog() {
  await page.keyboard.press("Escape");
  await page.locator('[role="dialog"]').waitFor({ state: "hidden" });
}
try {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: /好画风，\s*也要用得上。/ }).waitFor();
  check("Eight curated style kits", (await page.locator(".kit-card").count()) === 8);
  check(
    "Homepage does not expose the full material grid",
    (await page.locator(".folio-card").count()) === 0,
  );
  await screenshot("home");
  await page.getByRole("button", { name: "查看 036 非人城市日常", exact: true }).click();
  check(
    "Featured art opens its exact original prompt",
    (await page.locator(".folio-prompt-text").innerText()) ===
      data.prompts.find((p) => p.no === "036").prompt,
  );
  await closeDialog();
  await page.getByRole("link", { name: "按用途选画风", exact: true }).click();
  check(
    "Use-case shortcut reaches visible filters",
    await page
      .locator(".creation-tasks")
      .evaluate(
        (e) =>
          e.getBoundingClientRect().top >= 0 &&
          e.getBoundingClientRect().bottom < window.innerHeight,
      ),
  );
  await page.locator(".kit-grid").scrollIntoViewIfNeeded();
  await page.waitForFunction(() =>
    [...document.querySelectorAll(".kit-cover img")]
      .slice(0, 3)
      .every((i) => i.complete && i.naturalWidth > 0),
  );
  check(
    "First three style previews render at usable size",
    await page
      .locator(".kit-cover img")
      .evaluateAll((imgs) => imgs.slice(0, 3).every((i) => i.getBoundingClientRect().height > 100)),
  );
  await screenshot("gallery");
  for (const width of [1024, 820, 768]) {
    await page.setViewportSize({ width, height: 1024 });
    await page.evaluate(() => window.scrollTo(0, 0));
    check(
      `No horizontal overflow at ${width}px`,
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    );
    await screenshot(`width-${width}`);
  }
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.getByRole("button", { name: "讲清一个过程", exact: false }).click();
  check("Task filter narrows to appropriate kits", (await page.locator(".kit-card").count()) === 3);
  await page.getByRole("button", { name: "看全部 8 种", exact: true }).click();
  await page.getByRole("button", { name: "收藏角色讲解漫画", exact: true }).click();
  await page.reload({ waitUntil: "networkidle" });
  await page
    .getByRole("navigation", { name: "浏览方式" })
    .getByRole("button", { name: "我的常用", exact: true })
    .click();
  check("Saved kit survives reload", (await page.locator(".kit-card").count()) === 1);
  await screenshot("saved");
  await page.getByRole("button", { name: "取消收藏角色讲解漫画", exact: true }).click();
  await page.getByRole("heading", { name: "把喜欢的画风留在这里" }).waitFor();
  checks.push("Empty saved state has a working starting action");
  await page
    .getByRole("navigation", { name: "浏览方式" })
    .getByRole("button", { name: "找画风", exact: true })
    .click();
  for (const kit of ["角色讲解漫画", "手绘知识卡", "结构拆解图"])
    await page.getByRole("button", { name: `加入对比${kit}`, exact: true }).click();
  check(
    "Comparison capped at three",
    await page.getByRole("button", { name: "加入对比自然博物图鉴", exact: true }).isDisabled(),
  );
  await page.getByRole("button", { name: "比较画风", exact: true }).click();
  await page.getByLabel("用一个选题来比较").fill("自行车的传动");
  check(
    "Same topic across three plans",
    (await page.locator(".comparison-grid strong").filter({ hasText: "自行车的传动" }).count()) ===
      3,
  );
  await screenshot("compare");
  await page.getByRole("button", { name: "选这个方案", exact: true }).first().click();
  await page.getByRole("button", { name: "用我的内容", exact: true }).click();
  check(
    "Comparison topic carries to form",
    (await page.getByLabel("主题 必填", { exact: true }).inputValue()) === "自行车的传动",
  );
  await page
    .getByLabel("要讲的内容 必填", { exact: true })
    .fill("脚踏带动牙盘；链条把运动传递给后轮。测试特殊字符 <标签> 与 & 符号。");
  await page.getByLabel("给谁看", { exact: true }).selectOption("中学生");
  await page.getByLabel("画幅", { exact: true }).selectOption("16:9 横版");
  await page.getByLabel("固定人物或栏目设定 选填", { exact: true }).fill("蓝衣小熊和红衣小鸟");
  await page.getByRole("button", { name: "生成适配提示词", exact: true }).click();
  const draft = await page.locator(".adapted-result pre").innerText();
  for (const s of ["自行车的传动", "中学生", "16:9 横版", "蓝衣小熊", "<标签>", "不是原作者原文"])
    check(`Draft retains ${s}`, draft.includes(s));
  await page.getByRole("button", { name: "复制适配提示词", exact: true }).click();
  await page.locator(".adapted-result button").filter({ hasText: "已复制" }).waitFor();
  check(
    "Adapted clipboard exact (OS newlines normalized)",
    (await page.evaluate(() => navigator.clipboard.readText())).replace(/\r\n/g, "\n") ===
      draft.replace(/\r\n/g, "\n"),
  );
  await page.getByLabel("主题 必填", { exact: true }).fill("自行车传动更新");
  check("Stale draft cannot be copied", await page.locator(".adapted-result button").isDisabled());
  await page.getByRole("button", { name: "更新适配提示词", exact: true }).click();
  await page.locator(".adapted-result").scrollIntoViewIfNeeded();
  await screenshot("adapted");
  await page.locator(".kit-source-details summary").click();
  const source = data.prompts.find((p) => p.no === "640");
  check(
    "Original source text unchanged",
    (await page.locator(".kit-source-details pre").innerText()) === source.prompt,
  );
  await page.getByRole("button", { name: "复制原始提示词", exact: true }).click();
  await page.locator(".kit-source-details button").filter({ hasText: "已复制" }).waitFor();
  check(
    "Original clipboard exact (OS newlines normalized)",
    (await page.evaluate(() => navigator.clipboard.readText())).replace(/\r\n/g, "\n") ===
      source.prompt.replace(/\r\n/g, "\n"),
  );
  await closeDialog();
  await page
    .getByRole("navigation", { name: "浏览方式" })
    .getByRole("button", { name: "全部素材", exact: true })
    .click();
  await page.locator("#folio-q").fill("647");
  check("Legacy number search", (await page.locator(".folio-card").count()) === 1);
  await page.getByRole("button", { name: "查看 647 帝国兴衰的文明地层图解", exact: true }).click();
  check(
    "Legacy prompt still accessible",
    (await page.locator(".folio-prompt-text").innerText()) ===
      data.prompts.find((p) => p.no === "647").prompt,
  );
  await closeDialog();
  await page.locator("#folio-q").fill("this-does-not-exist-922");
  await page.getByRole("heading", { name: "没有找到匹配的风格" }).waitFor();
  checks.push("Library no-result recovery");
  await page.getByRole("button", { name: "视频风格", exact: true }).click();
  check(
    "Legacy video entries preserved",
    (await page.locator(".folio-card").count()) ===
      data.prompts.filter((p) => p.medium === "video").length,
  );
  await page.goto(`${url}#604`, { waitUntil: "networkidle" });
  await page.getByRole("dialog").waitFor();
  check(
    "Deep link opens the original record",
    (await page.getByRole("heading", { name: "自然百科的复古图鉴页", exact: true }).count()) === 1,
  );
  await closeDialog();
  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .getByRole("navigation", { name: "浏览方式" })
    .getByRole("button", { name: "找画风", exact: true })
    .click();
  await page.evaluate(() => window.scrollTo(0, 0));
  await screenshot("mobile");
  check(
    "Mobile has no horizontal overflow",
    await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
  );
  await page.getByRole("button", { name: "查看角色讲解漫画的应用示例", exact: true }).click();
  await page.getByRole("button", { name: "用我的内容", exact: true }).click();
  await screenshot("mobile-form");
  check(
    "Mobile dialog has no horizontal overflow",
    await page.locator(".kit-detail-scroll").evaluate((e) => e.scrollWidth <= e.clientWidth),
  );
  await page.getByRole("button", { name: "冰为什么会浮在水面上", exact: false }).click();
  check(
    "Example briefing fills the form",
    (await page.getByLabel("要讲的内容 必填", { exact: true }).inputValue()).includes("体积增大"),
  );
  await closeDialog();
  await page
    .getByRole("navigation", { name: "浏览方式" })
    .getByRole("button", { name: "全部素材", exact: true })
    .click();
  await page.getByRole("button", { name: "图像风格", exact: true }).click();
  await screenshot("mobile-library");
  const imageFailures = await page
    .locator("img")
    .evaluateAll((imgs) =>
      imgs
        .filter((i) => i.loading !== "lazy" && i.complete && i.naturalWidth === 0)
        .map((i) => i.src),
    );
  check("Visible non-lazy image assets load", imageFailures.length === 0);
  check(
    "Mobile library has no horizontal overflow",
    await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
  );
  const firstCardWidth = await page
    .locator(".folio-card")
    .first()
    .evaluate((e) => e.getBoundingClientRect().width);
  check("Mobile library cards are readable", firstCardWidth >= 160);
  const externalPlatformFailures = failures.filter((f) =>
    f.url.startsWith("https://grok.com/grok-app-builder/extensions.js"),
  );
  const appErrors = errors.filter(
    (e) => !e.includes("https://grok.com/grok-app-builder/extensions.js"),
  );
  check("No app runtime errors", appErrors.length === 0);
  writeFileSync(
    resolve(out, `discovery-${name}-checks.json`),
    JSON.stringify(
      { url, checks, errors, failures, externalPlatformFailures, appErrors, result: "passed" },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify({ result: "passed", checks: checks.length, errors, failures }, null, 2),
  );
} catch (error) {
  await screenshot("failure");
  writeFileSync(
    resolve(out, `discovery-${name}-checks.json`),
    JSON.stringify({ result: "failed", checks, error: String(error), errors, failures }, null, 2),
  );
  throw error;
} finally {
  await browser.close();
}
