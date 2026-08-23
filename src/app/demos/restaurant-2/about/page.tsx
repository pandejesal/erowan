export const metadata = {
  title: "About — Al Hadi Grill Soho • No Commission",
  description: "Tap to order beats PDFs. Soho mornings to late nights, no Talabat fees.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-1/about" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">About — Halal charcoal</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm leading-6 text-zinc-700">Al Hadi Grill Soho: brunch to late night. We built tap-to-order because PDFs kill orders. WhatsApp checkout beats Talabat fees. 1.2k orders/mo, 15 min avg prep, daily reels that sell.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-zinc-900 text-white p-3"><div className="font-bold">1.2k</div><div className="text-xs">Orders/mo</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">15 min</div><div className="text-xs">Avg prep</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">4.7 ★</div><div className="text-xs">312 reviews</div></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white border rounded-2xl p-6"><div className="font-bold">Why not Talabat?</div><p className="text-sm text-zinc-600 mt-1">30% fees vs WhatsApp 0%. Mira’s site is top channel now.</p></div>
          <div className="bg-white border rounded-2xl p-6"><div className="font-bold">Daily reels</div><p className="text-sm text-zinc-600 mt-1">15-sec reels, brunch for 2, link to menu. Soho mornings.</p></div>
        </div>
      </div>
    </div>
  );
}
