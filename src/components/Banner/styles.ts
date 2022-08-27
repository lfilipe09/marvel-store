import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column-reverse;
  ${media.greaterThan('medium')`
    min-height: 40rem;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
      grid-gap: ${theme.spacings.small};
      justify-content: center;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      font-size: 3rem;
      line-height: 3.3rem;
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export type ImageContainerProps = { imgUrl: string }

export const ImageContainer = styled.div<ImageContainerProps>`
  ${({ imgUrl }) => css`
    min-height: 25rem;
    background-image: url(${imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
  `}
`
