export const metadata = { title: "FAQ — Craft Brooklyn", description: "Shipping, returns, wholesale.", alternates:{canonical:"https://erowan.com/demos/other-2/faq"} };
const faqs=[
  {q:"How long to ship?",a:"3 days worldwide from Brooklyn. US $8, intl $18. TRACKED."},
  {q:"Returns?",a:"30 days, unused. Email hello@craft-brooklyn.demo."},
  {q:"Wholesale?",a:"MOQ 12. Email wholesale@craft-brooklyn.demo — 48h reply."},
  {q:"Care?",a:"Ceramics dishwasher safe. Textiles cold wash. Wood oil yearly."},
];
export default function Page(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">FAQ — Craft</h1>
      <div className="mt-6 space-y-3">
        {faqs.map(f=>(
          <div key={f.q} className="bg-white border rounded-2xl p-5"><div className="font-bold text-sm">{f.q}</div><div className="text-sm text-zinc-600 mt-1">{f.a}</div></div>
        ))}
      </div>
    </div>
  );
}
