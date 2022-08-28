import React from 'react'

import * as S from './styles'

export type ShowCardProps = {
  slug?: string
  imgUrl: string
}

const ShowCard = ({ slug, imgUrl }: ShowCardProps) => (
  <S.Wrapper hasSlug={!!slug} href={slug}>
    <S.ImageContent imgUrl={imgUrl} />
  </S.Wrapper>
)

export default ShowCard
