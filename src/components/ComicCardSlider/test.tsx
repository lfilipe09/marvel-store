import React from 'react'
import '../../../.jest/match-media-mock'
import { render, screen } from 'utils/test-utils'

import ComicCardSlider from '.'
const items = [
  {
    title: 'example',
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
    slug: '/',
    id: 1
  },
  {
    title: 'example',
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_fantastic.jpg',
    slug: '/',
    id: 1
  },
  {
    title: 'example',
    imgUrl:
      'http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee/portrait_fantastic.jpg',
    slug: '/',
    id: 1
  },
  {
    title: 'example',
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_fantastic.jpg',
    slug: '/',
    id: 1
  },
  {
    title: 'example',
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
    slug: '/',
    id: 1
  },
  {
    title: 'example',
    imgUrl:
      'http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee/portrait_fantastic.jpg',
    slug: '/',
    id: 1
  }
]

describe('<ComicCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(
      <ComicCardSlider color="black" items={items} />
    )
    expect(container.querySelectorAll('.slick-active')).toHaveLength(6)
  })

  it('should render white arrows if color passed', () => {
    render(<ComicCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
