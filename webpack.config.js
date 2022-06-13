const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    pageOne: 'C:/My_files/IT/UniverseApp/src/modules/apod/apod.js',
    pageTwo: 'C:/My_files/IT/UniverseApp/src/modules/epic/epic.js',
    // pageThree: './src/pageThree/earth.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      minChunks: 2,
    },
  },
  // entry: './src/index.js',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/assets/img/'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HTMLPlugin({
      filename: 'apod.html',
      template: 'C:/My_files/IT/UniverseApp/src/modules/apod/apod.html',
      chunks: ['pageOne'],
      // inject: false,
    }),
    new HTMLPlugin({
      filename: 'epic.html',
      template: 'C:/My_files/IT/UniverseApp/src/modules/epic/epic.html',
      chunks: ['pageTwo'],
      // inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // test: /(\.css|\.scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
