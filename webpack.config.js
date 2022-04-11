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

  stats: {
    children: true,
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
          {
            // Creates `style` nodes from JS strings
            loader: 'style-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          {
            // Translates CSS into CommonJS
            loader: 'css-loader'
          },
          {
            // Compiles Sass to CSS
            loader: 'sass-loader'
          }          
        ],
      },


      {
        test: /\.pug$/,
        loader: 'pug3-loader'
      },
      // {
      //   test: /\.(jpe?g|gif|png|svg|woff|ttf|eot|otf)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: './blocks/[folder]/[name].[ext]',
      //     }
      //   },
      // },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: './blocks/images/[name][ext]'
        }
      },
      {
        test: /\.(woff|ttf|eot|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: './blocks/fonts/[name][ext]'
        }
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

    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/ui-kit-cards.pug',
      filename: './pages/ui-kit-cards.html',
      scriptLoading: 'defer',
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/ui-kit-color-and-type.pug',
      filename: './pages/ui-kit-color-and-type.html',
      scriptLoading: 'defer',
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/ui-kit-form-elements.pug',
      filename: './pages/ui-kit-form-elements.html',
      scriptLoading: 'defer',
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/ui-kit-headers-and-footers.pug',
      filename: './pages/ui-kit-headers-and-footers.html',
      scriptLoading: 'defer',
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/page-search-room.pug',
      filename: './pages/page-search-room.html',
      scriptLoading: 'defer',
    }),

    // new WebpackMd5Hash()
  ]
};