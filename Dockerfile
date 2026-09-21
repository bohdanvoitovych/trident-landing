FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.11.0 --activate

FROM base AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG DATABASE_URI
ARG PAYLOAD_SECRET
ARG NEXT_PUBLIC_SITE_URL

ENV DATABASE_URI=$DATABASE_URI
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

RUN NODE_OPTIONS="--no-deprecation --max-old-space-size=4000" pnpm build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
