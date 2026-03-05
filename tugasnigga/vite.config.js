import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/KosMate/', 
  resolve: {
    dedupe: ['react', 'react-dom'], // Forces Vite to use one strict copy of React
  },
  optimizeDeps: {
    include: ['framer-motion'], // Forces Vite to pre-bundle the modern version of this package
  }
})