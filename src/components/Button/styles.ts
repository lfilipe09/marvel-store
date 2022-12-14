import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'
import { darken } from 'polished'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal' | 'color'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    grid-gap: 2rem;
    svg {
      width: 2.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
    &:hover {
      color: ${darken(0.2, theme.colors.primary)};
    }
    &:after {
      background-color: transparent;
    }
    &:before {
      background-color: transparent;
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled, color }) => css`
    background: ${theme.colors.black};
    cursor: pointer;
    color: ${color === 'black' || color === 'primary'
      ? theme.colors.white
      : theme.colors.black};
    border: 0;
    font-family: ${theme.font.family};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    position: relative;
    transition: all 0.3s;
    width: fit-content;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${color === 'black'
        ? theme.colors.black
        : color === 'primary'
        ? theme.colors.primary
        : theme.colors.white};
      z-index: -2;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: ${color === 'primary'
        ? theme.colors.black
        : theme.colors.primary};
      transition: all 0.3s;
      z-index: -1;
    }
    &:hover {
      color: ${theme.colors.white};
      &:before {
        width: 100%;
      }
    }
    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
