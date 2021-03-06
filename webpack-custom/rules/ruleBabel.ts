import webpack from 'webpack';

import { paths } from '../../paths';
import { loaderBabel } from '../loaders/loaderBabel';

export const ruleBabel: webpack.RuleSetRule = {
  test: /\.(js|tsx?)$/,
  use: [loaderBabel],
  exclude: [paths.nodeModulesPath],
};
