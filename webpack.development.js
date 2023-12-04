const fs = require('fs');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mapToFolder = (dependencies, folder) =>
  dependencies.reduce((acc, dependency) => {
    return {
      [dependency]: path.resolve(`${folder}/${dependency}`),
      ...acc,
    };
  }, {});

module.exports = {
  mode: 'development',
  // devtool: 'eval-source-map',
  devtool: 'source-map',
  // devtool: 'cheap-module-source-map',
  entry: {
    main: path.resolve(__dirname, './src/index'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      ...mapToFolder(
        [
          'react',
          'react-dom',
          'react-router-dom',
          '@luigi-project/client',
          '@ui5/webcomponents-react',
        ],
        './node_modules',
      ),
    },
  },
  devServer: {
    hot: true,
    port: 3500,
    compress: true,
    allowedHosts: 'all',
    historyApiFallback: false,
    client: {
      overlay: false,
    },
    devMiddleware: {
      writeToDisk: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude(modulePath) {
          //   return /node_modules/.test(modulePath);
          return /node_modules/.test(modulePath) || /hybrid-portal-adapter/.test(modulePath);
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        // exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
