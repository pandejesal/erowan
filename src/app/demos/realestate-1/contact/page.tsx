export const metadata = { title: "Contact — Dubai Hills | Vista Homes", description: "Dubai Hills map, WhatsApp brochure.", alternates:{canonical:"https://erowan.com/demos/realestate-1/contact"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Contact — Dubai Hills</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6">
          <div className="font-bold">Visit — Dubai Hills</div>
          <div className="mt-3 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — Dubai Hills • RERA</div>
          <div className="mt-3 text-sm space-y-1"><div>Phone: +919999999999 (WhatsApp)</div><div>Email: hello@vistahomes.ae</div><div>RERA #12345</div></div>
        </div>
        <div className="bg-zinc-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div><div className="font-serif text-xl font-bold">Get brochure</div><div className="text-sm text-zinc-400 mt-1">WhatsApp in 30s, RERA.</div></div>
          <a href="https://wa.me/919999999999" className="mt-4 inline-flex justify-center px-6 py-3 bg-white text-zinc-900 font-bold rounded-full">WhatsApp →</a>
        </div>
      </div>
    </div>
  );
}
