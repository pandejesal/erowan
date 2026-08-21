import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Al Noor Clinic"
      location="Berlin — Mitte"
      niche="Clinics & Dental — Berlin"
      heroTitle="Care that feels calm"
      heroSub="German + expat patients. Doctor credentials, location + map, insurance, bilingual toggle."
      primaryCta="Book Consultation"
      image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop"
      services={[
        { name: "GP Visit", price: "€45" },
        { name: "Dental Check", price: "€35" },
        { name: "Pediatric", price: "€50" },
        { name: "Lab Tests", price: "€60" },
        { name: "Vaccination", price: "€30" },
        { name: "Wellness Package", price: "€120" },
      ]}
    />
  );
}
