import { createReducer } from '../create-reducer'
import { createActionCreator } from '../create-action-creator'

describe('createReducer', () => {
  const increment = createActionCreator('[Counter] increment')
  const decrement = createActionCreator('[Counter] decrement')
  const reset = createActionCreator(
    '[Counter] reset',
    resolve => (value: number) => resolve(value)
  )

  const handleIncrement = jest.fn((state: number) => state + 1)
  const handleDecrement = jest.fn((state: number) => state - 1)
  const handleReset = jest.fn(
    (_: number, { payload }: ReturnType<typeof reset>) => payload
  )

  const defaultState = 0
  const counter = createReducer(defaultState, handle => [
    handle(increment, handleIncrement),
    handle(decrement, handleDecrement),
    handle(reset, handleReset),
  ])

  beforeEach(() => {
    handleIncrement.mockReset()
    handleDecrement.mockReset()
    handleReset.mockReset()
  })

  it('should initiate with default state when state is undefined', () => {
    expect(counter(undefined, increment())).toBe(
      counter(defaultState, increment())
    )
  })

  it('should pass through state when there is no proper handler', () => {
    expect(counter(defaultState, { type: 'NOT DEFINED' } as any)).toBe(
      defaultState
    )
  })

  it('should calls related handler of the given action', () => {
    expect(counter(defaultState, increment)).toBe(handleIncrement(defaultState))
    expect(handleIncrement).toBeCalledTimes(2)
    expect(handleDecrement).not.toBeCalled()
    expect(handleReset).not.toBeCalled()
  })
})
