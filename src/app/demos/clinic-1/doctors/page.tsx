import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/lib/mocks/clinic1";

export const metadata = {
  title: "Doctors — SmileCare Dental DHCC",
  description: "DHA-licensed: Aisha Khan, Omar Farooq, Sara Lee, Huda Ali, Karim Youssef. 4.9 ★.",
  alternates: { canonical: "https://erowan.com/demos/clinic-1/doctors" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Doctors</h1>
      <p className="text-sm text-zinc-600 mt-2">DHA-licensed • Before/after with consent • Languages EN/AR/HI/FR.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {doctors.map(d=>(
          <Link key={d.id} href={`/demos/clinic-1/doctors/${d.id}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
            <div className="flex gap-4">
              <Image src={d.image} alt={d.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{d.name}</div><div className="text-sm text-zinc-600">{d.role}</div><div className="text-xs tracking-widest">{d.creds}</div></div>
            </div>
            <div className="mt-3 text-xs text-zinc-600 line-clamp-2">{d.bio}</div>
            <div className="mt-2 text-xs">★ {d.rating} • {d.languages.join(" ")} • {d.treatments.join(", ")}</div>
            <div className="mt-3 text-xs font-bold underline">View → Book with {d.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
