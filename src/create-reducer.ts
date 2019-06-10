import {
  createHandlerMap,
  CreateHandlerMap,
  HandlerMap,
  InferActionFromHandlerMap,
  InferNextStateFromHandlerMap,
} from './create-handler-map'
import { merge } from './utils'

/**
 * Reducer factory
 * @description combines multiple handler map into single reducer
 * @example
 * const counter = createReducer(0, handleAction => [
 *   handleAction(increment, state => state + 1),
 *   handleAction(decrement, state => state - 1),
 * ])
 */
export function createReducer<
  TPrevState,
  THandlerMap extends HandlerMap<TPrevState, any, any>
>(
  defaultState: TPrevState,
  handlerMapsCreator: (handle: CreateHandlerMap<TPrevState>) => THandlerMap[]
) {
  const handlerMap = merge(...handlerMapsCreator(createHandlerMap))

  return (
    state = defaultState,
    action: InferActionFromHandlerMap<THandlerMap>
  ): InferNextStateFromHandlerMap<THandlerMap> => {
    const handler = handlerMap[action.type]

    return handler ? handler(<any>state, action) : state
  }
}
