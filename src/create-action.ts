import { action, Action, AnyAction } from './action'

export type ActionCreator<T extends AnyAction | string> = T extends AnyAction
  ? {
      (...args: any[]): T
      type: T['type']
      toString(): T['type']
    }
  : (T extends string
      ? {
          (...args: any[]): Action<T>
          type: T
          toString(): T
        }
      : never)

/**
 * Flux standard action creator factory
 * @example
 * createAction('[Todo] truncate');
 * @example
 * createAction(
 *   '[Todo] fetch rejected',
 *   resolve => (error: Error) => resolve(error)
 * );
 * @example
 * createAction(
 *   '[Todo] fetch rejected',
 *   resolve => (error: Error, meta?: { status: number }) => resolve(error, meta)
 * )
 * @example
 * createAction(
 *   '[Todo] add',
 *   resolve => (name: string, completed = false) => resolve({ name, completed })
 * )
 * @example
 * createAction(
 *   '[Todo] add',
 *   resolve => (name: string, completed = false) => resolve({ name, completed }, 'Meta data of all todos')
 * )
 *
 */
export function createAction<
  Type extends string,
  Callable extends (...args: any[]) => Action<Type> = () => Action<Type>
>(
  type: Type,
  executor: (
    resolve: <Payload = undefined, Meta = undefined>(
      payload?: Payload,
      meta?: Meta
    ) => Action<Type, Payload, Meta>
  ) => Callable = resolve => (() => resolve()) as any
) {
  const callable = executor((payload, meta) => action(type, payload!, meta!))

  return Object.assign(callable, {
    type,
    toString() {
      return type
    },
  })
}
