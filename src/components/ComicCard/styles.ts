import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 27rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 1rem;
  ${media.greaterThan('medium')`
    width: 19rem;
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: ${theme.border.radius};
    cursor: pointer;
    svg {
      width: 2.5rem;
    }
  `}
`
export type ImageContentProps = { imgUrl: string }

export const ImageContent = styled.div<ImageContentProps>`
  ${({ imgUrl }) => css`
    height: 100%;
    background-image: url(${imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `}
`

export const TitleWrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  button {
    padding: 0px;
    grid-gap: 0px;
  }
`
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    line-height: 1.8rem; ;
  `}
`
