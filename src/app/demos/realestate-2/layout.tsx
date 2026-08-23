import Link from "next/link";
import DemoBadge from "@/components/DemoBadge";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFFCF8] text-zinc-900">
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <DemoBadge />
          <Link href="/" className="text-xs underline">← Back to Erowan</Link>
        </div>
      </div>

      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-4">
          <Link href="/demos/realestate-2" className="font-serif font-bold">HARBOR <span className="font-normal text-zinc-500">• MIAMI BRICKELL</span></Link>
          <nav className="hidden lg:flex gap-5 text-xs tracking-widest font-medium">
            <Link href="/demos/realestate-2/listings" className="hover:underline">LISTINGS</Link>
            <Link href="/demos/realestate-2/agents" className="hover:underline">AGENTS</Link>
            <Link href="/demos/realestate-2/areas" className="hover:underline">AREAS</Link>
            <Link href="/demos/realestate-2/about" className="hover:underline">ABOUT</Link>
            <Link href="/demos/realestate-2/blog" className="hover:underline">BLOG</Link>
          </nav>
          <Link href="/demos/realestate-2/contact" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">GET BROCHURE</Link>
        </div>
        <div className="lg:hidden border-t border-zinc-100">
          <nav className="mx-auto max-w-7xl px-6 py-2 flex gap-4 text-xs tracking-widest overflow-x-auto">
            <Link href="/demos/realestate-2/listings">LISTINGS</Link>
            <Link href="/demos/realestate-2/agents">AGENTS</Link>
            <Link href="/demos/realestate-2/contact">CONTACT</Link>
          </nav>
        </div>
      </header>

      <div>{children}</div>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-serif font-bold">HARBOR</div>
            <div className="text-xs tracking-widest text-zinc-500">MIAMI BRICKELL • MLS</div>
            <p className="text-xs text-zinc-600 mt-2">Miami listings that convert. Bilingual EN+ES, MLS.</p>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">LISTINGS</div>
            <ul className="mt-3 space-y-1 text-sm">
              <li><Link href="/demos/realestate-2/listings/brickell-2br" className="hover:underline">2BR Brickell $450K</Link></li>
              <li><Link href="/demos/realestate-2/listings/coral-gables-villa" className="hover:underline">Villa $1.2M</Link></li>
              <li><Link href="/demos/realestate-2/areas/brickell" className="hover:underline">Areas</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">VISIT</div>
            <ul className="mt-3 space-y-1 text-xs text-zinc-600">
              <li>Brickell • MLS</li>
              <li><a href="https://wa.me/919999999999" className="underline">WhatsApp brochure</a></li>
            </ul>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl p-5">
            <div className="font-bold">Bilingual</div>
            <div className="text-xs text-zinc-400 mt-1">EN+ES • 200+ deals.</div>
            <Link href="/demos/realestate-2/contact" className="mt-3 inline-flex w-full justify-center px-4 py-2 bg-white text-zinc-900 font-bold rounded-full text-sm">Get brochure →</Link>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-500 py-4 border-t">Demo by Erowan — your brokerage in 48h. MLS.</div>
      </footer>
    </div>
  );
}
