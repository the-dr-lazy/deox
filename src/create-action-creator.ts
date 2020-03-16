import { createAction, Action, AnyAction } from './create-action'

export type ExactActionCreator<TType extends string, TCallable extends <_T>(...args: any[]) => Action<TType>> = TCallable & {
  type: TType extends AnyAction ? TType['type'] : TType
  toString(): TType extends AnyAction ? TType['type'] : TType
}

export type ActionCreator<T extends AnyAction | string> = {
  (...args: any[]): T extends string ? Action<T> : T
  type: T extends AnyAction ? T['type'] : T
  toString(): T extends AnyAction ? T['type'] : T
}

export type Executor<TType extends string, TCallable extends <_T>(...args: any[]) => Action<TType>> = (
  resolve: <Payload = undefined, Meta = undefined>(
    payload?: Payload,
    meta?: Meta
  ) => Action<TType, Payload, Meta>
) => TCallable;

/**
 * Flux standard action creator factory
 * @example
 * createActionCreator('[Todo] truncate');
 * @example
 * createActionCreator(
 *   '[Todo] fetch rejected',
 *   resolve => (error: Error) => resolve(error)
 * );
 * @example
 * createActionCreator(
 *   '[Todo] fetch rejected',
 *   resolve => (error: Error, meta?: { status: number }) => resolve(error, meta)
 * )
 * @example
 * createActionCreator(
 *   '[Todo] add',
 *   resolve => (name: string, completed = false) => resolve({ name, completed })
 * )
 * @example
 * createActionCreator(
 *   '[Todo] add',
 *   resolve => (name: string, completed = false) => resolve({ name, completed }, 'Meta data of all todos')
 * )
 *
 */
export function createActionCreator<TType extends string>(type: TType): ExactActionCreator<TType, () => Action<TType>>;
export function createActionCreator<
  TType extends string,
  TCallable extends <_T>(...args: any[]) => Action<TType>
>(type: TType, executor: Executor<TType, TCallable>): ExactActionCreator<TType, TCallable>;
export function createActionCreator<
  TType extends string,
  TCallable extends <_T>(...args: any[]) => Action<TType>
>(type: TType, executor: Executor<TType, TCallable> = resolve => (() => resolve()) as TCallable) {
  const callable = executor((payload, meta) =>
    createAction(type, payload!, meta!)
  )

  return Object.assign(callable, {
    type,
    toString() {
      return type
    },
  })
}
