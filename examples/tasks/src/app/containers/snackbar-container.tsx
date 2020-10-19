import { connect } from 'react-redux'
import { dismissSnackbar, dismissSnackbarCompleted, getSnackbar, showSnackbarCompleted, RootState } from '~/store'
import { Snackbar, SnackbarDispatchProps, SnackbarStateProps } from '~/app/components'

export const SnackbarContainer = connect<SnackbarStateProps, SnackbarDispatchProps, {}, RootState>(
    state => ({ snackbar: getSnackbar(state) }),
    { showSnackbarCompleted, dismissSnackbar, dismissSnackbarCompleted },
)(Snackbar)
