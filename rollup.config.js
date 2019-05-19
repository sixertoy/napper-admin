import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

export default {
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonJS({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
    uglify(),
  ],
};
