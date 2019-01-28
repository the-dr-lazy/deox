import { filter } from 'rxjs/operators'

import { ActionCreator } from './create-action'
import { AnyAction } from './action'
import { getType } from './get-type'

/**
 * Filter actions emitted by the source Observable by only emitting those that
 * are compatible with specified action(s) or action creator(s) or action type(s).
 *
 * @example
 * action$.pipe(
 *   ofType(foo),
 *   ...
 * )
 * @example
 * action$.pipe(
 *   ofType([foo, bar]),
 *   ...
 * )
 */
export function ofType<
  Source extends AnyAction,
  Key extends ActionCreator<Source> | Source | Source['type'],
  Sink extends Source = Key extends (...args: any[]) => infer U
    ? (U extends Source ? U : never)
    : (Key extends Source ? Key : never)
>(keys: Key | Key[]) {
  const types: string[] = (Array.isArray(keys) ? keys : [keys]).map(key =>
    typeof key === 'string' ? key : getType(key)
  )

  return filter<Source, Sink>(
    (action): action is Sink => types.includes(action.type)
  )
}
