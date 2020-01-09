import * as Redux from 'redux'

import { isOfType } from '../is-of-type'
import { AnyAction } from '../create-action'
import { createActionCreator } from '../create-action-creator'
import { ActionType } from '../types'

// @dts-jest:group isOfType

const increment = createActionCreator('[Counter] increment')
const decrement = createActionCreator('[Counter] decrement')
const reset = createActionCreator(
  '[Counter] reset',
  resolve => (value: number) => resolve(value)
)

declare const actions1: any[]
declare const actions2: Redux.Action[]
declare const actions3: AnyAction[]
declare const actions4: Array<
  | ActionType<typeof increment>
  | ActionType<typeof decrement>
  | ActionType<typeof reset>
>

declare const action1: any
declare const action2: Redux.Action
declare const action3: AnyAction
declare const action4:
  | ActionType<typeof increment>
  | ActionType<typeof decrement>
  | ActionType<typeof reset>

{
  // @dts-jest:pass:snap
  actions1.filter(isOfType(increment.type))

  // @dts-jest:pass:snap
  actions1.filter(isOfType([increment.type, decrement.type]))

  // @dts-jest:pass:snap
  actions1.filter(isOfType(decrement()))

  // @dts-jest:pass:snap
  actions1.filter(isOfType([decrement(), reset(0)]))

  // @dts-jest:pass:snap
  actions1.filter(isOfType(reset))

  // @dts-jest:pass:snap
  actions1.filter(isOfType([reset, increment]))

  // @dts-jest:pass:snap
  actions1.filter(isOfType([increment.type, decrement(), reset]))
}

{
  // @dts-jest:pass:snap
  actions2.filter(isOfType(increment.type))

  // @dts-jest:pass:snap
  actions2.filter(isOfType([increment.type, decrement.type]))

  // @dts-jest:pass:snap
  actions2.filter(isOfType(decrement()))

  // @dts-jest:pass:snap
  actions2.filter(isOfType([decrement(), reset(0)]))

  // @dts-jest:pass:snap
  actions2.filter(isOfType(reset))

  // @dts-jest:pass:snap
  actions2.filter(isOfType([reset, increment]))

  // @dts-jest:pass:snap
  actions2.filter(isOfType([increment.type, decrement(), reset]))
}

{
  // @dts-jest:pass:snap
  actions3.filter(isOfType(increment.type))

  // @dts-jest:pass:snap
  actions3.filter(isOfType([increment.type, decrement.type]))

  // @dts-jest:pass:snap
  actions3.filter(isOfType(decrement()))

  // @dts-jest:pass:snap
  actions3.filter(isOfType([decrement(), reset(0)]))

  // @dts-jest:pass:snap
  actions3.filter(isOfType(reset))

  // @dts-jest:pass:snap
  actions3.filter(isOfType([reset, increment]))

  // @dts-jest:pass:snap
  actions3.filter(isOfType([increment.type, decrement(), reset]))
}

{
  // @dts-jest:pass:snap
  actions4.filter(isOfType(increment.type))

  // @dts-jest:pass:snap
  actions4.filter(isOfType([increment.type, decrement.type]))

  // @dts-jest:pass:snap
  actions4.filter(isOfType(decrement()))

  // @dts-jest:pass:snap
  actions4.filter(isOfType([decrement(), reset(0)]))

  // @dts-jest:pass:snap
  actions4.filter(isOfType(reset))

  // @dts-jest:pass:snap
  actions4.filter(isOfType([reset, increment]))

  // @dts-jest:pass:snap
  actions4.filter(isOfType([increment.type, decrement(), reset]))
}

{
  if (isOfType(increment.type, action1)) {
    // @dts-jest:pass:snap
    action1 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement.type], action1)) {
    // @dts-jest:pass:snap
    action1 // tslint:disable-line:no-unused-expression
  }

  if (isOfType(decrement())(action1)) {
    // @dts-jest:pass:snap
    action1 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([decrement(), reset(0)])(action1)) {
    // @dts-jest:pass:snap
    action1 // tslint:disable-line:no-unused-expression
  }

  if (isOfType(reset)(action1)) {
    // @dts-jest:pass:snap
    action1 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([reset, increment], action1)) {
    // @dts-jest:pass:snap
    action1 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement(), reset])(action1)) {
    // @dts-jest:pass:snap
    action1 // tslint:disable-line:no-unused-expression
  }
}

{
  if (isOfType(increment.type, action2)) {
    // @dts-jest:pass:snap
    action2 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement.type], action2)) {
    // @dts-jest:pass:snap
    action2 // tslint:disable-line:no-unused-expression
  }

  if (isOfType(decrement())(action2)) {
    // @dts-jest:pass:snap
    action2 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([decrement(), reset(0)])(action2)) {
    // @dts-jest:pass:snap
    action2 // tslint:disable-line:no-unused-expression
  }

  if (isOfType(reset)(action2)) {
    // @dts-jest:pass:snap
    action2 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([reset, increment], action2)) {
    // @dts-jest:pass:snap
    action2 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement(), reset])(action2)) {
    // @dts-jest:pass:snap
    action2 // tslint:disable-line:no-unused-expression
  }
}

{
  if (isOfType(increment.type, action3)) {
    // @dts-jest:pass:snap
    action3 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement.type], action3)) {
    // @dts-jest:pass:snap
    action3 // tslint:disable-line:no-unused-expression
  }

  if (isOfType(decrement())(action3)) {
    // @dts-jest:pass:snap
    action3 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([decrement(), reset(0)])(action3)) {
    // @dts-jest:pass:snap
    action3 // tslint:disable-line:no-unused-expression
  }

  if (isOfType(reset)(action3)) {
    // @dts-jest:pass:snap
    action3 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([reset, increment], action3)) {
    // @dts-jest:pass:snap
    action3 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement(), reset])(action3)) {
    // @dts-jest:pass:snap
    action3 // tslint:disable-line:no-unused-expression
  }
}

{
  if (isOfType(increment.type, action4)) {
    // @dts-jest:pass:snap
    action4 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement.type], action4)) {
    // @dts-jest:pass:snap
    action4 // tslint:disable-line:no-unused-expression
  }

  if (isOfType(decrement())(action4)) {
    // @dts-jest:pass:snap
    action4 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([decrement(), reset(0)])(action4)) {
    // @dts-jest:pass:snap
    action4 // tslint:disable-line:no-unused-expression
  }

  if (isOfType(reset)(action4)) {
    // @dts-jest:pass:snap
    action4 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([reset, increment], action4)) {
    // @dts-jest:pass:snap
    action4 // tslint:disable-line:no-unused-expression
  }

  if (isOfType([increment.type, decrement(), reset])(action4)) {
    // @dts-jest:pass:snap
    action4 // tslint:disable-line:no-unused-expression
  }
}
