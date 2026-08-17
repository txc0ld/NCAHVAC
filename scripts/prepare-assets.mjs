import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const BRAND = "public/brand";

async function run() {
  await mkdir("src/app", { recursive: true });

  // Trimmed nav/footer logo from the dark-background master. The linear()
  // pass clamps the near-black field to true black so mix-blend-mode: screen
  // melts it invisibly into any dark background.
  const dark = sharp(`${BRAND}/logo-dark-src.png`)
    .trim({ threshold: 24 })
    .linear(1.12, -18);
  const darkMeta = await dark.clone().toBuffer({ resolveWithObject: true });
  await sharp(darkMeta.data).resize({ width: 760 }).png().toFile(`${BRAND}/logo-dark.png`);

  const light = sharp(`${BRAND}/logo-light-src.png`).trim({ threshold: 24 });
  await light.clone().resize({ width: 760 }).png().toFile(`${BRAND}/logo-light.png`);

  // Badge crop for favicon: left ~36% of the trimmed dark logo, then re-trim + square pad.
  const { width, height } = darkMeta.info;
  const badgeW = Math.round(width * 0.36);
  const badge = await sharp(darkMeta.data)
    .extract({ left: 0, top: 0, width: badgeW, height })
    .trim({ threshold: 24 })
    .toBuffer({ resolveWithObject: true });
  const side = Math.max(badge.info.width, badge.info.height);
  const pad = Math.round(side * 0.08);
  await sharp(badge.data)
    .resize({
      width: side + pad * 2,
      height: side + pad * 2,
      fit: "contain",
      background: "#111111",
    })
    .resize(512, 512)
    .png()
    .toFile("src/app/icon.png");

  // OG image: 1200x630, #111111 field, centered logo.
  const ogLogo = await sharp(darkMeta.data).resize({ width: 860 }).toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: "#111111" },
  })
    .composite([{ input: ogLogo, gravity: "centre" }])
    .png()
    .toFile("public/og.png");

  console.log("assets done");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
