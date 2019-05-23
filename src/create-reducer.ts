import {
  createHandlerMap,
  CreateHandlerMap,
  HandlerMap,
} from './create-handler-map'
import { merge } from './utils'
import { DeepImmutable } from './types'

/**
 * Reducer factory
 * @description combines multiple handler map into single reducer
 * @example
 * const counter = createReducer(0, handle => [
 *   handle(increment, state => state + 1),
 *   handle(decrement, state => state - 1),
 * ])
 */
export function createReducer<
  TState,
  THandlerMap extends HandlerMap<TState, any>
>(
  defaultState: TState,
  handlerMapsCreator: (handle: CreateHandlerMap<TState>) => THandlerMap[]
) {
  const handlerMap = merge(...handlerMapsCreator(createHandlerMap))

  return (
    state = <DeepImmutable<TState>>defaultState,
    action: THandlerMap extends HandlerMap<any, infer T> ? T : never
  ) => {
    const handler = handlerMap[action.type]

    return handler ? handler(state, action) : state
  }
}
