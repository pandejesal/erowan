import Link from "next/link";
import Image from "next/image";
import { team } from "@/lib/mocks/other1";
export const metadata = { title: "Team — North Consulting", description: "James, Priya, Alex, Sara, Tom — London Shoreditch.", alternates:{canonical:"https://erowan.com/demos/other-1/team"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Team — North</h1>
      <div className="mt-6 grid md:grid-cols-5 gap-4">
        {team.map(p=>(
          <Link key={p.id} href={`/demos/other-1/team/${p.id}`} className="bg-white border rounded-2xl p-5 text-center hover:shadow-sm">
            <Image src={p.image} alt={p.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border mx-auto" />
            <div className="font-bold mt-2">{p.name}</div><div className="text-xs text-zinc-500">{p.role}</div><div className="mt-2 flex flex-wrap gap-1 justify-center">{p.expertise.map(e=><span key={e} className="border rounded-full px-1.5 py-0.5 text-[10px] bg-zinc-50">{e}</span>)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
