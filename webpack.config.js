const fs = require('fs');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const mapToFolder = (dependencies, folder) =>
  dependencies.reduce((acc, dependency) => {
    return {
      [dependency]: path.resolve(`${folder}/${dependency}`),
      ...acc,
    };
  }, {});

module.exports = {
  mode: 'none',
  //   devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/index'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  //   plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
};
