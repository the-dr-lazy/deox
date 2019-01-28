import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import { tasks } from './tasks'
import { snackbar, snackbarEpic } from './snackbar'

export type RootState = ReturnType<typeof root>

export const root = combineReducers({ tasks, snackbar })

export const rootEpic = combineEpics(snackbarEpic)
