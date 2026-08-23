export const metadata = {
  title: "Contact — Mitte U6 | Al Noor Berlin",
  description: "Mitte U6, GDPR safe, no data stored, WhatsApp booking.",
  alternates: { canonical: "https://erowan.com/demos/clinic-2/contact" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Contact — Mitte</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6">
          <div className="font-bold">Visit — Mitte, Berlin</div>
          <div className="mt-3 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — Mitte • U6 • 10 yrs • GDPR safe</div>
          <div className="mt-3 text-sm space-y-1">
            <div>Mon–Fri 9am–6pm • Sat 10am–2pm</div>
            <div>Phone: +919999999999 (WhatsApp)</div>
            <div>Email: hello@alnoor-berlin.de</div>
          </div>
        </div>
        <div className="bg-white border rounded-2xl p-6">
          <div className="font-bold">GDPR Notice</div>
          <p className="text-sm text-zinc-600 mt-2">No data stored. WhatsApp only. Ask DPO via WhatsApp. Delete on request.</p>
          <div className="mt-4 bg-zinc-50 border rounded-xl p-4 text-sm">
            <div className="font-bold">Same day lab?</div>
            <p className="text-xs text-zinc-600 mt-1">Lab tests same day via WhatsApp. Easy.</p>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-zinc-900 text-white rounded-2xl p-6 flex justify-between items-center">
        <div><div className="font-bold">WhatsApp booking</div><div className="text-sm text-zinc-400">GDPR safe, no storage</div></div>
        <a href="https://wa.me/919999999999" className="px-6 py-3 bg-white text-zinc-900 rounded-full font-bold">WhatsApp →</a>
      </div>
    </div>
  );
}
