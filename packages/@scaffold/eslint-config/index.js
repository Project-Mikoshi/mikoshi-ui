module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'import',
    '@typescript-eslint'
  ],
  rules: {
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    complexity: ['error', 8],
    'comma-dangle': ['error'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        args: 'none'
      }
    ],
    'import/order': 'error',
    // react
    'react/display-name': 'off',
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    },
    'import/ignore': 'node_modules'
  }
}
