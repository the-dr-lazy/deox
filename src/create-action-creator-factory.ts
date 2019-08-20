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


interface ActionCreatorFactoryMapper {
  [key: string]: Executor;
}

type ActionTypesMap<TMapper extends ActionCreatorFactoryMapper> = {
  [TKey in keyof TMapper]: string;
};

type ActionCreatorMap<
  TMapper extends ActionCreatorFactoryMapper,
  TNames extends ActionTypesMap<TMapper>
  > = {
  [TKey in keyof TMapper]: {
    (...args: Parameters<ReturnType<TMapper[TKey]>>): ReplaceActionType<
      ReturnType<ReturnType<TMapper[TKey]>>,
      TNames[TKey]
    >;
    type: TNames[TKey];
    toString(): TNames[TKey];
  };
};

export function createActionCreatorFactory<TMapper extends ActionCreatorFactoryMapper>(
  mapper: TMapper
) {
  return <TActionTypes extends ActionTypesMap<TMapper>>(names: TActionTypes) =>
    Object.keys(mapper).reduce<
      Partial<ActionCreatorMap<TMapper, TActionTypes>>
    >((result, key) => Object.assign(
      result, { [key]: createActionCreator(names[key], mapper[key]) }
    ), {}) as ActionCreatorMap<TMapper, TActionTypes>;
}
