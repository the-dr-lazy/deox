import { DeepImmutable, Immutable } from '../types'

function displayType<T>(): T {
  return <any>undefined
}

type User = { name: string; age: number; children: Users; parents: Users }
type Users = User[]

// @dts-jest:group Immutable

// @dts-jest:pass:snap
displayType<Immutable<undefined>>()
// @dts-jest:pass:snap
displayType<Immutable<null>>()
// @dts-jest:pass:snap
displayType<Immutable<boolean>>()
// @dts-jest:pass:snap
displayType<Immutable<string>>()
// @dts-jest:pass:snap
displayType<Immutable<number>>()
// @dts-jest:pass:snap
displayType<Immutable<Function>>()

// @dts-jest:pass:snap
displayType<Immutable<User>>()

// @dts-jest:pass:snap
displayType<Immutable<undefined[]>>()
// @dts-jest:pass:snap
displayType<Immutable<null[]>>()
// @dts-jest:pass:snap
displayType<Immutable<boolean[]>>()
// @dts-jest:pass:snap
displayType<Immutable<string[]>>()
// @dts-jest:pass:snap
displayType<Immutable<number[]>>()
// @dts-jest:pass:snap
displayType<Immutable<Function[]>>()
// @dts-jest:pass:snap
displayType<Immutable<User[]>>()
// @dts-jest:pass:snap
displayType<Immutable<Users[]>>()

// @dts-jest:pass:snap
displayType<Immutable<Map<'undefined', undefined>>>()
// @dts-jest:pass:snap
displayType<Immutable<Map<'null', null>>>()
// @dts-jest:pass:snap
displayType<Immutable<Map<'boolean', boolean>>>()
// @dts-jest:pass:snap
displayType<Immutable<Map<'string', string>>>()
// @dts-jest:pass:snap
displayType<Immutable<Map<'number', number>>>()
// @dts-jest:pass:snap
displayType<Immutable<Map<'function', Function>>>()
// @dts-jest:pass:snap
displayType<Immutable<Map<'user', User>>>()
// @dts-jest:pass:snap
displayType<Immutable<Map<'users', Users>>>()

// @dts-jest:pass:snap
displayType<Immutable<ReadonlyArray<undefined>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyArray<null>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyArray<boolean>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyArray<string>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyArray<number>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyArray<Function>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyArray<User>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyArray<Users>>>()

// @dts-jest:pass:snap
displayType<Immutable<ReadonlyMap<'undefined', undefined>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyMap<'null', null>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyMap<'boolean', boolean>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyMap<'string', string>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyMap<'number', number>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyMap<'function', Function>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyMap<'user', User>>>()
// @dts-jest:pass:snap
displayType<Immutable<ReadonlyMap<'users', Users>>>()

// @dts-jest:group DeepImmutable

// @dts-jest:pass:snap
displayType<DeepImmutable<undefined>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<null>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<boolean>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<string>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<number>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Function>>()

// @dts-jest:pass:snap
displayType<DeepImmutable<User>>()

// @dts-jest:pass:snap
displayType<DeepImmutable<undefined[]>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<null[]>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<boolean[]>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<string[]>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<number[]>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Function[]>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<User[]>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Users[]>>()

// @dts-jest:pass:snap
displayType<DeepImmutable<Map<'undefined', undefined>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Map<'null', null>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Map<'boolean', boolean>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Map<'string', string>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Map<'number', number>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Map<'function', Function>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Map<'user', User>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<Map<'users', Users>>>()

// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyArray<undefined>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyArray<null>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyArray<boolean>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyArray<string>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyArray<number>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyArray<Function>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyArray<User>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyArray<Users>>>()

// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyMap<'undefined', undefined>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyMap<'null', null>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyMap<'boolean', boolean>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyMap<'string', string>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyMap<'number', number>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyMap<'function', Function>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyMap<'user', User>>>()
// @dts-jest:pass:snap
displayType<DeepImmutable<ReadonlyMap<'users', Users>>>()
