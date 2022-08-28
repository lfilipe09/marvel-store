import React from 'react'
import { useState } from 'react'
import { Menu as MenuIcon, User } from '@styled-icons/feather'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from '../Logo'
import * as S from './styles'
import Button from '../Button'
import MediaMatch from '../../components/MediaMatch'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

//dupla negação transforma em booleano para comparar de fato
const Menu = ({ loading }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <a href="/">
          <Logo aria-label="Marvel" color="primary" />
        </a>
      </S.LogoWrapper>

      {!loading && (
        <>
          <S.MenuGroup>
            <MediaMatch lessThan="medium">
              <S.LoginIcon>
                <Button
                  as="a"
                  href={'/profile'}
                  icon={<User aria-label={'Add to Wishlist'} />}
                  minimal
                ></Button>
              </S.LoginIcon>
            </MediaMatch>
            <MediaMatch greaterThan="medium">
              <Button
                color={'white'}
                as="a"
                href={'/profile'}
                size="medium"
                icon={<User aria-label={'Add to Wishlist'} size={'2rem'} />}
              >
                Profile
              </Button>
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />
            <S.MenuNav>
              <S.MenuLink href="/">Home</S.MenuLink>
            </S.MenuNav>
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
