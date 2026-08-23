import Link from "next/link";
import Image from "next/image";
import { agents } from "@/lib/mocks/realestate1";
export const metadata = { title: "Agents — Vista Homes", description: "RERA agents Dubai Hills.", alternates:{canonical:"https://erowan.com/demos/realestate-1/agents"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Agents</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {agents.map(a=>(
          <Link key={a.id} href={`/demos/realestate-1/agents/${a.id}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
            <Image src={a.image} alt={a.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
            <div className="font-bold mt-3">{a.name}</div><div className="text-sm text-zinc-600">{a.role}</div><div className="text-xs text-zinc-500">{a.languages.join(' + ')}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
