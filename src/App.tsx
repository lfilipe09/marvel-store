import React from 'react'
import light from './styles/theme'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from 'hooks/useUser'
import { AuthProvider } from 'hooks/useAuth'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <ThemeProvider theme={light}>
            <GlobalStyles />
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
