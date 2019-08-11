var path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    inline: true,
    hot: true,
    filename: 'bundle.js',
    port: 16000
  }
};
