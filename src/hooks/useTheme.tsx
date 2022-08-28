import React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

export interface CartDetailsProviderProps {
  children: ReactNode
}

export type CustomThemeOptions = 'red' | 'blue' | 'black'

export type CustomThemeProps = {
  customTheme: CustomThemeOptions
  handleCustomTheme: (theme: CustomThemeOptions) => void
}

export const CustomThemeContext = createContext<CustomThemeProps>(
  {} as CustomThemeProps
)

export function CustomThemeProvider({ children }: CartDetailsProviderProps) {
  const [customTheme, setCustomTheme] = useState<CustomThemeOptions>(() => {
    const storagedTheme = getStorageItem('theme')

    //arrumando o carrinho que já vem sem amount

    if (storagedTheme) {
      return storagedTheme
    }

    return 'red'
  })

  const handleCustomTheme = (theme: CustomThemeOptions) => {
    setCustomTheme(theme)
    setStorageItem('theme', theme)
  }

  return (
    <CustomThemeContext.Provider
      value={{
        customTheme,
        handleCustomTheme
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  )
}

export function useCustomTheme(): CustomThemeProps {
  const context = useContext(CustomThemeContext)

  return context
}
