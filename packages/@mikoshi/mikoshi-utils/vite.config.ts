import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig, UserConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig(() => {
  // eslint-disable-next-line no-undef
  const DIRECTORY_NAME = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

  return {
    build: {
      lib: {
        entry: path.resolve(DIRECTORY_NAME, 'src/index.ts'),
        fileName: 'index',
        formats: ['es']
      },
      sourcemap: true
    },
    resolve: {
      alias: {
        '@/utils': path.resolve(DIRECTORY_NAME, 'src/utils'),
        '@/constants': path.resolve(DIRECTORY_NAME, 'src/constants'),
        '@/types': path.resolve(DIRECTORY_NAME, 'src/types')
      }
    },
    plugins: [
      tsconfigPaths(),
      dts({
        entryRoot: 'src'
      })
    ],
    test: {
      globals: true
    }
  } as UserConfig
})