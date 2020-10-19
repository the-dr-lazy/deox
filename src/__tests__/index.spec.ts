import * as publicApi from '../index'

test('public API has proper exports', () => {
    expect(publicApi).toMatchSnapshot()
})
