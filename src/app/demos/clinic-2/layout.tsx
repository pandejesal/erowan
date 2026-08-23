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
          <Link href="/demos/clinic-2" className="font-serif font-bold">AL NOOR <span className="font-normal text-zinc-500">• BERLIN</span></Link>
          <nav className="hidden lg:flex gap-5 text-xs tracking-widest font-medium">
            <Link href="/demos/clinic-2/services" className="hover:underline">SERVICES</Link>
            <Link href="/demos/clinic-2/doctors" className="hover:underline">DOCTORS</Link>
            <Link href="/demos/clinic-2/about" className="hover:underline">ABOUT</Link>
            <Link href="/demos/clinic-2/contact" className="hover:underline">CONTACT</Link>
            <Link href="/demos/clinic-2/blog" className="hover:underline">BLOG</Link>
          </nav>
          <Link href="/demos/clinic-2/booking" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">BOOK — €45</Link>
        </div>
        <div className="lg:hidden border-t border-zinc-100">
          <nav className="mx-auto max-w-7xl px-6 py-2 flex gap-4 text-xs tracking-widest overflow-x-auto">
            <Link href="/demos/clinic-2/services">SERVICES</Link>
            <Link href="/demos/clinic-2/doctors">DOCTORS</Link>
            <Link href="/demos/clinic-2/booking">BOOK</Link>
          </nav>
        </div>
      </header>

      <div>{children}</div>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-serif font-bold">AL NOOR</div>
            <div className="text-xs tracking-widest text-zinc-500">BERLIN • GDPR SAFE</div>
            <p className="text-xs text-zinc-600 mt-2">German + expat care. No data stored, WhatsApp only. Mitte 10 yrs, U6.</p>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">SERVICES</div>
            <ul className="mt-3 space-y-1 text-sm">
              <li><Link href="/demos/clinic-2/services/gp-visit" className="hover:underline">GP Visit €45</Link></li>
              <li><Link href="/demos/clinic-2/services/lab-tests" className="hover:underline">Lab Tests €60</Link></li>
              <li><Link href="/demos/clinic-2/services/pediatric" className="hover:underline">Pediatric €50</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">VISIT</div>
            <ul className="mt-3 space-y-1 text-xs text-zinc-600">
              <li>Mitte, Berlin • U6</li>
              <li>GDPR safe • No storage</li>
              <li><a href="https://wa.me/919999999999" className="underline">WhatsApp booking</a></li>
            </ul>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl p-5">
            <div className="font-bold">Book consultation</div>
            <div className="text-xs text-zinc-400 mt-1">German + expat, WhatsApp 30s.</div>
            <Link href="/demos/clinic-2/booking" className="mt-3 inline-flex w-full justify-center px-4 py-2 bg-white text-zinc-900 font-bold rounded-full text-sm">Book → €45</Link>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-500 py-4 border-t">Demo by Erowan — your clinic in 48h. No data stored.</div>
      </footer>
    </div>
  );
}
