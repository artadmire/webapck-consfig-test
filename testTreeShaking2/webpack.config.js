
const path = require('path')
const config = {
  mode: 'development', // development production
  entry: './src/index.js',
  output: {
    filename: `main.min.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  optimization: {
    usedExports: true, // 记录哪个代码使用了，哪些代码未使用
  },
}

module.exports = config;