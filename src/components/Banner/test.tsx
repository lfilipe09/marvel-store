import React from 'react'
import { render, screen } from 'utils/test-utils'

import Banner from '.'

const props = {
  imgUrl: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
