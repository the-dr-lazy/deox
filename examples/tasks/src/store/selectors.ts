import { RootState } from './root'
import * as fromTasks from './tasks'
import * as fromSnackbar from './snackbar'

export const getAllTasks = (state: RootState) => fromTasks.getAllTasks(state.tasks)

export const getSnackbar = (state: RootState) => fromSnackbar.getSnackbar(state.snackbar)
