import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { menu, getMenu } from "@/lib/mocks/restaurant1";

export function generateStaticParams(){ return menu.map(m=>({slug:m.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const m=getMenu(params.slug);
  if(!m) return {};
  return { title:`${m.name} — ${m.price} | Mira Cafe JLT`, description:m.longDesc, alternates:{canonical:`https://erowan.com/demos/restaurant-1/menu/${m.slug}`} };
}

export default function Page({params}:{params:{slug:string}}){
  const m=getMenu(params.slug);
  if(!m) return notFound();
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/restaurant-1" className="underline">Home</Link> / <Link href="/demos/restaurant-1/menu" className="underline">Menu</Link> / {m.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold">{m.name}</h1>
          <div className="mt-2 flex gap-2"><span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-bold">{m.price}</span><span className="bg-white border px-3 py-1 rounded-full text-sm">{m.category}</span><span className="bg-amber-100 border px-3 py-1 rounded-full text-xs">JLT</span></div>
          <p className="mt-4 text-sm leading-7 text-zinc-700">{m.longDesc}</p>
          {m.modifiers.length>0 && (
            <div className="mt-6 space-y-3">
              {m.modifiers.map(mod=>(
                <div key={mod.id} className="bg-white border rounded-2xl p-4">
                  <div className="font-bold text-sm">{mod.label}</div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {mod.options.map(o=>(
                      <span key={o.label} className="border rounded-full px-3 py-1 text-xs bg-zinc-50">{o.label} {o.price!=="AED 0" && o.price!=="£0" ? `+${o.price}` : ""}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 bg-white border rounded-2xl p-4">
            <div className="font-bold text-sm">Allergens & Tags</div>
            <div className="mt-2 flex gap-2 flex-wrap text-xs">
              {m.allergens.map(a=><span key={a} className="border rounded-full px-2 py-1 bg-amber-50">{a}</span>)}
              {m.tags.map(t=><span key={t} className="border rounded-full px-2 py-1 bg-white">{t}</span>)}
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Link href={`/demos/restaurant-1/order?add=${m.slug}`} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Add to Order — {m.price} →</Link>
            <a href="https://wa.me/919999999999" className="px-6 py-3 bg-white border rounded-full font-bold text-sm">WhatsApp</a>
          </div>
        </div>
        <div>
          <Image src={m.image} alt={m.name} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
          <div className="mt-4 bg-zinc-50 border rounded-2xl p-4 text-sm">
            <div className="font-bold">Avg. prep 15 min • JLT</div>
            <div className="text-xs text-zinc-600 mt-1">Order on WhatsApp beats Talabat fees.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
