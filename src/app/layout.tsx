import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://erowan.com"),
  title: {
    default: "Erowan — Websites for Businesses Worldwide | $250 base, 48h delivery",
    template: "%s | Erowan",
  },
  description:
    "Ahmedabad → Worldwide. Websites for salons, restaurants, clinics & real estate. $250 base + $150 booking/ordering. 48-hour delivery, transparent remote.",
  openGraph: {
    title: "Erowan — Websites Worldwide $250 base, 48h",
    description: "Ahmedabad → Worldwide. Booking-first sites for salons, restaurants, clinics, real estate — trusted in 20+ countries.",
    url: "https://erowan.com",
    siteName: "Erowan",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Erowan — $250 Websites Worldwide", description: "48h delivery, transparent remote." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://erowan.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-zinc-900">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
