import { filter } from 'rxjs/operators'

import { ActionCreator } from './create-action-creator'
import { AnyAction } from './create-action'
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
  TSource extends AnyAction,
  TKey extends ActionCreator<TSource> | TSource | TSource['type'],
  TSink extends TSource = TKey extends (...args: any[]) => infer U
    ? (U extends TSource ? U : never)
    : (TKey extends TSource ? TKey : never)
>(keys: TKey | TKey[]) {
  const types: string[] = (Array.isArray(keys) ? keys : [keys]).map(key =>
    typeof key === 'string' ? key : getType(key)
  )

  return filter<TSource, TSink>(
    (action): action is TSink => types.includes(action.type)
  )
}
