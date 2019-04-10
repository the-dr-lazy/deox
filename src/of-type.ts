import { OperatorFunction } from 'rxjs'
import { filter } from 'rxjs/operators'

import { ActionCreator } from './create-action-creator'
import { Action, AnyAction } from './create-action'
import { getType } from './get-type'
import { castArray } from './utils'

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
  TActionCreator extends ActionCreator<TSource>,
>(
  actionCreators: TActionCreator | ReadonlyArray<TActionCreator>
): OperatorFunction<TSource, ReturnType<TActionCreator>>
export function ofType<TSource extends AnyAction, TAction extends TSource>(
  actions: TAction | ReadonlyArray<TAction>
): OperatorFunction<TSource, TAction>
export function ofType<
  TSource extends AnyAction,
  TType extends TSource['type']
>(
  types: TType | ReadonlyArray<TType>
): OperatorFunction<
  TSource,
  TSource extends Action<infer T> ? (T extends TType ? TSource : never) : never
>
export function ofType(keys: ActionCreator<AnyAction> | AnyAction | string) {
  const types = castArray(keys).map(key =>
    typeof key === 'string' ? key : getType(key)
  )

  return filter<AnyAction>(action => types.includes(action.type))
}
