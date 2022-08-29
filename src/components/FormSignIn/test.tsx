import React from 'react'
import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn onSubmit={() => true} />)

    expect(screen.getByText('E-mail')).toBeInTheDocument()
    expect(screen.getByText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /access platform/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })
})
