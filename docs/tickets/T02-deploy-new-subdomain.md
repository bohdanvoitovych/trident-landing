# T02 — First Deploy: new.trident-software.ch

## Context

trident-landing has no git repo yet (parent `/Projects/trident/` is git root — wrong).
Deployment requires:
- own git repo in `trident-landing/`
- GitLab CI variables
- server directory + `.env.production`
- Caddy block
- DNS A record

Server: `83.228.208.89` (same as 8move). Port `3002` (3000=8move, 3001=uptime.swiss-linker.ch).

---

## Checklist

### Step 1 — GitLab: create repo
Create repo at: `gitlab.stemsc.com/group.trident/trident-landing`
(if not exists — do via GitLab UI)

### Step 2 — Git init + push
```bash
cd /Users/bohdan.voitovych/Projects/trident/trident-landing
git init
git remote add origin git@gitlab.stemsc.com:group.trident/trident-landing.git
git add .
git commit -m "feat: initial commit"
git push -u origin main
```

### Step 3 — GitLab CI variables
Settings → CI/CD → Variables → Add:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://new.trident-software.ch` |
| `DATABASE_URI` | `postgresql://payload:<pass>@localhost:5432/trident` (use actual DB pass) |
| `PAYLOAD_SECRET` | random 32-char string |
| `BASIC_AUTH_CREDENTIALS` | `demo:demo` |
| `SSH_PRIVATE_KEY` | infomaniak private key (same as 8move) |
| `SSH_HOST` | `83.228.208.89` |
| `SSH_USER` | `ubuntu` |

### Step 4 — Server: create directory + .env.production
```bash
ssh -i ~/.ssh/infomaniak ubuntu@83.228.208.89
mkdir -p /home/ubuntu/trident-landing
```

Create `/home/ubuntu/trident-landing/.env.production`:
```env
DATABASE_URI=postgresql://payload:<pass>@db:5432/trident
PAYLOAD_SECRET=<same as CI var>
NEXT_PUBLIC_SITE_URL=https://new.trident-software.ch
POSTGRES_PASSWORD=<pass>
BASIC_AUTH_CREDENTIALS=demo:demo
```
Note: `DATABASE_URI` uses `db` hostname (docker-compose service name), not `localhost`.

### Step 5 — Copy docker-compose.server.yml to server
The CI deploy step does `sed` on `docker-compose.server.yml` on the server,
so the file must exist there before first deploy:
```bash
scp -i ~/.ssh/infomaniak docker-compose.server.yml ubuntu@83.228.208.89:/home/ubuntu/trident-landing/
```

### Step 6 — Caddy: add new.trident-software.ch block
On server, edit `/etc/caddy/Caddyfile`, add:
```
new.trident-software.ch {
    header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    reverse_proxy localhost:3002
}
```
Then:
```bash
sudo systemctl reload caddy
```

### Step 7 — DNS (Infomaniak DNS panel — manual)
Add A record: `new.trident-software.ch` → `83.228.208.89`
TTL: 300

### Step 8 — Trigger CI / verify
After push in Step 2, CI runs automatically.
Monitor: `gitlab.stemsc.com/group.trident/trident-landing/-/pipelines`

Verify:
```bash
curl -I https://new.trident-software.ch          # 401 without auth (basic auth active)
curl -u demo:demo https://new.trident-software.ch # 200
curl -u demo:demo https://new.trident-software.ch/sitemap.xml
curl -u demo:demo https://new.trident-software.ch/robots.txt
```

---

## Files already prepared (committed in initial push)
- `Dockerfile` — pnpm@10.11.0 pinned
- `docker-compose.server.yml` — port 3002:3000
- `src/app/robots.ts` — MetadataRoute.Robots
- `src/middleware.ts` — basic auth via BASIC_AUTH_CREDENTIALS
- `.gitlab-ci.yml` — build + deploy stages ready
