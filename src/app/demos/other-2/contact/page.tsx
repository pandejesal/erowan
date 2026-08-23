export const metadata = { title: "Contact — Craft Brooklyn 63 Flushing Ave", description: "Navy Yard 63 Flushing Ave, Brooklyn. 10am-6pm. Wholesale.", alternates:{canonical:"https://erowan.com/demos/other-2/contact"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Contact — Craft</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6"><div className="font-bold">63 Flushing Ave, Navy Yard</div><div className="text-sm text-zinc-600">Brooklyn, NY 11205 • 10am–6pm Mon–Sat</div><div className="mt-3 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — 63 Flushing Ave • 40.701,-73.975 • Navy Yard</div><div className="mt-3 text-sm">hello@craft-brooklyn.demo • wholesale@craft-brooklyn.demo</div></div>
        <div className="bg-zinc-900 text-white rounded-2xl p-6"><div className="font-serif text-xl font-bold">Wholesale? Visit?</div><div className="text-sm text-zinc-300 mt-1">MOQ 12. 48h reply.</div><a href="https://wa.me/919999999999?text=Hi%20Craft%20—%20wholesale%2Fvisit%20Navy%20Yard" className="mt-4 inline-flex px-6 py-3 bg-white text-zinc-900 font-bold rounded-full">WhatsApp →</a></div>
      </div>
    </div>
  );
}
