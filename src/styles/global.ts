import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
  theme?: DefaultTheme | undefined
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

  @font-face {
  font-family: 'GothamPro';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
      url('/fonts/GothamPro-Light.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'GothamPro';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/GothamPro.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'GothamPro';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/GothamPro-Bold.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.xsmall};
      background-color: ${theme.colors.lightGray};
    }
  `}

  html {
    font-size: 62.5%;
  }
`

export default GlobalStyles
