import { ActionCreator } from './create-action-creator'
import { Action } from './create-action'


type ActionCreatorFactory = (type: string) => ActionCreator<string>;

interface ActionCreatorFactoryMapper {
  [key: string]: ActionCreatorFactory;
}

type ActionTypesMap<TMapper extends ActionCreatorFactoryMapper> = {
  [TKey in keyof TMapper]: string;
};

type ArgumentTypes<T> = T extends (...args: infer U) => any ? U : never;
type ReplaceCreatorType<TCreator, TNewType extends string> = TCreator extends (
  ...a: ArgumentTypes<TCreator>
  ) => infer A
  ? A extends Action<string, infer P, infer M>
    ? (...a: ArgumentTypes<TCreator>) => Action<TNewType, P, M>
    : (A extends Action<string, infer P>
      ? (...a: ArgumentTypes<TCreator>) => Action<TNewType, P>
      : (...a: ArgumentTypes<TCreator>) => A)
  : never;

type ActionCreatorMap<
  TMapper extends ActionCreatorFactoryMapper,
  TNames extends ActionTypesMap<TMapper>
  > = {
  [TKey in keyof TMapper]: ReplaceCreatorType<
    ReturnType<TMapper[TKey]>,
    TNames[TKey]
    >;
};

export function createActionCreatorFactory<TMapper extends ActionCreatorFactoryMapper>(
  mapper: TMapper
) {
  return <TActionTypes extends ActionTypesMap<TMapper>>(names: TActionTypes) =>
    Object.keys(mapper).reduce<
      Partial<ActionCreatorMap<TMapper, TActionTypes>>
      >((result, key) => {
      return Object.assign(result, { [key]: mapper[key](names[key]) });
    }, {}) as ActionCreatorMap<TMapper, TActionTypes>;
}
