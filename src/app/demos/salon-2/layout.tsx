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

      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-4">
          <Link href="/demos/salon-2" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-zinc-900 text-white grid place-items-center font-serif">B</div>
            <div>
              <div className="font-serif text-lg font-bold tracking-tight">BLOOM</div>
              <div className="text-[10px] tracking-[0.2em] text-zinc-500 -mt-1">SOHO • NEW YORK</div>
            </div>
          </Link>
          <nav className="hidden lg:flex gap-5 text-xs tracking-widest font-medium">
            <Link href="/demos/salon-2/services" className="hover:underline">SERVICES</Link>
            <Link href="/demos/salon-2/team" className="hover:underline">THERAPISTS</Link>
            <Link href="/demos/salon-2/garden" className="hover:underline">GARDEN</Link>
            <Link href="/demos/salon-2/reviews" className="hover:underline">REVIEWS</Link>
            <Link href="/demos/salon-2/about" className="hover:underline">ABOUT</Link>
            <Link href="/demos/salon-2/blog" className="hover:underline">JOURNAL</Link>
            <Link href="/demos/salon-2/faq" className="hover:underline">FAQ</Link>
          </nav>
          <Link href="/demos/salon-2/booking" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-black">BOOK — $85</Link>
        </div>
        <div className="lg:hidden border-t border-zinc-100">
          <nav className="mx-auto max-w-7xl px-6 py-2 flex gap-4 text-xs tracking-widest overflow-x-auto">
            <Link href="/demos/salon-2/services">SERVICES</Link>
            <Link href="/demos/salon-2/team">TEAM</Link>
            <Link href="/demos/salon-2/garden">GARDEN</Link>
            <Link href="/demos/salon-2/booking">BOOK</Link>
          </nav>
        </div>
      </header>

      <div>{children}</div>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-serif font-bold">BLOOM</div>
            <div className="text-xs tracking-[0.2em] text-zinc-500">SOHO • NEW YORK</div>
            <p className="text-xs text-zinc-600 mt-3">Boutique spa in SoHo. SoHo calm, 60 min quiet. English + Spanish. Book at midnight.</p>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">EXPLORE</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/demos/salon-2/services" className="hover:underline">Services</Link></li>
              <li><Link href="/demos/salon-2/team" className="hover:underline">Therapists</Link></li>
              <li><Link href="/demos/salon-2/garden" className="hover:underline">Garden</Link></li>
              <li><Link href="/demos/salon-2/reviews" className="hover:underline">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">VISIT</div>
            <ul className="mt-3 space-y-1 text-xs text-zinc-600">
              <li>SoHo, New York • 10am–8pm</li>
              <li>English + Spanish</li>
              <li><a href="https://wa.me/919999999999" className="underline">WhatsApp 30s</a></li>
            </ul>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl p-5">
            <div className="font-serif font-bold">NYC calm. Book in one tap.</div>
            <div className="text-xs text-zinc-400 mt-1">Hot oils, calm. 210 reviews, 4.8 ★.</div>
            <Link href="/demos/salon-2/booking" className="mt-3 inline-flex justify-center w-full px-4 py-2 bg-white text-zinc-900 font-bold rounded-full text-sm">Book on WhatsApp →</Link>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-500 py-4 border-t">Demo by Erowan — your spa in 48h.</div>
      </footer>
    </div>
  );
}
