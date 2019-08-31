import { action, Action } from "deox";

export type Resolver<TType extends string> = <
  TPayload = undefined,
  TMeta = undefined
  >(
  payload?: TPayload,
  meta?: TMeta
) => Action<TType, TPayload, TMeta>;

type ActionProducer<TType extends string> = (...args: any) => Action<TType>;

type FactoryActionCreator<
  TType extends string,
  TProducer extends ActionProducer<TType>
  > = TProducer & { type: TType; toString(): TType };

type Executor<TType extends string, TProducer extends ActionProducer<TType>> = (
  resolve: Resolver<TType>
) => TProducer;

type ActionCreatorProducer<
  TType extends string,
  TProducer extends ActionProducer<TType>
  > = (type: TType) => FactoryActionCreator<TType, TProducer>;

export type ExecutorHandler = <
  TType extends string,
  TProducer extends ActionProducer<TType>
  >(
  executor: Executor<TType, TProducer>
) => ActionCreatorProducer<TType, TProducer>;

type CreatorMap = Record<string, any>;

type ActionProducerMap<T extends CreatorMap> = {
  [key in keyof T]: (creator: T[key]) => FactoryActionCreator<string, any>;
};

type ResolverCreator = <TType extends string>(type: TType) => Resolver<TType>;

type ActionCreatorMap<
  TCreators extends CreatorMap,
  TActionTypes extends ActionProducerMap<TCreators>
  > = {
  readonly [TKey in keyof TCreators]: ReturnType<TActionTypes[TKey]>;
};

type ActionCreatorFactory<TCreators extends CreatorMap> = <
  TActionTypes extends ActionProducerMap<TCreators>
  >(
  types: TActionTypes
) => ActionCreatorMap<TCreators, TActionTypes>;

export function createActionCreatorFactory<TCreators extends CreatorMap>(
  creators: (handler: ExecutorHandler) => TCreators
): ActionCreatorFactory<TCreators> {
  return <TActionTypes extends ActionProducerMap<TCreators>>(
    types: TActionTypes
  ) => {
    const resolverCreator: ResolverCreator = (type) => (payload, meta) => {
      return action(type, payload!, meta!);
    };

    const factories = creators((executor) => (type) =>
      Object.assign(executor(resolverCreator(type)), {
        type,
        toString: () => type,
      })
    );
    const keys = Object.keys(factories) as (Extract<keyof TCreators, string>)[];
    return keys.reduce((result, key) => {
      return Object.assign(result, {
        [key]: types[key](factories[key]),
      });
    }, {}) as ActionCreatorMap<TCreators, TActionTypes>;
  };
}
