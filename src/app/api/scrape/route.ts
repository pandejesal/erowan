import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export const dynamic = "force-dynamic";

function analyzeHtml(html: string, url: string) {
  const lower = html.toLowerCase();
  let hasBooking = /book|appointment|reserve|schedule/.test(lower);
  let hasWhatsApp = /wa\.me|whatsapp|api\.whatsapp/.test(lower);
  let hasTel = /tel:|call us/.test(lower);
  let hasViewport = /<meta[^>]*viewport/.test(lower);
  let hasArabic = /lang=["']ar["']|dir=["']rtl["']|العربية/.test(lower);
  let hasReviews = /google.*review|reviews|testimonial/.test(lower);

  try {
    const $ = cheerio.load(html);
    const text = $("body").text().toLowerCase();
    if (/book|appointment|reserve|schedule|حجز|موعد/.test(text)) hasBooking = true;
    if ($('a[href*="wa.me"], a[href*="whatsapp"], a[href*="api.whatsapp"]').length > 0) hasWhatsApp = true;
    if ($('a[href^="tel:"]').length > 0) hasTel = true;
    if ($('meta[name="viewport"]').length > 0) hasViewport = true;
    if ($('html[lang="ar"], html[dir="rtl"], [lang="ar"], [dir="rtl"]').length > 0 || /العربية/.test(html)) hasArabic = true;
    if ($('[class*="review"], [class*="testimonial"], [id*="review"]').length > 0 || /google.*review|testimonial|reviews/.test(text)) hasReviews = true;
    // CTA thumb-reachable check via fixed bottom CTA or header CTA
    // booking CTA includes buttons with booking keywords
    const bookingBtn = $('button, a').filter((_, el) => /book|reserve|appointment|whatsapp|wa\.me/i.test($(el).text() + $(el).attr("href") || "")).length > 0;
    if (bookingBtn) hasBooking = hasBooking || true;
  } catch {
    // fallback to regex above
  }

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
    { label: "Booking / WhatsApp CTA", pass: hasBooking || hasWhatsApp, detail: hasWhatsApp ? "WhatsApp found (cheerio)" : hasBooking ? "Booking keyword found" : "None found — verify manually" },
    { label: "Phone CTA", pass: hasTel || hasWhatsApp, detail: hasTel ? "tel: found" : hasWhatsApp ? "WhatsApp as CTA" : "No phone CTA" },
    { label: "Mobile viewport", pass: hasViewport, detail: hasViewport ? "viewport meta present (cheerio)" : "Missing viewport meta" },
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
