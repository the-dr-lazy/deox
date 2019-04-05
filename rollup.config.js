import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
].map(name => RegExp(`^${name}`))

export default [
  {
    input: './tmp/index.js',
    output: { name: 'Deox', file: pkg.unpkg, format: 'umd' },
    plugins: [resolve(), commonjs(), sourcemaps(), terser(), filesize()],
  },
  {
    input: './tmp/index.js',
    external: id => externals.some(external => external.test(id)),
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'cjs' },
    ],
    plugins: [resolve(), filesize()],
  },
]
