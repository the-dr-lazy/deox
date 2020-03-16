import { createActionCreator } from '../create-action-creator'

// @dts-jest:group createActionCreator

const a = createActionCreator('A')

// @dts-jest:pass:snap
createActionCreator('A')

// @dts-jest:fail
a(0)

// @dts-jest:pass:snap
createActionCreator('B', resolve => (error: Error) => resolve(error))

// @dts-jest:pass:snap
createActionCreator('C', resolve => (error: Error, meta?: { status: number }) =>
  resolve(error, meta)
)

// @dts-jest:pass:snap
createActionCreator(
  'D',
  // tslint:disable-next-line:no-inferrable-types
  resolve => (name: string, completed: boolean = false) =>
    resolve({ name, completed })
)

// @dts-jest:pass:snap
createActionCreator(
  'E',
  // tslint:disable-next-line:no-inferrable-types
  resolve => (name: string, completed: boolean = false) =>
    resolve({ name, completed }, 'Meta')
)

// @dts-jest:pass:snap
createActionCreator('F', resolve => <TName>(name: TName) => resolve(name))

// @dts-jest:pass:snap
createActionCreator('G', resolve => <TName, TMeta>(name: TName, meta: TMeta) =>
  resolve(name, meta)
)

// @dts-jest:pass:snap
createActionCreator('H', resolve => (...names: string[]) => resolve(names))
