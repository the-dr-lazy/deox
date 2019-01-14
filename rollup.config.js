import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default [
  {
    input: './tmp/index.js',
    output: { name: 'FluxTypesafe', file: pkg.browser, format: 'umd' },
    plugins: [resolve(), commonjs(), sourcemaps(), terser(), filesize()],
  },
  {
    input: './tmp/index.js',
    externals: ['tslib'],
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'cjs' },
    ],
    plugins: [filesize()],
  },
]
