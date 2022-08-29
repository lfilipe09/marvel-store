import React from 'react'
import theme from 'styles/themes/red'
import { render } from 'utils/test-utils'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>Bornlogic</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-bczRLJ jLAeir"
      >
        <span>
          Bornlogic
        </span>
      </div>
    `)
  })
})
