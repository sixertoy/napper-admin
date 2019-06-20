import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import cssnano from 'cssnano';
import postcss from 'postcss';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  input: 'src/index.js',
  output: [
    { exports: 'named', file: pkg.main, format: 'cjs' },
    { exports: 'named', file: pkg.module, format: 'es' },
  ],
  plugins: [
    resolve(),
    sass({
      output: 'lib/styles.css',
      processor: css =>
        postcss([autoprefixer, cssnano])
          .process(css)
          .then(result => result.css),
    }),
    commonJS({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' }),
    terser(),
    sizeSnapshot(),
  ],
};
