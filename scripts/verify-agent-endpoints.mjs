/**
 * Agent-readiness endpoint tests. Run against a built server:
 *   npm run build && npm start   (or next start -p <port>)
 *   BASE_URL=http://localhost:3000 npm run test:agents
 */
const base = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");

let failed = 0;
let passed = 0;

function assert(cond, message) {
  if (!cond) throw new Error(message);
}

async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log(`  ok    ${name}`);
  } catch (err) {
    failed++;
    console.error(`  FAIL  ${name}: ${err.message}`);
  }
}

console.log(`Agent-readiness checks against ${base}\n`);

await test("unknown path returns HTTP 404 with recovery links", async () => {
  const res = await fetch(`${base}/some-path-that-does-not-exist`);
  assert(res.status === 404, `expected 404, got ${res.status}`);
  const html = await res.text();
  assert(html.includes("/sitemap.xml"), "404 body missing /sitemap.xml link");
  assert(html.includes("/llms.txt"), "404 body missing /llms.txt link");
});

await test("Accept: text/markdown on / negotiates markdown with Vary: Accept", async () => {
  const res = await fetch(`${base}/`, { headers: { Accept: "text/markdown" } });
  assert(res.status === 200, `expected 200, got ${res.status}`);
  const type = res.headers.get("content-type") ?? "";
  assert(type.includes("text/markdown"), `expected text/markdown, got "${type}"`);
  const vary = res.headers.get("vary") ?? "";
  assert(/\baccept\b/i.test(vary), `Vary missing Accept (got "${vary}")`);
  const body = await res.text();
  assert(body.startsWith("# "), "markdown body missing H1");
  assert(body.includes("NCA HVAC"), "markdown body missing brand name");
});

await test("Accept: text/markdown on unknown path returns markdown 404", async () => {
  const res = await fetch(`${base}/nope-${Date.now()}`, {
    headers: { Accept: "text/markdown" },
  });
  assert(res.status === 404, `expected 404, got ${res.status}`);
  const type = res.headers.get("content-type") ?? "";
  assert(type.includes("text/markdown"), `expected text/markdown, got "${type}"`);
  const body = await res.text();
  assert(body.includes("/llms.txt"), "markdown 404 missing /llms.txt pointer");
});

await test("every page has a /md markdown rendition", async () => {
  for (const p of ["/md", "/md/services", "/md/about", "/md/contact", "/md/privacy"]) {
    const res = await fetch(`${base}${p}`);
    assert(res.status === 200, `${p}: expected 200, got ${res.status}`);
    const type = res.headers.get("content-type") ?? "";
    assert(type.includes("text/markdown"), `${p}: got "${type}"`);
    const body = await res.text();
    assert(body.length > 200, `${p}: markdown suspiciously short (${body.length})`);
  }
});

await test("HTML homepage carries og:type, H1 and Organization JSON-LD", async () => {
  const res = await fetch(`${base}/`);
  assert(res.status === 200, `expected 200, got ${res.status}`);
  // Vary: Accept on the HTML variant is asserted only as a warning: Vercel
  // strips custom Vary values from static prerendered pages (the negotiated
  // markdown responses, tested above, carry it — that's the spec requirement,
  // and Vercel's own cache runs the proxy rewrite before cache lookup, so
  // there is no poisoning risk on the platform itself).
  const vary = res.headers.get("vary") ?? "";
  if (!/\baccept\b/i.test(vary)) {
    console.warn(`  warn  HTML variant Vary lacks Accept (platform-stripped): "${vary}"`);
  }
  const html = await res.text();
  assert(/property="og:type" content="website"/.test(html), "og:type missing");
  assert(html.includes("<h1"), "H1 missing");
  assert(html.includes('"Organization"'), "Organization JSON-LD type missing");
  assert(html.includes('"contactPoint"'), "contactPoint missing from JSON-LD");
  assert(html.includes('"FAQPage"'), "FAQPage JSON-LD missing");
});

await test("/llms.txt exists with when-to-use agent guidance", async () => {
  const res = await fetch(`${base}/llms.txt`);
  assert(res.status === 200, `expected 200, got ${res.status}`);
  const body = await res.text();
  assert(body.includes("## When to use NCA HVAC"), "when-to-use section missing");
  assert(body.includes("## Developer resources"), "developer resources section missing");
  assert(body.includes("text/markdown"), "markdown access instructions missing");
});

await test("/sitemap.xml and /robots.txt respond", async () => {
  for (const p of ["/sitemap.xml", "/robots.txt"]) {
    const res = await fetch(`${base}${p}`);
    assert(res.status === 200, `${p}: expected 200, got ${res.status}`);
  }
});

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
