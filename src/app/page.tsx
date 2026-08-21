import NicheCard from "@/components/NicheCard";
import Pricing from "@/components/Pricing";
import { niches } from "@/lib/niches";
import Link from "next/link";
import Image from "next/image";

/* R2: Professional, human-readable — fixes cramped, vertical, overload, font readability
   Keeps editorial anchor but breathable: whitespace, 16px body, 1.6 line-height, clear price.
*/

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest border border-[var(--line)] px-2.5 py-1 bg-white rounded-full">● AVAILABLE WORLDWIDE — 48H DELIVERY</div>
            <h1 className="mt-5 text-[40px] md:text-[56px] font-black leading-[0.95] tracking-tight" style={{fontFamily:"var(--font-display)"}}>
              Websites<br />
              that <span className="bg-[var(--accent)] text-white px-2">book</span><br />
              & sell.
            </h1>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black tracking-tight">$250</span>
              <span className="text-sm text-zinc-600">base — 48 hours, no subscription</span>
            </div>
            <p className="mt-5 text-[17px] leading-7 text-zinc-700 max-w-[48ch]">
              Erowan is two friends in Ahmedabad making fast, booking-first websites for salons, restaurants, clinics and real estate — worldwide. Same quality as a London agency, a fifth of the price.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#niches" className="px-6 py-3 bg-[var(--ink)] text-white text-sm font-bold border border-[var(--line)] hover:bg-zinc-800">See live demos →</a>
              <a href="https://wa.me/919999999999" className="px-6 py-3 bg-white border border-[var(--line)] text-sm font-bold hover:bg-zinc-50">Chat on WhatsApp</a>
            </div>
            <div className="mt-5 text-xs font-mono text-zinc-500">Trusted worldwide • English • Wise / PayPal • Concept demos labeled honestly</div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-[var(--line)] p-2 brutal-sm">
                <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80&auto=format&fit=crop" alt="Salon" width={300} height={200} className="h-36 w-full object-cover border border-[var(--line)]" />
                <div className="mt-2 text-xs font-mono">SALONS — 4.9★ Bookings</div>
              </div>
              <div className="bg-white border border-[var(--line)] p-2 brutal-sm mt-4">
                <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format&fit=crop" alt="Restaurant" width={300} height={200} className="h-36 w-full object-cover border border-[var(--line)]" />
                <div className="mt-2 text-xs font-mono">RESTAURANTS — Ordering</div>
              </div>
            </div>
            <div className="bg-white border border-[var(--line)] p-2 brutal-sm">
              <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&auto=format&fit=crop" alt="Clinic" width={600} height={200} className="h-40 w-full object-cover border border-[var(--line)]" />
              <div className="mt-2 flex justify-between text-xs font-mono"><span>CLINICS — Trust before booking</span><span className="bg-[var(--accent)] text-white px-1">48H</span></div>
            </div>
            {/* Horizontal, not vertical */}
            <div className="flex flex-wrap gap-2 text-[11px] font-mono tracking-widest justify-center border border-[var(--line)] bg-[var(--paper-2)] py-2 px-3 rounded-full">
              <span>WORLDWIDE</span><span>•</span><span>DUBAI</span><span>•</span><span>NEW YORK</span><span>•</span><span>LONDON</span><span>•</span><span>BERLIN</span><span>•</span><span>MIAMI</span>
            </div>
          </div>
        </div>
      </section>

      <section id="niches" className="mx-auto max-w-6xl px-4 py-8">
        <div className="border-b border-[var(--line)] pb-3 flex items-baseline justify-between">
          <h2 className="text-2xl font-black tracking-tight" style={{fontFamily:"var(--font-display)"}}>Pick your niche</h2>
          <span className="text-xs font-mono text-zinc-500">EACH PAGE LOOKS BESPOKE — WORLDWIDE</span>
        </div>
        <p className="mt-2 text-sm text-zinc-600 max-w-2xl">Choose your business type — each page has 2 live demos, features, and transparent pricing. No generic “we do everything” pitch.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {niches.map((n) => (
            <NicheCard key={n.slug} niche={n} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center">
          <h2 className="text-3xl font-black" style={{fontFamily:"var(--font-display)"}}>Simple pricing. No surprises.</h2>
          <p className="mt-2 text-zinc-600">Most clients pay $250–$400. One price, 48 hours.</p>
        </div>
        <div className="mt-8">
          <Pricing />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-black" style={{fontFamily:"var(--font-display)"}}>Real client sites</h2>
        <p className="text-sm text-zinc-600">Your 3 live sites will go here — demos stay labeled “Concept”.</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { title: "Client 1", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
            { title: "Client 2", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
            { title: "Client 3", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80&auto=format&fit=crop" },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-[var(--line)] overflow-hidden">
              <Image src={c.img} alt={c.title} width={400} height={200} className="h-40 w-full object-cover border-b border-[var(--line)]" />
              <div className="p-4">
                <div className="text-xs font-mono tracking-widest text-zinc-500">REAL CLIENT {i+1}</div>
                <div className="mt-1 font-bold">{c.title} — add your link</div>
                <div className="mt-1 text-sm text-zinc-600">Add outcome: “+22% bookings in 2 weeks”.</div>
                <a href="#" className="mt-3 inline-block text-sm font-bold underline">View site →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="bg-[var(--paper-2)] border border-[var(--line)] p-6 md:p-8">
          <h3 className="font-black text-lg" style={{fontFamily:"var(--font-display)"}}>How it works — 48 hours</h3>
          <ol className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
            <li className="bg-white border border-[var(--line)] p-5"><div className="font-black text-xs tracking-widest">01 — PICK NICHE</div><div className="mt-2 text-zinc-700 leading-relaxed">Choose salon, restaurant, clinic or real estate. We clone the closest demo.</div></li>
            <li className="bg-white border border-[var(--line)] p-5"><div className="font-black text-xs tracking-widest">02 — WE TAILOR</div><div className="mt-2 text-zinc-700 leading-relaxed">Your logo, colors, services, and currency. No template look.</div></li>
            <li className="bg-white border border-[var(--line)] p-5"><div className="font-black text-xs tracking-widest">03 — YOU REVIEW</div><div className="mt-2 text-zinc-700 leading-relaxed">Live link on your phone. One round of tweaks included.</div></li>
            <li className="bg-[var(--ink)] text-white border border-[var(--line)] p-5"><div className="font-black text-xs tracking-widest text-[var(--accent-2)]">04 — LAUNCH</div><div className="mt-2 text-zinc-300 leading-relaxed">Your domain, invoiced via Wise/PayPal.</div></li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="bg-[var(--ink)] text-white p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[var(--line)]">
          <div>
            <div className="font-black text-xl" style={{fontFamily:"var(--font-display)"}}>See your site rebuilt as a demo — free.</div>
            <div className="text-sm text-zinc-400 mt-2">We record a 60-second Loom of 3 fixes. No spam, worldwide.</div>
          </div>
          <div className="flex gap-3">
            <Link href="/salons" className="px-6 py-3 bg-white text-[var(--ink)] text-sm font-black">Start with salons →</Link>
            <a href="https://wa.me/919999999999" className="px-6 py-3 border border-white/30 text-sm">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
