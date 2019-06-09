# Deox Changelog

## [1.4.1](https://github.com/thebrodmann/deox/compare/v1.4.0...v1.4.1) (2019-06-09)


### Bug Fixes

* infer return type of reducer from return type of handlers ([6b6edaa](https://github.com/thebrodmann/deox/commit/6b6edaa)), closes [#55](https://github.com/thebrodmann/deox/issues/55)
* nested DeepImmutable and Immutable types neutralization ([d3f9a1a](https://github.com/thebrodmann/deox/commit/d3f9a1a)), closes [#65](https://github.com/thebrodmann/deox/issues/65)

# [1.4.0](https://github.com/thebrodmann/deox/compare/v1.3.1...v1.4.0) (2019-04-21)


### Bug Fixes

* make rxjs/operators in UMD bundle an external dependency ([cf94ab7](https://github.com/thebrodmann/deox/commit/cf94ab7)), closes [#41](https://github.com/thebrodmann/deox/issues/41)


### Features

* rename createAction to createActionCreator ([a855997](https://github.com/thebrodmann/deox/commit/a855997)), closes [#30](https://github.com/thebrodmann/deox/issues/30)

## [1.3.1](https://github.com/thebrodmann/deox/compare/v1.3.0...v1.3.1) (2019-04-05)


### Bug Fixes

* **tree-shaking:** rename browser field to unpkg in package.json ([159f2e7](https://github.com/thebrodmann/deox/commit/159f2e7)), closes [#43](https://github.com/thebrodmann/deox/issues/43)
* **tree-shaking:** set sideEffects field in package.json ([dd5889d](https://github.com/thebrodmann/deox/commit/dd5889d))

# [1.3.0](https://github.com/thebrodmann/deox/compare/v1.2.1...v1.3.0) (2019-04-02)


### Features

* add ActionType helper ([0b2906a](https://github.com/thebrodmann/deox/commit/0b2906a))
* export ActionType in public API ([f349705](https://github.com/thebrodmann/deox/commit/f349705))
* export configureStore from redux-starter-kit ([2499a02](https://github.com/thebrodmann/deox/commit/2499a02)), closes [#9](https://github.com/thebrodmann/deox/issues/9)

## [1.2.1](https://github.com/thebrodmann/deox/compare/v1.2.0...v1.2.1) (2019-03-25)


### Bug Fixes

* export DeepImmutable* types ([c9d0b3b](https://github.com/thebrodmann/deox/commit/c9d0b3b)), closes [#21](https://github.com/thebrodmann/deox/issues/21)

# [1.2.0](https://github.com/thebrodmann/deox/compare/v1.1.1...v1.2.0) (2019-03-18)


### Features

* add generic type capability to action creator ([4044db2](https://github.com/thebrodmann/deox/commit/4044db2))

## [1.1.1](https://github.com/thebrodmann/deox/compare/v1.1.0...v1.1.1) (2019-02-20)


### Bug Fixes

* attach non-undefined falsy values to payload and meta of action ([1fd8ed8](https://github.com/thebrodmann/deox/commit/1fd8ed8)), closes [#15](https://github.com/thebrodmann/deox/issues/15)

# [1.1.0](https://github.com/thebrodmann/deox/compare/v1.0.2...v1.1.0) (2019-02-14)


### Features

* add ofType operator ([63fb590](https://github.com/thebrodmann/deox/commit/63fb590)), closes [#11](https://github.com/thebrodmann/deox/issues/11)
* deep immutable reducer type state ([de98e30](https://github.com/thebrodmann/deox/commit/de98e30)), closes [#3](https://github.com/thebrodmann/deox/issues/3)

## [1.0.2](https://github.com/thebrodmann/deox/compare/v1.0.1...v1.0.2) (2019-01-21)


### Bug Fixes

* convert types.d.ts to types.ts ([852e196](https://github.com/thebrodmann/deox/commit/852e196)), closes [#5](https://github.com/thebrodmann/deox/issues/5)

## [1.0.1](https://github.com/thebrodmann/deox/compare/v1.0.0...v1.0.1) (2019-01-20)


### Bug Fixes

* publish new README.md ([258bfc9](https://github.com/thebrodmann/deox/commit/258bfc9))
