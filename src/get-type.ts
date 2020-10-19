/**
 * Map action creator to it's contained action type
 * @description it gets an object with at least a type property or overridden toString method and returns it.
 * @example
 * const increment = createActionCreator('[Counter] increment')
 * getType(increment) //=> '[Counter] increment'
 * @example
 * getType({ type: 'TEST' }) //=> 'TEST'
 * @example
 * getType({
 *  toString() { return 'TEST' }
 * }) //=> 'TEST'
 */
export function getType<
    TActionCreator extends { type?: string; toString(): string } | { type: string },
    TType extends string = TActionCreator extends { type: infer T } ? T : TActionCreator extends { toString(): infer U } ? U : never
>(actionCreator: TActionCreator) {
    if (!actionCreator.type && !actionCreator.hasOwnProperty('toString')) {
        throw new Error(
            `Action creator that has been passed to getType() does not provide any API to expose action type. You can use createAction() to create an action creator without any unsense errors.`,
        )
    }

    return <TType>(actionCreator.type || actionCreator.toString())
}
