import { marbles } from 'rxjs-marbles/jest'

import { createAction } from '../create-action'
import { ofType } from '../of-type'

describe('ofType', () => {
  const a = createAction('a')
  const b = createAction('b')
  const c = createAction('c')
  const d = createAction('d')
  const e = createAction('e')
  const f = createAction('f')
  const g = createAction('g')
  const h = createAction('h')

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
})
