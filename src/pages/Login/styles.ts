import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Logo = styled.img`
  width: 11rem;
  margin-bottom: 5rem;
  ${media.lessThan('medium')`
      margin-top: 4rem;
      margin-bottom: 1rem;
  `}
`

export const LogoWrapper = styled.div`
  margin-bottom: 5rem;
  ${media.lessThan('medium')`
    display:flex ;
    align-items: center;
    justify-content: center
  `}
`

export const MainTitle = styled.p`
  ${() => css`
    ${media.lessThan('medium')`
      text-align:center;
    `}
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: 1rem 0;
    letter-spacing: 0.1rem;
    > a {
      text-decoration: none;
      color: ${theme.colors.black};
    }
    ${media.lessThan('medium')`
      text-align:center;
    `}
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background: ${theme.gradients.blackMainDesktopGradient};
    ${media.lessThan('medium')`
      background: ${theme.gradients.blackMobileGradient};
    `}
    display: flex;
    align-items: center;
  `}
`

export const WrapperImg = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('https://i.ibb.co/mNVz01X/wp6223420.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  ${media.lessThan('medium')`
    background-size: contain;
  `}
`

export const FormWrapper = styled.div`
  max-width: 30rem;
  margin: 2rem 0;
  ${media.lessThan('medium')`
    margin: 0 auto;
  `}
`
