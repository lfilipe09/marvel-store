import React from 'react'
import { render, screen } from 'utils/test-utils'

import ComicCard from '.'

const props = {
  imgUrl:
    'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
  slug: '/',
  id: 1,
  title: 'example'
}

describe('<ComicCard />', () => {
  it('should render correctly', () => {
    render(<ComicCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: `${props.title} Veja mais` })
    ).toHaveAttribute('href', `/`)
  })
})
