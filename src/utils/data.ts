export const merge = <T extends {}>(...objs: T[]): T =>
  Object.assign({}, ...objs)

export function castArray<TValue>(
  value: TValue | ReadonlyArray<TValue>
): TValue[] {
  return [].concat(<any>value)
}
