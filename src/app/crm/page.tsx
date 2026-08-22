import CrmGate from "@/components/CrmGate";

export const metadata = {
  title: "CRM — Erowan Internal",
  description: "Internal outreach CRM — not public.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

export default function Page() {
  return <CrmGate />;
}
