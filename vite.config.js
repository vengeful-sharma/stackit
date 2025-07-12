import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

