import type { Metadata } from "next";
import { Suspense } from "react";
import PayPrefill from "./PayPrefill";

export const metadata: Metadata = {
  title: "Pay — Erowan $250 base | Wise / PayPal / Card",
  description: "Pay for your worldwide website. Wise (USD/AED/EUR), PayPal Business, or card link. 48h delivery, transparent remote.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      <Suspense fallback={null}><PayPrefill /></Suspense>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pay & Book</h1>
        <p className="mt-2 text-zinc-600">Ahmedabad → Worldwide. Pick your tier, pay via Wise/PayPal/card, we ship in 48h. Invoice within 1 hour.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <div className="text-xs uppercase tracking-widest text-zinc-500">BASE</div>
          <div className="mt-1 text-2xl font-bold">$250 <span className="text-sm font-normal text-zinc-500">~920 AED</span></div>
          <ul className="mt-3 text-sm text-zinc-700 space-y-1 list-disc list-inside">
            <li>5 pages, English + Arabic toggle</li>
            <li>Mobile-first, SEO basics</li>
            <li>48-hour delivery</li>
            <li>Vercel free host or your domain</li>
          </ul>
          <a href="#pay" className="mt-4 inline-flex px-4 py-2 rounded-full bg-zinc-900 text-white text-sm w-full justify-center">Pay $250 Base</a>
        </div>
        <div className="rounded-2xl border border-zinc-900 p-5 bg-zinc-900 text-white">
          <div className="text-xs uppercase tracking-widest text-zinc-400">MOST POPULAR</div>
          <div className="mt-1 text-2xl font-bold">$400 <span className="text-sm font-normal text-zinc-400">~1,470 AED</span></div>
          <ul className="mt-3 text-sm text-zinc-300 space-y-1 list-disc list-inside">
            <li>Everything in Base +</li>
            <li>Booking / Ordering / Listings</li>
            <li>WhatsApp automation</li>
            <li>1 round tweaks included</li>
          </ul>
          <a href="#pay" className="mt-4 inline-flex px-4 py-2 rounded-full bg-white text-zinc-900 text-sm w-full justify-center font-medium">Pay $400 Full</a>
        </div>
        <div className="rounded-2xl border border-dashed border-zinc-300 p-5 bg-white">
          <div className="text-xs uppercase tracking-widest text-zinc-500">CUSTOM</div>
          <div className="mt-1 text-2xl font-bold">Quote</div>
          <ul className="mt-3 text-sm text-zinc-700 space-y-1 list-disc list-inside">
            <li>Multi-branch / multi-lang</li>
            <li>Payment gateway (Stripe)</li>
            <li>CSV listings import</li>
          </ul>
          <a href="https://wa.me/919999999999?text=Hi%20Erowan%20-%20need%20custom%20quote%20for%20my%20worldwide%20site" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex px-4 py-2 rounded-full border border-zinc-300 text-sm w-full justify-center">WhatsApp Quote</a>
        </div>
      </div>

      <div id="pay" className="rounded-2xl border border-zinc-200 p-6 bg-white space-y-4">
        <h2 className="font-semibold">How to pay (Worldwide — USD/AED/EUR)</h2>
        <div className="grid md:grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <div className="font-medium">Wise Business — Recommended</div>
            <div className="text-zinc-600 mt-1">Lowest fees, USD/AED/EUR → INR. Send to <code className="bg-white px-1 py-0.5 rounded border">erowan@wise.com</code> (replace). Add business name in note.</div>
            <a href="https://wise.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs underline">Create Wise Business (India) →</a>
          </div>
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
            <div className="font-medium">PayPal Business</div>
            <div className="text-zinc-600 mt-1">Trusted worldwide, higher fees (~4.4%). PayPal.Me: <code className="bg-white px-1 py-0.5 rounded border">paypal.me/erowan</code> (replace). Invoice in $ / AED / €.</div>
            <a href="https://paypal.com/business" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs underline">Setup PayPal Business →</a>
          </div>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <div className="font-medium">Card Link</div>
            <div className="text-zinc-600 mt-1">Stripe Payment Link or Razorpay International — we send link after 15-min call. 24h hold.</div>
            <a href="https://wa.me/919999999999?text=Need%20card%20link%20for%20$400" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs underline">Request card link</a>
          </div>
        </div>
        <div className="text-xs text-zinc-500">No SWIFT wire — slow + fees. Wise/PayPal settles in hours. We invoice from Ahmedabad, GST inclusive.</div>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-6 bg-white">
        <h2 className="font-semibold">Book 15-min call — Worldwide hours</h2>
        <p className="text-sm text-zinc-600">We cover worldwide — IST evenings = Gulf afternoons, EU midday, US mornings via async. Pick a slot, bot replies instantly, human within 6h.</p>
        <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 aspect-[16/9] grid place-items-center text-sm text-zinc-500">
          Calendly embed placeholder — replace with: <code className="bg-white px-1 py-0.5 rounded border">&lt;iframe src=&quot;https://calendly.com/YOUR_LINK&quot; /&gt;</code>
          <div className="mt-2 text-xs">Or WhatsApp now: <a href="https://wa.me/919999999999" className="underline">+91 99999 99999</a> • hello@erowan.com</div>
        </div>
        <div className="mt-3 flex gap-2">
          <a href="https://wa.me/919999999999?text=Hi%20Erowan%20-%20book%2015-min%20call%20for%20worldwide%20site" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm">WhatsApp to book</a>
          <a href="mailto:hello@erowan.com?subject=Book%20call%20-%20worldwide%20site" className="px-4 py-2 rounded-full border border-zinc-300 text-sm">Email us</a>
        </div>
      </div>

      <div className="rounded-xl border border-dashed border-zinc-300 p-4 text-xs text-zinc-600">
        <strong>Handoff:</strong> Bot sends demo link + Calendly instantly → human replies same IST evening. If you paid before call, we start build same night and deliver live link in 48h. Refund if not shipped.
      </div>
    </div>
  );
}
