import { isOfType } from '../is-of-type'
import { createActionCreator } from '../create-action-creator'

describe('isOfType', () => {
    const increment = createActionCreator('[Counter] increment')
    const decrement = createActionCreator('[Counter] decrement')
    const reset = createActionCreator('[Counter] reset', resolve => (value: number) => resolve(value))

    it.each`
        keys                                            | action         | expected
        ${increment.type}                               | ${increment()} | ${true}
        ${decrement.type}                               | ${increment()} | ${false}
        ${reset.type}                                   | ${reset(0)}    | ${true}
        ${[increment.type, decrement.type, reset.type]} | ${increment()} | ${true}
        ${[increment.type, reset.type]}                 | ${decrement()} | ${false}
        ${[decrement.type, reset.type]}                 | ${reset(0)}    | ${true}
        ${increment()}                                  | ${increment()} | ${true}
        ${decrement()}                                  | ${increment()} | ${false}
        ${reset(0)}                                     | ${reset(1)}    | ${true}
        ${[increment(), decrement(), reset(0)]}         | ${increment()} | ${true}
        ${[increment(), reset(0)]}                      | ${decrement()} | ${false}
        ${[decrement(), reset(1)]}                      | ${reset(0)}    | ${true}
        ${increment}                                    | ${increment()} | ${true}
        ${decrement}                                    | ${increment()} | ${false}
        ${reset}                                        | ${reset(0)}    | ${true}
        ${[increment, decrement, reset]}                | ${increment()} | ${true}
        ${[increment, reset]}                           | ${decrement()} | ${false}
        ${[decrement, reset]}                           | ${reset(0)}    | ${true}
        ${[increment.type, decrement(), reset]}         | ${increment()} | ${true}
        ${[increment(), decrement, reset.type]}         | ${increment()} | ${true}
        ${[increment, decrement.type, reset(0)]}        | ${increment()} | ${true}
        ${[increment.type, reset(0)]}                   | ${decrement()} | ${false}
        ${[increment.type, reset]}                      | ${decrement()} | ${false}
        ${[increment(), reset.type]}                    | ${decrement()} | ${false}
        ${[increment(), reset]}                         | ${decrement()} | ${false}
        ${[increment, reset.type]}                      | ${decrement()} | ${false}
        ${[increment, reset(0)]}                        | ${decrement()} | ${false}
    `('should return $expected with $keys and $action args', ({ keys, action, expected }) => {
        expect(isOfType(keys, action)).toBe(expected)
        expect(isOfType(keys)(action)).toBe(expected)
    })
})
