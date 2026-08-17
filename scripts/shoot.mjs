import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const BASE = "http://localhost:3000";
const OUT = ".qa";
const pages = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["contact", "/contact"],
  ["404", "/nope"],
];
const viewports = [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const errors = [];

for (const [vpName, viewport] of viewports) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${vpName}] console: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${vpName}] pageerror: ${e.message}`));
  for (const [name, path] of pages) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    // Force whileInView reveals by scrolling through the page first.
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y <= h; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(700);
    await page.screenshot({
      path: `${OUT}/${name}-${vpName}.png`,
      fullPage: true,
    });
  }
  await ctx.close();
}

await browser.close();
if (errors.length) {
  console.log("CONSOLE/PAGE ERRORS:");
  for (const e of errors) console.log(" -", e);
} else {
  console.log("no console or page errors");
}
console.log("screenshots written to", OUT);
