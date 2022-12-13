import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig } from 'vite'

// @ts-expect-error
const __dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(() => ({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
  }
}))