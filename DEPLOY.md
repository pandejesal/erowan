# Deploy — Erowan (Free)

1. **GitHub**
```bash
git init
git add .
git commit -m "feat: erowan portfolio + crm + pay — 19 pages"
git branch -M main
git remote add origin https://github.com/YOUR/erowan.git
git push -u origin main
```

2. **Vercel (free)**
- Import GitHub repo → Framework: Next.js → Deploy
- Domain: add `erowan.com` (or use `erowan.vercel.app` free)
- Env: none needed

3. **Post-deploy checks**
- `/sitemap.xml` → 15 URLs
- `/robots.txt` → allows /, disallows /api, /crm
- `/manifest.webmanifest`
- Lighthouse >90 (mobile first)

4. **Replace placeholders**
- `919999999999` → real WhatsApp (Header, Footer, Pay, NicheTemplate, Demos)
- `hello@erowan.com` → domain email + SPF/DKIM
- `paypal.me/erowan` / `erowan@wise.com` → your links in `/pay`
- Calendly iframe in `/pay`
- 3 real client cards in `src/app/page.tsx`

5. **Subdomain demos (optional later)**
- Vercel → Domains → add `salon-demo.erowan.com` → redirect to `/demos/salon-1` via `vercel.json` rewrites
