import Link from "next/link";
export default function Layout({children}:{children:React.ReactNode}){
  return (
    <div className="min-h-screen bg-[#FFFCF8] text-zinc-900">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between text-xs"><span>Demo — North Consulting London</span><Link href="/" className="underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-[#0F1A2E]/95 backdrop-blur text-white border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
          <Link href="/demos/other-1" className="font-serif font-bold tracking-wide">NORTH <span className="font-normal text-zinc-300">CONSULTING • LONDON • 12 YRS</span></Link>
          <nav className="hidden md:flex gap-4 text-xs">
            <Link href="/demos/other-1/services" className="hover:underline">Services</Link>
            <Link href="/demos/other-1/case-studies" className="hover:underline">Case studies</Link>
            <Link href="/demos/other-1/team" className="hover:underline">Team</Link>
            <Link href="/demos/other-1/about" className="hover:underline">About</Link>
            <Link href="/demos/other-1/contact" className="hover:underline">Contact</Link>
          </nav>
          <Link href="/demos/other-1/booking" className="px-4 py-2 rounded-full bg-white text-zinc-900 text-xs font-bold">Book free 20 min →</Link>
        </div>
      </header>
      {children}
      <footer className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center border-t">North Consulting — Shoreditch, London • Worldwide • Concept demo by Erowan</footer>
    </div>
  );
}
