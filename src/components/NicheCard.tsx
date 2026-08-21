import Link from "next/link";
import { Niche } from "@/lib/niches";
import Image from "next/image";

export default function NicheCard({ niche }: { niche: Niche }) {
  return (
    <Link
      href={`/${niche.slug}`}
      className="group block bg-white border border-[var(--line)] brutal-sm overflow-hidden hover:translate-y-[-2px] transition"
    >
      <div className="h-36 overflow-hidden border-b border-[var(--line)]">
        <Image src={niche.demos[0].image} alt={niche.title} width={600} height={200} className="h-full w-full object-cover group-hover:scale-[1.02] transition duration-300" />
      </div>
      <div className="p-4">
        <div className="text-[10px] tracking-[0.18em] text-[var(--muted)] font-mono">{niche.shortTitle.toUpperCase()} • WORLDWIDE</div>
        <div className="mt-1 font-black leading-tight" style={{fontFamily:"var(--font-display)"}}>{niche.title}</div>
        <div className="mt-1 text-sm text-zinc-600 font-mono">{niche.tagline}</div>
        <div className="mt-3 text-xs font-mono bg-[var(--accent)] text-white inline-block px-2 py-1 border border-[var(--line)]">{niche.pain}</div>
        <div className="mt-4 text-xs font-black tracking-widest group-hover:underline">SEE DEMOS →</div>
      </div>
    </Link>
  );
}
