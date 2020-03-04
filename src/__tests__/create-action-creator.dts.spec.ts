import { createActionCreator } from '../create-action-creator'

// @dts-jest:group createActionCreator

// @dts-jest:pass:snap
const todoTruncate = createActionCreator('[Todo] truncate')

// @dts-jest:pass:snap
todoTruncate // tslint:disable-line:no-unused-expression

// @dts-jest:fail:snap
todoTruncate('')

// @dts-jest:pass:snap
todoTruncate()

// @dts-jest:pass:snap
const todoFetchRejected = createActionCreator('[Todo] fetch rejected', resolve => (error: Error) =>
  resolve(error)
)

// @dts-jest:pass:snap
todoFetchRejected // tslint:disable-line:no-unused-expression

// @dts-jest:fail:snap
todoFetchRejected()

// @dts-jest:pass:snap
todoFetchRejected(new Error(''))

// @dts-jest:pass:snap
const todoFetchRejected2 = createActionCreator(
  '[Todo] fetch rejected',
  resolve => (error: Error, meta?: { status: number }) => resolve(error, meta)
)

// @dts-jest:pass:snap
todoFetchRejected2 // tslint:disable-line:no-unused-expression

// @dts-jest:fail:snap
todoFetchRejected2()

// @dts-jest:pass:snap
todoFetchRejected2(new Error(''))

// @dts-jest:pass:snap
todoFetchRejected2(new Error(''), { status: 200 })

// @dts-jest:fail:snap
todoFetchRejected2(new Error(''), { status: '' })

// @dts-jest:pass:snap
const todoAdd = createActionCreator(
  '[Todo] add',
  // tslint:disable-next-line:no-inferrable-types
  resolve => (name: string, completed: boolean = false) =>
    resolve({ name, completed })
)

// @dts-jest:pass:snap
todoAdd // tslint:disable-line:no-unused-expression

// @dts-jest:fail:snap
todoAdd()

// @dts-jest:fail:snap
todoAdd(false);

// @dts-jest:pass:snap
todoAdd('buy presents');

// @dts-jest:pass:snap
todoAdd('buy presents', true);

// @dts-jest:fail:snap
todoAdd('buy presents', true, 42);

// @dts-jest:pass:snap
const todoAdd2 = createActionCreator(
  '[Todo] add',
  // tslint:disable-next-line:no-inferrable-types
  resolve => (name: string, completed: boolean = false) =>
    resolve({ name, completed }, 'Meta data of all todos')
)

// @dts-jest:pass:snap
todoAdd2 // tslint:disable-line:no-unused-expression

// @dts-jest:fail:snap
todoAdd2()

// @dts-jest:pass:snap
todoAdd2('buy presents');

// @dts-jest:pass:snap
todoAdd2('buy presents', true);

// @dts-jest:pass:snap
const todoGeneric = createActionCreator('[Todo] generic', resolve => <Name>(name: Name) =>
  resolve(name)
)

// @dts-jest:pass:snap
todoGeneric // tslint:disable-line:no-unused-expression

// @dts-jest:fail:snap
todoGeneric()

// @dts-jest:pass:snap
todoGeneric('buy presents');

// @dts-jest:pass:snap
todoGeneric(false);

// @dts-jest:fail:snap
todoGeneric('buy presents', true);

// @dts-jest:pass:snap
const todoGeneric2 = createActionCreator(
  '[Todo] generic',
  resolve => <Name, Meta>(name: Name, meta: Meta) => resolve(name, meta)
)

// @dts-jest:pass:snap
todoGeneric2 // tslint:disable-line:no-unused-expression

// @dts-jest:fail:snap
todoGeneric2()

// @dts-jest:fail:snap
todoGeneric2(42);

// @dts-jest:pass:snap
todoGeneric2(42, 'The answer');

// @dts-jest:pass:snap
todoGeneric2('The answer', 42);

// @dts-jest:fail:snap
todoGeneric2('The answer', 42, 'Zaphod');

// @dts-jest:pass:snap
const todoVarArgs = createActionCreator(
  '[Todo] var-args',
  resolve => (...names: string[]) => resolve(names)
)

// @dts-jest:pass:snap
todoVarArgs // tslint:disable-line:no-unused-expression

// @dts-jest:fail:snap
todoVarArgs(false)

// @dts-jest:pass:snap
todoVarArgs()

// @dts-jest:pass:snap
todoVarArgs('Make Cookies')

// @dts-jest:pass:snap
todoVarArgs('Attend Christmas Party', 'Wish everyone a Merry Christmas')

// @dts-jest:pass:snap
todoVarArgs('Dress Up like Santa', 'Ignore numbers 1-3', 'Steal Christmas!')
