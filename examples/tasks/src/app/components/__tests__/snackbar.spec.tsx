import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

import { Snackbar } from '../snackbar'

describe('<Snackbar />', () => {
    afterEach(cleanup)

    it('should not render anything when snackbar prop is null', () => {
        const action = jest.fn()

        const { container } = render(
            <Snackbar snackbar={null} dismissSnackbar={action} showSnackbarCompleted={action} dismissSnackbarCompleted={action} />,
        )

        expect(container.firstChild).toBeNull()
        expect(action).not.toBeCalled()
    })

    it('should render when snackbar has been defined', () => {
        const dismissSnackbar = jest.fn()
        const showSnackbarCompleted = jest.fn()
        const dismissSnackbarCompleted = jest.fn()

        const { getByText } = render(
            <Snackbar
                snackbar={{ title: 'Test', message: 'I do not need message' }}
                dismissSnackbar={dismissSnackbar}
                showSnackbarCompleted={showSnackbarCompleted}
                dismissSnackbarCompleted={dismissSnackbarCompleted}
            />,
        )

        expect(getByText('Test')).toBeTruthy()
        expect(getByText('I do not need message')).toBeTruthy()
    })

    it('should call dismissSnackbar on action click', () => {
        const dismissSnackbar = jest.fn()
        const action = jest.fn()

        const { getByText } = render(
            <Snackbar
                snackbar={{ title: 'Test', message: 'I do not need message' }}
                dismissSnackbar={dismissSnackbar}
                showSnackbarCompleted={action}
                dismissSnackbarCompleted={action}
            />,
        )

        fireEvent.click(getByText(/contribute/i))

        expect(dismissSnackbar).toBeCalled()
    })
})
