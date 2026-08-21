export default function Footer() {
  return (
    <footer id="contact" className="border-t-[1.5px] border-[var(--line)] bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-black tracking-tight" style={{fontFamily:"var(--font-display)"}}>EROWAN</div>
          <p className="mt-2 text-zinc-300 leading-relaxed text-xs font-mono" style={{fontFamily:"var(--font-mono)"}}>
            Ahmedabad (IST) → Worldwide. India-based, serving clients from Dubai to New York. Transparent remote — 48-hour delivery.
          </p>
          <p className="mt-3 text-xs text-zinc-400 font-mono">Base $250 (~920 AED) + $150 booking. No hidden fees.</p>
        </div>
        <div>
          <div className="text-xs tracking-[0.18em] text-zinc-400 font-mono">NICHES</div>
          <ul className="mt-2 space-y-1 text-zinc-300 font-mono text-xs">
            <li><a href="/salons" className="hover:text-white hover:underline">/salons — Salons & Spas →</a></li>
            <li><a href="/restaurants" className="hover:text-white hover:underline">/restaurants — Cafes →</a></li>
            <li><a href="/clinics" className="hover:text-white hover:underline">/clinics — Clinics →</a></li>
            <li><a href="/real-estate" className="hover:text-white hover:underline">/real-estate — Real Estate →</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.18em] text-zinc-400 font-mono">CONTACT</div>
          <ul className="mt-2 space-y-1 text-zinc-300 text-xs font-mono">
            <li>WA: <a href="https://wa.me/919999999999" className="underline hover:text-white">+91 99999 99999</a></li>
            <li>Email: <a href="mailto:hello@erowan.com" className="underline hover:text-white">hello@erowan.com</a></li>
            <li><a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Book 15-min call →</a></li>
          </ul>
          <p className="mt-3 text-xs text-zinc-500">Demos are concept demos, labeled honestly.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-6 text-xs text-zinc-500 font-mono flex justify-between">
        <span>© {new Date().getFullYear()} EROWAN. 48H PROMISE.</span>
        <span className="hidden sm:inline">BUILT WITH SHADCN + TAILWIND • WORLDWIDE</span>
      </div>
    </footer>
  );
}
