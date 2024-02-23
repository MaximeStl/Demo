import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Pages from "vite-plugin-pages"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: "src/pages",
      exclude: [
        '/_components/*.vue', '**/_components/*.vue', '**/**/_components/*.vue', '**/**/**/_components/*.vue', '**/**/**/**/_components/*.vue',
        '/_composables/*.ts', '**/_composables/*.ts', '**/**/_composables/*.ts', '**/**/**/_composables/*.ts', '**/**/**/**/_composables/*.vue'],
      routeBlockLang: "json",
    }),
    Components({
      dirs: ['src/components', 'src/pages/**/_components', 'src/pages/**/**/_components', 'src/pages/**/**/**/_components', '**/**/**/**/_components/*.vue'],
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),

  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "Api": fileURLToPath(new URL("./Api", import.meta.url)),
    },
  }
})
