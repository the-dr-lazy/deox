import { ActionCreator } from './create-action-creator'
import { AnyAction } from './action'
import { getType } from './get-type'
import { Reducer } from './types'

export type HandlerMap<State, Actions extends AnyAction> = {
  [key in Actions['type']]: Reducer<State, Actions>
}

export type CreateHandlerMap<State> = <
  AC extends ActionCreator<string>,
  Actions extends AnyAction = AC extends (...args: any[]) => infer T ? T : never
>(
  actionCreators: AC | AC[],
  handler: Reducer<State, Actions>
) => HandlerMap<State, Actions>

/**
 * Handler map factory
 * @description create an action(s) to reducer map
 * @example
 * createHandlerMap(increment, (state: number) => state + 1)
 * @example
 * createHandlerMap([increment, increase], (state: number) => state + 1)
 */
export const createHandlerMap = <
  AC extends ActionCreator<string>,
  State,
  Actions extends AnyAction = AC extends (...args: any[]) => infer T ? T : never
>(
  actionCreators: AC | AC[],
  reducer: Reducer<State, Actions>
) =>
  (Array.isArray(actionCreators) ? actionCreators : [actionCreators])
    .map(getType)
    .reduce<HandlerMap<State, Actions>>(
      (acc, type) => {
        acc[type] = reducer
        return acc
      },
      {} as any
    )
