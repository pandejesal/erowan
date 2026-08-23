export const metadata = {
  title: "About — EST. 2019 | Noura Salon Dubai Marina",
  description: "Ladies-only since 2019. Premium care, hygiene, awards. Marina Walk, next to Spinneys.",
  alternates: { canonical: "https://erowan.com/demos/salon-1/about" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Our Story — EST. 2019</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm leading-6 text-zinc-700">Noura began as ladies-only for busy Dubai women who wanted after-hours booking without calls. Marina Walk, next to Spinneys, 10am–10pm, free parking validation. 6 stylists, 312 reviews, 4.9 ★. Hygiene is premium: single-use tools, private hammam with Huda, no rush.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-zinc-900 text-white p-3"><div className="font-bold">312</div><div className="text-xs">Reviews</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">6</div><div className="text-xs">Stylists</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">2019</div><div className="text-xs">Since</div></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white border rounded-2xl p-6">
            <div className="font-bold">Hygiene & Privacy</div>
            <ul className="mt-2 text-sm text-zinc-700 space-y-1">
              <li>✓ Ladies-only, private hammam suite</li>
              <li>✓ Single-use tools, sterilized</li>
              <li>✓ No photos published without consent</li>
            </ul>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <div className="font-bold">Awards</div>
            <p className="text-sm text-zinc-600 mt-1">Best Dubai Marina Salon 2025 (Time Out nominee), 4.9 ★ Google.</p>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <div className="font-bold">Careers</div>
            <p className="text-sm text-zinc-600 mt-1">Senior stylist opening — 5+ yrs, Dubai. WhatsApp portfolio.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-zinc-50 border rounded-2xl p-6">
        <div className="font-bold">Visit — Marina Walk</div>
        <div className="mt-2 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — next to Spinneys • Open 10am–10pm • Ladies-only</div>
      </div>
    </div>
  );
}
