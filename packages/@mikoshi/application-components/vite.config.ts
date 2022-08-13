import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import typescript from '@rollup/plugin-typescript'
import tsTransformPaths from '@zerollup/ts-transform-paths'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(() => ({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['umd', 'es'],
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom'
        }
      },
      plugins: [
        typescript({
          transformers: {
            afterDeclarations: [
              // @ts-expect-error
              { type: 'program', factory: (program) => tsTransformPaths(program).afterDeclarations }
            ]
          }
        })
      ]
    }
  },
  plugins: [
    react(),
    tsconfigPaths()
  ],
  test: {
    environment: 'jsdom',
    globals: true
  }
}))