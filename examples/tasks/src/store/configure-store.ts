import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import { root as reducer, rootEpic as epic } from './root'

const epicMiddlware = createEpicMiddleware({
    dependencies: {},
})

export function configureStore() {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(epicMiddlware)))

    epicMiddlware.run(epic)

    return store
}
