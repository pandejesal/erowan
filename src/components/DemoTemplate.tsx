import DemoBadge from "./DemoBadge";
import ArabicToggle from "./ArabicToggle";
import Link from "next/link";

type Props = {
  business: string;
  location: string;
  niche: string;
  heroTitle: string;
  heroSub: string;
  primaryCta: string;
  services: { name: string; price: string }[];
  accent?: string;
};

export default function DemoTemplate({ business, location, niche, heroTitle, heroSub, primaryCta, services }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <DemoBadge />
          <Link href="/" className="text-xs underline text-zinc-600">← Back to Erowan</Link>
        </div>
      </div>
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight">{business} <span className="font-normal text-zinc-500 text-sm">• {location}</span></div>
          <div className="flex items-center gap-2">
            <ArabicToggle />
            <a href="https://wa.me/919999999999" className="text-sm px-4 py-2 rounded-full bg-zinc-900 text-white">{primaryCta}</a>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-zinc-500">{niche}</div>
          <h1 className="mt-2 text-3xl font-bold leading-tight">{heroTitle}</h1>
          <p className="mt-3 text-zinc-600 leading-relaxed">{heroSub}</p>
          <div className="mt-5 flex gap-2">
            <a href="https://wa.me/919999999999" className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm">Book on WhatsApp</a>
            <a href="#services" className="px-5 py-2.5 rounded-full border border-zinc-300 text-sm">See services</a>
          </div>
          <div className="mt-4 text-xs text-zinc-500">Arabic toggle • Mobile-optimized • {location} map below</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-0 overflow-hidden aspect-[4/3] grid place-items-center text-zinc-400 text-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://picsum.photos/seed/${encodeURIComponent(business)}/800/600`} alt={`${business} hero`} className="h-full w-full object-cover" />
        </div>
      </section>
      <section id="services" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="font-semibold">Services & Pricing (AED)</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-3">
          {services.map((s) => (
            <div key={s.name} className="rounded-xl border border-zinc-200 p-4 flex justify-between items-center">
              <div className="text-sm font-medium">{s.name}</div>
              <div className="text-sm font-bold">{s.price}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="font-semibold">{primaryCta} — reply in Gulf hours</div>
            <div className="text-sm text-zinc-400">Ahmedabad → {location}. Wise/PayPal invoice, 48h delivery.</div>
          </div>
          <a href="https://wa.me/919999999999" className="px-5 py-2 rounded-full bg-white text-zinc-900 text-sm font-medium text-center">WhatsApp now</a>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-xl border border-dashed border-zinc-300 p-4 text-xs text-zinc-600">
          This is a <strong>concept demo</strong> built by Erowan for outreach — not a real client. We label honestly. Replace with your business in 48 hours: logo, colors, real services, map & reviews.
        </div>
      </section>
    </div>
  );
}
