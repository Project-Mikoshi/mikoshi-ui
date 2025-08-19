import { TSDownConfig } from '@config/build'
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
