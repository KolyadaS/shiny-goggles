const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },


      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },


      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './blocks/images/[name].[ext]',
          }
        },
      },

    ]
  },
  plugins: [
    // new CleanWebpackPlugin('dist', {} ),
    // new ExtractTextPlugin(
    //   { filename: '[name].css', allChunks: true }
    // ),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    // }),
    new HtmlWebpackPlugin({
      inject: true,
      // hash: true,
      template: './src/index.pug',
      filename: 'index.html',
      scriptLoading: 'defer',
    }),
    // new WebpackMd5Hash()
  ]
};