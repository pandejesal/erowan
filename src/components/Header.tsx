import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 text-white grid place-items-center font-bold text-sm">
            E
          </div>
          <span className="font-semibold tracking-tight">Erowan</span>
          <span className="hidden sm:inline text-xs text-zinc-500 ml-1">
            Worldwide • 48h
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link href="/salons" className="hover:text-zinc-900 text-zinc-600">
            Salons
          </Link>
          <Link href="/restaurants" className="hover:text-zinc-900 text-zinc-600">
            Restaurants
          </Link>
          <Link href="/clinics" className="hover:text-zinc-900 text-zinc-600">
            Clinics
          </Link>
          <Link href="/real-estate" className="hover:text-zinc-900 text-zinc-600">
            Real Estate
          </Link>
          <Link href="/crm" className="hover:text-zinc-900 text-zinc-900 font-medium border-l border-zinc-200 pl-5">
            CRM
          </Link>
          <Link href="/pay" className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-sm">Pay / Book</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm px-3 py-1.5 rounded-full border border-zinc-300 hover:bg-zinc-50"
          >
            WhatsApp
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
          >
            Book call
          </a>
        </div>
      </div>
      <div className="md:hidden border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-2 flex gap-4 text-xs overflow-x-auto">
          <Link href="/salons" className="whitespace-nowrap text-zinc-600">Salons</Link>
          <Link href="/restaurants" className="whitespace-nowrap text-zinc-600">Restaurants</Link>
          <Link href="/clinics" className="whitespace-nowrap text-zinc-600">Clinics</Link>
          <Link href="/real-estate" className="whitespace-nowrap text-zinc-600">Real Estate</Link>
          <Link href="/crm" className="whitespace-nowrap text-zinc-900 font-medium">CRM</Link>
        </div>
      </div>
    </header>
  );
}
