import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LAB — 12 Motion Toys | Erowan",
  description: "12 drag/scrub toys: pricing toggle, booking scrub, before/after, cart, magnetic CTA, fluid cursor, stagger grid, clip reveal, pinned scroll, horizontal rail, text scramble, image distort. Play then steal.",
  alternates: { canonical: "https://erowan.com/lab" },
  openGraph: {
    title: "EROWAN LAB — 12 Motion Toys",
    description: "Drag. Scrub. Steal. 12 toys grouped Convert / Delight / Story.",
    url: "https://erowan.com/lab",
    type: "website",
  },
};

function LabHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A] border-b border-[#2A2A2A] text-[#F2F2F0]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/lab" className="flex items-center gap-3">
          <div className="h-8 w-8 bg-[#D6FF2A] text-black grid place-items-center font-black text-[13px] leading-none">◈</div>
          <div>
            <div className="font-black tracking-[0.14em] text-[13px] leading-none" style={{fontFamily:"var(--font-mono)"}}>EROWAN LAB</div>
            <div className="text-[10px] tracking-[0.18em] text-zinc-400 font-mono">12 TOYS • RAW • NO BUDGET</div>
          </div>
          <span className="hidden sm:inline ml-2 px-2 py-1 bg-[#D6FF2A] text-black text-[10px] font-black tracking-widest">BETA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 text-[11px] font-mono tracking-widest">
          <span className="text-zinc-500 mr-1">FILTER:</span>
          <Link href="/lab#convert" className="px-2.5 py-1.5 border border-[#2A2A2A] hover:border-[#D6FF2A] hover:text-[#D6FF2A]">CONVERT 04</Link>
          <Link href="/lab#delight" className="px-2.5 py-1.5 border border-[#2A2A2A] hover:border-[#D6FF2A] hover:text-[#D6FF2A]">DELIGHT 04</Link>
          <Link href="/lab#story" className="px-2.5 py-1.5 border border-[#2A2A2A] hover:border-[#D6FF2A] hover:text-[#D6FF2A]">STORY 04</Link>
          <Link href="/lab" className="px-2.5 py-1.5 border border-[#D6FF2A] bg-[#D6FF2A] text-black font-black">ALL 12</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/" className="hidden md:inline text-[11px] font-mono tracking-widest text-zinc-400 hover:text-white">← EROWAN</Link>
          <Link href="/pay?pattern=lab" className="px-4 py-2 bg-[#D6FF2A] text-black font-black text-xs tracking-widest border border-[#D6FF2A] hover:bg-white transition">HIRE US →</Link>
        </div>
      </div>
      <div className="lg:hidden border-t border-[#2A2A2A] bg-[#111]">
        <div className="flex gap-1.5 px-4 py-2 overflow-x-auto text-[11px] font-mono tracking-widest">
          <Link href="/lab#convert" className="whitespace-nowrap px-2.5 py-1.5 border border-[#2A2A2A] text-zinc-300">CONVERT 04</Link>
          <Link href="/lab#delight" className="whitespace-nowrap px-2.5 py-1.5 border border-[#2A2A2A] text-zinc-300">DELIGHT 04</Link>
          <Link href="/lab#story" className="whitespace-nowrap px-2.5 py-1.5 border border-[#2A2A2A] text-zinc-300">STORY 04</Link>
        </div>
      </div>
    </header>
  );
}

function LabFooter() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0A0A0A] text-zinc-400">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono">
        <div>© {new Date().getFullYear()} EROWAN LAB — RAW TOY GUIDGETS • BUILT WITH FRAMER + LENIS • <span className="text-[#D6FF2A]">12 TOYS. DRAG. SCRUB. STEAL.</span></div>
        <div className="flex gap-3">
          <Link href="/pay" className="underline hover:text-white">Pay / Book →</Link>
          <a href="https://wa.me/919999999999" className="underline hover:text-white">WA →</a>
          <Link href="/" className="underline hover:text-white">Erowan →</Link>
        </div>
      </div>
    </footer>
  );
}

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F0] selection:bg-[#D6FF2A] selection:text-black"
      style={{"--lab-accent":"#D6FF2A"} as React.CSSProperties}>
      {/* grain + grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04]" style={{backgroundImage:`linear-gradient(#2A2A2A 1px, transparent 1px), linear-gradient(90deg, #2A2A2A 1px, transparent 1px)`, backgroundSize:`32px 32px`}} />
      <LabHeader />
      <main className="relative mx-auto max-w-[1280px] px-5 md:px-6">{children}</main>
      <LabFooter />
    </div>
  );
}
