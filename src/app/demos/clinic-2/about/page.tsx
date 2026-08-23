export const metadata = {
  title: "About — Mitte 10 yrs GDPR Safe | Al Noor Berlin",
  description: "Mitte 10 yrs, German + expat, U6, no data stored, GDPR safe.",
  alternates: { canonical: "https://erowan.com/demos/clinic-2/about" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">About — GDPR Safe</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm leading-6 text-zinc-700">Al Noor Mitte 10 yrs: German + expat GP, dental, pediatric, lab. No data stored — WhatsApp only. GDPR safe, Mitte U6, thorough no rush.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-zinc-900 text-white p-3"><div className="font-bold">10 yrs</div><div className="text-xs">Mitte</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">6k+</div><div className="text-xs">Patients</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">4.8 ★</div><div className="text-xs">180 reviews</div></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white border rounded-2xl p-6"><div className="font-bold">GDPR</div><p className="text-sm text-zinc-600 mt-1">No storage, WhatsApp only, delete on request, DPO on request.</p></div>
          <div className="bg-white border rounded-2xl p-6"><div className="font-bold">Expat Care</div><p className="text-sm text-zinc-600 mt-1">DE + EN + AR. Tell at booking, we match language.</p></div>
        </div>
      </div>
    </div>
  );
}
