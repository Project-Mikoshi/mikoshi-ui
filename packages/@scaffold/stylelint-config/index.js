module.exports = {
  rules: {
    //general
    'max-nesting-depth': 4,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'no-empty-source': null,
    'selector-id-pattern': null,
    'keyframes-name-pattern': null,
    'annotation-no-unknown': null,

    // block
    'block-no-empty': true,

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
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-pattern': null
  },
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
  ],
  defaultSeverity: 'error'
}
