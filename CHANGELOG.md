# Deox Changelog

## [3.3.2](https://github.com/thebrodmann/deox/compare/v3.3.0...v3.3.2) (2021-03-11)

-   Replace _redux-starter-kit_ with its successor @reduxjs/toolkit to fix a critical security issue in the immer dependency (see [Github advisory](https://github.com/advisories/GHSA-9qmh-276g-x5pj)).

## [3.3.1](https://github.com/thebrodmann/deox/compare/v3.3.0...v3.3.1) (2020-10-17)

### Bug Fixes

-   use symbol for the `others` handler ([f5b1cee](https://github.com/thebrodmann/deox/commit/f5b1ceecf35b515bdfd7984657740e6dcae13a35))

# [3.3.0](https://github.com/thebrodmann/deox/compare/v3.2.1...v3.3.0) (2020-10-01)

### Bug Fixes

-   handle.others instead of handle.default ([ffe271b](https://github.com/thebrodmann/deox/commit/ffe271b664118eb28a233394f2f5641b65e76978))
-   more explicit typing to avoid TS4025 ([25b78c3](https://github.com/thebrodmann/deox/commit/25b78c34bcf40bde0747e0b39961788f59741f6a))
-   type for plain action creator. ([#144](https://github.com/thebrodmann/deox/issues/144)) ([f228b81](https://github.com/thebrodmann/deox/commit/f228b8179078dd68c2bd2e1789e94ef43a831ef1)), closes [#143](https://github.com/thebrodmann/deox/issues/143)

### Features

-   default handler in createReducer ([0b3dfcf](https://github.com/thebrodmann/deox/commit/0b3dfcfc26e5dcbaa0e34a8888aa72ac266ae327)), closes [#152](https://github.com/thebrodmann/deox/issues/152)

# [3.3.0](https://github.com/thebrodmann/deox/compare/v3.2.2...v3.3.0) (2020-10-01)

### Bug Fixes

-   handle.others instead of handle.default ([f9aec53](https://github.com/thebrodmann/deox/commit/f9aec53a32acd72fa661ad9a216d5291764d1e89))
-   more explicit typing to avoid TS4025 ([e703730](https://github.com/thebrodmann/deox/commit/e703730104178496c23f683b150a72d8811e91bb))

### Features

-   default handler in createReducer ([611184d](https://github.com/thebrodmann/deox/commit/611184d39167cac8007e3985d3adc791d82b2155)), closes [#152](https://github.com/thebrodmann/deox/issues/152)

## [3.2.2](https://github.com/thebrodmann/deox/compare/v3.2.1...v3.2.2) (2020-03-16)

### Bug Fixes

-   type for plain action creator. ([#144](https://github.com/thebrodmann/deox/issues/144)) ([709fe60](https://github.com/thebrodmann/deox/commit/709fe605916ab806e9a9c94f4a56edd6ef65fb80)), closes [#143](https://github.com/thebrodmann/deox/issues/143)

## [3.2.1](https://github.com/thebrodmann/deox/compare/v3.2.0...v3.2.1) (2020-01-09)

### Bug Fixes

-   extract action from any, Redux.Action and AnyAction types ([18d0a9e](https://github.com/thebrodmann/deox/commit/18d0a9ec720e79c76df23fc7ae94f695aa3f5ae4)), closes [#141](https://github.com/thebrodmann/deox/issues/141)

# [3.2.0](https://github.com/thebrodmann/deox/compare/v3.1.0...v3.2.0) (2019-12-09)

### Features

-   reuse isOfType helper in ofType RxJS operator ([#136](https://github.com/thebrodmann/deox/issues/136)) ([a5f0648](https://github.com/thebrodmann/deox/commit/a5f06482fe175abf8ae8e6bd2ec594e748cb9090))
-   support mixed keys for ofType RxJS operator ([#133](https://github.com/thebrodmann/deox/issues/133)) [skip release](<[dc21e6d](https://github.com/thebrodmann/deox/commit/dc21e6d4c0d64874eb041a30bc3e5fad3b5bf2b2)>)

# [3.1.0](https://github.com/thebrodmann/deox/compare/v3.0.1...v3.1.0) (2019-12-08)

### Features

-   add isOfType helper ([#127](https://github.com/thebrodmann/deox/issues/127)) ([03e6210](https://github.com/thebrodmann/deox/commit/03e6210b9d2866ba0a99c5811254bdeb031ae738)), closes [#87](https://github.com/thebrodmann/deox/issues/87)
-   generalize isOfType keys argument to readonly array ([cc01d9d](https://github.com/thebrodmann/deox/commit/cc01d9dbd72ba59dbea4a1916e254c4ddfe9adfa))

## [3.0.1](https://github.com/thebrodmann/deox/compare/v3.0.0...v3.0.1) (2019-12-07)

### Bug Fixes

-   generalize TActionCreator generic type in createHandlerMap ([9825477](https://github.com/thebrodmann/deox/commit/98254776533c6d1be5cfe07188b3724197c861a5)), closes [#128](https://github.com/thebrodmann/deox/issues/128)

# [3.0.0](https://github.com/thebrodmann/deox/compare/v2.1.2...v3.0.0) (2019-12-04)

### Bug Fixes

-   use tslib and rxjs as peer dependencies ([a58a4a9](https://github.com/thebrodmann/deox/commit/a58a4a9))

### BREAKING CHANGES

-   Please make sure you have tslib in your dependencies if you are using TypeScript.
    Also, make sure you have rxjs in your dependencies if you are using ofType rxjs operator.

## [2.1.4](https://github.com/thebrodmann/deox/compare/v2.1.3...v2.1.4) (2019-12-06)

### Bug Fixes

-   generalize TActionCreator generic type in createHandlerMap ([a7dd90a](https://github.com/thebrodmann/deox/commit/a7dd90a)), closes [#128](https://github.com/thebrodmann/deox/issues/128)

## [2.1.2](https://github.com/thebrodmann/deox/compare/v2.1.1...v2.1.2) (2019-12-04)

### Bug Fixes

-   allow acceptance of any action by reducer created by createReducer ([1b39adb](https://github.com/thebrodmann/deox/commit/1b39adb))

## [2.1.1](https://github.com/thebrodmann/deox/compare/v2.1.0...v2.1.1) (2019-12-04)

### Bug Fixes

-   make ofType operator typing works with plain action types ([fecabda](https://github.com/thebrodmann/deox/commit/fecabda))

# [2.1.0](https://github.com/thebrodmann/deox/compare/v2.0.1...v2.1.0) (2019-06-25)

### Features

-   upgrade redux-starter-kit to version 0.5.1 ([644acac](https://github.com/thebrodmann/deox/commit/644acac))

## [2.0.1](https://github.com/thebrodmann/deox/compare/v2.0.0...v2.0.1) (2019-06-24)

### Bug Fixes

-   remove useless default generic value in createActionCreator ([7538ae0](https://github.com/thebrodmann/deox/commit/7538ae0))

# [2.0.0](https://github.com/thebrodmann/deox/compare/v1.4.1...v2.0.0) (2019-06-15)

### Features

-   export immutibility type helpers in public API ([b723d35](https://github.com/thebrodmann/deox/commit/b723d35))
-   make DeepImmutable optional in input/prev state ([0f35d7f](https://github.com/thebrodmann/deox/commit/0f35d7f)), closes [#58](https://github.com/thebrodmann/deox/issues/58) [#55](https://github.com/thebrodmann/deox/issues/55)

### BREAKING CHANGES

-   The input/prev state argument in createHandlerMap (AKA handleAction) and returning
    reducer of createReducer will not obligated to be Immutable data structure by Deox which in turn can
    lead to changes in handler's and reducer's return type.

## [1.4.1](https://github.com/thebrodmann/deox/compare/v1.4.0...v1.4.1) (2019-06-09)

### Bug Fixes

-   infer return type of reducer from return type of handlers ([6b6edaa](https://github.com/thebrodmann/deox/commit/6b6edaa)), closes [#55](https://github.com/thebrodmann/deox/issues/55)
-   nested DeepImmutable and Immutable types neutralization ([d3f9a1a](https://github.com/thebrodmann/deox/commit/d3f9a1a)), closes [#65](https://github.com/thebrodmann/deox/issues/65)

# [1.4.0](https://github.com/thebrodmann/deox/compare/v1.3.1...v1.4.0) (2019-04-21)

### Bug Fixes

-   make rxjs/operators in UMD bundle an external dependency ([cf94ab7](https://github.com/thebrodmann/deox/commit/cf94ab7)), closes [#41](https://github.com/thebrodmann/deox/issues/41)

### Features

-   rename createAction to createActionCreator ([a855997](https://github.com/thebrodmann/deox/commit/a855997)), closes [#30](https://github.com/thebrodmann/deox/issues/30)

## [1.3.1](https://github.com/thebrodmann/deox/compare/v1.3.0...v1.3.1) (2019-04-05)

### Bug Fixes

-   **tree-shaking:** rename browser field to unpkg in package.json ([159f2e7](https://github.com/thebrodmann/deox/commit/159f2e7)), closes [#43](https://github.com/thebrodmann/deox/issues/43)
-   **tree-shaking:** set sideEffects field in package.json ([dd5889d](https://github.com/thebrodmann/deox/commit/dd5889d))

# [1.3.0](https://github.com/thebrodmann/deox/compare/v1.2.1...v1.3.0) (2019-04-02)

### Features

-   add ActionType helper ([0b2906a](https://github.com/thebrodmann/deox/commit/0b2906a))
-   export ActionType in public API ([f349705](https://github.com/thebrodmann/deox/commit/f349705))
-   export configureStore from redux-starter-kit ([2499a02](https://github.com/thebrodmann/deox/commit/2499a02)), closes [#9](https://github.com/thebrodmann/deox/issues/9)

## [1.2.1](https://github.com/thebrodmann/deox/compare/v1.2.0...v1.2.1) (2019-03-25)

### Bug Fixes

-   export DeepImmutable\* types ([c9d0b3b](https://github.com/thebrodmann/deox/commit/c9d0b3b)), closes [#21](https://github.com/thebrodmann/deox/issues/21)

# [1.2.0](https://github.com/thebrodmann/deox/compare/v1.1.1...v1.2.0) (2019-03-18)

### Features

-   add generic type capability to action creator ([4044db2](https://github.com/thebrodmann/deox/commit/4044db2))

## [1.1.1](https://github.com/thebrodmann/deox/compare/v1.1.0...v1.1.1) (2019-02-20)

### Bug Fixes

-   attach non-undefined falsy values to payload and meta of action ([1fd8ed8](https://github.com/thebrodmann/deox/commit/1fd8ed8)), closes [#15](https://github.com/thebrodmann/deox/issues/15)

# [1.1.0](https://github.com/thebrodmann/deox/compare/v1.0.2...v1.1.0) (2019-02-14)

### Features

-   add ofType operator ([63fb590](https://github.com/thebrodmann/deox/commit/63fb590)), closes [#11](https://github.com/thebrodmann/deox/issues/11)
-   deep immutable reducer type state ([de98e30](https://github.com/thebrodmann/deox/commit/de98e30)), closes [#3](https://github.com/thebrodmann/deox/issues/3)

## [1.0.2](https://github.com/thebrodmann/deox/compare/v1.0.1...v1.0.2) (2019-01-21)

### Bug Fixes

-   convert types.d.ts to types.ts ([852e196](https://github.com/thebrodmann/deox/commit/852e196)), closes [#5](https://github.com/thebrodmann/deox/issues/5)

## [1.0.1](https://github.com/thebrodmann/deox/compare/v1.0.0...v1.0.1) (2019-01-20)

### Bug Fixes

-   publish new README.md ([258bfc9](https://github.com/thebrodmann/deox/commit/258bfc9))
