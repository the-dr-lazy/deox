import { createActionCreator } from '../create-action-creator'
import { createHandlerMap as handle, othersHandlerKey } from '../create-handler-map'

describe('createHandlerMap', () => {
    it('should belong one action to one handler', () => {
        const increment = createActionCreator('[Counter] increment')

        expect(handle(increment, (state: number) => state + 1)).toMatchSnapshot()
    })

    it('should belong multiple actions to one handler', () => {
        const increment = createActionCreator('[Counter] increment')
        const increase = createActionCreator('[Counter] increase')

        expect(handle([increment, increase], (state: number) => state + 1)).toMatchSnapshot()
    })

    it('should put the "others" handler by "default" key', () => {
        const reducer = (state: number) => state + 1
        expect(handle.others(reducer)).toEqual({ [othersHandlerKey]: reducer })
    })
})
