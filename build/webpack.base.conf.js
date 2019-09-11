const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
}

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
// const PAGES_DIR = PATHS.src
const PAGES_DIR = `${PATHS.src}/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

const IMAGES = fs
  .readdirSync(`${PATHS.src}/blocks`)
  .filter((dirName) => fs.lstatSync(`${PATHS.src}/blocks/${dirName}`).isDirectory());

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: `${PATHS.src}/js`,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: ''
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ]
    }, 
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'img/',
      }
    }, 

    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }
      ]
    }
  ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[hash].css"
    }),
    // new CopyWebpackPlugin([
    //   { from: `${PATHS.src}/img`, to: `img` },
    //   { from: `${PATHS.src}/fonts`, to: `fonts` },
    //   { from: `${PATHS.src}/static`, to: '' },
    // ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CopyWebpackPlugin([
      { context: `${PATHS.src}/img`, from: '**/*', to: './img' },
      { context: `${PATHS.src}/fonts`, from: '**/*', to: './fonts' },
      ...IMAGES.map((item) => {
        return { context: `./src/blocks/${item}/img`, from: '**/*', to: './img' };
      })
    ]),

    // Automatic creation any html pages (Don't forget to RERUN dev server)
    // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
    // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`,
      inject: true
    })),

    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/index.pug`,
    //   filename: './index.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/cards-page.pug`,
    //   filename: './cards-page.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/colors-and-type.pug`,
    //   filename: './colors-and-type.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/cards.pug`,
    //   filename: './cards.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/form-elements.pug`,
    //   filename: './form-elements.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/headers-and-footers.pug`,
    //   filename: './headers-and-footers.html',
    //   inject: true
    // }),


    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/landing-page.pug`,
    //   filename: './landing-page.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/registration.pug`,
    //   filename: './registration.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/room-details.pug`,
    //   filename: './room-details.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/search-room.pug`,
    //   filename: './search-room.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/sign-in.pug`,
    //   filename: './sign-in.html',
    //   inject: true
    // }),
 
    
    
  ],
}
