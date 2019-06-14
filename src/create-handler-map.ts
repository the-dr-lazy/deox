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

export type CreateHandlerMap<TPrevState> = <
  TActionCreator extends ActionCreator<string>,
  TNextState extends TPrevState,
  TAction extends AnyAction = TActionCreator extends (...args: any[]) => infer T
    ? T
    : never
>(
  actionCreators: TActionCreator | TActionCreator[],
  handler: Handler<TPrevState, TAction, TNextState>
) => HandlerMap<TPrevState, TAction, TNextState>

/**
 * Handler map factory
 * @description create an action(s) to reducer map
 * @example
 * createHandlerMap(increment, (state: number) => state + 1)
 * @example
 * createHandlerMap([increment, increase], (state: number) => state + 1)
 */
export function createHandlerMap<
  TActionCreator extends ActionCreator<string>,
  TPrevState,
  TNextState extends TPrevState,
  TAction extends AnyAction = TActionCreator extends (...args: any[]) => infer T
    ? T
    : never
>(
  actionCreators: TActionCreator | TActionCreator[],
  handler: Handler<TPrevState, TAction, TNextState>
) {
  return (Array.isArray(actionCreators) ? actionCreators : [actionCreators])
    .map(getType)
    .reduce<HandlerMap<TPrevState, TAction, TNextState>>(
      (acc, type) => {
        acc[type] = handler
        return acc
      },
      {} as any
    )
}
