/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const refreshPlugin = isDev ? new webpack.HotModuleReplacementPlugin() : undefined;

  return [
    new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
      template: paths.html,
    }), new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      DEV: JSON.stringify(isDev),
    }),
    refreshPlugin,
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
}
