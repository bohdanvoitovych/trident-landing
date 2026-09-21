# T01 — Migrate from new.trident-software.ch → trident-software.ch

## Context

Site initially deployed to `new.trident-software.ch` for testing while the main domain
`trident-software.ch` points to the old WordPress site. Once the new site is approved,
execute the steps below to cut over.

---

## Prerequisites

- [ ] Client approved the new site on `new.trident-software.ch`
- [ ] Old WordPress backup archived at `old.trident-software.ch` or similar
- [ ] Downtime window agreed (DNS TTL flush takes up to 60 min)

---

## Migration Steps

### 1. Update DNS (Infomaniak DNS panel)
- `trident-software.ch` A → `83.228.208.89`
- `www.trident-software.ch` A → `83.228.208.89`
- Set TTL to 300s (5 min) before the cutover to speed up propagation

### 2. Update Caddyfile on server (`ssh ubuntu@83.228.208.89`)
Replace:
```
new.trident-software.ch {
```
With:
```
trident-software.ch, www.trident-software.ch {
```
Then reload:
```bash
sudo systemctl reload caddy
```

### 3. Update GitLab CI variable
In GitLab → Settings → CI/CD → Variables:
- Change `NEXT_PUBLIC_SITE_URL` from `https://new.trident-software.ch` → `https://trident-software.ch`

### 4. Update SITE_URL fallback in code
**File:** `src/lib/metadata.ts` line 3:
```ts
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch'
```
(Already correct — no change needed if CI var is set.)

### 5. Remove BASIC_AUTH_CREDENTIALS CI variable
Delete `BASIC_AUTH_CREDENTIALS` from GitLab CI variables — no auth on production.

### 6. Trigger redeploy
Push any commit to `main` or manually re-run the CI pipeline to rebuild the image
with the new `NEXT_PUBLIC_SITE_URL`.

### 7. Verify production
```bash
curl -I https://trident-software.ch          # 200
curl https://trident-software.ch/sitemap.xml  # renders
curl https://trident-software.ch/robots.txt   # renders
```
Check OG tags and hreflang via browser dev tools or https://metatags.io.

### 8. Cleanup (after 30 days)
- Remove `new.trident-software.ch` block from Caddyfile (or redirect it to main)
- Remove DNS A record for `new.trident-software.ch`

---

## Notes

- `www.trident-software.ch` → `trident-software.ch` redirect is handled by Caddy automatically
  when both hostnames are in the same block
- `src/app/sitemap.ts` uses `process.env.NEXT_PUBLIC_SITE_URL` — no hardcoded URL to update
