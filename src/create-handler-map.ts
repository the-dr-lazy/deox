import { ActionCreator } from './create-action-creator'
import { AnyAction } from './create-action'
import { getType } from './get-type'
import { Handler } from './types'

export type HandlerMap<
  TPrevState,
  TAction extends AnyAction,
  TNextState extends TPrevState = TPrevState
> = { [type in TAction['type']]: Handler<TPrevState, TAction, TNextState> }

export type InferActionFromHandlerMap<
  THandlerMap extends HandlerMap<any, any>
> = THandlerMap extends HandlerMap<any, infer T> ? T : never

export type InferNextStateFromHandlerMap<
  THandlerMap extends HandlerMap<any, any>
> = THandlerMap extends HandlerMap<any, any, infer T> ? T : never

type InferActionFromCreator<TActionCreator> = TActionCreator extends (...args: any[]) => infer T ? T : never

type CreateDefaultHandler<TPrevState> = <
  TActionCreator extends ActionCreator<any>,
  TNextState extends TPrevState,
  TAction extends AnyAction = InferActionFromCreator<TActionCreator>
  >(
  handler: Handler<TPrevState, TAction, TNextState>
) => { default: Handler<TPrevState, TAction, TNextState> }

type CreateCustomHandlerMap<TPrevState> = <
  TActionCreator extends ActionCreator<any>,
  TNextState extends TPrevState,
  TAction extends AnyAction = InferActionFromCreator<TActionCreator>
  >(
  actionCreators: TActionCreator | TActionCreator[],
  handler: Handler<TPrevState, TAction, TNextState>
) => HandlerMap<TPrevState, TAction, TNextState>

export type CreateHandlerMap<TPrevState> = CreateCustomHandlerMap<TPrevState> & {
  default: CreateDefaultHandler<TPrevState>
}

/**
 * Handler map factory
 * @description create an action(s) to reducer map
 * @example
 * createHandlerMap(increment, (state: number) => state + 1)
 * @example
 * createHandlerMap([increment, increase], (state: number) => state + 1)
 * @example
 * createHandlerMap.default((state: number) => state + 1)
 */
export const createHandlerMap = Object.assign(
  <
    TActionCreator extends ActionCreator<any>,
    TPrevState,
    TNextState extends TPrevState,
    TAction extends AnyAction = InferActionFromCreator<TActionCreator>
    >(
    actionCreators: TActionCreator | TActionCreator[],
    handler: Handler<TPrevState, TAction, TNextState>
  ) => {
    return (Array.isArray(actionCreators) ? actionCreators : [actionCreators])
      .map(getType)
      .reduce<HandlerMap<TPrevState, TAction, TNextState>>((acc, type) => {
        acc[type] = handler
        return acc
      }, {} as any)
  },
  {
    default: <TActionCreator extends ActionCreator<any>,
      TPrevState,
      TNextState extends TPrevState,
      TAction extends AnyAction = InferActionFromCreator<TActionCreator>
      >(
      handler: Handler<TPrevState, TAction, TNextState>
    ) => ({ default: handler })
  }
)
