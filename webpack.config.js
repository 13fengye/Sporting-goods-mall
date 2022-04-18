const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',  // ts-loader是TypeScript官方提供的打包loader
      exclude: /node_modules/ //如果引入的文件，是来自/node_modules/，那么就不用'ts-loader'来处理
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}