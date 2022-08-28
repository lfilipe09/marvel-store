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
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'
import { useAuth } from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export type ComicProps = {
  heroBanner: BannerProps[]
  mainCards: ComicCardProps[]
  secondaryCards: ComicCardProps[]
}

export type PaginationProps = {
  offset: number
  total: number
}

export function Home() {
  const { validateAuth } = useAuth()
  const navigate = useNavigate()
  const [comics, setComics] = useState<ComicProps>()
  const [collection, setCollection] = useState<ComicCardProps[]>([])
  const [pagination, setPagination] = useState<PaginationProps>(
    {} as PaginationProps
  )
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)

  useEffect(() => {
    const session = validateAuth()
    !session && navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function callDataAPI() {
      setLoading(true)
      const comicsData = await fetchAPIData({ limit: 30, offset: 80 })
      const collectionData = await fetchAPIData({ limit: 30 })
      const heroBanner = heroBannerMapper(comicsData).slice(7, 15)
      const mainCards = mainCardsMapper(comicsData).slice(0, 6)
      const secondaryCards = mainCardsMapper(comicsData).slice(16, 25)
      const collectionCards = mainCardsMapper(collectionData)
      setComics({
        heroBanner,
        mainCards,
        secondaryCards
      })
      setCollection(collectionCards)
      setPagination({
        offset: comicsData.data.offset,
        total: comicsData.data.total
      })
      setLoading(false)
    }
    callDataAPI()
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const comicsData = await fetchAPIData({
        titleStartsWith: searchTerm,
        limit: 30
      })
      const collectionCards = mainCardsMapper(comicsData)
      setCollection(collectionCards)
      setPagination({
        offset: comicsData.data.offset,
        total: comicsData.data.total
      })
      setSearchLoading(false)
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

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
                  onInputChange={(term) => {
                    setSearchLoading(true)
                    setSearchTerm(term)
                  }}
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
                {searchLoading && (
                  <S.LoadingBackground>
                    <Spinner />
                  </S.LoadingBackground>
                )}
              </S.CollectionItemsWrapper>
              <S.PaginationWrapper>
                <Pagination
                  numberOfPages={Math.ceil(pagination.total / 30)}
                  onPageChange={async (pageNumber) => {
                    console.log()
                    setSearchLoading(true)
                    const comicsData = await fetchAPIData(
                      !searchTerm || searchTerm === ''
                        ? {
                            offset: (pageNumber - 1) * 30,
                            limit: 30
                          }
                        : {
                            offset: (pageNumber - 1) * 30,
                            titleStartsWith: searchTerm,
                            limit: 30
                          }
                    )
                    const collectionCards = mainCardsMapper(comicsData)
                    setCollection(collectionCards)
                    setPagination({
                      offset: comicsData.data.offset,
                      total: comicsData.data.total
                    })
                    setSearchLoading(false)
                  }}
                  inputSearchTerm={searchTerm}
                />
              </S.PaginationWrapper>
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
