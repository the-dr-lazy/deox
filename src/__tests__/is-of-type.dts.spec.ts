import { isOfType } from '../is-of-type'
import { createActionCreator } from '../create-action-creator'
import { ActionType } from '../types'

// @dts-jest:group isOfType

const increment = createActionCreator('[Counter] increment')
const decrement = createActionCreator('[Counter] decrement')
const reset = createActionCreator(
  '[Counter] reset',
  resolve => (value: number) => resolve(value)
)
const actions = [increment(), decrement(), reset(0)]

declare const action:
  | ActionType<typeof increment>
  | ActionType<typeof decrement>
  | ActionType<typeof reset>

{
  // @dts-jest:pass:snap
  actions.filter(isOfType(increment.type))

  // @dts-jest:pass:snap
  actions.filter(isOfType([increment.type, decrement.type]))

  // @dts-jest:pass:snap
  actions.filter(isOfType(decrement()))

  // @dts-jest:pass:snap
  actions.filter(isOfType([decrement(), reset(0)]))

  // @dts-jest:pass:snap
  actions.filter(isOfType(reset))

  // @dts-jest:pass:snap
  actions.filter(isOfType([reset, increment]))

  // @dts-jest:pass:snap
  actions.filter(isOfType([increment.type, decrement(), reset]))
}

{
  if (isOfType(increment.type, action)) {
    // @dts-jest:pass:snap
    action // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement.type], action)) {
    // @dts-jest:pass:snap
    action // tslint:disable-line:no-unused-expression
  }

  if (isOfType(decrement())(action)) {
    // @dts-jest:pass:snap
    action // tslint:disable-line:no-unused-expression
  }

  if (isOfType([decrement(), reset(0)])(action)) {
    // @dts-jest:pass:snap
    action // tslint:disable-line:no-unused-expression
  }

  if (isOfType(reset)(action)) {
    // @dts-jest:pass:snap
    action // tslint:disable-line:no-unused-expression
  }

  if (isOfType([reset, increment], action)) {
    // @dts-jest:pass:snap
    action // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement(), reset])(action)) {
    // @dts-jest:pass:snap
    action // tslint:disable-line:no-unused-expression
  }
}
