module.exports = {
  root: true,
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        '#': 'prettier config in here :)',
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  }
}
