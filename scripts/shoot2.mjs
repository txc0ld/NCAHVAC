import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const BASE = "http://localhost:3000";
const OUT = ".qa/scroll";
await mkdir(OUT, { recursive: true });

const jobs = [
  ["about", "/about", { width: 1440, height: 900 }, 5],
  ["services", "/services", { width: 1440, height: 900 }, 6],
  ["contact", "/contact", { width: 1440, height: 900 }, 3],
  ["m-home", "/", { width: 390, height: 844 }, 6],
  ["m-contact", "/contact", { width: 390, height: 844 }, 3],
];

const browser = await chromium.launch({ channel: "msedge", headless: true });
for (const [name, path, viewport, steps] of jobs) {
  const page = await browser.newPage({ viewport });
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i <= steps; i++) {
    const y = Math.round((height - viewport.height) * (i / steps));
    await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/${name}-${String(i).padStart(2, "0")}.png` });
  }
  await page.close();
}
await browser.close();
console.log("done");
