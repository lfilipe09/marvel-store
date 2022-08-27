import React from 'react'
import light from './styles/theme'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
