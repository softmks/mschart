module.exports = function(api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          chrome: 60,
          firefox: 48,
          safari: 7,
          edge: 12
        }
      }
    ]
  ]
  const plugins = ['@babel/plugin-proposal-class-properties']
  const ignore = ['build/*.js']
  return {
    presets,
    plugins,
    ignore
  }
}
