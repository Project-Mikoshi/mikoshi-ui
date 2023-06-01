import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// @ts-expect-error
const __dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// @ts-expect-error
export default defineConfig(() => ({
  build: {
    lib: {
      entry: {
        core: path.resolve(__dirname, 'src/core.ts'),
        specialized: path.resolve(__dirname, 'src/specialized.ts')
      },
      formats: ['es']
    },
    rollupOptions: {
      plugins: [
        peerDepsExternal()
      ]
    }
  },
  resolve: {
    alias: {
      '@/components/': path.resolve(__dirname, 'src/components'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/svgs': path.resolve(__dirname, 'src/svgs')
    }
  },
  plugins: [
    react(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    dts({
      entryRoot: 'src'
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true
  }
}))