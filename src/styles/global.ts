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
  html, body {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
