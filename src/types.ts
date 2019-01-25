type Primitive = undefined | null | boolean | string | number | Function

interface DeepImmutableArray<T> extends ReadonlyArray<DeepImmutable<T>> {}
interface DeepImmutableMap<K, V>
  extends ReadonlyMap<DeepImmutable<K>, DeepImmutable<V>> {}
type DeepImmutableObject<T> = { readonly [K in keyof T]: DeepImmutable<T[K]> }

export type Immutable<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<U>
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<K, V>
  : Readonly<T>

export type DeepImmutable<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? DeepImmutableArray<U>
  : T extends Map<infer K, infer V>
  ? DeepImmutableMap<K, V>
  : DeepImmutableObject<T>

export type Reducer<State, Actions> = (
  prevState: DeepImmutable<State>,
  action: Actions
) => DeepImmutable<State> | State
