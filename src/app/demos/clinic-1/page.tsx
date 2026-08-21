import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "SmileCare Dental — Dubai | Demo" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="font-serif font-bold">SMILECARE <span className="font-normal text-zinc-500">• DHCC</span></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">APPOINTMENT — AED 150</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.9 • DHA LICENSED • DHCC</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Trust before<br /><span className="text-zinc-400">the chair.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">DHA-licensed doctors, before/after with consent, insurance, WhatsApp appointment — no false promise.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Request appointment</a><a href="#doctors" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Doctors</a></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80&auto=format&fit=crop" alt="SmileCare" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section id="doctors" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Doctors</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { name: "Dr. Aisha Khan", role: "Orthodontist • DHA", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop" },
            { name: "Dr. Omar Farooq", role: "Implantologist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop" },
            { name: "Dr. Sara Lee", role: "Pediatric", img: "https://images.unsplash.com/photo-1594824475545-9d84e24786e2?w=400&q=80&auto=format&fit=crop" },
          ].map(d=>(
            <div key={d.name} className="bg-white border rounded-2xl p-4 flex gap-3">
              <Image src={d.img} alt={d.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{d.name}</div><div className="text-sm text-zinc-600">{d.role}</div><div className="text-xs">★ 4.9</div></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6 grid md:grid-cols-3 gap-3">
        <Image src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80&auto=format&fit=crop" alt="g1" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        <Image src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80&auto=format&fit=crop" alt="g2" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&auto=format&fit=crop" alt="g3" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
      </section>
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center">Concept demo by Erowan — your clinic in 48h.</div>
    </div>
  );
}
