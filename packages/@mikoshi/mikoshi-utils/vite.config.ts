import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// @ts-expect-error
const __dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(() => ({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es']
    },
    sourcemap: true
  },
  resolve: {
    alias: {
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/types': path.resolve(__dirname, 'src/types')
    }
  },
  plugins: [
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    dts({
      entryRoot: 'src'
    })
  ],
  test: {
    globals: true
  }
}))