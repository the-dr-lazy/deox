export const merge = <T extends {}>(...objs: T[]): T =>
  Object.assign({}, ...objs)
