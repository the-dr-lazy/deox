import {
  createHandlerMap,
  CreateHandlerMap,
  HandlerMap,
} from './create-handler-map'
import { merge } from './utils'

/**
 * Reducer factory
 * @description combines multiple handler map into single reducer
 * @example
 * const counter = createReducer(0, handle => [
 *   handle(increment, state => state + 1),
 *   handle(decrement, state => state - 1),
 * ])
 */
export function createReducer<State, HM extends HandlerMap<State, any>>(
  defaultState: State,
  handlerMapsCreator: (handle: CreateHandlerMap<State>) => HM[]
) {
  const handlerMap = merge(...handlerMapsCreator(createHandlerMap))

  return (
    state = defaultState,
    action: HM extends HandlerMap<State, infer T> ? T : never
  ) => {
    const handler = handlerMap[action.type]

    return handler ? handler(state, action) : state
  }
}
