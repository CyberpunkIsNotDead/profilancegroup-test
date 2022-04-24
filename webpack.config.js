const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '.', 'dist'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimize: IS_PRODUCTION,
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: !IS_PRODUCTION,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.jsx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: IS_PRODUCTION,
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: IS_PRODUCTION ? '[name].[hash].css' : '[name].css',
      chunkFilename: IS_PRODUCTION ? '[id].[hash].css' : '[id].css',
    }),
  ],
};
