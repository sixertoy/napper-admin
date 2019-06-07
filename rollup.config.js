import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

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
    commonJS({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' }),
    terser(),
    sizeSnapshot(),
  ],
};
