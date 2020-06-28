module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
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
