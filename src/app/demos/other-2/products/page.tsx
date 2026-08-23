import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/mocks/other2";
export const metadata = { title: "Products — Craft Shop Brooklyn", description: "6 handmade: Mug $28, Apron $45, Board $60. Ceramics/textiles/wood.", alternates:{canonical:"https://erowan.com/demos/other-2/products"} };
export default function Page({searchParams}:{searchParams:{cat?:string}}){
  const cat=searchParams.cat;
  let list=products;
  if(cat) list=list.filter(p=>p.category===cat);
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Products — Craft</h1>
      <div className="mt-4 flex gap-2 text-xs">
        <a href="/demos/other-2/products" className={`px-3 py-1 rounded-full border ${!cat?"bg-zinc-900 text-white":"bg-white"}`}>ALL</a>
        <a href="/demos/other-2/products?cat=ceramics" className={`px-3 py-1 rounded-full border ${cat==="ceramics"?"bg-zinc-900 text-white":"bg-white"}`}>Ceramics</a>
        <a href="/demos/other-2/products?cat=textiles" className={`px-3 py-1 rounded-full border ${cat==="textiles"?"bg-zinc-900 text-white":"bg-white"}`}>Textiles</a>
        <a href="/demos/other-2/products?cat=wood" className={`px-3 py-1 rounded-full border ${cat==="wood"?"bg-zinc-900 text-white":"bg-white"}`}>Wood</a>
      </div>
      <div className="mt-2 text-xs text-zinc-500">Showing {list.length} of {products.length} • Handmade • Small batch</div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {list.map(p=>(
          <Link key={p.slug} href={`/demos/other-2/products/${p.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={p.image} alt={p.name} width={400} height={300} className="h-36 w-full object-cover border-b" />
            <div className="p-4"><div className="flex justify-between"><div className="font-bold">{p.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{p.price}</div></div><div className="text-sm text-zinc-600 mt-1">{p.desc} • {p.materials[0]} • {p.stock} left</div><div className="text-xs tracking-widest text-zinc-400 mt-1">HANDMADE • {p.category.toUpperCase()}</div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
