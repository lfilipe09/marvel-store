import { ArrowRight } from '@styled-icons/feather'
import Button from 'components/Button'
import React from 'react'

import * as S from './styles'

export type ShowCardProps = {
  slug?: string
  imgUrl: string
  title?: string
}

const ShowCard = ({ slug, imgUrl, title }: ShowCardProps) => (
  <S.Wrapper hasSlug={!!slug} href={slug}>
    {!!title && (
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <Button
          minimal
          size={'small'}
          icon={<ArrowRight size={'1.5rem'} strokeWidth={'1px'} />}
        >
          Veja mais
        </Button>
      </S.TitleWrapper>
    )}
    <S.ImageContent imgUrl={imgUrl} />
  </S.Wrapper>
)

export default ShowCard
