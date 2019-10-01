const path = require('path');

//webpack.config.js
module.exports = (env) => {
  const environment = env || 'production';

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
    }
  }
};
