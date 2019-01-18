import { createAction } from '../create-action'
import { createHandlerMap as handle } from '../create-handler-map'

describe('createHandlerMap', () => {
  it('should belong one action to one handler', () => {
    const increment = createAction('[Counter] increment')

    expect(handle(increment, (state: number) => state + 1)).toMatchSnapshot()
  })

  it('should belong multiple actions to one handler', () => {
    const increment = createAction('[Counter] increment')
    const increase = createAction('[Counter] increase')

    expect(
      handle([increment, increase], (state: number) => state + 1)
    ).toMatchSnapshot()
  })
})
