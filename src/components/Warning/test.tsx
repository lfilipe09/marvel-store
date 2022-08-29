import React from 'react'
import { render, screen } from '../../utils/test-utils'

import WarningAlert from '.'

describe('<Warning />', () => {
  it('should render the heading', () => {
    render(<WarningAlert title={'Example'} />)

    expect(screen.getByText('Example')).toBeInTheDocument()
  })
})
