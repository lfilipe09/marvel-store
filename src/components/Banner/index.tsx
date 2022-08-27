import { ArrowRight } from '@styled-icons/feather'
import React from 'react'
import Button from '../../components/Button'
import * as S from './styles'

export type BannerProps = {
  imgUrl: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  imgUrl,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <>
    <S.Wrapper>
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button
          color={'white'}
          as="a"
          href={buttonLink}
          size="large"
          icon={<ArrowRight size={'3rem'} strokeWidth={'2px'} />}
        >
          {buttonLabel}
        </Button>
      </S.Caption>
      <S.ImageContainer imgUrl={imgUrl} />
    </S.Wrapper>
  </>
)

export default Banner
