const path = require('path');
const webpack = require('webpack');
const liveReloadPlugin = require('webpack-livereload-plugin');

function resolve (dir) {
  return
}

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.join(__dirname, '.', 'app'),
      'Lib': path.join(__dirname, '.', 'app/lib'),
      'Modules': path.join(__dirname, '.', 'app/src/modules'),
    }
  },
  devServer: {
    contentBase: __dirname + "/app/",
    compress: true,
    hot: true,
    inline: true, // live reload
    host: '0.0.0.0',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env'] },
        }],
      },
    ],
  },
  plugins: [
    new liveReloadPlugin({
      port: 35729
    })
  ]
};
