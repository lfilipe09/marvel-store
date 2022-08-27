import React from 'react'

import ComicCard, { ComicCardProps } from 'components/ComicCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'
import { ArrowLeftCircle, ArrowRightCircle } from '@styled-icons/feather'

export type ComicCardSliderProps = {
  items: ComicCardProps[]
  color: 'white' | 'black'
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 5.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.5
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.8
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.3
      }
    }
  ],
  nextArrow: <ArrowRightCircle aria-label="next games" />,
  prevArrow: <ArrowLeftCircle aria-label="previous games" />
}

const ComicCardSlider = ({ items, color = 'black' }: ComicCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ComicCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ComicCardSlider
