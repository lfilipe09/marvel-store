import '../../../.jest/match-media-mock'
import React from 'react'
import { render } from 'utils/test-utils'

import BannerSlider from '.'

const items = [
  {
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/detail.jpg',
    title: 'defy death 1',
    subtitle: '<p>Leia agora <strong>Fantastic Four</strong> disponível online',
    buttonLabel: 'Ler agora',
    buttonLink: '/'
  },
  {
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/detail.jpg',
    title: 'defy death 2',
    subtitle: '<p>Leia agora <strong>Fantastic Four</strong> disponível online',
    buttonLabel: 'Ler agora',
    buttonLink: '/'
  }
]

describe('<BannerSlider />', () => {
  it('should render with 1 active item', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
  })

  it('should render with the dots', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
