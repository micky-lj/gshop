// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /* eslint-disable no-new */
    'no-new':0,
    'arrow-spacing':0,
    'eslkey-spacing':0,
    'indent':0,
    'eol-last':0,
    'semi':0,
    'key-spacing':0,
    'no-trailing-spaces':0,
    'spaced-comment':0,
    'space-before-function-paren':0,
    'space-before-blocks':0,
    'no-undef':0,
    'no-template-curly-in-string':0
  }
}
