import React, { useEffect, useState } from 'react'
import { Search } from '@styled-icons/feather'
import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import ComicCard, { ComicCardProps } from 'components/ComicCard'
import ComicCardSlider from 'components/ComicCardSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import TextField from 'components/TextField'
import { heroBannerMapper, mainCardsMapper } from 'utils/mappers'
import { fetchAPIData } from '../../services/api'

import * as S from './styles'

export type ComicProps = {
  heroBanner: BannerProps[]
  mainCards: ComicCardProps[]
  secondaryCards: ComicCardProps[]
}

export function Home() {
  const [comics, setComics] = useState<ComicProps>()
  const [collection, setCollection] = useState<ComicCardProps[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function callDataAPI() {
      setLoading(true)
      const comicsData = await fetchAPIData({})
      const heroBanner = heroBannerMapper(comicsData).slice(0, 4)
      const mainCards = mainCardsMapper(comicsData).slice(5, 11)
      const secondaryCards = mainCardsMapper(comicsData).slice(12, 20)
      const collectionCards = mainCardsMapper(comicsData)
      setComics({
        heroBanner,
        mainCards,
        secondaryCards
      })
      setCollection(collectionCards)
      setLoading(false)
    }
    callDataAPI()
  }, [])

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <S.Wrapper>
          <S.MenuWrapper>
            <Container>
              <Menu />
            </Container>
          </S.MenuWrapper>
          <Container>
            <BannerSlider items={comics?.heroBanner ?? []} />
          </Container>
          <Container>
            <S.SliderTitleWrapper>
              <Heading size={'huge'} color={'black'}>
                Principais lançamentos
              </Heading>
              <ComicCardSlider
                color={'black'}
                items={comics?.mainCards ?? []}
              />
            </S.SliderTitleWrapper>
          </Container>
          <Container>
            <S.SliderTitleWrapper>
              <Heading size={'huge'} color={'black'}>
                Confira também:{' '}
              </Heading>
              <ComicCardSlider
                color={'black'}
                items={comics?.secondaryCards ?? []}
              />
            </S.SliderTitleWrapper>
          </Container>
          <S.CollectionWrapper>
            <Container>
              <S.CollectionHeaderWrapper>
                <Heading size={'huge'} color={'white'}>
                  Acervo
                </Heading>
                <TextField
                  icon={<Search size={'1.5rem'} strokeWidth={2} />}
                  placeholder={'Busque sua comics'}
                  inputHeight={'small'}
                  outsideIcon={true}
                />
              </S.CollectionHeaderWrapper>
              <S.CollectionItemsWrapper>
                {collection.map((card) => (
                  <ComicCard
                    key={card.id}
                    imgUrl={card.imgUrl}
                    id={card.id}
                    slug={card.slug}
                    title={card.title}
                  />
                ))}
              </S.CollectionItemsWrapper>
            </Container>
          </S.CollectionWrapper>
          <S.FooterWrapper>
            <Container>
              <Footer />
            </Container>
          </S.FooterWrapper>
        </S.Wrapper>
      )}
    </>
  )
}
