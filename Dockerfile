# ---- build stage ----
FROM node:18-bullseye AS builder
WORKDIR /app

COPY package*.json ./

ENV NPM_CONFIG_PRODUCTION=false
RUN npm ci --no-audit --no-fund --unsafe-perm

COPY . .

ENV NODE_ENV=production
RUN npm run build

# ---- runtime stage ----
FROM node:18-bullseye AS runner
WORKDIR /app

ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD [ "npm", "run", "start" ]
