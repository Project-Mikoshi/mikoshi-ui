module.exports = {
  rules: {
    //general
    indentation: 2,
    'max-empty-lines': 1,
    'max-nesting-depth': 4,
    'no-eol-whitespace': true,
    'number-leading-zero': 'never',
    'property-case': 'lower',
    'string-quotes': 'single',
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'no-empty-source': null,

    // block
    'block-no-empty': true,
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-newline-after': 'always',

    'color-hex-case': 'lower',
    'color-no-invalid-hex': true,
    //units
    'unit-no-unknown': true,

    //declarations
    'declaration-no-important': true,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-empty-line-before': null,
    'declaration-block-no-duplicate-properties': [true, {ignore: ['consecutive-duplicates-with-different-values']}],

    // scss
    'scss/at-mixin-parentheses-space-before': 'always',
    'scss/no-global-function-names': null,
    'scss/dollar-variable-empty-line-before': null
  },
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss'

  ],
  defaultSeverity: 'error'
}
