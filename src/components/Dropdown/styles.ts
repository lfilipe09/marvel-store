import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Icon = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.black};
    position: relative;
    display: flex;
    align-items: center;
    width: 2rem;
    z-index: ${theme.layers.alwaysOnTop};
    ${media.lessThan('medium')`
      padding-right: 0rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    grid-gap: 0.3rem;
    top: 6rem;
    left: -0.2px;
    z-index: ${theme.layers.alwaysOnTop};
    ${media.lessThan('medium')`
      top: 6rem;
      right: -0.8rem;
    `}
  `}
`

type WrapperProps = {
  isOpen?: boolean
}
const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}
export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    /* width: max-content; */
    ${Content} {
      transition: transform 0.2s ease-in, opacity 0.2s ease-in;
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`

export const Button = styled.button`
  ${() => css`
    border: 0;
    background: transparent;
    transition: color 0.2s ease-in;
  `}
`

export const Image = styled.img`
  ${() => css`
    width: 5rem;
    cursor: pointer;
  `}
`
