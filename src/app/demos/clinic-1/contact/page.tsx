export const metadata = {
  title: "Contact — DHCC Dubai | SmileCare Dental",
  description: "DHCC map, insurance Daman/AXA, parking validated, WhatsApp appointment.",
  alternates: { canonical: "https://erowan.com/demos/clinic-1/contact" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Contact — DHCC</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6">
          <div className="font-bold">Visit — DHCC, Dubai</div>
          <div className="mt-3 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — DHCC • Parking validated • Metro Al Khail</div>
          <div className="mt-3 text-sm space-y-1">
            <div>Sat–Thu 9am–7pm • Fri closed</div>
            <div>Phone: +919999999999 (WhatsApp)</div>
            <div>Email: hello@smilecare-dhcc.ae</div>
          </div>
        </div>
        <div className="bg-white border rounded-2xl p-6">
          <div className="font-bold">Insurance — We accept</div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            {["Daman","AXA","MedNet","NextCare","Saada","Oman Insurance"].map(i=>(
              <div key={i} className="border rounded-xl px-3 py-2 bg-zinc-50">{i}</div>
            ))}
          </div>
          <div className="text-xs text-zinc-500 mt-3">WhatsApp your card for pre-check in 30s.</div>
          <div className="mt-4">
            <div className="font-bold text-sm">Parking / Transit</div>
            <p className="text-sm text-zinc-600 mt-1">DHCC parking validated, metro near, RTA bus 13.</p>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-zinc-900 text-white rounded-2xl p-6 flex justify-between items-center">
        <div><div className="font-bold">Need pre-check?</div><div className="text-sm text-zinc-400">Send card on WhatsApp → 30s</div></div>
        <a href="https://wa.me/919999999999" className="px-6 py-3 bg-white text-zinc-900 rounded-full font-bold">WhatsApp →</a>
      </div>
    </div>
  );
}
