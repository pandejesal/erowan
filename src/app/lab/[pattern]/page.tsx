import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { labPatterns, getLabPattern } from "@/lib/mocks/lab";
import LabPatternClient from "./LabPatternClient";

export async function generateStaticParams() {
  return labPatterns.map(p => ({ pattern: p.slug }));
}

export async function generateMetadata({ params }: { params: { pattern: string } }): Promise<Metadata> {
  const p = getLabPattern(params.pattern);
  if (!p) return {};
  return {
    title: `${p.title} — Erowan Lab`,
    description: p.description,
    alternates: { canonical: `https://erowan.com/lab/${p.slug}` },
    openGraph: {
      title: `${p.title} — Lab Toy ${p.num}`,
      description: p.tagline + " • " + p.salesUse,
      url: `https://erowan.com/lab/${p.slug}`,
      type: "article",
    },
  };
}

export default function LabPatternPage({ params }: { params: { pattern: string } }) {
  const p = getLabPattern(params.pattern);
  if (!p) notFound();
  const idx = labPatterns.findIndex(x => x.slug === p.slug);
  const prev = labPatterns[(idx - 1 + labPatterns.length) % labPatterns.length];
  const next = labPatterns[(idx + 1) % labPatterns.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: p.description,
    url: `https://erowan.com/lab/${p.slug}`,
    isPartOf: { "@type": "Collection", name: "Erowan Lab", url: "https://erowan.com/lab" },
    keywords: [p.intent, p.tagline, ...p.tech].join(", "),
    creator: { "@type": "Organization", name: "Erowan" },
  };

  return (
    <div className="py-6 md:py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono tracking-widest text-zinc-500">
        <Link href="/lab" className="hover:text-white">LAB</Link>
        <span>/</span>
        <span className="text-[#D6FF2A]">{p.num}</span>
        <span className="px-1.5 py-0.5 border border-[#2A2A2A] text-zinc-400">{p.intent.toUpperCase()}</span>
        <span className="hidden sm:inline text-zinc-600">—</span>
        <span className="text-zinc-300">{p.title}</span>
        <span className="ml-auto flex gap-2">
          <Link href={`/lab/${prev.slug}`} className="px-2 py-1 border border-[#2A2A2A] hover:border-white hover:text-white">← {prev.num}</Link>
          <Link href={`/lab/${next.slug}`} className="px-2 py-1 border border-[#2A2A2A] hover:border-white hover:text-white">{next.num} →</Link>
        </span>
      </div>

      <div className="mt-4 grid lg:grid-cols-[1.35fr_0.65fr] gap-6">
        <LabPatternClient pattern={p.slug} num={p.num} title={p.title} tagline={p.tagline} />
        <div className="space-y-4">
          <div className="border border-[#2A2A2A] bg-[#111] p-5">
            <div className="text-[10px] font-mono tracking-[0.2em] text-zinc-500">TOY {p.num} — {p.intent.toUpperCase()}</div>
            <h1 className="mt-1 font-black text-2xl leading-none" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h1>
            <p className="mt-1 text-sm font-mono text-zinc-500">{p.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{p.description}</p>
            <div className="mt-4 space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-[#1A1A1A] py-1"><span className="text-zinc-500">USE</span><span className="text-zinc-200 text-right max-w-[60%]">{p.salesUse}</span></div>
              <div className="flex justify-between border-b border-[#1A1A1A] py-1"><span className="text-zinc-500">CRAFT</span><span className="text-zinc-200 text-right max-w-[60%]">{p.craft}</span></div>
              <div className="flex justify-between py-1"><span className="text-zinc-500">STACK</span><span className="text-[#D6FF2A]">{p.tech.join(" • ")}</span></div>
            </div>
            <div className="mt-4 flex gap-2">
              <Link href={`/pay?pattern=${p.slug}`} className="flex-1 py-2.5 bg-[#D6FF2A] text-black text-center font-black text-xs tracking-widest border border-black hover:bg-white">GET THIS →</Link>
              <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi Erowan — want ${p.title} (${p.slug}) for my site`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 border border-[#2A2A2A] text-center font-mono text-xs tracking-widest hover:border-white hover:text-white">WA →</a>
            </div>
            <div className="mt-3 text-[11px] font-mono text-zinc-500">{p.priceNote} • ships 48h • plugs into any demo (salon/clinic/restaurant/realty/other)</div>
          </div>

          <div className="border border-[#2A2A2A] bg-[#0A0A0A] p-4 font-mono text-xs">
            <div className="text-[10px] tracking-[0.18em] text-zinc-500">HOW IT WORKS — TOYBOX</div>
            <ol className="mt-2 list-decimal list-inside space-y-1 text-zinc-400">
              <li>Drag / scrub the toy (desktop) or tap autoplay (mobile).</li>
              <li>We wire same interaction to your real data (prices, slots, products).</li>
              <li>Reduced-motion: no drag, shows autoplay theatre view.</li>
              <li>Per-pattern CTA pre-fills <code className="bg-[#1A1A1A] px-1">/pay?pattern={p.slug}</code></li>
            </ol>
          </div>

          <div className="border border-[#D6FF2A] bg-[#D6FF2A] p-[1.5px]">
            <div className="bg-[#111] p-4">
              <div className="text-[11px] font-mono tracking-[0.18em] text-[#D6FF2A]">WANT PACK NOT SINGLE?</div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <Link href="/pay?pack=convert" className="py-2 border border-[#2A2A2A] text-center font-mono text-[11px] hover:border-[#D6FF2A] hover:text-[#D6FF2A]">CONVERT<br />$450</Link>
                <Link href="/pay?pack=delight" className="py-2 border border-[#2A2A2A] text-center font-mono text-[11px] hover:border-[#D6FF2A] hover:text-[#D6FF2A]">DELIGHT<br />$550</Link>
                <Link href="/pay?pack=story" className="py-2 border border-[#2A2A2A] text-center font-mono text-[11px] hover:border-[#D6FF2A] hover:text-[#D6FF2A]">STORY<br />$650</Link>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href="/lab" className="flex-1 py-2 border border-[#2A2A2A] text-center font-mono text-xs tracking-widest hover:border-white">← ALL 12 TOYS</Link>
            <Link href={`/lab/${next.slug}`} className="flex-1 py-2 bg-[#EDEDE8] text-black text-center font-black text-xs tracking-widest hover:bg-white">NEXT {next.num} →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
