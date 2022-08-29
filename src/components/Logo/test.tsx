import React from 'react'
import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a bigger logo', () => {
    render(<Logo color="white" size="large" />)
    expect(screen.getByLabelText(/Marvel/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo color="white" />)
    expect(screen.getByLabelText(/Marvel/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })
})
