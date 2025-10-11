# ---- build stage ----
FROM node:18-bullseye AS builder
WORKDIR /app

# copiar package files
COPY package*.json ./

# diagnóstico: listar y mostrar si el lockfile está presente
RUN echo "=== LISTA DE ARCHIVOS EN /app ===" && ls -la
RUN echo "=== EXISTE package-lock.json ? ===" && ( [ -f package-lock.json ] && echo "YES" || echo "NO" )
RUN echo "=== CABEZA package-lock.json (si existe) ===" && ( [ -f package-lock.json ] && sed -n '1,20p' package-lock.json || true )

# intentar npm ci; si falla, caer a npm install
RUN (npm ci --no-audit --no-fund --unsafe-perm) || (echo "npm ci falló → intentando npm install" && npm install --no-audit --no-fund --unsafe-perm)

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
