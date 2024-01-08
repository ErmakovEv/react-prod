import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.join(__dirname, 'src', '' +
            'index.tsx'),
        output: path.resolve(__dirname, 'dist'),

        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development'
    const PORT = env.port || 4422

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config
};
