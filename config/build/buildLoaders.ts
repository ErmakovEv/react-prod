/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const cssLoader = buildCssLoaders(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],

        // plugins: [
        //     ["i18next-extract",
        //         {
        //             locales: ['ru', 'en'],
        //             keyAsDefaultValue: true
        //         }]
        // ]
      },
    },
  };

  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
}
