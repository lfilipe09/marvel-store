import React from 'react'

import WishlistButton from 'components/WishlistButton'

import * as S from './styles'
import Button from 'components/Button'
import { ArrowRight } from '@styled-icons/feather'

export type ComicCardProps = {
  id: number
  slug: string
  imgUrl: string
  title: string
}

const ComicCard = ({ id, slug, imgUrl, title }: ComicCardProps) => (
  <S.Wrapper href={slug}>
    <S.FavButton>
      <WishlistButton wishlistItem={{ id, imgUrl, slug, title }} />
    </S.FavButton>

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

    <S.ImageContent imgUrl={imgUrl} />
  </S.Wrapper>
)

export default ComicCard
