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
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
    `}
  `}
`

export type ImageContentProps = { imgUrl: string }

export const ImageContent = styled.div<ImageContentProps>`
  ${({ imgUrl }) => css`
    width: 14rem;
    height: 27rem;
    background-image: url(${imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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

export const Description = styled.p``

export const VariantDescription = styled.p`
  ${({ theme }) => css`
    margin-top: 1rem;
    border-top: 1px solid ${theme.colors.black};
  `}
`

export const IconGroupWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-gap: ${theme.spacings.small};
  `}
`

export const IconTitleWrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr; ;
  `}
`

export const IconTextContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.small};
  `}
`

export const IconTitle = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 3rem;
`

export const IconDescription = styled.p`
  font-size: 3rem;
`

export const CreatorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.small};
  `}
`

export const CreatorInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-gap: ${theme.spacings.small};
  `}
`

export const CreatorTitle = styled.p`
  font-size: 3rem;
`
