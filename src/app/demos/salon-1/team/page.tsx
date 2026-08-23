import Link from "next/link";
import Image from "next/image";
import { stylists } from "@/lib/mocks/salon1";

export const metadata = {
  title: "Stylists — Noura Salon Dubai Marina",
  description: "Meet Layla, Sara, Mona, Huda, Nour, Zara — Noura’s ladies-only team. 4.9 ★, book by stylist in 30s on WhatsApp.",
  alternates: { canonical: "https://erowan.com/demos/salon-1/team" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Stylists you’ll love</h1>
      <p className="text-sm text-zinc-600 mt-2">Ladies-only, premium care. Pick a stylist → pick a service → WhatsApp in 30s. 4.9 ★ average.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {stylists.map(s=>(
          <Link key={s.id} href={`/demos/salon-1/team/${s.id}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
            <div className="flex gap-4">
              <Image src={s.image} alt={s.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div>
                <div className="font-bold">{s.name}</div>
                <div className="text-sm text-zinc-600">{s.role}</div>
                <div className="text-xs">★ {s.rating} • {s.reviews} reviews</div>
              </div>
            </div>
            <div className="mt-3 text-xs text-zinc-600 line-clamp-2">{s.bio}</div>
            <div className="mt-3 flex gap-2 flex-wrap">
              {s.specialties.map(sp=> <span key={sp} className="text-[11px] border px-2 py-0.5 rounded-full bg-zinc-50">{sp}</span>)}
            </div>
            <div className="mt-4 text-xs font-bold underline">View profile → Book with {s.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
