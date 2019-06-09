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

  const defaultCounterState = 0
  const counterReducer = createReducer(defaultCounterState, handleAction => [
    handleAction(increment, handleIncrement),
    handleAction(decrement, handleDecrement),
    handleAction(reset, handleReset),
  ])

  beforeEach(() => {
    handleIncrement.mockReset()
    handleDecrement.mockReset()
    handleReset.mockReset()
  })

  it('should initiate with default state when state is undefined', () => {
    expect(counterReducer(undefined, increment())).toBe(
      counterReducer(defaultCounterState, increment())
    )
  })

  it('should pass through state when there is no proper handler', () => {
    expect(counterReducer(defaultCounterState, { type: 'NOT DEFINED' } as any)).toBe(
      defaultCounterState
    )
  })

  it('should calls related handler of the given action', () => {
    expect(counterReducer(defaultCounterState, increment)).toBe(handleIncrement(defaultCounterState))
    expect(handleIncrement).toBeCalledTimes(2)
    expect(handleDecrement).not.toBeCalled()
    expect(handleReset).not.toBeCalled()
  })
})
