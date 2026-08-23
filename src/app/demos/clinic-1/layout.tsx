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
          <Link href="/demos/clinic-1" className="font-serif font-bold">SMILECARE <span className="font-normal text-zinc-500">• DHCC</span></Link>
          <nav className="hidden lg:flex gap-5 text-xs tracking-widest font-medium">
            <Link href="/demos/clinic-1/treatments" className="hover:underline">TREATMENTS</Link>
            <Link href="/demos/clinic-1/doctors" className="hover:underline">DOCTORS</Link>
            <Link href="/demos/clinic-1/about" className="hover:underline">ABOUT</Link>
            <Link href="/demos/clinic-1/contact" className="hover:underline">CONTACT</Link>
            <Link href="/demos/clinic-1/reviews" className="hover:underline">REVIEWS</Link>
            <Link href="/demos/clinic-1/blog" className="hover:underline">BLOG</Link>
          </nav>
          <Link href="/demos/clinic-1/booking" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">APPOINTMENT — AED 150</Link>
        </div>
        <div className="lg:hidden border-t border-zinc-100">
          <nav className="mx-auto max-w-7xl px-6 py-2 flex gap-4 text-xs tracking-widest overflow-x-auto">
            <Link href="/demos/clinic-1/treatments">TREATMENTS</Link>
            <Link href="/demos/clinic-1/doctors">DOCTORS</Link>
            <Link href="/demos/clinic-1/booking">BOOK</Link>
          </nav>
        </div>
      </header>

      <div>{children}</div>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-serif font-bold">SMILECARE</div>
            <div className="text-xs tracking-widest text-zinc-500">DHCC • DHA LICENSED</div>
            <p className="text-xs text-zinc-600 mt-2">Trust before the chair. DHA-licensed, 12 yrs DHCC, insurance Daman/AXA.</p>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">TREATMENTS</div>
            <ul className="mt-3 space-y-1 text-sm">
              <li><Link href="/demos/clinic-1/treatments/implant" className="hover:underline">Implant</Link></li>
              <li><Link href="/demos/clinic-1/treatments/braces" className="hover:underline">Braces</Link></li>
              <li><Link href="/demos/clinic-1/treatments/whitening" className="hover:underline">Whitening</Link></li>
              <li><Link href="/demos/clinic-1/treatments/pediatric" className="hover:underline">Pediatric</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-xs tracking-widest">VISIT</div>
            <ul className="mt-3 space-y-1 text-xs text-zinc-600">
              <li>DHCC, Dubai • Sat–Thu 9am–7pm</li>
              <li>Parking validated • Metro</li>
              <li><a href="https://wa.me/919999999999" className="underline">WhatsApp appointment</a></li>
            </ul>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl p-5">
            <div className="font-bold">Request appointment</div>
            <div className="text-xs text-zinc-400 mt-1">DHA-licensed, WhatsApp in 30s.</div>
            <Link href="/demos/clinic-1/booking" className="mt-3 inline-flex w-full justify-center px-4 py-2 bg-white text-zinc-900 font-bold rounded-full text-sm">Book → AED 150</Link>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-500 py-4 border-t">Demo by Erowan — your clinic in 48h.</div>
      </footer>
    </div>
  );
}
