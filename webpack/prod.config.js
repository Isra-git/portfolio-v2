const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
// CAMBIO 1: Sustituimos UglifyJs por Terser para evitar el error de inicialización 'n'
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = webpackMerge(webpackCommon, {
  bail: true,

  // CAMBIO 2: 'devtool' totalmente en false (booleano)
  devtool: false,

  mode: 'production',

  output: {
    path: path.resolve(__dirname, '../dist'),

    // CAMBIO 3: Usamos [chunkhash] para mayor estabilidad en los nombres de archivo
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[id]-[chunkhash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              // CAMBIO 4: Desactivamos sourceMap en todos los loaders para evitar errores de Runtime
              options: {
                sourceMap: false,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, 'postcss.config.js'),
                },
                sourceMap: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: false,
                sourceMapContents: false,
              },
            },
          ],
        }),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../static/index.html'),
      favicon: path.resolve(__dirname, '../static/assets/favicon.png'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../static') }], {
      ignore: ['index.html', 'favicon.ico'],
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
      exclude: '.gitignore',
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),

    // CAMBIO 5: CSS extraído con chunkhash para evitar colisiones
    new ExtractTextPlugin('[name]-[chunkhash].css'),

    // CAMBIO 6: Configuramos Terser con 'inline: false'
    // Esta opción es la que arregla específicamente el error "Cannot access 'n' before initialization"
    new TerserPlugin({
      terserOptions: {
        compress: {
          inline: false,
          drop_console: true,
        },
        mangle: true,
        output: {
          comments: false,
        },
      },
      extractComments: false,
      sourceMap: false,
    }),

    new LoaderOptionsPlugin({
      options: {
        context: '/',
        sassLoader: {
          includePaths: [path.resolve(__dirname, '../src')],
        },
      },
    }),
  ],
});
