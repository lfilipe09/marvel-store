import React from 'react'
import light from './styles/theme'
import Main from 'components/Main'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
