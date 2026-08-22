import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "Al Noor Clinic — Berlin | Demo" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="font-serif font-bold">AL NOOR <span className="font-normal text-zinc-500">• BERLIN</span></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">BOOK — €45</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.8 • MITTE • GDPR SAFE</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Care that<br /><span className="text-zinc-400">feels calm.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">German + expat care. Doctor credentials, map, insurance, WhatsApp booking — no data stored.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Book consultation</a><a href="#services" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Services</a></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&q=80&auto=format&fit=crop" alt="Al Noor" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.8 ★</div><div className="text-xs text-zinc-400">180 reviews</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">6k+</div><div className="text-xs text-zinc-500">Patients</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">10 yrs</div><div className="text-xs text-zinc-500">Mitte</div></div>
        </div>
      </section>
      <section id="services" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Services</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { name: "GP Visit", price: "€45" },
            { name: "Dental Check", price: "€35" },
            { name: "Pediatric", price: "€50" },
            { name: "Lab Tests", price: "€60" },
            { name: "Vaccination", price: "€30" },
            { name: "Wellness", price: "€120" },
          ].map(s=>(
            <div key={s.name} className="bg-white border rounded-2xl p-5 flex justify-between"><div className="font-bold">{s.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{s.price}</div></div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Patient stories</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {[
            "Dr. was thorough, no rush. Berlin care, calm.",
            "Lab results same day via WhatsApp. Easy.",
            "Family doctor for 3 years — trust.",
          ].map((t,i)=><div key={i} className="bg-white border rounded-2xl p-5 text-sm">“{t}”<div className="mt-2 text-xs font-bold">— Patient ★★★★★</div></div>)}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center">Concept demo by Erowan — your clinic in 48h.</div>
    </div>
  );
}
