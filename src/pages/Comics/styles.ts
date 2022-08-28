import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.medium};
  `}
`

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`

export const ComicDataWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.small};
    ${media.greaterThan('large')`
      display: grid;
      grid-template-columns: 1fr 646px;
    `}
  `}
`

export type ImageContentProps = { imgUrl: string }

export const ImageContent = styled.div<ImageContentProps>`
  ${({ imgUrl }) => css`
    width: 18rem;
    height: 27rem;
    background-image: url(${imgUrl});
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ${media.greaterThan('large')`
      width: 27rem;
      height: 41rem;
      position: -webkit-sticky;
      position: sticky;
      top: 7%;
      margin: 0 auto;
    `}
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.small};
  `}
`

export const MainInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.small};
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    div {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const VariantDescription = styled.div`
  ${({ theme }) => css`
    padding-top: 1rem;
    color: ${theme.colors.black};
    border-top: 1px solid ${theme.colors.black};
    div {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const IconGroupWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-gap: ${theme.spacings.small};
  `}
`

export const IconTitleWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 34px 3fr;
    align-items: center;
    svg {
      width: 2rem;
      stroke: ${theme.colors.black};
    }
  `}
`

export const IconTextContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.black};
    flex-direction: column;
    grid-gap: 0.4rem;
  `}
`

export const IconTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-transform: uppercase;
    font-weight: 600;
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const IconDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const CreatorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.small};
  `}
`

export const CreatorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.4rem;
  a {
    padding: 0;
  }
`

export const CreatorTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 1.6rem;
  `}
`

export const CreatorMainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2rem;
`

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 3rem;
`
