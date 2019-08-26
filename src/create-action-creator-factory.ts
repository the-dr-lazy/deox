import { Action } from './create-action'
import { createActionCreator } from './create-action-creator'

type ReplaceActionType<
  TAction extends Action<string>,
  TNewType extends string
> = TAction extends Action<string, infer P, infer M>
  ? Action<TNewType, P, M>
  : (TAction extends Action<string, infer P>
    ? Action<TNewType, P>
    : (TAction extends Action<string, undefined, infer M>
      ? Action<TNewType, undefined, M>
      : Action<TNewType>));

type Executor = (
  resolve: <TPayload = undefined, TMeta = undefined>(
    payload?: TPayload,
    meta?: TMeta
  ) => Action<string, TPayload, TMeta>
) => (...args: any) => Action<string>;

type CreatorMap = Record<string, Executor>;
type ActionTypeMap<T> = Record<keyof T, string>;

type ActionCreatorMap<
  TCreators extends CreatorMap,
  TActionTypes extends ActionTypeMap<TCreators>
> = {
  readonly [TKey in keyof TCreators]: {
    (...args: Parameters<ReturnType<TCreators[TKey]>>): ReplaceActionType<
      ReturnType<ReturnType<TCreators[TKey]>>,
      TActionTypes[TKey]
    >;
    type: TActionTypes[TKey];
    toString(): TActionTypes[TKey];
  };
};

type ActionCreatorFactory<TCreators extends CreatorMap> = <
  TActionTypes extends ActionTypeMap<TCreators>
>(
  types: TActionTypes
) => ActionCreatorMap<TCreators, TActionTypes>;

export function createActionCreatorFactory<TCreators extends CreatorMap>(
  creators: TCreators
): ActionCreatorFactory<TCreators> {
  return <TActionTypes extends Record<keyof TCreators, string>>(
    types: TActionTypes
  ) => {
    return Object.keys(creators).reduce((result, key) => {
      return Object.assign(result, {
        [key]: createActionCreator(types[key], creators[key]),
      });
    }, {}) as ActionCreatorMap<TCreators, TActionTypes>;
  };
}
