const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'electron-renderer',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'web')
  },
  module:{
    rules:[
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  externals: {
    "fs":"require('fs')"
  },
  optimization: {
    minimize:false
  },
  plugins: [
    new webpack.IgnorePlugin(/request/),
    new webpack.IgnorePlugin(/^module$/)
  ]
};
