import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig } from 'vite'
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
    resolve: {
      alias: {
        '@/components/': path.resolve(DIRECTORY_NAME, 'src/components'),
        '@/utils': path.resolve(DIRECTORY_NAME, 'src/utils'),
        '@/constants': path.resolve(DIRECTORY_NAME, 'src/constants'),
        '@/types': path.resolve(DIRECTORY_NAME, 'src/types'),
        '@/svgs': path.resolve(DIRECTORY_NAME, 'src/svgs')
      }
    },
    plugins: [
      react(),
      tsconfigPaths(),
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