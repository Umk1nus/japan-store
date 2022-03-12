import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  build:{
    target: 'es2017',
    outDir: 'dir'
  },
  server:{
    port: 3000,
    host: '0.0.0.0',
    hmr: true,
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [
    vue(),
    ViteAliases(),
    legacy({
      targets: ['defaults','not IE 11']
    })
  ]
})
