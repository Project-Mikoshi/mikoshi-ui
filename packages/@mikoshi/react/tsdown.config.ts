import { TSDownConfig } from '@scaffold/build-config'
import { defineConfig } from 'tsdown'
import scss from 'rollup-plugin-scss'

export default defineConfig({
  ...TSDownConfig,
  plugins: [
    scss({
      fileName: 'style.css'
    })
  ]
})
