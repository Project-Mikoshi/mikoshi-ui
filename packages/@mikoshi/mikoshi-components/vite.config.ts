import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// @ts-expect-error
export default defineConfig(() => {
  // eslint-disable-next-line no-undef
  const DIRECTORY_NAME = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

  return {
    build: {
      lib: {
        entry: {
          core: path.resolve(DIRECTORY_NAME, 'src/core.ts'),
          specialized: path.resolve(DIRECTORY_NAME, 'src/specialized.ts')
        },
        formats: ['es']
      },
      rollupOptions: {
        plugins: [
          peerDepsExternal()
        ]
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
  }
})