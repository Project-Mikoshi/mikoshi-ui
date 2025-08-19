import {defineConfig} from 'tsdown'

export default defineConfig({
  entry: ['src/**/*.{ts,js,tsx,jsx}', '!src/__*__/**/*', '!src/**/*.{test,spec,stories}.{ts,tsx,js,jsx}'],
  format: ['esm'],
  unbundle: true,
  dts: true,
  sourcemap: true
})
