import { filter } from 'rxjs/operators'

import { ActionCreator } from './create-action-creator'
import { AnyAction } from './create-action'
import { getType } from './get-type'
import { castArray } from './utils'
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
  TKey extends string | AnyAction | ActionCreator<AnyAction>,
  TSink extends TSource = ExtractAction<TKey, TSource>
>(keys: TKey | ReadonlyArray<TKey>) {
  const types = castArray<string | AnyAction | ActionCreator<AnyAction>>(
    keys
  ).map(key => (typeof key === 'string' ? key : getType(key)))

  return filter<TSource, TSink>((action): action is TSink =>
    types.includes(action.type)
  )
}
