import {
  createHandlerMap,
  CreateHandlerMap,
  HandlerMap,
  InferActionFromHandlerMap,
  InferNextStateFromHandlerMap,
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
  TPrevState,
  THandlerMap extends HandlerMap<DeepImmutable<TPrevState>, any, any>
>(
  defaultState: TPrevState,
  handlerMapsCreator: (
    handle: CreateHandlerMap<DeepImmutable<TPrevState>>
  ) => THandlerMap[]
) {
  const handlerMap = merge(...handlerMapsCreator(createHandlerMap))

  return (
    state = <DeepImmutable<TPrevState>>defaultState,
    action: InferActionFromHandlerMap<THandlerMap>
  ): InferNextStateFromHandlerMap<THandlerMap> => {
    const handler = handlerMap[action.type]

    return handler ? handler(<any>state, action) : state
  }
}
