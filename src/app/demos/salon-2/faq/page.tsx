import { faqs } from "@/lib/mocks/salon2";

export const metadata = {
  title: "FAQ — Bloom Spa SoHo",
  description: "English + Spanish? Garden photos? 8 FAQs for Bloom SoHo.",
  alternates: { canonical: "https://erowan.com/demos/salon-2/faq" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">FAQ</h1>
      <p className="text-sm text-zinc-600 mt-2">SoHo calm, 30 seconds on WhatsApp.</p>
      <div className="mt-6 space-y-3">
        {faqs.map((f,i)=>(
          <details key={i} className="bg-white border rounded-2xl p-5 open:shadow-sm" open={i===0}>
            <summary className="font-bold cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-sm text-zinc-700 leading-6">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 bg-zinc-50 border rounded-2xl p-5">
        <div className="font-bold text-sm">Legal</div>
        <p className="text-xs text-zinc-600 mt-2">No cookies, WhatsApp data via Meta, garden photos with consent. Demo by Erowan — your spa in 48h.</p>
      </div>
    </div>
  );
}
