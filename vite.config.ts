import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: "/ika-labs/",
  base: "/",
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(Date.now())
  }
})