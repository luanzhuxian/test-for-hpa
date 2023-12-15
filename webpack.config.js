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
  // mode: 'none',
  mode: 'production',
  devtool: 'source-map',
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
    // usedExports: true, // 允许 webpack 识别哪些模块的导出没有被其他模块使用，它允许我们删除那些从未被任何模块导入的导出，但模块还是被引入
    // innerGraph: true, // webpack 能够从入口文件中递归地进行工作，并通过其所有的依赖关系来了解模块中哪些导出是未使用的
    // sideEffects: true, // 如果一个导入模块的内容没有被使用，它允许我们完全跳过一个导入的模块
    // minimize: false,
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
          // return /node_modules/.test(modulePath);
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
  // plugins: [new CleanWebpackPlugin()],
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
};
