export default function Pricing() {
  return (
    <div className="border border-[var(--line)] bg-white brutal-sm p-6">
      <div className="flex items-baseline justify-between">
        <div className="text-sm font-black tracking-tight" style={{fontFamily:"var(--font-display)"}}>PRICING — WORLDWIDE, NO SUBSCRIPTION</div>
        <span className="text-xs font-mono text-[var(--muted)]">WISE / PAYPAL / CARD</span>
      </div>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="border border-[var(--line)] p-5 bg-[var(--paper-2)]">
          <div className="text-[10px] tracking-[0.18em] font-mono text-[var(--muted)]">BASE</div>
          <div className="mt-1 text-2xl font-black">$250 <span className="text-xs font-mono font-normal text-[var(--muted)]">~920 AED • ~€230</span></div>
          <div className="mt-2 text-xs font-mono text-zinc-600">5 pages, English worldwide, 48h, mobile. No Arabic needed.</div>
          <div className="mt-3 text-xs font-mono">✓ Vercel host or your domain</div>
        </div>
        <div className="border border-[var(--line)] p-5 bg-[var(--ink)] text-white">
          <div className="text-[10px] tracking-[0.18em] font-mono text-zinc-400">MOST POPULAR • +$150</div>
          <div className="mt-1 text-2xl font-black">$400 <span className="text-xs font-mono font-normal text-zinc-400">~1,470 AED</span></div>
          <div className="mt-2 text-xs font-mono text-zinc-300">Base + booking / ordering / listings + WhatsApp.</div>
          <div className="mt-3 text-xs font-mono text-[var(--accent-2)]">★ 48H + 1 tweak round</div>
        </div>
        <div className="border border-dashed border-[var(--line)] p-5 bg-white">
          <div className="text-[10px] tracking-[0.18em] font-mono text-[var(--muted)]">CUSTOM</div>
          <div className="mt-1 text-2xl font-black">QUOTE</div>
          <div className="mt-2 text-xs font-mono text-zinc-600">Multi-branch, Stripe, CSV import. Worldwide.</div>
          <div className="mt-3 text-xs font-mono">→ WhatsApp for quote</div>
        </div>
      </div>
      <div className="mt-3 text-xs font-mono text-[var(--muted)]">Pay via Wise (lowest fee) / PayPal / card link. Transparent remote — Ahmedabad → Worldwide.</div>
    </div>
  );
}
