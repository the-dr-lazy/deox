import { createAction, createReducer } from 'deox'
import R from 'ramda'
import { uuid } from 'utils'

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
  handleAction(addTask, (state, { payload }) =>
    R.evolve(
      {
        byId: R.assoc(payload.id, payload),
        allIds: R.concat([payload.id]),
      },
      state
    )
  ),
  handleAction(removeTask, (state, { payload }) =>
    R.evolve(
      {
        byId: R.dissoc(payload),
        allIds: R.without([payload]),
      },
      state
    )
  ),
  handleAction(editTask, (state, { payload }) =>
    R.evolve({ byId: R.mergeDeepLeft(payload) }, state)
  ),
  handleAction(removeFinishedTasks, state => {
    const byId = <TasksState['byId']>R.pickBy(
      R.pipe(
        R.prop<Task, 'isFinished'>('isFinished'),
        R.not
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
