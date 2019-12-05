import { isOfType } from '../is-of-type'
import { createActionCreator } from '../create-action-creator'

describe('isOfType', () => {
  const increment = createActionCreator('[Counter] increment')
  const decrement = createActionCreator('[Counter] decrement')
  const reset = createActionCreator(
    '[Counter] reset',
    resolve => (value: number) => resolve(value)
  )

  it('should work with single action type arg', () => {
    expect(isOfType(increment.type, increment())).toBeTruthy()
    expect(isOfType(decrement.type, increment())).toBeFalsy()
    expect(isOfType(reset.type, reset(0))).toBeTruthy()
  })

  it('should work with multiple action type args', () => {
    expect(
      isOfType([increment.type, decrement.type, reset.type], increment())
    ).toBeTruthy()
    expect(isOfType([increment.type, reset.type], decrement())).toBeFalsy()
    expect(isOfType([decrement.type, reset.type], reset(0))).toBeTruthy()
  })

  it('should work with single action arg', () => {
    expect(isOfType(increment(), increment())).toBeTruthy()
    expect(isOfType(decrement(), increment())).toBeFalsy()
    expect(isOfType(reset(0), reset(1))).toBeTruthy()
  })

  it('should work with multiple action args', () => {
    expect(
      isOfType([increment(), decrement(), reset(0)], increment())
    ).toBeTruthy()
    expect(isOfType([increment(), reset(0)], decrement())).toBeFalsy()
    expect(isOfType([decrement(), reset(0)], reset(0))).toBeTruthy()
  })

  it('should work with single action creator', () => {
    expect(isOfType(increment, increment())).toBeTruthy()
    expect(isOfType(decrement, increment())).toBeFalsy()
    expect(isOfType(reset, reset(0))).toBeTruthy()
  })

  it('should work with multiple action creator args', () => {
    expect(isOfType([increment, decrement, reset], increment())).toBeTruthy()
    expect(isOfType([increment, reset], decrement())).toBeFalsy()
    expect(isOfType([decrement, reset], reset(0))).toBeTruthy()
  })

  it('should work with multiple action type or action or action creator args', () => {
    expect(
      isOfType([increment.type, decrement(), reset], increment())
    ).toBeTruthy()
    expect(
      isOfType([increment(), decrement, reset.type], increment())
    ).toBeTruthy()
    expect(
      isOfType([increment, decrement.type, reset(0)], increment())
    ).toBeTruthy()
    expect(isOfType([increment.type, reset(0)], decrement())).toBeFalsy()
    expect(isOfType([increment.type, reset], decrement())).toBeFalsy()
    expect(isOfType([increment(), reset.type], decrement())).toBeFalsy()
    expect(isOfType([increment(), reset], decrement())).toBeFalsy()
    expect(isOfType([increment, reset.type], decrement())).toBeFalsy()
    expect(isOfType([increment, reset(0)], decrement())).toBeFalsy()
  })

  it('should work with single action type arg (currying)', () => {
    expect(isOfType(increment.type)(increment())).toBeTruthy()
    expect(isOfType(decrement.type)(increment())).toBeFalsy()
    expect(isOfType(reset.type)(reset(0))).toBeTruthy()
  })

  it('should work with multiple action type args (currying)', () => {
    expect(
      isOfType([increment.type, decrement.type, reset.type])(increment())
    ).toBeTruthy()
    expect(isOfType([increment.type, reset.type])(decrement())).toBeFalsy()
    expect(isOfType([decrement.type, reset.type])(reset(0))).toBeTruthy()
  })

  it('should work with single action arg (currying)', () => {
    expect(isOfType(increment())(increment())).toBeTruthy()
    expect(isOfType(decrement())(increment())).toBeFalsy()
    expect(isOfType(reset(0))(reset(1))).toBeTruthy()
  })

  it('should work with multiple action args (currying)', () => {
    expect(
      isOfType([increment(), decrement(), reset(0)])(increment())
    ).toBeTruthy()
    expect(isOfType([increment(), reset(0)])(decrement())).toBeFalsy()
    expect(isOfType([decrement(), reset(0)])(reset(0))).toBeTruthy()
  })

  it('should work with single action creator (currying)', () => {
    expect(isOfType(increment)(increment())).toBeTruthy()
    expect(isOfType(decrement)(increment())).toBeFalsy()
    expect(isOfType(reset)(reset(0))).toBeTruthy()
  })

  it('should work with multiple action creator args (currying)', () => {
    expect(isOfType([increment, decrement, reset])(increment())).toBeTruthy()
    expect(isOfType([increment, reset])(decrement())).toBeFalsy()
    expect(isOfType([decrement, reset])(reset(0))).toBeTruthy()
  })

  it('should work with multiple action type or action or action creator args (currying)', () => {
    expect(
      isOfType([increment.type, decrement(), reset])(increment())
    ).toBeTruthy()
    expect(
      isOfType([increment(), decrement, reset.type])(increment())
    ).toBeTruthy()
    expect(
      isOfType([increment, decrement.type, reset(0)])(increment())
    ).toBeTruthy()
    expect(isOfType([increment.type, reset(0)])(decrement())).toBeFalsy()
    expect(isOfType([increment.type, reset])(decrement())).toBeFalsy()
    expect(isOfType([increment(), reset.type])(decrement())).toBeFalsy()
    expect(isOfType([increment(), reset])(decrement())).toBeFalsy()
    expect(isOfType([increment, reset.type])(decrement())).toBeFalsy()
    expect(isOfType([increment, reset(0)])(decrement())).toBeFalsy()
  })
})
