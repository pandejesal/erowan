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
          <Link href="/demos/restaurant-2" className="font-serif font-bold">AL HADI <span className="font-normal text-zinc-500">GRILL • SOHO</span></Link>
          <nav className="hidden lg:flex gap-5 text-xs tracking-widest font-medium">
            <Link href="/demos/restaurant-2/menu" className="hover:underline">MENU</Link>
            <Link href="/demos/restaurant-2/chefs" className="hover:underline">CHEFS</Link>
            <Link href="/demos/restaurant-2/gallery" className="hover:underline">GALLERY</Link>
            <Link href="/demos/restaurant-2/about" className="hover:underline">ABOUT</Link>
            <Link href="/demos/restaurant-2/contact" className="hover:underline">CONTACT</Link>
            <Link href="/demos/restaurant-2/blog" className="hover:underline">JOURNAL</Link>
          </nav>
          <div className="flex gap-2">
            <Link href="/demos/restaurant-2/order" className="px-3 py-2 rounded-full border text-xs font-bold bg-white">ORDER</Link>
            <Link href="/demos/restaurant-2/reserve" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">RESERVE — SOHO</Link>
          </div>
        </div>
        <div className="lg:hidden border-t border-zinc-100">
          <nav className="mx-auto max-w-7xl px-6 py-2 flex gap-4 text-xs tracking-widest overflow-x-auto">
            <Link href="/demos/restaurant-2/menu">MENU</Link>
            <Link href="/demos/restaurant-2/reserve">RESERVE</Link>
            <Link href="/demos/restaurant-2/order">ORDER</Link>
          </nav>
        </div>
      </header>

      <div>{children}</div>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-serif font-bold">AL HADI GRILL</div>
            <div className="text-xs tracking-widest text-zinc-500">SOHO • HALAL • CHARCOAL</div>
            <p className="text-xs text-zinc-600 mt-2">London grill, charcoal, halal. Soho lunch to late night.</p>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">MENU</div>
            <ul className="mt-3 space-y-1 text-sm">
              <li><Link href="/demos/restaurant-2/menu/mixed-grill-platter" className="hover:underline">Mixed Grill £22</Link></li>
              <li><Link href="/demos/restaurant-2/menu/shish-tawook" className="hover:underline">Shish Tawook £12</Link></li>
              <li><Link href="/demos/restaurant-2/menu/family-feast" className="hover:underline">Family Feast £45</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">VISIT</div>
            <ul className="mt-3 space-y-1 text-xs text-zinc-600">
              <li>Soho, London • 12pm–11pm</li>
              <li>Halal • Charcoal</li>
              <li><a href="https://wa.me/919999999999" className="underline">Order WhatsApp</a></li>
            </ul>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl p-5">
            <div className="font-bold">Reserve — Soho</div>
            <div className="text-xs text-zinc-400 mt-1">Halal grill, charcoal.</div>
            <Link href="/demos/restaurant-2/reserve" className="mt-3 inline-flex w-full justify-center px-4 py-2 bg-white text-zinc-900 font-bold rounded-full text-sm">Reserve →</Link>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-500 py-4 border-t">Demo by Erowan — your restaurant in 48h. Halal.</div>
      </footer>
    </div>
  );
}
