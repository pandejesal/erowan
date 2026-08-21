import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function analyzeHtml(html: string, url: string) {
  const lower = html.toLowerCase();
  const hasBooking = /book|appointment|reserve|schedule/.test(lower);
  const hasWhatsApp = /wa\.me|whatsapp|api\.whatsapp/.test(lower);
  const hasTel = /tel:|call us/.test(lower);
  const hasViewport = /<meta[^>]*viewport/.test(lower);
  const hasArabic = /lang=["']ar["']|dir=["']rtl["']|العربية/.test(lower);
  const hasReviews = /google.*review|reviews|testimonial/.test(lower);
  const noBookingPain = !hasBooking && !hasWhatsApp;
  const mobilePain = !hasViewport;
  const ctaPain = !hasWhatsApp && !hasTel;

  const pains: string[] = [];
  if (noBookingPain) pains.push("No online booking / WhatsApp CTA found");
  else if (hasWhatsApp && !hasBooking) pains.push("WhatsApp exists but no structured booking flow");
  if (mobilePain) pains.push("Missing viewport meta — likely not mobile-optimized");
  if (ctaPain) pains.push("No tap-to-call / WhatsApp CTA");
  if (!hasReviews) pains.push("No visible Google reviews/testimonials");
  if (!hasArabic) pains.push("No Arabic toggle detected");

  const checklist = [
    { label: "Booking / WhatsApp CTA", pass: hasBooking || hasWhatsApp, detail: hasWhatsApp ? "WhatsApp found" : hasBooking ? "Booking keyword found" : "None found" },
    { label: "Phone CTA", pass: hasTel || hasWhatsApp, detail: hasTel ? "tel: found" : hasWhatsApp ? "WhatsApp as CTA" : "No phone CTA" },
    { label: "Mobile viewport", pass: hasViewport, detail: hasViewport ? "viewport meta present" : "Missing viewport meta" },
    { label: "Arabic/RTL", pass: hasArabic, detail: hasArabic ? "Arabic/RTL detected" : "Not detected" },
    { label: "Reviews", pass: hasReviews, detail: hasReviews ? "Reviews keyword found" : "No reviews keyword" },
  ];

  return { url, hasBooking, hasWhatsApp, hasTel, hasViewport, hasArabic, pains, checklist };
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") return NextResponse.json({ error: "url required" }, { status: 400 });
    let target = url.trim();
    if (!/^https?:\/\//i.test(target)) target = "https://" + target;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(target, {
      headers: { "User-Agent": "ErowanBot/1.0 (+https://erowan.com)" },
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);
    if (!res.ok) return NextResponse.json({ error: `Fetch failed: ${res.status} ${res.statusText}` }, { status: 400 });
    const html = await res.text();
    const analysis = analyzeHtml(html.slice(0, 200000), target);
    return NextResponse.json(analysis);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "scrape failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
