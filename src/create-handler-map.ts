import { ActionCreator } from './create-action-creator'
import { AnyAction } from './action'
import { getType } from './get-type'
import { Reducer } from './types'

export type HandlerMap<TState, TAction extends AnyAction> = {
  [type in TAction['type']]: Reducer<TState, TAction>
}

export type InferActionFromHandlerMap<
  THandlerMap extends HandlerMap<any, any>
> = THandlerMap extends HandlerMap<any, infer T> ? T : never

export type CreateHandlerMap<TPrevState> = <
  TActionCreator extends ActionCreator<string>,
  TAction extends AnyAction = TActionCreator extends (...args: any[]) => infer T
    ? T
    : never
>(
  actionCreators: TActionCreator | TActionCreator[],
  handler: Reducer<TPrevState, TAction>
) => HandlerMap<TPrevState, TAction>

/**
 * Handler map factory
 * @description create an action(s) to reducer map
 * @example
 * createHandlerMap(increment, (state: number) => state + 1)
 * @example
 * createHandlerMap([increment, increase], (state: number) => state + 1)
 */
export const createHandlerMap = <
  TActionCreator extends ActionCreator<string>,
  TState,
  TAction extends AnyAction = TActionCreator extends (...args: any[]) => infer T
    ? T
    : never
>(
  actionCreators: TActionCreator | TActionCreator[],
  reducer: Reducer<TState, TAction>
) =>
  (Array.isArray(actionCreators) ? actionCreators : [actionCreators])
    .map(getType)
    .reduce<HandlerMap<TState, TAction>>(
      (acc, type) => {
        acc[type] = reducer
        return acc
      },
      {} as any
    )
