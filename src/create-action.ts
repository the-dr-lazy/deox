export type Action<
  TType extends string,
  TPayload = undefined,
  TMeta = undefined
> = TPayload extends undefined
  ? (TMeta extends undefined ? { type: TType } : { type: TType; meta: TMeta })
  : (TPayload extends Error
      ? (TMeta extends undefined
          ? { type: TType; payload: TPayload; error: true }
          : { type: TType; payload: TPayload; meta: TMeta; error: true })
      : (TMeta extends undefined
          ? { type: TType; payload: TPayload }
          : { type: TType; payload: TPayload; meta: TMeta }))
export type AnyAction = Action<string>

/**
 * Minimal (type-only) action factory
 * @example
 * const clearTodos = action('[Todo] truncate');
 */
export function createAction<TType extends string>(type: TType): Action<TType>
/**
 * Action with error factory
 * @example
 * const fetchTodosRejected = (payload: Error) => action('[Todo] fetch rejected', payload);
 */
export function createAction<TType extends string, TPayload extends Error>(
  type: TType,
  payload: TPayload
): Action<TType, TPayload>
/**
 * Action with non-error payload factory
 * @example
 * const addTodo = ({ name, completed = false }: Todo) => action('[Todo] add', { name, completed });
 */
export function createAction<TType extends string, TPayload>(
  type: TType,
  payload: TPayload
): Action<TType, TPayload>
/**
 * Action with error and meta factory
 * @example
 * const fetchTodosRejected = (payload: Error, meta?: Meta) => action('[Todo] fetch rejected', payload, meta);
 */
export function createAction<
  TType extends string,
  TPayload extends Error,
  TMeta
>(type: TType, payload: TPayload, meta: TMeta): Action<TType, TPayload, TMeta>
/**
 * Action with payload and meta factory
 * @example
 * const addTodo = ({ name, completed = false }: Todo, meta?: Meta) => action('[Todo] add', { name, completed }, meta);
 */
export function createAction<TType extends string, TPayload, TMeta>(
  type: TType,
  payload: TPayload,
  meta: TMeta
): Action<TType, TPayload, TMeta>

/**
 * Flux standard action factory
 * @example
 * const clearTodos = action('[Todo] truncate');
 * @example
 * const fetchTodosRejected = (payload: Error) => action('[Todo] fetch rejected', payload);
 * @example
 * const addTodo = ({ name, completed = false }: Todo) => action('[Todo] add', { name, completed });
 * @example
 * const fetchTodosRejected = (payload: Error, meta?: Meta) => action('[Todo] fetch rejected', payload, meta);
 * @example
 * const addTodo = ({ name, completed = false }: Todo, meta?: Meta) => action('[Todo] add', { name, completed }, meta);
 */
export function createAction<TType extends string, TPayload, TMeta>(
  type: TType,
  payload?: TPayload,
  meta?: TMeta
) {
  return {
    type,
    ...(payload !== undefined ? { payload } : {}),
    ...(meta !== undefined ? { meta } : {}),
    ...(payload instanceof Error ? { error: true } : {}),
  }
}
