import { of } from 'rxjs'

import { createActionCreator } from '../create-action-creator'
import { ofType } from '../of-type'

// @dts-jest:group ofType

const a = createActionCreator('a')
const b = createActionCreator('b')
const c = createActionCreator('c')

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
