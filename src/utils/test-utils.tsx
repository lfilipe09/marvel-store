import React from 'react'
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AuthContext, AuthProps } from '../hooks/useAuth'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/themes/red'

const AuthInitialValues = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getAuth: () => null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  validateAuth: () => true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createAuth: () => {}
}

type CustomRenderProps = {
  cartProviderProps?: AuthProps
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = AuthInitialValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={cartProviderProps}>
        {ui}
      </AuthContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
