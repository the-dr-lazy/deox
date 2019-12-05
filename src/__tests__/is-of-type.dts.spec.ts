import { isOfType } from '../is-of-type'
import { createActionCreator } from '../create-action-creator'

// @dts-jest:group isOfType

const increment = createActionCreator('[Counter] increment')
const decrement = createActionCreator('[Counter] decrement')
const reset = createActionCreator(
  '[Counter] reset',
  resolve => (value: number) => resolve(value)
)

{
  // @dts-jest:pass:snap
  isOfType(increment.type, increment())

  // @dts-jest:pass:snap
  isOfType([increment.type, reset.type], decrement())

  // @dts-jest:pass:snap
  isOfType(reset(0), reset(1))

  // @dts-jest:pass:snap
  isOfType([increment(), decrement(), reset(0)], increment())

  // @dts-jest:pass:snap
  isOfType(decrement, increment())

  // @dts-jest:pass:snap
  isOfType([decrement, reset], reset(0))

  // @dts-jest:pass:snap
  isOfType([increment.type, decrement(), reset], increment())

  // @dts-jest:pass:snap
  isOfType([increment.type, reset], decrement())

  // @dts-jest:pass:snap
  isOfType(decrement.type)(increment())

  // @dts-jest:pass:snap
  isOfType([decrement.type, reset.type])(reset(0))

  // @dts-jest:pass:snap
  isOfType(increment())(increment())

  // @dts-jest:pass:snap
  isOfType([increment(), reset(0)])(decrement())

  // @dts-jest:pass:snap
  isOfType(reset)(reset(0))

  // @dts-jest:pass:snap
  isOfType([increment, decrement, reset])(increment())

  // @dts-jest:pass:snap
  isOfType([increment(), decrement, reset.type])(increment())

  // @dts-jest:pass:snap
  isOfType([increment(), reset.type])(decrement())
}

{
  const incrementAction = increment()
  const resetAction = reset(0)

  if (isOfType([increment.type, decrement(), reset], incrementAction)) {
    // @dts-jest:pass:snap
    incrementAction // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement(), reset])(resetAction)) {
    // @dts-jest:pass:snap
    resetAction // tslint:disable-line:no-unused-expression
  }
}
