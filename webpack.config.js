const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    application: path.join(__dirname, 'src', 'index'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      options: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'build'),
    // inline: true,
    host: 'localhost',
    port: 8080,
    // devMiddleware: {
    //   index: true,
    //   writeToDisk: false,
    // },
    static: './build',
    // static: {
    //   directory: path.join(__dirname, "./")
    // },
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};