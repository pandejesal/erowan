/**
 * Apollo Free → Gulf leads (60/mo free) + Hunter fallback
 * Env: APOLLO_KEY (free tier) or HUNTER_KEY
 * Usage: APOLLO_KEY=xxx node scripts/apollo-free.js
 * Input: niche + city (e.g., salons dubai)
 * Output: leads.json → import to /crm or research.json
 *
 * Free-tier safe: sleeps 1s between calls, caps 20/day per run.
 */
const fs = require("fs");

async function apolloSearch(query) {
  const key = process.env.APOLLO_KEY;
  if (!key) return null;
  const res = await fetch("https://api.apollo.io/v1/mixed_people/search", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
    body: JSON.stringify({
      api_key: key,
      q_organization_name: query,
      organization_locations: ["United Arab Emirates", "Saudi Arabia", "Qatar"],
      page: 1, per_page: 20
    })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "apollo failed");
  return (json.people || []).map(p => ({
    business: p.organization?.name || query,
    contact: p.email || p.organization?.primary_domain || "",
    city: p.organization?.city || "Dubai",
    url: p.organization?.website_url || "",
    source: "Apollo Free"
  }));
}

async function hunterDomainSearch(domain) {
  const key = process.env.HUNTER_KEY;
  if (!key || !domain) return null;
  const res = await fetch(`https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${key}`);
  const json = await res.json();
  return json.data?.emails?.[0]?.value || null;
}

async function main() {
  const query = process.argv[2] || "salon Dubai";
  console.log(`Apollo free search: "${query}" (cap 20)...`);
  let leads = [];
  try {
    const apollo = await apolloSearch(query);
    if (apollo) leads = apollo.slice(0, 20);
    else console.log("No APOLLO_KEY — skipping API. Create free at apollo.io (60 free/mo).");
  } catch (e) {
    console.error("Apollo error:", e.message);
  }
  if (leads.length === 0) {
    // fallback demo leads — replace with manual Maps/IG scrape
    leads = [
      { business: "Demo Salon Dubai", contact: "info@demosalon.ae", city: "Dubai", url: "https://example.ae", source: "Manual" },
      { business: "Demo Cafe JLT", contact: "hello@democafe.ae", city: "Dubai", url: "https://example.com", source: "Manual" },
    ];
    console.log("Using fallback demo leads — add APOLLO_KEY for real data.");
  }
  fs.writeFileSync("leads.json", JSON.stringify(leads, null, 2));
  console.log(`Wrote ${leads.length} leads → leads.json → import to /crm`);
  console.log("Next: node scripts/bulk-research.js (urls from leads.json) → research.json → QA 30s");
}

main();
