import React from 'react'
import { useState } from 'react'
import { CustomThemeOptions, useCustomTheme } from '../../hooks/useTheme'
import { mockDropdown } from './mock'
import * as S from './styles'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { customTheme, handleCustomTheme } = useCustomTheme()
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Icon onClick={() => setIsOpen(!isOpen)}>
        <S.Image src={mockDropdown[customTheme]} />
      </S.Icon>

      <S.Content aria-hidden={!isOpen}>
        {Object.keys(mockDropdown).map((theme) => {
          return (
            theme !== customTheme && (
              <S.Button
                key={theme}
                onClick={() => {
                  console.log('executou', theme)
                  setIsOpen(false)
                  handleCustomTheme(theme as CustomThemeOptions)
                }}
              >
                <S.Image src={mockDropdown[theme as CustomThemeOptions]} />
              </S.Button>
            )
          )
        })}
      </S.Content>
    </S.Wrapper>
  )
}
export default Dropdown
