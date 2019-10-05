const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
}

const PAGES_DIR = `${PATHS.src}/pages/`

function getFiles(dir, files_, folder = '') {
  const filesArray = files_ || [];
  let folderPath = folder;
  fs.readdirSync(dir).forEach((filePath) => {
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

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: `${PATHS.src}/js`,
  },
  output: {
    filename: 'js/[name].[hash].js',
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
          name: './fonts/[name].[ext]',
          publicPath: '../',
        },
      },
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      exclude: [/fonts/, /static/,],
      options: {
        name: '[name].[ext]',
        outputPath: 'img/',
      },
    },
    {
      test: /\.(svg|png|ico|xml|json)$/,
      exclude: [/fonts/, /blocks/, /img/, /node_modules/,],
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'favicons/',
        },
      },],
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            data: '@import \'./src/styles/main-presets\';',
            includePaths: [path.join(__dirname, 'src'),],
          },
        },
      ],
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss',],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash].css',
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    ...PAGES.map((page) => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/.*[\\]/, '').replace(/\.pug/, '.html')}`,
      inject: true,
    })),

  ],
}
