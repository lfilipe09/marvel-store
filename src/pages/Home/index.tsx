import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { ComicCardProps } from 'components/ComicCard'
import ComicCardSlider from 'components/ComicCardSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import React, { useEffect, useState } from 'react'
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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function callDataAPI() {
      setLoading(true)
      const comicsData = await fetchAPIData({})
      const heroBanner = heroBannerMapper(comicsData).slice(0, 4)
      const mainCards = mainCardsMapper(comicsData).slice(5, 11)
      const secondaryCards = mainCardsMapper(comicsData).slice(12, 20)
      setComics({
        heroBanner,
        mainCards,
        secondaryCards
      })
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
            <Heading color={'black'}>Principais lançamentos</Heading>
            <ComicCardSlider color={'black'} items={comics?.mainCards ?? []} />
          </Container>
          <Container>
            <Heading color={'black'}>Confira também: </Heading>
            <ComicCardSlider
              color={'black'}
              items={comics?.secondaryCards ?? []}
            />
          </Container>
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
