import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import cssnano from 'cssnano';
import postcss from 'postcss';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import { dependencies, peerDependencies, main } from './package.json';

const isDevelopment = process.env.NODE_ENV !== 'production';
const nodeExternalBuiltIns = [];

export default {
  external: [
    ...Object.keys(dependencies || {}),
    ...Object.keys(peerDependencies || {}),
    ...nodeExternalBuiltIns,
  ],
  input: 'src/index.js',
  output: [{ file: main, format: 'cjs' }],
  plugins: [
    sass({
      output: 'lib/styles.css',
      processor: css =>
        postcss([autoprefixer, cssnano])
          .process(css, { from: 'src/scss/styles.scss' })
          .then(result => result.css),
    }),
    resolve(),
    commonJS({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' }),
    terser({
      compress: !isDevelopment,
      mangle: !isDevelopment,
    }),
    sizeSnapshot(),
  ],
};
