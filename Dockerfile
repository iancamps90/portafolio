FROM node:18-alpine

WORKDIR /app

# Copiar package files primero
COPY package*.json ./

# Limpiar caché de npm e instalar dependencias
RUN npm cache clean --force && \
    npm install --legacy-peer-deps --verbose

# Copiar el resto del código
COPY . .

# Build de producción
RUN npm run build

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]