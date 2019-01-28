import React from 'react'
import { animated, config, Transition } from 'react-spring'
import { connect } from 'react-redux'
import {
  dismissSnackbar,
  dismissSnackbarCompleted,
  getSnackbar,
  showSnackbarCompleted,
  RootState,
} from '~/store'

import { Icon } from './icon'

type SnackbarInnerProps = {
  snackbar: { title: string; message: string } | null
  showSnackbarCompleted: typeof showSnackbarCompleted
  dismissSnackbar: typeof dismissSnackbar
  dismissSnackbarCompleted: typeof dismissSnackbarCompleted
}

export function SnackbarInner({
  snackbar,
  showSnackbarCompleted,
  dismissSnackbar,
  dismissSnackbarCompleted,
}: SnackbarInnerProps) {
  return (
    <Transition
      native
      items={snackbar}
      from={{
        opacity: 0,
        transform: 'perspective(1px) translate(-50%, 180%) scale(0.9)',
      }}
      enter={{
        opacity: 1,
        transform: 'perspective(1px) translate(-50%, 0) scale(1)',
      }}
      leave={{
        opacity: 0,
        transform: 'perspective(1px) translate(-50%, 180%) scale(0.9)',
      }}
      onDestroyed={hide =>
        hide ? dismissSnackbarCompleted() : showSnackbarCompleted()
      }
    >
      {snackbar =>
        snackbar &&
        (style => (
          <animated.div className="Snackbar" style={style}>
            <Icon name="git-pull-request" className="Snackbar__icon" />
            <div className="Snackbar__body">
              <h4 className="Snackbar__title">{snackbar.title}</h4>
              <p className="Snackbar__message">{snackbar.message}</p>
            </div>
            <a
              className="Snackbar__action"
              target="_blank"
              href="https://github.com/thebrodmann/deox"
              onClick={dismissSnackbar}
            >
              Contribute
            </a>
          </animated.div>
        ))
      }
    </Transition>
  )
}

export const Snackbar = connect(
  (state: RootState) => ({
    snackbar: getSnackbar(state),
  }),
  { showSnackbarCompleted, dismissSnackbar, dismissSnackbarCompleted }
)(SnackbarInner)
