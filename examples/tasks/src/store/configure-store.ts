import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { root as reducer } from './root'

export function configureStore() {
  const store = createStore(reducer, composeWithDevTools())

  return store
}
