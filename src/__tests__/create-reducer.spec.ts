import { createReducer } from '../create-reducer'
import { createActionCreator } from '../create-action-creator'
import { Action } from '../create-action'

describe('createReducer', () => {
  describe('no default handler', () => {
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
      expect(counterReducer(defaultCounterState, { type: 'NOT DEFINED' })).toBe(
        defaultCounterState
      )
    })

    it('should calls related handler of the given action', () => {
      expect(counterReducer(defaultCounterState, increment)).toBe(
        handleIncrement(defaultCounterState)
      )
      expect(handleIncrement).toBeCalledTimes(2)
      expect(handleDecrement).not.toBeCalled()
      expect(handleReset).not.toBeCalled()
    })
  })

  describe('default handler', () => {
    const resetCounter = createActionCreator('[Counter] reset')
    const drawNumber = createActionCreator(
      '[Paint] draw number',
      resolve => (payload: number) => resolve(payload)
    )

    const defaultCounterState = 0

    const handleReset = jest.fn(() => defaultCounterState);
    const handleOthers = jest.fn((state: number, { payload }: Action<string, number>) => (
      payload % 2 === 0 ? state + 1 : state
    ))

    const evenNumbersCounterReducer = createReducer(defaultCounterState, handleAction => [
      handleAction(resetCounter, handleReset),
      handleAction.others(handleOthers)
    ])

    beforeEach(() => {
      handleReset.mockReset()
      handleOthers.mockReset()
    })

    it('should initiate with default state when state is undefined', () => {
      expect(evenNumbersCounterReducer(undefined, drawNumber(4))).toBe(
        evenNumbersCounterReducer(defaultCounterState, drawNumber(4))
      )
    })

    it('should calls related handler of the given action', () => {
      expect(evenNumbersCounterReducer(5, resetCounter())).toBe(handleReset())

      expect(handleReset).toBeCalledTimes(2)
      expect(handleOthers).not.toBeCalled()
    })

    it('should calls the default handler when there is no proper handler', () => {
      const action = drawNumber(6)

      expect(evenNumbersCounterReducer(defaultCounterState, action)).toBe(
        handleOthers(defaultCounterState, action)
      )
    })
  })
})
