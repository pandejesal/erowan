"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith("/lab")) return null;
  return (
    <header className="sticky top-0 z-50 bg-[var(--paper)] border-b-[1.5px] border-[var(--line)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-[var(--ink)] text-white px-3 py-2 text-xs">Skip to content</a>
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-[6px] bg-[var(--ink)] text-white grid place-items-center font-black text-sm border border-[var(--line)]" style={{fontFamily:"var(--font-display)"}}>E</div>
          <div>
            <div className="font-black tracking-tight leading-none" style={{fontFamily:"var(--font-display)"}}>EROWAN</div>
            <div className="text-[10px] tracking-[0.18em] text-[var(--muted)] font-mono" style={{fontFamily:"var(--font-mono)"}}>AHMEDABAD → WORLDWIDE • 48H</div>
          </div>
        </Link>
        <nav aria-label="Main" className="hidden md:flex items-center gap-1 text-xs font-mono" style={{fontFamily:"var(--font-mono)"}}>
          <Link href="/lab" className="px-3 py-1.5 border border-[var(--line)] bg-black text-white font-black tracking-widest">LAB</Link>
          <Link href="/salons" className="px-3 py-1.5 border border-transparent hover:border-[var(--line)] hover:bg-white">SALONS</Link>
          <Link href="/restaurants" className="px-3 py-1.5 border border-transparent hover:border-[var(--line)] hover:bg-white">RESTAURANTS</Link>
          <Link href="/clinics" className="px-3 py-1.5 border border-transparent hover:border-[var(--line)] hover:bg-white">CLINICS</Link>
          <Link href="/real-estate" className="px-3 py-1.5 border border-transparent hover:border-[var(--line)] hover:bg-white">REAL ESTATE</Link>
          <Link href="/other" className="px-3 py-1.5 border border-transparent hover:border-[var(--line)] hover:bg-white">OTHER</Link>
          <Link href="/pay" className="ml-1 px-4 py-1.5 bg-[var(--accent)] text-white border border-[var(--line)] font-bold hover:translate-y-[-1px] hover:shadow-[3px_3px_0_var(--line)] transition">PAY / BOOK →</Link>
        </nav>
        <div className="flex md:hidden items-center gap-2">
          <Link href="/pay" className="px-3 py-1.5 bg-[var(--accent)] text-white border border-[var(--line)] text-xs font-bold">PAY</Link>
        </div>
      </div>
      <div className="md:hidden border-t border-[var(--line)] bg-[var(--paper-2)]">
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-6 py-2 flex gap-1 text-[11px] font-mono overflow-x-auto" style={{fontFamily:"var(--font-mono)"}}>
          <Link href="/lab" className="whitespace-nowrap px-2 py-1 border border-[var(--line)] bg-black text-white font-black">LAB</Link>
          <Link href="/salons" className="whitespace-nowrap px-2 py-1 border border-[var(--line)] bg-white">SALONS</Link>
          <Link href="/restaurants" className="whitespace-nowrap px-2 py-1 border border-[var(--line)] bg-white">RESTAURANTS</Link>
          <Link href="/clinics" className="whitespace-nowrap px-2 py-1 border border-[var(--line)] bg-white">CLINICS</Link>
          <Link href="/real-estate" className="whitespace-nowrap px-2 py-1 border border-[var(--line)] bg-white">REAL ESTATE</Link>
          <Link href="/other" className="whitespace-nowrap px-2 py-1 border border-[var(--line)] bg-white">OTHER</Link>
        </nav>
      </div>
    </header>
  );
}
