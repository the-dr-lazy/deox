import { RootState } from './root'
import * as fromTasks from './tasks'

export const getAllTasks = (state: RootState) =>
  fromTasks.getAllTasks(state.tasks)
