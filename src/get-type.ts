/**
 * Map action creator to it's contained action type
 * @description it gets an object with at least a type property or overridden toString method and returns it.
 * @example
 * const increment = createAction('[Counter] increment')
 * getType(increment) //=> '[Counter] increment'
 * @example
 * getType({ type: 'TEST' }) //=> 'TEST'
 * @example
 * getType({
 *  toString() { return 'TEST' }
 * }) //=> 'TEST'
 */
export function getType<
  AC extends { type?: string; toString(): string } | { type: string },
  Type extends string = AC extends { type: infer T }
    ? T
    : AC extends { toString(): infer U }
    ? U
    : never
>(actionCreator: AC) {
  if (!actionCreator.type && !actionCreator.hasOwnProperty('toString')) {
    throw new Error(
      `Action creator that has been passed to getType() does not provide any API to expose action type. You can use createAction() to create an action creator without any unsense errors.`
    )
  }

  return <Type>(actionCreator.type || actionCreator.toString())
}
