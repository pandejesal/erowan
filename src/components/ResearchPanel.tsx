"use client";
import { useState } from "react";

type Analysis = {
  url: string;
  hasBooking: boolean;
  hasWhatsApp: boolean;
  hasTel: boolean;
  hasViewport: boolean;
  hasArabic: boolean;
  pains: string[];
  checklist: { label: string; pass: boolean; detail: string }[];
  error?: string;
};

export default function ResearchPanel() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Analysis | null>(null);
  const [error, setError] = useState("");

  const run = async () => {
    if (!url) return;
    setLoading(true); setError(""); setData(null);
    try {
      const res = await fetch("/api/scrape", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "failed");
      setData(json);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "scrape failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="rounded-2xl border border-zinc-200 p-4 bg-white space-y-4">
      <div>
        <div className="font-medium text-sm">OpenClaw-style research — 3-point QA</div>
        <p className="text-xs text-zinc-600">Paste Gulf business URL → we flag: booking/WhatsApp, mobile, CTA, Arabic, reviews. YOU verify 30 sec (WhatsApp counts as booking!).</p>
      </div>
      <div className="flex gap-2">
        <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://example.ae" className="flex-1 border rounded-lg px-3 py-2 text-sm" />
        <button onClick={run} disabled={loading} className="px-4 py-2 rounded-full bg-zinc-900 text-white text-sm disabled:opacity-50">{loading ? "Scraping…" : "Analyze"}</button>
      </div>
      {error && <div className="text-sm text-red-600 border border-red-200 bg-red-50 rounded-lg p-2">{error}</div>}
      {data && (
        <div className="space-y-3">
          <div className="text-xs text-zinc-500">{data.url}</div>
          {data.pains.length > 0 ? (
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
              <div className="text-xs font-semibold text-amber-800">Flagged pains — verify before sending:</div>
              <ul className="mt-1 list-disc list-inside text-sm text-amber-900">
                {data.pains.map(p=> <li key={p}>{p}</li>)}
              </ul>
            </div>
          ) : (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-800">No obvious pains — this site looks solid. Don&apos;t claim false pain. Use Loom audit instead.</div>
          )}
          <div className="grid md:grid-cols-3 gap-2">
            {data.checklist.map(c=> (
              <div key={c.label} className={`rounded-xl border p-3 ${c.pass ? "bg-emerald-50 border-emerald-200" : "bg-zinc-50 border-zinc-200"}`}>
                <div className="text-xs font-medium flex items-center gap-1">{c.pass ? "✓" : "✗"} {c.label}</div>
                <div className="text-xs text-zinc-600 mt-1">{c.detail}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-dashed border-zinc-300 p-3 text-xs text-zinc-600">
            <strong>QA checklist (30 sec):</strong> 1) Does WhatsApp/phone count as booking? 2) Is CTA thumb-reachable on phone? 3) Is speed/reviews honest? If AI wrong, rewrite line 1 — never claim false pain.
          </div>
        </div>
      )}
    </div>
  );
}
