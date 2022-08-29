import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/themes/red'
import GlobalStyles from '../src/styles/global'
import { AuthContext, AuthInitialValues } from '../src/hooks/useAuth'

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
      },
      {
        name: 'bornlogic-primary',
        value: theme.colors.primary
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider
        value={{
          ...AuthInitialValues,
          ...(context?.args?.authContextValue || {}),
          ...context.args
        }}
      >
      <GlobalStyles />
      <Story />
      </AuthContext.Provider>
    </ThemeProvider>
  )
]
