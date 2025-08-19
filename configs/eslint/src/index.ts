import { defineConfig, globalIgnores } from 'eslint/config'
import Eslint from '@eslint/js'
import TypescriptEslint from "typescript-eslint"
import globals from "globals"

export default defineConfig([
  globalIgnores(['dist/**', 'node_modules/**']),
  {
    files: ['**/*.{js,ts,jsx,tsx}', '!node_modules/**', '!dist/**'],
    extends: [
      TypescriptEslint.configs.recommended,
      Eslint.configs.recommended
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022
      }
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": "error",
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      complexity: ["error", 8],
      "comma-dangle": ["error"],
      semi: ["error", "never"],
      "object-curly-spacing": ["error", "always"],

      "no-unused-vars": ["error", {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          args: "none",
      }]
    }
  }
])