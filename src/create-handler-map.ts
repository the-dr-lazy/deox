import { ActionCreator } from './create-action-creator'
import { AnyAction } from './create-action'
import { getType } from './get-type'
import { Handler } from './types'

export const othersHandlerKey = Symbol('others');

type CustomHandlerMap<
  TPrevState,
  TAction extends AnyAction,
  TNextState extends TPrevState = TPrevState
> = { [type in TAction['type']]: Handler<TPrevState, TAction, TNextState> }

type OthersHandlerMap<
  TPrevState,
  TAction extends AnyAction,
  TNextState extends TPrevState = TPrevState
> = { [othersHandlerKey]: Handler<TPrevState, TAction, TNextState> }

export type HandlerMap<
  TPrevState,
  TAction extends AnyAction,
  TNextState extends TPrevState = TPrevState
> =
  | CustomHandlerMap<TPrevState, TAction, TNextState>
  | OthersHandlerMap<TPrevState, TAction, TNextState>

export type MergedHandlerMap<
  TPrevState,
  TAction extends AnyAction,
  TNextState extends TPrevState = TPrevState
> = CustomHandlerMap<TPrevState, TAction, TNextState> &
  OthersHandlerMap<TPrevState, TAction, TNextState>

export type InferActionFromHandlerMap<
  THandlerMap extends HandlerMap<any, any>
> = THandlerMap extends CustomHandlerMap<any, infer T> ? T : never

export type InferNextStateFromHandlerMap<
  THandlerMap extends HandlerMap<any, any>
> = THandlerMap extends CustomHandlerMap<any, any, infer T> ? T : never

type InferActionFromCreator<TActionCreator> = TActionCreator extends (...args: any[]) => infer T ? T : never

type CreateOthersHandler<TPrevState> = <
  TActionCreator extends ActionCreator<any>,
  TNextState extends TPrevState,
  TAction extends AnyAction = InferActionFromCreator<TActionCreator>
  >(
  handler: Handler<TPrevState, TAction, TNextState>
) => OthersHandlerMap<TPrevState, TAction, TNextState>

type CreateCustomHandlerMap<TPrevState> = <
  TActionCreator extends ActionCreator<any>,
  TNextState extends TPrevState,
  TAction extends AnyAction = InferActionFromCreator<TActionCreator>
  >(
  actionCreators: TActionCreator | TActionCreator[],
  handler: Handler<TPrevState, TAction, TNextState>
) => CustomHandlerMap<TPrevState, TAction, TNextState>

export type CreateHandlerMap<TPrevState> = CreateCustomHandlerMap<TPrevState> & {
  others: CreateOthersHandler<TPrevState>
}

/**
 * Handler map factory
 * @description create an action(s) to reducer map
 * @example
 * createHandlerMap(increment, (state: number) => state + 1)
 * @example
 * createHandlerMap([increment, increase], (state: number) => state + 1)
 * @example
 * createHandlerMap.others((state: number) => state + 1)
 */
export function createHandlerMap<
  TActionCreator extends ActionCreator<any>,
  TPrevState,
  TNextState extends TPrevState,
  TAction extends AnyAction = InferActionFromCreator<TActionCreator>
>(
  actionCreators: TActionCreator | TActionCreator[],
  handler: Handler<TPrevState, TAction, TNextState>
): CustomHandlerMap<TPrevState, TAction, TNextState> {
  return (Array.isArray(actionCreators) ? actionCreators : [actionCreators])
    .map(getType)
    .reduce<CustomHandlerMap<TPrevState, TAction, TNextState>>((acc, type) => {
      acc[type] = handler
      return acc
    }, {} as any)
}

createHandlerMap.others = createOthersHandlerMap

function createOthersHandlerMap<
  TActionCreator extends ActionCreator<any>,
  TPrevState,
  TNextState extends TPrevState,
  TAction extends AnyAction = InferActionFromCreator<TActionCreator>
>(
  handler: Handler<TPrevState, TAction, TNextState>
): OthersHandlerMap<TPrevState, TAction, TNextState> {
  return { [othersHandlerKey]: handler }
}
