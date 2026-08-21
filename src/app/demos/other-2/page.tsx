import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "Craft Shop — Brooklyn | Demo" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="font-serif font-bold">CRAFT <span className="font-normal text-zinc-500">SHOP • BROOKLYN</span></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">SHOP — $250</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.9 • BROOKLYN • HANDMADE</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Made by hand.<br /><span className="text-zinc-400">Sold worldwide.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Ceramics & textiles from Brooklyn studio. Shop, story, stock — one site that sells.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Shop WhatsApp</a><a href="#products" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Products</a></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&q=80&auto=format&fit=crop" alt="Craft Shop" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section id="products" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Products</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { name: "Ceramic Mug", price: "$28", img: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=600&q=80&auto=format&fit=crop" },
            { name: "Linen Apron", price: "$45", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80&auto=format&fit=crop" },
            { name: "Wood Board", price: "$60", img: "https://images.unsplash.com/photo-1582738411706-bfc82e952a5a?w=600&q=80&auto=format&fit=crop" },
          ].map(p=>(
            <div key={p.name} className="bg-white border rounded-2xl overflow-hidden">
              <Image src={p.img} alt={p.name} width={400} height={250} className="h-36 w-full object-cover border-b" />
              <div className="p-4 flex justify-between"><div className="font-bold">{p.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{p.price}</div></div>
            </div>
          ))}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center">Concept demo by Erowan — your shop in 48h.</div>
    </div>
  );
}
