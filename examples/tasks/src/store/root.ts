import { combineReducers } from 'redux'

import { tasks } from './tasks'

export type RootState = ReturnType<typeof root>

export const root = combineReducers({ tasks })
