export const metadata = { title: "Legal — Harbor Realty MLS", description: "MLS, no portal fees.", alternates:{canonical:"https://erowan.com/demos/realestate-2/legal"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Legal</h1>
      <div className="mt-6 bg-white border rounded-2xl p-6"><div className="font-bold">MLS</div><p className="text-sm text-zinc-600 mt-2">MLS #12345, Brickell. Demo by Erowan.</p></div>
      <div className="mt-4 bg-white border rounded-2xl p-6"><div className="font-bold">Privacy</div><p className="text-sm text-zinc-600 mt-2">Leads via WhatsApp, no portal.</p></div>
    </div>
  );
}
