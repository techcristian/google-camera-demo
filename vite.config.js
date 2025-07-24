
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 esto ayuda si se rompe el renderizado por rutas
})