import type { StorybookConfig } from '@storybook/react-webpack5';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';
// import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

const configSB: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      output: '',
      entry: '',
      html: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(buildCssLoaders(true));

    return config;
  },
};
export default configSB;
