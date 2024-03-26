import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      Pages: "/src/Pages",
      Components: "/src/Components",
      Assets: "/src/Assets",
      Utils: "/src/Utils"
    }
  }
})
