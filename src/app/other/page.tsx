import { getNiche } from "@/lib/niches";
import NichePageTemplate from "@/components/NichePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Other Businesses Websites — Worldwide | Erowan $250 base",
  description: "Custom websites for any business worldwide — agencies, consultants, shops, trades. $250 base, 48h.",
};
export default function Page() {
  const niche = getNiche("other")!;
  return <NichePageTemplate niche={niche} />;
}
