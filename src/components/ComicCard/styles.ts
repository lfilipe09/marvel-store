import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 19rem;
  height: 27rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
  `}
`
