import DemoBadge from "./DemoBadge";
import Link from "next/link";

type Props = {
  business: string;
  location: string;
  niche: string;
  heroTitle: string;
  heroSub: string;
  primaryCta: string;
  services: { name: string; price: string }[];
  image?: string;
};

export default function DemoTemplate({ business, location, niche, heroTitle, heroSub, primaryCta, services, image }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <DemoBadge />
          <Link href="/" className="text-xs underline text-zinc-600">← Back to Erowan</Link>
        </div>
      </div>
      <header className="border-b border-zinc-200 sticky top-0 bg-white/90 backdrop-blur z-10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-bold tracking-tight">{business} <span className="font-normal text-zinc-500 text-sm">• {location}</span></div>
          <a href="https://wa.me/919999999999" className="text-sm px-4 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800">{primaryCta}</a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-zinc-500">{niche} • ★ 4.9 (312 reviews)</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">{heroTitle}</h1>
          <p className="mt-3 text-zinc-600 leading-relaxed">{heroSub}</p>
          <div className="mt-5 flex gap-2">
            <a href="https://wa.me/919999999999" className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm">Book on WhatsApp</a>
            <a href="#services" className="px-5 py-2.5 rounded-full border border-zinc-300 text-sm">See services</a>
          </div>
          <div className="mt-4 flex gap-4 text-xs text-zinc-500">
            <span>✓ No commission</span><span>✓ 48h setup</span><span>✓ Mobile-first</span>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 overflow-hidden aspect-[4/3] shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image || `https://picsum.photos/seed/${encodeURIComponent(business)}/800/600`} alt={`${business} hero`} className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.9 ★</div><div className="text-xs text-zinc-400">312 reviews</div></div>
          <div className="rounded-xl border border-zinc-200 p-4 text-center"><div className="text-xl font-bold">10k+</div><div className="text-xs text-zinc-500">Happy clients</div></div>
          <div className="rounded-xl border border-zinc-200 p-4 text-center"><div className="text-xl font-bold">48h</div><div className="text-xs text-zinc-500">To launch</div></div>
        </div>
      </section>

      {/* Services + Pricing */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="font-semibold text-lg">Services & Pricing</h2>
        <p className="text-sm text-zinc-600">Transparent, no hidden fees. Tap to book.</p>
        <div className="mt-4 grid md:grid-cols-3 gap-3">
          {services.map((s) => (
            <div key={s.name} className="rounded-xl border border-zinc-200 p-4 flex justify-between items-center hover:border-zinc-300 bg-white">
              <div className="text-sm font-medium">{s.name}</div>
              <div className="text-sm font-bold bg-zinc-900 text-white px-2 py-1 rounded-full">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <h3 className="font-semibold">Gallery</h3>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <img src={image || "https://picsum.photos/seed/a/400/300"} alt="gallery 1" className="rounded-xl h-32 w-full object-cover border border-zinc-200" />
          <img src={`https://picsum.photos/seed/${encodeURIComponent(business)}2/400/300`} alt="gallery 2" className="rounded-xl h-32 w-full object-cover border border-zinc-200" />
          <img src={`https://picsum.photos/seed/${encodeURIComponent(business)}3/400/300`} alt="gallery 3" className="rounded-xl h-32 w-full object-cover border border-zinc-200" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <h3 className="font-semibold">Loved by clients worldwide</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-3">
          {[
            { name: "Aisha • Dubai", text: "Booked 40% more after the new site. WhatsApp flow is magic." },
            { name: "James • London", text: "Menu ordering saved us 15% commission. Looks premium." },
            { name: "Sofia • Berlin", text: "Patients trust us instantly now. Clean, calm, fast." },
          ].map(t=> (
            <div key={t.name} className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
              <div className="text-sm text-zinc-700">“{t.text}”</div>
              <div className="mt-2 text-xs font-medium text-zinc-900">— {t.name} ★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-2xl border border-zinc-200 p-6 bg-white">
          <h3 className="font-semibold">Why this works</h3>
          <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4"><div className="font-medium">⚡ Fast</div><div className="text-zinc-600 mt-1">Loads in 1s, mobile thumb-friendly CTA.</div></div>
            <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4"><div className="font-medium">💬 WhatsApp-first</div><div className="text-zinc-600 mt-1">No app, no commission — book where they chat.</div></div>
            <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4"><div className="font-medium">📈 SEO ready</div><div className="text-zinc-600 mt-1">Google Business + reviews + map.</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="font-semibold">{primaryCta} — reply worldwide, 48h delivery</div>
            <div className="text-sm text-zinc-400">Ahmedabad → {location}. Wise/PayPal invoice.</div>
          </div>
          <a href="https://wa.me/919999999999" className="px-5 py-2 rounded-full bg-white text-zinc-900 text-sm font-medium text-center">WhatsApp now</a>
        </div>
      </section>

      {/* Map + Contact */}
      <section className="mx-auto max-w-6xl px-4 py-6 grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-zinc-200 p-4">
          <div className="font-medium text-sm">Visit us</div>
          <div className="mt-2 rounded-lg bg-zinc-100 border border-zinc-200 h-32 grid place-items-center text-xs text-zinc-500">Map embed placeholder — {location}</div>
          <div className="mt-2 text-xs text-zinc-600">Open 9am–9pm daily • Walk-ins welcome</div>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4">
          <div className="font-medium text-sm">Contact</div>
          <div className="mt-2 text-sm text-zinc-700 space-y-1">
            <div>WhatsApp: +91 99999 99999</div>
            <div>Email: hello@erowan.com</div>
            <div>Instagram: @{business.toLowerCase().replace(/\s/g,"")}</div>
          </div>
          <a href="/pay" className="mt-3 inline-block text-xs px-3 py-1.5 rounded-full bg-zinc-900 text-white">Pay $250 →</a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-xl border border-dashed border-zinc-300 p-4 text-xs text-zinc-600">
          This is a <strong>concept demo</strong> built by Erowan — not a real client. Replace with your business in 48 hours: logo, colors, real services, map & reviews.
        </div>
      </section>
    </div>
  );
}
