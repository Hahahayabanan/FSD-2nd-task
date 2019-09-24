const path = require('path');
const fs = require('fs');
const async = require('async');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
}

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
const PAGES_DIR = `${PATHS.src}/pages/`


function getFiles(dir, files_, folder = '') {
  const filesArray = files_ || [];
  let folderPath = folder;
  fs.readdirSync(dir).map((filePath) => {
    const name = path.join(dir, filePath);
    if (fs.statSync(name).isDirectory()) {
      folderPath = filePath;
      getFiles(name, filesArray, folderPath);
    } else if (filePath.endsWith('.pug')) {
      filesArray.push(path.join(folderPath, filePath));
    }
  });
  return filesArray;
}
const PAGES = getFiles(PAGES_DIR);

const IMAGES = fs
  .readdirSync(`${PATHS.src}/blocks`)
  .filter((dirName) => fs.lstatSync(`${PATHS.src}/blocks/${dirName}`).isDirectory());


module.exports = {
  // BASE config
  externals: {
    paths: PATHS,
  },
  entry: {
    app: `${PATHS.src}/js`,
  },
  output: {
    // filename: `js/[name].[hash].js`,
    filename: 'js/app.js',
    path: PATHS.dist,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: './fonts/[name].[ext]', // Output below ./fonts
          publicPath: '../', // Take the directory into account
        },
      },
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: './postcss.config.js' } },
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: './postcss.config.js' } },
        },
      ],
    },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "./css/[name].[hash].css"
      filename: './css/app.css',
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyWebpackPlugin([
      { context: `${PATHS.src}/img`, from: '**/*', to: './img' },
      ...IMAGES.map((item) => ({ context: `./src/blocks/${item}/img`, from: '**/*', to: './img' })),
    ]),

    ...PAGES.map((page) => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/.*[\\]/, '').replace(/\.pug/, '.html')}`,
      inject: true,
    })),

  ],
}
