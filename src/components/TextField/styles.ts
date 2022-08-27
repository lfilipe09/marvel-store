import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'
import { darken } from 'polished'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

const InputLabelWrapperModifier = {
  minimal: () => css`
    border: 0px;
    &:focus-within {
      outline: 0px;
    }
  `
}

type InputLabelWrapperProps = { minimal?: boolean; inputHeight: string }

export const InputLabelWrapper = styled.div<InputLabelWrapperProps>`
  ${({ theme, minimal, inputHeight }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-radius: ${inputHeight == 'big' ? theme.border.radius : '0.3rem'};
    padding: ${inputHeight == 'big' ? '0.6rem' : '0'}
      ${inputHeight == 'big' ? theme.spacings.xsmall : '0.5rem'};
    border: 1px solid ${theme.colors.white};
    &:focus-within {
      border: 1.5px solid ${theme.colors.secondary};
    }
    ${minimal && InputLabelWrapperModifier.minimal()}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    input[type='password']:not(:placeholder-shown) {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
type InputProps = { inputHeight: string }
export const Input = styled.input<InputProps>`
  ${({ theme, inputHeight }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${inputHeight == 'big' ? theme.spacings.xxsmall : '0.3rem'} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    &::placeholder {
      color: ${darken(0.15, theme.colors.white)};
    }
    @-webkit-keyframes autofill {
      0%,
      100% {
        color: #666;
        background: transparent;
      }
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-animation-delay: 1s;
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
      -webkit-text-fill-color: ${theme.colors.white} !important;
      -webkit-background-clip: text;
      filter: none;
    }
  `}
`

export const InputInnerMask = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    &::placeholder {
      color: ${darken(0.15, theme.colors.white)};
    }
    //remover aquele autofill do google que deixa azulzinho
    //o filter none é pra remover do firefox que tem filtro só lá
    @-webkit-keyframes autofill {
      0%,
      100% {
        color: #666;
        background: transparent;
      }
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
      -webkit-text-fill-color: ${theme.colors.white} !important;
      -webkit-background-clip: text;
      filter: none;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    color: ${darken(0.15, theme.colors.white)};
    font-weight: ${theme.font.bold};
    cursor: pointer;
  `}
`
export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    color: ${darken(0.15, theme.colors.white)};
    & > svg {
      width: 100%;
    }
  `}
`

export const IconButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: transparent;
    cursor: pointer;
    & > svg {
      color: ${theme.colors.white};
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputLabelWrapper} {
      outline: 1.5px solid ${theme.colors.black};
      border: 0px;
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${InputLabelWrapper},
    ${Icon} {
      cursor: not-allowed;
      color: ${darken(0.5, theme.colors.white)};
      &::placeholder {
        color: currentColor;
      }
    }
    ${InputLabelWrapper} {
      border: 1px solid ${darken(0.5, theme.colors.white)};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  grid-gap: 0.5rem;
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
