import { Niche } from "@/lib/niches";
import Link from "next/link";
import Image from "next/image";

export default function NichePageTemplate({ niche }: { niche: Niche }) {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <div className="text-xs uppercase tracking-widest text-zinc-500">{niche.shortTitle} • Worldwide • 48h</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{niche.title}</h1>
        <p className="mt-2 text-lg text-zinc-600">{niche.tagline}</p>
        <div className="mt-3 inline-block text-sm px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
          {niche.pain}
        </div>
        <p className="mt-4 max-w-3xl text-zinc-700 leading-relaxed">{niche.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-3 max-w-3xl">
          {niche.demos.map((d) => (
            <div key={d.id} className="rounded-xl overflow-hidden border border-zinc-200">
              <Image src={d.image} alt={d.name} width={400} height={200} className="h-28 w-full object-cover" />
              <div className="p-2 text-xs font-medium">{d.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {niche.demos.map((d) => (
            <Link key={d.id} href={d.href} className="px-4 py-2 rounded-full bg-zinc-900 text-white text-sm hover:bg-zinc-800">
              View demo: {d.name} →
            </Link>
          ))}
          <a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full border border-zinc-300 text-sm hover:bg-zinc-50">WhatsApp us</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="rounded-2xl border border-zinc-200 p-6 bg-white">
          <h3 className="font-semibold">What you get — {niche.shortTitle} specific</h3>
          <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm text-zinc-700">
            {niche.features.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-emerald-600">✓</span><span>{f}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h3 className="font-semibold">Pricing — {niche.priceNote}</h3>
          <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl bg-zinc-900 text-white p-4">
              <div className="text-xs text-zinc-400">BASE</div>
              <div className="text-xl font-bold">$250 <span className="text-sm font-normal text-zinc-400">~920 AED</span></div>
              <div className="text-zinc-300 mt-1">5 pages, English worldwide, 48h</div>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="text-xs text-zinc-500">NICHE ADD-ON</div>
              <div className="text-xl font-bold">+ $150</div>
              <div className="text-zinc-600 mt-1">{niche.priceNote.split("+")[1]?.trim() || "+ $150 add-on"}</div>
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 p-4">
              <div className="text-xs text-zinc-500">TOTAL</div>
              <div className="text-xl font-bold">$400 max</div>
              <div className="text-zinc-600 mt-1">Most {niche.shortTitle} launch at $250–$400.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6">
        <h3 className="font-semibold">Live concept demos</h3>
        <p className="text-sm text-zinc-600 mt-1">Concept demos — not real clients — labeled honestly. Open on phone to feel the booking flow.</p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {niche.demos.map((d) => (
            <Link key={d.id} href={d.href} className="rounded-2xl border border-zinc-200 p-5 bg-white hover:border-zinc-300">
              <div className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 inline-block">Concept Demo</div>
              <div className="mt-2 font-medium">{d.name}</div>
              <div className="mt-1 text-sm text-zinc-600">Tap to preview — mobile booking, services, WhatsApp CTA.</div>
              <div className="mt-3 text-sm font-medium underline">Open demo →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6">
        <h3 className="font-semibold">FAQ — {niche.shortTitle}</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {niche.faq.map((f) => (
            <div key={f.q} className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
              <div className="text-sm font-medium">{f.q}</div>
              <div className="text-sm text-zinc-600 mt-1">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="font-semibold">Want this for your {niche.shortTitle.toLowerCase()}?</div>
            <div className="text-sm text-zinc-400">We’ll rebuild your current site as a free demo — 60-sec Loom, no spam.</div>
          </div>
          <div className="flex gap-2">
            <a href="https://wa.me/919999999999" className="px-5 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-medium">WhatsApp — get demo</a>
            <a href="/pay" className="px-5 py-2.5 rounded-full border border-white/20 text-sm">Pay $250 →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
