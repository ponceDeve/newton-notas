import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración ortodoxa para despliegue en GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './', // Asegura la resolución de rutas relativas para los assets y notas
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})