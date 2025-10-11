# ---- build stage ----
FROM node:18-bullseye AS builder
WORKDIR /app

# copiar package files
COPY package*.json ./

# si existe package-lock.json, preferimos npm ci, si no usar npm install
RUN if [ -f package-lock.json ]; then npm ci --no-audit --no-fund --unsafe-perm; else npm install --no-audit --no-fund --unsafe-perm; fi

# copiar el resto del proyecto
COPY . .

# build
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
