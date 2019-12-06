import { Action, AnyAction } from './create-action'
import { ActionCreator } from './create-action-creator'
import { getType } from './get-type'
import { castArray } from './utils'

export function isOfType<
  TSource extends string | AnyAction | ActionCreator<AnyAction>,
  TAction extends AnyAction
>(
  type: TSource | TSource[],
  action: TAction
): action is TAction extends Action<
  TSource extends string
    ? TSource
    : TSource extends AnyAction | ActionCreator<AnyAction>
    ? TSource['type']
    : never
>
  ? TAction
  : never

export function isOfType<
  TSource extends string | AnyAction | ActionCreator<AnyAction>
>(
  type: TSource | TSource[]
): <TAction extends AnyAction>(
  action: TAction
) => action is TAction extends Action<
  TSource extends string
    ? TSource
    : TSource extends AnyAction | ActionCreator<AnyAction>
    ? TSource['type']
    : never
>
  ? TAction
  : never

export function isOfType<
  TSource extends string | AnyAction | ActionCreator<AnyAction>,
  TAction extends AnyAction
>(keys: TSource | TSource[], action?: TAction) {
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
