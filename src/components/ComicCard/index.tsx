import React from 'react'

import WishlistButton from 'components/WishlistButton'

import * as S from './styles'

export type ComicCardProps = {
  id: string
  slug: string
  imgUrl: string
}

const ComicCard = ({ id, slug, imgUrl }: ComicCardProps) => (
  <S.Wrapper href={slug}>
    <S.FavButton>
      <WishlistButton id={id} />
    </S.FavButton>

    <S.ImageContent imgUrl={imgUrl} />
  </S.Wrapper>
)

export default ComicCard
