import { ArrowRight, Book, Box } from '@styled-icons/feather'
import Button from 'components/Button'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import ShowCardSlider from 'components/ShowCardSlider'
import Spinner from 'components/Spinner'
import WishlistButton from 'components/WishlistButton'
import { useAuth } from 'hooks/useAuth'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchAPIData } from 'services/api'
import {
  singleComicCharacterMapper,
  singleComicCreatorsMapper,
  singleComicMapper
} from 'utils/mappers'
import { convertToSlug } from 'utils/slug'

import * as S from './styles'

export type GalleryProps = {
  imgUrl: string
}

export type CreatorProps = {
  firstName?: string
  lastName?: string
  url?: string
  id?: number
}

export type CharacterProps = {
  imgUrl: string
  title?: string
  slug?: string
}

export type SingleComicProps = {
  id: number
  imgUrl: string
  title: string
  description: string
  variantDescription: string
  format: string
  pageCount: number
  gallery: GalleryProps[]
  creators: CreatorProps[]
  characters: CharacterProps[]
}

export function Comics() {
  const { validateAuth } = useAuth()
  const navigate = useNavigate()
  const params = useParams()
  const [comic, setComic] = useState<SingleComicProps>({} as SingleComicProps)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const session = validateAuth()
    !session && navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function callDataAPI() {
      setLoading(true)
      const comicData = await fetchAPIData({ comicId: params.id })
      const singleComic = singleComicMapper(comicData)

      let singleComicCreators: CreatorProps[] = []

      if (singleComic[0].creators.available > 0) {
        const ComicCreators = await fetchAPIData({
          creatorId: singleComic[0].id
        })
        singleComicCreators = singleComicCreatorsMapper(ComicCreators)
      }

      let singleCharacterCreators: CharacterProps[] = []

      if (singleComic[0].characters.available > 0) {
        const ComicCharacters = await fetchAPIData({
          characterId: singleComic[0].id
        })
        singleCharacterCreators = singleComicCharacterMapper(ComicCharacters)
      }

      setComic({
        id: singleComic[0].id,
        imgUrl: singleComic[0].imgUrl,
        title: singleComic[0].title,
        description: singleComic[0].description ?? '',
        variantDescription: singleComic[0].variantDescription,
        format: singleComic[0].format,
        pageCount: singleComic[0].pageCount,
        gallery: singleComic[0].gallery.map((image) => ({
          imgUrl: image.path.includes('image_not_available')
            ? 'https://i.ibb.co/gZk8B85/marvel-empty-Prancheta-1.png'
            : `${image.path}/landscape_incredible.${image.extension}`
        })),
        creators: singleComicCreators,
        characters: singleCharacterCreators
      })
      setLoading(false)
    }
    callDataAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading ? (
        <S.LoadingWrapper>
          <Spinner />
        </S.LoadingWrapper>
      ) : (
        <S.Wrapper>
          <S.MenuWrapper>
            <Container>
              <Menu />
            </Container>
          </S.MenuWrapper>
          <Container>
            <S.ComicDataWrapper>
              <S.ImageContent imgUrl={comic.imgUrl} />
              <S.ContentWrapper>
                <S.MainInfo>
                  <Heading color={'black'}>{comic.title}</Heading>
                  <WishlistButton
                    hasText={true}
                    wishlistItem={{
                      id: comic.id,
                      title: comic.title,
                      imgUrl: comic.imgUrl,
                      slug: `comics/${params.id}/${convertToSlug(
                        params.name as string
                      )}`
                    }}
                    size={'small'}
                  />
                  {comic.description && (
                    <S.Description>
                      <div
                        dangerouslySetInnerHTML={{ __html: comic.description }}
                      />
                    </S.Description>
                  )}

                  {comic.variantDescription && (
                    <S.VariantDescription>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: comic.variantDescription
                        }}
                      />
                    </S.VariantDescription>
                  )}
                </S.MainInfo>
                <S.IconGroupWrapper>
                  <S.IconTitleWrapper>
                    <Box />
                    <S.IconTextContent>
                      <S.IconTitle>Format</S.IconTitle>
                      <S.IconDescription>{comic.format}</S.IconDescription>
                    </S.IconTextContent>
                  </S.IconTitleWrapper>

                  {comic.pageCount > 0 && (
                    <S.IconTitleWrapper>
                      <Book />
                      <S.IconTextContent>
                        <S.IconTitle>Number of pages</S.IconTitle>
                        <S.IconDescription>{comic.pageCount}</S.IconDescription>
                      </S.IconTextContent>
                    </S.IconTitleWrapper>
                  )}
                </S.IconGroupWrapper>
                {comic.creators && comic.creators.length > 0 && (
                  <S.CreatorWrapper>
                    <S.IconTitle>Creators</S.IconTitle>
                    <S.CreatorMainWrapper>
                      {comic.creators?.map((creator) => (
                        <S.CreatorInfoWrapper key={creator.id}>
                          <S.CreatorTitle>
                            {creator.firstName}&nbsp;
                            <b>{creator.lastName}</b>
                          </S.CreatorTitle>
                          <Button
                            minimal
                            size={'small'}
                            as={'a'}
                            href={creator.url}
                            icon={
                              <ArrowRight size={'1.5rem'} strokeWidth={'1px'} />
                            }
                          >
                            Veja mais
                          </Button>
                        </S.CreatorInfoWrapper>
                      ))}
                    </S.CreatorMainWrapper>
                  </S.CreatorWrapper>
                )}
                {comic.gallery && comic.gallery.length > 0 && (
                  <S.CarouselWrapper>
                    <S.IconTitle>Gallery</S.IconTitle>

                    <ShowCardSlider items={comic.gallery} color={'black'} />
                  </S.CarouselWrapper>
                )}
                {comic.characters && comic.characters.length > 0 && (
                  <S.CarouselWrapper>
                    <S.IconTitle>Characters</S.IconTitle>

                    <ShowCardSlider items={comic.characters} color={'black'} />
                  </S.CarouselWrapper>
                )}
              </S.ContentWrapper>
            </S.ComicDataWrapper>
          </Container>
          <Container>
            <Footer />
          </Container>
        </S.Wrapper>
      )}
    </>
  )
}
