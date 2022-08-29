import React from 'react'
import { render, screen } from 'utils/test-utils'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading ', () => {
    render(<Heading color="black">Bornlogic</Heading>)
    expect(screen.getByRole('heading', { name: /bornlogic/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading when color is passed', () => {
    render(<Heading color="white">bornlogic</Heading>)
    expect(screen.getByRole('heading', { name: /bornlogic/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading with a small size', () => {
    render(
      <Heading color="black" size="small">
        bornlogic
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /bornlogic/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /bornlogic/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    render(
      <Heading color="black" size="huge">
        bornlogic
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /bornlogic/i })).toHaveStyle({
      'font-size': '2.8rem'
    })
  })
})
