import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    // eslint-disable-next-line no-useless-concat
    entry: path.join(__dirname, 'src', '' + 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 4422;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};
