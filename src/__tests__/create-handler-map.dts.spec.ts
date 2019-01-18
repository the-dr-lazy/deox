import { createAction } from '../create-action'
import { createHandlerMap as handle } from '../create-handler-map'

// @dts-jest:group createHandlerMap

const increment = createAction('[Counter] increment')
const increase = createAction('[Counter] increase')

// @dts-jest:pass:snap
handle(increment, (state: number) => state + 1)

// @dts-jest:pass:snap
handle([increment, increase], (state: number) => state + 1)
