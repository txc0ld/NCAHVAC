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

  // The white-point clamp pushes the near-white field to true white so
  // mix-blend-mode: multiply melts it into any light background.
  const light = sharp(`${BRAND}/logo-light-src.png`)
    .trim({ threshold: 24 })
    .linear(1.07, 0);
  await light.clone().resize({ width: 760 }).png().toFile(`${BRAND}/logo-light.png`);

  // Favicon: the hexagon mark only. In the trimmed dark logo the mark occupies
  // the first 32% of the width and the top 91% of the height; the wordmark
  // starts after a clear column gap and the "AIR CONDITIONING" strip sits
  // below a clear row gap, so both are excluded before re-trimming.
  const { width, height } = darkMeta.info;
  const badge = await sharp(darkMeta.data)
    .extract({
      left: 0,
      top: 0,
      width: Math.round(width * 0.32),
      height: Math.round(height * 0.91),
    })
    .trim({ threshold: 24 })
    .toBuffer({ resolveWithObject: true });
  // Square #111111 canvas. Google and mobile launchers mask favicons to a
  // circle, so the mark fills the canvas almost edge to edge (3% margin).
  const { width: bw, height: bh } = badge.info;
  const side = Math.round(Math.max(bw, bh) * 1.06);
  // sharp runs resize before extend regardless of call order, so the padded
  // canvas is materialised before the final downscale.
  const iconBase = await sharp(badge.data)
    .extend({
      top: Math.floor((side - bh) / 2),
      bottom: Math.ceil((side - bh) / 2),
      left: Math.floor((side - bw) / 2),
      right: Math.ceil((side - bw) / 2),
      background: "#111111",
    })
    .toBuffer();
  await sharp(iconBase).resize(512, 512).png().toFile("src/app/icon.png");
  await sharp(iconBase).resize(180, 180).png().toFile("src/app/apple-icon.png");

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
