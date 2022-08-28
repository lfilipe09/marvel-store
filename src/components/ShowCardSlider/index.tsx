import React from 'react'

import ShowCard, { ShowCardProps } from 'components/ShowCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'
import { ArrowLeftCircle, ArrowRightCircle } from '@styled-icons/feather'

export type ShowCardSliderProps = {
  items: ShowCardProps[]
  color: 'white' | 'black'
}

const settings: SliderSettings = {
  slidesToShow: 1.8,
  infinite: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2.4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
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
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 1.3
      }
    }
  ],
  nextArrow: <ArrowRightCircle aria-label="next games" />,
  prevArrow: <ArrowLeftCircle aria-label="previous games" />
}

const ShowCardSlider = ({ items, color = 'black' }: ShowCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ShowCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ShowCardSlider
