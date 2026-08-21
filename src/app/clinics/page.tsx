import { getNiche } from "@/lib/niches";
import NichePageTemplate from "@/components/NichePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinic & Dental Websites — Dubai | Erowan $250 base",
  description: "Trust-first sites for Gulf clinics & dental. Doctor profiles, appointments, Arabic, 48h.",
};

export default function Page() {
  const niche = getNiche("clinics")!;
  return <NichePageTemplate niche={niche} />;
}
