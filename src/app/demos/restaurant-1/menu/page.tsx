import Link from "next/link";
import Image from "next/image";
import { menu } from "@/lib/mocks/restaurant1";

export const metadata = {
  title: "Menu — Mira Cafe JLT | Tap to Order • No Commission",
  description: "6 items, modifiers, tap to order, WhatsApp checkout. Avocado Toast AED 38, Mira Burger AED 55.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-1/menu" },
};

export default function Page(){
  const categories: Record<string, typeof menu> = { breakfast:[], brunch:[], coffee:[], bowls:[] };
  menu.forEach(m=>{ if(categories[m.category]) categories[m.category].push(m); });
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Menu — Tap to order</h1>
      <p className="text-sm text-zinc-600 mt-2">Modifiers for spice & sides, WhatsApp checkout. No commission, no app.</p>
      {Object.entries(categories).map(([cat,items])=> items.length>0 && (
        <div key={cat} className="mt-8">
          <h2 className="font-bold tracking-widest text-xs">{cat.toUpperCase()}</h2>
          <div className="mt-3 grid md:grid-cols-3 gap-4">
            {items.map(s=>(
              <Link key={s.slug} href={`/demos/restaurant-1/menu/${s.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
                <Image src={s.image} alt={s.name} width={400} height={300} className="h-32 w-full object-cover border-b" />
                <div className="p-4 flex justify-between"><div><div className="font-bold">{s.name}</div><div className="text-sm text-zinc-600">{s.desc}</div></div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold h-fit">{s.price}</div></div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
