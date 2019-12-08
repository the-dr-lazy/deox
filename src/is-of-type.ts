import { AnyAction } from './create-action'
import { ActionCreator } from './create-action-creator'
import { getType } from './get-type'
import { castArray } from './utils'
import { ExtractAction } from './types'

/**
 * Non-curried function
 * @example
 * const increment = createActionCreator('[Counter] increment')
 * const decrement = createActionCreator('[Counter] decrement')
 * isOfType('[Counter] increment', increment()) //=> true
 * @example
 * isOfType(['[Counter] increment', '[Counter] decrement'], increment()) //=> true
 * @example
 * isOfType(decrement(), increment()) //=> false
 */
export function isOfType<
  TSource extends string | AnyAction | ActionCreator<AnyAction>,
  TAction extends AnyAction
>(
  type: TSource | ReadonlyArray<TSource>,
  action: TAction
): action is ExtractAction<TSource, TAction>

/**
 * Curried function
 * @example
 * const increment = createActionCreator('[Counter] increment')
 * const decrement = createActionCreator('[Counter] decrement')
 * isOfType('[Counter] increment')(increment()) //=> true
 * @example
 * isOfType(['[Counter] increment', '[Counter] decrement'])(increment()) //=> true
 * @example
 * isOfType(decrement())(increment()) //=> false
 */
export function isOfType<
  TSource extends string | AnyAction | ActionCreator<AnyAction>
>(
  type: TSource | ReadonlyArray<TSource>
): <TAction extends AnyAction>(
  action: TAction
) => action is ExtractAction<TSource, TAction>

/**
 * Action type assertion helper
 * @description Check if action type property is equal given action(s) type property or action creator(s) type property or action type(s).
 * @example
 * const increment = createActionCreator('[Counter] increment')
 * const decrement = createActionCreator('[Counter] decrement')
 * const reset = createActionCreator(
 *   '[Counter] reset',
 *   resolve => (value: number) => resolve(value)
 * )
 * isOfType([decrement(), reset(0)], increment()) //=> false
 * @example
 * isOfType(reset, increment()) //=> false
 * @example
 * isOfType([reset, increment], increment()) //=> true
 * @example
 * isOfType(['[Counter] increment', decrement(), reset], increment()) //=> true
 */
export function isOfType<
  TSource extends string | AnyAction | ActionCreator<AnyAction>,
  TAction extends AnyAction
>(keys: TSource | ReadonlyArray<TSource>, action?: TAction) {
  const types = castArray<string | AnyAction | ActionCreator<AnyAction>>(
    keys
  ).map(key => (typeof key === 'string' ? key : getType(key)))

  const assertFn = (action: TAction) => types.includes(action.type)

  // 1 arg case => return curried version
  if (action === undefined) {
    return assertFn
  }

  // 2 args case => invoke assertFn and return the result
  return assertFn(action)
}
