export const merge = <T extends {}>(...objs: T[]): T =>
  Object.assign({}, ...objs)

export function castArray<TValue>(
  value: TValue | ReadonlyArray<TValue>
): ReadonlyArray<TValue> {
  return [].concat(<any>value)
}
