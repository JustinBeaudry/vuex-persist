'use strict';

import pkg from './package.json';

module.exports = {
  entry: 'src/plugin.js',
  dest: pkg.main,
  format: 'umd',
  moduleName: 'persistState',
  banner:
    `/**
     * @license
     *
     * vuex-persist v${pkg.version}
     *
     * (c) ${new Date().getFullYear()} Justin Beaudry <beaudry.justin@gmail.com>
     *
     * For the full copyright and license information, please view the LICENSE
     * file that was distributed with this source code.
     */`
}