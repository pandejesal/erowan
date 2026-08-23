import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const display = Fraunces({ subsets: ["latin"], weight: ["700","800","900"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono", display: "swap" });

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
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased bg-[var(--paper)] text-[var(--ink)]`}>
        <SmoothScroll>
          <Header />
          <main id="main-content" className="min-h-[60vh]">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
