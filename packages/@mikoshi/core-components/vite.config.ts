import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// @ts-expect-error
const __dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(() => ({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    ssr: true,
    sourcemap: 'inline',
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled']
    }
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'constants': path.resolve(__dirname, 'src/constants'),
      'types': path.resolve(__dirname, 'src/types'),
      'svgs': path.resolve(__dirname, 'src/svgs')
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
    globals: true,
    deps: {
      inline: true
    }
  }
}))