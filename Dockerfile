
# ---- build stage ----
FROM node:18-bullseye AS builder
WORKDIR /app

# Copiamos todo el proyecto primero (garantiza que package.json esté disponible)
COPY . .

# Diagnóstico breve (ver en logs si es necesario)
RUN echo "=== ARCHIVOS EN /app ===" && ls -la /app || true
RUN echo "=== package.json existe? ===" && ( [ -f package.json ] && echo "YES" || echo "NO" )

# Intentar instalar con npm ci; si falla, fallback a npm install
RUN (npm ci --no-audit --no-fund --unsafe-perm) || (echo "npm ci falló → intentando npm install" && npm install --no-audit --no-fund --unsafe-perm)

# Build de producción
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
