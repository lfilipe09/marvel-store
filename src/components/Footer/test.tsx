import React from 'react'
import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 2 column topics', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByRole('heading', { name: /social media/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /address/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
