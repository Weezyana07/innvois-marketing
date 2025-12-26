# Innvois Marketing Site

This is a standalone marketing/landing site for **Innvois** (separate from the main app).

## Why this repo exists

- Deploy from a **personal GitHub repo** (avoids Vercel org billing)
- Keep the main app private / not live yet
- Provide a clear public website for Google for Startups Cloud verification

## Local development

```bash
npm install
npm run dev
```

## Deployment

Recommended (free): **Cloudflare Pages** or **Netlify**.

- Build command: `npm run build`
- Output: Next.js (framework preset)

### Domain

Use this for now:

- `www.innvois.com` → marketing site (this repo)
- `app.innvois.com` → main app (later)

## Notes

Auth links are intentionally redirected to `/waitlist` so the site stays usable pre-launch.
