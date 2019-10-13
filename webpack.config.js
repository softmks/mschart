var path = require('path')

const config = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'src/mscharts.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mscharts.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        enforce: 'pre',
        exclude: [
          /node_modules/,
          path.resolve(__dirname, 'src/utils/ClassListPolyfill.js'),
          path.resolve(__dirname, 'src/utils/DetectElementResize.js'),
          path.resolve(__dirname, 'src/svgjs/svg.js'),
          path.resolve(__dirname, 'src/utils/Utils.js')
        ],
        include: path.resolve(__dirname, 'src/'),
        use: [
          {
            options: {
              fix: true,
              eslintPath: require.resolve('eslint'),
              parser: require.resolve('babel-eslint')
            },
            loader: require.resolve('eslint-loader')
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  watchOptions: {
    poll: true
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],

    extensions: ['.js', '.json']
  }
}

module.exports = config
