import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import cssnano from 'cssnano';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'postcss';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default {
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  input: 'src/index.js',
  output: [
    {
      exports: 'named',
      file: pkg.main,
      format: 'cjs',
    },
    {
      exports: 'named',
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    sass({
      output: 'lib/styles.css',
      processor: css =>
        postcss([autoprefixer, cssnano])
          .process(css, { from: 'src/scss/styles.scss' })
          .then(result => result.css),
    }),
    external({ includeDependencies: true }),
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
