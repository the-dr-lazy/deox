import { getType, Action, ActionCreator, AnyAction } from 'deox'
import { ofType as _ofType } from 'redux-observable'
import { Observable } from 'rxjs'

export const uuid = () => `${Date.now()}`

export const ofType = <
  I extends AnyAction,
  AC extends ActionCreator<AnyAction>,
  O extends AnyAction = AC extends ActionCreator<infer T>
    ? T extends AnyAction
      ? T
      : never
    : never
>(
  actionCreator: AC
): ((source: Observable<I>) => Observable<O>) =>
  _ofType(getType(actionCreator)) as any
