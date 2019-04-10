export const merge = <T extends {}>(...objs: T[]): T =>
  Object.assign({}, ...objs)

export function castArray<TValue>(value: TValue | TValue[]): TValue[] {
  return [].concat(<any>value)
}
