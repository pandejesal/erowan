import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProduct, collections } from "@/lib/mocks/other2";
export function generateStaticParams(){ return products.map(p=>({slug:p.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const p=getProduct(params.slug);
  if(!p) return {};
  return { title: `${p.name} — ${p.price} | Craft Brooklyn`, description: p.longDesc, alternates:{canonical:`https://erowan.com/demos/other-2/products/${p.slug}`} };
}
export default function Page({params}:{params:{slug:string}}){
  const p=getProduct(params.slug);
  if(!p) return notFound();
  const col=collections.find(c=>c.productSlugs.includes(p.slug));
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/other-2/products" className="underline">Products</Link> / {p.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold">{p.name}</h1>
          <div className="mt-2 flex gap-2"><span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-bold">{p.price}</span><span className="bg-white border px-3 py-1 rounded-full text-sm">{p.dims}</span><span className="bg-[#C4A484] text-white px-2 py-1 rounded-full text-xs">HANDMADE • {p.stock} left</span></div>
          <p className="mt-4 text-sm leading-7 text-zinc-700">{p.longDesc}</p>
          <div className="mt-4 flex gap-2">{p.materials.map(m=><span key={m} className="border rounded-full px-2 py-1 text-xs bg-zinc-50">{m}</span>)}{col && <Link href={`/demos/other-2/collections/${col.slug}`} className="border rounded-full px-2 py-1 text-xs bg-white underline">{col.name} →</Link>}</div>
          <div className="mt-6 flex gap-3">
            <Link href={`/demos/other-2/cart?add=${p.slug}`} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Add to cart — {p.price}</Link>
            <a href={`https://wa.me/919999999999?text=${encodeURIComponent('Hi Craft — order '+p.name+' '+p.price)}`} className="px-6 py-3 bg-white border rounded-full font-bold text-sm">WhatsApp →</a>
          </div>
          <div className="mt-3 text-xs text-zinc-500">✓ Ships in 3 days worldwide • 30-day returns • Wholesale on request</div>
          <div className="mt-4 bg-white border rounded-2xl p-4 hidden md:block"><div className="text-xs tracking-widest text-zinc-400">CLAY PREVIEW</div><div className="mt-2 h-24 rounded-xl bg-gradient-to-br from-[#C4A484]/30 to-zinc-100 border grid place-items-center text-xs text-zinc-500">3D mug — MeshPhysicalMaterial (hidden on mobile/reduced-motion: fallback image above)</div></div>
        </div>
        <div>
          <Image src={p.image} alt={p.name} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
          <div className="mt-3 grid grid-cols-3 gap-3">{p.gallery.map((g,i)=><Image key={i} src={g} alt="gallery" width={300} height={300} className="rounded-xl h-24 w-full object-cover border" />)}</div>
        </div>
      </div>
    </div>
  );
}
