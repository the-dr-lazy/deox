import { marbles } from 'rxjs-marbles/jest'

import {
    createSnackbar,
    dismissSnackbar,
    dismissSnackbarCompleted,
    dismissSnackbarEpic,
    getSnackbar,
    showSnackbar,
    showSnackbarCompleted,
    showSnackbarEpic,
    snackbar,
} from '../snackbar'

describe('snackbar', () => {
    describe('action creators', () => {
        it.each([
            {
                title: 'Title of snackbar',
                message: 'An important message',
            },
            {
                title: 'Title of snackbar',
                message: 'An important message',
                duration: 1000,
            },
        ])('should create an action to create snackbar', options => {
            expect(createSnackbar(options)).toMatchSnapshot()
        })

        it('should create an action to show snackbar', () => {
            const options = {
                title: 'Title of snackbar',
                message: 'An important message',
                duration: 1000,
            }

            expect(showSnackbar(options)).toMatchSnapshot()
        })

        it('should create an action to complete snackbar show', () => {
            expect(showSnackbarCompleted()).toMatchSnapshot()
        })

        it('should create an action to dismiss snackbar', () => {
            expect(dismissSnackbar()).toMatchSnapshot()
        })

        it('should create an action to complete snackbar dismiss', () => {
            expect(dismissSnackbarCompleted()).toMatchSnapshot()
        })
    })

    describe('reducer', () => {
        it('should handle "[Snackbar] show"', () => {
            const action = showSnackbar({
                title: 'Title of snackbar',
                message: 'An important message',
                duration: 1000,
            })

            expect(snackbar(undefined, action)).toMatchSnapshot()
        })

        it('should handle "[Snackbar] dismiss"', () => {
            const action = dismissSnackbar()

            expect(snackbar(undefined, action)).toMatchSnapshot()
        })
    })

    describe('selectors', () => {
        it('should get snackbar', () => {
            expect(getSnackbar({ title: 'A great title', message: 'An important message' })).toMatchSnapshot()
        })
    })

    describe('epics', () => {
        describe('showSnackbarEpic', () => {
            it(
                'should immediately output "[Snackbar] show" for "[Snackbar] create" when there is no active snackbar',
                marbles(m => {
                    const action = '  -ab 249ms -'
                    const state = '   s-- 249ms -'
                    const expected = '--- 249ms b'

                    const action$ = m.hot(action, {
                        a: createSnackbar({ title: 'a', message: 'a', duration: 10 }),
                        b: createSnackbar({ title: 'b', message: 'b', duration: 10 }),
                    })
                    const state$ = m.cold(state, {
                        s: {} as any,
                    })
                    const expected$ = m.cold(expected, {
                        b: showSnackbar({ title: 'b', message: 'b', duration: 10 }),
                    })

                    m.expect(showSnackbarEpic(action$, state$, { scheduler: m.scheduler })).toBeObservable(expected$)
                }),
            )

            it(
                'should output "[Snackbar] show" for "[Snackbar] create" after "[Snackbar] dismiss completed" when there is active snackbar',
                marbles(m => {
                    const action = '  -a 249ms -bbb'
                    const state = '   -s 249ms ----'
                    const expected = '-- 249ms -a--'

                    const action$ = m.hot(action, {
                        a: createSnackbar({ title: 'a', message: 'a', duration: 10 }),
                        b: dismissSnackbarCompleted(),
                    })
                    const state$ = m.cold(state, { s: { snackbar: {} } as any })
                    const expected$ = m.cold(expected, {
                        a: showSnackbar({ title: 'a', message: 'a', duration: 10 }),
                    })

                    m.expect(showSnackbarEpic(action$, state$, { scheduler: m.scheduler })).toBeObservable(expected$)
                }),
            )
        })

        describe('dismissSnackbarEpic', () => {
            it(
                'should output "[Snackbar] dimiss" after duration of input "[Snackbar] show"',
                marbles(m => {
                    const action = '  -s-c 9ms -'
                    const expected = '---- 9ms d'

                    const action$ = m.hot(action, {
                        s: showSnackbar({ title: 'a', message: 'a', duration: 10 }),
                        c: showSnackbarCompleted(),
                    })
                    const expected$ = m.cold(expected, { d: dismissSnackbar() })

                    m.expect(dismissSnackbarEpic(action$, null, { scheduler: m.scheduler })).toBeObservable(expected$)
                }),
            )

            it(
                'should output "[Snackbar] dismiss" before duration of input "[Snackbar] show" when there is new "[Snackbar] create"',
                marbles(m => {
                    const action = '  -s-c---k'
                    const expected = '-------d'

                    const action$ = m.hot(action, {
                        s: showSnackbar({ title: 'a', message: 'a', duration: 10 }),
                        c: showSnackbarCompleted(),
                        k: createSnackbar({ title: 'a', message: 'a' }),
                    })
                    const expected$ = m.cold(expected, { d: dismissSnackbar() })

                    m.expect(dismissSnackbarEpic(action$, null, { scheduler: m.scheduler })).toBeObservable(expected$)
                }),
            )
        })
    })
})
