import React from 'react'
import { render, screen } from 'utils/test-utils'

import ShowCard from '.'

const props = {
  imgUrl:
    'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
  slug: '/',
  id: 1,
  title: 'example'
}

describe('<ShowCard />', () => {
  it('should render correctly', () => {
    render(<ShowCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: `${props.title} Veja mais` })
    ).toHaveAttribute('href', `/`)
  })
})
