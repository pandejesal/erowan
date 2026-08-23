"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getLabPattern, labIntents, labPatterns } from "@/lib/mocks/lab";

export default function PayPrefill() {
  const sp = useSearchParams();
  const patternSlug = sp.get("pattern");
  const packId = sp.get("pack");
  const pattern = patternSlug ? getLabPattern(patternSlug) : null;
  const pack = packId ? labIntents.find(p => p.id === packId) : null;

  useEffect(() => {
    try {
      if (pattern) {
        localStorage.setItem("erowan_pay_prefill_pattern", pattern.slug);
        localStorage.setItem("erowan_last_lab_pattern", pattern.slug);
        const key = "erowan_analytics";
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        arr.push({ path: `/pay?pattern=${pattern.slug}`, ts: Date.now(), meta: { pattern: pattern.slug } });
        localStorage.setItem(key, JSON.stringify(arr.slice(-500)));
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "pay_prefill_pattern", { pattern: pattern.slug });
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "pay_prefill_pattern", pattern: pattern.slug });
      }
      if (pack) {
        localStorage.setItem("erowan_pay_prefill_pack", pack.id);
        const key = "erowan_analytics";
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        arr.push({ path: `/pay?pack=${pack.id}`, ts: Date.now(), meta: { pack: pack.id } });
        localStorage.setItem(key, JSON.stringify(arr.slice(-500)));
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "pay_prefill_pack", { pack: pack.id });
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "pay_prefill_pack", pack: pack.id });
      }
    } catch {}
  }, [pattern, pack, patternSlug, packId]);

  if (!pattern && !pack) {
    // fallback: suggest last interacted lab pattern if present and no query
    if (typeof window !== "undefined") {
      try {
        const last = localStorage.getItem("erowan_last_lab_pattern");
        const lastPattern = last ? getLabPattern(last) : null;
        if (lastPattern) {
          return (
            <div className="rounded-2xl border-2 border-[#D6FF2A] bg-[#D6FF2A] p-[1.5px]">
              <div className="rounded-[14px] bg-[#111] text-[#F2F2F0] p-4 flex flex-wrap gap-3 justify-between items-center font-mono text-xs">
                <div>
                  <span className="text-[#D6FF2A] tracking-[0.14em] font-black">LAST LAB TOY → {lastPattern.num} {lastPattern.title}</span>
                  <span className="ml-2 text-zinc-400">{lastPattern.tagline}</span>
                </div>
                <Link href={`/pay?pattern=${lastPattern.slug}`} className="px-3 py-1.5 bg-[#D6FF2A] text-black font-black tracking-widest border border-black">PRE-FILL {lastPattern.slug} →</Link>
              </div>
            </div>
          );
        }
      } catch {}
    }
    return null;
  }

  return (
    <div className="rounded-2xl border-2 border-[#D6FF2A] bg-[#D6FF2A] p-[1.5px]">
      <div className="rounded-[15px] bg-[#111] text-[#F2F2F0] p-5">
        {pattern && (
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.18em]">
                <span className="px-2 py-1 bg-[#D6FF2A] text-black font-black">● PRE-FILLED FROM LAB</span>
                <span className="text-zinc-500">{pattern.num} {pattern.intent.toUpperCase()}</span>
              </div>
              <div className="mt-2 font-black text-xl leading-none" style={{ fontFamily: "var(--font-display)" }}>{pattern.title}</div>
              <div className="text-xs font-mono text-zinc-400 mt-1">{pattern.tagline} — {pattern.description.slice(0, 84)}…</div>
              <div className="mt-2 text-xs font-mono text-zinc-500">Use: {pattern.salesUse} • Craft: {pattern.craft} • {pattern.priceNote}</div>
            </div>
            <div className="md:text-right flex flex-col gap-2 shrink-0">
              <div className="text-xs font-mono text-zinc-400">Pattern pre-filled — mention in WA/invoice note</div>
              <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi Erowan — I want ${pattern.title} (${pattern.slug}) for my site. Base $250 + pattern, please invoice.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-4 py-2 bg-[#D6FF2A] text-black font-black text-xs tracking-widest border border-black hover:bg-white">
                WHATSAPP — I WANT THIS TOY →
              </a>
              <Link href="/lab" className="text-[11px] font-mono underline text-zinc-500 hover:text-white text-center">← back to lab</Link>
            </div>
          </div>
        )}
        {pack && !pattern && (
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.18em]">
                <span className="px-2 py-1 bg-[#D6FF2A] text-black font-black">● PACK PRE-FILLED</span>
                <span className="text-zinc-500">{pack.pack}</span>
              </div>
              <div className="mt-2 font-black text-xl leading-none" style={{ fontFamily: "var(--font-display)" }}>{pack.label} PACK — {pack.price}</div>
              <div className="text-xs font-mono text-zinc-400 mt-1">{pack.desc} • {pack.id === "convert" ? "pricing, booking, before/after, cart" : pack.id === "delight" ? "magnetic, fluid, stagger, clip" : "pinned, rail, scramble, distort"}</div>
              <div className="mt-2 flex gap-2">
                {labPatterns.filter(p => p.intent === pack.id).map(p => <span key={p.slug} className="text-[10px] font-mono px-1.5 py-1 border border-[#2A2A2A] text-zinc-400">{p.num}</span>)}
              </div>
            </div>
            <div className="md:text-right flex flex-col gap-2 shrink-0">
              <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi Erowan — I want ${pack.label} pack (${pack.pack}) ${pack.price} for my site. Please invoice — Base $250 + pack.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-4 py-2 bg-[#D6FF2A] text-black font-black text-xs tracking-widest border border-black hover:bg-white">
                WHATSAPP — I WANT {pack.label} PACK →
              </a>
              <Link href="/lab#packs" className="text-[11px] font-mono underline text-zinc-500 hover:text-white text-center">see packs in lab →</Link>
            </div>
          </div>
        )}
        {pattern && pack && (
          <div className="mt-3 text-[11px] font-mono text-zinc-500">Tip: both pattern + pack present — we’ll invoice BASE + whichever add-on you confirm on WA.</div>
        )}
      </div>
    </div>
  );
}
