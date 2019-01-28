import { of } from 'rxjs'

import { createAction } from '../create-action'
import { ofType } from '../of-type'

// @dts-jest:group ofType

const a = createAction('a')
const b = createAction('b')
const c = createAction('c')

// @dts-jest:pass:snap
of(a(), b(), c()).pipe(ofType(a))

// @dts-jest:pass:snap
of(a(), b(), c()).pipe(ofType([a, b]))

// @dts-jest:pass:snap
of(a(), b(), c()).pipe(ofType(a()))

// @dts-jest:pass:snap
of(a(), b(), c()).pipe(ofType([a(), b()]))

// @dts-jest:pass:snap
of(a(), b(), c()).pipe(ofType('a'))

// @dts-jest:pass:snap
of(a(), b(), c()).pipe(ofType(['a', 'b']))
