# Erowan — Portfolio Site (Gulf Niche System)

**Ahmedabad (IST) → Gulf.** Websites for salons, restaurants, clinics & real estate. $250 base (~920 AED) + $150 booking/ordering, 48h delivery. Transparent remote.

## Stack
Next.js 14 App Router + TypeScript + Tailwind, Vercel free.

## Routes
- `/` — Homepage: Gulf arbitrage hero, 4 niche cards, pricing, 3 real client slots
- `/salons` — Salon & Spa niche (booking pain)
- `/restaurants` — Restaurants & Cafes (menu/ordering)
- `/clinics` — Clinics & Dental (trust/appointments)
- `/real-estate` — Real Estate (lead-gen)
- `/demos/salon-1`, `/demos/salon-2` — Noura (Dubai Marina), Bloom (Riyadh)
- `/demos/restaurant-1`, `/demos/restaurant-2` — Mira Cafe (JLT), Al Hadi (Jeddah)
- `/demos/clinic-1`, `/demos/clinic-2` — SmileCare (DHCC), Al Noor (Muscat)
- `/demos/realestate-1`, `/demos/realestate-2` — Vista Homes (Dubai Hills), Harbor (Doha)

All demos have **Concept Demo — Not a real client** badge (honest).

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
npm run build # static 17 pages
npm run lint  # no errors
```

## Deploy (free)
1. Push to GitHub, import on Vercel (free tier)
2. Add domain erowan.com (or vercel.app free)
3. For subdomain demos later: `salon-demo.erowan.com` → Vercel project alias or keep `/demos/*` paths (already pro)

## Next — Outreach System (not in build, docs below)
- Google Sheet CRM: `docs/crm-template.csv`
- Niche email/DM templates: `docs/email-templates.md`
- QA checklist (booking/WhatsApp/mobile/speed): `docs/qa-checklist.md`

## Payments (fix before first outreach)
Wise Business + PayPal Business — accepts AED/USD via link. Don't use SWIFT wire.

## What to replace now
- 3 real client cards on homepage (currently placeholders)
- WhatsApp `919999999999` → your real number
- `hello@erowan.com` → your domain email (add SPF/DKIM)
- Calendly link
