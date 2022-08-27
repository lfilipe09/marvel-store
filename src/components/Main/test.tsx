import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithTheme } from 'utils/tests/test-utils'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
