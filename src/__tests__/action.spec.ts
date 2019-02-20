import { action } from '../action'

describe('action', () => {
  it.each`
    name                            | type                       | payload                      | meta
    ${'type-only'}                  | ${'[Todo] truncate'}       | ${undefined}                 | ${undefined}
    ${'error payload'}              | ${'[Todo] fetch rejected'} | ${new Error()}               | ${undefined}
    ${'error and meta'}             | ${'[Todo] fetch rejected'} | ${new Error()}               | ${{ status: 403 }}
    ${'non-error payload'}          | ${'[Todo] add'}            | ${{ name: `Read Robbin's` }} | ${undefined}
    ${'non-error payload and meta'} | ${'[Todo] add'}            | ${{ name: `Read Robbin's` }} | ${'Book is on bookshelf'}
    ${'`false` payload'}            | ${'[Todo] show'}           | ${false}                     | ${undefined}
    ${'`null` payload'}             | ${'[Todo] show'}           | ${null}                      | ${undefined}
    ${'`0` payload'}                | ${'[Todo] show'}           | ${0}                         | ${undefined}
    ${'`NaN` payload'}              | ${'[Todo] show'}           | ${NaN}                       | ${undefined}
    ${"`''` payload"}               | ${'[Todo] show'}           | ${''}                        | ${undefined}
    ${'`false` meta'}               | ${'[Todo] show'}           | ${undefined}                 | ${false}
    ${'`null` meta'}                | ${'[Todo] show'}           | ${undefined}                 | ${null}
    ${'`0` meta'}                   | ${'[Todo] show'}           | ${undefined}                 | ${0}
    ${'`NaN` meta'}                 | ${'[Todo] show'}           | ${undefined}                 | ${NaN}
    ${"`''` meta"}                  | ${'[Todo] show'}           | ${undefined}                 | ${''}
  `('should create action with $name', ({ type, payload, meta }) => {
    expect(action(type, payload, meta)).toMatchSnapshot()
  })
})
