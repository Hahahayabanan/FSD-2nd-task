const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = (env, options) => {
  const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
  };

  const PAGES_DIR = `${PATHS.src}/pages/`;

  const production = options.mode === 'production';
  const publicDir = production ? 'https://hahahayabanan.github.io/FSD-2nd-task/' : '/';

  return {
    entry: {
      app: `${PATHS.src}/js`,
    },
    devtool: production ? false : 'eval-sourcemap',
    devServer: {
      overlay: {
        warnings: true,
        errors: true,
      },
      watchOptions: {
        ignored: /node_modules/,
      },
    },
    output: {
      filename: 'js/[name].[hash].js',
      path: PATHS.dist,
      publicPath: publicDir,
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
        exclude: [/blocks/, /img/, /static/],
        use: {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]',
            publicPath: '../',
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        exclude: [/fonts/, /static/],
        options: {
          name: './img/[name].[ext]',
          publicPath: '../',
        },
      },
      {
        test: /\.(svg|png|ico|xml|json)$/,
        exclude: [/fonts/, /blocks/, /img/, /node_modules/],
        use: [{
          loader: 'file-loader',
          options: {
            name: './favicons/[name].[ext]',
            publicPath: '../',
          },
        }],
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
              includePaths: [path.join(__dirname, 'src')],
            },
          },
          {
            loader: 'webpack-px-to-rem',
            query: {
              // 1rem=npx default 10
              basePx: 14,
              min: 1,
              floatWidth: 3,
            },
          },
        ],
      },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
      alias: {
        './dependencyLibs/inputmask.dependencyLib': './dependencyLibs/inputmask.dependencyLib.jquery',
      },
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

      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/index.pug`,
        filename: './index.html',
      }),

      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/ui-kit/colors-and-type/colors-and-type.pug`,
        filename: './colors-and-type.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/ui-kit/cards/cards.pug`,
        filename: './cards.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/ui-kit/form-elements/form-elements.pug`,
        filename: './form-elements.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/ui-kit/headers-and-footers/headers-and-footers.pug`,
        filename: './headers-and-footers.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/website-pages/landing-page/landing-page.pug`,
        filename: './landing-page.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/website-pages/registration/registration.pug`,
        filename: './registration.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/website-pages/room-details/room-details.pug`,
        filename: './room-details.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/website-pages/search-room/search-room.pug`,
        filename: './search-room.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/website-pages/sign-in/sign-in.pug`,
        filename: './sign-in.html',
      }),

    ],
  };
};
