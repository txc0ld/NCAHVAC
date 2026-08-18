import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const BASE = "http://localhost:3000";
const OUT = ".qa/themes";
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ channel: "msedge", headless: true });

for (const theme of ["dark", "light"]) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript((t) => {
    try {
      localStorage.setItem("nca-theme", t);
    } catch {}
  }, theme);
  const page = await ctx.newPage();

  for (const [name, path, scrolls] of [
    ["home", "/", [0, 900, 1800, 2700, 3600, 4500, 5400, 6300, 7200]],
    ["services", "/services", [0, 1200]],
    ["contact", "/contact", [0, 900]],
    ["about", "/about", [0, 1000]],
  ]) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    for (const [i, y] of scrolls.entries()) {
      await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
      await page.waitForTimeout(450);
      await page.screenshot({ path: `${OUT}/${theme}-${name}-${i}.png` });
    }
  }
  await ctx.close();
}
await browser.close();
console.log("done");
