import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni({
      vueOptions: {
        reactivityTransform: true
      }
    }),
    eslintPlugin({
      cache: false,
      fix: false,
      exclude: ['src/pages.*', 'src/manifest.*']
    }),
    AutoImport({
      imports: ['vue', 'vuex']
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
