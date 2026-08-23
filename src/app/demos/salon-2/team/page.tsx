import Link from "next/link";
import Image from "next/image";
import { therapists } from "@/lib/mocks/salon2";

export const metadata = {
  title: "Therapists — Bloom Spa SoHo New York",
  description: "Meet Maya, Sofia, Lina, Zara, Nina — Bloom’s SoHo therapists. EN + ES, 4.9 ★.",
  alternates: { canonical: "https://erowan.com/demos/salon-2/team" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Therapists</h1>
      <p className="text-sm text-zinc-600 mt-2">English + Spanish • SoHo calm • Pick by specialty.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {therapists.map(t=>(
          <Link key={t.id} href={`/demos/salon-2/team/${t.id}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
            <div className="flex gap-4">
              <Image src={t.image} alt={t.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{t.name}</div><div className="text-sm text-zinc-600">{t.specialty}</div><div className="text-xs">★ {t.rating} • {t.languages.join("+")}</div></div>
            </div>
            <div className="mt-3 text-xs text-zinc-600 line-clamp-2">{t.bio}</div>
            <div className="mt-3 text-xs font-bold underline">View → Book with {t.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
