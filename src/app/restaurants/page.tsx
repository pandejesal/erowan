import { getNiche } from "@/lib/niches";
import NichePageTemplate from "@/components/NichePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant & Cafe Websites — Dubai | Erowan $250 base",
  description: "Menu + ordering sites for Gulf restaurants. Mobile-first, WhatsApp ordering, 48h. Ahmedabad → Gulf.",
};

export default function Page() {
  const niche = getNiche("restaurants")!;
  return <NichePageTemplate niche={niche} />;
}
