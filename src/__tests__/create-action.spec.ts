import { createAction } from '../create-action'

describe('createAction', () => {
  it('should expose action type of action creator via .type', () => {
    expect(createAction('[Todo] truncate')).toHaveProperty('type')
  })

  it('should expose action type of action creator via toString()', () => {
    expect(createAction('[Todo] truncate')).toHaveProperty('toString')
  })

  it('should create action creator with type-only action without executor', () => {
    const actionCreator = createAction('[Todo] truncate')

    expect(actionCreator()).toMatchSnapshot()
  })

  it('should create action creator with type-only action with empty executor', () => {
    const actionCreator = createAction('[Todo] truncate', resolve => () =>
      resolve()
    )

    expect(actionCreator()).toMatchSnapshot()
  })

  it('should create action creator with error payload', () => {
    const actionCreator = createAction(
      '[Todo] fetch rejected',
      resolve => (error: Error) => resolve(error)
    )

    expect(actionCreator(new Error())).toMatchSnapshot()
  })

  it('should create action creator with error payload and meta', () => {
    const actionCreator = createAction(
      '[Todo] fetch rejected',
      resolve => (error: Error, meta: { status: number }) =>
        resolve(error, meta)
    )

    expect(actionCreator(new Error(), { status: 403 })).toMatchSnapshot()
  })

  it('should create action creator with non-error payload', () => {
    const actionCreator = createAction(
      '[Todo] add',
      resolve => (name: string, completed = false) =>
        resolve({ name, completed })
    )

    expect(
      actionCreator('Prepare for practical parasitology course!')
    ).toMatchSnapshot()
  })

  it('should create action creator with non-error payload and meta', () => {
    const actionCreator = createAction(
      '[Todo] add',
      resolve => (name: string, meta: string) => resolve({ name }, meta)
    )

    expect(
      actionCreator('Prepare for practical parasitology course!', 'Be patient')
    ).toMatchSnapshot()
  })
})
