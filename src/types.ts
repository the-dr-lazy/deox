import { ActionCreator } from './create-action-creator'
import { Action, AnyAction } from './action'

type Primitive = undefined | null | boolean | string | number | Function

export interface DeepImmutableArray<T>
  extends ReadonlyArray<DeepImmutable<T>> {}
export interface DeepImmutableMap<K, V>
  extends ReadonlyMap<DeepImmutable<K>, DeepImmutable<V>> {}
export type DeepImmutableObject<T> = {
  readonly [K in keyof T]: DeepImmutable<T[K]>
}

export type Immutable<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<U>
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<K, V>
  : T extends ReadonlyArray<any>
  ? T
  : T extends ReadonlyMap<any, any>
  ? T
  : Readonly<T>

export type DeepImmutable<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? DeepImmutableArray<U>
  : T extends Map<infer K, infer V>
  ? DeepImmutableMap<K, V>
  : T extends ReadonlyArray<infer U>
  ? DeepImmutableArray<U>
  : T extends ReadonlyMap<infer K, infer V>
  ? DeepImmutableMap<K, V>
  : DeepImmutableObject<T>

export type Handler<
  TPrevState,
  TAction, // TODO: extend from AnyAction
  TNextState extends TPrevState = TPrevState
> = (prevState: TPrevState, action: TAction) => TNextState

export type Reducer<
  TPrevState,
  TAction, // TODO: extend from AnyAction
  TNextState extends TPrevState = TPrevState
> = (state: TPrevState | undefined, action: TAction) => TNextState

export type ActionType<
  T extends ActionCreator<AnyAction> | Reducer<any, Action<any>>
> = T extends ActionCreator<AnyAction>
  ? ReturnType<T>
  : (T extends Reducer<any, infer U> ? U : never)
