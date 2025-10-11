FROM node:18-alpine

WORKDIR /app

# Instalar dependencias del sistema
RUN apk add --no-cache python3 make g++

# Copiar package files
COPY package*.json ./

# Instalar dependencias con timeouts más largos
RUN npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm install --legacy-peer-deps --prefer-offline --no-audit

# Copiar el resto del código
COPY . .

# Build de producción
RUN npm run build

# Limpiar archivos innecesarios
RUN rm -rf node_modules/.cache

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]