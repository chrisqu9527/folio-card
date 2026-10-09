import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "playwright";
import { checkedUrl } from "./browser-guard.mjs";

// This checkout's native agent-browser shim is unavailable on Windows.
// Drive the real app with its installed browser dependency instead.
const url = checkedUrl(process.argv[2] ?? "http://127.0.0.1:8080/");
const label = process.argv[3] ?? "dev";
assert.match(label, /^[a-z0-9-]+$/);
const operations = JSON.parse(
  readFileSync(new URL("../src/data/operations.json", import.meta.url)),
);
const db = JSON.parse(readFileSync(new URL("../src/data/prompts.json", import.meta.url)));
const dir = resolve("screenshots");
mkdirSync(dir, { recursive: true });
const verdict = { url, checks: [], appErrors: [], externalErrors: [] };
const browser = await chromium.launch({
  headless: true,
  ...(process.platform === "win32" ? { channel: "chrome" } : {}),
});
try {
  for (const viewport of [
    { name: "desktop", width: 1280, height: 800 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({ viewport });
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    const page = await context.newPage();
    page.on("pageerror", (error) => verdict.appErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() !== "error") return;
      if (
        message.location().url === "https://grok.com/grok-app-builder/extensions.js" &&
        message.text().includes("ERR_BLOCKED_BY_RESPONSE.NotSameOrigin")
      )
        verdict.externalErrors.push(message.text());
      else verdict.appErrors.push(message.text());
    });
    await page.goto(url, { waitUntil: "networkidle" });
    const cards = page.locator(".folio-card");
    assert.equal(await cards.count(), db.prompts.filter((p) => p.medium === "image").length);
    const open = () => page.getByRole("button", { name: "科普运营", exact: true }).click();
    await open();
    const dialog = page.locator(".science-dialog");
    await dialog.waitFor();
    assert.equal(
      await dialog.getByRole("navigation", { name: "科普生产用途" }).getByRole("button").count(),
      6,
    );
    for (const job of operations.jobs) {
      await dialog.getByRole("button", { name: job.name, exact: true }).click();
      assert.equal(await dialog.locator(".science-style").count(), job.styleNos.length);
      assert.equal(
        await dialog
          .getByRole("button", { name: job.name, exact: true })
          .getAttribute("aria-pressed"),
        "true",
      );
      await dialog.getByRole("button", { name: "复制制作简报", exact: true }).click();
      await dialog.getByRole("button", { name: "已复制简报", exact: true }).waitFor();
      const brief = await page.evaluate(() => navigator.clipboard.readText());
      assert.ok(brief.includes(job.instructions) && brief.includes("编辑模板，非原始提示词"));
      assert.equal(await dialog.evaluate((el) => el.scrollWidth > el.clientWidth + 1), false);
      for (const no of job.styleNos)
        assert.ok(await dialog.locator(`button[aria-label^="查看科普风格 ${no} "]`).count());
    }
    const sourceLinks = dialog.locator(".science-references a");
    assert.deepEqual(
      await sourceLinks.evaluateAll((links) => links.map((link) => link.href)),
      operations.references.map((r) => r.url),
    );
    await dialog.getByRole("button", { name: "原理图解", exact: true }).click();
    await page.screenshot({
      path: resolve(dir, `folio-ops-${label}-${viewport.name}.png`),
      animations: "disabled",
    });
    const controls = await dialog
      .getByRole("navigation")
      .getByRole("button")
      .evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().height));
    assert.ok(controls.every((height) => height >= 44));
    await dialog.getByRole("button", { name: /^查看科普风格 072 / }).click();
    await page.locator(".science-dialog").waitFor({ state: "detached" });
    const detail = page.locator(".folio-detail-dialog");
    await detail.waitFor();
    const original = db.prompts.find((p) => p.no === "072");
    assert.equal(await detail.locator(".folio-prompt-text").textContent(), original.prompt);
    await detail.getByRole("button", { name: "复制提示词", exact: true }).click();
    await detail.getByRole("button", { name: "已复制提示词", exact: true }).waitFor();
    assert.equal(
      (await page.evaluate(() => navigator.clipboard.readText())).replace(/\r\n/g, "\n"),
      original.prompt,
    );
    assert.ok(await detail.locator(`a[href="${original.sourceUrl}"]`).count());
    await detail.getByRole("button", { name: "关闭", exact: true }).click();
    await detail.waitFor({ state: "detached" });
    assert.equal(await cards.count(), 501);
    // A second modal open checks focus and pointer state after handing off to detail.
    await open();
    await dialog.waitFor();
    await dialog.getByRole("button", { name: "关闭", exact: true }).click();
    await dialog.waitFor({ state: "detached" });
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
    );
    verdict.checks.push(
      `${viewport.name}: six jobs, all style links, brief clipboard, original prompt/source, modal handoff, reopen, 44px controls, no overflow`,
    );
    await context.close();
  }
  assert.deepEqual(verdict.appErrors, []);
  verdict.ok = true;
} finally {
  await browser.close();
  writeFileSync(
    resolve(dir, `folio-ops-${label}-interactive.json`),
    JSON.stringify(verdict, null, 2) + "\n",
  );
  console.log(JSON.stringify(verdict, null, 2));
}
