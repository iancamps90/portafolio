// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/', // Base por defecto para desarrollo
  }

  if (command === 'build') {
    // En producción (cuando haces 'npm run build'), cambia la base
    config.base = '/portafolio/'
  }

  return config
})