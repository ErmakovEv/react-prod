import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {

    const {paths, mode, isDev} = options;

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
        plugins: buildPlugins(paths.html),
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options.port) : undefined
    };
}