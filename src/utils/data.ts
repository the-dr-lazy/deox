export const merge = <T>(...objs: T[]): any => Object.assign({}, ...objs)

export function castArray<TValue>(
  value: TValue | ReadonlyArray<TValue>
): TValue[] {
  return [].concat(<any>value)
}
