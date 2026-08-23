import Link from "next/link";
import Image from "next/image";
import { collections } from "@/lib/mocks/other2";
export const metadata = { title: "Collections — Craft Brooklyn", description: "Ceramics, textiles, wood — 3 collections, Navy Yard.", alternates:{canonical:"https://erowan.com/demos/other-2/collections"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Collections — Craft</h1>
      <p className="text-sm text-zinc-600">3 drops, small batch. Since 2018.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {collections.map(c=>(
          <Link key={c.slug} href={`/demos/other-2/collections/${c.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={c.image} alt={c.name} width={500} height={300} className="h-40 w-full object-cover border-b" />
            <div className="p-4"><div className="font-bold">{c.name}</div><div className="text-xs text-zinc-500">{c.desc}</div><div className="text-xs text-zinc-400 mt-1">{c.productSlugs.length} products →</div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
