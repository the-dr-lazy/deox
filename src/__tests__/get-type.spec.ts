import { getType } from '../get-type'

describe('getType', () => {
  it('should throw error when action creator does not provide either .type nor toString()', () => {
    const type = '[Todo] truncate'
    const actionCreator = () => ({ type })

    expect(() => getType(actionCreator)).toThrow()
  })

  it('should get action type of action creator via .type', () => {
    const type = '[Todo] truncate'
    const actionCreator = Object.assign(() => ({ type }), { type })

    expect(getType(actionCreator)).toBe(type)
  })

  it('should get action type of action creator via toString()', () => {
    const type = '[Todo] truncate'
    const actionCreator = Object.assign(() => ({ type }), {
      toString() {
        return type
      },
    })

    expect(getType(actionCreator)).toBe(type)
  })
})
