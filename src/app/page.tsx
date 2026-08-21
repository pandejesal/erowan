import NicheCard from "@/components/NicheCard";
import Pricing from "@/components/Pricing";
import { niches } from "@/lib/niches";
import Link from "next/link";
import Image from "next/image";

/* Design Direction: Editorial Newsroom Brutalism
   DFII: Impact 5 + Fit 4 + Feasibility 4 + Performance 4 - Risk 2 = 11 (Strong)
   Anchor: If logo removed, you recognize Erowan by the brutal ink borders + vermillion pill + Fraunces display + vertical mono side text.
   This avoids generic SaaS gradients by using paper/ink, brutalism, editorial hierarchy.
*/

export default function Home() {
  return (
    <div className="relative">
      {/* Masthead strip */}
      <div className="border-b border-[var(--line)] bg-[var(--paper-2)]">
        <div className="mx-auto max-w-6xl px-4 py-1 flex justify-between text-[10px] font-mono tracking-widest text-[var(--muted)]">
          <span>EST. 2024 • AHMEDABAD → WORLDWIDE</span>
          <span className="hidden sm:inline">48H DELIVERY • $250 BASE • NO SUBSCRIPTION</span>
          <span>EDITION № 07</span>
        </div>
      </div>

      {/* Hero — asymmetrical editorial */}
      <section className="mx-auto max-w-6xl px-4 pt-6 pb-8">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest border border-[var(--line)] px-2 py-1 bg-white">● LIVE — TAKING WORLDWIDE CLIENTS</div>
            <h1 className="mt-4 text-[42px] md:text-[64px] font-black leading-[0.85] tracking-tight" style={{fontFamily:"var(--font-display)"}}>
              WEBSITES<br />
              THAT <span className="bg-[var(--accent)] text-white px-2">BOOK</span><br />
              & SELL<span className="text-[var(--accent)]">.</span>
            </h1>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-2xl font-black">$250</span>
              <span className="text-xs font-mono text-[var(--muted)]">BASE • 48H • WORLDWIDE</span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-700 max-w-[46ch]">
              Erowan — two friends in Ahmedabad shipping <em>booking-first</em> sites for salons, restaurants, clinics & real estate. Same quality as London agencies, 1/5th the price. No fake address, no subscription.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href="#niches" className="px-5 py-2.5 bg-[var(--ink)] text-white border border-[var(--line)] text-sm font-bold brutal-sm hover:translate-y-[-1px] transition">SEE NICHE DEMOS →</a>
              <a href="https://wa.me/919999999999" className="px-5 py-2.5 bg-white border border-[var(--line)] text-sm font-bold">WHATSAPP US</a>
              <a href="https://calendly.com" className="px-4 py-2.5 text-xs font-mono underline">BOOK 15-MIN →</a>
            </div>
            <div className="mt-6 flex gap-6 text-xs font-mono border-t border-[var(--line)] pt-3">
              <span><b>1,000+</b> components via shadcn</span>
              <span className="hidden sm:inline"><b>22</b> live pages</span>
              <span><b>48H</b> promise</span>
            </div>
          </div>
          {/* Overlapping image stack — differentiation anchor */}
          <div className="relative h-[520px] hidden md:block">
            <div className="absolute top-0 right-6 w-[78%] brutal bg-white p-2 rotate-[1deg]">
              <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop" alt="Salon" width={600} height={400} className="h-[180px] w-full object-cover border border-[var(--line)]" />
              <div className="pt-2 flex justify-between text-xs font-mono"><span>SALONS • 4.9★ 312 reviews</span><span className="bg-[var(--accent)] text-white px-1">LIVE</span></div>
            </div>
            <div className="absolute top-28 left-0 w-[72%] brutal bg-white p-2 -rotate-[1.5deg]">
              <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop" alt="Restaurant" width={600} height={400} className="h-[160px] w-full object-cover border border-[var(--line)]" />
              <div className="pt-2 text-xs font-mono">RESTAURANTS • NO COMMISSION ORDERING</div>
            </div>
            <div className="absolute bottom-0 right-0 w-[80%] brutal bg-white p-2 rotate-[0.8deg]">
              <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop" alt="Clinic" width={600} height={400} className="h-[170px] w-full object-cover border border-[var(--line)]" />
              <div className="pt-2 flex justify-between text-xs font-mono"><span>CLINICS • TRUST BEFORE BOOK</span><span>48H</span></div>
            </div>
            <div className="absolute -left-2 top-1/2 -rotate-90 text-[10px] tracking-[0.2em] font-mono text-[var(--muted)]">WORLDWIDE • DUBAI • NEW YORK • LONDON • BERLIN • MIAMI</div>
          </div>
        </div>
      </section>

      {/* Niches — classifieds */}
      <section id="niches" className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-baseline justify-between border-b border-[var(--line)] pb-2">
          <h2 className="text-xl font-black tracking-tight" style={{fontFamily:"var(--font-display)"}}>PICK YOUR NICHE — SEE LIVE DEMOS</h2>
          <span className="hidden sm:inline text-xs font-mono text-[var(--muted)]">WORLDWIDE SPECIALIST PAGES • EACH LOOKS BESPOKE</span>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {niches.map((n) => (
            <NicheCard key={n.slug} niche={n} />
          ))}
        </div>
      </section>

      {/* Pricing — editorial table */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <Pricing />
      </section>

      {/* Real clients — evidence wall */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-black" style={{fontFamily:"var(--font-display)"}}>3 REAL CLIENT SITES</h2>
          <span className="text-xs font-mono text-[var(--muted)]">REPLACE WITH YOUR LIVE LINKS</span>
        </div>
        <p className="text-sm text-zinc-600 font-mono">Keep demos labeled “Concept” — clients stay honest.</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { title: "Client 1", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
            { title: "Client 2", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
            { title: "Client 3", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80&auto=format&fit=crop" },
          ].map((c, i) => (
            <div key={i} className="brutal-sm bg-white overflow-hidden">
              <Image src={c.img} alt={c.title} width={400} height={200} className="h-36 w-full object-cover border-b border-[var(--line)]" />
              <div className="p-4">
                <div className="text-[10px] font-mono tracking-widest text-[var(--muted)]">REAL CLIENT {i+1} — WORLDWIDE</div>
                <div className="mt-1 font-bold">{c.title} — your live link here</div>
                <div className="mt-1 text-sm text-zinc-600">Add outcome: “+22% bookings in 2 weeks”.</div>
                <a href="#" className="mt-3 inline-block text-xs font-mono underline">VIEW SITE →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work — brutal steps */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="border border-[var(--line)] bg-[var(--paper-2)] p-6">
          <h3 className="font-black tracking-tight" style={{fontFamily:"var(--font-display)"}}>HOW WE HIT 48 HOURS — WORLDWIDE</h3>
          <ol className="mt-3 grid md:grid-cols-4 gap-3 text-sm">
            <li className="bg-white border border-[var(--line)] p-4"><span className="font-black">01. YOU PICK NICHE</span><br /><span className="text-zinc-600 font-mono text-xs">Salon / Restaurant etc. We clone closest demo.</span></li>
            <li className="bg-white border border-[var(--line)] p-4"><span className="font-black">02. WE TAILOR</span><br /><span className="text-zinc-600 font-mono text-xs">Logo, colors, services, currency.</span></li>
            <li className="bg-white border border-[var(--line)] p-4"><span className="font-black">03. YOU REVIEW</span><br /><span className="text-zinc-600 font-mono text-xs">Live link on phone. 1 tweak round.</span></li>
            <li className="bg-[var(--ink)] text-white border border-[var(--line)] p-4"><span className="font-black">04. LAUNCH</span><br /><span className="text-zinc-400 font-mono text-xs">Your domain, Wise/PayPal invoice.</span></li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="bg-[var(--ink)] text-white border border-[var(--line)] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 brutal">
          <div>
            <div className="font-black text-lg" style={{fontFamily:"var(--font-display)"}}>READY TO SEE YOUR SITE REBUILT AS A DEMO?</div>
            <div className="text-sm text-zinc-400 mt-1 font-mono">60-sec Loom of 3 fixes — free, worldwide. No spam.</div>
          </div>
          <div className="flex gap-2">
            <Link href="/salons" className="px-5 py-2.5 bg-white text-[var(--ink)] text-sm font-black border border-white hover:bg-[var(--accent)] hover:text-white hover:border-[var(--line)]">START WITH SALONS →</Link>
            <a href="https://wa.me/919999999999" className="px-5 py-2.5 border border-white/30 text-sm font-mono">WHATSAPP</a>
          </div>
        </div>
      </section>
    </div>
  );
}
