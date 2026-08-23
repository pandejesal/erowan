import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { collections, getCollection, getProduct } from "@/lib/mocks/other2";
export function generateStaticParams(){ return collections.map(c=>({slug:c.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const c=getCollection(params.slug);
  if(!c) return {};
  return { title: `${c.name} | Craft Brooklyn`, description: c.desc, alternates:{canonical:`https://erowan.com/demos/other-2/collections/${c.slug}`} };
}
export default function Page({params}:{params:{slug:string}}){
  const c=getCollection(params.slug);
  if(!c) return notFound();
  const items=c.productSlugs.map(slug=>getProduct(slug)).filter(Boolean) as NonNullable<ReturnType<typeof getProduct>>[];
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/other-2/collections" className="underline">Collections</Link> / {c.name}</div>
      <h1 className="mt-2 text-3xl font-serif font-bold">{c.name}</h1>
      <p className="text-sm text-zinc-600">{c.desc}</p>
      <Image src={c.image} alt={c.name} width={900} height={400} className="mt-4 rounded-2xl h-64 w-full object-cover border" />
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map(p=>(
          <Link key={p.slug} href={`/demos/other-2/products/${p.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={p.image} alt={p.name} width={400} height={300} className="h-32 w-full object-cover border-b" />
            <div className="p-4"><div className="flex justify-between"><div className="font-bold text-sm">{p.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold">{p.price}</div></div><div className="text-xs text-zinc-500">{p.dims} • {p.stock} left</div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
