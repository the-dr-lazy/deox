import { createActionCreator } from '../create-action-creator'
import { createHandlerMap as handle } from '../create-handler-map'

// @dts-jest:group createHandlerMap

const increment = createActionCreator('[Counter] increment')
const increase = createActionCreator('[Counter] increase')

// @dts-jest:pass:snap
handle(increment, (state: number) => state + 1)

// @dts-jest:pass:snap
handle([increment, increase], (state: number) => state + 1)
