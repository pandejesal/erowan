import { getNiche } from "@/lib/niches";
import NichePageTemplate from "@/components/NichePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salon & Spa Websites — Dubai | Erowan $250 base",
  description: "Booking-first sites for Gulf salons & spas. 48h delivery, WhatsApp booking, AED pricing. Ahmedabad → Dubai.",
};

export default function Page() {
  const niche = getNiche("salons")!;
  return <NichePageTemplate niche={niche} />;
}
