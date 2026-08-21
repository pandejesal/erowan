export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">Erowan</div>
          <p className="mt-2 text-zinc-600 leading-relaxed">
            India-based (Ahmedabad, IST UTC+5:30), serving clients worldwide — from Dubai & London to New York & Singapore. Transparent remote — same quality, 48-hour delivery, worldwide support.
          </p>
          <p className="mt-3 text-xs text-zinc-500">
            Base $250 (~920 AED) + $150 for booking/ordering/listings. No hidden fees.
          </p>
        </div>
        <div>
          <div className="font-medium">Niche pages</div>
          <ul className="mt-2 space-y-1 text-zinc-600">
            <li><a href="/salons" className="hover:text-zinc-900">/salons — Salons & Spas</a></li>
            <li><a href="/restaurants" className="hover:text-zinc-900">/restaurants — Cafes</a></li>
            <li><a href="/clinics" className="hover:text-zinc-900">/clinics — Clinics</a></li>
            <li><a href="/real-estate" className="hover:text-zinc-900">/real-estate — Real Estate</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Get in touch</div>
          <ul className="mt-2 space-y-1 text-zinc-600">
            <li>WhatsApp: <a href="https://wa.me/919999999999" className="underline">+91 99999 99999</a></li>
            <li>Email: <a href="mailto:hello@erowan.com" className="underline">hello@erowan.com</a></li>
            <li><a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="underline">Book 15-min call</a></li>
          </ul>
          <p className="mt-3 text-xs text-zinc-500">
            Demos are concept demos, labeled honestly — not fake clients. 3 real client sites on homepage.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-6 text-xs text-zinc-500">
        © {new Date().getFullYear()} Erowan. 48-hour delivery promise for base sites.
      </div>
    </footer>
  );
}
