import { createReducer } from '../create-reducer'
import { createActionCreator } from '../create-action-creator'
import { DeepImmutable } from '../types'

// @dts-jest:group createReducer
{
  const increment = createActionCreator('INCREMENT')
  const decrement = createActionCreator('DECREMENT')
  const reset = createActionCreator('RESET', resolve => (count: number) =>
    resolve(count)
  )

  // @dts-jest:pass:snap counter scenario
  createReducer(0, handleAction => [
    handleAction(increment, state => state + 1),
    handleAction(decrement, state => state + 1),
    handleAction(reset, (_state, { payload }) => payload),
  ])
}

{
  type Item = { name: string }
  type ItemsState = Item[]

  const identity = createActionCreator('IDENTITY')
  const addItem = createActionCreator('ADD_ITEM', resolve => (name: string) =>
    resolve(name)
  )
  const removeItem = createActionCreator(
    'REMOVE_ITEM',
    resolve => (name: string) => resolve(name)
  )

  // @dts-jest:pass:snap mutable items list scenario
  createReducer(<ItemsState>[], handleAction => [
    handleAction(identity, state => state),
    handleAction(addItem, (state, { payload }) => [
      ...state,
      { name: payload },
    ]),
    handleAction(removeItem, (state, { payload }) =>
      state.filter(({ name }) => name !== payload)
    ),
  ])
}

{
  type Item = { name: string }
  type ItemsState = DeepImmutable<Item[]>

  const identity = createActionCreator('IDENTITY')
  const addItem = createActionCreator('ADD_ITEM', resolve => (name: string) =>
    resolve(name)
  )
  const removeItem = createActionCreator(
    'REMOVE_ITEM',
    resolve => (name: string) => resolve(name)
  )

  // @dts-jest:pass:snap immutable items list scenario
  createReducer(<ItemsState>[], handleAction => [
    handleAction(identity, state => state),
    handleAction(addItem, (state, { payload }) => [
      ...state,
      { name: payload },
    ]),
    handleAction(removeItem, (state, { payload }) =>
      state.filter(({ name }) => name !== payload)
    ),
  ])
}
