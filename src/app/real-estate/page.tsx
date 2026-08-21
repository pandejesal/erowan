import { getNiche } from "@/lib/niches";
import NichePageTemplate from "@/components/NichePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Websites — Dubai | Erowan $250 base",
  description: "Lead-gen sites for Gulf real estate. Listings, WhatsApp leads, RERA footer, 48h.",
};

export default function Page() {
  const niche = getNiche("real-estate")!;
  return <NichePageTemplate niche={niche} />;
}
