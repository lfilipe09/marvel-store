import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'bornlogic-light',
    values: [
      {
        name: 'bornlogic-light',
        value: theme.colors.white
      },
      {
        name: 'bornlogic-dark',
        value: theme.colors.black
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
