import Link from "next/link";
export default function Layout({children}:{children:React.ReactNode}){
  return (
    <div className="min-h-screen bg-[#FFFCF8] text-zinc-900">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between text-xs"><span>Demo — Craft Shop Brooklyn</span><Link href="/" className="underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
          <Link href="/demos/other-2" className="font-serif font-bold tracking-wide">CRAFT <span className="font-normal text-zinc-500">SHOP • BROOKLYN • SINCE 2018</span></Link>
          <nav className="hidden md:flex gap-4 text-xs">
            <Link href="/demos/other-2/products" className="hover:underline">Products</Link>
            <Link href="/demos/other-2/collections" className="hover:underline">Collections</Link>
            <Link href="/demos/other-2/story" className="hover:underline">Story</Link>
            <Link href="/demos/other-2/stockists" className="hover:underline">Stockists</Link>
            <Link href="/demos/other-2/contact" className="hover:underline">Contact</Link>
          </nav>
          <Link href="/demos/other-2/cart" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">Cart • $28</Link>
        </div>
      </header>
      {children}
      <footer className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center border-t">Craft Shop — Navy Yard, Brooklyn • Since 2018 • Concept demo by Erowan</footer>
    </div>
  );
}
