import Link from "next/link";
import Image from "next/image";
import { chefs } from "@/lib/mocks/restaurant1";

export const metadata = {
  title: "Chefs — Mira Cafe JLT",
  description: "Lina, Omar, Sofia — JLT brunch chefs.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-1/chefs" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Chefs</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {chefs.map(c=>(
          <Link key={c.id} href={`/demos/restaurant-1/chefs/${c.id}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
            <div className="flex gap-4">
              <Image src={c.image} alt={c.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{c.name}</div><div className="text-sm text-zinc-600">{c.role}</div></div>
            </div>
            <div className="mt-3 text-xs text-zinc-600">{c.bio} — {c.specialty}</div>
            <div className="mt-3 text-xs font-bold underline">View →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
