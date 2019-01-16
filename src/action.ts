export type Action<
  Type extends string,
  Payload = undefined,
  Meta = undefined
> = Payload extends undefined
  ? (Meta extends undefined ? { type: Type } : { type: Type; meta: Meta })
  : (Payload extends Error
      ? (Meta extends undefined
          ? { type: Type; payload: Payload; error: true }
          : { type: Type; payload: Payload; meta: Meta; error: true })
      : (Meta extends undefined
          ? { type: Type; payload: Payload }
          : { type: Type; payload: Payload; meta: Meta }))
export type AnyAction = Action<string>

/**
 * Minimal (type-only) action factory
 * @example
 * const clearTodos = action('[Todo] truncate');
 */
export function action<Type extends string>(type: Type): Action<Type>
/**
 * Action with error factory
 * @example
 * const fetchTodosRejected = (payload: Error) => action('[Todo] fetch rejected', payload);
 */
export function action<Type extends string, Payload extends Error>(
  type: Type,
  payload: Payload
): Action<Type, Payload>
/**
 * Action with non-error payload factory
 * @example
 * const addTodo = ({ name, completed = false }: Todo) => action('[Todo] add', { name, completed });
 */
export function action<Type extends string, Payload>(
  type: Type,
  payload: Payload
): Action<Type, Payload>
/**
 * Action with error and meta factory
 * @example
 * const fetchTodosRejected = (payload: Error, meta?: Meta) => action('[Todo] fetch rejected', payload, meta);
 */
export function action<Type extends string, Payload extends Error, Meta>(
  type: Type,
  payload: Payload,
  meta: Meta
): Action<Type, Payload, Meta>
/**
 * Action with payload and meta factory
 * @example
 * const addTodo = ({ name, completed = false }: Todo, meta?: Meta) => action('[Todo] add', { name, completed }, meta);
 */
export function action<Type extends string, Payload, Meta>(
  type: Type,
  payload: Payload,
  meta: Meta
): Action<Type, Payload, Meta>

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
export function action<Type extends string, Payload, Meta>(
  type: Type,
  payload?: Payload,
  meta?: Meta
) {
  return {
    type,
    ...(payload ? { payload } : {}),
    ...(meta ? { meta } : {}),
    ...(payload instanceof Error ? { error: true } : {}),
  }
}
