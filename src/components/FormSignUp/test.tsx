import React from 'react'
import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignUp onSubmit={() => true} />)

    expect(screen.getByText('E-mail')).toBeInTheDocument()
    expect(screen.getByText(/First name/i)).toBeInTheDocument()
    expect(screen.getByText(/Last name/i)).toBeInTheDocument()
    expect(screen.getByText(/CPF/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Create account/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })
})
