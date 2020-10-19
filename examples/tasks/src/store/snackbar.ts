import { createAction, createReducer } from 'deox'
import { combineEpics } from 'redux-observable'
import { debounceTime, delay, delayWhen, mapTo, switchMap, take, withLatestFrom } from 'rxjs/operators'
import { merge, of, Observable } from 'rxjs'
import { ofType } from '~/utils'
import { async } from 'rxjs/internal/scheduler/async'

import { RootState } from './root'
import * as fromRoot from './selectors'

export type SnackbarState = null | { title: string; message: string }

type SnackbarOptions = { title: string; message: string }

export const createSnackbar = createAction(
    '[Snackbar] create',
    resolve => ({ duration = 3000, ...options }: SnackbarOptions & { duration?: number }) => resolve(options, { duration }),
)
export const showSnackbar = createAction('[Snackbar] show', resolve => ({ duration, ...options }: SnackbarOptions & { duration: number }) =>
    resolve(options, { duration }),
)
export const showSnackbarCompleted = createAction('[Snackbar] show completed')
export const dismissSnackbar = createAction('[Snackbar] dismiss')
export const dismissSnackbarCompleted = createAction('[Snackbar] dismiss completed')

const defaultState = <SnackbarState>null

export const snackbar = createReducer(defaultState, handleAction => [
    handleAction(showSnackbar, (_, { payload }) => payload),
    handleAction(dismissSnackbar, () => null),
])

export const getSnackbar = (state: SnackbarState) => state

type Actions =
    | ReturnType<typeof createSnackbar>
    | ReturnType<typeof showSnackbar>
    | ReturnType<typeof showSnackbarCompleted>
    | ReturnType<typeof dismissSnackbar>
    | ReturnType<typeof dismissSnackbarCompleted>

export const showSnackbarEpic = (action$: Observable<Actions>, state$: Observable<RootState>, { scheduler = async }) =>
    action$.pipe(
        ofType(createSnackbar),
        debounceTime(250, scheduler),
        withLatestFrom(state$),
        switchMap(([action, state]) => {
            const showAction = showSnackbar({ ...action.payload, ...action.meta })

            return fromRoot.getSnackbar(state) ? action$.pipe(ofType(dismissSnackbarCompleted), take(1), mapTo(showAction)) : of(showAction)
        }),
    )

export const dismissSnackbarEpic = (action$: Observable<Actions>, _: any, { scheduler = async }) =>
    action$.pipe(
        ofType(showSnackbar),
        delayWhen(({ meta }) =>
            merge(
                action$.pipe(ofType(showSnackbarCompleted), take(1), delay(meta.duration, scheduler)),
                action$.pipe(ofType(createSnackbar), take(1)),
            ),
        ),
        mapTo(dismissSnackbar()),
    )

export const snackbarEpic = combineEpics(showSnackbarEpic, dismissSnackbarEpic)
