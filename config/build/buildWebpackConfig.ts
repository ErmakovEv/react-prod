// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    entry: {
      bundle: paths.entry,
    },
    output: {
      path: paths.output,
      filename: '[name].js',
      clean: true,
    },
    mode,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options.port) : undefined,
  };
}
