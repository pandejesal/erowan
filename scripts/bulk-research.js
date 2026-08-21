/**
 * Bulk Gulf research — free, no API key.
 * Usage: node scripts/bulk-research.js urls.txt
 * urls.txt: one URL per line (https://example.ae)
 * Output: research.json + prints pains per URL for QA (30 sec verify)
 * 
 * Wires to /api/scrape logic but runs locally via fetch (no OpenClaw MCP needed).
 * For OpenClaw MCP: replace fetch with mcp__openclaw__scrape if available.
 */
const fs = require("fs");

async function analyze(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "ErowanBot/1.0" }, signal: AbortSignal.timeout(8000) });
    const html = await res.text();
    const lower = html.toLowerCase();
    const checks = {
      booking: /book|appointment|reserve|schedule/.test(lower),
      whatsapp: /wa\.me|whatsapp/.test(lower),
      tel: /tel:/.test(lower),
      viewport: /<meta[^>]*viewport/.test(lower),
      arabic: /lang=["']ar["']|dir=["']rtl["']/.test(lower),
      reviews: /review|testimonial/.test(lower),
    };
    const pains = [];
    if (!checks.booking && !checks.whatsapp) pains.push("No booking/WhatsApp CTA");
    if (!checks.viewport) pains.push("Missing viewport (not mobile)");
    if (!checks.whatsapp && !checks.tel) pains.push("No tap-to-call CTA");
    if (!checks.reviews) pains.push("No reviews");
    if (!checks.arabic) pains.push("No Arabic");
    return { url, checks, pains, htmlLen: html.length };
  } catch (e) {
    return { url, error: e.message };
  }
}

async function main() {
  const file = process.argv[2] || "scripts/urls.txt";
  if (!fs.existsSync(file)) {
    console.log(`Create ${file} with one URL per line, e.g.:\nhttps://example.ae\nhttps://salon-dubai.com`);
    process.exit(0);
  }
  const urls = fs.readFileSync(file, "utf8").split("\n").map(s=>s.trim()).filter(Boolean);
  console.log(`Researching ${urls.length} URLs (20-30/day cap!)...`);
  const results = [];
  for (const u of urls) {
    const r = await analyze(u.startsWith("http")?u:"https://"+u);
    results.push(r);
    console.log(`- ${u} → pains: ${r.pains?.join(", ") || "none (use Loom)"} ${r.error?" ERROR:"+r.error:""}`);
    await new Promise(r=>setTimeout(r, 800)); // be nice, avoid ban
  }
  fs.writeFileSync("research.json", JSON.stringify(results, null, 2));
  console.log("Done → research.json");
}
main();
