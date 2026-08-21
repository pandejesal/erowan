export default function Pricing() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="text-sm font-semibold">Pricing — Gulf friendly</div>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-zinc-900 text-white p-5">
          <div className="text-xs text-zinc-400">BASE</div>
          <div className="mt-1 text-2xl font-bold">$250 <span className="text-sm font-normal text-zinc-400">~920 AED</span></div>
          <div className="mt-2 text-sm text-zinc-300">5-page site, mobile, Arabic toggle, 48h delivery</div>
        </div>
        <div className="rounded-xl border border-zinc-200 p-5">
          <div className="text-xs text-zinc-500">ADD BOOKING / ORDERING / LISTINGS</div>
          <div className="mt-1 text-2xl font-bold">+ $150</div>
          <div className="mt-2 text-sm text-zinc-600">Salon booking, restaurant ordering, clinic appointments, real estate filters</div>
        </div>
        <div className="rounded-xl border border-dashed border-zinc-300 p-5">
          <div className="text-xs text-zinc-500">TOTAL</div>
          <div className="mt-1 text-2xl font-bold">$250–$400</div>
          <div className="mt-2 text-sm text-zinc-600">Most Gulf SMBs launch at $250–$400. No monthly trap.</div>
        </div>
      </div>
      <div className="mt-3 text-xs text-zinc-500">Pay via Wise / PayPal / card link. Transparent remote — Ahmedabad → Gulf.</div>
    </div>
  );
}
