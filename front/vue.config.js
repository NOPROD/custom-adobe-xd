module.exports = {
  chainWebpack: config => {
    config.plugins.delete('fork-ts-checker')
    config.module.rule('eslint').use('eslint-loader')
  }
}
