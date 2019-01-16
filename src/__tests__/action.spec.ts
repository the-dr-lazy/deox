import { action } from '../action'

describe('action', () => {
  it.each`
    name                            | type                       | payload                      | meta
    ${'type-only'}                  | ${'[Todo] truncate'}       | ${undefined}                 | ${undefined}
    ${'error payload'}              | ${'[Todo] fetch rejected'} | ${new Error()}               | ${undefined}
    ${'error and meta'}             | ${'[Todo] fetch rejected'} | ${new Error()}               | ${{ status: 403 }}
    ${'non-error payload'}          | ${'[Todo] add'}            | ${{ name: `Read Robbin's` }} | ${undefined}
    ${'non-error payload and meta'} | ${'[Todo] add'}            | ${{ name: `Read Robbin's` }} | ${'Book is on bookshelf'}
  `('should create action with $name', ({ type, payload, meta }) => {
    expect(action(type, payload, meta)).toMatchSnapshot()
  })
})
