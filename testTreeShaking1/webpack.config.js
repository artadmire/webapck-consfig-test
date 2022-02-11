
const path = require('path')
const config = {
  mode: 'production', // development production
  entry: './src/index.js',
  output: {
    filename: `main.min.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true, // 记录哪个代码使用了，哪些代码未使用
  },
}

module.exports = config;