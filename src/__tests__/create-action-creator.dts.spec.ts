import { createActionCreator } from '../create-action-creator'

// @dts-jest:group createActionCreator

// @dts-jest:pass:snap
createActionCreator('[Todo] truncate')

// @dts-jest:pass:snap
createActionCreator('[Todo] fetch rejected', resolve => (error: Error) =>
  resolve(error)
)

// @dts-jest:pass:snap
createActionCreator(
  '[Todo] fetch rejected',
  resolve => (error: Error, meta?: { status: number }) => resolve(error, meta)
)

// @dts-jest:pass:snap
createActionCreator(
  '[Todo] add',
  resolve => (name: string, completed = false) => resolve({ name, completed })
)

// @dts-jest:pass:snap
createActionCreator(
  '[Todo] add',
  resolve => (name: string, completed = false) =>
    resolve({ name, completed }, 'Meta data of all todos')
)

// @dts-jest:pass:snap
createActionCreator('[Todo] generic', resolve => <Name>(name: Name) =>
  resolve(name)
)

// @dts-jest:pass:snap
createActionCreator(
  '[Todo] generic',
  resolve => <Name, Meta>(name: Name, meta: Meta) => resolve(name, meta)
)
