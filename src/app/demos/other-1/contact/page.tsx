export const metadata = { title: "Contact — North Consulting Shoreditch", description: "Shoreditch High St, London. 9am-6pm. Book a call.", alternates:{canonical:"https://erowan.com/demos/other-1/contact"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Contact — North</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6"><div className="font-bold">Shoreditch, London</div><div className="text-sm text-zinc-600">High St, E1 • 9am–6pm Mon–Fri</div><div className="mt-3 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — Shoreditch High St • E1 6PG • 51.5255,-0.075</div><div className="mt-3 text-sm">hello@north-consulting.demo • +44 20 7946 0958</div></div>
        <div className="bg-[#0F1A2E] text-white rounded-2xl p-6"><div className="font-serif text-xl font-bold">Book a free 20-min call</div><div className="text-sm text-zinc-300 mt-1">Worldwide, 48h site. No pitch.</div><a href="https://wa.me/919999999999?text=Hi%20North%20—%20free%2020-min%20call" className="mt-4 inline-flex px-6 py-3 bg-white text-[#0F1A2E] font-bold rounded-full">WhatsApp →</a></div>
      </div>
    </div>
  );
}
