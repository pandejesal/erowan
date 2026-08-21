import Link from "next/link";
import { Niche } from "@/lib/niches";
import Image from "next/image";

export default function NicheCard({ niche }: { niche: Niche }) {
  return (
    <Link
      href={`/${niche.slug}`}
      className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:border-zinc-300 hover:shadow-sm transition"
    >
      <div className="h-32 overflow-hidden">
        <Image src={niche.demos[0].image} alt={niche.title} width={600} height={200} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
      </div>
      <div className="p-5">
        <div className="text-xs uppercase tracking-widest text-zinc-500">{niche.shortTitle} • Worldwide</div>
        <div className="mt-1 font-semibold leading-tight group-hover:text-zinc-900">{niche.title}</div>
        <div className="mt-1 text-sm text-zinc-600">{niche.tagline}</div>
        <div className="mt-3 text-xs text-amber-700 bg-amber-50 inline-block px-2 py-1 rounded-full">{niche.pain}</div>
        <div className="mt-4 text-sm font-medium text-zinc-900 group-hover:underline">See demos →</div>
      </div>
    </Link>
  );
}
