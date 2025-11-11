import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon')
        }
      }
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/ // .md
      ],
      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        {
          'pinia':['defineStore','storeToRefs','acceptHMRUpdate']
        },
        {
          'vue-meta':['useMeta']
        }
      ],
      dts: true,
      viteOptimizeDeps: true,
      dirs:['src/stores/**', 'src/composables/**']
    }),
    Components({ /* options */ }),
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
