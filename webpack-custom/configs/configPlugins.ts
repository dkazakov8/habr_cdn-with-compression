/**
 * @docs: https://webpack.js.org/concepts/plugins
 *
 */

import webpack from 'webpack';

import { env } from '../../env';
import { pluginHtml } from '../plugins/pluginHtml';
import { pluginDefine } from '../plugins/pluginDefine';
import { pluginExtract } from '../plugins/pluginExtract';
import { pluginLodashModule } from '../plugins/pluginLodashModule';
import { pluginCompressionGzip } from '../plugins/pluginCompressionGzip';
import { pluginCompressionBrotli } from '../plugins/pluginCompressionBrotli';
import { pluginCircularDependency } from '../plugins/pluginCircularDependency';

export const configPlugins: webpack.Configuration['plugins'] = [
  pluginHtml,
  pluginDefine,
  pluginExtract,
  pluginLodashModule,
  env.CIRCULAR_CHECK && pluginCircularDependency,
  env.GENERATE_COMPRESSED && pluginCompressionGzip,
  env.GENERATE_COMPRESSED && pluginCompressionBrotli,
].filter(Boolean);
