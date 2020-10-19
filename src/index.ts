export { configureStore } from 'redux-starter-kit'

export { createAction as action, Action, AnyAction } from './create-action'
export { createActionCreator, createActionCreator as createAction, ActionCreator } from './create-action-creator'
export { getType } from './get-type'
export { createReducer } from './create-reducer'
export { ofType } from './of-type'
export { isOfType } from './is-of-type'
export { ActionType, Immutable, DeepImmutable, DeepImmutableArray, DeepImmutableMap, DeepImmutableObject } from './types'
