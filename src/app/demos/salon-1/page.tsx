import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";

export const metadata = { title: "Noura Salon — Dubai Marina | Demo by Erowan" };

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8] text-zinc-900">
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <DemoBadge />
          <Link href="/" className="text-xs underline">← Back to Erowan</Link>
        </div>
      </div>

      {/* Salon Header — luxury minimal */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-zinc-900 text-white grid place-items-center font-serif text-sm">N</div>
            <div>
              <div className="font-serif text-lg font-bold tracking-tight">NOURA</div>
              <div className="text-[10px] tracking-[0.2em] text-zinc-500 -mt-1">DUBAI MARINA • EST. 2019</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-xs tracking-widest font-medium">
            <a href="#services" className="hover:underline">SERVICES</a>
            <a href="#gallery" className="hover:underline">GALLERY</a>
            <a href="#team" className="hover:underline">STYLISTS</a>
            <a href="#reviews" className="hover:underline">REVIEWS</a>
          </nav>
          <a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-black">BOOK NOW — AED 120</a>
        </div>
      </header>

      {/* Hero — spacious, human readable */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs tracking-widest border px-2 py-1 rounded-full bg-white">★ 4.9 • 312 REVIEWS • DUBAI MARINA</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Book your glow.<br /><span className="text-zinc-400">No call needed.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">
            After-hours booking for busy Dubai women. See prices, pick a slot, confirm on WhatsApp in 30 seconds. Ladies-only, premium care.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white text-sm font-bold rounded-full">Book on WhatsApp — 30s</a>
            <a href="#services" className="px-6 py-3 bg-white border border-zinc-300 text-sm font-bold rounded-full">See prices</a>
          </div>
          <div className="mt-4 flex gap-4 text-xs text-zinc-500">
            <span>✓ No commission</span><span>✓ Pay at store</span><span>✓ Free reschedule</span>
          </div>
        </div>
        <div className="relative">
          <Image src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1000&q=80&auto=format&fit=crop" alt="Noura Salon interior" width={800} height={600} className="rounded-2xl object-cover h-[420px] w-full border" />
          <div className="absolute -bottom-4 -left-4 bg-white border p-4 rounded-xl shadow-lg hidden md:block">
            <div className="text-xs tracking-widest text-zinc-500">TODAY</div>
            <div className="font-bold">3 slots left • 7pm, 8pm, 8:30pm</div>
            <a href="https://wa.me/919999999999" className="mt-2 inline-block text-xs bg-zinc-900 text-white px-3 py-1 rounded-full">Claim 7pm →</a>
          </div>
        </div>
      </section>

      {/* Services — clear price, not cramped */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-serif font-bold">Services & Prices</h2>
          <span className="text-xs tracking-widest text-zinc-500">AED • INCLUSIVE</span>
        </div>
        <p className="text-sm text-zinc-600 mt-1">Tap to book — transparent, no hidden fees. Most guests book Haircut + Blowdry.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { name: "Haircut + Blowdry", price: "120", desc: "45 min • Wash, cut, style", popular: true },
            { name: "Gel Manicure", price: "90", desc: "60 min • Long-lasting, glossy" },
            { name: "Moroccan Bath", price: "250", desc: "90 min • Deep cleanse & glow" },
            { name: "Bridal Trial", price: "400", desc: "120 min • Trial + consult" },
            { name: "Keratin Smooth", price: "600", desc: "180 min • 3-month smooth" },
            { name: "Brows & Lash Lift", price: "150", desc: "45 min • Natural lift" },
          ].map(s => (
            <div key={s.name} className={`bg-white border rounded-2xl p-5 hover:shadow-sm ${s.popular ? "border-zinc-900" : "border-zinc-200"}`}>
              {s.popular && <div className="text-[10px] tracking-widest bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full">MOST BOOKED</div>}
              <div className="mt-2 flex justify-between items-start">
                <div className="font-bold">{s.name}</div>
                <div className="text-sm font-bold bg-zinc-900 text-white px-2 py-1 rounded-full">AED {s.price}</div>
              </div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc}</div>
              <a href="https://wa.me/919999999999" className="mt-3 inline-block text-xs font-bold underline">Book →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery — not bare */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Gallery</h3>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <Image src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80&auto=format&fit=crop" alt="Salon work 1" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
          <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80&auto=format&fit=crop" alt="Salon work 2" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
          <Image src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop" alt="Salon work 3" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Stylists you’ll love</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {[
            { name: "Layla", role: "Senior Stylist • 8 yrs", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop" },
            { name: "Sara", role: "Nail Artist • Gel expert", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop" },
            { name: "Mona", role: "Bridal Specialist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop" },
          ].map(p => (
            <div key={p.name} className="bg-white border rounded-2xl p-4 flex gap-3">
              <Image src={p.img} alt={p.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div>
                <div className="font-bold">{p.name}</div>
                <div className="text-sm text-zinc-600">{p.role}</div>
                <div className="text-xs text-zinc-500">★ 4.9 • 120+ reviews</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews — spacious, readable */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-8 bg-zinc-50 border-y">
        <h3 className="font-serif font-bold text-center">Loved in Dubai Marina</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { name: "Aisha • Google", text: "Booked at 11pm, got 9am slot. Noura’s team is flawless — haircut perfect every time." },
            { name: "Fatima • Instagram", text: "Moroccan bath was heaven. Prices clear, no surprise. Will book again." },
            { name: "Noor • Repeat", text: "WhatsApp booking in 20 seconds. Ladies-only calm, premium care." },
          ].map(r => (
            <div key={r.name} className="bg-white border rounded-2xl p-5">
              <div className="text-sm leading-relaxed">“{r.text}”</div>
              <div className="mt-3 text-xs font-bold">— {r.name} ★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* Location + CTA */}
      <section className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6">
          <h4 className="font-bold">Visit us — Dubai Marina</h4>
          <div className="mt-3 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — Marina Walk, next to Spinneys • Open 10am–10pm</div>
          <div className="mt-3 text-sm">Walk-ins welcome • Ladies-only • Free parking validation</div>
        </div>
        <div className="bg-zinc-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="font-serif text-xl font-bold">Ready to book?</div>
            <div className="text-sm text-zinc-400 mt-1">30 seconds on WhatsApp. 3 slots left today.</div>
          </div>
          <a href="https://wa.me/919999999999" className="mt-4 inline-flex justify-center px-6 py-3 bg-white text-zinc-900 font-bold rounded-full">Book on WhatsApp — AED 120 →</a>
          <div className="mt-2 text-xs text-zinc-500">Concept demo by Erowan — not a real client. Your salon in 48h.</div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-8 text-xs text-zinc-500 text-center">Demo built by Erowan — Ahmedabad → Worldwide. Replace with your logo, menu, and map in 48h. Pay via Wise/PayPal.</div>
    </div>
  );
}
