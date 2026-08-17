import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const BASE = "http://localhost:3000";
const OUT = ".qa/scroll";
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE + "/", { waitUntil: "networkidle" });

const height = await page.evaluate(() => document.body.scrollHeight);
const steps = 8;
for (let i = 0; i <= steps; i++) {
  const y = Math.round((height - 900) * (i / steps));
  await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
  await page.waitForTimeout(450);
  await page.screenshot({ path: `${OUT}/home-${String(i).padStart(2, "0")}.png` });
}
await browser.close();
console.log("done", height);
