/**
 * OpenCode ↔ OpenClaw bridge (free MCPs)
 * If you have openclaw MCP installed: this script shows the wiring.
 * Otherwise it falls back to scripts/bulk-research.js scrape.
 *
 * Intended: OpenCode calls mcp__openclaw__scrape({ url }) → returns html → we analyze.
 * This file documents the contract so you can swap fetch → MCP with 1 line.
 *
 * Usage in OpenCode:
 *   // const html = await mcp.openclaw.scrape({ url });
 *   // const analysis = analyzeHtml(html);
 *
 * For now, run: node scripts/bulk-research.js scripts/urls.txt
 */
console.log(`
OpenClaw MCP wiring (when installed):

// 1. Add to .opencode/opencode-swarm.json
{
  "mcp": {
    "openclaw": { "command": "npx", "args": ["-y", "openclaw-mcp"] }
  }
}

// 2. In OpenCode:
const html = await mcp__openclaw__scrape({ url: target });
const pains = analyzeHtml(html).pains; // same as src/app/api/scrape/route.ts:6

// Fallback: src/app/api/scrape/route.ts uses fetch + regex (free, no key) — already wired to /crm Research panel.
`);

