import type { NextConfig } from "next";
import path from "node:path";

// Vercel's edge cache drops response headers appended by proxy.ts on static
// prerendered pages, so Vary: Accept (required for markdown content
// negotiation — see src/proxy.ts) must be declared here, where it is applied
// at the routing layer. The value repeats Next's internal RSC vary tokens so
// nothing is lost if the platform overwrites rather than appends.
const varyAccept = {
  key: "Vary",
  value:
    "rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept",
};

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(process.cwd()),
  },
  headers() {
    return Promise.resolve([
      { source: "/", headers: [varyAccept] },
      { source: "/(services|about|contact|privacy)", headers: [varyAccept] },
    ]);
  },
};

export default nextConfig;
