import NicheCard from "@/components/NicheCard";
import Pricing from "@/components/Pricing";
import { niches } from "@/lib/niches";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero - Worldwide */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-zinc-900 text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Ahmedabad → Worldwide • 48-hour delivery
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Websites that <span className="underline decoration-zinc-300">book & sell</span> worldwide
              <br />
              <span className="text-zinc-500">$250 base, 48 hours.</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              We’re Erowan — 2 friends in Ahmedabad shipping booking-first sites for salons, restaurants, clinics & real estate worldwide. Same quality, 1/5th the price. Trusted from Dubai to New York.
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
            <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-zinc-600">
              <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">Worldwide clients</div>
              <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">English worldwide</div>
              <div className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50">Wise / PayPal</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80&auto=format&fit=crop" alt="Salon" width={300} height={200} className="rounded-2xl object-cover h-40 w-full" />
              <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format&fit=crop" alt="Restaurant" width={300} height={200} className="rounded-2xl object-cover h-48 w-full" />
            </div>
            <div className="space-y-3 pt-6">
              <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&auto=format&fit=crop" alt="Clinic" width={300} height={200} className="rounded-2xl object-cover h-48 w-full" />
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop" alt="Real Estate" width={300} height={200} className="rounded-2xl object-cover h-40 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
          <span className="font-medium text-zinc-900">Trusted worldwide:</span>
          <span className="px-2 py-1 bg-white border border-zinc-200 rounded-full">🇦🇪 Dubai</span>
          <span className="px-2 py-1 bg-white border border-zinc-200 rounded-full">🇸🇦 Riyadh</span>
          <span className="px-2 py-1 bg-white border border-zinc-200 rounded-full">🇺🇸 New York</span>
          <span className="px-2 py-1 bg-white border border-zinc-200 rounded-full">🇬🇧 London</span>
          <span className="px-2 py-1 bg-white border border-zinc-200 rounded-full">🇩🇪 Berlin</span>
          <span className="px-2 py-1 bg-white border border-zinc-200 rounded-full">🇸🇬 Singapore</span>
        </div>
      </section>

      {/* Niches */}
      <section id="niches" className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Pick your niche — see live demos</h2>
          <span className="text-xs text-zinc-500">Worldwide specialist pages</span>
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

      {/* Real clients with photos */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-lg font-semibold">3 real client sites</h2>
        <p className="text-sm text-zinc-600">Replace with your 3 shipped links — add screenshot + outcome.</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { title: "Client 1", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
            { title: "Client 2", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
            { title: "Client 3", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80&auto=format&fit=crop" },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 overflow-hidden bg-white">
              <Image src={c.img} alt={c.title} width={400} height={200} className="h-36 w-full object-cover" />
              <div className="p-4">
                <div className="text-xs text-zinc-500">REAL CLIENT {i+1}</div>
                <div className="mt-1 font-medium">{c.title} — your live link here</div>
                <div className="mt-1 text-sm text-zinc-600">Add 1-line outcome (e.g., “+22% bookings”).</div>
                <a href="#" className="mt-3 inline-block text-sm underline">View site →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-2xl border border-zinc-200 p-6 bg-zinc-50">
          <h3 className="font-semibold">How we hit 48 hours — worldwide</h3>
          <ol className="mt-3 grid md:grid-cols-4 gap-4 text-sm">
            <li className="rounded-xl bg-white border border-zinc-200 p-4"><span className="font-bold">1. You pick niche</span><br /><span className="text-zinc-600">Salon / Restaurant etc. We clone closest demo.</span></li>
            <li className="rounded-xl bg-white border border-zinc-200 p-4"><span className="font-bold">2. We tailor</span><br /><span className="text-zinc-600">Your logo, colors, services, currency.</span></li>
            <li className="rounded-xl bg-white border border-zinc-200 p-4"><span className="font-bold">3. You review</span><br /><span className="text-zinc-600">Live link on phone. 1 round tweaks.</span></li>
            <li className="rounded-xl bg-white border border-zinc-200 p-4"><span className="font-bold">4. Launch</span><br /><span className="text-zinc-600">Your domain, Wise/PayPal invoice.</span></li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl bg-zinc-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="font-semibold">Ready to see your site rebuilt as a demo?</div>
            <div className="text-sm text-zinc-400 mt-1">We’ll record a 60-sec Loom of 3 fixes — free, worldwide.</div>
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
