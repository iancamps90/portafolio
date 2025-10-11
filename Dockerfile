
FROM node:18-alpine

WORKDIR /app

# Copiar archivos del repositorio
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Build
RUN npm run build

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]