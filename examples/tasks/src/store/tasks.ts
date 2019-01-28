import { createAction, createReducer } from 'deox'
import {
  assoc,
  dissoc,
  evolve,
  mergeDeepLeft,
  not,
  pickBy,
  pipe,
  prop,
  without,
} from 'ramda'
import { uuid } from '~/utils'

export type Task = {
  id: string
  title: string
  description: string
  isFinished: boolean
}

export type TasksState = {
  byId: { [key: string]: Task }
  allIds: string[]
}

export const addTask = createAction(
  '[Tasks] add',
  resolve => ({
    title,
    description,
    isFinished = false,
  }: {
    title: string
    description: string
    isFinished?: boolean
  }) => resolve({ title, description, isFinished, id: uuid() } as Task)
)
export const removeTask = createAction(
  '[Tasks] remove',
  resolve => (id: string) => resolve(id)
)
export const editTask = createAction(
  '[Tasks] edit',
  resolve => (targetId: string, update: Omit<Partial<Task>, 'id'>) =>
    resolve({ [targetId]: update })
)
export const removeFinishedTasks = createAction('[Tasks] remove finished')

const defaultState: TasksState = {
  byId: {},
  allIds: [],
}

export const tasks = createReducer(defaultState, handleAction => [
  handleAction(addTask, (state, { payload }) => ({
    byId: assoc(payload.id, payload, state.byId),
    allIds: [...state.allIds, payload.id],
  })),
  handleAction(removeTask, (state, { payload }) => ({
    byId: dissoc(payload, state.byId),
    allIds: without([payload], state.allIds),
  })),
  handleAction(editTask, (state, { payload }) =>
    evolve({ byId: mergeDeepLeft(payload) }, state)
  ),
  handleAction(removeFinishedTasks, state => {
    const byId = <TasksState['byId']>pickBy(
      pipe(
        prop<Task, 'isFinished'>('isFinished'),
        not
      ),
      state.byId
    )

    return {
      byId,
      allIds: Object.keys(byId),
    }
  }),
])

export const getAllTasks = (state: TasksState) =>
  state.allIds.map(id => state.byId[id])
