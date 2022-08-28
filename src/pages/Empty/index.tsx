import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import React from 'react'

import * as S from './styles'

export function Empty() {
  return (
    <>
      <S.MenuWrapper>
        <Container>
          <Menu />
        </Container>
      </S.MenuWrapper>
      <S.EmptyWrapper>
        <S.Empty src={'/img/empty.png'} />
        <S.EmptyMessage>Oops, nothing here to see!</S.EmptyMessage>
      </S.EmptyWrapper>
      <Container>
        <Footer />
      </Container>
    </>
  )
}
