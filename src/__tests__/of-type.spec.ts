import { marbles } from 'rxjs-marbles/jest'

import { createActionCreator } from '../create-action-creator'
import { ofType } from '../of-type'

describe('ofType', () => {
  const a = createActionCreator('a')
  const b = createActionCreator('b')
  const c = createActionCreator('c')
  const d = createActionCreator('d')
  const e = createActionCreator('e')
  const f = createActionCreator('f')
  const g = createActionCreator('g')
  const h = createActionCreator('h')

  const values = {
    a: a(),
    b: b(),
    c: c(),
    d: d(),
    e: e(),
    f: f(),
    g: g(),
    h: h(),
  }

  const test = ({ action, subs, expected, keys }: any) =>
    marbles(m => {
      const action$ = m.hot(action, values)
      const expected$ = m.cold(expected, values)

      m.expect(action$.pipe(ofType(keys))).toBeObservable(expected$)
      m.expect(action$).toHaveSubscriptions(subs)
    })()

  it.each([
    {
      action: '  -a--b-^-c--d--e--f--c--h--|',
      subs: '          ^-------------------!',
      expected: '      --c-----------c-----|',
      keys: c,
    },
    {
      action: '  -a--b-^-c--d--e--f--c--h--|',
      subs: '          ^-------------------!',
      expected: '      --c--d-----f--c-----|',
      keys: [c, d, f],
    },
  ])('should filter in with action creator(s)', test)

  it.each([
    {
      action: '  -a--b-^-c--d--e--f--c--h--|',
      subs: '          ^-------------------!',
      expected: '      --c-----------c-----|',
      keys: c(),
    },
    {
      action: '  -a--b-^-c--d--e--f--c--h--|',
      subs: '          ^-------------------!',
      expected: '      --c--d-----f--c-----|',
      keys: [c(), d(), f()],
    },
  ])('should filter in with action(s)', test)

  it.each([
    {
      action: '  -a--b-^-c--d--e--f--c--h--|',
      subs: '          ^-------------------!',
      expected: '      --c-----------c-----|',
      keys: 'c',
    },
    {
      action: '  -a--b-^-c--d--e--f--c--h--|',
      subs: '          ^-------------------!',
      expected: '      --c--d-----f--c-----|',
      keys: ['c', 'd', 'f'],
    },
  ])('should filter in with action type(s)', test)

  it.each([
    {
      action: '  -a--b-^-c--d--e--f--c--h--|',
      subs: '          ^-------------------!',
      expected: '      --c-----------c-----|',
      keys: 'c',
    },
    {
      action: '  -a--b-^-c--d--e--f--c--h--|',
      subs: '          ^-------------------!',
      expected: '      --c--d-----f--c-----|',
      keys: ['c', d(), f],
    },
  ])(
    'should filter in with action type(s) or action(s) or action creator(s)',
    test
  )
})
