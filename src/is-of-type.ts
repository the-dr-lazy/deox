import { Action, AnyAction } from './create-action'
import { ActionCreator } from './create-action-creator'
import { getType } from './get-type'

export function isOfType<
  TType extends string | AnyAction | ActionCreator<string>,
  TAction extends AnyAction
>(
  type: TType | TType[],
  action: TAction
): action is TAction extends Action<
  TType extends string
    ? TType
    : TType extends AnyAction | ActionCreator<string>
    ? TType['type']
    : never
>
  ? TAction
  : never

export function isOfType<
  TType extends string | AnyAction | ActionCreator<string>
>(
  type: TType | TType[]
): <TAction extends AnyAction>(
  action: TAction
) => action is TAction extends Action<
  TType extends string
    ? TType
    : TType extends AnyAction | ActionCreator<string>
    ? TType['type']
    : never
>
  ? TAction
  : never

export function isOfType<
  TType extends string | AnyAction | ActionCreator<string>,
  TAction extends AnyAction
>(typeOrTypes: TType | TType[], action?: TAction) {
  const types = Array.isArray(typeOrTypes) ? typeOrTypes : [typeOrTypes]

  const isType = <TType>(type: unknown): type is TType & string =>
    typeof type === 'string'
  const isActionOrActionCreator = <TType>(
    type: any
  ): type is TType & (AnyAction | ActionCreator<string>) =>
    (typeof type === 'object' || typeof type === 'function') &&
    !!(type && type.type)

  const assertFn = (action: TAction) =>
    types.some(type => {
      if (isType(type)) {
        return type === action.type
      }
      if (isActionOrActionCreator<TType>(type)) {
        return getType(type) === action.type
      }
    })

  // 1 arg case => return curried version
  if (action === undefined) {
    return assertFn
  }

  // 2 args case => invoke assertFn and return the result
  return assertFn(action)
}
