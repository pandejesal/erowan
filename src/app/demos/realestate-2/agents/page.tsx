import Link from "next/link";
import Image from "next/image";
import { agents } from "@/lib/mocks/realestate2";
export const metadata = { title: "Agents — Harbor Realty Miami", description: "MLS bilingual EN+ES Brickell.", alternates:{canonical:"https://erowan.com/demos/realestate-2/agents"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Agents — Harbor</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {agents.map(a=>(
          <Link key={a.id} href={`/demos/realestate-2/agents/${a.id}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
            <Image src={a.image} alt={a.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
            <div className="font-bold mt-3">{a.name}</div><div className="text-sm text-zinc-600">{a.role}</div><div className="text-xs text-zinc-500">EN+ES • {a.listings.length} listings</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
