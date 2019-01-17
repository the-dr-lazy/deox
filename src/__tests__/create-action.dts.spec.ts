import { createAction } from '../create-action'

// @dts-jest:group createAction

// @dts-jest:pass:snap
createAction('[Todo] truncate')

// @dts-jest:pass:snap
createAction('[Todo] fetch rejected', resolve => (error: Error) =>
  resolve(error)
)

// @dts-jest:pass:snap
createAction(
  '[Todo] fetch rejected',
  resolve => (error: Error, meta?: { status: number }) => resolve(error, meta)
)

// @dts-jest:pass:snap
createAction('[Todo] add', resolve => (name: string, completed = false) =>
  resolve({ name, completed })
)

// @dts-jest:pass:snap
createAction('[Todo] add', resolve => (name: string, completed = false) =>
  resolve({ name, completed }, 'Meta data of all todos')
)
