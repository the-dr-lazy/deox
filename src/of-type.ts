import { filter } from 'rxjs/operators'

import { ActionCreator } from './create-action-creator'
import { AnyAction } from './create-action'
import { isOfType } from './is-of-type'
import { ExtractAction } from './types'

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
  TKey extends TSource['type'] | TSource | ActionCreator<TSource>,
  TSink extends TSource = ExtractAction<TSource, TKey>
>(keys: TKey | ReadonlyArray<TKey>) {
  return filter<TSource, TSink>(isOfType(keys))
}
