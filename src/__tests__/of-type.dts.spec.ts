import { of } from 'rxjs'
import * as Redux from 'redux'

import { AnyAction } from '../create-action'
import { createActionCreator } from '../create-action-creator'
import { ofType } from '../of-type'

// @dts-jest:group ofType

const a = createActionCreator('a')
const b = createActionCreator('b')
const c = createActionCreator('c')
const d = createActionCreator('d')

{
    // @dts-jest:pass:snap
    of<any>().pipe(ofType(a))

    // @dts-jest:pass:snap
    of<any>().pipe(ofType([a, b]))

    // @dts-jest:pass:snap
    of<any>().pipe(ofType(a()))

    // @dts-jest:pass:snap
    of<any>().pipe(ofType([a(), b()]))

    // @dts-jest:pass:snap
    of<any>().pipe(ofType('a'))

    // @dts-jest:pass:snap
    of<any>().pipe(ofType(['a', 'b']))

    // @dts-jest:pass:snap
    of<any>().pipe(ofType(<const>['a', b(), c]))
}

{
    // @dts-jest:pass:snap
    of<Redux.Action>().pipe(ofType(a))

    // @dts-jest:pass:snap
    of<Redux.Action>().pipe(ofType([a, b]))

    // @dts-jest:pass:snap
    of<Redux.Action>().pipe(ofType(a()))

    // @dts-jest:pass:snap
    of<Redux.Action>().pipe(ofType([a(), b()]))

    // @dts-jest:pass:snap
    of<Redux.Action>().pipe(ofType('a'))

    // @dts-jest:pass:snap
    of<Redux.Action>().pipe(ofType(['a', 'b']))

    // @dts-jest:pass:snap
    of<Redux.Action>().pipe(ofType(<const>['a', b(), c]))
}

{
    // @dts-jest:pass:snap
    of<AnyAction>().pipe(ofType(a))

    // @dts-jest:pass:snap
    of<AnyAction>().pipe(ofType([a, b]))

    // @dts-jest:pass:snap
    of<AnyAction>().pipe(ofType(a()))

    // @dts-jest:pass:snap
    of<AnyAction>().pipe(ofType([a(), b()]))

    // @dts-jest:pass:snap
    of<AnyAction>().pipe(ofType('a'))

    // @dts-jest:pass:snap
    of<AnyAction>().pipe(ofType(['a', 'b']))

    // @dts-jest:pass:snap
    of<AnyAction>().pipe(ofType(<const>['a', b(), c]))
}

{
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
    of(a(), b(), c()).pipe(ofType(<const>['a', 'b']))

    // @dts-jest:pass:snap
    of(a(), b(), c(), d()).pipe(ofType(<const>['a', b(), c]))
}
