const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = webpackMerge(webpackCommon, {
  bail: true,

  // CAMBIO 1: 'devtool' a false (sin comillas).
  // Esto elimina la generación de mapas que causaba el error de variable "n".
  devtool: false,

  mode: 'production',

  output: {
    path: path.resolve(__dirname, '../dist'),

    // CAMBIO 2: Usamos [chunkhash] en lugar de [hash].
    // Es más estable para producción y evita conflictos de nombres.
    filename: '[name]-[chunkhash].js',

    sourceMapFilename: '[name]-[chunkhash].map',
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
              // CAMBIO 3: sourceMap a false en todos los loaders de estilo.
              // Evita que Webpack intente inyectar lógica de rastreo en el CSS.
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

    // CAMBIO 4: CSS con [chunkhash] para coherencia con el JS.
    new ExtractTextPlugin('[name]-[chunkhash].css'),

    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          ie8: true,
          warnings: false,
        },
        mangle: {
          ie8: true,
        },
        output: {
          comments: false,
          ie8: true,
        },
      },
      // CAMBIO 5: sourceMap a false explícito en el minificador.
      // UglifyJs solía fallar al intentar mapear el código moderno de Axios.
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
