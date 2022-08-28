import React from 'react'
import red from './styles/themes/red'
import blue from './styles/themes/blue'
import black from './styles/themes/black'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from 'hooks/useUser'
import { AuthProvider } from 'hooks/useAuth'
import { useCustomTheme } from 'hooks/useTheme'

function App() {
  const { customTheme } = useCustomTheme()
  return (
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <ThemeProvider
            theme={
              !customTheme
                ? red
                : customTheme === 'red'
                ? red
                : customTheme === 'blue'
                ? blue
                : black
            }
          >
            <GlobalStyles />
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
