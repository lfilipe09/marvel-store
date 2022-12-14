import React, {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'large' | 'medium' | 'small'
  color?: 'black' | 'white' | 'primary'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  minimal?: boolean
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    color = 'black',
    size = 'medium',
    fullWidth = false,
    icon,
    minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    color={color}
    ref={ref}
    {...props}
  >
    {!!children && <span>{children}</span>}
    {!!icon && icon}
  </S.Wrapper>
)

export default forwardRef(Button)
