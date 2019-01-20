<h1 align="center">Deox</h1>

<h3 align="center">Functional type-safe Flux standard utilities</h3>

<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/npm/l/deox.svg?logo=License&style=flat-square">
  </a>
  <a href="https://circleci.com/gh/thebrodmann/deox">
    <img alt="Build Status" src="https://img.shields.io/circleci/project/github/thebrodmann/deox/master.svg?label=build&logo=circleci&style=flat-square">
  </a>
  <a href="https://greenkeeper.io/">
    <img alt="Greenkeeper Status" src="https://badges.greenkeeper.io/thebrodmann/deox.svg?style=flat-square">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="Semantic Release" src="https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/deox">
    <img alt="Latest Release" src="https://img.shields.io/npm/v/deox.svg?label=npm%40latest&style=flat-square">
  </a>
  <a href="CONTRIBUTING.md">
    <img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square">
  </a>
</p>

The only completely functional **type-safe** approach to Flux that its main goals are to diminish types **verbosity**, **repetition** and **complexity** without losing any type information.

Behold, the art of `deox`:

<p align="center">
  <img alt="Deox counter example" src="https://github.com/thebrodmann/deox/raw/docs/media/counter-example.jpg">
</p>

## Highlights

- Minimalist (almost no import cost) - checkout [Bundle Phobia](https://bundlephobia.com/result?p=deox@latest).
- Simple - focused on self-declarative API.
- Secure - complete test-suits for all of the edge and corners.
- Actively maintained - monitoring issues and respond in a timely manner.

## Installation

You can install `deox` package by running:

```bash
# YARN
yarn add deox

# NPM
npm install deox
```

The `deox` npm package contains a [CommonJS](http://www.commonjs.org/specs/modules/1.0/) build that can be use with [Node.js](https://nodejs.org/en/) or module bundlers (e.g. [Rollup](https://github.com/rollup/rollup), [Webpack](https://github.com/webpack/webpack), etc.). it also includes an [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) build that works well with [tree-shaking](https://webpack.js.org/guides/tree-shaking/).

If you don't use module bundler, it's also fine. The `deox` npm package also includes a production minified [UMD](https://github.com/umdjs/umd) build that makes Deox available as global variable called `window.Deox`; you can add it simply to your page via following script tag:

```html
<script src="https://unpkg.com/deox@latest"></script>
```

## Usage

```ts
import { createAction, createReducer } from 'deox'

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')
const reset = createAction('RESET', resolve => (count: number) =>
  resolve(count)
)

const defaultState = 0

const counter = createReducer(defaultState, handle => [
  handle(increment, state => state + 1),
  handle(decrement, state => state - 1),
  handle(reset, (_, { payload }) => payload),
])

counter(undefined, increment()) //=> 1
counter(undefined, decrement()) //=> -1
```

## Documentation

## FAQ

## Versioning

Deox uses [Semantic Versioning 2.0.0](https://semver.org/)

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md).

## License

deox is [MIT licensed](LICENSE).
