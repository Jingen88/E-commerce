// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: './', // Use './' for relative paths
  plugins: [react()],
});