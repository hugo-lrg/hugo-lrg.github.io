import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { copyFileSync } from 'node:fs'


export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      }
    }
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
