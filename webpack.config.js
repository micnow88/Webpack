const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const webpack = require('webpack');
const path = require('path');

const plugins = [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
})];

//webpack.config.js
module.exports = (env) => {
  const environment = env || 'production';

  if (env === 'production') {
    plugins.push(
      new OptimizeJsPlugin({
        sourceMap: false
      })
    )
  }

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.' + environment + '.bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          loader: "babel-loader"
        }
      ]
    },

    plugins: plugins //może być po prostu plugins!
  }
};
