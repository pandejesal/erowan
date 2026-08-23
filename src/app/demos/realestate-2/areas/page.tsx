import Link from "next/link";
import Image from "next/image";
import { areas } from "@/lib/mocks/realestate2";
export const metadata = { title: "Areas — Harbor Realty", description: "Brickell, Creek, DAMAC, JVC.", alternates:{canonical:"https://erowan.com/demos/realestate-2/areas"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Areas</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {areas.map(a=>(
          <Link key={a.slug} href={`/demos/realestate-2/areas/${a.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={a.image} alt={a.name} width={400} height={250} className="h-32 w-full object-cover" />
            <div className="p-4"><div className="font-bold">{a.name}</div><div className="text-xs text-zinc-500">{a.avgPrice} avg</div><div className="text-sm text-zinc-600 mt-1">{a.desc}</div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
