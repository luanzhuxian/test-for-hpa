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
  devtool: 'eval-source-map',
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
    port: 3000,
    compress: true,
    allowedHosts: 'all',
    historyApiFallback: false,
    client: {
      // overlay: {
      //   errors: true,
      //   warnings: false
      // }
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
  optimization: {
    minimize: false,
    // splitChunks: {
    //   cacheGroups: {
    //     vendors: {
    //       name: 'vendors',
    //       test: /[\\/]eureka[\\/]hybrid-portal-adapter[\\/]node_modules[\\/]/,
    //       priority: 10,
    //       chunks: 'initial',
    //       enforce: true,
    //     },
    //   },
    //   maxAsyncRequests: Infinity,
    //   maxInitialRequests: Infinity,
    // },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude(modulePath) {
          //   return /node_modules/.test(modulePath);
          return /node_modules/.test(modulePath) || /hybrid-portal-adapter/.test(modulePath);
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
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
