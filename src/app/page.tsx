import NicheCard from "@/components/NicheCard";
import Pricing from "@/components/Pricing";
import { niches } from "@/lib/niches";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-zinc-900 text-white">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Ahmedabad (IST) → Dubai / Riyadh / Doha — Gulf-hours support
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Websites that <span className="underline decoration-zinc-300">book & sell</span> for Gulf SMBs
          <br />
          <span className="text-zinc-500">$250 base, 48-hour delivery.</span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          We’re Erowan — 2 friends in Ahmedabad who ship booking-first sites for salons, restaurants, clinics & real estate. Same quality as Dubai agencies, 1/5th the price. Transparent remote — no fake Gulf address.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#niches" className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm hover:bg-zinc-800">
            See niche demos →
          </a>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-zinc-300 text-sm hover:bg-zinc-50">
            Book 15-min call
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm hover:bg-emerald-700">
            WhatsApp us
          </a>
        </div>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-2 text-xs text-zinc-600">
          <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">English + Arabic</div>
          <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">Mobile first</div>
          <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">48h delivery</div>
          <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">No commission</div>
          <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">Wise / PayPal</div>
          <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">Concept demos</div>
        </div>
      </section>

      {/* Niches */}
      <section id="niches" className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Pick your niche — see live demos</h2>
          <span className="text-xs text-zinc-500">Segmented pages: each looks specialist</span>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {niches.map((n) => (
            <NicheCard key={n.slug} niche={n} />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <Pricing />
      </section>

      {/* Real clients */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-lg font-semibold">3 real client sites</h2>
        <p className="text-sm text-zinc-600">Replace these placeholders with your 3 shipped links. Keep demos labeled “Concept”.</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <div className="text-xs text-zinc-500">REAL CLIENT {i}</div>
              <div className="mt-1 font-medium">Client {i} — your live link here</div>
              <div className="mt-2 text-sm text-zinc-600">Add screenshot, URL, 1-line outcome (e.g., “+22% bookings in 2 weeks”).</div>
              <a href="#" className="mt-3 inline-block text-sm underline">View site →</a>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-2xl border border-zinc-200 p-6 bg-zinc-50">
          <h3 className="font-semibold">How we hit 48 hours</h3>
          <ol className="mt-3 grid md:grid-cols-4 gap-4 text-sm">
            <li className="rounded-xl bg-white border border-zinc-200 p-4"><span className="font-bold">1. You pick niche</span><br /><span className="text-zinc-600">Salon / Restaurant etc. We clone the closest demo.</span></li>
            <li className="rounded-xl bg-white border border-zinc-200 p-4"><span className="font-bold">2. We tailor</span><br /><span className="text-zinc-600">Your logo, colors, services, AED pricing.</span></li>
            <li className="rounded-xl bg-white border border-zinc-200 p-4"><span className="font-bold">3. You review</span><br /><span className="text-zinc-600">Live link on your phone. 1 round tweaks.</span></li>
            <li className="rounded-xl bg-white border border-zinc-200 p-4"><span className="font-bold">4. Launch</span><br /><span className="text-zinc-600">Vercel free subdomain or your domain, Wise/PayPal invoice.</span></li>
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl bg-zinc-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="font-semibold">Ready to see your site rebuilt as a demo?</div>
            <div className="text-sm text-zinc-400 mt-1">We’ll record a 60-sec Loom of 3 fixes on your current site — free. No spam.</div>
          </div>
          <div className="flex gap-2">
            <Link href="/salons" className="px-5 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100">Start with Salons</Link>
            <a href="https://wa.me/919999999999" className="px-5 py-2.5 rounded-full border border-white/20 text-sm hover:bg-white/10">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
